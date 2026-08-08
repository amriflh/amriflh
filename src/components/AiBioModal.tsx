import React, { useState } from 'react';
import { X, Sparkles, Loader2, Check, RefreshCw } from 'lucide-react';
import { ProfileData, AiGeneratedBio } from '../types';

interface AiBioModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onApplyBio: (bioData: AiGeneratedBio) => void;
}

export const AiBioModal: React.FC<AiBioModalProps> = ({
  isOpen,
  onClose,
  profile,
  onApplyBio,
}) => {
  const [role, setRole] = useState<string>(profile.title || 'Penulis & SEO Specialist');
  const [skills, setSkills] = useState<string>(
    'Keyword Research, Content Strategy, On-Page SEO, Copywriting, Technical SEO'
  );
  const [outdoorAngle, setOutdoorAngle] = useState<string>(
    'Gemar mendaki gunung, petualangan di ketinggian, filosofi ketahanan dan fokus mencapai puncak'
  );
  const [tone, setTone] = useState<string>('Profesional, Tepercaya, Inspiratif & Bertema Alam/Gunung');
  const [language, setLanguage] = useState<string>('Indonesian');

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedBio, setGeneratedBio] = useState<AiGeneratedBio | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-bio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: profile.fullName || profile.username,
          role,
          skills,
          outdoorFocus: outdoorAngle,
          tone,
          language,
        }),
      });

      const json = await response.json();
      if (!json.success || !json.data) {
        throw new Error(json.error || 'Gagal menghasilkan narasi AI.');
      }

      setGeneratedBio(json.data);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat menghubungi API Gemini.');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = () => {
    if (generatedBio) {
      const cleanedData: AiGeneratedBio = {
        tagline: generatedBio.tagline?.replace(/\*\*/g, '') || '',
        bioParagraphs: (generatedBio.bioParagraphs || []).map((p) => p.replace(/\*\*/g, '')),
        valuePoints: (generatedBio.valuePoints || []).map((vp) => vp.replace(/\*\*/g, '')),
      };
      onApplyBio(cleanedData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#061f16] border border-[#103b29] rounded-2xl max-w-xl w-full p-4 sm:p-6 text-gray-100 shadow-2xl space-y-4 sm:space-y-5 relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#103b29] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0c3d2a] border border-[#103b29] flex items-center justify-center text-[#10b981]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Gemini AI Writer & SEO Copywriter</h3>
              <p className="text-[11px] text-[#10b981]">Susun bio narasi profesional bertema pendaki gunung</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-[#0c3d2a]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Peran Utama & Posisi
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#10b981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Keahlian Utama / Skills SEO & Penulisan
            </label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#10b981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Metafora Pendakian Gunung / Outdoor Angle
            </label>
            <input
              type="text"
              value={outdoorAngle}
              onChange={(e) => setOutdoorAngle(e.target.value)}
              className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#10b981]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Gaya Nada (Tone)</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-1.5 text-xs text-white"
              >
                <option value="Profesional, Tepercaya, Inspiratif & Bertema Alam/Gunung">
                  Profesional & Gunung
                </option>
                <option value="Format Singkat Padat Berwibawa">Format Singkat & Executive</option>
                <option value="Kasual Santai Berpengalaman">Kasual & Friendly Explorer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Bahasa Output</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-[#04120c] border border-[#103b29] rounded-xl px-3 py-1.5 text-xs text-white"
              >
                <option value="Indonesian">Bahasa Indonesia</option>
                <option value="English">English</option>
                <option value="Bilingual">Bilingual (ID & EN)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs rounded-xl">
            {error}
          </div>
        )}

        {/* Generated Result Preview */}
        {generatedBio && (
          <div className="bg-[#04120c] p-4 rounded-xl border border-[#103b29] space-y-3 max-h-52 overflow-y-auto">
            <h4 className="text-[11px] font-bold text-[#10b981] uppercase tracking-[0.2em]">
              ✨ Hasil Generasi AI:
            </h4>
            <div className="text-xs text-gray-200 space-y-2 leading-relaxed">
              <p className="font-semibold text-[#10b981]">"{generatedBio.tagline}"</p>
              {generatedBio.bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-[#103b29]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white"
          >
            Batal
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-4 py-2 bg-[#0c3d2a] hover:bg-[#10b981] hover:text-[#04120c] text-[#10b981] font-semibold text-xs rounded-xl border border-[#103b29] transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#10b981]" />
                  <span>Memproses Gemini...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{generatedBio ? 'Generasi Ulang' : 'Generate Bio'}</span>
                </>
              )}
            </button>

            {generatedBio && (
              <button
                onClick={handleApply}
                className="px-4 py-2 bg-[#10b981] hover:bg-[#10b981]/90 text-[#04120c] font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Gunakan Hasil Ini</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
