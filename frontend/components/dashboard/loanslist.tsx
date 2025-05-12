import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LoansList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách khoản vay</CardTitle>
        <CardDescription>Quản lý tất cả các khoản vay của bạn</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Vay mua nhà</h3>
                <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
              </div>
              <div className="text-right">
                <p className="font-medium">30.000.000 VNĐ</p>
                <p className="text-sm text-green-600">Đang hoạt động</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span>Lãi suất: 8.5%/năm</span>
                <span>Kỳ hạn: 36 tháng</span>
                <span>Ngày giải ngân: 10/01/2023</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Xem chi tiết
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Thanh toán
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Vay tiêu dùng</h3>
                <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
              </div>
              <div className="text-right">
                <p className="font-medium">20.000.000 VNĐ</p>
                <p className="text-sm text-green-600">Đang hoạt động</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span>Lãi suất: 12%/năm</span>
                <span>Kỳ hạn: 24 tháng</span>
                <span>Ngày giải ngân: 05/03/2023</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Xem chi tiết
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Thanh toán
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Vay kinh doanh</h3>
                <p className="text-sm text-muted-foreground">Số hợp đồng: KD-2023-018</p>
              </div>
              <div className="text-right">
                <p className="font-medium">50.000.000 VNĐ</p>
                <p className="text-sm text-amber-600">Đang xét duyệt</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span>Lãi suất: Chưa xác định</span>
                <span>Kỳ hạn: 48 tháng</span>
                <span>Ngày đăng ký: 20/04/2023</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Xem chi tiết
              </Button>
              <Button size="sm" variant="outline">
                Hủy đăng ký
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
