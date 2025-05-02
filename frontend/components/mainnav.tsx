import type React from "react"
import Link from "next/link"
import { Home, CreditCard, FileText, Bell, Settings, HelpCircle } from "lucide-react"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
        <div className="flex items-center space-x-2">
          <Home className="h-4 w-4" />
          <span>Trang chủ</span>
        </div>
      </Link>
      <Link
        href="/loanapplication"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <div className="flex items-center space-x-2">
          <CreditCard className="h-4 w-4" />
          <span>Vay mới</span>
        </div>
      </Link>
      <Link href="/payments" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4" />
          <span>Thanh toán</span>
        </div>
      </Link>
      <Link
        href="/notifications"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <div className="flex items-center space-x-2">
          <Bell className="h-4 w-4" />
          <span>Thông báo</span>
        </div>
      </Link>
      <Link href="/settings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        <div className="flex items-center space-x-2">
          <Settings className="h-4 w-4" />
          <span>Cài đặt</span>
        </div>
      </Link>
      <Link href="/help" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        <div className="flex items-center space-x-2">
          <HelpCircle className="h-4 w-4" />
          <span>Trợ giúp</span>
        </div>
      </Link>
    </nav>
  )
}
