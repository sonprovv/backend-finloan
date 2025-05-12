import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-green-700 dark:text-green-400">FinLoan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hệ thống vay vốn trực tuyến an toàn, nhanh chóng và minh bạch cho mọi nhu cầu tài chính của bạn.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Sản phẩm</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Vay mua nhà
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Vay tiêu dùng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Vay kinh doanh
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Vay mua xe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Vay du học
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Công ty</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Đối tác
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600 dark:text-gray-400">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Liên hệ</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-gray-600 dark:text-gray-400">support@finloan.vn</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-gray-600 dark:text-gray-400">1900 1234</span>
              </li>
              <li className="text-gray-600 dark:text-gray-400">Tầng 10, Tòa nhà ABC, 123 Đường XYZ, Quận 1, TP.HCM</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2023 FinLoan. Tất cả các quyền được bảo lưu.</p>
            <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <Link href="#" className="hover:text-green-600">
                Điều khoản dịch vụ
              </Link>
              <Link href="#" className="hover:text-green-600">
                Chính sách bảo mật
              </Link>
              <Link href="#" className="hover:text-green-600">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
