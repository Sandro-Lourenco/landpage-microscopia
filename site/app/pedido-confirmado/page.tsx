"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PrototypeHeader } from "../prototype-header";
import { getOrder, PrototypeOrder } from "../prototype-store";

export default function ConfirmationPage() {
  const [order, setOrder] = useState<PrototypeOrder | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setOrder(getOrder()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="prototype-page confirmation-page">
      <PrototypeHeader compact />
      <section className="prototype-shell confirmation-card">
        <div className="success-mark" aria-hidden="true">✓</div>
        <span>Pagamento simulado aprovado</span>
        <h1>Seu curso já está disponível</h1>
        <p>
          {order
            ? `${order.studentName.split(" ")[0]}, a demonstração criou seu acesso com sucesso.`
            : "A demonstração concluiu a inscrição com sucesso."}
        </p>
        <div className="confirmation-details">
          <div><small>Pedido</small><strong>{order?.id ?? "DEMO"}</strong></div>
          <div><small>Acesso</small><strong>Vitalício</strong></div>
          <div><small>Status</small><strong>Aprovado</strong></div>
        </div>
        <Link className="prototype-primary-action" href="/area-do-aluno">Entrar na área do aluno</Link>
        <Link className="prototype-secondary-link" href="/">Voltar à página do curso</Link>
      </section>
    </main>
  );
}
