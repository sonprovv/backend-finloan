import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Eye, Filter, PlusCircle, Search } from "lucide-react"

export default function LoansPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Khoản vay</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Vay mới
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Đang hoạt động</TabsTrigger>
          <TabsTrigger value="pending">Đang xét duyệt</TabsTrigger>
          <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm khoản vay..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="sort-by" className="text-sm">
              Sắp xếp theo:
            </Label>
            <Select defaultValue="newest">
              <SelectTrigger id="sort-by" className="w-[180px]">
                <SelectValue placeholder="Chọn tiêu chí" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="oldest">Cũ nhất</SelectItem>
                <SelectItem value="amount-high">Số tiền (cao đến thấp)</SelectItem>
                <SelectItem value="amount-low">Số tiền (thấp đến cao)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Khoản vay đang hoạt động</CardTitle>
              <CardDescription>Các khoản vay hiện đang trong thời gian trả nợ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay mua nhà</h3>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800 dark:text-green-100">
                          Đang hoạt động
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: HL-2023-001</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">30.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: 8.5%/năm</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ trả nợ</span>
                      <span>33% hoàn thành</span>
                    </div>
                    <Progress value={33} className="h-2" />
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Ngày giải ngân</p>
                      <p className="font-medium">10/01/2023</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Kỳ hạn</p>
                      <p className="font-medium">36 tháng</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Thanh toán tiếp theo</p>
                      <p className="font-medium">15/05/2023</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Đã thanh toán</p>
                      <p className="font-medium">10.000.000 VNĐ</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Còn lại</p>
                      <p className="font-medium">20.000.000 VNĐ</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Khoản thanh toán hàng tháng</p>
                      <p className="font-medium">1.500.000 VNĐ</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải hợp đồng
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Thanh toán
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay tiêu dùng</h3>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800 dark:text-green-100">
                          Đang hoạt động
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: TD-2023-042</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">20.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: 12%/năm</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ trả nợ</span>
                      <span>50% hoàn thành</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Ngày giải ngân</p>
                      <p className="font-medium">05/03/2023</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Kỳ hạn</p>
                      <p className="font-medium">24 tháng</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Thanh toán tiếp theo</p>
                      <p className="font-medium">20/05/2023</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Đã thanh toán</p>
                      <p className="font-medium">10.000.000 VNĐ</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Còn lại</p>
                      <p className="font-medium">10.000.000 VNĐ</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Khoản thanh toán hàng tháng</p>
                      <p className="font-medium">1.000.000 VNĐ</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải hợp đồng
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Thanh toán
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Khoản vay đang xét duyệt</CardTitle>
              <CardDescription>Các khoản vay đang trong quá trình xét duyệt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay kinh doanh</h3>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-800 dark:text-amber-100">
                          Đang xét duyệt
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hồ sơ: KD-2023-018</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">50.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: Chưa xác định</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Ngày đăng ký</p>
                      <p className="font-medium">20/04/2023</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Kỳ hạn yêu cầu</p>
                      <p className="font-medium">48 tháng</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Trạng thái</p>
                      <p className="font-medium">Đang chờ phê duyệt</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                      Hủy đăng ký
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Khoản vay đã hoàn thành</CardTitle>
              <CardDescription>Các khoản vay đã hoàn thành thanh toán</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay mua xe</h3>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800 dark:text-blue-100">
                          Đã hoàn thành
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: MX-2022-056</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">150.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: 7.5%/năm</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ trả nợ</span>
                      <span>100% hoàn thành</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Ngày giải ngân</p>
                      <p className="font-medium">15/06/2022</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Kỳ hạn</p>
                      <p className="font-medium">12 tháng</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Ngày hoàn thành</p>
                      <p className="font-medium">15/06/2023</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Tổng đã thanh toán</p>
                      <p className="font-medium">161.250.000 VNĐ</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Gốc</p>
                      <p className="font-medium">150.000.000 VNĐ</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Lãi</p>
                      <p className="font-medium">11.250.000 VNĐ</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải hợp đồng
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải giấy xác nhận
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
              <CardTitle>Tất cả khoản vay</CardTitle>
              <CardDescription>Tất cả các khoản vay của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Vay mua nhà - Đang hoạt động */}
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay mua nhà</h3>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800 dark:text-green-100">
                          Đang hoạt động
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: HL-2023-001</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">30.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: 8.5%/năm</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ trả nợ</span>
                      <span>33% hoàn thành</span>
                    </div>
                    <Progress value={33} className="h-2" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Thanh toán
                    </Button>
                  </div>
                </div>

                {/* Vay tiêu dùng - Đang hoạt động */}
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay tiêu dùng</h3>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800 dark:text-green-100">
                          Đang hoạt động
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: TD-2023-042</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">20.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: 12%/năm</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ trả nợ</span>
                      <span>50% hoàn thành</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Thanh toán
                    </Button>
                  </div>
                </div>

                {/* Vay kinh doanh - Đang xét duyệt */}
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay kinh doanh</h3>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-800 dark:text-amber-100">
                          Đang xét duyệt
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hồ sơ: KD-2023-018</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">50.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: Chưa xác định</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                      Hủy đăng ký
                    </Button>
                  </div>
                </div>

                {/* Vay mua xe - Đã hoàn thành */}
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold">Vay mua xe</h3>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800 dark:text-blue-100">
                          Đã hoàn thành
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: MX-2022-056</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">150.000.000 VNĐ</p>
                      <p className="text-sm text-muted-foreground">Lãi suất: 7.5%/năm</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ trả nợ</span>
                      <span>100% hoàn thành</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Chi tiết
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải giấy xác nhận
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

function Label({ htmlFor, className, children }: { htmlFor?: string; className?: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
    >
      {children}
    </label>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
