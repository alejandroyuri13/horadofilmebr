import heroDevices from "@/assets/hero-devices.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left animate-slide-up">
          <h1 className="text-5xl md:text-7xl leading-[0.95] mb-6">
            CONTEÚDO DE QUALIDADE, COM{" "}
            <span className="bg-gradient-fire px-3 py-1 inline-block text-primary-foreground">
              UM PREÇO QUE CABE NO SEU BOLSO!
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            Mais de 2000 canais por um preço que cabe no seu bolso! Com o <strong className="text-foreground">HORA DO FILME</strong>, toda a sua diversão está em um só lugar.
          </p>
          <a
            href="#planos"
            className="inline-block bg-gradient-fire text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg shadow-fire-lg hover:scale-105 transition-transform duration-200 uppercase tracking-wide"
          >
            Quero assinar agora!
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroDevices}
            alt="Dispositivos com streaming Hora do Filme"
            width={1024}
            height={768}
            className="w-full max-w-[540px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
