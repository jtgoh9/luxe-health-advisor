export type Lang = 'id' | 'en' | 'zh';

export const t: Record<string, Record<Lang, string>> = {
  // Nav
  contact: { id: "Hubungi Kami", en: "Contact Us", zh: "联系我们" },

  // Hero
  heroEyebrow: { id: "Singapura · Johor Bahru · Indonesia", en: "Singapore · Johor Bahru · Indonesia", zh: "新加坡 · 柔佛巴鲁 · 印度尼西亚" },
  heroTitle: {
    id: "Kesehatan Anda.\nKetenangan Keluarga Anda.",
    en: "Your Health.\nYour Family's Peace of Mind.",
    zh: "您的健康。\n家人的安心与保障。"
  },
  heroSub: {
    id: "VitaBridge menghubungkan Anda dengan penyedia skrining kesehatan terbaik Singapura — dengan layanan concierge premium dari awal hingga akhir.",
    en: "VitaBridge connects you with Singapore's top health screening providers — with premium concierge service from start to finish.",
    zh: "VitaBridge 为您连接新加坡顶级健康筛查机构 — 从始至终提供尊享礼宾服务。"
  },
  heroCta1: { id: "Mulai Perjalanan", en: "Begin Journey", zh: "开启旅程" },
  heroCta2: { id: "Lihat Paket", en: "Browse Packages", zh: "查看方案" },

  // Trust bar
  trust1: { id: "Concierge Berbahasa Indonesia", en: "Bahasa Indonesia Concierge", zh: "印尼语礼宾" },
  trust2: { id: "DA MedSuites · Raffles · Parkway · Healthway", en: "DA MedSuites · Raffles · Parkway · Healthway", zh: "DA MedSuites · Raffles · Parkway · Healthway" },
  trust3: { id: "European Wellness Puteri Harbour — Akses Eksklusif", en: "European Wellness Puteri Harbour — Exclusive Access", zh: "European Wellness Puteri Harbour — 专属通道" },
  trust4: { id: "Satu Panggilan, Semua Terurus", en: "One Call, All Arranged", zh: "一通电话，全程无忧" },

  // Marketplace
  marketplaceEyebrow: { id: "PASAR SKRINING KESEHATAN", en: "HEALTH SCREENING MARKETPLACE", zh: "健康筛查市场" },
  marketplaceTitle: { id: "Temukan Paket Anda", en: "Find Your Package", zh: "寻找您的方案" },
  marketplaceSub: {
    id: "Bandingkan paket skrining kesehatan dari penyedia terbaik Singapura. Pilih, bandingkan, dan hubungi kami.",
    en: "Compare health screening packages from Singapore's top providers. Select, compare, and reach out.",
    zh: "比较新加坡顶级机构的健康筛查方案。选择、对比并联系我们。"
  },
  filterAll: { id: "Semua", en: "All", zh: "全部" },
  filterMale: { id: "Pria", en: "Male", zh: "男性" },
  filterFemale: { id: "Wanita", en: "Female", zh: "女性" },
  bestFor: { id: "Cocok untuk:", en: "Best for:", zh: "适合人群：" },
  duration: { id: "Durasi:", en: "Duration:", zh: "时长：" },
  whatsIncluded: { id: "Yang Termasuk", en: "What's Included", zh: "包含项目" },
  notIncluded: { id: "Tidak Termasuk", en: "Not Included", zh: "不包含" },
  addToCompare: { id: "Bandingkan", en: "Compare", zh: "对比" },
  enquireViaWa: { id: "Tanya via WhatsApp", en: "Enquire via WhatsApp", zh: "WhatsApp 咨询" },
  compareTitle: { id: "Bandingkan Paket", en: "Compare Packages", zh: "对比方案" },
  clearCompare: { id: "Hapus Perbandingan", en: "Clear Comparison", zh: "清除对比" },
  compareBtn: { id: "Bandingkan Paket", en: "Compare Side-by-Side", zh: "并排对比" },
  disclaimer: {
    id: "Harga bersifat indikatif. Verifikasi harga terkini dengan penyedia. VitaBridge adalah layanan independen.",
    en: "Prices are indicative. Verify current pricing with provider. VitaBridge is independent.",
    zh: "价格仅供参考。请向机构确认最新价格。VitaBridge 为独立服务。"
  },

  // Journey
  journeyEyebrow: { id: "PERJALANAN ANDA", en: "YOUR JOURNEY", zh: "您的旅程" },
  journeyTitle: { id: "Empat Langkah Sederhana", en: "Four Simple Steps", zh: "四个简单步骤" },
  step1: { id: "Konsultasi", en: "Consultation", zh: "咨询" },
  step1Desc: { id: "Hubungi kami via WhatsApp untuk konsultasi awal dan rekomendasi paket.", en: "Reach out via WhatsApp for initial consultation and package recommendations.", zh: "通过WhatsApp联系我们进行初步咨询和方案推荐。" },
  step2: { id: "Skrining di Singapura", en: "Singapore Screening", zh: "新加坡筛查" },
  step2Desc: { id: "Kami mengatur jadwal, akomodasi, dan transportasi Anda.", en: "We arrange your schedule, accommodation, and transport.", zh: "我们安排您的行程、住宿和交通。" },
  step3: { id: "JB Regeneratif (Opsional)", en: "JB Regenerative (Optional)", zh: "JB再生医学（可选）" },
  step3Desc: { id: "Akses eksklusif ke European Wellness Puteri Harbour untuk terapi regeneratif.", en: "Exclusive access to European Wellness Puteri Harbour for regenerative therapy.", zh: "独家访问European Wellness Puteri Harbour进行再生治疗。" },
  step4: { id: "Tindak Lanjut 90 Hari", en: "90-Day Follow-up", zh: "90天跟进" },
  step4Desc: { id: "Pemantauan kesehatan berkelanjutan dan koordinasi dengan spesialis.", en: "Ongoing health monitoring and specialist coordination.", zh: "持续健康监测和专家协调。" },

  // Add-ons
  addOnsEyebrow: { id: "LAYANAN TAMBAHAN", en: "CONCIERGE ADD-ONS", zh: "礼宾附加服务" },
  addOnsTitle: { id: "Layanan Concierge", en: "Concierge Services", zh: "礼宾服务" },
  addon1: { id: "Limusin", en: "Limousine", zh: "豪华轿车" },
  addon1Desc: { id: "Transfer bandara dan klinik dengan kendaraan premium.", en: "Premium airport and clinic transfers.", zh: "高端机场和诊所接送。" },
  addon2: { id: "Hotel", en: "Hotel", zh: "酒店" },
  addon2Desc: { id: "Akomodasi premium di Singapura dan Johor Bahru.", en: "Premium accommodation in Singapore and Johor Bahru.", zh: "新加坡和柔佛巴鲁的高端住宿。" },
  addon3: { id: "Feri Pribadi", en: "Private Ferry", zh: "私人渡轮" },
  addon3Desc: { id: "Penyeberangan Singapura–JB yang nyaman dan cepat.", en: "Comfortable and fast Singapore–JB crossing.", zh: "舒适快速的新加坡-JB渡轮。" },
  addon4: { id: "Pendamping BI", en: "BI Concierge", zh: "印尼语陪同" },
  addon4Desc: { id: "Pendamping berbahasa Indonesia sepanjang kunjungan Anda.", en: "Bahasa Indonesia companion throughout your visit.", zh: "全程印尼语陪同。" },
  addon5: { id: "Terjemahan Rekam Medis", en: "Health Records Translation", zh: "病历翻译" },
  addon5Desc: { id: "Terjemahan profesional dokumen medis Anda.", en: "Professional translation of your medical documents.", zh: "专业医疗文件翻译。" },
  addon6: { id: "Pemantauan 90 Hari", en: "90-Day Monitoring", zh: "90天监测" },
  addon6Desc: { id: "Tindak lanjut kesehatan dengan tim medis kami.", en: "Health follow-up with our medical team.", zh: "与我们的医疗团队进行健康跟进。" },

  // European Wellness
  ewEyebrow: { id: "MITRA EKSKLUSIF", en: "EXCLUSIVE PARTNER", zh: "独家合作伙伴" },
  ewTitle: { id: "European Wellness Puteri Harbour", en: "European Wellness Puteri Harbour", zh: "European Wellness Puteri Harbour" },
  ewSub: { id: "Akses eksklusif ke terapi regeneratif dengan protokol Swiss berusia 30+ tahun, hanya 45 menit dari Singapura.", en: "Exclusive access to regenerative therapies with 30+ years of Swiss protocols, just 45 minutes from Singapore.", zh: "独家访问拥有30年以上瑞士协议的再生治疗，距新加坡仅45分钟。" },
  ewStat1: { id: "45 menit dari Singapura", en: "45 min from Singapore", zh: "距新加坡45分钟" },
  ewStat2: { id: "30+ tahun protokol Swiss", en: "30+ years Swiss protocols", zh: "30年以上瑞士协议" },
  ewStat3: { id: "Akses eksklusif VitaBridge", en: "VitaBridge exclusive access", zh: "VitaBridge独家通道" },

  // Events
  eventsEyebrow: { id: "KOMUNITAS & ACARA", en: "COMMUNITY & EVENTS", zh: "社区与活动" },
  eventsTitle: { id: "Bergabung dengan Komunitas Kami", en: "Join Our Community", zh: "加入我们的社区" },
  event1: { id: "Makan Malam Kesehatan & Longevitas", en: "Health & Longevity Dinner", zh: "健康长寿晚宴" },
  event1Desc: { id: "Makan malam eksklusif dengan pakar kesehatan dan longevitas.", en: "Exclusive dinner with health and longevity experts.", zh: "与健康和长寿专家的专属晚宴。" },
  event2: { id: "Seminar Kesehatan", en: "Health Seminar", zh: "健康研讨会" },
  event2Desc: { id: "Seminar informatif tentang skrining kesehatan dan pencegahan.", en: "Informative seminar on health screening and prevention.", zh: "关于健康筛查和预防的信息研讨会。" },
  event3: { id: "EW Open Day", en: "EW Open Day", zh: "EW 开放日" },
  event3Desc: { id: "Hari terbuka di European Wellness Puteri Harbour.", en: "Open day at European Wellness Puteri Harbour.", zh: "European Wellness Puteri Harbour 开放日。" },
  registerInterest: { id: "Daftar Minat", en: "Register Interest", zh: "注册兴趣" },

  // Testimonial
  testimonialQuote: {
    id: "VitaBridge membuat seluruh proses menjadi begitu mudah. Dari pemilihan paket hingga penerbangan pulang, semuanya teratur sempurna.",
    en: "VitaBridge made the entire process so effortless. From package selection to the flight home, everything was perfectly arranged.",
    zh: "VitaBridge让整个过程变得如此轻松。从选择方案到回程航班，一切都安排得井井有条。"
  },
  testimonialAuthor: { id: "— Keluarga S., Jakarta", en: "— The S. Family, Jakarta", zh: "— S. 家族，雅加达" },

  // Footer CTA
  footerCtaTitle: {
    id: "Siap Memulai Perjalanan Kesehatan Anda?",
    en: "Ready to Start Your Health Journey?",
    zh: "准备好开启您的健康之旅了吗？"
  },
  footerCtaSub: {
    id: "Hubungi tim concierge kami via WhatsApp. Kami merespons dalam 2 jam.",
    en: "Reach our concierge team via WhatsApp. We respond within 2 hours.",
    zh: "通过WhatsApp联系我们的礼宾团队。我们将在2小时内回复。"
  },
  footerCtaBtn: { id: "Hubungi via WhatsApp", en: "Contact via WhatsApp", zh: "WhatsApp 联系" },

  // Footer
  footerDisclaimer: {
    id: "VitaBridge adalah layanan concierge perjalanan kesehatan independen. Tidak berafiliasi dengan atau didukung oleh penyedia yang terdaftar. Harga bersifat indikatif — verifikasi dengan penyedia. Bukan penyedia layanan medis berlisensi.",
    en: "VitaBridge is an independent health travel concierge. Not affiliated with or endorsed by listed providers. Prices are indicative — verify with provider. Not a licensed medical provider.",
    zh: "VitaBridge是独立的健康旅行礼宾服务。与所列机构无附属或背书关系。价格仅供参考——请向机构确认。非持牌医疗服务提供商。"
  },

  // WhatsApp messages
  waDefault: {
    id: "Halo VitaBridge, saya tertarik dengan layanan kesehatan Anda. Boleh saya tahu lebih lanjut?",
    en: "Hello VitaBridge, I'm interested in your health services. Could you tell me more?",
    zh: "您好VitaBridge，我对您的健康服务感兴趣，可以了解更多吗？"
  },
  waPackage: {
    id: "Halo VitaBridge, saya tertarik dengan paket {pkg} di {provider}. Boleh bantu saya book dan atur kunjungan ke Singapura?",
    en: "Hello VitaBridge, I'm interested in the {pkg} package at {provider}. Could you help me book and arrange my visit to Singapore?",
    zh: "您好VitaBridge，我对{provider}的{pkg}套餐感兴趣，能帮我预约并安排新加坡之行吗？"
  }
};

export const WHATSAPP = "6512345678";

export function waLink(lang: Lang, pkg?: string, provider?: string) {
  let msg: string;
  if (pkg && provider) {
    msg = t.waPackage[lang].replace('{pkg}', pkg).replace('{provider}', provider);
  } else {
    msg = t.waDefault[lang];
  }
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}
