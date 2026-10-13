import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula",
  robots: { index: false, follow: false, nocache: true },
};

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
