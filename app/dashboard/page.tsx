import type { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = { title: "Dashboard" };

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <p className="text-gray-600">
        Placeholder page. The data views are added in later chapters of the course.
      </p>
    </main>
  );
}
