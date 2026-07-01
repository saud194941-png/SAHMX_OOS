"use client";

import { useMemo, useState } from "react";
import { askAiCfo } from "@/lib/api";
import { quickQuestions, company } from "@/data/seed";
import { ChatMessage } from "@/types";

function localAnswer(question: string) {
  if (question.includes("هدر") || question.includes("خفض") || question.includes("تكاليف")) {
    return "أكبر هدر حاليًا في CloudX واشتراكات التحليلات واستخدام API وقت الذروة. أوصي بسقف إنفاق شهري، دمج أدوات التحليلات، والتفاوض مع PayGate. التوفير المتوقع 92,000 ر.س سنويًا.";
  }
  if (question.includes("فرع") || question.includes("توظيف")) {
    return "القرار ممكن لكن مشروط. لا أنصح بفتح فرع الآن قبل خفض المصروفات المتكررة 10%. توظيف موظف واحد بتكلفة شهرية مضبوطة مقبول إذا ارتبط مباشرة بنمو الإيرادات.";
  }
  if (question.includes("توقع") || question.includes("6 أشهر")) {
    return "التوقع بعد 6 أشهر يشير إلى إيرادات شهرية قريبة من 580,000 ر.س بثقة 87% إذا بقيت المصروفات السحابية تحت 45,000 ر.س شهريًا.";
  }
  if (question.includes("عقد")) {
    return "أخطر عقد حاليًا هو PayGate بسبب شروط الرسوم والتجديد. عدّل شرط الإلغاء إلى 30 يومًا، وضع سقف زيادة سعرية لا يتجاوز 5%.";
  }
  return `الوضع المالي جيد: الصحة المالية ${company.health}%، الربح الحالي ${company.profit.toLocaleString("ar-SA")} ر.س، والسيولة تكفي ${company.runway} شهرًا. الأولوية الآن خفض المصروفات المتكررة قبل التوسع.`;
}

export function AiCfoChat() {
  const initial = useMemo<ChatMessage>(() => ({
    id: "init",
    role: "assistant",
    content: `مرحبًا، أنا المدير المالي الذكي في SAHM X. وضع الشركة الحالي جيد، الصحة المالية ${company.health}%، والسيولة تكفي ${company.runway} شهرًا. اسألني عن أي قرار مالي.`
  }), []);
  const [messages, setMessages] = useState<ChatMessage[]>([initial]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send(question = input) {
    if (!question.trim()) return;
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: "user", content: question };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const result = await askAiCfo(question);
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", content: result.answer }]);
    } catch {
      setTimeout(() => {
        setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", content: localAnswer(question) }]);
      }, 450);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dash-grid">
      <section className="panel glass span-8 chat-box">
        <h3>محادثة AI CFO</h3>
        <div className="quick-prompts">
          {quickQuestions.map((question) => (
            <button className="btn secondary sm" key={question} onClick={() => send(question)}>{question}</button>
          ))}
        </div>
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className={`msg ${message.role === "assistant" ? "ai" : "user"}`}>{message.content}</div>
          ))}
          {loading && <div className="msg ai">يحلل البيانات الآن...</div>}
        </div>
        <div className="chat-input">
          <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && send()} placeholder="اكتب سؤالك المالي هنا..." />
          <button className="btn" onClick={() => send()}>إرسال</button>
        </div>
      </section>
      <section className="panel glass span-4">
        <h3>سياق الشركة</h3>
        <div className="mini-list">
          <div className="mini-item"><span>الإيرادات</span><b>{company.revenue.toLocaleString("ar-SA")} ر.س</b></div>
          <div className="mini-item"><span>المصروفات</span><b>{company.expenses.toLocaleString("ar-SA")} ر.س</b></div>
          <div className="mini-item"><span>الربح</span><b>{company.profit.toLocaleString("ar-SA")} ر.س</b></div>
          <div className="mini-item"><span>Runway</span><b>{company.runway} شهر</b></div>
        </div>
        <button className="btn sm" style={{ marginTop: 12, width: "100%" }}>توليد تقرير من المحادثة</button>
      </section>
    </div>
  );
}
