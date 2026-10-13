import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedido confirmado",
  robots: { index: false, follow: false, nocache: true },
};

export default function ConfirmationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
