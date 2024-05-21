import { BookOpen, Bookmark, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function ExplorerSheet() {
  return (
    <SheetContent className="p-8 w-full md:min-w-[550px] overflow-auto">
      <Card className="p-4 bg-primary-foreground">
        <div className="flex gap-4">
          <figure className="h-40 min-w-28 md:h-52 md:min-w-40 rounded bg-white"></figure>

          <div className="flex flex-col justify-between">
            <span>
              <p className="text-sm md:text-base">
                14 Hábitos de desenvolvedores altamente produtivos
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Zeno Rocha
              </p>
            </span>

            <span>
              <p className="text-primary">estrelinhas...</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                3 avaliações
              </p>
            </span>
          </div>
        </div>

        <Separator className="my-4" />

        <footer className="grid grid-cols-2">
          <div className="flex items-center gap-2">
            <Bookmark className="text-primary" />
            <span className="text-xs md:text-sm">
              <p className="text-muted-foreground">Categoria</p>
              <p>Computação</p>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <BookOpen className="text-primary" />
            <span className="text-xs md:text-sm">
              <p className="text-muted-foreground">Páginas</p>
              <p>160</p>
            </span>
          </div>
        </footer>
      </Card>

      <section className="grid gap-4 mt-8">
        <span className="flex items-center justify-between">
          <p>Avaliações</p>
          <p className="text-primary">Avaliar</p>
        </span>

        {/* CARD DA PROPRIA AVALIAÇÃO */}
        <Card className="p-4">
          <header className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <p className="text-sm md:text-base">Cristofer Nolan</p>
            </span>

            <p className="text-primary">estrelinhas...</p>
          </header>

          <Textarea placeholder="Digite sua avaliação aqui" className="my-4" />

          <span className="flex justify-end">
            <Button variant={"secondary"}>
              <Check size={20} />
            </Button>
          </span>
        </Card>

        {/* CARDS DE AVALIAÇÃO */}
        <Card className="p-4">
          <header className="flex justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <span>
                <p className="text-sm md:text-base">Cristofer Nolan</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Há 2 dias
                </p>
              </span>
            </div>

            <p className="text-primary">estrelinhas...</p>
          </header>

          <main className="mt-4 text-sm font-light leading-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias quibusdam sunt corrupti, debitis porro vel consectetur?
              Omnis, dolorum? Ex sed consequatur soluta perferendis natus eum
              illo nostrum doloribus ipsam ut.
            </p>
          </main>
        </Card>
      </section>
    </SheetContent>
  );
}
