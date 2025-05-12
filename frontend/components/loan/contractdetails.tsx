export function ContractDetails() {
    return (
      <>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Thông tin khách hàng</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Họ và tên:</div>
            <div>Nguyễn Văn A</div>
            <div className="text-muted-foreground">Số CMND/CCCD:</div>
            <div>0123456789</div>
            <div className="text-muted-foreground">Địa chỉ:</div>
            <div>123 Đường ABC, Phường XYZ, Quận 1, TP.HCM</div>
            <div className="text-muted-foreground">Số điện thoại:</div>
            <div>0912345678</div>
            <div className="text-muted-foreground">Email:</div>
            <div>example@email.com</div>
          </div>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Thông tin khoản vay</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Số tiền vay:</div>
            <div>50.000.000 VNĐ</div>
            <div className="text-muted-foreground">Thời hạn vay:</div>
            <div>36 tháng</div>
            <div className="text-muted-foreground">Lãi suất:</div>
            <div>8.5%/năm</div>
            <div className="text-muted-foreground">Khoản trả hàng tháng:</div>
            <div>1.580.000 VNĐ</div>
            <div className="text-muted-foreground">Ngày giải ngân:</div>
            <div>25/04/2023</div>
            <div className="text-muted-foreground">Ngày thanh toán đầu tiên:</div>
            <div>25/05/2023</div>
          </div>
        </div>
      </>
    )
  }
  