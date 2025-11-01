import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets/frontend_assets/assets";

export default function Footer() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "Collections" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-white text-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Logo / Brand (internal Link) */}
          <div className="flex-1 min-w-32">
            <Link
              to="/"
              className="inline-flex items-center gap-4"
              aria-label="Go to homepage"
            >
              <img
                src={assets.webLogo2}
                alt="Company logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-semibold tracking-wide uppercase font-serif">
                  Zyona
                </h3>
                <p className="text-sm text-gray-600">
                  Modern design, honest prices
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm text-gray-600">
              We craft timeless pieces with care. Need help? Our support team is
              happy to assist.
            </p>

            <div className="mt-6 flex items-center gap-3" aria-hidden>
              {/* Social links are external so use anchor tags with safe attributes */}
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md hover:bg-gray-50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-md hover:bg-gray-50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4.22 2.1-6.2 2.34A4.48 4.48 0 0 0 12 4c0 .35.04.7.12 1A12.8 12.8 0 0 1 3 2s-4 9 5 13a13 13 0 0 1-8 2c11 7 24 0 24-14.5V4.5A8.18 8.18 0 0 0 23 3z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* LINKS - single column list using NavLink for internal routing */}
          <nav className="flex-1">
            <h4 className="text-base font-semibold uppercase tracking-wide text-gray-700">
              Links
            </h4>

            <ul className="mt-4 flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block py-1 px-1 rounded hover:bg-gray-50 ${
                        isActive ? "font-semibold text-black" : "text-gray-600"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / Newsletter - keep tel/mail as anchor tags */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-base font-semibold uppercase tracking-wide text-gray-700">
              Get in touch
            </h4>

            <address className="not-italic mt-3 text-sm text-gray-600">
              <div>
                Phone:{" "}
                <a href="tel:+10000000000" className="hover:underline">
                  +1-000-000-0000
                </a>
              </div>
              <div>
                Email:{" "}
                <a href="mailto:dev@gmail.com" className="hover:underline">
                  dev@gmail.com
                </a>
              </div>
            </address>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2"
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Your email"
                className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold bg-black text-white hover:opacity-95"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-500">
              Follow us on Instagram for drops and behind the scenes.
            </p>
          </div>
        </div>

        {/* bottom copyright row */}
        <div className="mt-10 border-t border-gray-100 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p>© {new Date().getFullYear()} Zyona. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
