import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-700 dark:text-green-400">
                  Vay tiền trực tuyến dễ dàng và an toàn
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Giải pháp tài chính nhanh chóng, minh bạch và thuận tiện cho mọi nhu cầu của bạn.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/auth/login">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Đăng ký ngay
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-2xl">
                <img alt="Vay tiền trực tuyến" className="object-cover w-full h-full" src="\images\vaytien.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700 dark:text-green-400">
                Tại sao chọn chúng tôi?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Chúng tôi cung cấp dịch vụ vay vốn trực tuyến với quy trình đơn giản, nhanh chóng và bảo mật.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950">
              <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-center">Nhanh chóng</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Quy trình đăng ký và phê duyệt nhanh chóng, giải ngân trong vòng 24 giờ.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950">
              <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-center">An toàn</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Bảo mật thông tin cá nhân và tài chính của khách hàng là ưu tiên hàng đầu của chúng tôi.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950">
              <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-center">Minh bạch</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Điều khoản rõ ràng, không phí ẩn, lãi suất cạnh tranh và công khai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 dark:bg-green-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Bắt đầu vay vốn ngay hôm nay
              </h2>
              <p className="max-w-[900px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Chỉ mất vài phút để đăng ký và nhận khoản vay phù hợp với nhu cầu của bạn.
              </p>
            </div>
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Đăng ký vay ngay <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
