"use client";

import Link from "next/link";
import { Card } from "./ui/card";
import { Home, Library, LogOut, Telescope, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function LayoutAside() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="col-span-1 hidden lg:flex flex-col justify-between items-center h-[500px] py-8 bg-primary-foreground">
        <nav className="grid gap-4">
          <h1 className="flex gap-1 text-xl font-bold text-center text-primary mb-4">
            <Library />
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
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Cristofer</p>
          </span>

          <Dialog>
            <DialogTrigger asChild>
              <p className="flex gap-2 items-center text-muted-foreground cursor-pointer">
                <LogOut size={20} />
                Sair
              </p>
            </DialogTrigger>

            <DialogContent>
              <p>Deseja sair da conta atual?</p>

              <div className="flex justify-end gap-2">
                <Button
                  onClick={() => router.push("/login")}
                  variant={"secondary"}
                >
                  Sair
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </footer>
      </Card>
    </motion.div>
  );
}
