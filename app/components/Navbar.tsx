"use static";
export default function Navbar() {
  return (
    <div className="navba bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MarketOfAgents</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Log In</a>
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
