"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/usetoast"

const financialProfileSchema = z.object({
  monthlyIncome: z.string().min(1, "Vui lòng nhập thu nhập hàng tháng"),
  employmentStatus: z.string().min(1, "Vui lòng chọn tình trạng việc làm"),
  employerName: z.string().min(1, "Vui lòng nhập tên công ty/đơn vị"),
  employmentDuration: z.string().min(1, "Vui lòng nhập thời gian làm việc"),
  totalDebt: z.string(),
  monthlyExpenses: z.string().min(1, "Vui lòng nhập chi phí hàng tháng"),
  additionalIncome: z.string().optional(),
  additionalIncomeSource: z.string().optional(),
  bankName: z.string().min(1, "Vui lòng nhập tên ngân hàng"),
  bankAccountNumber: z.string().min(1, "Vui lòng nhập số tài khoản"),
  additionalNotes: z.string().optional(),
})

type FinancialProfileData = z.infer<typeof financialProfileSchema>

export function FinancialProfileForm({
  onSubmit,
}: {
  onSubmit: (data: FinancialProfileData) => void
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { success, error } = useToast()

  const form = useForm<FinancialProfileData>({
    resolver: zodResolver(financialProfileSchema),
    defaultValues: {
      monthlyIncome: "",
      employmentStatus: "",
      employerName: "",
      employmentDuration: "",
      totalDebt: "0",
      monthlyExpenses: "",
      additionalIncome: "",
      additionalIncomeSource: "",
      bankName: "",
      bankAccountNumber: "",
      additionalNotes: "",
    },
  })

  const handleSubmit = async (data: FinancialProfileData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call to customer service
      await new Promise((resolve) => setTimeout(resolve, 1500))

      onSubmit(data)

      success("Đã cập nhật thông tin tài chính thành công")
    } catch (err: unknown) {
      error("Không thể cập nhật thông tin. Vui lòng thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="monthlyIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thu nhập hàng tháng (VNĐ) *</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employmentStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tình trạng việc làm *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tình trạng việc làm" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="full-time">Toàn thời gian</SelectItem>
                    <SelectItem value="part-time">Bán thời gian</SelectItem>
                    <SelectItem value="self-employed">Tự kinh doanh</SelectItem>
                    <SelectItem value="unemployed">Thất nghiệp</SelectItem>
                    <SelectItem value="retired">Đã nghỉ hưu</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="employerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên công ty/đơn vị *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employmentDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thời gian làm việc (tháng) *</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="totalDebt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tổng nợ hiện tại (VNĐ)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="0" />
                </FormControl>
                <FormDescription>Tổng các khoản nợ hiện tại (nếu có)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="monthlyExpenses"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chi phí hàng tháng (VNĐ) *</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="additionalIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thu nhập bổ sung (VNĐ)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="0" />
                </FormControl>
                <FormDescription>Thu nhập bổ sung ngoài lương (nếu có)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalIncomeSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nguồn thu nhập bổ sung</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên ngân hàng *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankAccountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số tài khoản ngân hàng *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="additionalNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ghi chú bổ sung</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Thông tin bổ sung về tình hình tài chính (nếu có)"
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Đang xử lý..." : "Cập nhật thông tin tài chính"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
