import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
  <section className="relative bg-[linear-gradient(to_bottom,#FAF3E3,#FFFFFF00)] py-12 lg:py-20 overflow-hidden">
        {/* Background Pattern
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 ">
            <h1 className="text-6xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Explore the
              <br className="hidden sm:block" />
              <span className="block sm:inline">real-AI power.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Whether used by numerous businesses, institutions, and recruiters
              to significantly enhance their artificial and recruitment
              procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button variant="primary">Get started</Button>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">4.7</span>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-600">
                  (2.1k+ user&apos;s reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/assets/hero_right1.png"
              alt="Hero illustration"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
