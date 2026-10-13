import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do aluno",
  robots: { index: false, follow: false, nocache: true },
};

export default function StudentAreaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
