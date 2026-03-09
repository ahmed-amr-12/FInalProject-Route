
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CartContext } from "@/app/_context/CartContext";

export default function Navbar() {
  function handleSignOut() {
    signOut({ redirect: true, callbackUrl: "/Login" });
  }

  const { numOfCartItems } = useContext(CartContext);
  const session = useSession();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-600 tracking-wide"
        >
          RouteShop
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/products" className="hover:text-green-600 transition">
              Products
            </Link>
          </li>


          <li>
            <Link href="/carts" className="hover:text-green-600 transition">
              Cart
            </Link>
          </li>


          <li>
            <Link href="/allOrders" className="hover:text-green-600 transition">
              My Orders
            </Link>
          </li>




        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <Link href="/carts" className="relative group">
            <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition" />

            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {numOfCartItems}
            </span>
          </Link>

          {/* Auth Buttons */}
          {session.status === "authenticated" ? (
            <Button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Sign Out
            </Button>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/Login"
                className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-black transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="text-sm font-medium bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
