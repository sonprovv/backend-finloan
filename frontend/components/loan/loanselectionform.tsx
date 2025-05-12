import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function LoanSelectionForm() {
  return (
    <>
      <CardHeader>
        <CardTitle>Chọn khoản vay</CardTitle>
        <CardDescription>Dựa trên thông tin của bạn, chúng tôi đề xuất các gói vay sau</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recommended" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Đề xuất</TabsTrigger>
            <TabsTrigger value="lowest-rate">Lãi suất thấp</TabsTrigger>
            <TabsTrigger value="flexible">Linh hoạt</TabsTrigger>
          </TabsList>
          <TabsContent value="recommended" className="space-y-4 mt-4">
            <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Gói vay ưu đãi</h3>
                  <p className="text-sm text-muted-foreground">Phù hợp với nhu cầu của bạn</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-lg">50.000.000 VNĐ</p>
                  <p className="text-sm text-green-600">Lãi suất: 8.5%/năm</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Thời hạn: 36 tháng</span>
                  <span>Khoản trả hàng tháng: 1.580.000 VNĐ</span>
                </div>
              </div>
              <div className="mt-4">
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Không cần tài sản đảm bảo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Giải ngân trong vòng 24 giờ
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Miễn phí trả nợ trước hạn sau 12 tháng
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex justify-end">
                <Button className="bg-green-600 hover:bg-green-700">Chọn gói này</Button>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Gói vay tiêu chuẩn</h3>
                  <p className="text-sm text-muted-foreground">Phù hợp với đa số khách hàng</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-lg">50.000.000 VNĐ</p>
                  <p className="text-sm text-muted-foreground">Lãi suất: 9.5%/năm</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Thời hạn: 36 tháng</span>
                  <span>Khoản trả hàng tháng: 1.610.000 VNĐ</span>
                </div>
              </div>
              <div className="mt-4">
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Không cần tài sản đảm bảo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Giải ngân trong vòng 48 giờ
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Miễn phí trả nợ trước hạn sau 6 tháng
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline">Chọn gói này</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="lowest-rate" className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Gói vay lãi suất thấp</h3>
                  <p className="text-sm text-muted-foreground">Yêu cầu tài sản đảm bảo</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-lg">50.000.000 VNĐ</p>
                  <p className="text-sm text-green-600">Lãi suất: 7.5%/năm</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Thời hạn: 36 tháng</span>
                  <span>Khoản trả hàng tháng: 1.550.000 VNĐ</span>
                </div>
              </div>
              <div className="mt-4">
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Yêu cầu tài sản đảm bảo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Giải ngân trong vòng 72 giờ
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Miễn phí trả nợ trước hạn
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline">Chọn gói này</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="flexible" className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Gói vay linh hoạt</h3>
                  <p className="text-sm text-muted-foreground">Kỳ hạn thanh toán linh hoạt</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-lg">50.000.000 VNĐ</p>
                  <p className="text-sm text-muted-foreground">Lãi suất: 10.5%/năm</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Thời hạn: 36 tháng</span>
                  <span>Khoản trả hàng tháng: Linh hoạt</span>
                </div>
              </div>
              <div className="mt-4">
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Không cần tài sản đảm bảo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Linh hoạt kỳ hạn thanh toán
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Có thể tạm hoãn thanh toán 1 tháng/năm
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline">Chọn gói này</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </>
  )
}
