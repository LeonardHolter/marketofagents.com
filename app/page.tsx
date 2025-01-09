import { getBuiltinRequestContext } from "next/dist/server/after/builtin-request-context";
import Image from "next/image";

export default function Home() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MarketOfAgents</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Browse</a>
          </li>
          <li>
            <details>
              <summary>Settings</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Payment</a>
                </li>
                <li>
                  <a>Account</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
