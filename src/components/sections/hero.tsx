"use client";
import { WavyBackground } from "../ui/wavy-background";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const words = `Um futuro desenvolvedor full-stack vivendo a base de café e jogos!`;

export default function Hero() {
  return (
    <section id="Home">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Bem-vindos ao meu portfolio!
        </p>
        <div className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          <TextGenerateEffect words={words} />
        </div>
      </WavyBackground>
    </section>
  );
}
