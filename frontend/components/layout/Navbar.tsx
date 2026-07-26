export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[90%] max-w-7xl -translate-x-1/2 rounded-full border border-white/20 bg-white/70 px-8 py-4 shadow-lg backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-wide">
          SSMSPM Digital
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Institutions</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}