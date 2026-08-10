import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  title: "AMA Control Center",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AuthorityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/nullify");
  }

  return (
    <div className="flex h-dvh bg-[#F8FAFC] overflow-hidden text-slate-800 font-sans w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-full">
        {/* Main scrollable body */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-6 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
