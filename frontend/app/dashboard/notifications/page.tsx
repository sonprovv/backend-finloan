import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCircle, Clock, CreditCard, FileText, Info, Settings } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Thông báo</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Đánh dấu tất cả đã đọc
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="unread">Chưa đọc</TabsTrigger>
          <TabsTrigger value="important">Quan trọng</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Thông báo gần đây</CardTitle>
              <CardDescription>Tất cả thông báo của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">Khoản vay đã được phê duyệt</h3>
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                            Mới
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Khoản vay mua nhà của bạn đã được phê duyệt và sẽ được giải ngân trong vòng 24 giờ.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Hôm nay, 10:30</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Nhắc nhở thanh toán</h3>
                        <p className="text-sm text-muted-foreground">
                          Khoản vay tiêu dùng của bạn sẽ đến hạn thanh toán vào ngày 20/05/2023.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Hôm qua, 15:45</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Hợp đồng mới đã sẵn sàng</h3>
                        <p className="text-sm text-muted-foreground">
                          Hợp đồng vay tiêu dùng của bạn đã được tạo và sẵn sàng để ký.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">22/04/2023</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Thanh toán thành công</h3>
                        <p className="text-sm text-muted-foreground">
                          Khoản thanh toán của bạn cho vay mua nhà đã được xử lý thành công.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">15/04/2023</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Info className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Cập nhật lãi suất</h3>
                        <p className="text-sm text-muted-foreground">
                          Chúng tôi đã cập nhật lãi suất cho các khoản vay mới. Xem ngay để biết thêm chi tiết.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">10/04/2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Thông báo chưa đọc</CardTitle>
              <CardDescription>Các thông báo bạn chưa đọc</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">Khoản vay đã được phê duyệt</h3>
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                            Mới
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Khoản vay mua nhà của bạn đã được phê duyệt và sẽ được giải ngân trong vòng 24 giờ.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Hôm nay, 10:30</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Nhắc nhở thanh toán</h3>
                        <p className="text-sm text-muted-foreground">
                          Khoản vay tiêu dùng của bạn sẽ đến hạn thanh toán vào ngày 20/05/2023.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Hôm qua, 15:45</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="important" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Thông báo quan trọng</CardTitle>
              <CardDescription>Các thông báo quan trọng cần chú ý</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">Khoản vay đã được phê duyệt</h3>
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                            Mới
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Khoản vay mua nhà của bạn đã được phê duyệt và sẽ được giải ngân trong vòng 24 giờ.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Hôm nay, 10:30</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Nhắc nhở thanh toán</h3>
                        <p className="text-sm text-muted-foreground">
                          Khoản vay tiêu dùng của bạn sẽ đến hạn thanh toán vào ngày 20/05/2023.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Hôm qua, 15:45</p>
                    </div>
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
