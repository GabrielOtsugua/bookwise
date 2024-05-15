import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <main className="col-span-2 grid gap-8">
        <h2 className="text-2xl">Perfil</h2>

        <Input placeholder="Buscar livro avaliado" />

        <section className="grid gap-4">
          <p>Há 2 dias</p>
          <Card className="p-4">
            <header className="flex gap-4">
              <figure className="h-36 min-w-24 bg-white rounded"></figure>

              <div className="flex flex-col justify-between">
                <span>
                  <p>Entendendo algoritimos</p>
                  <p className="text-sm">Aditya Bahrgava</p>
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

          <p>Há 2 dias</p>
          <Card className="p-4">
            <header className="flex gap-4">
              <figure className="h-36 min-w-24 bg-white rounded"></figure>

              <div className="flex flex-col justify-between">
                <span>
                  <p>Entendendo algoritimos</p>
                  <p className="text-sm">Aditya Bahrgava</p>
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
            <p className="text-xs">Membro desde 2019</p>
          </header>

          <Separator />

          <div className="flex items-center gap-4">
            <figure className="w-10 h-10 bg-white"></figure>
            <span>
              <p>10</p>
              <p className="text-sm">Livros avaliados</p>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <figure className="w-10 h-10 bg-white"></figure>
            <span>
              <p>10</p>
              <p className="text-sm">Livros avaliados</p>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <figure className="w-10 h-10 bg-white"></figure>
            <span>
              <p>10</p>
              <p className="text-sm">Livros avaliados</p>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <figure className="w-10 h-10 bg-white"></figure>
            <span>
              <p>10</p>
              <p className="text-sm">Livros avaliados</p>
            </span>
          </div>
        </Card>
      </aside>
    </div>
  );
}
