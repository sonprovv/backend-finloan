"use client"

import type React from "react"

import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/usetoast"

export function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, token, verifyAuthState } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("AuthCheck - Starting authentication check...")
        
        // Wait for initial loading to complete
        if (isLoading) {
          console.log("AuthCheck - Still loading, waiting...")
          return
        }
        
        // Verify authentication state
        const authState = verifyAuthState()
        console.log("AuthCheck - Authentication state:", authState)

        if (!authState.isValid) {
          console.log("AuthCheck - Authentication failed:", {
            hasToken: authState.hasToken,
            hasUser: authState.hasUser
          })
          
          // Clear any invalid tokens
          if (authState.hasToken && !authState.hasUser) {
            localStorage.removeItem("token")
          }
          
          toast({
            title: "Yêu cầu đăng nhập",
            description: "Vui lòng đăng nhập để truy cập trang này.",
            variant: "destructive",
          })
          router.push("/auth/login")
          return
        }

        console.log("AuthCheck - Authentication verified successfully")
        setIsChecking(false)
      } catch (error) {
        console.error("AuthCheck - Error during authentication check:", error)
        setIsChecking(false)
      }
    }

    checkAuth()
  }, [isAuthenticated, isLoading, token, router, toast, verifyAuthState])

  if (isLoading || isChecking) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}
