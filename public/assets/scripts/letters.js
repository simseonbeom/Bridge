import { ScrollTrigger, gsap } from 'gsap/all';

import { device, state } from './settings';
import { debounce } from './utils';
import { matters, world, engine, Body } from './matters';

export function letters() {
  let mm = gsap.matchMedia();

  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;

    if (!reduceMotion) {
      gsap.set('#canvas', { display: 'block' });
      let tl = gsap
        .timeline()
        .from('.letters-screen', { opacity: 0, y: 50 })
        .to('#canvas', { xPercent: 100 })
        .from('#awards', { xPercent: -100 }, '<')
        .to('#awards .bg', { width: '100%' });

      ScrollTrigger.create({
        trigger: '#letters',
        start: 'top top',
        end: '+=3000',
        animation: tl,
        pin: true,
        // pinSpacing: false,
        onEnter: () => {
          world.gravity.y = 2;
        },
        onUpdate: ({ progress }) => {
          if (progress >= 0.3) {
            world.gravity.y = 0;
            world.gravity.x = -5;
            state.stack(engine);
          } else {
            world.gravity.y = 2;
            world.gravity.x = 0;
          }
        },
        // pinSpacing: false,
        // markers: true,
        scrub: true,
      });
    } else {
      gsap.set('#canvas', { display: 'none' });
      let tl = gsap
        .timeline()
        .from('.letters-screen', { opacity: 0, y: 50 })
        .to('#canvas', { xPercent: 100 })
        .from('#awards', { xPercent: -100 }, '<')
        .to('#awards .bg', { width: '100%' });

      let reduceText = gsap
        .timeline()
        .to('.reduce-text', { autoAlpha: 1 })
        .from('.reduce-text > h3:nth-child(1)', { autoAlpha: 0, y: 30 })
        .from('.reduce-text > h3:nth-child(2)', { autoAlpha: 0, y: 30 })
        .from('.reduce-text > h3:nth-child(3)', { autoAlpha: 0, y: 30 })
        .from('.reduce-text > h3:nth-child(4)', { autoAlpha: 0, y: 30 })
        .add(tl);

      ScrollTrigger.create({
        trigger: '#letters',
        start: 'top top',
        end: '+=3000',
        animation: reduceText,
        pin: true,
        // pinSpacing: false,
        // pinSpacing: false,
        // markers: true,
        scrub: true,
      });
    }
  });
  window.addEventListener('resize', debounce(gsap.matchMediaRefresh));
}
