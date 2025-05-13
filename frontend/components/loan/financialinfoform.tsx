import { useState, useEffect } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radiogroup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export function FinancialInfoForm() {
  const [formData, setFormData] = useState({
    occupation: "",
    company: "",
    position: "",
    income: 0,
    expense: 0,
    hasOtherLoans: "no",
    debt: 0,
    assets: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/customers/1/financial-profile");
        if (!response.ok) {
          throw new Error("Failed to fetch financial data");
        }
        const data = await response.json();
        setFormData({
          occupation: data.occupation || "",
          company: data.company || "",
          position: data.position || "",
          income: data.income || 0,
          expense: data.expense || 0,
          hasOtherLoans: data.hasOtherLoans || "no",
          debt: data.debt || 0,
          assets: data.assets || 0,
        });
      } catch (error) {
        console.error("Error fetching financial data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "income" || id === "expense" || id === "debt" || id === "assets" ? Number(value) : value,
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, hasOtherLoans: value }));
  };

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
          <Label htmlFor="occupation">Tình trạng việc làm</Label>
          <Input
            id="occupation"
            placeholder="Không"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Tên công ty</Label>
            <Input
              id="company"
              placeholder="Tên công ty"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Chức vụ</Label>
            <Input
              id="position"
              placeholder="Chức vụ"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="income">Thu nhập hàng tháng (VNĐ)</Label>
            <Input
              id="income"
              placeholder="10000000"
              type="number"
              min="0"
              step="1"
              value={formData.income}
              onChange={handleChange}
            />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="expense">Chi tiêu hàng tháng (VNĐ)</Label>
            <Input
              id="expense"
              placeholder="5000000"
              type="number"
              min="0"
              step="1"
              value={formData.expense}
              onChange={handleChange}
            />
          </div> */}
        </div>
        {/* <div className="space-y-2">
          <Label>Bạn có khoản vay nào khác không?</Label>
          <RadioGroup
            value={formData.hasOtherLoans}
            onValueChange={handleRadioChange}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="loan-yes" />
              <Label htmlFor="loan-yes">Có</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="loan-no" />
              <Label htmlFor="loan-no">Không</Label>
            </div>
          </RadioGroup>
        </div> */}
        <div className="space-y-2">
          <Label htmlFor="debt">Số nợ</Label>
          <Input
            id="debt"
            placeholder="10000000"
            type="number"
            min="0"
            step="1"
            value={formData.debt}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="assets">Tài sản</Label>
          <Input
            id="assets"
            placeholder="10000000"
            type="number"
            min="0"
            step="1"
            value={formData.assets}
            onChange={handleChange}
          />
        </div>
        {/* <div className="space-y-2">
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
        </div> */}
      </CardContent>
    </>
  );
}