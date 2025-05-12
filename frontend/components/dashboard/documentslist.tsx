import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export function DocumentsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tài liệu của tôi</CardTitle>
        <CardDescription>Quản lý tất cả các tài liệu liên quan đến khoản vay</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Hợp đồng vay mua nhà</h3>
                  <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Ngày ký: 10/01/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Tải xuống
              </Button>
              <Button variant="outline" size="sm">
                Xem
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Hợp đồng vay tiêu dùng</h3>
                  <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Ngày ký: 05/03/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Tải xuống
              </Button>
              <Button variant="outline" size="sm">
                Xem
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Lịch trả nợ vay mua nhà</h3>
                  <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Cập nhật: 10/01/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Tải xuống
              </Button>
              <Button variant="outline" size="sm">
                Xem
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Lịch trả nợ vay tiêu dùng</h3>
                  <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Cập nhật: 05/03/2023</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Tải xuống
              </Button>
              <Button variant="outline" size="sm">
                Xem
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
