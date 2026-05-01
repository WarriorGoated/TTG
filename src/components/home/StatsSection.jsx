import React from "react";
import StatCounter from "../shared/StatCounter";

export default function StatsSection() {
  return (
    <section className="py-32 bg-[#e3dfd7] border-y border-[#cdc9c0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <StatCounter />
      </div>
    </section>
  );
}