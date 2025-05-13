"use client"

import type React from "react"

import { useState } from "react"
import { Camera, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/usetoast"

interface IdCardData {
  fullName: string
  idNumber: string
  dateOfBirth: string
  address: string
  issueDate: string
  issuePlace: string
}

export function IdCardScanner({
  onScanComplete,
}: {
  onScanComplete: (data: IdCardData) => void
}) {
  const [isScanning, setIsScanning] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const { success, error: showError, info } = useToast()

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadedFile(file)

    // Create preview URL
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const scanIdCard = async () => {
    if (!uploadedFile) {
      showError("Vui lòng tải lên ảnh căn cước công dân")
      return
    }

    setIsScanning(true)

    try {
      // Simulate API call to identity service
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock data from identity service
      const mockData: IdCardData = {
        fullName: "Nguyễn Văn A",
        idNumber: "012345678901",
        dateOfBirth: "01/01/1990",
        address: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
        issueDate: "01/01/2020",
        issuePlace: "Cục Cảnh sát quản lý hành chính về trật tự xã hội",
      }

      onScanComplete(mockData)

      success("Đã quét thông tin căn cước công dân thành công")
    } catch (error) {
      showError("Không thể quét thông tin. Vui lòng thử lại.")
    } finally {
      setIsScanning(false)
    }
  }

  const handleCameraCapture = () => {
    info("Tính năng chụp ảnh hiện chưa khả dụng. Vui lòng tải ảnh lên.")
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-medium">Quét căn cước công dân</h3>
            <p className="text-sm text-muted-foreground">Vui lòng tải lên ảnh mặt trước của căn cước công dân</p>
          </div>

          <Separator />

          <div className="grid gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              {previewUrl ? (
                <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-input">
                  <img
                    src={previewUrl || "/placeholder.svg"}
                    alt="ID Card Preview"
                    className="h-auto w-full object-contain"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-2 top-2"
                    onClick={() => {
                      setPreviewUrl(null)
                      setUploadedFile(null)
                    }}
                  >
                    Xóa
                  </Button>
                </div>
              ) : (
                <div className="flex h-40 w-full max-w-md flex-col items-center justify-center rounded-lg border border-dashed border-input bg-muted/50">
                  <p className="mb-2 text-sm text-muted-foreground">Tải lên hoặc chụp ảnh căn cước công dân</p>
                  <div className="flex gap-2">
                    <div>
                      <Label htmlFor="id-card-upload" className="cursor-pointer">
                        <div className="flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground">
                          <Upload className="mr-2 h-4 w-4" />
                          Tải lên
                        </div>
                      </Label>
                      <Input
                        id="id-card-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </div>
                    <Button variant="outline" onClick={handleCameraCapture}>
                      <Camera className="mr-2 h-4 w-4" />
                      Chụp ảnh
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Button onClick={scanIdCard} disabled={!uploadedFile || isScanning} className="w-full">
              {isScanning ? "Đang quét..." : "Quét thông tin"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
