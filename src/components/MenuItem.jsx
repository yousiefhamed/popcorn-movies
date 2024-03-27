import Link from "next/link";

export default function MenuItem({ title, link, Icon }) {
  return (
    <Link href={link} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
