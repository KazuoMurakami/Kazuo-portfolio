"use client";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/Spotlight";
import { useRouter } from "next/navigation";
export default function About() {
  const router = useRouter();
  return (
    <section
      id="Sobre"
      className="bg-black flex flex-col justify-center items-center"
    >
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex justify-center flex-col">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Sobre Mim <br /> is the new trend.
          </h1>
          <Button
            className="mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
            variant={"link"}
            onClick={() => router.push("/about")}
          >
            Clique aqui!
          </Button>
        </div>
      </div>
    </section>
  );
}
