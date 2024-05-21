"use client";

import { Home, LogOut, Telescope, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed flex lg:hidden justify-center gap-16 bottom-0 left-0 right-0 p-2 bg-background/40 backdrop-blur-2xl z-50">
      <Link
        href={"/logged/home"}
        data-pathname={pathname === "/logged/home"}
        className="rounded-full text-muted-foreground data-[pathname=true]:text-primary"
      >
        <Home size={24} />
      </Link>
      <Link
        href={"/logged/explorer"}
        data-pathname={pathname === "/logged/explorer"}
        className="rounded-full text-muted-foreground data-[pathname=true]:text-primary"
      >
        <Telescope size={24} />
      </Link>
      <Link
        href={"/logged/profile"}
        data-pathname={pathname === "/logged/profile"}
        className="rounded-full text-muted-foreground data-[pathname=true]:text-primary"
      >
        <User size={24} />
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <LogOut size={24} className="text-red-400" />
        </DialogTrigger>

        <DialogContent className="w-[92%] rounded-lg">
          <p>Deseja sair da conta atual?</p>

          <div className="flex justify-end gap-2">
            <Button onClick={() => router.push("/login")} variant={"secondary"}>
              Sair
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
