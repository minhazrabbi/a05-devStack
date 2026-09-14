import logoText from "../../assets/logo-text.png";
import hamburger from "../../assets/hamburger.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-24 items-center justify-between border-b border-slate-200 bg-white px-[8%]">
      <img src={logoText} alt="DevStack" className="w-40" />
      <ul className="hidden md:flex items-center gap-9">
        <li>
          <a href="#" className="text-pink-600 font-medium">
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-600 hover:text-pink-600 transition-colors"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-600 hover:text-pink-600 transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-600 hover:text-pink-600 transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-600 hover:text-pink-600 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-6">
        <button
          type="button"
          className="text-slate-700 hover:text-pink-600 transition-colors"
        >
          Sign In
        </button>
        <button
          type="button"
          className="px-6 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-600 transition-colors"
        >
          Sign Up
        </button>
      </div>
      <button type="button" aria-label="Open menu" className="md:hidden">
        <img src={hamburger} alt="" className="w-7" />
      </button>
    </nav>
  );
};

export default Navbar;
