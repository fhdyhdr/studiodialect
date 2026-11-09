import {
  r as o,
  b as x2,
  j as t,
  e as v2,
  C as ke,
  u as $e,
  d as B0,
  H as y2,
  M as j2,
  f as w2,
  h as _1,
  i as b2,
  g as _2,
  R as N2,
  k as R2,
  P as E2,
  l as S2,
} from "../js/12cc8a0a-r3f-BJIQ5yep.js";
import { u as L2, a as u0, b as I2, Q as N1, c as C2 } from "../js/05f9b839-useIsFetching-WCZ5lBXH.js";
import { g as U0 } from "../js/7db81931-gsap-BvSoWoVY.js";
import {
  as as R1,
  ao as A2,
  h as E1,
  e as X0,
  g as F0,
  az as M2,
  ag as T2,
  t as P2,
  Q as k2,
  ad as j0,
} from "../js/fa3e1470-three-yAinaQqd.js";
import { r as $2, c as D2, P as b0 } from "../js/74e3bc9c-sanity-D6v_koRL.js";
import {
  siteDataQuery as S1,
  SITE_SETTINGS_QUERY as O2,
  PROJECTS_PAGE_QUERY as U2,
  LABS_PAGE_QUERY as F2,
  CAPABILITIES_QUERY as B2,
  CAPABILITY_BY_SLUG_QUERY as H2,
} from "../js/ace75ff7-queries-x5Bz04MV.js";
import { P as z2 } from "../js/36313836-vimeo-tU-lLMFv.js";
import {
  setHeadMeta as J,
  setHeadLink as q2,
  setHeadTitle as W2,
  addJsonLd as V2,
} from "../js/7f604b53-headRegistry-dleTaUIF.js";
var a1 = "popstate";
function Y2(e = {}) {
  function s(r, a) {
    let { pathname: l, search: i, hash: c } = r.location;
    return Me(
      "",
      { pathname: l, search: i, hash: c },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default",
    );
  }
  function n(r, a) {
    return typeof a == "string" ? a : H0(a);
  }
  return X2(s, n, null, e);
}
function X(e, s) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(s);
}
function _0(e, s) {
  if (!e) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function G2() {
  return Math.random().toString(36).substring(2, 10);
}
function o1(e, s) {
  return { usr: e.state, key: e.key, idx: s };
}
function Me(e, s, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? q0(s) : s),
    state: n,
    key: (s && s.key) || r || G2(),
  };
}
function H0({ pathname: e = "/", search: s = "", hash: n = "" }) {
  return (
    s && s !== "?" && (e += s.charAt(0) === "?" ? s : "?" + s),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function q0(e) {
  let s = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((s.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((s.search = e.substring(r)), (e = e.substring(0, r))), e && (s.pathname = e));
  }
  return s;
}
function X2(e, s, n, r = {}) {
  let { window: a = document.defaultView, v5Compat: l = !1 } = r,
    i = a.history,
    c = "POP",
    d = null,
    u = h();
  u == null && ((u = 0), i.replaceState({ ...i.state, idx: u }, ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    c = "POP";
    let _ = h(),
      v = _ == null ? null : _ - u;
    ((u = _), d && d({ action: c, location: j.location, delta: v }));
  }
  function p(_, v) {
    c = "PUSH";
    let f = Me(j.location, _, v);
    u = h() + 1;
    let b = o1(f, u),
      R = j.createHref(f);
    try {
      i.pushState(b, "", R);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      a.location.assign(R);
    }
    l && d && d({ action: c, location: j.location, delta: 1 });
  }
  function g(_, v) {
    c = "REPLACE";
    let f = Me(j.location, _, v);
    u = h();
    let b = o1(f, u),
      R = j.createHref(f);
    (i.replaceState(b, "", R), l && d && d({ action: c, location: j.location, delta: 0 }));
  }
  function y(_) {
    return K2(_);
  }
  let j = {
    get action() {
      return c;
    },
    get location() {
      return e(a, i);
    },
    listen(_) {
      if (d) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(a1, m),
        (d = _),
        () => {
          (a.removeEventListener(a1, m), (d = null));
        }
      );
    },
    createHref(_) {
      return s(a, _);
    },
    createURL: y,
    encodeLocation(_) {
      let v = y(_);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: p,
    replace: g,
    go(_) {
      return i.go(_);
    },
  };
  return j;
}
function K2(e, s = !1) {
  let n = "http://localhost";
  (typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href),
    X(n, "No window.location.(origin|href) available to create URL"));
  let r = typeof e == "string" ? e : H0(e);
  return ((r = r.replace(/ $/, "%20")), !s && r.startsWith("//") && (r = n + r), new URL(r, n));
}
function L1(e, s, n = "/") {
  return Z2(e, s, n, !1);
}
function Z2(e, s, n, r) {
  let a = typeof s == "string" ? q0(s) : s,
    l = P0(a.pathname || "/", n);
  if (l == null) return null;
  let i = I1(e);
  Q2(i);
  let c = null;
  for (let d = 0; c == null && d < i.length; ++d) {
    let u = c9(l);
    c = i9(i[d], u, r);
  }
  return c;
}
function I1(e, s = [], n = [], r = "", a = !1) {
  let l = (i, c, d = a, u) => {
    let h = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: c,
      route: i,
    };
    if (h.relativePath.startsWith("/")) {
      if (!h.relativePath.startsWith(r) && d) return;
      (X(
        h.relativePath.startsWith(r),
        `Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (h.relativePath = h.relativePath.slice(r.length)));
    }
    let m = I0([r, h.relativePath]),
      p = n.concat(h);
    (i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      I1(i.children, s, p, m, d)),
      !(i.path == null && !i.index) && s.push({ path: m, score: a9(m, i.index), routesMeta: p }));
  };
  return (
    e.forEach((i, c) => {
      if (i.path === "" || !i.path?.includes("?")) l(i, c);
      else for (let d of C1(i.path)) l(i, c, !0, d);
    }),
    s
  );
}
function C1(e) {
  let s = e.split("/");
  if (s.length === 0) return [];
  let [n, ...r] = s,
    a = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return a ? [l, ""] : [l];
  let i = C1(r.join("/")),
    c = [];
  return (
    c.push(...i.map((d) => (d === "" ? l : [l, d].join("/")))),
    a && c.push(...i),
    c.map((d) => (e.startsWith("/") && d === "" ? "/" : d))
  );
}
function Q2(e) {
  e.sort((s, n) =>
    s.score !== n.score
      ? n.score - s.score
      : o9(
          s.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var J2 = /^:[\w-]+$/,
  e9 = 3,
  t9 = 2,
  n9 = 1,
  s9 = 10,
  r9 = -2,
  i1 = (e) => e === "*";
function a9(e, s) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(i1) && (r += r9),
    s && (r += t9),
    n.filter((a) => !i1(a)).reduce((a, l) => a + (J2.test(l) ? e9 : l === "" ? n9 : s9), r)
  );
}
function o9(e, s) {
  return e.length === s.length && e.slice(0, -1).every((r, a) => r === s[a]) ? e[e.length - 1] - s[s.length - 1] : 0;
}
function i9(e, s, n = !1) {
  let { routesMeta: r } = e,
    a = {},
    l = "/",
    i = [];
  for (let c = 0; c < r.length; ++c) {
    let d = r[c],
      u = c === r.length - 1,
      h = l === "/" ? s : s.slice(l.length) || "/",
      m = ye({ path: d.relativePath, caseSensitive: d.caseSensitive, end: u }, h),
      p = d.route;
    if (
      (!m &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (m = ye({ path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 }, h)),
      !m)
    )
      return null;
    (Object.assign(a, m.params),
      i.push({ params: a, pathname: I0([l, m.pathname]), pathnameBase: m9(I0([l, m.pathnameBase])), route: p }),
      m.pathnameBase !== "/" && (l = I0([l, m.pathnameBase])));
  }
  return i;
}
function ye(e, s) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = l9(e.path, e.caseSensitive, e.end),
    a = s.match(n);
  if (!a) return null;
  let l = a[0],
    i = l.replace(/(.)\/+$/, "$1"),
    c = a.slice(1);
  return {
    params: r.reduce((u, { paramName: h, isOptional: m }, p) => {
      if (h === "*") {
        let y = c[p] || "";
        i = l.slice(0, l.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const g = c[p];
      return (m && !g ? (u[h] = void 0) : (u[h] = (g || "").replace(/%2F/g, "/")), u);
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function l9(e, s = !1, n = !0) {
  _0(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, c, d) => (r.push({ paramName: c, isOptional: d != null }), d ? "/?([^\\/]+)?" : "/([^\\/]+)"),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (a += "\\/*$")
        : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, s ? void 0 : "i"), r]
  );
}
function c9(e) {
  try {
    return e
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      _0(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`,
      ),
      e
    );
  }
}
function P0(e, s) {
  if (s === "/") return e;
  if (!e.toLowerCase().startsWith(s.toLowerCase())) return null;
  let n = s.endsWith("/") ? s.length - 1 : s.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function d9(e, s = "/") {
  let { pathname: n, search: r = "", hash: a = "" } = typeof e == "string" ? q0(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : u9(n, s)) : s, search: f9(r), hash: p9(a) };
}
function u9(e, s) {
  let n = s.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Se(e, s, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${s}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function h9(e) {
  return e.filter((s, n) => n === 0 || (s.route.path && s.route.path.length > 0));
}
function A1(e) {
  let s = h9(e);
  return s.map((n, r) => (r === s.length - 1 ? n.pathname : n.pathnameBase));
}
function M1(e, s, n, r = !1) {
  let a;
  typeof e == "string"
    ? (a = q0(e))
    : ((a = { ...e }),
      X(!a.pathname || !a.pathname.includes("?"), Se("?", "pathname", "search", a)),
      X(!a.pathname || !a.pathname.includes("#"), Se("#", "pathname", "hash", a)),
      X(!a.search || !a.search.includes("#"), Se("#", "search", "hash", a)));
  let l = e === "" || a.pathname === "",
    i = l ? "/" : a.pathname,
    c;
  if (i == null) c = n;
  else {
    let m = s.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === "..";) (p.shift(), (m -= 1));
      a.pathname = p.join("/");
    }
    c = m >= 0 ? s[m] : "/";
  }
  let d = d9(a, c),
    u = i && i !== "/" && i.endsWith("/"),
    h = (l || i === ".") && n.endsWith("/");
  return (!d.pathname.endsWith("/") && (u || h) && (d.pathname += "/"), d);
}
var I0 = (e) => e.join("/").replace(/\/\/+/g, "/"),
  m9 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  f9 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  p9 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function g9(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var T1 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(T1);
var x9 = ["GET", ...T1];
new Set(x9);
var K0 = o.createContext(null);
K0.displayName = "DataRouter";
var je = o.createContext(null);
je.displayName = "DataRouterState";
o.createContext(!1);
var P1 = o.createContext({ isTransitioning: !1 });
P1.displayName = "ViewTransition";
var v9 = o.createContext(new Map());
v9.displayName = "Fetchers";
var y9 = o.createContext(null);
y9.displayName = "Await";
var R0 = o.createContext(null);
R0.displayName = "Navigation";
var ne = o.createContext(null);
ne.displayName = "Location";
var E0 = o.createContext({ outlet: null, matches: [], isDataRoute: !1 });
E0.displayName = "Route";
var De = o.createContext(null);
De.displayName = "RouteError";
function j9(e, { relative: s } = {}) {
  X(se(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = o.useContext(R0),
    { hash: a, pathname: l, search: i } = re(e, { relative: s }),
    c = l;
  return (n !== "/" && (c = l === "/" ? n : I0([n, l])), r.createHref({ pathname: c, search: i, hash: a }));
}
function se() {
  return o.useContext(ne) != null;
}
function x0() {
  return (X(se(), "useLocation() may be used only in the context of a <Router> component."), o.useContext(ne).location);
}
var k1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function $1(e) {
  o.useContext(R0).static || o.useLayoutEffect(e);
}
function Oe() {
  let { isDataRoute: e } = o.useContext(E0);
  return e ? T9() : w9();
}
function w9() {
  X(se(), "useNavigate() may be used only in the context of a <Router> component.");
  let e = o.useContext(K0),
    { basename: s, navigator: n } = o.useContext(R0),
    { matches: r } = o.useContext(E0),
    { pathname: a } = x0(),
    l = JSON.stringify(A1(r)),
    i = o.useRef(!1);
  return (
    $1(() => {
      i.current = !0;
    }),
    o.useCallback(
      (d, u = {}) => {
        if ((_0(i.current, k1), !i.current)) return;
        if (typeof d == "number") {
          n.go(d);
          return;
        }
        let h = M1(d, JSON.parse(l), a, u.relative === "path");
        (e == null && s !== "/" && (h.pathname = h.pathname === "/" ? s : I0([s, h.pathname])),
          (u.replace ? n.replace : n.push)(h, u.state, u));
      },
      [s, n, l, a, e],
    )
  );
}
o.createContext(null);
function we() {
  let { matches: e } = o.useContext(E0),
    s = e[e.length - 1];
  return s ? s.params : {};
}
function re(e, { relative: s } = {}) {
  let { matches: n } = o.useContext(E0),
    { pathname: r } = x0(),
    a = JSON.stringify(A1(n));
  return o.useMemo(() => M1(e, JSON.parse(a), r, s === "path"), [e, a, r, s]);
}
function b9(e, s) {
  return D1(e, s);
}
function D1(e, s, n, r, a) {
  X(se(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: l } = o.useContext(R0),
    { matches: i } = o.useContext(E0),
    c = i[i.length - 1],
    d = c ? c.params : {},
    u = c ? c.pathname : "/",
    h = c ? c.pathnameBase : "/",
    m = c && c.route;
  {
    let f = (m && m.path) || "";
    O1(
      u,
      !m || f.endsWith("*") || f.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f === "/" ? "*" : `${f}/*`}">.`,
    );
  }
  let p = x0(),
    g;
  if (s) {
    let f = typeof s == "string" ? q0(s) : s;
    (X(
      h === "/" || f.pathname?.startsWith(h),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${f.pathname}" was given in the \`location\` prop.`,
    ),
      (g = f));
  } else g = p;
  let y = g.pathname || "/",
    j = y;
  if (h !== "/") {
    let f = h.replace(/^\//, "").split("/");
    j = "/" + y.replace(/^\//, "").split("/").slice(f.length).join("/");
  }
  let _ = L1(e, { pathname: j });
  (_0(m || _ != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
    _0(
      _ == null ||
        _[_.length - 1].route.element !== void 0 ||
        _[_.length - 1].route.Component !== void 0 ||
        _[_.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let v = S9(
    _ &&
      _.map((f) =>
        Object.assign({}, f, {
          params: Object.assign({}, d, f.params),
          pathname: I0([
            h,
            l.encodeLocation
              ? l.encodeLocation(f.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname
              : f.pathname,
          ]),
          pathnameBase:
            f.pathnameBase === "/"
              ? h
              : I0([
                  h,
                  l.encodeLocation
                    ? l.encodeLocation(f.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname
                    : f.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
    a,
  );
  return s && v
    ? o.createElement(
        ne.Provider,
        {
          value: {
            location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...g },
            navigationType: "POP",
          },
        },
        v,
      )
    : v;
}
function _9() {
  let e = M9(),
    s = g9(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    a = { padding: "0.5rem", backgroundColor: r },
    l = { padding: "2px 4px", backgroundColor: r },
    i = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (i = o.createElement(
      o.Fragment,
      null,
      o.createElement("p", null, "💿 Hey developer 👋"),
      o.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        o.createElement("code", { style: l }, "ErrorBoundary"),
        " or",
        " ",
        o.createElement("code", { style: l }, "errorElement"),
        " prop on your route.",
      ),
    )),
    o.createElement(
      o.Fragment,
      null,
      o.createElement("h2", null, "Unexpected Application Error!"),
      o.createElement("h3", { style: { fontStyle: "italic" } }, s),
      n ? o.createElement("pre", { style: a }, n) : null,
      i,
    )
  );
}
var N9 = o.createElement(_9, null),
  R9 = class extends o.Component {
    constructor(e) {
      (super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, s) {
      return s.location !== e.location || (s.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : s.error,
            location: s.location,
            revalidation: e.revalidation || s.revalidation,
          };
    }
    componentDidCatch(e, s) {
      this.props.unstable_onError
        ? this.props.unstable_onError(e, s)
        : console.error("React Router caught the following error during render", e);
    }
    render() {
      return this.state.error !== void 0
        ? o.createElement(
            E0.Provider,
            { value: this.props.routeContext },
            o.createElement(De.Provider, { value: this.state.error, children: this.props.component }),
          )
        : this.props.children;
    }
  };
function E9({ routeContext: e, match: s, children: n }) {
  let r = o.useContext(K0);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = s.route.id),
    o.createElement(E0.Provider, { value: e }, n)
  );
}
function S9(e, s = [], n = null, r = null, a = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (s.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
    else return null;
  }
  let l = e,
    i = n?.errors;
  if (i != null) {
    let u = l.findIndex((h) => h.route.id && i?.[h.route.id] !== void 0);
    (X(u >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),
      (l = l.slice(0, Math.min(l.length, u + 1))));
  }
  let c = !1,
    d = -1;
  if (n)
    for (let u = 0; u < l.length; u++) {
      let h = l[u];
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = u), h.route.id)) {
        let { loaderData: m, errors: p } = n,
          g = h.route.loader && !m.hasOwnProperty(h.route.id) && (!p || p[h.route.id] === void 0);
        if (h.route.lazy || g) {
          ((c = !0), d >= 0 ? (l = l.slice(0, d + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((u, h, m) => {
    let p,
      g = !1,
      y = null,
      j = null;
    n &&
      ((p = i && h.route.id ? i[h.route.id] : void 0),
      (y = h.route.errorElement || N9),
      c &&
        (d < 0 && m === 0
          ? (O1("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
            (g = !0),
            (j = null))
          : d === m && ((g = !0), (j = h.route.hydrateFallbackElement || null))));
    let _ = s.concat(l.slice(0, m + 1)),
      v = () => {
        let f;
        return (
          p
            ? (f = y)
            : g
              ? (f = j)
              : h.route.Component
                ? (f = o.createElement(h.route.Component, null))
                : h.route.element
                  ? (f = h.route.element)
                  : (f = u),
          o.createElement(E9, {
            match: h,
            routeContext: { outlet: u, matches: _, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || m === 0)
      ? o.createElement(R9, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: p,
          children: v(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          unstable_onError: r,
        })
      : v();
  }, null);
}
function Ue(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function L9(e) {
  let s = o.useContext(K0);
  return (X(s, Ue(e)), s);
}
function I9(e) {
  let s = o.useContext(je);
  return (X(s, Ue(e)), s);
}
function C9(e) {
  let s = o.useContext(E0);
  return (X(s, Ue(e)), s);
}
function Fe(e) {
  let s = C9(e),
    n = s.matches[s.matches.length - 1];
  return (X(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id);
}
function A9() {
  return Fe("useRouteId");
}
function M9() {
  let e = o.useContext(De),
    s = I9("useRouteError"),
    n = Fe("useRouteError");
  return e !== void 0 ? e : s.errors?.[n];
}
function T9() {
  let { router: e } = L9("useNavigate"),
    s = Fe("useNavigate"),
    n = o.useRef(!1);
  return (
    $1(() => {
      n.current = !0;
    }),
    o.useCallback(
      async (a, l = {}) => {
        (_0(n.current, k1),
          n.current && (typeof a == "number" ? e.navigate(a) : await e.navigate(a, { fromRouteId: s, ...l })));
      },
      [e, s],
    )
  );
}
var l1 = {};
function O1(e, s, n) {
  !s && !l1[e] && ((l1[e] = !0), _0(!1, n));
}
o.memo(P9);
function P9({ routes: e, future: s, state: n, unstable_onError: r }) {
  return D1(e, void 0, n, r, s);
}
function K(e) {
  X(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function U1({
  basename: e = "/",
  children: s = null,
  location: n,
  navigationType: r = "POP",
  navigator: a,
  static: l = !1,
}) {
  X(!se(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let i = e.replace(/^\/*/, "/"),
    c = o.useMemo(() => ({ basename: i, navigator: a, static: l, future: {} }), [i, a, l]);
  typeof n == "string" && (n = q0(n));
  let { pathname: d = "/", search: u = "", hash: h = "", state: m = null, key: p = "default" } = n,
    g = o.useMemo(() => {
      let y = P0(d, i);
      return y == null ? null : { location: { pathname: y, search: u, hash: h, state: m, key: p }, navigationType: r };
    }, [i, d, u, h, m, p, r]);
  return (
    _0(
      g != null,
      `<Router basename="${i}"> is not able to match the URL "${d}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    g == null
      ? null
      : o.createElement(R0.Provider, { value: c }, o.createElement(ne.Provider, { children: s, value: g }))
  );
}
function c1({ children: e, location: s }) {
  return b9(Te(e), s);
}
function Te(e, s = []) {
  let n = [];
  return (
    o.Children.forEach(e, (r, a) => {
      if (!o.isValidElement(r)) return;
      let l = [...s, a];
      if (r.type === o.Fragment) {
        n.push.apply(n, Te(r.props.children, l));
        return;
      }
      (X(
        r.type === K,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        X(!r.props.index || !r.props.children, "An index route cannot have child routes."));
      let i = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (i.children = Te(r.props.children, l)), n.push(i));
    }),
    n
  );
}
var ge = "get",
  xe = "application/x-www-form-urlencoded";
function be(e) {
  return e != null && typeof e.tagName == "string";
}
function k9(e) {
  return be(e) && e.tagName.toLowerCase() === "button";
}
function $9(e) {
  return be(e) && e.tagName.toLowerCase() === "form";
}
function D9(e) {
  return be(e) && e.tagName.toLowerCase() === "input";
}
function O9(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function U9(e, s) {
  return e.button === 0 && (!s || s === "_self") && !O9(e);
}
var ce = null;
function F9() {
  if (ce === null)
    try {
      (new FormData(document.createElement("form"), 0), (ce = !1));
    } catch {
      ce = !0;
    }
  return ce;
}
var B9 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Le(e) {
  return e != null && !B9.has(e)
    ? (_0(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`), null)
    : e;
}
function H9(e, s) {
  let n, r, a, l, i;
  if ($9(e)) {
    let c = e.getAttribute("action");
    ((r = c ? P0(c, s) : null),
      (n = e.getAttribute("method") || ge),
      (a = Le(e.getAttribute("enctype")) || xe),
      (l = new FormData(e)));
  } else if (k9(e) || (D9(e) && (e.type === "submit" || e.type === "image"))) {
    let c = e.form;
    if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let d = e.getAttribute("formaction") || c.getAttribute("action");
    if (
      ((r = d ? P0(d, s) : null),
      (n = e.getAttribute("formmethod") || c.getAttribute("method") || ge),
      (a = Le(e.getAttribute("formenctype")) || Le(c.getAttribute("enctype")) || xe),
      (l = new FormData(c, e)),
      !F9())
    ) {
      let { name: u, type: h, value: m } = e;
      if (h === "image") {
        let p = u ? `${u}.` : "";
        (l.append(`${p}x`, "0"), l.append(`${p}y`, "0"));
      } else u && l.append(u, m);
    }
  } else {
    if (be(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    ((n = ge), (r = null), (a = xe), (i = e));
  }
  return (
    l && a === "text/plain" && ((i = l), (l = void 0)),
    { action: r, method: n.toLowerCase(), encType: a, formData: l, body: i }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Be(e, s) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(s);
}
function z9(e, s, n) {
  let r = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${n}`)
      : s && P0(r.pathname, s) === "/"
        ? (r.pathname = `${s.replace(/\/$/, "")}/_root.${n}`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`),
    r
  );
}
async function q9(e, s) {
  if (e.id in s) return s[e.id];
  try {
    let n = await import(e.module);
    return ((s[e.id] = n), n);
  } catch (n) {
    return (
      console.error(`Error loading route module \`${e.module}\`, reloading page...`),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function W9(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function V9(e, s, n) {
  let r = await Promise.all(
    e.map(async (a) => {
      let l = s.routes[a.route.id];
      if (l) {
        let i = await q9(l, n);
        return i.links ? i.links() : [];
      }
      return [];
    }),
  );
  return K9(
    r
      .flat(1)
      .filter(W9)
      .filter((a) => a.rel === "stylesheet" || a.rel === "preload")
      .map((a) => (a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" })),
  );
}
function d1(e, s, n, r, a, l) {
  let i = (d, u) => (n[u] ? d.route.id !== n[u].route.id : !0),
    c = (d, u) =>
      n[u].pathname !== d.pathname || (n[u].route.path?.endsWith("*") && n[u].params["*"] !== d.params["*"]);
  return l === "assets"
    ? s.filter((d, u) => i(d, u) || c(d, u))
    : l === "data"
      ? s.filter((d, u) => {
          let h = r.routes[d.route.id];
          if (!h || !h.hasLoader) return !1;
          if (i(d, u) || c(d, u)) return !0;
          if (d.route.shouldRevalidate) {
            let m = d.route.shouldRevalidate({
              currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: d.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof m == "boolean") return m;
          }
          return !0;
        })
      : [];
}
function Y9(e, s, { includeHydrateFallback: n } = {}) {
  return G9(
    e
      .map((r) => {
        let a = s.routes[r.route.id];
        if (!a) return [];
        let l = [a.module];
        return (
          a.clientActionModule && (l = l.concat(a.clientActionModule)),
          a.clientLoaderModule && (l = l.concat(a.clientLoaderModule)),
          n && a.hydrateFallbackModule && (l = l.concat(a.hydrateFallbackModule)),
          a.imports && (l = l.concat(a.imports)),
          l
        );
      })
      .flat(1),
  );
}
function G9(e) {
  return [...new Set(e)];
}
function X9(e) {
  let s = {},
    n = Object.keys(e).sort();
  for (let r of n) s[r] = e[r];
  return s;
}
function K9(e, s) {
  let n = new Set();
  return (
    new Set(s),
    e.reduce((r, a) => {
      let l = JSON.stringify(X9(a));
      return (n.has(l) || (n.add(l), r.push({ key: l, link: a })), r);
    }, [])
  );
}
function F1() {
  let e = o.useContext(K0);
  return (Be(e, "You must render this element inside a <DataRouterContext.Provider> element"), e);
}
function Z9() {
  let e = o.useContext(je);
  return (Be(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e);
}
var He = o.createContext(void 0);
He.displayName = "FrameworkContext";
function B1() {
  let e = o.useContext(He);
  return (Be(e, "You must render this element inside a <HydratedRouter> element"), e);
}
function Q9(e, s) {
  let n = o.useContext(He),
    [r, a] = o.useState(!1),
    [l, i] = o.useState(!1),
    { onFocus: c, onBlur: d, onMouseEnter: u, onMouseLeave: h, onTouchStart: m } = s,
    p = o.useRef(null);
  (o.useEffect(() => {
    if ((e === "render" && i(!0), e === "viewport")) {
      let j = (v) => {
          v.forEach((f) => {
            i(f.isIntersecting);
          });
        },
        _ = new IntersectionObserver(j, { threshold: 0.5 });
      return (
        p.current && _.observe(p.current),
        () => {
          _.disconnect();
        }
      );
    }
  }, [e]),
    o.useEffect(() => {
      if (r) {
        let j = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(j);
        };
      }
    }, [r]));
  let g = () => {
      a(!0);
    },
    y = () => {
      (a(!1), i(!1));
    };
  return n
    ? e !== "intent"
      ? [l, p, {}]
      : [
          l,
          p,
          {
            onFocus: ee(c, g),
            onBlur: ee(d, y),
            onMouseEnter: ee(u, g),
            onMouseLeave: ee(h, y),
            onTouchStart: ee(m, g),
          },
        ]
    : [!1, p, {}];
}
function ee(e, s) {
  return (n) => {
    (e && e(n), n.defaultPrevented || s(n));
  };
}
function J9({ page: e, ...s }) {
  let { router: n } = F1(),
    r = o.useMemo(() => L1(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? o.createElement(t6, { page: e, matches: r, ...s }) : null;
}
function e6(e) {
  let { manifest: s, routeModules: n } = B1(),
    [r, a] = o.useState([]);
  return (
    o.useEffect(() => {
      let l = !1;
      return (
        V9(e, s, n).then((i) => {
          l || a(i);
        }),
        () => {
          l = !0;
        }
      );
    }, [e, s, n]),
    r
  );
}
function t6({ page: e, matches: s, ...n }) {
  let r = x0(),
    { manifest: a, routeModules: l } = B1(),
    { basename: i } = F1(),
    { loaderData: c, matches: d } = Z9(),
    u = o.useMemo(() => d1(e, s, d, a, r, "data"), [e, s, d, a, r]),
    h = o.useMemo(() => d1(e, s, d, a, r, "assets"), [e, s, d, a, r]),
    m = o.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let y = new Set(),
        j = !1;
      if (
        (s.forEach((v) => {
          let f = a.routes[v.route.id];
          !f ||
            !f.hasLoader ||
            ((!u.some((b) => b.route.id === v.route.id) && v.route.id in c && l[v.route.id]?.shouldRevalidate) ||
            f.hasClientLoader
              ? (j = !0)
              : y.add(v.route.id));
        }),
        y.size === 0)
      )
        return [];
      let _ = z9(e, i, "data");
      return (
        j &&
          y.size > 0 &&
          _.searchParams.set(
            "_routes",
            s
              .filter((v) => y.has(v.route.id))
              .map((v) => v.route.id)
              .join(","),
          ),
        [_.pathname + _.search]
      );
    }, [i, c, r, a, u, s, e, l]),
    p = o.useMemo(() => Y9(h, a), [h, a]),
    g = e6(h);
  return o.createElement(
    o.Fragment,
    null,
    m.map((y) => o.createElement("link", { key: y, rel: "prefetch", as: "fetch", href: y, ...n })),
    p.map((y) => o.createElement("link", { key: y, rel: "modulepreload", href: y, ...n })),
    g.map(({ key: y, link: j }) => o.createElement("link", { key: y, nonce: n.nonce, ...j })),
  );
}
function n6(...e) {
  return (s) => {
    e.forEach((n) => {
      typeof n == "function" ? n(s) : n != null && (n.current = s);
    });
  };
}
var H1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  H1 && (window.__reactRouterVersion = "7.9.3");
} catch {}
function s6({ basename: e, children: s, window: n }) {
  let r = o.useRef();
  r.current == null && (r.current = Y2({ window: n, v5Compat: !0 }));
  let a = r.current,
    [l, i] = o.useState({ action: a.action, location: a.location }),
    c = o.useCallback(
      (d) => {
        o.startTransition(() => i(d));
      },
      [i],
    );
  return (
    o.useLayoutEffect(() => a.listen(c), [a, c]),
    o.createElement(U1, { basename: e, children: s, location: l.location, navigationType: l.action, navigator: a })
  );
}
var z1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  i0 = o.forwardRef(function (
    {
      onClick: s,
      discover: n = "render",
      prefetch: r = "none",
      relative: a,
      reloadDocument: l,
      replace: i,
      state: c,
      target: d,
      to: u,
      preventScrollReset: h,
      viewTransition: m,
      ...p
    },
    g,
  ) {
    let { basename: y } = o.useContext(R0),
      j = typeof u == "string" && z1.test(u),
      _,
      v = !1;
    if (typeof u == "string" && j && ((_ = u), H1))
      try {
        let M = new URL(window.location.href),
          D = u.startsWith("//") ? new URL(M.protocol + u) : new URL(u),
          C = P0(D.pathname, y);
        D.origin === M.origin && C != null ? (u = C + D.search + D.hash) : (v = !0);
      } catch {
        _0(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let f = j9(u, { relative: a }),
      [b, R, w] = Q9(r, p),
      N = o6(u, { replace: i, state: c, target: d, preventScrollReset: h, relative: a, viewTransition: m });
    function x(M) {
      (s && s(M), M.defaultPrevented || N(M));
    }
    let S = o.createElement("a", {
      ...p,
      ...w,
      href: _ || f,
      onClick: v || l ? s : x,
      ref: n6(g, R),
      target: d,
      "data-discover": !j && n === "render" ? "true" : void 0,
    });
    return b && !j ? o.createElement(o.Fragment, null, S, o.createElement(J9, { page: f })) : S;
  });
i0.displayName = "Link";
var f0 = o.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: a = !1,
    style: l,
    to: i,
    viewTransition: c,
    children: d,
    ...u
  },
  h,
) {
  let m = re(i, { relative: u.relative }),
    p = x0(),
    g = o.useContext(je),
    { navigator: y, basename: j } = o.useContext(R0),
    _ = g != null && u6(m) && c === !0,
    v = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname,
    f = p.pathname,
    b = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
  (n || ((f = f.toLowerCase()), (b = b ? b.toLowerCase() : null), (v = v.toLowerCase())),
    b && j && (b = P0(b, j) || b));
  const R = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
  let w = f === v || (!a && f.startsWith(v) && f.charAt(R) === "/"),
    N = b != null && (b === v || (!a && b.startsWith(v) && b.charAt(v.length) === "/")),
    x = { isActive: w, isPending: N, isTransitioning: _ },
    S = w ? s : void 0,
    M;
  typeof r == "function"
    ? (M = r(x))
    : (M = [r, w ? "active" : null, N ? "pending" : null, _ ? "transitioning" : null].filter(Boolean).join(" "));
  let D = typeof l == "function" ? l(x) : l;
  return o.createElement(
    i0,
    { ...u, "aria-current": S, className: M, ref: h, style: D, to: i, viewTransition: c },
    typeof d == "function" ? d(x) : d,
  );
});
f0.displayName = "NavLink";
var r6 = o.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: s,
      navigate: n,
      reloadDocument: r,
      replace: a,
      state: l,
      method: i = ge,
      action: c,
      onSubmit: d,
      relative: u,
      preventScrollReset: h,
      viewTransition: m,
      ...p
    },
    g,
  ) => {
    let y = c6(),
      j = d6(c, { relative: u }),
      _ = i.toLowerCase() === "get" ? "get" : "post",
      v = typeof c == "string" && z1.test(c),
      f = (b) => {
        if ((d && d(b), b.defaultPrevented)) return;
        b.preventDefault();
        let R = b.nativeEvent.submitter,
          w = R?.getAttribute("formmethod") || i;
        y(R || b.currentTarget, {
          fetcherKey: s,
          method: w,
          navigate: n,
          replace: a,
          state: l,
          relative: u,
          preventScrollReset: h,
          viewTransition: m,
        });
      };
    return o.createElement("form", {
      ref: g,
      method: _,
      action: j,
      onSubmit: r ? d : f,
      ...p,
      "data-discover": !v && e === "render" ? "true" : void 0,
    });
  },
);
r6.displayName = "Form";
function a6(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function q1(e) {
  let s = o.useContext(K0);
  return (X(s, a6(e)), s);
}
function o6(e, { target: s, replace: n, state: r, preventScrollReset: a, relative: l, viewTransition: i } = {}) {
  let c = Oe(),
    d = x0(),
    u = re(e, { relative: l });
  return o.useCallback(
    (h) => {
      if (U9(h, s)) {
        h.preventDefault();
        let m = n !== void 0 ? n : H0(d) === H0(u);
        c(e, { replace: m, state: r, preventScrollReset: a, relative: l, viewTransition: i });
      }
    },
    [d, c, u, n, r, s, e, a, l, i],
  );
}
var i6 = 0,
  l6 = () => `__${String(++i6)}__`;
function c6() {
  let { router: e } = q1("useSubmit"),
    { basename: s } = o.useContext(R0),
    n = A9();
  return o.useCallback(
    async (r, a = {}) => {
      let { action: l, method: i, encType: c, formData: d, body: u } = H9(r, s);
      if (a.navigate === !1) {
        let h = a.fetcherKey || l6();
        await e.fetch(h, n, a.action || l, {
          preventScrollReset: a.preventScrollReset,
          formData: d,
          body: u,
          formMethod: a.method || i,
          formEncType: a.encType || c,
          flushSync: a.flushSync,
        });
      } else
        await e.navigate(a.action || l, {
          preventScrollReset: a.preventScrollReset,
          formData: d,
          body: u,
          formMethod: a.method || i,
          formEncType: a.encType || c,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [e, s, n],
  );
}
function d6(e, { relative: s } = {}) {
  let { basename: n } = o.useContext(R0),
    r = o.useContext(E0);
  X(r, "useFormAction must be used inside a RouteContext");
  let [a] = r.matches.slice(-1),
    l = { ...re(e || ".", { relative: s }) },
    i = x0();
  if (e == null) {
    l.search = i.search;
    let c = new URLSearchParams(l.search),
      d = c.getAll("index");
    if (d.some((h) => h === "")) {
      (c.delete("index"), d.filter((m) => m).forEach((m) => c.append("index", m)));
      let h = c.toString();
      l.search = h ? `?${h}` : "";
    }
  }
  return (
    (!e || e === ".") && a.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (l.pathname = l.pathname === "/" ? n : I0([n, l.pathname])),
    H0(l)
  );
}
function u6(e, { relative: s } = {}) {
  let n = o.useContext(P1);
  X(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = q1("useViewTransitionState"),
    a = re(e, { relative: s });
  if (!n.isTransitioning) return !1;
  let l = P0(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = P0(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ye(a.pathname, i) != null || ye(a.pathname, l) != null;
}
function h6({ basename: e, children: s, location: n = "/" }) {
  typeof n == "string" && (n = q0(n));
  let r = "POP",
    a = {
      pathname: n.pathname || "/",
      search: n.search || "",
      hash: n.hash || "",
      state: n.state != null ? n.state : null,
      key: n.key || "default",
    },
    l = m6();
  return o.createElement(U1, { basename: e, children: s, location: a, navigationType: r, navigator: l, static: !0 });
}
function m6() {
  return {
    createHref: f6,
    encodeLocation: p6,
    push(e) {
      throw new Error(
        `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`,
      );
    },
    replace(e) {
      throw new Error(
        `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`,
      );
    },
    go(e) {
      throw new Error(
        `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`,
      );
    },
    back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    },
    forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    },
  };
}
function f6(e) {
  return typeof e == "string" ? e : H0(e);
}
function p6(e) {
  let s = typeof e == "string" ? e : H0(e);
  s = s.replace(/ $/, "%20");
  let n = g6.test(s) ? new URL(s) : new URL(s, "http://localhost");
  return { pathname: n.pathname, search: n.search, hash: n.hash };
}
var g6 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  x6 = x2();
const u1 = "/_hi/c",
  Pe = "hi",
  v6 = "hiya_off",
  te = 50,
  y6 = 1800,
  j6 = 1,
  w6 = 15e3,
  b6 = 5e3,
  _6 = 50,
  h1 = "_hiya_v",
  m1 = "_hiya_off",
  de = "_hiya_q",
  f1 = "_hiya_hi",
  D0 = () => Date.now();
function ue() {
  const e = globalThis.crypto;
  return e && typeof e.randomUUID == "function"
    ? e.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
        const n = (Math.random() * 16) | 0;
        return (s === "x" ? n : (n & 3) | 8).toString(16);
      });
}
function he(e, s) {
  try {
    return e?.getItem(s) ?? null;
  } catch {
    return null;
  }
}
function me(e, s, n) {
  try {
    e?.setItem(s, n);
  } catch {}
}
function p1(e, s) {
  try {
    e?.removeItem(s);
  } catch {}
}
function N6(e) {
  const s = {};
  let n = !1;
  return (
    new URLSearchParams(e).forEach((r, a) => {
      const l = a.toLowerCase();
      (l.startsWith("utm_") || l === Pe) && ((s[l] = r.slice(0, 256)), (n = !0));
    }),
    n ? s : void 0
  );
}
function R6() {
  const e = document.referrer;
  if (e) {
    try {
      if (new URL(e).host === location.host) return;
    } catch {
      return;
    }
    return e.slice(0, 2048);
  }
}
function E6() {
  const e = document.documentElement,
    s = e.scrollHeight - e.clientHeight;
  return s <= 0 ? 100 : Math.max(0, Math.min(100, Math.round(((window.scrollY || 0) / s) * 100)));
}
class S6 {
  key = "";
  endpoint = u1;
  consent = "unset";
  manual = !1;
  started = !1;
  disabled = !1;
  queue = [];
  page = null;
  clientSid = "";
  lastPath = "";
  routeTimer = null;
  sending = !1;
  init(s) {
    if (
      !(this.started || typeof window > "u") &&
      ((this.started = !0),
      (this.key = s.key),
      (this.endpoint = s.endpoint ?? u1),
      (this.consent = s.consent ?? "unset"),
      (this.manual = s.manual ?? !1),
      (this.clientSid = "s_" + ue().slice(0, 12)),
      !this.handleOptOut())
    ) {
      if (document.prerendering) {
        document.addEventListener("prerenderingchange", () => this.boot(), { once: !0 });
        return;
      }
      this.boot();
    }
  }
  handleOptOut() {
    if (new URLSearchParams(location.search).get(v6) === "1") {
      me(localStorage, m1, "1");
      try {
        fetch(this.endpoint.replace(/\/c$/, "/x"), { method: "POST", credentials: "same-origin", keepalive: !0 });
      } catch {}
    }
    return he(localStorage, m1) === "1" ? ((this.disabled = !0), !0) : !1;
  }
  boot() {
    (this.restoreQueue(),
      this.captureToken(),
      this.patchHistory(),
      document.addEventListener("visibilitychange", this.onVisibility),
      window.addEventListener("pagehide", this.onPageHide),
      window.addEventListener("scroll", this.onScroll, { passive: !0 }),
      setInterval(() => void this.flush(), b6),
      setInterval(() => this.heartbeat(), w6),
      this.manual || this.trackPageview(),
      this.flush());
  }
  setConsent(s) {
    this.disabled ||
      this.consent === s ||
      ((this.consent = s),
      (s === "granted" || s === "denied") &&
        (this.enqueue({ id: ue(), t: "consent", ts: D0(), state: s }), this.flush()));
  }
  captureToken() {
    const s = new URLSearchParams(location.search).get(Pe);
    if (s) {
      me(sessionStorage, f1, s.slice(0, 32));
      try {
        const n = new URL(location.href);
        (n.searchParams.delete(Pe), history.replaceState(history.state, "", n.pathname + n.search + n.hash));
      } catch {}
    }
  }
  trackPageview() {
    if (this.disabled) return;
    this.finalizePage();
    const s = location.pathname + location.search;
    this.lastPath = location.pathname;
    const n = {
      id: ue(),
      path: s,
      visibleMs: 0,
      resumedAt: document.visibilityState === "visible" ? D0() : null,
      maxScroll: 0,
      reported: -1,
    };
    this.page = n;
    const r = { id: n.id, t: "pv", ts: D0(), u: s.slice(0, 2048) },
      a = R6();
    a && (r.r = a);
    const l = N6(location.search);
    (l && (r.q = l),
      (r.vw = window.innerWidth),
      (r.vh = window.innerHeight),
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          document.title && (r.ti = document.title.slice(0, 512));
        }),
      ),
      this.enqueue(r));
  }
  patchHistory() {
    const s = (n) => {
      const r = history[n];
      history[n] = function (...l) {
        const i = r.apply(this, l);
        return (window.dispatchEvent(new Event("hiya:locationchange")), i);
      };
    };
    (s("pushState"),
      s("replaceState"),
      window.addEventListener("popstate", () => this.onRouteChange()),
      window.addEventListener("hiya:locationchange", () => this.onRouteChange()));
  }
  onRouteChange() {
    (this.routeTimer && clearTimeout(this.routeTimer),
      (this.routeTimer = setTimeout(() => {
        location.pathname !== this.lastPath && (this.captureToken(), this.manual || this.trackPageview());
      }, _6)));
  }
  accrue() {
    const s = this.page;
    !s ||
      s.resumedAt === null ||
      ((s.visibleMs += D0() - s.resumedAt), (s.resumedAt = document.visibilityState === "visible" ? D0() : null));
  }
  visibleSeconds(s) {
    return Math.min(y6, Math.round(s.visibleMs / 1e3));
  }
  heartbeat() {
    this.disabled || document.visibilityState !== "visible" || (this.accrue(), this.reportEngagement("hb"));
  }
  reportEngagement(s) {
    const n = this.page;
    if (!n) return;
    const r = this.visibleSeconds(n);
    (s === "hb" && r <= n.reported) ||
      ((n.reported = r), this.enqueue({ id: ue(), t: s, ts: D0(), pvid: n.id, d: r, sd: n.maxScroll }));
  }
  finalizePage() {
    this.page && (this.accrue(), this.reportEngagement("leave"), (this.page = null));
  }
  onScroll = () => {
    if (!this.page) return;
    const s = E6();
    s > this.page.maxScroll && (this.page.maxScroll = s);
  };
  onVisibility = () => {
    document.visibilityState === "hidden"
      ? (this.accrue(), this.page && (this.page.resumedAt = null), this.reportEngagement("leave"), this.flushBeacon())
      : this.page && this.page.resumedAt === null && (this.page.resumedAt = D0());
  };
  onPageHide = () => {
    (this.accrue(), this.reportEngagement("leave"), this.flushBeacon());
  };
  enqueue(s) {
    this.disabled ||
      (this.queue.push(s),
      this.queue.length > te * 4 && this.queue.splice(0, this.queue.length - te * 4),
      this.persistQueue());
  }
  body(s) {
    return JSON.stringify({
      k: this.key,
      v: he(localStorage, h1),
      s: this.clientSid,
      c: this.consent,
      hi: he(sessionStorage, f1),
      sv: j6,
      wd: navigator.webdriver ? 1 : 0,
      e: s,
    });
  }
  async flush() {
    if (this.disabled || this.sending || this.queue.length === 0) return;
    const s = this.queue.slice(0, te);
    this.sending = !0;
    try {
      const n = await fetch(this.endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: this.body(s),
        credentials: "same-origin",
        keepalive: !0,
      });
      if (!n.ok) {
        n.status >= 400 && n.status < 500 && (this.queue.splice(0, s.length), this.persistQueue());
        return;
      }
      if ((this.queue.splice(0, s.length), this.persistQueue(), n.status !== 204)) {
        const r = await n.json().catch(() => null);
        r?.v && me(localStorage, h1, r.v);
      }
    } catch {
    } finally {
      this.sending = !1;
    }
  }
  flushBeacon() {
    if (this.disabled || this.queue.length === 0) return;
    const s = this.queue.slice(0, te);
    try {
      const n = new Blob([this.body(s)], { type: "application/json" });
      navigator.sendBeacon(this.endpoint, n) && (this.queue.splice(0, s.length), this.persistQueue());
    } catch {}
  }
  persistQueue() {
    if (this.queue.length === 0) {
      p1(sessionStorage, de);
      return;
    }
    me(sessionStorage, de, JSON.stringify(this.queue.slice(-te)));
  }
  restoreQueue() {
    const s = he(sessionStorage, de);
    if (s)
      try {
        const n = JSON.parse(s);
        Array.isArray(n) && (this.queue = n.concat(this.queue));
      } catch {
        p1(sessionStorage, de);
      }
  }
}
const W1 = new S6();
function L6(e) {
  W1.init(e);
}
function I6(e) {
  W1.setConsent(e);
}
function C6({ publicKey: e, consent: s }) {
  return (
    o.useEffect(() => {
      e && L6({ key: e, consent: s });
    }, [e]),
    o.useEffect(() => {
      I6(s);
    }, [s]),
    null
  );
}
const V1 = o.createContext(void 0);
function A6({ children: e }) {
  const [s, n] = o.useState(!1),
    [r, a] = o.useState("initial"),
    [l, i] = o.useState(!1),
    c = o.useCallback(() => {
      i(!0);
    }, []),
    d = o.useCallback(() => {
      i(!1);
    }, []),
    u = {
      initialLoadComplete: s,
      setInitialLoadComplete: n,
      navigationSource: r,
      setNavigationSource: a,
      isTransitioning: l,
      startTransition: c,
      endTransition: d,
    };
  return t.jsx(V1.Provider, { value: u, children: e });
}
const Y1 = o.createContext(void 0);
function G1() {
  const e = o.useContext(Y1);
  if (!e) throw new Error("useLoaderManager must be used within a LoaderProvider");
  return e;
}
function ze() {
  const e = o.useContext(V1);
  if (!e) throw new Error("useNavigationState must be used within a NavigationProvider");
  return e;
}
function qe() {
  const [e, s] = o.useState(!1);
  return (
    o.useEffect(() => {
      s(!0);
    }, []),
    e
  );
}
const M6 = "../assets/images/1fce6d9a-loader-BYw2aNWv.gif",
  T6 = 600,
  g1 = 500;
function P6() {
  const e = document.getElementById("inline-loader");
  e && e.remove();
}
function k6() {
  const e = qe(),
    { isActive: s, progress: n } = G1(),
    { initialLoadComplete: r, setInitialLoadComplete: a } = ze(),
    [l, i] = o.useState(!0),
    [c, d] = o.useState(!1),
    [u, h] = o.useState(n ?? 0),
    m = o.useRef(!1),
    p = o.useRef(Date.now()),
    g = o.useRef(null),
    y = o.useRef(null),
    j = o.useRef(null);
  return (
    o.useEffect(() => {
      m.current || ((m.current = !0), P6());
    }, []),
    o.useEffect(
      () => () => {
        (g.current && window.clearTimeout(g.current),
          y.current && window.clearTimeout(y.current),
          j.current && window.clearTimeout(j.current));
      },
      [],
    ),
    o.useEffect(() => {
      if (!r) {
        if (s) {
          (g.current && (window.clearTimeout(g.current), (g.current = null)),
            y.current && (window.clearTimeout(y.current), (y.current = null)),
            i(!0),
            d(!1),
            h(n ?? 0),
            (p.current = Date.now()));
          return;
        }
        if (!s && l) {
          if (y.current) return;
          const _ = p.current ? Date.now() - p.current : 0,
            v = Math.max(T6 - _, 0);
          y.current = window.setTimeout(() => {
            (d(!0),
              h(100),
              (j.current = window.setTimeout(() => {
                (h(0), (j.current = null));
              }, g1)),
              (g.current = window.setTimeout(() => {
                (i(!1), (p.current = null), (g.current = null), a(!0));
              }, g1)),
              (y.current = null));
          }, v);
        }
      }
    }, [s, l, n, r, a]),
    o.useEffect(() => {
      n !== void 0 && s && h(n);
    }, [n, s]),
    o.useEffect(() => {
      if (!s || n !== void 0) return;
      const _ = window.setInterval(() => {
        h((v) => (v >= 95 ? 95 : v + 0.7));
      }, 24);
      return () => window.clearInterval(_);
    }, [s, n]),
    o.useEffect(() => {
      if (r) {
        document.body.classList.add("loaded");
        return;
      }
      s ? document.body.classList.remove("loaded") : document.body.classList.add("loaded");
    }, [s, r]),
    !e || r
      ? null
      : t.jsx("div", {
          className: `loader ${c ? "loader--hidden" : ""}`,
          role: "status",
          "aria-live": "polite",
          "aria-busy": s,
          children: t.jsx("div", {
            className: "loader__content",
            children: t.jsxs("div", {
              children: [
                t.jsxs("div", {
                  className: "loader__title",
                  children: [
                    t.jsxs("div", {
                      className: "loader__graphic",
                      children: [
                        t.jsx("div", { className: "loader__graphic_icon icon_1" }),
                        t.jsx("div", { className: "loader__graphic_icon icon_2" }),
                        t.jsx("div", { className: "loader__graphic_icon icon_3" }),
                      ],
                    }),
                    t.jsx("img", { src: M6, alt: "" }),
                  ],
                }),
                t.jsxs("div", { className: "loader__pct", children: ["[ LOADING ... ", Math.round(u), "% ]"] }),
                t.jsx("div", {
                  className: "loader__bar",
                  children: t.jsx("div", { className: "loader__progress", style: { width: `${u}%` } }),
                }),
              ],
            }),
          }),
        })
  );
}
function $6(e) {
  return Number.isNaN(e) || e < 0 ? 0 : e > 100 ? 100 : e;
}
function D6({ children: e }) {
  const s = L2(),
    [n, r] = o.useState({}),
    a = o.useCallback((m) => {
      r((p) => (p[m] !== void 0 ? p : { ...p, [m]: 0 }));
    }, []),
    l = o.useCallback((m, p) => {
      r((g) => (g[m] === void 0 ? g : { ...g, [m]: $6(p) }));
    }, []),
    i = o.useCallback((m) => {
      r((p) => {
        if (p[m] === void 0) return p;
        const g = { ...p };
        return (delete g[m], g);
      });
    }, []),
    c = Object.values(n),
    d = c.length > 0 ? c.reduce((m, p) => m + p, 0) / c.length : void 0,
    u = c.length > 0 || s > 0,
    h = o.useMemo(
      () => ({ startTask: a, updateTaskProgress: l, finishTask: i, isActive: u, progress: d }),
      [a, l, i, u, d],
    );
  return t.jsx(Y1.Provider, { value: h, children: e });
}
function We(e, s, n) {
  const { width: r, height: a, data: l } = e,
    i = s ?? (typeof window < "u" ? window.innerWidth : r),
    c = n ?? (typeof window < "u" ? window.innerHeight : a),
    d = i / r,
    u = c / a,
    h = [];
  for (let m = 0; m < a; m++)
    for (let p = 0; p < r; p++) {
      const g = (m * r + p) * 4;
      if (!(l[g] === 255)) continue;
      const j = p * d,
        _ = m * u,
        v = d,
        f = u;
      h.push(`M${j} ${_} L${j + v} ${_} L${j + v} ${_ + f} L${j} ${_ + f} Z`);
    }
  return h.length === 0 ? "path('M0 0')" : `path('${h.join(" ")}')`;
}
function X1(e, s, n) {
  return We(e, s, n);
}
const O6 = (e, s, n, r) => {
  if (!e) return;
  const i = ((Date.now() - r) / 500) * e.canvas.height;
  if (n)
    for (let c = 0; c < e.canvas.height; c++) {
      const d = c < i ? 0 : c > i + e.canvas.height * 0.3 ? 1 : 1 - (c - i) / (e.canvas.height * 0.3);
      for (let u = 0; u < e.canvas.width; u++) {
        const h = Math.random() < d ? 0 : 255,
          m = (c * e.canvas.width + u) * 4;
        s.data[m] !== h && ((s.data[m] = h), (s.data[m + 1] = h), (s.data[m + 2] = h), (s.data[m + 3] = 255));
      }
    }
  else
    for (let c = 0; c < e.canvas.height; c++) {
      const d = c < i ? 1 : c > i + e.canvas.height * 0.3 ? 0 : (c - i) / (e.canvas.height * 0.3);
      for (let u = 0; u < e.canvas.width; u++) {
        const h = Math.random() < d ? 0 : 255,
          m = (c * e.canvas.width + u) * 4;
        s.data[m] !== h && ((s.data[m] = h), (s.data[m + 1] = h), (s.data[m + 2] = h), (s.data[m + 3] = 255));
      }
    }
  e.putImageData(s, 0, 0);
};
function U6() {
  const e = x0(),
    { navigationSource: s, initialLoadComplete: n, startTransition: r, endTransition: a } = ze(),
    [l, i] = o.useState(!1),
    [c, d] = o.useState(!1),
    u = o.useRef(null),
    h = o.useRef(null),
    m = o.useRef(null),
    p = o.useRef(e.pathname),
    g = o.useRef(0);
  return (
    o.useEffect(() => {
      if (n && e.pathname !== p.current && ((p.current = e.pathname), s === "direct")) {
        (r(), i(!0), d(!1), (g.current = Date.now()));
        const y = setTimeout(() => {
            (d(!0), (g.current = Date.now()));
          }, 600),
          j = setTimeout(() => {
            (i(!1), a());
          }, 600);
        return () => {
          (clearTimeout(y), clearTimeout(j));
        };
      }
    }, [e.pathname, s, n, r, a]),
    o.useEffect(() => {
      if (!l) return;
      let y;
      const j = () => {
        const _ = u.current?.getContext("2d", { willReadFrequently: !0 });
        if (
          _ &&
          ((!h.current || h.current.width !== _.canvas.width || h.current.height !== _.canvas.height) &&
            (h.current = _.getImageData(0, 0, _.canvas.width, _.canvas.height)),
          O6(_, h.current, c, g.current),
          m.current && h.current)
        ) {
          const v = We(h.current);
          m.current.style.clipPath = v;
        }
        y = requestAnimationFrame(j);
      };
      return (
        j(),
        () => {
          y && cancelAnimationFrame(y);
        }
      );
    }, [l, c]),
    l
      ? t.jsx("div", {
          ref: m,
          className: "page-transition",
          style: { pointerEvents: l ? "all" : "none" },
          children: t.jsx("canvas", { ref: u, className: "page-transition__canvas", width: "10", height: "10" }),
        })
      : null
  );
}
const F6 = {
    points: [
      0.7122, 0.5828, 0.3913, 0.7224, 0.5774, 0.3804, 0.7261, 0.5793, 0.3702, 0.7234, 0.5858, 0.3655, 0.727, 0.5879,
      0.3548, 0.7276, 0.5922, 0.3463, 0.7212, 0.6034, 0.3402, 0.7243, 0.6061, 0.3287, 0.7218, 0.611, 0.3252, 0.727,
      0.6073, 0.3204, 0.729, 0.6069, 0.3167, 0.7321, 0.6068, 0.3096, 0.7382, 0.6038, 0.3008, 0.741, 0.6021, 0.2973,
      0.7415, 0.6066, 0.2867, 0.7451, 0.6039, 0.2831, 0.7421, 0.6103, 0.2772, 0.7452, 0.61, 0.2695, 0.7444, 0.612,
      0.267, 0.7408, 0.6176, 0.2641, 0.7392, 0.6223, 0.2573, 0.744, 0.6192, 0.2511, 0.7466, 0.615, 0.2536, 0.7484,
      0.6144, 0.2498, 0.7565, 0.6027, 0.2539, 0.7615, 0.5982, 0.2497, 0.7609, 0.6011, 0.2444, 0.7618, 0.6025, 0.2382,
      0.7598, 0.6087, 0.2285, 0.7632, 0.6077, 0.2196, 0.7671, 0.6077, 0.2058, 0.7706, 0.6037, 0.2042, 0.7697, 0.6021,
      0.2123, 0.7696, 0.5995, 0.2197, 0.7662, 0.5979, 0.2354, 0.7637, 0.595, 0.2504, 0.7654, 0.5888, 0.2596, 0.7706,
      0.5828, 0.2579, 0.7759, 0.5758, 0.2579, 0.7776, 0.5698, 0.266, 0.7814, 0.5642, 0.2667, 0.7834, 0.559, 0.2716,
      0.7785, 0.5595, 0.2844, 0.7865, 0.5499, 0.2812, 0.7856, 0.5462, 0.2908, 0.7887, 0.5373, 0.2986, 0.7942, 0.5285,
      0.2998, 0.7946, 0.5243, 0.3062, 0.7918, 0.5257, 0.311, 0.7887, 0.5237, 0.322, 0.7904, 0.5196, 0.3244, 0.7861,
      0.5196, 0.3347, 0.7875, 0.5111, 0.3444, 0.7942, 0.4983, 0.3478, 0.7893, 0.492, 0.3673, 0.7841, 0.4933, 0.3765,
      0.7845, 0.49, 0.3801, 0.7795, 0.4919, 0.3878, 0.7737, 0.4897, 0.4019, 0.7578, 0.4974, 0.4222, 0.7574, 0.5111,
      0.4064, 0.7517, 0.5207, 0.4048, 0.7449, 0.5232, 0.4139, 0.7393, 0.5326, 0.4121, 0.7304, 0.5444, 0.4126, 0.7288,
      0.5524, 0.4046, 0.7245, 0.5545, 0.4094, 0.7202, 0.565, 0.4025, 0.7122, 0.5828, 0.3913, 0, 0, 0, 0.3968, -0.2032,
      0.8952, 0.3988, -0.2112, 0.8924, 0.3959, -0.2176, 0.8921, 0.3967, -0.2234, 0.8903, 0.3641, -0.2232, 0.9042,
      0.3582, -0.277, 0.8916, 0.3671, -0.2907, 0.8836, 0.3759, -0.3011, 0.8764, 0.3468, -0.3079, 0.886, 0.3093, -0.3055,
      0.9005, 0.2992, -0.2975, 0.9066, 0.2343, -0.2983, 0.9253, 0.2318, -0.2994, 0.9255, 0.2227, -0.2919, 0.9302,
      0.2122, -0.2914, 0.9328, 0.2022, -0.2942, 0.9341, 0.1942, -0.2974, 0.9348, 0.1933, -0.2869, 0.9383, 0.1964,
      -0.2722, 0.942, 0.203, -0.2568, 0.9449, 0.2042, -0.2495, 0.9466, 0.2104, -0.2343, 0.9491, 0.2147, -0.2273, 0.9499,
      0.2248, -0.2162, 0.9501, 0.2305, -0.2086, 0.9504, 0.2329, -0.1959, 0.9526, 0.2325, -0.1862, 0.9546, 0.2277,
      -0.1801, 0.9569, 0.2237, -0.1696, 0.9598, 0.22, -0.1593, 0.9624, 0.221, -0.1557, 0.9628, 0.2264, -0.1489, 0.9626,
      0.2218, -0.1322, 0.9661, 0.2187, -0.1206, 0.9683, 0.2105, -0.1096, 0.9714, 0.2122, -0.1063, 0.9714, 0.2193,
      -0.1039, 0.9701, 0.2241, -0.1043, 0.969, 0.2301, -0.1022, 0.9678, 0.2796, -0.1024, 0.9546, 0.2833, -0.1153,
      0.9521, 0.2877, -0.1257, 0.9494, 0.2913, -0.1313, 0.9476, 0.2973, -0.1404, 0.9444, 0.3082, -0.139, 0.9411, 0.3137,
      -0.1365, 0.9396, 0.3227, -0.139, 0.9362, 0.3253, -0.1346, 0.936, 0.3299, -0.1246, 0.9358, 0.34, -0.1239, 0.9322,
      0.341, -0.1209, 0.9323, 0.3493, -0.1208, 0.9292, 0.3476, -0.1271, 0.929, 0.3672, -0.1269, 0.9214, 0.367, -0.1378,
      0.92, 0.3699, -0.1445, 0.9178, 0.3669, -0.1549, 0.9173, 0.3675, -0.1655, 0.9152, 0.3724, -0.1718, 0.912, 0.3701,
      -0.1923, 0.9089, 0.3741, -0.1907, 0.9076, 0.381, -0.1911, 0.9046, 0.3909, -0.1885, 0.9009, 0.398, -0.1896, 0.8976,
      0.3992, -0.1949, 0.8959, 0.3968, -0.2032, 0.8952, 0, 0, 0, 0.2099, -0.1009, 0.9725, 0.2057, -0.0878, 0.9747,
      0.2127, -0.0803, 0.9738, 0.2178, -0.0774, 0.9729, 0.2241, -0.0833, 0.971, 0.2179, -0.087, 0.9721, 0.215, -0.0915,
      0.9723, 0.2143, -0.099, 0.9717, 0.2099, -0.1009, 0.9725, 0, 0, 0, 0.2714, 0.654, 0.7062, 0.2722, 0.6505, 0.7091,
      0.2687, 0.6486, 0.7121, 0.2693, 0.6443, 0.7158, 0.2653, 0.6378, 0.7231, 0.2629, 0.6387, 0.7231, 0.2618, 0.6417,
      0.7209, 0.2536, 0.6461, 0.7199, 0.2507, 0.6525, 0.7152, 0.2492, 0.6614, 0.7074, 0.2496, 0.6655, 0.7034, 0.247,
      0.6675, 0.7024, 0.247, 0.6675, 0.7024, 0.2449, 0.6717, 0.6992, 0.2482, 0.678, 0.6919, 0.2498, 0.6756, 0.6937,
      0.2527, 0.6767, 0.6915, 0.2563, 0.6733, 0.6935, 0.2596, 0.672, 0.6936, 0.2619, 0.6673, 0.6973, 0.2619, 0.6673,
      0.6973, 0.2618, 0.6628, 0.7015, 0.2653, 0.6572, 0.7055, 0.2714, 0.654, 0.7062, 0, 0, 0, 0.7144, 0.4106, 0.5666,
      0.7158, 0.4114, 0.5642, 0.7178, 0.4071, 0.5649, 0.7245, 0.4096, 0.5544, 0.7326, 0.4091, 0.544, 0.7384, 0.4087,
      0.5364, 0.7408, 0.4194, 0.5247, 0.7437, 0.4296, 0.5123, 0.7454, 0.4392, 0.5014, 0.7492, 0.4339, 0.5004, 0.7553,
      0.4214, 0.5019, 0.7508, 0.4214, 0.5086, 0.754, 0.411, 0.5124, 0.7564, 0.4088, 0.5106, 0.7535, 0.4057, 0.5173,
      0.7559, 0.3991, 0.519, 0.7556, 0.3925, 0.5245, 0.7576, 0.386, 0.5264, 0.7569, 0.3826, 0.5298, 0.7254, 0.3907,
      0.5667, 0.716, 0.407, 0.5672, 0.7144, 0.4106, 0.5666, 0, 0, 0, -0.5292, -0.8181, 0.2251, -0.5319, -0.8178, 0.2196,
      -0.5359, -0.8178, 0.2097, -0.5652, -0.7948, 0.2211, -0.5577, -0.7997, 0.2225, -0.546, -0.8075, 0.2234, -0.533,
      -0.8136, 0.2323, -0.5239, -0.8161, 0.2438, -0.5193, -0.8211, 0.2367, -0.5225, -0.8216, 0.2277, -0.5292, -0.8181,
      0.2251, 0, 0, 0, -0.5693, -0.7912, 0.2234, -0.5748, -0.7895, 0.2149, -0.5851, -0.7881, 0.1911, -0.5941, -0.7818,
      0.1893, -0.6037, -0.7736, 0.1926, -0.6051, -0.7743, 0.1853, -0.6109, -0.7703, 0.183, -0.6247, -0.7583, 0.1861,
      -0.6277, -0.7533, 0.1961, -0.6345, -0.746, 0.2021, -0.6412, -0.7401, 0.2028, -0.6497, -0.73, 0.2121, -0.6642,
      -0.714, 0.2216, -0.6715, -0.7068, 0.2226, -0.672, -0.7044, 0.2285, -0.6768, -0.6998, 0.2287, -0.6809, -0.6973,
      0.224, -0.6845, -0.692, 0.2295, -0.6906, -0.6872, 0.2255, -0.7045, -0.6724, 0.2269, -0.7052, -0.6698, 0.2326,
      -0.7192, -0.6538, 0.2349, -0.7293, -0.6402, 0.2415, -0.7375, -0.6282, 0.248, -0.7386, -0.6232, 0.257, -0.7499,
      -0.6098, 0.2565, -0.7591, -0.597, 0.2596, -0.7619, -0.5879, 0.2718, -0.77, -0.576, 0.2744, -0.7764, -0.562,
      0.2854, -0.7847, -0.5486, 0.2885, -0.7876, -0.546, 0.2855, -0.8051, -0.5205, 0.2845, -0.8106, -0.5051, 0.2963,
      -0.819, -0.4904, 0.2979, -0.8243, -0.4765, 0.3056, -0.8279, -0.4621, 0.3178, -0.8286, -0.4524, 0.3298, -0.8332,
      -0.4463, 0.3266, -0.8343, -0.4413, 0.3305, -0.846, -0.415, 0.3347, -0.8428, -0.4071, 0.3521, -0.8473, -0.3905,
      0.3599, -0.8496, -0.3865, 0.3588, -0.8498, -0.3719, 0.3735, -0.8396, -0.3758, 0.3921, -0.8312, -0.3875, 0.3987,
      -0.8333, -0.3745, 0.4067, -0.8248, -0.3752, 0.423, -0.8223, -0.3786, 0.4247, -0.7986, -0.4048, 0.4454, -0.7912,
      -0.4073, 0.4563, -0.7767, -0.419, 0.4703, -0.7657, -0.4252, 0.4826, -0.7617, -0.4321, 0.4828, -0.7598, -0.4559,
      0.4635, -0.7497, -0.4601, 0.4756, -0.7392, -0.4625, 0.4895, -0.7335, -0.46, 0.5004, -0.7304, -0.4481, 0.5155,
      -0.7345, -0.4343, 0.5215, -0.7311, -0.4313, 0.5287, -0.7229, -0.4403, 0.5324, -0.7181, -0.4528, 0.5285, -0.7222,
      -0.4614, 0.5153, -0.7255, -0.4677, 0.5049, -0.7286, -0.4826, 0.4861, -0.7298, -0.5033, 0.4627, -0.7258, -0.5153,
      0.4557, -0.72, -0.5306, 0.4474, -0.7119, -0.5452, 0.4426, -0.7118, -0.5485, 0.4388, -0.7071, -0.5579, 0.4345,
      -0.7032, -0.5654, 0.431, -0.6863, -0.5777, 0.4419, -0.6815, -0.5875, 0.4364, -0.6729, -0.5936, 0.4414, -0.669,
      -0.6004, 0.438, -0.6648, -0.6182, 0.4194, -0.6704, -0.6255, 0.3991, -0.682, -0.6283, 0.3743, -0.69, -0.627,
      0.3617, -0.6828, -0.6351, 0.3612, -0.6767, -0.6451, 0.3548, -0.6705, -0.6518, 0.3543, -0.6706, -0.6564, 0.3455,
      -0.6753, -0.6583, 0.3327, -0.6845, -0.6535, 0.3231, -0.684, -0.6569, 0.3172, -0.6728, -0.6699, 0.314, -0.6659,
      -0.6738, 0.3204, -0.6661, -0.6697, 0.3284, -0.6589, -0.6764, 0.3291, -0.6608, -0.6804, 0.3169, -0.6584, -0.6883,
      0.3045, -0.6481, -0.7009, 0.2977, -0.6434, -0.7076, 0.2923, -0.6481, -0.7076, 0.2817, -0.646, -0.7139, 0.2703,
      -0.6386, -0.723, 0.2635, -0.6255, -0.7318, 0.2707, -0.6185, -0.7342, 0.28, -0.6096, -0.7447, 0.2716, -0.6083,
      -0.7512, 0.2561, -0.5968, -0.7646, 0.2434, -0.5957, -0.769, 0.2319, -0.5914, -0.7742, 0.2254, -0.577, -0.7855,
      0.2236, -0.567, -0.7918, 0.2273, -0.5693, -0.7912, 0.2234, 0, 0, 0, 0.5196, 0.6573, 0.5459, 0.5314, 0.6593,
      0.5319, 0.5354, 0.6559, 0.5321, 0.5404, 0.6536, 0.5299, 0.5406, 0.6503, 0.5338, 0.5483, 0.6457, 0.5315, 0.5482,
      0.6414, 0.5367, 0.5544, 0.6378, 0.5347, 0.5599, 0.6356, 0.5316, 0.5656, 0.6262, 0.5366, 0.5624, 0.6258, 0.5404,
      0.554, 0.6336, 0.54, 0.5528, 0.6357, 0.5387, 0.5487, 0.6357, 0.543, 0.5438, 0.6393, 0.5437, 0.542, 0.6389, 0.5459,
      0.5359, 0.6429, 0.5473, 0.5269, 0.6462, 0.5522, 0.524, 0.6526, 0.5473, 0.5196, 0.6573, 0.5459, 0, 0, 0, -0.1491,
      -0.9849, 0.0876, -0.142, -0.9864, 0.0824, -0.1357, -0.9877, 0.0778, -0.1405, -0.9873, 0.0739, -0.1424, -0.9875,
      0.068, -0.1491, -0.9865, 0.0672, -0.1497, -0.9864, 0.0675, -0.155, -0.9856, 0.0681, -0.1516, -0.9857, 0.0738,
      -0.1472, -0.986, 0.0787, -0.1524, -0.9848, 0.084, -0.1569, -0.9837, 0.0883, -0.1491, -0.9849, 0.0876, 0, 0, 0,
      -0.0647, -0.9832, -0.1704, -0.0582, -0.9837, -0.1703, -0.0561, -0.9826, -0.1773, -0.0561, -0.9814, -0.1837,
      -0.0562, -0.9812, -0.1847, -0.0555, -0.9803, -0.1898, -0.0555, -0.9803, -0.1898, -0.0593, -0.979, -0.1953,
      -0.0648, -0.9795, -0.1907, -0.0663, -0.9806, -0.1845, -0.0666, -0.9818, -0.178, -0.0647, -0.9832, -0.1704, 0, 0,
      0, -0.1468, -0.9783, 0.1461, -0.1386, -0.9798, 0.1439, -0.1303, -0.9819, 0.1374, -0.125, -0.9833, 0.1323, -0.1189,
      -0.9849, 0.126, -0.1184, -0.9858, 0.1189, -0.1186, -0.9866, 0.1125, -0.1192, -0.9872, 0.1058, -0.1203, -0.9878,
      0.0993, -0.1251, -0.9876, 0.0948, -0.1319, -0.9867, 0.0953, -0.1374, -0.9855, 0.0999, -0.1373, -0.9846, 0.1078,
      -0.1401, -0.9836, 0.1135, -0.1445, -0.9822, 0.1197, -0.1485, -0.981, 0.125, -0.1517, -0.9798, 0.1305, -0.1555,
      -0.9783, 0.1368, -0.1555, -0.9783, 0.1368, -0.1543, -0.9783, 0.1382, -0.1533, -0.9775, 0.1447, -0.1468, -0.9783,
      0.1461, 0, 0, 0, -0.2429, -0.9588, -0.1472, -0.2439, -0.9596, -0.1403, -0.2493, -0.9587, -0.1366, -0.2428,
      -0.9605, -0.1362, -0.2369, -0.9617, -0.138, -0.2346, -0.9613, -0.1444, -0.237, -0.9596, -0.1517, -0.237, -0.9596,
      -0.1517, -0.2423, -0.9579, -0.1538, -0.2429, -0.9588, -0.1472, 0, 0, 0, -0.2313, -0.9587, -0.1654, -0.2302,
      -0.9606, -0.1555, -0.2291, -0.9605, -0.1582, -0.2268, -0.96, -0.1643, -0.2265, -0.9586, -0.1724, -0.2265, -0.9586,
      -0.1724, -0.2315, -0.9576, -0.1717, -0.2313, -0.9587, -0.1654, 0, 0, 0, -0.3063, -0.9507, -0.0484, -0.3049,
      -0.9514, -0.0422, -0.3076, -0.9508, -0.0366, -0.2986, -0.9538, -0.0324, -0.2994, -0.9534, -0.0367, -0.2979,
      -0.9536, -0.0429, -0.2976, -0.9534, -0.0494, -0.2954, -0.9537, -0.0563, -0.2975, -0.9527, -0.0622, -0.3036,
      -0.9505, -0.0664, -0.3036, -0.9505, -0.0664, -0.3072, -0.9495, -0.0636, -0.3063, -0.9503, -0.0564, -0.3063,
      -0.9507, -0.0484, 0, 0, 0, -0.3035, -0.9453, 0.1198, -0.2963, -0.9478, 0.1177, -0.2906, -0.95, 0.1144, -0.2854,
      -0.952, 0.1108, -0.2855, -0.9527, 0.1041, -0.2844, -0.9537, 0.0975, -0.2869, -0.9536, 0.0911, -0.2923, -0.9516,
      0.0955, -0.292, -0.9523, 0.0889, -0.2915, -0.953, 0.0825, -0.2973, -0.9514, 0.0799, -0.3039, -0.9492, 0.0814,
      -0.3085, -0.947, 0.089, -0.3085, -0.947, 0.089, -0.3093, -0.9464, 0.0932, -0.3068, -0.9466, 0.0992, -0.3142,
      -0.9437, 0.1034, -0.3199, -0.9415, 0.1057, -0.3325, -0.9367, 0.1097, -0.3386, -0.9338, 0.1155, -0.3392, -0.9328,
      0.1217, -0.3323, -0.9351, 0.1228, -0.3261, -0.9374, 0.122, -0.3183, -0.9401, 0.1218, -0.311, -0.9427, 0.1211,
      -0.3035, -0.9453, 0.1198, 0, 0, 0, -0.3722, -0.9, 0.2271, -0.371, -0.9016, 0.2225, -0.376, -0.9004, 0.2189,
      -0.3777, -0.9011, 0.2127, -0.377, -0.9029, 0.2064, -0.376, -0.9048, 0.1998, -0.3736, -0.907, 0.1944, -0.3685,
      -0.9099, 0.1906, -0.3631, -0.9125, 0.1883, -0.3568, -0.9149, 0.1888, -0.3557, -0.9165, 0.1828, -0.3576, -0.9171,
      0.1764, -0.3544, -0.9194, 0.1706, -0.3516, -0.9215, 0.1648, -0.3471, -0.9244, 0.1581, -0.342, -0.9269, 0.1547,
      -0.335, -0.9296, 0.154, -0.3289, -0.9316, 0.1549, -0.3233, -0.933, 0.1579, -0.3166, -0.935, 0.1599, -0.3097,
      -0.9374, 0.1593, -0.3037, -0.9396, 0.1576, -0.2972, -0.942, 0.1562, -0.2911, -0.9439, 0.156, -0.2849, -0.946,
      0.1546, -0.2711, -0.9511, 0.148, -0.2649, -0.9531, 0.1464, -0.259, -0.9551, 0.1436, -0.2525, -0.9571, 0.1418,
      -0.2451, -0.9598, 0.1368, -0.2404, -0.9618, 0.1312, -0.2368, -0.9633, 0.1261, -0.2376, -0.964, 0.1195, -0.2332,
      -0.9656, 0.115, -0.2293, -0.9671, 0.1101, -0.2264, -0.9687, 0.1015, -0.2263, -0.9694, 0.0951, -0.2249, -0.9703,
      0.0888, -0.2235, -0.9712, 0.0822, -0.218, -0.9729, 0.0768, -0.2195, -0.9731, 0.0704, -0.2222, -0.9729, 0.0638,
      -0.2226, -0.9732, 0.0573, -0.2242, -0.9732, 0.0508, -0.2174, -0.9748, 0.0505, -0.2131, -0.9755, 0.0555, -0.2074,
      -0.9765, 0.0584, -0.201, -0.9778, 0.0589, -0.197, -0.9789, 0.0536, -0.2001, -0.9786, 0.0481, -0.197, -0.9795,
      0.0421, -0.1901, -0.9809, 0.0405, -0.1836, -0.9822, 0.0389, -0.1772, -0.9833, 0.0414, -0.1708, -0.9845, 0.0406,
      -0.1637, -0.9856, 0.0428, -0.1594, -0.986, 0.048, -0.1534, -0.9868, 0.0515, -0.1469, -0.9877, 0.0534, -0.1402,
      -0.9885, 0.0561, -0.1351, -0.9889, 0.061, -0.1282, -0.9896, 0.0646, -0.1217, -0.9904, 0.0659, -0.1145, -0.9912,
      0.067, -0.1064, -0.9922, 0.0647, -0.1004, -0.993, 0.0622, -0.1042, -0.9923, 0.0676, -0.1064, -0.9916, 0.0735,
      -0.1085, -0.9909, 0.0799, -0.1089, -0.9903, 0.0865, -0.1098, -0.9896, 0.0929, -0.1059, -0.9895, 0.0978, -0.1,
      -0.9899, 0.1006, -0.0936, -0.9905, 0.1011, -0.0975, -0.9894, 0.1076, -0.0981, -0.9886, 0.1138, -0.0932, -0.9886,
      0.1183, -0.0913, -0.988, 0.1244, -0.0893, -0.9874, 0.1304, -0.0857, -0.987, 0.1356, -0.082, -0.9866, 0.1414,
      -0.0802, -0.9858, 0.1474, -0.085, -0.9848, 0.1517, -0.0891, -0.9837, 0.1563, -0.0923, -0.9825, 0.1619, -0.0974,
      -0.9826, 0.1581, -0.1015, -0.9831, 0.1523, -0.1066, -0.9831, 0.1487, -0.1111, -0.9819, 0.1534, -0.1182, -0.9794,
      0.164, -0.119, -0.9786, 0.1679, -0.117, -0.9777, 0.1742, -0.114, -0.9769, 0.1809, -0.1127, -0.9758, 0.1876,
      -0.1112, -0.9746, 0.1943, -0.1113, -0.9731, 0.2018, -0.1079, -0.9724, 0.2071, -0.104, -0.9718, 0.2117, -0.102,
      -0.9715, 0.2141, -0.0965, -0.9713, 0.2174, -0.0917, -0.9707, 0.2219, -0.0881, -0.9699, 0.2269, -0.0847, -0.9689,
      0.2325, -0.0815, -0.9679, 0.2378, -0.0773, -0.9665, 0.2448, -0.0751, -0.965, 0.2513, -0.0723, -0.9636, 0.2573,
      -0.0728, -0.9618, 0.264, -0.0787, -0.9606, 0.2664, -0.079, -0.9586, 0.2735, -0.0772, -0.957, 0.2795, -0.073,
      -0.9561, 0.284, -0.0684, -0.9548, 0.2891, -0.0644, -0.9532, 0.2954, -0.0616, -0.9511, 0.3026, -0.0605, -0.9485,
      0.3108, -0.0574, -0.947, 0.316, -0.0506, -0.9473, 0.3162, -0.0471, -0.9492, 0.3112, -0.0405, -0.9494, 0.3114,
      -0.0411, -0.9473, 0.3176, -0.0391, -0.9451, 0.3243, -0.0328, -0.9457, 0.3234, -0.0308, -0.9478, 0.3174, -0.0241,
      -0.9481, 0.317, -0.0171, -0.9471, 0.3204, -0.0101, -0.9465, 0.3226, -0.0037, -0.9468, 0.3218, -0.0013, -0.9491,
      0.315, 0.0049, -0.9472, 0.3205, 0.0106, -0.9462, 0.3233, 0.0172, -0.9455, 0.3253, 0.0237, -0.9447, 0.3271, 0.0298,
      -0.9433, 0.3305, 0.0365, -0.9424, 0.3324, 0.042, -0.9412, 0.3354, 0.0463, -0.9391, 0.3406, 0.0501, -0.9406,
      0.3359, 0.0566, -0.9398, 0.3371, 0.0595, -0.9425, 0.3288, 0.0616, -0.9446, 0.3225, 0.0687, -0.9434, 0.3243,
      0.0726, -0.9412, 0.3301, 0.0795, -0.9395, 0.3331, 0.0869, -0.9399, 0.3303, 0.0875, -0.9421, 0.3238, 0.0938,
      -0.9399, 0.3284, 0.1006, -0.9392, 0.3284, 0.1075, -0.9389, 0.3269, 0.1134, -0.9391, 0.3245, 0.119, -0.9398,
      0.3204, 0.1247, -0.9401, 0.3173, 0.1252, -0.9421, 0.3111, 0.1269, -0.9438, 0.3052, 0.1339, -0.9428, 0.3054,
      0.1404, -0.9425, 0.3032, 0.1463, -0.9425, 0.3004, 0.1523, -0.9424, 0.2977, 0.1585, -0.9416, 0.297, 0.1649,
      -0.9409, 0.2957, 0.1717, -0.9393, 0.2971, 0.1781, -0.9382, 0.2967, 0.1842, -0.9376, 0.2948, 0.1905, -0.936,
      0.2961, 0.1982, -0.9325, 0.3018, 0.2042, -0.9304, 0.3043, 0.2083, -0.9314, 0.2984, 0.207, -0.9337, 0.2923, 0.2091,
      -0.9351, 0.2861, 0.215, -0.9346, 0.2833, 0.2149, -0.9368, 0.276, 0.2159, -0.9383, 0.27, 0.2231, -0.9369, 0.2691,
      0.2293, -0.9343, 0.2731, 0.2354, -0.9332, 0.2716, 0.244, -0.9311, 0.2713, 0.2501, -0.9302, 0.2687, 0.2577,
      -0.9289, 0.2658, 0.2638, -0.9275, 0.2648, 0.2703, -0.926, 0.2636, 0.2764, -0.9246, 0.2623, 0.2793, -0.9253,
      0.2564, 0.2875, -0.923, 0.2558, 0.2937, -0.9211, 0.2554, 0.2976, -0.9213, 0.2504, 0.3041, -0.9197, 0.2485, 0.3094,
      -0.9172, 0.251, 0.3165, -0.9153, 0.2491, 0.3225, -0.9139, 0.2464, 0.3288, -0.9128, 0.2423, 0.3336, -0.9122,
      0.2377, 0.3365, -0.9127, 0.232, 0.3389, -0.9134, 0.2256, 0.3384, -0.9153, 0.2184, 0.333, -0.9183, 0.2141, 0.3317,
      -0.9206, 0.2061, 0.3301, -0.9225, 0.2003, 0.3325, -0.9232, 0.1925, 0.3309, -0.9251, 0.1864, 0.3296, -0.9269,
      0.1795, 0.3318, -0.9273, 0.1735, 0.337, -0.926, 0.1703, 0.3455, -0.9232, 0.1681, 0.345, -0.9247, 0.161, 0.346,
      -0.9255, 0.1543, 0.3467, -0.9262, 0.1478, 0.348, -0.9268, 0.1414, 0.3505, -0.9268, 0.1353, 0.3366, -0.9334,
      0.1244, 0.3326, -0.935, 0.1232, 0.3254, -0.9378, 0.1213, 0.3195, -0.9393, 0.1252, 0.3121, -0.9415, 0.1273, 0.3064,
      -0.9438, 0.1241, 0.309, -0.9437, 0.1182, 0.3027, -0.9459, 0.1166, 0.296, -0.948, 0.1171, 0.2887, -0.9503, 0.1169,
      0.2854, -0.952, 0.1112, 0.286, -0.9525, 0.1048, 0.2908, -0.9515, 0.1, 0.2979, -0.9494, 0.0993, 0.3044, -0.9473,
      0.0994, 0.3103, -0.9456, 0.0981, 0.3159, -0.9439, 0.0961, 0.3219, -0.9418, 0.0964, 0.3305, -0.9389, 0.0956,
      0.3331, -0.9383, 0.0924, 0.3355, -0.9381, 0.086, 0.3388, -0.9374, 0.0806, 0.3427, -0.9364, 0.0751, 0.3496, -0.934,
      0.0734, 0.3559, -0.9317, 0.0729, 0.3627, -0.9293, 0.0697, 0.3679, -0.9277, 0.0643, 0.3719, -0.9264, 0.0593,
      0.3778, -0.9242, 0.0566, 0.3811, -0.923, 0.0532, 0.3843, -0.9219, 0.0487, 0.3835, -0.9226, 0.0418, 0.3857,
      -0.9219, 0.0359, 0.3881, -0.9211, 0.0295, 0.3877, -0.9215, 0.022, 0.3923, -0.9197, 0.0173, 0.4031, -0.915, 0.0142,
      0.3988, -0.917, 0.0114, 0.3914, -0.9202, 0.008, 0.3883, -0.9215, 0.0022, 0.387, -0.9221, -0.0043, 0.3888, -0.9213,
      -0.0108, 0.3873, -0.9218, -0.0176, 0.3866, -0.9219, -0.024, 0.3879, -0.9213, -0.0283, 0.3865, -0.9217, -0.0339,
      0.3826, -0.9231, -0.0387, 0.3841, -0.9222, -0.045, 0.3832, -0.9222, -0.0522, 0.3845, -0.9213, -0.0587, 0.3812,
      -0.9222, -0.0653, 0.3857, -0.9199, -0.0707, 0.3903, -0.9176, -0.0751, 0.3936, -0.9157, -0.0807, 0.4034, -0.9104,
      -0.0919, 0.4002, -0.9114, -0.0959, 0.3946, -0.9134, -0.1002, 0.388, -0.9159, -0.1033, 0.3763, -0.9201, -0.1092,
      0.374, -0.9202, -0.1155, 0.3721, -0.9202, -0.1215, 0.3716, -0.9194, -0.1291, 0.3711, -0.9184, -0.1368, 0.3732,
      -0.9165, -0.1437, 0.3758, -0.9145, -0.1499, 0.3734, -0.9142, -0.1574, 0.3745, -0.9127, -0.1637, 0.3694, -0.9141,
      -0.1675, 0.3633, -0.9163, -0.1686, 0.3567, -0.9184, -0.1709, 0.3539, -0.9182, -0.178, 0.3482, -0.9199, -0.1803,
      0.3407, -0.9217, -0.1856, 0.3352, -0.9223, -0.1922, 0.3328, -0.9218, -0.1989, 0.3343, -0.9197, -0.2061, 0.3361,
      -0.9175, -0.2127, 0.3338, -0.917, -0.2186, 0.3285, -0.9179, -0.2226, 0.3231, -0.9186, -0.2276, 0.3214, -0.9175,
      -0.2344, 0.3176, -0.9175, -0.2394, 0.3127, -0.9182, -0.2433, 0.3075, -0.9189, -0.2473, 0.3058, -0.9176, -0.2539,
      0.3028, -0.9165, -0.2612, 0.2986, -0.9163, -0.267, 0.2933, -0.9163, -0.2729, 0.29, -0.9156, -0.2786, 0.2864,
      -0.915, -0.284, 0.2906, -0.9115, -0.2909, 0.295, -0.9086, -0.2957, 0.2887, -0.9106, -0.2958, 0.2828, -0.9138,
      -0.2916, 0.2766, -0.9167, -0.2885, 0.2708, -0.919, -0.2866, 0.2647, -0.9202, -0.2884, 0.2595, -0.9198, -0.2943,
      0.2529, -0.9197, -0.3004, 0.2488, -0.9193, -0.3051, 0.2417, -0.9193, -0.3107, 0.2368, -0.9191, -0.3149, 0.2291,
      -0.9194, -0.3197, 0.2221, -0.9199, -0.3231, 0.2153, -0.9221, -0.3216, 0.2131, -0.9246, -0.3159, 0.2069, -0.9265,
      -0.3143, 0.1989, -0.928, -0.3149, 0.1906, -0.9297, -0.3152, 0.182, -0.9308, -0.317, 0.1733, -0.9318, -0.3189,
      0.1664, -0.9328, -0.3197, 0.1599, -0.9329, -0.3226, 0.1586, -0.9308, -0.3293, 0.1516, -0.9325, -0.3277, 0.1452,
      -0.9345, -0.325, 0.1386, -0.936, -0.3237, 0.1312, -0.9366, -0.325, 0.1239, -0.9373, -0.3258, 0.1189, -0.9396,
      -0.3208, 0.1112, -0.941, -0.3195, 0.1051, -0.9431, -0.3154, 0.0982, -0.944, -0.315, 0.0919, -0.9439, -0.3172,
      0.0857, -0.9442, -0.3179, 0.0791, -0.9441, -0.32, 0.0721, -0.9446, -0.3203, 0.0654, -0.9454, -0.3194, 0.0589,
      -0.9467, -0.3167, 0.0526, -0.9478, -0.3145, 0.048, -0.9494, -0.3104, 0.0476, -0.9515, -0.3038, 0.0495, -0.9534,
      -0.2976, 0.0505, -0.9558, -0.2898, 0.0513, -0.9575, -0.2837, 0.0523, -0.9596, -0.2765, 0.0581, -0.9604, -0.2727,
      0.0596, -0.9621, -0.2663, 0.0647, -0.9631, -0.2613, 0.0651, -0.9649, -0.2544, 0.0665, -0.9666, -0.2476, 0.0682,
      -0.968, -0.2416, 0.068, -0.9697, -0.2345, 0.0673, -0.9713, -0.2281, 0.0655, -0.9732, -0.2207, 0.0636, -0.9746,
      -0.2146, 0.0596, -0.9761, -0.2088, 0.0571, -0.9775, -0.2029, 0.0539, -0.9788, -0.1976, 0.0469, -0.9793, -0.1969,
      0.0439, -0.9808, -0.1901, 0.0492, -0.9813, -0.186, 0.0531, -0.982, -0.1811, 0.0588, -0.9822, -0.1786, 0.0583,
      -0.984, -0.1685, 0.0561, -0.9854, -0.1607, 0.0552, -0.9865, -0.1542, 0.0544, -0.9875, -0.1477, 0.0491, -0.9884,
      -0.1435, 0.0456, -0.9895, -0.1372, 0.0415, -0.9904, -0.1317, 0.0371, -0.9912, -0.127, 0.0326, -0.9919, -0.1226,
      0.0281, -0.9926, -0.1182, 0.0224, -0.9932, -0.1139, 0.0198, -0.9942, -0.1057, 0.0139, -0.9946, -0.1029, 0.0134,
      -0.9947, -0.1016, 0.0115, -0.9953, -0.0967, 0.0071, -0.9948, -0.1015, 0.0029, -0.9954, -0.0963, 0, -0.9957,
      -0.0921, 0, -1, -0, -0, -1, -0, -0, -0.9957, -0.0921, -1e-4, -0.9958, -0.092, -0.0017, -0.9948, -0.1021, -0.0046,
      -0.9953, -0.0966, -0.0049, -0.9953, -0.0972, -0.007, -0.9947, -0.1026, -0.0073, -0.9947, -0.1024, -0.0075,
      -0.9947, -0.1022, -0.0093, -0.9955, -0.0948, -0.0123, -0.9947, -0.1017, -0.0128, -0.9946, -0.1027, -0.0186,
      -0.9943, -0.1049, -0.0196, -0.9947, -0.1006, -0.02, -0.9949, -0.0984, -0.0212, -0.9955, -0.0922, -0.0246, -0.9959,
      -0.0868, -0.0263, -0.9964, -0.0806, -0.0301, -0.9967, -0.0748, -0.0358, -0.9963, -0.0775, -0.0398, -0.9966,
      -0.0717, -0.04, -0.9971, -0.0653, -0.0458, -0.9967, -0.0676, -0.0519, -0.9963, -0.0691, -0.0571, -0.9955, -0.0755,
      -0.0521, -0.9954, -0.0798, -0.0496, -0.995, -0.0861, -0.0516, -0.9943, -0.0928, -0.0489, -0.9939, -0.0985,
      -0.0527, -0.993, -0.1053, -0.0566, -0.9922, -0.1113, -0.0603, -0.9913, -0.1167, -0.0631, -0.9904, -0.1232,
      -0.0616, -0.9897, -0.1293, -0.0624, -0.9888, -0.1356, -0.0608, -0.988, -0.1422, -0.0664, -0.9881, -0.1386,
      -0.0732, -0.9877, -0.1382, -0.0738, -0.9886, -0.1313, -0.0805, -0.9878, -0.1333, -0.0878, -0.9868, -0.1363,
      -0.0928, -0.9858, -0.1398, -0.0959, -0.9846, -0.1463, -0.095, -0.9837, -0.1524, -0.0936, -0.9828, -0.1592,
      -0.0883, -0.9826, -0.1633, -0.0842, -0.9822, -0.1681, -0.0792, -0.9818, -0.1724, -0.0798, -0.9806, -0.1791,
      -0.0778, -0.9795, -0.1858, -0.0775, -0.9782, -0.1924, -0.0836, -0.9739, -0.2109, -0.0848, -0.9743, -0.2086,
      -0.086, -0.9755, -0.2023, -0.0925, -0.9752, -0.2013, -0.099, -0.9746, -0.2007, -0.0986, -0.9763, -0.1928, -0.1047,
      -0.9759, -0.1914, -0.1109, -0.9751, -0.1921, -0.1175, -0.974, -0.1936, -0.1244, -0.9727, -0.196, -0.1304, -0.9723,
      -0.1941, -0.1338, -0.9707, -0.1994, -0.136, -0.9692, -0.2055, -0.1404, -0.9676, -0.2097, -0.1468, -0.9668, -0.209,
      -0.1457, -0.9683, -0.2029, -0.153, -0.9675, -0.2016, -0.1597, -0.9663, -0.2018, -0.1649, -0.9662, -0.198, -0.1706,
      -0.9658, -0.1953, -0.1779, -0.9647, -0.1941, -0.184, -0.9637, -0.1934, -0.1906, -0.9627, -0.192, -0.1925, -0.963,
      -0.1887, -0.1938, -0.9633, -0.1855, -0.2002, -0.9627, -0.1819, -0.2022, -0.9635, -0.1753, -0.2066, -0.9634,
      -0.1706, -0.2122, -0.9628, -0.1673, -0.2148, -0.9633, -0.1612, -0.2176, -0.9637, -0.1546, -0.2218, -0.9635,
      -0.1497, -0.2253, -0.9636, -0.1438, -0.2286, -0.9637, -0.1378, -0.2324, -0.9635, -0.1326, -0.2391, -0.9621,
      -0.1308, -0.2441, -0.9614, -0.1269, -0.2436, -0.9624, -0.12, -0.2487, -0.9616, -0.1161, -0.2563, -0.9599, -0.1138,
      -0.2527, -0.9614, -0.1088, -0.2479, -0.9631, -0.105, -0.2439, -0.9646, -0.1, -0.2503, -0.9633, -0.0974, -0.2464,
      -0.965, -0.09, -0.2466, -0.9655, -0.0835, -0.2438, -0.9668, -0.0771, -0.2466, -0.9665, -0.0714, -0.251, -0.9657,
      -0.0667, -0.252, -0.9659, -0.0599, -0.2511, -0.9665, -0.0534, -0.2494, -0.9673, -0.0469, -0.2569, -0.9653,
      -0.0458, -0.2619, -0.9638, -0.0498, -0.2673, -0.9621, -0.0532, -0.2673, -0.9618, -0.0595, -0.2728, -0.96, -0.0635,
      -0.2786, -0.9581, -0.066, -0.2903, -0.9543, -0.0707, -0.289, -0.955, -0.0663, -0.2894, -0.9553, -0.0594, -0.2917,
      -0.955, -0.0531, -0.2901, -0.9559, -0.0467, -0.286, -0.9573, -0.0408, -0.2805, -0.9591, -0.0379, -0.2803, -0.9594,
      -0.0311, -0.2833, -0.9587, -0.025, -0.287, -0.9577, -0.0184, -0.2893, -0.9571, -0.0123, -0.2856, -0.9583, -0.0071,
      -0.287, -0.9579, -4e-4, -0.2997, -0.954, 0.004, -0.2921, -0.9564, 0.008, -0.2889, -0.9572, 0.0138, -0.2902,
      -0.9568, 0.0202, -0.2834, -0.9587, 0.0238, -0.2821, -0.9589, 0.0302, -0.2794, -0.9595, 0.036, -0.275, -0.9605,
      0.0412, -0.2806, -0.9587, 0.046, -0.2861, -0.957, 0.0489, -0.2788, -0.9589, 0.0527, -0.279, -0.9584, 0.0597,
      -0.2744, -0.9595, 0.0638, -0.2682, -0.9611, 0.0658, -0.2682, -0.9606, 0.0724, -0.2703, -0.9596, 0.0783, -0.2729,
      -0.9583, 0.0843, -0.2733, -0.9576, 0.0908, -0.2728, -0.957, 0.0982, -0.2727, -0.9564, 0.105, -0.2742, -0.9552,
      0.111, -0.2779, -0.9536, 0.1158, -0.284, -0.9513, 0.1198, -0.2905, -0.9491, 0.1218, -0.2972, -0.9469, 0.1227,
      -0.3039, -0.9447, 0.1233, -0.3106, -0.9424, 0.124, -0.3165, -0.9403, 0.1248, -0.3226, -0.938, 0.1268, -0.3284,
      -0.9356, 0.1297, -0.3329, -0.9333, 0.1347, -0.3382, -0.9307, 0.1395, -0.3437, -0.9282, 0.1429, -0.3506, -0.9253,
      0.1443, -0.3567, -0.9227, 0.146, -0.3622, -0.9197, 0.1519, -0.365, -0.9176, 0.1572, -0.3687, -0.915, 0.1637,
      -0.3712, -0.9128, 0.1702, -0.373, -0.9107, 0.1774, -0.378, -0.9076, 0.1829, -0.3801, -0.9055, 0.1884, -0.3816,
      -0.9037, 0.1944, -0.3791, -0.9032, 0.2012, -0.3812, -0.9009, 0.2077, -0.3813, -0.8994, 0.2139, -0.3798, -0.8985,
      0.2203, -0.3804, -0.8965, 0.2271, -0.3823, -0.8941, 0.2334, -0.3806, -0.8931, 0.2396, -0.3748, -0.8951, 0.2413,
      -0.372, -0.8977, 0.2361, -0.3722, -0.9, 0.2271, 0, 0, 0, 0.6168, -0.7504, 0.2376, 0.6156, -0.754, 0.2292, 0.6177,
      -0.7555, 0.2184, 0.6155, -0.7576, 0.2172, 0.6087, -0.7628, 0.2182, 0.6019, -0.7635, 0.2341, 0.6083, -0.7575,
      0.2369, 0.614, -0.7528, 0.2373, 0.6168, -0.7504, 0.2376, 0, 0, 0, 0.4299, -0.6533, -0.6232, 0.4172, -0.6579,
      -0.627, 0.4121, -0.6561, -0.6323, 0.4046, -0.6535, -0.6397, 0.3974, -0.6544, -0.6433, 0.3895, -0.6699, -0.6321,
      0.3911, -0.6744, -0.6263, 0.3871, -0.6847, -0.6175, 0.3927, -0.6812, -0.6179, 0.3956, -0.6901, -0.6061, 0.3981,
      -0.6894, -0.6052, 0.4048, -0.689, -0.6012, 0.417, -0.6781, -0.6052, 0.4229, -0.6696, -0.6106, 0.4348, -0.6582,
      -0.6146, 0.4376, -0.6522, -0.619, 0.4299, -0.6533, -0.6232, 0, 0, 0, 0.5769, -0.2379, -0.7814, 0.57, -0.2512,
      -0.7823, 0.5622, -0.2448, -0.79, 0.5565, -0.252, -0.7917, 0.5489, -0.2586, -0.7949, 0.5492, -0.266, -0.7922,
      0.5439, -0.2804, -0.7909, 0.5404, -0.2888, -0.7903, 0.5366, -0.2908, -0.7922, 0.5303, -0.3051, -0.791, 0.5301,
      -0.3137, -0.7878, 0.5235, -0.3249, -0.7876, 0.5069, -0.3335, -0.7949, 0.4956, -0.3413, -0.7987, 0.4849, -0.3484,
      -0.8022, 0.486, -0.3524, -0.7998, 0.4759, -0.3626, -0.8012, 0.467, -0.3801, -0.7984, 0.4621, -0.3766, -0.8029,
      0.455, -0.3836, -0.8036, 0.4521, -0.3811, -0.8065, 0.4461, -0.3981, -0.8015, 0.4341, -0.408, -0.8032, 0.4263,
      -0.414, -0.8043, 0.4126, -0.4268, -0.8047, 0.4059, -0.4395, -0.8013, 0.4035, -0.4484, -0.7976, 0.4023, -0.458,
      -0.7927, 0.3926, -0.4712, -0.7898, 0.3901, -0.4847, -0.7828, 0.3907, -0.4918, -0.7781, 0.3908, -0.5053, -0.7694,
      0.3883, -0.5139, -0.765, 0.3879, -0.5246, -0.7578, 0.3899, -0.538, -0.7473, 0.3973, -0.5452, -0.7381, 0.3984,
      -0.5565, -0.7291, 0.4003, -0.5637, -0.7225, 0.3999, -0.5761, -0.7129, 0.4021, -0.5831, -0.7058, 0.4014, -0.5937,
      -0.6974, 0.3994, -0.6033, -0.6903, 0.3971, -0.6077, -0.6877, 0.4021, -0.6125, -0.6805, 0.4151, -0.613, -0.6722,
      0.4235, -0.6187, -0.6617, 0.4265, -0.624, -0.6548, 0.4308, -0.6298, -0.6464, 0.4428, -0.6238, -0.644, 0.4508,
      -0.6214, -0.6408, 0.4523, -0.6142, -0.6467, 0.4572, -0.6168, -0.6407, 0.4623, -0.6267, -0.6273, 0.4735, -0.623,
      -0.6226, 0.4807, -0.6209, -0.6192, 0.4873, -0.6199, -0.615, 0.4996, -0.6159, -0.6091, 0.5107, -0.6074, -0.6085,
      0.5178, -0.5968, -0.6129, 0.5237, -0.5897, -0.6148, 0.5317, -0.584, -0.6134, 0.5427, -0.5823, -0.6053, 0.5425,
      -0.5754, -0.6121, 0.55, -0.5647, -0.6153, 0.5506, -0.5747, -0.6055, 0.5587, -0.5773, -0.5955, 0.5569, -0.5694,
      -0.6047, 0.5592, -0.5611, -0.6103, 0.5583, -0.554, -0.6176, 0.5639, -0.5432, -0.6221, 0.5671, -0.5556, -0.608,
      0.5714, -0.5606, -0.5994, 0.5699, -0.572, -0.5899, 0.5808, -0.5661, -0.585, 0.5841, -0.5584, -0.589, 0.5955,
      -0.5479, -0.5875, 0.6035, -0.5424, -0.5845, 0.6031, -0.539, -0.588, 0.6202, -0.5301, -0.5782, 0.6275, -0.5297,
      -0.5707, 0.6403, -0.5224, -0.5631, 0.6569, -0.5238, -0.5422, 0.6664, -0.5292, -0.5252, 0.6743, -0.5341, -0.51,
      0.6832, -0.5331, -0.4991, 0.6884, -0.5407, -0.4836, 0.6938, -0.544, -0.4719, 0.6912, -0.5517, -0.4667, 0.6909,
      -0.5576, -0.4601, 0.6975, -0.558, -0.4497, 0.7016, -0.5592, -0.4415, 0.7099, -0.5566, -0.4316, 0.7143, -0.5582,
      -0.4221, 0.7189, -0.5588, -0.4133, 0.7186, -0.5665, -0.4033, 0.7211, -0.5659, -0.3998, 0.7221, -0.57, -0.3921,
      0.7225, -0.5745, -0.3846, 0.7277, -0.5739, -0.3755, 0.7321, -0.5739, -0.367, 0.7445, -0.5648, -0.3561, 0.7495,
      -0.562, -0.3499, 0.7544, -0.5537, -0.3526, 0.7525, -0.5518, -0.3596, 0.7534, -0.5484, -0.3628, 0.7567, -0.5432,
      -0.3638, 0.7618, -0.533, -0.3683, 0.7674, -0.5242, -0.3692, 0.7791, -0.5091, -0.3659, 0.7847, -0.5005, -0.3658,
      0.7889, -0.4918, -0.3685, 0.7964, -0.4819, -0.3653, 0.7988, -0.4774, -0.366, 0.8046, -0.4713, -0.3612, 0.8112,
      -0.4592, -0.362, 0.8205, -0.4469, -0.3564, 0.8244, -0.4402, -0.3557, 0.8186, -0.447, -0.3607, 0.8273, -0.4324,
      -0.3587, 0.8221, -0.437, -0.3649, 0.8175, -0.443, -0.368, 0.8212, -0.435, -0.3693, 0.8297, -0.4226, -0.3646,
      0.8325, -0.4176, -0.3641, 0.8359, -0.4129, -0.3616, 0.839, -0.4036, -0.3649, 0.8393, -0.3997, -0.3685, 0.8416,
      -0.3917, -0.3719, 0.8459, -0.3823, -0.372, 0.8475, -0.3707, -0.38, 0.8424, -0.383, -0.379, 0.8437, -0.3718,
      -0.3871, 0.8401, -0.3664, -0.4, 0.8391, -0.3595, -0.4083, 0.8356, -0.3535, -0.4205, 0.8327, -0.3522, -0.4273,
      0.8299, -0.3542, -0.431, 0.8259, -0.3482, -0.4434, 0.8218, -0.3463, -0.4525, 0.8217, -0.3427, -0.4553, 0.8201,
      -0.3412, -0.4593, 0.8155, -0.3416, -0.4671, 0.8083, -0.3368, -0.4829, 0.8059, -0.3295, -0.4919, 0.8063, -0.3207,
      -0.4971, 0.8035, -0.3123, -0.5068, 0.8049, -0.3057, -0.5086, 0.8071, -0.2966, -0.5105, 0.8044, -0.2824, -0.5226,
      0.7969, -0.2969, -0.5261, 0.7938, -0.2935, -0.5326, 0.7991, -0.2856, -0.529, 0.7982, -0.2775, -0.5347, 0.7932,
      -0.2811, -0.5402, 0.795, -0.2684, -0.544, 0.7917, -0.2601, -0.5528, 0.7908, -0.2534, -0.5572, 0.7865, -0.2506,
      -0.5645, 0.7873, -0.2458, -0.5654, 0.7825, -0.2478, -0.5712, 0.7832, -0.2435, -0.572, 0.7793, -0.2411, -0.5784,
      0.7749, -0.2388, -0.5853, 0.7657, -0.2466, -0.594, 0.7579, -0.2566, -0.5998, 0.7513, -0.2567, -0.608, 0.7441,
      -0.2583, -0.6161, 0.7483, -0.249, -0.6149, 0.7457, -0.2355, -0.6233, 0.7416, -0.231, -0.6298, 0.7441, -0.2268,
      -0.6284, 0.741, -0.2171, -0.6355, 0.7352, -0.211, -0.6442, 0.7291, -0.2131, -0.6504, 0.72, -0.2099, -0.6615,
      0.7215, -0.2011, -0.6625, 0.7308, -0.1955, -0.654, 0.7251, -0.193, -0.6611, 0.7168, -0.1973, -0.6688, 0.7095,
      -0.2043, -0.6745, 0.6988, -0.2086, -0.6842, 0.6957, -0.2069, -0.6879, 0.6874, -0.2122, -0.6946, 0.681, -0.2073,
      -0.7023, 0.6762, -0.2088, -0.7065, 0.6738, -0.2055, -0.7098, 0.6668, -0.2139, -0.7139, 0.6687, -0.223, -0.7093,
      0.6723, -0.2299, -0.7037, 0.6764, -0.2305, -0.6995, 0.6739, -0.2372, -0.6997, 0.676, -0.2457, -0.6947, 0.6788,
      -0.254, -0.689, 0.677, -0.2588, -0.689, 0.6657, -0.2681, -0.6964, 0.6552, -0.2735, -0.7042, 0.6477, -0.2792,
      -0.7089, 0.6368, -0.2892, -0.7148, 0.6333, -0.2891, -0.7179, 0.6258, -0.2934, -0.7227, 0.6229, -0.2986, -0.7231,
      0.6096, -0.3042, -0.732, 0.6022, -0.2985, -0.7404, 0.6014, -0.2896, -0.7446, 0.6002, -0.2822, -0.7484, 0.6002,
      -0.273, -0.7518, 0.5985, -0.2596, -0.7579, 0.6017, -0.2514, -0.7581, 0.6015, -0.2465, -0.7599, 0.6045, -0.2368,
      -0.7606, 0.6047, -0.224, -0.7643, 0.6026, -0.2206, -0.767, 0.6055, -0.2149, -0.7663, 0.6034, -0.2058, -0.7704,
      0.6021, -0.1964, -0.7739, 0.6023, -0.1915, -0.7749, 0.598, -0.1851, -0.7798, 0.5932, -0.1935, -0.7814, 0.5909,
      -0.2042, -0.7804, 0.5873, -0.2063, -0.7826, 0.5858, -0.2135, -0.7819, 0.5797, -0.2221, -0.784, 0.5773, -0.2318,
      -0.783, 0.5769, -0.2379, -0.7814, 0, 0, 0, 0.1949, 0.7446, 0.6384, 0.1956, 0.7398, 0.6438, 0.1893, 0.7398, 0.6457,
      0.1923, 0.7372, 0.6477, 0.1908, 0.7296, 0.6567, 0.1892, 0.7276, 0.6594, 0.1792, 0.7273, 0.6625, 0.1741, 0.7246,
      0.6669, 0.1642, 0.7255, 0.6684, 0.1468, 0.7286, 0.669, 0.1433, 0.7327, 0.6653, 0.1322, 0.7307, 0.6698, 0.1313,
      0.7284, 0.6725, 0.1239, 0.7301, 0.672, 0.1178, 0.7304, 0.6728, 0.1121, 0.7326, 0.6714, 0.1134, 0.7355, 0.668,
      0.1125, 0.7376, 0.6658, 0.1159, 0.7382, 0.6645, 0.1224, 0.7349, 0.667, 0.1235, 0.7381, 0.6633, 0.1338, 0.7376,
      0.6619, 0.1415, 0.7397, 0.6579, 0.1471, 0.7393, 0.6571, 0.1513, 0.7369, 0.6589, 0.1519, 0.7389, 0.6565, 0.1484,
      0.7465, 0.6486, 0.152, 0.748, 0.6461, 0.1546, 0.7533, 0.6392, 0.1639, 0.7496, 0.6413, 0.1688, 0.7543, 0.6344,
      0.1725, 0.7552, 0.6325, 0.1821, 0.7517, 0.6339, 0.1871, 0.7523, 0.6317, 0.1929, 0.7501, 0.6326, 0.1925, 0.7486,
      0.6344, 0.1949, 0.7446, 0.6384, 0, 0, 0, 0.5656, 0.6262, 0.5366, 0.5599, 0.6356, 0.5316, 0.5544, 0.6378, 0.5347,
      0.5482, 0.6414, 0.5367, 0.5483, 0.6457, 0.5315, 0.5406, 0.6503, 0.5338, 0.5404, 0.6536, 0.5299, 0.5354, 0.6559,
      0.5321, 0.5314, 0.6593, 0.5319, 0.5323, 0.6615, 0.5283, 0.5415, 0.6577, 0.5236, 0.5469, 0.6569, 0.519, 0.5472,
      0.6584, 0.5168, 0.5382, 0.6655, 0.5171, 0.5394, 0.6673, 0.5136, 0.5422, 0.6669, 0.5112, 0.5534, 0.6589, 0.5094,
      0.5579, 0.6581, 0.5056, 0.5573, 0.6614, 0.502, 0.559, 0.6666, 0.4931, 0.5681, 0.6598, 0.4919, 0.5786, 0.6504,
      0.4921, 0.583, 0.6498, 0.4877, 0.588, 0.6462, 0.4865, 0.5816, 0.6451, 0.4955, 0.5867, 0.6347, 0.5029, 0.5881,
      0.63, 0.5072, 0.5868, 0.6268, 0.5127, 0.5911, 0.6201, 0.5159, 0.5892, 0.6194, 0.5188, 0.5793, 0.6265, 0.5214,
      0.5784, 0.6332, 0.5143, 0.5733, 0.6372, 0.5151, 0.5705, 0.6362, 0.5194, 0.5656, 0.6262, 0.5366, 0, 0, 0, 0.542,
      0.6389, 0.5459, 0.5438, 0.6393, 0.5437, 0.5487, 0.6357, 0.543, 0.5528, 0.6357, 0.5387, 0.554, 0.6336, 0.54,
      0.5624, 0.6258, 0.5404, 0.5549, 0.6276, 0.5461, 0.5465, 0.6339, 0.5474, 0.542, 0.6389, 0.5459, 0, 0, 0, 0.4885,
      -0.0785, 0.869, 0.4882, -0.0575, 0.8708, 0.4846, -0.0495, 0.8733, 0.4938, -0.0509, 0.8681, 0.4986, -0.041, 0.8658,
      0.5066, -0.0421, 0.8611, 0.5073, -0.049, 0.8604, 0.5105, -0.0529, 0.8583, 0.5104, -0.0586, 0.8579, 0.5066,
      -0.0622, 0.8599, 0.5005, -0.0713, 0.8628, 0.4948, -0.0776, 0.8655, 0.4885, -0.0785, 0.869, 0, 0, 0, 0.0442,
      0.7801, 0.6241, 0.054, 0.7823, 0.6205, 0.0614, 0.7776, 0.6258, 0.0678, 0.775, 0.6283, 0.0675, 0.7675, 0.6375,
      0.0646, 0.7671, 0.6383, 0.0642, 0.7607, 0.6459, 0.0538, 0.7659, 0.6407, 0.0481, 0.765, 0.6422, 0.0399, 0.7703,
      0.6365, 0.0344, 0.7747, 0.6314, 0.0293, 0.7749, 0.6314, 0.0275, 0.7788, 0.6267, 0.0361, 0.7809, 0.6236, 0.0361,
      0.7809, 0.6236, 0.0361, 0.7809, 0.6236, 0.0442, 0.7801, 0.6241, 0, 0, 0, 0.0467, 0.109, 0.9929, 0.0324, 0.107,
      0.9937, 0.0281, 0.119, 0.9925, 0.0287, 0.1587, 0.9869, 0.0252, 0.1622, 0.9864, 0.0245, 0.1706, 0.985, 0.0185,
      0.1767, 0.9841, 0.0133, 0.1817, 0.9833, 0.0154, 0.1908, 0.9815, 0.0213, 0.1927, 0.981, 0.0247, 0.2002, 0.9794,
      0.0331, 0.2018, 0.9789, 0.0368, 0.2069, 0.9777, 0.0425, 0.2119, 0.9764, 0.0486, 0.2119, 0.9761, 0.0617, 0.2021,
      0.9774, 0.0611, 0.1964, 0.9786, 0.0651, 0.1863, 0.9803, 0.0618, 0.1794, 0.9818, 0.0636, 0.1747, 0.9826, 0.0554,
      0.1641, 0.9849, 0.0502, 0.1588, 0.986, 0.047, 0.1479, 0.9879, 0.0475, 0.1369, 0.9894, 0.0467, 0.109, 0.9929, 0, 0,
      0, 0.0368, 0.2069, 0.9777, 0.0331, 0.2018, 0.9789, 0.0247, 0.2002, 0.9794, 0.0213, 0.1927, 0.981, 0.0154, 0.1908,
      0.9815, 4e-4, 0.1911, 0.9816, -0.0075, 0.1925, 0.9813, -0.0131, 0.1897, 0.9817, -0.0206, 0.191, 0.9814, -0.0504,
      0.1902, 0.9805, -0.0509, 0.1804, 0.9823, -0.0486, 0.1675, 0.9847, -0.0603, 0.1719, 0.9833, -0.0684, 0.1713,
      0.9828, -0.0744, 0.167, 0.9831, -0.0821, 0.1706, 0.9819, -0.085, 0.1763, 0.9807, -0.0926, 0.18, 0.9793, -0.0936,
      0.19, 0.9773, -0.0888, 0.1972, 0.9763, -0.0891, 0.203, 0.9751, -0.0753, 0.2172, 0.9732, -0.0727, 0.2288, 0.9708,
      -0.0679, 0.233, 0.9701, -0.0598, 0.2307, 0.9712, -0.0526, 0.2341, 0.9708, -0.0503, 0.2385, 0.9698, -0.0371,
      0.2461, 0.9685, -0.0338, 0.2514, 0.9673, -0.018, 0.2584, 0.9659, -0.0087, 0.2608, 0.9654, -0.0045, 0.2575, 0.9663,
      0.0063, 0.2576, 0.9662, 0.005, 0.2494, 0.9684, 0.0073, 0.2417, 0.9703, 0.0169, 0.2307, 0.9729, 0.0174, 0.2224,
      0.9748, 0.0371, 0.2186, 0.9751, 0.0368, 0.2069, 0.9777, 0, 0, 0, 0.9259, 0.3753, -0.0432, 0.9305, 0.3636, -0.0431,
      0.9298, 0.3661, -0.0374, 0.9348, 0.353, -0.0387, 0.9318, 0.3615, -0.0339, 0.9285, 0.3698, -0.0328, 0.9255, 0.3776,
      -0.0296, 0.9218, 0.387, -0.0228, 0.9218, 0.3876, -0.008, 0.9245, 0.381, -0.0095, 0.9282, 0.372, -0.0044, 0.9269,
      0.3752, 0.0025, 0.9281, 0.3723, 0.0048, 0.9274, 0.3741, 0.0094, 0.9267, 0.3755, 0.0157, 0.9211, 0.3888, 0.0181,
      0.9158, 0.4008, 0.0235, 0.9116, 0.4105, 0.0207, 0.9094, 0.4147, 0.0304, 0.9069, 0.4205, 0.0268, 0.9044, 0.4264,
      0.0169, 0.9001, 0.4347, 0.0281, 0.8951, 0.4454, 0.0225, 0.8986, 0.4386, 0.0101, 0.8991, 0.4378, 0.0026, 0.9043,
      0.4269, 0.0013, 0.9052, 0.4247, -0.0138, 0.9048, 0.4249, -0.0284, 0.9057, 0.4222, -0.0376, 0.9121, 0.4088,
      -0.0305, 0.9127, 0.4079, -0.0234, 0.9168, 0.3988, -0.0185, 0.9202, 0.3905, -0.0274, 0.9157, 0.4007, -0.0299,
      0.9155, 0.4008, -0.0343, 0.9259, 0.3753, -0.0432, 0, 0, 0, 0.276, 0.6976, 0.6612, 0.2813, 0.6924, 0.6644, 0.2854,
      0.6934, 0.6617, 0.295, 0.6914, 0.6595, 0.3121, 0.6907, 0.6523, 0.3164, 0.6939, 0.6468, 0.3283, 0.6969, 0.6376,
      0.3384, 0.6923, 0.6373, 0.3456, 0.691, 0.6349, 0.3421, 0.6857, 0.6424, 0.342, 0.6766, 0.6521, 0.3488, 0.6692,
      0.6561, 0.3382, 0.671, 0.6599, 0.328, 0.6669, 0.6691, 0.3304, 0.6604, 0.6743, 0.3202, 0.6591, 0.6805, 0.3101,
      0.6637, 0.6807, 0.3018, 0.6601, 0.6879, 0.2928, 0.6605, 0.6914, 0.289, 0.6691, 0.6847, 0.2815, 0.6733, 0.6837,
      0.2829, 0.6751, 0.6814, 0.281, 0.6766, 0.6806, 0.2816, 0.6807, 0.6763, 0.2846, 0.6847, 0.671, 0.2769, 0.6902,
      0.6686, 0.2742, 0.6948, 0.6649, 0.276, 0.6976, 0.6612, 0, 0, 0, -0.8937, 0.4029, 0.1976, -0.8948, 0.4021, 0.1938,
      -0.8917, 0.4113, 0.189, -0.8909, 0.4159, 0.1827, -0.8856, 0.4259, 0.1852, -0.8849, 0.4253, 0.1899, -0.8897,
      0.4122, 0.1966, -0.8937, 0.4029, 0.1976, 0, 0, 0, -0.8742, 0.4474, 0.1887, -0.8788, 0.4449, 0.1723, -0.8762,
      0.4507, 0.1706, -0.8742, 0.452, 0.1777, -0.8723, 0.4515, 0.1878, -0.8742, 0.4474, 0.1887, 0, 0, 0, -0.8713,
      0.4476, 0.2012, -0.8773, 0.4365, 0.1998, -0.8769, 0.4385, 0.1967, -0.8729, 0.4467, 0.1961, -0.8714, 0.4528,
      0.1886, -0.8705, 0.4546, 0.1884, -0.8713, 0.4476, 0.2012, 0, 0, 0, 0.2351, 0.7054, 0.6687, 0.2339, 0.7, 0.6748,
      0.2411, 0.6951, 0.6772, 0.2413, 0.6892, 0.6832, 0.2387, 0.6887, 0.6847, 0.2368, 0.6875, 0.6865, 0.2338, 0.6845,
      0.6905, 0.2341, 0.6775, 0.6973, 0.2219, 0.6824, 0.6965, 0.2159, 0.6877, 0.6932, 0.2105, 0.6905, 0.6921, 0.2036,
      0.6952, 0.6894, 0.2, 0.6991, 0.6865, 0.1925, 0.7049, 0.6827, 0.1936, 0.71, 0.6771, 0.1987, 0.7072, 0.6786, 0.2005,
      0.7097, 0.6754, 0.2059, 0.71, 0.6734, 0.2166, 0.7079, 0.6722, 0.2247, 0.7081, 0.6694, 0.2308, 0.7054, 0.6702,
      0.2308, 0.7054, 0.6702, 0.2351, 0.7054, 0.6687, 0, 0, 0, 0.2347, 0.8081, 0.5402, 0.2438, 0.808, 0.5363, 0.2517,
      0.8119, 0.5268, 0.2503, 0.8176, 0.5185, 0.2556, 0.8208, 0.5108, 0.2519, 0.8253, 0.5054, 0.2562, 0.8269, 0.5006,
      0.2629, 0.8307, 0.4908, 0.2736, 0.8282, 0.489, 0.2766, 0.8258, 0.4915, 0.2802, 0.827, 0.4874, 0.2903, 0.8246,
      0.4855, 0.2946, 0.82, 0.4908, 0.2947, 0.8173, 0.4952, 0.3049, 0.8106, 0.4999, 0.3099, 0.8088, 0.4999, 0.3107,
      0.8069, 0.5024, 0.3179, 0.8051, 0.5008, 0.3224, 0.8023, 0.5023, 0.3206, 0.8, 0.5071, 0.3132, 0.8004, 0.5112,
      0.3122, 0.7994, 0.5133, 0.3167, 0.7959, 0.516, 0.3236, 0.7891, 0.5221, 0.3236, 0.7891, 0.5221, 0.3161, 0.7885,
      0.5276, 0.3148, 0.7861, 0.5319, 0.3177, 0.7806, 0.5382, 0.3133, 0.7817, 0.5392, 0.3051, 0.7812, 0.5447, 0.3011,
      0.7837, 0.5433, 0.2986, 0.7818, 0.5473, 0.2941, 0.7834, 0.5475, 0.2864, 0.7836, 0.5513, 0.2742, 0.7862, 0.5538,
      0.2639, 0.787, 0.5576, 0.2565, 0.7868, 0.5614, 0.2526, 0.7839, 0.5672, 0.2481, 0.7835, 0.5698, 0.2454, 0.7883,
      0.5643, 0.2399, 0.7932, 0.5597, 0.2446, 0.7954, 0.5546, 0.2424, 0.7996, 0.5495, 0.2376, 0.8035, 0.5458, 0.2347,
      0.8081, 0.5402, 0, 0, 0, -0.952, 0.3058, 0.0142, -0.9512, 0.3083, 0.0141, -0.9509, 0.309, 0.0161, -0.9515, 0.3071,
      0.0191, -0.9481, 0.3171, 0.025, -0.9479, 0.3173, 0.0281, -0.9487, 0.3149, 0.0282, -0.9486, 0.3148, 0.0314,
      -0.9501, 0.3103, 0.0311, -0.9525, 0.3031, 0.0285, -0.9533, 0.3005, 0.03, -0.9552, 0.2946, 0.0283, -0.9557, 0.293,
      0.0294, -0.9583, 0.2845, 0.0275, -0.9597, 0.2801, 0.0243, -0.9599, 0.2796, 0.0212, -0.9616, 0.2737, 0.018,
      -0.9617, 0.2737, 0.0129, -0.9561, 0.2926, 0.0142, -0.952, 0.3058, 0.0142, 0, 0, 0, -0.8223, -0.3786, 0.4247,
      -0.8248, -0.3752, 0.423, -0.8333, -0.3745, 0.4067, -0.8312, -0.3875, 0.3987, -0.8396, -0.3758, 0.3921, -0.8498,
      -0.3719, 0.3735, -0.8496, -0.3865, 0.3588, -0.8532, -0.3887, 0.3477, -0.864, -0.3664, 0.3452, -0.8738, -0.3481,
      0.3397, -0.8772, -0.3322, 0.3466, -0.8826, -0.3253, 0.3394, -0.8872, -0.3133, 0.3388, -0.8935, -0.302, 0.3324,
      -0.8949, -0.284, 0.3442, -0.9013, -0.2699, 0.3389, -0.9014, -0.2643, 0.3431, -0.904, -0.258, 0.3409, -0.9037,
      -0.2496, 0.3478, -0.907, -0.2352, 0.3494, -0.9093, -0.2232, 0.3512, -0.9092, -0.2175, 0.3551, -0.9198, -0.19,
      0.3434, -0.915, -0.1914, 0.3552, -0.9118, -0.1911, 0.3634, -0.9113, -0.1859, 0.3673, -0.9068, -0.1789, 0.3817,
      -0.9043, -0.1725, 0.3905, -0.8956, -0.1696, 0.4112, -0.8943, -0.1824, 0.4086, -0.8923, -0.189, 0.41, -0.8908,
      -0.2005, 0.4078, -0.88, -0.2158, 0.4232, -0.871, -0.2186, 0.44, -0.8666, -0.225, 0.4453, -0.8606, -0.2283, 0.4552,
      -0.8563, -0.2333, 0.4608, -0.8512, -0.2331, 0.4702, -0.8453, -0.2381, 0.4782, -0.8428, -0.2479, 0.4777, -0.8401,
      -0.2528, 0.4799, -0.8383, -0.2601, 0.4791, -0.8407, -0.2604, 0.4748, -0.8327, -0.28, 0.4777, -0.8161, -0.2807,
      0.5052, -0.8149, -0.2903, 0.5016, -0.8123, -0.2969, 0.502, -0.8062, -0.3016, 0.509, -0.8013, -0.3119, 0.5105,
      -0.7992, -0.3249, 0.5057, -0.7995, -0.3322, 0.5005, -0.7958, -0.3415, 0.5001, -0.7974, -0.3449, 0.4951, -0.7992,
      -0.3399, 0.4958, -0.8097, -0.3315, 0.4843, -0.8175, -0.3312, 0.4712, -0.83, -0.336, 0.4453, -0.829, -0.3504,
      0.4359, -0.8262, -0.3592, 0.4339, -0.8223, -0.3786, 0.4247, 0, 0, 0, -0.7298, -0.5033, 0.4627, -0.7286, -0.4826,
      0.4861, -0.7255, -0.4677, 0.5049, -0.7222, -0.4614, 0.5153, -0.7181, -0.4528, 0.5285, -0.7229, -0.4403, 0.5324,
      -0.7311, -0.4313, 0.5287, -0.7345, -0.4343, 0.5215, -0.7362, -0.4252, 0.5265, -0.7385, -0.4158, 0.5308, -0.7417,
      -0.4071, 0.5331, -0.7461, -0.4042, 0.5292, -0.7486, -0.4068, 0.5236, -0.7522, -0.406, 0.5189, -0.7555, -0.3999,
      0.5189, -0.7615, -0.3852, 0.5212, -0.7649, -0.3804, 0.5199, -0.7725, -0.376, 0.5118, -0.775, -0.3792, 0.5056,
      -0.7853, -0.3761, 0.4919, -0.792, -0.354, 0.4974, -0.7974, -0.3449, 0.4951, -0.7958, -0.3415, 0.5001, -0.7995,
      -0.3322, 0.5005, -0.7992, -0.3249, 0.5057, -0.8013, -0.3119, 0.5105, -0.8062, -0.3016, 0.509, -0.8123, -0.2969,
      0.502, -0.8149, -0.2903, 0.5016, -0.8161, -0.2807, 0.5052, -0.8327, -0.28, 0.4777, -0.8407, -0.2604, 0.4748,
      -0.8383, -0.2601, 0.4791, -0.8401, -0.2528, 0.4799, -0.8428, -0.2479, 0.4777, -0.8453, -0.2381, 0.4782, -0.8512,
      -0.2331, 0.4702, -0.8563, -0.2333, 0.4608, -0.8606, -0.2283, 0.4552, -0.8666, -0.225, 0.4453, -0.871, -0.2186,
      0.44, -0.88, -0.2158, 0.4232, -0.8908, -0.2005, 0.4078, -0.8923, -0.189, 0.41, -0.8943, -0.1824, 0.4086, -0.8956,
      -0.1696, 0.4112, -0.9043, -0.1725, 0.3905, -0.9068, -0.1789, 0.3817, -0.9113, -0.1859, 0.3673, -0.9118, -0.1911,
      0.3634, -0.915, -0.1914, 0.3552, -0.9198, -0.19, 0.3434, -0.9226, -0.1929, 0.3341, -0.9256, -0.191, 0.3269,
      -0.9296, -0.1649, 0.3295, -0.9326, -0.175, 0.3156, -0.9374, -0.1746, 0.3012, -0.9409, -0.1654, 0.2955, -0.9444,
      -0.1644, 0.2847, -0.9445, -0.157, 0.2885, -0.9488, -0.1465, 0.2798, -0.9529, -0.1309, 0.2735, -0.9521, -0.1278,
      0.278, -0.9529, -0.1205, 0.2782, -0.9505, -0.1155, 0.2884, -0.952, -0.1061, 0.2871, -0.9513, -0.1, 0.2915,
      -0.9517, -0.0919, 0.2929, -0.9466, -0.0801, 0.3122, -0.9423, -0.0767, 0.3258, -0.9417, -0.0741, 0.328, -0.9364,
      -0.0749, 0.3428, -0.936, -0.0272, 0.351, -0.936, -0.0196, 0.3514, -0.9371, -0.0096, 0.3489, -0.9398, -0.0032,
      0.3417, -0.9397, 0.0094, 0.3417, -0.9363, 0.0123, 0.351, -0.9351, 0.0105, 0.3542, -0.9348, 0.0172, 0.3548,
      -0.9384, 0.019, 0.3452, -0.9382, 0.0299, 0.3449, -0.9259, 0.0295, 0.3766, -0.9235, 0.0355, 0.3818, -0.9219, 0.03,
      0.3864, -0.9208, 0.0197, 0.3896, -0.9194, 0.0219, 0.3926, -0.9158, 0.0126, 0.4015, -0.9102, 0.0138, 0.4139,
      -0.9087, 0.0191, 0.4169, -0.9032, 0.0232, 0.4286, -0.9, 0.0261, 0.4351, -0.8989, 0.0334, 0.4368, -0.8933, 0.0384,
      0.4479, -0.8935, 0.0421, 0.447, -0.9, 0.0436, 0.4337, -0.9006, 0.0545, 0.4313, -0.8996, 0.0662, 0.4316, -0.9027,
      0.0707, 0.4245, -0.9012, 0.0723, 0.4274, -0.8957, 0.0701, 0.439, -0.8898, 0.0658, 0.4516, -0.8873, 0.0699, 0.4559,
      -0.8813, 0.0726, 0.4669, -0.8716, 0.0791, 0.4838, -0.868, 0.0857, 0.4891, -0.8688, 0.0906, 0.4869, -0.8643,
      0.0914, 0.4947, -0.8625, 0.0874, 0.4984, -0.8642, 0.0798, 0.4967, -0.8614, 0.0771, 0.502, -0.8599, 0.069, 0.5058,
      -0.8627, 0.0629, 0.5018, -0.8648, 0.0481, 0.4998, -0.8629, 0.0393, 0.5039, -0.8625, 0.0312, 0.5051, -0.8572,
      0.023, 0.5144, -0.8528, 0.0221, 0.5218, -0.8517, 0.0255, 0.5234, -0.8488, 0.0263, 0.5281, -0.8445, 0.0294, 0.5347,
      -0.8414, 0.034, 0.5394, -0.8362, 0.0325, 0.5475, -0.8338, 0.0331, 0.5511, -0.8286, 0.0317, 0.559, -0.8276, 0.0353,
      0.5602, -0.8291, 0.0388, 0.5577, -0.828, 0.0438, 0.559, -0.8241, 0.0423, 0.5649, -0.8193, 0.044, 0.5716, -0.8137,
      0.0403, 0.5799, -0.8094, 0.0367, 0.5861, -0.806, 0.0415, 0.5904, -0.8038, 0.0407, 0.5936, -0.8025, 0.0358, 0.5956,
      -0.7975, 0.0371, 0.6022, -0.7932, 0.0437, 0.6074, -0.7894, 0.0565, 0.6112, -0.7823, 0.0725, 0.6187, -0.7785,
      0.0733, 0.6233, -0.7763, 0.0637, 0.6271, -0.7713, 0.0332, 0.6356, -0.7654, 0.0303, 0.6428, -0.7653, 0.0183,
      0.6434, -0.7738, 0.0039, 0.6334, -0.7704, -0.0014, 0.6376, -0.7503, -0.0041, 0.661, -0.7498, -0.0216, 0.6614,
      -0.7411, -0.0102, 0.6714, -0.7261, -0.0164, 0.6874, -0.7057, -0.0271, 0.708, -0.6994, -0.0373, 0.7138, -0.7012,
      -0.047, 0.7115, -0.6867, -0.0416, 0.7257, -0.6614, -0.0508, 0.7483, -0.6417, -0.0501, 0.7653, -0.6212, -0.0645,
      0.781, -0.6028, -0.084, 0.7935, -0.5918, -0.0891, 0.8011, -0.5797, -0.0898, 0.8098, -0.5743, -0.0952, 0.8131,
      -0.5681, -0.1173, 0.8145, -0.565, -0.1278, 0.8151, -0.5683, -0.1564, 0.8078, -0.5744, -0.1676, 0.8012, -0.5913,
      -0.1915, 0.7834, -0.5976, -0.2108, 0.7736, -0.6055, -0.2256, 0.7632, -0.6087, -0.2259, 0.7605, -0.6106, -0.2384,
      0.7552, -0.6044, -0.27, 0.7495, -0.6032, -0.2958, 0.7407, -0.6024, -0.3068, 0.7369, -0.6051, -0.3134, 0.7319,
      -0.6025, -0.3354, 0.7242, -0.6101, -0.3568, 0.7074, -0.6079, -0.3736, 0.7006, -0.6158, -0.3806, 0.6899, -0.6159,
      -0.3903, 0.6843, -0.6288, -0.3902, 0.6726, -0.6452, -0.3964, 0.6532, -0.651, -0.4035, 0.643, -0.6619, -0.4082,
      0.6287, -0.6704, -0.4208, 0.6111, -0.6738, -0.4364, 0.5962, -0.671, -0.4481, 0.5907, -0.666, -0.4567, 0.5898,
      -0.6618, -0.4723, 0.5822, -0.661, -0.4798, 0.5769, -0.6645, -0.4882, 0.5658, -0.6634, -0.5148, 0.543, -0.666,
      -0.5266, 0.5283, -0.6688, -0.5335, 0.5177, -0.6658, -0.5475, 0.5069, -0.6671, -0.5558, 0.4959, -0.6739, -0.5476,
      0.4959, -0.6737, -0.5406, 0.5038, -0.6839, -0.5306, 0.5007, -0.6948, -0.5224, 0.4943, -0.7084, -0.5129, 0.485,
      -0.7113, -0.5133, 0.4802, -0.7253, -0.5017, 0.4715, -0.7298, -0.5033, 0.4627, 0, 0, 0, 0.9092, 0.0789, -0.4087,
      0.9059, 0.0854, -0.4148, 0.8989, 0.0949, -0.4278, 0.8999, 0.0864, -0.4274, 0.9012, 0.0753, -0.4269, 0.9047,
      0.0758, -0.4193, 0.9066, 0.0699, -0.4162, 0.9092, 0.0789, -0.4087, 0, 0, 0, 0.8844, 0.466, -0.0262, 0.8868, 0.461,
      -0.0326, 0.8917, 0.4515, -0.0317, 0.8923, 0.451, -0.019, 0.892, 0.4521, -0.0058, 0.8932, 0.4496, 0.004, 0.89,
      0.4555, 0.0181, 0.8884, 0.4586, 0.0184, 0.8826, 0.4701, 0.0081, 0.8805, 0.474, -2e-4, 0.8823, 0.4705, -0.0113,
      0.8824, 0.4701, -0.0194, 0.8844, 0.466, -0.0262, 0, 0, 0, 0.4553, -0.3761, 0.807, 0.4329, -0.388, 0.8137, 0.4178,
      -0.3999, 0.8158, 0.4109, -0.4106, 0.814, 0.4054, -0.4165, 0.8137, 0.3974, -0.4178, 0.817, 0.3934, -0.4254, 0.815,
      0.391, -0.4303, 0.8136, 0.3811, -0.434, 0.8164, 0.3696, -0.4332, 0.822, 0.3636, -0.4288, 0.827, 0.3579, -0.4269,
      0.8305, 0.3501, -0.4305, 0.8319, 0.3452, -0.438, 0.83, 0.3374, -0.4428, 0.8307, 0.3289, -0.4497, 0.8304, 0.3182,
      -0.4513, 0.8337, 0.3159, -0.4458, 0.8375, 0.3189, -0.4363, 0.8414, 0.3126, -0.4213, 0.8513, 0.309, -0.4189,
      0.8538, 0.3159, -0.3722, 0.8728, 0.3309, -0.3716, 0.8674, 0.339, -0.3132, 0.8871, 0.3505, -0.3127, 0.8828, 0.3749,
      -0.3068, 0.8748, 0.3798, -0.3137, 0.8703, 0.3904, -0.3072, 0.8679, 0.395, -0.3071, 0.8658, 0.404, -0.3034, 0.863,
      0.4065, -0.3046, 0.8614, 0.4104, -0.3179, 0.8547, 0.413, -0.3209, 0.8524, 0.4162, -0.3304, 0.8471, 0.4299,
      -0.3484, 0.833, 0.4358, -0.3502, 0.8291, 0.4348, -0.356, 0.8272, 0.4372, -0.3663, 0.8214, 0.4477, -0.3688, 0.8146,
      0.4553, -0.3761, 0.807, 0, 0, 0, 0.2613, 0.1292, 0.9566, 0.275, 0.1305, 0.9525, 0.2779, 0.1349, 0.9511, 0.2807,
      0.1346, 0.9503, 0.285, 0.1307, 0.9496, 0.3055, 0.1373, 0.9422, 0.3122, 0.144, 0.939, 0.3204, 0.1501, 0.9353,
      0.3185, 0.1561, 0.935, 0.323, 0.1577, 0.9332, 0.3388, 0.1567, 0.9277, 0.3535, 0.1646, 0.9208, 0.3639, 0.1834,
      0.9132, 0.3714, 0.1903, 0.9087, 0.3812, 0.1932, 0.9041, 0.3836, 0.1859, 0.9046, 0.3934, 0.1752, 0.9025, 0.394,
      0.1682, 0.9036, 0.3919, 0.161, 0.9058, 0.3932, 0.1556, 0.9062, 0.399, 0.1507, 0.9045, 0.4115, 0.1431, 0.9001,
      0.4205, 0.1361, 0.897, 0.4209, 0.1305, 0.8976, 0.432, 0.1215, 0.8937, 0.4388, 0.114, 0.8913, 0.4433, 0.1036,
      0.8904, 0.4552, 0.0967, 0.8851, 0.4579, 0.0912, 0.8843, 0.4529, 0.0894, 0.8871, 0.4429, 0.0898, 0.8921, 0.4311,
      0.0916, 0.8977, 0.4253, 0.0901, 0.9006, 0.4231, 0.0859, 0.902, 0.418, 0.0854, 0.9044, 0.4116, 0.089, 0.907,
      0.3942, 0.0804, 0.9155, 0.3869, 0.0821, 0.9185, 0.3847, 0.0808, 0.9195, 0.3802, 0.0703, 0.9222, 0.3681, 0.0737,
      0.9269, 0.3562, 0.0754, 0.9314, 0.3456, 0.0818, 0.9348, 0.332, 0.0877, 0.9392, 0.3234, 0.0821, 0.9427, 0.3172,
      0.0733, 0.9455, 0.3159, 0.0611, 0.9468, 0.3053, 0.0621, 0.9502, 0.294, 0.065, 0.9536, 0.2842, 0.0558, 0.9571,
      0.2756, 0.0396, 0.9604, 0.2738, 0.0446, 0.9607, 0.273, 0.0526, 0.9606, 0.2652, 0.0582, 0.9624, 0.2588, 0.0672,
      0.9636, 0.2573, 0.0734, 0.9635, 0.2492, 0.0825, 0.9649, 0.2504, 0.0877, 0.9642, 0.2486, 0.095, 0.9639, 0.2495,
      0.1085, 0.9623, 0.2535, 0.1116, 0.9609, 0.2613, 0.1292, 0.9566, 0, 0, 0, -0.6163, 0.726, 0.3051, -0.6139, 0.7244,
      0.3136, -0.6085, 0.7247, 0.3234, -0.6158, 0.7197, 0.3205, -0.6186, 0.719, 0.3169, -0.6207, 0.7241, 0.3008,
      -0.6181, 0.7281, 0.2963, -0.6126, 0.7318, 0.2986, -0.6163, 0.726, 0.3051, 0, 0, 0, -0.577, 0.7559, 0.3093,
      -0.5798, 0.7557, 0.3045, -0.5828, 0.7593, 0.2895, -0.5818, 0.7646, 0.2773, -0.5791, 0.7656, 0.2803, -0.5755,
      0.7627, 0.295, -0.575, 0.758, 0.3079, -0.577, 0.7559, 0.3093, 0, 0, 0, -0.5524, 0.7491, -0.3657, -0.5507, 0.7475,
      -0.3716, -0.5349, 0.7527, -0.3838, -0.5291, 0.7568, -0.3838, -0.5194, 0.7607, -0.3892, -0.5151, 0.764, -0.3886,
      -0.5062, 0.766, -0.3963, -0.4978, 0.7721, -0.3952, -0.4959, 0.7746, -0.3925, -0.5054, 0.7722, -0.3851, -0.5111,
      0.7705, -0.3809, -0.5184, 0.7693, -0.3733, -0.5244, 0.7655, -0.3729, -0.5328, 0.7601, -0.372, -0.5437, 0.7554,
      -0.3657, -0.5524, 0.7491, -0.3657, 0, 0, 0, -0.5261, 0.7737, 0.3531, -0.5399, 0.7639, 0.3534, -0.5321, 0.7677,
      0.357, -0.5303, 0.7653, 0.3648, -0.5363, 0.7614, 0.3642, -0.5336, 0.7583, 0.3745, -0.5279, 0.761, 0.3769, -0.5246,
      0.7576, 0.3885, -0.5344, 0.7491, 0.3913, -0.5278, 0.7511, 0.3965, -0.5325, 0.745, 0.4018, -0.5367, 0.7377, 0.4096,
      -0.5487, 0.7272, 0.4124, -0.5523, 0.7268, 0.4084, -0.555, 0.7291, 0.4006, -0.545, 0.7388, 0.3965, -0.5456, 0.7402,
      0.3929, -0.5626, 0.73, 0.3881, -0.5662, 0.7304, 0.382, -0.5565, 0.736, 0.3855, -0.5603, 0.7388, 0.3744, -0.5679,
      0.7381, 0.3642, -0.5796, 0.7385, 0.3446, -0.5772, 0.742, 0.3411, -0.5695, 0.7461, 0.345, -0.5691, 0.7492, 0.3388,
      -0.5573, 0.7561, 0.343, -0.5331, 0.774, 0.3415, -0.523, 0.7803, 0.343, -0.5138, 0.784, 0.3483, -0.5115, 0.7836,
      0.3527, -0.5157, 0.7806, 0.3531, -0.5261, 0.7737, 0.3531, 0, 0, 0, -0.4269, 0.8108, -0.4006, -0.4315, 0.8094,
      -0.3983, -0.4373, 0.8102, -0.3903, -0.447, 0.7985, -0.4032, -0.4615, 0.7899, -0.4037, -0.4587, 0.79, -0.4069,
      -0.4497, 0.7948, -0.4075, -0.4423, 0.7997, -0.406, -0.4355, 0.8029, -0.4069, -0.4297, 0.8075, -0.4041, -0.4269,
      0.8108, -0.4006, 0, 0, 0, -0.4589, 0.8842, 0.087, -0.4674, 0.8799, 0.0853, -0.4668, 0.8806, 0.0815, -0.4626,
      0.8831, 0.0786, -0.4615, 0.8836, 0.0788, -0.4564, 0.8861, 0.0811, -0.4561, 0.8859, 0.0844, -0.4589, 0.8842, 0.087,
      0, 0, 0, -0.4539, 0.8887, 0.0646, -0.4636, 0.8842, 0.0564, -0.4639, 0.8844, 0.0506, -0.4599, 0.8866, 0.0484,
      -0.4522, 0.8903, 0.0535, -0.4509, 0.8902, 0.0644, -0.4539, 0.8887, 0.0646, 0, 0, 0, -0.4107, 0.9111, 0.0348,
      -0.4176, 0.9079, 0.0367, -0.4148, 0.909, 0.0402, -0.4185, 0.9071, 0.0449, -0.4229, 0.9046, 0.0535, -0.4266,
      0.9022, 0.0627, -0.4339, 0.8986, 0.0644, -0.4319, 0.8992, 0.0698, -0.4361, 0.8967, 0.0761, -0.4421, 0.8942,
      0.0701, -0.4401, 0.8961, 0.0576, -0.4336, 0.8996, 0.0524, -0.4428, 0.8955, 0.0458, -0.4518, 0.8914, 0.0354,
      -0.4429, 0.896, 0.032, -0.445, 0.8953, 0.0216, -0.4369, 0.8991, 0.0279, -0.4245, 0.905, 0.028, -0.4098, 0.9117,
      0.0295, -0.4107, 0.9111, 0.0348, 0, 0, 0, -0.3766, 0.9215, 0.0948, -0.3792, 0.9212, 0.0876, -0.3718, 0.9245,
      0.0842, -0.3624, 0.9282, 0.0849, -0.3588, 0.9291, 0.0902, -0.3619, 0.9273, 0.0962, -0.3685, 0.9244, 0.098,
      -0.3709, 0.9235, 0.0979, -0.3766, 0.9215, 0.0948, 0, 0, 0, -0.3549, 0.9343, -0.0351, -0.3602, 0.9321, -0.0396,
      -0.3542, 0.934, -0.0474, -0.3553, 0.9333, -0.0527, -0.3467, 0.9361, -0.0599, -0.3426, 0.9379, -0.0538, -0.3362,
      0.9405, -0.0486, -0.3416, 0.9389, -0.0429, -0.345, 0.9378, -0.0397, -0.3483, 0.9366, -0.0382, -0.3549, 0.9343,
      -0.0351, 0, 0, 0, -0.6292, 0.7356, 0.2512, -0.6341, 0.7336, 0.2446, -0.6323, 0.7367, 0.2397, -0.6445, 0.7277,
      0.2346, -0.655, 0.7183, 0.2345, -0.6618, 0.7128, 0.2323, -0.6653, 0.7109, 0.228, -0.6672, 0.7102, 0.2245, -0.6705,
      0.7072, 0.2243, -0.6774, 0.7072, 0.2026, -0.6826, 0.7071, 0.1846, -0.6862, 0.7048, 0.1798, -0.698, 0.6959, 0.1692,
      -0.6992, 0.6949, 0.1679, -0.7048, 0.69, 0.165, -0.7073, 0.69, 0.1537, -0.7099, 0.6899, 0.1416, -0.7129, 0.6879,
      0.1363, -0.7148, 0.6854, 0.1388, -0.7181, 0.6816, 0.1406, -0.7194, 0.6803, 0.1406, -0.7282, 0.6739, 0.1252,
      -0.7321, 0.6718, 0.1123, -0.7404, 0.6649, 0.0983, -0.7409, 0.6649, 0.095, -0.7396, 0.667, 0.0904, -0.7381, 0.6688,
      0.0888, -0.7369, 0.6702, 0.0889, -0.7324, 0.6747, 0.0912, -0.7252, 0.6817, 0.0964, -0.7177, 0.6893, 0.0991,
      -0.7076, 0.7002, 0.0952, -0.6969, 0.7114, 0.0911, -0.6926, 0.7171, 0.0778, -0.6902, 0.7193, 0.079, -0.6889,
      0.7208, 0.0771, -0.6893, 0.7208, 0.0738, -0.6875, 0.7227, 0.0711, -0.6846, 0.7255, 0.0702, -0.6861, 0.7243, 0.068,
      -0.6861, 0.7246, 0.0648, -0.6847, 0.7258, 0.0654, -0.6838, 0.727, 0.0625, -0.6805, 0.7302, 0.061, -0.6772, 0.734,
      0.0515, -0.6736, 0.7379, 0.0416, -0.6692, 0.7424, 0.0299, -0.6649, 0.7467, 0.0188, -0.6688, 0.7434, 0.0085,
      -0.669, 0.7433, 0.0047, -0.6656, 0.7463, -0.0096, -0.667, 0.7448, -0.0191, -0.6626, 0.7484, -0.0302, -0.6599,
      0.7502, -0.0419, -0.6585, 0.7509, -0.0498, -0.656, 0.7529, -0.0532, -0.6486, 0.7591, -0.0547, -0.6483, 0.7591,
      -0.0585, -0.6534, 0.7547, -0.059, -0.6508, 0.7547, -0.0826, -0.6448, 0.7547, -0.1212, -0.6364, 0.7547, -0.1593,
      -0.6272, 0.7547, -0.1924, -0.6163, 0.7547, -0.2249, -0.6039, 0.7547, -0.2563, -0.5894, 0.7547, -0.2881, -0.5844,
      0.7547, -0.2982, -0.5682, 0.7547, -0.328, -0.5512, 0.7547, -0.3558, -0.5504, 0.7547, -0.357, -0.5273, 0.7659,
      -0.368, -0.5179, 0.7707, -0.3712, -0.5015, 0.7753, -0.3839, -0.4883, 0.7849, -0.3814, -0.4825, 0.7915, -0.375,
      -0.4695, 0.7961, -0.3819, -0.4596, 0.8045, -0.3762, -0.4438, 0.812, -0.3792, -0.4381, 0.8172, -0.3746, -0.4381,
      0.8172, -0.3746, -0.4364, 0.822, -0.3659, -0.4293, 0.8282, -0.3603, -0.4115, 0.8344, -0.3667, -0.3926, 0.8452,
      -0.3627, -0.3809, 0.8518, -0.3596, -0.3703, 0.8559, -0.361, -0.3617, 0.8596, -0.361, -0.3529, 0.8642, -0.3588,
      -0.3499, 0.8613, -0.3684, -0.3492, 0.8563, -0.3805, -0.3367, 0.8622, -0.3785, -0.3278, 0.866, -0.3776, -0.3186,
      0.8684, -0.3799, -0.3118, 0.8687, -0.385, -0.256, 0.9135, -0.3161, -0.2183, 0.938, -0.2694, -0.2183, 0.938,
      -0.2694, -0.2295, 0.9365, -0.2651, -0.242, 0.9335, -0.2645, -0.2478, 0.9329, -0.2612, -0.247, 0.9355, -0.2525,
      -0.2487, 0.9374, -0.2436, -0.2564, 0.9367, -0.2385, -0.2571, 0.9394, -0.2269, -0.2603, 0.9408, -0.2169, -0.2682,
      0.9384, -0.218, -0.268, 0.9398, -0.2121, -0.2628, 0.9425, -0.2063, -0.2666, 0.9419, -0.2042, -0.2845, 0.9366,
      -0.2048, -0.28, 0.9406, -0.1919, -0.2907, 0.9361, -0.1982, -0.2926, 0.9371, -0.1905, -0.2899, 0.9388, -0.186,
      -0.2945, 0.9385, -0.1803, -0.3052, 0.9359, -0.1758, -0.3174, 0.9337, -0.166, -0.3238, 0.9326, -0.1595, -0.3255,
      0.933, -0.1535, -0.3366, 0.9298, -0.1491, -0.3401, 0.9265, -0.1608, -0.3482, 0.9251, -0.1514, -0.3531, 0.9259,
      -0.1341, -0.3524, 0.9271, -0.1279, -0.3639, 0.9231, -0.1245, -0.3584, 0.9264, -0.115, -0.3498, 0.9292, -0.1192,
      -0.3459, 0.9314, -0.1135, -0.3475, 0.9317, -0.1059, -0.3474, 0.9323, -0.1006, -0.3525, 0.9308, -0.0967, -0.3627,
      0.9273, -0.0927, -0.3631, 0.9278, -0.0853, -0.3727, 0.9249, -0.0755, -0.3721, 0.9259, -0.065, -0.374, 0.9257,
      -0.0555, -0.364, 0.9298, -0.0548, -0.362, 0.9309, -0.0487, -0.3686, 0.9287, -0.0395, -0.3838, 0.9225, -0.0412,
      -0.3714, 0.9278, -0.0357, -0.3723, 0.9276, -0.0305, -0.3563, 0.934, -0.0264, -0.3457, 0.9378, -0.0321, -0.3384,
      0.9402, -0.0384, -0.3203, 0.9466, -0.0359, -0.3091, 0.9506, -0.0282, -0.3123, 0.9498, -0.0212, -0.3199, 0.9473,
      -0.0161, -0.3388, 0.9408, -0.009, -0.3466, 0.9379, -0.0146, -0.3502, 0.9367, -0.0033, -0.3669, 0.9303, -0.0035,
      -0.3541, 0.9352, 0.0049, -0.3644, 0.9312, 0.0126, -0.3765, 0.9264, 0.0111, -0.3871, 0.9219, 0.0179, -0.3751,
      0.9267, 0.0242, -0.3608, 0.9322, 0.0279, -0.3429, 0.939, 0.0269, -0.3434, 0.9385, 0.0355, -0.3447, 0.9376, 0.0446,
      -0.3516, 0.9346, 0.0539, -0.3595, 0.9315, 0.0555, -0.3688, 0.928, 0.0521, -0.3767, 0.9245, 0.0579, -0.3846,
      0.9213, 0.0583, -0.3975, 0.9164, 0.0464, -0.4009, 0.9154, 0.0369, -0.3967, 0.9175, 0.0293, -0.4049, 0.9139,
      0.0278, -0.4187, 0.9079, 0.0217, -0.4257, 0.9046, 0.0199, -0.4367, 0.8995, 0.0116, -0.4379, 0.899, 7e-4, -0.4444,
      0.8958, -0.0055, -0.4546, 0.8907, -0.0061, -0.4563, 0.8897, -0.0154, -0.4684, 0.8831, -0.0258, -0.485, 0.8738,
      -0.036, -0.4967, 0.867, -0.0402, -0.5141, 0.8567, -0.0421, -0.5175, 0.8552, -0.0291, -0.5316, 0.8466, -0.0257,
      -0.5429, 0.8395, -0.0218, -0.5404, 0.8414, -0.0085, -0.5467, 0.8373, 0.0092, -0.552, 0.8336, 0.0189, -0.5586,
      0.829, 0.0261, -0.5619, 0.8263, 0.0386, -0.5671, 0.8222, 0.0495, -0.5662, 0.8216, 0.0659, -0.5663, 0.8206, 0.0768,
      -0.5787, 0.8119, 0.0768, -0.5923, 0.8015, 0.0819, -0.6066, 0.7897, 0.0917, -0.6168, 0.7794, 0.1097, -0.6109,
      0.783, 0.1172, -0.5959, 0.794, 0.1201, -0.5753, 0.8105, 0.1105, -0.5692, 0.8158, 0.1021, -0.5596, 0.8205, 0.1166,
      -0.5474, 0.8274, 0.1254, -0.5363, 0.8342, 0.1283, -0.527, 0.8406, 0.1253, -0.5162, 0.8485, 0.1163, -0.5076,
      0.8554, 0.1031, -0.49, 0.8647, 0.1101, -0.4774, 0.8726, 0.1035, -0.4546, 0.8856, 0.0957, -0.4499, 0.8874, 0.1005,
      -0.4508, 0.8852, 0.1149, -0.4501, 0.8844, 0.1234, -0.4443, 0.8866, 0.1288, -0.4472, 0.8838, 0.1375, -0.4526,
      0.879, 0.1499, -0.4574, 0.8758, 0.1542, -0.4535, 0.8751, 0.1687, -0.4656, 0.8679, 0.173, -0.4823, 0.8568, 0.1824,
      -0.4815, 0.8554, 0.1909, -0.4872, 0.85, 0.2003, -0.4744, 0.8551, 0.2092, -0.4558, 0.8649, 0.2102, -0.447, 0.8689,
      0.2124, -0.4562, 0.8611, 0.2244, -0.4679, 0.8496, 0.2435, -0.4786, 0.8384, 0.261, -0.4885, 0.8323, 0.2619,
      -0.4894, 0.8268, 0.2772, -0.492, 0.8212, 0.289, -0.4869, 0.8186, 0.3046, -0.4873, 0.8154, 0.3125, -0.4952, 0.8068,
      0.3224, -0.4923, 0.8054, 0.3301, -0.4944, 0.8015, 0.3365, -0.5068, 0.7896, 0.346, -0.5155, 0.7855, 0.3424,
      -0.5238, 0.7817, 0.3385, -0.5374, 0.7779, 0.3258, -0.554, 0.7688, 0.3194, -0.5651, 0.7669, 0.304, -0.5736, 0.7693,
      0.2814, -0.5806, 0.7694, 0.2663, -0.5862, 0.7686, 0.2561, -0.5987, 0.7605, 0.2512, -0.6096, 0.7555, 0.24, -0.6317,
      0.7402, 0.2305, -0.6474, 0.7292, 0.2216, -0.6421, 0.7312, 0.2305, -0.6196, 0.7466, 0.2422, -0.6003, 0.7562,
      0.2604, -0.5921, 0.7574, 0.2754, -0.5936, 0.7518, 0.2873, -0.6062, 0.744, 0.2812, -0.6172, 0.7313, 0.2904,
      -0.6241, 0.7222, 0.2981, -0.6228, 0.7162, 0.315, -0.6119, 0.7179, 0.3319, -0.5936, 0.7314, 0.3356, -0.6012,
      0.7228, 0.3409, -0.6013, 0.7184, 0.3499, -0.6158, 0.7104, 0.3408, -0.6351, 0.703, 0.32, -0.645, 0.698, 0.3112,
      -0.6589, 0.6889, 0.3021, -0.662, 0.6899, 0.293, -0.6528, 0.7005, 0.2884, -0.6346, 0.7107, 0.3037, -0.6432, 0.7103,
      0.286, -0.65, 0.7088, 0.2741, -0.6466, 0.7157, 0.264, -0.6306, 0.7321, 0.2575, -0.6292, 0.7356, 0.2512, 0, 0, 0,
      -0.2649, 0.9569, -0.1189, -0.271, 0.9545, -0.1244, -0.2709, 0.9561, -0.1119, -0.2814, 0.9535, -0.1083, -0.2755,
      0.9561, -0.0998, -0.2822, 0.9544, -0.0972, -0.2991, 0.9492, -0.0983, -0.2934, 0.9514, -0.0935, -0.276, 0.9568,
      -0.0918, -0.2751, 0.9575, -0.0868, -0.2791, 0.9567, -0.0828, -0.2871, 0.9546, -0.0791, -0.3036, 0.9494, -0.0801,
      -0.3154, 0.9455, -0.0814, -0.3256, 0.9426, -0.0739, -0.3354, 0.9398, -0.0651, -0.3423, 0.9372, -0.0671, -0.3415,
      0.9367, -0.0772, -0.3485, 0.9343, -0.0747, -0.3539, 0.932, -0.078, -0.3488, 0.933, -0.0885, -0.3417, 0.9347,
      -0.0977, -0.3406, 0.9343, -0.1049, -0.3422, 0.9322, -0.1178, -0.339, 0.9312, -0.1338, -0.336, 0.9306, -0.1448,
      -0.3276, 0.9336, -0.1449, -0.3201, 0.9353, -0.1508, -0.3193, 0.9346, -0.1565, -0.3044, 0.9395, -0.1574, -0.3046,
      0.9401, -0.1531, -0.3061, 0.9411, -0.1436, -0.3102, 0.9408, -0.1363, -0.3106, 0.9419, -0.1281, -0.3026, 0.9432,
      -0.137, -0.2985, 0.9428, -0.1487, -0.2944, 0.9429, -0.1559, -0.2876, 0.945, -0.1557, -0.2878, 0.9473, -0.141,
      -0.2841, 0.9472, -0.1489, -0.2756, 0.9486, -0.1553, -0.2669, 0.9527, -0.1453, -0.2628, 0.9548, -0.139, -0.2598,
      0.9579, -0.1222, -0.2649, 0.9569, -0.1189, 0, 0, 0, -0.2763, 0.9584, -0.0714, -0.2858, 0.9551, -0.0786, -0.2723,
      0.9586, -0.0829, -0.2706, 0.9593, -0.0807, -0.2717, 0.9595, -0.0741, -0.2763, 0.9584, -0.0714, 0, 0, 0, -0.2824,
      0.9568, 0.0686, -0.2868, 0.9554, 0.0702, -0.2876, 0.9556, 0.0647, -0.2884, 0.9557, 0.0592, -0.2917, 0.955, 0.0541,
      -0.291, 0.9553, 0.0525, -0.2832, 0.958, 0.0455, -0.2772, 0.9598, 0.0447, -0.2757, 0.9601, 0.0469, -0.2754, 0.9596,
      0.0582, -0.2824, 0.9568, 0.0686, 0, 0, 0, -0.2892, 0.9571, 0.0174, -0.2993, 0.9539, 0.0221, -0.2855, 0.958,
      0.0257, -0.2773, 0.9601, 0.0374, -0.2931, 0.9548, 0.0485, -0.304, 0.9514, 0.0495, -0.2974, 0.9529, 0.059, -0.2899,
      0.955, 0.0625, -0.2954, 0.9524, 0.0758, -0.3011, 0.9498, 0.085, -0.3079, 0.9474, 0.0877, -0.3013, 0.9486, 0.0965,
      -0.3094, 0.9451, 0.1053, -0.3108, 0.9428, 0.1206, -0.3151, 0.9404, 0.1278, -0.327, 0.9347, 0.139, -0.3384, 0.9318,
      0.1312, -0.3424, 0.9276, 0.1492, -0.3414, 0.9262, 0.1602, -0.3505, 0.92, 0.1753, -0.3465, 0.9196, 0.1854, -0.3574,
      0.9147, 0.1887, -0.3796, 0.9063, 0.1858, -0.3774, 0.9094, 0.1748, -0.3679, 0.9163, 0.1583, -0.3733, 0.9154,
      0.1507, -0.3821, 0.9113, 0.1533, -0.3877, 0.9071, 0.1639, -0.3903, 0.9037, 0.176, -0.3929, 0.9017, 0.1805,
      -0.4048, 0.8941, 0.1916, -0.4161, 0.8884, 0.1939, -0.4164, 0.8906, 0.183, -0.4124, 0.8968, 0.1601, -0.4207,
      0.8901, 0.1754, -0.426, 0.8852, 0.1868, -0.4304, 0.8824, 0.1901, -0.4332, 0.8856, 0.1673, -0.4306, 0.8903, 0.1481,
      -0.4264, 0.8941, 0.1366, -0.4214, 0.8963, 0.1378, -0.4171, 0.9003, 0.1245, -0.4128, 0.9039, 0.1119, -0.4172,
      0.9018, 0.1132, -0.4248, 0.9005, 0.0925, -0.4208, 0.9031, 0.0852, -0.4084, 0.9086, 0.0876, -0.4051, 0.9087,
      0.1009, -0.3992, 0.9096, 0.1148, -0.3944, 0.9122, 0.1109, -0.3861, 0.9157, 0.1111, -0.3686, 0.9224, 0.1151,
      -0.3623, 0.9254, 0.1113, -0.3578, 0.9276, 0.1073, -0.3529, 0.9308, 0.0956, -0.3507, 0.9329, 0.0818, -0.3457,
      0.9345, 0.0847, -0.3373, 0.9383, 0.0761, -0.3375, 0.9387, 0.0707, -0.333, 0.9407, 0.065, -0.3384, 0.9389, 0.0628,
      -0.3422, 0.9382, 0.0523, -0.3412, 0.9395, 0.0302, -0.3373, 0.9412, 0.0173, -0.3352, 0.9421, 0.0077, -0.3295,
      0.9442, 0.0028, -0.3219, 0.9468, 0.0086, -0.3219, 0.9468, 6e-4, -0.3051, 0.9523, -0.0011, -0.2902, 0.957, 0.0029,
      -0.2833, 0.959, 0.0079, -0.2782, 0.9603, 0.0203, -0.2892, 0.9571, 0.0174, 0, 0, 0, -0.2737, 0.9605, -0.05,
      -0.2782, 0.9595, -0.0449, -0.2773, 0.9601, -0.0359, -0.2823, 0.9587, -0.0353, -0.2896, 0.9563, -0.041, -0.2978,
      0.954, -0.0341, -0.3125, 0.9492, -0.0368, -0.3177, 0.9471, -0.0467, -0.3155, 0.9475, -0.0518, -0.3086, 0.9496,
      -0.0545, -0.2934, 0.9538, -0.065, -0.2882, 0.9554, -0.0638, -0.2924, 0.9548, -0.0539, -0.2806, 0.9581, -0.0573,
      -0.2737, 0.9605, -0.05, 0, 0, 0, -0.2957, 0.9551, -0.0165, -0.3078, 0.9512, -0.023, -0.3066, 0.9514, -0.029,
      -0.2917, 0.956, -0.0308, -0.2835, 0.9585, -0.0299, -0.2767, 0.9606, -0.0266, -0.2725, 0.9619, -0.0215, -0.2737,
      0.9617, -0.0116, -0.278, 0.9606, -0.0025, -0.2928, 0.9561, -0.0102, -0.2957, 0.9551, -0.0165, 0, 0, 0, -0.2752,
      0.9477, -0.1618, -0.2741, 0.945, -0.1786, -0.2664, 0.9474, -0.1772, -0.252, 0.9503, -0.1826, -0.2476, 0.9526,
      -0.1766, -0.2398, 0.9564, -0.1667, -0.2331, 0.9597, -0.1569, -0.222, 0.9627, -0.155, -0.2285, 0.9634, -0.1402,
      -0.2349, 0.9624, -0.1362, -0.2416, 0.9622, -0.1261, -0.2481, 0.9608, -0.1241, -0.2567, 0.9587, -0.1225, -0.2577,
      0.9574, -0.13, -0.2622, 0.9538, -0.1466, -0.2689, 0.9501, -0.1582, -0.2752, 0.9477, -0.1618, 0, 0, 0, -0.2586,
      0.9658, -0.0163, -0.265, 0.9641, -0.0193, -0.2632, 0.9644, -0.0258, -0.2582, 0.9656, -0.0309, -0.2509, 0.9676,
      -0.0277, -0.247, 0.9688, -0.021, -0.2532, 0.9673, -0.0176, -0.2586, 0.9658, -0.0163, 0, 0, 0, -0.2272, 0.9733,
      -0.034, -0.2354, 0.9714, -0.032, -0.244, 0.9692, -0.033, -0.2562, 0.9659, -0.0367, -0.2567, 0.9655, -0.0444,
      -0.2532, 0.9662, -0.0487, -0.2436, 0.9688, -0.0467, -0.2434, 0.9684, -0.054, -0.2306, 0.9717, -0.0514, -0.232,
      0.9716, -0.0472, -0.2275, 0.973, -0.04, -0.2293, 0.9727, -0.0346, -0.2272, 0.9733, -0.034, 0, 0, 0, -0.2266,
      0.9711, -0.0745, -0.2328, 0.9696, -0.0748, -0.2312, 0.9703, -0.0704, -0.2332, 0.9702, -0.0663, -0.2414, 0.9681,
      -0.0679, -0.2483, 0.9659, -0.0727, -0.2461, 0.9652, -0.0881, -0.2487, 0.9632, -0.1016, -0.2462, 0.9631, -0.1083,
      -0.241, 0.9647, -0.1066, -0.2378, 0.9667, -0.0951, -0.2313, 0.9661, -0.1144, -0.2258, 0.9669, -0.1186, -0.2138,
      0.9711, -0.1059, -0.2112, 0.9723, -0.1003, -0.2211, 0.9709, -0.092, -0.2333, 0.9684, -0.0887, -0.2371, 0.968,
      -0.0819, -0.2198, 0.9721, -0.0822, -0.2152, 0.9736, -0.0766, -0.2184, 0.9731, -0.0733, -0.2266, 0.9711, -0.0745,
      0, 0, 0, -0.2225, 0.9748, -0.0182, -0.2283, 0.9735, -0.0143, -0.2286, 0.9735, -0.0064, -0.2343, 0.9722, -0.003,
      -0.2406, 0.9706, -0.0041, -0.2445, 0.9696, 8e-4, -0.2485, 0.9686, 0.0035, -0.2491, 0.9684, 0.0094, -0.2502,
      0.9681, 0.0158, -0.246, 0.969, 0.0224, -0.2436, 0.9694, 0.031, -0.2438, 0.9691, 0.0381, -0.2493, 0.9674, 0.0437,
      -0.256, 0.9656, 0.0459, -0.2609, 0.9644, 0.0439, -0.2656, 0.9634, 0.0376, -0.2643, 0.9639, 0.0314, -0.2681,
      0.9632, 0.0183, -0.2689, 0.9631, 0.0087, -0.267, 0.9637, 0.0011, -0.2613, 0.9652, -0.0111, -0.252, 0.9677,
      -0.0122, -0.2436, 0.9698, -0.0123, -0.236, 0.9716, -0.0161, -0.2332, 0.9721, -0.0244, -0.2274, 0.9734, -0.0284,
      -0.2207, 0.975, -0.0261, -0.2225, 0.9748, -0.0182, 0, 0, 0, -0.192, 0.9768, -0.0945, -0.2035, 0.9739, -0.1007,
      -0.2074, 0.9725, -0.1061, -0.2063, 0.9723, -0.1099, -0.2089, 0.9705, -0.1201, -0.2077, 0.9699, -0.1273, -0.2016,
      0.9708, -0.1302, -0.2016, 0.9708, -0.1302, -0.1945, 0.9738, -0.1176, -0.1889, 0.9763, -0.1052, -0.1919, 0.9763,
      -0.1002, -0.192, 0.9768, -0.0945, 0, 0, 0, -0.2156, 0.9764, -0.0145, -0.216, 0.9763, -0.0162, -0.2143, 0.9765,
      -0.0232, -0.2094, 0.9775, -0.0236, -0.2104, 0.9775, -0.0163, -0.2137, 0.9768, -0.0139, -0.2156, 0.9764, -0.0145,
      0, 0, 0, -0.2, 0.977, -0.0735, -0.202, 0.976, -0.0818, -0.1948, 0.9772, -0.0848, -0.191, 0.9783, -0.08, -0.1913,
      0.9787, -0.0745, -0.1956, 0.9781, -0.0706, -0.2, 0.977, -0.0735, 0, 0, 0, -0.1861, 0.9803, -0.0665, -0.1878,
      0.9796, -0.0716, -0.1856, 0.9796, -0.077, -0.1834, 0.9801, -0.076, -0.1799, 0.9811, -0.0709, -0.1813, 0.981,
      -0.0695, -0.1861, 0.9803, -0.0665, 0, 0, 0, -0.2059, 0.9784, -0.021, -0.2088, 0.9776, -0.0268, -0.2044, 0.9784,
      -0.0292, -0.1979, 0.9798, -0.0298, -0.1908, 0.9812, -0.029, -0.1921, 0.9811, -0.0247, -0.1935, 0.9808, -0.0229,
      -0.1998, 0.9796, -0.0194, -0.2059, 0.9784, -0.021, 0, 0, 0, -0.1993, 0.9793, -0.0353, -0.2065, 0.9778, -0.0352,
      -0.2036, 0.9782, -0.0407, -0.1969, 0.9794, -0.0453, -0.1944, 0.9795, -0.0527, -0.1903, 0.9805, -0.0482, -0.1853,
      0.9814, -0.0511, -0.1789, 0.9826, -0.0496, -0.1828, 0.9822, -0.044, -0.1908, 0.981, -0.0365, -0.1993, 0.9793,
      -0.0353, 0, 0, 0, -0.1792, 0.9838, 0.0093, -0.1845, 0.9827, 0.0135, -0.1899, 0.9818, 0.0093, -0.203, 0.9792,
      0.0034, -0.2042, 0.9789, -0.0029, -0.2018, 0.9794, -0.0101, -0.1946, 0.9808, -0.0134, -0.1884, 0.982, -0.013,
      -0.184, 0.9829, -0.0101, -0.1837, 0.9828, -0.016, -0.1777, 0.9839, -0.0189, -0.1698, 0.9853, -0.02, -0.1624,
      0.9866, -0.0171, -0.1574, 0.9874, -0.0147, -0.1564, 0.9876, -0.0118, -0.1524, 0.9882, -0.0126, -0.1519, 0.9884,
      -0.0064, -0.1612, 0.9869, -0.0032, -0.1649, 0.9863, 0.0016, -0.168, 0.9858, 0.0064, -0.1792, 0.9838, 0.0093, 0, 0,
      0, -0.1117, 0.9928, 0.044, -0.1107, 0.9926, 0.0497, -0.1108, 0.9923, 0.0548, -0.1131, 0.9917, 0.0605, -0.1172,
      0.9911, 0.0626, -0.1266, 0.9901, 0.0608, -0.1322, 0.9896, 0.0568, -0.1367, 0.989, 0.0562, -0.1344, 0.989, 0.0613,
      -0.1465, 0.9874, 0.0597, -0.1527, 0.9866, 0.0572, -0.1676, 0.9842, 0.0571, -0.1723, 0.9837, 0.0519, -0.1762,
      0.983, 0.0509, -0.1805, 0.9827, 0.042, -0.1815, 0.9823, 0.0468, -0.185, 0.9817, 0.0454, -0.1925, 0.98, 0.0502,
      -0.199, 0.9788, 0.0484, -0.205, 0.9778, 0.044, -0.2118, 0.9763, 0.0436, -0.2179, 0.9752, 0.0394, -0.2215, 0.9743,
      0.0406, -0.2196, 0.9745, 0.047, -0.2236, 0.9735, 0.048, -0.2357, 0.971, 0.0392, -0.2326, 0.9722, 0.0278, -0.2363,
      0.9715, 0.0161, -0.2346, 0.972, 0.0098, -0.2339, 0.9723, 0.0021, -0.2258, 0.9742, 0.0015, -0.2217, 0.9751, 0.0086,
      -0.2095, 0.9778, 0.0064, -0.2082, 0.978, 0.0085, -0.215, 0.9764, 0.0189, -0.2044, 0.9788, 0.0131, -0.2014, 0.9795,
      0.0072, -0.1947, 0.9808, 0.0097, -0.1902, 0.9816, 0.0154, -0.1842, 0.9828, 0.0158, -0.1778, 0.984, 0.0109,
      -0.1691, 0.9856, 0.0091, -0.1692, 0.9854, 0.0172, -0.1708, 0.9851, 0.0197, -0.164, 0.9862, 0.0235, -0.1628,
      0.9865, 0.0168, -0.1646, 0.9863, 0.0069, -0.1589, 0.9873, 0.0018, -0.1519, 0.9884, -5e-4, -0.1469, 0.9892,
      -0.0035, -0.1409, 0.99, -0.0039, -0.1377, 0.9905, -2e-4, -0.1371, 0.9906, 0.0026, -0.1342, 0.9909, 0.0071,
      -0.1275, 0.9918, 0.01, -0.1281, 0.9917, 0.0129, -0.1327, 0.991, 0.0159, -0.1232, 0.9922, 0.0164, -0.1201, 0.9926,
      0.0188, -0.1175, 0.9928, 0.0222, -0.1155, 0.9929, 0.0283, -0.117, 0.9927, 0.0298, -0.1126, 0.993, 0.0348, -0.1122,
      0.9929, 0.0394, -0.1117, 0.9928, 0.044, 0, 0, 0, 0.1125, 0.7376, 0.6658, 0.1134, 0.7355, 0.668, 0.1121, 0.7326,
      0.6714, 0.1178, 0.7304, 0.6728, 0.1239, 0.7301, 0.672, 0.1239, 0.7252, 0.6773, 0.119, 0.7231, 0.6804, 0.11,
      0.7247, 0.6803, 0.1082, 0.7198, 0.6857, 0.1025, 0.7194, 0.687, 0.1002, 0.7213, 0.6853, 0.094, 0.7172, 0.6905,
      0.0883, 0.7166, 0.6918, 0.0828, 0.7192, 0.6898, 0.078, 0.7245, 0.6848, 0.0725, 0.7226, 0.6874, 0.0721, 0.7281,
      0.6817, 0.0799, 0.7348, 0.6736, 0.0792, 0.7378, 0.6704, 0.0847, 0.7367, 0.6709, 0.0876, 0.7387, 0.6683, 0.0975,
      0.7386, 0.667, 0.0995, 0.7412, 0.6639, 0.1125, 0.7376, 0.6658, 0, 0, 0, -0.5652, -0.7948, 0.2211, -0.5359,
      -0.8178, 0.2097, -0.5319, -0.8178, 0.2196, -0.5292, -0.8181, 0.2251, -0.5251, -0.8222, 0.2198, -0.5242, -0.8252,
      0.2102, -0.5264, -0.8249, 0.2059, -0.5296, -0.8241, 0.2008, -0.5362, -0.8211, 0.1956, -0.5416, -0.8197, 0.1864,
      -0.5532, -0.8141, 0.1769, -0.5635, -0.8086, 0.1692, -0.5826, -0.7969, 0.1598, -0.5774, -0.7991, 0.1673, -0.5642,
      -0.8061, 0.1786, -0.5551, -0.8098, 0.19, -0.5595, -0.8051, 0.1971, -0.5674, -0.7979, 0.2035, -0.5694, -0.7935,
      0.2146, -0.5652, -0.7948, 0.2211, 0, 0, 0, -0.8496, -0.3865, 0.3588, -0.8473, -0.3905, 0.3599, -0.8428, -0.4071,
      0.3521, -0.846, -0.415, 0.3347, -0.8343, -0.4413, 0.3305, -0.8332, -0.4463, 0.3266, -0.8286, -0.4524, 0.3298,
      -0.8279, -0.4621, 0.3178, -0.8243, -0.4765, 0.3056, -0.819, -0.4904, 0.2979, -0.8106, -0.5051, 0.2963, -0.8051,
      -0.5205, 0.2845, -0.7876, -0.546, 0.2855, -0.7847, -0.5486, 0.2885, -0.7764, -0.562, 0.2854, -0.77, -0.576,
      0.2744, -0.7619, -0.5879, 0.2718, -0.7591, -0.597, 0.2596, -0.7499, -0.6098, 0.2565, -0.7386, -0.6232, 0.257,
      -0.7375, -0.6282, 0.248, -0.7293, -0.6402, 0.2415, -0.7192, -0.6538, 0.2349, -0.7052, -0.6698, 0.2326, -0.7045,
      -0.6724, 0.2269, -0.6906, -0.6872, 0.2255, -0.6845, -0.692, 0.2295, -0.6809, -0.6973, 0.224, -0.6768, -0.6998,
      0.2287, -0.672, -0.7044, 0.2285, -0.6715, -0.7068, 0.2226, -0.6642, -0.714, 0.2216, -0.6497, -0.73, 0.2121,
      -0.6412, -0.7401, 0.2028, -0.6345, -0.746, 0.2021, -0.6277, -0.7533, 0.1961, -0.6247, -0.7583, 0.1861, -0.6109,
      -0.7703, 0.183, -0.6051, -0.7743, 0.1853, -0.6037, -0.7736, 0.1926, -0.5941, -0.7818, 0.1893, -0.5851, -0.7881,
      0.1911, -0.5748, -0.7895, 0.2149, -0.5693, -0.7912, 0.2234, -0.5728, -0.7911, 0.2146, -0.5713, -0.7938, 0.2086,
      -0.5698, -0.7976, 0.1979, -0.558, -0.8073, 0.1921, -0.5591, -0.8075, 0.1878, -0.5671, -0.8042, 0.1782, -0.5798,
      -0.7969, 0.1695, -0.5798, -0.7969, 0.1695, -0.591, -0.7908, 0.159, -0.6003, -0.784, 0.1579, -0.6072, -0.7776,
      0.163, -0.6173, -0.7703, 0.1599, -0.6396, -0.751, 0.1641, -0.6505, -0.7398, 0.1721, -0.6567, -0.7306, 0.1867,
      -0.665, -0.7271, 0.1702, -0.6729, -0.7165, 0.1842, -0.6915, -0.696, 0.1937, -0.6835, -0.7003, 0.2058, -0.7053,
      -0.6741, 0.2194, -0.7108, -0.6707, 0.2121, -0.6978, -0.6867, 0.204, -0.7016, -0.6849, 0.1968, -0.7167, -0.6665,
      0.2053, -0.7358, -0.642, 0.2155, -0.7413, -0.6328, 0.2236, -0.7527, -0.6195, 0.2229, -0.7645, -0.604, 0.2252,
      -0.7632, -0.6035, 0.2309, -0.7766, -0.5808, 0.2441, -0.7887, -0.5579, 0.2584, -0.8002, -0.5361, 0.2687, -0.8143,
      -0.5139, 0.2698, -0.8199, -0.5014, 0.2764, -0.8305, -0.4827, 0.278, -0.8371, -0.4639, 0.2898, -0.8505, -0.4338,
      0.2974, -0.8631, -0.4008, 0.3073, -0.8755, -0.3648, 0.3171, -0.8853, -0.338, 0.3193, -0.894, -0.3148, 0.3188,
      -0.8924, -0.3106, 0.3273, -0.8935, -0.302, 0.3324, -0.8872, -0.3133, 0.3388, -0.8826, -0.3253, 0.3394, -0.8772,
      -0.3322, 0.3466, -0.8738, -0.3481, 0.3397, -0.864, -0.3664, 0.3452, -0.8532, -0.3887, 0.3477, -0.8496, -0.3865,
      0.3588, 0, 0, 0, 0.7706, 0.6037, 0.2042, 0.7671, 0.6077, 0.2058, 0.7607, 0.6155, 0.2062, 0.7567, 0.6209, 0.2047,
      0.7521, 0.624, 0.212, 0.752, 0.6226, 0.2166, 0.7412, 0.6352, 0.2171, 0.7399, 0.6382, 0.2127, 0.7369, 0.6414,
      0.2138, 0.7352, 0.6477, 0.2001, 0.7354, 0.6503, 0.1906, 0.7403, 0.6485, 0.1774, 0.7343, 0.6569, 0.1708, 0.7366,
      0.6585, 0.1541, 0.7331, 0.6637, 0.1486, 0.7307, 0.6707, 0.1273, 0.7284, 0.6737, 0.125, 0.7216, 0.681, 0.1249,
      0.72, 0.6843, 0.1158, 0.6973, 0.7061, 0.1234, 0.6962, 0.711, 0.0985, 0.6944, 0.7137, 0.0919, 0.673, 0.7353,
      0.0805, 0.6796, 0.7314, 0.0575, 0.6743, 0.7367, 0.0505, 0.6614, 0.7484, 0.0489, 0.6608, 0.7495, 0.0393, 0.6525,
      0.7572, 0.0301, 0.6516, 0.7581, 0.0256, 0.6609, 0.7501, 0.0229, 0.6681, 0.744, 0.0134, 0.6731, 0.7396, -0.0033,
      0.6833, 0.73, -0.0116, 0.6981, 0.7159, -0.0071, 0.7035, 0.7106, -0.0116, 0.7052, 0.7085, -0.0263, 0.7061, 0.7068,
      -0.0429, 0.7127, 0.6991, -0.0585, 0.7133, 0.6977, -0.0663, 0.7239, 0.6861, -0.073, 0.7301, 0.6785, -0.0812,
      0.7281, 0.6788, -0.0952, 0.7268, 0.6759, -0.1218, 0.7222, 0.6777, -0.1384, 0.7214, 0.6758, -0.1512, 0.7242,
      0.6679, -0.1714, 0.7204, 0.6679, -0.1866, 0.7225, 0.6639, -0.1931, 0.7124, 0.6709, -0.206, 0.7024, 0.6754,
      -0.2248, 0.6959, 0.6758, -0.2429, 0.6869, 0.6804, -0.2556, 0.6776, 0.6872, -0.2619, 0.6706, 0.6914, -0.2686,
      0.6677, 0.6956, -0.2653, 0.6648, 0.7004, -0.2598, 0.655, 0.7084, -0.263, 0.6535, 0.7073, -0.2698, 0.6508, 0.7047,
      -0.2825, 0.6398, 0.7113, -0.291, 0.6275, 0.716, -0.3059, 0.6161, 0.724, -0.3101, 0.6091, 0.7274, -0.316, 0.5994,
      0.729, -0.3305, 0.596, 0.7277, -0.3395, 0.5914, 0.7319, -0.3383, 0.5889, 0.7402, -0.3246, 0.5897, 0.7439, -0.3144,
      0.5981, 0.7396, -0.3086, 0.6015, 0.7414, -0.2974, 0.6059, 0.7399, -0.2922, 0.6024, 0.7447, -0.2872, 0.5871,
      0.7562, -0.2888, 0.5757, 0.7648, -0.2893, 0.5739, 0.7605, -0.3036, 0.559, 0.7676, -0.3135, 0.5538, 0.7725,
      -0.3105, 0.5364, 0.7842, -0.312, 0.5296, 0.7876, -0.3149, 0.5231, 0.7935, -0.3109, 0.5232, 0.796, -0.3042, 0.5128,
      0.8013, -0.3082, 0.5039, 0.8031, -0.3179, 0.4961, 0.8034, -0.3292, 0.4907, 0.8003, -0.3445, 0.4895, 0.7965,
      -0.355, 0.4969, 0.7857, -0.3685, 0.4992, 0.781, -0.3753, 0.5035, 0.7743, -0.3834, 0.5114, 0.7633, -0.3947, 0.5025,
      0.7597, -0.4127, 0.501, 0.7516, -0.4291, 0.5071, 0.7407, -0.4407, 0.4953, 0.7407, -0.454, 0.4847, 0.7453, -0.4579,
      0.4685, 0.7487, -0.469, 0.4811, 0.7382, -0.4728, 0.4877, 0.7339, -0.4728, 0.5006, 0.7208, -0.4795, 0.515, 0.7089,
      -0.4819, 0.5235, 0.7111, -0.4694, 0.5338, 0.7067, -0.4644, 0.5395, 0.6961, -0.4738, 0.5514, 0.6811, -0.4818,
      0.5559, 0.6808, -0.477, 0.5604, 0.6742, -0.481, 0.5604, 0.6818, -0.4702, 0.5688, 0.6746, -0.4705, 0.5852, 0.6691,
      -0.4581, 0.5888, 0.6622, -0.4635, 0.5954, 0.6627, -0.4543, 0.5962, 0.6667, -0.4472, 0.6082, 0.6575, -0.4448,
      0.6216, 0.6504, -0.4366, 0.6337, 0.6418, -0.4318, 0.6468, 0.6379, -0.4179, 0.6565, 0.6316, -0.4123, 0.6667,
      0.6279, -0.4015, 0.6586, 0.6342, -0.405, 0.6564, 0.6394, -0.4003, 0.6444, 0.6484, -0.4053, 0.6431, 0.6554,
      -0.3962, 0.6525, 0.6507, -0.3885, 0.6668, 0.6414, -0.3794, 0.6771, 0.6327, -0.3757, 0.6839, 0.6321, -0.3643,
      0.6917, 0.6258, -0.3606, 0.6948, 0.6165, -0.3704, 0.691, 0.6142, -0.3811, 0.695, 0.608, -0.3838, 0.6923, 0.604,
      -0.3949, 0.6779, 0.6139, -0.4045, 0.6751, 0.6085, -0.4171, 0.6706, 0.6081, -0.4249, 0.674, 0.6008, -0.4297,
      0.6869, 0.5969, -0.4145, 0.6951, 0.5894, -0.4117, 0.7064, 0.5823, -0.4024, 0.7162, 0.5723, -0.3995, 0.7133,
      0.5644, -0.4156, 0.7186, 0.5501, -0.4253, 0.7215, 0.5367, -0.4375, 0.7223, 0.5254, -0.4497, 0.7282, 0.5143,
      -0.4531, 0.7352, 0.5102, -0.4464, 0.7373, 0.5022, -0.4519, 0.7349, 0.4975, -0.4609, 0.7421, 0.4851, -0.4626,
      0.7498, 0.4729, -0.4628, 0.7549, 0.4716, -0.4558, 0.7682, 0.4548, -0.4506, 0.7833, 0.4343, -0.4447, 0.7982,
      0.4154, -0.4362, 0.8143, 0.4007, -0.4199, 0.8294, 0.3872, -0.4026, 0.8379, 0.3854, -0.3865, 0.8447, 0.3782,
      -0.3788, 0.845, 0.3835, -0.3728, 0.8516, 0.3754, -0.3657, 0.8633, 0.3673, -0.3461, 0.8705, 0.3648, -0.3304,
      0.8786, 0.3476, -0.3275, 0.882, 0.3466, -0.3191, 0.8793, 0.3585, -0.3136, 0.8757, 0.3648, -0.3164, 0.8809, 0.37,
      -0.2951, 0.8843, 0.3674, -0.2882, 0.8876, 0.3716, -0.2721, 0.8873, 0.3781, -0.264, 0.8829, 0.3874, -0.2653,
      0.8858, 0.3904, -0.2509, 0.8854, 0.3964, -0.2427, 0.8925, 0.3878, -0.2304, 0.897, 0.386, -0.2154, 0.8999, 0.386,
      -0.2029, 0.9033, 0.3821, -0.1948, 0.906, 0.3798, -0.1868, 0.9128, 0.3612, -0.1907, 0.9143, 0.3617, -0.1822,
      0.9132, 0.3655, -0.1805, 0.9106, 0.3722, -0.1795, 0.9147, 0.3675, -0.1682, 0.9148, 0.3704, -0.161, 0.9144, 0.3765,
      -0.1488, 0.9081, 0.3899, -0.1525, 0.9085, 0.393, -0.1422, 0.9027, 0.4077, -0.1375, 0.9062, 0.4051, -0.121, 0.8975,
      0.4239, -0.1217, 0.8891, 0.4371, -0.1356, 0.8827, 0.45, -0.1353, 0.8768, 0.4619, -0.1339, 0.8759, 0.4656, -0.1269,
      0.8718, 0.4746, -0.1212, 0.8736, 0.4735, -0.1123, 0.8743, 0.4758, -0.0957, 0.8703, 0.4822, -0.1005, 0.8658,
      0.4917, -0.0928, 0.8705, 0.4853, -0.0824, 0.8695, 0.489, -0.0694, 0.8761, 0.4793, -0.0523, 0.8829, 0.4679,
      -0.0386, 0.8844, 0.466, -0.0262, 0.8824, 0.4701, -0.0194, 0.8823, 0.4705, -0.0113, 0.8805, 0.474, -2e-4, 0.8826,
      0.4701, 0.0081, 0.8884, 0.4586, 0.0184, 0.882, 0.4708, 0.0195, 0.8835, 0.4676, 0.029, 0.8819, 0.4691, 0.0469,
      0.8789, 0.4726, 0.0642, 0.8743, 0.4793, 0.0763, 0.8715, 0.4824, 0.088, 0.867, 0.4897, 0.0927, 0.8648, 0.4919,
      0.101, 0.8573, 0.5017, 0.1155, 0.8529, 0.5064, 0.1271, 0.854, 0.5028, 0.1336, 0.8444, 0.5133, 0.1531, 0.8361,
      0.5227, 0.1665, 0.8253, 0.539, 0.1685, 0.8285, 0.5371, 0.1584, 0.8239, 0.5446, 0.157, 0.818, 0.552, 0.1618,
      0.8105, 0.5638, 0.1588, 0.7959, 0.5806, 0.1715, 0.7867, 0.5863, 0.1933, 0.7779, 0.5972, 0.1955, 0.7706, 0.6037,
      0.2042, 0, 0, 0, 0.8883, 0.3203, -0.3293, 0.8956, 0.3123, -0.3167, 0.8985, 0.3174, -0.3033, 0.894, 0.3316,
      -0.3013, 0.8889, 0.3391, -0.3081, 0.8813, 0.3437, -0.3244, 0.8781, 0.3433, -0.3333, 0.8789, 0.337, -0.3376,
      0.8839, 0.3298, -0.3317, 0.8883, 0.3203, -0.3293, 0, 0, 0, -0.0926, 0.18, 0.9793, -0.085, 0.1763, 0.9807, -0.0821,
      0.1706, 0.9819, -0.0744, 0.167, 0.9831, -0.0684, 0.1713, 0.9828, -0.0603, 0.1719, 0.9833, -0.0486, 0.1675, 0.9847,
      -0.0442, 0.143, 0.9887, -0.0516, 0.1284, 0.9904, -0.0563, 0.1089, 0.9925, -0.0488, 0.0939, 0.9944, -0.0496,
      0.0871, 0.995, -0.0575, 0.0869, 0.9946, -0.0696, 0.0903, 0.9935, -0.0807, 0.0901, 0.9927, -0.1013, 0.087, 0.991,
      -0.1133, 0.082, 0.9902, -0.1305, 0.0756, 0.9886, -0.1338, 0.0761, 0.9881, -0.1323, 0.0904, 0.9871, -0.1306,
      0.0926, 0.9871, -0.1311, 0.0994, 0.9864, -0.1383, 0.1067, 0.9846, -0.1437, 0.1079, 0.9837, -0.1486, 0.1126,
      0.9825, -0.1448, 0.1203, 0.9821, -0.1463, 0.1287, 0.9808, -0.1454, 0.1337, 0.9803, -0.1427, 0.1338, 0.9807,
      -0.1416, 0.1413, 0.9798, -0.1428, 0.1446, 0.9791, -0.1411, 0.147, 0.979, -0.1347, 0.1491, 0.9796, -0.1387, 0.1629,
      0.9768, -0.1424, 0.17, 0.9751, -0.1409, 0.1759, 0.9743, -0.1375, 0.1772, 0.9745, -0.1352, 0.1788, 0.9746, -0.1306,
      0.1762, 0.9757, -0.1174, 0.176, 0.9774, -0.1142, 0.181, 0.9768, -0.1112, 0.1807, 0.9772, -0.1063, 0.1826, 0.9774,
      -0.1038, 0.1753, 0.979, -0.0997, 0.1775, 0.9791, -0.0926, 0.18, 0.9793, 0, 0, 0, 0.2613, 0.1292, 0.9566, 0.2535,
      0.1116, 0.9609, 0.2495, 0.1085, 0.9623, 0.2486, 0.095, 0.9639, 0.2504, 0.0877, 0.9642, 0.2492, 0.0825, 0.9649,
      0.2573, 0.0734, 0.9635, 0.2588, 0.0672, 0.9636, 0.2652, 0.0582, 0.9624, 0.273, 0.0526, 0.9606, 0.2738, 0.0446,
      0.9607, 0.2756, 0.0396, 0.9604, 0.2745, 0.0301, 0.9611, 0.2611, 0.0343, 0.9647, 0.2475, 0.0389, 0.9681, 0.2261,
      0.0396, 0.9733, 0.2239, 0.0405, 0.9738, 0.2139, 0.0383, 0.9761, 0.2035, 0.0406, 0.9782, 0.1954, 0.0395, 0.9799,
      0.1675, 0.0399, 0.9851, 0.1699, 0.0536, 0.984, 0.1631, 0.0651, 0.9845, 0.1552, 0.0681, 0.9855, 0.1516, 0.0759,
      0.9855, 0.1472, 0.0784, 0.986, 0.1473, 0.0832, 0.9856, 0.1516, 0.0955, 0.9838, 0.1594, 0.1122, 0.9808, 0.1644,
      0.1124, 0.98, 0.1744, 0.1225, 0.977, 0.1808, 0.1228, 0.9758, 0.1905, 0.1157, 0.9748, 0.2021, 0.1215, 0.9718,
      0.2035, 0.1287, 0.9706, 0.2071, 0.1357, 0.9689, 0.2094, 0.1445, 0.9671, 0.2182, 0.1516, 0.9641, 0.2212, 0.1636,
      0.9614, 0.2246, 0.1675, 0.96, 0.2266, 0.1764, 0.9579, 0.2305, 0.1874, 0.9549, 0.2439, 0.2006, 0.9488, 0.2445,
      0.2063, 0.9475, 0.2461, 0.2094, 0.9464, 0.2392, 0.2162, 0.9466, 0.2394, 0.2216, 0.9453, 0.244, 0.2226, 0.9439,
      0.2512, 0.2116, 0.9445, 0.2529, 0.2003, 0.9465, 0.2529, 0.1889, 0.9489, 0.2627, 0.1733, 0.9492, 0.2534, 0.1735,
      0.9517, 0.2488, 0.1723, 0.9531, 0.2411, 0.174, 0.9548, 0.2378, 0.1659, 0.957, 0.2481, 0.1558, 0.9561, 0.2554,
      0.1529, 0.9547, 0.2581, 0.1458, 0.9551, 0.2638, 0.1339, 0.9553, 0.2613, 0.1292, 0.9566, 0, 0, 0, 0.398, -0.1896,
      0.8976, 0.3909, -0.1885, 0.9009, 0.381, -0.1911, 0.9046, 0.3741, -0.1907, 0.9076, 0.3701, -0.1923, 0.9089, 0.3724,
      -0.1718, 0.912, 0.3675, -0.1655, 0.9152, 0.3669, -0.1549, 0.9173, 0.3699, -0.1445, 0.9178, 0.367, -0.1378, 0.92,
      0.3672, -0.1269, 0.9214, 0.3476, -0.1271, 0.929, 0.3493, -0.1208, 0.9292, 0.341, -0.1209, 0.9323, 0.34, -0.1239,
      0.9322, 0.3299, -0.1246, 0.9358, 0.3253, -0.1346, 0.936, 0.3227, -0.139, 0.9362, 0.3137, -0.1365, 0.9396, 0.3082,
      -0.139, 0.9411, 0.2973, -0.1404, 0.9444, 0.2913, -0.1313, 0.9476, 0.2877, -0.1257, 0.9494, 0.2833, -0.1153,
      0.9521, 0.2796, -0.1024, 0.9546, 0.2301, -0.1022, 0.9678, 0.2241, -0.1043, 0.969, 0.2193, -0.1039, 0.9701, 0.2122,
      -0.1063, 0.9714, 0.2099, -0.1009, 0.9725, 0.2143, -0.099, 0.9717, 0.215, -0.0915, 0.9723, 0.2179, -0.087, 0.9721,
      0.2241, -0.0833, 0.971, 0.2285, -0.0851, 0.9698, 0.2344, -0.0785, 0.969, 0.2436, -0.0786, 0.9667, 0.2446, -0.0836,
      0.966, 0.2508, -0.0866, 0.9641, 0.2609, -0.0757, 0.9624, 0.2709, -0.0672, 0.9603, 0.2752, -0.0617, 0.9594, 0.2749,
      -0.0473, 0.9603, 0.2823, -0.0304, 0.9588, 0.2901, -0.0214, 0.9568, 0.3011, -0.013, 0.9535, 0.303, -0.0074, 0.953,
      0.3034, -0.001, 0.9529, 0.3061, 0.005, 0.952, 0.3052, 0.0149, 0.9522, 0.3072, 0.0304, 0.9512, 0.3103, 0.0413,
      0.9497, 0.3151, 0.0506, 0.9477, 0.3159, 0.0611, 0.9468, 0.3172, 0.0733, 0.9455, 0.3234, 0.0821, 0.9427, 0.332,
      0.0877, 0.9392, 0.3456, 0.0818, 0.9348, 0.3562, 0.0754, 0.9314, 0.3681, 0.0737, 0.9269, 0.3802, 0.0703, 0.9222,
      0.3847, 0.0808, 0.9195, 0.3869, 0.0821, 0.9185, 0.3942, 0.0804, 0.9155, 0.4116, 0.089, 0.907, 0.418, 0.0854,
      0.9044, 0.4231, 0.0859, 0.902, 0.4253, 0.0901, 0.9006, 0.4311, 0.0916, 0.8977, 0.4429, 0.0898, 0.8921, 0.4529,
      0.0894, 0.8871, 0.4579, 0.0912, 0.8843, 0.4678, 0.0769, 0.8805, 0.4747, 0.0748, 0.8769, 0.4787, 0.0777, 0.8745,
      0.4858, 0.0765, 0.8707, 0.4941, 0.0802, 0.8657, 0.498, 0.0728, 0.8641, 0.5116, 0.0612, 0.857, 0.5116, 0.0612,
      0.857, 0.5112, 0.0408, 0.8585, 0.5173, 0.0385, 0.855, 0.5126, 0.0323, 0.858, 0.5069, 0.0276, 0.8616, 0.5012,
      0.0185, 0.8651, 0.4981, 0.0104, 0.8671, 0.4973, -0.0036, 0.8676, 0.4937, -0.0103, 0.8696, 0.4935, -0.0234, 0.8694,
      0.4891, -0.0283, 0.8718, 0.4883, -0.0387, 0.8718, 0.4862, -0.04, 0.8729, 0.4846, -0.0495, 0.8733, 0.4882, -0.0575,
      0.8708, 0.4885, -0.0785, 0.869, 0.4905, -0.0945, 0.8663, 0.4886, -0.1035, 0.8664, 0.491, -0.1136, 0.8637, 0.4992,
      -0.1233, 0.8577, 0.5057, -0.145, 0.8504, 0.5057, -0.145, 0.8504, 0.5, -0.1433, 0.8541, 0.4796, -0.1462, 0.8652,
      0.4754, -0.1483, 0.8672, 0.4703, -0.1593, 0.868, 0.4731, -0.1669, 0.8651, 0.4687, -0.1872, 0.8633, 0.4652,
      -0.2044, 0.8613, 0.4689, -0.2074, 0.8585, 0.4787, -0.2141, 0.8515, 0.4831, -0.211, 0.8498, 0.4822, -0.2293,
      0.8455, 0.4709, -0.2292, 0.8519, 0.4658, -0.2198, 0.8571, 0.4611, -0.2126, 0.8615, 0.4498, -0.2102, 0.8681,
      0.4472, -0.2012, 0.8715, 0.4374, -0.2066, 0.8752, 0.4253, -0.2042, 0.8817, 0.4209, -0.1965, 0.8856, 0.4111,
      -0.1949, 0.8905, 0.4038, -0.1953, 0.8937, 0.4034, -0.19, 0.8951, 0.398, -0.1896, 0.8976, 0, 0, 0, 0.2241, -0.0833,
      0.971, 0.2178, -0.0774, 0.9729, 0.2127, -0.0803, 0.9738, 0.2057, -0.0878, 0.9747, 0.192, -0.0694, 0.9789, 0.2051,
      -0.0598, 0.9769, 0.1988, -0.0483, 0.9789, 0.2047, -0.0439, 0.9779, 0.2162, -0.0417, 0.9755, 0.2176, -0.034,
      0.9754, 0.2266, -0.0424, 0.9731, 0.2416, -0.0431, 0.9694, 0.2468, -0.0349, 0.9684, 0.2491, -0.0233, 0.9682,
      0.2473, -0.0096, 0.9689, 0.2393, 7e-4, 0.971, 0.2465, 0.0209, 0.9689, 0.2423, 0.0244, 0.9699, 0.2297, 0.0229,
      0.973, 0.2249, 0.0319, 0.9739, 0.2261, 0.0396, 0.9733, 0.2475, 0.0389, 0.9681, 0.2611, 0.0343, 0.9647, 0.2745,
      0.0301, 0.9611, 0.2756, 0.0396, 0.9604, 0.2842, 0.0558, 0.9571, 0.294, 0.065, 0.9536, 0.3053, 0.0621, 0.9502,
      0.3159, 0.0611, 0.9468, 0.3151, 0.0506, 0.9477, 0.3103, 0.0413, 0.9497, 0.3072, 0.0304, 0.9512, 0.3052, 0.0149,
      0.9522, 0.3061, 0.005, 0.952, 0.3034, -0.001, 0.9529, 0.303, -0.0074, 0.953, 0.3011, -0.013, 0.9535, 0.2901,
      -0.0214, 0.9568, 0.2823, -0.0304, 0.9588, 0.2749, -0.0473, 0.9603, 0.2752, -0.0617, 0.9594, 0.2709, -0.0672,
      0.9603, 0.2609, -0.0757, 0.9624, 0.2508, -0.0866, 0.9641, 0.2446, -0.0836, 0.966, 0.2436, -0.0786, 0.9667, 0.2344,
      -0.0785, 0.969, 0.2285, -0.0851, 0.9698, 0.2241, -0.0833, 0.971, 0, 0, 0, -0.9194, 0.0219, 0.3926, -0.9208,
      0.0197, 0.3896, -0.9219, 0.03, 0.3864, -0.9235, 0.0355, 0.3818, -0.9259, 0.0295, 0.3766, -0.9382, 0.0299, 0.3449,
      -0.9384, 0.019, 0.3452, -0.9348, 0.0172, 0.3548, -0.9351, 0.0105, 0.3542, -0.9363, 0.0123, 0.351, -0.9397, 0.0094,
      0.3417, -0.9398, -0.0032, 0.3417, -0.9371, -0.0096, 0.3489, -0.936, -0.0196, 0.3514, -0.936, -0.0272, 0.351,
      -0.9364, -0.0749, 0.3428, -0.94, -0.0657, 0.3348, -0.9417, -0.0653, 0.3299, -0.9389, -0.0475, 0.3409, -0.9437,
      -0.0394, 0.3284, -0.9471, -0.0409, 0.3185, -0.9492, -0.0379, 0.3125, -0.9519, -0.0425, 0.3033, -0.9559, -0.0403,
      0.291, -0.9594, -0.022, 0.2813, -0.9617, -0.0175, 0.2735, -0.9633, -0.0093, 0.2682, -0.9664, -0.001, 0.257,
      -0.9676, -0.0027, 0.2525, -0.9695, 0.0015, 0.2453, -0.9715, 0.0073, 0.237, -0.9727, 0.0045, 0.2321, -0.976,
      0.0069, 0.2177, -0.9768, 0.0144, 0.2135, -0.9775, 0.0141, 0.2104, -0.9809, 0.0241, 0.1932, -0.9812, 0.0295,
      0.1909, -0.9799, 0.0308, 0.1973, -0.9797, 0.0396, 0.1964, -0.9786, 0.0459, 0.2004, -0.9768, 0.047, 0.2088,
      -0.9747, 0.058, 0.2159, -0.9727, 0.0671, 0.2223, -0.9738, 0.0713, 0.216, -0.9723, 0.0814, 0.219, -0.9718, 0.0973,
      0.2148, -0.9705, 0.1018, 0.2184, -0.9696, 0.1165, 0.2154, -0.97, 0.1257, 0.2083, -0.9684, 0.1342, 0.2102, -0.9674,
      0.1329, 0.2157, -0.966, 0.1381, 0.2187, -0.9654, 0.1482, 0.2145, -0.9646, 0.1508, 0.2164, -0.9627, 0.1502, 0.2251,
      -0.9578, 0.1622, 0.2373, -0.9558, 0.1641, 0.2441, -0.9548, 0.1698, 0.244, -0.9515, 0.1843, 0.2464, -0.9475,
      0.1922, 0.2555, -0.9446, 0.1926, 0.2659, -0.9435, 0.1961, 0.267, -0.9401, 0.1947, 0.28, -0.9344, 0.2033, 0.2923,
      -0.9317, 0.2072, 0.2984, -0.9274, 0.2154, 0.3057, -0.9257, 0.2143, 0.3116, -0.9252, 0.2098, 0.3161, -0.9274,
      0.2041, 0.3134, -0.9315, 0.2012, 0.3031, -0.9344, 0.1927, 0.2995, -0.9373, 0.1878, 0.2935, -0.94, 0.1814, 0.2891,
      -0.9427, 0.1691, 0.2877, -0.9457, 0.1591, 0.2836, -0.9432, 0.1579, 0.2922, -0.9438, 0.15, 0.2947, -0.9432, 0.1462,
      0.2985, -0.9437, 0.1392, 0.3001, -0.9452, 0.1328, 0.2984, -0.9454, 0.1292, 0.2991, -0.9443, 0.1278, 0.3032,
      -0.9438, 0.1217, 0.3074, -0.9364, 0.1234, 0.3284, -0.9333, 0.1212, 0.338, -0.9307, 0.1063, 0.35, -0.928, 0.1081,
      0.3565, -0.9236, 0.1072, 0.3682, -0.9196, 0.1092, 0.3773, -0.9176, 0.1062, 0.3831, -0.9197, 0.0968, 0.3805,
      -0.9217, 0.091, 0.3772, -0.9232, 0.0785, 0.3763, -0.9226, 0.067, 0.3799, -0.921, 0.0618, 0.3846, -0.921, 0.0579,
      0.3852, -0.9248, 0.0492, 0.3772, -0.9226, 0.0454, 0.3831, -0.921, 0.0393, 0.3875, -0.9194, 0.0219, 0.3926, 0, 0,
      0, -0.9823, 0.1431, 0.1212, -0.9828, 0.1469, 0.1118, -0.9827, 0.1505, 0.1083, -0.982, 0.1535, 0.1102, -0.9815,
      0.1573, 0.1095, -0.9813, 0.1614, 0.1047, -0.9815, 0.1648, 0.0979, -0.9817, 0.167, 0.092, -0.9809, 0.1721, 0.0908,
      -0.9808, 0.1751, 0.0862, -0.9815, 0.1701, 0.0874, -0.9825, 0.166, 0.084, -0.982, 0.1708, 0.0801, -0.9822, 0.1725,
      0.0745, -0.9817, 0.176, 0.0721, -0.9808, 0.1812, 0.0722, -0.9796, 0.1866, 0.0744, -0.9795, 0.189, 0.0695, -0.9786,
      0.1923, 0.0734, -0.978, 0.1945, 0.0759, -0.9779, 0.19, 0.0872, -0.9771, 0.1922, 0.0911, -0.9769, 0.1908, 0.0965,
      -0.9773, 0.1873, 0.0994, -0.977, 0.1861, 0.1045, -0.9758, 0.1898, 0.1085, -0.9771, 0.1804, 0.113, -0.9775, 0.1735,
      0.1198, -0.9778, 0.1662, 0.1279, -0.9789, 0.1646, 0.1214, -0.98, 0.1577, 0.1216, -0.9799, 0.1552, 0.1252, -0.9806,
      0.1531, 0.1227, -0.981, 0.15, 0.1234, -0.9817, 0.1465, 0.122, -0.9823, 0.1431, 0.1212, 0, 0, 0, -0.9109, 0.3938,
      0.1237, -0.9094, 0.3926, 0.1375, -0.9075, 0.3924, 0.1499, -0.9072, 0.387, 0.1652, -0.9084, 0.3811, 0.172, -0.9048,
      0.3829, 0.1866, -0.9051, 0.3791, 0.1925, -0.9061, 0.3691, 0.2068, -0.9066, 0.3617, 0.2173, -0.9053, 0.362, 0.2224,
      -0.9041, 0.3586, 0.2322, -0.9061, 0.354, 0.2315, -0.9033, 0.3534, 0.2432, -0.9024, 0.3467, 0.2557, -0.9043,
      0.3428, 0.2543, -0.908, 0.3408, 0.2439, -0.911, 0.3399, 0.2333, -0.9133, 0.3412, 0.2222, -0.9192, 0.3396, 0.1995,
      -0.9135, 0.3488, 0.2095, -0.9134, 0.353, 0.2026, -0.9152, 0.3541, 0.1922, -0.9146, 0.3588, 0.1864, -0.9118,
      0.3681, 0.1819, -0.9138, 0.3675, 0.1729, -0.9148, 0.3718, 0.1577, -0.9143, 0.3752, 0.1527, -0.9165, 0.3777,
      0.1317, -0.916, 0.3809, 0.126, -0.9135, 0.3849, 0.1317, -0.9153, 0.3857, 0.116, -0.9201, 0.3773, 0.1049, -0.9209,
      0.3771, 0.0983, -0.9228, 0.3732, 0.0961, -0.9243, 0.3714, 0.0882, -0.9243, 0.3729, 0.0813, -0.9215, 0.3779,
      0.0896, -0.9188, 0.3837, 0.0928, -0.9165, 0.3873, 0.0999, -0.9143, 0.3905, 0.1079, -0.9121, 0.392, 0.1199,
      -0.9109, 0.3938, 0.1237, 0, 0, 0, 0.4422, 0.5756, 0.6879, 0.443, 0.5757, 0.6873, 0.4434, 0.5791, 0.6841, 0.452,
      0.5789, 0.6786, 0.461, 0.5831, 0.6689, 0.4555, 0.5771, 0.6779, 0.4574, 0.5744, 0.6788, 0.456, 0.5749, 0.6794,
      0.4541, 0.5738, 0.6815, 0.4522, 0.5741, 0.6826, 0.4518, 0.5736, 0.6833, 0.451, 0.575, 0.6826, 0.4498, 0.5759,
      0.6826, 0.4475, 0.576, 0.6841, 0.4447, 0.5748, 0.6869, 0.4422, 0.5756, 0.6879, 0, 0, 0, 0.4422, 0.5756, 0.6879,
      0.4447, 0.5748, 0.6869, 0.4475, 0.576, 0.6841, 0.4498, 0.5759, 0.6826, 0.451, 0.575, 0.6826, 0.4518, 0.5736,
      0.6833, 0.4522, 0.5741, 0.6826, 0.4541, 0.5738, 0.6815, 0.456, 0.5749, 0.6794, 0.4574, 0.5744, 0.6788, 0.4582,
      0.5733, 0.6793, 0.4482, 0.5674, 0.6907, 0.4416, 0.5693, 0.6935, 0.4366, 0.5751, 0.6919, 0.4422, 0.5756, 0.6879, 0,
      0, 0, 0.1929, 0.7501, 0.6326, 0.1871, 0.7523, 0.6317, 0.1821, 0.7517, 0.6339, 0.1725, 0.7552, 0.6325, 0.1688,
      0.7543, 0.6344, 0.1639, 0.7496, 0.6413, 0.1546, 0.7533, 0.6392, 0.147, 0.7582, 0.6352, 0.1407, 0.7609, 0.6334,
      0.1383, 0.7657, 0.6282, 0.1355, 0.769, 0.6247, 0.1428, 0.7714, 0.6201, 0.146, 0.7742, 0.6159, 0.1531, 0.7763,
      0.6114, 0.1551, 0.7784, 0.6083, 0.1583, 0.7772, 0.609, 0.1627, 0.7783, 0.6064, 0.1689, 0.7748, 0.6093, 0.1771,
      0.7738, 0.6081, 0.1775, 0.7708, 0.6119, 0.1841, 0.7685, 0.6128, 0.1847, 0.7713, 0.609, 0.1924, 0.7701, 0.6082,
      0.1947, 0.7666, 0.6119, 0.2029, 0.7659, 0.6101, 0.2099, 0.7604, 0.6147, 0.2067, 0.7603, 0.6158, 0.2058, 0.7583,
      0.6186, 0.2035, 0.7578, 0.6199, 0.2037, 0.7552, 0.623, 0.2018, 0.7547, 0.6243, 0.2019, 0.7536, 0.6256, 0.1986,
      0.7524, 0.628, 0.1936, 0.7526, 0.6294, 0.1929, 0.7501, 0.6326, 0, 0, 0, 0.1546, 0.7533, 0.6392, 0.152, 0.748,
      0.6461, 0.1484, 0.7465, 0.6486, 0.1519, 0.7389, 0.6565, 0.1513, 0.7369, 0.6589, 0.1471, 0.7393, 0.6571, 0.1415,
      0.7397, 0.6579, 0.1338, 0.7376, 0.6619, 0.1235, 0.7381, 0.6633, 0.1224, 0.7349, 0.667, 0.1159, 0.7382, 0.6645,
      0.1125, 0.7376, 0.6658, 0.0995, 0.7412, 0.6639, 0.0975, 0.7386, 0.667, 0.0876, 0.7387, 0.6683, 0.0879, 0.747,
      0.659, 0.0924, 0.7549, 0.6493, 0.0758, 0.757, 0.649, 0.07, 0.76, 0.6461, 0.07, 0.7649, 0.6403, 0.0675, 0.7675,
      0.6375, 0.0678, 0.775, 0.6283, 0.0644, 0.7864, 0.6143, 0.0709, 0.7864, 0.6136, 0.073, 0.7905, 0.6082, 0.0741,
      0.8001, 0.5952, 0.0715, 0.8037, 0.5908, 0.0732, 0.8059, 0.5876, 0.0816, 0.8064, 0.5857, 0.084, 0.8041, 0.5885,
      0.0899, 0.8092, 0.5806, 0.0868, 0.8131, 0.5757, 0.0851, 0.8188, 0.5678, 0.0929, 0.8175, 0.5685, 0.0989, 0.819,
      0.5652, 0.1, 0.8151, 0.5706, 0.1107, 0.8127, 0.572, 0.1115, 0.8091, 0.577, 0.1212, 0.811, 0.5723, 0.126, 0.8138,
      0.5673, 0.1384, 0.8098, 0.5702, 0.1442, 0.8065, 0.5733, 0.1483, 0.8012, 0.5797, 0.1464, 0.7984, 0.584, 0.1513,
      0.7947, 0.5879, 0.1558, 0.789, 0.5944, 0.1561, 0.7853, 0.5991, 0.1627, 0.7783, 0.6064, 0.1583, 0.7772, 0.609,
      0.1551, 0.7784, 0.6083, 0.1531, 0.7763, 0.6114, 0.146, 0.7742, 0.6159, 0.1428, 0.7714, 0.6201, 0.1355, 0.769,
      0.6247, 0.1383, 0.7657, 0.6282, 0.1407, 0.7609, 0.6334, 0.147, 0.7582, 0.6352, 0.1546, 0.7533, 0.6392, 0, 0, 0,
      0.6663, 0.2198, 0.7125, 0.6701, 0.2146, 0.7106, 0.6707, 0.2075, 0.7121, 0.6642, 0.2034, 0.7194, 0.6702, 0.1987,
      0.7151, 0.6668, 0.1896, 0.7207, 0.6636, 0.1926, 0.7228, 0.6607, 0.1914, 0.7258, 0.6536, 0.1917, 0.7322, 0.6527,
      0.1969, 0.7316, 0.6511, 0.2016, 0.7317, 0.6543, 0.2096, 0.7266, 0.6576, 0.2172, 0.7214, 0.6632, 0.2157, 0.7167,
      0.6663, 0.2198, 0.7125, 0, 0, 0, 0.0989, 0.819, 0.5652, 0.0929, 0.8175, 0.5685, 0.0851, 0.8188, 0.5678, 0.08,
      0.8243, 0.5605, 0.0776, 0.8343, 0.5459, 0.0786, 0.8369, 0.5417, 0.0807, 0.8397, 0.537, 0.0888, 0.8403, 0.5348,
      0.0914, 0.8429, 0.5303, 0.098, 0.8455, 0.5248, 0.0991, 0.8407, 0.5323, 0.0972, 0.8376, 0.5375, 0.0991, 0.8349,
      0.5413, 0.1046, 0.8335, 0.5425, 0.1033, 0.8298, 0.5484, 0.1002, 0.8309, 0.5474, 0.095, 0.8238, 0.5588, 0.0989,
      0.819, 0.5652, 0, 0, 0, 0.1241, 0.8252, 0.551, 0.1207, 0.8171, 0.5636, 0.1089, 0.8228, 0.5578, 0.1064, 0.8269,
      0.5522, 0.1195, 0.8301, 0.5446, 0.1241, 0.8252, 0.551, 0, 0, 0, -0.8938, 0.3373, 0.2954, -0.8922, 0.3401, 0.297,
      -0.8881, 0.3401, 0.3092, -0.8863, 0.3358, 0.3188, -0.8847, 0.3362, 0.3229, -0.8856, 0.3304, 0.3264, -0.8823,
      0.3307, 0.3348, -0.8841, 0.3258, 0.3349, -0.8817, 0.3252, 0.3418, -0.8806, 0.3192, 0.3501, -0.885, 0.3124, 0.3452,
      -0.8867, 0.316, 0.3375, -0.8896, 0.3153, 0.3304, -0.8912, 0.3161, 0.3252, -0.8932, 0.3131, 0.3227, -0.8957,
      0.3121, 0.3169, -0.8952, 0.3161, 0.314, -0.8978, 0.3137, 0.3091, -0.9034, 0.3023, 0.304, -0.904, 0.305, 0.2997,
      -0.9028, 0.3098, 0.2984, -0.9013, 0.3143, 0.2983, -0.901, 0.3192, 0.2937, -0.8989, 0.322, 0.2972, -0.8964, 0.3284,
      0.2978, -0.8938, 0.3373, 0.2954, 0, 0, 0, 0.0703, 0.3281, 0.942, 0.0521, 0.3265, 0.9438, 0.0517, 0.337, 0.9401,
      0.044, 0.3397, 0.9395, 0.0338, 0.3444, 0.9382, 0.0298, 0.352, 0.9355, -0.0249, 0.3874, 0.9216, -0.0778, 0.4222,
      0.9032, -0.1341, 0.4601, 0.8777, -0.1335, 0.4631, 0.8762, -0.1335, 0.4642, 0.8756, -0.1321, 0.4824, 0.8659,
      -0.1069, 0.4936, 0.8631, -0.0917, 0.4959, 0.8635, -0.0791, 0.5, 0.8624, -0.073, 0.5076, 0.8585, -0.0552, 0.5135,
      0.8563, -0.0542, 0.5245, 0.8497, -0.0455, 0.5258, 0.8494, -0.0387, 0.5313, 0.8463, -0.0193, 0.5338, 0.8454,
      -0.0165, 0.5395, 0.8418, -0.0203, 0.5426, 0.8397, -0.0251, 0.558, 0.8294, -0.0258, 0.5668, 0.8234, -0.031, 0.576,
      0.8169, -0.0171, 0.5838, 0.8118, -0.0018, 0.5862, 0.8102, 0.0071, 0.592, 0.8059, 0.0206, 0.5963, 0.8025, 0.0442,
      0.5988, 0.7997, 0.0672, 0.5999, 0.7972, 0.0743, 0.5979, 0.7982, 0.087, 0.6034, 0.7927, 0.1017, 0.6035, 0.7909,
      0.1077, 0.6002, 0.7926, 0.117, 0.6011, 0.7906, 0.115, 0.5939, 0.7963, 0.1186, 0.5804, 0.8056, 0.1165, 0.5686,
      0.8143, 0.1084, 0.5606, 0.821, 0.1107, 0.5497, 0.828, 0.1233, 0.541, 0.832, 0.1238, 0.5374, 0.8342, 0.1333,
      0.5314, 0.8365, 0.1422, 0.5046, 0.8515, 0.1483, 0.4913, 0.8583, 0.1498, 0.4842, 0.862, 0.1483, 0.4717, 0.8692,
      0.1501, 0.4647, 0.8727, 0.1489, 0.4562, 0.8773, 0.151, 0.4464, 0.882, 0.1454, 0.4399, 0.8862, 0.1555, 0.4284,
      0.8901, 0.1567, 0.4216, 0.8931, 0.1629, 0.4128, 0.8961, 0.17, 0.4157, 0.8935, 0.1829, 0.4083, 0.8943, 0.1907,
      0.3983, 0.8972, 0.1386, 0.3676, 0.9196, 0.0932, 0.3355, 0.9374, 0.0703, 0.3281, 0.942, 0, 0, 0, -0.9809, 0.0241,
      0.1932, -0.9775, 0.0141, 0.2104, -0.9768, 0.0144, 0.2135, -0.976, 0.0069, 0.2177, -0.9727, 0.0045, 0.2321,
      -0.9715, 0.0073, 0.237, -0.9695, 0.0015, 0.2453, -0.9676, -0.0027, 0.2525, -0.9669, -0.0159, 0.2548, -0.968,
      -0.0273, 0.2495, -0.9719, -0.0455, 0.2309, -0.9762, -0.0524, 0.2104, -0.9775, -0.0675, 0.1998, -0.9773, -0.0793,
      0.1964, -0.9786, -0.0864, 0.1866, -0.9807, -0.0777, 0.1795, -0.9821, -0.0758, 0.1727, -0.9832, -0.0772, 0.1655,
      -0.9837, -0.0708, 0.1652, -0.9832, -0.0666, 0.1701, -0.984, -0.0594, 0.1681, -0.983, -0.0464, 0.1774, -0.984,
      -0.0388, 0.1737, -0.9848, -0.0468, 0.1671, -0.9868, -0.0392, 0.1569, -0.9865, -0.0343, 0.1604, -0.9873, -0.0185,
      0.1576, -0.9864, -0.0158, 0.1636, -0.986, -0.005, 0.1668, -0.9849, 0.0063, 0.1733, -0.985, 0.0134, 0.1721,
      -0.9832, 0.0172, 0.1815, -0.9809, 0.0241, 0.1932, 0, 0, 0, 0.5563, 0.3746, 0.7418, 0.5036, 0.3746, 0.7785, 0.4498,
      0.3746, 0.8108, 0.3918, 0.3746, 0.8403, 0.3809, 0.4334, 0.8168, 0.3688, 0.4884, 0.7908, 0.3617, 0.5007, 0.7864,
      0.363, 0.51, 0.7799, 0.3592, 0.5164, 0.7774, 0.3623, 0.5235, 0.7711, 0.38, 0.5238, 0.7624, 0.3939, 0.5198, 0.758,
      0.4082, 0.5154, 0.7534, 0.415, 0.5131, 0.7513, 0.4236, 0.5178, 0.7432, 0.4277, 0.5221, 0.7379, 0.4386, 0.5233,
      0.7306, 0.4482, 0.5215, 0.7261, 0.454, 0.514, 0.7277, 0.4554, 0.5189, 0.7234, 0.4667, 0.5154, 0.7187, 0.4767,
      0.5146, 0.7128, 0.4815, 0.5183, 0.7068, 0.4815, 0.5183, 0.7068, 0.4957, 0.4964, 0.7126, 0.4982, 0.4924, 0.7136,
      0.4967, 0.4863, 0.7189, 0.4976, 0.4748, 0.726, 0.4965, 0.4667, 0.7319, 0.4943, 0.464, 0.735, 0.4886, 0.469,
      0.7357, 0.4808, 0.4759, 0.7365, 0.465, 0.4977, 0.7321, 0.4641, 0.4964, 0.7336, 0.4743, 0.4803, 0.7378, 0.4867,
      0.4648, 0.7396, 0.5033, 0.4406, 0.7433, 0.5105, 0.4321, 0.7435, 0.517, 0.4232, 0.7441, 0.5333, 0.4056, 0.7424,
      0.5314, 0.4028, 0.7452, 0.5345, 0.3924, 0.7486, 0.5532, 0.3779, 0.7424, 0.5563, 0.3746, 0.7418, 0, 0, 0, 0.6663,
      0.2198, 0.7125, 0.6632, 0.2157, 0.7167, 0.6576, 0.2172, 0.7214, 0.6525, 0.2227, 0.7244, 0.6457, 0.2326, 0.7273,
      0.6392, 0.2381, 0.7313, 0.6349, 0.2439, 0.7331, 0.6226, 0.2507, 0.7413, 0.6136, 0.2509, 0.7487, 0.6099, 0.2544,
      0.7505, 0.6028, 0.2505, 0.7575, 0.5935, 0.2581, 0.7623, 0.5914, 0.2455, 0.7681, 0.5751, 0.2491, 0.7792, 0.5726,
      0.2558, 0.7789, 0.5744, 0.2805, 0.769, 0.5737, 0.2916, 0.7654, 0.5769, 0.2968, 0.761, 0.5861, 0.2995, 0.7528,
      0.5909, 0.309, 0.7452, 0.6022, 0.2897, 0.7439, 0.6086, 0.2743, 0.7445, 0.6172, 0.2662, 0.7404, 0.6375, 0.2502,
      0.7287, 0.6461, 0.2406, 0.7243, 0.6546, 0.2308, 0.7199, 0.6594, 0.225, 0.7173, 0.6663, 0.2198, 0.7125, 0, 0, 0,
      -0.1169, 0.6676, 0.7353, -0.115, 0.6768, 0.7272, -0.1193, 0.6823, 0.7212, -0.1003, 0.6915, 0.7154, -0.0852,
      0.6892, 0.7195, -0.0683, 0.6893, 0.7213, -0.0551, 0.6871, 0.7244, -0.0445, 0.6878, 0.7245, -0.0241, 0.6874,
      0.7259, -0.0192, 0.6824, 0.7307, 0.0043, 0.6766, 0.7363, 0.009, 0.6794, 0.7337, 0.0236, 0.6736, 0.7387, 0.0384,
      0.6752, 0.7366, 0.0395, 0.6677, 0.7434, 0.0275, 0.659, 0.7516, 0.0107, 0.6563, 0.7545, 0.0095, 0.6518, 0.7583,
      0.0014, 0.6444, 0.7647, -0.0038, 0.6335, 0.7737, 0.0015, 0.6258, 0.78, -0.0064, 0.6197, 0.7848, -0.0094, 0.6107,
      0.7918, -0.0199, 0.608, 0.7937, -0.03, 0.5973, 0.8015, -0.0478, 0.597, 0.8008, -0.0611, 0.5973, 0.7997, -0.0702,
      0.5924, 0.8026, -0.0759, 0.587, 0.806, -0.0827, 0.5882, 0.8045, -0.0875, 0.593, 0.8005, -0.0908, 0.601, 0.7941,
      -0.1035, 0.6032, 0.7909, -0.1042, 0.6078, 0.7872, -0.0986, 0.613, 0.7839, -0.0963, 0.6167, 0.7813, -0.1006,
      0.6208, 0.7775, -0.096, 0.6297, 0.7709, -0.1005, 0.6378, 0.7636, -0.0946, 0.6389, 0.7634, -0.0935, 0.6453, 0.7582,
      -0.0911, 0.6472, 0.7569, -0.0899, 0.6575, 0.7481, -0.0835, 0.6611, 0.7457, -0.0865, 0.6676, 0.7395, -0.0939,
      0.6681, 0.7381, -0.0963, 0.6664, 0.7393, -0.1039, 0.6664, 0.7383, -0.1063, 0.6728, 0.7322, -0.1118, 0.6709,
      0.7331, -0.1169, 0.6676, 0.7353, 0, 0, 0, 0.2194, 0.8461, 0.4857, 0.2168, 0.8516, 0.4773, 0.2145, 0.8504, 0.4804,
      0.2071, 0.8537, 0.4779, 0.2029, 0.8588, 0.4703, 0.2115, 0.8613, 0.4619, 0.2207, 0.8626, 0.4552, 0.2304, 0.8611,
      0.4532, 0.2383, 0.8614, 0.4485, 0.2383, 0.8614, 0.4485, 0.2383, 0.8614, 0.4485, 0.2407, 0.8599, 0.4502, 0.2391,
      0.8547, 0.4608, 0.2479, 0.8461, 0.4718, 0.2465, 0.8432, 0.4778, 0.2396, 0.8432, 0.4813, 0.23, 0.8466, 0.4799,
      0.2255, 0.8478, 0.48, 0.2194, 0.8461, 0.4857, 0, 0, 0, 0.6576, 0.2172, 0.7214, 0.6543, 0.2096, 0.7266, 0.6511,
      0.2016, 0.7317, 0.6527, 0.1969, 0.7316, 0.6536, 0.1917, 0.7322, 0.6607, 0.1914, 0.7258, 0.6636, 0.1926, 0.7228,
      0.6668, 0.1896, 0.7207, 0.6649, 0.1835, 0.7241, 0.6707, 0.174, 0.721, 0.6763, 0.1657, 0.7177, 0.6818, 0.1596,
      0.714, 0.7236, 0.1391, 0.676, 0.7335, 0.1392, 0.6653, 0.704, 0.0872, 0.7049, 0.6878, 0.0864, 0.7207, 0.6772,
      0.0742, 0.7321, 0.669, 0.0738, 0.7396, 0.6657, 0.0683, 0.7431, 0.6568, 0.0683, 0.751, 0.6512, 0.0742, 0.7553,
      0.6394, 0.0669, 0.7659, 0.6357, 0.0597, 0.7696, 0.6267, 0.0611, 0.7769, 0.6236, 0.0631, 0.7792, 0.6204, 0.0626,
      0.7818, 0.6161, 0.0628, 0.7852, 0.598, 0.0776, 0.7977, 0.5883, 0.0776, 0.805, 0.5832, 0.0833, 0.8081, 0.5827,
      0.093, 0.8074, 0.5752, 0.0959, 0.8124, 0.5656, 0.1148, 0.8166, 0.5588, 0.1189, 0.8207, 0.5558, 0.1258, 0.8217,
      0.5479, 0.1342, 0.8257, 0.539, 0.1355, 0.8314, 0.5431, 0.1453, 0.827, 0.5507, 0.1457, 0.8219, 0.5524, 0.151,
      0.8198, 0.5508, 0.1665, 0.8178, 0.5533, 0.1845, 0.8123, 0.5594, 0.1893, 0.807, 0.5601, 0.1963, 0.8049, 0.5645,
      0.2093, 0.7984, 0.5718, 0.2178, 0.791, 0.5751, 0.2345, 0.7838, 0.5751, 0.2491, 0.7792, 0.5914, 0.2455, 0.7681,
      0.5935, 0.2581, 0.7623, 0.6028, 0.2505, 0.7575, 0.6099, 0.2544, 0.7505, 0.6136, 0.2509, 0.7487, 0.6226, 0.2507,
      0.7413, 0.6349, 0.2439, 0.7331, 0.6392, 0.2381, 0.7313, 0.6457, 0.2326, 0.7273, 0.6525, 0.2227, 0.7244, 0.6576,
      0.2172, 0.7214, 0, 0, 0, 0.1648, 0.9136, 0.3717, 0.1601, 0.9163, 0.367, 0.15, 0.9268, 0.3444, 0.1365, 0.9312,
      0.3381, 0.1257, 0.9342, 0.3337, 0.1277, 0.9359, 0.3284, 0.1373, 0.9326, 0.3338, 0.1445, 0.9329, 0.3299, 0.1523,
      0.9314, 0.3307, 0.1547, 0.9342, 0.3216, 0.1522, 0.9386, 0.3095, 0.1579, 0.9407, 0.3003, 0.1678, 0.9383, 0.3024,
      0.171, 0.934, 0.3137, 0.1756, 0.9295, 0.3242, 0.1896, 0.9252, 0.3287, 0.1902, 0.9201, 0.3423, 0.2063, 0.9122,
      0.3541, 0.2088, 0.9059, 0.3684, 0.2205, 0.9004, 0.3752, 0.2229, 0.8953, 0.3856, 0.2384, 0.89, 0.3888, 0.2399,
      0.8859, 0.3971, 0.2379, 0.8811, 0.4086, 0.2317, 0.8704, 0.4345, 0.2317, 0.8704, 0.4345, 0.2317, 0.8704, 0.4345,
      0.2183, 0.8697, 0.4427, 0.207, 0.8665, 0.4542, 0.1952, 0.8647, 0.4628, 0.1874, 0.8694, 0.4571, 0.1778, 0.8722,
      0.4556, 0.1741, 0.8805, 0.4409, 0.1653, 0.8879, 0.4294, 0.1656, 0.8925, 0.4195, 0.1684, 0.8974, 0.4078, 0.1774,
      0.9056, 0.3853, 0.1805, 0.9071, 0.3802, 0.177, 0.9102, 0.3744, 0.1648, 0.9136, 0.3717, 0, 0, 0, 0.0271, -0.298,
      -0.9542, 0.0213, -0.3028, -0.9528, 0.024, -0.3115, -0.9499, 0.0343, -0.3138, -0.9489, 0.0434, -0.3117, -0.9492,
      0.0451, -0.3044, -0.9515, 0.0388, -0.2987, -0.9536, 0.0312, -0.3008, -0.9532, 0.0271, -0.298, -0.9542, 0, 0, 0,
      0.0106, -0.2891, -0.9573, 0.0213, -0.2926, -0.956, 0.0235, -0.2863, -0.9578, 0.0151, -0.2829, -0.959, 0.0098,
      -0.282, -0.9594, 0, -0.2768, -0.9609, 0, -0.2849, -0.9585, 0.0106, -0.2891, -0.9573, 0, 0, 0, -0.0014, -0.284,
      -0.9588, -0, -0.2849, -0.9585, -0, -0.2768, -0.9609, -0.0035, -0.276, -0.9612, -0.0014, -0.284, -0.9588, 0, 0, 0,
      -0.5413, -0.7864, 0.2976, -0.5421, -0.7799, 0.313, -0.5344, -0.7826, 0.3192, -0.5357, -0.7782, 0.3276, -0.5259,
      -0.7832, 0.3318, -0.5236, -0.7869, 0.3265, -0.5276, -0.7902, 0.312, -0.5342, -0.7864, 0.3103, -0.5333, -0.7912,
      0.2993, -0.5413, -0.7864, 0.2976, 0, 0, 0, 0.0275, 0.7788, 0.6267, 0.0293, 0.7749, 0.6314, 0.0344, 0.7747, 0.6314,
      0.0399, 0.7703, 0.6365, 0.0481, 0.765, 0.6422, 0.0538, 0.7659, 0.6407, 0.0642, 0.7607, 0.6459, 0.0668, 0.7598,
      0.6468, 0.07, 0.76, 0.6461, 0.0758, 0.757, 0.649, 0.0924, 0.7549, 0.6493, 0.0879, 0.747, 0.659, 0.0876, 0.7387,
      0.6683, 0.0847, 0.7367, 0.6709, 0.0792, 0.7378, 0.6704, 0.0799, 0.7348, 0.6736, 0.0721, 0.7281, 0.6817, 0.0725,
      0.7226, 0.6874, 0.078, 0.7245, 0.6848, 0.0828, 0.7192, 0.6898, 0.0827, 0.7158, 0.6934, 0.0868, 0.7112, 0.6976,
      0.0831, 0.7075, 0.7019, 0.0874, 0.6979, 0.7109, 0.0943, 0.6963, 0.7116, 0.0936, 0.6908, 0.717, 0.083, 0.6836,
      0.7251, 0.0577, 0.6871, 0.7243, 0.0395, 0.683, 0.7294, 0.0384, 0.6752, 0.7366, 0.0236, 0.6736, 0.7387, 0.009,
      0.6794, 0.7337, 0.0043, 0.6766, 0.7363, -0.0192, 0.6824, 0.7307, -0.0241, 0.6874, 0.7259, -0.0174, 0.6949, 0.7189,
      -0.0145, 0.7195, 0.6943, -0.0265, 0.7321, 0.6807, -0.0349, 0.7381, 0.6738, -0.0524, 0.7426, 0.6677, -0.0529,
      0.7511, 0.6581, -0.0378, 0.7536, 0.6563, -0.0186, 0.7506, 0.6605, -0.0218, 0.7635, 0.6454, -0.0113, 0.7587,
      0.6514, 0.015, 0.7675, 0.6409, 0.018, 0.7766, 0.6298, 0.0275, 0.7788, 0.6267, 0, 0, 0, -0.7823, 0.0725, 0.6187,
      -0.7894, 0.0565, 0.6112, -0.7932, 0.0437, 0.6074, -0.7975, 0.0371, 0.6022, -0.8025, 0.0358, 0.5956, -0.8038,
      0.0407, 0.5936, -0.806, 0.0415, 0.5904, -0.8094, 0.0367, 0.5861, -0.8137, 0.0403, 0.5799, -0.8109, 0.0478, 0.5833,
      -0.8096, 0.0557, 0.5843, -0.8075, 0.0632, 0.5864, -0.8109, 0.0735, 0.5806, -0.8109, 0.0854, 0.5789, -0.8045,
      0.1003, 0.5854, -0.8012, 0.0984, 0.5903, -0.7938, 0.0943, 0.6008, -0.7836, 0.0796, 0.6161, -0.7823, 0.0725,
      0.6187, 0, 0, 0, 0.1231, 0.6711, 0.7311, 0.1204, 0.6611, 0.7406, 0.1141, 0.6637, 0.7392, 0.11, 0.6725, 0.7319,
      0.1119, 0.6772, 0.7272, 0.1193, 0.6821, 0.7214, 0.1231, 0.6711, 0.7311, 0, 0, 0, 0.1954, 0.0395, 0.9799, 0.2035,
      0.0406, 0.9782, 0.2139, 0.0383, 0.9761, 0.2239, 0.0405, 0.9738, 0.2261, 0.0396, 0.9733, 0.2249, 0.0319, 0.9739,
      0.2297, 0.0229, 0.973, 0.2423, 0.0244, 0.9699, 0.2465, 0.0209, 0.9689, 0.2393, 7e-4, 0.971, 0.2473, -0.0096,
      0.9689, 0.2491, -0.0233, 0.9682, 0.2468, -0.0349, 0.9684, 0.2416, -0.0431, 0.9694, 0.2266, -0.0424, 0.9731,
      0.2176, -0.034, 0.9754, 0.2162, -0.0417, 0.9755, 0.2047, -0.0439, 0.9779, 0.1988, -0.0483, 0.9789, 0.2051,
      -0.0598, 0.9769, 0.192, -0.0694, 0.9789, 0.1746, -0.0518, 0.9833, 0.1633, -0.0374, 0.9859, 0.1529, -0.0194, 0.988,
      0.1535, -0.0136, 0.9881, 0.1573, -0.008, 0.9875, 0.1615, 0.0047, 0.9869, 0.1649, 0.0176, 0.9862, 0.1707, 0.0186,
      0.9851, 0.1957, 0.0185, 0.9805, 0.1954, 0.0395, 0.9799, 0, 0, 0, -0.0637, 0.8077, 0.5862, -0.071, 0.8098, 0.5824,
      -0.0773, 0.8096, 0.5818, -0.0743, 0.8151, 0.5746, -0.0753, 0.8205, 0.5667, -0.067, 0.8209, 0.5672, -0.0572,
      0.8147, 0.5771, -0.0637, 0.8077, 0.5862, 0, 0, 0, -0.0273, 0.8539, 0.5198, -0.0381, 0.8439, 0.5352, -0.0285,
      0.8452, 0.5337, -0.0183, 0.8451, 0.5343, -0.0212, 0.8374, 0.5461, -0.0304, 0.8288, 0.5587, -0.0204, 0.8282,
      0.5601, -0.0197, 0.8271, 0.5617, -0.0113, 0.8154, 0.5788, -0.0044, 0.8138, 0.5812, 0.0019, 0.802, 0.5973, 0.0049,
      0.7979, 0.6028, 0.0178, 0.7959, 0.6052, 0.0167, 0.7891, 0.6141, 0.0113, 0.7859, 0.6182, 0.0158, 0.7803, 0.6252,
      0.0061, 0.7746, 0.6325, -0.0087, 0.7747, 0.6323, -0.0276, 0.7716, 0.6355, -0.0327, 0.7738, 0.6326, -0.0404,
      0.7686, 0.6385, -0.0505, 0.7699, 0.6362, -0.0588, 0.7656, 0.6406, -0.0645, 0.7678, 0.6374, -0.0471, 0.7794,
      0.6247, -0.0371, 0.7818, 0.6224, -0.0372, 0.7818, 0.6224, -0.054, 0.7836, 0.6189, -0.0565, 0.7879, 0.6132, -0.045,
      0.7912, 0.6098, -0.0502, 0.797, 0.602, -0.0475, 0.8038, 0.593, -0.0322, 0.8029, 0.5953, -0.0322, 0.8029, 0.5953,
      -0.0302, 0.8089, 0.5872, -0.0365, 0.8151, 0.5781, -0.0367, 0.8153, 0.5779, -0.0487, 0.8171, 0.5745, -0.0507,
      0.8198, 0.5704, -0.0466, 0.8242, 0.5644, -0.0495, 0.8269, 0.5601, -0.0554, 0.8223, 0.5664, -0.0546, 0.8317,
      0.5525, -0.0587, 0.8366, 0.5446, -0.0537, 0.8464, 0.5299, -0.0455, 0.8538, 0.5186, -0.0383, 0.8531, 0.5203,
      -0.0273, 0.8539, 0.5198, 0, 0, 0, 0.5314, 0.6593, 0.5319, 0.5196, 0.6573, 0.5459, 0.5065, 0.6637, 0.5504, 0.4965,
      0.6631, 0.5602, 0.4947, 0.6686, 0.5552, 0.487, 0.6775, 0.5513, 0.4785, 0.6822, 0.5529, 0.4722, 0.6836, 0.5564,
      0.4663, 0.6875, 0.5566, 0.4666, 0.689, 0.5546, 0.4761, 0.6869, 0.5492, 0.4913, 0.6848, 0.5382, 0.5079, 0.6787,
      0.5305, 0.5111, 0.6763, 0.5305, 0.5154, 0.6783, 0.5237, 0.5256, 0.6756, 0.517, 0.5318, 0.6703, 0.5176, 0.5394,
      0.6673, 0.5136, 0.5382, 0.6655, 0.5171, 0.5472, 0.6584, 0.5168, 0.5469, 0.6569, 0.519, 0.5415, 0.6577, 0.5236,
      0.5323, 0.6615, 0.5283, 0.5314, 0.6593, 0.5319, 0, 0, 0, -0.0486, 0.1675, 0.9847, -0.0509, 0.1804, 0.9823,
      -0.0504, 0.1902, 0.9805, -0.0206, 0.191, 0.9814, -0.0131, 0.1897, 0.9817, -0.0075, 0.1925, 0.9813, 4e-4, 0.1911,
      0.9816, -9e-4, 0.1858, 0.9826, 0.0063, 0.1769, 0.9842, 0.0063, 0.1644, 0.9864, 0.008, 0.1509, 0.9885, 0.0123,
      0.1446, 0.9894, 0.0085, 0.129, 0.9916, 0.0099, 0.1204, 0.9927, 0.0145, 0.1094, 0.9939, 0.0184, 0.1033, 0.9945,
      -0.0088, 0.0931, 0.9956, -0.0185, 0.0872, 0.996, -0.0342, 0.0821, 0.996, -0.0496, 0.0871, 0.995, -0.0488, 0.0939,
      0.9944, -0.0563, 0.1089, 0.9925, -0.0516, 0.1284, 0.9904, -0.0442, 0.143, 0.9887, -0.0486, 0.1675, 0.9847, 0, 0,
      0, -0.1375, 0.1772, 0.9745, -0.1409, 0.1759, 0.9743, -0.1424, 0.17, 0.9751, -0.1387, 0.1629, 0.9768, -0.1347,
      0.1491, 0.9796, -0.1411, 0.147, 0.979, -0.1428, 0.1446, 0.9791, -0.1416, 0.1413, 0.9798, -0.1427, 0.1338, 0.9807,
      -0.1454, 0.1337, 0.9803, -0.1503, 0.1342, 0.9795, -0.1539, 0.1272, 0.9799, -0.1587, 0.1273, 0.9791, -0.162, 0.131,
      0.9781, -0.1607, 0.1379, 0.9773, -0.1676, 0.1485, 0.9746, -0.1721, 0.1466, 0.9741, -0.1757, 0.1462, 0.9735,
      -0.1804, 0.1452, 0.9728, -0.18, 0.1515, 0.9719, -0.1826, 0.156, 0.9707, -0.1819, 0.1611, 0.97, -0.1854, 0.1683,
      0.9682, -0.1899, 0.1744, 0.9662, -0.2033, 0.1745, 0.9634, -0.2074, 0.1712, 0.9632, -0.212, 0.1708, 0.9622, -0.215,
      0.1671, 0.9622, -0.2171, 0.1623, 0.9625, -0.2264, 0.1548, 0.9617, -0.2333, 0.165, 0.9583, -0.2396, 0.1717, 0.9556,
      -0.2437, 0.1739, 0.9541, -0.2477, 0.1773, 0.9525, -0.2493, 0.1849, 0.9506, -0.2515, 0.1887, 0.9493, -0.2562,
      0.1915, 0.9475, -0.2484, 0.1998, 0.9478, -0.2434, 0.1995, 0.9492, -0.2389, 0.2024, 0.9497, -0.2353, 0.2024,
      0.9506, -0.2325, 0.2047, 0.9508, -0.2337, 0.2103, 0.9493, -0.2318, 0.2121, 0.9494, -0.2312, 0.2179, 0.9482,
      -0.2232, 0.2177, 0.9502, -0.2114, 0.2136, 0.9538, -0.2077, 0.214, 0.9545, -0.2064, 0.2159, 0.9544, -0.1974,
      0.2145, 0.9566, -0.1949, 0.2155, 0.9569, -0.1942, 0.2092, 0.9584, -0.1916, 0.2092, 0.9589, -0.1871, 0.2115,
      0.9593, -0.1844, 0.2109, 0.96, -0.1799, 0.2066, 0.9617, -0.1727, 0.2052, 0.9633, -0.168, 0.2089, 0.9634, -0.1625,
      0.2112, 0.9638, -0.1583, 0.2136, 0.964, -0.155, 0.2132, 0.9646, -0.1514, 0.2094, 0.966, -0.1495, 0.2047, 0.9673,
      -0.1428, 0.1975, 0.9698, -0.1464, 0.1931, 0.9702, -0.1472, 0.1876, 0.9712, -0.1436, 0.1893, 0.9714, -0.1415,
      0.1873, 0.9721, -0.1425, 0.1821, 0.9729, -0.1375, 0.1772, 0.9745, 0, 0, 0, -0.2821, 0.2275, 0.932, -0.2795,
      0.2351, 0.9309, -0.2618, 0.2355, 0.936, -0.2578, 0.2396, 0.936, -0.2526, 0.2398, 0.9374, -0.2464, 0.2357, 0.9401,
      -0.2413, 0.2356, 0.9414, -0.2357, 0.2384, 0.9421, -0.2327, 0.2335, 0.9441, -0.24, 0.2297, 0.9432, -0.2472, 0.23,
      0.9413, -0.254, 0.2336, 0.9386, -0.2603, 0.2297, 0.9378, -0.2632, 0.2295, 0.937, -0.2673, 0.2272, 0.9365, -0.2821,
      0.2275, 0.932, 0, 0, 0, -0.2312, 0.2179, 0.9482, -0.2318, 0.2121, 0.9494, -0.2337, 0.2103, 0.9493, -0.2325,
      0.2047, 0.9508, -0.2353, 0.2024, 0.9506, -0.2389, 0.2024, 0.9497, -0.2434, 0.1995, 0.9492, -0.2484, 0.1998,
      0.9478, -0.2562, 0.1915, 0.9475, -0.2646, 0.1987, 0.9437, -0.2715, 0.1998, 0.9415, -0.275, 0.2046, 0.9394,
      -0.2747, 0.2072, 0.9389, -0.2795, 0.2108, 0.9367, -0.2803, 0.2145, 0.9356, -0.2715, 0.2173, 0.9376, -0.2661,
      0.2167, 0.9393, -0.2616, 0.2186, 0.9401, -0.2312, 0.2179, 0.9482, 0, 0, 0, 0.1675, 0.0399, 0.9851, 0.1954, 0.0395,
      0.9799, 0.1957, 0.0185, 0.9805, 0.1707, 0.0186, 0.9851, 0.1649, 0.0176, 0.9862, 0.1617, 0.0203, 0.9866, 0.1675,
      0.0399, 0.9851, 0, 0, 0, 0.2653, 0.6378, 0.7231, 0.2693, 0.6443, 0.7158, 0.2687, 0.6486, 0.7121, 0.2722, 0.6505,
      0.7091, 0.2714, 0.654, 0.7062, 0.279, 0.6552, 0.7021, 0.2828, 0.658, 0.6979, 0.2894, 0.6578, 0.6954, 0.2906,
      0.6601, 0.6927, 0.2928, 0.6605, 0.6914, 0.3018, 0.6601, 0.6879, 0.3101, 0.6637, 0.6807, 0.3202, 0.6591, 0.6805,
      0.3304, 0.6604, 0.6743, 0.328, 0.6669, 0.6691, 0.3351, 0.6634, 0.669, 0.3346, 0.6552, 0.6773, 0.3324, 0.6537,
      0.6798, 0.325, 0.6541, 0.683, 0.3183, 0.6554, 0.685, 0.305, 0.6519, 0.6943, 0.316, 0.6445, 0.6963, 0.3105, 0.6423,
      0.7007, 0.3037, 0.6423, 0.7037, 0.2949, 0.6491, 0.7012, 0.2936, 0.6462, 0.7044, 0.2989, 0.6382, 0.7094, 0.3072,
      0.6319, 0.7116, 0.3034, 0.6289, 0.7158, 0.3124, 0.6227, 0.7174, 0.3199, 0.6187, 0.7176, 0.3225, 0.6109, 0.723,
      0.3097, 0.6146, 0.7255, 0.3156, 0.6075, 0.7289, 0.3079, 0.6061, 0.7334, 0.3164, 0.5937, 0.7398, 0.3079, 0.5936,
      0.7436, 0.2955, 0.5997, 0.7437, 0.2876, 0.6108, 0.7377, 0.2827, 0.6199, 0.732, 0.276, 0.6262, 0.7292, 0.2673,
      0.6339, 0.7257, 0.2653, 0.6378, 0.7231, 0, 0, 0, 0.3264, 0.5836, 0.7435, 0.3349, 0.5788, 0.7435, 0.3447, 0.5796,
      0.7384, 0.3546, 0.5786, 0.7345, 0.355, 0.5761, 0.7362, 0.3615, 0.5779, 0.7317, 0.3612, 0.5736, 0.7352, 0.343,
      0.5724, 0.7448, 0.3424, 0.5748, 0.7432, 0.3257, 0.5776, 0.7485, 0.3264, 0.5836, 0.7435, 0, 0, 0, -0.0935, 0.9917,
      0.0879, -0.0811, 0.993, 0.0857, -0.0762, 0.9929, 0.0911, -0.0701, 0.9937, 0.0878, -0.0636, 0.9939, 0.0906,
      -0.0514, 0.9936, 0.1005, -0.0451, 0.992, 0.1183, -0.0514, 0.9911, 0.123, -0.0598, 0.991, 0.1199, -0.0717, 0.9907,
      0.1152, -0.0723, 0.9903, 0.1185, -0.064, 0.9906, 0.121, -0.06, 0.9897, 0.1296, -0.0535, 0.9905, 0.1267, -0.054,
      0.9896, 0.1332, -0.0605, 0.9881, 0.1414, -0.0519, 0.9891, 0.1379, -0.0382, 0.9901, 0.1354, -0.0318, 0.9896,
      0.1405, -0.032, 0.9885, 0.148, -0.0459, 0.9865, 0.1571, -0.0486, 0.9859, 0.1604, -0.0585, 0.9853, 0.1603, -0.0522,
      0.9852, 0.1633, -0.0596, 0.9829, 0.174, -0.0658, 0.9808, 0.1836, -0.0721, 0.9768, 0.2016, -0.0714, 0.9743, 0.2136,
      -0.0774, 0.9742, 0.2122, -0.0854, 0.9729, 0.2149, -0.0815, 0.9707, 0.226, -0.0854, 0.967, 0.2399, -0.0904, 0.9666,
      0.2397, -0.0898, 0.9627, 0.2553, -0.1001, 0.9623, 0.2528, -0.0973, 0.9604, 0.2612, -0.1009, 0.9586, 0.2661,
      -0.1084, 0.9579, 0.266, -0.1148, 0.9579, 0.2633, -0.1134, 0.9544, 0.2762, -0.1161, 0.952, 0.2831, -0.123, 0.9542,
      0.2726, -0.1273, 0.9528, 0.2756, -0.1224, 0.9515, 0.2823, -0.1197, 0.9482, 0.2944, -0.1227, 0.9436, 0.3075,
      -0.1335, 0.9425, 0.3065, -0.135, 0.9447, 0.2989, -0.1373, 0.9479, 0.2873, -0.1404, 0.9441, 0.2983, -0.1502, 0.941,
      0.3031, -0.1364, 0.9408, 0.3103, -0.1292, 0.9405, 0.3144, -0.1498, 0.9352, 0.3209, -0.1709, 0.9302, 0.3248,
      -0.1901, 0.928, 0.3205, -0.1962, 0.928, 0.3168, -0.2053, 0.9254, 0.3184, -0.2225, 0.9183, 0.3274, -0.2413, 0.9134,
      0.3278, -0.2456, 0.9131, 0.3254, -0.2555, 0.9113, 0.3227, -0.2659, 0.9097, 0.3191, -0.2771, 0.9051, 0.3225,
      -0.2843, 0.8999, 0.3308, -0.294, 0.8948, 0.336, -0.3119, 0.8885, 0.3366, -0.3177, 0.8821, 0.3477, -0.329, 0.8752,
      0.3545, -0.3424, 0.8669, 0.3623, -0.3518, 0.8663, 0.3545, -0.3519, 0.8734, 0.3367, -0.3634, 0.8734, 0.3242,
      -0.3625, 0.878, 0.3125, -0.3546, 0.8861, 0.2986, -0.3483, 0.8959, 0.2757, -0.3426, 0.9009, 0.2664, -0.3321,
      0.9076, 0.2569, -0.3264, 0.9143, 0.2401, -0.3154, 0.9194, 0.2351, -0.3135, 0.9218, 0.228, -0.2945, 0.9295, 0.2221,
      -0.2838, 0.9319, 0.226, -0.2769, 0.9345, 0.2236, -0.2662, 0.9393, 0.2166, -0.2751, 0.9371, 0.2148, -0.279, 0.9362,
      0.2136, -0.2842, 0.9353, 0.2106, -0.2843, 0.9373, 0.2014, -0.2754, 0.9414, 0.1947, -0.267, 0.9445, 0.1914,
      -0.2637, 0.9446, 0.1956, -0.2599, 0.943, 0.2076, -0.2577, 0.9467, 0.1934, -0.2561, 0.9486, 0.186, -0.2612, 0.9478,
      0.1829, -0.2604, 0.9492, 0.1768, -0.2443, 0.9542, 0.1729, -0.241, 0.9561, 0.1667, -0.2337, 0.9596, 0.1569, -0.222,
      0.9646, 0.1424, -0.2195, 0.9664, 0.134, -0.2134, 0.9682, 0.1304, -0.2106, 0.9707, 0.1155, -0.2136, 0.971, 0.107,
      -0.219, 0.9709, 0.0972, -0.2241, 0.9706, 0.0883, -0.2208, 0.9719, 0.0818, -0.2131, 0.9744, 0.0717, -0.2046,
      0.9756, 0.0794, -0.2008, 0.9758, 0.0862, -0.2025, 0.9768, 0.0696, -0.1984, 0.9783, 0.0595, -0.1919, 0.9797,
      0.0581, -0.18, 0.9813, 0.0677, -0.1678, 0.9829, 0.0757, -0.1616, 0.9841, 0.0742, -0.1592, 0.9852, 0.0642, -0.1518,
      0.9863, 0.064, -0.1369, 0.9883, 0.0677, -0.1335, 0.9885, 0.0703, -0.1271, 0.9897, 0.0658, -0.1204, 0.9903, 0.0687,
      -0.1142, 0.9907, 0.0736, -0.11, 0.9907, 0.0795, -0.1128, 0.99, 0.0848, -0.1014, 0.9913, 0.0839, -0.1026, 0.9904,
      0.0924, -0.1013, 0.9902, 0.0958, -0.1017, 0.9894, 0.1034, -0.0991, 0.9907, 0.0927, -0.0935, 0.9917, 0.0879, 0, 0,
      0, -0.952, 0.3058, 0.0142, -0.9561, 0.2926, 0.0142, -0.9617, 0.2737, 0.0129, -0.9616, 0.2737, 0.018, -0.9624,
      0.2707, 0.0234, -0.9616, 0.2732, 0.0249, -0.9621, 0.2711, 0.0298, -0.9641, 0.2647, 0.0222, -0.9655, 0.2599,
      0.0142, -0.9664, 0.2567, 0.0131, -0.9673, 0.2534, 0.0144, -0.9684, 0.2491, 0.0109, -0.9687, 0.2481, 0.007,
      -0.9692, 0.2461, 0.0079, -0.9697, 0.2442, 0.0047, -0.9708, 0.2399, -0.0011, -0.9714, 0.2374, -0.0016, -0.9706,
      0.2404, -0.0103, -0.9704, 0.2407, -0.0209, -0.9693, 0.2441, -0.0286, -0.9672, 0.251, -0.0376, -0.966, 0.256,
      -0.0372, -0.965, 0.2599, -0.0352, -0.9641, 0.2631, -0.0375, -0.9605, 0.2768, -0.0293, -0.9609, 0.2768, -0.0078,
      -0.9592, 0.2825, -0.0073, -0.9589, 0.2835, -0.0101, -0.9578, 0.2872, -0.0119, -0.9565, 0.291, -0.0181, -0.9547,
      0.2966, -0.0242, -0.9548, 0.2966, -0.0167, -0.9519, 0.306, -0.0166, -0.952, 0.306, -0.0011, -0.952, 0.3058,
      0.0142, 0, 0, 0, -0.8338, 0.0331, 0.5511, -0.8362, 0.0325, 0.5475, -0.8414, 0.034, 0.5394, -0.8445, 0.0294,
      0.5347, -0.8488, 0.0263, 0.5281, -0.8517, 0.0255, 0.5234, -0.8528, 0.0221, 0.5218, -0.8572, 0.023, 0.5144,
      -0.8625, 0.0312, 0.5051, -0.8629, 0.0393, 0.5039, -0.8648, 0.0481, 0.4998, -0.8627, 0.0629, 0.5018, -0.8599,
      0.069, 0.5058, -0.8614, 0.0771, 0.502, -0.8642, 0.0798, 0.4967, -0.8625, 0.0874, 0.4984, -0.8643, 0.0914, 0.4947,
      -0.8688, 0.0906, 0.4869, -0.8733, 0.1038, 0.4759, -0.8706, 0.1086, 0.4798, -0.87, 0.1166, 0.4791, -0.8645, 0.1194,
      0.4882, -0.862, 0.1226, 0.4918, -0.8643, 0.1291, 0.4862, -0.8628, 0.1354, 0.4871, -0.8547, 0.1455, 0.4983,
      -0.8497, 0.1392, 0.5085, -0.8455, 0.1279, 0.5185, -0.8462, 0.119, 0.5195, -0.8428, 0.1186, 0.525, -0.8387, 0.1101,
      0.5334, -0.8355, 0.1041, 0.5395, -0.8383, 0.0884, 0.538, -0.8443, 0.0839, 0.5293, -0.8441, 0.0798, 0.5303,
      -0.8463, 0.0708, 0.5279, -0.8429, 0.0582, 0.5349, -0.8399, 0.0581, 0.5396, -0.8391, 0.0483, 0.5418, -0.8338,
      0.0331, 0.5511, 0, 0, 0, -0.9684, 0.2491, 0.0109, -0.9673, 0.2534, 0.0144, -0.9664, 0.2567, 0.0131, -0.9655,
      0.2599, 0.0142, -0.9641, 0.2647, 0.0222, -0.9621, 0.2711, 0.0298, -0.9622, 0.2704, 0.0316, -0.9613, 0.2734,
      0.0352, -0.961, 0.2736, 0.04, -0.9613, 0.2722, 0.0416, -0.961, 0.2731, 0.0442, -0.961, 0.2716, 0.052, -0.9604,
      0.272, 0.0597, -0.9596, 0.2738, 0.0651, -0.9589, 0.2757, 0.067, -0.9588, 0.2749, 0.0724, -0.9588, 0.2737, 0.0764,
      -0.9583, 0.2741, 0.0808, -0.9576, 0.2756, 0.0841, -0.9576, 0.2732, 0.0917, -0.9574, 0.2729, 0.0944, -0.9578,
      0.2697, 0.0996, -0.9583, 0.266, 0.1045, -0.9583, 0.2634, 0.1107, -0.959, 0.2587, 0.1153, -0.9596, 0.2591, 0.1095,
      -0.9605, 0.2568, 0.1073, -0.9617, 0.2546, 0.1015, -0.9621, 0.2546, 0.0973, -0.9631, 0.2524, 0.0936, -0.9632,
      0.2532, 0.0902, -0.9628, 0.2558, 0.0873, -0.9631, 0.2553, 0.0855, -0.9643, 0.2513, 0.0835, -0.9644, 0.2514,
      0.0819, -0.9653, 0.2479, 0.0816, -0.967, 0.2433, 0.0759, -0.9677, 0.2412, 0.0728, -0.9684, 0.2391, 0.0711,
      -0.9679, 0.2426, 0.066, -0.9692, 0.238, 0.0625, -0.9694, 0.2382, 0.0589, -0.9698, 0.2378, 0.055, -0.9717, 0.2294,
      0.0555, -0.9719, 0.2293, 0.053, -0.9729, 0.2254, 0.0509, -0.9734, 0.2247, 0.0456, -0.9723, 0.23, 0.0426, -0.9721,
      0.2315, 0.0375, -0.9704, 0.2383, 0.0386, -0.9701, 0.2401, 0.0363, -0.9699, 0.2413, 0.0328, -0.9706, 0.2393,
      0.0253, -0.9701, 0.2416, 0.0247, -0.9695, 0.2443, 0.0196, -0.9687, 0.2477, 0.0159, -0.9684, 0.2491, 0.0109, 0, 0,
      0, 0.2308, 0.7054, 0.6702, 0.2247, 0.7081, 0.6694, 0.2166, 0.7079, 0.6722, 0.2059, 0.71, 0.6734, 0.2005, 0.7097,
      0.6754, 0.1987, 0.7072, 0.6786, 0.1936, 0.71, 0.6771, 0.1925, 0.7049, 0.6827, 0.2, 0.6991, 0.6865, 0.2036, 0.6952,
      0.6894, 0.2105, 0.6905, 0.6921, 0.2159, 0.6877, 0.6932, 0.2219, 0.6824, 0.6965, 0.2341, 0.6775, 0.6973, 0.2334,
      0.6753, 0.6996, 0.2334, 0.6753, 0.6996, 0.2206, 0.6801, 0.6992, 0.2122, 0.6847, 0.6973, 0.2001, 0.6884, 0.6971,
      0.1875, 0.6977, 0.6914, 0.1897, 0.6986, 0.6899, 0.1829, 0.7039, 0.6864, 0.1816, 0.708, 0.6824, 0.1734, 0.71,
      0.6825, 0.1711, 0.7047, 0.6886, 0.1666, 0.7088, 0.6855, 0.1658, 0.7131, 0.6812, 0.1662, 0.7133, 0.6809, 0.1746,
      0.7128, 0.6793, 0.1762, 0.7149, 0.6767, 0.1807, 0.7129, 0.6776, 0.1854, 0.7127, 0.6766, 0.1845, 0.7161, 0.6732,
      0.1882, 0.7173, 0.6708, 0.188, 0.7222, 0.6656, 0.1962, 0.7254, 0.6597, 0.2003, 0.7239, 0.6601, 0.2106, 0.7188,
      0.6626, 0.2209, 0.7164, 0.6618, 0.2246, 0.7182, 0.6586, 0.2289, 0.7135, 0.6622, 0.2338, 0.71, 0.6642, 0.2308,
      0.7054, 0.6702, 0, 0, 0, -0.8938, 0.3373, 0.2954, -0.8964, 0.3284, 0.2978, -0.8989, 0.322, 0.2972, -0.901, 0.3192,
      0.2937, -0.9013, 0.3143, 0.2983, -0.9028, 0.3098, 0.2984, -0.9053, 0.3126, 0.2877, -0.908, 0.3114, 0.2803,
      -0.9105, 0.3126, 0.2705, -0.9137, 0.3095, 0.2633, -0.9145, 0.3147, 0.2543, -0.9124, 0.32, 0.2553, -0.9089, 0.3177,
      0.2701, -0.9057, 0.3164, 0.2822, -0.9027, 0.3201, 0.2875, -0.9026, 0.3272, 0.2796, -0.9005, 0.3335, 0.279,
      -0.9026, 0.3361, 0.2688, -0.9, 0.3406, 0.2719, -0.8973, 0.3399, 0.2816, -0.8938, 0.3373, 0.2954, 0, 0, 0, 0.1908,
      0.7296, 0.6567, 0.1923, 0.7372, 0.6477, 0.1893, 0.7398, 0.6457, 0.1956, 0.7398, 0.6438, 0.1949, 0.7446, 0.6384,
      0.2016, 0.7416, 0.6398, 0.2061, 0.7403, 0.6399, 0.215, 0.7418, 0.6353, 0.215, 0.7441, 0.6325, 0.2193, 0.7444,
      0.6306, 0.224, 0.7463, 0.6269, 0.2254, 0.7455, 0.6272, 0.23, 0.747, 0.6238, 0.2315, 0.7497, 0.62, 0.2347, 0.7504,
      0.6179, 0.2477, 0.7469, 0.6171, 0.2495, 0.7481, 0.6149, 0.2568, 0.7449, 0.6158, 0.2589, 0.7418, 0.6187, 0.2533,
      0.7393, 0.6239, 0.2514, 0.7313, 0.6341, 0.2478, 0.7232, 0.6447, 0.2395, 0.7209, 0.6503, 0.2323, 0.7214, 0.6524,
      0.2246, 0.7182, 0.6586, 0.2246, 0.7182, 0.6586, 0.2209, 0.7164, 0.6618, 0.2106, 0.7188, 0.6626, 0.2003, 0.7239,
      0.6601, 0.1962, 0.7254, 0.6597, 0.1928, 0.7295, 0.6563, 0.1908, 0.7296, 0.6567, 0, 0, 0, 0.846, -0.1778, -0.5026,
      0.8496, -0.1781, -0.4964, 0.8627, -0.166, -0.4776, 0.8553, -0.1627, -0.4919, 0.85, -0.1679, -0.4992, 0.8462,
      -0.1731, -0.5039, 0.846, -0.1778, -0.5026, 0, 0, 0, 0.8096, -0.1546, -0.5662, 0.8082, -0.158, -0.5674, 0.8073,
      -0.1632, -0.5671, 0.8119, -0.1761, -0.5567, 0.8195, -0.1798, -0.5441, 0.821, -0.1778, -0.5426, 0.821, -0.1719,
      -0.5444, 0.8184, -0.1614, -0.5516, 0.8096, -0.1546, -0.5662, 0, 0, 0, 0.875, -0.1408, -0.4633, 0.8714, -0.1454,
      -0.4684, 0.8665, -0.144, -0.4779, 0.8635, -0.1514, -0.4811, 0.8725, -0.1548, -0.4634, 0.8778, -0.1571, -0.4526,
      0.882, -0.157, -0.4444, 0.8807, -0.1471, -0.4503, 0.8763, -0.1469, -0.4588, 0.875, -0.1408, -0.4633, 0, 0, 0,
      0.8312, -0.1408, -0.5378, 0.8314, -0.1504, -0.5349, 0.8445, -0.1553, -0.5125, 0.8565, -0.1532, -0.493, 0.8573,
      -0.1469, -0.4934, 0.8508, -0.1433, -0.5055, 0.8446, -0.1484, -0.5144, 0.8388, -0.1471, -0.5243, 0.8312, -0.1408,
      -0.5378, 0, 0, 0, 0.941, -0.118, -0.3171, 0.9297, -0.1197, -0.3483, 0.9291, -0.1126, -0.3522, 0.9163, -0.1209,
      -0.3817, 0.9126, -0.1322, -0.387, 0.9017, -0.1353, -0.4105, 0.8914, -0.1456, -0.4291, 0.8989, -0.1522, -0.4109,
      0.9076, -0.1452, -0.394, 0.9136, -0.1457, -0.3796, 0.9205, -0.1444, -0.363, 0.9268, -0.1413, -0.3481, 0.9345,
      -0.1347, -0.3296, 0.9388, -0.133, -0.3177, 0.9408, -0.1351, -0.3107, 0.9512, -0.128, -0.2809, 0.9529, -0.1206,
      -0.2783, 0.9574, -0.1193, -0.2631, 0.9559, -0.1027, -0.275, 0.9498, -0.1037, -0.2952, 0.9448, -0.1105, -0.3083,
      0.9424, -0.1119, -0.3151, 0.941, -0.118, -0.3171, 0, 0, 0, 0.7063, -0.1082, -0.6996, 0.7116, -0.1201, -0.6922,
      0.7138, -0.107, -0.6921, 0.7122, -0.1008, -0.6947, 0.71, -0.0949, -0.6977, 0.7069, -0.1, -0.7002, 0.7063, -0.1082,
      -0.6996, 0, 0, 0, 0.7946, -0.0603, -0.6042, 0.7982, -0.0661, -0.5988, 0.8055, -0.0629, -0.5892, 0.8079, -0.0554,
      -0.5867, 0.7974, -0.0546, -0.6009, 0.7946, -0.0603, -0.6042, 0, 0, 0, 0.7596, -0.054, -0.6481, 0.7549, -0.0673,
      -0.6524, 0.7648, -0.0601, -0.6415, 0.7741, -0.0587, -0.6303, 0.7802, -0.0598, -0.6226, 0.7877, -0.0592, -0.6132,
      0.7856, -0.0496, -0.6168, 0.7721, -0.0489, -0.6336, 0.7596, -0.054, -0.6481, 0, 0, 0, 0.6287, -0.0454, -0.7763,
      0.6258, -0.1021, -0.7733, 0.6209, -0.1585, -0.7677, 0.6342, -0.1443, -0.7596, 0.6479, -0.1408, -0.7486, 0.6506,
      -0.1458, -0.7453, 0.6669, -0.1463, -0.7307, 0.6628, -0.1322, -0.7371, 0.655, -0.1274, -0.7448, 0.6599, -0.1086,
      -0.7435, 0.6671, -0.094, -0.739, 0.6926, -0.0793, -0.7169, 0.7029, -0.0778, -0.707, 0.722, -0.0617, -0.6891,
      0.7252, -0.0702, -0.685, 0.7297, -0.0717, -0.68, 0.7327, -0.0653, -0.6774, 0.7331, -0.0578, -0.6777, 0.7424,
      -0.0492, -0.6682, 0.7299, -0.0429, -0.6822, 0.7213, -0.0433, -0.6912, 0.7225, -0.0386, -0.6903, 0.7399, -0.0386,
      -0.6716, 0.7448, -0.0282, -0.6667, 0.7551, -0.025, -0.6551, 0.7601, -0.0164, -0.6496, 0.7446, -0.0121, -0.6674,
      0.7387, -0.0064, -0.674, 0.7194, -0.0136, -0.6944, 0.7175, -0.0201, -0.6963, 0.7134, -0.0483, -0.6991, 0.7002,
      -0.0587, -0.7115, 0.6904, -0.0403, -0.7223, 0.6761, -0.0297, -0.7363, 0.6645, -0.0297, -0.7467, 0.6532, -0.0358,
      -0.7563, 0.6432, -0.042, -0.7645, 0.6287, -0.0454, -0.7763, 0, 0, 0, 0.8165, 0.0248, -0.5768, 0.8247, 0.0075,
      -0.5655, 0.8321, 0.0041, -0.5546, 0.8413, 0.0075, -0.5406, 0.8566, 0.0067, -0.5159, 0.8644, 0.0041, -0.5028,
      0.8656, -0.0091, -0.5006, 0.8575, -0.0246, -0.5139, 0.8527, -0.0167, -0.5221, 0.8354, -0.0107, -0.5496, 0.8361,
      -0.0188, -0.5483, 0.8402, -0.0162, -0.542, 0.8441, -0.0265, -0.5355, 0.8521, -0.0332, -0.5223, 0.8425, -0.0556,
      -0.5358, 0.8439, -0.0616, -0.5329, 0.8342, -0.0817, -0.5453, 0.8335, -0.0931, -0.5446, 0.8381, -0.0982, -0.5366,
      0.8423, -0.0921, -0.5311, 0.8388, -0.0778, -0.5389, 0.8474, -0.0846, -0.5242, 0.85, -0.0798, -0.5207, 0.8493,
      -0.073, -0.5229, 0.8564, -0.0628, -0.5125, 0.8565, -0.0458, -0.5141, 0.8622, -0.0511, -0.5039, 0.8604, -0.0715,
      -0.5046, 0.8582, -0.0963, -0.5041, 0.8635, -0.0989, -0.4945, 0.8677, -0.0938, -0.4882, 0.8664, -0.0778, -0.4933,
      0.8687, -0.061, -0.4915, 0.8723, -0.0608, -0.4851, 0.8755, -0.0489, -0.4807, 0.8725, -0.0375, -0.4872, 0.8716,
      -0.0236, -0.4896, 0.8675, 0.0027, -0.4974, 0.8657, 0.0099, -0.5005, 0.858, 0.0228, -0.5132, 0.851, 0.0177,
      -0.5249, 0.8393, 0.0153, -0.5435, 0.8282, 0.016, -0.5602, 0.8182, 0.0287, -0.5743, 0.8165, 0.0248, -0.5768, 0, 0,
      0, 0.7804, 0.0198, -0.625, 0.7811, 0.0045, -0.6244, 0.7867, 0.0062, -0.6173, 0.7883, -0.0044, -0.6152, 0.7838,
      -0.0136, -0.6208, 0.7868, -0.0157, -0.617, 0.7913, -0.0047, -0.6115, 0.7943, 0.0177, -0.6073, 0.7919, 0.0316,
      -0.6098, 0.7882, 0.0379, -0.6143, 0.7876, 0.0284, -0.6155, 0.7813, 0.0269, -0.6236, 0.7804, 0.0198, -0.625, 0, 0,
      0, 0.9411, 0.035, -0.3363, 0.9404, 0.0234, -0.3391, 0.9365, 0.0135, -0.3504, 0.9324, 0.017, -0.3609, 0.9284,
      0.0158, -0.3713, 0.9244, 0.0246, -0.3806, 0.9211, 0.0261, -0.3883, 0.9147, 0.0212, -0.4035, 0.9088, 0.025,
      -0.4165, 0.9042, 0.0492, -0.4242, 0.9011, 0.0553, -0.4302, 0.8973, 0.0751, -0.435, 0.8884, 0.0751, -0.4529,
      0.8816, 0.0722, -0.4664, 0.8871, 0.0564, -0.4581, 0.8818, 0.0399, -0.4698, 0.8835, 0.0319, -0.4673, 0.8745,
      0.0157, -0.4847, 0.8844, 0.0137, -0.4665, 0.8872, 0.0018, -0.4614, 0.8867, -0.014, -0.462, 0.8942, -0.026, -0.447,
      0.8938, -0.0433, -0.4463, 0.8955, -0.07, -0.4396, 0.897, -0.0638, -0.4375, 0.905, -0.0716, -0.4194, 0.9085,
      -0.061, -0.4134, 0.9136, -0.06, -0.4021, 0.9174, -0.0544, -0.3943, 0.925, -0.0607, -0.375, 0.9278, -0.0522,
      -0.3693, 0.932, -0.0532, -0.3586, 0.9371, -0.0512, -0.3452, 0.9389, -0.0278, -0.3431, 0.942, -0.0229, -0.3349,
      0.945, -0.008, -0.3271, 0.9458, 0.0072, -0.3248, 0.9449, 0.0234, -0.3266, 0.9411, 0.035, -0.3363, 0, 0, 0, 0.9571,
      -0.102, -0.2712, 0.9621, -0.1023, -0.2526, 0.9671, -0.0878, -0.2388, 0.9733, -0.0736, -0.2173, 0.9756, -0.063,
      -0.2102, 0.9791, -0.0488, -0.1974, 0.9813, -0.0358, -0.189, 0.9843, -0.0114, -0.1761, 0.987, 0.0032, -0.161,
      0.9876, 0.0182, -0.1559, 0.9883, 0.0318, -0.1495, 0.9901, 0.0428, -0.1339, 0.9905, 0.0577, -0.1247, 0.9915,
      0.0675, -0.1116, 0.9918, 0.0866, -0.0934, 0.9912, 0.0955, -0.0918, 0.9902, 0.0948, -0.103, 0.9873, 0.0914,
      -0.1297, 0.9866, 0.0744, -0.1451, 0.9854, 0.0626, -0.1586, 0.9842, 0.0554, -0.1681, 0.9821, 0.0366, -0.1845,
      0.9787, 0.0364, -0.2019, 0.976, 0.0244, -0.2163, 0.974, 0.0098, -0.2262, 0.971, 0.0018, -0.2392, 0.9725, -0.0124,
      -0.2324, 0.9701, -0.0185, -0.2421, 0.9685, -0.0189, -0.2481, 0.9675, -0.0311, -0.2509, 0.9656, -0.0408, -0.2567,
      0.9622, -0.0424, -0.269, 0.9594, -0.0534, -0.2771, 0.9592, -0.0751, -0.2725, 0.9571, -0.102, -0.2712, 0, 0, 0,
      0.9259, 0.3753, -0.0432, 0.9155, 0.4008, -0.0343, 0.9157, 0.4007, -0.0299, 0.9202, 0.3905, -0.0274, 0.9168,
      0.3988, -0.0185, 0.9127, 0.4079, -0.0234, 0.9121, 0.4088, -0.0305, 0.9057, 0.4222, -0.0376, 0.9048, 0.4249,
      -0.0284, 0.9052, 0.4247, -0.0138, 0.9043, 0.4269, 0.0013, 0.8991, 0.4378, 0.0026, 0.8986, 0.4386, 0.0101, 0.8951,
      0.4454, 0.0225, 0.9001, 0.4347, 0.0281, 0.9044, 0.4264, 0.0169, 0.9069, 0.4205, 0.0268, 0.9094, 0.4147, 0.0304,
      0.9116, 0.4105, 0.0207, 0.9158, 0.4008, 0.0235, 0.9211, 0.3888, 0.0181, 0.9267, 0.3755, 0.0157, 0.929, 0.3696,
      0.018, 0.9287, 0.3698, 0.029, 0.9292, 0.3664, 0.0491, 0.9339, 0.3542, 0.0484, 0.937, 0.3445, 0.0573, 0.9393,
      0.3335, 0.0812, 0.9441, 0.314, 0.1002, 0.9461, 0.3036, 0.113, 0.9474, 0.2926, 0.1299, 0.9496, 0.285, 0.1302,
      0.9497, 0.2808, 0.1387, 0.9491, 0.2748, 0.1539, 0.9481, 0.2739, 0.1616, 0.9507, 0.2611, 0.1672, 0.9569, 0.2391,
      0.1647, 0.9604, 0.2251, 0.1644, 0.9627, 0.2089, 0.1721, 0.9683, 0.1798, 0.1732, 0.9669, 0.179, 0.182, 0.9677,
      0.1658, 0.1901, 0.9696, 0.1602, 0.1851, 0.9673, 0.1553, 0.2007, 0.9678, 0.1435, 0.2068, 0.967, 0.1386, 0.2137,
      0.961, 0.1547, 0.2291, 0.9552, 0.1788, 0.2359, 0.9504, 0.1961, 0.2414, 0.9473, 0.2042, 0.2468, 0.9415, 0.2206,
      0.2547, 0.9356, 0.2418, 0.2574, 0.9322, 0.2524, 0.2595, 0.9219, 0.2755, 0.2725, 0.9104, 0.3078, 0.2763, 0.9022,
      0.329, 0.2789, 0.8954, 0.3489, 0.2767, 0.8889, 0.3642, 0.278, 0.8851, 0.3544, 0.3017, 0.8806, 0.3564, 0.3123,
      0.866, 0.3761, 0.3296, 0.8665, 0.3819, 0.3215, 0.8624, 0.3882, 0.325, 0.8501, 0.4018, 0.3404, 0.8496, 0.4125,
      0.3288, 0.8616, 0.4124, 0.2959, 0.8546, 0.426, 0.2969, 0.8481, 0.434, 0.3039, 0.8419, 0.4461, 0.3036, 0.8351,
      0.4531, 0.312, 0.833, 0.4693, 0.2931, 0.8393, 0.4681, 0.2763, 0.8359, 0.4842, 0.2584, 0.8303, 0.4996, 0.2467,
      0.8259, 0.5147, 0.2302, 0.8196, 0.5254, 0.2287, 0.8177, 0.5339, 0.2152, 0.8101, 0.5412, 0.2254, 0.8025, 0.5511,
      0.2285, 0.7929, 0.5638, 0.2311, 0.7908, 0.57, 0.2232, 0.7987, 0.5665, 0.2028, 0.8011, 0.5686, 0.1868, 0.7959,
      0.5806, 0.1715, 0.8105, 0.5638, 0.1588, 0.818, 0.552, 0.1618, 0.8239, 0.5446, 0.157, 0.8285, 0.5371, 0.1584,
      0.8253, 0.539, 0.1685, 0.8361, 0.5227, 0.1665, 0.8444, 0.5133, 0.1531, 0.854, 0.5028, 0.1336, 0.8564, 0.4959,
      0.1437, 0.8633, 0.4817, 0.1508, 0.8688, 0.4759, 0.1367, 0.875, 0.4683, 0.123, 0.882, 0.4596, 0.1035, 0.8853,
      0.4576, 0.0825, 0.8901, 0.4497, 0.0739, 0.8918, 0.4482, 0.062, 0.8947, 0.4446, 0.0433, 0.8951, 0.4449, 0.0303,
      0.8921, 0.451, 0.0284, 0.8869, 0.4609, 0.0303, 0.8835, 0.4676, 0.029, 0.882, 0.4708, 0.0195, 0.8884, 0.4586,
      0.0184, 0.89, 0.4555, 0.0181, 0.8932, 0.4496, 0.004, 0.892, 0.4521, -0.0058, 0.8923, 0.451, -0.019, 0.8917,
      0.4515, -0.0317, 0.8868, 0.461, -0.0326, 0.8844, 0.466, -0.0262, 0.8829, 0.4679, -0.0386, 0.8761, 0.4793, -0.0523,
      0.8695, 0.489, -0.0694, 0.8705, 0.4853, -0.0824, 0.8658, 0.4917, -0.0928, 0.8703, 0.4822, -0.1005, 0.8743, 0.4758,
      -0.0957, 0.8736, 0.4735, -0.1123, 0.8765, 0.4677, -0.1139, 0.8787, 0.4648, -0.1087, 0.8834, 0.4553, -0.1106,
      0.8833, 0.4581, -0.0994, 0.8908, 0.4473, -0.0799, 0.8951, 0.4384, -0.0808, 0.9022, 0.4252, -0.0726, 0.9058,
      0.4175, -0.0721, 0.9123, 0.4044, -0.0655, 0.9114, 0.408, -0.053, 0.9187, 0.3914, -0.0528, 0.9212, 0.386, -0.0493,
      0.9239, 0.3791, -0.0511, 0.9259, 0.3753, -0.0432, 0, 0, 0, -0.0753, 0.8205, 0.5667, -0.0743, 0.8151, 0.5746,
      -0.0773, 0.8096, 0.5818, -0.071, 0.8098, 0.5824, -0.0637, 0.8077, 0.5862, -0.063, 0.8002, 0.5964, -0.0724, 0.7908,
      0.6078, -0.0923, 0.7844, 0.6133, -0.1071, 0.7861, 0.6088, -0.0962, 0.7972, 0.596, -0.0992, 0.8078, 0.5811,
      -0.0838, 0.8158, 0.5723, -0.0753, 0.8205, 0.5667, 0, 0, 0, 0.7122, 0.5828, 0.3913, 0.7202, 0.565, 0.4025, 0.7245,
      0.5545, 0.4094, 0.7288, 0.5524, 0.4046, 0.7304, 0.5444, 0.4126, 0.7393, 0.5326, 0.4121, 0.7449, 0.5232, 0.4139,
      0.7517, 0.5207, 0.4048, 0.7574, 0.5111, 0.4064, 0.7578, 0.4974, 0.4222, 0.7654, 0.4894, 0.4178, 0.7728, 0.4802,
      0.4149, 0.7829, 0.4735, 0.4036, 0.7895, 0.4599, 0.4065, 0.794, 0.4574, 0.4005, 0.7978, 0.4502, 0.401, 0.791,
      0.4421, 0.4228, 0.796, 0.4239, 0.4322, 0.7794, 0.4286, 0.457, 0.7691, 0.4322, 0.4708, 0.7588, 0.4343, 0.4853,
      0.7472, 0.4535, 0.4858, 0.742, 0.4562, 0.4913, 0.7365, 0.4534, 0.502, 0.7306, 0.4459, 0.517, 0.7174, 0.4511,
      0.531, 0.703, 0.463, 0.5398, 0.6921, 0.4674, 0.5501, 0.6795, 0.482, 0.5531, 0.6635, 0.5022, 0.5545, 0.6594,
      0.4998, 0.5616, 0.6509, 0.5048, 0.567, 0.6498, 0.4989, 0.5735, 0.6408, 0.5068, 0.5767, 0.6371, 0.5148, 0.5736,
      0.6339, 0.5148, 0.5771, 0.6307, 0.5256, 0.5709, 0.6204, 0.5368, 0.5718, 0.6043, 0.5449, 0.5813, 0.5907, 0.5587,
      0.5822, 0.5875, 0.57, 0.5744, 0.5901, 0.5749, 0.5668, 0.5851, 0.5832, 0.5635, 0.5764, 0.5875, 0.568, 0.5612,
      0.6042, 0.5657, 0.5612, 0.6042, 0.5657, 0.5498, 0.6153, 0.5649, 0.5494, 0.6195, 0.5606, 0.5376, 0.6351, 0.5546,
      0.542, 0.6389, 0.5459, 0.5465, 0.6339, 0.5474, 0.5549, 0.6276, 0.5461, 0.5624, 0.6258, 0.5404, 0.5656, 0.6262,
      0.5366, 0.5705, 0.6362, 0.5194, 0.5733, 0.6372, 0.5151, 0.5784, 0.6332, 0.5143, 0.5793, 0.6265, 0.5214, 0.5892,
      0.6194, 0.5188, 0.5911, 0.6201, 0.5159, 0.5999, 0.6099, 0.5178, 0.6101, 0.607, 0.5092, 0.6203, 0.6, 0.5051,
      0.6341, 0.5976, 0.4907, 0.645, 0.6013, 0.4716, 0.6438, 0.6046, 0.4691, 0.6492, 0.6073, 0.458, 0.6498, 0.6152,
      0.4464, 0.6553, 0.6148, 0.439, 0.6569, 0.6173, 0.4328, 0.6631, 0.6161, 0.4252, 0.6758, 0.6091, 0.4152, 0.6825,
      0.6076, 0.4063, 0.6985, 0.5952, 0.3972, 0.704, 0.5947, 0.3882, 0.7122, 0.5828, 0.3913, 0, 0, 0, 0.5612, 0.6042,
      0.5657, 0.5764, 0.5875, 0.568, 0.5851, 0.5832, 0.5635, 0.5901, 0.5749, 0.5668, 0.5875, 0.57, 0.5744, 0.5907,
      0.5587, 0.5822, 0.6043, 0.5449, 0.5813, 0.6204, 0.5368, 0.5718, 0.6307, 0.5256, 0.5709, 0.6339, 0.5148, 0.5771,
      0.6371, 0.5148, 0.5736, 0.6408, 0.5068, 0.5767, 0.6498, 0.4989, 0.5735, 0.6435, 0.4996, 0.5799, 0.6361, 0.5009,
      0.5869, 0.6345, 0.4863, 0.6007, 0.6142, 0.4875, 0.6205, 0.5712, 0.5179, 0.6368, 0.5503, 0.5283, 0.6466, 0.535,
      0.5323, 0.6561, 0.5232, 0.5502, 0.6509, 0.5413, 0.5652, 0.6225, 0.5374, 0.5825, 0.6099, 0.5314, 0.5928, 0.6051,
      0.5355, 0.5963, 0.5981, 0.5364, 0.605, 0.5884, 0.5397, 0.6072, 0.5832, 0.5523, 0.6054, 0.5731, 0.5577, 0.6018,
      0.5716, 0.5612, 0.6042, 0.5657, 0, 0, 0, -0.1001, 0.9168, 0.3867, -0.1043, 0.9122, 0.3963, -0.099, 0.9072, 0.4088,
      -0.1113, 0.9016, 0.4181, -0.1355, 0.8963, 0.4222, -0.1428, 0.8949, 0.4228, -0.1516, 0.8961, 0.4173, -0.1699,
      0.8985, 0.4048, -0.1603, 0.9018, 0.4012, -0.1723, 0.9055, 0.3878, -0.1591, 0.9069, 0.3901, -0.1576, 0.9091,
      0.3857, -0.1701, 0.9108, 0.3763, -0.1615, 0.9154, 0.3687, -0.1508, 0.9164, 0.3707, -0.1444, 0.9116, 0.3848,
      -0.1314, 0.9155, 0.3803, -0.1244, 0.9135, 0.3874, -0.1109, 0.9172, 0.3826, -0.1001, 0.9168, 0.3867, 0, 0, 0,
      0.4957, 0.4964, 0.7126, 0.4815, 0.5183, 0.7068, 0.4815, 0.5183, 0.7068, 0.4815, 0.5183, 0.7068, 0.4834, 0.5232,
      0.7018, 0.4822, 0.5241, 0.702, 0.483, 0.531, 0.6962, 0.4814, 0.5421, 0.6887, 0.4818, 0.5458, 0.6855, 0.4821,
      0.546, 0.6852, 0.4861, 0.5459, 0.6824, 0.4862, 0.5485, 0.6803, 0.4893, 0.5487, 0.6779, 0.4918, 0.5427, 0.6809,
      0.491, 0.5405, 0.6832, 0.4912, 0.5404, 0.6831, 0.4909, 0.5357, 0.687, 0.4858, 0.5378, 0.6891, 0.4868, 0.5279,
      0.6959, 0.4905, 0.5263, 0.6946, 0.4881, 0.5242, 0.6978, 0.4889, 0.5203, 0.7002, 0.4939, 0.5223, 0.6951, 0.4963,
      0.5165, 0.6978, 0.4982, 0.4924, 0.7136, 0.4957, 0.4964, 0.7126, 0, 0, 0, 0.1239, 0.7301, 0.672, 0.1313, 0.7284,
      0.6725, 0.1322, 0.7307, 0.6698, 0.1433, 0.7327, 0.6653, 0.1468, 0.7286, 0.669, 0.1642, 0.7255, 0.6684, 0.1644,
      0.7195, 0.6747, 0.1686, 0.7144, 0.6792, 0.1587, 0.7161, 0.6797, 0.15, 0.7118, 0.6862, 0.1519, 0.7057, 0.692,
      0.1512, 0.7022, 0.6958, 0.1565, 0.6958, 0.701, 0.1694, 0.6895, 0.7042, 0.178, 0.6789, 0.7123, 0.1943, 0.6685,
      0.7178, 0.204, 0.6686, 0.7151, 0.2078, 0.6658, 0.7167, 0.2049, 0.6632, 0.7199, 0.2174, 0.6584, 0.7206, 0.2276,
      0.6544, 0.721, 0.2402, 0.6475, 0.7232, 0.2422, 0.645, 0.7247, 0.2411, 0.6403, 0.7293, 0.2324, 0.6465, 0.7266,
      0.2209, 0.6487, 0.7283, 0.2176, 0.64, 0.7369, 0.2281, 0.6351, 0.738, 0.2282, 0.628, 0.744, 0.223, 0.6272, 0.7463,
      0.2186, 0.6155, 0.7572, 0.2133, 0.6144, 0.7596, 0.2125, 0.6186, 0.7564, 0.2135, 0.6259, 0.7501, 0.2157, 0.6288,
      0.747, 0.2089, 0.6367, 0.7423, 0.2035, 0.6434, 0.738, 0.1977, 0.6451, 0.7381, 0.1927, 0.6508, 0.7344, 0.1839,
      0.6532, 0.7345, 0.1773, 0.6585, 0.7314, 0.1677, 0.6594, 0.7329, 0.1566, 0.6653, 0.73, 0.1434, 0.6737, 0.7249,
      0.1336, 0.6811, 0.7199, 0.1276, 0.6937, 0.7089, 0.1212, 0.6951, 0.7086, 0.1105, 0.6992, 0.7063, 0.105, 0.6976,
      0.7088, 0.0986, 0.6917, 0.7154, 0.0936, 0.6908, 0.717, 0.0943, 0.6963, 0.7116, 0.0874, 0.6979, 0.7109, 0.0831,
      0.7075, 0.7019, 0.0868, 0.7112, 0.6976, 0.0827, 0.7158, 0.6934, 0.0828, 0.7192, 0.6898, 0.0883, 0.7166, 0.6918,
      0.094, 0.7172, 0.6905, 0.1002, 0.7213, 0.6853, 0.1025, 0.7194, 0.687, 0.1082, 0.7198, 0.6857, 0.11, 0.7247,
      0.6803, 0.119, 0.7231, 0.6804, 0.1239, 0.7252, 0.6773, 0.1239, 0.7301, 0.672, 0, 0, 0, 0.2102, 0.6188, 0.7569,
      0.2076, 0.608, 0.7663, 0.2105, 0.6037, 0.7689, 0.2091, 0.5965, 0.7749, 0.1977, 0.6018, 0.7738, 0.1906, 0.6033,
      0.7744, 0.1705, 0.6103, 0.7736, 0.1712, 0.6174, 0.7678, 0.1871, 0.6161, 0.7651, 0.2004, 0.6176, 0.7605, 0.2102,
      0.6188, 0.7569, 0, 0, 0, 0.1204, 0.6588, 0.7426, 0.1296, 0.6494, 0.7493, 0.1302, 0.6317, 0.7642, 0.124, 0.6326,
      0.7645, 0.1191, 0.6281, 0.769, 0.1136, 0.6316, 0.7669, 0.1111, 0.6478, 0.7536, 0.1072, 0.6554, 0.7476, 0.1145,
      0.6547, 0.7471, 0.1204, 0.6588, 0.7426, 0, 0, 0, -0.9261, 0.3171, 0.2041, -0.9242, 0.3157, 0.2151, -0.9234,
      0.3117, 0.224, -0.9242, 0.3071, 0.227, -0.927, 0.3068, 0.2157, -0.929, 0.3041, 0.211, -0.9302, 0.3067, 0.2017,
      -0.9302, 0.3128, 0.192, -0.9286, 0.3166, 0.1937, -0.9268, 0.3177, 0.2004, -0.9261, 0.3171, 0.2041, 0, 0, 0,
      0.5232, 0.5502, 0.6509, 0.535, 0.5323, 0.6561, 0.5337, 0.5301, 0.6589, 0.5131, 0.5226, 0.6809, 0.5304, 0.5077,
      0.6789, 0.5274, 0.5051, 0.6832, 0.5272, 0.5001, 0.687, 0.5188, 0.498, 0.6949, 0.5177, 0.4925, 0.6996, 0.514,
      0.4878, 0.7056, 0.4994, 0.4902, 0.7143, 0.4982, 0.4924, 0.7136, 0.4963, 0.5165, 0.6978, 0.4939, 0.5223, 0.6951,
      0.4942, 0.5267, 0.6917, 0.4909, 0.5357, 0.687, 0.4912, 0.5404, 0.6831, 0.5067, 0.5345, 0.6764, 0.5232, 0.5502,
      0.6509, 0, 0, 0, 0.5889, 0.5614, -0.5815, 0.5899, 0.5564, -0.5852, 0.5998, 0.5476, -0.5834, 0.6018, 0.5523,
      -0.5769, 0.6085, 0.5489, -0.5731, 0.6153, 0.5403, -0.574, 0.6198, 0.5445, -0.5652, 0.6163, 0.5514, -0.5622,
      0.6066, 0.5601, -0.5642, 0.6018, 0.5584, -0.571, 0.5947, 0.5645, -0.5724, 0.5889, 0.5614, -0.5815, 0, 0, 0,
      0.5019, 0.6038, -0.6193, 0.5113, 0.5926, -0.6224, 0.5126, 0.5856, -0.628, 0.5229, 0.5755, -0.6288, 0.5399, 0.5688,
      -0.6205, 0.559, 0.5679, -0.6041, 0.5817, 0.5514, -0.598, 0.586, 0.557, -0.5885, 0.5813, 0.5678, -0.5829, 0.6003,
      0.5646, -0.5665, 0.6153, 0.5578, -0.557, 0.6267, 0.5575, -0.5445, 0.6222, 0.5468, -0.5602, 0.6406, 0.5218,
      -0.5634, 0.6498, 0.5155, -0.5586, 0.6518, 0.5213, -0.5509, 0.6431, 0.5346, -0.5482, 0.647, 0.5389, -0.5394,
      0.6458, 0.549, -0.5306, 0.6347, 0.5535, -0.5393, 0.6251, 0.5626, -0.5411, 0.6117, 0.57, -0.5486, 0.5996, 0.5798,
      -0.5517, 0.5779, 0.584, -0.5701, 0.5686, 0.5811, -0.5822, 0.5453, 0.6061, -0.5791, 0.5419, 0.5994, -0.5891,
      0.5197, 0.6133, -0.5948, 0.511, 0.6186, -0.5968, 0.4959, 0.6353, -0.5921, 0.4895, 0.6503, -0.581, 0.4806, 0.6586,
      -0.579, 0.4685, 0.661, -0.5862, 0.4726, 0.6427, -0.603, 0.4785, 0.6318, -0.6099, 0.4952, 0.6181, -0.6106, 0.5019,
      0.6038, -0.6193, 0, 0, 0, 0.4225, 0.6968, -0.5796, 0.4168, 0.6942, -0.5868, 0.4066, 0.6995, -0.5877, 0.412,
      0.6853, -0.6005, 0.4293, 0.6818, -0.5922, 0.4454, 0.6691, -0.595, 0.4565, 0.6779, -0.5762, 0.47, 0.6637, -0.5818,
      0.4814, 0.6635, -0.5727, 0.4752, 0.6764, -0.5627, 0.4645, 0.6862, -0.5597, 0.4536, 0.6869, -0.5678, 0.4403,
      0.7043, -0.5569, 0.4314, 0.7139, -0.5516, 0.4277, 0.701, -0.5706, 0.4225, 0.6968, -0.5796, 0, 0, 0, 0.6525,
      0.7572, 0.0301, 0.6608, 0.7495, 0.0393, 0.6614, 0.7484, 0.0489, 0.6743, 0.7367, 0.0505, 0.6796, 0.7314, 0.0575,
      0.673, 0.7353, 0.0805, 0.6944, 0.7137, 0.0919, 0.6962, 0.711, 0.0985, 0.6973, 0.7061, 0.1234, 0.72, 0.6843,
      0.1158, 0.7216, 0.681, 0.1249, 0.7284, 0.6737, 0.125, 0.7253, 0.6755, 0.1325, 0.7199, 0.6802, 0.1381, 0.7149,
      0.6815, 0.1564, 0.7098, 0.6818, 0.177, 0.7099, 0.6804, 0.1818, 0.7003, 0.6858, 0.198, 0.7007, 0.6832, 0.2056,
      0.7069, 0.6756, 0.2095, 0.6967, 0.68, 0.2285, 0.6956, 0.6782, 0.237, 0.6996, 0.6726, 0.2414, 0.6991, 0.6702,
      0.2491, 0.7008, 0.6611, 0.268, 0.7064, 0.6517, 0.2764, 0.7046, 0.6516, 0.281, 0.6982, 0.6578, 0.2823, 0.6915,
      0.6583, 0.2976, 0.6817, 0.669, 0.2963, 0.6791, 0.6691, 0.302, 0.6687, 0.682, 0.2963, 0.6544, 0.6912, 0.3065,
      0.6458, 0.6903, 0.3264, 0.6405, 0.6884, 0.3404, 0.6252, 0.6997, 0.3457, 0.6162, 0.7044, 0.3523, 0.5988, 0.7133,
      0.3642, 0.5967, 0.7143, 0.3656, 0.5858, 0.7071, 0.3962, 0.6225, 0.6601, 0.4204, 0.6192, 0.6595, 0.4263, 0.6065,
      0.6697, 0.4285, 0.5987, 0.6733, 0.4337, 0.592, 0.6706, 0.447, 0.5916, 0.6663, 0.4539, 0.5889, 0.6695, 0.4528,
      0.5869, 0.6749, 0.4473, 0.5822, 0.6793, 0.4467, 0.5699, 0.6837, 0.4559, 0.5579, 0.695, 0.4535, 0.5511, 0.6982,
      0.4569, 0.5478, 0.7023, 0.4547, 0.5563, 0.7011, 0.446, 0.5496, 0.7101, 0.44, 0.5545, 0.7121, 0.4306, 0.5625,
      0.7103, 0.4232, 0.554, 0.7222, 0.4141, 0.5465, 0.7296, 0.4112, 0.5397, 0.729, 0.421, 0.531, 0.7319, 0.427, 0.5265,
      0.7267, 0.4413, 0.5213, 0.7242, 0.4515, 0.5157, 0.7261, 0.4548, 0.5116, 0.7323, 0.4495, 0.5002, 0.7401, 0.4495,
      0.4946, 0.7398, 0.4561, 0.4814, 0.7477, 0.4574, 0.4787, 0.7564, 0.4457, 0.4744, 0.7588, 0.4463, 0.4698, 0.7711,
      0.4297, 0.4833, 0.7646, 0.4264, 0.4768, 0.7728, 0.4189, 0.4801, 0.7847, 0.3921, 0.4904, 0.785, 0.3786, 0.5123,
      0.7774, 0.3649, 0.5242, 0.773, 0.3574, 0.526, 0.7776, 0.3445, 0.5351, 0.7778, 0.3296, 0.5483, 0.7721, 0.3212,
      0.5465, 0.7754, 0.3164, 0.5546, 0.7749, 0.3032, 0.5503, 0.7801, 0.2977, 0.5335, 0.7876, 0.3084, 0.5327, 0.7928,
      0.2962, 0.5284, 0.7957, 0.2961, 0.5301, 0.7984, 0.2854, 0.5181, 0.8056, 0.2875, 0.5162, 0.8091, 0.281, 0.5289,
      0.8126, 0.2446, 0.5278, 0.8151, 0.2387, 0.5328, 0.8189, 0.2135, 0.5306, 0.823, 0.2029, 0.5396, 0.8208, 0.1872,
      0.5546, 0.8104, 0.189, 0.5546, 0.8129, 0.1778, 0.5631, 0.8094, 0.1667, 0.5702, 0.8038, 0.1697, 0.5722, 0.8043,
      0.1599, 0.5657, 0.814, 0.1317, 0.5692, 0.8108, 0.1364, 0.5827, 0.8029, 0.126, 0.6216, 0.7757, 0.1092, 0.6156,
      0.7814, 0.1023, 0.6256, 0.7751, 0.0885, 0.6242, 0.7779, 0.0724, 0.6273, 0.7759, 0.0666, 0.6356, 0.7695, 0.0621,
      0.6389, 0.7674, 0.0546, 0.6449, 0.7626, 0.0503, 0.6441, 0.7641, 0.0357, 0.6525, 0.7572, 0.0301, 0, 0, 0, 0.5752,
      0.0959, 0.8124, 0.5827, 0.093, 0.8074, 0.5832, 0.0833, 0.8081, 0.5883, 0.0776, 0.805, 0.598, 0.0776, 0.7977,
      0.6161, 0.0628, 0.7852, 0.6204, 0.0626, 0.7818, 0.6236, 0.0631, 0.7792, 0.6267, 0.0611, 0.7769, 0.6357, 0.0597,
      0.7696, 0.6394, 0.0669, 0.7659, 0.6512, 0.0742, 0.7553, 0.6568, 0.0683, 0.751, 0.6657, 0.0683, 0.7431, 0.655,
      0.0486, 0.754, 0.6559, -0.015, 0.7547, 0.6634, -0.0294, 0.7476, 0.6541, -0.0363, 0.7555, 0.6507, -0.0436, 0.7581,
      0.6456, -0.0449, 0.7623, 0.6434, -0.0572, 0.7634, 0.6388, -0.0642, 0.7667, 0.6357, -0.0758, 0.7682, 0.63, -0.0815,
      0.7723, 0.6112, -0.0641, 0.7889, 0.6106, -0.054, 0.7901, 0.5601, -0.0185, 0.8282, 0.5577, -0.0166, 0.8299, 0.5577,
      0.0019, 0.8301, 0.5618, 0.009, 0.8272, 0.5688, 0.0205, 0.8222, 0.5738, 0.0333, 0.8183, 0.567, 0.0533, 0.822,
      0.565, 0.062, 0.8227, 0.5577, 0.0741, 0.8267, 0.5661, 0.0845, 0.82, 0.5752, 0.0959, 0.8124, 0, 0, 0, 0.7284,
      0.6737, 0.125, 0.7307, 0.6707, 0.1273, 0.7331, 0.6637, 0.1486, 0.7366, 0.6585, 0.1541, 0.7343, 0.6569, 0.1708,
      0.7403, 0.6485, 0.1774, 0.7354, 0.6503, 0.1906, 0.7352, 0.6477, 0.2001, 0.7369, 0.6414, 0.2138, 0.7399, 0.6382,
      0.2127, 0.7412, 0.6352, 0.2171, 0.7353, 0.6331, 0.242, 0.7265, 0.6375, 0.2566, 0.7223, 0.6364, 0.2706, 0.7167,
      0.6442, 0.2671, 0.7234, 0.6419, 0.2541, 0.7218, 0.646, 0.2483, 0.7261, 0.6447, 0.2391, 0.7234, 0.6543, 0.2204,
      0.7129, 0.6612, 0.2334, 0.7127, 0.6579, 0.2432, 0.7054, 0.6629, 0.2509, 0.7019, 0.6713, 0.2381, 0.6996, 0.6726,
      0.2414, 0.6956, 0.6782, 0.237, 0.6967, 0.68, 0.2285, 0.7069, 0.6756, 0.2095, 0.7007, 0.6832, 0.2056, 0.7003,
      0.6858, 0.198, 0.7099, 0.6804, 0.1818, 0.7098, 0.6818, 0.177, 0.7149, 0.6815, 0.1564, 0.7199, 0.6802, 0.1381,
      0.7253, 0.6755, 0.1325, 0.7284, 0.6737, 0.125, 0, 0, 0, 0.954, 0.2111, -0.213, 0.9503, 0.2317, -0.208, 0.9445,
      0.2457, -0.2179, 0.9386, 0.249, -0.2389, 0.9351, 0.2465, -0.2544, 0.933, 0.2399, -0.2683, 0.928, 0.2516, -0.2748,
      0.9252, 0.2453, -0.2896, 0.9266, 0.234, -0.2942, 0.9317, 0.2137, -0.2936, 0.9426, 0.2005, -0.2669, 0.9425, 0.1902,
      -0.2747, 0.9476, 0.1889, -0.2575, 0.9527, 0.182, -0.2434, 0.9557, 0.1845, -0.2294, 0.9556, 0.1934, -0.2222, 0.954,
      0.2111, -0.213, 0, 0, 0, 0.6128, 0.624, -0.4848, 0.6152, 0.6078, -0.502, 0.6183, 0.5988, -0.509, 0.6274, 0.5826,
      -0.5166, 0.6351, 0.5748, -0.516, 0.6447, 0.572, -0.5071, 0.655, 0.5661, -0.5005, 0.6635, 0.5648, -0.4907, 0.6601,
      0.5726, -0.4862, 0.6524, 0.5833, -0.4838, 0.6475, 0.598, -0.4724, 0.6399, 0.6003, -0.4797, 0.6383, 0.6122,
      -0.4667, 0.637, 0.6135, -0.4668, 0.6336, 0.613, -0.472, 0.6265, 0.6192, -0.4734, 0.6202, 0.6198, -0.4807, 0.6161,
      0.6207, -0.4849, 0.6128, 0.624, -0.4848, 0, 0, 0, 0.2619, 0.6673, 0.6973, 0.2596, 0.672, 0.6936, 0.2563, 0.6733,
      0.6935, 0.2527, 0.6767, 0.6915, 0.254, 0.6796, 0.6882, 0.2566, 0.6805, 0.6863, 0.2568, 0.6848, 0.682, 0.2587,
      0.6855, 0.6806, 0.261, 0.6837, 0.6815, 0.2635, 0.6829, 0.6814, 0.2657, 0.6808, 0.6825, 0.2679, 0.6802, 0.6823,
      0.271, 0.6779, 0.6834, 0.2727, 0.6779, 0.6827, 0.2724, 0.6748, 0.6859, 0.2715, 0.6733, 0.6877, 0.2722, 0.6723,
      0.6884, 0.2697, 0.6718, 0.6899, 0.2632, 0.6698, 0.6943, 0.2635, 0.6671, 0.6968, 0.2619, 0.6673, 0.6973, 0, 0, 0,
      0.6345, 0.4863, 0.6007, 0.6361, 0.5009, 0.5869, 0.6435, 0.4996, 0.5799, 0.6484, 0.4929, 0.5801, 0.649, 0.4895,
      0.5824, 0.657, 0.478, 0.583, 0.6499, 0.4776, 0.5912, 0.6444, 0.4848, 0.5913, 0.6345, 0.4863, 0.6007, 0, 0, 0,
      0.9132, 0.3655, -0.1805, 0.9143, 0.3617, -0.1822, 0.9128, 0.3612, -0.1907, 0.906, 0.3798, -0.1868, 0.9033, 0.3821,
      -0.1948, 0.9064, 0.3693, -0.2052, 0.9103, 0.3546, -0.2136, 0.9056, 0.3544, -0.2331, 0.9091, 0.3402, -0.2406,
      0.9132, 0.3359, -0.2308, 0.9164, 0.3299, -0.2267, 0.9147, 0.3201, -0.2467, 0.9172, 0.3005, -0.2617, 0.9186,
      0.2858, -0.2731, 0.9181, 0.2741, -0.2862, 0.92, 0.2622, -0.2912, 0.9252, 0.2453, -0.2896, 0.928, 0.2516, -0.2748,
      0.933, 0.2399, -0.2683, 0.9351, 0.2465, -0.2544, 0.9318, 0.2542, -0.2592, 0.9279, 0.2684, -0.2589, 0.9274, 0.283,
      -0.2447, 0.9228, 0.2995, -0.2424, 0.9217, 0.313, -0.2291, 0.9243, 0.3142, -0.2168, 0.9269, 0.3084, -0.214, 0.9292,
      0.3079, -0.2045, 0.9293, 0.3108, -0.1995, 0.9359, 0.3009, -0.1829, 0.9313, 0.3158, -0.1816, 0.9246, 0.3332,
      -0.1845, 0.9265, 0.3339, -0.1735, 0.9232, 0.3438, -0.1719, 0.9226, 0.3489, -0.1646, 0.9198, 0.3549, -0.1676,
      0.9132, 0.3655, -0.1805, 0, 0, 0, 0.4893, 0.5487, 0.6779, 0.4862, 0.5485, 0.6803, 0.4861, 0.5459, 0.6824, 0.4821,
      0.546, 0.6852, 0.4817, 0.5578, 0.6758, 0.4835, 0.568, 0.666, 0.4835, 0.5685, 0.6656, 0.4891, 0.5678, 0.6622,
      0.4933, 0.5621, 0.6639, 0.4891, 0.5567, 0.6715, 0.4893, 0.5487, 0.6779, 0, 0, 0, -0.1454, 0.1337, 0.9803, -0.1463,
      0.1287, 0.9808, -0.1448, 0.1203, 0.9821, -0.1486, 0.1126, 0.9825, -0.1437, 0.1079, 0.9837, -0.1383, 0.1067,
      0.9846, -0.1311, 0.0994, 0.9864, -0.1306, 0.0926, 0.9871, -0.1323, 0.0904, 0.9871, -0.1338, 0.0761, 0.9881,
      -0.1383, 0.0759, 0.9875, -0.156, 0.0842, 0.9842, -0.1713, 0.0975, 0.9804, -0.1857, 0.107, 0.9768, -0.1969, 0.1182,
      0.9733, -0.1927, 0.1237, 0.9734, -0.1917, 0.1287, 0.973, -0.1838, 0.1381, 0.9732, -0.1757, 0.1462, 0.9735,
      -0.1721, 0.1466, 0.9741, -0.1676, 0.1485, 0.9746, -0.1607, 0.1379, 0.9773, -0.162, 0.131, 0.9781, -0.1587, 0.1273,
      0.9791, -0.1539, 0.1272, 0.9799, -0.1503, 0.1342, 0.9795, -0.1454, 0.1337, 0.9803, 0, 0, 0, 0.1907, 0.3983,
      0.8972, 0.1829, 0.4083, 0.8943, 0.17, 0.4157, 0.8935, 0.1629, 0.4128, 0.8961, 0.1567, 0.4216, 0.8931, 0.1555,
      0.4284, 0.8901, 0.1454, 0.4399, 0.8862, 0.151, 0.4464, 0.882, 0.1489, 0.4562, 0.8773, 0.1501, 0.4647, 0.8727,
      0.1483, 0.4717, 0.8692, 0.1498, 0.4842, 0.862, 0.1483, 0.4913, 0.8583, 0.1422, 0.5046, 0.8515, 0.1491, 0.5081,
      0.8483, 0.1497, 0.5145, 0.8443, 0.1475, 0.5207, 0.8409, 0.1569, 0.5264, 0.8356, 0.1609, 0.5311, 0.8319, 0.1674,
      0.5354, 0.8279, 0.1668, 0.5466, 0.8206, 0.1843, 0.5416, 0.8202, 0.1901, 0.5429, 0.818, 0.2024, 0.5404, 0.8167,
      0.2224, 0.5338, 0.8158, 0.2312, 0.5207, 0.8219, 0.2446, 0.5178, 0.8198, 0.2658, 0.5115, 0.8171, 0.2824, 0.504,
      0.8162, 0.2886, 0.5079, 0.8116, 0.294, 0.5148, 0.8053, 0.2883, 0.5262, 0.8, 0.2912, 0.5334, 0.7941, 0.2996,
      0.5403, 0.7863, 0.3085, 0.5423, 0.7815, 0.3276, 0.5393, 0.7757, 0.3339, 0.5328, 0.7776, 0.3389, 0.5327, 0.7755,
      0.3439, 0.5302, 0.775, 0.3577, 0.5284, 0.7699, 0.3623, 0.5235, 0.7711, 0.3592, 0.5164, 0.7774, 0.363, 0.51,
      0.7799, 0.3617, 0.5007, 0.7864, 0.3688, 0.4884, 0.7908, 0.3809, 0.4334, 0.8168, 0.3918, 0.3746, 0.8403, 0.3971,
      0.3421, 0.8516, 0.38, 0.342, 0.8594, 0.3808, 0.3351, 0.8618, 0.3159, 0.3664, 0.8752, 0.2508, 0.3973, 0.8827,
      0.2362, 0.3885, 0.8907, 0.2258, 0.3825, 0.8959, 0.2161, 0.3914, 0.8945, 0.1907, 0.3983, 0.8972, 0, 0, 0, 0.9812,
      0.1309, 0.1416, 0.983, 0.1129, 0.1445, 0.9825, 0.1079, 0.1518, 0.9805, 0.104, 0.1667, 0.9776, 0.1178, 0.1746,
      0.9738, 0.1426, 0.1771, 0.9708, 0.1706, 0.1686, 0.9744, 0.1611, 0.1571, 0.9775, 0.1489, 0.1495, 0.9812, 0.1309,
      0.1416, 0, 0, 0, 0.4239, -0.4841, 0.7654, 0.4273, -0.4887, 0.7606, 0.4212, -0.4961, 0.7593, 0.4176, -0.5011,
      0.758, 0.4095, -0.5034, 0.7608, 0.4057, -0.5082, 0.7597, 0.4006, -0.5097, 0.7614, 0.3936, -0.4981, 0.7726, 0.4033,
      -0.4885, 0.7737, 0.4122, -0.4825, 0.7728, 0.4193, -0.4794, 0.7709, 0.4239, -0.4841, 0.7654, 0, 0, 0, 0.2519,
      0.8253, 0.5054, 0.2556, 0.8208, 0.5108, 0.2503, 0.8176, 0.5185, 0.2517, 0.8119, 0.5268, 0.2438, 0.808, 0.5363,
      0.2347, 0.8081, 0.5402, 0.2307, 0.8113, 0.5372, 0.2253, 0.8124, 0.5379, 0.2232, 0.815, 0.5348, 0.2227, 0.8177,
      0.5308, 0.2177, 0.8193, 0.5304, 0.2071, 0.8211, 0.532, 0.2007, 0.8293, 0.5214, 0.2094, 0.8323, 0.5132, 0.2248,
      0.8317, 0.5077, 0.2328, 0.8327, 0.5025, 0.2353, 0.8306, 0.5046, 0.2404, 0.83, 0.5033, 0.2519, 0.8253, 0.5054, 0,
      0, 0, 0.0642, 0.7607, 0.6459, 0.0646, 0.7671, 0.6383, 0.0675, 0.7675, 0.6375, 0.07, 0.7649, 0.6403, 0.07, 0.76,
      0.6461, 0.0668, 0.7598, 0.6468, 0.0642, 0.7607, 0.6459, 0, 0, 0, 0.2629, 0.8307, 0.4908, 0.2562, 0.8269, 0.5006,
      0.2519, 0.8253, 0.5054, 0.2404, 0.83, 0.5033, 0.2353, 0.8306, 0.5046, 0.2328, 0.8327, 0.5025, 0.2248, 0.8317,
      0.5077, 0.2094, 0.8323, 0.5132, 0.2007, 0.8293, 0.5214, 0.1971, 0.8366, 0.5111, 0.1981, 0.8426, 0.5008, 0.2044,
      0.8458, 0.4929, 0.2156, 0.8387, 0.5001, 0.2224, 0.8389, 0.4967, 0.2194, 0.8461, 0.4857, 0.2255, 0.8478, 0.48,
      0.23, 0.8466, 0.4799, 0.2396, 0.8432, 0.4813, 0.2465, 0.8432, 0.4778, 0.2521, 0.841, 0.4787, 0.2561, 0.8364,
      0.4846, 0.2629, 0.8307, 0.4908, 0, 0, 0, -0.031, 0.576, 0.8169, -0.0258, 0.5668, 0.8234, -0.0251, 0.558, 0.8294,
      -0.0203, 0.5426, 0.8397, -0.0165, 0.5395, 0.8418, -0.0193, 0.5338, 0.8454, -0.0387, 0.5313, 0.8463, -0.0455,
      0.5258, 0.8494, -0.0542, 0.5245, 0.8497, -0.0552, 0.5135, 0.8563, -0.073, 0.5076, 0.8585, -0.0791, 0.5, 0.8624,
      -0.0917, 0.4959, 0.8635, -0.1069, 0.4936, 0.8631, -0.1321, 0.4824, 0.8659, -0.1335, 0.4642, 0.8756, -0.1358,
      0.4642, 0.8753, -0.1361, 0.4559, 0.8796, -0.1456, 0.4554, 0.8783, -0.1509, 0.4518, 0.8793, -0.1578, 0.4518, 0.878,
      -0.1632, 0.4538, 0.876, -0.1762, 0.4522, 0.8744, -0.1824, 0.44, 0.8793, -0.1873, 0.4389, 0.8788, -0.1965, 0.419,
      0.8865, -0.2198, 0.4018, 0.8889, -0.2273, 0.3796, 0.8968, -0.2344, 0.3724, 0.898, -0.2369, 0.3665, 0.8997,
      -0.2722, 0.3652, 0.8902, -0.2725, 0.3652, 0.8901, -0.2709, 0.3728, 0.8875, -0.2644, 0.3772, 0.8876, -0.2584,
      0.3856, 0.8858, -0.2587, 0.391, 0.8833, -0.2521, 0.4023, 0.8801, -0.2423, 0.4125, 0.8782, -0.2368, 0.415, 0.8784,
      -0.2317, 0.4243, 0.8754, -0.2303, 0.4327, 0.8716, -0.2236, 0.4424, 0.8685, -0.2129, 0.4481, 0.8683, -0.2014,
      0.4639, 0.8627, -0.2011, 0.4641, 0.8626, -0.1928, 0.4701, 0.8613, -0.1786, 0.4718, 0.8634, -0.1657, 0.4822,
      0.8602, -0.1577, 0.4863, 0.8594, -0.144, 0.499, 0.8546, -0.1458, 0.5177, 0.843, -0.139, 0.5305, 0.8362, -0.1362,
      0.5383, 0.8317, -0.1259, 0.5482, 0.8268, -0.1108, 0.5548, 0.8246, -0.0996, 0.5608, 0.8219, -0.0889, 0.5757,
      0.8128, -0.0838, 0.5844, 0.8071, -0.0735, 0.5843, 0.8082, -0.0653, 0.5783, 0.8132, -0.0518, 0.5793, 0.8135,
      -0.0371, 0.5761, 0.8165, -0.031, 0.576, 0.8169, 0, 0, 0, 0.2985, 0.7457, 0.5956, 0.3001, 0.7474, 0.5927, 0.3064,
      0.7486, 0.588, 0.3159, 0.745, 0.5876, 0.3203, 0.7445, 0.5857, 0.3266, 0.7414, 0.5862, 0.328, 0.7374, 0.5905,
      0.3328, 0.7355, 0.5902, 0.3369, 0.7305, 0.594, 0.3421, 0.7275, 0.5948, 0.3423, 0.7257, 0.5968, 0.3449, 0.7245,
      0.5968, 0.3426, 0.7236, 0.5992, 0.3363, 0.7239, 0.6024, 0.3344, 0.7256, 0.6014, 0.3327, 0.7246, 0.6035, 0.3345,
      0.7225, 0.6051, 0.3335, 0.7186, 0.6102, 0.3337, 0.7144, 0.615, 0.3316, 0.7131, 0.6176, 0.327, 0.7187, 0.6137,
      0.3256, 0.7238, 0.6083, 0.3227, 0.7291, 0.6036, 0.3131, 0.7362, 0.6001, 0.3072, 0.7411, 0.5969, 0.3023, 0.7446,
      0.5952, 0.2985, 0.7457, 0.5956, 0, 0, 0, 0.7429, -0.2159, 0.6336, 0.7446, -0.2232, 0.6291, 0.7453, -0.2344,
      0.6241, 0.7431, -0.2548, 0.6188, 0.7443, -0.2626, 0.6141, 0.7415, -0.2707, 0.6139, 0.7385, -0.2756, 0.6153, 0.737,
      -0.2658, 0.6215, 0.7339, -0.2708, 0.623, 0.7332, -0.2832, 0.6182, 0.7306, -0.2903, 0.618, 0.7268, -0.2941, 0.6207,
      0.7227, -0.3082, 0.6186, 0.7135, -0.3275, 0.6194, 0.7021, -0.3502, 0.6201, 0.6864, -0.3809, 0.6195, 0.6752,
      -0.4033, 0.6177, 0.6642, -0.4217, 0.6173, 0.6541, -0.4254, 0.6254, 0.6422, -0.4321, 0.6331, 0.6372, -0.4281,
      0.6409, 0.6301, -0.4224, 0.6516, 0.6296, -0.4141, 0.6574, 0.6332, -0.3999, 0.6627, 0.6329, -0.3871, 0.6705,
      0.6351, -0.3755, 0.675, 0.6404, -0.3638, 0.6764, 0.6466, -0.361, 0.672, 0.648, -0.3556, 0.6735, 0.6569, -0.3432,
      0.6714, 0.6606, -0.3327, 0.673, 0.6597, -0.3249, 0.6776, 0.6599, -0.3145, 0.6823, 0.6624, -0.2992, 0.6868, 0.6686,
      -0.2899, 0.6848, 0.6724, -0.2793, 0.6855, 0.6784, -0.2786, 0.6798, 0.6857, -0.2752, 0.6738, 0.6907, -0.2722, 0.67,
      0.6959, -0.2719, 0.6647, 0.7044, -0.2624, 0.6596, 0.7158, -0.252, 0.6512, 0.7208, -0.2435, 0.6489, 0.7206,
      -0.2362, 0.6518, 0.7251, -0.2383, 0.6462, 0.7334, -0.2265, 0.641, 0.7353, -0.2162, 0.6423, 0.7403, -0.2086,
      0.6391, 0.7429, -0.2159, 0.6336, 0, 0, 0, -0.9479, 0.3173, 0.0281, -0.9481, 0.3171, 0.025, -0.9515, 0.3071,
      0.0191, -0.9509, 0.309, 0.0161, -0.9512, 0.3083, 0.0141, -0.952, 0.3058, 0.0142, -0.952, 0.306, -0.0011, -0.9519,
      0.306, -0.0166, -0.9548, 0.2966, -0.0167, -0.9547, 0.2966, -0.0242, -0.9565, 0.291, -0.0181, -0.9578, 0.2872,
      -0.0119, -0.9589, 0.2835, -0.0101, -0.9592, 0.2825, -0.0073, -0.9609, 0.2768, -0.0078, -0.9605, 0.2768, -0.0293,
      -0.9641, 0.2631, -0.0375, -0.965, 0.2599, -0.0352, -0.966, 0.256, -0.0372, -0.9672, 0.251, -0.0376, -0.9614,
      0.2692, -0.0564, -0.9594, 0.2746, -0.065, -0.9571, 0.279, -0.0785, -0.9566, 0.2778, -0.0879, -0.9571, 0.2715,
      -0.1015, -0.9566, 0.2698, -0.11, -0.9539, 0.2742, -0.1216, -0.9514, 0.2774, -0.1339, -0.9468, 0.2851, -0.1491,
      -0.9441, 0.2875, -0.1613, -0.9384, 0.2952, -0.1795, -0.9332, 0.3032, -0.1927, -0.931, 0.3076, -0.1965, -0.9287,
      0.3086, -0.2055, -0.9232, 0.3139, -0.2217, -0.9191, 0.3214, -0.2278, -0.9116, 0.3308, -0.2441, -0.9059, 0.3411,
      -0.2511, -0.902, 0.3491, -0.2541, -0.9029, 0.3507, -0.2487, -0.9007, 0.3554, -0.2498, -0.9002, 0.3596, -0.2458,
      -0.8981, 0.3652, -0.2451, -0.8938, 0.3725, -0.2496, -0.8909, 0.379, -0.2503, -0.8862, 0.3871, -0.2546, -0.8756,
      0.403, -0.2662, -0.8655, 0.4155, -0.2798, -0.8588, 0.4253, -0.2857, -0.8515, 0.4318, -0.2975, -0.8488, 0.4356,
      -0.2996, -0.8451, 0.4453, -0.2958, -0.8407, 0.4489, -0.3027, -0.834, 0.4565, -0.31, -0.8273, 0.4673, -0.3117,
      -0.8238, 0.4686, -0.3192, -0.8164, 0.4767, -0.3259, -0.81, 0.4841, -0.331, -0.8073, 0.4889, -0.3306, -0.7981,
      0.5003, -0.3357, -0.7898, 0.5118, -0.3379, -0.7867, 0.5176, -0.3364, -0.7791, 0.5235, -0.3448, -0.7775, 0.5229,
      -0.3495, -0.7717, 0.5269, -0.3562, -0.774, 0.5209, -0.3599, -0.779, 0.5137, -0.3595, -0.7857, 0.5025, -0.3609,
      -0.7911, 0.4962, -0.3577, -0.8011, 0.4857, -0.3498, -0.8039, 0.4822, -0.3483, -0.8054, 0.4811, -0.3464, -0.8088,
      0.4758, -0.3456, -0.8098, 0.476, -0.3431, -0.8158, 0.4661, -0.3423, -0.8195, 0.4621, -0.3388, -0.8234, 0.4567,
      -0.3368, -0.8308, 0.4487, -0.3292, -0.8394, 0.4342, -0.327, -0.8441, 0.4273, -0.3238, -0.8489, 0.4199, -0.321,
      -0.8528, 0.4115, -0.3215, -0.8557, 0.411, -0.3144, -0.8609, 0.4037, -0.3095, -0.8658, 0.3966, -0.3051, -0.8669,
      0.3937, -0.3058, -0.867, 0.3878, -0.313, -0.8659, 0.3879, -0.3157, -0.8606, 0.3976, -0.3183, -0.8531, 0.4068,
      -0.3266, -0.8458, 0.4144, -0.3361, -0.841, 0.4185, -0.3429, -0.8362, 0.43, -0.3404, -0.8315, 0.4386, -0.341,
      -0.8264, 0.4434, -0.347, -0.819, 0.4504, -0.3555, -0.8191, 0.4484, -0.3578, -0.8157, 0.4524, -0.3606, -0.81,
      0.4562, -0.3685, -0.8019, 0.4652, -0.3749, -0.8018, 0.4664, -0.3736, -0.8049, 0.4655, -0.368, -0.8045, 0.4712,
      -0.3615, -0.8013, 0.4782, -0.3595, -0.791, 0.4891, -0.3677, -0.785, 0.4933, -0.3747, -0.7777, 0.5027, -0.3774,
      -0.77, 0.5126, -0.3799, -0.7605, 0.5245, -0.3828, -0.7503, 0.5378, -0.3844, -0.7571, 0.539, -0.3691, -0.7642,
      0.5405, -0.3518, -0.7653, 0.5377, -0.3539, -0.7785, 0.5305, -0.3354, -0.7973, 0.52, -0.3064, -0.8074, 0.5201,
      -0.2786, -0.8112, 0.5201, -0.2674, -0.8076, 0.5263, -0.2661, -0.8153, 0.5263, -0.2416, -0.8199, 0.521, -0.2373,
      -0.8247, 0.5163, -0.2308, -0.8309, 0.5097, -0.2232, -0.8366, 0.5018, -0.2196, -0.8422, 0.4935, -0.2171, -0.8466,
      0.4889, -0.2101, -0.8521, 0.4844, -0.1984, -0.8476, 0.4964, -0.1876, -0.85, 0.4967, -0.1755, -0.8555, 0.4906,
      -0.1656, -0.8626, 0.4802, -0.1592, -0.8683, 0.4712, -0.1548, -0.8745, 0.4624, -0.1467, -0.8805, 0.4515, -0.1442,
      -0.8849, 0.4442, -0.1405, -0.8891, 0.4393, -0.1287, -0.8923, 0.4359, -0.1179, -0.8928, 0.4363, -0.1118, -0.8986,
      0.4225, -0.1187, -0.9034, 0.4111, -0.1222, -0.9125, 0.3896, -0.1246, -0.9155, 0.3818, -0.1266, -0.9195, 0.373,
      -0.1243, -0.9233, 0.3651, -0.1197, -0.9285, 0.3524, -0.1171, -0.9342, 0.3402, -0.1069, -0.938, 0.3308, -0.1034,
      -0.9415, 0.3227, -0.0973, -0.9446, 0.3183, -0.08, -0.9474, 0.3114, -0.0733, -0.9469, 0.316, -0.0587, -0.9471,
      0.3177, -0.0461, -0.9466, 0.3207, -0.0337, -0.9459, 0.3235, -0.0232, -0.9438, 0.3303, -0.0127, -0.9404, 0.3398,
      -0.0088, -0.9354, 0.3536, -0.0074, -0.9336, 0.3584, -0.0045, -0.9319, 0.3626, 0.0065, -0.9302, 0.3664, 0.0236,
      -0.9299, 0.3658, 0.038, -0.9289, 0.3672, 0.0478, -0.93, 0.3638, 0.0518, -0.9331, 0.3559, 0.0514, -0.9372, 0.3462,
      0.0428, -0.941, 0.3362, 0.0391, -0.9419, 0.3334, 0.0422, -0.9445, 0.3262, 0.0398, -0.949, 0.3133, 0.0358, -0.9477,
      0.3176, 0.0316, -0.9479, 0.3173, 0.0281, 0, 0, 0, 0.2714, 0.654, 0.7062, 0.2653, 0.6572, 0.7055, 0.2618, 0.6628,
      0.7015, 0.2619, 0.6673, 0.6973, 0.2619, 0.6673, 0.6973, 0.2635, 0.6671, 0.6968, 0.2632, 0.6698, 0.6943, 0.2697,
      0.6718, 0.6899, 0.2722, 0.6723, 0.6884, 0.2761, 0.6731, 0.6861, 0.2815, 0.6733, 0.6837, 0.289, 0.6691, 0.6847,
      0.2928, 0.6605, 0.6914, 0.2906, 0.6601, 0.6927, 0.2894, 0.6578, 0.6954, 0.2828, 0.658, 0.6979, 0.279, 0.6552,
      0.7021, 0.2714, 0.654, 0.7062, 0, 0, 0, 0.0063, 0.2576, 0.9662, -0.0045, 0.2575, 0.9663, -0.0087, 0.2608, 0.9654,
      -0.018, 0.2584, 0.9659, -0.0338, 0.2514, 0.9673, -0.0371, 0.2461, 0.9685, -0.0503, 0.2385, 0.9698, -0.0526,
      0.2341, 0.9708, -0.0598, 0.2307, 0.9712, -0.0679, 0.233, 0.9701, -0.0727, 0.2288, 0.9708, -0.0753, 0.2172, 0.9732,
      -0.0891, 0.203, 0.9751, -0.0888, 0.1972, 0.9763, -0.0936, 0.19, 0.9773, -0.0926, 0.18, 0.9793, -0.0997, 0.1775,
      0.9791, -0.1038, 0.1753, 0.979, -0.1063, 0.1826, 0.9774, -0.1112, 0.1807, 0.9772, -0.1142, 0.181, 0.9768, -0.1174,
      0.176, 0.9774, -0.1306, 0.1762, 0.9757, -0.1352, 0.1788, 0.9746, -0.1375, 0.1772, 0.9745, -0.1425, 0.1821, 0.9729,
      -0.1415, 0.1873, 0.9721, -0.1436, 0.1893, 0.9714, -0.1472, 0.1876, 0.9712, -0.1464, 0.1931, 0.9702, -0.1428,
      0.1975, 0.9698, -0.1495, 0.2047, 0.9673, -0.1514, 0.2094, 0.966, -0.155, 0.2132, 0.9646, -0.1583, 0.2136, 0.964,
      -0.1625, 0.2112, 0.9638, -0.168, 0.2089, 0.9634, -0.1727, 0.2052, 0.9633, -0.1799, 0.2066, 0.9617, -0.1844,
      0.2109, 0.96, -0.1871, 0.2115, 0.9593, -0.1916, 0.2092, 0.9589, -0.1942, 0.2092, 0.9584, -0.1949, 0.2155, 0.9569,
      -0.1939, 0.2208, 0.9559, -0.195, 0.2274, 0.9541, -0.201, 0.2321, 0.9517, -0.2038, 0.2418, 0.9487, -0.204, 0.2524,
      0.9459, -0.1983, 0.2554, 0.9463, -0.195, 0.2654, 0.9442, -0.1897, 0.2657, 0.9452, -0.1784, 0.2611, 0.9487,
      -0.1689, 0.2644, 0.9495, -0.1625, 0.2633, 0.9509, -0.1599, 0.267, 0.9503, -0.093, 0.2673, 0.9591, -0.089, 0.279,
      0.9562, -0.0918, 0.2811, 0.9553, -0.0973, 0.3525, 0.9307, -0.1019, 0.4219, 0.9009, -0.0778, 0.4222, 0.9032,
      -0.0249, 0.3874, 0.9216, 0.0298, 0.352, 0.9355, 0.0338, 0.3444, 0.9382, 0.044, 0.3397, 0.9395, 0.0517, 0.337,
      0.9401, 0.0521, 0.3265, 0.9438, 0.0703, 0.3281, 0.942, 0.0713, 0.2899, 0.9544, 0.0624, 0.2787, 0.9583, 0.0611,
      0.2684, 0.9614, 0.0463, 0.2657, 0.9629, 0.0233, 0.2643, 0.9642, 0.0171, 0.2583, 0.9659, 0.0063, 0.2576, 0.9662, 0,
      0, 0, 0.9348, 0.353, -0.0387, 0.9298, 0.3661, -0.0374, 0.9305, 0.3636, -0.0431, 0.9259, 0.3753, -0.0432, 0.9239,
      0.3791, -0.0511, 0.9212, 0.386, -0.0493, 0.9187, 0.3914, -0.0528, 0.9114, 0.408, -0.053, 0.9123, 0.4044, -0.0655,
      0.9058, 0.4175, -0.0721, 0.9022, 0.4252, -0.0726, 0.8951, 0.4384, -0.0808, 0.8908, 0.4473, -0.0799, 0.8833,
      0.4581, -0.0994, 0.8834, 0.4553, -0.1106, 0.8787, 0.4648, -0.1087, 0.8765, 0.4677, -0.1139, 0.8736, 0.4735,
      -0.1123, 0.8718, 0.4746, -0.1212, 0.8759, 0.4656, -0.1269, 0.8768, 0.4619, -0.1339, 0.8827, 0.45, -0.1353, 0.8891,
      0.4371, -0.1356, 0.8975, 0.4239, -0.1217, 0.9062, 0.4051, -0.121, 0.9027, 0.4077, -0.1375, 0.9085, 0.393, -0.1422,
      0.9081, 0.3899, -0.1525, 0.9144, 0.3765, -0.1488, 0.9148, 0.3704, -0.161, 0.9147, 0.3675, -0.1682, 0.9106, 0.3722,
      -0.1795, 0.9132, 0.3655, -0.1805, 0.9198, 0.3549, -0.1676, 0.9226, 0.3489, -0.1646, 0.9256, 0.3451, -0.1556,
      0.9297, 0.338, -0.1466, 0.9317, 0.3372, -0.1351, 0.9389, 0.3194, -0.1286, 0.9408, 0.3164, -0.1218, 0.9444, 0.3018,
      -0.1304, 0.9466, 0.2897, -0.1414, 0.9488, 0.2786, -0.1486, 0.9538, 0.264, -0.1432, 0.9555, 0.2609, -0.1376,
      0.9572, 0.2524, -0.1419, 0.9588, 0.239, -0.1535, 0.9607, 0.2295, -0.1558, 0.9626, 0.2216, -0.1558, 0.9649, 0.2061,
      -0.163, 0.9696, 0.1901, -0.1542, 0.9741, 0.1725, -0.1465, 0.972, 0.1852, -0.1445, 0.9687, 0.1984, -0.1493, 0.9675,
      0.2085, -0.1434, 0.9632, 0.227, -0.1441, 0.9621, 0.2358, -0.137, 0.9578, 0.2561, -0.1308, 0.9523, 0.2773, -0.127,
      0.9492, 0.2912, -0.1193, 0.953, 0.2828, -0.1087, 0.9584, 0.2708, -0.0901, 0.9588, 0.2723, -0.0807, 0.9585, 0.2763,
      -0.0702, 0.9519, 0.297, -0.0755, 0.9472, 0.3126, -0.0716, 0.9416, 0.3316, -0.0583, 0.9394, 0.3375, -0.0601,
      0.9392, 0.3396, -0.0505, 0.9348, 0.353, -0.0387, 0, 0, 0, 0.2527, 0.6767, 0.6915, 0.2498, 0.6756, 0.6937, 0.2482,
      0.678, 0.6919, 0.2449, 0.6717, 0.6992, 0.247, 0.6675, 0.7024, 0.2441, 0.6685, 0.7025, 0.2394, 0.6728, 0.7, 0.2334,
      0.6753, 0.6996, 0.2341, 0.6775, 0.6973, 0.2338, 0.6845, 0.6905, 0.2368, 0.6875, 0.6865, 0.2387, 0.6887, 0.6847,
      0.2425, 0.6865, 0.6855, 0.2448, 0.6847, 0.6864, 0.2492, 0.6834, 0.6862, 0.2546, 0.6807, 0.6869, 0.254, 0.6796,
      0.6882, 0.2527, 0.6767, 0.6915, 0, 0, 0, 0.5757, 0.7648, -0.2893, 0.5871, 0.7562, -0.2888, 0.6024, 0.7447,
      -0.2872, 0.6059, 0.7399, -0.2922, 0.6015, 0.7414, -0.2974, 0.5981, 0.7396, -0.3086, 0.5897, 0.7439, -0.3144,
      0.5889, 0.7402, -0.3246, 0.5914, 0.7319, -0.3383, 0.596, 0.7277, -0.3395, 0.5994, 0.729, -0.3305, 0.6091, 0.7274,
      -0.316, 0.6161, 0.724, -0.3101, 0.6275, 0.716, -0.3059, 0.6398, 0.7113, -0.291, 0.6508, 0.7047, -0.2825, 0.6535,
      0.7073, -0.2698, 0.655, 0.7084, -0.263, 0.6648, 0.7004, -0.2598, 0.6677, 0.6956, -0.2653, 0.6706, 0.6914, -0.2686,
      0.6776, 0.6872, -0.2619, 0.6869, 0.6804, -0.2556, 0.6959, 0.6758, -0.2429, 0.7024, 0.6754, -0.2248, 0.7124,
      0.6709, -0.206, 0.7225, 0.6639, -0.1931, 0.7204, 0.6679, -0.1866, 0.7242, 0.6679, -0.1714, 0.7214, 0.6758,
      -0.1512, 0.7222, 0.6777, -0.1384, 0.7268, 0.6759, -0.1218, 0.7281, 0.6788, -0.0952, 0.7301, 0.6785, -0.0812,
      0.7239, 0.6861, -0.073, 0.7133, 0.6977, -0.0663, 0.7127, 0.6991, -0.0585, 0.7061, 0.7068, -0.0429, 0.7052, 0.7085,
      -0.0263, 0.7035, 0.7106, -0.0116, 0.6981, 0.7159, -0.0071, 0.6833, 0.73, -0.0116, 0.6731, 0.7396, -0.0033, 0.6681,
      0.744, 0.0134, 0.6609, 0.7501, 0.0229, 0.6516, 0.7581, 0.0256, 0.6497, 0.7601, 0.0135, 0.6383, 0.7698, -0.008,
      0.6315, 0.775, -0.0246, 0.6352, 0.7716, -0.0344, 0.6347, 0.7714, -0.046, 0.6403, 0.7662, -0.054, 0.6398, 0.7658,
      -0.0651, 0.6413, 0.763, -0.0817, 0.6306, 0.7708, -0.0912, 0.6233, 0.7773, -0.0857, 0.6077, 0.7885, -0.0947,
      0.6113, 0.7841, -0.1076, 0.6111, 0.7828, -0.1176, 0.612, 0.78, -0.1308, 0.6214, 0.7717, -0.135, 0.6234, 0.7671,
      -0.1517, 0.6184, 0.7691, -0.1613, 0.613, 0.7706, -0.1745, 0.6115, 0.7691, -0.1857, 0.6144, 0.7637, -0.1981,
      0.6187, 0.7579, -0.2067, 0.6152, 0.7581, -0.2167, 0.6123, 0.7562, -0.2309, 0.6054, 0.759, -0.2395, 0.5977, 0.7609,
      -0.2525, 0.5825, 0.7688, -0.2638, 0.581, 0.7676, -0.2705, 0.5826, 0.7639, -0.2777, 0.5757, 0.7648, -0.2893, 0, 0,
      0, 0.5558, -0.1997, 0.8069, 0.5666, -0.1983, 0.7998, 0.5826, -0.2031, 0.787, 0.5865, -0.201, 0.7846, 0.596,
      -0.2005, 0.7775, 0.6015, -0.1954, 0.7746, 0.6095, -0.1957, 0.7682, 0.6249, -0.189, 0.7575, 0.6365, -0.1791,
      0.7502, 0.6365, -0.1791, 0.7502, 0.6365, -0.1791, 0.7502, 0.6377, -0.1868, 0.7473, 0.635, -0.2038, 0.7451, 0.6345,
      -0.2188, 0.7413, 0.6309, -0.2453, 0.7361, 0.6317, -0.2536, 0.7325, 0.6258, -0.2657, 0.7333, 0.6187, -0.2773,
      0.735, 0.6086, -0.2877, 0.7395, 0.5955, -0.2941, 0.7476, 0.5791, -0.3021, 0.7572, 0.5606, -0.3199, 0.7637, 0.5549,
      -0.323, 0.7667, 0.5432, -0.3347, 0.77, 0.5368, -0.3385, 0.7728, 0.5333, -0.3502, 0.7701, 0.5369, -0.3625, 0.7618,
      0.5373, -0.372, 0.7569, 0.5364, -0.3769, 0.7552, 0.5389, -0.3761, 0.7538, 0.5347, -0.3919, 0.7487, 0.5307,
      -0.3993, 0.7476, 0.5331, -0.4021, 0.7444, 0.5295, -0.4087, 0.7434, 0.5226, -0.4143, 0.7452, 0.5104, -0.4197,
      0.7506, 0.4923, -0.4283, 0.7578, 0.485, -0.4341, 0.7592, 0.4844, -0.4407, 0.7557, 0.4875, -0.4418, 0.7531, 0.4842,
      -0.45, 0.7504, 0.4742, -0.4498, 0.7568, 0.4749, -0.4429, 0.7604, 0.4748, -0.4359, 0.7646, 0.475, -0.4303, 0.7676,
      0.4818, -0.4126, 0.7731, 0.4809, -0.4013, 0.7795, 0.4793, -0.3787, 0.7917, 0.4977, -0.3603, 0.789, 0.5037,
      -0.3485, 0.7904, 0.5061, -0.347, 0.7896, 0.5096, -0.3374, 0.7915, 0.5083, -0.3325, 0.7944, 0.5112, -0.3202,
      0.7976, 0.516, -0.3087, 0.7991, 0.5195, -0.2876, 0.8046, 0.513, -0.2822, 0.8107, 0.5065, -0.281, 0.8152, 0.504,
      -0.2768, 0.8181, 0.4979, -0.2733, 0.823, 0.4858, -0.2736, 0.8301, 0.4858, -0.2674, 0.8322, 0.486, -0.2554, 0.8358,
      0.5316, -0.2414, 0.8119, 0.5385, -0.2496, 0.8048, 0.5426, -0.248, 0.8025, 0.5475, -0.2523, 0.7979, 0.5473,
      -0.2591, 0.7958, 0.5432, -0.2669, 0.7961, 0.5423, -0.2787, 0.7926, 0.5496, -0.2891, 0.7839, 0.5557, -0.2774,
      0.7837, 0.5622, -0.2739, 0.7803, 0.5645, -0.2523, 0.786, 0.5605, -0.24, 0.7926, 0.5563, -0.2346, 0.7972, 0.5514,
      -0.2348, 0.8005, 0.5504, -0.2127, 0.8074, 0.5558, -0.1997, 0.8069, 0, 0, 0, -0.1341, 0.4601, 0.8777, -0.0778,
      0.4222, 0.9032, -0.1019, 0.4219, 0.9009, -0.0973, 0.3525, 0.9307, -0.0918, 0.2811, 0.9553, -0.089, 0.279, 0.9562,
      -0.093, 0.2673, 0.9591, -0.1599, 0.267, 0.9503, -0.1625, 0.2633, 0.9509, -0.1689, 0.2644, 0.9495, -0.1784, 0.2611,
      0.9487, -0.1897, 0.2657, 0.9452, -0.195, 0.2654, 0.9442, -0.1983, 0.2554, 0.9463, -0.204, 0.2524, 0.9459, -0.2142,
      0.2639, 0.9405, -0.2233, 0.2763, 0.9348, -0.2338, 0.2807, 0.9309, -0.2412, 0.2857, 0.9275, -0.2502, 0.2855,
      0.9251, -0.2584, 0.2818, 0.924, -0.2663, 0.2833, 0.9213, -0.2722, 0.2779, 0.9212, -0.2729, 0.2869, 0.9183,
      -0.2677, 0.2952, 0.9172, -0.2643, 0.3108, 0.913, -0.2645, 0.3272, 0.9072, -0.2656, 0.3353, 0.9039, -0.2632,
      0.3435, 0.9015, -0.2665, 0.3513, 0.8975, -0.2739, 0.3584, 0.8925, -0.2699, 0.3638, 0.8915, -0.2084, 0.3637,
      0.9079, -0.2093, 0.3871, 0.898, -0.2047, 0.3953, 0.8955, -0.1899, 0.3967, 0.8981, -0.1865, 0.4373, 0.8798,
      -0.1359, 0.4365, 0.8894, -0.1341, 0.4601, 0.8777, 0, 0, 0, 0.5558, -0.1997, 0.8069, 0.5504, -0.2127, 0.8074,
      0.5514, -0.2348, 0.8005, 0.5563, -0.2346, 0.7972, 0.5605, -0.24, 0.7926, 0.5645, -0.2523, 0.786, 0.5622, -0.2739,
      0.7803, 0.5557, -0.2774, 0.7837, 0.5496, -0.2891, 0.7839, 0.5423, -0.2787, 0.7926, 0.5432, -0.2669, 0.7961,
      0.5473, -0.2591, 0.7958, 0.5475, -0.2523, 0.7979, 0.5426, -0.248, 0.8025, 0.5385, -0.2496, 0.8048, 0.5316,
      -0.2414, 0.8119, 0.5247, -0.2371, 0.8176, 0.531, -0.2213, 0.818, 0.5362, -0.2153, 0.8161, 0.5351, -0.2012, 0.8205,
      0.5395, -0.1873, 0.8209, 0.5424, -0.1827, 0.82, 0.5402, -0.1681, 0.8246, 0.5341, -0.1604, 0.8301, 0.5479, -0.1636,
      0.8204, 0.5504, -0.1684, 0.8178, 0.5544, -0.1764, 0.8133, 0.5558, -0.1997, 0.8069, 0, 0, 0, 0.9092, 0.0789,
      -0.4087, 0.9066, 0.0699, -0.4162, 0.9047, 0.0758, -0.4193, 0.9012, 0.0753, -0.4269, 0.8999, 0.0864, -0.4274,
      0.8989, 0.0949, -0.4278, 0.8919, 0.107, -0.4393, 0.8867, 0.1206, -0.4464, 0.8835, 0.1206, -0.4527, 0.8803, 0.1119,
      -0.4611, 0.8807, 0.1043, -0.4621, 0.8757, 0.0995, -0.4725, 0.8692, 0.0942, -0.4854, 0.8703, 0.0874, -0.4846,
      0.876, 0.0866, -0.4744, 0.8751, 0.0781, -0.4775, 0.8816, 0.0722, -0.4664, 0.8884, 0.0751, -0.4529, 0.8973, 0.0751,
      -0.435, 0.9011, 0.0553, -0.4302, 0.9042, 0.0492, -0.4242, 0.9088, 0.025, -0.4165, 0.9147, 0.0212, -0.4035, 0.9211,
      0.0261, -0.3883, 0.9244, 0.0246, -0.3806, 0.9284, 0.0158, -0.3713, 0.9324, 0.017, -0.3609, 0.9365, 0.0135,
      -0.3504, 0.9404, 0.0234, -0.3391, 0.9411, 0.035, -0.3363, 0.9369, 0.029, -0.3484, 0.932, 0.0323, -0.3609, 0.9302,
      0.0471, -0.364, 0.9273, 0.0503, -0.3708, 0.9192, 0.0541, -0.3901, 0.9135, 0.0679, -0.4012, 0.9092, 0.0789,
      -0.4087, 0, 0, 0, 0.9719, 0.1084, -0.2091, 0.9712, 0.1068, -0.213, 0.97, 0.0963, -0.2233, 0.9694, 0.0846, -0.2306,
      0.97, 0.0729, -0.2318, 0.971, 0.065, -0.2301, 0.971, 0.059, -0.2318, 0.9712, 0.0487, -0.2332, 0.97, 0.0439,
      -0.2392, 0.9688, 0.0285, -0.246, 0.9691, 0.0226, -0.2457, 0.9721, 0.0214, -0.2337, 0.9754, 0.0343, -0.2176,
      0.9792, 0.0482, -0.1973, 0.9791, 0.057, -0.1952, 0.9803, 0.0687, -0.1851, 0.9797, 0.0831, -0.1826, 0.98, 0.0926,
      -0.1763, 0.9784, 0.1052, -0.1779, 0.9783, 0.1126, -0.174, 0.9774, 0.1157, -0.1769, 0.9756, 0.1081, -0.191, 0.9763,
      0.0992, -0.1925, 0.9738, 0.1012, -0.2037, 0.9719, 0.1084, -0.2091, 0, 0, 0, 0.1942, -0.2974, 0.9348, 0.2022,
      -0.2942, 0.9341, 0.2122, -0.2914, 0.9328, 0.2227, -0.2919, 0.9302, 0.2318, -0.2994, 0.9255, 0.2343, -0.2983,
      0.9253, 0.2992, -0.2975, 0.9066, 0.3093, -0.3055, 0.9005, 0.3468, -0.3079, 0.886, 0.3759, -0.3011, 0.8764, 0.3889,
      -0.2973, 0.872, 0.3986, -0.2983, 0.8673, 0.404, -0.302, 0.8634, 0.404, -0.3034, 0.863, 0.395, -0.3071, 0.8658,
      0.3904, -0.3072, 0.8679, 0.3798, -0.3137, 0.8703, 0.3749, -0.3068, 0.8748, 0.3505, -0.3127, 0.8828, 0.339,
      -0.3132, 0.8871, 0.3309, -0.3716, 0.8674, 0.3159, -0.3722, 0.8728, 0.309, -0.4189, 0.8538, 0.2992, -0.4766,
      0.8267, 0.2849, -0.4844, 0.8272, 0.2769, -0.4855, 0.8292, 0.2683, -0.4826, 0.8337, 0.2619, -0.4815, 0.8364,
      0.2605, -0.4749, 0.8406, 0.2554, -0.4707, 0.8445, 0.2471, -0.4783, 0.8427, 0.2379, -0.4667, 0.8518, 0.2336,
      -0.4554, 0.8591, 0.2322, -0.4402, 0.8673, 0.2299, -0.4288, 0.8736, 0.2276, -0.4044, 0.8858, 0.2293, -0.3852,
      0.8939, 0.2282, -0.3764, 0.8979, 0.2227, -0.3697, 0.9021, 0.2158, -0.3563, 0.9091, 0.209, -0.3367, 0.9181, 0.2063,
      -0.3263, 0.9225, 0.1943, -0.3102, 0.9306, 0.1942, -0.2974, 0.9348, 0, 0, 0, 0.2292, -0.3597, -0.9045, 0.2153,
      -0.3697, -0.9038, 0.2064, -0.3772, -0.9028, 0.2121, -0.3811, -0.8999, 0.2211, -0.3767, -0.8996, 0.2331, -0.3694,
      -0.8996, 0.2441, -0.3608, -0.9001, 0.2556, -0.3493, -0.9015, 0.2584, -0.3438, -0.9028, 0.2516, -0.344, -0.9046,
      0.2422, -0.3496, -0.9051, 0.2347, -0.3551, -0.9049, 0.2292, -0.3597, -0.9045, 0, 0, 0, 0.0617, 0.2021, 0.9774,
      0.0486, 0.2119, 0.9761, 0.0425, 0.2119, 0.9764, 0.0368, 0.2069, 0.9777, 0.0371, 0.2186, 0.9751, 0.0174, 0.2224,
      0.9748, 0.0169, 0.2307, 0.9729, 0.0073, 0.2417, 0.9703, 0.005, 0.2494, 0.9684, 0.0063, 0.2576, 0.9662, 0.0171,
      0.2583, 0.9659, 0.0233, 0.2643, 0.9642, 0.0463, 0.2657, 0.9629, 0.0611, 0.2684, 0.9614, 0.0624, 0.2787, 0.9583,
      0.0713, 0.2899, 0.9544, 0.0703, 0.3281, 0.942, 0.0932, 0.3355, 0.9374, 0.1386, 0.3676, 0.9196, 0.1907, 0.3983,
      0.8972, 0.2161, 0.3914, 0.8945, 0.2258, 0.3825, 0.8959, 0.2362, 0.3885, 0.8907, 0.2426, 0.3634, 0.8995, 0.249,
      0.3592, 0.8995, 0.2497, 0.354, 0.9013, 0.2568, 0.3484, 0.9015, 0.2541, 0.3413, 0.9049, 0.2511, 0.3078, 0.9177,
      0.252, 0.2861, 0.9245, 0.2325, 0.2703, 0.9343, 0.2268, 0.2481, 0.9418, 0.234, 0.2419, 0.9417, 0.2346, 0.231,
      0.9442, 0.2452, 0.2306, 0.9417, 0.244, 0.2226, 0.9439, 0.2394, 0.2216, 0.9453, 0.2392, 0.2162, 0.9466, 0.2361,
      0.2158, 0.9475, 0.2239, 0.2344, 0.946, 0.22, 0.2351, 0.9467, 0.2076, 0.2256, 0.9519, 0.1945, 0.2305, 0.9534,
      0.1855, 0.2315, 0.955, 0.1807, 0.2291, 0.9565, 0.1709, 0.2297, 0.9581, 0.1613, 0.2224, 0.9615, 0.1528, 0.222,
      0.963, 0.1321, 0.2308, 0.964, 0.1243, 0.2266, 0.966, 0.1157, 0.2269, 0.967, 0.1092, 0.2333, 0.9663, 0.0921,
      0.2397, 0.9665, 0.074, 0.2376, 0.9685, 0.0696, 0.234, 0.9697, 0.0674, 0.2242, 0.9722, 0.0627, 0.2173, 0.9741,
      0.0617, 0.2021, 0.9774, 0, 0, 0, 0.0467, 0.109, 0.9929, 0.0475, 0.1369, 0.9894, 0.047, 0.1479, 0.9879, 0.0502,
      0.1588, 0.986, 0.0554, 0.1641, 0.9849, 0.0636, 0.1747, 0.9826, 0.0618, 0.1794, 0.9818, 0.0651, 0.1863, 0.9803,
      0.0611, 0.1964, 0.9786, 0.0617, 0.2021, 0.9774, 0.0627, 0.2173, 0.9741, 0.0674, 0.2242, 0.9722, 0.0696, 0.234,
      0.9697, 0.074, 0.2376, 0.9685, 0.0921, 0.2397, 0.9665, 0.1092, 0.2333, 0.9663, 0.1157, 0.2269, 0.967, 0.1243,
      0.2266, 0.966, 0.1321, 0.2308, 0.964, 0.1528, 0.222, 0.963, 0.1613, 0.2224, 0.9615, 0.1709, 0.2297, 0.9581,
      0.1807, 0.2291, 0.9565, 0.1855, 0.2315, 0.955, 0.1945, 0.2305, 0.9534, 0.2076, 0.2256, 0.9519, 0.22, 0.2351,
      0.9467, 0.2239, 0.2344, 0.946, 0.2361, 0.2158, 0.9475, 0.2392, 0.2162, 0.9466, 0.2461, 0.2094, 0.9464, 0.2445,
      0.2063, 0.9475, 0.2439, 0.2006, 0.9488, 0.2305, 0.1874, 0.9549, 0.2266, 0.1764, 0.9579, 0.2246, 0.1675, 0.96,
      0.2212, 0.1636, 0.9614, 0.2182, 0.1516, 0.9641, 0.2094, 0.1445, 0.9671, 0.2071, 0.1357, 0.9689, 0.2035, 0.1287,
      0.9706, 0.2021, 0.1215, 0.9718, 0.1905, 0.1157, 0.9748, 0.1808, 0.1228, 0.9758, 0.1744, 0.1225, 0.977, 0.1644,
      0.1124, 0.98, 0.1594, 0.1122, 0.9808, 0.1516, 0.0955, 0.9838, 0.1473, 0.0832, 0.9856, 0.1295, 0.0769, 0.9886,
      0.1229, 0.0778, 0.9894, 0.1163, 0.0739, 0.9905, 0.1025, 0.0743, 0.992, 0.0931, 0.0852, 0.992, 0.0873, 0.0978,
      0.9914, 0.075, 0.1092, 0.9912, 0.062, 0.109, 0.9921, 0.0467, 0.109, 0.9929, 0, 0, 0, -0.9758, 0.1898, 0.1085,
      -0.977, 0.1861, 0.1045, -0.9773, 0.1873, 0.0994, -0.9769, 0.1908, 0.0965, -0.9771, 0.1922, 0.0911, -0.9779, 0.19,
      0.0872, -0.978, 0.1945, 0.0759, -0.9786, 0.1923, 0.0734, -0.9779, 0.1977, 0.0674, -0.977, 0.2046, 0.0593, -0.976,
      0.2104, 0.0555, -0.9753, 0.2157, 0.0483, -0.9739, 0.2234, 0.0397, -0.9732, 0.226, 0.0415, -0.9737, 0.2235, 0.0443,
      -0.9734, 0.2247, 0.0456, -0.9729, 0.2254, 0.0509, -0.9719, 0.2293, 0.053, -0.9717, 0.2294, 0.0555, -0.9698,
      0.2378, 0.055, -0.9694, 0.2382, 0.0589, -0.9692, 0.238, 0.0625, -0.9679, 0.2426, 0.066, -0.9684, 0.2391, 0.0711,
      -0.9677, 0.2412, 0.0728, -0.967, 0.2433, 0.0759, -0.9653, 0.2479, 0.0816, -0.9644, 0.2514, 0.0819, -0.9643,
      0.2513, 0.0835, -0.9631, 0.2553, 0.0855, -0.9628, 0.2558, 0.0873, -0.9632, 0.2532, 0.0902, -0.9631, 0.2524,
      0.0936, -0.9621, 0.2546, 0.0973, -0.9617, 0.2546, 0.1015, -0.9605, 0.2568, 0.1073, -0.9596, 0.2591, 0.1095,
      -0.959, 0.2587, 0.1153, -0.9596, 0.2571, 0.1139, -0.9607, 0.2534, 0.1131, -0.9621, 0.2472, 0.115, -0.964, 0.2414,
      0.1113, -0.9659, 0.2346, 0.1097, -0.9677, 0.2271, 0.1094, -0.9686, 0.2227, 0.1104, -0.9703, 0.2151, 0.111,
      -0.9709, 0.2134, 0.1085, -0.9727, 0.2061, 0.107, -0.9735, 0.2016, 0.1083, -0.9747, 0.1972, 0.1049, -0.9756,
      0.1926, 0.1058, -0.9758, 0.1898, 0.1085, 0, 0, 0, 0.0678, 0.775, 0.6283, 0.0614, 0.7776, 0.6258, 0.054, 0.7823,
      0.6205, 0.0442, 0.7801, 0.6241, 0.0361, 0.7809, 0.6236, 0.0361, 0.7809, 0.6236, 0.0415, 0.7839, 0.6195, 0.0493,
      0.7996, 0.5985, 0.0629, 0.804, 0.5913, 0.0715, 0.8037, 0.5908, 0.0741, 0.8001, 0.5952, 0.073, 0.7905, 0.6082,
      0.0709, 0.7864, 0.6136, 0.0644, 0.7864, 0.6143, 0.0678, 0.775, 0.6283, 0, 0, 0, 0.171, 0.934, 0.3137, 0.1678,
      0.9383, 0.3024, 0.1579, 0.9407, 0.3003, 0.1522, 0.9386, 0.3095, 0.1547, 0.9342, 0.3216, 0.1523, 0.9314, 0.3307,
      0.1445, 0.9329, 0.3299, 0.1373, 0.9326, 0.3338, 0.1277, 0.9359, 0.3284, 0.1257, 0.9342, 0.3337, 0.1224, 0.934,
      0.3357, 0.1251, 0.9298, 0.3461, 0.1129, 0.9308, 0.3475, 0.114, 0.9273, 0.3567, 0.108, 0.9273, 0.3585, 0.1071,
      0.9226, 0.3707, 0.1052, 0.9149, 0.3897, 0.0998, 0.9047, 0.4141, 0.1038, 0.9022, 0.4187, 0.1027, 0.8992, 0.4254,
      0.0953, 0.8993, 0.4268, 0.0934, 0.892, 0.4422, 0.0982, 0.8813, 0.4622, 0.105, 0.8771, 0.4687, 0.1061, 0.8671,
      0.4868, 0.1011, 0.861, 0.4984, 0.0989, 0.8559, 0.5076, 0.0913, 0.8614, 0.4997, 0.0766, 0.8509, 0.5197, 0.0649,
      0.8488, 0.5248, 0.0515, 0.8534, 0.5186, 0.0467, 0.8631, 0.5029, 0.0409, 0.8827, 0.4681, 0.0474, 0.8879, 0.4575,
      0.0665, 0.8946, 0.4419, 0.0787, 0.9025, 0.4235, 0.0875, 0.9127, 0.3992, 0.0962, 0.9259, 0.3652, 0.1034, 0.9308,
      0.3505, 0.1134, 0.9386, 0.3259, 0.1231, 0.9412, 0.3146, 0.1325, 0.9409, 0.3117, 0.135, 0.9457, 0.2957, 0.1447,
      0.9454, 0.2919, 0.1522, 0.9466, 0.2843, 0.1738, 0.9424, 0.2859, 0.1695, 0.9408, 0.2935, 0.1804, 0.937, 0.2991,
      0.1747, 0.9346, 0.31, 0.171, 0.934, 0.3137, 0, 0, 0, 0.088, 0.9776, 0.1911, 0.0832, 0.9761, 0.2008, 0.0755, 0.977,
      0.1996, 0.0763, 0.9779, 0.1946, 0.0723, 0.9791, 0.1903, 0.0778, 0.9798, 0.1844, 0.0816, 0.9784, 0.1897, 0.088,
      0.9776, 0.1911, 0, 0, 0, 0.056, 0.9839, 0.1698, 0.0703, 0.9815, 0.1782, 0.0646, 0.9801, 0.1875, 0.0668, 0.9775,
      0.2, 0.0647, 0.9768, 0.2041, 0.0672, 0.9736, 0.2181, 0.0627, 0.9735, 0.2201, 0.052, 0.9758, 0.2122, 0.0538,
      0.9772, 0.2055, 0.0473, 0.9782, 0.202, 0.0376, 0.9812, 0.1894, 0.0326, 0.9837, 0.1766, 0.0395, 0.9848, 0.1689,
      0.0426, 0.9838, 0.1744, 0.0468, 0.9838, 0.173, 0.0464, 0.9849, 0.167, 0.0505, 0.985, 0.1652, 0.056, 0.9839,
      0.1698, 0, 0, 0, 0.0716, 0.986, 0.1505, 0.0795, 0.985, 0.1533, 0.0795, 0.9833, 0.1636, 0.0719, 0.9829, 0.1693,
      0.0622, 0.9835, 0.1701, 0.06, 0.9843, 0.1658, 0.0558, 0.9844, 0.167, 0.0502, 0.9858, 0.1605, 0.0571, 0.9866,
      0.1531, 0.0625, 0.9859, 0.1554, 0.0632, 0.9867, 0.1495, 0.0716, 0.986, 0.1505, 0, 0, 0, 0.854, 0.5028, 0.1336,
      0.8529, 0.5064, 0.1271, 0.8573, 0.5017, 0.1155, 0.8648, 0.4919, 0.101, 0.867, 0.4897, 0.0927, 0.8715, 0.4824,
      0.088, 0.8743, 0.4793, 0.0763, 0.8789, 0.4726, 0.0642, 0.8819, 0.4691, 0.0469, 0.8835, 0.4676, 0.029, 0.8869,
      0.4609, 0.0303, 0.8921, 0.451, 0.0284, 0.8951, 0.4449, 0.0303, 0.8947, 0.4446, 0.0433, 0.8918, 0.4482, 0.062,
      0.8901, 0.4497, 0.0739, 0.8853, 0.4576, 0.0825, 0.882, 0.4596, 0.1035, 0.875, 0.4683, 0.123, 0.8688, 0.4759,
      0.1367, 0.8633, 0.4817, 0.1508, 0.8564, 0.4959, 0.1437, 0.854, 0.5028, 0.1336, 0, 0, 0, 0.0918, -0.655, -0.75,
      0.0883, -0.6604, -0.7457, 0.0795, -0.6551, -0.7514, 0.0752, -0.6606, -0.7469, 0.0747, -0.6661, -0.7421, 0.079,
      -0.6721, -0.7362, 0.0863, -0.6816, -0.7266, 0.0922, -0.6867, -0.721, 0.0869, -0.6928, -0.7159, 0.0965, -0.693,
      -0.7145, 0.1065, -0.6977, -0.7084, 0.1086, -0.7058, -0.7, 0.1134, -0.7182, -0.6865, 0.1218, -0.7236, -0.6793,
      0.1271, -0.7271, -0.6747, 0.138, -0.7268, -0.6728, 0.1465, -0.7228, -0.6753, 0.1594, -0.722, -0.6733, 0.1625,
      -0.7176, -0.6773, 0.1582, -0.7085, -0.6878, 0.1455, -0.6962, -0.7029, 0.138, -0.6939, -0.7068, 0.13, -0.6891,
      -0.713, 0.1203, -0.6824, -0.721, 0.1137, -0.6758, -0.7283, 0.1093, -0.6661, -0.7378, 0.1049, -0.6628, -0.7414,
      0.1038, -0.6555, -0.748, 0.0953, -0.6494, -0.7545, 0.0918, -0.655, -0.75, 0, 0, 0, 0.0758, -0.59, -0.8038, 0.0648,
      -0.6047, -0.7938, 0.065, -0.5952, -0.8009, 0.0585, -0.599, -0.7986, 0.0559, -0.6095, -0.7908, 0.0446, -0.614,
      -0.788, 0.0352, -0.6151, -0.7876, 0.0275, -0.6099, -0.792, 0.0205, -0.6115, -0.791, 0.0235, -0.6236, -0.7814,
      0.0275, -0.6316, -0.7748, 0.0378, -0.6313, -0.7746, 0.0412, -0.6354, -0.7711, 0.0397, -0.6412, -0.7664, 0.0416,
      -0.6437, -0.7642, 0.0462, -0.6508, -0.7578, 0.0523, -0.6599, -0.7496, 0.062, -0.6651, -0.7442, 0.0645, -0.6617,
      -0.747, 0.0701, -0.6598, -0.7482, 0.0633, -0.6489, -0.7582, 0.0682, -0.6416, -0.764, 0.083, -0.6362, -0.767,
      0.0831, -0.6313, -0.7711, 0.0737, -0.6266, -0.7759, 0.0722, -0.616, -0.7844, 0.0734, -0.6071, -0.7912, 0.0797,
      -0.5978, -0.7977, 0.0795, -0.5953, -0.7995, 0.0867, -0.5895, -0.8031, 0.0988, -0.577, -0.8108, 0.1056, -0.5668,
      -0.817, 0.1004, -0.5657, -0.8185, 0.092, -0.5737, -0.8139, 0.0807, -0.5774, -0.8125, 0.0758, -0.59, -0.8038, 0, 0,
      0, 0.7492, 0.4339, 0.5004, 0.7454, 0.4392, 0.5014, 0.7458, 0.4446, 0.4962, 0.7474, 0.4432, 0.495, 0.7492, 0.4367,
      0.4979, 0.7492, 0.4339, 0.5004, 0, 0, 0, 0.7576, 0.386, 0.5264, 0.7556, 0.3925, 0.5245, 0.7559, 0.3991, 0.519,
      0.7535, 0.4057, 0.5173, 0.7564, 0.4088, 0.5106, 0.754, 0.411, 0.5124, 0.7508, 0.4214, 0.5086, 0.7553, 0.4214,
      0.5019, 0.7634, 0.4106, 0.4987, 0.7704, 0.4048, 0.4926, 0.7774, 0.4027, 0.4832, 0.7834, 0.3998, 0.4758, 0.7906,
      0.3906, 0.4716, 0.7947, 0.3853, 0.4691, 0.7984, 0.3832, 0.4645, 0.7996, 0.3796, 0.4653, 0.8, 0.37, 0.4723, 0.8002,
      0.3654, 0.4755, 0.7985, 0.3602, 0.4824, 0.7989, 0.349, 0.4898, 0.7947, 0.3499, 0.4959, 0.7942, 0.346, 0.4996,
      0.7953, 0.3377, 0.5034, 0.7997, 0.3267, 0.5038, 0.7994, 0.3247, 0.5055, 0.7953, 0.3247, 0.5119, 0.7914, 0.3185,
      0.5217, 0.7928, 0.3105, 0.5245, 0.7916, 0.307, 0.5283, 0.7858, 0.3071, 0.5368, 0.7832, 0.3029, 0.5429, 0.785,
      0.2962, 0.5441, 0.7816, 0.2915, 0.5515, 0.7758, 0.2931, 0.5587, 0.7706, 0.2875, 0.5688, 0.7662, 0.2865, 0.5751,
      0.7601, 0.2982, 0.5773, 0.7451, 0.3256, 0.5821, 0.7698, 0.342, 0.539, 0.7656, 0.3746, 0.5229, 0.7576, 0.386,
      0.5264, 0, 0, 0, 0.7578, 0.4974, 0.4222, 0.7737, 0.4897, 0.4019, 0.7795, 0.4919, 0.3878, 0.7845, 0.49, 0.3801,
      0.7841, 0.4933, 0.3765, 0.7893, 0.492, 0.3673, 0.7942, 0.4983, 0.3478, 0.7875, 0.5111, 0.3444, 0.7861, 0.5196,
      0.3347, 0.7904, 0.5196, 0.3244, 0.7887, 0.5237, 0.322, 0.7918, 0.5257, 0.311, 0.7946, 0.5243, 0.3062, 0.7942,
      0.5285, 0.2998, 0.7887, 0.5373, 0.2986, 0.7856, 0.5462, 0.2908, 0.7865, 0.5499, 0.2812, 0.7785, 0.5595, 0.2844,
      0.7834, 0.559, 0.2716, 0.7814, 0.5642, 0.2667, 0.7776, 0.5698, 0.266, 0.7759, 0.5758, 0.2579, 0.7706, 0.5828,
      0.2579, 0.7654, 0.5888, 0.2596, 0.7637, 0.595, 0.2504, 0.7662, 0.5979, 0.2354, 0.7696, 0.5995, 0.2197, 0.7697,
      0.6021, 0.2123, 0.7706, 0.6037, 0.2042, 0.7779, 0.5972, 0.1955, 0.7867, 0.5863, 0.1933, 0.7959, 0.5806, 0.1715,
      0.8011, 0.5686, 0.1868, 0.7987, 0.5665, 0.2028, 0.7908, 0.57, 0.2232, 0.7929, 0.5638, 0.2311, 0.8025, 0.5511,
      0.2285, 0.8101, 0.5412, 0.2254, 0.8177, 0.5339, 0.2152, 0.8196, 0.5254, 0.2287, 0.8259, 0.5147, 0.2302, 0.8303,
      0.4996, 0.2467, 0.8359, 0.4842, 0.2584, 0.8393, 0.4681, 0.2763, 0.833, 0.4693, 0.2931, 0.8351, 0.4531, 0.312,
      0.8419, 0.4461, 0.3036, 0.8481, 0.434, 0.3039, 0.8546, 0.426, 0.2969, 0.8616, 0.4124, 0.2959, 0.8496, 0.4125,
      0.3288, 0.8501, 0.4018, 0.3404, 0.844, 0.4059, 0.3506, 0.8374, 0.4173, 0.353, 0.8274, 0.4293, 0.362, 0.8166,
      0.4264, 0.389, 0.8054, 0.4261, 0.412, 0.796, 0.4239, 0.4322, 0.791, 0.4421, 0.4228, 0.7978, 0.4502, 0.401, 0.794,
      0.4574, 0.4005, 0.7895, 0.4599, 0.4065, 0.7829, 0.4735, 0.4036, 0.7728, 0.4802, 0.4149, 0.7654, 0.4894, 0.4178,
      0.7578, 0.4974, 0.4222, 0, 0, 0, -0.9646, 0.1508, 0.2164, -0.9654, 0.1482, 0.2145, -0.966, 0.1381, 0.2187,
      -0.9674, 0.1329, 0.2157, -0.9684, 0.1342, 0.2102, -0.97, 0.1257, 0.2083, -0.9705, 0.1307, 0.2025, -0.97, 0.1401,
      0.1986, -0.9685, 0.1447, 0.2026, -0.9692, 0.1459, 0.1983, -0.969, 0.1516, 0.195, -0.9699, 0.1564, 0.1864, -0.9715,
      0.1553, 0.179, -0.973, 0.1493, 0.1758, -0.9749, 0.1449, 0.169, -0.9756, 0.1443, 0.1653, -0.9764, 0.1407, 0.1637,
      -0.9763, 0.1313, 0.1721, -0.9774, 0.1291, 0.1675, -0.9781, 0.1266, 0.1651, -0.9795, 0.1257, 0.1571, -0.9787,
      0.136, 0.154, -0.9794, 0.1331, 0.1518, -0.9801, 0.1341, 0.1461, -0.9797, 0.1411, 0.1425, -0.9805, 0.1422, 0.1355,
      -0.9808, 0.1442, 0.131, -0.9818, 0.1442, 0.1237, -0.9824, 0.1404, 0.1232, -0.9823, 0.1431, 0.1212, -0.9817,
      0.1465, 0.122, -0.981, 0.15, 0.1234, -0.9806, 0.1531, 0.1227, -0.9799, 0.1552, 0.1252, -0.98, 0.1577, 0.1216,
      -0.9789, 0.1646, 0.1214, -0.9778, 0.1662, 0.1279, -0.978, 0.16, 0.1342, -0.9786, 0.1564, 0.1339, -0.9777, 0.1556,
      0.1407, -0.9773, 0.157, 0.1423, -0.9773, 0.1527, 0.1471, -0.9758, 0.154, 0.1555, -0.9739, 0.1583, 0.1626, -0.9716,
      0.1618, 0.1728, -0.9697, 0.167, 0.1784, -0.9681, 0.166, 0.1878, -0.9685, 0.1643, 0.1872, -0.9667, 0.1637, 0.1967,
      -0.9656, 0.1607, 0.2043, -0.9653, 0.1555, 0.2099, -0.9646, 0.1508, 0.2164, 0, 0, 0, -0.9198, -0.19, 0.3434,
      -0.9092, -0.2175, 0.3551, -0.9093, -0.2232, 0.3512, -0.907, -0.2352, 0.3494, -0.9037, -0.2496, 0.3478, -0.904,
      -0.258, 0.3409, -0.9014, -0.2643, 0.3431, -0.9013, -0.2699, 0.3389, -0.8949, -0.284, 0.3442, -0.8935, -0.302,
      0.3324, -0.8924, -0.3106, 0.3273, -0.894, -0.3148, 0.3188, -0.9024, -0.3053, 0.3041, -0.9049, -0.2984, 0.3034,
      -0.9197, -0.2817, 0.2734, -0.9329, -0.2633, 0.2458, -0.9388, -0.2529, 0.2339, -0.9439, -0.2389, 0.2279, -0.9444,
      -0.234, 0.2309, -0.9527, -0.2117, 0.2181, -0.9625, -0.1801, 0.203, -0.9713, -0.1459, 0.1881, -0.9737, -0.138,
      0.1814, -0.9763, -0.1252, 0.1764, -0.98, -0.1139, 0.1633, -0.9827, -0.1069, 0.1513, -0.9826, -0.0992, 0.1569,
      -0.9854, -0.0826, 0.1488, -0.9855, -0.0704, 0.1543, -0.984, -0.0594, 0.1681, -0.9832, -0.0666, 0.1701, -0.9837,
      -0.0708, 0.1652, -0.9832, -0.0772, 0.1655, -0.9821, -0.0758, 0.1727, -0.9807, -0.0777, 0.1795, -0.9786, -0.0864,
      0.1866, -0.9773, -0.0793, 0.1964, -0.9775, -0.0675, 0.1998, -0.9762, -0.0524, 0.2104, -0.9719, -0.0455, 0.2309,
      -0.968, -0.0273, 0.2495, -0.9669, -0.0159, 0.2548, -0.9676, -0.0027, 0.2525, -0.9664, -0.001, 0.257, -0.9633,
      -0.0093, 0.2682, -0.9617, -0.0175, 0.2735, -0.9594, -0.022, 0.2813, -0.9559, -0.0403, 0.291, -0.9519, -0.0425,
      0.3033, -0.9492, -0.0379, 0.3125, -0.9471, -0.0409, 0.3185, -0.9437, -0.0394, 0.3284, -0.9389, -0.0475, 0.3409,
      -0.9417, -0.0653, 0.3299, -0.94, -0.0657, 0.3348, -0.9364, -0.0749, 0.3428, -0.9417, -0.0741, 0.328, -0.9423,
      -0.0767, 0.3258, -0.9466, -0.0801, 0.3122, -0.9517, -0.0919, 0.2929, -0.9513, -0.1, 0.2915, -0.952, -0.1061,
      0.2871, -0.9505, -0.1155, 0.2884, -0.9529, -0.1205, 0.2782, -0.9521, -0.1278, 0.278, -0.9529, -0.1309, 0.2735,
      -0.9488, -0.1465, 0.2798, -0.9445, -0.157, 0.2885, -0.9444, -0.1644, 0.2847, -0.9409, -0.1654, 0.2955, -0.9374,
      -0.1746, 0.3012, -0.9326, -0.175, 0.3156, -0.9296, -0.1649, 0.3295, -0.9256, -0.191, 0.3269, -0.9226, -0.1929,
      0.3341, -0.9198, -0.19, 0.3434, 0, 0, 0, 0.7965, 0.1463, -0.5867, 0.7967, 0.1349, -0.5891, 0.7972, 0.1251,
      -0.5907, 0.8022, 0.1093, -0.587, 0.8042, 0.127, -0.5807, 0.8098, 0.1182, -0.5747, 0.8077, 0.1054, -0.5801, 0.8113,
      0.0973, -0.5765, 0.8221, 0.1073, -0.5591, 0.8237, 0.1199, -0.5543, 0.8198, 0.1281, -0.5581, 0.8251, 0.1363,
      -0.5484, 0.8288, 0.1291, -0.5444, 0.8332, 0.1298, -0.5375, 0.8411, 0.1201, -0.5273, 0.8421, 0.1252, -0.5246,
      0.8368, 0.1398, -0.5293, 0.8304, 0.1446, -0.5381, 0.8244, 0.1511, -0.5454, 0.822, 0.1433, -0.5511, 0.8141, 0.1481,
      -0.5616, 0.8115, 0.1558, -0.5632, 0.8044, 0.1562, -0.5732, 0.8032, 0.1695, -0.5711, 0.7962, 0.1614, -0.5832,
      0.7964, 0.1527, -0.5852, 0.7965, 0.1463, -0.5867, 0, 0, 0, 0.8159, 0.1784, -0.55, 0.8202, 0.1728, -0.5454, 0.8247,
      0.1619, -0.5419, 0.8283, 0.1568, -0.5378, 0.8324, 0.1687, -0.5279, 0.8298, 0.1733, -0.5304, 0.8268, 0.1781,
      -0.5336, 0.8241, 0.1888, -0.5341, 0.8187, 0.1898, -0.5419, 0.8221, 0.1782, -0.5408, 0.8124, 0.1948, -0.5496,
      0.8159, 0.1784, -0.55, 0, 0, 0, 0.8672, 0.1619, -0.4709, 0.8802, 0.1455, -0.4518, 0.8746, 0.1576, -0.4585, 0.8672,
      0.1682, -0.4686, 0.8604, 0.1801, -0.4767, 0.8532, 0.1971, -0.4829, 0.854, 0.1832, -0.4869, 0.8611, 0.1737,
      -0.4779, 0.8672, 0.1619, -0.4709, 0, 0, 0, 0.8309, 0.2061, -0.5169, 0.8264, 0.2008, -0.5261, 0.8205, 0.2008,
      -0.5353, 0.8219, 0.1937, -0.5358, 0.8273, 0.1864, -0.5299, 0.834, 0.1812, -0.5212, 0.833, 0.1892, -0.5199, 0.8309,
      0.1979, -0.52, 0.8309, 0.2061, -0.5169, 0, 0, 0, 0.7958, 0.2107, -0.5677, 0.7962, 0.1916, -0.5739, 0.8031, 0.1961,
      -0.5626, 0.8038, 0.1904, -0.5635, 0.8031, 0.1798, -0.5681, 0.8083, 0.176, -0.5618, 0.8069, 0.188, -0.56, 0.8097,
      0.1889, -0.5556, 0.8095, 0.1993, -0.5523, 0.804, 0.1979, -0.5607, 0.8031, 0.2044, -0.5598, 0.8067, 0.2174,
      -0.5496, 0.7974, 0.217, -0.5631, 0.7958, 0.2107, -0.5677, 0, 0, 0, 0.8303, 0.2261, -0.5094, 0.8355, 0.2114,
      -0.5072, 0.8376, 0.2199, -0.5, 0.8395, 0.2329, -0.491, 0.8321, 0.2323, -0.5036, 0.8303, 0.2261, -0.5094, 0, 0, 0,
      0.8101, 0.3174, -0.493, 0.8061, 0.3126, -0.5025, 0.8022, 0.317, -0.506, 0.8025, 0.3127, -0.5081, 0.8059, 0.3059,
      -0.507, 0.806, 0.2939, -0.5138, 0.8119, 0.28, -0.5123, 0.8185, 0.2745, -0.5048, 0.8231, 0.2609, -0.5045, 0.8241,
      0.2475, -0.5095, 0.8197, 0.2456, -0.5174, 0.8153, 0.2476, -0.5234, 0.8056, 0.2382, -0.5424, 0.8084, 0.229,
      -0.5423, 0.8061, 0.2249, -0.5474, 0.8085, 0.2171, -0.547, 0.8143, 0.2254, -0.5349, 0.816, 0.2343, -0.5285, 0.8196,
      0.2281, -0.5256, 0.8233, 0.2383, -0.5152, 0.8319, 0.2358, -0.5024, 0.8354, 0.2395, -0.4946, 0.8335, 0.2465,
      -0.4945, 0.8298, 0.2508, -0.4985, 0.8315, 0.2547, -0.4936, 0.834, 0.2486, -0.4925, 0.836, 0.2583, -0.4841, 0.8356,
      0.2657, -0.4809, 0.8319, 0.2817, -0.4781, 0.8299, 0.2762, -0.4847, 0.8222, 0.3024, -0.4822, 0.8153, 0.3174,
      -0.4844, 0.8101, 0.3174, -0.493, 0, 0, 0, 0.6209, -0.1585, -0.7677, 0.6258, -0.1021, -0.7733, 0.6287, -0.0454,
      -0.7763, 0.6045, -0.0574, -0.7945, 0.5782, -0.0673, -0.8131, 0.568, -0.0763, -0.8195, 0.5596, -0.085, -0.8244,
      0.5569, -0.0952, -0.8251, 0.5321, -0.106, -0.84, 0.528, -0.1152, -0.8414, 0.5413, -0.117, -0.8326, 0.5373,
      -0.1286, -0.8335, 0.5235, -0.1399, -0.8405, 0.5125, -0.1582, -0.844, 0.5041, -0.1577, -0.8492, 0.504, -0.1653,
      -0.8477, 0.4923, -0.1682, -0.854, 0.4965, -0.1715, -0.8509, 0.48, -0.1787, -0.8589, 0.4812, -0.1837, -0.8572,
      0.491, -0.1849, -0.8513, 0.495, -0.1804, -0.8499, 0.5079, -0.1785, -0.8427, 0.5229, -0.1759, -0.834, 0.5352,
      -0.1649, -0.8285, 0.5443, -0.1554, -0.8244, 0.553, -0.1403, -0.8213, 0.5721, -0.1328, -0.8094, 0.5836, -0.1377,
      -0.8003, 0.5916, -0.1434, -0.7933, 0.5887, -0.1561, -0.7931, 0.599, -0.1621, -0.7842, 0.6069, -0.1592, -0.7787,
      0.6209, -0.1585, -0.7677, 0, 0, 0, 0.4058, -0.1188, -0.9062, 0.4101, -0.1205, -0.904, 0.4172, -0.1138, -0.9016,
      0.4246, -0.1028, -0.8995, 0.4286, -0.0896, -0.8991, 0.4265, -0.0879, -0.9002, 0.4246, -0.0931, -0.9006, 0.4196,
      -0.097, -0.9025, 0.4115, -0.108, -0.905, 0.4038, -0.1139, -0.9077, 0.4058, -0.1188, -0.9062, 0, 0, 0, 0.4676,
      -0.0955, -0.8788, 0.4755, -0.0969, -0.8743, 0.4777, -0.1018, -0.8726, 0.4858, -0.106, -0.8676, 0.4933, -0.11,
      -0.8629, 0.5013, -0.11, -0.8582, 0.5138, -0.105, -0.8514, 0.5226, -0.1001, -0.8467, 0.5216, -0.0948, -0.8479,
      0.5081, -0.0973, -0.8558, 0.5, -0.0959, -0.8607, 0.4981, -0.0876, -0.8627, 0.496, -0.0872, -0.8639, 0.4941,
      -0.0964, -0.864, 0.4855, -0.0951, -0.869, 0.4815, -0.0891, -0.8719, 0.4733, -0.0829, -0.877, 0.4753, -0.0727,
      -0.8768, 0.4661, -0.0723, -0.8817, 0.4629, -0.0752, -0.8832, 0.4629, -0.0849, -0.8824, 0.4676, -0.0955, -0.8788,
      0, 0, 0, 0.4504, -0.0785, -0.8894, 0.4551, -0.0831, -0.8866, 0.4584, -0.0728, -0.8858, 0.4622, -0.0661, -0.8843,
      0.4693, -0.0604, -0.881, 0.4783, -0.053, -0.8766, 0.4894, -0.0478, -0.8707, 0.4853, -0.0436, -0.8733, 0.4769,
      -0.0485, -0.8776, 0.4716, -0.0523, -0.8803, 0.465, -0.0565, -0.8835, 0.4586, -0.0638, -0.8863, 0.4526, -0.0694,
      -0.889, 0.4504, -0.0785, -0.8894, 0, 0, 0, 0.2347, 0.8081, 0.5402, 0.2376, 0.8035, 0.5458, 0.2424, 0.7996, 0.5495,
      0.2446, 0.7954, 0.5546, 0.2399, 0.7932, 0.5597, 0.2454, 0.7883, 0.5643, 0.2481, 0.7835, 0.5698, 0.2579, 0.7739,
      0.5784, 0.2583, 0.7708, 0.5824, 0.2539, 0.7695, 0.586, 0.2488, 0.7601, 0.6002, 0.2538, 0.755, 0.6046, 0.2512,
      0.7557, 0.6048, 0.2393, 0.7601, 0.6042, 0.2324, 0.7585, 0.6089, 0.2269, 0.7596, 0.6095, 0.2215, 0.7572, 0.6145,
      0.2146, 0.7612, 0.612, 0.2107, 0.7597, 0.6152, 0.2099, 0.7604, 0.6147, 0.2029, 0.7659, 0.6101, 0.1947, 0.7666,
      0.6119, 0.1924, 0.7701, 0.6082, 0.1847, 0.7713, 0.609, 0.1841, 0.7685, 0.6128, 0.1775, 0.7708, 0.6119, 0.1771,
      0.7738, 0.6081, 0.1689, 0.7748, 0.6093, 0.1627, 0.7783, 0.6064, 0.1561, 0.7853, 0.5991, 0.1558, 0.789, 0.5944,
      0.1513, 0.7947, 0.5879, 0.1464, 0.7984, 0.584, 0.1483, 0.8012, 0.5797, 0.1442, 0.8065, 0.5733, 0.15, 0.8095,
      0.5676, 0.1635, 0.8142, 0.557, 0.1743, 0.8177, 0.5487, 0.1846, 0.816, 0.5478, 0.1864, 0.8135, 0.5509, 0.1957,
      0.8134, 0.5478, 0.208, 0.8122, 0.545, 0.2253, 0.8124, 0.5379, 0.2307, 0.8113, 0.5372, 0.2347, 0.8081, 0.5402, 0,
      0, 0, -0.8682, 0.3175, 0.3814, -0.8652, 0.3161, 0.3893, -0.8649, 0.3128, 0.3925, -0.8679, 0.3086, 0.3892, -0.8729,
      0.3087, 0.3778, -0.8769, 0.3081, 0.3689, -0.8751, 0.3152, 0.3671, -0.8735, 0.3176, 0.369, -0.8682, 0.3175, 0.3814,
      0, 0, 0, 0.6337, 0.6418, -0.4318, 0.6216, 0.6504, -0.4366, 0.6082, 0.6575, -0.4448, 0.5962, 0.6667, -0.4472,
      0.5954, 0.6627, -0.4543, 0.5888, 0.6622, -0.4635, 0.5852, 0.6691, -0.4581, 0.5688, 0.6746, -0.4705, 0.5604,
      0.6818, -0.4702, 0.5604, 0.6742, -0.481, 0.5604, 0.6742, -0.481, 0.5608, 0.672, -0.4837, 0.5634, 0.6728, -0.4795,
      0.5701, 0.6684, -0.4778, 0.5756, 0.6639, -0.4773, 0.5817, 0.6545, -0.483, 0.5879, 0.6516, -0.4793, 0.591, 0.6493,
      -0.4788, 0.5967, 0.6453, -0.4769, 0.6037, 0.6431, -0.4711, 0.6096, 0.6395, -0.4684, 0.6137, 0.6337, -0.4709,
      0.6156, 0.6322, -0.4704, 0.6138, 0.63, -0.4758, 0.6128, 0.624, -0.4848, 0.6161, 0.6207, -0.4849, 0.6202, 0.6198,
      -0.4807, 0.6265, 0.6192, -0.4734, 0.6336, 0.613, -0.472, 0.637, 0.6135, -0.4668, 0.6383, 0.6122, -0.4667, 0.6405,
      0.6148, -0.4601, 0.6431, 0.6122, -0.4599, 0.6462, 0.6111, -0.4571, 0.6449, 0.6137, -0.4556, 0.6461, 0.615,
      -0.4521, 0.6468, 0.6172, -0.4481, 0.6408, 0.6232, -0.4484, 0.6379, 0.6248, -0.4503, 0.6369, 0.6273, -0.4482,
      0.6301, 0.6346, -0.4476, 0.6291, 0.6368, -0.4458, 0.6326, 0.6382, -0.4387, 0.6337, 0.6418, -0.4318, 0, 0, 0,
      0.5608, 0.672, -0.4837, 0.5608, 0.672, -0.4837, 0.5608, 0.672, -0.4837, 0.5608, 0.672, -0.4837, 0, 0, 0, -0.1169,
      0.6676, 0.7353, -0.1118, 0.6709, 0.7331, -0.1063, 0.6728, 0.7322, -0.1039, 0.6664, 0.7383, -0.0963, 0.6664,
      0.7393, -0.0939, 0.6681, 0.7381, -0.0865, 0.6676, 0.7395, -0.0835, 0.6611, 0.7457, -0.0899, 0.6575, 0.7481,
      -0.0911, 0.6472, 0.7569, -0.0935, 0.6453, 0.7582, -0.0946, 0.6389, 0.7634, -0.1005, 0.6378, 0.7636, -0.096,
      0.6297, 0.7709, -0.1006, 0.6208, 0.7775, -0.0963, 0.6167, 0.7813, -0.0986, 0.613, 0.7839, -0.1042, 0.6078, 0.7872,
      -0.1035, 0.6032, 0.7909, -0.1094, 0.5996, 0.7928, -0.1165, 0.6015, 0.7903, -0.1238, 0.6, 0.7904, -0.1204, 0.6109,
      0.7825, -0.1207, 0.6193, 0.7758, -0.1266, 0.6206, 0.7739, -0.1291, 0.6258, 0.7693, -0.1268, 0.6346, 0.7623,
      -0.1209, 0.6395, 0.7592, -0.1193, 0.6449, 0.7549, -0.1155, 0.6529, 0.7486, -0.115, 0.6585, 0.7438, -0.117, 0.6632,
      0.7393, -0.1169, 0.6676, 0.7353, 0, 0, 0, -0.7345, -0.4343, 0.5215, -0.7304, -0.4481, 0.5155, -0.7335, -0.46,
      0.5004, -0.7392, -0.4625, 0.4895, -0.7497, -0.4601, 0.4756, -0.7598, -0.4559, 0.4635, -0.7617, -0.4321, 0.4828,
      -0.7657, -0.4252, 0.4826, -0.7767, -0.419, 0.4703, -0.7912, -0.4073, 0.4563, -0.7986, -0.4048, 0.4454, -0.8223,
      -0.3786, 0.4247, -0.8262, -0.3592, 0.4339, -0.829, -0.3504, 0.4359, -0.83, -0.336, 0.4453, -0.8175, -0.3312,
      0.4712, -0.8097, -0.3315, 0.4843, -0.7992, -0.3399, 0.4958, -0.7974, -0.3449, 0.4951, -0.792, -0.354, 0.4974,
      -0.7853, -0.3761, 0.4919, -0.775, -0.3792, 0.5056, -0.7725, -0.376, 0.5118, -0.7649, -0.3804, 0.5199, -0.7615,
      -0.3852, 0.5212, -0.7555, -0.3999, 0.5189, -0.7522, -0.406, 0.5189, -0.7486, -0.4068, 0.5236, -0.7461, -0.4042,
      0.5292, -0.7417, -0.4071, 0.5331, -0.7385, -0.4158, 0.5308, -0.7362, -0.4252, 0.5265, -0.7345, -0.4343, 0.5215, 0,
      0, 0, 0.4939, 0.5223, 0.6951, 0.4889, 0.5203, 0.7002, 0.4881, 0.5242, 0.6978, 0.4905, 0.5263, 0.6946, 0.4868,
      0.5279, 0.6959, 0.4858, 0.5378, 0.6891, 0.4909, 0.5357, 0.687, 0.4942, 0.5267, 0.6917, 0.4939, 0.5223, 0.6951, 0,
      0, 0, 0.7038, 0.4187, 0.5738, 0.699, 0.4302, 0.5712, 0.6986, 0.4385, 0.5654, 0.7006, 0.4402, 0.5616, 0.7055,
      0.4352, 0.5594, 0.7091, 0.426, 0.5619, 0.7103, 0.4167, 0.5673, 0.708, 0.4156, 0.571, 0.7038, 0.4187, 0.5738, 0, 0,
      0, 0.3456, 0.691, 0.6349, 0.3384, 0.6923, 0.6373, 0.3283, 0.6969, 0.6376, 0.3164, 0.6939, 0.6468, 0.3121, 0.6907,
      0.6523, 0.295, 0.6914, 0.6595, 0.2854, 0.6934, 0.6617, 0.2813, 0.6924, 0.6644, 0.276, 0.6976, 0.6612, 0.2731,
      0.6998, 0.6601, 0.2749, 0.7019, 0.6571, 0.2715, 0.7034, 0.6569, 0.269, 0.7006, 0.6609, 0.2609, 0.7042, 0.6603,
      0.2581, 0.7093, 0.6559, 0.2501, 0.7122, 0.6559, 0.2474, 0.7161, 0.6527, 0.2395, 0.7209, 0.6503, 0.2478, 0.7232,
      0.6447, 0.2514, 0.7313, 0.6341, 0.2533, 0.7393, 0.6239, 0.2589, 0.7418, 0.6187, 0.2625, 0.7443, 0.6141, 0.2697,
      0.743, 0.6126, 0.2765, 0.7429, 0.6096, 0.2828, 0.7401, 0.6102, 0.2856, 0.7419, 0.6067, 0.2928, 0.743, 0.6018,
      0.2941, 0.7457, 0.5978, 0.2985, 0.7457, 0.5956, 0.3023, 0.7446, 0.5952, 0.3072, 0.7411, 0.5969, 0.3131, 0.7362,
      0.6001, 0.3227, 0.7291, 0.6036, 0.3256, 0.7238, 0.6083, 0.327, 0.7187, 0.6137, 0.3316, 0.7131, 0.6176, 0.3375,
      0.7108, 0.6171, 0.3416, 0.7128, 0.6125, 0.3475, 0.7107, 0.6117, 0.3493, 0.7075, 0.6143, 0.3454, 0.7049, 0.6195,
      0.3416, 0.706, 0.6203, 0.3456, 0.691, 0.6349, 0, 0, 0, 0.559, 0.6666, 0.4931, 0.5573, 0.6614, 0.502, 0.5579,
      0.6581, 0.5056, 0.5534, 0.6589, 0.5094, 0.5422, 0.6669, 0.5112, 0.5394, 0.6673, 0.5136, 0.5318, 0.6703, 0.5176,
      0.5256, 0.6756, 0.517, 0.5154, 0.6783, 0.5237, 0.5111, 0.6763, 0.5305, 0.5079, 0.6787, 0.5305, 0.4913, 0.6848,
      0.5382, 0.4761, 0.6869, 0.5492, 0.4666, 0.689, 0.5546, 0.4663, 0.6875, 0.5566, 0.4474, 0.6982, 0.5589, 0.4334,
      0.7029, 0.564, 0.4205, 0.7101, 0.5647, 0.4265, 0.7121, 0.5577, 0.428, 0.7223, 0.5433, 0.4196, 0.727, 0.5435,
      0.4302, 0.7319, 0.5285, 0.4282, 0.7345, 0.5265, 0.4212, 0.7326, 0.5348, 0.4179, 0.7378, 0.53, 0.4204, 0.7411,
      0.5235, 0.4286, 0.742, 0.5156, 0.4272, 0.7459, 0.511, 0.4207, 0.7522, 0.5071, 0.4198, 0.7582, 0.4989, 0.4172,
      0.7616, 0.496, 0.4016, 0.7652, 0.5032, 0.3965, 0.7651, 0.5073, 0.3872, 0.7703, 0.5066, 0.3817, 0.7686, 0.5134,
      0.3675, 0.7725, 0.5179, 0.3661, 0.7747, 0.5156, 0.3595, 0.7794, 0.5131, 0.352, 0.7799, 0.5175, 0.3489, 0.7833,
      0.5145, 0.3495, 0.7855, 0.5107, 0.3395, 0.7916, 0.508, 0.331, 0.7906, 0.5152, 0.3279, 0.7911, 0.5164, 0.3273,
      0.7887, 0.5205, 0.3236, 0.7891, 0.5221, 0.3236, 0.7891, 0.5221, 0.3167, 0.7959, 0.516, 0.3122, 0.7994, 0.5133,
      0.3132, 0.8004, 0.5112, 0.3206, 0.8, 0.5071, 0.3224, 0.8023, 0.5023, 0.3179, 0.8051, 0.5008, 0.3107, 0.8069,
      0.5024, 0.3099, 0.8088, 0.4999, 0.3049, 0.8106, 0.4999, 0.2947, 0.8173, 0.4952, 0.2946, 0.82, 0.4908, 0.2903,
      0.8246, 0.4855, 0.2802, 0.827, 0.4874, 0.2766, 0.8258, 0.4915, 0.2736, 0.8282, 0.489, 0.2629, 0.8307, 0.4908,
      0.2561, 0.8364, 0.4846, 0.2521, 0.841, 0.4787, 0.2465, 0.8432, 0.4778, 0.2479, 0.8461, 0.4718, 0.2391, 0.8547,
      0.4608, 0.2407, 0.8599, 0.4502, 0.2383, 0.8614, 0.4485, 0.2383, 0.8614, 0.4485, 0.2431, 0.8663, 0.4364, 0.2317,
      0.8704, 0.4345, 0.2317, 0.8704, 0.4345, 0.2379, 0.8811, 0.4086, 0.2399, 0.8859, 0.3971, 0.2384, 0.89, 0.3888,
      0.2229, 0.8953, 0.3856, 0.2205, 0.9004, 0.3752, 0.2088, 0.9059, 0.3684, 0.2063, 0.9122, 0.3541, 0.1902, 0.9201,
      0.3423, 0.1896, 0.9252, 0.3287, 0.1756, 0.9295, 0.3242, 0.171, 0.934, 0.3137, 0.1747, 0.9346, 0.31, 0.1804, 0.937,
      0.2991, 0.1804, 0.937, 0.2991, 0.1827, 0.9391, 0.2909, 0.1965, 0.9355, 0.2938, 0.2126, 0.934, 0.2872, 0.243,
      0.9267, 0.2866, 0.2518, 0.9236, 0.2891, 0.2592, 0.9191, 0.2968, 0.2588, 0.9154, 0.3083, 0.2526, 0.9135, 0.3188,
      0.2202, 0.9189, 0.3274, 0.2171, 0.918, 0.3319, 0.2331, 0.9128, 0.3352, 0.2377, 0.9095, 0.341, 0.2474, 0.9019,
      0.354, 0.2581, 0.8996, 0.3522, 0.2653, 0.8976, 0.3519, 0.2615, 0.9013, 0.3453, 0.2538, 0.9046, 0.3425, 0.254,
      0.9074, 0.3349, 0.2742, 0.9027, 0.3315, 0.2765, 0.9046, 0.3245, 0.2653, 0.9099, 0.3188, 0.2676, 0.9169, 0.2962,
      0.2729, 0.9165, 0.2925, 0.2815, 0.914, 0.292, 0.2768, 0.9188, 0.2813, 0.266, 0.9229, 0.2784, 0.2617, 0.9269,
      0.2692, 0.2513, 0.9309, 0.2652, 0.2677, 0.9288, 0.2562, 0.2768, 0.9251, 0.2598, 0.2724, 0.9243, 0.2672, 0.2789,
      0.9206, 0.2735, 0.2866, 0.9182, 0.2734, 0.2913, 0.9197, 0.2632, 0.2847, 0.924, 0.2551, 0.2879, 0.9272, 0.2397,
      0.2908, 0.9327, 0.2134, 0.2942, 0.9324, 0.2101, 0.2985, 0.9285, 0.221, 0.3045, 0.9278, 0.2154, 0.3027, 0.93,
      0.2085, 0.3089, 0.9302, 0.1982, 0.3082, 0.9328, 0.1866, 0.3203, 0.929, 0.1854, 0.3145, 0.9332, 0.1738, 0.3031,
      0.9368, 0.1748, 0.3, 0.9388, 0.1694, 0.3127, 0.937, 0.1559, 0.321, 0.935, 0.1505, 0.3472, 0.9278, 0.1367, 0.3408,
      0.9312, 0.1296, 0.3305, 0.9345, 0.1324, 0.3272, 0.9358, 0.1313, 0.3229, 0.9364, 0.1375, 0.3165, 0.9393, 0.1327,
      0.3035, 0.9439, 0.1305, 0.2986, 0.9457, 0.1286, 0.2886, 0.9507, 0.1135, 0.2758, 0.9555, 0.1048, 0.274, 0.9565,
      0.1001, 0.2825, 0.9552, 0.0886, 0.2917, 0.9522, 0.0903, 0.3029, 0.9478, 0.0993, 0.309, 0.946, 0.0976, 0.3206,
      0.942, 0.0993, 0.3416, 0.9337, 0.1073, 0.3531, 0.9298, 0.1035, 0.3627, 0.9255, 0.1092, 0.3804, 0.9158, 0.1289,
      0.3851, 0.9148, 0.122, 0.3805, 0.9173, 0.1176, 0.3787, 0.9191, 0.1092, 0.3715, 0.9224, 0.1052, 0.3657, 0.9256,
      0.0976, 0.3558, 0.9293, 0.0989, 0.3462, 0.9335, 0.0932, 0.3431, 0.934, 0.0994, 0.334, 0.9374, 0.0983, 0.3194,
      0.9434, 0.0892, 0.3044, 0.948, 0.0925, 0.2964, 0.9517, 0.08, 0.2847, 0.9554, 0.0781, 0.285, 0.9556, 0.0755,
      0.2946, 0.9527, 0.0752, 0.3095, 0.9474, 0.0813, 0.3139, 0.9464, 0.0762, 0.3017, 0.9504, 0.0758, 0.2974, 0.9525,
      0.0655, 0.2988, 0.9528, 0.0546, 0.3097, 0.9497, 0.0463, 0.2953, 0.9542, 0.0488, 0.2777, 0.9596, 0.0464, 0.2756,
      0.9605, 0.0375, 0.2777, 0.9603, 0.026, 0.2763, 0.961, 0.0153, 0.2673, 0.9634, 0.0186, 0.2565, 0.9664, 0.0127,
      0.2563, 0.9666, 0.0075, 0.248, 0.9688, -0.0011, 0.2454, 0.9693, -0.0124, 0.2407, 0.9705, -0.0136, 0.2383, 0.9709,
      -0.0245, 0.2417, 0.9699, -0.0283, 0.2315, 0.9722, -0.0363, 0.2305, 0.9721, -0.0438, 0.2231, 0.9738, -0.0435,
      0.2153, 0.9755, -0.0457, 0.2064, 0.977, -0.0528, 0.2101, 0.9758, -0.0605, 0.2155, 0.9749, -0.0566, 0.2156, 0.9743,
      -0.0658, 0.2233, 0.9723, -0.0693, 0.2182, 0.9733, -0.0716, 0.2145, 0.9732, -0.0827, 0.2187, 0.9712, -0.0943,
      0.2231, 0.9696, -0.1, 0.2316, 0.9674, -0.1026, 0.2381, 0.9661, -0.1, 0.2512, 0.9635, -0.0922, 0.2571, 0.9621,
      -0.0906, 0.2573, 0.9615, -0.0969, 0.2586, 0.9602, -0.1051, 0.254, 0.9612, -0.1079, 0.2629, 0.958, -0.1145, 0.2581,
      0.9593, -0.1147, 0.2524, 0.9601, -0.1207, 0.2477, 0.9593, -0.136, 0.2539, 0.9569, -0.1409, 0.245, 0.9562, -0.1604,
      0.2342, 0.96, -0.1536, 0.2307, 0.9591, -0.1639, 0.226, 0.9591, -0.1702, 0.228, 0.9565, -0.182, 0.2348, 0.9532,
      -0.1905, 0.2422, 0.9509, -0.1924, 0.248, 0.9466, -0.206, 0.2473, 0.9443, -0.2171, 0.2307, 0.9502, -0.2096, 0.2302,
      0.9477, -0.2212, 0.2204, 0.9492, -0.2247, 0.2161, 0.9475, -0.2358, 0.2099, 0.949, -0.2351, 0.2046, 0.9483,
      -0.2428, 0.1976, 0.9533, -0.2285, 0.1877, 0.9555, -0.2274, 0.1552, 0.9521, -0.2634, 0.1561, 0.9489, -0.2742,
      0.1491, 0.9446, -0.2923, 0.127, 0.9457, -0.2992, 0.1175, 0.9448, -0.306, 0.1154, 0.9424, -0.3141, 0.1202, 0.938,
      -0.3251, 0.1147, 0.9363, -0.332, 0.1059, 0.9375, -0.3314, 0.0955, 0.9377, -0.3341, 0.0852, 0.9365, -0.3402,
      0.0735, 0.9372, -0.341, 0.0657, 0.9317, -0.3574, 0.0572, 0.9337, -0.3536, 0.0603, 0.9376, -0.3424, 0.0565, 0.9403,
      -0.3357, 0.0382, 0.9386, -0.3429, 0.0257, 0.939, -0.3431, 0.0086, 0.9361, -0.3517, 0, 0.9334, -0.359, 0, 0.9062,
      -0.4229, 1e-4, 0.9061, -0.423, 0.0097, 0.9028, -0.4299, 0.0194, 0.9034, -0.4284, 0.0129, 0.8994, -0.437, 0.0086,
      0.893, -0.45, 0.005, 0.8909, -0.4542, 0.0041, 0.8876, -0.4607, 0.0063, 0.8854, -0.4647, 0.0212, 0.8872, -0.4609,
      0.0448, 0.881, -0.4709, 0.0523, 0.8801, -0.4719, 0.0663, 0.8742, -0.481, 0.08, 0.8689, -0.4884, 0.0843, 0.865,
      -0.4947, 0.0946, 0.871, -0.4821, 0.1192, 0.8642, -0.4889, 0.1217, 0.8674, -0.4825, 0.1315, 0.8637, -0.4866,
      0.1422, 0.8649, -0.4814, 0.1478, 0.8591, -0.4901, 0.1625, 0.8503, -0.5006, 0.164, 0.8466, -0.5064, 0.1549, 0.8445,
      -0.5127, 0.1623, 0.8306, -0.5327, 0.1711, 0.8302, -0.5305, 0.1788, 0.822, -0.5407, 0.1768, 0.8177, -0.5478,
      0.1958, 0.8125, -0.549, 0.2047, 0.8008, -0.5629, 0.2205, 0.7982, -0.5606, 0.2286, 0.7874, -0.5725, 0.248, 0.7773,
      -0.5782, 0.2479, 0.7848, -0.568, 0.244, 0.8003, -0.5477, 0.2362, 0.8229, -0.5167, 0.2237, 0.8365, -0.5003, 0.2128,
      0.8421, -0.4955, 0.2096, 0.8465, -0.4894, 0.1951, 0.8486, -0.4918, 0.1733, 0.86, -0.48, 0.154, 0.869, -0.4702,
      0.1357, 0.8758, -0.4632, 0.1234, 0.8874, -0.4441, 0.1332, 0.8867, -0.4427, 0.1416, 0.88, -0.4534, 0.1672, 0.8707,
      -0.4625, 0.1672, 0.8811, -0.4424, 0.189, 0.8783, -0.4392, 0.2191, 0.8639, -0.4535, 0.2164, 0.8585, -0.465, 0.2361,
      0.8561, -0.4597, 0.2492, 0.8552, -0.4545, 0.2434, 0.8617, -0.4453, 0.2542, 0.863, -0.4366, 0.2675, 0.8586,
      -0.4373, 0.289, 0.8602, -0.4202, 0.3153, 0.8575, -0.4065, 0.3568, 0.8395, -0.4098, 0.4074, 0.8164, -0.4092,
      0.3972, 0.8152, -0.4216, 0.3996, 0.8088, -0.4315, 0.3944, 0.8065, -0.4405, 0.3848, 0.8116, -0.4396, 0.3769, 0.811,
      -0.4476, 0.3751, 0.7996, -0.469, 0.3822, 0.7906, -0.4784, 0.3974, 0.7798, -0.4838, 0.4084, 0.7666, -0.4956,
      0.4258, 0.7483, -0.5086, 0.4514, 0.7313, -0.5112, 0.4603, 0.7231, -0.5151, 0.4823, 0.7089, -0.5147, 0.5041,
      0.6945, -0.5133, 0.515, 0.6871, -0.5126, 0.5318, 0.6796, -0.5053, 0.5374, 0.6794, -0.4995, 0.5386, 0.6856,
      -0.4897, 0.5565, 0.6763, -0.4827, 0.5608, 0.672, -0.4837, 0.5608, 0.672, -0.4837, 0.5608, 0.672, -0.4837, 0.5608,
      0.672, -0.4837, 0.5604, 0.6742, -0.481, 0.5604, 0.6742, -0.481, 0.5559, 0.6808, -0.477, 0.5514, 0.6811, -0.4818,
      0.5395, 0.6961, -0.4738, 0.5338, 0.7067, -0.4644, 0.5235, 0.7111, -0.4694, 0.515, 0.7089, -0.4819, 0.5006, 0.7208,
      -0.4795, 0.4877, 0.7339, -0.4728, 0.4811, 0.7382, -0.4728, 0.4685, 0.7487, -0.469, 0.4847, 0.7453, -0.4579,
      0.4953, 0.7407, -0.454, 0.5071, 0.7407, -0.4407, 0.501, 0.7516, -0.4291, 0.5025, 0.7597, -0.4127, 0.5114, 0.7633,
      -0.3947, 0.5035, 0.7743, -0.3834, 0.4992, 0.781, -0.3753, 0.4969, 0.7857, -0.3685, 0.4895, 0.7965, -0.355, 0.4907,
      0.8003, -0.3445, 0.4961, 0.8034, -0.3292, 0.5039, 0.8031, -0.3179, 0.5128, 0.8013, -0.3082, 0.5232, 0.796,
      -0.3042, 0.5231, 0.7935, -0.3109, 0.5296, 0.7876, -0.3149, 0.5364, 0.7842, -0.312, 0.5538, 0.7725, -0.3105, 0.559,
      0.7676, -0.3135, 0.5739, 0.7605, -0.3036, 0.5757, 0.7648, -0.2893, 0.5826, 0.7639, -0.2777, 0.581, 0.7676,
      -0.2705, 0.5825, 0.7688, -0.2638, 0.5977, 0.7609, -0.2525, 0.6054, 0.759, -0.2395, 0.6123, 0.7562, -0.2309,
      0.6152, 0.7581, -0.2167, 0.6187, 0.7579, -0.2067, 0.6144, 0.7637, -0.1981, 0.6115, 0.7691, -0.1857, 0.613, 0.7706,
      -0.1745, 0.6184, 0.7691, -0.1613, 0.6234, 0.7671, -0.1517, 0.6214, 0.7717, -0.135, 0.612, 0.78, -0.1308, 0.6111,
      0.7828, -0.1176, 0.6113, 0.7841, -0.1076, 0.6077, 0.7885, -0.0947, 0.6233, 0.7773, -0.0857, 0.6306, 0.7708,
      -0.0912, 0.6413, 0.763, -0.0817, 0.6398, 0.7658, -0.0651, 0.6403, 0.7662, -0.054, 0.6347, 0.7714, -0.046, 0.6352,
      0.7716, -0.0344, 0.6315, 0.775, -0.0246, 0.6383, 0.7698, -0.008, 0.6497, 0.7601, 0.0135, 0.6516, 0.7581, 0.0256,
      0.6525, 0.7572, 0.0301, 0.6441, 0.7641, 0.0357, 0.6449, 0.7626, 0.0503, 0.6389, 0.7674, 0.0546, 0.6356, 0.7695,
      0.0621, 0.6273, 0.7759, 0.0666, 0.6242, 0.7779, 0.0724, 0.6256, 0.7751, 0.0885, 0.6156, 0.7814, 0.1023, 0.6216,
      0.7757, 0.1092, 0.5827, 0.8029, 0.126, 0.5692, 0.8108, 0.1364, 0.5657, 0.814, 0.1317, 0.5722, 0.8043, 0.1599,
      0.5702, 0.8038, 0.1697, 0.5631, 0.8094, 0.1667, 0.5546, 0.8129, 0.1778, 0.5546, 0.8104, 0.189, 0.5396, 0.8208,
      0.1872, 0.5306, 0.823, 0.2029, 0.5328, 0.8189, 0.2135, 0.5278, 0.8151, 0.2387, 0.5289, 0.8126, 0.2446, 0.5162,
      0.8091, 0.281, 0.5181, 0.8056, 0.2875, 0.5301, 0.7984, 0.2854, 0.5284, 0.7957, 0.2961, 0.5327, 0.7928, 0.2962,
      0.5335, 0.7876, 0.3084, 0.5503, 0.7801, 0.2977, 0.5546, 0.7749, 0.3032, 0.5465, 0.7754, 0.3164, 0.5483, 0.7721,
      0.3212, 0.5351, 0.7778, 0.3296, 0.526, 0.7776, 0.3445, 0.5242, 0.773, 0.3574, 0.5123, 0.7774, 0.3649, 0.4904,
      0.785, 0.3786, 0.4801, 0.7847, 0.3921, 0.4768, 0.7728, 0.4189, 0.4833, 0.7646, 0.4264, 0.4698, 0.7711, 0.4297,
      0.4744, 0.7588, 0.4463, 0.4787, 0.7564, 0.4457, 0.4814, 0.7477, 0.4574, 0.4946, 0.7398, 0.4561, 0.5002, 0.7401,
      0.4495, 0.5116, 0.7323, 0.4495, 0.5157, 0.7261, 0.4548, 0.5213, 0.7242, 0.4515, 0.5233, 0.717, 0.4606, 0.5169,
      0.715, 0.4708, 0.518, 0.7023, 0.4884, 0.5342, 0.6904, 0.4879, 0.5393, 0.6818, 0.4943, 0.559, 0.6666, 0.4931,
      0.559, 0.6666, 0.4931, 0, 0, 0, 0.2071, 0.8211, 0.532, 0.2177, 0.8193, 0.5304, 0.2227, 0.8177, 0.5308, 0.2232,
      0.815, 0.5348, 0.2253, 0.8124, 0.5379, 0.208, 0.8122, 0.545, 0.1957, 0.8134, 0.5478, 0.1958, 0.8178, 0.5412,
      0.2071, 0.8211, 0.532, 0, 0, 0, 0.383, 0.719, 0.58, 0.3839, 0.722, 0.5756, 0.3925, 0.7194, 0.573, 0.396, 0.7189,
      0.5712, 0.3987, 0.7165, 0.5724, 0.4005, 0.7162, 0.5716, 0.4012, 0.7151, 0.5725, 0.4078, 0.7121, 0.5715, 0.4174,
      0.7129, 0.5635, 0.4181, 0.7085, 0.5685, 0.4084, 0.7064, 0.5781, 0.3986, 0.6992, 0.5935, 0.3914, 0.7017, 0.5953,
      0.3905, 0.7075, 0.589, 0.3773, 0.7111, 0.5933, 0.3778, 0.7135, 0.5901, 0.3853, 0.7175, 0.5802, 0.383, 0.719, 0.58,
      0, 0, 0, 0.3751, 0.7744, -0.5096, 0.3797, 0.7544, -0.5354, 0.3908, 0.7582, -0.5219, 0.4079, 0.7415, -0.5327,
      0.4066, 0.7294, -0.5501, 0.4121, 0.721, -0.5571, 0.4148, 0.7283, -0.5455, 0.4271, 0.7189, -0.5484, 0.4223, 0.729,
      -0.5387, 0.4135, 0.7406, -0.5297, 0.4059, 0.7531, -0.5178, 0.3977, 0.7617, -0.5115, 0.3863, 0.7766, -0.4976,
      0.383, 0.7873, -0.4831, 0.3705, 0.8018, -0.4689, 0.359, 0.8066, -0.4697, 0.3582, 0.8113, -0.462, 0.3534, 0.8128,
      -0.4632, 0.3569, 0.806, -0.4722, 0.3621, 0.7959, -0.4852, 0.3705, 0.7854, -0.4959, 0.3751, 0.7744, -0.5096, 0, 0,
      0, -0.0345, 0.9176, -0.3959, -0.0396, 0.9159, -0.3994, -0.0369, 0.9209, -0.388, -0.0555, 0.9199, -0.3882, -0.0714,
      0.9134, -0.4008, -0.0655, 0.9103, -0.4088, -0.054, 0.9095, -0.4122, -0.0559, 0.9023, -0.4275, -0.0533, 0.9007,
      -0.4311, -0.0462, 0.9009, -0.4315, -0.0399, 0.9036, -0.4266, -0.0297, 0.9057, -0.4228, -0.0276, 0.9089, -0.4161,
      -0.0201, 0.9101, -0.4139, -0.0119, 0.9092, -0.4163, -0.0079, 0.9117, -0.4108, -0.0093, 0.9143, -0.4048, -8e-4,
      0.9127, -0.4087, -0.0041, 0.9093, -0.4162, -0, 0.9062, -0.4229, -0, 0.9334, -0.359, -0.0159, 0.9285, -0.371,
      -0.0342, 0.9219, -0.3859, -0.0345, 0.9176, -0.3959, 0, 0, 0, 0, 0.9446, -0.3283, 0.0063, 0.9443, -0.3291, 0.0072,
      0.9461, -0.3239, 0, 0.9484, -0.317, 0, 0.9446, -0.3283, 0, 0, 0, -0.0075, 0.9449, -0.3272, -0, 0.9446, -0.3283,
      -0, 0.9484, -0.317, -7e-4, 0.9486, -0.3164, -0.0054, 0.9486, -0.3163, -0.0136, 0.947, -0.3208, -0.0132, 0.9463,
      -0.3231, -0.0075, 0.9449, -0.3272, 0, 0, 0, 0.1714, 0.9574, -0.2325, 0.1775, 0.9573, -0.228, 0.1844, 0.9579,
      -0.22, 0.1845, 0.9582, -0.2188, 0.1767, 0.9601, -0.2167, 0.1709, 0.9606, -0.2193, 0.1693, 0.9587, -0.2286, 0.1714,
      0.9574, -0.2325, 0, 0, 0, 0.1258, 0.9663, -0.2245, 0.1337, 0.9645, -0.2277, 0.1392, 0.9649, -0.2226, 0.1427,
      0.9667, -0.2124, 0.1387, 0.9681, -0.2085, 0.1332, 0.9675, -0.2151, 0.1258, 0.9663, -0.2245, 0, 0, 0, 0.1427,
      0.9684, -0.2044, 0.1528, 0.9651, -0.2126, 0.1659, 0.9652, -0.202, 0.1742, 0.9641, -0.2001, 0.1736, 0.9671, -0.186,
      0.164, 0.9701, -0.179, 0.1577, 0.9709, -0.1804, 0.1497, 0.9707, -0.188, 0.1427, 0.9684, -0.2044, 0, 0, 0, 0.2786,
      0.9439, 0.1772, 0.2779, 0.9434, 0.1809, 0.2655, 0.9442, 0.1952, 0.2587, 0.9467, 0.192, 0.249, 0.9482, 0.1973,
      0.2415, 0.9511, 0.1924, 0.2421, 0.9523, 0.1859, 0.2348, 0.9551, 0.1805, 0.2293, 0.9594, 0.164, 0.225, 0.96,
      0.1664, 0.2195, 0.9642, 0.1486, 0.2125, 0.9663, 0.1453, 0.2105, 0.9686, 0.1322, 0.2082, 0.9713, 0.1146, 0.2116,
      0.9721, 0.101, 0.2088, 0.9736, 0.092, 0.2098, 0.9741, 0.0841, 0.217, 0.9726, 0.0839, 0.2209, 0.9713, 0.0884,
      0.2226, 0.9692, 0.1055, 0.2238, 0.9671, 0.1211, 0.2305, 0.9627, 0.1414, 0.2405, 0.958, 0.1563, 0.2493, 0.953,
      0.1719, 0.2613, 0.9485, 0.1788, 0.2786, 0.9439, 0.1772, 0, 0, 0, 0.1957, 0.9792, -0.0527, 0.2064, 0.9779, -0.0343,
      0.1832, 0.9824, -0.0365, 0.1808, 0.9828, -0.0387, 0.1813, 0.9826, -0.0413, 0.1887, 0.9807, -0.0519, 0.1957,
      0.9792, -0.0527, 0, 0, 0, 0.1279, 0.9864, 0.1031, 0.1272, 0.986, 0.1075, 0.1264, 0.9858, 0.1103, 0.1283, 0.9853,
      0.1125, 0.1281, 0.9848, 0.117, 0.1229, 0.9855, 0.1166, 0.1201, 0.9865, 0.1117, 0.1153, 0.9865, 0.1159, 0.1169,
      0.9871, 0.1098, 0.1196, 0.9871, 0.1065, 0.1235, 0.9863, 0.1091, 0.1214, 0.987, 0.1052, 0.121, 0.9875, 0.1014,
      0.1265, 0.9869, 0.1006, 0.1279, 0.9864, 0.1031, 0, 0, 0, 0.19, 0.9812, -0.0333, 0.1932, 0.9808, -0.0263, 0.1893,
      0.9818, -0.0165, 0.1832, 0.983, -0.0106, 0.171, 0.9852, -0.0076, 0.1677, 0.9858, -0.0035, 0.1557, 0.9878, -0.0103,
      0.1513, 0.9884, -0.0157, 0.1593, 0.987, -0.0221, 0.1746, 0.9841, -0.0314, 0.19, 0.9812, -0.0333, 0, 0, 0, 0.5066,
      -0.0421, 0.8611, 0.4986, -0.041, 0.8658, 0.4938, -0.0509, 0.8681, 0.4846, -0.0495, 0.8733, 0.4862, -0.04, 0.8729,
      0.4883, -0.0387, 0.8718, 0.4891, -0.0283, 0.8718, 0.4935, -0.0234, 0.8694, 0.4971, -0.0252, 0.8673, 0.5062,
      -0.0198, 0.8622, 0.5121, -0.0296, 0.8584, 0.511, -0.0399, 0.8586, 0.5066, -0.0421, 0.8611, 0.5066, -0.0421,
      0.8611, 0, 0, 0, -0.1335, 0.4642, 0.8756, -0.1335, 0.4631, 0.8762, -0.1341, 0.4601, 0.8777, -0.1359, 0.4365,
      0.8894, -0.1865, 0.4373, 0.8798, -0.1899, 0.3967, 0.8981, -0.2047, 0.3953, 0.8955, -0.2093, 0.3871, 0.898,
      -0.2084, 0.3637, 0.9079, -0.2699, 0.3638, 0.8915, -0.2739, 0.3584, 0.8925, -0.2725, 0.3652, 0.8901, -0.2722,
      0.3652, 0.8902, -0.2369, 0.3665, 0.8997, -0.2344, 0.3724, 0.898, -0.2273, 0.3796, 0.8968, -0.2198, 0.4018, 0.8889,
      -0.1965, 0.419, 0.8865, -0.1873, 0.4389, 0.8788, -0.1824, 0.44, 0.8793, -0.1762, 0.4522, 0.8744, -0.1632, 0.4538,
      0.876, -0.1578, 0.4518, 0.878, -0.1509, 0.4518, 0.8793, -0.1456, 0.4554, 0.8783, -0.1361, 0.4559, 0.8796, -0.1358,
      0.4642, 0.8753, -0.1335, 0.4642, 0.8756, 0, 0, 0, 0.7144, 0.4106, 0.5666, 0.716, 0.407, 0.5672, 0.7254, 0.3907,
      0.5667, 0.7569, 0.3826, 0.5298, 0.7576, 0.386, 0.5264, 0.7656, 0.3746, 0.5229, 0.7698, 0.342, 0.539, 0.7451,
      0.3256, 0.5821, 0.7165, 0.3192, 0.6203, 0.7081, 0.3118, 0.6335, 0.7042, 0.2943, 0.6461, 0.6996, 0.2915, 0.6524,
      0.6955, 0.2971, 0.6542, 0.6913, 0.2963, 0.6591, 0.6797, 0.2979, 0.6703, 0.6772, 0.2996, 0.6721, 0.6636, 0.2992,
      0.6857, 0.6607, 0.2977, 0.6891, 0.6548, 0.302, 0.6929, 0.6533, 0.2938, 0.6977, 0.656, 0.2868, 0.6981, 0.6517,
      0.2815, 0.7043, 0.6487, 0.2886, 0.7042, 0.6439, 0.2936, 0.7065, 0.6416, 0.3003, 0.7058, 0.6339, 0.3062, 0.7102,
      0.6243, 0.3201, 0.7126, 0.6177, 0.3336, 0.7121, 0.6065, 0.3449, 0.7164, 0.6002, 0.3476, 0.7204, 0.5881, 0.3631,
      0.7227, 0.5838, 0.3744, 0.7204, 0.5819, 0.384, 0.7169, 0.57, 0.4018, 0.7167, 0.5624, 0.408, 0.7192, 0.5547,
      0.4113, 0.7233, 0.548, 0.4204, 0.7232, 0.5477, 0.424, 0.7213, 0.5419, 0.4321, 0.7209, 0.5372, 0.4356, 0.7223,
      0.5288, 0.4473, 0.7213, 0.5174, 0.4598, 0.7217, 0.5078, 0.4704, 0.7217, 0.5015, 0.4704, 0.7261, 0.5009, 0.4788,
      0.721, 0.4998, 0.4842, 0.7182, 0.4994, 0.4902, 0.7143, 0.514, 0.4878, 0.7056, 0.5177, 0.4925, 0.6996, 0.5188,
      0.498, 0.6949, 0.5272, 0.5001, 0.687, 0.5274, 0.5051, 0.6832, 0.5304, 0.5077, 0.6789, 0.5131, 0.5226, 0.6809,
      0.5337, 0.5301, 0.6589, 0.535, 0.5323, 0.6561, 0.5503, 0.5283, 0.6466, 0.5712, 0.5179, 0.6368, 0.6142, 0.4875,
      0.6205, 0.6345, 0.4863, 0.6007, 0.6444, 0.4848, 0.5913, 0.6499, 0.4776, 0.5912, 0.657, 0.478, 0.583, 0.6663,
      0.4647, 0.5832, 0.6727, 0.4611, 0.5786, 0.6766, 0.4557, 0.5784, 0.6859, 0.4492, 0.5725, 0.689, 0.4427, 0.5738,
      0.69, 0.4375, 0.5766, 0.6932, 0.4322, 0.5768, 0.6977, 0.4278, 0.5746, 0.7009, 0.4226, 0.5745, 0.7038, 0.4187,
      0.5738, 0.708, 0.4156, 0.571, 0.7103, 0.4167, 0.5673, 0.7144, 0.4106, 0.5666, 0, 0, 0, 0.4115, 0.1431, 0.9001,
      0.399, 0.1507, 0.9045, 0.3932, 0.1556, 0.9062, 0.3919, 0.161, 0.9058, 0.394, 0.1682, 0.9036, 0.3934, 0.1752,
      0.9025, 0.3836, 0.1859, 0.9046, 0.3812, 0.1932, 0.9041, 0.3811, 0.1974, 0.9032, 0.3749, 0.2024, 0.9047, 0.3739,
      0.2124, 0.9028, 0.3701, 0.2189, 0.9028, 0.3646, 0.2179, 0.9053, 0.3657, 0.2242, 0.9033, 0.3691, 0.2313, 0.9001,
      0.3667, 0.2383, 0.8993, 0.3714, 0.2435, 0.896, 0.3677, 0.2475, 0.8964, 0.3708, 0.2579, 0.8922, 0.3766, 0.2703,
      0.8861, 0.39, 0.2691, 0.8806, 0.3808, 0.3351, 0.8618, 0.38, 0.342, 0.8594, 0.3971, 0.3421, 0.8516, 0.3918, 0.3746,
      0.8403, 0.4498, 0.3746, 0.8108, 0.5036, 0.3746, 0.7785, 0.5563, 0.3746, 0.7418, 0.5642, 0.3587, 0.7436, 0.5621,
      0.3557, 0.7467, 0.5677, 0.3389, 0.7502, 0.5767, 0.3192, 0.752, 0.5825, 0.3151, 0.7493, 0.5909, 0.309, 0.7452,
      0.5861, 0.2995, 0.7528, 0.5769, 0.2968, 0.761, 0.5737, 0.2916, 0.7654, 0.5744, 0.2805, 0.769, 0.5726, 0.2558,
      0.7789, 0.5751, 0.2491, 0.7792, 0.5751, 0.2345, 0.7838, 0.5718, 0.2178, 0.791, 0.5645, 0.2093, 0.7984, 0.5601,
      0.1963, 0.8049, 0.5594, 0.1893, 0.807, 0.5533, 0.1845, 0.8123, 0.5508, 0.1665, 0.8178, 0.5524, 0.151, 0.8198,
      0.5511, 0.1644, 0.8181, 0.549, 0.1648, 0.8194, 0.5485, 0.1733, 0.818, 0.5462, 0.1792, 0.8183, 0.5381, 0.186,
      0.8221, 0.5351, 0.1984, 0.8212, 0.5353, 0.211, 0.8179, 0.5286, 0.2121, 0.822, 0.528, 0.2083, 0.8233, 0.5195,
      0.2075, 0.8289, 0.5235, 0.2025, 0.8276, 0.5258, 0.1922, 0.8286, 0.5188, 0.1828, 0.8351, 0.5127, 0.1704, 0.8415,
      0.5053, 0.1686, 0.8463, 0.4919, 0.1786, 0.8521, 0.4866, 0.1751, 0.8559, 0.4855, 0.1701, 0.8575, 0.478, 0.1668,
      0.8624, 0.4778, 0.1633, 0.8632, 0.4627, 0.1633, 0.8713, 0.4604, 0.1668, 0.8719, 0.4493, 0.1674, 0.8775, 0.444,
      0.1645, 0.8808, 0.4397, 0.166, 0.8827, 0.4309, 0.176, 0.885, 0.4279, 0.1807, 0.8856, 0.4169, 0.1784, 0.8913,
      0.4132, 0.1704, 0.8945, 0.4103, 0.155, 0.8987, 0.4051, 0.1518, 0.9016, 0.4004, 0.1499, 0.904, 0.4115, 0.1431,
      0.9001, 0, 0, 0, 0.4579, 0.0912, 0.8843, 0.4552, 0.0967, 0.8851, 0.4433, 0.1036, 0.8904, 0.4388, 0.114, 0.8913,
      0.432, 0.1215, 0.8937, 0.4209, 0.1305, 0.8976, 0.4205, 0.1361, 0.897, 0.4115, 0.1431, 0.9001, 0.4004, 0.1499,
      0.904, 0.4051, 0.1518, 0.9016, 0.4103, 0.155, 0.8987, 0.4132, 0.1704, 0.8945, 0.4169, 0.1784, 0.8913, 0.4279,
      0.1807, 0.8856, 0.4309, 0.176, 0.885, 0.4397, 0.166, 0.8827, 0.444, 0.1645, 0.8808, 0.4493, 0.1674, 0.8775,
      0.4604, 0.1668, 0.8719, 0.4627, 0.1633, 0.8713, 0.4778, 0.1633, 0.8632, 0.478, 0.1668, 0.8624, 0.4855, 0.1701,
      0.8575, 0.4866, 0.1751, 0.8559, 0.4919, 0.1786, 0.8521, 0.5053, 0.1686, 0.8463, 0.5127, 0.1704, 0.8415, 0.5188,
      0.1828, 0.8351, 0.5258, 0.1922, 0.8286, 0.5235, 0.2025, 0.8276, 0.5195, 0.2075, 0.8289, 0.528, 0.2083, 0.8233,
      0.5286, 0.2121, 0.822, 0.5353, 0.211, 0.8179, 0.5351, 0.1984, 0.8212, 0.5381, 0.186, 0.8221, 0.5462, 0.1792,
      0.8183, 0.5485, 0.1733, 0.818, 0.549, 0.1648, 0.8194, 0.5511, 0.1644, 0.8181, 0.5524, 0.151, 0.8198, 0.5507,
      0.1457, 0.8219, 0.5431, 0.1453, 0.827, 0.539, 0.1355, 0.8314, 0.5479, 0.1342, 0.8257, 0.5558, 0.1258, 0.8217,
      0.5588, 0.1189, 0.8207, 0.5656, 0.1148, 0.8166, 0.5752, 0.0959, 0.8124, 0.5661, 0.0845, 0.82, 0.5577, 0.0741,
      0.8267, 0.5491, 0.0661, 0.8331, 0.5389, 0.0661, 0.8398, 0.5271, 0.0621, 0.8475, 0.5176, 0.066, 0.8531, 0.5116,
      0.0612, 0.857, 0.498, 0.0728, 0.8641, 0.4941, 0.0802, 0.8657, 0.4858, 0.0765, 0.8707, 0.4787, 0.0777, 0.8745,
      0.4747, 0.0748, 0.8769, 0.4678, 0.0769, 0.8805, 0.4579, 0.0912, 0.8843, 0, 0, 0, -0.1949, 0.2155, 0.9569, -0.1974,
      0.2145, 0.9566, -0.2064, 0.2159, 0.9544, -0.2077, 0.214, 0.9545, -0.2114, 0.2136, 0.9538, -0.2232, 0.2177, 0.9502,
      -0.2312, 0.2179, 0.9482, -0.2616, 0.2186, 0.9401, -0.2661, 0.2167, 0.9393, -0.2715, 0.2173, 0.9376, -0.2803,
      0.2145, 0.9356, -0.2821, 0.2275, 0.932, -0.2673, 0.2272, 0.9365, -0.2632, 0.2295, 0.937, -0.2603, 0.2297, 0.9378,
      -0.254, 0.2336, 0.9386, -0.2472, 0.23, 0.9413, -0.24, 0.2297, 0.9432, -0.2327, 0.2335, 0.9441, -0.2357, 0.2384,
      0.9421, -0.2413, 0.2356, 0.9414, -0.2464, 0.2357, 0.9401, -0.2526, 0.2398, 0.9374, -0.2578, 0.2396, 0.936,
      -0.2618, 0.2355, 0.936, -0.2795, 0.2351, 0.9309, -0.2853, 0.2482, 0.9257, -0.2928, 0.2543, 0.9217, -0.2855,
      0.2575, 0.9231, -0.2768, 0.2693, 0.9224, -0.2722, 0.2779, 0.9212, -0.2663, 0.2833, 0.9213, -0.2584, 0.2818, 0.924,
      -0.2502, 0.2855, 0.9251, -0.2412, 0.2857, 0.9275, -0.2338, 0.2807, 0.9309, -0.2233, 0.2763, 0.9348, -0.2142,
      0.2639, 0.9405, -0.204, 0.2524, 0.9459, -0.2038, 0.2418, 0.9487, -0.201, 0.2321, 0.9517, -0.195, 0.2274, 0.9541,
      -0.1939, 0.2208, 0.9559, -0.1949, 0.2155, 0.9569, 0, 0, 0, 0.3019, -0.1819, -0.9358, 0.297, -0.1878, -0.9362,
      0.3084, -0.1877, -0.9325, 0.3152, -0.1772, -0.9323, 0.3052, -0.1813, -0.9349, 0.3019, -0.1819, -0.9358, 0, 0, 0,
      0.3231, -0.1715, -0.9307, 0.3294, -0.1718, -0.9284, 0.3395, -0.1701, -0.9251, 0.343, -0.1675, -0.9243, 0.3424,
      -0.1606, -0.9257, 0.3315, -0.1633, -0.9292, 0.3261, -0.1669, -0.9305, 0.3231, -0.1715, -0.9307, 0, 0, 0, 0.3099,
      -0.1668, -0.936, 0.3122, -0.1699, -0.9347, 0.3251, -0.155, -0.9329, 0.329, -0.1447, -0.9332, 0.3234, -0.1447,
      -0.9351, 0.3169, -0.1585, -0.9351, 0.3099, -0.1668, -0.936, 0, 0, 0, 0.3404, -0.145, -0.929, 0.3396, -0.1485,
      -0.9288, 0.3526, -0.1411, -0.9251, 0.3618, -0.1349, -0.9225, 0.3681, -0.1292, -0.9208, 0.3658, -0.1274, -0.9219,
      0.3582, -0.1316, -0.9243, 0.3445, -0.1395, -0.9284, 0.3404, -0.145, -0.929, 0, 0, 0, 0.3789, -0.1279, -0.9165,
      0.3821, -0.1289, -0.9151, 0.3892, -0.1249, -0.9126, 0.3961, -0.1178, -0.9106, 0.3954, -0.1149, -0.9113, 0.3856,
      -0.1222, -0.9145, 0.3789, -0.1279, -0.9165, 0, 0, 0, -0.2264, 0.1548, 0.9617, -0.2171, 0.1623, 0.9625, -0.215,
      0.1671, 0.9622, -0.212, 0.1708, 0.9622, -0.2074, 0.1712, 0.9632, -0.2033, 0.1745, 0.9634, -0.1899, 0.1744, 0.9662,
      -0.1854, 0.1683, 0.9682, -0.1819, 0.1611, 0.97, -0.1826, 0.156, 0.9707, -0.18, 0.1515, 0.9719, -0.1804, 0.1452,
      0.9728, -0.1757, 0.1462, 0.9735, -0.1838, 0.1381, 0.9732, -0.1917, 0.1287, 0.973, -0.1927, 0.1237, 0.9734,
      -0.1969, 0.1182, 0.9733, -0.2015, 0.1194, 0.9722, -0.2135, 0.1264, 0.9687, -0.222, 0.1357, 0.9656, -0.2248, 0.142,
      0.964, -0.2264, 0.1548, 0.9617, 0, 0, 0, -0.9714, 0.2374, -0.0016, -0.9708, 0.2399, -0.0011, -0.9697, 0.2442,
      0.0047, -0.9692, 0.2461, 0.0079, -0.9687, 0.2481, 0.007, -0.9684, 0.2491, 0.0109, -0.9687, 0.2477, 0.0159,
      -0.9695, 0.2443, 0.0196, -0.9701, 0.2416, 0.0247, -0.9706, 0.2393, 0.0253, -0.9699, 0.2413, 0.0328, -0.9701,
      0.2401, 0.0363, -0.9704, 0.2383, 0.0386, -0.9721, 0.2315, 0.0375, -0.9731, 0.2275, 0.0356, -0.9734, 0.2277,
      0.0258, -0.9731, 0.2294, 0.0196, -0.9725, 0.2327, 0.0126, -0.9723, 0.2338, 0.0032, -0.9714, 0.2374, -0.0016, 0, 0,
      0, 0.6668, 0.1896, 0.7207, 0.6702, 0.1987, 0.7151, 0.6747, 0.1956, 0.7117, 0.6781, 0.1885, 0.7104, 0.6846, 0.1813,
      0.706, 0.6907, 0.1812, 0.7001, 0.7015, 0.1856, 0.688, 0.7142, 0.1877, 0.6743, 0.7237, 0.193, 0.6626, 0.7293,
      0.1941, 0.6561, 0.7329, 0.1972, 0.6512, 0.7392, 0.1978, 0.6438, 0.7392, 0.1978, 0.6438, 0.7392, 0.1978, 0.6438,
      0.7392, 0.1976, 0.6439, 0.7402, 0.1905, 0.6448, 0.7426, 0.1732, 0.6469, 0.7438, 0.1642, 0.648, 0.7399, 0.1536,
      0.6549, 0.7335, 0.1392, 0.6653, 0.7236, 0.1391, 0.676, 0.6818, 0.1596, 0.714, 0.6763, 0.1657, 0.7177, 0.6707,
      0.174, 0.721, 0.6649, 0.1835, 0.7241, 0.6668, 0.1896, 0.7207, 0, 0, 0, 0.6657, 0.0683, 0.7431, 0.669, 0.0738,
      0.7396, 0.6772, 0.0742, 0.7321, 0.6878, 0.0864, 0.7207, 0.704, 0.0872, 0.7049, 0.7335, 0.1392, 0.6653, 0.7399,
      0.1536, 0.6549, 0.7438, 0.1642, 0.648, 0.7426, 0.1732, 0.6469, 0.7402, 0.1905, 0.6448, 0.7392, 0.1976, 0.6439,
      0.7392, 0.1978, 0.6438, 0.7392, 0.1978, 0.6438, 0.7427, 0.1982, 0.6396, 0.7475, 0.2007, 0.6333, 0.753, 0.2024,
      0.6261, 0.7572, 0.2083, 0.6191, 0.7613, 0.2083, 0.614, 0.7623, 0.2036, 0.6144, 0.7629, 0.1937, 0.6169, 0.7643,
      0.1847, 0.6179, 0.7629, 0.1785, 0.6214, 0.7623, 0.1599, 0.6272, 0.7592, 0.1406, 0.6355, 0.7545, 0.1185, 0.6455,
      0.7468, 0.0931, 0.6585, 0.7381, 0.0736, 0.6707, 0.7253, 0.0498, 0.6867, 0.7136, 0.0357, 0.6997, 0.6954, 0.0184,
      0.7184, 0.6837, 0.0051, 0.7297, 0.6696, -0.016, 0.7426, 0.6665, -0.0252, 0.7451, 0.6634, -0.0294, 0.7476, 0.6559,
      -0.015, 0.7547, 0.655, 0.0486, 0.754, 0.6657, 0.0683, 0.7431, 0, 0, 0, 0.276, 0.6976, 0.6612, 0.2742, 0.6948,
      0.6649, 0.2769, 0.6902, 0.6686, 0.2846, 0.6847, 0.671, 0.2816, 0.6807, 0.6763, 0.281, 0.6766, 0.6806, 0.2829,
      0.6751, 0.6814, 0.2815, 0.6733, 0.6837, 0.2761, 0.6731, 0.6861, 0.2722, 0.6723, 0.6884, 0.2715, 0.6733, 0.6877,
      0.2724, 0.6748, 0.6859, 0.2727, 0.6779, 0.6827, 0.271, 0.6779, 0.6834, 0.2679, 0.6802, 0.6823, 0.2657, 0.6808,
      0.6825, 0.2635, 0.6829, 0.6814, 0.261, 0.6837, 0.6815, 0.2587, 0.6855, 0.6806, 0.2568, 0.6848, 0.682, 0.2566,
      0.6805, 0.6863, 0.254, 0.6796, 0.6882, 0.2546, 0.6807, 0.6869, 0.2492, 0.6834, 0.6862, 0.2448, 0.6847, 0.6864,
      0.2425, 0.6865, 0.6855, 0.2387, 0.6887, 0.6847, 0.2413, 0.6892, 0.6832, 0.2411, 0.6951, 0.6772, 0.2339, 0.7,
      0.6748, 0.2351, 0.7054, 0.6687, 0.2308, 0.7054, 0.6702, 0.2308, 0.7054, 0.6702, 0.2338, 0.71, 0.6642, 0.2289,
      0.7135, 0.6622, 0.2246, 0.7182, 0.6586, 0.2246, 0.7182, 0.6586, 0.2323, 0.7214, 0.6524, 0.2395, 0.7209, 0.6503,
      0.2474, 0.7161, 0.6527, 0.2501, 0.7122, 0.6559, 0.2581, 0.7093, 0.6559, 0.2609, 0.7042, 0.6603, 0.269, 0.7006,
      0.6609, 0.2715, 0.7034, 0.6569, 0.2749, 0.7019, 0.6571, 0.2731, 0.6998, 0.6601, 0.276, 0.6976, 0.6612, 0, 0, 0,
      -0.8137, 0.0403, 0.5799, -0.8193, 0.044, 0.5716, -0.8241, 0.0423, 0.5649, -0.828, 0.0438, 0.559, -0.8291, 0.0388,
      0.5577, -0.8276, 0.0353, 0.5602, -0.8286, 0.0317, 0.559, -0.8338, 0.0331, 0.5511, -0.8391, 0.0483, 0.5418,
      -0.8399, 0.0581, 0.5396, -0.8429, 0.0582, 0.5349, -0.8463, 0.0708, 0.5279, -0.8441, 0.0798, 0.5303, -0.8443,
      0.0839, 0.5293, -0.8383, 0.0884, 0.538, -0.8355, 0.1041, 0.5395, -0.8243, 0.1006, 0.5571, -0.823, 0.1037, 0.5585,
      -0.815, 0.105, 0.5699, -0.8045, 0.1003, 0.5854, -0.8109, 0.0854, 0.5789, -0.8109, 0.0735, 0.5806, -0.8075, 0.0632,
      0.5864, -0.8096, 0.0557, 0.5843, -0.8109, 0.0478, 0.5833, -0.8137, 0.0403, 0.5799, 0, 0, 0, 0.1949, 0.7446,
      0.6384, 0.1925, 0.7486, 0.6344, 0.1929, 0.7501, 0.6326, 0.1936, 0.7526, 0.6294, 0.1986, 0.7524, 0.628, 0.2019,
      0.7536, 0.6256, 0.2018, 0.7547, 0.6243, 0.2037, 0.7552, 0.623, 0.2035, 0.7578, 0.6199, 0.2058, 0.7583, 0.6186,
      0.2067, 0.7603, 0.6158, 0.2099, 0.7604, 0.6147, 0.2107, 0.7597, 0.6152, 0.2146, 0.7612, 0.612, 0.2215, 0.7572,
      0.6145, 0.2269, 0.7596, 0.6095, 0.2324, 0.7585, 0.6089, 0.2393, 0.7601, 0.6042, 0.2512, 0.7557, 0.6048, 0.2496,
      0.7527, 0.6092, 0.2495, 0.7481, 0.6149, 0.2477, 0.7469, 0.6171, 0.2347, 0.7504, 0.6179, 0.2315, 0.7497, 0.62,
      0.23, 0.747, 0.6238, 0.2254, 0.7455, 0.6272, 0.224, 0.7463, 0.6269, 0.2193, 0.7444, 0.6306, 0.215, 0.7441, 0.6325,
      0.215, 0.7418, 0.6353, 0.2061, 0.7403, 0.6399, 0.2016, 0.7416, 0.6398, 0.1949, 0.7446, 0.6384, 0, 0, 0, 0.1642,
      0.7255, 0.6684, 0.1741, 0.7246, 0.6669, 0.1792, 0.7273, 0.6625, 0.1892, 0.7276, 0.6594, 0.1908, 0.7296, 0.6567,
      0.1928, 0.7295, 0.6563, 0.1962, 0.7254, 0.6597, 0.188, 0.7222, 0.6656, 0.1882, 0.7173, 0.6708, 0.1845, 0.7161,
      0.6732, 0.1854, 0.7127, 0.6766, 0.1807, 0.7129, 0.6776, 0.1762, 0.7149, 0.6767, 0.1746, 0.7128, 0.6793, 0.1662,
      0.7133, 0.6809, 0.1686, 0.7144, 0.6792, 0.1644, 0.7195, 0.6747, 0.1642, 0.7255, 0.6684, 0, 0, 0, 0.1257, 0.9342,
      0.3337, 0.1365, 0.9312, 0.3381, 0.15, 0.9268, 0.3444, 0.1601, 0.9163, 0.367, 0.1648, 0.9136, 0.3717, 0.1552,
      0.9116, 0.3807, 0.1528, 0.9065, 0.3936, 0.1574, 0.9019, 0.4022, 0.1504, 0.8958, 0.4183, 0.1403, 0.889, 0.4358,
      0.1412, 0.8775, 0.4583, 0.1502, 0.8715, 0.4668, 0.1606, 0.8667, 0.4722, 0.1582, 0.8568, 0.4909, 0.1503, 0.8546,
      0.497, 0.154, 0.8391, 0.5218, 0.1526, 0.8301, 0.5364, 0.1408, 0.831, 0.5382, 0.1383, 0.8232, 0.5506, 0.1273,
      0.8228, 0.554, 0.1213, 0.832, 0.5413, 0.1099, 0.8428, 0.5268, 0.0989, 0.8559, 0.5076, 0.1011, 0.861, 0.4984,
      0.1061, 0.8671, 0.4868, 0.105, 0.8771, 0.4687, 0.0982, 0.8813, 0.4622, 0.0934, 0.892, 0.4422, 0.0953, 0.8993,
      0.4268, 0.1027, 0.8992, 0.4254, 0.1038, 0.9022, 0.4187, 0.0998, 0.9047, 0.4141, 0.1052, 0.9149, 0.3897, 0.1071,
      0.9226, 0.3707, 0.108, 0.9273, 0.3585, 0.114, 0.9273, 0.3567, 0.1129, 0.9308, 0.3475, 0.1251, 0.9298, 0.3461,
      0.1224, 0.934, 0.3357, 0.1257, 0.9342, 0.3337, 0, 0, 0, 0.4748, -0.4359, 0.7646, 0.4749, -0.4429, 0.7604, 0.4742,
      -0.4498, 0.7568, 0.4697, -0.4568, 0.7555, 0.4615, -0.4584, 0.7595, 0.4557, -0.45, 0.768, 0.457, -0.4446, 0.7704,
      0.4621, -0.4387, 0.7707, 0.4646, -0.4342, 0.7718, 0.4687, -0.433, 0.7699, 0.4748, -0.4359, 0.7646, 0, 0, 0,
      0.5364, 0.605, 0.5884, 0.5355, 0.5963, 0.5981, 0.5314, 0.5928, 0.6051, 0.5374, 0.5825, 0.6099, 0.5413, 0.5652,
      0.6225, 0.5232, 0.5502, 0.6509, 0.5067, 0.5345, 0.6764, 0.4912, 0.5404, 0.6831, 0.491, 0.5405, 0.6832, 0.4918,
      0.5427, 0.6809, 0.4893, 0.5487, 0.6779, 0.4891, 0.5567, 0.6715, 0.4933, 0.5621, 0.6639, 0.4891, 0.5678, 0.6622,
      0.4835, 0.5685, 0.6656, 0.478, 0.5794, 0.6602, 0.4783, 0.5853, 0.6547, 0.48, 0.5884, 0.6507, 0.4817, 0.5914,
      0.6466, 0.4789, 0.5993, 0.6415, 0.4837, 0.5965, 0.6404, 0.4942, 0.6004, 0.6287, 0.5012, 0.5978, 0.6256, 0.5101,
      0.5978, 0.6183, 0.5199, 0.6031, 0.605, 0.5257, 0.6029, 0.6002, 0.5364, 0.605, 0.5884, 0, 0, 0, 0.3812, 0.1932,
      0.9041, 0.3714, 0.1903, 0.9087, 0.3639, 0.1834, 0.9132, 0.3535, 0.1646, 0.9208, 0.3388, 0.1567, 0.9277, 0.323,
      0.1577, 0.9332, 0.3185, 0.1561, 0.935, 0.3204, 0.1501, 0.9353, 0.3122, 0.144, 0.939, 0.3055, 0.1373, 0.9422,
      0.285, 0.1307, 0.9496, 0.2807, 0.1346, 0.9503, 0.2779, 0.1349, 0.9511, 0.275, 0.1305, 0.9525, 0.2613, 0.1292,
      0.9566, 0.2638, 0.1339, 0.9553, 0.2581, 0.1458, 0.9551, 0.2554, 0.1529, 0.9547, 0.2481, 0.1558, 0.9561, 0.2378,
      0.1659, 0.957, 0.2411, 0.174, 0.9548, 0.2488, 0.1723, 0.9531, 0.2534, 0.1735, 0.9517, 0.2627, 0.1733, 0.9492,
      0.2529, 0.1889, 0.9489, 0.2529, 0.2003, 0.9465, 0.2512, 0.2116, 0.9445, 0.244, 0.2226, 0.9439, 0.2452, 0.2306,
      0.9417, 0.2346, 0.231, 0.9442, 0.234, 0.2419, 0.9417, 0.2268, 0.2481, 0.9418, 0.2325, 0.2703, 0.9343, 0.252,
      0.2861, 0.9245, 0.2511, 0.3078, 0.9177, 0.2541, 0.3413, 0.9049, 0.2568, 0.3484, 0.9015, 0.2497, 0.354, 0.9013,
      0.249, 0.3592, 0.8995, 0.2426, 0.3634, 0.8995, 0.2362, 0.3885, 0.8907, 0.2508, 0.3973, 0.8827, 0.3159, 0.3664,
      0.8752, 0.3808, 0.3351, 0.8618, 0.39, 0.2691, 0.8806, 0.3766, 0.2703, 0.8861, 0.3708, 0.2579, 0.8922, 0.3677,
      0.2475, 0.8964, 0.3714, 0.2435, 0.896, 0.3667, 0.2383, 0.8993, 0.3691, 0.2313, 0.9001, 0.3657, 0.2242, 0.9033,
      0.3646, 0.2179, 0.9053, 0.3701, 0.2189, 0.9028, 0.3739, 0.2124, 0.9028, 0.3749, 0.2024, 0.9047, 0.3811, 0.1974,
      0.9032, 0.3812, 0.1932, 0.9041, 0, 0, 0, 0.0154, 0.1908, 0.9815, 0.0133, 0.1817, 0.9833, 0.0185, 0.1767, 0.9841,
      0.0245, 0.1706, 0.985, 0.0252, 0.1622, 0.9864, 0.0287, 0.1587, 0.9869, 0.0281, 0.119, 0.9925, 0.0324, 0.107,
      0.9937, 0.0184, 0.1033, 0.9945, 0.0145, 0.1094, 0.9939, 0.0099, 0.1204, 0.9927, 0.0085, 0.129, 0.9916, 0.0123,
      0.1446, 0.9894, 0.008, 0.1509, 0.9885, 0.0063, 0.1644, 0.9864, 0.0063, 0.1769, 0.9842, -9e-4, 0.1858, 0.9826,
      4e-4, 0.1911, 0.9816, 0.0154, 0.1908, 0.9815, 0, 0, 0, 0.9351, 0.2465, -0.2544, 0.9386, 0.249, -0.2389, 0.9445,
      0.2457, -0.2179, 0.9503, 0.2317, -0.208, 0.954, 0.2111, -0.213, 0.9555, 0.2189, -0.1977, 0.9584, 0.2186, -0.1834,
      0.9549, 0.232, -0.1852, 0.9577, 0.2319, -0.1706, 0.9621, 0.2131, -0.17, 0.9687, 0.1882, -0.1617, 0.9724, 0.173,
      -0.1567, 0.9743, 0.1606, -0.1582, 0.9725, 0.16, -0.1693, 0.9737, 0.1443, -0.1766, 0.9751, 0.1293, -0.18, 0.9745,
      0.1194, -0.1897, 0.9727, 0.1174, -0.2001, 0.9719, 0.1084, -0.2091, 0.9738, 0.1012, -0.2037, 0.9763, 0.0992,
      -0.1925, 0.9756, 0.1081, -0.191, 0.9774, 0.1157, -0.1769, 0.9783, 0.1126, -0.174, 0.9787, 0.1192, -0.1671, 0.9781,
      0.1278, -0.164, 0.9783, 0.1376, -0.1547, 0.9784, 0.1458, -0.1463, 0.9803, 0.1356, -0.1437, 0.9794, 0.1452,
      -0.1403, 0.9775, 0.156, -0.1419, 0.9741, 0.1725, -0.1465, 0.9696, 0.1901, -0.1542, 0.9649, 0.2061, -0.163, 0.9626,
      0.2216, -0.1558, 0.9607, 0.2295, -0.1558, 0.9588, 0.239, -0.1535, 0.9572, 0.2524, -0.1419, 0.9555, 0.2609,
      -0.1376, 0.9538, 0.264, -0.1432, 0.9488, 0.2786, -0.1486, 0.9466, 0.2897, -0.1414, 0.9444, 0.3018, -0.1304,
      0.9408, 0.3164, -0.1218, 0.9389, 0.3194, -0.1286, 0.9317, 0.3372, -0.1351, 0.9297, 0.338, -0.1466, 0.9256, 0.3451,
      -0.1556, 0.9226, 0.3489, -0.1646, 0.9232, 0.3438, -0.1719, 0.9265, 0.3339, -0.1735, 0.9246, 0.3332, -0.1845,
      0.9313, 0.3158, -0.1816, 0.9359, 0.3009, -0.1829, 0.9293, 0.3108, -0.1995, 0.9292, 0.3079, -0.2045, 0.9269,
      0.3084, -0.214, 0.9243, 0.3142, -0.2168, 0.9217, 0.313, -0.2291, 0.9228, 0.2995, -0.2424, 0.9274, 0.283, -0.2447,
      0.9279, 0.2684, -0.2589, 0.9318, 0.2542, -0.2592, 0.9351, 0.2465, -0.2544, 0, 0, 0, 0.7671, 0.6077, 0.2058,
      0.7632, 0.6077, 0.2196, 0.7598, 0.6087, 0.2285, 0.7618, 0.6025, 0.2382, 0.7609, 0.6011, 0.2444, 0.7615, 0.5982,
      0.2497, 0.7565, 0.6027, 0.2539, 0.7484, 0.6144, 0.2498, 0.7466, 0.615, 0.2536, 0.744, 0.6192, 0.2511, 0.7392,
      0.6223, 0.2573, 0.7408, 0.6176, 0.2641, 0.7444, 0.612, 0.267, 0.7452, 0.61, 0.2695, 0.7421, 0.6103, 0.2772,
      0.7451, 0.6039, 0.2831, 0.7415, 0.6066, 0.2867, 0.741, 0.6021, 0.2973, 0.7382, 0.6038, 0.3008, 0.7311, 0.6178,
      0.2896, 0.7225, 0.628, 0.2893, 0.7163, 0.6312, 0.2975, 0.7131, 0.6372, 0.2924, 0.7178, 0.6365, 0.2822, 0.7143,
      0.6439, 0.274, 0.709, 0.6525, 0.2675, 0.7126, 0.6555, 0.25, 0.7166, 0.6494, 0.2544, 0.7202, 0.6457, 0.2536,
      0.7218, 0.646, 0.2483, 0.7234, 0.6419, 0.2541, 0.7167, 0.6442, 0.2671, 0.7223, 0.6364, 0.2706, 0.7265, 0.6375,
      0.2566, 0.7353, 0.6331, 0.242, 0.7412, 0.6352, 0.2171, 0.752, 0.6226, 0.2166, 0.7521, 0.624, 0.212, 0.7567,
      0.6209, 0.2047, 0.7607, 0.6155, 0.2062, 0.7671, 0.6077, 0.2058, 0, 0, 0, 0.729, 0.6069, 0.3167, 0.727, 0.6073,
      0.3204, 0.7218, 0.611, 0.3252, 0.7243, 0.6061, 0.3287, 0.7212, 0.6034, 0.3402, 0.7276, 0.5922, 0.3463, 0.727,
      0.5879, 0.3548, 0.7234, 0.5858, 0.3655, 0.7261, 0.5793, 0.3702, 0.7224, 0.5774, 0.3804, 0.7122, 0.5828, 0.3913,
      0.704, 0.5947, 0.3882, 0.6985, 0.5952, 0.3972, 0.6825, 0.6076, 0.4063, 0.6758, 0.6091, 0.4152, 0.6631, 0.6161,
      0.4252, 0.6569, 0.6173, 0.4328, 0.6553, 0.6148, 0.439, 0.6498, 0.6152, 0.4464, 0.6492, 0.6073, 0.458, 0.6438,
      0.6046, 0.4691, 0.6362, 0.6144, 0.4667, 0.6282, 0.6287, 0.4584, 0.6189, 0.6333, 0.4647, 0.6149, 0.6425, 0.4574,
      0.609, 0.6432, 0.464, 0.6032, 0.6544, 0.4559, 0.6129, 0.6512, 0.4476, 0.6167, 0.6554, 0.436, 0.6055, 0.6633,
      0.4398, 0.5979, 0.6707, 0.4389, 0.5941, 0.6674, 0.449, 0.6, 0.6578, 0.4552, 0.5916, 0.6663, 0.4539, 0.592, 0.6706,
      0.447, 0.5987, 0.6733, 0.4337, 0.6065, 0.6697, 0.4285, 0.6192, 0.6595, 0.4263, 0.6225, 0.6601, 0.4204, 0.6305,
      0.6603, 0.408, 0.6245, 0.6669, 0.4066, 0.6271, 0.6713, 0.3951, 0.627, 0.6788, 0.3823, 0.6412, 0.672, 0.3705,
      0.6499, 0.6616, 0.374, 0.6544, 0.659, 0.3708, 0.6609, 0.6596, 0.3581, 0.6648, 0.6572, 0.3552, 0.6782, 0.6435,
      0.3549, 0.692, 0.6342, 0.3448, 0.7006, 0.6279, 0.3391, 0.7115, 0.6212, 0.3285, 0.7232, 0.6153, 0.3137, 0.729,
      0.6069, 0.3167, 0, 0, 0, 0.8073, -0.1632, -0.5671, 0.8082, -0.158, -0.5674, 0.8096, -0.1546, -0.5662, 0.809,
      -0.1505, -0.5683, 0.8008, -0.1466, -0.5807, 0.7937, -0.1461, -0.5905, 0.7908, -0.1439, -0.595, 0.7866, -0.146,
      -0.6, 0.7898, -0.1507, -0.5945, 0.7996, -0.1583, -0.5793, 0.8073, -0.1632, -0.5671, 0, 0, 0, -0.8648, 0.1867,
      0.4661, -0.8597, 0.1889, 0.4745, -0.8581, 0.1883, 0.4777, -0.8605, 0.1755, 0.4783, -0.8677, 0.1736, 0.4658,
      -0.8689, 0.1752, 0.463, -0.8658, 0.1799, 0.467, -0.8648, 0.1867, 0.4661, 0, 0, 0, 0.1422, 0.5046, 0.8515, 0.1333,
      0.5314, 0.8365, 0.1238, 0.5374, 0.8342, 0.1233, 0.541, 0.832, 0.1107, 0.5497, 0.828, 0.1084, 0.5606, 0.821,
      0.1165, 0.5686, 0.8143, 0.1186, 0.5804, 0.8056, 0.115, 0.5939, 0.7963, 0.117, 0.6011, 0.7906, 0.1313, 0.6067,
      0.784, 0.1411, 0.605, 0.7836, 0.1417, 0.598, 0.7889, 0.1526, 0.6031, 0.7829, 0.154, 0.6004, 0.7847, 0.148, 0.5936,
      0.7911, 0.1488, 0.587, 0.7958, 0.1541, 0.5835, 0.7973, 0.1539, 0.5712, 0.8063, 0.1455, 0.564, 0.8129, 0.1492,
      0.5561, 0.8176, 0.1566, 0.5558, 0.8164, 0.161, 0.5489, 0.8202, 0.1668, 0.5466, 0.8206, 0.1674, 0.5354, 0.8279,
      0.1609, 0.5311, 0.8319, 0.1569, 0.5264, 0.8356, 0.1475, 0.5207, 0.8409, 0.1497, 0.5145, 0.8443, 0.1491, 0.5081,
      0.8483, 0.1422, 0.5046, 0.8515, 0, 0, 0, 0.5196, 0.6573, 0.5459, 0.524, 0.6526, 0.5473, 0.5269, 0.6462, 0.5522,
      0.5359, 0.6429, 0.5473, 0.542, 0.6389, 0.5459, 0.5376, 0.6351, 0.5546, 0.5494, 0.6195, 0.5606, 0.5498, 0.6153,
      0.5649, 0.5612, 0.6042, 0.5657, 0.5612, 0.6042, 0.5657, 0.5577, 0.6018, 0.5716, 0.5523, 0.6054, 0.5731, 0.5397,
      0.6072, 0.5832, 0.5364, 0.605, 0.5884, 0.5257, 0.6029, 0.6002, 0.5199, 0.6031, 0.605, 0.5101, 0.5978, 0.6183,
      0.5012, 0.5978, 0.6256, 0.4942, 0.6004, 0.6287, 0.4837, 0.5965, 0.6404, 0.4789, 0.5993, 0.6415, 0.4817, 0.5914,
      0.6466, 0.48, 0.5884, 0.6507, 0.4783, 0.5853, 0.6547, 0.4714, 0.5917, 0.654, 0.4734, 0.5969, 0.6477, 0.467,
      0.5957, 0.6535, 0.456, 0.599, 0.6582, 0.4514, 0.5909, 0.6686, 0.4342, 0.5893, 0.6813, 0.4216, 0.5968, 0.6827,
      0.4085, 0.5973, 0.6902, 0.4079, 0.5915, 0.6955, 0.4001, 0.5898, 0.7014, 0.3856, 0.5973, 0.7033, 0.3722, 0.597,
      0.7106, 0.36, 0.6109, 0.7051, 0.3484, 0.6185, 0.7043, 0.3505, 0.6291, 0.6938, 0.3405, 0.6356, 0.6929, 0.3489,
      0.6484, 0.6766, 0.3668, 0.6489, 0.6666, 0.3674, 0.659, 0.6563, 0.3898, 0.6572, 0.6451, 0.3993, 0.6657, 0.6304,
      0.4102, 0.6694, 0.6194, 0.4278, 0.6697, 0.6071, 0.451, 0.6605, 0.6003, 0.4686, 0.6554, 0.5924, 0.4794, 0.6574,
      0.5813, 0.4888, 0.6562, 0.5748, 0.4965, 0.6631, 0.5602, 0.5065, 0.6637, 0.5504, 0.5196, 0.6573, 0.5459, 0, 0, 0,
      0.328, 0.6669, 0.6691, 0.3382, 0.671, 0.6599, 0.3488, 0.6692, 0.6561, 0.3523, 0.6642, 0.6593, 0.3641, 0.66,
      0.6571, 0.3634, 0.6568, 0.6608, 0.3499, 0.6561, 0.6687, 0.3465, 0.652, 0.6744, 0.3393, 0.6448, 0.6849, 0.3333,
      0.651, 0.682, 0.3324, 0.6537, 0.6798, 0.3346, 0.6552, 0.6773, 0.3351, 0.6634, 0.669, 0.328, 0.6669, 0.6691, 0, 0,
      0, 0.7742, 0.413, -0.4796, 0.7888, 0.3874, -0.4772, 0.797, 0.3741, -0.4741, 0.7965, 0.3878, -0.4639, 0.793,
      0.3996, -0.4598, 0.7822, 0.4153, -0.4644, 0.7709, 0.4273, -0.4723, 0.769, 0.4226, -0.4796, 0.7742, 0.413, -0.4796,
      0, 0, 0, 0.4885, -0.0785, 0.869, 0.4948, -0.0776, 0.8655, 0.5005, -0.0713, 0.8628, 0.5066, -0.0622, 0.8599,
      0.5104, -0.0586, 0.8579, 0.5105, -0.0529, 0.8583, 0.5073, -0.049, 0.8604, 0.5066, -0.0421, 0.8611, 0.5066,
      -0.0421, 0.8611, 0.511, -0.0399, 0.8586, 0.5121, -0.0296, 0.8584, 0.5062, -0.0198, 0.8622, 0.5115, -0.0177,
      0.8591, 0.5279, -0.0179, 0.8491, 0.5577, -0.0166, 0.8299, 0.5601, -0.0185, 0.8282, 0.6106, -0.054, 0.7901, 0.6112,
      -0.0641, 0.7889, 0.63, -0.0815, 0.7723, 0.6225, -0.1029, 0.7758, 0.6226, -0.1128, 0.7744, 0.6307, -0.1191, 0.7668,
      0.6308, -0.1236, 0.766, 0.6263, -0.1341, 0.768, 0.6266, -0.1393, 0.7668, 0.6249, -0.1476, 0.7666, 0.6285, -0.1584,
      0.7615, 0.6322, -0.1753, 0.7547, 0.6365, -0.1791, 0.7502, 0.6365, -0.1791, 0.7502, 0.6249, -0.189, 0.7575, 0.6095,
      -0.1957, 0.7682, 0.6015, -0.1954, 0.7746, 0.596, -0.2005, 0.7775, 0.5865, -0.201, 0.7846, 0.5826, -0.2031, 0.787,
      0.5666, -0.1983, 0.7998, 0.5558, -0.1997, 0.8069, 0.5544, -0.1764, 0.8133, 0.5504, -0.1684, 0.8178, 0.5479,
      -0.1636, 0.8204, 0.5341, -0.1604, 0.8301, 0.5263, -0.1552, 0.836, 0.5172, -0.1523, 0.8422, 0.5116, -0.1494,
      0.8461, 0.5057, -0.145, 0.8504, 0.5057, -0.145, 0.8504, 0.4992, -0.1233, 0.8577, 0.491, -0.1136, 0.8637, 0.4886,
      -0.1035, 0.8664, 0.4905, -0.0945, 0.8663, 0.4885, -0.0785, 0.869, 0, 0, 0, 0.4935, -0.0234, 0.8694, 0.4937,
      -0.0103, 0.8696, 0.4973, -0.0036, 0.8676, 0.4981, 0.0104, 0.8671, 0.5012, 0.0185, 0.8651, 0.5069, 0.0276, 0.8616,
      0.5126, 0.0323, 0.858, 0.5173, 0.0385, 0.855, 0.5112, 0.0408, 0.8585, 0.5116, 0.0612, 0.857, 0.5116, 0.0612,
      0.857, 0.5176, 0.066, 0.8531, 0.5271, 0.0621, 0.8475, 0.5389, 0.0661, 0.8398, 0.5491, 0.0661, 0.8331, 0.5577,
      0.0741, 0.8267, 0.565, 0.062, 0.8227, 0.567, 0.0533, 0.822, 0.5738, 0.0333, 0.8183, 0.5688, 0.0205, 0.8222,
      0.5618, 0.009, 0.8272, 0.5577, 0.0019, 0.8301, 0.5577, -0.0166, 0.8299, 0.5279, -0.0179, 0.8491, 0.5115, -0.0177,
      0.8591, 0.5062, -0.0198, 0.8622, 0.4971, -0.0252, 0.8673, 0.4935, -0.0234, 0.8694, 0, 0, 0, 0.2481, 0.7835,
      0.5698, 0.2526, 0.7839, 0.5672, 0.2565, 0.7868, 0.5614, 0.2639, 0.787, 0.5576, 0.2742, 0.7862, 0.5538, 0.2864,
      0.7836, 0.5513, 0.2941, 0.7834, 0.5475, 0.2986, 0.7818, 0.5473, 0.3011, 0.7837, 0.5433, 0.3051, 0.7812, 0.5447,
      0.3133, 0.7817, 0.5392, 0.3177, 0.7806, 0.5382, 0.3148, 0.7861, 0.5319, 0.3161, 0.7885, 0.5276, 0.3236, 0.7891,
      0.5221, 0.3273, 0.7887, 0.5205, 0.3279, 0.7911, 0.5164, 0.331, 0.7906, 0.5152, 0.3395, 0.7916, 0.508, 0.3495,
      0.7855, 0.5107, 0.3489, 0.7833, 0.5145, 0.352, 0.7799, 0.5175, 0.3595, 0.7794, 0.5131, 0.3661, 0.7747, 0.5156,
      0.3675, 0.7725, 0.5179, 0.3817, 0.7686, 0.5134, 0.3872, 0.7703, 0.5066, 0.3965, 0.7651, 0.5073, 0.4016, 0.7652,
      0.5032, 0.4172, 0.7616, 0.496, 0.4198, 0.7582, 0.4989, 0.4207, 0.7522, 0.5071, 0.4272, 0.7459, 0.511, 0.4286,
      0.742, 0.5156, 0.4204, 0.7411, 0.5235, 0.4179, 0.7378, 0.53, 0.4212, 0.7326, 0.5348, 0.4143, 0.7316, 0.5414,
      0.4104, 0.7278, 0.5495, 0.4018, 0.7271, 0.5566, 0.3961, 0.7226, 0.5665, 0.4005, 0.7162, 0.5716, 0.3987, 0.7165,
      0.5724, 0.396, 0.7189, 0.5712, 0.3925, 0.7194, 0.573, 0.3839, 0.722, 0.5756, 0.383, 0.719, 0.58, 0.3808, 0.7203,
      0.5798, 0.3633, 0.7234, 0.5872, 0.3601, 0.7278, 0.5836, 0.3514, 0.7264, 0.5907, 0.3511, 0.7197, 0.5989, 0.3475,
      0.7107, 0.6117, 0.3416, 0.7128, 0.6125, 0.3375, 0.7108, 0.6171, 0.3316, 0.7131, 0.6176, 0.3337, 0.7144, 0.615,
      0.3335, 0.7186, 0.6102, 0.3345, 0.7225, 0.6051, 0.3327, 0.7246, 0.6035, 0.3344, 0.7256, 0.6014, 0.3363, 0.7239,
      0.6024, 0.3426, 0.7236, 0.5992, 0.3449, 0.7245, 0.5968, 0.3423, 0.7257, 0.5968, 0.3421, 0.7275, 0.5948, 0.3369,
      0.7305, 0.594, 0.3328, 0.7355, 0.5902, 0.328, 0.7374, 0.5905, 0.3266, 0.7414, 0.5862, 0.3203, 0.7445, 0.5857,
      0.3159, 0.745, 0.5876, 0.3064, 0.7486, 0.588, 0.3001, 0.7474, 0.5927, 0.2985, 0.7457, 0.5956, 0.2941, 0.7457,
      0.5978, 0.2928, 0.743, 0.6018, 0.2856, 0.7419, 0.6067, 0.2828, 0.7401, 0.6102, 0.2765, 0.7429, 0.6096, 0.2697,
      0.743, 0.6126, 0.2625, 0.7443, 0.6141, 0.2589, 0.7418, 0.6187, 0.2568, 0.7449, 0.6158, 0.2495, 0.7481, 0.6149,
      0.2496, 0.7527, 0.6092, 0.2512, 0.7557, 0.6048, 0.2538, 0.755, 0.6046, 0.2488, 0.7601, 0.6002, 0.2539, 0.7695,
      0.586, 0.2583, 0.7708, 0.5824, 0.2579, 0.7739, 0.5784, 0.2481, 0.7835, 0.5698, 0, 0, 0, -0.7071, -0.5579, 0.4345,
      -0.7118, -0.5485, 0.4388, -0.7119, -0.5452, 0.4426, -0.72, -0.5306, 0.4474, -0.7258, -0.5153, 0.4557, -0.7298,
      -0.5033, 0.4627, -0.7253, -0.5017, 0.4715, -0.7113, -0.5133, 0.4802, -0.7084, -0.5129, 0.485, -0.6948, -0.5224,
      0.4943, -0.6839, -0.5306, 0.5007, -0.6737, -0.5406, 0.5038, -0.6739, -0.5476, 0.4959, -0.6671, -0.5558, 0.4959,
      -0.6659, -0.5649, 0.4873, -0.6709, -0.5729, 0.4709, -0.6785, -0.57, 0.4633, -0.682, -0.5716, 0.4563, -0.6928,
      -0.5654, 0.4475, -0.6978, -0.5659, 0.4391, -0.7071, -0.5579, 0.4345, 0, 0, 0, -0.5512, 0.7547, -0.3558, -0.5682,
      0.7547, -0.328, -0.5844, 0.7547, -0.2982, -0.5894, 0.7547, -0.2881, -0.6039, 0.7547, -0.2563, -0.6163, 0.7547,
      -0.2249, -0.6272, 0.7547, -0.1924, -0.6364, 0.7547, -0.1593, -0.6448, 0.7547, -0.1212, -0.6508, 0.7547, -0.0826,
      -0.6534, 0.7547, -0.059, -0.6483, 0.7591, -0.0585, -0.6486, 0.7591, -0.0547, -0.656, 0.7529, -0.0532, -0.6585,
      0.7509, -0.0498, -0.6599, 0.7502, -0.0419, -0.6626, 0.7484, -0.0302, -0.667, 0.7448, -0.0191, -0.6656, 0.7463,
      -0.0096, -0.669, 0.7433, 0.0047, -0.6688, 0.7434, 0.0085, -0.6649, 0.7467, 0.0188, -0.6692, 0.7424, 0.0299,
      -0.6736, 0.7379, 0.0416, -0.6772, 0.734, 0.0515, -0.6805, 0.7302, 0.061, -0.6838, 0.727, 0.0625, -0.6847, 0.7258,
      0.0654, -0.6861, 0.7246, 0.0648, -0.6861, 0.7243, 0.068, -0.6846, 0.7255, 0.0702, -0.6875, 0.7227, 0.0711,
      -0.6893, 0.7208, 0.0738, -0.6889, 0.7208, 0.0771, -0.6902, 0.7193, 0.079, -0.6926, 0.7171, 0.0778, -0.6969,
      0.7114, 0.0911, -0.7076, 0.7002, 0.0952, -0.7177, 0.6893, 0.0991, -0.7252, 0.6817, 0.0964, -0.7324, 0.6747,
      0.0912, -0.7369, 0.6702, 0.0889, -0.7381, 0.6688, 0.0888, -0.7396, 0.667, 0.0904, -0.7409, 0.6649, 0.095, -0.7404,
      0.6649, 0.0983, -0.7321, 0.6718, 0.1123, -0.7282, 0.6739, 0.1252, -0.7194, 0.6803, 0.1406, -0.7181, 0.6816,
      0.1406, -0.7148, 0.6854, 0.1388, -0.7129, 0.6879, 0.1363, -0.7099, 0.6899, 0.1416, -0.7073, 0.69, 0.1537, -0.7048,
      0.69, 0.165, -0.6992, 0.6949, 0.1679, -0.698, 0.6959, 0.1692, -0.6862, 0.7048, 0.1798, -0.6826, 0.7071, 0.1846,
      -0.6774, 0.7072, 0.2026, -0.6705, 0.7072, 0.2243, -0.6672, 0.7102, 0.2245, -0.6653, 0.7109, 0.228, -0.6618,
      0.7128, 0.2323, -0.655, 0.7183, 0.2345, -0.6445, 0.7277, 0.2346, -0.6323, 0.7367, 0.2397, -0.6341, 0.7336, 0.2446,
      -0.6292, 0.7356, 0.2512, -0.6306, 0.7321, 0.2575, -0.6466, 0.7157, 0.264, -0.65, 0.7088, 0.2741, -0.6529, 0.7048,
      0.2776, -0.6634, 0.6987, 0.2676, -0.6721, 0.6944, 0.2572, -0.68, 0.6907, 0.246, -0.689, 0.6831, 0.242, -0.6922,
      0.6803, 0.2409, -0.6982, 0.6735, 0.2428, -0.7026, 0.6666, 0.2489, -0.7011, 0.6663, 0.2541, -0.6975, 0.671, 0.2513,
      -0.6987, 0.6681, 0.2559, -0.7021, 0.6644, 0.256, -0.7069, 0.6623, 0.2484, -0.7087, 0.6625, 0.2424, -0.7137,
      0.6603, 0.2338, -0.716, 0.6596, 0.2286, -0.7188, 0.659, 0.2215, -0.7252, 0.6552, 0.2119, -0.7174, 0.6576, 0.2298,
      -0.7183, 0.6551, 0.2342, -0.7271, 0.6512, 0.2175, -0.7295, 0.6511, 0.2094, -0.728, 0.6528, 0.2094, -0.7322,
      0.6491, 0.2064, -0.7316, 0.6485, 0.2103, -0.7402, 0.6389, 0.2097, -0.751, 0.6285, 0.2025, -0.7485, 0.632, 0.2008,
      -0.7487, 0.6327, 0.1978, -0.7472, 0.6361, 0.1928, -0.7522, 0.6288, 0.1971, -0.7532, 0.6264, 0.2008, -0.7571,
      0.6212, 0.2021, -0.7623, 0.6159, 0.1989, -0.7725, 0.6048, 0.1935, -0.7724, 0.6054, 0.1921, -0.7643, 0.6148,
      0.1945, -0.762, 0.62, 0.1867, -0.7536, 0.6314, 0.183, -0.7588, 0.6255, 0.1816, -0.7648, 0.6168, 0.186, -0.7653,
      0.619, 0.1768, -0.7665, 0.6145, 0.1868, -0.7761, 0.6013, 0.1898, -0.7759, 0.6004, 0.1939, -0.779, 0.5955, 0.1961,
      -0.7885, 0.5814, 0.2006, -0.7979, 0.5708, 0.1936, -0.8042, 0.5666, 0.1798, -0.8118, 0.5581, 0.1717, -0.8139,
      0.5572, 0.1648, -0.8188, 0.5518, 0.1583, -0.8223, 0.547, 0.1568, -0.8313, 0.5374, 0.1421, -0.837, 0.5304, 0.1346,
      -0.8434, 0.5216, 0.1285, -0.8501, 0.511, 0.1272, -0.8558, 0.5005, 0.1307, -0.8623, 0.4876, 0.1369, -0.8671,
      0.4767, 0.1445, -0.8706, 0.4701, 0.1452, -0.8786, 0.4521, 0.154, -0.8838, 0.4416, 0.1544, -0.8869, 0.4355, 0.1543,
      -0.8921, 0.4259, 0.1512, -0.8938, 0.4239, 0.1467, -0.8941, 0.4258, 0.1389, -0.8912, 0.4327, 0.1359, -0.8904,
      0.4363, 0.1297, -0.885, 0.4498, 0.1206, -0.8799, 0.4617, 0.1126, -0.877, 0.4677, 0.1099, -0.8712, 0.4779, 0.1124,
      -0.8671, 0.4863, 0.1075, -0.8614, 0.499, 0.0949, -0.8607, 0.5014, 0.0889, -0.866, 0.4945, 0.0741, -0.8658, 0.4952,
      0.0714, -0.8623, 0.5023, 0.0637, -0.8608, 0.506, 0.0542, -0.8628, 0.5041, 0.0372, -0.8623, 0.5058, 0.0238,
      -0.8632, 0.5048, 0.0123, -0.8646, 0.5024, 0.0061, -0.8669, 0.4984, 0.0089, -0.8704, 0.4923, 0.0087, -0.8721,
      0.4892, 0.0119, -0.8732, 0.4872, 0.009, -0.872, 0.4895, 0.0034, -0.8736, 0.4866, -0.0024, -0.8733, 0.4871,
      -0.0134, -0.8685, 0.4951, -0.0247, -0.8691, 0.4932, -0.0379, -0.8665, 0.4967, -0.0488, -0.8666, 0.4957, -0.0583,
      -0.8676, 0.4921, -0.0712, -0.8726, 0.4808, -0.0856, -0.8746, 0.4742, -0.1011, -0.8775, 0.4668, -0.1099, -0.8806,
      0.4599, -0.1139, -0.886, 0.4492, -0.1148, -0.8898, 0.4417, -0.1145, -0.8928, 0.4363, -0.1118, -0.8923, 0.4359,
      -0.1179, -0.8891, 0.4393, -0.1287, -0.8849, 0.4442, -0.1405, -0.8805, 0.4515, -0.1442, -0.8745, 0.4624, -0.1467,
      -0.8683, 0.4712, -0.1548, -0.8626, 0.4802, -0.1592, -0.8555, 0.4906, -0.1656, -0.85, 0.4967, -0.1755, -0.8476,
      0.4964, -0.1876, -0.8521, 0.4844, -0.1984, -0.8466, 0.4889, -0.2101, -0.8422, 0.4935, -0.2171, -0.8366, 0.5018,
      -0.2196, -0.8309, 0.5097, -0.2232, -0.8247, 0.5163, -0.2308, -0.8199, 0.521, -0.2373, -0.8153, 0.5263, -0.2416,
      -0.8076, 0.5263, -0.2661, -0.8112, 0.5201, -0.2674, -0.8074, 0.5201, -0.2786, -0.7973, 0.52, -0.3064, -0.7785,
      0.5305, -0.3354, -0.7653, 0.5377, -0.3539, -0.7642, 0.5405, -0.3518, -0.7571, 0.539, -0.3691, -0.7503, 0.5378,
      -0.3844, -0.7449, 0.5453, -0.3844, -0.7356, 0.5537, -0.3902, -0.7314, 0.5554, -0.3956, -0.7282, 0.5596, -0.3957,
      -0.7239, 0.5603, -0.4026, -0.719, 0.5642, -0.4058, -0.7115, 0.5656, -0.4169, -0.7083, 0.568, -0.4192, -0.7027,
      0.5758, -0.418, -0.6868, 0.5901, -0.4244, -0.6683, 0.6095, -0.4265, -0.6665, 0.6127, -0.4248, -0.6602, 0.6172,
      -0.428, -0.6468, 0.6287, -0.4318, -0.6383, 0.6397, -0.4283, -0.6292, 0.647, -0.4308, -0.623, 0.6579, -0.4231,
      -0.6145, 0.6691, -0.4179, -0.6048, 0.679, -0.4162, -0.5983, 0.691, -0.4057, -0.59, 0.7024, -0.3983, -0.5815,
      0.7135, -0.3908, -0.5663, 0.7297, -0.3831, -0.5551, 0.7399, -0.38, -0.5482, 0.7453, -0.3794, -0.5469, 0.7476,
      -0.3768, -0.56, 0.7436, -0.3653, -0.5736, 0.7325, -0.3667, -0.5723, 0.7356, -0.3624, -0.5624, 0.7452, -0.3583,
      -0.5512, 0.7547, -0.3558, 0, 0, 0, -0.2183, 0.938, -0.2694, -0.2183, 0.938, -0.2694, -0.256, 0.9135, -0.3161,
      -0.3118, 0.8687, -0.385, -0.3186, 0.8684, -0.3799, -0.3278, 0.866, -0.3776, -0.3367, 0.8622, -0.3785, -0.3492,
      0.8563, -0.3805, -0.3499, 0.8613, -0.3684, -0.3529, 0.8642, -0.3588, -0.3617, 0.8596, -0.361, -0.3703, 0.8559,
      -0.361, -0.3809, 0.8518, -0.3596, -0.3926, 0.8452, -0.3627, -0.4115, 0.8344, -0.3667, -0.4293, 0.8282, -0.3603,
      -0.4364, 0.822, -0.3659, -0.4381, 0.8172, -0.3746, -0.4381, 0.8172, -0.3746, -0.4381, 0.8172, -0.3746, -0.4304,
      0.8209, -0.3753, -0.4212, 0.8241, -0.3788, -0.41, 0.8326, -0.3724, -0.3929, 0.8404, -0.3734, -0.3794, 0.8492,
      -0.3674, -0.3725, 0.8498, -0.373, -0.3618, 0.85, -0.3829, -0.351, 0.8526, -0.3871, -0.3268, 0.862, -0.3876,
      -0.3184, 0.8636, -0.3908, -0.3031, 0.8668, -0.3961, -0.2942, 0.866, -0.4043, -0.2762, 0.87, -0.4084, -0.2642,
      0.8736, -0.4086, -0.2579, 0.8718, -0.4164, -0.265, 0.8658, -0.4244, -0.2614, 0.8653, -0.4277, -0.2543, 0.8634,
      -0.4357, -0.2501, 0.8605, -0.4439, -0.2429, 0.8586, -0.4515, -0.2376, 0.8638, -0.4443, -0.234, 0.8723, -0.4294,
      -0.2396, 0.8749, -0.4209, -0.2357, 0.877, -0.4187, -0.2303, 0.8723, -0.4313, -0.2298, 0.8666, -0.443, -0.2233,
      0.8603, -0.4583, -0.2324, 0.8559, -0.4619, -0.2294, 0.8494, -0.4753, -0.2231, 0.8455, -0.4851, -0.2164, 0.8427,
      -0.4931, -0.2168, 0.8385, -0.4999, -0.2059, 0.8335, -0.5127, -0.2056, 0.829, -0.5201, -0.1971, 0.8248, -0.53,
      -0.1903, 0.8255, -0.5313, -0.1829, 0.8228, -0.5381, -0.1749, 0.8194, -0.5459, -0.1683, 0.816, -0.553, -0.1528,
      0.8131, -0.5617, -0.1506, 0.8148, -0.5598, -0.1594, 0.8195, -0.5504, -0.1675, 0.8226, -0.5434, -0.1751, 0.828,
      -0.5327, -0.186, 0.8291, -0.5272, -0.1885, 0.8331, -0.52, -0.1979, 0.8388, -0.5072, -0.1988, 0.8407, -0.5036,
      -0.2033, 0.844, -0.4962, -0.2005, 0.8511, -0.4853, -0.2014, 0.8564, -0.4754, -0.1934, 0.8537, -0.4835, -0.1898,
      0.8553, -0.4822, -0.1872, 0.8519, -0.489, -0.1789, 0.8565, -0.484, -0.1785, 0.8533, -0.4899, -0.1728, 0.8578,
      -0.4841, -0.1662, 0.8542, -0.4927, -0.1609, 0.8542, -0.4944, -0.1575, 0.8596, -0.4862, -0.1573, 0.8628, -0.4804,
      -0.1502, 0.8659, -0.4771, -0.1402, 0.8643, -0.4831, -0.1312, 0.8684, -0.4783, -0.1245, 0.8704, -0.4763, -0.1223,
      0.8752, -0.468, -0.1145, 0.8788, -0.4632, -0.1154, 0.8836, -0.4539, -0.1196, 0.8881, -0.4439, -0.1202, 0.8922,
      -0.4354, -0.1261, 0.8927, -0.4326, -0.132, 0.8915, -0.4334, -0.1358, 0.8953, -0.4244, -0.1415, 0.8946, -0.4239,
      -0.1456, 0.897, -0.4174, -0.1419, 0.9005, -0.4111, -0.137, 0.9019, -0.4098, -0.1402, 0.9047, -0.4022, -0.136,
      0.9047, -0.4039, -0.1295, 0.903, -0.4096, -0.1284, 0.9014, -0.4136, -0.1217, 0.903, -0.412, -0.1119, 0.9022,
      -0.4166, -0.1004, 0.904, -0.4156, -0.0959, 0.907, -0.4102, -0.0849, 0.9112, -0.4032, -0.0932, 0.9142, -0.3945,
      -0.1064, 0.9176, -0.383, -0.1119, 0.9176, -0.3815, -0.1132, 0.9141, -0.3894, -0.1273, 0.9144, -0.3844, -0.1188,
      0.9187, -0.3767, -0.109, 0.9213, -0.3733, -0.1022, 0.9247, -0.3668, -0.0943, 0.9275, -0.3618, -0.0844, 0.9295,
      -0.359, -0.0859, 0.9328, -0.3499, -0.0966, 0.9331, -0.3465, -0.102, 0.9359, -0.3372, -0.1011, 0.9388, -0.3292,
      -0.1045, 0.9417, -0.3199, -0.1093, 0.9423, -0.3163, -0.1171, 0.9449, -0.3057, -0.1224, 0.9445, -0.3048, -0.127,
      0.9475, -0.2933, -0.1362, 0.9464, -0.293, -0.1431, 0.9438, -0.298, -0.144, 0.9449, -0.294, -0.1531, 0.9445,
      -0.2905, -0.1546, 0.9432, -0.294, -0.1637, 0.9422, -0.2922, -0.1681, 0.9428, -0.2878, -0.1813, 0.941, -0.2859,
      -0.1917, 0.9404, -0.2809, -0.1967, 0.9396, -0.28, -0.2015, 0.9406, -0.2732, -0.2117, 0.9388, -0.2717, -0.2183,
      0.938, -0.2694, -0.2183, 0.938, -0.2694, 0, 0, 0, -0.3913, 0.3269, -0.8602, -0.3895, 0.3242, -0.8621, -0.3854,
      0.3265, -0.863, -0.3852, 0.3312, -0.8614, -0.3818, 0.3371, -0.8606, -0.3823, 0.339, -0.8596, -0.3845, 0.3416,
      -0.8576, -0.383, 0.3449, -0.857, -0.3836, 0.3464, -0.8561, -0.3848, 0.3461, -0.8556, -0.3909, 0.3433, -0.854,
      -0.3938, 0.3419, -0.8532, -0.3966, 0.3397, -0.8528, -0.4012, 0.334, -0.8529, -0.401, 0.333, -0.8534, -0.3957,
      0.3295, -0.8572, -0.3913, 0.3269, -0.8602, 0, 0, 0, -0.3794, 0.3526, -0.8554, -0.3746, 0.3514, -0.858, -0.3715,
      0.3548, -0.858, -0.3696, 0.3562, -0.8582, -0.3693, 0.3572, -0.8579, -0.3706, 0.3586, -0.8568, -0.3761, 0.357,
      -0.855, -0.3804, 0.3545, -0.8542, -0.3794, 0.3526, -0.8554, 0, 0, 0, -0.368, 0.3612, -0.8568, -0.3678, 0.3595,
      -0.8576, -0.3597, 0.36, -0.8609, -0.3605, 0.3619, -0.8597, -0.368, 0.3612, -0.8568, 0, 0, 0, -0.3542, 0.3636,
      -0.8616, -0.3535, 0.3627, -0.8623, -0.3524, 0.3629, -0.8626, -0.3471, 0.3635, -0.8645, -0.3446, 0.3671, -0.864,
      -0.3439, 0.3678, -0.864, -0.3476, 0.37, -0.8615, -0.3491, 0.369, -0.8614, -0.3542, 0.3636, -0.8616, 0, 0, 0,
      -0.3271, 0.3743, -0.8677, -0.3255, 0.3727, -0.869, -0.32, 0.3757, -0.8698, -0.3206, 0.3768, -0.869, -0.3227,
      0.3784, -0.8676, -0.3262, 0.3781, -0.8664, -0.3271, 0.3743, -0.8677, 0, 0, 0, -0.2464, 0.8398, -0.4838, -0.2404,
      0.8361, -0.493, -0.2344, 0.8386, -0.4917, -0.2301, 0.843, -0.4862, -0.2355, 0.8463, -0.4778, -0.2389, 0.8478,
      -0.4735, -0.2448, 0.8471, -0.4716, -0.2505, 0.8442, -0.4738, -0.2464, 0.8398, -0.4838, 0, 0, 0, -0.1249, 0.8652,
      -0.4856, -0.1202, 0.8639, -0.4892, -0.114, 0.8655, -0.4877, -0.1079, 0.8679, -0.4849, -0.1156, 0.8694, -0.4805,
      -0.1226, 0.8686, -0.4801, -0.1249, 0.8652, -0.4856, 0, 0, 0, -0.0635, 0.8971, -0.4372, -0.0687, 0.8957, -0.4394,
      -0.0732, 0.8964, -0.4371, -0.0801, 0.8944, -0.44, -0.0881, 0.8934, -0.4406, -0.0878, 0.8925, -0.4424, -0.0826,
      0.8908, -0.4468, -0.0761, 0.8925, -0.4445, -0.0726, 0.894, -0.4422, -0.066, 0.8935, -0.4442, -0.0639, 0.8942,
      -0.4431, -0.0635, 0.8971, -0.4372, 0, 0, 0, 0.7382, 0.6038, 0.3008, 0.7321, 0.6068, 0.3096, 0.729, 0.6069, 0.3167,
      0.7232, 0.6153, 0.3137, 0.7115, 0.6212, 0.3285, 0.7006, 0.6279, 0.3391, 0.692, 0.6342, 0.3448, 0.6782, 0.6435,
      0.3549, 0.6648, 0.6572, 0.3552, 0.6609, 0.6596, 0.3581, 0.6544, 0.659, 0.3708, 0.6499, 0.6616, 0.374, 0.6412,
      0.672, 0.3705, 0.627, 0.6788, 0.3823, 0.6271, 0.6713, 0.3951, 0.6245, 0.6669, 0.4066, 0.6305, 0.6603, 0.408,
      0.6225, 0.6601, 0.4204, 0.5858, 0.7071, 0.3962, 0.5967, 0.7143, 0.3656, 0.5988, 0.7133, 0.3642, 0.6162, 0.7044,
      0.3523, 0.6252, 0.6997, 0.3457, 0.6405, 0.6884, 0.3404, 0.6458, 0.6903, 0.3264, 0.6544, 0.6912, 0.3065, 0.6687,
      0.682, 0.2963, 0.6791, 0.6691, 0.302, 0.6817, 0.669, 0.2963, 0.6915, 0.6583, 0.2976, 0.6982, 0.6578, 0.2823,
      0.7046, 0.6516, 0.281, 0.7064, 0.6517, 0.2764, 0.7008, 0.6611, 0.268, 0.6991, 0.6702, 0.2491, 0.6996, 0.6726,
      0.2414, 0.7019, 0.6713, 0.2381, 0.7054, 0.6629, 0.2509, 0.7127, 0.6579, 0.2432, 0.7129, 0.6612, 0.2334, 0.7234,
      0.6543, 0.2204, 0.7261, 0.6447, 0.2391, 0.7218, 0.646, 0.2483, 0.7202, 0.6457, 0.2536, 0.7166, 0.6494, 0.2544,
      0.7126, 0.6555, 0.25, 0.709, 0.6525, 0.2675, 0.7143, 0.6439, 0.274, 0.7178, 0.6365, 0.2822, 0.7131, 0.6372,
      0.2924, 0.7163, 0.6312, 0.2975, 0.7225, 0.628, 0.2893, 0.7311, 0.6178, 0.2896, 0.7382, 0.6038, 0.3008, 0, 0, 0,
      -0.8688, 0.0906, 0.4869, -0.868, 0.0857, 0.4891, -0.8716, 0.0791, 0.4838, -0.8813, 0.0726, 0.4669, -0.8873,
      0.0699, 0.4559, -0.8898, 0.0658, 0.4516, -0.8957, 0.0701, 0.439, -0.9012, 0.0723, 0.4274, -0.9027, 0.0707, 0.4245,
      -0.8996, 0.0662, 0.4316, -0.9006, 0.0545, 0.4313, -0.9, 0.0436, 0.4337, -0.8935, 0.0421, 0.447, -0.8933, 0.0384,
      0.4479, -0.8989, 0.0334, 0.4368, -0.9, 0.0261, 0.4351, -0.9032, 0.0232, 0.4286, -0.9087, 0.0191, 0.4169, -0.9102,
      0.0138, 0.4139, -0.9158, 0.0126, 0.4015, -0.9194, 0.0219, 0.3926, -0.921, 0.0393, 0.3875, -0.9226, 0.0454, 0.3831,
      -0.9248, 0.0492, 0.3772, -0.921, 0.0579, 0.3852, -0.921, 0.0618, 0.3846, -0.9226, 0.067, 0.3799, -0.9232, 0.0785,
      0.3763, -0.9217, 0.091, 0.3772, -0.9197, 0.0968, 0.3805, -0.9176, 0.1062, 0.3831, -0.9196, 0.1092, 0.3773,
      -0.9236, 0.1072, 0.3682, -0.928, 0.1081, 0.3565, -0.9307, 0.1063, 0.35, -0.9333, 0.1212, 0.338, -0.9364, 0.1234,
      0.3284, -0.9438, 0.1217, 0.3074, -0.9443, 0.1278, 0.3032, -0.9454, 0.1292, 0.2991, -0.9452, 0.1328, 0.2984,
      -0.9437, 0.1392, 0.3001, -0.9432, 0.1462, 0.2985, -0.9438, 0.15, 0.2947, -0.9432, 0.1579, 0.2922, -0.9457, 0.1591,
      0.2836, -0.9427, 0.1691, 0.2877, -0.94, 0.1814, 0.2891, -0.9373, 0.1878, 0.2935, -0.9344, 0.1927, 0.2995, -0.9315,
      0.2012, 0.3031, -0.9274, 0.2041, 0.3134, -0.9284, 0.2001, 0.3132, -0.9319, 0.1981, 0.3038, -0.9317, 0.1903,
      0.3095, -0.9333, 0.1813, 0.3099, -0.9374, 0.1713, 0.3032, -0.9375, 0.1577, 0.3101, -0.935, 0.1588, 0.3171,
      -0.9318, 0.1712, 0.3201, -0.9325, 0.1773, 0.3147, -0.9305, 0.1903, 0.3131, -0.9221, 0.1972, 0.3328, -0.9214,
      0.2053, 0.33, -0.9183, 0.2107, 0.3353, -0.9185, 0.1987, 0.3419, -0.9143, 0.1984, 0.3531, -0.912, 0.1889, 0.3642,
      -0.9127, 0.1832, 0.3652, -0.9069, 0.183, 0.3794, -0.8994, 0.1848, 0.3962, -0.8967, 0.1771, 0.4057, -0.8915, 0.175,
      0.4178, -0.8865, 0.1803, 0.4261, -0.8857, 0.1847, 0.4259, -0.8761, 0.1857, 0.4449, -0.8666, 0.1859, 0.4631,
      -0.8742, 0.1809, 0.4506, -0.8728, 0.1728, 0.4565, -0.8665, 0.1715, 0.4688, -0.8615, 0.163, 0.4809, -0.8621,
      0.1492, 0.4843, -0.8576, 0.1496, 0.4921, -0.8547, 0.1455, 0.4983, -0.8628, 0.1354, 0.4871, -0.8643, 0.1291,
      0.4862, -0.862, 0.1226, 0.4918, -0.8645, 0.1194, 0.4882, -0.87, 0.1166, 0.4791, -0.8706, 0.1086, 0.4798, -0.8733,
      0.1038, 0.4759, -0.8688, 0.0906, 0.4869, 0, 0, 0, 0.9033, 0.3821, -0.1948, 0.8999, 0.386, -0.2029, 0.897, 0.386,
      -0.2154, 0.8925, 0.3878, -0.2304, 0.8854, 0.3964, -0.2427, 0.8858, 0.3904, -0.2509, 0.8829, 0.3874, -0.2653,
      0.8873, 0.3781, -0.264, 0.8876, 0.3716, -0.2721, 0.8843, 0.3674, -0.2882, 0.8959, 0.3534, -0.2691, 0.9052, 0.338,
      -0.2576, 0.9101, 0.3265, -0.2552, 0.9122, 0.3091, -0.2689, 0.9142, 0.2873, -0.2858, 0.9124, 0.277, -0.3012,
      0.9128, 0.2635, -0.3121, 0.9178, 0.2322, -0.322, 0.9249, 0.2022, -0.3221, 0.9316, 0.191, -0.3093, 0.9396, 0.1799,
      -0.2912, 0.946, 0.1656, -0.2785, 0.9544, 0.1495, -0.2585, 0.9543, 0.1606, -0.2521, 0.9511, 0.1722, -0.2562,
      0.9527, 0.182, -0.2434, 0.9476, 0.1889, -0.2575, 0.9425, 0.1902, -0.2747, 0.9426, 0.2005, -0.2669, 0.9317, 0.2137,
      -0.2936, 0.9266, 0.234, -0.2942, 0.9252, 0.2453, -0.2896, 0.92, 0.2622, -0.2912, 0.9181, 0.2741, -0.2862, 0.9186,
      0.2858, -0.2731, 0.9172, 0.3005, -0.2617, 0.9147, 0.3201, -0.2467, 0.9164, 0.3299, -0.2267, 0.9132, 0.3359,
      -0.2308, 0.9091, 0.3402, -0.2406, 0.9056, 0.3544, -0.2331, 0.9103, 0.3546, -0.2136, 0.9064, 0.3693, -0.2052,
      0.9033, 0.3821, -0.1948, 0, 0, 0, 0.2019, -0.2835, -0.9375, 0.2072, -0.2857, -0.9357, 0.2131, -0.2783, -0.9365,
      0.2128, -0.2738, -0.9379, 0.2019, -0.2835, -0.9375, 0, 0, 0, 0.2156, -0.2577, -0.9419, 0.2121, -0.2713, -0.9388,
      0.2166, -0.2692, -0.9384, 0.22, -0.2701, -0.9374, 0.2226, -0.2654, -0.9381, 0.2238, -0.2525, -0.9414, 0.2156,
      -0.2577, -0.9419, 0, 0, 0, 0.7451, 0.3256, 0.5821, 0.7601, 0.2982, 0.5773, 0.7662, 0.2865, 0.5751, 0.76, 0.282,
      0.5856, 0.7597, 0.2746, 0.5895, 0.7607, 0.2689, 0.5908, 0.7519, 0.2618, 0.6051, 0.7363, 0.2539, 0.6272, 0.7287,
      0.242, 0.6407, 0.7239, 0.241, 0.6464, 0.7204, 0.242, 0.65, 0.715, 0.235, 0.6585, 0.7082, 0.2317, 0.6669, 0.6985,
      0.2309, 0.6774, 0.6956, 0.2299, 0.6806, 0.6938, 0.2254, 0.684, 0.6908, 0.2242, 0.6874, 0.6897, 0.2198, 0.6899,
      0.6836, 0.2202, 0.6958, 0.6801, 0.2179, 0.7, 0.6715, 0.2188, 0.708, 0.6667, 0.2287, 0.7094, 0.6655, 0.238, 0.7074,
      0.6626, 0.243, 0.7084, 0.658, 0.2555, 0.7083, 0.6532, 0.2624, 0.7102, 0.6555, 0.2632, 0.7078, 0.6528, 0.2709,
      0.7074, 0.6537, 0.2742, 0.7053, 0.6517, 0.2815, 0.7043, 0.656, 0.2868, 0.6981, 0.6533, 0.2938, 0.6977, 0.6548,
      0.302, 0.6929, 0.6607, 0.2977, 0.6891, 0.6636, 0.2992, 0.6857, 0.6772, 0.2996, 0.6721, 0.6797, 0.2979, 0.6703,
      0.6913, 0.2963, 0.6591, 0.6955, 0.2971, 0.6542, 0.6996, 0.2915, 0.6524, 0.7042, 0.2943, 0.6461, 0.7081, 0.3118,
      0.6335, 0.7165, 0.3192, 0.6203, 0.7451, 0.3256, 0.5821, 0, 0, 0, 0.309, -0.4189, 0.8538, 0.3126, -0.4213, 0.8513,
      0.3189, -0.4363, 0.8414, 0.3159, -0.4458, 0.8375, 0.3182, -0.4513, 0.8337, 0.3289, -0.4497, 0.8304, 0.3374,
      -0.4428, 0.8307, 0.3452, -0.438, 0.83, 0.3501, -0.4305, 0.8319, 0.3579, -0.4269, 0.8305, 0.3636, -0.4288, 0.827,
      0.3696, -0.4332, 0.822, 0.3811, -0.434, 0.8164, 0.391, -0.4303, 0.8136, 0.3934, -0.4254, 0.815, 0.3974, -0.4178,
      0.817, 0.4054, -0.4165, 0.8137, 0.4109, -0.4106, 0.814, 0.4178, -0.3999, 0.8158, 0.4329, -0.388, 0.8137, 0.4553,
      -0.3761, 0.807, 0.461, -0.3763, 0.8037, 0.4672, -0.379, 0.7988, 0.4723, -0.3771, 0.7967, 0.4793, -0.3787, 0.7917,
      0.4809, -0.4013, 0.7795, 0.4818, -0.4126, 0.7731, 0.475, -0.4303, 0.7676, 0.4748, -0.4359, 0.7646, 0.4687, -0.433,
      0.7699, 0.4646, -0.4342, 0.7718, 0.4621, -0.4387, 0.7707, 0.457, -0.4446, 0.7704, 0.4557, -0.45, 0.768, 0.4615,
      -0.4584, 0.7595, 0.4697, -0.4568, 0.7555, 0.4742, -0.4498, 0.7568, 0.4842, -0.45, 0.7504, 0.4778, -0.4613, 0.7476,
      0.4726, -0.4741, 0.7429, 0.4672, -0.481, 0.7418, 0.4561, -0.4887, 0.7437, 0.4529, -0.4909, 0.7442, 0.4452,
      -0.4986, 0.7438, 0.4392, -0.5064, 0.742, 0.4287, -0.5171, 0.7408, 0.4094, -0.5325, 0.7409, 0.3976, -0.5413,
      0.7409, 0.3858, -0.548, 0.7422, 0.3705, -0.5536, 0.7458, 0.3637, -0.5544, 0.7486, 0.3608, -0.5584, 0.747, 0.3535,
      -0.5562, 0.7521, 0.3462, -0.559, 0.7534, 0.3326, -0.5562, 0.7616, 0.3241, -0.558, 0.7639, 0.3188, -0.5572, 0.7667,
      0.3035, -0.5629, 0.7688, 0.2914, -0.5652, 0.7717, 0.2818, -0.5706, 0.7713, 0.2756, -0.571, 0.7733, 0.2711,
      -0.5659, 0.7787, 0.2665, -0.5656, 0.7804, 0.262, -0.5592, 0.7866, 0.261, -0.5612, 0.7855, 0.26, -0.5573, 0.7886,
      0.2618, -0.5488, 0.7939, 0.2593, -0.5389, 0.8015, 0.2643, -0.5363, 0.8016, 0.2662, -0.5249, 0.8085, 0.2595,
      -0.5109, 0.8195, 0.2544, -0.4982, 0.8289, 0.2544, -0.4981, 0.8289, 0.2471, -0.4783, 0.8427, 0.2554, -0.4707,
      0.8445, 0.2605, -0.4749, 0.8406, 0.2619, -0.4815, 0.8364, 0.2683, -0.4826, 0.8337, 0.2769, -0.4855, 0.8292,
      0.2849, -0.4844, 0.8272, 0.2992, -0.4766, 0.8267, 0.309, -0.4189, 0.8538, 0, 0, 0, 0.4239, -0.4841, 0.7654,
      0.4193, -0.4794, 0.7709, 0.4122, -0.4825, 0.7728, 0.4033, -0.4885, 0.7737, 0.3936, -0.4981, 0.7726, 0.4006,
      -0.5097, 0.7614, 0.4057, -0.5082, 0.7597, 0.4095, -0.5034, 0.7608, 0.4176, -0.5011, 0.758, 0.4212, -0.4961,
      0.7593, 0.4273, -0.4887, 0.7606, 0.4239, -0.4841, 0.7654, 0, 0, 0, 0.3759, -0.3011, 0.8764, 0.3671, -0.2907,
      0.8836, 0.3582, -0.277, 0.8916, 0.3641, -0.2232, 0.9042, 0.3967, -0.2234, 0.8903, 0.3959, -0.2176, 0.8921, 0.3988,
      -0.2112, 0.8924, 0.3968, -0.2032, 0.8952, 0.3992, -0.1949, 0.8959, 0.398, -0.1896, 0.8976, 0.4034, -0.19, 0.8951,
      0.4038, -0.1953, 0.8937, 0.4111, -0.1949, 0.8905, 0.4209, -0.1965, 0.8856, 0.4253, -0.2042, 0.8817, 0.4374,
      -0.2066, 0.8752, 0.4472, -0.2012, 0.8715, 0.4498, -0.2102, 0.8681, 0.4611, -0.2126, 0.8615, 0.4658, -0.2198,
      0.8571, 0.4709, -0.2292, 0.8519, 0.4822, -0.2293, 0.8455, 0.4831, -0.211, 0.8498, 0.4787, -0.2141, 0.8515, 0.4689,
      -0.2074, 0.8585, 0.4652, -0.2044, 0.8613, 0.4687, -0.1872, 0.8633, 0.4731, -0.1669, 0.8651, 0.4703, -0.1593,
      0.868, 0.4754, -0.1483, 0.8672, 0.4796, -0.1462, 0.8652, 0.5, -0.1433, 0.8541, 0.5057, -0.145, 0.8504, 0.5116,
      -0.1494, 0.8461, 0.5172, -0.1523, 0.8422, 0.5263, -0.1552, 0.836, 0.5341, -0.1604, 0.8301, 0.5402, -0.1681,
      0.8246, 0.5424, -0.1827, 0.82, 0.5395, -0.1873, 0.8209, 0.5351, -0.2012, 0.8205, 0.5362, -0.2153, 0.8161, 0.531,
      -0.2213, 0.818, 0.5247, -0.2371, 0.8176, 0.5316, -0.2414, 0.8119, 0.486, -0.2554, 0.8358, 0.4858, -0.2674, 0.8322,
      0.4744, -0.2697, 0.838, 0.4652, -0.2764, 0.841, 0.4626, -0.2822, 0.8405, 0.4571, -0.2835, 0.843, 0.4423, -0.2972,
      0.8462, 0.4326, -0.308, 0.8474, 0.4275, -0.3084, 0.8498, 0.423, -0.3065, 0.8527, 0.4065, -0.3046, 0.8614, 0.404,
      -0.3034, 0.863, 0.404, -0.302, 0.8634, 0.3986, -0.2983, 0.8673, 0.3889, -0.2973, 0.872, 0.3759, -0.3011, 0.8764,
      0, 0, 0, 0.4553, -0.3761, 0.807, 0.4477, -0.3688, 0.8146, 0.4372, -0.3663, 0.8214, 0.4348, -0.356, 0.8272, 0.4358,
      -0.3502, 0.8291, 0.4299, -0.3484, 0.833, 0.4162, -0.3304, 0.8471, 0.413, -0.3209, 0.8524, 0.4104, -0.3179, 0.8547,
      0.4065, -0.3046, 0.8614, 0.423, -0.3065, 0.8527, 0.4275, -0.3084, 0.8498, 0.4326, -0.308, 0.8474, 0.4423, -0.2972,
      0.8462, 0.4571, -0.2835, 0.843, 0.4626, -0.2822, 0.8405, 0.4652, -0.2764, 0.841, 0.4744, -0.2697, 0.838, 0.4858,
      -0.2674, 0.8322, 0.4858, -0.2736, 0.8301, 0.4979, -0.2733, 0.823, 0.504, -0.2768, 0.8181, 0.5065, -0.281, 0.8152,
      0.513, -0.2822, 0.8107, 0.5195, -0.2876, 0.8046, 0.516, -0.3087, 0.7991, 0.5112, -0.3202, 0.7976, 0.5083, -0.3325,
      0.7944, 0.5096, -0.3374, 0.7915, 0.5061, -0.347, 0.7896, 0.5037, -0.3485, 0.7904, 0.4977, -0.3603, 0.789, 0.4793,
      -0.3787, 0.7917, 0.4723, -0.3771, 0.7967, 0.4672, -0.379, 0.7988, 0.461, -0.3763, 0.8037, 0.4553, -0.3761, 0.807,
      0, 0, 0,
    ],
  },
  B6 = F6.points,
  H6 = `
    #include <common>
    #include <fog_pars_vertex>
    #include <shadowmap_pars_vertex>
    #include <skinning_pars_vertex>

    varying vec3 vNormal;
    varying vec3 fogPosition;
    varying vec3 vWorldPosition;
    varying vec3 vColor;
    varying vec3 vPosition;

    void main() {
        
        #include <skinbase_vertex>
        #include <begin_vertex>
        #include <beginnormal_vertex>
        #include <defaultnormal_vertex>
        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        #include <skinning_vertex>
        #include <project_vertex>
        #include <shadowmap_vertex>
        #include <fog_vertex>

        vPosition = position;
        vNormal = normal;
        fogPosition = mvPosition.xyz;
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
    }
`,
  z6 = `
    varying vec3 vPosition;
    uniform vec3 colorTop;
    uniform vec3 colorMiddle;
    uniform vec3 colorBottom;
    uniform vec2 iResolution;
    
    void main() {
        // Normalize position to get gradient factor (0 at bottom, 1 at top)
        float gradientFactor = (gl_FragCoord.y / iResolution.y);
        gradientFactor = clamp(gradientFactor, 0.0, 1.0);
        
        // Mix colors based on height
        vec3 color;
        if (gradientFactor < 0.5) {
            color = mix(colorBottom, colorMiddle, gradientFactor * 2.0);
        } else {
            color = mix(colorMiddle, colorTop, (gradientFactor - 0.5) * 2.0);
        }
        gl_FragColor = vec4(color, 1.0);
    }
`;
function K1(e, s, n) {
  return new R1({
    vertexShader: H6,
    fragmentShader: z6,
    uniforms: {
      colorTop: { value: new X0(n?.top || "#eaeaea") },
      colorMiddle: { value: new X0(n?.middle || "#f7f737") },
      colorBottom: { value: new X0(n?.bottom || "#d9fb0d") },
      iResolution: { value: new E1(e * devicePixelRatio, s * devicePixelRatio) },
    },
    transparent: !1,
    side: A2,
    toneMapped: !1,
    fog: !1,
  });
}
v2({ MeshLineGeometry: w2, MeshLineMaterial: j2 });
const q6 = [
  { lat: 47.3769, lon: 8.5417, label: "Zurich", url: "#" },
  { lat: 51.5074, lon: -0.1278, label: "London", url: "#" },
  { lat: 35.6895, lon: 139.6917, label: "Seoul", url: "#" },
  { lat: 22.3964, lon: 114.1098, label: "Hong Kong", url: "#" },
  { lat: 31.2304, lon: 121.4737, label: "Shanghai", url: "#" },
  { lat: 21.2854, lon: 39.2376, label: "Jeddah", url: "#" },
  { lat: 40.7128, lon: -74.006, label: "New York", url: "#" },
  { lat: -23.5505, lon: -46.6333, label: "Sao Paolo", url: "#" },
  { lat: 62.454, lon: -114.3718, label: "Yellowknife", url: "#" },
  { lat: -33.8688, lon: 151.2093, label: "Sydney", url: "#" },
  { lat: -33.9249, lon: 18.4241, label: "Cape Town", url: "#" },
  { lat: 37.7749, lon: -122.4194, label: "San Francisco", url: "#" },
  { lat: 60.1695, lon: 24.9354, label: "Helsinki", url: "#" },
  { lat: 34.0209, lon: -6.8416, label: "Rabat", url: "#" },
  { lat: 1.3521, lon: 103.8198, label: "Singapore", url: "#" },
  { lat: -6.2088, lon: 106.8456, label: "Jakarta", url: "#" },
  { lat: 16.7666, lon: -3.0026, label: "Timbuktu", url: "#" },
  { lat: -6.7924, lon: 39.2083, label: "Dar es Salaam", url: "#" },
  { lat: 39.627, lon: 66.9749, label: "Samarkand", url: "#" },
  { lat: 23.685, lon: 90.3563, label: "Bengal", url: "#" },
  { lat: 27.7172, lon: 85.324, label: "Kathmandu", url: "#" },
  { lat: -12.0464, lon: -77.0428, label: "Lima", url: "#" },
  { lat: -77.8419, lon: 166.6863, label: "McMurdo Station", url: "#" },
];
function x1(e, s, n) {
  const r = (90 - e) * (Math.PI / 180),
    a = (s + 90) * (Math.PI / 180),
    l = -(n * Math.sin(r) * Math.cos(a)),
    i = n * Math.cos(r),
    c = n * Math.sin(r) * Math.sin(a);
  return new F0(l, i, c);
}
function W6({
  autoRotate: e = !0,
  rotationSpeed: s = 0.002,
  canvasRef: n,
  markers: r = q6,
  onHoverCoord: a,
  animateIn: l = !1,
}) {
  const i = o.useRef(null),
    c = o.useRef(null),
    [d, u] = o.useState(!1),
    [h, m] = o.useState({ x: 0, y: 1 }),
    [p, g] = o.useState({}),
    [y, j] = o.useState({}),
    [_, v] = o.useState({}),
    [f, b] = o.useState({}),
    R = o.useRef({}),
    w = o.useRef(new E1()),
    [N, x] = o.useState(0.001),
    S = o.useRef(null);
  (B0((E) => {
    if (l && N < 1) {
      S.current === null && (S.current = E.clock.getElapsedTime());
      const $ = (E.clock.getElapsedTime() - S.current) * 1e3,
        T = Math.min($ / 1e3, 1),
        P = 1 - Math.pow(1 - T, 3);
      x(0.001 + P * 0.999);
    }
  }),
    B0((E, $) => {
      if (!c.current) return;
      e && !d && ((c.current.rotation.x += h.x * s * $ * 60), (c.current.rotation.y += h.y * s * $ * 60));
      const T = {},
        P = {},
        O = {},
        A = {};
      if (
        (r.forEach((L) => {
          const B = x1(L.lat, L.lon, 25.6).clone().applyEuler(c.current.rotation),
            U = B.z > 20;
          ((p[L.label] ?? !1) && !U && (A[L.label] = !0),
            (T[L.label] = U),
            (P[L.label] = B.x < 0),
            (O[L.label] = B.y > 0));
        }),
        g(T),
        v(P),
        b(O),
        Object.keys(A).length > 0 && j((L) => ({ ...L, ...A })),
        typeof window < "u" && (window.__dialectGlobeRotation = { x: c.current.rotation.x, y: c.current.rotation.y }),
        a && c.current)
      ) {
        const L = new F0(0, 0, 1).applyEuler(c.current.rotation),
          z = L.x,
          B = L.y,
          U = L.z,
          W = Math.asin(B / 1) * (180 / Math.PI),
          F = Math.atan2(U, -z) * (180 / Math.PI) - 90;
        a({ x: W, y: F, z: 0 });
      }
    }),
    o.useEffect(() => {
      const E = setInterval(() => {
        if (c.current) {
          c.current.rotation.x < -Math.PI / 2
            ? ((c.current.rotation.x = -Math.PI / 2), m((T) => ({ x: -T.x, y: T.y })))
            : c.current.rotation.x > Math.PI / 2 &&
              ((c.current.rotation.x = Math.PI / 2), m((T) => ({ x: -T.x, y: T.y })));
          const $ = c.current.rotation.x - Math.PI / 6;
          Math.abs($) > 0.001 && m((T) => ({ x: T.x + -$ * 0.1, y: T.y }));
        }
        m(($) => ({ x: $.x + (0 - $.x) * 0.01, y: $.y + (1 - $.y) * 0.01 }));
      }, 16);
      return () => clearInterval(E);
    }, []),
    o.useEffect(() => {
      if (!n.current) return;
      const E = n.current;
      let $ = !1,
        T = { x: 0, y: 0 };
      const P = (U) => {
          (($ = !0), (T = { x: U.clientX, y: U.clientY }), u(!0));
        },
        O = (U) => {
          if (n.current) {
            const W = n.current.getBoundingClientRect();
            ((w.current.x = ((U.clientX - W.left) / W.width) * 2 - 1),
              (w.current.y = -((U.clientY - W.top) / W.height) * 2 + 1));
          }
          if ($ && c.current) {
            const W = U.clientX - T.x,
              F = U.clientY - T.y;
            ((c.current.rotation.y += W * 0.005),
              (c.current.rotation.x += F * 0.005),
              (c.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, c.current.rotation.x))),
              m({ x: F * 1, y: W * 1 }),
              (T = { x: U.clientX, y: U.clientY }));
          }
        },
        A = () => {
          (($ = !1), u(!1));
        };
      (E.addEventListener("mousedown", P),
        window.addEventListener("mousemove", O),
        window.addEventListener("mouseup", A),
        window.addEventListener("mouseleave", A));
      const L = (U) => P(U.touches[0]),
        z = (U) => {
          if (n.current) {
            const W = n.current.getBoundingClientRect(),
              F = U.touches[0];
            ((w.current.x = ((F.clientX - W.left) / W.width) * 2 - 1),
              (w.current.y = -((F.clientY - W.top) / W.height) * 2 + 1));
          }
          $ && (U.preventDefault(), O(U.touches[0]));
        },
        B = () => A();
      return (
        E.addEventListener("touchstart", L),
        E.addEventListener("touchmove", z, { passive: !1 }),
        E.addEventListener("touchend", B),
        E.addEventListener("touchcancel", B),
        () => {
          (E.removeEventListener("mousedown", P),
            window.removeEventListener("mousemove", O),
            window.removeEventListener("mouseup", A),
            window.removeEventListener("mouseleave", A),
            E.removeEventListener("touchstart", L),
            E.removeEventListener("touchmove", z),
            E.removeEventListener("touchend", B),
            E.removeEventListener("touchcancel", B));
        }
      );
    }, [n, a]));
  const M = o.useMemo(() => {
    const E = n.current?.getBoundingClientRect() || { width: 800, height: 600 };
    return K1(E.width, E.height);
  }, [n]);
  o.useEffect(() => {
    const E = () => {
      if (!n.current) return;
      const $ = n.current.getBoundingClientRect();
      M.uniforms.iResolution.value.set($.width * devicePixelRatio, $.height * devicePixelRatio);
    };
    return (
      window.addEventListener("resize", E),
      () => {
        window.removeEventListener("resize", E);
      }
    );
  }, [n, M]);
  const D = o.useMemo(() => {
      const E = [];
      for (let P = 1; P < 10; P++) {
        const O = (Math.PI / 10) * P - Math.PI / 2,
          A = Math.sin(O) * 25.55,
          L = Math.cos(O) * 25.55,
          z = [];
        for (let B = 0; B <= 128; B++) {
          const U = (B / 128) * Math.PI * 2,
            W = Math.cos(U) * L,
            F = Math.sin(U) * L;
          z.push(W, A, F);
        }
        E.push(
          t.jsxs(
            "mesh",
            {
              children: [
                t.jsx("meshLineGeometry", { points: z }),
                t.jsx("meshLineMaterial", {
                  args: [],
                  lineWidth: 0.5,
                  color: "#d2d2d2",
                  transparent: !0,
                  opacity: 0.5,
                  lights: !1,
                }),
              ],
            },
            `lat-${P}`,
          ),
        );
      }
      for (let P = 0; P < 16; P++) {
        const O = (Math.PI / 8) * P,
          A = [];
        for (let L = 0; L <= 128; L++) {
          const z = (L / 128) * Math.PI - Math.PI / 2,
            B = Math.sin(z) * 25.55,
            U = Math.cos(z) * 25.55,
            W = Math.cos(O) * U,
            F = Math.sin(O) * U;
          A.push(W, B, F);
        }
        E.push(
          t.jsxs(
            "mesh",
            {
              children: [
                t.jsx("meshLineGeometry", { points: A }),
                t.jsx("meshLineMaterial", {
                  args: [],
                  lineWidth: 0.5,
                  color: "#d2d2d2",
                  transparent: !0,
                  opacity: 0.5,
                  lights: !1,
                }),
              ],
            },
            `lon-${P}`,
          ),
        );
      }
      return E;
    }, []),
    [C, I] = o.useState({ meshes: [] });
  return (
    o.useEffect(() => {
      I({
        meshes: [
          t.jsxs(
            "mesh",
            {
              children: [
                t.jsx("meshLineGeometry", { points: B6 }),
                t.jsx("meshLineMaterial", {
                  args: [],
                  lineWidth: 0.5,
                  color: "#d2d2d2",
                  transparent: !0,
                  opacity: 1,
                  lights: !1,
                }),
              ],
            },
            "border-mesh",
          ),
        ],
      });
    }, []),
    t.jsx("group", {
      children: t.jsxs("group", {
        ref: c,
        scale: [N, N, N],
        children: [
          r.map((E) => {
            const $ = x1(E.lat, E.lon, 25.6),
              T = p[E.label] ?? !0,
              P = _[E.label] ?? !0,
              O = f[E.label] ?? !0;
            if (_[E.label] === void 0 || f[E.label] === void 0) return null;
            (T || delete R.current[E.label], R.current[E.label] || (R.current[E.label] = { left: P, top: O }));
            const A = R.current[E.label].left,
              L = R.current[E.label].top,
              z = y[E.label] ?? !1;
            return t.jsx(
              "group",
              {
                position: $,
                children: t.jsx(y2, {
                  zIndexRange: [100, 0],
                  children: t.jsxs("div", {
                    className: `globe-marker custom_cursor__disable-hover ${z ? "hiding" : ""} ${!T && !z ? "hidden" : ""} ${P ? "globe-marker--left" : "globe-marker--right"} ${O ? "globe-marker--top" : "globe-marker--bottom"} ${A ? "globe-marker--initial-left" : "globe-marker--initial-right"} ${L ? "globe-marker--initial-top" : "globe-marker--initial-bottom"}`,
                    onAnimationEnd: (B) => {
                      B.animationName === "globe-marker-corner-fadeout" &&
                        j((U) => {
                          const W = { ...U };
                          return (delete W[E.label], W);
                        });
                    },
                    children: [
                      t.jsx("div", { className: "globe-marker__corner" }),
                      t.jsx("div", {
                        className: "globe-marker__label",
                        children: E.url
                          ? t.jsx("a", {
                              href: E.url,
                              children: E.label
                                .split(
                                  `
`,
                                )
                                .map((B, U) => t.jsx("div", { children: B }, U)),
                            })
                          : t.jsx("span", {
                              children: E.label
                                .split(
                                  `
`,
                                )
                                .map((B, U) => t.jsx("div", { children: B }, U)),
                            }),
                      }),
                    ],
                  }),
                }),
              },
              E.label,
            );
          }),
          t.jsxs("mesh", {
            children: [
              t.jsx("sphereGeometry", { args: [25.5, 64, 128] }),
              t.jsx("primitive", { object: M, attach: "material" }),
            ],
          }),
          t.jsx("group", { scale: [25.6, 25.6, 25.6], children: C.meshes }),
          t.jsx("group", { ref: i, children: D }),
        ],
      }),
    })
  );
}
function V6({ canvasRef: e }) {
  const { invalidate: s, set: n } = $e(),
    [r, a] = o.useState(!0);
  return (
    o.useEffect(() => {
      if (!e.current) return;
      const l = new IntersectionObserver(
        ([i]) => {
          a(i.isIntersecting);
        },
        { threshold: 0 },
      );
      return (l.observe(e.current), () => l.disconnect());
    }, [e]),
    o.useEffect(() => {
      r ? (n({ frameloop: "always" }), s()) : n({ frameloop: "never" });
    }, [r, n, s]),
    null
  );
}
function Y6({ autoRotate: e = !0, rotationSpeed: s = 0.002, markers: n, onHoverCoord: r }) {
  const a = o.useRef(null),
    [l, i] = o.useState(!1);
  return (
    o.useEffect(() => {
      if (typeof document > "u" || !document.body || l) return;
      document.body.classList.contains("loaded") &&
        setTimeout(() => {
          i(document.body.classList.contains("loaded"));
        }, 500);
      const c = new MutationObserver((d) => {
        for (const u of d)
          if (u.type === "attributes" && u.attributeName === "class" && document.body.classList.contains("loaded")) {
            (setTimeout(() => {
              i(!0);
            }, 500),
              c.disconnect());
            break;
          }
      });
      return (
        c.observe(document.body, { attributes: !0, attributeFilter: ["class"] }),
        () => {
          c.disconnect();
        }
      );
    }, [l]),
    l
      ? t.jsxs(ke, {
          camera: { position: [0, 0, 105], fov: 30 },
          style: { width: "100%", height: "100%", overflow: "visible" },
          gl: { antialias: !0, alpha: !0 },
          ref: a,
          frameloop: "always",
          children: [
            t.jsx(V6, { canvasRef: a }),
            t.jsx(W6, { autoRotate: e, canvasRef: a, rotationSpeed: s, markers: n, onHoverCoord: r, animateIn: l }),
          ],
        })
      : t.jsx("div", { className: "globe-placeholder", "aria-hidden": "true" })
  );
}
function G6({ loadedModels: e }) {
  const s = $e((r) => r.advance),
    n = o.useRef(0);
  return (
    o.useEffect(() => {
      e.size > n.current &&
        ((n.current = e.size),
        requestAnimationFrame((r) => {
          s(r, !0);
        }));
    }, [e, s]),
    null
  );
}
function X6({ isLoading: e }) {
  const s = o.useRef(null),
    n = o.useRef({ value: 0 }),
    r = o.useRef({ x: 0, y: 0, z: 0 }),
    a = o.useRef(0),
    l = o.useRef(!1),
    i = o.useRef(!1),
    c = o.useRef(!1),
    d = o.useCallback(() => {
      const u = 8 + Math.random() * 6,
        h = [
          { x: u, y: 0, z: 0 },
          { x: 0, y: u, z: 0 },
          { x: 0, y: 0, z: u },
          { x: u * 0.7, y: u * 0.7, z: 0 },
          { x: 0, y: u * 0.7, z: u * 0.7 },
          { x: u * 0.7, y: 0, z: u * 0.7 },
        ],
        m = h[Math.floor(Math.random() * h.length)];
      return {
        x: m.x * (Math.random() > 0.5 ? 1 : -1),
        y: m.y * (Math.random() > 0.5 ? 1 : -1),
        z: m.z * (Math.random() > 0.5 ? 1 : -1),
      };
    }, []);
  return (
    o.useEffect(() => {
      (e && !c.current
        ? ((l.current = !0),
          (i.current = !1),
          (n.current.value = 0),
          (r.current = d()),
          (a.current = 0),
          U0.to(n.current, {
            value: 1,
            duration: 0.3,
            ease: "back.out(2)",
            onComplete: () => {
              l.current = !1;
            },
          }))
        : !e &&
          c.current &&
          ((i.current = !0),
          (l.current = !1),
          U0.to(n.current, {
            value: 0,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
              i.current = !1;
            },
          })),
        (c.current = e));
    }, [e, d]),
    B0((u, h) => {
      if (!s.current) return;
      const m = n.current.value;
      if (m <= 0.001) {
        s.current.visible = !1;
        return;
      }
      ((s.current.visible = !0),
        s.current.scale.setScalar(m),
        e && !l.current && !i.current && ((a.current += h), a.current >= 0.5 && ((r.current = d()), (a.current = 0))));
      let p = 1;
      (i.current && (p = 1 + (1 - m) * 4),
        (s.current.rotation.x += r.current.x * h * p),
        (s.current.rotation.y += r.current.y * h * p),
        (s.current.rotation.z += r.current.z * h * p));
    }),
    t.jsxs("mesh", {
      ref: s,
      position: [0, 0, 0],
      visible: !1,
      children: [
        t.jsx("boxGeometry", { args: [0.5, 0.5, 0.5] }),
        t.jsx("meshStandardMaterial", {
          color: "#e8ff4a",
          emissive: "#e8ff4a",
          emissiveIntensity: 0.3,
          metalness: 0.1,
          roughness: 0.3,
        }),
      ],
    })
  );
}
function K6(e) {
  const s = [...e];
  for (let n = s.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [s[n], s[r]] = [s[r], s[n]];
  }
  return s;
}
const Z6 = `
    #include <common>
    #include <fog_pars_vertex>
    #include <shadowmap_pars_vertex>
    #include <skinning_pars_vertex>

    varying vec3 vNormal;
    varying vec3 fogPosition;
    varying vec3 vWorldPosition;
    varying vec3 vColor;

    uniform float uViewportWidth;

    void main() {
        
        #include <skinbase_vertex>
        #include <begin_vertex>
        #include <beginnormal_vertex>
        #include <defaultnormal_vertex>
        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        #include <skinning_vertex>
        #include <project_vertex>
        #include <shadowmap_vertex>
        #include <fog_vertex>
        
        vNormal = normal;
        fogPosition = mvPosition.xyz;
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;

        // Calculate gradient based on z position
        float gradientFactor = smoothstep(0.83, 0.87, position.y);
        
        // Neon yellow color (below z 0.85)
        vec3 yellowColor = vec3(0.9, 1.0, 0.15);
        
        // Reddish-white skin tone (above z 0.85)
        vec3 skinColor = vec3(1.0, 0.85, 0.75);
        
        // Mix colors based on gradient
        vColor = mix(yellowColor, skinColor, gradientFactor);
        // vColor *= 1.0 - abs((position.y-0.85)*10.0);
        // Scale point size with viewport width
        float widthScale = max(uViewportWidth, 1.0) / 1200.0;
        gl_PointSize = 4.0 * widthScale * (20.0 / -mvPosition.z);
    }
`,
  Q6 = `
    varying vec3 vNormal;
    varying vec3 vColor;
    
    void main() {
        // Triangular point shape
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        // Test if the point is inside an equal-sided triangle

        float pi = 3.14159265359;
        float sides = 4.0;

        float angle = mod(sides * 0.5 * (atan(center.y, center.x) + pi), pi);
        float edgeDist = (1.0 + (pi/(sides-2.0)/sides) * sin(angle)) * dist;

        if (edgeDist > 0.5) discard;
        
        // Soft fade at edges of points
        float alpha = smoothstep(0.5, 0.6, 1.0 - edgeDist * 2.0);

        gl_FragColor = vec4(vColor, alpha);
    }
`,
  J6 = new R1({ vertexShader: Z6, fragmentShader: Q6, transparent: !0, blending: M2, depthWrite: !1 });
function e7({
  modelUrl: e,
  gradientColors: s,
  positionX: n,
  positionY: r,
  isVisible: a,
  onModelLoaded: l,
  canvasRef: i,
}) {
  const c = o.useRef(null),
    { scene: d, animations: u } = _1(e),
    { actions: h } = b2(u, c);
  (o.useEffect(() => {
    Object.values(h).forEach((x) => x?.play());
  }, [h]),
    o.useEffect(() => {
      l?.(e);
    }, [e, l]));
  const m = o.useRef([]),
    p = o.useRef([]),
    g = o.useRef([]),
    [y, j] = o.useState({ x: 0, y: 0 }),
    [_, v] = o.useState(!1),
    f = o.useRef(0),
    b = o.useRef(1.5),
    { camera: R, size: w } = $e();
  (o.useEffect(() => {
    v(
      navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
        ? !0
        : window.innerWidth <= 768,
    );
  }, []),
    o.useEffect(() => {
      J6.uniforms = { uViewportWidth: { value: w.width } };
    }, [w]));
  const N = o.useMemo(() => {
    const x = K1(800, 800, s);
    return (
      (x.uniforms.colorTop.value = new X0(s?.top || "#ececdf")),
      (x.uniforms.colorMiddle.value = new X0(s?.middle || "#fefdee")),
      (x.uniforms.colorBottom.value = new X0(s?.bottom || "#eaeae1")),
      x
    );
  }, [s]);
  return (
    o.useEffect(() => {
      ((m.current = []),
        (p.current = []),
        (g.current = []),
        d.traverse((x) => {
          x instanceof T2 &&
            (x.name === "Bone001" || x.name === "spine3" || x.name.startsWith("spine3_")
              ? m.current.push(x)
              : x.name === "Bone002" || x.name === "neck" || x.name.startsWith("neck_")
                ? p.current.push(x)
                : (x.name === "Bone003" || x.name === "head" || x.name.startsWith("head_")) && g.current.push(x));
        }),
        d.traverse((x) => {}));
    }, [d, w, N]),
    o.useEffect(() => {
      if (_ || !a) return;
      const x = (S) => {
        const M = i.current?.getBoundingClientRect().top || 0,
          D = (S.clientX / w.width) * 2 - 1;
        let C = -((S.clientY - M) / w.height) * 2 + 1;
        ((C = Math.min(Math.max(C, -1), 1)), j({ x: D, y: C }));
      };
      return (window.addEventListener("mousemove", x), () => window.removeEventListener("mousemove", x));
    }, [w, _, a, i]),
    B0((x, S) => {
      if (!a) return;
      if (_ && ((f.current += S), f.current >= b.current)) {
        const D = Math.random() * 2 - 1,
          C = Math.random() * -0.75 + 1;
        (j({ x: D, y: C }), (b.current = Math.random() + 1), (f.current = 0));
      }
      [
        { ref: m, multiplier: 0.125 },
        { ref: p, multiplier: 0.25 },
        { ref: g, multiplier: 0.4 },
      ].forEach(({ ref: D, multiplier: C }) => {
        D.current &&
          D.current.forEach((I) => {
            const E = new F0(-y.x * (0.5 + 0.5 * C) - 0.3, y.y * C * 1.2 - 0.35, 1);
            (E.unproject(R), E.sub(I.getWorldPosition(new F0())));
            const $ = new k2(),
              T = new P2();
            (T.lookAt(I.position, E, new F0(0, 1, 0)), $.setFromRotationMatrix(T), I.quaternion.slerp($, 0.1));
          });
      });
    }),
    t.jsx("group", {
      visible: a,
      ref: c,
      children: t.jsx("primitive", {
        object: d,
        scale: 15,
        rotation: [0, (Math.PI * 6) / 7, 0],
        position: [-0.4 + n, -12.9 + r, -2],
      }),
    })
  );
}
function t7({ modelUrl: e, gradientColors: s, isSelected: n, onAnimationComplete: r, onModelLoaded: a, canvasRef: l }) {
  const [i, c] = o.useState(n ? 0 : -10),
    [d, u] = o.useState(window.innerWidth <= 768 ? -0.5 : 0),
    [h, m] = o.useState(n),
    p = o.useRef({ y: n ? 0 : -10 }),
    g = o.useRef(n);
  return (
    o.useEffect(() => {
      const y = () => {
        u(window.innerWidth <= 768 ? -0.5 : 0);
      };
      return (
        window.addEventListener("resize", y),
        () => {
          window.removeEventListener("resize", y);
        }
      );
    }, []),
    o.useEffect(() => {
      (n && !g.current
        ? (m(!0),
          (p.current.y = -10),
          c(-10),
          U0.to(p.current, {
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            onUpdate: () => {
              c(p.current.y);
            },
            onComplete: () => {
              r?.();
            },
          }))
        : !n &&
          g.current &&
          U0.to(p.current, {
            y: -10,
            duration: 0.4,
            ease: "power2.in",
            onUpdate: () => {
              c(p.current.y);
            },
            onComplete: () => {
              m(!1);
            },
          }),
        (g.current = n));
    }, [n, r, d]),
    t.jsx(e7, {
      canvasRef: l,
      modelUrl: e,
      gradientColors: s,
      positionX: 0,
      positionY: i + d,
      isVisible: h,
      onModelLoaded: a,
    })
  );
}
function n7(e) {
  return qe()
    ? t.jsx(s7, { ...e })
    : t.jsx("div", { className: "giant-head giant-head--prerender-placeholder", "aria-hidden": "true" });
}
function s7({ teamMembers: e = [], gradientColors: s, black: n = !1 }) {
  const r = o.useMemo(() => K6(e), [e]);
  o.useEffect(() => {
    e.forEach((x) => {
      const S = x?.headModel?.asset?.url;
      S && _1.preload(S);
    });
  }, [e]);
  const a = o.useRef(null),
    l = o.useRef(null),
    [i, c] = o.useState(!1);
  o.useEffect(() => {
    const x = l.current;
    if (!x) return;
    const S = new IntersectionObserver(
      ([M]) => {
        c(M.isIntersecting);
      },
      { threshold: 0 },
    );
    return (S.observe(x), () => S.disconnect());
  }, []);
  const [d, u] = o.useState(() => (r.length === 0 ? 0 : Math.floor(Math.random() * r.length))),
    [h, m] = o.useState(!1),
    [p, g] = o.useState(() => new Set()),
    y = o.useMemo(() => r.map((x) => x?.headModel?.asset?.url).filter((x) => x !== void 0), [r]),
    j = r[d],
    _ = j?.name || "ANDY BUCHAN",
    v = j?.role || "CREATIVE DIRECTOR",
    f = y[d],
    b = h && !p.has(f),
    R = o.useCallback((x) => {
      g((S) => {
        if (S.has(x)) return S;
        const M = new Set(S);
        return (M.add(x), M);
      });
    }, []),
    w = o.useCallback(() => {
      r.length === 0 || h || (m(!0), u((x) => (x + 1) % r.length));
    }, [r.length, h]),
    N = o.useCallback(() => {
      m(!1);
    }, []);
  return t.jsxs("div", {
    className: "footer__giant-head",
    children: [
      t.jsx("div", {
        className: "footer__giant-head-head",
        ref: l,
        children: t.jsxs(ke, {
          camera: { position: [0, 0, 5], fov: 50 },
          style: { width: "100%", height: "100%", opacity: "0.3" },
          ref: a,
          frameloop: i ? "always" : "demand",
          children: [
            t.jsx(G6, { loadedModels: p }),
            t.jsx("ambientLight", { intensity: 1 }),
            t.jsx("directionalLight", { position: [10, 10, 5], intensity: 9, color: n ? 16777215 : 8947967 }),
            t.jsx("directionalLight", { position: [-10, -10, -5], intensity: 3, color: n ? 16777215 : 14548872 }),
            t.jsx("directionalLight", { position: [0, 5, -8], intensity: 12, color: n ? 16777215 : 14548804 }),
            t.jsx(X6, { isLoading: b }),
            y.map((x, S) =>
              t.jsx(
                t7,
                {
                  canvasRef: a,
                  modelUrl: x,
                  gradientColors: s,
                  isSelected: S === d,
                  onAnimationComplete: S === d ? N : void 0,
                  onModelLoaded: R,
                },
                x + S,
              ),
            ),
          ],
        }),
      }),
      t.jsxs("div", {
        className: "footer__giant-head-text UI_1",
        children: [
          t.jsxs("div", { children: [_, t.jsx("br", {}), v] }),
          t.jsx("button", {
            onClick: w,
            className: "interactive",
            disabled: h,
            style: { background: "none", border: "0", opacity: h ? 0.1 : 1, cursor: h ? "default" : "pointer" },
            children: t.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "11",
              viewBox: "0 0 20 11",
              fill: "none",
              children: t.jsx("path", {
                d: "M1.18349 3.64918H17.8319L15.3257 6.13771L16.8971 6.12787L20 3.06885L16.9269 0H15.3357L17.8419 2.47869H0V2.52787V3.64918V10.0328H0.845351H1.18349H19.4232V8.8623H1.18349V3.64918Z",
                fill: "#242424",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
var r7 = $2();
const a7 = _2(r7),
  l0 = D2({ projectId: "z4rfkkmu", dataset: "production", apiVersion: "2025-10-07", useCdn: !0 }),
  o7 = a7(l0);
function Z(e) {
  return o7.image(e);
}
function Z0() {
  return u0({ queryKey: ["site-data"], queryFn: () => l0.fetch(S1), staleTime: 1e3 * 60 * 5 });
}
function d0() {
  return u0({ queryKey: ["site-settings"], queryFn: () => l0.fetch(O2), staleTime: 1e3 * 60 * 30 });
}
async function i7(e, s) {
  (await document.fonts?.ready,
    await new Promise((n, r) => {
      if (s.aborted) {
        r(new Error("Aborted"));
        return;
      }
      let a = null;
      const l = () => {
        (a && clearTimeout(a), r(new Error("Aborted")));
      };
      s.addEventListener("abort", l);
      const i = () => {
        if (s.aborted) {
          a && clearTimeout(a);
          return;
        }
        if (typeof document > "u" || typeof window > "u") {
          n();
          return;
        }
        const c = e.getBoundingClientRect(),
          d = c.width > 0 && c.height > 0,
          u = c.top < window.innerHeight && c.bottom > 0,
          h = e.getRootNode() === document,
          m = document.body.classList.contains("loaded"),
          p = document.querySelector(".loader"),
          g = p?.classList.contains("loader--hidden");
        (m && d && u && (!p || g)) || !h ? (s.removeEventListener("abort", l), n()) : (a = setTimeout(i, 50));
      };
      i();
    }));
}
const o0 = ({
  text: e,
  className: s = "",
  baseDelay: n = 0,
  duration: r = 350,
  pixelSteps: a = 4,
  tagName: l = "h1",
}) => {
  const i = o.useRef(null),
    c = o.useRef(null),
    [d, u] = o.useState(!1),
    h = o.useRef(-1),
    m = o.useRef(!1);
  o.useEffect(() => {
    if (d || m.current || !c.current) return;
    const g = new AbortController();
    return (
      i7(c.current, g.signal)
        .then(() => {
          m.current = !0;
          const y = i.current,
            j = c.current;
          if (!y || !j) {
            m.current = !1;
            return;
          }
          const _ = () => {
            const v = y.getContext("2d", { willReadFrequently: !0, alpha: !0 });
            if (!v) {
              u(!0);
              return;
            }
            v.imageSmoothingEnabled = !1;
            const f = window.getComputedStyle(j),
              b = parseFloat(f.fontSize),
              R = f.fontFamily,
              w = f.fontWeight,
              N = f.textAlign,
              x = f.whiteSpace === "nowrap",
              S = f.textTransform,
              M = parseFloat(f.lineHeight) || b * 1.2,
              D = parseFloat(f.letterSpacing) || 0,
              C = f.color,
              I = e.split(`
`);
            if (S === "uppercase") for (let F = 0; F < I.length; F++) I[F] = I[F].toUpperCase();
            else if (S === "lowercase") for (let F = 0; F < I.length; F++) I[F] = I[F].toLowerCase();
            else if (S === "capitalize")
              for (let F = 0; F < I.length; F++)
                I[F] = I[F].split(" ")
                  .map((V) => V.charAt(0).toUpperCase() + V.slice(1).toLowerCase())
                  .join(" ");
            const E = window.devicePixelRatio || 1,
              $ = j.offsetWidth - parseInt(f.paddingLeft) - parseInt(f.paddingRight),
              T = j.offsetHeight - parseInt(f.paddingTop) - parseInt(f.paddingBottom),
              P = $ * E,
              O = T * E;
            ((y.width = P), (y.height = O), (y.style.width = `${$}px`), (y.style.height = `${T}px`));
            const A = document.createElement("canvas");
            ((A.width = P), (A.height = O));
            const L = A.getContext("2d", { willReadFrequently: !0, alpha: !0 });
            if (!L) {
              u(!0);
              return;
            }
            ((L.imageSmoothingEnabled = !1),
              (L.fillStyle = C),
              (L.font = `${w} ${b * E}px ${R}`),
              (L.textAlign = N),
              (L.letterSpacing = `${D * E}px`));
            const z = [];
            for (const F of I) {
              const V = L.measureText(F);
              if (x || V.width <= P - 10 * E) z.push(F);
              else {
                const t0 = F.split(" ");
                let H = "";
                for (const k of t0) {
                  const G = H ? `${H} ${k}` : k;
                  L.measureText(G).width > P - 10 * E && H ? (z.push(H), (H = k)) : (H = G);
                }
                H && z.push(H);
              }
            }
            z.forEach((F, V) => {
              N === "center"
                ? L.fillText(F.toUpperCase(), P / 2, O - (z.length - 1 - V) * M * E)
                : N === "right" || N === "end"
                  ? L.fillText(F.toUpperCase(), P - 5 * E, O - (z.length - 1 - V) * M * E)
                  : L.fillText(F.toUpperCase(), 5 * E, O - (z.length - 1 - V) * M * E);
            });
            const B = [0.2, 0.15, 0.1, 0.05, 0].map((F) => Math.max(1, F * O)),
              U = Date.now(),
              W = () => {
                const F = Math.max(0, Date.now() - U - n * 1e3),
                  V = Math.max(0, Math.min(1, F / r));
                if (V === 0) v.clearRect(0, 0, P, O);
                else {
                  const t0 = Math.floor(V * (a - 1)),
                    H = B[t0],
                    k = Math.max(1, Math.floor(P / H)),
                    G = Math.max(1, Math.floor(O / H)),
                    r0 = document.createElement("canvas");
                  ((r0.width = k), (r0.height = G));
                  const n0 = r0.getContext("2d");
                  if (!n0) return;
                  ((n0.imageSmoothingEnabled = !1),
                    n0.drawImage(A, 0, 0, k, G),
                    v.clearRect(0, 0, P, O),
                    (v.imageSmoothingEnabled = !1),
                    v.drawImage(r0, 0, 0, P, O));
                }
                V < 1 ? (h.current = requestAnimationFrame(W)) : u(!0);
              };
            W();
          };
          h.current = requestAnimationFrame(_);
        })
        .catch(() => {}),
      () => {
        (g.abort(), h.current && cancelAnimationFrame(h.current));
      }
    );
  }, [e, r, a, d, n]);
  const p = l;
  return t.jsxs(p, {
    ref: c,
    className: `pixelated-title ${s}`,
    children: [
      !d && t.jsx("canvas", { ref: i, className: "pixelated-title__canvas", style: { imageRendering: "pixelated" } }),
      e
        .split(
          `
`,
        )
        .map((g, y, j) =>
          t.jsxs(
            "span",
            {
              className: "pixelated-title__text",
              style: { opacity: d ? 1 : 0 },
              children: [g, y < j.length - 1 && t.jsx("br", {})],
            },
            y,
          ),
        ),
    ],
  });
};
function l7(e) {
  Array.from(e.querySelectorAll("p, h1, h2, h3, h4, h5, h6")).forEach((n) => {
    if (Array.from(n.childNodes).some((c) => c.nodeType === Node.ELEMENT_NODE)) return;
    const a = n.textContent || "";
    if (!a.trim()) return;
    const l = a.split(/\s+/),
      i = c7(n, l);
    ((n.innerHTML = ""),
      i.forEach((c, d) => {
        const u = document.createElement("div");
        (u.classList.add("line"),
          (u.textContent = c.join(" ")),
          n.appendChild(u),
          d < i.length - 1 && n.appendChild(document.createTextNode(" ")));
      }));
  });
}
function c7(e, s) {
  const r = document.createElement("canvas").getContext("2d");
  if (!r) return [s];
  const a = window.getComputedStyle(e),
    l = a.font || `${a.fontSize} ${a.fontFamily}`;
  r.font = l;
  const i = e.clientWidth,
    c = [];
  let d = [],
    u = 0;
  return (
    s.forEach((h) => {
      const m = r.measureText(h + " ").width;
      u + m > i && d.length > 0 ? (c.push(d), (d = [h]), (u = m)) : (d.push(h), (u += m));
    }),
    d.length > 0 && c.push(d),
    c
  );
}
function Ve(
  e,
  { threshold: s = 0.1, rootMargin: n = "0px 0px -10% 0px", triggerRatio: r = 0.9, disabled: a = !1 } = {},
) {
  const [l, i] = o.useState(!1);
  return (
    o.useEffect(() => {
      if (a) {
        i(!0);
        return;
      }
      const c = e.current;
      if (!c) return;
      let d = !1,
        u = 0;
      const h = () => {
          d ||
            ((d = !0),
            i(!0),
            m.disconnect(),
            window.removeEventListener("scroll", g),
            window.removeEventListener("resize", g),
            u && cancelAnimationFrame(u));
        },
        m = new IntersectionObserver(
          ([y]) => {
            y.isIntersecting && h();
          },
          { threshold: s, rootMargin: n },
        );
      m.observe(c);
      const p = () => {
          if (((u = 0), d)) return;
          const y = e.current;
          y && y.getBoundingClientRect().top < window.innerHeight * r && h();
        },
        g = () => {
          u || (u = requestAnimationFrame(p));
        };
      return (
        window.addEventListener("scroll", g, { passive: !0 }),
        window.addEventListener("resize", g, { passive: !0 }),
        p(),
        () => {
          (m.disconnect(),
            window.removeEventListener("scroll", g),
            window.removeEventListener("resize", g),
            u && cancelAnimationFrame(u));
        }
      );
    }, [e, s, n, r, a]),
    l
  );
}
function q({ children: e, className: s = "", lineDelay: n = 0.1, baseDelay: r = 0.1, noPulse: a = !1 }) {
  const l = o.useRef(null),
    [i, c] = o.useState(!1),
    d = Ve(l);
  return (
    o.useEffect(() => {
      const u = l.current;
      if (!u || i) return;
      const h = setTimeout(() => {
        (l7(u), c(!0));
      }, 100);
      return () => clearTimeout(h);
    }, [e, i]),
    o.useEffect(() => {
      if (!i || !d) return;
      const u = l.current;
      if (!u) return;
      Array.from(u.querySelectorAll(".line")).forEach((m, p) => {
        const g = r + p * n;
        ((m.style.animationDelay = `${g}s`), (m.style.transitionDelay = `${g}s`));
      });
    }, [i, d, n, r]),
    t.jsx("div", {
      ref: l,
      className: `text-reveal ${i && d ? "loaded" : ""}${a ? " no-pulse" : ""} ${s}`,
      children: e,
    })
  );
}
function Y({ children: e, className: s = "", elementDelay: n = 0.1, baseDelay: r = 0.1, noPulse: a = !1 }) {
  const l = o.useRef(null),
    i = Ve(l);
  o.useEffect(() => {
    if (!i) return;
    const d = l.current;
    if (!d) return;
    Array.from(d.querySelectorAll(".element-reveal-item")).forEach((h, m) => {
      const p = r + m * n;
      ((h.style.animationDelay = `${p}s`), (h.style.transitionDelay = `${p}s`));
    });
  }, [i, n, r]);
  const c = N2.Children.toArray(e);
  return t.jsx("div", {
    ref: l,
    className: `element-reveal ${i ? "loaded" : ""}${a ? " no-pulse" : ""} ${s}`,
    children: c.map((d, u) => t.jsx("div", { className: "element-reveal-item", children: d }, u)),
  });
}
const Z1 = () => (typeof navigator > "u" ? "" : navigator.userAgent),
  d7 = () => /iPhone|iPad|iPod/.test(Z1()),
  u7 = () => /Android/.test(Z1()),
  Q1 = () => d7() || u7(),
  h7 = Q1();
function Ie({ black: e = !1 }) {
  const { data: s } = Z0(),
    n = s?.teamMembers ?? [],
    r = s?.contactPage,
    a = r
      ? { emailTitle: r.emailTitle, address: r.address, internalLinks: r.internalLinks, externalLinks: r.externalLinks }
      : void 0,
    l =
      a?.emailTitle ||
      `hello@
studiodialect.com`,
    c = (
      a?.address ||
      `73 TIB ST,
MANCHESTER,
M4 1LS`
    ).split(`
`),
    [d, u] = o.useState("Copy Email");
  return t.jsxs("footer", {
    className: `footer ${e ? "footer--black" : ""}`,
    children: [
      t.jsxs("div", {
        children: [
          t.jsx("a", {
            href: `mailto:${l
              .split(
                `
`,
              )
              .join("")
              .toLowerCase()}`,
            "data-cursor-label": d,
            onClick: (h) => {
              if (h7) return !0;
              (h.preventDefault(),
                navigator.clipboard.writeText(
                  l
                    .split(
                      `
`,
                    )
                    .join("")
                    .toLowerCase(),
                ),
                u("Copied"));
            },
            onPointerLeave: () => {
              u("Copy Email");
            },
            rel: "noopener noreferrer",
            className: "interactive",
            children: t.jsx(o0, { tagName: "h2", className: "footer__title", text: l }),
          }),
          t.jsx(q, { noPulse: !0, children: t.jsx("h4", { children: "let's create the new & next" }) }),
        ],
      }),
      t.jsxs("div", {
        className: "footer__content",
        children: [
          t.jsxs("div", {
            className: "footer__links",
            children: [
              t.jsxs("div", {
                children: [
                  t.jsx(q, { children: t.jsx("h5", { children: "FIND US" }) }),
                  t.jsx(q, {
                    baseDelay: 0.4,
                    children: t.jsx("div", {
                      className: "UI_1",
                      children: c.map((h, m) => t.jsx("p", { children: h }, m)),
                    }),
                  }),
                ],
              }),
              t.jsxs("div", {
                children: [
                  t.jsx(q, { children: t.jsx("h5", { children: "INTERNAL" }) }),
                  t.jsx("div", {
                    className: "UI_1 footer__link-list",
                    children: t.jsx(Y, {
                      baseDelay: 0.6,
                      children:
                        a?.internalLinks && a.internalLinks.length > 0
                          ? a.internalLinks.map((h, m) =>
                              t.jsx("p", {
                                children: t.jsx(f0, { to: h.url, end: h.url === "/", children: h.label }, m),
                              }),
                            )
                          : t.jsxs(t.Fragment, {
                              children: [
                                t.jsx(f0, { to: "/", end: !0, children: "HOME" }),
                                t.jsx(f0, { to: "/studio", children: "ABOUT US" }),
                                t.jsx(f0, { to: "/projects", children: "PROJECTS" }),
                                t.jsx(f0, { to: "/contact", children: "CONTACT" }),
                                t.jsx(f0, { to: "/easter-egg", children: "EASTER EGG" }),
                                t.jsx(f0, { to: "/privacy-policy", children: "PRIVACY POLICY" }),
                              ],
                            }),
                    }),
                  }),
                ],
              }),
              t.jsxs("div", {
                children: [
                  t.jsx(q, { children: t.jsx("h5", { children: "EXTERNAL" }) }),
                  t.jsx("div", {
                    className: "UI_1 footer__link-list",
                    children: t.jsx(Y, {
                      baseDelay: 0.8,
                      children:
                        a?.externalLinks && a.externalLinks.length > 0
                          ? a.externalLinks.map((h, m) =>
                              t.jsx("p", { children: t.jsx("a", { href: h.url, children: h.label }, m) }),
                            )
                          : t.jsxs(t.Fragment, {
                              children: [
                                t.jsx("a", {
                                  href: "https://www.instagram.com/studio_dialect/",
                                  children: "INSTAGRAM",
                                }),
                                t.jsx("a", { href: "https://x.com/studio_dialect", children: "X" }),
                                t.jsx("a", {
                                  href: "https://www.linkedin.com/company/studio-dialect",
                                  children: "LINKEDIN",
                                }),
                              ],
                            }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          t.jsx(n7, {
            teamMembers: n,
            gradientColors: e ? { top: "#cccccc", middle: "#aaaaaa", bottom: "#888888" } : void 0,
            black: e,
          }),
        ],
      }),
      t.jsxs("div", {
        className: "footer__bottom-bar",
        children: [
          t.jsx("span", { className: "dialect-logo" }),
          t.jsx("span", { children: "© Studio Dialect 2025 all rights reserved" }),
        ],
      }),
    ],
  });
}
let J1 = () => {};
function m7(e) {
  J1 = e;
}
function f7(e) {
  e && J1({ target: e });
}
const Ye = typeof window > "u" || globalThis.__PRERENDER__ === !0,
  fe = { Left: 0, Right: 1 };
function p7(e) {
  const [s, n] = o.useState(!1);
  return (
    o.useEffect(() => {
      n(!0);
    }, []),
    Ye || !s ? t.jsx("div", { className: "project-spiral project-spiral--prerender-placeholder" }) : t.jsx(g7, { ...e })
  );
}
function g7({ images: e, enabled: s }) {
  const n = Oe(),
    r = o.useRef(null),
    a = o.useRef(null),
    [l, i] = o.useState(null),
    [c, d] = o.useState({ x: 0, y: 0 }),
    [u, h] = o.useState(!1),
    [m, p] = o.useState(null),
    g = l !== null && l.label,
    y = o.useCallback((V, t0) => {
      (i(V), d({ x: t0.clientX, y: t0.clientY }));
    }, []),
    j = o.useCallback(() => {
      i(null);
    }, []),
    _ = o.useCallback((V, t0) => {
      d({ x: t0.clientX, y: t0.clientY });
    }, []),
    v = o.useCallback(
      (V, t0) => {
        V.url && n(V.url);
      },
      [n],
    ),
    [f, b] = o.useState(8),
    [R, w] = o.useState(50),
    [N, x] = o.useState(0),
    [S, M] = o.useState(5);
  (o.useEffect(() => {
    const V = () => {
      const t0 = window.innerWidth,
        H = window.innerHeight,
        k = t0 / H,
        G = t0 / 1400,
        r0 = k > 1 ? 8 : 14;
      b(r0);
      const n0 = 50 * (1 - Math.max(0, 1 - G) * 0.2);
      w(n0);
      const S0 = k < 1 ? -(1 - k) * 2 : -1;
      x(S0);
      const h0 = k < 1 ? 5 + (1 - k) * 15 : 3;
      M(h0);
    };
    return (V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V));
  }, []),
    o.useEffect(() => {
      r.current && f7(r.current);
    }, [l]));
  const [D, C] = o.useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 }),
    [I, E] = o.useState(!1),
    $ = o.useRef(0),
    T = o.useRef(0);
  o.useEffect(() => {
    (() => {
      E("ontouchstart" in window || navigator.maxTouchPoints > 0);
    })();
    const t0 = (H) => {
      I || C({ x: H.clientX, y: H.clientY });
    };
    return (window.addEventListener("mousemove", t0), () => window.removeEventListener("mousemove", t0));
  }, [I]);
  const P = (D.x / window.innerWidth - 0.5) * Math.PI,
    O = -(D.y / window.innerHeight - 0.5) * Math.PI;
  let A = fe.Left;
  g && (D.x > window.innerWidth / 2 && (A = fe.Right), D.y > window.innerHeight / 2);
  const { active: L, progress: z } = R2(),
    { startTask: B, finishTask: U, updateTaskProgress: W } = G1(),
    F = o.useRef(!1);
  return (
    o.useEffect(() => {
      L
        ? (F.current || ((F.current = !0), B("project-spiral-assets")), W("project-spiral-assets", z))
        : F.current && (W("project-spiral-assets", 100), U("project-spiral-assets"), (F.current = !1));
    }, [L, z, U, B, W]),
    o.useEffect(
      () => () => {
        F.current && (U("project-spiral-assets"), (F.current = !1));
      },
      [U],
    ),
    t.jsxs("div", {
      className: `${g ? "interactive" : ""} project-spiral ${s ? "" : "hide"}`,
      ref: r,
      role: "img",
      "aria-label":
        "Interactive 3D showcase of selected Studio Dialect projects. Browse all projects on the Projects page.",
      children: [
        t.jsx("div", {
          className: "project-spiral__canvas",
          "aria-hidden": "true",
          children: t.jsxs(ke, {
            shadows: !0,
            frameloop: s ? "always" : "never",
            children: [
              t.jsx(E2, { ref: a, makeDefault: !0, position: [0, N, f], fov: R }),
              t.jsx("ambientLight", { intensity: 0.3 }),
              t.jsx(_7, {}),
              t.jsx("pointLight", {
                "shadow-bias": -1e-4,
                position: [-1, -4, 1],
                intensity: 3.55,
                color: "#ff7a29",
                castShadow: !0,
              }),
              t.jsx("pointLight", {
                "shadow-bias": -1e-4,
                position: [2, 1, 0],
                intensity: 9.55,
                color: "#c3f0cc",
                castShadow: !0,
              }),
              t.jsx(b7, {
                containerRef: r,
                targetMouseRotation: P,
                targetMouseRotationY: O,
                currentMouseRotation: $,
                currentMouseRotationY: T,
                startRotation: 0.8,
                rotationTurns: 2,
                radiusBase: 1.1,
                radiusWavePhase: 0,
                radiusWavelength: 0.8,
                radiusWaveAmplitude: 0.15,
                mouseRotationSpin: 0.03,
                images: e,
                enabled: s,
                animationCompleted: u,
                onAnimationCompleted: () => u || h(!0),
                animationStartTime: m,
                onAnimationStart: () => {
                  const V = Date.now();
                  m === null && p(V);
                },
                onHover: y,
                onHoverEnd: j,
                onHoverMove: _,
                onClick: v,
              }),
              t.jsx(x7, { cameraRef: a, initialY: N, verticalRange: S, enabled: s }),
            ],
          }),
        }),
        g &&
          l.label &&
          t.jsxs("div", {
            className: `project-spiral__hover-indicator ${A === fe.Left ? "left" : "right"} top`,
            style: {
              left: c.x + "px",
              top: c.y + "px",
              transform: `translate(${A !== fe.Left ? "1px" : "calc(-100% - 2px)"}, calc(-100% - 2px))`,
            },
            children: [
              t.jsx("div", { className: "project-spiral__hover-indicator-label", children: l.label }),
              t.jsx("div", { className: "project-spiral__hover-indicator-corner" }),
            ],
          }),
      ],
    })
  );
}
function x7({ cameraRef: e, initialY: s, verticalRange: n, enabled: r }) {
  return (
    B0(() => {
      if (!r) return;
      const l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
          ? 0
          : (window.scrollY ?? 0) / 1902,
        i = e.current;
      if (!i) return;
      const c = j0.lerp(s, s - n, l);
      ((i.position.y += (c - i.position.y) * 0.1), i.lookAt(0, i.position.y, 0));
    }),
    null
  );
}
function v7(e) {
  try {
    return Z(e)?.width(512).format("webp").url();
  } catch {
    return null;
  }
}
function y7() {
  return { _type: "image", asset: { _ref: "empty", _type: "reference" }, url: "", label: "" };
}
function j7(e) {
  const s = e
    ? e
        .map((n) => [{ url: v7(n), project: n }])
        .flat()
        .filter((n) => !!n.url)
    : [];
  return s.length === 0
    ? [
        {
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==",
          project: y7(),
        },
      ]
    : s;
}
const w7 = ({ points: e, normals: s, uvs: n, indices: r }) => {
  const a = e;
  return t.jsxs("bufferGeometry", {
    children: [
      t.jsx("bufferAttribute", { args: [a, 3], attach: "attributes-position" }),
      n && t.jsx("bufferAttribute", { args: [n, 2], attach: "attributes-uv" }),
      s && t.jsx("bufferAttribute", { args: [s, 3], attach: "attributes-normal" }),
      r && t.jsx("bufferAttribute", { args: [r, 1], attach: "index" }),
    ],
  });
};
function b7({
  containerRef: e,
  targetMouseRotation: s,
  targetMouseRotationY: n,
  currentMouseRotation: r,
  currentMouseRotationY: a,
  startRotation: l = 0,
  rotationTurns: i = 3,
  radiusBase: c = 1,
  radiusWavePhase: d = 0,
  radiusWavelength: u = 2,
  radiusWaveAmplitude: h = 0.5,
  images: m,
  enabled: p,
  animationCompleted: g = !1,
  onAnimationCompleted: y,
  animationStartTime: j,
  onAnimationStart: _,
  onHover: v,
  onHoverEnd: f,
  onHoverMove: b,
  onClick: R,
}) {
  const w = o.useRef(null),
    N = o.useRef(null),
    [x, S] = o.useState(null),
    M = o.useRef([]),
    [D, C] = o.useState(!0),
    I = o.useRef(null),
    E = 90,
    $ = E / (15 / c),
    T = 7,
    P = o.useMemo(() => j7(m), [m]),
    O = S2(P.map((H) => H.url)),
    A = o.useMemo(() => P.map((H, k) => ({ texture: O[k], project: H.project })), [O, P]);
  (o.useEffect(() => {
    const H = () => {
        C(!1);
      },
      k = () => {
        C(!0);
      },
      G = e.current?.querySelector("canvas");
    return (
      G && (G.addEventListener("webglcontextlost", H, !1), G.addEventListener("webglcontextrestored", k, !1)),
      () => {
        G && (G.removeEventListener("webglcontextlost", H), G.removeEventListener("webglcontextrestored", k));
      }
    );
  }, [e]),
    o.useEffect(() => {
      D &&
        O.forEach((H) => {
          (H.dispose(), (H.needsUpdate = !0));
        });
    }, [O, D]));
  const L = o.useMemo(() => {
      const k = [];
      for (let G = 0; G < 90; G++) k.push(A[G % A.length]);
      return k;
    }, [A]),
    z = o.useCallback(
      (H, k) => {
        !I.current || I.current.elapsedTime < 3 || (k.stopPropagation(), S(H), v?.(L[H].project, k.nativeEvent));
      },
      [v, L],
    ),
    B = o.useCallback(
      (H, k) => {
        !I.current || I.current.elapsedTime < 3 || (k.stopPropagation(), S(null), f?.());
      },
      [f],
    ),
    U = o.useCallback(
      (H, k) => {
        !I.current || I.current.elapsedTime < 3 || b?.(L[H].project, k.nativeEvent);
      },
      [b, L],
    ),
    W = o.useCallback(
      (H, k) => {
        !I.current || I.current.elapsedTime < 3 || (k.stopPropagation(), R?.(L[H].project, k.nativeEvent));
      },
      [R, L],
    ),
    F = 64,
    V = o.useMemo(() => {
      const H = [];
      for (let k = 0; k < E; k++) {
        const G = [],
          r0 = [],
          n0 = [],
          S0 = [],
          h0 = 1 / F;
        for (let a0 = 0; a0 < F; a0++) {
          const y0 = ((k + a0 * h0) / 20) * Math.PI * 2 + Math.PI * 0.5,
            m0 = -((k + a0 * h0) / E) * $ - 1.5,
            W0 = c * 2 * ((1.5 * Math.sin(u * (-m0 / $ + d) * 2 * Math.PI) * h + h) * 0.5 + 1),
            Q0 = Math.cos(y0) * W0,
            J0 = Math.sin(y0) * W0,
            Ze = ((k + (a0 + 1) * h0) / 20) * Math.PI * 2 + Math.PI * 0.5,
            Ee = -((k + (a0 + 1) * h0) / E) * $ - 1.5,
            Qe = c * 2 * ((1.5 * Math.sin(u * (-Ee / $ + d) * 2 * Math.PI) * h + h) * 0.5 + 1),
            ie = Math.cos(Ze) * Qe,
            le = Math.sin(Ze) * Qe,
            Je = 0.8 * Math.sqrt((F * (ie - Q0)) ** 2 + (F * (le - J0)) ** 2),
            e1 = ((k + (a0 - 1) * h0) / 20) * Math.PI * 2 + Math.PI * 0.5,
            c2 = -((k + (a0 - 1) * h0) / E) * $ - 1.5,
            t1 = c * 2 * ((1.5 * Math.sin(u * (-c2 / $ + d) * 2 * Math.PI) * h + h) * 0.5 + 1),
            d2 = Math.cos(e1) * t1,
            u2 = Math.sin(e1) * t1,
            n1 = 0.8 * Math.sqrt((F * (Q0 - d2)) ** 2 + (F * (J0 - u2)) ** 2),
            h2 = [ie, Ee - Je, le, Q0, m0 - n1, J0, ie, Ee + Je, le, Q0, m0 + n1, J0],
            V0 = new F0(Q0, 0, J0).normalize(),
            Y0 = new F0(ie, 0, le).normalize(),
            m2 = [Y0.x, Y0.y, Y0.z, V0.x, V0.y, V0.z, Y0.x, Y0.y, Y0.z, V0.x, V0.y, V0.z],
            s1 = a0 / F,
            r1 = (a0 + 1) / F,
            f2 = [1 - r1, 0, 1 - s1, 0, 1 - r1, 1, 1 - s1, 1],
            p2 = [0, 2, 1, 1, 2, 3, 1, 2, 0, 3, 2, 1];
          (S0.push(...p2.map((g2) => g2 + G.length / 3)), G.push(...h2), r0.push(...m2), n0.push(...f2));
        }
        const c0 = new Uint16Array(S0),
          Q = new Float32Array(G),
          L0 = new Float32Array(r0),
          v0 = new Float32Array(n0);
        H.push({ i16indices: c0, f32vertices: Q, f32normals: L0, f32uvs: v0 });
      }
      return H;
    }, [E, $, c, d, u, h]),
    t0 = o.useMemo(() => {
      const H = [];
      for (let k = 0; k < V.length; k++) {
        const { i16indices: G, f32vertices: r0, f32normals: n0, f32uvs: S0 } = V[k],
          h0 = L[k];
        H.push(
          t.jsx(
            "group",
            {
              ref: (c0) => (M.current[k] = c0),
              children: t.jsxs("mesh", {
                frustumCulled: !1,
                position: [0, 0, 0.6 * 0.01],
                onPointerOver: (c0) => z(k, c0),
                onPointerOut: (c0) => B(k, c0),
                onPointerMove: (c0) => U(k, c0),
                onClick: (c0) => W(k, c0),
                children: [
                  t.jsx(w7, { points: r0, normals: n0, uvs: S0, indices: G }),
                  t.jsx("meshStandardMaterial", { map: h0.texture, toneMapped: !1, side: 2, transparent: !0 }),
                ],
              }),
            },
            k,
          ),
        );
      }
      return H;
    }, [V, L, z, B, U, W]);
  return (
    B0((H) => {
      if (!p) return;
      const k = Math.max(0, H.clock.elapsedTime - 0.5) + (j !== null && Date.now() - j > 4e3 ? 4 : 0);
      (document.body.classList.contains("loaded") ? j === null && _() : H.clock.start(),
        (I.current = H.clock),
        (r.current = j0.lerp(r.current, s, 0.1)),
        (a.current = j0.lerp(a.current, n, 0.1)));
      const G = H.clock.getElapsedTime() * 1e3,
        r0 = w.current,
        n0 = N.current;
      if (!r0 || !n0) return;
      const S0 = (document.documentElement.scrollHeight || 1) - window.innerHeight,
        h0 = S0 > 0 ? window.scrollY / S0 : 0,
        c0 = j0.clamp(h0, 0, 1);
      if (k > 3) {
        const Q = Math.max(0, Math.min(1, (k - 3) / 3));
        ((n0.rotation.z = j0.lerp(n0.rotation.z, -r.current / 20, Q * 0.15)),
          (n0.rotation.x = j0.lerp(n0.rotation.x, a.current / 20, Q * 0.15)));
      } else ((n0.rotation.z = 0), (n0.rotation.x = 0));
      if (((r0.rotation.y = l + c0 * 0.5 * i * Math.PI * 2 + G * 2e-5), (r0.position.y = c0 * T), k < 3)) {
        const Q = k / 3,
          L0 = -Math.pow(1 - Q, 5) * Math.PI * 3;
        r0.rotation.y += L0;
      }
      M.current.forEach((Q, L0) => {
        if (Q) {
          if (k > 3) {
            const v0 = x === L0 ? 0.25 : 0,
              a0 = Q.children[0].position.length();
            (Q.scale.set(1, 1, 1), (Q.children[0].material.opacity = 1));
            const y0 = j0.lerp(a0, v0, 0.1),
              m0 = (L0 / 20) * Math.PI * 2 + 0.5 * Math.PI;
            (Q.children[0].position.set(Math.cos(m0) * y0, 0, Math.sin(m0) * y0), !g && k > 4 && y());
          } else if (k > 2) Q.children[0].position.set(0, 0, 0);
          else if (k > 1.5) {
            const v0 = (k - 1.5) / 0.5;
            Q.children[0].position.set(0, (1 - (0.5 - 0.5 * Math.cos(v0 * Math.PI))) * 3, 0);
          } else {
            const v0 = (L0 * 0.03) % 1,
              a0 = Math.max(0, Math.min(0.5, k - v0)) / 0.5;
            (Q.scale.set(1.03, 1.03, 1.03),
              (Q.children[0].material.opacity = Math.pow(Math.max(0, (a0 - 0.5) / 0.5), 0.8)));
            const y0 = (1 - (0.5 - 0.5 * Math.cos(a0 * Math.PI))) * 5,
              m0 = (L0 / 20) * Math.PI * 2 + 0.5 * Math.PI;
            Q.children[0].position.set(y0 * Math.cos(m0), 3, y0 * Math.sin(m0));
          }
          if (k < 3 && k > 1.9) {
            const v0 = (L0 * 0.055) % 0.9,
              a0 = (k - (1.9 + v0)) / 0.5,
              y0 = k < 1.9 + v0 ? 1.03 : a0 < 0.4 ? 1.04 : 1,
              m0 = Q.scale.x,
              W0 = j0.lerp(m0, y0, 0.4);
            Q.scale.set(W0, W0, W0);
          }
        }
      });
    }),
    t.jsx("group", { ref: N, children: t.jsx("group", { ref: w, children: t0 }) })
  );
}
function _7() {
  const e = o.useRef(null);
  return (
    B0(() => {
      const s = e.current;
      if (!s) return;
      const n = (document.documentElement.scrollHeight || 1) - window.innerHeight,
        r = n > 0 ? window.scrollY / n : 0,
        a = j0.clamp(r, 0, 1),
        c = j0.lerp(5, -3, a);
      s.position.set(3, c, 8);
      const d = c + a * 5 - 8;
      (s.target.position.set(0, d, 0), s.target.updateMatrixWorld());
    }),
    t.jsx("spotLight", { ref: e, intensity: 26, angle: 0.42, penumbra: 0.35, distance: 60, decay: 1, color: "white" })
  );
}
const w0 = ({ to: e, label: s }) =>
  e
    ? t.jsxs(i0, {
        to: e,
        className: "arrow-link",
        children: [
          t.jsx("span", {
            className: "arrow-link__label",
            children: t.jsxs("span", { className: "arrow-link__label-text", children: [s, t.jsx("br", {}), s] }),
          }),
          t.jsx("span", { className: "arrow-link__arrow" }),
        ],
      })
    : t.jsxs("span", {
        className: "arrow-link",
        children: [
          t.jsx("span", {
            className: "arrow-link__label",
            children: t.jsxs("span", { className: "arrow-link__label-text", children: [s, t.jsx("br", {}), s] }),
          }),
          t.jsx("span", { className: "arrow-link__arrow" }),
        ],
      });
function v1(e, s) {
  const n = e.getBoundingClientRect(),
    r = [];
  let a = n.height * 0.125;
  if (a < 1) return;
  let l = 0;
  const i = 20;
  for (; a >= 1 && r.length < i;) ((a = Math.ceil(a)), r.push(a), (l += a), (a = a * 0.5));
  a !== 1 && r.length < i && (r.push(1), (l += 1));
  let c = e.querySelector("canvas");
  (c || ((c = document.createElement("canvas")), (c.style.imageRendering = "pixelated"), e.appendChild(c)),
    (c.width = l),
    (c.height = n.height));
  const d = c.getContext("2d", { willReadFrequently: !0 });
  if (!d) return;
  const u = n.top,
    h = n.bottom,
    m = n.left,
    p = n.right,
    g = Array.from(e.parentElement.querySelectorAll("img")).filter((b) => {
      const R = b.getBoundingClientRect();
      return R.bottom >= u && R.top <= h && R.right >= m && R.left <= p;
    });
  if (g.length === 0) return;
  const y = g[0];
  if (!y.complete || y.naturalWidth === 0) return;
  const j = y.getBoundingClientRect(),
    _ = j.left - m,
    v = j.top - u;
  ((d.fillStyle = "#d2d2d2"), d.fillRect(0, 0, c.width, c.height), d.drawImage(y, _, v, j.width, j.height));
  const f = d.getImageData(0, 0, c.width, c.height);
  if (s === "left") {
    let b = 0;
    for (const R of r) {
      let w = 0;
      for (; w < n.height;) {
        const N = Math.floor(b),
          x = Math.floor(w),
          S = Math.floor(N + R / 2),
          M = Math.floor(x + R / 2),
          D = Math.ceil(R),
          C = Math.ceil(Math.min(R, n.height - w)),
          I = (M * c.width + S) * 4,
          E = f.data[I],
          $ = f.data[I + 1],
          T = f.data[I + 2],
          P = f.data[I + 3];
        for (let O = 0; O < C; O++)
          for (let A = 0; A < D; A++) {
            const L = ((x + O) * c.width + (N + A)) * 4;
            ((f.data[L] = E), (f.data[L + 1] = $), (f.data[L + 2] = T), (f.data[L + 3] = P));
          }
        w += R;
      }
      b += R;
    }
  } else {
    let b = l;
    for (const R of r) {
      let w = 0;
      for (; w < n.height;) {
        const N = Math.floor(b - R),
          x = Math.floor(w),
          S = Math.floor(N + R / 2),
          M = Math.floor(x + R / 2),
          D = Math.ceil(R),
          C = Math.ceil(Math.min(R, n.height - w)),
          I = (M * c.width + S) * 4,
          E = f.data[I],
          $ = f.data[I + 1],
          T = f.data[I + 2],
          P = f.data[I + 3];
        for (let O = 0; O < C; O++)
          for (let A = 0; A < D; A++) {
            const L = ((x + O) * c.width + (N + A)) * 4;
            ((f.data[L] = E), (f.data[L + 1] = $), (f.data[L + 2] = T), (f.data[L + 3] = P));
          }
        w += R;
      }
      b -= R;
    }
  }
  d.putImageData(f, 0, 0);
}
function e2({ logos: e }) {
  const s = o.useRef(null),
    n = o.useRef(null),
    r = o.useRef(null),
    a = o.useRef(null),
    [l, i] = o.useState(!1);
  return (
    o.useEffect(() => {
      const c = a.current;
      if (!c) return;
      const d = new IntersectionObserver(
        ([u]) => {
          i(u.isIntersecting);
        },
        { threshold: 0.1, rootMargin: "50px" },
      );
      return (
        d.observe(c),
        () => {
          d.disconnect();
        }
      );
    }, []),
    o.useEffect(() => {
      const c = s.current;
      if (!c) return;
      let d,
        u = 0;
      const h = 0.5,
        m = () => {
          if (!l) {
            d = requestAnimationFrame(m);
            return;
          }
          u += h;
          const p = c.offsetWidth,
            g = c.querySelector(".logo-rail__set");
          if (g && g.offsetWidth < p && g.offsetWidth > 50) {
            const y = Math.ceil(p / g.offsetWidth) + 1;
            for (; c.children.length < y;) {
              const j = g.cloneNode(!0);
              c.appendChild(j);
            }
            for (; c.children.length > y;) c.removeChild(c.lastChild);
          }
          (g && u >= g.offsetWidth && (u = 0),
            (c.style.transform = `translateX(-${u}px)`),
            n.current && r.current && (v1(n.current, "left"), v1(r.current, "right")),
            (d = requestAnimationFrame(m)));
        };
      return (
        (d = requestAnimationFrame(m)),
        () => {
          cancelAnimationFrame(d);
        }
      );
    }, [l]),
    t.jsx("div", {
      className: "logo-rail",
      ref: a,
      children: t.jsxs("div", {
        className: "logo-rail__container",
        children: [
          t.jsx("div", {
            className: "logo-rail__scroll",
            ref: s,
            children: t.jsx("div", {
              className: "logo-rail__set",
              children: e.map((c, d) =>
                t.jsx(
                  "div",
                  {
                    className: "logo-rail__item",
                    children: t.jsx("img", {
                      src: Z(c).format("webp").width(512).url(),
                      alt: c.alt || "Partner logo",
                      className: "logo-rail__logo",
                      crossOrigin: "anonymous",
                    }),
                  },
                  `logo-1-${d}`,
                ),
              ),
            }),
          }),
          t.jsx("div", { className: "logo-rail__corner logo-rail__corner--left", ref: n }),
          t.jsx("div", { className: "logo-rail__corner logo-rail__corner--right", ref: r }),
        ],
      }),
    })
  );
}
const N7 = (e, s = {}) => {
    const { background: n = !0, autoplay: r = !0, muted: a = !0, loop: l = !0 } = s,
      i = e.match(/(?:https?:\/\/)?(?:www\.)?vimeo\.com\/([a-z]+\/)*(\d+)/);
    if (i && i[2]) {
      const d = new URLSearchParams({
        badge: "0",
        autopause: "0",
        autoplay: r ? "1" : "0",
        muted: a ? "1" : "0",
        playsinline: "1",
        prefer_mms: "0",
        controls: s.controls ? "1" : "0",
        title: "0",
        byline: "0",
        cc: "0",
        transcript: "0",
        pip: "0",
        vimeo_logo: s.vimeo_logo ? "1" : "0",
        background: n ? "1" : "0",
        player_id: "0",
        app_id: "58479",
      });
      return (l && d.set("loop", "1"), `https://player.vimeo.com/video/${i[2]}?${d.toString()}`);
    }
    const c = e.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([^\s&]+)/);
    if (c && c[1]) {
      const d = new URLSearchParams({ rel: "0", playsinline: "1", autoplay: r ? "1" : "0", mute: a ? "1" : "0" });
      return (l && d.set("loop", "1"), `https://www.youtube.com/embed/${c[1]}?${d.toString()}`);
    }
    return e;
  },
  R7 = () => {
    const e = new Int32Array(100);
    for (let s = 0; s < 10; s++) {
      for (let n = 0; n < 10; n++) e[s * 10 + n] = s * 10 + n;
      for (let n = 0; n < 10; n++) {
        const r = Math.floor(Math.random() * (10 - n)) + n,
          a = e[s * 10 + n];
        ((e[s * 10 + n] = e[s * 10 + r]), (e[s * 10 + r] = a));
      }
    }
    return e;
  };
function g0({
  children: e,
  className: s = "",
  delayMS: n = 0,
  baseDelayMS: r = 500,
  durationMS: a = 600,
  reverse: l = !1,
  manualStart: i = !1,
  start: c = !1,
  fullscreen: d = !1,
}) {
  const u = o.useRef(null),
    h = o.useRef(null),
    m = o.useRef(null),
    p = Ve(u, { disabled: d }),
    [g, y] = o.useState(!1),
    j = o.useRef(R7());
  return (
    o.useEffect(() => {
      i && !c && h.current && ((h.current.style.clipPath = "inset(0 0 0 0)"), (h.current.style.opacity = "0"));
    }, [i, c]),
    o.useEffect(() => {
      if (!(i ? c && p : p) || !m.current || !h.current) return;
      const f = m.current.getContext("2d", { willReadFrequently: !0 });
      if (!f) return;
      l && y(!1);
      let b;
      const R = [],
        w = () =>
          new Promise((D) => {
            const C = () => {
              if (
                document.body.classList.contains("loaded") &&
                h.current &&
                h.current.getBoundingClientRect().width > 0
              ) {
                D();
                return;
              }
              b = window.setTimeout(C, 50);
            };
            C();
          }),
        N = () =>
          new Promise((D) => {
            const C = h.current;
            if (!C) {
              D();
              return;
            }
            const I = Array.from(C.querySelectorAll("img"));
            if (I.length === 0) {
              D();
              return;
            }
            let E = I.length;
            const $ = () => {
              E <= 0 && D();
            };
            I.forEach((T) => {
              if (T.complete && (T.naturalWidth > 0 || T.naturalHeight > 0)) {
                (E--, $());
                return;
              }
              const P = () => {
                  (E--, A(), $());
                },
                O = () => {
                  (E--, A(), $());
                },
                A = () => {
                  (T.removeEventListener("load", P), T.removeEventListener("error", O));
                };
              (T.addEventListener("load", P), T.addEventListener("error", O), R.push(A));
            });
          }),
        x = () => Promise.all([w(), N()]).then(() => {}),
        S = f.createImageData(10, 10),
        M = j.current;
      return (
        x().then(() => {
          const D = l ? 0 : r + n,
            C = Date.now() + D,
            I = d ? { width: window.innerWidth, height: window.innerHeight } : h.current.getBoundingClientRect(),
            E = () => {
              const $ = Date.now() - C;
              if ($ < 0) {
                requestAnimationFrame(E);
                return;
              }
              const T = Math.min($ / a, 1),
                P = l ? 1 - T : T,
                O = Math.floor(P * 100);
              for (let L = 0; L < M.length; L++) {
                const z = M[L];
                let B = P * 100 - z;
                ((B = P === 1 ? 1 : Math.min(Math.max(B / 5, 0), 1)),
                  z < O
                    ? ((S.data[L * 4] = 255 * B),
                      (S.data[L * 4 + 1] = 255 * B),
                      (S.data[L * 4 + 2] = 255 * B),
                      (S.data[L * 4 + 3] = 255))
                    : ((S.data[L * 4] = 0),
                      (S.data[L * 4 + 1] = 0),
                      (S.data[L * 4 + 2] = 0),
                      (S.data[L * 4 + 3] = 255)));
              }
              const A = f.createImageData(10, 10);
              for (let L = 0; L < 10; L++)
                for (let z = 0; z < 10; z++) {
                  const B = (L * 10 + z) * 4,
                    U = ((9 - L) * 10 + z) * 4;
                  ((A.data[U] = S.data[B]),
                    (A.data[U + 1] = S.data[B + 1]),
                    (A.data[U + 2] = S.data[B + 2]),
                    (A.data[U + 3] = S.data[B + 3]));
                }
              if ((f.putImageData(A, 0, 0), h.current)) {
                const L = X1(A, I.width, I.height);
                ((h.current.style.clipPath = L), (h.current.style.opacity = "1"));
              }
              T < 1 ? requestAnimationFrame(E) : l ? h.current && (h.current.style.opacity = "0") : y(!0);
            };
          requestAnimationFrame(E);
        }),
        () => {
          (b !== void 0 && clearTimeout(b),
            R.forEach((D) => {
              try {
                D();
              } catch {}
            }));
        }
      );
    }, [p, n, r, a, l, i, c, d]),
    t.jsxs("div", {
      ref: u,
      className: `pixelated-image-reveal ${s}`,
      style: { "--reveal-delay": `${n / 1e3}s` },
      children: [
        t.jsx("canvas", { ref: m, className: "pixelated-image-reveal__canvas", width: "10", height: "10" }),
        t.jsx("div", {
          ref: h,
          className: `pixelated-image-reveal__content ${p ? "revealing" : ""} ${g ? "complete" : ""}`,
          children: e,
        }),
      ],
    })
  );
}
const t2 = typeof navigator > "u" ? "" : navigator.userAgent,
  E7 = /^((?!chrome|android).)*safari/i.test(t2),
  S7 = /iPad|iPhone|iPod/.test(t2) || E7,
  p0 = ({
    url: e,
    aspectRatio: s,
    forceAspectRatio: n,
    className: r,
    muted: a = !0,
    showFullscreenButton: l = !1,
    alwaysShow: i = !1,
    onPlayFullscreen: c,
    isInteractive: d = !1,
    hasAudio: u = !1,
    title: h,
  }) => {
    const [m, p] = o.useState(!1),
      [g, y] = o.useState(a),
      j = o.useRef(null),
      _ = o.useRef(null),
      v = o.useRef(s || 16 / 9),
      f = o.useRef(null);
    (o.useEffect(() => {
      const x = f.current;
      if (!j.current)
        if (x && e.includes("vimeo.com")) {
          const S = new z2(x, {
            autoplay: !0,
            muted: a,
            loop: !0,
            controls: d,
            vimeo_logo: !1,
            background: !d,
            playsinline: !0,
          });
          j.current = S;
          const M = () => {
            n ||
              Promise.all([S.getVideoWidth(), S.getVideoHeight()]).then((C) => {
                C[1] === 0 ||
                  C[0] === 0 ||
                  (_.current.style.setProperty("--aspect-ratio", (C[0] / C[1]).toString()), (v.current = C[0] / C[1]));
              });
          };
          M();
          const D = () => {
            (M(), p(!0));
          };
          (S.on("loaded", M), S.on("resize", M), S.on("playing", D), i && p(!0));
        } else x && p(!0);
    }, [e, i, n, d, a]),
      o.useEffect(() => {
        const x = _.current;
        if (!x) return;
        const S = new IntersectionObserver(
          (M) => {
            M.forEach((D) => {
              j.current && (D.isIntersecting ? j.current.play() : j.current.pause());
            });
          },
          { threshold: 0 },
        );
        return (
          S.observe(x),
          () => {
            (S.disconnect(), j.current && j.current.unload());
          }
        );
      }, []));
    const b = o.useMemo(() => N7(e, { muted: a, controls: d, background: !d, vimeo_logo: !1 }), [e, d, a]);
    s = s || 16 / 9;
    const R = o.useCallback(() => {
        if (c) {
          c();
          return;
        }
        const x = f.current;
        x && (x.requestFullscreen ? x.requestFullscreen() : x.webkitRequestFullscreen && x.webkitRequestFullscreen());
      }, [c]),
      w = c || (!S7 && l),
      N = o.useCallback(() => {
        y((x) => {
          const S = !x;
          return (j.current && j.current.setMuted(S), S);
        });
      }, []);
    return t.jsx("div", {
      ref: _,
      className: `video-container ${m ? "ready" : "loading"} ${d ? "video-container--interactive" : ""} ${r || ""}`,
      style: { "--aspect-ratio": v.current },
      children: t.jsxs(g0, {
        className: "video-container__reveal",
        baseDelayMS: 0,
        durationMS: 600,
        manualStart: !0,
        start: m,
        children: [
          t.jsx("iframe", {
            ref: f,
            src: b,
            title: h || "Embedded video",
            frameBorder: "0",
            "webkit-playsinline": "true",
            allowFullScreen: !0,
            referrerPolicy: "strict-origin-when-cross-origin",
            allow: `autoplay; allowfullscreen; ${a ? "muted;" : ""} loop; playsinline; webkit-playsinline; fullscreen; picture-in-picture`,
          }),
          w &&
            t.jsx("button", {
              onClick: R,
              className: "interactive video-container__play-fullscreen",
              "aria-label": "Play Fullscreen Video",
            }),
          u &&
            t.jsx("button", {
              onClick: N,
              className: "UI_1 video-container__mute-toggle interactive",
              "aria-label": g ? "Unmute video" : "Mute video",
              children: g ? "UNMUTE" : "MUTE",
            }),
        ],
      }),
    });
  };
function L7({ isOpen: e, onClose: s, vimeoURL: n }) {
  const [r, a] = o.useState(!1),
    [l, i] = o.useState(!1),
    [c, d] = o.useState(!1),
    u = o.useRef(null);
  (o.useEffect(() => {
    if (e)
      (a(!0),
        requestAnimationFrame(() => {
          i(!0);
        }));
    else if (r) {
      (d(!0), i(!1));
      const m = setTimeout(() => {
        (a(!1), d(!1));
      }, 700);
      return () => clearTimeout(m);
    }
  }, [e, r]),
    o.useEffect(() => {
      const m = (p) => {
        p.key === "Escape" && e && s();
      };
      return (window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m));
    }, [e, s]),
    o.useEffect(
      () => (
        e ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [e],
    ));
  const h = o.useCallback(
    (m) => {
      m.target === u.current && s();
    },
    [s],
  );
  return r
    ? x6.createPortal(
        t.jsx(g0, {
          className: `video-modal__overlay ${l ? "video-modal__overlay--open" : ""} ${c ? "video-modal__overlay--closing" : ""}`,
          baseDelayMS: 0,
          durationMS: 600,
          reverse: c,
          manualStart: !0,
          start: !0,
          fullscreen: !0,
          children: t.jsx("div", {
            className: "video-modal__container",
            ref: u,
            onClick: h,
            children: t.jsxs("div", {
              className: "video-modal__content",
              children: [
                t.jsx("button", {
                  className: "UI_1 video-modal__close interactive",
                  onClick: s,
                  "aria-label": "Close video",
                  children: "CLOSE",
                }),
                t.jsx("div", {
                  className: "video-modal__video-container",
                  children: t.jsx(p0, { isInteractive: !0, url: n, muted: !1 }),
                }),
              ],
            }),
          }),
        }),
        document.body,
      )
    : null;
}
function z0({ children: e, className: s = "", intensity: n = 1 }) {
  const r = o.useRef(null);
  return (
    o.useEffect(() => {
      const a = r.current;
      if (!a) return;
      const l = (i) => {
        const c = a.getBoundingClientRect(),
          d = i.clientX - c.left - c.width / 2,
          h = ((i.clientY - c.top - c.height / 2) / window.innerHeight) * -20 * n,
          m = (d / window.innerWidth) * 20 * n,
          p = Math.max(-10, Math.min(10, h)),
          g = Math.max(-10, Math.min(10, m));
        a.style.transform = `rotateX(${p}deg) rotateY(${g}deg) translateZ(10px)`;
      };
      return (
        window.addEventListener("mousemove", l),
        () => {
          window.removeEventListener("mousemove", l);
        }
      );
    }, [n]),
    t.jsx("div", { ref: r, className: `follow-pointer ${s}`, children: e })
  );
}
"ImageData" in globalThis ||
  (globalThis.ImageData = class {
    width;
    height;
    data;
    constructor(e, s) {
      ((this.data = new Uint8ClampedArray(e * s * 4)), (this.width = e), (this.height = s));
    }
  });
const O0 = new Int32Array(100);
for (let e = 0; e < 10; e++) {
  for (let s = 0; s < 10; s++) O0[e * 10 + s] = e * 10 + s;
  for (let s = 0; s < 10; s++) {
    const n = Math.floor(Math.random() * (10 - s)) + s,
      r = O0[e * 10 + s];
    ((O0[e * 10 + s] = O0[e * 10 + n]), (O0[e * 10 + n] = r));
  }
}
const pe = new ImageData(10, 10);
for (let e = 0; e < 100; e++)
  ((pe.data[e * 4] = 0), (pe.data[e * 4 + 1] = 0), (pe.data[e * 4 + 2] = 0), (pe.data[e * 4 + 3] = 255));
const I7 = (e, s, n) => {
  if (!e) return;
  const r = Math.floor(n * 100);
  for (let a = 0; a < O0.length; a++) {
    const l = O0[a];
    let i = n * 100 - l;
    ((i = n === 1 ? 1 : Math.min(Math.max(i / 5, 0), 1)),
      l < r
        ? ((s.data[a * 4] = 255 * i),
          (s.data[a * 4 + 1] = 255 * i),
          (s.data[a * 4 + 2] = 255 * i),
          (s.data[a * 4 + 3] = 255))
        : ((s.data[a * 4] = 0), (s.data[a * 4 + 1] = 0), (s.data[a * 4 + 2] = 0), (s.data[a * 4 + 3] = 255)));
  }
  for (let a = 0; a < 5; a++)
    for (let l = 0; l < 10; l++) {
      const i = (a * 10 + l) * 4,
        c = ((9 - a) * 10 + l) * 4;
      for (let d = 0; d < 4; d++) {
        const u = s.data[i + d];
        ((s.data[i + d] = s.data[c + d]), (s.data[c + d] = u));
      }
    }
  e.putImageData(s, 0, 0);
};
function C7({
  children: e,
  className: s = "",
  revealDistance: n = 800,
  pixelated: r = !0,
  onReveal: a,
  onRevealComplete: l,
}) {
  const i = o.useRef(null),
    c = o.useRef(null),
    d = o.useRef(null),
    u = o.useRef(null),
    h = o.useRef(null),
    m = o.useRef(void 0),
    p = o.useRef(!1);
  return (
    o.useEffect(() => {
      const g = () => {
        const y = d.current?.getContext("2d", { willReadFrequently: !0 });
        if (!y) {
          m.current = requestAnimationFrame(g);
          return;
        }
        (!u.current || u.current.width !== y.canvas.width || u.current.height !== y.canvas.height) &&
          (u.current = y.getImageData(0, 0, y.canvas.width, y.canvas.height));
        const j = i.current?.getBoundingClientRect(),
          _ = window.innerHeight;
        let v = 0;
        if (j) {
          const f = _,
            b = _ - n,
            R = j.top;
          R <= f && R >= b ? (v = 1 - (R - b) / (f - b)) : R < b ? (v = 1) : (v = 0);
        }
        if (
          (window.innerWidth <= 768 && (v = Math.min(v * 1.5, 1)),
          v >= 1 && !p.current && l ? ((p.current = !0), l()) : v > 0 && v < 1 && (a && a(), (p.current = !1)),
          I7(y, u.current, v),
          i.current && r && (i.current.style.transform = `scale(${1.3 - 0.3 * v}) rotateX(${15 - 15 * v}deg)`),
          i.current && d.current && r)
        ) {
          const f = i.current.getBoundingClientRect(),
            b = X1(u.current, f.width, f.height);
          i.current.style.clipPath = b;
        }
        m.current = requestAnimationFrame(g);
      };
      return (
        g(),
        () => {
          m.current && cancelAnimationFrame(m.current);
        }
      );
    }, [n, l, a, r]),
    t.jsxs("div", {
      ref: i,
      className: `pixelated-reveal-container ${s}`,
      children: [
        t.jsx("div", { ref: h, className: "pixelated-reveal" }),
        t.jsx("canvas", { ref: d, className: "pixelated-reveal__canvas", width: "10", height: "10" }),
        t.jsx("div", { ref: c, className: "pixelated-reveal__content", children: e }),
      ],
    })
  );
}
function A7({ videoUrl: e, aspectRatio: s = 1 }) {
  const [n, r] = o.useState([{ id: "0", url: e, state: "active" }]),
    a = o.useRef(1),
    l = o.useRef(e);
  o.useEffect(() => {
    if (l.current === e) return;
    ((l.current = e),
      r((u) => u.map((h) => (h.state === "active" || h.state === "entering" ? { ...h, state: "exiting" } : h))));
    const d = String(a.current++);
    r((u) => [...u, { id: d, url: e, state: "entering" }]);
  }, [e]);
  const i = (d) => {
      r((u) => u.map((h) => (h.id === d ? { ...h, state: "active" } : h)));
    },
    c = (d) => {
      r((u) => u.filter((h) => h.id !== d));
    };
  return t.jsx("div", {
    className: "glitch-transition",
    children: n.map((d) =>
      t.jsx(
        "video",
        {
          src: d.url,
          className: `glitch-transition__video glitch-transition__video--${d.state}`,
          style: { aspectRatio: s, objectFit: "cover" },
          autoPlay: !0,
          playsInline: !0,
          muted: !0,
          loop: !0,
          onCanPlay: () => i(d.id),
          onAnimationEnd: () => d.state === "exiting" && c(d.id),
        },
        d.id,
      ),
    ),
  });
}
function y1(e) {
  const s = "asset" in e ? e.asset._ref : e._ref,
    [, n, r] = s.split("-");
  return `https://cdn.sanity.io/files/${l0.config().projectId}/${l0.config().dataset}/${n}.${r}`;
}
function n2({ capabilities: e, capabilitiesCallToAction: s }) {
  const [n, r] = o.useState(null),
    [a, l] = o.useState(""),
    i = o.useRef([]),
    c = o.useRef([]),
    d = o.useRef([]),
    u = o.useRef(null),
    h = o.useRef(null),
    m = o.useRef(null),
    p = 1.6667,
    g = 3,
    y = e.length * p * 2;
  (o.useEffect(() => {
    i.current = e.map(() => ({ top: p, bottom: p }));
  }, [e.length]),
    o.useEffect(() => {
      u.current && u.current.kill();
      const v = e.map((b, R) => (R === n ? { top: g, bottom: g } : { top: p, bottom: p })),
        f = { progress: 0 };
      return (
        (u.current = U0.to(f, {
          progress: 1,
          duration: 0.4,
          ease: "power2.out",
          onUpdate: () => {
            const b = f.progress;
            i.current.forEach((N, x) => {
              ((N.top = U0.utils.interpolate(i.current[x].top, v[x].top, b)),
                (N.bottom = U0.utils.interpolate(i.current[x].bottom, v[x].bottom, b)));
            });
            const R = i.current.reduce((N, x) => N + x.top + x.bottom, 0),
              w = y / R;
            i.current.forEach((N, x) => {
              const S = c.current[x],
                M = d.current[x],
                D = `${N.top * w}vw 0vw ${N.bottom * w}vw`;
              (S && (S.style.padding = D), M && (M.style.padding = D));
            });
          },
        })),
        () => {
          u.current && u.current.kill();
        }
      );
    }, [n, e.length]),
    o.useEffect(() => {
      const v = () => {
        if (!h.current) return;
        const f = h.current.getBoundingClientRect(),
          b = window.innerHeight,
          R = f.top,
          w = b * 0.2,
          N = b * -0.3,
          x = Math.max(0, Math.min(1, (w - R) / (w - N))),
          S = f.height - (m.current?.offsetHeight || 0),
          M = x * S;
        l(`translateY(${M}px)`);
      };
      return (
        v(),
        window.addEventListener("scroll", v),
        window.addEventListener("resize", v),
        () => {
          (window.removeEventListener("scroll", v), window.removeEventListener("resize", v));
        }
      );
    }, [e.length]));
  const j = (v) => {
    const f = e[v];
    return f?.videoURL ? (typeof f.videoURL == "string" ? f.videoURL : y1(f.videoURL)) : null;
  };
  o.useEffect(() => {
    e.forEach((v) => {
      if (!v?.videoURL) return;
      const f = typeof v.videoURL == "string" ? v.videoURL : y1(v.videoURL);
      if (f) {
        const b = document.createElement("video");
        ((b.src = f), (b.preload = "auto"), (b.muted = !0));
      }
    });
  }, [e]);
  const _ = j(n !== null ? n : 0);
  return t.jsxs("div", {
    className: "home-body__capabilities",
    children: [
      t.jsx(g0, {
        children: t.jsx("div", {
          className: "home-body__image-2",
          style: { transform: a },
          ref: m,
          children: _ && t.jsx(A7, { videoUrl: _, aspectRatio: 1 }),
        }),
      }),
      t.jsx(Y, {
        baseDelay: 0.4,
        children: t.jsx("div", { className: "home-body__capabilities-label", children: "CAPABILITIES" }),
      }),
      t.jsx("div", {
        className: "home-body__capabilities-list",
        ref: h,
        children: t.jsxs(Y, {
          children: [
            e.map((v, f) =>
              t.jsxs(
                "div",
                {
                  className: `home-body__capability-item ${f === e.length - 1 ? "last" : ""}`,
                  onMouseEnter: () => r(f),
                  onMouseLeave: () => r(null),
                  children: [
                    t.jsx("div", { className: "home-body__capability-spacer" }),
                    t.jsx("span", {
                      ref: (b) => {
                        c.current[f] = b;
                      },
                      className: "label",
                      children: v.label,
                    }),
                    t.jsxs("span", {
                      ref: (b) => {
                        d.current[f] = b;
                      },
                      className: "number",
                      children: ["[ ", (f + 1).toString().padStart(2, "0"), " ]"],
                    }),
                  ],
                },
                f,
              ),
            ),
            s && t.jsx(w0, { to: s.url, label: s.label }),
          ],
        }),
      }),
    ],
  });
}
const ae = "https://studiodialect.com",
  G0 = "Studio Dialect",
  s2 = "Studio Dialect",
  Ge = "An interactive production studio for every screen, spanning e-comms, experiential, and retail innovation.",
  _e = `${ae}/OpenGraph__02_SML.jpg`,
  M7 = "Studio Dialect — interactive production studio",
  T7 = 60,
  P7 = 160,
  r2 = (e) => {
    const s = e.replace(/^\/+|\/+$/g, "");
    return s === "" ? "/" : `/${s}/`;
  },
  k0 = (e) => `${ae}${r2(e)}`,
  j1 = (e, s) => (e.length <= s ? e : e.slice(0, s - 1).trimEnd() + "…"),
  ve = (e) => e.replace(/\s+/g, " ").trim(),
  k7 = (e) => ve(e.replace(/<[^>]+>/g, "")),
  Ce = (e) => {
    const s = e?.asset?.url;
    if (s) return `${s}?w=1200&h=630&fit=crop&auto=format&q=80`;
  };
function $7({
  path: e,
  seo: s,
  title: n,
  description: r,
  client: a,
  heroImage: l,
  siteSettings: i,
  ogType: c = "website",
}) {
  const d = r2(e),
    u = ve(s?.metaTitle ?? n ?? i?.title ?? s2),
    h = !s?.metaTitle && a && n ? `${ve(n)} — ${ve(a)}` : u,
    m = new RegExp(`(^|[\\s|—\\-–·•])${G0.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "i"),
    p = h === G0 || m.test(h),
    g = j1(p ? h : `${h} | ${G0}`, T7 + G0.length + 3),
    y = s?.metaDescription ?? r ?? i?.description ?? Ge,
    j = j1(k7(y), P7),
    _ = s?.canonicalOverride?.trim() || `${ae}${d}`,
    v = Ce(s?.ogImage ?? void 0) ?? Ce(l ?? void 0) ?? Ce(i?.ogImage ?? void 0) ?? _e,
    f = s?.ogImage?.alt ?? l?.alt ?? i?.ogImage?.alt ?? M7;
  return {
    title: g,
    description: j,
    canonical: _,
    ogImageUrl: v,
    ogImageAlt: f,
    ogType: c,
    noindex: !!s?.noindex,
    keywords: s?.keywords && s.keywords.length > 0 ? s.keywords : i?.keywords,
    twitterHandle: i?.twitterHandle,
  };
}
function e0(e, s, n) {
  const r = `meta[${e}="${s}"]`;
  let a = document.head.querySelector(r);
  (a || ((a = document.createElement("meta")), a.setAttribute(e, s), document.head.appendChild(a)),
    a.content !== n && (a.content = n));
}
function D7(e, s) {
  let n = document.head.querySelector(`link[rel="${e}"]`);
  (n || ((n = document.createElement("link")), (n.rel = e), document.head.appendChild(n)),
    n.href !== s && (n.href = s));
}
function s0(e) {
  const s = x0(),
    n = e.path ?? s.pathname,
    r = $7({ ...e, path: n });
  if (
    Ye &&
    (W2(r.title),
    J("description", r.description),
    q2("canonical", r.canonical),
    J("robots", r.noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large"),
    r.keywords && r.keywords.length > 0 && J("keywords", r.keywords.join(", ")),
    J("og:title", r.title),
    J("og:description", r.description),
    J("og:url", r.canonical),
    J("og:type", r.ogType),
    J("og:site_name", "Studio Dialect"),
    J("og:image", r.ogImageUrl),
    J("og:image:alt", r.ogImageAlt),
    J("og:image:width", "1200"),
    J("og:image:height", "630"),
    J("twitter:card", "summary_large_image"),
    J("twitter:title", r.title),
    J("twitter:description", r.description),
    J("twitter:image", r.ogImageUrl),
    J("twitter:image:alt", r.ogImageAlt),
    r.twitterHandle)
  ) {
    const a = r.twitterHandle.startsWith("@") ? r.twitterHandle : `@${r.twitterHandle}`;
    (J("twitter:site", a), J("twitter:creator", a));
  }
  return (
    o.useLayoutEffect(() => {
      if (
        !(typeof document > "u") &&
        (document.title !== r.title && (document.title = r.title),
        e0("name", "description", r.description),
        D7("canonical", r.canonical),
        e0("name", "robots", r.noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large"),
        r.keywords && r.keywords.length > 0 && e0("name", "keywords", r.keywords.join(", ")),
        e0("property", "og:title", r.title),
        e0("property", "og:description", r.description),
        e0("property", "og:url", r.canonical),
        e0("property", "og:type", r.ogType),
        e0("property", "og:site_name", "Studio Dialect"),
        e0("property", "og:image", r.ogImageUrl),
        e0("property", "og:image:alt", r.ogImageAlt),
        e0("property", "og:image:width", "1200"),
        e0("property", "og:image:height", "630"),
        e0("name", "twitter:card", "summary_large_image"),
        e0("name", "twitter:title", r.title),
        e0("name", "twitter:description", r.description),
        e0("name", "twitter:image", r.ogImageUrl),
        e0("name", "twitter:image:alt", r.ogImageAlt),
        r.twitterHandle)
      ) {
        const a = r.twitterHandle.startsWith("@") ? r.twitterHandle : `@${r.twitterHandle}`;
        (e0("name", "twitter:site", a), e0("name", "twitter:creator", a));
      }
    }, [
      r.title,
      r.description,
      r.canonical,
      r.noindex,
      r.keywords,
      r.ogType,
      r.ogImageUrl,
      r.ogImageAlt,
      r.twitterHandle,
    ]),
    null
  );
}
function O7() {
  const e = o.useRef(null),
    { data: s } = Z0(),
    { data: n } = d0(),
    r = s?.logoRail,
    a = s?.homePage,
    l = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent),
    i = a,
    [c, d] = o.useState(!1),
    u = (v) =>
      v
        ? v.map((f) => f.children.map((b) => b.text).join("")).join(`
`)
        : "",
    [h, m] = o.useState(
      new Date().toLocaleString("en-GB", { hour: "2-digit", hour12: !1, minute: "2-digit", timeZone: "Europe/London" }),
    ),
    [p, g] = o.useState("OPEN"),
    [y, j] = o.useState(!0);
  if (
    (o.useEffect(() => {
      const v = () => {
          (m(
            new Date().toLocaleString("en-GB", {
              hour: "2-digit",
              hour12: !1,
              minute: "2-digit",
              timeZone: "Europe/London",
            }),
          ),
            g(() => {
              const b = new Date(),
                R = new Date(b.toLocaleString("en-US", { timeZone: "Europe/London" })),
                w = R.getDay(),
                N = R.getHours(),
                x = R.getMinutes();
              return w >= 1 && w <= 5 && N >= 9 && (N < 17 || (N === 17 && x <= 30)) ? "OPEN" : "ZZZ";
            }));
        },
        f = setInterval(v, 6e4);
      return (v(), () => clearInterval(f));
    }, []),
    o.useEffect(() => {
      const v = () => {
        const b = e.current?.getBoundingClientRect().top;
        (b && b < 0 ? j(!1) : j(!0), (f = requestAnimationFrame(v)));
      };
      let f = 0;
      return (
        (f = requestAnimationFrame(v)),
        () => {
          cancelAnimationFrame(f);
        }
      );
    }, []),
    !i)
  )
    return t.jsx("div", { className: "page home" });
  const _ =
    i.contactInfo?.address?.split(`
`) || [];
  return t.jsxs("div", {
    className: "page home",
    children: [
      t.jsx(s0, { description: i.heroSubtitle, seo: i.seo, siteSettings: n }),
      t.jsx("div", {
        className: "hero__container",
        children: t.jsxs("section", {
          className: "hero",
          children: [
            t.jsx(o0, { text: u(i.heroTitle), className: "hero__title", baseDelay: 2 }),
            t.jsxs("div", {
              className: "hero__graphic",
              children: [
                t.jsx("div", { className: "hero__graphic_icon icon_1" }),
                t.jsx("div", { className: "hero__graphic_icon icon_2" }),
                t.jsx("div", { className: "hero__graphic_icon icon_3" }),
              ],
            }),
            t.jsx(Y, {
              baseDelay: 2.5,
              children: t.jsx("p", { className: "hero__subtitle", children: i.heroSubtitle }),
            }),
            t.jsx(p7, { images: i.spiralImages, enabled: y }),
            t.jsxs("div", {
              className: "hero__spiral-crosses",
              children: [
                t.jsx("div", { className: "cross-icon cross-top-left" }),
                t.jsx("div", { className: "cross-icon cross-top-right" }),
                t.jsx("div", { className: "cross-icon cross-bottom-left" }),
                t.jsx("div", { className: "cross-icon cross-bottom-right" }),
              ],
            }),
          ],
        }),
      }),
      t.jsx(C7, {
        pixelated: !1,
        children: t.jsxs("section", {
          className: "body drop-shadow-top",
          ref: e,
          children: [
            t.jsx(o0, { tagName: "h2", className: "home-body__title-top desktop", text: i.sectionOneTitle || "" }),
            t.jsx(o0, {
              tagName: "h2",
              className: "home-body__title-top mobile",
              text: i.sectionOneTitle + " " + i.sectionOneTitleBottom,
            }),
            t.jsxs("div", {
              className: "home-body__main",
              children: [
                t.jsx("div", {
                  className: "home-body__callout-container",
                  children: t.jsxs("div", {
                    className: "home-body__callout",
                    children: [
                      t.jsx(q, {
                        baseDelay: 0.4,
                        children: i.sectionOneCallout.split(/\n+/gm).map((v, f) => t.jsx("p", { children: v }, f)),
                      }),
                      t.jsx(Y, {
                        baseDelay: 0.6,
                        children: t.jsx(w0, {
                          to: i.sectionOneCalloutLink?.url,
                          label: i.sectionOneCalloutLink?.label,
                        }),
                      }),
                    ],
                  }),
                }),
                l
                  ? t.jsxs("div", {
                      className: "home-body__image",
                      children: [
                        i.showreelVideo?.previewVimeoURL
                          ? t.jsx(p0, {
                              url: i.showreelVideo.previewVimeoURL,
                              aspectRatio: i.showreelVideo?.aspectRatio,
                              showFullscreenButton: !0,
                              hasAudio: i.showreelVideo?.hasAudio,
                              onPlayFullscreen: i.showreelVideo?.vimeoURL ? () => d(!0) : void 0,
                            })
                          : t.jsx("div", { className: "home-body__image-placeholder" }),
                        t.jsx("div", { className: "cross-icon cross-top-left" }),
                        t.jsx("div", { className: "cross-icon cross-top-right" }),
                        t.jsx("div", { className: "cross-icon cross-bottom-left" }),
                        t.jsx("div", { className: "cross-icon cross-bottom-right" }),
                      ],
                    })
                  : t.jsx(g0, {
                      children: t.jsx(z0, {
                        children: t.jsxs("div", {
                          className: "home-body__image",
                          children: [
                            i.showreelVideo?.previewVimeoURL
                              ? t.jsx(p0, {
                                  url: i.showreelVideo.previewVimeoURL,
                                  aspectRatio: i.showreelVideo?.aspectRatio,
                                  hasAudio: i.showreelVideo?.hasAudio,
                                  onPlayFullscreen: i.showreelVideo?.vimeoURL ? () => d(!0) : void 0,
                                })
                              : t.jsx("div", { className: "home-body__image-placeholder" }),
                            t.jsx("div", { className: "cross-icon cross-top-left" }),
                            t.jsx("div", { className: "cross-icon cross-top-right" }),
                            t.jsx("div", { className: "cross-icon cross-bottom-left" }),
                            t.jsx("div", { className: "cross-icon cross-bottom-right" }),
                          ],
                        }),
                      }),
                    }),
              ],
            }),
            t.jsx(o0, {
              tagName: "h2",
              className: "home-body__title-bottom desktop",
              text: i.sectionOneTitleBottom || "",
            }),
          ],
        }),
      }),
      t.jsxs("section", {
        className: "body",
        children: [
          t.jsx("div", {
            className: "home-body__text",
            children: t.jsx(q, {
              children: i.sectionTwoText.split(/\n+/gm).map((v, f) => t.jsx("p", { children: v }, f)),
            }),
          }),
          t.jsx(n2, { capabilities: i.capabilities, capabilitiesCallToAction: i.capabilitiesCallToAction }),
        ],
      }),
      r &&
        r.logos &&
        r.logos.length > 0 &&
        t.jsx("section", {
          className: "home-body__logo-rail body",
          children: t.jsx(Y, { children: t.jsx(e2, { logos: r.logos }) }),
        }),
      t.jsx("section", {
        className: "body",
        children: t.jsxs("div", {
          className: "home-body__intersection",
          children: [
            t.jsxs("div", {
              className: "home-body__callout-2 mobile",
              children: [
                t.jsx(o0, {
                  tagName: "h3",
                  className: "home-body__intersection-title",
                  text: i.intersectionTitle || "",
                }),
                t.jsxs("div", {
                  className: "home-body__callout",
                  children: [
                    i.intersectionText
                      .split(/\n+/gm)
                      .map((v, f) => t.jsx(q, { baseDelay: 0.8 + f * 0.2, children: t.jsx("p", { children: v }) }, f)),
                    t.jsx(Y, {
                      children: t.jsx(w0, {
                        to: i.intersectionCallToAction?.url,
                        label: i.intersectionCallToAction?.label,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("div", { className: "home-body__gate-icon mobile" }),
            t.jsxs("div", {
              className: "home-body__world desktop",
              children: [
                t.jsx(Y, {
                  children: t.jsx("div", { className: "home-body__callout-studio", children: "THE STUDIO" }),
                }),
                t.jsxs(Y, {
                  children: [
                    t.jsx("div", { className: "home-body__world-icon" }),
                    t.jsx(w0, { to: i.worldLink?.url, label: i.worldLink?.label }),
                  ],
                }),
              ],
            }),
            l
              ? t.jsxs("div", {
                  className: "home-body__image home-body__image-3",
                  style:
                    !i.intersectionImage?.vimeoURL && i.intersectionImage?.image
                      ? { backgroundImage: `url(${Z(i.intersectionImage?.image).format("webp").url()})` }
                      : void 0,
                  children: [
                    i.intersectionImage?.vimeoURL &&
                      t.jsx(p0, {
                        url: i.intersectionImage?.vimeoURL,
                        aspectRatio: i.intersectionImage?.aspectRatio,
                        hasAudio: i.intersectionImage?.hasAudio,
                      }),
                    t.jsx("div", { className: "cross-icon cross-top-left" }),
                    t.jsx("div", { className: "cross-icon cross-top-right" }),
                    t.jsx("div", { className: "cross-icon cross-bottom-left" }),
                    t.jsx("div", { className: "cross-icon cross-bottom-right" }),
                  ],
                })
              : t.jsx(g0, {
                  baseDelayMS: 400,
                  children: t.jsx(z0, {
                    children: t.jsxs("div", {
                      className: "home-body__image home-body__image-3",
                      style:
                        !i.intersectionImage?.vimeoURL && i.intersectionImage?.image
                          ? { backgroundImage: `url(${Z(i.intersectionImage?.image).format("webp").url()})` }
                          : void 0,
                      children: [
                        i.intersectionImage?.vimeoURL &&
                          t.jsx(p0, {
                            url: i.intersectionImage?.vimeoURL,
                            aspectRatio: i.intersectionImage?.aspectRatio,
                            hasAudio: i.intersectionImage?.hasAudio,
                          }),
                        t.jsx("div", { className: "cross-icon cross-top-left" }),
                        t.jsx("div", { className: "cross-icon cross-top-right" }),
                        t.jsx("div", { className: "cross-icon cross-bottom-left" }),
                        t.jsx("div", { className: "cross-icon cross-bottom-right" }),
                      ],
                    }),
                  }),
                }),
            t.jsxs("div", {
              className: "home-body__intersection-text",
              children: [
                t.jsxs("div", {
                  className: "home-body__callout-2 desktop",
                  children: [
                    t.jsx(o0, {
                      tagName: "h3",
                      className: "home-body__intersection-title",
                      text: i.intersectionTitle || "",
                    }),
                    t.jsxs("div", {
                      className: "home-body__callout",
                      children: [
                        t.jsx(q, {
                          children: i.intersectionText.split(/\n+/gm).map((v, f) => t.jsx("p", { children: v }, f)),
                        }),
                        t.jsx(Y, {
                          children: t.jsx(w0, {
                            to: i.intersectionCallToAction?.url,
                            label: i.intersectionCallToAction?.label,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "home-body__contact",
                  children: [
                    t.jsx("div", {
                      children: t.jsxs(Y, {
                        children: [
                          t.jsx("span", { className: "home-body__label", children: "dialect hq" }),
                          t.jsx("br", {}),
                          t.jsx("span", { className: "home-body__time", children: h }),
                          t.jsx("span", { className: "home-body__status", children: p }),
                        ],
                      }),
                    }),
                    t.jsx("div", {
                      children: t.jsx(Y, {
                        children: _.map((v, f) =>
                          t.jsxs("span", { children: [v, f < _.length - 1 && t.jsx("br", {})] }, f),
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      i.showreelVideo?.vimeoURL && t.jsx(L7, { isOpen: c, onClose: () => d(!1), vimeoURL: i.showreelVideo.vimeoURL }),
    ],
  });
}
const U7 = {
  heroTitle: `intersecting culture
& technology around
the world`,
  worldSectionLabel: "dialect's world",
  worldSectionText:
    "Started by Jon and Andy in early '21 Dialect is guided by a strategic approach identifying the intersecting points between culture and technology. We specialise in connecting the dots through 'difficult to do digital'.",
  aboutText:
    "Our work is built upon an approach that creatively rationalises emerging technologies for brands and choreographing experiences that leave lasting impressions. We do this in close collaboration with our agency partners. Our work is built upon an approach that creatively rationalises emerging technologies for brands and choreographing.",
  teamTitle: "the team",
  teamDescription:
    "Started by Jon and Andy in early '21 Dialect is guided by a strategic approach identifying the intersecting points between culture and technology. We specialise in connecting the dots through 'difficult to do digital'. Our work is built upon an approach that creatively rationalises emerging technologies for brands.",
};
function F7() {
  const { data: e } = Z0(),
    { data: s } = d0(),
    n = e?.teamMembers ?? [],
    r = e?.logoRail,
    a = e?.studioPage,
    l = e?.homePage,
    [i, c] = o.useState(null),
    d = a || U7,
    u = d.globeMarkers?.map((p) => ({ lat: p.latitude, lon: p.longitude, label: p.label, url: p.url }));
  let h = "x:    0  y:    0  z:    0";
  const m = (p) => {
    if (!p) return h;
    const g = 1,
      y = Math.round(p.x * g)
        .toString()
        .padStart(4, " "),
      j = Math.round(p.y * g)
        .toString()
        .padStart(4, " ");
    return ((h = `lat: ${y}  lon: ${j}`), h);
  };
  return t.jsxs("div", {
    className: "page studio",
    children: [
      t.jsx(s0, {
        title: "Studio",
        description:
          a?.aboutText ||
          "An interactive production studio intersecting culture and technology — based in Manchester, working with brands and agencies worldwide.",
        seo: a?.seo,
        siteSettings: s,
      }),
      t.jsxs("div", {
        className: "studio-container",
        children: [
          t.jsx("section", {
            className: "studio-hero",
            children: t.jsx(o0, { tagName: "h1", baseDelay: 0.7, className: "studio-hero__title", text: d.heroTitle }),
          }),
          t.jsxs("section", {
            className: "studio-world body",
            children: [
              t.jsx("div", {
                className: "mobile",
                children: t.jsx(q, {
                  className: "studio-world__text",
                  children: d.worldSectionText.split(/\n+/gm).map((p, g) => t.jsx("p", { children: p }, g)),
                }),
              }),
              t.jsx(Y, {
                baseDelay: 0.4,
                children: t.jsx("div", {
                  className: "studio-world__label UI_1",
                  children: d.worldSectionLabel || "dialect's world",
                }),
              }),
              t.jsx("div", {
                className: "studio-world__map",
                children: t.jsx("div", {
                  className: "studio-world__globe",
                  children: t.jsx(Y6, { autoRotate: !0, rotationSpeed: 0.002, markers: u, onHoverCoord: c }),
                }),
              }),
              t.jsxs("div", {
                className: "studio-world__content",
                children: [
                  t.jsx("div", {
                    className: "desktop",
                    children: t.jsx(q, {
                      className: "studio-world__text",
                      children: d.worldSectionText.split(/\n+/gm).map((p, g) => t.jsx("p", { children: p }, g)),
                    }),
                  }),
                  t.jsxs(Y, {
                    baseDelay: 1,
                    children: [
                      t.jsx("div", { className: "studio-world__coordinates UI_1", children: m(i) }),
                      t.jsx("hr", { className: "studio-world__divider" }),
                      t.jsxs("div", {
                        className: "studio-world__our-world",
                        children: [
                          t.jsx("div", { className: "studio-world__game-icon" }),
                          t.jsx(w0, { label: "OUR WORLD", to: "/contact" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.jsxs("section", {
            className: "studio-description body",
            children: [
              t.jsx(q, {
                className: "studio-description__text",
                children: d.aboutText.split(/\n\n+/gm).map((p, g) => t.jsx("p", { children: p }, g)),
              }),
              t.jsx(n2, { capabilities: l?.capabilities || [] }),
            ],
          }),
          r &&
            r.logos &&
            r.logos.length > 0 &&
            t.jsx("section", {
              className: "home-body__logo-rail body",
              children: t.jsx(Y, { children: t.jsx(e2, { logos: r.logos }) }),
            }),
          t.jsxs("section", {
            className: "studio-team body",
            children: [
              t.jsx(q, {
                className: "studio-team__description",
                children: d.teamDescription.split(/\n+/gm).map((p, g) => t.jsx("p", { children: p }, g)),
              }),
              t.jsxs("div", {
                className: "studio-team__infos",
                children: [
                  t.jsx(o0, { tagName: "h4", text: d.teamTitle || "the team", className: "studio-team__title" }),
                  t.jsx("div", {
                    className: "studio-team__grid",
                    children: n.map((p, g) =>
                      t.jsxs(
                        "div",
                        {
                          className: "studio-team__card",
                          children: [
                            t.jsx(g0, {
                              baseDelayMS: (g % 3) * 100,
                              children: t.jsx(z0, {
                                children: t.jsx("div", {
                                  className: "studio-team__image",
                                  children:
                                    p.photo &&
                                    t.jsx("img", { src: Z(p.photo).width(600).height(600).url(), alt: p.name }),
                                }),
                              }),
                            }),
                            t.jsx("div", {
                              className: "studio-team__info",
                              children: t.jsxs(Y, {
                                baseDelay: (g % 3) * 0.1 + 0.4,
                                children: [
                                  t.jsx("h4", { className: "studio-team__name", children: p.name }),
                                  t.jsx("p", { className: "studio-team__role UI_1", children: p.role }),
                                ],
                              }),
                            }),
                          ],
                        },
                        g,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const B7 = [
  "Studio Dialect work",
  "interactive production portfolio",
  "WebGL projects",
  "immersive retail case studies",
  "anamorphic billboard projects",
  "experiential design work",
  "creative technology portfolio",
];
function H7() {
  const [e, s] = o.useState("all"),
    [n, r] = o.useState(!1),
    [a, l] = o.useState(!1),
    { data: i, isLoading: c } = Z0(),
    { data: d } = d0(),
    { data: u } = u0({ queryKey: ["projectsPage"], queryFn: () => l0.fetch(U2), staleTime: 1e3 * 60 * 30 }),
    h = { ...u?.seo, keywords: u?.seo?.keywords?.length ? u.seo.keywords : B7 },
    m = o.useMemo(() => i?.projects ?? [], [i?.projects]),
    p = o.useMemo(() => (e === "all" ? m : m.filter((f) => f.category?.includes(e))), [m, e]),
    { projectCategories: g, categoryCounts: y } = o.useMemo(() => {
      const f = { all: m.length };
      return (
        m.forEach((b) => {
          b.category?.forEach((R) => {
            (R in f || (f[R] = 0), f[R]++);
          });
        }),
        { projectCategories: Object.keys(f).filter((b) => b !== "all"), categoryCounts: f }
      );
    }, [m]),
    j = (f, b = 0) => {
      if (f.images && f.images[b]) return Z(f.images[b]).width(600).format("webp").url();
      if (f.mainImage)
        try {
          return Z(f.mainImage).width(600).format("webp").url();
        } catch {
          return "";
        }
      return "";
    },
    _ = o.useCallback((f) => {
      const b = f.slug;
      if (!b) return null;
      if (typeof b == "string") return b.trim() || null;
      if (typeof b == "object" && "current" in b) {
        const R = b.current;
        return R && R.trim() ? R : null;
      }
      return null;
    }, []),
    v = o.useCallback(
      (f) => {
        f !== e &&
          (r(!0),
          l(!0),
          setTimeout(() => {
            (s(f),
              r(!1),
              setTimeout(() => {
                l(!1);
              }, 700));
          }, 800));
      },
      [e],
    );
  return t.jsxs("div", {
    className: "page projects",
    children: [
      t.jsx(s0, {
        title: "Our work — interactive production for global brands",
        description:
          "Selected work from Studio Dialect — interactive retail, experiential, AR, WebGL, anamorphic billboards, and brand activations for global clients.",
        seo: h,
        siteSettings: d,
      }),
      t.jsx("h1", { className: "visually-hidden", children: "Projects" }),
      t.jsx("div", {
        className: "projects__filters",
        children: t.jsxs("div", {
          className: `projects__tags ${a ? "disabled" : ""}`,
          children: [
            t.jsx(Y, {
              baseDelay: 0.8,
              children: t.jsxs("button", {
                className: `projects__tag ${e === "all" ? "projects__tag--active" : ""}`,
                onClick: () => v("all"),
                children: ["[ all (", y.all, ") ]"],
              }),
            }),
            g.map((f, b) =>
              t.jsx(
                Y,
                {
                  baseDelay: b * 0.1 + 0.9,
                  children: t.jsxs(
                    "button",
                    {
                      className: `projects__tag ${e === f ? "projects__tag--active" : ""}`,
                      onClick: () => v(f),
                      children: [f, " (", y[f], ")"],
                    },
                    f + "_" + b,
                  ),
                },
                f + "_reveal",
              ),
            ),
          ],
        }),
      }),
      p.length > 0
        ? t.jsxs("div", {
            className: "projects__list",
            children: [
              p.map((f, b) => {
                const R = _(f),
                  N = (b % 3) * 100;
                return t.jsxs(
                  "article",
                  {
                    className: `project-item interactive ${n ? "project-item--exiting" : "project-item--entering"}`,
                    style: { "--stagger-delay": `${N}ms` },
                    "data-cursor-label": "View Project",
                    children: [
                      t.jsx("div", { className: "project-item__divider project-item__divider--top" }),
                      t.jsxs(f0, {
                        to: R ? `/projects/${R}` : "#",
                        style: { display: "block" },
                        children: [
                          t.jsx("div", {
                            className: "project-item__content",
                            children: t.jsxs("div", {
                              className: "project-item__text",
                              children: [
                                t.jsxs(q, {
                                  children: [
                                    t.jsxs("div", {
                                      className: "project-item__title",
                                      children: [
                                        t.jsx("h4", {
                                          className: "project-item__name",
                                          children: f.title || "Untitled Project",
                                        }),
                                        t.jsx("p", {
                                          className: "project-item__client",
                                          children: f.client || "Client Name",
                                        }),
                                      ],
                                    }),
                                    t.jsx("p", {
                                      className: "project-item__description",
                                      children: f.description || "Project description coming soon.",
                                    }),
                                  ],
                                }),
                                t.jsx(Y, {
                                  baseDelay: 0.4,
                                  children: t.jsx("div", {
                                    className: "project-item__link mobile",
                                    children: t.jsx(w0, { label: "VIEW PROJECT" }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          t.jsx("div", {
                            className: "project-item__gallery",
                            children: [0, 1, 2, 3].map((x) => {
                              const S = j(f, x);
                              return S
                                ? t.jsx(
                                    z0,
                                    {
                                      children: t.jsx(g0, {
                                        className: "project-item__reveal",
                                        baseDelayMS: b > 1 ? 0 : 500,
                                        delayMS: (b > 1 ? 0 : b * 200) + x * 100,
                                        reverse: n,
                                        children: t.jsx("div", {
                                          className: `project-item__image project-item__image--${x + 1}`,
                                          children: t.jsx("img", {
                                            src: S,
                                            alt: f.images?.[x]?.alt || `${f.title} - Image ${x + 1}`,
                                            loading: "lazy",
                                          }),
                                        }),
                                      }),
                                    },
                                    x,
                                  )
                                : null;
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  f._id + "-" + e,
                );
              }),
              t.jsx("div", { className: "project-item__divider project-item__divider--bottom" }),
            ],
          })
        : c
          ? t.jsx("div", { className: "projects__loading" })
          : t.jsx("div", { className: "projects__empty", children: "No projects found in this category." }),
    ],
  });
}
function oe({ data: e }) {
  const s = o.useMemo(() => JSON.stringify(e), [e]),
    n = o.useRef(`jsonld-${Math.random().toString(36).slice(2, 10)}`);
  return (
    Ye && V2(s),
    o.useLayoutEffect(() => {
      if (typeof document > "u") return;
      const r = n.current;
      let a = document.head.querySelector(`script[data-jsonld-id="${r}"]`);
      if (!a) {
        const l = Array.from(document.head.querySelectorAll('script[type="application/ld+json"]'));
        for (const i of l)
          if (!i.dataset.jsonldId && i.textContent === s) {
            ((i.dataset.jsonldId = r), (a = i));
            break;
          }
      }
      return (
        a ||
          ((a = document.createElement("script")),
          (a.type = "application/ld+json"),
          (a.dataset.jsonldId = r),
          document.head.appendChild(a)),
        a.textContent !== s && (a.textContent = s),
        () => {
          document.head.querySelector(`script[data-jsonld-id="${r}"]`)?.remove();
        }
      );
    }, [s]),
    null
  );
}
const $0 = `${ae}/#organization`,
  z7 = `${ae}/#website`,
  q7 = (e) => {
    const s = e?.socialLinks;
    return s
      ? ([s.instagram, s.twitter, s.linkedin, s.github, s.behance, s.dribbble, s.vimeo, s.youtube].filter(
          (n) => typeof n == "string" && n.length > 0,
        ) ?? [])
      : [];
  };
function W7(e) {
  const s = q7(e),
    n =
      e?.logo?.asset?.url ?? (e?.ogImage?.asset?.url ? `${e.ogImage.asset.url}?w=512&h=512&fit=crop&auto=format` : _e);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": $0,
    name: e?.title ?? G0,
    alternateName: G0,
    url: k0("/"),
    logo: n,
    description: e?.description ?? Ge,
    ...(e?.tagline ? { slogan: e.tagline } : {}),
    ...(e?.foundingYear ? { foundingDate: String(e.foundingYear) } : {}),
    ...(e?.address ? { address: { "@type": "PostalAddress", streetAddress: e.address.replace(/\n/g, ", ") } } : {}),
    ...(s.length > 0 ? { sameAs: s } : {}),
  };
}
function V7(e) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": z7,
    url: k0("/"),
    name: e?.title ?? s2,
    description: e?.description ?? Ge,
    publisher: { "@id": $0 },
    inLanguage: "en",
  };
}
function Ne(e) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: e.map((s, n) => ({ "@type": "ListItem", position: n + 1, name: s.name, item: k0(s.path) })),
  };
}
function a2(e) {
  const s = k0(`${e.pathPrefix}/${e.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${s}#creativework`,
    url: s,
    name: e.title,
    ...(e.description ? { description: e.description } : {}),
    ...(e.imageUrl
      ? { image: { "@type": "ImageObject", url: e.imageUrl, ...(e.imageAlt ? { caption: e.imageAlt } : {}) } }
      : {}),
    creator: { "@id": $0 },
    publisher: { "@id": $0 },
    ...(e.client ? { sourceOrganization: { "@type": "Organization", name: e.client } } : {}),
    ...(e.year ? { dateCreated: String(e.year) } : {}),
    ...(e.updatedAt ? { dateModified: e.updatedAt } : {}),
    ...(e.category && e.category.length > 0 ? { genre: e.category } : {}),
    ...(e.keywords && e.keywords.length > 0 ? { keywords: e.keywords.join(", ") } : {}),
    isAccessibleForFree: !0,
  };
}
function Y7(e) {
  const s = e.articleType ?? "TechArticle",
    n = k0(`/labs/${e.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": s,
    "@id": `${n}#article`,
    url: n,
    headline: e.title,
    ...(e.description ? { description: e.description } : {}),
    ...(e.imageUrl
      ? { image: [{ "@type": "ImageObject", url: e.imageUrl, ...(e.imageAlt ? { caption: e.imageAlt } : {}) }] }
      : { image: [_e] }),
    author: { "@id": $0 },
    publisher: { "@id": $0 },
    ...(e.publishedDate ? { datePublished: e.publishedDate } : {}),
    ...(e.updatedAt ? { dateModified: e.updatedAt } : {}),
    ...(e.keywords && e.keywords.length > 0 ? { keywords: e.keywords.join(", ") } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": n },
    inLanguage: "en",
  };
}
function G7(e) {
  const s = k0(`/capabilities/${e.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${s}#service`,
    url: s,
    name: e.title,
    ...(e.description ? { description: e.description } : {}),
    ...(e.imageUrl
      ? { image: { "@type": "ImageObject", url: e.imageUrl, ...(e.imageAlt ? { caption: e.imageAlt } : {}) } }
      : {}),
    provider: { "@id": $0 },
    ...(e.services && e.services.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: e.title,
            itemListElement: e.services.map((n) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: n.name,
                ...(n.description ? { description: n.description } : {}),
              },
            })),
          },
        }
      : {}),
  };
}
function X7(e) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: e.name,
    ...(e.description ? { description: e.description } : {}),
    ...(e.thumbnailUrl ? { thumbnailUrl: e.thumbnailUrl } : { thumbnailUrl: _e }),
    uploadDate: e.uploadDate ?? new Date().toISOString(),
    embedUrl: e.embedUrl,
    ...(e.contentUrl ? { contentUrl: e.contentUrl } : {}),
    ...(e.duration ? { duration: e.duration } : {}),
    publisher: { "@id": $0 },
  };
}
function Xe(e, s) {
  if (!e) return [];
  const n = [],
    r = (a) => {
      if (!(!a || typeof a != "object")) {
        typeof a.vimeoURL == "string" &&
          a.vimeoURL &&
          typeof a.videoTitle == "string" &&
          a.videoTitle &&
          n.push(
            X7({
              name: a.videoTitle,
              embedUrl: a.vimeoURL,
              thumbnailUrl: s.thumbnailUrl,
              uploadDate: s.uploadDate,
              contentUrl: s.contentUrl,
            }),
          );
        for (const l of ["image", "imageLeft", "imageRight", "largeImage", "smallImageTop", "smallImageBottom"])
          a[l] && r(a[l]);
      }
    };
  for (const a of e) r(a);
  return n;
}
function K7(e) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: e.map((s) => ({
      "@type": "Question",
      name: s.question,
      acceptedAnswer: { "@type": "Answer", text: s.answer },
    })),
  };
}
const N0 = {
    types: {
      image: ({ value: e }) => {
        const s = Z(e).width(1824).format("webp").url();
        return s ? t.jsx("img", { src: s, alt: "" }) : null;
      },
      youtube: ({ value: e }) => (e && e.url ? t.jsx(p0, { url: e.url }) : null),
    },
    marks: {
      link: ({ value: e, children: s }) => {
        const n = e?.href ?? "";
        if (!n) return t.jsx(t.Fragment, { children: s });
        if (/^(https?:|mailto:|tel:)/i.test(n)) {
          const a = /^https?:/i.test(n);
          return t.jsx("a", {
            href: n,
            className: "rich-text-link",
            ...(a ? { target: "_blank", rel: "noopener noreferrer" } : {}),
            children: s,
          });
        }
        return t.jsx(i0, { to: n, className: "rich-text-link", children: s });
      },
    },
    block: {
      normal: ({ children: e }) => t.jsx(q, { children: t.jsx("p", { children: e }) }),
      h1: ({ children: e }) => t.jsx("h1", { children: e }),
      h2: ({ children: e }) => t.jsx("h2", { children: e }),
      h3: ({ children: e }) => t.jsx("h3", { children: e }),
    },
  },
  Re = ({ src: e, alt: s, className: n }) => {
    const [r, a] = o.useState(!1),
      l = o.useRef(null);
    return (
      o.useEffect(() => {
        const i = l.current;
        i && i.complete && i.naturalWidth > 0 && a(!0);
      }, [e]),
      t.jsx(g0, {
        className: `reveal-image ${n || ""}`,
        baseDelayMS: 0,
        durationMS: 600,
        manualStart: !0,
        start: r,
        children: t.jsx("img", { ref: l, src: e, alt: s, onLoad: () => a(!0) }),
      })
    );
  };
function o2({ currentId: e, categories: s, targetType: n = "project", heading: r = "Related Projects" }) {
  const a = s?.filter(Boolean) ?? [],
    l = `
        *[_type == $type && _id != $id && count((category)[@ in $cats]) > 0]
        | order(year desc, _updatedAt desc)
        [0...3] {
            _id,
            title,
            slug,
            client,
            year,
            category,
            mainImage{ asset->{_id, url}, alt },
            "heroImageFallback": images[0]{ asset->{_id, url}, alt }
        }
    `,
    { data: i, isLoading: c } = u0({
      queryKey: ["relatedProjects", n, e, a.join(",")],
      queryFn: () => l0.fetch(l, { type: n, id: e, cats: a }),
      enabled: a.length > 0,
      staleTime: 1e3 * 60 * 10,
    });
  if (a.length === 0 || c || !i || i.length === 0) return null;
  const d = n === "caseStudy" ? "/case-study" : "/projects";
  return t.jsxs("aside", {
    className: "related-projects",
    "aria-labelledby": "related-projects-heading",
    children: [
      t.jsx("h2", { id: "related-projects-heading", className: "related-projects__heading", children: r }),
      t.jsx("ul", {
        className: "related-projects__grid",
        children: i.map((u) => {
          const h = u.mainImage?.asset ? u.mainImage : u.heroImageFallback?.asset ? u.heroImageFallback : null,
            m = h ? Z(h).width(1e3).height(625).fit("crop").auto("format").quality(80).url() : null,
            p = h?.alt ?? u.title,
            g = n === "caseStudy" ? "View Case Study" : "View Project";
          return t.jsx(
            "li",
            {
              className: "related-projects__item",
              children: t.jsxs(i0, {
                to: `${d}/${u.slug.current}`,
                className: "related-projects__link",
                "aria-label": `View ${u.title}${u.client ? ` for ${u.client}` : ""}`,
                "data-cursor-label": g,
                children: [
                  m &&
                    t.jsx(z0, {
                      children: t.jsx(g0, {
                        children: t.jsx("img", {
                          src: m,
                          alt: p,
                          loading: "lazy",
                          decoding: "async",
                          className: "related-projects__image",
                        }),
                      }),
                    }),
                  t.jsxs("div", {
                    className: "related-projects__meta",
                    children: [
                      u.client && t.jsx("span", { className: "related-projects__client", children: u.client }),
                      t.jsx("span", { className: "related-projects__title", children: u.title }),
                      u.year && t.jsx("span", { className: "related-projects__year", children: u.year }),
                    ],
                  }),
                ],
              }),
            },
            u._id,
          );
        }),
      }),
    ],
  });
}
const Ae = (e, s, n) => Math.min(n, Math.max(s, e));
function Z7({
  beforeUrl: e,
  beforeAlt: s,
  afterUrl: n,
  afterAlt: r,
  orientation: a = "horizontal",
  startPosition: l = 50,
  beforeLabel: i,
  afterLabel: c,
}) {
  const d = a === "vertical",
    u = o.useRef(null),
    [h, m] = o.useState(() => Ae(l, 0, 100)),
    [p, g] = o.useState(!1),
    y = o.useCallback(
      (N, x) => {
        const S = u.current;
        if (!S) return;
        const M = S.getBoundingClientRect(),
          D = d ? ((x - M.top) / M.height) * 100 : ((N - M.left) / M.width) * 100;
        m(Ae(D, 0, 100));
      },
      [d],
    ),
    j = o.useCallback(
      (N) => {
        (N.currentTarget.setPointerCapture?.(N.pointerId), g(!0), y(N.clientX, N.clientY));
      },
      [y],
    ),
    _ = o.useCallback(
      (N) => {
        p && y(N.clientX, N.clientY);
      },
      [p, y],
    ),
    v = o.useCallback(() => g(!1), []),
    f = o.useCallback(
      (N) => {
        const x = N.shiftKey ? 10 : 2;
        let S = null;
        switch (N.key) {
          case "ArrowLeft":
          case "ArrowUp":
            S = h - x;
            break;
          case "ArrowRight":
          case "ArrowDown":
            S = h + x;
            break;
          case "Home":
            S = 0;
            break;
          case "End":
            S = 100;
            break;
          default:
            return;
        }
        (N.preventDefault(), m(Ae(S, 0, 100)));
      },
      [h],
    ),
    b = d ? `inset(0 0 ${100 - h}% 0)` : `inset(0 ${100 - h}% 0 0)`,
    R = d ? { top: `${h}%` } : { left: `${h}%` },
    w = i || c ? `Reveal slider between ${i ?? "before"} and ${c ?? "after"}` : "Image comparison slider";
  return t.jsx("figure", {
    className: `compare-slider compare-slider--${a}`,
    children: t.jsxs("div", {
      ref: u,
      className: `compare-slider__viewport compare-slider__viewport--${a} ${p ? "is-dragging" : ""}`,
      onPointerDown: j,
      onPointerMove: _,
      onPointerUp: v,
      onPointerCancel: v,
      onLostPointerCapture: v,
      children: [
        t.jsx("img", { className: "compare-slider__sizer", src: e, alt: "", "aria-hidden": "true", draggable: !1 }),
        t.jsx("img", { className: "compare-slider__img", src: n, alt: r, draggable: !1 }),
        t.jsx("img", {
          className: "compare-slider__img compare-slider__img--front",
          src: e,
          alt: s,
          style: { clipPath: b },
          draggable: !1,
        }),
        i &&
          t.jsx("span", {
            className: "compare-slider__label compare-slider__label--before",
            "aria-hidden": "true",
            children: i,
          }),
        c &&
          t.jsx("span", {
            className: "compare-slider__label compare-slider__label--after",
            "aria-hidden": "true",
            children: c,
          }),
        t.jsxs("div", {
          className: "compare-slider__handle",
          style: R,
          role: "slider",
          tabIndex: 0,
          "aria-label": w,
          "aria-orientation": a,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Math.round(h),
          onKeyDown: f,
          children: [
            t.jsx("span", { className: "compare-slider__line", "aria-hidden": "true" }),
            t.jsx("span", { className: "compare-slider__grip", "aria-hidden": "true" }),
          ],
        }),
      ],
    }),
  });
}
function Ke({ value: e }) {
  const s = e.beforeImage,
    n = e.afterImage;
  if (!s?.asset || !n?.asset) return null;
  const r = Z(s).width(1600).auto("format").quality(80).url(),
    a = Z(n).width(1600).auto("format").quality(80).url();
  return t.jsx(Z7, {
    beforeUrl: r,
    beforeAlt: s.alt ?? "",
    afterUrl: a,
    afterAlt: n.alt ?? "",
    orientation: e.orientation ?? "horizontal",
    startPosition: e.startPosition ?? 50,
    beforeLabel: e.beforeLabel,
    afterLabel: e.afterLabel,
  });
}
const Q7 = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  slug,
  description,
  mainImage{ ..., asset->{_id, url} },
  images,
  "heroImageFallback": images[0]{ asset->{_id, url}, alt },
  category,
  year,
  client,
  link,
  content,
  services,
  collaborators,
  awards,
  seo{
    metaTitle,
    metaDescription,
    ogImage{ asset->{_id, url}, alt },
    noindex,
    canonicalOverride,
    keywords,
    articleType
  }
}`,
  J7 = () =>
    t.jsx("img", {
      style: { height: "0" },
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    }),
  C0 = ({ image: e, size: s }) =>
    e
      ? e.vimeoURL
        ? t.jsx(p0, { url: e.vimeoURL, aspectRatio: e.aspectRatio, hasAudio: e.hasAudio, title: e.videoTitle })
        : t.jsx(Re, { src: Z(e).width(s).format("webp").url(), alt: e.alt || "" })
      : t.jsx(J7, {}),
  e5 = ({ value: e }) =>
    t.jsx("div", {
      className: "text-left-row content-row",
      children: t.jsxs("div", {
        className: "text-left-row-content",
        children: [
          e.title && t.jsx("h4", { children: e.title }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  t5 = ({ value: e }) =>
    t.jsx("div", {
      className: "text-right-row content-row",
      children: t.jsxs("div", {
        className: "text-right-row-content",
        children: [
          e.title && t.jsx("h4", { children: e.title }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  n5 = ({ value: e }) =>
    t.jsx("div", { className: "one-image-row content-row", children: t.jsx(C0, { image: e.image, size: 1824 }) }),
  s5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "two-image-row content-row",
      children: [t.jsx(C0, { image: e.imageLeft, size: 912 }), t.jsx(C0, { image: e.imageRight, size: 912 })],
    }),
  r5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "bento-left-row content-row",
      children: [
        t.jsx("div", { className: "bento-left-large", children: t.jsx(C0, { image: e.largeImage, size: 912 }) }),
        t.jsxs("div", {
          className: "bento-left-small",
          children: [
            t.jsx(C0, { image: e.smallImageTop, size: 912 }),
            t.jsx(C0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
      ],
    }),
  a5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "bento-right-row content-row",
      children: [
        t.jsxs("div", {
          className: "bento-right-small",
          children: [
            t.jsx(C0, { image: e.smallImageTop, size: 912 }),
            t.jsx(C0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
        t.jsx("div", { className: "bento-right-large", children: t.jsx(C0, { image: e.largeImage, size: 912 }) }),
      ],
    }),
  o5 = ({ value: e }) =>
    t.jsx("div", {
      className: "project-content-blocks",
      children: e.map((s, n) => {
        switch (s._type) {
          case "textLeftRow":
            return t.jsx(e5, { value: s }, n);
          case "textRightRow":
            return t.jsx(t5, { value: s }, n);
          case "oneImageRow":
            return t.jsx(n5, { value: s }, n);
          case "twoImageRow":
            return t.jsx(s5, { value: s }, n);
          case "bentoLeftRow":
            return t.jsx(r5, { value: s }, n);
          case "bentoRightRow":
            return t.jsx(a5, { value: s }, n);
          case "compareSliderRow":
            return t.jsx("div", { className: "compare-slider-row content-row", children: t.jsx(Ke, { value: s }) }, n);
          default:
            return null;
        }
      }),
    });
function i5() {
  const { slug: e } = we(),
    { data: s } = d0(),
    { data: n, isLoading: r } = u0({
      queryKey: ["project", e],
      queryFn: () => l0.fetch(Q7, { slug: e }),
      enabled: !!e,
    });
  if (r) return t.jsx("div", { className: "project-page", children: t.jsx("div", { className: "project-loading" }) });
  if (!n)
    return t.jsxs("div", {
      className: "project-page",
      children: [
        t.jsx(s0, {
          title: "Project not found",
          description: "The project you're looking for could not be found.",
          siteSettings: s,
          seo: { noindex: !0 },
        }),
        t.jsxs("div", {
          className: "project-not-found",
          children: [
            t.jsx(o0, { text: "Project not found" }),
            t.jsx(i0, { to: "/projects", children: "Back to projects" }),
          ],
        }),
      ],
    });
  const a = n.services
      ? n.services
          .split(
            `
`,
          )
          .map((c) => c.trim())
      : [],
    l = n.collaborators
      ? n.collaborators
          .split(
            `
`,
          )
          .map((c) => c.trim())
      : [],
    i = n.awards
      ? n.awards
          .split(
            `
`,
          )
          .map((c) => c.trim())
      : [];
  return t.jsxs("div", {
    className: "page project-page",
    children: [
      t.jsx(s0, {
        title: n.title,
        description: n.description,
        client: n.client,
        heroImage: n.mainImage ?? n.heroImageFallback,
        seo: n.seo,
        siteSettings: s,
        ogType: "article",
      }),
      t.jsx(oe, {
        data: [
          a2({
            title: n.title,
            slug: n.slug.current,
            pathPrefix: "/projects",
            description: n.description,
            client: n.client,
            year: n.year,
            category: n.category,
            keywords: n.seo?.keywords,
            imageUrl: n.mainImage?.asset?.url ?? n.heroImageFallback?.asset?.url,
            imageAlt: n.mainImage?.alt ?? n.heroImageFallback?.alt,
            updatedAt: n._updatedAt,
          }),
          Ne([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: n.title, path: `/projects/${n.slug.current}` },
          ]),
          ...Xe(n.content, {
            thumbnailUrl: n.mainImage?.asset?.url ?? n.heroImageFallback?.asset?.url,
            uploadDate: n._updatedAt,
            contentUrl: k0(`/projects/${n.slug.current}`),
          }),
        ],
      }),
      t.jsx("div", {
        className: "project-hero",
        children: t.jsxs("div", {
          className: "project-hero-content",
          children: [
            t.jsx("div", { className: "project-client desktop", children: n.client || "Client Name" }),
            t.jsxs("div", {
              children: [
                t.jsx(o0, { text: n.title, className: "project-title" }),
                t.jsx("div", { className: "project-client mobile", children: n.client || "Client Name" }),
                t.jsxs("div", {
                  className: "project-tags",
                  children: [
                    n.category &&
                      n.category.map((c, d) =>
                        t.jsx("span", { className: "project-tag", children: c }, "category-" + d),
                      ),
                    n.year && t.jsx("span", { className: "project-tag", children: n.year }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      t.jsx("div", { className: "project-divider" }),
      t.jsx("div", { className: "project-content", children: n.content && t.jsx(o5, { value: n.content }) }),
      t.jsxs("div", {
        className: "project-info-footer",
        children: [
          n.services &&
            n.services.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h5", { className: "project-info-title", children: "Our Role" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, {
                    baseDelay: 0.4,
                    children: a.map((c, d) => t.jsx("p", { className: "UI_1", children: c }, d)),
                  }),
                }),
              ],
            }),
          n.collaborators &&
            n.collaborators.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h5", { className: "project-info-title", children: "With" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, {
                    baseDelay: 0.6,
                    children: l.map((c, d) =>
                      t.jsxs("p", { className: "UI_1", children: [c, d < l.length - 1 && t.jsx("br", {})] }, d),
                    ),
                  }),
                }),
              ],
            }),
          i &&
            i.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h5", { className: "project-info-title", children: "Awards" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, {
                    baseDelay: 0.6,
                    children: i.map((c, d) => t.jsx("p", { className: "UI_1", children: c }, d)),
                  }),
                }),
              ],
            }),
        ],
      }),
      t.jsx(o2, { currentId: n._id, categories: n.category, targetType: "project", heading: "More projects" }),
      t.jsx("section", {
        className: "project-back-link-section",
        children: t.jsx(Y, {
          className: "project-back-link arrow-link-reverse",
          children: t.jsx(w0, { to: "/projects", label: "Back to all projects" }),
        }),
      }),
    ],
  });
}
const l5 = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  slug,
  description,
  category,
  year,
  client,
  link,
  content,
  services,
  collaborators,
  awards,
  "heroImage": images[0]{
    asset->{_id, url},
    alt
  },
  seo{
    metaTitle,
    metaDescription,
    ogImage{ asset->{_id, url}, alt },
    noindex,
    canonicalOverride,
    keywords,
    articleType
  }
}`,
  c5 = () =>
    t.jsx("img", {
      style: { height: "0" },
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    }),
  A0 = ({ image: e, size: s }) =>
    e
      ? e.vimeoURL
        ? t.jsx(p0, { url: e.vimeoURL, aspectRatio: e.aspectRatio, hasAudio: e.hasAudio, title: e.videoTitle })
        : t.jsx(Re, { src: Z(e).width(s).format("webp").url(), alt: e.alt || "" })
      : t.jsx(c5, {}),
  d5 = ({ value: e }) =>
    t.jsx("div", {
      className: "text-left-row content-row",
      children: t.jsxs("div", {
        className: "text-left-row-content",
        children: [
          e.title && t.jsx("h4", { children: e.title }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  u5 = ({ value: e }) =>
    t.jsx("div", {
      className: "text-right-row content-row",
      children: t.jsxs("div", {
        className: "text-right-row-content",
        children: [
          e.title && t.jsx("h4", { children: e.title }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  h5 = ({ value: e }) =>
    t.jsx("div", { className: "one-image-row content-row", children: t.jsx(A0, { image: e.image, size: 1824 }) }),
  m5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "two-image-row content-row",
      children: [t.jsx(A0, { image: e.imageLeft, size: 912 }), t.jsx(A0, { image: e.imageRight, size: 912 })],
    }),
  f5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "bento-left-row content-row",
      children: [
        t.jsx("div", { className: "bento-left-large", children: t.jsx(A0, { image: e.largeImage, size: 912 }) }),
        t.jsxs("div", {
          className: "bento-left-small",
          children: [
            t.jsx(A0, { image: e.smallImageTop, size: 912 }),
            t.jsx(A0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
      ],
    }),
  p5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "bento-right-row content-row",
      children: [
        t.jsxs("div", {
          className: "bento-right-small",
          children: [
            t.jsx(A0, { image: e.smallImageTop, size: 912 }),
            t.jsx(A0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
        t.jsx("div", { className: "bento-right-large", children: t.jsx(A0, { image: e.largeImage, size: 912 }) }),
      ],
    }),
  g5 = ({ value: e }) =>
    t.jsx("div", {
      className: "project-content-blocks",
      children: e.map((s, n) => {
        switch (s._type) {
          case "textLeftRow":
            return t.jsx(d5, { value: s }, n);
          case "textRightRow":
            return t.jsx(u5, { value: s }, n);
          case "oneImageRow":
            return t.jsx(h5, { value: s }, n);
          case "twoImageRow":
            return t.jsx(m5, { value: s }, n);
          case "bentoLeftRow":
            return t.jsx(f5, { value: s }, n);
          case "bentoRightRow":
            return t.jsx(p5, { value: s }, n);
          case "compareSliderRow":
            return t.jsx("div", { className: "compare-slider-row content-row", children: t.jsx(Ke, { value: s }) }, n);
          default:
            return null;
        }
      }),
    });
function x5() {
  const { data: e } = d0(),
    { slug: s } = we(),
    { data: n, isLoading: r } = u0({
      queryKey: ["caseStudy", s],
      queryFn: () => l0.fetch(l5, { slug: s }),
      enabled: !!s,
    });
  if (r) return t.jsx("div", { className: "project-page", children: t.jsx("div", { className: "project-loading" }) });
  if (!n)
    return t.jsxs("div", {
      className: "project-page",
      children: [
        t.jsx(s0, {
          title: "Case study not found",
          description: "The case study you're looking for could not be found.",
          siteSettings: e,
          seo: { noindex: !0 },
        }),
        t.jsx("div", { className: "project-not-found", children: t.jsx(o0, { text: "Case Study not found" }) }),
      ],
    });
  const a = n.services
      ? n.services
          .split(
            `
`,
          )
          .map((c) => c.trim())
      : [],
    l = n.collaborators
      ? n.collaborators
          .split(
            `
`,
          )
          .map((c) => c.trim())
      : [],
    i = n.awards
      ? n.awards
          .split(
            `
`,
          )
          .map((c) => c.trim())
      : [];
  return t.jsxs("div", {
    className: "project-page",
    children: [
      t.jsx(s0, {
        title: n.title,
        description: n.description,
        client: n.client,
        heroImage: n.heroImage,
        seo: n.seo,
        siteSettings: e,
        ogType: "article",
      }),
      t.jsx(oe, {
        data: [
          a2({
            title: n.title,
            slug: n.slug.current,
            pathPrefix: "/case-study",
            description: n.description,
            client: n.client,
            year: n.year,
            category: n.category,
            keywords: n.seo?.keywords,
            imageUrl: n.heroImage?.asset?.url,
            imageAlt: n.heroImage?.alt,
            updatedAt: n._updatedAt,
          }),
          Ne([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: n.title, path: `/case-study/${n.slug.current}` },
          ]),
          ...Xe(n.content, {
            thumbnailUrl: n.heroImage?.asset?.url,
            uploadDate: n._updatedAt,
            contentUrl: k0(`/case-study/${n.slug.current}`),
          }),
        ],
      }),
      t.jsx("div", {
        className: "project-hero",
        children: t.jsxs("div", {
          className: "project-hero-content",
          children: [
            t.jsx("div", { className: "project-client desktop", children: n.client || "Client Name" }),
            t.jsxs("div", {
              children: [
                t.jsx(o0, { text: n.title, className: "project-title" }),
                t.jsx("div", { className: "project-client mobile", children: n.client || "Client Name" }),
                t.jsxs("div", {
                  className: "project-tags",
                  children: [
                    n.category &&
                      n.category.map((c, d) =>
                        t.jsx("span", { className: "project-tag", children: c }, "category-" + d),
                      ),
                    n.year && t.jsx("span", { className: "project-tag", children: n.year }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      t.jsx("div", { className: "project-divider" }),
      t.jsx("div", { className: "project-content", children: n.content && t.jsx(g5, { value: n.content }) }),
      t.jsxs("div", {
        className: "project-info-footer",
        children: [
          n.services &&
            n.services.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h3", { className: "project-info-title", children: "Our Role" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, { baseDelay: 0.4, children: a.map((c, d) => t.jsx("p", { children: c }, d)) }),
                }),
              ],
            }),
          n.collaborators &&
            n.collaborators.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h3", { className: "project-info-title", children: "With" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, {
                    baseDelay: 0.6,
                    children: l.map((c, d) => t.jsxs("p", { children: [c, d < l.length - 1 && t.jsx("br", {})] }, d)),
                  }),
                }),
              ],
            }),
          i &&
            i.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h3", { className: "project-info-title", children: "Awards" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, { baseDelay: 0.6, children: i.map((c, d) => t.jsx("p", { children: c }, d)) }),
                }),
              ],
            }),
        ],
      }),
      t.jsx(o2, { currentId: n._id, categories: n.category, targetType: "caseStudy", heading: "More case studies" }),
    ],
  });
}
function v5() {
  return t.jsx("div", {
    className: "coming-soon",
    children: t.jsxs("div", {
      className: "coming-soon__content",
      children: [
        t.jsx("h3", {
          className: "coming-soon__title",
          children: "PAGE COMING SOON. Have an idea you want to discuss? we can help.",
        }),
        t.jsx("a", {
          href: "mailto:hello@studiodialect.com",
          className: "coming-soon__email",
          children: "hello@studiodialect.com",
        }),
      ],
    }),
  });
}
function y5() {
  const { data: e } = d0();
  return t.jsxs("div", {
    className: "page products",
    children: [
      t.jsx(s0, {
        title: "Products",
        description: "Products and tools made by Studio Dialect. Coming soon.",
        seo: { noindex: !0 },
        siteSettings: e,
      }),
      t.jsx("h1", { className: "visually-hidden", children: "Products" }),
      t.jsx("section", { className: "body", children: t.jsx(v5, {}) }),
    ],
  });
}
const j5 = "ALWAYS CURIOUS. EXPLORE OUR EXPERIMENTS, RESEARCH AND DEVELOPMENT",
  w5 =
    "Experiments, research, and development from Studio Dialect — emerging technology explorations, technical write-ups, and creative R&D.";
function b5() {
  const { data: e, isLoading: s } = Z0(),
    { data: n } = d0(),
    { data: r } = u0({ queryKey: ["labsPage"], queryFn: () => l0.fetch(F2), staleTime: 1e3 * 60 * 30 }),
    a = e?.research,
    l = r?.heroTitle || j5,
    i = r?.emptyStateText || "No experiments published yet. Check back soon.";
  return t.jsxs("div", {
    className: "page research has-custom-cursor",
    children: [
      t.jsx(s0, { title: "Labs", description: r?.heroSubtitle || w5, seo: r?.seo, siteSettings: n }),
      t.jsxs("div", {
        className: "research__content",
        children: [
          t.jsx("div", {
            className: "research__hero",
            children: t.jsx(o0, { tagName: "h1", className: "research__title", baseDelay: 0.7, text: l }),
          }),
          t.jsx("div", {
            className: "research__grid",
            children: s
              ? t.jsx("div", { className: "research__loading" })
              : !a || a.length === 0
                ? t.jsx("p", { className: "research__empty", children: i })
                : a.map((c) =>
                    t.jsxs(
                      i0,
                      {
                        to: `/labs/${c.slug.current}`,
                        className: "research__card",
                        "data-cursor-label": "View Lab",
                        children: [
                          t.jsx("div", {
                            className: "research__card-visual",
                            children:
                              c.mainImage &&
                              c.mainImage.asset &&
                              t.jsx(g0, {
                                children: t.jsx(z0, {
                                  children: t.jsx("img", {
                                    src: Z(c.mainImage).width(600).format("webp").url(),
                                    alt: c.mainImage.alt || c.title,
                                    className: "research__card-image",
                                  }),
                                }),
                              }),
                          }),
                          t.jsx("div", {
                            className: "research__card-content",
                            children: t.jsxs("div", {
                              className: "research__card-title-wrapper",
                              children: [
                                t.jsx(Y, {
                                  children: t.jsx("h4", { className: "research__card-title", children: c.title }),
                                }),
                                c.summary &&
                                  t.jsx(q, {
                                    baseDelay: 0.2,
                                    children: t.jsx("p", { className: "research__card-client", children: c.summary }),
                                  }),
                                t.jsx(Y, { baseDelay: 0.4, children: t.jsx(w0, { label: "View Lab" }) }),
                              ],
                            }),
                          }),
                        ],
                      },
                      c._id,
                    ),
                  ),
          }),
        ],
      }),
    ],
  });
}
const _5 =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='8'%20viewBox='0%200%2021%208'%20fill='none'%3e%3cpath%20d='M16.296%207L19.416%203.868L16.308%200.76L17.904%200.76L21%203.88L17.88%206.988L16.296%207ZM0.887999%204.468L0.887999%203.28L20.148%203.28L20.148%204.468L0.887999%204.468Z'%20fill='%23242424'/%3e%3c/svg%3e";
function N5({ currentId: e, tags: s, heading: n = "More from Labs" }) {
  const r = s?.filter(Boolean) ?? [],
    a =
      r.length > 0
        ? `*[_type == "research" && _id != $id && count((tags)[@ in $tags]) > 0]
               | order(date desc)
               [0...3] {
                   _id, title, slug, summary, date, tags,
                   mainImage{ asset->{_id, url}, alt }
               }`
        : `*[_type == "research" && _id != $id]
               | order(date desc)
               [0...3] {
                   _id, title, slug, summary, date, tags,
                   mainImage{ asset->{_id, url}, alt }
               }`,
    { data: l, isLoading: i } = u0({
      queryKey: ["relatedLabs", e, r.join(",")],
      queryFn: () => l0.fetch(a, { id: e, tags: r }),
      staleTime: 1e3 * 60 * 10,
    });
  return i || !l || l.length === 0
    ? null
    : t.jsxs("aside", {
        className: "related-projects",
        "aria-labelledby": "related-labs-heading",
        children: [
          t.jsx("h2", { id: "related-labs-heading", className: "related-projects__heading", children: n }),
          t.jsx("ul", {
            className: "related-projects__grid",
            children: l.map((c) => {
              const d = c.mainImage
                  ? Z(c.mainImage).width(1e3).height(625).fit("crop").auto("format").quality(80).url()
                  : null,
                u = c.mainImage?.alt ?? c.title;
              return t.jsx(
                "li",
                {
                  className: "related-projects__item",
                  children: t.jsxs(i0, {
                    to: `/labs/${c.slug.current}`,
                    className: "related-projects__link",
                    "aria-label": `Read ${c.title} from Labs`,
                    "data-cursor-label": "View Lab",
                    children: [
                      d &&
                        t.jsx(g0, {
                          children: t.jsx(z0, {
                            children: t.jsx("img", {
                              src: d,
                              alt: u,
                              loading: "lazy",
                              decoding: "async",
                              className: "related-projects__image",
                            }),
                          }),
                        }),
                      t.jsxs("div", {
                        className: "related-projects__meta",
                        children: [
                          t.jsx("span", { className: "related-projects__title", children: c.title }),
                          c.summary && t.jsx("span", { className: "related-projects__client", children: c.summary }),
                        ],
                      }),
                    ],
                  }),
                },
                c._id,
              );
            }),
          }),
        ],
      });
}
const R5 = `*[_type == "research" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  slug,
  summary,
  content,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  date,
  tags,
  githubUrl,
  demoUrl,
  seo{
    metaTitle,
    metaDescription,
    ogImage{ asset->{_id, url}, alt },
    noindex,
    canonicalOverride,
    keywords,
    articleType
  }
}`,
  E5 = () =>
    t.jsx("img", {
      style: { height: "1px" },
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    }),
  M0 = ({ image: e, size: s }) =>
    e
      ? e.vimeoURL
        ? t.jsx(p0, { url: e.vimeoURL, aspectRatio: e.aspectRatio, hasAudio: e.hasAudio, title: e.videoTitle })
        : t.jsx(Re, { src: Z(e).width(s).format("webp").url(), alt: e.alt || "" })
      : t.jsx(E5, {}),
  S5 = ({ value: e }) =>
    t.jsx("div", {
      className: "labs-text-left-row labs-content-row",
      children: t.jsxs("div", {
        className: "labs-text-left-row-content",
        children: [
          e.title && t.jsx(Y, { children: t.jsx("h4", { children: e.title }) }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  L5 = ({ value: e }) =>
    t.jsx("div", {
      className: "labs-text-right-row labs-content-row",
      children: t.jsxs("div", {
        className: "labs-text-right-row-content",
        children: [
          e.title && t.jsx("h4", { children: e.title }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  I5 = ({ value: e }) =>
    t.jsx("div", {
      className: "labs-one-image-row labs-content-row",
      children: t.jsx(M0, { image: e.image, size: 1824 }),
    }),
  C5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "labs-two-image-row labs-content-row",
      children: [t.jsx(M0, { image: e.imageLeft, size: 912 }), t.jsx(M0, { image: e.imageRight, size: 912 })],
    }),
  A5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "labs-bento-left-row labs-content-row",
      children: [
        t.jsx("div", { className: "labs-bento-left-large", children: t.jsx(M0, { image: e.largeImage, size: 912 }) }),
        t.jsxs("div", {
          className: "labs-bento-left-small",
          children: [
            t.jsx(M0, { image: e.smallImageTop, size: 912 }),
            t.jsx(M0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
      ],
    }),
  M5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "labs-bento-right-row labs-content-row",
      children: [
        t.jsxs("div", {
          className: "labs-bento-right-small",
          children: [
            t.jsx(M0, { image: e.smallImageTop, size: 912 }),
            t.jsx(M0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
        t.jsx("div", { className: "labs-bento-right-large", children: t.jsx(M0, { image: e.largeImage, size: 912 }) }),
      ],
    }),
  T5 = ({ value: e }) =>
    t.jsx("div", {
      className: "labs-project-content-blocks",
      children: e.map((s, n) => {
        switch (s._type) {
          case "textLeftRow":
            return t.jsx(S5, { value: s }, n);
          case "textRightRow":
            return t.jsx(L5, { value: s }, n);
          case "oneImageRow":
            return t.jsx(I5, { value: s }, n);
          case "twoImageRow":
            return t.jsx(C5, { value: s }, n);
          case "bentoLeftRow":
            return t.jsx(A5, { value: s }, n);
          case "bentoRightRow":
            return t.jsx(M5, { value: s }, n);
          case "compareSliderRow":
            return t.jsx("div", { className: "compare-slider-row content-row", children: t.jsx(Ke, { value: s }) }, n);
          default:
            return null;
        }
      }),
    });
function P5() {
  const { slug: e } = we(),
    { data: s } = d0(),
    { data: n, isLoading: r } = u0({
      queryKey: ["labs-project", e],
      queryFn: () => l0.fetch(R5, { slug: e }),
      enabled: !!e,
    });
  return r
    ? t.jsx("div", {
        className: "labs-project has-custom-cursor",
        children: t.jsx("div", { className: "labs-project__loading" }),
      })
    : n
      ? (n.content &&
          n.content.forEach((a) => {
            a._type === "image" && a.asset;
          }),
        t.jsxs("div", {
          className: "page labs-project has-custom-cursor",
          children: [
            t.jsx(s0, {
              title: n.title,
              description: n.summary,
              heroImage: n.mainImage,
              seo: n.seo,
              siteSettings: s,
              ogType: "article",
            }),
            t.jsx(oe, {
              data: [
                Y7({
                  title: n.title,
                  slug: n.slug.current,
                  description: n.summary,
                  imageUrl: n.mainImage?.asset?.url,
                  imageAlt: n.mainImage?.alt,
                  publishedDate: n.date,
                  updatedAt: n._updatedAt,
                  keywords: n.seo?.keywords ?? n.tags,
                  articleType: n.seo?.articleType,
                }),
                Ne([
                  { name: "Home", path: "/" },
                  { name: "Labs", path: "/labs" },
                  { name: n.title, path: `/labs/${n.slug.current}` },
                ]),
                ...Xe(n.content, {
                  thumbnailUrl: n.mainImage?.asset?.url,
                  uploadDate: n.date ?? n._updatedAt,
                  contentUrl: k0(`/labs/${n.slug.current}`),
                }),
              ],
            }),
            t.jsxs(i0, {
              to: "/labs",
              className: "labs-project__back interactive",
              children: [
                t.jsx("span", { className: "labs-project__back-bracket", children: "[" }),
                t.jsx("span", { className: "labs-project__back-text", children: "back" }),
                t.jsx("span", { className: "labs-project__back-bracket", children: "]" }),
              ],
            }),
            t.jsx("section", {
              className: "labs-project__content-section",
              children: n.content && n.content.length > 0 && t.jsx(T5, { value: n.content }),
            }),
            (n.githubUrl || n.demoUrl) &&
              t.jsx(Y, {
                children: t.jsxs("a", {
                  href: n.githubUrl || n.demoUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "labs-project__full-project interactive",
                  children: [
                    t.jsx("span", {
                      className: "labs-project__full-project-text",
                      children: n.githubUrl ? "view on github" : "full project",
                    }),
                    t.jsx("img", { src: _5, alt: "", className: "labs-project__full-project-arrow" }),
                  ],
                }),
              }),
            t.jsx(N5, { currentId: n._id, tags: n.tags }),
          ],
        }))
      : t.jsxs("div", {
          className: "labs-project has-custom-cursor",
          children: [
            t.jsx(s0, {
              title: "Lab not found",
              description: "The Labs entry you're looking for could not be found.",
              siteSettings: s,
              seo: { noindex: !0 },
            }),
            t.jsxs("div", {
              className: "labs-project__not-found",
              children: [
                t.jsx("h1", { children: "Project not found" }),
                t.jsx(i0, { to: "/labs", children: "Back to Labs" }),
              ],
            }),
          ],
        });
}
const k5 = Q1(),
  $5 = {
    0: "CLEAR SKY",
    1: "MAINLY CLEAR",
    2: "PARTLY CLOUDY",
    3: "OVERCAST",
    45: "FOG",
    48: "DEPOSITING RIME FOG",
    51: "LIGHT DRIZZLE",
    53: "MODERATE DRIZZLE",
    55: "DENSE DRIZZLE",
    56: "LIGHT FREEZING DRIZZLE",
    57: "DENSE FREEZING DRIZZLE",
    61: "SLIGHT RAIN",
    63: "MODERATE RAIN",
    65: "HEAVY RAIN",
    66: "LIGHT FREEZING RAIN",
    67: "HEAVY FREEZING RAIN",
    71: "SLIGHT SNOW FALL",
    73: "MODERATE SNOW FALL",
    75: "HEAVY SNOW FALL",
    77: "SNOW GRAINS",
    80: "SLIGHT RAIN SHOWERS",
    81: "MODERATE RAIN SHOWERS",
    82: "VIOLENT RAIN SHOWERS",
    85: "SLIGHT SNOW SHOWERS",
    86: "HEAVY SNOW SHOWERS",
    95: "THUNDERSTORM",
    96: "THUNDERSTORM WITH SLIGHT HAIL",
    99: "THUNDERSTORM WITH HEAVY HAIL",
  },
  D5 = {
    clear: ["0", "1"],
    overcast: ["2", "3"],
    fog: ["45", "48"],
    drizzle: ["51", "53", "55", "56", "57"],
    rain: ["61", "63", "65", "66", "67", "80", "81", "82"],
    snow: ["71", "73", "75", "77", "85", "86"],
    thunderstorm: ["95", "96", "99"],
  },
  O5 = async (e, s) => {
    const n = `https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${s}&current=temperature_2m,weather_code&temperature_unit=celsius`;
    try {
      const r = await fetch(n);
      if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
      const a = await r.json(),
        l = Math.round(a.current.temperature_2m),
        i = a.current.weather_code,
        c = $5[i] || "UNKNOWN";
      return { temperature: l, code: i.toString(), description: c };
    } catch (r) {
      return (
        console.error("Failed to fetch weather data:", r),
        { temperature: void 0, code: "51", description: "DRIZZLE" }
      );
    }
  },
  U5 = {
    emailTitle: `hello@
studiodialect.com`,
    subheading: "let's create the new & next",
    hqLabel: "dialect hq",
    currentTime: !0,
    address: `73 Tib St,
Manchester,
M4 1LS`,
    internalLinks: [
      { label: "home", url: "/" },
      { label: "about us", url: "/studio" },
      { label: "projects", url: "/projects" },
      { label: "products", url: "/products" },
      { label: "contact", url: "/contact" },
      { label: "easter egg", url: "/easter-egg" },
      { label: "privacy policy", url: "/privacy" },
    ],
    externalLinks: [
      { label: "Instagram", url: "https://instagram.com/studiodialect" },
      { label: "x", url: "https://x.com/studiodialect" },
      { label: "linkedin", url: "https://linkedin.com/company/studiodialect" },
    ],
    weatherVideos: {
      clear: "",
      overcast: "",
      drizzle: "",
      rain: "",
      fog: "",
      snow: "",
      thunderstorm: "",
      clearNight: "",
      overcastNight: "",
      drizzleNight: "",
      rainNight: "",
      fogNight: "",
      snowNight: "",
      thunderstormNight: "",
    },
  };
function w1() {
  return new Date().toLocaleString("en-GB", {
    hour: "2-digit",
    hour12: !1,
    minute: "2-digit",
    timeZone: "Europe/London",
  });
}
function F5() {
  const s = parseInt(new Date().toLocaleString("en-GB", { hour: "2-digit", hour12: !1, timeZone: "Europe/London" }));
  return s >= 18 || s < 9;
}
function B5({ lat: e = 53.48468225351311, lon: s = -2.233507549908473 }) {
  const { data: n } = d0(),
    [r, a] = o.useState(w1()),
    { data: l } = Z0(),
    i = l?.contactPage,
    { data: c } = u0({
      queryKey: ["contact-weather", e, s],
      queryFn: () => O5(e, s),
      staleTime: 1e3 * 60 * 10,
      enabled: Number.isFinite(e) && Number.isFinite(s),
    }),
    d = i || U5,
    u = c && c?.temperature !== void 0 ? `${c.temperature}°C ` : "",
    h = c?.description ?? "DRIZZLE",
    m = `${u}${h}`,
    p = c?.code || "51";
  o.useEffect(() => {
    if (!d.currentTime) return;
    const v = () => {
      a(w1());
    };
    v();
    const f = setInterval(v, 6e4);
    return () => clearInterval(f);
  }, [d.currentTime]);
  const g = (() => {
      for (const [v, f] of Object.entries(D5)) {
        const b = F5() ? `${v}Night` : v;
        if (f.includes(p)) {
          let R = d.weatherVideos?.[b];
          return (R || (R = d.weatherVideos?.[v]), R);
        }
      }
      return d.weatherVideos?.overcast;
    })(),
    y = d.address
      ? d.address.split(`
`)
      : [],
    [j, _] = o.useState("Copy Email");
  return t.jsxs("div", {
    className: "page contact",
    children: [
      t.jsx(s0, {
        title: "Contact",
        description: "Get in touch with Studio Dialect. Email us about briefs, partnerships, or project enquiries.",
        seo: d.seo,
        siteSettings: n,
      }),
      t.jsx("h1", { className: "visually-hidden", children: "Contact Studio Dialect" }),
      t.jsxs("div", {
        className: "contact__container",
        children: [
          t.jsx("div", {
            className: "contact__hero",
            children: t.jsxs("div", {
              className: "contact__hero-content",
              children: [
                t.jsx("a", {
                  href: `mailto:${d.emailTitle
                    .split(
                      `
`,
                    )
                    .join("")
                    .toLowerCase()}`,
                  "data-cursor-label": j,
                  onClick: (v) => {
                    if (k5) return !0;
                    (v.preventDefault(),
                      navigator.clipboard.writeText(
                        d.emailTitle
                          .split(
                            `
`,
                          )
                          .join("")
                          .toLowerCase(),
                      ),
                      _("Copied"));
                  },
                  onPointerLeave: () => {
                    _("Copy Email");
                  },
                  rel: "noopener noreferrer",
                  className: "interactive",
                  children: t.jsx(o0, {
                    tagName: "h2",
                    baseDelay: 0.7,
                    text: d.emailTitle,
                    className: "contact__email",
                  }),
                }),
                t.jsx(q, {
                  noPulse: !0,
                  children: t.jsx("h4", { className: "contact__subheading", children: d.subheading }),
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "contact__main",
            children: [
              t.jsxs("div", {
                className: "contact__links-section",
                children: [
                  d.address &&
                    t.jsxs("div", {
                      className: "contact__link-group",
                      children: [
                        t.jsx(q, { children: t.jsx("h5", { className: "contact__link-title", children: "FIND US" }) }),
                        t.jsx(Y, {
                          baseDelay: 0.4,
                          children: t.jsx("div", {
                            className: "UI_1 contact__address",
                            children: y.map((v, f) =>
                              t.jsxs("span", { children: [v, f < y.length - 1 && t.jsx("br", {})] }, f),
                            ),
                          }),
                        }),
                      ],
                    }),
                  d.internalLinks &&
                    d.internalLinks.length > 0 &&
                    t.jsxs("div", {
                      className: "contact__link-group",
                      children: [
                        t.jsx(q, { children: t.jsx("h5", { className: "contact__link-title", children: "INTERNAL" }) }),
                        t.jsx("div", {
                          className: "UI_1 contact__link-list",
                          children: t.jsx(Y, {
                            baseDelay: 0.6,
                            children: d.internalLinks.map((v, f) =>
                              t.jsx(
                                "p",
                                { children: t.jsx(i0, { to: v.url, className: "interactive", children: v.label }) },
                                f,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                  d.externalLinks &&
                    d.externalLinks.length > 0 &&
                    t.jsxs("div", {
                      className: "contact__link-group",
                      children: [
                        t.jsx(q, { children: t.jsx("h5", { className: "contact__link-title", children: "EXTERNAL" }) }),
                        t.jsx("div", {
                          className: "UI_1 contact__link-list",
                          children: t.jsx(Y, {
                            baseDelay: 0.8,
                            children: d.externalLinks.map((v, f) =>
                              t.jsx(
                                "p",
                                {
                                  children: t.jsx("a", {
                                    href: v.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "interactive",
                                    children: v.label,
                                  }),
                                },
                                f,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              t.jsx("div", {
                className: "contact__image-section",
                children: t.jsxs("div", {
                  className: "contact__hq-info-wrapper",
                  children: [
                    c &&
                      t.jsx(Y, {
                        baseDelay: 1.6,
                        children: t.jsxs("div", {
                          className: "UI_1 contact__hq-info",
                          children: [d.hqLabel, t.jsx("br", {}), t.jsx("br", {}), `time : ${r}`, t.jsx("br", {}), m],
                        }),
                      }),
                    t.jsx("div", {
                      className: "contact__weather-image-container",
                      children:
                        c &&
                        g &&
                        t.jsx(p0, {
                          url: g,
                          aspectRatio: 1,
                          alwaysShow: !1,
                          forceAspectRatio: !0,
                          className: `contact__weather-image ${h}`,
                        }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          t.jsxs("div", {
            className: "contact__footer",
            children: [
              t.jsx("span", { className: "contact__footer-logo" }),
              t.jsx("span", {
                className: "contact__footer-text",
                children: "© Studio Dialect 2025 all rights reserved",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const H5 = `*[_type == "privacyPolicy"][0] {
  _id,
  content,
  services,
  collaborators,
  awards,
  seo{
    metaTitle,
    metaDescription,
    ogImage{ asset->{_id, url}, alt },
    noindex,
    canonicalOverride,
    keywords
  }
}`,
  z5 = () =>
    t.jsx("img", {
      style: { height: "0" },
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    }),
  T0 = ({ image: e, size: s }) =>
    e
      ? e.vimeoURL
        ? t.jsx(p0, { url: e.vimeoURL, aspectRatio: e.aspectRatio, hasAudio: e.hasAudio, title: e.videoTitle })
        : t.jsx(Re, { src: Z(e).width(s).format("webp").url(), alt: e.alt || "" })
      : t.jsx(z5, {}),
  q5 = ({ value: e }) =>
    t.jsx("div", {
      className: "text-left-row content-row",
      children: t.jsxs("div", {
        className: "text-left-row-content",
        children: [
          e.title && t.jsx("h4", { children: e.title }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  W5 = ({ value: e }) =>
    t.jsx("div", {
      className: "text-right-row content-row",
      children: t.jsxs("div", {
        className: "text-right-row-content",
        children: [
          e.title && t.jsx("h4", { children: e.title }),
          e.body && t.jsx(b0, { value: e.body, components: N0 }),
        ],
      }),
    }),
  V5 = ({ value: e }) =>
    t.jsx("div", { className: "one-image-row content-row", children: t.jsx(T0, { image: e.image, size: 1824 }) }),
  Y5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "two-image-row content-row",
      children: [t.jsx(T0, { image: e.imageLeft, size: 912 }), t.jsx(T0, { image: e.imageRight, size: 912 })],
    }),
  G5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "bento-left-row content-row",
      children: [
        t.jsx("div", { className: "bento-left-large", children: t.jsx(T0, { image: e.largeImage, size: 912 }) }),
        t.jsxs("div", {
          className: "bento-left-small",
          children: [
            t.jsx(T0, { image: e.smallImageTop, size: 912 }),
            t.jsx(T0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
      ],
    }),
  X5 = ({ value: e }) =>
    t.jsxs("div", {
      className: "bento-right-row content-row",
      children: [
        t.jsxs("div", {
          className: "bento-right-small",
          children: [
            t.jsx(T0, { image: e.smallImageTop, size: 912 }),
            t.jsx(T0, { image: e.smallImageBottom, size: 912 }),
          ],
        }),
        t.jsx("div", { className: "bento-right-large", children: t.jsx(T0, { image: e.largeImage, size: 912 }) }),
      ],
    }),
  K5 = ({ value: e }) =>
    t.jsx("div", {
      className: "project-content-blocks",
      children: e.map((s, n) => {
        switch (s._type) {
          case "textLeftRow":
            return t.jsx(q5, { value: s }, n);
          case "textRightRow":
            return t.jsx(W5, { value: s }, n);
          case "oneImageRow":
            return t.jsx(V5, { value: s }, n);
          case "twoImageRow":
            return t.jsx(Y5, { value: s }, n);
          case "bentoLeftRow":
            return t.jsx(G5, { value: s }, n);
          case "bentoRightRow":
            return t.jsx(X5, { value: s }, n);
          default:
            return null;
        }
      }),
    });
function Z5() {
  const { data: e } = d0(),
    { data: s, isLoading: n } = u0({ queryKey: ["privacyPolicy"], queryFn: () => l0.fetch(H5) });
  if (n) return t.jsx("div", { className: "project-page", children: t.jsx("div", { className: "project-loading" }) });
  if (!s)
    return t.jsx("div", {
      className: "project-page",
      children: t.jsx("div", {
        className: "project-not-found",
        children: t.jsx(o0, { text: "Privacy Policy not found" }),
      }),
    });
  const r = s.services
      ? s.services
          .split(
            `
`,
          )
          .map((i) => i.trim())
      : [],
    a = s.collaborators
      ? s.collaborators
          .split(
            `
`,
          )
          .map((i) => i.trim())
      : [],
    l = s.awards
      ? s.awards
          .split(
            `
`,
          )
          .map((i) => i.trim())
      : [];
  return t.jsxs("div", {
    className: "page project-page",
    children: [
      t.jsx(s0, {
        title: "Privacy Policy",
        description: "Studio Dialect's privacy policy — how we handle your data.",
        seo: s.seo,
        siteSettings: e,
      }),
      t.jsx("h1", { className: "visually-hidden", children: "Privacy Policy" }),
      t.jsx("div", {
        className: "project-hero",
        children: t.jsxs("div", {
          className: "project-hero-content",
          children: [
            t.jsx("div", { className: "project-client desktop", children: "Privacy Policy" }),
            t.jsxs("div", {
              children: [
                t.jsx("div", { className: "project-client mobile", children: "Privacy Policy" }),
                t.jsx("div", {
                  className: "project-tags",
                  children: t.jsx("span", { className: "project-tag", children: "2025" }),
                }),
              ],
            }),
          ],
        }),
      }),
      t.jsx("div", { className: "project-divider" }),
      t.jsx("div", { className: "project-content", children: s.content && t.jsx(K5, { value: s.content }) }),
      t.jsxs("div", {
        className: "project-info-footer",
        children: [
          s.services &&
            s.services.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h3", { className: "project-info-title", children: "Our Role" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, { baseDelay: 0.4, children: r.map((i, c) => t.jsx("p", { children: i }, c)) }),
                }),
              ],
            }),
          s.collaborators &&
            s.collaborators.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h3", { className: "project-info-title", children: "With" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, {
                    baseDelay: 0.6,
                    children: a.map((i, c) => t.jsxs("p", { children: [i, c < a.length - 1 && t.jsx("br", {})] }, c)),
                  }),
                }),
              ],
            }),
          l &&
            l.length > 0 &&
            t.jsxs("div", {
              className: "project-info-section",
              children: [
                t.jsx(q, { children: t.jsx("h3", { className: "project-info-title", children: "Awards" }) }),
                t.jsx("div", {
                  className: "project-info-content",
                  children: t.jsx(q, { baseDelay: 0.6, children: l.map((i, c) => t.jsx("p", { children: i }, c)) }),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
const Q5 = () => {
  const e = o.useRef(null),
    [s, n] = o.useState({ player: 0, ai: 0 }),
    r = o.useRef({
      paddle: { y: 0, height: 100, width: 10, speed: 12, isExploding: !1, impactOffset: 0 },
      ai: { y: 0, height: 100, width: 10, speed: 12, isExploding: !1, impactOffset: 0 },
      ball: { x: 0, y: 0, dx: 4, dy: 4, size: 16, speedMultiplier: 1, prevX: 0 },
      keysPressed: new Set(),
      animationId: 0,
      canvasWidth: 0,
      canvasHeight: 0,
      pointerY: null,
    }),
    a = o.useRef(null),
    l = o.useRef(null),
    i = o.useRef(null);
  o.useEffect(() => {
    if (!e.current || !a.current || !l.current || !i.current) return;
    const d = e.current,
      u = r.current,
      h = () => {
        const w = d.offsetWidth,
          N = d.offsetHeight,
          x = w / (u.canvasWidth || w),
          S = N / (u.canvasHeight || N);
        ((u.canvasWidth = w),
          (u.canvasHeight = N),
          (u.paddle.y = Math.min(u.paddle.y * S, N - u.paddle.height)),
          (u.ai.y = Math.min(u.ai.y * S, N - u.ai.height)),
          (u.ball.x = u.ball.x * x),
          (u.ball.y = u.ball.y * S),
          (u.ball.prevX = u.ball.prevX * x));
      };
    h();
    const m = a.current,
      p = l.current,
      g = i.current,
      y = (w) => {
        (w.key === "w" || w.key === "W" || w.key === "s" || w.key === "S") &&
          (w.preventDefault(), u.keysPressed.add(w.key.toLowerCase()), (u.pointerY = null));
      },
      j = (w) => {
        u.keysPressed.delete(w.key.toLowerCase());
      };
    (window.addEventListener("keydown", y), window.addEventListener("keyup", j), window.addEventListener("resize", h));
    const _ = (w) => {
        w.preventDefault();
        const N = d.getBoundingClientRect();
        window.innerWidth < 768 ? (u.pointerY = w.clientX - N.left) : (u.pointerY = w.clientY - N.top);
      },
      v = () => {
        u.pointerY = null;
      },
      f = (w) => {
        w.preventDefault();
      };
    (d.addEventListener("pointerdown", f),
      d.addEventListener("pointermove", _),
      d.addEventListener("pointerleave", v),
      d.addEventListener("pointerup", v),
      d.addEventListener("pointercancel", v));
    const b = () => {
        const { paddle: w, ai: N, ball: x, keysPressed: S, canvasWidth: M, canvasHeight: D, pointerY: C } = u;
        if (C !== null) {
          const T = C - w.height / 2;
          w.y = Math.max(0, Math.min(D - w.height, T));
        }
        (S.has("w") && (w.y = Math.max(0, w.y - w.speed)), S.has("s") && (w.y = Math.min(D - w.height, w.y + w.speed)));
        const I = N.y + N.height / 2,
          E = x.y + x.size / 2;
        if (
          (E < I
            ? (N.y -= Math.min(N.speed * (C ? 1 : 0.8), I - E))
            : E > I && (N.y += Math.min(N.speed * (C ? 1 : 0.8), E - I)),
          (N.y = Math.max(0, Math.min(D - N.height, N.y))),
          (x.prevX = x.x),
          (x.x += x.dx * x.speedMultiplier),
          (x.y += x.dy * x.speedMultiplier),
          x.y <= 0
            ? ((x.y = 0), (x.dy = Math.abs(x.dy)))
            : x.y + x.size >= D && ((x.y = D - x.size), (x.dy = -Math.abs(x.dy))),
          x.x + x.size < 0
            ? w.isExploding ||
              ((w.isExploding = !0),
              (m.style.transform = `scale(${Math.random() * 0.5 + 1.5}) rotate(${Math.random() * 360}deg)`),
              (m.style.opacity = "0"),
              (m.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-in"),
              setTimeout(() => {
                m.style.transform = "scale(1) rotate(0deg)";
              }, 300),
              setTimeout(() => {
                (n((T) => ({ ...T, ai: T.ai + 1 })), (w.isExploding = !1), (m.style.opacity = "1"), R());
              }, 700))
            : x.x > M &&
              (N.isExploding ||
                ((N.isExploding = !0),
                (p.style.transform = `scale(${Math.random() * 0.5 + 1.5}) rotate(-${Math.random() * 360}deg)`),
                (p.style.opacity = "0"),
                (p.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-in"),
                setTimeout(() => {
                  p.style.transform = "scale(1) rotate(0deg)";
                }, 300),
                setTimeout(() => {
                  (n((T) => ({ ...T, player: T.player + 1 })), (N.isExploding = !1), (p.style.opacity = "1"), R());
                }, 700))),
          !w.isExploding &&
            x.dx < 0 &&
            x.prevX >= w.width &&
            x.x <= w.width &&
            x.y + x.size >= w.y &&
            x.y <= w.y + w.height)
        ) {
          const T = Math.hypot(x.dx, x.dy),
            P = x.dx,
            O = x.dy;
          ((x.x = w.width), (x.dx = Math.abs(x.dx)));
          const A = (x.y - w.y) / w.height;
          ((x.dy = (A - 0.5) * 8), (x.speedMultiplier = x.speedMultiplier * 1.25), (w.impactOffset = -3 * T));
          const L = (A - 0.5) * 20;
          ((m.style.transform = `translate(${-15 * P}px, ${-15 * O}px) rotate(${w.impactOffset * L}deg)`),
            setTimeout(() => {
              (w.isExploding || (m.style.transform = "translateX(0) rotate(0deg)"), (w.impactOffset = 0));
            }, 50));
        }
        if (
          !N.isExploding &&
          x.dx > 0 &&
          x.prevX + x.size <= M - N.width &&
          x.x + x.size >= M - N.width &&
          x.y + x.size >= N.y &&
          x.y <= N.y + N.height
        ) {
          const T = Math.hypot(x.dx, x.dy),
            P = x.dx,
            O = x.dy;
          ((x.x = M - N.width - x.size), (x.dx = -Math.abs(x.dx)));
          const A = (x.y - N.y) / N.height;
          ((x.dy = (A - 0.5) * 8), (x.speedMultiplier = x.speedMultiplier * 1.25), (N.impactOffset = 3 * T));
          const L = (A - 0.5) * 20;
          ((p.style.transform = `translate(${-15 * P}px, ${-15 * O}px) rotate(${N.impactOffset * L}deg)`),
            setTimeout(() => {
              (N.isExploding || (p.style.transform = "translateX(0) rotate(0deg)"), (N.impactOffset = 0));
            }, 50));
        }
        const $ = "cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        ((m.style.top = `${w.y}px`),
          (m.style.left = "0px"),
          (m.style.transformOrigin = "5px 50px"),
          w.isExploding || (m.style.transition = "opacity 0.1s, transform 0.25s " + $),
          (p.style.top = `${N.y}px`),
          (p.style.right = "0px"),
          (p.style.transformOrigin = "5px 50px"),
          N.isExploding || (p.style.transition = "opacity 0.1s, transform 0.25s " + $),
          (g.style.left = `${x.x}px`),
          (g.style.top = `${x.y}px`),
          (u.animationId = requestAnimationFrame(b)));
      },
      R = () => {
        const { ball: w, canvasWidth: N, canvasHeight: x } = u;
        ((w.x = N / 2),
          (w.y = x / 2),
          (w.prevX = w.x),
          (w.dx = (Math.random() > 0.5 ? 1 : -1) * 4),
          (w.dy = (Math.random() - 0.5) * 6),
          (w.speedMultiplier = 1));
      };
    return (
      (u.animationId = requestAnimationFrame(b)),
      () => {
        (window.removeEventListener("keydown", y),
          window.removeEventListener("keyup", j),
          window.removeEventListener("resize", h),
          d.removeEventListener("pointerdown", f),
          d.removeEventListener("pointermove", _),
          d.removeEventListener("pointerleave", v),
          d.removeEventListener("pointerup", v),
          d.removeEventListener("pointercancel", v),
          cancelAnimationFrame(u.animationId));
      }
    );
  }, []);
  const c = (d) => {
    const u = {
      0: ["@@@", "@ @", "@ @", "@ @", "@@@"],
      1: [" @ ", "@@ ", " @ ", " @ ", "@@@"],
      2: ["@@@", "  @", "@@@", "@  ", "@@@"],
      3: ["@@@", "  @", "@@@", "  @", "@@@"],
      4: ["@ @", "@ @", "@@@", "  @", "  @"],
      5: ["@@@", "@  ", "@@@", "  @", "@@@"],
      6: ["@@@", "@  ", "@@@", "@ @", "@@@"],
      7: ["@@@", "  @", " @ ", " @ ", " @ "],
      8: ["@@@", "@ @", "@@@", "@ @", "@@@"],
      9: ["@@@", "@ @", "@@@", "  @", "@@@"],
    };
    return u[d] || u[0];
  };
  return t.jsxs("div", {
    className: "page game",
    children: [
      t.jsx(s0, { title: "Easter Egg", description: "A surprise from Studio Dialect.", seo: { noindex: !0 } }),
      t.jsxs("div", {
        className: "game-container",
        children: [
          t.jsx("div", {
            className: "game-border game-border-top",
            children: Array.from({ length: 45 }).map((d, u) =>
              t.jsx("span", { className: "border-symbol", children: "@" }, u),
            ),
          }),
          t.jsxs("div", {
            className: "game-canvas",
            ref: e,
            style: { touchAction: "none" },
            children: [
              t.jsx("div", {
                className: "center-line",
                children: Array.from({ length: 19 }).map((d, u) =>
                  t.jsx("span", { className: "center-symbol", children: "@" }, u),
                ),
              }),
              t.jsx("div", { ref: a, className: "paddle", style: { left: "0" } }),
              t.jsx("div", { ref: l, className: "ai-paddle", style: { right: "0" } }),
              t.jsx("div", { ref: i, className: "ball" }),
              t.jsx("div", {
                className: "score-left",
                children: String(s.player)
                  .padStart(2, "0")
                  .split("")
                  .map((d, u) =>
                    t.jsx(
                      "div",
                      {
                        className: "score-digit",
                        children: c(d).map((h, m) => t.jsx("div", { className: "digit-line", children: h }, m)),
                      },
                      u,
                    ),
                  ),
              }),
              t.jsx("div", {
                className: "score-right",
                children: String(s.ai)
                  .padStart(2, "0")
                  .split("")
                  .map((d, u) =>
                    t.jsx(
                      "div",
                      {
                        className: "score-digit",
                        children: c(d).map((h, m) => t.jsx("div", { className: "digit-line", children: h }, m)),
                      },
                      u,
                    ),
                  ),
              }),
            ],
          }),
          t.jsx("div", {
            className: "game-border game-border-bottom",
            children: Array.from({ length: 45 }).map((d, u) =>
              t.jsx("span", { className: "border-symbol", children: "@" }, u),
            ),
          }),
        ],
      }),
      t.jsxs("div", {
        className: "game-instructions",
        children: [
          "( Use w&s keys to control the ",
          t.jsx("span", { className: "highlight", children: "paddle" }),
          " )",
        ],
      }),
    ],
  });
};
function J5() {
  const { data: e } = d0(),
    s = e?.notFoundTitle?.trim() || "Page not found",
    n = e?.notFoundBody?.trim() || "The page you were looking for could not be found.";
  return t.jsxs("div", {
    className: "page not-found",
    children: [
      t.jsx(s0, { title: s, description: n, siteSettings: e, seo: { noindex: !0 } }),
      t.jsxs("div", {
        className: "not-found__content",
        children: [
          t.jsx(o0, { text: "404", className: "not-found__title" }),
          t.jsx("h1", { className: "visually-hidden", children: s }),
          t.jsx("p", { className: "not-found__copy", children: n }),
          t.jsx(i0, { to: "/", className: "not-found__home", children: "Back to home" }),
        ],
      }),
    ],
  });
}
function e3() {
  const { data: e } = d0(),
    { data: s, isLoading: n } = u0({
      queryKey: ["capabilities"],
      queryFn: () => l0.fetch(B2),
      staleTime: 1e3 * 60 * 10,
    });
  return t.jsxs("div", {
    className: "page capabilities",
    children: [
      t.jsx(s0, {
        title: "What we do — interactive production capabilities",
        description:
          "What Studio Dialect builds — interactive retail, e-commerce experiences, AR, WebGL, anamorphic, and live activations. Explore each capability and the work behind it.",
        seo: {
          noindex: !0,
          keywords: [
            "interactive production capabilities",
            "WebGL agency services",
            "immersive retail design",
            "AR experience production",
            "anamorphic billboard production",
            "e-commerce 3D experiences",
            "experiential activation studio",
          ],
        },
        siteSettings: e,
      }),
      t.jsx("h1", { className: "capabilities__heading", children: "Capabilities" }),
      n
        ? t.jsx("div", { className: "capabilities__loading" })
        : !s || s.length === 0
          ? t.jsx("p", {
              className: "capabilities__empty",
              children: "Capability pages are being added. Check back soon.",
            })
          : t.jsx("ul", {
              className: "capabilities__grid",
              children: s.map((r) => {
                const a = r.hero ? Z(r.hero).width(960).auto("format").url() : null;
                return t.jsx(
                  "li",
                  {
                    className: "capabilities__item",
                    children: t.jsxs(i0, {
                      to: `/capabilities/${r.slug.current}`,
                      className: "capabilities__link",
                      "aria-label": `Learn about ${r.title}`,
                      children: [
                        a &&
                          t.jsx("img", {
                            src: a,
                            alt: r.hero?.alt ?? r.title,
                            loading: "lazy",
                            decoding: "async",
                            className: "capabilities__image",
                          }),
                        t.jsxs("div", {
                          className: "capabilities__meta",
                          children: [
                            t.jsx("h2", { className: "capabilities__title", children: r.title }),
                            r.tagline && t.jsx("p", { className: "capabilities__tagline", children: r.tagline }),
                          ],
                        }),
                      ],
                    }),
                  },
                  r._id,
                );
              }),
            }),
    ],
  });
}
function t3() {
  const { slug: e } = we(),
    { data: s } = d0(),
    { data: n, isLoading: r } = u0({
      queryKey: ["capability", e],
      queryFn: () => l0.fetch(H2, { slug: e }),
      enabled: !!e,
    });
  if (r)
    return t.jsx("div", { className: "page capability", children: t.jsx("div", { className: "capability__loading" }) });
  if (!n)
    return t.jsxs("div", {
      className: "page capability",
      children: [
        t.jsx(s0, {
          title: "Capability not found",
          description: "The capability you're looking for could not be found.",
          siteSettings: s,
          seo: { noindex: !0 },
        }),
        t.jsxs("div", {
          className: "capability__not-found",
          children: [
            t.jsx("h1", { children: "Capability not found" }),
            t.jsx(i0, { to: "/capabilities", children: "Back to capabilities" }),
          ],
        }),
      ],
    });
  const a = n.hero ? Z(n.hero).width(2400).auto("format").url() : null;
  return t.jsxs("div", {
    className: "page capability",
    children: [
      t.jsx(s0, { title: n.title, description: n.tagline, heroImage: n.hero, seo: n.seo, siteSettings: s }),
      t.jsx(oe, {
        data: [
          G7({
            title: n.title,
            slug: n.slug.current,
            description: n.tagline,
            imageUrl: n.hero?.asset?.url,
            imageAlt: n.hero?.alt,
            services: n.services,
          }),
          Ne([
            { name: "Home", path: "/" },
            { name: "Capabilities", path: "/capabilities" },
            { name: n.title, path: `/capabilities/${n.slug.current}` },
          ]),
          ...(n.faqs && n.faqs.length > 0 ? [K7(n.faqs)] : []),
        ],
      }),
      t.jsxs("header", {
        className: "capability__hero",
        children: [
          t.jsx("h1", { className: "capability__title", children: n.title }),
          n.tagline && t.jsx("p", { className: "capability__tagline", children: n.tagline }),
          a &&
            t.jsx("img", {
              src: a,
              alt: n.hero?.alt ?? n.title,
              className: "capability__hero-image",
              fetchPriority: "high",
              decoding: "async",
            }),
        ],
      }),
      n.intro &&
        n.intro.length > 0 &&
        t.jsx("section", { className: "capability__intro", children: t.jsx(b0, { value: n.intro, components: N0 }) }),
      n.services &&
        n.services.length > 0 &&
        t.jsxs("section", {
          className: "capability__services",
          "aria-labelledby": "capability-services-heading",
          children: [
            t.jsx("h2", { id: "capability-services-heading", children: "What we deliver" }),
            t.jsx("ul", {
              children: n.services.map((l, i) =>
                t.jsxs(
                  "li",
                  {
                    children: [
                      t.jsx("h3", { children: l.name }),
                      l.description && t.jsx("p", { children: l.description }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      n.body &&
        n.body.length > 0 &&
        t.jsx("section", { className: "capability__body", children: t.jsx(b0, { value: n.body, components: N0 }) }),
      n.relatedProjects &&
        n.relatedProjects.length > 0 &&
        t.jsxs("section", {
          className: "capability__related",
          "aria-labelledby": "capability-projects-heading",
          children: [
            t.jsx("h2", { id: "capability-projects-heading", children: "Selected projects" }),
            t.jsx("ul", {
              className: "capability__related-grid",
              children: n.relatedProjects.map((l) => {
                const i = l.mainImage ? Z(l.mainImage).width(800).auto("format").url() : null;
                return t.jsx(
                  "li",
                  {
                    children: t.jsxs(i0, {
                      to: `/projects/${l.slug.current}`,
                      "aria-label": `View ${l.title}${l.client ? ` for ${l.client}` : ""}`,
                      children: [
                        i &&
                          t.jsx("img", {
                            src: i,
                            alt: l.mainImage?.alt ?? l.title,
                            loading: "lazy",
                            decoding: "async",
                          }),
                        t.jsxs("div", {
                          children: [
                            l.client && t.jsx("span", { children: l.client }),
                            t.jsx("strong", { children: l.title }),
                          ],
                        }),
                      ],
                    }),
                  },
                  l._id,
                );
              }),
            }),
          ],
        }),
      n.relatedCaseStudies &&
        n.relatedCaseStudies.length > 0 &&
        t.jsxs("section", {
          className: "capability__related",
          "aria-labelledby": "capability-case-studies-heading",
          children: [
            t.jsx("h2", { id: "capability-case-studies-heading", children: "Case studies" }),
            t.jsx("ul", {
              className: "capability__related-grid",
              children: n.relatedCaseStudies.map((l) => {
                const i = l.heroImage ? Z(l.heroImage).width(800).auto("format").url() : null;
                return t.jsx(
                  "li",
                  {
                    children: t.jsxs(i0, {
                      to: `/case-study/${l.slug.current}`,
                      "aria-label": `View ${l.title}${l.client ? ` for ${l.client}` : ""}`,
                      children: [
                        i &&
                          t.jsx("img", {
                            src: i,
                            alt: l.heroImage?.alt ?? l.title,
                            loading: "lazy",
                            decoding: "async",
                          }),
                        t.jsxs("div", {
                          children: [
                            l.client && t.jsx("span", { children: l.client }),
                            t.jsx("strong", { children: l.title }),
                          ],
                        }),
                      ],
                    }),
                  },
                  l._id,
                );
              }),
            }),
          ],
        }),
      n.faqs &&
        n.faqs.length > 0 &&
        t.jsxs("section", {
          className: "capability__faqs",
          "aria-labelledby": "capability-faqs-heading",
          children: [
            t.jsx("h2", { id: "capability-faqs-heading", children: "Frequently asked" }),
            t.jsx("dl", {
              children: n.faqs.map((l, i) =>
                t.jsxs(
                  "div",
                  { children: [t.jsx("dt", { children: l.question }), t.jsx("dd", { children: l.answer })] },
                  i,
                ),
              ),
            }),
          ],
        }),
      t.jsx(i0, { to: "/capabilities", className: "capability__back", children: "Back to capabilities" }),
    ],
  });
}
const n3 = () => {
  const e = qe(),
    s = o.useRef(null),
    n = o.useRef(null),
    r = o.useRef(null),
    a = o.useRef(null),
    l = o.useRef(null),
    [i, c] = o.useState(!1),
    [d, u] = o.useState(!1),
    [h, m] = o.useState(null),
    p = o.useRef(null),
    [g, y] = o.useState(!1),
    [j, _] = o.useState(null),
    v = o.useRef({ x: 0, y: 0 }),
    f = o.useRef(null),
    b = 100;
  o.useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.body.classList.add("has-custom-cursor");
    const N = (C) => {
        ((v.current = { x: C.clientX, y: C.clientY }), i || c(!0));
      },
      x = () => {
        c(!1);
      },
      S = (C) => {
        const I = C.target;
        if (
          (document.querySelectorAll(".custom_cursor__current-link").forEach((P) => {
            P.classList.remove("custom_cursor__current-link");
          }),
          I.tagName === "IFRAME" || I.closest("iframe"))
        ) {
          c(!1);
          return;
        }
        const $ =
            I.tagName === "A" ||
            I.tagName === "BUTTON" ||
            I.closest("a") ||
            I.closest("button") ||
            I.classList?.contains("interactive") ||
            I.closest(".interactive"),
          T = I.closest(".custom_cursor__disable-hover");
        if ((u(!!$ && !T), (p.current = null), $)) {
          const P = I.closest("[data-cursor-label]");
          if (P) {
            const O = P.getAttribute("data-cursor-label");
            O && ((p.current = P), m(O), y(!1), _(null));
          } else {
            m(null);
            const A = (I.closest("a") || I.closest("button") || I).getBoundingClientRect();
            A.width * A.height < b * b && !T
              ? (y(!0),
                _({ x: A.left + A.width / 2, y: A.top + A.height / 2, width: A.width, height: A.height }),
                (I.closest(".interactive, a, button") || I).classList.add("custom_cursor__current-link"))
              : (y(!1), _(null));
          }
        } else (m(null), y(!1), _(null));
      };
    m7(S);
    let M = 0;
    const D = (C) => {
      M || (M = C);
      const I = C - M;
      if (
        ((M = C),
        p.current &&
          h !== (p.current.getAttribute("data-cursor-label") || "") &&
          m(p.current.getAttribute("data-cursor-label") || ""),
        s.current)
      ) {
        const E = s.current,
          { x: $, y: T } = v.current,
          P = g && j ? j.x : $,
          O = g && j ? j.y : T,
          A = parseFloat(E.style.left || "0"),
          L = parseFloat(E.style.top || "0"),
          z = g ? 1 : I * 0.01,
          B = A + (P - A) * z,
          U = L + (O - L) * z;
        ((E.style.left = `${B}px`),
          (E.style.top = `${U}px`),
          n.current &&
            ((n.current.style.left = `${B}px`),
            (n.current.style.height = g && j ? `${Math.max(0, U - j.height / 2)}px` : `${U}px`)),
          a.current &&
            ((a.current.style.left = `${B}px`), (a.current.style.top = g && j ? `${U + j.height / 2}px` : `${U}px`)),
          l.current &&
            ((l.current.style.top = `${U}px`),
            (l.current.style.width = g && j ? `${Math.max(0, B - j.width / 2)}px` : `${B}px`)),
          r.current &&
            ((r.current.style.top = `${U}px`), (r.current.style.left = g && j ? `${B + j.width / 2}px` : `${B}px`)),
          g &&
            j &&
            (E.style.setProperty("--cover-width", `${j.width}px`),
            E.style.setProperty("--cover-height", `${j.height}px`)));
      }
      f.current = requestAnimationFrame(D);
    };
    return (
      document.addEventListener("mousemove", N),
      document.addEventListener("mouseleave", x),
      document.addEventListener("mouseover", S),
      (f.current = requestAnimationFrame(D)),
      () => {
        (document.removeEventListener("mousemove", N),
          document.removeEventListener("mouseleave", x),
          document.removeEventListener("mouseover", S),
          f.current && cancelAnimationFrame(f.current));
      }
    );
  }, [i, g, j]);
  const R = typeof window < "u" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  return !e || !R
    ? null
    : t.jsxs("div", {
        ref: s,
        className: `custom_cursor__cursor ${i ? "custom_cursor__visible" : ""} ${d ? "custom_cursor__hovering" : ""} ${g ? "custom_cursor__covering" : ""}`,
        children: [
          t.jsx("div", {
            className: "custom_cursor__inner",
            children: t.jsx("div", { className: "custom_cursor__center" }),
          }),
          t.jsx("div", { ref: n, className: "custom_cursor__crosshair custom_cursor__crosshair--top" }),
          t.jsx("div", { ref: r, className: "custom_cursor__crosshair custom_cursor__crosshair--right" }),
          t.jsx("div", { ref: a, className: "custom_cursor__crosshair custom_cursor__crosshair--bottom" }),
          t.jsx("div", { ref: l, className: "custom_cursor__crosshair custom_cursor__crosshair--left" }),
          t.jsxs("div", {
            className: `custom_cursor__link UI_1 ${h ? "custom_cursor__link--visible" : ""}`,
            children: [
              t.jsx(w0, { to: "#", label: "" + (h ?? "") }),
              t.jsx("div", { className: "top-left" }),
              t.jsx("div", { className: "top-right" }),
              t.jsx("div", { className: "bottom-left" }),
              t.jsx("div", { className: "bottom-right" }),
            ],
          }),
        ],
      });
};
function s3() {
  const e = I2();
  o.useEffect(() => {
    (async () => {
      try {
        await e.prefetchQuery({ queryKey: ["site-data"], queryFn: () => l0.fetch(S1), staleTime: 3e5 });
      } catch (n) {
        console.warn("Prefetch failed:", n);
      }
    })();
  }, [e]);
}
const r3 = (e, s, n, r, a) => {
    if (!e) return "";
    const l = Date.now(),
      c = (-1 + (((n ? l - r : l - a) / 500) % 3)) * e.canvas.height;
    if (n)
      for (let h = 0; h < e.canvas.height; h++) {
        const m = h < c ? 1 : h > c + e.canvas.height ? 0 : 1 - (h - c) / e.canvas.height;
        for (let p = 0; p < e.canvas.width; p++) {
          const g = Math.random() > m ? 0 : 255,
            y = (h * e.canvas.width + p) * 4;
          s.data[y] !== 255 &&
            g === 255 &&
            ((s.data[y] = g), (s.data[y + 1] = g), (s.data[y + 2] = g), (s.data[y + 3] = 255));
        }
      }
    else
      for (let h = 0; h < e.canvas.height; h++) {
        const m = h < c ? 1 : h > c + e.canvas.height ? 0 : 1 - (h - c) / e.canvas.height;
        for (let p = 0; p < e.canvas.width; p++) {
          const g = Math.random() > m ? 255 : 0,
            y = (h * e.canvas.width + p) * 4;
          s.data[y] !== 0 &&
            g === 0 &&
            ((s.data[y] = g), (s.data[y + 1] = g), (s.data[y + 2] = g), (s.data[y + 3] = 255));
        }
      }
    const d = new ImageData(s.width, s.height);
    for (let h = 0; h < e.canvas.height / 2; h++)
      for (let m = 0; m < e.canvas.width; m++) {
        const p = (h * e.canvas.width + m) * 4,
          g = ((e.canvas.height - h - 1) * e.canvas.width + m) * 4;
        for (let y = 0; y < 4; y++) ((d.data[p + y] = s.data[g + y]), (d.data[g + y] = s.data[p + y]));
      }
    return (e.putImageData(d, 0, 0), We(d));
  },
  a3 = ({ isHome: e = !1 }) => {
    const s = x0(),
      { setNavigationSource: n } = ze(),
      r = Oe(),
      a = o.useRef(null),
      l = o.useRef(null),
      i = o.useRef(null),
      c = o.useRef(null),
      d = o.useRef(null),
      [u, h] = o.useState("initial"),
      m = `navigation__logo interactive ${u === "fixed-top" || !e ? "navigation__logo--fixed" : ""} ${u === "scrolling" && e ? "navigation__logo--scrolling" : ""}`,
      p = `UI_1 navigation__menu ${u === "fixed-top" || !e ? "navigation__menu--fixed" : ""} ${u === "scrolling" && e ? "navigation__menu--scrolling" : ""}`;
    (o.useEffect(() => {
      (!e || u !== "scrolling") && (d.current?.style.setProperty("top", ""), c.current?.style.setProperty("top", ""));
    }, [e, d, c, u]),
      o.useEffect(() => {
        if (!e) return;
        let C = null,
          I = 0,
          E = 0;
        const $ = () => {
            C = document.querySelector(".page.home .pixelated-reveal-container");
          },
          T = () => {
            if (!C) {
              h("initial");
              return;
            }
            const z = C.getBoundingClientRect(),
              B = d.current?.getBoundingClientRect().top ?? 0;
            ((E = E || d.current?.offsetTop || 0),
              z.top > E
                ? h("initial")
                : z.top > 0 && (z.top <= E || B < 0)
                  ? (h("scrolling"),
                    d.current?.style.setProperty("top", `${C.offsetTop}px`),
                    c.current?.style.setProperty("top", `${C.offsetTop}px`))
                  : z.top <= 0 && h("fixed-top"));
          },
          P = () => {
            T();
          },
          O = () => {
            (I && cancelAnimationFrame(I), (I = requestAnimationFrame(P)));
          },
          A = () => {
            (h("initial"),
              requestAnimationFrame(() => {
                ($(), P());
              }));
          },
          L = new MutationObserver(() => {
            C || ($(), P());
          });
        return (
          requestAnimationFrame(() => {
            ($(), P());
          }),
          L.observe(document.body, { childList: !0, subtree: !0 }),
          window.addEventListener("scroll", O, { passive: !0 }),
          window.addEventListener("resize", A),
          () => {
            (L.disconnect(),
              I && cancelAnimationFrame(I),
              window.removeEventListener("scroll", O),
              window.removeEventListener("resize", A));
          }
        );
      }, [e]));
    const y = [
        { url: "/", label: "Home" },
        { url: "/studio", label: "Studio" },
        { url: "/projects", label: "Projects" },
        { url: "/labs", label: "Labs" },
        { url: "/contact", label: "Contact" },
      ],
      [j, _] = o.useState(!1),
      [v, f] = o.useState(!1),
      b = () => {
        _((C) => !C);
      },
      R = () => {
        _(!1);
      },
      w = (C, I) => {
        (I.preventDefault(), n("menu"));
        const E = r(C, { flushSync: !0 });
        E
          ? E.then(() => {
              setTimeout(() => {
                R();
              }, 100);
            })
          : setTimeout(() => {
              R();
            }, 100);
      };
    (o.useEffect(() => {
      if (j) f(!0);
      else {
        const C = setTimeout(() => {
          f(!1);
        }, 800);
        return () => clearTimeout(C);
      }
    }, [j]),
      o.useEffect(() => {
        if (!j) {
          const C = setTimeout(() => {
            n("direct");
          }, 800);
          return () => clearTimeout(C);
        }
      }, [j, n]));
    const N = o.useMemo(() => (j ? Date.now() : 0), [j]),
      x = o.useMemo(() => (j ? 0 : Date.now()), [j]);
    (o.useEffect(() => {
      e &&
        s.pathname === "/" &&
        document.body.classList.contains("loaded") &&
        (document.body.classList.remove("loaded"),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.body.classList.add("loaded");
          });
        }));
    }, [e, s.pathname]),
      o.useEffect(() => {
        let C;
        const I = () => {
          const E = a.current?.getContext("2d", { willReadFrequently: !0 });
          if (E) {
            (!l.current || l.current.width !== E.canvas.width || l.current.height !== E.canvas.height) &&
              (l.current = E.getImageData(0, 0, E.canvas.width, E.canvas.height));
            const $ = r3(E, l.current, j, N, x);
            i.current && a.current && (i.current.style.clipPath = $);
          }
          C = requestAnimationFrame(I);
        };
        return (
          I(),
          () => {
            C && cancelAnimationFrame(C);
          }
        );
      }, [j, N, x]));
    const [S, M] = o.useState({ x: 0, y: 0 });
    o.useEffect(() => {
      const C = (I) => {
        M({ x: I.clientX, y: I.clientY });
      };
      return (
        window.addEventListener("mousemove", C),
        () => {
          window.removeEventListener("mousemove", C);
        }
      );
    }, []);
    const D = s.pathname.startsWith("/labs") || s.pathname === "/contact" || s.pathname.startsWith("/easter-egg");
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx("div", {
          className: `navigation__background ${p} ${v ? " navigation__background--on-top" : ""}${D ? " navigation__background--dark" : ""}`,
        }),
        t.jsx("div", {
          ref: c,
          className: `${m}${v ? " navigation__logo--on-top" : ""}${D ? " navigation__logo--dark" : ""}`,
          children: t.jsx(f0, {
            to: "/",
            "aria-label": "Studio Dialect — home",
            style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" },
          }),
        }),
        t.jsxs("div", {
          ref: d,
          className: `${p}${v ? " navigation__menu--on-top" : ""}${D ? " navigation__menu--dark" : ""}`,
          children: [
            t.jsxs("span", {
              className: "navigation__mousecoords",
              children: [
                t.jsxs("span", {
                  className: "navigation__mousecoords-x",
                  children: ["X : ", S.x.toString().padStart(5, " ")],
                }),
                t.jsxs("span", {
                  className: "navigation__mousecoords-y",
                  children: ["Y : ", S.y.toString().padStart(5, " ")],
                }),
              ],
            }),
            t.jsx("span", {
              className: "interactive navigation__menubutton",
              onClick: b,
              children: j ? "CLOSE" : "MENU",
            }),
          ],
        }),
        t.jsxs("div", {
          ref: i,
          className: `navigation__overlay ${j ? "navigation__overlay--open" : ""}`,
          onClick: R,
          children: [
            t.jsx("canvas", {
              id: "menu-clip-canvas",
              className: "navigation__overlay-canvas",
              ref: a,
              width: "10",
              height: "10",
            }),
            t.jsx("nav", {
              className: "navigation__nav",
              onClick: (C) => C.stopPropagation(),
              children: t.jsx("ul", {
                className: "navigation__menu-list",
                children: y.map((C) =>
                  t.jsx(
                    "li",
                    {
                      className: "navigation__item custom_cursor__disable-hover",
                      children: t.jsx(f0, {
                        to: C.url,
                        className: ({ isActive: I }) => `navigation__link ${I ? "navigation__active" : ""}`,
                        onClick: (I) => w(C.url, I),
                        end: C.url === "/",
                        children: t.jsx("span", {
                          className: "navigation__link-heading",
                          children: t.jsxs("span", {
                            className: "navigation__link-text",
                            children: [
                              C.label,
                              t.jsx("br", {}),
                              t.jsx("span", { className: "navigation__link__text--duplicate", children: C.label }),
                            ],
                          }),
                        }),
                      }),
                    },
                    C.url,
                  ),
                ),
              }),
            }),
          ],
        }),
      ],
    });
  };
function o3(e = {}, s) {
  const { acceleration: n = 1, maxSpeed: r = 100, friction: a = 0.98 } = e,
    l = o.useRef(0),
    i = o.useRef(0),
    c = o.useRef(!1),
    d = o.useRef(void 0),
    u = o.useRef(0),
    h = o.useRef(0),
    m = o.useRef(0),
    p = o.useRef(0);
  (o.useEffect(() => {
    s && ((l.current = 0), (i.current = 0), window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
  }, [s]),
    o.useEffect(() => {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
      ((l.current = window.scrollY), (i.current = window.scrollY));
      const g = window.innerWidth <= 768,
        y = (R) => {
          g ||
            (R.preventDefault(),
            (l.current = Math.max(
              0,
              Math.min(document.documentElement.scrollHeight - window.innerHeight, l.current + R.deltaY),
            )),
            (c.current = !1));
        },
        j = (R) => {
          g ||
            ((u.current = R.touches[0].clientY),
            (h.current = Date.now()),
            (m.current = R.touches[0].clientY),
            (p.current = Date.now()),
            (c.current = !0));
        },
        _ = (R) => {
          if (g) return;
          R.preventDefault();
          const w = R.touches[0].clientY,
            N = m.current - w;
          ((l.current = Math.max(
            0,
            Math.min(document.documentElement.scrollHeight - window.innerHeight, l.current + N),
          )),
            (m.current = w),
            (p.current = Date.now()));
        },
        v = () => {
          if (g) return;
          const R = m.current - u.current,
            w = p.current - h.current;
          if (w > 0) {
            const x = -(R / w) * 16 * 30;
            l.current = Math.max(
              0,
              Math.min(document.documentElement.scrollHeight - window.innerHeight, l.current + x),
            );
          }
        },
        f = (R) => {
          if (g) return;
          const w = 100;
          let N = 0;
          switch (((c.current = !1), R.key)) {
            case "ArrowDown":
            case "PageDown":
              ((N = R.key === "PageDown" ? window.innerHeight * 0.8 : w), R.preventDefault());
              break;
            case "ArrowUp":
            case "PageUp":
              ((N = R.key === "PageUp" ? -window.innerHeight * 0.8 : -w), R.preventDefault());
              break;
            case "Home":
              ((l.current = 0), R.preventDefault());
              return;
            case "End":
              ((l.current = document.documentElement.scrollHeight - window.innerHeight), R.preventDefault());
              return;
            case " ":
              ((N = R.shiftKey ? -window.innerHeight * 0.8 : window.innerHeight * 0.8), R.preventDefault());
              break;
            default:
              return;
          }
          l.current = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, l.current + N));
        },
        b = () => {
          if (g) return;
          const R = l.current - i.current;
          ((i.current += R * (c.current, 0.1)),
            window.scrollTo({ top: i.current, behavior: "instant" }),
            (d.current = requestAnimationFrame(b)));
        };
      return (
        (d.current = requestAnimationFrame(b)),
        window.addEventListener("wheel", y, { passive: !1 }),
        window.addEventListener("keydown", f, { passive: !1 }),
        window.addEventListener("touchstart", j, { passive: !1 }),
        window.addEventListener("touchmove", _, { passive: !1 }),
        window.addEventListener("touchend", v, { passive: !1 }),
        () => {
          (window.removeEventListener("wheel", y),
            window.removeEventListener("keydown", f),
            window.removeEventListener("touchstart", j),
            window.removeEventListener("touchmove", _),
            window.removeEventListener("touchend", v),
            d.current && cancelAnimationFrame(d.current));
        }
      );
    }, [n, r, a]));
}
const i3 = !1,
  l3 = new N1({ defaultOptions: { queries: { staleTime: 1e3 * 60 * 5, gcTime: 1e3 * 60 * 30 } } });
function v3() {
  return new N1({
    defaultOptions: {
      queries: {
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        retry: !1,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      },
    },
  });
}
function i2() {
  const e = x0();
  (o3({ acceleration: 0.25, maxSpeed: 80, friction: 0.82 }, e.pathname), s3());
  const { data: s } = d0(),
    n = e.pathname === "/",
    r = e.pathname.startsWith("/case-study/");
  return t.jsxs("div", {
    className: "app",
    children: [
      t.jsx(oe, { data: [W7(s), V7(s)] }),
      i3,
      t.jsx(n3, {}),
      t.jsx(U6, {}),
      r ? null : t.jsx(a3, { isHome: n }),
      t.jsx("main", {
        className: "main",
        children: t.jsxs(c1, {
          children: [
            t.jsx(K, { path: "/", element: t.jsx(O7, {}) }),
            t.jsx(K, { path: "/studio", element: t.jsx(F7, {}) }),
            t.jsx(K, { path: "/projects", element: t.jsx(H7, {}) }),
            t.jsx(K, { path: "/projects/:slug", element: t.jsx(i5, {}) }),
            t.jsx(K, { path: "/products", element: t.jsx(y5, {}) }),
            t.jsx(K, { path: "/labs", element: t.jsx(b5, {}) }),
            t.jsx(K, { path: "/labs/:slug", element: t.jsx(P5, {}) }),
            t.jsx(K, { path: "/capabilities", element: t.jsx(e3, {}) }),
            t.jsx(K, { path: "/capabilities/:slug", element: t.jsx(t3, {}) }),
            t.jsx(K, { path: "/case-study/:slug", element: t.jsx(x5, {}) }),
            t.jsx(K, { path: "/contact", element: t.jsx(B5, {}) }),
            t.jsx(K, { path: "/privacy", element: t.jsx(Z5, {}) }),
            t.jsx(K, { path: "/easter-egg", element: t.jsx(Q5, {}) }),
            t.jsx(K, { path: "*", element: t.jsx(J5, {}) }),
          ],
        }),
      }),
      t.jsxs(c1, {
        children: [
          t.jsx(K, { path: "/case-study/:slug", element: t.jsx(t.Fragment, {}) }),
          t.jsx(K, { path: "/case-study", element: t.jsx(t.Fragment, {}) }),
          t.jsx(K, { path: "/contact", element: t.jsx(t.Fragment, {}) }),
          t.jsx(K, { path: "/easter-egg", element: t.jsx(t.Fragment, {}) }),
          t.jsx(K, { path: "/labs", element: t.jsx(Ie, { black: !0 }) }),
          t.jsx(K, { path: "/labs/:slug", element: t.jsx(Ie, { black: !0 }) }),
          t.jsx(K, { path: "*", element: t.jsx(Ie, {}) }),
        ],
      }),
    ],
  });
}
function l2({ children: e, queryClient: s }) {
  return t.jsx(C2, { client: s, children: t.jsx(A6, { children: t.jsxs(D6, { children: [t.jsx(k6, {}), e] }) }) });
}
const c3 = "pk_live_194a6a3deae0e031ff63bdf4";
function b1() {
  try {
    const e = localStorage.getItem("cookie_consent");
    return e === "accepted" ? "granted" : e === "declined" ? "denied" : "unset";
  } catch {
    return "unset";
  }
}
function y3() {
  const [e, s] = o.useState(b1);
  return (
    o.useEffect(() => {
      const n = () => s(b1());
      return (
        window.addEventListener("hiya:consent", n),
        window.addEventListener("storage", n),
        () => {
          (window.removeEventListener("hiya:consent", n), window.removeEventListener("storage", n));
        }
      );
    }, []),
    t.jsxs(l2, {
      queryClient: l3,
      children: [t.jsx(C6, { publicKey: c3, consent: e }), t.jsx(s6, { children: t.jsx(i2, {}) })],
    })
  );
}
function j3({ url: e, queryClient: s }) {
  return t.jsx(l2, { queryClient: s, children: t.jsx(h6, { location: e, children: t.jsx(i2, {}) }) });
}
export { j3 as AppForPrerender, v3 as createPrerenderQueryClient, y3 as default, l3 as defaultQueryClient };
