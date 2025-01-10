"use static";

import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-gray-200 shadow-sm ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MarketOfAgents</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <details>
              <summary>Get Started</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Credits</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
