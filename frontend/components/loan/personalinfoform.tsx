import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function PersonalInfoForm() {
  return (
    <>
      <CardHeader>
        <CardTitle>Thông tin cá nhân</CardTitle>
        <CardDescription>Vui lòng cung cấp thông tin cá nhân của bạn</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Họ và tên</Label>
            <Input id="fullName" placeholder="Nguyễn Văn A" defaultValue="Nguyễn Văn A" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idNumber">Số CMND/CCCD</Label>
            <Input id="idNumber" placeholder="0123456789" defaultValue="0123456789" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dob">Ngày sinh</Label>
            <Input id="dob" type="date" defaultValue="1990-01-01" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Giới tính</Label>
            <Select defaultValue="male">
              <SelectTrigger id="gender">
                <SelectValue placeholder="Chọn giới tính" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Nam</SelectItem>
                <SelectItem value="female">Nữ</SelectItem>
                <SelectItem value="other">Khác</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input id="phone" placeholder="0912345678" defaultValue="0912345678" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@email.com" defaultValue="example@email.com" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Địa chỉ thường trú</Label>
          <Textarea
            id="address"
            placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
            defaultValue="123 Đường ABC, Phường XYZ, Quận 1, TP.HCM"
          />
        </div>
      </CardContent>
    </>
  )
}
