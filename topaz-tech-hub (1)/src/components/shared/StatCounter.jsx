import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years In Business" },
  { value: 3000, suffix: "+", label: "Projects Delivered" },
  { value: 750, suffix: "+", label: "Meeting Rooms Supported" },
  { value: 99.7, suffix: "%", label: "Client Satisfaction", decimals: 1 },
  { value: 24, suffix: "/5", label: "Global Help Desk" },
];

function AnimatedNumber({ target, suffix, decimals = 0, light, duration = 2000 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, decimals]);

  return (
    <span ref={ref} className={`text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-2 block ${light ? "text-white" : "text-[#637480]"}`}>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}{suffix}
    </span>
  );
}

export default function StatCounter({ light = false }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
      {stats.map((stat, i) => (
        <div key={stat.label} className="text-center py-4">
          <AnimatedNumber
            target={stat.value}
            suffix={stat.suffix}
            decimals={stat.decimals}
            light={light}
          />
          <div className={`text-sm font-body font-medium tracking-wide ${light ? "text-white/60" : "text-muted-foreground"}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}