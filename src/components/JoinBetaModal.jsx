import { useEffect, useState } from "react";
import { BETA_JOIN_URL } from "../data/siteData";
import logo from "../assets/logo2.png";

export default function JoinBetaModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    useEffect(() => {
        function openModal() {
            setIsOpen(true);
            setStatus("idle");
            setMessage("");
        }

        window.addEventListener("open-join-beta", openModal);

        return () => {
            window.removeEventListener("open-join-beta", openModal);
        };
    }, []);

    function closeModal() {
        setIsOpen(false);
        setEmail("");
        setStatus("idle");
        setMessage("");
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const cleanEmail = email.trim();

        if (!cleanEmail) {
            setStatus("error");
            setMessage("Please enter your email.");
            return;
        }

        try {
            setStatus("loading");
            setMessage("");

            const response = await fetch(BETA_JOIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: cleanEmail,
                    source: "zynapse-website",
                    product: "aws-readonly-beta",
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.detail || "Failed to join beta");
            }

            const data = await response.json().catch(() => null);

            setStatus("success");
            setMessage(
                data?.message ||
                "Thank you for joining the Zynapse beta. A confirmation email has been sent."
            );
        } catch (error) {
            console.error("Join beta error:", error);
            setStatus("error");
            setMessage(
                error.message || "Unable to send confirmation email. Please try again."
            );
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-[2rem] border border-[var(--outline)] bg-[var(--surface)] p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-5">
                    <div>
                        <div>
                            <img
                                src={logo}
                                alt="Zynapse logo"
                                className="mb-5 h-12 w-12 rounded-xl object-contain"
                            />

                            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                                Join beta
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-[var(--text-main)]">
                                Join the Zynapse AWS read-only beta.
                            </h2>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                            Enter your email to get early access updates for the AWS
                            read-only agent beta.
                        </p>
                    </div>

                    <button
                        onClick={closeModal}
                        className="rounded-xl border border-[var(--outline)] px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-main)]"
                        type="button"
                    >
                        ✕
                    </button>
                </div>

                {status !== "success" ? (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                            <label className="text-sm font-medium text-[var(--text-main)]">
                                Work email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@company.com"
                                className="mt-2 w-full rounded-xl border border-[var(--outline)] bg-[var(--background-soft)] px-4 py-3 text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === "loading" ? "Joining..." : "Join beta"}
                        </button>
                    </form>
                ) : (
                    <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                        <p className="font-semibold text-emerald-300">
                            You’re on the beta list.
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                            {message}
                        </p>

                        <button
                            onClick={closeModal}
                            className="mt-5 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-slate-950"
                            type="button"
                        >
                            Done
                        </button>
                    </div>
                )}

                {status === "error" && (
                    <p className="mt-4 text-sm text-rose-300">{message}</p>
                )}

                <p className="mt-5 text-xs leading-5 text-[var(--text-muted)]">
                    Current beta focuses on AWS read-only analysis. No create, update, or
                    delete cloud actions are performed.
                </p>
            </div>
        </div>
    );
}