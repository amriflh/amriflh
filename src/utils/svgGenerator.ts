import { ProfileData } from '../types';
import { THEME_PRESETS } from '../data/defaults';

export function generateMountainBannerSvg(profile: ProfileData): string {
  const theme = THEME_PRESETS[profile.theme] || THEME_PRESETS['pine-forest'];
  const title = profile.fullName || 'Falah Amri';
  const subtitle = profile.title || 'Writer & SEO Specialist';
  const tagline = profile.mountainTagline || 'Scaling Search Engine Peaks & Crafting Stories';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" width="100%" height="auto">
  <defs>
    <!-- Background Sky Gradient -->
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#020906" />
      <stop offset="40%" stop-color="#05170f" />
      <stop offset="75%" stop-color="${theme.darkBg}" />
      <stop offset="100%" stop-color="#0d3322" />
    </linearGradient>

    <!-- Celestial Moon Glow -->
    <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ECFDF5" stop-opacity="1" />
      <stop offset="30%" stop-color="#A7F3D0" stop-opacity="0.8" />
      <stop offset="65%" stop-color="${theme.accent}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Sunlit 3D Mountain Facet Gradient -->
    <linearGradient id="sunlitFacet" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#34D399" />
      <stop offset="50%" stop-color="${theme.primary}" />
      <stop offset="100%" stop-color="#0b2e1e" />
    </linearGradient>

    <!-- Shadowed 3D Mountain Facet Gradient -->
    <linearGradient id="shadowFacet" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3824" />
      <stop offset="60%" stop-color="#05170e" />
      <stop offset="100%" stop-color="#020b06" />
    </linearGradient>

    <!-- Secondary Sunlit Facet -->
    <linearGradient id="sunlitFar" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#061e13" stop-opacity="0.9" />
    </linearGradient>

    <!-- Snow Cap Light Gradient -->
    <linearGradient id="snowLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="70%" stop-color="#E0F2FE" />
      <stop offset="100%" stop-color="#A7F3D0" />
    </linearGradient>

    <!-- Snow Cap Shadow Gradient -->
    <linearGradient id="snowShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C7D2FE" />
      <stop offset="60%" stop-color="#6EE7B7" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>

    <!-- Atmospheric Fog Mist Gradient -->
    <linearGradient id="fogGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#A7F3D0" stop-opacity="0" />
      <stop offset="50%" stop-color="#34D399" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#04120c" stop-opacity="0.8" />
    </linearGradient>

    <!-- Light Rays / Volumetric Light -->
    <linearGradient id="lightRay" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A7F3D0" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#A7F3D0" stop-opacity="0" />
    </linearGradient>

    <!-- Text Shadow & Glow Filter -->
    <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.9" />
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#10B981" flood-opacity="0.4" />
    </filter>

    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="340" fill="url(#skyGrad)" rx="16" />

  <!-- Aurora / Northern Lights Waves -->
  <path d="M 0,100 Q 300,40 600,110 T 1200,70 L 1200,0 L 0,0 Z" fill="url(#moonGlow)" opacity="0.35" />

  <!-- Stars Field -->
  <g fill="#ECFDF5">
    <circle cx="90" cy="35" r="1.5" opacity="0.9" />
    <circle cx="210" cy="65" r="2" opacity="0.8" />
    <circle cx="340" cy="25" r="1.2" opacity="0.6" />
    <circle cx="480" cy="50" r="1.8" opacity="0.85" />
    <circle cx="720" cy="30" r="1.4" opacity="0.75" />
    <circle cx="860" cy="60" r="2.2" opacity="0.95" />
    <circle cx="1020" cy="40" r="1.2" opacity="0.65" />
    <circle cx="1130" cy="75" r="1.8" opacity="0.8" />
    <!-- Twinkle Stars -->
    <polygon points="210,65 212,65 210,67 208,65" fill="#FFFFFF" />
    <polygon points="860,60 863,60 860,63 857,60" fill="#FFFFFF" />
  </g>

  <!-- Glowing Moon Orb -->
  <circle cx="600" cy="65" r="50" fill="url(#moonGlow)" />
  <circle cx="600" cy="65" r="16" fill="#F0FDF4" filter="url(#softGlow)" />

  <!-- Volumetric Sun/Moon Light Rays -->
  <polygon points="600,65 250,340 380,340" fill="url(#lightRay)" />
  <polygon points="600,65 500,340 700,340" fill="url(#lightRay)" opacity="0.7" />
  <polygon points="600,65 820,340 950,340" fill="url(#lightRay)" />

  <!-- LAYER 1: Far Distance Background Silhouette Mountains -->
  <path d="M 0,340 L 0,190 L 110,140 L 240,210 L 380,120 L 520,220 L 680,130 L 840,220 L 980,115 L 1110,195 L 1200,150 L 1200,340 Z" fill="#061f14" opacity="0.8" />

  <!-- LAYER 2: Far 3D Faceted Mountains -->
  <g opacity="0.9">
    <!-- Left Far Peak (x=220, y=125) -->
    <polygon points="220,125 100,240 220,240 215,180" fill="url(#sunlitFar)" />
    <polygon points="220,125 215,180 220,240 340,240" fill="url(#shadowFacet)" />
    <!-- Snowcap -->
    <polygon points="220,125 185,160 220,165 245,160" fill="url(#snowLight)" opacity="0.85" />

    <!-- Right Far Peak (x=960, y=110) -->
    <polygon points="960,110 830,230 960,230 955,170" fill="url(#sunlitFar)" />
    <polygon points="960,110 955,170 960,230 1080,230" fill="url(#shadowFacet)" />
    <!-- Snowcap -->
    <polygon points="960,110 925,145 960,150 985,145" fill="url(#snowLight)" opacity="0.85" />
  </g>

  <!-- Mid-Layer Atmospheric Fog -->
  <rect x="0" y="180" width="1200" height="70" fill="url(#fogGrad)" />

  <!-- LAYER 3: MAIN FOREGROUND 3D FACETED MOUNTAIN RANGE (High Detail Low-Poly Realism) -->
  <g>
    <!-- LEFT MAIN PEAK (Peak: x=340, y=95) -->
    <!-- Sunlit Left Facet -->
    <polygon points="340,95 140,280 335,280 345,185" fill="url(#sunlitFacet)" />
    <polygon points="340,95 345,185 335,280 230,280" fill="url(#sunlitFacet)" opacity="0.9" />
    <!-- Shadowed Right Facet -->
    <polygon points="340,95 345,185 335,280 500,280" fill="url(#shadowFacet)" />
    <!-- Ridge Lines Highlights -->
    <polyline points="340,95 345,185 335,280" stroke="#6EE7B7" stroke-width="1.5" opacity="0.6" fill="none" />
    <!-- Snow Caps Left Peak -->
    <polygon points="340,95 295,142 342,148" fill="url(#snowLight)" />
    <polygon points="340,95 342,148 375,140" fill="url(#snowShadow)" />

    <!-- RIGHT MAIN PEAK (Peak: x=880, y=90) -->
    <!-- Sunlit Left Facet -->
    <polygon points="880,90 690,280 875,280 885,175" fill="url(#sunlitFacet)" />
    <!-- Shadowed Right Facet -->
    <polygon points="880,90 885,175 875,280 1060,280" fill="url(#shadowFacet)" />
    <!-- Ridge Line -->
    <polyline points="880,90 885,175 875,280" stroke="#6EE7B7" stroke-width="1.5" opacity="0.6" fill="none" />
    <!-- Snow Caps Right Peak -->
    <polygon points="880,90 835,138 882,144" fill="url(#snowLight)" />
    <polygon points="880,90 882,144 915,135" fill="url(#snowShadow)" />

    <!-- CENTRAL MAJESTIC SUMMIT PEAK (Peak: x=600, y=70 - High Altitude Centerpiece) -->
    <!-- Sunlit Left Main Facet -->
    <polygon points="600,70 390,290 595,290 605,160" fill="url(#sunlitFacet)" />
    <polygon points="600,70 605,160 595,290 500,290" fill="url(#sunlitFacet)" opacity="0.85" />
    <!-- Shadowed Right Main Facet -->
    <polygon points="600,70 605,160 595,290 810,290" fill="url(#shadowFacet)" />
    <!-- Sharp Central 3D Ridge Line -->
    <polyline points="600,70 605,160 595,290" stroke="#A7F3D0" stroke-width="2.5" opacity="0.85" fill="none" />
    <!-- Central Summit Snow Cap -->
    <polygon points="600,70 545,130 602,138" fill="url(#snowLight)" />
    <polygon points="600,70 602,138 648,125" fill="url(#snowShadow)" />
    <polygon points="602,138 545,130 520,160 598,165" fill="url(#snowLight)" opacity="0.9" />
  </g>

  <!-- Foreground Valley Mist & Clouds -->
  <path d="M 0,260 Q 300,220 600,250 T 1200,240 L 1200,340 L 0,340 Z" fill="url(#fogGrad)" />

  <!-- LAYER 4: Foreground Alpine Ridge & Dense 3D Pine Tree Forest -->
  <path d="M 0,340 L 0,270 L 160,230 L 320,275 L 480,210 L 640,270 L 800,215 L 960,270 L 1120,225 L 1200,255 L 1200,340 Z" fill="#04120c" />

  <!-- Detailed Layered Pine Trees Silhouettes with Depth Colors -->
  <g>
    <!-- Dark Mid Trees -->
    <g fill="#061e13">
      <path d="M 30,310 L 42,260 L 33,260 L 42,240 L 36,240 L 42,220 L 48,240 L 42,240 L 51,260 L 42,260 L 54,310 Z" />
      <path d="M 120,320 L 132,265 L 123,265 L 132,245 L 126,245 L 132,225 L 138,245 L 132,245 L 141,265 L 132,265 L 144,320 Z" />
      <path d="M 1060,320 L 1072,265 L 1063,265 L 1072,245 L 1066,245 L 1072,225 L 1078,245 L 1072,245 L 1081,265 L 1072,265 L 1084,320 Z" />
      <path d="M 1140,310 L 1152,255 L 1143,255 L 1152,235 L 1146,235 L 1152,215 L 1158,235 L 1152,235 L 1161,255 L 1152,255 L 1164,310 Z" />
    </g>

    <!-- Ultra Foreground Crisp Dark Trees -->
    <g fill="#020a06">
      <path d="M 70,340 L 85,270 L 75,270 L 85,245 L 78,245 L 85,220 L 92,245 L 85,245 L 95,270 L 85,270 L 100,340 Z" />
      <path d="M 150,340 L 162,280 L 153,280 L 162,255 L 156,255 L 162,230 L 168,255 L 162,255 L 171,280 L 162,280 L 174,340 Z" />
      <path d="M 1020,340 L 1035,270 L 1025,270 L 1035,245 L 1028,245 L 1035,220 L 1042,245 L 1035,245 L 1045,270 L 1035,270 L 1050,340 Z" />
      <path d="M 1100,340 L 1112,275 L 1103,275 L 1112,250 L 1106,250 L 1112,225 L 1118,250 L 1112,250 L 1121,275 L 1112,275 L 1124,340 Z" />
    </g>
  </g>

  <!-- Glowing Compass & Peak Summit Crest -->
  <g transform="translate(600, 50)" filter="url(#softGlow)">
    <circle cx="0" cy="0" r="22" fill="#04120c" stroke="${theme.accent}" stroke-width="2.5" opacity="0.95" />
    <polygon points="0,-15 5,0 0,15 -5,0" fill="#34D399" />
    <polygon points="-15,0 0,5 15,0 0,-5" fill="${theme.primary}" />
    <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
  </g>

  <!-- 3D FLOATING TYPOGRAPHY & BRANDING -->
  <g filter="url(#textShadow)">
    <!-- Main Name Header -->
    <text x="600" y="118" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="38" font-weight="900" letter-spacing="1.5">
      ${escapeXml(title)}
    </text>

    <!-- Professional Subtitle Badge -->
    <text x="600" y="152" text-anchor="middle" fill="#34D399" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="17" font-weight="800" letter-spacing="3">
      ${escapeXml(subtitle.toUpperCase())}
    </text>

    <!-- Mountain Tagline / Bio Quote -->
    <text x="600" y="184" text-anchor="middle" fill="#E5E7EB" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="500" font-style="italic">
      "${escapeXml(tagline)}"
    </text>
  </g>

</svg>`;
}

export function generateMountainDividerSvg(themeId: string = 'pine-forest'): string {
  const theme = THEME_PRESETS[themeId] || THEME_PRESETS['pine-forest'];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" width="100%" height="auto">
  <defs>
    <linearGradient id="divSunlit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399" />
      <stop offset="100%" stop-color="${theme.primary}" />
    </linearGradient>
    <linearGradient id="divShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c3d2a" />
      <stop offset="100%" stop-color="#04120c" />
    </linearGradient>
  </defs>
  <path d="M 0,60 L 0,40 L 150,15 L 300,45 L 480,10 L 650,50 L 820,18 L 1000,48 L 1200,20 L 1200,60 Z" fill="url(#divSunlit)" opacity="0.4" />
  <path d="M 0,60 L 0,48 L 200,25 L 380,52 L 580,20 L 780,55 L 960,22 L 1120,45 L 1200,30 L 1200,60 Z" fill="url(#divSunlit)" opacity="0.8" />
  <path d="M 0,60 L 0,55 L 250,35 L 450,58 L 680,32 L 880,58 L 1080,38 L 1200,50 L 1200,60 Z" fill="url(#divShadow)" />
</svg>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

