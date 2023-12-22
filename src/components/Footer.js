// components/Footer.js
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="py-20 px-5 lg:px-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 ">
          <div className="lg:col-span-2 col-span-1">
            <div className="flex flex-col ">
              <div className="my-auto ">
                <p className="font-integral text-custome-black font-extrabold text-2xl tracking-tight uppercase pb-5">
                  NFTERS
                </p>
                <p className="font-dMSans text-sm font-light text-light-gray lg:w-full pb-5">
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and
                  discover exclusive digital items.
                </p>
                <div className="flex flex-row">
                  <FaFacebook className="text-blue-900 text-4xl" />
                  <AiFillTwitterCircle className=" text-blue-500 text-4xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="mb-6 text-lg font-dMSans font-bold text-custome-black ">
                Marketplace
              </h2>
              <ul className="text-light-gray font-dMSans text-sm font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    All NFTs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    New
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Art
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Sports
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="mb-6 text-lg font-dMSans font-bold text-custome-black">
                My Account
              </h2>
              <ul className="text-light-gray font-dMSans text-sm font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    All NFTs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    New
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Art
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Sports
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 col-span-1">
            <div className="flex flex-col ">
              <div className="my-auto ">
                <p className="mb-6 text-lg font-dMSans font-bold text-custome-black">
                  Stay in the loop
                </p>
                <p className="font-dMSans text-sm font-light text-light-gray lg:w-full pb-5">
                  Join our mailing list to stay in the loop with our newest
                  feature releases, NFT drops, and tips and tricks for
                  navigating NFTs.
                </p>

                <form>
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only "
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-0 focus:outline-none focus:ring-none "
                      placeholder="Enter your email address.."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-none font-medium rounded-3xl text-sm px-10 py-2 "
                    >
                      Subscibe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <p>&copy; 2023 Your Company</p> */}
    </footer>
  );
}
