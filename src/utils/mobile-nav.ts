

const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    let isMobileNavOpen: boolean = false;

    headerBtn?.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            (mobileNav as HTMLElement).style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            (mobileNav as HTMLElement).style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    for (const link of mobileLinks) {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            (mobileNav as HTMLElement).style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    }
};

export default mobileNav;
