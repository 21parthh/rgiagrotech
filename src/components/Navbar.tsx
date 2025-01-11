import React, { useState, useEffect } from "react";
import { Leaf, Menu, X, ShoppingCart } from "lucide-react";
import logo from "../../src/WhatsApp Image 2025-01-11 at 15.39.40_348b1bd1.jpg";

export default function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 20);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
            <nav
                  className={`fixed w-full z-50 transition-all duration-300 ${
                        isScrolled ? "bg-[#f0fdf4] " : "bg-transparent"
                  }`}
            >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                              <div className="flex items-center">
                                    <div className="flex items-center gap-2 group">
                                          <div className="bg-green-500 rounded-lg p-2 transform group-hover:rotate-12 transition-transform duration-300">
                                                <Leaf className="h-6 w-6 text-white" />
                                          </div>
                                          <span
                                                className={`text-xl font-bold ${
                                                      isScrolled
                                                            ? "text-green-800"
                                                            : "text-white"
                                                }`}
                                          >
                                                RGIAgroTEch
                                          </span>
                                          {/* <img
                                                src={logo}
                                                width={100}
                                                height={100}
                                          /> */}
                                    </div>
                              </div>

                              <div className="hidden md:flex items-center space-x-8">
                                    {[
                                          "Home",
                                          "About",
                                          "Products",
                                          "How It Works",
                                          "Contact",
                                    ].map((item) => (
                                          <a
                                                key={item}
                                                href={`#${item
                                                      .toLowerCase()
                                                      .replace(/\s+/g, "-")}`}
                                                className={`${
                                                      isScrolled
                                                            ? "text-gray-600 hover:text-green-600"
                                                            : "text-white/90 hover:text-white"
                                                } px-3 py-2 text-sm font-medium transition-colors duration-200 relative group`}
                                          >
                                                {item}
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                          </a>
                                    ))}
                                    <button className="relative bg-green-500 text-white p-2 rounded-full hover:bg-green-400 transition-colors">
                                          <ShoppingCart className="h-5 w-5" />
                                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                                0
                                          </span>
                                    </button>
                              </div>

                              <div className="md:hidden flex items-center gap-4">
                                    <button className="relative bg-green-500 text-white p-2 rounded-full hover:bg-green-400 transition-colors">
                                          <ShoppingCart className="h-5 w-5" />
                                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                                0
                                          </span>
                                    </button>
                                    <button
                                          onClick={() =>
                                                setIsMenuOpen(!isMenuOpen)
                                          }
                                          className={`${
                                                isScrolled
                                                      ? "text-gray-600"
                                                      : "text-white"
                                          } hover:text-green-500 transition-colors`}
                                    >
                                          {isMenuOpen ? (
                                                <X className="h-6 w-6" />
                                          ) : (
                                                <Menu className="h-6 w-6" />
                                          )}
                                    </button>
                              </div>
                        </div>
                  </div>

                  {/* Mobile menu */}
                  <div
                        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
                              isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                  >
                        <div className="pt-20 px-4 space-y-2">
                              {[
                                    "Home",
                                    "About",
                                    "Products",
                                    "How It Works",
                                    "Contact",
                              ].map((item) => (
                                    <a
                                          key={item}
                                          href={`#${item
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                          className="block px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                                          onClick={() => setIsMenuOpen(false)}
                                    >
                                          {item}
                                    </a>
                              ))}
                        </div>
                  </div>
            </nav>
      );
}
