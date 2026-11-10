import { Link } from "react-router";
import logo from "../assets/logo2.png";

export default function Footer() {
  function openJoinBeta() {
    window.dispatchEvent(new Event("open-join-beta"));
  }

  return (
    <footer className="border-t border-[var(--outline)] bg-[var(--background-soft)] px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Zynapse logo"
              className="h-10 w-10 rounded-xl object-contain"
            />

            <div className="text-xl font-bold text-[var(--text-main)]">
              Zynapse
            </div>
          </div>

          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-muted)]">
            AWS read-only agent beta for startups and SMBs. Inspect cloud
            signals, review incidents, and understand infrastructure health
            without create/delete actions.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-[var(--text-muted)]">
          <Link to="/product" className="hover:text-[var(--text-main)]">
            Product
          </Link>

          <Link to="/docs" className="hover:text-[var(--text-main)]">
            Docs
          </Link>

          <Link to="/pricing" className="hover:text-[var(--text-main)]">
            Pricing
          </Link>

          <button
            onClick={openJoinBeta}
            className="hover:text-[var(--text-main)]"
            type="button"
          >
            Join beta
          </button>
        </div>
      </div>
    </footer>
  );
}
