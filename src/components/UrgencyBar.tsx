import { useEffect, useState } from "react";

const cities = ["São Paulo", "Rio de Janeiro", "Salvador", "Belo Horizonte", "Fortaleza", "Curitiba", "Recife", "Brasília", "Manaus", "Porto Alegre"];

const UrgencyBar = () => {
  const [city, setCity] = useState(cities[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCity(cities[Math.floor(Math.random() * cities.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-fire py-2.5 px-4 text-center text-sm font-semibold text-primary-foreground">
      Pessoas da sua região de <strong>{city}</strong> estão comprando este produto neste exato momento
    </div>
  );
};

export default UrgencyBar;
