"use client"

import Link from "next/link"
import { MainNav } from "@/components/shared/mainnav"
import { UserNav } from "@/components/shared/usernav"
import { MobileNav } from "@/components/shared/mobilenav"
import { useAuth } from "@/lib/auth"
import { useMobile } from "@/hooks/usemobile"
import { ThemeToggle } from "@/components/themetoggle"

export function Header() {
  const { isAuthenticated } = useAuth()
  const isMobile = useMobile()

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-2 font-bold text-xl text-green-700 dark:text-green-400">
          <Link href="/">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span className="ml-2">FinLoan</span>
            </div>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              {isMobile ? <MobileNav /> : <MainNav className="mx-6" />}
              <ThemeToggle />
              <UserNav />
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/auth/login">
                <div className="text-sm font-medium transition-colors hover:text-primary">Đăng nhập</div>
              </Link>
              <Link href="/auth/register">
                <div className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
                  Đăng ký
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
