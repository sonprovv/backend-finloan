import type React from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { AuthCheck } from "@/components/auth/authcheck"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthCheck>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-64">{children}</div>
      </div>
    </AuthCheck>
  )
}
