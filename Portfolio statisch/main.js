function mobileNav() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNav = document.getElementById('mobileNav');
    const menuItems = document.querySelectorAll('.mobileMenuItem')

    function showMobileNav() {
        mobileNav.classList.replace('-top-full', 'top-0');
    }
    function hideMobileNav() {
        mobileNav.classList.replace('top-0', '-top-full');
    }

    hamburgerMenu.addEventListener('click', showMobileNav);
    closeMenu.addEventListener('click', hideMobileNav);
    menuItems.forEach(item => {
        item.addEventListener('click', hideMobileNav);
    });
}

function sideNav() {
    const sideNavs = document.querySelectorAll('.sideNav');

    if (sideNavs && sideNavs.length)
    {
        sideNavs.forEach((sideNav) => {
            sideNav.addEventListener('mouseover', () => {
                const navCircle = sideNav.querySelector('.navCircle');

                sideNav.classList.replace('w-6', 'w-full');
                navCircle.classList.replace('bg-transparent', 'bg-[#8329D2]');
            });
        });
    }

    if (sideNavs && sideNavs.length)
    {
        sideNavs.forEach((sideNav) => {
            sideNav.addEventListener('mouseleave', () => {
                const navCircle = sideNav.querySelector('.navCircle');

                sideNav.classList.replace('w-full', 'w-6');
                navCircle.classList.replace('bg-[#8329D2]', 'bg-transparent');
            });
        });
    }
}

function mobileCarousel() {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.mobileCarousel');
    const texts = document.querySelectorAll('.carouselText');

    function updateActiveItem() {
    const carouselRect = carousel.getBoundingClientRect();
    let closestItem = null;
    let closestDistance = Infinity;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const carouselCenter = carouselRect.left + carouselRect.width / 2;
        const distance = Math.abs(carouselCenter - itemCenter);
        const diff = itemCenter - window.innerWidth / 2;

        if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
        }

        if (Math.abs(diff) < rect.width / 2)
        {
            item.classList.remove('rotate-3', '-rotate-3', 'mt-10');
        }
        else if (diff > 0) {
            item.classList.add('rotate-3', 'mt-10');
        }
        else
        {
            item.classList.add('-rotate-3', 'mt-10');
        }
    });

    items.forEach(item => item.classList.remove('md:px-10', 'rotate-0'));
    texts.forEach(text => text.classList.replace('opacity-100', 'opacity-0'));
    texts.forEach(text => text.classList.remove('bg-black/50'));

    if (closestItem) {
        closestItem.classList.add('md:px-10');
        const activeTexts = closestItem.querySelectorAll('.carouselText');
        activeTexts.forEach(t => t.classList.replace('opacity-0', 'opacity-100'));
        texts.forEach(text => text.classList.add('bg-black/50'));
    }
    }

    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveItem);
    });

    updateActiveItem();
}

function desktopCarousel() {
    const itemContainers = document.querySelectorAll('.itemContainer');
    const desktopItems = document.querySelectorAll('.desktopCarousel');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const carouselContainer = document.getElementById('carouselContainer');

    scrollLeftBtn.addEventListener('click', () => {
        carouselContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        carouselContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    if (itemContainers && itemContainers.length) {
        itemContainers.forEach((itemContainer) => {
            itemContainer.addEventListener('mouseover', () => {
                itemContainer.classList.replace('min-w-1/10', 'min-w-3/12');

                itemContainers.forEach((otherItem) => {
                    if (otherItem !== itemContainer) {
                        otherItem.classList.replace('min-w-1/10', 'min-w-1/12');
                    }
                });
            });

            itemContainer.addEventListener('mouseleave', () => {
                itemContainer.classList.replace('min-w-3/12', 'min-w-1/10');

                itemContainers.forEach((otherItem) => {
                    if (otherItem !== itemContainer) {
                        otherItem.classList.replace('min-w-1/12', 'min-w-1/10');
                    }
                });
            });
        });
    }

    if (desktopItems && desktopItems.length) {
        desktopItems.forEach((desktopItem) => {
            desktopItem.addEventListener('mouseover', () => {
                desktopItem.classList.replace('opacity-0', 'opacity-100');
            });
            desktopItem.addEventListener('mouseleave', () => {
                desktopItem.classList.replace('opacity-100', 'opacity-0');
            });
        });
    }
}

function card() {
    const project = document.querySelector('.project');
    const projectCard = document.querySelector('.projectCard');
    const carouselItems = document.querySelectorAll('.carouselItem');
    const closeCard = document.getElementById('closeCard');

    function cardVisible() {
        projectCard.classList.replace('top-full', 'top-1/10');
        project.classList.remove('hidden');
    };

    function cardHidden() {
        projectCard.classList.replace('top-1/10', 'top-full');
        project.classList.add('hidden');
    };

    document.addEventListener('click', (e) => {
        let clickInside = project.contains(e.target)

        if (clickInside) {
            projectCard.classList.replace('top-1/10', 'top-full');
            project.classList.add('hidden');
        }
    });

    carouselItems.forEach(item => {
        item.addEventListener('click', cardVisible);
    });

    closeCard.addEventListener('click', cardHidden);
}

function cardContent() {
    const projects = [
        {
            id: 1,
            image: "https://picsum.photos/800/400",
            title: "Project 1",
            description: "A web app built with Tailwind and JavaScript.",
            link: "https://theuselessweb.com/",
        },
        {
            id: 2,
            image: "https://picsum.photos/700/400",
            title: "Project 2",
            description: "A React dashboard for visualizing data.",
            link: "https://clicktheredbutton.com/",
        },
        {
            id: 3,
            image: "https://picsum.photos/600/400",
            title: "Project 3",
            description: "An AI-powered chatbot built with GPT APIs.",
            link: "https://maze.toys/",
        },
        {
            id: 4,
            image: "https://picsum.photos/500/400",
            title: "Project 4",
            description: "A mobile app for tracking fitness goals.",
            link: "https://www.boredbutton.com/",
        },
        {
            id: 5,
            image: "https://picsum.photos/400/400",
            title: "Project 5",
            description: "An e-commerce platform with integrated payment solutions.",
            link: "https://alwaysjudgeabookbyitscover.com/",
        },
        {
            id: 6,
            image: "https://picsum.photos/900/400",
            title: "Project 6",
            description: "A social media app focused on community building.",
            link: "https://ffffidget.com/",
        },
        {
            id: 7,
            image: "https://picsum.photos/800/300",
            title: "Project 7",
            description: "A project management tool for remote teams.",
            link: "https://trypap.com/",
        },
        {
            id: 8,
            image: "https://picsum.photos/700/300",
            title: "Project 8",
            description: "A blogging platform with rich media support.",
            link: "https://smashthewalls.com/",
        },
        {
            id: 9,
            image: "https://picsum.photos/600/300",
            title: "Project 9",
            description: "A travel planning app with itinerary sharing features.",
            link: "https://weirdorconfusing.com/",
        },
        {
            id: 10,
            image: "https://picsum.photos/500/300",
            title: "Project 10",
            description: "A virtual event platform with networking capabilities.",
            link: "https://thezen.zone/",
        },
        {
            id: 11,
            image: "https://picsum.photos/400/300",
            title: "Project 11",
            description: "A recipe sharing app with personalized recommendations.",
            link: "https://creativetechguy.com/fishfeeder",
        },
        {
            id: 12,
            image: "https://picsum.photos/300/300",
            title: "Project 12",
            description: "A language learning app with gamified lessons.",
            link: "https://play2048.co/",
        },
    ];

    const carouselItems = document.querySelectorAll(".carouselItem");
    const projectImage = document.getElementById("projectImage");
    const projectTitle = document.getElementById("projectTitle");
    const projectDescription = document.getElementById("projectDescription");
    const buttonLink = document.getElementById("buttonLink");

    carouselItems.forEach(item => {
        item.addEventListener("click", () => {
            const id = parseInt(item.dataset.id);
            const project = projects.find(p => p.id === id);
            if (project) {
                projectImage.src = project.image;
                projectTitle.textContent = project.title;
                projectDescription.textContent = project.description;
                buttonLink.onclick = () => window.open(project.link);
            }
        });
    });
}

mobileNav();
sideNav();
mobileCarousel();
desktopCarousel();
card();
cardContent();