import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radiogroup"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function LoanPurposeForm() {
  return (
    <>
      <CardHeader>
        <CardTitle>Mục đích vay</CardTitle>
        <CardDescription>Vui lòng cho chúng tôi biết bạn muốn vay tiền để làm gì</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="loanPurpose">Mục đích vay</Label>
          <Select defaultValue="home">
            <SelectTrigger id="loanPurpose">
              <SelectValue placeholder="Chọn mục đích vay" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Mua nhà</SelectItem>
              <SelectItem value="car">Mua xe</SelectItem>
              <SelectItem value="education">Học tập</SelectItem>
              <SelectItem value="business">Kinh doanh</SelectItem>
              <SelectItem value="personal">Tiêu dùng cá nhân</SelectItem>
              <SelectItem value="other">Khác</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Số tiền muốn vay (VNĐ)</Label>
            <Input id="loanAmount" placeholder="50,000,000" defaultValue="50,000,000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanTerm">Thời hạn vay</Label>
            <Select defaultValue="36">
              <SelectTrigger id="loanTerm">
                <SelectValue placeholder="Chọn thời hạn" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6 tháng</SelectItem>
                <SelectItem value="12">12 tháng</SelectItem>
                <SelectItem value="24">24 tháng</SelectItem>
                <SelectItem value="36">36 tháng</SelectItem>
                <SelectItem value="48">48 tháng</SelectItem>
                <SelectItem value="60">60 tháng</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="loanDescription">Mô tả chi tiết</Label>
          <Textarea
            id="loanDescription"
            placeholder="Vui lòng mô tả chi tiết mục đích sử dụng khoản vay"
            className="min-h-[100px]"
            defaultValue="Tôi muốn vay để mua một căn hộ chung cư tại quận 2, TP.HCM. Đây sẽ là nơi ở chính của gia đình tôi."
          />
        </div>
        <div className="space-y-2">
          <Label>Tài sản đảm bảo (nếu có)</Label>
          <RadioGroup defaultValue="yes" className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="collateral-yes" />
              <Label htmlFor="collateral-yes">Có</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="collateral-no" />
              <Label htmlFor="collateral-no">Không</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="collateralDescription">Mô tả tài sản đảm bảo</Label>
          <Textarea
            id="collateralDescription"
            placeholder="Mô tả chi tiết về tài sản đảm bảo (nếu có)"
            className="min-h-[100px]"
            defaultValue="Sổ đỏ căn hộ hiện tại tại quận 7, TP.HCM. Diện tích 65m2, đã thanh toán đầy đủ, không có tranh chấp."
          />
        </div>
      </CardContent>
    </>
  )
}
