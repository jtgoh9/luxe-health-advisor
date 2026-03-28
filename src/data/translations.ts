export type Lang = 'id' | 'en' | 'zh';

export const t: Record<string, Record<Lang, string>> = {
  // Nav
  contact: { id: "Hubungi Kami", en: "Contact Us", zh: "联系我们" },
  navPackages: { id: "Paket", en: "Packages", zh: "方案" },
  navJourney: { id: "Perjalanan", en: "Journey", zh: "旅程" },
  navAbout: { id: "Tentang", en: "About", zh: "关于" },
  navContact: { id: "Kontak", en: "Contact", zh: "联系" },

  // Hero
  heroEyebrow: { id: "Singapura · Johor Bahru · Indonesia", en: "Singapore · Johor Bahru · Indonesia", zh: "新加坡 · 柔佛巴鲁 · 印度尼西亚" },
  heroTitle: {
    id: "Kesehatan Anda.\nKetenangan Keluarga Anda.",
    en: "Your Health.\nYour Family's Peace of Mind.",
    zh: "您的健康。\n家人的安心与保障。"
  },
  heroSub: {
    id: "Satu-satunya concierge kesehatan dengan tim berbahasa Indonesia di Singapura — dan akses prioritas eksklusif ke European Wellness Puteri Harbour untuk program regeneratif.",
    en: "The only health concierge with a Bahasa Indonesia-speaking team on the ground in Singapore — and exclusive priority access to European Wellness Puteri Harbour for regenerative programmes.",
    zh: "唯一拥有驻新加坡印尼语团队的健康礼宾服务 — 并享有 European Wellness Puteri Harbour 再生医学项目的专属优先通道。"
  },
  heroCta1: { id: "Mulai Perjalanan", en: "Begin Journey", zh: "开启旅程" },
  heroCta2: { id: "Lihat Paket", en: "Browse Packages", zh: "查看方案" },

  // Trust bar
  trust1: { id: "Concierge Bahasa Indonesia & Mandarin", en: "Indonesian & Mandarin Concierge", zh: "印尼语和中文礼宾" },
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
  step1Desc: { id: "Hubungi kami via WhatsApp atau formulir pertanyaan untuk konsultasi awal dan rekomendasi paket.", en: "Reach out via WhatsApp or our enquiry form for initial consultation and package recommendations.", zh: "通过WhatsApp或咨询表单联系我们进行初步咨询和方案推荐。" },
  step2: { id: "Skrining di Singapura", en: "Singapore Screening", zh: "新加坡筛查" },
  step2Desc: { id: "Kami mengatur jadwal, akomodasi, dan transportasi Anda.", en: "We arrange your schedule, accommodation, and transport.", zh: "我们安排您的行程、住宿和交通。" },
  step3: { id: "Program Regeneratif JB (Opsional)", en: "JB Regenerative Programme (Optional)", zh: "JB再生医学项目（可选）" },
  step3Desc: { id: "Akses eksklusif ke European Wellness Center di Puteri Harbour untuk terapi sel dan program regeneratif.", en: "Exclusive access to European Wellness Center at Puteri Harbour for cell therapy and regenerative programmes.", zh: "独家访问 Puteri Harbour 的 European Wellness Center，提供细胞治疗和再生医学项目。" },
  step4: { id: "Tindak Lanjut 90 Hari", en: "90-Day Follow-Up", zh: "90天跟进" },
  step4Desc: { id: "Tim concierge kami membagikan laporan skrining Anda, membantu mengkoordinasikan rujukan spesialis jika diperlukan, dan tetap menghubungi Anda selama 90 hari untuk mendukung langkah selanjutnya.", en: "Our concierge team shares your screening report, helps coordinate any specialist referrals if needed, and stays in touch for 90 days to support your next steps.", zh: "我们的礼宾团队将为您分享筛查报告，协助协调所需的专科转诊，并在90天内持续跟进，支持您的后续健康步骤。" },

  // Add-ons
  addOnsEyebrow: { id: "LAYANAN TAMBAHAN", en: "CONCIERGE ADD-ONS", zh: "礼宾附加服务" },
  addOnsTitle: { id: "Layanan Concierge", en: "Concierge Services", zh: "礼宾服务" },
  addon1: { id: "Limusin", en: "Limousine", zh: "豪华轿车" },
  addon1Desc: { id: "Transfer bandara dan klinik dengan kendaraan premium.", en: "Premium airport and clinic transfers.", zh: "高端机场和诊所接送。" },
  addon2: { id: "Hotel", en: "Hotel", zh: "酒店" },
  addon2Desc: { id: "Akomodasi premium di Singapura dan Johor Bahru.", en: "Premium accommodation in Singapore and Johor Bahru.", zh: "新加坡和柔佛巴鲁的高端住宿。" },
  addon3: { id: "Transportasi Pribadi", en: "Private Transport", zh: "私人交通" },
  addon3Desc: { id: "Transportasi pribadi antar kota termasuk Singapura, JB, dan sekitarnya.", en: "Private inter-city transport including Singapore, JB, and surrounding areas.", zh: "新加坡、JB及周边地区的私人城际交通。" },
  addon4: { id: "Concierge Bahasa", en: "Language Concierge", zh: "语言陪同" },
  addon4Desc: { id: "Pendamping berbahasa Indonesia dan Mandarin sepanjang kunjungan Anda.", en: "Indonesian and Mandarin-speaking companion throughout your visit.", zh: "全程印尼语和中文陪同服务。" },
  addon5: { id: "Terjemahan Rekam Medis", en: "Health Records Translation", zh: "病历翻译" },
  addon5Desc: { id: "Terjemahan profesional dokumen medis Anda.", en: "Professional translation of your medical documents.", zh: "专业医疗文件翻译。" },
  addon6: { id: "Pemantauan 90 Hari", en: "90-Day Monitoring", zh: "90天监测" },
  addon6Desc: { id: "Tindak lanjut kesehatan dengan tim medis kami selama 3 bulan.", en: "Health follow-up with our medical team for 3 months post-screening.", zh: "筛查后3个月内与我们的医疗团队进行健康跟进。" },

  // European Wellness
  ewEyebrow: { id: "MITRA EKSKLUSIF", en: "EXCLUSIVE PARTNER", zh: "独家合作伙伴" },
  ewTitle: { id: "European Wellness", en: "European Wellness", zh: "European Wellness" },
  ewSub: { id: "Didirikan berdasarkan filosofi penilaian, pengobatan, dan pencegahan gangguan kesehatan kronis melalui kedokteran biologis integratif hingga tingkat sel. European Wellness menawarkan terapi sel punca dan layanan biomedis berbasis Swiss di pusat-pusat terakreditasi di seluruh dunia.", en: "Founded on the philosophy of assessing, treating, and preventing chronic health disorders through patient-specific integrative biological medicine down to the cellular level. European Wellness offers Swiss-based cellular therapy and biomedical services at accredited centres worldwide.", zh: "基于评估、治疗和预防慢性健康疾病的理念，通过针对患者的整合生物医学深入细胞层面。European Wellness在全球认证中心提供瑞士细胞治疗和生物医学服务。" },
  ewStat1: { id: "Puteri Harbour, JB — 45 menit dari Singapura", en: "Puteri Harbour, JB — 45 min from Singapore", zh: "Puteri Harbour, JB — 距新加坡45分钟" },
  ewStat2: { id: "30+ tahun protokol Swiss", en: "30+ years Swiss protocols", zh: "30年以上瑞士协议" },
  ewStat3: { id: "Pusat di Jerman, Swiss, Thailand, Malaysia, Yunani", en: "Centres in Germany, Switzerland, Thailand, Malaysia, Greece", zh: "中心遍布德国、瑞士、泰国、马来西亚、希腊" },
  ewStat4: { id: "Akses eksklusif melalui VitaBridge", en: "Exclusive access through VitaBridge", zh: "通过VitaBridge独家通道" },

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
    id: "Hubungi tim concierge kami via WhatsApp atau isi formulir pertanyaan. Kami merespons dalam 2 jam.",
    en: "Reach our concierge team via WhatsApp or submit an enquiry form. We respond within 2 hours.",
    zh: "通过WhatsApp联系我们的礼宾团队或提交咨询表。我们将在2小时内回复。"
  },
  footerCtaBtn: { id: "Hubungi via WhatsApp", en: "Contact via WhatsApp", zh: "WhatsApp 联系" },

  // Footer
  footerDisclaimer: {
    id: "VitaBridge adalah layanan concierge perjalanan kesehatan independen. Tidak berafiliasi dengan atau didukung oleh penyedia yang terdaftar. Harga bersifat indikatif — verifikasi dengan penyedia. Bukan penyedia layanan medis berlisensi.",
    en: "VitaBridge is an independent health travel concierge. Not affiliated with or endorsed by listed providers. Prices are indicative — verify with provider. Not a licensed medical provider.",
    zh: "VitaBridge是独立的健康旅行礼宾服务。与所列机构无附属或背书关系。价格仅供参考——请向机构确认。非持牌医疗服务提供商。"
  },

  // Enquiry Form
  enquiryEyebrow: { id: "FORMULIR PERTANYAAN", en: "ENQUIRY FORM", zh: "咨询表" },
  enquiryTitle: { id: "Kirim Pertanyaan Anda", en: "Send Us Your Enquiry", zh: "发送您的咨询" },
  enquirySub: { id: "Isi formulir di bawah ini dan tim concierge kami akan menghubungi Anda dalam 2 jam.", en: "Fill out the form below and our concierge team will reach out within 2 hours.", zh: "填写以下表格，我们的礼宾团队将在2小时内与您联系。" },
  enquiryName: { id: "Nama Lengkap", en: "Full Name", zh: "姓名" },
  enquiryEmail: { id: "Email", en: "Email", zh: "邮箱" },
  enquiryPhone: { id: "Nomor WhatsApp", en: "WhatsApp Number", zh: "WhatsApp 号码" },
  enquiryLang: { id: "Bahasa Pilihan", en: "Preferred Language", zh: "首选语言" },
  enquiryLangId: { id: "Bahasa Indonesia", en: "Bahasa Indonesia", zh: "印尼语" },
  enquiryLangEn: { id: "English", en: "English", zh: "英文" },
  enquiryLangZh: { id: "中文 (Mandarin)", en: "中文 (Mandarin)", zh: "中文" },
  enquiryMessage: { id: "Pesan / Yang Anda Minati", en: "Message / What are you interested in?", zh: "留言 / 您感兴趣的内容" },
  enquirySubmit: { id: "Kirim Pertanyaan", en: "Submit Enquiry", zh: "提交咨询" },
  enquirySuccess: { id: "Terima kasih! Tim kami akan segera menghubungi Anda.", en: "Thank you! Our team will reach out to you shortly.", zh: "谢谢！我们的团队将尽快与您联系。" },

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
