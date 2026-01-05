import Image from "next/image";

export default function Categories() {
  const categories = [
    { name: "Dance", color: "purple" },
    { name: "Comedy", color: "green" },
    { name: "Memes", color: "blue" },
    { name: "Pranks", color: "orange" },
    { name: "Movie Clips", color: "indigo" },
    { name: "Funny", color: "lime" },
    { name: "Singing / Music Covers", color: "pink" },
    { name: "Acting / Lip Sync", color: "yellow" },
    { name: "Stand-up Comedy", color: "cyan" },
    { name: "Celebrity Moments", color: "purple" }
  ];

  const colorClasses = {
    purple: "bg-purple-100 hover:bg-purple-200",
    green: "bg-green-100 hover:bg-green-200",
    blue: "bg-blue-100 hover:bg-blue-200",
    orange: "bg-orange-100 hover:bg-orange-200",
    indigo: "bg-indigo-100 hover:bg-indigo-200",
    lime: "bg-lime-100 hover:bg-lime-200",
    pink: "bg-pink-100 hover:bg-pink-200",
    yellow: "bg-yellow-100 hover:bg-yellow-200",
    cyan: "bg-cyan-100 hover:bg-cyan-200"
  };

  const icon = "/assets/svg/mask.svg";

  return (
    <section id="categories" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top Categories
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
          <p className="text-lg text-gray-600 mt-10">
            Whether used by numerous businesses, institutions, and recruiters to significantly enhance their artificial and recruitment procedures.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition"
            >
              <div className={`rounded-xl p-3 ${colorClasses[category.color]}`}>
                <Image
                  src={icon}
                  alt={category.name}
                  width={30}
                  height={30}
                  className="w-8 h-8"
                />
              </div>
              <span className="text-md text-left max-w-30 text-gray-800 font-medium">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


