import { useEffect, useState } from "react";

const names = ["Marcio", "Ana", "Pedro", "Juliana", "Felipe", "Camila", "Diego", "Renata", "Bruno", "Letícia"];
const plans = ["plano de 1 mês", "plano de 3 meses", "plano de 6 meses"];

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    const show = () => {
      setName(names[Math.floor(Math.random() * names.length)]);
      setPlan(plans[Math.floor(Math.random() * plans.length)]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const interval = setInterval(show, 12000);
    const initial = setTimeout(show, 5000);
    return () => { clearInterval(interval); clearTimeout(initial); };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-card border border-border rounded-xl p-4 shadow-lg max-w-xs animate-slide-up">
      <p className="text-sm text-foreground">
        <strong>{name}</strong>{" "}
        <span className="text-muted-foreground">acabou de adquirir o {plan}</span>
      </p>
    </div>
  );
};

export default SocialProofPopup;
