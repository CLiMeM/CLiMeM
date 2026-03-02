/**
 * Browser entry: expose workshop on window for static pages.
 */
import { workshop } from './content/workshop';

declare global {
  interface Window {
    workshop: typeof workshop;
  }
}

window.workshop = workshop;
