import { Clock, CheckCircle2, AlertTriangle, Ban, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

type LoanStatus =
  | "pending_verification"
  | "verification_in_progress"
  | "verified"
  | "rejected"
  | "contract_pending"
  | "contract_signed"
  | "disbursement_in_progress"
  | "disbursed"
  | "active"
  | "completed"
  | "defaulted"

interface LoanStatusProps {
  status: LoanStatus
  applicationDate: string
  amount: number
  term: number
  interestRate: number
  lastUpdated: string
  notes?: string
}

export function LoanStatusCard({
  status,
  applicationDate,
  amount,
  term,
  interestRate,
  lastUpdated,
  notes,
}: LoanStatusProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusDetails = (status: LoanStatus) => {
    switch (status) {
      case "pending_verification":
        return {
          icon: <Clock className="h-5 w-5 text-yellow-500" />,
          label: "Chờ xác minh",
          description: "Hồ sơ của bạn đang chờ xác minh",
          badgeVariant: "outline" as const,
        }
      case "verification_in_progress":
        return {
          icon: <Clock className="h-5 w-5 text-blue-500" />,
          label: "Đang xác minh",
          description: "Hồ sơ của bạn đang được xác minh",
          badgeVariant: "outline" as const,
        }
      case "verified":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          label: "Đã xác minh",
          description: "Hồ sơ của bạn đã được xác minh thành công",
          badgeVariant: "outline" as const,
        }
      case "rejected":
        return {
          icon: <Ban className="h-5 w-5 text-red-500" />,
          label: "Từ chối",
          description: "Hồ sơ của bạn đã bị từ chối",
          badgeVariant: "destructive" as const,
        }
      case "contract_pending":
        return {
          icon: <Clock className="h-5 w-5 text-yellow-500" />,
          label: "Chờ ký hợp đồng",
          description: "Hợp đồng vay đang chờ ký",
          badgeVariant: "outline" as const,
        }
      case "contract_signed":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          label: "Đã ký hợp đồng",
          description: "Hợp đồng vay đã được ký",
          badgeVariant: "outline" as const,
        }
      case "disbursement_in_progress":
        return {
          icon: <Clock className="h-5 w-5 text-blue-500" />,
          label: "Đang giải ngân",
          description: "Khoản vay của bạn đang được giải ngân",
          badgeVariant: "outline" as const,
        }
      case "disbursed":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          label: "Đã giải ngân",
          description: "Khoản vay của bạn đã được giải ngân",
          badgeVariant: "success" as const,
        }
      case "active":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          label: "Đang hoạt động",
          description: "Khoản vay của bạn đang hoạt động",
          badgeVariant: "success" as const,
        }
      case "completed":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          label: "Đã hoàn thành",
          description: "Khoản vay của bạn đã hoàn thành",
          badgeVariant: "success" as const,
        }
      case "defaulted":
        return {
          icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
          label: "Quá hạn",
          description: "Khoản vay của bạn đã quá hạn",
          badgeVariant: "destructive" as const,
        }
      default:
        return {
          icon: <HelpCircle className="h-5 w-5 text-gray-500" />,
          label: "Không xác định",
          description: "Trạng thái khoản vay không xác định",
          badgeVariant: "outline" as const,
        }
    }
  }

  const statusDetails = getStatusDetails(status)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            {statusDetails.icon}
            <span className="ml-2">{statusDetails.label}</span>
          </CardTitle>
          <Badge variant={statusDetails.badgeVariant as "default" | "destructive" | "outline" | "secondary"}>{statusDetails.label}</Badge>
        </div>
        <CardDescription>{statusDetails.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Số tiền vay</p>
              <p className="font-medium">{formatCurrency(amount)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Thời hạn</p>
              <p className="font-medium">{term} tháng</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Lãi suất</p>
              <p className="font-medium">{interestRate}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ngày đăng ký</p>
              <p className="font-medium">{applicationDate}</p>
            </div>
          </div>

          {notes && (
            <>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Ghi chú</p>
                <p className="text-sm">{notes}</p>
              </div>
            </>
          )}

          <div className="text-xs text-muted-foreground">Cập nhật lần cuối: {lastUpdated}</div>
        </div>
      </CardContent>
    </Card>
  )
}
