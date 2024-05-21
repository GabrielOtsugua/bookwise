import LayoutAside from "@/components/LayoutAside";
import MobileNav from "@/components/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="block lg:grid grid-cols-5 gap-8 p-4 2xl:w-[70%] m-auto">
      <LayoutAside />
      <MobileNav />

      <main className="col-span-4 my-8">{children}</main>
    </div>
  );
}
