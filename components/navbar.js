class CustomNavbar extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            --nav-height: 72px;
            --accent: #2563eb;
            --text-main: #1f2937;
            --text-muted: #6b7280;
            --bg-blur: rgba(255, 255, 255, 0.8);
          }
  
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: var(--nav-height);
            background-color: var(--bg-blur);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            z-index: 1000;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
          }
  
          .container {
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            padding: 0 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
  
          .logo {
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--text-main);
            text-decoration: none;
            letter-spacing: -0.02em;
          }
  
          .nav-links {
            display: flex;
            align-items: center;
            gap: 2rem;
          }
  
          .nav-link {
            text-decoration: none;
            color: var(--text-muted);
            font-size: 0.9rem;
            font-weight: 500;
            transition: color 0.2s ease;
          }
  
          .nav-link:hover {
            color: var(--accent);
          }
  
          .cta-button {
            background-color: var(--text-main);
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            transition: transform 0.2s ease, background-color 0.2s ease;
          }
  
          .cta-button:hover {
            background-color: var(--accent);
            transform: translateY(-1px);
          }
  
          /* Mobile Menu Button */
          .menu-btn {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text-main);
            padding: 0.5rem;
          }
  
          /* Spacer to prevent content jump */
          .spacer {
            height: var(--nav-height);
          }
  
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .menu-btn { display: block; }
          }
        </style>
  
        <nav class="navbar">
          <div class="container">
            <a href="/" class="logo">Stitch & Send</a>
            
            <div class="nav-links">
              <a href="#" class="nav-link">Home</a>
              <a href="#" class="nav-link">Gallery</a>
              <a href="#" class="nav-link">About</a>
              <a href="#contact" class="cta-button">Kontakt</a>
            </div>
  
            <button class="menu-btn" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
        <div class="spacer"></div>
      `;
    }
  }
  customElements.define('custom-navbar', CustomNavbar);