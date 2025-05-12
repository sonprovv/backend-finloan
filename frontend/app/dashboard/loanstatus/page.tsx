import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, CheckCircle, Clock, Download, FileText, Info } from "lucide-react"

export default function LoanStatusPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Trạng thái khoản vay</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Tải xuống hợp đồng
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Đang hoạt động</TabsTrigger>
          <TabsTrigger value="pending">Đang xử lý</TabsTrigger>
          <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Vay mua nhà</CardTitle>
                  <CardDescription>Số hợp đồng: HL-2023-001</CardDescription>
                </div>
                <Badge className="bg-green-600">Đang hoạt động</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Số tiền vay</p>
                  <p className="text-2xl font-bold">50.000.000 VNĐ</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Đã thanh toán</p>
                  <p className="text-2xl font-bold text-green-600">6.000.000 VNĐ</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Còn lại</p>
                  <p className="text-2xl font-bold text-amber-600">44.000.000 VNĐ</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Chi tiết khoản vay</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Ngày giải ngân:</div>
                  <div>10/01/2023</div>
                  <div className="text-muted-foreground">Thời hạn vay:</div>
                  <div>36 tháng</div>
                  <div className="text-muted-foreground">Lãi suất:</div>
                  <div>8.5%/năm</div>
                  <div className="text-muted-foreground">Kỳ thanh toán tiếp theo:</div>
                  <div className="font-medium text-amber-600">15/05/2023</div>
                  <div className="text-muted-foreground">Số tiền thanh toán:</div>
                  <div className="font-medium">1.500.000 VNĐ</div>
                </div>

                <Separator />

                <h3 className="font-semibold">Tiến trình thanh toán</h3>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>4/36 kỳ thanh toán</span>
                    <span>12% hoàn thành</span>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Xem lịch trả nợ
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Thanh toán ngay
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Vay tiêu dùng</CardTitle>
                  <CardDescription>Số hợp đồng: TD-2023-042</CardDescription>
                </div>
                <Badge className="bg-green-600">Đang hoạt động</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Số tiền vay</p>
                  <p className="text-2xl font-bold">20.000.000 VNĐ</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Đã thanh toán</p>
                  <p className="text-2xl font-bold text-green-600">2.000.000 VNĐ</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Còn lại</p>
                  <p className="text-2xl font-bold text-amber-600">18.000.000 VNĐ</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Chi tiết khoản vay</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Ngày giải ngân:</div>
                  <div>05/03/2023</div>
                  <div className="text-muted-foreground">Thời hạn vay:</div>
                  <div>24 tháng</div>
                  <div className="text-muted-foreground">Lãi suất:</div>
                  <div>12%/năm</div>
                  <div className="text-muted-foreground">Kỳ thanh toán tiếp theo:</div>
                  <div className="font-medium text-amber-600">20/05/2023</div>
                  <div className="text-muted-foreground">Số tiền thanh toán:</div>
                  <div className="font-medium">1.000.000 VNĐ</div>
                </div>

                <Separator />

                <h3 className="font-semibold">Tiến trình thanh toán</h3>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>2/24 kỳ thanh toán</span>
                    <span>8% hoàn thành</span>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Xem lịch trả nợ
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Thanh toán ngay
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Vay kinh doanh</CardTitle>
                  <CardDescription>Số hợp đồng: KD-2023-018</CardDescription>
                </div>
                <Badge className="bg-amber-600">Đang xét duyệt</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Số tiền vay</p>
                    <p className="text-2xl font-bold">50.000.000 VNĐ</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Ngày đăng ký</p>
                    <p className="text-2xl font-bold">20/04/2023</p>
                  </div>
                </div>

                <h3 className="font-semibold">Trạng thái xử lý</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-0.5 mr-3 rounded-full p-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Xác minh danh tính và thông tin cá nhân</h4>
                      <p className="text-sm text-muted-foreground">Đã hoàn thành vào 20/04/2023</p>
                    </div>
                  </div>

                  <div className="ml-4 pl-3 border-l h-6 border-dashed border-gray-200 dark:border-gray-700" />

                  <div className="flex items-start">
                    <div className="mt-0.5 mr-3 rounded-full p-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Kiểm tra điểm tín dụng</h4>
                      <p className="text-sm text-muted-foreground">Đã hoàn thành vào 21/04/2023</p>
                      <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                        <p className="text-sm font-medium text-green-700 dark:text-green-400">Điểm tín dụng: 780/850</p>
                        <p className="text-xs text-muted-foreground">Xếp loại: Rất tốt</p>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4 pl-3 border-l h-6 border-dashed border-gray-200 dark:border-gray-700" />

                  <div className="flex items-start">
                    <div className="mt-0.5 mr-3 rounded-full p-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400 animate-pulse">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Đánh giá kế hoạch kinh doanh</h4>
                      <p className="text-sm text-muted-foreground">Đang xử lý</p>
                    </div>
                  </div>

                  <div className="ml-4 pl-3 border-l h-6 border-dashed border-gray-200 dark:border-gray-700" />

                  <div className="flex items-start">
                    <div className="mt-0.5 mr-3 rounded-full p-1 bg-gray-100 text-gray-500 dark:bg-gray-800">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phê duyệt khoản vay</h4>
                      <p className="text-sm text-muted-foreground">Chưa xử lý</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4 bg-blue-50 dark:bg-blue-950 mt-4">
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium text-blue-600">Thông tin bổ sung</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Chúng tôi đang đánh giá kế hoạch kinh doanh của bạn. Quá trình này có thể mất từ 3-5 ngày làm việc.
                  </p>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Xem chi tiết
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    Hủy đăng ký
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Vay mua xe</CardTitle>
                  <CardDescription>Số hợp đồng: MX-2022-056</CardDescription>
                </div>
                <Badge className="bg-gray-600">Đã hoàn thành</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Số tiền vay</p>
                  <p className="text-2xl font-bold">30.000.000 VNĐ</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Đã thanh toán</p>
                  <p className="text-2xl font-bold text-green-600">30.000.000 VNĐ</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Còn lại</p>
                  <p className="text-2xl font-bold text-green-600">0 VNĐ</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Chi tiết khoản vay</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Ngày giải ngân:</div>
                  <div>15/06/2022</div>
                  <div className="text-muted-foreground">Thời hạn vay:</div>
                  <div>12 tháng</div>
                  <div className="text-muted-foreground">Lãi suất:</div>
                  <div>10%/năm</div>
                  <div className="text-muted-foreground">Ngày hoàn thành:</div>
                  <div className="font-medium text-green-600">15/06/2023</div>
                </div>

                <Separator />

                <h3 className="font-semibold">Tiến trình thanh toán</h3>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>12/12 kỳ thanh toán</span>
                    <span>100% hoàn thành</span>
                  </div>
                </div>

                <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <h4 className="font-medium">Khoản vay đã được thanh toán đầy đủ</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Bạn có thể đăng ký khoản vay mới bất cứ lúc nào.
                  </p>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Xem lịch sử thanh toán
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Tải giấy xác nhận
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
