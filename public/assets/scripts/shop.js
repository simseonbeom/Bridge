import { ScrollTrigger, gsap } from 'gsap/all';
import { device } from './settings';
import { debounce } from './utils';
import { showHeader, hideHeader } from './header';

export function shop() {
  const button = document.querySelector('.reduce');

  let mm = gsap.matchMedia();

  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;

    if (!reduceMotion) {
      if (isDesktop) {
        let scrollEnd = document
          .querySelector('#shop .last')
          .getBoundingClientRect().left;
        let section01 = gsap
          .timeline()
          .to('#shop .shop-horizontal .bg', { xPercent: -20 })
          .from('#shop .left_nav', { xPercent: -100 }, 0)
          .from('#shop .shop-cover-bg', { xPercent: 100 }, 0)
          .from('#shop .shop-cover-bg-inner > div', { xPercent: 50 }, 0)
          .from('#shop .shop-cover-bg-inner .acc > img', { xPercent: 100 }, 0)
          .to('#shop .bigger', { scale: 0.4 })
          .from(
            '.shop-text-content',
            { autoAlpha: 0, y: 60, duration: 0.2 },
            '-=0.2'
          );

        let tl = gsap
          .timeline()
          .from('.shop-horizontal', { xPercent: 100 })
          .from('.shop-horizontal .bg', { scale: 1.4 }, 0)
          .add(section01)
          .from('.h-section:nth-child(2)', { xPercent: 50 }, '-=0.35')
          .to('.shop-cover', { x: -scrollEnd, duration: 3 });

        ScrollTrigger.create({
          trigger: '#shop',
          start: 'top top',
          end: '+=5000',
          animation: tl,
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: true,
          onEnter: () => {
            // hideHeader();
          },
        });
      }

      if (isTablet || isMobile) {
        let scrollEnd = document
          .querySelector('#shop .last')
          .getBoundingClientRect().top;
        let section01 = gsap
          .timeline()
          .to('#shop .shop-horizontal .bg', { xPercent: -20 })
          .from('#shop .left_nav', { xPercent: -100 }, 0)
          .from('#shop .shop-cover-bg', { xPercent: 100 }, 0)
          .from('#shop .shop-cover-bg-inner > div', { xPercent: 50 }, 0)
          .from('#shop .shop-cover-bg-inner .acc img', { xPercent: 100 }, 0)
          .to('#shop .bigger', { scale: 0.65 })
          .to('#shop .bg', { height: '57vw' }, '<')
          .from(
            '.shop-text-content',
            { autoAlpha: 0, y: 60, duration: 0.2 },
            '-=0.2'
          );

        let tl = gsap
          .timeline()
          .from('.shop-horizontal', { xPercent: 100 })
          .from('.shop-horizontal .bg', { scale: 1.4 }, 0)
          .add(section01)
          .from(
            '.h-section:nth-child(2)',
            {
              yPercent: 150,
              onComplete: () => {
                // showHeader();
              },
            },
            '-=0.35'
          )
          .from('.h-section:nth-child(3)', { yPercent: 150 }, '<')
          .to('.shop-cover', {
            y: -document.querySelector('.h-section').offsetHeight,
            duration: 3,
          })
          .to('.shop-text-content', { yPercent: -500 }, '<');

        // console.log(scrollEnd);
        ScrollTrigger.create({
          trigger: '#shop',
          start: 'top top',
          end: '+=5000',
          animation: tl,
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: true,
          onEnter: () => {
            // hideHeader();
          },
        });
      }
    } else {
      if (isDesktop) {
        let scrollEnd = document
          .querySelector('#shop .last')
          .getBoundingClientRect().left;
        let section01 = gsap
          .timeline()
          .to('#shop .shop-horizontal .bg', { xPercent: -20 })
          .from('#shop .left_nav', { xPercent: -100 }, 0)
          .from('#shop .shop-cover-bg', { xPercent: 100 }, 0)
          .from('#shop .shop-cover-bg-inner > div', { xPercent: 50 }, 0)
          .from('#shop .shop-cover-bg-inner .acc > img', { xPercent: 100 }, 0)
          .to('#shop .bigger', { scale: 0.4 })
          .from(
            '.shop-text-content',
            { autoAlpha: 0, y: 60, duration: 0.2 },
            '-=0.2'
          );

        let tl = gsap
          .timeline()
          .from('.shop-horizontal', { xPercent: 100 })
          .from('.shop-horizontal .bg', { scale: 1.4 }, 0)
          // .add(section01)
          .from('.h-section:nth-child(2)', { xPercent: 50 }, '-=0.35')
          .to('.shop-cover', { x: -scrollEnd, duration: 3 });

        ScrollTrigger.create({
          trigger: '#shop',
          start: 'top top',
          end: '+=5000',
          animation: tl,
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: true,
          onEnter: () => {
            // hideHeader();
          },
        });
      }
      if (isTablet || isMobile) {
        let scrollEnd = document
          .querySelector('#shop .last')
          .getBoundingClientRect().top;
        let section01 = gsap
          .timeline()
          .to('#shop .shop-horizontal .bg', { xPercent: -20 })
          .from('#shop .left_nav', { xPercent: -100 }, 0)
          .from('#shop .shop-cover-bg', { xPercent: 100 }, 0)
          .from('#shop .shop-cover-bg-inner > div', { xPercent: 50 }, 0)
          .from('#shop .shop-cover-bg-inner .acc img', { xPercent: 100 }, 0)
          .to('#shop .bigger', { scale: 0.65 })
          .to('#shop .bg', { height: '57vw' }, '<')
          .from(
            '.shop-text-content',
            { autoAlpha: 0, y: 60, duration: 0.2 },
            '-=0.2'
          );

        let tl = gsap
          .timeline()
          .from('.shop-horizontal', { xPercent: 100 })
          .from('.shop-horizontal .bg', { scale: 1.4 }, 0)
          // .add(section01)
          .from(
            '.h-section:nth-child(2)',
            {
              yPercent: 150,
              onComplete: () => {
                // showHeader();
              },
            },
            '-=0.35'
          )
          .from('.h-section:nth-child(3)', { yPercent: 150 }, '<')
          .to('.shop-cover', {
            y: -document.querySelector('.h-section').offsetHeight,
            duration: 3,
          })
          .to('.shop-text-content', { yPercent: -500 }, '<');

        // console.log(scrollEnd);
        ScrollTrigger.create({
          trigger: '#shop',
          start: 'top top',
          end: '+=5000',
          animation: tl,
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: true,
          onEnter: () => {
            // hideHeader();
          },
        });
      }
    }
  });
  window.addEventListener('resize', debounce(gsap.matchMediaRefresh));
}
