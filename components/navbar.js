class CustomNavbar extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .navbar {
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .nav-link {
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #3b82f6;
          }
        </style>
        <nav class="navbar">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
              <div class="flex-shrink-0 flex items-center">
                <span class="text-xl font-bold text-gray-800">Stitch & Send</span>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-center space-x-4">
                  <a href="#" class="nav-link text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="#" class="nav-link text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                  <a href="#" class="nav-link text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="#contact" class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150">Contact</a>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <i data-feather="menu"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      `;
    }
  }
  customElements.define('custom-navbar', CustomNavbar);