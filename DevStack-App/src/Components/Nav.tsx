const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
                <button
                    className="btn btn-ghost btn-circle lg:hidden"
                    aria-label="Open menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <div className="flex items-center gap-3 lg:mr-8">
                    <div className="brand-gradient flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm">
                        DS
                    </div>

                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Dev<span className="gradient-text">Stack</span>
                    </span>
                </div>

                <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
                    <li>
                        <a
                            href="#"
                            className="text-sm font-semibold text-indigo-500"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#technologies"
                            className="text-sm font-medium text-slate-500 transition hover:text-indigo-500"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-slate-500 transition hover:text-indigo-500"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="text-sm font-medium text-slate-500 transition hover:text-indigo-500"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-slate-500 transition hover:text-indigo-500"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-2 sm:gap-5">
                    <button className="text-sm font-medium text-slate-700 transition hover:text-indigo-500">
                        Sign In
                    </button>

                    <button className="brand-gradient rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-105 sm:px-6 sm:py-2.5">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;