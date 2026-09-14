import logoText from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="px-[8%] py-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-20">
          <div className="max-w-sm">
            <div>
              <img src={logoText} alt="DevStack" className="w-40" />

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-pink-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                PRODUCT
              </h3>

              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    Technologies
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                COMPANY
              </h3>

              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                LEGAL
              </h3>

              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-10 border-slate-200" />

        <div className="flex flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-pink-600">
              Privacy
            </a>

            <a href="#" className="transition-colors hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
