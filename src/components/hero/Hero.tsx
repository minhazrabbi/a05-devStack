import banner from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="px-[8%] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-950">
            Build Your Ideal{" "}
            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Technologies
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-300 px-6 py-3 text-slate-700 transition-colors hover:border-pink-500 hover:text-pink-600"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={banner}
            alt="Development Stack Banner"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
