"use client";

import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export default function Card({ image, title, description, href }: CardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}
