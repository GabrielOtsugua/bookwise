import ExplorerSheet from "@/components/ExplorerSheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Search, Telescope } from "lucide-react";

export default function Explorer() {
  return (
    <div className="grid gap-8">
      <h2 className="text-2xl flex items-center gap-2 font-bold">
        <Telescope className="text-primary" /> Explorar
      </h2>

      <span className="relative md:w-96 -mb-4">
        <Input placeholder="Buscar livro ou autor" />
        <Search
          size={18}
          className="absolute top-2.5 right-3 text-muted-foreground"
        />
      </span>

      <div className="flex gap-4 overflow-auto">
        <Button variant={"secondary"} className="rounded-full">
          Tudo
        </Button>
        <Button variant={"outline"} className="rounded-full">
          Computação
        </Button>
        <Button variant={"outline"} className="rounded-full">
          Educação
        </Button>
        <Button variant={"outline"} className="rounded-full">
          Fantasia
        </Button>
        <Button variant={"outline"} className="rounded-full">
          Ficção cientifica
        </Button>
        <Button variant={"outline"} className="rounded-full">
          Horror
        </Button>
        <Button variant={"outline"} className="rounded-full">
          HQs
        </Button>
        <Button variant={"outline"} className="rounded-full">
          Suspense
        </Button>
      </div>

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Card className="p-4 flex gap-4 cursor-pointer">
              <figure className="bg-white h-40 min-w-28 rounded"></figure>

              <main className="flex flex-col justify-between">
                <span>
                  <p className="line-clamp-2">A revolução dos bichos</p>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    George Orwell
                  </p>
                </span>

                <p className="text-primary">estrelinhas...</p>
              </main>
            </Card>
          </SheetTrigger>

          <ExplorerSheet />
        </Sheet>
      </section>
    </div>
  );
}
