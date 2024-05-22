"use client";

import ExplorerSheet from "@/components/ExplorerSheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, HomeIcon, SearchCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="lg:grid grid-cols-3 items-start gap-8">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="col-span-2 grid gap-8"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <HomeIcon className="text-primary" />
          Início
        </h2>

        <section className="grid gap-4">
          <span className="flex justify-between items-end">
            <p>Sua ultima leitura</p>
            <Link
              href={"/logged/profile"}
              className="text-sm flex gap-2 text-primary"
            >
              Ver todos <ChevronRight size={20} />
            </Link>
          </span>

          <Card className="flex gap-4 p-4">
            <figure className="bg-white h-40 min-w-28 rounded"></figure>

            <main className="flex flex-col justify-between">
              <span className="flex justify-between items-center">
                <p className="text-sm font-light">Há 2 dias</p>
                <p className="text-primary">estrelinhas...</p>
              </span>

              <span>
                <p>Entendendo Algoritimos</p>
                <p className="text-sm text-muted-foreground">Aditya Bhargava</p>
              </span>

              <p className="text-sm line-clamp-2 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sit omnis iure deserunt iste corporis, assumenda ut officiis
                ducimus delectus libero minus eaque provident inventore culpa,
                facilis, distinctio magni voluptatem!
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
                  <p className="text-sm font-light text-muted-foreground">
                    Hoje
                  </p>
                </span>
              </div>

              <p className="text-primary">estrelinhas...</p>
            </header>

            <main className="flex gap-4">
              <figure className="h-40 min-w-28 bg-white rounded"></figure>

              <div className="flex flex-col justify-between">
                <span>
                  <p>Entendendo Algoritimos</p>
                  <p className="text-sm text-muted-foreground">
                    Aditya Bhargava
                  </p>
                </span>

                <p className="text-sm line-clamp-3 leading-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque ut fugit eius minima suscipit facere temporibus maxime
                  praesentium quis excepturi consequatur assumenda voluptatum,
                  beatae ipsam omnis aliquam, expedita sint perferendis?
                </p>
              </div>
            </main>
          </Card>
        </section>

        <p className="hidden lg:block text-muted-foreground text-xs">
          Home &copy; BookWise - 2024
        </p>
      </motion.main>

      <motion.aside
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="col-span-1 grid gap-8"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2 mt-8 lg:mt-0">
          <SearchCheck className="text-primary" /> Populares
        </h2>

        <section className="grid gap-4">
          <span className="flex justify-between items-end">
            <p>Livros populares</p>
            <Link
              href={"/logged/explorer"}
              className="text-sm flex gap-2 text-primary"
            >
              Ver todos <ChevronRight size={20} />
            </Link>
          </span>

          <div className="flex md:grid lg:flex flex-col grid-cols-2 gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Card className="p-4 flex gap-4 cursor-pointer">
                  <figure className="bg-white h-24 min-w-16 rounded"></figure>

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
          </div>

          <p className="lg:hidden text-muted-foreground text-xs">
            Home &copy; BookWise - 2024
          </p>
        </section>
      </motion.aside>
    </div>
  );
}
