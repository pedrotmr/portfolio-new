const FooterCopyright = () => {
  return (
    <footer className="bg-slate-900 py-3 text-center">
      <p className="font-mono text-sm text-beige">
        © {new Date().getFullYear()} | Crafted with by Pedro Ramos.
      </p>
    </footer>
  );
};

export default FooterCopyright;
