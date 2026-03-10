import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  imagePosition?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  imagePosition = "object-center",
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col flex-shrink-0 w-72"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={src}
          alt={title}
          fill
          className={`object-cover ${imagePosition}`}
        />
      </div>

      <div className="relative p-3 flex-1">
        <h1 className="text-base font-semibold text-white leading-tight">{title}</h1>
        <p className="mt-1 text-gray-300 text-sm">{description}</p>
      </div>
    </Link>
  );
};
