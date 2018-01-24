import rand from "./rand";

const { location: { hash: origHash } } = window;

if (!origHash || origHash.length < 3 || !/^[a-z0-9]+$/i.test(origHash)) {
  window.location.hash = `#${rand()}`;
}

const { location: { hash: newHash } } = window;

export default newHash.slice(1);
