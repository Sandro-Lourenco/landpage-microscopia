export type PaymentMethod = "pix" | "card" | "boleto";

export type PrototypeOrder = {
  id: string;
  studentName: string;
  email: string;
  document: string;
  phone: string;
  method: PaymentMethod;
  status: "approved";
  createdAt: string;
};

const ORDER_KEY = "icibina-prototype-order";
const PROGRESS_KEY = "icibina-prototype-progress";

export function saveOrder(order: PrototypeOrder) {
  window.localStorage.setItem(ORDER_KEY, JSON.stringify(order));
}

export function getOrder(): PrototypeOrder | null {
  const raw = window.localStorage.getItem(ORDER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PrototypeOrder;
  } catch {
    return null;
  }
}

export function getProgress(): string[] {
  const raw = window.localStorage.getItem(PROGRESS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function toggleLessonProgress(lessonId: string) {
  const current = getProgress();
  const next = current.includes(lessonId)
    ? current.filter((id) => id !== lessonId)
    : [...current, lessonId];
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  return next;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
