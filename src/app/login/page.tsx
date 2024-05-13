import { Card } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="grid grid-cols-5 p-4 h-screen">
      <Card className="col-span-2 flex justify-center items-center bg-indigo-500">
        <h1 className="text-3xl font-bold">BookWise</h1>
      </Card>
      <div className="col-span-3 flex justify-center items-center">
        <main className="w-[30%]">
          <h3 className="text-xl">Boas vindas!</h3>
          <p className="mb-8">Faça seu login ou acesse como visitante.</p>

          <div className="flex flex-col gap-4">
            <Card className="p-4">
              <p>Entrar com o Google</p>
            </Card>
            <Card className="p-4">
              <p>Entrar com o GitHub</p>
            </Card>
            <Card className="p-4">
              <p>Acessar como visitante</p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
