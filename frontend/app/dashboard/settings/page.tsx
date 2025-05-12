import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, CreditCard, Key, Lock, Save, Shield, User } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Cài đặt</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Save className="mr-2 h-4 w-4" />
            Lưu thay đổi
          </Button>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
          <TabsTrigger value="account">Tài khoản</TabsTrigger>
          <TabsTrigger value="security">Bảo mật</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="payment">Thanh toán</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Thông tin cá nhân</CardTitle>
              <CardDescription>Cập nhật thông tin cá nhân của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <User className="h-12 w-12 text-gray-500" />
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-green-600 hover:bg-green-700"
                  >
                    <span className="sr-only">Thay đổi ảnh đại diện</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M16 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
                      <path d="M12 17v-6"></path>
                      <path d="M9 14h6"></path>
                    </svg>
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold">Ảnh đại diện</h3>
                  <p className="text-sm text-muted-foreground">JPG, GIF hoặc PNG. Tối đa 1MB.</p>
                  <div className="mt-2 flex space-x-2">
                    <Button variant="outline" size="sm">
                      Tải lên
                    </Button>
                    <Button variant="outline" size="sm">
                      Xóa
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Họ và tên</Label>
                  <Input id="fullName" defaultValue="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="example@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" defaultValue="0912345678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Ngày sinh</Label>
                  <Input id="dob" type="date" defaultValue="1990-01-01" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Địa chỉ</Label>
                <Textarea id="address" defaultValue="123 Đường ABC, Phường XYZ, Quận 1, TP.HCM" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Thông tin công việc</CardTitle>
              <CardDescription>Cập nhật thông tin công việc của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="occupation">Nghề nghiệp</Label>
                  <Select defaultValue="employee">
                    <SelectTrigger id="occupation">
                      <SelectValue placeholder="Chọn nghề nghiệp" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee">Nhân viên văn phòng</SelectItem>
                      <SelectItem value="business">Kinh doanh</SelectItem>
                      <SelectItem value="freelance">Tự do</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Tên công ty</Label>
                  <Input id="company" defaultValue="Công ty ABC" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="position">Chức vụ</Label>
                  <Input id="position" defaultValue="Nhân viên" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income">Thu nhập hàng tháng (VNĐ)</Label>
                  <Input id="income" defaultValue="15,000,000" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Thông tin tài khoản</CardTitle>
              <CardDescription>Quản lý thông tin tài khoản của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Tên đăng nhập</Label>
                <Input id="username" defaultValue="nguyenvana" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Ngôn ngữ</Label>
                <Select defaultValue="vi">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Chọn ngôn ngữ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vi">Tiếng Việt</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Múi giờ</Label>
                <Select defaultValue="asia_ho_chi_minh">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Chọn múi giờ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asia_ho_chi_minh">Asia/Ho_Chi_Minh (GMT+7)</SelectItem>
                    <SelectItem value="asia_bangkok">Asia/Bangkok (GMT+7)</SelectItem>
                    <SelectItem value="asia_singapore">Asia/Singapore (GMT+8)</SelectItem>
                    <SelectItem value="asia_tokyo">Asia/Tokyo (GMT+9)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="deactivate">Vô hiệu hóa tài khoản</Label>
                  <Button variant="destructive" size="sm">
                    Vô hiệu hóa
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Vô hiệu hóa tài khoản sẽ tạm thời khóa tài khoản của bạn. Bạn có thể kích hoạt lại sau.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Bảo mật</CardTitle>
              <CardDescription>Quản lý cài đặt bảo mật tài khoản của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  Đổi mật khẩu
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Mật khẩu hiện tại</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Mật khẩu mới</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Xác nhận mật khẩu mới</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="w-fit bg-green-600 hover:bg-green-700">Cập nhật mật khẩu</Button>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <h3 className="font-semibold flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  Xác thực hai yếu tố
                </h3>
                <p className="text-sm text-muted-foreground">
                  Bảo vệ tài khoản của bạn bằng cách bật xác thực hai yếu tố.
                </p>
                <div className="flex items-center space-x-2">
                  <Switch id="2fa" />
                  <Label htmlFor="2fa">Bật xác thực hai yếu tố</Label>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <h3 className="font-semibold flex items-center">
                  <Key className="mr-2 h-4 w-4" />
                  Phiên đăng nhập
                </h3>
                <p className="text-sm text-muted-foreground">Quản lý các phiên đăng nhập của bạn trên các thiết bị.</p>
                <div className="space-y-2">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Chrome trên Windows</p>
                        <p className="text-xs text-muted-foreground">Hà Nội, Việt Nam • Hiện tại</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Đăng xuất
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Safari trên iPhone</p>
                        <p className="text-xs text-muted-foreground">TP.HCM, Việt Nam • 2 ngày trước</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Đăng xuất
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-fit">
                  Đăng xuất khỏi tất cả các thiết bị
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Thông báo</CardTitle>
              <CardDescription>Quản lý cài đặt thông báo của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  Thông báo qua email
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Nhắc nhở thanh toán</p>
                      <p className="text-sm text-muted-foreground">
                        Nhận thông báo khi khoản vay sắp đến hạn thanh toán
                      </p>
                    </div>
                    <Switch id="email-payment" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Cập nhật khoản vay</p>
                      <p className="text-sm text-muted-foreground">
                        Nhận thông báo khi có cập nhật về khoản vay của bạn
                      </p>
                    </div>
                    <Switch id="email-loan-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tin tức và khuyến mãi</p>
                      <p className="text-sm text-muted-foreground">Nhận thông tin về tin tức và khuyến mãi mới</p>
                    </div>
                    <Switch id="email-marketing" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  Thông báo qua SMS
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Nhắc nhở thanh toán</p>
                      <p className="text-sm text-muted-foreground">Nhận SMS khi khoản vay sắp đến hạn thanh toán</p>
                    </div>
                    <Switch id="sms-payment" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Xác nhận thanh toán</p>
                      <p className="text-sm text-muted-foreground">Nhận SMS xác nhận khi thanh toán thành công</p>
                    </div>
                    <Switch id="sms-payment-confirmation" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  Thông báo ứng dụng
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tất cả thông báo</p>
                      <p className="text-sm text-muted-foreground">Bật/tắt tất cả thông báo trong ứng dụng</p>
                    </div>
                    <Switch id="app-all" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Phương thức thanh toán</CardTitle>
              <CardDescription>Quản lý phương thức thanh toán của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Thẻ ngân hàng
                </h3>
                <div className="space-y-2">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md flex items-center justify-center text-white font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium">Vietcombank</p>
                          <p className="text-sm text-muted-foreground">**** **** **** 1234</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                          Mặc định
                        </Badge>
                        <Button variant="outline" size="sm">
                          Chỉnh sửa
                        </Button>
                        <Button variant="outline" size="sm">
                          Xóa
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-16 bg-gradient-to-r from-red-500 to-red-700 rounded-md flex items-center justify-center text-white font-bold">
                          MC
                        </div>
                        <div>
                          <p className="font-medium">BIDV</p>
                          <p className="text-sm text-muted-foreground">**** **** **** 5678</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Đặt làm mặc định
                        </Button>
                        <Button variant="outline" size="sm">
                          Chỉnh sửa
                        </Button>
                        <Button variant="outline" size="sm">
                          Xóa
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Thêm thẻ mới
                  </Button>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold">Cài đặt thanh toán tự động</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Thanh toán tự động</p>
                      <p className="text-sm text-muted-foreground">Tự động thanh toán khoản vay khi đến hạn</p>
                    </div>
                    <Switch id="auto-payment" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Nhắc nhở trước khi thanh toán</p>
                      <p className="text-sm text-muted-foreground">Gửi thông báo trước khi thanh toán tự động</p>
                    </div>
                    <Switch id="payment-reminder" defaultChecked />
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
