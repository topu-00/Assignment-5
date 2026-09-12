const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-sm">
                        DS
                    </div>

                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Dev<span className="text-rose-600">Stack</span>
                    </span>
                </div>

                <ul className="hidden items-center gap-8 lg:flex">
                    <li>
                        <a
                            href="#"
                            className="text-sm font-semibold text-rose-600"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-5">
                    <button className="hidden text-sm font-medium text-slate-700 transition hover:text-slate-900 sm:block">
                        Sign In
                    </button>

                    <button className="rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 hover:shadow-md">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;