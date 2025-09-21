// Base64 encoded SVG images for equipment categories
export const getEquipmentImage = (category, name) => {
  const images = {
    'Footwear': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#A0522D;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <ellipse cx="200" cy="200" rx="80" ry="40" fill="url(#bootGrad)"/>
        <ellipse cx="200" cy="160" rx="70" ry="35" fill="#654321"/>
        <rect x="130" y="140" width="140" height="20" rx="10" fill="#8B4513"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Backpacks': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="packGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2D5A87;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1A365D;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <rect x="150" y="80" width="100" height="140" rx="10" fill="url(#packGrad)"/>
        <rect x="160" y="90" width="80" height="20" rx="5" fill="#4A90E2"/>
        <rect x="160" y="120" width="80" height="15" rx="3" fill="#357ABD"/>
        <circle cx="170" cy="100" r="3" fill="#E2E8F0"/>
        <circle cx="230" cy="100" r="3" fill="#E2E8F0"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Shelter': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#228B22;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#006400;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <polygon points="200,80 120,180 280,180" fill="url(#tentGrad)"/>
        <polygon points="200,80 150,180 250,180" fill="#32CD32"/>
        <rect x="180" y="160" width="40" height="20" fill="#8B4513"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Clothing': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#DC143C;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#B22222;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <rect x="140" y="100" width="120" height="100" rx="15" fill="url(#jacketGrad)"/>
        <rect x="120" y="120" width="30" height="60" rx="15" fill="#DC143C"/>
        <rect x="250" y="120" width="30" height="60" rx="15" fill="#DC143C"/>
        <rect x="180" y="110" width="40" height="10" rx="5" fill="#FFD700"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Sleep Systems': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sleepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4B0082;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#663399;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <ellipse cx="200" cy="160" rx="100" ry="30" fill="url(#sleepGrad)"/>
        <ellipse cx="200" cy="150" rx="90" ry="25" fill="#8A2BE2"/>
        <rect x="110" y="140" width="20" height="40" rx="10" fill="#4B0082"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Navigation': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FF6347;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FF4500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <circle cx="200" cy="150" r="50" fill="url(#navGrad)"/>
        <circle cx="200" cy="150" r="40" fill="#FFE4E1"/>
        <polygon points="200,130 210,150 200,170 190,150" fill="#FF6347"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Water & Hydration': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1E90FF;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0000CD;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <rect x="170" y="100" width="60" height="100" rx="30" fill="url(#waterGrad)"/>
        <rect x="175" y="105" width="50" height="80" rx="25" fill="#87CEEB"/>
        <circle cx="200" cy="90" r="8" fill="#1E90FF"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Cooking': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#C0C0C0;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#808080;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <rect x="160" y="140" width="80" height="40" rx="5" fill="url(#cookGrad)"/>
        <rect x="150" y="120" width="100" height="20" rx="10" fill="#A9A9A9"/>
        <circle cx="180" cy="110" r="5" fill="#FF4500"/>
        <circle cx="200" cy="110" r="5" fill="#FF4500"/>
        <circle cx="220" cy="110" r="5" fill="#FF4500"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Lighting': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="lightGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFD700;stop-opacity:0.3" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <circle cx="200" cy="150" r="60" fill="url(#lightGrad)"/>
        <rect x="180" y="180" width="40" height="30" rx="5" fill="#2F4F4F"/>
        <rect x="190" y="170" width="20" height="10" rx="2" fill="#FFD700"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Tools': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="toolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#708090;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#2F4F4F;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <rect x="180" y="120" width="40" height="80" rx="5" fill="url(#toolGrad)"/>
        <rect x="170" y="110" width="60" height="15" rx="7" fill="#DC143C"/>
        <rect x="185" y="130" width="10" height="60" fill="#C0C0C0"/>
        <rect x="205" y="130" width="10" height="60" fill="#C0C0C0"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`,
    
    'Accessories': `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#DAA520;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#B8860B;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#2D3748"/>
        <rect x="150" y="100" width="100" height="8" rx="4" fill="url(#accGrad)"/>
        <rect x="150" y="140" width="100" height="8" rx="4" fill="url(#accGrad)"/>
        <circle cx="170" cy="120" r="15" fill="#FF6347"/>
        <circle cx="200" cy="120" r="15" fill="#32CD32"/>
        <circle cx="230" cy="120" r="15" fill="#1E90FF"/>
        <text x="200" y="250" text-anchor="middle" fill="#E2E8F0" font-size="14" font-family="Arial">${name}</text>
      </svg>
    `)}`
  };

  return images[category] || images['Tools'];
};

// Hero background images
export const getHeroImage = (type = 'mountain') => {
  const heroImages = {
    'mountain': `data:image/svg+xml;base64,${btoa(`
      <svg width="2000" height="1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4682B4;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#696969;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#2F4F4F;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="2000" height="1000" fill="url(#skyGrad)"/>
        <polygon points="0,600 400,200 800,500 1200,150 1600,400 2000,300 2000,1000 0,1000" fill="url(#mountainGrad)"/>
        <polygon points="200,700 600,300 1000,600 1400,250 1800,500 2000,400 2000,1000 0,1000" fill="#556B2F" opacity="0.8"/>
        <circle cx="1700" cy="200" r="80" fill="#FFD700" opacity="0.7"/>
      </svg>
    `)}`,
    
    'equipment': `data:image/svg+xml;base64,${btoa(`
      <svg width="2000" height="800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="equipBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2D3748;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1A202C;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="2000" height="800" fill="url(#equipBg)"/>
        <rect x="100" y="200" width="200" height="300" rx="20" fill="#4A5568" opacity="0.3"/>
        <rect x="400" y="150" width="180" height="350" rx="15" fill="#2D5A87" opacity="0.4"/>
        <rect x="700" y="180" width="220" height="320" rx="25" fill="#228B22" opacity="0.3"/>
        <rect x="1000" y="160" width="190" height="340" rx="18" fill="#DC143C" opacity="0.4"/>
        <rect x="1300" y="200" width="210" height="300" rx="22" fill="#4B0082" opacity="0.3"/>
        <rect x="1600" y="170" width="200" height="330" rx="20" fill="#FF6347" opacity="0.4"/>
      </svg>
    `)}`
  };

  return heroImages[type] || heroImages['mountain'];
};