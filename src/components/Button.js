import Image from "next/image";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors group";

  const variants = {
    primary:
      "bg-[linear-gradient(90deg,#CC7722,#E8A317)] text-white hover:opacity-90",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {variant === "primary" && (
        <Image
          src="/assets/svg/arrow.svg"
          alt="Arrow"
          width={20}
          height={20}
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45"
        />
      )}
    </button>
  );
}


