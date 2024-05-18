import LayoutAside from "@/components/LayoutAside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-5 gap-8 p-4 w-[70%] m-auto">
      <LayoutAside />

      <main className="col-span-4 mt-8">{children}</main>
    </div>
  );
}
