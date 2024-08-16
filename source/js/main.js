import { animateHeaderLogo } from './animateHeaderLogo';
import { animateMainHead } from './animateMainHead';
import { navMenu } from './navMenu';
import { animateStickers} from './animateStickers';
import { animateAdvantages } from './animateAdvantages';
import { animateTextLines } from './animateTextLines';
import { animatePrice } from './animatePrice';
import { animateAbout } from './animateAbout';

window.addEventListener('DOMContentLoaded', () => {
  addLoadEventListener();
});

function addLoadEventListener() {
  window.addEventListener('load', () => {
    // animateHeaderLogo();
    // animateMainHead();
    // navMenu();
    // animateStickers(['.sticker', '.price-stick-one', '.price-stick-two']);
    // animateAdvantages();
    // animatePrice();
    // animateTextLines('.price-line-one');
    // animateTextLines('.price-line-two');
    // animateAbout();
  });
}
