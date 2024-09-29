import Image from "next/image";
import React from "react";

interface props {
  title: string;
  image: string;
  description: string;
  styles: string;
  alt: string;
  handleClick: () => void;
}

const HomeCard = ({
  title,
  image,
  alt,
  description,
  styles,
  handleClick,
}: props) => {
  return (
    <div
      onClick={handleClick}
      className={`${styles} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px] ">
        <Image src={`/icons/${image}`} alt={alt} width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
