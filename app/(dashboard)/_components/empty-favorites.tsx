import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/empty-favorites.svg"
        alt="Empty search"
        width={140}
        height={140}
      />
      <h2 className="mt-6 text-2xl font-semibold">No favorite boards found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Add boards to your favorites to see them here
      </p>
    </div>
  );
};
