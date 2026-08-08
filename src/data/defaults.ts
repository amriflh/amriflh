import { ProfileData, ThemeConfig } from '../types';

export const THEME_PRESETS: Record<string, ThemeConfig> = {
  'pine-forest': {
    id: 'pine-forest',
    name: '🌲 Basecamp Deep Forest',
    primary: '#10B981',
    darkBg: '#04120C',
    cardBg: '#061F16',
    accent: '#34D399',
    textMuted: '#9CA3AF',
    githubStatTheme: 'dark',
    badgeColor: '061F16',
    mountainSvgGradient: ['#10B981', '#082A1D'],
  },
  'emerald-summit': {
    id: 'emerald-summit',
    name: '🏔️ Emerald Summit',
    primary: '#059669',
    darkBg: '#04120C',
    cardBg: '#0C3D2A',
    accent: '#6EE7B7',
    textMuted: '#A7F3D0',
    githubStatTheme: 'emerald',
    badgeColor: '0C3D2A',
    mountainSvgGradient: ['#34D399', '#047857'],
  },
  'alpine-mist': {
    id: 'alpine-mist',
    name: '🌿 Alpine Mist & Ridge',
    primary: '#14B8A6',
    darkBg: '#04120C',
    cardBg: '#0B2923',
    accent: '#5EEAD4',
    textMuted: '#99F6E4',
    githubStatTheme: 'teal',
    badgeColor: '0B2923',
    mountainSvgGradient: ['#2DD4BF', '#0F766E'],
  },
  'volcanic-ridge': {
    id: 'volcanic-ridge',
    name: '🌋 Volcanic Ridge Green & Amber',
    primary: '#84CC16',
    darkBg: '#04120C',
    cardBg: '#152912',
    accent: '#F59E0B',
    textMuted: '#D9F99D',
    githubStatTheme: 'forest',
    badgeColor: '152912',
    mountainSvgGradient: ['#A3E635', '#4D7C0F'],
  },
};

export const DEFAULT_PROFILE_DATA: ProfileData = {
  username: 'amriflh',
  fullName: 'Ahmad Amri Falah',
  title: 'Content Strategist & Technical SEO Specialist',
  mountainTagline: 'Strategi Konten & Technical SEO Terukur Menuju Puncak Trafik & Konversi 🏔️📈',
  location: 'Jakarta, Indonesia 🇮🇩',
  currentPeakGoal: 'Meraih #1 Google Maps & Menghasilkan Konversi Organik Nyata ⛰️📈',
  bioParagraph1: 'Halo, saya Ahmad Amri Falah 👋! Content Strategist & Technical SEO Specialist. Saya berpengalaman mengubah situasi yang membutuhkan keteraturan dan hasil terukur menjadi strategi konten yang benar-benar mendatangkan trafik dan konversi nyata.',
  bioParagraph2: 'Fokus utama saya mencakup SEO Lokal & Google Business Profile, riset kata kunci (SEMrush, Google Keyword Planner, Ubersuggest), Content Writing & Strategy untuk AI Overview (SGE) Google, Technical SEO (optimasi skema artikel & HTML/CSS manual di CMS Laravel), serta Landing Page & Meta Ads berkonversi tinggi.',
  valuePoints: [
    '🎯 Teliti & Terorganisir: Menyukai rencana yang jelas, kalender konten berbasis data, dan konsisten menepati komitmen.',
    '🔥 Gigih & Berkelanjutan: Tidak mudah menyerah menghadapi rintangan algoritma dan selalu menyelesaikan apa yang sudah dimulai.',
    '🌱 Berorientasi pada Pertumbuhan: Percaya kemampuan bisa terus dikembangkan lewat usaha, eksperimen, dan strategi yang lebih baik.',
    '💡 Dampak Konversi Nyata: Mengutamakan hasil yang bermanfaat (prospek B2B, panggilan bisnis riil), bukan sekadar vanity metrics.'
  ],
  
  theme: 'pine-forest',
  headerBannerStyle: 'mountain-peak',
  
  showGithubStats: true,
  showStreakStats: true,
  showTopLangs: true,
  showSnakeAnimation: true,
  showDailyQuoteWidget: true,
  showSeoMetrics: true,
  showHikingWidget: true,
  showSpotifyWidget: false,
  spotifyTrackUrl: 'https://open.spotify.com/track/3n3Pp32v32b3',
  
  rssFeedUrl: 'https://portofolio-seo-specialist.ahmad-amri-falah.workers.dev/',
  mediumUsername: 'amriflh',
  substackUrl: 'https://portofolio-seo-specialist.ahmad-amri-falah.workers.dev/',
  
  seoMetrics: [
    {
      id: 'm1',
      label: 'Alatan Asasta B2B Leads',
      value: '14 Lead & +722%',
      subtext: 'Prospek B2B & unduhan regulasi dari 18 ke 148',
      iconName: 'TrendingUp'
    },
    {
      id: 'm2',
      label: 'Laundry Express Mamamu',
      value: '#1 Google Maps',
      subtext: '254 panggilan bisnis per bulan dari GBP',
      iconName: 'Target'
    },
    {
      id: 'm3',
      label: 'Toko Kue A Tiga',
      value: 'Hal. 1 Google',
      subtext: 'Tembus Halaman 1 Google untuk 3 kata kunci dalam 2 bulan',
      iconName: 'BookOpen'
    },
    {
      id: 'm4',
      label: 'Sertifikasi SEO & Writing',
      value: '4 Certification',
      subtext: 'Semrush, Google Skill, MySkill & Impactful Writer',
      iconName: 'Award'
    }
  ],
  
  featuredProjects: [
    {
      id: 'p1',
      title: '🏢 Alatan Asasta Indonesia',
      category: 'B2B Technical SEO & Content Strategy',
      description: 'Merancang strategi konten TOFU/MOFU/BOFU berbasis data CSO & webinar. Menghasilkan 14 prospek organik B2B/pemerintahan, menaikkan unduhan regulasi dari 18 ke 148 (+722%), menjaga CTR GSC di angka 2%, serta menulis kode HTML/CSS manual pada CMS Laravel untuk optimasi skema artikel & PageSpeed Insights.',
      metrics: '14 Prospek B2B/Gov & +722% Downloads',
      techStack: ['CMS Laravel', 'Technical SEO', 'SEMrush', 'Schema Markup', 'HTML/CSS', 'Lead Magnet'],
      link: 'https://portofolio-seo-specialist.ahmad-amri-falah.workers.dev/',
      featured: true
    },
    {
      id: 'p2',
      title: '🧺 Laundry Express Mamamu',
      category: 'Local SEO & Google Business Profile',
      description: 'Optimasi Google Business Profile hingga meraih Peringkat #1 di Google Maps dan menghasilkan 254 panggilan bisnis per bulan. Menyusun strategi konten SEO lokal komprehensif dan penulisan artikel LinkedIn.',
      metrics: '#1 Google Maps & 254 Calls/Bulan',
      techStack: ['Google Business Profile', 'Local SEO', 'Keyword Research', 'LinkedIn Content Strategy'],
      link: 'https://portofolio-seo-specialist.ahmad-amri-falah.workers.dev/',
      featured: true
    },
    {
      id: 'p3',
      title: '🧁 Toko Kue A Tiga',
      category: 'SEO Content & Landing Page Builder',
      description: 'Membawa website dari tidak terindeks menjadi Halaman 1 Google untuk 3 kata kunci produk utama dalam waktu 2 bulan. Membuat landing page WhatsApp yang terkonversi dan meningkatkan trafik organik lewat internal linking.',
      metrics: 'Halaman 1 Google dalam 2 Bulan',
      techStack: ['Landing Page Builder', 'WhatsApp Conversion', 'Internal Linking', 'On-Page SEO'],
      link: 'https://portofolio-seo-specialist.ahmad-amri-falah.workers.dev/',
      featured: true
    },
    {
      id: 'p4',
      title: '🏠 Groperti - Content Writer Intern',
      category: 'SEO Property Content Writing',
      description: 'Menulis konten blog sesuai target keyword dalam strategi SEO properti, menyusun judul & meta description untuk meningkatkan CTR organik.',
      metrics: 'Peningkatan CTR Organik Blog',
      techStack: ['SEO Writing', 'Keyword Research', 'Meta Descriptions', 'Property Niche'],
      link: 'https://portofolio-seo-specialist.ahmad-amri-falah.workers.dev/',
      featured: true
    }
  ],
  
  socialLinks: [
    {
      platform: 'Website Portfolio',
      username: 'portofolio-seo-specialist',
      url: 'https://portofolio-seo-specialist.ahmad-amri-falah.workers.dev/',
      badgeLabel: 'Portfolio',
      badgeColor: '10B981',
      logo: 'google-chrome',
      enabled: true
    },
    {
      platform: 'LinkedIn',
      username: 'ahmad-amri-falah',
      url: 'https://www.linkedin.com/in/ahmad-amri-falah-54a232291/',
      badgeLabel: 'LinkedIn',
      badgeColor: '0A66C2',
      logo: 'linkedin',
      enabled: true
    },
    {
      platform: 'Instagram',
      username: '@amridigital.ai',
      url: 'https://www.instagram.com/amridigital.ai/',
      badgeLabel: 'Instagram',
      badgeColor: 'E4405F',
      logo: 'instagram',
      enabled: true
    },
    {
      platform: 'WhatsApp',
      username: '+62 895-3260-89411',
      url: 'https://wa.me/62895326089411',
      badgeLabel: 'WhatsApp',
      badgeColor: '25D366',
      logo: 'whatsapp',
      enabled: true
    },
    {
      platform: 'Email',
      username: 'falahamri93@gmail.com',
      url: 'mailto:falahamri93@gmail.com',
      badgeLabel: 'Email',
      badgeColor: 'D14836',
      logo: 'gmail',
      enabled: true
    },
    {
      platform: 'GitHub',
      username: 'amriflh',
      url: 'https://github.com/amriflh',
      badgeLabel: 'GitHub',
      badgeColor: '181717',
      logo: 'github',
      enabled: true
    }
  ],
  
  toolsAndTech: [
    {
      category: '🔍 SEO & Analytics Suite',
      tools: [
        { name: 'Semrush', badge: 'Semrush-FF642D?style=for-the-badge&logo=semrush&logoColor=white', color: 'FF642D', logo: 'semrush' },
        { name: 'Google Search Console', badge: 'Google_Search_Console-4285F4?style=for-the-badge&logo=google-search-console&logoColor=white', color: '4285F4', logo: 'google-search-console' },
        { name: 'Google Business Profile', badge: 'Google_My_Business-4285F4?style=for-the-badge&logo=google&logoColor=white', color: '4285F4', logo: 'google' },
        { name: 'Google Keyword Planner', badge: 'Google_Ads-4285F4?style=for-the-badge&logo=google-ads&logoColor=white', color: '4285F4', logo: 'google-ads' },
        { name: 'Ubersuggest', badge: 'Ubersuggest-FF5722?style=for-the-badge&logo=ubiquiti&logoColor=white', color: 'FF5722', logo: 'ubiquiti' },
        { name: 'PageSpeed Insights', badge: 'PageSpeed_Insights-0F9D58?style=for-the-badge&logo=lighthouse&logoColor=white', color: '0F9D58', logo: 'lighthouse' }
      ]
    },
    {
      category: '💻 Technical SEO & Content Strategy',
      tools: [
        { name: 'CMS Laravel', badge: 'Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white', color: 'FF2D20', logo: 'laravel' },
        { name: 'HTML5 & CSS3', badge: 'HTML5_CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white', color: 'E34F26', logo: 'html5' },
        { name: 'Schema.org Markup', badge: 'Schema.org-000000?style=for-the-badge&logo=json&logoColor=10B981', color: '000000', logo: 'json' },
        { name: 'Landing Page Builder', badge: 'Landing_Pages-10B981?style=for-the-badge&logo=google-chrome&logoColor=white', color: '10B981', logo: 'google-chrome' },
        { name: 'Meta Ads (FB/IG)', badge: 'Meta_Ads-0467DF?style=for-the-badge&logo=meta&logoColor=white', color: '0467DF', logo: 'meta' }
      ]
    },
    {
      category: '🏆 Sertifikasi Resmi',
      tools: [
        { name: 'Semrush SEO Fundamentals (2024)', badge: 'Semrush_Certified-FF642D?style=for-the-badge&logo=semrush&logoColor=white', color: 'FF642D', logo: 'semrush' },
        { name: 'Google My Business Basics (2024)', badge: 'Google_My_Business-4285F4?style=for-the-badge&logo=google&logoColor=white', color: '4285F4', logo: 'google' },
        { name: 'MySkill SEO Course (2024)', badge: 'MySkill_SEO-10B981?style=for-the-badge&logo=education&logoColor=white', color: '10B981', logo: 'education' },
        { name: 'Impactful Writer Cert (2025)', badge: 'Impactful_Writer-34D399?style=for-the-badge&logo=medium&logoColor=black', color: '34D399', logo: 'medium' }
      ]
    }
  ],
  
  enableDailyActionUpdate: true,
  enableSnakeWorkflow: true,
  enableBlogRssWorkflow: true
};
