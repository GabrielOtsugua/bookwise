import ProfileAside from "@/components/ProfileAside";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";

export default function Profile() {
  return (
    <div className="grid grid-cols-3 items-start gap-8">
      <main className="col-span-3 lg:col-span-2 grid gap-8">
        <h2 className="text-2xl flex items-center gap-2 font-bold">
          <User className="text-primary" /> Perfil
        </h2>

        <div className="lg:hidden">
          <ProfileAside />
        </div>

        <span className="relative md:w-96">
          <Input placeholder="Buscar livro lido" />
          <Search
            size={18}
            className="absolute top-2.5 right-3 text-muted-foreground"
          />
        </span>

        <section className="grid gap-4">
          <p>Há 2 dias</p>
          <Card className="p-4">
            <header className="flex gap-4">
              <figure className="h-40 min-w-28 bg-white rounded"></figure>

              <div className="flex flex-col justify-between">
                <span>
                  <p>Entendendo algoritimos</p>
                  <p className="text-sm text-muted-foreground">
                    Aditya Bahrgava
                  </p>
                </span>

                <p className="text-primary">estrelinhas...</p>
              </div>
            </header>

            <p className="mt-6 text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              consequatur repellat earum sunt possimus aliquam, hic animi quia
              iste laudantium ipsum porro dolor suscipit, explicabo quisquam non
              ab dicta illum!
            </p>

            <p className="text-sm leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              excepturi saepe suscipit, nesciunt iusto quaerat molestias itaque
              earum nemo ea qui numquam eos fuga tenetur quo, possimus hic
              assumenda ipsam?
            </p>
          </Card>
        </section>
      </main>

      <aside className="col-span-1 hidden lg:block">
        <ProfileAside />
      </aside>
    </div>
  );
}
