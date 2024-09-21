const FooterCopyright = () => {
  return (
    <footer className="bg-slate-900 py-3 text-center">
      <p className="font-mono text-sm text-beige">
        © {new Date().getFullYear()} | Crafted by Pedro Ramos with Next.js, Tailwind and Framer Motion.
      </p>
    </footer>
  );
};

export default FooterCopyright;
