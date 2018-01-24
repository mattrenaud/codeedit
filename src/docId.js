import rand from "./rand";

const { location: { hash: origHash } } = window;

if (
  !origHash ||
  origHash.length < 7 ||
  !/^[a-z0-9]+$/i.test(origHash.slice(1))
) {
  window.location.hash = `#${rand()}`;
}

const { location: { hash: newHash } } = window;

export default newHash.slice(1);
