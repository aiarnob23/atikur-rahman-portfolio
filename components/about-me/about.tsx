import dp from "@/public/profile/dp.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div id="about-me" className="mb-40  md:mt-[300px]">
      {/* about me details */}
      <div className="container flex-col-reverse  mx-auto px-6 md:px-12 lg:px-28 mb-12 flex  lg:flex-row gap-16 w-full mt-40">
        <div className="flex flex-col w-full lg:w-3/5 items-start gap-6">
          <div className="flex flex-col">
            <p className="text-2xl md:text-3xl text-cyan-400 font-semibold">
              About Me
            </p>
            <hr className="border-[1px] mt-2 border-cyan-400 " />
          </div>
          <p className="leading-8 text-lg md:text-xl font-medium text-gray-500">
            I am an E-Commerce SEO Specialist. <br />
            <br />
            With over 3 years of hands-on experience, I&apos;m here to help your
            online store. In just 30 seconds, your audience decides whether to
            stay or move on—are your listings captivating enough to hold their
            attention? I offer expert keyword research, dropshipping support,
            on-page SEO, seamless product uploads, and high-converting product
            descriptions tailored for eBay, Amazon, Shopify, and Etsy. My goal
            is to give you a hassle-free experience that boosts visibility and
            sales. Let&apos;s make your store stand out and achieve real
            success.
          </p>
        </div>
        {/* image part */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <div className="relative h-[300px] w-[300px]">
            <Image
              className="rounded-full border-4 border-cyan-500 opacity-60 hover:opacity-90 shadow-xl shadow-cyan-400"
              src={dp}
              layout="fill"
              objectFit="cover"
              alt="atikur-rahman-profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
