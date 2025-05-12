import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radiogroup"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, AlertCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function FinancialInfoForm() {
  return (
    <>
      <CardHeader>
        <CardTitle>Thông tin tài chính</CardTitle>
        <CardDescription>Vui lòng cung cấp thông tin về tình hình tài chính của bạn</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertTitle>Thông tin quan trọng</AlertTitle>
          <AlertDescription className="text-sm">
            Thông tin tài chính của bạn sẽ được sử dụng để đánh giá khả năng thanh toán và tính toán khoản vay phù hợp.
            Vui lòng cung cấp thông tin chính xác.
          </AlertDescription>
        </Alert>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Tên công ty</Label>
            <Input id="company" placeholder="Tên công ty" defaultValue="Công ty ABC" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Chức vụ</Label>
            <Input id="position" placeholder="Chức vụ" defaultValue="Nhân viên" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="income">Thu nhập hàng tháng (VNĐ)</Label>
            <Input id="income" placeholder="10,000,000" defaultValue="15,000,000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expense">Chi tiêu hàng tháng (VNĐ)</Label>
            <Input id="expense" placeholder="5,000,000" defaultValue="7,000,000" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Bạn có khoản vay nào khác không?</Label>
          <RadioGroup defaultValue="no" className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="loan-yes" />
              <Label htmlFor="loan-yes">Có</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="loan-no" />
              <Label htmlFor="loan-no">Không</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bankAccount">Số tài khoản ngân hàng</Label>
          <Input id="bankAccount" placeholder="1234567890" defaultValue="1234567890" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bank">Ngân hàng</Label>
          <Select defaultValue="vietcombank">
            <SelectTrigger id="bank">
              <SelectValue placeholder="Chọn ngân hàng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vietcombank">Vietcombank</SelectItem>
              <SelectItem value="vietinbank">Vietinbank</SelectItem>
              <SelectItem value="bidv">BIDV</SelectItem>
              <SelectItem value="agribank">Agribank</SelectItem>
              <SelectItem value="tpbank">TPBank</SelectItem>
              <SelectItem value="other">Khác</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="font-medium">Minh chứng thu nhập</Label>
          <Alert variant="destructive" className="mb-2">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Bắt buộc</AlertTitle>
            <AlertDescription className="text-sm">
              Vui lòng tải lên ít nhất một trong các tài liệu sau: bảng lương, sao kê tài khoản, hợp đồng lao động hoặc
              giấy xác nhận thu nhập.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Bảng lương (3 tháng gần nhất)</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Kéo và thả file hoặc</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Chọn file
                </Button>
                <p className="text-xs text-gray-400 mt-2">Hỗ trợ: PDF, JPG, PNG (Tối đa 5MB)</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Sao kê tài khoản (3 tháng gần nhất)</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Kéo và thả file hoặc</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Chọn file
                </Button>
                <p className="text-xs text-gray-400 mt-2">Hỗ trợ: PDF, JPG, PNG (Tối đa 5MB)</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Hợp đồng lao động hoặc giấy xác nhận thu nhập (nếu có)</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Kéo và thả file hoặc</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Chọn file
                </Button>
                <p className="text-xs text-gray-400 mt-2">Hỗ trợ: PDF, JPG, PNG (Tối đa 5MB)</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </>
  )
}
