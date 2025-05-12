import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export function LoanConfirmation() {
  return (
    <>
      <CardHeader>
        <CardTitle>Xác nhận thông tin</CardTitle>
        <CardDescription>Vui lòng kiểm tra lại thông tin trước khi gửi đơn đăng ký</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Thông tin cá nhân</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Họ và tên:</div>
            <div>Nguyễn Văn A</div>
            <div className="text-muted-foreground">Số CMND/CCCD:</div>
            <div>0123456789</div>
            <div className="text-muted-foreground">Ngày sinh:</div>
            <div>01/01/1990</div>
            <div className="text-muted-foreground">Số điện thoại:</div>
            <div>0912345678</div>
            <div className="text-muted-foreground">Email:</div>
            <div>example@email.com</div>
            <div className="text-muted-foreground">Địa chỉ:</div>
            <div>123 Đường ABC, Phường XYZ, Quận 1, TP.HCM</div>
          </div>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Thông tin tài chính</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Nghề nghiệp:</div>
            <div>Nhân viên văn phòng</div>
            <div className="text-muted-foreground">Tên công ty:</div>
            <div>Công ty ABC</div>
            <div className="text-muted-foreground">Thu nhập hàng tháng:</div>
            <div>15.000.000 VNĐ</div>
            <div className="text-muted-foreground">Số tài khoản:</div>
            <div>1234567890</div>
            <div className="text-muted-foreground">Ngân hàng:</div>
            <div>Vietcombank</div>
          </div>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Thông tin khoản vay</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Mục đích vay:</div>
            <div>Mua nhà</div>
            <div className="text-muted-foreground">Số tiền vay:</div>
            <div>50.000.000 VNĐ</div>
            <div className="text-muted-foreground">Thời hạn vay:</div>
            <div>36 tháng</div>
            <div className="text-muted-foreground">Gói vay:</div>
            <div>Gói vay ưu đãi</div>
            <div className="text-muted-foreground">Lãi suất:</div>
            <div>8.5%/năm</div>
            <div className="text-muted-foreground">Khoản trả hàng tháng:</div>
            <div>1.580.000 VNĐ</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            Tôi đã đọc và đồng ý với{" "}
            <Link href="#" className="text-green-600 hover:underline">
              Điều khoản và Điều kiện
            </Link>{" "}
            của dịch vụ
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="privacy" />
          <Label htmlFor="privacy" className="text-sm">
            Tôi đồng ý cho phép hệ thống xác minh thông tin cá nhân và tài chính của tôi
          </Label>
        </div>
      </CardContent>
    </>
  )
}
