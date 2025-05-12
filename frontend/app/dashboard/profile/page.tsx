import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Edit, Mail, Phone, Save, User, MapPin, Briefcase, CreditCard, FileText, Shield, Eye } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Hồ sơ cá nhân</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Save className="mr-2 h-4 w-4" />
            Lưu thay đổi
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>Thông tin cá nhân</CardTitle>
            <CardDescription>Thông tin cơ bản của bạn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/images/avatar.jpg" alt="Nguyễn Văn A" />
                  <AvatarFallback>NA</AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-green-600 hover:bg-green-700"
                >
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Thay đổi ảnh đại diện</span>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Nguyễn Văn A</h3>
                <p className="text-sm text-muted-foreground">Khách hàng từ 01/2023</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">example@email.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">0912345678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">123 Đường ABC, Phường XYZ, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Nhân viên tại Công ty ABC</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Điểm tín dụng</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800 dark:text-green-100">
                  Tốt
                </Badge>
              </div>
              <Progress value={72} className="h-2" />
              <p className="text-xs text-muted-foreground text-right">720/1000</p>
            </div>

            <div className="pt-4 border-t">
              <Button variant="outline" className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Chỉnh sửa thông tin
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between">
                <CardTitle>Chi tiết hồ sơ</CardTitle>
                <TabsList>
                  <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                  <TabsTrigger value="loans">Khoản vay</TabsTrigger>
                  <TabsTrigger value="documents">Tài liệu</TabsTrigger>
                </TabsList>
              </div>
              <CardDescription>Thông tin chi tiết về hồ sơ của bạn</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <TabsContent value="overview" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Thông tin cá nhân</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Họ và tên</Label>
                      <Input id="fullName" defaultValue="Nguyễn Văn A" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">Số CMND/CCCD</Label>
                      <Input id="idNumber" defaultValue="0123456789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Ngày sinh</Label>
                      <Input id="dob" type="date" defaultValue="1990-01-01" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="example@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input id="phone" defaultValue="0912345678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Giới tính</Label>
                      <Input id="gender" defaultValue="Nam" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Textarea
                      id="address"
                      defaultValue="123 Đường ABC, Phường XYZ, Quận 1, TP.HCM"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-semibold">Thông tin công việc</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Nghề nghiệp</Label>
                      <Input id="occupation" defaultValue="Nhân viên văn phòng" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Tên công ty</Label>
                      <Input id="company" defaultValue="Công ty ABC" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Chức vụ</Label>
                      <Input id="position" defaultValue="Nhân viên" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="income">Thu nhập hàng tháng (VNĐ)</Label>
                      <Input id="income" defaultValue="15,000,000" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-semibold">Thông tin ngân hàng</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bankAccount">Số tài khoản</Label>
                      <Input id="bankAccount" defaultValue="1234567890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bank">Ngân hàng</Label>
                      <Input id="bank" defaultValue="Vietcombank" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="loans" className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Khoản vay hiện tại</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <CreditCard className="h-5 w-5 text-green-600" />
                            <h4 className="font-semibold">Vay mua nhà</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: HL-2023-001</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">30.000.000 VNĐ</p>
                          <p className="text-sm text-green-600">Đang hoạt động</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Tiến độ trả nợ</span>
                          <span>33% hoàn thành</span>
                        </div>
                        <Progress value={33} className="h-2" />
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <CreditCard className="h-5 w-5 text-green-600" />
                            <h4 className="font-semibold">Vay tiêu dùng</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: TD-2023-042</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">20.000.000 VNĐ</p>
                          <p className="text-sm text-green-600">Đang hoạt động</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Tiến độ trả nợ</span>
                          <span>50% hoàn thành</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-semibold">Lịch sử khoản vay</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            <h4 className="font-semibold">Vay mua xe</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Số hợp đồng: MX-2022-056</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">150.000.000 VNĐ</p>
                          <p className="text-sm text-blue-600">Đã hoàn thành</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Tài liệu cá nhân</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold">CMND/CCCD</h4>
                            <p className="text-sm text-muted-foreground">Đã xác thực</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Xem
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold">Hộ khẩu</h4>
                            <p className="text-sm text-muted-foreground">Đã xác thực</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Xem
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold">Bảng lương</h4>
                            <p className="text-sm text-muted-foreground">Đã xác thực</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Xem
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Tài liệu khoản vay</h3>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Xem tất cả
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold">Hợp đồng vay mua nhà</h4>
                            <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Xem
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold">Hợp đồng vay tiêu dùng</h4>
                            <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Xem
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Bảo mật tài khoản</CardTitle>
            <CardDescription>Quản lý cài đặt bảo mật tài khoản của bạn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">Mật khẩu</h3>
                </div>
                <Button variant="outline" size="sm">
                  Thay đổi
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Mật khẩu của bạn được cập nhật lần cuối vào 15/03/2023</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">Xác thực hai yếu tố</h3>
                </div>
                <Button variant="outline" size="sm">
                  Bật
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Bảo vệ tài khoản của bạn bằng xác thực hai yếu tố</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">Thiết bị đã đăng nhập</h3>
                </div>
                <Button variant="outline" size="sm">
                  Quản lý
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Quản lý các thiết bị đã đăng nhập vào tài khoản của bạn</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>Các hoạt động gần đây trên tài khoản của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Thanh toán khoản vay</p>
                  <p className="text-xs text-muted-foreground">Vay mua nhà - Kỳ thanh toán #4</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm">1.500.000 VNĐ</p>
                  <p className="text-xs text-muted-foreground">15/04/2023</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tải xuống hợp đồng</p>
                  <p className="text-xs text-muted-foreground">Hợp đồng vay tiêu dùng</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-muted-foreground">10/04/2023</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Thanh toán khoản vay</p>
                  <p className="text-xs text-muted-foreground">Vay tiêu dùng - Kỳ thanh toán #2</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm">1.000.000 VNĐ</p>
                  <p className="text-xs text-muted-foreground">20/04/2023</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <User className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Cập nhật thông tin cá nhân</p>
                  <p className="text-xs text-muted-foreground">Thay đổi số điện thoại</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-muted-foreground">05/04/2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
    