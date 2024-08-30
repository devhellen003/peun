var i = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

function u(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`positive integer expected, not ${t}`)
}

function l(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array"
}

function c(t, ...e) {
    if (!l(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)
}

function x(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    u(t.outputLen), u(t.blockLen)
}

function g(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called")
}

function w(t, e) {
    c(t);
    let o = e.outputLen;
    if (t.length < o) throw new Error(`digestInto() expects output buffer of length at least ${o}`)
}
var L = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
    E = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
    _ = (t, e) => t << 32 - e | t >>> e;
var U = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
    a = t => t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;

function B(t) {
    for (let e = 0; e < t.length; e++) t[e] = a(t[e])
}

function y(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}

function p(t) {
    return typeof t == "string" && (t = y(t)), c(t), t
}

function O(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
        let r = t[n];
        c(r), e += r.length
    }
    let o = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
        let f = t[n];
        o.set(f, r), r += f.length
    }
    return o
}
var s = class {
        clone() {
            return this._cloneInto()
        }
    },
    T = {}.toString;

function k(t) {
    let e = n => t().update(p(n)).digest(),
        o = t();
    return e.outputLen = o.outputLen, e.blockLen = o.blockLen, e.create = () => t(), e
}

function S(t) {
    let e = (n, r) => t(r).update(p(n)).digest(),
        o = t({});
    return e.outputLen = o.outputLen, e.blockLen = o.blockLen, e.create = n => t(n), e
}

function j(t = 32) {
    if (i && typeof i.getRandomValues == "function") return i.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined")
}
export {
    u as a, c as b, x as c, g as d, w as e, L as f, E as g, _ as h, U as i, B as j, p as k, O as l, s as m, k as n, S as o, j as p
};