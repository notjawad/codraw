"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { useQuery } from "convex/react";
import { useRenameModal } from "@/store/use-rename-modal";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { Actions } from "@/components/actions";
import { MenuIcon } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="px-1.5 text-neutral-300">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image
              src="/logos/logo-colored.svg"
              alt="Codraw Logo"
              height={40}
              width={40}
            />
            <span
              className={cn(
                "ml-2 text-xl font-semibold text-black",
                font.className,
              )}
            >
              Codraw
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Rename board" side="bottom" sideOffset={10}>
        <Button
          onClick={() => onOpen(data._id, data.title)}
          variant="board"
          className="px-2 text-base font-normal"
        >
          {data.title}
        </Button>
      </Hint>
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <MenuIcon />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute left-2 top-2 flex h-12 w-[300px] items-center rounded-md bg-white px-1.5 shadow-md" />
  );
};
