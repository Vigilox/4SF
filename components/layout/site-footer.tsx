import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PenIcon as Gun, Twitter, Facebook, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="text-lg font-bold text-white mb-4">Customer Service</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-amber-500 transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/range-rules" className="hover:text-amber-500 transition-colors">
                  Range Rules
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-amber-500 transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-4">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-use" className="hover:text-amber-500 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/firearm-transfer" className="hover:text-amber-500 transition-colors">
                  Firearm Transfer Info
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-amber-500 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-4">About Us</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-amber-500 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-amber-500 transition-colors">
                  Employment
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-500 transition-colors">
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-4">Stay Connected</h5>
            <p className="mb-3">Sign up for our newsletter for exclusive deals and updates.</p>
            <form className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white focus:ring-amber-500"
              />
              <Button
                type="submit"
                variant="outline"
                className="bg-amber-700 border-amber-700 text-black hover:bg-amber-600 hover:border-amber-600"
              >
                Sign Up
              </Button>
            </form>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="hover:text-amber-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-amber-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-amber-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Gun className="h-8 w-8 text-amber-500" />
            <span className="text-lg font-semibold text-white">4 SEASONS FIREARMS</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} 4 Seasons Firearms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
