import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Check, X as XIcon, MessageCircle, ArrowLeftRight } from 'lucide-react';
import { Lang, t, waLink } from '@/data/translations';
import { PROVIDERS, type Provider, type Package } from '@/data/providers';
import CategoryAccordion from './CategoryAccordion';

interface MarketplaceProps {
  lang: Lang;
}

const ScreeningMarketplace = ({ lang }: MarketplaceProps) => {
  const [selectedProvider, setSelectedProvider] = useState(0);
  const [genderFilter, setGenderFilter] = useState<'all' | 'Male' | 'Female'>('all');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const provider = PROVIDERS[selectedProvider];

  const filteredPackages = useMemo(() => {
    return provider.packages.filter(pkg => {
      if (genderFilter === 'all') return true;
      if (!pkg.gender) return true;
      return pkg.gender === genderFilter;
    });
  }, [provider, genderFilter]);

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

  const allTests = useMemo(() => {
    if (comparePackages.length === 0) return [];
    const testSet = new Set<string>();
    comparePackages.forEach(pkg => {
      pkg.categories.forEach(cat => {
        cat.tests.forEach(test => testSet.add(test));
      });
    });
    return Array.from(testSet);
  }, [comparePackages]);

  const badgeLabel = (badge: string | null) => {
    switch (badge) {
      case 'featured': return 'Featured';
      case 'ultra-premium': return 'Ultra Premium';
      case 'most-trusted': return 'Most Trusted';
      default: return null;
    }
  };

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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">{t.marketplaceTitle[lang]}</h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">{t.marketplaceSub[lang]}</p>
        </motion.div>

        {/* Provider Selector */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-2 scrollbar-hide">
          {PROVIDERS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => { setSelectedProvider(i); setGenderFilter('all'); }}
              className={`flex-shrink-0 px-6 py-5 rounded-sm border transition-all duration-200 text-left min-w-[220px] ${
                selectedProvider === i
                  ? 'border-primary bg-background shadow-sm border-t-2 border-t-primary'
                  : 'border-border bg-secondary hover:border-primary/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm font-medium text-foreground">{p.shortName}</span>
                {p.badge && (
                  <span className="text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
                    {badgeLabel(p.badge)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                {p.location}
              </div>
            </button>
          ))}
        </div>

        {/* Gender Filter + Compare Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-1 bg-secondary rounded-sm p-0.5">
            {(['all', 'Male', 'Female'] as const).map(g => (
              <button
                key={g}
                onClick={() => setGenderFilter(g)}
                className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all rounded-sm ${
                  genderFilter === g ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {g === 'all' ? t.filterAll[lang] : g === 'Male' ? t.filterMale[lang] : t.filterFemale[lang]}
              </button>
            ))}
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
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground min-w-[180px]"></th>
                      {comparePackages.map(pkg => (
                        <th key={pkg.id} className="p-4 text-left min-w-[200px]">
                          <div className="font-serif text-xl text-foreground">{pkg.name}</div>
                          <div className="text-sm text-muted-foreground">{(pkg as any).providerName}</div>
                          <div className="font-serif text-xl text-primary mt-1">{pkg.price_display}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-4 text-sm font-medium text-muted-foreground">Tier</td>
                      {comparePackages.map(pkg => <td key={pkg.id} className="p-4 text-sm text-foreground">{pkg.tier}</td>)}
                    </tr>
                    <tr className="border-t border-border bg-secondary/50">
                      <td className="p-4 text-sm font-medium text-muted-foreground">Duration</td>
                      {comparePackages.map(pkg => <td key={pkg.id} className="p-4 text-sm text-foreground">{pkg.duration}</td>)}
                    </tr>
                    {allTests.map((test, ti) => (
                      <tr key={ti} className={`border-t border-border ${ti % 2 ? 'bg-secondary/30' : ''}`}>
                        <td className="p-4 text-sm text-muted-foreground">{test}</td>
                        {comparePackages.map(pkg => {
                          const has = pkg.categories.some(c => c.tests.includes(test));
                          return (
                            <td key={pkg.id} className="p-4">
                              {has ? (
                                <Check className="w-4 h-4 text-green" />
                              ) : (
                                <span className="text-muted-foreground/30">—</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    <tr className="border-t border-border">
                      <td className="p-4"></td>
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
}

const PackageCard = ({ pkg, provider, lang, index, isComparing, onToggleCompare, compareDisabled }: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`border rounded-sm bg-card flex flex-col transition-all duration-300 hover:shadow-lg ${
        pkg.featured ? 'border-primary shadow-md ring-1 ring-primary/10' : 'border-border hover:border-primary/30'
      }`}
    >
      {/* Header */}
      <div className={`p-6 pb-5 ${pkg.featured ? 'border-t-2 border-t-primary bg-primary/[0.02]' : ''}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{pkg.tier}</span>
          {pkg.featured && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-sm">
              <Star className="w-3 h-3" /> Featured
            </span>
          )}
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-1">{pkg.name}</h3>
        <p className="font-serif text-3xl text-primary mb-4">{pkg.price_display}</p>
        <div className="space-y-1.5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">{t.bestFor[lang]}</span> {pkg.best_for}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{t.duration[lang]}</span> {pkg.duration}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 flex-1">
        <div className="border-t border-border pt-4 mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t.whatsIncluded[lang]}</p>
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
      <div className="p-6 pt-4 border-t border-border mt-auto space-y-3">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
          <input
            type="checkbox"
            checked={isComparing}
            onChange={onToggleCompare}
            disabled={compareDisabled}
            className="w-4 h-4 rounded-sm border-border text-primary focus:ring-primary accent-primary"
          />
          {t.addToCompare[lang]}
        </label>
        <a
          href={waLink(lang, pkg.name, provider.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-sm w-full flex items-center justify-center gap-2 py-3"
        >
          <MessageCircle className="w-4 h-4" />
          {t.enquireViaWa[lang]}
        </a>
      </div>
    </motion.div>
  );
};

export default ScreeningMarketplace;
