"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link href={props.href} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
