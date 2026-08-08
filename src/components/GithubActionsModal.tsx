import React, { useState } from 'react';
import { X, Workflow, Copy, Check, Terminal, ExternalLink, ShieldAlert } from 'lucide-react';
import { ProfileData } from '../types';
import {
  generateSnakeWorkflowYaml,
  generateDailyQuoteWorkflowYaml,
  generateBlogPostsWorkflowYaml,
} from '../utils/markdownGenerator';

interface GithubActionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const GithubActionsModal: React.FC<GithubActionsModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'snake' | 'quote' | 'blog'>('guide');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyYaml = (key: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(key);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const snakeYaml = generateSnakeWorkflowYaml(profile.username);
  const quoteYaml = generateDailyQuoteWorkflowYaml();
  const blogYaml = generateBlogPostsWorkflowYaml(profile.rssFeedUrl || '');

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#061f16] border border-[#103b29] rounded-2xl max-w-2xl w-full p-6 text-gray-100 shadow-2xl space-y-5 relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#103b29] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0c3d2a] border border-[#103b29] flex items-center justify-center text-[#10b981]">
              <Workflow className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Panduan Otomatisasi GitHub Actions</h3>
              <p className="text-[11px] text-[#10b981]">Pembaruan profil harian secara otomatis (Daily 00:00 UTC)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-[#0c3d2a]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 border-b border-[#103b29] pb-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'guide'
                ? 'bg-[#10b981] text-[#04120c] font-bold'
                : 'text-gray-400 hover:text-[#10b981]'
            }`}
          >
            📋 Langkah Setup
          </button>
          <button
            onClick={() => setActiveTab('snake')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'snake'
                ? 'bg-[#10b981] text-[#04120c] font-bold'
                : 'text-gray-400 hover:text-[#10b981]'
            }`}
          >
            🐍 snake.yml
          </button>
          <button
            onClick={() => setActiveTab('quote')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'quote'
                ? 'bg-[#10b981] text-[#04120c] font-bold'
                : 'text-gray-400 hover:text-[#10b981]'
            }`}
          >
            💡 daily-quote.yml
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'blog'
                ? 'bg-[#10b981] text-[#04120c] font-bold'
                : 'text-gray-400 hover:text-[#10b981]'
            }`}
          >
            📰 blog-posts.yml
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto space-y-4 text-xs leading-relaxed text-gray-300 pr-1">
          
          {activeTab === 'guide' && (
            <div className="space-y-4">
              <div className="bg-[#04120c] p-4 rounded-xl border border-[#103b29] space-y-2">
                <h4 className="font-bold text-[#10b981] text-sm flex items-center gap-1.5">
                  1. Buat Repositori Khusus Profil GitHub
                </h4>
                <p>
                  Buat repositori baru di GitHub dengan nama yang persis sama dengan username Anda, yaitu{' '}
                  <code className="bg-[#0c3d2a] text-[#10b981] px-1.5 py-0.5 rounded font-mono">
                    {profile.username}/{profile.username}
                  </code>{' '}
                  dan pastikan diset sebagai <strong>Public</strong>.
                </p>
              </div>

              <div className="bg-[#04120c] p-4 rounded-xl border border-[#103b29] space-y-2">
                <h4 className="font-bold text-[#10b981] text-sm flex items-center gap-1.5">
                  2. Aktifkan Izin Read and Write Permissions
                </h4>
                <p>
                  Agar GitHub Actions dapat memperbarui file <code className="text-[#10b981]">README.md</code> dan grafik ulat otomatis setiap hari:
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-gray-300">
                  <li>Buka repositori Anda di GitHub.</li>
                  <li>Masuk ke menu <strong>Settings</strong> &gt; <strong>Actions</strong> &gt; <strong>General</strong>.</li>
                  <li>Pilih opsi <strong>Read and write permissions</strong> di bawah bagian <em>Workflow permissions</em>.</li>
                  <li>Centang <strong>Allow GitHub Actions to create and approve pull requests</strong> lalu simpan.</li>
                </ol>
              </div>

              <div className="bg-[#04120c] p-4 rounded-xl border border-[#103b29] space-y-2">
                <h4 className="font-bold text-[#10b981] text-sm flex items-center gap-1.5">
                  3. Unggah Berkas & Folder
                </h4>
                <p>
                  Salin file <code className="text-[#10b981]">README.md</code>, sertakan folder <code className="text-[#10b981]">assets/</code> untuk gambar SVG banner, dan buat direktori <code className="text-[#10b981]">.github/workflows/</code> untuk menyimpan file YAML otomatisasi.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'snake' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#10b981] font-bold">.github/workflows/snake.yml</span>
                <button
                  onClick={() => copyYaml('snake', snakeYaml)}
                  className="px-2.5 py-1 bg-[#10b981] hover:bg-[#10b981]/90 text-[#04120c] font-bold rounded flex items-center gap-1"
                >
                  {copiedFile === 'snake' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFile === 'snake' ? 'Copied' : 'Salin YAML'}</span>
                </button>
              </div>
              <pre className="bg-[#04120c] p-3 rounded-xl border border-[#103b29] font-mono text-[11px] text-[#10b981] overflow-x-auto whitespace-pre-wrap select-all">
                {snakeYaml}
              </pre>
            </div>
          )}

          {activeTab === 'quote' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#10b981] font-bold">.github/workflows/daily-quote.yml</span>
                <button
                  onClick={() => copyYaml('quote', quoteYaml)}
                  className="px-2.5 py-1 bg-[#10b981] hover:bg-[#10b981]/90 text-[#04120c] font-bold rounded flex items-center gap-1"
                >
                  {copiedFile === 'quote' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFile === 'quote' ? 'Copied' : 'Salin YAML'}</span>
                </button>
              </div>
              <pre className="bg-[#04120c] p-3 rounded-xl border border-[#103b29] font-mono text-[11px] text-[#10b981] overflow-x-auto whitespace-pre-wrap select-all">
                {quoteYaml}
              </pre>
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#10b981] font-bold">.github/workflows/blog-posts.yml</span>
                <button
                  onClick={() => copyYaml('blog', blogYaml)}
                  className="px-2.5 py-1 bg-[#10b981] hover:bg-[#10b981]/90 text-[#04120c] font-bold rounded flex items-center gap-1"
                >
                  {copiedFile === 'blog' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFile === 'blog' ? 'Copied' : 'Salin YAML'}</span>
                </button>
              </div>
              <pre className="bg-[#04120c] p-3 rounded-xl border border-[#103b29] font-mono text-[11px] text-[#10b981] overflow-x-auto whitespace-pre-wrap select-all">
                {blogYaml}
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#103b29] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#10b981] hover:bg-[#10b981]/90 text-[#04120c] font-bold text-xs rounded-lg"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
