import { t as E } from "../js/05f9b839-useIsFetching-WCZ5lBXH.js";
import {
  C as k,
  M as q,
  g as F,
  h as T,
  i as _,
  Q as B,
  d as H,
  c as N,
  j as G,
  k as J,
  l as L,
  m as V,
  n as W,
  o as X,
  p as Y,
  q as Z,
  r as $,
  s as tt,
  v as et,
  w as at,
  x as st,
  y as rt,
  z as ot,
  u as ut,
  e as nt,
  a as it,
  b as dt,
  f as ct,
} from "../js/05f9b839-useIsFetching-WCZ5lBXH.js";
import "../js/12cc8a0a-r3f-BJIQ5yep.js";
import "../js/fa3e1470-three-yAinaQqd.js";
function D(t) {
  return t;
}
function O(t) {
  return {
    mutationKey: t.options.mutationKey,
    state: t.state,
    ...(t.options.scope && { scope: t.options.scope }),
    ...(t.meta && { meta: t.meta }),
  };
}
function S(t, e, o) {
  return {
    dehydratedAt: Date.now(),
    state: { ...t.state, ...(t.state.data !== void 0 && { data: e(t.state.data) }) },
    queryKey: t.queryKey,
    queryHash: t.queryHash,
    ...(t.state.status === "pending" && {
      promise: t.promise?.then(e).catch((u) => (o(u) ? Promise.reject(new Error("redacted")) : Promise.reject(u))),
    }),
    ...(t.meta && { meta: t.meta }),
  };
}
function P(t) {
  return t.state.isPaused;
}
function R(t) {
  return t.state.status === "success";
}
function w(t) {
  return !0;
}
function j(t, e = {}) {
  const o = e.shouldDehydrateMutation ?? t.getDefaultOptions().dehydrate?.shouldDehydrateMutation ?? P,
    u = t
      .getMutationCache()
      .getAll()
      .flatMap((a) => (o(a) ? [O(a)] : [])),
    n = e.shouldDehydrateQuery ?? t.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? R,
    i = e.shouldRedactErrors ?? t.getDefaultOptions().dehydrate?.shouldRedactErrors ?? w,
    h = e.serializeData ?? t.getDefaultOptions().dehydrate?.serializeData ?? D,
    l = t
      .getQueryCache()
      .getAll()
      .flatMap((a) => (n(a) ? [S(a, h, i)] : []));
  return { mutations: u, queries: l };
}
function A(t, e, o) {
  if (typeof e != "object" || e === null) return;
  const u = t.getMutationCache(),
    n = t.getQueryCache(),
    i = t.getDefaultOptions().hydrate?.deserializeData ?? D,
    h = e.mutations || [],
    l = e.queries || [];
  (h.forEach(({ state: a, ...r }) => {
    u.build(t, { ...t.getDefaultOptions().hydrate?.mutations, ...o?.defaultOptions?.mutations, ...r }, a);
  }),
    l.forEach(({ queryKey: a, state: r, queryHash: p, meta: m, promise: d, dehydratedAt: c }) => {
      const g = d ? E(d) : void 0,
        f = r.data === void 0 ? g?.data : r.data,
        y = f === void 0 ? f : i(f);
      let s = n.get(p);
      const Q = s?.state.status === "pending",
        M = s?.state.fetchStatus === "fetching";
      if (s) {
        const v = g && c !== void 0 && c > s.state.dataUpdatedAt;
        if (r.dataUpdatedAt > s.state.dataUpdatedAt || v) {
          const { fetchStatus: x, ...C } = r;
          s.setState({ ...C, data: y });
        }
      } else
        s = n.build(
          t,
          {
            ...t.getDefaultOptions().hydrate?.queries,
            ...o?.defaultOptions?.queries,
            queryKey: a,
            queryHash: p,
            meta: m,
          },
          { ...r, data: y, fetchStatus: "idle", status: y !== void 0 ? "success" : r.status },
        );
      d &&
        !Q &&
        !M &&
        (c === void 0 || c > s.state.dataUpdatedAt) &&
        s.fetch(void 0, { initialPromise: Promise.resolve(d).then(i) });
    }));
}
export {
  k as CancelledError,
  q as Mutation,
  F as MutationCache,
  T as Query,
  _ as QueryCache,
  B as QueryClient,
  H as QueryClientContext,
  N as QueryClientProvider,
  G as QueryObserver,
  J as defaultScheduler,
  P as defaultShouldDehydrateMutation,
  R as defaultShouldDehydrateQuery,
  j as dehydrate,
  L as focusManager,
  V as hashKey,
  A as hydrate,
  W as isServer,
  X as matchMutation,
  Y as matchQuery,
  Z as noop,
  $ as notifyManager,
  tt as onlineManager,
  et as partialMatchKey,
  at as replaceEqualDeep,
  st as shouldThrowError,
  rt as skipToken,
  ot as timeoutManager,
  ut as useIsFetching,
  nt as useIsRestoring,
  it as useQuery,
  dt as useQueryClient,
  ct as useQueryErrorResetBoundary,
};
