const e = { title: void 0, htmlLang: "en", meta: new Map(), link: new Map(), jsonLd: [] };
function a(t) {
  e.title = t;
}
function i(t, n) {
  e.meta.set(t, n);
}
function s(t, n) {
  e.link.set(t, n);
}
function d(t) {
  e.jsonLd.push(t);
}
function o() {
  return e;
}
function l() {
  ((e.title = void 0), (e.htmlLang = "en"), e.meta.clear(), e.link.clear(), (e.jsonLd.length = 0));
}
export {
  d as addJsonLd,
  o as readHeadRegistry,
  l as resetHeadRegistry,
  s as setHeadLink,
  i as setHeadMeta,
  a as setHeadTitle,
};
