        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        darkBg: '#020617',
                        cardBg: '#0f172a',
                        techBlue: '#3b82f6',
                        innovGreen: '#22c55e',
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }

        // Theme Switcher Persistence 
        (function initTheme() {
            const savedTheme = localStorage.getItem('eazzesam_theme') || 'dark';
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                document.getElementById('themeToggleIcon').innerText = 'light_mode';
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                document.getElementById('themeToggleIcon').innerText = 'dark_mode';
            }
        })();

        function toggleThemeMode() {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('eazzesam_theme', 'light');
                document.getElementById('themeToggleIcon').innerText = 'dark_mode';
            } else {
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
                localStorage.setItem('eazzesam_theme', 'dark');
                document.getElementById('themeToggleIcon').innerText = 'light_mode';
            }
        }

        // Pricing Modal Matrix Operations
        let selectedModalPackageName = "";
        function launchInteractiveBookingModal(packageName) {
            selectedModalPackageName = packageName;
            document.getElementById('modalPackageTargetText').innerText = packageName;
            const modal = document.getElementById('pricingInteractiveModal');
            modal.classList.remove('hidden');
        }

        function closeInteractiveModal() {
            document.getElementById('pricingInteractiveModal').classList.add('hidden');
        }

        function confirmModalRouting() {
            closeInteractiveModal();
            navigateTo('contact');
            const selectEl = document.getElementById('formService');
            if (selectedModalPackageName.includes('Starter')) {
                selectEl.selectedIndex = 1; // Presets drop to Web Apps
            } else if (selectedModalPackageName.includes('Corporate')) {
                selectEl.selectedIndex = 2; // Presets drop to AI chatbot layouts
            } else {
                selectEl.selectedIndex = 3; // Presets drop to Media & hardware systems
            }
        }

        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById(`${id}-icon`);
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        function filterAcademyTracks() {
            const input = document.getElementById('moduleSearchField').value.toLowerCase();
            const cards = document.querySelectorAll('.course-card');
            cards.forEach(card => {
                if (card.innerText.toLowerCase().includes(input)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const btnIcon = document.getElementById('mobileMenuBtn').querySelector('span');
            menu.classList.toggle('hidden');
            btnIcon.innerText = menu.classList.contains('hidden') ? "menu" : "close";
        }

        function navigateTo(pageId) {
            document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active-page'));
            document.querySelectorAll('header nav a').forEach(link => link.classList.remove('nav-active'));
            document.querySelectorAll('#mobileMenu a').forEach(link => link.classList.remove('mobile-nav-active'));

            const targetSection = document.getElementById(`page-${pageId}`);
            if(targetSection) {
                targetSection.classList.add('active-page');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            const activeNav = document.getElementById(`nav-${pageId}`);
            if(activeNav) activeNav.classList.add('nav-active');
        }

        // Intelligent Automated Support Console Scripting
        function handleDedicatedChatInput(e) {
            e.preventDefault();
            const inputField = document.getElementById('dedicatedField');
            const msg = inputField.value.trim();
            if(!msg) return;

            renderDedicatedMessage(msg, 'user');
            inputField.value = '';
            setTimeout(() => { processDedicatedBrainResponse(msg); }, 400);
        }

        function triggerDedicatedReply(promptText) {
            renderDedicatedMessage(promptText, 'user');
            setTimeout(() => { processDedicatedBrainResponse(promptText); }, 400);
        }

        function renderDedicatedMessage(text, sender) {
            const consoleBox = document.getElementById('dedicatedConsole');
            const block = document.createElement('div');
            if(sender === 'user') {
                block.className = "flex flex-col space-y-1 max-w-[80%] ml-auto items-end animate__animated animate__fadeInUp";
                block.innerHTML = `<div class="bg-gradient-to-r from-techBlue to-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm">${text}</div>`;
            } else {
                block.className = "flex flex-col space-y-1 max-w-[85%] animate__animated animate__fadeInUp";
                block.innerHTML = `<div class="bg-white dark:bg-slate-900 text-slate-800 dark:text-gray-200 p-3.5 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-800/80 leading-relaxed shadow-sm">${text}</div><span class="text-[9px] text-slate-400 dark:text-gray-500 px-1">Eazzesam Support</span>`;
            }
            consoleBox.appendChild(block);
            consoleBox.scrollTop = consoleBox.scrollHeight;
        }

        function processDedicatedBrainResponse(query) {
            const clean = query.toLowerCase();
            let reply = "";

            if (clean.includes('service') || clean.includes('offer') || clean.includes('what do you do')) {
                reply = "😊 **Here is what we specialize in at Eazzesam Technologies!**<br><br>• 🌐 **Web Design & Development:** Business portals, E-commerce, portfolios, and school software tracking layouts.<br>• 🤖 **AI Solutions:** Smart customer service automation and automated chatbots.<br>• 📱 **Mobile Apps:** Premium Android and iOS deployments.<br>• 🎨 **Branding & Production:** High-end Graphic design alongside cinematic Video Editing.<br>• 🖥️ **Software & Security:** Custom desktop systems, proactive IT maintenance support, phone-linked CCTV networks, and full Smart Home installations!";
            } else if (clean.includes('training') || clean.includes('class') || clean.includes('learn') || clean.includes('academy') || clean.includes('certif')) {
                reply = "🎓 **Our Certified IT Academy tracks are completely practical!**<br><br>We focus on highly interactive, beginner-friendly programming layout guides, CCTV setup parameters, and fundamental office spreadsheet automation metrics. On completion, you will receive an official physical Course Competency Certificate! Installments are highly flexible.";
            } else if (clean.includes('contact') || clean.includes('phone') || clean.includes('whatsapp') || clean.includes('call') || clean.includes('number')) {
                reply = "📱 **Let's kick off your dynamic deployment updates!**<br><br>You can talk directly to our team via call or WhatsApp at **054 242 4592**, drop us an email via **sammyoun24@gmail.com**, or connect on LinkedIn to review our founder's portfolio timeline. We are base-configured right out of Accra, Ghana!";
            } else if (clean.includes('cctv') || clean.includes('camera') || clean.includes('security')) {
                reply = "📹 **Keep tabs on your space from anywhere globally!**<br><br>We handle complete residential and commercial CCTV loop installations, connecting dynamic high-definition live streams directly to your mobile devices alongside encrypted fallback recording setups.";
            } else {
                reply = "✨ Thanks for reaching out! I'm here to help guide your digital expansion goals. Feel free to ask about our **Web Applications, AI Chatbots, CCTV Systems, or Certified IT Training paths**. You can also reach our main desk anytime at **054 242 4592**!";
            }
            renderDedicatedMessage(reply, 'system');
        }

        function clearDedicatedChat() {
            document.getElementById('dedicatedConsole').innerHTML = `<div class="flex flex-col space-y-1 max-w-[85%] animate__animated animate__fadeIn"><div class="bg-white dark:bg-slate-900 text-slate-800 dark:text-gray-200 p-3.5 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-800/60 text-sm shadow-sm">Console refreshed! How can I help you build your digital roadmap today?</div></div>`;
        }

        // Contact Form Processing - Powered 100% by Web3Forms
        async function handleFormSubmission(e) {
            e.preventDefault();
            const errorBox = document.getElementById('formValidationErrorBox');
            const successOverlay = document.getElementById('formSuccess');
            const submitBtn = document.getElementById('formSubmitBtn');
            
            const nameEl = document.getElementById('formName');
            const phoneEl = document.getElementById('formPhone');
            const emailEl = document.getElementById('formEmail');
            const messageEl = document.getElementById('formMessage');
            const serviceEl = document.getElementById('formService');

            errorBox.classList.add('hidden');
            
            if (nameEl.value.trim().length < 2 || messageEl.value.trim().length < 10) {
                errorBox.innerHTML = "<strong>⚠️ Validation Check Error:</strong> Please enter a descriptive message before submitting.";
                errorBox.classList.remove('hidden');
                return;
            }

            // UI feedback while working
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";
            submitBtn.innerText = "Transmitting Packet...";

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json", 
                        "Accept": "application/json" 
                    },
                    body: JSON.stringify({
                        access_key: "9e1e34dd-8c36-47a1-8bb9-704e2fd52c2e",
                        name: nameEl.value.trim(),
                        phone: phoneEl.value.trim(),
                        email: emailEl.value.trim(),
                        subject: `🔥 New Eazzesam Tech Lead: ${serviceEl.value}`,
                        message: messageEl.value.trim(),
                        from_name: "Eazzesam Web Portal"
                    })
                });
                
                const result = await response.json();
                
                if (response.status === 200 && result.success) { 
                    successOverlay.classList.remove('hidden'); 
                } else { 
                    throw new Error(result.message || "Submission failed"); 
                }
            } catch (err) {
                errorBox.innerHTML = `<strong>🛑 Pipeline Interrupted:</strong> ${err.message || 'Transmission error'}. Please contact us directly via WhatsApp at 054 242 4592.`;
                errorBox.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.innerHTML = `<span>Send Message</span> <span id="formSubmitIcon" class="material-symbols-outlined text-sm">send</span>`;
            }
        }

        function resetContactForm() { document.getElementById('contactForm').reset(); document.getElementById('formSuccess').classList.add('hidden'); }
   
