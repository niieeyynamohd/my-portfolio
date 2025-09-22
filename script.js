
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation links smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Typing animation for name
const names = ['Amanina ', 'Software Developer', 'Aspiring Full Stack Developer', 'Tech Enthusiast'];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
const nameElement = document.getElementById('nameText');

function typeWriter() {
    const currentName = names[nameIndex];

    if (isDeleting) {
        nameElement.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
    } else {
        nameElement.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentName.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
    }

    const speed = isDeleting ? 100 : 150;
    setTimeout(typeWriter, speed);
}

// Start typing animation after page load
setTimeout(typeWriter, 1000);

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');

            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.animationDelay = `${index * 0.2}s`;
                    bar.classList.add('skill-bar');
                }, 200);
            });
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = 'Sending...';
    button.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        button.textContent = 'Message Sent! ✓';
        button.style.background = 'linear-gradient(to right, #10b981, #059669)';

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
            event.target.reset();
        }, 2000);
    }, 1500);
}

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-gray-900/95');
    } else {
        nav.classList.remove('bg-gray-900/95');
    }
});

// Marquee functionality
function setupMarqueeHoverEvents() {
    // Projects marquee hover events
    const projectsMarquee = document.getElementById('projectsMarquee');
    const projectsCards = projectsMarquee.querySelectorAll('.marquee-item');

    projectsCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            projectsMarquee.classList.add('paused');
        });
        card.addEventListener('mouseleave', () => {
            projectsMarquee.classList.remove('paused');
        });
    });

    // Certificates marquee hover events
    const certificatesMarquee = document.getElementById('certificatesMarquee');
    const certificatesCards = certificatesMarquee.querySelectorAll('.marquee-item');

    certificatesCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            certificatesMarquee.classList.add('paused');
        });
        card.addEventListener('mouseleave', () => {
            certificatesMarquee.classList.remove('paused');
        });
    });

    // Experience marquee hover events
    const experienceMarquee = document.getElementById('experienceMarquee');
    const experienceCards = experienceMarquee.querySelectorAll('.marquee-item');

    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            experienceMarquee.classList.add('paused');
        });
        card.addEventListener('mouseleave', () => {
            experienceMarquee.classList.remove('paused');
        });
    });
}

// Certificate details popup
function showCertificateDetails(certType) {
    const details = {
        'award': {
            title: 'GOLD AWARD',
            description: 'This award was presented for my final year project, "Interactive Approach to Preserve the Kadazandusun Language Through Gamification." The project involved developing an innovative application that uses gamification to help preserve a local language.',
            issuer: 'Pertandingan Inovasi Antara Asasi Malaysia (PITRAM 2025)',
            date: '22 - 23 February 2025'
        },
        'elatih': {
            title: 'Navigating Through Microsoft Power BI',
            description: 'A certificate of completion for an online course focused on navigating and using Microsoft Power BI. This demonstrates my proficiency in data visualization and business intelligence, skills that are highly valued in data-driven roles.',
            issuer: 'HRD Corp e-LATiH (Human Resource Development Corporation)',
            date: '19 September 2025'
        },
        'program': {
            title: 'Certificate of Participation: Webinar Leadership: Humanism or Humanity',
            description: 'A certificate acknowledging participation in a leadership webinar that explored the concepts of humanism and humanity. This demonstrates engagement in personal development and a commitment to understanding leadership principles.',
            issuer: 'UMS (Universiti Malaysia Sabah), with collaboration from the Centre for Co-Curriculum and Student Development',
            date: '1 December 2021'
        },
        'diploma': {
            title: 'Diploma In Information Technology',
            description: 'This diploma serves as an official certification of my educational qualification at the diploma level. It represents the successful completion of a comprehensive program in Information Technology with a specialization in Digital Technology, providing a strong foundation in computing, programming, and platform technologies.',
            issuer: 'Politeknik Kuching Sarawak',
            date: 'January 2024'
        },
        'cisco': {
            title: 'Cybersecurity Essentials',
            description: 'A certificate for completing the Cybersecurity Essentials course, which provides foundational knowledge and skills in cybersecurity. This includes understanding security principles, threats, and best practices for protecting data and networks.',
            issuer: 'Cisco Networking Academy and UMS',
            date: '25 January 2025'
        }
    };

    const cert = details[certType];
    if (cert) {
        alert(`${cert.title}\n\n${cert.description}\n\nIssued by: ${cert.issuer}\nDate: ${cert.date}`);
    }
}

// Section switching functionality
function showSection(sectionType) {
    // Get all sections
    const projectsSection = document.getElementById('projectsSection');
    const certificatesSection = document.getElementById('certificatesSection');
    const experienceSection = document.getElementById('experienceSection');
    
    // Hide all sections
    projectsSection.classList.add('hidden');
    certificatesSection.classList.add('hidden');
    experienceSection.classList.add('hidden');
    
    // Also set display: none to ensure they're hidden
    projectsSection.style.display = 'none';
    certificatesSection.style.display = 'none';
    experienceSection.style.display = 'none';
    
    // Hide all marquee containers and grids
    const projectsMarqueeContainer = document.getElementById('projectsMarqueeContainer');
    const projectsGrid = document.getElementById('projectsGrid');
    const certificatesMarqueeContainer = document.getElementById('certificatesMarqueeContainer');
    const certificatesGrid = document.getElementById('certificatesGrid');
    const experienceMarqueeContainer = document.querySelector('#experienceSection .marquee-container');
    
    if (projectsMarqueeContainer) projectsMarqueeContainer.style.display = 'none';
    if (projectsGrid) projectsGrid.style.display = 'none';
    if (certificatesMarqueeContainer) certificatesMarqueeContainer.style.display = 'none';
    if (certificatesGrid) certificatesGrid.style.display = 'none';
    if (experienceMarqueeContainer) experienceMarqueeContainer.style.display = 'none';

    // Reset all button styles to inactive state
    document.getElementById('projectsBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all text-gray-400';
    document.getElementById('certificatesBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all text-gray-400';
    document.getElementById('experienceBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all text-gray-400';

    // Show selected section and activate button
    if (sectionType === 'projects') {
        projectsSection.classList.remove('hidden');
        projectsSection.style.display = 'block';
        document.getElementById('projectsBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all border-2 border-purple-400 text-purple-400';
        // Reset project filters to show all projects
        filterProjects('all');
    } else if (sectionType === 'certificates') {
        certificatesSection.classList.remove('hidden');
        certificatesSection.style.display = 'block';
        document.getElementById('certificatesBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all border-2 border-orange-400 text-orange-400';
        // Reset certificate filters to show all certificates
        filterCertificates('all');
    } else if (sectionType === 'experience') {
        experienceSection.classList.remove('hidden');
        experienceSection.style.display = 'block';
        document.getElementById('experienceBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all border-2 border-indigo-400 text-indigo-400';
        
        // Show experience marquee
        const expMarquee = document.querySelector('#experienceSection .marquee-container');
        if (expMarquee) expMarquee.style.display = 'block';
        
        // Scroll to the experience section immediately
        setTimeout(() => {
            const projectsContainer = document.getElementById('projects');
            if (projectsContainer) {
                window.scrollTo(0, projectsContainer.offsetTop);
            }
        }, 10);
    }
}

// Project filter functionality
function filterProjects(category) {
    // Update active button
    document.querySelectorAll('#projectsSection .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#projectsSection [data-category="${category}"]`).classList.add('active');
    
    // Get all project items
    const marqueeContainer = document.getElementById('projectsMarqueeContainer');
    const gridContainer = document.getElementById('projectsGrid');
    const allItems = document.querySelectorAll('#projectsMarquee .marquee-item');
    
    // Clear containers
    gridContainer.innerHTML = '';
    
    if (category === 'all') {
        // Show marquee and hide grid
        marqueeContainer.classList.remove('hidden');
        marqueeContainer.style.display = 'block';
        gridContainer.classList.add('hidden');
        gridContainer.style.display = 'none';
    } else {
        // Hide marquee and show grid
        marqueeContainer.classList.add('hidden');
        marqueeContainer.style.display = 'none';
        gridContainer.classList.remove('hidden');
        gridContainer.style.display = 'grid';
        
        // Filter and add items to grid
        allItems.forEach(item => {
            if (item.dataset.category === category) {
                const clone = item.cloneNode(true);
                gridContainer.appendChild(clone);
            }
        });
    }
}

// Certificate filter functionality
function filterCertificates(category) {
    // Update active button
    document.querySelectorAll('#certificatesSection .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#certificatesSection [data-category="${category}"]`).classList.add('active');
    
    // Get all certificate items
    const marqueeContainer = document.getElementById('certificatesMarqueeContainer');
    const gridContainer = document.getElementById('certificatesGrid');
    const allItems = document.querySelectorAll('#certificatesMarquee .marquee-item');
    
    // Clear containers
    gridContainer.innerHTML = '';
    
    if (category === 'all') {
        // Show marquee and hide grid
        marqueeContainer.classList.remove('hidden');
        marqueeContainer.style.display = 'block';
        gridContainer.classList.add('hidden');
        gridContainer.style.display = 'none';
    } else {
        // Hide marquee and show grid
        marqueeContainer.classList.add('hidden');
        marqueeContainer.style.display = 'none';
        gridContainer.classList.remove('hidden');
        gridContainer.style.display = 'grid';
        
        // Filter and add items to grid
        allItems.forEach(item => {
            if (item.dataset.category === category) {
                const clone = item.cloneNode(true);
                gridContainer.appendChild(clone);
            }
        });
    }
}

// Initialize marquee functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Setup marquee hover events
    setupMarqueeHoverEvents();

    // Check for show parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const showSectionParam = urlParams.get('show');
    
    // Check for hash in URL to determine which section to show
    const hash = window.location.hash;
    
    if (showSectionParam === 'experience') {
        // Show experience section if show=experience parameter is present
        showSection('experience');
    } else if (hash === '#experience') {
        // Show experience section if hash is #experience
        showSection('experience');
        // Scroll to experience section after a short delay to ensure it's rendered
        setTimeout(() => {
            document.getElementById('experienceSection').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        // Show projects section by default
        showSection('projects');
    }

    // Add event delegation for project cards
    document.addEventListener('click', function(e) {
        // Find the closest project card
        let projectCard = e.target.closest('.marquee-item[data-project-id]');
        if (projectCard) {
            const projectId = projectCard.dataset.projectId;
            window.location.href = `project.html?type=${projectId}`;
            return;
        }
        
        // Find the closest experience card
        let experienceCard = e.target.closest('.marquee-item[data-experience-id]');
        if (experienceCard) {
            const experienceId = experienceCard.dataset.experienceId;
            window.location.href = `experience.html?type=${experienceId}`;
            return;
        }
        
        // Find the closest certificate card
        let certCard = e.target.closest('.marquee-item[data-certificate-type]');
        if (certCard) {
            showCertificateDetails(certCard.dataset.certificateType);
        }
    });
});
function showSection(section) {
        // Hide all sections
        document.getElementById('projectsSection').classList.add('hidden');
        document.getElementById('certificatesSection').classList.add('hidden');
        document.getElementById('experienceSection').classList.add('hidden');

        // Show the selected section
        document.getElementById(section + 'Section').classList.remove('hidden');

        // Update active button
        document.querySelectorAll('.section-control-btn').forEach(btn => {
            btn.classList.remove('border-purple-400', 'text-purple-400');
            btn.classList.add('text-gray-400');
        });
        const activeBtn = document.getElementById(section + 'Btn');
        if (activeBtn) {
            activeBtn.classList.remove('text-gray-400');
            activeBtn.classList.add('border-purple-400', 'text-purple-400');
        }
    }

    // Function to show experience details
    function showExperienceDetails(expType) {
        window.location.href = `experience.html?type=${expType}`;
    }

    // Function to filter experiences
    function filterExperiences(category) {
        const cards = document.querySelectorAll('.experience-card');
        
        // Update active button
        document.querySelectorAll('#experienceSection .filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });
        
        // Filter cards
        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                // Re-trigger animation
                const slideUpElement = card.querySelector('.slide-up');
                slideUpElement.style.animation = 'none';
                setTimeout(() => {
                    slideUpElement.style.animation = '';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    }

    // On page load, check for 'show' parameter
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const showSectionParam = urlParams.get('show');
        if (showSectionParam) {
            showSection(showSectionParam);
        } else {
            // Default to projects
            showSection('projects');
        }
    });


