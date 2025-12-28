import Image from "next/image";
import minImage from "../../../assets/minImage.jpg"

function HeroCard( ) {
  return (
    <div className="flex flex-col w-full gap-6 rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/80 to-sky-50/70 p-6 text-slate-900 shadow-card ring-1 ring-sky-100/60 backdrop-blur md:flex-row md:items-center">
      <div className="flex-1 space-y-4 order-2 md:order-1">
        <p className="text-sm font-semibold text-slate-900">MOHAMMED AL-ZAREI</p>
        <h2 className="text-4xl font-semibold leading-tight text-slate-900">Web Developer</h2>
        <div className="rounded-xl bg-white/60 px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm ring-1 ring-white/60 backdrop-blur">
          Truly loves Technology. passionate about creativity , and handcrafter of innoviativity
        </div>
        <div className="rounded-xl bg-white/60 px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm ring-1 ring-white/60 backdrop-blur">
         “I have not failed. I’ve just found 10,000 ways that won’t work.” Thomas Edison
        </div>
      </div>
        <div className="flex-shrink-0 order-1 md:order-2">
         <div className="relative w-48 md:w-60 aspect-[5/7] overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-md ring-1 ring-white/70 backdrop-blur">
          <Image
            src={minImage}
            alt="Profile portrait"
            fill
            className="object-cover object-[35%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
export default HeroCard;