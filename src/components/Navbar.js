// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div>
          <Link href="/" legacyBehavior passHref>
            <a className="uppercase font-integral text-2xl text-perple font-bold leading-normal">
              NFTERS
            </a>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <GiHamburgerMenu className="text-gray-500 h-6 w-6" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-custome-black font-dMSans text-base font-medium leading-normal tracking-wide">
          <Link href="/marketplace" legacyBehavior passHref>
            <a className="mr-4">Marketplace</a>
          </Link>
          <Link href="/resource" legacyBehavior passHref>
            <a className="mr-4">Resource</a>
          </Link>
          <Link href="/about" legacyBehavior passHref>
            <a>About</a>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } mt-4 w-full`}
        >
          <div className="flex flex-col text-custome-black font-dMSans text-base font-medium leading-normal tracking-wide">
            <Link href="/marketplace" legacyBehavior passHref>
              <a className="mb-2">Marketplace</a>
            </Link>
            <Link href="/resource" legacyBehavior passHref>
              <a className="mb-2">Resource</a>
            </Link>
            <Link href="/about" legacyBehavior passHref>
              <a>About</a>
            </Link>
          </div>
        </div>
        {/* Search and Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative flex items-center h-8 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden border px-2 py-1">
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pl-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <CiSearch />
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-perple border border-perple rounded-3xl hover:bg-white hover:text-custome-black hover:border-custome-black focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-10 py-1.5 text-center duration-300"
          >
            Upload
          </button>

          <button
            type="button"
            className="text-custome-black bg-white border border-custome-black rounded-3xl hover:bg-perple hover:border-perple hover:text-white focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-10 py-1.5 text-center duration-300 "
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
