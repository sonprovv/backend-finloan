# System Architecture

## Overview
### Mục đích của hệ thống vay tiền trực tuyến

Hệ thống quản lý vay tiền trực tuyến được thiết kế để số hóa và tự động hóa toàn bộ quy trình cho vay từ khâu đăng ký đến giải ngân và quản lý trả nợ. Kiến trúc microservices này phục vụ cả khách hàng cá nhân và nhân viên ngân hàng, giúp giảm thời gian xử lý và nâng cao trải nghiệm người dùng thông qua phương pháp hướng dịch vụ. Hệ thống cho phép:

1. **Xử lý khoản vay kỹ thuật số**: Loại bỏ các quy trình giấy tờ và can thiệp thủ công thường liên quan đến đơn đăng ký vay truyền thống.

2. **Ra quyết định tự động**: Tận dụng thuật toán và nguồn dữ liệu bên ngoài để tự động hóa chấm điểm tín dụng, đánh giá rủi ro và quyết định phê duyệt khoản vay.

3. **Nâng cao trải nghiệm khách hàng**: Cung cấp quy trình đăng ký vay mượn liền mạch, minh bạch với cập nhật trạng thái theo thời gian thực và xử lý tài liệu điện tử.

4. **Hiệu quả hoạt động**: Giảm thời gian và nguồn lực cần thiết để xử lý đơn đăng ký vay thông qua tự động hóa và xử lý song song.

5. **Dịch vụ tài chính có khả năng mở rộng và linh hoạt**: Hỗ trợ nhu cầu dao động với các thành phần có thể mở rộng độc lập trong khi duy trì độ tin cậy của hệ thống.

### Các thành phần chính và trách nhiệm của chúng

1. **Dịch vụ Gateway** (`gateway-service`):
   - Hoạt động như điểm đầu vào duy nhất cho tất cả yêu cầu của khách hàng
   - Định tuyến yêu cầu đến các dịch vụ nội bộ thích hợp
   - Xử lý xác thực thông qua xác minh JWT
   - Triển khai giới hạn tỷ lệ để ngăn lạm dụng
   - Cung cấp vành đai an ninh cho mạng dịch vụ nội bộ

2. **Dịch vụ đơn đăng ký vay** (`loan-application-service`):
   - Điều phối toàn bộ quy trình đăng ký vay
   - Xử lý đơn đăng ký vay ban đầu và lưu trữ dữ liệu đăng ký
   - Phối hợp các bước xác minh với các dịch vụ khác
   - Quản lý quy trình phê duyệt từ nộp đơn đến giải ngân
   - Theo dõi trạng thái đơn đăng ký trong suốt quy trình cho vay

3. **Dịch vụ khách hàng** (`customer-service`):
   - Quản lý thông tin hồ sơ khách hàng và thông tin cá nhân
   - Lưu trữ hồ sơ tài chính bao gồm thu nhập, tình trạng việc làm và tài sản
   - Theo dõi trạng thái tín dụng của khách hàng và đóng vai trò là hệ thống ghi nhận cho dữ liệu khách hàng
   - Cung cấp thông tin khách hàng cho các dịch vụ khác khi cần thiết

4. **Dịch vụ điểm tín dụng** (`credit-score-service`):
   - Tương tác với các cục tín dụng bên ngoài để truy xuất điểm tín dụng của khách hàng
   - Lưu trữ thông tin điểm tín dụng lịch sử
   - Chuẩn hóa dữ liệu tín dụng để đánh giá rủi ro nội bộ
   - Ghi nhật ký tương tác với các cơ quan tín dụng bên ngoài

5. **Dịch vụ xác minh danh tính** (`identity-verification-service`):
   - Xác minh danh tính khách hàng thông qua tích hợp với nhà cung cấp eKYC bên thứ ba
   - Xử lý yêu cầu xác minh danh tính và lưu trữ kết quả
   - Xác thực tài liệu và thông tin cá nhân của khách hàng
   - Hỗ trợ nhiều phương thức xác minh

6. **Dịch vụ đánh giá rủi ro** (`risk-assessment-service`):
   - Phân tích điểm tín dụng, thông tin tài chính và các điểm dữ liệu khác
   - Tính toán điểm rủi ro và xác định mức độ rủi ro thích hợp
   - Đánh giá khả năng hội đủ điều kiện vay dựa trên phân tích rủi ro
   - Ghi lại đánh giá chi tiết về các yếu tố rủi ro

7. **Dịch vụ hợp đồng vay** (`loan-contract-service`):
   - Tạo và quản lý thỏa thuận vay
   - Lưu trữ điều khoản hợp đồng, điều kiện và lãi suất
   - Theo dõi trạng thái hợp đồng từ bản nháp đến thực hiện
   - Quản lý các khía cạnh pháp lý của mối quan hệ cho vay

8. **Dịch vụ lập lịch thanh toán** (`payment-scheduling-service`):
   - Tạo lịch trả nợ cho các khoản vay đã được phê duyệt
   - Theo dõi ngày đáo hạn thanh toán và trạng thái
   - Ghi lại giao dịch thanh toán
   - Kích hoạt nhắc nhở thanh toán thông qua dịch vụ thông báo

9. **Dịch vụ thông báo** (`notification-service`):
   - Gửi thông tin liên lạc cho khách hàng trong suốt quy trình vay
   - Gửi mã xác minh, thông báo phê duyệt và nhắc nhở thanh toán
   - Quản lý các mẫu thông báo cho các loại giao tiếp khác nhau
   - Ghi lại trạng thái gửi thông báo

10. **Dịch vụ lưu trữ tài liệu** (`document-storage-service`):
    - Lưu trữ an toàn các tài liệu vay, tệp xác minh và hợp đồng
    - Quản lý tham chiếu tài liệu và mối quan hệ với các thực thể khác
    - Đảm bảo phiên bản tài liệu và kiểm soát truy cập phù hợp
    - Hỗ trợ nhiều loại và định dạng tài liệu khác nhau

11. **Dịch vụ xác thực** (`auth-service`):
    - Quản lý xác thực người dùng và bảo mật tài khoản
    - Cấp và xác thực token JWT để truy cập hệ thống
    - Xử lý đăng ký người dùng và quản lý mật khẩu
    - Hỗ trợ kiểm soát truy cập dựa trên vai trò

12. **Dịch vụ ghi nhật ký kiểm tra** (`audit-log-service`):
    - Ghi lại tất cả các hành động hệ thống quan trọng để tuân thủ và bảo mật
    - Cung cấp dấu vết kiểm tra không thể thay đổi về hoạt động của người dùng và hệ thống
    - Hỗ trợ chẩn đoán hệ thống và điều tra vấn đề
    - Đảm bảo tuân thủ quy định thông qua ghi nhật ký hoạt động toàn diện

Mỗi dịch vụ được thiết kế với một trách nhiệm duy nhất, duy trì cơ sở dữ liệu riêng và giao tiếp với các dịch vụ khác thông qua các API REST được xác định. Thiết kế này đảm bảo kết nối lỏng lẻo, triển khai độc lập và các nhóm phát triển tập trung.

## System Components

Hệ thống vay tiền trực tuyến gồm các thành phần sau, được phân chia theo vai trò và trách nhiệm:

### Dịch vụ Gateway

- **Gateway Service** (`gateway-service`): Là điểm vào duy nhất cho tất cả các yêu cầu của khách hàng, định tuyến các request đến các dịch vụ nội bộ thích hợp. Dịch vụ này thực hiện xác thực token JWT, kiểm soát tỷ lệ truy cập, và tạo một lớp bảo mật cho toàn bộ hệ thống. Công nghệ sử dụng: FastAPI + Uvicorn.

### Dịch vụ Task

- **Loan Application Service** (`loan-application-service`): Đóng vai trò như một dịch vụ điều phối (orchestrator), xử lý toàn bộ quy trình vay từ khởi tạo đơn, điều phối xác minh, phê duyệt, đến giải ngân. Dịch vụ này là trung tâm của hệ thống, kết nối với hầu hết các dịch vụ khác để hoàn thành quy trình vay. Công nghệ sử dụng: FastAPI.

### Dịch vụ Entity

- **Customer Service** (`customer-service`): Quản lý tất cả thông tin khách hàng bao gồm hồ sơ cá nhân, tài chính và trạng thái tín dụng. Đây là nguồn dữ liệu chính xác cho thông tin khách hàng trong toàn hệ thống. Công nghệ sử dụng: FastAPI.

- **Credit Score Service** (`credit-score-service`): Tương tác với các cục tín dụng bên ngoài để lấy điểm tín dụng và lịch sử tín dụng của khách hàng. Dịch vụ này chuyển đổi và chuẩn hóa thông tin tín dụng để các dịch vụ khác sử dụng. Công nghệ sử dụng: FastAPI.

- **Loan Contract Service** (`loan-contract-service`): Quản lý việc tạo, điều khoản, trạng thái và nội dung của các thỏa thuận vay. Tạo tài liệu hợp đồng dựa trên đơn vay được phê duyệt. Công nghệ sử dụng: FastAPI.

- **Payment Scheduling Service** (`payment-scheduling-service`): Tạo và quản lý lịch trình trả nợ cho các khoản vay được phê duyệt. Theo dõi ngày đáo hạn và trạng thái thanh toán, kích hoạt các nhắc nhở thanh toán khi cần thiết. Công nghệ sử dụng: FastAPI.

### Dịch vụ Micro

- **Identity Verification Service** (`identity-verification-service`): Xác minh danh tính khách hàng thông qua tích hợp với nhà cung cấp eKYC. Xác thực tài liệu đã gửi và thông tin cá nhân, hỗ trợ nhiều phương thức xác minh. Công nghệ sử dụng: FastAPI.

- **Risk Assessment Service** (`risk-assessment-service`): Phân tích điểm tín dụng, thông tin tài chính và các điểm dữ liệu khác để xác định mức độ rủi ro. Cung cấp đánh giá rủi ro ảnh hưởng đến quyết định phê duyệt khoản vay. Công nghệ sử dụng: FastAPI.

### Dịch vụ Utility

- **Notification Service** (`notification-service`): Gửi email/SMS để xác minh, thông báo phê duyệt, nhắc nhở thanh toán và các thông tin liên lạc khác với khách hàng trong suốt vòng đời của khoản vay. Quản lý các mẫu thông báo và trạng thái gửi. Công nghệ sử dụng: FastAPI.

- **Document Storage Service** (`document-storage-service`): Lưu trữ an toàn đơn đăng ký vay, tài liệu xác minh, hợp đồng và biên lai. Cung cấp quản lý tài liệu tập trung với kiểm soát phiên bản và quyền truy cập. Công nghệ sử dụng: FastAPI.

### Dịch vụ nội bộ

- **Auth Service** (`auth-service`): Xử lý xác thực người dùng, cấp phát token JWT và quản lý phân quyền người dùng trong toàn bộ nền tảng. Hỗ trợ đăng ký người dùng và quản lý mật khẩu. Công nghệ sử dụng: FastAPI.

- **Audit Log Service** (`audit-log-service`): Ghi lại các hoạt động quan trọng của hệ thống để giám sát bảo mật, tuân thủ quy định và khắc phục sự cố. Cung cấp dấu vết kiểm tra không thể thay đổi cho hoạt động của người dùng và hệ thống. Công nghệ sử dụng: FastAPI.

## Communication

Các dịch vụ trong hệ thống vay tiền trực tuyến chủ yếu giao tiếp thông qua REST API với các payload JSON được chuẩn hóa. Mỗi request đều chứa các header xác thực phù hợp được xác minh tại cấp gateway.

### Phương thức giao tiếp

- **REST API:** Các dịch vụ giao tiếp qua các endpoint HTTP RESTful với dữ liệu định dạng JSON.
- **Stateless:** Mọi request đều chứa đầy đủ thông tin cần thiết, không phụ thuộc vào trạng thái phiên.
- **Bảo mật:** Mọi request nội bộ đều đi qua mạng Docker được bảo mật, bên ngoài chỉ có thể truy cập qua Gateway.

### Mô hình giao tiếp

1. **Gateway → Auth Service:**
   - Xử lý đăng nhập, đăng ký, xác thực và xác minh JWT token

2. **Gateway → Loan Application Service:**
   - Chuyển tiếp đơn đăng ký vay từ khách hàng
   - Trả về thông tin trạng thái đơn vay

3. **Loan Application Service → Identity Verification Service:**
   - Gửi yêu cầu xác minh danh tính khách hàng
   - Nhận kết quả xác minh

4. **Loan Application Service → Customer Service:**
   - Lấy hoặc cập nhật thông tin khách hàng
   - Tương tác hai chiều trong quá trình xử lý đơn

5. **Customer Service → Credit Score Service:**
   - Truy vấn điểm tín dụng của khách hàng
   - Cập nhật lịch sử điểm tín dụng

6. **Credit Score Service → Risk Assessment Service:**
   - Gửi dữ liệu tín dụng để đánh giá rủi ro

7. **Risk Assessment Service → Loan Contract Service:**
   - Chuyển thông tin rủi ro và điều kiện vay để tạo hợp đồng

8. **Loan Contract Service → Payment Scheduling Service:**
   - Kích hoạt tạo lập lịch trả nợ sau khi hợp đồng được phê duyệt 

9. **Payment Scheduling Service → Notification Service:**
   - Kích hoạt gửi thông báo nhắc nhở thanh toán
   - Gửi xác nhận khi thanh toán hoàn tất

10. **Payment Scheduling Service → Document Storage Service:**
    - Lưu trữ biên lai thanh toán và bản cập nhật hợp đồng

11. **Document Storage Service → Audit Log Service:**
    - Ghi lại các hoạt động lưu trữ tài liệu quan trọng

### Networking nội bộ

Các dịch vụ sử dụng tên service trong Docker Compose để giao tiếp trong mạng nội bộ:

```
http://gateway-service:8000             # Gateway Service
http://auth-service:8001                # Auth Service
http://loan-application-service:8002    # Loan Application Service
http://customer-service:8003            # Customer Service
http://identity-verification-service:8004 # Identity Verification Service
http://credit-score-service:8005        # Credit Score Service
http://risk-assessment-service:8006     # Risk Assessment Service
http://loan-contract-service:8007       # Loan Contract Service
http://payment-scheduling-service:8008  # Payment Scheduling Service
http://notification-service:8009        # Notification Service
http://document-storage-service:8010    # Document Storage Service
http://audit-log-service:8011           # Audit Log Service
```

### Mở rộng trong tương lai

Trong các phiên bản sau, hệ thống có thể tích hợp giao tiếp bất đồng bộ thông qua message queue (như RabbitMQ hoặc Kafka) cho các hoạt động không chặn như:
- Xử lý thông báo
- Xử lý tài liệu
- Ghi nhật ký kiểm toán
- Quy trình xác minh dài hạn

Điều này sẽ cải thiện khả năng mở rộng và khả năng chịu lỗi của hệ thống khi lưu lượng tăng lên.

## Data Flow

Hệ thống vay tiền trực tuyến có các luồng dữ liệu chính sau đây, thể hiện cách thông tin di chuyển qua các dịch vụ để hoàn thành quy trình vay:

### 1. Luồng khởi tạo đơn vay

```
+----------+     +------------+     +-------------------+     +------------------------+
|          |     |            |     |                   |     |                        |
|  Client  +---->+  Gateway   +---->+ Loan Application  +---->+ Identity Verification  |
|          |     |            |     |                   |     |                        |
+----------+     +------------+     +---------+---------+     +------------------------+
                                              |
                                              v
                                    +-------------------+
                                    |                   |
                                    | Customer Service  |
                                    |                   |
                                    +-------------------+
```

**Quy trình:**
- **Bước 1:** Client gửi yêu cầu đơn đăng ký vay thông qua Gateway Service.
- **Bước 2:** Gateway Service xác thực yêu cầu và chuyển tiếp đến Loan Application Service.
- **Bước 3:** Loan Application Service lưu thông tin đơn đăng ký và khởi động quy trình xác minh danh tính.
- **Bước 4:** Identity Verification Service xác minh danh tính người dùng qua tích hợp với nhà cung cấp eKYC.
- **Bước 5:** Customer Service lưu trữ hoặc cập nhật thông tin khách hàng.

### 2. Luồng đánh giá tín dụng

```
+--------------------+     +-----------------+     +-------------------+     +-----------------+
|                    |     |                 |     |                   |     |                 |
| Loan Application   +---->+ Customer        +---->+ Credit Score      +---->+ External Credit |
|                    |     | Service         |     | Service           |     | Bureaus         |
+--------------------+     +-----------------+     +---------+---------+     +-----------------+
                                                             |
                                                             v
                                                   +-------------------+
                                                   |                   |
                                                   | Risk Assessment   |
                                                   |                   |
                                                   +---------+---------+
                                                             |
                                                             v
                                                   +-------------------+
                                                   |                   |
                                                   | Loan Application  |
                                                   |                   |
                                                   +-------------------+
```

**Quy trình:**
- **Bước 1:** Loan Application Service yêu cầu thông tin tín dụng từ Customer Service.
- **Bước 2:** Customer Service truy vấn Credit Score Service để lấy điểm tín dụng mới nhất.
- **Bước 3:** Credit Score Service truy xuất hoặc yêu cầu cập nhật thông tin tín dụng từ các cục tín dụng bên ngoài.
- **Bước 4:** Risk Assessment Service phân tích dữ liệu để xác định mức độ rủi ro.
- **Bước 5:** Kết quả trả về Loan Application Service để đưa ra quyết định.

### 3. Luồng tạo hợp đồng và lịch trả nợ

```
+--------------------+     +----------------+     +-------------------+     +-------------------+
|                    |     |                |     |                   |     |                   |
| Loan Application   +---->+ Loan Contract  +---->+ Payment           +---->+ Notification      |
|                    |     |                |     | Scheduling        |     | Service           |
+--------------------+     +----------------+     +---------+---------+     +-------------------+
                                                            |
                                                            v
                                                  +-------------------+
                                                  |                   |
                                                  | Document Storage  |
                                                  |                   |
                                                  +-------------------+
```

**Quy trình:**
- **Bước 1:** Khi được phê duyệt, Loan Application Service yêu cầu tạo hợp đồng.
- **Bước 2:** Loan Contract Service tạo hợp đồng với các điều khoản thích hợp.
- **Bước 3:** Payment Scheduling Service tạo lịch trình trả nợ.
- **Bước 4:** Notification Service gửi thông báo phê duyệt cho khách hàng.
- **Bước 5:** Document Storage Service lưu trữ hợp đồng đã hoàn thiện.

### 4. Luồng thông báo trả nợ

```
+---------------------+     +-------------------+
|                     |     |                   |
| Payment Scheduling  +---->+ Notification      |
|                     |     | Service           |
+-----------+---------+     +-------------------+
            |
            v
+---------------------+     +-------------------+
|                     |     |                   |
| Document Storage    +---->+ Audit Log         |
|                     |     | Service           |
+---------------------+     +-------------------+
```

**Quy trình:**
- **Bước 1:** Payment Scheduling Service theo dõi các khoản thanh toán sắp tới.
- **Bước 2:** Notification Service gửi nhắc nhở thanh toán.
- **Bước 3:** Document Storage Service lưu trữ biên lai thanh toán.
- **Bước 4:** Audit Log Service ghi lại hoạt động thanh toán.

### Phụ thuộc ngoài hệ thống

1. **Cục tín dụng**: Credit Score Service tích hợp với cục tín dụng để truy xuất điểm tín dụng và lịch sử tín dụng của khách hàng.

2. **Nhà cung cấp eKYC**: Identity Verification Service tích hợp với các nhà cung cấp xác minh danh tính bên thứ ba để xác thực danh tính của người dùng.

3. **API ngân hàng**: Payment Scheduling Service có thể tích hợp với API ngân hàng để xử lý các giao dịch thanh toán thực tế.

4. **Dịch vụ email/SMS**: Notification Service sử dụng các nhà cung cấp dịch vụ email và SMS bên ngoài để gửi thông báo.

### Quản lý dữ liệu

Mỗi dịch vụ duy trì cơ sở dữ liệu riêng, đảm bảo tính độc lập và ranh giới rõ ràng về trách nhiệm. Các giao dịch cơ sở dữ liệu được giữ trong phạm vi ranh giới dịch vụ để duy trì tính nhất quán dữ liệu. Cách tiếp cận này tuân theo mẫu Cơ sở dữ liệu cho mỗi dịch vụ (Database-per-Service pattern) trong kiến trúc vi dịch vụ.

## Diagram

Sơ đồ kiến trúc của hệ thống vay tiền trực tuyến được thể hiện qua biểu đồ dưới đây, thể hiện mối quan hệ giữa các thành phần và luồng giao tiếp chính:

![Online Loan System Architecture](/mid-project-110181229/docs/asset/loan-system-architecture.png)

Sơ đồ này thể hiện một kiến trúc vi dịch vụ hoàn chỉnh với luồng có hướng, trong đó:

1. **Gateway Service** là điểm vào duy nhất, định tuyến tất cả các yêu cầu bên ngoài.
2. **Loan Application Service** đóng vai trò điều phối chính cho quy trình vay.
3. Các dịch vụ được phân tổ theo chức năng: Entity Services, Micro Services và Utility Services.
4. Các dịch vụ nội bộ (Auth Service và Audit Log Service) hỗ trợ toàn bộ hệ thống.
5. Mỗi dịch vụ có cơ sở dữ liệu riêng, tuân theo nguyên tắc "database per service".

Biểu đồ chi tiết về luồng tương tác giữa các dịch vụ có thể tham khảo trong phần "Architecture Diagram" của tài liệu [`mid-project-110181229/docs/analysis-and-design.md`](/mid-project-110181229/docs/analysis-and-design.md).

## Scalability & Fault Tolerance

Kiến trúc microservices của hệ thống vay tiền trực tuyến đã được thiết kế với khả năng mở rộng và khả năng chịu lỗi từ đầu:

### Khả năng mở rộng (Scalability)

#### Mở rộng theo chiều ngang (Horizontal Scaling)
- **Mở rộng độc lập**: Mỗi dịch vụ có thể được mở rộng riêng biệt dựa trên nhu cầu công việc. Ví dụ, Notification Service có thể cần nhiều instance hơn vào thời điểm cao điểm khi gửi nhắc nhở hàng loạt.
- **Cân bằng tải**: Gateway Service hỗ trợ cân bằng tải cho các request đến các dịch vụ nội bộ.
- **Phân phối tải không đồng đều**: Các dịch vụ xử lý tải nặng như Identity Verification Service có thể được phân bổ nhiều tài nguyên hơn so với các dịch vụ nhẹ hơn.

#### Tối ưu hóa cơ sở dữ liệu
- **Partitioning**: Các bảng dữ liệu lớn như audit_log có thể được phân vùng theo thời gian để tối ưu hiệu suất.
- **Caching**: Dữ liệu tham chiếu được truy cập thường xuyên (như notification_template) có thể được lưu trong bộ nhớ cache.
- **Cơ sở dữ liệu chuyên biệt**: Mỗi dịch vụ có cơ sở dữ liệu riêng, phù hợp với yêu cầu lưu trữ cụ thể của dịch vụ đó.

### Khả năng chịu lỗi (Fault Tolerance)

#### Cô lập lỗi
- **Nguyên tắc ranh giới dịch vụ**: Lỗi trong một dịch vụ không lan truyền sang dịch vụ khác. Ví dụ, nếu Notification Service bị lỗi, quy trình xử lý đơn vay vẫn có thể tiếp tục.
- **Cơ chế thử lại**: Các giao tiếp giữa dịch vụ thực hiện chính sách thử lại thích hợp với backoff strategies.
- **Circuit Breaker**: Ngăn chặn lỗi dây chuyền khi dịch vụ xuống cấp bằng cách tạm thời ngừng yêu cầu đến dịch vụ đó.

#### Kiểm tra tình trạng
- **Health Checks**: Mỗi dịch vụ cung cấp endpoint `/health` để báo cáo trạng thái hoạt động.
- **Monitoring**: Hệ thống giám sát theo dõi các chỉ số quan trọng của từng dịch vụ.
- **Graceful Degradation**: Hệ thống có thể tiếp tục hoạt động với chức năng giảm nếu một số dịch vụ không khả dụng.

### Kế hoạch tương lai

Các cải tiến tiềm năng để nâng cao khả năng mở rộng và chống lỗi:

1. **Event-driven Architecture**: Chuyển sang kiến trúc hướng sự kiện để giảm sự phụ thuộc trực tiếp giữa các dịch vụ.
2. **Service Mesh**: Triển khai Service Mesh như Istio để quản lý giao tiếp dịch vụ, bảo mật và khả năng quan sát nâng cao.
3. **Distributed Tracing**: Thêm theo dõi phân tán với công cụ như Jaeger để debug và phân tích hiệu suất dễ dàng hơn.
4. **Auto-scaling**: Thiết lập auto-scaling dựa trên tài nguyên hoặc lưu lượng truy cập cho từng dịch vụ.
5. **Multi-region Deployment**: Triển khai hệ thống trên nhiều vùng địa lý để tăng tính sẵn sàng và giảm độ trễ cho người dùng toàn cầu.