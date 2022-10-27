import { ScrollTrigger, gsap } from 'gsap/all';
import { device } from './settings';
import { debounce } from './utils';

export function demo() {
  let mm = gsap.matchMedia();

  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;

    let tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: '',
      start: 'top center',
      end: 'bottom center',
      animation: tl,
      pin: false,
      pinSpacing: false,
      markers: true,
      scrub: true,
    });
  });
  window.addEventListener('resize', debounce(gsap.matchMediaRefresh));
}
