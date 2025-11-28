'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* About */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            <Image
              src="/images/footer_logo.gif"
              alt="Muhammad Ahsan"
              width={150} // Adjust size as needed
              height={150} // Adjust size as needed
              className="rounded-md"
            />
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Creating modern, visually stunning, and responsive portfolio websites that
            make your work stand out.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/muhammadahsan089"
              target="_blank"
              className="hover:text-orange-500 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammadahsan089"
              target="_blank"
              className="hover:text-orange-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/muhammadahsan089"
              target="_blank"
              className="hover:text-orange-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            &copy; {new Date().getFullYear()} MA Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
