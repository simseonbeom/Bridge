import { ScrollTrigger, gsap, SplitText } from 'gsap/all';
import { device } from './settings';
import { debounce } from './utils';
import { showHeader, hideHeader } from './header';

export function wall() {
  const splitTextFront = new SplitText('.wall-front .wall-label:not(.show)', {
    type: 'chars',
  });
  const splitTextSide = new SplitText('.wall-side .wall-label:not(.show)', {
    type: 'chars',
  });
  const wallElem = document.querySelector('#wall');
  const wallFrontElem = document.querySelector('.wall-front');
  const wallSideElem = document.querySelector('.wall-side');
  const mousePos = { x: 0, y: 0 };
  const mm = gsap.matchMedia();

  function moveMouse(e) {
    mousePos.x = -1 + (e.clientX / document.documentElement.clientWidth) * 2;
    mousePos.y = 1 - (e.clientY / document.documentElement.clientHeight) * 2;

    gsap.to('.wall-wrapper', {
      rotationZ: mousePos.x * 5,
      rotationX: mousePos.y * 5,
    });

    gsap.to('.wall-wrapper', {
      rotationZ: 0,
      rotationX: 0,
    });
  }

  mm.add(device, (context) => {
    let { isMobile, isTablet, isDesktop, reduceMotion } = context.conditions;

    if (!reduceMotion) {
      if (isMobile) {
        const tl = gsap.timeline();

        gsap.set('.wall-side', {
          x: wallFrontElem.offsetWidth / 2,
          rotationY: '90deg',
        });
        gsap.set('.wall-front', {
          z: wallSideElem.offsetWidth / 2,
        });

        gsap.from('.wall-label.show .number', {
          textContent: 177000,
          duration: 0.8,
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '#wall',
            start: 'top bottom',
            toggleActions: 'play none none reset',
          },
        });

        tl.from(splitTextFront.chars, {
          opacity: 0,
          stagger: {
            each: 0.1,
            from: 'random',
          },
          onUpdate: () => {
            wallElem.removeEventListener('mousemove', moveMouse);

            gsap.to('.wall-wrapper', {
              rotationZ: 0,
              rotationX: 0,
            });
          },
          onComplete: () => {
            wallElem.addEventListener('mousemove', moveMouse);
          },
        })
          .to('.wall-wrapper', {
            rotationY: -90,
            duration: 15,
          })
          .to(splitTextSide.chars, {
            opacity: 0,
            stagger: {
              each: 0.1,
              from: 'random',
            },
            onStart: () => {
              wallElem.removeEventListener('mousemove', moveMouse);

              gsap.to('.wall-wrapper', {
                rotationZ: 0,
                rotationX: 0,
              });
            },
            onReverseComplete: () => {
              wallElem.addEventListener('mousemove', moveMouse);
            },
          });

        ScrollTrigger.create({
          trigger: '#wall',
          start: 'top top',
          end: '+=2000',
          animation: tl,
          pin: true,
          pinSpacing: true,
          scrub: true,
          onLeave: () => {
            // showHeader();
          },
          onLeaveBack: () => {
            // hideHeader();
          },
        });
      }

      if (isTablet) {
        const tl = gsap.timeline();

        gsap.set('.wall-side', {
          x: wallFrontElem.offsetWidth / 2,
          rotationY: '90deg',
        });
        gsap.set('.wall-front', {
          z: wallSideElem.offsetWidth / 2,
        });

        gsap.from('.wall-label.show .number', {
          textContent: 177000,
          duration: 0.8,
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '#wall',
            start: 'top bottom',
            toggleActions: 'play none none reset',
          },
        });

        tl.from(splitTextFront.chars, {
          opacity: 0,
          stagger: {
            each: 0.1,
            from: 'random',
          },
          onUpdate: () => {
            wallElem.removeEventListener('mousemove', moveMouse);

            gsap.to('.wall-wrapper', {
              rotationZ: 0,
              rotationX: 0,
            });
          },
          onComplete: () => {
            wallElem.addEventListener('mousemove', moveMouse);
          },
        })
          .to('.wall-wrapper', {
            rotationY: -90,
            duration: 15,
          })
          .to(splitTextSide.chars, {
            opacity: 0,
            stagger: {
              each: 0.1,
              from: 'random',
            },
            onStart: () => {
              wallElem.removeEventListener('mousemove', moveMouse);

              gsap.to('.wall-wrapper', {
                rotationZ: 0,
                rotationX: 0,
              });
            },
            onReverseComplete: () => {
              wallElem.addEventListener('mousemove', moveMouse);
            },
          });

        ScrollTrigger.create({
          trigger: '#wall',
          start: 'top top',
          end: '+=2000',
          animation: tl,
          pin: true,
          pinSpacing: true,
          scrub: true,
          onLeave: () => {
            // showHeader();
          },
          onLeaveBack: () => {
            // hideHeader();
          },
        });
      }

      if (isDesktop) {
        const tl = gsap.timeline();

        gsap.set('.wall-side', {
          x: wallFrontElem.offsetWidth / 2,
          rotationY: '90deg',
        });
        gsap.set('.wall-front', {
          z: wallSideElem.offsetWidth / 2,
        });

        let counter = gsap.from('.wall-label.show .number', {
          textContent: 177000,
          duration: 2,
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '#wall',
            start: 'top bottom',
            toggleActions: 'play none none reset',
            onComplete: () => {},
          },
        });

        tl.from(splitTextFront.chars, {
          opacity: 0,
          stagger: {
            each: 0.1,
            from: 'random',
          },
          onEnter: () => {},
          onUpdate: () => {
            counter.progress(1);
            wallElem.removeEventListener('mousemove', moveMouse);

            gsap.to('.wall-wrapper', {
              rotationZ: 0,
              rotationX: 0,
            });
          },
          onComplete: () => {
            wallElem.addEventListener('mousemove', moveMouse);
          },
        })
          .to('.wall-wrapper', {
            rotationY: -90,
            duration: 15,
          })
          .to(splitTextSide.chars, {
            opacity: 0,
            stagger: {
              each: 0.1,
              from: 'random',
            },
            onStart: () => {
              wallElem.removeEventListener('mousemove', moveMouse);

              gsap.to('.wall-wrapper', {
                rotationZ: 0,
                rotationX: 0,
              });
            },
            onReverseComplete: () => {
              wallElem.addEventListener('mousemove', moveMouse);
            },
          });

        ScrollTrigger.create({
          trigger: '#wall',
          start: 'top top',
          end: '+=2000',
          animation: tl,
          pin: true,
          // pinSpacing: true,
          scrub: true,
          onLeave: () => {
            // showHeader();
          },
          onLeaveBack: () => {
            // hideHeader();
          },
        });
      }
    } else {
      let tl = gsap
        .timeline()
        // .from('.wall-front', { autoAlpha: 0, duration: 2 })
        .to('.wall-front', { autoAlpha: 0, delay: 1 })
        .from('.wall-side', { autoAlpha: 0, duration: 2 }, '-=0.3');
      ScrollTrigger.create({
        trigger: '#wall',
        start: 'top top',
        end: '+=2000',
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
