import Link from "next/link";

export default function Intro() {
  return (
    <div className="px-12 mt-40 w-full flex flex-col items-center">
      <div className="flex flex-col items-start gap-6">
        <p className="text-xl text-cyan-400 font-semibold fade-in">
          Hello, my name is
        </p>
        <h1 className="text-7xl font-bold fade-in delay-1">Atikur Rahman.</h1>
        <h3 className="text-6xl font-bold text-gray-400 fade-in delay-2">
          A passionate SEO Specialist.
        </h3>
        <p className="text-2xl text-gray-400 font-semibold mt-5 leading-[50px] fade-in delay-3">
          I&apos;m an experienced eCommerce{" "}
          <span className="font-bold text-slate-400 text-[26px]">
            SEO Specialist
          </span>
          in Shopify, Etsy, eBay
        </p>
        <button className="btn btn-outline border-cyan-500 mt-8 border-2 hover:bg-cyan-400 text-cyan-400 text-[20px] fade-in delay-4">
          <Link href="mailto:atikur.rahman.seo1@mail.com">Get in touch!</Link>
        </button>
      </div>
    </div>
  );
}
