is a comprehensive, professional README.md file for your project. It outlines the tech stack, features, installation steps, configuration instructions, and file architecture, making it ready for your GitHub repository or project documentation.
```markdown
# Eazzesam Technologies Website

An exceptionally clean, responsive, and highly optimized multi-module business website and student training hub built for **Eazzesam Technologies** (Accra, Ghana). This platform features a custom persistent Light/Dark mode engine, an interactive AI Agent console with cloud/local routing, real-time course search engines, and automated contact validation.

---

## 🚀 Key Features

* **Floating Quick Action Hub:** Fixed, thumb-friendly access buttons for direct calls and WhatsApp messaging, optimized for mobile user conversion.
* **Interactive FAQ Accordion Matrix:** A dynamic, smooth layout to answer common customer inquiries about location, installments, and data security without cluttering the screen.
* **Dynamic Live Search Filter:** Instant keyup-triggered searching across the **IT Academy** training modules to help students filter courses effortlessly.
* **Eazzesam Global Brain (AI Agent Console):** Dual-mode AI system supporting custom programmatic semantic routing for local inquiries, with optional support for live cloud LLM (Gemini Pro) connection via API key entry.
* **High-Contrast Form Validation Engine:** Secured asynchronous email communication layer hidden behind a cryptographic cryptographic token layout using Formspree, featuring exhaustive client-side error handling.
* **Responsive Hybrid Design:** Complete view-switching layout running seamlessly under Tailwind CSS, supporting hardware fluid animations (`Animate.css`).

---

## 🛠️ Tech Stack & Dependencies

* **Markup:** HTML5 (Semantic and fully accessible structure)
* **Styling:** [Tailwind CSS v3 (via CDN)](https://tailwindcss.com/)
* **Icons:** [Google Material Symbols Outlined](https://fonts.google.com/icons)
* **Animations:** [Animate.css v4](https://animate.style/)
* **Forms Backend:** [Formspree API](https://formspree.io/)
* **LLM Model Support:** Optional integration with Google Gemini Pro API

---

## 📁 File Structure

```text
├── index.html          # Main single-page multi-module web application
└── README.md           # Documentation and setup instructions (This file)

```
## 💻 Getting Started & Installation
### 1. Clone the Codebase
Save the code locally or clone it into your active working directory:
```bash
git clone [https://github.com/your-username/eazzesam-technologies.git](https://github.com/your-username/eazzesam-technologies.git)
cd eazzesam-technologies

```
### 2. Configure Form Endpoints
The form is currently pre-configured to handle submissions via Formspree endpoint token xvgowgvl. To route contact form emails directly to your company inbox:
 1. Register for a free account at Formspree.io.
 2. Create a new form and copy your unique form endpoint hash code.
 3. Open index.html, locate line **381**, and update the endpoint link:
   ```javascript
   const response = await fetch("[https://formspree.io/f/YOUR_ENDPOINT_HERE](https://formspree.io/f/YOUR_ENDPOINT_HERE)", {
   
   ```
### 3. Run the Project
Because this is a pure front-end web layout using standard web APIs, you don't need compilation or Node modules. You can launch it instantly:
 * **Option A:** Double-click index.html to load it inside any modern browser.
 * **Option B (Recommended):** Run it through a local development server like VS Code's **Live Server** extension or Python:
   ```bash
   python3 -m http.server 8000
   
   ```
   Then visit http://localhost:8000 in your browser.
## 🧠 Using the AI Agent Console
The **AI Agent** comes configured out-of-the-box with a lightweight local response router that accurately handles common inquiries about **Web Design, Security/CCTV Cameras, and IT Academy schedules**.
### Adding Cloud Power (Gemini Integration)
To unlock full reasoning, code generation, and complex conversational capabilities for your users:
 1. Obtain an API key from the **Google AI Studio**.
 2. Navigate to the **AI Agent** tab on the website.
 3. Paste the key into the **Optional Cloud LLM Hook** password input field.
 4. The system will switch dynamically to cloud processing mode.
## 📝 License
Distributed under the MIT License. See LICENSE inside your repository details for more information.
```