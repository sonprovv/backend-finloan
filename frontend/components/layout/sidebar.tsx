"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  CreditCard,
  FileText,
  Bell,
  Settings,
  HelpCircle,
  User,
  DollarSign,
  BarChart,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const routes = [
    {
      label: "Trang chủ",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Khoản vay",
      icon: CreditCard,
      href: "/dashboard/loans",
      active: pathname === "/dashboard/loans",
    },
    {
      label: "Thanh toán",
      icon: DollarSign,
      href: "/dashboard/payments",
      active: pathname === "/dashboard/payments",
    },
    {
      label: "Lịch trả nợ",
      icon: Calendar,
      href: "/dashboard/schedule",
      active: pathname === "/dashboard/schedule",
    },
    {
      label: "Tài liệu",
      icon: FileText,
      href: "/dashboard/documents",
      active: pathname === "/dashboard/documents",
    },
    {
      label: "Thống kê",
      icon: BarChart,
      href: "/dashboard/statistics",
      active: pathname === "/dashboard/statistics",
    },
    {
      label: "Thông báo",
      icon: Bell,
      href: "/dashboard/notifications",
      active: pathname === "/dashboard/notifications",
    },
    {
      label: "Hồ sơ",
      icon: User,
      href: "/dashboard/profile",
      active: pathname === "/dashboard/profile",
    },
    {
      label: "Cài đặt",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
    {
      label: "Trợ giúp",
      icon: HelpCircle,
      href: "/dashboard/help",
      active: pathname === "/dashboard/help",
    },
  ]

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-30 border-r bg-white dark:bg-gray-950 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && (
          <Link href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-green-600"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="ml-2 text-xl font-bold text-green-700 dark:text-green-400">FinLoan</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2 p-2">
        {routes.map((route) => {
          const active = pathname === route.href
          return (
            <Link key={route.href} href={route.href}>
              <Button
                variant={active ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start transition-all",
                  active ? "bg-green-600 text-white hover:bg-green-700" : "",
                  collapsed && "px-2 justify-center"
                )}
              >
                <route.icon className="h-5 w-5" />
                {!collapsed && <span className="ml-2">{route.label}</span>}
              </Button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}