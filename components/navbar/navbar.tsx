import Link from "next/link";

   
export default function navBar() {

      const NavLinks = (
        <>
          <li>
            <Link className="hover:bg-cyan-400 hover:text-black text-2xl font-semibold" href="#about-me">About</Link>
          </li>
          <li>
            <Link className="hover:bg-cyan-400 hover:text-black text-2xl font-semibold" href="#skills">Skills</Link>
          </li>
          <li>
            <Link className="hover:bg-cyan-400 hover:text-black text-2xl font-semibold" href="#experience">Experience</Link>
          </li>
          <li>
            <Link className="hover:bg-cyan-400 hover:text-black text-2xl font-semibold" href="#contact-me">Contact</Link>
          </li>
        </>
    );
    

  return (
    <div className="pt-4">
      <div className="navbar px-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-cyan-500 font-bold" href="/">Atikur Rahman</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
      </div>
    </div>
  );
}