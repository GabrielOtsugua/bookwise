import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-[70%] m-auto">
      <Card className="bg-indigo-500 flex flex-col justify-between col-span-1 h-[500px] p-8">
        <nav className="grid gap-4">
          <h1 className="text-xl font-bold text-center">BookWise</h1>

          <Link href={"/logged/home"}>Início</Link>
          <Link href={"/logged/explorer"}>Explorar</Link>
          <Link href={"/logged/profile"}>Perfil</Link>
        </nav>

        <footer className="flex justify-center items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Cristofer</p>
          <p>Sair</p>
        </footer>
      </Card>

      <main className="col-span-3">{children}</main>
    </div>
  );
}
