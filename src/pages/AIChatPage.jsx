import React, { useEffect, useRef } from "react";
import PageHero from "../components/shared/PageHero";

export default function AIChatPage() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.src = "https://www.noupe.com/embed/019ddf0077497b43a8da6811b7892bf6a0cd.js";
    script.async = true;
    ref.current.appendChild(script);
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, []);

  return (
    <>
      <PageHero
        badge="AI Support"
        title="AI Chat Assistant"
        description="Get instant answers to your technical support queries from our AI assistant, available around the clock."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/f9887c581_generated_88496fba.png"
      />
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={ref} className="min-h-[500px]" />
        </div>
      </section>
    </>
  );
}