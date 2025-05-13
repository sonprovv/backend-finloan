import { useState, useEffect } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/customers/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData({
          fullName: data.name || "",
          idNumber: data.national_id || "",
          dob: data.dob || "",
          gender: "", // Not provided in API
          phone: data.phone || "",
          email: data.email || "",
          address: "", // Not provided in API
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleGenderChange = (value) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };

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
            <Input
              id="fullName"
              placeholder="Nguyễn Văn A"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idNumber">Số CMND/CCCD</Label>
            <Input
              id="idNumber"
              placeholder="0123456789"
              value={formData.idNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dob">Ngày sinh</Label>
            <Input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="gender">Giới tính</Label>
            <Select value={formData.gender} onValueChange={handleGenderChange}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Chọn giới tính" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Nam</SelectItem>
                <SelectItem value="female">Nữ</SelectItem>
                <SelectItem value="other">Khác</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              placeholder="0912345678"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <div className="space-y-2">
          <Label htmlFor="address">Địa chỉ thường trú</Label>
          <Textarea
            id="address"
            placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
            value={formData.address}
            onChange={handleChange}
          />
        </div> */}
      </CardContent>
    </>
  );
}