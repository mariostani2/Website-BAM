/* =============================================
   BAM AI - Ultra Modern Website JavaScript
   Full Functional Premium Features
   ============================================= */

// =============================================
// Translation Data - Albanian and English
// =============================================
const translations = {
    sq: {
        // Navigation
        "nav.solutions": "Zgjidhjet",
        "nav.caseStudy": "Rastet e Studimit",
        "nav.about": "Rreth Nesh",
        "nav.templates": "Shabllonet",
        "nav.bookCall": "Rezervo Thirrje",

        // Hero Section
        "hero.badge": "Fuqizuar nga AI",
        "hero.title1": "Partneri Juaj",
        "hero.title2": "AI",
        "hero.title3": "360",
        "hero.title4": "Gradë",
        "hero.subtitle": "Transformojmë biznesin tuaj me zgjidhje të avancuara të Inteligjencës Artificiale",
        "hero.startNow": "FILLO TANI",
        "hero.discoverServices": "ZBULO SHËRBIMET",
        "hero.trustedBy": "Besuar nga 60+ kompani",
        "hero.scroll": "Lëviz poshtë",

        // Services Section
        "services.tag": "SHËRBIMET TONA",
        "services.title1": "Zgjidhni",
        "services.title2": "rrugën tuaj",
        "services.subtitle": "Automatizime të personalizuara ose produkte gati për përdorim.",
        "services.card1.title1": "AI Transformation",
        "services.card1.title2": "Partner",
        "services.card1.desc": "Mësojmë ekipin tuaj, analizojmë proceset tuaja dhe zhvillojmë zgjidhje të personalizuara për biznesin tuaj.",
        "services.card1.feature1": "✓ Trajnim i ekipit",
        "services.card1.feature2": "✓ Analizë procesesh",
        "services.card1.feature3": "✓ Zgjidhje të personalizuara",
        "services.card1.cta": "FILLO TANI",
        "services.card2.title1": "Prisma",
        "services.card2.title2": "Agent",
        "services.card2.desc": "Një agjent AI që lexon foto dhe mesazhe, kursen 20 minuta në ditë për punonjës dhe liron HR nga orët e punës manuale.",
        "services.card2.feature1": "✓ Lexim automatik",
        "services.card2.feature2": "✓ 20 min/ditë kursim",
        "services.card2.feature3": "✓ Automatizim HR",
        "services.card2.cta": "ZBULO PRISMA",
        "services.card3.title1": "Custom",
        "services.card3.title2": "Solutions",
        "services.card3.desc": "Zgjidhje të personalizuara AI për nevojat specifike të biznesit tuaj, nga chatbots deri tek automatizimi i proceseve.",
        "services.card3.feature1": "✓ Chatbots AI",
        "services.card3.feature2": "✓ Automatizim",
        "services.card3.feature3": "✓ Integrime API",
        "services.card3.cta": "MËSO MË SHUMË",

        // Impact Section
        "impact.tag": "NDIKIMI YNË",
        "impact.title1": "Rezultate që",
        "impact.title2": "flasin vetë",
        "impact.stat1": "KOMPANI PARTNERE",
        "impact.stat2": "ZGJIDHJE NË PRODHIM",
        "impact.stat3": "PËRDORUES TË ARRITUR",
        "impact.stat4": "KËNAQËSI KLIENTËSH",

        // Features Section
        "features.tag": "PSE NE?",
        "features.title1": "Çfarë na bën",
        "features.title2": "të veçantë",
        "features.item1.title": "Shpejtësi",
        "features.item1.desc": "Implementim i shpejtë i zgjidhjeve AI në biznesin tuaj",
        "features.item2.title": "Siguri",
        "features.item2.desc": "Mbrojtje maksimale e të dhënave dhe privatësia",
        "features.item3.title": "24/7 Mbështetje",
        "features.item3.desc": "Ekip i dedikuar për ju në çdo kohë",
        "features.item4.title": "Integrime",
        "features.item4.desc": "Lidhje me sistemet tuaja ekzistuese",

        // Case Studies
        "cases.tag": "RASTET E SUKSESIT",
        "cases.title1": "Shiko",
        "cases.title2": "rezultatet tona",
        "cases.case1.category": "Automatizim HR",
        "cases.case1.title": "Kursim 200+ orë/muaj",
        "cases.case1.desc": "Si ndihmuam një kompani të reduktojë punën manuale me 80%",
        "cases.case2.category": "Chatbot AI",
        "cases.case2.title": "+150% kënaqësi klienti",
        "cases.case2.desc": "Chatbot 24/7 që trajton 90% të pyetjeve automatikisht",
        "cases.case3.category": "Analitikë",
        "cases.case3.title": "Parashikim 95% saktësi",
        "cases.case3.desc": "Model AI për parashikimin e shitjeve dhe stokut",
        "cases.readMore": "Lexo më shumë →",
        "cases.cta": "Shiko të gjitha rastet →",

        // Testimonials
        "testimonials.tag": "DËSHMITË",
        "testimonials.title1": "Çfarë thonë",
        "testimonials.title2": "klientët tanë",
        "testimonials.t1.text": "\"BAM AI transformoi tërësisht mënyrën se si punojmë. Kursejmë 30+ orë në javë!\"",
        "testimonials.t1.name": "Arben Krasniqi",
        "testimonials.t1.role": "CEO, TechCorp Albania",
        "testimonials.t2.text": "\"Ekipi më profesional me të cilin kam punuar. Zgjidhjet e tyre janë të shkëlqyera.\"",
        "testimonials.t2.name": "Elira Mustafa",
        "testimonials.t2.role": "CTO, Fintech Kosovo",
        "testimonials.t3.text": "\"ROI 300% në vetëm 6 muaj. Investimi më i mirë që kemi bërë.\"",
        "testimonials.t3.name": "Besnik Hoxha",
        "testimonials.t3.role": "Drejtor, Retail Plus",

        // Contact Section
        "contact.tag": "KONTAKTO",
        "contact.title1": "Le të flasim për",
        "contact.title2": "projektin tuaj",
        "contact.subtitle": "Jemi gati t'ju ndihmojmë të transformoni biznesin tuaj me AI.",
        "contact.phone": "Telefon",
        "contact.email": "Email",
        "contact.address": "Adresa",
        "contact.form.title": "Dërgo një mesazh",
        "contact.form.name": "Emri *",
        "contact.form.email": "Email *",
        "contact.form.phone": "Telefon",
        "contact.form.company": "Kompania",
        "contact.form.service": "Shërbimi",
        "contact.form.selectService": "Zgjidhni shërbimin...",
        "contact.form.option1": "AI Transformation Partner",
        "contact.form.option2": "Prisma Agent",
        "contact.form.option3": "Custom Solutions",
        "contact.form.option4": "Tjetër",
        "contact.form.message": "Mesazhi *",
        "contact.form.submit": "Dërgo Kërkesën",
        "contact.form.disclaimer": "Duke dërguar, pranoni politikën tonë të privatësisë.",
        "contact.form.nameError": "Ju lutem shkruani emrin",
        "contact.form.emailError": "Email i pavlefshëm",
        "contact.form.messageError": "Ju lutem shkruani mesazhin",

        // Modal
        "modal.success.title": "Faleminderit!",
        "modal.success.message": "Kërkesa juaj u dërgua me sukses. Do t'ju kontaktojmë brenda 24 orëve.",
        "modal.success.button": "Në rregull",

        // Footer
        "footer.desc": "Partneri juaj AI 360 Gradë. Transformojmë mënyrën se si bizneset punojnë përmes Inteligjencës Artificiale.",
        "footer.newsletter": "Abonohu për lajme",
        "footer.services": "Shërbimet",
        "footer.company": "Kompania",
        "footer.legal": "Ligjore",
        "footer.link1": "AI Transformation Partner",
        "footer.link2": "Trajnime Biznesi",
        "footer.link3": "Prisma Agent",
        "footer.link4": "Custom Solutions",
        "footer.link5": "Rreth Nesh",
        "footer.link6": "Rastet e Studimit",
        "footer.link7": "Templates",
        "footer.link8": "Kontakto",
        "footer.link9": "Politika e Privatësisë",
        "footer.link10": "Kushtet e Shërbimit",
        "footer.link11": "Politika e Cookies",
        "footer.rights": "Të gjitha të drejtat e rezervuara."
    },
    en: {
        // Navigation
        "nav.solutions": "Solutions",
        "nav.caseStudy": "Case Studies",
        "nav.about": "About Us",
        "nav.templates": "Templates",
        "nav.bookCall": "Book a Call",

        // Hero Section
        "hero.badge": "Powered by AI",
        "hero.title1": "Your",
        "hero.title2": "AI",
        "hero.title3": "360-Degree",
        "hero.title4": "Partner",
        "hero.subtitle": "We transform your business with advanced Artificial Intelligence solutions",
        "hero.startNow": "START NOW",
        "hero.discoverServices": "DISCOVER SERVICES",
        "hero.trustedBy": "Trusted by 60+ companies",
        "hero.scroll": "Scroll down",

        // Services Section
        "services.tag": "OUR SERVICES",
        "services.title1": "Choose",
        "services.title2": "your path",
        "services.subtitle": "Custom automations or ready-to-use products.",
        "services.card1.title1": "AI Transformation",
        "services.card1.title2": "Partner",
        "services.card1.desc": "We train your team, analyze your processes, and develop customized solutions for your business.",
        "services.card1.feature1": "✓ Team training",
        "services.card1.feature2": "✓ Process analysis",
        "services.card1.feature3": "✓ Custom solutions",
        "services.card1.cta": "START NOW",
        "services.card2.title1": "Prisma",
        "services.card2.title2": "Agent",
        "services.card2.desc": "An AI agent that reads photos and messages, saves 20 minutes per day per employee, and frees HR from manual work.",
        "services.card2.feature1": "✓ Auto reading",
        "services.card2.feature2": "✓ 20 min/day savings",
        "services.card2.feature3": "✓ HR automation",
        "services.card2.cta": "DISCOVER PRISMA",
        "services.card3.title1": "Custom",
        "services.card3.title2": "Solutions",
        "services.card3.desc": "Custom AI solutions for your specific business needs, from chatbots to process automation.",
        "services.card3.feature1": "✓ AI Chatbots",
        "services.card3.feature2": "✓ Automation",
        "services.card3.feature3": "✓ API Integrations",
        "services.card3.cta": "LEARN MORE",

        // Impact Section
        "impact.tag": "OUR IMPACT",
        "impact.title1": "Results that",
        "impact.title2": "speak for themselves",
        "impact.stat1": "PARTNER COMPANIES",
        "impact.stat2": "SOLUTIONS IN PRODUCTION",
        "impact.stat3": "USERS REACHED",
        "impact.stat4": "CLIENT SATISFACTION",

        // Features Section
        "features.tag": "WHY US?",
        "features.title1": "What makes us",
        "features.title2": "special",
        "features.item1.title": "Speed",
        "features.item1.desc": "Fast implementation of AI solutions in your business",
        "features.item2.title": "Security",
        "features.item2.desc": "Maximum data protection and privacy",
        "features.item3.title": "24/7 Support",
        "features.item3.desc": "Dedicated team for you at all times",
        "features.item4.title": "Integrations",
        "features.item4.desc": "Connect with your existing systems",

        // Case Studies
        "cases.tag": "SUCCESS STORIES",
        "cases.title1": "View",
        "cases.title2": "our results",
        "cases.case1.category": "HR Automation",
        "cases.case1.title": "Saved 200+ hours/month",
        "cases.case1.desc": "How we helped a company reduce manual work by 80%",
        "cases.case2.category": "AI Chatbot",
        "cases.case2.title": "+150% customer satisfaction",
        "cases.case2.desc": "24/7 chatbot handling 90% of queries automatically",
        "cases.case3.category": "Analytics",
        "cases.case3.title": "95% prediction accuracy",
        "cases.case3.desc": "AI model for sales and inventory forecasting",
        "cases.readMore": "Read more →",
        "cases.cta": "View all case studies →",

        // Testimonials
        "testimonials.tag": "TESTIMONIALS",
        "testimonials.title1": "What our",
        "testimonials.title2": "clients say",
        "testimonials.t1.text": "\"BAM AI completely transformed the way we work. We save 30+ hours per week!\"",
        "testimonials.t1.name": "Arben Krasniqi",
        "testimonials.t1.role": "CEO, TechCorp Albania",
        "testimonials.t2.text": "\"The most professional team I've worked with. Their solutions are excellent.\"",
        "testimonials.t2.name": "Elira Mustafa",
        "testimonials.t2.role": "CTO, Fintech Kosovo",
        "testimonials.t3.text": "\"300% ROI in just 6 months. The best investment we've made.\"",
        "testimonials.t3.name": "Besnik Hoxha",
        "testimonials.t3.role": "Director, Retail Plus",

        // Contact Section
        "contact.tag": "CONTACT",
        "contact.title1": "Let's talk about",
        "contact.title2": "your project",
        "contact.subtitle": "We're ready to help you transform your business with AI.",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.address": "Address",
        "contact.form.title": "Send a message",
        "contact.form.name": "Name *",
        "contact.form.email": "Email *",
        "contact.form.phone": "Phone",
        "contact.form.company": "Company",
        "contact.form.service": "Service",
        "contact.form.selectService": "Select a service...",
        "contact.form.option1": "AI Transformation Partner",
        "contact.form.option2": "Prisma Agent",
        "contact.form.option3": "Custom Solutions",
        "contact.form.option4": "Other",
        "contact.form.message": "Message *",
        "contact.form.submit": "Send Request",
        "contact.form.disclaimer": "By submitting, you agree to our privacy policy.",
        "contact.form.nameError": "Please enter your name",
        "contact.form.emailError": "Invalid email",
        "contact.form.messageError": "Please enter a message",

        // Modal
        "modal.success.title": "Thank you!",
        "modal.success.message": "Your request was sent successfully. We'll contact you within 24 hours.",
        "modal.success.button": "OK",

        // Footer
        "footer.desc": "Your 360-Degree AI Partner. We transform the way businesses work through Artificial Intelligence.",
        "footer.newsletter": "Subscribe to newsletter",
        "footer.services": "Services",
        "footer.company": "Company",
        "footer.legal": "Legal",
        "footer.link1": "AI Transformation Partner",
        "footer.link2": "Business Training",
        "footer.link3": "Prisma Agent",
        "footer.link4": "Custom Solutions",
        "footer.link5": "About Us",
        "footer.link6": "Case Studies",
        "footer.link7": "Templates",
        "footer.link8": "Contact",
        "footer.link9": "Privacy Policy",
        "footer.link10": "Terms of Service",
        "footer.link11": "Cookie Policy",
        "footer.rights": "All rights reserved."
    }
};

// Current language state
let currentLang = 'sq';

// =============================================
// Initialize when DOM is ready
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initParticles();
    initCursorGlow();
    initMobileMenu();
    initLanguageToggle();
    initSmoothScroll();
    initScrollReveal();
    initCounterAnimation();
    initFormHandler();
    initHeaderScroll();
    initBackToTop();
    initTiltEffect();

    // Check for saved language
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== currentLang) {
        setLanguage(savedLang);
    }
});

// =============================================
// Loading Screen
// =============================================
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    document.body.classList.add('loading');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 1800);
    });

    // Fallback in case load event already fired
    if (document.readyState === 'complete') {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 1800);
    }
}

// =============================================
// Particle Animation System
// =============================================
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    // Random size
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random animation
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 15 + 15) + 's';

    container.appendChild(particle);
}

// =============================================
// Cursor Glow Effect
// =============================================
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('active');
    });

    // Smooth follow animation
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

// =============================================
// Mobile Menu
// =============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// =============================================
// Language Toggle System
// =============================================
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// =============================================
// Smooth Scrolling
// =============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// Scroll Reveal Animation
// =============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Trigger counter animation for stat cards
                if (entry.target.classList.contains('stat-card')) {
                    const counter = entry.target.querySelector('.stat-number');
                    if (counter && counter.dataset.count) {
                        animateCounter(counter);
                    }
                }
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// =============================================
// Counter Animation
// =============================================
function initCounterAnimation() {
    // Counter animation is triggered by scroll reveal
}

function animateCounter(element) {
    if (element.dataset.animated) return;
    element.dataset.animated = 'true';

    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateCounter);
}

// =============================================
// Form Handler
// =============================================
function initFormHandler() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Real-time validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all required fields
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) return;

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('span');
        const originalText = btnText.textContent;

        submitBtn.disabled = true;
        btnText.textContent = currentLang === 'sq' ? 'Duke dërguar...' : 'Sending...';

        // Simulate API call
        setTimeout(() => {
            // Reset form
            form.reset();
            submitBtn.disabled = false;
            btnText.textContent = originalText;

            // Show success modal
            showModal('successModal');

            console.log('Form submitted:', data);
        }, 1500);
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            if (input.value) {
                input.value = '';
                input.placeholder = currentLang === 'sq' ? 'Faleminderit!' : 'Thank you!';
                setTimeout(() => {
                    input.placeholder = currentLang === 'sq' ? 'Email juaj' : 'Your email';
                }, 2000);
            }
        });
    }
}

function validateField(input) {
    const parent = input.parentElement;
    let isValid = true;

    if (input.required && !input.value.trim()) {
        isValid = false;
    }

    if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            isValid = false;
        }
    }

    parent.classList.toggle('error', !isValid);
    return isValid;
}

// =============================================
// Modal Functions
// =============================================
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Close modal on background click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Make closeModal available globally
window.closeModal = closeModal;

// =============================================
// Header Scroll Effect
// =============================================
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// =============================================
// Back to Top Button
// =============================================
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============================================
// Tilt Effect for Cards
// =============================================
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// =============================================
// Page Transition Effect
// =============================================
document.querySelectorAll('a:not([href^="#"]):not([href^="javascript"])').forEach(link => {
    if (link.hostname === window.location.hostname) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s';
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    }
});

// Fade in on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
