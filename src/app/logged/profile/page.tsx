import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  BookOpenCheck,
  Bookmark,
  LibraryBig,
  Search,
  User,
  Users,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="grid grid-cols-3 items-start gap-4">
      <main className="col-span-2 grid gap-8">
        <h2 className="text-2xl flex items-center gap-2">
          <User /> Perfil
        </h2>

        <span className="relative">
          <Input placeholder="Buscar livro avaliado" />
          <Search
            size={18}
            className="absolute top-2.5 right-3 text-muted-foreground"
          />
        </span>

        <section className="grid gap-4">
          <p>Há 2 dias</p>
          <Card className="p-4">
            <header className="flex gap-4">
              <figure className="h-36 min-w-24 bg-white rounded"></figure>

              <div className="flex flex-col justify-between">
                <span>
                  <p>Entendendo algoritimos</p>
                  <p className="text-sm text-muted-foreground">
                    Aditya Bahrgava
                  </p>
                </span>

                <p>estrelinhas...</p>
              </div>
            </header>

            <p className="mt-6 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              consequatur repellat earum sunt possimus aliquam, hic animi quia
              iste laudantium ipsum porro dolor suscipit, explicabo quisquam non
              ab dicta illum!
            </p>

            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              excepturi saepe suscipit, nesciunt iusto quaerat molestias itaque
              earum nemo ea qui numquam eos fuga tenetur quo, possimus hic
              assumenda ipsam?
            </p>
          </Card>
        </section>
      </main>

      <aside className="col-span-1">
        <Card className="p-12 grid gap-8">
          <header className="flex flex-col items-center">
            <Avatar className="mb-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-lg">Cristofer Rosser</p>
            <p className="text-xs text-muted-foreground">Membro desde 2019</p>
          </header>

          <Separator />

          <div className="flex items-center gap-4">
            <BookOpenCheck size={20} />
            <span>
              <p>1050</p>
              <p className="text-sm text-muted-foreground">Páginas lidas</p>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <LibraryBig size={20} />
            <span>
              <p>10</p>
              <p className="text-sm text-muted-foreground">Livros avaliados</p>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Users size={20} />
            <span>
              <p>6</p>
              <p className="text-sm text-muted-foreground">Autores lidos</p>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Bookmark size={20} />
            <span>
              <p>Computação</p>
              <p className="text-sm text-muted-foreground">
                Categoria mais lida
              </p>
            </span>
          </div>
        </Card>
      </aside>
    </div>
  );
}
