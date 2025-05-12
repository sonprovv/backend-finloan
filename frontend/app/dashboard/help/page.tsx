import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, MessageSquare, Phone, Search } from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Trợ giúp</h2>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Tìm kiếm câu hỏi hoặc chủ đề..." className="pl-10 max-w-3xl" />
      </div>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList>
          <TabsTrigger value="faq">Câu hỏi thường gặp</TabsTrigger>
          <TabsTrigger value="contact">Liên hệ hỗ trợ</TabsTrigger>
          <TabsTrigger value="guides">Hướng dẫn sử dụng</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi thường gặp</CardTitle>
              <CardDescription>Các câu hỏi và giải đáp phổ biến về dịch vụ của chúng tôi</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Làm thế nào để đăng ký khoản vay mới?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Để đăng ký khoản vay mới, bạn có thể nhấp vào nút "Vay mới" trên trang Bảng điều khiển hoặc trong menu chính. Sau đó, bạn sẽ được hướng dẫn qua quy trình đăng ký gồm 5 bước: cung cấp thông tin cá nhân, thông tin tài chính, mục đích vay, chọn khoản vay phù hợp và xác nhận thông tin. Sau khi hoàn tất, đơn đăng ký của bạn sẽ được xử lý và bạn sẽ nhận được thông báo về kết quả trong vòng 24-48 giờ.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Làm thế nào để thanh toán khoản vay của tôi?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Bạn có thể thanh toán khoản vay của mình thông qua nhiều phương thức khác nhau:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Thanh toán trực tuyến thông qua ứng dụng hoặc website của chúng tôi</li>
                      <li>Chuyển khoản ngân hàng đến tài khoản của công ty</li>
                      <li>Thanh toán tự động (thiết lập trong phần Cài đặt)</li>
                      <li>Thanh toán tại các điểm giao dịch của đối tác</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      Để tránh phí phạt trả chậm, vui lòng đảm bảo thanh toán trước hoặc đúng ngày đến hạn được ghi trong lịch trả nợ của bạn.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Tôi có thể trả nợ trước hạn không?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Có, bạn có thể trả nợ trước hạn cho khoản vay của mình. Tuy nhiên, tùy thuộc vào loại khoản vay và thời gian vay thực tế, có thể có phí trả nợ trước hạn áp dụng:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Đối với khoản vay dưới 12 tháng: phí 2% số tiền trả trước hạn</li>
                      <li>Đối với khoản vay từ 12-24 tháng: phí 1% số tiền trả trước hạn</li>
                      <li>Đối với khoản vay trên 24 tháng: miễn phí trả nợ trước hạn</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      Để trả nợ trước hạn, vui lòng liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi để được hướng dẫn chi tiết.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Điểm tín dụng của tôi được tính như thế nào?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Điểm tín dụng của bạn được tính dựa trên nhiều yếu tố khác nhau, bao gồm:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Lịch sử thanh toán (chiếm 35% trọng số)</li>
                      <li>Tổng dư nợ hiện tại (chiếm 30% trọng số)</li>
                      <li>Thời gian sử dụng tín dụng (chiếm 15% trọng số)</li>
                      <li>Các khoản tín dụng mới (chiếm 10% trọng số)</li>
                      <li>Loại hình tín dụng đang sử dụng (chiếm 10% trọng số)</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      Điểm tín dụng của bạn được cập nhật hàng tháng và có thể được cải thiện thông qua việc thanh toán đúng hạn, giảm dư nợ và sử dụng tín dụng một cách có trách nhiệm.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Tôi cần chuẩn bị những giấy tờ gì khi đăng ký vay?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Các giấy tờ cần thiết khi đăng ký vay bao gồm:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>CMND/CCCD còn hiệu lực</li>
                      <li>Hộ khẩu/KT3</li>
                      <li>Bảng lương hoặc sao kê tài khoản ngân hàng 3 tháng gần nhất</li>
                      <li>Hợp đồng lao động (nếu có)</li>
                      <li>Giấy tờ chứng minh tài sản đảm bảo (nếu vay có tài sản đảm bảo)</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      Tùy thuộc vào loại khoản vay và số tiền vay, có thể yêu cầu thêm các giấy tờ khác. Bạn sẽ được thông báo cụ thể trong quá trình đăng ký.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Tôi có thể vay tối đa bao nhiêu tiền?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Số tiền vay tối đa phụ thuộc vào nhiều yếu tố như thu nhập, lịch sử tín dụng, khả năng trả nợ và loại khoản vay:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Vay tiêu dùng không tài sản đảm bảo: tối đa 500 triệu VNĐ</li>
                      <li>Vay mua nhà: tối đa 70% giá trị bất động sản</li>
                      <li>Vay mua xe: tối đa 80% giá trị xe</li>
                      <li>Vay kinh doanh: tối đa 2 tỷ VNĐ (tùy theo phương án kinh doanh)</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      Để biết chính xác số tiền vay tối đa mà bạn đủ điều kiện, vui lòng sử dụng công cụ tính toán khoản vay trên trang web của chúng tôi hoặc liên hệ trực tiếp với nhân viên tư vấn.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Tôi quên mật khẩu đăng nhập, phải làm sao?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Nếu bạn quên mật khẩu đăng nhập, vui lòng thực hiện các bước sau:
                    </p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Nhấp vào liên kết "Quên mật khẩu?" trên trang đăng nhập</li>
                      <li>Nhập địa chỉ email đã đăng ký với tài khoản của bạn</li>
                      <li>Kiểm tra email và làm theo hướng dẫn để đặt lại mật khẩu</li>
                      <li>Tạo mật khẩu mới và đăng nhập lại vào hệ thống</li>
                    </ol>
                    <p className="mt-2 text-muted-foreground">
                      Nếu bạn không nhận được email đặt lại mật khẩu hoặc gặp vấn đề khác, vui lòng liên hệ với bộ phận hỗ trợ khách hàng qua số điện thoại 1900 1234 hoặc email support@finloan.vn.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Liên hệ hỗ trợ</CardTitle>
              <CardDescription>Các kênh liên hệ để nhận hỗ trợ từ đội ngũ chăm sóc khách hàng</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-green-100 dark:border-green-900">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-center mb-2">
                      <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Hotline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      <p className="text-xl font-semibold text-green-600 dark:text-green-400">1900 1234</p>
                      <p className="text-sm text-muted-foreground">Hoạt động 24/7</p>
                      <p className="text-sm text-muted-foreground">Hỗ trợ tất cả các vấn đề liên quan đến khoản vay</p>
                      <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                        <Phone className="mr-2 h-4 w-4" />
                        Gọi ngay
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-100 dark:border-green-900">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-center mb-2">
                      <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      <p className="text-xl font-semibold text-green-600 dark:text-green-400">support@finloan.vn</p>
                      <p className="text-sm text-muted-foreground">Phản hồi trong vòng 24 giờ</p>
                      <p className="text-sm text-muted-foreground">Gửi yêu cầu hỗ trợ chi tiết hoặc câu hỏi</p>
                      <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                        <Mail className="mr-2 h-4 w-4" />
                        Gửi email
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-100 dark:border-green-900">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-center mb-2">
                      <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Chat trực tuyến</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      <p className="text-xl font-semibold text-green-600 dark:text-green-400">Chat với tư vấn viên</p>
                      <p className="text-sm text-muted-foreground">Hoạt động từ 8:00 - 22:00</p>
                      <p className="text-sm text-muted-foreground">Nhận hỗ trợ nhanh chóng từ đội ngũ tư vấn viên</p>
                      <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Bắt đầu chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 border-t pt-8">
                <h3 className="text-lg font-semibold mb-4">Gửi yêu cầu hỗ trợ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Họ và tên
                    </label>
                    <Input id="name" placeholder="Nhập họ và tên của bạn" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Nhập địa chỉ email của bạn" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Số điện thoại
                    </label>
                    <Input id="phone" placeholder="Nhập số điện thoại của bạn" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Chủ đề
                    </label>
                    <Input id="subject" placeholder="Nhập chủ đề yêu cầu hỗ trợ" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải"
                    ></textarea>
                  </div>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Gửi yêu cầu
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hướng dẫn sử dụng</CardTitle>
              <CardDescription>Các hướng dẫn chi tiết về cách sử dụng các tính năng của hệ thống</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Đăng ký khoản vay mới</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Đăng nhập vào tài khoản của bạn</li>
                      <li>Nhấp vào nút "Vay mới" trên trang Bảng điều khiển</li>
                      <li>Điền thông tin cá nhân trong bước 1</li>
                      <li>Cung cấp thông tin tài chính trong bước 2</li>
                      <li>Chọn mục đích vay và số tiền vay trong bước 3</li>
                      <li>Chọn gói vay phù hợp trong bước 4</li>
                      <li>Xác nhận thông tin và gửi đơn đăng ký trong bước 5</li>
                    </ol>
                    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                      Xem hướng dẫn chi tiết
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Thanh toán khoản vay</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Đăng nhập vào tài khoản của bạn</li>
                      <li>Truy cập trang "Thanh toán" từ menu chính</li>
                      <li>Chọn khoản vay bạn muốn thanh toán</li>
                      <li>Nhấp vào nút "Thanh toán ngay"</li>
                      <li>Chọn phương thức thanh toán</li>
                      <li>Nhập số tiền thanh toán (nếu không phải toàn bộ khoản)</li>
                      <li>Xác nhận và hoàn tất thanh toán</li>
                    </ol>
                    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                      Xem hướng dẫn chi tiết
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Quản lý tài liệu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Đăng nhập vào tài khoản của bạn</li>
                      <li>Truy cập trang "Tài liệu" từ menu chính</li>
                      <li>Chọn loại tài liệu bạn muốn xem (Hợp đồng, Lịch trả nợ, Biên lai)</li>
                      <li>Nhấp vào nút "Xem" để mở tài liệu</li>
                      <li>Nhấp vào nút "Tải xuống" để lưu tài liệu về máy</li>
                      <li>Sử dụng chức năng "Tải lên tài liệu" để thêm tài liệu mới</li>
                    </ol>
                    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                      Xem hướng dẫn chi tiết
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Cài đặt tài khoản</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Đăng nhập vào tài khoản của bạn</li>
                      <li>Truy cập trang "Cài đặt" từ menu chính</li>
                      <li>Chọn tab tương ứng với cài đặt bạn muốn thay đổi</li>
                      <li>Cập nhật thông tin cá nhân trong tab "Hồ sơ"</li>
                      <li>Thay đổi mật khẩu và cài đặt bảo mật trong tab "Bảo mật"</li>
                      <li>Quản lý thông báo trong tab "Thông báo"</li>
                      <li>Quản lý phương thức thanh toán trong tab "Thanh toán"</li>
                      <li>Nhấp vào "Lưu thay đổi" để cập nhật cài đặt</li>
                    </ol>
                    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                      Xem hướng dẫn chi tiết
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 border-t pt-8">
                <h3 className="text-lg font-semibold mb-4">Video hướng dẫn</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <div className="text-center p-4">
                          <p className="font-medium">Hướng dẫn đăng ký khoản vay</p>
                          <p className="text-sm text-muted-foreground mt-1">Thời lượng: 5:32</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button variant="outline" className="w-full">
                          Xem video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <div className="text-center p-4">
                          <p className="font-medium">Hướng dẫn thanh toán khoản vay</p>
                          <p className="text-sm text-muted-foreground mt-1">Thời lượng: 4:15</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button variant="outline" className="w-full">
                          Xem video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <div className="text-center p-4">
                          <p className="font-medium">Hướng dẫn quản lý tài khoản</p>
                          <p className="text-sm text-muted-foreground mt-1">Thời lượng: 6:48</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button variant="outline" className="w-full">
                          Xem video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

