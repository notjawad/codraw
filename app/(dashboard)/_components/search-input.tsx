"use client";

import { ChangeEvent, useEffect, useState } from "react";

import qs from "query-string";
import { useDebounce } from "usehooks-ts";
import { useRouter } from "next/navigation";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: { search: debouncedValue },
      },
      { skipEmptyString: true, skipNull: true },
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
      <Input
        placeholder="Search boards"
        className="w-full max-w-[516px] pl-9"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
