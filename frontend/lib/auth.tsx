"use client"

import type React from "react"

import { createContext, use, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
  checkAuthStatus: () => boolean
  verifyAuthState: () => {
    isValid: boolean
    hasToken: boolean
    hasUser: boolean
    stateToken: string | null
  }
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
  checkAuthStatus: () => false,
  verifyAuthState: () => ({
    isValid: false,
    hasToken: false,
    hasUser: false,
    stateToken: null
  })
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem("token")
        console.log("Initializing auth with token:", storedToken)
        
        if (storedToken) {
          setToken(storedToken)
          await fetchUserProfile(storedToken)
        } else {
          console.log("No token found in localStorage")
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Error initializing auth:", error)
        localStorage.removeItem("token")
        setToken(null)
        setUser(null)
        setIsLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const fetchUserProfile = async (authToken: string) => {
    try {
      console.log("Fetching user profile with token:", authToken)
      const response = await fetch("http://localhost:8000/auth/me", {
        headers: {
          "Authorization": authToken
        }
      })

      if (!response.ok) {
        throw new Error("Failed to fetch user profile")
      }

      const userData = await response.json()
      console.log("Setting user data:", userData)
      setUser(userData)
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to fetch user profile:", error)
      localStorage.removeItem("token")
      setToken(null)
      setUser(null)
      setIsLoading(false)
    }
  }

  const login = async (username: string, password: string) => {
    console.log("Starting login process...")
    setIsLoading(true)
    
    try {
      // Call actual API
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        console.error("Login API error:", {
          status: response.status,
          statusText: response.statusText,
          errorData
        })
        throw new Error(errorData?.detail || "Login failed")
      }

      const loginResponse = await response.json()
      console.log("Login API response:", loginResponse)

      if (!loginResponse.access_token || !loginResponse.token_type) {
        console.error("Invalid login response format:", loginResponse)
        throw new Error("Invalid login response format")
      }

      console.log("Login successful, preparing to save token...")
      
      // Save token to localStorage first
      try {
        const authToken = `${loginResponse.token_type.charAt(0).toUpperCase() + loginResponse.token_type.slice(1).toLowerCase()} ${loginResponse.access_token}`
        localStorage.setItem("token", authToken)
        const savedToken = localStorage.getItem("token")
        console.log("Token saved to localStorage:", savedToken)
        
        if (!savedToken) {
          throw new Error("Failed to save token to localStorage")
        }
      } catch (storageError) {
        console.error("Error saving token to localStorage:", storageError)
        throw storageError
      }
      
      // Update state with full token
      setToken(`${loginResponse.token_type} ${loginResponse.access_token}`)
      
      // Fetch user profile with the new token
      await fetchUserProfile(`${loginResponse.token_type} ${loginResponse.access_token}`)
      
      // Wait a bit to ensure state is updated
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Verify final state
      const finalToken = localStorage.getItem("token")
      console.log("Final token check:", finalToken)
      
      if (!finalToken) {
        throw new Error("Token was not properly saved")
      }
      
      setIsLoading(false)
      
      // Verify auth status before navigation
      const authStatus = checkAuthStatus()
      console.log("Auth status before navigation:", authStatus)
      
      if (!authStatus) {
        throw new Error("Authentication status check failed")
      }
      
      console.log("Login process completed, navigating to dashboard...")
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      // Cleanup on error
      localStorage.removeItem("token")
      setToken(null)
      setUser(null)
      setIsLoading(false)
      throw error
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
    console.log("Starting logout process...")
    try {
      // Remove token from localStorage
      localStorage.removeItem("token")
      const tokenAfterRemoval = localStorage.getItem("token")
      console.log("Token after removal:", tokenAfterRemoval)
      
      // Clear state
      setToken(null)
      setUser(null)
      setIsLoading(false)
      
      console.log("Logout completed, redirecting to home...")
      router.push("/")
    } catch (error) {
      console.error("Error during logout:", error)
      setIsLoading(false)
    }
  }

  // Add checkAuthStatus function
  const checkAuthStatus = () => {
    const storedToken = localStorage.getItem("token")
    const currentStatus = {
      storedToken,
      stateToken: token,
      // isAuthenticated: !!user,
      isLoading
    }
    console.log("Current auth status:", currentStatus)
    // return !!storedToken && !!user
    return !!storedToken

  }

  // Add a function to verify auth state
  const verifyAuthState = () => {
    const storedToken = localStorage.getItem("token")
    const stateToken = token
    const hasUser = !!user
    
    console.log("Verifying auth state:", {
      storedToken,
      stateToken,
      hasUser,
      // isAuthenticated: !!user,
      isLoading
    })
    
    return {
      isValid: !!storedToken && !!user,
      hasToken: !!storedToken,
      hasUser,
      stateToken
    }
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
        checkAuthStatus,
        verifyAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
