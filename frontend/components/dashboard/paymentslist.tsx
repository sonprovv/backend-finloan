import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PaymentsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lịch thanh toán</CardTitle>
        <CardDescription>Quản lý các khoản thanh toán của bạn</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Vay mua nhà - Kỳ thanh toán #5</h3>
                <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1.500.000 VNĐ</p>
                <p className="text-sm text-amber-600">Hạn thanh toán: 15/05/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Thanh toán ngay
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Vay tiêu dùng - Kỳ thanh toán #3</h3>
                <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1.000.000 VNĐ</p>
                <p className="text-sm text-amber-600">Hạn thanh toán: 20/05/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Thanh toán ngay
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Vay mua nhà - Kỳ thanh toán #4</h3>
                <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1.500.000 VNĐ</p>
                <p className="text-sm text-green-600">Đã thanh toán: 15/04/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Xem biên lai
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Vay tiêu dùng - Kỳ thanh toán #2</h3>
                <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1.000.000 VNĐ</p>
                <p className="text-sm text-green-600">Đã thanh toán: 20/04/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Xem biên lai
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
