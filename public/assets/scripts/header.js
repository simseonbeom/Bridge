import { ScrollTrigger, gsap } from 'gsap/all';
import { device } from './settings';
import { debounce } from './utils';

export function showHeader() {
  gsap.to('#header',{yPercent:100})
  console.log('hit');
}
export function hideHeader() {
  gsap.to('#header',{yPercent:0})
  console.log('hit');
}
