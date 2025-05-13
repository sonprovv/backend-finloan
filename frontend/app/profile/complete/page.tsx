"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Camera, CreditCard, Upload, Check, AlertCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/usetoast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AuthCheck } from "@/components/auth/authcheck"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function CompleteProfilePage() {
  const [activeTab, setActiveTab] = useState("identity")
  const [isLoading, setIsLoading] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [identityData, setIdentityData] = useState<any>(null)
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  const { toast } = useToast()

  // Giả lập quá trình quét CCCD
  const scanIdentityCard = async () => {
    setIsScanning(true)
    setProgress(0)

    // Giả lập tiến trình quét
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 300)

    // Giả lập gọi identity service để đọc CCCD
    setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setIsScanning(false)
      setScanComplete(true)

      // Dữ liệu giả lập từ identity service
      const mockIdentityData = {
        fullName: "Nguyễn Văn A",
        idNumber: "012345678901",
        dob: "1990-01-01",
        gender: "Nam",
        address: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
        issueDate: "2020-01-01",
        issuePlace: "Cục Cảnh sát quản lý hành chính về trật tự xã hội",
      }

      setIdentityData(mockIdentityData)

      toast({
        title: "Quét CCCD thành công",
        description: "Thông tin từ CCCD đã được đọc thành công.",
        variant: "success",
      })
    }, 3000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Gọi customer service để cập nhật thông tin cá nhân
      await fetch("/api/customer/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          identityData,
          // Thêm các thông tin khác từ form nếu cần
        }),
      })

      toast({
        title: "Cập nhật thông tin thành công",
        description: "Thông tin cá nhân của bạn đã được cập nhật.",
        variant: "success",
      })

      // Chuyển đến tab tiếp theo hoặc trang tiếp theo
      if (activeTab === "identity") {
        setActiveTab("financial")
      } else {
        router.push("/profile/pending-verification")
      }
    } catch (error) {
      console.error("Update profile error:", error)
      toast({
        title: "Cập nhật thông tin thất bại",
        description: "Có lỗi xảy ra khi cập nhật thông tin cá nhân.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthCheck>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-full mb-8">
            <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-4">
              Hoàn thiện hồ sơ cá nhân
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
              Vui lòng cung cấp thông tin cá nhân để tiếp tục sử dụng dịch vụ
            </p>

            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Quan trọng</AlertTitle>
              <AlertDescription>
                Bạn cần hoàn thiện hồ sơ cá nhân và được xác minh trước khi có thể sử dụng dịch vụ vay vốn.
              </AlertDescription>
            </Alert>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="identity">Thông tin cá nhân</TabsTrigger>
                <TabsTrigger value="financial" disabled={!scanComplete}>
                  Hồ sơ tài chính
                </TabsTrigger>
              </TabsList>

              <TabsContent value="identity">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin cá nhân</CardTitle>
                    <CardDescription>Vui lòng cung cấp thông tin từ Căn cước công dân của bạn</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2 flex items-center">
                          <CreditCard className="mr-2 h-5 w-5 text-green-600" />
                          Quét Căn cước công dân
                        </h3>

                        {!scanComplete ? (
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                              Vui lòng quét mặt trước và mặt sau của Căn cước công dân để xác minh danh tính.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                                <Camera className="h-10 w-10 text-gray-400 mb-2" />
                                <p className="text-sm text-gray-500">Quét bằng camera</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-2"
                                  onClick={scanIdentityCard}
                                  disabled={isScanning}
                                >
                                  {isScanning ? "Đang quét..." : "Quét CCCD"}
                                </Button>
                              </div>

                              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                                <p className="text-sm text-gray-500">Tải ảnh lên</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-2"
                                  onClick={scanIdentityCard}
                                  disabled={isScanning}
                                >
                                  Tải ảnh CCCD
                                </Button>
                              </div>
                            </div>

                            {isScanning && (
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs text-muted-foreground">
                                  <span>Đang quét và xử lý...</span>
                                  <span>{progress}%</span>
                                </div>
                                <Progress value={progress} className="h-2" />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
                              <div className="flex items-center space-x-2 text-green-600">
                                <Check className="h-5 w-5" />
                                <h4 className="font-medium">Quét CCCD thành công</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                Thông tin từ CCCD đã được đọc thành công.
                              </p>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                              <h3 className="font-medium">Thông tin từ CCCD</h3>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="fullName">Họ và tên</Label>
                                  <Input
                                    id="fullName"
                                    value={identityData?.fullName || ""}
                                    readOnly
                                    className="bg-gray-50"
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="idNumber">Số CCCD</Label>
                                  <Input
                                    id="idNumber"
                                    value={identityData?.idNumber || ""}
                                    readOnly
                                    className="bg-gray-50"
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="dob">Ngày sinh</Label>
                                  <Input id="dob" value={identityData?.dob || ""} readOnly className="bg-gray-50" />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="gender">Giới tính</Label>
                                  <Input
                                    id="gender"
                                    value={identityData?.gender || ""}
                                    readOnly
                                    className="bg-gray-50"
                                  />
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                  <Label htmlFor="address">Địa chỉ</Label>
                                  <Input
                                    id="address"
                                    value={identityData?.address || ""}
                                    readOnly
                                    className="bg-gray-50"
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="issueDate">Ngày cấp</Label>
                                  <Input
                                    id="issueDate"
                                    value={identityData?.issueDate || ""}
                                    readOnly
                                    className="bg-gray-50"
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="issuePlace">Nơi cấp</Label>
                                  <Input
                                    id="issuePlace"
                                    value={identityData?.issuePlace || ""}
                                    readOnly
                                    className="bg-gray-50"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input id="phone" placeholder="0912345678" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@email.com" required />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleSubmit}
                      className="bg-green-600 hover:bg-green-700"
                      disabled={!scanComplete || isLoading}
                    >
                      {isLoading ? "Đang xử lý..." : "Tiếp tục"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="financial">
                <Card>
                  <CardHeader>
                    <CardTitle>Hồ sơ tài chính</CardTitle>
                    <CardDescription>
                      Vui lòng cung cấp thông tin tài chính để chúng tôi đánh giá khả năng vay vốn của bạn
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="occupation">Nghề nghiệp</Label>
                        <Input id="occupation" placeholder="Nhân viên văn phòng" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Tên công ty</Label>
                        <Input id="company" placeholder="Công ty ABC" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">Chức vụ</Label>
                        <Input id="position" placeholder="Nhân viên" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="workDuration">Thời gian làm việc</Label>
                        <Input id="workDuration" placeholder="2 năm" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="monthlyIncome">Thu nhập hàng tháng (VNĐ)</Label>
                        <Input id="monthlyIncome" placeholder="15,000,000" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="otherIncome">Thu nhập khác (nếu có)</Label>
                        <Input id="otherIncome" placeholder="5,000,000" />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label>Tải lên bảng lương (3 tháng gần nhất)</Label>
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
                      <Label>Tải lên sao kê ngân hàng (3 tháng gần nhất)</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                        <Upload className="h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Kéo và thả file hoặc</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Chọn file
                        </Button>
                        <p className="text-xs text-gray-400 mt-2">Hỗ trợ: PDF, JPG, PNG (Tối đa 5MB)</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="existingDebt">Số nợ hiện tại (nếu có)</Label>
                      <Input id="existingDebt" placeholder="10,000,000" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthlyExpenses">Chi tiêu hàng tháng</Label>
                      <Input id="monthlyExpenses" placeholder="7,000,000" required />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700" disabled={isLoading}>
                      {isLoading ? "Đang xử lý..." : "Hoàn thành"}
                      <Check className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}
