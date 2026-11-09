import { c as d, j as o, r as l } from "../js/12cc8a0a-r3f-BJIQ5yep.js";
import f, { defaultQueryClient as a } from "../js/9c881bf2-App-Ca6lG7SI.js";
import { hydrate as u } from "../js/ea54eb1b-index-BY3bo7SP.js";
import "../js/fa3e1470-three-yAinaQqd.js";
import "../js/05f9b839-useIsFetching-WCZ5lBXH.js";
import "../js/7db81931-gsap-BvSoWoVY.js";
import "../js/74e3bc9c-sanity-D6v_koRL.js";
import "../js/ace75ff7-queries-x5Bz04MV.js";
import "../js/36313836-vimeo-tU-lLMFv.js";
import "../js/7f604b53-headRegistry-dleTaUIF.js";
(function () {
  if (typeof window > "u") return;
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const i of r.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && c(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = p(e);
    fetch(e.href, r);
  }
})();
const s = document.getElementById("root");
window.__REACT_QUERY_STATE__ && u(a, window.__REACT_QUERY_STATE__);
const m = s.children.length > 0;
m
  ? d.hydrateRoot(s, o.jsx(l.StrictMode, { children: o.jsx(f, {}) }), {
      onRecoverableError: (n, t) => {
        console.warn(
          "[hydration] recoverable error:",
          n?.message ?? n,
          `
componentStack:`,
          t?.componentStack ?? "(none)",
        );
      },
    })
  : d.createRoot(s).render(o.jsx(l.StrictMode, { children: o.jsx(f, {}) }));
