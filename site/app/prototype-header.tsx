"use client";

import Image from "next/image";
import Link from "next/link";

export function PrototypeHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`prototype-header${compact ? " compact" : ""}`}>
      <div className="prototype-shell prototype-header-inner">
        <Link className="prototype-brand" href="/" aria-label="Página inicial do curso">
          <Image src="/logo-icibina.png" alt="ICIBINA" width={48} height={48} unoptimized />
          <span><strong>ICIBINA</strong><small>Ambiente de demonstração</small></span>
        </Link>
        <nav aria-label="Navegação do protótipo">
          <Link href="/">Curso</Link>
          <Link href="/area-do-aluno">Área do aluno</Link>
        </nav>
      </div>
    </header>
  );
}
