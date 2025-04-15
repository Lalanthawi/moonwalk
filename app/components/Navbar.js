"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white/5 backdrop-blur-lg shadow-lg border border-white/10 rounded-full px-8 py-3 flex items-center justify-between z-50"
    >
      <Link href="/" className="text-xl font-semibold tracking-wide text-white">
        MoonWalk
      </Link>

      <div className="flex items-center gap-6 text-white text-sm">
        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>
        <Link href="/products" className="hover:text-gray-300 transition">
          Products
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>

        <Link href="/contact">
          <button className="ml-4 px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
            Get in Touch
          </button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
