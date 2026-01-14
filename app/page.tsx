import Image from "next/image"; 
import { neueMontreal } from "./fonts"



export default function Home() {
  return (
    <section className="h-screen bg-[linear-gradient(90deg,#02498f_0%,#000000_50%,#460121_100%)]">
      <div className="flex-col items-center w-[1400px] mx-auto flex justify-end h-full">
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
          className="mt-30"
        />
      </div>
    </section>
  );
}
