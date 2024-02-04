import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  isFavorite,
  title,
  authorLabel,
  createdAtLabel,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <div className="relative bg-white p-3">
      <p className="max-w-[calc(100%-20px)] truncate text-[13px]">{title}</p>
      <p className="truncate text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {authorLabel} - {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "absolute right-3 top-3 text-muted-foreground opacity-0 transition hover:text-indigo-500 group-hover:opacity-100",
          disabled && "cursor-not-allowed opacity-75",
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavorite && "fill-blue-500 text-indigo-500",
          )}
        />
      </button>
    </div>
  );
};
