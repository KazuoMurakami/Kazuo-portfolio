"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden gap-5"
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Se interessou nas minhas habilidades? <br /> entre em contato comigo!
      </h1>
      <Button className="z-10" size={"lg"}>
        Me envie um Email <Mail className="size-5 ml-2" />
      </Button>
    </section>
  );
}
