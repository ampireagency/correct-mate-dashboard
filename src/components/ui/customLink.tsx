import Link from "next/link";
import React from "react";

const CustomLink = ({ className, children, path }:{children:React.ReactNode, className:string;path:string}) => {
  return (
    <Link className={`rounded-xl px-4 py-2 flex items-center ${className}`} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
