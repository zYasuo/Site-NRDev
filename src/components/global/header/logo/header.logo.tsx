import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HeaderLogo() {
  return (
    <>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </>
  );
}
