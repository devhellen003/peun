import {
    l as O
} from "./chunk-PWCKSV3D.js";
var Ue = Symbol(),
    pe = Symbol();
var ee = Object.getPrototypeOf,
    J = new WeakMap,
    ge = e => e && (J.has(e) ? J.get(e) : ee(e) === Object.prototype || ee(e) === Array.prototype);
var te = e => ge(e) && e[pe] || null,
    q = (e, t = !0) => {
        J.set(e, t)
    };
var G = e => typeof e == "object" && e !== null,
    P = new WeakMap,
    K = new WeakSet,
    me = (e = Object.is, t = (r, h) => new Proxy(r, h), s = r => G(r) && !K.has(r) && (Array.isArray(r) || !(Symbol.iterator in r)) && !(r instanceof WeakMap) && !(r instanceof WeakSet) && !(r instanceof Error) && !(r instanceof Number) && !(r instanceof Date) && !(r instanceof String) && !(r instanceof RegExp) && !(r instanceof ArrayBuffer), o = r => {
        switch (r.status) {
            case "fulfilled":
                return r.value;
            case "rejected":
                throw r.reason;
            default:
                throw r
        }
    }, l = new WeakMap, c = (r, h, v = o) => {
        let b = l.get(r);
        if (b ? .[0] === h) return b[1];
        let w = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r));
        return q(w, !0), l.set(r, [h, w]), Reflect.ownKeys(r).forEach(S => {
            if (Object.getOwnPropertyDescriptor(w, S)) return;
            let W = Reflect.get(r, S),
                M = {
                    value: W,
                    enumerable: !0,
                    configurable: !0
                };
            if (K.has(W)) q(W, !1);
            else if (W instanceof Promise) delete M.value, M.get = () => v(W);
            else if (P.has(W)) {
                let [y, H] = P.get(W);
                M.value = c(y, H(), v)
            }
            Object.defineProperty(w, S, M)
        }), Object.preventExtensions(w)
    }, g = new WeakMap, p = [1, 1], A = r => {
        if (!G(r)) throw new Error("object required");
        let h = g.get(r);
        if (h) return h;
        let v = p[0],
            b = new Set,
            w = (i, a = ++p[0]) => {
                v !== a && (v = a, b.forEach(n => n(i, a)))
            },
            S = p[1],
            W = (i = ++p[1]) => (S !== i && !b.size && (S = i, y.forEach(([a]) => {
                let n = a[1](i);
                n > v && (v = n)
            })), v),
            M = i => (a, n) => {
                let m = [...a];
                m[1] = [i, ...m[1]], w(m, n)
            },
            y = new Map,
            H = (i, a) => {
                if ((
                        import.meta.env ?
                        import.meta.env.MODE : void 0) !== "production" && y.has(i)) throw new Error("prop listener already exists");
                if (b.size) {
                    let n = a[3](M(i));
                    y.set(i, [a, n])
                } else y.set(i, [a])
            },
            Z = i => {
                var a;
                let n = y.get(i);
                n && (y.delete(i), (a = n[1]) == null || a.call(n))
            },
            ue = i => (b.add(i), b.size === 1 && y.forEach(([n, m], R) => {
                if ((
                        import.meta.env ?
                        import.meta.env.MODE : void 0) !== "production" && m) throw new Error("remove already exists");
                let T = n[3](M(R));
                y.set(R, [n, T])
            }), () => {
                b.delete(i), b.size === 0 && y.forEach(([n, m], R) => {
                    m && (m(), y.set(R, [n]))
                })
            }),
            F = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r)),
            $ = t(F, {
                deleteProperty(i, a) {
                    let n = Reflect.get(i, a);
                    Z(a);
                    let m = Reflect.deleteProperty(i, a);
                    return m && w(["delete", [a], n]), m
                },
                set(i, a, n, m) {
                    let R = Reflect.has(i, a),
                        T = Reflect.get(i, a, m);
                    if (R && (e(T, n) || g.has(n) && e(T, g.get(n)))) return !0;
                    Z(a), G(n) && (n = te(n) || n);
                    let V = n;
                    if (n instanceof Promise) n.then(j => {
                        n.status = "fulfilled", n.value = j, w(["resolve", [a], j])
                    }).catch(j => {
                        n.status = "rejected", n.reason = j, w(["reject", [a], j])
                    });
                    else {
                        !P.has(n) && s(n) && (V = A(n));
                        let j = !K.has(V) && P.get(V);
                        j && H(a, j)
                    }
                    return Reflect.set(i, a, V, m), w(["set", [a], n, T]), !0
                }
            });
        g.set(r, $);
        let fe = [F, W, c, ue];
        return P.set($, fe), Reflect.ownKeys(r).forEach(i => {
            let a = Object.getOwnPropertyDescriptor(r, i);
            "value" in a && ($[i] = r[i], delete a.value, delete a.writable), Object.defineProperty(F, i, a)
        }), $
    }) => [A, P, K, e, t, s, o, l, c, g, p],
    [he] = me();

function C(e = {}) {
    return he(e)
}

function D(e, t, s) {
    let o = P.get(e);
    (
        import.meta.env ?
        import.meta.env.MODE : void 0) !== "production" && !o && console.warn("Please use proxy object");
    let l, c = [],
        g = o[3],
        p = !1,
        r = g(h => {
            if (c.push(h), s) {
                t(c.splice(0));
                return
            }
            l || (l = Promise.resolve().then(() => {
                l = void 0, p && t(c.splice(0))
            }))
        });
    return p = !0, () => {
        p = !1, r()
    }
}

function se(e, t) {
    let s = P.get(e);
    (
        import.meta.env ?
        import.meta.env.MODE : void 0) !== "production" && !s && console.warn("Please use proxy object");
    let [o, l, c] = s;
    return c(o, l(), t)
}
var d = C({
        history: ["ConnectWallet"],
        view: "ConnectWallet",
        data: void 0
    }),
    de = {
        state: d,
        subscribe(e) {
            return D(d, () => e(d))
        },
        push(e, t) {
            e !== d.view && (d.view = e, t && (d.data = t), d.history.push(e))
        },
        reset(e) {
            d.view = e, d.history = [e]
        },
        replace(e) {
            d.history.length > 1 && (d.history[d.history.length - 1] = e, d.view = e)
        },
        goBack() {
            if (d.history.length > 1) {
                d.history.pop();
                let [e] = d.history.slice(-1);
                d.view = e
            }
        },
        setData(e) {
            d.data = e
        }
    },
    f = {
        WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        WCM_VERSION: "WCM_VERSION",
        RECOMMENDED_WALLET_AMOUNT: 9,
        isMobile() {
            return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1
        },
        isAndroid() {
            return f.isMobile() && navigator.userAgent.toLowerCase().includes("android")
        },
        isIos() {
            let e = navigator.userAgent.toLowerCase();
            return f.isMobile() && (e.includes("iphone") || e.includes("ipad"))
        },
        isHttpUrl(e) {
            return e.startsWith("http://") || e.startsWith("https://")
        },
        isArray(e) {
            return Array.isArray(e) && e.length > 0
        },
        formatNativeUrl(e, t, s) {
            if (f.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
            let o = e;
            o.includes("://") || (o = e.replaceAll("/", "").replaceAll(":", ""), o = `${o}://`), o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
            let l = encodeURIComponent(t);
            return `${o}wc?uri=${l}`
        },
        formatUniversalUrl(e, t, s) {
            if (!f.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
            let o = e;
            o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
            let l = encodeURIComponent(t);
            return `${o}wc?uri=${l}`
        },
        wait(e) {
            return O(this, null, function*() {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            })
        },
        openHref(e, t) {
            window.open(e, t, "noreferrer noopener")
        },
        setWalletConnectDeepLink(e, t) {
            try {
                localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: e,
                    name: t
                }))
            } catch {
                console.info("Unable to set WalletConnect deep link")
            }
        },
        setWalletConnectAndroidDeepLink(e) {
            try {
                let [t] = e.split("?");
                localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: t,
                    name: "Android"
                }))
            } catch {
                console.info("Unable to set WalletConnect android deep link")
            }
        },
        removeWalletConnectDeepLink() {
            try {
                localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)
            } catch {
                console.info("Unable to remove WalletConnect deep link")
            }
        },
        setModalVersionInStorage() {
            try {
                typeof localStorage < "u" && localStorage.setItem(f.WCM_VERSION, "2.6.2")
            } catch {
                console.info("Unable to set Web3Modal version in storage")
            }
        },
        getWalletRouterData() {
            var e;
            let t = (e = de.state.data) == null ? void 0 : e.Wallet;
            if (!t) throw new Error('Missing "Wallet" view data');
            return t
        }
    },
    ye = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
    u = C({
        enabled: ye,
        userSessionId: "",
        events: [],
        connectedWalletId: void 0
    }),
    be = {
        state: u,
        subscribe(e) {
            return D(u.events, () => e(se(u.events[u.events.length - 1])))
        },
        initialize() {
            u.enabled && typeof(crypto == null ? void 0 : crypto.randomUUID) < "u" && (u.userSessionId = crypto.randomUUID())
        },
        setConnectedWalletId(e) {
            u.connectedWalletId = e
        },
        click(e) {
            if (u.enabled) {
                let t = {
                    type: "CLICK",
                    name: e.name,
                    userSessionId: u.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                u.events.push(t)
            }
        },
        track(e) {
            if (u.enabled) {
                let t = {
                    type: "TRACK",
                    name: e.name,
                    userSessionId: u.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                u.events.push(t)
            }
        },
        view(e) {
            if (u.enabled) {
                let t = {
                    type: "VIEW",
                    name: e.name,
                    userSessionId: u.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                u.events.push(t)
            }
        }
    },
    I = C({
        chains: void 0,
        walletConnectUri: void 0,
        isAuth: !1,
        isCustomDesktop: !1,
        isCustomMobile: !1,
        isDataLoaded: !1,
        isUiLoaded: !1
    }),
    L = {
        state: I,
        subscribe(e) {
            return D(I, () => e(I))
        },
        setChains(e) {
            I.chains = e
        },
        setWalletConnectUri(e) {
            I.walletConnectUri = e
        },
        setIsCustomDesktop(e) {
            I.isCustomDesktop = e
        },
        setIsCustomMobile(e) {
            I.isCustomMobile = e
        },
        setIsDataLoaded(e) {
            I.isDataLoaded = e
        },
        setIsUiLoaded(e) {
            I.isUiLoaded = e
        },
        setIsAuth(e) {
            I.isAuth = e
        }
    },
    B = C({
        projectId: "",
        mobileWallets: void 0,
        desktopWallets: void 0,
        walletImages: void 0,
        chains: void 0,
        enableAuthMode: !1,
        enableExplorer: !0,
        explorerExcludedWalletIds: void 0,
        explorerRecommendedWalletIds: void 0,
        termsOfServiceUrl: void 0,
        privacyPolicyUrl: void 0
    }),
    x = {
        state: B,
        subscribe(e) {
            return D(B, () => e(B))
        },
        setConfig(e) {
            var t, s;
            be.initialize(), L.setChains(e.chains), L.setIsAuth(!!e.enableAuthMode), L.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), L.setIsCustomDesktop(!!((s = e.desktopWallets) != null && s.length)), f.setModalVersionInStorage(), Object.assign(B, e)
        }
    },
    we = Object.defineProperty,
    re = Object.getOwnPropertySymbols,
    ve = Object.prototype.hasOwnProperty,
    Oe = Object.prototype.propertyIsEnumerable,
    ne = (e, t, s) => t in e ? we(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    Ie = (e, t) => {
        for (var s in t || (t = {})) ve.call(t, s) && ne(e, s, t[s]);
        if (re)
            for (var s of re(t)) Oe.call(t, s) && ne(e, s, t[s]);
        return e
    },
    Q = "https://explorer-api.walletconnect.com",
    X = "wcm",
    Y = "js-2.6.2";

function z(e, t) {
    return O(this, null, function*() {
        let s = Ie({
                sdkType: X,
                sdkVersion: Y
            }, t),
            o = new URL(e, Q);
        return o.searchParams.append("projectId", x.state.projectId), Object.entries(s).forEach(([l, c]) => {
            c && o.searchParams.append(l, String(c))
        }), (yield fetch(o)).json()
    })
}
var k = {
        getDesktopListings(e) {
            return O(this, null, function*() {
                return z("/w3m/v1/getDesktopListings", e)
            })
        },
        getMobileListings(e) {
            return O(this, null, function*() {
                return z("/w3m/v1/getMobileListings", e)
            })
        },
        getInjectedListings(e) {
            return O(this, null, function*() {
                return z("/w3m/v1/getInjectedListings", e)
            })
        },
        getAllListings(e) {
            return O(this, null, function*() {
                return z("/w3m/v1/getAllListings", e)
            })
        },
        getWalletImageUrl(e) {
            return `${Q}/w3m/v1/getWalletImage/${e}?projectId=${x.state.projectId}&sdkType=${X}&sdkVersion=${Y}`
        },
        getAssetImageUrl(e) {
            return `${Q}/w3m/v1/getAssetImage/${e}?projectId=${x.state.projectId}&sdkType=${X}&sdkVersion=${Y}`
        }
    },
    Ee = Object.defineProperty,
    oe = Object.getOwnPropertySymbols,
    Le = Object.prototype.hasOwnProperty,
    We = Object.prototype.propertyIsEnumerable,
    ae = (e, t, s) => t in e ? Ee(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    Ce = (e, t) => {
        for (var s in t || (t = {})) Le.call(t, s) && ae(e, s, t[s]);
        if (oe)
            for (var s of oe(t)) We.call(t, s) && ae(e, s, t[s]);
        return e
    },
    ie = f.isMobile(),
    E = C({
        wallets: {
            listings: [],
            total: 0,
            page: 1
        },
        search: {
            listings: [],
            total: 0,
            page: 1
        },
        recomendedWallets: []
    }),
    _e = {
        state: E,
        getRecomendedWallets() {
            return O(this, null, function*() {
                let {
                    explorerRecommendedWalletIds: e,
                    explorerExcludedWalletIds: t
                } = x.state;
                if (e === "NONE" || t === "ALL" && !e) return E.recomendedWallets;
                if (f.isArray(e)) {
                    let s = {
                            recommendedIds: e.join(",")
                        },
                        {
                            listings: o
                        } = yield k.getAllListings(s), l = Object.values(o);
                    l.sort((c, g) => {
                        let p = e.indexOf(c.id),
                            A = e.indexOf(g.id);
                        return p - A
                    }), E.recomendedWallets = l
                } else {
                    let {
                        chains: s,
                        isAuth: o
                    } = L.state, l = s ? .join(","), c = f.isArray(t), g = {
                        page: 1,
                        sdks: o ? "auth_v1" : void 0,
                        entries: f.RECOMMENDED_WALLET_AMOUNT,
                        chains: l,
                        version: 2,
                        excludedIds: c ? t.join(",") : void 0
                    }, {
                        listings: p
                    } = ie ? yield k.getMobileListings(g): yield k.getDesktopListings(g);
                    E.recomendedWallets = Object.values(p)
                }
                return E.recomendedWallets
            })
        },
        getWallets(e) {
            return O(this, null, function*() {
                let t = Ce({}, e),
                    {
                        explorerRecommendedWalletIds: s,
                        explorerExcludedWalletIds: o
                    } = x.state,
                    {
                        recomendedWallets: l
                    } = E;
                if (o === "ALL") return E.wallets;
                l.length ? t.excludedIds = l.map(v => v.id).join(",") : f.isArray(s) && (t.excludedIds = s.join(",")), f.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")), L.state.isAuth && (t.sdks = "auth_v1");
                let {
                    page: c,
                    search: g
                } = e, {
                    listings: p,
                    total: A
                } = ie ? yield k.getMobileListings(t): yield k.getDesktopListings(t), r = Object.values(p), h = g ? "search" : "wallets";
                return E[h] = {
                    listings: [...E[h].listings, ...r],
                    total: A,
                    page: c ? ? 1
                }, {
                    listings: r,
                    total: A
                }
            })
        },
        getWalletImageUrl(e) {
            return k.getWalletImageUrl(e)
        },
        getAssetImageUrl(e) {
            return k.getAssetImageUrl(e)
        },
        resetSearch() {
            E.search = {
                listings: [],
                total: 0,
                page: 1
            }
        }
    },
    N = C({
        open: !1
    }),
    xe = {
        state: N,
        subscribe(e) {
            return D(N, () => e(N))
        },
        open(e) {
            return O(this, null, function*() {
                return new Promise(t => {
                    let {
                        isUiLoaded: s,
                        isDataLoaded: o
                    } = L.state;
                    if (f.removeWalletConnectDeepLink(), L.setWalletConnectUri(e ? .uri), L.setChains(e ? .chains), de.reset("ConnectWallet"), s && o) N.open = !0, t();
                    else {
                        let l = setInterval(() => {
                            let c = L.state;
                            c.isUiLoaded && c.isDataLoaded && (clearInterval(l), N.open = !0, t())
                        }, 200)
                    }
                })
            })
        },
        close() {
            N.open = !1
        }
    },
    Ae = Object.defineProperty,
    le = Object.getOwnPropertySymbols,
    je = Object.prototype.hasOwnProperty,
    Pe = Object.prototype.propertyIsEnumerable,
    ce = (e, t, s) => t in e ? Ae(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    De = (e, t) => {
        for (var s in t || (t = {})) je.call(t, s) && ce(e, s, t[s]);
        if (le)
            for (var s of le(t)) Pe.call(t, s) && ce(e, s, t[s]);
        return e
    };

function Me() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches
}
var _ = C({
        themeMode: Me() ? "dark" : "light"
    }),
    $e = {
        state: _,
        subscribe(e) {
            return D(_, () => e(_))
        },
        setThemeConfig(e) {
            let {
                themeMode: t,
                themeVariables: s
            } = e;
            t && (_.themeMode = t), s && (_.themeVariables = De({}, s))
        }
    },
    U = C({
        open: !1,
        message: "",
        variant: "success"
    }),
    Ve = {
        state: U,
        subscribe(e) {
            return D(U, () => e(U))
        },
        openToast(e, t) {
            U.open = !0, U.message = e, U.variant = t
        },
        closeToast() {
            U.open = !1
        }
    };
export {
    de as a, f as b, be as c, L as d, x as e, _e as f, xe as g, $e as h, Ve as i
};