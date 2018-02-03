import rand from './rand';

const { location: { pathname: origPath } } = window;

let docId = origPath.slice(1);

if (!docId || docId.length < 6 || !/^[a-z0-9]+$/.test(docId)) {
  docId = rand();
  setTimeout(() =>
    window.history.replaceState({}, document.title, `/${docId}`)
  );
}

export default docId;
