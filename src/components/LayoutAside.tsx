"use client";

import Link from "next/link";
import { Card } from "./ui/card";
import { Home, LogOut, Telescope, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";

export default function LayoutAside() {
  const pathname = usePathname();

  return (
    <Card className="flex flex-col justify-between col-span-1 h-[500px] py-8 px-12 bg-primary-foreground">
      <nav className="grid gap-4">
        <h1 className="text-xl font-bold text-center text-primary mb-4">
          BookWise
        </h1>

        <Link
          href={"/logged/home"}
          data-pathname={pathname === "/logged/home"}
          className="flex items-center gap-2 text-muted-foreground data-[pathname=true]:text-foreground"
        >
          <Home size={20} />
          Início
        </Link>
        <Link
          href={"/logged/explorer"}
          data-pathname={pathname === "/logged/explorer"}
          className="flex items-center gap-2 text-muted-foreground data-[pathname=true]:text-foreground"
        >
          <Telescope size={20} />
          Explorar
        </Link>
        <Link
          href={"/logged/profile"}
          data-pathname={pathname === "/logged/profile"}
          className="flex items-center gap-2 text-muted-foreground data-[pathname=true]:text-foreground"
        >
          <User size={20} />
          Perfil
        </Link>
      </nav>

      <footer>
        <span className="flex items-center justify-center gap-2 mb-6">
          <Avatar className="justify-self-center">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Cristofer</p>
        </span>

        <Link
          href={"/login"}
          className="flex gap-2 items-center text-muted-foreground"
        >
          <LogOut size={20} />
          Sair
        </Link>
      </footer>
    </Card>
  );
}
