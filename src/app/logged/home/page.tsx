import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChevronRight, HomeIcon, SearchCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-cols-3 items-start gap-4">
      <main className="col-span-2 grid gap-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <HomeIcon />
          Início
        </h2>

        <section className="grid gap-4">
          <span className="flex justify-between items-end">
            <p>Sua ultima leitura</p>
            <p className="text-sm flex gap-2">
              Ver todos <ChevronRight size={20} />
            </p>
          </span>

          <Card className="flex gap-4 p-4">
            <figure className="bg-white h-36 min-w-24 rounded"></figure>

            <main className="flex flex-col justify-between">
              <span className="flex justify-between items-center">
                <p className="text-sm font-light">Há 2 dias</p>
                <p className="text-sm">estrelinhas...</p>
              </span>

              <span>
                <p>Entendendo Algoritimos</p>
                <p className="text-sm text-muted-foreground">Aditya Bhargava</p>
              </span>

              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur, incidunt excepturi?...
              </p>
            </main>
          </Card>
        </section>

        <section className="grid gap-4">
          <p>Avaliações mais recentes</p>

          <Card className="p-4">
            <header className="flex justify-between mb-8">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <span>
                  <p>Jaxson Dias</p>
                  <p className="text-sm font-light">Hoje</p>
                </span>
              </div>

              <p>estrelinhas...</p>
            </header>

            <main className="flex gap-4">
              <figure className="h-36 min-w-24 bg-white rounded"></figure>

              <div className="flex flex-col justify-between">
                <span>
                  <p>Entendendo Algoritimos</p>
                  <p className="text-sm text-muted-foreground">
                    Aditya Bhargava
                  </p>
                </span>

                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur, incidunt excepturi? Consectetur saepe, magni debitis
                  explicabo porro numquam eaque ut. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit...
                </p>
              </div>
            </main>
          </Card>
        </section>

        <p>Home &copy; BookWise - 2024</p>
      </main>

      <aside className="col-span-1 grid gap-8">
        <h2 className="text-2xl flex items-center gap-2">
          <SearchCheck /> Populares
        </h2>

        <section className="grid gap-4">
          <span className="flex justify-between items-end">
            <p>Livros populares</p>
            <p className="text-sm flex gap-2">
              Ver todos <ChevronRight size={20} />
            </p>
          </span>

          <Card className="p-4 flex gap-4">
            <figure className="bg-white h-24 w-16 rounded"></figure>

            <main className="flex flex-col justify-between">
              <span>
                <p>A revolução dos bichos</p>
                <p className="text-sm text-muted-foreground">George Orwell</p>
              </span>

              <p>estrelinhas...</p>
            </main>
          </Card>
        </section>
      </aside>
    </div>
  );
}
