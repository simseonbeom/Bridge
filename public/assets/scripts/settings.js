import {
  gsap,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrollToPlugin,
} from 'gsap/all';

gsap.registerPlugin(
  gsap,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrollToPlugin
);



export const state = {
  isPaused : false,
  stack: null,
  smoother: null,
}

export const device = {
  isDesktop: '(min-width:1025px)',
  isTablet: '(max-width:1024px) and (min-width:681px)',
  isMobile: '(max-width:680px)',
  reduceMotion: '(prefers-reduced-motion)',
};

export function settings() {
  ScrollTrigger.normalizeScroll(true);
  const smoother = ScrollSmoother.create({
    content: '#container',
    smoother: 1.2,
  });

  return smoother

  // this.state.smoother = smoother
  
  // gsap.to(window, { duration: 0.01, scrollTo: '#qode' });
}
