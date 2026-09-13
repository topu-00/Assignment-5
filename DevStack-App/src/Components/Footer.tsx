const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white px-5 pb-8 pt-12 text-slate-500 sm:px-8 sm:pt-16 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-10 pb-10 sm:gap-12 sm:pb-12 lg:flex-row lg:justify-between lg:gap-16">
                    <div className="w-full max-w-sm">
                        <div className="mb-4 flex items-center gap-2.5">
                            <div className="brand-gradient flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
                                DS
                            </div>

                            <span className="text-lg font-bold text-slate-900 sm:text-xl">
                                DevStack
                            </span>
                        </div>

                        <p className="max-w-sm text-sm leading-6 text-slate-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 sm:mt-6 sm:gap-6">
                            <a
                                href="#"
                                className="text-sm font-semibold text-slate-700 transition hover:text-indigo-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-sm font-semibold text-slate-700 transition hover:text-indigo-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-sm font-semibold text-slate-700 transition hover:text-indigo-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12 lg:w-auto lg:min-w-130 lg:grid-cols-3 lg:gap-x-16">
                        <div>
                            <h4 className="mb-4 text-xs font-bold tracking-wider text-slate-900">
                                PRODUCT
                            </h4>

                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#technologies"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        Technologies
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-xs font-bold tracking-wider text-slate-900">
                                COMPANY
                            </h4>

                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-xs font-bold tracking-wider text-slate-900">
                                LEGAL
                            </h4>

                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition hover:text-indigo-500"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:text-sm md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-5">
                        <a
                            href="#"
                            className="transition hover:text-indigo-500"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-indigo-500"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;