import React, { useState } from 'react';
import {
  Mountain,
  User,
  PenTool,
  BarChart3,
  BookOpen,
  Briefcase,
  Share2,
  Sparkles,
  Plus,
  Trash2,
  Check,
  ChevronDown,
  ChevronUp,
  Activity,
  Layers,
  Search,
} from 'lucide-react';
import { ProfileData, FeaturedProject, SeoMetric, ThemeId } from '../types';
import { THEME_PRESETS } from '../data/defaults';

interface ProfileEditorProps {
  profile: ProfileData;
  onChange: (updated: ProfileData) => void;
  onOpenAiModal: () => void;
}

export const ProfileEditor: React.FC<ProfileEditorProps> = ({
  profile,
  onChange,
  onOpenAiModal,
}) => {
  const [activeTab, setActiveTab] = useState<'identity' | 'bio' | 'widgets' | 'projects' | 'tools' | 'social'>('identity');

  const updateField = <K extends keyof ProfileData>(key: K, value: ProfileData[K]) => {
    onChange({ ...profile, [key]: value });
  };

  // Helper for array fields
  const handleAddProject = () => {
    const newProj: FeaturedProject = {
      id: 'p_' + Date.now(),
      title: '🏔️ Judul Proyek / Case Study Baru',
      category: 'SEO Case Study',
      description: 'Deskripsi proyek, strategi SEO, dan hasil kenaikan trafik organik.',
      metrics: '+250% Organic Traffic',
      techStack: ['Ahrefs', 'WordPress', 'Markdown'],
      link: 'https://example.com',
      featured: true,
    };
    onChange({
      ...profile,
      featuredProjects: [...profile.featuredProjects, newProj],
    });
  };

  const handleRemoveProject = (id: string) => {
    onChange({
      ...profile,
      featuredProjects: profile.featuredProjects.filter((p) => p.id !== id),
    });
  };

  const handleUpdateProject = (id: string, updatedProj: Partial<FeaturedProject>) => {
    onChange({
      ...profile,
      featuredProjects: profile.featuredProjects.map((p) =>
        p.id === id ? { ...p, ...updatedProj } : p
      ),
    });
  };

  const handleAddMetric = () => {
    const newMetric: SeoMetric = {
      id: 'm_' + Date.now(),
      label: 'Nama Metrik',
      value: '100K+',
      subtext: 'Keterangan metrik',
      iconName: 'TrendingUp',
    };
    onChange({
      ...profile,
      seoMetrics: [...profile.seoMetrics, newMetric],
    });
  };

  const handleRemoveMetric = (id: string) => {
    onChange({
      ...profile,
      seoMetrics: profile.seoMetrics.filter((m) => m.id !== id),
    });
  };

  const handleUpdateMetric = (id: string, updatedMetric: Partial<SeoMetric>) => {
    onChange({
      ...profile,
      seoMetrics: profile.seoMetrics.map((m) =>
        m.id === id ? { ...m, ...updatedMetric } : m
      ),
    });
  };

  return (
    <div className="bg-[#061f16] border border-[#103b29] rounded-2xl p-4 sm:p-6 text-gray-200 shadow-2xl flex flex-col h-full">
      
      {/* Tab Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 border-b border-[#103b29] mb-5 no-scrollbar">
        <button
          onClick={() => setActiveTab('identity')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'identity'
              ? 'bg-[#10b981] text-[#04120c] font-bold shadow-md'
              : 'text-gray-400 hover:text-emerald-300 hover:bg-[#0c3d2a]'
          }`}
        >
          <Mountain className="w-3.5 h-3.5" />
          Identitas & Tema
        </button>

        <button
          onClick={() => setActiveTab('bio')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'bio'
              ? 'bg-[#10b981] text-[#04120c] font-bold shadow-md'
              : 'text-gray-400 hover:text-emerald-300 hover:bg-[#0c3d2a]'
          }`}
        >
          <PenTool className="w-3.5 h-3.5" />
          Bio & Narasi
        </button>

        <button
          onClick={() => setActiveTab('widgets')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'widgets'
              ? 'bg-[#10b981] text-[#04120c] font-bold shadow-md'
              : 'text-gray-400 hover:text-emerald-300 hover:bg-[#0c3d2a]'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          Widget Animasi
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'projects'
              ? 'bg-[#10b981] text-[#04120c] font-bold shadow-md'
              : 'text-gray-400 hover:text-emerald-300 hover:bg-[#0c3d2a]'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          Case Study & Karya
        </button>

        <button
          onClick={() => setActiveTab('tools')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'tools'
              ? 'bg-[#10b981] text-[#04120c] font-bold shadow-md'
              : 'text-gray-400 hover:text-emerald-300 hover:bg-[#0c3d2a]'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          SEO Tools
        </button>

        <button
          onClick={() => setActiveTab('social')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'social'
              ? 'bg-[#10b981] text-[#04120c] font-bold shadow-md'
              : 'text-gray-400 hover:text-emerald-300 hover:bg-[#0c3d2a]'
          }`}
        >
          <Share2 className="w-3.5 h-3.5" />
          Kontak & RSS
        </button>
      </div>

      {/* Tab Content Container */}
      <div className="space-y-6 overflow-y-auto pr-1 flex-1">
        
        {/* TAB 1: Identitas & Tema */}
        {activeTab === 'identity' && (
          <div className="space-y-5">
            <div className="bg-[#0c3d2a] p-4 rounded-xl border border-[#103b29]">
              <h3 className="text-xs font-bold text-[#10b981] uppercase tracking-[0.2em] flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-[#10b981] rounded-full mr-1"></span>
                Pilih Presets Warna Hijau Gelap & Gunung
              </h3>
              <p className="text-xs text-gray-300 mb-3">
                Ubah nuansa visual header SVG banner, badges, dan grafik GitHub Stats.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.values(THEME_PRESETS).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => updateField('theme', t.id as ThemeId)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                      profile.theme === t.id
                        ? 'bg-[#082a1d] border-[#10b981] ring-2 ring-[#10b981]/30'
                        : 'bg-[#04120c] border-[#103b29] hover:border-emerald-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white mb-1">{t.name}</div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full inline-block border border-black/50"
                          style={{ backgroundColor: t.primary }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full inline-block border border-black/50"
                          style={{ backgroundColor: t.accent }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full inline-block border border-black/50"
                          style={{ backgroundColor: t.darkBg }}
                        />
                      </div>
                    </div>
                    {profile.theme === t.id && (
                      <Check className="w-4 h-4 text-[#10b981]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  GitHub Username
                </label>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => updateField('username', e.target.value)}
                  placeholder="falahamri"
                  className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-2 text-xs font-mono text-[#10b981] focus:outline-none focus:border-[#10b981]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  placeholder="Falah Amri"
                  className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10b981]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Spesialisasi / Peran Profesional
              </label>
              <input
                type="text"
                value={profile.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="Senior SEO Specialist & Tech/Outdoor Content Writer"
                className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10b981]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Slogan Bertema Gunung / Outdoor Tagline
              </label>
              <input
                type="text"
                value={profile.mountainTagline}
                onChange={(e) => updateField('mountainTagline', e.target.value)}
                placeholder="Scaling Search Engine Peaks & Crafting Compelling Narratives 🏔️✨"
                className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10b981]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Lokasi / Domisili
                </label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => updateField('location', e.target.value)}
                  placeholder="Bandung, Indonesia 🇮🇩"
                  className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10b981]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Target Puncak Gunung & Target SEO
                </label>
                <input
                  type="text"
                  value={profile.currentPeakGoal}
                  onChange={(e) => updateField('currentPeakGoal', e.target.value)}
                  placeholder="Mount Rinjani 3,726m & 1M Organic Visitors"
                  className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10b981]"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Bio & AI Copywriter */}
        {activeTab === 'bio' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between bg-[#0c3d2a] p-4 rounded-xl border border-[#103b29]">
              <div>
                <h4 className="text-xs font-bold text-[#10b981] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#10b981]" />
                  Gemini AI Professional Bio Writer
                </h4>
                <p className="text-[11px] text-gray-300">
                  Biarkan AI menyusun narasi profil profesional Penulis & SEO Specialist bertema gunung.
                </p>
              </div>
              <button
                onClick={onOpenAiModal}
                className="px-3 py-1.5 bg-[#10b981] hover:bg-[#10b981]/90 text-[#04120c] font-bold text-xs rounded-lg transition-all shadow-md flex items-center gap-1.5 shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Buat dengan AI
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Bio Paragraf 1 (Fokus Profesional Penulis & SEO)
              </label>
              <textarea
                rows={4}
                value={profile.bioParagraph1}
                onChange={(e) => updateField('bioParagraph1', e.target.value)}
                className="w-full bg-[#04120c] border border-[#103b29] rounded-xl p-3 text-xs text-gray-200 focus:outline-none focus:border-[#10b981] leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Bio Paragraf 2 (Passion Pendaki Gunung & Hobi Outdoor)
              </label>
              <textarea
                rows={3}
                value={profile.bioParagraph2}
                onChange={(e) => updateField('bioParagraph2', e.target.value)}
                className="w-full bg-[#04120c] border border-[#103b29] rounded-xl p-3 text-xs text-gray-200 focus:outline-none focus:border-[#10b981] leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Poin Keunggulan Utama (Value Proposition)
              </label>
              <div className="space-y-2">
                {profile.valuePoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => {
                        const updated = [...profile.valuePoints];
                        updated[index] = e.target.value;
                        updateField('valuePoints', updated);
                      }}
                      className="flex-1 bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-[#10b981]"
                    />
                    <button
                      onClick={() => {
                        const updated = profile.valuePoints.filter((_, i) => i !== index);
                        updateField('valuePoints', updated);
                      }}
                      className="p-2 text-red-400 hover:bg-red-950/40 rounded-lg transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() =>
                    updateField('valuePoints', [
                      ...profile.valuePoints,
                      '✨ Poin keunggulan baru...',
                    ])
                  }
                  className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 pt-1 font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Tambah Poin Keunggulan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Widget Animasi & GitHub Stats */}
        {activeTab === 'widgets' && (
          <div className="space-y-4">
            <p className="text-xs text-gray-400 mb-2">
              Aktifkan widget visual animasi & statistik kontribusi GitHub yang akan diperbarui secara otomatis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center justify-between p-3 rounded-xl bg-[#051009] border border-[#133020] cursor-pointer hover:border-emerald-800">
                <div>
                  <span className="text-xs font-bold text-white block">🐍 Snake Contribution Graph</span>
                  <span className="text-[11px] text-gray-400">Animasi Ular Kontribusi GitHub</span>
                </div>
                <input
                  type="checkbox"
                  checked={profile.showSnakeAnimation}
                  onChange={(e) => updateField('showSnakeAnimation', e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#051009] border border-[#133020] cursor-pointer hover:border-emerald-800">
                <div>
                  <span className="text-xs font-bold text-white block">📊 GitHub Stats Card</span>
                  <span className="text-[11px] text-gray-400">Total Commits, PRs, Stars</span>
                </div>
                <input
                  type="checkbox"
                  checked={profile.showGithubStats}
                  onChange={(e) => updateField('showGithubStats', e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#051009] border border-[#133020] cursor-pointer hover:border-emerald-800">
                <div>
                  <span className="text-xs font-bold text-white block">🔥 GitHub Streak Stats</span>
                  <span className="text-[11px] text-gray-400">Jumlah Hari Berturut-turut Active</span>
                </div>
                <input
                  type="checkbox"
                  checked={profile.showStreakStats}
                  onChange={(e) => updateField('showStreakStats', e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#051009] border border-[#133020] cursor-pointer hover:border-emerald-800">
                <div>
                  <span className="text-xs font-bold text-white block">💡 Dynamic Daily Quote / SEO Tip</span>
                  <span className="text-[11px] text-gray-400">Otomatis Diperbarui GitHub Actions</span>
                </div>
                <input
                  type="checkbox"
                  checked={profile.showDailyQuoteWidget}
                  onChange={(e) => updateField('showDailyQuoteWidget', e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#051009] border border-[#133020] cursor-pointer hover:border-emerald-800">
                <div>
                  <span className="text-xs font-bold text-white block">🌐 Top Languages Card</span>
                  <span className="text-[11px] text-gray-400">Bahasa Pemrograman & Format</span>
                </div>
                <input
                  type="checkbox"
                  checked={profile.showTopLangs}
                  onChange={(e) => updateField('showTopLangs', e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#051009] border border-[#133020] cursor-pointer hover:border-emerald-800">
                <div>
                  <span className="text-xs font-bold text-white block">⛰️ Outdoor Metrics Table</span>
                  <span className="text-[11px] text-gray-400">Tabel Pencapaian Trafik & Pendakian</span>
                </div>
                <input
                  type="checkbox"
                  checked={profile.showSeoMetrics}
                  onChange={(e) => updateField('showSeoMetrics', e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded"
                />
              </label>
            </div>
          </div>
        )}

        {/* TAB 4: Case Studies & Proyek Unggulan */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            
            {/* Metrik SEO Showcase */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  📈 Metrik Pencapaian Utama (4 Grid)
                </h4>
                <button
                  onClick={handleAddMetric}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Tambah Metrik
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.seoMetrics.map((metric) => (
                  <div key={metric.id} className="p-3 bg-[#051009] border border-[#133020] rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={metric.label}
                        onChange={(e) => handleUpdateMetric(metric.id, { label: e.target.value })}
                        placeholder="Label Metrik"
                        className="bg-transparent text-xs font-bold text-white focus:outline-none border-b border-transparent focus:border-emerald-500 w-2/3"
                      />
                      <button
                        onClick={() => handleRemoveMetric(metric.id)}
                        className="text-red-400 hover:text-red-300 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={metric.value}
                      onChange={(e) => handleUpdateMetric(metric.id, { value: e.target.value })}
                      placeholder="Nilai (misal: 2.4M+)"
                      className="w-full bg-[#09180F] border border-[#133020] rounded-lg px-2.5 py-1 text-xs font-mono text-emerald-300"
                    />
                    <input
                      type="text"
                      value={metric.subtext}
                      onChange={(e) => handleUpdateMetric(metric.id, { subtext: e.target.value })}
                      placeholder="Catatan Singkat"
                      className="w-full bg-[#09180F] border border-[#133020] rounded-lg px-2.5 py-1 text-[11px] text-gray-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Proyek Unggulan */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  🚀 Proyek Unggulan / Case Study / eBook
                </h4>
                <button
                  onClick={handleAddProject}
                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow"
                >
                  <Plus className="w-3.5 h-3.5" /> Tambah Proyek
                </button>
              </div>

              <div className="space-y-4">
                {profile.featuredProjects.map((p) => (
                  <div key={p.id} className="p-4 bg-[#051009] border border-[#133020] rounded-xl space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={p.title}
                        onChange={(e) => handleUpdateProject(p.id, { title: e.target.value })}
                        placeholder="Judul Proyek"
                        className="bg-transparent text-xs font-bold text-emerald-300 focus:outline-none border-b border-transparent focus:border-emerald-500 flex-1"
                      />
                      <button
                        onClick={() => handleRemoveProject(p.id)}
                        className="text-red-400 hover:text-red-300 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-gray-400 mb-1">Kategori</label>
                        <select
                          value={p.category}
                          onChange={(e) =>
                            handleUpdateProject(p.id, { category: e.target.value as any })
                          }
                          className="w-full bg-[#09180F] border border-[#133020] rounded-lg px-2 py-1 text-xs text-white"
                        >
                          <option value="SEO Case Study">SEO Case Study</option>
                          <option value="E-Book / Publication">E-Book / Publication</option>
                          <option value="SEO Tool / Script">SEO Tool / Script</option>
                          <option value="Content Project">Content Project</option>
                          <option value="Outdoor Guide">Outdoor Guide</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] text-gray-400 mb-1">Hasil / Metrik Utama</label>
                        <input
                          type="text"
                          value={p.metrics || ''}
                          onChange={(e) => handleUpdateProject(p.id, { metrics: e.target.value })}
                          placeholder="+340% Organic Clicks"
                          className="w-full bg-[#09180F] border border-[#133020] rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-gray-400 mb-1">Deskripsi Proyek</label>
                      <textarea
                        rows={2}
                        value={p.description}
                        onChange={(e) => handleUpdateProject(p.id, { description: e.target.value })}
                        className="w-full bg-[#09180F] border border-[#133020] rounded-lg p-2 text-xs text-gray-200"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-gray-400 mb-1">Link Proyek / Website</label>
                        <input
                          type="text"
                          value={p.link || ''}
                          onChange={(e) => handleUpdateProject(p.id, { link: e.target.value })}
                          placeholder="https://..."
                          className="w-full bg-[#09180F] border border-[#133020] rounded-lg px-2 py-1 text-xs text-gray-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-gray-400 mb-1">Tools Digunakan (Pisahkan Koma)</label>
                        <input
                          type="text"
                          value={p.techStack ? p.techStack.join(', ') : ''}
                          onChange={(e) =>
                            handleUpdateProject(p.id, {
                              techStack: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                            })
                          }
                          placeholder="Ahrefs, WordPress, Python"
                          className="w-full bg-[#09180F] border border-[#133020] rounded-lg px-2 py-1 text-xs text-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: Tools & Tech Stack */}
        {activeTab === 'tools' && (
          <div className="space-y-4">
            <p className="text-xs text-gray-400 mb-2">
              Kategori alat bantu SEO, aplikasi penulisan, dan pustaka otomasi yang Anda kuasai.
            </p>

            {profile.toolsAndTech.map((category, catIdx) => (
              <div key={catIdx} className="p-4 bg-[#051009] border border-[#133020] rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-emerald-300">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((t, toolIdx) => (
                    <span
                      key={toolIdx}
                      className="px-2.5 py-1 bg-[#09180F] border border-[#133020] rounded-lg text-xs font-medium text-gray-200 flex items-center gap-1.5"
                    >
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: `#${t.color}` }}
                      />
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 6: Media Sosial & RSS Feed */}
        {activeTab === 'social' && (
          <div className="space-y-4">
            <div className="bg-[#0D2115] p-3 rounded-xl border border-emerald-900/50 mb-3">
              <h4 className="text-xs font-bold text-emerald-400 mb-1">
                🔄 GitHub Actions Blog RSS Sync (Opsional)
              </h4>
              <p className="text-[11px] text-gray-400 mb-2">
                Masukkan URL RSS Feed Medium/Substack/Blog untuk memperbarui daftar artikel terbaru secara otomatis.
              </p>
              <input
                type="text"
                value={profile.rssFeedUrl || ''}
                onChange={(e) => updateField('rssFeedUrl', e.target.value)}
                placeholder="https://medium.com/feed/@falahamri"
                className="w-full bg-[#051009] border border-[#133020] rounded-lg px-3 py-1.5 text-xs text-emerald-300 font-mono"
              />
            </div>

            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Link Media Sosial & Kontak Badges
            </h4>

            <div className="space-y-2">
              {profile.socialLinks.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#051009] border border-[#133020] rounded-xl flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="checkbox"
                      checked={s.enabled}
                      onChange={(e) => {
                        const updated = [...profile.socialLinks];
                        updated[idx].enabled = e.target.checked;
                        updateField('socialLinks', updated);
                      }}
                      className="w-4 h-4 accent-emerald-500 rounded"
                    />
                    <span className="text-xs font-bold text-white w-28">{s.platform}</span>
                    <input
                      type="text"
                      value={s.url}
                      onChange={(e) => {
                        const updated = [...profile.socialLinks];
                        updated[idx].url = e.target.value;
                        updateField('socialLinks', updated);
                      }}
                      placeholder="URL Lengkap (https://...)"
                      className="flex-1 bg-[#09180F] border border-[#133020] rounded-lg px-2.5 py-1 text-xs text-gray-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
