import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Home, LogOut, Telescope, User } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-[70%] m-auto">
      <Card className="bg-indigo-500 flex flex-col justify-between col-span-1 h-[500px] py-8 px-12">
        <nav className="grid gap-4">
          <h1 className="text-xl font-bold text-center mb-4">BookWise</h1>

          <Link href={"/logged/home"} className="flex items-center gap-2">
            <Home size={20} />
            Início
          </Link>
          <Link href={"/logged/explorer"} className="flex items-center gap-2">
            <Telescope size={20} />
            Explorar
          </Link>
          <Link href={"/logged/profile"} className="flex items-center gap-2">
            <User size={20} />
            Perfil
          </Link>
        </nav>

        <footer className="flex flex-col items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Cristofer</p>
          <Link href={"/login"} className="flex gap-2 items-center">
            <LogOut size={20} />
            Sair
          </Link>
        </footer>
      </Card>

      <main className="col-span-3">{children}</main>
    </div>
  );
}
