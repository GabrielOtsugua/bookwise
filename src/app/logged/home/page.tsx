import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-cols-9 gap-16">
      <main className="col-span-6">
        <header className="mb-12">
          <h2 className="text-2xl">Início</h2>
        </header>

        <section className="grid gap-8">
          <section className="grid gap-4">
            <p>Sua ultima leitura</p>

            <Card className="p-4 grid grid-cols-8 gap-4">
              <figure className="col-span-1 bg-white min-h-40"></figure>

              <main className="col-span-7">
                <span className="flex justify-between">
                  <p>Há 2 dias</p>
                  <p className="mb-4">estrelinhas...</p>
                </span>

                <p>Entendendo Algoritimos</p>
                <p>Aditya Bhargava</p>

                <p className="mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur, incidunt excepturi? Consectetur saepe, magni debitis
                  explicabo porro numquam eaque ut.
                </p>
              </main>
            </Card>
          </section>

          <section className="grid gap-4">
            <p>Avaliações mais recentes</p>

            <Card className="p-4">
              <header className="flex justify-between mb-8">
                <div className="flex items-center gap-2">
                  <figure>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </figure>

                  <span>
                    <p>Jaxson Dias</p>
                    <p>Hoje</p>
                  </span>
                </div>

                <p>estrelinhas...</p>
              </header>

              <main className=" grid grid-cols-8 gap-4">
                <figure className="col-span-1 bg-white min-h-40"></figure>

                <div className="col-span-7">
                  <p>Entendendo Algoritimos</p>
                  <p>Aditya Bhargava</p>

                  <p className="mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur, incidunt excepturi? Consectetur saepe, magni
                    debitis explicabo porro numquam eaque ut.
                  </p>
                </div>
              </main>
            </Card>

            <Card className="p-4">
              <header className="flex justify-between mb-8">
                <div className="flex items-center gap-2">
                  <figure>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </figure>

                  <span>
                    <p>Jaxson Dias</p>
                    <p>Hoje</p>
                  </span>
                </div>

                <p>estrelinhas...</p>
              </header>

              <main className=" grid grid-cols-8 gap-4">
                <figure className="col-span-1 bg-white min-h-40"></figure>

                <div className="col-span-7">
                  <p>Entendendo Algoritimos</p>
                  <p>Aditya Bhargava</p>

                  <p className="mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur, incidunt excepturi? Consectetur saepe, magni
                    debitis explicabo porro numquam eaque ut.
                  </p>
                </div>
              </main>
            </Card>

            <Card className="p-4">
              <header className="flex justify-between mb-8">
                <div className="flex items-center gap-2">
                  <figure>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </figure>

                  <span>
                    <p>Jaxson Dias</p>
                    <p>Hoje</p>
                  </span>
                </div>

                <p>estrelinhas...</p>
              </header>

              <main className=" grid grid-cols-8 gap-4">
                <figure className="col-span-1 bg-white min-h-40"></figure>

                <div className="col-span-7">
                  <p>Entendendo Algoritimos</p>
                  <p>Aditya Bhargava</p>

                  <p className="mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur, incidunt excepturi? Consectetur saepe, magni
                    debitis explicabo porro numquam eaque ut.
                  </p>
                </div>
              </main>
            </Card>

            <p>Home &copy; BookWise - 2024</p>
          </section>
        </section>
      </main>

      <aside className="col-span-3">
        <header className="mb-12">
          <h2 className="text-2xl">Populares</h2>
        </header>

        <section className="grid gap-4">
          <span className="flex justify-between">
            <p>Livros populares</p>
            <p>Ver todos</p>
          </span>

          <Card className="p-4 grid grid-cols-10 gap-4">
            <figure className="bg-white h-28 col-span-3"></figure>

            <main className="flex flex-col justify-between col-span-7">
              <span>
                <p>A revolução dos bichos</p>
                <p>George Orwell</p>
              </span>

              <p>estrelinhas...</p>
            </main>
          </Card>

          <Card className="p-4 grid grid-cols-10 gap-4">
            <figure className="bg-white h-28 col-span-3"></figure>

            <main className="flex flex-col justify-between col-span-7">
              <span>
                <p>A revolução dos bichos</p>
                <p>George Orwell</p>
              </span>

              <p>estrelinhas...</p>
            </main>
          </Card>
        </section>
      </aside>
    </div>
  );
}
