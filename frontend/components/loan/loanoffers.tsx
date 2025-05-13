"use client"

import { useState } from "react"
import { ArrowRight, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

interface LoanOffer {
  id: string
  name: string
  amount: number
  interestRate: number
  term: number
  monthlyPayment: number
  totalRepayment: number
  description: string
  features: string[]
}

interface LoanOffersProps {
  offers: LoanOffer[]
  onSelectOffer: (offer: LoanOffer) => void
}

export function LoanOffers({ offers, onSelectOffer }: LoanOffersProps) {
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null)

  const handleSelectOffer = (offer: LoanOffer) => {
    setSelectedOfferId(offer.id)
    onSelectOffer(offer)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Khoản vay đề xuất</h2>
        <p className="text-muted-foreground">
          Dựa trên hồ sơ tài chính của bạn, chúng tôi đề xuất các khoản vay phù hợp sau
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            className={`relative overflow-hidden transition-all ${
              selectedOfferId === offer.id ? "border-2 border-primary shadow-lg" : "hover:shadow-md"
            }`}
          >
            {selectedOfferId === offer.id && (
              <div className="absolute right-0 top-0 bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                Đã chọn
              </div>
            )}
            <CardHeader>
              <CardTitle>{offer.name}</CardTitle>
              <CardDescription>{offer.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{formatCurrency(offer.amount)}</div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>{offer.term} tháng</span>
                  <span>•</span>
                  <span>{offer.interestRate}% lãi suất</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Trả hàng tháng:</span>
                  <span className="font-medium">{formatCurrency(offer.monthlyPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <span className="text-sm">Tổng phải trả:</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="ml-1 h-3.5 w-3.5 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-xs">
                            Tổng số tiền phải trả bao gồm gốc và lãi trong toàn bộ thời hạn vay
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span className="font-medium">{formatCurrency(offer.totalRepayment)}</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Tính năng:</h4>
                <ul className="space-y-1">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={selectedOfferId === offer.id ? "secondary" : "default"}
                onClick={() => handleSelectOffer(offer)}
              >
                {selectedOfferId === offer.id ? (
                  <span>Đã chọn</span>
                ) : (
                  <>
                    <span>Chọn khoản vay này</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
