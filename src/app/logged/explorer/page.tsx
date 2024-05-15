import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Telescope } from "lucide-react";

export default function Explorer() {
  return (
    <div className="grid gap-8">
      <h2 className="text-2xl flex items-center gap-2">
        <Telescope /> Explorar
      </h2>

      <span className="relative w-96">
        <Input placeholder="Buscar livro ou autor" />
        <Search
          size={18}
          className="absolute top-2.5 right-3 text-muted-foreground"
        />
      </span>

      <div className="flex gap-4">
        <Button className="rounded-full">Tudo</Button>
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

      <section className="grid grid-cols-3 gap-4">
        <Card className="p-4 flex gap-4">
          <figure className="bg-white h-36 min-w-24 rounded"></figure>

          <main className="flex flex-col justify-between">
            <span>
              <p>A revolução dos bichos</p>
              <p className="text-sm text-muted-foreground">George Orwell</p>
            </span>

            <p>estrelinhas...</p>
          </main>
        </Card>
      </section>
    </div>
  );
}
