import bannerStack from "../assets/banner-stack.png";

const HeroSection = () => {
    return (
        <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 md:py-20 lg:flex-row lg:justify-between lg:gap-12 lg:px-12 lg:py-24">
            <div className="w-full text-center lg:w-1/2 lg:text-left">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    Build Your Ideal
                    <br />
                    <span className="text-indigo-500">
                        Development Stack
                    </span>
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 md:text-lg lg:mx-0">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <a
                        href="#technologies"
                        className="brand-gradient w-full rounded-full px-7 py-3 text-center text-sm font-medium text-white shadow-md transition hover:scale-105 sm:w-auto"
                    >
                        Explore Technologies
                    </a>

                    <a
                        href="#about"
                        className="w-full rounded-full border border-slate-300 bg-white px-7 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 sm:w-auto"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            <div className="flex w-full justify-center md:w-4/5 lg:w-1/2">
                <img
                    src={bannerStack}
                    alt="Development Stack Illustration"
                    className="h-auto w-full max-w-md object-contain sm:max-w-lg"
                />
            </div>
        </section>
    );
};

export default HeroSection;
