import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import SectionTitle from "../components/SectionTitle";
import InstallBlock from "../components/InstallBlock";
import Footer from "../components/Footer";
import HeroCodeStack from "../components/HeroCodeStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <Navbar />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />

        <section className="container-shell grid min-h-[85vh] items-center gap-16 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex items-center justify-center lg:justify-start">
            <HeroCodeStack />
          </div>

          <Hero />
        </section>

        <section className="container-shell py-8">
          <SectionTitle
            eyebrow="Features"
            title="Everything you need to make your backend feel more polished."
            description="Version 1 focuses on the core pieces developers actually use in real Express projects."
          />
          <div className="mt-10">
            <FeatureGrid />
          </div>
        </section>

        <section className="container-shell py-20">
          <div className="glass-panel rounded-[32px] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-white/40">
                  Why exnexus
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Less boilerplate. Better structure. Cleaner APIs.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                  Whether you are shipping a side project, a SaaS backend, or a
                  production API, exnexus helps standardize repetitive backend
                  patterns so your codebase stays easier to read, easier to
                  scale, and easier to debug.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <div className="text-3xl font-semibold">Faster</div>
                  <div className="mt-2 text-sm leading-7 text-white/60">
                    Start with cleaner conventions from day one.
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <div className="text-3xl font-semibold">Consistent</div>
                  <div className="mt-2 text-sm leading-7 text-white/60">
                    Standardize errors and responses across your app.
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <div className="text-3xl font-semibold">Readable</div>
                  <div className="mt-2 text-sm leading-7 text-white/60">
                    Keep controllers and middleware easier to maintain.
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <div className="text-3xl font-semibold">Practical</div>
                  <div className="mt-2 text-sm leading-7 text-white/60">
                    Built for actual Express apps, not just demos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-16">
          <InstallBlock />
        </section>
      </main>

      <Footer />
    </div>
  );
}
