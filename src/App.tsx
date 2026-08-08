import React, { useState } from 'react';
import { ProfileData, AiGeneratedBio } from './types';
import { DEFAULT_PROFILE_DATA } from './data/defaults';
import { HeaderNavbar } from './components/HeaderNavbar';
import { ProfileEditor } from './components/ProfileEditor';
import { MarkdownPreviewer } from './components/MarkdownPreviewer';
import { AiBioModal } from './components/AiBioModal';
import { GithubActionsModal } from './components/GithubActionsModal';
import { generateGitHubReadme } from './utils/markdownGenerator';
import { downloadRepositoryZip } from './utils/zipExporter';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(DEFAULT_PROFILE_DATA);
  const [activeView, setActiveView] = useState<'split' | 'preview' | 'code' | 'files'>('split');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Modals
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isActionsModalOpen, setIsActionsModalOpen] = useState<boolean>(false);

  const handleCopyReadme = () => {
    const readme = generateGitHubReadme(profile);
    navigator.clipboard.writeText(readme);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownloadZip = () => {
    downloadRepositoryZip(profile);
  };

  const handleApplyAiBio = (bioData: AiGeneratedBio) => {
    setProfile((prev) => ({
      ...prev,
      mountainTagline: bioData.tagline || prev.mountainTagline,
      bioParagraph1: bioData.bioParagraphs[0] || prev.bioParagraph1,
      bioParagraph2: bioData.bioParagraphs[1] || prev.bioParagraph2,
      valuePoints: bioData.valuePoints && bioData.valuePoints.length > 0 ? bioData.valuePoints : prev.valuePoints,
    }));
  };

  return (
    <div className="min-h-screen bg-[#04120c] text-[#e0f2f1] flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Navbar Header */}
      <HeaderNavbar
        profile={profile}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenActionsModal={() => setIsActionsModalOpen(true)}
        onDownloadZip={handleDownloadZip}
        onCopyReadme={handleCopyReadme}
        isCopied={isCopied}
      />

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
        
        {/* Split View Mode */}
        {activeView === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-start lg:items-stretch">
            <div className="lg:col-span-5 w-full h-auto lg:h-[calc(100vh-7rem)] lg:sticky lg:top-20">
              <ProfileEditor
                profile={profile}
                onChange={setProfile}
                onOpenAiModal={() => setIsAiModalOpen(true)}
              />
            </div>
            <div className="lg:col-span-7 w-full h-auto lg:h-[calc(100vh-7rem)] lg:sticky lg:top-20">
              <MarkdownPreviewer
                profile={profile}
                activeView={activeView}
                setActiveView={setActiveView}
                onCopyReadme={handleCopyReadme}
                isCopied={isCopied}
                onDownloadZip={handleDownloadZip}
              />
            </div>
          </div>
        )}

        {/* Full Single-View Modes (Preview / Code / Files) */}
        {activeView !== 'split' && (
          <div className="flex-1 min-h-[calc(100vh-8rem)]">
            <MarkdownPreviewer
              profile={profile}
              activeView={activeView}
              setActiveView={setActiveView}
              onCopyReadme={handleCopyReadme}
              isCopied={isCopied}
              onDownloadZip={handleDownloadZip}
            />
          </div>
        )}

      </main>

      {/* AI Bio Generator Modal */}
      <AiBioModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        profile={profile}
        onApplyBio={handleApplyAiBio}
      />

      {/* GitHub Actions Setup Modal */}
      <GithubActionsModal
        isOpen={isActionsModalOpen}
        onClose={() => setIsActionsModalOpen(false)}
        profile={profile}
      />

    </div>
  );
}
