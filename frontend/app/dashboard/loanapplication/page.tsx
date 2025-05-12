"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, CheckCircle, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { PersonalInfoForm } from "@/components/loan/personalinfoform"
import { FinancialInfoForm } from "@/components/loan/financialinfoform"
import { LoanPurposeForm } from "@/components/loan/loanpurposeform"
import { LoanSelectionForm } from "@/components/loan/loanselectionform"
import { LoanConfirmation } from "@/components/loan/loanconfirmation"
import { useToast } from "@/components/ui/usetoast"
import { useRouter } from "next/navigation"
import { AuthCheck } from "@/components/auth/authcheck"

export default function LoanApplicationPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 5
  const { toast } = useToast()
  const router = useRouter()

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const submitApplication = () => {
    toast({
      title: "Đơn đăng ký đã được gửi",
      description: "Đơn đăng ký vay của bạn đã được gửi thành công và đang được xử lý.",
    })

    // Redirect to contract page after 2 seconds
    setTimeout(() => {
      router.push("/loancontract")
    }, 2000)
  }

  return (
    <AuthCheck>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-full mb-8">
            <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-4">
              Đăng ký vay vốn trực tuyến
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
              Hoàn thành các bước dưới đây để đăng ký khoản vay của bạn
            </p>

            <div className="relative mb-8">
              <div className="flex justify-between w-full mb-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center rounded-full w-10 h-10 ${
                      step > index + 1
                        ? "bg-green-600 text-white"
                        : step === index + 1
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-500 dark:bg-gray-700"
                    }`}
                  >
                    {step > index + 1 ? <CheckCircle className="h-5 w-5" /> : index + 1}
                  </div>
                ))}
              </div>
              <div className="overflow-hidden h-2 mb-4 flex rounded bg-gray-200 dark:bg-gray-700">
                <div
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                ></div>
              </div>
              <div className="flex justify-between w-full text-xs text-gray-500">
                <div className="w-1/5 text-center">Thông tin cá nhân</div>
                <div className="w-1/5 text-center">Thông tin tài chính</div>
                <div className="w-1/5 text-center">Mục đích vay</div>
                <div className="w-1/5 text-center">Chọn khoản vay</div>
                <div className="w-1/5 text-center">Xác nhận</div>
              </div>
            </div>

            <Card className="w-full">
              {step === 1 && <PersonalInfoForm />}
              {step === 2 && <FinancialInfoForm />}
              {step === 3 && <LoanPurposeForm />}
              {step === 4 && <LoanSelectionForm />}
              {step === 5 && <LoanConfirmation />}

              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep} disabled={step === 1}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại
                </Button>
                {step < totalSteps ? (
                  <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                    Tiếp tục <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={submitApplication} className="bg-green-600 hover:bg-green-700">
                    Gửi đơn đăng ký <FileText className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}
