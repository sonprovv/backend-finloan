# 📊 Microservices System - Analysis and Design

## Hệ thống vay tiền trực tuyến – Kiến trúc hướng dịch vụ (SOA / Microservices)

---

## 1. 🎯 Problem Statement – Vấn đề cần giải quyết

Hệ thống quản lý quy trình vay vốn trực tuyến giúp số hóa và tự động hóa toàn bộ quy trình cho vay từ khâu đăng ký đến giải ngân và quản lý trả nợ. Hệ thống phục vụ khách hàng cá nhân và nhân viên ngân hàng, giảm thiểu thời gian xử lý và nâng cao trải nghiệm người dùng.

**Người dùng chính:**
- Khách hàng cá nhân cần vay vốn
- Nhân viên tín dụng (kiểm duyệt, phê duyệt)
- Quản trị viên hệ thống

**Mục tiêu chính:**
- Cho phép khách hàng đăng ký vay vốn trực tuyến
- Tự động xác minh danh tính, đánh giá điểm tín dụng, phân tích rủi ro
- Đề xuất các khoản vay phù hợp và hỗ trợ ký hợp đồng điện tử
- Quản lý lịch trả nợ và gửi thông báo

**Dữ liệu xử lý:**
- Thông tin cá nhân, tài chính, tài khoản ngân hàng
- Lịch sử tín dụng, hợp đồng vay, lịch trả nợ
- OTP, xác minh email, trạng thái phê duyệt

---

## 2. 🧩 Identified Microservices – Danh sách các dịch vụ theo phân loại

| Loại Service        | Tên Service                | Trách Nhiệm                                                                 | Tech Stack           |
|---------------------|----------------------------|-----------------------------------------------------------------------------|----------------------|
| Gateway             | gateway-service            | Định tuyến và xác thực request đến các service nội bộ                      | FastAPI + Uvicorn    |
| Task Service        | loan-application-service   | Xử lý toàn bộ quy trình vay: khởi tạo, xác minh, phê duyệt, giải ngân     | FastAPI              |
| Entity Service      | customer-service           | Quản lý thông tin người dùng, hồ sơ tài chính, trạng thái tín dụng        | FastAPI              |
|                     | credit-score-service       | Truy xuất và quản lý điểm tín dụng từ hệ thống bên ngoài                  | FastAPI              |
|                     | loan-contract-service      | Quản lý điều khoản, trạng thái, và nội dung hợp đồng vay                   | FastAPI              |
|                     | payment-scheduling-service | Lên lịch trả nợ, tạo kỳ hạn, gửi nhắc thanh toán                           | FastAPI              |
| Micro Service       | identity-verification-service | Xác minh danh tính và tài liệu người dùng qua bên thứ ba (eKYC)       | FastAPI              |
|                     | risk-assessment-service    | Phân tích rủi ro dựa vào lịch sử tín dụng và khả năng trả nợ              | FastAPI              |
| Utility Service     | notification-service       | Gửi email/SMS về xác minh, phê duyệt, thanh toán, nhắc nhở                | FastAPI              |
|                     | document-storage-service   | Lưu trữ hồ sơ vay, tài liệu xác minh, hợp đồng, chứng từ                   | FastAPI              |
| Internal Support    | auth-service               | Xác thực người dùng, cấp phát JWT, quản lý phân quyền người dùng          | FastAPI              |
| Internal Audit      | audit-log-service          | Lưu vết hoạt động quan trọng trong hệ thống, hỗ trợ kiểm toán và bảo mật  | FastAPI              |

---

## 3. 🔄 Service Communication – Giao tiếp giữa các dịch vụ

**gateway-service ⇄ auth-service (REST):**
- Giao tiếp để xử lý đăng nhập, đăng ký, cấp và xác thực JWT Token.

**gateway-service ⇄ loan-application-service (REST):**
- Nhận yêu cầu đăng ký vay từ frontend, chuyển tiếp đến service để xử lý quy trình vay.

**loan-application-service ⇄ identity-verification-service (REST):**
- Xác minh danh tính người vay qua các nguồn dữ liệu bên thứ ba.

**loan-application-service ⇄ customer-service (REST):**
- Lấy hoặc lưu thông tin khách hàng khi xử lý yêu cầu vay.

**customer-service ⇄ credit-score-service (REST):**
- Truy xuất điểm tín dụng của khách hàng phục vụ đánh giá tài chính.

**credit-score-service ⇄ risk-assessment-service (REST):**
- Gửi điểm tín dụng để đánh giá mức độ rủi ro.

**risk-assessment-service ⇄ loan-contract-service (REST):**
- Nếu rủi ro được chấp nhận, tạo hợp đồng vay.

**loan-contract-service ⇄ payment-scheduling-service (REST):**
- Sau khi tạo hợp đồng, lên lịch thanh toán định kỳ cho khoản vay.

**payment-scheduling-service ⇄ notification-service (REST):**
- Gửi nhắc nhở thanh toán đến khách hàng.

**payment-scheduling-service ⇄ document-storage-service (REST):**
- Lưu thông tin thanh toán và hợp đồng đã ký vào hệ thống lưu trữ.

**document-storage-service ⇄ audit-log-service (REST):**
- Ghi lại log cho các hành động lưu trữ quan trọng để phục vụ audit.

---

### 🔍 Giải thích chi tiết luồng giao tiếp:

- **Gateway:** là đầu vào duy nhất cho client. Nó định tuyến request đến auth-service, loan-application-service, và các dịch vụ khác.

- **loan-application-service** là trung tâm điều phối chính, đóng vai trò orchestrator:
  - Gọi identity-verification-service để xác minh danh tính
  - Gọi customer-service để truy xuất thông tin người dùng
  - Gọi credit-score-service và risk-assessment-service để đánh giá tín dụng
  - Dựa trên kết quả, giao tiếp với loan-contract-service để tạo hợp đồng
  - Sau khi hợp đồng được tạo, payment-scheduling-service lên lịch thanh toán

- **payment-scheduling-service** gọi **notification-service** để gửi nhắc nhở

- Tất cả tài liệu được lưu trữ ở **document-storage-service**

- **audit-log-service** lắng nghe các hành động quan trọng từ các service khác để lưu vết (audit trail)

- Giao tiếp chủ yếu qua RESTful API với JSON, một số service nội bộ có thể dùng message queue ở các phiên bản mở rộng.

---

## 4. Data Design

### 1. Gateway Service – `gateway-service`

#### Tables:
- `api_route`
- `rate_limit`

#### Inline Schema:
- `api_route(id, name, path, target_service, method, auth_required)`
- `rate_limit(id, route_id, max_request, interval_seconds)`

#### DBML:
```dbml
Table api_route {
  id int [pk, increment]
  name varchar(100)
  path varchar(255)
  target_service varchar(100)
  method varchar(10)
  auth_required boolean
}

Table rate_limit {
  id int [pk, increment]
  route_id int [ref: > api_route.id]
  max_request int
  interval_seconds int
}
```

---

### 2. Task Service – `loan-application-service`

#### Tables:
- `loan_application`
- `application_status_history`

#### Inline Schema:
- `loan_application(id, customer_id, amount, term_months, status, created_at)`
- `application_status_history(id, application_id, status, changed_at)`

#### DBML:
```dbml
Table loan_application {
  id int [pk, increment]
  customer_id int
  amount decimal(12,2)
  term_months int
  status varchar(50)
  created_at datetime
}

Table application_status_history {
  id int [pk, increment]
  application_id int [ref: > loan_application.id]
  status varchar(50)
  changed_at datetime
}
```

---

### 3. Entity Service – `customer-service`

#### Tables:
- `customer`
- `financial_profile`
- `credit_status`

#### Inline Schema:
- `customer(id, name, email, phone, dob, national_id, created_at)`
- `financial_profile(id, customer_id, income, employment_status, debts, assets)`
- `credit_status(id, customer_id, current_score, last_updated)`

#### DBML:
```dbml
Table customer {
  id int [pk, increment]
  name varchar(100)
  email varchar(100)
  phone varchar(20)
  dob date
  national_id varchar(20)
  created_at datetime
}

Table financial_profile {
  id int [pk, increment]
  customer_id int [ref: > customer.id]
  income decimal(12,2)
  employment_status varchar(50)
  debts decimal(12,2)
  assets decimal(12,2)
}

Table credit_status {
  id int [pk, increment]
  customer_id int [ref: > customer.id]
  current_score int
  last_updated datetime
}
```

---

### 4. Entity Service – `credit-score-service`

#### Tables:
- `credit_score_report`
- `external_credit_agency_log`

#### Inline Schema:
- `credit_score_report(id, customer_id, score, source, retrieved_at)`
- `external_credit_agency_log(id, request_payload, response_payload, called_at)`

#### DBML:
```dbml
Table credit_score_report {
  id int [pk, increment]
  customer_id int
  score int
  source varchar(50)
  retrieved_at datetime
}

Table external_credit_agency_log {
  id int [pk, increment]
  request_payload text
  response_payload text
  called_at datetime
}
```

---

### 5. Entity Service – `loan-contract-service`

#### Tables:
- `loan_contract`
- `contract_term`

#### Inline Schema:
- `loan_contract(id, application_id, signed_at, principal, interest_rate, status)`
- `contract_term(id, contract_id, description, value)`

#### DBML:
```dbml
Table loan_contract {
  id int [pk, increment]
  application_id int
  signed_at datetime
  principal decimal(12,2)
  interest_rate float
  status varchar(50)
}

Table contract_term {
  id int [pk, increment]
  contract_id int [ref: > loan_contract.id]
  description varchar(255)
  value varchar(255)
}
```

---

### 6. Entity Service – `payment-scheduling-service`

#### Tables:
- `payment_schedule`
- `payment_transaction`

#### Inline Schema:
- `payment_schedule(id, contract_id, due_date, amount, is_paid)`
- `payment_transaction(id, schedule_id, paid_at, amount, status)`

#### DBML:
```dbml
Table payment_schedule {
  id int [pk, increment]
  contract_id int
  due_date date
  amount decimal(12,2)
  is_paid boolean
}

Table payment_transaction {
  id int [pk, increment]
  schedule_id int [ref: > payment_schedule.id]
  paid_at datetime
  amount decimal(12,2)
  status varchar(50)
}
```

---

### 7. Micro Service – `identity-verification-service`

#### Tables:
- `identity_verification_request`
- `verification_result`

#### Inline Schema:
- `identity_verification_request(id, customer_id, method, submitted_at)`
- `verification_result(id, request_id, result, verified_at, details)`

#### DBML:
```dbml
Table identity_verification_request {
  id int [pk, increment]
  customer_id int
  method varchar(50)
  submitted_at datetime
}

Table verification_result {
  id int [pk, increment]
  request_id int [ref: > identity_verification_request.id]
  result varchar(50)
  verified_at datetime
  details text
}
```

---

### 8. Micro Service – `risk-assessment-service`

#### Tables:
- `risk_assessment`
- `risk_factor_detail`

#### Inline Schema:
- `risk_assessment(id, customer_id, score, risk_level, assessed_at)`
- `risk_factor_detail(id, assessment_id, factor, value, weight)`

#### DBML:
```dbml
Table risk_assessment {
  id int [pk, increment]
  customer_id int
  score float
  risk_level varchar(50)
  assessed_at datetime
}

Table risk_factor_detail {
  id int [pk, increment]
  assessment_id int [ref: > risk_assessment.id]
  factor varchar(100)
  value varchar(255)
  weight float
}
```

---

### 9. Utility Service – `notification-service`

#### Tables:
- `notification_log`
- `notification_template`

#### Inline Schema:
- `notification_log(id, recipient, type, content, sent_at, status)`
- `notification_template(id, type, subject, body)`

#### DBML:
```dbml
Table notification_log {
  id int [pk, increment]
  recipient varchar(100)
  type varchar(50)
  content text
  sent_at datetime
  status varchar(50)
}

Table notification_template {
  id int [pk, increment]
  type varchar(50)
  subject varchar(255)
  body text
}
```

---

### 10. Utility Service – `document-storage-service`

#### Tables:
- `document`
- `document_reference`

#### Inline Schema:
- `document(id, filename, file_type, uploaded_at, storage_url)`
- `document_reference(id, document_id, related_entity_type, related_entity_id)`

#### DBML:
```dbml
Table document {
  id int [pk, increment]
  filename varchar(255)
  file_type varchar(50)
  uploaded_at datetime
  storage_url varchar(255)
}

Table document_reference {
  id int [pk, increment]
  document_id int [ref: > document.id]
  related_entity_type varchar(50)
  related_entity_id int
}
```

---

### 11. Internal Support – `auth-service`

#### Tables:
- `user_account`
- `role`
- `user_role`

#### Inline Schema:
- `user_account(id, username, password_hash, email, is_active, created_at)`
- `role(id, name, description)`
- `user_role(id, user_id, role_id)`

#### DBML:
```dbml
Table user_account {
  id int [pk, increment]
  username varchar(100)
  password_hash varchar(255)
  email varchar(100)
  is_active boolean
  created_at datetime
}

Table role {
  id int [pk, increment]
  name varchar(50)
  description varchar(255)
}

Table user_role {
  id int [pk, increment]
  user_id int [ref: > user_account.id]
  role_id int [ref: > role.id]
}
```

---

### 12. Internal Audit – `audit-log-service`

#### Tables:
- `audit_log`

#### Inline Schema:
- `audit_log(id, actor, action, resource_type, resource_id, timestamp, details)`

#### DBML:
```dbml
Table audit_log {
  id int [pk, increment]
  actor varchar(100)
  action varchar(100)
  resource_type varchar(50)
  resource_id int
  timestamp datetime
  details text
}
```
## 5. Security Considerations

### 5.1 Xác thực với JWT
Người dùng đăng nhập tại `auth-service`, nhận về một JWT (access token).

Mỗi request tiếp theo từ client phải đính kèm JWT trong header:
```
Authorization: Bearer <token>
```
`gateway-service` là nơi đầu tiên nhận request và sẽ:
- Xác minh token (chữ ký, hạn sử dụng, claims cơ bản).
- Từ chối nếu token không hợp lệ.
- Gửi tiếp request đến các microservice nội bộ nếu hợp lệ.

### 5.2 Input Validation
Mọi service đều thực hiện kiểm tra input ở controller/service:
- Kiểm tra ràng buộc (`@NotNull`, `@Pattern`, ...)
- Tránh injection, XSS, sai logic nghiệp vụ.

### 5.3 Role-based Access Control (Planned)
Chưa áp dụng, nhưng đã chuẩn bị:
- JWT có chứa trường `roles`.
- Sau này có thể thêm rule tại gateway hoặc service để kiểm tra quyền truy cập.

---

## 6. Deployment Plan

### 6.1 Docker-based Deployment
- Mỗi service (ví dụ: `loan-application-service`, `customer-service`, v.v...) được đóng gói thành một Docker container riêng biệt.
- Mỗi service có một `Dockerfile` riêng, tối ưu hoá cho kích thước nhỏ và tốc độ build nhanh.
- Mỗi service có cấu hình môi trường riêng được quản lý bằng file `.env` (dùng cho các biến như `DB_URL`, `JWT_SECRET`, v.v…).

### 6.2 Docker Compose
Sử dụng `docker-compose` để:
- Quản lý toàn bộ hệ thống (`gateway`, các service, `database`…).
- Khởi chạy toàn bộ hệ thống cục bộ bằng một lệnh duy nhất.
- Gán các service vào cùng một Docker network, giúp chúng giao tiếp nội bộ bằng service name (VD: `http://loan-application-service:8001`).

### 6.3 Database Containers
- Mỗi microservice sở hữu database riêng biệt, đóng gói trong các container `PostgreSQL` hoặc `MongoDB`.

---

## 7. 🎨 Architecture Diagram

Mô hình sơ đồ giao tiếp (RESTful, có chỉ hướng rõ ràng):

```
                  +-----------------------+
                   |     gateway-service   |
                   +-----------+-----------+
                               |
           +------------------+------------------+
           |                                     |
+----------------------------+     +----------------------------+
|     auth-service           |     | loan-application-service   |
+------------+---------------+     +-----------+----------------+
             |                                       |
             v                                       v
  +--------------------------+       +---------------------------+
  |    customer-service      |<----->| identity-verification-svc |
  +--------------------------+       +---------------------------+
             |
             v
  +--------------------------+
  | credit-score-service     |<----+
  +--------------------------+     |
                                   |
                                   v
                      +------------------------------+
                      | risk-assessment-service      |
                      +------------------------------+
                                   |
                                   v
                    +-------------------------------+
                    | loan-contract-service         |
                    +---------------+---------------+
                                    |
                                    v
                    +-------------------------------+
                    | payment-scheduling-service    |
                    +---------------+---------------+
                                    |
                                    v
                   +--------------------------------+
                   | notification-service           |
                   +--------------------------------+
                                    |
                                    v
                   +--------------------------------+
                   | document-storage-service       |
                   +--------------------------------+
                                    |
                                    v
                   +--------------------------------+
                   | audit-log-service              |
                   +--------------------------------+
```

---

## Summary

Kiến trúc hướng dịch vụ (SOA) được áp dụng trong hệ thống cho vay tiền trực tuyến này mang lại tính linh hoạt, mở rộng và dễ bảo trì. Việc chia nhỏ thành các service chuyên trách như `loan-application-service`, `credit-score-service`, hay `notification-service` giúp phân tách rõ ràng về chức năng, cho phép các nhóm phát triển làm việc độc lập và triển khai riêng biệt từng service mà không ảnh hưởng đến toàn hệ thống.

Hệ thống sử dụng `gateway-service` như một điểm truy cập duy nhất, giúp đơn giản hóa bảo mật (qua JWT) và quản lý tuyến đường giữa client và các service. Đồng thời, các service nội bộ giao tiếp với nhau qua REST API, đảm bảo tính đơn giản, rõ ràng và dễ tích hợp mở rộng trong tương lai.

Kiến trúc này đặc biệt phù hợp với yêu cầu của hệ thống khi:
- Cần tích hợp với các dịch vụ bên ngoài như xác minh danh tính, chấm điểm tín dụng.
- Có các luồng nghiệp vụ rõ ràng, tuần tự (workflow từ đăng ký đến giải ngân và thanh toán).
- Cần khả năng scale riêng từng service (ví dụ: `notification-service` có thể cần mở rộng nhiều hơn các service khác trong giờ cao điểm).
