import {
    d as B,
    e as C,
    g,
    h as a,
    k as U,
    m as _,
    n as H
} from "./chunk-2QCO2I2U.js";

function D(r, t, n, s) {
    if (typeof r.setBigUint64 == "function") return r.setBigUint64(t, n, s);
    let i = BigInt(32),
        o = BigInt(4294967295),
        e = Number(n >> i & o),
        h = Number(n & o),
        f = s ? 4 : 0,
        x = s ? 0 : 4;
    r.setUint32(t + f, e, s), r.setUint32(t + x, h, s)
}
var L = (r, t, n) => r & t ^ ~r & n,
    I = (r, t, n) => r & t ^ r & n ^ t & n,
    w = class extends _ {
        constructor(t, n, s, i) {
            super(), this.blockLen = t, this.outputLen = n, this.padOffset = s, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = g(this.buffer)
        }
        update(t) {
            B(this);
            let {
                view: n,
                buffer: s,
                blockLen: i
            } = this;
            t = U(t);
            let o = t.length;
            for (let e = 0; e < o;) {
                let h = Math.min(i - this.pos, o - e);
                if (h === i) {
                    let f = g(t);
                    for (; i <= o - e; e += i) this.process(f, e);
                    continue
                }
                s.set(t.subarray(e, e + h), this.pos), this.pos += h, e += h, this.pos === i && (this.process(n, 0), this.pos = 0)
            }
            return this.length += t.length, this.roundClean(), this
        }
        digestInto(t) {
            B(this), C(t, this), this.finished = !0;
            let {
                buffer: n,
                view: s,
                blockLen: i,
                isLE: o
            } = this, {
                pos: e
            } = this;
            n[e++] = 128, this.buffer.subarray(e).fill(0), this.padOffset > i - e && (this.process(s, 0), e = 0);
            for (let c = e; c < i; c++) n[c] = 0;
            D(s, i - 8, BigInt(this.length * 8), o), this.process(s, 0);
            let h = g(t),
                f = this.outputLen;
            if (f % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
            let x = f / 4,
                b = this.get();
            if (x > b.length) throw new Error("_sha2: outputLen bigger than state");
            for (let c = 0; c < x; c++) h.setUint32(4 * c, b[c], o)
        }
        digest() {
            let {
                buffer: t,
                outputLen: n
            } = this;
            this.digestInto(t);
            let s = t.slice(0, n);
            return this.destroy(), s
        }
        _cloneInto(t) {
            t || (t = new this.constructor), t.set(...this.get());
            let {
                blockLen: n,
                buffer: s,
                length: i,
                finished: o,
                destroyed: e,
                pos: h
            } = this;
            return t.length = i, t.pos = h, t.finished = o, t.destroyed = e, i % n && t.buffer.set(s), t
        }
    };
var E = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    u = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    d = new Uint32Array(64),
    y = class extends w {
        constructor() {
            super(64, 32, 8, !1), this.A = u[0] | 0, this.B = u[1] | 0, this.C = u[2] | 0, this.D = u[3] | 0, this.E = u[4] | 0, this.F = u[5] | 0, this.G = u[6] | 0, this.H = u[7] | 0
        }
        get() {
            let {
                A: t,
                B: n,
                C: s,
                D: i,
                E: o,
                F: e,
                G: h,
                H: f
            } = this;
            return [t, n, s, i, o, e, h, f]
        }
        set(t, n, s, i, o, e, h, f) {
            this.A = t | 0, this.B = n | 0, this.C = s | 0, this.D = i | 0, this.E = o | 0, this.F = e | 0, this.G = h | 0, this.H = f | 0
        }
        process(t, n) {
            for (let c = 0; c < 16; c++, n += 4) d[c] = t.getUint32(n, !1);
            for (let c = 16; c < 64; c++) {
                let p = d[c - 15],
                    l = d[c - 2],
                    A = a(p, 7) ^ a(p, 18) ^ p >>> 3,
                    m = a(l, 17) ^ a(l, 19) ^ l >>> 10;
                d[c] = m + d[c - 7] + A + d[c - 16] | 0
            }
            let {
                A: s,
                B: i,
                C: o,
                D: e,
                E: h,
                F: f,
                G: x,
                H: b
            } = this;
            for (let c = 0; c < 64; c++) {
                let p = a(h, 6) ^ a(h, 11) ^ a(h, 25),
                    l = b + p + L(h, f, x) + E[c] + d[c] | 0,
                    m = (a(s, 2) ^ a(s, 13) ^ a(s, 22)) + I(s, i, o) | 0;
                b = x, x = f, f = h, h = e + l | 0, e = o, o = i, i = s, s = l + m | 0
            }
            s = s + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, e = e + this.D | 0, h = h + this.E | 0, f = f + this.F | 0, x = x + this.G | 0, b = b + this.H | 0, this.set(s, i, o, e, h, f, x, b)
        }
        roundClean() {
            d.fill(0)
        }
        destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
        }
    };
var W = H(() => new y);
export {
    W as a
};