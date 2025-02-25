import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
} from "@tabler/icons-react";
import Link from "next/link";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ link }: { link: string }) => (
  <Link href={link} target="_blank">
    <div className="flex flex-1 w-full  h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  </Link>
);

const items = [
  {
    title: "Work",
    description: "Click here to view my work and projects.",
    header: <Skeleton link="/work" />,
    className: "md:col-span-2 cursor-pointer",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Resume",
    description: "Click here to view my resume and professional experience.",
    header: <Skeleton link="monish_kadam_cv.pdf" />,
    className: "md:col-span-1 cursor-pointer",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
