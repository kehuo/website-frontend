export default {
  "title": "HUO ke",
  "tagline": "Stay cool, keep moving.",
  "url": "http://localhost",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/fire_favicon.ico",
  "organizationName": "kehuo",
  "projectName": "website-frontend",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "logo": {
        "alt": "Logo",
        "src": "img/fire_logo_wider_gap.png"
      },
      "items": [
        {
          "to": "docs/programming/algorithms/overview",
          "label": "Algorithms",
          "position": "right"
        },
        {
          "to": "docs/programming/prog-lang/overview",
          "label": "Programming Languages",
          "position": "right"
        },
        {
          "to": "docs/ml/overview",
          "label": "Machine Learning",
          "position": "right"
        },
        {
          "to": "docs/misc/overview",
          "label": "Misc",
          "position": "right"
        },
        {
          "href": "https://github.com/kehuo",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "links": [],
      "logo": {
        "alt": "HydraKoma - HUO Ke",
        "src": "img/fire_hydrakoma_logo.png"
      },
      "copyright": "Copyright © 2020 HUO Ke"
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/hk/dev/website-frontend/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/hk/dev/website-frontend/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": []
};