const Hero = () => {
  return (
    <section className="bg-primary text-white min-h-screen flex flex-col px-3 md:px-0">
      <main className="flex-grow flex items-center justify-center relative ">
        <div className="z-10 text-center">
          <h1 className="text-md sm:text-2xl mb-4 leading-tight font-pop animate__animated animate__fadeInLeft">
            Computer Engineering Student · Mumbai 📍
          </h1>
          <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-tight animate__animated animate__fadeInLeft">
            Hi, I'm{" "}
            <span className="text-gradient-purple">Dev</span>.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-pop mt-8 max-w-4xl mx-auto animate__animated animate__fadeInUp animate__delay-1s leading-relaxed">
            I collect ideas.
            <br />
            <br />
            From airplanes cutting through clouds,
            <br />
            to complex mathematical patterns,
            <br />
            to stories hidden in great films.
            <br />
            <br />
            <span className="text-gray-400">Sometimes they become projects.</span>
          </p>
        </div>

        <footer className="p-6 text-center absolute bottom-0 animate__animated animate__fadeInUp">
          <p className="text-xl font-pop">SCROLL</p>
          <div className="w-0.5 h-8 bg-white mx-auto mt-2"></div>
        </footer>
      </main>
    </section>
  )
}

export default Hero
