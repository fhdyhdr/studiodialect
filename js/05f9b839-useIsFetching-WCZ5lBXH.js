import { r as b, j as mt } from "../js/12cc8a0a-r3f-BJIQ5yep.js";
var A = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(t), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  gt = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: (t) => clearInterval(t),
  },
  bt = class {
    #t = gt;
    #e = !1;
    setTimeoutProvider(t) {
      this.#t = t;
    }
    setTimeout(t, e) {
      return this.#t.setTimeout(t, e);
    }
    clearTimeout(t) {
      this.#t.clearTimeout(t);
    }
    setInterval(t, e) {
      return this.#t.setInterval(t, e);
    }
    clearInterval(t) {
      this.#t.clearInterval(t);
    }
  },
  M = new bt();
function Ot(t) {
  setTimeout(t, 0);
}
var T = typeof window > "u" || "Deno" in globalThis;
function v() {}
function Ct(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function L(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function ot(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function F(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function C(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Z(t, e) {
  const { type: s = "all", exact: i, fetchStatus: r, predicate: a, queryKey: o, stale: n } = t;
  if (o) {
    if (i) {
      if (e.queryHash !== W(o, e.options)) return !1;
    } else if (!x(e.queryKey, o)) return !1;
  }
  if (s !== "all") {
    const u = e.isActive();
    if ((s === "active" && !u) || (s === "inactive" && u)) return !1;
  }
  return !((typeof n == "boolean" && e.isStale() !== n) || (r && r !== e.state.fetchStatus) || (a && !a(e)));
}
function X(t, e) {
  const { exact: s, status: i, predicate: r, mutationKey: a } = t;
  if (a) {
    if (!e.options.mutationKey) return !1;
    if (s) {
      if (D(e.options.mutationKey) !== D(a)) return !1;
    } else if (!x(e.options.mutationKey, a)) return !1;
  }
  return !((i && e.state.status !== i) || (r && !r(e)));
}
function W(t, e) {
  return (e?.queryKeyHashFn || D)(t);
}
function D(t) {
  return JSON.stringify(t, (e, s) =>
    H(s)
      ? Object.keys(s)
          .sort()
          .reduce((i, r) => ((i[r] = s[r]), i), {})
      : s,
  );
}
function x(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
      ? !1
      : t && e && typeof t == "object" && typeof e == "object"
        ? Object.keys(e).every((s) => x(t[s], e[s]))
        : !1;
}
var St = Object.prototype.hasOwnProperty;
function ut(t, e) {
  if (t === e) return t;
  const s = Y(t) && Y(e);
  if (!s && !(H(t) && H(e))) return e;
  const r = (s ? t : Object.keys(t)).length,
    a = s ? e : Object.keys(e),
    o = a.length,
    n = s ? new Array(o) : {};
  let u = 0;
  for (let f = 0; f < o; f++) {
    const h = s ? f : a[f],
      y = t[h],
      c = e[h];
    if (y === c) {
      ((n[h] = y), (s ? f < r : St.call(t, h)) && u++);
      continue;
    }
    if (y === null || c === null || typeof y != "object" || typeof c != "object") {
      n[h] = c;
      continue;
    }
    const S = ut(y, c);
    ((n[h] = S), S === y && u++);
  }
  return r === o && u === r ? t : n;
}
function K(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const s in t) if (t[s] !== e[s]) return !1;
  return !0;
}
function Y(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function H(t) {
  if (!tt(t)) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const s = e.prototype;
  return !(!tt(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function tt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function wt(t) {
  return new Promise((e) => {
    M.setTimeout(e, t);
  });
}
function N(t, e, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(t, e)
    : s.structuralSharing !== !1
      ? ut(t, e)
      : e;
}
function Rt(t, e, s = 0) {
  const i = [...t, e];
  return s && i.length > s ? i.slice(1) : i;
}
function Pt(t, e, s = 0) {
  const i = [e, ...t];
  return s && i.length > s ? i.slice(0, -1) : i;
}
var V = Symbol();
function ht(t, e) {
  return !t.queryFn && e?.initialPromise
    ? () => e.initialPromise
    : !t.queryFn || t.queryFn === V
      ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
      : t.queryFn;
}
function Ft(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var Et = class extends A {
    #t;
    #e;
    #s;
    constructor() {
      (super(),
        (this.#s = (t) => {
          if (!T && window.addEventListener) {
            const e = () => t();
            return (
              window.addEventListener("visibilitychange", e, !1),
              () => {
                window.removeEventListener("visibilitychange", e);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#s);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(t) {
      ((this.#s = t),
        this.#e?.(),
        (this.#e = t((e) => {
          typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(t) {
      this.#t !== t && ((this.#t = t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((e) => {
        e(t);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden";
    }
  },
  $ = new Et();
function G() {
  let t, e;
  const s = new Promise((r, a) => {
    ((t = r), (e = a));
  });
  ((s.status = "pending"), s.catch(() => {}));
  function i(r) {
    (Object.assign(s, r), delete s.resolve, delete s.reject);
  }
  return (
    (s.resolve = (r) => {
      (i({ status: "fulfilled", value: r }), t(r));
    }),
    (s.reject = (r) => {
      (i({ status: "rejected", reason: r }), e(r));
    }),
    s
  );
}
function Yt(t) {
  let e;
  if ((t.then((s) => ((e = s), s), v)?.catch(v), e !== void 0)) return { data: e };
}
var Qt = Ot;
function Mt() {
  let t = [],
    e = 0,
    s = (n) => {
      n();
    },
    i = (n) => {
      n();
    },
    r = Qt;
  const a = (n) => {
      e
        ? t.push(n)
        : r(() => {
            s(n);
          });
    },
    o = () => {
      const n = t;
      ((t = []),
        n.length &&
          r(() => {
            i(() => {
              n.forEach((u) => {
                s(u);
              });
            });
          }));
    };
  return {
    batch: (n) => {
      let u;
      e++;
      try {
        u = n();
      } finally {
        (e--, e || o());
      }
      return u;
    },
    batchCalls:
      (n) =>
      (...u) => {
        a(() => {
          n(...u);
        });
      },
    schedule: a,
    setNotifyFunction: (n) => {
      s = n;
    },
    setBatchNotifyFunction: (n) => {
      i = n;
    },
    setScheduler: (n) => {
      r = n;
    },
  };
}
var p = Mt(),
  Tt = class extends A {
    #t = !0;
    #e;
    #s;
    constructor() {
      (super(),
        (this.#s = (t) => {
          if (!T && window.addEventListener) {
            const e = () => t(!0),
              s = () => t(!1);
            return (
              window.addEventListener("online", e, !1),
              window.addEventListener("offline", s, !1),
              () => {
                (window.removeEventListener("online", e), window.removeEventListener("offline", s));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#s);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(t) {
      ((this.#s = t), this.#e?.(), (this.#e = t(this.setOnline.bind(this))));
    }
    setOnline(t) {
      this.#t !== t &&
        ((this.#t = t),
        this.listeners.forEach((s) => {
          s(t);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  k = new Tt();
function It(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function ct(t) {
  return (t ?? "online") === "online" ? k.isOnline() : !0;
}
var B = class extends Error {
  constructor(t) {
    (super("CancelledError"), (this.revert = t?.revert), (this.silent = t?.silent));
  }
};
function lt(t) {
  let e = !1,
    s = 0,
    i;
  const r = G(),
    a = () => r.status !== "pending",
    o = (l) => {
      if (!a()) {
        const m = new B(l);
        (c(m), t.onCancel?.(m));
      }
    },
    n = () => {
      e = !0;
    },
    u = () => {
      e = !1;
    },
    f = () => $.isFocused() && (t.networkMode === "always" || k.isOnline()) && t.canRun(),
    h = () => ct(t.networkMode) && t.canRun(),
    y = (l) => {
      a() || (i?.(), r.resolve(l));
    },
    c = (l) => {
      a() || (i?.(), r.reject(l));
    },
    S = () =>
      new Promise((l) => {
        ((i = (m) => {
          (a() || f()) && l(m);
        }),
          t.onPause?.());
      }).then(() => {
        ((i = void 0), a() || t.onContinue?.());
      }),
    d = () => {
      if (a()) return;
      let l;
      const m = s === 0 ? t.initialPromise : void 0;
      try {
        l = m ?? t.fn();
      } catch (g) {
        l = Promise.reject(g);
      }
      Promise.resolve(l)
        .then(y)
        .catch((g) => {
          if (a()) return;
          const w = t.retry ?? (T ? 0 : 3),
            P = t.retryDelay ?? It,
            E = typeof P == "function" ? P(s, g) : P,
            Q = w === !0 || (typeof w == "number" && s < w) || (typeof w == "function" && w(s, g));
          if (e || !Q) {
            c(g);
            return;
          }
          (s++,
            t.onFail?.(s, g),
            wt(E)
              .then(() => (f() ? void 0 : S()))
              .then(() => {
                e ? c(g) : d();
              }));
        });
    };
  return {
    promise: r,
    status: () => r.status,
    cancel: o,
    continue: () => (i?.(), r),
    cancelRetry: n,
    continueRetry: u,
    canStart: h,
    start: () => (h() ? d() : S().then(d), r),
  };
}
var ft = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        L(this.gcTime) &&
          (this.#t = M.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (T ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#t && (M.clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  Dt = class extends ft {
    #t;
    #e;
    #s;
    #r;
    #i;
    #o;
    #a;
    constructor(t) {
      (super(),
        (this.#a = !1),
        (this.#o = t.defaultOptions),
        this.setOptions(t.options),
        (this.observers = []),
        (this.#r = t.client),
        (this.#s = this.#r.getQueryCache()),
        (this.queryKey = t.queryKey),
        (this.queryHash = t.queryHash),
        (this.#t = et(this.options)),
        (this.state = t.state ?? this.#t),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#i?.promise;
    }
    setOptions(t) {
      if (
        ((this.options = { ...this.#o, ...t }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const e = et(this.options);
        e.data !== void 0 && (this.setData(e.data, { updatedAt: e.dataUpdatedAt, manual: !0 }), (this.#t = e));
      }
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && this.#s.remove(this);
    }
    setData(t, e) {
      const s = N(this.state.data, t, this.options);
      return (this.#n({ data: s, type: "success", dataUpdatedAt: e?.updatedAt, manual: e?.manual }), s);
    }
    setState(t, e) {
      this.#n({ type: "setState", state: t, setStateOptions: e });
    }
    cancel(t) {
      const e = this.#i?.promise;
      return (this.#i?.cancel(t), e ? e.then(v).catch(v) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#t));
    }
    isActive() {
      return this.observers.some((t) => C(t.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === V || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => F(t.options.staleTime, this) === "static") : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((t) => t.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0
        ? !0
        : t === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !ot(this.state.dataUpdatedAt, t);
    }
    onFocus() {
      (this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#i?.continue());
    }
    onOnline() {
      (this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#i?.continue());
    }
    addObserver(t) {
      this.observers.includes(t) ||
        (this.observers.push(t),
        this.clearGcTimeout(),
        this.#s.notify({ type: "observerAdded", query: this, observer: t }));
    }
    removeObserver(t) {
      this.observers.includes(t) &&
        ((this.observers = this.observers.filter((e) => e !== t)),
        this.observers.length ||
          (this.#i && (this.#a ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()), this.scheduleGc()),
        this.#s.notify({ type: "observerRemoved", query: this, observer: t }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#n({ type: "invalidate" });
    }
    async fetch(t, e) {
      if (this.state.fetchStatus !== "idle" && this.#i?.status() !== "rejected") {
        if (this.state.data !== void 0 && e?.cancelRefetch) this.cancel({ silent: !0 });
        else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
      }
      if ((t && this.setOptions(t), !this.options.queryFn)) {
        const n = this.observers.find((u) => u.options.queryFn);
        n && this.setOptions(n.options);
      }
      const s = new AbortController(),
        i = (n) => {
          Object.defineProperty(n, "signal", { enumerable: !0, get: () => ((this.#a = !0), s.signal) });
        },
        r = () => {
          const n = ht(this.options, e),
            f = (() => {
              const h = { client: this.#r, queryKey: this.queryKey, meta: this.meta };
              return (i(h), h);
            })();
          return ((this.#a = !1), this.options.persister ? this.options.persister(n, f, this) : n(f));
        },
        o = (() => {
          const n = {
            fetchOptions: e,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: r,
          };
          return (i(n), n);
        })();
      (this.options.behavior?.onFetch(o, this),
        (this.#e = this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== o.fetchOptions?.meta) &&
          this.#n({ type: "fetch", meta: o.fetchOptions?.meta }),
        (this.#i = lt({
          initialPromise: e?.initialPromise,
          fn: o.fetchFn,
          onCancel: (n) => {
            (n instanceof B && n.revert && this.setState({ ...this.#e, fetchStatus: "idle" }), s.abort());
          },
          onFail: (n, u) => {
            this.#n({ type: "failed", failureCount: n, error: u });
          },
          onPause: () => {
            this.#n({ type: "pause" });
          },
          onContinue: () => {
            this.#n({ type: "continue" });
          },
          retry: o.options.retry,
          retryDelay: o.options.retryDelay,
          networkMode: o.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const n = await this.#i.start();
        if (n === void 0) throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(n),
          this.#s.config.onSuccess?.(n, this),
          this.#s.config.onSettled?.(n, this.state.error, this),
          n
        );
      } catch (n) {
        if (n instanceof B) {
          if (n.silent) return this.#i.promise;
          if (n.revert) {
            if (this.state.data === void 0) throw n;
            return this.state.data;
          }
        }
        throw (
          this.#n({ type: "error", error: n }),
          this.#s.config.onError?.(n, this),
          this.#s.config.onSettled?.(this.state.data, n, this),
          n
        );
      } finally {
        this.scheduleGc();
      }
    }
    #n(t) {
      const e = (s) => {
        switch (t.type) {
          case "failed":
            return { ...s, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return { ...s, ...dt(s.data, this.options), fetchMeta: t.meta ?? null };
          case "success":
            const i = {
              ...s,
              data: t.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
            };
            return ((this.#e = t.manual ? i : void 0), i);
          case "error":
            const r = t.error;
            return {
              ...s,
              error: r,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: r,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...t.state };
        }
      };
      ((this.state = e(this.state)),
        p.batch(() => {
          (this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#s.notify({ query: this, type: "updated", action: t }));
        }));
    }
  };
function dt(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ct(e.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function et(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
    s = e !== void 0,
    i = s ? (typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt) : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? (i ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var xt = class extends A {
  constructor(t, e) {
    (super(),
      (this.options = e),
      (this.#t = t),
      (this.#n = null),
      (this.#a = G()),
      this.bindMethods(),
      this.setOptions(e));
  }
  #t;
  #e = void 0;
  #s = void 0;
  #r = void 0;
  #i;
  #o;
  #a;
  #n;
  #y;
  #f;
  #d;
  #h;
  #c;
  #u;
  #p = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#e.addObserver(this), st(this.#e, this.options) ? this.#l() : this.updateResult(), this.#b());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return z(this.#e, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return z(this.#e, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()), this.#O(), this.#C(), this.#e.removeObserver(this));
  }
  setOptions(t) {
    const e = this.options,
      s = this.#e;
    if (
      ((this.options = this.#t.defaultQueryOptions(t)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof C(this.options.enabled, this.#e) != "boolean")
    )
      throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    (this.#S(),
      this.#e.setOptions(this.options),
      e._defaulted &&
        !K(this.options, e) &&
        this.#t.getQueryCache().notify({ type: "observerOptionsUpdated", query: this.#e, observer: this }));
    const i = this.hasListeners();
    (i && it(this.#e, s, this.options, e) && this.#l(),
      this.updateResult(),
      i &&
        (this.#e !== s ||
          C(this.options.enabled, this.#e) !== C(e.enabled, this.#e) ||
          F(this.options.staleTime, this.#e) !== F(e.staleTime, this.#e)) &&
        this.#v());
    const r = this.#m();
    i && (this.#e !== s || C(this.options.enabled, this.#e) !== C(e.enabled, this.#e) || r !== this.#u) && this.#g(r);
  }
  getOptimisticResult(t) {
    const e = this.#t.getQueryCache().build(this.#t, t),
      s = this.createResult(e, t);
    return (qt(this, s) && ((this.#r = s), (this.#o = this.options), (this.#i = this.#e.state)), s);
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(t, e) {
    return new Proxy(t, {
      get: (s, i) => (
        this.trackProp(i),
        e?.(i),
        i === "promise" &&
          !this.options.experimental_prefetchInRender &&
          this.#a.status === "pending" &&
          this.#a.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
        Reflect.get(s, i)
      ),
    });
  }
  trackProp(t) {
    this.#p.add(t);
  }
  getCurrentQuery() {
    return this.#e;
  }
  refetch({ ...t } = {}) {
    return this.fetch({ ...t });
  }
  fetchOptimistic(t) {
    const e = this.#t.defaultQueryOptions(t),
      s = this.#t.getQueryCache().build(this.#t, e);
    return s.fetch().then(() => this.createResult(s, e));
  }
  fetch(t) {
    return this.#l({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(() => (this.updateResult(), this.#r));
  }
  #l(t) {
    this.#S();
    let e = this.#e.fetch(this.options, t);
    return (t?.throwOnError || (e = e.catch(v)), e);
  }
  #v() {
    this.#O();
    const t = F(this.options.staleTime, this.#e);
    if (T || this.#r.isStale || !L(t)) return;
    const s = ot(this.#r.dataUpdatedAt, t) + 1;
    this.#h = M.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, s);
  }
  #m() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#e)
        : this.options.refetchInterval) ?? !1
    );
  }
  #g(t) {
    (this.#C(),
      (this.#u = t),
      !(T || C(this.options.enabled, this.#e) === !1 || !L(this.#u) || this.#u === 0) &&
        (this.#c = M.setInterval(() => {
          (this.options.refetchIntervalInBackground || $.isFocused()) && this.#l();
        }, this.#u)));
  }
  #b() {
    (this.#v(), this.#g(this.#m()));
  }
  #O() {
    this.#h && (M.clearTimeout(this.#h), (this.#h = void 0));
  }
  #C() {
    this.#c && (M.clearInterval(this.#c), (this.#c = void 0));
  }
  createResult(t, e) {
    const s = this.#e,
      i = this.options,
      r = this.#r,
      a = this.#i,
      o = this.#o,
      u = t !== s ? t.state : this.#s,
      { state: f } = t;
    let h = { ...f },
      y = !1,
      c;
    if (e._optimisticResults) {
      const O = this.hasListeners(),
        q = !O && st(t, e),
        I = O && it(t, s, e, i);
      ((q || I) && (h = { ...h, ...dt(f.data, t.options) }),
        e._optimisticResults === "isRestoring" && (h.fetchStatus = "idle"));
    }
    let { error: S, errorUpdatedAt: d, status: l } = h;
    c = h.data;
    let m = !1;
    if (e.placeholderData !== void 0 && c === void 0 && l === "pending") {
      let O;
      (r?.isPlaceholderData && e.placeholderData === o?.placeholderData
        ? ((O = r.data), (m = !0))
        : (O =
            typeof e.placeholderData == "function"
              ? e.placeholderData(this.#d?.state.data, this.#d)
              : e.placeholderData),
        O !== void 0 && ((l = "success"), (c = N(r?.data, O, e)), (y = !0)));
    }
    if (e.select && c !== void 0 && !m)
      if (r && c === a?.data && e.select === this.#y) c = this.#f;
      else
        try {
          ((this.#y = e.select), (c = e.select(c)), (c = N(r?.data, c, e)), (this.#f = c), (this.#n = null));
        } catch (O) {
          this.#n = O;
        }
    this.#n && ((S = this.#n), (c = this.#f), (d = Date.now()), (l = "error"));
    const g = h.fetchStatus === "fetching",
      w = l === "pending",
      P = l === "error",
      E = w && g,
      Q = c !== void 0,
      R = {
        status: l,
        fetchStatus: h.fetchStatus,
        isPending: w,
        isSuccess: l === "success",
        isError: P,
        isInitialLoading: E,
        isLoading: E,
        data: c,
        dataUpdatedAt: h.dataUpdatedAt,
        error: S,
        errorUpdatedAt: d,
        failureCount: h.fetchFailureCount,
        failureReason: h.fetchFailureReason,
        errorUpdateCount: h.errorUpdateCount,
        isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
        isFetchedAfterMount: h.dataUpdateCount > u.dataUpdateCount || h.errorUpdateCount > u.errorUpdateCount,
        isFetching: g,
        isRefetching: g && !w,
        isLoadingError: P && !Q,
        isPaused: h.fetchStatus === "paused",
        isPlaceholderData: y,
        isRefetchError: P && Q,
        isStale: J(t, e),
        refetch: this.refetch,
        promise: this.#a,
        isEnabled: C(e.enabled, t) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const O = (U) => {
          R.status === "error" ? U.reject(R.error) : R.data !== void 0 && U.resolve(R.data);
        },
        q = () => {
          const U = (this.#a = R.promise = G());
          O(U);
        },
        I = this.#a;
      switch (I.status) {
        case "pending":
          t.queryHash === s.queryHash && O(I);
          break;
        case "fulfilled":
          (R.status === "error" || R.data !== I.value) && q();
          break;
        case "rejected":
          (R.status !== "error" || R.error !== I.reason) && q();
          break;
      }
    }
    return R;
  }
  updateResult() {
    const t = this.#r,
      e = this.createResult(this.#e, this.options);
    if (((this.#i = this.#e.state), (this.#o = this.options), this.#i.data !== void 0 && (this.#d = this.#e), K(e, t)))
      return;
    this.#r = e;
    const s = () => {
      if (!t) return !0;
      const { notifyOnChangeProps: i } = this.options,
        r = typeof i == "function" ? i() : i;
      if (r === "all" || (!r && !this.#p.size)) return !0;
      const a = new Set(r ?? this.#p);
      return (
        this.options.throwOnError && a.add("error"),
        Object.keys(this.#r).some((o) => {
          const n = o;
          return this.#r[n] !== t[n] && a.has(n);
        })
      );
    };
    this.#w({ listeners: s() });
  }
  #S() {
    const t = this.#t.getQueryCache().build(this.#t, this.options);
    if (t === this.#e) return;
    const e = this.#e;
    ((this.#e = t), (this.#s = t.state), this.hasListeners() && (e?.removeObserver(this), t.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#b());
  }
  #w(t) {
    p.batch(() => {
      (t.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#t.getQueryCache().notify({ query: this.#e, type: "observerResultsUpdated" }));
    });
  }
};
function At(t, e) {
  return C(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function st(t, e) {
  return At(t, e) || (t.state.data !== void 0 && z(t, e, e.refetchOnMount));
}
function z(t, e, s) {
  if (C(e.enabled, t) !== !1 && F(e.staleTime, t) !== "static") {
    const i = typeof s == "function" ? s(t) : s;
    return i === "always" || (i !== !1 && J(t, e));
  }
  return !1;
}
function it(t, e, s, i) {
  return (t !== e || C(i.enabled, t) === !1) && (!s.suspense || t.state.status !== "error") && J(t, s);
}
function J(t, e) {
  return C(e.enabled, t) !== !1 && t.isStaleByTime(F(e.staleTime, t));
}
function qt(t, e) {
  return !K(t.getCurrentResult(), e);
}
function rt(t) {
  return {
    onFetch: (e, s) => {
      const i = e.options,
        r = e.fetchOptions?.meta?.fetchMore?.direction,
        a = e.state.data?.pages || [],
        o = e.state.data?.pageParams || [];
      let n = { pages: [], pageParams: [] },
        u = 0;
      const f = async () => {
        let h = !1;
        const y = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (h = !0)
                  : e.signal.addEventListener("abort", () => {
                      h = !0;
                    }),
                e.signal
              ),
            });
          },
          c = ht(e.options, e.fetchOptions),
          S = async (d, l, m) => {
            if (h) return Promise.reject();
            if (l == null && d.pages.length) return Promise.resolve(d);
            const w = (() => {
                const _ = {
                  client: e.client,
                  queryKey: e.queryKey,
                  pageParam: l,
                  direction: m ? "backward" : "forward",
                  meta: e.options.meta,
                };
                return (y(_), _);
              })(),
              P = await c(w),
              { maxPages: E } = e.options,
              Q = m ? Pt : Rt;
            return { pages: Q(d.pages, P, E), pageParams: Q(d.pageParams, l, E) };
          };
        if (r && a.length) {
          const d = r === "backward",
            l = d ? Ut : nt,
            m = { pages: a, pageParams: o },
            g = l(i, m);
          n = await S(m, g, d);
        } else {
          const d = t ?? a.length;
          do {
            const l = u === 0 ? (o[0] ?? i.initialPageParam) : nt(i, n);
            if (u > 0 && l == null) break;
            ((n = await S(n, l)), u++);
          } while (u < d);
        }
        return n;
      };
      e.options.persister
        ? (e.fetchFn = () =>
            e.options.persister?.(
              f,
              { client: e.client, queryKey: e.queryKey, meta: e.options.meta, signal: e.signal },
              s,
            ))
        : (e.fetchFn = f);
    },
  };
}
function nt(t, { pages: e, pageParams: s }) {
  const i = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[i], e, s[i], s) : void 0;
}
function Ut(t, { pages: e, pageParams: s }) {
  return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, s[0], s) : void 0;
}
var jt = class extends ft {
  #t;
  #e;
  #s;
  #r;
  constructor(t) {
    (super(),
      (this.#t = t.client),
      (this.mutationId = t.mutationId),
      (this.#s = t.mutationCache),
      (this.#e = []),
      (this.state = t.state || kt()),
      this.setOptions(t.options),
      this.scheduleGc());
  }
  setOptions(t) {
    ((this.options = t), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    this.#e.includes(t) ||
      (this.#e.push(t), this.clearGcTimeout(), this.#s.notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    ((this.#e = this.#e.filter((e) => e !== t)),
      this.scheduleGc(),
      this.#s.notify({ type: "observerRemoved", mutation: this, observer: t }));
  }
  optionalRemove() {
    this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#s.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(t) {
    const e = () => {
        this.#i({ type: "continue" });
      },
      s = { client: this.#t, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#r = lt({
      fn: () =>
        this.options.mutationFn ? this.options.mutationFn(t, s) : Promise.reject(new Error("No mutationFn found")),
      onFail: (a, o) => {
        this.#i({ type: "failed", failureCount: a, error: o });
      },
      onPause: () => {
        this.#i({ type: "pause" });
      },
      onContinue: e,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#s.canRun(this),
    });
    const i = this.state.status === "pending",
      r = !this.#r.canStart();
    try {
      if (i) e();
      else {
        (this.#i({ type: "pending", variables: t, isPaused: r }), await this.#s.config.onMutate?.(t, this, s));
        const o = await this.options.onMutate?.(t, s);
        o !== this.state.context && this.#i({ type: "pending", context: o, variables: t, isPaused: r });
      }
      const a = await this.#r.start();
      return (
        await this.#s.config.onSuccess?.(a, t, this.state.context, this, s),
        await this.options.onSuccess?.(a, t, this.state.context, s),
        await this.#s.config.onSettled?.(a, null, this.state.variables, this.state.context, this, s),
        await this.options.onSettled?.(a, null, t, this.state.context, s),
        this.#i({ type: "success", data: a }),
        a
      );
    } catch (a) {
      try {
        throw (
          await this.#s.config.onError?.(a, t, this.state.context, this, s),
          await this.options.onError?.(a, t, this.state.context, s),
          await this.#s.config.onSettled?.(void 0, a, this.state.variables, this.state.context, this, s),
          await this.options.onSettled?.(void 0, a, t, this.state.context, s),
          a
        );
      } finally {
        this.#i({ type: "error", error: a });
      }
    } finally {
      this.#s.runNext(this);
    }
  }
  #i(t) {
    const e = (s) => {
      switch (t.type) {
        case "failed":
          return { ...s, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: t.error,
            failureCount: s.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = e(this.state)),
      p.batch(() => {
        (this.#e.forEach((s) => {
          s.onMutationUpdate(t);
        }),
          this.#s.notify({ mutation: this, type: "updated", action: t }));
      }));
  }
};
function kt() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var _t = class extends A {
  constructor(t = {}) {
    (super(), (this.config = t), (this.#t = new Set()), (this.#e = new Map()), (this.#s = 0));
  }
  #t;
  #e;
  #s;
  build(t, e, s) {
    const i = new jt({
      client: t,
      mutationCache: this,
      mutationId: ++this.#s,
      options: t.defaultMutationOptions(e),
      state: s,
    });
    return (this.add(i), i);
  }
  add(t) {
    this.#t.add(t);
    const e = j(t);
    if (typeof e == "string") {
      const s = this.#e.get(e);
      s ? s.push(t) : this.#e.set(e, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (this.#t.delete(t)) {
      const e = j(t);
      if (typeof e == "string") {
        const s = this.#e.get(e);
        if (s)
          if (s.length > 1) {
            const i = s.indexOf(t);
            i !== -1 && s.splice(i, 1);
          } else s[0] === t && this.#e.delete(e);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const e = j(t);
    if (typeof e == "string") {
      const i = this.#e.get(e)?.find((r) => r.state.status === "pending");
      return !i || i === t;
    } else return !0;
  }
  runNext(t) {
    const e = j(t);
    return typeof e == "string"
      ? (this.#e
          .get(e)
          ?.find((i) => i !== t && i.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    p.batch(() => {
      (this.#t.forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }),
        this.#t.clear(),
        this.#e.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(t) {
    const e = { exact: !0, ...t };
    return this.getAll().find((s) => X(e, s));
  }
  findAll(t = {}) {
    return this.getAll().filter((e) => X(t, e));
  }
  notify(t) {
    p.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((e) => e.state.isPaused);
    return p.batch(() => Promise.all(t.map((e) => e.continue().catch(v))));
  }
};
function j(t) {
  return t.options.scope?.id;
}
var Lt = class extends A {
    constructor(t = {}) {
      (super(), (this.config = t), (this.#t = new Map()));
    }
    #t;
    build(t, e, s) {
      const i = e.queryKey,
        r = e.queryHash ?? W(i, e);
      let a = this.get(r);
      return (
        a ||
          ((a = new Dt({
            client: t,
            queryKey: i,
            queryHash: r,
            options: t.defaultQueryOptions(e),
            state: s,
            defaultOptions: t.getQueryDefaults(i),
          })),
          this.add(a)),
        a
      );
    }
    add(t) {
      this.#t.has(t.queryHash) || (this.#t.set(t.queryHash, t), this.notify({ type: "added", query: t }));
    }
    remove(t) {
      const e = this.#t.get(t.queryHash);
      e && (t.destroy(), e === t && this.#t.delete(t.queryHash), this.notify({ type: "removed", query: t }));
    }
    clear() {
      p.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return this.#t.get(t);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(t) {
      const e = { exact: !0, ...t };
      return this.getAll().find((s) => Z(e, s));
    }
    findAll(t = {}) {
      const e = this.getAll();
      return Object.keys(t).length > 0 ? e.filter((s) => Z(t, s)) : e;
    }
    notify(t) {
      p.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    onFocus() {
      p.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      p.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  },
  te = class {
    #t;
    #e;
    #s;
    #r;
    #i;
    #o;
    #a;
    #n;
    constructor(t = {}) {
      ((this.#t = t.queryCache || new Lt()),
        (this.#e = t.mutationCache || new _t()),
        (this.#s = t.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#o = 0));
    }
    mount() {
      (this.#o++,
        this.#o === 1 &&
          ((this.#a = $.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#n = k.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#o--, this.#o === 0 && (this.#a?.(), (this.#a = void 0), this.#n?.(), (this.#n = void 0)));
    }
    isFetching(t) {
      return this.#t.findAll({ ...t, fetchStatus: "fetching" }).length;
    }
    isMutating(t) {
      return this.#e.findAll({ ...t, status: "pending" }).length;
    }
    getQueryData(t) {
      const e = this.defaultQueryOptions({ queryKey: t });
      return this.#t.get(e.queryHash)?.state.data;
    }
    ensureQueryData(t) {
      const e = this.defaultQueryOptions(t),
        s = this.#t.build(this, e),
        i = s.state.data;
      return i === void 0
        ? this.fetchQuery(t)
        : (t.revalidateIfStale && s.isStaleByTime(F(e.staleTime, s)) && this.prefetchQuery(e), Promise.resolve(i));
    }
    getQueriesData(t) {
      return this.#t.findAll(t).map(({ queryKey: e, state: s }) => {
        const i = s.data;
        return [e, i];
      });
    }
    setQueryData(t, e, s) {
      const i = this.defaultQueryOptions({ queryKey: t }),
        a = this.#t.get(i.queryHash)?.state.data,
        o = Ct(e, a);
      if (o !== void 0) return this.#t.build(this, i).setData(o, { ...s, manual: !0 });
    }
    setQueriesData(t, e, s) {
      return p.batch(() => this.#t.findAll(t).map(({ queryKey: i }) => [i, this.setQueryData(i, e, s)]));
    }
    getQueryState(t) {
      const e = this.defaultQueryOptions({ queryKey: t });
      return this.#t.get(e.queryHash)?.state;
    }
    removeQueries(t) {
      const e = this.#t;
      p.batch(() => {
        e.findAll(t).forEach((s) => {
          e.remove(s);
        });
      });
    }
    resetQueries(t, e) {
      const s = this.#t;
      return p.batch(
        () => (
          s.findAll(t).forEach((i) => {
            i.reset();
          }),
          this.refetchQueries({ type: "active", ...t }, e)
        ),
      );
    }
    cancelQueries(t, e = {}) {
      const s = { revert: !0, ...e },
        i = p.batch(() => this.#t.findAll(t).map((r) => r.cancel(s)));
      return Promise.all(i).then(v).catch(v);
    }
    invalidateQueries(t, e = {}) {
      return p.batch(
        () => (
          this.#t.findAll(t).forEach((s) => {
            s.invalidate();
          }),
          t?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries({ ...t, type: t?.refetchType ?? t?.type ?? "active" }, e)
        ),
      );
    }
    refetchQueries(t, e = {}) {
      const s = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
        i = p.batch(() =>
          this.#t
            .findAll(t)
            .filter((r) => !r.isDisabled() && !r.isStatic())
            .map((r) => {
              let a = r.fetch(void 0, s);
              return (s.throwOnError || (a = a.catch(v)), r.state.fetchStatus === "paused" ? Promise.resolve() : a);
            }),
        );
      return Promise.all(i).then(v);
    }
    fetchQuery(t) {
      const e = this.defaultQueryOptions(t);
      e.retry === void 0 && (e.retry = !1);
      const s = this.#t.build(this, e);
      return s.isStaleByTime(F(e.staleTime, s)) ? s.fetch(e) : Promise.resolve(s.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(v).catch(v);
    }
    fetchInfiniteQuery(t) {
      return ((t.behavior = rt(t.pages)), this.fetchQuery(t));
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(v).catch(v);
    }
    ensureInfiniteQueryData(t) {
      return ((t.behavior = rt(t.pages)), this.ensureQueryData(t));
    }
    resumePausedMutations() {
      return k.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#e;
    }
    getDefaultOptions() {
      return this.#s;
    }
    setDefaultOptions(t) {
      this.#s = t;
    }
    setQueryDefaults(t, e) {
      this.#r.set(D(t), { queryKey: t, defaultOptions: e });
    }
    getQueryDefaults(t) {
      const e = [...this.#r.values()],
        s = {};
      return (
        e.forEach((i) => {
          x(t, i.queryKey) && Object.assign(s, i.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(t, e) {
      this.#i.set(D(t), { mutationKey: t, defaultOptions: e });
    }
    getMutationDefaults(t) {
      const e = [...this.#i.values()],
        s = {};
      return (
        e.forEach((i) => {
          x(t, i.mutationKey) && Object.assign(s, i.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const e = { ...this.#s.queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: !0 };
      return (
        e.queryHash || (e.queryHash = W(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === V && (e.enabled = !1),
        e
      );
    }
    defaultMutationOptions(t) {
      return t?._defaulted
        ? t
        : {
            ...this.#s.mutations,
            ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
            ...t,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#e.clear());
    }
  },
  pt = b.createContext(void 0),
  yt = (t) => {
    const e = b.useContext(pt);
    if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e;
  },
  ee = ({ client: t, children: e }) => (
    b.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t],
    ),
    mt.jsx(pt.Provider, { value: t, children: e })
  ),
  vt = b.createContext(!1),
  Kt = () => b.useContext(vt);
vt.Provider;
function Ht() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var Nt = b.createContext(Ht()),
  Gt = () => b.useContext(Nt),
  Bt = (t, e) => {
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
  },
  zt = (t) => {
    b.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  Wt = ({ result: t, errorResetBoundary: e, throwOnError: s, query: i, suspense: r }) =>
    t.isError && !e.isReset() && !t.isFetching && i && ((r && t.data === void 0) || Ft(s, [t.error, i])),
  Vt = (t) => {
    if (t.suspense) {
      const s = (r) => (r === "static" ? r : Math.max(r ?? 1e3, 1e3)),
        i = t.staleTime;
      ((t.staleTime = typeof i == "function" ? (...r) => s(i(...r)) : s(i)),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
    }
  },
  $t = (t, e) => t.isLoading && t.isFetching && !e,
  Jt = (t, e) => t?.suspense && e.isPending,
  at = (t, e, s) =>
    e.fetchOptimistic(t).catch(() => {
      s.clearReset();
    });
function Zt(t, e, s) {
  const i = Kt(),
    r = Gt(),
    a = yt(),
    o = a.defaultQueryOptions(t);
  (a.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
    (o._optimisticResults = i ? "isRestoring" : "optimistic"),
    Vt(o),
    Bt(o, r),
    zt(r));
  const n = !a.getQueryCache().get(o.queryHash),
    [u] = b.useState(() => new e(a, o)),
    f = u.getOptimisticResult(o),
    h = !i && t.subscribed !== !1;
  if (
    (b.useSyncExternalStore(
      b.useCallback(
        (y) => {
          const c = h ? u.subscribe(p.batchCalls(y)) : v;
          return (u.updateResult(), c);
        },
        [u, h],
      ),
      () => u.getCurrentResult(),
      () => u.getCurrentResult(),
    ),
    b.useEffect(() => {
      u.setOptions(o);
    }, [o, u]),
    Jt(o, f))
  )
    throw at(o, u, r);
  if (
    Wt({
      result: f,
      errorResetBoundary: r,
      throwOnError: o.throwOnError,
      query: a.getQueryCache().get(o.queryHash),
      suspense: o.suspense,
    })
  )
    throw f.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, f),
    o.experimental_prefetchInRender &&
      !T &&
      $t(f, i) &&
      (n ? at(o, u, r) : a.getQueryCache().get(o.queryHash)?.promise)?.catch(v).finally(() => {
        u.updateResult();
      }),
    o.notifyOnChangeProps ? f : u.trackResult(f)
  );
}
function se(t, e) {
  return Zt(t, xt);
}
function ie(t, e) {
  const s = yt(),
    i = s.getQueryCache();
  return b.useSyncExternalStore(
    b.useCallback((r) => i.subscribe(p.batchCalls(r)), [i]),
    () => s.isFetching(t),
    () => s.isFetching(t),
  );
}
export {
  B as C,
  jt as M,
  te as Q,
  se as a,
  yt as b,
  ee as c,
  pt as d,
  Kt as e,
  Gt as f,
  _t as g,
  Dt as h,
  Lt as i,
  xt as j,
  Qt as k,
  $ as l,
  D as m,
  T as n,
  X as o,
  Z as p,
  v as q,
  p as r,
  k as s,
  Yt as t,
  ie as u,
  x as v,
  ut as w,
  Ft as x,
  V as y,
  M as z,
};
