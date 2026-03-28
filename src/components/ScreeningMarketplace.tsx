import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Check, X as XIcon, MessageCircle, ArrowLeftRight, ArrowUpDown } from 'lucide-react';
import { Lang, t, waLink } from '@/data/translations';
import { PROVIDERS, type Provider, type Package } from '@/data/providers';
import CategoryAccordion from './CategoryAccordion';

interface MarketplaceProps {
  lang: Lang;
}

type SortMode = 'default' | 'price-asc' | 'price-desc';

const ScreeningMarketplace = ({ lang }: MarketplaceProps) => {
  const [selectedProvider, setSelectedProvider] = useState(0);
  const [genderFilter, setGenderFilter] = useState<'all' | 'Male' | 'Female'>('all');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>('default');

  const provider = PROVIDERS[selectedProvider];

  const filteredPackages = useMemo(() => {
    let pkgs = provider.packages.filter(pkg => {
      if (genderFilter === 'all') return true;
      if (!pkg.gender) return true;
      return pkg.gender === genderFilter;
    });
    if (sortMode === 'price-asc') pkgs = [...pkgs].sort((a, b) => a.price_sgd - b.price_sgd);
    if (sortMode === 'price-desc') pkgs = [...pkgs].sort((a, b) => b.price_sgd - a.price_sgd);
    return pkgs;
  }, [provider, genderFilter, sortMode]);

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const comparePackages = useMemo(() => {
    const allPkgs = PROVIDERS.flatMap(p => p.packages.map(pkg => ({ ...pkg, providerName: p.name })));
    return compareIds.map(id => allPkgs.find(p => p.id === id)!).filter(Boolean);
  }, [compareIds]);

  const allCategories = useMemo(() => {
    if (comparePackages.length === 0) return [];
    const catSet = new Set<string>();
    comparePackages.forEach(pkg => {
      pkg.categories.forEach(cat => {
        if (cat.tests.length > 0) catSet.add(cat.name);
      });
    });
    return Array.from(catSet);
  }, [comparePackages]);

  const badgeLabel = (badge: string | null) => {
    switch (badge) {
      case 'featured': return 'Featured';
      case 'ultra-premium': return 'Ultra Premium';
      case 'most-trusted': return 'Most Trusted';
      default: return null;
    }
  };

  const totalTests = (pkg: Package) => pkg.categories.reduce((acc, c) => acc + c.tests.length, 0);
  const topCategories = (pkg: Package) => pkg.categories.filter(c => c.tests.length > 0).slice(0, 3).map(c => c.name).join(' · ');

  return (
    <section id="marketplace" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow justify-center mb-4">{t.marketplaceEyebrow[lang]}</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-[1.15] mb-4">{t.marketplaceTitle[lang]}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto">{t.marketplaceSub[lang]}</p>
        </motion.div>

        {/* Provider Selector */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-3 mb-10 pb-2 scrollbar-hide snap-x snap-mandatory">
          {PROVIDERS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => { setSelectedProvider(i); setGenderFilter('all'); setSortMode('default'); }}
              className={`flex-shrink-0 snap-start px-5 py-4 sm:px-6 sm:py-5 rounded-sm border transition-all duration-200 text-left min-w-[200px] sm:min-w-[240px] ${
                selectedProvider === i
                  ? 'border-primary bg-background shadow-sm border-t-2 border-t-primary'
                  : 'border-border bg-secondary hover:border-primary/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground">{p.shortName}</span>
                {p.badge && (
                  <span className="text-[10px] font-medium uppercase tracking-wider text-gold-text bg-primary/10 px-2 py-0.5 rounded-sm">
                    {badgeLabel(p.badge)}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-1 line-clamp-1">{p.tagline}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                {p.location}
              </div>
              <span className="text-[10px] text-muted-foreground mt-1 block">{p.packages.length} {lang === 'id' ? 'paket' : lang === 'zh' ? '个方案' : 'packages'}</span>
            </button>
          ))}
          </div>
          {/* Scroll fade hint */}
          <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none sm:hidden" />
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            {/* Gender filter */}
            <div className="flex items-center gap-1 bg-secondary rounded-sm p-0.5">
              {(['all', 'Male', 'Female'] as const).map(g => (
                <button
                  key={g}
                  onClick={() => setGenderFilter(g)}
                  className={`px-4 py-2.5 text-sm font-medium tracking-wide transition-all rounded-sm ${
                    genderFilter === g ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {g === 'all' ? t.filterAll[lang] : g === 'Male' ? t.filterMale[lang] : t.filterFemale[lang]}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-1 bg-secondary rounded-sm p-0.5">
              {([
                { key: 'default' as SortMode, label: lang === 'id' ? 'Urutan' : lang === 'zh' ? '排序' : 'Default' },
                { key: 'price-asc' as SortMode, label: lang === 'id' ? 'Harga ↑' : lang === 'zh' ? '价格 ↑' : 'Price ↑' },
                { key: 'price-desc' as SortMode, label: lang === 'id' ? 'Harga ↓' : lang === 'zh' ? '价格 ↓' : 'Price ↓' },
              ]).map(s => (
                <button
                  key={s.key}
                  onClick={() => setSortMode(s.key)}
                  className={`px-3 py-2.5 text-sm font-medium tracking-wide transition-all rounded-sm flex items-center gap-1 ${
                    sortMode === s.key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {s.key === 'default' && <ArrowUpDown className="w-3.5 h-3.5" />}
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {compareIds.length >= 2 && (
            <button
              onClick={() => setShowCompare(true)}
              className="btn-gold text-sm flex items-center gap-2"
            >
              <ArrowLeftRight className="w-4 h-4" />
              {t.compareBtn[lang]} ({compareIds.length})
            </button>
          )}
        </div>

        {/* Compare View */}
        <AnimatePresence>
          {showCompare && comparePackages.length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl text-foreground">{t.compareTitle[lang]}</h3>
                <button
                  onClick={() => { setShowCompare(false); setCompareIds([]); }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.clearCompare[lang]}
                </button>
              </div>
              <div className="overflow-x-auto border border-border rounded-sm">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-secondary z-10">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground min-w-[160px] sticky left-0 bg-secondary z-20"></th>
                      {comparePackages.map(pkg => (
                        <th key={pkg.id} className="p-4 text-left min-w-[200px]">
                          <div className="font-serif text-xl text-foreground">{pkg.name}</div>
                          <div className="text-sm text-muted-foreground">{(pkg as any).providerName}</div>
                          <div className="font-serif text-2xl text-gold-text mt-1">{pkg.price_display}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-4 text-sm font-medium text-muted-foreground sticky left-0 bg-card">Tier</td>
                      {comparePackages.map(pkg => <td key={pkg.id} className="p-4 text-sm text-foreground">{pkg.tier}</td>)}
                    </tr>
                    <tr className="border-t border-border bg-secondary/50">
                      <td className="p-4 text-sm font-medium text-muted-foreground sticky left-0 bg-secondary/50">Duration</td>
                      {comparePackages.map(pkg => <td key={pkg.id} className="p-4 text-sm text-foreground">{pkg.duration}</td>)}
                    </tr>
                    {allCategories.map((catName, ci) => (
                      <tr key={ci} className={`border-t border-border ${ci % 2 ? 'bg-secondary/30' : ''}`}>
                        <td className={`p-4 text-sm text-muted-foreground sticky left-0 ${ci % 2 ? 'bg-secondary/30' : 'bg-card'}`}>
                          {catName}
                        </td>
                        {comparePackages.map(pkg => {
                          const has = pkg.categories.some(
                            c => c.name === catName && c.tests.length > 0
                          );
                          return (
                            <td key={pkg.id} className="p-4 text-center">
                              {has
                                ? <Check className="w-4 h-4 text-green mx-auto" />
                                : <span className="text-muted-foreground/30 text-lg leading-none">—</span>}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    <tr className="border-t border-border">
                      <td className="p-4 sticky left-0 bg-card"></td>
                      {comparePackages.map(pkg => (
                        <td key={pkg.id} className="p-4">
                          <a
                            href={waLink(lang, pkg.name, (pkg as any).providerName)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold text-sm w-full flex items-center justify-center gap-1.5"
                          >
                            <MessageCircle className="w-4 h-4" />
                            {t.enquireViaWa[lang]}
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Package Cards Grid */}
        {!showCompare && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPackages.map((pkg, i) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                provider={provider}
                lang={lang}
                index={i}
                isComparing={compareIds.includes(pkg.id)}
                onToggleCompare={() => toggleCompare(pkg.id)}
                compareDisabled={!compareIds.includes(pkg.id) && compareIds.length >= 3}
                totalTests={totalTests(pkg)}
                topCategories={topCategories(pkg)}
              />
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 py-5 border-t border-border text-center"
        >
          <p className="text-xs text-muted-foreground">{t.disclaimer[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
};

// Package Card Component
interface PackageCardProps {
  pkg: Package;
  provider: Provider;
  lang: Lang;
  index: number;
  isComparing: boolean;
  onToggleCompare: () => void;
  compareDisabled: boolean;
  totalTests: number;
  topCategories: string;
}

const PackageCard = ({ pkg, provider, lang, index, isComparing, onToggleCompare, compareDisabled, totalTests, topCategories }: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`border rounded-sm bg-card flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        pkg.featured ? 'border-primary shadow-md ring-1 ring-primary/10' : 'border-border hover:border-primary/30'
      }`}
    >
      {/* Header */}
      <div className={`p-4 sm:p-6 pb-4 ${pkg.featured ? 'border-t-2 border-t-primary bg-primary/[0.02]' : ''}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-text">{pkg.tier}</span>
            {pkg.featured && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-gold-text bg-primary/10 px-2.5 py-1 rounded-sm">
                <Star className="w-3 h-3" /> Featured
              </span>
            )}
          </div>
          <label className="flex items-center gap-1.5 cursor-pointer text-xs text-muted-foreground hover:text-foreground transition-colors">
            <input
              type="checkbox"
              checked={isComparing}
              onChange={onToggleCompare}
              disabled={compareDisabled}
              className="w-4 h-4 rounded-sm border-border text-primary focus:ring-primary accent-primary"
            />
            {t.addToCompare[lang]}
          </label>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-1">{pkg.name}</h3>
        <p className="font-serif text-xl sm:text-2xl text-gold-text mb-4 font-medium">{pkg.price_display}</p>

        {/* Summary bar */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-medium text-foreground bg-secondary px-2.5 py-1.5 rounded-sm">{totalTests} tests</span>
          <span className="text-xs font-medium text-foreground bg-secondary px-2.5 py-1.5 rounded-sm">{pkg.duration}</span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-1">{topCategories}</p>

        <div className="mt-3 space-y-1.5">
          <p className="text-base text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">{t.bestFor[lang]}</span> {pkg.best_for}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 sm:px-6 flex-1 min-h-[180px]">
        <div className="border-t border-border pt-4 mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-text mb-4">{t.whatsIncluded[lang]}</p>
          {pkg.categories.map((cat, ci) => (
            <CategoryAccordion key={ci} category={cat} defaultOpen={ci < 2} />
          ))}
        </div>

        {/* Not included */}
        {pkg.not_included.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{t.notIncluded[lang]}</p>
            <div className="flex flex-wrap gap-2">
              {pkg.not_included.map((item, ni) => (
                <span key={ni} className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2.5 py-1.5 rounded-sm">
                  <XIcon className="w-3 h-3" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 sm:p-6 pt-4 border-t border-border mt-auto">
        <a
          href={waLink(lang, pkg.name, provider.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-sm w-full flex items-center justify-center gap-2 py-3.5"
        >
          <MessageCircle className="w-4 h-4" />
          {lang === 'id' ? `Tanya tentang ${pkg.name}` : lang === 'zh' ? `咨询 ${pkg.name}` : `Enquire about ${pkg.name}`}
        </a>
      </div>
    </motion.div>
  );
};

export default ScreeningMarketplace;
