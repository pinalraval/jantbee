import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: "/assets/svg/Frame1.svg",
      title: "Create & Share Videos",
      description:
        "Engage with a wider audience, build meaningful connections, and strengthen your presence within your industry or community.",
    },
    {
      icon: "/assets/svg/Frame2.svg",
      title: "Build Your Influence",
      description:
        "Engage with a wider audience, build meaningful connections, and strengthen your presence within your industry or community.",
    },
    {
      icon: "/assets/svg/Frame3.svg",
      title: "Global Reach",
      description:
        "Reach people across different regions and cultures, allowing your content to inspire, inform, and interact with global viewers.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white bg-[radial-gradient(ellipse_at_center,_#FAF3E3_0%,_transparent_70%)]">
  {/* Content here */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-xl sm:text-5xl lg:text-6xl font-medium text-gray-900">
            Powerful Reasons to Get Started
          </h2>
          <div className="flex justify-center mt-6 mb-4 gap-2">
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
          <p className="text-lg text-gray-600 mt-10 max-w-4xl text-center mx-auto">
            Whether used by numerous businesses, institutions, and recruiters to significantly enhance their artificial and recruitment procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow "
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-full p-3 bg-[linear-gradient(90deg,#CC7722,#E8A317)] shadow-lg shadow-orange-100">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


