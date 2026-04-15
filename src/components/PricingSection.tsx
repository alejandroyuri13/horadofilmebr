import { Check } from "lucide-react";

const plans = [
  {
    name: "PLANO 1 MÊS",
    price: "9,90",
    oldPrice: "19,90",
    discount: "50% DE DESCONTO",
    link: "https://pay.cakto.com.br/3ad4zv9",
    popular: false,
  },
  {
    name: "PLANO 3 MESES",
    price: "18,90",
    oldPrice: "29,70",
    discount: "36% DE DESCONTO",
    link: "https://pay.cakto.com.br/3vz6c7n",
    popular: true,
  },
  {
    name: "PLANO 6 MESES",
    price: "27,90",
    oldPrice: "59,40",
    discount: "53% DE DESCONTO",
    link: "https://pay.cakto.com.br/59xy4gw_844964",
    popular: false,
  },
];

const benefits = [
  "Completo",
  "Sem fidelidade",
  "Assista em 3 telas simultâneas",
  "+ de 40 mil conteúdos",
  "Canais Adultos (opcional)",
  "Qualidade SD/HD/FHD/4K",
  "Assista na Smart TV",
  "Assista no Smartphone",
  "Assista na TV Box",
  "Assista no computador",
];

const PricingSection = () => (
  <section id="planos" className="py-16 md:py-24 bg-gradient-dark scroll-mt-8">
    <div className="container">
      <h2 className="text-4xl md:text-5xl text-center mb-14 text-gradient-fire">
        Escolha Seu Plano e Assine Já!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02] ${
              plan.popular
                ? "border-primary bg-card shadow-fire-lg scale-[1.02]"
                : "border-border bg-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-fire text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Mais Popular
              </div>
            )}

            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mt-2 mb-1">
              Plano Hora do Filme
            </p>
            <h3 className="text-3xl text-foreground mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {plan.name}
            </h3>

            <ul className="text-left space-y-2 mb-6 w-full">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="bg-highlight text-highlight-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
              {plan.discount}
            </div>

            <p className="text-muted-foreground text-sm mb-1">
              De <span className="line-through">R$ {plan.oldPrice}</span> por apenas:
            </p>
            <p className="text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              R$ {plan.price}
            </p>

            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-gradient-fire text-primary-foreground font-bold text-base py-3.5 rounded-lg shadow-fire hover:scale-105 transition-transform duration-200 uppercase tracking-wide text-center"
            >
              Quero assinar agora!
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
