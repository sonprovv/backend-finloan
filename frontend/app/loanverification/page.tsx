"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Clock, AlertTriangle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/usetoast"
import { useRouter } from "next/navigation"
import { AuthCheck } from "@/components/auth/authcheck"

export default function LoanVerificationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(0)
  const { toast } = useToast()
  const router = useRouter()

  // Simulate verification process
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1)
        setProgress((currentStep + 1) * 25)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentStep])

  const handleContinue = () => {
    toast({
      title: "Xác minh hoàn tất",
      description: "Đơn đăng ký vay của bạn đã được xác minh thành công.",
    })
    router.push("/loan-contract")
  }

  const steps = [
    {
      title: "Xác minh danh tính và thông tin cá nhân",
      description: "Hệ thống đang xác minh tính hợp lệ của thông tin cá nhân và danh tính của bạn.",
      icon: currentStep > 1 ? CheckCircle : Clock,
      status: currentStep > 1 ? "completed" : "processing",
    },
    {
      title: "Kiểm tra điểm tín dụng",
      description: "Hệ thống đang truy cập vào các dịch vụ điểm tín dụng để kiểm tra lịch sử tín dụng của bạn.",
      icon: currentStep > 2 ? CheckCircle : currentStep === 2 ? Clock : AlertTriangle,
      status: currentStep > 2 ? "completed" : currentStep === 2 ? "processing" : "pending",
    },
    {
      title: "Đánh giá khả năng thanh toán",
      description: "Hệ thống đang đánh giá khả năng thanh toán của bạn dựa trên thông tin tài chính và điểm tín dụng.",
      icon: currentStep > 3 ? CheckCircle : currentStep === 3 ? Clock : AlertTriangle,
      status: currentStep > 3 ? "completed" : currentStep === 3 ? "processing" : "pending",
    },
    {
      title: "Đề xuất khoản vay phù hợp",
      description: "Hệ thống đang đề xuất các gói vay phù hợp với khả năng thanh toán của bạn.",
      icon: currentStep === 4 ? CheckCircle : AlertTriangle,
      status: currentStep === 4 ? "completed" : "pending",
    },
  ]

  return (
    <AuthCheck>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-full mb-8">
            <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-4">
              Xác minh khoản vay
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
              Hệ thống đang xác minh thông tin và đánh giá khoản vay của bạn
            </p>

            <Card className="w-full mb-6">
              <CardHeader className="pb-2">
                <CardTitle>Tiến trình xác minh</CardTitle>
                <CardDescription>Vui lòng đợi trong khi hệ thống xác minh thông tin của bạn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Progress value={progress} className="h-2" />
                  <p className="text-right text-sm text-muted-foreground mt-1">{progress}% hoàn thành</p>
                </div>

                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start">
                        <div
                          className={`mt-0.5 mr-3 rounded-full p-1 ${
                            step.status === "completed"
                              ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                              : step.status === "processing"
                                ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400 animate-pulse"
                                : "bg-gray-100 text-gray-500 dark:bg-gray-800"
                          }`}
                        >
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>

                          {step.status === "completed" && index === 1 && (
                            <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                                Điểm tín dụng: 750/850
                              </p>
                              <p className="text-xs text-muted-foreground">Xếp loại: Tốt</p>
                            </div>
                          )}

                          {step.status === "completed" && index === 2 && (
                            <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                                Khả năng thanh toán: Đạt yêu cầu
                              </p>
                              <p className="text-xs text-muted-foreground">Tỷ lệ nợ/thu nhập: 30%</p>
                            </div>
                          )}
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="ml-4 pl-3 border-l h-6 border-dashed border-gray-200 dark:border-gray-700" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                {currentStep === 4 ? (
                  <Button onClick={handleContinue} className="bg-green-600 hover:bg-green-700">
                    Tiếp tục đến ký hợp đồng <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button disabled className="bg-green-600 hover:bg-green-700 opacity-50">
                    Đang xác minh... <Clock className="ml-2 h-4 w-4 animate-spin" />
                  </Button>
                )}
              </CardFooter>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Thông tin đơn đăng ký</CardTitle>
                <CardDescription>Chi tiết đơn đăng ký vay của bạn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Mã đơn đăng ký</h3>
                    <p className="text-sm text-muted-foreground">LOAN-2023-12345</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-medium">Thông tin khoản vay</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div className="text-muted-foreground">Số tiền vay:</div>
                      <div>50.000.000 VNĐ</div>
                      <div className="text-muted-foreground">Thời hạn vay:</div>
                      <div>36 tháng</div>
                      <div className="text-muted-foreground">Mục đích vay:</div>
                      <div>Mua nhà</div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-medium">Thông tin cá nhân</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div className="text-muted-foreground">Họ và tên:</div>
                      <div>Nguyễn Văn A</div>
                      <div className="text-muted-foreground">Số CMND/CCCD:</div>
                      <div>0123456789</div>
                      <div className="text-muted-foreground">Số điện thoại:</div>
                      <div>0912345678</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}
