import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";

import AllCard from "./Components/AllCard";
import Stack from "./Components/Stack";

import type { Technology } from "./Components/AllCard";

import "react-toastify/dist/ReactToastify.css";

const getData = async (): Promise<Technology[]> => {
  const response = await fetch("/technologies.json");
  const data = await response.json();

  return data;
};

const dataPromise = getData();

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: number) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Nav />

      <main>

        <HeroSection />

        <section
          id="technologies"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore the{" "}
              <span className="text-indigo-500">
                Technologies
              </span>
            </h2>

            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_320px]">
            <Suspense
              fallback={
                <div className="flex min-h-60 items-center justify-center">
                  <p className="text-lg font-medium text-slate-500">
                    Loading technologies...
                  </p>
                </div>
              }
            >
              <AllCard
                dataPromise={dataPromise}
                selectedTechnologies={selectedTechnologies}
                onAdd={handleAdd}
              />
            </Suspense>

            <Stack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>
      </main>

      {/* Footer */}

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;