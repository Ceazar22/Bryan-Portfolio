import Image from "next/image";
import { neueMontreal } from "./fonts";

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[linear-gradient(90deg,#02498f_0%,#000000_50%,#460121_100%)]">
<div
  className="absolute -inset-[20%] h-[30%] top-1/2 
         pointer-events-none 
         z-[1] 
         rotate-[-18deg] 
         opacity-[0.85] 
         blur-[90px]
         bg-[radial-gradient(ellipse_at_15%_50%,rgba(40,120,255,0.45)_0%,transparent_60%),radial-gradient(ellipse_at_35%_55%,rgba(120,180,255,0.30)_0%,transparent_60%),radial-gradient(ellipse_at_55%_50%,rgba(255,120,200,0.35)_0%,transparent_60%),radial-gradient(ellipse_at_75%_45%,rgba(180,60,140,0.35)_0%,transparent_60%)]">
</div>
<div
  className="absolute -inset-[30%] w-[30%] left-0 bottom-0
         pointer-events-none
         z-[0]
         rotate-[-18deg]
         opacity-[0.7]
         blur-[120px]
         bg-[radial-gradient(ellipse_at_10%_50%,rgba(30,100,255,0.55)_0%,transparent_65%),radial-gradient(ellipse_at_25%_55%,rgba(80,160,255,0.35)_0%,transparent_65%),radial-gradient(ellipse_at_40%_60%,rgba(120,200,255,0.25)_0%,transparent_65%)]">
</div>
<div
  className="absolute w-[30%] ml-auto inset-[30%] right-0 bottom-0
         pointer-events-none
         z-[0]
         rotate-[-18deg]
         opacity-[0.75]
         blur-[120px]
         bg-[radial-gradient(ellipse_at_90%_50%,rgba(180,40,120,0.55)_0%,transparent_65%),radial-gradient(ellipse_at_75%_55%,rgba(255,80,140,0.35)_0%,transparent_65%),radial-gradient(ellipse_at_60%_60%,rgba(255,140,200,0.25)_0%,transparent_65%)]">
</div>

      <div className="flex-col items-center w-[1400px] mx-auto flex justify-end h-full relative z-[2]">
        <div className="text-center">
          <h1
            className={`${neueMontreal.className} 
              text-5xl md:text-7xl 
              font-semibold 
              tracking-tight 
              leading-[1.05] 
              text-white
              text-center`}
          >
            I’m Bryan
          </h1>

          <p
            className="mt-4 
              text-sm md:text-base 
              tracking-wide 
              uppercase 
              text-white/60"
          >
            a web developer who builds high-performing websites
          </p>
        </div>

        <Image
          src="/images/bryan4.png"
          alt="Profile Picture"
          width={1000}
          height={1000}
          className="mt-30 z-[2]"
        />
      </div>

      {/* STARFIELD */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

        {/* FAR STARS */}
        {[...Array(500)].map((_, i) => (
          <span
            key={`far-${i}`}
            className="absolute rounded-full bg-white/60"
            style={{
              width: "1px",
              height: "1px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `farStars ${90 + Math.random() * 60}s linear infinite`,
            }}
          />
        ))}

        {/* MID STARS */}
        {[...Array(200)].map((_, i) => (
          <span
            key={`mid-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(0.4px)",
              animation: `midStars ${45 + Math.random() * 40}s linear infinite`,
            }}
          />
        ))}

        {/* NEAR STARS */}
        {[...Array(80)].map((_, i) => (
          <span
            key={`near-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(0.7px)",
              opacity: 0.9,
              animation: `nearStars ${20 + Math.random() * 20}s linear infinite`,
            }}
          />
        ))}

      </div>

    </section>
  );
}
