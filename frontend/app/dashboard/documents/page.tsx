import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Eye, FileText, Filter, Search, Upload } from "lucide-react"

export default function DocumentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400">Tài liệu</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Upload className="mr-2 h-4 w-4" />
            Tải lên tài liệu
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tất cả tài liệu</TabsTrigger>
          <TabsTrigger value="contracts">Hợp đồng</TabsTrigger>
          <TabsTrigger value="schedules">Lịch trả nợ</TabsTrigger>
          <TabsTrigger value="receipts">Biên lai</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm tài liệu..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="sort-by" className="text-sm">
              Sắp xếp theo:
            </Label>
            <Select defaultValue="newest">
              <SelectTrigger id="sort-by" className="w-[180px]">
                <SelectValue placeholder="Chọn tiêu chí" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="oldest">Cũ nhất</SelectItem>
                <SelectItem value="name-asc">Tên (A-Z)</SelectItem>
                <SelectItem value="name-desc">Tên (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Tất cả tài liệu</CardTitle>
              <CardDescription>Quản lý tất cả các tài liệu liên quan đến khoản vay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Hợp đồng vay mua nhà</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Ngày ký: 10/01/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 2.5MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Hợp đồng vay tiêu dùng</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Ngày ký: 05/03/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 1.8MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Lịch trả nợ vay mua nhà</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Cập nhật: 10/01/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 1.2MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Lịch trả nợ vay tiêu dùng</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Cập nhật: 05/03/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 0.9MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-amber-600" />
                      <div>
                        <h3 className="font-semibold">Biên lai thanh toán - Vay mua nhà #4</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Ngày: 15/04/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 0.5MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Hợp đồng</CardTitle>
              <CardDescription>Các hợp đồng vay vốn của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Hợp đồng vay mua nhà</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Ngày ký: 10/01/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 2.5MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Hợp đồng vay tiêu dùng</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Ngày ký: 05/03/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 1.8MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedules" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Lịch trả nợ</CardTitle>
              <CardDescription>Các lịch trả nợ của khoản vay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Lịch trả nợ vay mua nhà</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Cập nhật: 10/01/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 1.2MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Lịch trả nợ vay tiêu dùng</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Cập nhật: 05/03/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 0.9MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receipts" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Biên lai</CardTitle>
              <CardDescription>Các biên lai thanh toán khoản vay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-amber-600" />
                      <div>
                        <h3 className="font-semibold">Biên lai thanh toán - Vay mua nhà #4</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: HL-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Ngày: 15/04/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 0.5MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-amber-600" />
                      <div>
                        <h3 className="font-semibold">Biên lai thanh toán - Vay tiêu dùng #2</h3>
                        <p className="text-sm text-muted-foreground">Số hợp đồng: TD-2023-042</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Ngày: 20/04/2023</p>
                      <p className="text-sm text-muted-foreground">Loại: PDF, 0.4MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Xem
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Label({ htmlFor, className, children }: { htmlFor?: string; className?: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
    >
      {children}
    </label>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
