
import rand from './rand';

const {
  location: {
    hash: origHash
  }
} = window;

if (!origHash || origHash.length < 3) {
  window.location.hash = `#${rand()}`;
}

const {
  location: {
    hash: newHash
  }
} = window;


export default newHash.slice(1)
