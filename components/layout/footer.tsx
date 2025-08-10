import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/nepal-ultratech-logo.png"
              alt="Nepal Ultratech Cement"
              width={200}
              height={60}
              className="h-12 w-auto bg-white p-2 rounded"
            />
            <p className="text-slate-300 text-sm">
              Leading manufacturer of premium cement products in Nepal, committed to quality, innovation, and
              sustainable construction solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/bandhan.cement.5" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/nepal.ultratech.cement" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/107950993" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-slate-300 hover:text-white transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-slate-300 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Brands</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/brands/bandhan" className="text-slate-300 hover:text-white transition-colors">
                  Bandhan Cement
                </Link>
              </li>
              <li>
                <Link href="/brands/lt" className="text-slate-300 hover:text-white transition-colors">
                  L&T Cement
                </Link>
              </li>
            </ul>
            <div className="space-y-2">
              <p className="text-xs text-slate-400">Certified by:</p>
              <p className="text-xs text-slate-300">Nepal Standards Authority</p>
              {/* <p className="text-xs text-slate-300">ISO 9001:2015</p> */}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-400" />
                <span className="text-slate-300">Biratnagar, Morang, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">+977-21-465269</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">info@nepalultratechcement.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Nepal Ultratech Cement Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
