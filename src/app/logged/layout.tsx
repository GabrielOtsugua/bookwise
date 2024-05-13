import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-end p-4">
      <Card className="fixed left-0 top-0 h-[97%] w-[20%] m-4 bg-indigo-500 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-center my-8">BookWise</h1>

          <nav className="grid gap-4 ml-14">
            <Link href={"/logged/home"}>Início</Link>
            <Link href={"/logged/explorer"}>Explorar</Link>
            <Link href={"/logged/profile"}>Perfil</Link>
          </nav>
        </div>

        <footer className="flex justify-center items-center gap-3 mb-8">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Cristofer</p>
          <p>Sair</p>
        </footer>
      </Card>

      <main className="w-[75%] mt-12 -translate-x-10">{children}</main>

      {/* <aside className="fixed right-0 top-0 h-[97%] w-[20%] mx-4 my-16">
        <header className="mb-12">
          <h2 className="text-2xl">Populares</h2>
        </header>

        <section className="grid gap-4">
          <span className="flex justify-between">
            <p>Livros populares</p>
            <p>Ver todos</p>
          </span>

          <Card className="grid grid-cols-7 gap-4 p-4">
            <figure className="bg-white h-28 col-span-2"></figure>

            <main className="col-span-5 flex flex-col justify-between">
              <div>
                <p>A revolução dos bichos</p>
                <p>George Orwell</p>
              </div>

              <p>estrelinhas...</p>
            </main>
          </Card>

          <Card className="grid grid-cols-7 gap-4 p-4">
            <figure className="bg-white h-28 col-span-2"></figure>

            <main className="col-span-5 flex flex-col justify-between">
              <div>
                <p>A revolução dos bichos</p>
                <p>George Orwell</p>
              </div>

              <p>estrelinhas...</p>
            </main>
          </Card>

          <Card className="grid grid-cols-7 gap-4 p-4">
            <figure className="bg-white h-28 col-span-2"></figure>

            <main className="col-span-5 flex flex-col justify-between">
              <div>
                <p>A revolução dos bichos</p>
                <p>George Orwell</p>
              </div>

              <p>estrelinhas...</p>
            </main>
          </Card>
        </section>
      </aside> */}
    </div>
  );
}
