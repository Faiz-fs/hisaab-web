export default function CTAButton({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
}) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";

    const styles = {
        primary:
            "bg-[var(--primary)] text-slate-950 hover:opacity-90 shadow-lg shadow-cyan-950/20",
        secondary:
            "border border-[var(--outline)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary)]",
        ghost: "text-[var(--text-muted)] hover:text-[var(--text-main)]",
    };

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={`${base} ${styles[variant]} ${className}`}
            >
                {children}
            </button>
        );
    }

    return (
        <a href={href} className={`${base} ${styles[variant]} ${className}`}>
            {children}
        </a>
    );
}