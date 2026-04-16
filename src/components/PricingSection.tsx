import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "1 MÊS",
    price: "9,90",
    oldPrice: "19,90",
    perMonth: "9,90",
    discount: "50% OFF",
    link: "https://pay.cakto.com.br/3ad4zv9?affiliate=LqqD6a6b",
    popular: false,
    icon: Zap,
  },
  {
    name: "6 MESES",
    price: "27,90",
    oldPrice: "59,40",
    perMonth: "4,65",
    discount: "53% OFF",
    link: "https://pay.cakto.com.br/59xy4gw_844964?affiliate=LvkwFqMA",
    popular: true,
    icon: Crown,
  },
  {
    name: "3 MESES",
    price: "18,90",
    oldPrice: "29,70",
    perMonth: "6,30",
    discount: "36% OFF",
    link: "https://pay.cakto.com.br/3vz6c7n?affiliate=WJArJLYC",
    popular: false,
    icon: Star,
  },
];

const benefits = [
  "Catálogo completo liberado",
  "Sem fidelidade — cancele quando quiser",
  "Assista em até 3 telas simultâneas",
  "+ de 40 mil conteúdos disponíveis",
  "Canais Adultos (opcional)",
  "Qualidade SD / HD / FHD / 4K",
  "Smart TV, Celular, TV Box e PC",
];

const PricingSection = () => (
  <section id="planos" className="relative py-20 md:py-28 scroll-mt-8 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-gradient-dark" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

    <div className="container relative z-10">
      <div className="text-center mb-4">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4 uppercase tracking-wider">
          Oferta por tempo limitado
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl text-center mb-3 text-gradient-fire">
        Escolha Seu Plano
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-14 max-w-md mx-auto">
        Todos os planos incluem acesso completo. Escolha o que melhor se encaixa pra você.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-end">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.name}
              className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-primary bg-card shadow-fire-lg md:scale-[1.06] z-10 md:-my-4"
                  : "border border-border bg-card/80 hover:border-primary/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-fire text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-fire whitespace-nowrap">
                  ⭐ Melhor Custo-Benefício
                </div>
              )}

              {/* Header */}
              <div className={`p-6 pb-4 text-center ${plan.popular ? "pt-8" : "pt-6"}`}>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${
                  plan.popular ? "bg-gradient-fire" : "bg-secondary"
                }`}>
                  <Icon className={`w-5 h-5 ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-2xl md:text-3xl text-foreground mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PLANO {plan.name}
                </h3>
                <div className="inline-block bg-highlight/15 text-highlight text-[11px] font-bold px-3 py-0.5 rounded-full">
                  {plan.discount}
                </div>
              </div>

              {/* Price */}
              <div className="px-6 text-center mb-1">
                <p className="text-muted-foreground text-xs mb-1">
                  De <span className="line-through">R$ {plan.oldPrice}</span> por:
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground text-lg">R$</span>
                  <span className={`text-5xl md:text-6xl font-bold ${plan.popular ? "text-gradient-fire" : "text-foreground"}`} style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-[11px] mt-0.5">
                  equivale a <strong className="text-foreground">R$ {plan.perMonth}/mês</strong>
                </p>
              </div>

              {/* Divider */}
              <div className="mx-6 my-4 h-px bg-border" />

              {/* Benefits */}
              <div className="px-6 pb-2 flex-1">
                <ul className="space-y-2.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] text-muted-foreground">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-muted-foreground/60"}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 pt-4">
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold text-sm py-3.5 rounded-xl uppercase tracking-wide transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-fire text-primary-foreground shadow-fire hover:scale-[1.03] hover:shadow-fire-lg"
                      : "bg-secondary text-foreground border border-border hover:border-primary/50 hover:bg-secondary/80"
                  }`}
                >
                  {plan.popular ? "🔥 Quero esse plano!" : "Assinar agora"}
                </a>
                {plan.popular && (
                  <p className="text-center text-[11px] text-muted-foreground mt-2">
                    7 dias de garantia · Cancele quando quiser
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-muted-foreground text-xs">
        <span className="flex items-center gap-1.5">🔒 Pagamento 100% seguro</span>
        <span className="flex items-center gap-1.5">✅ Acesso imediato</span>
        <span className="flex items-center gap-1.5">🛡️ 7 dias de garantia</span>
      </div>
    </div>
  </section>
);

export default PricingSection;
