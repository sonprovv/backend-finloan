"use client"

import { useState } from "react"
import { CheckCircle2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/usetoast"

interface ContractVerificationProps {
  email: string
  onVerificationComplete: () => void
}

export function ContractVerification({ email, onVerificationComplete }: ContractVerificationProps) {
  const [verificationCode, setVerificationCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const { success, error: showError } = useToast()

  const handleVerify = async () => {
    if (!verificationCode) {
      showError("Vui lòng nhập mã xác nhận")
      return
    }

    setIsVerifying(true)

    try {
      // Simulate API call to notification service
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock verification
      if (verificationCode === "123456") {
        setIsVerified(true)
        success("Xác nhận hợp đồng thành công")

        // Notify parent component
        onVerificationComplete()
      } else {
        showError("Mã xác nhận không chính xác. Vui lòng thử lại.")
      }
    } catch (error) {
      showError("Không thể xác nhận. Vui lòng thử lại.")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)

    try {
      // Simulate API call to notification service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      success(`Mã xác nhận đã được gửi lại đến ${email}`)
    } catch (error) {
      showError("Không thể gửi lại mã. Vui lòng thử lại.")
    } finally {
      setIsResending(false)
    }
  }

  if (isVerified) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
            Xác nhận thành công
          </CardTitle>
          <CardDescription>Hợp đồng vay của bạn đã được xác nhận thành công</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Chúng tôi đang xử lý yêu cầu vay của bạn. Bạn sẽ nhận được thông báo khi khoản vay được giải ngân.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Mail className="mr-2 h-5 w-5" />
          Xác nhận hợp đồng
        </CardTitle>
        <CardDescription>Vui lòng nhập mã xác nhận đã được gửi đến email {email}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Nhập mã xác nhận"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              maxLength={6}
              className="text-center text-lg tracking-widest"
            />
            <p className="text-xs text-muted-foreground">Mã xác nhận có 6 chữ số và có hiệu lực trong 10 phút</p>
          </div>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Chưa nhận được mã? </span>
            <Button variant="link" className="p-0 text-sm" onClick={handleResendCode} disabled={isResending}>
              {isResending ? "Đang gửi lại..." : "Gửi lại mã"}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleVerify} disabled={isVerifying || !verificationCode}>
          {isVerifying ? "Đang xác nhận..." : "Xác nhận hợp đồng"}
        </Button>
      </CardFooter>
    </Card>
  )
}
