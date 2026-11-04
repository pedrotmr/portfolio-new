const FooterCopyright = () => {
  return (
    <footer className="bg-slate-900 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-center lg:px-0 lg:pb-3">
      <p className="text-pretty font-mono text-xs text-beige lg:text-sm lg:[text-wrap:wrap]">
        © {new Date().getFullYear()} | Crafted by Pedro Ramos
        <span className="hidden lg:inline"> with Next.js, Tailwind and Framer Motion.</span>
      </p>
    </footer>
  );
};

export default FooterCopyright;
