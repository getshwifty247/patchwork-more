class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            background-color: #f9fafb;
            border-top: 1px solid #e5e7eb;
          }
          .social-icon {
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .social-icon:hover {
            transform: translateY(-2px);
            color: #3b82f6;
          }
        </style>
        <footer class="py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Stitch & Send</h3>
                <p class="text-gray-600">Creating beautiful, custom patchwork pieces since 2023.</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-600 hover:text-blue-500">Home</a></li>
                  <li><a href="#" class="text-gray-600 hover:text-blue-500">Gallery</a></li>
                  <li><a href="#" class="text-gray-600 hover:text-blue-500">About</a></li>
                  <li><a href="#contact" class="text-gray-600 hover:text-blue-500">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div class="flex space-x-4">
                  <a href="#" class="social-icon text-gray-600"><i data-feather="instagram"></i></a>
                  <a href="#" class="social-icon text-gray-600"><i data-feather="facebook"></i></a>
                  <a href="#" class="social-icon text-gray-600"><i data-feather="twitter"></i></a>
                  <a href="#" class="social-icon text-gray-600"><i data-feather="mail"></i></a>
                </div>
                <p class="mt-4 text-gray-600">info@stitchandsend.com</p>
              </div>
            </div>
            <div class="mt-12 pt-8 border-t border-gray-200 text-center">
              <p class="text-gray-500 text-sm">&copy; 2023 Stitch & Send. All rights reserved.</p>
            </div>
          </div>
        </footer>
      `;
    }
  }
  customElements.define('custom-footer', CustomFooter);