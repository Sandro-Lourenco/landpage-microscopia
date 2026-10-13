"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { allPrototypeLessons, prototypeModules } from "../prototype-data";
import { PrototypeHeader } from "../prototype-header";
import { getOrder, getProgress, PrototypeOrder } from "../prototype-store";

export default function StudentAreaPage() {
  const [order, setOrder] = useState<PrototypeOrder | null>(null);
  const [progress, setProgress] = useState<string[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOrder(getOrder());
      setProgress(getProgress());
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const percentage = useMemo(
    () => Math.round((progress.length / allPrototypeLessons.length) * 100),
    [progress],
  );
  const nextLesson = allPrototypeLessons.find((lesson) => !progress.includes(lesson.id)) ?? allPrototypeLessons[0];

  if (!order) {
    return (
      <main className="prototype-page empty-access-page">
        <PrototypeHeader compact />
        <section className="prototype-shell empty-access">
          <span>Área de demonstração</span>
          <h1>Faça a inscrição simulada para liberar o curso</h1>
          <p>Nenhuma conta de aluno foi criada neste navegador.</p>
          <Link className="prototype-primary-action" href="/checkout">Abrir checkout de demonstração</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="student-page">
      <PrototypeHeader compact />
      <section className="student-hero">
        <div className="prototype-shell student-hero-grid">
          <div>
            <span>Área do aluno</span>
            <h1>Olá, {order.studentName.split(" ")[0]}</h1>
            <p>Continue de onde parou ou explore os módulos disponíveis.</p>
          </div>
          <div className="student-progress" aria-label={`${percentage}% do curso concluído`}>
            <strong>{percentage}%</strong>
            <span>do curso concluído</span>
          </div>
        </div>
      </section>

      <div className="prototype-shell student-layout">
        <section className="course-overview">
          <div className="course-cover" aria-hidden="true">
            <div className="course-cover-lens"><i /><i /><i /></div>
          </div>
          <div>
            <span>Seu curso</span>
            <h2>Microscopia de campo claro e escuro</h2>
            <p>Fundamentos, preparo de lâminas e prática organizada.</p>
            <Link className="prototype-primary-action compact-action" href={`/aula?lesson=${nextLesson.id}`}>
              {progress.length ? "Continuar estudando" : "Começar o curso"}
            </Link>
          </div>
        </section>

        <section className="module-section">
          <div className="student-section-heading">
            <div><span>Conteúdo</span><h2>Módulos do curso</h2></div>
            <p>{progress.length} de {allPrototypeLessons.length} aulas concluídas</p>
          </div>
          <div className="student-module-list">
            {prototypeModules.map((module, index) => {
              const completed = module.lessons.filter((lesson) => progress.includes(lesson.id)).length;
              return (
                <article key={module.id}>
                  <div className="module-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="module-copy">
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                    <span>{completed}/{module.lessons.length} aulas concluídas</span>
                  </div>
                  <Link href={`/aula?lesson=${module.lessons[0].id}`} aria-label={`Abrir ${module.title}`}>Abrir módulo</Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
