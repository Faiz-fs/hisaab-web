import React from "react";

export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center p-6 text-[var(--text-main)]">
      {/* Container */}
      <div className="glass-card max-w-md w-full p-10 rounded-2xl flex flex-col items-center relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--primary)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[var(--primary)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        {/* Animation */}
        <div className="relative mb-8 mt-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-[var(--primary)]/10 rounded-full animate-ping opacity-50"></div>
          </div>
          <div className="relative w-16 h-16 border border-[var(--outline)] bg-[var(--surface-high)] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="ai-pulse"></div>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white to-[var(--text-muted)] bg-clip-text text-transparent">Launching Soon</h1>
        <p className="text-[var(--text-muted)] text-center mb-6 leading-relaxed">
          We are currently building something extraordinary. Zynapse SaaS will be available very soon. 
        </p>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--outline)] to-transparent mb-6"></div>

        <div className="text-sm font-medium text-[var(--primary)] tracking-widest uppercase">
          Stay Tuned
        </div>
      </div>
    </div>
  );
}
