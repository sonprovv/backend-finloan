"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Clock, CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/usetoast"
import { AuthCheck } from "@/components/auth/authcheck"
import { Progress } from "@/components/ui/progress"

export default function PendingVerificationPage() {
  const [status, setStatus] = useState<"pending" | "verified" | "rejected">("pending")
  const [isChecking, setIsChecking] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  // Kiểm tra trạng thái xác minh
  const checkVerificationStatus = async () => {
    setIsChecking(true)

    try {
      // Gọi customer service để kiểm tra trạng thái xác minh
      const response = await fetch("/api/customer/verification-status", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      const data = await response.json()

      if (data.status === "verified") {
        setStatus("verified")
        toast({
          title: "Xác minh thành công",
          description: "Hồ sơ của bạn đã được xác minh thành công.",
          variant: "success",
        })

        // Chuyển đến dashboard sau 2 giây
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      } else if (data.status === "rejected") {
        setStatus("rejected")
        toast({
          title: "Xác minh thất bại",
          description: "Hồ sơ của bạn không được xác minh. Vui lòng kiểm tra lại thông tin.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Check verification status error:", error)
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi kiểm tra trạng thái xác minh.",
        variant: "destructive",
      })
    } finally {
      setIsChecking(false)
    }
  }

  // Kiểm tra trạng thái xác minh khi trang được tải
  useEffect(() => {
    checkVerificationStatus()

    // Kiểm tra trạng thái mỗi 30 giây
    const interval = setInterval(checkVerificationStatus, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AuthCheck>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="w-full mb-8">
            <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-4">
              Trạng thái xác minh hồ sơ
            </h1>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Xác minh hồ sơ</CardTitle>
                <CardDescription>Hồ sơ của bạn đang được xem xét và xác minh</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {status === "pending" && (
                  <>
                    <div className="flex items-center justify-center space-x-2 text-amber-600">
                      <Clock className="h-6 w-6 animate-pulse" />
                      <h3 className="font-semibold">Đang chờ xác minh</h3>
                    </div>

                    <Progress value={33} className="h-2" />

                    <div className="text-center text-sm text-muted-foreground">
                      <p>Hồ sơ của bạn đang được xem xét và xác minh.</p>
                      <p>Quá trình này có thể mất từ 1-2 ngày làm việc.</p>
                    </div>

                    <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-900/20">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-amber-600" />
                        <h4 className="font-medium">Lưu ý</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bạn sẽ nhận được thông báo qua email khi hồ sơ được xác minh hoặc cần bổ sung thông tin.
                      </p>
                    </div>
                  </>
                )}

                {status === "verified" && (
                  <>
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="h-6 w-6" />
                      <h3 className="font-semibold">Xác minh thành công</h3>
                    </div>

                    <Progress value={100} className="h-2" />

                    <div className="text-center text-sm text-muted-foreground">
                      <p>Hồ sơ của bạn đã được xác minh thành công.</p>
                      <p>Bạn có thể bắt đầu sử dụng dịch vụ vay vốn ngay bây giờ.</p>
                    </div>

                    <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-900/20">
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <h4 className="font-medium">Xác minh hoàn tất</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Cảm ơn bạn đã hoàn thiện hồ sơ. Bạn đang được chuyển đến trang chủ...
                      </p>
                    </div>
                  </>
                )}

                {status === "rejected" && (
                  <>
                    <div className="flex items-center justify-center space-x-2 text-red-600">
                      <AlertCircle className="h-6 w-6" />
                      <h3 className="font-semibold">Xác minh thất bại</h3>
                    </div>

                    <Progress value={100} className="h-2 bg-red-200" />

                    <div className="text-center text-sm text-muted-foreground">
                      <p>Hồ sơ của bạn không được xác minh.</p>
                      <p>Vui lòng kiểm tra lại thông tin và thử lại.</p>
                    </div>

                    <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-900/20">
                      <div className="flex items-center space-x-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        <h4 className="font-medium">Lý do từ chối</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Thông tin tài chính không đủ hoặc không chính xác. Vui lòng cập nhật lại hồ sơ tài chính của
                        bạn.
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={checkVerificationStatus}
                  disabled={isChecking || status === "verified"}
                  className="flex items-center"
                >
                  <RefreshCw className={`mr-2 h-4 w-4 ${isChecking ? "animate-spin" : ""}`} />
                  {isChecking ? "Đang kiểm tra..." : "Kiểm tra trạng thái"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}
