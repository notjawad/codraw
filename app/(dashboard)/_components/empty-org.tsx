import Image from "next/image";

import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const EmptyOrg = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/empty-box.svg" alt="Empty Box" width={300} height={300} />
      <h2 className="text-2xl font-semibold">Welcome to Codraw</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Create a new organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
