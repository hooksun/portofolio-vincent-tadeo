import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export default function SkillImage({
  image,
  alt,
  className,
}: {
  image: StaticImport,
  alt: string,
  className?: string,
}) {
  return <Image src={image} alt={alt} className={className ?? "w-full"} />
}