import rand from "./rand";

const { location: { pathname: origPath } } = window;

if (
  !origPath ||
  origPath.length < 7 ||
  !/^[a-z0-9]+$/i.test(origPath.slice(1))
) {
  window.location.pathname = `/${rand()}`;
}

const { location: { pathname: newPath } } = window;

export default newPath.slice(1);
