"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { allPrototypeLessons, prototypeModules } from "../prototype-data";
import { getOrder, getProgress, toggleLessonProgress } from "../prototype-store";

function LessonContent() {
  const searchParams = useSearchParams();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [progress, setProgress] = useState<string[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHasAccess(Boolean(getOrder()));
      setProgress(getProgress());
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const lessonId = searchParams.get("lesson");
  const lesson = allPrototypeLessons.find((item) => item.id === lessonId) ?? allPrototypeLessons[0];
  const currentIndex = allPrototypeLessons.findIndex((item) => item.id === lesson.id);
  const nextLesson = allPrototypeLessons[currentIndex + 1];
  const isComplete = progress.includes(lesson.id);
  const totalMinutes = useMemo(() => lesson.duration, [lesson.duration]);

  if (hasAccess === false) {
    return <main className="prototype-page empty-access-page"><section className="prototype-shell empty-access"><h1>Acesso não liberado</h1><p>Conclua o checkout de demonstração para visualizar esta aula.</p><Link className="prototype-primary-action" href="/checkout">Ir para o checkout</Link></section></main>;
  }

  return (
    <main className="lesson-page">
      <aside className="lesson-sidebar">
        <Link className="lesson-brand" href="/area-do-aluno">ICIBINA <span>Área do aluno</span></Link>
        <nav aria-label="Aulas do curso">
          {prototypeModules.map((module) => (
            <section key={module.id}>
              <h2>{module.title}</h2>
              {module.lessons.map((item) => (
                <Link key={item.id} className={`${item.id === lesson.id ? "active" : ""}${progress.includes(item.id) ? " complete" : ""}`} href={`/aula?lesson=${item.id}`}>
                  <span>{progress.includes(item.id) ? "✓" : ""}</span>{item.title}<small>{item.duration}</small>
                </Link>
              ))}
            </section>
          ))}
        </nav>
      </aside>

      <section className="lesson-content">
        <header className="lesson-topbar">
          <Link href="/area-do-aluno">Voltar aos módulos</Link>
          <span>Demonstração sem vídeo real</span>
        </header>
        <div className="lesson-stage">
          <div className="video-placeholder" role="img" aria-label="Espaço reservado para a aula gravada">
            <div className="play-control" aria-hidden="true">▶</div>
            <span>Vídeo da aula</span>
            <small>O arquivo real será conectado na fase de homologação</small>
          </div>
          <article className="lesson-description">
            <div><span>{lesson.moduleTitle}</span><h1>{lesson.title}</h1><p>Duração aproximada: {totalMinutes}</p></div>
            <button className={isComplete ? "complete-button checked" : "complete-button"} onClick={() => setProgress(toggleLessonProgress(lesson.id))}>
              {isComplete ? "Aula concluída" : "Marcar como concluída"}
            </button>
          </article>
          <div className="lesson-materials">
            <div><span>Material complementar</span><h2>Resumo e roteiro de prática</h2><p>Arquivo demonstrativo que poderá ser substituído pelo PDF oficial.</p></div>
            <button type="button" disabled>Download na versão final</button>
          </div>
          {nextLesson && <Link className="next-lesson" href={`/aula?lesson=${nextLesson.id}`}><span>Próxima aula</span><strong>{nextLesson.title}</strong></Link>}
        </div>
      </section>
    </main>
  );
}

export default function LessonPage() {
  return (
    <Suspense fallback={<main className="prototype-page empty-access-page"><section className="prototype-shell empty-access"><p>Carregando aula...</p></section></main>}>
      <LessonContent />
    </Suspense>
  );
}
