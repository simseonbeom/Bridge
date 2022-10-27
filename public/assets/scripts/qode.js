import { ScrollTrigger, gsap } from 'gsap/all';
import { device } from './settings';
import { debounce } from './utils';

export function qode() {
  let mm = gsap.matchMedia();

  
  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;


    if(!reduceMotion){
      let tl = gsap
      .timeline()
      .to('#text-path-0', {
        attr: { d: 'M 125.2 268.9 C 183.2 249.7 263.6 253 345.9 268.9' },
      })
      .to(
        '.qode_tagline',
        { transformOrigin: '50% 500%', rotation: -180 },
        '-=0.3'
      )
      .to('.qode_round_text svg', { rotation: -300, ease: 'none' }, '<')
      .from( '.qode_logo svg', { yPercent:100, rotation: 360, scale: 0.9, duration: 1,onComplete:()=>{
        // gsap.to('#line', {strokeDashoffset:0});
      } }, '<' )
      .to('.qode-text-holder', {yPercent: 0,opacity:1})
      .to('#line', {strokeDashoffset:0,duration:3})
      

    ScrollTrigger.create({
      trigger: '#qode',
      start: 'top top',
      end: '+=15000',
      animation: tl,
      pin: true,
      // pinSpacing: false,
      // markers: true,
      scrub: true,
    });
    }
    else{
      let tl = gsap
      .timeline()
      .to('#text-path-0', {
        attr: { d: 'M 125.2 268.9 C 183.2 249.7 263.6 253 345.9 268.9' },
      })
      .to(
        '.qode_tagline',
        { transformOrigin: '50% 500%', rotation: -180 },
        '-=0.3'
      )
      .to('.qode_round_text svg', { rotation: -300, ease: 'none' }, '<')
      .from( '.qode_logo svg', { yPercent:100, rotation: 360, scale: 0.9, duration: 1,onComplete:()=>{
        // gsap.to('#line', {strokeDashoffset:0});
      } }, '<' )
      .to('.qode-text-holder', {yPercent: 0,opacity:1})
      .to('#line', {strokeDashoffset:0,duration:3})
      

    ScrollTrigger.create({
      trigger: '#qode',
      start: 'top top',
      end: '+=15000',
      // animation: tl,
      pin: true,
      // pinSpacing: false,
      // markers: true,
      scrub: true,
    });
    }
   


  });

  window.addEventListener('resize', debounce(gsap.matchMediaRefresh));
}
