import Button from "./Button";
import Image from "next/image";

export default function Testimonial({ variant = "default" }) {
  const features = [
    {
      title: "Create & Share Videos",
      description: "Express yourself with short-form content",
      imageSrc: "/assets/svg/Frame1.svg",
      alt: "Video Icon",
    },
    {
      title: "Build Your Influence",
      description: "Grow your reach and expand your network",
      imageSrc: "/assets/svg/Frame2.svg",
      alt: "Influence Icon",
    },
    {
      title: "Global Reach",
      description: "Connect with audiences worldwide",
      imageSrc: "/assets/svg/Frame3.svg",
      alt: "Global Icon",
    },
  ];

  if (variant === "app-download") {
    return (
      <section className="relative py-12 lg:py-20 overflow-hidden bg-[linear-gradient(to_top,#FAF3E3,#FFFFFF00)]">
        <div className="container mx-auto px-6">
          {/* Main Grid Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column: Text & Downloads */}
            <div className="space-y-8 text-center lg:text-left order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
                  Users say something <br className="hidden md:block" /> about
                  Sassly
                </h2>
                <div className="flex justify-center lg:justify-start gap-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-3 h-3 bg-[#E8A317]"
                      style={{
                        clipPath:
                          "polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0 50%)",
                      }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  Whether used by numerous businesses, institutions, and
                  recruiters to significantly enhance their artificial and
                  recruitment procedures.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all w-full sm:w-auto lg:w-full max-w-[240px] mx-auto lg:mx-0"
                >
                  <img
                    src="/assets/svg/app_store.svg"
                    alt="Apple"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <div className="flex flex-col leading-none text-left">
                    <span className="text-[10px] uppercase opacity-80">
                      Download on the
                    </span>
                    <span className="text-lg font-semibold">App Store</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all w-full sm:w-auto lg:w-full max-w-[240px] mx-auto lg:mx-0"
                >
                  <img
                    src="/assets/svg/playstore.svg"
                    alt="Google"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <div className="flex flex-col leading-none text-left">
                    <span className="text-[10px] uppercase opacity-80">
                      Get it on
                    </span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Middle Column: Hand holding Phone (Image) */}
            <div className="order-3 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[300px] md:max-w-[400px]">
                <img
                  src="/assets/mockup1.png"
                  alt="Sassly Mobile App"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column: Features List */}
            <div className="space-y-8 md:space-y-10 order-2 lg:order-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  /* md:max-w-md mx-auto: Yeh tablet par content ko beech mein rakhta hai lekin left-aligned rakhta hai */
                  className="flex flex-col md:flex-row items-center mt-5 lg:items-start md:max-w-sm lg:max-w-none mx-auto lg:mx-0 gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[#F4A100] rounded-full flex items-center justify-center shadow-lg shadow-orange-100 group-hover:scale-110 transition-transform">
                    <img
                      src={feature.imageSrc}
                      alt={feature.alt}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  {/* text-center on mobile, text-left on tablet/desktop to keep alignment same */}
                  <div className="space-y-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-[#1A1A1A]">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 font-medium leading-snug max-w-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant - Optimized for mobile
  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Testimonial Card */}
          <div className="w-full max-w-sm md:max-w-md">
            <div className="bg-[linear-gradient(180deg,#FFFFFF,#FFF7EC)] rounded-[2.5rem] p-1">
              <div className="bg-white rounded-[2.5rem] pb-12 flex flex-col items-center shadow-sm">
                <div className="w-full p-4">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src="/assets/city.jpg"
                      alt="Testimonial city"
                      width={400}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="-mt-16 mb-4">
                  <div className="w-24 h-24 rounded-full border-[6px] border-white overflow-hidden shadow-xl">
                    <Image
                      src="/assets/boy.jpg"
                      alt="User avatar"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">
                    @karennne
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2h ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Users say something <span className="lg:block">about Sassly</span>
            </h2>
            <div className="flex justify-center lg:justify-start gap-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-3 h-3 bg-[#E8A317]"
                  style={{
                    clipPath:
                      "polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0 50%)",
                  }}
                />
              ))}
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Whether used by numerous businesses, institutions, and recruiters
              to significantly enhance their artificial and recruitment
              procedures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6   ">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center rounded-full p-4 bg-[linear-gradient(90deg,#CC7722,#E8A317)] shadow-md">
                  <Image
                    src="/assets/svg/Frame2.svg"
                    alt="Build Your Influence"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Build Your Influence
                  </h3>
                  <p className="text-sm text-gray-600">
                    Grow your reach and network.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center rounded-full p-4 bg-[linear-gradient(90deg,#CC7722,#E8A317)] shadow-md">
                  <Image
                    src="/assets/svg/Frame3.svg"
                    alt="Global Reach"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Global Reach
                  </h3>
                  <p className="text-sm text-gray-600">
                    Connect with audiences worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="primary">Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
