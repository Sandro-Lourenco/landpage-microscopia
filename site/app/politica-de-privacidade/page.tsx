import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o ICIBINA trata os dados informados no site do Curso de Microscopia.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="shell legal-shell">
        <Link className="legal-back" href="/">← Voltar ao site do curso</Link>
        <p className="section-number">Privacidade e proteção de dados</p>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: 26 de setembro de 2026.</p>

        <section>
          <h2>1. Quem trata os dados</h2>
          <p>
            O Instituto de Ciências Biomédicas Naturais (ICIBINA) é responsável
            pelas informações coletadas nesta página para comunicação sobre o
            Curso de Microscopia de Campo Claro e Escuro.
          </p>
        </section>

        <section>
          <h2>2. Dados coletados e finalidade</h2>
          <p>
            O formulário pode solicitar e-mail, primeiro nome e WhatsApp. Esses
            dados são usados para responder ao seu interesse, enviar informações
            sobre o curso, comunicar ofertas relacionadas e acompanhar a origem
            da inscrição por parâmetros de campanha.
          </p>
        </section>

        <section>
          <h2>3. Base legal e consentimento</h2>
          <p>
            O envio de comunicações depende do seu consentimento, manifestado ao
            marcar a opção correspondente no formulário. Você pode retirar esse
            consentimento a qualquer momento pelo link de cancelamento presente
            nos e-mails ou por contato direto com o ICIBINA.
          </p>
        </section>

        <section>
          <h2>4. Operadores e compartilhamento</h2>
          <p>
            O cadastro é processado pelo Hotmart Send, serviço usado para
            armazenar contatos e enviar comunicações. Se você decidir comprar, o
            pagamento e os dados necessários à transação são processados pela
            Hotmart em seu ambiente seguro. O ICIBINA não vende os seus dados.
          </p>
        </section>

        <section>
          <h2>5. Armazenamento e segurança</h2>
          <p>
            Os dados são mantidos pelo período necessário às finalidades acima,
            ao cumprimento de obrigações legais ou até a retirada do
            consentimento, observadas medidas razoáveis de segurança e os prazos
            aplicáveis.
          </p>
        </section>

        <section>
          <h2>6. Seus direitos</h2>
          <p>
            Você pode solicitar confirmação do tratamento, acesso, correção,
            exclusão, portabilidade quando aplicável, informações sobre
            compartilhamento e revogação do consentimento, conforme a Lei Geral
            de Proteção de Dados.
          </p>
        </section>

        <section>
          <h2>7. Contato</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas, escreva para{" "}
            <a href="mailto:icibina@yahoo.com">icibina@yahoo.com</a> ou ligue
            para <a href="tel:+5534992797595">(34) 99279-7595</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
