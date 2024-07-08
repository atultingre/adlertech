import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Blog", to: "/blogs" },
  { name: "Contact us", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const { pathname } = useLocation();
  console.log("location: ", pathname);
  return (
    <>
      <div className="w-full z-[100] fixed">
        <Disclosure as="nav" className="bg-white text-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to={"/"}>
                        <h2 className="font-semibold">AdlerTech</h2>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              pathname === item.to
                                ? "bg-gray-200 text-gray-800"
                                : "text-gray-800  hover:bg-gray-200 hover:text-gray-800",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={ pathname === item.to ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex gap-5 justify-center ml-4 items-center md:ml-6">
                      <Link
                        to="https://www.instagram.com/adler_tech?igsh=MXNwbmU1bjEya3VjMw%3D%3D"
                        target="_blanck"
                      >
                        <BsInstagram
                          size={20}
                          className="text-[#ff0000] hover:text-[#ea5151]"
                        />
                      </Link>
                      <Link
                        to={
                          "https://www.facebook.com/people/AdlerTech-Innovations-Pvt-Ltd/61556066551896"
                        }
                        target="_blanck"
                      >
                        <BsFacebook
                          size={20}
                          className="text-[#0040fff8] hover:text-[#244067]"
                        />
                      </Link>
                      <Link
                        to={
                          "https://www.linkedin.com/company/adler-tech-innovations-opc-private-limited"
                        }
                        target="_blanck"
                      >
                        <BsLinkedin
                          size={20}
                          className="text-[#007bff] hover:text-[#2c537c]"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-800 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                         pathname === item.to
                          ? "bg-gray-200 text-gray-800"
                          : "text-gray-800 hover:bg-gray-200 hover:text-gray-800",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={ pathname === item.to ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-5 justify-start items-center border-gray-700 pb-3 p-5">
                  <Link
                    to="https://www.instagram.com/adler_tech?igsh=MXNwbmU1bjEya3VjMw%3D%3D"
                    target="_blanck"
                  >
                    <BsInstagram
                      size={20}
                      className="text-[#ff0000] hover:text-[#ea5151]"
                    />
                  </Link>
                  <Link
                    to={
                      "https://www.facebook.com/people/AdlerTech-Innovations-Pvt-Ltd/61556066551896"
                    }
                    target="_blanck"
                  >
                    <BsFacebook
                      size={20}
                      className="text-[#0040fff8] hover:text-[#244067]"
                    />
                  </Link>
                  <Link
                    to={
                      "https://www.linkedin.com/company/adler-tech-innovations-opc-private-limited"
                    }
                    target="_blanck"
                  >
                    <BsLinkedin
                      size={20}
                      className="text-[#007bff] hover:text-[#2c537c]"
                    />
                  </Link>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
