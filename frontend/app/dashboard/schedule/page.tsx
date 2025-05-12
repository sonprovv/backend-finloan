import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, FileText } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Lịch trả nợ</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Xem lịch
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Tải xuống
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Chọn khoản vay" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả khoản vay</SelectItem>
              <SelectItem value="hl-2023-001">Vay mua nhà (HL-2023-001)</SelectItem>
              <SelectItem value="td-2023-042">Vay tiêu dùng (TD-2023-042)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Sắp đến hạn</TabsTrigger>
          <TabsTrigger value="all">Tất cả kỳ hạn</TabsTrigger>
          <TabsTrigger value="paid">Đã thanh toán</TabsTrigger>
          <TabsTrigger value="overdue">Quá hạn</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Các kỳ thanh toán sắp đến hạn</CardTitle>
              <CardDescription>Các khoản thanh toán sắp đến hạn trong 30 ngày tới</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Vay mua nhà - Kỳ thanh toán #5</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">1.500.000 VNĐ</p>
                      <p className="text-sm text-amber-600">Hạn thanh toán: 15/05/2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Thanh toán ngay
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Vay tiêu dùng - Kỳ thanh toán #3</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">1.000.000 VNĐ</p>
                      <p className="text-sm text-amber-600">Hạn thanh toán: 20/05/2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Thanh toán ngay
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Tất cả kỳ thanh toán</CardTitle>
              <CardDescription>Lịch trả nợ đầy đủ cho tất cả các khoản vay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-4">Vay mua nhà - HL-2023-001</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-2">Kỳ</th>
                          <th className="text-left py-2 px-2">Ngày thanh toán</th>
                          <th className="text-right py-2 px-2">Gốc</th>
                          <th className="text-right py-2 px-2">Lãi</th>
                          <th className="text-right py-2 px-2">Tổng thanh toán</th>
                          <th className="text-right py-2 px-2">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-2">1</td>
                          <td className="py-2 px-2">15/01/2023</td>
                          <td className="text-right py-2 px-2">1.145.000 VNĐ</td>
                          <td className="text-right py-2 px-2">355.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.500.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-green-600">Đã thanh toán</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">2</td>
                          <td className="py-2 px-2">15/02/2023</td>
                          <td className="text-right py-2 px-2">1.153.000 VNĐ</td>
                          <td className="text-right py-2 px-2">347.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.500.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-green-600">Đã thanh toán</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">3</td>
                          <td className="py-2 px-2">15/03/2023</td>
                          <td className="text-right py-2 px-2">1.161.000 VNĐ</td>
                          <td className="text-right py-2 px-2">339.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.500.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-green-600">Đã thanh toán</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">4</td>
                          <td className="py-2 px-2">15/04/2023</td>
                          <td className="text-right py-2 px-2">1.169.000 VNĐ</td>
                          <td className="text-right py-2 px-2">331.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.500.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-green-600">Đã thanh toán</td>
                        </tr>
                        <tr className="border-b bg-amber-50 dark:bg-amber-950">
                          <td className="py-2 px-2">5</td>
                          <td className="py-2 px-2">15/05/2023</td>
                          <td className="text-right py-2 px-2">1.177.000 VNĐ</td>
                          <td className="text-right py-2 px-2">323.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.500.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-amber-600">Chưa thanh toán</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">6</td>
                          <td className="py-2 px-2">15/06/2023</td>
                          <td className="text-right py-2 px-2">1.185.000 VNĐ</td>
                          <td className="text-right py-2 px-2">315.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.500.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-gray-500">Sắp tới</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-4">Vay tiêu dùng - TD-2023-042</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-2">Kỳ</th>
                          <th className="text-left py-2 px-2">Ngày thanh toán</th>
                          <th className="text-right py-2 px-2">Gốc</th>
                          <th className="text-right py-2 px-2">Lãi</th>
                          <th className="text-right py-2 px-2">Tổng thanh toán</th>
                          <th className="text-right py-2 px-2">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-2">1</td>
                          <td className="py-2 px-2">20/03/2023</td>
                          <td className="text-right py-2 px-2">800.000 VNĐ</td>
                          <td className="text-right py-2 px-2">200.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.000.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-green-600">Đã thanh toán</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">2</td>
                          <td className="py-2 px-2">20/04/2023</td>
                          <td className="text-right py-2 px-2">808.000 VNĐ</td>
                          <td className="text-right py-2 px-2">192.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.000.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-green-600">Đã thanh toán</td>
                        </tr>
                        <tr className="border-b bg-amber-50 dark:bg-amber-950">
                          <td className="py-2 px-2">3</td>
                          <td className="py-2 px-2">20/05/2023</td>
                          <td className="text-right py-2 px-2">816.000 VNĐ</td>
                          <td className="text-right py-2 px-2">184.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.000.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-amber-600">Chưa thanh toán</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">4</td>
                          <td className="py-2 px-2">20/06/2023</td>
                          <td className="text-right py-2 px-2">824.000 VNĐ</td>
                          <td className="text-right py-2 px-2">176.000 VNĐ</td>
                          <td className="text-right py-2 px-2">1.000.000 VNĐ</td>
                          <td className="text-right py-2 px-2 text-gray-500">Sắp tới</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paid" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Các kỳ đã thanh toán</CardTitle>
              <CardDescription>Lịch sử các kỳ thanh toán đã hoàn thành</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Vay mua nhà - Kỳ thanh toán #4</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">1.500.000 VNĐ</p>
                      <p className="text-sm text-green-600">Đã thanh toán: 15/04/2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Xem biên lai
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Vay tiêu dùng - Kỳ thanh toán #2</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">1.000.000 VNĐ</p>
                      <p className="text-sm text-green-600">Đã thanh toán: 20/04/2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Xem biên lai
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Các kỳ quá hạn</CardTitle>
              <CardDescription>Các khoản thanh toán đã quá hạn cần xử lý ngay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Vay mua xe - Kỳ thanh toán #2</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: MX-2022-056</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">2.000.000 VNĐ</p>
                      <p className="text-sm text-red-600">Quá hạn: 10 ngày</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Thanh toán ngay
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
