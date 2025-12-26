class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            --bg-color: #ffffff;
            --text-main: #111827;
            --text-muted: #6b7280;
            --accent: #2563eb;
            --border: #f3f4f6;
          }
  
          footer {
            background-color: var(--bg-color);
            border-top: 1px solid var(--border);
            padding: 4rem 1.5rem 2rem;
            color: var(--text-main);
          }
  
          .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 4rem;
          }
  
          .brand-section p {
            color: var(--text-muted);
            line-height: 1.6;
            max-width: 300px;
            margin-top: 1rem;
          }
  
          h3 {
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 1.5rem;
            color: var(--text-main);
          }
  
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
  
          li { margin-bottom: 0.75rem; }
  
          a {
            text-decoration: none;
            color: var(--text-muted);
            transition: color 0.2s ease;
            font-size: 0.95rem;
          }
  
          a:hover { color: var(--accent); }
  
          .social-links {
            display: flex;
            gap: 1.25rem;
            margin-top: 1rem;
          }
  
          .social-links svg {
            width: 20px;
            height: 20px;
            stroke: var(--text-muted);
            stroke-width: 2;
            fill: none;
            transition: stroke 0.2s ease, transform 0.2s ease;
          }
  
          .social-links a:hover svg {
            stroke: var(--accent);
            transform: translateY(-2px);
          }
  
          .bottom-bar {
            max-width: 1200px;
            margin: 4rem auto 0;
            padding-top: 2rem;
            border-top: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
            color: var(--text-muted);
          }
  
          @media (max-width: 768px) {
            .container { grid-template-columns: 1fr; gap: 2.5rem; }
            .bottom-bar { flex-direction: column; gap: 1rem; text-align: center; }
          }
        </style>
  
        <footer>
          <div class="container">
            <div class="brand-section">
              <h2 style="margin:0; font-size: 1.25rem; font-weight: 800;">Stitch & Send</h2>
              <p>Handgefertigte Patchwork-Unikate mit Liebe zum Detail. Qualität, die bleibt – seit 2023.</p>
            </div>
  
            <div>
              <h3>Navigation</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/gallery">Galerie</a></li>
                <li><a href="/about">Über uns</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </div>
  
            <div>
              <h3>Folge uns</h3>
              <div class="social-links">
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Pinterest">
                  <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="9" x2="6" y2="21"></line><line x1="10" y1="13" x2="18" y2="13"></line><line x1="10" y1="17" x2="18" y2="17"></line><polyline points="10 9 18 9 18 21 10 21"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
  
          <div class="bottom-bar">
            <span>&copy; ${new Date().getFullYear()} Stitch & Send. Alle Rechte vorbehalten.</span>
            <div style="display: flex; gap: 1.5rem;">
              <a href="/impressum">Impressum</a>
              <a href="/datenschutz">Datenschutz</a>
            </div>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('custom-footer', CustomFooter);