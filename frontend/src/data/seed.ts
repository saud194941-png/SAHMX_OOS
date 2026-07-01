import { PageSection } from "@/types";

export const company = {
  name: "SAHM X Labs",
  arabicName: "مختبرات سهم إكس",
  currency: "SAR",
  city: "جدة",
  country: "المملكة العربية السعودية",
  health: 83,
  revenue: 428000,
  expenses: 286000,
  profit: 142000,
  burnRate: 98000,
  runway: 14,
  savings: 92000
};

export const demoUser = {
  id: "usr_demo_owner",
  name: "سعود سعد العتيبي",
  email: "demo@sahmx.sa",
  password: "Demo@12345",
  role: "Owner" as const
};

export const monthlySeries = [
  { month: "يناير", revenue: 310000, expenses: 234000, cash: 690000 },
  { month: "فبراير", revenue: 338000, expenses: 241000, cash: 748000 },
  { month: "مارس", revenue: 362000, expenses: 252000, cash: 806000 },
  { month: "أبريل", revenue: 389000, expenses: 270000, cash: 882000 },
  { month: "مايو", revenue: 405000, expenses: 278000, cash: 938000 },
  { month: "يونيو", revenue: 428000, expenses: 286000, cash: 1012000 }
];

export const forecastSeries = [
  { month: "يوليو", revenue: 462000, expenses: 301000, cash: 1120000 },
  { month: "أغسطس", revenue: 497000, expenses: 318000, cash: 1218000 },
  { month: "سبتمبر", revenue: 520000, expenses: 333000, cash: 1329000 },
  { month: "أكتوبر", revenue: 548000, expenses: 349000, cash: 1451000 },
  { month: "نوفمبر", revenue: 580000, expenses: 370000, cash: 1578000 }
];

export const transactions = [
  { type: "دخل", description: "اشتراك Enterprise - Riyadh Cloud", amount: "+128000", date: "2026-06-28", status: "مكتمل" },
  { type: "مصروف", description: "CloudX Infrastructure", amount: "-42000", date: "2026-06-26", status: "تحت المراقبة" },
  { type: "دخل", description: "عقد تحليل مالي", amount: "+86000", date: "2026-06-22", status: "مكتمل" },
  { type: "مصروف", description: "PayGate processing", amount: "-18500", date: "2026-06-21", status: "قابل للتفاوض" },
  { type: "مصروف", description: "رواتب الفريق", amount: "-122000", date: "2026-06-20", status: "مجدول" }
];

export const contracts = [
  { name: "CloudX Annual", party: "CloudX KSA", value: "168000", end: "2026-11-30", status: "تجديد تلقائي", risk: "42/100" },
  { name: "Payment Gateway", party: "PayGate", value: "96000", end: "2026-09-15", status: "تفاوض", risk: "51/100" },
  { name: "Data Provider", party: "Gulf Data", value: "72000", end: "2027-01-10", status: "نشط", risk: "24/100" }
];

export const suppliers = [
  { name: "CloudX", category: "سحابة", value: "168000", performance: "88%" },
  { name: "PayGate", category: "مدفوعات", value: "96000", performance: "81%" },
  { name: "DesignHub", category: "تصميم", value: "45000", performance: "94%" }
];

export const subscriptions = [
  { service: "OpenAI API", category: "AI", cost: "13000", cycle: "شهري", recommendation: "خفض ذكي" },
  { service: "Analytics Pro", category: "تحليلات", cost: "8900", cycle: "شهري", recommendation: "دمج" },
  { service: "CRM Suite", category: "مبيعات", cost: "7600", cycle: "شهري", recommendation: "استمرار" }
];

export const investments = [
  { name: "أتمتة التقارير", amount: "90000", roi: "42%", risk: "منخفض", aiScore: "86%", recommendation: "مناسب" },
  { name: "فرع جدة التنفيذي", amount: "240000", roi: "31%", risk: "متوسط", aiScore: "68%", recommendation: "انتظار" },
  { name: "Data Marketplace", amount: "180000", roi: "47%", risk: "متوسط", aiScore: "79%", recommendation: "دراسة" }
];

export const alerts = [
  "CloudX ارتفع 18% عن متوسط آخر 3 أشهر",
  "عقد PayGate يحتاج تفاوض قبل 2026-09-15",
  "Runway آمن لكن التوسع الكبير يخفضه إلى 9 أشهر",
  "فرصة توفير سنوية تقديرية 92,000 ر.س",
  "توقع الإيرادات بعد 6 أشهر أعلى من الهدف بـ 11%"
];

export const dashboardSections: PageSection[] = [
  {
    slug: "analytics",
    title: "التحليلات المالية",
    eyebrow: "Revenue & Expense Intelligence",
    summary: "تحليل الإيرادات والمصروفات والهامش والكفاءة التشغيلية مع مؤشرات تنفيذية قابلة للتصرف.",
    metrics: [
      { label: "نمو الإيرادات", value: "18%", trend: "أعلى من المستهدف", tone: "good" },
      { label: "هامش الربح", value: "33%", trend: "ممتاز", tone: "good" },
      { label: "Operational Efficiency", value: "76%", trend: "قابل للتحسين", tone: "warn" },
      { label: "Risk Score", value: "28/100", trend: "منخفض", tone: "good" }
    ],
    insights: ["الإيرادات المتكررة تقود النمو.", "مصروفات السحابة تحتاج سقف إنفاق.", "هامش الربح مناسب قبل أي توسع."]
  },
  {
    slug: "financials",
    title: "الحسابات المالية",
    eyebrow: "Accounts, KPIs & CSV Import",
    summary: "إدارة الحسابات والتصنيفات والمؤشرات الأساسية واستيراد CSV التجريبي.",
    metrics: [
      { label: "الحساب البنكي", value: "294K", trend: "SAR", tone: "good" },
      { label: "بطاقة تشغيلية", value: "32K", trend: "التزام", tone: "neutral" },
      { label: "محفظة استثمارية", value: "155K", trend: "+8%", tone: "good" },
      { label: "CSV Import", value: "جاهز", trend: "Mock", tone: "neutral" }
    ],
    tableTitle: "آخر المعاملات",
    table: transactions
  },
  {
    slug: "transactions",
    title: "المعاملات",
    eyebrow: "Transaction Control",
    summary: "متابعة الدخل والمصروفات والتصنيفات وحالات التحصيل أو التفاوض.",
    metrics: [
      { label: "دخل يونيو", value: "428K", trend: "+18%", tone: "good" },
      { label: "مصروفات يونيو", value: "286K", trend: "مرتفع", tone: "warn" },
      { label: "قيد المراجعة", value: "3", trend: "عقود وموردين", tone: "warn" },
      { label: "صافي التدفق", value: "142K", trend: "إيجابي", tone: "good" }
    ],
    tableTitle: "سجل المعاملات",
    table: transactions,
    actions: ["إضافة معاملة", "استيراد CSV", "تصدير Excel"]
  },
  {
    slug: "cash-flow",
    title: "التدفق النقدي",
    eyebrow: "Cash Flow Preview",
    summary: "رؤية تنفيذية للسيولة المتاحة، التدفقات القادمة، ومخاطر نقص النقد.",
    metrics: [
      { label: "Cash In", value: "428K", trend: "+18%", tone: "good" },
      { label: "Cash Out", value: "286K", trend: "تحت المراقبة", tone: "warn" },
      { label: "Net Cash Flow", value: "142K", trend: "إيجابي", tone: "good" },
      { label: "Runway", value: "14 شهر", trend: "آمن", tone: "good" }
    ],
    insights: ["احتفظ باحتياطي 3 أشهر.", "أعد جدولة حملة التسويق إن بدأت مصروفات السحابة بالارتفاع.", "تجنب توسع عالي التكلفة قبل خفض الاشتراكات."]
  },
  {
    slug: "simulations",
    title: "محاكاة القرارات",
    eyebrow: "Decision Simulation Engine",
    summary: "اختبر أثر التوظيف، فتح فرع، القروض، التسويق، خفض الاشتراكات، انخفاض الإيرادات، أو استثمار جديد.",
    metrics: [
      { label: "Hire employee", value: "72%", trend: "Safety", tone: "good" },
      { label: "Open branch", value: "58%", trend: "حذر", tone: "warn" },
      { label: "Reduce subscriptions", value: "91%", trend: "موصى به", tone: "good" },
      { label: "Revenue drop", value: "44%", trend: "خطر", tone: "danger" }
    ],
    actions: ["توظيف موظف", "فتح فرع", "زيادة التسويق", "أخذ قرض", "خفض الاشتراكات", "استثمار جديد"],
    insights: ["أفضل قرار حاليًا هو خفض الاشتراكات قبل التوسع.", "فتح فرع يخفض Runway إلى 9 أشهر."]
  },
  {
    slug: "contracts",
    title: "العقود",
    eyebrow: "Contract Risk Intelligence",
    summary: "رفع ملف mock، تحليل بنود خطرة، تنبيهات التجديد، وتوصيات تفاوضية.",
    metrics: [
      { label: "العقود النشطة", value: "3", trend: "SAR 336K", tone: "neutral" },
      { label: "Risk Score", value: "42/100", trend: "متوسط", tone: "warn" },
      { label: "Renewal alerts", value: "2", trend: "90 يوم", tone: "warn" },
      { label: "Dangerous clauses", value: "3", trend: "تجديد/إلغاء", tone: "danger" }
    ],
    tableTitle: "العقود الحالية",
    table: contracts,
    insights: ["عدّل شرط الإلغاء إلى 30 يومًا.", "ضع سقف زيادة سعرية لا يتجاوز 5%."]
  },
  {
    slug: "negotiations",
    title: "التفاوض الذكي",
    eyebrow: "Negotiation Copilot",
    summary: "اقتراح شروط، نقاط تفاوض، مسودة رد، وربط مباشر بالعقود وفرص التوفير.",
    metrics: [
      { label: "Savings Potential", value: "58K", trend: "سنويًا", tone: "good" },
      { label: "Suggested terms", value: "9", trend: "جاهزة", tone: "neutral" },
      { label: "Draft responses", value: "4", trend: "Arabic", tone: "neutral" },
      { label: "Priority", value: "PayGate", trend: "أولًا", tone: "warn" }
    ],
    insights: ["ابدأ بخفض السعر وتحسين شروط الدفع.", "اربط الرد ببيانات الاستخدام الفعلية."]
  },
  {
    slug: "predictions",
    title: "التنبؤ المالي",
    eyebrow: "Forecasting Engine",
    summary: "توقع الإيرادات والمصروفات والتدفق النقدي والثقة والتنبيهات القادمة.",
    metrics: [
      { label: "إيرادات الشهر القادم", value: "462K", trend: "ثقة 87%", tone: "good" },
      { label: "مصروفات متوقعة", value: "301K", trend: "تحت السيطرة", tone: "neutral" },
      { label: "Cash Flow", value: "161K", trend: "إيجابي", tone: "good" },
      { label: "Liquidity Risk", value: "منخفض", trend: "Stable", tone: "good" }
    ],
    insights: ["النمو يستمر إذا بقيت مصروفات السحابة تحت 45K.", "حملة تسويق كبيرة تحتاج سقف ROI."]
  },
  {
    slug: "investments",
    title: "تقييم الاستثمارات",
    eyebrow: "Investment Intelligence",
    summary: "قائمة فرص الاستثمار، ROI، المخاطر، AI Score، الاستدامة والتوصية النهائية.",
    metrics: [
      { label: "أفضل فرصة", value: "86%", trend: "أتمتة التقارير", tone: "good" },
      { label: "Average ROI", value: "40%", trend: "جيد", tone: "good" },
      { label: "Sustainability", value: "78%", trend: "مناسب", tone: "good" },
      { label: "High risk", value: "0", trend: "حاليًا", tone: "neutral" }
    ],
    tableTitle: "الاستثمارات",
    table: investments
  },
  {
    slug: "suppliers",
    title: "الموردون",
    eyebrow: "Supplier Intelligence",
    summary: "تحليل الموردين حسب القيمة والأداء والتفاوض والاعتمادية.",
    metrics: [
      { label: "أفضل مورد", value: "DesignHub", trend: "94%", tone: "good" },
      { label: "أعلى تكلفة", value: "CloudX", trend: "168K", tone: "warn" },
      { label: "أولوية التفاوض", value: "PayGate", trend: "18K توفير", tone: "warn" },
      { label: "Active suppliers", value: "3", trend: "نشط", tone: "neutral" }
    ],
    tableTitle: "الموردون",
    table: suppliers
  },
  {
    slug: "subscriptions",
    title: "الاشتراكات",
    eyebrow: "Subscription Control",
    summary: "إدارة الاشتراكات وتوصيات خفض أو دمج الخدمات غير الضرورية.",
    metrics: [
      { label: "التكلفة الشهرية", value: "29.5K", trend: "SAR", tone: "warn" },
      { label: "توفير متوقع", value: "29.2K", trend: "سنويًا", tone: "good" },
      { label: "دمج مقترح", value: "2", trend: "أدوات", tone: "good" },
      { label: "AI usage", value: "13K", trend: "تحت الضبط", tone: "neutral" }
    ],
    tableTitle: "الاشتراكات",
    table: subscriptions
  },
  {
    slug: "reports",
    title: "التقارير",
    eyebrow: "Executive Reporting",
    summary: "تقارير تنفيذية وصحة مالية ومخاطر وتدفق نقدي وتوقعات مع تصدير PDF/Excel mock.",
    metrics: [
      { label: "Executive Report", value: "جاهز", trend: "PDF mock", tone: "neutral" },
      { label: "Health Report", value: "83%", trend: "ممتاز", tone: "good" },
      { label: "Risk Report", value: "28/100", trend: "منخفض", tone: "good" },
      { label: "Excel Export", value: "Mock", trend: "جاهز", tone: "neutral" }
    ],
    actions: ["Executive Report", "Financial Health Report", "Risk Report", "Cash Flow Report", "Forecast Report"]
  },
  {
    slug: "notifications",
    title: "مركز التنبيهات",
    eyebrow: "Notification Center",
    summary: "تنبيهات مالية وتعاقدية واشتراكات وAI مع حالات مقروء وغير مقروء.",
    metrics: [
      { label: "Unread", value: "4", trend: "تحتاج إجراء", tone: "warn" },
      { label: "Financial alerts", value: "2", trend: "نشطة", tone: "warn" },
      { label: "Contract alerts", value: "2", trend: "تجديد", tone: "danger" },
      { label: "AI alerts", value: "3", trend: "توصيات", tone: "neutral" }
    ],
    insights: alerts
  },
  {
    slug: "settings",
    title: "الإعدادات",
    eyebrow: "Company, Language, AI & Security",
    summary: "إعدادات الملف، الشركة، اللغة، الثيم، مزود AI، مفاتيح API placeholder، والأمان.",
    metrics: [
      { label: "Language", value: "AR", trend: "RTL default", tone: "neutral" },
      { label: "Theme", value: "Dark FinTech", trend: "SAHMX", tone: "neutral" },
      { label: "AI Provider", value: "Mock", trend: "OpenAI ready", tone: "good" },
      { label: "Security", value: "JWT", trend: "RBAC", tone: "good" }
    ],
    actions: ["حفظ الملف", "تبديل اللغة", "اختبار AI", "تحديث كلمة المرور"]
  },
  {
    slug: "admin",
    title: "لوحة الإدارة",
    eyebrow: "Admin Console",
    summary: "إدارة المستخدمين والشركات والأدوار وسجلات التدقيق وحالة النظام واستخدام API.",
    metrics: [
      { label: "Users", value: "12", trend: "نشط", tone: "good" },
      { label: "Companies", value: "3", trend: "Demo", tone: "neutral" },
      { label: "API usage", value: "48K", trend: "tokens", tone: "neutral" },
      { label: "Audit events", value: "186", trend: "آخر 7 أيام", tone: "warn" }
    ],
    tableTitle: "الأدوار",
    table: [
      { role: "Owner", permissions: "كل الصلاحيات", status: "نشط" },
      { role: "Admin", permissions: "إدارة النظام والمستخدمين", status: "نشط" },
      { role: "Analyst", permissions: "التحليل والتقارير", status: "نشط" },
      { role: "Viewer", permissions: "عرض فقط", status: "نشط" }
    ]
  }
];

export const quickQuestions = [
  "هل وضع الشركة المالي جيد؟",
  "أين أكبر هدر؟",
  "هل أستطيع توظيف موظف جديد؟",
  "هل أفتح فرع جديد؟",
  "ما توقع الإيرادات بعد 6 أشهر؟",
  "ما أخطر عقد؟",
  "كيف أخفض التكاليف؟",
  "هل الاستثمار مناسب؟"
];
