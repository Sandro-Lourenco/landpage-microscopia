"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { PaymentMethod, saveOrder } from "../prototype-store";
import { PrototypeHeader } from "../prototype-header";

type FormState = {
  name: string;
  email: string;
  document: string;
  phone: string;
  method: PaymentMethod;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
  acceptedTerms: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  document: "",
  phone: "",
  method: "pix",
  cardNumber: "",
  cardName: "",
  expiry: "",
  cvv: "",
  acceptedTerms: false,
};

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (form.name.trim().split(/\s+/).length < 2) next.name = "Informe nome e sobrenome.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Informe um e-mail válido.";
    if (form.document.replace(/\D/g, "").length < 11) next.document = "Informe um CPF válido para a demonstração.";
    if (form.phone.replace(/\D/g, "").length < 10) next.phone = "Informe um telefone com DDD.";
    if (form.method === "card") {
      if (form.cardNumber.replace(/\D/g, "").length < 16) next.cardNumber = "Informe 16 dígitos.";
      if (!form.cardName.trim()) next.cardName = "Informe o nome impresso no cartão.";
      if (!/^\d{2}\/\d{2}$/.test(form.expiry)) next.expiry = "Use o formato MM/AA.";
      if (form.cvv.replace(/\D/g, "").length < 3) next.cvv = "Informe o código de segurança.";
    }
    if (!form.acceptedTerms) next.acceptedTerms = "Aceite os termos para continuar.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      saveOrder({
        id: `DEMO-${Date.now().toString().slice(-6)}`,
        studentName: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        document: form.document,
        phone: form.phone,
        method: form.method,
        status: "approved",
        createdAt: new Date().toISOString(),
      });
      router.push(`/pedido-confirmado?method=${form.method}`);
    }, 900);
  }

  return (
    <main className="prototype-page">
      <PrototypeHeader compact />
      <div className="prototype-notice" role="status">
        Demonstração segura: nenhum pagamento será realizado e nenhum dado será enviado ao Asaas.
      </div>
      <div className="prototype-shell checkout-layout">
        <form className="checkout-form" onSubmit={submit} noValidate>
          <div className="prototype-heading">
            <span>Finalizar inscrição</span>
            <h1>Seu acesso ao curso</h1>
            <p>Preencha os dados abaixo para validar o fluxo completo de compra.</p>
          </div>

          <fieldset>
            <legend>Dados do aluno</legend>
            <div className="form-grid">
              <label className="wide">Nome completo<input value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" />{errors.name && <small className="field-error">{errors.name}</small>}</label>
              <label>E-mail<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />{errors.email && <small className="field-error">{errors.email}</small>}</label>
              <label>CPF<input value={form.document} onChange={(e) => update("document", e.target.value)} inputMode="numeric" placeholder="000.000.000-00" />{errors.document && <small className="field-error">{errors.document}</small>}</label>
              <label>Telefone<input value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" placeholder="(00) 00000-0000" />{errors.phone && <small className="field-error">{errors.phone}</small>}</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Forma de pagamento</legend>
            <div className="payment-options">
              {([
                ["pix", "Pix", "Aprovação simulada imediata"],
                ["card", "Cartão", "Parcelamento conforme a oferta"],
                ["boleto", "Boleto", "Vencimento simulado em 3 dias"],
              ] as const).map(([value, title, description]) => (
                <label key={value} className={form.method === value ? "selected" : ""}>
                  <input type="radio" name="payment" value={value} checked={form.method === value} onChange={() => update("method", value)} />
                  <span><strong>{title}</strong><small>{description}</small></span>
                </label>
              ))}
            </div>

            {form.method === "card" && (
              <div className="card-fields form-grid">
                <label className="wide">Número do cartão<input value={form.cardNumber} onChange={(e) => update("cardNumber", e.target.value)} inputMode="numeric" placeholder="0000 0000 0000 0000" />{errors.cardNumber && <small className="field-error">{errors.cardNumber}</small>}</label>
                <label className="wide">Nome no cartão<input value={form.cardName} onChange={(e) => update("cardName", e.target.value)} />{errors.cardName && <small className="field-error">{errors.cardName}</small>}</label>
                <label>Validade<input value={form.expiry} onChange={(e) => update("expiry", e.target.value)} placeholder="MM/AA" />{errors.expiry && <small className="field-error">{errors.expiry}</small>}</label>
                <label>CVV<input value={form.cvv} onChange={(e) => update("cvv", e.target.value)} inputMode="numeric" />{errors.cvv && <small className="field-error">{errors.cvv}</small>}</label>
              </div>
            )}
          </fieldset>

          <label className="terms-check">
            <input type="checkbox" checked={form.acceptedTerms} onChange={(e) => update("acceptedTerms", e.target.checked)} />
            <span>Li e aceito os termos de uso e a política de privacidade desta demonstração.</span>
          </label>
          {errors.acceptedTerms && <small className="field-error block">{errors.acceptedTerms}</small>}

          <button className="prototype-primary-action" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Validando inscrição..." : "Simular pagamento e liberar acesso"}
          </button>
        </form>

        <aside className="order-summary">
          <span>Resumo da inscrição</span>
          <h2>Microscopia de campo claro e escuro</h2>
          <ul>
            <li>10 módulos progressivos</li>
            <li>Aulas gravadas</li>
            <li>Materiais complementares</li>
            <li>Acesso conforme as condições da oferta Hotmart</li>
          </ul>
          <div className="order-total"><span>Investimento</span><strong>Consulte a oferta</strong></div>
          <p>Preço e parcelamento são exibidos no checkout oficial da Hotmart.</p>
          <small>Esta página é apenas uma demonstração visual e não realiza pagamentos.</small>
        </aside>
      </div>
    </main>
  );
}
