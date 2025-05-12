"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, FileText, Lock, AlertTriangle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ContractDetails } from "@/components/loan/contractdetails"
import { ContractTerms } from "@/components/loan/contractterms"
import { useToast } from "@/components/ui/usetoast"
import { AuthCheck } from "@/components/auth/authcheck"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function LoanContractPage() {
  const [otpSent, setOtpSent] = useState(false)
  const [signed, setSigned] = useState(false)
  const [approved, setApproved] = useState(false)
  const [disbursed, setDisbursed] = useState(false)
  const { toast } = useToast()

  const sendOTP = () => {
    toast({
      title: "Mã OTP đã được gửi",
      description: "Mã OTP đã được gửi đến số điện thoại của bạn.",
    })
    setOtpSent(true)
  }

  const signContract = () => {
    toast({
      title: "Hợp đồng đã được ký",
      description: "Hợp đồng của bạn đã được ký thành công và đang được xử lý.",
      variant: "success",
    })
    setSigned(true)

    // Simulate approval process
    setTimeout(() => {
      setApproved(true)
      toast({
        title: "Khoản vay đã được phê duyệt",
        description: "Khoản vay của bạn đã được phê duyệt và đang được giải ngân.",
        variant: "success",
      })

      // Simulate disbursement process
      setTimeout(() => {
        setDisbursed(true)
        toast({
          title: "Giải ngân thành công",
          description: "Khoản vay của bạn đã được giải ngân thành công vào tài khoản.",
          variant: "success",
        })
      }, 3000)
    }, 3000)
  }

  return (
    <AuthCheck>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-full mb-8">
            <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-4">
              Ký hợp đồng vay vốn
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
              Vui lòng xem xét và ký hợp đồng vay vốn của bạn
            </p>

            <Card className="w-full mb-6">
              <CardHeader>
                <CardTitle>Hợp đồng vay vốn</CardTitle>
                <CardDescription>Số hợp đồng: HL-2023-001</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <AlertTitle>Thông tin quan trọng</AlertTitle>
                  <AlertDescription className="text-sm">
                    Vui lòng đọc kỹ hợp đồng trước khi ký. Sau khi ký, hợp đồng sẽ có hiệu lực pháp lý.
                  </AlertDescription>
                </Alert>

                <ContractDetails />
                <ContractTerms />

                {!signed ? (
                  <>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        Tôi đã đọc và đồng ý với tất cả các điều khoản và điều kiện của hợp đồng
                      </Label>
                    </div>

                    {!otpSent ? (
                      <div className="space-y-2">
                        <Label htmlFor="phone">Xác nhận số điện thoại để nhận mã OTP</Label>
                        <div className="flex space-x-2">
                          <Input id="phone" value="0912345678" readOnly />
                          <Button onClick={sendOTP} className="bg-green-600 hover:bg-green-700">
                            Gửi mã OTP
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="otp">Nhập mã OTP đã gửi đến 0912345678</Label>
                        <div className="flex space-x-2">
                          <Input id="otp" placeholder="Nhập mã OTP" />
                          <Button onClick={signContract} className="bg-green-600 hover:bg-green-700">
                            Xác nhận và ký hợp đồng
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Không nhận được mã? <button className="text-green-600 hover:underline">Gửi lại</button>
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Check className="h-6 w-6" />
                        <h3 className="font-semibold">Hợp đồng đã được ký thành công</h3>
                      </div>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Khoản vay của bạn đang được xử lý
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-semibold">Trạng thái khoản vay</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                          className={`rounded-lg border p-4 ${approved ? "bg-green-50 dark:bg-green-900/20" : "bg-amber-50 dark:bg-amber-900/20"}`}
                        >
                          <div className="flex items-center space-x-2">
                            {approved ? (
                              <Check className="h-5 w-5 text-green-600" />
                            ) : (
                              <AlertTriangle className="h-5 w-5 text-amber-600 animate-pulse" />
                            )}
                            <h4 className="font-medium">Phê duyệt khoản vay</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {approved
                              ? "Khoản vay của bạn đã được phê duyệt"
                              : "Đang chờ phê duyệt từ bộ phận tín dụng"}
                          </p>
                        </div>

                        <div
                          className={`rounded-lg border p-4 ${disbursed ? "bg-green-50 dark:bg-green-900/20" : "bg-amber-50 dark:bg-amber-900/20"}`}
                        >
                          <div className="flex items-center space-x-2">
                            {disbursed ? (
                              <Check className="h-5 w-5 text-green-600" />
                            ) : (
                              <AlertTriangle className="h-5 w-5 text-amber-600 animate-pulse" />
                            )}
                            <h4 className="font-medium">Giải ngân khoản vay</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {disbursed
                              ? "Khoản vay đã được giải ngân vào tài khoản của bạn"
                              : "Đang chờ giải ngân khoản vay"}
                          </p>
                          {disbursed && (
                            <div className="mt-2 text-sm">
                              <p className="font-medium text-green-600">Số tiền: 50.000.000 VNĐ</p>
                              <p className="text-muted-foreground">Ngày giải ngân: {new Date().toLocaleDateString()}</p>
                              <p className="text-muted-foreground">Tài khoản: **** 5678</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <p>Thông tin của bạn được bảo mật và mã hóa</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/dashboard">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại
                  </Button>
                </Link>
                {signed && disbursed && (
                  <Link href="/dashboard">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Đi đến bảng điều khiển <FileText className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}
