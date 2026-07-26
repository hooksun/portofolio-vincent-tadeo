import Link from "next/link";

export default function NavbarButton({
  text,
  path,
  onClick,
}: {
  text: string;
  path: string;
  onClick: () => unknown;
}) {
  return (
    <Link
      className="link-button p-4 uppercase font-bold text-lg relative flex-1 text-center"
      href={path}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
