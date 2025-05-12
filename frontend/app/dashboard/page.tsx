"use client"
import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardStats } from "@/components/dashboard/dashboardstats"
import { LoansList } from "@/components/dashboard/loanslist"
import { PaymentsList } from "@/components/dashboard/paymentslist"
import { DocumentsList } from "@/components/dashboard/documentslist"
import { DashboardChart } from "@/components/dashboard/dashboardchart"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Bảng điều khiển</h2>
        <div className="flex items-center space-x-2">
          <Link href="/loanapplication">
            <Button className="bg-green-600 hover:bg-green-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Vay mới
            </Button>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="loans">Khoản vay</TabsTrigger>
          <TabsTrigger value="payments">Thanh toán</TabsTrigger>
          <TabsTrigger value="documents">Tài liệu</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardStats />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Tổng quan khoản vay</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <DashboardChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Khoản vay gần đây</CardTitle>
                <CardDescription>Bạn có 2 khoản vay đang hoạt động</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="font-medium">Vay mua nhà</div>
                      </div>
                      <div>30.000.000 VNĐ</div>
                    </div>
                    <Progress value={33} className="h-2 bg-gray-200" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>Đã trả: 10.000.000 VNĐ</div>
                      <div>Còn lại: 20.000.000 VNĐ</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="font-medium">Vay tiêu dùng</div>
                      </div>
                      <div>20.000.000 VNĐ</div>
                    </div>
                    <Progress value={50} className="h-2 bg-gray-200" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>Đã trả: 10.000.000 VNĐ</div>
                      <div>Còn lại: 10.000.000 VNĐ</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="loans" className="space-y-4">
          <LoansList />
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <PaymentsList />
        </TabsContent>
        <TabsContent value="documents" className="space-y-4">
          <DocumentsList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
