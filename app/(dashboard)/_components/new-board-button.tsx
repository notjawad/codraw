"use client";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

import { cn } from "@/lib/utils";

import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const router = useRouter();

  const onClick = () => {
    mutate({ orgId, title: "Untitled board" })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={cn(
        "col-span-1 flex aspect-[100/127] flex-col items-center justify-center rounded-lg bg-indigo-500 py-6 transition-colors duration-200 ease-in-out hover:bg-indigo-700",
        (pending || disabled) &&
          "cursor-not-allowed opacity-75 hover:bg-indigo-500",
      )}
    >
      <div />
      <Plus className="h-12 w-12 stroke-1 text-white" />
      <p className="text-sm font-light text-white">New Board</p>
    </button>
  );
};
