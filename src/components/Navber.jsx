import React, { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { Link, useNavigate } from "react-router";
import AuthHook from "../hooks/AuthHook";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Doctors", href: "#doctors" },
  { label: "Appointments", href: "#appointments" },
  { label: "Dashboard", href: "/deshboard" },
  { label: "Contact", href: "#contact" },
];

export default function Navber() {
  const [open, setOpen] = useState(false);
  const { token, setToken } = AuthHook();
  const navigate = useNavigate()

  const handleNavClick = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("Token")
    localStorage.removeItem("role")
    setToken("")
    navigate('/auth/Login')

  }

  return (
    <header className="sticky top-0 z-900 overflow-hidden border-b border-gray-100 bg-white/80  w-[100%] supports-[backdrop-filter]:bg-white/70 backdrop-blur-2xl dark:bg-gray-900/80 dark:border-gray-800">
      <nav className="flex mx-auto items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

        <a
          href="#"
          className="group flex items-center gap-2 rounded-xl px-2 py-1 transition hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
          aria-label="Doctor Appointment Home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <Stethoscope className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              MediBook
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Appointments</p>
          </div>
        </a>


        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                onClick={handleNavClick}
                className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>


        <div className="hidden md:flex">
          {token ? (
            <button
              onClick={handleLogout}
              className="rounded-2xl border border-red-200 bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 active:translate-y-px dark:border-red-500/30"
            >
              Log out
            </button>
          ) : (
            <div className="flex gap-2">
              <Link to={"/auth/login"}>
                <button className="rounded-2xl border border-indigo-200 bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:translate-y-px dark:border-indigo-500/30">
                  Log in
                </button>
              </Link>
              <Link to={"/auth/Register"}>
                <button className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:translate-y-px dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>


        <button
          className="inline-flex items-center justify-center rounded-xl p-2 md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>


      <div
        id="mobile-nav"
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pb-4 sm:px-6 lg:px-8">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={handleNavClick}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {token ? (
            <button
              onClick={() => {

                handleNavClick();
              }}
              className="mt-3 w-full rounded-2xl border border-red-200 bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:border-red-500/30"
            >
              Log out
            </button>
          ) : (
            <div className="flex flex-col gap-2 mt-3">
              <Link to={"/auth/login"} onClick={handleNavClick}>
                <button className="w-full rounded-2xl border border-indigo-200 bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-indigo-500/30">
                  Log in
                </button>
              </Link>
              <Link to={"/auth/Register"} onClick={handleNavClick}>
                <button className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
