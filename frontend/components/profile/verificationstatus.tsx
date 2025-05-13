import { CheckCircle2, Clock, XCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type VerificationStatus = "pending" | "verified" | "rejected"

interface VerificationStatusProps {
  status: VerificationStatus
  message?: string
  updatedAt?: string
}

export function VerificationStatusCard({ status, message = "", updatedAt = "" }: VerificationStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {status === "pending" && (
            <>
              <Clock className="mr-2 h-5 w-5 text-yellow-500" />
              <span>Đang chờ xác minh</span>
            </>
          )}
          {status === "verified" && (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Đã xác minh</span>
            </>
          )}
          {status === "rejected" && (
            <>
              <XCircle className="mr-2 h-5 w-5 text-red-500" />
              <span>Từ chối xác minh</span>
            </>
          )}
        </CardTitle>
        <CardDescription>
          {status === "pending" && "Hồ sơ của bạn đang được xem xét"}
          {status === "verified" && "Hồ sơ của bạn đã được xác minh thành công"}
          {status === "rejected" && "Hồ sơ của bạn chưa được xác minh"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {message && (
          <>
            <div className="text-sm">
              <span className="font-medium">Ghi chú: </span>
              {message}
            </div>
            <Separator className="my-4" />
          </>
        )}
        {updatedAt && <div className="text-xs text-muted-foreground">Cập nhật: {updatedAt}</div>}
      </CardContent>
    </Card>
  )
}
