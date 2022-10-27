import { gsap, ScrollTrigger } from 'gsap/all';
import { device } from './settings';

export function intro() {
  let mm = gsap.matchMedia();

  mm.add(device, (ctx) => {
    let { isTablet, isMobile, isDesktop, reduceMotion } = ctx.conditions;

    if (!reduceMotion) {
      if (isDesktop) {
        let tl = gsap
          .timeline({
            defaults: {
              scale: 10,
              transformOrigin: '50% 50%',
            },
          })
          .from('#b', { xPercent: -100 })
          .from('#r', { yPercent: -1000 }, 0.1)
          .from('#i', { yPercent: 1000, xPercent: -1000 }, 0.15)
          .from('#d', { yPercent: -1000, xPercent: -1000 }, 0.2)
          .from('#g', { yPercent: -1000, xPercent: 1500 }, 0.25)
          .from('#e', { yPercent: 1000, xPercent: 500 }, 0.3)
          .from('.site-info', { duration: 0.1, scale: 1, autoAlpha: 0, y: 30 });

        ScrollTrigger.create({
          trigger: '#intro',
          start: 'top top',
          end: '+=3000',
          animation: tl,
          pin: true,
          // pinSpacing: false,
          // markers: true,
          scrub: 1,
        });
      }

      if (isTablet) {
        let tl = gsap
          .timeline({
            defaults: {
              scale: 13,
              transformOrigin: '50% 50%',
            },
          })
          .from('#b', { xPercent: -100 })
          .from('#r', { yPercent: -2000 }, 0.1)
          .from('#i', { yPercent: 2000, xPercent: -1000 }, 0.15)
          .from('#d', { yPercent: -2000, xPercent: -1000 }, 0.2)
          .from('#g', { yPercent: -2000, xPercent: 1500 }, 0.25)
          .from('#e', { yPercent: 2000, xPercent: 500 }, 0.3)
          .from('.site-info', { duration: 0.1, scale: 1, autoAlpha: 0, y: 30 });

        ScrollTrigger.create({
          trigger: '#intro',
          start: 'top top',
          end: '+=3000',
          animation: tl,
          pin: true,
          // pinSpacing: false,
          // markers: true,
          scrub: 1,
        });
      }
      if (isMobile) {
        let tl = gsap
          .timeline({
            defaults: {
              scale: 17,
              transformOrigin: '50% 50%',
            },
          })
          .from('#b', { xPercent: -100 })
          .from('#r', { yPercent: -3000 }, 0.1)
          .from('#i', { yPercent: 3000, xPercent: -2000 }, 0.15)
          .from('#d', { yPercent: -3000, xPercent: -1000 }, 0.2)
          .from('#g', { yPercent: -3000, xPercent: 1500 }, 0.25)
          .from('#e', { yPercent: 3000, xPercent: 500 }, 0.3)
          .from('.site-info', { duration: 0.1, scale: 1, autoAlpha: 0, y: 30 });

        ScrollTrigger.create({
          trigger: '#intro',
          start: 'top top',
          end: '+=3000',
          animation: tl,
          pin: true,
          // pinSpacing: false,
          // markers: true,
          scrub: 1,
        });
      }
    }
  });
}
