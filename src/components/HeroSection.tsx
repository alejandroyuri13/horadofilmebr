import heroDevices from "@/assets/hero-devices.png";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-8 md:py-20">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left animate-slide-up">
          {/* Logo with radial fade blend */}
          <div className="relative w-36 md:w-48 mx-auto md:mx-0 mb-5" style={{ WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 72%)', maskImage: 'radial-gradient(circle, black 40%, transparent 72%)' }}>
            <img src={logo} alt="Hora do Filme" className="w-full drop-shadow-2xl" />
          </div>

          <h1 className="text-3xl md:text-6xl leading-[1] mb-4">
            CONTEÚDO DE QUALIDADE, COM{" "}
            <span className="bg-gradient-fire px-1.5 py-0.5 inline-block text-primary-foreground rounded text-[0.85em] leading-tight">
              UM PREÇO QUE CABE NO SEU BOLSO!
            </span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg mb-5 max-w-lg mx-auto md:mx-0">
            Mais de 2000 canais por um preço que cabe no seu bolso! Com o <strong className="text-foreground">HORA DO FILME</strong>, toda a sua diversão está em um só lugar.
          </p>
          <a
            href="#planos"
            className="inline-block bg-gradient-fire text-primary-foreground font-bold text-base px-10 py-4 rounded-lg shadow-fire-lg hover:scale-105 transition-transform duration-200 uppercase tracking-wide"
          >
            Quero assinar agora!
          </a>
        </div>

        {/* Image - hidden on mobile to keep CTA visible */}
        <div className="hidden md:flex flex-1 justify-center">
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
