import JSZip from 'jszip';
import { ProfileData } from '../types';
import {
  generateGitHubReadme,
  generateSnakeWorkflowYaml,
  generateDailyQuoteWorkflowYaml,
  generateBlogPostsWorkflowYaml,
} from './markdownGenerator';
import {
  generateMountainBannerSvg,
  generateMountainDividerSvg,
} from './svgGenerator';

export async function downloadRepositoryZip(profile: ProfileData): Promise<void> {
  const zip = new JSZip();

  // 1. Generate README.md
  const readmeContent = generateGitHubReadme(profile);
  zip.file('README.md', readmeContent);

  // 2. Workflows folder
  const workflowsFolder = zip.folder('.github/workflows');
  if (workflowsFolder) {
    if (profile.enableSnakeWorkflow) {
      workflowsFolder.file(
        'snake.yml',
        generateSnakeWorkflowYaml(profile.username)
      );
    }
    if (profile.enableDailyActionUpdate) {
      workflowsFolder.file('daily-quote.yml', generateDailyQuoteWorkflowYaml());
    }
    if (profile.enableBlogRssWorkflow && profile.rssFeedUrl) {
      workflowsFolder.file(
        'blog-posts.yml',
        generateBlogPostsWorkflowYaml(profile.rssFeedUrl)
      );
    }
  }

  // 3. Assets folder with SVGs
  const assetsFolder = zip.folder('assets');
  if (assetsFolder) {
    assetsFolder.file('mountain-banner.svg', generateMountainBannerSvg(profile));
    assetsFolder.file(
      'mountain-divider.svg',
      generateMountainDividerSvg(profile.theme)
    );
  }

  // 4. Default LICENSE (MIT)
  const licenseContent = `MIT License

Copyright (c) ${new Date().getFullYear()} ${profile.fullName || profile.username}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  zip.file('LICENSE', licenseContent);

  // 5. .gitignore
  zip.file('.gitignore', `.DS_Store\nnode_modules/\n*.log\n`);

  // Generate blob and trigger download
  const blob = await zip.generateAsync({ type: 'blob' });
  const fileName = `${profile.username}-github-profile-repo.zip`;

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
