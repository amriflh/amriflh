import React from 'react';
import {
  Mountain,
  Sparkles,
  Download,
  Copy,
  Check,
  FileCode,
  Eye,
  FolderTree,
  SlidersHorizontal,
  Workflow,
  Github,
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeaderNavbarProps {
  profile: ProfileData;
  activeView: 'split' | 'preview' | 'code' | 'files';
  setActiveView: (view: 'split' | 'preview' | 'code' | 'files') => void;
  onOpenAiModal: () => void;
  onOpenActionsModal: () => void;
  onDownloadZip: () => void;
  onCopyReadme: () => void;
  isCopied: boolean;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  profile,
  activeView,
  setActiveView,
  onOpenAiModal,
  onOpenActionsModal,
  onDownloadZip,
  onCopyReadme,
  isCopied,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#082a1d]/95 backdrop-blur-md border-b border-[#103b29] shadow-xl text-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Row */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          
          {/* Brand Logo & Slogan */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0c3d2a] flex items-center justify-center text-[#10b981] shadow-lg border border-[#103b29]">
              <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-[#10b981]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-bold text-sm sm:text-base lg:text-lg tracking-tight text-white flex items-center gap-1.5">
                  GitHub Profile Studio
                  <span className="hidden xs:inline-block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-[#0c3d2a] text-[#10b981] border border-[#10b981]/30 font-bold">
                    Professional Polish
                  </span>
                </h1>
              </div>
              <p className="text-[10px] sm:text-xs text-[#10b981] font-mono tracking-widest uppercase hidden sm:block">
                Author • SEO Specialist • Mountaineer
              </p>
            </div>
          </div>

          {/* View Mode Switcher (Desktop / Tablet) */}
          <div className="hidden md:flex items-center bg-[#04120c] p-1 rounded-xl border border-[#103b29]">
            <button
              onClick={() => setActiveView('split')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'split'
                  ? 'bg-[#10b981] text-[#04120c] shadow-md font-bold'
                  : 'text-gray-400 hover:text-emerald-300 hover:bg-[#061f16]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Split Mode
            </button>
            <button
              onClick={() => setActiveView('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'preview'
                  ? 'bg-[#10b981] text-[#04120c] shadow-md font-bold'
                  : 'text-gray-400 hover:text-emerald-300 hover:bg-[#061f16]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Preview Mode
            </button>
            <button
              onClick={() => setActiveView('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'code'
                  ? 'bg-[#10b981] text-[#04120c] shadow-md font-bold'
                  : 'text-gray-400 hover:text-emerald-300 hover:bg-[#061f16]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              Markdown Code
            </button>
            <button
              onClick={() => setActiveView('files')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'files'
                  ? 'bg-[#10b981] text-[#04120c] shadow-md font-bold'
                  : 'text-gray-400 hover:text-emerald-300 hover:bg-[#061f16]'
              }`}
            >
              <FolderTree className="w-3.5 h-3.5" />
              Repo Structure
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={onOpenAiModal}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-[#0c3d2a] hover:bg-[#10b981] hover:text-[#04120c] text-[#10b981] text-xs font-semibold rounded-lg shadow-md transition-all border border-[#103b29]"
              title="Generate Bio with Gemini AI"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0" />
              <span className="hidden sm:inline">AI Copywriter</span>
              <span className="inline sm:hidden text-[10px]">AI</span>
            </button>

            <button
              onClick={onOpenActionsModal}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-[#061f16] hover:bg-[#0c3d2a] text-[#10b981] text-xs font-semibold rounded-lg border border-[#103b29] transition-all"
              title="GitHub Actions Auto-Update Setup"
            >
              <Workflow className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
              <span className="hidden lg:inline">GitHub Actions</span>
            </button>

            <button
              onClick={onCopyReadme}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-[#061f16] hover:bg-[#0c3d2a] text-gray-200 text-xs font-semibold rounded-lg border border-[#103b29] transition-all"
              title="Copy README Markdown"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  <span className="hidden sm:inline text-[#10b981]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">Copy README</span>
                </>
              )}
            </button>

            <button
              onClick={onDownloadZip}
              className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 bg-[#10b981] hover:bg-emerald-400 text-[#04120c] font-bold text-xs rounded-lg shadow-lg transition-all transform active:scale-95"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Download Repo ZIP</span>
              <span className="inline sm:hidden">ZIP</span>
            </button>
          </div>

        </div>

        {/* Mobile View Mode Switcher Sub-Bar */}
        <div className="flex md:hidden items-center justify-between gap-1 overflow-x-auto py-2 border-t border-[#103b29]/80 no-scrollbar touch-pan-x">
          <button
            onClick={() => setActiveView('split')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeView === 'split'
                ? 'bg-[#10b981] text-[#04120c] font-bold shadow'
                : 'text-gray-300 bg-[#061f16] border border-[#103b29]'
            }`}
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Split</span>
          </button>
          <button
            onClick={() => setActiveView('preview')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeView === 'preview'
                ? 'bg-[#10b981] text-[#04120c] font-bold shadow'
                : 'text-gray-300 bg-[#061f16] border border-[#103b29]'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setActiveView('code')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeView === 'code'
                ? 'bg-[#10b981] text-[#04120c] font-bold shadow'
                : 'text-gray-300 bg-[#061f16] border border-[#103b29]'
            }`}
          >
            <FileCode className="w-3 h-3" />
            <span>Markdown</span>
          </button>
          <button
            onClick={() => setActiveView('files')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeView === 'files'
                ? 'bg-[#10b981] text-[#04120c] font-bold shadow'
                : 'text-gray-300 bg-[#061f16] border border-[#103b29]'
            }`}
          >
            <FolderTree className="w-3 h-3" />
            <span>Files</span>
          </button>
        </div>

      </div>
    </header>
  );
};
