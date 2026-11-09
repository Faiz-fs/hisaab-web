import { useState } from "react";
import { Link, NavLink } from "react-router";
import CTAButton from "./CTAButton";
import { navItems } from "../data/siteData";
import logo from "../assets/logo2.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }

    function openJoinBeta() {
        closeMenu();
        window.dispatchEvent(new Event("open-join-beta"));
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--outline)] bg-[var(--background)]/80 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <img
                        src={logo}
                        alt="Zynapse logo"
                        className="h-10 w-10 rounded-xl object-contain"
                    />

                    <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">
                        Zynapse
                    </span>
                </Link>

                <div className="hidden items-center gap-7 md:flex">
                    {navItems.map((item) => (
                        <NavItem key={item.path} item={item} />
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <CTAButton onClick={openJoinBeta}>Join beta</CTAButton>
                </div>

                <button
                    onClick={() => setIsOpen((value) => !value)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--outline)] bg-[var(--surface)] text-[var(--text-main)] md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    type="button"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-[var(--outline)] bg-[var(--background)] px-5 py-5 md:hidden">
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                        ? "border border-cyan-400/40 bg-cyan-400/10 text-[var(--primary)]"
                                        : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-main)]"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="mt-5 grid gap-3">
                        <button
                            onClick={openJoinBeta}
                            className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                            type="button"
                        >
                            Join beta
                        </button>

                        <p className="text-center text-xs text-[var(--text-muted)]">
                            Opens beta access request form
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
}

function NavItem({ item }) {
    return (
        <NavLink
            to={item.path}
            className={({ isActive }) =>
                `text-sm font-medium transition ${isActive
                    ? "border-b-2 border-[var(--primary)] pb-1 text-[var(--primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`
            }
        >
            {item.label}
        </NavLink>
    );
}