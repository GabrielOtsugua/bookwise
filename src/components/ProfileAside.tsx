import { BookOpenCheck, LibraryBig, Users, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

export default function ProfileAside() {
  return (
    <Card className="p-12 grid gap-8">
      <header className="flex flex-col items-center">
        <Avatar className="mb-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <p className="text-lg">Cristofer Rosser</p>
        <p className="text-xs text-muted-foreground">Membro desde 2019</p>
      </header>

      <Separator className="bg-primary" />

      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
        <div className="flex items-center gap-4">
          <BookOpenCheck size={20} className="" />
          <span>
            <p>1050</p>
            <p className="text-sm text-muted-foreground">Páginas lidas</p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <LibraryBig size={20} className="" />
          <span>
            <p>10</p>
            <p className="text-sm text-muted-foreground">Livros avaliados</p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Users size={20} className="" />
          <span>
            <p>6</p>
            <p className="text-sm text-muted-foreground">Autores lidos</p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Bookmark size={20} className="" />
          <span>
            <p>Computação</p>
            <p className="text-sm text-muted-foreground">Categoria mais lida</p>
          </span>
        </div>
      </div>
    </Card>
  );
}
