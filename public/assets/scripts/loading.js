import { gsap } from 'gsap';
import { settings, device } from './settings';

export function loading(time = 10) {
  let finished = false;
  const smoother = settings();

  smoother.paused(true);

  const loadingSection = document.querySelector('#loading');

  function onComplete() {
    let top = gsap
      .timeline()
      .to('#loading .top > span', { delay: 1, yPercent: -120 })
      .to('#loading .top .progress', { yPercent: -50, opacity: 0 }, '<');

    let bottom = gsap
      .timeline()
      .to('#loading .bottom > span > span', { y: 0 })
      .to('#loading .bottom .arrow', { opacity: 1 });

    let master = gsap.timeline().add(top).add(bottom);

    master.eventCallback('onComplete', () => {
      finished = true;

      // console.log(finished);
    });
  }

  function progress() {
    let count = 0;

    return (() => {
      const setProgress = setInterval(() => {
        count++;
        gsap.to('.bar', { width: `${count}%` });
        if (count >= 100) {
          clearInterval(setProgress);
          onComplete();
        }
      }, time);
    })();
  }

 
  let mm = gsap.matchMedia();



  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;

    let tl = gsap.timeline();

    if(isDesktop){
 
      loadingSection.addEventListener('wheel', (e) => {
        const { deltaY } = e;
    
        // console.log(deltaY);
    
        if (deltaY > 0 && finished) {
          gsap.to(loadingSection, {
            yPercent: -100,
            duration: 1.3,
            ease: 'power4.inOut',
            onComplete: () => {
              smoother.paused(false);
            },
          });
          finished = false;
        }
      });
    }

    if(isMobile || isTablet){
     
  loadingSection.addEventListener('click', (e) => {
    const { deltaY } = e;

    console.log('clicked');

    if (finished) {
      gsap.to(loadingSection, {
        yPercent: -100,
        duration: 1.3,
        ease: 'power4.inOut',
        onComplete: () => {
          smoother.paused(false);
        },
      });
      finished = false;
    }
  });

    }
  });
  
  
  progress();
}
