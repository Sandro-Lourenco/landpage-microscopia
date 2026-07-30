"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  faqs,
  learningOutcomes,
  modules,
  siteConfig,
} from "./course-data";

type Consent = "accepted" | "rejected" | null;

function preserveUtm(url: string) {
  if (!url || typeof window === "undefined") return url;
  const target = new URL(url);
  const source = new URLSearchParams(window.location.search);
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(
    (key) => {
      const value = source.get(key);
      if (value) target.searchParams.set(key, value);
    },
  );
  return target.toString();
}

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="ICIBINA">
      <Image
        className="brand-logo"
        src="/logo-icibina.png"
        alt=""
        width={1024}
        height={1024}
        unoptimized
      />
      <strong>ICIBINA</strong>
    </div>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}

export default function Home() {
  const [consent, setConsent] = useState<Consent>(null);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("microscopia-cookie-consent");
    if (saved !== "accepted" && saved !== "rejected") return;
    const timer = window.setTimeout(() => setConsent(saved), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const chooseConsent = (choice: Exclude<Consent, null>) => {
    window.localStorage.setItem("microscopia-cookie-consent", choice);
    setConsent(choice);
    setShowPreferences(false);
  };

  const handleCta = (position: string) => {
    window.dispatchEvent(
      new CustomEvent("course_cta_click", { detail: { position } }),
    );
    if (!siteConfig.checkoutUrl) {
      window.location.href = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(
        "Informações sobre o curso de Microscopia",
      )}`;
      return;
    }
    window.location.href = preserveUtm(siteConfig.checkoutUrl);
  };

  return (
    <main>
      <header className="site-header">
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <div className="shell header-inner">
          <a href="#inicio" aria-label="Voltar ao início">
            <BrandMark />
          </a>
          <div className="header-meta">
            <span>Curso online</span>
            <button className="header-cta" onClick={() => handleCta("header")}>
              Inscrições <ArrowIcon />
            </button>
          </div>
        </div>
      </header>

      <div id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Formação em microscopia aplicada</p>
              <h1>
                Veja além.
                <br />
                <em>Observe com método.</em>
              </h1>
              <p className="hero-lead">
                Domine os fundamentos da microscopia de campo claro e escuro,
                do preparo da lâmina à interpretação organizada das imagens.
              </p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => handleCta("hero")}>
                  Quero me inscrever <ArrowIcon />
                </button>
                <a className="text-link" href="#programa">
                  Conhecer o programa <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-trust">
                <span><CheckIcon /> Fundamentos ópticos</span>
                <span><CheckIcon /> Campo claro e escuro</span>
                <span><CheckIcon /> Prática organizada</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Representação abstrata de uma observação microscópica">
              <div className="visual-label visual-label-top">
                <span>Campo claro</span>
                <strong>01</strong>
              </div>
              <div className="microscope-field">
                <div className="cell cell-a" />
                <div className="cell cell-b" />
                <div className="cell cell-c" />
                <div className="cell cell-d" />
                <div className="reticle horizontal" />
                <div className="reticle vertical" />
              </div>
              <div className="visual-label visual-label-bottom">
                <strong>100×</strong>
                <span>ampliação ilustrativa</span>
              </div>
            </div>
          </div>
          <div className="shell hero-footnote">
            <span>ICIBINA</span>
            <p>Ciências biomédicas naturais + visão integral da saúde</p>
            <span>MENCI</span>
          </div>
        </section>

        <section className="intro section" id="sobre">
          <div className="shell intro-grid">
            <div>
              <p className="section-number">01 — A formação</p>
              <h2>Do primeiro ajuste à <em>observação com método.</em></h2>
            </div>
            <div className="intro-copy">
              <p className="large-copy">
                Descubra os fundamentos da microscopia de campo claro e escuro
                em uma formação do ICIBINA em parceria com a MENCI.
              </p>
              <p>
                Desenvolvido para profissionais e estudantes da área da saúde,
                o curso conecta fundamentos ópticos, preparo de amostras,
                identificação de estruturas, boas práticas laboratoriais e
                resolução de problemas comuns da rotina microscópica.
              </p>
              <div className="quote-card">
                <span className="quote-mark">“</span>
                <p>
                  Aprenda a observar com mais clareza, interpretar com mais
                  critério e aplicar cada técnica com segurança em sua prática.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="outcomes section" id="aprendizado">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-number light">02 — O que você desenvolve</p>
                <h2>Clareza em cada <em>etapa da observação.</em></h2>
              </div>
              <p>
                Competências práticas construídas em uma progressão que começa
                nos princípios e chega à discussão de casos.
              </p>
            </div>
            <div className="outcome-grid">
              {learningOutcomes.map((item) => (
                <article key={item.number} className="outcome-card">
                  <span>{item.number}</span>
                  <div className={`outcome-icon icon-${item.number}`} aria-hidden="true"><i /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="comparison section">
          <div className="shell">
            <p className="section-number">03 — Duas técnicas, novos contrastes</p>
            <div className="comparison-grid">
              <article className="field-card bright-field">
                <div className="field-copy">
                  <span>Campo claro</span>
                  <h2>Luz que <em>revela.</em></h2>
                  <p>
                    A amostra aparece contrastada sobre um fundo iluminado.
                    Você aprende os ajustes que influenciam nitidez, foco e leitura.
                  </p>
                </div>
                <div className="field-art" aria-hidden="true">
                  <i /><i /><i />
                </div>
              </article>
              <article className="field-card dark-field">
                <div className="field-copy">
                  <span>Campo escuro</span>
                  <h2>Contraste que <em>destaca.</em></h2>
                  <p>
                    Estruturas iluminadas se destacam em um fundo escuro.
                    O curso apresenta configuração, observação e limites da técnica.
                  </p>
                </div>
                <div className="field-art" aria-hidden="true">
                  <i /><i /><i /><i />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="program section" id="programa">
          <div className="shell program-grid">
            <div className="program-sticky">
              <p className="section-number">04 — Programa completo</p>
              <h2>Uma jornada em <em>10 módulos.</em></h2>
              <p>
                Do primeiro ajuste à revisão integrada da prática, cada módulo
                prepara o terreno para o seguinte.
              </p>
              <button className="button button-secondary" onClick={() => handleCta("program")}>
                Quero participar <ArrowIcon />
              </button>
            </div>
            <div className="module-list">
              {modules.map((module) => (
                <details key={module.number}>
                  <summary>
                    <span>{module.number}</span>
                    <strong>{module.title}</strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{module.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="method section">
          <div className="shell">
            <div className="section-heading method-heading">
              <div>
                <p className="section-number">05 — Método de aprendizagem</p>
                <h2>Entenda. Ajuste. <em>Observe.</em></h2>
              </div>
              <p>
                A formação aproxima fundamentos e prática sem transformar
                a observação em promessa diagnóstica.
              </p>
            </div>
            <div className="method-track">
              {[
                ["01", "Fundamento", "Compreenda o princípio óptico antes de ajustar."],
                ["02", "Demonstração", "Veja a técnica aplicada em uma sequência clara."],
                ["03", "Observação", "Reconheça estruturas dentro do escopo apresentado."],
                ["04", "Discussão", "Conecte o aprendizado a casos selecionados."],
              ].map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="preview-frame">
              <div className="preview-copy">
                <p className="eyebrow"><span /> Experiência de aprendizagem</p>
                <h3>Conhecimento técnico com uma visão integrada do processo.</h3>
                <p>
                  Fundamentos, demonstrações e práticas organizadas para
                  transformar conceitos de microscopia em observações mais
                  seguras e criteriosas.
                </p>
              </div>
              <div className="preview-visual" aria-hidden="true">
                <div className="lens">
                  <i /><i /><i />
                </div>
                <span>Campo claro • Campo escuro</span>
              </div>
            </div>
          </div>
        </section>

        <section className="institutions section" id="instituicoes">
          <div className="shell institutions-grid">
            <div className="institution-visual">
              <Image
                src="/secao-sobre.png"
                alt="Profissionais responsáveis pela formação em microscopia"
                width={1024}
                height={1024}
                unoptimized
              />
              <p>Ciência, prática e cuidado integral em diálogo.</p>
            </div>
            <div className="institution-copy">
              <p className="section-number light">06 — Quem desenvolveu</p>
              <h2>ICIBINA <span>&</span> MENCI</h2>
              <p className="large-copy">
                Uma parceria dedicada a aproximar o rigor das ciências biomédicas
                de uma leitura integral da saúde.
              </p>
              <p>
                O Instituto de Ciências Biomédicas Naturais e a Medicina Natural
                do Corpo Inteiro reúnem seus conhecimentos nesta formação.
              </p>
              <div className="pending-row">
                <span>Desenvolvimento do curso</span>
                <strong>ICIBINA</strong>
              </div>
              <div className="pending-row">
                <span>Parceria técnica e científica</span>
                <strong>MENCI</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="offer section" id="oferta">
          <div className="shell">
            <div className="offer-card">
              <div className="offer-copy">
                <p className="section-number">07 — Próximo passo</p>
                <h2>Prepare-se para observar com <em>mais método.</em></h2>
                <p>
                  Fale com a equipe do ICIBINA para receber informações sobre
                  inscrições, conteúdo programático e acesso ao curso.
                </p>
              </div>
              <div className="offer-panel">
                <span className="offer-status">
                  <i /> {siteConfig.checkoutUrl ? "Inscrições abertas" : "Inscrições e informações"}
                </span>
                <h3>{siteConfig.courseName}</h3>
                <ul>
                  <li><CheckIcon /> 10 módulos progressivos</li>
                  <li><CheckIcon /> Campo claro e campo escuro</li>
                  <li><CheckIcon /> Biossegurança e controle de qualidade</li>
                  <li>
                    <CheckIcon />
                    {siteConfig.checkoutUrl
                      ? "Pagamento seguro processado pela Hotmart"
                      : "Atendimento direto pelo ICIBINA"}
                  </li>
                </ul>
                <button className="button button-primary full" onClick={() => handleCta("offer")}>
                  {siteConfig.checkoutUrl ? "Quero me inscrever" : "Falar com a equipe"} <ArrowIcon />
                </button>
                <small>
                  {siteConfig.checkoutUrl
                    ? "Você será direcionado ao checkout seguro da Hotmart."
                    : "Entre em contato para saber mais sobre a próxima turma."}
                </small>
              </div>
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="shell faq-grid">
            <div>
              <p className="section-number">08 — Perguntas frequentes</p>
              <h2>Antes de <em>começar.</em></h2>
              <p>
                Informações essenciais para você conhecer a proposta da formação.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <strong>{faq.question}</strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-top">
          <BrandMark />
          <div className="footer-info">
            <p>
              Conteúdo educacional. Esta formação não substitui exames laboratoriais,
              diagnóstico clínico ou habilitação profissional.
            </p>
            <address className="footer-contacts">
              <a
                href="https://www.facebook.com/share/v/19v8dFA1XR/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">f</span>
                Facebook
              </a>
              <a href="mailto:icibina@yahoo.com">
                <span className="contact-icon" aria-hidden="true">@</span>
                icibina@yahoo.com
              </a>
              <a href="tel:+5534992797595">
                <span className="contact-icon" aria-hidden="true">☎</span>
                (34) 99279-7595
              </a>
              <span>
                <span className="contact-icon" aria-hidden="true">⌖</span>
                Rua Manuel Pires de Miranda, 841 — Nova Ponte, MG
              </span>
            </address>
          </div>
          <div className="footer-side">
            <div className="footer-partner">
              <Image
                src="/logo-menci.png"
                alt="MENCI"
                width={1024}
                height={1024}
                unoptimized
              />
              <span>Parceiros</span>
            </div>
            <button className="footer-link" onClick={() => setShowPreferences(true)}>
              Preferências de cookies
            </button>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} ICIBINA & MENCI</span>
          <span>Microscopia de campo claro e escuro</span>
        </div>
      </footer>

      {consent === null && (
        <aside className="cookie-banner" aria-label="Preferências de cookies">
          <div>
            <strong>Sua privacidade importa</strong>
            <p>
              Este site usa armazenamento local apenas para lembrar sua escolha
              de privacidade.
            </p>
          </div>
          <div className="cookie-actions">
            <button onClick={() => chooseConsent("rejected")}>Rejeitar opcionais</button>
            <button onClick={() => setShowPreferences(true)}>Gerenciar</button>
            <button className="accept" onClick={() => chooseConsent("accepted")}>Aceitar</button>
          </div>
        </aside>
      )}

      {showPreferences && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowPreferences(false)}>
          <section
            className="preference-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" aria-label="Fechar" onClick={() => setShowPreferences(false)}>×</button>
            <p className="section-number">Privacidade</p>
            <h2 id="cookie-title">Preferências de cookies</h2>
            <div className="cookie-category">
              <div>
                <strong>Estritamente necessários</strong>
                <p>Usados para lembrar sua escolha de privacidade.</p>
              </div>
              <span>Sempre ativos</span>
            </div>
            <div className="cookie-category">
              <div>
                <strong>Analytics e marketing</strong>
                <p>Recursos de analytics e marketing permanecem desativados.</p>
              </div>
              <span>Inativos</span>
            </div>
            <div className="modal-actions">
              <button onClick={() => chooseConsent("rejected")}>Salvar somente necessários</button>
              <button className="accept" onClick={() => chooseConsent("accepted")}>Aceitar preferências</button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
