import React, { useState } from 'react';
import {
  Eye,
  FileCode,
  FolderTree,
  Copy,
  Check,
  Mountain,
  Download,
  Terminal,
  ExternalLink,
  Workflow,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { ProfileData } from '../types';
import {
  generateGitHubReadme,
  generateSnakeWorkflowYaml,
  generateDailyQuoteWorkflowYaml,
  generateBlogPostsWorkflowYaml,
} from '../utils/markdownGenerator';
import {
  generateMountainBannerSvg,
  generateMountainDividerSvg,
} from '../utils/svgGenerator';
import { THEME_PRESETS } from '../data/defaults';

interface MarkdownPreviewerProps {
  profile: ProfileData;
  activeView: 'split' | 'preview' | 'code' | 'files';
  setActiveView: (view: 'split' | 'preview' | 'code' | 'files') => void;
  onCopyReadme: () => void;
  isCopied: boolean;
  onDownloadZip: () => void;
}

export const MarkdownPreviewer: React.FC<MarkdownPreviewerProps> = ({
  profile,
  activeView,
  setActiveView,
  onCopyReadme,
  isCopied,
  onDownloadZip,
}) => {
  const [selectedFile, setSelectedFile] = useState<string>('README.md');
  const [fileCopied, setFileCopied] = useState<boolean>(false);

  const theme = THEME_PRESETS[profile.theme] || THEME_PRESETS['pine-forest'];
  const readmeMarkdown = generateGitHubReadme(profile);

  const getFileContent = (path: string): string => {
    if (path === 'README.md') return readmeMarkdown;
    if (path === '.github/workflows/snake.yml') return generateSnakeWorkflowYaml(profile.username);
    if (path === '.github/workflows/daily-quote.yml') return generateDailyQuoteWorkflowYaml();
    if (path === '.github/workflows/blog-posts.yml')
      return generateBlogPostsWorkflowYaml(profile.rssFeedUrl || '');
    if (path === 'assets/mountain-banner.svg') return generateMountainBannerSvg(profile);
    if (path === 'assets/mountain-divider.svg') return generateMountainDividerSvg(profile.theme);
    if (path === 'LICENSE') return `MIT License\n\nCopyright (c) ${new Date().getFullYear()} ${profile.fullName || profile.username}`;
    return '';
  };

  const copySpecificFile = (path: string) => {
    const content = getFileContent(path);
    navigator.clipboard.writeText(content);
    setFileCopied(true);
    setTimeout(() => setFileCopied(false), 2000);
  };

  return (
    <div className="bg-[#061f16] border border-[#103b29] rounded-2xl p-4 sm:p-6 text-gray-200 shadow-2xl flex flex-col h-full">
      
      {/* Header Controls for Preview Box */}
      <div className="flex items-center justify-between pb-3 border-b border-[#103b29] mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-teal-500/80"></div>
          <span className="text-xs font-mono text-[#10b981] font-semibold ml-2">
            github.com/{profile.username}/{profile.username}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCopyReadme}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#0c3d2a] hover:bg-[#10b981] hover:text-[#04120c] text-[#10b981] text-xs font-semibold rounded-lg border border-[#103b29] transition-all"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isCopied ? 'Selesai Menyalin' : 'Salin Markdown'}</span>
          </button>
        </div>
      </div>

      {/* Main Mode View Output */}
      <div className="flex-1 overflow-y-auto pr-1">
        
        {/* VIEW 1: Visual Rendered GitHub Profile */}
        {(activeView === 'preview' || activeView === 'split') && (
          <div className="bg-[#04120c] p-4 sm:p-8 rounded-2xl border border-[#103b29] space-y-8 font-sans max-w-4xl mx-auto shadow-inner">
            
            {/* Banner Header SVG Preview */}
            <div
              className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#103b29]"
              dangerouslySetInnerHTML={{ __html: generateMountainBannerSvg(profile) }}
            />

            {/* Typing Animation Badge Preview */}
            <div className="text-center py-2">
              <img
                src={`https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=19&pause=1000&color=${theme.primary.replace('#','')}&center=true&vCenter=true&width=650&lines=${encodeURIComponent(
                  profile.title
                )};${encodeURIComponent('Scaling Organic Search Peaks 🏔️')};${encodeURIComponent('Crafting Compelling Stories ✍️')}`}
                alt="Typing SVG"
                className="mx-auto max-w-full h-auto"
              />
            </div>

            {/* Badges Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 bg-[#0c3d2a] text-[#10b981] border border-[#10b981]/30 text-xs font-bold rounded flex items-center gap-1">
                📍 {profile.location}
              </span>
              <span className="px-3 py-1 bg-[#0c3d2a] text-[#10b981] border border-[#10b981]/30 text-xs font-bold rounded flex items-center gap-1">
                🏔️ {profile.currentPeakGoal}
              </span>
              <span className="px-3 py-1 bg-[#0c3d2a] text-[#10b981] border border-[#10b981]/30 text-xs font-bold rounded flex items-center gap-1">
                ⚡ GitHub Actions Daily Auto-Update
              </span>
            </div>

            {/* Mountain Ridge Divider */}
            <div dangerouslySetInnerHTML={{ __html: generateMountainDividerSvg(profile.theme) }} />

            {/* About Me */}
            <div className="space-y-4 text-sm leading-relaxed text-gray-300">
              <h2 className="text-[#10b981] text-xs font-bold uppercase tracking-[0.2em] mb-3 flex items-center border-b border-[#103b29] pb-2">
                <span className="w-2 h-2 bg-[#10b981] rounded-full mr-2"></span> The Basecamp | About Me
              </h2>
              <p>{profile.bioParagraph1}</p>
              <p>{profile.bioParagraph2}</p>

              {profile.valuePoints && profile.valuePoints.length > 0 && (
                <div className="bg-[#061f16] p-4 rounded-xl border border-[#103b29] space-y-2 mt-4">
                  <h3 className="text-[#10b981] text-xs font-bold uppercase tracking-[0.2em] mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></span> Core Capabilities
                  </h3>
                  <ul className="space-y-1.5 text-xs text-gray-200">
                    {profile.valuePoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#10b981] mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* SEO Metrics Grid */}
            {profile.showSeoMetrics && profile.seoMetrics && (
              <div className="space-y-3">
                <h2 className="text-[#10b981] text-xs font-bold uppercase tracking-[0.2em] mb-3 flex items-center border-b border-[#103b29] pb-2">
                  <span className="w-2 h-2 bg-[#10b981] rounded-full mr-2"></span> SEO & Content Peak Achievements
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {profile.seoMetrics.map((m) => (
                    <div
                      key={m.id}
                      className="bg-[#0c3d2a] p-3 rounded-xl border border-[#10b981]/30 text-center"
                    >
                      <div className="text-lg font-mono font-extrabold text-[#10b981]">
                        {m.value}
                      </div>
                      <div className="text-xs font-bold text-white mt-1">{m.label}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">{m.subtext}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Projects */}
            {profile.featuredProjects && profile.featuredProjects.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-[#10b981] text-xs font-bold uppercase tracking-[0.2em] mb-3 flex items-center border-b border-[#103b29] pb-2">
                  <span className="w-2 h-2 bg-[#10b981] rounded-full mr-2"></span> Summit Projects & Case Studies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.featuredProjects.map((p) => (
                    <div
                      key={p.id}
                      className="group bg-[#0c3d2a]/40 border border-[#103b29] p-4 rounded-lg hover:border-[#10b981] transition-colors space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white text-sm">{p.title}</h3>
                        <span className="text-[10px] font-mono text-[#10b981] px-2 py-0.5 rounded bg-[#0c3d2a] border border-[#103b29]">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{p.description}</p>
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-[#10b981] font-mono text-[11px] font-semibold">
                          Impact: {p.metrics}
                        </span>
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#10b981] hover:underline flex items-center gap-1 font-semibold text-xs"
                          >
                            View Case Study <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Animated Contribution Widgets */}
            {(profile.showSnakeAnimation || profile.showGithubStats || profile.showStreakStats) && (
              <div className="space-y-4 text-center">
                <h2 className="text-[#10b981] text-xs font-bold uppercase tracking-[0.2em] mb-3 flex items-center border-b border-[#103b29] pb-2 text-left">
                  <span className="w-2 h-2 bg-[#10b981] rounded-full mr-2"></span> GitHub Expedition Stats
                </h2>

                {profile.showSnakeAnimation && (
                  <div className="bg-[#0c3d2a]/40 p-4 rounded-xl border border-[#103b29]">
                    <span className="text-xs font-bold text-[#10b981] block mb-2">
                      🐍 Contribution Grid Snake Animation Preview
                    </span>
                    <div className="bg-[#04120c] p-3 rounded-lg flex items-center justify-center font-mono text-xs text-[#10b981] border border-[#103b29]">
                      <span className="animate-pulse">🟩 🟩 🟩 🐍 [Snake Game Contribution SVG]</span>
                    </div>
                  </div>
                )}

                {(profile.showGithubStats || profile.showStreakStats) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {profile.showGithubStats && (
                      <div className="bg-[#0c3d2a]/40 p-3 rounded-xl border border-[#103b29] flex flex-col items-center justify-center">
                        <img
                          src={`https://github-readme-stats.vercel.app/api?username=${profile.username}&show_icons=true&bg_color=${profile.theme === 'pine-forest' ? '04120C' : '04120C'}&title_color=10B981&text_color=9CA3AF&icon_color=34D399&border_color=103B29`}
                          alt="GitHub Stats"
                          className="max-w-full rounded-lg"
                        />
                      </div>
                    )}

                    {profile.showStreakStats && (
                      <div className="bg-[#0c3d2a]/40 p-3 rounded-xl border border-[#103b29] flex flex-col items-center justify-center">
                        <img
                          src={`https://github-readme-streak-stats.herokuapp.com/?user=${profile.username}&background=04120C&stroke=103B29&sidenums=9CA3AF&currStreakNum=10B981&fire=34D399&currStreakLabel=34D399&border=103B29`}
                          alt="GitHub Streak"
                          className="max-w-full rounded-lg"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Daily Quote Box */}
            {profile.showDailyQuoteWidget && (
              <div className="bg-[#0c3d2a]/40 p-4 rounded-xl border border-[#103b29] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#10b981] flex items-center gap-1.5">
                    🌄 Dynamic Daily SEO & Mountain Quote
                  </span>
                  <span className="text-[10px] text-[#10b981] font-mono">
                    Auto-updated UTC 00:00
                  </span>
                </div>
                <blockquote className="text-xs text-gray-200 italic border-l-2 border-[#10b981] pl-3 py-1">
                  "SEO is not about gaming the system. It's about delivering high altitude value to the searcher, one peak at a time."
                </blockquote>
                <p className="text-[11px] text-[#10b981] font-medium">
                  💡 <strong>Today's SEO Tip:</strong> Prioritize intent before search volume. High altitude relevance always conquers the summit.
                </p>
              </div>
            )}

            {/* Social Badges */}
            <div className="pt-4 border-t border-[#103b29] text-center space-y-2">
              <span className="text-[#10b981] text-xs font-bold uppercase tracking-[0.2em] block">
                Connect & Collaborate
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {profile.socialLinks
                  .filter((s) => s.enabled)
                  .map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded font-bold text-xs text-white shadow border border-[#103b29]"
                      style={{ backgroundColor: `#${s.badgeColor}` }}
                    >
                      {s.platform}
                    </span>
                  ))}
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: Raw Markdown Code */}
        {activeView === 'code' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono text-[#10b981]">README.md (Raw Markdown)</span>
              <span>{readmeMarkdown.split('\n').length} lines</span>
            </div>
            <pre className="bg-[#04120c] p-4 rounded-xl border border-[#103b29] font-mono text-xs text-[#10b981] leading-relaxed overflow-x-auto select-all whitespace-pre-wrap">
              {readmeMarkdown}
            </pre>
          </div>
        )}

        {/* VIEW 3: Repository Structure Explorer */}
        {activeView === 'files' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* File List Side */}
            <div className="bg-[#04120c] p-3 rounded-xl border border-[#103b29] space-y-2 text-xs">
              <h4 className="font-bold text-[#10b981] uppercase tracking-wider px-2 py-1">
                📁 Repo Structure
              </h4>

              <div className="space-y-1 font-mono">
                <button
                  onClick={() => setSelectedFile('README.md')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between ${
                    selectedFile === 'README.md'
                      ? 'bg-[#0c3d2a] text-[#10b981] font-bold border border-[#103b29]'
                      : 'text-gray-300 hover:bg-[#061f16]'
                  }`}
                >
                  📄 README.md
                  <span className="text-[10px] text-[#10b981] font-normal">Main</span>
                </button>

                <div className="pl-3 py-1 text-gray-400 font-bold text-[11px] uppercase">
                  .github / workflows /
                </div>

                <button
                  onClick={() => setSelectedFile('.github/workflows/snake.yml')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between ${
                    selectedFile === '.github/workflows/snake.yml'
                      ? 'bg-emerald-800/40 text-emerald-300 font-bold'
                      : 'text-gray-300 hover:bg-[#09180F]'
                  }`}
                >
                  ⚙️ snake.yml
                  <span className="text-[10px] text-emerald-500 font-normal">Actions</span>
                </button>

                <button
                  onClick={() => setSelectedFile('.github/workflows/daily-quote.yml')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between ${
                    selectedFile === '.github/workflows/daily-quote.yml'
                      ? 'bg-emerald-800/40 text-emerald-300 font-bold'
                      : 'text-gray-300 hover:bg-[#09180F]'
                  }`}
                >
                  ⚙️ daily-quote.yml
                  <span className="text-[10px] text-emerald-500 font-normal">Actions</span>
                </button>

                <button
                  onClick={() => setSelectedFile('.github/workflows/blog-posts.yml')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between ${
                    selectedFile === '.github/workflows/blog-posts.yml'
                      ? 'bg-emerald-800/40 text-emerald-300 font-bold'
                      : 'text-gray-300 hover:bg-[#09180F]'
                  }`}
                >
                  ⚙️ blog-posts.yml
                  <span className="text-[10px] text-emerald-500 font-normal">Actions</span>
                </button>

                <div className="pl-3 py-1 text-gray-400 font-bold text-[11px] uppercase">
                  assets /
                </div>

                <button
                  onClick={() => setSelectedFile('assets/mountain-banner.svg')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between ${
                    selectedFile === 'assets/mountain-banner.svg'
                      ? 'bg-emerald-800/40 text-emerald-300 font-bold'
                      : 'text-gray-300 hover:bg-[#09180F]'
                  }`}
                >
                  🖼️ mountain-banner.svg
                  <span className="text-[10px] text-emerald-500 font-normal">SVG</span>
                </button>

                <button
                  onClick={() => setSelectedFile('assets/mountain-divider.svg')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between ${
                    selectedFile === 'assets/mountain-divider.svg'
                      ? 'bg-emerald-800/40 text-emerald-300 font-bold'
                      : 'text-gray-300 hover:bg-[#09180F]'
                  }`}
                >
                  🖼️ mountain-divider.svg
                  <span className="text-[10px] text-emerald-500 font-normal">SVG</span>
                </button>

                <button
                  onClick={() => setSelectedFile('LICENSE')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between ${
                    selectedFile === 'LICENSE'
                      ? 'bg-emerald-800/40 text-emerald-300 font-bold'
                      : 'text-gray-300 hover:bg-[#09180F]'
                  }`}
                >
                  📜 LICENSE
                  <span className="text-[10px] text-emerald-500 font-normal">MIT</span>
                </button>
              </div>

              <div className="pt-3 border-t border-[#0F2619]">
                <button
                  onClick={onDownloadZip}
                  className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg shadow flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download ZIP Archive
                </button>
              </div>
            </div>

            {/* File Viewer */}
            <div className="md:col-span-2 bg-[#051009] p-4 rounded-xl border border-[#0F2619] space-y-3 flex flex-col">
              <div className="flex items-center justify-between pb-2 border-b border-[#0F2619]">
                <span className="font-mono text-xs text-emerald-400 font-bold">
                  {selectedFile}
                </span>
                <button
                  onClick={() => copySpecificFile(selectedFile)}
                  className="px-2.5 py-1 bg-[#0F2619] hover:bg-[#153825] text-xs font-semibold text-emerald-300 rounded flex items-center gap-1"
                >
                  {fileCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{fileCopied ? 'Copied' : 'Copy File'}</span>
                </button>
              </div>

              <pre className="flex-1 bg-[#09150E] p-3 rounded-lg font-mono text-[11px] text-emerald-300/90 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                {getFileContent(selectedFile)}
              </pre>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
