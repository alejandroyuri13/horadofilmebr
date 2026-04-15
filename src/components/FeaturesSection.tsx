import devicesAll from "@/assets/devices-all.png";
import featureMovies from "@/assets/feature-movies.jpg";
import featureSports from "@/assets/feature-sports.jpg";
import featureKids from "@/assets/feature-kids.jpg";
import featureAnime from "@/assets/feature-anime.jpg";

const features = [
  {
    title: "Disponível em Todos os Dispositivos",
    desc: "Disponível em Smart TVs, celulares, tablets, PCs e TV Box. Instalação fácil e rápida.",
    img: devicesAll,
  },
  {
    title: "Filmes e Séries Imperdíveis",
    desc: "Acompanhe suas séries favoritas e encontre novas paixões. Temporadas completas e episódios atualizados.",
    img: featureMovies,
  },
  {
    title: "Esportes ao Vivo",
    desc: "Não perca um só lance! Assista a eventos esportivos ao vivo, incluindo futebol, basquete e muito mais.",
    img: featureSports,
  },
  {
    title: "Canais Infantis",
    desc: "Diversão garantida para as crianças com canais dedicados, desenhos, filmes e programação educativa.",
    img: featureKids,
  },
  {
    title: "Os Melhores Animes",
    desc: "Para os fãs de anime, uma seleção de títulos populares e novidades. Episódios atualizados e qualidade HD.",
    img: featureAnime,
  },
];

const FeaturesSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-4xl md:text-5xl text-center mb-14 text-gradient-fire">
        Confira Tudo o Que Você Vai Encontrar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-2xl mb-2 text-foreground" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#planos"
          className="inline-block bg-gradient-fire text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg shadow-fire-lg hover:scale-105 transition-transform duration-200 uppercase tracking-wide"
        >
          Quero assinar agora!
        </a>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
