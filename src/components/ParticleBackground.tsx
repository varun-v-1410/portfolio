import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { Particles } from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground({move}: {move: boolean}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 203, // Adjust the particle density
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // White particles
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: move,
            speed: 1,
            direction: "none",
            out_mode: "out",
            straight: true,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}