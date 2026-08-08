import { ProfileData } from '../types';
import { THEME_PRESETS } from '../data/defaults';

export function generateGitHubReadme(profile: ProfileData): string {
  const theme = THEME_PRESETS[profile.theme] || THEME_PRESETS['pine-forest'];
  const hexBg = theme.darkBg.replace('#', '');
  const hexPrimary = theme.primary.replace('#', '');
  const hexAccent = theme.accent.replace('#', '');
  const hexBorder = theme.cardBg.replace('#', '');
  const hexText = 'E5E7EB';
  const hexMuted = '9CA3AF';

  const typingSvgUrl = `https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=${hexPrimary}&center=true&vCenter=true&width=700&lines=${encodeURIComponent(
    profile.title
  )};${encodeURIComponent(
    'Scaling Organic Search Peak Rankings 🏔️📈'
  )};${encodeURIComponent(
    'Crafting Engaging Tech & Outdoor Content ✍️🌲'
  )};${encodeURIComponent('Automating SEO Workflows with Python & AI ⚙️')}`;

  let md = '';

  // 1. Header Banner
  md += `<div align="center">\n\n`;

  if (profile.headerBannerStyle === 'capsule-render') {
    const capsuleBannerUrl = `https://capsule-render.vercel.app/api?type=waving&color=${hexBg}&height=200&section=header&text=${encodeURIComponent(
      profile.fullName || profile.username
    )}&fontSize=38&fontColor=${hexPrimary}&animation=twinkling`;
    md += `[![Header Banner](${capsuleBannerUrl})](https://github.com/${profile.username})\n\n`;
  } else {
    md += `<!-- Mountain Peak Profile Header Banner -->\n`;
    md += `![Mountain Peak Header](./assets/mountain-banner.svg)\n\n`;
  }

  md += `[![Typing SVG](${typingSvgUrl})](https://github.com/${profile.username})\n\n`;

  // Quick Badges
  md += `[![Location](https://img.shields.io/badge/Location-${encodeURIComponent(
    profile.location
  )}-${theme.badgeColor}?style=for-the-badge&logo=google-maps&logoColor=10B981)](#)\n`;
  md += `[![Peak Goal](https://img.shields.io/badge/Current_Peak-${encodeURIComponent(
    profile.currentPeakGoal
  )}-${theme.badgeColor}?style=for-the-badge&logo=mountain&logoColor=34D399)](#)\n`;
  md += `[![Daily Auto-Updated Profile](https://img.shields.io/badge/GitHub_Actions-Daily_Auto--Update-10B981?style=for-the-badge&logo=github-actions&logoColor=white)](#-github-actions-automation)\n\n`;

  md += `</div>\n\n`;

  // 2. Section Divider
  if (profile.headerBannerStyle === 'capsule-render') {
    md += `---\n\n`;
  } else {
    md += `![Mountain Ridge Divider](./assets/mountain-divider.svg)\n\n`;
  }

  // 3. About Me Section
  md += `## 🌲 About Me | Tentang Saya\n\n`;
  md += `${profile.bioParagraph1}\n\n`;
  md += `${profile.bioParagraph2}\n\n`;

  if (profile.valuePoints && profile.valuePoints.length > 0) {
    md += `### 🎯 Core Capabilities & Value Proposition\n\n`;
    profile.valuePoints.forEach((point) => {
      md += `- ${point}\n`;
    });
    md += `\n`;
  }

  // 4. SEO & Writing Key Achievements Table
  if (profile.showSeoMetrics && profile.seoMetrics && profile.seoMetrics.length > 0) {
    md += `## 📊 SEO & Content Peak Achievements\n\n`;
    md += `| Metric | Value | Impact & Focus Area |\n`;
    md += `| :--- | :---: | :--- |\n`;
    profile.seoMetrics.forEach((m) => {
      md += `| **${m.label}** | \`${m.value}\` | ${m.subtext} |\n`;
    });
    md += `\n`;
  }

  // 5. Featured Projects & Case Studies
  if (profile.featuredProjects && profile.featuredProjects.length > 0) {
    md += `## 🚀 Featured Case Studies & Projects | Proyek Unggulan\n\n`;
    profile.featuredProjects.forEach((p) => {
      md += `### ${p.title}\n`;
      md += `*Category: \`${p.category}\`* | **Impact:** \`${p.metrics || 'High Impact'}\`\n\n`;
      md += `${p.description}\n\n`;
      if (p.techStack && p.techStack.length > 0) {
        md += `**Tech & Tools:** ` + p.techStack.map((t) => `\`${t}\``).join(' • ') + `\n\n`;
      }
      if (p.link || p.repoLink) {
        const links = [];
        if (p.link) links.push(`[🌐 View Live Project](${p.link})`);
        if (p.repoLink) links.push(`[💻 GitHub Repository](${p.repoLink})`);
        md += `${links.join(' | ')}\n\n`;
      }
      md += `---\n\n`;
    });
  }

  // 6. Animated Widgets & Contribution Stats
  if (profile.showSnakeAnimation || profile.showGithubStats || profile.showStreakStats || profile.showTopLangs) {
    md += `## 📈 Animated Contribution & Mountain Activity Stats\n\n`;
    md += `<div align="center">\n\n`;

    if (profile.showSnakeAnimation) {
      md += `### 🐍 GitHub Contribution Grid Snake Animation\n`;
      md += `<!-- Auto-generated daily by GitHub Actions workflow -->\n`;
      md += `![Snake Animation](./assets/github-user-contribution-grid-snake.svg)\n\n`;
    }

    if (profile.showGithubStats || profile.showStreakStats) {
      md += `<table border="0">\n<tr>\n`;

      if (profile.showGithubStats) {
        const statsCardUrl = `https://github-readme-stats.vercel.app/api?username=${profile.username}&show_icons=true&bg_color=${hexBg}&title_color=${hexPrimary}&text_color=${hexMuted}&icon_color=${hexAccent}&border_color=${hexBorder}&hide_border=false`;
        md += `<td width="50%" valign="top">\n\n`;
        md += `![${profile.username}'s GitHub Stats](${statsCardUrl})\n\n`;
        md += `</td>\n`;
      }

      if (profile.showStreakStats) {
        const streakCardUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${profile.username}&background=${hexBg}&stroke=${hexBorder}&sidenums=${hexMuted}&currStreakNum=${hexPrimary}&fire=${hexAccent}&currStreakLabel=${hexAccent}&border=${hexBorder}`;
        md += `<td width="50%" valign="top">\n\n`;
        md += `![${profile.username}'s GitHub Streak](${streakCardUrl})\n\n`;
        md += `</td>\n`;
      }

      md += `</tr>\n</table>\n\n`;
    }

    if (profile.showTopLangs) {
      const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.username}&layout=compact&bg_color=${hexBg}&title_color=${hexPrimary}&text_color=${hexMuted}&border_color=${hexBorder}&hide_border=false`;
      md += `![Top Languages](${topLangsUrl})\n\n`;
    }

    md += `</div>\n\n`;
  }

  // 7. Dynamic Daily SEO & Mountain Quote Widget
  if (profile.showDailyQuoteWidget) {
    md += `## 🌄 Dynamic Daily SEO & Mountain Quote\n\n`;
    md += `> <!-- DAILY_QUOTE_START -->\n`;
    md += `> *"SEO is not about gaming the system. It's about learning how to deliver the highest altitude value to the searcher, one peak at a time."*\n`;
    md += `> \n`;
    md += `> 💡 **Today's SEO Mountain Tip**: Optimize for search intent before search volume. High altitude relevance always beats mass traffic noise.\n`;
    md += `> <!-- DAILY_QUOTE_END -->\n\n`;
    md += `*🔄 Auto-updated daily at 00:00 UTC via [GitHub Actions](./.github/workflows/daily-quote.yml)*\n\n`;
  }

  // 8. Tools & Tech Stack
  if (profile.toolsAndTech && profile.toolsAndTech.length > 0) {
    md += `## 🛠️ Arsenal & Tech Stack | Perlengkapan SEO & Penulisan\n\n`;
    profile.toolsAndTech.forEach((cat) => {
      md += `### ${cat.category}\n`;
      md += `<p align="left">\n`;
      cat.tools.forEach((tool) => {
        md += `  <img src="https://img.shields.io/badge/${tool.badge}" alt="${tool.name}" height="32" />\n`;
      });
      md += `</p>\n\n`;
    });
  }

  // 9. Social Links & Media Kontak
  if (profile.socialLinks && profile.socialLinks.length > 0) {
    md += `## 📬 Connect & Collaborate | Link Media Sosial\n\n`;
    md += `<p align="left">\n`;
    profile.socialLinks
      .filter((s) => s.enabled)
      .forEach((s) => {
        md += `  <a href="${s.url}" target="_blank">\n`;
        md += `    <img src="https://img.shields.io/badge/${s.badgeLabel}-${s.badgeColor}?style=for-the-badge&logo=${s.logo}&logoColor=white" alt="${s.platform}" height="36" />\n`;
        md += `  </a>\n`;
      });
    md += `</p>\n\n`;
  }

  // 10. Footer Divider & GitHub Actions Note
  md += `---\n\n`;
  md += `<div align="center">\n\n`;
  md += `<sub>⚡ Profile README generated with **Mountain Dark Green Aesthetic README Generator** | Powered by GitHub Actions & Gemini AI</sub>\n\n`;
  md += `</div>\n`;

  return md;
}

// Generate Snake GitHub Actions Workflow YAML
export function generateSnakeWorkflowYaml(username: string): string {
  return `name: Generate Contribution Snake Animation

on:
  schedule:
    # Run every 24 hours at midnight UTC
    - cron: "0 0 * * *"
  workflow_dispatch:
  push:
    branches:
      - main
      - master

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      # Generates a snake game from a github user (<github_user_name>) contributions graph
      - name: Generate github-user-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${username}
          outputs: |
            assets/github-user-contribution-grid-snake.svg?color_snake=#10B981&color_dots=#09150E,#0F2619,#064E3B,#059669,#34D399
            assets/github-user-contribution-grid-snake-dark.svg?color_snake=#34D399&color_dots=#09150E,#062E22,#047857,#10B981,#6EE7B7

      - name: Commit & Push Assets
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore: update contribution snake animation [skip ci]"
          file_pattern: "assets/*.svg"
`;
}

// Generate Daily Quote / Tip GitHub Actions Workflow YAML
export function generateDailyQuoteWorkflowYaml(): string {
  return `name: Update Daily Mountain SEO Quote

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  update-quote:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Fetch & Replace Daily Quote
        run: |
          node -e '
          const fs = require("fs");
          const quotes = [
            "\"SEO is not about gaming the system. It is about delivering high altitude value to the searcher, one peak at a time.\"\n\n💡 **Today's SEO Tip**: Prioritize search intent over raw keyword volume. Relevance always conquers the summit.",
            "\"Writing is the compass; SEO is the trail map. Together, they lead your audience straight to the peak.\"\n\n💡 **Today's Writing Tip**: Clear and structured headings (H1, H2, H3) guide readers like cairns on a mountain trail.",
            "\"Consistent effort builds organic authority, just as steady steps conquer 3,000+ meter summits.\"\n\n💡 **Today's SEO Tip**: Audit internal links regularly to ensure search crawlers can easily reach your top content.",
            "\"Great content is built for humans first, search engines second. Never sacrifice reader trust for keyword density.\"\n\n💡 **Today's Content Tip**: Use engaging storytelling and actionable takeaways to keep dwell time high."
          ];
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          let readme = fs.readFileSync("README.md", "utf8");
          const regex = /<!-- DAILY_QUOTE_START -->[\\s\\S]*?<!-- DAILY_QUOTE_END -->/;
          const replacement = "<!-- DAILY_QUOTE_START -->\\n> " + randomQuote.replace(/\\n/g, "\\n> ") + "\\n> <!-- DAILY_QUOTE_END -->";
          readme = readme.replace(regex, replacement);
          fs.writeFileSync("README.md", readme);
          '

      - name: Commit & Push Quote Update
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "docs: update daily SEO mountain quote"
          file_pattern: "README.md"
`;
}

// Generate RSS Blog Posts GitHub Actions Workflow YAML
export function generateBlogPostsWorkflowYaml(feedUrl: string): string {
  return `name: Sync Latest Blog Posts

on:
  schedule:
    - cron: "0 6 * * *"
  workflow_dispatch:

jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Pull RSS Feed
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          feed_list: "${feedUrl || 'https://medium.com/feed/@falahamri'}"
          max_post_count: 5
          comment_tag_name: "LATEST_BLOG_POSTS"
`;
}
