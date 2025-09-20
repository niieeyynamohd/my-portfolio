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

// Project details popup
function showProjectDetails(projectType) {
    const details = {
        analytics: {
            title: 'Business Analytics Dashboard',
            description: 'A comprehensive real-time business intelligence platform featuring advanced analytics, KPI tracking, automated reporting, and interactive data visualizations. Built with modern web technologies to handle large datasets and provide actionable insights.',
            features: ['Real-time data processing', 'Interactive charts and graphs', 'Automated report generation', 'Custom KPI tracking', 'Role-based access control', 'Export functionality'],
            tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']
        },
        elearning: {
            title: 'E-Learning Platform',
            description: 'An interactive online learning management system with progress tracking, video courses, quizzes, and certification system. Features include student enrollment, course management, and comprehensive analytics for educators.',
            features: ['Video course streaming', 'Progress tracking', 'Interactive quizzes', 'Certification system', 'Discussion forums', 'Mobile responsive design'],
            tech: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'Stripe API']
        },
        crm: {
            title: 'Enterprise CRM System',
            description: 'A comprehensive customer relationship management system with lead tracking, sales pipeline management, and automated workflow processes. Designed for enterprise-scale operations with advanced reporting and integration capabilities.',
            features: ['Lead management', 'Sales pipeline tracking', 'Automated workflows', 'Email integration', 'Advanced reporting', 'Third-party integrations'],
            tech: ['Angular', 'Spring Boot', 'MySQL', 'Apache Kafka', 'Elasticsearch', 'Docker']
        },
        banking: {
            title: 'Mobile Banking App',
            description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features. Built with React Native for cross-platform compatibility.',
            features: ['Biometric authentication', 'Real-time transactions', 'Account management', 'Bill payments', 'Investment tracking', 'Security alerts'],
            tech: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Stripe API', 'Firebase']
        },
        chatbot: {
            title: 'AI Chatbot Platform',
            description: 'An intelligent chatbot platform powered by natural language processing and machine learning. Provides automated customer support with context-aware responses and continuous learning capabilities.',
            features: ['Natural language processing', 'Context-aware responses', 'Multi-language support', 'Analytics dashboard', 'Integration APIs', 'Continuous learning'],
            tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker']
        },
        iot: {
            title: 'IoT Smart Home System',
            description: 'A complete IoT solution for smart home automation featuring voice control, energy monitoring, and intelligent device management. Integrates with popular smart home ecosystems.',
            features: ['Voice control integration', 'Energy monitoring', 'Device automation', 'Mobile app control', 'Security monitoring', 'Weather integration'],
            tech: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'React Native', 'InfluxDB']
        }
    };

    const project = details[projectType];
    alert(`${project.title}\n\n${project.description}\n\nKey Features:\n• ${project.features.join('\n• ')}\n\nTechnologies:\n${project.tech.join(', ')}`);
}

// Certificate details popup
function showCertificateDetails(certType) {
    const details = {
        aws: {
            title: 'AWS Certified Solutions Architect - Associate',
            description: 'Validates expertise in designing distributed systems and applications on the AWS platform. Covers compute, networking, storage, and database AWS services.',
            skills: ['AWS Architecture Design', 'Cost Optimization', 'Security Best Practices', 'High Availability Design', 'Disaster Recovery Planning'],
            validation: 'Certificate ID: AWS-ASA-12345 | Credly Badge Available'
        },
        gcp: {
            title: 'Google Cloud Professional Cloud Architect',
            description: 'Demonstrates ability to design, develop, and manage robust, secure, scalable, and dynamic solutions to drive business objectives using Google Cloud Platform.',
            skills: ['GCP Architecture', 'Kubernetes Management', 'DevOps Practices', 'Data Analytics', 'Machine Learning Integration'],
            validation: 'Certificate ID: GCP-PCA-67890 | Google Cloud Certified Directory'
        },
        azure: {
            title: 'Microsoft Azure Fundamentals (AZ-900)',
            description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure. Covers core Azure services, security, privacy, compliance, and trust.',
            skills: ['Azure Core Services', 'Security and Compliance', 'Azure Pricing', 'Cloud Concepts', 'Azure Support'],
            validation: 'Certificate ID: AZURE-900-11111 | Microsoft Learn Profile'
        },
        kubernetes: {
            title: 'Certified Kubernetes Administrator (CKA)',
            description: 'Validates skills in managing Kubernetes clusters and containerized applications. Covers cluster architecture, workloads, services, networking, and troubleshooting.',
            skills: ['Container Orchestration', 'Cluster Management', 'Pod Networking', 'Storage Management', 'Security Configuration'],
            validation: 'Certificate ID: CKA-K8S-54321 | CNCF Certified Directory'
        },
        docker: {
            title: 'Docker Certified Associate (DCA)',
            description: 'Demonstrates proficiency in Docker containerization technology. Covers image creation, container management, networking, and orchestration fundamentals.',
            skills: ['Containerization', 'Image Management', 'Container Networking', 'Volume Management', 'Docker Compose'],
            validation: 'Certificate ID: DCA-DOC-98765 | Docker Certification Registry'
        },
        mongodb: {
            title: 'MongoDB Certified Developer Associate',
            description: 'Validates skills in developing applications with MongoDB. Covers data modeling, CRUD operations, indexing, aggregation, and performance optimization.',
            skills: ['NoSQL Database Design', 'Data Modeling', 'Query Optimization', 'Aggregation Framework', 'Index Management'],
            validation: 'Certificate ID: MDB-DEV-13579 | MongoDB University'
        }
    };

    const cert = details[certType];
    alert(`${cert.title}\n\n${cert.description}\n\nKey Skills:\n• ${cert.skills.join('\n• ')}\n\nValidation:\n${cert.validation}`);
}

// Experience details popup
function showExperienceDetails(expType) {
    const details = {
        senior: {
            title: 'Senior Full Stack Developer - TechCorp Solutions',
            period: 'January 2022 - Present (2+ years)',
            description: 'Leading development of enterprise-scale web applications serving 100,000+ users with microservices architecture and cloud infrastructure.',
            achievements: ['Led team of 5 developers', 'Reduced system downtime by 40%', 'Implemented CI/CD pipelines', 'Mentored junior developers', 'Architected microservices infrastructure'],
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL']
        },
        fullstack: {
            title: 'Full Stack Developer - InnovateTech Inc.',
            period: 'March 2020 - December 2021 (1 year 10 months)',
            description: 'Developed responsive web applications using modern JavaScript frameworks and optimized application performance by 35%.',
            achievements: ['Built 15+ web applications', 'Improved performance by 35%', 'Integrated payment gateways', 'Collaborated in Agile teams', 'Optimized database queries'],
            technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'Git']
        },
        intern: {
            title: 'Software Development Intern - StartupHub Technologies',
            period: 'June 2019 - February 2020 (9 months)',
            description: 'Built and maintained web applications using React and Express.js, achieving 85% code coverage with comprehensive testing.',
            achievements: ['Developed 8 web applications', 'Achieved 85% code coverage', 'Participated in Agile ceremonies', 'Fixed production issues', 'Wrote comprehensive tests'],
            technologies: ['React', 'Express.js', 'MySQL', 'Git', 'Jest', 'HTML/CSS', 'JavaScript']
        },
        lead: {
            title: 'Technical Lead - CloudTech Innovations',
            period: 'September 2018 - February 2020 (1 year 6 months)',
            description: 'Led cross-functional teams and architected scalable cloud solutions for Fortune 500 clients with focus on high availability and performance.',
            achievements: ['Managed team of 8 engineers', 'Delivered 12 major projects', 'Reduced infrastructure costs by 30%', 'Implemented DevOps practices', 'Designed system architecture'],
            technologies: ['Team Leadership', 'System Architecture', 'AWS', 'Terraform', 'Jenkins', 'Microservices', 'Agile']
        },
        backend: {
            title: 'Backend Developer - DataFlow Systems',
            period: 'January 2018 - August 2018 (8 months)',
            description: 'Developed high-performance APIs and database systems handling millions of transactions daily with focus on scalability and reliability.',
            achievements: ['Built APIs handling 1M+ requests/day', 'Optimized database performance by 50%', 'Implemented caching strategies', 'Designed data pipelines', 'Maintained 99.9% uptime'],
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker', 'Microservices']
        },
        junior: {
            title: 'Junior Developer - WebCraft Studios',
            period: 'June 2017 - December 2017 (7 months)',
            description: 'Started career building responsive websites and learning modern development practices in a collaborative team environment.',
            achievements: ['Built 20+ responsive websites', 'Learned modern web technologies', 'Collaborated with design team', 'Implemented client feedback', 'Maintained code quality'],
            technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'MySQL', 'Git']
        }
    };

    const exp = details[expType];
    alert(`${exp.title}\n${exp.period}\n\n${exp.description}\n\nKey Achievements:\n• ${exp.achievements.join('\n• ')}\n\nTechnologies Used:\n${exp.technologies.join(', ')}`);
}

// Section switching functionality
function showSection(sectionType) {
    // Hide all sections
    document.getElementById('projectsSection').classList.add('hidden');
    document.getElementById('certificatesSection').classList.add('hidden');
    document.getElementById('experienceSection').classList.add('hidden');

    // Reset all button styles to inactive state
    document.getElementById('projectsBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all text-gray-400';
    document.getElementById('certificatesBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all text-gray-400';
    document.getElementById('experienceBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all text-gray-400';

    // Show selected section and activate button
    if (sectionType === 'projects') {
        document.getElementById('projectsSection').classList.remove('hidden');
        document.getElementById('projectsBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all border-2 border-purple-400 text-purple-400';
        // Reset project filters to show all projects
        filterProjects('all');
    } else if (sectionType === 'certificates') {
        document.getElementById('certificatesSection').classList.remove('hidden');
        document.getElementById('certificatesBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all border-2 border-orange-400 text-orange-400';
        // Reset certificate filters to show all certificates
        filterCertificates('all');
    } else if (sectionType === 'experience') {
        document.getElementById('experienceSection').classList.remove('hidden');
        document.getElementById('experienceBtn').className = 'section-control-btn px-6 py-3 rounded-full font-semibold transition-all border-2 border-indigo-400 text-indigo-400';
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
        gridContainer.classList.add('hidden');
    } else {
        // Hide marquee and show grid
        marqueeContainer.classList.add('hidden');
        gridContainer.classList.remove('hidden');
        
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
        gridContainer.classList.add('hidden');
    } else {
        // Hide marquee and show grid
        marqueeContainer.classList.add('hidden');
        gridContainer.classList.remove('hidden');
        
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

    // Show projects section by default
    showSection('projects');

    // Add event delegation for project cards
    document.addEventListener('click', function(e) {
        // Find the closest project card
        let card = e.target.closest('.marquee-item');
        if (card && card.dataset.projectType) {
            showProjectDetails(card.dataset.projectType);
        }
        
        // Find the closest certificate card
        let certCard = e.target.closest('.marquee-item');
        if (certCard && certCard.dataset.certificateType) {
            showCertificateDetails(certCard.dataset.certificateType);
        }
    });
});