import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-3xl text-center">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
        <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl mb-4 text-gradient-fire">
          Você Não Corre Nenhum Risco!
        </h2>
        <p className="text-foreground font-semibold text-lg mb-4">
          É simples, ou você fica feliz com o conteúdo, ou você fica na tranquilidade com 100% do seu dinheiro de volta.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Se, dentro de 7 dias, por qualquer motivo você decidir não continuar com a <strong className="text-foreground">HORA DO FILME</strong>, basta entrar em contato e nós faremos o seu reembolso sem nenhuma burocracia.
        </p>
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

export default GuaranteeSection;
