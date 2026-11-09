import {
  W as r0,
  R as d0,
  O as mm,
  P as hm,
  S as m0,
  a as th,
  V as h0,
  b as A0,
  B as v0,
  C as y0,
  L as p0,
  c as jv,
  N as B0,
  A as E0,
  d as ZA,
  e as jn,
  f as C0,
  U as S0,
  g as Zl,
  h as ts,
  i as g0,
  T as b0,
  D as Qv,
  j as Wd,
  k as Kv,
  l as M0,
  m as Nh,
  n as Lv,
  o as Yv,
  p as Ar,
  F as am,
  M as Bu,
  q as T0,
  r as D0,
  s as R0,
  t as yr,
  I as H0,
  Q as Xv,
  u as G0,
  v as nm,
  w as Am,
  x as O0,
  y as xa,
  z as _0,
  E as qv,
  G as U0,
  H as N0,
  J as z0,
  K as um,
  X as J0,
  Y as zh,
  Z as x0,
  _ as j0,
  $ as Q0,
  a0 as eh,
  a1 as K0,
  a2 as Zv,
  a3 as mr,
  a4 as L0,
  a5 as vm,
  a6 as Y0,
  a7 as X0,
  a8 as q0,
  a9 as Z0,
  aa as F0,
  ab as V0,
  ac as lh,
  ad as I0,
  ae as w0,
  af as W0,
  ag as P0,
  ah as k0,
  ai as Fv,
  aj as $0,
  ak as im,
  al as FA,
  am as VA,
  an as IA,
  ao as tp,
  ap as ep,
  aq as lp,
  ar as ap,
  as as np,
  at as up,
  au as ip,
  av as cp,
  aw as sp,
  ax as fp,
  ay as op,
} from "../js/fa3e1470-three-yAinaQqd.js";
function Zh(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var ah = { exports: {} },
  fr = {};
var wA;
function rp() {
  if (wA) return fr;
  wA = 1;
  var d = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function r(h, A, y) {
    var E = null;
    if ((y !== void 0 && (E = "" + y), A.key !== void 0 && (E = "" + A.key), "key" in A)) {
      y = {};
      for (var S in A) S !== "key" && (y[S] = A[S]);
    } else y = A;
    return ((A = y.ref), { $$typeof: d, type: h, key: E, ref: A !== void 0 ? A : null, props: y });
  }
  return ((fr.Fragment = c), (fr.jsx = r), (fr.jsxs = r), fr);
}
var WA;
function dp() {
  return (WA || ((WA = 1), (ah.exports = rp())), ah.exports);
}
var ja = dp(),
  nh = { exports: {} },
  zt = {};
var PA;
function mp() {
  if (PA) return zt;
  PA = 1;
  var d = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    y = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    S = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    C = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    D = Symbol.iterator;
  function U(H) {
    return H === null || typeof H != "object"
      ? null
      : ((H = (D && H[D]) || H["@@iterator"]), typeof H == "function" ? H : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    W = Object.assign,
    w = {};
  function j(H, X, et) {
    ((this.props = H), (this.context = X), (this.refs = w), (this.updater = et || Q));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (H, X) {
      if (typeof H != "object" && typeof H != "function" && H != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, H, X, "setState");
    }),
    (j.prototype.forceUpdate = function (H) {
      this.updater.enqueueForceUpdate(this, H, "forceUpdate");
    }));
  function K() {}
  K.prototype = j.prototype;
  function nt(H, X, et) {
    ((this.props = H), (this.context = X), (this.refs = w), (this.updater = et || Q));
  }
  var at = (nt.prototype = new K());
  ((at.constructor = nt), W(at, j.prototype), (at.isPureReactComponent = !0));
  var dt = Array.isArray;
  function ct() {}
  var ot = { H: null, A: null, T: null, S: null },
    gt = Object.prototype.hasOwnProperty;
  function ht(H, X, et) {
    var lt = et.ref;
    return { $$typeof: d, type: H, key: X, ref: lt !== void 0 ? lt : null, props: et };
  }
  function bt(H, X) {
    return ht(H.type, X, H.props);
  }
  function yt(H) {
    return typeof H == "object" && H !== null && H.$$typeof === d;
  }
  function ne(H) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      H.replace(/[=:]/g, function (et) {
        return X[et];
      })
    );
  }
  var Dt = /\/+/g;
  function Jt(H, X) {
    return typeof H == "object" && H !== null && H.key != null ? ne("" + H.key) : X.toString(36);
  }
  function Ot(H) {
    switch (H.status) {
      case "fulfilled":
        return H.value;
      case "rejected":
        throw H.reason;
      default:
        switch (
          (typeof H.status == "string"
            ? H.then(ct, ct)
            : ((H.status = "pending"),
              H.then(
                function (X) {
                  H.status === "pending" && ((H.status = "fulfilled"), (H.value = X));
                },
                function (X) {
                  H.status === "pending" && ((H.status = "rejected"), (H.reason = X));
                },
              )),
          H.status)
        ) {
          case "fulfilled":
            return H.value;
          case "rejected":
            throw H.reason;
        }
    }
    throw H;
  }
  function R(H, X, et, lt, vt) {
    var _t = typeof H;
    (_t === "undefined" || _t === "boolean") && (H = null);
    var Zt = !1;
    if (H === null) Zt = !0;
    else
      switch (_t) {
        case "bigint":
        case "string":
        case "number":
          Zt = !0;
          break;
        case "object":
          switch (H.$$typeof) {
            case d:
            case c:
              Zt = !0;
              break;
            case T:
              return ((Zt = H._init), R(Zt(H._payload), X, et, lt, vt));
          }
      }
    if (Zt)
      return (
        (vt = vt(H)),
        (Zt = lt === "" ? "." + Jt(H, 0) : lt),
        dt(vt)
          ? ((et = ""),
            Zt != null && (et = Zt.replace(Dt, "$&/") + "/"),
            R(vt, X, et, "", function (Ke) {
              return Ke;
            }))
          : vt != null &&
            (yt(vt) &&
              (vt = bt(
                vt,
                et + (vt.key == null || (H && H.key === vt.key) ? "" : ("" + vt.key).replace(Dt, "$&/") + "/") + Zt,
              )),
            X.push(vt)),
        1
      );
    Zt = 0;
    var de = lt === "" ? "." : lt + ":";
    if (dt(H))
      for (var Ee = 0; Ee < H.length; Ee++) ((lt = H[Ee]), (_t = de + Jt(lt, Ee)), (Zt += R(lt, X, et, _t, vt)));
    else if (((Ee = U(H)), typeof Ee == "function"))
      for (H = Ee.call(H), Ee = 0; !(lt = H.next()).done;)
        ((lt = lt.value), (_t = de + Jt(lt, Ee++)), (Zt += R(lt, X, et, _t, vt)));
    else if (_t === "object") {
      if (typeof H.then == "function") return R(Ot(H), X, et, lt, vt);
      throw (
        (X = String(H)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]" ? "object with keys {" + Object.keys(H).join(", ") + "}" : X) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Zt;
  }
  function N(H, X, et) {
    if (H == null) return H;
    var lt = [],
      vt = 0;
    return (
      R(H, lt, "", "", function (_t) {
        return X.call(et, _t, vt++);
      }),
      lt
    );
  }
  function I(H) {
    if (H._status === -1) {
      var X = H._result;
      ((X = X()),
        X.then(
          function (et) {
            (H._status === 0 || H._status === -1) && ((H._status = 1), (H._result = et));
          },
          function (et) {
            (H._status === 0 || H._status === -1) && ((H._status = 2), (H._result = et));
          },
        ),
        H._status === -1 && ((H._status = 0), (H._result = X)));
    }
    if (H._status === 1) return H._result.default;
    throw H._result;
  }
  var ut =
      typeof reportError == "function"
        ? reportError
        : function (H) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var X = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof H == "object" && H !== null && typeof H.message == "string" ? String(H.message) : String(H),
                error: H,
              });
              if (!window.dispatchEvent(X)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", H);
              return;
            }
            console.error(H);
          },
    rt = {
      map: N,
      forEach: function (H, X, et) {
        N(
          H,
          function () {
            X.apply(this, arguments);
          },
          et,
        );
      },
      count: function (H) {
        var X = 0;
        return (
          N(H, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (H) {
        return (
          N(H, function (X) {
            return X;
          }) || []
        );
      },
      only: function (H) {
        if (!yt(H)) throw Error("React.Children.only expected to receive a single React element child.");
        return H;
      },
    };
  return (
    (zt.Activity = g),
    (zt.Children = rt),
    (zt.Component = j),
    (zt.Fragment = r),
    (zt.Profiler = A),
    (zt.PureComponent = nt),
    (zt.StrictMode = h),
    (zt.Suspense = B),
    (zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ot),
    (zt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (H) {
        return ot.H.useMemoCache(H);
      },
    }),
    (zt.cache = function (H) {
      return function () {
        return H.apply(null, arguments);
      };
    }),
    (zt.cacheSignal = function () {
      return null;
    }),
    (zt.cloneElement = function (H, X, et) {
      if (H == null) throw Error("The argument must be a React element, but you passed " + H + ".");
      var lt = W({}, H.props),
        vt = H.key;
      if (X != null)
        for (_t in (X.key !== void 0 && (vt = "" + X.key), X))
          !gt.call(X, _t) ||
            _t === "key" ||
            _t === "__self" ||
            _t === "__source" ||
            (_t === "ref" && X.ref === void 0) ||
            (lt[_t] = X[_t]);
      var _t = arguments.length - 2;
      if (_t === 1) lt.children = et;
      else if (1 < _t) {
        for (var Zt = Array(_t), de = 0; de < _t; de++) Zt[de] = arguments[de + 2];
        lt.children = Zt;
      }
      return ht(H.type, vt, lt);
    }),
    (zt.createContext = function (H) {
      return (
        (H = { $$typeof: E, _currentValue: H, _currentValue2: H, _threadCount: 0, Provider: null, Consumer: null }),
        (H.Provider = H),
        (H.Consumer = { $$typeof: y, _context: H }),
        H
      );
    }),
    (zt.createElement = function (H, X, et) {
      var lt,
        vt = {},
        _t = null;
      if (X != null)
        for (lt in (X.key !== void 0 && (_t = "" + X.key), X))
          gt.call(X, lt) && lt !== "key" && lt !== "__self" && lt !== "__source" && (vt[lt] = X[lt]);
      var Zt = arguments.length - 2;
      if (Zt === 1) vt.children = et;
      else if (1 < Zt) {
        for (var de = Array(Zt), Ee = 0; Ee < Zt; Ee++) de[Ee] = arguments[Ee + 2];
        vt.children = de;
      }
      if (H && H.defaultProps) for (lt in ((Zt = H.defaultProps), Zt)) vt[lt] === void 0 && (vt[lt] = Zt[lt]);
      return ht(H, _t, vt);
    }),
    (zt.createRef = function () {
      return { current: null };
    }),
    (zt.forwardRef = function (H) {
      return { $$typeof: S, render: H };
    }),
    (zt.isValidElement = yt),
    (zt.lazy = function (H) {
      return { $$typeof: T, _payload: { _status: -1, _result: H }, _init: I };
    }),
    (zt.memo = function (H, X) {
      return { $$typeof: C, type: H, compare: X === void 0 ? null : X };
    }),
    (zt.startTransition = function (H) {
      var X = ot.T,
        et = {};
      ot.T = et;
      try {
        var lt = H(),
          vt = ot.S;
        (vt !== null && vt(et, lt),
          typeof lt == "object" && lt !== null && typeof lt.then == "function" && lt.then(ct, ut));
      } catch (_t) {
        ut(_t);
      } finally {
        (X !== null && et.types !== null && (X.types = et.types), (ot.T = X));
      }
    }),
    (zt.unstable_useCacheRefresh = function () {
      return ot.H.useCacheRefresh();
    }),
    (zt.use = function (H) {
      return ot.H.use(H);
    }),
    (zt.useActionState = function (H, X, et) {
      return ot.H.useActionState(H, X, et);
    }),
    (zt.useCallback = function (H, X) {
      return ot.H.useCallback(H, X);
    }),
    (zt.useContext = function (H) {
      return ot.H.useContext(H);
    }),
    (zt.useDebugValue = function () {}),
    (zt.useDeferredValue = function (H, X) {
      return ot.H.useDeferredValue(H, X);
    }),
    (zt.useEffect = function (H, X) {
      return ot.H.useEffect(H, X);
    }),
    (zt.useEffectEvent = function (H) {
      return ot.H.useEffectEvent(H);
    }),
    (zt.useId = function () {
      return ot.H.useId();
    }),
    (zt.useImperativeHandle = function (H, X, et) {
      return ot.H.useImperativeHandle(H, X, et);
    }),
    (zt.useInsertionEffect = function (H, X) {
      return ot.H.useInsertionEffect(H, X);
    }),
    (zt.useLayoutEffect = function (H, X) {
      return ot.H.useLayoutEffect(H, X);
    }),
    (zt.useMemo = function (H, X) {
      return ot.H.useMemo(H, X);
    }),
    (zt.useOptimistic = function (H, X) {
      return ot.H.useOptimistic(H, X);
    }),
    (zt.useReducer = function (H, X, et) {
      return ot.H.useReducer(H, X, et);
    }),
    (zt.useRef = function (H) {
      return ot.H.useRef(H);
    }),
    (zt.useState = function (H) {
      return ot.H.useState(H);
    }),
    (zt.useSyncExternalStore = function (H, X, et) {
      return ot.H.useSyncExternalStore(H, X, et);
    }),
    (zt.useTransition = function () {
      return ot.H.useTransition();
    }),
    (zt.version = "19.2.0"),
    zt
  );
}
var kA;
function Df() {
  return (kA || ((kA = 1), (nh.exports = mp())), nh.exports);
}
var st = Df();
const hr = Zh(st);
var uh = { exports: {} },
  or = {},
  ih = { exports: {} },
  ch = {};
var $A;
function hp() {
  return (
    $A ||
      (($A = 1),
      (function (d) {
        function c(R, N) {
          var I = R.length;
          R.push(N);
          t: for (; 0 < I;) {
            var ut = (I - 1) >>> 1,
              rt = R[ut];
            if (0 < A(rt, N)) ((R[ut] = N), (R[I] = rt), (I = ut));
            else break t;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function h(R) {
          if (R.length === 0) return null;
          var N = R[0],
            I = R.pop();
          if (I !== N) {
            R[0] = I;
            t: for (var ut = 0, rt = R.length, H = rt >>> 1; ut < H;) {
              var X = 2 * (ut + 1) - 1,
                et = R[X],
                lt = X + 1,
                vt = R[lt];
              if (0 > A(et, I))
                lt < rt && 0 > A(vt, et)
                  ? ((R[ut] = vt), (R[lt] = I), (ut = lt))
                  : ((R[ut] = et), (R[X] = I), (ut = X));
              else if (lt < rt && 0 > A(vt, I)) ((R[ut] = vt), (R[lt] = I), (ut = lt));
              else break t;
            }
          }
          return N;
        }
        function A(R, N) {
          var I = R.sortIndex - N.sortIndex;
          return I !== 0 ? I : R.id - N.id;
        }
        if (((d.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var y = performance;
          d.unstable_now = function () {
            return y.now();
          };
        } else {
          var E = Date,
            S = E.now();
          d.unstable_now = function () {
            return E.now() - S;
          };
        }
        var B = [],
          C = [],
          T = 1,
          g = null,
          D = 3,
          U = !1,
          Q = !1,
          W = !1,
          w = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          K = typeof clearTimeout == "function" ? clearTimeout : null,
          nt = typeof setImmediate < "u" ? setImmediate : null;
        function at(R) {
          for (var N = r(C); N !== null;) {
            if (N.callback === null) h(C);
            else if (N.startTime <= R) (h(C), (N.sortIndex = N.expirationTime), c(B, N));
            else break;
            N = r(C);
          }
        }
        function dt(R) {
          if (((W = !1), at(R), !Q))
            if (r(B) !== null) ((Q = !0), ct || ((ct = !0), ne()));
            else {
              var N = r(C);
              N !== null && Ot(dt, N.startTime - R);
            }
        }
        var ct = !1,
          ot = -1,
          gt = 5,
          ht = -1;
        function bt() {
          return w ? !0 : !(d.unstable_now() - ht < gt);
        }
        function yt() {
          if (((w = !1), ct)) {
            var R = d.unstable_now();
            ht = R;
            var N = !0;
            try {
              t: {
                ((Q = !1), W && ((W = !1), K(ot), (ot = -1)), (U = !0));
                var I = D;
                try {
                  e: {
                    for (at(R), g = r(B); g !== null && !(g.expirationTime > R && bt());) {
                      var ut = g.callback;
                      if (typeof ut == "function") {
                        ((g.callback = null), (D = g.priorityLevel));
                        var rt = ut(g.expirationTime <= R);
                        if (((R = d.unstable_now()), typeof rt == "function")) {
                          ((g.callback = rt), at(R), (N = !0));
                          break e;
                        }
                        (g === r(B) && h(B), at(R));
                      } else h(B);
                      g = r(B);
                    }
                    if (g !== null) N = !0;
                    else {
                      var H = r(C);
                      (H !== null && Ot(dt, H.startTime - R), (N = !1));
                    }
                  }
                  break t;
                } finally {
                  ((g = null), (D = I), (U = !1));
                }
                N = void 0;
              }
            } finally {
              N ? ne() : (ct = !1);
            }
          }
        }
        var ne;
        if (typeof nt == "function")
          ne = function () {
            nt(yt);
          };
        else if (typeof MessageChannel < "u") {
          var Dt = new MessageChannel(),
            Jt = Dt.port2;
          ((Dt.port1.onmessage = yt),
            (ne = function () {
              Jt.postMessage(null);
            }));
        } else
          ne = function () {
            j(yt, 0);
          };
        function Ot(R, N) {
          ot = j(function () {
            R(d.unstable_now());
          }, N);
        }
        ((d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (d.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (gt = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (d.unstable_next = function (R) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = D;
            }
            var I = D;
            D = N;
            try {
              return R();
            } finally {
              D = I;
            }
          }),
          (d.unstable_requestPaint = function () {
            w = !0;
          }),
          (d.unstable_runWithPriority = function (R, N) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var I = D;
            D = R;
            try {
              return N();
            } finally {
              D = I;
            }
          }),
          (d.unstable_scheduleCallback = function (R, N, I) {
            var ut = d.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? ut + I : ut))
                : (I = ut),
              R)
            ) {
              case 1:
                var rt = -1;
                break;
              case 2:
                rt = 250;
                break;
              case 5:
                rt = 1073741823;
                break;
              case 4:
                rt = 1e4;
                break;
              default:
                rt = 5e3;
            }
            return (
              (rt = I + rt),
              (R = { id: T++, callback: N, priorityLevel: R, startTime: I, expirationTime: rt, sortIndex: -1 }),
              I > ut
                ? ((R.sortIndex = I),
                  c(C, R),
                  r(B) === null && R === r(C) && (W ? (K(ot), (ot = -1)) : (W = !0), Ot(dt, I - ut)))
                : ((R.sortIndex = rt), c(B, R), Q || U || ((Q = !0), ct || ((ct = !0), ne()))),
              R
            );
          }),
          (d.unstable_shouldYield = bt),
          (d.unstable_wrapCallback = function (R) {
            var N = D;
            return function () {
              var I = D;
              D = N;
              try {
                return R.apply(this, arguments);
              } finally {
                D = I;
              }
            };
          }));
      })(ch)),
    ch
  );
}
var tv;
function Ap() {
  return (tv || ((tv = 1), (ih.exports = hp())), ih.exports);
}
var sh = { exports: {} },
  ql = {};
var ev;
function vp() {
  if (ev) return ql;
  ev = 1;
  var d = Df();
  function c(B) {
    var C = "https://react.dev/errors/" + B;
    if (1 < arguments.length) {
      C += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++) C += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return (
      "Minified React error #" +
      B +
      "; visit " +
      C +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var h = {
      d: {
        f: r,
        r: function () {
          throw Error(c(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    A = Symbol.for("react.portal");
  function y(B, C, T) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: A, key: g == null ? null : "" + g, children: B, containerInfo: C, implementation: T };
  }
  var E = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(B, C) {
    if (B === "font") return "";
    if (typeof C == "string") return C === "use-credentials" ? C : "";
  }
  return (
    (ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (ql.createPortal = function (B, C) {
      var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!C || (C.nodeType !== 1 && C.nodeType !== 9 && C.nodeType !== 11)) throw Error(c(299));
      return y(B, C, null, T);
    }),
    (ql.flushSync = function (B) {
      var C = E.T,
        T = h.p;
      try {
        if (((E.T = null), (h.p = 2), B)) return B();
      } finally {
        ((E.T = C), (h.p = T), h.d.f());
      }
    }),
    (ql.preconnect = function (B, C) {
      typeof B == "string" &&
        (C
          ? ((C = C.crossOrigin), (C = typeof C == "string" ? (C === "use-credentials" ? C : "") : void 0))
          : (C = null),
        h.d.C(B, C));
    }),
    (ql.prefetchDNS = function (B) {
      typeof B == "string" && h.d.D(B);
    }),
    (ql.preinit = function (B, C) {
      if (typeof B == "string" && C && typeof C.as == "string") {
        var T = C.as,
          g = S(T, C.crossOrigin),
          D = typeof C.integrity == "string" ? C.integrity : void 0,
          U = typeof C.fetchPriority == "string" ? C.fetchPriority : void 0;
        T === "style"
          ? h.d.S(B, typeof C.precedence == "string" ? C.precedence : void 0, {
              crossOrigin: g,
              integrity: D,
              fetchPriority: U,
            })
          : T === "script" &&
            h.d.X(B, {
              crossOrigin: g,
              integrity: D,
              fetchPriority: U,
              nonce: typeof C.nonce == "string" ? C.nonce : void 0,
            });
      }
    }),
    (ql.preinitModule = function (B, C) {
      if (typeof B == "string")
        if (typeof C == "object" && C !== null) {
          if (C.as == null || C.as === "script") {
            var T = S(C.as, C.crossOrigin);
            h.d.M(B, {
              crossOrigin: T,
              integrity: typeof C.integrity == "string" ? C.integrity : void 0,
              nonce: typeof C.nonce == "string" ? C.nonce : void 0,
            });
          }
        } else C == null && h.d.M(B);
    }),
    (ql.preload = function (B, C) {
      if (typeof B == "string" && typeof C == "object" && C !== null && typeof C.as == "string") {
        var T = C.as,
          g = S(T, C.crossOrigin);
        h.d.L(B, T, {
          crossOrigin: g,
          integrity: typeof C.integrity == "string" ? C.integrity : void 0,
          nonce: typeof C.nonce == "string" ? C.nonce : void 0,
          type: typeof C.type == "string" ? C.type : void 0,
          fetchPriority: typeof C.fetchPriority == "string" ? C.fetchPriority : void 0,
          referrerPolicy: typeof C.referrerPolicy == "string" ? C.referrerPolicy : void 0,
          imageSrcSet: typeof C.imageSrcSet == "string" ? C.imageSrcSet : void 0,
          imageSizes: typeof C.imageSizes == "string" ? C.imageSizes : void 0,
          media: typeof C.media == "string" ? C.media : void 0,
        });
      }
    }),
    (ql.preloadModule = function (B, C) {
      if (typeof B == "string")
        if (C) {
          var T = S(C.as, C.crossOrigin);
          h.d.m(B, {
            as: typeof C.as == "string" && C.as !== "script" ? C.as : void 0,
            crossOrigin: T,
            integrity: typeof C.integrity == "string" ? C.integrity : void 0,
          });
        } else h.d.m(B);
    }),
    (ql.requestFormReset = function (B) {
      h.d.r(B);
    }),
    (ql.unstable_batchedUpdates = function (B, C) {
      return B(C);
    }),
    (ql.useFormState = function (B, C, T) {
      return E.H.useFormState(B, C, T);
    }),
    (ql.useFormStatus = function () {
      return E.H.useHostTransitionStatus();
    }),
    (ql.version = "19.2.0"),
    ql
  );
}
var lv;
function yp() {
  if (lv) return sh.exports;
  lv = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (c) {
        console.error(c);
      }
  }
  return (d(), (sh.exports = vp()), sh.exports);
}
var av;
function pp() {
  if (av) return or;
  av = 1;
  var d = Ap(),
    c = Df(),
    r = yp();
  function h(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function A(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function y(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return;) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function E(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function B(t) {
    if (y(t) !== t) throw Error(h(188));
  }
  function C(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(h(188));
      return e !== t ? null : t;
    }
    for (var n = t, u = e; ;) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((u = s.return), u !== null)) {
          n = u;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o;) {
          if (o === n) return (B(s), t);
          if (o === u) return (B(s), e);
          o = o.sibling;
        }
        throw Error(h(188));
      }
      if (n.return !== u.return) ((n = s), (u = o));
      else {
        for (var p = !1, b = s.child; b;) {
          if (b === n) {
            ((p = !0), (n = s), (u = o));
            break;
          }
          if (b === u) {
            ((p = !0), (u = s), (n = o));
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = o.child; b;) {
            if (b === n) {
              ((p = !0), (n = o), (u = s));
              break;
            }
            if (b === u) {
              ((p = !0), (u = o), (n = s));
              break;
            }
            b = b.sibling;
          }
          if (!p) throw Error(h(189));
        }
      }
      if (n.alternate !== u) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? t : e;
  }
  function T(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (((e = T(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    D = Symbol.for("react.element"),
    U = Symbol.for("react.transitional.element"),
    Q = Symbol.for("react.portal"),
    W = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    K = Symbol.for("react.consumer"),
    nt = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    dt = Symbol.for("react.suspense"),
    ct = Symbol.for("react.suspense_list"),
    ot = Symbol.for("react.memo"),
    gt = Symbol.for("react.lazy"),
    ht = Symbol.for("react.activity"),
    bt = Symbol.for("react.memo_cache_sentinel"),
    yt = Symbol.iterator;
  function ne(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (yt && t[yt]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var Dt = Symbol.for("react.client.reference");
  function Jt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Dt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case W:
        return "Fragment";
      case j:
        return "Profiler";
      case w:
        return "StrictMode";
      case dt:
        return "Suspense";
      case ct:
        return "SuspenseList";
      case ht:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Q:
          return "Portal";
        case nt:
          return t.displayName || "Context";
        case K:
          return (t._context.displayName || "Context") + ".Consumer";
        case at:
          var e = t.render;
          return (
            (t = t.displayName),
            t || ((t = e.displayName || e.name || ""), (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case ot:
          return ((e = t.displayName || null), e !== null ? e : Jt(t.type) || "Memo");
        case gt:
          ((e = t._payload), (t = t._init));
          try {
            return Jt(t(e));
          } catch {}
      }
    return null;
  }
  var Ot = Array.isArray,
    R = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    ut = [],
    rt = -1;
  function H(t) {
    return { current: t };
  }
  function X(t) {
    0 > rt || ((t.current = ut[rt]), (ut[rt] = null), rt--);
  }
  function et(t, e) {
    (rt++, (ut[rt] = t.current), (t.current = e));
  }
  var lt = H(null),
    vt = H(null),
    _t = H(null),
    Zt = H(null);
  function de(t, e) {
    switch ((et(_t, e), et(vt, t), et(lt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? hA(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = hA(e)), (t = AA(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (X(lt), et(lt, t));
  }
  function Ee() {
    (X(lt), X(vt), X(_t));
  }
  function Ke(t) {
    t.memoizedState !== null && et(Zt, t);
    var e = lt.current,
      n = AA(e, t.type);
    e !== n && (et(vt, t), et(lt, n));
  }
  function wt(t) {
    (vt.current === t && (X(lt), X(vt)), Zt.current === t && (X(Zt), (ur._currentValue = I)));
  }
  var Sl, sl;
  function fl(t) {
    if (Sl === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Sl = (e && e[1]) || ""),
          (sl =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Sl +
      t +
      sl
    );
  }
  var ga = !1;
  function Eu(t, e) {
    if (!t || ga) return "";
    ga = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var tt = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(tt.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(tt, []);
                } catch (V) {
                  var Z = V;
                }
                Reflect.construct(t, [], tt);
              } else {
                try {
                  tt.call();
                } catch (V) {
                  Z = V;
                }
                t.call(tt.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                Z = V;
              }
              (tt = t()) && typeof tt.catch == "function" && tt.catch(function () {});
            }
          } catch (V) {
            if (V && Z && typeof V.stack == "string") return [V.stack, Z.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      s &&
        s.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var o = u.DetermineComponentFrameRoot(),
        p = o[0],
        b = o[1];
      if (p && b) {
        var O = p.split(`
`),
          Y = b.split(`
`);
        for (s = u = 0; u < O.length && !O[u].includes("DetermineComponentFrameRoot");) u++;
        for (; s < Y.length && !Y[s].includes("DetermineComponentFrameRoot");) s++;
        if (u === O.length || s === Y.length)
          for (u = O.length - 1, s = Y.length - 1; 1 <= u && 0 <= s && O[u] !== Y[s];) s--;
        for (; 1 <= u && 0 <= s; u--, s--)
          if (O[u] !== Y[s]) {
            if (u !== 1 || s !== 1)
              do
                if ((u--, s--, 0 > s || O[u] !== Y[s])) {
                  var P =
                    `
` + O[u].replace(" at new ", " at ");
                  return (
                    t.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", t.displayName)),
                    P
                  );
                }
              while (1 <= u && 0 <= s);
            break;
          }
      }
    } finally {
      ((ga = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? fl(n) : "";
  }
  function ol(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return fl(t.type);
      case 16:
        return fl("Lazy");
      case 13:
        return t.child !== e && e !== null ? fl("Suspense Fallback") : fl("Suspense");
      case 19:
        return fl("SuspenseList");
      case 0:
      case 15:
        return Eu(t.type, !1);
      case 11:
        return Eu(t.type.render, !1);
      case 1:
        return Eu(t.type, !0);
      case 31:
        return fl("Activity");
      default:
        return "";
    }
  }
  function li(t) {
    try {
      var e = "",
        n = null;
      do ((e += ol(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var Qa = Object.prototype.hasOwnProperty,
    gl = d.unstable_scheduleCallback,
    Ka = d.unstable_cancelCallback,
    Hf = d.unstable_shouldYield,
    ls = d.unstable_requestPaint,
    rl = d.unstable_now,
    as = d.unstable_getCurrentPriorityLevel,
    ns = d.unstable_ImmediatePriority,
    da = d.unstable_UserBlockingPriority,
    us = d.unstable_NormalPriority,
    Cr = d.unstable_LowPriority,
    Sr = d.unstable_IdlePriority,
    Gf = d.log,
    Of = d.unstable_setDisableYieldValue,
    ma = null,
    Le = null;
  function ha(t) {
    if ((typeof Gf == "function" && Of(t), Le && typeof Le.setStrictMode == "function"))
      try {
        Le.setStrictMode(ma, t);
      } catch {}
  }
  var bl = Math.clz32 ? Math.clz32 : gr,
    Wi = Math.log,
    Pi = Math.LN2;
  function gr(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Wi(t) / Pi) | 0)) | 0);
  }
  var ki = 256,
    Cu = 262144,
    $i = 4194304;
  function La(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function tc(t, e, n) {
    var u = t.pendingLanes;
    if (u === 0) return 0;
    var s = 0,
      o = t.suspendedLanes,
      p = t.pingedLanes;
    t = t.warmLanes;
    var b = u & 134217727;
    return (
      b !== 0
        ? ((u = b & ~o),
          u !== 0 ? (s = La(u)) : ((p &= b), p !== 0 ? (s = La(p)) : n || ((n = b & ~t), n !== 0 && (s = La(n)))))
        : ((b = u & ~o), b !== 0 ? (s = La(b)) : p !== 0 ? (s = La(p)) : n || ((n = u & ~t), n !== 0 && (s = La(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & o) === 0 &&
            ((o = s & -s), (n = e & -e), o >= n || (o === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function ai(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function is(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ni() {
    var t = $i;
    return (($i <<= 1), ($i & 62914560) === 0 && ($i = 4194304), t);
  }
  function ui(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ii(t, e) {
    ((t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function br(t, e, n, u, s, o) {
    var p = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var b = t.entanglements,
      O = t.expirationTimes,
      Y = t.hiddenUpdates;
    for (n = p & ~n; 0 < n;) {
      var P = 31 - bl(n),
        tt = 1 << P;
      ((b[P] = 0), (O[P] = -1));
      var Z = Y[P];
      if (Z !== null)
        for (Y[P] = null, P = 0; P < Z.length; P++) {
          var V = Z[P];
          V !== null && (V.lane &= -536870913);
        }
      n &= ~tt;
    }
    (u !== 0 && _f(t, u, 0), o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(p & ~e)));
  }
  function _f(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var u = 31 - bl(e);
    ((t.entangledLanes |= e), (t.entanglements[u] = t.entanglements[u] | 1073741824 | (n & 261930)));
  }
  function cs(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n;) {
      var u = 31 - bl(n),
        s = 1 << u;
      ((s & e) | (t[u] & e) && (t[u] |= e), (n &= ~s));
    }
  }
  function ss(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : Ya(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function Ya(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function fs(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function dn() {
    var t = N.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : jA(t.type));
  }
  function Xa(t, e) {
    var n = N.p;
    try {
      return ((N.p = t), e());
    } finally {
      N.p = n;
    }
  }
  var ba = Math.random().toString(36).slice(2),
    Yt = "__reactFiber$" + ba,
    dl = "__reactProps$" + ba,
    Qn = "__reactContainer$" + ba,
    os = "__reactEvents$" + ba,
    Mr = "__reactListeners$" + ba,
    pm = "__reactHandles$" + ba,
    rs = "__reactResources$" + ba,
    Su = "__reactMarker$" + ba;
  function ec(t) {
    (delete t[Yt], delete t[dl], delete t[os], delete t[Mr], delete t[pm]);
  }
  function Fe(t) {
    var e = t[Yt];
    if (e) return e;
    for (var n = t.parentNode; n;) {
      if ((e = n[Qn] || n[Yt])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = SA(t); t !== null;) {
            if ((n = t[Yt])) return n;
            t = SA(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Ce(t) {
    if ((t = t[Yt] || t[Qn])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function mn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(h(33));
  }
  function hn(t) {
    var e = t[rs];
    return (e || (e = t[rs] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Ye(t) {
    t[Su] = !0;
  }
  var qa = new Set(),
    lc = {};
  function An(t, e) {
    (Kn(t, e), Kn(t + "Capture", e));
  }
  function Kn(t, e) {
    for (lc[t] = e, t = 0; t < e.length; t++) qa.add(e[t]);
  }
  var Tr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Uf = {},
    Nf = {};
  function Dr(t) {
    return Qa.call(Nf, t) ? !0 : Qa.call(Uf, t) ? !1 : Tr.test(t) ? (Nf[t] = !0) : ((Uf[t] = !0), !1);
  }
  function ac(t, e, n) {
    if (Dr(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var u = e.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function nc(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Ma(t, e, n, u) {
    if (u === null) t.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + u);
    }
  }
  function Fl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Rr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Hr(t, e, n) {
    var u = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get,
        o = u.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (p) {
            ((n = "" + p), o.call(this, p));
          },
        }),
        Object.defineProperty(t, e, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (p) {
            n = "" + p;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function ds(t) {
    if (!t._valueTracker) {
      var e = Rr(t) ? "checked" : "value";
      t._valueTracker = Hr(t, e, "" + t[e]);
    }
  }
  function zf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      u = "";
    return (t && (u = Rr(t) ? (t.checked ? "true" : "false") : t.value), (t = u), t !== n ? (e.setValue(t), !0) : !1);
  }
  function ci(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Gr = /[\n"\\]/g;
  function Vl(t) {
    return t.replace(Gr, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function ms(t, e, n, u, s, o, p, b) {
    ((t.name = ""),
      p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean"
        ? (t.type = p)
        : t.removeAttribute("type"),
      e != null
        ? p === "number"
          ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + Fl(e))
          : t.value !== "" + Fl(e) && (t.value = "" + Fl(e))
        : (p !== "submit" && p !== "reset") || t.removeAttribute("value"),
      e != null ? hs(t, p, Fl(e)) : n != null ? hs(t, p, Fl(n)) : u != null && t.removeAttribute("value"),
      s == null && o != null && (t.defaultChecked = !!o),
      s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean"
        ? (t.name = "" + Fl(b))
        : t.removeAttribute("name"));
  }
  function Jf(t, e, n, u, s, o, p, b) {
    if (
      (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        ds(t);
        return;
      }
      ((n = n != null ? "" + Fl(n) : ""),
        (e = e != null ? "" + Fl(e) : n),
        b || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((u = u ?? s),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (t.checked = b ? t.checked : !!u),
      (t.defaultChecked = !!u),
      p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.name = p),
      ds(t));
  }
  function hs(t, e, n) {
    (e === "number" && ci(t.ownerDocument) === t) || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function si(t, e, n, u) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && u && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Fl(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), u && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function xf(t, e, n) {
    if (e != null && ((e = "" + Fl(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Fl(n) : "";
  }
  function gu(t, e, n, u) {
    if (e == null) {
      if (u != null) {
        if (n != null) throw Error(h(92));
        if (Ot(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        n = u;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Fl(e)), (t.defaultValue = n), (u = t.textContent), u === n && u !== "" && u !== null && (t.value = u), ds(t));
  }
  function bu(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var As = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function uc(t, e, n) {
    var u = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? u
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : u
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || As.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function jf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(h(62));
    if (((t = t.style), n != null)) {
      for (var u in n)
        !n.hasOwnProperty(u) ||
          (e != null && e.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? (t.cssFloat = "") : (t[u] = ""));
      for (var s in e) ((u = e[s]), e.hasOwnProperty(s) && n[s] !== u && uc(t, s, u));
    } else for (var o in e) e.hasOwnProperty(o) && uc(t, o, e[o]);
  }
  function ic(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Or = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    _r =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cc(t) {
    return _r.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Za() {}
  var sc = null;
  function vs(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Mu = null,
    Ln = null;
  function Qf(t) {
    var e = Ce(t);
    if (e && (t = e.stateNode)) {
      var n = t[dl] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (ms(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode;) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Vl("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var u = n[e];
              if (u !== t && u.form === t.form) {
                var s = u[dl] || null;
                if (!s) throw Error(h(90));
                ms(u, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
              }
            }
            for (e = 0; e < n.length; e++) ((u = n[e]), u.form === t.form && zf(u));
          }
          break t;
        case "textarea":
          xf(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && si(t, !!n.multiple, e, !1));
      }
    }
  }
  var ys = !1;
  function Kf(t, e, n) {
    if (ys) return t(e, n);
    ys = !0;
    try {
      var u = t(e);
      return u;
    } finally {
      if (((ys = !1), (Mu !== null || Ln !== null) && (M(), Mu && ((e = Mu), (t = Ln), (Ln = Mu = null), Qf(e), t))))
        for (e = 0; e < t.length; e++) Qf(t[e]);
    }
  }
  function Tu(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var u = n[dl] || null;
    if (u === null) return null;
    n = u[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((u = !u.disabled) ||
          ((t = t.type), (u = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !u));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(h(231, e, typeof n));
    return n;
  }
  var Fa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ps = !1;
  if (Fa)
    try {
      var fc = {};
      (Object.defineProperty(fc, "passive", {
        get: function () {
          ps = !0;
        },
      }),
        window.addEventListener("test", fc, fc),
        window.removeEventListener("test", fc, fc));
    } catch {
      ps = !1;
    }
  var Yn = null,
    Bs = null,
    Xn = null;
  function Es() {
    if (Xn) return Xn;
    var t,
      e = Bs,
      n = e.length,
      u,
      s = "value" in Yn ? Yn.value : Yn.textContent,
      o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var p = n - t;
    for (u = 1; u <= p && e[n - u] === s[o - u]; u++);
    return (Xn = s.slice(t, 1 < u ? 1 - u : void 0));
  }
  function Du(t) {
    var e = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function oc() {
    return !0;
  }
  function Lf() {
    return !1;
  }
  function ml(t) {
    function e(n, u, s, o, p) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = u),
        (this.nativeEvent = o),
        (this.target = p),
        (this.currentTarget = null));
      for (var b in t) t.hasOwnProperty(b) && ((n = t[b]), (this[b] = n ? n(o) : o[b]));
      return (
        (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? oc : Lf),
        (this.isPropagationStopped = Lf),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = oc));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = oc));
        },
        persist: function () {},
        isPersistent: oc,
      }),
      e
    );
  }
  var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    rc = ml(qn),
    Ta = g({}, qn, { view: 0, detail: 0 }),
    Cs = ml(Ta),
    Ss,
    dc,
    fi,
    mc = g({}, Ta, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ac,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== fi &&
              (fi && t.type === "mousemove"
                ? ((Ss = t.screenX - fi.screenX), (dc = t.screenY - fi.screenY))
                : (dc = Ss = 0),
              (fi = t)),
            Ss);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : dc;
      },
    }),
    Ur = ml(mc),
    el = g({}, mc, { dataTransfer: 0 }),
    Nr = ml(el),
    zr = g({}, Ta, { relatedTarget: 0 }),
    gs = ml(zr),
    Jr = g({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xr = ml(Jr),
    hc = g({}, qn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Yf = ml(hc),
    jr = g({}, qn, { data: 0 }),
    Xf = ml(jr),
    Qr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    qf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Kr(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Zf[t]) ? !!e[t] : !1;
  }
  function Ac() {
    return Kr;
  }
  var Ff = g({}, Ta, {
      key: function (t) {
        if (t.key) {
          var e = Qr[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Du(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? qf[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ac,
      charCode: function (t) {
        return t.type === "keypress" ? Du(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress" ? Du(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
    }),
    Vf = ml(Ff),
    Lr = g({}, mc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    bs = ml(Lr),
    Yr = g({}, Ta, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ac,
    }),
    vn = ml(Yr),
    If = g({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bm = ml(If),
    Xr = g({}, mc, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zn = ml(Xr),
    yn = g({}, qn, { newState: 0, oldState: 0 }),
    wf = ml(yn),
    Wf = [9, 13, 27, 32],
    Ru = Fa && "CompositionEvent" in window,
    Fn = null;
  Fa && "documentMode" in document && (Fn = document.documentMode);
  var Hu = Fa && "TextEvent" in window && !Fn,
    ll = Fa && (!Ru || (Fn && 8 < Fn && 11 >= Fn)),
    vc = " ",
    Pf = !1;
  function Ms(t, e) {
    switch (t) {
      case "keyup":
        return Wf.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function oi(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var Vn = !1;
  function Ts(t, e) {
    switch (t) {
      case "compositionend":
        return oi(e);
      case "keypress":
        return e.which !== 32 ? null : ((Pf = !0), vc);
      case "textInput":
        return ((t = e.data), t === vc && Pf ? null : t);
      default:
        return null;
    }
  }
  function qr(t, e) {
    if (Vn)
      return t === "compositionend" || (!Ru && Ms(t, e)) ? ((t = Es()), (Xn = Bs = Yn = null), (Vn = !1), t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ll && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Il = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function kf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Il[t.type] : e === "textarea";
  }
  function Ds(t, e, n, u) {
    (Mu ? (Ln ? Ln.push(u) : (Ln = [u])) : (Mu = u),
      (e = zd(e, "onChange")),
      0 < e.length && ((n = new rc("onChange", "change", null, n, u)), t.push({ event: n, listeners: e })));
  }
  var ri = null,
    di = null;
  function $f(t) {
    sA(t, 0);
  }
  function mi(t) {
    var e = mn(t);
    if (zf(e)) return t;
  }
  function to(t, e) {
    if (t === "change") return e;
  }
  var yc = !1;
  if (Fa) {
    var Gu;
    if (Fa) {
      var Se = "oninput" in document;
      if (!Se) {
        var Zr = document.createElement("div");
        (Zr.setAttribute("oninput", "return;"), (Se = typeof Zr.oninput == "function"));
      }
      Gu = Se;
    } else Gu = !1;
    yc = Gu && (!document.documentMode || 9 < document.documentMode);
  }
  function Fr() {
    ri && (ri.detachEvent("onpropertychange", eo), (di = ri = null));
  }
  function eo(t) {
    if (t.propertyName === "value" && mi(di)) {
      var e = [];
      (Ds(e, di, t, vs(t)), Kf($f, e));
    }
  }
  function pc(t, e, n) {
    t === "focusin" ? (Fr(), (ri = e), (di = n), ri.attachEvent("onpropertychange", eo)) : t === "focusout" && Fr();
  }
  function In(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return mi(di);
  }
  function Vr(t, e) {
    if (t === "click") return mi(e);
  }
  function Ir(t, e) {
    if (t === "input" || t === "change") return mi(e);
  }
  function Ou(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ge = typeof Object.is == "function" ? Object.is : Ou;
  function hi(t, e) {
    if (ge(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
      u = Object.keys(e);
    if (n.length !== u.length) return !1;
    for (u = 0; u < n.length; u++) {
      var s = n[u];
      if (!Qa.call(e, s) || !ge(t[s], e[s])) return !1;
    }
    return !0;
  }
  function lo(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function ao(t, e) {
    var n = lo(t);
    t = 0;
    for (var u; n;) {
      if (n.nodeType === 3) {
        if (((u = t + n.textContent.length), t <= e && u >= e)) return { node: n, offset: e - t };
        t = u;
      }
      t: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = lo(n);
    }
  }
  function Rs(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Rs(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Hs(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = ci(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ci(t.document);
    }
    return e;
  }
  function Ai(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var wr = Fa && "documentMode" in document && 11 >= document.documentMode,
    vi = null,
    Gs = null,
    yi = null,
    wl = !1;
  function Os(t, e, n) {
    var u = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl ||
      vi == null ||
      vi !== ci(u) ||
      ((u = vi),
      "selectionStart" in u && Ai(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = ((u.ownerDocument && u.ownerDocument.defaultView) || window).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (yi && hi(yi, u)) ||
        ((yi = u),
        (u = zd(Gs, "onSelect")),
        0 < u.length &&
          ((e = new rc("onSelect", "select", null, e, n)), t.push({ event: e, listeners: u }), (e.target = vi))));
  }
  function wn(t, e) {
    var n = {};
    return ((n[t.toLowerCase()] = e.toLowerCase()), (n["Webkit" + t] = "webkit" + e), (n["Moz" + t] = "moz" + e), n);
  }
  var pi = {
      animationend: wn("Animation", "AnimationEnd"),
      animationiteration: wn("Animation", "AnimationIteration"),
      animationstart: wn("Animation", "AnimationStart"),
      transitionrun: wn("Transition", "TransitionRun"),
      transitionstart: wn("Transition", "TransitionStart"),
      transitioncancel: wn("Transition", "TransitionCancel"),
      transitionend: wn("Transition", "TransitionEnd"),
    },
    Bc = {},
    Ml = {};
  Fa &&
    ((Ml = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete pi.animationend.animation, delete pi.animationiteration.animation, delete pi.animationstart.animation),
    "TransitionEvent" in window || delete pi.transitionend.transition);
  function Wn(t) {
    if (Bc[t]) return Bc[t];
    if (!pi[t]) return t;
    var e = pi[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Ml) return (Bc[t] = e[n]);
    return t;
  }
  var Ul = Wn("animationend"),
    no = Wn("animationiteration"),
    Va = Wn("animationstart"),
    Bi = Wn("transitionrun"),
    Pn = Wn("transitionstart"),
    uo = Wn("transitioncancel"),
    _s = Wn("transitionend"),
    pn = new Map(),
    Us =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Us.push("scrollEnd");
  function hl(t, e) {
    (pn.set(t, e), An(e, [t]));
  }
  var kn =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    We = [],
    _u = 0,
    Ns = 0;
  function $n() {
    for (var t = _u, e = (Ns = _u = 0); e < t;) {
      var n = We[e];
      We[e++] = null;
      var u = We[e];
      We[e++] = null;
      var s = We[e];
      We[e++] = null;
      var o = We[e];
      if (((We[e++] = null), u !== null && s !== null)) {
        var p = u.pending;
        (p === null ? (s.next = s) : ((s.next = p.next), (p.next = s)), (u.pending = s));
      }
      o !== 0 && zs(n, s, o);
    }
  }
  function Ec(t, e, n, u) {
    ((We[_u++] = t),
      (We[_u++] = e),
      (We[_u++] = n),
      (We[_u++] = u),
      (Ns |= u),
      (t.lanes |= u),
      (t = t.alternate),
      t !== null && (t.lanes |= u));
  }
  function Ei(t, e, n, u) {
    return (Ec(t, e, n, u), Ci(t));
  }
  function tu(t, e) {
    return (Ec(t, null, null, e), Ci(t));
  }
  function zs(t, e, n) {
    t.lanes |= n;
    var u = t.alternate;
    u !== null && (u.lanes |= n);
    for (var s = !1, o = t.return; o !== null;)
      ((o.childLanes |= n),
        (u = o.alternate),
        u !== null && (u.childLanes |= n),
        o.tag === 22 && ((t = o.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = o),
        (o = o.return));
    return t.tag === 3
      ? ((o = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - bl(n)),
          (t = o.hiddenUpdates),
          (u = t[s]),
          u === null ? (t[s] = [e]) : u.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function Ci(t) {
    if (50 < wu) throw ((wu = 0), (Wu = null), Error(h(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var eu = {};
  function Wr(t, e, n, u) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Tl(t, e, n, u) {
    return new Wr(t, e, n, u);
  }
  function Dl(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ia(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Tl(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e), (n.type = t.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Al(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Cc(t, e, n, u, s, o) {
    var p = 0;
    if (((u = t), typeof t == "function")) Dl(t) && (p = 1);
    else if (typeof t == "string")
      p = $y(t, n, lt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ht:
          return ((t = Tl(31, n, e, s)), (t.elementType = ht), (t.lanes = o), t);
        case W:
          return Bn(n.children, s, o, e);
        case w:
          ((p = 8), (s |= 24));
          break;
        case j:
          return ((t = Tl(12, n, e, s | 2)), (t.elementType = j), (t.lanes = o), t);
        case dt:
          return ((t = Tl(13, n, e, s)), (t.elementType = dt), (t.lanes = o), t);
        case ct:
          return ((t = Tl(19, n, e, s)), (t.elementType = ct), (t.lanes = o), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case nt:
                p = 10;
                break t;
              case K:
                p = 9;
                break t;
              case at:
                p = 11;
                break t;
              case ot:
                p = 14;
                break t;
              case gt:
                ((p = 16), (u = null));
                break t;
            }
          ((p = 29), (n = Error(h(130, t === null ? "null" : typeof t, ""))), (u = null));
      }
    return ((e = Tl(p, n, e, s)), (e.elementType = t), (e.type = u), (e.lanes = o), e);
  }
  function Bn(t, e, n, u) {
    return ((t = Tl(7, t, u, e)), (t.lanes = n), t);
  }
  function Js(t, e, n) {
    return ((t = Tl(6, t, null, e)), (t.lanes = n), t);
  }
  function Pr(t) {
    var e = Tl(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Da(t, e, n) {
    return (
      (e = Tl(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
      e
    );
  }
  var io = new WeakMap();
  function Nl(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = io.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: li(e) }), io.set(t, e), e);
    }
    return { value: t, source: e, stack: li(e) };
  }
  var Ra = [],
    Uu = 0,
    Sc = null,
    Si = 0,
    Wl = [],
    zl = 0,
    wa = null,
    Wa = 1,
    Pa = "";
  function En(t, e) {
    ((Ra[Uu++] = Si), (Ra[Uu++] = Sc), (Sc = t), (Si = e));
  }
  function co(t, e, n) {
    ((Wl[zl++] = Wa), (Wl[zl++] = Pa), (Wl[zl++] = wa), (wa = t));
    var u = Wa;
    t = Pa;
    var s = 32 - bl(u) - 1;
    ((u &= ~(1 << s)), (n += 1));
    var o = 32 - bl(e) + s;
    if (30 < o) {
      var p = s - (s % 5);
      ((o = (u & ((1 << p) - 1)).toString(32)),
        (u >>= p),
        (s -= p),
        (Wa = (1 << (32 - bl(e) + s)) | (n << s) | u),
        (Pa = o + t));
    } else ((Wa = (1 << o) | (n << s) | u), (Pa = t));
  }
  function xs(t) {
    t.return !== null && (En(t, 1), co(t, 1, 0));
  }
  function lu(t) {
    for (; t === Sc;) ((Sc = Ra[--Uu]), (Ra[Uu] = null), (Si = Ra[--Uu]), (Ra[Uu] = null));
    for (; t === wa;)
      ((wa = Wl[--zl]), (Wl[zl] = null), (Pa = Wl[--zl]), (Wl[zl] = null), (Wa = Wl[--zl]), (Wl[zl] = null));
  }
  function gc(t, e) {
    ((Wl[zl++] = Wa), (Wl[zl++] = Pa), (Wl[zl++] = wa), (Wa = e.id), (Pa = e.overflow), (wa = t));
  }
  var Pe = null,
    ve = null,
    Ft = !1,
    Cn = null,
    ke = !1,
    js = Error(h(519));
  function Xt(t) {
    var e = Error(h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw (bc(Nl(e, t)), js);
  }
  function Qs(t) {
    var e = t.stateNode,
      n = t.type,
      u = t.memoizedProps;
    switch (((e[Yt] = t), (e[dl] = u), n)) {
      case "dialog":
        (Vt("cancel", e), Vt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Vt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < tr.length; n++) Vt(tr[n], e);
        break;
      case "source":
        Vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Vt("error", e), Vt("load", e));
        break;
      case "details":
        Vt("toggle", e);
        break;
      case "input":
        (Vt("invalid", e), Jf(e, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0));
        break;
      case "select":
        Vt("invalid", e);
        break;
      case "textarea":
        (Vt("invalid", e), gu(e, u.value, u.defaultValue, u.children));
    }
    ((n = u.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      u.suppressHydrationWarning === !0 ||
      dA(e.textContent, n)
        ? (u.popover != null && (Vt("beforetoggle", e), Vt("toggle", e)),
          u.onScroll != null && Vt("scroll", e),
          u.onScrollEnd != null && Vt("scrollend", e),
          u.onClick != null && (e.onclick = Za),
          (e = !0))
        : (e = !1),
      e || Xt(t, !0));
  }
  function kr(t) {
    for (Pe = t.return; Pe;)
      switch (Pe.tag) {
        case 5:
        case 31:
        case 13:
          ke = !1;
          return;
        case 27:
        case 3:
          ke = !0;
          return;
        default:
          Pe = Pe.return;
      }
  }
  function Nu(t) {
    if (t !== Pe) return !1;
    if (!Ft) return (kr(t), (Ft = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) && ((n = t.type), (n = !(n !== "form" && n !== "button") || Qm(t.type, t.memoizedProps))),
        (n = !n)),
      n && ve && Xt(t),
      kr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(h(317));
      ve = CA(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(h(317));
      ve = CA(t);
    } else
      e === 27
        ? ((e = ve), Li(t.type) ? ((t = qm), (qm = null), (ve = t)) : (ve = e))
        : (ve = Pe ? fn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function zu() {
    ((ve = Pe = null), (Ft = !1));
  }
  function so() {
    var t = Cn;
    return (t !== null && (Cl === null ? (Cl = t) : Cl.push.apply(Cl, t), (Cn = null)), t);
  }
  function bc(t) {
    Cn === null ? (Cn = [t]) : Cn.push(t);
  }
  var fo = H(null),
    Sn = null,
    vl = null;
  function gn(t, e, n) {
    (et(fo, e._currentValue), (e._currentValue = n));
  }
  function Aa(t) {
    ((t._currentValue = fo.current), X(fo));
  }
  function bn(t, e, n) {
    for (; t !== null;) {
      var u = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), u !== null && (u.childLanes |= e))
          : u !== null && (u.childLanes & e) !== e && (u.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Ks(t, e, n, u) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null;) {
      var o = s.dependencies;
      if (o !== null) {
        var p = s.child;
        o = o.firstContext;
        t: for (; o !== null;) {
          var b = o;
          o = s;
          for (var O = 0; O < e.length; O++)
            if (b.context === e[O]) {
              ((o.lanes |= n), (b = o.alternate), b !== null && (b.lanes |= n), bn(o.return, n, t), u || (p = null));
              break t;
            }
          o = b.next;
        }
      } else if (s.tag === 18) {
        if (((p = s.return), p === null)) throw Error(h(341));
        ((p.lanes |= n), (o = p.alternate), o !== null && (o.lanes |= n), bn(p, n, t), (p = null));
      } else p = s.child;
      if (p !== null) p.return = s;
      else
        for (p = s; p !== null;) {
          if (p === t) {
            p = null;
            break;
          }
          if (((s = p.sibling), s !== null)) {
            ((s.return = p.return), (p = s));
            break;
          }
          p = p.return;
        }
      s = p;
    }
  }
  function au(t, e, n, u) {
    t = null;
    for (var s = e, o = !1; s !== null;) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var p = s.alternate;
        if (p === null) throw Error(h(387));
        if (((p = p.memoizedProps), p !== null)) {
          var b = s.type;
          ge(s.pendingProps.value, p.value) || (t !== null ? t.push(b) : (t = [b]));
        }
      } else if (s === Zt.current) {
        if (((p = s.alternate), p === null)) throw Error(h(387));
        p.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(ur) : (t = [ur]));
      }
      s = s.return;
    }
    (t !== null && Ks(e, t, n, u), (e.flags |= 262144));
  }
  function gi(t) {
    for (t = t.firstContext; t !== null;) {
      if (!ge(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ju(t) {
    ((Sn = t), (vl = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function $e(t) {
    return oo(Sn, t);
  }
  function Mc(t, e) {
    return (Sn === null && Ju(t), oo(t, e));
  }
  function oo(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), vl === null)) {
      if (t === null) throw Error(h(308));
      ((vl = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else vl = vl.next = e;
    return n;
  }
  var $r =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, u) {
                  t.push(u);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    td = d.unstable_scheduleCallback,
    ro = d.unstable_NormalPriority,
    Ct = { $$typeof: nt, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function mo() {
    return { controller: new $r(), data: new Map(), refCount: 0 };
  }
  function al(t) {
    (t.refCount--,
      t.refCount === 0 &&
        td(ro, function () {
          t.controller.abort();
        }));
  }
  var xu = null,
    ho = 0,
    Mn = 0,
    Ha = null;
  function bi(t, e) {
    if (xu === null) {
      var n = (xu = []);
      ((ho = 0),
        (Mn = Gm()),
        (Ha = {
          status: "pending",
          value: void 0,
          then: function (u) {
            n.push(u);
          },
        }));
    }
    return (ho++, e.then(Ao, Ao), e);
  }
  function Ao() {
    if (--ho === 0 && xu !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var t = xu;
      ((xu = null), (Mn = 0), (Ha = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function vo(t, e) {
    var n = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((u.status = "fulfilled"), (u.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (u.status = "rejected", u.reason = s, s = 0; s < n.length; s++) (0, n[s])(void 0);
        },
      ),
      u
    );
  }
  var ed = R.S;
  R.S = function (t, e) {
    ((ji = rl()),
      typeof e == "object" && e !== null && typeof e.then == "function" && bi(t, e),
      ed !== null && ed(t, e));
  };
  var nu = H(null);
  function ka() {
    var t = nu.current;
    return t !== null ? t : ie.pooledCache;
  }
  function Mi(t, e) {
    e === null ? et(nu, nu.current) : et(nu, e.pool);
  }
  function Ls() {
    var t = ka();
    return t === null ? null : { parent: Ct._currentValue, pool: t };
  }
  var uu = Error(h(460)),
    Tc = Error(h(474)),
    Ga = Error(h(542)),
    Dc = { then: function () {} };
  function ld(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function yo(t, e, n) {
    switch (((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(Za, Za), (e = n)), e.status)) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), po(t), t);
      default:
        if (typeof e.status == "string") e.then(Za, Za);
        else {
          if (((t = ie), t !== null && 100 < t.shellSuspendCounter)) throw Error(h(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (u) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = u));
                }
              },
              function (u) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = u));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), po(t), t);
        }
        throw ((Tt = e), uu);
    }
  }
  function ju(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? ((Tt = n), uu) : n;
    }
  }
  var Tt = null;
  function Ys() {
    if (Tt === null) throw Error(h(459));
    var t = Tt;
    return ((Tt = null), t);
  }
  function po(t) {
    if (t === uu || t === Ga) throw Error(h(483));
  }
  var iu = null,
    cu = 0;
  function Xs(t) {
    var e = cu;
    return ((cu += 1), iu === null && (iu = []), yo(iu, t, e));
  }
  function Rc(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Hc(t, e) {
    throw e.$$typeof === D
      ? Error(h(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(h(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function Ti(t) {
    function e(J, _) {
      if (t) {
        var L = J.deletions;
        L === null ? ((J.deletions = [_]), (J.flags |= 16)) : L.push(_);
      }
    }
    function n(J, _) {
      if (!t) return null;
      for (; _ !== null;) (e(J, _), (_ = _.sibling));
      return null;
    }
    function u(J) {
      for (var _ = new Map(); J !== null;) (J.key !== null ? _.set(J.key, J) : _.set(J.index, J), (J = J.sibling));
      return _;
    }
    function s(J, _) {
      return ((J = Ia(J, _)), (J.index = 0), (J.sibling = null), J);
    }
    function o(J, _, L) {
      return (
        (J.index = L),
        t
          ? ((L = J.alternate),
            L !== null ? ((L = L.index), L < _ ? ((J.flags |= 67108866), _) : L) : ((J.flags |= 67108866), _))
          : ((J.flags |= 1048576), _)
      );
    }
    function p(J) {
      return (t && J.alternate === null && (J.flags |= 67108866), J);
    }
    function b(J, _, L, $) {
      return _ === null || _.tag !== 6
        ? ((_ = Js(L, J.mode, $)), (_.return = J), _)
        : ((_ = s(_, L)), (_.return = J), _);
    }
    function O(J, _, L, $) {
      var Mt = L.type;
      return Mt === W
        ? P(J, _, L.props.children, $, L.key)
        : _ !== null &&
            (_.elementType === Mt || (typeof Mt == "object" && Mt !== null && Mt.$$typeof === gt && ju(Mt) === _.type))
          ? ((_ = s(_, L.props)), Rc(_, L), (_.return = J), _)
          : ((_ = Cc(L.type, L.key, L.props, null, J.mode, $)), Rc(_, L), (_.return = J), _);
    }
    function Y(J, _, L, $) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== L.containerInfo ||
        _.stateNode.implementation !== L.implementation
        ? ((_ = Da(L, J.mode, $)), (_.return = J), _)
        : ((_ = s(_, L.children || [])), (_.return = J), _);
    }
    function P(J, _, L, $, Mt) {
      return _ === null || _.tag !== 7
        ? ((_ = Bn(L, J.mode, $, Mt)), (_.return = J), _)
        : ((_ = s(_, L)), (_.return = J), _);
    }
    function tt(J, _, L) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number" || typeof _ == "bigint")
        return ((_ = Js("" + _, J.mode, L)), (_.return = J), _);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case U:
            return ((L = Cc(_.type, _.key, _.props, null, J.mode, L)), Rc(L, _), (L.return = J), L);
          case Q:
            return ((_ = Da(_, J.mode, L)), (_.return = J), _);
          case gt:
            return ((_ = ju(_)), tt(J, _, L));
        }
        if (Ot(_) || ne(_)) return ((_ = Bn(_, J.mode, L, null)), (_.return = J), _);
        if (typeof _.then == "function") return tt(J, Xs(_), L);
        if (_.$$typeof === nt) return tt(J, Mc(J, _), L);
        Hc(J, _);
      }
      return null;
    }
    function Z(J, _, L, $) {
      var Mt = _ !== null ? _.key : null;
      if ((typeof L == "string" && L !== "") || typeof L == "number" || typeof L == "bigint")
        return Mt !== null ? null : b(J, _, "" + L, $);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case U:
            return L.key === Mt ? O(J, _, L, $) : null;
          case Q:
            return L.key === Mt ? Y(J, _, L, $) : null;
          case gt:
            return ((L = ju(L)), Z(J, _, L, $));
        }
        if (Ot(L) || ne(L)) return Mt !== null ? null : P(J, _, L, $, null);
        if (typeof L.then == "function") return Z(J, _, Xs(L), $);
        if (L.$$typeof === nt) return Z(J, _, Mc(J, L), $);
        Hc(J, L);
      }
      return null;
    }
    function V(J, _, L, $, Mt) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number" || typeof $ == "bigint")
        return ((J = J.get(L) || null), b(_, J, "" + $, Mt));
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case U:
            return ((J = J.get($.key === null ? L : $.key) || null), O(_, J, $, Mt));
          case Q:
            return ((J = J.get($.key === null ? L : $.key) || null), Y(_, J, $, Mt));
          case gt:
            return (($ = ju($)), V(J, _, L, $, Mt));
        }
        if (Ot($) || ne($)) return ((J = J.get(L) || null), P(_, J, $, Mt, null));
        if (typeof $.then == "function") return V(J, _, L, Xs($), Mt);
        if ($.$$typeof === nt) return V(J, _, L, Mc(_, $), Mt);
        Hc(_, $);
      }
      return null;
    }
    function pt(J, _, L, $) {
      for (var Mt = null, se = null, Bt = _, Kt = (_ = 0), kt = null; Bt !== null && Kt < L.length; Kt++) {
        Bt.index > Kt ? ((kt = Bt), (Bt = null)) : (kt = Bt.sibling);
        var fe = Z(J, Bt, L[Kt], $);
        if (fe === null) {
          Bt === null && (Bt = kt);
          break;
        }
        (t && Bt && fe.alternate === null && e(J, Bt),
          (_ = o(fe, _, Kt)),
          se === null ? (Mt = fe) : (se.sibling = fe),
          (se = fe),
          (Bt = kt));
      }
      if (Kt === L.length) return (n(J, Bt), Ft && En(J, Kt), Mt);
      if (Bt === null) {
        for (; Kt < L.length; Kt++)
          ((Bt = tt(J, L[Kt], $)),
            Bt !== null && ((_ = o(Bt, _, Kt)), se === null ? (Mt = Bt) : (se.sibling = Bt), (se = Bt)));
        return (Ft && En(J, Kt), Mt);
      }
      for (Bt = u(Bt); Kt < L.length; Kt++)
        ((kt = V(Bt, J, Kt, L[Kt], $)),
          kt !== null &&
            (t && kt.alternate !== null && Bt.delete(kt.key === null ? Kt : kt.key),
            (_ = o(kt, _, Kt)),
            se === null ? (Mt = kt) : (se.sibling = kt),
            (se = kt)));
      return (
        t &&
          Bt.forEach(function (Fi) {
            return e(J, Fi);
          }),
        Ft && En(J, Kt),
        Mt
      );
    }
    function Rt(J, _, L, $) {
      if (L == null) throw Error(h(151));
      for (
        var Mt = null, se = null, Bt = _, Kt = (_ = 0), kt = null, fe = L.next();
        Bt !== null && !fe.done;
        Kt++, fe = L.next()
      ) {
        Bt.index > Kt ? ((kt = Bt), (Bt = null)) : (kt = Bt.sibling);
        var Fi = Z(J, Bt, fe.value, $);
        if (Fi === null) {
          Bt === null && (Bt = kt);
          break;
        }
        (t && Bt && Fi.alternate === null && e(J, Bt),
          (_ = o(Fi, _, Kt)),
          se === null ? (Mt = Fi) : (se.sibling = Fi),
          (se = Fi),
          (Bt = kt));
      }
      if (fe.done) return (n(J, Bt), Ft && En(J, Kt), Mt);
      if (Bt === null) {
        for (; !fe.done; Kt++, fe = L.next())
          ((fe = tt(J, fe.value, $)),
            fe !== null && ((_ = o(fe, _, Kt)), se === null ? (Mt = fe) : (se.sibling = fe), (se = fe)));
        return (Ft && En(J, Kt), Mt);
      }
      for (Bt = u(Bt); !fe.done; Kt++, fe = L.next())
        ((fe = V(Bt, J, Kt, fe.value, $)),
          fe !== null &&
            (t && fe.alternate !== null && Bt.delete(fe.key === null ? Kt : fe.key),
            (_ = o(fe, _, Kt)),
            se === null ? (Mt = fe) : (se.sibling = fe),
            (se = fe)));
      return (
        t &&
          Bt.forEach(function (o0) {
            return e(J, o0);
          }),
        Ft && En(J, Kt),
        Mt
      );
    }
    function Be(J, _, L, $) {
      if (
        (typeof L == "object" && L !== null && L.type === W && L.key === null && (L = L.props.children),
        typeof L == "object" && L !== null)
      ) {
        switch (L.$$typeof) {
          case U:
            t: {
              for (var Mt = L.key; _ !== null;) {
                if (_.key === Mt) {
                  if (((Mt = L.type), Mt === W)) {
                    if (_.tag === 7) {
                      (n(J, _.sibling), ($ = s(_, L.props.children)), ($.return = J), (J = $));
                      break t;
                    }
                  } else if (
                    _.elementType === Mt ||
                    (typeof Mt == "object" && Mt !== null && Mt.$$typeof === gt && ju(Mt) === _.type)
                  ) {
                    (n(J, _.sibling), ($ = s(_, L.props)), Rc($, L), ($.return = J), (J = $));
                    break t;
                  }
                  n(J, _);
                  break;
                } else e(J, _);
                _ = _.sibling;
              }
              L.type === W
                ? (($ = Bn(L.props.children, J.mode, $, L.key)), ($.return = J), (J = $))
                : (($ = Cc(L.type, L.key, L.props, null, J.mode, $)), Rc($, L), ($.return = J), (J = $));
            }
            return p(J);
          case Q:
            t: {
              for (Mt = L.key; _ !== null;) {
                if (_.key === Mt)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === L.containerInfo &&
                    _.stateNode.implementation === L.implementation
                  ) {
                    (n(J, _.sibling), ($ = s(_, L.children || [])), ($.return = J), (J = $));
                    break t;
                  } else {
                    n(J, _);
                    break;
                  }
                else e(J, _);
                _ = _.sibling;
              }
              (($ = Da(L, J.mode, $)), ($.return = J), (J = $));
            }
            return p(J);
          case gt:
            return ((L = ju(L)), Be(J, _, L, $));
        }
        if (Ot(L)) return pt(J, _, L, $);
        if (ne(L)) {
          if (((Mt = ne(L)), typeof Mt != "function")) throw Error(h(150));
          return ((L = Mt.call(L)), Rt(J, _, L, $));
        }
        if (typeof L.then == "function") return Be(J, _, Xs(L), $);
        if (L.$$typeof === nt) return Be(J, _, Mc(J, L), $);
        Hc(J, L);
      }
      return (typeof L == "string" && L !== "") || typeof L == "number" || typeof L == "bigint"
        ? ((L = "" + L),
          _ !== null && _.tag === 6
            ? (n(J, _.sibling), ($ = s(_, L)), ($.return = J), (J = $))
            : (n(J, _), ($ = Js(L, J.mode, $)), ($.return = J), (J = $)),
          p(J))
        : n(J, _);
    }
    return function (J, _, L, $) {
      try {
        cu = 0;
        var Mt = Be(J, _, L, $);
        return ((iu = null), Mt);
      } catch (Bt) {
        if (Bt === uu || Bt === Ga) throw Bt;
        var se = Tl(29, Bt, null, J.mode);
        return ((se.lanes = $), (se.return = J), se);
      } finally {
      }
    };
  }
  var Qu = Ti(!0),
    ad = Ti(!1),
    su = !1;
  function Bo(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Eo(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function $a(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tn(t, e, n) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (Wt & 2) !== 0)) {
      var s = u.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (u.pending = e),
        (e = Ci(t)),
        zs(t, null, n),
        e
      );
    }
    return (Ec(t, u, e, n), Ci(t));
  }
  function fu(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var u = e.lanes;
      ((u &= t.pendingLanes), (n |= u), (e.lanes = n), cs(t, n));
    }
  }
  function qs(t, e) {
    var n = t.updateQueue,
      u = t.alternate;
    if (u !== null && ((u = u.updateQueue), n === u)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (o === null ? (s = o = p) : (o = o.next = p), (n = n.next));
        } while (n !== null);
        o === null ? (s = o = e) : (o = o.next = e);
      } else s = o = e;
      ((n = {
        baseState: u.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate), t === null ? (n.firstBaseUpdate = e) : (t.next = e), (n.lastBaseUpdate = e));
  }
  var Co = !1;
  function Gc() {
    if (Co) {
      var t = Ha;
      if (t !== null) throw t;
    }
  }
  function Ku(t, e, n, u) {
    Co = !1;
    var s = t.updateQueue;
    su = !1;
    var o = s.firstBaseUpdate,
      p = s.lastBaseUpdate,
      b = s.shared.pending;
    if (b !== null) {
      s.shared.pending = null;
      var O = b,
        Y = O.next;
      ((O.next = null), p === null ? (o = Y) : (p.next = Y), (p = O));
      var P = t.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (b = P.lastBaseUpdate),
        b !== p && (b === null ? (P.firstBaseUpdate = Y) : (b.next = Y), (P.lastBaseUpdate = O)));
    }
    if (o !== null) {
      var tt = s.baseState;
      ((p = 0), (P = Y = O = null), (b = o));
      do {
        var Z = b.lane & -536870913,
          V = Z !== b.lane;
        if (V ? (qt & Z) === Z : (u & Z) === Z) {
          (Z !== 0 && Z === Mn && (Co = !0),
            P !== null && (P = P.next = { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null }));
          t: {
            var pt = t,
              Rt = b;
            Z = e;
            var Be = n;
            switch (Rt.tag) {
              case 1:
                if (((pt = Rt.payload), typeof pt == "function")) {
                  tt = pt.call(Be, tt, Z);
                  break t;
                }
                tt = pt;
                break t;
              case 3:
                pt.flags = (pt.flags & -65537) | 128;
              case 0:
                if (((pt = Rt.payload), (Z = typeof pt == "function" ? pt.call(Be, tt, Z) : pt), Z == null)) break t;
                tt = g({}, tt, Z);
                break t;
              case 2:
                su = !0;
            }
          }
          ((Z = b.callback),
            Z !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = s.callbacks),
              V === null ? (s.callbacks = [Z]) : V.push(Z)));
        } else
          ((V = { lane: Z, tag: b.tag, payload: b.payload, callback: b.callback, next: null }),
            P === null ? ((Y = P = V), (O = tt)) : (P = P.next = V),
            (p |= Z));
        if (((b = b.next), b === null)) {
          if (((b = s.shared.pending), b === null)) break;
          ((V = b), (b = V.next), (V.next = null), (s.lastBaseUpdate = V), (s.shared.pending = null));
        }
      } while (!0);
      (P === null && (O = tt),
        (s.baseState = O),
        (s.firstBaseUpdate = Y),
        (s.lastBaseUpdate = P),
        o === null && (s.shared.lanes = 0),
        (ca |= p),
        (t.lanes = p),
        (t.memoizedState = tt));
    }
  }
  function tn(t, e) {
    if (typeof t != "function") throw Error(h(191, t));
    t.call(e);
  }
  function nl(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) tn(n[t], e);
  }
  var Pl = H(null),
    Rl = H(0);
  function So(t, e) {
    ((t = Qe), et(Rl, t), et(Pl, e), (Qe = t | e.baseLanes));
  }
  function go() {
    (et(Rl, Qe), et(Pl, Pl.current));
  }
  function yl() {
    ((Qe = Rl.current), X(Pl), X(Rl));
  }
  var Ve = H(null),
    va = null;
  function ou(t) {
    var e = t.alternate;
    (et(Re, Re.current & 1),
      et(Ve, t),
      va === null && (e === null || Pl.current !== null || e.memoizedState !== null) && (va = t));
  }
  function bo(t) {
    (et(Re, Re.current), et(Ve, t), va === null && (va = t));
  }
  function nd(t) {
    t.tag === 22 ? (et(Re, Re.current), et(Ve, t), va === null && (va = t)) : Dn();
  }
  function Dn() {
    (et(Re, Re.current), et(Ve, Ve.current));
  }
  function kl(t) {
    (X(Ve), va === t && (va = null), X(Re));
  }
  var Re = H(0);
  function Zs(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Ym(n) || Xm(n))) return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Jl = 0,
    Ht = null,
    me = null,
    Xe = null,
    Fs = !1,
    en = !1,
    Lu = !1,
    Vs = 0,
    Oc = 0,
    ln = null,
    Em = 0;
  function He() {
    throw Error(h(321));
  }
  function Mo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!ge(t[n], e[n])) return !1;
    return !0;
  }
  function To(t, e, n, u, s, o) {
    return (
      (Jl = o),
      (Ht = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? bd : Hi),
      (Lu = !1),
      (o = n(u, s)),
      (Lu = !1),
      en && (o = id(e, n, u, s)),
      ud(t),
      o
    );
  }
  function ud(t) {
    R.H = Jc;
    var e = me !== null && me.next !== null;
    if (((Jl = 0), (Xe = me = Ht = null), (Fs = !1), (Oc = 0), (ln = null), e)) throw Error(h(300));
    t === null || be || ((t = t.dependencies), t !== null && gi(t) && (be = !0));
  }
  function id(t, e, n, u) {
    Ht = t;
    var s = 0;
    do {
      if ((en && (ln = null), (Oc = 0), (en = !1), 25 <= s)) throw Error(h(301));
      if (((s += 1), (Xe = me = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        ((o.lastEffect = null), (o.events = null), (o.stores = null), o.memoCache != null && (o.memoCache.index = 0));
      }
      ((R.H = xc), (o = e(n, u)));
    } while (en);
    return o;
  }
  function Cm() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Uc(e) : e),
      (t = t.useState()[0]),
      (me !== null ? me.memoizedState : null) !== t && (Ht.flags |= 1024),
      e
    );
  }
  function Do() {
    var t = Vs !== 0;
    return ((Vs = 0), t);
  }
  function Ro(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Ho(t) {
    if (Fs) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Fs = !1;
    }
    ((Jl = 0), (Xe = me = Ht = null), (en = !1), (Oc = Vs = 0), (ln = null));
  }
  function Hl() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Xe === null ? (Ht.memoizedState = Xe = t) : (Xe = Xe.next = t), Xe);
  }
  function ze() {
    if (me === null) {
      var t = Ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = me.next;
    var e = Xe === null ? Ht.memoizedState : Xe.next;
    if (e !== null) ((Xe = e), (me = t));
    else {
      if (t === null) throw Ht.alternate === null ? Error(h(467)) : Error(h(310));
      ((me = t),
        (t = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        Xe === null ? (Ht.memoizedState = Xe = t) : (Xe = Xe.next = t));
    }
    return Xe;
  }
  function _c() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Uc(t) {
    var e = Oc;
    return (
      (Oc += 1),
      ln === null && (ln = []),
      (t = yo(ln, t, e)),
      (e = Ht),
      (Xe === null ? e.memoizedState : Xe.next) === null &&
        ((e = e.alternate), (R.H = e === null || e.memoizedState === null ? bd : Hi)),
      t
    );
  }
  function Is(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Uc(t);
      if (t.$$typeof === nt) return $e(t);
    }
    throw Error(h(438, String(t)));
  }
  function Go(t) {
    var e = null,
      n = Ht.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var u = Ht.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (e = {
              data: u.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = _c()), (Ht.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), u = 0; u < t; u++) n[u] = bt;
    return (e.index++, n);
  }
  function Rn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ws(t) {
    var e = ze();
    return Oo(e, me, t);
  }
  function Oo(t, e, n) {
    var u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = n;
    var s = t.baseQueue,
      o = u.pending;
    if (o !== null) {
      if (s !== null) {
        var p = s.next;
        ((s.next = o.next), (o.next = p));
      }
      ((e.baseQueue = s = o), (u.pending = null));
    }
    if (((o = t.baseState), s === null)) t.memoizedState = o;
    else {
      e = s.next;
      var b = (p = null),
        O = null,
        Y = e,
        P = !1;
      do {
        var tt = Y.lane & -536870913;
        if (tt !== Y.lane ? (qt & tt) === tt : (Jl & tt) === tt) {
          var Z = Y.revertLane;
          if (Z === 0)
            (O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Y.action,
                  hasEagerState: Y.hasEagerState,
                  eagerState: Y.eagerState,
                  next: null,
                }),
              tt === Mn && (P = !0));
          else if ((Jl & Z) === Z) {
            ((Y = Y.next), Z === Mn && (P = !0));
            continue;
          } else
            ((tt = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null,
            }),
              O === null ? ((b = O = tt), (p = o)) : (O = O.next = tt),
              (Ht.lanes |= Z),
              (ca |= Z));
          ((tt = Y.action), Lu && n(o, tt), (o = Y.hasEagerState ? Y.eagerState : n(o, tt)));
        } else
          ((Z = {
            lane: tt,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null,
          }),
            O === null ? ((b = O = Z), (p = o)) : (O = O.next = Z),
            (Ht.lanes |= tt),
            (ca |= tt));
        Y = Y.next;
      } while (Y !== null && Y !== e);
      if ((O === null ? (p = o) : (O.next = b), !ge(o, t.memoizedState) && ((be = !0), P && ((n = Ha), n !== null))))
        throw n;
      ((t.memoizedState = o), (t.baseState = p), (t.baseQueue = O), (u.lastRenderedState = o));
    }
    return (s === null && (u.lanes = 0), [t.memoizedState, u.dispatch]);
  }
  function Ws(t) {
    var e = ze(),
      n = e.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = t;
    var u = n.dispatch,
      s = n.pending,
      o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var p = (s = s.next);
      do ((o = t(o, p.action)), (p = p.next));
      while (p !== s);
      (ge(o, e.memoizedState) || (be = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, u];
  }
  function _o(t, e, n) {
    var u = Ht,
      s = ze(),
      o = Ft;
    if (o) {
      if (n === void 0) throw Error(h(407));
      n = n();
    } else n = e();
    var p = !ge((me || s).memoizedState, n);
    if (
      (p && ((s.memoizedState = n), (be = !0)),
      (s = s.queue),
      xo(No.bind(null, u, s, t), [t]),
      s.getSnapshot !== e || p || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (((u.flags |= 2048), Di(9, { destroy: void 0 }, Uo.bind(null, u, s, n, e), null), ie === null))
        throw Error(h(349));
      o || (Jl & 127) !== 0 || cd(u, e, n);
    }
    return n;
  }
  function cd(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = Ht.updateQueue),
      e === null
        ? ((e = _c()), (Ht.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Uo(t, e, n, u) {
    ((e.value = n), (e.getSnapshot = u), zo(e) && Ps(t));
  }
  function No(t, e, n) {
    return n(function () {
      zo(e) && Ps(t);
    });
  }
  function zo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ge(t, n);
    } catch {
      return !0;
    }
  }
  function Ps(t) {
    var e = tu(t, 2);
    e !== null && a(e, t, 2);
  }
  function Nc(t) {
    var e = Hl();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Lu)) {
        ha(!0);
        try {
          n();
        } finally {
          ha(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Rn, lastRenderedState: t }),
      e
    );
  }
  function sd(t, e, n, u) {
    return ((t.baseState = n), Oo(t, me, typeof u == "function" ? u : Rn));
  }
  function Sm(t, e, n, u, s) {
    if (Hn(t)) throw Error(h(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          o.listeners.push(p);
        },
      };
      (R.T !== null ? n(!0) : (o.isTransition = !1),
        u(o),
        (n = e.pending),
        n === null ? ((o.next = e.pending = o), fd(e, o)) : ((o.next = n.next), (e.pending = n.next = o)));
    }
  }
  function fd(t, e) {
    var n = e.action,
      u = e.payload,
      s = t.state;
    if (e.isTransition) {
      var o = R.T,
        p = {};
      R.T = p;
      try {
        var b = n(s, u),
          O = R.S;
        (O !== null && O(p, b), od(t, e, b));
      } catch (Y) {
        ks(t, e, Y);
      } finally {
        (o !== null && p.types !== null && (o.types = p.types), (R.T = o));
      }
    } else
      try {
        ((o = n(s, u)), od(t, e, o));
      } catch (Y) {
        ks(t, e, Y);
      }
  }
  function od(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (u) {
            Jo(t, e, u);
          },
          function (u) {
            return ks(t, e, u);
          },
        )
      : Jo(t, e, n);
  }
  function Jo(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      rd(e),
      (t.state = n),
      (e = t.pending),
      e !== null && ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), fd(t, n))));
  }
  function ks(t, e, n) {
    var u = t.pending;
    if (((t.pending = null), u !== null)) {
      u = u.next;
      do ((e.status = "rejected"), (e.reason = n), rd(e), (e = e.next));
      while (e !== u);
    }
    t.action = null;
  }
  function rd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function dd(t, e) {
    return e;
  }
  function md(t, e) {
    if (Ft) {
      var n = ie.formState;
      if (n !== null) {
        t: {
          var u = Ht;
          if (Ft) {
            if (ve) {
              e: {
                for (var s = ve, o = ke; s.nodeType !== 8;) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (((s = fn(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((o = s.data), (s = o === "F!" || o === "F" ? s : null));
              }
              if (s) {
                ((ve = fn(s.nextSibling)), (u = s.data === "F!"));
                break t;
              }
            }
            Xt(u);
          }
          u = !1;
        }
        u && (e = n[0]);
      }
    }
    return (
      (n = Hl()),
      (n.memoizedState = n.baseState = e),
      (u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dd, lastRenderedState: e }),
      (n.queue = u),
      (n = gd.bind(null, Ht, u)),
      (u.dispatch = n),
      (u = Nc(!1)),
      (o = zc.bind(null, Ht, !1, u.queue)),
      (u = Hl()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (u.queue = s),
      (n = Sm.bind(null, Ht, s, o, n)),
      (s.dispatch = n),
      (u.memoizedState = t),
      [e, n, !1]
    );
  }
  function hd(t) {
    var e = ze();
    return Ad(e, me, t);
  }
  function Ad(t, e, n) {
    if (((e = Oo(t, e, dd)[0]), (t = ws(Rn)[0]), typeof e == "object" && e !== null && typeof e.then == "function"))
      try {
        var u = Uc(e);
      } catch (p) {
        throw p === uu ? Ga : p;
      }
    else u = e;
    e = ze();
    var s = e.queue,
      o = s.dispatch;
    return (
      n !== e.memoizedState && ((Ht.flags |= 2048), Di(9, { destroy: void 0 }, gm.bind(null, s, n), null)),
      [u, o, t]
    );
  }
  function gm(t, e) {
    t.action = e;
  }
  function vd(t) {
    var e = ze(),
      n = me;
    if (n !== null) return Ad(e, n, t);
    (ze(), (e = e.memoizedState), (n = ze()));
    var u = n.queue.dispatch;
    return ((n.memoizedState = t), [e, u, !1]);
  }
  function Di(t, e, n, u) {
    return (
      (t = { tag: t, create: n, deps: u, inst: e, next: null }),
      (e = Ht.updateQueue),
      e === null && ((e = _c()), (Ht.updateQueue = e)),
      (n = e.lastEffect),
      n === null ? (e.lastEffect = t.next = t) : ((u = n.next), (n.next = t), (t.next = u), (e.lastEffect = t)),
      t
    );
  }
  function yd() {
    return ze().memoizedState;
  }
  function $s(t, e, n, u) {
    var s = Hl();
    ((Ht.flags |= t), (s.memoizedState = Di(1 | e, { destroy: void 0 }, n, u === void 0 ? null : u)));
  }
  function tf(t, e, n, u) {
    var s = ze();
    u = u === void 0 ? null : u;
    var o = s.memoizedState.inst;
    me !== null && u !== null && Mo(u, me.memoizedState.deps)
      ? (s.memoizedState = Di(e, o, n, u))
      : ((Ht.flags |= t), (s.memoizedState = Di(1 | e, o, n, u)));
  }
  function pd(t, e) {
    $s(8390656, 8, t, e);
  }
  function xo(t, e) {
    tf(2048, 8, t, e);
  }
  function Bd(t) {
    Ht.flags |= 4;
    var e = Ht.updateQueue;
    if (e === null) ((e = _c()), (Ht.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Ed(t) {
    var e = ze().memoizedState;
    return (
      Bd({ ref: e, nextImpl: t }),
      function () {
        if ((Wt & 2) !== 0) throw Error(h(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Cd(t, e) {
    return tf(4, 2, t, e);
  }
  function $l(t, e) {
    return tf(4, 4, t, e);
  }
  function jo(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function ef(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), tf(4, 4, jo.bind(null, e, t), n));
  }
  function lf() {}
  function Qo(t, e) {
    var n = ze();
    e = e === void 0 ? null : e;
    var u = n.memoizedState;
    return e !== null && Mo(e, u[1]) ? u[0] : ((n.memoizedState = [t, e]), t);
  }
  function Ko(t, e) {
    var n = ze();
    e = e === void 0 ? null : e;
    var u = n.memoizedState;
    if (e !== null && Mo(e, u[1])) return u[0];
    if (((u = t()), Lu)) {
      ha(!0);
      try {
        t();
      } finally {
        ha(!1);
      }
    }
    return ((n.memoizedState = [u, e]), u);
  }
  function Lo(t, e, n) {
    return n === void 0 || ((Jl & 1073741824) !== 0 && (qt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = l()), (Ht.lanes |= t), (ca |= t), n);
  }
  function Yo(t, e, n, u) {
    return ge(n, e)
      ? n
      : Pl.current !== null
        ? ((t = Lo(t, n, u)), ge(t, e) || (be = !0), t)
        : (Jl & 42) === 0 || ((Jl & 1073741824) !== 0 && (qt & 261930) === 0)
          ? ((be = !0), (t.memoizedState = n))
          : ((t = l()), (Ht.lanes |= t), (ca |= t), e);
  }
  function Xo(t, e, n, u, s) {
    var o = N.p;
    N.p = o !== 0 && 8 > o ? o : 8;
    var p = R.T,
      b = {};
    ((R.T = b), zc(t, !1, e, n));
    try {
      var O = s(),
        Y = R.S;
      if ((Y !== null && Y(b, O), O !== null && typeof O == "object" && typeof O.then == "function")) {
        var P = vo(O, u);
        Ri(t, e, P, Ol(t));
      } else Ri(t, e, u, Ol(t));
    } catch (tt) {
      Ri(t, e, { then: function () {}, status: "rejected", reason: tt }, Ol());
    } finally {
      ((N.p = o), p !== null && b.types !== null && (p.types = b.types), (R.T = p));
    }
  }
  function bm() {}
  function qo(t, e, n, u) {
    if (t.tag !== 5) throw Error(h(476));
    var s = Sd(t).queue;
    Xo(
      t,
      s,
      e,
      I,
      n === null
        ? bm
        : function () {
            return (Zo(t), n(u));
          },
    );
  }
  function Sd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Rn, lastRenderedState: I },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Rn, lastRenderedState: n },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Zo(t) {
    var e = Sd(t);
    (e.next === null && (e = t.alternate.memoizedState), Ri(t, e.next.queue, {}, Ol()));
  }
  function Fo() {
    return $e(ur);
  }
  function ul() {
    return ze().memoizedState;
  }
  function Vo() {
    return ze().memoizedState;
  }
  function Mm(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ol();
          t = $a(n);
          var u = Tn(e, t, n);
          (u !== null && (a(u, e, n), fu(u, e, n)), (e = { cache: mo() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Tm(t, e, n) {
    var u = Ol();
    ((n = { lane: u, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
      Hn(t) ? Yu(e, n) : ((n = Ei(t, e, n, u)), n !== null && (a(n, t, u), xl(n, e, u))));
  }
  function gd(t, e, n) {
    var u = Ol();
    Ri(t, e, n, u);
  }
  function Ri(t, e, n, u) {
    var s = { lane: u, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Hn(t)) Yu(e, s);
    else {
      var o = t.alternate;
      if (t.lanes === 0 && (o === null || o.lanes === 0) && ((o = e.lastRenderedReducer), o !== null))
        try {
          var p = e.lastRenderedState,
            b = o(p, n);
          if (((s.hasEagerState = !0), (s.eagerState = b), ge(b, p))) return (Ec(t, e, s, 0), ie === null && $n(), !1);
        } catch {
        } finally {
        }
      if (((n = Ei(t, e, s, u)), n !== null)) return (a(n, t, u), xl(n, e, u), !0);
    }
    return !1;
  }
  function zc(t, e, n, u) {
    if (
      ((u = { lane: 2, revertLane: Gm(), gesture: null, action: u, hasEagerState: !1, eagerState: null, next: null }),
      Hn(t))
    ) {
      if (e) throw Error(h(479));
    } else ((e = Ei(t, n, u, 2)), e !== null && a(e, t, 2));
  }
  function Hn(t) {
    var e = t.alternate;
    return t === Ht || (e !== null && e === Ht);
  }
  function Yu(t, e) {
    en = Fs = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function xl(t, e, n) {
    if ((n & 4194048) !== 0) {
      var u = e.lanes;
      ((u &= t.pendingLanes), (n |= u), (e.lanes = n), cs(t, n));
    }
  }
  var Jc = {
    readContext: $e,
    use: Is,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useInsertionEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useSyncExternalStore: He,
    useId: He,
    useHostTransitionStatus: He,
    useFormState: He,
    useActionState: He,
    useOptimistic: He,
    useMemoCache: He,
    useCacheRefresh: He,
  };
  Jc.useEffectEvent = He;
  var bd = {
      readContext: $e,
      use: Is,
      useCallback: function (t, e) {
        return ((Hl().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: $e,
      useEffect: pd,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), $s(4194308, 4, jo.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return $s(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        $s(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = Hl();
        e = e === void 0 ? null : e;
        var u = t();
        if (Lu) {
          ha(!0);
          try {
            t();
          } finally {
            ha(!1);
          }
        }
        return ((n.memoizedState = [u, e]), u);
      },
      useReducer: function (t, e, n) {
        var u = Hl();
        if (n !== void 0) {
          var s = n(e);
          if (Lu) {
            ha(!0);
            try {
              n(e);
            } finally {
              ha(!1);
            }
          }
        } else s = e;
        return (
          (u.memoizedState = u.baseState = s),
          (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: s }),
          (u.queue = t),
          (t = t.dispatch = Tm.bind(null, Ht, t)),
          [u.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Hl();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Nc(t);
        var e = t.queue,
          n = gd.bind(null, Ht, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: lf,
      useDeferredValue: function (t, e) {
        var n = Hl();
        return Lo(n, t, e);
      },
      useTransition: function () {
        var t = Nc(!1);
        return ((t = Xo.bind(null, Ht, t.queue, !0, !1)), (Hl().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var u = Ht,
          s = Hl();
        if (Ft) {
          if (n === void 0) throw Error(h(407));
          n = n();
        } else {
          if (((n = e()), ie === null)) throw Error(h(349));
          (qt & 127) !== 0 || cd(u, e, n);
        }
        s.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (s.queue = o),
          pd(No.bind(null, u, o, t), [t]),
          (u.flags |= 2048),
          Di(9, { destroy: void 0 }, Uo.bind(null, u, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = Hl(),
          e = ie.identifierPrefix;
        if (Ft) {
          var n = Pa,
            u = Wa;
          ((n = (u & ~(1 << (32 - bl(u) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = Vs++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Em++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Fo,
      useFormState: md,
      useActionState: md,
      useOptimistic: function (t) {
        var e = Hl();
        e.memoizedState = e.baseState = t;
        var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((e.queue = n), (e = zc.bind(null, Ht, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: Go,
      useCacheRefresh: function () {
        return (Hl().memoizedState = Mm.bind(null, Ht));
      },
      useEffectEvent: function (t) {
        var e = Hl(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Wt & 2) !== 0) throw Error(h(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Hi = {
      readContext: $e,
      use: Is,
      useCallback: Qo,
      useContext: $e,
      useEffect: xo,
      useImperativeHandle: ef,
      useInsertionEffect: Cd,
      useLayoutEffect: $l,
      useMemo: Ko,
      useReducer: ws,
      useRef: yd,
      useState: function () {
        return ws(Rn);
      },
      useDebugValue: lf,
      useDeferredValue: function (t, e) {
        var n = ze();
        return Yo(n, me.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ws(Rn)[0],
          e = ze().memoizedState;
        return [typeof t == "boolean" ? t : Uc(t), e];
      },
      useSyncExternalStore: _o,
      useId: ul,
      useHostTransitionStatus: Fo,
      useFormState: hd,
      useActionState: hd,
      useOptimistic: function (t, e) {
        var n = ze();
        return sd(n, me, t, e);
      },
      useMemoCache: Go,
      useCacheRefresh: Vo,
    };
  Hi.useEffectEvent = Ed;
  var xc = {
    readContext: $e,
    use: Is,
    useCallback: Qo,
    useContext: $e,
    useEffect: xo,
    useImperativeHandle: ef,
    useInsertionEffect: Cd,
    useLayoutEffect: $l,
    useMemo: Ko,
    useReducer: Ws,
    useRef: yd,
    useState: function () {
      return Ws(Rn);
    },
    useDebugValue: lf,
    useDeferredValue: function (t, e) {
      var n = ze();
      return me === null ? Lo(n, t, e) : Yo(n, me.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ws(Rn)[0],
        e = ze().memoizedState;
      return [typeof t == "boolean" ? t : Uc(t), e];
    },
    useSyncExternalStore: _o,
    useId: ul,
    useHostTransitionStatus: Fo,
    useFormState: vd,
    useActionState: vd,
    useOptimistic: function (t, e) {
      var n = ze();
      return me !== null ? sd(n, me, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Go,
    useCacheRefresh: Vo,
  };
  xc.useEffectEvent = Ed;
  function Gi(t, e, n, u) {
    ((e = t.memoizedState),
      (n = n(u, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var jc = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var u = Ol(),
        s = $a(u);
      ((s.payload = e), n != null && (s.callback = n), (e = Tn(t, s, u)), e !== null && (a(e, t, u), fu(e, t, u)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var u = Ol(),
        s = $a(u);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Tn(t, s, u)),
        e !== null && (a(e, t, u), fu(e, t, u)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ol(),
        u = $a(n);
      ((u.tag = 2), e != null && (u.callback = e), (e = Tn(t, u, n)), e !== null && (a(e, t, n), fu(e, t, n)));
    },
  };
  function Md(t, e, n, u, s, o, p) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(u, o, p)
        : e.prototype && e.prototype.isPureReactComponent
          ? !hi(n, u) || !hi(s, o)
          : !0
    );
  }
  function Td(t, e, n, u) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, u),
      typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, u),
      e.state !== t && jc.enqueueReplaceState(e, e.state, null));
  }
  function il(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var u in e) u !== "ref" && (n[u] = e[u]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function Io(t) {
    kn(t);
  }
  function Dd(t) {
    console.error(t);
  }
  function af(t) {
    kn(t);
  }
  function nf(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Rd(t, e, n) {
    try {
      var u = t.onCaughtError;
      u(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function wo(t, e, n) {
    return (
      (n = $a(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        nf(t, e);
      }),
      n
    );
  }
  function Oi(t) {
    return ((t = $a(t)), (t.tag = 3), t);
  }
  function jl(t, e, n, u) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = u.value;
      ((t.payload = function () {
        return s(o);
      }),
        (t.callback = function () {
          Rd(e, n, u);
        }));
    }
    var p = n.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (t.callback = function () {
        (Rd(e, n, u), typeof s != "function" && (sn === null ? (sn = new Set([this])) : sn.add(this)));
        var b = u.stack;
        this.componentDidCatch(u.value, { componentStack: b !== null ? b : "" });
      });
  }
  function ta(t, e, n, u, s) {
    if (((n.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
      if (((e = n.alternate), e !== null && au(e, n, s, !0), (n = Ve.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              va === null ? Ut() : n.alternate === null && ce === 0 && (ce = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              u === Dc
                ? (n.flags |= 16384)
                : ((e = n.updateQueue), e === null ? (n.updateQueue = new Set([u])) : e.add(u), Dm(t, u, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              u === Dc
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([u]) }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue), n === null ? (e.retryQueue = new Set([u])) : n.add(u)),
                  Dm(t, u, s)),
              !1
            );
        }
        throw Error(h(435, n.tag));
      }
      return (Dm(t, u, s), Ut(), !1);
    }
    if (Ft)
      return (
        (e = Ve.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            u !== js && ((t = Error(h(422), { cause: u })), bc(Nl(t, n))))
          : (u !== js && ((e = Error(h(423), { cause: u })), bc(Nl(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (u = Nl(u, n)),
            (s = wo(t.stateNode, u, s)),
            qs(t, s),
            ce !== 4 && (ce = 2)),
        !1
      );
    var o = Error(h(520), { cause: u });
    if (((o = Nl(o, n)), za === null ? (za = [o]) : za.push(o), ce !== 4 && (ce = 2), e === null)) return !0;
    ((u = Nl(u, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return ((n.flags |= 65536), (t = s & -s), (n.lanes |= t), (t = wo(n.stateNode, u, t)), qs(n, t), !1);
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null && typeof o.componentDidCatch == "function" && (sn === null || !sn.has(o)))))
          )
            return ((n.flags |= 65536), (s &= -s), (n.lanes |= s), (s = Oi(s)), jl(s, t, n, u), qs(n, s), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var uf = Error(h(461)),
    be = !1;
  function Ge(t, e, n, u) {
    e.child = t === null ? ad(e, null, n, u) : Qu(e, t.child, n, u);
  }
  function Qc(t, e, n, u, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in u) {
      var p = {};
      for (var b in u) b !== "ref" && (p[b] = u[b]);
    } else p = u;
    return (
      Ju(e),
      (u = To(t, e, n, p, o, s)),
      (b = Do()),
      t !== null && !be ? (Ro(t, e, s), Ua(t, e, s)) : (Ft && b && xs(e), (e.flags |= 1), Ge(t, e, u, s), e.child)
    );
  }
  function Kc(t, e, n, u, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" && !Dl(o) && o.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = o), ea(t, e, o, u, s))
        : ((t = Cc(n.type, null, u, e, e.mode, s)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((o = t.child), !du(t, s))) {
      var p = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : hi), n(p, u) && t.ref === e.ref)) return Ua(t, e, s);
    }
    return ((e.flags |= 1), (t = Ia(o, u)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function ea(t, e, n, u, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (hi(o, u) && t.ref === e.ref)
        if (((be = !1), (e.pendingProps = u = o), du(t, s))) (t.flags & 131072) !== 0 && (be = !0);
        else return ((e.lanes = t.lanes), Ua(t, e, s));
    }
    return _i(t, e, n, u, s);
  }
  function la(t, e, n, u) {
    var s = u.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      u.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (u = e.child = t.child, s = 0; u !== null;) ((s = s | u.lanes | u.childLanes), (u = u.sibling));
          u = s & ~o;
        } else ((u = 0), (e.child = null));
        return an(t, e, o, n, u);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Mi(e, o !== null ? o.cachePool : null),
          o !== null ? So(e, o) : go(),
          nd(e));
      else return ((u = e.lanes = 536870912), an(t, e, o !== null ? o.baseLanes | n : n, n, u));
    } else
      o !== null
        ? (Mi(e, o.cachePool), So(e, o), Dn(), (e.memoizedState = null))
        : (t !== null && Mi(e, null), go(), Dn());
    return (Ge(t, e, s, n), e.child);
  }
  function Oa(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      e.sibling
    );
  }
  function an(t, e, n, u, s) {
    var o = ka();
    return (
      (o = o === null ? null : { parent: Ct._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: n, cachePool: o }),
      t !== null && Mi(e, null),
      go(),
      nd(e),
      t !== null && au(t, e, u, !0),
      (e.childLanes = s),
      null
    );
  }
  function ya(t, e) {
    return (
      (e = Ui({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function tl(t, e, n) {
    return (Qu(e, t.child, null, n), (t = ya(e, e.pendingProps)), (t.flags |= 2), kl(e), (e.memoizedState = null), t);
  }
  function Lc(t, e, n) {
    var u = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Ft) {
        if (u.mode === "hidden") return ((t = ya(e, u)), (e.lanes = 536870912), Oa(null, t));
        if (
          (bo(e),
          (t = ve)
            ? ((t = EA(t, ke)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: wa !== null ? { id: Wa, overflow: Pa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Pr(t)),
                (n.return = e),
                (e.child = n),
                (Pe = e),
                (ve = null)))
            : (t = null),
          t === null)
        )
          throw Xt(e);
        return ((e.lanes = 536870912), null);
      }
      return ya(e, u);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var p = o.dehydrated;
      if ((bo(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = tl(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(h(558));
      else if ((be || au(t, e, n, !1), (s = (n & t.childLanes) !== 0), be || s)) {
        if (((u = ie), u !== null && ((p = ss(u, n)), p !== 0 && p !== o.retryLane)))
          throw ((o.retryLane = p), tu(t, p), a(u, t, p), uf);
        (Ut(), (e = tl(t, e, n)));
      } else
        ((t = o.treeContext),
          (ve = fn(p.nextSibling)),
          (Pe = e),
          (Ft = !0),
          (Cn = null),
          (ke = !1),
          t !== null && gc(e, t),
          (e = ya(e, u)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Ia(t.child, { mode: u.mode, children: u.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function _a(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(h(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function _i(t, e, n, u, s) {
    return (
      Ju(e),
      (n = To(t, e, n, u, void 0, s)),
      (u = Do()),
      t !== null && !be ? (Ro(t, e, s), Ua(t, e, s)) : (Ft && u && xs(e), (e.flags |= 1), Ge(t, e, n, s), e.child)
    );
  }
  function pl(t, e, n, u, s, o) {
    return (
      Ju(e),
      (e.updateQueue = null),
      (n = id(e, u, n, s)),
      ud(t),
      (u = Do()),
      t !== null && !be ? (Ro(t, e, o), Ua(t, e, o)) : (Ft && u && xs(e), (e.flags |= 1), Ge(t, e, n, o), e.child)
    );
  }
  function cl(t, e, n, u, s) {
    if ((Ju(e), e.stateNode === null)) {
      var o = eu,
        p = n.contextType;
      (typeof p == "object" && p !== null && (o = $e(p)),
        (o = new n(u, o)),
        (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = jc),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = u),
        (o.state = e.memoizedState),
        (o.refs = {}),
        Bo(e),
        (p = n.contextType),
        (o.context = typeof p == "object" && p !== null ? $e(p) : eu),
        (o.state = e.memoizedState),
        (p = n.getDerivedStateFromProps),
        typeof p == "function" && (Gi(e, n, p, u), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
          ((p = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
          p !== o.state && jc.enqueueReplaceState(o, o.state, null),
          Ku(e, u, o, s),
          Gc(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (u = !0));
    } else if (t === null) {
      o = e.stateNode;
      var b = e.memoizedProps,
        O = il(n, b);
      o.props = O;
      var Y = o.context,
        P = n.contextType;
      ((p = eu), typeof P == "object" && P !== null && (p = $e(P)));
      var tt = n.getDerivedStateFromProps;
      ((P = typeof tt == "function" || typeof o.getSnapshotBeforeUpdate == "function"),
        (b = e.pendingProps !== b),
        P ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((b || Y !== p) && Td(e, o, u, p)),
        (su = !1));
      var Z = e.memoizedState;
      ((o.state = Z),
        Ku(e, u, o, s),
        Gc(),
        (Y = e.memoizedState),
        b || Z !== Y || su
          ? (typeof tt == "function" && (Gi(e, n, tt, u), (Y = e.memoizedState)),
            (O = su || Md(e, n, O, u, Z, Y, p))
              ? (P ||
                  (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                (e.memoizedProps = u),
                (e.memoizedState = Y)),
            (o.props = u),
            (o.state = Y),
            (o.context = p),
            (u = O))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), (u = !1)));
    } else {
      ((o = e.stateNode),
        Eo(t, e),
        (p = e.memoizedProps),
        (P = il(n, p)),
        (o.props = P),
        (tt = e.pendingProps),
        (Z = o.context),
        (Y = n.contextType),
        (O = eu),
        typeof Y == "object" && Y !== null && (O = $e(Y)),
        (b = n.getDerivedStateFromProps),
        (Y = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((p !== tt || Z !== O) && Td(e, o, u, O)),
        (su = !1),
        (Z = e.memoizedState),
        (o.state = Z),
        Ku(e, u, o, s),
        Gc());
      var V = e.memoizedState;
      p !== tt || Z !== V || su || (t !== null && t.dependencies !== null && gi(t.dependencies))
        ? (typeof b == "function" && (Gi(e, n, b, u), (V = e.memoizedState)),
          (P = su || Md(e, n, P, u, Z, V, O) || (t !== null && t.dependencies !== null && gi(t.dependencies)))
            ? (Y ||
                (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(u, V, O),
                typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(u, V, O)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (p === t.memoizedProps && Z === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (p === t.memoizedProps && Z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = u),
              (e.memoizedState = V)),
          (o.props = u),
          (o.state = V),
          (o.context = O),
          (u = P))
        : (typeof o.componentDidUpdate != "function" ||
            (p === t.memoizedProps && Z === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (p === t.memoizedProps && Z === t.memoizedState) ||
            (e.flags |= 1024),
          (u = !1));
    }
    return (
      (o = u),
      _a(t, e),
      (u = (e.flags & 128) !== 0),
      o || u
        ? ((o = e.stateNode),
          (n = u && typeof n.getDerivedStateFromError != "function" ? null : o.render()),
          (e.flags |= 1),
          t !== null && u ? ((e.child = Qu(e, t.child, null, s)), (e.child = Qu(e, null, n, s))) : Ge(t, e, n, s),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = Ua(t, e, s)),
      t
    );
  }
  function $t(t, e, n, u) {
    return (zu(), (e.flags |= 256), Ge(t, e, n, u), e.child);
  }
  var aa = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function pa(t) {
    return { baseLanes: t, cachePool: Ls() };
  }
  function Yc(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Pt), t);
  }
  function na(t, e, n) {
    var u = e.pendingProps,
      s = !1,
      o = (e.flags & 128) !== 0,
      p;
    if (
      ((p = o) || (p = t !== null && t.memoizedState === null ? !1 : (Re.current & 2) !== 0),
      p && ((s = !0), (e.flags &= -129)),
      (p = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ft) {
        if (
          (s ? ou(e) : Dn(),
          (t = ve)
            ? ((t = EA(t, ke)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: wa !== null ? { id: Wa, overflow: Pa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Pr(t)),
                (n.return = e),
                (e.child = n),
                (Pe = e),
                (ve = null)))
            : (t = null),
          t === null)
        )
          throw Xt(e);
        return (Xm(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var b = u.children;
      return (
        (u = u.fallback),
        s
          ? (Dn(),
            (s = e.mode),
            (b = Ui({ mode: "hidden", children: b }, s)),
            (u = Bn(u, s, n, null)),
            (b.return = e),
            (u.return = e),
            (b.sibling = u),
            (e.child = b),
            (u = e.child),
            (u.memoizedState = pa(n)),
            (u.childLanes = Yc(t, p, n)),
            (e.memoizedState = aa),
            Oa(null, u))
          : (ou(e), ru(e, b))
      );
    }
    var O = t.memoizedState;
    if (O !== null && ((b = O.dehydrated), b !== null)) {
      if (o)
        e.flags & 256
          ? (ou(e), (e.flags &= -257), (e = Ni(t, e, n)))
          : e.memoizedState !== null
            ? (Dn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Dn(),
              (b = u.fallback),
              (s = e.mode),
              (u = Ui({ mode: "visible", children: u.children }, s)),
              (b = Bn(b, s, n, null)),
              (b.flags |= 2),
              (u.return = e),
              (b.return = e),
              (u.sibling = b),
              (e.child = u),
              Qu(e, t.child, null, n),
              (u = e.child),
              (u.memoizedState = pa(n)),
              (u.childLanes = Yc(t, p, n)),
              (e.memoizedState = aa),
              (e = Oa(null, u)));
      else if ((ou(e), Xm(b))) {
        if (((p = b.nextSibling && b.nextSibling.dataset), p)) var Y = p.dgst;
        ((p = Y),
          (u = Error(h(419))),
          (u.stack = ""),
          (u.digest = p),
          bc({ value: u, source: null, stack: null }),
          (e = Ni(t, e, n)));
      } else if ((be || au(t, e, n, !1), (p = (n & t.childLanes) !== 0), be || p)) {
        if (((p = ie), p !== null && ((u = ss(p, n)), u !== 0 && u !== O.retryLane)))
          throw ((O.retryLane = u), tu(t, u), a(p, t, u), uf);
        (Ym(b) || Ut(), (e = Ni(t, e, n)));
      } else
        Ym(b)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = O.treeContext),
            (ve = fn(b.nextSibling)),
            (Pe = e),
            (Ft = !0),
            (Cn = null),
            (ke = !1),
            t !== null && gc(e, t),
            (e = ru(e, u.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Dn(),
        (b = u.fallback),
        (s = e.mode),
        (O = t.child),
        (Y = O.sibling),
        (u = Ia(O, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = O.subtreeFlags & 65011712),
        Y !== null ? (b = Ia(Y, b)) : ((b = Bn(b, s, n, null)), (b.flags |= 2)),
        (b.return = e),
        (u.return = e),
        (u.sibling = b),
        (e.child = u),
        Oa(null, u),
        (u = e.child),
        (b = t.child.memoizedState),
        b === null
          ? (b = pa(n))
          : ((s = b.cachePool),
            s !== null ? ((O = Ct._currentValue), (s = s.parent !== O ? { parent: O, pool: O } : s)) : (s = Ls()),
            (b = { baseLanes: b.baseLanes | n, cachePool: s })),
        (u.memoizedState = b),
        (u.childLanes = Yc(t, p, n)),
        (e.memoizedState = aa),
        Oa(t.child, u))
      : (ou(e),
        (n = t.child),
        (t = n.sibling),
        (n = Ia(n, { mode: "visible", children: u.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null && ((p = e.deletions), p === null ? ((e.deletions = [t]), (e.flags |= 16)) : p.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function ru(t, e) {
    return ((e = Ui({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function Ui(t, e) {
    return ((t = Tl(22, t, null, e)), (t.lanes = 0), t);
  }
  function Ni(t, e, n) {
    return (Qu(e, t.child, null, n), (t = ru(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t);
  }
  function Xu(t, e, n) {
    t.lanes |= e;
    var u = t.alternate;
    (u !== null && (u.lanes |= e), bn(t.return, e, n));
  }
  function Xc(t, e, n, u, s, o) {
    var p = t.memoizedState;
    p === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: n,
          tailMode: s,
          treeForkCount: o,
        })
      : ((p.isBackwards = e),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = u),
        (p.tail = n),
        (p.tailMode = s),
        (p.treeForkCount = o));
  }
  function qc(t, e, n) {
    var u = e.pendingProps,
      s = u.revealOrder,
      o = u.tail;
    u = u.children;
    var p = Re.current,
      b = (p & 2) !== 0;
    if (
      (b ? ((p = (p & 1) | 2), (e.flags |= 128)) : (p &= 1),
      et(Re, p),
      Ge(t, e, u, n),
      (u = Ft ? Si : 0),
      !b && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && Xu(t, n, e);
        else if (t.tag === 19) Xu(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null;)
          ((t = n.alternate), t !== null && Zs(t) === null && (s = n), (n = n.sibling));
        ((n = s),
          n === null ? ((s = e.child), (e.child = null)) : ((s = n.sibling), (n.sibling = null)),
          Xc(e, !1, s, n, o, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null;) {
          if (((t = s.alternate), t !== null && Zs(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Xc(e, !0, n, null, o, u);
        break;
      case "together":
        Xc(e, !1, null, null, void 0, u);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ua(t, e, n) {
    if ((t !== null && (e.dependencies = t.dependencies), (ca |= e.lanes), (n & e.childLanes) === 0))
      if (t !== null) {
        if ((au(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(h(153));
    if (e.child !== null) {
      for (t = e.child, n = Ia(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;)
        ((t = t.sibling), (n = n.sibling = Ia(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function du(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && gi(t)));
  }
  function Zc(t, e, n) {
    switch (e.tag) {
      case 3:
        (de(e, e.stateNode.containerInfo), gn(e, Ct, t.memoizedState.cache), zu());
        break;
      case 27:
      case 5:
        Ke(e);
        break;
      case 4:
        de(e, e.stateNode.containerInfo);
        break;
      case 10:
        gn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), bo(e), null);
        break;
      case 13:
        var u = e.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ou(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? na(t, e, n)
              : (ou(e), (t = Ua(t, e, n)), t !== null ? t.sibling : null);
        ou(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (((u = (n & e.childLanes) !== 0), u || (au(t, e, n, !1), (u = (n & e.childLanes) !== 0)), s)) {
          if (u) return qc(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          et(Re, Re.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), la(t, e, n, e.pendingProps));
      case 24:
        gn(e, Ct, t.memoizedState.cache);
    }
    return Ua(t, e, n);
  }
  function cf(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) be = !0;
      else {
        if (!du(t, n) && (e.flags & 128) === 0) return ((be = !1), Zc(t, e, n));
        be = (t.flags & 131072) !== 0;
      }
    else ((be = !1), Ft && (e.flags & 1048576) !== 0 && co(e, Si, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var u = e.pendingProps;
          if (((t = ju(e.elementType)), (e.type = t), typeof t == "function"))
            Dl(t)
              ? ((u = il(t, u)), (e.tag = 1), (e = cl(null, e, t, u, n)))
              : ((e.tag = 0), (e = _i(null, e, t, u, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === at) {
                ((e.tag = 11), (e = Qc(null, e, t, u, n)));
                break t;
              } else if (s === ot) {
                ((e.tag = 14), (e = Kc(null, e, t, u, n)));
                break t;
              }
            }
            throw ((e = Jt(t) || t), Error(h(306, e, "")));
          }
        }
        return e;
      case 0:
        return _i(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((u = e.type), (s = il(u, e.pendingProps)), cl(t, e, u, s, n));
      case 3:
        t: {
          if ((de(e, e.stateNode.containerInfo), t === null)) throw Error(h(387));
          u = e.pendingProps;
          var o = e.memoizedState;
          ((s = o.element), Eo(t, e), Ku(e, u, null, n));
          var p = e.memoizedState;
          if (((u = p.cache), gn(e, Ct, u), u !== o.cache && Ks(e, [Ct], n, !0), Gc(), (u = p.element), o.isDehydrated))
            if (
              ((o = { element: u, isDehydrated: !1, cache: p.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = $t(t, e, u, n);
              break t;
            } else if (u !== s) {
              ((s = Nl(Error(h(424)), e)), bc(s), (e = $t(t, e, u, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (ve = fn(t.firstChild), Pe = e, Ft = !0, Cn = null, ke = !0, n = ad(e, null, u, n), e.child = n; n;)
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((zu(), u === s)) {
              e = Ua(t, e, n);
              break t;
            }
            Ge(t, e, u, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          _a(t, e),
          t === null
            ? (n = TA(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Ft ||
                ((n = e.type),
                (t = e.pendingProps),
                (u = Jd(_t.current).createElement(n)),
                (u[Yt] = e),
                (u[dl] = t),
                _l(u, n, t),
                Ye(u),
                (e.stateNode = u))
            : (e.memoizedState = TA(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Ke(e),
          t === null &&
            Ft &&
            ((u = e.stateNode = gA(e.type, e.pendingProps, _t.current)),
            (Pe = e),
            (ke = !0),
            (s = ve),
            Li(e.type) ? ((qm = s), (ve = fn(u.firstChild))) : (ve = s)),
          Ge(t, e, e.pendingProps.children, n),
          _a(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ft &&
            ((s = u = ve) &&
              ((u = Ky(u, e.type, e.pendingProps, ke)),
              u !== null ? ((e.stateNode = u), (Pe = e), (ve = fn(u.firstChild)), (ke = !1), (s = !0)) : (s = !1)),
            s || Xt(e)),
          Ke(e),
          (s = e.type),
          (o = e.pendingProps),
          (p = t !== null ? t.memoizedProps : null),
          (u = o.children),
          Qm(s, o) ? (u = null) : p !== null && Qm(s, p) && (e.flags |= 32),
          e.memoizedState !== null && ((s = To(t, e, Cm, null, null, n)), (ur._currentValue = s)),
          _a(t, e),
          Ge(t, e, u, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ft &&
            ((t = n = ve) &&
              ((n = Ly(n, e.pendingProps, ke)),
              n !== null ? ((e.stateNode = n), (Pe = e), (ve = null), (t = !0)) : (t = !1)),
            t || Xt(e)),
          null
        );
      case 13:
        return na(t, e, n);
      case 4:
        return (
          de(e, e.stateNode.containerInfo),
          (u = e.pendingProps),
          t === null ? (e.child = Qu(e, null, u, n)) : Ge(t, e, u, n),
          e.child
        );
      case 11:
        return Qc(t, e, e.type, e.pendingProps, n);
      case 7:
        return (Ge(t, e, e.pendingProps, n), e.child);
      case 8:
        return (Ge(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (Ge(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return ((u = e.pendingProps), gn(e, e.type, u.value), Ge(t, e, u.children, n), e.child);
      case 9:
        return (
          (s = e.type._context),
          (u = e.pendingProps.children),
          Ju(e),
          (s = $e(s)),
          (u = u(s)),
          (e.flags |= 1),
          Ge(t, e, u, n),
          e.child
        );
      case 14:
        return Kc(t, e, e.type, e.pendingProps, n);
      case 15:
        return ea(t, e, e.type, e.pendingProps, n);
      case 19:
        return qc(t, e, n);
      case 31:
        return Lc(t, e, n);
      case 22:
        return la(t, e, n, e.pendingProps);
      case 24:
        return (
          Ju(e),
          (u = $e(Ct)),
          t === null
            ? ((s = ka()),
              s === null &&
                ((s = ie),
                (o = mo()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (e.memoizedState = { parent: u, cache: s }),
              Bo(e),
              gn(e, Ct, s))
            : ((t.lanes & n) !== 0 && (Eo(t, e), Ku(e, null, null, n), Gc()),
              (s = t.memoizedState),
              (o = e.memoizedState),
              s.parent !== u
                ? ((s = { parent: u, cache: u }),
                  (e.memoizedState = s),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
                  gn(e, Ct, u))
                : ((u = o.cache), gn(e, Ct, u), u !== s.cache && Ks(e, [Ct], n, !0))),
          Ge(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(h(156, e.tag));
  }
  function Ql(t) {
    t.flags |= 4;
  }
  function mu(t, e, n, u, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ft()) t.flags |= 8192;
        else throw ((Tt = Dc), Tc);
    } else t.flags &= -16777217;
  }
  function Gn(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !OA(e)))
      if (ft()) t.flags |= 8192;
      else throw ((Tt = Dc), Tc);
  }
  function zi(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? ni() : 536870912), (t.lanes |= e), (sa |= e)));
  }
  function Fc(t, e) {
    if (!Ft)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null;) (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var u = null; n !== null;) (n.alternate !== null && (u = n), (n = n.sibling));
          u === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (u.sibling = null);
      }
  }
  function oe(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      u = 0;
    if (e)
      for (var s = t.child; s !== null;)
        ((n |= s.lanes | s.childLanes),
          (u |= s.subtreeFlags & 65011712),
          (u |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null;)
        ((n |= s.lanes | s.childLanes), (u |= s.subtreeFlags), (u |= s.flags), (s.return = t), (s = s.sibling));
    return ((t.subtreeFlags |= u), (t.childLanes = n), e);
  }
  function Wo(t, e, n) {
    var u = e.pendingProps;
    switch ((lu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (oe(e), null);
      case 1:
        return (oe(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (u = null),
          t !== null && (u = t.memoizedState.cache),
          e.memoizedState.cache !== u && (e.flags |= 2048),
          Aa(Ct),
          Ee(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Nu(e)
              ? Ql(e)
              : t === null || (t.memoizedState.isDehydrated && (e.flags & 256) === 0) || ((e.flags |= 1024), so())),
          oe(e),
          null
        );
      case 26:
        var s = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (Ql(e), o !== null ? (oe(e), Gn(e, o)) : (oe(e), mu(e, s, null, u, n)))
            : o
              ? o !== t.memoizedState
                ? (Ql(e), oe(e), Gn(e, o))
                : (oe(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== u && Ql(e), oe(e), mu(e, s, t, u, n)),
          null
        );
      case 27:
        if ((wt(e), (n = _t.current), (s = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== u && Ql(e);
        else {
          if (!u) {
            if (e.stateNode === null) throw Error(h(166));
            return (oe(e), null);
          }
          ((t = lt.current), Nu(e) ? Qs(e) : ((t = gA(s, u, n)), (e.stateNode = t), Ql(e)));
        }
        return (oe(e), null);
      case 5:
        if ((wt(e), (s = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== u && Ql(e);
        else {
          if (!u) {
            if (e.stateNode === null) throw Error(h(166));
            return (oe(e), null);
          }
          if (((o = lt.current), Nu(e))) Qs(e);
          else {
            var p = Jd(_t.current);
            switch (o) {
              case 1:
                o = p.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                o = p.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    o = p.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    o = p.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    ((o = p.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof u.is == "string" ? p.createElement("select", { is: u.is }) : p.createElement("select")),
                      u.multiple ? (o.multiple = !0) : u.size && (o.size = u.size));
                    break;
                  default:
                    o = typeof u.is == "string" ? p.createElement(s, { is: u.is }) : p.createElement(s);
                }
            }
            ((o[Yt] = e), (o[dl] = u));
            t: for (p = e.child; p !== null;) {
              if (p.tag === 5 || p.tag === 6) o.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                ((p.child.return = p), (p = p.child));
                continue;
              }
              if (p === e) break t;
              for (; p.sibling === null;) {
                if (p.return === null || p.return === e) break t;
                p = p.return;
              }
              ((p.sibling.return = p.return), (p = p.sibling));
            }
            e.stateNode = o;
            t: switch ((_l(o, s, u), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break t;
              case "img":
                u = !0;
                break t;
              default:
                u = !1;
            }
            u && Ql(e);
          }
        }
        return (oe(e), mu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== u && Ql(e);
        else {
          if (typeof u != "string" && e.stateNode === null) throw Error(h(166));
          if (((t = _t.current), Nu(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (u = null), (s = Pe), s !== null))
              switch (s.tag) {
                case 27:
                case 5:
                  u = s.memoizedProps;
              }
            ((t[Yt] = e),
              (t = !!(t.nodeValue === n || (u !== null && u.suppressHydrationWarning === !0) || dA(t.nodeValue, n))),
              t || Xt(e, !0));
          } else ((t = Jd(t).createTextNode(u)), (t[Yt] = e), (e.stateNode = t));
        }
        return (oe(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((u = Nu(e)), n !== null)) {
            if (t === null) {
              if (!u) throw Error(h(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(h(557));
              t[Yt] = e;
            } else (zu(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (oe(e), (t = !1));
          } else
            ((n = so()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), (t = !0));
          if (!t) return e.flags & 256 ? (kl(e), e) : (kl(e), null);
          if ((e.flags & 128) !== 0) throw Error(h(558));
        }
        return (oe(e), null);
      case 13:
        if (((u = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((s = Nu(e)), u !== null && u.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(h(318));
              if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(h(317));
              s[Yt] = e;
            } else (zu(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (oe(e), (s = !1));
          } else
            ((s = so()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), (s = !0));
          if (!s) return e.flags & 256 ? (kl(e), e) : (kl(e), null);
        }
        return (
          kl(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = u !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((u = e.child),
                (s = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (s = u.alternate.memoizedState.cachePool.pool),
                (o = null),
                u.memoizedState !== null && u.memoizedState.cachePool !== null && (o = u.memoizedState.cachePool.pool),
                o !== s && (u.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              zi(e, e.updateQueue),
              oe(e),
              null)
        );
      case 4:
        return (Ee(), t === null && Nm(e.stateNode.containerInfo), oe(e), null);
      case 10:
        return (Aa(e.type), oe(e), null);
      case 19:
        if ((X(Re), (u = e.memoizedState), u === null)) return (oe(e), null);
        if (((s = (e.flags & 128) !== 0), (o = u.rendering), o === null))
          if (s) Fc(u, !1);
          else {
            if (ce !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((o = Zs(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Fc(u, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      zi(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (Al(n, t), (n = n.sibling));
                  return (et(Re, (Re.current & 1) | 2), Ft && En(e, u.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            u.tail !== null && rl() > fa && ((e.flags |= 128), (s = !0), Fc(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = Zs(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                zi(e, t),
                Fc(u, !0),
                u.tail === null && u.tailMode === "hidden" && !o.alternate && !Ft)
              )
                return (oe(e), null);
            } else
              2 * rl() - u.renderingStartTime > fa &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Fc(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = u.last), t !== null ? (t.sibling = o) : (e.child = o), (u.last = o));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = rl()),
            (t.sibling = null),
            (n = Re.current),
            et(Re, s ? (n & 1) | 2 : n & 1),
            Ft && En(e, u.treeForkCount),
            t)
          : (oe(e), null);
      case 22:
      case 23:
        return (
          kl(e),
          yl(),
          (u = e.memoizedState !== null),
          t !== null ? (t.memoizedState !== null) !== u && (e.flags |= 8192) : u && (e.flags |= 8192),
          u
            ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (oe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : oe(e),
          (n = e.updateQueue),
          n !== null && zi(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (u = null),
          e.memoizedState !== null && e.memoizedState.cachePool !== null && (u = e.memoizedState.cachePool.pool),
          u !== n && (e.flags |= 2048),
          t !== null && X(nu),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Aa(Ct),
          oe(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, e.tag));
  }
  function sf(t, e) {
    switch ((lu(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          Aa(Ct),
          Ee(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (wt(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((kl(e), e.alternate === null)) throw Error(h(340));
          zu();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((kl(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(h(340));
          zu();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (X(Re), null);
      case 4:
        return (Ee(), null);
      case 10:
        return (Aa(e.type), null);
      case 22:
      case 23:
        return (
          kl(e),
          yl(),
          t !== null && X(nu),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Aa(Ct), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qu(t, e) {
    switch ((lu(e), e.tag)) {
      case 3:
        (Aa(Ct), Ee());
        break;
      case 26:
      case 27:
      case 5:
        wt(e);
        break;
      case 4:
        Ee();
        break;
      case 31:
        e.memoizedState !== null && kl(e);
        break;
      case 13:
        kl(e);
        break;
      case 19:
        X(Re);
        break;
      case 10:
        Aa(e.type);
        break;
      case 22:
      case 23:
        (kl(e), yl(), t !== null && X(nu));
        break;
      case 24:
        Aa(Ct);
    }
  }
  function nn(t, e) {
    try {
      var n = e.updateQueue,
        u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            u = void 0;
            var o = n.create,
              p = n.inst;
            ((u = o()), (p.destroy = u));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (b) {
      Ae(e, e.return, b);
    }
  }
  function Ba(t, e, n) {
    try {
      var u = e.updateQueue,
        s = u !== null ? u.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        u = o;
        do {
          if ((u.tag & t) === t) {
            var p = u.inst,
              b = p.destroy;
            if (b !== void 0) {
              ((p.destroy = void 0), (s = e));
              var O = n,
                Y = b;
              try {
                Y();
              } catch (P) {
                Ae(s, O, P);
              }
            }
          }
          u = u.next;
        } while (u !== o);
      }
    } catch (P) {
      Ae(e, e.return, P);
    }
  }
  function hu(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        nl(e, n);
      } catch (u) {
        Ae(t, t.return, u);
      }
    }
  }
  function Po(t, e, n) {
    ((n.props = il(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (u) {
      Ae(t, e, u);
    }
  }
  function un(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = t.stateNode;
            break;
          case 30:
            u = t.stateNode;
            break;
          default:
            u = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(u)) : (n.current = u);
      }
    } catch (s) {
      Ae(t, e, s);
    }
  }
  function ua(t, e) {
    var n = t.ref,
      u = t.refCleanup;
    if (n !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (s) {
          Ae(t, e, s);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Ae(t, e, s);
        }
      else n.current = null;
  }
  function ia(t) {
    var e = t.type,
      n = t.memoizedProps,
      u = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && u.focus();
          break t;
        case "img":
          n.src ? (u.src = n.src) : n.srcSet && (u.srcset = n.srcSet);
      }
    } catch (s) {
      Ae(t, t.return, s);
    }
  }
  function Ea(t, e, n) {
    try {
      var u = t.stateNode;
      (Ny(u, t.type, n, e), (u[dl] = e));
    } catch (s) {
      Ae(t, t.return, s);
    }
  }
  function qe(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && Li(t.type)) || t.tag === 4;
  }
  function cn(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || qe(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
        if ((t.tag === 27 && Li(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function xt(t, e, n) {
    var u = t.tag;
    if (u === 5 || u === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e)
          : ((e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Za)));
    else if (u !== 4 && (u === 27 && Li(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null))
      for (xt(t, e, n), t = t.sibling; t !== null;) (xt(t, e, n), (t = t.sibling));
  }
  function ae(t, e, n) {
    var u = t.tag;
    if (u === 5 || u === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (u !== 4 && (u === 27 && Li(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (ae(t, e, n), t = t.sibling; t !== null;) (ae(t, e, n), (t = t.sibling));
  }
  function Je(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var u = t.type, s = e.attributes; s.length;) e.removeAttributeNode(s[0]);
      (_l(e, u, n), (e[Yt] = t), (e[dl] = n));
    } catch (o) {
      Ae(t, t.return, o);
    }
  }
  var Ca = !1,
    Me = !1,
    On = !1,
    Vc = typeof WeakSet == "function" ? WeakSet : Set,
    Oe = null;
  function Ji(t, e) {
    if (((t = t.containerInfo), (xm = Xd), (t = Hs(t)), Ai(t))) {
      if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var u = n.getSelection && n.getSelection();
          if (u && u.rangeCount !== 0) {
            n = u.anchorNode;
            var s = u.anchorOffset,
              o = u.focusNode;
            u = u.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break t;
            }
            var p = 0,
              b = -1,
              O = -1,
              Y = 0,
              P = 0,
              tt = t,
              Z = null;
            e: for (;;) {
              for (
                var V;
                tt !== n || (s !== 0 && tt.nodeType !== 3) || (b = p + s),
                  tt !== o || (u !== 0 && tt.nodeType !== 3) || (O = p + u),
                  tt.nodeType === 3 && (p += tt.nodeValue.length),
                  (V = tt.firstChild) !== null;
              )
                ((Z = tt), (tt = V));
              for (;;) {
                if (tt === t) break e;
                if ((Z === n && ++Y === s && (b = p), Z === o && ++P === u && (O = p), (V = tt.nextSibling) !== null))
                  break;
                ((tt = Z), (Z = tt.parentNode));
              }
              tt = V;
            }
            n = b === -1 || O === -1 ? null : { start: b, end: O };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (jm = { focusedElem: t, selectionRange: n }, Xd = !1, Oe = e; Oe !== null;)
      if (((e = Oe), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) ((t.return = e), (Oe = t));
      else
        for (; Oe !== null;) {
          switch (((e = Oe), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if ((t & 4) !== 0 && ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null))
                for (n = 0; n < t.length; n++) ((s = t[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                ((t = void 0), (n = e), (s = o.memoizedProps), (o = o.memoizedState), (u = n.stateNode));
                try {
                  var pt = il(n.type, s);
                  ((t = u.getSnapshotBeforeUpdate(pt, o)), (u.__reactInternalSnapshotBeforeUpdate = t));
                } catch (Rt) {
                  Ae(n, n.return, Rt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) Lm(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lm(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(h(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Oe = t));
            break;
          }
          Oe = e.return;
        }
  }
  function Hd(t, e, n) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (_n(t, n), u & 4 && nn(5, n));
        break;
      case 1:
        if ((_n(t, n), u & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (p) {
              Ae(n, n.return, p);
            }
          else {
            var s = il(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Ae(n, n.return, p);
            }
          }
        (u & 64 && hu(n), u & 512 && un(n, n.return));
        break;
      case 3:
        if ((_n(t, n), u & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            nl(t, e);
          } catch (p) {
            Ae(n, n.return, p);
          }
        }
        break;
      case 27:
        e === null && u & 4 && Je(n);
      case 26:
      case 5:
        (_n(t, n), e === null && u & 4 && ia(n), u & 512 && un(n, n.return));
        break;
      case 12:
        _n(t, n);
        break;
      case 31:
        (_n(t, n), u & 4 && of(t, n));
        break;
      case 13:
        (_n(t, n),
          u & 4 && ko(t, n),
          u & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = Sy.bind(null, n)), Yy(t, n)))));
        break;
      case 22:
        if (((u = n.memoizedState !== null || Ca), !u)) {
          ((e = (e !== null && e.memoizedState !== null) || Me), (s = Ca));
          var o = Me;
          ((Ca = u), (Me = e) && !o ? ue(t, n, (n.subtreeFlags & 8772) !== 0) : _n(t, n), (Ca = s), (Me = o));
        }
        break;
      case 30:
        break;
      default:
        _n(t, n);
    }
  }
  function ff(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), ff(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ec(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var te = null,
    Ze = !1;
  function Bl(t, e, n) {
    for (n = n.child; n !== null;) (Au(t, e, n), (n = n.sibling));
  }
  function Au(t, e, n) {
    if (Le && typeof Le.onCommitFiberUnmount == "function")
      try {
        Le.onCommitFiberUnmount(ma, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Me || ua(n, e),
          Bl(t, e, n),
          n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Me || ua(n, e);
        var u = te,
          s = Ze;
        (Li(n.type) && ((te = n.stateNode), (Ze = !1)), Bl(t, e, n), lr(n.stateNode), (te = u), (Ze = s));
        break;
      case 5:
        Me || ua(n, e);
      case 6:
        if (((u = te), (s = Ze), (te = null), Bl(t, e, n), (te = u), (Ze = s), te !== null))
          if (Ze)
            try {
              (te.nodeType === 9 ? te.body : te.nodeName === "HTML" ? te.ownerDocument.body : te).removeChild(
                n.stateNode,
              );
            } catch (o) {
              Ae(n, e, o);
            }
          else
            try {
              te.removeChild(n.stateNode);
            } catch (o) {
              Ae(n, e, o);
            }
        break;
      case 18:
        te !== null &&
          (Ze
            ? ((t = te),
              pA(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
              Cf(t))
            : pA(te, n.stateNode));
        break;
      case 4:
        ((u = te), (s = Ze), (te = n.stateNode.containerInfo), (Ze = !0), Bl(t, e, n), (te = u), (Ze = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ba(2, n, e), Me || Ba(4, n, e), Bl(t, e, n));
        break;
      case 1:
        (Me || (ua(n, e), (u = n.stateNode), typeof u.componentWillUnmount == "function" && Po(n, e, u)), Bl(t, e, n));
        break;
      case 21:
        Bl(t, e, n);
        break;
      case 22:
        ((Me = (u = Me) || n.memoizedState !== null), Bl(t, e, n), (Me = u));
        break;
      default:
        Bl(t, e, n);
    }
  }
  function of(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))) {
      t = t.dehydrated;
      try {
        Cf(t);
      } catch (n) {
        Ae(e, e.return, n);
      }
    }
  }
  function ko(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Cf(t);
      } catch (n) {
        Ae(e, e.return, n);
      }
  }
  function Gd(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Vc()), e);
      case 22:
        return ((t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new Vc()), e);
      default:
        throw Error(h(435, t.tag));
    }
  }
  function xe(t, e) {
    var n = Gd(t);
    e.forEach(function (u) {
      if (!n.has(u)) {
        n.add(u);
        var s = gy.bind(null, t, u);
        u.then(s, s);
      }
    });
  }
  function El(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var u = 0; u < n.length; u++) {
        var s = n[u],
          o = t,
          p = e,
          b = p;
        t: for (; b !== null;) {
          switch (b.tag) {
            case 27:
              if (Li(b.type)) {
                ((te = b.stateNode), (Ze = !1));
                break t;
              }
              break;
            case 5:
              ((te = b.stateNode), (Ze = !1));
              break t;
            case 3:
            case 4:
              ((te = b.stateNode.containerInfo), (Ze = !0));
              break t;
          }
          b = b.return;
        }
        if (te === null) throw Error(h(160));
        (Au(o, p, s), (te = null), (Ze = !1), (o = s.alternate), o !== null && (o.return = null), (s.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null;) (vu(e, t), (e = e.sibling));
  }
  var Kl = null;
  function vu(t, e) {
    var n = t.alternate,
      u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (El(e, t), _e(t), u & 4 && (Ba(3, t, t.return), nn(3, t), Ba(5, t, t.return)));
        break;
      case 1:
        (El(e, t),
          _e(t),
          u & 512 && (Me || n === null || ua(n, n.return)),
          u & 64 &&
            Ca &&
            ((t = t.updateQueue),
            t !== null &&
              ((u = t.callbacks),
              u !== null &&
                ((n = t.shared.hiddenCallbacks), (t.shared.hiddenCallbacks = n === null ? u : n.concat(u))))));
        break;
      case 26:
        var s = Kl;
        if ((El(e, t), _e(t), u & 512 && (Me || n === null || ua(n, n.return)), u & 4)) {
          var o = n !== null ? n.memoizedState : null;
          if (((u = t.memoizedState), n === null))
            if (u === null)
              if (t.stateNode === null) {
                t: {
                  ((u = t.type), (n = t.memoizedProps), (s = s.ownerDocument || s));
                  e: switch (u) {
                    case "title":
                      ((o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Su] ||
                          o[Yt] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(u)), s.head.insertBefore(o, s.querySelector("head > title"))),
                        _l(o, u, n),
                        (o[Yt] = t),
                        Ye(o),
                        (u = o));
                      break t;
                    case "link":
                      var p = HA("link", "href", s).get(u + (n.href || ""));
                      if (p) {
                        for (var b = 0; b < p.length; b++)
                          if (
                            ((o = p[b]),
                            o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) &&
                              o.getAttribute("rel") === (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") === (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            p.splice(b, 1);
                            break e;
                          }
                      }
                      ((o = s.createElement(u)), _l(o, u, n), s.head.appendChild(o));
                      break;
                    case "meta":
                      if ((p = HA("meta", "content", s).get(u + (n.content || "")))) {
                        for (b = 0; b < p.length; b++)
                          if (
                            ((o = p[b]),
                            o.getAttribute("content") === (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") === (n.name == null ? null : n.name) &&
                              o.getAttribute("property") === (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") === (n.charSet == null ? null : n.charSet))
                          ) {
                            p.splice(b, 1);
                            break e;
                          }
                      }
                      ((o = s.createElement(u)), _l(o, u, n), s.head.appendChild(o));
                      break;
                    default:
                      throw Error(h(468, u));
                  }
                  ((o[Yt] = t), Ye(o), (u = o));
                }
                t.stateNode = u;
              } else GA(s, t.type, t.stateNode);
            else t.stateNode = RA(s, u, t.memoizedProps);
          else
            o !== u
              ? (o === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : o.count--,
                u === null ? GA(s, t.type, t.stateNode) : RA(s, u, t.memoizedProps))
              : u === null && t.stateNode !== null && Ea(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (El(e, t),
          _e(t),
          u & 512 && (Me || n === null || ua(n, n.return)),
          n !== null && u & 4 && Ea(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((El(e, t), _e(t), u & 512 && (Me || n === null || ua(n, n.return)), t.flags & 32)) {
          s = t.stateNode;
          try {
            bu(s, "");
          } catch (pt) {
            Ae(t, t.return, pt);
          }
        }
        (u & 4 && t.stateNode != null && ((s = t.memoizedProps), Ea(t, s, n !== null ? n.memoizedProps : s)),
          u & 1024 && (On = !0));
        break;
      case 6:
        if ((El(e, t), _e(t), u & 4)) {
          if (t.stateNode === null) throw Error(h(162));
          ((u = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = u;
          } catch (pt) {
            Ae(t, t.return, pt);
          }
        }
        break;
      case 3:
        if (
          ((Qd = null),
          (s = Kl),
          (Kl = xd(e.containerInfo)),
          El(e, t),
          (Kl = s),
          _e(t),
          u & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Cf(e.containerInfo);
          } catch (pt) {
            Ae(t, t.return, pt);
          }
        On && ((On = !1), Od(t));
        break;
      case 4:
        ((u = Kl), (Kl = xd(t.stateNode.containerInfo)), El(e, t), _e(t), (Kl = u));
        break;
      case 12:
        (El(e, t), _e(t));
        break;
      case 31:
        (El(e, t), _e(t), u & 4 && ((u = t.updateQueue), u !== null && ((t.updateQueue = null), xe(t, u))));
        break;
      case 13:
        (El(e, t),
          _e(t),
          t.child.flags & 8192 && (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (zn = rl()),
          u & 4 && ((u = t.updateQueue), u !== null && ((t.updateQueue = null), xe(t, u))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var O = n !== null && n.memoizedState !== null,
          Y = Ca,
          P = Me;
        if (((Ca = Y || s), (Me = P || O), El(e, t), (Me = P), (Ca = Y), _e(t), u & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || O || Ca || Me || Zu(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                O = n = e;
                try {
                  if (((o = O.stateNode), s))
                    ((p = o.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none"));
                  else {
                    b = O.stateNode;
                    var tt = O.memoizedProps.style,
                      Z = tt != null && tt.hasOwnProperty("display") ? tt.display : null;
                    b.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (pt) {
                  Ae(O, O.return, pt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                O = e;
                try {
                  O.stateNode.nodeValue = s ? "" : O.memoizedProps;
                } catch (pt) {
                  Ae(O, O.return, pt);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                O = e;
                try {
                  var V = O.stateNode;
                  s ? BA(V, !0) : BA(O.stateNode, !1);
                } catch (pt) {
                  Ae(O, O.return, pt);
                }
              }
            } else if (((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) && e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        u & 4 &&
          ((u = t.updateQueue), u !== null && ((n = u.retryQueue), n !== null && ((u.retryQueue = null), xe(t, n))));
        break;
      case 19:
        (El(e, t), _e(t), u & 4 && ((u = t.updateQueue), u !== null && ((t.updateQueue = null), xe(t, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (El(e, t), _e(t));
    }
  }
  function _e(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, u = t.return; u !== null;) {
          if (qe(u)) {
            n = u;
            break;
          }
          u = u.return;
        }
        if (n == null) throw Error(h(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              o = cn(t);
            ae(t, o, s);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (bu(p, ""), (n.flags &= -33));
            var b = cn(t);
            ae(t, b, p);
            break;
          case 3:
          case 4:
            var O = n.stateNode.containerInfo,
              Y = cn(t);
            xt(t, Y, O);
            break;
          default:
            throw Error(h(161));
        }
      } catch (P) {
        Ae(t, t.return, P);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Od(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (Od(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function _n(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null;) (Hd(t, e.alternate, e), (e = e.sibling));
  }
  function Zu(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ba(4, e, e.return), Zu(e));
          break;
        case 1:
          ua(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Po(e, e.return, n), Zu(e));
          break;
        case 27:
          lr(e.stateNode);
        case 26:
        case 5:
          (ua(e, e.return), Zu(e));
          break;
        case 22:
          e.memoizedState === null && Zu(e);
          break;
        case 30:
          Zu(e);
          break;
        default:
          Zu(e);
      }
      t = t.sibling;
    }
  }
  function ue(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
      var u = e.alternate,
        s = t,
        o = e,
        p = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (ue(s, o, n), nn(4, o));
          break;
        case 1:
          if ((ue(s, o, n), (u = o), (s = u.stateNode), typeof s.componentDidMount == "function"))
            try {
              s.componentDidMount();
            } catch (Y) {
              Ae(u, u.return, Y);
            }
          if (((u = o), (s = u.updateQueue), s !== null)) {
            var b = u.stateNode;
            try {
              var O = s.shared.hiddenCallbacks;
              if (O !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < O.length; s++) tn(O[s], b);
            } catch (Y) {
              Ae(u, u.return, Y);
            }
          }
          (n && p & 64 && hu(o), un(o, o.return));
          break;
        case 27:
          Je(o);
        case 26:
        case 5:
          (ue(s, o, n), n && u === null && p & 4 && ia(o), un(o, o.return));
          break;
        case 12:
          ue(s, o, n);
          break;
        case 31:
          (ue(s, o, n), n && p & 4 && of(s, o));
          break;
        case 13:
          (ue(s, o, n), n && p & 4 && ko(s, o));
          break;
        case 22:
          (o.memoizedState === null && ue(s, o, n), un(o, o.return));
          break;
        case 30:
          break;
        default:
          ue(s, o, n);
      }
      e = e.sibling;
    }
  }
  function rf(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && al(n)));
  }
  function Un(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && al(t)));
  }
  function Ie(t, e, n, u) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Te(t, e, n, u), (e = e.sibling));
  }
  function Te(t, e, n, u) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ie(t, e, n, u), s & 2048 && nn(9, e));
        break;
      case 1:
        Ie(t, e, n, u);
        break;
      case 3:
        (Ie(t, e, n, u),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && al(t))));
        break;
      case 12:
        if (s & 2048) {
          (Ie(t, e, n, u), (t = e.stateNode));
          try {
            var o = e.memoizedProps,
              p = o.id,
              b = o.onPostCommit;
            typeof b == "function" && b(p, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (O) {
            Ae(e, e.return, O);
          }
        } else Ie(t, e, n, u);
        break;
      case 31:
        Ie(t, e, n, u);
        break;
      case 13:
        Ie(t, e, n, u);
        break;
      case 23:
        break;
      case 22:
        ((o = e.stateNode),
          (p = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Ie(t, e, n, u)
              : xi(t, e)
            : o._visibility & 2
              ? Ie(t, e, n, u)
              : ((o._visibility |= 2), yu(t, e, n, u, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && rf(p, e));
        break;
      case 24:
        (Ie(t, e, n, u), s & 2048 && Un(e.alternate, e));
        break;
      default:
        Ie(t, e, n, u);
    }
  }
  function yu(t, e, n, u, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
      var o = t,
        p = e,
        b = n,
        O = u,
        Y = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (yu(o, p, b, O, s), nn(8, p));
          break;
        case 23:
          break;
        case 22:
          var P = p.stateNode;
          (p.memoizedState !== null
            ? P._visibility & 2
              ? yu(o, p, b, O, s)
              : xi(o, p)
            : ((P._visibility |= 2), yu(o, p, b, O, s)),
            s && Y & 2048 && rf(p.alternate, p));
          break;
        case 24:
          (yu(o, p, b, O, s), s && Y & 2048 && Un(p.alternate, p));
          break;
        default:
          yu(o, p, b, O, s);
      }
      e = e.sibling;
    }
  }
  function xi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var n = t,
          u = e,
          s = u.flags;
        switch (u.tag) {
          case 22:
            (xi(n, u), s & 2048 && rf(u.alternate, u));
            break;
          case 24:
            (xi(n, u), s & 2048 && Un(u.alternate, u));
            break;
          default:
            xi(n, u);
        }
        e = e.sibling;
      }
  }
  var Ue = 8192;
  function Fu(t, e, n) {
    if (t.subtreeFlags & Ue) for (t = t.child; t !== null;) (je(t, e, n), (t = t.sibling));
  }
  function je(t, e, n) {
    switch (t.tag) {
      case 26:
        (Fu(t, e, n), t.flags & Ue && t.memoizedState !== null && t0(n, Kl, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Fu(t, e, n);
        break;
      case 3:
      case 4:
        var u = Kl;
        ((Kl = xd(t.stateNode.containerInfo)), Fu(t, e, n), (Kl = u));
        break;
      case 22:
        t.memoizedState === null &&
          ((u = t.alternate),
          u !== null && u.memoizedState !== null ? ((u = Ue), (Ue = 16777216), Fu(t, e, n), (Ue = u)) : Fu(t, e, n));
        break;
      default:
        Fu(t, e, n);
    }
  }
  function Ll(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Gl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var u = e[n];
          ((Oe = u), Ic(u, t));
        }
      Ll(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Vu(t), (t = t.sibling));
  }
  function Vu(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Gl(t), t.flags & 2048 && Ba(9, t, t.return));
        break;
      case 3:
        Gl(t);
        break;
      case 12:
        Gl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), df(t))
          : Gl(t);
        break;
      default:
        Gl(t);
    }
  }
  function df(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var u = e[n];
          ((Oe = u), Ic(u, t));
        }
      Ll(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Ba(8, e, e.return), df(e));
          break;
        case 22:
          ((n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), df(e)));
          break;
        default:
          df(e);
      }
      t = t.sibling;
    }
  }
  function Ic(t, e) {
    for (; Oe !== null;) {
      var n = Oe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ba(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var u = n.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          al(n.memoizedState.cache);
      }
      if (((u = n.child), u !== null)) ((u.return = n), (Oe = u));
      else
        t: for (n = t; Oe !== null;) {
          u = Oe;
          var s = u.sibling,
            o = u.return;
          if ((ff(u), u === n)) {
            Oe = null;
            break t;
          }
          if (s !== null) {
            ((s.return = o), (Oe = s));
            break t;
          }
          Oe = o;
        }
    }
  }
  var mf = {
      getCacheForType: function (t) {
        var e = $e(Ct),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return $e(Ct).controller.signal;
      },
    },
    hf = typeof WeakMap == "function" ? WeakMap : Map,
    Wt = 0,
    ie = null,
    jt = null,
    qt = 0,
    St = 0,
    Lt = null,
    Nt = !1,
    Qt = !1,
    he = !1,
    Qe = 0,
    ce = 0,
    ca = 0,
    Nn = 0,
    Na = 0,
    Pt = 0,
    sa = 0,
    za = null,
    Cl = null,
    Yl = !1,
    zn = 0,
    ji = 0,
    fa = 1 / 0,
    Qi = null,
    sn = null,
    De = 0,
    Ja = null,
    oa = null,
    Sa = 0,
    Jn = 0,
    Iu = null,
    Af = null,
    wu = 0,
    Wu = null;
  function Ol() {
    return (Wt & 2) !== 0 && qt !== 0 ? qt & -qt : R.T !== null ? Gm() : dn();
  }
  function l() {
    if (Pt === 0)
      if ((qt & 536870912) === 0 || Ft) {
        var t = Cu;
        ((Cu <<= 1), (Cu & 3932160) === 0 && (Cu = 262144), (Pt = t));
      } else Pt = 536870912;
    return ((t = Ve.current), t !== null && (t.flags |= 32), Pt);
  }
  function a(t, e, n) {
    (((t === ie && (St === 2 || St === 9)) || t.cancelPendingCommit !== null) && (x(t, 0), v(t, qt, Pt, !1)),
      ii(t, n),
      ((Wt & 2) === 0 || t !== ie) && (t === ie && ((Wt & 2) === 0 && (Nn |= n), ce === 4 && v(t, qt, Pt, !1)), pu(t)));
  }
  function i(t, e, n) {
    if ((Wt & 6) !== 0) throw Error(h(327));
    var u = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || ai(t, e),
      s = u ? Pu(t, e) : Xl(t, e, !0),
      o = u;
    do {
      if (s === 0) {
        Qt && !u && v(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !m(n))) {
          ((s = Xl(t, e, !1)), (o = !1));
          continue;
        }
        if (s === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var p = 0;
          else ((p = t.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
          if (p !== 0) {
            e = p;
            t: {
              var b = t;
              s = za;
              var O = b.current.memoizedState.isDehydrated;
              if ((O && (x(b, p).flags |= 256), (p = Xl(b, p, !1)), p !== 2)) {
                if (he && !O) {
                  ((b.errorRecoveryDisabledLanes |= o), (Nn |= o), (s = 4));
                  break t;
                }
                ((o = Cl), (Cl = s), o !== null && (Cl === null ? (Cl = o) : Cl.push.apply(Cl, o)));
              }
              s = p;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (x(t, 0), v(t, e, 0, !0));
          break;
        }
        t: {
          switch (((u = t), (o = s), o)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              v(u, e, Pt, !Nt);
              break t;
            case 2:
              Cl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((e & 62914560) === e && ((s = zn + 300 - rl()), 10 < s)) {
            if ((v(u, e, Pt, !Nt), tc(u, 0, !0) !== 0)) break t;
            ((Sa = e),
              (u.timeoutHandle = vA(f.bind(null, u, n, Cl, Qi, Yl, e, Pt, Nn, sa, Nt, o, "Throttled", -0, 0), s)));
            break t;
          }
          f(u, n, Cl, Qi, Yl, e, Pt, Nn, sa, Nt, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    pu(t);
  }
  function f(t, e, n, u, s, o, p, b, O, Y, P, tt, Z, V) {
    if (((t.timeoutHandle = -1), (tt = e.subtreeFlags), tt & 8192 || (tt & 16785408) === 16785408)) {
      ((tt = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Za,
      }),
        je(e, o, tt));
      var pt = (o & 62914560) === o ? zn - rl() : (o & 4194048) === o ? ji - rl() : 0;
      if (((pt = e0(tt, pt)), pt !== null)) {
        ((Sa = o),
          (t.cancelPendingCommit = pt(Gt.bind(null, t, e, o, n, u, s, p, b, O, P, tt, null, Z, V))),
          v(t, o, p, !Y));
        return;
      }
    }
    Gt(t, e, o, n, u, s, p, b, O);
  }
  function m(t) {
    for (var e = t; ;) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var u = 0; u < n.length; u++) {
          var s = n[u],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!ge(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function v(t, e, n, u) {
    ((e &= ~Na),
      (e &= ~Nn),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      u && (t.warmLanes |= e),
      (u = t.expirationTimes));
    for (var s = e; 0 < s;) {
      var o = 31 - bl(s),
        p = 1 << o;
      ((u[o] = -1), (s &= ~p));
    }
    n !== 0 && _f(t, n, e);
  }
  function M() {
    return (Wt & 6) === 0 ? ($o(0), !1) : !0;
  }
  function G() {
    if (jt !== null) {
      if (St === 0) var t = jt.return;
      else ((t = jt), (vl = Sn = null), Ho(t), (iu = null), (cu = 0), (t = jt));
      for (; t !== null;) (qu(t.alternate, t), (t = t.return));
      jt = null;
    }
  }
  function x(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), xy(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Sa = 0),
      G(),
      (ie = t),
      (jt = n = Ia(t.current, null)),
      (qt = e),
      (St = 0),
      (Lt = null),
      (Nt = !1),
      (Qt = ai(t, e)),
      (he = !1),
      (sa = Pt = Na = Nn = ca = ce = 0),
      (Cl = za = null),
      (Yl = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= e; 0 < u;) {
        var s = 31 - bl(u),
          o = 1 << s;
        ((e |= t[s]), (u &= ~o));
      }
    return ((Qe = e), $n(), n);
  }
  function k(t, e) {
    ((Ht = null),
      (R.H = Jc),
      e === uu || e === Ga
        ? ((e = Ys()), (St = 3))
        : e === Tc
          ? ((e = Ys()), (St = 4))
          : (St = e === uf ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1),
      (Lt = e),
      jt === null && ((ce = 1), nf(t, Nl(e, t.current))));
  }
  function ft() {
    var t = Ve.current;
    return t === null
      ? !0
      : (qt & 4194048) === qt
        ? va === null
        : (qt & 62914560) === qt || (qt & 536870912) !== 0
          ? t === va
          : !1;
  }
  function mt() {
    var t = R.H;
    return ((R.H = Jc), t === null ? Jc : t);
  }
  function At() {
    var t = R.A;
    return ((R.A = mf), t);
  }
  function Ut() {
    ((ce = 4),
      Nt || ((qt & 4194048) !== qt && Ve.current !== null) || (Qt = !0),
      ((ca & 134217727) === 0 && (Nn & 134217727) === 0) || ie === null || v(ie, qt, Pt, !1));
  }
  function Xl(t, e, n) {
    var u = Wt;
    Wt |= 2;
    var s = mt(),
      o = At();
    ((ie !== t || qt !== e) && ((Qi = null), x(t, e)), (e = !1));
    var p = ce;
    t: do
      try {
        if (St !== 0 && jt !== null) {
          var b = jt,
            O = Lt;
          switch (St) {
            case 8:
              (G(), (p = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ve.current === null && (e = !0);
              var Y = St;
              if (((St = 0), (Lt = null), it(t, b, O, Y), n && Qt)) {
                p = 0;
                break t;
              }
              break;
            default:
              ((Y = St), (St = 0), (Lt = null), it(t, b, O, Y));
          }
        }
        (wc(), (p = ce));
        break;
      } catch (P) {
        k(t, P);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (vl = Sn = null),
      (Wt = u),
      (R.H = s),
      (R.A = o),
      jt === null && ((ie = null), (qt = 0), $n()),
      p
    );
  }
  function wc() {
    for (; jt !== null;) z(jt);
  }
  function Pu(t, e) {
    var n = Wt;
    Wt |= 2;
    var u = mt(),
      s = At();
    ie !== t || qt !== e ? ((Qi = null), (fa = rl() + 500), x(t, e)) : (Qt = ai(t, e));
    t: do
      try {
        if (St !== 0 && jt !== null) {
          e = jt;
          var o = Lt;
          e: switch (St) {
            case 1:
              ((St = 0), (Lt = null), it(t, e, o, 1));
              break;
            case 2:
            case 9:
              if (ld(o)) {
                ((St = 0), (Lt = null), F(e));
                break;
              }
              ((e = function () {
                ((St !== 2 && St !== 9) || ie !== t || (St = 7), pu(t));
              }),
                o.then(e, e));
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              ld(o) ? ((St = 0), (Lt = null), F(e)) : ((St = 0), (Lt = null), it(t, e, o, 7));
              break;
            case 5:
              var p = null;
              switch (jt.tag) {
                case 26:
                  p = jt.memoizedState;
                case 5:
                case 27:
                  var b = jt;
                  if (p ? OA(p) : b.stateNode.complete) {
                    ((St = 0), (Lt = null));
                    var O = b.sibling;
                    if (O !== null) jt = O;
                    else {
                      var Y = b.return;
                      Y !== null ? ((jt = Y), Et(Y)) : (jt = null);
                    }
                    break e;
                  }
              }
              ((St = 0), (Lt = null), it(t, e, o, 5));
              break;
            case 6:
              ((St = 0), (Lt = null), it(t, e, o, 6));
              break;
            case 8:
              (G(), (ce = 6));
              break t;
            default:
              throw Error(h(462));
          }
        }
        q();
        break;
      } catch (P) {
        k(t, P);
      }
    while (!0);
    return ((vl = Sn = null), (R.H = u), (R.A = s), (Wt = n), jt !== null ? 0 : ((ie = null), (qt = 0), $n(), ce));
  }
  function q() {
    for (; jt !== null && !Hf();) z(jt);
  }
  function z(t) {
    var e = cf(t.alternate, t, Qe);
    ((t.memoizedProps = t.pendingProps), e === null ? Et(t) : (jt = e));
  }
  function F(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = pl(n, e, e.pendingProps, e.type, void 0, qt);
        break;
      case 11:
        e = pl(n, e, e.pendingProps, e.type.render, e.ref, qt);
        break;
      case 5:
        Ho(e);
      default:
        (qu(n, e), (e = jt = Al(e, Qe)), (e = cf(n, e, Qe)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Et(t) : (jt = e));
  }
  function it(t, e, n, u) {
    ((vl = Sn = null), Ho(e), (iu = null), (cu = 0));
    var s = e.return;
    try {
      if (ta(t, s, e, n, qt)) {
        ((ce = 1), nf(t, Nl(n, t.current)), (jt = null));
        return;
      }
    } catch (o) {
      if (s !== null) throw ((jt = s), o);
      ((ce = 1), nf(t, Nl(n, t.current)), (jt = null));
      return;
    }
    e.flags & 32768
      ? (Ft || u === 1
          ? (t = !0)
          : Qt || (qt & 536870912) !== 0
            ? (t = !1)
            : ((Nt = t = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = Ve.current), u !== null && u.tag === 13 && (u.flags |= 16384))),
        ye(e, t))
      : Et(e);
  }
  function Et(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ye(e, Nt);
        return;
      }
      t = e.return;
      var n = Wo(e.alternate, e, Qe);
      if (n !== null) {
        jt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        jt = e;
        return;
      }
      jt = e = t;
    } while (e !== null);
    ce === 0 && (ce = 5);
  }
  function ye(t, e) {
    do {
      var n = sf(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (jt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        jt = t;
        return;
      }
      jt = t = n;
    } while (t !== null);
    ((ce = 6), (jt = null));
  }
  function Gt(t, e, n, u, s, o, p, b, O) {
    t.cancelPendingCommit = null;
    do vf();
    while (De !== 0);
    if ((Wt & 6) !== 0) throw Error(h(327));
    if (e !== null) {
      if (e === t.current) throw Error(h(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= Ns),
        br(t, n, o, p, b, O),
        t === ie && ((jt = ie = null), (qt = 0)),
        (oa = e),
        (Ja = t),
        (Sa = n),
        (Jn = o),
        (Iu = s),
        (Af = u),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            by(us, function () {
              return ($h(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (u = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = R.T), (R.T = null), (s = N.p), (N.p = 2), (p = Wt), (Wt |= 4));
        try {
          Ji(t, e, n);
        } finally {
          ((Wt = p), (N.p = s), (R.T = u));
        }
      }
      ((De = 1), ee(), we(), le());
    }
  }
  function ee() {
    if (De === 1) {
      De = 0;
      var t = Ja,
        e = oa,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var u = N.p;
        N.p = 2;
        var s = Wt;
        Wt |= 4;
        try {
          vu(e, t);
          var o = jm,
            p = Hs(t.containerInfo),
            b = o.focusedElem,
            O = o.selectionRange;
          if (p !== b && b && b.ownerDocument && Rs(b.ownerDocument.documentElement, b)) {
            if (O !== null && Ai(b)) {
              var Y = O.start,
                P = O.end;
              if ((P === void 0 && (P = Y), "selectionStart" in b))
                ((b.selectionStart = Y), (b.selectionEnd = Math.min(P, b.value.length)));
              else {
                var tt = b.ownerDocument || document,
                  Z = (tt && tt.defaultView) || window;
                if (Z.getSelection) {
                  var V = Z.getSelection(),
                    pt = b.textContent.length,
                    Rt = Math.min(O.start, pt),
                    Be = O.end === void 0 ? Rt : Math.min(O.end, pt);
                  !V.extend && Rt > Be && ((p = Be), (Be = Rt), (Rt = p));
                  var J = ao(b, Rt),
                    _ = ao(b, Be);
                  if (
                    J &&
                    _ &&
                    (V.rangeCount !== 1 ||
                      V.anchorNode !== J.node ||
                      V.anchorOffset !== J.offset ||
                      V.focusNode !== _.node ||
                      V.focusOffset !== _.offset)
                  ) {
                    var L = tt.createRange();
                    (L.setStart(J.node, J.offset),
                      V.removeAllRanges(),
                      Rt > Be
                        ? (V.addRange(L), V.extend(_.node, _.offset))
                        : (L.setEnd(_.node, _.offset), V.addRange(L)));
                  }
                }
              }
            }
            for (tt = [], V = b; (V = V.parentNode);)
              V.nodeType === 1 && tt.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < tt.length; b++) {
              var $ = tt[b];
              (($.element.scrollLeft = $.left), ($.element.scrollTop = $.top));
            }
          }
          ((Xd = !!xm), (jm = xm = null));
        } finally {
          ((Wt = s), (N.p = u), (R.T = n));
        }
      }
      ((t.current = e), (De = 2));
    }
  }
  function we() {
    if (De === 2) {
      De = 0;
      var t = Ja,
        e = oa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var u = N.p;
        N.p = 2;
        var s = Wt;
        Wt |= 4;
        try {
          Hd(t, e.alternate, e);
        } finally {
          ((Wt = s), (N.p = u), (R.T = n));
        }
      }
      De = 3;
    }
  }
  function le() {
    if (De === 4 || De === 3) {
      ((De = 0), ls());
      var t = Ja,
        e = oa,
        n = Sa,
        u = Af;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (De = 5)
        : ((De = 0), (oa = Ja = null), xn(t, t.pendingLanes));
      var s = t.pendingLanes;
      if ((s === 0 && (sn = null), fs(n), (e = e.stateNode), Le && typeof Le.onCommitFiberRoot == "function"))
        try {
          Le.onCommitFiberRoot(ma, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((e = R.T), (s = N.p), (N.p = 2), (R.T = null));
        try {
          for (var o = t.onRecoverableError, p = 0; p < u.length; p++) {
            var b = u[p];
            o(b.value, { componentStack: b.stack });
          }
        } finally {
          ((R.T = e), (N.p = s));
        }
      }
      ((Sa & 3) !== 0 && vf(),
        pu(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0 ? (t === Wu ? wu++ : ((wu = 0), (Wu = t))) : (wu = 0),
        $o(0));
    }
  }
  function xn(t, e) {
    (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), al(e)));
  }
  function vf() {
    return (ee(), we(), le(), $h());
  }
  function $h() {
    if (De !== 5) return !1;
    var t = Ja,
      e = Jn;
    Jn = 0;
    var n = fs(Sa),
      u = R.T,
      s = N.p;
    try {
      ((N.p = 32 > n ? 32 : n), (R.T = null), (n = Iu), (Iu = null));
      var o = Ja,
        p = Sa;
      if (((De = 0), (oa = Ja = null), (Sa = 0), (Wt & 6) !== 0)) throw Error(h(331));
      var b = Wt;
      if (
        ((Wt |= 4),
        Vu(o.current),
        Te(o, o.current, p, n),
        (Wt = b),
        $o(0, !1),
        Le && typeof Le.onPostCommitFiberRoot == "function")
      )
        try {
          Le.onPostCommitFiberRoot(ma, o);
        } catch {}
      return !0;
    } finally {
      ((N.p = s), (R.T = u), xn(t, e));
    }
  }
  function tA(t, e, n) {
    ((e = Nl(n, e)), (e = wo(t.stateNode, e, 2)), (t = Tn(t, e, 2)), t !== null && (ii(t, 2), pu(t)));
  }
  function Ae(t, e, n) {
    if (t.tag === 3) tA(t, t, n);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          tA(e, t, n);
          break;
        } else if (e.tag === 1) {
          var u = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" && (sn === null || !sn.has(u)))
          ) {
            ((t = Nl(n, t)), (n = Oi(2)), (u = Tn(e, n, 2)), u !== null && (jl(n, u, e, t), ii(u, 2), pu(u)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Dm(t, e, n) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new hf();
      var s = new Set();
      u.set(e, s);
    } else ((s = u.get(e)), s === void 0 && ((s = new Set()), u.set(e, s)));
    s.has(n) || ((he = !0), s.add(n), (t = Cy.bind(null, t, e, n)), e.then(t, t));
  }
  function Cy(t, e, n) {
    var u = t.pingCache;
    (u !== null && u.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      ie === t &&
        (qt & n) === n &&
        (ce === 4 || (ce === 3 && (qt & 62914560) === qt && 300 > rl() - zn) ? (Wt & 2) === 0 && x(t, 0) : (Na |= n),
        sa === qt && (sa = 0)),
      pu(t));
  }
  function eA(t, e) {
    (e === 0 && (e = ni()), (t = tu(t, e)), t !== null && (ii(t, e), pu(t)));
  }
  function Sy(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), eA(t, n));
  }
  function gy(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var u = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (u !== null && u.delete(e), eA(t, n));
  }
  function by(t, e) {
    return gl(t, e);
  }
  var _d = null,
    yf = null,
    Rm = !1,
    Ud = !1,
    Hm = !1,
    Ki = 0;
  function pu(t) {
    (t !== yf && t.next === null && (yf === null ? (_d = yf = t) : (yf = yf.next = t)),
      (Ud = !0),
      Rm || ((Rm = !0), Ty()));
  }
  function $o(t, e) {
    if (!Hm && Ud) {
      Hm = !0;
      do
        for (var n = !1, u = _d; u !== null;) {
          if (t !== 0) {
            var s = u.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var p = u.suspendedLanes,
                b = u.pingedLanes;
              ((o = (1 << (31 - bl(42 | t) + 1)) - 1),
                (o &= s & ~(p & ~b)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), uA(u, o));
          } else
            ((o = qt),
              (o = tc(u, u === ie ? o : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1)),
              (o & 3) === 0 || ai(u, o) || ((n = !0), uA(u, o)));
          u = u.next;
        }
      while (n);
      Hm = !1;
    }
  }
  function My() {
    lA();
  }
  function lA() {
    Ud = Rm = !1;
    var t = 0;
    Ki !== 0 && Jy() && (t = Ki);
    for (var e = rl(), n = null, u = _d; u !== null;) {
      var s = u.next,
        o = aA(u, e);
      (o === 0
        ? ((u.next = null), n === null ? (_d = s) : (n.next = s), s === null && (yf = n))
        : ((n = u), (t !== 0 || (o & 3) !== 0) && (Ud = !0)),
        (u = s));
    }
    ((De !== 0 && De !== 5) || $o(t), Ki !== 0 && (Ki = 0));
  }
  function aA(t, e) {
    for (var n = t.suspendedLanes, u = t.pingedLanes, s = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o;) {
      var p = 31 - bl(o),
        b = 1 << p,
        O = s[p];
      (O === -1 ? ((b & n) === 0 || (b & u) !== 0) && (s[p] = is(b, e)) : O <= e && (t.expiredLanes |= b), (o &= ~b));
    }
    if (
      ((e = ie),
      (n = qt),
      (n = tc(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (u = t.callbackNode),
      n === 0 || (t === e && (St === 2 || St === 9)) || t.cancelPendingCommit !== null)
    )
      return (u !== null && u !== null && Ka(u), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || ai(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((u !== null && Ka(u), fs(n))) {
        case 2:
        case 8:
          n = da;
          break;
        case 32:
          n = us;
          break;
        case 268435456:
          n = Sr;
          break;
        default:
          n = us;
      }
      return ((u = nA.bind(null, t)), (n = gl(n, u)), (t.callbackPriority = e), (t.callbackNode = n), e);
    }
    return (u !== null && u !== null && Ka(u), (t.callbackPriority = 2), (t.callbackNode = null), 2);
  }
  function nA(t, e) {
    if (De !== 0 && De !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (vf() && t.callbackNode !== n) return null;
    var u = qt;
    return (
      (u = tc(t, t === ie ? u : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      u === 0
        ? null
        : (i(t, u, e), aA(t, rl()), t.callbackNode != null && t.callbackNode === n ? nA.bind(null, t) : null)
    );
  }
  function uA(t, e) {
    if (vf()) return null;
    i(t, e, !0);
  }
  function Ty() {
    jy(function () {
      (Wt & 6) !== 0 ? gl(ns, My) : lA();
    });
  }
  function Gm() {
    if (Ki === 0) {
      var t = Mn;
      (t === 0 && ((t = ki), (ki <<= 1), (ki & 261888) === 0 && (ki = 256)), (Ki = t));
    }
    return Ki;
  }
  function iA(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : cc("" + t);
  }
  function cA(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Dy(t, e, n, u, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = iA((s[dl] || null).action),
        p = u.submitter;
      p &&
        ((e = (e = p[dl] || null) ? iA(e.formAction) : p.getAttribute("formAction")),
        e !== null && ((o = e), (p = null)));
      var b = new rc("action", "action", null, u, s);
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Ki !== 0) {
                  var O = p ? cA(s, p) : new FormData(s);
                  qo(n, { pending: !0, data: O, method: s.method, action: o }, null, O);
                }
              } else
                typeof o == "function" &&
                  (b.preventDefault(),
                  (O = p ? cA(s, p) : new FormData(s)),
                  qo(n, { pending: !0, data: O, method: s.method, action: o }, o, O));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Om = 0; Om < Us.length; Om++) {
    var _m = Us[Om],
      Ry = _m.toLowerCase(),
      Hy = _m[0].toUpperCase() + _m.slice(1);
    hl(Ry, "on" + Hy);
  }
  (hl(Ul, "onAnimationEnd"),
    hl(no, "onAnimationIteration"),
    hl(Va, "onAnimationStart"),
    hl("dblclick", "onDoubleClick"),
    hl("focusin", "onFocus"),
    hl("focusout", "onBlur"),
    hl(Bi, "onTransitionRun"),
    hl(Pn, "onTransitionStart"),
    hl(uo, "onTransitionCancel"),
    hl(_s, "onTransitionEnd"),
    Kn("onMouseEnter", ["mouseout", "mouseover"]),
    Kn("onMouseLeave", ["mouseout", "mouseover"]),
    Kn("onPointerEnter", ["pointerout", "pointerover"]),
    Kn("onPointerLeave", ["pointerout", "pointerover"]),
    An("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    An("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    An("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    An("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    An("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")));
  var tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Gy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tr));
  function sA(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var u = t[n],
        s = u.event;
      u = u.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var p = u.length - 1; 0 <= p; p--) {
            var b = u[p],
              O = b.instance,
              Y = b.currentTarget;
            if (((b = b.listener), O !== o && s.isPropagationStopped())) break t;
            ((o = b), (s.currentTarget = Y));
            try {
              o(s);
            } catch (P) {
              kn(P);
            }
            ((s.currentTarget = null), (o = O));
          }
        else
          for (p = 0; p < u.length; p++) {
            if (
              ((b = u[p]),
              (O = b.instance),
              (Y = b.currentTarget),
              (b = b.listener),
              O !== o && s.isPropagationStopped())
            )
              break t;
            ((o = b), (s.currentTarget = Y));
            try {
              o(s);
            } catch (P) {
              kn(P);
            }
            ((s.currentTarget = null), (o = O));
          }
      }
    }
  }
  function Vt(t, e) {
    var n = e[os];
    n === void 0 && (n = e[os] = new Set());
    var u = t + "__bubble";
    n.has(u) || (fA(e, t, 2, !1), n.add(u));
  }
  function Um(t, e, n) {
    var u = 0;
    (e && (u |= 4), fA(n, t, u, e));
  }
  var Nd = "_reactListening" + Math.random().toString(36).slice(2);
  function Nm(t) {
    if (!t[Nd]) {
      ((t[Nd] = !0),
        qa.forEach(function (n) {
          n !== "selectionchange" && (Gy.has(n) || Um(n, !1, t), Um(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Nd] || ((e[Nd] = !0), Um("selectionchange", !1, e));
    }
  }
  function fA(t, e, n, u) {
    switch (jA(e)) {
      case 2:
        var s = n0;
        break;
      case 8:
        s = u0;
        break;
      default:
        s = wm;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !ps || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (s = !0),
      u
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function zm(t, e, n, u, s) {
    var o = u;
    if ((e & 1) === 0 && (e & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var p = u.tag;
        if (p === 3 || p === 4) {
          var b = u.stateNode.containerInfo;
          if (b === s) break;
          if (p === 4)
            for (p = u.return; p !== null;) {
              var O = p.tag;
              if ((O === 3 || O === 4) && p.stateNode.containerInfo === s) return;
              p = p.return;
            }
          for (; b !== null;) {
            if (((p = Fe(b)), p === null)) return;
            if (((O = p.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              u = o = p;
              continue t;
            }
            b = b.parentNode;
          }
        }
        u = u.return;
      }
    Kf(function () {
      var Y = o,
        P = vs(n),
        tt = [];
      t: {
        var Z = pn.get(t);
        if (Z !== void 0) {
          var V = rc,
            pt = t;
          switch (t) {
            case "keypress":
              if (Du(n) === 0) break t;
            case "keydown":
            case "keyup":
              V = Vf;
              break;
            case "focusin":
              ((pt = "focus"), (V = gs));
              break;
            case "focusout":
              ((pt = "blur"), (V = gs));
              break;
            case "beforeblur":
            case "afterblur":
              V = gs;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Ur;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Nr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = vn;
              break;
            case Ul:
            case no:
            case Va:
              V = xr;
              break;
            case _s:
              V = Bm;
              break;
            case "scroll":
            case "scrollend":
              V = Cs;
              break;
            case "wheel":
              V = Zn;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Yf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = bs;
              break;
            case "toggle":
            case "beforetoggle":
              V = wf;
          }
          var Rt = (e & 4) !== 0,
            Be = !Rt && (t === "scroll" || t === "scrollend"),
            J = Rt ? (Z !== null ? Z + "Capture" : null) : Z;
          Rt = [];
          for (var _ = Y, L; _ !== null;) {
            var $ = _;
            if (
              ((L = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                L === null ||
                J === null ||
                (($ = Tu(_, J)), $ != null && Rt.push(er(_, $, L))),
              Be)
            )
              break;
            _ = _.return;
          }
          0 < Rt.length && ((Z = new V(Z, pt, null, n, P)), tt.push({ event: Z, listeners: Rt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((Z = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            Z && n !== sc && (pt = n.relatedTarget || n.fromElement) && (Fe(pt) || pt[Qn]))
          )
            break t;
          if (
            (V || Z) &&
            ((Z = P.window === P ? P : (Z = P.ownerDocument) ? Z.defaultView || Z.parentWindow : window),
            V
              ? ((pt = n.relatedTarget || n.toElement),
                (V = Y),
                (pt = pt ? Fe(pt) : null),
                pt !== null &&
                  ((Be = y(pt)), (Rt = pt.tag), pt !== Be || (Rt !== 5 && Rt !== 27 && Rt !== 6)) &&
                  (pt = null))
              : ((V = null), (pt = Y)),
            V !== pt)
          ) {
            if (
              ((Rt = Ur),
              ($ = "onMouseLeave"),
              (J = "onMouseEnter"),
              (_ = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((Rt = bs), ($ = "onPointerLeave"), (J = "onPointerEnter"), (_ = "pointer")),
              (Be = V == null ? Z : mn(V)),
              (L = pt == null ? Z : mn(pt)),
              (Z = new Rt($, _ + "leave", V, n, P)),
              (Z.target = Be),
              (Z.relatedTarget = L),
              ($ = null),
              Fe(P) === Y &&
                ((Rt = new Rt(J, _ + "enter", pt, n, P)), (Rt.target = L), (Rt.relatedTarget = Be), ($ = Rt)),
              (Be = $),
              V && pt)
            )
              e: {
                for (Rt = Oy, J = V, _ = pt, L = 0, $ = J; $; $ = Rt($)) L++;
                $ = 0;
                for (var Mt = _; Mt; Mt = Rt(Mt)) $++;
                for (; 0 < L - $;) ((J = Rt(J)), L--);
                for (; 0 < $ - L;) ((_ = Rt(_)), $--);
                for (; L--;) {
                  if (J === _ || (_ !== null && J === _.alternate)) {
                    Rt = J;
                    break e;
                  }
                  ((J = Rt(J)), (_ = Rt(_)));
                }
                Rt = null;
              }
            else Rt = null;
            (V !== null && oA(tt, Z, V, Rt, !1), pt !== null && Be !== null && oA(tt, Be, pt, Rt, !0));
          }
        }
        t: {
          if (
            ((Z = Y ? mn(Y) : window),
            (V = Z.nodeName && Z.nodeName.toLowerCase()),
            V === "select" || (V === "input" && Z.type === "file"))
          )
            var se = to;
          else if (kf(Z))
            if (yc) se = Ir;
            else {
              se = In;
              var Bt = pc;
            }
          else
            ((V = Z.nodeName),
              !V || V.toLowerCase() !== "input" || (Z.type !== "checkbox" && Z.type !== "radio")
                ? Y && ic(Y.elementType) && (se = to)
                : (se = Vr));
          if (se && (se = se(t, Y))) {
            Ds(tt, se, n, P);
            break t;
          }
          (Bt && Bt(t, Z, Y),
            t === "focusout" && Y && Z.type === "number" && Y.memoizedProps.value != null && hs(Z, "number", Z.value));
        }
        switch (((Bt = Y ? mn(Y) : window), t)) {
          case "focusin":
            (kf(Bt) || Bt.contentEditable === "true") && ((vi = Bt), (Gs = Y), (yi = null));
            break;
          case "focusout":
            yi = Gs = vi = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((wl = !1), Os(tt, n, P));
            break;
          case "selectionchange":
            if (wr) break;
          case "keydown":
          case "keyup":
            Os(tt, n, P);
        }
        var Kt;
        if (Ru)
          t: {
            switch (t) {
              case "compositionstart":
                var kt = "onCompositionStart";
                break t;
              case "compositionend":
                kt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                kt = "onCompositionUpdate";
                break t;
            }
            kt = void 0;
          }
        else
          Vn
            ? Ms(t, n) && (kt = "onCompositionEnd")
            : t === "keydown" && n.keyCode === 229 && (kt = "onCompositionStart");
        (kt &&
          (ll &&
            n.locale !== "ko" &&
            (Vn || kt !== "onCompositionStart"
              ? kt === "onCompositionEnd" && Vn && (Kt = Es())
              : ((Yn = P), (Bs = "value" in Yn ? Yn.value : Yn.textContent), (Vn = !0))),
          (Bt = zd(Y, kt)),
          0 < Bt.length &&
            ((kt = new Xf(kt, t, null, n, P)),
            tt.push({ event: kt, listeners: Bt }),
            Kt ? (kt.data = Kt) : ((Kt = oi(n)), Kt !== null && (kt.data = Kt)))),
          (Kt = Hu ? Ts(t, n) : qr(t, n)) &&
            ((kt = zd(Y, "onBeforeInput")),
            0 < kt.length &&
              ((Bt = new Xf("onBeforeInput", "beforeinput", null, n, P)),
              tt.push({ event: Bt, listeners: kt }),
              (Bt.data = Kt))),
          Dy(tt, t, Y, n, P));
      }
      sA(tt, e);
    });
  }
  function er(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function zd(t, e) {
    for (var n = e + "Capture", u = []; t !== null;) {
      var s = t,
        o = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = Tu(t, n)), s != null && u.unshift(er(t, s, o)), (s = Tu(t, e)), s != null && u.push(er(t, s, o))),
        t.tag === 3)
      )
        return u;
      t = t.return;
    }
    return [];
  }
  function Oy(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function oA(t, e, n, u, s) {
    for (var o = e._reactName, p = []; n !== null && n !== u;) {
      var b = n,
        O = b.alternate,
        Y = b.stateNode;
      if (((b = b.tag), O !== null && O === u)) break;
      ((b !== 5 && b !== 26 && b !== 27) ||
        Y === null ||
        ((O = Y),
        s
          ? ((Y = Tu(n, o)), Y != null && p.unshift(er(n, Y, O)))
          : s || ((Y = Tu(n, o)), Y != null && p.push(er(n, Y, O)))),
        (n = n.return));
    }
    p.length !== 0 && t.push({ event: e, listeners: p });
  }
  var _y = /\r\n?/g,
    Uy = /\u0000|\uFFFD/g;
  function rA(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        _y,
        `
`,
      )
      .replace(Uy, "");
  }
  function dA(t, e) {
    return ((e = rA(e)), rA(t) === e);
  }
  function pe(t, e, n, u, s, o) {
    switch (n) {
      case "children":
        typeof u == "string"
          ? e === "body" || (e === "textarea" && u === "") || bu(t, u)
          : (typeof u == "number" || typeof u == "bigint") && e !== "body" && bu(t, "" + u);
        break;
      case "className":
        nc(t, "class", u);
        break;
      case "tabIndex":
        nc(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        nc(t, n, u);
        break;
      case "style":
        jf(t, u, o);
        break;
      case "data":
        if (e !== "object") {
          nc(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((u = cc("" + u)), t.setAttribute(n, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && pe(t, e, "name", s.name, s, null),
                pe(t, e, "formEncType", s.formEncType, s, null),
                pe(t, e, "formMethod", s.formMethod, s, null),
                pe(t, e, "formTarget", s.formTarget, s, null))
              : (pe(t, e, "encType", s.encType, s, null),
                pe(t, e, "method", s.method, s, null),
                pe(t, e, "target", s.target, s, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((u = cc("" + u)), t.setAttribute(n, u));
        break;
      case "onClick":
        u != null && (t.onclick = Za);
        break;
      case "onScroll":
        u != null && Vt("scroll", t);
        break;
      case "onScrollEnd":
        u != null && Vt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((n = u.__html), n != null)) {
            if (s.children != null) throw Error(h(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = cc("" + u)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(n, "" + u) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        u === !0
          ? t.setAttribute(n, "")
          : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol"
            ? t.setAttribute(n, u)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u
          ? t.setAttribute(n, u)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? t.removeAttribute(n)
          : t.setAttribute(n, u);
        break;
      case "popover":
        (Vt("beforetoggle", t), Vt("toggle", t), ac(t, "popover", u));
        break;
      case "xlinkActuate":
        Ma(t, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ma(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ma(t, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ma(t, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ma(t, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ma(t, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ma(t, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ma(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ma(t, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        ac(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Or.get(n) || n), ac(t, n, u));
    }
  }
  function Jm(t, e, n, u, s, o) {
    switch (n) {
      case "style":
        jf(t, u, o);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((n = u.__html), n != null)) {
            if (s.children != null) throw Error(h(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof u == "string" ? bu(t, u) : (typeof u == "number" || typeof u == "bigint") && bu(t, "" + u);
        break;
      case "onScroll":
        u != null && Vt("scroll", t);
        break;
      case "onScrollEnd":
        u != null && Vt("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = Za);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!lc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (o = t[dl] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, s),
              typeof u == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in t ? (t[n] = null) : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, u, s));
              break t;
            }
            n in t ? (t[n] = u) : u === !0 ? t.setAttribute(n, "") : ac(t, n, u);
          }
    }
  }
  function _l(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Vt("error", t), Vt("load", t));
        var u = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var p = n[o];
            if (p != null)
              switch (o) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, e));
                default:
                  pe(t, e, o, p, n, null);
              }
          }
        (s && pe(t, e, "srcSet", n.srcSet, n, null), u && pe(t, e, "src", n.src, n, null));
        return;
      case "input":
        Vt("invalid", t);
        var b = (o = p = s = null),
          O = null,
          Y = null;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var P = n[u];
            if (P != null)
              switch (u) {
                case "name":
                  s = P;
                  break;
                case "type":
                  p = P;
                  break;
                case "checked":
                  O = P;
                  break;
                case "defaultChecked":
                  Y = P;
                  break;
                case "value":
                  o = P;
                  break;
                case "defaultValue":
                  b = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null) throw Error(h(137, e));
                  break;
                default:
                  pe(t, e, u, P, n, null);
              }
          }
        Jf(t, o, b, O, Y, p, s, !1);
        return;
      case "select":
        (Vt("invalid", t), (u = p = o = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((b = n[s]), b != null))
            switch (s) {
              case "value":
                o = b;
                break;
              case "defaultValue":
                p = b;
                break;
              case "multiple":
                u = b;
              default:
                pe(t, e, s, b, n, null);
            }
        ((e = o), (n = p), (t.multiple = !!u), e != null ? si(t, !!u, e, !1) : n != null && si(t, !!u, n, !0));
        return;
      case "textarea":
        (Vt("invalid", t), (o = s = u = null));
        for (p in n)
          if (n.hasOwnProperty(p) && ((b = n[p]), b != null))
            switch (p) {
              case "value":
                u = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "children":
                o = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(h(91));
                break;
              default:
                pe(t, e, p, b, n, null);
            }
        gu(t, u, s, o);
        return;
      case "option":
        for (O in n)
          if (n.hasOwnProperty(O) && ((u = n[O]), u != null))
            switch (O) {
              case "selected":
                t.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                pe(t, e, O, u, n, null);
            }
        return;
      case "dialog":
        (Vt("beforetoggle", t), Vt("toggle", t), Vt("cancel", t), Vt("close", t));
        break;
      case "iframe":
      case "object":
        Vt("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < tr.length; u++) Vt(tr[u], t);
        break;
      case "image":
        (Vt("error", t), Vt("load", t));
        break;
      case "details":
        Vt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Vt("error", t), Vt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Y in n)
          if (n.hasOwnProperty(Y) && ((u = n[Y]), u != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, e));
              default:
                pe(t, e, Y, u, n, null);
            }
        return;
      default:
        if (ic(e)) {
          for (P in n) n.hasOwnProperty(P) && ((u = n[P]), u !== void 0 && Jm(t, e, P, u, n, void 0));
          return;
        }
    }
    for (b in n) n.hasOwnProperty(b) && ((u = n[b]), u != null && pe(t, e, b, u, n, null));
  }
  function Ny(t, e, n, u) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          o = null,
          p = null,
          b = null,
          O = null,
          Y = null,
          P = null;
        for (V in n) {
          var tt = n[V];
          if (n.hasOwnProperty(V) && tt != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = tt;
              default:
                u.hasOwnProperty(V) || pe(t, e, V, null, u, tt);
            }
        }
        for (var Z in u) {
          var V = u[Z];
          if (((tt = n[Z]), u.hasOwnProperty(Z) && (V != null || tt != null)))
            switch (Z) {
              case "type":
                o = V;
                break;
              case "name":
                s = V;
                break;
              case "checked":
                Y = V;
                break;
              case "defaultChecked":
                P = V;
                break;
              case "value":
                p = V;
                break;
              case "defaultValue":
                b = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(h(137, e));
                break;
              default:
                V !== tt && pe(t, e, Z, V, u, tt);
            }
        }
        ms(t, p, b, O, Y, P, o, s);
        return;
      case "select":
        V = p = b = Z = null;
        for (o in n)
          if (((O = n[o]), n.hasOwnProperty(o) && O != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                V = O;
              default:
                u.hasOwnProperty(o) || pe(t, e, o, null, u, O);
            }
        for (s in u)
          if (((o = u[s]), (O = n[s]), u.hasOwnProperty(s) && (o != null || O != null)))
            switch (s) {
              case "value":
                Z = o;
                break;
              case "defaultValue":
                b = o;
                break;
              case "multiple":
                p = o;
              default:
                o !== O && pe(t, e, s, o, u, O);
            }
        ((e = b),
          (n = p),
          (u = V),
          Z != null ? si(t, !!n, Z, !1) : !!u != !!n && (e != null ? si(t, !!n, e, !0) : si(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        V = Z = null;
        for (b in n)
          if (((s = n[b]), n.hasOwnProperty(b) && s != null && !u.hasOwnProperty(b)))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                pe(t, e, b, null, u, s);
            }
        for (p in u)
          if (((s = u[p]), (o = n[p]), u.hasOwnProperty(p) && (s != null || o != null)))
            switch (p) {
              case "value":
                Z = s;
                break;
              case "defaultValue":
                V = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(h(91));
                break;
              default:
                s !== o && pe(t, e, p, s, u, o);
            }
        xf(t, Z, V);
        return;
      case "option":
        for (var pt in n)
          if (((Z = n[pt]), n.hasOwnProperty(pt) && Z != null && !u.hasOwnProperty(pt)))
            switch (pt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                pe(t, e, pt, null, u, Z);
            }
        for (O in u)
          if (((Z = u[O]), (V = n[O]), u.hasOwnProperty(O) && Z !== V && (Z != null || V != null)))
            switch (O) {
              case "selected":
                t.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                pe(t, e, O, Z, u, V);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Rt in n)
          ((Z = n[Rt]), n.hasOwnProperty(Rt) && Z != null && !u.hasOwnProperty(Rt) && pe(t, e, Rt, null, u, Z));
        for (Y in u)
          if (((Z = u[Y]), (V = n[Y]), u.hasOwnProperty(Y) && Z !== V && (Z != null || V != null)))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null) throw Error(h(137, e));
                break;
              default:
                pe(t, e, Y, Z, u, V);
            }
        return;
      default:
        if (ic(e)) {
          for (var Be in n)
            ((Z = n[Be]), n.hasOwnProperty(Be) && Z !== void 0 && !u.hasOwnProperty(Be) && Jm(t, e, Be, void 0, u, Z));
          for (P in u)
            ((Z = u[P]),
              (V = n[P]),
              !u.hasOwnProperty(P) || Z === V || (Z === void 0 && V === void 0) || Jm(t, e, P, Z, u, V));
          return;
        }
    }
    for (var J in n) ((Z = n[J]), n.hasOwnProperty(J) && Z != null && !u.hasOwnProperty(J) && pe(t, e, J, null, u, Z));
    for (tt in u)
      ((Z = u[tt]), (V = n[tt]), !u.hasOwnProperty(tt) || Z === V || (Z == null && V == null) || pe(t, e, tt, Z, u, V));
  }
  function mA(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function zy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), u = 0; u < n.length; u++) {
        var s = n[u],
          o = s.transferSize,
          p = s.initiatorType,
          b = s.duration;
        if (o && b && mA(p)) {
          for (p = 0, b = s.responseEnd, u += 1; u < n.length; u++) {
            var O = n[u],
              Y = O.startTime;
            if (Y > b) break;
            var P = O.transferSize,
              tt = O.initiatorType;
            P && mA(tt) && ((O = O.responseEnd), (p += P * (O < b ? 1 : (b - Y) / (O - Y))));
          }
          if ((--u, (e += (8 * (o + p)) / (s.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number") ? t : 5;
  }
  var xm = null,
    jm = null;
  function Jd(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function hA(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function AA(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Qm(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Km = null;
  function Jy() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === Km ? !1 : ((Km = t), !0)) : ((Km = null), !1);
  }
  var vA = typeof setTimeout == "function" ? setTimeout : void 0,
    xy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yA = typeof Promise == "function" ? Promise : void 0,
    jy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof yA < "u"
          ? function (t) {
              return yA.resolve(null).then(t).catch(Qy);
            }
          : vA;
  function Qy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Li(t) {
    return t === "head";
  }
  function pA(t, e) {
    var n = e,
      u = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (u === 0) {
            (t.removeChild(s), Cf(e));
            return;
          }
          u--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") u++;
        else if (n === "html") lr(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), lr(n));
          for (var o = n.firstChild; o;) {
            var p = o.nextSibling,
              b = o.nodeName;
            (o[Su] ||
              b === "SCRIPT" ||
              b === "STYLE" ||
              (b === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = p));
          }
        } else n === "body" && lr(t.ownerDocument.body);
      n = s;
    } while (n);
    Cf(e);
  }
  function BA(t, e) {
    var n = t;
    t = 0;
    do {
      var u = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display), (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e ? ((n._stashedText = n.nodeValue), (n.nodeValue = "")) : (n.nodeValue = n._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((n = u.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = u;
    } while (n);
  }
  function Lm(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Lm(n), ec(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Ky(t, e, n, u) {
    for (; t.nodeType === 1;) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (u) {
        if (!t[Su])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (((o = t.getAttribute("rel")), o === "stylesheet" && t.hasAttribute("data-precedence"))) break;
              if (
                o !== s.rel ||
                t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = fn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ly(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n) ||
        ((t = fn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function EA(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e) ||
        ((t = fn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ym(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Xm(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
  }
  function Yy(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var u = function () {
        (e(), n.removeEventListener("DOMContentLoaded", u));
      };
      (n.addEventListener("DOMContentLoaded", u), (t._reactRetry = u));
    }
  }
  function fn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (((e = t.data), e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F"))
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var qm = null;
  function CA(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return fn(t.nextSibling);
          e--;
        } else (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function SA(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function gA(t, e, n) {
    switch (((e = Jd(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(h(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(h(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(h(454));
        return t;
      default:
        throw Error(h(451));
    }
  }
  function lr(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    ec(t);
  }
  var on = new Map(),
    bA = new Set();
  function xd(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ku = N.d;
  N.d = { f: Xy, r: qy, D: Zy, C: Fy, L: Vy, m: Iy, X: Wy, S: wy, M: Py };
  function Xy() {
    var t = ku.f(),
      e = M();
    return t || e;
  }
  function qy(t) {
    var e = Ce(t);
    e !== null && e.tag === 5 && e.type === "form" ? Zo(e) : ku.r(t);
  }
  var pf = typeof document > "u" ? null : document;
  function MA(t, e, n) {
    var u = pf;
    if (u && typeof e == "string" && e) {
      var s = Vl(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        bA.has(s) ||
          (bA.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          u.querySelector(s) === null &&
            ((e = u.createElement("link")), _l(e, "link", t), Ye(e), u.head.appendChild(e))));
    }
  }
  function Zy(t) {
    (ku.D(t), MA("dns-prefetch", t, null));
  }
  function Fy(t, e) {
    (ku.C(t, e), MA("preconnect", t, e));
  }
  function Vy(t, e, n) {
    ku.L(t, e, n);
    var u = pf;
    if (u && t && e) {
      var s = 'link[rel="preload"][as="' + Vl(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Vl(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" && (s += '[imagesizes="' + Vl(n.imageSizes) + '"]'))
        : (s += '[href="' + Vl(t) + '"]');
      var o = s;
      switch (e) {
        case "style":
          o = Bf(t);
          break;
        case "script":
          o = Ef(t);
      }
      on.has(o) ||
        ((t = g({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n)),
        on.set(o, t),
        u.querySelector(s) !== null ||
          (e === "style" && u.querySelector(ar(o))) ||
          (e === "script" && u.querySelector(nr(o))) ||
          ((e = u.createElement("link")), _l(e, "link", t), Ye(e), u.head.appendChild(e)));
    }
  }
  function Iy(t, e) {
    ku.m(t, e);
    var n = pf;
    if (n && t) {
      var u = e && typeof e.as == "string" ? e.as : "script",
        s = 'link[rel="modulepreload"][as="' + Vl(u) + '"][href="' + Vl(t) + '"]',
        o = s;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Ef(t);
      }
      if (!on.has(o) && ((t = g({ rel: "modulepreload", href: t }, e)), on.set(o, t), n.querySelector(s) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(nr(o))) return;
        }
        ((u = n.createElement("link")), _l(u, "link", t), Ye(u), n.head.appendChild(u));
      }
    }
  }
  function wy(t, e, n) {
    ku.S(t, e, n);
    var u = pf;
    if (u && t) {
      var s = hn(u).hoistableStyles,
        o = Bf(t);
      e = e || "default";
      var p = s.get(o);
      if (!p) {
        var b = { loading: 0, preload: null };
        if ((p = u.querySelector(ar(o)))) b.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)), (n = on.get(o)) && Zm(t, n));
          var O = (p = u.createElement("link"));
          (Ye(O),
            _l(O, "link", t),
            (O._p = new Promise(function (Y, P) {
              ((O.onload = Y), (O.onerror = P));
            })),
            O.addEventListener("load", function () {
              b.loading |= 1;
            }),
            O.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            jd(p, e, u));
        }
        ((p = { type: "stylesheet", instance: p, count: 1, state: b }), s.set(o, p));
      }
    }
  }
  function Wy(t, e) {
    ku.X(t, e);
    var n = pf;
    if (n && t) {
      var u = hn(n).hoistableScripts,
        s = Ef(t),
        o = u.get(s);
      o ||
        ((o = n.querySelector(nr(s))),
        o ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = on.get(s)) && Fm(t, e),
          (o = n.createElement("script")),
          Ye(o),
          _l(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        u.set(s, o));
    }
  }
  function Py(t, e) {
    ku.M(t, e);
    var n = pf;
    if (n && t) {
      var u = hn(n).hoistableScripts,
        s = Ef(t),
        o = u.get(s);
      o ||
        ((o = n.querySelector(nr(s))),
        o ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = on.get(s)) && Fm(t, e),
          (o = n.createElement("script")),
          Ye(o),
          _l(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        u.set(s, o));
    }
  }
  function TA(t, e, n, u) {
    var s = (s = _t.current) ? xd(s) : null;
    if (!s) throw Error(h(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Bf(n.href)),
            (n = hn(s).hoistableStyles),
            (u = n.get(e)),
            u || ((u = { type: "style", instance: null, count: 0, state: null }), n.set(e, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Bf(n.href);
          var o = hn(s).hoistableStyles,
            p = o.get(t);
          if (
            (p ||
              ((s = s.ownerDocument || s),
              (p = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
              o.set(t, p),
              (o = s.querySelector(ar(t))) && !o._p && ((p.instance = o), (p.state.loading = 5)),
              on.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                on.set(t, n),
                o || ky(s, t, n, p.state))),
            e && u === null)
          )
            throw Error(h(528, ""));
          return p;
        }
        if (e && u !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = Ef(n)),
              (n = hn(s).hoistableScripts),
              (u = n.get(e)),
              u || ((u = { type: "script", instance: null, count: 0, state: null }), n.set(e, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, t));
    }
  }
  function Bf(t) {
    return 'href="' + Vl(t) + '"';
  }
  function ar(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function DA(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function ky(t, e, n, u) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (u.loading = 1)
      : ((e = t.createElement("link")),
        (u.preload = e),
        e.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        _l(e, "link", n),
        Ye(e),
        t.head.appendChild(e));
  }
  function Ef(t) {
    return '[src="' + Vl(t) + '"]';
  }
  function nr(t) {
    return "script[async]" + t;
  }
  function RA(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var u = t.querySelector('style[data-href~="' + Vl(n.href) + '"]');
          if (u) return ((e.instance = u), Ye(u), u);
          var s = g({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
          return (
            (u = (t.ownerDocument || t).createElement("style")),
            Ye(u),
            _l(u, "style", s),
            jd(u, n.precedence, t),
            (e.instance = u)
          );
        case "stylesheet":
          s = Bf(n.href);
          var o = t.querySelector(ar(s));
          if (o) return ((e.state.loading |= 4), (e.instance = o), Ye(o), o);
          ((u = DA(n)), (s = on.get(s)) && Zm(u, s), (o = (t.ownerDocument || t).createElement("link")), Ye(o));
          var p = o;
          return (
            (p._p = new Promise(function (b, O) {
              ((p.onload = b), (p.onerror = O));
            })),
            _l(o, "link", u),
            (e.state.loading |= 4),
            jd(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = Ef(n.src)),
            (s = t.querySelector(nr(o)))
              ? ((e.instance = s), Ye(s), s)
              : ((u = n),
                (s = on.get(o)) && ((u = g({}, n)), Fm(u, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Ye(s),
                _l(s, "link", u),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((u = e.instance), (e.state.loading |= 4), jd(u, n.precedence, t));
    return e.instance;
  }
  function jd(t, e, n) {
    for (
      var u = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        s = u.length ? u[u.length - 1] : null,
        o = s,
        p = 0;
      p < u.length;
      p++
    ) {
      var b = u[p];
      if (b.dataset.precedence === e) o = b;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Zm(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Fm(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Qd = null;
  function HA(t, e, n) {
    if (Qd === null) {
      var u = new Map(),
        s = (Qd = new Map());
      s.set(n, u);
    } else ((s = Qd), (u = s.get(n)), u || ((u = new Map()), s.set(n, u)));
    if (u.has(t)) return u;
    for (u.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var o = n[s];
      if (
        !(o[Su] || o[Yt] || (t === "link" && o.getAttribute("rel") === "stylesheet")) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = o.getAttribute(e) || "";
        p = t + p;
        var b = u.get(p);
        b ? b.push(o) : u.set(p, [o]);
      }
    }
    return u;
  }
  function GA(t, e, n) {
    ((t = t.ownerDocument || t), t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null));
  }
  function $y(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return ((t = e.disabled), typeof e.precedence == "string" && t == null);
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function OA(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function t0(t, e, n, u) {
    if (
      n.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = Bf(u.href),
          o = e.querySelector(ar(s));
        if (o) {
          ((e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Kd.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = o),
            Ye(o));
          return;
        }
        ((o = e.ownerDocument || e), (u = DA(u)), (s = on.get(s)) && Zm(u, s), (o = o.createElement("link")), Ye(o));
        var p = o;
        ((p._p = new Promise(function (b, O) {
          ((p.onload = b), (p.onerror = O));
        })),
          _l(o, "link", u),
          (n.instance = o));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++, (n = Kd.bind(t)), e.addEventListener("load", n), e.addEventListener("error", n)));
    }
  }
  var Vm = 0;
  function e0(t, e) {
    return (
      t.stylesheets && t.count === 0 && Yd(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var u = setTimeout(function () {
              if ((t.stylesheets && Yd(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Vm === 0 && (Vm = 62500 * zy());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1), t.count === 0 && (t.stylesheets && Yd(t, t.stylesheets), t.unsuspend))
                ) {
                  var o = t.unsuspend;
                  ((t.unsuspend = null), o());
                }
              },
              (t.imgBytes > Vm ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(u), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function Kd() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Yd(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Ld = null;
  function Yd(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null && (t.count++, (Ld = new Map()), e.forEach(l0, t), (Ld = null), Kd.call(t)));
  }
  function l0(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ld.get(t);
      if (n) var u = n.get(null);
      else {
        ((n = new Map()), Ld.set(t, n));
        for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < s.length; o++) {
          var p = s[o];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), (u = p));
        }
        u && n.set(null, u);
      }
      ((s = e.instance),
        (p = s.getAttribute("data-precedence")),
        (o = n.get(p) || u),
        o === u && n.set(null, s),
        n.set(p, s),
        this.count++,
        (u = Kd.bind(this)),
        s.addEventListener("load", u),
        s.addEventListener("error", u),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var ur = { $$typeof: nt, Provider: null, Consumer: null, _currentValue: I, _currentValue2: I, _threadCount: 0 };
  function a0(t, e, n, u, s, o, p, b, O) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ui(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ui(0)),
      (this.hiddenUpdates = ui(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = O),
      (this.incompleteTransitions = new Map()));
  }
  function _A(t, e, n, u, s, o, p, b, O, Y, P, tt) {
    return (
      (t = new a0(t, e, n, p, O, Y, P, tt, b)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Tl(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = mo()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: u, isDehydrated: n, cache: e }),
      Bo(o),
      t
    );
  }
  function UA(t) {
    return t ? ((t = eu), t) : eu;
  }
  function NA(t, e, n, u, s, o) {
    ((s = UA(s)),
      u.context === null ? (u.context = s) : (u.pendingContext = s),
      (u = $a(e)),
      (u.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (u.callback = o),
      (n = Tn(t, u, e)),
      n !== null && (a(n, t, e), fu(n, t, e)));
  }
  function zA(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Im(t, e) {
    (zA(t, e), (t = t.alternate) && zA(t, e));
  }
  function JA(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = tu(t, 67108864);
      (e !== null && a(e, t, 67108864), Im(t, 67108864));
    }
  }
  function xA(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ol();
      e = Ya(e);
      var n = tu(t, e);
      (n !== null && a(n, t, e), Im(t, e));
    }
  }
  var Xd = !0;
  function n0(t, e, n, u) {
    var s = R.T;
    R.T = null;
    var o = N.p;
    try {
      ((N.p = 2), wm(t, e, n, u));
    } finally {
      ((N.p = o), (R.T = s));
    }
  }
  function u0(t, e, n, u) {
    var s = R.T;
    R.T = null;
    var o = N.p;
    try {
      ((N.p = 8), wm(t, e, n, u));
    } finally {
      ((N.p = o), (R.T = s));
    }
  }
  function wm(t, e, n, u) {
    if (Xd) {
      var s = Wm(u);
      if (s === null) (zm(t, e, u, qd, n), QA(t, u));
      else if (c0(s, t, e, n, u)) u.stopPropagation();
      else if ((QA(t, u), e & 4 && -1 < i0.indexOf(t))) {
        for (; s !== null;) {
          var o = Ce(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var p = La(o.pendingLanes);
                  if (p !== 0) {
                    var b = o;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; p;) {
                      var O = 1 << (31 - bl(p));
                      ((b.entanglements[1] |= O), (p &= ~O));
                    }
                    (pu(o), (Wt & 6) === 0 && ((fa = rl() + 500), $o(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((b = tu(o, 2)), b !== null && a(b, o, 2), M(), Im(o, 2));
            }
          if (((o = Wm(u)), o === null && zm(t, e, u, qd, n), o === s)) break;
          s = o;
        }
        s !== null && u.stopPropagation();
      } else zm(t, e, u, null, n);
    }
  }
  function Wm(t) {
    return ((t = vs(t)), Pm(t));
  }
  var qd = null;
  function Pm(t) {
    if (((qd = null), (t = Fe(t)), t !== null)) {
      var e = y(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = E(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((qd = t), null);
  }
  function jA(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (as()) {
          case ns:
            return 2;
          case da:
            return 8;
          case us:
          case Cr:
            return 32;
          case Sr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var km = !1,
    Yi = null,
    Xi = null,
    qi = null,
    ir = new Map(),
    cr = new Map(),
    Zi = [],
    i0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function QA(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Yi = null;
        break;
      case "dragenter":
      case "dragleave":
        Xi = null;
        break;
      case "mouseover":
      case "mouseout":
        qi = null;
        break;
      case "pointerover":
      case "pointerout":
        ir.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cr.delete(e.pointerId);
    }
  }
  function sr(t, e, n, u, s, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = { blockedOn: e, domEventName: n, eventSystemFlags: u, nativeEvent: o, targetContainers: [s] }),
        e !== null && ((e = Ce(e)), e !== null && JA(e)),
        t)
      : ((t.eventSystemFlags |= u), (e = t.targetContainers), s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function c0(t, e, n, u, s) {
    switch (e) {
      case "focusin":
        return ((Yi = sr(Yi, t, e, n, u, s)), !0);
      case "dragenter":
        return ((Xi = sr(Xi, t, e, n, u, s)), !0);
      case "mouseover":
        return ((qi = sr(qi, t, e, n, u, s)), !0);
      case "pointerover":
        var o = s.pointerId;
        return (ir.set(o, sr(ir.get(o) || null, t, e, n, u, s)), !0);
      case "gotpointercapture":
        return ((o = s.pointerId), cr.set(o, sr(cr.get(o) || null, t, e, n, u, s)), !0);
    }
    return !1;
  }
  function KA(t) {
    var e = Fe(t.target);
    if (e !== null) {
      var n = y(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = E(n)), e !== null)) {
            ((t.blockedOn = e),
              Xa(t.priority, function () {
                xA(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = S(n)), e !== null)) {
            ((t.blockedOn = e),
              Xa(t.priority, function () {
                xA(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Zd(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var n = Wm(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var u = new n.constructor(n.type, n);
        ((sc = u), n.target.dispatchEvent(u), (sc = null));
      } else return ((e = Ce(n)), e !== null && JA(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function LA(t, e, n) {
    Zd(t) && n.delete(e);
  }
  function s0() {
    ((km = !1),
      Yi !== null && Zd(Yi) && (Yi = null),
      Xi !== null && Zd(Xi) && (Xi = null),
      qi !== null && Zd(qi) && (qi = null),
      ir.forEach(LA),
      cr.forEach(LA));
  }
  function Fd(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null), km || ((km = !0), d.unstable_scheduleCallback(d.unstable_NormalPriority, s0)));
  }
  var Vd = null;
  function YA(t) {
    Vd !== t &&
      ((Vd = t),
      d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
        Vd === t && (Vd = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            u = t[e + 1],
            s = t[e + 2];
          if (typeof u != "function") {
            if (Pm(u || n) === null) continue;
            break;
          }
          var o = Ce(n);
          o !== null && (t.splice(e, 3), (e -= 3), qo(o, { pending: !0, data: s, method: n.method, action: u }, u, s));
        }
      }));
  }
  function Cf(t) {
    function e(O) {
      return Fd(O, t);
    }
    (Yi !== null && Fd(Yi, t), Xi !== null && Fd(Xi, t), qi !== null && Fd(qi, t), ir.forEach(e), cr.forEach(e));
    for (var n = 0; n < Zi.length; n++) {
      var u = Zi[n];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < Zi.length && ((n = Zi[0]), n.blockedOn === null);) (KA(n), n.blockedOn === null && Zi.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (u = 0; u < n.length; u += 3) {
        var s = n[u],
          o = n[u + 1],
          p = s[dl] || null;
        if (typeof o == "function") p || YA(n);
        else if (p) {
          var b = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (p = o[dl] || null))) b = p.formAction;
            else if (Pm(s) !== null) continue;
          } else b = p.action;
          (typeof b == "function" ? (n[u + 1] = b) : (n.splice(u, 3), (u -= 3)), YA(n));
        }
      }
  }
  function XA() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (p) {
              return (s = p);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), u || setTimeout(n, 20));
    }
    function n() {
      if (!u && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, { state: o.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function $m(t) {
    this._internalRoot = t;
  }
  ((Id.prototype.render = $m.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(h(409));
      var n = e.current,
        u = Ol();
      NA(n, u, t, e, null, null);
    }),
    (Id.prototype.unmount = $m.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (NA(t.current, 2, null, t, null, null), M(), (e[Qn] = null));
        }
      }));
  function Id(t) {
    this._internalRoot = t;
  }
  Id.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = dn();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Zi.length && e !== 0 && e < Zi[n].priority; n++);
      (Zi.splice(n, 0, t), n === 0 && KA(t));
    }
  };
  var qA = c.version;
  if (qA !== "19.2.0") throw Error(h(527, qA, "19.2.0"));
  N.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(h(188)) : ((t = Object.keys(t).join(",")), Error(h(268, t)));
    return ((t = C(e)), (t = t !== null ? T(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var f0 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wd.isDisabled && wd.supportsFiber)
      try {
        ((ma = wd.inject(f0)), (Le = wd));
      } catch {}
  }
  return (
    (or.createRoot = function (t, e) {
      if (!A(t)) throw Error(h(299));
      var n = !1,
        u = "",
        s = Io,
        o = Dd,
        p = af;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (p = e.onRecoverableError)),
        (e = _A(t, 1, !1, null, null, n, u, null, s, o, p, XA)),
        (t[Qn] = e.current),
        Nm(t),
        new $m(e)
      );
    }),
    (or.hydrateRoot = function (t, e, n) {
      if (!A(t)) throw Error(h(299));
      var u = !1,
        s = "",
        o = Io,
        p = Dd,
        b = af,
        O = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (u = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (b = n.onRecoverableError),
          n.formState !== void 0 && (O = n.formState)),
        (e = _A(t, 1, !0, e, n ?? null, u, s, O, o, p, b, XA)),
        (e.context = UA(null)),
        (n = e.current),
        (u = Ol()),
        (u = Ya(u)),
        (s = $a(u)),
        (s.callback = null),
        Tn(n, s, u),
        (n = u),
        (e.current.lanes = n),
        ii(e, n),
        pu(e),
        (t[Qn] = e.current),
        Nm(t),
        new Id(e)
      );
    }),
    (or.version = "19.2.0"),
    or
  );
}
var nv;
function Bp() {
  if (nv) return uh.exports;
  nv = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (c) {
        console.error(c);
      }
  }
  return (d(), (uh.exports = pp()), uh.exports);
}
var Ep = Bp(),
  fh = { exports: {} },
  $u = {};
var uv;
function Cp() {
  return (
    uv ||
      ((uv = 1),
      ($u.ConcurrentRoot = 1),
      ($u.ContinuousEventPriority = 8),
      ($u.DefaultEventPriority = 32),
      ($u.DiscreteEventPriority = 2),
      ($u.IdleEventPriority = 268435456),
      ($u.LegacyRoot = 0),
      ($u.NoEventPriority = 0)),
    $u
  );
}
var iv;
function Sp() {
  return (iv || ((iv = 1), (fh.exports = Cp())), fh.exports);
}
var em = Sp(),
  oh = { exports: {} },
  rh = {},
  dh = { exports: {} },
  mh = {};
var cv;
function gp() {
  if (cv) return mh;
  cv = 1;
  var d = Df();
  function c(g, D) {
    return (g === D && (g !== 0 || 1 / g === 1 / D)) || (g !== g && D !== D);
  }
  var r = typeof Object.is == "function" ? Object.is : c,
    h = d.useState,
    A = d.useEffect,
    y = d.useLayoutEffect,
    E = d.useDebugValue;
  function S(g, D) {
    var U = D(),
      Q = h({ inst: { value: U, getSnapshot: D } }),
      W = Q[0].inst,
      w = Q[1];
    return (
      y(
        function () {
          ((W.value = U), (W.getSnapshot = D), B(W) && w({ inst: W }));
        },
        [g, U, D],
      ),
      A(
        function () {
          return (
            B(W) && w({ inst: W }),
            g(function () {
              B(W) && w({ inst: W });
            })
          );
        },
        [g],
      ),
      E(U),
      U
    );
  }
  function B(g) {
    var D = g.getSnapshot;
    g = g.value;
    try {
      var U = D();
      return !r(g, U);
    } catch {
      return !0;
    }
  }
  function C(g, D) {
    return D();
  }
  var T = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? C : S;
  return ((mh.useSyncExternalStore = d.useSyncExternalStore !== void 0 ? d.useSyncExternalStore : T), mh);
}
var sv;
function bp() {
  return (sv || ((sv = 1), (dh.exports = gp())), dh.exports);
}
var fv;
function Mp() {
  if (fv) return rh;
  fv = 1;
  var d = Df(),
    c = bp();
  function r(C, T) {
    return (C === T && (C !== 0 || 1 / C === 1 / T)) || (C !== C && T !== T);
  }
  var h = typeof Object.is == "function" ? Object.is : r,
    A = c.useSyncExternalStore,
    y = d.useRef,
    E = d.useEffect,
    S = d.useMemo,
    B = d.useDebugValue;
  return (
    (rh.useSyncExternalStoreWithSelector = function (C, T, g, D, U) {
      var Q = y(null);
      if (Q.current === null) {
        var W = { hasValue: !1, value: null };
        Q.current = W;
      } else W = Q.current;
      Q = S(
        function () {
          function j(ct) {
            if (!K) {
              if (((K = !0), (nt = ct), (ct = D(ct)), U !== void 0 && W.hasValue)) {
                var ot = W.value;
                if (U(ot, ct)) return (at = ot);
              }
              return (at = ct);
            }
            if (((ot = at), h(nt, ct))) return ot;
            var gt = D(ct);
            return U !== void 0 && U(ot, gt) ? ((nt = ct), ot) : ((nt = ct), (at = gt));
          }
          var K = !1,
            nt,
            at,
            dt = g === void 0 ? null : g;
          return [
            function () {
              return j(T());
            },
            dt === null
              ? void 0
              : function () {
                  return j(dt());
                },
          ];
        },
        [T, g, D, U],
      );
      var w = A(C, Q[0], Q[1]);
      return (
        E(
          function () {
            ((W.hasValue = !0), (W.value = w));
          },
          [w],
        ),
        B(w),
        w
      );
    }),
    rh
  );
}
var ov;
function Tp() {
  return (ov || ((ov = 1), (oh.exports = Mp())), oh.exports);
}
var Dp = Tp();
const Rp = Zh(Dp),
  rv = (d) => {
    let c;
    const r = new Set(),
      h = (C, T) => {
        const g = typeof C == "function" ? C(c) : C;
        if (!Object.is(g, c)) {
          const D = c;
          ((c = (T ?? (typeof g != "object" || g === null)) ? g : Object.assign({}, c, g)), r.forEach((U) => U(c, D)));
        }
      },
      A = () => c,
      S = { setState: h, getState: A, getInitialState: () => B, subscribe: (C) => (r.add(C), () => r.delete(C)) },
      B = (c = d(h, A, S));
    return S;
  },
  Vv = (d) => (d ? rv(d) : rv),
  { useSyncExternalStoreWithSelector: Hp } = Rp,
  Gp = (d) => d;
function Op(d, c = Gp, r) {
  const h = Hp(d.subscribe, d.getState, d.getInitialState, c, r);
  return (hr.useDebugValue(h), h);
}
const dv = (d, c) => {
    const r = Vv(d),
      h = (A, y = c) => Op(r, A, y);
    return (Object.assign(h, r), h);
  },
  _p = (d, c) => (d ? dv(d, c) : dv),
  Up = (d) => typeof d == "object" && typeof d.then == "function",
  Pc = [];
function Iv(d, c, r = (h, A) => h === A) {
  if (d === c) return !0;
  if (!d || !c) return !1;
  const h = d.length;
  if (c.length !== h) return !1;
  for (let A = 0; A < h; A++) if (!r(d[A], c[A])) return !1;
  return !0;
}
function wv(d, c = null, r = !1, h = {}) {
  c === null && (c = [d]);
  for (const y of Pc)
    if (Iv(c, y.keys, y.equal)) {
      if (r) return;
      if (Object.prototype.hasOwnProperty.call(y, "error")) throw y.error;
      if (Object.prototype.hasOwnProperty.call(y, "response"))
        return (
          h.lifespan &&
            h.lifespan > 0 &&
            (y.timeout && clearTimeout(y.timeout), (y.timeout = setTimeout(y.remove, h.lifespan))),
          y.response
        );
      if (!r) throw y.promise;
    }
  const A = {
    keys: c,
    equal: h.equal,
    remove: () => {
      const y = Pc.indexOf(A);
      y !== -1 && Pc.splice(y, 1);
    },
    promise: (Up(d) ? d : d(...c))
      .then((y) => {
        ((A.response = y), h.lifespan && h.lifespan > 0 && (A.timeout = setTimeout(A.remove, h.lifespan)));
      })
      .catch((y) => (A.error = y)),
  };
  if ((Pc.push(A), !r)) throw A.promise;
}
const Np = (d, c, r) => wv(d, c, !1, r),
  zp = (d, c, r) => void wv(d, c, !0, r),
  Jp = (d) => {
    if (d === void 0 || d.length === 0) Pc.splice(0, Pc.length);
    else {
      const c = Pc.find((r) => Iv(d, r.keys, r.equal));
      c && c.remove();
    }
  };
var hh = { exports: {} },
  Ah = { exports: {} },
  vh = { exports: {} },
  yh = {};
var mv;
function xp() {
  return (
    mv ||
      ((mv = 1),
      (function (d) {
        function c(R, N) {
          var I = R.length;
          R.push(N);
          t: for (; 0 < I;) {
            var ut = (I - 1) >>> 1,
              rt = R[ut];
            if (0 < A(rt, N)) ((R[ut] = N), (R[I] = rt), (I = ut));
            else break t;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function h(R) {
          if (R.length === 0) return null;
          var N = R[0],
            I = R.pop();
          if (I !== N) {
            R[0] = I;
            t: for (var ut = 0, rt = R.length, H = rt >>> 1; ut < H;) {
              var X = 2 * (ut + 1) - 1,
                et = R[X],
                lt = X + 1,
                vt = R[lt];
              if (0 > A(et, I))
                lt < rt && 0 > A(vt, et)
                  ? ((R[ut] = vt), (R[lt] = I), (ut = lt))
                  : ((R[ut] = et), (R[X] = I), (ut = X));
              else if (lt < rt && 0 > A(vt, I)) ((R[ut] = vt), (R[lt] = I), (ut = lt));
              else break t;
            }
          }
          return N;
        }
        function A(R, N) {
          var I = R.sortIndex - N.sortIndex;
          return I !== 0 ? I : R.id - N.id;
        }
        if (((d.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var y = performance;
          d.unstable_now = function () {
            return y.now();
          };
        } else {
          var E = Date,
            S = E.now();
          d.unstable_now = function () {
            return E.now() - S;
          };
        }
        var B = [],
          C = [],
          T = 1,
          g = null,
          D = 3,
          U = !1,
          Q = !1,
          W = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function nt(R) {
          for (var N = r(C); N !== null;) {
            if (N.callback === null) h(C);
            else if (N.startTime <= R) (h(C), (N.sortIndex = N.expirationTime), c(B, N));
            else break;
            N = r(C);
          }
        }
        function at(R) {
          if (((W = !1), nt(R), !Q))
            if (r(B) !== null) ((Q = !0), Jt());
            else {
              var N = r(C);
              N !== null && Ot(at, N.startTime - R);
            }
        }
        var dt = !1,
          ct = -1,
          ot = 5,
          gt = -1;
        function ht() {
          return !(d.unstable_now() - gt < ot);
        }
        function bt() {
          if (dt) {
            var R = d.unstable_now();
            gt = R;
            var N = !0;
            try {
              t: {
                ((Q = !1), W && ((W = !1), j(ct), (ct = -1)), (U = !0));
                var I = D;
                try {
                  e: {
                    for (nt(R), g = r(B); g !== null && !(g.expirationTime > R && ht());) {
                      var ut = g.callback;
                      if (typeof ut == "function") {
                        ((g.callback = null), (D = g.priorityLevel));
                        var rt = ut(g.expirationTime <= R);
                        if (((R = d.unstable_now()), typeof rt == "function")) {
                          ((g.callback = rt), nt(R), (N = !0));
                          break e;
                        }
                        (g === r(B) && h(B), nt(R));
                      } else h(B);
                      g = r(B);
                    }
                    if (g !== null) N = !0;
                    else {
                      var H = r(C);
                      (H !== null && Ot(at, H.startTime - R), (N = !1));
                    }
                  }
                  break t;
                } finally {
                  ((g = null), (D = I), (U = !1));
                }
                N = void 0;
              }
            } finally {
              N ? yt() : (dt = !1);
            }
          }
        }
        var yt;
        if (typeof K == "function")
          yt = function () {
            K(bt);
          };
        else if (typeof MessageChannel < "u") {
          var ne = new MessageChannel(),
            Dt = ne.port2;
          ((ne.port1.onmessage = bt),
            (yt = function () {
              Dt.postMessage(null);
            }));
        } else
          yt = function () {
            w(bt, 0);
          };
        function Jt() {
          dt || ((dt = !0), yt());
        }
        function Ot(R, N) {
          ct = w(function () {
            R(d.unstable_now());
          }, N);
        }
        ((d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (d.unstable_continueExecution = function () {
            Q || U || ((Q = !0), Jt());
          }),
          (d.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ot = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (d.unstable_getFirstCallbackNode = function () {
            return r(B);
          }),
          (d.unstable_next = function (R) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = D;
            }
            var I = D;
            D = N;
            try {
              return R();
            } finally {
              D = I;
            }
          }),
          (d.unstable_pauseExecution = function () {}),
          (d.unstable_requestPaint = function () {}),
          (d.unstable_runWithPriority = function (R, N) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var I = D;
            D = R;
            try {
              return N();
            } finally {
              D = I;
            }
          }),
          (d.unstable_scheduleCallback = function (R, N, I) {
            var ut = d.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? ut + I : ut))
                : (I = ut),
              R)
            ) {
              case 1:
                var rt = -1;
                break;
              case 2:
                rt = 250;
                break;
              case 5:
                rt = 1073741823;
                break;
              case 4:
                rt = 1e4;
                break;
              default:
                rt = 5e3;
            }
            return (
              (rt = I + rt),
              (R = { id: T++, callback: N, priorityLevel: R, startTime: I, expirationTime: rt, sortIndex: -1 }),
              I > ut
                ? ((R.sortIndex = I),
                  c(C, R),
                  r(B) === null && R === r(C) && (W ? (j(ct), (ct = -1)) : (W = !0), Ot(at, I - ut)))
                : ((R.sortIndex = rt), c(B, R), Q || U || ((Q = !0), Jt())),
              R
            );
          }),
          (d.unstable_shouldYield = ht),
          (d.unstable_wrapCallback = function (R) {
            var N = D;
            return function () {
              var I = D;
              D = N;
              try {
                return R.apply(this, arguments);
              } finally {
                D = I;
              }
            };
          }));
      })(yh)),
    yh
  );
}
var hv;
function jp() {
  return (hv || ((hv = 1), (vh.exports = xp())), vh.exports);
}
var Av;
function Qp() {
  return (
    Av ||
      ((Av = 1),
      (function (d) {
        ((d.exports = function (c) {
          function r(l, a, i, f) {
            return new fo(l, a, i, f);
          }
          function h() {}
          function A(l) {
            var a = "https://react.dev/errors/" + l;
            if (1 < arguments.length) {
              a += "?args[]=" + encodeURIComponent(arguments[1]);
              for (var i = 2; i < arguments.length; i++) a += "&args[]=" + encodeURIComponent(arguments[i]);
            }
            return (
              "Minified React error #" +
              l +
              "; visit " +
              a +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
          }
          function y(l) {
            return l === null || typeof l != "object"
              ? null
              : ((l = (yo && l[yo]) || l["@@iterator"]), typeof l == "function" ? l : null);
          }
          function E(l) {
            if (l == null) return null;
            if (typeof l == "function") return l.$$typeof === ju ? null : l.displayName || l.name || null;
            if (typeof l == "string") return l;
            switch (l) {
              case bi:
                return "Fragment";
              case Ha:
                return "Portal";
              case vo:
                return "Profiler";
              case Ao:
                return "StrictMode";
              case Ls:
                return "Suspense";
              case uu:
                return "SuspenseList";
            }
            if (typeof l == "object")
              switch (l.$$typeof) {
                case ka:
                  return (l.displayName || "Context") + ".Provider";
                case nu:
                  return (l._context.displayName || "Context") + ".Consumer";
                case Mi:
                  var a = l.render;
                  return (
                    (l = l.displayName),
                    l || ((l = a.displayName || a.name || ""), (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
                    l
                  );
                case Tc:
                  return ((a = l.displayName || null), a !== null ? a : E(l.type) || "Memo");
                case Ga:
                  ((a = l._payload), (l = l._init));
                  try {
                    return E(l(a));
                  } catch {}
              }
            return null;
          }
          function S(l) {
            if (Ys === void 0)
              try {
                throw Error();
              } catch (i) {
                var a = i.stack.trim().match(/\n( *(at )?)/);
                ((Ys = (a && a[1]) || ""),
                  (po =
                    -1 <
                    i.stack.indexOf(`
    at`)
                      ? " (<anonymous>)"
                      : -1 < i.stack.indexOf("@")
                        ? "@unknown:0:0"
                        : ""));
              }
            return (
              `
` +
              Ys +
              l +
              po
            );
          }
          function B(l, a) {
            if (!l || iu) return "";
            iu = !0;
            var i = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
              var f = {
                DetermineComponentFrameRoot: function () {
                  try {
                    if (a) {
                      var mt = function () {
                        throw Error();
                      };
                      if (
                        (Object.defineProperty(mt.prototype, "props", {
                          set: function () {
                            throw Error();
                          },
                        }),
                        typeof Reflect == "object" && Reflect.construct)
                      ) {
                        try {
                          Reflect.construct(mt, []);
                        } catch (Ut) {
                          var At = Ut;
                        }
                        Reflect.construct(l, [], mt);
                      } else {
                        try {
                          mt.call();
                        } catch (Ut) {
                          At = Ut;
                        }
                        l.call(mt.prototype);
                      }
                    } else {
                      try {
                        throw Error();
                      } catch (Ut) {
                        At = Ut;
                      }
                      (mt = l()) && typeof mt.catch == "function" && mt.catch(function () {});
                    }
                  } catch (Ut) {
                    if (Ut && At && typeof Ut.stack == "string") return [Ut.stack, At.stack];
                  }
                  return [null, null];
                },
              };
              f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
              var m = Object.getOwnPropertyDescriptor(f.DetermineComponentFrameRoot, "name");
              m &&
                m.configurable &&
                Object.defineProperty(f.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
              var v = f.DetermineComponentFrameRoot(),
                M = v[0],
                G = v[1];
              if (M && G) {
                var x = M.split(`
`),
                  k = G.split(`
`);
                for (m = f = 0; f < x.length && !x[f].includes("DetermineComponentFrameRoot");) f++;
                for (; m < k.length && !k[m].includes("DetermineComponentFrameRoot");) m++;
                if (f === x.length || m === k.length)
                  for (f = x.length - 1, m = k.length - 1; 1 <= f && 0 <= m && x[f] !== k[m];) m--;
                for (; 1 <= f && 0 <= m; f--, m--)
                  if (x[f] !== k[m]) {
                    if (f !== 1 || m !== 1)
                      do
                        if ((f--, m--, 0 > m || x[f] !== k[m])) {
                          var ft =
                            `
` + x[f].replace(" at new ", " at ");
                          return (
                            l.displayName &&
                              ft.includes("<anonymous>") &&
                              (ft = ft.replace("<anonymous>", l.displayName)),
                            ft
                          );
                        }
                      while (1 <= f && 0 <= m);
                    break;
                  }
              }
            } finally {
              ((iu = !1), (Error.prepareStackTrace = i));
            }
            return (i = l ? l.displayName || l.name : "") ? S(i) : "";
          }
          function C(l) {
            switch (l.tag) {
              case 26:
              case 27:
              case 5:
                return S(l.type);
              case 16:
                return S("Lazy");
              case 13:
                return S("Suspense");
              case 19:
                return S("SuspenseList");
              case 0:
              case 15:
                return ((l = B(l.type, !1)), l);
              case 11:
                return ((l = B(l.type.render, !1)), l);
              case 1:
                return ((l = B(l.type, !0)), l);
              default:
                return "";
            }
          }
          function T(l) {
            try {
              var a = "";
              do ((a += C(l)), (l = l.return));
              while (l);
              return a;
            } catch (i) {
              return (
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack
              );
            }
          }
          function g(l) {
            var a = l,
              i = l;
            if (l.alternate) for (; a.return;) a = a.return;
            else {
              l = a;
              do ((a = l), (a.flags & 4098) !== 0 && (i = a.return), (l = a.return));
              while (l);
            }
            return a.tag === 3 ? i : null;
          }
          function D(l) {
            if (g(l) !== l) throw Error(A(188));
          }
          function U(l) {
            var a = l.alternate;
            if (!a) {
              if (((a = g(l)), a === null)) throw Error(A(188));
              return a !== l ? null : l;
            }
            for (var i = l, f = a; ;) {
              var m = i.return;
              if (m === null) break;
              var v = m.alternate;
              if (v === null) {
                if (((f = m.return), f !== null)) {
                  i = f;
                  continue;
                }
                break;
              }
              if (m.child === v.child) {
                for (v = m.child; v;) {
                  if (v === i) return (D(m), l);
                  if (v === f) return (D(m), a);
                  v = v.sibling;
                }
                throw Error(A(188));
              }
              if (i.return !== f.return) ((i = m), (f = v));
              else {
                for (var M = !1, G = m.child; G;) {
                  if (G === i) {
                    ((M = !0), (i = m), (f = v));
                    break;
                  }
                  if (G === f) {
                    ((M = !0), (f = m), (i = v));
                    break;
                  }
                  G = G.sibling;
                }
                if (!M) {
                  for (G = v.child; G;) {
                    if (G === i) {
                      ((M = !0), (i = v), (f = m));
                      break;
                    }
                    if (G === f) {
                      ((M = !0), (f = v), (i = m));
                      break;
                    }
                    G = G.sibling;
                  }
                  if (!M) throw Error(A(189));
                }
              }
              if (i.alternate !== f) throw Error(A(190));
            }
            if (i.tag !== 3) throw Error(A(188));
            return i.stateNode.current === i ? l : a;
          }
          function Q(l) {
            var a = l.tag;
            if (a === 5 || a === 26 || a === 27 || a === 6) return l;
            for (l = l.child; l !== null;) {
              if (((a = Q(l)), a !== null)) return a;
              l = l.sibling;
            }
            return null;
          }
          function W(l) {
            var a = l.tag;
            if (a === 5 || a === 26 || a === 27 || a === 6) return l;
            for (l = l.child; l !== null;) {
              if (l.tag !== 4 && ((a = W(l)), a !== null)) return a;
              l = l.sibling;
            }
            return null;
          }
          function w(l) {
            return { current: l };
          }
          function j(l) {
            0 > Hn || ((l.current = zc[Hn]), (zc[Hn] = null), Hn--);
          }
          function K(l, a) {
            (Hn++, (zc[Hn] = l.current), (l.current = a));
          }
          function nt(l) {
            return ((l >>>= 0), l === 0 ? 32 : (31 - ((Jc(l) / bd) | 0)) | 0);
          }
          function at(l) {
            var a = l & 42;
            if (a !== 0) return a;
            switch (l & -l) {
              case 1:
                return 1;
              case 2:
                return 2;
              case 4:
                return 4;
              case 8:
                return 8;
              case 16:
                return 16;
              case 32:
                return 32;
              case 64:
                return 64;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return l & 4194176;
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                return l & 62914560;
              case 67108864:
                return 67108864;
              case 134217728:
                return 134217728;
              case 268435456:
                return 268435456;
              case 536870912:
                return 536870912;
              case 1073741824:
                return 0;
              default:
                return l;
            }
          }
          function dt(l, a) {
            var i = l.pendingLanes;
            if (i === 0) return 0;
            var f = 0,
              m = l.suspendedLanes,
              v = l.pingedLanes,
              M = l.warmLanes;
            l = l.finishedLanes !== 0;
            var G = i & 134217727;
            return (
              G !== 0
                ? ((i = G & ~m),
                  i !== 0
                    ? (f = at(i))
                    : ((v &= G), v !== 0 ? (f = at(v)) : l || ((M = G & ~M), M !== 0 && (f = at(M)))))
                : ((G = i & ~m),
                  G !== 0 ? (f = at(G)) : v !== 0 ? (f = at(v)) : l || ((M = i & ~M), M !== 0 && (f = at(M)))),
              f === 0
                ? 0
                : a !== 0 &&
                    a !== f &&
                    (a & m) === 0 &&
                    ((m = f & -f), (M = a & -a), m >= M || (m === 32 && (M & 4194176) !== 0))
                  ? a
                  : f
            );
          }
          function ct(l, a) {
            return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
          }
          function ot(l, a) {
            switch (l) {
              case 1:
              case 2:
              case 4:
              case 8:
                return a + 250;
              case 16:
              case 32:
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return a + 5e3;
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                return -1;
              case 67108864:
              case 134217728:
              case 268435456:
              case 536870912:
              case 1073741824:
                return -1;
              default:
                return -1;
            }
          }
          function gt() {
            var l = Hi;
            return ((Hi <<= 1), (Hi & 4194176) === 0 && (Hi = 128), l);
          }
          function ht() {
            var l = xc;
            return ((xc <<= 1), (xc & 62914560) === 0 && (xc = 4194304), l);
          }
          function bt(l) {
            for (var a = [], i = 0; 31 > i; i++) a.push(l);
            return a;
          }
          function yt(l, a) {
            ((l.pendingLanes |= a),
              a !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
          }
          function ne(l, a, i, f, m, v) {
            var M = l.pendingLanes;
            ((l.pendingLanes = i),
              (l.suspendedLanes = 0),
              (l.pingedLanes = 0),
              (l.warmLanes = 0),
              (l.expiredLanes &= i),
              (l.entangledLanes &= i),
              (l.errorRecoveryDisabledLanes &= i),
              (l.shellSuspendCounter = 0));
            var G = l.entanglements,
              x = l.expirationTimes,
              k = l.hiddenUpdates;
            for (i = M & ~i; 0 < i;) {
              var ft = 31 - xl(i),
                mt = 1 << ft;
              ((G[ft] = 0), (x[ft] = -1));
              var At = k[ft];
              if (At !== null)
                for (k[ft] = null, ft = 0; ft < At.length; ft++) {
                  var Ut = At[ft];
                  Ut !== null && (Ut.lane &= -536870913);
                }
              i &= ~mt;
            }
            (f !== 0 && Dt(l, f, 0), v !== 0 && m === 0 && l.tag !== 0 && (l.suspendedLanes |= v & ~(M & ~a)));
          }
          function Dt(l, a, i) {
            ((l.pendingLanes |= a), (l.suspendedLanes &= ~a));
            var f = 31 - xl(a);
            ((l.entangledLanes |= a), (l.entanglements[f] = l.entanglements[f] | 1073741824 | (i & 4194218)));
          }
          function Jt(l, a) {
            var i = (l.entangledLanes |= a);
            for (l = l.entanglements; i;) {
              var f = 31 - xl(i),
                m = 1 << f;
              ((m & a) | (l[f] & a) && (l[f] |= a), (i &= ~m));
            }
          }
          function Ot(l) {
            return ((l &= -l), 2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
          }
          function R(l) {
            if (jl && typeof jl.onCommitFiberRoot == "function")
              try {
                jl.onCommitFiberRoot(Oi, l, void 0, (l.current.flags & 128) === 128);
              } catch {}
          }
          function N(l) {
            if ((typeof Rd == "function" && wo(l), jl && typeof jl.setStrictMode == "function"))
              try {
                jl.setStrictMode(Oi, l);
              } catch {}
          }
          function I(l, a) {
            return (l === a && (l !== 0 || 1 / l === 1 / a)) || (l !== l && a !== a);
          }
          function ut(l, a) {
            if (typeof l == "object" && l !== null) {
              var i = uf.get(l);
              return i !== void 0 ? i : ((a = { value: l, source: a, stack: T(a) }), uf.set(l, a), a);
            }
            return { value: l, source: a, stack: T(a) };
          }
          function rt(l, a) {
            ((be[Ge++] = Kc), (be[Ge++] = Qc), (Qc = l), (Kc = a));
          }
          function H(l, a, i) {
            ((ea[la++] = an), (ea[la++] = ya), (ea[la++] = Oa), (Oa = l));
            var f = an;
            l = ya;
            var m = 32 - xl(f) - 1;
            ((f &= ~(1 << m)), (i += 1));
            var v = 32 - xl(a) + m;
            if (30 < v) {
              var M = m - (m % 5);
              ((v = (f & ((1 << M) - 1)).toString(32)),
                (f >>= M),
                (m -= M),
                (an = (1 << (32 - xl(a) + m)) | (i << m) | f),
                (ya = v + l));
            } else ((an = (1 << v) | (i << m) | f), (ya = l));
          }
          function X(l) {
            l.return !== null && (rt(l, 1), H(l, 1, 0));
          }
          function et(l) {
            for (; l === Qc;) ((Qc = be[--Ge]), (be[Ge] = null), (Kc = be[--Ge]), (be[Ge] = null));
            for (; l === Oa;)
              ((Oa = ea[--la]), (ea[la] = null), (ya = ea[--la]), (ea[la] = null), (an = ea[--la]), (ea[la] = null));
          }
          function lt(l, a) {
            (K(_a, a), K(Lc, l), K(tl, null), (l = Qu(a)), j(tl), K(tl, l));
          }
          function vt() {
            (j(tl), j(Lc), j(_a));
          }
          function _t(l) {
            l.memoizedState !== null && K(_i, l);
            var a = tl.current,
              i = ad(a, l.type);
            a !== i && (K(Lc, l), K(tl, i));
          }
          function Zt(l) {
            (Lc.current === l && (j(tl), j(Lc)),
              _i.current === l && (j(_i), tn ? (Ht._currentValue = Jl) : (Ht._currentValue2 = Jl)));
          }
          function de(l) {
            var a = Error(A(418, ""));
            throw (sl(ut(a, l)), Yc);
          }
          function Ee(l, a) {
            if (!Rl) throw Error(A(175));
            gm(l.stateNode, l.type, l.memoizedProps, a, l) || de(l);
          }
          function Ke(l) {
            for (pl = l.return; pl;)
              switch (pl.tag) {
                case 3:
                case 27:
                  pa = !0;
                  return;
                case 5:
                case 13:
                  pa = !1;
                  return;
                default:
                  pl = pl.return;
              }
          }
          function wt(l) {
            if (!Rl || l !== pl) return !1;
            if (!$t) return (Ke(l), ($t = !0), !1);
            var a = !1;
            if (
              (ul
                ? l.tag !== 3 &&
                  l.tag !== 27 &&
                  (l.tag !== 5 || (Bd(l.type) && !fu(l.type, l.memoizedProps))) &&
                  (a = !0)
                : l.tag !== 3 && (l.tag !== 5 || (Bd(l.type) && !fu(l.type, l.memoizedProps))) && (a = !0),
              a && cl && de(l),
              Ke(l),
              l.tag === 13)
            ) {
              if (!Rl) throw Error(A(316));
              if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(A(317));
              cl = yd(l);
            } else cl = pl ? Jo(l.stateNode) : null;
            return !0;
          }
          function Sl() {
            Rl && ((cl = pl = null), ($t = !1));
          }
          function sl(l) {
            aa === null ? (aa = [l]) : aa.push(l);
          }
          function fl() {
            for (var l = ru, a = (Ui = ru = 0); a < l;) {
              var i = na[a];
              na[a++] = null;
              var f = na[a];
              na[a++] = null;
              var m = na[a];
              na[a++] = null;
              var v = na[a];
              if (((na[a++] = null), f !== null && m !== null)) {
                var M = f.pending;
                (M === null ? (m.next = m) : ((m.next = M.next), (M.next = m)), (f.pending = m));
              }
              v !== 0 && li(i, m, v);
            }
          }
          function ga(l, a, i, f) {
            ((na[ru++] = l),
              (na[ru++] = a),
              (na[ru++] = i),
              (na[ru++] = f),
              (Ui |= f),
              (l.lanes |= f),
              (l = l.alternate),
              l !== null && (l.lanes |= f));
          }
          function Eu(l, a, i, f) {
            return (ga(l, a, i, f), Qa(l));
          }
          function ol(l, a) {
            return (ga(l, null, null, a), Qa(l));
          }
          function li(l, a, i) {
            l.lanes |= i;
            var f = l.alternate;
            f !== null && (f.lanes |= i);
            for (var m = !1, v = l.return; v !== null;)
              ((v.childLanes |= i),
                (f = v.alternate),
                f !== null && (f.childLanes |= i),
                v.tag === 22 && ((l = v.stateNode), l === null || l._visibility & 1 || (m = !0)),
                (l = v),
                (v = v.return));
            m &&
              a !== null &&
              l.tag === 3 &&
              ((v = l.stateNode),
              (m = 31 - xl(i)),
              (v = v.hiddenUpdates),
              (l = v[m]),
              l === null ? (v[m] = [a]) : l.push(a),
              (a.lane = i | 536870912));
          }
          function Qa(l) {
            if (50 < Wu) throw ((Wu = 0), (Ol = null), Error(A(185)));
            for (var a = l.return; a !== null;) ((l = a), (a = l.return));
            return l.tag === 3 ? l.stateNode : null;
          }
          function gl(l) {
            (l !== Xu && l.next === null && (Xu === null ? (Ni = Xu = l) : (Xu = Xu.next = l)),
              (qc = !0),
              Xc || ((Xc = !0), ns(Hf)));
          }
          function Ka(l, a) {
            if (!Ua && qc) {
              Ua = !0;
              do
                for (var i = !1, f = Ni; f !== null;) {
                  if (l !== 0) {
                    var m = f.pendingLanes;
                    if (m === 0) var v = 0;
                    else {
                      var M = f.suspendedLanes,
                        G = f.pingedLanes;
                      ((v = (1 << (31 - xl(42 | l) + 1)) - 1),
                        (v &= m & ~(M & ~G)),
                        (v = v & 201326677 ? (v & 201326677) | 1 : v ? v | 2 : 0));
                    }
                    v !== 0 && ((i = !0), as(f, v));
                  } else ((v = Qt), (v = dt(f, f === Lt ? v : 0)), (v & 3) === 0 || ct(f, v) || ((i = !0), as(f, v)));
                  f = f.next;
                }
              while (i);
              Ua = !1;
            }
          }
          function Hf() {
            qc = Xc = !1;
            var l = 0;
            du !== 0 && (ou() && (l = du), (du = 0));
            for (var a = il(), i = null, f = Ni; f !== null;) {
              var m = f.next,
                v = ls(f, a);
              (v === 0
                ? ((f.next = null), i === null ? (Ni = m) : (i.next = m), m === null && (Xu = i))
                : ((i = f), (l !== 0 || (v & 3) !== 0) && (qc = !0)),
                (f = m));
            }
            Ka(l);
          }
          function ls(l, a) {
            for (
              var i = l.suspendedLanes, f = l.pingedLanes, m = l.expirationTimes, v = l.pendingLanes & -62914561;
              0 < v;
            ) {
              var M = 31 - xl(v),
                G = 1 << M,
                x = m[M];
              (x === -1 ? ((G & i) === 0 || (G & f) !== 0) && (m[M] = ot(G, a)) : x <= a && (l.expiredLanes |= G),
                (v &= ~G));
            }
            if (
              ((a = Lt),
              (i = Qt),
              (i = dt(l, l === a ? i : 0)),
              (f = l.callbackNode),
              i === 0 || (l === a && he === 2) || l.cancelPendingCommit !== null)
            )
              return (f !== null && f !== null && jc(f), (l.callbackNode = null), (l.callbackPriority = 0));
            if ((i & 3) === 0 || ct(l, i)) {
              if (((a = i & -i), a === l.callbackPriority)) return a;
              switch ((f !== null && jc(f), Ot(i))) {
                case 2:
                case 8:
                  i = Dd;
                  break;
                case 32:
                  i = af;
                  break;
                case 268435456:
                  i = nf;
                  break;
                default:
                  i = af;
              }
              return ((f = rl.bind(null, l)), (i = Gi(i, f)), (l.callbackPriority = a), (l.callbackNode = i), a);
            }
            return (f !== null && f !== null && jc(f), (l.callbackPriority = 2), (l.callbackNode = null), 2);
          }
          function rl(l, a) {
            var i = l.callbackNode;
            if (ke() && l.callbackNode !== i) return null;
            var f = Qt;
            return (
              (f = dt(l, l === Lt ? f : 0)),
              f === 0
                ? null
                : (Cc(l, f, a), ls(l, il()), l.callbackNode != null && l.callbackNode === i ? rl.bind(null, l) : null)
            );
          }
          function as(l, a) {
            if (ke()) return null;
            Cc(l, a, !0);
          }
          function ns(l) {
            Xe
              ? Fs(function () {
                  (St & 6) !== 0 ? Gi(Io, l) : l();
                })
              : Gi(Io, l);
          }
          function da() {
            return (du === 0 && (du = gt()), du);
          }
          function us(l, a) {
            if (Zc === null) {
              var i = (Zc = []);
              ((cf = 0),
                (Ql = da()),
                (mu = {
                  status: "pending",
                  value: void 0,
                  then: function (f) {
                    i.push(f);
                  },
                }));
            }
            return (cf++, a.then(Cr, Cr), a);
          }
          function Cr() {
            if (--cf === 0 && Zc !== null) {
              mu !== null && (mu.status = "fulfilled");
              var l = Zc;
              ((Zc = null), (Ql = 0), (mu = null));
              for (var a = 0; a < l.length; a++) (0, l[a])();
            }
          }
          function Sr(l, a) {
            var i = [],
              f = {
                status: "pending",
                value: null,
                reason: null,
                then: function (m) {
                  i.push(m);
                },
              };
            return (
              l.then(
                function () {
                  ((f.status = "fulfilled"), (f.value = a));
                  for (var m = 0; m < i.length; m++) (0, i[m])(a);
                },
                function (m) {
                  for (f.status = "rejected", f.reason = m, m = 0; m < i.length; m++) (0, i[m])(void 0);
                },
              ),
              f
            );
          }
          function Gf(l) {
            l.updateQueue = {
              baseState: l.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: { pending: null, lanes: 0, hiddenCallbacks: null },
              callbacks: null,
            };
          }
          function Of(l, a) {
            ((l = l.updateQueue),
              a.updateQueue === l &&
                (a.updateQueue = {
                  baseState: l.baseState,
                  firstBaseUpdate: l.firstBaseUpdate,
                  lastBaseUpdate: l.lastBaseUpdate,
                  shared: l.shared,
                  callbacks: null,
                }));
          }
          function ma(l) {
            return { lane: l, tag: 0, payload: null, callback: null, next: null };
          }
          function Le(l, a, i) {
            var f = l.updateQueue;
            if (f === null) return null;
            if (((f = f.shared), (St & 2) !== 0)) {
              var m = f.pending;
              return (
                m === null ? (a.next = a) : ((a.next = m.next), (m.next = a)),
                (f.pending = a),
                (a = Qa(l)),
                li(l, null, i),
                a
              );
            }
            return (ga(l, f, a, i), Qa(l));
          }
          function ha(l, a, i) {
            if (((a = a.updateQueue), a !== null && ((a = a.shared), (i & 4194176) !== 0))) {
              var f = a.lanes;
              ((f &= l.pendingLanes), (i |= f), (a.lanes = i), Jt(l, i));
            }
          }
          function bl(l, a) {
            var i = l.updateQueue,
              f = l.alternate;
            if (f !== null && ((f = f.updateQueue), i === f)) {
              var m = null,
                v = null;
              if (((i = i.firstBaseUpdate), i !== null)) {
                do {
                  var M = { lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null };
                  (v === null ? (m = v = M) : (v = v.next = M), (i = i.next));
                } while (i !== null);
                v === null ? (m = v = a) : (v = v.next = a);
              } else m = v = a;
              ((i = {
                baseState: f.baseState,
                firstBaseUpdate: m,
                lastBaseUpdate: v,
                shared: f.shared,
                callbacks: f.callbacks,
              }),
                (l.updateQueue = i));
              return;
            }
            ((l = i.lastBaseUpdate), l === null ? (i.firstBaseUpdate = a) : (l.next = a), (i.lastBaseUpdate = a));
          }
          function Wi() {
            if (zi) {
              var l = mu;
              if (l !== null) throw l;
            }
          }
          function Pi(l, a, i, f) {
            zi = !1;
            var m = l.updateQueue;
            Gn = !1;
            var v = m.firstBaseUpdate,
              M = m.lastBaseUpdate,
              G = m.shared.pending;
            if (G !== null) {
              m.shared.pending = null;
              var x = G,
                k = x.next;
              ((x.next = null), M === null ? (v = k) : (M.next = k), (M = x));
              var ft = l.alternate;
              ft !== null &&
                ((ft = ft.updateQueue),
                (G = ft.lastBaseUpdate),
                G !== M && (G === null ? (ft.firstBaseUpdate = k) : (G.next = k), (ft.lastBaseUpdate = x)));
            }
            if (v !== null) {
              var mt = m.baseState;
              ((M = 0), (ft = k = x = null), (G = v));
              do {
                var At = G.lane & -536870913,
                  Ut = At !== G.lane;
                if (Ut ? (Qt & At) === At : (f & At) === At) {
                  (At !== 0 && At === Ql && (zi = !0),
                    ft !== null &&
                      (ft = ft.next = { lane: 0, tag: G.tag, payload: G.payload, callback: null, next: null }));
                  t: {
                    var Xl = l,
                      wc = G;
                    At = a;
                    var Pu = i;
                    switch (wc.tag) {
                      case 1:
                        if (((Xl = wc.payload), typeof Xl == "function")) {
                          mt = Xl.call(Pu, mt, At);
                          break t;
                        }
                        mt = Xl;
                        break t;
                      case 3:
                        Xl.flags = (Xl.flags & -65537) | 128;
                      case 0:
                        if (((Xl = wc.payload), (At = typeof Xl == "function" ? Xl.call(Pu, mt, At) : Xl), At == null))
                          break t;
                        mt = xu({}, mt, At);
                        break t;
                      case 2:
                        Gn = !0;
                    }
                  }
                  ((At = G.callback),
                    At !== null &&
                      ((l.flags |= 64),
                      Ut && (l.flags |= 8192),
                      (Ut = m.callbacks),
                      Ut === null ? (m.callbacks = [At]) : Ut.push(At)));
                } else
                  ((Ut = { lane: At, tag: G.tag, payload: G.payload, callback: G.callback, next: null }),
                    ft === null ? ((k = ft = Ut), (x = mt)) : (ft = ft.next = Ut),
                    (M |= At));
                if (((G = G.next), G === null)) {
                  if (((G = m.shared.pending), G === null)) break;
                  ((Ut = G), (G = Ut.next), (Ut.next = null), (m.lastBaseUpdate = Ut), (m.shared.pending = null));
                }
              } while (!0);
              (ft === null && (x = mt),
                (m.baseState = x),
                (m.firstBaseUpdate = k),
                (m.lastBaseUpdate = ft),
                v === null && (m.shared.lanes = 0),
                (sa |= M),
                (l.lanes = M),
                (l.memoizedState = mt));
            }
          }
          function gr(l, a) {
            if (typeof l != "function") throw Error(A(191, l));
            l.call(a);
          }
          function ki(l, a) {
            var i = l.callbacks;
            if (i !== null) for (l.callbacks = null, l = 0; l < i.length; l++) gr(i[l], a);
          }
          function Cu(l, a) {
            if (ta(l, a)) return !0;
            if (typeof l != "object" || l === null || typeof a != "object" || a === null) return !1;
            var i = Object.keys(l),
              f = Object.keys(a);
            if (i.length !== f.length) return !1;
            for (f = 0; f < i.length; f++) {
              var m = i[f];
              if (!Fc.call(a, m) || !ta(l[m], a[m])) return !1;
            }
            return !0;
          }
          function $i(l) {
            return ((l = l.status), l === "fulfilled" || l === "rejected");
          }
          function La() {}
          function tc(l, a, i) {
            switch (((i = l[i]), i === void 0 ? l.push(a) : i !== a && (a.then(La, La), (a = i)), a.status)) {
              case "fulfilled":
                return a.value;
              case "rejected":
                throw ((l = a.reason), l === oe ? Error(A(483)) : l);
              default:
                if (typeof a.status == "string") a.then(La, La);
                else {
                  if (((l = Lt), l !== null && 100 < l.shellSuspendCounter)) throw Error(A(482));
                  ((l = a),
                    (l.status = "pending"),
                    l.then(
                      function (f) {
                        if (a.status === "pending") {
                          var m = a;
                          ((m.status = "fulfilled"), (m.value = f));
                        }
                      },
                      function (f) {
                        if (a.status === "pending") {
                          var m = a;
                          ((m.status = "rejected"), (m.reason = f));
                        }
                      },
                    ));
                }
                switch (a.status) {
                  case "fulfilled":
                    return a.value;
                  case "rejected":
                    throw ((l = a.reason), l === oe ? Error(A(483)) : l);
                }
                throw ((qu = a), oe);
            }
          }
          function ai() {
            if (qu === null) throw Error(A(459));
            var l = qu;
            return ((qu = null), l);
          }
          function is(l) {
            var a = Ba;
            return ((Ba += 1), nn === null && (nn = []), tc(nn, l, a));
          }
          function ni(l, a) {
            ((a = a.props.ref), (l.ref = a !== void 0 ? a : null));
          }
          function ui(l, a) {
            throw a.$$typeof === ho
              ? Error(A(525))
              : ((l = Object.prototype.toString.call(a)),
                Error(A(31, l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l)));
          }
          function ii(l) {
            var a = l._init;
            return a(l._payload);
          }
          function br(l) {
            function a(q, z) {
              if (l) {
                var F = q.deletions;
                F === null ? ((q.deletions = [z]), (q.flags |= 16)) : F.push(z);
              }
            }
            function i(q, z) {
              if (!l) return null;
              for (; z !== null;) (a(q, z), (z = z.sibling));
              return null;
            }
            function f(q) {
              for (var z = new Map(); q !== null;)
                (q.key !== null ? z.set(q.key, q) : z.set(q.index, q), (q = q.sibling));
              return z;
            }
            function m(q, z) {
              return ((q = vl(q, z)), (q.index = 0), (q.sibling = null), q);
            }
            function v(q, z, F) {
              return (
                (q.index = F),
                l
                  ? ((F = q.alternate),
                    F !== null ? ((F = F.index), F < z ? ((q.flags |= 33554434), z) : F) : ((q.flags |= 33554434), z))
                  : ((q.flags |= 1048576), z)
              );
            }
            function M(q) {
              return (l && q.alternate === null && (q.flags |= 33554434), q);
            }
            function G(q, z, F, it) {
              return z === null || z.tag !== 6
                ? ((z = au(F, q.mode, it)), (z.return = q), z)
                : ((z = m(z, F)), (z.return = q), z);
            }
            function x(q, z, F, it) {
              var Et = F.type;
              return Et === bi
                ? ft(q, z, F.props.children, it, F.key)
                : z !== null &&
                    (z.elementType === Et ||
                      (typeof Et == "object" && Et !== null && Et.$$typeof === Ga && ii(Et) === z.type))
                  ? ((z = m(z, F.props)), ni(z, F), (z.return = q), z)
                  : ((z = Aa(F.type, F.key, F.props, null, q.mode, it)), ni(z, F), (z.return = q), z);
            }
            function k(q, z, F, it) {
              return z === null ||
                z.tag !== 4 ||
                z.stateNode.containerInfo !== F.containerInfo ||
                z.stateNode.implementation !== F.implementation
                ? ((z = gi(F, q.mode, it)), (z.return = q), z)
                : ((z = m(z, F.children || [])), (z.return = q), z);
            }
            function ft(q, z, F, it, Et) {
              return z === null || z.tag !== 7
                ? ((z = bn(F, q.mode, it, Et)), (z.return = q), z)
                : ((z = m(z, F)), (z.return = q), z);
            }
            function mt(q, z, F) {
              if ((typeof z == "string" && z !== "") || typeof z == "number" || typeof z == "bigint")
                return ((z = au("" + z, q.mode, F)), (z.return = q), z);
              if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                  case Mn:
                    return ((F = Aa(z.type, z.key, z.props, null, q.mode, F)), ni(F, z), (F.return = q), F);
                  case Ha:
                    return ((z = gi(z, q.mode, F)), (z.return = q), z);
                  case Ga:
                    var it = z._init;
                    return ((z = it(z._payload)), mt(q, z, F));
                }
                if (cu(z) || y(z)) return ((z = bn(z, q.mode, F, null)), (z.return = q), z);
                if (typeof z.then == "function") return mt(q, is(z), F);
                if (z.$$typeof === ka) return mt(q, vc(q, z), F);
                ui(q, z);
              }
              return null;
            }
            function At(q, z, F, it) {
              var Et = z !== null ? z.key : null;
              if ((typeof F == "string" && F !== "") || typeof F == "number" || typeof F == "bigint")
                return Et !== null ? null : G(q, z, "" + F, it);
              if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                  case Mn:
                    return F.key === Et ? x(q, z, F, it) : null;
                  case Ha:
                    return F.key === Et ? k(q, z, F, it) : null;
                  case Ga:
                    return ((Et = F._init), (F = Et(F._payload)), At(q, z, F, it));
                }
                if (cu(F) || y(F)) return Et !== null ? null : ft(q, z, F, it, null);
                if (typeof F.then == "function") return At(q, z, is(F), it);
                if (F.$$typeof === ka) return At(q, z, vc(q, F), it);
                ui(q, F);
              }
              return null;
            }
            function Ut(q, z, F, it, Et) {
              if ((typeof it == "string" && it !== "") || typeof it == "number" || typeof it == "bigint")
                return ((q = q.get(F) || null), G(z, q, "" + it, Et));
              if (typeof it == "object" && it !== null) {
                switch (it.$$typeof) {
                  case Mn:
                    return ((q = q.get(it.key === null ? F : it.key) || null), x(z, q, it, Et));
                  case Ha:
                    return ((q = q.get(it.key === null ? F : it.key) || null), k(z, q, it, Et));
                  case Ga:
                    var ye = it._init;
                    return ((it = ye(it._payload)), Ut(q, z, F, it, Et));
                }
                if (cu(it) || y(it)) return ((q = q.get(F) || null), ft(z, q, it, Et, null));
                if (typeof it.then == "function") return Ut(q, z, F, is(it), Et);
                if (it.$$typeof === ka) return Ut(q, z, F, vc(z, it), Et);
                ui(z, it);
              }
              return null;
            }
            function Xl(q, z, F, it) {
              for (var Et = null, ye = null, Gt = z, ee = (z = 0), we = null; Gt !== null && ee < F.length; ee++) {
                Gt.index > ee ? ((we = Gt), (Gt = null)) : (we = Gt.sibling);
                var le = At(q, Gt, F[ee], it);
                if (le === null) {
                  Gt === null && (Gt = we);
                  break;
                }
                (l && Gt && le.alternate === null && a(q, Gt),
                  (z = v(le, z, ee)),
                  ye === null ? (Et = le) : (ye.sibling = le),
                  (ye = le),
                  (Gt = we));
              }
              if (ee === F.length) return (i(q, Gt), $t && rt(q, ee), Et);
              if (Gt === null) {
                for (; ee < F.length; ee++)
                  ((Gt = mt(q, F[ee], it)),
                    Gt !== null && ((z = v(Gt, z, ee)), ye === null ? (Et = Gt) : (ye.sibling = Gt), (ye = Gt)));
                return ($t && rt(q, ee), Et);
              }
              for (Gt = f(Gt); ee < F.length; ee++)
                ((we = Ut(Gt, q, ee, F[ee], it)),
                  we !== null &&
                    (l && we.alternate !== null && Gt.delete(we.key === null ? ee : we.key),
                    (z = v(we, z, ee)),
                    ye === null ? (Et = we) : (ye.sibling = we),
                    (ye = we)));
              return (
                l &&
                  Gt.forEach(function (xn) {
                    return a(q, xn);
                  }),
                $t && rt(q, ee),
                Et
              );
            }
            function wc(q, z, F, it) {
              if (F == null) throw Error(A(151));
              for (
                var Et = null, ye = null, Gt = z, ee = (z = 0), we = null, le = F.next();
                Gt !== null && !le.done;
                ee++, le = F.next()
              ) {
                Gt.index > ee ? ((we = Gt), (Gt = null)) : (we = Gt.sibling);
                var xn = At(q, Gt, le.value, it);
                if (xn === null) {
                  Gt === null && (Gt = we);
                  break;
                }
                (l && Gt && xn.alternate === null && a(q, Gt),
                  (z = v(xn, z, ee)),
                  ye === null ? (Et = xn) : (ye.sibling = xn),
                  (ye = xn),
                  (Gt = we));
              }
              if (le.done) return (i(q, Gt), $t && rt(q, ee), Et);
              if (Gt === null) {
                for (; !le.done; ee++, le = F.next())
                  ((le = mt(q, le.value, it)),
                    le !== null && ((z = v(le, z, ee)), ye === null ? (Et = le) : (ye.sibling = le), (ye = le)));
                return ($t && rt(q, ee), Et);
              }
              for (Gt = f(Gt); !le.done; ee++, le = F.next())
                ((le = Ut(Gt, q, ee, le.value, it)),
                  le !== null &&
                    (l && le.alternate !== null && Gt.delete(le.key === null ? ee : le.key),
                    (z = v(le, z, ee)),
                    ye === null ? (Et = le) : (ye.sibling = le),
                    (ye = le)));
              return (
                l &&
                  Gt.forEach(function (vf) {
                    return a(q, vf);
                  }),
                $t && rt(q, ee),
                Et
              );
            }
            function Pu(q, z, F, it) {
              if (
                (typeof F == "object" && F !== null && F.type === bi && F.key === null && (F = F.props.children),
                typeof F == "object" && F !== null)
              ) {
                switch (F.$$typeof) {
                  case Mn:
                    t: {
                      for (var Et = F.key; z !== null;) {
                        if (z.key === Et) {
                          if (((Et = F.type), Et === bi)) {
                            if (z.tag === 7) {
                              (i(q, z.sibling), (it = m(z, F.props.children)), (it.return = q), (q = it));
                              break t;
                            }
                          } else if (
                            z.elementType === Et ||
                            (typeof Et == "object" && Et !== null && Et.$$typeof === Ga && ii(Et) === z.type)
                          ) {
                            (i(q, z.sibling), (it = m(z, F.props)), ni(it, F), (it.return = q), (q = it));
                            break t;
                          }
                          i(q, z);
                          break;
                        } else a(q, z);
                        z = z.sibling;
                      }
                      F.type === bi
                        ? ((it = bn(F.props.children, q.mode, it, F.key)), (it.return = q), (q = it))
                        : ((it = Aa(F.type, F.key, F.props, null, q.mode, it)), ni(it, F), (it.return = q), (q = it));
                    }
                    return M(q);
                  case Ha:
                    t: {
                      for (Et = F.key; z !== null;) {
                        if (z.key === Et)
                          if (
                            z.tag === 4 &&
                            z.stateNode.containerInfo === F.containerInfo &&
                            z.stateNode.implementation === F.implementation
                          ) {
                            (i(q, z.sibling), (it = m(z, F.children || [])), (it.return = q), (q = it));
                            break t;
                          } else {
                            i(q, z);
                            break;
                          }
                        else a(q, z);
                        z = z.sibling;
                      }
                      ((it = gi(F, q.mode, it)), (it.return = q), (q = it));
                    }
                    return M(q);
                  case Ga:
                    return ((Et = F._init), (F = Et(F._payload)), Pu(q, z, F, it));
                }
                if (cu(F)) return Xl(q, z, F, it);
                if (y(F)) {
                  if (((Et = y(F)), typeof Et != "function")) throw Error(A(150));
                  return ((F = Et.call(F)), wc(q, z, F, it));
                }
                if (typeof F.then == "function") return Pu(q, z, is(F), it);
                if (F.$$typeof === ka) return Pu(q, z, vc(q, F), it);
                ui(q, F);
              }
              return (typeof F == "string" && F !== "") || typeof F == "number" || typeof F == "bigint"
                ? ((F = "" + F),
                  z !== null && z.tag === 6
                    ? (i(q, z.sibling), (it = m(z, F)), (it.return = q), (q = it))
                    : (i(q, z), (it = au(F, q.mode, it)), (it.return = q), (q = it)),
                  M(q))
                : i(q, z);
            }
            return function (q, z, F, it) {
              try {
                Ba = 0;
                var Et = Pu(q, z, F, it);
                return ((nn = null), Et);
              } catch (Gt) {
                if (Gt === oe) throw Gt;
                var ye = r(29, Gt, null, q.mode);
                return ((ye.lanes = it), (ye.return = q), ye);
              } finally {
              }
            };
          }
          function _f(l, a) {
            ((l = Na), K(ua, l), K(un, a), (Na = l | a.baseLanes));
          }
          function cs() {
            (K(ua, Na), K(un, un.current));
          }
          function ss() {
            ((Na = ua.current), j(un), j(ua));
          }
          function Ya(l) {
            var a = l.alternate;
            (K(qe, qe.current & 1),
              K(ia, l),
              Ea === null && (a === null || un.current !== null || a.memoizedState !== null) && (Ea = l));
          }
          function fs(l) {
            if (l.tag === 22) {
              if ((K(qe, qe.current), K(ia, l), Ea === null)) {
                var a = l.alternate;
                a !== null && a.memoizedState !== null && (Ea = l);
              }
            } else dn();
          }
          function dn() {
            (K(qe, qe.current), K(ia, ia.current));
          }
          function Xa(l) {
            (j(ia), Ea === l && (Ea = null), j(qe));
          }
          function ba(l) {
            for (var a = l; a !== null;) {
              if (a.tag === 13) {
                var i = a.memoizedState;
                if (i !== null && ((i = i.dehydrated), i === null || Ps(i) || Nc(i))) return a;
              } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
                if ((a.flags & 128) !== 0) return a;
              } else if (a.child !== null) {
                ((a.child.return = a), (a = a.child));
                continue;
              }
              if (a === l) break;
              for (; a.sibling === null;) {
                if (a.return === null || a.return === l) return null;
                a = a.return;
              }
              ((a.sibling.return = a.return), (a = a.sibling));
            }
            return null;
          }
          function Yt() {
            throw Error(A(321));
          }
          function dl(l, a) {
            if (a === null) return !1;
            for (var i = 0; i < a.length && i < l.length; i++) if (!ta(l[i], a[i])) return !1;
            return !0;
          }
          function Qn(l, a, i, f, m, v) {
            return (
              (cn = v),
              (xt = a),
              (a.memoizedState = null),
              (a.updateQueue = null),
              (a.lanes = 0),
              (Tt.H = l === null || l.memoizedState === null ? Ze : Bl),
              (On = !1),
              (v = i(f, m)),
              (On = !1),
              Me && (v = Mr(a, i, f, m)),
              os(l),
              v
            );
          }
          function os(l) {
            Tt.H = te;
            var a = ae !== null && ae.next !== null;
            if (((cn = 0), (Je = ae = xt = null), (Ca = !1), (Oe = 0), (Ji = null), a)) throw Error(A(300));
            l === null || xe || ((l = l.dependencies), l !== null && Fn(l) && (xe = !0));
          }
          function Mr(l, a, i, f) {
            xt = l;
            var m = 0;
            do {
              if ((Me && (Ji = null), (Oe = 0), (Me = !1), 25 <= m)) throw Error(A(301));
              if (((m += 1), (Je = ae = null), l.updateQueue != null)) {
                var v = l.updateQueue;
                ((v.lastEffect = null),
                  (v.events = null),
                  (v.stores = null),
                  v.memoCache != null && (v.memoCache.index = 0));
              }
              ((Tt.H = Au), (v = a(i, f)));
            } while (Me);
            return v;
          }
          function pm() {
            var l = Tt.H,
              a = l.useState()[0];
            return (
              (a = typeof a.then == "function" ? mn(a) : a),
              (l = l.useState()[0]),
              (ae !== null ? ae.memoizedState : null) !== l && (xt.flags |= 1024),
              a
            );
          }
          function rs() {
            var l = Vc !== 0;
            return ((Vc = 0), l);
          }
          function Su(l, a, i) {
            ((a.updateQueue = l.updateQueue), (a.flags &= -2053), (l.lanes &= ~i));
          }
          function ec(l) {
            if (Ca) {
              for (l = l.memoizedState; l !== null;) {
                var a = l.queue;
                (a !== null && (a.pending = null), (l = l.next));
              }
              Ca = !1;
            }
            ((cn = 0), (Je = ae = xt = null), (Me = !1), (Oe = Vc = 0), (Ji = null));
          }
          function Fe() {
            var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
            return (Je === null ? (xt.memoizedState = Je = l) : (Je = Je.next = l), Je);
          }
          function Ce() {
            if (ae === null) {
              var l = xt.alternate;
              l = l !== null ? l.memoizedState : null;
            } else l = ae.next;
            var a = Je === null ? xt.memoizedState : Je.next;
            if (a !== null) ((Je = a), (ae = l));
            else {
              if (l === null) throw xt.alternate === null ? Error(A(467)) : Error(A(310));
              ((ae = l),
                (l = {
                  memoizedState: ae.memoizedState,
                  baseState: ae.baseState,
                  baseQueue: ae.baseQueue,
                  queue: ae.queue,
                  next: null,
                }),
                Je === null ? (xt.memoizedState = Je = l) : (Je = Je.next = l));
            }
            return Je;
          }
          function mn(l) {
            var a = Oe;
            return (
              (Oe += 1),
              Ji === null && (Ji = []),
              (l = tc(Ji, l, a)),
              (a = xt),
              (Je === null ? a.memoizedState : Je.next) === null &&
                ((a = a.alternate), (Tt.H = a === null || a.memoizedState === null ? Ze : Bl)),
              l
            );
          }
          function hn(l) {
            if (l !== null && typeof l == "object") {
              if (typeof l.then == "function") return mn(l);
              if (l.$$typeof === ka) return ll(l);
            }
            throw Error(A(438, String(l)));
          }
          function Ye(l) {
            var a = null,
              i = xt.updateQueue;
            if ((i !== null && (a = i.memoCache), a == null)) {
              var f = xt.alternate;
              f !== null &&
                ((f = f.updateQueue),
                f !== null &&
                  ((f = f.memoCache),
                  f != null &&
                    (a = {
                      data: f.data.map(function (m) {
                        return m.slice();
                      }),
                      index: 0,
                    })));
            }
            if (
              (a == null && (a = { data: [], index: 0 }),
              i === null && ((i = ff()), (xt.updateQueue = i)),
              (i.memoCache = a),
              (i = a.data[a.index]),
              i === void 0)
            )
              for (i = a.data[a.index] = Array(l), f = 0; f < l; f++) i[f] = ld;
            return (a.index++, i);
          }
          function qa(l, a) {
            return typeof a == "function" ? a(l) : a;
          }
          function lc(l) {
            var a = Ce();
            return An(a, ae, l);
          }
          function An(l, a, i) {
            var f = l.queue;
            if (f === null) throw Error(A(311));
            f.lastRenderedReducer = i;
            var m = l.baseQueue,
              v = f.pending;
            if (v !== null) {
              if (m !== null) {
                var M = m.next;
                ((m.next = v.next), (v.next = M));
              }
              ((a.baseQueue = m = v), (f.pending = null));
            }
            if (((v = l.baseState), m === null)) l.memoizedState = v;
            else {
              a = m.next;
              var G = (M = null),
                x = null,
                k = a,
                ft = !1;
              do {
                var mt = k.lane & -536870913;
                if (mt !== k.lane ? (Qt & mt) === mt : (cn & mt) === mt) {
                  var At = k.revertLane;
                  if (At === 0)
                    (x !== null &&
                      (x = x.next =
                        {
                          lane: 0,
                          revertLane: 0,
                          action: k.action,
                          hasEagerState: k.hasEagerState,
                          eagerState: k.eagerState,
                          next: null,
                        }),
                      mt === Ql && (ft = !0));
                  else if ((cn & At) === At) {
                    ((k = k.next), At === Ql && (ft = !0));
                    continue;
                  } else
                    ((mt = {
                      lane: 0,
                      revertLane: k.revertLane,
                      action: k.action,
                      hasEagerState: k.hasEagerState,
                      eagerState: k.eagerState,
                      next: null,
                    }),
                      x === null ? ((G = x = mt), (M = v)) : (x = x.next = mt),
                      (xt.lanes |= At),
                      (sa |= At));
                  ((mt = k.action), On && i(v, mt), (v = k.hasEagerState ? k.eagerState : i(v, mt)));
                } else
                  ((At = {
                    lane: mt,
                    revertLane: k.revertLane,
                    action: k.action,
                    hasEagerState: k.hasEagerState,
                    eagerState: k.eagerState,
                    next: null,
                  }),
                    x === null ? ((G = x = At), (M = v)) : (x = x.next = At),
                    (xt.lanes |= mt),
                    (sa |= mt));
                k = k.next;
              } while (k !== null && k !== a);
              if (
                (x === null ? (M = v) : (x.next = G),
                !ta(v, l.memoizedState) && ((xe = !0), ft && ((i = mu), i !== null)))
              )
                throw i;
              ((l.memoizedState = v), (l.baseState = M), (l.baseQueue = x), (f.lastRenderedState = v));
            }
            return (m === null && (f.lanes = 0), [l.memoizedState, f.dispatch]);
          }
          function Kn(l) {
            var a = Ce(),
              i = a.queue;
            if (i === null) throw Error(A(311));
            i.lastRenderedReducer = l;
            var f = i.dispatch,
              m = i.pending,
              v = a.memoizedState;
            if (m !== null) {
              i.pending = null;
              var M = (m = m.next);
              do ((v = l(v, M.action)), (M = M.next));
              while (M !== m);
              (ta(v, a.memoizedState) || (xe = !0),
                (a.memoizedState = v),
                a.baseQueue === null && (a.baseState = v),
                (i.lastRenderedState = v));
            }
            return [v, f];
          }
          function Tr(l, a, i) {
            var f = xt,
              m = Ce(),
              v = $t;
            if (v) {
              if (i === void 0) throw Error(A(407));
              i = i();
            } else i = a();
            var M = !ta((ae || m).memoizedState, i);
            if (
              (M && ((m.memoizedState = i), (xe = !0)),
              (m = m.queue),
              ic(Dr.bind(null, f, m, l), [l]),
              m.getSnapshot !== a || M || (Je !== null && Je.memoizedState.tag & 1))
            ) {
              if (((f.flags |= 2048), gu(9, Nf.bind(null, f, m, i, a), { destroy: void 0 }, null), Lt === null))
                throw Error(A(349));
              v || (cn & 60) !== 0 || Uf(f, a, i);
            }
            return i;
          }
          function Uf(l, a, i) {
            ((l.flags |= 16384),
              (l = { getSnapshot: a, value: i }),
              (a = xt.updateQueue),
              a === null
                ? ((a = ff()), (xt.updateQueue = a), (a.stores = [l]))
                : ((i = a.stores), i === null ? (a.stores = [l]) : i.push(l)));
          }
          function Nf(l, a, i, f) {
            ((a.value = i), (a.getSnapshot = f), ac(a) && nc(l));
          }
          function Dr(l, a, i) {
            return i(function () {
              ac(a) && nc(l);
            });
          }
          function ac(l) {
            var a = l.getSnapshot;
            l = l.value;
            try {
              var i = a();
              return !ta(l, i);
            } catch {
              return !0;
            }
          }
          function nc(l) {
            var a = ol(l, 2);
            a !== null && Al(a, l, 2);
          }
          function Ma(l) {
            var a = Fe();
            if (typeof l == "function") {
              var i = l;
              if (((l = i()), On)) {
                N(!0);
                try {
                  i();
                } finally {
                  N(!1);
                }
              }
            }
            return (
              (a.memoizedState = a.baseState = l),
              (a.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: qa, lastRenderedState: l }),
              a
            );
          }
          function Fl(l, a, i, f) {
            return ((l.baseState = i), An(l, ae, typeof f == "function" ? f : qa));
          }
          function Rr(l, a, i, f, m) {
            if (Du(l)) throw Error(A(485));
            if (((l = a.action), l !== null)) {
              var v = {
                payload: m,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (M) {
                  v.listeners.push(M);
                },
              };
              (Tt.T !== null ? i(!0) : (v.isTransition = !1),
                f(v),
                (i = a.pending),
                i === null ? ((v.next = a.pending = v), Hr(a, v)) : ((v.next = i.next), (a.pending = i.next = v)));
            }
          }
          function Hr(l, a) {
            var i = a.action,
              f = a.payload,
              m = l.state;
            if (a.isTransition) {
              var v = Tt.T,
                M = {};
              Tt.T = M;
              try {
                var G = i(m, f),
                  x = Tt.S;
                (x !== null && x(M, G), ds(l, a, G));
              } catch (k) {
                ci(l, a, k);
              } finally {
                Tt.T = v;
              }
            } else
              try {
                ((v = i(m, f)), ds(l, a, v));
              } catch (k) {
                ci(l, a, k);
              }
          }
          function ds(l, a, i) {
            i !== null && typeof i == "object" && typeof i.then == "function"
              ? i.then(
                  function (f) {
                    zf(l, a, f);
                  },
                  function (f) {
                    return ci(l, a, f);
                  },
                )
              : zf(l, a, i);
          }
          function zf(l, a, i) {
            ((a.status = "fulfilled"),
              (a.value = i),
              Gr(a),
              (l.state = i),
              (a = l.pending),
              a !== null && ((i = a.next), i === a ? (l.pending = null) : ((i = i.next), (a.next = i), Hr(l, i))));
          }
          function ci(l, a, i) {
            var f = l.pending;
            if (((l.pending = null), f !== null)) {
              f = f.next;
              do ((a.status = "rejected"), (a.reason = i), Gr(a), (a = a.next));
              while (a !== f);
            }
            l.action = null;
          }
          function Gr(l) {
            l = l.listeners;
            for (var a = 0; a < l.length; a++) (0, l[a])();
          }
          function Vl(l, a) {
            return a;
          }
          function ms(l, a) {
            if ($t) {
              var i = Lt.formState;
              if (i !== null) {
                t: {
                  var f = xt;
                  if ($t) {
                    if (cl) {
                      var m = fd(cl, pa);
                      if (m) {
                        ((cl = Jo(m)), (f = od(m)));
                        break t;
                      }
                    }
                    de(f);
                  }
                  f = !1;
                }
                f && (a = i[0]);
              }
            }
            ((i = Fe()),
              (i.memoizedState = i.baseState = a),
              (f = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vl, lastRenderedState: a }),
              (i.queue = f),
              (i = Bs.bind(null, xt, f)),
              (f.dispatch = i),
              (f = Ma(!1)));
            var v = Es.bind(null, xt, !1, f.queue);
            return (
              (f = Fe()),
              (m = { state: a, dispatch: null, action: l, pending: null }),
              (f.queue = m),
              (i = Rr.bind(null, xt, m, v, i)),
              (m.dispatch = i),
              (f.memoizedState = l),
              [a, i, !1]
            );
          }
          function Jf(l) {
            var a = Ce();
            return hs(a, ae, l);
          }
          function hs(l, a, i) {
            ((a = An(l, a, Vl)[0]),
              (l = lc(qa)[0]),
              (a = typeof a == "object" && a !== null && typeof a.then == "function" ? mn(a) : a));
            var f = Ce(),
              m = f.queue,
              v = m.dispatch;
            return (
              i !== f.memoizedState && ((xt.flags |= 2048), gu(9, si.bind(null, m, i), { destroy: void 0 }, null)),
              [a, v, l]
            );
          }
          function si(l, a) {
            l.action = a;
          }
          function xf(l) {
            var a = Ce(),
              i = ae;
            if (i !== null) return hs(a, i, l);
            (Ce(), (a = a.memoizedState), (i = Ce()));
            var f = i.queue.dispatch;
            return ((i.memoizedState = l), [a, f, !1]);
          }
          function gu(l, a, i, f) {
            return (
              (l = { tag: l, create: a, inst: i, deps: f, next: null }),
              (a = xt.updateQueue),
              a === null && ((a = ff()), (xt.updateQueue = a)),
              (i = a.lastEffect),
              i === null ? (a.lastEffect = l.next = l) : ((f = i.next), (i.next = l), (l.next = f), (a.lastEffect = l)),
              l
            );
          }
          function bu() {
            return Ce().memoizedState;
          }
          function As(l, a, i, f) {
            var m = Fe();
            ((xt.flags |= l), (m.memoizedState = gu(1 | a, i, { destroy: void 0 }, f === void 0 ? null : f)));
          }
          function uc(l, a, i, f) {
            var m = Ce();
            f = f === void 0 ? null : f;
            var v = m.memoizedState.inst;
            ae !== null && f !== null && dl(f, ae.memoizedState.deps)
              ? (m.memoizedState = gu(a, i, v, f))
              : ((xt.flags |= l), (m.memoizedState = gu(1 | a, i, v, f)));
          }
          function jf(l, a) {
            As(8390656, 8, l, a);
          }
          function ic(l, a) {
            uc(2048, 8, l, a);
          }
          function Or(l, a) {
            return uc(4, 2, l, a);
          }
          function _r(l, a) {
            return uc(4, 4, l, a);
          }
          function cc(l, a) {
            if (typeof a == "function") {
              l = l();
              var i = a(l);
              return function () {
                typeof i == "function" ? i() : a(null);
              };
            }
            if (a != null)
              return (
                (l = l()),
                (a.current = l),
                function () {
                  a.current = null;
                }
              );
          }
          function Za(l, a, i) {
            ((i = i != null ? i.concat([l]) : null), uc(4, 4, cc.bind(null, a, l), i));
          }
          function sc() {}
          function vs(l, a) {
            var i = Ce();
            a = a === void 0 ? null : a;
            var f = i.memoizedState;
            return a !== null && dl(a, f[1]) ? f[0] : ((i.memoizedState = [l, a]), l);
          }
          function Mu(l, a) {
            var i = Ce();
            a = a === void 0 ? null : a;
            var f = i.memoizedState;
            if (a !== null && dl(a, f[1])) return f[0];
            if (((f = l()), On)) {
              N(!0);
              try {
                l();
              } finally {
                N(!1);
              }
            }
            return ((i.memoizedState = [f, a]), f);
          }
          function Ln(l, a, i) {
            return i === void 0 || (cn & 1073741824) !== 0
              ? (l.memoizedState = a)
              : ((l.memoizedState = i), (l = Ia()), (xt.lanes |= l), (sa |= l), i);
          }
          function Qf(l, a, i, f) {
            return ta(i, a)
              ? i
              : un.current !== null
                ? ((l = Ln(l, i, f)), ta(l, a) || (xe = !0), l)
                : (cn & 42) === 0
                  ? ((xe = !0), (l.memoizedState = i))
                  : ((l = Ia()), (xt.lanes |= l), (sa |= l), a);
          }
          function ys(l, a, i, f, m) {
            var v = Ve();
            yl(v !== 0 && 8 > v ? v : 8);
            var M = Tt.T,
              G = {};
            ((Tt.T = G), Es(l, !1, a, i));
            try {
              var x = m(),
                k = Tt.S;
              if ((k !== null && k(G, x), x !== null && typeof x == "object" && typeof x.then == "function")) {
                var ft = Sr(x, f);
                Xn(l, a, ft, Dl(l));
              } else Xn(l, a, f, Dl(l));
            } catch (mt) {
              Xn(l, a, { then: function () {}, status: "rejected", reason: mt }, Dl());
            } finally {
              (yl(v), (Tt.T = M));
            }
          }
          function Kf(l) {
            var a = l.memoizedState;
            if (a !== null) return a;
            a = {
              memoizedState: Jl,
              baseState: Jl,
              baseQueue: null,
              queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: qa, lastRenderedState: Jl },
              next: null,
            };
            var i = {};
            return (
              (a.next = {
                memoizedState: i,
                baseState: i,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: qa, lastRenderedState: i },
                next: null,
              }),
              (l.memoizedState = a),
              (l = l.alternate),
              l !== null && (l.memoizedState = a),
              a
            );
          }
          function Tu() {
            return ll(Ht);
          }
          function Fa() {
            return Ce().memoizedState;
          }
          function ps() {
            return Ce().memoizedState;
          }
          function fc(l) {
            for (var a = l.return; a !== null;) {
              switch (a.tag) {
                case 24:
                case 3:
                  var i = Dl();
                  l = ma(i);
                  var f = Le(a, l, i);
                  (f !== null && (Al(f, a, i), ha(f, a, i)), (a = { cache: Ms() }), (l.payload = a));
                  return;
              }
              a = a.return;
            }
          }
          function Yn(l, a, i) {
            var f = Dl();
            ((i = { lane: f, revertLane: 0, action: i, hasEagerState: !1, eagerState: null, next: null }),
              Du(l) ? oc(a, i) : ((i = Eu(l, a, i, f)), i !== null && (Al(i, l, f), Lf(i, a, f))));
          }
          function Bs(l, a, i) {
            var f = Dl();
            Xn(l, a, i, f);
          }
          function Xn(l, a, i, f) {
            var m = { lane: f, revertLane: 0, action: i, hasEagerState: !1, eagerState: null, next: null };
            if (Du(l)) oc(a, m);
            else {
              var v = l.alternate;
              if (l.lanes === 0 && (v === null || v.lanes === 0) && ((v = a.lastRenderedReducer), v !== null))
                try {
                  var M = a.lastRenderedState,
                    G = v(M, i);
                  if (((m.hasEagerState = !0), (m.eagerState = G), ta(G, M)))
                    return (ga(l, a, m, 0), Lt === null && fl(), !1);
                } catch {
                } finally {
                }
              if (((i = Eu(l, a, m, f)), i !== null)) return (Al(i, l, f), Lf(i, a, f), !0);
            }
            return !1;
          }
          function Es(l, a, i, f) {
            if (
              ((f = { lane: 2, revertLane: da(), action: f, hasEagerState: !1, eagerState: null, next: null }), Du(l))
            ) {
              if (a) throw Error(A(479));
            } else ((a = Eu(l, i, f, 2)), a !== null && Al(a, l, 2));
          }
          function Du(l) {
            var a = l.alternate;
            return l === xt || (a !== null && a === xt);
          }
          function oc(l, a) {
            Me = Ca = !0;
            var i = l.pending;
            (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)), (l.pending = a));
          }
          function Lf(l, a, i) {
            if ((i & 4194176) !== 0) {
              var f = a.lanes;
              ((f &= l.pendingLanes), (i |= f), (a.lanes = i), Jt(l, i));
            }
          }
          function ml(l, a, i, f) {
            ((a = l.memoizedState),
              (i = i(f, a)),
              (i = i == null ? a : xu({}, a, i)),
              (l.memoizedState = i),
              l.lanes === 0 && (l.updateQueue.baseState = i));
          }
          function qn(l, a, i, f, m, v, M) {
            return (
              (l = l.stateNode),
              typeof l.shouldComponentUpdate == "function"
                ? l.shouldComponentUpdate(f, v, M)
                : a.prototype && a.prototype.isPureReactComponent
                  ? !Cu(i, f) || !Cu(m, v)
                  : !0
            );
          }
          function rc(l, a, i, f) {
            ((l = a.state),
              typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(i, f),
              typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(i, f),
              a.state !== l && of.enqueueReplaceState(a, a.state, null));
          }
          function Ta(l, a) {
            var i = a;
            if ("ref" in a) {
              i = {};
              for (var f in a) f !== "ref" && (i[f] = a[f]);
            }
            if ((l = l.defaultProps)) {
              i === a && (i = xu({}, i));
              for (var m in l) i[m] === void 0 && (i[m] = l[m]);
            }
            return i;
          }
          function Cs(l, a) {
            try {
              var i = l.onUncaughtError;
              i(a.value, { componentStack: a.stack });
            } catch (f) {
              setTimeout(function () {
                throw f;
              });
            }
          }
          function Ss(l, a, i) {
            try {
              var f = l.onCaughtError;
              f(i.value, { componentStack: i.stack, errorBoundary: a.tag === 1 ? a.stateNode : null });
            } catch (m) {
              setTimeout(function () {
                throw m;
              });
            }
          }
          function dc(l, a, i) {
            return (
              (i = ma(i)),
              (i.tag = 3),
              (i.payload = { element: null }),
              (i.callback = function () {
                Cs(l, a);
              }),
              i
            );
          }
          function fi(l) {
            return ((l = ma(l)), (l.tag = 3), l);
          }
          function mc(l, a, i, f) {
            var m = i.type.getDerivedStateFromError;
            if (typeof m == "function") {
              var v = f.value;
              ((l.payload = function () {
                return m(v);
              }),
                (l.callback = function () {
                  Ss(a, i, f);
                }));
            }
            var M = i.stateNode;
            M !== null &&
              typeof M.componentDidCatch == "function" &&
              (l.callback = function () {
                (Ss(a, i, f), typeof m != "function" && (oa === null ? (oa = new Set([this])) : oa.add(this)));
                var G = f.stack;
                this.componentDidCatch(f.value, { componentStack: G !== null ? G : "" });
              });
          }
          function Ur(l, a, i, f, m) {
            if (((i.flags |= 32768), f !== null && typeof f == "object" && typeof f.then == "function")) {
              if (((a = i.alternate), a !== null && Ru(a, i, m, !0), (i = ia.current), i !== null)) {
                switch (i.tag) {
                  case 13:
                    return (
                      Ea === null ? zl() : i.alternate === null && Pt === 0 && (Pt = 3),
                      (i.flags &= -257),
                      (i.flags |= 65536),
                      (i.lanes = m),
                      f === sf
                        ? (i.flags |= 16384)
                        : ((a = i.updateQueue), a === null ? (i.updateQueue = new Set([f])) : a.add(f), Qs(l, f, m)),
                      !1
                    );
                  case 22:
                    return (
                      (i.flags |= 65536),
                      f === sf
                        ? (i.flags |= 16384)
                        : ((a = i.updateQueue),
                          a === null
                            ? ((a = { transitions: null, markerInstances: null, retryQueue: new Set([f]) }),
                              (i.updateQueue = a))
                            : ((i = a.retryQueue), i === null ? (a.retryQueue = new Set([f])) : i.add(f)),
                          Qs(l, f, m)),
                      !1
                    );
                }
                throw Error(A(435, i.tag));
              }
              return (Qs(l, f, m), zl(), !1);
            }
            if ($t)
              return (
                (a = ia.current),
                a !== null
                  ? ((a.flags & 65536) === 0 && (a.flags |= 256),
                    (a.flags |= 65536),
                    (a.lanes = m),
                    f !== Yc && ((l = Error(A(422), { cause: f })), sl(ut(l, i))))
                  : (f !== Yc && ((a = Error(A(423), { cause: f })), sl(ut(a, i))),
                    (l = l.current.alternate),
                    (l.flags |= 65536),
                    (m &= -m),
                    (l.lanes |= m),
                    (f = ut(f, i)),
                    (m = dc(l.stateNode, f, m)),
                    bl(l, m),
                    Pt !== 4 && (Pt = 2)),
                !1
              );
            var v = Error(A(520), { cause: f });
            if (((v = ut(v, i)), ji === null ? (ji = [v]) : ji.push(v), Pt !== 4 && (Pt = 2), a === null)) return !0;
            ((f = ut(f, i)), (i = a));
            do {
              switch (i.tag) {
                case 3:
                  return ((i.flags |= 65536), (l = m & -m), (i.lanes |= l), (l = dc(i.stateNode, f, l)), bl(i, l), !1);
                case 1:
                  if (
                    ((a = i.type),
                    (v = i.stateNode),
                    (i.flags & 128) === 0 &&
                      (typeof a.getDerivedStateFromError == "function" ||
                        (v !== null && typeof v.componentDidCatch == "function" && (oa === null || !oa.has(v)))))
                  )
                    return ((i.flags |= 65536), (m &= -m), (i.lanes |= m), (m = fi(m)), mc(m, l, i, f), bl(i, m), !1);
              }
              i = i.return;
            } while (i !== null);
            return !1;
          }
          function el(l, a, i, f) {
            a.child = l === null ? Po(a, null, i, f) : hu(a, l.child, i, f);
          }
          function Nr(l, a, i, f, m) {
            i = i.render;
            var v = a.ref;
            if ("ref" in f) {
              var M = {};
              for (var G in f) G !== "ref" && (M[G] = f[G]);
            } else M = f;
            return (
              Hu(a),
              (f = Qn(l, a, i, M, v, m)),
              (G = rs()),
              l !== null && !xe
                ? (Su(l, a, m), vn(l, a, m))
                : ($t && G && X(a), (a.flags |= 1), el(l, a, f, m), a.child)
            );
          }
          function zr(l, a, i, f, m) {
            if (l === null) {
              var v = i.type;
              return typeof v == "function" && !Sn(v) && v.defaultProps === void 0 && i.compare === null
                ? ((a.tag = 15), (a.type = v), gs(l, a, v, f, m))
                : ((l = Aa(i.type, null, f, a, a.mode, m)), (l.ref = a.ref), (l.return = a), (a.child = l));
            }
            if (((v = l.child), !If(l, m))) {
              var M = v.memoizedProps;
              if (((i = i.compare), (i = i !== null ? i : Cu), i(M, f) && l.ref === a.ref)) return vn(l, a, m);
            }
            return ((a.flags |= 1), (l = vl(v, f)), (l.ref = a.ref), (l.return = a), (a.child = l));
          }
          function gs(l, a, i, f, m) {
            if (l !== null) {
              var v = l.memoizedProps;
              if (Cu(v, f) && l.ref === a.ref)
                if (((xe = !1), (a.pendingProps = f = v), If(l, m))) (l.flags & 131072) !== 0 && (xe = !0);
                else return ((a.lanes = l.lanes), vn(l, a, m));
            }
            return Yf(l, a, i, f, m);
          }
          function Jr(l, a, i) {
            var f = a.pendingProps,
              m = f.children,
              v = (a.stateNode._pendingVisibility & 2) !== 0,
              M = l !== null ? l.memoizedState : null;
            if ((hc(l, a), f.mode === "hidden" || v)) {
              if ((a.flags & 128) !== 0) {
                if (((f = M !== null ? M.baseLanes | i : i), l !== null)) {
                  for (m = a.child = l.child, v = 0; m !== null;) ((v = v | m.lanes | m.childLanes), (m = m.sibling));
                  a.childLanes = v & ~f;
                } else ((a.childLanes = 0), (a.child = null));
                return xr(l, a, f, i);
              }
              if ((i & 536870912) !== 0)
                ((a.memoizedState = { baseLanes: 0, cachePool: null }),
                  l !== null && Ts(a, M !== null ? M.cachePool : null),
                  M !== null ? _f(a, M) : cs(),
                  fs(a));
              else return ((a.lanes = a.childLanes = 536870912), xr(l, a, M !== null ? M.baseLanes | i : i, i));
            } else
              M !== null
                ? (Ts(a, M.cachePool), _f(a, M), dn(), (a.memoizedState = null))
                : (l !== null && Ts(a, null), cs(), dn());
            return (el(l, a, m, i), a.child);
          }
          function xr(l, a, i, f) {
            var m = Vn();
            return (
              (m = m === null ? null : { parent: tn ? ue._currentValue : ue._currentValue2, pool: m }),
              (a.memoizedState = { baseLanes: i, cachePool: m }),
              l !== null && Ts(a, null),
              cs(),
              fs(a),
              l !== null && Ru(l, a, f, !0),
              null
            );
          }
          function hc(l, a) {
            var i = a.ref;
            if (i === null) l !== null && l.ref !== null && (a.flags |= 2097664);
            else {
              if (typeof i != "function" && typeof i != "object") throw Error(A(284));
              (l === null || l.ref !== i) && (a.flags |= 2097664);
            }
          }
          function Yf(l, a, i, f, m) {
            return (
              Hu(a),
              (i = Qn(l, a, i, f, void 0, m)),
              (f = rs()),
              l !== null && !xe
                ? (Su(l, a, m), vn(l, a, m))
                : ($t && f && X(a), (a.flags |= 1), el(l, a, i, m), a.child)
            );
          }
          function jr(l, a, i, f, m, v) {
            return (
              Hu(a),
              (a.updateQueue = null),
              (i = Mr(a, f, i, m)),
              os(l),
              (f = rs()),
              l !== null && !xe
                ? (Su(l, a, v), vn(l, a, v))
                : ($t && f && X(a), (a.flags |= 1), el(l, a, i, v), a.child)
            );
          }
          function Xf(l, a, i, f, m) {
            if ((Hu(a), a.stateNode === null)) {
              var v = Yu,
                M = i.contextType;
              (typeof M == "object" && M !== null && (v = ll(M)),
                (v = new i(f, v)),
                (a.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null),
                (v.updater = of),
                (a.stateNode = v),
                (v._reactInternals = a),
                (v = a.stateNode),
                (v.props = f),
                (v.state = a.memoizedState),
                (v.refs = {}),
                Gf(a),
                (M = i.contextType),
                (v.context = typeof M == "object" && M !== null ? ll(M) : Yu),
                (v.state = a.memoizedState),
                (M = i.getDerivedStateFromProps),
                typeof M == "function" && (ml(a, i, M, f), (v.state = a.memoizedState)),
                typeof i.getDerivedStateFromProps == "function" ||
                  typeof v.getSnapshotBeforeUpdate == "function" ||
                  (typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function") ||
                  ((M = v.state),
                  typeof v.componentWillMount == "function" && v.componentWillMount(),
                  typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(),
                  M !== v.state && of.enqueueReplaceState(v, v.state, null),
                  Pi(a, f, v, m),
                  Wi(),
                  (v.state = a.memoizedState)),
                typeof v.componentDidMount == "function" && (a.flags |= 4194308),
                (f = !0));
            } else if (l === null) {
              v = a.stateNode;
              var G = a.memoizedProps,
                x = Ta(i, G);
              v.props = x;
              var k = v.context,
                ft = i.contextType;
              ((M = Yu), typeof ft == "object" && ft !== null && (M = ll(ft)));
              var mt = i.getDerivedStateFromProps;
              ((ft = typeof mt == "function" || typeof v.getSnapshotBeforeUpdate == "function"),
                (G = a.pendingProps !== G),
                ft ||
                  (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof v.componentWillReceiveProps != "function") ||
                  ((G || k !== M) && rc(a, v, f, M)),
                (Gn = !1));
              var At = a.memoizedState;
              ((v.state = At),
                Pi(a, f, v, m),
                Wi(),
                (k = a.memoizedState),
                G || At !== k || Gn
                  ? (typeof mt == "function" && (ml(a, i, mt, f), (k = a.memoizedState)),
                    (x = Gn || qn(a, i, x, f, At, k, M))
                      ? (ft ||
                          (typeof v.UNSAFE_componentWillMount != "function" &&
                            typeof v.componentWillMount != "function") ||
                          (typeof v.componentWillMount == "function" && v.componentWillMount(),
                          typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()),
                        typeof v.componentDidMount == "function" && (a.flags |= 4194308))
                      : (typeof v.componentDidMount == "function" && (a.flags |= 4194308),
                        (a.memoizedProps = f),
                        (a.memoizedState = k)),
                    (v.props = f),
                    (v.state = k),
                    (v.context = M),
                    (f = x))
                  : (typeof v.componentDidMount == "function" && (a.flags |= 4194308), (f = !1)));
            } else {
              ((v = a.stateNode),
                Of(l, a),
                (M = a.memoizedProps),
                (ft = Ta(i, M)),
                (v.props = ft),
                (mt = a.pendingProps),
                (At = v.context),
                (k = i.contextType),
                (x = Yu),
                typeof k == "object" && k !== null && (x = ll(k)),
                (G = i.getDerivedStateFromProps),
                (k = typeof G == "function" || typeof v.getSnapshotBeforeUpdate == "function") ||
                  (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof v.componentWillReceiveProps != "function") ||
                  ((M !== mt || At !== x) && rc(a, v, f, x)),
                (Gn = !1),
                (At = a.memoizedState),
                (v.state = At),
                Pi(a, f, v, m),
                Wi());
              var Ut = a.memoizedState;
              M !== mt || At !== Ut || Gn || (l !== null && l.dependencies !== null && Fn(l.dependencies))
                ? (typeof G == "function" && (ml(a, i, G, f), (Ut = a.memoizedState)),
                  (ft =
                    Gn || qn(a, i, ft, f, At, Ut, x) || (l !== null && l.dependencies !== null && Fn(l.dependencies)))
                    ? (k ||
                        (typeof v.UNSAFE_componentWillUpdate != "function" &&
                          typeof v.componentWillUpdate != "function") ||
                        (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(f, Ut, x),
                        typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(f, Ut, x)),
                      typeof v.componentDidUpdate == "function" && (a.flags |= 4),
                      typeof v.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024))
                    : (typeof v.componentDidUpdate != "function" ||
                        (M === l.memoizedProps && At === l.memoizedState) ||
                        (a.flags |= 4),
                      typeof v.getSnapshotBeforeUpdate != "function" ||
                        (M === l.memoizedProps && At === l.memoizedState) ||
                        (a.flags |= 1024),
                      (a.memoizedProps = f),
                      (a.memoizedState = Ut)),
                  (v.props = f),
                  (v.state = Ut),
                  (v.context = x),
                  (f = ft))
                : (typeof v.componentDidUpdate != "function" ||
                    (M === l.memoizedProps && At === l.memoizedState) ||
                    (a.flags |= 4),
                  typeof v.getSnapshotBeforeUpdate != "function" ||
                    (M === l.memoizedProps && At === l.memoizedState) ||
                    (a.flags |= 1024),
                  (f = !1));
            }
            return (
              (v = f),
              hc(l, a),
              (f = (a.flags & 128) !== 0),
              v || f
                ? ((v = a.stateNode),
                  (i = f && typeof i.getDerivedStateFromError != "function" ? null : v.render()),
                  (a.flags |= 1),
                  l !== null && f
                    ? ((a.child = hu(a, l.child, null, m)), (a.child = hu(a, null, i, m)))
                    : el(l, a, i, m),
                  (a.memoizedState = v.state),
                  (l = a.child))
                : (l = vn(l, a, m)),
              l
            );
          }
          function Qr(l, a, i, f) {
            return (Sl(), (a.flags |= 256), el(l, a, i, f), a.child);
          }
          function qf(l) {
            return { baseLanes: l, cachePool: qr() };
          }
          function Zf(l, a, i) {
            return ((l = l !== null ? l.childLanes & ~i : 0), a && (l |= Yl), l);
          }
          function Kr(l, a, i) {
            var f = a.pendingProps,
              m = !1,
              v = (a.flags & 128) !== 0,
              M;
            if (
              ((M = v) || (M = l !== null && l.memoizedState === null ? !1 : (qe.current & 2) !== 0),
              M && ((m = !0), (a.flags &= -129)),
              (M = (a.flags & 32) !== 0),
              (a.flags &= -33),
              l === null)
            ) {
              if ($t) {
                if ((m ? Ya(a) : dn(), $t)) {
                  var G = cl,
                    x;
                  ((x = G) &&
                    ((G = Ad(G, pa)),
                    G !== null
                      ? ((a.memoizedState = {
                          dehydrated: G,
                          treeContext: Oa !== null ? { id: an, overflow: ya } : null,
                          retryLane: 536870912,
                        }),
                        (x = r(18, null, null, 0)),
                        (x.stateNode = G),
                        (x.return = a),
                        (a.child = x),
                        (pl = a),
                        (cl = null),
                        (x = !0))
                      : (x = !1)),
                    x || de(a));
                }
                if (((G = a.memoizedState), G !== null && ((G = G.dehydrated), G !== null)))
                  return (Nc(G) ? (a.lanes = 16) : (a.lanes = 536870912), null);
                Xa(a);
              }
              return (
                (G = f.children),
                (f = f.fallback),
                m
                  ? (dn(),
                    (m = a.mode),
                    (G = Ff({ mode: "hidden", children: G }, m)),
                    (f = bn(f, m, i, null)),
                    (G.return = a),
                    (f.return = a),
                    (G.sibling = f),
                    (a.child = G),
                    (m = a.child),
                    (m.memoizedState = qf(i)),
                    (m.childLanes = Zf(l, M, i)),
                    (a.memoizedState = El),
                    f)
                  : (Ya(a), Ac(a, G))
              );
            }
            if (((x = l.memoizedState), x !== null && ((G = x.dehydrated), G !== null))) {
              if (v)
                a.flags & 256
                  ? (Ya(a), (a.flags &= -257), (a = Vf(l, a, i)))
                  : a.memoizedState !== null
                    ? (dn(), (a.child = l.child), (a.flags |= 128), (a = null))
                    : (dn(),
                      (m = f.fallback),
                      (G = a.mode),
                      (f = Ff({ mode: "visible", children: f.children }, G)),
                      (m = bn(m, G, i, null)),
                      (m.flags |= 2),
                      (f.return = a),
                      (m.return = a),
                      (f.sibling = m),
                      (a.child = f),
                      hu(a, l.child, null, i),
                      (f = a.child),
                      (f.memoizedState = qf(i)),
                      (f.childLanes = Zf(l, M, i)),
                      (a.memoizedState = El),
                      (a = m));
              else if ((Ya(a), Nc(G)))
                ((M = sd(G).digest),
                  (f = Error(A(419))),
                  (f.stack = ""),
                  (f.digest = M),
                  sl({ value: f, source: null, stack: null }),
                  (a = Vf(l, a, i)));
              else if ((xe || Ru(l, a, i, !1), (M = (i & l.childLanes) !== 0), xe || M)) {
                if (((M = Lt), M !== null)) {
                  if (((f = i & -i), (f & 42) !== 0)) f = 1;
                  else
                    switch (f) {
                      case 2:
                        f = 1;
                        break;
                      case 8:
                        f = 4;
                        break;
                      case 32:
                        f = 16;
                        break;
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                      case 4194304:
                      case 8388608:
                      case 16777216:
                      case 33554432:
                        f = 64;
                        break;
                      case 268435456:
                        f = 134217728;
                        break;
                      default:
                        f = 0;
                    }
                  if (((f = (f & (M.suspendedLanes | i)) !== 0 ? 0 : f), f !== 0 && f !== x.retryLane))
                    throw ((x.retryLane = f), ol(l, f), Al(M, l, f), Gd);
                }
                (Ps(G) || zl(), (a = Vf(l, a, i)));
              } else
                Ps(G)
                  ? ((a.flags |= 128), (a.child = l.child), (a = zu.bind(null, l)), Sm(G, a), (a = null))
                  : ((l = x.treeContext),
                    Rl &&
                      ((cl = dd(G)),
                      (pl = a),
                      ($t = !0),
                      (aa = null),
                      (pa = !1),
                      l !== null &&
                        ((ea[la++] = an), (ea[la++] = ya), (ea[la++] = Oa), (an = l.id), (ya = l.overflow), (Oa = a))),
                    (a = Ac(a, f.children)),
                    (a.flags |= 4096));
              return a;
            }
            return m
              ? (dn(),
                (m = f.fallback),
                (G = a.mode),
                (x = l.child),
                (v = x.sibling),
                (f = vl(x, { mode: "hidden", children: f.children })),
                (f.subtreeFlags = x.subtreeFlags & 31457280),
                v !== null ? (m = vl(v, m)) : ((m = bn(m, G, i, null)), (m.flags |= 2)),
                (m.return = a),
                (f.return = a),
                (f.sibling = m),
                (a.child = f),
                (f = m),
                (m = a.child),
                (G = l.child.memoizedState),
                G === null
                  ? (G = qf(i))
                  : ((x = G.cachePool),
                    x !== null
                      ? ((v = tn ? ue._currentValue : ue._currentValue2),
                        (x = x.parent !== v ? { parent: v, pool: v } : x))
                      : (x = qr()),
                    (G = { baseLanes: G.baseLanes | i, cachePool: x })),
                (m.memoizedState = G),
                (m.childLanes = Zf(l, M, i)),
                (a.memoizedState = El),
                f)
              : (Ya(a),
                (i = l.child),
                (l = i.sibling),
                (i = vl(i, { mode: "visible", children: f.children })),
                (i.return = a),
                (i.sibling = null),
                l !== null && ((M = a.deletions), M === null ? ((a.deletions = [l]), (a.flags |= 16)) : M.push(l)),
                (a.child = i),
                (a.memoizedState = null),
                i);
          }
          function Ac(l, a) {
            return ((a = Ff({ mode: "visible", children: a }, l.mode)), (a.return = l), (l.child = a));
          }
          function Ff(l, a) {
            return Ks(l, a, 0, null);
          }
          function Vf(l, a, i) {
            return (
              hu(a, l.child, null, i),
              (l = Ac(a, a.pendingProps.children)),
              (l.flags |= 2),
              (a.memoizedState = null),
              l
            );
          }
          function Lr(l, a, i) {
            l.lanes |= a;
            var f = l.alternate;
            (f !== null && (f.lanes |= a), wf(l.return, a, i));
          }
          function bs(l, a, i, f, m) {
            var v = l.memoizedState;
            v === null
              ? (l.memoizedState = {
                  isBackwards: a,
                  rendering: null,
                  renderingStartTime: 0,
                  last: f,
                  tail: i,
                  tailMode: m,
                })
              : ((v.isBackwards = a),
                (v.rendering = null),
                (v.renderingStartTime = 0),
                (v.last = f),
                (v.tail = i),
                (v.tailMode = m));
          }
          function Yr(l, a, i) {
            var f = a.pendingProps,
              m = f.revealOrder,
              v = f.tail;
            if ((el(l, a, f.children, i), (f = qe.current), (f & 2) !== 0)) ((f = (f & 1) | 2), (a.flags |= 128));
            else {
              if (l !== null && (l.flags & 128) !== 0)
                t: for (l = a.child; l !== null;) {
                  if (l.tag === 13) l.memoizedState !== null && Lr(l, i, a);
                  else if (l.tag === 19) Lr(l, i, a);
                  else if (l.child !== null) {
                    ((l.child.return = l), (l = l.child));
                    continue;
                  }
                  if (l === a) break t;
                  for (; l.sibling === null;) {
                    if (l.return === null || l.return === a) break t;
                    l = l.return;
                  }
                  ((l.sibling.return = l.return), (l = l.sibling));
                }
              f &= 1;
            }
            switch ((K(qe, f), m)) {
              case "forwards":
                for (i = a.child, m = null; i !== null;)
                  ((l = i.alternate), l !== null && ba(l) === null && (m = i), (i = i.sibling));
                ((i = m),
                  i === null ? ((m = a.child), (a.child = null)) : ((m = i.sibling), (i.sibling = null)),
                  bs(a, !1, m, i, v));
                break;
              case "backwards":
                for (i = null, m = a.child, a.child = null; m !== null;) {
                  if (((l = m.alternate), l !== null && ba(l) === null)) {
                    a.child = m;
                    break;
                  }
                  ((l = m.sibling), (m.sibling = i), (i = m), (m = l));
                }
                bs(a, !0, i, null, v);
                break;
              case "together":
                bs(a, !1, null, null, void 0);
                break;
              default:
                a.memoizedState = null;
            }
            return a.child;
          }
          function vn(l, a, i) {
            if ((l !== null && (a.dependencies = l.dependencies), (sa |= a.lanes), (i & a.childLanes) === 0))
              if (l !== null) {
                if ((Ru(l, a, i, !1), (i & a.childLanes) === 0)) return null;
              } else return null;
            if (l !== null && a.child !== l.child) throw Error(A(153));
            if (a.child !== null) {
              for (l = a.child, i = vl(l, l.pendingProps), a.child = i, i.return = a; l.sibling !== null;)
                ((l = l.sibling), (i = i.sibling = vl(l, l.pendingProps)), (i.return = a));
              i.sibling = null;
            }
            return a.child;
          }
          function If(l, a) {
            return (l.lanes & a) !== 0 ? !0 : ((l = l.dependencies), !!(l !== null && Fn(l)));
          }
          function Bm(l, a, i) {
            switch (a.tag) {
              case 3:
                (lt(a, a.stateNode.containerInfo), Zn(a, ue, l.memoizedState.cache), Sl());
                break;
              case 27:
              case 5:
                _t(a);
                break;
              case 4:
                lt(a, a.stateNode.containerInfo);
                break;
              case 10:
                Zn(a, a.type, a.memoizedProps.value);
                break;
              case 13:
                var f = a.memoizedState;
                if (f !== null)
                  return f.dehydrated !== null
                    ? (Ya(a), (a.flags |= 128), null)
                    : (i & a.child.childLanes) !== 0
                      ? Kr(l, a, i)
                      : (Ya(a), (l = vn(l, a, i)), l !== null ? l.sibling : null);
                Ya(a);
                break;
              case 19:
                var m = (l.flags & 128) !== 0;
                if (((f = (i & a.childLanes) !== 0), f || (Ru(l, a, i, !1), (f = (i & a.childLanes) !== 0)), m)) {
                  if (f) return Yr(l, a, i);
                  a.flags |= 128;
                }
                if (
                  ((m = a.memoizedState),
                  m !== null && ((m.rendering = null), (m.tail = null), (m.lastEffect = null)),
                  K(qe, qe.current),
                  f)
                )
                  break;
                return null;
              case 22:
              case 23:
                return ((a.lanes = 0), Jr(l, a, i));
              case 24:
                Zn(a, ue, l.memoizedState.cache);
            }
            return vn(l, a, i);
          }
          function Xr(l, a, i) {
            if (l !== null)
              if (l.memoizedProps !== a.pendingProps) xe = !0;
              else {
                if (!If(l, i) && (a.flags & 128) === 0) return ((xe = !1), Bm(l, a, i));
                xe = (l.flags & 131072) !== 0;
              }
            else ((xe = !1), $t && (a.flags & 1048576) !== 0 && H(a, Kc, a.index));
            switch (((a.lanes = 0), a.tag)) {
              case 16:
                t: {
                  l = a.pendingProps;
                  var f = a.elementType,
                    m = f._init;
                  if (((f = m(f._payload)), (a.type = f), typeof f == "function"))
                    Sn(f)
                      ? ((l = Ta(f, l)), (a.tag = 1), (a = Xf(null, a, f, l, i)))
                      : ((a.tag = 0), (a = Yf(null, a, f, l, i)));
                  else {
                    if (f != null) {
                      if (((m = f.$$typeof), m === Mi)) {
                        ((a.tag = 11), (a = Nr(null, a, f, l, i)));
                        break t;
                      } else if (m === Tc) {
                        ((a.tag = 14), (a = zr(null, a, f, l, i)));
                        break t;
                      }
                    }
                    throw ((a = E(f) || f), Error(A(306, a, "")));
                  }
                }
                return a;
              case 0:
                return Yf(l, a, a.type, a.pendingProps, i);
              case 1:
                return ((f = a.type), (m = Ta(f, a.pendingProps)), Xf(l, a, f, m, i));
              case 3:
                t: {
                  if ((lt(a, a.stateNode.containerInfo), l === null)) throw Error(A(387));
                  var v = a.pendingProps;
                  ((m = a.memoizedState), (f = m.element), Of(l, a), Pi(a, v, null, i));
                  var M = a.memoizedState;
                  if (
                    ((v = M.cache),
                    Zn(a, ue, v),
                    v !== m.cache && Wf(a, [ue], i, !0),
                    Wi(),
                    (v = M.element),
                    Rl && m.isDehydrated)
                  )
                    if (
                      ((m = { element: v, isDehydrated: !1, cache: M.cache }),
                      (a.updateQueue.baseState = m),
                      (a.memoizedState = m),
                      a.flags & 256)
                    ) {
                      a = Qr(l, a, v, i);
                      break t;
                    } else if (v !== f) {
                      ((f = ut(Error(A(424)), a)), sl(f), (a = Qr(l, a, v, i)));
                      break t;
                    } else
                      for (
                        Rl && ((cl = rd(a.stateNode.containerInfo)), (pl = a), ($t = !0), (aa = null), (pa = !0)),
                          i = Po(a, null, v, i),
                          a.child = i;
                        i;
                      )
                        ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
                  else {
                    if ((Sl(), v === f)) {
                      a = vn(l, a, i);
                      break t;
                    }
                    el(l, a, v, i);
                  }
                  a = a.child;
                }
                return a;
              case 26:
                if ($l)
                  return (
                    hc(l, a),
                    l === null
                      ? (i = lf(a.type, null, a.pendingProps, null))
                        ? (a.memoizedState = i)
                        : $t || (a.stateNode = bm(a.type, a.pendingProps, _a.current, a))
                      : (a.memoizedState = lf(a.type, l.memoizedProps, a.pendingProps, l.memoizedState)),
                    null
                  );
              case 27:
                if (ul)
                  return (
                    _t(a),
                    l === null &&
                      ul &&
                      $t &&
                      ((f = a.stateNode = Vo(a.type, a.pendingProps, _a.current, tl.current, !1)),
                      (pl = a),
                      (pa = !0),
                      (cl = ks(f))),
                    (f = a.pendingProps.children),
                    l !== null || $t ? el(l, a, f, i) : (a.child = hu(a, null, f, i)),
                    hc(l, a),
                    a.child
                  );
              case 5:
                return (
                  l === null &&
                    $t &&
                    (Ed(a.type, a.pendingProps, tl.current),
                    (m = f = cl) &&
                      ((f = md(f, a.type, a.pendingProps, pa)),
                      f !== null ? ((a.stateNode = f), (pl = a), (cl = ks(f)), (pa = !1), (m = !0)) : (m = !1)),
                    m || de(a)),
                  _t(a),
                  (m = a.type),
                  (v = a.pendingProps),
                  (M = l !== null ? l.memoizedProps : null),
                  (f = v.children),
                  fu(m, v) ? (f = null) : M !== null && fu(m, M) && (a.flags |= 32),
                  a.memoizedState !== null &&
                    ((m = Qn(l, a, pm, null, null, i)), tn ? (Ht._currentValue = m) : (Ht._currentValue2 = m)),
                  hc(l, a),
                  el(l, a, f, i),
                  a.child
                );
              case 6:
                return (
                  l === null &&
                    $t &&
                    (Cd(a.pendingProps, tl.current),
                    (l = i = cl) &&
                      ((i = hd(i, a.pendingProps, pa)),
                      i !== null ? ((a.stateNode = i), (pl = a), (cl = null), (l = !0)) : (l = !1)),
                    l || de(a)),
                  null
                );
              case 13:
                return Kr(l, a, i);
              case 4:
                return (
                  lt(a, a.stateNode.containerInfo),
                  (f = a.pendingProps),
                  l === null ? (a.child = hu(a, null, f, i)) : el(l, a, f, i),
                  a.child
                );
              case 11:
                return Nr(l, a, a.type, a.pendingProps, i);
              case 7:
                return (el(l, a, a.pendingProps, i), a.child);
              case 8:
                return (el(l, a, a.pendingProps.children, i), a.child);
              case 12:
                return (el(l, a, a.pendingProps.children, i), a.child);
              case 10:
                return ((f = a.pendingProps), Zn(a, a.type, f.value), el(l, a, f.children, i), a.child);
              case 9:
                return (
                  (m = a.type._context),
                  (f = a.pendingProps.children),
                  Hu(a),
                  (m = ll(m)),
                  (f = f(m)),
                  (a.flags |= 1),
                  el(l, a, f, i),
                  a.child
                );
              case 14:
                return zr(l, a, a.type, a.pendingProps, i);
              case 15:
                return gs(l, a, a.type, a.pendingProps, i);
              case 19:
                return Yr(l, a, i);
              case 22:
                return Jr(l, a, i);
              case 24:
                return (
                  Hu(a),
                  (f = ll(ue)),
                  l === null
                    ? ((m = Vn()),
                      m === null &&
                        ((m = Lt),
                        (v = Ms()),
                        (m.pooledCache = v),
                        v.refCount++,
                        v !== null && (m.pooledCacheLanes |= i),
                        (m = v)),
                      (a.memoizedState = { parent: f, cache: m }),
                      Gf(a),
                      Zn(a, ue, m))
                    : ((l.lanes & i) !== 0 && (Of(l, a), Pi(a, null, null, i), Wi()),
                      (m = l.memoizedState),
                      (v = a.memoizedState),
                      m.parent !== f
                        ? ((m = { parent: f, cache: f }),
                          (a.memoizedState = m),
                          a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = m),
                          Zn(a, ue, f))
                        : ((f = v.cache), Zn(a, ue, f), f !== m.cache && Wf(a, [ue], i, !0))),
                  el(l, a, a.pendingProps.children, i),
                  a.child
                );
              case 29:
                throw a.pendingProps;
            }
            throw Error(A(156, a.tag));
          }
          function Zn(l, a, i) {
            tn ? (K(Kl, a._currentValue), (a._currentValue = i)) : (K(Kl, a._currentValue2), (a._currentValue2 = i));
          }
          function yn(l) {
            var a = Kl.current;
            (tn ? (l._currentValue = a) : (l._currentValue2 = a), j(Kl));
          }
          function wf(l, a, i) {
            for (; l !== null;) {
              var f = l.alternate;
              if (
                ((l.childLanes & a) !== a
                  ? ((l.childLanes |= a), f !== null && (f.childLanes |= a))
                  : f !== null && (f.childLanes & a) !== a && (f.childLanes |= a),
                l === i)
              )
                break;
              l = l.return;
            }
          }
          function Wf(l, a, i, f) {
            var m = l.child;
            for (m !== null && (m.return = l); m !== null;) {
              var v = m.dependencies;
              if (v !== null) {
                var M = m.child;
                v = v.firstContext;
                t: for (; v !== null;) {
                  var G = v;
                  v = m;
                  for (var x = 0; x < a.length; x++)
                    if (G.context === a[x]) {
                      ((v.lanes |= i),
                        (G = v.alternate),
                        G !== null && (G.lanes |= i),
                        wf(v.return, i, l),
                        f || (M = null));
                      break t;
                    }
                  v = G.next;
                }
              } else if (m.tag === 18) {
                if (((M = m.return), M === null)) throw Error(A(341));
                ((M.lanes |= i), (v = M.alternate), v !== null && (v.lanes |= i), wf(M, i, l), (M = null));
              } else M = m.child;
              if (M !== null) M.return = m;
              else
                for (M = m; M !== null;) {
                  if (M === l) {
                    M = null;
                    break;
                  }
                  if (((m = M.sibling), m !== null)) {
                    ((m.return = M.return), (M = m));
                    break;
                  }
                  M = M.return;
                }
              m = M;
            }
          }
          function Ru(l, a, i, f) {
            l = null;
            for (var m = a, v = !1; m !== null;) {
              if (!v) {
                if ((m.flags & 524288) !== 0) v = !0;
                else if ((m.flags & 262144) !== 0) break;
              }
              if (m.tag === 10) {
                var M = m.alternate;
                if (M === null) throw Error(A(387));
                if (((M = M.memoizedProps), M !== null)) {
                  var G = m.type;
                  ta(m.pendingProps.value, M.value) || (l !== null ? l.push(G) : (l = [G]));
                }
              } else if (m === _i.current) {
                if (((M = m.alternate), M === null)) throw Error(A(387));
                M.memoizedState.memoizedState !== m.memoizedState.memoizedState &&
                  (l !== null ? l.push(Ht) : (l = [Ht]));
              }
              m = m.return;
            }
            (l !== null && Wf(a, l, i, f), (a.flags |= 262144));
          }
          function Fn(l) {
            for (l = l.firstContext; l !== null;) {
              var a = l.context;
              if (!ta(tn ? a._currentValue : a._currentValue2, l.memoizedValue)) return !0;
              l = l.next;
            }
            return !1;
          }
          function Hu(l) {
            ((vu = l), (_e = null), (l = l.dependencies), l !== null && (l.firstContext = null));
          }
          function ll(l) {
            return Pf(vu, l);
          }
          function vc(l, a) {
            return (vu === null && Hu(l), Pf(l, a));
          }
          function Pf(l, a) {
            var i = tn ? a._currentValue : a._currentValue2;
            if (((a = { context: a, memoizedValue: i, next: null }), _e === null)) {
              if (l === null) throw Error(A(308));
              ((_e = a), (l.dependencies = { lanes: 0, firstContext: a }), (l.flags |= 524288));
            } else _e = _e.next = a;
            return i;
          }
          function Ms() {
            return { controller: new Od(), data: new Map(), refCount: 0 };
          }
          function oi(l) {
            (l.refCount--,
              l.refCount === 0 &&
                _n(Zu, function () {
                  l.controller.abort();
                }));
          }
          function Vn() {
            var l = Un.current;
            return l !== null ? l : Lt.pooledCache;
          }
          function Ts(l, a) {
            a === null ? K(Un, Un.current) : K(Un, a.pool);
          }
          function qr() {
            var l = Vn();
            return l === null ? null : { parent: tn ? ue._currentValue : ue._currentValue2, pool: l };
          }
          function Il(l) {
            l.flags |= 4;
          }
          function kf(l, a) {
            if (l !== null && l.child === a.child) return !1;
            if ((a.flags & 16) !== 0) return !0;
            for (l = a.child; l !== null;) {
              if ((l.flags & 13878) !== 0 || (l.subtreeFlags & 13878) !== 0) return !0;
              l = l.sibling;
            }
            return !1;
          }
          function Ds(l, a, i, f) {
            if (nl)
              for (i = a.child; i !== null;) {
                if (i.tag === 5 || i.tag === 6) $a(l, i.stateNode);
                else if (!(i.tag === 4 || (ul && i.tag === 27)) && i.child !== null) {
                  ((i.child.return = i), (i = i.child));
                  continue;
                }
                if (i === a) break;
                for (; i.sibling === null;) {
                  if (i.return === null || i.return === a) return;
                  i = i.return;
                }
                ((i.sibling.return = i.return), (i = i.sibling));
              }
            else if (Pl)
              for (var m = a.child; m !== null;) {
                if (m.tag === 5) {
                  var v = m.stateNode;
                  (i && f && (v = No(v, m.type, m.memoizedProps)), $a(l, v));
                } else if (m.tag === 6) ((v = m.stateNode), i && f && (v = zo(v, m.memoizedProps)), $a(l, v));
                else if (m.tag !== 4) {
                  if (m.tag === 22 && m.memoizedState !== null)
                    ((v = m.child), v !== null && (v.return = m), Ds(l, m, !0, !0));
                  else if (m.child !== null) {
                    ((m.child.return = m), (m = m.child));
                    continue;
                  }
                }
                if (m === a) break;
                for (; m.sibling === null;) {
                  if (m.return === null || m.return === a) return;
                  m = m.return;
                }
                ((m.sibling.return = m.return), (m = m.sibling));
              }
          }
          function ri(l, a, i, f) {
            if (Pl)
              for (var m = a.child; m !== null;) {
                if (m.tag === 5) {
                  var v = m.stateNode;
                  (i && f && (v = No(v, m.type, m.memoizedProps)), _o(l, v));
                } else if (m.tag === 6) ((v = m.stateNode), i && f && (v = zo(v, m.memoizedProps)), _o(l, v));
                else if (m.tag !== 4) {
                  if (m.tag === 22 && m.memoizedState !== null)
                    ((v = m.child),
                      v !== null && (v.return = m),
                      ri(l, m, !(m.memoizedProps !== null && m.memoizedProps.mode === "manual"), !0));
                  else if (m.child !== null) {
                    ((m.child.return = m), (m = m.child));
                    continue;
                  }
                }
                if (m === a) break;
                for (; m.sibling === null;) {
                  if (m.return === null || m.return === a) return;
                  m = m.return;
                }
                ((m.sibling.return = m.return), (m = m.sibling));
              }
          }
          function di(l, a) {
            if (Pl && kf(l, a)) {
              l = a.stateNode;
              var i = l.containerInfo,
                f = Ws();
              (ri(f, a, !1, !1), (l.pendingChildren = f), Il(a), cd(i, f));
            }
          }
          function $f(l, a, i, f) {
            if (nl) l.memoizedProps !== f && Il(a);
            else if (Pl) {
              var m = l.stateNode,
                v = l.memoizedProps;
              if ((l = kf(l, a)) || v !== f) {
                var M = tl.current;
                ((v = Oo(m, i, v, f, !l, null)),
                  v === m
                    ? (a.stateNode = m)
                    : (Tn(v, i, f, M) && Il(a), (a.stateNode = v), l ? Ds(v, a, !1, !1) : Il(a)));
              } else a.stateNode = m;
            }
          }
          function mi(l, a, i) {
            if (nd(a, i)) {
              if (((l.flags |= 16777216), !Dn(a, i)))
                if (Sc()) l.flags |= 8192;
                else throw ((qu = sf), Wo);
            } else l.flags &= -16777217;
          }
          function to(l, a) {
            if (Sd(a)) {
              if (((l.flags |= 16777216), !Zo(a)))
                if (Sc()) l.flags |= 8192;
                else throw ((qu = sf), Wo);
            } else l.flags &= -16777217;
          }
          function yc(l, a) {
            (a !== null && (l.flags |= 4),
              l.flags & 16384 && ((a = l.tag !== 22 ? ht() : 536870912), (l.lanes |= a), (zn |= a)));
          }
          function Gu(l, a) {
            if (!$t)
              switch (l.tailMode) {
                case "hidden":
                  a = l.tail;
                  for (var i = null; a !== null;) (a.alternate !== null && (i = a), (a = a.sibling));
                  i === null ? (l.tail = null) : (i.sibling = null);
                  break;
                case "collapsed":
                  i = l.tail;
                  for (var f = null; i !== null;) (i.alternate !== null && (f = i), (i = i.sibling));
                  f === null ? (a || l.tail === null ? (l.tail = null) : (l.tail.sibling = null)) : (f.sibling = null);
              }
          }
          function Se(l) {
            var a = l.alternate !== null && l.alternate.child === l.child,
              i = 0,
              f = 0;
            if (a)
              for (var m = l.child; m !== null;)
                ((i |= m.lanes | m.childLanes),
                  (f |= m.subtreeFlags & 31457280),
                  (f |= m.flags & 31457280),
                  (m.return = l),
                  (m = m.sibling));
            else
              for (m = l.child; m !== null;)
                ((i |= m.lanes | m.childLanes), (f |= m.subtreeFlags), (f |= m.flags), (m.return = l), (m = m.sibling));
            return ((l.subtreeFlags |= f), (l.childLanes = i), a);
          }
          function Zr(l, a, i) {
            var f = a.pendingProps;
            switch ((et(a), a.tag)) {
              case 16:
              case 15:
              case 0:
              case 11:
              case 7:
              case 8:
              case 12:
              case 9:
              case 14:
                return (Se(a), null);
              case 1:
                return (Se(a), null);
              case 3:
                return (
                  (i = a.stateNode),
                  (f = null),
                  l !== null && (f = l.memoizedState.cache),
                  a.memoizedState.cache !== f && (a.flags |= 2048),
                  yn(ue),
                  vt(),
                  i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
                  (l === null || l.child === null) &&
                    (wt(a)
                      ? Il(a)
                      : l === null ||
                        (l.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                        ((a.flags |= 1024), aa !== null && (Bn(aa), (aa = null)))),
                  di(l, a),
                  Se(a),
                  null
                );
              case 26:
                if ($l) {
                  i = a.type;
                  var m = a.memoizedState;
                  return (
                    l === null
                      ? (Il(a), m !== null ? (Se(a), to(a, m)) : (Se(a), mi(a, i, f)))
                      : m
                        ? m !== l.memoizedState
                          ? (Il(a), Se(a), to(a, m))
                          : (Se(a), (a.flags &= -16777217))
                        : (nl ? l.memoizedProps !== f && Il(a) : $f(l, a, i, f), Se(a), mi(a, i, f)),
                    null
                  );
                }
              case 27:
                if (ul) {
                  if ((Zt(a), (i = _a.current), (m = a.type), l !== null && a.stateNode != null))
                    nl ? l.memoizedProps !== f && Il(a) : $f(l, a, m, f);
                  else {
                    if (!f) {
                      if (a.stateNode === null) throw Error(A(166));
                      return (Se(a), null);
                    }
                    ((l = tl.current), wt(a) ? Ee(a, l) : ((l = Vo(m, f, i, l, !0)), (a.stateNode = l), Il(a)));
                  }
                  return (Se(a), null);
                }
              case 5:
                if ((Zt(a), (i = a.type), l !== null && a.stateNode != null)) $f(l, a, i, f);
                else {
                  if (!f) {
                    if (a.stateNode === null) throw Error(A(166));
                    return (Se(a), null);
                  }
                  ((l = tl.current),
                    wt(a)
                      ? Ee(a, l)
                      : ((m = Eo(i, f, _a.current, l, a)),
                        Ds(m, a, !1, !1),
                        (a.stateNode = m),
                        Tn(m, i, f, l) && Il(a)));
                }
                return (Se(a), mi(a, a.type, a.pendingProps), null);
              case 6:
                if (l && a.stateNode != null)
                  ((i = l.memoizedProps),
                    nl
                      ? i !== f && Il(a)
                      : Pl &&
                        (i !== f
                          ? ((a.stateNode = qs(f, _a.current, tl.current, a)), Il(a))
                          : (a.stateNode = l.stateNode)));
                else {
                  if (typeof f != "string" && a.stateNode === null) throw Error(A(166));
                  if (((l = _a.current), (i = tl.current), wt(a))) {
                    if (!Rl) throw Error(A(176));
                    if (((l = a.stateNode), (i = a.memoizedProps), (f = null), (m = pl), m !== null))
                      switch (m.tag) {
                        case 27:
                        case 5:
                          f = m.memoizedProps;
                      }
                    vd(l, i, a, f) || de(a);
                  } else a.stateNode = qs(f, l, i, a);
                }
                return (Se(a), null);
              case 13:
                if (
                  ((f = a.memoizedState),
                  l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
                ) {
                  if (((m = wt(a)), f !== null && f.dehydrated !== null)) {
                    if (l === null) {
                      if (!m) throw Error(A(318));
                      if (!Rl) throw Error(A(344));
                      if (((m = a.memoizedState), (m = m !== null ? m.dehydrated : null), !m)) throw Error(A(317));
                      Di(m, a);
                    } else (Sl(), (a.flags & 128) === 0 && (a.memoizedState = null), (a.flags |= 4));
                    (Se(a), (m = !1));
                  } else (aa !== null && (Bn(aa), (aa = null)), (m = !0));
                  if (!m) return a.flags & 256 ? (Xa(a), a) : (Xa(a), null);
                }
                if ((Xa(a), (a.flags & 128) !== 0)) return ((a.lanes = i), a);
                if (((i = f !== null), (l = l !== null && l.memoizedState !== null), i)) {
                  ((f = a.child),
                    (m = null),
                    f.alternate !== null &&
                      f.alternate.memoizedState !== null &&
                      f.alternate.memoizedState.cachePool !== null &&
                      (m = f.alternate.memoizedState.cachePool.pool));
                  var v = null;
                  (f.memoizedState !== null &&
                    f.memoizedState.cachePool !== null &&
                    (v = f.memoizedState.cachePool.pool),
                    v !== m && (f.flags |= 2048));
                }
                return (i !== l && i && (a.child.flags |= 8192), yc(a, a.updateQueue), Se(a), null);
              case 4:
                return (vt(), di(l, a), l === null && go(a.stateNode.containerInfo), Se(a), null);
              case 10:
                return (yn(a.type), Se(a), null);
              case 19:
                if ((j(qe), (m = a.memoizedState), m === null)) return (Se(a), null);
                if (((f = (a.flags & 128) !== 0), (v = m.rendering), v === null))
                  if (f) Gu(m, !1);
                  else {
                    if (Pt !== 0 || (l !== null && (l.flags & 128) !== 0))
                      for (l = a.child; l !== null;) {
                        if (((v = ba(l)), v !== null)) {
                          for (
                            a.flags |= 128,
                              Gu(m, !1),
                              l = v.updateQueue,
                              a.updateQueue = l,
                              yc(a, l),
                              a.subtreeFlags = 0,
                              l = i,
                              i = a.child;
                            i !== null;
                          )
                            (gn(i, l), (i = i.sibling));
                          return (K(qe, (qe.current & 1) | 2), a.child);
                        }
                        l = l.sibling;
                      }
                    m.tail !== null && il() > De && ((a.flags |= 128), (f = !0), Gu(m, !1), (a.lanes = 4194304));
                  }
                else {
                  if (!f)
                    if (((l = ba(v)), l !== null)) {
                      if (
                        ((a.flags |= 128),
                        (f = !0),
                        (l = l.updateQueue),
                        (a.updateQueue = l),
                        yc(a, l),
                        Gu(m, !0),
                        m.tail === null && m.tailMode === "hidden" && !v.alternate && !$t)
                      )
                        return (Se(a), null);
                    } else
                      2 * il() - m.renderingStartTime > De &&
                        i !== 536870912 &&
                        ((a.flags |= 128), (f = !0), Gu(m, !1), (a.lanes = 4194304));
                  m.isBackwards
                    ? ((v.sibling = a.child), (a.child = v))
                    : ((l = m.last), l !== null ? (l.sibling = v) : (a.child = v), (m.last = v));
                }
                return m.tail !== null
                  ? ((a = m.tail),
                    (m.rendering = a),
                    (m.tail = a.sibling),
                    (m.renderingStartTime = il()),
                    (a.sibling = null),
                    (l = qe.current),
                    K(qe, f ? (l & 1) | 2 : l & 1),
                    a)
                  : (Se(a), null);
              case 22:
              case 23:
                return (
                  Xa(a),
                  ss(),
                  (f = a.memoizedState !== null),
                  l !== null ? (l.memoizedState !== null) !== f && (a.flags |= 8192) : f && (a.flags |= 8192),
                  f
                    ? (i & 536870912) !== 0 && (a.flags & 128) === 0 && (Se(a), a.subtreeFlags & 6 && (a.flags |= 8192))
                    : Se(a),
                  (i = a.updateQueue),
                  i !== null && yc(a, i.retryQueue),
                  (i = null),
                  l !== null &&
                    l.memoizedState !== null &&
                    l.memoizedState.cachePool !== null &&
                    (i = l.memoizedState.cachePool.pool),
                  (f = null),
                  a.memoizedState !== null &&
                    a.memoizedState.cachePool !== null &&
                    (f = a.memoizedState.cachePool.pool),
                  f !== i && (a.flags |= 2048),
                  l !== null && j(Un),
                  null
                );
              case 24:
                return (
                  (i = null),
                  l !== null && (i = l.memoizedState.cache),
                  a.memoizedState.cache !== i && (a.flags |= 2048),
                  yn(ue),
                  Se(a),
                  null
                );
              case 25:
                return null;
            }
            throw Error(A(156, a.tag));
          }
          function Fr(l, a) {
            switch ((et(a), a.tag)) {
              case 1:
                return ((l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null);
              case 3:
                return (
                  yn(ue),
                  vt(),
                  (l = a.flags),
                  (l & 65536) !== 0 && (l & 128) === 0 ? ((a.flags = (l & -65537) | 128), a) : null
                );
              case 26:
              case 27:
              case 5:
                return (Zt(a), null);
              case 13:
                if ((Xa(a), (l = a.memoizedState), l !== null && l.dehydrated !== null)) {
                  if (a.alternate === null) throw Error(A(340));
                  Sl();
                }
                return ((l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null);
              case 19:
                return (j(qe), null);
              case 4:
                return (vt(), null);
              case 10:
                return (yn(a.type), null);
              case 22:
              case 23:
                return (
                  Xa(a),
                  ss(),
                  l !== null && j(Un),
                  (l = a.flags),
                  l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
                );
              case 24:
                return (yn(ue), null);
              case 25:
                return null;
              default:
                return null;
            }
          }
          function eo(l, a) {
            switch ((et(a), a.tag)) {
              case 3:
                (yn(ue), vt());
                break;
              case 26:
              case 27:
              case 5:
                Zt(a);
                break;
              case 4:
                vt();
                break;
              case 13:
                Xa(a);
                break;
              case 19:
                j(qe);
                break;
              case 10:
                yn(a.type);
                break;
              case 22:
              case 23:
                (Xa(a), ss(), l !== null && j(Un));
                break;
              case 24:
                yn(ue);
            }
          }
          function pc(l, a) {
            try {
              var i = a.updateQueue,
                f = i !== null ? i.lastEffect : null;
              if (f !== null) {
                var m = f.next;
                i = m;
                do {
                  if ((i.tag & l) === l) {
                    f = void 0;
                    var v = i.create,
                      M = i.inst;
                    ((f = v()), (M.destroy = f));
                  }
                  i = i.next;
                } while (i !== m);
              }
            } catch (G) {
              Xt(a, a.return, G);
            }
          }
          function In(l, a, i) {
            try {
              var f = a.updateQueue,
                m = f !== null ? f.lastEffect : null;
              if (m !== null) {
                var v = m.next;
                f = v;
                do {
                  if ((f.tag & l) === l) {
                    var M = f.inst,
                      G = M.destroy;
                    if (G !== void 0) {
                      ((M.destroy = void 0), (m = a));
                      var x = i;
                      try {
                        G();
                      } catch (k) {
                        Xt(m, x, k);
                      }
                    }
                  }
                  f = f.next;
                } while (f !== v);
              }
            } catch (k) {
              Xt(a, a.return, k);
            }
          }
          function Vr(l) {
            var a = l.updateQueue;
            if (a !== null) {
              var i = l.stateNode;
              try {
                ki(a, i);
              } catch (f) {
                Xt(l, l.return, f);
              }
            }
          }
          function Ir(l, a, i) {
            ((i.props = Ta(l.type, l.memoizedProps)), (i.state = l.memoizedState));
            try {
              i.componentWillUnmount();
            } catch (f) {
              Xt(l, a, f);
            }
          }
          function Ou(l, a) {
            try {
              var i = l.ref;
              if (i !== null) {
                var f = l.stateNode;
                switch (l.tag) {
                  case 26:
                  case 27:
                  case 5:
                    var m = Ti(f);
                    break;
                  default:
                    m = f;
                }
                typeof i == "function" ? (l.refCleanup = i(m)) : (i.current = m);
              }
            } catch (v) {
              Xt(l, a, v);
            }
          }
          function ge(l, a) {
            var i = l.ref,
              f = l.refCleanup;
            if (i !== null)
              if (typeof f == "function")
                try {
                  f();
                } catch (m) {
                  Xt(l, a, m);
                } finally {
                  ((l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null));
                }
              else if (typeof i == "function")
                try {
                  i(null);
                } catch (m) {
                  Xt(l, a, m);
                }
              else i.current = null;
          }
          function hi(l) {
            var a = l.type,
              i = l.memoizedProps,
              f = l.stateNode;
            try {
              Cm(f, a, i, l);
            } catch (m) {
              Xt(l, l.return, m);
            }
          }
          function lo(l, a, i) {
            try {
              Do(l.stateNode, l.type, i, a, l);
            } catch (f) {
              Xt(l, l.return, f);
            }
          }
          function ao(l) {
            return l.tag === 5 || l.tag === 3 || ($l ? l.tag === 26 : !1) || (ul ? l.tag === 27 : !1) || l.tag === 4;
          }
          function Rs(l) {
            t: for (;;) {
              for (; l.sibling === null;) {
                if (l.return === null || ao(l.return)) return null;
                l = l.return;
              }
              for (
                l.sibling.return = l.return, l = l.sibling;
                l.tag !== 5 && l.tag !== 6 && (!ul || l.tag !== 27) && l.tag !== 18;
              ) {
                if (l.flags & 2 || l.child === null || l.tag === 4) continue t;
                ((l.child.return = l), (l = l.child));
              }
              if (!(l.flags & 2)) return l.stateNode;
            }
          }
          function Hs(l, a, i) {
            var f = l.tag;
            if (f === 5 || f === 6) ((l = l.stateNode), a ? Ho(i, l, a) : ud(i, l));
            else if (!(f === 4 || (ul && f === 27)) && ((l = l.child), l !== null))
              for (Hs(l, a, i), l = l.sibling; l !== null;) (Hs(l, a, i), (l = l.sibling));
          }
          function Ai(l, a, i) {
            var f = l.tag;
            if (f === 5 || f === 6) ((l = l.stateNode), a ? Ro(i, l, a) : To(i, l));
            else if (!(f === 4 || (ul && f === 27)) && ((l = l.child), l !== null))
              for (Ai(l, a, i), l = l.sibling; l !== null;) (Ai(l, a, i), (l = l.sibling));
          }
          function wr(l, a, i) {
            l = l.containerInfo;
            try {
              Uo(l, i);
            } catch (f) {
              Xt(a, a.return, f);
            }
          }
          function vi(l, a) {
            for (su(l.containerInfo), Ue = a; Ue !== null;)
              if (((l = Ue), (a = l.child), (l.subtreeFlags & 1028) !== 0 && a !== null)) ((a.return = l), (Ue = a));
              else
                for (; Ue !== null;) {
                  l = Ue;
                  var i = l.alternate;
                  switch (((a = l.flags), l.tag)) {
                    case 0:
                      break;
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if ((a & 1024) !== 0 && i !== null) {
                        a = void 0;
                        var f = l,
                          m = i.memoizedProps;
                        i = i.memoizedState;
                        var v = f.stateNode;
                        try {
                          var M = Ta(f.type, m, f.elementType === f.type);
                          ((a = v.getSnapshotBeforeUpdate(M, i)), (v.__reactInternalSnapshotBeforeUpdate = a));
                        } catch (G) {
                          Xt(f, f.return, G);
                        }
                      }
                      break;
                    case 3:
                      (a & 1024) !== 0 && nl && ws(l.stateNode.containerInfo);
                      break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      if ((a & 1024) !== 0) throw Error(A(163));
                  }
                  if (((a = l.sibling), a !== null)) {
                    ((a.return = l.return), (Ue = a));
                    break;
                  }
                  Ue = l.return;
                }
            return ((M = Fu), (Fu = !1), M);
          }
          function Gs(l, a, i) {
            var f = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                (Va(l, i), f & 4 && pc(5, i));
                break;
              case 1:
                if ((Va(l, i), f & 4))
                  if (((l = i.stateNode), a === null))
                    try {
                      l.componentDidMount();
                    } catch (G) {
                      Xt(i, i.return, G);
                    }
                  else {
                    var m = Ta(i.type, a.memoizedProps);
                    a = a.memoizedState;
                    try {
                      l.componentDidUpdate(m, a, l.__reactInternalSnapshotBeforeUpdate);
                    } catch (G) {
                      Xt(i, i.return, G);
                    }
                  }
                (f & 64 && Vr(i), f & 512 && Ou(i, i.return));
                break;
              case 3:
                if ((Va(l, i), f & 64 && ((f = i.updateQueue), f !== null))) {
                  if (((l = null), i.child !== null))
                    switch (i.child.tag) {
                      case 27:
                      case 5:
                        l = Ti(i.child.stateNode);
                        break;
                      case 1:
                        l = i.child.stateNode;
                    }
                  try {
                    ki(f, l);
                  } catch (G) {
                    Xt(i, i.return, G);
                  }
                }
                break;
              case 26:
                if ($l) {
                  (Va(l, i), f & 512 && Ou(i, i.return));
                  break;
                }
              case 27:
              case 5:
                (Va(l, i), a === null && f & 4 && hi(i), f & 512 && Ou(i, i.return));
                break;
              case 12:
                Va(l, i);
                break;
              case 13:
                (Va(l, i), f & 4 && wn(l, i));
                break;
              case 22:
                if (((m = i.memoizedState !== null || Ie), !m)) {
                  a = (a !== null && a.memoizedState !== null) || Te;
                  var v = Ie,
                    M = Te;
                  ((Ie = m), (Te = a) && !M ? Pn(l, i, (i.subtreeFlags & 8772) !== 0) : Va(l, i), (Ie = v), (Te = M));
                }
                f & 512 && (i.memoizedProps.mode === "manual" ? Ou(i, i.return) : ge(i, i.return));
                break;
              default:
                Va(l, i);
            }
          }
          function yi(l) {
            var a = l.alternate;
            (a !== null && ((l.alternate = null), yi(a)),
              (l.child = null),
              (l.deletions = null),
              (l.sibling = null),
              l.tag === 5 && ((a = l.stateNode), a !== null && bo(a)),
              (l.stateNode = null),
              (l.return = null),
              (l.dependencies = null),
              (l.memoizedProps = null),
              (l.memoizedState = null),
              (l.pendingProps = null),
              (l.stateNode = null),
              (l.updateQueue = null));
          }
          function wl(l, a, i) {
            for (i = i.child; i !== null;) (Os(l, a, i), (i = i.sibling));
          }
          function Os(l, a, i) {
            if (jl && typeof jl.onCommitFiberUnmount == "function")
              try {
                jl.onCommitFiberUnmount(Oi, i);
              } catch {}
            switch (i.tag) {
              case 26:
                if ($l) {
                  (Te || ge(i, a), wl(l, a, i), i.memoizedState ? Ko(i.memoizedState) : i.stateNode && Xo(i.stateNode));
                  break;
                }
              case 27:
                if (ul) {
                  Te || ge(i, a);
                  var f = je,
                    m = Ll;
                  ((je = i.stateNode), wl(l, a, i), gd(i.stateNode), (je = f), (Ll = m));
                  break;
                }
              case 5:
                Te || ge(i, a);
              case 6:
                if (nl) {
                  if (((f = je), (m = Ll), (je = null), wl(l, a, i), (je = f), (Ll = m), je !== null))
                    if (Ll)
                      try {
                        ze(je, i.stateNode);
                      } catch (v) {
                        Xt(i, a, v);
                      }
                    else
                      try {
                        Hl(je, i.stateNode);
                      } catch (v) {
                        Xt(i, a, v);
                      }
                } else wl(l, a, i);
                break;
              case 18:
                nl && je !== null && (Ll ? xo(je, i.stateNode) : pd(je, i.stateNode));
                break;
              case 4:
                nl
                  ? ((f = je), (m = Ll), (je = i.stateNode.containerInfo), (Ll = !0), wl(l, a, i), (je = f), (Ll = m))
                  : (Pl && wr(i.stateNode, i, Ws()), wl(l, a, i));
                break;
              case 0:
              case 11:
              case 14:
              case 15:
                (Te || In(2, i, a), Te || In(4, i, a), wl(l, a, i));
                break;
              case 1:
                (Te || (ge(i, a), (f = i.stateNode), typeof f.componentWillUnmount == "function" && Ir(i, a, f)),
                  wl(l, a, i));
                break;
              case 21:
                wl(l, a, i);
                break;
              case 22:
                (Te || ge(i, a), (Te = (f = Te) || i.memoizedState !== null), wl(l, a, i), (Te = f));
                break;
              default:
                wl(l, a, i);
            }
          }
          function wn(l, a) {
            if (
              Rl &&
              a.memoizedState === null &&
              ((l = a.alternate), l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
            )
              try {
                tf(l);
              } catch (i) {
                Xt(a, a.return, i);
              }
          }
          function pi(l) {
            switch (l.tag) {
              case 13:
              case 19:
                var a = l.stateNode;
                return (a === null && (a = l.stateNode = new xi()), a);
              case 22:
                return ((l = l.stateNode), (a = l._retryCache), a === null && (a = l._retryCache = new xi()), a);
              default:
                throw Error(A(435, l.tag));
            }
          }
          function Bc(l, a) {
            var i = pi(l);
            a.forEach(function (f) {
              var m = so.bind(null, l, f);
              i.has(f) || (i.add(f), f.then(m, m));
            });
          }
          function Ml(l, a) {
            var i = a.deletions;
            if (i !== null)
              for (var f = 0; f < i.length; f++) {
                var m = i[f],
                  v = l,
                  M = a;
                if (nl) {
                  var G = M;
                  t: for (; G !== null;) {
                    switch (G.tag) {
                      case 27:
                      case 5:
                        ((je = G.stateNode), (Ll = !1));
                        break t;
                      case 3:
                        ((je = G.stateNode.containerInfo), (Ll = !0));
                        break t;
                      case 4:
                        ((je = G.stateNode.containerInfo), (Ll = !0));
                        break t;
                    }
                    G = G.return;
                  }
                  if (je === null) throw Error(A(160));
                  (Os(v, M, m), (je = null), (Ll = !1));
                } else Os(v, M, m);
                ((v = m.alternate), v !== null && (v.return = null), (m.return = null));
              }
            if (a.subtreeFlags & 13878) for (a = a.child; a !== null;) (Wn(a, l), (a = a.sibling));
          }
          function Wn(l, a) {
            var i = l.alternate,
              f = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (Ml(a, l), Ul(l), f & 4 && (In(3, l, l.return), pc(3, l), In(5, l, l.return)));
                break;
              case 1:
                (Ml(a, l),
                  Ul(l),
                  f & 512 && (Te || i === null || ge(i, i.return)),
                  f & 64 &&
                    Ie &&
                    ((l = l.updateQueue),
                    l !== null &&
                      ((f = l.callbacks),
                      f !== null &&
                        ((i = l.shared.hiddenCallbacks), (l.shared.hiddenCallbacks = i === null ? f : i.concat(f))))));
                break;
              case 26:
                if ($l) {
                  var m = Gl;
                  (Ml(a, l),
                    Ul(l),
                    f & 512 && (Te || i === null || ge(i, i.return)),
                    f & 4 &&
                      ((f = i !== null ? i.memoizedState : null),
                      (a = l.memoizedState),
                      i === null
                        ? a === null
                          ? l.stateNode === null
                            ? (l.stateNode = Lo(m, l.type, l.memoizedProps, l))
                            : Yo(m, l.type, l.stateNode)
                          : (l.stateNode = Qo(m, a, l.memoizedProps))
                        : f !== a
                          ? (f === null ? i.stateNode !== null && Xo(i.stateNode) : Ko(f),
                            a === null ? Yo(m, l.type, l.stateNode) : Qo(m, a, l.memoizedProps))
                          : a === null && l.stateNode !== null && lo(l, l.memoizedProps, i.memoizedProps)));
                  break;
                }
              case 27:
                if (ul && f & 4 && l.alternate === null) {
                  m = l.stateNode;
                  var v = l.memoizedProps;
                  try {
                    (Mm(m), Tm(l.type, v, m, l));
                  } catch (ft) {
                    Xt(l, l.return, ft);
                  }
                }
              case 5:
                if ((Ml(a, l), Ul(l), f & 512 && (Te || i === null || ge(i, i.return)), nl)) {
                  if (l.flags & 32) {
                    a = l.stateNode;
                    try {
                      _c(a);
                    } catch (ft) {
                      Xt(l, l.return, ft);
                    }
                  }
                  (f & 4 && l.stateNode != null && ((a = l.memoizedProps), lo(l, a, i !== null ? i.memoizedProps : a)),
                    f & 1024 && (yu = !0));
                }
                break;
              case 6:
                if ((Ml(a, l), Ul(l), f & 4 && nl)) {
                  if (l.stateNode === null) throw Error(A(162));
                  ((f = l.memoizedProps), (i = i !== null ? i.memoizedProps : f), (a = l.stateNode));
                  try {
                    id(a, i, f);
                  } catch (ft) {
                    Xt(l, l.return, ft);
                  }
                }
                break;
              case 3:
                if (($l ? (qo(), (m = Gl), (Gl = ef(a.containerInfo)), Ml(a, l), (Gl = m)) : Ml(a, l), Ul(l), f & 4)) {
                  if (nl && Rl && i !== null && i.memoizedState.isDehydrated)
                    try {
                      $s(a.containerInfo);
                    } catch (ft) {
                      Xt(l, l.return, ft);
                    }
                  if (Pl) {
                    ((f = a.containerInfo), (i = a.pendingChildren));
                    try {
                      Uo(f, i);
                    } catch (ft) {
                      Xt(l, l.return, ft);
                    }
                  }
                }
                yu && ((yu = !1), no(l));
                break;
              case 4:
                ($l ? ((i = Gl), (Gl = ef(l.stateNode.containerInfo)), Ml(a, l), Ul(l), (Gl = i)) : (Ml(a, l), Ul(l)),
                  f & 4 && Pl && wr(l.stateNode, l, l.stateNode.pendingChildren));
                break;
              case 12:
                (Ml(a, l), Ul(l));
                break;
              case 13:
                (Ml(a, l),
                  Ul(l),
                  l.child.flags & 8192 &&
                    (l.memoizedState !== null) != (i !== null && i.memoizedState !== null) &&
                    (sn = il()),
                  f & 4 && ((f = l.updateQueue), f !== null && ((l.updateQueue = null), Bc(l, f))));
                break;
              case 22:
                (f & 512 && (Te || i === null || ge(i, i.return)), (m = l.memoizedState !== null));
                var M = i !== null && i.memoizedState !== null,
                  G = Ie,
                  x = Te;
                if (
                  ((Ie = G || m),
                  (Te = x || M),
                  Ml(a, l),
                  (Te = x),
                  (Ie = G),
                  Ul(l),
                  (a = l.stateNode),
                  (a._current = l),
                  (a._visibility &= -3),
                  (a._visibility |= a._pendingVisibility & 2),
                  f & 8192 &&
                    ((a._visibility = m ? a._visibility & -2 : a._visibility | 1),
                    m && ((a = Ie || Te), i === null || M || a || Bi(l)),
                    nl && (l.memoizedProps === null || l.memoizedProps.mode !== "manual")))
                ) {
                  t: if (((i = null), nl))
                    for (a = l; ;) {
                      if (a.tag === 5 || ($l && a.tag === 26) || (ul && a.tag === 27)) {
                        if (i === null) {
                          M = i = a;
                          try {
                            ((v = M.stateNode), m ? Uc(v) : Go(M.stateNode, M.memoizedProps));
                          } catch (ft) {
                            Xt(M, M.return, ft);
                          }
                        }
                      } else if (a.tag === 6) {
                        if (i === null) {
                          M = a;
                          try {
                            var k = M.stateNode;
                            m ? Is(k) : Rn(k, M.memoizedProps);
                          } catch (ft) {
                            Xt(M, M.return, ft);
                          }
                        }
                      } else if (
                        ((a.tag !== 22 && a.tag !== 23) || a.memoizedState === null || a === l) &&
                        a.child !== null
                      ) {
                        ((a.child.return = a), (a = a.child));
                        continue;
                      }
                      if (a === l) break t;
                      for (; a.sibling === null;) {
                        if (a.return === null || a.return === l) break t;
                        (i === a && (i = null), (a = a.return));
                      }
                      (i === a && (i = null), (a.sibling.return = a.return), (a = a.sibling));
                    }
                }
                f & 4 &&
                  ((f = l.updateQueue),
                  f !== null && ((i = f.retryQueue), i !== null && ((f.retryQueue = null), Bc(l, i))));
                break;
              case 19:
                (Ml(a, l), Ul(l), f & 4 && ((f = l.updateQueue), f !== null && ((l.updateQueue = null), Bc(l, f))));
                break;
              case 21:
                break;
              default:
                (Ml(a, l), Ul(l));
            }
          }
          function Ul(l) {
            var a = l.flags;
            if (a & 2) {
              try {
                if (nl && (!ul || l.tag !== 27)) {
                  t: {
                    for (var i = l.return; i !== null;) {
                      if (ao(i)) {
                        var f = i;
                        break t;
                      }
                      i = i.return;
                    }
                    throw Error(A(160));
                  }
                  switch (f.tag) {
                    case 27:
                      if (ul) {
                        var m = f.stateNode,
                          v = Rs(l);
                        Ai(l, v, m);
                        break;
                      }
                    case 5:
                      var M = f.stateNode;
                      f.flags & 32 && (_c(M), (f.flags &= -33));
                      var G = Rs(l);
                      Ai(l, G, M);
                      break;
                    case 3:
                    case 4:
                      var x = f.stateNode.containerInfo,
                        k = Rs(l);
                      Hs(l, k, x);
                      break;
                    default:
                      throw Error(A(161));
                  }
                }
              } catch (ft) {
                Xt(l, l.return, ft);
              }
              l.flags &= -3;
            }
            a & 4096 && (l.flags &= -4097);
          }
          function no(l) {
            if (l.subtreeFlags & 1024)
              for (l = l.child; l !== null;) {
                var a = l;
                (no(a), a.tag === 5 && a.flags & 1024 && me(a.stateNode), (l = l.sibling));
              }
          }
          function Va(l, a) {
            if (a.subtreeFlags & 8772) for (a = a.child; a !== null;) (Gs(l, a.alternate, a), (a = a.sibling));
          }
          function Bi(l) {
            for (l = l.child; l !== null;) {
              var a = l;
              switch (a.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  (In(4, a, a.return), Bi(a));
                  break;
                case 1:
                  ge(a, a.return);
                  var i = a.stateNode;
                  (typeof i.componentWillUnmount == "function" && Ir(a, a.return, i), Bi(a));
                  break;
                case 26:
                case 27:
                case 5:
                  (ge(a, a.return), Bi(a));
                  break;
                case 22:
                  (ge(a, a.return), a.memoizedState === null && Bi(a));
                  break;
                default:
                  Bi(a);
              }
              l = l.sibling;
            }
          }
          function Pn(l, a, i) {
            for (i = i && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null;) {
              var f = a.alternate,
                m = l,
                v = a,
                M = v.flags;
              switch (v.tag) {
                case 0:
                case 11:
                case 15:
                  (Pn(m, v, i), pc(4, v));
                  break;
                case 1:
                  if ((Pn(m, v, i), (f = v), (m = f.stateNode), typeof m.componentDidMount == "function"))
                    try {
                      m.componentDidMount();
                    } catch (k) {
                      Xt(f, f.return, k);
                    }
                  if (((f = v), (m = f.updateQueue), m !== null)) {
                    var G = f.stateNode;
                    try {
                      var x = m.shared.hiddenCallbacks;
                      if (x !== null) for (m.shared.hiddenCallbacks = null, m = 0; m < x.length; m++) gr(x[m], G);
                    } catch (k) {
                      Xt(f, f.return, k);
                    }
                  }
                  (i && M & 64 && Vr(v), Ou(v, v.return));
                  break;
                case 26:
                case 27:
                case 5:
                  (Pn(m, v, i), i && f === null && M & 4 && hi(v), Ou(v, v.return));
                  break;
                case 12:
                  Pn(m, v, i);
                  break;
                case 13:
                  (Pn(m, v, i), i && M & 4 && wn(m, v));
                  break;
                case 22:
                  (v.memoizedState === null && Pn(m, v, i), Ou(v, v.return));
                  break;
                default:
                  Pn(m, v, i);
              }
              a = a.sibling;
            }
          }
          function uo(l, a) {
            var i = null;
            (l !== null &&
              l.memoizedState !== null &&
              l.memoizedState.cachePool !== null &&
              (i = l.memoizedState.cachePool.pool),
              (l = null),
              a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool),
              l !== i && (l != null && l.refCount++, i != null && oi(i)));
          }
          function _s(l, a) {
            ((l = null),
              a.alternate !== null && (l = a.alternate.memoizedState.cache),
              (a = a.memoizedState.cache),
              a !== l && (a.refCount++, l != null && oi(l)));
          }
          function pn(l, a, i, f) {
            if (a.subtreeFlags & 10256) for (a = a.child; a !== null;) (Us(l, a, i, f), (a = a.sibling));
          }
          function Us(l, a, i, f) {
            var m = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                (pn(l, a, i, f), m & 2048 && pc(9, a));
                break;
              case 3:
                (pn(l, a, i, f),
                  m & 2048 &&
                    ((l = null),
                    a.alternate !== null && (l = a.alternate.memoizedState.cache),
                    (a = a.memoizedState.cache),
                    a !== l && (a.refCount++, l != null && oi(l))));
                break;
              case 12:
                if (m & 2048) {
                  (pn(l, a, i, f), (l = a.stateNode));
                  try {
                    var v = a.memoizedProps,
                      M = v.id,
                      G = v.onPostCommit;
                    typeof G == "function" &&
                      G(M, a.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
                  } catch (x) {
                    Xt(a, a.return, x);
                  }
                } else pn(l, a, i, f);
                break;
              case 23:
                break;
              case 22:
                ((v = a.stateNode),
                  a.memoizedState !== null
                    ? v._visibility & 4
                      ? pn(l, a, i, f)
                      : kn(l, a)
                    : v._visibility & 4
                      ? pn(l, a, i, f)
                      : ((v._visibility |= 4), hl(l, a, i, f, (a.subtreeFlags & 10256) !== 0)),
                  m & 2048 && uo(a.alternate, a));
                break;
              case 24:
                (pn(l, a, i, f), m & 2048 && _s(a.alternate, a));
                break;
              default:
                pn(l, a, i, f);
            }
          }
          function hl(l, a, i, f, m) {
            for (m = m && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null;) {
              var v = l,
                M = a,
                G = i,
                x = f,
                k = M.flags;
              switch (M.tag) {
                case 0:
                case 11:
                case 15:
                  (hl(v, M, G, x, m), pc(8, M));
                  break;
                case 23:
                  break;
                case 22:
                  var ft = M.stateNode;
                  (M.memoizedState !== null
                    ? ft._visibility & 4
                      ? hl(v, M, G, x, m)
                      : kn(v, M)
                    : ((ft._visibility |= 4), hl(v, M, G, x, m)),
                    m && k & 2048 && uo(M.alternate, M));
                  break;
                case 24:
                  (hl(v, M, G, x, m), m && k & 2048 && _s(M.alternate, M));
                  break;
                default:
                  hl(v, M, G, x, m);
              }
              a = a.sibling;
            }
          }
          function kn(l, a) {
            if (a.subtreeFlags & 10256)
              for (a = a.child; a !== null;) {
                var i = l,
                  f = a,
                  m = f.flags;
                switch (f.tag) {
                  case 22:
                    (kn(i, f), m & 2048 && uo(f.alternate, f));
                    break;
                  case 24:
                    (kn(i, f), m & 2048 && _s(f.alternate, f));
                    break;
                  default:
                    kn(i, f);
                }
                a = a.sibling;
              }
          }
          function We(l) {
            if (l.subtreeFlags & Vu) for (l = l.child; l !== null;) (_u(l), (l = l.sibling));
          }
          function _u(l) {
            switch (l.tag) {
              case 26:
                (We(l),
                  l.flags & Vu &&
                    (l.memoizedState !== null
                      ? Fo(Gl, l.memoizedState, l.memoizedProps)
                      : Re(l.type, l.memoizedProps)));
                break;
              case 5:
                (We(l), l.flags & Vu && Re(l.type, l.memoizedProps));
                break;
              case 3:
              case 4:
                if ($l) {
                  var a = Gl;
                  ((Gl = ef(l.stateNode.containerInfo)), We(l), (Gl = a));
                } else We(l);
                break;
              case 22:
                l.memoizedState === null &&
                  ((a = l.alternate),
                  a !== null && a.memoizedState !== null ? ((a = Vu), (Vu = 16777216), We(l), (Vu = a)) : We(l));
                break;
              default:
                We(l);
            }
          }
          function Ns(l) {
            var a = l.alternate;
            if (a !== null && ((l = a.child), l !== null)) {
              a.child = null;
              do ((a = l.sibling), (l.sibling = null), (l = a));
              while (l !== null);
            }
          }
          function $n(l) {
            var a = l.deletions;
            if ((l.flags & 16) !== 0) {
              if (a !== null)
                for (var i = 0; i < a.length; i++) {
                  var f = a[i];
                  ((Ue = f), tu(f, l));
                }
              Ns(l);
            }
            if (l.subtreeFlags & 10256) for (l = l.child; l !== null;) (Ec(l), (l = l.sibling));
          }
          function Ec(l) {
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                ($n(l), l.flags & 2048 && In(9, l, l.return));
                break;
              case 3:
                $n(l);
                break;
              case 12:
                $n(l);
                break;
              case 22:
                var a = l.stateNode;
                l.memoizedState !== null && a._visibility & 4 && (l.return === null || l.return.tag !== 13)
                  ? ((a._visibility &= -5), Ei(l))
                  : $n(l);
                break;
              default:
                $n(l);
            }
          }
          function Ei(l) {
            var a = l.deletions;
            if ((l.flags & 16) !== 0) {
              if (a !== null)
                for (var i = 0; i < a.length; i++) {
                  var f = a[i];
                  ((Ue = f), tu(f, l));
                }
              Ns(l);
            }
            for (l = l.child; l !== null;) {
              switch (((a = l), a.tag)) {
                case 0:
                case 11:
                case 15:
                  (In(8, a, a.return), Ei(a));
                  break;
                case 22:
                  ((i = a.stateNode), i._visibility & 4 && ((i._visibility &= -5), Ei(a)));
                  break;
                default:
                  Ei(a);
              }
              l = l.sibling;
            }
          }
          function tu(l, a) {
            for (; Ue !== null;) {
              var i = Ue;
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  In(8, i, a);
                  break;
                case 23:
                case 22:
                  if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
                    var f = i.memoizedState.cachePool.pool;
                    f != null && f.refCount++;
                  }
                  break;
                case 24:
                  oi(i.memoizedState.cache);
              }
              if (((f = i.child), f !== null)) ((f.return = i), (Ue = f));
              else
                t: for (i = l; Ue !== null;) {
                  f = Ue;
                  var m = f.sibling,
                    v = f.return;
                  if ((yi(f), f === i)) {
                    Ue = null;
                    break t;
                  }
                  if (m !== null) {
                    ((m.return = v), (Ue = m));
                    break t;
                  }
                  Ue = v;
                }
            }
          }
          function zs(l) {
            var a = So(l);
            if (a != null) {
              if (typeof a.memoizedProps["data-testname"] != "string") throw Error(A(364));
              return a;
            }
            if (((l = Lu(l)), l === null)) throw Error(A(362));
            return l.stateNode.current;
          }
          function Ci(l, a) {
            var i = l.tag;
            switch (a.$$typeof) {
              case Ic:
                if (l.type === a.value) return !0;
                break;
              case mf:
                t: {
                  for (a = a.value, l = [l, 0], i = 0; i < l.length;) {
                    var f = l[i++],
                      m = f.tag,
                      v = l[i++],
                      M = a[v];
                    if ((m !== 5 && m !== 26 && m !== 27) || !ln(f)) {
                      for (; M != null && Ci(f, M);) (v++, (M = a[v]));
                      if (v === a.length) {
                        a = !0;
                        break t;
                      } else for (f = f.child; f !== null;) (l.push(f, v), (f = f.sibling));
                    }
                  }
                  a = !1;
                }
                return a;
              case hf:
                if ((i === 5 || i === 26 || i === 27) && Em(l.stateNode, a.value)) return !0;
                break;
              case ie:
                if (
                  (i === 5 || i === 6 || i === 26 || i === 27) &&
                  ((l = Oc(l)), l !== null && 0 <= l.indexOf(a.value))
                )
                  return !0;
                break;
              case Wt:
                if (
                  (i === 5 || i === 26 || i === 27) &&
                  ((l = l.memoizedProps["data-testname"]),
                  typeof l == "string" && l.toLowerCase() === a.value.toLowerCase())
                )
                  return !0;
                break;
              default:
                throw Error(A(365));
            }
            return !1;
          }
          function eu(l) {
            switch (l.$$typeof) {
              case Ic:
                return "<" + (E(l.value) || "Unknown") + ">";
              case mf:
                return ":has(" + (eu(l) || "") + ")";
              case hf:
                return '[role="' + l.value + '"]';
              case ie:
                return '"' + l.value + '"';
              case Wt:
                return '[data-testname="' + l.value + '"]';
              default:
                throw Error(A(365));
            }
          }
          function Wr(l, a) {
            var i = [];
            l = [l, 0];
            for (var f = 0; f < l.length;) {
              var m = l[f++],
                v = m.tag,
                M = l[f++],
                G = a[M];
              if ((v !== 5 && v !== 26 && v !== 27) || !ln(m)) {
                for (; G != null && Ci(m, G);) (M++, (G = a[M]));
                if (M === a.length) i.push(m);
                else for (m = m.child; m !== null;) (l.push(m, M), (m = m.sibling));
              }
            }
            return i;
          }
          function Tl(l, a) {
            if (!en) throw Error(A(363));
            ((l = zs(l)), (l = Wr(l, a)), (a = []), (l = Array.from(l)));
            for (var i = 0; i < l.length;) {
              var f = l[i++],
                m = f.tag;
              if (m === 5 || m === 26 || m === 27) ln(f) || a.push(f.stateNode);
              else for (f = f.child; f !== null;) (l.push(f), (f = f.sibling));
            }
            return a;
          }
          function Dl() {
            if ((St & 2) !== 0 && Qt !== 0) return Qt & -Qt;
            if (Tt.T !== null) {
              var l = Ql;
              return l !== 0 ? l : da();
            }
            return va();
          }
          function Ia() {
            Yl === 0 && (Yl = (Qt & 536870912) === 0 || $t ? gt() : 536870912);
            var l = ia.current;
            return (l !== null && (l.flags |= 32), Yl);
          }
          function Al(l, a, i) {
            (((l === Lt && he === 2) || l.cancelPendingCommit !== null) && (Ra(l, 0), Da(l, Qt, Yl, !1)),
              yt(l, i),
              ((St & 2) === 0 || l !== Lt) &&
                (l === Lt && ((St & 2) === 0 && (za |= i), Pt === 4 && Da(l, Qt, Yl, !1)), gl(l)));
          }
          function Cc(l, a, i) {
            if ((St & 6) !== 0) throw Error(A(327));
            var f = (!i && (a & 60) === 0 && (a & l.expiredLanes) === 0) || ct(l, a),
              m = f ? Pa(l, a) : wa(l, a, !0),
              v = f;
            do {
              if (m === 0) {
                ca && !f && Da(l, a, 0, !1);
                break;
              } else if (m === 6) Da(l, a, 0, !ce);
              else {
                if (((i = l.current.alternate), v && !Pr(i))) {
                  ((m = wa(l, a, !1)), (v = !1));
                  continue;
                }
                if (m === 2) {
                  if (((v = a), l.errorRecoveryDisabledLanes & v)) var M = 0;
                  else ((M = l.pendingLanes & -536870913), (M = M !== 0 ? M : M & 536870912 ? 536870912 : 0));
                  if (M !== 0) {
                    a = M;
                    t: {
                      var G = l;
                      m = ji;
                      var x = Rl && G.current.memoizedState.isDehydrated;
                      if ((x && (Ra(G, M).flags |= 256), (M = wa(G, M, !1)), M !== 2)) {
                        if (Nn && !x) {
                          ((G.errorRecoveryDisabledLanes |= v), (za |= v), (m = 4));
                          break t;
                        }
                        ((v = fa), (fa = m), v !== null && Bn(v));
                      }
                      m = M;
                    }
                    if (((v = !1), m !== 2)) continue;
                  }
                }
                if (m === 1) {
                  (Ra(l, 0), Da(l, a, 0, !0));
                  break;
                }
                t: {
                  switch (((f = l), m)) {
                    case 0:
                    case 1:
                      throw Error(A(345));
                    case 4:
                      if ((a & 4194176) === a) {
                        Da(f, a, Yl, !ce);
                        break t;
                      }
                      break;
                    case 2:
                      fa = null;
                      break;
                    case 3:
                    case 5:
                      break;
                    default:
                      throw Error(A(329));
                  }
                  if (
                    ((f.finishedWork = i),
                    (f.finishedLanes = a),
                    (a & 62914560) === a && ((v = sn + 300 - il()), 10 < v))
                  ) {
                    if ((Da(f, a, Yl, !ce), dt(f, 0) !== 0)) break t;
                    f.timeoutHandle = Co(Js.bind(null, f, i, fa, Ja, Qi, a, Yl, za, zn, ce, 2, -0, 0), v);
                    break t;
                  }
                  Js(f, i, fa, Ja, Qi, a, Yl, za, zn, ce, 0, -0, 0);
                }
              }
              break;
            } while (!0);
            gl(l);
          }
          function Bn(l) {
            fa === null ? (fa = l) : fa.push.apply(fa, l);
          }
          function Js(l, a, i, f, m, v, M, G, x, k, ft, mt, At) {
            var Ut = a.subtreeFlags;
            if ((Ut & 8192 || (Ut & 16785408) === 16785408) && (kl(), _u(a), (a = Zs()), a !== null)) {
              ((l.cancelPendingCommit = a(ve.bind(null, l, i, f, m, M, G, x, 1, mt, At))), Da(l, v, M, !k));
              return;
            }
            ve(l, i, f, m, M, G, x, ft, mt, At);
          }
          function Pr(l) {
            for (var a = l; ;) {
              var i = a.tag;
              if (
                (i === 0 || i === 11 || i === 15) &&
                a.flags & 16384 &&
                ((i = a.updateQueue), i !== null && ((i = i.stores), i !== null))
              )
                for (var f = 0; f < i.length; f++) {
                  var m = i[f],
                    v = m.getSnapshot;
                  m = m.value;
                  try {
                    if (!ta(v(), m)) return !1;
                  } catch {
                    return !1;
                  }
                }
              if (((i = a.child), a.subtreeFlags & 16384 && i !== null)) ((i.return = a), (a = i));
              else {
                if (a === l) break;
                for (; a.sibling === null;) {
                  if (a.return === null || a.return === l) return !0;
                  a = a.return;
                }
                ((a.sibling.return = a.return), (a = a.sibling));
              }
            }
            return !0;
          }
          function Da(l, a, i, f) {
            ((a &= ~Cl),
              (a &= ~za),
              (l.suspendedLanes |= a),
              (l.pingedLanes &= ~a),
              f && (l.warmLanes |= a),
              (f = l.expirationTimes));
            for (var m = a; 0 < m;) {
              var v = 31 - xl(m),
                M = 1 << v;
              ((f[v] = -1), (m &= ~M));
            }
            i !== 0 && Dt(l, i, a);
          }
          function io() {
            return (St & 6) === 0 ? (Ka(0), !1) : !0;
          }
          function Nl() {
            if (Nt !== null) {
              if (he === 0) var l = Nt.return;
              else ((l = Nt), (_e = vu = null), ec(l), (nn = null), (Ba = 0), (l = Nt));
              for (; l !== null;) (eo(l.alternate, l), (l = l.return));
              Nt = null;
            }
          }
          function Ra(l, a) {
            ((l.finishedWork = null), (l.finishedLanes = 0));
            var i = l.timeoutHandle;
            (i !== Ku && ((l.timeoutHandle = Ku), Gc(i)),
              (i = l.cancelPendingCommit),
              i !== null && ((l.cancelPendingCommit = null), i()),
              Nl(),
              (Lt = l),
              (Nt = i = vl(l.current, null)),
              (Qt = a),
              (he = 0),
              (Qe = null),
              (ce = !1),
              (ca = ct(l, a)),
              (Nn = !1),
              (zn = Yl = Cl = za = sa = Pt = 0),
              (fa = ji = null),
              (Qi = !1),
              (a & 8) !== 0 && (a |= a & 32));
            var f = l.entangledLanes;
            if (f !== 0)
              for (l = l.entanglements, f &= a; 0 < f;) {
                var m = 31 - xl(f),
                  v = 1 << m;
                ((a |= l[m]), (f &= ~v));
              }
            return ((Na = a), fl(), i);
          }
          function Uu(l, a) {
            ((xt = null),
              (Tt.H = te),
              a === oe
                ? ((a = ai()), (he = 3))
                : a === Wo
                  ? ((a = ai()), (he = 4))
                  : (he = a === Gd ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1),
              (Qe = a),
              Nt === null && ((Pt = 1), Cs(l, ut(a, l.current))));
          }
          function Sc() {
            var l = ia.current;
            return l === null
              ? !0
              : (Qt & 4194176) === Qt
                ? Ea === null
                : (Qt & 62914560) === Qt || (Qt & 536870912) !== 0
                  ? l === Ea
                  : !1;
          }
          function Si() {
            var l = Tt.H;
            return ((Tt.H = te), l === null ? te : l);
          }
          function Wl() {
            var l = Tt.A;
            return ((Tt.A = df), l);
          }
          function zl() {
            ((Pt = 4),
              ce || ((Qt & 4194176) !== Qt && ia.current !== null) || (ca = !0),
              ((sa & 134217727) === 0 && (za & 134217727) === 0) || Lt === null || Da(Lt, Qt, Yl, !1));
          }
          function wa(l, a, i) {
            var f = St;
            St |= 2;
            var m = Si(),
              v = Wl();
            ((Lt !== l || Qt !== a) && ((Ja = null), Ra(l, a)), (a = !1));
            var M = Pt;
            t: do
              try {
                if (he !== 0 && Nt !== null) {
                  var G = Nt,
                    x = Qe;
                  switch (he) {
                    case 8:
                      (Nl(), (M = 6));
                      break t;
                    case 3:
                    case 2:
                    case 6:
                      ia.current === null && (a = !0);
                      var k = he;
                      if (((he = 0), (Qe = null), lu(l, G, x, k), i && ca)) {
                        M = 0;
                        break t;
                      }
                      break;
                    default:
                      ((k = he), (he = 0), (Qe = null), lu(l, G, x, k));
                  }
                }
                (Wa(), (M = Pt));
                break;
              } catch (ft) {
                Uu(l, ft);
              }
            while (!0);
            return (
              a && l.shellSuspendCounter++,
              (_e = vu = null),
              (St = f),
              (Tt.H = m),
              (Tt.A = v),
              Nt === null && ((Lt = null), (Qt = 0), fl()),
              M
            );
          }
          function Wa() {
            for (; Nt !== null;) co(Nt);
          }
          function Pa(l, a) {
            var i = St;
            St |= 2;
            var f = Si(),
              m = Wl();
            Lt !== l || Qt !== a ? ((Ja = null), (De = il() + 500), Ra(l, a)) : (ca = ct(l, a));
            t: do
              try {
                if (he !== 0 && Nt !== null) {
                  a = Nt;
                  var v = Qe;
                  e: switch (he) {
                    case 1:
                      ((he = 0), (Qe = null), lu(l, a, v, 1));
                      break;
                    case 2:
                      if ($i(v)) {
                        ((he = 0), (Qe = null), xs(a));
                        break;
                      }
                      ((a = function () {
                        (he === 2 && Lt === l && (he = 7), gl(l));
                      }),
                        v.then(a, a));
                      break t;
                    case 3:
                      he = 7;
                      break t;
                    case 4:
                      he = 5;
                      break t;
                    case 7:
                      $i(v) ? ((he = 0), (Qe = null), xs(a)) : ((he = 0), (Qe = null), lu(l, a, v, 7));
                      break;
                    case 5:
                      var M = null;
                      switch (Nt.tag) {
                        case 26:
                          M = Nt.memoizedState;
                        case 5:
                        case 27:
                          var G = Nt,
                            x = G.type,
                            k = G.pendingProps;
                          if (M ? Zo(M) : Dn(x, k)) {
                            ((he = 0), (Qe = null));
                            var ft = G.sibling;
                            if (ft !== null) Nt = ft;
                            else {
                              var mt = G.return;
                              mt !== null ? ((Nt = mt), gc(mt)) : (Nt = null);
                            }
                            break e;
                          }
                      }
                      ((he = 0), (Qe = null), lu(l, a, v, 5));
                      break;
                    case 6:
                      ((he = 0), (Qe = null), lu(l, a, v, 6));
                      break;
                    case 8:
                      (Nl(), (Pt = 6));
                      break t;
                    default:
                      throw Error(A(462));
                  }
                }
                En();
                break;
              } catch (At) {
                Uu(l, At);
              }
            while (!0);
            return (
              (_e = vu = null),
              (Tt.H = f),
              (Tt.A = m),
              (St = i),
              Nt !== null ? 0 : ((Lt = null), (Qt = 0), fl(), Pt)
            );
          }
          function En() {
            for (; Nt !== null && !Md();) co(Nt);
          }
          function co(l) {
            var a = Xr(l.alternate, l, Na);
            ((l.memoizedProps = l.pendingProps), a === null ? gc(l) : (Nt = a));
          }
          function xs(l) {
            var a = l,
              i = a.alternate;
            switch (a.tag) {
              case 15:
              case 0:
                a = jr(i, a, a.pendingProps, a.type, void 0, Qt);
                break;
              case 11:
                a = jr(i, a, a.pendingProps, a.type.render, a.ref, Qt);
                break;
              case 5:
                ec(a);
              default:
                (eo(i, a), (a = Nt = gn(a, Na)), (a = Xr(i, a, Na)));
            }
            ((l.memoizedProps = l.pendingProps), a === null ? gc(l) : (Nt = a));
          }
          function lu(l, a, i, f) {
            ((_e = vu = null), ec(a), (nn = null), (Ba = 0));
            var m = a.return;
            try {
              if (Ur(l, m, a, i, Qt)) {
                ((Pt = 1), Cs(l, ut(i, l.current)), (Nt = null));
                return;
              }
            } catch (v) {
              if (m !== null) throw ((Nt = m), v);
              ((Pt = 1), Cs(l, ut(i, l.current)), (Nt = null));
              return;
            }
            a.flags & 32768
              ? ($t || f === 1
                  ? (l = !0)
                  : ca || (Qt & 536870912) !== 0
                    ? (l = !1)
                    : ((ce = l = !0),
                      (f === 2 || f === 3 || f === 6) &&
                        ((f = ia.current), f !== null && f.tag === 13 && (f.flags |= 16384))),
                Pe(a, l))
              : gc(a);
          }
          function gc(l) {
            var a = l;
            do {
              if ((a.flags & 32768) !== 0) {
                Pe(a, ce);
                return;
              }
              l = a.return;
              var i = Zr(a.alternate, a, Na);
              if (i !== null) {
                Nt = i;
                return;
              }
              if (((a = a.sibling), a !== null)) {
                Nt = a;
                return;
              }
              Nt = a = l;
            } while (a !== null);
            Pt === 0 && (Pt = 5);
          }
          function Pe(l, a) {
            do {
              var i = Fr(l.alternate, l);
              if (i !== null) {
                ((i.flags &= 32767), (Nt = i));
                return;
              }
              if (
                ((i = l.return),
                i !== null && ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
                !a && ((l = l.sibling), l !== null))
              ) {
                Nt = l;
                return;
              }
              Nt = l = i;
            } while (l !== null);
            ((Pt = 6), (Nt = null));
          }
          function ve(l, a, i, f, m, v, M, G, x, k) {
            var ft = Tt.T,
              mt = Ve();
            try {
              (yl(2), (Tt.T = null), Ft(l, a, i, f, mt, m, v, M, G, x, k));
            } finally {
              ((Tt.T = ft), yl(mt));
            }
          }
          function Ft(l, a, i, f, m, v, M, G) {
            do ke();
            while (Jn !== null);
            if ((St & 6) !== 0) throw Error(A(327));
            var x = l.finishedWork;
            if (((f = l.finishedLanes), x === null)) return null;
            if (((l.finishedWork = null), (l.finishedLanes = 0), x === l.current)) throw Error(A(177));
            ((l.callbackNode = null), (l.callbackPriority = 0), (l.cancelPendingCommit = null));
            var k = x.lanes | x.childLanes;
            if (
              ((k |= Ui),
              ne(l, f, k, v, M, G),
              l === Lt && ((Nt = Lt = null), (Qt = 0)),
              ((x.subtreeFlags & 10256) === 0 && (x.flags & 10256) === 0) ||
                Sa ||
                ((Sa = !0),
                (Af = k),
                (wu = i),
                bc(af, function () {
                  return (ke(), null);
                })),
              (i = (x.flags & 15990) !== 0),
              (x.subtreeFlags & 15990) !== 0 || i
                ? ((i = Tt.T),
                  (Tt.T = null),
                  (v = Ve()),
                  yl(2),
                  (M = St),
                  (St |= 4),
                  vi(l, x),
                  Wn(x, l),
                  Bo(l.containerInfo),
                  (l.current = x),
                  Gs(l, x.alternate, x),
                  Td(),
                  (St = M),
                  yl(v),
                  (Tt.T = i))
                : (l.current = x),
              Sa ? ((Sa = !1), (Jn = l), (Iu = f)) : Cn(l, k),
              (k = l.pendingLanes),
              k === 0 && (oa = null),
              R(x.stateNode),
              gl(l),
              a !== null)
            )
              for (m = l.onRecoverableError, x = 0; x < a.length; x++)
                ((k = a[x]), m(k.value, { componentStack: k.stack }));
            return (
              (Iu & 3) !== 0 && ke(),
              (k = l.pendingLanes),
              (f & 4194218) !== 0 && (k & 42) !== 0 ? (l === Ol ? Wu++ : ((Wu = 0), (Ol = l))) : (Wu = 0),
              Ka(0),
              null
            );
          }
          function Cn(l, a) {
            (l.pooledCacheLanes &= a) === 0 && ((a = l.pooledCache), a != null && ((l.pooledCache = null), oi(a)));
          }
          function ke() {
            if (Jn !== null) {
              var l = Jn,
                a = Af;
              Af = 0;
              var i = Ot(Iu),
                f = 32 > i ? 32 : i;
              i = Tt.T;
              var m = Ve();
              try {
                if ((yl(f), (Tt.T = null), Jn === null)) var v = !1;
                else {
                  ((f = wu), (wu = null));
                  var M = Jn,
                    G = Iu;
                  if (((Jn = null), (Iu = 0), (St & 6) !== 0)) throw Error(A(331));
                  var x = St;
                  if (
                    ((St |= 4),
                    Ec(M.current),
                    Us(M, M.current, G, f),
                    (St = x),
                    Ka(0, !1),
                    jl && typeof jl.onPostCommitFiberRoot == "function")
                  )
                    try {
                      jl.onPostCommitFiberRoot(Oi, M);
                    } catch {}
                  v = !0;
                }
                return v;
              } finally {
                (yl(m), (Tt.T = i), Cn(l, a));
              }
            }
            return !1;
          }
          function js(l, a, i) {
            ((a = ut(i, a)), (a = dc(l.stateNode, a, 2)), (l = Le(l, a, 2)), l !== null && (yt(l, 2), gl(l)));
          }
          function Xt(l, a, i) {
            if (l.tag === 3) js(l, l, i);
            else
              for (; a !== null;) {
                if (a.tag === 3) {
                  js(a, l, i);
                  break;
                } else if (a.tag === 1) {
                  var f = a.stateNode;
                  if (
                    typeof a.type.getDerivedStateFromError == "function" ||
                    (typeof f.componentDidCatch == "function" && (oa === null || !oa.has(f)))
                  ) {
                    ((l = ut(i, l)), (i = fi(2)), (f = Le(a, i, 2)), f !== null && (mc(i, f, a, l), yt(f, 2), gl(f)));
                    break;
                  }
                }
                a = a.return;
              }
          }
          function Qs(l, a, i) {
            var f = l.pingCache;
            if (f === null) {
              f = l.pingCache = new qt();
              var m = new Set();
              f.set(a, m);
            } else ((m = f.get(a)), m === void 0 && ((m = new Set()), f.set(a, m)));
            m.has(i) || ((Nn = !0), m.add(i), (l = kr.bind(null, l, a, i)), a.then(l, l));
          }
          function kr(l, a, i) {
            var f = l.pingCache;
            (f !== null && f.delete(a),
              (l.pingedLanes |= l.suspendedLanes & i),
              (l.warmLanes &= ~i),
              Lt === l &&
                (Qt & i) === i &&
                (Pt === 4 || (Pt === 3 && (Qt & 62914560) === Qt && 300 > il() - sn)
                  ? (St & 2) === 0 && Ra(l, 0)
                  : (Cl |= i),
                zn === Qt && (zn = 0)),
              gl(l));
          }
          function Nu(l, a) {
            (a === 0 && (a = ht()), (l = ol(l, a)), l !== null && (yt(l, a), gl(l)));
          }
          function zu(l) {
            var a = l.memoizedState,
              i = 0;
            (a !== null && (i = a.retryLane), Nu(l, i));
          }
          function so(l, a) {
            var i = 0;
            switch (l.tag) {
              case 13:
                var f = l.stateNode,
                  m = l.memoizedState;
                m !== null && (i = m.retryLane);
                break;
              case 19:
                f = l.stateNode;
                break;
              case 22:
                f = l.stateNode._retryCache;
                break;
              default:
                throw Error(A(314));
            }
            (f !== null && f.delete(a), Nu(l, i));
          }
          function bc(l, a) {
            return Gi(l, a);
          }
          function fo(l, a, i, f) {
            ((this.tag = l),
              (this.key = i),
              (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
              (this.index = 0),
              (this.refCleanup = this.ref = null),
              (this.pendingProps = a),
              (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
              (this.mode = f),
              (this.subtreeFlags = this.flags = 0),
              (this.deletions = null),
              (this.childLanes = this.lanes = 0),
              (this.alternate = null));
          }
          function Sn(l) {
            return ((l = l.prototype), !(!l || !l.isReactComponent));
          }
          function vl(l, a) {
            var i = l.alternate;
            return (
              i === null
                ? ((i = r(l.tag, a, l.key, l.mode)),
                  (i.elementType = l.elementType),
                  (i.type = l.type),
                  (i.stateNode = l.stateNode),
                  (i.alternate = l),
                  (l.alternate = i))
                : ((i.pendingProps = a), (i.type = l.type), (i.flags = 0), (i.subtreeFlags = 0), (i.deletions = null)),
              (i.flags = l.flags & 31457280),
              (i.childLanes = l.childLanes),
              (i.lanes = l.lanes),
              (i.child = l.child),
              (i.memoizedProps = l.memoizedProps),
              (i.memoizedState = l.memoizedState),
              (i.updateQueue = l.updateQueue),
              (a = l.dependencies),
              (i.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
              (i.sibling = l.sibling),
              (i.index = l.index),
              (i.ref = l.ref),
              (i.refCleanup = l.refCleanup),
              i
            );
          }
          function gn(l, a) {
            l.flags &= 31457282;
            var i = l.alternate;
            return (
              i === null
                ? ((l.childLanes = 0),
                  (l.lanes = a),
                  (l.child = null),
                  (l.subtreeFlags = 0),
                  (l.memoizedProps = null),
                  (l.memoizedState = null),
                  (l.updateQueue = null),
                  (l.dependencies = null),
                  (l.stateNode = null))
                : ((l.childLanes = i.childLanes),
                  (l.lanes = i.lanes),
                  (l.child = i.child),
                  (l.subtreeFlags = 0),
                  (l.deletions = null),
                  (l.memoizedProps = i.memoizedProps),
                  (l.memoizedState = i.memoizedState),
                  (l.updateQueue = i.updateQueue),
                  (l.type = i.type),
                  (a = i.dependencies),
                  (l.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext })),
              l
            );
          }
          function Aa(l, a, i, f, m, v) {
            var M = 0;
            if (((f = l), typeof l == "function")) Sn(l) && (M = 1);
            else if (typeof l == "string")
              M =
                $l && ul
                  ? jo(l, i, tl.current)
                    ? 26
                    : Ri(l)
                      ? 27
                      : 5
                  : $l
                    ? jo(l, i, tl.current)
                      ? 26
                      : 5
                    : ul && Ri(l)
                      ? 27
                      : 5;
            else
              t: switch (l) {
                case bi:
                  return bn(i.children, m, v, a);
                case Ao:
                  ((M = 8), (m |= 24));
                  break;
                case vo:
                  return ((l = r(12, i, a, m | 2)), (l.elementType = vo), (l.lanes = v), l);
                case Ls:
                  return ((l = r(13, i, a, m)), (l.elementType = Ls), (l.lanes = v), l);
                case uu:
                  return ((l = r(19, i, a, m)), (l.elementType = uu), (l.lanes = v), l);
                case Dc:
                  return Ks(i, m, v, a);
                default:
                  if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                      case ed:
                      case ka:
                        M = 10;
                        break t;
                      case nu:
                        M = 9;
                        break t;
                      case Mi:
                        M = 11;
                        break t;
                      case Tc:
                        M = 14;
                        break t;
                      case Ga:
                        ((M = 16), (f = null));
                        break t;
                    }
                  ((M = 29), (i = Error(A(130, l === null ? "null" : typeof l, ""))), (f = null));
              }
            return ((a = r(M, i, a, m)), (a.elementType = l), (a.type = f), (a.lanes = v), a);
          }
          function bn(l, a, i, f) {
            return ((l = r(7, l, f, a)), (l.lanes = i), l);
          }
          function Ks(l, a, i, f) {
            ((l = r(22, l, f, a)), (l.elementType = Dc), (l.lanes = i));
            var m = {
              _visibility: 1,
              _pendingVisibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
              _current: null,
              detach: function () {
                var v = m._current;
                if (v === null) throw Error(A(456));
                if ((m._pendingVisibility & 2) === 0) {
                  var M = ol(v, 2);
                  M !== null && ((m._pendingVisibility |= 2), Al(M, v, 2));
                }
              },
              attach: function () {
                var v = m._current;
                if (v === null) throw Error(A(456));
                if ((m._pendingVisibility & 2) !== 0) {
                  var M = ol(v, 2);
                  M !== null && ((m._pendingVisibility &= -3), Al(M, v, 2));
                }
              },
            };
            return ((l.stateNode = m), l);
          }
          function au(l, a, i) {
            return ((l = r(6, l, null, a)), (l.lanes = i), l);
          }
          function gi(l, a, i) {
            return (
              (a = r(4, l.children !== null ? l.children : [], l.key, a)),
              (a.lanes = i),
              (a.stateNode = {
                containerInfo: l.containerInfo,
                pendingChildren: null,
                implementation: l.implementation,
              }),
              a
            );
          }
          function Ju(l, a, i, f, m, v, M, G) {
            ((this.tag = 1),
              (this.containerInfo = l),
              (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
              (this.timeoutHandle = Ku),
              (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
              (this.callbackPriority = 0),
              (this.expirationTimes = bt(-1)),
              (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.finishedLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                  0),
              (this.entanglements = bt(0)),
              (this.hiddenUpdates = bt(null)),
              (this.identifierPrefix = f),
              (this.onUncaughtError = m),
              (this.onCaughtError = v),
              (this.onRecoverableError = M),
              (this.pooledCache = null),
              (this.pooledCacheLanes = 0),
              (this.formState = G),
              (this.incompleteTransitions = new Map()));
          }
          function $e(l, a, i, f, m, v, M, G, x, k, ft, mt) {
            return (
              (l = new Ju(l, a, i, M, G, x, k, mt)),
              (a = 1),
              v === !0 && (a |= 24),
              (v = r(3, null, null, a)),
              (l.current = v),
              (v.stateNode = l),
              (a = Ms()),
              a.refCount++,
              (l.pooledCache = a),
              a.refCount++,
              (v.memoizedState = { element: f, isDehydrated: i, cache: a }),
              Gf(v),
              l
            );
          }
          function Mc(l) {
            return l ? ((l = Yu), l) : Yu;
          }
          function oo(l) {
            var a = l._reactInternals;
            if (a === void 0)
              throw typeof l.render == "function" ? Error(A(188)) : ((l = Object.keys(l).join(",")), Error(A(268, l)));
            return ((l = U(a)), (l = l !== null ? Q(l) : null), l === null ? null : Ti(l.stateNode));
          }
          function $r(l, a, i, f, m, v) {
            ((m = Mc(m)),
              f.context === null ? (f.context = m) : (f.pendingContext = m),
              (f = ma(a)),
              (f.payload = { element: i }),
              (v = v === void 0 ? null : v),
              v !== null && (f.callback = v),
              (i = Le(l, f, a)),
              i !== null && (Al(i, l, a), ha(i, l, a)));
          }
          function td(l, a) {
            if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
              var i = l.retryLane;
              l.retryLane = i !== 0 && i < a ? i : a;
            }
          }
          function ro(l, a) {
            (td(l, a), (l = l.alternate) && td(l, a));
          }
          var Ct = {},
            mo = Df(),
            al = jp(),
            xu = Object.assign,
            ho = Symbol.for("react.element"),
            Mn = Symbol.for("react.transitional.element"),
            Ha = Symbol.for("react.portal"),
            bi = Symbol.for("react.fragment"),
            Ao = Symbol.for("react.strict_mode"),
            vo = Symbol.for("react.profiler"),
            ed = Symbol.for("react.provider"),
            nu = Symbol.for("react.consumer"),
            ka = Symbol.for("react.context"),
            Mi = Symbol.for("react.forward_ref"),
            Ls = Symbol.for("react.suspense"),
            uu = Symbol.for("react.suspense_list"),
            Tc = Symbol.for("react.memo"),
            Ga = Symbol.for("react.lazy"),
            Dc = Symbol.for("react.offscreen"),
            ld = Symbol.for("react.memo_cache_sentinel"),
            yo = Symbol.iterator,
            ju = Symbol.for("react.client.reference"),
            Tt = mo.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            Ys,
            po,
            iu = !1,
            cu = Array.isArray,
            Xs = c.rendererVersion,
            Rc = c.rendererPackageName,
            Hc = c.extraDevToolsConfig,
            Ti = c.getPublicInstance,
            Qu = c.getRootHostContext,
            ad = c.getChildHostContext,
            su = c.prepareForCommit,
            Bo = c.resetAfterCommit,
            Eo = c.createInstance,
            $a = c.appendInitialChild,
            Tn = c.finalizeInitialChildren,
            fu = c.shouldSetTextContent,
            qs = c.createTextInstance,
            Co = c.scheduleTimeout,
            Gc = c.cancelTimeout,
            Ku = c.noTimeout,
            tn = c.isPrimaryRenderer;
          c.warnsIfNotActing;
          var nl = c.supportsMutation,
            Pl = c.supportsPersistence,
            Rl = c.supportsHydration,
            So = c.getInstanceFromNode;
          (c.beforeActiveInstanceBlur, c.afterActiveInstanceBlur);
          var go = c.preparePortalMount;
          (c.prepareScopeUpdate, c.getInstanceFromScope);
          var yl = c.setCurrentUpdatePriority,
            Ve = c.getCurrentUpdatePriority,
            va = c.resolveUpdatePriority;
          (c.resolveEventType, c.resolveEventTimeStamp);
          var ou = c.shouldAttemptEagerTransition,
            bo = c.detachDeletedInstance;
          c.requestPostPaintCallback;
          var nd = c.maySuspendCommit,
            Dn = c.preloadInstance,
            kl = c.startSuspendingCommit,
            Re = c.suspendInstance,
            Zs = c.waitForCommitToBeReady,
            Jl = c.NotPendingTransition,
            Ht = c.HostTransitionContext,
            me = c.resetFormInstance;
          c.bindToConsole;
          var Xe = c.supportsMicrotasks,
            Fs = c.scheduleMicrotask,
            en = c.supportsTestSelectors,
            Lu = c.findFiberRoot,
            Vs = c.getBoundingRect,
            Oc = c.getTextContent,
            ln = c.isHiddenSubtree,
            Em = c.matchAccessibilityRole,
            He = c.setFocusIfFocusable,
            Mo = c.setupIntersectionObserver,
            To = c.appendChild,
            ud = c.appendChildToContainer,
            id = c.commitTextUpdate,
            Cm = c.commitMount,
            Do = c.commitUpdate,
            Ro = c.insertBefore,
            Ho = c.insertInContainerBefore,
            Hl = c.removeChild,
            ze = c.removeChildFromContainer,
            _c = c.resetTextContent,
            Uc = c.hideInstance,
            Is = c.hideTextInstance,
            Go = c.unhideInstance,
            Rn = c.unhideTextInstance,
            ws = c.clearContainer,
            Oo = c.cloneInstance,
            Ws = c.createContainerChildSet,
            _o = c.appendChildToContainerChildSet,
            cd = c.finalizeContainerChildren,
            Uo = c.replaceContainerChildren,
            No = c.cloneHiddenInstance,
            zo = c.cloneHiddenTextInstance,
            Ps = c.isSuspenseInstancePending,
            Nc = c.isSuspenseInstanceFallback,
            sd = c.getSuspenseInstanceFallbackErrorDetails,
            Sm = c.registerSuspenseInstanceRetry,
            fd = c.canHydrateFormStateMarker,
            od = c.isFormStateMarkerMatching,
            Jo = c.getNextHydratableSibling,
            ks = c.getFirstHydratableChild,
            rd = c.getFirstHydratableChildWithinContainer,
            dd = c.getFirstHydratableChildWithinSuspenseInstance,
            md = c.canHydrateInstance,
            hd = c.canHydrateTextInstance,
            Ad = c.canHydrateSuspenseInstance,
            gm = c.hydrateInstance,
            vd = c.hydrateTextInstance,
            Di = c.hydrateSuspenseInstance,
            yd = c.getNextHydratableInstanceAfterSuspenseInstance,
            $s = c.commitHydratedContainer,
            tf = c.commitHydratedSuspenseInstance,
            pd = c.clearSuspenseBoundary,
            xo = c.clearSuspenseBoundaryFromContainer,
            Bd = c.shouldDeleteUnhydratedTailInstances;
          (c.diffHydratedPropsForDevWarnings,
            c.diffHydratedTextForDevWarnings,
            c.describeHydratableInstanceForDevWarnings);
          var Ed = c.validateHydratableInstance,
            Cd = c.validateHydratableTextInstance,
            $l = c.supportsResources,
            jo = c.isHostHoistableType,
            ef = c.getHoistableRoot,
            lf = c.getResource,
            Qo = c.acquireResource,
            Ko = c.releaseResource,
            Lo = c.hydrateHoistable,
            Yo = c.mountHoistable,
            Xo = c.unmountHoistable,
            bm = c.createHoistableInstance,
            qo = c.prepareToCommitHoistables,
            Sd = c.mayResourceSuspendCommit,
            Zo = c.preloadResource,
            Fo = c.suspendResource,
            ul = c.supportsSingletons,
            Vo = c.resolveSingletonInstance,
            Mm = c.clearSingleton,
            Tm = c.acquireSingletonInstance,
            gd = c.releaseSingletonInstance,
            Ri = c.isHostSingletonType,
            zc = [],
            Hn = -1,
            Yu = {},
            xl = Math.clz32 ? Math.clz32 : nt,
            Jc = Math.log,
            bd = Math.LN2,
            Hi = 128,
            xc = 4194304,
            Gi = al.unstable_scheduleCallback,
            jc = al.unstable_cancelCallback,
            Md = al.unstable_shouldYield,
            Td = al.unstable_requestPaint,
            il = al.unstable_now,
            Io = al.unstable_ImmediatePriority,
            Dd = al.unstable_UserBlockingPriority,
            af = al.unstable_NormalPriority,
            nf = al.unstable_IdlePriority,
            Rd = al.log,
            wo = al.unstable_setDisableYieldValue,
            Oi = null,
            jl = null,
            ta = typeof Object.is == "function" ? Object.is : I,
            uf = new WeakMap(),
            be = [],
            Ge = 0,
            Qc = null,
            Kc = 0,
            ea = [],
            la = 0,
            Oa = null,
            an = 1,
            ya = "",
            tl = w(null),
            Lc = w(null),
            _a = w(null),
            _i = w(null),
            pl = null,
            cl = null,
            $t = !1,
            aa = null,
            pa = !1,
            Yc = Error(A(519)),
            na = [],
            ru = 0,
            Ui = 0,
            Ni = null,
            Xu = null,
            Xc = !1,
            qc = !1,
            Ua = !1,
            du = 0,
            Zc = null,
            cf = 0,
            Ql = 0,
            mu = null,
            Gn = !1,
            zi = !1,
            Fc = Object.prototype.hasOwnProperty,
            oe = Error(A(460)),
            Wo = Error(A(474)),
            sf = { then: function () {} },
            qu = null,
            nn = null,
            Ba = 0,
            hu = br(!0),
            Po = br(!1),
            un = w(null),
            ua = w(0),
            ia = w(null),
            Ea = null,
            qe = w(0),
            cn = 0,
            xt = null,
            ae = null,
            Je = null,
            Ca = !1,
            Me = !1,
            On = !1,
            Vc = 0,
            Oe = 0,
            Ji = null,
            Hd = 0,
            ff = function () {
              return { lastEffect: null, events: null, stores: null, memoCache: null };
            },
            te = {
              readContext: ll,
              use: hn,
              useCallback: Yt,
              useContext: Yt,
              useEffect: Yt,
              useImperativeHandle: Yt,
              useLayoutEffect: Yt,
              useInsertionEffect: Yt,
              useMemo: Yt,
              useReducer: Yt,
              useRef: Yt,
              useState: Yt,
              useDebugValue: Yt,
              useDeferredValue: Yt,
              useTransition: Yt,
              useSyncExternalStore: Yt,
              useId: Yt,
            };
          ((te.useCacheRefresh = Yt),
            (te.useMemoCache = Yt),
            (te.useHostTransitionStatus = Yt),
            (te.useFormState = Yt),
            (te.useActionState = Yt),
            (te.useOptimistic = Yt));
          var Ze = {
            readContext: ll,
            use: hn,
            useCallback: function (l, a) {
              return ((Fe().memoizedState = [l, a === void 0 ? null : a]), l);
            },
            useContext: ll,
            useEffect: jf,
            useImperativeHandle: function (l, a, i) {
              ((i = i != null ? i.concat([l]) : null), As(4194308, 4, cc.bind(null, a, l), i));
            },
            useLayoutEffect: function (l, a) {
              return As(4194308, 4, l, a);
            },
            useInsertionEffect: function (l, a) {
              As(4, 2, l, a);
            },
            useMemo: function (l, a) {
              var i = Fe();
              a = a === void 0 ? null : a;
              var f = l();
              if (On) {
                N(!0);
                try {
                  l();
                } finally {
                  N(!1);
                }
              }
              return ((i.memoizedState = [f, a]), f);
            },
            useReducer: function (l, a, i) {
              var f = Fe();
              if (i !== void 0) {
                var m = i(a);
                if (On) {
                  N(!0);
                  try {
                    i(a);
                  } finally {
                    N(!1);
                  }
                }
              } else m = a;
              return (
                (f.memoizedState = f.baseState = m),
                (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: m }),
                (f.queue = l),
                (l = l.dispatch = Yn.bind(null, xt, l)),
                [f.memoizedState, l]
              );
            },
            useRef: function (l) {
              var a = Fe();
              return ((l = { current: l }), (a.memoizedState = l));
            },
            useState: function (l) {
              l = Ma(l);
              var a = l.queue,
                i = Bs.bind(null, xt, a);
              return ((a.dispatch = i), [l.memoizedState, i]);
            },
            useDebugValue: sc,
            useDeferredValue: function (l, a) {
              var i = Fe();
              return Ln(i, l, a);
            },
            useTransition: function () {
              var l = Ma(!1);
              return ((l = ys.bind(null, xt, l.queue, !0, !1)), (Fe().memoizedState = l), [!1, l]);
            },
            useSyncExternalStore: function (l, a, i) {
              var f = xt,
                m = Fe();
              if ($t) {
                if (i === void 0) throw Error(A(407));
                i = i();
              } else {
                if (((i = a()), Lt === null)) throw Error(A(349));
                (Qt & 60) !== 0 || Uf(f, a, i);
              }
              m.memoizedState = i;
              var v = { value: i, getSnapshot: a };
              return (
                (m.queue = v),
                jf(Dr.bind(null, f, v, l), [l]),
                (f.flags |= 2048),
                gu(9, Nf.bind(null, f, v, i, a), { destroy: void 0 }, null),
                i
              );
            },
            useId: function () {
              var l = Fe(),
                a = Lt.identifierPrefix;
              if ($t) {
                var i = ya,
                  f = an;
                ((i = (f & ~(1 << (32 - xl(f) - 1))).toString(32) + i),
                  (a = ":" + a + "R" + i),
                  (i = Vc++),
                  0 < i && (a += "H" + i.toString(32)),
                  (a += ":"));
              } else ((i = Hd++), (a = ":" + a + "r" + i.toString(32) + ":"));
              return (l.memoizedState = a);
            },
            useCacheRefresh: function () {
              return (Fe().memoizedState = fc.bind(null, xt));
            },
          };
          ((Ze.useMemoCache = Ye),
            (Ze.useHostTransitionStatus = Tu),
            (Ze.useFormState = ms),
            (Ze.useActionState = ms),
            (Ze.useOptimistic = function (l) {
              var a = Fe();
              a.memoizedState = a.baseState = l;
              var i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
              return ((a.queue = i), (a = Es.bind(null, xt, !0, i)), (i.dispatch = a), [l, a]);
            }));
          var Bl = {
            readContext: ll,
            use: hn,
            useCallback: vs,
            useContext: ll,
            useEffect: ic,
            useImperativeHandle: Za,
            useInsertionEffect: Or,
            useLayoutEffect: _r,
            useMemo: Mu,
            useReducer: lc,
            useRef: bu,
            useState: function () {
              return lc(qa);
            },
            useDebugValue: sc,
            useDeferredValue: function (l, a) {
              var i = Ce();
              return Qf(i, ae.memoizedState, l, a);
            },
            useTransition: function () {
              var l = lc(qa)[0],
                a = Ce().memoizedState;
              return [typeof l == "boolean" ? l : mn(l), a];
            },
            useSyncExternalStore: Tr,
            useId: Fa,
          };
          ((Bl.useCacheRefresh = ps),
            (Bl.useMemoCache = Ye),
            (Bl.useHostTransitionStatus = Tu),
            (Bl.useFormState = Jf),
            (Bl.useActionState = Jf),
            (Bl.useOptimistic = function (l, a) {
              var i = Ce();
              return Fl(i, ae, l, a);
            }));
          var Au = {
            readContext: ll,
            use: hn,
            useCallback: vs,
            useContext: ll,
            useEffect: ic,
            useImperativeHandle: Za,
            useInsertionEffect: Or,
            useLayoutEffect: _r,
            useMemo: Mu,
            useReducer: Kn,
            useRef: bu,
            useState: function () {
              return Kn(qa);
            },
            useDebugValue: sc,
            useDeferredValue: function (l, a) {
              var i = Ce();
              return ae === null ? Ln(i, l, a) : Qf(i, ae.memoizedState, l, a);
            },
            useTransition: function () {
              var l = Kn(qa)[0],
                a = Ce().memoizedState;
              return [typeof l == "boolean" ? l : mn(l), a];
            },
            useSyncExternalStore: Tr,
            useId: Fa,
          };
          ((Au.useCacheRefresh = ps),
            (Au.useMemoCache = Ye),
            (Au.useHostTransitionStatus = Tu),
            (Au.useFormState = xf),
            (Au.useActionState = xf),
            (Au.useOptimistic = function (l, a) {
              var i = Ce();
              return ae !== null ? Fl(i, ae, l, a) : ((i.baseState = l), [l, i.queue.dispatch]);
            }));
          var of = {
              isMounted: function (l) {
                return (l = l._reactInternals) ? g(l) === l : !1;
              },
              enqueueSetState: function (l, a, i) {
                l = l._reactInternals;
                var f = Dl(),
                  m = ma(f);
                ((m.payload = a),
                  i != null && (m.callback = i),
                  (a = Le(l, m, f)),
                  a !== null && (Al(a, l, f), ha(a, l, f)));
              },
              enqueueReplaceState: function (l, a, i) {
                l = l._reactInternals;
                var f = Dl(),
                  m = ma(f);
                ((m.tag = 1),
                  (m.payload = a),
                  i != null && (m.callback = i),
                  (a = Le(l, m, f)),
                  a !== null && (Al(a, l, f), ha(a, l, f)));
              },
              enqueueForceUpdate: function (l, a) {
                l = l._reactInternals;
                var i = Dl(),
                  f = ma(i);
                ((f.tag = 2),
                  a != null && (f.callback = a),
                  (a = Le(l, f, i)),
                  a !== null && (Al(a, l, i), ha(a, l, i)));
              },
            },
            ko =
              typeof reportError == "function"
                ? reportError
                : function (l) {
                    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                      var a = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                          typeof l == "object" && l !== null && typeof l.message == "string"
                            ? String(l.message)
                            : String(l),
                        error: l,
                      });
                      if (!window.dispatchEvent(a)) return;
                    } else if (typeof process == "object" && typeof process.emit == "function") {
                      process.emit("uncaughtException", l);
                      return;
                    }
                    console.error(l);
                  },
            Gd = Error(A(461)),
            xe = !1,
            El = { dehydrated: null, treeContext: null, retryLane: 0 },
            Kl = w(null),
            vu = null,
            _e = null,
            Od =
              typeof AbortController < "u"
                ? AbortController
                : function () {
                    var l = [],
                      a = (this.signal = {
                        aborted: !1,
                        addEventListener: function (i, f) {
                          l.push(f);
                        },
                      });
                    this.abort = function () {
                      ((a.aborted = !0),
                        l.forEach(function (i) {
                          return i();
                        }));
                    };
                  },
            _n = al.unstable_scheduleCallback,
            Zu = al.unstable_NormalPriority,
            ue = {
              $$typeof: ka,
              Consumer: null,
              Provider: null,
              _currentValue: null,
              _currentValue2: null,
              _threadCount: 0,
            },
            rf = Tt.S;
          Tt.S = function (l, a) {
            (typeof a == "object" && a !== null && typeof a.then == "function" && us(l, a), rf !== null && rf(l, a));
          };
          var Un = w(null),
            Ie = !1,
            Te = !1,
            yu = !1,
            xi = typeof WeakSet == "function" ? WeakSet : Set,
            Ue = null,
            Fu = !1,
            je = null,
            Ll = !1,
            Gl = null,
            Vu = 8192,
            df = {
              getCacheForType: function (l) {
                var a = ll(ue),
                  i = a.data.get(l);
                return (i === void 0 && ((i = l()), a.data.set(l, i)), i);
              },
            },
            Ic = 0,
            mf = 1,
            hf = 2,
            Wt = 3,
            ie = 4;
          if (typeof Symbol == "function" && Symbol.for) {
            var jt = Symbol.for;
            ((Ic = jt("selector.component")),
              (mf = jt("selector.has_pseudo_class")),
              (hf = jt("selector.role")),
              (Wt = jt("selector.test_id")),
              (ie = jt("selector.text")));
          }
          var qt = typeof WeakMap == "function" ? WeakMap : Map,
            St = 0,
            Lt = null,
            Nt = null,
            Qt = 0,
            he = 0,
            Qe = null,
            ce = !1,
            ca = !1,
            Nn = !1,
            Na = 0,
            Pt = 0,
            sa = 0,
            za = 0,
            Cl = 0,
            Yl = 0,
            zn = 0,
            ji = null,
            fa = null,
            Qi = !1,
            sn = 0,
            De = 1 / 0,
            Ja = null,
            oa = null,
            Sa = !1,
            Jn = null,
            Iu = 0,
            Af = 0,
            wu = null,
            Wu = 0,
            Ol = null;
          return (
            (Ct.attemptContinuousHydration = function (l) {
              if (l.tag === 13) {
                var a = ol(l, 67108864);
                (a !== null && Al(a, l, 67108864), ro(l, 67108864));
              }
            }),
            (Ct.attemptHydrationAtCurrentPriority = function (l) {
              if (l.tag === 13) {
                var a = Dl(),
                  i = ol(l, a);
                (i !== null && Al(i, l, a), ro(l, a));
              }
            }),
            (Ct.attemptSynchronousHydration = function (l) {
              switch (l.tag) {
                case 3:
                  if (((l = l.stateNode), l.current.memoizedState.isDehydrated)) {
                    var a = at(l.pendingLanes);
                    if (a !== 0) {
                      for (l.pendingLanes |= 2, l.entangledLanes |= 2; a;) {
                        var i = 1 << (31 - xl(a));
                        ((l.entanglements[1] |= i), (a &= ~i));
                      }
                      (gl(l), (St & 6) === 0 && ((De = il() + 500), Ka(0)));
                    }
                  }
                  break;
                case 13:
                  ((a = ol(l, 2)), a !== null && Al(a, l, 2), io(), ro(l, 2));
              }
            }),
            (Ct.batchedUpdates = function (l, a) {
              return l(a);
            }),
            (Ct.createComponentSelector = function (l) {
              return { $$typeof: Ic, value: l };
            }),
            (Ct.createContainer = function (l, a, i, f, m, v, M, G, x, k) {
              return $e(l, a, !1, null, i, f, v, M, G, x, k, null);
            }),
            (Ct.createHasPseudoClassSelector = function (l) {
              return { $$typeof: mf, value: l };
            }),
            (Ct.createHydrationContainer = function (l, a, i, f, m, v, M, G, x, k, ft, mt, At) {
              return (
                (l = $e(i, f, !0, l, m, v, G, x, k, ft, mt, At)),
                (l.context = Mc(null)),
                (i = l.current),
                (f = Dl()),
                (m = ma(f)),
                (m.callback = a ?? null),
                Le(i, m, f),
                (l.current.lanes = f),
                yt(l, f),
                gl(l),
                l
              );
            }),
            (Ct.createPortal = function (l, a, i) {
              var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
              return { $$typeof: Ha, key: f == null ? null : "" + f, children: l, containerInfo: a, implementation: i };
            }),
            (Ct.createRoleSelector = function (l) {
              return { $$typeof: hf, value: l };
            }),
            (Ct.createTestNameSelector = function (l) {
              return { $$typeof: Wt, value: l };
            }),
            (Ct.createTextSelector = function (l) {
              return { $$typeof: ie, value: l };
            }),
            (Ct.defaultOnCaughtError = function (l) {
              console.error(l);
            }),
            (Ct.defaultOnRecoverableError = function (l) {
              ko(l);
            }),
            (Ct.defaultOnUncaughtError = function (l) {
              ko(l);
            }),
            (Ct.deferredUpdates = function (l) {
              var a = Tt.T,
                i = Ve();
              try {
                return (yl(32), (Tt.T = null), l());
              } finally {
                (yl(i), (Tt.T = a));
              }
            }),
            (Ct.discreteUpdates = function (l, a, i, f, m) {
              var v = Tt.T,
                M = Ve();
              try {
                return (yl(2), (Tt.T = null), l(a, i, f, m));
              } finally {
                (yl(M), (Tt.T = v), St === 0 && (De = il() + 500));
              }
            }),
            (Ct.findAllNodes = Tl),
            (Ct.findBoundingRects = function (l, a) {
              if (!en) throw Error(A(363));
              ((a = Tl(l, a)), (l = []));
              for (var i = 0; i < a.length; i++) l.push(Vs(a[i]));
              for (a = l.length - 1; 0 < a; a--) {
                i = l[a];
                for (var f = i.x, m = f + i.width, v = i.y, M = v + i.height, G = a - 1; 0 <= G; G--)
                  if (a !== G) {
                    var x = l[G],
                      k = x.x,
                      ft = k + x.width,
                      mt = x.y,
                      At = mt + x.height;
                    if (f >= k && v >= mt && m <= ft && M <= At) {
                      l.splice(a, 1);
                      break;
                    } else if (f !== k || i.width !== x.width || At < v || mt > M) {
                      if (!(v !== mt || i.height !== x.height || ft < f || k > m)) {
                        (k > f && ((x.width += k - f), (x.x = f)), ft < m && (x.width = m - k), l.splice(a, 1));
                        break;
                      }
                    } else {
                      (mt > v && ((x.height += mt - v), (x.y = v)), At < M && (x.height = M - mt), l.splice(a, 1));
                      break;
                    }
                  }
              }
              return l;
            }),
            (Ct.findHostInstance = oo),
            (Ct.findHostInstanceWithNoPortals = function (l) {
              return ((l = U(l)), (l = l !== null ? W(l) : null), l === null ? null : Ti(l.stateNode));
            }),
            (Ct.findHostInstanceWithWarning = function (l) {
              return oo(l);
            }),
            (Ct.flushPassiveEffects = ke),
            (Ct.flushSyncFromReconciler = function (l) {
              var a = St;
              St |= 1;
              var i = Tt.T,
                f = Ve();
              try {
                if ((yl(2), (Tt.T = null), l)) return l();
              } finally {
                (yl(f), (Tt.T = i), (St = a), (St & 6) === 0 && Ka(0));
              }
            }),
            (Ct.flushSyncWork = io),
            (Ct.focusWithin = function (l, a) {
              if (!en) throw Error(A(363));
              for (l = zs(l), a = Wr(l, a), a = Array.from(a), l = 0; l < a.length;) {
                var i = a[l++],
                  f = i.tag;
                if (!ln(i)) {
                  if ((f === 5 || f === 26 || f === 27) && He(i.stateNode)) return !0;
                  for (i = i.child; i !== null;) (a.push(i), (i = i.sibling));
                }
              }
              return !1;
            }),
            (Ct.getFindAllNodesFailureDescription = function (l, a) {
              if (!en) throw Error(A(363));
              var i = 0,
                f = [];
              l = [zs(l), 0];
              for (var m = 0; m < l.length;) {
                var v = l[m++],
                  M = v.tag,
                  G = l[m++],
                  x = a[G];
                if (
                  ((M !== 5 && M !== 26 && M !== 27) || !ln(v)) &&
                  (Ci(v, x) && (f.push(eu(x)), G++, G > i && (i = G)), G < a.length)
                )
                  for (v = v.child; v !== null;) (l.push(v, G), (v = v.sibling));
              }
              if (i < a.length) {
                for (l = []; i < a.length; i++) l.push(eu(a[i]));
                return (
                  `findAllNodes was able to match part of the selector:
  ` +
                  (f.join(" > ") +
                    `

No matching component was found for:
  `) +
                  l.join(" > ")
                );
              }
              return null;
            }),
            (Ct.getPublicRootInstance = function (l) {
              if (((l = l.current), !l.child)) return null;
              switch (l.child.tag) {
                case 27:
                case 5:
                  return Ti(l.child.stateNode);
                default:
                  return l.child.stateNode;
              }
            }),
            (Ct.injectIntoDevTools = function () {
              var l = {
                bundleType: 0,
                version: Xs,
                rendererPackageName: Rc,
                currentDispatcherRef: Tt,
                findFiberByHostInstance: So,
                reconcilerVersion: "19.0.0",
              };
              if ((Hc !== null && (l.rendererConfig = Hc), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")) l = !1;
              else {
                var a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (a.isDisabled || !a.supportsFiber) l = !0;
                else {
                  try {
                    ((Oi = a.inject(l)), (jl = a));
                  } catch {}
                  l = !!a.checkDCE;
                }
              }
              return l;
            }),
            (Ct.isAlreadyRendering = function () {
              return !1;
            }),
            (Ct.observeVisibleRects = function (l, a, i, f) {
              if (!en) throw Error(A(363));
              l = Tl(l, a);
              var m = Mo(l, i, f).disconnect;
              return {
                disconnect: function () {
                  m();
                },
              };
            }),
            (Ct.shouldError = function () {
              return null;
            }),
            (Ct.shouldSuspend = function () {
              return !1;
            }),
            (Ct.startHostTransition = function (l, a, i, f) {
              if (l.tag !== 5) throw Error(A(476));
              var m = Kf(l).queue;
              ys(
                l,
                m,
                a,
                Jl,
                i === null
                  ? h
                  : function () {
                      var v = Kf(l).next.queue;
                      return (Xn(l, v, {}, Dl()), i(f));
                    },
              );
            }),
            (Ct.updateContainer = function (l, a, i, f) {
              var m = a.current,
                v = Dl();
              return ($r(m, v, l, a, i, f), v);
            }),
            (Ct.updateContainerSync = function (l, a, i, f) {
              return (a.tag === 0 && ke(), $r(a.current, 2, l, a, i, f), 2);
            }),
            Ct
          );
        }),
          (d.exports.default = d.exports),
          Object.defineProperty(d.exports, "__esModule", { value: !0 }));
      })(Ah)),
    Ah.exports
  );
}
var vv;
function Kp() {
  return (vv || ((vv = 1), (hh.exports = Qp())), hh.exports);
}
var Lp = Kp();
const Yp = Zh(Lp);
var ph = { exports: {} },
  Bh = {};
var yv;
function Xp() {
  return (
    yv ||
      ((yv = 1),
      (function (d) {
        function c(R, N) {
          var I = R.length;
          R.push(N);
          t: for (; 0 < I;) {
            var ut = (I - 1) >>> 1,
              rt = R[ut];
            if (0 < A(rt, N)) ((R[ut] = N), (R[I] = rt), (I = ut));
            else break t;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function h(R) {
          if (R.length === 0) return null;
          var N = R[0],
            I = R.pop();
          if (I !== N) {
            R[0] = I;
            t: for (var ut = 0, rt = R.length, H = rt >>> 1; ut < H;) {
              var X = 2 * (ut + 1) - 1,
                et = R[X],
                lt = X + 1,
                vt = R[lt];
              if (0 > A(et, I))
                lt < rt && 0 > A(vt, et)
                  ? ((R[ut] = vt), (R[lt] = I), (ut = lt))
                  : ((R[ut] = et), (R[X] = I), (ut = X));
              else if (lt < rt && 0 > A(vt, I)) ((R[ut] = vt), (R[lt] = I), (ut = lt));
              else break t;
            }
          }
          return N;
        }
        function A(R, N) {
          var I = R.sortIndex - N.sortIndex;
          return I !== 0 ? I : R.id - N.id;
        }
        if (((d.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var y = performance;
          d.unstable_now = function () {
            return y.now();
          };
        } else {
          var E = Date,
            S = E.now();
          d.unstable_now = function () {
            return E.now() - S;
          };
        }
        var B = [],
          C = [],
          T = 1,
          g = null,
          D = 3,
          U = !1,
          Q = !1,
          W = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function nt(R) {
          for (var N = r(C); N !== null;) {
            if (N.callback === null) h(C);
            else if (N.startTime <= R) (h(C), (N.sortIndex = N.expirationTime), c(B, N));
            else break;
            N = r(C);
          }
        }
        function at(R) {
          if (((W = !1), nt(R), !Q))
            if (r(B) !== null) ((Q = !0), Jt());
            else {
              var N = r(C);
              N !== null && Ot(at, N.startTime - R);
            }
        }
        var dt = !1,
          ct = -1,
          ot = 5,
          gt = -1;
        function ht() {
          return !(d.unstable_now() - gt < ot);
        }
        function bt() {
          if (dt) {
            var R = d.unstable_now();
            gt = R;
            var N = !0;
            try {
              t: {
                ((Q = !1), W && ((W = !1), j(ct), (ct = -1)), (U = !0));
                var I = D;
                try {
                  e: {
                    for (nt(R), g = r(B); g !== null && !(g.expirationTime > R && ht());) {
                      var ut = g.callback;
                      if (typeof ut == "function") {
                        ((g.callback = null), (D = g.priorityLevel));
                        var rt = ut(g.expirationTime <= R);
                        if (((R = d.unstable_now()), typeof rt == "function")) {
                          ((g.callback = rt), nt(R), (N = !0));
                          break e;
                        }
                        (g === r(B) && h(B), nt(R));
                      } else h(B);
                      g = r(B);
                    }
                    if (g !== null) N = !0;
                    else {
                      var H = r(C);
                      (H !== null && Ot(at, H.startTime - R), (N = !1));
                    }
                  }
                  break t;
                } finally {
                  ((g = null), (D = I), (U = !1));
                }
                N = void 0;
              }
            } finally {
              N ? yt() : (dt = !1);
            }
          }
        }
        var yt;
        if (typeof K == "function")
          yt = function () {
            K(bt);
          };
        else if (typeof MessageChannel < "u") {
          var ne = new MessageChannel(),
            Dt = ne.port2;
          ((ne.port1.onmessage = bt),
            (yt = function () {
              Dt.postMessage(null);
            }));
        } else
          yt = function () {
            w(bt, 0);
          };
        function Jt() {
          dt || ((dt = !0), yt());
        }
        function Ot(R, N) {
          ct = w(function () {
            R(d.unstable_now());
          }, N);
        }
        ((d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (d.unstable_continueExecution = function () {
            Q || U || ((Q = !0), Jt());
          }),
          (d.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ot = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (d.unstable_getFirstCallbackNode = function () {
            return r(B);
          }),
          (d.unstable_next = function (R) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = D;
            }
            var I = D;
            D = N;
            try {
              return R();
            } finally {
              D = I;
            }
          }),
          (d.unstable_pauseExecution = function () {}),
          (d.unstable_requestPaint = function () {}),
          (d.unstable_runWithPriority = function (R, N) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var I = D;
            D = R;
            try {
              return N();
            } finally {
              D = I;
            }
          }),
          (d.unstable_scheduleCallback = function (R, N, I) {
            var ut = d.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? ut + I : ut))
                : (I = ut),
              R)
            ) {
              case 1:
                var rt = -1;
                break;
              case 2:
                rt = 250;
                break;
              case 5:
                rt = 1073741823;
                break;
              case 4:
                rt = 1e4;
                break;
              default:
                rt = 5e3;
            }
            return (
              (rt = I + rt),
              (R = { id: T++, callback: N, priorityLevel: R, startTime: I, expirationTime: rt, sortIndex: -1 }),
              I > ut
                ? ((R.sortIndex = I),
                  c(C, R),
                  r(B) === null && R === r(C) && (W ? (j(ct), (ct = -1)) : (W = !0), Ot(at, I - ut)))
                : ((R.sortIndex = rt), c(B, R), Q || U || ((Q = !0), Jt())),
              R
            );
          }),
          (d.unstable_shouldYield = ht),
          (d.unstable_wrapCallback = function (R) {
            var N = D;
            return function () {
              var I = D;
              D = N;
              try {
                return R.apply(this, arguments);
              } finally {
                D = I;
              }
            };
          }));
      })(Bh)),
    Bh
  );
}
var pv;
function qp() {
  return (pv || ((pv = 1), (ph.exports = Xp())), ph.exports);
}
var Bv = qp();
function Fh(d, c, r) {
  if (!d) return;
  if (r(d) === !0) return d;
  let h = c ? d.return : d.child;
  for (; h;) {
    const A = Fh(h, c, r);
    if (A) return A;
    h = c ? null : h.sibling;
  }
}
function Wv(d) {
  try {
    return Object.defineProperties(d, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {},
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {},
      },
    });
  } catch {
    return d;
  }
}
const Vh = Wv(st.createContext(null));
class Pv extends st.Component {
  render() {
    return st.createElement(Vh.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function kv() {
  const d = st.useContext(Vh);
  if (d === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const c = st.useId();
  return st.useMemo(() => {
    for (const r of [d, d?.alternate]) {
      if (!r) continue;
      const h = Fh(r, !1, (A) => {
        let y = A.memoizedState;
        for (; y;) {
          if (y.memoizedState === c) return !0;
          y = y.next;
        }
      });
      if (h) return h;
    }
  }, [d, c]);
}
const Zp = Symbol.for("react.context"),
  Fp = (d) => d !== null && typeof d == "object" && "$$typeof" in d && d.$$typeof === Zp;
function Vp() {
  const d = kv(),
    [c] = st.useState(() => new Map());
  c.clear();
  let r = d;
  for (; r;) {
    const h = r.type;
    (Fp(h) && h !== Vh && !c.has(h) && c.set(h, st.use(Wv(h))), (r = r.return));
  }
  return c;
}
function Ip() {
  const d = Vp();
  return st.useMemo(
    () =>
      Array.from(d.keys()).reduce(
        (c, r) => (h) => st.createElement(c, null, st.createElement(r.Provider, { ...h, value: d.get(r) })),
        (c) => st.createElement(Pv, { ...c }),
      ),
    [d],
  );
}
function $v(d) {
  let c = d.root;
  for (; c.getState().previousRoot;) c = c.getState().previousRoot;
  return c;
}
const ty = (d) => d && d.isOrthographicCamera,
  wp = (d) => d && d.hasOwnProperty("current"),
  Wp = (d) => d != null && (typeof d == "string" || typeof d == "number" || d.isColor),
  Br = ((d, c) =>
    typeof window < "u" &&
    (((d = window.document) == null ? void 0 : d.createElement) ||
      ((c = window.navigator) == null ? void 0 : c.product) === "ReactNative"))()
    ? st.useLayoutEffect
    : st.useEffect;
function ey(d) {
  const c = st.useRef(d);
  return (Br(() => void (c.current = d), [d]), c);
}
function Pp() {
  const d = kv(),
    c = Ip();
  return st.useMemo(
    () =>
      ({ children: r }) => {
        const A = !!Fh(d, !0, (y) => y.type === st.StrictMode) ? st.StrictMode : st.Fragment;
        return ja.jsx(A, { children: ja.jsx(c, { children: r }) });
      },
    [d, c],
  );
}
function kp({ set: d }) {
  return (Br(() => (d(new Promise(() => null)), () => d(!1)), [d]), null);
}
const $p = ((d) => (
  (d = class extends st.Component {
    constructor(...r) {
      (super(...r), (this.state = { error: !1 }));
    }
    componentDidCatch(r) {
      this.props.set(r);
    }
    render() {
      return this.state.error ? null : this.props.children;
    }
  }),
  (d.getDerivedStateFromError = () => ({ error: !0 })),
  d
))();
function ly(d) {
  var c;
  const r = typeof window < "u" ? ((c = window.devicePixelRatio) != null ? c : 2) : 1;
  return Array.isArray(d) ? Math.min(Math.max(d[0], r), d[1]) : d;
}
function Sf(d) {
  var c;
  return (c = d.__r3f) == null ? void 0 : c.root.getState();
}
const Ne = {
  obj: (d) => d === Object(d) && !Ne.arr(d) && typeof d != "function",
  fun: (d) => typeof d == "function",
  str: (d) => typeof d == "string",
  num: (d) => typeof d == "number",
  boo: (d) => typeof d == "boolean",
  und: (d) => d === void 0,
  nul: (d) => d === null,
  arr: (d) => Array.isArray(d),
  equ(d, c, { arrays: r = "shallow", objects: h = "reference", strict: A = !0 } = {}) {
    if (typeof d != typeof c || !!d != !!c) return !1;
    if (Ne.str(d) || Ne.num(d) || Ne.boo(d)) return d === c;
    const y = Ne.obj(d);
    if (y && h === "reference") return d === c;
    const E = Ne.arr(d);
    if (E && r === "reference") return d === c;
    if ((E || y) && d === c) return !0;
    let S;
    for (S in d) if (!(S in c)) return !1;
    if (y && r === "shallow" && h === "shallow") {
      for (S in A ? c : d) if (!Ne.equ(d[S], c[S], { strict: A, objects: "reference" })) return !1;
    } else for (S in A ? c : d) if (d[S] !== c[S]) return !1;
    if (Ne.und(S)) {
      if ((E && d.length === 0 && c.length === 0) || (y && Object.keys(d).length === 0 && Object.keys(c).length === 0))
        return !0;
      if (d !== c) return !1;
    }
    return !0;
  },
};
function tB(d) {
  const c = { nodes: {}, materials: {}, meshes: {} };
  return (
    d &&
      d.traverse((r) => {
        (r.name && (c.nodes[r.name] = r),
          r.material && !c.materials[r.material.name] && (c.materials[r.material.name] = r.material),
          r.isMesh && !c.meshes[r.name] && (c.meshes[r.name] = r));
      }),
    c
  );
}
function eB(d) {
  d.type !== "Scene" && (d.dispose == null || d.dispose());
  for (const c in d) {
    const r = d[c];
    r?.type !== "Scene" && (r == null || r.dispose == null || r.dispose());
  }
}
const ay = ["children", "key", "ref"];
function lB(d) {
  const c = {};
  for (const r in d) ay.includes(r) || (c[r] = d[r]);
  return c;
}
function cm(d, c, r, h) {
  const A = d;
  let y = A?.__r3f;
  return (
    y ||
      ((y = {
        root: c,
        type: r,
        parent: null,
        children: [],
        props: lB(h),
        object: A,
        eventCount: 0,
        handlers: {},
        isHidden: !1,
      }),
      A && (A.__r3f = y)),
    y
  );
}
function pr(d, c) {
  let r = d[c];
  if (!c.includes("-")) return { root: d, key: c, target: r };
  r = d;
  for (const A of c.split("-")) {
    var h;
    ((c = A), (d = r), (r = (h = r) == null ? void 0 : h[c]));
  }
  return { root: d, key: c, target: r };
}
const Ev = /-\d+$/;
function sm(d, c) {
  if (Ne.str(c.props.attach)) {
    if (Ev.test(c.props.attach)) {
      const A = c.props.attach.replace(Ev, ""),
        { root: y, key: E } = pr(d.object, A);
      Array.isArray(y[E]) || (y[E] = []);
    }
    const { root: r, key: h } = pr(d.object, c.props.attach);
    ((c.previousAttach = r[h]), (r[h] = c.object));
  } else Ne.fun(c.props.attach) && (c.previousAttach = c.props.attach(d.object, c.object));
}
function fm(d, c) {
  if (Ne.str(c.props.attach)) {
    const { root: r, key: h } = pr(d.object, c.props.attach),
      A = c.previousAttach;
    A === void 0 ? delete r[h] : (r[h] = A);
  } else c.previousAttach == null || c.previousAttach(d.object, c.object);
  delete c.previousAttach;
}
const Jh = [...ay, "args", "dispose", "attach", "object", "onUpdate", "dispose"],
  Cv = new Map();
function aB(d) {
  let c = Cv.get(d.constructor);
  try {
    c || ((c = new d.constructor()), Cv.set(d.constructor, c));
  } catch {}
  return c;
}
function nB(d, c) {
  const r = {};
  for (const h in c)
    if (!Jh.includes(h) && !Ne.equ(c[h], d.props[h])) {
      r[h] = c[h];
      for (const A in c) A.startsWith(`${h}-`) && (r[A] = c[A]);
    }
  for (const h in d.props) {
    if (Jh.includes(h) || c.hasOwnProperty(h)) continue;
    const { root: A, key: y } = pr(d.object, h);
    if (A.constructor && A.constructor.length === 0) {
      const E = aB(A);
      Ne.und(E) || (r[y] = E[y]);
    } else r[y] = 0;
  }
  return r;
}
const uB = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"],
  iB = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function Ii(d, c) {
  var r;
  const h = d.__r3f,
    A = h && $v(h).getState(),
    y = h?.eventCount;
  for (const S in c) {
    let B = c[S];
    if (Jh.includes(S)) continue;
    if (h && iB.test(S)) {
      (typeof B == "function" ? (h.handlers[S] = B) : delete h.handlers[S],
        (h.eventCount = Object.keys(h.handlers).length));
      continue;
    }
    if (B === void 0) continue;
    let { root: C, key: T, target: g } = pr(d, S);
    if (g instanceof ZA && B instanceof ZA) g.mask = B.mask;
    else if (g instanceof jn && Wp(B)) g.set(B);
    else if (
      g !== null &&
      typeof g == "object" &&
      typeof g.set == "function" &&
      typeof g.copy == "function" &&
      B != null &&
      B.constructor &&
      g.constructor === B.constructor
    )
      g.copy(B);
    else if (g !== null && typeof g == "object" && typeof g.set == "function" && Array.isArray(B))
      typeof g.fromArray == "function" ? g.fromArray(B) : g.set(...B);
    else if (g !== null && typeof g == "object" && typeof g.set == "function" && typeof B == "number")
      typeof g.setScalar == "function" ? g.setScalar(B) : g.set(B);
    else {
      var E;
      ((C[T] = B),
        A &&
          !A.linear &&
          uB.includes(T) &&
          (E = C[T]) != null &&
          E.isTexture &&
          C[T].format === C0 &&
          C[T].type === S0 &&
          (C[T].colorSpace = jv));
    }
  }
  if (
    h != null &&
    h.parent &&
    A != null &&
    A.internal &&
    (r = h.object) != null &&
    r.isObject3D &&
    y !== h.eventCount
  ) {
    const S = h.object,
      B = A.internal.interaction.indexOf(S);
    (B > -1 && A.internal.interaction.splice(B, 1),
      h.eventCount && S.raycast !== null && A.internal.interaction.push(S));
  }
  return (
    h &&
      h.props.attach === void 0 &&
      (h.object.isBufferGeometry
        ? (h.props.attach = "geometry")
        : h.object.isMaterial && (h.props.attach = "material")),
    h && Rf(h),
    d
  );
}
function Rf(d) {
  var c;
  if (!d.parent) return;
  d.props.onUpdate == null || d.props.onUpdate(d.object);
  const r = (c = d.root) == null || c.getState == null ? void 0 : c.getState();
  r && r.internal.frames === 0 && r.invalidate();
}
function cB(d, c) {
  d.manual ||
    (ty(d)
      ? ((d.left = c.width / -2), (d.right = c.width / 2), (d.top = c.height / 2), (d.bottom = c.height / -2))
      : (d.aspect = c.width / c.height),
    d.updateProjectionMatrix());
}
const ra = (d) => d?.isObject3D;
function Pd(d) {
  return (d.eventObject || d.object).uuid + "/" + d.index + d.instanceId;
}
function ny(d, c, r, h) {
  const A = r.get(c);
  A && (r.delete(c), r.size === 0 && (d.delete(h), A.target.releasePointerCapture(h)));
}
function sB(d, c) {
  const { internal: r } = d.getState();
  ((r.interaction = r.interaction.filter((h) => h !== c)),
    (r.initialHits = r.initialHits.filter((h) => h !== c)),
    r.hovered.forEach((h, A) => {
      (h.eventObject === c || h.object === c) && r.hovered.delete(A);
    }),
    r.capturedMap.forEach((h, A) => {
      ny(r.capturedMap, c, h, A);
    }));
}
function fB(d) {
  function c(B) {
    const { internal: C } = d.getState(),
      T = B.offsetX - C.initialClick[0],
      g = B.offsetY - C.initialClick[1];
    return Math.round(Math.sqrt(T * T + g * g));
  }
  function r(B) {
    return B.filter((C) =>
      ["Move", "Over", "Enter", "Out", "Leave"].some((T) => {
        var g;
        return (g = C.__r3f) == null ? void 0 : g.handlers["onPointer" + T];
      }),
    );
  }
  function h(B, C) {
    const T = d.getState(),
      g = new Set(),
      D = [],
      U = C ? C(T.internal.interaction) : T.internal.interaction;
    for (let j = 0; j < U.length; j++) {
      const K = Sf(U[j]);
      K && (K.raycaster.camera = void 0);
    }
    T.previousRoot || T.events.compute == null || T.events.compute(B, T);
    function Q(j) {
      const K = Sf(j);
      if (!K || !K.events.enabled || K.raycaster.camera === null) return [];
      if (K.raycaster.camera === void 0) {
        var nt;
        (K.events.compute == null || K.events.compute(B, K, (nt = K.previousRoot) == null ? void 0 : nt.getState()),
          K.raycaster.camera === void 0 && (K.raycaster.camera = null));
      }
      return K.raycaster.camera ? K.raycaster.intersectObject(j, !0) : [];
    }
    let W = U.flatMap(Q)
      .sort((j, K) => {
        const nt = Sf(j.object),
          at = Sf(K.object);
        return !nt || !at
          ? j.distance - K.distance
          : at.events.priority - nt.events.priority || j.distance - K.distance;
      })
      .filter((j) => {
        const K = Pd(j);
        return g.has(K) ? !1 : (g.add(K), !0);
      });
    T.events.filter && (W = T.events.filter(W, T));
    for (const j of W) {
      let K = j.object;
      for (; K;) {
        var w;
        ((w = K.__r3f) != null && w.eventCount && D.push({ ...j, eventObject: K }), (K = K.parent));
      }
    }
    if ("pointerId" in B && T.internal.capturedMap.has(B.pointerId))
      for (let j of T.internal.capturedMap.get(B.pointerId).values())
        g.has(Pd(j.intersection)) || D.push(j.intersection);
    return D;
  }
  function A(B, C, T, g) {
    if (B.length) {
      const D = { stopped: !1 };
      for (const U of B) {
        let Q = Sf(U.object);
        if (
          (Q ||
            U.object.traverseAncestors((W) => {
              const w = Sf(W);
              if (w) return ((Q = w), !1);
            }),
          Q)
        ) {
          const { raycaster: W, pointer: w, camera: j, internal: K } = Q,
            nt = new Zl(w.x, w.y, 0).unproject(j),
            at = (ht) => {
              var bt, yt;
              return (bt = (yt = K.capturedMap.get(ht)) == null ? void 0 : yt.has(U.eventObject)) != null ? bt : !1;
            },
            dt = (ht) => {
              const bt = { intersection: U, target: C.target };
              (K.capturedMap.has(ht)
                ? K.capturedMap.get(ht).set(U.eventObject, bt)
                : K.capturedMap.set(ht, new Map([[U.eventObject, bt]])),
                C.target.setPointerCapture(ht));
            },
            ct = (ht) => {
              const bt = K.capturedMap.get(ht);
              bt && ny(K.capturedMap, U.eventObject, bt, ht);
            };
          let ot = {};
          for (let ht in C) {
            let bt = C[ht];
            typeof bt != "function" && (ot[ht] = bt);
          }
          let gt = {
            ...U,
            ...ot,
            pointer: w,
            intersections: B,
            stopped: D.stopped,
            delta: T,
            unprojectedPoint: nt,
            ray: W.ray,
            camera: j,
            stopPropagation() {
              const ht = "pointerId" in C && K.capturedMap.get(C.pointerId);
              if (
                (!ht || ht.has(U.eventObject)) &&
                ((gt.stopped = D.stopped = !0),
                K.hovered.size && Array.from(K.hovered.values()).find((bt) => bt.eventObject === U.eventObject))
              ) {
                const bt = B.slice(0, B.indexOf(U));
                y([...bt, U]);
              }
            },
            target: { hasPointerCapture: at, setPointerCapture: dt, releasePointerCapture: ct },
            currentTarget: { hasPointerCapture: at, setPointerCapture: dt, releasePointerCapture: ct },
            nativeEvent: C,
          };
          if ((g(gt), D.stopped === !0)) break;
        }
      }
    }
    return B;
  }
  function y(B) {
    const { internal: C } = d.getState();
    for (const T of C.hovered.values())
      if (!B.length || !B.find((g) => g.object === T.object && g.index === T.index && g.instanceId === T.instanceId)) {
        const D = T.eventObject.__r3f;
        if ((C.hovered.delete(Pd(T)), D != null && D.eventCount)) {
          const U = D.handlers,
            Q = { ...T, intersections: B };
          (U.onPointerOut == null || U.onPointerOut(Q), U.onPointerLeave == null || U.onPointerLeave(Q));
        }
      }
  }
  function E(B, C) {
    for (let T = 0; T < C.length; T++) {
      const g = C[T].__r3f;
      g == null || g.handlers.onPointerMissed == null || g.handlers.onPointerMissed(B);
    }
  }
  function S(B) {
    switch (B) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => y([]);
      case "onLostPointerCapture":
        return (C) => {
          const { internal: T } = d.getState();
          "pointerId" in C &&
            T.capturedMap.has(C.pointerId) &&
            requestAnimationFrame(() => {
              T.capturedMap.has(C.pointerId) && (T.capturedMap.delete(C.pointerId), y([]));
            });
        };
    }
    return function (T) {
      const { onPointerMissed: g, internal: D } = d.getState();
      D.lastEvent.current = T;
      const U = B === "onPointerMove",
        Q = B === "onClick" || B === "onContextMenu" || B === "onDoubleClick",
        w = h(T, U ? r : void 0),
        j = Q ? c(T) : 0;
      (B === "onPointerDown" &&
        ((D.initialClick = [T.offsetX, T.offsetY]), (D.initialHits = w.map((nt) => nt.eventObject))),
        Q && !w.length && j <= 2 && (E(T, D.interaction), g && g(T)),
        U && y(w));
      function K(nt) {
        const at = nt.eventObject,
          dt = at.__r3f;
        if (!(dt != null && dt.eventCount)) return;
        const ct = dt.handlers;
        if (U) {
          if (ct.onPointerOver || ct.onPointerEnter || ct.onPointerOut || ct.onPointerLeave) {
            const ot = Pd(nt),
              gt = D.hovered.get(ot);
            gt
              ? gt.stopped && nt.stopPropagation()
              : (D.hovered.set(ot, nt),
                ct.onPointerOver == null || ct.onPointerOver(nt),
                ct.onPointerEnter == null || ct.onPointerEnter(nt));
          }
          ct.onPointerMove == null || ct.onPointerMove(nt);
        } else {
          const ot = ct[B];
          ot
            ? (!Q || D.initialHits.includes(at)) &&
              (E(
                T,
                D.interaction.filter((gt) => !D.initialHits.includes(gt)),
              ),
              ot(nt))
            : Q &&
              D.initialHits.includes(at) &&
              E(
                T,
                D.interaction.filter((gt) => !D.initialHits.includes(gt)),
              );
        }
      }
      A(w, T, j, K);
    };
  }
  return { handlePointer: S };
}
const Sv = (d) => !!(d != null && d.render),
  uy = st.createContext(null),
  oB = (d, c) => {
    const r = _p((S, B) => {
        const C = new Zl(),
          T = new Zl(),
          g = new Zl();
        function D(j = B().camera, K = T, nt = B().size) {
          const { width: at, height: dt, top: ct, left: ot } = nt,
            gt = at / dt;
          K.isVector3 ? g.copy(K) : g.set(...K);
          const ht = j.getWorldPosition(C).distanceTo(g);
          if (ty(j))
            return { width: at / j.zoom, height: dt / j.zoom, top: ct, left: ot, factor: 1, distance: ht, aspect: gt };
          {
            const bt = (j.fov * Math.PI) / 180,
              yt = 2 * Math.tan(bt / 2) * ht,
              ne = yt * (at / dt);
            return { width: ne, height: yt, top: ct, left: ot, factor: at / ne, distance: ht, aspect: gt };
          }
        }
        let U;
        const Q = (j) => S((K) => ({ performance: { ...K.performance, current: j } })),
          W = new ts();
        return {
          set: S,
          get: B,
          gl: null,
          camera: null,
          raycaster: null,
          events: { priority: 1, enabled: !0, connected: !1 },
          scene: null,
          xr: null,
          invalidate: (j = 1) => d(B(), j),
          advance: (j, K) => c(j, K, B()),
          legacy: !1,
          linear: !1,
          flat: !1,
          controls: null,
          clock: new g0(),
          pointer: W,
          mouse: W,
          frameloop: "always",
          onPointerMissed: void 0,
          performance: {
            current: 1,
            min: 0.5,
            max: 1,
            debounce: 200,
            regress: () => {
              const j = B();
              (U && clearTimeout(U),
                j.performance.current !== j.performance.min && Q(j.performance.min),
                (U = setTimeout(() => Q(B().performance.max), j.performance.debounce)));
            },
          },
          size: { width: 0, height: 0, top: 0, left: 0 },
          viewport: {
            initialDpr: 0,
            dpr: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            aspect: 0,
            distance: 0,
            factor: 0,
            getCurrentViewport: D,
          },
          setEvents: (j) => S((K) => ({ ...K, events: { ...K.events, ...j } })),
          setSize: (j, K, nt = 0, at = 0) => {
            const dt = B().camera,
              ct = { width: j, height: K, top: nt, left: at };
            S((ot) => ({ size: ct, viewport: { ...ot.viewport, ...D(dt, T, ct) } }));
          },
          setDpr: (j) =>
            S((K) => {
              const nt = ly(j);
              return { viewport: { ...K.viewport, dpr: nt, initialDpr: K.viewport.initialDpr || nt } };
            }),
          setFrameloop: (j = "always") => {
            const K = B().clock;
            (K.stop(),
              (K.elapsedTime = 0),
              j !== "never" && (K.start(), (K.elapsedTime = 0)),
              S(() => ({ frameloop: j })));
          },
          previousRoot: void 0,
          internal: {
            interaction: [],
            hovered: new Map(),
            subscribers: [],
            initialClick: [0, 0],
            initialHits: [],
            capturedMap: new Map(),
            lastEvent: st.createRef(),
            active: !1,
            frames: 0,
            priority: 0,
            subscribe: (j, K, nt) => {
              const at = B().internal;
              return (
                (at.priority = at.priority + (K > 0 ? 1 : 0)),
                at.subscribers.push({ ref: j, priority: K, store: nt }),
                (at.subscribers = at.subscribers.sort((dt, ct) => dt.priority - ct.priority)),
                () => {
                  const dt = B().internal;
                  dt != null &&
                    dt.subscribers &&
                    ((dt.priority = dt.priority - (K > 0 ? 1 : 0)),
                    (dt.subscribers = dt.subscribers.filter((ct) => ct.ref !== j)));
                }
              );
            },
          },
        };
      }),
      h = r.getState();
    let A = h.size,
      y = h.viewport.dpr,
      E = h.camera;
    return (
      r.subscribe(() => {
        const { camera: S, size: B, viewport: C, gl: T, set: g } = r.getState();
        if (B.width !== A.width || B.height !== A.height || C.dpr !== y) {
          ((A = B), (y = C.dpr), cB(S, B), C.dpr > 0 && T.setPixelRatio(C.dpr));
          const D = typeof HTMLCanvasElement < "u" && T.domElement instanceof HTMLCanvasElement;
          T.setSize(B.width, B.height, D);
        }
        S !== E && ((E = S), g((D) => ({ viewport: { ...D.viewport, ...D.viewport.getCurrentViewport(S) } })));
      }),
      r.subscribe((S) => d(S)),
      r
    );
  };
function iy() {
  const d = st.useContext(uy);
  if (!d) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return d;
}
function $c(d = (r) => r, c) {
  return iy()(d, c);
}
function Ih(d, c = 0) {
  const r = iy(),
    h = r.getState().internal.subscribe,
    A = ey(d);
  return (Br(() => h(A, c, r), [c, h, r]), null);
}
const gv = new WeakMap(),
  rB = (d) => {
    var c;
    return typeof d == "function" && (d == null || (c = d.prototype) == null ? void 0 : c.constructor) === d;
  };
function cy(d, c) {
  return function (r, ...h) {
    let A;
    return (
      rB(r) ? ((A = gv.get(r)), A || ((A = new r()), gv.set(r, A))) : (A = r),
      d && d(A),
      Promise.all(
        h.map(
          (y) =>
            new Promise((E, S) =>
              A.load(
                y,
                (B) => {
                  (ra(B?.scene) && Object.assign(B, tB(B.scene)), E(B));
                },
                c,
                (B) => S(new Error(`Could not load ${y}: ${B?.message}`)),
              ),
            ),
        ),
      )
    );
  };
}
function wi(d, c, r, h) {
  const A = Array.isArray(c) ? c : [c],
    y = Np(cy(r, h), [d, ...A], { equal: Ne.equ });
  return Array.isArray(c) ? y : y[0];
}
wi.preload = function (d, c, r) {
  const h = Array.isArray(c) ? c : [c];
  return zp(cy(r), [d, ...h]);
};
wi.clear = function (d, c) {
  const r = Array.isArray(c) ? c : [c];
  return Jp([d, ...r]);
};
function dB(d) {
  const c = Yp(d);
  return (c.injectIntoDevTools({ bundleType: 0, rendererPackageName: "@react-three/fiber", version: st.version }), c);
}
const sy = 0,
  Tf = {},
  mB = /^three(?=[A-Z])/,
  ym = (d) => `${d[0].toUpperCase()}${d.slice(1)}`;
let hB = 0;
const AB = (d) => typeof d == "function";
function vB(d) {
  if (AB(d)) {
    const c = `${hB++}`;
    return ((Tf[c] = d), c);
  } else Object.assign(Tf, d);
}
function fy(d, c) {
  const r = ym(d),
    h = Tf[r];
  if (d !== "primitive" && !h)
    throw new Error(
      `R3F: ${r} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`,
    );
  if (d === "primitive" && !c.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (c.args !== void 0 && !Array.isArray(c.args)) throw new Error("R3F: The args prop must be an array!");
}
function yB(d, c, r) {
  var h;
  return (
    (d = ym(d) in Tf ? d : d.replace(mB, "")),
    fy(d, c),
    d === "primitive" && (h = c.object) != null && h.__r3f && delete c.object.__r3f,
    cm(c.object, r, d, c)
  );
}
function pB(d) {
  if (!d.isHidden) {
    var c;
    (d.props.attach && (c = d.parent) != null && c.object ? fm(d.parent, d) : ra(d.object) && (d.object.visible = !1),
      (d.isHidden = !0),
      Rf(d));
  }
}
function oy(d) {
  if (d.isHidden) {
    var c;
    (d.props.attach && (c = d.parent) != null && c.object
      ? sm(d.parent, d)
      : ra(d.object) && d.props.visible !== !1 && (d.object.visible = !0),
      (d.isHidden = !1),
      Rf(d));
  }
}
function wh(d, c, r) {
  const h = c.root.getState();
  if (!(!d.parent && d.object !== h.scene)) {
    if (!c.object) {
      var A, y;
      const E = Tf[ym(c.type)];
      ((c.object = (A = c.props.object) != null ? A : new E(...((y = c.props.args) != null ? y : []))),
        (c.object.__r3f = c));
    }
    if ((Ii(c.object, c.props), c.props.attach)) sm(d, c);
    else if (ra(c.object) && ra(d.object)) {
      const E = d.object.children.indexOf(r?.object);
      if (r && E !== -1) {
        const S = d.object.children.indexOf(c.object);
        if (S !== -1) {
          d.object.children.splice(S, 1);
          const B = S < E ? E - 1 : E;
          d.object.children.splice(B, 0, c.object);
        } else
          ((c.object.parent = d.object),
            d.object.children.splice(E, 0, c.object),
            c.object.dispatchEvent({ type: "added" }),
            d.object.dispatchEvent({ type: "childadded", child: c.object }));
      } else d.object.add(c.object);
    }
    for (const E of c.children) wh(c, E);
    Rf(c);
  }
}
function Eh(d, c) {
  c && ((c.parent = d), d.children.push(c), wh(d, c));
}
function bv(d, c, r) {
  if (!c || !r) return;
  c.parent = d;
  const h = d.children.indexOf(r);
  (h !== -1 ? d.children.splice(h, 0, c) : d.children.push(c), wh(d, c, r));
}
function ry(d) {
  if (typeof d.dispose == "function") {
    const c = () => {
      try {
        d.dispose();
      } catch {}
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? c() : Bv.unstable_scheduleCallback(Bv.unstable_IdlePriority, c);
  }
}
function xh(d, c, r) {
  if (!c) return;
  c.parent = null;
  const h = d.children.indexOf(c);
  (h !== -1 && d.children.splice(h, 1),
    c.props.attach ? fm(d, c) : ra(c.object) && ra(d.object) && (d.object.remove(c.object), sB($v(c), c.object)));
  const A = c.props.dispose !== null && r !== !1;
  for (let y = c.children.length - 1; y >= 0; y--) {
    const E = c.children[y];
    xh(c, E, A);
  }
  ((c.children.length = 0),
    delete c.object.__r3f,
    A && c.type !== "primitive" && c.object.type !== "Scene" && ry(c.object),
    r === void 0 && Rf(c));
}
function BB(d, c) {
  for (const r of [d, d.alternate])
    if (r !== null)
      if (typeof r.ref == "function") {
        r.refCleanup == null || r.refCleanup();
        const h = r.ref(c);
        typeof h == "function" && (r.refCleanup = h);
      } else r.ref && (r.ref.current = c);
}
const lm = [];
function EB() {
  for (const [r] of lm) {
    const h = r.parent;
    if (h) {
      r.props.attach ? fm(h, r) : ra(r.object) && ra(h.object) && h.object.remove(r.object);
      for (const A of r.children) A.props.attach ? fm(r, A) : ra(A.object) && ra(r.object) && r.object.remove(A.object);
    }
    (r.isHidden && oy(r), r.object.__r3f && delete r.object.__r3f, r.type !== "primitive" && ry(r.object));
  }
  for (const [r, h, A] of lm) {
    r.props = h;
    const y = r.parent;
    if (y) {
      var d, c;
      const E = Tf[ym(r.type)];
      ((r.object = (d = r.props.object) != null ? d : new E(...((c = r.props.args) != null ? c : []))),
        (r.object.__r3f = r),
        BB(A, r.object),
        Ii(r.object, r.props),
        r.props.attach ? sm(y, r) : ra(r.object) && ra(y.object) && y.object.add(r.object));
      for (const S of r.children) S.props.attach ? sm(r, S) : ra(S.object) && ra(r.object) && r.object.add(S.object);
      Rf(r);
    }
  }
  lm.length = 0;
}
const Ch = () => {},
  Mv = {};
let kd = sy;
const CB = 0,
  SB = 4,
  jh = dB({
    isPrimaryRenderer: !1,
    warnsIfNotActing: !1,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    createInstance: yB,
    removeChild: xh,
    appendChild: Eh,
    appendInitialChild: Eh,
    insertBefore: bv,
    appendChildToContainer(d, c) {
      const r = d.getState().scene.__r3f;
      !c || !r || Eh(r, c);
    },
    removeChildFromContainer(d, c) {
      const r = d.getState().scene.__r3f;
      !c || !r || xh(r, c);
    },
    insertInContainerBefore(d, c, r) {
      const h = d.getState().scene.__r3f;
      !c || !r || !h || bv(h, c, r);
    },
    getRootHostContext: () => Mv,
    getChildHostContext: () => Mv,
    commitUpdate(d, c, r, h, A) {
      var y, E, S;
      fy(c, h);
      let B = !1;
      if (
        (((d.type === "primitive" && r.object !== h.object) ||
          ((y = h.args) == null ? void 0 : y.length) !== ((E = r.args) == null ? void 0 : E.length) ||
          ((S = h.args) != null &&
            S.some((T, g) => {
              var D;
              return T !== ((D = r.args) == null ? void 0 : D[g]);
            }))) &&
          (B = !0),
        B)
      )
        lm.push([d, { ...h }, A]);
      else {
        const T = nB(d, h);
        Object.keys(T).length && (Object.assign(d.props, T), Ii(d.object, T));
      }
      (A.sibling === null || (A.flags & SB) === CB) && EB();
    },
    finalizeInitialChildren: () => !1,
    commitMount() {},
    getPublicInstance: (d) => d?.object,
    prepareForCommit: () => null,
    preparePortalMount: (d) => cm(d.getState().scene, d, "", {}),
    resetAfterCommit: () => {},
    shouldSetTextContent: () => !1,
    clearContainer: () => !1,
    hideInstance: pB,
    unhideInstance: oy,
    createTextInstance: Ch,
    hideTextInstance: Ch,
    unhideTextInstance: Ch,
    scheduleTimeout: typeof setTimeout == "function" ? setTimeout : void 0,
    cancelTimeout: typeof clearTimeout == "function" ? clearTimeout : void 0,
    noTimeout: -1,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    shouldAttemptEagerTransition: () => !1,
    trackSchedulerEvent: () => {},
    resolveEventType: () => null,
    resolveEventTimeStamp: () => -1.1,
    requestPostPaintCallback() {},
    maySuspendCommit: () => !1,
    preloadInstance: () => !0,
    startSuspendingCommit() {},
    suspendInstance() {},
    waitForCommitToBeReady: () => null,
    NotPendingTransition: null,
    HostTransitionContext: st.createContext(null),
    setCurrentUpdatePriority(d) {
      kd = d;
    },
    getCurrentUpdatePriority() {
      return kd;
    },
    resolveUpdatePriority() {
      var d;
      if (kd !== sy) return kd;
      switch (typeof window < "u" && ((d = window.event) == null ? void 0 : d.type)) {
        case "click":
        case "contextmenu":
        case "dblclick":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
          return em.DiscreteEventPriority;
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerenter":
        case "pointerleave":
        case "wheel":
          return em.ContinuousEventPriority;
        default:
          return em.DefaultEventPriority;
      }
    },
    resetFormInstance() {},
  }),
  es = new Map(),
  gf = { objects: "shallow", strict: !1 };
function gB(d, c) {
  if (!c && typeof HTMLCanvasElement < "u" && d instanceof HTMLCanvasElement && d.parentElement) {
    const { width: r, height: h, top: A, left: y } = d.parentElement.getBoundingClientRect();
    return { width: r, height: h, top: A, left: y };
  } else if (!c && typeof OffscreenCanvas < "u" && d instanceof OffscreenCanvas)
    return { width: d.width, height: d.height, top: 0, left: 0 };
  return { width: 0, height: 0, top: 0, left: 0, ...c };
}
function bB(d) {
  const c = es.get(d),
    r = c?.fiber,
    h = c?.store;
  c && console.warn("R3F.createRoot should only be called once!");
  const A = typeof reportError == "function" ? reportError : console.error,
    y = h || oB(Lh, Dv),
    E = r || jh.createContainer(y, em.ConcurrentRoot, null, !1, null, "", A, A, A, null);
  c || es.set(d, { fiber: E, store: y });
  let S,
    B,
    C = !1,
    T = null;
  return {
    async configure(g = {}) {
      let D;
      T = new Promise((H) => (D = H));
      let {
          gl: U,
          size: Q,
          scene: W,
          events: w,
          onCreated: j,
          shadows: K = !1,
          linear: nt = !1,
          flat: at = !1,
          legacy: dt = !1,
          orthographic: ct = !1,
          frameloop: ot = "always",
          dpr: gt = [1, 2],
          performance: ht,
          raycaster: bt,
          camera: yt,
          onPointerMissed: ne,
        } = g,
        Dt = y.getState(),
        Jt = Dt.gl;
      if (!Dt.gl) {
        const H = { canvas: d, powerPreference: "high-performance", antialias: !0, alpha: !0 },
          X = typeof U == "function" ? await U(H) : U;
        (Sv(X) ? (Jt = X) : (Jt = new r0({ ...H, ...U })), Dt.set({ gl: Jt }));
      }
      let Ot = Dt.raycaster;
      Ot || Dt.set({ raycaster: (Ot = new d0()) });
      const { params: R, ...N } = bt || {};
      if (
        (Ne.equ(N, Ot, gf) || Ii(Ot, { ...N }),
        Ne.equ(R, Ot.params, gf) || Ii(Ot, { params: { ...Ot.params, ...R } }),
        !Dt.camera || (Dt.camera === B && !Ne.equ(B, yt, gf)))
      ) {
        B = yt;
        const H = yt?.isCamera,
          X = H ? yt : ct ? new mm(0, 0, 0, 0, 0.1, 1e3) : new hm(75, 0, 0.1, 1e3);
        (H ||
          ((X.position.z = 5),
          yt &&
            (Ii(X, yt),
            X.manual ||
              (("aspect" in yt || "left" in yt || "right" in yt || "bottom" in yt || "top" in yt) &&
                ((X.manual = !0), X.updateProjectionMatrix()))),
          !Dt.camera && !(yt != null && yt.rotation) && X.lookAt(0, 0, 0)),
          Dt.set({ camera: X }),
          (Ot.camera = X));
      }
      if (!Dt.scene) {
        let H;
        (W != null && W.isScene ? ((H = W), cm(H, y, "", {})) : ((H = new m0()), cm(H, y, "", {}), W && Ii(H, W)),
          Dt.set({ scene: H }));
      }
      w && !Dt.events.handlers && Dt.set({ events: w(y) });
      const I = gB(d, Q);
      if (
        (Ne.equ(I, Dt.size, gf) || Dt.setSize(I.width, I.height, I.top, I.left),
        gt && Dt.viewport.dpr !== ly(gt) && Dt.setDpr(gt),
        Dt.frameloop !== ot && Dt.setFrameloop(ot),
        Dt.onPointerMissed || Dt.set({ onPointerMissed: ne }),
        ht && !Ne.equ(ht, Dt.performance, gf) && Dt.set((H) => ({ performance: { ...H.performance, ...ht } })),
        !Dt.xr)
      ) {
        var ut;
        const H = (lt, vt) => {
            const _t = y.getState();
            _t.frameloop !== "never" && Dv(lt, !0, _t, vt);
          },
          X = () => {
            const lt = y.getState();
            ((lt.gl.xr.enabled = lt.gl.xr.isPresenting),
              lt.gl.xr.setAnimationLoop(lt.gl.xr.isPresenting ? H : null),
              lt.gl.xr.isPresenting || Lh(lt));
          },
          et = {
            connect() {
              const lt = y.getState().gl;
              (lt.xr.addEventListener("sessionstart", X), lt.xr.addEventListener("sessionend", X));
            },
            disconnect() {
              const lt = y.getState().gl;
              (lt.xr.removeEventListener("sessionstart", X), lt.xr.removeEventListener("sessionend", X));
            },
          };
        (typeof ((ut = Jt.xr) == null ? void 0 : ut.addEventListener) == "function" && et.connect(),
          Dt.set({ xr: et }));
      }
      if (Jt.shadowMap) {
        const H = Jt.shadowMap.enabled,
          X = Jt.shadowMap.type;
        if (((Jt.shadowMap.enabled = !!K), Ne.boo(K))) Jt.shadowMap.type = th;
        else if (Ne.str(K)) {
          var rt;
          const et = { basic: v0, percentage: A0, soft: th, variance: h0 };
          Jt.shadowMap.type = (rt = et[K]) != null ? rt : th;
        } else Ne.obj(K) && Object.assign(Jt.shadowMap, K);
        (H !== Jt.shadowMap.enabled || X !== Jt.shadowMap.type) && (Jt.shadowMap.needsUpdate = !0);
      }
      return (
        (y0.enabled = !dt),
        C || ((Jt.outputColorSpace = nt ? p0 : jv), (Jt.toneMapping = at ? B0 : E0)),
        Dt.legacy !== dt && Dt.set(() => ({ legacy: dt })),
        Dt.linear !== nt && Dt.set(() => ({ linear: nt })),
        Dt.flat !== at && Dt.set(() => ({ flat: at })),
        U && !Ne.fun(U) && !Sv(U) && !Ne.equ(U, Jt, gf) && Ii(Jt, U),
        (S = j),
        (C = !0),
        D(),
        this
      );
    },
    render(g) {
      return (
        !C && !T && this.configure(),
        T.then(() => {
          jh.updateContainer(ja.jsx(MB, { store: y, children: g, onCreated: S, rootElement: d }), E, null, () => {});
        }),
        y
      );
    },
    unmount() {
      dy(d);
    },
  };
}
function MB({ store: d, children: c, onCreated: r, rootElement: h }) {
  return (
    Br(() => {
      const A = d.getState();
      (A.set((y) => ({ internal: { ...y.internal, active: !0 } })),
        r && r(A),
        d.getState().events.connected || A.events.connect == null || A.events.connect(h));
    }, []),
    ja.jsx(uy.Provider, { value: d, children: c })
  );
}
function dy(d, c) {
  const r = es.get(d),
    h = r?.fiber;
  if (h) {
    const A = r?.store.getState();
    (A && (A.internal.active = !1),
      jh.updateContainer(null, h, null, () => {
        A &&
          setTimeout(() => {
            try {
              var y, E, S, B;
              (A.events.disconnect == null || A.events.disconnect(),
                (y = A.gl) == null || (E = y.renderLists) == null || E.dispose == null || E.dispose(),
                (S = A.gl) == null || S.forceContextLoss == null || S.forceContextLoss(),
                (B = A.gl) != null && B.xr && A.xr.disconnect(),
                eB(A.scene),
                es.delete(d));
            } catch {}
          }, 500);
      }));
  }
}
const TB = new Set(),
  DB = new Set(),
  RB = new Set();
function Sh(d, c) {
  if (d.size) for (const { callback: r } of d.values()) r(c);
}
function vr(d, c) {
  switch (d) {
    case "before":
      return Sh(TB, c);
    case "after":
      return Sh(DB, c);
    case "tail":
      return Sh(RB, c);
  }
}
let gh, bh;
function Qh(d, c, r) {
  let h = c.clock.getDelta();
  (c.frameloop === "never" &&
    typeof d == "number" &&
    ((h = d - c.clock.elapsedTime), (c.clock.oldTime = c.clock.elapsedTime), (c.clock.elapsedTime = d)),
    (gh = c.internal.subscribers));
  for (let A = 0; A < gh.length; A++) ((bh = gh[A]), bh.ref.current(bh.store.getState(), h, r));
  return (
    !c.internal.priority && c.gl.render && c.gl.render(c.scene, c.camera),
    (c.internal.frames = Math.max(0, c.internal.frames - 1)),
    c.frameloop === "always" ? 1 : c.internal.frames
  );
}
let om = !1,
  Kh = !1,
  Mh,
  Tv,
  bf;
function my(d) {
  ((Tv = requestAnimationFrame(my)), (om = !0), (Mh = 0), vr("before", d), (Kh = !0));
  for (const r of es.values()) {
    var c;
    ((bf = r.store.getState()),
      bf.internal.active &&
        (bf.frameloop === "always" || bf.internal.frames > 0) &&
        !((c = bf.gl.xr) != null && c.isPresenting) &&
        (Mh += Qh(d, bf)));
  }
  if (((Kh = !1), vr("after", d), Mh === 0)) return (vr("tail", d), (om = !1), cancelAnimationFrame(Tv));
}
function Lh(d, c = 1) {
  var r;
  if (!d) return es.forEach((h) => Lh(h.store.getState(), c));
  ((r = d.gl.xr) != null && r.isPresenting) ||
    !d.internal.active ||
    d.frameloop === "never" ||
    (c > 1
      ? (d.internal.frames = Math.min(60, d.internal.frames + c))
      : Kh
        ? (d.internal.frames = 2)
        : (d.internal.frames = 1),
    om || ((om = !0), requestAnimationFrame(my)));
}
function Dv(d, c = !0, r, h) {
  if ((c && vr("before", d), r)) Qh(d, r, h);
  else for (const A of es.values()) Qh(d, A.store.getState());
  c && vr("after", d);
}
const Th = {
  onClick: ["click", !1],
  onContextMenu: ["contextmenu", !1],
  onDoubleClick: ["dblclick", !1],
  onWheel: ["wheel", !0],
  onPointerDown: ["pointerdown", !0],
  onPointerUp: ["pointerup", !0],
  onPointerLeave: ["pointerleave", !0],
  onPointerMove: ["pointermove", !0],
  onPointerCancel: ["pointercancel", !0],
  onLostPointerCapture: ["lostpointercapture", !0],
};
function HB(d) {
  const { handlePointer: c } = fB(d);
  return {
    priority: 1,
    enabled: !0,
    compute(r, h, A) {
      (h.pointer.set((r.offsetX / h.size.width) * 2 - 1, -(r.offsetY / h.size.height) * 2 + 1),
        h.raycaster.setFromCamera(h.pointer, h.camera));
    },
    connected: void 0,
    handlers: Object.keys(Th).reduce((r, h) => ({ ...r, [h]: c(h) }), {}),
    update: () => {
      var r;
      const { events: h, internal: A } = d.getState();
      (r = A.lastEvent) != null && r.current && h.handlers && h.handlers.onPointerMove(A.lastEvent.current);
    },
    connect: (r) => {
      const { set: h, events: A } = d.getState();
      if ((A.disconnect == null || A.disconnect(), h((y) => ({ events: { ...y.events, connected: r } })), A.handlers))
        for (const y in A.handlers) {
          const E = A.handlers[y],
            [S, B] = Th[y];
          r.addEventListener(S, E, { passive: B });
        }
    },
    disconnect: () => {
      const { set: r, events: h } = d.getState();
      if (h.connected) {
        if (h.handlers)
          for (const A in h.handlers) {
            const y = h.handlers[A],
              [E] = Th[A];
            h.connected.removeEventListener(E, y);
          }
        r((A) => ({ events: { ...A.events, connected: void 0 } }));
      }
    },
  };
}
function Rv(d, c) {
  let r;
  return (...h) => {
    (window.clearTimeout(r), (r = window.setTimeout(() => d(...h), c)));
  };
}
function GB({ debounce: d, scroll: c, polyfill: r, offsetSize: h } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const A = r || (typeof window > "u" ? class {} : window.ResizeObserver);
  if (!A)
    throw new Error(
      "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills",
    );
  const [y, E] = st.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }),
    S = st.useRef({
      element: null,
      scrollContainers: null,
      resizeObserver: null,
      lastBounds: y,
      orientationHandler: null,
    }),
    B = d ? (typeof d == "number" ? d : d.scroll) : null,
    C = d ? (typeof d == "number" ? d : d.resize) : null,
    T = st.useRef(!1);
  st.useEffect(() => ((T.current = !0), () => void (T.current = !1)));
  const [g, D, U] = st.useMemo(() => {
    const j = () => {
      if (!S.current.element) return;
      const {
          left: K,
          top: nt,
          width: at,
          height: dt,
          bottom: ct,
          right: ot,
          x: gt,
          y: ht,
        } = S.current.element.getBoundingClientRect(),
        bt = { left: K, top: nt, width: at, height: dt, bottom: ct, right: ot, x: gt, y: ht };
      (S.current.element instanceof HTMLElement &&
        h &&
        ((bt.height = S.current.element.offsetHeight), (bt.width = S.current.element.offsetWidth)),
        Object.freeze(bt),
        T.current && !NB(S.current.lastBounds, bt) && E((S.current.lastBounds = bt)));
    };
    return [j, C ? Rv(j, C) : j, B ? Rv(j, B) : j];
  }, [E, h, B, C]);
  function Q() {
    (S.current.scrollContainers &&
      (S.current.scrollContainers.forEach((j) => j.removeEventListener("scroll", U, !0)),
      (S.current.scrollContainers = null)),
      S.current.resizeObserver && (S.current.resizeObserver.disconnect(), (S.current.resizeObserver = null)),
      S.current.orientationHandler &&
        ("orientation" in screen && "removeEventListener" in screen.orientation
          ? screen.orientation.removeEventListener("change", S.current.orientationHandler)
          : "onorientationchange" in window &&
            window.removeEventListener("orientationchange", S.current.orientationHandler)));
  }
  function W() {
    S.current.element &&
      ((S.current.resizeObserver = new A(U)),
      S.current.resizeObserver.observe(S.current.element),
      c &&
        S.current.scrollContainers &&
        S.current.scrollContainers.forEach((j) => j.addEventListener("scroll", U, { capture: !0, passive: !0 })),
      (S.current.orientationHandler = () => {
        U();
      }),
      "orientation" in screen && "addEventListener" in screen.orientation
        ? screen.orientation.addEventListener("change", S.current.orientationHandler)
        : "onorientationchange" in window &&
          window.addEventListener("orientationchange", S.current.orientationHandler));
  }
  const w = (j) => {
    !j || j === S.current.element || (Q(), (S.current.element = j), (S.current.scrollContainers = hy(j)), W());
  };
  return (
    _B(U, !!c),
    OB(D),
    st.useEffect(() => {
      (Q(), W());
    }, [c, U, D]),
    st.useEffect(() => Q, []),
    [w, y, g]
  );
}
function OB(d) {
  st.useEffect(() => {
    const c = d;
    return (window.addEventListener("resize", c), () => void window.removeEventListener("resize", c));
  }, [d]);
}
function _B(d, c) {
  st.useEffect(() => {
    if (c) {
      const r = d;
      return (
        window.addEventListener("scroll", r, { capture: !0, passive: !0 }),
        () => void window.removeEventListener("scroll", r, !0)
      );
    }
  }, [d, c]);
}
function hy(d) {
  const c = [];
  if (!d || d === document.body) return c;
  const { overflow: r, overflowX: h, overflowY: A } = window.getComputedStyle(d);
  return ([r, h, A].some((y) => y === "auto" || y === "scroll") && c.push(d), [...c, ...hy(d.parentElement)]);
}
const UB = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
  NB = (d, c) => UB.every((r) => d[r] === c[r]);
function zB({
  ref: d,
  children: c,
  fallback: r,
  resize: h,
  style: A,
  gl: y,
  events: E = HB,
  eventSource: S,
  eventPrefix: B,
  shadows: C,
  linear: T,
  flat: g,
  legacy: D,
  orthographic: U,
  frameloop: Q,
  dpr: W,
  performance: w,
  raycaster: j,
  camera: K,
  scene: nt,
  onPointerMissed: at,
  onCreated: dt,
  ...ct
}) {
  st.useMemo(() => vB(b0), []);
  const ot = Pp(),
    [gt, ht] = GB({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...h }),
    bt = st.useRef(null),
    yt = st.useRef(null);
  st.useImperativeHandle(d, () => bt.current);
  const ne = ey(at),
    [Dt, Jt] = st.useState(!1),
    [Ot, R] = st.useState(!1);
  if (Dt) throw Dt;
  if (Ot) throw Ot;
  const N = st.useRef(null);
  (Br(() => {
    const ut = bt.current;
    if (ht.width > 0 && ht.height > 0 && ut) {
      N.current || (N.current = bB(ut));
      async function rt() {
        (await N.current.configure({
          gl: y,
          scene: nt,
          events: E,
          shadows: C,
          linear: T,
          flat: g,
          legacy: D,
          orthographic: U,
          frameloop: Q,
          dpr: W,
          performance: w,
          raycaster: j,
          camera: K,
          size: ht,
          onPointerMissed: (...H) => (ne.current == null ? void 0 : ne.current(...H)),
          onCreated: (H) => {
            (H.events.connect == null || H.events.connect(S ? (wp(S) ? S.current : S) : yt.current),
              B &&
                H.setEvents({
                  compute: (X, et) => {
                    const lt = X[B + "X"],
                      vt = X[B + "Y"];
                    (et.pointer.set((lt / et.size.width) * 2 - 1, -(vt / et.size.height) * 2 + 1),
                      et.raycaster.setFromCamera(et.pointer, et.camera));
                  },
                }),
              dt?.(H));
          },
        }),
          N.current.render(
            ja.jsx(ot, {
              children: ja.jsx($p, {
                set: R,
                children: ja.jsx(st.Suspense, { fallback: ja.jsx(kp, { set: Jt }), children: c ?? null }),
              }),
            }),
          ));
      }
      rt();
    }
  }),
    st.useEffect(() => {
      const ut = bt.current;
      if (ut) return () => dy(ut);
    }, []));
  const I = S ? "none" : "auto";
  return ja.jsx("div", {
    ref: yt,
    style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", pointerEvents: I, ...A },
    ...ct,
    children: ja.jsx("div", {
      ref: gt,
      style: { width: "100%", height: "100%" },
      children: ja.jsx("canvas", { ref: bt, style: { display: "block" }, children: r }),
    }),
  });
}
function Z1(d) {
  return ja.jsx(Pv, { children: ja.jsx(zB, { ...d }) });
}
function rm() {
  return (
    (rm = Object.assign
      ? Object.assign.bind()
      : function (d) {
          for (var c = 1; c < arguments.length; c++) {
            var r = arguments[c];
            for (var h in r) ({}).hasOwnProperty.call(r, h) && (d[h] = r[h]);
          }
          return d;
        }),
    rm.apply(null, arguments)
  );
}
const Er = new Zl(),
  Wh = new Zl(),
  JB = new Zl(),
  Hv = new ts();
function xB(d, c, r) {
  const h = Er.setFromMatrixPosition(d.matrixWorld);
  h.project(c);
  const A = r.width / 2,
    y = r.height / 2;
  return [h.x * A + A, -(h.y * y) + y];
}
function jB(d, c) {
  const r = Er.setFromMatrixPosition(d.matrixWorld),
    h = Wh.setFromMatrixPosition(c.matrixWorld),
    A = r.sub(h),
    y = c.getWorldDirection(JB);
  return A.angleTo(y) > Math.PI / 2;
}
function QB(d, c, r, h) {
  const A = Er.setFromMatrixPosition(d.matrixWorld),
    y = A.clone();
  (y.project(c), Hv.set(y.x, y.y), r.setFromCamera(Hv, c));
  const E = r.intersectObjects(h, !0);
  if (E.length) {
    const S = E[0].distance;
    return A.distanceTo(r.ray.origin) < S;
  }
  return !0;
}
function KB(d, c) {
  if (c instanceof mm) return c.zoom;
  if (c instanceof hm) {
    const r = Er.setFromMatrixPosition(d.matrixWorld),
      h = Wh.setFromMatrixPosition(c.matrixWorld),
      A = (c.fov * Math.PI) / 180,
      y = r.distanceTo(h);
    return 1 / (2 * Math.tan(A / 2) * y);
  } else return 1;
}
function LB(d, c, r) {
  if (c instanceof hm || c instanceof mm) {
    const h = Er.setFromMatrixPosition(d.matrixWorld),
      A = Wh.setFromMatrixPosition(c.matrixWorld),
      y = h.distanceTo(A),
      E = (r[1] - r[0]) / (c.far - c.near),
      S = r[1] - E * c.far;
    return Math.round(E * y + S);
  }
}
const Yh = (d) => (Math.abs(d) < 1e-10 ? 0 : d);
function Ay(d, c, r = "") {
  let h = "matrix3d(";
  for (let A = 0; A !== 16; A++) h += Yh(c[A] * d.elements[A]) + (A !== 15 ? "," : ")");
  return r + h;
}
const YB = (
    (d) => (c) =>
      Ay(c, d)
  )([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]),
  XB = (
    (d) => (c, r) =>
      Ay(c, d(r), "translate(-50%,-50%)")
  )((d) => [1 / d, 1 / d, 1 / d, 1, -1 / d, -1 / d, -1 / d, -1, 1 / d, 1 / d, 1 / d, 1, 1, 1, 1, 1]);
function qB(d) {
  return d && typeof d == "object" && "current" in d;
}
const F1 = st.forwardRef(
    (
      {
        children: d,
        eps: c = 0.001,
        style: r,
        className: h,
        prepend: A,
        center: y,
        fullscreen: E,
        portal: S,
        distanceFactor: B,
        sprite: C = !1,
        transform: T = !1,
        occlude: g,
        onOcclude: D,
        castShadow: U,
        receiveShadow: Q,
        material: W,
        geometry: w,
        zIndexRange: j = [16777271, 0],
        calculatePosition: K = xB,
        as: nt = "div",
        wrapperClass: at,
        pointerEvents: dt = "auto",
        ...ct
      },
      ot,
    ) => {
      const { gl: gt, camera: ht, scene: bt, size: yt, raycaster: ne, events: Dt, viewport: Jt } = $c(),
        [Ot] = st.useState(() => document.createElement(nt)),
        R = st.useRef(null),
        N = st.useRef(null),
        I = st.useRef(0),
        ut = st.useRef([0, 0]),
        rt = st.useRef(null),
        H = st.useRef(null),
        X = S?.current || Dt.connected || gt.domElement.parentNode,
        et = st.useRef(null),
        lt = st.useRef(!1),
        vt = st.useMemo(() => (g && g !== "blending") || (Array.isArray(g) && g.length && qB(g[0])), [g]);
      (st.useLayoutEffect(() => {
        const Ke = gt.domElement;
        g && g === "blending"
          ? ((Ke.style.zIndex = `${Math.floor(j[0] / 2)}`),
            (Ke.style.position = "absolute"),
            (Ke.style.pointerEvents = "none"))
          : ((Ke.style.zIndex = null), (Ke.style.position = null), (Ke.style.pointerEvents = null));
      }, [g]),
        st.useLayoutEffect(() => {
          if (N.current) {
            const Ke = (R.current = Ep.createRoot(Ot));
            if ((bt.updateMatrixWorld(), T))
              Ot.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
            else {
              const wt = K(N.current, ht, yt);
              Ot.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${wt[0]}px,${wt[1]}px,0);transform-origin:0 0;`;
            }
            return (
              X && (A ? X.prepend(Ot) : X.appendChild(Ot)),
              () => {
                (X && X.removeChild(Ot), Ke.unmount());
              }
            );
          }
        }, [X, T]),
        st.useLayoutEffect(() => {
          at && (Ot.className = at);
        }, [at]));
      const _t = st.useMemo(
          () =>
            T
              ? {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: yt.width,
                  height: yt.height,
                  transformStyle: "preserve-3d",
                  pointerEvents: "none",
                }
              : {
                  position: "absolute",
                  transform: y ? "translate3d(-50%,-50%,0)" : "none",
                  ...(E && { top: -yt.height / 2, left: -yt.width / 2, width: yt.width, height: yt.height }),
                  ...r,
                },
          [r, y, E, yt, T],
        ),
        Zt = st.useMemo(() => ({ position: "absolute", pointerEvents: dt }), [dt]);
      st.useLayoutEffect(() => {
        if (((lt.current = !1), T)) {
          var Ke;
          (Ke = R.current) == null ||
            Ke.render(
              st.createElement(
                "div",
                { ref: rt, style: _t },
                st.createElement(
                  "div",
                  { ref: H, style: Zt },
                  st.createElement("div", { ref: ot, className: h, style: r, children: d }),
                ),
              ),
            );
        } else {
          var wt;
          (wt = R.current) == null ||
            wt.render(st.createElement("div", { ref: ot, style: _t, className: h, children: d }));
        }
      });
      const de = st.useRef(!0);
      Ih((Ke) => {
        if (N.current) {
          (ht.updateMatrixWorld(), N.current.updateWorldMatrix(!0, !1));
          const wt = T ? ut.current : K(N.current, ht, yt);
          if (
            T ||
            Math.abs(I.current - ht.zoom) > c ||
            Math.abs(ut.current[0] - wt[0]) > c ||
            Math.abs(ut.current[1] - wt[1]) > c
          ) {
            const Sl = jB(N.current, ht);
            let sl = !1;
            vt && (Array.isArray(g) ? (sl = g.map((ol) => ol.current)) : g !== "blending" && (sl = [bt]));
            const fl = de.current;
            if (sl) {
              const ol = QB(N.current, ht, ne, sl);
              de.current = ol && !Sl;
            } else de.current = !Sl;
            fl !== de.current && (D ? D(!de.current) : (Ot.style.display = de.current ? "block" : "none"));
            const ga = Math.floor(j[0] / 2),
              Eu = g ? (vt ? [j[0], ga] : [ga - 1, 0]) : j;
            if (((Ot.style.zIndex = `${LB(N.current, ht, Eu)}`), T)) {
              const [ol, li] = [yt.width / 2, yt.height / 2],
                Qa = ht.projectionMatrix.elements[5] * li,
                { isOrthographicCamera: gl, top: Ka, left: Hf, bottom: ls, right: rl } = ht,
                as = YB(ht.matrixWorldInverse),
                ns = gl
                  ? `scale(${Qa})translate(${Yh(-(rl + Hf) / 2)}px,${Yh((Ka + ls) / 2)}px)`
                  : `translateZ(${Qa}px)`;
              let da = N.current.matrixWorld;
              (C &&
                ((da = ht.matrixWorldInverse.clone().transpose().copyPosition(da).scale(N.current.scale)),
                (da.elements[3] = da.elements[7] = da.elements[11] = 0),
                (da.elements[15] = 1)),
                (Ot.style.width = yt.width + "px"),
                (Ot.style.height = yt.height + "px"),
                (Ot.style.perspective = gl ? "" : `${Qa}px`),
                rt.current &&
                  H.current &&
                  ((rt.current.style.transform = `${ns}${as}translate(${ol}px,${li}px)`),
                  (H.current.style.transform = XB(da, 1 / ((B || 10) / 400)))));
            } else {
              const ol = B === void 0 ? 1 : KB(N.current, ht) * B;
              Ot.style.transform = `translate3d(${wt[0]}px,${wt[1]}px,0) scale(${ol})`;
            }
            ((ut.current = wt), (I.current = ht.zoom));
          }
        }
        if (!vt && et.current && !lt.current)
          if (T) {
            if (rt.current) {
              const wt = rt.current.children[0];
              if (wt != null && wt.clientWidth && wt != null && wt.clientHeight) {
                const { isOrthographicCamera: Sl } = ht;
                if (Sl || w)
                  ct.scale &&
                    (Array.isArray(ct.scale)
                      ? ct.scale instanceof Zl
                        ? et.current.scale.copy(ct.scale.clone().divideScalar(1))
                        : et.current.scale.set(1 / ct.scale[0], 1 / ct.scale[1], 1 / ct.scale[2])
                      : et.current.scale.setScalar(1 / ct.scale));
                else {
                  const sl = (B || 10) / 400,
                    fl = wt.clientWidth * sl,
                    ga = wt.clientHeight * sl;
                  et.current.scale.set(fl, ga, 1);
                }
                lt.current = !0;
              }
            }
          } else {
            const wt = Ot.children[0];
            if (wt != null && wt.clientWidth && wt != null && wt.clientHeight) {
              const Sl = 1 / Jt.factor,
                sl = wt.clientWidth * Sl,
                fl = wt.clientHeight * Sl;
              (et.current.scale.set(sl, fl, 1), (lt.current = !0));
            }
            et.current.lookAt(Ke.camera.position);
          }
      });
      const Ee = st.useMemo(
        () => ({
          vertexShader: T
            ? void 0
            : `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,
          fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `,
        }),
        [T],
      );
      return st.createElement(
        "group",
        rm({}, ct, { ref: N }),
        g &&
          !vt &&
          st.createElement(
            "mesh",
            { castShadow: U, receiveShadow: Q, ref: et },
            w || st.createElement("planeGeometry", null),
            W ||
              st.createElement("shaderMaterial", {
                side: Qv,
                vertexShader: Ee.vertexShader,
                fragmentShader: Ee.fragmentShader,
              }),
          ),
      );
    },
  ),
  ZB = (d) => d;
function FB(d, c = ZB) {
  const r = hr.useSyncExternalStore(
    d.subscribe,
    hr.useCallback(() => c(d.getState()), [d, c]),
    hr.useCallback(() => c(d.getInitialState()), [d, c]),
  );
  return (hr.useDebugValue(r), r);
}
const Gv = (d) => {
    const c = Vv(d),
      r = (h) => FB(c, h);
    return (Object.assign(r, c), r);
  },
  VB = (d) => (d ? Gv(d) : Gv);
let rr = 0;
const V1 = VB(
    (d) => (
      (Wd.onStart = (c, r, h) => {
        d({ active: !0, item: c, loaded: r, total: h, progress: ((r - rr) / (h - rr)) * 100 });
      }),
      (Wd.onLoad = () => {
        d({ active: !1 });
      }),
      (Wd.onError = (c) => d((r) => ({ errors: [...r.errors, c] }))),
      (Wd.onProgress = (c, r, h) => {
        (r === h && (rr = h),
          d({ active: !0, item: c, loaded: r, total: h, progress: ((r - rr) / (h - rr)) * 100 || 100 }));
      }),
      { errors: [], active: !1, progress: 0, item: "", loaded: 0, total: 0 }
    ),
  ),
  IB = parseInt(Kv.replace(/\D+/g, ""));
function Ov(d, c) {
  if (c === M0)
    return (console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), d);
  if (c === Nh || c === Lv) {
    let r = d.getIndex();
    if (r === null) {
      const E = [],
        S = d.getAttribute("position");
      if (S !== void 0) {
        for (let B = 0; B < S.count; B++) E.push(B);
        (d.setIndex(E), (r = d.getIndex()));
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.",
          ),
          d
        );
    }
    const h = r.count - 2,
      A = [];
    if (r)
      if (c === Nh) for (let E = 1; E <= h; E++) (A.push(r.getX(0)), A.push(r.getX(E)), A.push(r.getX(E + 1)));
      else
        for (let E = 0; E < h; E++)
          E % 2 === 0
            ? (A.push(r.getX(E)), A.push(r.getX(E + 1)), A.push(r.getX(E + 2)))
            : (A.push(r.getX(E + 2)), A.push(r.getX(E + 1)), A.push(r.getX(E)));
    A.length / 3 !== h &&
      console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const y = d.clone();
    return (y.setIndex(A), y.clearGroups(), y);
  } else return (console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", c), d);
}
function dm(d) {
  if (typeof TextDecoder < "u") return new TextDecoder().decode(d);
  let c = "";
  for (let r = 0, h = d.length; r < h; r++) c += String.fromCharCode(d[r]);
  try {
    return decodeURIComponent(escape(c));
  } catch {
    return c;
  }
}
const kc = "srgb",
  ei = "srgb-linear",
  _v = 3001,
  wB = 3e3;
class Ph extends Yv {
  constructor(c) {
    (super(c),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (r) {
        return new t1(r);
      }),
      this.register(function (r) {
        return new e1(r);
      }),
      this.register(function (r) {
        return new o1(r);
      }),
      this.register(function (r) {
        return new r1(r);
      }),
      this.register(function (r) {
        return new d1(r);
      }),
      this.register(function (r) {
        return new a1(r);
      }),
      this.register(function (r) {
        return new n1(r);
      }),
      this.register(function (r) {
        return new u1(r);
      }),
      this.register(function (r) {
        return new i1(r);
      }),
      this.register(function (r) {
        return new $B(r);
      }),
      this.register(function (r) {
        return new c1(r);
      }),
      this.register(function (r) {
        return new l1(r);
      }),
      this.register(function (r) {
        return new f1(r);
      }),
      this.register(function (r) {
        return new s1(r);
      }),
      this.register(function (r) {
        return new PB(r);
      }),
      this.register(function (r) {
        return new m1(r);
      }),
      this.register(function (r) {
        return new h1(r);
      }));
  }
  load(c, r, h, A) {
    const y = this;
    let E;
    if (this.resourcePath !== "") E = this.resourcePath;
    else if (this.path !== "") {
      const C = Ar.extractUrlBase(c);
      E = Ar.resolveURL(C, this.path);
    } else E = Ar.extractUrlBase(c);
    this.manager.itemStart(c);
    const S = function (C) {
        (A ? A(C) : console.error(C), y.manager.itemError(c), y.manager.itemEnd(c));
      },
      B = new am(this.manager);
    (B.setPath(this.path),
      B.setResponseType("arraybuffer"),
      B.setRequestHeader(this.requestHeader),
      B.setWithCredentials(this.withCredentials),
      B.load(
        c,
        function (C) {
          try {
            y.parse(
              C,
              E,
              function (T) {
                (r(T), y.manager.itemEnd(c));
              },
              S,
            );
          } catch (T) {
            S(T);
          }
        },
        h,
        S,
      ));
  }
  setDRACOLoader(c) {
    return ((this.dracoLoader = c), this);
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(c) {
    return ((this.ktx2Loader = c), this);
  }
  setMeshoptDecoder(c) {
    return ((this.meshoptDecoder = c), this);
  }
  register(c) {
    return (this.pluginCallbacks.indexOf(c) === -1 && this.pluginCallbacks.push(c), this);
  }
  unregister(c) {
    return (
      this.pluginCallbacks.indexOf(c) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(c), 1),
      this
    );
  }
  parse(c, r, h, A) {
    let y;
    const E = {},
      S = {};
    if (typeof c == "string") y = JSON.parse(c);
    else if (c instanceof ArrayBuffer)
      if (dm(new Uint8Array(c.slice(0, 4))) === vy) {
        try {
          E[It.KHR_BINARY_GLTF] = new A1(c);
        } catch (T) {
          A && A(T);
          return;
        }
        y = JSON.parse(E[It.KHR_BINARY_GLTF].content);
      } else y = JSON.parse(dm(new Uint8Array(c)));
    else y = c;
    if (y.asset === void 0 || y.asset.version[0] < 2) {
      A && A(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const B = new R1(y, {
      path: r || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    B.fileLoader.setRequestHeader(this.requestHeader);
    for (let C = 0; C < this.pluginCallbacks.length; C++) {
      const T = this.pluginCallbacks[C](B);
      (T.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (S[T.name] = T),
        (E[T.name] = !0));
    }
    if (y.extensionsUsed)
      for (let C = 0; C < y.extensionsUsed.length; ++C) {
        const T = y.extensionsUsed[C],
          g = y.extensionsRequired || [];
        switch (T) {
          case It.KHR_MATERIALS_UNLIT:
            E[T] = new kB();
            break;
          case It.KHR_DRACO_MESH_COMPRESSION:
            E[T] = new v1(y, this.dracoLoader);
            break;
          case It.KHR_TEXTURE_TRANSFORM:
            E[T] = new y1();
            break;
          case It.KHR_MESH_QUANTIZATION:
            E[T] = new p1();
            break;
          default:
            g.indexOf(T) >= 0 && S[T] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + T + '".');
        }
      }
    (B.setExtensions(E), B.setPlugins(S), B.parse(h, A));
  }
  parseAsync(c, r) {
    const h = this;
    return new Promise(function (A, y) {
      h.parse(c, r, A, y);
    });
  }
}
function WB() {
  let d = {};
  return {
    get: function (c) {
      return d[c];
    },
    add: function (c, r) {
      d[c] = r;
    },
    remove: function (c) {
      delete d[c];
    },
    removeAll: function () {
      d = {};
    },
  };
}
const It = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class PB {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_LIGHTS_PUNCTUAL), (this.cache = { refs: {}, uses: {} }));
  }
  _markDefs() {
    const c = this.parser,
      r = this.parser.json.nodes || [];
    for (let h = 0, A = r.length; h < A; h++) {
      const y = r[h];
      y.extensions &&
        y.extensions[this.name] &&
        y.extensions[this.name].light !== void 0 &&
        c._addNodeRef(this.cache, y.extensions[this.name].light);
    }
  }
  _loadLight(c) {
    const r = this.parser,
      h = "light:" + c;
    let A = r.cache.get(h);
    if (A) return A;
    const y = r.json,
      B = (((y.extensions && y.extensions[this.name]) || {}).lights || [])[c];
    let C;
    const T = new jn(16777215);
    B.color !== void 0 && T.setRGB(B.color[0], B.color[1], B.color[2], ei);
    const g = B.range !== void 0 ? B.range : 0;
    switch (B.type) {
      case "directional":
        ((C = new R0(T)), C.target.position.set(0, 0, -1), C.add(C.target));
        break;
      case "point":
        ((C = new D0(T)), (C.distance = g));
        break;
      case "spot":
        ((C = new T0(T)),
          (C.distance = g),
          (B.spot = B.spot || {}),
          (B.spot.innerConeAngle = B.spot.innerConeAngle !== void 0 ? B.spot.innerConeAngle : 0),
          (B.spot.outerConeAngle = B.spot.outerConeAngle !== void 0 ? B.spot.outerConeAngle : Math.PI / 4),
          (C.angle = B.spot.outerConeAngle),
          (C.penumbra = 1 - B.spot.innerConeAngle / B.spot.outerConeAngle),
          C.target.position.set(0, 0, -1),
          C.add(C.target));
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + B.type);
    }
    return (
      C.position.set(0, 0, 0),
      (C.decay = 2),
      ti(C, B),
      B.intensity !== void 0 && (C.intensity = B.intensity),
      (C.name = r.createUniqueName(B.name || "light_" + c)),
      (A = Promise.resolve(C)),
      r.cache.add(h, A),
      A
    );
  }
  getDependency(c, r) {
    if (c === "light") return this._loadLight(r);
  }
  createNodeAttachment(c) {
    const r = this,
      h = this.parser,
      y = h.json.nodes[c],
      S = ((y.extensions && y.extensions[this.name]) || {}).light;
    return S === void 0
      ? null
      : this._loadLight(S).then(function (B) {
          return h._getNodeRef(r.cache, S, B);
        });
  }
}
class kB {
  constructor() {
    this.name = It.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return mr;
  }
  extendParams(c, r, h) {
    const A = [];
    ((c.color = new jn(1, 1, 1)), (c.opacity = 1));
    const y = r.pbrMetallicRoughness;
    if (y) {
      if (Array.isArray(y.baseColorFactor)) {
        const E = y.baseColorFactor;
        (c.color.setRGB(E[0], E[1], E[2], ei), (c.opacity = E[3]));
      }
      y.baseColorTexture !== void 0 && A.push(h.assignTexture(c, "map", y.baseColorTexture, kc));
    }
    return Promise.all(A);
  }
}
class $B {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_EMISSIVE_STRENGTH));
  }
  extendMaterialParams(c, r) {
    const A = this.parser.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = A.extensions[this.name].emissiveStrength;
    return (y !== void 0 && (r.emissiveIntensity = y), Promise.resolve());
  }
}
class t1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_CLEARCOAT));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [],
      E = A.extensions[this.name];
    if (
      (E.clearcoatFactor !== void 0 && (r.clearcoat = E.clearcoatFactor),
      E.clearcoatTexture !== void 0 && y.push(h.assignTexture(r, "clearcoatMap", E.clearcoatTexture)),
      E.clearcoatRoughnessFactor !== void 0 && (r.clearcoatRoughness = E.clearcoatRoughnessFactor),
      E.clearcoatRoughnessTexture !== void 0 &&
        y.push(h.assignTexture(r, "clearcoatRoughnessMap", E.clearcoatRoughnessTexture)),
      E.clearcoatNormalTexture !== void 0 &&
        (y.push(h.assignTexture(r, "clearcoatNormalMap", E.clearcoatNormalTexture)),
        E.clearcoatNormalTexture.scale !== void 0))
    ) {
      const S = E.clearcoatNormalTexture.scale;
      r.clearcoatNormalScale = new ts(S, S);
    }
    return Promise.all(y);
  }
}
class e1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_DISPERSION));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const A = this.parser.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = A.extensions[this.name];
    return ((r.dispersion = y.dispersion !== void 0 ? y.dispersion : 0), Promise.resolve());
  }
}
class l1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_IRIDESCENCE));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [],
      E = A.extensions[this.name];
    return (
      E.iridescenceFactor !== void 0 && (r.iridescence = E.iridescenceFactor),
      E.iridescenceTexture !== void 0 && y.push(h.assignTexture(r, "iridescenceMap", E.iridescenceTexture)),
      E.iridescenceIor !== void 0 && (r.iridescenceIOR = E.iridescenceIor),
      r.iridescenceThicknessRange === void 0 && (r.iridescenceThicknessRange = [100, 400]),
      E.iridescenceThicknessMinimum !== void 0 && (r.iridescenceThicknessRange[0] = E.iridescenceThicknessMinimum),
      E.iridescenceThicknessMaximum !== void 0 && (r.iridescenceThicknessRange[1] = E.iridescenceThicknessMaximum),
      E.iridescenceThicknessTexture !== void 0 &&
        y.push(h.assignTexture(r, "iridescenceThicknessMap", E.iridescenceThicknessTexture)),
      Promise.all(y)
    );
  }
}
class a1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_SHEEN));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [];
    ((r.sheenColor = new jn(0, 0, 0)), (r.sheenRoughness = 0), (r.sheen = 1));
    const E = A.extensions[this.name];
    if (E.sheenColorFactor !== void 0) {
      const S = E.sheenColorFactor;
      r.sheenColor.setRGB(S[0], S[1], S[2], ei);
    }
    return (
      E.sheenRoughnessFactor !== void 0 && (r.sheenRoughness = E.sheenRoughnessFactor),
      E.sheenColorTexture !== void 0 && y.push(h.assignTexture(r, "sheenColorMap", E.sheenColorTexture, kc)),
      E.sheenRoughnessTexture !== void 0 && y.push(h.assignTexture(r, "sheenRoughnessMap", E.sheenRoughnessTexture)),
      Promise.all(y)
    );
  }
}
class n1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_TRANSMISSION));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [],
      E = A.extensions[this.name];
    return (
      E.transmissionFactor !== void 0 && (r.transmission = E.transmissionFactor),
      E.transmissionTexture !== void 0 && y.push(h.assignTexture(r, "transmissionMap", E.transmissionTexture)),
      Promise.all(y)
    );
  }
}
class u1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_VOLUME));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [],
      E = A.extensions[this.name];
    ((r.thickness = E.thicknessFactor !== void 0 ? E.thicknessFactor : 0),
      E.thicknessTexture !== void 0 && y.push(h.assignTexture(r, "thicknessMap", E.thicknessTexture)),
      (r.attenuationDistance = E.attenuationDistance || 1 / 0));
    const S = E.attenuationColor || [1, 1, 1];
    return ((r.attenuationColor = new jn().setRGB(S[0], S[1], S[2], ei)), Promise.all(y));
  }
}
class i1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_IOR));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const A = this.parser.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = A.extensions[this.name];
    return ((r.ior = y.ior !== void 0 ? y.ior : 1.5), Promise.resolve());
  }
}
class c1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_SPECULAR));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [],
      E = A.extensions[this.name];
    ((r.specularIntensity = E.specularFactor !== void 0 ? E.specularFactor : 1),
      E.specularTexture !== void 0 && y.push(h.assignTexture(r, "specularIntensityMap", E.specularTexture)));
    const S = E.specularColorFactor || [1, 1, 1];
    return (
      (r.specularColor = new jn().setRGB(S[0], S[1], S[2], ei)),
      E.specularColorTexture !== void 0 && y.push(h.assignTexture(r, "specularColorMap", E.specularColorTexture, kc)),
      Promise.all(y)
    );
  }
}
class s1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.EXT_MATERIALS_BUMP));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [],
      E = A.extensions[this.name];
    return (
      (r.bumpScale = E.bumpFactor !== void 0 ? E.bumpFactor : 1),
      E.bumpTexture !== void 0 && y.push(h.assignTexture(r, "bumpMap", E.bumpTexture)),
      Promise.all(y)
    );
  }
}
class f1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_MATERIALS_ANISOTROPY));
  }
  getMaterialType(c) {
    const h = this.parser.json.materials[c];
    return !h.extensions || !h.extensions[this.name] ? null : Bu;
  }
  extendMaterialParams(c, r) {
    const h = this.parser,
      A = h.json.materials[c];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const y = [],
      E = A.extensions[this.name];
    return (
      E.anisotropyStrength !== void 0 && (r.anisotropy = E.anisotropyStrength),
      E.anisotropyRotation !== void 0 && (r.anisotropyRotation = E.anisotropyRotation),
      E.anisotropyTexture !== void 0 && y.push(h.assignTexture(r, "anisotropyMap", E.anisotropyTexture)),
      Promise.all(y)
    );
  }
}
class o1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.KHR_TEXTURE_BASISU));
  }
  loadTexture(c) {
    const r = this.parser,
      h = r.json,
      A = h.textures[c];
    if (!A.extensions || !A.extensions[this.name]) return null;
    const y = A.extensions[this.name],
      E = r.options.ktx2Loader;
    if (!E) {
      if (h.extensionsRequired && h.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return r.loadTextureImage(c, y.source, E);
  }
}
class r1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.EXT_TEXTURE_WEBP), (this.isSupported = null));
  }
  loadTexture(c) {
    const r = this.name,
      h = this.parser,
      A = h.json,
      y = A.textures[c];
    if (!y.extensions || !y.extensions[r]) return null;
    const E = y.extensions[r],
      S = A.images[E.source];
    let B = h.textureLoader;
    if (S.uri) {
      const C = h.options.manager.getHandler(S.uri);
      C !== null && (B = C);
    }
    return this.detectSupport().then(function (C) {
      if (C) return h.loadTextureImage(c, E.source, B);
      if (A.extensionsRequired && A.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return h.loadTexture(c);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (c) {
          const r = new Image();
          ((r.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (r.onload = r.onerror =
              function () {
                c(r.height === 1);
              }));
        })),
      this.isSupported
    );
  }
}
class d1 {
  constructor(c) {
    ((this.parser = c), (this.name = It.EXT_TEXTURE_AVIF), (this.isSupported = null));
  }
  loadTexture(c) {
    const r = this.name,
      h = this.parser,
      A = h.json,
      y = A.textures[c];
    if (!y.extensions || !y.extensions[r]) return null;
    const E = y.extensions[r],
      S = A.images[E.source];
    let B = h.textureLoader;
    if (S.uri) {
      const C = h.options.manager.getHandler(S.uri);
      C !== null && (B = C);
    }
    return this.detectSupport().then(function (C) {
      if (C) return h.loadTextureImage(c, E.source, B);
      if (A.extensionsRequired && A.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return h.loadTexture(c);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (c) {
          const r = new Image();
          ((r.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
            (r.onload = r.onerror =
              function () {
                c(r.height === 1);
              }));
        })),
      this.isSupported
    );
  }
}
class m1 {
  constructor(c) {
    ((this.name = It.EXT_MESHOPT_COMPRESSION), (this.parser = c));
  }
  loadBufferView(c) {
    const r = this.parser.json,
      h = r.bufferViews[c];
    if (h.extensions && h.extensions[this.name]) {
      const A = h.extensions[this.name],
        y = this.parser.getDependency("buffer", A.buffer),
        E = this.parser.options.meshoptDecoder;
      if (!E || !E.supported) {
        if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return y.then(function (S) {
        const B = A.byteOffset || 0,
          C = A.byteLength || 0,
          T = A.count,
          g = A.byteStride,
          D = new Uint8Array(S, B, C);
        return E.decodeGltfBufferAsync
          ? E.decodeGltfBufferAsync(T, g, D, A.mode, A.filter).then(function (U) {
              return U.buffer;
            })
          : E.ready.then(function () {
              const U = new ArrayBuffer(T * g);
              return (E.decodeGltfBuffer(new Uint8Array(U), T, g, D, A.mode, A.filter), U);
            });
      });
    } else return null;
  }
}
class h1 {
  constructor(c) {
    ((this.name = It.EXT_MESH_GPU_INSTANCING), (this.parser = c));
  }
  createNodeMesh(c) {
    const r = this.parser.json,
      h = r.nodes[c];
    if (!h.extensions || !h.extensions[this.name] || h.mesh === void 0) return null;
    const A = r.meshes[h.mesh];
    for (const C of A.primitives)
      if (C.mode !== rn.TRIANGLES && C.mode !== rn.TRIANGLE_STRIP && C.mode !== rn.TRIANGLE_FAN && C.mode !== void 0)
        return null;
    const E = h.extensions[this.name].attributes,
      S = [],
      B = {};
    for (const C in E) S.push(this.parser.getDependency("accessor", E[C]).then((T) => ((B[C] = T), B[C])));
    return S.length < 1
      ? null
      : (S.push(this.parser.createNodeMesh(c)),
        Promise.all(S).then((C) => {
          const T = C.pop(),
            g = T.isGroup ? T.children : [T],
            D = C[0].count,
            U = [];
          for (const Q of g) {
            const W = new yr(),
              w = new Zl(),
              j = new Xv(),
              K = new Zl(1, 1, 1),
              nt = new H0(Q.geometry, Q.material, D);
            for (let at = 0; at < D; at++)
              (B.TRANSLATION && w.fromBufferAttribute(B.TRANSLATION, at),
                B.ROTATION && j.fromBufferAttribute(B.ROTATION, at),
                B.SCALE && K.fromBufferAttribute(B.SCALE, at),
                nt.setMatrixAt(at, W.compose(w, j, K)));
            for (const at in B)
              if (at === "_COLOR_0") {
                const dt = B[at];
                nt.instanceColor = new G0(dt.array, dt.itemSize, dt.normalized);
              } else at !== "TRANSLATION" && at !== "ROTATION" && at !== "SCALE" && Q.geometry.setAttribute(at, B[at]);
            (nm.prototype.copy.call(nt, Q), this.parser.assignFinalMaterial(nt), U.push(nt));
          }
          return T.isGroup ? (T.clear(), T.add(...U), T) : U[0];
        }));
  }
}
const vy = "glTF",
  dr = 12,
  Uv = { JSON: 1313821514, BIN: 5130562 };
class A1 {
  constructor(c) {
    ((this.name = It.KHR_BINARY_GLTF), (this.content = null), (this.body = null));
    const r = new DataView(c, 0, dr);
    if (
      ((this.header = {
        magic: dm(new Uint8Array(c.slice(0, 4))),
        version: r.getUint32(4, !0),
        length: r.getUint32(8, !0),
      }),
      this.header.magic !== vy)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const h = this.header.length - dr,
      A = new DataView(c, dr);
    let y = 0;
    for (; y < h;) {
      const E = A.getUint32(y, !0);
      y += 4;
      const S = A.getUint32(y, !0);
      if (((y += 4), S === Uv.JSON)) {
        const B = new Uint8Array(c, dr + y, E);
        this.content = dm(B);
      } else if (S === Uv.BIN) {
        const B = dr + y;
        this.body = c.slice(B, B + E);
      }
      y += E;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class v1 {
  constructor(c, r) {
    if (!r) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    ((this.name = It.KHR_DRACO_MESH_COMPRESSION), (this.json = c), (this.dracoLoader = r), this.dracoLoader.preload());
  }
  decodePrimitive(c, r) {
    const h = this.json,
      A = this.dracoLoader,
      y = c.extensions[this.name].bufferView,
      E = c.extensions[this.name].attributes,
      S = {},
      B = {},
      C = {};
    for (const T in E) {
      const g = Xh[T] || T.toLowerCase();
      S[g] = E[T];
    }
    for (const T in c.attributes) {
      const g = Xh[T] || T.toLowerCase();
      if (E[T] !== void 0) {
        const D = h.accessors[c.attributes[T]],
          U = Mf[D.componentType];
        ((C[g] = U.name), (B[g] = D.normalized === !0));
      }
    }
    return r.getDependency("bufferView", y).then(function (T) {
      return new Promise(function (g, D) {
        A.decodeDracoFile(
          T,
          function (U) {
            for (const Q in U.attributes) {
              const W = U.attributes[Q],
                w = B[Q];
              w !== void 0 && (W.normalized = w);
            }
            g(U);
          },
          S,
          C,
          ei,
          D,
        );
      });
    });
  }
}
class y1 {
  constructor() {
    this.name = It.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(c, r) {
    return (
      ((r.texCoord === void 0 || r.texCoord === c.channel) &&
        r.offset === void 0 &&
        r.rotation === void 0 &&
        r.scale === void 0) ||
        ((c = c.clone()),
        r.texCoord !== void 0 && (c.channel = r.texCoord),
        r.offset !== void 0 && c.offset.fromArray(r.offset),
        r.rotation !== void 0 && (c.rotation = r.rotation),
        r.scale !== void 0 && c.repeat.fromArray(r.scale),
        (c.needsUpdate = !0)),
      c
    );
  }
}
class p1 {
  constructor() {
    this.name = It.KHR_MESH_QUANTIZATION;
  }
}
class yy extends ep {
  constructor(c, r, h, A) {
    super(c, r, h, A);
  }
  copySampleValue_(c) {
    const r = this.resultBuffer,
      h = this.sampleValues,
      A = this.valueSize,
      y = c * A * 3 + A;
    for (let E = 0; E !== A; E++) r[E] = h[y + E];
    return r;
  }
  interpolate_(c, r, h, A) {
    const y = this.resultBuffer,
      E = this.sampleValues,
      S = this.valueSize,
      B = S * 2,
      C = S * 3,
      T = A - r,
      g = (h - r) / T,
      D = g * g,
      U = D * g,
      Q = c * C,
      W = Q - C,
      w = -2 * U + 3 * D,
      j = U - D,
      K = 1 - w,
      nt = j - D + g;
    for (let at = 0; at !== S; at++) {
      const dt = E[W + at + S],
        ct = E[W + at + B] * T,
        ot = E[Q + at + S],
        gt = E[Q + at] * T;
      y[at] = K * dt + nt * ct + w * ot + j * gt;
    }
    return y;
  }
}
const B1 = new Xv();
class E1 extends yy {
  interpolate_(c, r, h, A) {
    const y = super.interpolate_(c, r, h, A);
    return (B1.fromArray(y).normalize().toArray(y), y);
  }
}
const rn = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 },
  Mf = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Nv = { 9728: J0, 9729: um, 9984: z0, 9985: N0, 9986: U0, 9987: qv },
  zv = { 33071: j0, 33648: x0, 10497: zh },
  Dh = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Xh = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    ...(IB >= 152
      ? { TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3" }
      : { TEXCOORD_0: "uv", TEXCOORD_1: "uv2" }),
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  Vi = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" },
  C1 = { CUBICSPLINE: void 0, LINEAR: Fv, STEP: k0 },
  Rh = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function S1(d) {
  return (
    d.DefaultMaterial === void 0 &&
      (d.DefaultMaterial = new Zv({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: tp,
      })),
    d.DefaultMaterial
  );
}
function Wc(d, c, r) {
  for (const h in r.extensions)
    d[h] === void 0 &&
      ((c.userData.gltfExtensions = c.userData.gltfExtensions || {}), (c.userData.gltfExtensions[h] = r.extensions[h]));
}
function ti(d, c) {
  c.extras !== void 0 &&
    (typeof c.extras == "object"
      ? Object.assign(d.userData, c.extras)
      : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + c.extras));
}
function g1(d, c, r) {
  let h = !1,
    A = !1,
    y = !1;
  for (let C = 0, T = c.length; C < T; C++) {
    const g = c[C];
    if (
      (g.POSITION !== void 0 && (h = !0),
      g.NORMAL !== void 0 && (A = !0),
      g.COLOR_0 !== void 0 && (y = !0),
      h && A && y)
    )
      break;
  }
  if (!h && !A && !y) return Promise.resolve(d);
  const E = [],
    S = [],
    B = [];
  for (let C = 0, T = c.length; C < T; C++) {
    const g = c[C];
    if (h) {
      const D = g.POSITION !== void 0 ? r.getDependency("accessor", g.POSITION) : d.attributes.position;
      E.push(D);
    }
    if (A) {
      const D = g.NORMAL !== void 0 ? r.getDependency("accessor", g.NORMAL) : d.attributes.normal;
      S.push(D);
    }
    if (y) {
      const D = g.COLOR_0 !== void 0 ? r.getDependency("accessor", g.COLOR_0) : d.attributes.color;
      B.push(D);
    }
  }
  return Promise.all([Promise.all(E), Promise.all(S), Promise.all(B)]).then(function (C) {
    const T = C[0],
      g = C[1],
      D = C[2];
    return (
      h && (d.morphAttributes.position = T),
      A && (d.morphAttributes.normal = g),
      y && (d.morphAttributes.color = D),
      (d.morphTargetsRelative = !0),
      d
    );
  });
}
function b1(d, c) {
  if ((d.updateMorphTargets(), c.weights !== void 0))
    for (let r = 0, h = c.weights.length; r < h; r++) d.morphTargetInfluences[r] = c.weights[r];
  if (c.extras && Array.isArray(c.extras.targetNames)) {
    const r = c.extras.targetNames;
    if (d.morphTargetInfluences.length === r.length) {
      d.morphTargetDictionary = {};
      for (let h = 0, A = r.length; h < A; h++) d.morphTargetDictionary[r[h]] = h;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function M1(d) {
  let c;
  const r = d.extensions && d.extensions[It.KHR_DRACO_MESH_COMPRESSION];
  if (
    (r
      ? (c = "draco:" + r.bufferView + ":" + r.indices + ":" + Hh(r.attributes))
      : (c = d.indices + ":" + Hh(d.attributes) + ":" + d.mode),
    d.targets !== void 0)
  )
    for (let h = 0, A = d.targets.length; h < A; h++) c += ":" + Hh(d.targets[h]);
  return c;
}
function Hh(d) {
  let c = "";
  const r = Object.keys(d).sort();
  for (let h = 0, A = r.length; h < A; h++) c += r[h] + ":" + d[r[h]] + ";";
  return c;
}
function qh(d) {
  switch (d) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function T1(d) {
  return d.search(/\.jpe?g($|\?)/i) > 0 || d.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : d.search(/\.webp($|\?)/i) > 0 || d.search(/^data\:image\/webp/) === 0
      ? "image/webp"
      : "image/png";
}
const D1 = new yr();
class R1 {
  constructor(c = {}, r = {}) {
    ((this.json = c),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = r),
      (this.cache = new WB()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {}));
    let h = !1,
      A = !1,
      y = -1;
    (typeof navigator < "u" &&
      typeof navigator.userAgent < "u" &&
      ((h = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0),
      (A = navigator.userAgent.indexOf("Firefox") > -1),
      (y = A ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1)),
      typeof createImageBitmap > "u" || h || (A && y < 98)
        ? (this.textureLoader = new Am(this.options.manager))
        : (this.textureLoader = new O0(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new am(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0));
  }
  setExtensions(c) {
    this.extensions = c;
  }
  setPlugins(c) {
    this.plugins = c;
  }
  parse(c, r) {
    const h = this,
      A = this.json,
      y = this.extensions;
    (this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (E) {
        return E._markDefs && E._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (E) {
          return E.beforeRoot && E.beforeRoot();
        }),
      )
        .then(function () {
          return Promise.all([h.getDependencies("scene"), h.getDependencies("animation"), h.getDependencies("camera")]);
        })
        .then(function (E) {
          const S = {
            scene: E[0][A.scene || 0],
            scenes: E[0],
            animations: E[1],
            cameras: E[2],
            asset: A.asset,
            parser: h,
            userData: {},
          };
          return (
            Wc(y, S, A),
            ti(S, A),
            Promise.all(
              h._invokeAll(function (B) {
                return B.afterRoot && B.afterRoot(S);
              }),
            ).then(function () {
              for (const B of S.scenes) B.updateMatrixWorld();
              c(S);
            })
          );
        })
        .catch(r));
  }
  _markDefs() {
    const c = this.json.nodes || [],
      r = this.json.skins || [],
      h = this.json.meshes || [];
    for (let A = 0, y = r.length; A < y; A++) {
      const E = r[A].joints;
      for (let S = 0, B = E.length; S < B; S++) c[E[S]].isBone = !0;
    }
    for (let A = 0, y = c.length; A < y; A++) {
      const E = c[A];
      (E.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, E.mesh), E.skin !== void 0 && (h[E.mesh].isSkinnedMesh = !0)),
        E.camera !== void 0 && this._addNodeRef(this.cameraCache, E.camera));
    }
  }
  _addNodeRef(c, r) {
    r !== void 0 && (c.refs[r] === void 0 && (c.refs[r] = c.uses[r] = 0), c.refs[r]++);
  }
  _getNodeRef(c, r, h) {
    if (c.refs[r] <= 1) return h;
    const A = h.clone(),
      y = (E, S) => {
        const B = this.associations.get(E);
        B != null && this.associations.set(S, B);
        for (const [C, T] of E.children.entries()) y(T, S.children[C]);
      };
    return (y(h, A), (A.name += "_instance_" + c.uses[r]++), A);
  }
  _invokeOne(c) {
    const r = Object.values(this.plugins);
    r.push(this);
    for (let h = 0; h < r.length; h++) {
      const A = c(r[h]);
      if (A) return A;
    }
    return null;
  }
  _invokeAll(c) {
    const r = Object.values(this.plugins);
    r.unshift(this);
    const h = [];
    for (let A = 0; A < r.length; A++) {
      const y = c(r[A]);
      y && h.push(y);
    }
    return h;
  }
  getDependency(c, r) {
    const h = c + ":" + r;
    let A = this.cache.get(h);
    if (!A) {
      switch (c) {
        case "scene":
          A = this.loadScene(r);
          break;
        case "node":
          A = this._invokeOne(function (y) {
            return y.loadNode && y.loadNode(r);
          });
          break;
        case "mesh":
          A = this._invokeOne(function (y) {
            return y.loadMesh && y.loadMesh(r);
          });
          break;
        case "accessor":
          A = this.loadAccessor(r);
          break;
        case "bufferView":
          A = this._invokeOne(function (y) {
            return y.loadBufferView && y.loadBufferView(r);
          });
          break;
        case "buffer":
          A = this.loadBuffer(r);
          break;
        case "material":
          A = this._invokeOne(function (y) {
            return y.loadMaterial && y.loadMaterial(r);
          });
          break;
        case "texture":
          A = this._invokeOne(function (y) {
            return y.loadTexture && y.loadTexture(r);
          });
          break;
        case "skin":
          A = this.loadSkin(r);
          break;
        case "animation":
          A = this._invokeOne(function (y) {
            return y.loadAnimation && y.loadAnimation(r);
          });
          break;
        case "camera":
          A = this.loadCamera(r);
          break;
        default:
          if (
            ((A = this._invokeOne(function (y) {
              return y != this && y.getDependency && y.getDependency(c, r);
            })),
            !A)
          )
            throw new Error("Unknown type: " + c);
          break;
      }
      this.cache.add(h, A);
    }
    return A;
  }
  getDependencies(c) {
    let r = this.cache.get(c);
    if (!r) {
      const h = this,
        A = this.json[c + (c === "mesh" ? "es" : "s")] || [];
      ((r = Promise.all(
        A.map(function (y, E) {
          return h.getDependency(c, E);
        }),
      )),
        this.cache.add(c, r));
    }
    return r;
  }
  loadBuffer(c) {
    const r = this.json.buffers[c],
      h = this.fileLoader;
    if (r.type && r.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + r.type + " buffer type is not supported.");
    if (r.uri === void 0 && c === 0) return Promise.resolve(this.extensions[It.KHR_BINARY_GLTF].body);
    const A = this.options;
    return new Promise(function (y, E) {
      h.load(Ar.resolveURL(r.uri, A.path), y, void 0, function () {
        E(new Error('THREE.GLTFLoader: Failed to load buffer "' + r.uri + '".'));
      });
    });
  }
  loadBufferView(c) {
    const r = this.json.bufferViews[c];
    return this.getDependency("buffer", r.buffer).then(function (h) {
      const A = r.byteLength || 0,
        y = r.byteOffset || 0;
      return h.slice(y, y + A);
    });
  }
  loadAccessor(c) {
    const r = this,
      h = this.json,
      A = this.json.accessors[c];
    if (A.bufferView === void 0 && A.sparse === void 0) {
      const E = Dh[A.type],
        S = Mf[A.componentType],
        B = A.normalized === !0,
        C = new S(A.count * E);
      return Promise.resolve(new xa(C, E, B));
    }
    const y = [];
    return (
      A.bufferView !== void 0 ? y.push(this.getDependency("bufferView", A.bufferView)) : y.push(null),
      A.sparse !== void 0 &&
        (y.push(this.getDependency("bufferView", A.sparse.indices.bufferView)),
        y.push(this.getDependency("bufferView", A.sparse.values.bufferView))),
      Promise.all(y).then(function (E) {
        const S = E[0],
          B = Dh[A.type],
          C = Mf[A.componentType],
          T = C.BYTES_PER_ELEMENT,
          g = T * B,
          D = A.byteOffset || 0,
          U = A.bufferView !== void 0 ? h.bufferViews[A.bufferView].byteStride : void 0,
          Q = A.normalized === !0;
        let W, w;
        if (U && U !== g) {
          const j = Math.floor(D / U),
            K = "InterleavedBuffer:" + A.bufferView + ":" + A.componentType + ":" + j + ":" + A.count;
          let nt = r.cache.get(K);
          (nt || ((W = new C(S, j * U, (A.count * U) / T)), (nt = new _0(W, U / T)), r.cache.add(K, nt)),
            (w = new $0(nt, B, (D % U) / T, Q)));
        } else (S === null ? (W = new C(A.count * B)) : (W = new C(S, D, A.count * B)), (w = new xa(W, B, Q)));
        if (A.sparse !== void 0) {
          const j = Dh.SCALAR,
            K = Mf[A.sparse.indices.componentType],
            nt = A.sparse.indices.byteOffset || 0,
            at = A.sparse.values.byteOffset || 0,
            dt = new K(E[1], nt, A.sparse.count * j),
            ct = new C(E[2], at, A.sparse.count * B);
          S !== null && (w = new xa(w.array.slice(), w.itemSize, w.normalized));
          for (let ot = 0, gt = dt.length; ot < gt; ot++) {
            const ht = dt[ot];
            if (
              (w.setX(ht, ct[ot * B]),
              B >= 2 && w.setY(ht, ct[ot * B + 1]),
              B >= 3 && w.setZ(ht, ct[ot * B + 2]),
              B >= 4 && w.setW(ht, ct[ot * B + 3]),
              B >= 5)
            )
              throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
        }
        return w;
      })
    );
  }
  loadTexture(c) {
    const r = this.json,
      h = this.options,
      y = r.textures[c].source,
      E = r.images[y];
    let S = this.textureLoader;
    if (E.uri) {
      const B = h.manager.getHandler(E.uri);
      B !== null && (S = B);
    }
    return this.loadTextureImage(c, y, S);
  }
  loadTextureImage(c, r, h) {
    const A = this,
      y = this.json,
      E = y.textures[c],
      S = y.images[r],
      B = (S.uri || S.bufferView) + ":" + E.sampler;
    if (this.textureCache[B]) return this.textureCache[B];
    const C = this.loadImageSource(r, h)
      .then(function (T) {
        ((T.flipY = !1),
          (T.name = E.name || S.name || ""),
          T.name === "" && typeof S.uri == "string" && S.uri.startsWith("data:image/") === !1 && (T.name = S.uri));
        const D = (y.samplers || {})[E.sampler] || {};
        return (
          (T.magFilter = Nv[D.magFilter] || um),
          (T.minFilter = Nv[D.minFilter] || qv),
          (T.wrapS = zv[D.wrapS] || zh),
          (T.wrapT = zv[D.wrapT] || zh),
          A.associations.set(T, { textures: c }),
          T
        );
      })
      .catch(function () {
        return null;
      });
    return ((this.textureCache[B] = C), C);
  }
  loadImageSource(c, r) {
    const h = this,
      A = this.json,
      y = this.options;
    if (this.sourceCache[c] !== void 0) return this.sourceCache[c].then((g) => g.clone());
    const E = A.images[c],
      S = self.URL || self.webkitURL;
    let B = E.uri || "",
      C = !1;
    if (E.bufferView !== void 0)
      B = h.getDependency("bufferView", E.bufferView).then(function (g) {
        C = !0;
        const D = new Blob([g], { type: E.mimeType });
        return ((B = S.createObjectURL(D)), B);
      });
    else if (E.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + c + " is missing URI and bufferView");
    const T = Promise.resolve(B)
      .then(function (g) {
        return new Promise(function (D, U) {
          let Q = D;
          (r.isImageBitmapLoader === !0 &&
            (Q = function (W) {
              const w = new im(W);
              ((w.needsUpdate = !0), D(w));
            }),
            r.load(Ar.resolveURL(g, y.path), Q, void 0, U));
        });
      })
      .then(function (g) {
        return (C === !0 && S.revokeObjectURL(B), ti(g, E), (g.userData.mimeType = E.mimeType || T1(E.uri)), g);
      })
      .catch(function (g) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", B), g);
      });
    return ((this.sourceCache[c] = T), T);
  }
  assignTexture(c, r, h, A) {
    const y = this;
    return this.getDependency("texture", h.index).then(function (E) {
      if (!E) return null;
      if (
        (h.texCoord !== void 0 && h.texCoord > 0 && ((E = E.clone()), (E.channel = h.texCoord)),
        y.extensions[It.KHR_TEXTURE_TRANSFORM])
      ) {
        const S = h.extensions !== void 0 ? h.extensions[It.KHR_TEXTURE_TRANSFORM] : void 0;
        if (S) {
          const B = y.associations.get(E);
          ((E = y.extensions[It.KHR_TEXTURE_TRANSFORM].extendTexture(E, S)), y.associations.set(E, B));
        }
      }
      return (
        A !== void 0 &&
          (typeof A == "number" && (A = A === _v ? kc : ei),
          "colorSpace" in E ? (E.colorSpace = A) : (E.encoding = A === kc ? _v : wB)),
        (c[r] = E),
        E
      );
    });
  }
  assignFinalMaterial(c) {
    const r = c.geometry;
    let h = c.material;
    const A = r.attributes.tangent === void 0,
      y = r.attributes.color !== void 0,
      E = r.attributes.normal === void 0;
    if (c.isPoints) {
      const S = "PointsMaterial:" + h.uuid;
      let B = this.cache.get(S);
      (B ||
        ((B = new Q0()),
        eh.prototype.copy.call(B, h),
        B.color.copy(h.color),
        (B.map = h.map),
        (B.sizeAttenuation = !1),
        this.cache.add(S, B)),
        (h = B));
    } else if (c.isLine) {
      const S = "LineBasicMaterial:" + h.uuid;
      let B = this.cache.get(S);
      (B ||
        ((B = new K0()), eh.prototype.copy.call(B, h), B.color.copy(h.color), (B.map = h.map), this.cache.add(S, B)),
        (h = B));
    }
    if (A || y || E) {
      let S = "ClonedMaterial:" + h.uuid + ":";
      (A && (S += "derivative-tangents:"), y && (S += "vertex-colors:"), E && (S += "flat-shading:"));
      let B = this.cache.get(S);
      (B ||
        ((B = h.clone()),
        y && (B.vertexColors = !0),
        E && (B.flatShading = !0),
        A && (B.normalScale && (B.normalScale.y *= -1), B.clearcoatNormalScale && (B.clearcoatNormalScale.y *= -1)),
        this.cache.add(S, B),
        this.associations.set(B, this.associations.get(h))),
        (h = B));
    }
    c.material = h;
  }
  getMaterialType() {
    return Zv;
  }
  loadMaterial(c) {
    const r = this,
      h = this.json,
      A = this.extensions,
      y = h.materials[c];
    let E;
    const S = {},
      B = y.extensions || {},
      C = [];
    if (B[It.KHR_MATERIALS_UNLIT]) {
      const g = A[It.KHR_MATERIALS_UNLIT];
      ((E = g.getMaterialType()), C.push(g.extendParams(S, y, r)));
    } else {
      const g = y.pbrMetallicRoughness || {};
      if (((S.color = new jn(1, 1, 1)), (S.opacity = 1), Array.isArray(g.baseColorFactor))) {
        const D = g.baseColorFactor;
        (S.color.setRGB(D[0], D[1], D[2], ei), (S.opacity = D[3]));
      }
      (g.baseColorTexture !== void 0 && C.push(r.assignTexture(S, "map", g.baseColorTexture, kc)),
        (S.metalness = g.metallicFactor !== void 0 ? g.metallicFactor : 1),
        (S.roughness = g.roughnessFactor !== void 0 ? g.roughnessFactor : 1),
        g.metallicRoughnessTexture !== void 0 &&
          (C.push(r.assignTexture(S, "metalnessMap", g.metallicRoughnessTexture)),
          C.push(r.assignTexture(S, "roughnessMap", g.metallicRoughnessTexture))),
        (E = this._invokeOne(function (D) {
          return D.getMaterialType && D.getMaterialType(c);
        })),
        C.push(
          Promise.all(
            this._invokeAll(function (D) {
              return D.extendMaterialParams && D.extendMaterialParams(c, S);
            }),
          ),
        ));
    }
    y.doubleSided === !0 && (S.side = Qv);
    const T = y.alphaMode || Rh.OPAQUE;
    if (
      (T === Rh.BLEND
        ? ((S.transparent = !0), (S.depthWrite = !1))
        : ((S.transparent = !1), T === Rh.MASK && (S.alphaTest = y.alphaCutoff !== void 0 ? y.alphaCutoff : 0.5)),
      y.normalTexture !== void 0 &&
        E !== mr &&
        (C.push(r.assignTexture(S, "normalMap", y.normalTexture)),
        (S.normalScale = new ts(1, 1)),
        y.normalTexture.scale !== void 0))
    ) {
      const g = y.normalTexture.scale;
      S.normalScale.set(g, g);
    }
    if (
      (y.occlusionTexture !== void 0 &&
        E !== mr &&
        (C.push(r.assignTexture(S, "aoMap", y.occlusionTexture)),
        y.occlusionTexture.strength !== void 0 && (S.aoMapIntensity = y.occlusionTexture.strength)),
      y.emissiveFactor !== void 0 && E !== mr)
    ) {
      const g = y.emissiveFactor;
      S.emissive = new jn().setRGB(g[0], g[1], g[2], ei);
    }
    return (
      y.emissiveTexture !== void 0 && E !== mr && C.push(r.assignTexture(S, "emissiveMap", y.emissiveTexture, kc)),
      Promise.all(C).then(function () {
        const g = new E(S);
        return (
          y.name && (g.name = y.name),
          ti(g, y),
          r.associations.set(g, { materials: c }),
          y.extensions && Wc(A, g, y),
          g
        );
      })
    );
  }
  createUniqueName(c) {
    const r = L0.sanitizeNodeName(c || "");
    return r in this.nodeNamesUsed ? r + "_" + ++this.nodeNamesUsed[r] : ((this.nodeNamesUsed[r] = 0), r);
  }
  loadGeometries(c) {
    const r = this,
      h = this.extensions,
      A = this.primitiveCache;
    function y(S) {
      return h[It.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(S, r).then(function (B) {
        return Jv(B, S, r);
      });
    }
    const E = [];
    for (let S = 0, B = c.length; S < B; S++) {
      const C = c[S],
        T = M1(C),
        g = A[T];
      if (g) E.push(g.promise);
      else {
        let D;
        (C.extensions && C.extensions[It.KHR_DRACO_MESH_COMPRESSION] ? (D = y(C)) : (D = Jv(new vm(), C, r)),
          (A[T] = { primitive: C, promise: D }),
          E.push(D));
      }
    }
    return Promise.all(E);
  }
  loadMesh(c) {
    const r = this,
      h = this.json,
      A = this.extensions,
      y = h.meshes[c],
      E = y.primitives,
      S = [];
    for (let B = 0, C = E.length; B < C; B++) {
      const T = E[B].material === void 0 ? S1(this.cache) : this.getDependency("material", E[B].material);
      S.push(T);
    }
    return (
      S.push(r.loadGeometries(E)),
      Promise.all(S).then(function (B) {
        const C = B.slice(0, B.length - 1),
          T = B[B.length - 1],
          g = [];
        for (let U = 0, Q = T.length; U < Q; U++) {
          const W = T[U],
            w = E[U];
          let j;
          const K = C[U];
          if (
            w.mode === rn.TRIANGLES ||
            w.mode === rn.TRIANGLE_STRIP ||
            w.mode === rn.TRIANGLE_FAN ||
            w.mode === void 0
          )
            ((j = y.isSkinnedMesh === !0 ? new Y0(W, K) : new X0(W, K)),
              j.isSkinnedMesh === !0 && j.normalizeSkinWeights(),
              w.mode === rn.TRIANGLE_STRIP
                ? (j.geometry = Ov(j.geometry, Lv))
                : w.mode === rn.TRIANGLE_FAN && (j.geometry = Ov(j.geometry, Nh)));
          else if (w.mode === rn.LINES) j = new q0(W, K);
          else if (w.mode === rn.LINE_STRIP) j = new Z0(W, K);
          else if (w.mode === rn.LINE_LOOP) j = new F0(W, K);
          else if (w.mode === rn.POINTS) j = new V0(W, K);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + w.mode);
          (Object.keys(j.geometry.morphAttributes).length > 0 && b1(j, y),
            (j.name = r.createUniqueName(y.name || "mesh_" + c)),
            ti(j, y),
            w.extensions && Wc(A, j, w),
            r.assignFinalMaterial(j),
            g.push(j));
        }
        for (let U = 0, Q = g.length; U < Q; U++) r.associations.set(g[U], { meshes: c, primitives: U });
        if (g.length === 1) return (y.extensions && Wc(A, g[0], y), g[0]);
        const D = new lh();
        (y.extensions && Wc(A, D, y), r.associations.set(D, { meshes: c }));
        for (let U = 0, Q = g.length; U < Q; U++) D.add(g[U]);
        return D;
      })
    );
  }
  loadCamera(c) {
    let r;
    const h = this.json.cameras[c],
      A = h[h.type];
    if (!A) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      h.type === "perspective"
        ? (r = new hm(I0.radToDeg(A.yfov), A.aspectRatio || 1, A.znear || 1, A.zfar || 2e6))
        : h.type === "orthographic" && (r = new mm(-A.xmag, A.xmag, A.ymag, -A.ymag, A.znear, A.zfar)),
      h.name && (r.name = this.createUniqueName(h.name)),
      ti(r, h),
      Promise.resolve(r)
    );
  }
  loadSkin(c) {
    const r = this.json.skins[c],
      h = [];
    for (let A = 0, y = r.joints.length; A < y; A++) h.push(this._loadNodeShallow(r.joints[A]));
    return (
      r.inverseBindMatrices !== void 0 ? h.push(this.getDependency("accessor", r.inverseBindMatrices)) : h.push(null),
      Promise.all(h).then(function (A) {
        const y = A.pop(),
          E = A,
          S = [],
          B = [];
        for (let C = 0, T = E.length; C < T; C++) {
          const g = E[C];
          if (g) {
            S.push(g);
            const D = new yr();
            (y !== null && D.fromArray(y.array, C * 16), B.push(D));
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[C]);
        }
        return new w0(S, B);
      })
    );
  }
  loadAnimation(c) {
    const r = this.json,
      h = this,
      A = r.animations[c],
      y = A.name ? A.name : "animation_" + c,
      E = [],
      S = [],
      B = [],
      C = [],
      T = [];
    for (let g = 0, D = A.channels.length; g < D; g++) {
      const U = A.channels[g],
        Q = A.samplers[U.sampler],
        W = U.target,
        w = W.node,
        j = A.parameters !== void 0 ? A.parameters[Q.input] : Q.input,
        K = A.parameters !== void 0 ? A.parameters[Q.output] : Q.output;
      W.node !== void 0 &&
        (E.push(this.getDependency("node", w)),
        S.push(this.getDependency("accessor", j)),
        B.push(this.getDependency("accessor", K)),
        C.push(Q),
        T.push(W));
    }
    return Promise.all([Promise.all(E), Promise.all(S), Promise.all(B), Promise.all(C), Promise.all(T)]).then(
      function (g) {
        const D = g[0],
          U = g[1],
          Q = g[2],
          W = g[3],
          w = g[4],
          j = [];
        for (let K = 0, nt = D.length; K < nt; K++) {
          const at = D[K],
            dt = U[K],
            ct = Q[K],
            ot = W[K],
            gt = w[K];
          if (at === void 0) continue;
          at.updateMatrix && at.updateMatrix();
          const ht = h._createAnimationTracks(at, dt, ct, ot, gt);
          if (ht) for (let bt = 0; bt < ht.length; bt++) j.push(ht[bt]);
        }
        return new W0(y, void 0, j);
      },
    );
  }
  createNodeMesh(c) {
    const r = this.json,
      h = this,
      A = r.nodes[c];
    return A.mesh === void 0
      ? null
      : h.getDependency("mesh", A.mesh).then(function (y) {
          const E = h._getNodeRef(h.meshCache, A.mesh, y);
          return (
            A.weights !== void 0 &&
              E.traverse(function (S) {
                if (S.isMesh)
                  for (let B = 0, C = A.weights.length; B < C; B++) S.morphTargetInfluences[B] = A.weights[B];
              }),
            E
          );
        });
  }
  loadNode(c) {
    const r = this.json,
      h = this,
      A = r.nodes[c],
      y = h._loadNodeShallow(c),
      E = [],
      S = A.children || [];
    for (let C = 0, T = S.length; C < T; C++) E.push(h.getDependency("node", S[C]));
    const B = A.skin === void 0 ? Promise.resolve(null) : h.getDependency("skin", A.skin);
    return Promise.all([y, Promise.all(E), B]).then(function (C) {
      const T = C[0],
        g = C[1],
        D = C[2];
      D !== null &&
        T.traverse(function (U) {
          U.isSkinnedMesh && U.bind(D, D1);
        });
      for (let U = 0, Q = g.length; U < Q; U++) T.add(g[U]);
      return T;
    });
  }
  _loadNodeShallow(c) {
    const r = this.json,
      h = this.extensions,
      A = this;
    if (this.nodeCache[c] !== void 0) return this.nodeCache[c];
    const y = r.nodes[c],
      E = y.name ? A.createUniqueName(y.name) : "",
      S = [],
      B = A._invokeOne(function (C) {
        return C.createNodeMesh && C.createNodeMesh(c);
      });
    return (
      B && S.push(B),
      y.camera !== void 0 &&
        S.push(
          A.getDependency("camera", y.camera).then(function (C) {
            return A._getNodeRef(A.cameraCache, y.camera, C);
          }),
        ),
      A._invokeAll(function (C) {
        return C.createNodeAttachment && C.createNodeAttachment(c);
      }).forEach(function (C) {
        S.push(C);
      }),
      (this.nodeCache[c] = Promise.all(S).then(function (C) {
        let T;
        if (
          (y.isBone === !0
            ? (T = new P0())
            : C.length > 1
              ? (T = new lh())
              : C.length === 1
                ? (T = C[0])
                : (T = new nm()),
          T !== C[0])
        )
          for (let g = 0, D = C.length; g < D; g++) T.add(C[g]);
        if (
          (y.name && ((T.userData.name = y.name), (T.name = E)),
          ti(T, y),
          y.extensions && Wc(h, T, y),
          y.matrix !== void 0)
        ) {
          const g = new yr();
          (g.fromArray(y.matrix), T.applyMatrix4(g));
        } else
          (y.translation !== void 0 && T.position.fromArray(y.translation),
            y.rotation !== void 0 && T.quaternion.fromArray(y.rotation),
            y.scale !== void 0 && T.scale.fromArray(y.scale));
        return (A.associations.has(T) || A.associations.set(T, {}), (A.associations.get(T).nodes = c), T);
      })),
      this.nodeCache[c]
    );
  }
  loadScene(c) {
    const r = this.extensions,
      h = this.json.scenes[c],
      A = this,
      y = new lh();
    (h.name && (y.name = A.createUniqueName(h.name)), ti(y, h), h.extensions && Wc(r, y, h));
    const E = h.nodes || [],
      S = [];
    for (let B = 0, C = E.length; B < C; B++) S.push(A.getDependency("node", E[B]));
    return Promise.all(S).then(function (B) {
      for (let T = 0, g = B.length; T < g; T++) y.add(B[T]);
      const C = (T) => {
        const g = new Map();
        for (const [D, U] of A.associations) (D instanceof eh || D instanceof im) && g.set(D, U);
        return (
          T.traverse((D) => {
            const U = A.associations.get(D);
            U != null && g.set(D, U);
          }),
          g
        );
      };
      return ((A.associations = C(y)), y);
    });
  }
  _createAnimationTracks(c, r, h, A, y) {
    const E = [],
      S = c.name ? c.name : c.uuid,
      B = [];
    Vi[y.path] === Vi.weights
      ? c.traverse(function (D) {
          D.morphTargetInfluences && B.push(D.name ? D.name : D.uuid);
        })
      : B.push(S);
    let C;
    switch (Vi[y.path]) {
      case Vi.weights:
        C = VA;
        break;
      case Vi.rotation:
        C = IA;
        break;
      case Vi.position:
      case Vi.scale:
        C = FA;
        break;
      default:
        switch (h.itemSize) {
          case 1:
            C = VA;
            break;
          case 2:
          case 3:
          default:
            C = FA;
            break;
        }
        break;
    }
    const T = A.interpolation !== void 0 ? C1[A.interpolation] : Fv,
      g = this._getArrayFromAccessor(h);
    for (let D = 0, U = B.length; D < U; D++) {
      const Q = new C(B[D] + "." + Vi[y.path], r.array, g, T);
      (A.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(Q), E.push(Q));
    }
    return E;
  }
  _getArrayFromAccessor(c) {
    let r = c.array;
    if (c.normalized) {
      const h = qh(r.constructor),
        A = new Float32Array(r.length);
      for (let y = 0, E = r.length; y < E; y++) A[y] = r[y] * h;
      r = A;
    }
    return r;
  }
  _createCubicSplineTrackInterpolant(c) {
    ((c.createInterpolant = function (h) {
      const A = this instanceof IA ? E1 : yy;
      return new A(this.times, this.values, this.getValueSize() / 3, h);
    }),
      (c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0));
  }
}
function H1(d, c, r) {
  const h = c.attributes,
    A = new lp();
  if (h.POSITION !== void 0) {
    const S = r.json.accessors[h.POSITION],
      B = S.min,
      C = S.max;
    if (B !== void 0 && C !== void 0) {
      if ((A.set(new Zl(B[0], B[1], B[2]), new Zl(C[0], C[1], C[2])), S.normalized)) {
        const T = qh(Mf[S.componentType]);
        (A.min.multiplyScalar(T), A.max.multiplyScalar(T));
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const y = c.targets;
  if (y !== void 0) {
    const S = new Zl(),
      B = new Zl();
    for (let C = 0, T = y.length; C < T; C++) {
      const g = y[C];
      if (g.POSITION !== void 0) {
        const D = r.json.accessors[g.POSITION],
          U = D.min,
          Q = D.max;
        if (U !== void 0 && Q !== void 0) {
          if (
            (B.setX(Math.max(Math.abs(U[0]), Math.abs(Q[0]))),
            B.setY(Math.max(Math.abs(U[1]), Math.abs(Q[1]))),
            B.setZ(Math.max(Math.abs(U[2]), Math.abs(Q[2]))),
            D.normalized)
          ) {
            const W = qh(Mf[D.componentType]);
            B.multiplyScalar(W);
          }
          S.max(B);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    A.expandByVector(S);
  }
  d.boundingBox = A;
  const E = new ap();
  (A.getCenter(E.center), (E.radius = A.min.distanceTo(A.max) / 2), (d.boundingSphere = E));
}
function Jv(d, c, r) {
  const h = c.attributes,
    A = [];
  function y(E, S) {
    return r.getDependency("accessor", E).then(function (B) {
      d.setAttribute(S, B);
    });
  }
  for (const E in h) {
    const S = Xh[E] || E.toLowerCase();
    S in d.attributes || A.push(y(h[E], S));
  }
  if (c.indices !== void 0 && !d.index) {
    const E = r.getDependency("accessor", c.indices).then(function (S) {
      d.setIndex(S);
    });
    A.push(E);
  }
  return (
    ti(d, c),
    H1(d, c, r),
    Promise.all(A).then(function () {
      return c.targets !== void 0 ? g1(d, c.targets, r) : d;
    })
  );
}
const Gh = new WeakMap();
class G1 extends Yv {
  constructor(c) {
    (super(c),
      (this.decoderPath = ""),
      (this.decoderConfig = {}),
      (this.decoderBinary = null),
      (this.decoderPending = null),
      (this.workerLimit = 4),
      (this.workerPool = []),
      (this.workerNextTaskID = 1),
      (this.workerSourceURL = ""),
      (this.defaultAttributeIDs = { position: "POSITION", normal: "NORMAL", color: "COLOR", uv: "TEX_COORD" }),
      (this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array",
      }));
  }
  setDecoderPath(c) {
    return ((this.decoderPath = c), this);
  }
  setDecoderConfig(c) {
    return ((this.decoderConfig = c), this);
  }
  setWorkerLimit(c) {
    return ((this.workerLimit = c), this);
  }
  load(c, r, h, A) {
    const y = new am(this.manager);
    (y.setPath(this.path),
      y.setResponseType("arraybuffer"),
      y.setRequestHeader(this.requestHeader),
      y.setWithCredentials(this.withCredentials),
      y.load(
        c,
        (E) => {
          const S = {
            attributeIDs: this.defaultAttributeIDs,
            attributeTypes: this.defaultAttributeTypes,
            useUniqueIDs: !1,
          };
          this.decodeGeometry(E, S).then(r).catch(A);
        },
        h,
        A,
      ));
  }
  decodeDracoFile(c, r, h, A) {
    const y = {
      attributeIDs: h || this.defaultAttributeIDs,
      attributeTypes: A || this.defaultAttributeTypes,
      useUniqueIDs: !!h,
    };
    this.decodeGeometry(c, y).then(r);
  }
  decodeGeometry(c, r) {
    for (const B in r.attributeTypes) {
      const C = r.attributeTypes[B];
      C.BYTES_PER_ELEMENT !== void 0 && (r.attributeTypes[B] = C.name);
    }
    const h = JSON.stringify(r);
    if (Gh.has(c)) {
      const B = Gh.get(c);
      if (B.key === h) return B.promise;
      if (c.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.",
        );
    }
    let A;
    const y = this.workerNextTaskID++,
      E = c.byteLength,
      S = this._getWorker(y, E)
        .then(
          (B) => (
            (A = B),
            new Promise((C, T) => {
              ((A._callbacks[y] = { resolve: C, reject: T }),
                A.postMessage({ type: "decode", id: y, taskConfig: r, buffer: c }, [c]));
            })
          ),
        )
        .then((B) => this._createGeometry(B.geometry));
    return (
      S.catch(() => !0).then(() => {
        A && y && this._releaseTask(A, y);
      }),
      Gh.set(c, { key: h, promise: S }),
      S
    );
  }
  _createGeometry(c) {
    const r = new vm();
    c.index && r.setIndex(new xa(c.index.array, 1));
    for (let h = 0; h < c.attributes.length; h++) {
      const A = c.attributes[h],
        y = A.name,
        E = A.array,
        S = A.itemSize;
      r.setAttribute(y, new xa(E, S));
    }
    return r;
  }
  _loadLibrary(c, r) {
    const h = new am(this.manager);
    return (
      h.setPath(this.decoderPath),
      h.setResponseType(r),
      h.setWithCredentials(this.withCredentials),
      new Promise((A, y) => {
        h.load(c, A, void 0, y);
      })
    );
  }
  preload() {
    return (this._initDecoder(), this);
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const c = typeof WebAssembly != "object" || this.decoderConfig.type === "js",
      r = [];
    return (
      c
        ? r.push(this._loadLibrary("draco_decoder.js", "text"))
        : (r.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
          r.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
      (this.decoderPending = Promise.all(r).then((h) => {
        const A = h[0];
        c || (this.decoderConfig.wasmBinary = h[1]);
        const y = O1.toString(),
          E = ["/* draco decoder */", A, "", "/* worker */", y.substring(y.indexOf("{") + 1, y.lastIndexOf("}"))].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([E]));
      })),
      this.decoderPending
    );
  }
  _getWorker(c, r) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const A = new Worker(this.workerSourceURL);
        ((A._callbacks = {}),
          (A._taskCosts = {}),
          (A._taskLoad = 0),
          A.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
          (A.onmessage = function (y) {
            const E = y.data;
            switch (E.type) {
              case "decode":
                A._callbacks[E.id].resolve(E);
                break;
              case "error":
                A._callbacks[E.id].reject(E);
                break;
              default:
                console.error('THREE.DRACOLoader: Unexpected message, "' + E.type + '"');
            }
          }),
          this.workerPool.push(A));
      } else
        this.workerPool.sort(function (A, y) {
          return A._taskLoad > y._taskLoad ? -1 : 1;
        });
      const h = this.workerPool[this.workerPool.length - 1];
      return ((h._taskCosts[c] = r), (h._taskLoad += r), h);
    });
  }
  _releaseTask(c, r) {
    ((c._taskLoad -= c._taskCosts[r]), delete c._callbacks[r], delete c._taskCosts[r]);
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((c) => c._taskLoad),
    );
  }
  dispose() {
    for (let c = 0; c < this.workerPool.length; ++c) this.workerPool[c].terminate();
    return ((this.workerPool.length = 0), this);
  }
}
function O1() {
  let d, c;
  onmessage = function (E) {
    const S = E.data;
    switch (S.type) {
      case "init":
        ((d = S.decoderConfig),
          (c = new Promise(function (T) {
            ((d.onModuleLoaded = function (g) {
              T({ draco: g });
            }),
              DracoDecoderModule(d));
          })));
        break;
      case "decode":
        const B = S.buffer,
          C = S.taskConfig;
        c.then((T) => {
          const g = T.draco,
            D = new g.Decoder(),
            U = new g.DecoderBuffer();
          U.Init(new Int8Array(B), B.byteLength);
          try {
            const Q = r(g, D, U, C),
              W = Q.attributes.map((w) => w.array.buffer);
            (Q.index && W.push(Q.index.array.buffer), self.postMessage({ type: "decode", id: S.id, geometry: Q }, W));
          } catch (Q) {
            (console.error(Q), self.postMessage({ type: "error", id: S.id, error: Q.message }));
          } finally {
            (g.destroy(U), g.destroy(D));
          }
        });
        break;
    }
  };
  function r(E, S, B, C) {
    const T = C.attributeIDs,
      g = C.attributeTypes;
    let D, U;
    const Q = S.GetEncodedGeometryType(B);
    if (Q === E.TRIANGULAR_MESH) ((D = new E.Mesh()), (U = S.DecodeBufferToMesh(B, D)));
    else if (Q === E.POINT_CLOUD) ((D = new E.PointCloud()), (U = S.DecodeBufferToPointCloud(B, D)));
    else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!U.ok() || D.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + U.error_msg());
    const W = { index: null, attributes: [] };
    for (const w in T) {
      const j = self[g[w]];
      let K, nt;
      if (C.useUniqueIDs) ((nt = T[w]), (K = S.GetAttributeByUniqueId(D, nt)));
      else {
        if (((nt = S.GetAttributeId(D, E[T[w]])), nt === -1)) continue;
        K = S.GetAttribute(D, nt);
      }
      W.attributes.push(A(E, S, D, w, j, K));
    }
    return (Q === E.TRIANGULAR_MESH && (W.index = h(E, S, D)), E.destroy(D), W);
  }
  function h(E, S, B) {
    const T = B.num_faces() * 3,
      g = T * 4,
      D = E._malloc(g);
    S.GetTrianglesUInt32Array(B, g, D);
    const U = new Uint32Array(E.HEAPF32.buffer, D, T).slice();
    return (E._free(D), { array: U, itemSize: 1 });
  }
  function A(E, S, B, C, T, g) {
    const D = g.num_components(),
      Q = B.num_points() * D,
      W = Q * T.BYTES_PER_ELEMENT,
      w = y(E, T),
      j = E._malloc(W);
    S.GetAttributeDataArrayForAllPoints(B, g, w, W, j);
    const K = new T(E.HEAPF32.buffer, j, Q).slice();
    return (E._free(j), { name: C, array: K, itemSize: D });
  }
  function y(E, S) {
    switch (S) {
      case Float32Array:
        return E.DT_FLOAT32;
      case Int8Array:
        return E.DT_INT8;
      case Int16Array:
        return E.DT_INT16;
      case Int32Array:
        return E.DT_INT32;
      case Uint8Array:
        return E.DT_UINT8;
      case Uint16Array:
        return E.DT_UINT16;
      case Uint32Array:
        return E.DT_UINT32;
    }
  }
}
let $d;
const Oh = () => {
    if ($d) return $d;
    const d =
        "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",
      c =
        "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",
      r = new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0,
        65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11,
      ]),
      h = new Uint8Array([
        32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12, 16, 128, 9, 116, 64, 19, 113, 127, 15, 10,
        21, 22, 14, 255, 66, 24, 54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144, 27, 87, 131, 44,
        45, 74, 156, 154, 70, 167,
      ]);
    if (typeof WebAssembly != "object") return { supported: !1 };
    let A = d;
    WebAssembly.validate(r) && (A = c);
    let y;
    const E = WebAssembly.instantiate(S(A), {}).then((g) => {
      ((y = g.instance), y.exports.__wasm_call_ctors());
    });
    function S(g) {
      const D = new Uint8Array(g.length);
      for (let Q = 0; Q < g.length; ++Q) {
        const W = g.charCodeAt(Q);
        D[Q] = W > 96 ? W - 71 : W > 64 ? W - 65 : W > 47 ? W + 4 : W > 46 ? 63 : 62;
      }
      let U = 0;
      for (let Q = 0; Q < g.length; ++Q) D[U++] = D[Q] < 60 ? h[D[Q]] : (D[Q] - 60) * 64 + D[++Q];
      return D.buffer.slice(0, U);
    }
    function B(g, D, U, Q, W, w) {
      const j = y.exports.sbrk,
        K = (U + 3) & -4,
        nt = j(K * Q),
        at = j(W.length),
        dt = new Uint8Array(y.exports.memory.buffer);
      dt.set(W, at);
      const ct = g(nt, U, Q, at, W.length);
      if ((ct === 0 && w && w(nt, K, Q), D.set(dt.subarray(nt, nt + U * Q)), j(nt - j(0)), ct !== 0))
        throw new Error(`Malformed buffer data: ${ct}`);
    }
    const C = {
        0: "",
        1: "meshopt_decodeFilterOct",
        2: "meshopt_decodeFilterQuat",
        3: "meshopt_decodeFilterExp",
        NONE: "",
        OCTAHEDRAL: "meshopt_decodeFilterOct",
        QUATERNION: "meshopt_decodeFilterQuat",
        EXPONENTIAL: "meshopt_decodeFilterExp",
      },
      T = {
        0: "meshopt_decodeVertexBuffer",
        1: "meshopt_decodeIndexBuffer",
        2: "meshopt_decodeIndexSequence",
        ATTRIBUTES: "meshopt_decodeVertexBuffer",
        TRIANGLES: "meshopt_decodeIndexBuffer",
        INDICES: "meshopt_decodeIndexSequence",
      };
    return (
      ($d = {
        ready: E,
        supported: !0,
        decodeVertexBuffer(g, D, U, Q, W) {
          B(y.exports.meshopt_decodeVertexBuffer, g, D, U, Q, y.exports[C[W]]);
        },
        decodeIndexBuffer(g, D, U, Q) {
          B(y.exports.meshopt_decodeIndexBuffer, g, D, U, Q);
        },
        decodeIndexSequence(g, D, U, Q) {
          B(y.exports.meshopt_decodeIndexSequence, g, D, U, Q);
        },
        decodeGltfBuffer(g, D, U, Q, W, w) {
          B(y.exports[T[W]], g, D, U, Q, y.exports[C[w]]);
        },
      }),
      $d
    );
  },
  _h = (d) => d === Object(d) && !Array.isArray(d) && typeof d != "function";
function py(d, c) {
  const r = $c((y) => y.gl),
    h = wi(Am, _h(d) ? Object.values(d) : d);
  return (
    st.useLayoutEffect(() => {
      c?.(h);
    }, [c]),
    st.useEffect(() => {
      if ("initTexture" in r) {
        let y = [];
        (Array.isArray(h) ? (y = h) : h instanceof im ? (y = [h]) : _h(h) && (y = Object.values(h)),
          y.forEach((E) => {
            E instanceof im && r.initTexture(E);
          }));
      }
    }, [r, h]),
    st.useMemo(() => {
      if (_h(d)) {
        const y = {};
        let E = 0;
        for (const S in d) y[S] = h[E++];
        return y;
      } else return h;
    }, [d, h])
  );
}
py.preload = (d) => wi.preload(Am, d);
py.clear = (d) => wi.clear(Am, d);
var _1 = Object.defineProperty,
  U1 = (d, c, r) => (c in d ? _1(d, c, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (d[c] = r)),
  re = (d, c, r) => (U1(d, typeof c != "symbol" ? c + "" : c, r), r);
function Uh(d, c, r, h, A) {
  let y;
  if (
    ((d = d.subarray || d.slice ? d : d.buffer),
    (r = r.subarray || r.slice ? r : r.buffer),
    (d = c ? (d.subarray ? d.subarray(c, A && c + A) : d.slice(c, A && c + A)) : d),
    r.set)
  )
    r.set(d, h);
  else for (y = 0; y < d.length; y++) r[y + h] = d[y];
  return r;
}
function N1(d) {
  return d instanceof Float32Array
    ? d
    : d instanceof vm
      ? d.getAttribute("position").array
      : d
          .map((c) => {
            const r = Array.isArray(c);
            return c instanceof Zl
              ? [c.x, c.y, c.z]
              : c instanceof ts
                ? [c.x, c.y, 0]
                : r && c.length === 3
                  ? [c[0], c[1], c[2]]
                  : r && c.length === 2
                    ? [c[0], c[1], 0]
                    : c;
          })
          .flat();
}
class I1 extends vm {
  constructor() {
    (super(),
      re(this, "type", "MeshLine"),
      re(this, "isMeshLine", !0),
      re(this, "positions", []),
      re(this, "previous", []),
      re(this, "next", []),
      re(this, "side", []),
      re(this, "width", []),
      re(this, "indices_array", []),
      re(this, "uvs", []),
      re(this, "counters", []),
      re(this, "widthCallback", null),
      re(this, "_attributes"),
      re(this, "_points", []),
      re(this, "points"),
      re(this, "matrixWorld", new yr()),
      Object.defineProperties(this, {
        points: {
          enumerable: !0,
          get() {
            return this._points;
          },
          set(c) {
            this.setPoints(c, this.widthCallback);
          },
        },
      }));
  }
  setMatrixWorld(c) {
    this.matrixWorld = c;
  }
  setPoints(c, r) {
    if (
      ((c = N1(c)),
      (this._points = c),
      (this.widthCallback = r ?? null),
      (this.positions = []),
      (this.counters = []),
      c.length && c[0] instanceof Zl)
    )
      for (let h = 0; h < c.length; h++) {
        const A = c[h],
          y = h / (c.length - 1);
        (this.positions.push(A.x, A.y, A.z),
          this.positions.push(A.x, A.y, A.z),
          this.counters.push(y),
          this.counters.push(y));
      }
    else
      for (let h = 0; h < c.length; h += 3) {
        const A = h / (c.length - 1);
        (this.positions.push(c[h], c[h + 1], c[h + 2]),
          this.positions.push(c[h], c[h + 1], c[h + 2]),
          this.counters.push(A),
          this.counters.push(A));
      }
    this.process();
  }
  compareV3(c, r) {
    const h = c * 6,
      A = r * 6;
    return (
      this.positions[h] === this.positions[A] &&
      this.positions[h + 1] === this.positions[A + 1] &&
      this.positions[h + 2] === this.positions[A + 2]
    );
  }
  copyV3(c) {
    const r = c * 6;
    return [this.positions[r], this.positions[r + 1], this.positions[r + 2]];
  }
  process() {
    const c = this.positions.length / 6;
    ((this.previous = []),
      (this.next = []),
      (this.side = []),
      (this.width = []),
      (this.indices_array = []),
      (this.uvs = []));
    let r, h;
    (this.compareV3(0, c - 1) ? (h = this.copyV3(c - 2)) : (h = this.copyV3(0)),
      this.previous.push(h[0], h[1], h[2]),
      this.previous.push(h[0], h[1], h[2]));
    for (let A = 0; A < c; A++) {
      if (
        (this.side.push(1),
        this.side.push(-1),
        this.widthCallback ? (r = this.widthCallback(A / (c - 1))) : (r = 1),
        this.width.push(r),
        this.width.push(r),
        this.uvs.push(A / (c - 1), 0),
        this.uvs.push(A / (c - 1), 1),
        A < c - 1)
      ) {
        ((h = this.copyV3(A)), this.previous.push(h[0], h[1], h[2]), this.previous.push(h[0], h[1], h[2]));
        const y = A * 2;
        (this.indices_array.push(y, y + 1, y + 2), this.indices_array.push(y + 2, y + 1, y + 3));
      }
      A > 0 && ((h = this.copyV3(A)), this.next.push(h[0], h[1], h[2]), this.next.push(h[0], h[1], h[2]));
    }
    (this.compareV3(c - 1, 0) ? (h = this.copyV3(1)) : (h = this.copyV3(c - 1)),
      this.next.push(h[0], h[1], h[2]),
      this.next.push(h[0], h[1], h[2]),
      !this._attributes || this._attributes.position.count !== this.counters.length
        ? (this._attributes = {
            position: new xa(new Float32Array(this.positions), 3),
            previous: new xa(new Float32Array(this.previous), 3),
            next: new xa(new Float32Array(this.next), 3),
            side: new xa(new Float32Array(this.side), 1),
            width: new xa(new Float32Array(this.width), 1),
            uv: new xa(new Float32Array(this.uvs), 2),
            index: new xa(new Uint16Array(this.indices_array), 1),
            counters: new xa(new Float32Array(this.counters), 1),
          })
        : (this._attributes.position.copyArray(new Float32Array(this.positions)),
          (this._attributes.position.needsUpdate = !0),
          this._attributes.previous.copyArray(new Float32Array(this.previous)),
          (this._attributes.previous.needsUpdate = !0),
          this._attributes.next.copyArray(new Float32Array(this.next)),
          (this._attributes.next.needsUpdate = !0),
          this._attributes.side.copyArray(new Float32Array(this.side)),
          (this._attributes.side.needsUpdate = !0),
          this._attributes.width.copyArray(new Float32Array(this.width)),
          (this._attributes.width.needsUpdate = !0),
          this._attributes.uv.copyArray(new Float32Array(this.uvs)),
          (this._attributes.uv.needsUpdate = !0),
          this._attributes.index.copyArray(new Uint16Array(this.indices_array)),
          (this._attributes.index.needsUpdate = !0)),
      this.setAttribute("position", this._attributes.position),
      this.setAttribute("previous", this._attributes.previous),
      this.setAttribute("next", this._attributes.next),
      this.setAttribute("side", this._attributes.side),
      this.setAttribute("width", this._attributes.width),
      this.setAttribute("uv", this._attributes.uv),
      this.setAttribute("counters", this._attributes.counters),
      this.setAttribute("position", this._attributes.position),
      this.setAttribute("previous", this._attributes.previous),
      this.setAttribute("next", this._attributes.next),
      this.setAttribute("side", this._attributes.side),
      this.setAttribute("width", this._attributes.width),
      this.setAttribute("uv", this._attributes.uv),
      this.setAttribute("counters", this._attributes.counters),
      this.setIndex(this._attributes.index),
      this.computeBoundingSphere(),
      this.computeBoundingBox());
  }
  advance({ x: c, y: r, z: h }) {
    const A = this._attributes.position.array,
      y = this._attributes.previous.array,
      E = this._attributes.next.array,
      S = A.length;
    (Uh(A, 0, y, 0, S),
      Uh(A, 6, A, 0, S - 6),
      (A[S - 6] = c),
      (A[S - 5] = r),
      (A[S - 4] = h),
      (A[S - 3] = c),
      (A[S - 2] = r),
      (A[S - 1] = h),
      Uh(A, 6, E, 0, S - 6),
      (E[S - 6] = c),
      (E[S - 5] = r),
      (E[S - 4] = h),
      (E[S - 3] = c),
      (E[S - 2] = r),
      (E[S - 1] = h),
      (this._attributes.position.needsUpdate = !0),
      (this._attributes.previous.needsUpdate = !0),
      (this._attributes.next.needsUpdate = !0));
  }
}
const z1 = `
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`,
  J1 = parseInt(Kv.replace(/\D+/g, "")),
  x1 = J1 >= 154 ? "colorspace_fragment" : "encodings_fragment",
  j1 = `
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${x1}>
  }
`;
class w1 extends np {
  constructor(c) {
    (super({
      uniforms: {
        ...up.fog,
        lineWidth: { value: 1 },
        map: { value: null },
        useMap: { value: 0 },
        alphaMap: { value: null },
        useAlphaMap: { value: 0 },
        color: { value: new jn(16777215) },
        gradient: { value: [new jn(16711680), new jn(65280)] },
        opacity: { value: 1 },
        resolution: { value: new ts(1, 1) },
        sizeAttenuation: { value: 1 },
        dashArray: { value: 0 },
        dashOffset: { value: 0 },
        dashRatio: { value: 0.5 },
        useDash: { value: 0 },
        useGradient: { value: 0 },
        visibility: { value: 1 },
        alphaTest: { value: 0 },
        repeat: { value: new ts(1, 1) },
      },
      vertexShader: z1,
      fragmentShader: j1,
    }),
      re(this, "lineWidth"),
      re(this, "map"),
      re(this, "useMap"),
      re(this, "alphaMap"),
      re(this, "useAlphaMap"),
      re(this, "color"),
      re(this, "gradient"),
      re(this, "resolution"),
      re(this, "sizeAttenuation"),
      re(this, "dashArray"),
      re(this, "dashOffset"),
      re(this, "dashRatio"),
      re(this, "useDash"),
      re(this, "useGradient"),
      re(this, "visibility"),
      re(this, "repeat"),
      (this.type = "MeshLineMaterial"),
      Object.defineProperties(this, {
        lineWidth: {
          enumerable: !0,
          get() {
            return this.uniforms.lineWidth.value;
          },
          set(r) {
            this.uniforms.lineWidth.value = r;
          },
        },
        map: {
          enumerable: !0,
          get() {
            return this.uniforms.map.value;
          },
          set(r) {
            this.uniforms.map.value = r;
          },
        },
        useMap: {
          enumerable: !0,
          get() {
            return this.uniforms.useMap.value;
          },
          set(r) {
            this.uniforms.useMap.value = r;
          },
        },
        alphaMap: {
          enumerable: !0,
          get() {
            return this.uniforms.alphaMap.value;
          },
          set(r) {
            this.uniforms.alphaMap.value = r;
          },
        },
        useAlphaMap: {
          enumerable: !0,
          get() {
            return this.uniforms.useAlphaMap.value;
          },
          set(r) {
            this.uniforms.useAlphaMap.value = r;
          },
        },
        color: {
          enumerable: !0,
          get() {
            return this.uniforms.color.value;
          },
          set(r) {
            this.uniforms.color.value = r;
          },
        },
        gradient: {
          enumerable: !0,
          get() {
            return this.uniforms.gradient.value;
          },
          set(r) {
            this.uniforms.gradient.value = r;
          },
        },
        opacity: {
          enumerable: !0,
          get() {
            return this.uniforms.opacity.value;
          },
          set(r) {
            this.uniforms.opacity.value = r;
          },
        },
        resolution: {
          enumerable: !0,
          get() {
            return this.uniforms.resolution.value;
          },
          set(r) {
            this.uniforms.resolution.value.copy(r);
          },
        },
        sizeAttenuation: {
          enumerable: !0,
          get() {
            return this.uniforms.sizeAttenuation.value;
          },
          set(r) {
            this.uniforms.sizeAttenuation.value = r;
          },
        },
        dashArray: {
          enumerable: !0,
          get() {
            return this.uniforms.dashArray.value;
          },
          set(r) {
            ((this.uniforms.dashArray.value = r), (this.useDash = r !== 0 ? 1 : 0));
          },
        },
        dashOffset: {
          enumerable: !0,
          get() {
            return this.uniforms.dashOffset.value;
          },
          set(r) {
            this.uniforms.dashOffset.value = r;
          },
        },
        dashRatio: {
          enumerable: !0,
          get() {
            return this.uniforms.dashRatio.value;
          },
          set(r) {
            this.uniforms.dashRatio.value = r;
          },
        },
        useDash: {
          enumerable: !0,
          get() {
            return this.uniforms.useDash.value;
          },
          set(r) {
            this.uniforms.useDash.value = r;
          },
        },
        useGradient: {
          enumerable: !0,
          get() {
            return this.uniforms.useGradient.value;
          },
          set(r) {
            this.uniforms.useGradient.value = r;
          },
        },
        visibility: {
          enumerable: !0,
          get() {
            return this.uniforms.visibility.value;
          },
          set(r) {
            this.uniforms.visibility.value = r;
          },
        },
        alphaTest: {
          enumerable: !0,
          get() {
            return this.uniforms.alphaTest.value;
          },
          set(r) {
            this.uniforms.alphaTest.value = r;
          },
        },
        repeat: {
          enumerable: !0,
          get() {
            return this.uniforms.repeat.value;
          },
          set(r) {
            this.uniforms.repeat.value.copy(r);
          },
        },
      }),
      this.setValues(c));
  }
  copy(c) {
    return (
      super.copy(c),
      (this.lineWidth = c.lineWidth),
      (this.map = c.map),
      (this.useMap = c.useMap),
      (this.alphaMap = c.alphaMap),
      (this.useAlphaMap = c.useAlphaMap),
      this.color.copy(c.color),
      (this.gradient = c.gradient),
      (this.opacity = c.opacity),
      this.resolution.copy(c.resolution),
      (this.sizeAttenuation = c.sizeAttenuation),
      (this.dashArray = c.dashArray),
      (this.dashOffset = c.dashOffset),
      (this.dashRatio = c.dashRatio),
      (this.useDash = c.useDash),
      (this.useGradient = c.useGradient),
      (this.visibility = c.visibility),
      (this.alphaTest = c.alphaTest),
      this.repeat.copy(c.repeat),
      this
    );
  }
}
let tm = null,
  By = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function Ey(d = !0, c = !0, r) {
  return (h) => {
    (r && r(h),
      d && (tm || (tm = new G1()), tm.setDecoderPath(typeof d == "string" ? d : By), h.setDRACOLoader(tm)),
      c && h.setMeshoptDecoder(typeof Oh == "function" ? Oh() : Oh));
  };
}
const kh = (d, c, r, h) => wi(Ph, d, Ey(c, r, h));
kh.preload = (d, c, r, h) => wi.preload(Ph, d, Ey(c, r, h));
kh.clear = (d) => wi.clear(Ph, d);
kh.setDecoderPath = (d) => {
  By = d;
};
function Q1(d, c, r) {
  const h = $c((U) => U.size),
    A = $c((U) => U.viewport),
    y = typeof d == "number" ? d : h.width * A.dpr,
    E = h.height * A.dpr,
    S = (typeof d == "number" ? r : d) || {},
    { samples: B = 0, depth: C, ...T } = S,
    g = C ?? S.depthBuffer,
    D = st.useMemo(() => {
      const U = new ip(y, E, { minFilter: um, magFilter: um, type: cp, ...T });
      return (g && (U.depthTexture = new sp(y, E, fp)), (U.samples = B), U);
    }, []);
  return (
    st.useLayoutEffect(() => {
      (D.setSize(y, E), B && (D.samples = B));
    }, [B, D, y, E]),
    st.useEffect(() => () => D.dispose(), []),
    D
  );
}
const K1 = (d) => typeof d == "function",
  W1 = st.forwardRef(({ envMap: d, resolution: c = 256, frames: r = 1 / 0, makeDefault: h, children: A, ...y }, E) => {
    const S = $c(({ set: w }) => w),
      B = $c(({ camera: w }) => w),
      C = $c(({ size: w }) => w),
      T = st.useRef(null);
    st.useImperativeHandle(E, () => T.current, []);
    const g = st.useRef(null),
      D = Q1(c);
    (st.useLayoutEffect(() => {
      y.manual || (T.current.aspect = C.width / C.height);
    }, [C, y]),
      st.useLayoutEffect(() => {
        T.current.updateProjectionMatrix();
      }));
    let U = 0,
      Q = null;
    const W = K1(A);
    return (
      Ih((w) => {
        W &&
          (r === 1 / 0 || U < r) &&
          ((g.current.visible = !1),
          w.gl.setRenderTarget(D),
          (Q = w.scene.background),
          d && (w.scene.background = d),
          w.gl.render(w.scene, T.current),
          (w.scene.background = Q),
          w.gl.setRenderTarget(null),
          (g.current.visible = !0),
          U++);
      }),
      st.useLayoutEffect(() => {
        if (h) {
          const w = B;
          return (S(() => ({ camera: T.current })), () => S(() => ({ camera: w })));
        }
      }, [T, h, S]),
      st.createElement(
        st.Fragment,
        null,
        st.createElement("perspectiveCamera", rm({ ref: T }, y), !W && A),
        st.createElement("group", { ref: g }, W && A(D.texture)),
      )
    );
  }),
  L1 = "modulepreload",
  Y1 = function (d) {
    return "/" + d;
  },
  xv = {},
  P1 = function (c, r, h) {
    let A = Promise.resolve();
    if (r && r.length > 0 && typeof window < "u") {
      let B = function (C) {
        return Promise.all(
          C.map((T) =>
            Promise.resolve(T).then(
              (g) => ({ status: "fulfilled", value: g }),
              (g) => ({ status: "rejected", reason: g }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const E = document.querySelector("meta[property=csp-nonce]"),
        S = E?.nonce || E?.getAttribute("nonce");
      A = B(
        r.map((C) => {
          if (((C = Y1(C)), C in xv)) return;
          xv[C] = !0;
          const T = C.endsWith(".css"),
            g = T ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${C}"]${g}`)) return;
          const D = document.createElement("link");
          if (
            ((D.rel = T ? "stylesheet" : L1),
            T || (D.as = "script"),
            (D.crossOrigin = ""),
            (D.href = C),
            S && D.setAttribute("nonce", S),
            document.head.appendChild(D),
            T)
          )
            return new Promise((U, Q) => {
              (D.addEventListener("load", U),
                D.addEventListener("error", () => Q(new Error(`Unable to preload CSS for ${C}`))));
            });
        }),
      );
    }
    function y(E) {
      const S = new Event("vite:preloadError", { cancelable: !0 });
      if (((S.payload = E), window.dispatchEvent(S), !S.defaultPrevented)) throw E;
    }
    return A.then((E) => {
      for (const S of E || []) S.status === "rejected" && y(S.reason);
      return c().catch(y);
    });
  };
function k1(d, c) {
  const r = st.useRef(null),
    [h] = st.useState(() => (c ? (c instanceof nm ? { current: c } : c) : r)),
    [A] = st.useState(() => new op(void 0));
  st.useLayoutEffect(() => {
    (c && (h.current = c instanceof nm ? c : c.current), (A._root = h.current));
  });
  const y = st.useRef({}),
    E = st.useMemo(() => {
      const S = {};
      return (
        d.forEach((B) =>
          Object.defineProperty(S, B.name, {
            enumerable: !0,
            get() {
              if (h.current) return y.current[B.name] || (y.current[B.name] = A.clipAction(B, h.current));
            },
            configurable: !0,
          }),
        ),
        { ref: h, clips: d, actions: S, names: d.map((B) => B.name), mixer: A }
      );
    }, [d]);
  return (
    Ih((S, B) => A.update(B)),
    st.useEffect(() => {
      const S = h.current;
      return () => {
        ((y.current = {}),
          A.stopAllAction(),
          Object.values(E.actions).forEach((B) => {
            S && A.uncacheAction(B, S);
          }));
      };
    }, [d]),
    E
  );
}
export {
  Z1 as C,
  F1 as H,
  w1 as M,
  W1 as P,
  hr as R,
  P1 as _,
  Df as a,
  yp as b,
  Ep as c,
  Ih as d,
  vB as e,
  I1 as f,
  Zh as g,
  kh as h,
  k1 as i,
  ja as j,
  V1 as k,
  py as l,
  st as r,
  $c as u,
};
