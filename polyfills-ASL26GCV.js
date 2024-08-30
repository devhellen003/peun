var Vt = (r, t) => () => (t || r((t = {
    exports: {}
}).exports, t), t.exports);
var qe = Vt(Yt => {
    "use strict";
    Yt.byteLength = Dr;
    Yt.toByteArray = Lr;
    Yt.fromByteArray = Mr;
    var ft = [],
        st = [],
        vr = typeof Uint8Array < "u" ? Uint8Array : Array,
        pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (bt = 0, Ve = pe.length; bt < Ve; ++bt) ft[bt] = pe[bt], st[pe.charCodeAt(bt)] = bt;
    var bt, Ve;
    st[45] = 62;
    st[95] = 63;

    function $e(r) {
        var t = r.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var e = r.indexOf("=");
        e === -1 && (e = t);
        var n = e === t ? 0 : 4 - e % 4;
        return [e, n]
    }

    function Dr(r) {
        var t = $e(r),
            e = t[0],
            n = t[1];
        return (e + n) * 3 / 4 - n
    }

    function Nr(r, t, e) {
        return (t + e) * 3 / 4 - e
    }

    function Lr(r) {
        var t, e = $e(r),
            n = e[0],
            i = e[1],
            o = new vr(Nr(r, n, i)),
            s = 0,
            l = i > 0 ? n - 4 : n,
            p;
        for (p = 0; p < l; p += 4) t = st[r.charCodeAt(p)] << 18 | st[r.charCodeAt(p + 1)] << 12 | st[r.charCodeAt(p + 2)] << 6 | st[r.charCodeAt(p + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255;
        return i === 2 && (t = st[r.charCodeAt(p)] << 2 | st[r.charCodeAt(p + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = st[r.charCodeAt(p)] << 10 | st[r.charCodeAt(p + 1)] << 4 | st[r.charCodeAt(p + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o
    }

    function Or(r) {
        return ft[r >> 18 & 63] + ft[r >> 12 & 63] + ft[r >> 6 & 63] + ft[r & 63]
    }

    function Ur(r, t, e) {
        for (var n, i = [], o = t; o < e; o += 3) n = (r[o] << 16 & 16711680) + (r[o + 1] << 8 & 65280) + (r[o + 2] & 255), i.push(Or(n));
        return i.join("")
    }

    function Mr(r) {
        for (var t, e = r.length, n = e % 3, i = [], o = 16383, s = 0, l = e - n; s < l; s += o) i.push(Ur(r, s, s + o > l ? l : s + o));
        return n === 1 ? (t = r[e - 1], i.push(ft[t >> 2] + ft[t << 4 & 63] + "==")) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1], i.push(ft[t >> 10] + ft[t >> 4 & 63] + ft[t << 2 & 63] + "=")), i.join("")
    }
});
var We = Vt(de => {
    "use strict";
    de.read = function(r, t, e, n, i) {
        var o, s, l = i * 8 - n - 1,
            p = (1 << l) - 1,
            y = p >> 1,
            h = -7,
            g = e ? i - 1 : 0,
            C = e ? -1 : 1,
            b = r[t + g];
        for (g += C, o = b & (1 << -h) - 1, b >>= -h, h += l; h > 0; o = o * 256 + r[t + g], g += C, h -= 8);
        for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = s * 256 + r[t + g], g += C, h -= 8);
        if (o === 0) o = 1 - y;
        else {
            if (o === p) return s ? NaN : (b ? -1 : 1) * (1 / 0);
            s = s + Math.pow(2, n), o = o - y
        }
        return (b ? -1 : 1) * s * Math.pow(2, o - n)
    };
    de.write = function(r, t, e, n, i, o) {
        var s, l, p, y = o * 8 - i - 1,
            h = (1 << y) - 1,
            g = h >> 1,
            C = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            b = n ? 0 : o - 1,
            j = n ? 1 : -1,
            U = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, s = h) : (s = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -s)) < 1 && (s--, p *= 2), s + g >= 1 ? t += C / p : t += C * Math.pow(2, 1 - g), t * p >= 2 && (s++, p /= 2), s + g >= h ? (l = 0, s = h) : s + g >= 1 ? (l = (t * p - 1) * Math.pow(2, i), s = s + g) : (l = t * Math.pow(2, g - 1) * Math.pow(2, i), s = 0)); i >= 8; r[e + b] = l & 255, b += j, l /= 256, i -= 8);
        for (s = s << i | l, y += i; y > 0; r[e + b] = s & 255, b += j, s /= 256, y -= 8);
        r[e + b - j] |= U * 128
    }
});
var lr = Vt(Lt => {
    "use strict";
    var ye = qe(),
        Dt = We(),
        Xe = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Lt.Buffer = u;
    Lt.SlowBuffer = $r;
    Lt.INSPECT_MAX_BYTES = 50;
    var zt = 2147483647;
    Lt.kMaxLength = zt;
    u.TYPED_ARRAY_SUPPORT = Zr();
    !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function Zr() {
        try {
            let r = new Uint8Array(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(r, t), r.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(u.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (u.isBuffer(this)) return this.buffer
        }
    });
    Object.defineProperty(u.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (u.isBuffer(this)) return this.byteOffset
        }
    });

    function _t(r) {
        if (r > zt) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        let t = new Uint8Array(r);
        return Object.setPrototypeOf(t, u.prototype), t
    }

    function u(r, t, e) {
        if (typeof r == "number") {
            if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return _e(r)
        }
        return Ke(r, t, e)
    }
    u.poolSize = 8192;

    function Ke(r, t, e) {
        if (typeof r == "string") return Hr(r, t);
        if (ArrayBuffer.isView(r)) return Gr(r);
        if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (ht(r, ArrayBuffer) || r && ht(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ht(r, SharedArrayBuffer) || r && ht(r.buffer, SharedArrayBuffer))) return me(r, t, e);
        if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return u.from(n, t, e);
        let i = Vr(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return u.from(r[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
    }
    u.from = function(r, t, e) {
        return Ke(r, t, e)
    };
    Object.setPrototypeOf(u.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(u, Uint8Array);

    function Qe(r) {
        if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"')
    }

    function jr(r, t, e) {
        return Qe(r), r <= 0 ? _t(r) : t !== void 0 ? typeof e == "string" ? _t(r).fill(t, e) : _t(r).fill(t) : _t(r)
    }
    u.alloc = function(r, t, e) {
        return jr(r, t, e)
    };

    function _e(r) {
        return Qe(r), _t(r < 0 ? 0 : Te(r) | 0)
    }
    u.allocUnsafe = function(r) {
        return _e(r)
    };
    u.allocUnsafeSlow = function(r) {
        return _e(r)
    };

    function Hr(r, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !u.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        let e = tr(r, t) | 0,
            n = _t(e),
            i = n.write(r, t);
        return i !== e && (n = n.slice(0, i)), n
    }

    function Ee(r) {
        let t = r.length < 0 ? 0 : Te(r.length) | 0,
            e = _t(t);
        for (let n = 0; n < t; n += 1) e[n] = r[n] & 255;
        return e
    }

    function Gr(r) {
        if (ht(r, Uint8Array)) {
            let t = new Uint8Array(r);
            return me(t.buffer, t.byteOffset, t.byteLength)
        }
        return Ee(r)
    }

    function me(r, t, e) {
        if (t < 0 || r.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < t + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && e === void 0 ? n = new Uint8Array(r) : e === void 0 ? n = new Uint8Array(r, t) : n = new Uint8Array(r, t, e), Object.setPrototypeOf(n, u.prototype), n
    }

    function Vr(r) {
        if (u.isBuffer(r)) {
            let t = Te(r.length) | 0,
                e = _t(t);
            return e.length === 0 || r.copy(e, 0, 0, t), e
        }
        if (r.length !== void 0) return typeof r.length != "number" || ke(r.length) ? _t(0) : Ee(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return Ee(r.data)
    }

    function Te(r) {
        if (r >= zt) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + zt.toString(16) + " bytes");
        return r | 0
    }

    function $r(r) {
        return +r != r && (r = 0), u.alloc(+r)
    }
    u.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== u.prototype
    };
    u.compare = function(t, e) {
        if (ht(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), ht(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        let n = t.length,
            i = e.length;
        for (let o = 0, s = Math.min(n, i); o < s; ++o)
            if (t[o] !== e[o]) {
                n = t[o], i = e[o];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    };
    u.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    };
    u.concat = function(t, e) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0) return u.alloc(0);
        let n;
        if (e === void 0)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        let i = u.allocUnsafe(e),
            o = 0;
        for (n = 0; n < t.length; ++n) {
            let s = t[n];
            if (ht(s, Uint8Array)) o + s.length > i.length ? (u.isBuffer(s) || (s = u.from(s)), s.copy(i, o)) : Uint8Array.prototype.set.call(i, s, o);
            else if (u.isBuffer(s)) s.copy(i, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += s.length
        }
        return i
    };

    function tr(r, t) {
        if (u.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || ht(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        let e = r.length,
            n = arguments.length > 2 && arguments[2] === !0;
        if (!n && e === 0) return 0;
        let i = !1;
        for (;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return ge(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return ar(r).length;
            default:
                if (i) return n ? -1 : ge(r).length;
                t = ("" + t).toLowerCase(), i = !0
        }
    }
    u.byteLength = tr;

    function qr(r, t, e) {
        let n = !1;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, t >>>= 0, e <= t)) return "";
        for (r || (r = "utf8");;) switch (r) {
            case "hex":
                return rn(this, t, e);
            case "utf8":
            case "utf-8":
                return rr(this, t, e);
            case "ascii":
                return tn(this, t, e);
            case "latin1":
            case "binary":
                return en(this, t, e);
            case "base64":
                return Kr(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return nn(this, t, e);
            default:
                if (n) throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0
        }
    }
    u.prototype._isBuffer = !0;

    function Rt(r, t, e) {
        let n = r[t];
        r[t] = r[e], r[e] = n
    }
    u.prototype.swap16 = function() {
        let t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2) Rt(this, e, e + 1);
        return this
    };
    u.prototype.swap32 = function() {
        let t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let e = 0; e < t; e += 4) Rt(this, e, e + 3), Rt(this, e + 1, e + 2);
        return this
    };
    u.prototype.swap64 = function() {
        let t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let e = 0; e < t; e += 8) Rt(this, e, e + 7), Rt(this, e + 1, e + 6), Rt(this, e + 2, e + 5), Rt(this, e + 3, e + 4);
        return this
    };
    u.prototype.toString = function() {
        let t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? rr(this, 0, t) : qr.apply(this, arguments)
    };
    u.prototype.toLocaleString = u.prototype.toString;
    u.prototype.equals = function(t) {
        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : u.compare(this, t) === 0
    };
    u.prototype.inspect = function() {
        let t = "",
            e = Lt.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    };
    Xe && (u.prototype[Xe] = u.prototype.inspect);
    u.prototype.compare = function(t, e, n, i, o) {
        if (ht(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0), n === void 0 && (n = t ? t.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), e < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
        if (i >= o && e >= n) return 0;
        if (i >= o) return -1;
        if (e >= n) return 1;
        if (e >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t) return 0;
        let s = o - i,
            l = n - e,
            p = Math.min(s, l),
            y = this.slice(i, o),
            h = t.slice(e, n);
        for (let g = 0; g < p; ++g)
            if (y[g] !== h[g]) {
                s = y[g], l = h[g];
                break
            }
        return s < l ? -1 : l < s ? 1 : 0
    };

    function er(r, t, e, n, i) {
        if (r.length === 0) return -1;
        if (typeof e == "string" ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, ke(e) && (e = i ? 0 : r.length - 1), e < 0 && (e = r.length + e), e >= r.length) {
            if (i) return -1;
            e = r.length - 1
        } else if (e < 0)
            if (i) e = 0;
            else return -1;
        if (typeof t == "string" && (t = u.from(t, n)), u.isBuffer(t)) return t.length === 0 ? -1 : Ye(r, t, e, n, i);
        if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, t, e) : Uint8Array.prototype.lastIndexOf.call(r, t, e) : Ye(r, [t], e, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }

    function Ye(r, t, e, n, i) {
        let o = 1,
            s = r.length,
            l = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (r.length < 2 || t.length < 2) return -1;
            o = 2, s /= 2, l /= 2, e /= 2
        }

        function p(h, g) {
            return o === 1 ? h[g] : h.readUInt16BE(g * o)
        }
        let y;
        if (i) {
            let h = -1;
            for (y = e; y < s; y++)
                if (p(r, y) === p(t, h === -1 ? 0 : y - h)) {
                    if (h === -1 && (h = y), y - h + 1 === l) return h * o
                } else h !== -1 && (y -= y - h), h = -1
        } else
            for (e + l > s && (e = s - l), y = e; y >= 0; y--) {
                let h = !0;
                for (let g = 0; g < l; g++)
                    if (p(r, y + g) !== p(t, g)) {
                        h = !1;
                        break
                    }
                if (h) return y
            }
        return -1
    }
    u.prototype.includes = function(t, e, n) {
        return this.indexOf(t, e, n) !== -1
    };
    u.prototype.indexOf = function(t, e, n) {
        return er(this, t, e, n, !0)
    };
    u.prototype.lastIndexOf = function(t, e, n) {
        return er(this, t, e, n, !1)
    };

    function Wr(r, t, e, n) {
        e = Number(e) || 0;
        let i = r.length - e;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
            let l = parseInt(t.substr(s * 2, 2), 16);
            if (ke(l)) return s;
            r[e + s] = l
        }
        return s
    }

    function Xr(r, t, e, n) {
        return Jt(ge(t, r.length - e), r, e, n)
    }

    function Yr(r, t, e, n) {
        return Jt(un(t), r, e, n)
    }

    function zr(r, t, e, n) {
        return Jt(ar(t), r, e, n)
    }

    function Jr(r, t, e, n) {
        return Jt(an(t, r.length - e), r, e, n)
    }
    u.prototype.write = function(t, e, n, i) {
        if (e === void 0) i = "utf8", n = this.length, e = 0;
        else if (n === void 0 && typeof e == "string") i = e, n = this.length, e = 0;
        else if (isFinite(e)) e = e >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - e;
        if ((n === void 0 || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let s = !1;
        for (;;) switch (i) {
            case "hex":
                return Wr(this, t, e, n);
            case "utf8":
            case "utf-8":
                return Xr(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
                return Yr(this, t, e, n);
            case "base64":
                return zr(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Jr(this, t, e, n);
            default:
                if (s) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), s = !0
        }
    };
    u.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function Kr(r, t, e) {
        return t === 0 && e === r.length ? ye.fromByteArray(r) : ye.fromByteArray(r.slice(t, e))
    }

    function rr(r, t, e) {
        e = Math.min(r.length, e);
        let n = [],
            i = t;
        for (; i < e;) {
            let o = r[i],
                s = null,
                l = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + l <= e) {
                let p, y, h, g;
                switch (l) {
                    case 1:
                        o < 128 && (s = o);
                        break;
                    case 2:
                        p = r[i + 1], (p & 192) === 128 && (g = (o & 31) << 6 | p & 63, g > 127 && (s = g));
                        break;
                    case 3:
                        p = r[i + 1], y = r[i + 2], (p & 192) === 128 && (y & 192) === 128 && (g = (o & 15) << 12 | (p & 63) << 6 | y & 63, g > 2047 && (g < 55296 || g > 57343) && (s = g));
                        break;
                    case 4:
                        p = r[i + 1], y = r[i + 2], h = r[i + 3], (p & 192) === 128 && (y & 192) === 128 && (h & 192) === 128 && (g = (o & 15) << 18 | (p & 63) << 12 | (y & 63) << 6 | h & 63, g > 65535 && g < 1114112 && (s = g))
                }
            }
            s === null ? (s = 65533, l = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += l
        }
        return Qr(n)
    }
    var ze = 4096;

    function Qr(r) {
        let t = r.length;
        if (t <= ze) return String.fromCharCode.apply(String, r);
        let e = "",
            n = 0;
        for (; n < t;) e += String.fromCharCode.apply(String, r.slice(n, n += ze));
        return e
    }

    function tn(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i) n += String.fromCharCode(r[i] & 127);
        return n
    }

    function en(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i) n += String.fromCharCode(r[i]);
        return n
    }

    function rn(r, t, e) {
        let n = r.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > n) && (e = n);
        let i = "";
        for (let o = t; o < e; ++o) i += ln[r[o]];
        return i
    }

    function nn(r, t, e) {
        let n = r.slice(t, e),
            i = "";
        for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i
    }
    u.prototype.slice = function(t, e) {
        let n = this.length;
        t = ~~t, e = e === void 0 ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
        let i = this.subarray(t, e);
        return Object.setPrototypeOf(i, u.prototype), i
    };

    function Q(r, t, e) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + t > e) throw new RangeError("Trying to access beyond buffer length")
    }
    u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Q(t, e, this.length);
        let i = this[t],
            o = 1,
            s = 0;
        for (; ++s < e && (o *= 256);) i += this[t + s] * o;
        return i
    };
    u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Q(t, e, this.length);
        let i = this[t + --e],
            o = 1;
        for (; e > 0 && (o *= 256);) i += this[t + --e] * o;
        return i
    };
    u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0, e || Q(t, 1, this.length), this[t]
    };
    u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0, e || Q(t, 2, this.length), this[t] | this[t + 1] << 8
    };
    u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0, e || Q(t, 2, this.length), this[t] << 8 | this[t + 1]
    };
    u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0, e || Q(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    };
    u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0, e || Q(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    };
    u.prototype.readBigUInt64LE = It(function(t) {
        t = t >>> 0, Nt(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && Ht(t, this.length - 8);
        let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
            o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
        return BigInt(i) + (BigInt(o) << BigInt(32))
    });
    u.prototype.readBigUInt64BE = It(function(t) {
        t = t >>> 0, Nt(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && Ht(t, this.length - 8);
        let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
            o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
        return (BigInt(i) << BigInt(32)) + BigInt(o)
    });
    u.prototype.readIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Q(t, e, this.length);
        let i = this[t],
            o = 1,
            s = 0;
        for (; ++s < e && (o *= 256);) i += this[t + s] * o;
        return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
    };
    u.prototype.readIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Q(t, e, this.length);
        let i = e,
            o = 1,
            s = this[t + --i];
        for (; i > 0 && (o *= 256);) s += this[t + --i] * o;
        return o *= 128, s >= o && (s -= Math.pow(2, 8 * e)), s
    };
    u.prototype.readInt8 = function(t, e) {
        return t = t >>> 0, e || Q(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    };
    u.prototype.readInt16LE = function(t, e) {
        t = t >>> 0, e || Q(t, 2, this.length);
        let n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    u.prototype.readInt16BE = function(t, e) {
        t = t >>> 0, e || Q(t, 2, this.length);
        let n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    u.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0, e || Q(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    };
    u.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0, e || Q(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    };
    u.prototype.readBigInt64LE = It(function(t) {
        t = t >>> 0, Nt(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && Ht(t, this.length - 8);
        let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    });
    u.prototype.readBigInt64BE = It(function(t) {
        t = t >>> 0, Nt(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && Ht(t, this.length - 8);
        let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n)
    });
    u.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0, e || Q(t, 4, this.length), Dt.read(this, t, !0, 23, 4)
    };
    u.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0, e || Q(t, 4, this.length), Dt.read(this, t, !1, 23, 4)
    };
    u.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0, e || Q(t, 8, this.length), Dt.read(this, t, !0, 52, 8)
    };
    u.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0, e || Q(t, 8, this.length), Dt.read(this, t, !1, 52, 8)
    };

    function it(r, t, e, n, i, o) {
        if (!u.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (e + n > r.length) throw new RangeError("Index out of range")
    }
    u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            let l = Math.pow(2, 8 * n) - 1;
            it(this, t, e, n, l, 0)
        }
        let o = 1,
            s = 0;
        for (this[e] = t & 255; ++s < n && (o *= 256);) this[e + s] = t / o & 255;
        return e + n
    };
    u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            let l = Math.pow(2, 8 * n) - 1;
            it(this, t, e, n, l, 0)
        }
        let o = n - 1,
            s = 1;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256);) this[e + o] = t / s & 255;
        return e + n
    };
    u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1
    };
    u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4
    };
    u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };

    function nr(r, t, e, n, i) {
        ur(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e++] = o, o = o >> 8, r[e++] = o, o = o >> 8, r[e++] = o, o = o >> 8, r[e++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e++] = s, s = s >> 8, r[e++] = s, s = s >> 8, r[e++] = s, s = s >> 8, r[e++] = s, e
    }

    function ir(r, t, e, n, i) {
        ur(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e + 7] = o, o = o >> 8, r[e + 6] = o, o = o >> 8, r[e + 5] = o, o = o >> 8, r[e + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e + 3] = s, s = s >> 8, r[e + 2] = s, s = s >> 8, r[e + 1] = s, s = s >> 8, r[e] = s, e + 8
    }
    u.prototype.writeBigUInt64LE = It(function(t, e = 0) {
        return nr(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    u.prototype.writeBigUInt64BE = It(function(t, e = 0) {
        return ir(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    u.prototype.writeIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            let p = Math.pow(2, 8 * n - 1);
            it(this, t, e, n, p - 1, -p)
        }
        let o = 0,
            s = 1,
            l = 0;
        for (this[e] = t & 255; ++o < n && (s *= 256);) t < 0 && l === 0 && this[e + o - 1] !== 0 && (l = 1), this[e + o] = (t / s >> 0) - l & 255;
        return e + n
    };
    u.prototype.writeIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            let p = Math.pow(2, 8 * n - 1);
            it(this, t, e, n, p - 1, -p)
        }
        let o = n - 1,
            s = 1,
            l = 0;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256);) t < 0 && l === 0 && this[e + o + 1] !== 0 && (l = 1), this[e + o] = (t / s >> 0) - l & 255;
        return e + n
    };
    u.prototype.writeInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1
    };
    u.prototype.writeInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    u.prototype.writeInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    u.prototype.writeInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    };
    u.prototype.writeInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || it(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };
    u.prototype.writeBigInt64LE = It(function(t, e = 0) {
        return nr(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    u.prototype.writeBigInt64BE = It(function(t, e = 0) {
        return ir(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function or(r, t, e, n, i, o) {
        if (e + n > r.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range")
    }

    function sr(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || or(r, t, e, 4, 34028234663852886e22, -34028234663852886e22), Dt.write(r, t, e, n, 23, 4), e + 4
    }
    u.prototype.writeFloatLE = function(t, e, n) {
        return sr(this, t, e, !0, n)
    };
    u.prototype.writeFloatBE = function(t, e, n) {
        return sr(this, t, e, !1, n)
    };

    function cr(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || or(r, t, e, 8, 17976931348623157e292, -17976931348623157e292), Dt.write(r, t, e, n, 52, 8), e + 8
    }
    u.prototype.writeDoubleLE = function(t, e, n) {
        return cr(this, t, e, !0, n)
    };
    u.prototype.writeDoubleBE = function(t, e, n) {
        return cr(this, t, e, !1, n)
    };
    u.prototype.copy = function(t, e, n, i) {
        if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
        let o = i - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), e), o
    };
    u.prototype.fill = function(t, e, n, i) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (i = e, e = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !u.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (t.length === 1) {
                let s = t.charCodeAt(0);
                (i === "utf8" && s < 128 || i === "latin1") && (t = s)
            }
        } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
        let o;
        if (typeof t == "number")
            for (o = e; o < n; ++o) this[o] = t;
        else {
            let s = u.isBuffer(t) ? t : u.from(t, i),
                l = s.length;
            if (l === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (o = 0; o < n - e; ++o) this[o + e] = s[o % l]
        }
        return this
    };
    var vt = {};

    function we(r, t, e) {
        vt[r] = class extends e {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${r}]`, this.stack, delete this.name
            }
            get code() {
                return r
            }
            set code(i) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${r}]: ${this.message}`
            }
        }
    }
    we("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
        return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    we("ERR_INVALID_ARG_TYPE", function(r, t) {
        return `The "${r}" argument must be of type number. Received type ${typeof t}`
    }, TypeError);
    we("ERR_OUT_OF_RANGE", function(r, t, e) {
        let n = `The value of "${r}" is out of range.`,
            i = e;
        return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? i = Je(String(e)) : typeof e == "bigint" && (i = String(e), (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (i = Je(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n
    }, RangeError);

    function Je(r) {
        let t = "",
            e = r.length,
            n = r[0] === "-" ? 1 : 0;
        for (; e >= n + 4; e -= 3) t = `_${r.slice(e-3,e)}${t}`;
        return `${r.slice(0,e)}${t}`
    }

    function on(r, t, e) {
        Nt(t, "offset"), (r[t] === void 0 || r[t + e] === void 0) && Ht(t, r.length - (e + 1))
    }

    function ur(r, t, e, n, i, o) {
        if (r > e || r < t) {
            let s = typeof t == "bigint" ? "n" : "",
                l;
            throw o > 3 ? t === 0 || t === BigInt(0) ? l = `>= 0${s} and < 2${s} ** ${(o+1)*8}${s}` : l = `>= -(2${s} ** ${(o+1)*8-1}${s}) and < 2 ** ${(o+1)*8-1}${s}` : l = `>= ${t}${s} and <= ${e}${s}`, new vt.ERR_OUT_OF_RANGE("value", l, r)
        }
        on(n, i, o)
    }

    function Nt(r, t) {
        if (typeof r != "number") throw new vt.ERR_INVALID_ARG_TYPE(t, "number", r)
    }

    function Ht(r, t, e) {
        throw Math.floor(r) !== r ? (Nt(r, e), new vt.ERR_OUT_OF_RANGE(e || "offset", "an integer", r)) : t < 0 ? new vt.ERR_BUFFER_OUT_OF_BOUNDS : new vt.ERR_OUT_OF_RANGE(e || "offset", `>= ${e?1:0} and <= ${t}`, r)
    }
    var sn = /[^+/0-9A-Za-z-_]/g;

    function cn(r) {
        if (r = r.split("=")[0], r = r.trim().replace(sn, ""), r.length < 2) return "";
        for (; r.length % 4 !== 0;) r = r + "=";
        return r
    }

    function ge(r, t) {
        t = t || 1 / 0;
        let e, n = r.length,
            i = null,
            o = [];
        for (let s = 0; s < n; ++s) {
            if (e = r.charCodeAt(s), e > 55295 && e < 57344) {
                if (!i) {
                    if (e > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), i = e;
                    continue
                }
                e = (i - 55296 << 10 | e - 56320) + 65536
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, e < 128) {
                if ((t -= 1) < 0) break;
                o.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0) break;
                o.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0) break;
                o.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0) break;
                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return o
    }

    function un(r) {
        let t = [];
        for (let e = 0; e < r.length; ++e) t.push(r.charCodeAt(e) & 255);
        return t
    }

    function an(r, t) {
        let e, n, i, o = [];
        for (let s = 0; s < r.length && !((t -= 2) < 0); ++s) e = r.charCodeAt(s), n = e >> 8, i = e % 256, o.push(i), o.push(n);
        return o
    }

    function ar(r) {
        return ye.toByteArray(cn(r))
    }

    function Jt(r, t, e, n) {
        let i;
        for (i = 0; i < n && !(i + e >= t.length || i >= r.length); ++i) t[i + e] = r[i];
        return i
    }

    function ht(r, t) {
        return r instanceof t || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === t.name
    }

    function ke(r) {
        return r !== r
    }
    var ln = function() {
        let r = "0123456789abcdef",
            t = new Array(256);
        for (let e = 0; e < 16; ++e) {
            let n = e * 16;
            for (let i = 0; i < 16; ++i) t[n + i] = r[e] + r[i]
        }
        return t
    }();

    function It(r) {
        return typeof BigInt > "u" ? fn : r
    }

    function fn() {
        throw new Error("BigInt not supported")
    }
});
var yr = Vt((_n, dr) => {
    "use strict";
    var Y = dr.exports = {},
        pt, dt;

    function xe() {
        throw new Error("setTimeout has not been defined")
    }

    function Ie() {
        throw new Error("clearTimeout has not been defined")
    }(function() {
        try {
            typeof setTimeout == "function" ? pt = setTimeout : pt = xe
        } catch {
            pt = xe
        }
        try {
            typeof clearTimeout == "function" ? dt = clearTimeout : dt = Ie
        } catch {
            dt = Ie
        }
    })();

    function fr(r) {
        if (pt === setTimeout) return setTimeout(r, 0);
        if ((pt === xe || !pt) && setTimeout) return pt = setTimeout, setTimeout(r, 0);
        try {
            return pt(r, 0)
        } catch {
            try {
                return pt.call(null, r, 0)
            } catch {
                return pt.call(this, r, 0)
            }
        }
    }

    function hn(r) {
        if (dt === clearTimeout) return clearTimeout(r);
        if ((dt === Ie || !dt) && clearTimeout) return dt = clearTimeout, clearTimeout(r);
        try {
            return dt(r)
        } catch {
            try {
                return dt.call(null, r)
            } catch {
                return dt.call(this, r)
            }
        }
    }
    var Tt = [],
        Ot = !1,
        Ct, Kt = -1;

    function pn() {
        !Ot || !Ct || (Ot = !1, Ct.length ? Tt = Ct.concat(Tt) : Kt = -1, Tt.length && hr())
    }

    function hr() {
        if (!Ot) {
            var r = fr(pn);
            Ot = !0;
            for (var t = Tt.length; t;) {
                for (Ct = Tt, Tt = []; ++Kt < t;) Ct && Ct[Kt].run();
                Kt = -1, t = Tt.length
            }
            Ct = null, Ot = !1, hn(r)
        }
    }
    Y.nextTick = function(r) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
        Tt.push(new pr(r, t)), Tt.length === 1 && !Ot && fr(hr)
    };

    function pr(r, t) {
        this.fun = r, this.array = t
    }
    pr.prototype.run = function() {
        this.fun.apply(null, this.array)
    };
    Y.title = "browser";
    Y.browser = !0;
    Y.env = {};
    Y.argv = [];
    Y.version = "";
    Y.versions = {};

    function wt() {}
    Y.on = wt;
    Y.addListener = wt;
    Y.once = wt;
    Y.off = wt;
    Y.removeListener = wt;
    Y.removeAllListeners = wt;
    Y.emit = wt;
    Y.prependListener = wt;
    Y.prependOnceListener = wt;
    Y.listeners = function(r) {
        return []
    };
    Y.binding = function(r) {
        throw new Error("process.binding is not supported")
    };
    Y.cwd = function() {
        return "/"
    };
    Y.chdir = function(r) {
        throw new Error("process.chdir is not supported")
    };
    Y.umask = function() {
        return 0
    }
});
(function(r) {
    let t = r.performance;

    function e(O) {
        t && t.mark && t.mark(O)
    }

    function n(O, _) {
        t && t.measure && t.measure(O, _)
    }
    e("Zone");
    let i = r.__Zone_symbol_prefix || "__zone_symbol__";

    function o(O) {
        return i + O
    }
    let s = r[o("forceDuplicateZoneCheck")] === !0;
    if (r.Zone) {
        if (s || typeof r.Zone.__symbol__ != "function") throw new Error("Zone already loaded.");
        return r.Zone
    }
    let l = (() => {
            let _ = class _ {
                static assertZonePatched() {
                    if (r.Promise !== at.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                }
                static get root() {
                    let c = _.current;
                    for (; c.parent;) c = c.parent;
                    return c
                }
                static get current() {
                    return q.zone
                }
                static get currentTask() {
                    return ct
                }
                static __load_patch(c, w, A = !1) {
                    if (at.hasOwnProperty(c)) {
                        if (!A && s) throw Error("Already loaded patch: " + c)
                    } else if (!r["__Zone_disable_" + c]) {
                        let L = "Zone:" + c;
                        e(L), at[c] = w(r, _, J), n(L, L)
                    }
                }
                get parent() {
                    return this._parent
                }
                get name() {
                    return this._name
                }
                constructor(c, w) {
                    this._parent = c, this._name = w ? w.name || "unnamed" : "<root>", this._properties = w && w.properties || {}, this._zoneDelegate = new y(this, this._parent && this._parent._zoneDelegate, w)
                }
                get(c) {
                    let w = this.getZoneWith(c);
                    if (w) return w._properties[c]
                }
                getZoneWith(c) {
                    let w = this;
                    for (; w;) {
                        if (w._properties.hasOwnProperty(c)) return w;
                        w = w._parent
                    }
                    return null
                }
                fork(c) {
                    if (!c) throw new Error("ZoneSpec required!");
                    return this._zoneDelegate.fork(this, c)
                }
                wrap(c, w) {
                    if (typeof c != "function") throw new Error("Expecting function got: " + c);
                    let A = this._zoneDelegate.intercept(this, c, w),
                        L = this;
                    return function() {
                        return L.runGuarded(A, this, arguments, w)
                    }
                }
                run(c, w, A, L) {
                    q = {
                        parent: q,
                        zone: this
                    };
                    try {
                        return this._zoneDelegate.invoke(this, c, w, A, L)
                    } finally {
                        q = q.parent
                    }
                }
                runGuarded(c, w = null, A, L) {
                    q = {
                        parent: q,
                        zone: this
                    };
                    try {
                        try {
                            return this._zoneDelegate.invoke(this, c, w, A, L)
                        } catch (d) {
                            if (this._zoneDelegate.handleError(this, d)) throw d
                        }
                    } finally {
                        q = q.parent
                    }
                }
                runTask(c, w, A) {
                    if (c.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (c.zone || tt).name + "; Execution: " + this.name + ")");
                    if (c.state === H && (c.type === rt || c.type === R)) return;
                    let L = c.state != x;
                    L && c._transitionTo(x, M), c.runCount++;
                    let d = ct;
                    ct = c, q = {
                        parent: q,
                        zone: this
                    };
                    try {
                        c.type == R && c.data && !c.data.isPeriodic && (c.cancelFn = void 0);
                        try {
                            return this._zoneDelegate.invokeTask(this, c, w, A)
                        } catch (E) {
                            if (this._zoneDelegate.handleError(this, E)) throw E
                        }
                    } finally {
                        c.state !== H && c.state !== T && (c.type == rt || c.data && c.data.isPeriodic ? L && c._transitionTo(M, x) : (c.runCount = 0, this._updateTaskCount(c, -1), L && c._transitionTo(H, x, H))), q = q.parent, ct = d
                    }
                }
                scheduleTask(c) {
                    if (c.zone && c.zone !== this) {
                        let A = this;
                        for (; A;) {
                            if (A === c.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`);
                            A = A.parent
                        }
                    }
                    c._transitionTo(z, H);
                    let w = [];
                    c._zoneDelegates = w, c._zone = this;
                    try {
                        c = this._zoneDelegate.scheduleTask(this, c)
                    } catch (A) {
                        throw c._transitionTo(T, z, H), this._zoneDelegate.handleError(this, A), A
                    }
                    return c._zoneDelegates === w && this._updateTaskCount(c, 1), c.state == z && c._transitionTo(M, z), c
                }
                scheduleMicroTask(c, w, A, L) {
                    return this.scheduleTask(new h(N, c, w, A, L, void 0))
                }
                scheduleMacroTask(c, w, A, L, d) {
                    return this.scheduleTask(new h(R, c, w, A, L, d))
                }
                scheduleEventTask(c, w, A, L, d) {
                    return this.scheduleTask(new h(rt, c, w, A, L, d))
                }
                cancelTask(c) {
                    if (c.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (c.zone || tt).name + "; Execution: " + this.name + ")");
                    if (!(c.state !== M && c.state !== x)) {
                        c._transitionTo(G, M, x);
                        try {
                            this._zoneDelegate.cancelTask(this, c)
                        } catch (w) {
                            throw c._transitionTo(T, G), this._zoneDelegate.handleError(this, w), w
                        }
                        return this._updateTaskCount(c, -1), c._transitionTo(H, G), c.runCount = 0, c
                    }
                }
                _updateTaskCount(c, w) {
                    let A = c._zoneDelegates;
                    w == -1 && (c._zoneDelegates = null);
                    for (let L = 0; L < A.length; L++) A[L]._updateTaskCount(c.type, w)
                }
            };
            _.__symbol__ = o;
            let O = _;
            return O
        })(),
        p = {
            name: "",
            onHasTask: (O, _, f, c) => O.hasTask(f, c),
            onScheduleTask: (O, _, f, c) => O.scheduleTask(f, c),
            onInvokeTask: (O, _, f, c, w, A) => O.invokeTask(f, c, w, A),
            onCancelTask: (O, _, f, c) => O.cancelTask(f, c)
        };
    class y {
        constructor(_, f, c) {
            this._taskCounts = {
                microTask: 0,
                macroTask: 0,
                eventTask: 0
            }, this.zone = _, this._parentDelegate = f, this._forkZS = c && (c && c.onFork ? c : f._forkZS), this._forkDlgt = c && (c.onFork ? f : f._forkDlgt), this._forkCurrZone = c && (c.onFork ? this.zone : f._forkCurrZone), this._interceptZS = c && (c.onIntercept ? c : f._interceptZS), this._interceptDlgt = c && (c.onIntercept ? f : f._interceptDlgt), this._interceptCurrZone = c && (c.onIntercept ? this.zone : f._interceptCurrZone), this._invokeZS = c && (c.onInvoke ? c : f._invokeZS), this._invokeDlgt = c && (c.onInvoke ? f : f._invokeDlgt), this._invokeCurrZone = c && (c.onInvoke ? this.zone : f._invokeCurrZone), this._handleErrorZS = c && (c.onHandleError ? c : f._handleErrorZS), this._handleErrorDlgt = c && (c.onHandleError ? f : f._handleErrorDlgt), this._handleErrorCurrZone = c && (c.onHandleError ? this.zone : f._handleErrorCurrZone), this._scheduleTaskZS = c && (c.onScheduleTask ? c : f._scheduleTaskZS), this._scheduleTaskDlgt = c && (c.onScheduleTask ? f : f._scheduleTaskDlgt), this._scheduleTaskCurrZone = c && (c.onScheduleTask ? this.zone : f._scheduleTaskCurrZone), this._invokeTaskZS = c && (c.onInvokeTask ? c : f._invokeTaskZS), this._invokeTaskDlgt = c && (c.onInvokeTask ? f : f._invokeTaskDlgt), this._invokeTaskCurrZone = c && (c.onInvokeTask ? this.zone : f._invokeTaskCurrZone), this._cancelTaskZS = c && (c.onCancelTask ? c : f._cancelTaskZS), this._cancelTaskDlgt = c && (c.onCancelTask ? f : f._cancelTaskDlgt), this._cancelTaskCurrZone = c && (c.onCancelTask ? this.zone : f._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
            let w = c && c.onHasTask,
                A = f && f._hasTaskZS;
            (w || A) && (this._hasTaskZS = w ? c : p, this._hasTaskDlgt = f, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = _, c.onScheduleTask || (this._scheduleTaskZS = p, this._scheduleTaskDlgt = f, this._scheduleTaskCurrZone = this.zone), c.onInvokeTask || (this._invokeTaskZS = p, this._invokeTaskDlgt = f, this._invokeTaskCurrZone = this.zone), c.onCancelTask || (this._cancelTaskZS = p, this._cancelTaskDlgt = f, this._cancelTaskCurrZone = this.zone))
        }
        fork(_, f) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, _, f) : new l(_, f)
        }
        intercept(_, f, c) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, _, f, c) : f
        }
        invoke(_, f, c, w, A) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, _, f, c, w, A) : f.apply(c, w)
        }
        handleError(_, f) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, _, f) : !0
        }
        scheduleTask(_, f) {
            let c = f;
            if (this._scheduleTaskZS) this._hasTaskZS && c._zoneDelegates.push(this._hasTaskDlgtOwner), c = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, _, f), c || (c = f);
            else if (f.scheduleFn) f.scheduleFn(f);
            else if (f.type == N) S(f);
            else throw new Error("Task is missing scheduleFn.");
            return c
        }
        invokeTask(_, f, c, w) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, _, f, c, w) : f.callback.apply(c, w)
        }
        cancelTask(_, f) {
            let c;
            if (this._cancelTaskZS) c = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, _, f);
            else {
                if (!f.cancelFn) throw Error("Task is not cancelable");
                c = f.cancelFn(f)
            }
            return c
        }
        hasTask(_, f) {
            try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, _, f)
            } catch (c) {
                this.handleError(_, c)
            }
        }
        _updateTaskCount(_, f) {
            let c = this._taskCounts,
                w = c[_],
                A = c[_] = w + f;
            if (A < 0) throw new Error("More tasks executed then were scheduled.");
            if (w == 0 || A == 0) {
                let L = {
                    microTask: c.microTask > 0,
                    macroTask: c.macroTask > 0,
                    eventTask: c.eventTask > 0,
                    change: _
                };
                this.hasTask(this.zone, L)
            }
        }
    }
    class h {
        constructor(_, f, c, w, A, L) {
            if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = _, this.source = f, this.data = w, this.scheduleFn = A, this.cancelFn = L, !c) throw new Error("callback is not defined");
            this.callback = c;
            let d = this;
            _ === rt && w && w.useG ? this.invoke = h.invokeTask : this.invoke = function() {
                return h.invokeTask.call(r, d, this, arguments)
            }
        }
        static invokeTask(_, f, c) {
            _ || (_ = this), nt++;
            try {
                return _.runCount++, _.zone.runTask(_, f, c)
            } finally {
                nt == 1 && k(), nt--
            }
        }
        get zone() {
            return this._zone
        }
        get state() {
            return this._state
        }
        cancelScheduleRequest() {
            this._transitionTo(H, z)
        }
        _transitionTo(_, f, c) {
            if (this._state === f || this._state === c) this._state = _, _ == H && (this._zoneDelegates = null);
            else throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${f}'${c?" or '"+c+"'":""}, was '${this._state}'.`)
        }
        toString() {
            return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
        }
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            }
        }
    }
    let g = o("setTimeout"),
        C = o("Promise"),
        b = o("then"),
        j = [],
        U = !1,
        et;

    function X(O) {
        if (et || r[C] && (et = r[C].resolve(0)), et) {
            let _ = et[b];
            _ || (_ = et.then), _.call(et, O)
        } else r[g](O, 0)
    }

    function S(O) {
        nt === 0 && j.length === 0 && X(k), O && j.push(O)
    }

    function k() {
        if (!U) {
            for (U = !0; j.length;) {
                let O = j;
                j = [];
                for (let _ = 0; _ < O.length; _++) {
                    let f = O[_];
                    try {
                        f.zone.runTask(f, null, null)
                    } catch (c) {
                        J.onUnhandledError(c)
                    }
                }
            }
            J.microtaskDrainDone(), U = !1
        }
    }
    let tt = {
            name: "NO ZONE"
        },
        H = "notScheduled",
        z = "scheduling",
        M = "scheduled",
        x = "running",
        G = "canceling",
        T = "unknown",
        N = "microTask",
        R = "macroTask",
        rt = "eventTask",
        at = {},
        J = {
            symbol: o,
            currentZoneFrame: () => q,
            onUnhandledError: W,
            microtaskDrainDone: W,
            scheduleMicroTask: S,
            showUncaughtError: () => !l[o("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: W,
            patchMethod: () => W,
            bindArguments: () => [],
            patchThen: () => W,
            patchMacroTask: () => W,
            patchEventPrototype: () => W,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => W,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => W,
            wrapWithCurrentZone: () => W,
            filterProperties: () => [],
            attachOriginToPatched: () => W,
            _redefineProperty: () => W,
            patchCallbacks: () => W,
            nativeScheduleMicroTask: X
        },
        q = {
            parent: null,
            zone: new l(null, null)
        },
        ct = null,
        nt = 0;

    function W() {}
    return n("Zone", "Zone"), r.Zone = l
})(typeof window < "u" && window || typeof self < "u" && self || global);
var Mt = Object.getOwnPropertyDescriptor,
    oe = Object.defineProperty,
    se = Object.getPrototypeOf,
    mr = Object.create,
    gr = Array.prototype.slice,
    ce = "addEventListener",
    ue = "removeEventListener",
    ee = Zone.__symbol__(ce),
    re = Zone.__symbol__(ue),
    yt = "true",
    Et = "false",
    Zt = Zone.__symbol__("");

function ae(r, t) {
    return Zone.current.wrap(r, t)
}

function le(r, t, e, n, i) {
    return Zone.current.scheduleMacroTask(r, t, e, n, i)
}
var Z = Zone.__symbol__,
    Wt = typeof window < "u",
    Ft = Wt ? window : void 0,
    K = Wt && Ft || typeof self == "object" && self || global,
    _r = "removeAttribute";

function fe(r, t) {
    for (let e = r.length - 1; e >= 0; e--) typeof r[e] == "function" && (r[e] = ae(r[e], t + "_" + e));
    return r
}

function Tr(r, t) {
    let e = r.constructor.name;
    for (let n = 0; n < t.length; n++) {
        let i = t[n],
            o = r[i];
        if (o) {
            let s = Mt(r, i);
            if (!De(s)) continue;
            r[i] = (l => {
                let p = function() {
                    return l.apply(this, fe(arguments, e + "." + i))
                };
                return mt(p, l), p
            })(o)
        }
    }
}

function De(r) {
    return r ? r.writable === !1 ? !1 : !(typeof r.get == "function" && typeof r.set > "u") : !0
}
var Ne = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
    Xt = !("nw" in K) && typeof K.process < "u" && {}.toString.call(K.process) === "[object process]",
    he = !Xt && !Ne && !!(Wt && Ft.HTMLElement),
    Le = typeof K.process < "u" && {}.toString.call(K.process) === "[object process]" && !Ne && !!(Wt && Ft.HTMLElement),
    qt = {},
    Pe = function(r) {
        if (r = r || K.event, !r) return;
        let t = qt[r.type];
        t || (t = qt[r.type] = Z("ON_PROPERTY" + r.type));
        let e = this || r.target || K,
            n = e[t],
            i;
        if (he && e === Ft && r.type === "error") {
            let o = r;
            i = n && n.call(this, o.message, o.filename, o.lineno, o.colno, o.error), i === !0 && r.preventDefault()
        } else i = n && n.apply(this, arguments), i != null && !i && r.preventDefault();
        return i
    };

function Se(r, t, e) {
    let n = Mt(r, t);
    if (!n && e && Mt(e, t) && (n = {
            enumerable: !0,
            configurable: !0
        }), !n || !n.configurable) return;
    let i = Z("on" + t + "patched");
    if (r.hasOwnProperty(i) && r[i]) return;
    delete n.writable, delete n.value;
    let o = n.get,
        s = n.set,
        l = t.slice(2),
        p = qt[l];
    p || (p = qt[l] = Z("ON_PROPERTY" + l)), n.set = function(y) {
        let h = this;
        if (!h && r === K && (h = K), !h) return;
        typeof h[p] == "function" && h.removeEventListener(l, Pe), s && s.call(h, null), h[p] = y, typeof y == "function" && h.addEventListener(l, Pe, !1)
    }, n.get = function() {
        let y = this;
        if (!y && r === K && (y = K), !y) return null;
        let h = y[p];
        if (h) return h;
        if (o) {
            let g = o.call(this);
            if (g) return n.set.call(this, g), typeof y[_r] == "function" && y.removeAttribute(t), g
        }
        return null
    }, oe(r, t, n), r[i] = !0
}

function Oe(r, t, e) {
    if (t)
        for (let n = 0; n < t.length; n++) Se(r, "on" + t[n], e);
    else {
        let n = [];
        for (let i in r) i.slice(0, 2) == "on" && n.push(i);
        for (let i = 0; i < n.length; i++) Se(r, n[i], e)
    }
}
var ut = Z("originalInstance");

function jt(r) {
    let t = K[r];
    if (!t) return;
    K[Z(r)] = t, K[r] = function() {
        let i = fe(arguments, r);
        switch (i.length) {
            case 0:
                this[ut] = new t;
                break;
            case 1:
                this[ut] = new t(i[0]);
                break;
            case 2:
                this[ut] = new t(i[0], i[1]);
                break;
            case 3:
                this[ut] = new t(i[0], i[1], i[2]);
                break;
            case 4:
                this[ut] = new t(i[0], i[1], i[2], i[3]);
                break;
            default:
                throw new Error("Arg list too long.")
        }
    }, mt(K[r], t);
    let e = new t(function() {}),
        n;
    for (n in e) r === "XMLHttpRequest" && n === "responseBlob" || function(i) {
        typeof e[i] == "function" ? K[r].prototype[i] = function() {
            return this[ut][i].apply(this[ut], arguments)
        } : oe(K[r].prototype, i, {
            set: function(o) {
                typeof o == "function" ? (this[ut][i] = ae(o, r + "." + i), mt(this[ut][i], o)) : this[ut][i] = o
            },
            get: function() {
                return this[ut][i]
            }
        })
    }(n);
    for (n in t) n !== "prototype" && t.hasOwnProperty(n) && (K[r][n] = t[n])
}

function gt(r, t, e) {
    let n = r;
    for (; n && !n.hasOwnProperty(t);) n = se(n);
    !n && r[t] && (n = r);
    let i = Z(t),
        o = null;
    if (n && (!(o = n[i]) || !n.hasOwnProperty(i))) {
        o = n[i] = n[t];
        let s = n && Mt(n, t);
        if (De(s)) {
            let l = e(o, i, t);
            n[t] = function() {
                return l(this, arguments)
            }, mt(n[t], o)
        }
    }
    return o
}

function wr(r, t, e) {
    let n = null;

    function i(o) {
        let s = o.data;
        return s.args[s.cbIdx] = function() {
            o.invoke.apply(this, arguments)
        }, n.apply(s.target, s.args), o
    }
    n = gt(r, t, o => function(s, l) {
        let p = e(s, l);
        return p.cbIdx >= 0 && typeof l[p.cbIdx] == "function" ? le(p.name, l[p.cbIdx], p, i) : o.apply(s, l)
    })
}

function mt(r, t) {
    r[Z("OriginalDelegate")] = t
}
var Fe = !1,
    ne = !1;

function kr() {
    try {
        let r = Ft.navigator.userAgent;
        if (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1) return !0
    } catch {}
    return !1
}

function xr() {
    if (Fe) return ne;
    Fe = !0;
    try {
        let r = Ft.navigator.userAgent;
        (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1 || r.indexOf("Edge/") !== -1) && (ne = !0)
    } catch {}
    return ne
}
Zone.__load_patch("ZoneAwarePromise", (r, t, e) => {
    let n = Object.getOwnPropertyDescriptor,
        i = Object.defineProperty;

    function o(d) {
        if (d && d.toString === Object.prototype.toString) {
            let E = d.constructor && d.constructor.name;
            return (E || "") + ": " + JSON.stringify(d)
        }
        return d ? d.toString() : Object.prototype.toString.call(d)
    }
    let s = e.symbol,
        l = [],
        p = r[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] === !0,
        y = s("Promise"),
        h = s("then"),
        g = "__creationTrace__";
    e.onUnhandledError = d => {
        if (e.showUncaughtError()) {
            let E = d && d.rejection;
            E ? console.error("Unhandled Promise rejection:", E instanceof Error ? E.message : E, "; Zone:", d.zone.name, "; Task:", d.task && d.task.source, "; Value:", E, E instanceof Error ? E.stack : void 0) : console.error(d)
        }
    }, e.microtaskDrainDone = () => {
        for (; l.length;) {
            let d = l.shift();
            try {
                d.zone.runGuarded(() => {
                    throw d.throwOriginal ? d.rejection : d
                })
            } catch (E) {
                b(E)
            }
        }
    };
    let C = s("unhandledPromiseRejectionHandler");

    function b(d) {
        e.onUnhandledError(d);
        try {
            let E = t[C];
            typeof E == "function" && E.call(this, d)
        } catch {}
    }

    function j(d) {
        return d && d.then
    }

    function U(d) {
        return d
    }

    function et(d) {
        return f.reject(d)
    }
    let X = s("state"),
        S = s("value"),
        k = s("finally"),
        tt = s("parentPromiseValue"),
        H = s("parentPromiseState"),
        z = "Promise.then",
        M = null,
        x = !0,
        G = !1,
        T = 0;

    function N(d, E) {
        return a => {
            try {
                J(d, E, a)
            } catch (m) {
                J(d, !1, m)
            }
        }
    }
    let R = function() {
            let d = !1;
            return function(a) {
                return function() {
                    d || (d = !0, a.apply(null, arguments))
                }
            }
        },
        rt = "Promise resolved with itself",
        at = s("currentTaskTrace");

    function J(d, E, a) {
        let m = R();
        if (d === a) throw new TypeError(rt);
        if (d[X] === M) {
            let B = null;
            try {
                (typeof a == "object" || typeof a == "function") && (B = a && a.then)
            } catch (P) {
                return m(() => {
                    J(d, !1, P)
                })(), d
            }
            if (E !== G && a instanceof f && a.hasOwnProperty(X) && a.hasOwnProperty(S) && a[X] !== M) ct(a), J(d, a[X], a[S]);
            else if (E !== G && typeof B == "function") try {
                B.call(a, m(N(d, E)), m(N(d, !1)))
            } catch (P) {
                m(() => {
                    J(d, !1, P)
                })()
            } else {
                d[X] = E;
                let P = d[S];
                if (d[S] = a, d[k] === k && E === x && (d[X] = d[H], d[S] = d[tt]), E === G && a instanceof Error) {
                    let I = t.currentTask && t.currentTask.data && t.currentTask.data[g];
                    I && i(a, at, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: I
                    })
                }
                for (let I = 0; I < P.length;) nt(d, P[I++], P[I++], P[I++], P[I++]);
                if (P.length == 0 && E == G) {
                    d[X] = T;
                    let I = a;
                    try {
                        throw new Error("Uncaught (in promise): " + o(a) + (a && a.stack ? `
` + a.stack : ""))
                    } catch (F) {
                        I = F
                    }
                    p && (I.throwOriginal = !0), I.rejection = a, I.promise = d, I.zone = t.current, I.task = t.currentTask, l.push(I), e.scheduleMicroTask()
                }
            }
        }
        return d
    }
    let q = s("rejectionHandledHandler");

    function ct(d) {
        if (d[X] === T) {
            try {
                let E = t[q];
                E && typeof E == "function" && E.call(this, {
                    rejection: d[S],
                    promise: d
                })
            } catch {}
            d[X] = G;
            for (let E = 0; E < l.length; E++) d === l[E].promise && l.splice(E, 1)
        }
    }

    function nt(d, E, a, m, B) {
        ct(d);
        let P = d[X],
            I = P ? typeof m == "function" ? m : U : typeof B == "function" ? B : et;
        E.scheduleMicroTask(z, () => {
            try {
                let F = d[S],
                    v = !!a && k === a[k];
                v && (a[tt] = F, a[H] = P);
                let D = E.run(I, void 0, v && I !== et && I !== U ? [] : [F]);
                J(a, !0, D)
            } catch (F) {
                J(a, !1, F)
            }
        }, a)
    }
    let W = "function ZoneAwarePromise() { [native code] }",
        O = function() {},
        _ = r.AggregateError;
    class f {
        static toString() {
            return W
        }
        static resolve(E) {
            return J(new this(null), x, E)
        }
        static reject(E) {
            return J(new this(null), G, E)
        }
        static any(E) {
            if (!E || typeof E[Symbol.iterator] != "function") return Promise.reject(new _([], "All promises were rejected"));
            let a = [],
                m = 0;
            try {
                for (let I of E) m++, a.push(f.resolve(I))
            } catch {
                return Promise.reject(new _([], "All promises were rejected"))
            }
            if (m === 0) return Promise.reject(new _([], "All promises were rejected"));
            let B = !1,
                P = [];
            return new f((I, F) => {
                for (let v = 0; v < a.length; v++) a[v].then(D => {
                    B || (B = !0, I(D))
                }, D => {
                    P.push(D), m--, m === 0 && (B = !0, F(new _(P, "All promises were rejected")))
                })
            })
        }
        static race(E) {
            let a, m, B = new this((F, v) => {
                a = F, m = v
            });

            function P(F) {
                a(F)
            }

            function I(F) {
                m(F)
            }
            for (let F of E) j(F) || (F = this.resolve(F)), F.then(P, I);
            return B
        }
        static all(E) {
            return f.allWithCallback(E)
        }
        static allSettled(E) {
            return (this && this.prototype instanceof f ? this : f).allWithCallback(E, {
                thenCallback: m => ({
                    status: "fulfilled",
                    value: m
                }),
                errorCallback: m => ({
                    status: "rejected",
                    reason: m
                })
            })
        }
        static allWithCallback(E, a) {
            let m, B, P = new this((D, V) => {
                    m = D, B = V
                }),
                I = 2,
                F = 0,
                v = [];
            for (let D of E) {
                j(D) || (D = this.resolve(D));
                let V = F;
                try {
                    D.then($ => {
                        v[V] = a ? a.thenCallback($) : $, I--, I === 0 && m(v)
                    }, $ => {
                        a ? (v[V] = a.errorCallback($), I--, I === 0 && m(v)) : B($)
                    })
                } catch ($) {
                    B($)
                }
                I++, F++
            }
            return I -= 2, I === 0 && m(v), P
        }
        constructor(E) {
            let a = this;
            if (!(a instanceof f)) throw new Error("Must be an instanceof Promise.");
            a[X] = M, a[S] = [];
            try {
                let m = R();
                E && E(m(N(a, x)), m(N(a, G)))
            } catch (m) {
                J(a, !1, m)
            }
        }
        get[Symbol.toStringTag]() {
            return "Promise"
        }
        get[Symbol.species]() {
            return f
        }
        then(E, a) {
            let m = this.constructor ? .[Symbol.species];
            (!m || typeof m != "function") && (m = this.constructor || f);
            let B = new m(O),
                P = t.current;
            return this[X] == M ? this[S].push(P, B, E, a) : nt(this, P, B, E, a), B
        } catch (E) {
            return this.then(null, E)
        } finally(E) {
            let a = this.constructor ? .[Symbol.species];
            (!a || typeof a != "function") && (a = f);
            let m = new a(O);
            m[k] = k;
            let B = t.current;
            return this[X] == M ? this[S].push(B, m, E, E) : nt(this, B, m, E, E), m
        }
    }
    f.resolve = f.resolve, f.reject = f.reject, f.race = f.race, f.all = f.all;
    let c = r[y] = r.Promise;
    r.Promise = f;
    let w = s("thenPatched");

    function A(d) {
        let E = d.prototype,
            a = n(E, "then");
        if (a && (a.writable === !1 || !a.configurable)) return;
        let m = E.then;
        E[h] = m, d.prototype.then = function(B, P) {
            return new f((F, v) => {
                m.call(this, F, v)
            }).then(B, P)
        }, d[w] = !0
    }
    e.patchThen = A;

    function L(d) {
        return function(E, a) {
            let m = d.apply(E, a);
            if (m instanceof f) return m;
            let B = m.constructor;
            return B[w] || A(B), m
        }
    }
    return c && (A(c), gt(r, "fetch", d => L(d))), Promise[t.__symbol__("uncaughtPromiseErrors")] = l, f
});
Zone.__load_patch("toString", r => {
    let t = Function.prototype.toString,
        e = Z("OriginalDelegate"),
        n = Z("Promise"),
        i = Z("Error"),
        o = function() {
            if (typeof this == "function") {
                let y = this[e];
                if (y) return typeof y == "function" ? t.call(y) : Object.prototype.toString.call(y);
                if (this === Promise) {
                    let h = r[n];
                    if (h) return t.call(h)
                }
                if (this === Error) {
                    let h = r[i];
                    if (h) return t.call(h)
                }
            }
            return t.call(this)
        };
    o[e] = t, Function.prototype.toString = o;
    let s = Object.prototype.toString,
        l = "[object Promise]";
    Object.prototype.toString = function() {
        return typeof Promise == "function" && this instanceof Promise ? l : s.call(this)
    }
});
var Pt = !1;
if (typeof window < "u") try {
    let r = Object.defineProperty({}, "passive", {
        get: function() {
            Pt = !0
        }
    });
    window.addEventListener("test", r, r), window.removeEventListener("test", r, r)
} catch {
    Pt = !1
}
var Ir = {
        useG: !0
    },
    ot = {},
    Ue = {},
    Me = new RegExp("^" + Zt + "(\\w+)(true|false)$"),
    Ze = Z("propagationStopped");

function je(r, t) {
    let e = (t ? t(r) : r) + Et,
        n = (t ? t(r) : r) + yt,
        i = Zt + e,
        o = Zt + n;
    ot[r] = {}, ot[r][Et] = i, ot[r][yt] = o
}

function Br(r, t, e, n) {
    let i = n && n.add || ce,
        o = n && n.rm || ue,
        s = n && n.listeners || "eventListeners",
        l = n && n.rmAll || "removeAllListeners",
        p = Z(i),
        y = "." + i + ":",
        h = "prependListener",
        g = "." + h + ":",
        C = function(S, k, tt) {
            if (S.isRemoved) return;
            let H = S.callback;
            typeof H == "object" && H.handleEvent && (S.callback = x => H.handleEvent(x), S.originalDelegate = H);
            let z;
            try {
                S.invoke(S, k, [tt])
            } catch (x) {
                z = x
            }
            let M = S.options;
            if (M && typeof M == "object" && M.once) {
                let x = S.originalDelegate ? S.originalDelegate : S.callback;
                k[o].call(k, tt.type, x, M)
            }
            return z
        };

    function b(S, k, tt) {
        if (k = k || r.event, !k) return;
        let H = S || k.target || r,
            z = H[ot[k.type][tt ? yt : Et]];
        if (z) {
            let M = [];
            if (z.length === 1) {
                let x = C(z[0], H, k);
                x && M.push(x)
            } else {
                let x = z.slice();
                for (let G = 0; G < x.length && !(k && k[Ze] === !0); G++) {
                    let T = C(x[G], H, k);
                    T && M.push(T)
                }
            }
            if (M.length === 1) throw M[0];
            for (let x = 0; x < M.length; x++) {
                let G = M[x];
                t.nativeScheduleMicroTask(() => {
                    throw G
                })
            }
        }
    }
    let j = function(S) {
            return b(this, S, !1)
        },
        U = function(S) {
            return b(this, S, !0)
        };

    function et(S, k) {
        if (!S) return !1;
        let tt = !0;
        k && k.useG !== void 0 && (tt = k.useG);
        let H = k && k.vh,
            z = !0;
        k && k.chkDup !== void 0 && (z = k.chkDup);
        let M = !1;
        k && k.rt !== void 0 && (M = k.rt);
        let x = S;
        for (; x && !x.hasOwnProperty(i);) x = se(x);
        if (!x && S[i] && (x = S), !x || x[p]) return !1;
        let G = k && k.eventNameToString,
            T = {},
            N = x[p] = x[i],
            R = x[Z(o)] = x[o],
            rt = x[Z(s)] = x[s],
            at = x[Z(l)] = x[l],
            J;
        k && k.prepend && (J = x[Z(k.prepend)] = x[k.prepend]);

        function q(a, m) {
            return !Pt && typeof a == "object" && a ? !!a.capture : !Pt || !m ? a : typeof a == "boolean" ? {
                capture: a,
                passive: !0
            } : a ? typeof a == "object" && a.passive !== !1 ? { ...a,
                passive: !0
            } : a : {
                passive: !0
            }
        }
        let ct = function(a) {
                if (!T.isExisting) return N.call(T.target, T.eventName, T.capture ? U : j, T.options)
            },
            nt = function(a) {
                if (!a.isRemoved) {
                    let m = ot[a.eventName],
                        B;
                    m && (B = m[a.capture ? yt : Et]);
                    let P = B && a.target[B];
                    if (P) {
                        for (let I = 0; I < P.length; I++)
                            if (P[I] === a) {
                                P.splice(I, 1), a.isRemoved = !0, P.length === 0 && (a.allRemoved = !0, a.target[B] = null);
                                break
                            }
                    }
                }
                if (a.allRemoved) return R.call(a.target, a.eventName, a.capture ? U : j, a.options)
            },
            W = function(a) {
                return N.call(T.target, T.eventName, a.invoke, T.options)
            },
            O = function(a) {
                return J.call(T.target, T.eventName, a.invoke, T.options)
            },
            _ = function(a) {
                return R.call(a.target, a.eventName, a.invoke, a.options)
            },
            f = tt ? ct : W,
            c = tt ? nt : _,
            w = function(a, m) {
                let B = typeof m;
                return B === "function" && a.callback === m || B === "object" && a.originalDelegate === m
            },
            A = k && k.diff ? k.diff : w,
            L = Zone[Z("UNPATCHED_EVENTS")],
            d = r[Z("PASSIVE_EVENTS")],
            E = function(a, m, B, P, I = !1, F = !1) {
                return function() {
                    let v = this || r,
                        D = arguments[0];
                    k && k.transferEventName && (D = k.transferEventName(D));
                    let V = arguments[1];
                    if (!V) return a.apply(this, arguments);
                    if (Xt && D === "uncaughtException") return a.apply(this, arguments);
                    let $ = !1;
                    if (typeof V != "function") {
                        if (!V.handleEvent) return a.apply(this, arguments);
                        $ = !0
                    }
                    if (H && !H(a, V, v, arguments)) return;
                    let kt = Pt && !!d && d.indexOf(D) !== -1,
                        lt = q(arguments[2], kt);
                    if (L) {
                        for (let Bt = 0; Bt < L.length; Bt++)
                            if (D === L[Bt]) return kt ? a.call(v, D, V, lt) : a.apply(this, arguments)
                    }
                    let Qt = lt ? typeof lt == "boolean" ? !0 : lt.capture : !1,
                        Be = lt && typeof lt == "object" ? lt.once : !1,
                        Er = Zone.current,
                        te = ot[D];
                    te || (je(D, G), te = ot[D]);
                    let be = te[Qt ? yt : Et],
                        At = v[be],
                        Re = !1;
                    if (At) {
                        if (Re = !0, z) {
                            for (let Bt = 0; Bt < At.length; Bt++)
                                if (A(At[Bt], V)) return
                        }
                    } else At = v[be] = [];
                    let Gt, Ce = v.constructor.name,
                        Ae = Ue[Ce];
                    Ae && (Gt = Ae[D]), Gt || (Gt = Ce + m + (G ? G(D) : D)), T.options = lt, Be && (T.options.once = !1), T.target = v, T.capture = Qt, T.eventName = D, T.isExisting = Re;
                    let Ut = tt ? Ir : void 0;
                    Ut && (Ut.taskData = T);
                    let xt = Er.scheduleEventTask(Gt, V, Ut, B, P);
                    if (T.target = null, Ut && (Ut.taskData = null), Be && (lt.once = !0), !Pt && typeof xt.options == "boolean" || (xt.options = lt), xt.target = v, xt.capture = Qt, xt.eventName = D, $ && (xt.originalDelegate = V), F ? At.unshift(xt) : At.push(xt), I) return v
                }
            };
        return x[i] = E(N, y, f, c, M), J && (x[h] = E(J, g, O, c, M, !0)), x[o] = function() {
            let a = this || r,
                m = arguments[0];
            k && k.transferEventName && (m = k.transferEventName(m));
            let B = arguments[2],
                P = B ? typeof B == "boolean" ? !0 : B.capture : !1,
                I = arguments[1];
            if (!I) return R.apply(this, arguments);
            if (H && !H(R, I, a, arguments)) return;
            let F = ot[m],
                v;
            F && (v = F[P ? yt : Et]);
            let D = v && a[v];
            if (D)
                for (let V = 0; V < D.length; V++) {
                    let $ = D[V];
                    if (A($, I)) {
                        if (D.splice(V, 1), $.isRemoved = !0, D.length === 0 && ($.allRemoved = !0, a[v] = null, typeof m == "string")) {
                            let kt = Zt + "ON_PROPERTY" + m;
                            a[kt] = null
                        }
                        return $.zone.cancelTask($), M ? a : void 0
                    }
                }
            return R.apply(this, arguments)
        }, x[s] = function() {
            let a = this || r,
                m = arguments[0];
            k && k.transferEventName && (m = k.transferEventName(m));
            let B = [],
                P = He(a, G ? G(m) : m);
            for (let I = 0; I < P.length; I++) {
                let F = P[I],
                    v = F.originalDelegate ? F.originalDelegate : F.callback;
                B.push(v)
            }
            return B
        }, x[l] = function() {
            let a = this || r,
                m = arguments[0];
            if (m) {
                k && k.transferEventName && (m = k.transferEventName(m));
                let B = ot[m];
                if (B) {
                    let P = B[Et],
                        I = B[yt],
                        F = a[P],
                        v = a[I];
                    if (F) {
                        let D = F.slice();
                        for (let V = 0; V < D.length; V++) {
                            let $ = D[V],
                                kt = $.originalDelegate ? $.originalDelegate : $.callback;
                            this[o].call(this, m, kt, $.options)
                        }
                    }
                    if (v) {
                        let D = v.slice();
                        for (let V = 0; V < D.length; V++) {
                            let $ = D[V],
                                kt = $.originalDelegate ? $.originalDelegate : $.callback;
                            this[o].call(this, m, kt, $.options)
                        }
                    }
                }
            } else {
                let B = Object.keys(a);
                for (let P = 0; P < B.length; P++) {
                    let I = B[P],
                        F = Me.exec(I),
                        v = F && F[1];
                    v && v !== "removeListener" && this[l].call(this, v)
                }
                this[l].call(this, "removeListener")
            }
            if (M) return this
        }, mt(x[i], N), mt(x[o], R), at && mt(x[l], at), rt && mt(x[s], rt), !0
    }
    let X = [];
    for (let S = 0; S < e.length; S++) X[S] = et(e[S], n);
    return X
}

function He(r, t) {
    if (!t) {
        let o = [];
        for (let s in r) {
            let l = Me.exec(s),
                p = l && l[1];
            if (p && (!t || p === t)) {
                let y = r[s];
                if (y)
                    for (let h = 0; h < y.length; h++) o.push(y[h])
            }
        }
        return o
    }
    let e = ot[t];
    e || (je(t), e = ot[t]);
    let n = r[e[Et]],
        i = r[e[yt]];
    return n ? i ? n.concat(i) : n.slice() : i ? i.slice() : []
}

function br(r, t) {
    let e = r.Event;
    e && e.prototype && t.patchMethod(e.prototype, "stopImmediatePropagation", n => function(i, o) {
        i[Ze] = !0, n && n.apply(i, o)
    })
}

function Rr(r, t, e, n, i) {
    let o = Zone.__symbol__(n);
    if (t[o]) return;
    let s = t[o] = t[n];
    t[n] = function(l, p, y) {
        return p && p.prototype && i.forEach(function(h) {
            let g = `${e}.${n}::` + h,
                C = p.prototype;
            try {
                if (C.hasOwnProperty(h)) {
                    let b = r.ObjectGetOwnPropertyDescriptor(C, h);
                    b && b.value ? (b.value = r.wrapWithCurrentZone(b.value, g), r._redefineProperty(p.prototype, h, b)) : C[h] && (C[h] = r.wrapWithCurrentZone(C[h], g))
                } else C[h] && (C[h] = r.wrapWithCurrentZone(C[h], g))
            } catch {}
        }), s.call(t, l, p, y)
    }, r.attachOriginToPatched(t[n], s)
}

function Ge(r, t, e) {
    if (!e || e.length === 0) return t;
    let n = e.filter(o => o.target === r);
    if (!n || n.length === 0) return t;
    let i = n[0].ignoreProperties;
    return t.filter(o => i.indexOf(o) === -1)
}

function ve(r, t, e, n) {
    if (!r) return;
    let i = Ge(r, t, e);
    Oe(r, i, n)
}

function ie(r) {
    return Object.getOwnPropertyNames(r).filter(t => t.startsWith("on") && t.length > 2).map(t => t.substring(2))
}

function Cr(r, t) {
    if (Xt && !Le || Zone[r.symbol("patchEvents")]) return;
    let e = t.__Zone_ignore_on_properties,
        n = [];
    if (he) {
        let i = window;
        n = n.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
        let o = kr() ? [{
            target: i,
            ignoreProperties: ["error"]
        }] : [];
        ve(i, ie(i), e && e.concat(o), se(i))
    }
    n = n.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
    for (let i = 0; i < n.length; i++) {
        let o = t[n[i]];
        o && o.prototype && ve(o.prototype, ie(o.prototype), e)
    }
}
Zone.__load_patch("util", (r, t, e) => {
    let n = ie(r);
    e.patchOnProperties = Oe, e.patchMethod = gt, e.bindArguments = fe, e.patchMacroTask = wr;
    let i = t.__symbol__("BLACK_LISTED_EVENTS"),
        o = t.__symbol__("UNPATCHED_EVENTS");
    r[o] && (r[i] = r[o]), r[i] && (t[i] = t[o] = r[i]), e.patchEventPrototype = br, e.patchEventTarget = Br, e.isIEOrEdge = xr, e.ObjectDefineProperty = oe, e.ObjectGetOwnPropertyDescriptor = Mt, e.ObjectCreate = mr, e.ArraySlice = gr, e.patchClass = jt, e.wrapWithCurrentZone = ae, e.filterProperties = Ge, e.attachOriginToPatched = mt, e._redefineProperty = Object.defineProperty, e.patchCallbacks = Rr, e.getGlobalObjects = () => ({
        globalSources: Ue,
        zoneSymbolEventNames: ot,
        eventNames: n,
        isBrowser: he,
        isMix: Le,
        isNode: Xt,
        TRUE_STR: yt,
        FALSE_STR: Et,
        ZONE_SYMBOL_PREFIX: Zt,
        ADD_EVENT_LISTENER_STR: ce,
        REMOVE_EVENT_LISTENER_STR: ue
    })
});

function Ar(r, t) {
    t.patchMethod(r, "queueMicrotask", e => function(n, i) {
        Zone.current.scheduleMicroTask("queueMicrotask", i[0])
    })
}
var $t = Z("zoneTask");

function St(r, t, e, n) {
    let i = null,
        o = null;
    t += n, e += n;
    let s = {};

    function l(y) {
        let h = y.data;
        return h.args[0] = function() {
            return y.invoke.apply(this, arguments)
        }, h.handleId = i.apply(r, h.args), y
    }

    function p(y) {
        return o.call(r, y.data.handleId)
    }
    i = gt(r, t, y => function(h, g) {
        if (typeof g[0] == "function") {
            let C = {
                    isPeriodic: n === "Interval",
                    delay: n === "Timeout" || n === "Interval" ? g[1] || 0 : void 0,
                    args: g
                },
                b = g[0];
            g[0] = function() {
                try {
                    return b.apply(this, arguments)
                } finally {
                    C.isPeriodic || (typeof C.handleId == "number" ? delete s[C.handleId] : C.handleId && (C.handleId[$t] = null))
                }
            };
            let j = le(t, g[0], C, l, p);
            if (!j) return j;
            let U = j.data.handleId;
            return typeof U == "number" ? s[U] = j : U && (U[$t] = j), U && U.ref && U.unref && typeof U.ref == "function" && typeof U.unref == "function" && (j.ref = U.ref.bind(U), j.unref = U.unref.bind(U)), typeof U == "number" || U ? U : j
        } else return y.apply(r, g)
    }), o = gt(r, e, y => function(h, g) {
        let C = g[0],
            b;
        typeof C == "number" ? b = s[C] : (b = C && C[$t], b || (b = C)), b && typeof b.type == "string" ? b.state !== "notScheduled" && (b.cancelFn && b.data.isPeriodic || b.runCount === 0) && (typeof C == "number" ? delete s[C] : C && (C[$t] = null), b.zone.cancelTask(b)) : y.apply(r, g)
    })
}

function Pr(r, t) {
    let {
        isBrowser: e,
        isMix: n
    } = t.getGlobalObjects();
    if (!e && !n || !r.customElements || !("customElements" in r)) return;
    let i = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"];
    t.patchCallbacks(t, r.customElements, "customElements", "define", i)
}

function Sr(r, t) {
    if (Zone[t.symbol("patchEventTarget")]) return;
    let {
        eventNames: e,
        zoneSymbolEventNames: n,
        TRUE_STR: i,
        FALSE_STR: o,
        ZONE_SYMBOL_PREFIX: s
    } = t.getGlobalObjects();
    for (let p = 0; p < e.length; p++) {
        let y = e[p],
            h = y + o,
            g = y + i,
            C = s + h,
            b = s + g;
        n[y] = {}, n[y][o] = C, n[y][i] = b
    }
    let l = r.EventTarget;
    if (!(!l || !l.prototype)) return t.patchEventTarget(r, t, [l && l.prototype]), !0
}

function Fr(r, t) {
    t.patchEventPrototype(r, t)
}
Zone.__load_patch("legacy", r => {
    let t = r[Zone.__symbol__("legacyPatch")];
    t && t()
});
Zone.__load_patch("timers", r => {
    let t = "set",
        e = "clear";
    St(r, t, e, "Timeout"), St(r, t, e, "Interval"), St(r, t, e, "Immediate")
});
Zone.__load_patch("requestAnimationFrame", r => {
    St(r, "request", "cancel", "AnimationFrame"), St(r, "mozRequest", "mozCancel", "AnimationFrame"), St(r, "webkitRequest", "webkitCancel", "AnimationFrame")
});
Zone.__load_patch("blocking", (r, t) => {
    let e = ["alert", "prompt", "confirm"];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        gt(r, i, (o, s, l) => function(p, y) {
            return t.current.run(o, r, y, l)
        })
    }
});
Zone.__load_patch("EventTarget", (r, t, e) => {
    Fr(r, e), Sr(r, e);
    let n = r.XMLHttpRequestEventTarget;
    n && n.prototype && e.patchEventTarget(r, e, [n.prototype])
});
Zone.__load_patch("MutationObserver", (r, t, e) => {
    jt("MutationObserver"), jt("WebKitMutationObserver")
});
Zone.__load_patch("IntersectionObserver", (r, t, e) => {
    jt("IntersectionObserver")
});
Zone.__load_patch("FileReader", (r, t, e) => {
    jt("FileReader")
});
Zone.__load_patch("on_property", (r, t, e) => {
    Cr(e, r)
});
Zone.__load_patch("customElements", (r, t, e) => {
    Pr(r, e)
});
Zone.__load_patch("XHR", (r, t) => {
    p(r);
    let e = Z("xhrTask"),
        n = Z("xhrSync"),
        i = Z("xhrListener"),
        o = Z("xhrScheduled"),
        s = Z("xhrURL"),
        l = Z("xhrErrorBeforeScheduled");

    function p(y) {
        let h = y.XMLHttpRequest;
        if (!h) return;
        let g = h.prototype;

        function C(T) {
            return T[e]
        }
        let b = g[ee],
            j = g[re];
        if (!b) {
            let T = y.XMLHttpRequestEventTarget;
            if (T) {
                let N = T.prototype;
                b = N[ee], j = N[re]
            }
        }
        let U = "readystatechange",
            et = "scheduled";

        function X(T) {
            let N = T.data,
                R = N.target;
            R[o] = !1, R[l] = !1;
            let rt = R[i];
            b || (b = R[ee], j = R[re]), rt && j.call(R, U, rt);
            let at = R[i] = () => {
                if (R.readyState === R.DONE)
                    if (!N.aborted && R[o] && T.state === et) {
                        let q = R[t.__symbol__("loadfalse")];
                        if (R.status !== 0 && q && q.length > 0) {
                            let ct = T.invoke;
                            T.invoke = function() {
                                let nt = R[t.__symbol__("loadfalse")];
                                for (let W = 0; W < nt.length; W++) nt[W] === T && nt.splice(W, 1);
                                !N.aborted && T.state === et && ct.call(T)
                            }, q.push(T)
                        } else T.invoke()
                    } else !N.aborted && R[o] === !1 && (R[l] = !0)
            };
            return b.call(R, U, at), R[e] || (R[e] = T), x.apply(R, N.args), R[o] = !0, T
        }

        function S() {}

        function k(T) {
            let N = T.data;
            return N.aborted = !0, G.apply(N.target, N.args)
        }
        let tt = gt(g, "open", () => function(T, N) {
                return T[n] = N[2] == !1, T[s] = N[1], tt.apply(T, N)
            }),
            H = "XMLHttpRequest.send",
            z = Z("fetchTaskAborting"),
            M = Z("fetchTaskScheduling"),
            x = gt(g, "send", () => function(T, N) {
                if (t.current[M] === !0 || T[n]) return x.apply(T, N); {
                    let R = {
                            target: T,
                            url: T[s],
                            isPeriodic: !1,
                            args: N,
                            aborted: !1
                        },
                        rt = le(H, S, R, X, k);
                    T && T[l] === !0 && !R.aborted && rt.state === et && rt.invoke()
                }
            }),
            G = gt(g, "abort", () => function(T, N) {
                let R = C(T);
                if (R && typeof R.type == "string") {
                    if (R.cancelFn == null || R.data && R.data.aborted) return;
                    R.zone.cancelTask(R)
                } else if (t.current[z] === !0) return G.apply(T, N)
            })
    }
});
Zone.__load_patch("geolocation", r => {
    r.navigator && r.navigator.geolocation && Tr(r.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
});
Zone.__load_patch("PromiseRejectionEvent", (r, t) => {
    function e(n) {
        return function(i) {
            He(r, n).forEach(s => {
                let l = r.PromiseRejectionEvent;
                if (l) {
                    let p = new l(n, {
                        promise: i.promise,
                        reason: i.rejection
                    });
                    s.invoke(p)
                }
            })
        }
    }
    r.PromiseRejectionEvent && (t[Z("unhandledPromiseRejectionHandler")] = e("unhandledrejection"), t[Z("rejectionHandledHandler")] = e("rejectionhandled"))
});
Zone.__load_patch("queueMicrotask", (r, t, e) => {
    Ar(r, e)
});
window.global = window;
global.Buffer = global.Buffer || lr().Buffer;
global.process = yr();