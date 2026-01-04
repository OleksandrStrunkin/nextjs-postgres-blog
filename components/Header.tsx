export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-black border-b border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto max-w-3xl px-16 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black dark:text-zinc-50">My App</h1>
        <nav>
          <ul className="flex gap-6 text-base font-medium">
            <li>
              <a
                href="#"
                className="text-black dark:text-zinc-50 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black dark:text-zinc-50 hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black dark:text-zinc-50 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}