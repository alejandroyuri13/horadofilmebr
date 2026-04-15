import { useState, useEffect } from "react";

const testimonials = [
  { name: "Ricardo Silva", initials: "RS", text: "Assinei o Hora do Filme e estou impressionado com o custo-benefício! Pago pouco e tenho acesso a muito mais conteúdo do que nos outros apps." },
  { name: "Mariana Oliveira", initials: "MO", text: "Qualidade de imagem perfeita, zero travamentos e ainda posso usar em 3 telas ao mesmo tempo." },
  { name: "Carlos Andrade", initials: "CA", text: "Aqui encontrei filmes de cinema que nem chegaram nos outros streamings ainda. Vale demais!" },
  { name: "Juliana Costa", initials: "JC", text: "As séries são atualizadas rápido, sempre tem episódio novo. Melhor assinatura que já fiz!" },
  { name: "Lucas Santos", initials: "LS", text: "Se você gosta de anime, é perfeito. Todo dia tem lançamento novo!" },
  { name: "Patrícia Almeida", initials: "PA", text: "Pelo preço que eu pago, é surreal a quantidade de canais e conteúdos que o app oferece." },
  { name: "Fernando Rocha", initials: "FR", text: "Eu e meus filhos usamos ao mesmo tempo sem travar nada. As 3 telas valem muito!" },
  { name: "Beatriz Lima", initials: "BL", text: "Completo mesmo! Filmes, séries, animes e muito mais. Recomendo demais!" },
  { name: "Gabriel Mendes", initials: "GM", text: "Achei que pelo preço seria simples, mas a qualidade surpreendeu. Muito melhor que os serviços famosos." },
  { name: "Amanda Pereira", initials: "AP", text: "Recomendo demais. Instalação fácil, funciona em qualquer TV e o catálogo é gigantesco." },
  { name: "Rodrigo Azevedo", initials: "RA", text: "Finalmente um streaming que entrega tudo em um só lugar. Melhor custo-benefício do mercado." },
  { name: "Larissa Fernandes", initials: "LF", text: "Virou meu streaming principal. Filmes novos toda semana, inclusive lançamentos do cinema!" },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const timer = setInterval(() => setPage((p) => (p + 1) % totalPages), 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-16 md:py-24 bg-gradient-dark">
      <div className="container">
        <h2 className="text-4xl md:text-5xl text-center mb-3 text-gradient-fire">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Milhares de pessoas já transformaram sua forma de assistir conteúdo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 animate-slide-up"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-fire flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente Verificado</p>
                </div>
              </div>
              <div className="text-highlight mb-3 text-sm">★★★★★</div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === page ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
