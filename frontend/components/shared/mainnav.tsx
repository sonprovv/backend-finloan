"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, CreditCard, FileText, Bell, Settings, HelpCircle } from "lucide-react"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Trang chủ",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Vay mới",
      icon: CreditCard,
      href: "/loanapplication",
      active: pathname === "/loanapplication",
    },
    {
      label: "Thanh toán",
      icon: FileText,
      href: "/dashboard/payments",
      active: pathname === "/dashboard/payments",
    },
    {
      label: "Thông báo",
      icon: Bell,
      href: "/dashboard/notifications",
      active: pathname === "/dashboard/notifications",
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
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-green-700 dark:text-green-400" : "text-muted-foreground",
          )}
        >
          <div className="flex items-center space-x-2">
            <route.icon className="h-4 w-4" />
            <span>{route.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  )
}
