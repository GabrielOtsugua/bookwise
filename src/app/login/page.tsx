"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Library, User, UserCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-5 p-4 h-screen">
      <Card className="col-span-2 flex flex-col justify-between bg-primary-foreground p-4">
        <h1 className="text-primary flex items-center gap-1 text-lg">
          <Library size={20} /> BookWise
        </h1>

        <em>"A Sabedoria dos Livros ao Seu Alcance."</em>
      </Card>

      <div className="col-span-3 flex justify-center items-center">
        <main className="w-[30%]">
          <h3 className="text-xl">Boas vindas!</h3>
          <p className="mb-8 text-sm text-muted-foreground">
            Faça seu login ou acesse como visitante.
          </p>

          <div className="flex flex-col gap-4">
            <Button variant={"outline"} className="p-4">
              <UserCheck className="mr-2 w-5 h-5" />
              Entrar com o Google
            </Button>

            <Button
              variant={"outline"}
              className="p-4"
              onClick={() => router.push("/logged/home")}
            >
              <User className="mr-2 w-5 h-5" />
              Acessar como visitante
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
