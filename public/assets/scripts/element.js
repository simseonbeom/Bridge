import { ScrollTrigger, gsap } from 'gsap/all';
import { device } from './settings';
import { debounce } from './utils';
import { renderSVG } from './renderSVG';

export function element() {
  let mm = gsap.matchMedia();

  renderSVG();

  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;


    if(!reduceMotion){

      gsap.set( '.elements-col', {display:'block'}) 
      gsap.set( '.elements-horizontal-row', {display:'flex'}) 
      let leftAndRight = gsap
      .timeline()
      .to('.-l, .-r', { y: '-650vh', duration: 2.5, ease: 'none' });

    let center = gsap
      .timeline()
      .to('.-c', { y: '650vh', duration: 2.5, ease: 'none' });

    let screen = gsap
      .timeline({ defaults: { ease: 'none', }, }) 
      .to('.module-screen:nth-child(1)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(1) .module-screen__wrapper', { yPercent: 100 }, '<' ) 
      .to('.module-screen:nth-child(2)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(2) .module-screen__wrapper', { yPercent: 100 }, '<' ) 
      .to('.module-screen:nth-child(3)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(3) .module-screen__wrapper', { yPercent: 100 }, '<' )
      .to('.module-screen:nth-child(4)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(4) .module-screen__wrapper', { yPercent: 100 }, '<' )
      .to('.module-screen:nth-child(5)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(5) .module-screen__wrapper', { yPercent: 100 }, '<' );

    let modules = gsap
      .timeline()
      .from('.elements-screen__bg', { scaleX: 0, ease: 'none', duration: 0.3 })
      .from('.module-screen__text-content', { y: 30, opacity: 0, duration: 0.2, })
      .set('.module-screen', { autoAlpha: 1 })
      .add(center)
      .add(leftAndRight, '<')
      .add(screen, '<');

    let chars = gsap
      .timeline()
      .to('.chars-row3 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 }, }) 
      .to( '.chars-row2 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.2 ) 
      .to( '.chars-row4 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.2 ) 
      .to( '.chars-row1 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.4 ) 
      .to( '.chars-row5 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.4 );

    // let charsList = document.querySelectorAll('#chars > div > div')

    let charsScale = gsap
      .timeline({ defaults: { scale: 0, }, })
      .to('.chars-item1 svg', {})
      .to('.chars-item2 svg', {}, `-=0.3`)
      .to('.chars-item3 svg', {}, `-=0.3`)
      .to('.chars-item4 svg', {}, `-=0.3`)
      .to('.chars-item5 svg', {}, `-=0.3`)
      .to('.chars-item6 svg', {}, `-=0.3`)
      .to('.chars-item7 svg', {}, `-=0.3`)
      .to('.chars-item8 svg', {}, `-=0.3`)
      .to('.chars-item9 svg', {}, `-=0.3`)
      .to('.chars-item10 svg', {}, `-=0.3`)
      .to('.chars-item11 svg', {}, `-=0.3`);

    let tl = gsap.timeline();
    tl.from('.elements-vertical-text-holder', { xPercent: 3, opacity: 0, duration: 0.2, }) 
      .to('.elements-vertical-text-holder', { yPercent: 3, opacity: 0, duration: 0.05, }) 
      .fromTo( '.elements-col:nth-child(odd)', { yPercent: -100 }, { yPercent: 100 }, '<' ) 
      .fromTo( '.elements-col:nth-child(even)', { yPercent: 100 }, { yPercent: -100 }, '<' ) 
      .from( '.layout-text-holder', { xPercent: 1, opacity: 0, duration: 0.2 }, '-=0.2' )
      .to('.layout-text-holder', { yPercent: 1, opacity: 0, duration: 0.05 }) 
      .fromTo( '.elements-horizontal-row:nth-child(odd)', { xPercent: -100 }, { xPercent: 100 }, '<' ) 
      .fromTo( '.elements-horizontal-row:nth-child(even)', { xPercent: 100 }, { xPercent: -100 }, '<' )
      .add(modules, '-=0.25')
      .add(chars)
      .add(charsScale);

    ScrollTrigger.create({
      trigger: '#elements',
      start: 'top top',
      end: '+=15000',
      animation: tl,
      pin: true,
      // pinSpacing: false,
      // markers: true,
      scrub: true,
    });
    }else{
    //   let leftAndRight = gsap
    //   .timeline()
    //   .to('.-l, .-r', { y: '-650vh', duration: 2.5, ease: 'none' });

    // let center = gsap
    //   .timeline()
    //   .to('.-c', { y: '650vh', duration: 2.5, ease: 'none' });

    let screen = gsap
      .timeline({ defaults: { ease: 'none', }, }) 
      .to('.module-screen:nth-child(1)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(1) .module-screen__wrapper', { yPercent: 100 }, '<' ) 
      .to('.module-screen:nth-child(2)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(2) .module-screen__wrapper', { yPercent: 100 }, '<' ) 
      .to('.module-screen:nth-child(3)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(3) .module-screen__wrapper', { yPercent: 100 }, '<' )
      .to('.module-screen:nth-child(4)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(4) .module-screen__wrapper', { yPercent: 100 }, '<' )
      .to('.module-screen:nth-child(5)', { yPercent: -100 }) 
      .to( '.module-screen:nth-child(5) .module-screen__wrapper', { yPercent: 100 }, '<' );

    let modules = gsap
      .timeline()
      .from('.elements-screen__bg', { scaleX: 0, ease: 'none', duration: 0.3 })
      .from('.module-screen__text-content', { y: 30, opacity: 0, duration: 0.2, })
      .set('.module-screen', { autoAlpha: 1 })
      // .add(center)
      // .add(leftAndRight, '<')
      .add(screen, '<');

    // let chars = gsap
    //   .timeline()
    //   .to('.chars-row3 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 }, }) 
    //   .to( '.chars-row2 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.2 ) 
    //   .to( '.chars-row4 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.2 ) 
    //   .to( '.chars-row1 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.4 ) 
    //   .to( '.chars-row5 path', { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, 0.4 );

    // // let charsList = document.querySelectorAll('#chars > div > div')

    // let charsScale = gsap
    //   .timeline({ defaults: { scale: 0, }, })
    //   .to('.chars-item1 svg', {})
    //   .to('.chars-item2 svg', {}, `-=0.3`)
    //   .to('.chars-item3 svg', {}, `-=0.3`)
    //   .to('.chars-item4 svg', {}, `-=0.3`)
    //   .to('.chars-item5 svg', {}, `-=0.3`)
    //   .to('.chars-item6 svg', {}, `-=0.3`)
    //   .to('.chars-item7 svg', {}, `-=0.3`)
    //   .to('.chars-item8 svg', {}, `-=0.3`)
    //   .to('.chars-item9 svg', {}, `-=0.3`)
    //   .to('.chars-item10 svg', {}, `-=0.3`)
    //   .to('.chars-item11 svg', {}, `-=0.3`);

    gsap.set( '.elements-col,.elements-horizontal-row', {display:'none'}) 

    let tl = gsap.timeline();
    tl.from('.elements-vertical-text-holder', { xPercent: 3, opacity: 0, duration: 0.2, }) 
      .to('.elements-vertical-text-holder', { opacity: 0, duration: 0.05, },'+=1') 
      // .fromTo( '.elements-col:nth-child(odd)', { yPercent: -100 }, { yPercent: 100 }, '<' ) 
      // .fromTo( '.elements-col:nth-child(even)', { yPercent: 100 }, { yPercent: -100 }, '<' ) 
      .from( '.layout-text-holder', { opacity: 0, duration: 0.2 })
      .to('.layout-text-holder', {  opacity: 0, duration: 0.05 },"+=1") 
      // .fromTo( '.elements-horizontal-row:nth-child(odd)', { xPercent: -100 }, { xPercent: 100 }, '<' ) 
      // .fromTo( '.elements-horizontal-row:nth-child(even)', { xPercent: 100 }, { xPercent: -100 }, '<' )
      .add(modules)
      // .add(chars)
      // .add(charsScale);

    ScrollTrigger.create({
      trigger: '#elements',
      start: 'top top',
      end: '+=15000',
      animation: tl,
      pin: true,
      // pinSpacing: false,
      // markers: true,
      scrub: true,
    });
    }
    
  });
  window.addEventListener('resize', debounce(gsap.matchMediaRefresh));
}
