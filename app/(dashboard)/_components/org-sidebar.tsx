"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden w-[206px] flex-col space-y-6 pl-5 pt-5 lg:flex">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image
            src="/logos/logo-colored.svg"
            alt="Logo"
            width="60"
            height="60"
          />
          <span className={cn("text-2xl font-semibold", font.className)}>
            Codraw
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="w-full space-y-1">
        <Button
          asChild
          size="lg"
          className="w-full justify-start px-2 font-normal"
          variant={favorites ? "ghost" : "secondary"}
        >
          <Link href="/">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className="w-full justify-start px-2 font-normal"
          variant={favorites ? "secondary" : "ghost"}
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <Star className="mr-2 h-4 w-4" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
