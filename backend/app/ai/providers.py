from app.config import settings
from app.services.seed_data import COMPANY


class AIProvider:
    async def answer(self, question: str) -> tuple[str, str]:
        if settings.openai_api_key and settings.ai_provider.lower() == "openai":
            return await self._openai_ready(question)
        if settings.gemini_api_key and settings.ai_provider.lower() == "gemini":
            return await self._gemini_ready(question)
        return self._mock_answer(question), "mock"

    async def _openai_ready(self, question: str) -> tuple[str, str]:
        return self._mock_answer(question), "openai-ready"

    async def _gemini_ready(self, question: str) -> tuple[str, str]:
        return self._mock_answer(question), "gemini-ready"

    def _mock_answer(self, question: str) -> str:
        if any(word in question for word in ["هدر", "خفض", "تكاليف", "مصروف"]):
            return "أفضل فرص الخفض: التفاوض مع PayGate، ضبط استخدام OpenAI API، ومراجعة CloudX. التوفير المتوقع 92,000 ر.س سنويًا."
        if any(word in question for word in ["فرع", "توظيف", "توسع"]):
            return "التوسع ممكن لكنه مشروط. لا تفتح فرعًا جديدًا قبل خفض المصروفات المتكررة 10% على الأقل، لأن Runway سينخفض من 14 إلى 9 أشهر."
        if any(word in question for word in ["توقع", "إيراد", "6 أشهر"]):
            return "التوقع المالي يشير إلى إيرادات شهرية قريبة من 580,000 ر.س خلال 6 أشهر بثقة 87% إذا بقيت المصروفات السحابية تحت السيطرة."
        if "عقد" in question:
            return "أخطر عقد حاليًا هو PayGate بسبب شروط الرسوم والتجديد. التوصية: تقليل مدة الإلغاء إلى 30 يومًا ووضع سقف زيادة سعرية 5%."
        return f"الوضع المالي جيد: Health Score {COMPANY['health_score']}%، الربح {COMPANY['net_profit']:,} ر.س، والسيولة تكفي {COMPANY['cash_runway']} شهرًا."


ai_provider = AIProvider()
