var s = Object.create;
var j = Object.defineProperty,
    t = Object.defineProperties,
    u = Object.getOwnPropertyDescriptor,
    v = Object.getOwnPropertyDescriptors,
    w = Object.getOwnPropertyNames,
    k = Object.getOwnPropertySymbols,
    q = Object.getPrototypeOf,
    o = Object.prototype.hasOwnProperty,
    r = Object.prototype.propertyIsEnumerable,
    x = Reflect.get;
var n = (a, b) => (b = Symbol[a]) ? b : Symbol.for("Symbol." + a);
var p = (a, b, c) => b in a ? j(a, b, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: c
    }) : a[b] = c,
    z = (a, b) => {
        for (var c in b || = {}) o.call(b, c) && p(a, c, b[c]);
        if (k)
            for (var c of k(b)) r.call(b, c) && p(a, c, b[c]);
        return a
    },
    A = (a, b) => t(a, v(b));
var B = (a => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(a, {
    get: (b, c) => (typeof require < "u" ? require : b)[c]
}) : a)(function(a) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + a + '" is not supported')
});
var C = (a, b) => {
    var c = {};
    for (var d in a) o.call(a, d) && b.indexOf(d) < 0 && (c[d] = a[d]);
    if (a != null && k)
        for (var d of k(a)) b.indexOf(d) < 0 && r.call(a, d) && (c[d] = a[d]);
    return c
};
var D = (a, b) => () => (a && (b = a(a = 0)), b);
var E = (a, b) => () => (b || a((b = {
        exports: {}
    }).exports, b), b.exports),
    F = (a, b) => {
        for (var c in b) j(a, c, {
            get: b[c],
            enumerable: !0
        })
    },
    l = (a, b, c, d) => {
        if (b && typeof b == "object" || typeof b == "function")
            for (let e of w(b)) !o.call(a, e) && e !== c && j(a, e, {
                get: () => b[e],
                enumerable: !(d = u(b, e)) || d.enumerable
            });
        return a
    },
    G = (a, b, c) => (l(a, b, "default"), c && l(c, b, "default")),
    H = (a, b, c) => (c = a != null ? s(q(a)) : {}, l(b || !a || !a.__esModule ? j(c, "default", {
        value: a,
        enumerable: !0
    }) : c, a)),
    I = a => l(j({}, "__esModule", {
        value: !0
    }), a);
var J = (a, b, c) => x(q(a), c, b);
var K = (a, b, c) => new Promise((d, e) => {
        var f = g => {
                try {
                    i(c.next(g))
                } catch (m) {
                    e(m)
                }
            },
            h = g => {
                try {
                    i(c.throw(g))
                } catch (m) {
                    e(m)
                }
            },
            i = g => g.done ? d(g.value) : Promise.resolve(g.value).then(f, h);
        i((c = c.apply(a, b)).next())
    }),
    y = function(a, b) {
        this[0] = a, this[1] = b
    };
var L = a => {
    var b = a[n("asyncIterator")],
        c = !1,
        d, e = {};
    return b == null ? (b = a[n("iterator")](), d = f => e[f] = h => b[f](h)) : (b = b.call(a), d = f => e[f] = h => {
        if (c) {
            if (c = !1, f === "throw") throw h;
            return h
        }
        return c = !0, {
            done: !1,
            value: new y(new Promise(i => {
                var g = b[f](h);
                if (!(g instanceof Object)) throw TypeError("Object expected");
                i(g)
            }), 1)
        }
    }), e[n("iterator")] = () => e, d("next"), "throw" in b ? d("throw") : e.throw = f => {
        throw f
    }, "return" in b && d("return"), e
};
export {
    z as a, A as b, B as c, C as d, D as e, E as f, F as g, G as h, H as i, I as j, J as k, K as l, L as m
};