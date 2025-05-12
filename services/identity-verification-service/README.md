# Dịch vụ Xác thực Định danh (Identity Verification Service)

## Tổng quan
**Dịch vụ Xác thực Định danh** chịu trách nhiệm xác minh danh tính khách hàng thông qua quy trình "Biết khách hàng của bạn" điện tử (eKYC). Dịch vụ này xử lý việc xác thực các tài liệu do người dùng cung cấp như thẻ căn cước công dân, hộ chiếu và đối chiếu nhận dạng khuôn mặt với hồ sơ chính thức.

Dịch vụ này tích hợp với các nhà cung cấp dịch vụ xác thực danh tính bên ngoài để đảm bảo khách hàng được xác định đúng trước khi tiến hành các đơn đăng ký vay.

Dịch vụ được xây dựng bằng **Python** với **FastAPI** để xử lý API hiệu quả và **MySQL** làm cơ sở dữ liệu.

## Tính năng chính
- Xử lý ảnh Căn cước công dân: Trích xuất thông tin khách hàng từ ảnh CCCD
- Xác thực thông tin: So sánh thông tin CCCD được trích xuất với hồ sơ chính thức
- Xác minh tài liệu: Duy trì hồ sơ về trạng thái xác minh cho tất cả tài liệu khách hàng
- Lịch sử xác minh: Theo dõi lịch sử đầy đủ các lần xác minh để kiểm toán
- Báo cáo trạng thái: Cung cấp trạng thái xác minh cho các dịch vụ khác

## Thiết lập
- Xây dựng bằng `Dockerfile` đã cung cấp.
- Mã nguồn nằm trong thư mục `app/`.
- Chạy cục bộ thông qua lệnh:
  ```bash
  docker-compose build identity-verification-service
  docker-compose up -d identity-verification-service
  ```

## Quy trình xử lý Căn cước công dân
1. Khách hàng tải lên ảnh CCCD qua API
2. Dịch vụ trích xuất thông tin định danh từ ảnh (số CCCD, họ tên, ngày sinh, v.v.)
3. Thông tin được trích xuất được xác minh với cơ sở dữ liệu chính thức
4. Kết quả xác minh được lưu trữ và trả về cho người dùng
5. Trạng thái xác minh được cung cấp cho các dịch vụ khác

## Endpoints API

### Endpoints chính
- `POST /api/verifications/verifications`: Tạo yêu cầu xác minh mới
- `GET /api/verifications/verifications`: Lấy danh sách yêu cầu xác minh
- `GET /api/verifications/verifications/{id}`: Lấy chi tiết của một yêu cầu xác minh cụ thể
- `PUT /api/verifications/verifications/{id}`: Cập nhật trạng thái yêu cầu xác minh
- `POST /api/verifications/verifications/documents`: Tải lên tài liệu để xác minh (trích xuất thông tin từ CCCD)
- `POST /api/verifications/verifications/id-card/verify/{customer_id}`: Xác minh thông tin CCCD đã trích xuất
- `GET /api/verifications/verifications/customers/{customer_id}/status`: Lấy trạng thái xác minh tổng thể
- `GET /api/verifications/verifications/history/{customer_id}`: Lấy lịch sử xác minh

## Hướng dẫn Test API với Postman

### 1. Tải lên tài liệu căn cước công dân (OCR)

1. **Mở Postman**
2. **Tạo một request mới**:
   - Method: `POST`
   - URL: `http://localhost:8008/api/verifications/verifications/documents`
3. **Thiết lập request**:
   - Chọn tab "Params" và thêm hai Query Params:
     - `customer_id`: 1005 (Hoặc bất kỳ ID nào)
     - `document_type`: ID_CARD
   - Chọn tab "Body"
   - Chọn "form-data"
   - Thêm field key là "file" và chọn Type là "File"
   - Nhấp vào "Select Files" và chọn ảnh căn cước công dân của bạn (định dạng JPG/PNG)
4. **Gửi request**:
   - Nhấn nút "Send"
   - Phản hồi thành công sẽ trả về:
     ```json
     {
       "document_id": 6,
       "extracted_info": {
         "id_number": "123456789012",
         "full_name": "Nguyễn Văn A",
         "date_of_birth": "01/01/1990",
         "gender": "Nam",
         "nationality": "Việt Nam",
         "place_of_origin": "Hà Nội",
         "place_of_residence": "123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh",
         "expiry_date": "01/01/2030",
         "id_card_type": "Căn cước công dân"
       }
     }
     ```

### 2. Tạo yêu cầu xác minh mới

1. **Tạo một request mới**:
   - Method: `POST`
   - URL: `http://localhost:8008/api/verifications/verifications`
2. **Thiết lập request**:
   - Chọn tab "Body"
   - Chọn "raw" và định dạng "JSON"
   - Thêm JSON:
   ```json
   {
     "customer_id": 1005,
     "document_ids": [6],
     "verification_type": "ID_VERIFICATION"
   }
   ```
   - Lưu ý: `document_ids` nên sử dụng ID đã nhận từ request trước đó.
3. **Gửi request**:
   - Nhấn nút "Send"
   - Phản hồi thành công sẽ trả về:
   ```json
   {
     "id": 7
   }
   ```

### 3. Xác minh thông tin căn cước

1. **Tạo một request mới**:
   - Method: `POST`
   - URL: `http://localhost:8008/api/verifications/verifications/id-card/verify/1005`
   - (Thay 1005 bằng customer_id bạn muốn xác minh)
2. **Thiết lập request**:
   - Chọn tab "Body"
   - Chọn "raw" và định dạng "JSON"
   - Thêm JSON với thông tin trích xuất từ bước 1:
   ```json
   {
     "id_number": "123456789012",
     "full_name": "Nguyễn Văn A",
     "date_of_birth": "01/01/1990",
     "gender": "Nam",
     "nationality": "Việt Nam",
     "place_of_origin": "Hà Nội",
     "place_of_residence": "123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh",
     "expiry_date": "01/01/2030",
     "id_card_type": "Căn cước công dân"
   }
   ```
3. **Gửi request**:
   - Nhấn nút "Send"
   - Phản hồi thành công sẽ trả về:
   ```json
   {
     "verified": true,
     "confidence_score": 0.95,
     "matched_fields": ["full_name", "id_number", "date_of_birth"],
     "unmatched_fields": [],
     "verification_method": "database_lookup",
     "verification_timestamp": "2025-05-10T12:45:30.123Z"
   }
   ```

### 4. Lấy trạng thái xác minh của khách hàng

1. **Tạo một request mới**:
   - Method: `GET`
   - URL: `http://localhost:8008/api/verifications/verifications/customers/1005/status`
   - (Thay 1005 bằng customer_id bạn muốn kiểm tra)
2. **Gửi request**:
   - Nhấn nút "Send"
   - Phản hồi thành công sẽ trả về:
   ```json
   {
     "customer_id": 1005,
     "status": "FULLY_VERIFIED",
     "verified_documents": [
       {
         "type": "ID_VERIFICATION",
         "verified_at": "2025-05-10T12:45:30.123Z"
       }
     ],
     "verification_expiry": "2026-05-10T12:45:30.123Z"
   }
   ```

### 5. Lấy lịch sử xác minh

1. **Tạo một request mới**:
   - Method: `GET`
   - URL: `http://localhost:8008/api/verifications/verifications/history/1005`
   - (Thay 1005 bằng customer_id bạn muốn kiểm tra)
2. **Gửi request**:
   - Nhấn nút "Send"
   - Phản hồi thành công sẽ trả về danh sách các lần xác minh của khách hàng.

### Lưu ý quan trọng

1. **Xử lý lỗi API OCR.space**:
   - API OCR.space có giới hạn 500 yêu cầu/ngày/IP đối với tài khoản miễn phí.
   - Nếu gặp lỗi 403, kiểm tra API key hoặc giới hạn sử dụng.
   - Bạn có thể đăng ký API key miễn phí tại: https://ocr.space/ocrapi#free

2. **Chuẩn bị ảnh căn cước**:
   - Nên sử dụng ảnh rõ nét, đủ sáng.
   - Kích thước tệp tối đa là 10MB.
   - Định dạng hỗ trợ: JPG, JPEG, PNG, PDF.

3. **Xác minh thông tin**:
   - Trong môi trường phát triển, xác minh sẽ luôn thành công.
   - Trong môi trường sản xuất, yêu cầu tích hợp với API bên thứ ba để xác minh thông tin với cơ sở dữ liệu chính thức.

## Trách nhiệm
- Xác thực tài liệu định danh do khách hàng cung cấp
- Trích xuất thông tin từ ảnh căn cước công dân
- Thực hiện đối chiếu nhận dạng khuôn mặt
- Tích hợp với các dịch vụ xác thực định danh bên ngoài
- Duy trì lịch sử xác minh cho mục đích kiểm toán
- Cung cấp trạng thái xác minh cho quy trình đăng ký vay
- Đảm bảo tuân thủ quy định với các yêu cầu KYC

## Cấu trúc cơ sở dữ liệu
- `verification_requests`: Lưu trữ các yêu cầu xác minh, trạng thái và kết quả
- `verification_documents`: Theo dõi các tài liệu được gửi để xác minh
- `verification_history`: Duy trì lịch sử của các lần xác minh cho mục đích tuân thủ

## Tích hợp OCR.space API
Dịch vụ tích hợp với API OCR.space để trích xuất thông tin từ ảnh căn cước công dân:
- API key được cấu hình trong biến môi trường `OCR_API_KEY`
- Endpoint API: `https://api.ocr.space/parse/image`
- API sử dụng phương thức POST với form-data
- Tham số chính: language, isOverlayRequired, detectOrientation, scale, OCREngine
- Xem tài liệu đầy đủ tại: https://ocr.space/OCRAPI