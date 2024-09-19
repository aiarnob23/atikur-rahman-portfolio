export default function Experience() {
  return (
    <div
      id="experience"
      className="container flex flex-col mb-40 px-4 gap-16 ml-[280px] w-full mt-40"
    >
      <div className="flex flex-col gap-6">
        <div className="mb-4">
          <p className="text-3xl text-cyan-400 font-semibold">Experience</p>
          <hr className="border-[1px] mt-1 w-[162px] border-cyan-400" />
        </div>

        <div className="flex flex-wrap gap-12">
          {/* Fiverr SEO Expert Experience */}
          <div className="border-2 border-cyan-400 shadow-lg shadow-cyan-300 w-[400px] px-6 py-6 rounded-lg flex justify-center items-start flex-col gap-5 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-cyan-500">
            <div className="text-2xl font-bold text-cyan-500">
              SEO Expert - Fiverr
            </div>
            <div className="text-gray-500">
              Over the past several years, I have worked as an SEO expert on
              Fiverr, providing services to enhance website visibility and drive
              organic traffic. My key services include:
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>Keyword Research & Analysis</li>
                <li>On-page and Off-page SEO</li>
                <li>eBay and Shopify SEO</li>
                <li>eCommerce Optimization</li>
                <li>SEO Audits and Consultation</li>
              </ul>
            </div>
          </div>

          {/* SEO Audits and Consultation */}
          <div className="border-2  border-cyan-400 shadow-lg shadow-cyan-300 w-[400px] px-6 py-6 rounded-lg flex justify-center items-start flex-col gap-5 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-cyan-500">
            <div className="text-2xl font-bold text-cyan-500">
              SEO Audits and Consultation
            </div>
            <div className="text-gray-500">
              As an experienced SEO consultant, I conduct in-depth audits and
              provide actionable recommendations. My audits cover:
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>
                  Technical SEO issues such as site speed, crawlability, and
                  mobile optimization
                </li>
                <li>
                  Content optimization, focusing on keyword use and content
                  structure
                </li>
                <li>Backlink analysis and strategy improvement</li>
                <li>Competitive analysis for market insights</li>
              </ul>
              My consultations include:
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>Tailored strategies to improve organic traffic</li>
                <li>Personalized action plans for long-term SEO success</li>
                <li>Workshops and training for in-house SEO teams</li>
              </ul>
              I help clients streamline their SEO efforts and implement
              strategies that drive measurable improvements in search engine
              visibility.
            </div>
          </div>

          {/* Etsy Shop Product Ranking */}
          <div className="border-2 border-cyan-400 shadow-lg shadow-cyan-300 w-[400px] px-6 py-6 rounded-lg flex justify-center items-start flex-col gap-5 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-cyan-500">
            <div className="text-2xl font-bold text-cyan-500">
              Etsy Shop Product Ranking
            </div>
            <div className="text-gray-500">
              Specializing in improving product rankings on Etsy, I have
              successfully optimized numerous shop listings to enhance
              visibility and boost sales. My expertise includes:
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>Product title and description optimization</li>
                <li>
                  Keyword research specific to Etsy&apos;s search algorithm
                </li>
                <li>13 Hot selling tags</li>
                <li>Category and tag optimization</li>
                <li>Competitive analysis and strategy development</li>
              </ul>
              I focus on strategies that increase product discoverability and
              drive higher conversion rates for Etsy sellers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
