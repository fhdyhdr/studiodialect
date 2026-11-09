const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "js/eab50be7-stegaEncodeSourceMap-BT5UiB-S.js",
      "js/12cc8a0a-r3f-BJIQ5yep.js",
      "js/fa3e1470-three-yAinaQqd.js",
      "js/2fdab330-browser-CVBVhu-6.js",
    ]),
) => i.map((i) => d[i]);
import { _ as Zt, r as wt, j as S } from "../js/12cc8a0a-r3f-BJIQ5yep.js";
const er = !(typeof navigator > "u") && navigator.product === "ReactNative",
  tr = { timeout: er ? 6e4 : 12e4 },
  jn = function (t) {
    const e = { ...tr, ...(typeof t == "string" ? { url: t } : t) };
    if (((e.timeout = rr(e.timeout)), e.query)) {
      const { url: r, searchParams: n } = (function (i) {
        const s = i.indexOf("?");
        if (s === -1) return { url: i, searchParams: new URLSearchParams() };
        const o = i.slice(0, s),
          a = i.slice(s + 1);
        if (!er) return { url: o, searchParams: new URLSearchParams(a) };
        if (typeof decodeURIComponent != "function")
          throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
        const u = new URLSearchParams();
        for (const c of a.split("&")) {
          const [p, h] = c.split("=");
          p && u.append(It(p), It(h || ""));
        }
        return { url: o, searchParams: u };
      })(e.url);
      for (const [i, s] of Object.entries(e.query)) {
        if (s !== void 0)
          if (Array.isArray(s)) for (const a of s) n.append(i, a);
          else n.append(i, s);
        const o = n.toString();
        o && (e.url = `${r}?${o}`);
      }
    }
    return ((e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase()), e);
  };
function It(t) {
  return decodeURIComponent(t.replace(/\+/g, " "));
}
function rr(t) {
  if (t === !1 || t === 0) return !1;
  if (t.connect || t.socket) return t;
  const e = Number(t);
  return isNaN(e) ? rr(tr.timeout) : { connect: e, socket: e };
}
const Rn = /^https?:\/\//i,
  Pn = function (t) {
    if (!Rn.test(t.url)) throw new Error(`"${t.url}" is not a valid URL`);
  };
function nr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const Mn = ["request", "response", "progress", "error", "abort"],
  Et = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders",
  ];
function ir(t, e) {
  const r = [],
    n = Et.reduce((s, o) => ((s[o] = s[o] || []), s), { processOptions: [jn], validateOptions: [Pn] });
  function i(s) {
    const o = Mn.reduce(
        (l, v) => (
          (l[v] = (function () {
            const f = Object.create(null);
            let w = 0;
            return {
              publish: function (I) {
                for (const x in f) f[x](I);
              },
              subscribe: function (I) {
                const x = w++;
                return (
                  (f[x] = I),
                  function () {
                    delete f[x];
                  }
                );
              },
            };
          })()),
          l
        ),
        {},
      ),
      a = ((l) =>
        function (v, f, ...w) {
          const I = v === "onError";
          let x = f;
          for (let C = 0; C < l[v].length && ((x = (0, l[v][C])(x, ...w)), !I || x); C++);
          return x;
        })(n),
      u = a("processOptions", s);
    a("validateOptions", u);
    const c = { options: u, channels: o, applyMiddleware: a };
    let p;
    const h = o.request.subscribe((l) => {
      p = e(l, (v, f) =>
        ((w, I, x) => {
          let C = w,
            O = I;
          if (!C)
            try {
              O = a("onResponse", I, x);
            } catch (P) {
              ((O = null), (C = P));
            }
          ((C = C && a("onError", C, x)), C ? o.error.publish(C) : O && o.response.publish(O));
        })(v, f, l),
      );
    });
    o.abort.subscribe(() => {
      (h(), p && p.abort());
    });
    const d = a("onReturn", o, c);
    return (d === o && o.request.publish(c), d);
  }
  return (
    (i.use = function (s) {
      if (!s) throw new Error("Tried to add middleware that resolved to falsey value");
      if (typeof s == "function")
        throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
      if (s.onReturn && n.onReturn.length > 0)
        throw new Error(
          "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event",
        );
      return (
        Et.forEach((o) => {
          s[o] && n[o].push(s[o]);
        }),
        r.push(s),
        i
      );
    }),
    (i.clone = () => ir(r, e)),
    t.forEach(i.use),
    i
  );
}
var xt,
  Ct,
  qn = nr(
    (function () {
      if (Ct) return xt;
      Ct = 1;
      var t = function (r) {
          return r.replace(/^\s+|\s+$/g, "");
        },
        e = function (r) {
          return Object.prototype.toString.call(r) === "[object Array]";
        };
      return (xt = function (r) {
        if (!r) return {};
        for (
          var n = Object.create(null),
            i = t(r).split(`
`),
            s = 0;
          s < i.length;
          s++
        ) {
          var o = i[s],
            a = o.indexOf(":"),
            u = t(o.slice(0, a)).toLowerCase(),
            c = t(o.slice(a + 1));
          typeof n[u] > "u" ? (n[u] = c) : e(n[u]) ? n[u].push(c) : (n[u] = [n[u], c]);
        }
        return n;
      });
    })(),
  );
let it = class {
  onabort;
  onerror;
  onreadystatechange;
  ontimeout;
  readyState = 0;
  response;
  responseText = "";
  responseType = "";
  status;
  statusText;
  withCredentials;
  #t;
  #e;
  #n;
  #i = {};
  #r;
  #s = {};
  #o;
  open(e, r, n) {
    ((this.#t = e),
      (this.#e = r),
      (this.#n = ""),
      (this.readyState = 1),
      this.onreadystatechange?.(),
      (this.#r = void 0));
  }
  abort() {
    this.#r && this.#r.abort();
  }
  getAllResponseHeaders() {
    return this.#n;
  }
  setRequestHeader(e, r) {
    this.#i[e] = r;
  }
  setInit(e, r = !0) {
    ((this.#s = e), (this.#o = r));
  }
  send(e) {
    const r = this.responseType !== "arraybuffer",
      n = { ...this.#s, method: this.#t, headers: this.#i, body: e };
    (typeof AbortController == "function" &&
      this.#o &&
      ((this.#r = new AbortController()),
      typeof EventTarget < "u" && this.#r.signal instanceof EventTarget && (n.signal = this.#r.signal)),
      typeof document < "u" && (n.credentials = this.withCredentials ? "include" : "omit"),
      fetch(this.#e, n)
        .then(
          (i) => (
            i.headers.forEach((s, o) => {
              this.#n += `${o}: ${s}\r
`;
            }),
            (this.status = i.status),
            (this.statusText = i.statusText),
            (this.readyState = 3),
            this.onreadystatechange?.(),
            r ? i.text() : i.arrayBuffer()
          ),
        )
        .then((i) => {
          (typeof i == "string" ? (this.responseText = i) : (this.response = i),
            (this.readyState = 4),
            this.onreadystatechange?.());
        })
        .catch((i) => {
          i.name !== "AbortError" ? this.onerror?.(i) : this.onabort?.();
        }));
  }
};
const st = typeof XMLHttpRequest == "function" ? "xhr" : "fetch",
  Dn = st === "xhr" ? XMLHttpRequest : it,
  Ln = (t, e) => {
    const r = t.options,
      n = t.applyMiddleware("finalizeOptions", r),
      i = {},
      s = t.applyMiddleware("interceptRequest", void 0, { adapter: st, context: t });
    if (s) {
      const f = setTimeout(e, 0, null, s);
      return { abort: () => clearTimeout(f) };
    }
    let o = new Dn();
    o instanceof it && typeof n.fetch == "object" && o.setInit(n.fetch, n.useAbortSignal ?? !0);
    const a = n.headers,
      u = n.timeout;
    let c = !1,
      p = !1,
      h = !1;
    if (
      ((o.onerror = (f) => {
        v(
          o instanceof it
            ? f instanceof Error
              ? f
              : new Error(`Request error while attempting to reach is ${n.url}`, { cause: f })
            : new Error(
                `Request error while attempting to reach is ${n.url}${f.lengthComputable ? `(${f.loaded} of ${f.total} bytes transferred)` : ""}`,
              ),
        );
      }),
      (o.ontimeout = (f) => {
        v(
          new Error(
            `Request timeout while attempting to reach ${n.url}${f.lengthComputable ? `(${f.loaded} of ${f.total} bytes transferred)` : ""}`,
          ),
        );
      }),
      (o.onabort = () => {
        (l(!0), (c = !0));
      }),
      (o.onreadystatechange = function () {
        (u && (l(), (i.socket = setTimeout(() => d("ESOCKETTIMEDOUT"), u.socket))),
          !c &&
            o &&
            o.readyState === 4 &&
            o.status !== 0 &&
            (function () {
              if (!(c || p || h)) {
                if (o.status === 0) return void v(new Error("Unknown XHR error"));
                (l(),
                  (p = !0),
                  e(null, {
                    body: o.response || (o.responseType === "" || o.responseType === "text" ? o.responseText : ""),
                    url: n.url,
                    method: n.method,
                    headers: qn(o.getAllResponseHeaders()),
                    statusCode: o.status,
                    statusMessage: o.statusText,
                  }));
              }
            })());
      }),
      o.open(n.method, n.url, !0),
      (o.withCredentials = !!n.withCredentials),
      a && o.setRequestHeader)
    )
      for (const f in a) a.hasOwnProperty(f) && o.setRequestHeader(f, a[f]);
    return (
      n.rawBody && (o.responseType = "arraybuffer"),
      t.applyMiddleware("onRequest", { options: n, adapter: st, request: o, context: t }),
      o.send(n.body || null),
      u && (i.connect = setTimeout(() => d("ETIMEDOUT"), u.connect)),
      {
        abort: function () {
          ((c = !0), o && o.abort());
        },
      }
    );
    function d(f) {
      ((h = !0), o.abort());
      const w = new Error(
        f === "ESOCKETTIMEDOUT"
          ? `Socket timed out on request to ${n.url}`
          : `Connection timed out on request to ${n.url}`,
      );
      ((w.code = f), t.channels.error.publish(w));
    }
    function l(f) {
      ((f || c || (o && o.readyState >= 2 && i.connect)) && clearTimeout(i.connect),
        i.socket && clearTimeout(i.socket));
    }
    function v(f) {
      if (p) return;
      (l(!0), (p = !0), (o = null));
      const w = f || new Error(`Network error while attempting to reach ${n.url}`);
      ((w.isNetworkError = !0), (w.request = n), e(w));
    }
  },
  Fn = (t = [], e = Ln) => ir(t, e);
var Un = {},
  At,
  St,
  _t,
  Ot,
  $t,
  Ke = { exports: {} };
($t ||
  (($t = 1),
  (function (t, e) {
    ((e.formatArgs = function (n) {
      if (
        ((n[0] =
          (this.useColors ? "%c" : "") +
          this.namespace +
          (this.useColors ? " %c" : " ") +
          n[0] +
          (this.useColors ? "%c " : " ") +
          "+" +
          t.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      const i = "color: " + this.color;
      n.splice(1, 0, i, "color: inherit");
      let s = 0,
        o = 0;
      (n[0].replace(/%[a-zA-Z%]/g, (a) => {
        a !== "%%" && (s++, a === "%c" && (o = s));
      }),
        n.splice(o, 0, i));
    }),
      (e.save = function (n) {
        try {
          n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug");
        } catch {}
      }),
      (e.load = function () {
        let n;
        try {
          n = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
        } catch {}
        return (!n && typeof process < "u" && "env" in process && (n = Un.DEBUG), n);
      }),
      (e.useColors = function () {
        if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
          return !0;
        if (
          typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
          return !1;
        let n;
        return (
          (typeof document < "u" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug || (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            (n = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
            parseInt(n[1], 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }),
      (e.storage = (function () {
        try {
          return localStorage;
        } catch {}
      })()),
      (e.destroy = (() => {
        let n = !1;
        return () => {
          n ||
            ((n = !0),
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
            ));
        };
      })()),
      (e.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33",
      ]),
      (e.log = console.debug || console.log || (() => {})),
      (t.exports = (
        Ot
          ? _t
          : ((Ot = 1),
            (_t = function (n) {
              function i(a) {
                let u,
                  c,
                  p,
                  h = null;
                function d(...l) {
                  if (!d.enabled) return;
                  const v = d,
                    f = Number(new Date()),
                    w = f - (u || f);
                  ((v.diff = w),
                    (v.prev = u),
                    (v.curr = f),
                    (u = f),
                    (l[0] = i.coerce(l[0])),
                    typeof l[0] != "string" && l.unshift("%O"));
                  let I = 0;
                  ((l[0] = l[0].replace(/%([a-zA-Z%])/g, (x, C) => {
                    if (x === "%%") return "%";
                    I++;
                    const O = i.formatters[C];
                    if (typeof O == "function") {
                      const P = l[I];
                      ((x = O.call(v, P)), l.splice(I, 1), I--);
                    }
                    return x;
                  })),
                    i.formatArgs.call(v, l),
                    (v.log || i.log).apply(v, l));
                }
                return (
                  (d.namespace = a),
                  (d.useColors = i.useColors()),
                  (d.color = i.selectColor(a)),
                  (d.extend = s),
                  (d.destroy = i.destroy),
                  Object.defineProperty(d, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () => (h !== null ? h : (c !== i.namespaces && ((c = i.namespaces), (p = i.enabled(a))), p)),
                    set: (l) => {
                      h = l;
                    },
                  }),
                  typeof i.init == "function" && i.init(d),
                  d
                );
              }
              function s(a, u) {
                const c = i(this.namespace + (typeof u > "u" ? ":" : u) + a);
                return ((c.log = this.log), c);
              }
              function o(a, u) {
                let c = 0,
                  p = 0,
                  h = -1,
                  d = 0;
                for (; c < a.length;)
                  if (p < u.length && (u[p] === a[c] || u[p] === "*"))
                    u[p] === "*" ? ((h = p), (d = c), p++) : (c++, p++);
                  else {
                    if (h === -1) return !1;
                    ((p = h + 1), d++, (c = d));
                  }
                for (; p < u.length && u[p] === "*";) p++;
                return p === u.length;
              }
              return (
                (i.debug = i),
                (i.default = i),
                (i.coerce = function (a) {
                  return a instanceof Error ? a.stack || a.message : a;
                }),
                (i.disable = function () {
                  const a = [...i.names, ...i.skips.map((u) => "-" + u)].join(",");
                  return (i.enable(""), a);
                }),
                (i.enable = function (a) {
                  (i.save(a), (i.namespaces = a), (i.names = []), (i.skips = []));
                  const u = (typeof a == "string" ? a : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
                  for (const c of u) c[0] === "-" ? i.skips.push(c.slice(1)) : i.names.push(c);
                }),
                (i.enabled = function (a) {
                  for (const u of i.skips) if (o(a, u)) return !1;
                  for (const u of i.names) if (o(a, u)) return !0;
                  return !1;
                }),
                (i.humanize = (function () {
                  if (St) return At;
                  St = 1;
                  var a = 1e3,
                    u = 60 * a,
                    c = 60 * u,
                    p = 24 * c,
                    h = 7 * p;
                  function d(l, v, f, w) {
                    var I = v >= 1.5 * f;
                    return Math.round(l / f) + " " + w + (I ? "s" : "");
                  }
                  return (At = function (l, v) {
                    v = v || {};
                    var f,
                      w,
                      I = typeof l;
                    if (I === "string" && l.length > 0)
                      return (function (x) {
                        if (!((x = String(x)).length > 100)) {
                          var C =
                            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                              x,
                            );
                          if (C) {
                            var O = parseFloat(C[1]);
                            switch ((C[2] || "ms").toLowerCase()) {
                              case "years":
                              case "year":
                              case "yrs":
                              case "yr":
                              case "y":
                                return 315576e5 * O;
                              case "weeks":
                              case "week":
                              case "w":
                                return O * h;
                              case "days":
                              case "day":
                              case "d":
                                return O * p;
                              case "hours":
                              case "hour":
                              case "hrs":
                              case "hr":
                              case "h":
                                return O * c;
                              case "minutes":
                              case "minute":
                              case "mins":
                              case "min":
                              case "m":
                                return O * u;
                              case "seconds":
                              case "second":
                              case "secs":
                              case "sec":
                              case "s":
                                return O * a;
                              case "milliseconds":
                              case "millisecond":
                              case "msecs":
                              case "msec":
                              case "ms":
                                return O;
                              default:
                                return;
                            }
                          }
                        }
                      })(l);
                    if (I === "number" && isFinite(l))
                      return v.long
                        ? ((f = l),
                          (w = Math.abs(f)) >= p
                            ? d(f, w, p, "day")
                            : w >= c
                              ? d(f, w, c, "hour")
                              : w >= u
                                ? d(f, w, u, "minute")
                                : w >= a
                                  ? d(f, w, a, "second")
                                  : f + " ms")
                        : (function (x) {
                            var C = Math.abs(x);
                            return C >= p
                              ? Math.round(x / p) + "d"
                              : C >= c
                                ? Math.round(x / c) + "h"
                                : C >= u
                                  ? Math.round(x / u) + "m"
                                  : C >= a
                                    ? Math.round(x / a) + "s"
                                    : x + "ms";
                          })(l);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(l));
                  });
                })()),
                (i.destroy = function () {
                  console.warn(
                    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                  );
                }),
                Object.keys(n).forEach((a) => {
                  i[a] = n[a];
                }),
                (i.names = []),
                (i.skips = []),
                (i.formatters = {}),
                (i.selectColor = function (a) {
                  let u = 0;
                  for (let c = 0; c < a.length; c++) ((u = (u << 5) - u + a.charCodeAt(c)), (u |= 0));
                  return i.colors[Math.abs(u) % i.colors.length];
                }),
                i.enable(i.load()),
                i
              );
            }))
      )(e)));
    const { formatters: r } = t.exports;
    r.j = function (n) {
      try {
        return JSON.stringify(n);
      } catch (i) {
        return "[UnexpectedJSONParseError]: " + i.message;
      }
    };
  })(Ke, Ke.exports)),
  Ke.exports);
const Vn = typeof Buffer > "u" ? () => !1 : (t) => Buffer.isBuffer(t);
function kt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Nn(t) {
  if (kt(t) === !1) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const r = e.prototype;
  return !(kt(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1);
}
const Bn = ["boolean", "string", "number"];
function Hn() {
  return {
    processOptions: (t) => {
      const e = t.body;
      return !e || typeof e.pipe == "function" || Vn(e) || (Bn.indexOf(typeof e) === -1 && !Array.isArray(e) && !Nn(e))
        ? t
        : Object.assign({}, t, {
            body: JSON.stringify(t.body),
            headers: Object.assign({}, t.headers, { "Content-Type": "application/json" }),
          });
    },
  };
}
function Wn(t) {
  return {
    onResponse: (r) => {
      const n = r.headers["content-type"] || "",
        i = (t && t.force) || n.indexOf("application/json") !== -1;
      return r.body && n && i ? Object.assign({}, r, { body: e(r.body) }) : r;
    },
    processOptions: (r) => Object.assign({}, r, { headers: Object.assign({ Accept: "application/json" }, r.headers) }),
  };
  function e(r) {
    try {
      return JSON.parse(r);
    } catch (n) {
      throw ((n.message = `Failed to parsed response body as JSON: ${n.message}`), n);
    }
  }
}
let be = {};
typeof globalThis < "u"
  ? (be = globalThis)
  : typeof window < "u"
    ? (be = window)
    : typeof global < "u"
      ? (be = global)
      : typeof self < "u" && (be = self);
var zn = be;
function Gn(t = {}) {
  const e = t.implementation || zn.Observable;
  if (!e) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return {
    onReturn: (r, n) =>
      new e(
        (i) => (
          r.error.subscribe((s) => i.error(s)),
          r.progress.subscribe((s) => i.next(Object.assign({ type: "progress" }, s))),
          r.response.subscribe((s) => {
            (i.next(Object.assign({ type: "response" }, s)), i.complete());
          }),
          r.request.publish(n),
          () => r.abort.publish()
        ),
      ),
  };
}
function Qn() {
  return {
    onRequest: (t) => {
      if (t.adapter !== "xhr") return;
      const e = t.request,
        r = t.context;
      function n(i) {
        return (s) => {
          const o = s.lengthComputable ? (s.loaded / s.total) * 100 : -1;
          r.channels.progress.publish({
            stage: i,
            percent: o,
            total: s.total,
            loaded: s.loaded,
            lengthComputable: s.lengthComputable,
          });
        };
      }
      ("upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")),
        "onprogress" in e && (e.onprogress = n("download")));
    },
  };
}
var sr = (t, e, r) => (r.method === "GET" || r.method === "HEAD") && (t.isNetworkError || !1);
function Yn(t) {
  return 100 * Math.pow(2, t) + 100 * Math.random();
}
const ut = (t = {}) =>
  ((e) => {
    const r = e.maxRetries || 5,
      n = e.retryDelay || Yn,
      i = e.shouldRetry;
    return {
      onError: (s, o) => {
        const a = o.options,
          u = a.maxRetries || r,
          c = a.retryDelay || n,
          p = a.shouldRetry || i,
          h = a.attemptNumber || 0;
        if (((d = a.body) !== null && typeof d == "object" && typeof d.pipe == "function") || !p(s, h, a) || h >= u)
          return s;
        var d;
        const l = Object.assign({}, o, { options: Object.assign({}, a, { attemptNumber: h + 1 }) });
        return (setTimeout(() => o.channels.request.publish(l), c(h)), null);
      },
    };
  })({ shouldRetry: sr, ...t });
ut.shouldRetry = sr;
var ot = function (t, e) {
  return (
    (ot =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
      }),
    ot(t, e)
  );
};
function Q(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ot(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
}
function Jn(t, e, r, n) {
  function i(s) {
    return s instanceof r
      ? s
      : new r(function (o) {
          o(s);
        });
  }
  return new (r || (r = Promise))(function (s, o) {
    function a(p) {
      try {
        c(n.next(p));
      } catch (h) {
        o(h);
      }
    }
    function u(p) {
      try {
        c(n.throw(p));
      } catch (h) {
        o(h);
      }
    }
    function c(p) {
      p.done ? s(p.value) : i(p.value).then(a, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function or(t, e) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    s,
    o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (o.next = a(0)),
    (o.throw = a(1)),
    (o.return = a(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(c) {
    return function (p) {
      return u([c, p]);
    };
  }
  function u(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), c[0] && (r = 0)), r;)
      try {
        if (
          ((n = 1),
          i &&
            (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) &&
            !(s = s.call(i, c[1])).done)
        )
          return s;
        switch (((i = 0), s && (c = [c[0] & 2, s.value]), c[0])) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return (r.label++, { value: c[1], done: !1 });
          case 5:
            (r.label++, (i = c[1]), (c = [0]));
            continue;
          case 7:
            ((c = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (((s = r.trys), !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2))) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!s || (c[1] > s[0] && c[1] < s[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < s[1]) {
              ((r.label = s[1]), (s = c));
              break;
            }
            if (s && r.label < s[2]) {
              ((r.label = s[2]), r.ops.push(c));
              break;
            }
            (s[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        c = e.call(t, r);
      } catch (p) {
        ((c = [6, p]), (i = 0));
      } finally {
        n = s = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function ce(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t });
      },
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function z(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t),
    i,
    s = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done;) s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function G(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
  return t.concat(s || Array.prototype.slice.call(e));
}
function oe(t) {
  return this instanceof oe ? ((this.v = t), this) : new oe(t);
}
function Kn(t, e, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []),
    i,
    s = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    a("next"),
    a("throw"),
    a("return", o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(l) {
    return function (v) {
      return Promise.resolve(v).then(l, h);
    };
  }
  function a(l, v) {
    n[l] &&
      ((i[l] = function (f) {
        return new Promise(function (w, I) {
          s.push([l, f, w, I]) > 1 || u(l, f);
        });
      }),
      v && (i[l] = v(i[l])));
  }
  function u(l, v) {
    try {
      c(n[l](v));
    } catch (f) {
      d(s[0][3], f);
    }
  }
  function c(l) {
    l.value instanceof oe ? Promise.resolve(l.value.v).then(p, h) : d(s[0][2], l);
  }
  function p(l) {
    u("next", l);
  }
  function h(l) {
    u("throw", l);
  }
  function d(l, v) {
    (l(v), s.shift(), s.length && u(s[0][0], s[0][1]));
  }
}
function Xn(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof ce == "function" ? ce(t) : t[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(s) {
    r[s] =
      t[s] &&
      function (o) {
        return new Promise(function (a, u) {
          ((o = t[s](o)), i(a, u, o.done, o.value));
        });
      };
  }
  function i(s, o, a, u) {
    Promise.resolve(u).then(function (c) {
      s({ value: c, done: a });
    }, o);
  }
}
function k(t) {
  return typeof t == "function";
}
function ct(t) {
  var e = function (n) {
      (Error.call(n), (n.stack = new Error().stack));
    },
    r = t(e);
  return ((r.prototype = Object.create(Error.prototype)), (r.prototype.constructor = r), r);
}
var Xe = ct(function (t) {
  return function (r) {
    (t(this),
      (this.message = r
        ? r.length +
          ` errors occurred during unsubscription:
` +
          r.map(function (n, i) {
            return i + 1 + ") " + n.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = r));
  };
});
function je(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var Ee = (function () {
    function t(e) {
      ((this.initialTeardown = e), (this.closed = !1), (this._parentage = null), (this._finalizers = null));
    }
    return (
      (t.prototype.unsubscribe = function () {
        var e, r, n, i, s;
        if (!this.closed) {
          this.closed = !0;
          var o = this._parentage;
          if (o)
            if (((this._parentage = null), Array.isArray(o)))
              try {
                for (var a = ce(o), u = a.next(); !u.done; u = a.next()) {
                  var c = u.value;
                  c.remove(this);
                }
              } catch (f) {
                e = { error: f };
              } finally {
                try {
                  u && !u.done && (r = a.return) && r.call(a);
                } finally {
                  if (e) throw e.error;
                }
              }
            else o.remove(this);
          var p = this.initialTeardown;
          if (k(p))
            try {
              p();
            } catch (f) {
              s = f instanceof Xe ? f.errors : [f];
            }
          var h = this._finalizers;
          if (h) {
            this._finalizers = null;
            try {
              for (var d = ce(h), l = d.next(); !l.done; l = d.next()) {
                var v = l.value;
                try {
                  Tt(v);
                } catch (f) {
                  ((s = s ?? []), f instanceof Xe ? (s = G(G([], z(s)), z(f.errors))) : s.push(f));
                }
              }
            } catch (f) {
              n = { error: f };
            } finally {
              try {
                l && !l.done && (i = d.return) && i.call(d);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          if (s) throw new Xe(s);
        }
      }),
      (t.prototype.add = function (e) {
        var r;
        if (e && e !== this)
          if (this.closed) Tt(e);
          else {
            if (e instanceof t) {
              if (e.closed || e._hasParent(this)) return;
              e._addParent(this);
            }
            (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
          }
      }),
      (t.prototype._hasParent = function (e) {
        var r = this._parentage;
        return r === e || (Array.isArray(r) && r.includes(e));
      }),
      (t.prototype._addParent = function (e) {
        var r = this._parentage;
        this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
      }),
      (t.prototype._removeParent = function (e) {
        var r = this._parentage;
        r === e ? (this._parentage = null) : Array.isArray(r) && je(r, e);
      }),
      (t.prototype.remove = function (e) {
        var r = this._finalizers;
        (r && je(r, e), e instanceof t && e._removeParent(this));
      }),
      (t.EMPTY = (function () {
        var e = new t();
        return ((e.closed = !0), e);
      })()),
      t
    );
  })(),
  ar = Ee.EMPTY;
function ur(t) {
  return t instanceof Ee || (t && "closed" in t && k(t.remove) && k(t.add) && k(t.unsubscribe));
}
function Tt(t) {
  k(t) ? t() : t.unsubscribe();
}
var Zn = { Promise: void 0 },
  ei = {
    setTimeout: function (t, e) {
      for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
      return setTimeout.apply(void 0, G([t, e], z(r)));
    },
    clearTimeout: function (t) {
      return clearTimeout(t);
    },
    delegate: void 0,
  };
function cr(t) {
  ei.setTimeout(function () {
    throw t;
  });
}
function jt() {}
function ke(t) {
  t();
}
var lt = (function (t) {
    Q(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return ((n.isStopped = !1), r ? ((n.destination = r), ur(r) && r.add(n)) : (n.destination = ni), n);
    }
    return (
      (e.create = function (r, n, i) {
        return new le(r, n, i);
      }),
      (e.prototype.next = function (r) {
        this.isStopped || this._next(r);
      }),
      (e.prototype.error = function (r) {
        this.isStopped || ((this.isStopped = !0), this._error(r));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this), (this.destination = null));
      }),
      (e.prototype._next = function (r) {
        this.destination.next(r);
      }),
      (e.prototype._error = function (r) {
        try {
          this.destination.error(r);
        } finally {
          this.unsubscribe();
        }
      }),
      (e.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      e
    );
  })(Ee),
  ti = (function () {
    function t(e) {
      this.partialObserver = e;
    }
    return (
      (t.prototype.next = function (e) {
        var r = this.partialObserver;
        if (r.next)
          try {
            r.next(e);
          } catch (n) {
            Oe(n);
          }
      }),
      (t.prototype.error = function (e) {
        var r = this.partialObserver;
        if (r.error)
          try {
            r.error(e);
          } catch (n) {
            Oe(n);
          }
        else Oe(e);
      }),
      (t.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete)
          try {
            e.complete();
          } catch (r) {
            Oe(r);
          }
      }),
      t
    );
  })(),
  le = (function (t) {
    Q(e, t);
    function e(r, n, i) {
      var s = t.call(this) || this,
        o;
      return (
        k(r) || !r ? (o = { next: r ?? void 0, error: n ?? void 0, complete: i ?? void 0 }) : (o = r),
        (s.destination = new ti(o)),
        s
      );
    }
    return e;
  })(lt);
function Oe(t) {
  cr(t);
}
function ri(t) {
  throw t;
}
var ni = { closed: !0, next: jt, error: ri, complete: jt },
  ft = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function Ve(t) {
  return t;
}
function ii() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return lr(t);
}
function lr(t) {
  return t.length === 0
    ? Ve
    : t.length === 1
      ? t[0]
      : function (r) {
          return t.reduce(function (n, i) {
            return i(n);
          }, r);
        };
}
var j = (function () {
  function t(e) {
    e && (this._subscribe = e);
  }
  return (
    (t.prototype.lift = function (e) {
      var r = new t();
      return ((r.source = this), (r.operator = e), r);
    }),
    (t.prototype.subscribe = function (e, r, n) {
      var i = this,
        s = oi(e) ? e : new le(e, r, n);
      return (
        ke(function () {
          var o = i,
            a = o.operator,
            u = o.source;
          s.add(a ? a.call(s, u) : u ? i._subscribe(s) : i._trySubscribe(s));
        }),
        s
      );
    }),
    (t.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (r) {
        e.error(r);
      }
    }),
    (t.prototype.forEach = function (e, r) {
      var n = this;
      return (
        (r = Rt(r)),
        new r(function (i, s) {
          var o = new le({
            next: function (a) {
              try {
                e(a);
              } catch (u) {
                (s(u), o.unsubscribe());
              }
            },
            error: s,
            complete: i,
          });
          n.subscribe(o);
        })
      );
    }),
    (t.prototype._subscribe = function (e) {
      var r;
      return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
    }),
    (t.prototype[ft] = function () {
      return this;
    }),
    (t.prototype.pipe = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
      return lr(e)(this);
    }),
    (t.prototype.toPromise = function (e) {
      var r = this;
      return (
        (e = Rt(e)),
        new e(function (n, i) {
          var s;
          r.subscribe(
            function (o) {
              return (s = o);
            },
            function (o) {
              return i(o);
            },
            function () {
              return n(s);
            },
          );
        })
      );
    }),
    (t.create = function (e) {
      return new t(e);
    }),
    t
  );
})();
function Rt(t) {
  var e;
  return (e = t ?? Zn.Promise) !== null && e !== void 0 ? e : Promise;
}
function si(t) {
  return t && k(t.next) && k(t.error) && k(t.complete);
}
function oi(t) {
  return (t && t instanceof lt) || (si(t) && ur(t));
}
function ai(t) {
  return k(t?.lift);
}
function B(t) {
  return function (e) {
    if (ai(e))
      return e.lift(function (r) {
        try {
          return t(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function J(t, e, r, n, i) {
  return new ui(t, e, r, n, i);
}
var ui = (function (t) {
    Q(e, t);
    function e(r, n, i, s, o, a) {
      var u = t.call(this, r) || this;
      return (
        (u.onFinalize = o),
        (u.shouldUnsubscribe = a),
        (u._next = n
          ? function (c) {
              try {
                n(c);
              } catch (p) {
                r.error(p);
              }
            }
          : t.prototype._next),
        (u._error = s
          ? function (c) {
              try {
                s(c);
              } catch (p) {
                r.error(p);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._error),
        (u._complete = i
          ? function () {
              try {
                i();
              } catch (c) {
                r.error(c);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._complete),
        u
      );
    }
    return (
      (e.prototype.unsubscribe = function () {
        var r;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed;
          (t.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this)));
        }
      }),
      e
    );
  })(lt),
  ci = ct(function (t) {
    return function () {
      (t(this), (this.name = "ObjectUnsubscribedError"), (this.message = "object unsubscribed"));
    };
  }),
  ht = (function (t) {
    Q(e, t);
    function e() {
      var r = t.call(this) || this;
      return (
        (r.closed = !1),
        (r.currentObservers = null),
        (r.observers = []),
        (r.isStopped = !1),
        (r.hasError = !1),
        (r.thrownError = null),
        r
      );
    }
    return (
      (e.prototype.lift = function (r) {
        var n = new Pt(this, this);
        return ((n.operator = r), n);
      }),
      (e.prototype._throwIfClosed = function () {
        if (this.closed) throw new ci();
      }),
      (e.prototype.next = function (r) {
        var n = this;
        ke(function () {
          var i, s;
          if ((n._throwIfClosed(), !n.isStopped)) {
            n.currentObservers || (n.currentObservers = Array.from(n.observers));
            try {
              for (var o = ce(n.currentObservers), a = o.next(); !a.done; a = o.next()) {
                var u = a.value;
                u.next(r);
              }
            } catch (c) {
              i = { error: c };
            } finally {
              try {
                a && !a.done && (s = o.return) && s.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        });
      }),
      (e.prototype.error = function (r) {
        var n = this;
        ke(function () {
          if ((n._throwIfClosed(), !n.isStopped)) {
            ((n.hasError = n.isStopped = !0), (n.thrownError = r));
            for (var i = n.observers; i.length;) i.shift().error(r);
          }
        });
      }),
      (e.prototype.complete = function () {
        var r = this;
        ke(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.isStopped = !0;
            for (var n = r.observers; n.length;) n.shift().complete();
          }
        });
      }),
      (e.prototype.unsubscribe = function () {
        ((this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null));
      }),
      Object.defineProperty(e.prototype, "observed", {
        get: function () {
          var r;
          return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._trySubscribe = function (r) {
        return (this._throwIfClosed(), t.prototype._trySubscribe.call(this, r));
      }),
      (e.prototype._subscribe = function (r) {
        return (this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r));
      }),
      (e.prototype._innerSubscribe = function (r) {
        var n = this,
          i = this,
          s = i.hasError,
          o = i.isStopped,
          a = i.observers;
        return s || o
          ? ar
          : ((this.currentObservers = null),
            a.push(r),
            new Ee(function () {
              ((n.currentObservers = null), je(a, r));
            }));
      }),
      (e.prototype._checkFinalizedStatuses = function (r) {
        var n = this,
          i = n.hasError,
          s = n.thrownError,
          o = n.isStopped;
        i ? r.error(s) : o && r.complete();
      }),
      (e.prototype.asObservable = function () {
        var r = new j();
        return ((r.source = this), r);
      }),
      (e.create = function (r, n) {
        return new Pt(r, n);
      }),
      e
    );
  })(j),
  Pt = (function (t) {
    Q(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return ((i.destination = r), (i.source = n), i);
    }
    return (
      (e.prototype.next = function (r) {
        var n, i;
        (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null ||
          i === void 0 ||
          i.call(n, r);
      }),
      (e.prototype.error = function (r) {
        var n, i;
        (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null ||
          i === void 0 ||
          i.call(n, r);
      }),
      (e.prototype.complete = function () {
        var r, n;
        (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null ||
          n === void 0 ||
          n.call(r);
      }),
      (e.prototype._subscribe = function (r) {
        var n, i;
        return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && i !== void 0
          ? i
          : ar;
      }),
      e
    );
  })(ht),
  dt = {
    now: function () {
      return (dt.delegate || Date).now();
    },
    delegate: void 0,
  },
  li = (function (t) {
    Q(e, t);
    function e(r, n, i) {
      (r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = dt));
      var s = t.call(this) || this;
      return (
        (s._bufferSize = r),
        (s._windowTime = n),
        (s._timestampProvider = i),
        (s._buffer = []),
        (s._infiniteTimeWindow = !0),
        (s._infiniteTimeWindow = n === 1 / 0),
        (s._bufferSize = Math.max(1, r)),
        (s._windowTime = Math.max(1, n)),
        s
      );
    }
    return (
      (e.prototype.next = function (r) {
        var n = this,
          i = n.isStopped,
          s = n._buffer,
          o = n._infiniteTimeWindow,
          a = n._timestampProvider,
          u = n._windowTime;
        (i || (s.push(r), !o && s.push(a.now() + u)), this._trimBuffer(), t.prototype.next.call(this, r));
      }),
      (e.prototype._subscribe = function (r) {
        (this._throwIfClosed(), this._trimBuffer());
        for (
          var n = this._innerSubscribe(r), i = this, s = i._infiniteTimeWindow, o = i._buffer, a = o.slice(), u = 0;
          u < a.length && !r.closed;
          u += s ? 1 : 2
        )
          r.next(a[u]);
        return (this._checkFinalizedStatuses(r), n);
      }),
      (e.prototype._trimBuffer = function () {
        var r = this,
          n = r._bufferSize,
          i = r._timestampProvider,
          s = r._buffer,
          o = r._infiniteTimeWindow,
          a = (o ? 1 : 2) * n;
        if ((n < 1 / 0 && a < s.length && s.splice(0, s.length - a), !o)) {
          for (var u = i.now(), c = 0, p = 1; p < s.length && s[p] <= u; p += 2) c = p;
          c && s.splice(0, c + 1);
        }
      }),
      e
    );
  })(ht),
  fi = (function (t) {
    Q(e, t);
    function e(r, n) {
      return t.call(this) || this;
    }
    return (
      (e.prototype.schedule = function (r, n) {
        return this;
      }),
      e
    );
  })(Ee),
  Mt = {
    setInterval: function (t, e) {
      for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
      return setInterval.apply(void 0, G([t, e], z(r)));
    },
    clearInterval: function (t) {
      return clearInterval(t);
    },
    delegate: void 0,
  },
  hi = (function (t) {
    Q(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return ((i.scheduler = r), (i.work = n), (i.pending = !1), i);
    }
    return (
      (e.prototype.schedule = function (r, n) {
        var i;
        if ((n === void 0 && (n = 0), this.closed)) return this;
        this.state = r;
        var s = this.id,
          o = this.scheduler;
        return (
          s != null && (this.id = this.recycleAsyncId(o, s, n)),
          (this.pending = !0),
          (this.delay = n),
          (this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, n)),
          this
        );
      }),
      (e.prototype.requestAsyncId = function (r, n, i) {
        return (i === void 0 && (i = 0), Mt.setInterval(r.flush.bind(r, this), i));
      }),
      (e.prototype.recycleAsyncId = function (r, n, i) {
        if ((i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)) return n;
        n != null && Mt.clearInterval(n);
      }),
      (e.prototype.execute = function (r, n) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var i = this._execute(r, n);
        if (i) return i;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (e.prototype._execute = function (r, n) {
        var i = !1,
          s;
        try {
          this.work(r);
        } catch (o) {
          ((i = !0), (s = o || new Error("Scheduled action threw falsy error")));
        }
        if (i) return (this.unsubscribe(), s);
      }),
      (e.prototype.unsubscribe = function () {
        if (!this.closed) {
          var r = this,
            n = r.id,
            i = r.scheduler,
            s = i.actions;
          ((this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            je(s, this),
            n != null && (this.id = this.recycleAsyncId(i, n, null)),
            (this.delay = null),
            t.prototype.unsubscribe.call(this));
        }
      }),
      e
    );
  })(fi),
  qt = (function () {
    function t(e, r) {
      (r === void 0 && (r = t.now), (this.schedulerActionCtor = e), (this.now = r));
    }
    return (
      (t.prototype.schedule = function (e, r, n) {
        return (r === void 0 && (r = 0), new this.schedulerActionCtor(this, e).schedule(n, r));
      }),
      (t.now = dt.now),
      t
    );
  })(),
  di = (function (t) {
    Q(e, t);
    function e(r, n) {
      n === void 0 && (n = qt.now);
      var i = t.call(this, r, n) || this;
      return ((i.actions = []), (i._active = !1), i);
    }
    return (
      (e.prototype.flush = function (r) {
        var n = this.actions;
        if (this._active) {
          n.push(r);
          return;
        }
        var i;
        this._active = !0;
        do if ((i = r.execute(r.state, r.delay))) break;
        while ((r = n.shift()));
        if (((this._active = !1), i)) {
          for (; (r = n.shift());) r.unsubscribe();
          throw i;
        }
      }),
      e
    );
  })(qt),
  pi = new di(hi),
  yi = pi,
  mi = new j(function (t) {
    return t.complete();
  });
function vi(t) {
  return t && k(t.schedule);
}
function pt(t) {
  return t[t.length - 1];
}
function gi(t) {
  return k(pt(t)) ? t.pop() : void 0;
}
function yt(t) {
  return vi(pt(t)) ? t.pop() : void 0;
}
function bi(t, e) {
  return typeof pt(t) == "number" ? t.pop() : e;
}
var fr = function (t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function hr(t) {
  return k(t?.then);
}
function dr(t) {
  return k(t[ft]);
}
function pr(t) {
  return Symbol.asyncIterator && k(t?.[Symbol.asyncIterator]);
}
function yr(t) {
  return new TypeError(
    "You provided " +
      (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.",
  );
}
function wi() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var mr = wi();
function vr(t) {
  return k(t?.[mr]);
}
function gr(t) {
  return Kn(this, arguments, function () {
    var r, n, i, s;
    return or(this, function (o) {
      switch (o.label) {
        case 0:
          ((r = t.getReader()), (o.label = 1));
        case 1:
          (o.trys.push([1, , 9, 10]), (o.label = 2));
        case 2:
          return [4, oe(r.read())];
        case 3:
          return ((n = o.sent()), (i = n.value), (s = n.done), s ? [4, oe(void 0)] : [3, 5]);
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, oe(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return (o.sent(), [3, 2]);
        case 8:
          return [3, 10];
        case 9:
          return (r.releaseLock(), [7]);
        case 10:
          return [2];
      }
    });
  });
}
function br(t) {
  return k(t?.getReader);
}
function H(t) {
  if (t instanceof j) return t;
  if (t != null) {
    if (dr(t)) return Ii(t);
    if (fr(t)) return Ei(t);
    if (hr(t)) return xi(t);
    if (pr(t)) return wr(t);
    if (vr(t)) return Ci(t);
    if (br(t)) return Ai(t);
  }
  throw yr(t);
}
function Ii(t) {
  return new j(function (e) {
    var r = t[ft]();
    if (k(r.subscribe)) return r.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Ei(t) {
  return new j(function (e) {
    for (var r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
    e.complete();
  });
}
function xi(t) {
  return new j(function (e) {
    t.then(
      function (r) {
        e.closed || (e.next(r), e.complete());
      },
      function (r) {
        return e.error(r);
      },
    ).then(null, cr);
  });
}
function Ci(t) {
  return new j(function (e) {
    var r, n;
    try {
      for (var i = ce(t), s = i.next(); !s.done; s = i.next()) {
        var o = s.value;
        if ((e.next(o), e.closed)) return;
      }
    } catch (a) {
      r = { error: a };
    } finally {
      try {
        s && !s.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    e.complete();
  });
}
function wr(t) {
  return new j(function (e) {
    Si(t, e).catch(function (r) {
      return e.error(r);
    });
  });
}
function Ai(t) {
  return wr(gr(t));
}
function Si(t, e) {
  var r, n, i, s;
  return Jn(this, void 0, void 0, function () {
    var o, a;
    return or(this, function (u) {
      switch (u.label) {
        case 0:
          (u.trys.push([0, 5, 6, 11]), (r = Xn(t)), (u.label = 1));
        case 1:
          return [4, r.next()];
        case 2:
          if (((n = u.sent()), !!n.done)) return [3, 4];
          if (((o = n.value), e.next(o), e.closed)) return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return ((a = u.sent()), (i = { error: a }), [3, 11]);
        case 6:
          return (u.trys.push([6, , 9, 10]), n && !n.done && (s = r.return) ? [4, s.call(r)] : [3, 8]);
        case 7:
          (u.sent(), (u.label = 8));
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return (e.complete(), [2]);
      }
    });
  });
}
function ee(t, e, r, n, i) {
  (n === void 0 && (n = 0), i === void 0 && (i = !1));
  var s = e.schedule(function () {
    (r(), i ? t.add(this.schedule(null, n)) : this.unsubscribe());
  }, n);
  if ((t.add(s), !i)) return s;
}
function Ir(t, e) {
  return (
    e === void 0 && (e = 0),
    B(function (r, n) {
      r.subscribe(
        J(
          n,
          function (i) {
            return ee(
              n,
              t,
              function () {
                return n.next(i);
              },
              e,
            );
          },
          function () {
            return ee(
              n,
              t,
              function () {
                return n.complete();
              },
              e,
            );
          },
          function (i) {
            return ee(
              n,
              t,
              function () {
                return n.error(i);
              },
              e,
            );
          },
        ),
      );
    })
  );
}
function Er(t, e) {
  return (
    e === void 0 && (e = 0),
    B(function (r, n) {
      n.add(
        t.schedule(function () {
          return r.subscribe(n);
        }, e),
      );
    })
  );
}
function _i(t, e) {
  return H(t).pipe(Er(e), Ir(e));
}
function Oi(t, e) {
  return H(t).pipe(Er(e), Ir(e));
}
function $i(t, e) {
  return new j(function (r) {
    var n = 0;
    return e.schedule(function () {
      n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule());
    });
  });
}
function ki(t, e) {
  return new j(function (r) {
    var n;
    return (
      ee(r, e, function () {
        ((n = t[mr]()),
          ee(
            r,
            e,
            function () {
              var i, s, o;
              try {
                ((i = n.next()), (s = i.value), (o = i.done));
              } catch (a) {
                r.error(a);
                return;
              }
              o ? r.complete() : r.next(s);
            },
            0,
            !0,
          ));
      }),
      function () {
        return k(n?.return) && n.return();
      }
    );
  });
}
function xr(t, e) {
  if (!t) throw new Error("Iterable cannot be null");
  return new j(function (r) {
    ee(r, e, function () {
      var n = t[Symbol.asyncIterator]();
      ee(
        r,
        e,
        function () {
          n.next().then(function (i) {
            i.done ? r.complete() : r.next(i.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Ti(t, e) {
  return xr(gr(t), e);
}
function ji(t, e) {
  if (t != null) {
    if (dr(t)) return _i(t, e);
    if (fr(t)) return $i(t, e);
    if (hr(t)) return Oi(t, e);
    if (pr(t)) return xr(t, e);
    if (vr(t)) return ki(t, e);
    if (br(t)) return Ti(t, e);
  }
  throw yr(t);
}
function xe(t, e) {
  return e ? ji(t, e) : H(t);
}
function ae() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = yt(t);
  return xe(t, r);
}
function Cr(t, e) {
  var r = k(t)
      ? t
      : function () {
          return t;
        },
    n = function (i) {
      return i.error(r());
    };
  return new j(n);
}
function Ri(t) {
  return !!t && (t instanceof j || (k(t.lift) && k(t.subscribe)));
}
var Ar = ct(function (t) {
  return function () {
    (t(this), (this.name = "EmptyError"), (this.message = "no elements in sequence"));
  };
});
function A(t, e) {
  return new Promise(function (r, n) {
    var i = !1,
      s;
    t.subscribe({
      next: function (o) {
        ((s = o), (i = !0));
      },
      error: n,
      complete: function () {
        i ? r(s) : n(new Ar());
      },
    });
  });
}
function Ze(t, e) {
  return new Promise(function (r, n) {
    var i = new le({
      next: function (s) {
        (r(s), i.unsubscribe());
      },
      error: n,
      complete: function () {
        n(new Ar());
      },
    });
    t.subscribe(i);
  });
}
function Pi(t) {
  return t instanceof Date && !isNaN(t);
}
function M(t, e) {
  return B(function (r, n) {
    var i = 0;
    r.subscribe(
      J(n, function (s) {
        n.next(t.call(e, s, i++));
      }),
    );
  });
}
var Mi = Array.isArray;
function qi(t, e) {
  return Mi(e) ? t.apply(void 0, G([], z(e))) : t(e);
}
function Di(t) {
  return M(function (e) {
    return qi(t, e);
  });
}
function Li(t, e, r) {
  return (
    r === void 0 && (r = Ve),
    function (n) {
      Dt(e, function () {
        for (
          var i = t.length,
            s = new Array(i),
            o = i,
            a = i,
            u = function (p) {
              Dt(
                e,
                function () {
                  var h = xe(t[p], e),
                    d = !1;
                  h.subscribe(
                    J(
                      n,
                      function (l) {
                        ((s[p] = l), d || ((d = !0), a--), a || n.next(r(s.slice())));
                      },
                      function () {
                        --o || n.complete();
                      },
                    ),
                  );
                },
                n,
              );
            },
            c = 0;
          c < i;
          c++
        )
          u(c);
      });
    }
  );
}
function Dt(t, e, r) {
  e();
}
function Fi(t, e, r, n, i, s, o, a) {
  var u = [],
    c = 0,
    p = 0,
    h = !1,
    d = function () {
      h && !u.length && !c && e.complete();
    },
    l = function (f) {
      return c < n ? v(f) : u.push(f);
    },
    v = function (f) {
      c++;
      var w = !1;
      H(r(f, p++)).subscribe(
        J(
          e,
          function (I) {
            e.next(I);
          },
          function () {
            w = !0;
          },
          void 0,
          function () {
            if (w)
              try {
                c--;
                for (
                  var I = function () {
                    var x = u.shift();
                    o || v(x);
                  };
                  u.length && c < n;
                )
                  I();
                d();
              } catch (x) {
                e.error(x);
              }
          },
        ),
      );
    };
  return (
    t.subscribe(
      J(e, l, function () {
        ((h = !0), d());
      }),
    ),
    function () {}
  );
}
function te(t, e, r) {
  return (
    r === void 0 && (r = 1 / 0),
    k(e)
      ? te(function (n, i) {
          return M(function (s, o) {
            return e(n, s, i, o);
          })(H(t(n, i)));
        }, r)
      : (typeof e == "number" && (r = e),
        B(function (n, i) {
          return Fi(n, i, t, r);
        }))
  );
}
function Sr(t) {
  return (t === void 0 && (t = 1 / 0), te(Ve, t));
}
function Ui() {
  return Sr(1);
}
function Vi() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Ui()(xe(t, yt(t)));
}
function _r(t) {
  return new j(function (e) {
    H(t()).subscribe(e);
  });
}
function Ni(t, e, r) {
  return (
    r === void 0 && (r = yi),
    new j(function (n) {
      var i = Pi(t) ? +t - r.now() : t;
      i < 0 && (i = 0);
      var s = 0;
      return r.schedule(function () {
        n.closed || (n.next(s++), n.complete());
      }, i);
    })
  );
}
function Bi() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = yt(t),
    n = bi(t, 1 / 0),
    i = t;
  return i.length ? (i.length === 1 ? H(i[0]) : Sr(n)(xe(i, r))) : mi;
}
var Hi = Array.isArray;
function Wi(t) {
  return t.length === 1 && Hi(t[0]) ? t[0] : t;
}
function pe(t, e) {
  return B(function (r, n) {
    var i = 0;
    r.subscribe(
      J(n, function (s) {
        return t.call(e, s, i++) && n.next(s);
      }),
    );
  });
}
function Re(t) {
  return B(function (e, r) {
    var n = null,
      i = !1,
      s;
    ((n = e.subscribe(
      J(r, void 0, void 0, function (o) {
        ((s = H(t(o, Re(t)(e)))), n ? (n.unsubscribe(), (n = null), s.subscribe(r)) : (i = !0));
      }),
    )),
      i && (n.unsubscribe(), (n = null), s.subscribe(r)));
  });
}
function Or() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = gi(t);
  return r
    ? ii(Or.apply(void 0, G([], z(t))), Di(r))
    : B(function (n, i) {
        Li(G([n], z(Wi(t))))(i);
      });
}
function zi() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Or.apply(void 0, G([], z(t)));
}
function $r(t) {
  return B(function (e, r) {
    try {
      e.subscribe(r);
    } finally {
      r.add(t);
    }
  });
}
function kr(t) {
  t === void 0 && (t = {});
  var e = t.connector,
    r =
      e === void 0
        ? function () {
            return new ht();
          }
        : e,
    n = t.resetOnError,
    i = n === void 0 ? !0 : n,
    s = t.resetOnComplete,
    o = s === void 0 ? !0 : s,
    a = t.resetOnRefCountZero,
    u = a === void 0 ? !0 : a;
  return function (c) {
    var p,
      h,
      d,
      l = 0,
      v = !1,
      f = !1,
      w = function () {
        (h?.unsubscribe(), (h = void 0));
      },
      I = function () {
        (w(), (p = d = void 0), (v = f = !1));
      },
      x = function () {
        var C = p;
        (I(), C?.unsubscribe());
      };
    return B(function (C, O) {
      (l++, !f && !v && w());
      var P = (d = d ?? r());
      (O.add(function () {
        (l--, l === 0 && !f && !v && (h = et(x, u)));
      }),
        P.subscribe(O),
        !p &&
          l > 0 &&
          ((p = new le({
            next: function (D) {
              return P.next(D);
            },
            error: function (D) {
              ((f = !0), w(), (h = et(I, i, D)), P.error(D));
            },
            complete: function () {
              ((v = !0), w(), (h = et(I, o)), P.complete());
            },
          })),
          H(C).subscribe(p)));
    })(c);
  };
}
function et(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new le({
      next: function () {
        (i.unsubscribe(), t());
      },
    });
    return H(e.apply(void 0, G([], z(r)))).subscribe(i);
  }
}
function Gi(t, e, r) {
  var n,
    i = !1;
  return (
    (n = t),
    kr({
      connector: function () {
        return new li(n, e, r);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: i,
    })
  );
}
function Qi(t, e, r) {
  var n = k(t) || e || r ? { next: t, error: e, complete: r } : t;
  return n
    ? B(function (i, s) {
        var o;
        (o = n.subscribe) === null || o === void 0 || o.call(n);
        var a = !0;
        i.subscribe(
          J(
            s,
            function (u) {
              var c;
              ((c = n.next) === null || c === void 0 || c.call(n, u), s.next(u));
            },
            function () {
              var u;
              ((a = !1), (u = n.complete) === null || u === void 0 || u.call(n), s.complete());
            },
            function (u) {
              var c;
              ((a = !1), (c = n.error) === null || c === void 0 || c.call(n, u), s.error(u));
            },
            function () {
              var u, c;
              (a && ((u = n.unsubscribe) === null || u === void 0 || u.call(n)),
                (c = n.finalize) === null || c === void 0 || c.call(n));
            },
          ),
        );
      })
    : Ve;
}
function Tr(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
var jr = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162,
  },
  mt = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 },
  Yi = new Array(4).fill(String.fromCodePoint(mt[0])).join("");
function Ji(t) {
  let e = JSON.stringify(t);
  return `${Yi}${Array.from(e)
    .map((r) => {
      let n = r.charCodeAt(0);
      if (n > 255)
        throw new Error(
          `Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${r} (${n})`,
        );
      return Array.from(n.toString(4).padStart(4, "0"))
        .map((i) => String.fromCodePoint(mt[i]))
        .join("");
    })
    .join("")}`;
}
function Ki(t) {
  return !Number.isNaN(Number(t)) ||
    (/[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t))
    ? !1
    : !!Date.parse(t);
}
function Xi(t) {
  try {
    new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return !1;
  }
  return !0;
}
function ga(t, e, r = "auto") {
  return r === !0 || (r === "auto" && (Ki(t) || Xi(t))) ? t : `${t}${Ji(e)}`;
}
Object.fromEntries(Object.entries(mt).map((t) => t.reverse()));
Object.fromEntries(Object.entries(jr).map((t) => t.reverse()));
var Zi = `${Object.values(jr)
    .map((t) => `\\u{${t.toString(16)}}`)
    .join("")}`,
  Lt = new RegExp(`[${Zi}]{4,}`, "gu");
function es(t) {
  var e;
  return { cleaned: t.replace(Lt, ""), encoded: ((e = t.match(Lt)) == null ? void 0 : e[0]) || "" };
}
function ts(t) {
  return t && JSON.parse(es(JSON.stringify(t)).cleaned);
}
function rs(t) {
  return ts(t);
}
const ns = "drafts",
  is = "versions",
  fe = ".",
  Pe = `${ns}${fe}`,
  Rr = `${is}${fe}`;
function Ne(t) {
  return t.startsWith(Pe);
}
function Be(t) {
  return t.startsWith(Rr);
}
function Pr(t) {
  if (Be(t)) {
    const e = He(t);
    return Pe + e;
  }
  return Ne(t) ? t : Pe + t;
}
function Ce(t, e) {
  if (e === "drafts" || e === "published") throw new Error('Version can not be "published" or "drafts"');
  return `${Rr}${e}${fe}${He(t)}`;
}
function Mr(t) {
  if (!Be(t)) return;
  const [e, r, ...n] = t.split(fe);
  return r;
}
function He(t) {
  return Be(t) ? t.split(fe).slice(2).join(fe) : Ne(t) ? t.slice(Pe.length) : t;
}
let ss = (t) => crypto.getRandomValues(new Uint8Array(t)),
  os = (t, e, r) => {
    let n = (2 << (Math.log(t.length - 1) / Math.LN2)) - 1,
      i = -~((1.6 * n * e) / t.length);
    return (s = e) => {
      let o = "";
      for (;;) {
        let a = r(i),
          u = i | 0;
        for (; u--;) if (((o += t[a[u] & n] || ""), o.length === s)) return o;
      }
    };
  },
  as = (t, e = 21) => os(t, e, ss);
const Ft = /\r\n|[\n\r\u2028\u2029]/;
function us(t, e, r) {
  const n = t.split(Ft),
    i = { start: Ut(e.start, n), end: e.end ? Ut(e.end, n) : void 0 },
    { start: s, end: o, markerLines: a } = cs(i, n),
    u = `${o}`.length;
  return t
    .split(Ft, o)
    .slice(s, o)
    .map((c, p) => {
      const h = s + 1 + p,
        d = ` ${` ${h}`.slice(-u)} |`,
        l = a[h],
        v = !a[h + 1];
      if (!l) return ` ${d}${c.length > 0 ? ` ${c}` : ""}`;
      let f = "";
      if (Array.isArray(l)) {
        const w = c.slice(0, Math.max(l[0] - 1, 0)).replace(/[^\t]/g, " "),
          I = l[1] || 1;
        ((f = [
          `
 `,
          d.replace(/\d/g, " "),
          " ",
          w,
          "^".repeat(I),
        ].join("")),
          v && r && (f += " " + r));
      }
      return [">", d, c.length > 0 ? ` ${c}` : "", f].join("");
    }).join(`
`);
}
function cs(t, e) {
  const r = { ...t.start },
    n = { ...r, ...t.end },
    i = 2,
    s = 3,
    o = r.line ?? -1,
    a = r.column ?? 0,
    u = n.line,
    c = n.column;
  let p = Math.max(o - (i + 1), 0),
    h = Math.min(e.length, u + s);
  (o === -1 && (p = 0), u === -1 && (h = e.length));
  const d = u - o,
    l = {};
  if (d)
    for (let v = 0; v <= d; v++) {
      const f = v + o;
      if (!a) l[f] = !0;
      else if (v === 0) {
        const w = e[f - 1].length;
        l[f] = [a, w - a + 1];
      } else if (v === d) l[f] = [0, c];
      else {
        const w = e[f - v].length;
        l[f] = [0, w];
      }
    }
  else a === c ? (a ? (l[o] = [a, 0]) : (l[o] = !0)) : (l[o] = [a, c - a]);
  return { start: p, end: h, markerLines: l };
}
function Ut(t, e) {
  let r = 0;
  for (let n = 0; n < e.length; n++) {
    const i = e[n].length + 1;
    if (r + i > t) return { line: n + 1, column: t - r };
    r += i;
  }
  return { line: e.length, column: e[e.length - 1]?.length ?? 0 };
}
const tt = 5;
class ls extends Error {
  response;
  statusCode = 400;
  responseBody;
  details;
  constructor(e, r) {
    const n = qr(e, r);
    (super(n.message), Object.assign(this, n));
  }
}
class fs extends Error {
  response;
  statusCode = 500;
  responseBody;
  details;
  constructor(e) {
    const r = qr(e);
    (super(r.message), Object.assign(this, r));
  }
}
function qr(t, e) {
  const r = t.body,
    n = { response: t, statusCode: t.statusCode, responseBody: ps(r, t), message: "", details: void 0 };
  if (!Tr(r)) return ((n.message = rt(t, r)), n);
  const i = r.error;
  if (typeof i == "string" && typeof r.message == "string") return ((n.message = `${i} - ${r.message}`), n);
  if (typeof i != "object" || i === null)
    return (
      typeof i == "string"
        ? (n.message = i)
        : typeof r.message == "string"
          ? (n.message = r.message)
          : (n.message = rt(t, r)),
      n
    );
  if (hs(i) || ds(i)) {
    const s = i.items || [],
      o = s
        .slice(0, tt)
        .map((u) => u.error?.description)
        .filter(Boolean);
    let a = o.length
      ? `:
- ${o.join(`
- `)}`
      : "";
    return (
      s.length > tt &&
        (a += `
...and ${s.length - tt} more`),
      (n.message = `${i.description}${a}`),
      (n.details = r.error),
      n
    );
  }
  if (Dr(i)) {
    const s = e?.options?.query?.tag;
    return ((n.message = Lr(i, s)), (n.details = r.error), n);
  }
  return "description" in i && typeof i.description == "string"
    ? ((n.message = i.description), (n.details = i), n)
    : ((n.message = rt(t, r)), n);
}
function hs(t) {
  return "type" in t && t.type === "mutationError" && "description" in t && typeof t.description == "string";
}
function ds(t) {
  return "type" in t && t.type === "actionError" && "description" in t && typeof t.description == "string";
}
function Dr(t) {
  return (
    Tr(t) &&
    t.type === "queryParseError" &&
    typeof t.query == "string" &&
    typeof t.start == "number" &&
    typeof t.end == "number"
  );
}
function Lr(t, e) {
  const { query: r, start: n, end: i, description: s } = t;
  if (!r || typeof n > "u") return `GROQ query parse error: ${s}`;
  const o = e
    ? `

Tag: ${e}`
    : "";
  return `GROQ query parse error:
${us(r, { start: n, end: i }, s)}${o}`;
}
function rt(t, e) {
  const r = typeof e == "string" ? ` (${ys(e, 100)})` : "",
    n = t.statusMessage ? ` ${t.statusMessage}` : "";
  return `${t.method}-request to ${t.url} resulted in HTTP ${t.statusCode}${n}${r}`;
}
function ps(t, e) {
  return (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1
    ? JSON.stringify(t, null, 2)
    : t;
}
function ys(t, e) {
  return t.length > e ? `${t.slice(0, e)}…` : t;
}
class ms extends Error {
  projectId;
  addOriginUrl;
  constructor({ projectId: e }) {
    (super("CorsOriginError"), (this.name = "CorsOriginError"), (this.projectId = e));
    const r = new URL(new URL(`https://sanity.io/manage/project/${e}/api`));
    if (typeof location < "u") {
      const { origin: n } = location;
      (r.searchParams.set("cors", "add"),
        r.searchParams.set("origin", n),
        (this.addOriginUrl = r),
        (this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${r}`));
    } else
      this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${r}`;
  }
}
const vs = {
  onResponse: (t, e) => {
    if (t.statusCode >= 500) throw new fs(t);
    if (t.statusCode >= 400) throw new ls(t, e);
    return t;
  },
};
function gs(t = {}) {
  const e = {},
    r = (n) =>
      t.ignoreWarnings === void 0
        ? !1
        : (Array.isArray(t.ignoreWarnings) ? t.ignoreWarnings : [t.ignoreWarnings]).some((i) =>
            typeof i == "string" ? n.includes(i) : i instanceof RegExp ? i.test(n) : !1,
          );
  return {
    onResponse: (n) => {
      const i = n.headers["x-sanity-warning"],
        s = Array.isArray(i) ? i : [i];
      for (const o of s) !o || e[o] || r(o) || ((e[o] = !0), console.warn(o));
      return n;
    },
  };
}
function Vt(t, e = {}) {
  return Fn([ut({ shouldRetry: bs }), ...t, gs(e), Hn(), Wn(), Qn(), vs, Gn({ implementation: j })]);
}
function bs(t, e, r) {
  if (r.maxRetries === 0) return !1;
  const n = r.method === "GET" || r.method === "HEAD",
    i = (r.uri || r.url).startsWith("/data/query"),
    s = t.response && (t.response.statusCode === 429 || t.response.statusCode === 502 || t.response.statusCode === 503);
  return (n || i) && s ? !0 : ut.shouldRetry(t, e, r);
}
const ws = "https://www.sanity.io/help/";
function vt(t) {
  return ws + t;
}
const Nt = ["image", "file"],
  Bt = ["before", "after", "replace"],
  Fr = (t) => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(t))
      throw new Error(
        "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters",
      );
  },
  Is = (t) => {
    if (!/^[-a-z0-9]+$/i.test(t)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  },
  Es = (t) => {
    if (Nt.indexOf(t) === -1) throw new Error(`Invalid asset type: ${t}. Must be one of ${Nt.join(", ")}`);
  },
  we = (t, e) => {
    if (e === null || typeof e != "object" || Array.isArray(e)) throw new Error(`${t}() takes an object of properties`);
  },
  Me = (t, e) => {
    if (typeof e != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) || e.includes(".."))
      throw new Error(`${t}(): "${e}" is not a valid document ID`);
  },
  he = (t, e) => {
    if (!e._id) throw new Error(`${t}() requires that the document contains an ID ("_id" property)`);
    Me(t, e._id);
  },
  xs = (t, e) => {
    if (typeof e != "string") throw new Error(`\`${t}()\`: \`${e}\` is not a valid document type`);
  },
  Ur = (t, e) => {
    if (!e._type) throw new Error(`\`${t}()\` requires that the document contains a type (\`_type\` property)`);
    xs(t, e._type);
  },
  Cs = (t, e) => {
    if (e._id && e._id !== t)
      throw new Error(`The provided document ID (\`${e._id}\`) does not match the generated version ID (\`${t}\`)`);
  },
  As = (t, e, r) => {
    const n = "insert(at, selector, items)";
    if (Bt.indexOf(t) === -1) {
      const i = Bt.map((s) => `"${s}"`).join(", ");
      throw new Error(`${n} takes an "at"-argument which is one of: ${i}`);
    }
    if (typeof e != "string") throw new Error(`${n} takes a "selector"-argument which must be a string`);
    if (!Array.isArray(r)) throw new Error(`${n} takes an "items"-argument which must be an array`);
  },
  ne = (t) => {
    if (!t.dataset) throw new Error("`dataset` must be provided to perform queries");
    return t.dataset || "";
  },
  Vr = (t) => {
    if (typeof t != "string" || !/^[a-z0-9._-]{1,75}$/i.test(t))
      throw new Error(
        "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.",
      );
    return t;
  },
  Nr = (t) => {
    if (!t["~experimental_resource"]) throw new Error("`resource` must be provided to perform resource queries");
    const { type: e, id: r } = t["~experimental_resource"];
    switch (e) {
      case "dataset": {
        if (r.split(".").length !== 2) throw new Error('Dataset resource ID must be in the format "project.dataset"');
        return;
      }
      case "dashboard":
      case "media-library":
      case "canvas":
        return;
      default:
        throw new Error(`Unsupported resource type: ${e.toString()}`);
    }
  },
  Z = (t, e) => {
    if (e["~experimental_resource"]) throw new Error(`\`${t}\` does not support resource-based operations`);
  };
function Ss(t) {
  let e = !1,
    r;
  return (...n) => (e || ((r = t(...n)), (e = !0)), r);
}
const K = (t) => Ss((...e) => console.warn(t.join(" "), ...e)),
  _s = K([
    "Because you set `withCredentials` to true, we will override your `useCdn`",
    "setting to be false since (cookie-based) credentials are never set on the CDN",
  ]),
  Os = K([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.",
  ]),
  $s = K([
    "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
    "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning.",
  ]),
  ks = K(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]),
  Ts = K([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    `See ${vt("js-client-browser-token")} for more information and how to hide this warning.`,
  ]),
  js = K([
    "You have configured Sanity client to use a token, but also provided `withCredentials: true`.",
    "This is no longer supported - only token will be used - remove `withCredentials: true`.",
  ]),
  Rs = K([
    "Using the Sanity client without specifying an API version is deprecated.",
    `See ${vt("js-client-api-version")}`,
  ]),
  Ps = K([
    "You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead.",
  ]),
  Ms = "apicdn.sanity.io",
  Ie = { apiHost: "https://api.sanity.io", apiVersion: "1", useProjectHostname: !0, stega: { enabled: !1 } },
  qs = ["localhost", "127.0.0.1", "0.0.0.0"],
  Ds = (t) => qs.indexOf(t) !== -1;
function Ls(t) {
  if (t === "1" || t === "X") return;
  const e = new Date(t);
  if (!(/^\d{4}-\d{2}-\d{2}$/.test(t) && e instanceof Date && e.getTime() > 0))
    throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function Br(t) {
  if (Array.isArray(t) && t.length > 1 && t.includes("raw"))
    throw new TypeError(
      'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives',
    );
}
const Hr = (t, e) => {
  const r = {
    ...e,
    ...t,
    stega: {
      ...(typeof e.stega == "boolean" ? { enabled: e.stega } : e.stega || Ie.stega),
      ...(typeof t.stega == "boolean" ? { enabled: t.stega } : t.stega || {}),
    },
  };
  r.apiVersion || Rs();
  const n = { ...Ie, ...r },
    i = n.useProjectHostname && !n["~experimental_resource"];
  if (typeof Promise > "u") {
    const d = vt("js-client-promise-polyfill");
    throw new Error(`No native Promise-implementation found, polyfill needed - see ${d}`);
  }
  if (i && !n.projectId) throw new Error("Configuration must contain `projectId`");
  if ((n["~experimental_resource"] && Nr(n), typeof n.perspective < "u" && Br(n.perspective), "encodeSourceMap" in n))
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?",
    );
  if ("encodeSourceMapAtPath" in n)
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?",
    );
  if (typeof n.stega.enabled != "boolean")
    throw new Error(`stega.enabled must be a boolean, received ${n.stega.enabled}`);
  if (n.stega.enabled && n.stega.studioUrl === void 0)
    throw new Error("stega.studioUrl must be defined when stega.enabled is true");
  if (n.stega.enabled && typeof n.stega.studioUrl != "string" && typeof n.stega.studioUrl != "function")
    throw new Error(`stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`);
  const s = typeof window < "u" && window.location && window.location.hostname,
    o = s && Ds(window.location.hostname),
    a = !!n.token;
  (n.withCredentials && a && (js(), (n.withCredentials = !1)),
    s && o && a && n.ignoreBrowserTokenWarning !== !0 ? Ts() : typeof n.useCdn > "u" && Os(),
    i && Is(n.projectId),
    n.dataset && Fr(n.dataset),
    "requestTagPrefix" in n &&
      (n.requestTagPrefix = n.requestTagPrefix ? Vr(n.requestTagPrefix).replace(/\.+$/, "") : void 0),
    (n.apiVersion = `${n.apiVersion}`.replace(/^v/, "")),
    (n.isDefaultApi = n.apiHost === Ie.apiHost),
    n.useCdn === !0 && n.withCredentials && _s(),
    (n.useCdn = n.useCdn !== !1 && !n.withCredentials),
    Ls(n.apiVersion));
  const u = n.apiHost.split("://", 2),
    c = u[0],
    p = u[1],
    h = n.isDefaultApi ? Ms : p;
  return (
    i
      ? ((n.url = `${c}://${n.projectId}.${p}/v${n.apiVersion}`),
        (n.cdnUrl = `${c}://${n.projectId}.${h}/v${n.apiVersion}`))
      : ((n.url = `${n.apiHost}/v${n.apiVersion}`), (n.cdnUrl = n.url)),
    n
  );
};
class Wr extends Error {
  name = "ConnectionFailedError";
}
class Fs extends Error {
  name = "DisconnectError";
  reason;
  constructor(e, r, n = {}) {
    (super(e, n), (this.reason = r));
  }
}
class Us extends Error {
  name = "ChannelError";
  data;
  constructor(e, r) {
    (super(e), (this.data = r));
  }
}
class Vs extends Error {
  name = "MessageError";
  data;
  constructor(e, r, n = {}) {
    (super(e, n), (this.data = r));
  }
}
class Ht extends Error {
  name = "MessageParseError";
}
const Ns = ["channelError", "disconnect"];
function zr(t, e) {
  return _r(() => {
    const r = t();
    return Ri(r) ? r : ae(r);
  }).pipe(te((r) => Bs(r, e)));
}
function Bs(t, e) {
  return new j((r) => {
    const n = e.includes("open"),
      i = e.includes("reconnect");
    function s(c) {
      if ("data" in c) {
        const [p, h] = Wt(c);
        r.error(p ? new Ht("Unable to parse EventSource error message", { cause: h }) : new Vs((h?.data).message, h));
        return;
      }
      t.readyState === t.CLOSED ? r.error(new Wr("EventSource connection failed")) : i && r.next({ type: "reconnect" });
    }
    function o() {
      r.next({ type: "open" });
    }
    function a(c) {
      const [p, h] = Wt(c);
      if (p) {
        r.error(new Ht("Unable to parse EventSource message", { cause: p }));
        return;
      }
      if (c.type === "channelError") {
        const d = new URL(t.url).searchParams.get("tag");
        r.error(new Us(Hs(h?.data, d), h.data));
        return;
      }
      if (c.type === "disconnect") {
        r.error(new Fs(`Server disconnected client: ${h.data?.reason || "unknown error"}`));
        return;
      }
      r.next({ type: c.type, id: c.lastEventId, ...(h.data ? { data: h.data } : {}) });
    }
    (t.addEventListener("error", s), n && t.addEventListener("open", o));
    const u = [...new Set([...Ns, ...e])].filter((c) => c !== "error" && c !== "open" && c !== "reconnect");
    return (
      u.forEach((c) => t.addEventListener(c, a)),
      () => {
        (t.removeEventListener("error", s),
          n && t.removeEventListener("open", o),
          u.forEach((c) => t.removeEventListener(c, a)),
          t.close());
      }
    );
  });
}
function Wt(t) {
  try {
    const e = typeof t.data == "string" && JSON.parse(t.data);
    return [null, { type: t.type, id: t.lastEventId, ...(Ws(e) ? {} : { data: e }) }];
  } catch (e) {
    return [e, null];
  }
}
function Hs(t, e) {
  const r = t.error;
  return r
    ? Dr(r)
      ? Lr(r, e)
      : r.description
        ? r.description
        : typeof r == "string"
          ? r
          : JSON.stringify(r, null, 2)
    : t.message || "Unknown listener error";
}
function Ws(t) {
  for (const e in t) return !1;
  return !0;
}
function Gr(t) {
  if (typeof t == "string") return { id: t };
  if (Array.isArray(t)) return { query: "*[_id in $ids]", params: { ids: t } };
  if (typeof t == "object" && t !== null && "query" in t && typeof t.query == "string")
    return "params" in t && typeof t.params == "object" && t.params !== null
      ? { query: t.query, params: t.params }
      : { query: t.query };
  const e = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
  throw new Error(`Unknown selection - must be one of:

${e}`);
}
class Qr {
  selection;
  operations;
  constructor(e, r = {}) {
    ((this.selection = e), (this.operations = r));
  }
  set(e) {
    return this._assign("set", e);
  }
  setIfMissing(e) {
    return this._assign("setIfMissing", e);
  }
  diffMatchPatch(e) {
    return (we("diffMatchPatch", e), this._assign("diffMatchPatch", e));
  }
  unset(e) {
    if (!Array.isArray(e)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
    return ((this.operations = Object.assign({}, this.operations, { unset: e })), this);
  }
  inc(e) {
    return this._assign("inc", e);
  }
  dec(e) {
    return this._assign("dec", e);
  }
  insert(e, r, n) {
    return (As(e, r, n), this._assign("insert", { [e]: r, items: n }));
  }
  append(e, r) {
    return this.insert("after", `${e}[-1]`, r);
  }
  prepend(e, r) {
    return this.insert("before", `${e}[0]`, r);
  }
  splice(e, r, n, i) {
    const s = typeof n > "u" || n === -1,
      o = r < 0 ? r - 1 : r,
      a = s ? -1 : Math.max(0, r + n),
      u = o < 0 && a >= 0 ? "" : a,
      c = `${e}[${o}:${u}]`;
    return this.insert("replace", c, i || []);
  }
  ifRevisionId(e) {
    return ((this.operations.ifRevisionID = e), this);
  }
  serialize() {
    return { ...Gr(this.selection), ...this.operations };
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return ((this.operations = {}), this);
  }
  _assign(e, r, n = !0) {
    return (
      we(e, r),
      (this.operations = Object.assign({}, this.operations, {
        [e]: Object.assign({}, (n && this.operations[e]) || {}, r),
      })),
      this
    );
  }
  _set(e, r) {
    return this._assign(e, r, !1);
  }
}
class re extends Qr {
  #t;
  constructor(e, r, n) {
    (super(e, r), (this.#t = n));
  }
  clone() {
    return new re(this.selection, { ...this.operations }, this.#t);
  }
  commit(e) {
    if (!this.#t)
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method",
      );
    const r = typeof this.selection == "string",
      n = Object.assign({ returnFirst: r, returnDocuments: !0 }, e);
    return this.#t.mutate({ patch: this.serialize() }, n);
  }
}
class Y extends Qr {
  #t;
  constructor(e, r, n) {
    (super(e, r), (this.#t = n));
  }
  clone() {
    return new Y(this.selection, { ...this.operations }, this.#t);
  }
  commit(e) {
    if (!this.#t)
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method",
      );
    const r = typeof this.selection == "string",
      n = Object.assign({ returnFirst: r, returnDocuments: !0 }, e);
    return this.#t.mutate({ patch: this.serialize() }, n);
  }
}
const Yr = { returnDocuments: !1 };
class Jr {
  operations;
  trxId;
  constructor(e = [], r) {
    ((this.operations = e), (this.trxId = r));
  }
  create(e) {
    return (we("create", e), this._add({ create: e }));
  }
  createIfNotExists(e) {
    const r = "createIfNotExists";
    return (we(r, e), he(r, e), this._add({ [r]: e }));
  }
  createOrReplace(e) {
    const r = "createOrReplace";
    return (we(r, e), he(r, e), this._add({ [r]: e }));
  }
  delete(e) {
    return (Me("delete", e), this._add({ delete: { id: e } }));
  }
  transactionId(e) {
    return e ? ((this.trxId = e), this) : this.trxId;
  }
  serialize() {
    return [...this.operations];
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return ((this.operations = []), this);
  }
  _add(e) {
    return (this.operations.push(e), this);
  }
}
class We extends Jr {
  #t;
  constructor(e, r, n) {
    (super(e, n), (this.#t = r));
  }
  clone() {
    return new We([...this.operations], this.#t, this.trxId);
  }
  commit(e) {
    if (!this.#t)
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method",
      );
    return this.#t.mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, Yr, e || {}));
  }
  patch(e, r) {
    const n = typeof r == "function",
      i = typeof e != "string" && e instanceof Y,
      s = typeof e == "object" && ("query" in e || "id" in e);
    if (i) return this._add({ patch: e.serialize() });
    if (n) {
      const o = r(new Y(e, {}, this.#t));
      if (!(o instanceof Y)) throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: o.serialize() });
    }
    if (s) {
      const o = new Y(e, r || {}, this.#t);
      return this._add({ patch: o.serialize() });
    }
    return this._add({ patch: { id: e, ...r } });
  }
}
class ze extends Jr {
  #t;
  constructor(e, r, n) {
    (super(e, n), (this.#t = r));
  }
  clone() {
    return new ze([...this.operations], this.#t, this.trxId);
  }
  commit(e) {
    if (!this.#t)
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method",
      );
    return this.#t.mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, Yr, e || {}));
  }
  patch(e, r) {
    const n = typeof r == "function";
    if (typeof e != "string" && e instanceof re) return this._add({ patch: e.serialize() });
    if (n) {
      const i = r(new re(e, {}, this.#t));
      if (!(i instanceof re)) throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: i.serialize() });
    }
    return this._add({ patch: { id: e, ...r } });
  }
}
const zs = "X-Sanity-Project-ID";
function Gs(t, e = {}) {
  const r = {};
  t.headers && Object.assign(r, t.headers);
  const n = e.token || t.token;
  (n && (r.Authorization = `Bearer ${n}`),
    !e.useGlobalApi && !t.useProjectHostname && t.projectId && (r[zs] = t.projectId));
  const i = !!(typeof e.withCredentials > "u" ? t.withCredentials : e.withCredentials),
    s = typeof e.timeout > "u" ? t.timeout : e.timeout;
  return Object.assign({}, e, {
    headers: Object.assign({}, r, e.headers || {}),
    timeout: typeof s > "u" ? 300 * 1e3 : s,
    proxy: e.proxy || t.proxy,
    json: !0,
    withCredentials: i,
    fetch: typeof e.fetch == "object" && typeof t.fetch == "object" ? { ...t.fetch, ...e.fetch } : e.fetch || t.fetch,
  });
}
const Kr = ({ query: t, params: e = {}, options: r = {} }) => {
    const n = new URLSearchParams(),
      { tag: i, includeMutations: s, returnQuery: o, ...a } = r;
    (i && n.append("tag", i), n.append("query", t));
    for (const [u, c] of Object.entries(e)) c !== void 0 && n.append(`$${u}`, JSON.stringify(c));
    for (const [u, c] of Object.entries(a)) c && n.append(u, `${c}`);
    return (o === !1 && n.append("returnQuery", "false"), s === !1 && n.append("includeMutations", "false"), `?${n}`);
  },
  Qs = (t, e) => (t === !1 ? void 0 : typeof t > "u" ? e : t),
  Ys = (t = {}) => ({
    dryRun: t.dryRun,
    returnIds: !0,
    returnDocuments: Qs(t.returnDocuments, !0),
    visibility: t.visibility || "sync",
    autoGenerateArrayKeys: t.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: t.skipCrossDatasetReferenceValidation,
  }),
  gt = (t) => t.type === "response",
  Js = (t) => t.body,
  Ks = (t, e) => t.reduce((r, n) => ((r[e(n)] = n), r), Object.create(null)),
  Xs = 11264;
function Xr(t, e, r, n, i = {}, s = {}) {
  const o =
      "stega" in s ? { ...(r || {}), ...(typeof s.stega == "boolean" ? { enabled: s.stega } : s.stega || {}) } : r,
    a = o.enabled ? rs(i) : i,
    u = s.filterResponse === !1 ? (v) => v : (v) => v.result,
    {
      cache: c,
      next: p,
      ...h
    } = {
      useAbortSignal: typeof s.signal < "u",
      resultSourceMap: o.enabled ? "withKeyArraySelector" : s.resultSourceMap,
      ...s,
      returnQuery: s.filterResponse === !1 && s.returnQuery !== !1,
    },
    d = typeof c < "u" || typeof p < "u" ? { ...h, fetch: { cache: c, next: p } } : h,
    l = ie(t, e, "query", { query: n, params: a }, d);
  return o.enabled
    ? l.pipe(
        zi(
          xe(
            Zt(() => import("../js/eab50be7-stegaEncodeSourceMap-BT5UiB-S.js"), __vite__mapDeps([0, 1, 2]))
              .then(function (v) {
                return v.stegaEncodeSourceMap$1;
              })
              .then(({ stegaEncodeSourceMap: v }) => v),
          ),
        ),
        M(([v, f]) => {
          const w = f(v.result, v.resultSourceMap, o);
          return u({ ...v, result: w });
        }),
      )
    : l.pipe(M(u));
}
function de(t, e, r, n = {}) {
  const i = (() => {
      if (!n.releaseId) return r;
      const o = Mr(r);
      if (!o) {
        if (Ne(r))
          throw new Error(
            `The document ID (\`${r}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``,
          );
        return Ce(r, n.releaseId);
      }
      if (o !== n.releaseId)
        throw new Error(
          `The document ID (\`${r}\`) is already a version of \`${o}\` release, but this does not match the provided \`options.releaseId\` (\`${n.releaseId}\`)`,
        );
      return r;
    })(),
    s = {
      uri: U(t, "doc", i),
      json: !0,
      tag: n.tag,
      signal: n.signal,
      query: n.includeAllVersions !== void 0 ? { includeAllVersions: n.includeAllVersions } : void 0,
    };
  return Se(t, e, s).pipe(
    pe(gt),
    M((o) => {
      const a = o.body.documents;
      return a ? (n.includeAllVersions ? a : a[0]) : n.includeAllVersions ? [] : void 0;
    }),
  );
}
function Zr(t, e, r, n = {}) {
  const i = { uri: U(t, "doc", r.join(",")), json: !0, tag: n.tag, signal: n.signal };
  return Se(t, e, i).pipe(
    pe(gt),
    M((s) => {
      const o = Ks(s.body.documents || [], (a) => a._id);
      return r.map((a) => o[a] || null);
    }),
  );
}
function en(t, e, r, n = {}) {
  return ie(t, e, "query", { query: "*[sanity::partOfRelease($releaseId)]", params: { releaseId: r } }, n);
}
function tn(t, e, r, n) {
  return (he("createIfNotExists", r), Ge(t, e, r, "createIfNotExists", n));
}
function rn(t, e, r, n) {
  return (he("createOrReplace", r), Ge(t, e, r, "createOrReplace", n));
}
function nn(t, e, r, n, i) {
  return (
    he("createVersion", r),
    Ur("createVersion", r),
    Ps(),
    T(t, e, { actionType: "sanity.action.document.version.create", publishedId: n, document: r }, i)
  );
}
function sn(t, e, r, n, i, s, o) {
  if (!n) throw new Error("`createVersion()` requires `baseId` when no `document` is provided");
  if (!r) throw new Error("`createVersion()` requires `publishedId` when `baseId` is provided");
  (Me("createVersion", n), Me("createVersion", r));
  const a = {
    actionType: "sanity.action.document.version.create",
    publishedId: r,
    baseId: n,
    versionId: i ? Ce(r, i) : Pr(r),
    ifBaseRevisionId: s,
  };
  return T(t, e, a, o);
}
function on(t, e, r, n) {
  return ie(t, e, "mutate", { mutations: [{ delete: Gr(r) }] }, n);
}
function an(t, e, r, n = !1, i) {
  return T(t, e, { actionType: "sanity.action.document.version.discard", versionId: r, purge: n }, i);
}
function un(t, e, r, n) {
  return (
    he("replaceVersion", r),
    Ur("replaceVersion", r),
    T(t, e, { actionType: "sanity.action.document.version.replace", document: r }, n)
  );
}
function cn(t, e, r, n, i) {
  return T(t, e, { actionType: "sanity.action.document.version.unpublish", versionId: r, publishedId: n }, i);
}
function ln(t, e, r, n) {
  let i;
  r instanceof Y || r instanceof re
    ? (i = { patch: r.serialize() })
    : r instanceof We || r instanceof ze
      ? (i = r.serialize())
      : (i = r);
  const s = Array.isArray(i) ? i : [i],
    o = (n && n.transactionId) || void 0;
  return ie(t, e, "mutate", { mutations: s, transactionId: o }, n);
}
function T(t, e, r, n) {
  const i = Array.isArray(r) ? r : [r],
    s = (n && n.transactionId) || void 0,
    o = (n && n.skipCrossDatasetReferenceValidation) || void 0,
    a = (n && n.dryRun) || void 0;
  return ie(t, e, "actions", { actions: i, transactionId: s, skipCrossDatasetReferenceValidation: o, dryRun: a }, n);
}
function ie(t, e, r, n, i = {}) {
  const s = r === "mutate",
    o = r === "actions",
    a = r === "query",
    u = s || o ? "" : Kr(n),
    c = !s && !o && u.length < Xs,
    p = c ? u : "",
    h = i.returnFirst,
    { timeout: d, token: l, tag: v, headers: f, returnQuery: w, lastLiveEventId: I, cacheMode: x } = i,
    C = U(t, r, p),
    O = {
      method: c ? "GET" : "POST",
      uri: C,
      json: !0,
      body: c ? void 0 : n,
      query: s && Ys(i),
      timeout: d,
      headers: f,
      token: l,
      tag: v,
      returnQuery: w,
      perspective: i.perspective,
      resultSourceMap: i.resultSourceMap,
      lastLiveEventId: Array.isArray(I) ? I[0] : I,
      cacheMode: x,
      canUseCdn: a,
      signal: i.signal,
      fetch: i.fetch,
      useAbortSignal: i.useAbortSignal,
      useCdn: i.useCdn,
    };
  return Se(t, e, O).pipe(
    pe(gt),
    M(Js),
    M((P) => {
      if (!s) return P;
      const D = P.results || [];
      if (i.returnDocuments) return h ? D[0] && D[0].document : D.map((ye) => ye.document);
      const Qe = h ? "documentId" : "documentIds",
        Ye = h ? D[0] && D[0].id : D.map((ye) => ye.id);
      return { transactionId: P.transactionId, results: D, [Qe]: Ye };
    }),
  );
}
function Ge(t, e, r, n, i = {}) {
  const s = { [n]: r },
    o = Object.assign({ returnFirst: !0, returnDocuments: !0 }, i);
  return ie(t, e, "mutate", { mutations: [s] }, o);
}
const Ae = (t) =>
    (t.config().dataset !== void 0 && t.config().projectId !== void 0) ||
    t.config()["~experimental_resource"] !== void 0,
  fn = (t, e) => Ae(t) && e.startsWith(U(t, "query")),
  Zs = (t, e) => Ae(t) && e.startsWith(U(t, "mutate")),
  eo = (t, e) => Ae(t) && e.startsWith(U(t, "doc", "")),
  to = (t, e) => Ae(t) && e.startsWith(U(t, "listen")),
  ro = (t, e) => Ae(t) && e.startsWith(U(t, "history", "")),
  no = (t, e) => e.startsWith("/data/") || fn(t, e) || Zs(t, e) || eo(t, e) || to(t, e) || ro(t, e);
function Se(t, e, r) {
  const n = r.url || r.uri,
    i = t.config(),
    s = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && no(t, n) : r.canUseCdn;
  let o = (r.useCdn ?? i.useCdn) && s;
  const a = r.tag && i.requestTagPrefix ? [i.requestTagPrefix, r.tag].join(".") : r.tag || i.requestTagPrefix;
  if (
    (a && r.tag !== null && (r.query = { tag: Vr(a), ...r.query }),
    ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && fn(t, n))
  ) {
    const p = r.resultSourceMap ?? i.resultSourceMap;
    p !== void 0 && p !== !1 && (r.query = { resultSourceMap: p, ...r.query });
    const h = r.perspective || i.perspective;
    (typeof h < "u" &&
      (h === "previewDrafts" && ks(),
      Br(h),
      (r.query = { perspective: Array.isArray(h) ? h.join(",") : h, ...r.query }),
      ((Array.isArray(h) && h.length > 0) || h === "previewDrafts" || h === "drafts") && o && ((o = !1), $s())),
      r.lastLiveEventId && (r.query = { ...r.query, lastLiveEventId: r.lastLiveEventId }),
      r.returnQuery === !1 && (r.query = { returnQuery: "false", ...r.query }),
      o && r.cacheMode == "noStale" && (r.query = { cacheMode: "noStale", ...r.query }));
  }
  const u = Gs(i, Object.assign({}, r, { url: bt(t, n, o) })),
    c = new j((p) => e(u, i.requester).subscribe(p));
  return r.signal ? c.pipe(io(r.signal)) : c;
}
function R(t, e, r) {
  return Se(t, e, r).pipe(
    pe((n) => n.type === "response"),
    M((n) => n.body),
  );
}
function U(t, e, r) {
  const n = t.config();
  if (n["~experimental_resource"]) {
    Nr(n);
    const o = ao(n),
      a = r !== void 0 ? `${e}/${r}` : e;
    return `${o}/${a}`.replace(/\/($|\?)/, "$1");
  }
  const i = ne(n),
    s = `/${e}/${i}`;
  return `/data${r !== void 0 ? `${s}/${r}` : s}`.replace(/\/($|\?)/, "$1");
}
function bt(t, e, r = !1) {
  const { url: n, cdnUrl: i } = t.config();
  return `${r ? i : n}/${e.replace(/^\//, "")}`;
}
function io(t) {
  return (e) =>
    new j((r) => {
      const n = () => r.error(oo(t));
      if (t && t.aborted) {
        n();
        return;
      }
      const i = e.subscribe(r);
      return (
        t.addEventListener("abort", n),
        () => {
          (t.removeEventListener("abort", n), i.unsubscribe());
        }
      );
    });
}
const so = !!globalThis.DOMException;
function oo(t) {
  if (so) return new DOMException(t?.reason ?? "The operation was aborted.", "AbortError");
  const e = new Error(t?.reason ?? "The operation was aborted.");
  return ((e.name = "AbortError"), e);
}
const ao = (t) => {
  if (!t["~experimental_resource"]) throw new Error("`resource` must be provided to perform resource queries");
  const { type: e, id: r } = t["~experimental_resource"];
  switch (e) {
    case "dataset": {
      const n = r.split(".");
      if (n.length !== 2) throw new Error('Dataset ID must be in the format "project.dataset"');
      return `/projects/${n[0]}/datasets/${n[1]}`;
    }
    case "canvas":
      return `/canvases/${r}`;
    case "media-library":
      return `/media-libraries/${r}`;
    case "dashboard":
      return `/dashboards/${r}`;
    default:
      throw new Error(`Unsupported resource type: ${e.toString()}`);
  }
};
function hn(t, e, r) {
  const n = ne(t.config());
  return R(t, e, { method: "POST", uri: `/agent/action/generate/${n}`, body: r });
}
function uo(t, e, r) {
  const n = ne(t.config());
  return R(t, e, { method: "POST", uri: `/agent/action/patch/${n}`, body: r });
}
function co(t, e, r) {
  const n = ne(t.config());
  return R(t, e, { method: "POST", uri: `/agent/action/prompt/${n}`, body: r });
}
function dn(t, e, r) {
  const n = ne(t.config());
  return R(t, e, { method: "POST", uri: `/agent/action/transform/${n}`, body: r });
}
function pn(t, e, r) {
  const n = ne(t.config());
  return R(t, e, { method: "POST", uri: `/agent/action/translate/${n}`, body: r });
}
class lo {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  generate(e) {
    return hn(this.#t, this.#e, e);
  }
  transform(e) {
    return dn(this.#t, this.#e, e);
  }
  translate(e) {
    return pn(this.#t, this.#e, e);
  }
}
class fo {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  generate(e) {
    return A(hn(this.#t, this.#e, e));
  }
  transform(e) {
    return A(dn(this.#t, this.#e, e));
  }
  translate(e) {
    return A(pn(this.#t, this.#e, e));
  }
  prompt(e) {
    return A(co(this.#t, this.#e, e));
  }
  patch(e) {
    return A(uo(this.#t, this.#e, e));
  }
}
class ho {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  upload(e, r, n) {
    return yn(this.#t, this.#e, e, r, n);
  }
}
class po {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  upload(e, r, n) {
    const i = yn(this.#t, this.#e, e, r, n);
    return A(
      i.pipe(
        pe((s) => s.type === "response"),
        M((s) => s.body.document),
      ),
    );
  }
}
function yn(t, e, r, n, i = {}) {
  Es(r);
  let s = i.extract || void 0;
  s && !s.length && (s = ["none"]);
  const o = t.config(),
    a = mo(i, n),
    { tag: u, label: c, title: p, description: h, creditLine: d, filename: l, source: v } = a,
    f = { label: c, title: p, description: h, filename: l, meta: s, creditLine: d };
  return (
    v && ((f.sourceId = v.id), (f.sourceName = v.name), (f.sourceUrl = v.url)),
    Se(t, e, {
      tag: u,
      method: "POST",
      timeout: a.timeout || 0,
      uri: yo(o, r),
      headers: a.contentType ? { "Content-Type": a.contentType } : {},
      query: f,
      body: n,
    })
  );
}
function yo(t, e) {
  const r = e === "image" ? "images" : "files";
  if (t["~experimental_resource"]) {
    const { type: i, id: s } = t["~experimental_resource"];
    switch (i) {
      case "dataset":
        throw new Error(
          "Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.",
        );
      case "canvas":
        return `/canvases/${s}/assets/${r}`;
      case "media-library":
        return `/media-libraries/${s}/upload`;
      case "dashboard":
        return `/dashboards/${s}/assets/${r}`;
      default:
        throw new Error(`Unsupported resource type: ${i.toString()}`);
    }
  }
  const n = ne(t);
  return `assets/${r}/${n}`;
}
function mo(t, e) {
  return typeof File > "u" || !(e instanceof File)
    ? t
    : Object.assign({ filename: t.preserveFilename === !1 ? void 0 : e.name, contentType: e.type }, t);
}
var vo = (t, e) =>
  Object.keys(e)
    .concat(Object.keys(t))
    .reduce((r, n) => ((r[n] = typeof t[n] > "u" ? e[n] : t[n]), r), {});
const go = (t, e) => e.reduce((r, n) => (typeof t[n] > "u" || (r[n] = t[n]), r), {}),
  mn = _r(() =>
    Zt(() => import("../js/2fdab330-browser-CVBVhu-6.js").then((t) => t.b), __vite__mapDeps([3, 1, 2])),
  ).pipe(
    M(({ default: t }) => t),
    Gi(1),
  );
function vn() {
  return function (t) {
    return t.pipe(
      Re((e, r) => (e instanceof Wr ? Vi(ae({ type: "reconnect" }), Ni(1e3).pipe(te(() => r))) : Cr(() => e))),
    );
  };
}
const bo = 14800,
  wo = [
    "includePreviousRevision",
    "includeResult",
    "includeMutations",
    "includeAllVersions",
    "visibility",
    "effectFormat",
    "tag",
  ],
  Io = { includeResult: !0 };
function gn(t, e, r = {}) {
  const { url: n, token: i, withCredentials: s, requestTagPrefix: o, headers: a } = this.config(),
    u = r.tag && o ? [o, r.tag].join(".") : r.tag,
    c = { ...vo(r, Io), tag: u },
    p = go(c, wo),
    h = Kr({ query: t, params: e, options: { tag: u, ...p } }),
    d = `${n}${U(this, "listen", h)}`;
  if (d.length > bo) return Cr(() => new Error("Query too large for listener"));
  const l = c.events ? c.events : ["mutation"],
    v = {};
  return (
    s && (v.withCredentials = !0),
    (i || a) && ((v.headers = {}), i && (v.headers.Authorization = `Bearer ${i}`), a && Object.assign(v.headers, a)),
    zr(() => (typeof EventSource > "u" || v.headers ? mn : ae(EventSource)).pipe(M((f) => new f(d, v))), l).pipe(
      vn(),
      pe((f) => l.includes(f.type)),
      M((f) => ({ type: f.type, ...("data" in f ? f.data : {}) })),
    )
  );
}
function Eo(t, e) {
  return xo(typeof t == "function" ? { predicate: t, ...e } : t);
}
function xo(t) {
  return (e) => {
    let r,
      n = !1;
    const { predicate: i, ...s } = t,
      o = e.pipe(
        Qi((u) => {
          t.predicate(u) && ((n = !0), (r = u));
        }),
        $r(() => {
          ((n = !1), (r = void 0));
        }),
        kr(s),
      ),
      a = new j((u) => {
        (n && u.next(r), u.complete());
      });
    return Bi(o, a);
  };
}
const zt = "2021-03-25";
class bn {
  #t;
  constructor(e) {
    this.#t = e;
  }
  events({ includeDrafts: e = !1, tag: r } = {}) {
    Z("live", this.#t.config());
    const {
        projectId: n,
        apiVersion: i,
        token: s,
        withCredentials: o,
        requestTagPrefix: a,
        headers: u,
      } = this.#t.config(),
      c = i.replace(/^v/, "");
    if (c !== "X" && c < zt)
      throw new Error(
        `The live events API requires API version ${zt} or later. The current API version is ${c}. Please update your API version to use this feature.`,
      );
    if (e && !s && !o)
      throw new Error(
        "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.",
      );
    const p = U(this.#t, "live/events"),
      h = new URL(this.#t.getUrl(p, !1)),
      d = r && a ? [a, r].join(".") : r;
    (d && h.searchParams.set("tag", d), e && h.searchParams.set("includeDrafts", "true"));
    const l = {};
    (e && o && (l.withCredentials = !0),
      ((e && s) || u) &&
        ((l.headers = {}), e && s && (l.headers.Authorization = `Bearer ${s}`), u && Object.assign(l.headers, u)));
    const v = `${h.href}::${JSON.stringify(l)}`,
      f = nt.get(v);
    if (f) return f;
    const w = zr(
        () => (typeof EventSource > "u" || l.headers ? mn : ae(EventSource)).pipe(M((C) => new C(h.href, l))),
        ["message", "restart", "welcome", "reconnect", "goaway"],
      ),
      I = Co(h, {
        method: "OPTIONS",
        mode: "cors",
        credentials: l.withCredentials ? "include" : "omit",
        headers: l.headers,
      }).pipe(
        Re(() => {
          throw new ms({ projectId: n });
        }),
      ),
      x = w
        .pipe(
          vn(),
          te((C) => (C.type === "reconnect" ? I.pipe(te(() => ae(C))) : ae(C))),
          Re((C) =>
            I.pipe(
              te(() => {
                throw C;
              }),
            ),
          ),
          M((C) => {
            if (C.type === "message") {
              const { data: O, ...P } = C;
              return { ...P, tags: O.tags };
            }
            return C;
          }),
        )
        .pipe(
          $r(() => nt.delete(v)),
          Eo({ predicate: (C) => C.type === "welcome" }),
        );
    return (nt.set(v, x), x);
  }
}
function Co(t, e) {
  return new j((r) => {
    const n = new AbortController(),
      i = n.signal;
    return (
      fetch(t, { ...e, signal: n.signal }).then(
        (s) => {
          (r.next(s), r.complete());
        },
        (s) => {
          i.aborted || r.error(s);
        },
      ),
      () => n.abort()
    );
  });
}
const nt = new Map();
class Ao {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  create(e, r) {
    return ue(this.#t, this.#e, "PUT", e, r);
  }
  edit(e, r) {
    return ue(this.#t, this.#e, "PATCH", e, r);
  }
  delete(e) {
    return ue(this.#t, this.#e, "DELETE", e);
  }
  list() {
    Z("dataset", this.#t.config());
    const e = this.#t.config(),
      r = e.projectId;
    let n = "/datasets";
    return (e.useProjectHostname === !1 && (n = `/projects/${r}/datasets`), R(this.#t, this.#e, { uri: n, tag: null }));
  }
}
class So {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  create(e, r) {
    return (Z("dataset", this.#t.config()), A(ue(this.#t, this.#e, "PUT", e, r)));
  }
  edit(e, r) {
    return (Z("dataset", this.#t.config()), A(ue(this.#t, this.#e, "PATCH", e, r)));
  }
  delete(e) {
    return (Z("dataset", this.#t.config()), A(ue(this.#t, this.#e, "DELETE", e)));
  }
  list() {
    Z("dataset", this.#t.config());
    const e = this.#t.config(),
      r = e.projectId;
    let n = "/datasets";
    return (
      e.useProjectHostname === !1 && (n = `/projects/${r}/datasets`),
      A(R(this.#t, this.#e, { uri: n, tag: null }))
    );
  }
}
function ue(t, e, r, n, i) {
  return (Z("dataset", t.config()), Fr(n), R(t, e, { method: r, uri: `/datasets/${n}`, body: i, tag: null }));
}
class wn {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  getPlaybackInfo(e, r = {}) {
    const n = this.#t.config()["~experimental_resource"]?.id,
      { instanceId: i, libraryId: s } = ko(e),
      o = s || n;
    if (!o)
      throw new Error(
        "Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR",
      );
    const a = To(i, o),
      u = jo(r);
    return R(this.#t, this.#e, { method: "GET", uri: a, query: u });
  }
}
class _o {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  getPlaybackInfo(e, r = {}) {
    return A(new wn(this.#t.observable, this.#e).getPlaybackInfo(e, r));
  }
}
const Oo = /^media-library:(ml[^:]+):([^:]+)$/;
function $o(t) {
  return typeof t == "object" && "_ref" in t;
}
function ko(t) {
  const e = $o(t) ? t._ref : t,
    r = Oo.exec(e);
  if (r) {
    const [, n, i] = r;
    return { libraryId: n, instanceId: i };
  }
  if (typeof t == "string" && t.startsWith("video-")) return { instanceId: t };
  throw new Error(
    `Invalid video asset instance identifier "${e}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`,
  );
}
function To(t, e) {
  return `/media-libraries/${e}/video/${t}/playback-info`;
}
function jo(t) {
  const e = {};
  if (t.transformations) {
    const { thumbnail: r, animated: n, storyboard: i } = t.transformations;
    (r &&
      (r.width && (e.thumbnailWidth = r.width),
      r.height && (e.thumbnailHeight = r.height),
      r.time !== void 0 && (e.thumbnailTime = r.time),
      r.fit && (e.thumbnailFit = r.fit),
      r.format && (e.thumbnailFormat = r.format)),
      n &&
        (n.width && (e.animatedWidth = n.width),
        n.height && (e.animatedHeight = n.height),
        n.start !== void 0 && (e.animatedStart = n.start),
        n.end !== void 0 && (e.animatedEnd = n.end),
        n.fps && (e.animatedFps = n.fps),
        n.format && (e.animatedFormat = n.format)),
      i && i.format && (e.storyboardFormat = i.format));
  }
  return (t.expiration && (e.expiration = t.expiration), e);
}
class Ro {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  list(e) {
    const r = {},
      n = "/projects";
    return (
      e?.includeMembers === !1 && (r.includeMembers = "false"),
      e?.organizationId && (r.organizationId = e.organizationId),
      R(this.#t, this.#e, { uri: n, query: r })
    );
  }
  getById(e) {
    return R(this.#t, this.#e, { uri: `/projects/${e}` });
  }
}
class Po {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  list(e) {
    const r = {},
      n = "/projects";
    return (
      e?.includeMembers === !1 && (r.includeMembers = "false"),
      e?.organizationId && (r.organizationId = e.organizationId),
      A(R(this.#t, this.#e, { uri: n, query: r }))
    );
  }
  getById(e) {
    return A(R(this.#t, this.#e, { uri: `/projects/${e}` }));
  }
}
const Gt = as("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8),
  qe = (t, e) => (e ? Ce(t, e) : Pr(t));
function De(t, { releaseId: e, publishedId: r, document: n }) {
  if (r && n._id) {
    const i = qe(r, e);
    return (Cs(i, n), i);
  }
  if (n._id) {
    const i = Ne(n._id),
      s = Be(n._id);
    if (!i && !s) throw new Error(`\`${t}()\` requires a document with an \`_id\` that is a version or draft ID`);
    if (e) {
      if (i)
        throw new Error(
          `\`${t}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${e}\`) was also provided.`,
        );
      const o = Mr(n._id);
      if (o !== e)
        throw new Error(
          `\`${t}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${e}\`) does not match the document's version ID (\`${o}\`).`,
        );
    }
    return n._id;
  }
  if (r) return qe(r, e);
  throw new Error(`\`${t}()\` requires either a publishedId or a document with an \`_id\``);
}
const Mo = (t, e) => {
    if (typeof t == "object" && t !== null && ("releaseId" in t || "metadata" in t)) {
      const { releaseId: r = Gt(), metadata: n = {} } = t;
      return [r, n, e];
    }
    return [Gt(), {}, t];
  },
  In = (t, e) => {
    const [r, n, i] = Mo(t, e),
      s = { ...n, releaseType: n.releaseType || "undecided" };
    return { action: { actionType: "sanity.action.release.create", releaseId: r, metadata: s }, options: i };
  };
class qo {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  get({ releaseId: e }, r) {
    return de(this.#t, this.#e, `_.releases.${e}`, r);
  }
  create(e, r) {
    const { action: n, options: i } = In(e, r),
      { releaseId: s, metadata: o } = n;
    return T(this.#t, this.#e, n, i).pipe(M((a) => ({ ...a, releaseId: s, metadata: o })));
  }
  edit({ releaseId: e, patch: r }, n) {
    const i = { actionType: "sanity.action.release.edit", releaseId: e, patch: r };
    return T(this.#t, this.#e, i, n);
  }
  publish({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.publish", releaseId: e };
    return T(this.#t, this.#e, n, r);
  }
  archive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.archive", releaseId: e };
    return T(this.#t, this.#e, n, r);
  }
  unarchive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unarchive", releaseId: e };
    return T(this.#t, this.#e, n, r);
  }
  schedule({ releaseId: e, publishAt: r }, n) {
    const i = { actionType: "sanity.action.release.schedule", releaseId: e, publishAt: r };
    return T(this.#t, this.#e, i, n);
  }
  unschedule({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unschedule", releaseId: e };
    return T(this.#t, this.#e, n, r);
  }
  delete({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.delete", releaseId: e };
    return T(this.#t, this.#e, n, r);
  }
  fetchDocuments({ releaseId: e }, r) {
    return en(this.#t, this.#e, e, r);
  }
}
class Do {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  get({ releaseId: e }, r) {
    return A(de(this.#t, this.#e, `_.releases.${e}`, r));
  }
  async create(e, r) {
    const { action: n, options: i } = In(e, r),
      { releaseId: s, metadata: o } = n;
    return { ...(await A(T(this.#t, this.#e, n, i))), releaseId: s, metadata: o };
  }
  edit({ releaseId: e, patch: r }, n) {
    const i = { actionType: "sanity.action.release.edit", releaseId: e, patch: r };
    return A(T(this.#t, this.#e, i, n));
  }
  publish({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.publish", releaseId: e };
    return A(T(this.#t, this.#e, n, r));
  }
  archive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.archive", releaseId: e };
    return A(T(this.#t, this.#e, n, r));
  }
  unarchive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unarchive", releaseId: e };
    return A(T(this.#t, this.#e, n, r));
  }
  schedule({ releaseId: e, publishAt: r }, n) {
    const i = { actionType: "sanity.action.release.schedule", releaseId: e, publishAt: r };
    return A(T(this.#t, this.#e, i, n));
  }
  unschedule({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unschedule", releaseId: e };
    return A(T(this.#t, this.#e, n, r));
  }
  delete({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.delete", releaseId: e };
    return A(T(this.#t, this.#e, n, r));
  }
  fetchDocuments({ releaseId: e }, r) {
    return A(en(this.#t, this.#e, e, r));
  }
}
class Lo {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  getById(e) {
    return R(this.#t, this.#e, { uri: `/users/${e}` });
  }
}
class Fo {
  #t;
  #e;
  constructor(e, r) {
    ((this.#t = e), (this.#e = r));
  }
  getById(e) {
    return A(R(this.#t, this.#e, { uri: `/users/${e}` }));
  }
}
class Le {
  assets;
  datasets;
  live;
  mediaLibrary;
  projects;
  users;
  agent;
  releases;
  #t;
  #e;
  listen = gn;
  constructor(e, r = Ie) {
    (this.config(r),
      (this.#e = e),
      (this.assets = new ho(this, this.#e)),
      (this.datasets = new Ao(this, this.#e)),
      (this.live = new bn(this)),
      (this.mediaLibrary = { video: new wn(this, this.#e) }),
      (this.projects = new Ro(this, this.#e)),
      (this.users = new Lo(this, this.#e)),
      (this.agent = { action: new lo(this, this.#e) }),
      (this.releases = new qo(this, this.#e)));
  }
  clone() {
    return new Le(this.#e, this.config());
  }
  config(e) {
    if (e === void 0) return { ...this.#t };
    if (this.#t && this.#t.allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client",
      );
    return ((this.#t = Hr(e, this.#t || {})), this);
  }
  withConfig(e) {
    const r = this.config();
    return new Le(this.#e, {
      ...r,
      ...e,
      stega: { ...(r.stega || {}), ...(typeof e?.stega == "boolean" ? { enabled: e.stega } : e?.stega || {}) },
    });
  }
  fetch(e, r, n) {
    return Xr(this, this.#e, this.#t.stega, e, r, n);
  }
  getDocument(e, r) {
    if (r?.includeAllVersions === !0) return de(this, this.#e, e, { ...r, includeAllVersions: !0 });
    const n = {
      signal: r?.signal,
      tag: r?.tag,
      releaseId: r?.releaseId,
      ...(r && "includeAllVersions" in r ? { includeAllVersions: !1 } : {}),
    };
    return de(this, this.#e, e, n);
  }
  getDocuments(e, r) {
    return Zr(this, this.#e, e, r);
  }
  create(e, r) {
    return Ge(this, this.#e, e, "create", r);
  }
  createIfNotExists(e, r) {
    return tn(this, this.#e, e, r);
  }
  createOrReplace(e, r) {
    return rn(this, this.#e, e, r);
  }
  createVersion({ document: e, publishedId: r, releaseId: n, baseId: i, ifBaseRevisionId: s }, o) {
    if (!e) return sn(this, this.#e, r, i, n, s, o);
    const a = De("createVersion", { document: e, publishedId: r, releaseId: n }),
      u = { ...e, _id: a },
      c = r || He(e._id);
    return nn(this, this.#e, u, c, o);
  }
  delete(e, r) {
    return on(this, this.#e, e, r);
  }
  discardVersion({ releaseId: e, publishedId: r }, n, i) {
    const s = qe(r, e);
    return an(this, this.#e, s, n, i);
  }
  replaceVersion({ document: e, publishedId: r, releaseId: n }, i) {
    const s = De("replaceVersion", { document: e, publishedId: r, releaseId: n }),
      o = { ...e, _id: s };
    return un(this, this.#e, o, i);
  }
  unpublishVersion({ releaseId: e, publishedId: r }, n) {
    const i = Ce(r, e);
    return cn(this, this.#e, i, r, n);
  }
  mutate(e, r) {
    return ln(this, this.#e, e, r);
  }
  patch(e, r) {
    return new re(e, r, this);
  }
  transaction(e) {
    return new ze(e, this);
  }
  action(e, r) {
    return T(this, this.#e, e, r);
  }
  request(e) {
    return R(this, this.#e, e);
  }
  getUrl(e, r) {
    return bt(this, e, r);
  }
  getDataUrl(e, r) {
    return U(this, e, r);
  }
}
class Fe {
  assets;
  datasets;
  live;
  mediaLibrary;
  projects;
  users;
  agent;
  releases;
  observable;
  #t;
  #e;
  listen = gn;
  constructor(e, r = Ie) {
    (this.config(r),
      (this.#e = e),
      (this.assets = new po(this, this.#e)),
      (this.datasets = new So(this, this.#e)),
      (this.live = new bn(this)),
      (this.mediaLibrary = { video: new _o(this, this.#e) }),
      (this.projects = new Po(this, this.#e)),
      (this.users = new Fo(this, this.#e)),
      (this.agent = { action: new fo(this, this.#e) }),
      (this.releases = new Do(this, this.#e)),
      (this.observable = new Le(e, r)));
  }
  clone() {
    return new Fe(this.#e, this.config());
  }
  config(e) {
    if (e === void 0) return { ...this.#t };
    if (this.#t && this.#t.allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client",
      );
    return (this.observable && this.observable.config(e), (this.#t = Hr(e, this.#t || {})), this);
  }
  withConfig(e) {
    const r = this.config();
    return new Fe(this.#e, {
      ...r,
      ...e,
      stega: { ...(r.stega || {}), ...(typeof e?.stega == "boolean" ? { enabled: e.stega } : e?.stega || {}) },
    });
  }
  fetch(e, r, n) {
    return A(Xr(this, this.#e, this.#t.stega, e, r, n));
  }
  getDocument(e, r) {
    if (r?.includeAllVersions === !0) return A(de(this, this.#e, e, { ...r, includeAllVersions: !0 }));
    const n = {
      signal: r?.signal,
      tag: r?.tag,
      releaseId: r?.releaseId,
      ...(r && "includeAllVersions" in r ? { includeAllVersions: !1 } : {}),
    };
    return A(de(this, this.#e, e, n));
  }
  getDocuments(e, r) {
    return A(Zr(this, this.#e, e, r));
  }
  create(e, r) {
    return A(Ge(this, this.#e, e, "create", r));
  }
  createIfNotExists(e, r) {
    return A(tn(this, this.#e, e, r));
  }
  createOrReplace(e, r) {
    return A(rn(this, this.#e, e, r));
  }
  createVersion({ document: e, publishedId: r, releaseId: n, baseId: i, ifBaseRevisionId: s }, o) {
    if (!e) return Ze(sn(this, this.#e, r, i, n, s, o));
    const a = De("createVersion", { document: e, publishedId: r, releaseId: n }),
      u = { ...e, _id: a },
      c = r || He(e._id);
    return Ze(nn(this, this.#e, u, c, o));
  }
  delete(e, r) {
    return A(on(this, this.#e, e, r));
  }
  discardVersion({ releaseId: e, publishedId: r }, n, i) {
    const s = qe(r, e);
    return A(an(this, this.#e, s, n, i));
  }
  replaceVersion({ document: e, publishedId: r, releaseId: n }, i) {
    const s = De("replaceVersion", { document: e, publishedId: r, releaseId: n }),
      o = { ...e, _id: s };
    return Ze(un(this, this.#e, o, i));
  }
  unpublishVersion({ releaseId: e, publishedId: r }, n) {
    const i = Ce(r, e);
    return A(cn(this, this.#e, i, r, n));
  }
  mutate(e, r) {
    return A(ln(this, this.#e, e, r));
  }
  patch(e, r) {
    return new Y(e, r, this);
  }
  transaction(e) {
    return new We(e, this);
  }
  action(e, r) {
    return A(T(this, this.#e, e, r));
  }
  request(e) {
    return A(R(this, this.#e, e));
  }
  dataRequest(e, r, n) {
    return A(ie(this, this.#e, e, r, n));
  }
  getUrl(e, r) {
    return bt(this, e, r);
  }
  getDataUrl(e, r) {
    return U(this, e, r);
  }
}
function Uo(t, e) {
  return {
    requester: Vt(t),
    createClient: (r) => {
      const n = Vt(t, { ignoreWarnings: r.ignoreWarnings });
      return new e(
        (i, s) =>
          (s || n)({ maxRedirects: 0, maxRetries: r.maxRetries, retryDelay: r.retryDelay, lineage: r.lineage, ...i }),
        r,
      );
    },
  };
}
var Vo = [];
const No = Uo(Vo, Fe),
  ba = No.createClient;
var Te = { exports: {} },
  Bo = Te.exports,
  Qt;
function wa() {
  return (
    Qt ||
      ((Qt = 1),
      (function (t, e) {
        (function (r, n) {
          t.exports = n();
        })(Bo, function () {
          function r(y, g) {
            (g == null || g > y.length) && (g = y.length);
            for (var b = 0, m = Array(g); b < g; b++) m[b] = y[b];
            return m;
          }
          function n(y, g) {
            var b = (typeof Symbol < "u" && y[Symbol.iterator]) || y["@@iterator"];
            if (b) return (b = b.call(y)).next.bind(b);
            if (Array.isArray(y) || (b = s(y)) || g) {
              b && (y = b);
              var m = 0;
              return function () {
                return m >= y.length ? { done: !0 } : { done: !1, value: y[m++] };
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function i() {
            return (
              (i = Object.assign
                ? Object.assign.bind()
                : function (y) {
                    for (var g = 1; g < arguments.length; g++) {
                      var b = arguments[g];
                      for (var m in b) ({}).hasOwnProperty.call(b, m) && (y[m] = b[m]);
                    }
                    return y;
                  }),
              i.apply(null, arguments)
            );
          }
          function s(y, g) {
            if (y) {
              if (typeof y == "string") return r(y, g);
              var b = {}.toString.call(y).slice(8, -1);
              return (
                b === "Object" && y.constructor && (b = y.constructor.name),
                b === "Map" || b === "Set"
                  ? Array.from(y)
                  : b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)
                    ? r(y, g)
                    : void 0
              );
            }
          }
          var o = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
          function a(y) {
            var g = y.split("-"),
              b = g[1],
              m = g[2],
              $ = g[3];
            if (!b || !m || !$) throw new Error("Malformed asset _ref '" + y + `'. Expected an id like "` + o + '".');
            var E = m.split("x"),
              _ = E[0],
              q = E[1],
              V = +_,
              F = +q,
              L = isFinite(V) && isFinite(F);
            if (!L) throw new Error("Malformed asset _ref '" + y + `'. Expected an id like "` + o + '".');
            return { id: b, width: V, height: F, format: $ };
          }
          var u = function (g) {
              var b = g;
              return b ? typeof b._ref == "string" : !1;
            },
            c = function (g) {
              var b = g;
              return b ? typeof b._id == "string" : !1;
            },
            p = function (g) {
              var b = g;
              return b && b.asset ? typeof b.asset.url == "string" : !1;
            },
            h = function (g) {
              if (typeof g == "object" && g !== null) {
                var b = g;
                return b._upload && (!b.asset || !b.asset._ref);
              }
              return !1;
            };
          function d(y) {
            if (!y) return null;
            var g;
            if (typeof y == "string" && l(y)) g = { asset: { _ref: v(y) } };
            else if (typeof y == "string") g = { asset: { _ref: y } };
            else if (u(y)) g = { asset: y };
            else if (c(y)) g = { asset: { _ref: y._id || "" } };
            else if (p(y)) g = { asset: { _ref: v(y.asset.url) } };
            else if (typeof y.asset == "object") g = i({}, y);
            else return null;
            var b = y;
            return (b.crop && (g.crop = b.crop), b.hotspot && (g.hotspot = b.hotspot), f(g));
          }
          function l(y) {
            return /^https?:\/\//.test("" + y);
          }
          function v(y) {
            var g = y.split("/").slice(-1);
            return ("image-" + g[0]).replace(/\.([a-z]+)$/, "-$1");
          }
          function f(y) {
            if (y.crop && y.hotspot) return y;
            var g = i({}, y);
            return (
              g.crop || (g.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
              g.hotspot || (g.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 }),
              g
            );
          }
          var w = [
            ["width", "w"],
            ["height", "h"],
            ["format", "fm"],
            ["download", "dl"],
            ["blur", "blur"],
            ["sharpen", "sharp"],
            ["invert", "invert"],
            ["orientation", "or"],
            ["minHeight", "min-h"],
            ["maxHeight", "max-h"],
            ["minWidth", "min-w"],
            ["maxWidth", "max-w"],
            ["quality", "q"],
            ["fit", "fit"],
            ["crop", "crop"],
            ["saturation", "sat"],
            ["auto", "auto"],
            ["dpr", "dpr"],
            ["pad", "pad"],
            ["frame", "frame"],
          ];
          function I(y) {
            var g = i({}, y || {}),
              b = g.source;
            delete g.source;
            var m = d(b);
            if (!m) {
              if (b && h(b))
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
              throw new Error("Unable to resolve image URL from source (" + JSON.stringify(b) + ")");
            }
            var $ = m.asset._ref || m.asset._id || "",
              E = a($),
              _ = Math.round(m.crop.left * E.width),
              q = Math.round(m.crop.top * E.height),
              V = {
                left: _,
                top: q,
                width: Math.round(E.width - m.crop.right * E.width - _),
                height: Math.round(E.height - m.crop.bottom * E.height - q),
              },
              F = (m.hotspot.height * E.height) / 2,
              L = (m.hotspot.width * E.width) / 2,
              se = m.hotspot.x * E.width,
              X = m.hotspot.y * E.height,
              N = { left: se - L, top: X - F, right: se + L, bottom: X + F };
            return (
              g.rect || g.focalPoint || g.ignoreImageParams || g.crop || (g = i({}, g, C({ crop: V, hotspot: N }, g))),
              x(i({}, g, { asset: E }))
            );
          }
          function x(y) {
            var g = (y.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
              b = y.vanityName ? "/" + y.vanityName : "",
              m = y.asset.id + "-" + y.asset.width + "x" + y.asset.height + "." + y.asset.format + b,
              $ = g + "/images/" + y.projectId + "/" + y.dataset + "/" + m,
              E = [];
            if (y.rect) {
              var _ = y.rect,
                q = _.left,
                V = _.top,
                F = _.width,
                L = _.height,
                se = q !== 0 || V !== 0 || L !== y.asset.height || F !== y.asset.width;
              se && E.push("rect=" + q + "," + V + "," + F + "," + L);
            }
            (y.bg && E.push("bg=" + y.bg),
              y.focalPoint && (E.push("fp-x=" + y.focalPoint.x), E.push("fp-y=" + y.focalPoint.y)));
            var X = [y.flipHorizontal && "h", y.flipVertical && "v"].filter(Boolean).join("");
            return (
              X && E.push("flip=" + X),
              w.forEach(function (N) {
                var me = N[0],
                  W = N[1];
                typeof y[me] < "u"
                  ? E.push(W + "=" + encodeURIComponent(y[me]))
                  : typeof y[W] < "u" && E.push(W + "=" + encodeURIComponent(y[W]));
              }),
              E.length === 0 ? $ : $ + "?" + E.join("&")
            );
          }
          function C(y, g) {
            var b,
              m = g.width,
              $ = g.height;
            if (!(m && $)) return { width: m, height: $, rect: y.crop };
            var E = y.crop,
              _ = y.hotspot,
              q = m / $,
              V = E.width / E.height;
            if (V > q) {
              var F = Math.round(E.height),
                L = Math.round(F * q),
                se = Math.max(0, Math.round(E.top)),
                X = Math.round((_.right - _.left) / 2 + _.left),
                N = Math.max(0, Math.round(X - L / 2));
              (N < E.left ? (N = E.left) : N + L > E.left + E.width && (N = E.left + E.width - L),
                (b = { left: N, top: se, width: L, height: F }));
            } else {
              var me = E.width,
                W = Math.round(me / q),
                kn = Math.max(0, Math.round(E.left)),
                Tn = Math.round((_.bottom - _.top) / 2 + _.top),
                ve = Math.max(0, Math.round(Tn - W / 2));
              (ve < E.top ? (ve = E.top) : ve + W > E.top + E.height && (ve = E.top + E.height - W),
                (b = { left: kn, top: ve, width: me, height: W }));
            }
            return { width: m, height: $, rect: b };
          }
          var O = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            P = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            D = ["format"];
          function Qe(y) {
            return y && "config" in y ? typeof y.config == "function" : !1;
          }
          function Ye(y) {
            return y && "clientConfig" in y ? typeof y.clientConfig == "object" : !1;
          }
          function ye(y) {
            for (var g = w, b = n(g), m; !(m = b()).done;) {
              var $ = m.value,
                E = $[0],
                _ = $[1];
              if (y === E || y === _) return E;
            }
            return y;
          }
          function $n(y) {
            if (Qe(y)) {
              var g = y.config(),
                b = g.apiHost,
                m = g.projectId,
                $ = g.dataset,
                E = b || "https://api.sanity.io";
              return new Je(null, { baseUrl: E.replace(/^https:\/\/api\./, "https://cdn."), projectId: m, dataset: $ });
            }
            if (Ye(y)) {
              var _ = y.clientConfig,
                q = _.apiHost,
                V = _.projectId,
                F = _.dataset,
                L = q || "https://api.sanity.io";
              return new Je(null, { baseUrl: L.replace(/^https:\/\/api\./, "https://cdn."), projectId: V, dataset: F });
            }
            return new Je(null, y || {});
          }
          var Je = (function () {
            function y(b, m) {
              ((this.options = void 0), (this.options = b ? i({}, b.options || {}, m || {}) : i({}, m || {})));
            }
            var g = y.prototype;
            return (
              (g.withOptions = function (m) {
                var $ = m.baseUrl || this.options.baseUrl,
                  E = { baseUrl: $ };
                for (var _ in m)
                  if (m.hasOwnProperty(_)) {
                    var q = ye(_);
                    E[q] = m[_];
                  }
                return new y(this, i({ baseUrl: $ }, E));
              }),
              (g.image = function (m) {
                return this.withOptions({ source: m });
              }),
              (g.dataset = function (m) {
                return this.withOptions({ dataset: m });
              }),
              (g.projectId = function (m) {
                return this.withOptions({ projectId: m });
              }),
              (g.bg = function (m) {
                return this.withOptions({ bg: m });
              }),
              (g.dpr = function (m) {
                return this.withOptions(m && m !== 1 ? { dpr: m } : {});
              }),
              (g.width = function (m) {
                return this.withOptions({ width: m });
              }),
              (g.height = function (m) {
                return this.withOptions({ height: m });
              }),
              (g.focalPoint = function (m, $) {
                return this.withOptions({ focalPoint: { x: m, y: $ } });
              }),
              (g.maxWidth = function (m) {
                return this.withOptions({ maxWidth: m });
              }),
              (g.minWidth = function (m) {
                return this.withOptions({ minWidth: m });
              }),
              (g.maxHeight = function (m) {
                return this.withOptions({ maxHeight: m });
              }),
              (g.minHeight = function (m) {
                return this.withOptions({ minHeight: m });
              }),
              (g.size = function (m, $) {
                return this.withOptions({ width: m, height: $ });
              }),
              (g.blur = function (m) {
                return this.withOptions({ blur: m });
              }),
              (g.sharpen = function (m) {
                return this.withOptions({ sharpen: m });
              }),
              (g.rect = function (m, $, E, _) {
                return this.withOptions({ rect: { left: m, top: $, width: E, height: _ } });
              }),
              (g.format = function (m) {
                return this.withOptions({ format: m });
              }),
              (g.invert = function (m) {
                return this.withOptions({ invert: m });
              }),
              (g.orientation = function (m) {
                return this.withOptions({ orientation: m });
              }),
              (g.quality = function (m) {
                return this.withOptions({ quality: m });
              }),
              (g.forceDownload = function (m) {
                return this.withOptions({ download: m });
              }),
              (g.flipHorizontal = function () {
                return this.withOptions({ flipHorizontal: !0 });
              }),
              (g.flipVertical = function () {
                return this.withOptions({ flipVertical: !0 });
              }),
              (g.ignoreImageParams = function () {
                return this.withOptions({ ignoreImageParams: !0 });
              }),
              (g.fit = function (m) {
                if (O.indexOf(m) === -1) throw new Error('Invalid fit mode "' + m + '"');
                return this.withOptions({ fit: m });
              }),
              (g.crop = function (m) {
                if (P.indexOf(m) === -1) throw new Error('Invalid crop mode "' + m + '"');
                return this.withOptions({ crop: m });
              }),
              (g.saturation = function (m) {
                return this.withOptions({ saturation: m });
              }),
              (g.auto = function (m) {
                if (D.indexOf(m) === -1) throw new Error('Invalid auto mode "' + m + '"');
                return this.withOptions({ auto: m });
              }),
              (g.pad = function (m) {
                return this.withOptions({ pad: m });
              }),
              (g.vanityName = function (m) {
                return this.withOptions({ vanityName: m });
              }),
              (g.frame = function (m) {
                if (m !== 1) throw new Error('Invalid frame value "' + m + '"');
                return this.withOptions({ frame: m });
              }),
              (g.url = function () {
                return I(this.options);
              }),
              (g.toString = function () {
                return this.url();
              }),
              y
            );
          })();
          return $n;
        });
      })(Te)),
    Te.exports
  );
}
function Ue(t) {
  return (
    t._type === "span" &&
    "text" in t &&
    typeof t.text == "string" &&
    (typeof t.marks > "u" || (Array.isArray(t.marks) && t.marks.every((e) => typeof e == "string")))
  );
}
function En(t) {
  return (
    typeof t._type == "string" &&
    t._type[0] !== "@" &&
    (!("markDefs" in t) ||
      !t.markDefs ||
      (Array.isArray(t.markDefs) && t.markDefs.every((e) => typeof e._key == "string"))) &&
    "children" in t &&
    Array.isArray(t.children) &&
    t.children.every((e) => typeof e == "object" && "_type" in e)
  );
}
function xn(t) {
  return (
    En(t) && "listItem" in t && typeof t.listItem == "string" && (typeof t.level > "u" || typeof t.level == "number")
  );
}
function Cn(t) {
  return t._type === "@list";
}
function An(t) {
  return t._type === "@span";
}
function Sn(t) {
  return t._type === "@text";
}
const Yt = ["strong", "em", "code", "underline", "strike-through"];
function Ho(t, e, r) {
  if (!Ue(t) || !t.marks) return [];
  if (!t.marks.length) return [];
  const n = t.marks.slice(),
    i = {};
  return (
    n.forEach((s) => {
      i[s] = 1;
      for (let o = e + 1; o < r.length; o++) {
        const a = r[o];
        if (a && Ue(a) && Array.isArray(a.marks) && a.marks.indexOf(s) !== -1) i[s]++;
        else break;
      }
    }),
    n.sort((s, o) => Wo(i, s, o))
  );
}
function Wo(t, e, r) {
  const n = t[e],
    i = t[r];
  if (n !== i) return i - n;
  const s = Yt.indexOf(e),
    o = Yt.indexOf(r);
  return s !== o ? s - o : e.localeCompare(r);
}
function zo(t) {
  var e;
  const { children: r } = t,
    n = t.markDefs ?? [];
  if (!r || !r.length) return [];
  const i = r.map(Ho),
    s = { _type: "@span", children: [], markType: "<unknown>" };
  let o = [s];
  for (let a = 0; a < r.length; a++) {
    const u = r[a];
    if (!u) continue;
    const c = i[a] || [];
    let p = 1;
    if (o.length > 1)
      for (p; p < o.length; p++) {
        const d = ((e = o[p]) == null ? void 0 : e.markKey) || "",
          l = c.indexOf(d);
        if (l === -1) break;
        c.splice(l, 1);
      }
    o = o.slice(0, p);
    let h = o[o.length - 1];
    if (h) {
      for (const d of c) {
        const l = n?.find((w) => w._key === d),
          v = l ? l._type : d,
          f = { _type: "@span", _key: u._key, children: [], markDef: l, markType: v, markKey: d };
        (h.children.push(f), o.push(f), (h = f));
      }
      if (Ue(u)) {
        const d = u.text.split(`
`);
        for (let l = d.length; l-- > 1;)
          d.splice(
            l,
            0,
            `
`,
          );
        h.children = h.children.concat(d.map((l) => ({ _type: "@text", text: l })));
      } else h.children = h.children.concat(u);
    }
  }
  return s.children;
}
function Go(t, e) {
  const r = [];
  let n;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (s) {
      if (!xn(s)) {
        (r.push(s), (n = void 0));
        continue;
      }
      if (!n) {
        ((n = $e(s, i, e)), r.push(n));
        continue;
      }
      if (Qo(s, n)) {
        n.children.push(s);
        continue;
      }
      if ((s.level || 1) > n.level) {
        const o = $e(s, i, e);
        if (e === "html") {
          const a = n.children[n.children.length - 1],
            u = { ...a, children: [...a.children, o] };
          n.children[n.children.length - 1] = u;
        } else n.children.push(o);
        n = o;
        continue;
      }
      if ((s.level || 1) < n.level) {
        const o = r[r.length - 1],
          a = o && at(o, s);
        if (a) {
          ((n = a), n.children.push(s));
          continue;
        }
        ((n = $e(s, i, e)), r.push(n));
        continue;
      }
      if (s.listItem !== n.listItem) {
        const o = r[r.length - 1],
          a = o && at(o, { level: s.level || 1 });
        if (a && a.listItem === s.listItem) {
          ((n = a), n.children.push(s));
          continue;
        } else {
          ((n = $e(s, i, e)), r.push(n));
          continue;
        }
      }
      (console.warn("Unknown state encountered for block", s), r.push(s));
    }
  }
  return r;
}
function Qo(t, e) {
  return (t.level || 1) === e.level && t.listItem === e.listItem;
}
function $e(t, e, r) {
  return {
    _type: "@list",
    _key: `${t._key || `${e}`}-parent`,
    mode: r,
    level: t.level || 1,
    listItem: t.listItem,
    children: [t],
  };
}
function at(t, e) {
  const r = e.level || 1,
    n = e.listItem || "normal",
    i = typeof e.listItem == "string";
  if (Cn(t) && (t.level || 1) === r && i && (t.listItem || "normal") === n) return t;
  if (!("children" in t)) return;
  const s = t.children[t.children.length - 1];
  return s && !Ue(s) ? at(s, e) : void 0;
}
function _n(t) {
  let e = "";
  return (
    t.children.forEach((r) => {
      Sn(r) ? (e += r.text) : An(r) && (e += _n(r));
    }),
    e
  );
}
const Yo = "html",
  Jo = {
    number: ({ children: t }) => S.jsx("ol", { children: t }),
    bullet: ({ children: t }) => S.jsx("ul", { children: t }),
  },
  Ko = ({ children: t }) => S.jsx("li", { children: t }),
  Xo = ({ children: t, value: e }) => S.jsx("a", { href: e?.href, children: t }),
  Zo = { textDecoration: "underline" },
  ea = {
    em: ({ children: t }) => S.jsx("em", { children: t }),
    strong: ({ children: t }) => S.jsx("strong", { children: t }),
    code: ({ children: t }) => S.jsx("code", { children: t }),
    underline: ({ children: t }) => S.jsx("span", { style: Zo, children: t }),
    "strike-through": ({ children: t }) => S.jsx("del", { children: t }),
    link: Xo,
  },
  _e = (t, e) => `[@portabletext/react] Unknown ${t}, specify a component for it in the \`components.${e}\` prop`,
  On = (t) => _e(`block type "${t}"`, "types"),
  ta = (t) => _e(`mark type "${t}"`, "marks"),
  ra = (t) => _e(`block style "${t}"`, "block"),
  na = (t) => _e(`list style "${t}"`, "list"),
  ia = (t) => _e(`list item style "${t}"`, "listItem");
function sa(t) {
  console.warn(t);
}
const Jt = { display: "none" },
  oa = ({ value: t, isInline: e }) => {
    const r = On(t._type);
    return e ? S.jsx("span", { style: Jt, children: r }) : S.jsx("div", { style: Jt, children: r });
  },
  aa = ({ markType: t, children: e }) => S.jsx("span", { className: `unknown__pt__mark__${t}`, children: e }),
  ua = ({ children: t }) => S.jsx("p", { children: t }),
  ca = ({ children: t }) => S.jsx("ul", { children: t }),
  la = ({ children: t }) => S.jsx("li", { children: t }),
  fa = () => S.jsx("br", {}),
  ha = {
    normal: ({ children: t }) => S.jsx("p", { children: t }),
    blockquote: ({ children: t }) => S.jsx("blockquote", { children: t }),
    h1: ({ children: t }) => S.jsx("h1", { children: t }),
    h2: ({ children: t }) => S.jsx("h2", { children: t }),
    h3: ({ children: t }) => S.jsx("h3", { children: t }),
    h4: ({ children: t }) => S.jsx("h4", { children: t }),
    h5: ({ children: t }) => S.jsx("h5", { children: t }),
    h6: ({ children: t }) => S.jsx("h6", { children: t }),
  },
  Kt = {
    types: {},
    block: ha,
    marks: ea,
    list: Jo,
    listItem: Ko,
    hardBreak: fa,
    unknownType: oa,
    unknownMark: aa,
    unknownList: ca,
    unknownListItem: la,
    unknownBlockStyle: ua,
  };
function da(t, e) {
  const { block: r, list: n, listItem: i, marks: s, types: o, ...a } = e;
  return {
    ...t,
    block: ge(t, e, "block"),
    list: ge(t, e, "list"),
    listItem: ge(t, e, "listItem"),
    marks: ge(t, e, "marks"),
    types: ge(t, e, "types"),
    ...a,
  };
}
function ge(t, e, r) {
  const n = e[r],
    i = t[r];
  return typeof n == "function" || (n && typeof i == "function") ? n : n ? { ...i, ...n } : i;
}
function Ia({ value: t, components: e, listNestingMode: r, onMissingComponent: n = sa }) {
  const i = n || ya,
    s = Array.isArray(t) ? t : [t],
    o = Go(s, r || Yo),
    a = wt.useMemo(() => (e ? da(Kt, e) : Kt), [e]),
    u = wt.useMemo(() => pa(a, i), [a, i]),
    c = o.map((p, h) => u({ node: p, index: h, isInline: !1, renderNode: u }));
  return S.jsx(S.Fragment, { children: c });
}
const pa = (t, e) => {
  function r(h) {
    const { node: d, index: l, isInline: v } = h,
      f = d._key || `node-${l}`;
    return Cn(d)
      ? s(d, l, f)
      : xn(d)
        ? i(d, l, f)
        : An(d)
          ? o(d, l, f)
          : n(d)
            ? p(d, l, f, v)
            : En(d)
              ? a(d, l, f, v)
              : Sn(d)
                ? u(d, f)
                : c(d, l, f, v);
  }
  function n(h) {
    return h._type in t.types;
  }
  function i(h, d, l) {
    const v = Xt({ node: h, index: d, isInline: !1, renderNode: r }),
      f = t.listItem,
      w = (typeof f == "function" ? f : f[h.listItem]) || t.unknownListItem;
    if (w === t.unknownListItem) {
      const x = h.listItem || "bullet";
      e(ia(x), { type: x, nodeType: "listItemStyle" });
    }
    let I = v.children;
    if (h.style && h.style !== "normal") {
      const { listItem: x, ...C } = h;
      I = r({ node: C, index: d, isInline: !1 });
    }
    return S.jsx(w, { value: h, index: d, isInline: !1, renderNode: r, children: I }, l);
  }
  function s(h, d, l) {
    const v = h.children.map((I, x) =>
        r({ node: I._key ? I : { ...I, _key: `li-${d}-${x}` }, index: x, isInline: !1 }),
      ),
      f = t.list,
      w = (typeof f == "function" ? f : f[h.listItem]) || t.unknownList;
    if (w === t.unknownList) {
      const I = h.listItem || "bullet";
      e(na(I), { nodeType: "listStyle", type: I });
    }
    return S.jsx(w, { value: h, index: d, isInline: !1, renderNode: r, children: v }, l);
  }
  function o(h, d, l) {
    const { markDef: v, markType: f, markKey: w } = h,
      I = t.marks[f] || t.unknownMark,
      x = h.children.map((C, O) => r({ node: C, index: O, isInline: !0 }));
    return (
      I === t.unknownMark && e(ta(f), { nodeType: "mark", type: f }),
      S.jsx(I, { text: _n(h), value: v, markType: f, markKey: w, renderNode: r, children: x }, l)
    );
  }
  function a(h, d, l, v) {
    const { _key: f, ...w } = Xt({ node: h, index: d, isInline: v, renderNode: r }),
      I = w.node.style || "normal",
      x = (typeof t.block == "function" ? t.block : t.block[I]) || t.unknownBlockStyle;
    return (
      x === t.unknownBlockStyle && e(ra(I), { nodeType: "blockStyle", type: I }),
      S.jsx(x, { ...w, value: w.node, renderNode: r }, l)
    );
  }
  function u(h, d) {
    if (
      h.text ===
      `
`
    ) {
      const l = t.hardBreak;
      return l
        ? S.jsx(l, {}, d)
        : `
`;
    }
    return h.text;
  }
  function c(h, d, l, v) {
    const f = { value: h, isInline: v, index: d, renderNode: r };
    e(On(h._type), { nodeType: "block", type: h._type });
    const w = t.unknownType;
    return S.jsx(w, { ...f }, l);
  }
  function p(h, d, l, v) {
    const f = { value: h, isInline: v, index: d, renderNode: r },
      w = t.types[h._type];
    return w ? S.jsx(w, { ...f }, l) : null;
  }
  return r;
};
function Xt(t) {
  const { node: e, index: r, isInline: n, renderNode: i } = t,
    s = zo(e).map((o, a) => i({ node: o, isInline: !0, index: a, renderNode: i }));
  return { _key: e._key || `block-${r}`, children: s, index: r, isInline: n, node: e };
}
function ya() {}
export { ga as C, Ia as P, ba as c, Tr as i, wa as r };
