import { ScrollTrigger, gsap } from 'gsap/all';
import { device } from './settings';

export function demo() {
  let mm = gsap.matchMedia();

  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;

    let tl = gsap.timeline();
    tl.to('.demos-front', { yPercent: -50 });
    tl.to('.demos-back', { yPercent: -20 }, 0);

    ScrollTrigger.create({
      trigger: '#demo',
      start: 'top top',
      end: '+=3000',
      animation: tl,
      pin: true,
      pinSpacing: false,
      // markers: true,
      scrub: true,
    });
  });
}
