// File: StaticParticles.tsx
import React, { useMemo, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StaticParticles = React.memo(() => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      particles: {
        number: { value: 15, density: { enable: true, value_area: 800 } },
        color: { value: "#5a5a5a" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 4 },
        },
        opacity: {
          value: 0.5,
          anim: { enable: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false },
        },
        line_linked: {
          enable: true,
          distance: 180,
          color: "#5a5a5a",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true,
        },
      },
      retina_detect: false,
    }),
    []
  );

  return <Particles init={particlesInit} options={particlesOptions} />;
});

export default StaticParticles;
