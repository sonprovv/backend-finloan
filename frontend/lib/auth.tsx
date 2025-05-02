"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
}

interface User {
  id: string
  name: string
  email: string
  phone: string
  creditScore?: number
}

interface RegisterData {
  fullName: string
  email: string
  phone: string
  password: string
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      setToken(storedToken)
      fetchUserProfile(storedToken)
    } else {
      setIsLoading(false)
    }
  }, [])

  const fetchUserProfile = async (authToken: string) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock user data
      const userData: User = {
        id: "1",
        name: "Nguyễn Văn A",
        email: "example@email.com",
        phone: "0912345678",
        creditScore: 720,
      }

      setUser(userData)
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to fetch user profile:", error)
      logout()
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful login
      const authToken = "mock-auth-token-" + Math.random().toString(36).substring(2)
      const userData: User = {
        id: "1",
        name: "Nguyễn Văn A",
        email: email,
        phone: "0912345678",
        creditScore: 720,
      }

      setToken(authToken)
      setUser(userData)
      localStorage.setItem("token", authToken)
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: RegisterData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful registration
      const authToken = "mock-auth-token-" + Math.random().toString(36).substring(2)
      const newUser: User = {
        id: "1",
        name: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        creditScore: 700,
      }

      setToken(authToken)
      setUser(newUser)
      localStorage.setItem("token", authToken)
      router.push("/dashboard")
    } catch (error) {
      console.error("Registration failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem("token")
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
