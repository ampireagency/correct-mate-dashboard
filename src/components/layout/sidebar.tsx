"use client";
import { MdOutlineAssignment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

const SideBar = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const sidenavigations = [
    {
      title: "Assessments",
      icon: <MdOutlineAssignment />,
      path: "/",
    },
    {
      title: "Settings",
      icon: <IoSettingsOutline />,
      path: "/settings",
    },
  ];

  // Hide sidebar if user is on login, signup, or home page
  if (pathname === "/login" || pathname === "/signup" || pathname=== "/") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-dvh items-start justify-start gap-3 bg-green-700 p-3">
      <div className="w-[300px] p-2 text-background">
        <div className="flex flex-col gap-y-3 pt-20 capitalize">
          <div className="flex w-full items-center justify-center pb-8">
            <img
              src="/logo.png"
              alt="Profile picture"
              className="object-cover"
            />
          </div>
          {sidenavigations.map(({ title, path, icon }) => {
            const isActive =
              (title === "Assessments" &&
                (pathname === "/" || pathname.startsWith("/assessment"))) ||
              pathname === path;
            return (
              <a
                href={path}
                className={`flex size-full items-center gap-2 rounded-md px-4 py-2 text-muted transition-all duration-500 hover:bg-background/10 ${isActive ? "bg-background/10" : ""}`}
                key={title}
              >
                <span>{icon}</span>
                <span>{title}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="h-full w-full rounded-md bg-muted p-5 text-black">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
