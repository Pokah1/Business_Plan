import React from "react";
import "./App.css";
import PricingCard from "../components/PricingCard/PricingCard";
import BusinessPlan from "../components/BusinessPlans/BusinessPlan";


function App() {
  const showPricingCard = true;
  const cards = [
    {
      label: "Start Up",
      price: "Free",
      image: "/Images/bike.png",
      imageAlt: "Bike with clouds",
      benefits: ["Unlimited Downloads", "Email Support", "Limited Access"],
    },

    {
      label: "Pro",
      price: "49$ ",
      duration: "/Year",
      image: "/Images/car.png",
      imageAlt: "Car",
      benefits: [
        "Upto 10 Users",
        "Email support, Call support",
        "1 Year Access",
      ],
    },

    {
      label: "Enterprise",
      price: "99$ ",
      image: "/Images/plane.png",
      imageAlt: "Plane in the clouds",
      benefits: ["Unlimited Access", "On demand request", "Lifetime Access"],
    },
  ];

  return (
    <main>
      <div className="bg">
        <div className="info">
          <h1 className="heading">Choose your Plan</h1>
          <p className="description">
            Choosing the right plan is a pivotal decision in any endeavor,
            whether it's embarking on a new project, selecting a service, or
            charting a course for personal growth. The process of selecting a
            plan involves thoughtful consideration of various factors, including
            one's goals, budget, and specific needs.
          </p>
        </div>
      </div>

      {showPricingCard && (
        <div className="container prices">
          {cards.map((card) => (
            <PricingCard
              key={card.label}
              label={card.label}
              price={card.price}
              duration={card.duration}
              image={card.image}
              imageAlt={card.imageAlt}
              benefits={card.benefits}
            />
          ))}
        </div>
      )}
      <BusinessPlan/>
    </main>
    
  );
}

export default App;
