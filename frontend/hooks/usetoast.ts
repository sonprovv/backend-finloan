"use client"

import { useState } from "react"

type ToastType = "success" | "error" | "warning" | "info"

interface Toast {
  id: string
  message: string
  type: ToastType
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, message, type }
    setToasts((prev) => [...prev, newToast])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      dismissToast(id)
    }, 5000)

    return id
  }

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const success = (message: string) => addToast(message, "success")
  const error = (message: string) => addToast(message, "error")
  const warning = (message: string) => addToast(message, "warning")
  const info = (message: string) => addToast(message, "info")

  return {
    toasts,
    addToast,
    dismissToast,
    success,
    error,
    warning,
    info,
  }
}
