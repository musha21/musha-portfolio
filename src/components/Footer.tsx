import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020202] pt-16 pb-8 overflow-hidden">
      {/* Glowing line effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white">
                M<span className="text-purple-500">.</span>Musharraf
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Building intelligent digital experiences that blend cutting-edge technology with premium design.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#about" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-purple-400 transition-colors">Projects</Link></li>
              <li><Link href="#services" className="hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-purple-400 transition-all text-gray-400">
                <FaGithub size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all text-gray-400">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-400 transition-all text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-red-400 transition-all text-gray-400">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mohammad Musharraf. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
