import { ScrollTrigger, gsap } from 'gsap/all';
import { device, state } from './settings';
import { debounce } from './utils';
import { matters, world, engine, Body } from './matters';

export function portfolio() {
  let mm = gsap.matchMedia();

  // matters();
  mm.add(device, (ctx) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = ctx.conditions;

    if (!reduceMotion) {
      if (isDesktop) {
        let scrollEnd = document
          .querySelector('#portfolio .last')
          .getBoundingClientRect().left;

        let cover = gsap
          .timeline()
          .to('.portfolio-intro-image', { scale: 0.2 })
          .from('.portfolio-cover-center', { scale: 0.4 }, '-=0.3')
          .from(
            '.portfolio-cover-top',
            { duration: 0.2, opacity: 0, y: -50 },
            '-=0.1'
          )
          .from(
            '.portfolio-cover-bottom',
            { duration: 0.2, opacity: 0, y: 50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(1)',
            { duration: 0.2, opacity: 0, x: -50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(2)',
            { duration: 0.2, opacity: 0, x: 50 },
            '<'
          );

        let tl = gsap
          .timeline()
          .from('.portfolio-horizontal', { xPercent: 100 })
          .from('.portfolio-intro-image img', { scale: 1.4 }, 0)
          .add(cover)
          .to('#portfolio .bigger', { scale: 0.46 }, '+=0.4')
          .from(
            '.p-section:nth-child(2) .portfolio-item',
            { xPercent: 50 },
            '-=0.2'
          )
          .from('.portfolio-text-content', { autoAlpha: 0, y: 30 }, '-=0.1')
          .to('.portfolio-cover', {
            duration: 3,
            x: -(
              scrollEnd - document.querySelector('#portfolio .last').offsetWidth
            ),
          });

        ScrollTrigger.create({
          trigger: '#portfolio',
          start: 'top top',
          end: '+=10000',
          animation: tl,
          pin: true,
          // pinSpacing: false,
          // markers: true,
          onLeave: () => {
            // console.log('leave');
            state.isPaused = true;
            state.stack = matters();
          },
          onEnterBack: () => {
            state.isPaused = false;
            document.querySelectorAll('canvas').forEach((item) => {
              item.remove();
            });
          },
          scrub: true,
        });
      }

      if (isTablet || isMobile) {
        let scrollEnd = document
          .querySelector('#portfolio .last')
          .getBoundingClientRect().left;

        let cover = gsap
          .timeline()
          .to('.portfolio-intro-image', { scale: 0.2 })
          .from('.portfolio-cover-center', { scale: 0.4 }, '-=0.3')
          .from(
            '.portfolio-cover-top',
            { duration: 0.2, opacity: 0, y: -50 },
            '-=0.1'
          )
          .from(
            '.portfolio-cover-bottom',
            { duration: 0.2, opacity: 0, y: 50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(1)',
            { duration: 0.2, opacity: 0, x: -50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(2)',
            { duration: 0.2, opacity: 0, x: 50 },
            '<'
          );

        let tl = gsap
          .timeline()
          .from('.portfolio-horizontal', { xPercent: 100 })
          .from('.portfolio-intro-image img', { scale: 1.4 }, 0)
          .add(cover)
          .to('#portfolio .bigger', { scale: 0.65, height: '60vw' }, '+=0.4')
          .from('.portfolio-text-content', { opacity: 0, duration: 0.1 })
          .from(
            '.p-section:nth-child(2) .portfolio-item',
            { yPercent: 200 },
            '-=0.2'
          )
          .from(
            '.p-section:nth-child(3) .portfolio-item',
            { yPercent: 200 },
            '<'
          )

          .to('.portfolio-text-content', { yPercent: -300 })
          .to(
            '.portfolio-cover',
            {
              duration: 3,
              y: -document.querySelector('#portfolio .last').offsetHeight * 3,
            },
            '<'
          );

        ScrollTrigger.create({
          trigger: '#portfolio',
          start: 'top top',
          end: '+=10000',
          animation: tl,
          pin: true,
          onLeave: () => {
            // console.log('leave');
            state.isPaused = true;
            state.stack = matters();
          },
          onEnterBack: () => {
            state.isPaused = false;
            document.querySelectorAll('canvas').forEach((item) => {
              item.remove();
            });
          },
          // pinSpacing: false,
          // markers: true,
          scrub: true,
        });
      }
    } else {
      if (isDesktop) {
        let scrollEnd = document
          .querySelector('#portfolio .last')
          .getBoundingClientRect().left;

        let cover = gsap
          .timeline()
          .to('.portfolio-intro-image', { scale: 0.2 })
          .from('.portfolio-cover-center', { scale: 0.4 }, '-=0.3')
          .from(
            '.portfolio-cover-top',
            { duration: 0.2, opacity: 0, y: -50 },
            '-=0.1'
          )
          .from(
            '.portfolio-cover-bottom',
            { duration: 0.2, opacity: 0, y: 50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(1)',
            { duration: 0.2, opacity: 0, x: -50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(2)',
            { duration: 0.2, opacity: 0, x: 50 },
            '<'
          );

        let tl = gsap
          .timeline()
          .from('.portfolio-horizontal', { xPercent: 100 })
          .from('.portfolio-intro-image img', { scale: 1.4 }, 0)
          .add(cover)
          .to('#portfolio .bigger', { scale: 0.46 }, '+=0.4')
          .from(
            '.p-section:nth-child(2) .portfolio-item',
            { xPercent: 50 },
            '-=0.2'
          )
          .from('.portfolio-text-content', { autoAlpha: 0, y: 30 }, '-=0.1');

        let master = gsap.timeline().to('.portfolio-cover', {
          duration: 3,
          x: -(
            scrollEnd - document.querySelector('#portfolio .last').offsetWidth
          ),
        });

        ScrollTrigger.create({
          trigger: '#portfolio',
          start: 'top top',
          end: '+=10000',
          animation: master,
          pin: true,
          // pinSpacing: false,
          // markers: true,
          onLeave: () => {
            // console.log('leave');
            state.isPaused = true;
            state.stack = matters();
          },
          onEnterBack: () => {
            state.isPaused = false;
            document.querySelectorAll('canvas').forEach((item) => {
              item.remove();
            });
          },
          scrub: true,
        });
      }

      if (isTablet || isMobile) {
        let scrollEnd = document
          .querySelector('#portfolio .last')
          .getBoundingClientRect().left;

        let cover = gsap
          .timeline()
          .to('.portfolio-intro-image', { scale: 0.2 })
          .from('.portfolio-cover-center', { scale: 0.4 }, '-=0.3')
          .from(
            '.portfolio-cover-top',
            { duration: 0.2, opacity: 0, y: -50 },
            '-=0.1'
          )
          .from(
            '.portfolio-cover-bottom',
            { duration: 0.2, opacity: 0, y: 50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(1)',
            { duration: 0.2, opacity: 0, x: -50 },
            '<'
          )
          .from(
            '.portfolio-cover-middle > svg:nth-child(2)',
            { duration: 0.2, opacity: 0, x: 50 },
            '<'
          );

        let tl = gsap
          .timeline()
          .from('.portfolio-horizontal', { xPercent: 100 })
          .from('.portfolio-intro-image img', { scale: 1.4 }, 0)
          .add(cover)
          .to('#portfolio .bigger', { scale: 0.65, height: '60vw' }, '+=0.4')
          .from('.portfolio-text-content', { opacity: 0, duration: 0.1 })
          .from(
            '.p-section:nth-child(2) .portfolio-item',
            { yPercent: 200 },
            '-=0.2'
          )
          .from(
            '.p-section:nth-child(3) .portfolio-item',
            { yPercent: 200 },
            '<'
          );

        let master = gsap
          .timeline()
          .to('.portfolio-text-content', { yPercent: -300 })
          .to(
            '.portfolio-cover',
            {
              duration: 3,
              y: -document.querySelector('#portfolio .last').offsetHeight * 3,
            },
            '<'
          );

        ScrollTrigger.create({
          trigger: '#portfolio',
          start: 'top top',
          end: '+=10000',
          animation: master,
          pin: true,
          onLeave: () => {
            // console.log('leave');
            // state.isPaused = true;
            // state.stack = matters();
          },
          onEnterBack: () => {
            // state.isPaused = false;
            // document.querySelectorAll('canvas').forEach((item) => {
            //   item.remove();
            // });
          },
          // pinSpacing: false,
          // markers: true,
          scrub: true,
        });
      }
    }
  });
  window.addEventListener('resize', debounce(gsap.matchMediaRefresh));
}
