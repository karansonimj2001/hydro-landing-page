document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Navbar Scroll Effect, Timeline Progress & Global Scroll Tracker
    const navbar = document.getElementById('navbar');
    const timelineProgress = document.querySelector('.timeline-progress');
    const timelineContainer = document.querySelector('.timeline-container');
    const scrollTracker = document.getElementById('scroll-tracker');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const viewHeight = window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight - viewHeight;

        // Navbar
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Global Scroll Tracker
        if (scrollTracker) {
            const scrollPercentage = (scrollY / totalHeight) * 100;
            scrollTracker.style.width = `${scrollPercentage}%`;
        }

        // Timeline Progress
        if (timelineContainer && timelineProgress) {
            const rect = timelineContainer.getBoundingClientRect();

            // Calculate progress based on container's position in viewport
            const start = viewHeight * 0.8;
            const end = viewHeight * 0.2;

            let progress = 0;
            if (rect.top < start) {
                const containerHeight = rect.height;
                const distanceScrolled = start - rect.top;
                progress = (distanceScrolled / (containerHeight + (start - end))) * 100;
            }

            timelineProgress.style.height = `${Math.min(100, Math.max(0, progress))}%`;
        }

        // Parallax background glow
        const bgGlow = document.querySelector('.bg-glow');
        if (bgGlow) {
            const move = scrollY * 0.1;
            bgGlow.style.transform = `translateY(${move}px)`;
        }
    });

    // 4. Staggered Reveals (Enhanced with Step Tracking)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const staggeredObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => staggeredObserver.observe(el));

    // 5. How-It-Works Active Step Tracker
    const steps = document.querySelectorAll('.step');
    const scanResults = document.querySelector('.scan-results');

    if (steps.length > 0 && scanResults) {
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active from all steps in this section
                    steps.forEach(s => s.classList.remove('active'));
                    // Add active to current
                    entry.target.classList.add('active');

                    // Update Scanner Results based on step
                    const stepNum = entry.target.dataset.step;
                    if (stepNum === '1') {
                        scanResults.innerHTML = '<div class="stat"><span>Cal:</span> 450</div><div class="stat"><span>Pro:</span> 32g</div>';
                    } else if (stepNum === '2') {
                        scanResults.innerHTML = '<div class="stat"><span>Track:</span> Consistency</div><div class="stat"><span>Water:</span> 2.4L</div>';
                    } else if (stepNum === '3') {
                        scanResults.innerHTML = '<div class="stat"><span>Goal:</span> Mastery</div><div class="stat"><span>Streak:</span> 12 Days</div>';
                    }
                }
            });
        }, {
            threshold: 0.7, // Trigger when step is mostly in view
            rootMargin: '-10% 0px -10% 0px'
        });

        steps.forEach(step => stepObserver.observe(step));
    }

    // 6. Phone Mockup Screen Cycling
    const screens = [
        { id: 'screen-home', callouts: 'callouts-home' },
        { id: 'screen-levels', callouts: 'callouts-levels' },
        { id: 'screen-stats', callouts: 'callouts-stats' },
        { id: 'screen-settings', callouts: 'callouts-settings' },
        { id: 'screen-log', callouts: 'callouts-log' }
    ];

    let currentScreenIndex = 0;
    const cycleScreens = () => {
        const current = screens[currentScreenIndex];
        const nextIndex = (currentScreenIndex + 1) % screens.length;
        const next = screens[nextIndex];

        // Fade out current
        document.getElementById(current.id).classList.remove('active');
        document.getElementById(current.callouts).classList.remove('active');

        // Fade in next
        document.getElementById(next.id).classList.add('active');
        document.getElementById(next.callouts).classList.add('active');

        currentScreenIndex = nextIndex;
    };

    setInterval(cycleScreens, 4000);

    // 5. Donation Button (Razorpay Integration)
    const donateBtn = document.getElementById('donateBtn');
    const donateBtnDonation = document.getElementById('donateBtnDonation');

    const handleDonate = (amountId) => {
        const amountElement = document.getElementById(amountId);
        if (!amountElement) return;

        const amount = parseInt(amountElement.value, 10);
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        // Razorpay Options
        const options = {
            "key": "rzp_live_SAQjQEDC933Ic8", // User's Live Key
            "amount": amount * 100, // Amount in paise
            "currency": "INR",
            "name": "Hydro Dream Fund",
            "description": "Fuel the journey from code to carbon fiber.",
            "image": "/logo-transparent.png",
            "handler": function (response) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                // Here you would typically send response to your server to verify signature
            },
            "prefill": {
                "name": "",
                "email": "",
                "contact": ""
            },
            "theme": {
                "color": "#2997ff" // Hydro accent color
            }
        };

        if (typeof Razorpay !== 'undefined') {
            const rzp = new Razorpay(options);
            rzp.on('payment.failed', function (response) {
                alert(`Payment Failed: ${response.error.description}`);
            });
            rzp.open();
        } else {
            alert("Razorpay SDK failed to load. Are you connected to the internet?");
        }
    };

    if (donateBtn) {
        donateBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleDonate('donationAmountBottom');
        });
    }
    if (donateBtnDonation) {
        donateBtnDonation.addEventListener('click', (e) => {
            e.preventDefault();
            handleDonate('donationAmountTop');
        });
    }

    // 6. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]:not([href="#download"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. Dynamic App Download Link
    const SUPABASE_URL = 'https://wfittbzilafvmvmklhcd.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmaXR0YnppbGFmdm12bWtsaGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2Njg1NDAsImV4cCI6MjA4NzI0NDU0MH0.PtVcBzl92ru81adNdYUiD57eu4S2ARZWNDHHNXQ6q7s';

    if (typeof supabase !== 'undefined') {
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        async function fetchLatestRelease() {
            try {
                const { data, error } = await supabaseClient
                    .from('app_releases')
                    .select('download_url, version_name')
                    .eq('is_active', true)
                    .single();

                if (data && !error) {
                    console.log(`Loaded active release: v${data.version_name}`);
                    // Find all download buttons and update their href
                    const downloadButtons = document.querySelectorAll('a[href="#download"]');
                    downloadButtons.forEach(btn => {
                        btn.href = data.download_url;
                        btn.target = "_blank"; // Open in new tab securely
                        btn.rel = "noopener noreferrer";
                    });
                }
            } catch (err) {
                console.error("Error fetching release link:", err);
            }
        }

        fetchLatestRelease();
    }

    // 8. Dream Car Progress Bar Animation
    const donationSection = document.querySelector('.donation-section');
    const progressBar = document.querySelector('.progress-bar');

    if (donationSection && progressBar) {
        const donationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBar.style.width = '0.5%';
                    donationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        donationObserver.observe(donationSection);
    }
});
