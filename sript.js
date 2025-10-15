const hamburger = document.querySelector('.js-hamburger');
        const menuNavigation = document.querySelector('.js-menu-navigation');
        const hamburgerSpan = document.querySelectorAll('.js-hamburger .js-hamburger-span');

        hamburger.addEventListener('click', function () {
            menuNavigation.classList.toggle('navHidden');

            if (menuNavigation.classList.contains('navHidden')) {
                hamburgerSpan[0].classList.add('hamburger-first-child');
                hamburgerSpan[1].classList.add('hamburger-second-child');
                hamburgerSpan[2].classList.add('hamburger-third-child');
            } else {
                hamburgerSpan[0].classList.remove('hamburger-first-child');
                hamburgerSpan[1].classList.remove('hamburger-second-child');
                hamburgerSpan[2].classList.remove('hamburger-third-child');
            }


            hamburgerSpan.forEach((span) => {
                span.classList.add('hamburger-span');
            })
        });