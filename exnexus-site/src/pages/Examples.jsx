import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExampleCard from "../components/ExampleCard";
import { exampleCards } from "../data/examples";

export default function Examples() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="container-shell py-14 sm:py-16">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40">Examples</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Real usage snippets
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
            These examples show how exnexus can fit naturally into a production-style
            Express codebase without adding unnecessary complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {exampleCards.map((item) => (
            <ExampleCard
              key={item.title}
              title={item.title}
              description={item.description}
              code={item.code}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}