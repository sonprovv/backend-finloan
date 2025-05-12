import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CreditCard, DollarSign, FileText, Filter, Search } from "lucide-react"

export default function PaymentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Thanh toán</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <DollarSign className="mr-2 h-4 w-4" />
            Thanh toán mới
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Sắp đến hạn</TabsTrigger>
          <TabsTrigger value="history">Lịch sử thanh toán</TabsTrigger>
          <TabsTrigger value="schedule">Lịch trả nợ</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm theo số hợp đồng..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="date-range" className="text-sm">
              Thời gian:
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="date-range" className="w-[180px]">
                <SelectValue placeholder="Chọn thời gian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="this-month">Tháng này</SelectItem>
                <SelectItem value="last-month">Tháng trước</SelectItem>
                <SelectItem value="last-3-months">3 tháng gần đây</SelectItem>
                <SelectItem value="custom">Tùy chỉnh</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Các khoản thanh toán sắp đến hạn</CardTitle>
              <CardDescription>Quản lý các khoản thanh toán sắp đến hạn của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-amber-600" />
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
                      <DollarSign className="mr-2 h-4 w-4" />
                      Thanh toán ngay
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-amber-600" />
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
                      <DollarSign className="mr-2 h-4 w-4" />
                      Thanh toán ngay
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Phương thức thanh toán</CardTitle>
              <CardDescription>Quản lý các phương thức thanh toán của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Vietcombank</h3>
                        <p className="text-sm text-muted-foreground">**** **** **** 1234</p>
                      </div>
                    </div>
                    <div>
                      <Button variant="outline" size="sm">
                        Mặc định
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">BIDV</h3>
                        <p className="text-sm text-muted-foreground">**** **** **** 5678</p>
                      </div>
                    </div>
                    <div>
                      <Button variant="outline" size="sm">
                        Đặt làm mặc định
                      </Button>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Thêm phương thức thanh toán
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Lịch sử thanh toán</CardTitle>
              <CardDescription>Xem lại các khoản thanh toán đã thực hiện</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-green-600" />
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-green-600" />
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

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Vay mua nhà - Kỳ thanh toán #3</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">1.500.000 VNĐ</p>
                      <p className="text-sm text-green-600">Đã thanh toán: 15/03/2023</p>
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

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Lịch trả nợ</CardTitle>
              <CardDescription>Xem lịch trả nợ của các khoản vay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
      </Tabs>
    </div>
  )
}
