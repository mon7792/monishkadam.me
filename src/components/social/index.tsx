import Link from "next/link";
import Image from "next/image";

type SocialProps = {
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};  

const Social = ({ href, src, alt, width = 40, height = 40, className ="" }: SocialProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:scale-110 transition-all duration-200"
    >
      <div className="flex items-center justify-center p-2 border-2 border-white rounded-full cursor-pointer hover:bg-gradient-to-r from-pink-500 to-rose-500">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
    </Link>
  );
};

export default Social;
