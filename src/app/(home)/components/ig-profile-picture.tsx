import Image from "next/image";

const IgProfilePicutre = () => {
  return (
    <div className="relative w-max animate-ig-stroke">
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="37"
          cy="37"
          r="34"
          stroke="url(#paint0_linear_658_19773)"
          strokeWidth="2.5"></circle>
        <defs>
          <linearGradient
            id="paint0_linear_658_19773"
            x1="3"
            y1="3"
            x2="71"
            y2="71"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F58529"></stop>
            <stop offset="0.487847" stopColor="#DD2A7B"></stop>
            <stop offset="1" stopColor="#8134AF"></stop>
          </linearGradient>
        </defs>
      </svg>
      <Image
        className="absolute left-7 top-7 translate-x-[-21px] translate-y-[-21px] rounded-full"
        src="/images/perfil_3.jpg"
        alt="Profile"
        width={60}
        height={60}
      />
    </div>
  );
};

export default IgProfilePicutre;
