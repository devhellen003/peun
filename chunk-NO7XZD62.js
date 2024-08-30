import {
    a as T,
    b,
    c as To,
    d as G,
    e as le,
    f as z,
    g as tt,
    h as Ee,
    i as ee
} from "./chunk-QRCPN2TO.js";
import {
    a as Xe,
    b as et,
    f as O,
    i as Mi,
    l as W
} from "./chunk-PWCKSV3D.js";
var bn = O((Dd, vn) => {
    "use strict";
    vn.exports = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    }
});
var me = O(ke => {
    "use strict";
    var Dr, ls = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    ke.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17
    };
    ke.getSymbolTotalCodewords = function(e) {
        return ls[e]
    };
    ke.getBCHDigit = function(t) {
        let e = 0;
        for (; t !== 0;) e++, t >>>= 1;
        return e
    };
    ke.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Dr = e
    };
    ke.isKanjiModeEnabled = function() {
        return typeof Dr < "u"
    };
    ke.toSJIS = function(e) {
        return Dr(e)
    }
});
var qt = O(Y => {
    "use strict";
    Y.L = {
        bit: 1
    };
    Y.M = {
        bit: 0
    };
    Y.Q = {
        bit: 3
    };
    Y.H = {
        bit: 2
    };

    function cs(t) {
        if (typeof t != "string") throw new Error("Param is not a string");
        switch (t.toLowerCase()) {
            case "l":
            case "low":
                return Y.L;
            case "m":
            case "medium":
                return Y.M;
            case "q":
            case "quartile":
                return Y.Q;
            case "h":
            case "high":
                return Y.H;
            default:
                throw new Error("Unknown EC Level: " + t)
        }
    }
    Y.isValid = function(e) {
        return e && typeof e.bit < "u" && e.bit >= 0 && e.bit < 4
    };
    Y.from = function(e, r) {
        if (Y.isValid(e)) return e;
        try {
            return cs(e)
        } catch {
            return r
        }
    }
});
var Cn = O((Wd, xn) => {
    "use strict";

    function yn() {
        this.buffer = [], this.length = 0
    }
    yn.prototype = {
        get: function(t) {
            let e = Math.floor(t / 8);
            return (this.buffer[e] >>> 7 - t % 8 & 1) === 1
        },
        put: function(t, e) {
            for (let r = 0; r < e; r++) this.putBit((t >>> e - r - 1 & 1) === 1)
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(t) {
            let e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
        }
    };
    xn.exports = yn
});
var $n = O((Hd, En) => {
    "use strict";

    function vt(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
    }
    vt.prototype.set = function(t, e, r, o) {
        let n = t * this.size + e;
        this.data[n] = r, o && (this.reservedBit[n] = !0)
    };
    vt.prototype.get = function(t, e) {
        return this.data[t * this.size + e]
    };
    vt.prototype.xor = function(t, e, r) {
        this.data[t * this.size + e] ^= r
    };
    vt.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e]
    };
    En.exports = vt
});
var An = O(Vt => {
    "use strict";
    var ds = me().getSymbolSize;
    Vt.getRowColCoords = function(e) {
        if (e === 1) return [];
        let r = Math.floor(e / 7) + 2,
            o = ds(e),
            n = o === 145 ? 26 : Math.ceil((o - 13) / (2 * r - 2)) * 2,
            i = [o - 7];
        for (let s = 1; s < r - 1; s++) i[s] = i[s - 1] - n;
        return i.push(6), i.reverse()
    };
    Vt.getPositions = function(e) {
        let r = [],
            o = Vt.getRowColCoords(e),
            n = o.length;
        for (let i = 0; i < n; i++)
            for (let s = 0; s < n; s++) i === 0 && s === 0 || i === 0 && s === n - 1 || i === n - 1 && s === 0 || r.push([o[i], o[s]]);
        return r
    }
});
var In = O(On => {
    "use strict";
    var hs = me().getSymbolSize,
        _n = 7;
    On.getPositions = function(e) {
        let r = hs(e);
        return [
            [0, 0],
            [r - _n, 0],
            [0, r - _n]
        ]
    }
});
var Sn = O(I => {
    "use strict";
    I.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var Te = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    I.isValid = function(e) {
        return e != null && e !== "" && !isNaN(e) && e >= 0 && e <= 7
    };
    I.from = function(e) {
        return I.isValid(e) ? parseInt(e, 10) : void 0
    };
    I.getPenaltyN1 = function(e) {
        let r = e.size,
            o = 0,
            n = 0,
            i = 0,
            s = null,
            a = null;
        for (let l = 0; l < r; l++) {
            n = i = 0, s = a = null;
            for (let c = 0; c < r; c++) {
                let h = e.get(l, c);
                h === s ? n++ : (n >= 5 && (o += Te.N1 + (n - 5)), s = h, n = 1), h = e.get(c, l), h === a ? i++ : (i >= 5 && (o += Te.N1 + (i - 5)), a = h, i = 1)
            }
            n >= 5 && (o += Te.N1 + (n - 5)), i >= 5 && (o += Te.N1 + (i - 5))
        }
        return o
    };
    I.getPenaltyN2 = function(e) {
        let r = e.size,
            o = 0;
        for (let n = 0; n < r - 1; n++)
            for (let i = 0; i < r - 1; i++) {
                let s = e.get(n, i) + e.get(n, i + 1) + e.get(n + 1, i) + e.get(n + 1, i + 1);
                (s === 4 || s === 0) && o++
            }
        return o * Te.N2
    };
    I.getPenaltyN3 = function(e) {
        let r = e.size,
            o = 0,
            n = 0,
            i = 0;
        for (let s = 0; s < r; s++) {
            n = i = 0;
            for (let a = 0; a < r; a++) n = n << 1 & 2047 | e.get(s, a), a >= 10 && (n === 1488 || n === 93) && o++, i = i << 1 & 2047 | e.get(a, s), a >= 10 && (i === 1488 || i === 93) && o++
        }
        return o * Te.N3
    };
    I.getPenaltyN4 = function(e) {
        let r = 0,
            o = e.data.length;
        for (let i = 0; i < o; i++) r += e.data[i];
        return Math.abs(Math.ceil(r * 100 / o / 5) - 10) * Te.N4
    };

    function us(t, e, r) {
        switch (t) {
            case I.Patterns.PATTERN000:
                return (e + r) % 2 === 0;
            case I.Patterns.PATTERN001:
                return e % 2 === 0;
            case I.Patterns.PATTERN010:
                return r % 3 === 0;
            case I.Patterns.PATTERN011:
                return (e + r) % 3 === 0;
            case I.Patterns.PATTERN100:
                return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 === 0;
            case I.Patterns.PATTERN101:
                return e * r % 2 + e * r % 3 === 0;
            case I.Patterns.PATTERN110:
                return (e * r % 2 + e * r % 3) % 2 === 0;
            case I.Patterns.PATTERN111:
                return (e * r % 3 + (e + r) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + t)
        }
    }
    I.applyMask = function(e, r) {
        let o = r.size;
        for (let n = 0; n < o; n++)
            for (let i = 0; i < o; i++) r.isReserved(i, n) || r.xor(i, n, us(e, i, n))
    };
    I.getBestMask = function(e, r) {
        let o = Object.keys(I.Patterns).length,
            n = 0,
            i = 1 / 0;
        for (let s = 0; s < o; s++) {
            r(s), I.applyMask(s, e);
            let a = I.getPenaltyN1(e) + I.getPenaltyN2(e) + I.getPenaltyN3(e) + I.getPenaltyN4(e);
            I.applyMask(s, e), a < i && (i = a, n = s)
        }
        return n
    }
});
var jr = O(Ur => {
    "use strict";
    var pe = qt(),
        Zt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
        Kt = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    Ur.getBlocksCount = function(e, r) {
        switch (r) {
            case pe.L:
                return Zt[(e - 1) * 4 + 0];
            case pe.M:
                return Zt[(e - 1) * 4 + 1];
            case pe.Q:
                return Zt[(e - 1) * 4 + 2];
            case pe.H:
                return Zt[(e - 1) * 4 + 3];
            default:
                return
        }
    };
    Ur.getTotalCodewordsCount = function(e, r) {
        switch (r) {
            case pe.L:
                return Kt[(e - 1) * 4 + 0];
            case pe.M:
                return Kt[(e - 1) * 4 + 1];
            case pe.Q:
                return Kt[(e - 1) * 4 + 2];
            case pe.H:
                return Kt[(e - 1) * 4 + 3];
            default:
                return
        }
    }
});
var kn = O(Gt => {
    "use strict";
    var bt = new Uint8Array(512),
        Yt = new Uint8Array(256);
    (function() {
        let e = 1;
        for (let r = 0; r < 255; r++) bt[r] = e, Yt[e] = r, e <<= 1, e & 256 && (e ^= 285);
        for (let r = 255; r < 512; r++) bt[r] = bt[r - 255]
    })();
    Gt.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return Yt[e]
    };
    Gt.exp = function(e) {
        return bt[e]
    };
    Gt.mul = function(e, r) {
        return e === 0 || r === 0 ? 0 : bt[Yt[e] + Yt[r]]
    }
});
var Tn = O(yt => {
    "use strict";
    var Wr = kn();
    yt.mul = function(e, r) {
        let o = new Uint8Array(e.length + r.length - 1);
        for (let n = 0; n < e.length; n++)
            for (let i = 0; i < r.length; i++) o[n + i] ^= Wr.mul(e[n], r[i]);
        return o
    };
    yt.mod = function(e, r) {
        let o = new Uint8Array(e);
        for (; o.length - r.length >= 0;) {
            let n = o[0];
            for (let s = 0; s < r.length; s++) o[s] ^= Wr.mul(r[s], n);
            let i = 0;
            for (; i < o.length && o[i] === 0;) i++;
            o = o.slice(i)
        }
        return o
    };
    yt.generateECPolynomial = function(e) {
        let r = new Uint8Array([1]);
        for (let o = 0; o < e; o++) r = yt.mul(r, new Uint8Array([1, Wr.exp(o)]));
        return r
    }
});
var Rn = O((Yd, Mn) => {
    "use strict";
    var Pn = Tn();

    function Hr(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
    }
    Hr.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = Pn.generateECPolynomial(this.degree)
    };
    Hr.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        let r = new Uint8Array(e.length + this.degree);
        r.set(e);
        let o = Pn.mod(r, this.genPoly),
            n = this.degree - o.length;
        if (n > 0) {
            let i = new Uint8Array(this.degree);
            return i.set(o, n), i
        }
        return o
    };
    Mn.exports = Hr
});
var Fr = O(Nn => {
    "use strict";
    Nn.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40
    }
});
var zr = O(ie => {
    "use strict";
    var Ln = "[0-9]+",
        ms = "[A-Z $%*+\\-./:]+",
        xt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    xt = xt.replace(/u/g, "\\u");
    var ps = "(?:(?![A-Z0-9 $%*+\\-./:]|" + xt + `)(?:.|[\r
]))+`;
    ie.KANJI = new RegExp(xt, "g");
    ie.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    ie.BYTE = new RegExp(ps, "g");
    ie.NUMERIC = new RegExp(Ln, "g");
    ie.ALPHANUMERIC = new RegExp(ms, "g");
    var fs = new RegExp("^" + xt + "$"),
        gs = new RegExp("^" + Ln + "$"),
        ws = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    ie.testKanji = function(e) {
        return fs.test(e)
    };
    ie.testNumeric = function(e) {
        return gs.test(e)
    };
    ie.testAlphanumeric = function(e) {
        return ws.test(e)
    }
});
var fe = O(B => {
    "use strict";
    var vs = Fr(),
        qr = zr();
    B.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    };
    B.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    };
    B.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    };
    B.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    };
    B.MIXED = {
        bit: -1
    };
    B.getCharCountIndicator = function(e, r) {
        if (!e.ccBits) throw new Error("Invalid mode: " + e);
        if (!vs.isValid(r)) throw new Error("Invalid version: " + r);
        return r >= 1 && r < 10 ? e.ccBits[0] : r < 27 ? e.ccBits[1] : e.ccBits[2]
    };
    B.getBestModeForData = function(e) {
        return qr.testNumeric(e) ? B.NUMERIC : qr.testAlphanumeric(e) ? B.ALPHANUMERIC : qr.testKanji(e) ? B.KANJI : B.BYTE
    };
    B.toString = function(e) {
        if (e && e.id) return e.id;
        throw new Error("Invalid mode")
    };
    B.isValid = function(e) {
        return e && e.bit && e.ccBits
    };

    function bs(t) {
        if (typeof t != "string") throw new Error("Param is not a string");
        switch (t.toLowerCase()) {
            case "numeric":
                return B.NUMERIC;
            case "alphanumeric":
                return B.ALPHANUMERIC;
            case "kanji":
                return B.KANJI;
            case "byte":
                return B.BYTE;
            default:
                throw new Error("Unknown mode: " + t)
        }
    }
    B.from = function(e, r) {
        if (B.isValid(e)) return e;
        try {
            return bs(e)
        } catch {
            return r
        }
    }
});
var Wn = O(Pe => {
    "use strict";
    var Jt = me(),
        ys = jr(),
        Bn = qt(),
        ge = fe(),
        Vr = Fr(),
        Un = 7973,
        Dn = Jt.getBCHDigit(Un);

    function xs(t, e, r) {
        for (let o = 1; o <= 40; o++)
            if (e <= Pe.getCapacity(o, r, t)) return o
    }

    function jn(t, e) {
        return ge.getCharCountIndicator(t, e) + 4
    }

    function Cs(t, e) {
        let r = 0;
        return t.forEach(function(o) {
            let n = jn(o.mode, e);
            r += n + o.getBitsLength()
        }), r
    }

    function Es(t, e) {
        for (let r = 1; r <= 40; r++)
            if (Cs(t, r) <= Pe.getCapacity(r, e, ge.MIXED)) return r
    }
    Pe.from = function(e, r) {
        return Vr.isValid(e) ? parseInt(e, 10) : r
    };
    Pe.getCapacity = function(e, r, o) {
        if (!Vr.isValid(e)) throw new Error("Invalid QR Code version");
        typeof o > "u" && (o = ge.BYTE);
        let n = Jt.getSymbolTotalCodewords(e),
            i = ys.getTotalCodewordsCount(e, r),
            s = (n - i) * 8;
        if (o === ge.MIXED) return s;
        let a = s - jn(o, e);
        switch (o) {
            case ge.NUMERIC:
                return Math.floor(a / 10 * 3);
            case ge.ALPHANUMERIC:
                return Math.floor(a / 11 * 2);
            case ge.KANJI:
                return Math.floor(a / 13);
            case ge.BYTE:
            default:
                return Math.floor(a / 8)
        }
    };
    Pe.getBestVersionForData = function(e, r) {
        let o, n = Bn.from(r, Bn.M);
        if (Array.isArray(e)) {
            if (e.length > 1) return Es(e, n);
            if (e.length === 0) return 1;
            o = e[0]
        } else o = e;
        return xs(o.mode, o.getLength(), n)
    };
    Pe.getEncodedBits = function(e) {
        if (!Vr.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
        let r = e << 12;
        for (; Jt.getBCHDigit(r) - Dn >= 0;) r ^= Un << Jt.getBCHDigit(r) - Dn;
        return e << 12 | r
    }
});
var qn = O(zn => {
    "use strict";
    var Zr = me(),
        Fn = 1335,
        $s = 21522,
        Hn = Zr.getBCHDigit(Fn);
    zn.getEncodedBits = function(e, r) {
        let o = e.bit << 3 | r,
            n = o << 10;
        for (; Zr.getBCHDigit(n) - Hn >= 0;) n ^= Fn << Zr.getBCHDigit(n) - Hn;
        return (o << 10 | n) ^ $s
    }
});
var Zn = O((th, Vn) => {
    "use strict";
    var As = fe();

    function We(t) {
        this.mode = As.NUMERIC, this.data = t.toString()
    }
    We.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
    };
    We.prototype.getLength = function() {
        return this.data.length
    };
    We.prototype.getBitsLength = function() {
        return We.getBitsLength(this.data.length)
    };
    We.prototype.write = function(e) {
        let r, o, n;
        for (r = 0; r + 3 <= this.data.length; r += 3) o = this.data.substr(r, 3), n = parseInt(o, 10), e.put(n, 10);
        let i = this.data.length - r;
        i > 0 && (o = this.data.substr(r), n = parseInt(o, 10), e.put(n, i * 3 + 1))
    };
    Vn.exports = We
});
var Yn = O((rh, Kn) => {
    "use strict";
    var _s = fe(),
        Kr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

    function He(t) {
        this.mode = _s.ALPHANUMERIC, this.data = t
    }
    He.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2)
    };
    He.prototype.getLength = function() {
        return this.data.length
    };
    He.prototype.getBitsLength = function() {
        return He.getBitsLength(this.data.length)
    };
    He.prototype.write = function(e) {
        let r;
        for (r = 0; r + 2 <= this.data.length; r += 2) {
            let o = Kr.indexOf(this.data[r]) * 45;
            o += Kr.indexOf(this.data[r + 1]), e.put(o, 11)
        }
        this.data.length % 2 && e.put(Kr.indexOf(this.data[r]), 6)
    };
    Kn.exports = He
});
var Jn = O((oh, Gn) => {
    "use strict";
    Gn.exports = function(e) {
        for (var r = [], o = e.length, n = 0; n < o; n++) {
            var i = e.charCodeAt(n);
            if (i >= 55296 && i <= 56319 && o > n + 1) {
                var s = e.charCodeAt(n + 1);
                s >= 56320 && s <= 57343 && (i = (i - 55296) * 1024 + s - 56320 + 65536, n += 1)
            }
            if (i < 128) {
                r.push(i);
                continue
            }
            if (i < 2048) {
                r.push(i >> 6 | 192), r.push(i & 63 | 128);
                continue
            }
            if (i < 55296 || i >= 57344 && i < 65536) {
                r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
                continue
            }
            if (i >= 65536 && i <= 1114111) {
                r.push(i >> 18 | 240), r.push(i >> 12 & 63 | 128), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
                continue
            }
            r.push(239, 191, 189)
        }
        return new Uint8Array(r).buffer
    }
});
var Xn = O((nh, Qn) => {
    "use strict";
    var Os = Jn(),
        Is = fe();

    function Fe(t) {
        this.mode = Is.BYTE, typeof t == "string" && (t = Os(t)), this.data = new Uint8Array(t)
    }
    Fe.getBitsLength = function(e) {
        return e * 8
    };
    Fe.prototype.getLength = function() {
        return this.data.length
    };
    Fe.prototype.getBitsLength = function() {
        return Fe.getBitsLength(this.data.length)
    };
    Fe.prototype.write = function(t) {
        for (let e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8)
    };
    Qn.exports = Fe
});
var ti = O((ih, ei) => {
    "use strict";
    var Ss = fe(),
        ks = me();

    function ze(t) {
        this.mode = Ss.KANJI, this.data = t
    }
    ze.getBitsLength = function(e) {
        return e * 13
    };
    ze.prototype.getLength = function() {
        return this.data.length
    };
    ze.prototype.getBitsLength = function() {
        return ze.getBitsLength(this.data.length)
    };
    ze.prototype.write = function(t) {
        let e;
        for (e = 0; e < this.data.length; e++) {
            let r = ks.toSJIS(this.data[e]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else if (r >= 57408 && r <= 60351) r -= 49472;
            else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
            r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13)
        }
    };
    ei.exports = ze
});
var ri = O((sh, Yr) => {
    "use strict";
    var Ct = {
        single_source_shortest_paths: function(t, e, r) {
            var o = {},
                n = {};
            n[e] = 0;
            var i = Ct.PriorityQueue.make();
            i.push(e, 0);
            for (var s, a, l, c, h, m, u, x, g; !i.empty();) {
                s = i.pop(), a = s.value, c = s.cost, h = t[a] || {};
                for (l in h) h.hasOwnProperty(l) && (m = h[l], u = c + m, x = n[l], g = typeof n[l] > "u", (g || x > u) && (n[l] = u, i.push(l, u), o[l] = a))
            }
            if (typeof r < "u" && typeof n[r] > "u") {
                var p = ["Could not find a path from ", e, " to ", r, "."].join("");
                throw new Error(p)
            }
            return o
        },
        extract_shortest_path_from_predecessor_list: function(t, e) {
            for (var r = [], o = e, n; o;) r.push(o), n = t[o], o = t[o];
            return r.reverse(), r
        },
        find_path: function(t, e, r) {
            var o = Ct.single_source_shortest_paths(t, e, r);
            return Ct.extract_shortest_path_from_predecessor_list(o, r)
        },
        PriorityQueue: {
            make: function(t) {
                var e = Ct.PriorityQueue,
                    r = {},
                    o;
                t = t || {};
                for (o in e) e.hasOwnProperty(o) && (r[o] = e[o]);
                return r.queue = [], r.sorter = t.sorter || e.default_sorter, r
            },
            default_sorter: function(t, e) {
                return t.cost - e.cost
            },
            push: function(t, e) {
                var r = {
                    value: t,
                    cost: e
                };
                this.queue.push(r), this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return this.queue.length === 0
            }
        }
    };
    typeof Yr < "u" && (Yr.exports = Ct)
});
var di = O(qe => {
    "use strict";
    var A = fe(),
        ii = Zn(),
        si = Yn(),
        ai = Xn(),
        li = ti(),
        Et = zr(),
        Qt = me(),
        Ts = ri();

    function oi(t) {
        return unescape(encodeURIComponent(t)).length
    }

    function $t(t, e, r) {
        let o = [],
            n;
        for (;
            (n = t.exec(r)) !== null;) o.push({
            data: n[0],
            index: n.index,
            mode: e,
            length: n[0].length
        });
        return o
    }

    function ci(t) {
        let e = $t(Et.NUMERIC, A.NUMERIC, t),
            r = $t(Et.ALPHANUMERIC, A.ALPHANUMERIC, t),
            o, n;
        return Qt.isKanjiModeEnabled() ? (o = $t(Et.BYTE, A.BYTE, t), n = $t(Et.KANJI, A.KANJI, t)) : (o = $t(Et.BYTE_KANJI, A.BYTE, t), n = []), e.concat(r, o, n).sort(function(s, a) {
            return s.index - a.index
        }).map(function(s) {
            return {
                data: s.data,
                mode: s.mode,
                length: s.length
            }
        })
    }

    function Gr(t, e) {
        switch (e) {
            case A.NUMERIC:
                return ii.getBitsLength(t);
            case A.ALPHANUMERIC:
                return si.getBitsLength(t);
            case A.KANJI:
                return li.getBitsLength(t);
            case A.BYTE:
                return ai.getBitsLength(t)
        }
    }

    function Ps(t) {
        return t.reduce(function(e, r) {
            let o = e.length - 1 >= 0 ? e[e.length - 1] : null;
            return o && o.mode === r.mode ? (e[e.length - 1].data += r.data, e) : (e.push(r), e)
        }, [])
    }

    function Ms(t) {
        let e = [];
        for (let r = 0; r < t.length; r++) {
            let o = t[r];
            switch (o.mode) {
                case A.NUMERIC:
                    e.push([o, {
                        data: o.data,
                        mode: A.ALPHANUMERIC,
                        length: o.length
                    }, {
                        data: o.data,
                        mode: A.BYTE,
                        length: o.length
                    }]);
                    break;
                case A.ALPHANUMERIC:
                    e.push([o, {
                        data: o.data,
                        mode: A.BYTE,
                        length: o.length
                    }]);
                    break;
                case A.KANJI:
                    e.push([o, {
                        data: o.data,
                        mode: A.BYTE,
                        length: oi(o.data)
                    }]);
                    break;
                case A.BYTE:
                    e.push([{
                        data: o.data,
                        mode: A.BYTE,
                        length: oi(o.data)
                    }])
            }
        }
        return e
    }

    function Rs(t, e) {
        let r = {},
            o = {
                start: {}
            },
            n = ["start"];
        for (let i = 0; i < t.length; i++) {
            let s = t[i],
                a = [];
            for (let l = 0; l < s.length; l++) {
                let c = s[l],
                    h = "" + i + l;
                a.push(h), r[h] = {
                    node: c,
                    lastCount: 0
                }, o[h] = {};
                for (let m = 0; m < n.length; m++) {
                    let u = n[m];
                    r[u] && r[u].node.mode === c.mode ? (o[u][h] = Gr(r[u].lastCount + c.length, c.mode) - Gr(r[u].lastCount, c.mode), r[u].lastCount += c.length) : (r[u] && (r[u].lastCount = c.length), o[u][h] = Gr(c.length, c.mode) + 4 + A.getCharCountIndicator(c.mode, e))
                }
            }
            n = a
        }
        for (let i = 0; i < n.length; i++) o[n[i]].end = 0;
        return {
            map: o,
            table: r
        }
    }

    function ni(t, e) {
        let r, o = A.getBestModeForData(t);
        if (r = A.from(e, o), r !== A.BYTE && r.bit < o.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + A.toString(r) + `.
 Suggested mode is: ` + A.toString(o));
        switch (r === A.KANJI && !Qt.isKanjiModeEnabled() && (r = A.BYTE), r) {
            case A.NUMERIC:
                return new ii(t);
            case A.ALPHANUMERIC:
                return new si(t);
            case A.KANJI:
                return new li(t);
            case A.BYTE:
                return new ai(t)
        }
    }
    qe.fromArray = function(e) {
        return e.reduce(function(r, o) {
            return typeof o == "string" ? r.push(ni(o, null)) : o.data && r.push(ni(o.data, o.mode)), r
        }, [])
    };
    qe.fromString = function(e, r) {
        let o = ci(e, Qt.isKanjiModeEnabled()),
            n = Ms(o),
            i = Rs(n, r),
            s = Ts.find_path(i.map, "start", "end"),
            a = [];
        for (let l = 1; l < s.length - 1; l++) a.push(i.table[s[l]].node);
        return qe.fromArray(Ps(a))
    };
    qe.rawSplit = function(e) {
        return qe.fromArray(ci(e, Qt.isKanjiModeEnabled()))
    }
});
var ui = O(hi => {
    "use strict";
    var er = me(),
        Jr = qt(),
        Ns = Cn(),
        Ls = $n(),
        Bs = An(),
        Ds = In(),
        eo = Sn(),
        to = jr(),
        Us = Rn(),
        Xt = Wn(),
        js = qn(),
        Ws = fe(),
        Qr = di();

    function Hs(t, e) {
        let r = t.size,
            o = Ds.getPositions(e);
        for (let n = 0; n < o.length; n++) {
            let i = o[n][0],
                s = o[n][1];
            for (let a = -1; a <= 7; a++)
                if (!(i + a <= -1 || r <= i + a))
                    for (let l = -1; l <= 7; l++) s + l <= -1 || r <= s + l || (a >= 0 && a <= 6 && (l === 0 || l === 6) || l >= 0 && l <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && l >= 2 && l <= 4 ? t.set(i + a, s + l, !0, !0) : t.set(i + a, s + l, !1, !0))
        }
    }

    function Fs(t) {
        let e = t.size;
        for (let r = 8; r < e - 8; r++) {
            let o = r % 2 === 0;
            t.set(r, 6, o, !0), t.set(6, r, o, !0)
        }
    }

    function zs(t, e) {
        let r = Bs.getPositions(e);
        for (let o = 0; o < r.length; o++) {
            let n = r[o][0],
                i = r[o][1];
            for (let s = -2; s <= 2; s++)
                for (let a = -2; a <= 2; a++) s === -2 || s === 2 || a === -2 || a === 2 || s === 0 && a === 0 ? t.set(n + s, i + a, !0, !0) : t.set(n + s, i + a, !1, !0)
        }
    }

    function qs(t, e) {
        let r = t.size,
            o = Xt.getEncodedBits(e),
            n, i, s;
        for (let a = 0; a < 18; a++) n = Math.floor(a / 3), i = a % 3 + r - 8 - 3, s = (o >> a & 1) === 1, t.set(n, i, s, !0), t.set(i, n, s, !0)
    }

    function Xr(t, e, r) {
        let o = t.size,
            n = js.getEncodedBits(e, r),
            i, s;
        for (i = 0; i < 15; i++) s = (n >> i & 1) === 1, i < 6 ? t.set(i, 8, s, !0) : i < 8 ? t.set(i + 1, 8, s, !0) : t.set(o - 15 + i, 8, s, !0), i < 8 ? t.set(8, o - i - 1, s, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, s, !0) : t.set(8, 15 - i - 1, s, !0);
        t.set(o - 8, 8, 1, !0)
    }

    function Vs(t, e) {
        let r = t.size,
            o = -1,
            n = r - 1,
            i = 7,
            s = 0;
        for (let a = r - 1; a > 0; a -= 2)
            for (a === 6 && a--;;) {
                for (let l = 0; l < 2; l++)
                    if (!t.isReserved(n, a - l)) {
                        let c = !1;
                        s < e.length && (c = (e[s] >>> i & 1) === 1), t.set(n, a - l, c), i--, i === -1 && (s++, i = 7)
                    }
                if (n += o, n < 0 || r <= n) {
                    n -= o, o = -o;
                    break
                }
            }
    }

    function Zs(t, e, r) {
        let o = new Ns;
        r.forEach(function(l) {
            o.put(l.mode.bit, 4), o.put(l.getLength(), Ws.getCharCountIndicator(l.mode, t)), l.write(o)
        });
        let n = er.getSymbolTotalCodewords(t),
            i = to.getTotalCodewordsCount(t, e),
            s = (n - i) * 8;
        for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) o.putBit(0);
        let a = (s - o.getLengthInBits()) / 8;
        for (let l = 0; l < a; l++) o.put(l % 2 ? 17 : 236, 8);
        return Ks(o, t, e)
    }

    function Ks(t, e, r) {
        let o = er.getSymbolTotalCodewords(e),
            n = to.getTotalCodewordsCount(e, r),
            i = o - n,
            s = to.getBlocksCount(e, r),
            a = o % s,
            l = s - a,
            c = Math.floor(o / s),
            h = Math.floor(i / s),
            m = h + 1,
            u = c - h,
            x = new Us(u),
            g = 0,
            p = new Array(s),
            k = new Array(s),
            y = 0,
            M = new Uint8Array(t.buffer);
        for (let F = 0; F < s; F++) {
            let ae = F < l ? h : m;
            p[F] = M.slice(g, g + ae), k[F] = x.encode(p[F]), g += ae, y = Math.max(y, ae)
        }
        let R = new Uint8Array(o),
            j = 0,
            P, Z;
        for (P = 0; P < y; P++)
            for (Z = 0; Z < s; Z++) P < p[Z].length && (R[j++] = p[Z][P]);
        for (P = 0; P < u; P++)
            for (Z = 0; Z < s; Z++) R[j++] = k[Z][P];
        return R
    }

    function Ys(t, e, r, o) {
        let n;
        if (Array.isArray(t)) n = Qr.fromArray(t);
        else if (typeof t == "string") {
            let c = e;
            if (!c) {
                let h = Qr.rawSplit(t);
                c = Xt.getBestVersionForData(h, r)
            }
            n = Qr.fromString(t, c || 40)
        } else throw new Error("Invalid data");
        let i = Xt.getBestVersionForData(n, r);
        if (!i) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = i;
        else if (e < i) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`);
        let s = Zs(e, r, n),
            a = er.getSymbolSize(e),
            l = new Ls(a);
        return Hs(l, e), Fs(l), zs(l, e), Xr(l, r, 0), e >= 7 && qs(l, e), Vs(l, s), isNaN(o) && (o = eo.getBestMask(l, Xr.bind(null, l, r))), eo.applyMask(o, l), Xr(l, r, o), {
            modules: l,
            version: e,
            errorCorrectionLevel: r,
            maskPattern: o,
            segments: n
        }
    }
    hi.create = function(e, r) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let o = Jr.M,
            n, i;
        return typeof r < "u" && (o = Jr.from(r.errorCorrectionLevel, Jr.M), n = Xt.from(r.version), i = eo.from(r.maskPattern), r.toSJISFunc && er.setToSJISFunction(r.toSJISFunc)), Ys(e, n, o, i)
    }
});
var ro = O(Me => {
    "use strict";

    function mi(t) {
        if (typeof t == "number" && (t = t.toString()), typeof t != "string") throw new Error("Color should be defined as hex string");
        let e = t.slice().replace("#", "").split("");
        if (e.length < 3 || e.length === 5 || e.length > 8) throw new Error("Invalid hex color: " + t);
        (e.length === 3 || e.length === 4) && (e = Array.prototype.concat.apply([], e.map(function(o) {
            return [o, o]
        }))), e.length === 6 && e.push("F", "F");
        let r = parseInt(e.join(""), 16);
        return {
            r: r >> 24 & 255,
            g: r >> 16 & 255,
            b: r >> 8 & 255,
            a: r & 255,
            hex: "#" + e.slice(0, 6).join("")
        }
    }
    Me.getOptions = function(e) {
        e || (e = {}), e.color || (e.color = {});
        let r = typeof e.margin > "u" || e.margin === null || e.margin < 0 ? 4 : e.margin,
            o = e.width && e.width >= 21 ? e.width : void 0,
            n = e.scale || 4;
        return {
            width: o,
            scale: o ? 4 : n,
            margin: r,
            color: {
                dark: mi(e.color.dark || "#000000ff"),
                light: mi(e.color.light || "#ffffffff")
            },
            type: e.type,
            rendererOpts: e.rendererOpts || {}
        }
    };
    Me.getScale = function(e, r) {
        return r.width && r.width >= e + r.margin * 2 ? r.width / (e + r.margin * 2) : r.scale
    };
    Me.getImageWidth = function(e, r) {
        let o = Me.getScale(e, r);
        return Math.floor((e + r.margin * 2) * o)
    };
    Me.qrToImageData = function(e, r, o) {
        let n = r.modules.size,
            i = r.modules.data,
            s = Me.getScale(n, o),
            a = Math.floor((n + o.margin * 2) * s),
            l = o.margin * s,
            c = [o.color.light, o.color.dark];
        for (let h = 0; h < a; h++)
            for (let m = 0; m < a; m++) {
                let u = (h * a + m) * 4,
                    x = o.color.light;
                if (h >= l && m >= l && h < a - l && m < a - l) {
                    let g = Math.floor((h - l) / s),
                        p = Math.floor((m - l) / s);
                    x = c[i[g * n + p] ? 1 : 0]
                }
                e[u++] = x.r, e[u++] = x.g, e[u++] = x.b, e[u] = x.a
            }
    }
});
var pi = O(tr => {
    "use strict";
    var oo = ro();

    function Gs(t, e, r) {
        t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = r, e.width = r, e.style.height = r + "px", e.style.width = r + "px"
    }

    function Js() {
        try {
            return document.createElement("canvas")
        } catch {
            throw new Error("You need to specify a canvas element")
        }
    }
    tr.render = function(e, r, o) {
        let n = o,
            i = r;
        typeof n > "u" && (!r || !r.getContext) && (n = r, r = void 0), r || (i = Js()), n = oo.getOptions(n);
        let s = oo.getImageWidth(e.modules.size, n),
            a = i.getContext("2d"),
            l = a.createImageData(s, s);
        return oo.qrToImageData(l.data, e, n), Gs(a, i, s), a.putImageData(l, 0, 0), i
    };
    tr.renderToDataURL = function(e, r, o) {
        let n = o;
        typeof n > "u" && (!r || !r.getContext) && (n = r, r = void 0), n || (n = {});
        let i = tr.render(e, r, n),
            s = n.type || "image/png",
            a = n.rendererOpts || {};
        return i.toDataURL(s, a.quality)
    }
});
var wi = O(gi => {
    "use strict";
    var Qs = ro();

    function fi(t, e) {
        let r = t.a / 255,
            o = e + '="' + t.hex + '"';
        return r < 1 ? o + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : o
    }

    function no(t, e, r) {
        let o = t + e;
        return typeof r < "u" && (o += " " + r), o
    }

    function Xs(t, e, r) {
        let o = "",
            n = 0,
            i = !1,
            s = 0;
        for (let a = 0; a < t.length; a++) {
            let l = Math.floor(a % e),
                c = Math.floor(a / e);
            !l && !i && (i = !0), t[a] ? (s++, a > 0 && l > 0 && t[a - 1] || (o += i ? no("M", l + r, .5 + c + r) : no("m", n, 0), n = 0, i = !1), l + 1 < e && t[a + 1] || (o += no("h", s), s = 0)) : n++
        }
        return o
    }
    gi.render = function(e, r, o) {
        let n = Qs.getOptions(r),
            i = e.modules.size,
            s = e.modules.data,
            a = i + n.margin * 2,
            l = n.color.light.a ? "<path " + fi(n.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "",
            c = "<path " + fi(n.color.dark, "stroke") + ' d="' + Xs(s, i, n.margin) + '"/>',
            h = 'viewBox="0 0 ' + a + " " + a + '"',
            u = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + h + ' shape-rendering="crispEdges">' + l + c + `</svg>
`;
        return typeof o == "function" && o(null, u), u
    }
});
var bi = O(At => {
    "use strict";
    var ea = bn(),
        io = ui(),
        vi = pi(),
        ta = wi();

    function so(t, e, r, o, n) {
        let i = [].slice.call(arguments, 1),
            s = i.length,
            a = typeof i[s - 1] == "function";
        if (!a && !ea()) throw new Error("Callback required as last argument");
        if (a) {
            if (s < 2) throw new Error("Too few arguments provided");
            s === 2 ? (n = r, r = e, e = o = void 0) : s === 3 && (e.getContext && typeof n > "u" ? (n = o, o = void 0) : (n = o, o = r, r = e, e = void 0))
        } else {
            if (s < 1) throw new Error("Too few arguments provided");
            return s === 1 ? (r = e, e = o = void 0) : s === 2 && !e.getContext && (o = r, r = e, e = void 0), new Promise(function(l, c) {
                try {
                    let h = io.create(r, o);
                    l(t(h, e, o))
                } catch (h) {
                    c(h)
                }
            })
        }
        try {
            let l = io.create(r, o);
            n(null, t(l, e, o))
        } catch (l) {
            n(l)
        }
    }
    At.create = io.create;
    At.toCanvas = so.bind(null, vi.render);
    At.toDataURL = so.bind(null, vi.renderToDataURL);
    At.toString = so.bind(null, function(t, e, r) {
        return ta.render(t, r)
    })
});
var Mt = window,
    Rt = Mt.ShadowRoot && (Mt.ShadyCSS === void 0 || Mt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    cr = Symbol(),
    Po = new WeakMap,
    rt = class {
        constructor(e, r, o) {
            if (this._$cssResult$ = !0, o !== cr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e, this.t = r
        }
        get styleSheet() {
            let e = this.o,
                r = this.t;
            if (Rt && e === void 0) {
                let o = r !== void 0 && r.length === 1;
                o && (e = Po.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), o && Po.set(r, e))
            }
            return e
        }
        toString() {
            return this.cssText
        }
    },
    Mo = t => new rt(typeof t == "string" ? t : t + "", void 0, cr),
    $ = (t, ...e) => {
        let r = t.length === 1 ? t[0] : e.reduce((o, n, i) => o + (s => {
            if (s._$cssResult$ === !0) return s.cssText;
            if (typeof s == "number") return s;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
        })(n) + t[i + 1], t[0]);
        return new rt(r, t, cr)
    },
    dr = (t, e) => {
        Rt ? t.adoptedStyleSheets = e.map(r => r instanceof CSSStyleSheet ? r : r.styleSheet) : e.forEach(r => {
            let o = document.createElement("style"),
                n = Mt.litNonce;
            n !== void 0 && o.setAttribute("nonce", n), o.textContent = r.cssText, t.appendChild(o)
        })
    },
    Nt = Rt ? t => t : t => t instanceof CSSStyleSheet ? (e => {
        let r = "";
        for (let o of e.cssRules) r += o.cssText;
        return Mo(r)
    })(t) : t;
var hr, Lt = window,
    Ro = Lt.trustedTypes,
    Ri = Ro ? Ro.emptyScript : "",
    No = Lt.reactiveElementPolyfillSupport,
    mr = {
        toAttribute(t, e) {
            switch (e) {
                case Boolean:
                    t = t ? Ri : null;
                    break;
                case Object:
                case Array:
                    t = t == null ? t : JSON.stringify(t)
            }
            return t
        },
        fromAttribute(t, e) {
            let r = t;
            switch (e) {
                case Boolean:
                    r = t !== null;
                    break;
                case Number:
                    r = t === null ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        r = JSON.parse(t)
                    } catch {
                        r = null
                    }
            }
            return r
        }
    },
    Lo = (t, e) => e !== t && (e == e || t == t),
    ur = {
        attribute: !0,
        type: String,
        converter: mr,
        reflect: !1,
        hasChanged: Lo
    },
    pr = "finalized",
    te = class extends HTMLElement {
        constructor() {
            super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
        }
        static addInitializer(e) {
            var r;
            this.finalize(), ((r = this.h) !== null && r !== void 0 ? r : this.h = []).push(e)
        }
        static get observedAttributes() {
            this.finalize();
            let e = [];
            return this.elementProperties.forEach((r, o) => {
                let n = this._$Ep(o, r);
                n !== void 0 && (this._$Ev.set(n, o), e.push(n))
            }), e
        }
        static createProperty(e, r = ur) {
            if (r.state && (r.attribute = !1), this.finalize(), this.elementProperties.set(e, r), !r.noAccessor && !this.prototype.hasOwnProperty(e)) {
                let o = typeof e == "symbol" ? Symbol() : "__" + e,
                    n = this.getPropertyDescriptor(e, o, r);
                n !== void 0 && Object.defineProperty(this.prototype, e, n)
            }
        }
        static getPropertyDescriptor(e, r, o) {
            return {
                get() {
                    return this[r]
                },
                set(n) {
                    let i = this[e];
                    this[r] = n, this.requestUpdate(e, i, o)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this.elementProperties.get(e) || ur
        }
        static finalize() {
            if (this.hasOwnProperty(pr)) return !1;
            this[pr] = !0;
            let e = Object.getPrototypeOf(this);
            if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                let r = this.properties,
                    o = [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)];
                for (let n of o) this.createProperty(n, r[n])
            }
            return this.elementStyles = this.finalizeStyles(this.styles), !0
        }
        static finalizeStyles(e) {
            let r = [];
            if (Array.isArray(e)) {
                let o = new Set(e.flat(1 / 0).reverse());
                for (let n of o) r.unshift(Nt(n))
            } else e !== void 0 && r.push(Nt(e));
            return r
        }
        static _$Ep(e, r) {
            let o = r.attribute;
            return o === !1 ? void 0 : typeof o == "string" ? o : typeof e == "string" ? e.toLowerCase() : void 0
        }
        _$Eu() {
            var e;
            this._$E_ = new Promise(r => this.enableUpdating = r), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach(r => r(this))
        }
        addController(e) {
            var r, o;
            ((r = this._$ES) !== null && r !== void 0 ? r : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((o = e.hostConnected) === null || o === void 0 || o.call(e))
        }
        removeController(e) {
            var r;
            (r = this._$ES) === null || r === void 0 || r.splice(this._$ES.indexOf(e) >>> 0, 1)
        }
        _$Eg() {
            this.constructor.elementProperties.forEach((e, r) => {
                this.hasOwnProperty(r) && (this._$Ei.set(r, this[r]), delete this[r])
            })
        }
        createRenderRoot() {
            var e;
            let r = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
            return dr(r, this.constructor.elementStyles), r
        }
        connectedCallback() {
            var e;
            this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach(r => {
                var o;
                return (o = r.hostConnected) === null || o === void 0 ? void 0 : o.call(r)
            })
        }
        enableUpdating(e) {}
        disconnectedCallback() {
            var e;
            (e = this._$ES) === null || e === void 0 || e.forEach(r => {
                var o;
                return (o = r.hostDisconnected) === null || o === void 0 ? void 0 : o.call(r)
            })
        }
        attributeChangedCallback(e, r, o) {
            this._$AK(e, o)
        }
        _$EO(e, r, o = ur) {
            var n;
            let i = this.constructor._$Ep(e, o);
            if (i !== void 0 && o.reflect === !0) {
                let s = (((n = o.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== void 0 ? o.converter : mr).toAttribute(r, o.type);
                this._$El = e, s == null ? this.removeAttribute(i) : this.setAttribute(i, s), this._$El = null
            }
        }
        _$AK(e, r) {
            var o;
            let n = this.constructor,
                i = n._$Ev.get(e);
            if (i !== void 0 && this._$El !== i) {
                let s = n.getPropertyOptions(i),
                    a = typeof s.converter == "function" ? {
                        fromAttribute: s.converter
                    } : ((o = s.converter) === null || o === void 0 ? void 0 : o.fromAttribute) !== void 0 ? s.converter : mr;
                this._$El = i, this[i] = a.fromAttribute(r, s.type), this._$El = null
            }
        }
        requestUpdate(e, r, o) {
            let n = !0;
            e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e)).hasChanged || Lo)(this[e], r) ? (this._$AL.has(e) || this._$AL.set(e, r), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, o))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
        }
        _$Ej() {
            return W(this, null, function*() {
                this.isUpdatePending = !0;
                try {
                    yield this._$E_
                } catch (r) {
                    Promise.reject(r)
                }
                let e = this.scheduleUpdate();
                return e != null && (yield e), !this.isUpdatePending
            })
        }
        scheduleUpdate() {
            return this.performUpdate()
        }
        performUpdate() {
            var e;
            if (!this.isUpdatePending) return;
            this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, i) => this[i] = n), this._$Ei = void 0);
            let r = !1,
                o = this._$AL;
            try {
                r = this.shouldUpdate(o), r ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach(n => {
                    var i;
                    return (i = n.hostUpdate) === null || i === void 0 ? void 0 : i.call(n)
                }), this.update(o)) : this._$Ek()
            } catch (n) {
                throw r = !1, this._$Ek(), n
            }
            r && this._$AE(o)
        }
        willUpdate(e) {}
        _$AE(e) {
            var r;
            (r = this._$ES) === null || r === void 0 || r.forEach(o => {
                var n;
                return (n = o.hostUpdated) === null || n === void 0 ? void 0 : n.call(o)
            }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
        }
        _$Ek() {
            this._$AL = new Map, this.isUpdatePending = !1
        }
        get updateComplete() {
            return this.getUpdateComplete()
        }
        getUpdateComplete() {
            return this._$E_
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            this._$EC !== void 0 && (this._$EC.forEach((r, o) => this._$EO(o, this[o], r)), this._$EC = void 0), this._$Ek()
        }
        updated(e) {}
        firstUpdated(e) {}
    };
te[pr] = !0, te.elementProperties = new Map, te.elementStyles = [], te.shadowRootOptions = {
    mode: "open"
}, No ? .({
    ReactiveElement: te
}), ((hr = Lt.reactiveElementVersions) !== null && hr !== void 0 ? hr : Lt.reactiveElementVersions = []).push("1.6.3");
var fr, Bt = window,
    Be = Bt.trustedTypes,
    Bo = Be ? Be.createPolicy("lit-html", {
        createHTML: t => t
    }) : void 0,
    wr = "$lit$",
    ce = `lit$${(Math.random()+"").slice(9)}$`,
    zo = "?" + ce,
    Ni = `<${zo}>`,
    _e = document,
    nt = () => _e.createComment(""),
    it = t => t === null || typeof t != "object" && typeof t != "function",
    qo = Array.isArray,
    Li = t => qo(t) || typeof t ? .[Symbol.iterator] == "function",
    gr = `[ 	
\f\r]`,
    ot = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    Do = /-->/g,
    Uo = />/g,
    $e = RegExp(`>|${gr}(?:([^\\s"'>=/]+)(${gr}*=${gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
    jo = /'/g,
    Wo = /"/g,
    Vo = /^(?:script|style|textarea|title)$/i,
    Zo = t => (e, ...r) => ({
        _$litType$: t,
        strings: e,
        values: r
    }),
    d = Zo(1),
    S = Zo(2),
    re = Symbol.for("lit-noChange"),
    L = Symbol.for("lit-nothing"),
    Ho = new WeakMap,
    Ae = _e.createTreeWalker(_e, 129, null, !1);

function Ko(t, e) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Bo !== void 0 ? Bo.createHTML(e) : e
}
var Bi = (t, e) => {
        let r = t.length - 1,
            o = [],
            n, i = e === 2 ? "<svg>" : "",
            s = ot;
        for (let a = 0; a < r; a++) {
            let l = t[a],
                c, h, m = -1,
                u = 0;
            for (; u < l.length && (s.lastIndex = u, h = s.exec(l), h !== null);) u = s.lastIndex, s === ot ? h[1] === "!--" ? s = Do : h[1] !== void 0 ? s = Uo : h[2] !== void 0 ? (Vo.test(h[2]) && (n = RegExp("</" + h[2], "g")), s = $e) : h[3] !== void 0 && (s = $e) : s === $e ? h[0] === ">" ? (s = n ? ? ot, m = -1) : h[1] === void 0 ? m = -2 : (m = s.lastIndex - h[2].length, c = h[1], s = h[3] === void 0 ? $e : h[3] === '"' ? Wo : jo) : s === Wo || s === jo ? s = $e : s === Do || s === Uo ? s = ot : (s = $e, n = void 0);
            let x = s === $e && t[a + 1].startsWith("/>") ? " " : "";
            i += s === ot ? l + Ni : m >= 0 ? (o.push(c), l.slice(0, m) + wr + l.slice(m) + ce + x) : l + ce + (m === -2 ? (o.push(void 0), a) : x)
        }
        return [Ko(t, i + (t[r] || "<?>") + (e === 2 ? "</svg>" : "")), o]
    },
    st = class t {
        constructor({
            strings: e,
            _$litType$: r
        }, o) {
            let n;
            this.parts = [];
            let i = 0,
                s = 0,
                a = e.length - 1,
                l = this.parts,
                [c, h] = Bi(e, r);
            if (this.el = t.createElement(c, o), Ae.currentNode = this.el.content, r === 2) {
                let m = this.el.content,
                    u = m.firstChild;
                u.remove(), m.append(...u.childNodes)
            }
            for (;
                (n = Ae.nextNode()) !== null && l.length < a;) {
                if (n.nodeType === 1) {
                    if (n.hasAttributes()) {
                        let m = [];
                        for (let u of n.getAttributeNames())
                            if (u.endsWith(wr) || u.startsWith(ce)) {
                                let x = h[s++];
                                if (m.push(u), x !== void 0) {
                                    let g = n.getAttribute(x.toLowerCase() + wr).split(ce),
                                        p = /([.?@])?(.*)/.exec(x);
                                    l.push({
                                        type: 1,
                                        index: i,
                                        name: p[2],
                                        strings: g,
                                        ctor: p[1] === "." ? br : p[1] === "?" ? yr : p[1] === "@" ? xr : Ue
                                    })
                                } else l.push({
                                    type: 6,
                                    index: i
                                })
                            }
                        for (let u of m) n.removeAttribute(u)
                    }
                    if (Vo.test(n.tagName)) {
                        let m = n.textContent.split(ce),
                            u = m.length - 1;
                        if (u > 0) {
                            n.textContent = Be ? Be.emptyScript : "";
                            for (let x = 0; x < u; x++) n.append(m[x], nt()), Ae.nextNode(), l.push({
                                type: 2,
                                index: ++i
                            });
                            n.append(m[u], nt())
                        }
                    }
                } else if (n.nodeType === 8)
                    if (n.data === zo) l.push({
                        type: 2,
                        index: i
                    });
                    else {
                        let m = -1;
                        for (;
                            (m = n.data.indexOf(ce, m + 1)) !== -1;) l.push({
                            type: 7,
                            index: i
                        }), m += ce.length - 1
                    }
                i++
            }
        }
        static createElement(e, r) {
            let o = _e.createElement("template");
            return o.innerHTML = e, o
        }
    };

function De(t, e, r = t, o) {
    var n, i, s, a;
    if (e === re) return e;
    let l = o !== void 0 ? (n = r._$Co) === null || n === void 0 ? void 0 : n[o] : r._$Cl,
        c = it(e) ? void 0 : e._$litDirective$;
    return l ? .constructor !== c && ((i = l ? ._$AO) === null || i === void 0 || i.call(l, !1), c === void 0 ? l = void 0 : (l = new c(t), l._$AT(t, r, o)), o !== void 0 ? ((s = (a = r)._$Co) !== null && s !== void 0 ? s : a._$Co = [])[o] = l : r._$Cl = l), l !== void 0 && (e = De(t, l._$AS(t, e.values), l, o)), e
}
var vr = class {
        constructor(e, r) {
            this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r
        }
        get parentNode() {
            return this._$AM.parentNode
        }
        get _$AU() {
            return this._$AM._$AU
        }
        u(e) {
            var r;
            let {
                el: {
                    content: o
                },
                parts: n
            } = this._$AD, i = ((r = e ? .creationScope) !== null && r !== void 0 ? r : _e).importNode(o, !0);
            Ae.currentNode = i;
            let s = Ae.nextNode(),
                a = 0,
                l = 0,
                c = n[0];
            for (; c !== void 0;) {
                if (a === c.index) {
                    let h;
                    c.type === 2 ? h = new at(s, s.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(s, c.name, c.strings, this, e) : c.type === 6 && (h = new Cr(s, this, e)), this._$AV.push(h), c = n[++l]
                }
                a !== c ? .index && (s = Ae.nextNode(), a++)
            }
            return Ae.currentNode = _e, i
        }
        v(e) {
            let r = 0;
            for (let o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, r), r += o.strings.length - 2) : o._$AI(e[r])), r++
        }
    },
    at = class t {
        constructor(e, r, o, n) {
            var i;
            this.type = 2, this._$AH = L, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = o, this.options = n, this._$Cp = (i = n ? .isConnected) === null || i === void 0 || i
        }
        get _$AU() {
            var e, r;
            return (r = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && r !== void 0 ? r : this._$Cp
        }
        get parentNode() {
            let e = this._$AA.parentNode,
                r = this._$AM;
            return r !== void 0 && e ? .nodeType === 11 && (e = r.parentNode), e
        }
        get startNode() {
            return this._$AA
        }
        get endNode() {
            return this._$AB
        }
        _$AI(e, r = this) {
            e = De(this, e, r), it(e) ? e === L || e == null || e === "" ? (this._$AH !== L && this._$AR(), this._$AH = L) : e !== this._$AH && e !== re && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Li(e) ? this.T(e) : this._(e)
        }
        k(e) {
            return this._$AA.parentNode.insertBefore(e, this._$AB)
        }
        $(e) {
            this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
        }
        _(e) {
            this._$AH !== L && it(this._$AH) ? this._$AA.nextSibling.data = e : this.$(_e.createTextNode(e)), this._$AH = e
        }
        g(e) {
            var r;
            let {
                values: o,
                _$litType$: n
            } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = st.createElement(Ko(n.h, n.h[0]), this.options)), n);
            if (((r = this._$AH) === null || r === void 0 ? void 0 : r._$AD) === i) this._$AH.v(o);
            else {
                let s = new vr(i, this),
                    a = s.u(this.options);
                s.v(o), this.$(a), this._$AH = s
            }
        }
        _$AC(e) {
            let r = Ho.get(e.strings);
            return r === void 0 && Ho.set(e.strings, r = new st(e)), r
        }
        T(e) {
            qo(this._$AH) || (this._$AH = [], this._$AR());
            let r = this._$AH,
                o, n = 0;
            for (let i of e) n === r.length ? r.push(o = new t(this.k(nt()), this.k(nt()), this, this.options)) : o = r[n], o._$AI(i), n++;
            n < r.length && (this._$AR(o && o._$AB.nextSibling, n), r.length = n)
        }
        _$AR(e = this._$AA.nextSibling, r) {
            var o;
            for ((o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, r); e && e !== this._$AB;) {
                let n = e.nextSibling;
                e.remove(), e = n
            }
        }
        setConnected(e) {
            var r;
            this._$AM === void 0 && (this._$Cp = e, (r = this._$AP) === null || r === void 0 || r.call(this, e))
        }
    },
    Ue = class {
        constructor(e, r, o, n, i) {
            this.type = 1, this._$AH = L, this._$AN = void 0, this.element = e, this.name = r, this._$AM = n, this.options = i, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String), this.strings = o) : this._$AH = L
        }
        get tagName() {
            return this.element.tagName
        }
        get _$AU() {
            return this._$AM._$AU
        }
        _$AI(e, r = this, o, n) {
            let i = this.strings,
                s = !1;
            if (i === void 0) e = De(this, e, r, 0), s = !it(e) || e !== this._$AH && e !== re, s && (this._$AH = e);
            else {
                let a = e,
                    l, c;
                for (e = i[0], l = 0; l < i.length - 1; l++) c = De(this, a[o + l], r, l), c === re && (c = this._$AH[l]), s || (s = !it(c) || c !== this._$AH[l]), c === L ? e = L : e !== L && (e += (c ? ? "") + i[l + 1]), this._$AH[l] = c
            }
            s && !n && this.j(e)
        }
        j(e) {
            e === L ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ? ? "")
        }
    },
    br = class extends Ue {
        constructor() {
            super(...arguments), this.type = 3
        }
        j(e) {
            this.element[this.name] = e === L ? void 0 : e
        }
    },
    Di = Be ? Be.emptyScript : "",
    yr = class extends Ue {
        constructor() {
            super(...arguments), this.type = 4
        }
        j(e) {
            e && e !== L ? this.element.setAttribute(this.name, Di) : this.element.removeAttribute(this.name)
        }
    },
    xr = class extends Ue {
        constructor(e, r, o, n, i) {
            super(e, r, o, n, i), this.type = 5
        }
        _$AI(e, r = this) {
            var o;
            if ((e = (o = De(this, e, r, 0)) !== null && o !== void 0 ? o : L) === re) return;
            let n = this._$AH,
                i = e === L && n !== L || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
                s = e !== L && (n === L || i);
            i && this.element.removeEventListener(this.name, this, n), s && this.element.addEventListener(this.name, this, e), this._$AH = e
        }
        handleEvent(e) {
            var r, o;
            typeof this._$AH == "function" ? this._$AH.call((o = (r = this.options) === null || r === void 0 ? void 0 : r.host) !== null && o !== void 0 ? o : this.element, e) : this._$AH.handleEvent(e)
        }
    },
    Cr = class {
        constructor(e, r, o) {
            this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = o
        }
        get _$AU() {
            return this._$AM._$AU
        }
        _$AI(e) {
            De(this, e)
        }
    };
var Fo = Bt.litHtmlPolyfillSupport;
Fo ? .(st, at), ((fr = Bt.litHtmlVersions) !== null && fr !== void 0 ? fr : Bt.litHtmlVersions = []).push("2.8.0");
var Yo = (t, e, r) => {
    var o, n;
    let i = (o = r ? .renderBefore) !== null && o !== void 0 ? o : e,
        s = i._$litPart$;
    if (s === void 0) {
        let a = (n = r ? .renderBefore) !== null && n !== void 0 ? n : null;
        i._$litPart$ = s = new at(e.insertBefore(nt(), a), a, void 0, r ? ? {})
    }
    return s._$AI(t), s
};
var Er, $r;
var v = class extends te {
    constructor() {
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0
    }
    createRenderRoot() {
        var e, r;
        let o = super.createRenderRoot();
        return (e = (r = this.renderOptions).renderBefore) !== null && e !== void 0 || (r.renderBefore = o.firstChild), o
    }
    update(e) {
        let r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Yo(r, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        var e;
        super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0)
    }
    disconnectedCallback() {
        var e;
        super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1)
    }
    render() {
        return re
    }
};
v.finalized = !0, v._$litElement$ = !0, (Er = globalThis.litElementHydrateSupport) === null || Er === void 0 || Er.call(globalThis, {
    LitElement: v
});
var Go = globalThis.litElementPolyfillSupport;
Go ? .({
    LitElement: v
});
(($r = globalThis.litElementVersions) !== null && $r !== void 0 ? $r : globalThis.litElementVersions = []).push("3.3.3");
var C = t => e => typeof e == "function" ? ((r, o) => (customElements.define(r, o), o))(t, e) : ((r, o) => {
    let {
        kind: n,
        elements: i
    } = o;
    return {
        kind: n,
        elements: i,
        finisher(s) {
            customElements.define(r, s)
        }
    }
})(t, e);
var Ui = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? et(Xe({}, e), {
        finisher(r) {
            r.createProperty(e.key, t)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer() {
            typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this))
        },
        finisher(r) {
            r.createProperty(e.key, t)
        }
    },
    ji = (t, e, r) => {
        e.constructor.createProperty(r, t)
    };

function w(t) {
    return (e, r) => r !== void 0 ? ji(t, e, r) : Ui(t, e)
}

function q(t) {
    return w(et(Xe({}, t), {
        state: !0
    }))
}
var Ar, Yc = ((Ar = window.HTMLSlotElement) === null || Ar === void 0 ? void 0 : Ar.prototype.assignedElements) != null ? (t, e) => t.assignedElements(e) : (t, e) => t.assignedNodes(e).filter(r => r.nodeType === Node.ELEMENT_NODE);
var Jo = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6
    },
    Qo = t => (...e) => ({
        _$litDirective$: t,
        values: e
    }),
    Dt = class {
        constructor(e) {}
        get _$AU() {
            return this._$AM._$AU
        }
        _$AT(e, r, o) {
            this._$Ct = e, this._$AM = r, this._$Ci = o
        }
        _$AS(e, r) {
            return this.update(e, r)
        }
        update(e, r) {
            return this.render(...r)
        }
    };
var J = Qo(class extends Dt {
    constructor(t) {
        var e;
        if (super(t), t.type !== Jo.ATTRIBUTE || t.name !== "class" || ((e = t.strings) === null || e === void 0 ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
    }
    render(t) {
        return " " + Object.keys(t).filter(e => t[e]).join(" ") + " "
    }
    update(t, [e]) {
        var r, o;
        if (this.it === void 0) {
            this.it = new Set, t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter(i => i !== "")));
            for (let i in e) e[i] && !(!((r = this.nt) === null || r === void 0) && r.has(i)) && this.it.add(i);
            return this.render(e)
        }
        let n = t.element.classList;
        this.it.forEach(i => {
            i in e || (n.remove(i), this.it.delete(i))
        });
        for (let i in e) {
            let s = !!e[i];
            s === this.it.has(i) || !((o = this.nt) === null || o === void 0) && o.has(i) || (s ? (n.add(i), this.it.add(i)) : (n.remove(i), this.it.delete(i)))
        }
        return re
    }
});

function _r(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
var ct = (t, e, r) => Math.min(Math.max(r, t), e);
var U = {
    duration: .3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};
var oe = t => typeof t == "number";
var Q = t => Array.isArray(t) && !oe(t[0]);
var Xo = (t, e, r) => {
    let o = e - t;
    return ((r - t) % o + o) % o + t
};

function en(t, e) {
    return Q(t) ? t[Xo(0, t.length, e)] : t
}
var Ut = (t, e, r) => -r * t + r * e + t;
var dt = () => {},
    V = t => t;
var Oe = (t, e, r) => e - t === 0 ? 1 : (r - t) / (e - t);

function Or(t, e) {
    let r = t[t.length - 1];
    for (let o = 1; o <= e; o++) {
        let n = Oe(0, e, o);
        t.push(Ut(r, 1, n))
    }
}

function tn(t) {
    let e = [0];
    return Or(e, t - 1), e
}

function Ir(t, e = tn(t.length), r = V) {
    let o = t.length,
        n = o - e.length;
    return n > 0 && Or(e, n), i => {
        let s = 0;
        for (; s < o - 2 && !(i < e[s + 1]); s++);
        let a = ct(0, 1, Oe(e[s], e[s + 1], i));
        return a = en(r, s)(a), Ut(t[s], t[s + 1], a)
    }
}
var ht = t => Array.isArray(t) && oe(t[0]);
var je = t => typeof t == "object" && !!t.createAnimation;
var K = t => typeof t == "function";
var Sr = t => typeof t == "string";
var de = {
    ms: t => t * 1e3,
    s: t => t / 1e3
};
var rn = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
    Wi = 1e-7,
    Hi = 12;

function Fi(t, e, r, o, n) {
    let i, s, a = 0;
    do s = e + (r - e) / 2, i = rn(s, o, n) - t, i > 0 ? r = s : e = s; while (Math.abs(i) > Wi && ++a < Hi);
    return s
}

function Ie(t, e, r, o) {
    if (t === e && r === o) return V;
    let n = i => Fi(i, 0, 1, t, r);
    return i => i === 0 || i === 1 ? i : rn(n(i), e, o)
}
var kr = (t, e = "end") => r => {
    r = e === "end" ? Math.min(r, .999) : Math.max(r, .001);
    let o = r * t,
        n = e === "end" ? Math.floor(o) : Math.ceil(o);
    return ct(0, 1, n / t)
};
var zi = {
        ease: Ie(.25, .1, .25, 1),
        "ease-in": Ie(.42, 0, 1, 1),
        "ease-in-out": Ie(.42, 0, .58, 1),
        "ease-out": Ie(0, 0, .58, 1)
    },
    qi = /\((.*?)\)/;

function Tr(t) {
    if (K(t)) return t;
    if (ht(t)) return Ie(...t);
    let e = zi[t];
    if (e) return e;
    if (t.startsWith("steps")) {
        let r = qi.exec(t);
        if (r) {
            let o = r[1].split(",");
            return kr(parseFloat(o[0]), o[1].trim())
        }
    }
    return V
}
var Se = class {
    constructor(e, r = [0, 1], {
        easing: o,
        duration: n = U.duration,
        delay: i = U.delay,
        endDelay: s = U.endDelay,
        repeat: a = U.repeat,
        offset: l,
        direction: c = "normal",
        autoplay: h = !0
    } = {}) {
        if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = V, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((u, x) => {
                this.resolve = u, this.reject = x
            }), o = o || U.easing, je(o)) {
            let u = o.createAnimation(r);
            o = u.easing, r = u.keyframes || r, n = u.duration || n
        }
        this.repeat = a, this.easing = Q(o) ? V : Tr(o), this.updateDuration(n);
        let m = Ir(r, l, Q(o) ? o.map(Tr) : V);
        this.tick = u => {
            var x;
            i = i;
            let g = 0;
            this.pauseTime !== void 0 ? g = this.pauseTime : g = (u - this.startTime) * this.rate, this.t = g, g /= 1e3, g = Math.max(g - i, 0), this.playState === "finished" && this.pauseTime === void 0 && (g = this.totalDuration);
            let p = g / this.duration,
                k = Math.floor(p),
                y = p % 1;
            !y && p >= 1 && (y = 1), y === 1 && k--;
            let M = k % 2;
            (c === "reverse" || c === "alternate" && M || c === "alternate-reverse" && !M) && (y = 1 - y);
            let R = g >= this.totalDuration ? 1 : Math.min(y, 1),
                j = m(this.easing(R));
            e(j), this.pauseTime === void 0 && (this.playState === "finished" || g >= this.totalDuration + s) ? (this.playState = "finished", (x = this.resolve) === null || x === void 0 || x.call(this, j)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick))
        }, h && this.play()
    }
    play() {
        let e = performance.now();
        this.playState = "running", this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
    }
    pause() {
        this.playState = "paused", this.pauseTime = this.t
    }
    finish() {
        this.playState = "finished", this.tick(0)
    }
    stop() {
        var e;
        this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (e = this.reject) === null || e === void 0 || e.call(this, !1)
    }
    cancel() {
        this.stop(), this.tick(this.cancelTimestamp)
    }
    reverse() {
        this.rate *= -1
    }
    commitStyles() {}
    updateDuration(e) {
        this.duration = e, this.totalDuration = e * (this.repeat + 1)
    }
    get currentTime() {
        return this.t
    }
    set currentTime(e) {
        this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
    }
    get playbackRate() {
        return this.rate
    }
    set playbackRate(e) {
        this.rate = e
    }
};
var Pr = function() {};
var ut = class {
    setAnimation(e) {
        this.animation = e, e ? .finished.then(() => this.clearAnimation()).catch(() => {})
    }
    clearAnimation() {
        this.animation = this.generator = void 0
    }
};
var Mr = new WeakMap;

function jt(t) {
    return Mr.has(t) || Mr.set(t, {
        transforms: [],
        values: new Map
    }), Mr.get(t)
}

function on(t, e) {
    return t.has(e) || t.set(e, new ut), t.get(e)
}
var Vi = ["", "X", "Y", "Z"],
    Zi = ["translate", "scale", "rotate", "skew"],
    mt = {
        x: "translateX",
        y: "translateY",
        z: "translateZ"
    },
    nn = {
        syntax: "<angle>",
        initialValue: "0deg",
        toDefaultUnit: t => t + "deg"
    },
    Ki = {
        translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: t => t + "px"
        },
        rotate: nn,
        scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: V
        },
        skew: nn
    },
    he = new Map,
    Ht = t => `--motion-${t}`,
    Wt = ["x", "y", "z"];
Zi.forEach(t => {
    Vi.forEach(e => {
        Wt.push(t + e), he.set(Ht(t + e), Ki[t])
    })
});
var Yi = (t, e) => Wt.indexOf(t) - Wt.indexOf(e),
    Gi = new Set(Wt),
    Ft = t => Gi.has(t),
    sn = (t, e) => {
        mt[e] && (e = mt[e]);
        let {
            transforms: r
        } = jt(t);
        _r(r, e), t.style.transform = Ji(r)
    },
    Ji = t => t.sort(Yi).reduce(Qi, "").trim(),
    Qi = (t, e) => `${t} ${e}(var(${Ht(e)}))`;
var pt = t => t.startsWith("--"),
    an = new Set;

function ln(t) {
    if (!an.has(t)) {
        an.add(t);
        try {
            let {
                syntax: e,
                initialValue: r
            } = he.has(t) ? he.get(t) : {};
            CSS.registerProperty({
                name: t,
                inherits: !1,
                syntax: e,
                initialValue: r
            })
        } catch {}
    }
}
var Rr = (t, e) => document.createElement("div").animate(t, e),
    cn = {
        cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        partialKeyframes: () => {
            try {
                Rr({
                    opacity: [1]
                })
            } catch {
                return !1
            }
            return !0
        },
        finished: () => !!Rr({
            opacity: [0, 1]
        }, {
            duration: .001
        }).finished,
        linearEasing: () => {
            try {
                Rr({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch {
                return !1
            }
            return !0
        }
    },
    Nr = {},
    ue = {};
for (let t in cn) ue[t] = () => (Nr[t] === void 0 && (Nr[t] = cn[t]()), Nr[t]);
var Xi = .015,
    es = (t, e) => {
        let r = "",
            o = Math.round(e / Xi);
        for (let n = 0; n < o; n++) r += t(Oe(0, o - 1, n)) + ", ";
        return r.substring(0, r.length - 2)
    },
    Lr = (t, e) => K(t) ? ue.linearEasing() ? `linear(${es(t,e)})` : U.easing : ht(t) ? ts(t) : t,
    ts = ([t, e, r, o]) => `cubic-bezier(${t}, ${e}, ${r}, ${o})`;

function dn(t, e) {
    for (let r = 0; r < t.length; r++) t[r] === null && (t[r] = r ? t[r - 1] : e());
    return t
}
var hn = t => Array.isArray(t) ? t : [t];

function ft(t) {
    return mt[t] && (t = mt[t]), Ft(t) ? Ht(t) : t
}
var gt = {
    get: (t, e) => {
        e = ft(e);
        let r = pt(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
        if (!r && r !== 0) {
            let o = he.get(e);
            o && (r = o.initialValue)
        }
        return r
    },
    set: (t, e, r) => {
        e = ft(e), pt(e) ? t.style.setProperty(e, r) : t.style[e] = r
    }
};

function zt(t, e = !0) {
    if (!(!t || t.playState === "finished")) try {
        t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
    } catch {}
}

function un(t, e) {
    var r;
    let o = e ? .toDefaultUnit || V,
        n = t[t.length - 1];
    if (Sr(n)) {
        let i = ((r = n.match(/(-?[\d.]+)([a-z%]*)/)) === null || r === void 0 ? void 0 : r[2]) || "";
        i && (o = s => s + i)
    }
    return o
}

function rs() {
    return window.__MOTION_DEV_TOOLS_RECORD
}

function mn(t, e, r, o = {}, n) {
    let i = rs(),
        s = o.record !== !1 && i,
        a, {
            duration: l = U.duration,
            delay: c = U.delay,
            endDelay: h = U.endDelay,
            repeat: m = U.repeat,
            easing: u = U.easing,
            persist: x = !1,
            direction: g,
            offset: p,
            allowWebkitAcceleration: k = !1,
            autoplay: y = !0
        } = o,
        M = jt(t),
        R = Ft(e),
        j = ue.waapi();
    R && sn(t, e);
    let P = ft(e),
        Z = on(M.values, P),
        F = he.get(P);
    return zt(Z.animation, !(je(u) && Z.generator) && o.record !== !1), () => {
        let ae = () => {
                var N, Qe;
                return (Qe = (N = gt.get(t, P)) !== null && N !== void 0 ? N : F ? .initialValue) !== null && Qe !== void 0 ? Qe : 0
            },
            D = dn(hn(r), ae),
            ko = un(D, F);
        if (je(u)) {
            let N = u.createAnimation(D, e !== "opacity", ae, P, Z);
            u = N.easing, D = N.keyframes || D, l = N.duration || l
        }
        if (pt(P) && (ue.cssRegisterProperty() ? ln(P) : j = !1), R && !ue.linearEasing() && (K(u) || Q(u) && u.some(K)) && (j = !1), j) {
            F && (D = D.map(Ce => oe(Ce) ? F.toDefaultUnit(Ce) : Ce)), D.length === 1 && (!ue.partialKeyframes() || s) && D.unshift(ae());
            let N = {
                delay: de.ms(c),
                duration: de.ms(l),
                endDelay: de.ms(h),
                easing: Q(u) ? void 0 : Lr(u, l),
                direction: g,
                iterations: m + 1,
                fill: "both"
            };
            a = t.animate({
                [P]: D,
                offset: p,
                easing: Q(u) ? u.map(Ce => Lr(Ce, l)) : void 0
            }, N), a.finished || (a.finished = new Promise((Ce, Pi) => {
                a.onfinish = Ce, a.oncancel = Pi
            }));
            let Qe = D[D.length - 1];
            a.finished.then(() => {
                x || (gt.set(t, P, Qe), a.cancel())
            }).catch(dt), k || (a.playbackRate = 1.000001)
        } else if (n && R) D = D.map(N => typeof N == "string" ? parseFloat(N) : N), D.length === 1 && D.unshift(parseFloat(ae())), a = new n(N => {
            gt.set(t, P, ko ? ko(N) : N)
        }, D, Object.assign(Object.assign({}, o), {
            duration: l,
            easing: u
        }));
        else {
            let N = D[D.length - 1];
            gt.set(t, P, F && oe(N) ? F.toDefaultUnit(N) : N)
        }
        return s && i(t, e, D, {
            duration: l,
            delay: c,
            easing: u,
            repeat: m,
            offset: p
        }, "motion-one"), Z.setAnimation(a), a && !y && a.pause(), a
    }
}
var pn = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);

function fn(t, e) {
    var r;
    return typeof t == "string" ? e ? ((r = e[t]) !== null && r !== void 0 || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
}
var os = t => t(),
    wt = (t, e, r = U.duration) => new Proxy({
        animations: t.map(os).filter(Boolean),
        duration: r,
        options: e
    }, is),
    ns = t => t.animations[0],
    is = {
        get: (t, e) => {
            let r = ns(t);
            switch (e) {
                case "duration":
                    return t.duration;
                case "currentTime":
                    return de.s(r ? .[e] || 0);
                case "playbackRate":
                case "playState":
                    return r ? .[e];
                case "finished":
                    return t.finished || (t.finished = Promise.all(t.animations.map(ss)).catch(dt)), t.finished;
                case "stop":
                    return () => {
                        t.animations.forEach(o => zt(o))
                    };
                case "forEachNative":
                    return o => {
                        t.animations.forEach(n => o(n, t))
                    };
                default:
                    return typeof r ? .[e] > "u" ? void 0 : () => t.animations.forEach(o => o[e]())
            }
        },
        set: (t, e, r) => {
            switch (e) {
                case "currentTime":
                    r = de.ms(r);
                case "playbackRate":
                    for (let o = 0; o < t.animations.length; o++) t.animations[o][e] = r;
                    return !0
            }
            return !1
        }
    },
    ss = t => t.finished;

function gn(t, e, r) {
    return K(t) ? t(e, r) : t
}

function wn(t) {
    return function(r, o, n = {}) {
        r = fn(r);
        let i = r.length;
        Pr(!!i, "No valid element provided."), Pr(!!o, "No keyframes defined.");
        let s = [];
        for (let a = 0; a < i; a++) {
            let l = r[a];
            for (let c in o) {
                let h = pn(n, c);
                h.delay = gn(h.delay, a, i);
                let m = mn(l, c, o[c], h, t);
                s.push(m)
            }
        }
        return wt(s, n, n.duration)
    }
}
var Br = wn(Se);

function as(t, e = {}) {
    return wt([() => {
        let r = new Se(t, [0, 1], e);
        return r.finished.catch(() => {}), r
    }], e, e.duration)
}

function ne(t, e, r) {
    return (K(t) ? as : Br)(t, e, r)
}
var H = t => t ? ? L;
var Ti = Mi(bi(), 1);
var ra = Object.defineProperty,
    yi = Object.getOwnPropertySymbols,
    oa = Object.prototype.hasOwnProperty,
    na = Object.prototype.propertyIsEnumerable,
    xi = (t, e, r) => e in t ? ra(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    ao = (t, e) => {
        for (var r in e || (e = {})) oa.call(e, r) && xi(t, r, e[r]);
        if (yi)
            for (var r of yi(e)) na.call(e, r) && xi(t, r, e[r]);
        return t
    };

function ia() {
    var t;
    let e = (t = Ee.state.themeMode) != null ? t : "dark",
        r = {
            light: {
                foreground: {
                    1: "rgb(20,20,20)",
                    2: "rgb(121,134,134)",
                    3: "rgb(158,169,169)"
                },
                background: {
                    1: "rgb(255,255,255)",
                    2: "rgb(241,243,243)",
                    3: "rgb(228,231,231)"
                },
                overlay: "rgba(0,0,0,0.1)"
            },
            dark: {
                foreground: {
                    1: "rgb(228,231,231)",
                    2: "rgb(148,158,158)",
                    3: "rgb(110,119,119)"
                },
                background: {
                    1: "rgb(20,20,20)",
                    2: "rgb(39,42,42)",
                    3: "rgb(59,64,64)"
                },
                overlay: "rgba(255,255,255,0.1)"
            }
        }[e];
    return {
        "--wcm-color-fg-1": r.foreground[1],
        "--wcm-color-fg-2": r.foreground[2],
        "--wcm-color-fg-3": r.foreground[3],
        "--wcm-color-bg-1": r.background[1],
        "--wcm-color-bg-2": r.background[2],
        "--wcm-color-bg-3": r.background[3],
        "--wcm-color-overlay": r.overlay
    }
}

function Ci() {
    return {
        "--wcm-accent-color": "#3396FF",
        "--wcm-accent-fill-color": "#FFFFFF",
        "--wcm-z-index": "89",
        "--wcm-background-color": "#3396FF",
        "--wcm-background-border-radius": "8px",
        "--wcm-container-border-radius": "30px",
        "--wcm-wallet-icon-border-radius": "15px",
        "--wcm-wallet-icon-large-border-radius": "30px",
        "--wcm-wallet-icon-small-border-radius": "7px",
        "--wcm-input-border-radius": "28px",
        "--wcm-button-border-radius": "10px",
        "--wcm-notification-border-radius": "36px",
        "--wcm-secondary-button-border-radius": "28px",
        "--wcm-icon-button-border-radius": "50%",
        "--wcm-button-hover-highlight-border-radius": "10px",
        "--wcm-text-big-bold-size": "20px",
        "--wcm-text-big-bold-weight": "600",
        "--wcm-text-big-bold-line-height": "24px",
        "--wcm-text-big-bold-letter-spacing": "-0.03em",
        "--wcm-text-big-bold-text-transform": "none",
        "--wcm-text-xsmall-bold-size": "10px",
        "--wcm-text-xsmall-bold-weight": "700",
        "--wcm-text-xsmall-bold-line-height": "12px",
        "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
        "--wcm-text-xsmall-bold-text-transform": "uppercase",
        "--wcm-text-xsmall-regular-size": "12px",
        "--wcm-text-xsmall-regular-weight": "600",
        "--wcm-text-xsmall-regular-line-height": "14px",
        "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
        "--wcm-text-xsmall-regular-text-transform": "none",
        "--wcm-text-small-thin-size": "14px",
        "--wcm-text-small-thin-weight": "500",
        "--wcm-text-small-thin-line-height": "16px",
        "--wcm-text-small-thin-letter-spacing": "-0.03em",
        "--wcm-text-small-thin-text-transform": "none",
        "--wcm-text-small-regular-size": "14px",
        "--wcm-text-small-regular-weight": "600",
        "--wcm-text-small-regular-line-height": "16px",
        "--wcm-text-small-regular-letter-spacing": "-0.03em",
        "--wcm-text-small-regular-text-transform": "none",
        "--wcm-text-medium-regular-size": "16px",
        "--wcm-text-medium-regular-weight": "600",
        "--wcm-text-medium-regular-line-height": "20px",
        "--wcm-text-medium-regular-letter-spacing": "-0.03em",
        "--wcm-text-medium-regular-text-transform": "none",
        "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
        "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
        "--wcm-success-color": "rgb(38,181,98)",
        "--wcm-error-color": "rgb(242, 90, 103)",
        "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
        "--wcm-overlay-backdrop-filter": "none"
    }
}
var E = {
        getPreset(t) {
            return Ci()[t]
        },
        setTheme() {
            let t = document.querySelector(":root"),
                {
                    themeVariables: e
                } = Ee.state;
            if (t) {
                let r = ao(ao(ao({}, ia()), Ci()), e);
                Object.entries(r).forEach(([o, n]) => t.style.setProperty(o, n))
            }
        },
        globalCss: $ `*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
    },
    sa = $ `button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`,
    aa = Object.defineProperty,
    la = Object.getOwnPropertyDescriptor,
    Ve = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? la(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && aa(e, r, n), n
    },
    we = class extends v {
        constructor() {
            super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
        }
        render() {
            let t = {
                    "wcm-icon-left": this.iconLeft !== void 0,
                    "wcm-icon-right": this.iconRight !== void 0,
                    "wcm-ghost": this.variant === "ghost",
                    "wcm-outline": this.variant === "outline"
                },
                e = "inverse";
            return this.variant === "ghost" && (e = "secondary"), this.variant === "outline" && (e = "accent"), d `<button class="${J(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${this.iconRight}</button>`
        }
    };
we.styles = [E.globalCss, sa], Ve([w({
    type: Boolean
})], we.prototype, "disabled", 2), Ve([w()], we.prototype, "iconLeft", 2), Ve([w()], we.prototype, "iconRight", 2), Ve([w()], we.prototype, "onClick", 2), Ve([w()], we.prototype, "variant", 2), we = Ve([C("wcm-button")], we);
var ca = $ `:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`,
    da = Object.defineProperty,
    ha = Object.getOwnPropertyDescriptor,
    lo = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? ha(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && da(e, r, n), n
    },
    _t = class extends v {
        constructor() {
            super(...arguments), this.disabled = !1, this.variant = "primary"
        }
        render() {
            let t = {
                "wcm-secondary": this.variant === "secondary"
            };
            return d `<button ?disabled="${this.disabled}" class="${J(t)}"><slot></slot></button>`
        }
    };
_t.styles = [E.globalCss, ca], lo([w({
    type: Boolean
})], _t.prototype, "disabled", 2), lo([w()], _t.prototype, "variant", 2), _t = lo([C("wcm-button-big")], _t);
var ua = $ `:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`,
    ma = Object.defineProperty,
    pa = Object.getOwnPropertyDescriptor,
    fa = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? pa(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && ma(e, r, n), n
    },
    co = class extends v {
        render() {
            return d `<div><slot></slot></div>`
        }
    };
co.styles = [E.globalCss, ua], co = fa([C("wcm-info-footer")], co);
var _ = {
        CROSS_ICON: S `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
        WALLET_CONNECT_LOGO: S `<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
        WALLET_CONNECT_ICON: S `<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
        WALLET_CONNECT_ICON_COLORED: S `<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
        BACK_ICON: S `<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
        COPY_ICON: S `<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
        RETRY_ICON: S `<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
        DESKTOP_ICON: S `<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
        MOBILE_ICON: S `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
        ARROW_DOWN_ICON: S `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
        ARROW_UP_RIGHT_ICON: S `<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
        ARROW_RIGHT_ICON: S `<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
        QRCODE_ICON: S `<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
        SCAN_ICON: S `<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
        CHECKMARK_ICON: S `<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
        SEARCH_ICON: S `<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
        WALLET_PLACEHOLDER: S `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
        GLOBE_ICON: S `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
    },
    ga = $ `.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`,
    wa = Object.defineProperty,
    va = Object.getOwnPropertyDescriptor,
    ba = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? va(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && wa(e, r, n), n
    },
    ho = class extends v {
        render() {
            return d `<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${_.WALLET_CONNECT_LOGO} <button @click="${tt.close}">${_.CROSS_ICON}</button></div>`
        }
    };
ho.styles = [E.globalCss, ga], ho = ba([C("wcm-modal-backcard")], ho);
var ya = $ `main{padding:20px;padding-top:0;width:100%}`,
    xa = Object.defineProperty,
    Ca = Object.getOwnPropertyDescriptor,
    Ea = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Ca(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && xa(e, r, n), n
    },
    uo = class extends v {
        render() {
            return d `<main><slot></slot></main>`
        }
    };
uo.styles = [E.globalCss, ya], uo = Ea([C("wcm-modal-content")], uo);
var $a = $ `footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`,
    Aa = Object.defineProperty,
    _a = Object.getOwnPropertyDescriptor,
    Oa = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? _a(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Aa(e, r, n), n
    },
    mo = class extends v {
        render() {
            return d `<footer><slot></slot></footer>`
        }
    };
mo.styles = [E.globalCss, $a], mo = Oa([C("wcm-modal-footer")], mo);
var Ia = $ `header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`,
    Sa = Object.defineProperty,
    ka = Object.getOwnPropertyDescriptor,
    Ot = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? ka(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Sa(e, r, n), n
    },
    Re = class extends v {
        constructor() {
            super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
        }
        backBtnTemplate() {
            return d `<button class="wcm-back-btn" @click="${T.goBack}">${_.BACK_ICON}</button>`
        }
        actionBtnTemplate() {
            return d `<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
        }
        render() {
            let t = {
                    "wcm-border": this.border
                },
                e = T.state.history.length > 1,
                r = this.title ? d `<wcm-text variant="big-bold">${this.title}</wcm-text>` : d `<slot></slot>`;
            return d `<header class="${J(t)}">${e?this.backBtnTemplate():null} ${r} ${this.onAction?this.actionBtnTemplate():null}</header>`
        }
    };
Re.styles = [E.globalCss, Ia], Ot([w()], Re.prototype, "title", 2), Ot([w()], Re.prototype, "onAction", 2), Ot([w()], Re.prototype, "actionIcon", 2), Ot([w({
    type: Boolean
})], Re.prototype, "border", 2), Re = Ot([C("wcm-modal-header")], Re);
var f = {
        MOBILE_BREAKPOINT: 600,
        WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
        EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
        getShadowRootElement(t, e) {
            let r = t.renderRoot.querySelector(e);
            if (!r) throw new Error(`${e} not found`);
            return r
        },
        getWalletIcon({
            id: t,
            image_id: e
        }) {
            let {
                walletImages: r
            } = le.state;
            return r != null && r[t] ? r[t] : e ? z.getWalletImageUrl(e) : ""
        },
        getWalletName(t, e = !1) {
            return e && t.length > 8 ? `${t.substring(0,8)}..` : t
        },
        isMobileAnimation() {
            return window.innerWidth <= f.MOBILE_BREAKPOINT
        },
        preloadImage(t) {
            return W(this, null, function*() {
                let e = new Promise((r, o) => {
                    let n = new Image;
                    n.onload = r, n.onerror = o, n.crossOrigin = "anonymous", n.src = t
                });
                return Promise.race([e, b.wait(3e3)])
            })
        },
        getErrorMessage(t) {
            return t instanceof Error ? t.message : "Unknown Error"
        },
        debounce(t, e = 500) {
            let r;
            return (...o) => {
                function n() {
                    t(...o)
                }
                r && clearTimeout(r), r = setTimeout(n, e)
            }
        },
        handleMobileLinking(t) {
            let {
                walletConnectUri: e
            } = G.state, {
                mobile: r,
                name: o
            } = t, n = r ? .native, i = r ? .universal;
            f.setRecentWallet(t);

            function s(a) {
                let l = "";
                n ? l = b.formatUniversalUrl(n, a, o) : i && (l = b.formatNativeUrl(i, a, o)), b.openHref(l, "_self")
            }
            e && s(e)
        },
        handleAndroidLinking() {
            let {
                walletConnectUri: t
            } = G.state;
            t && (b.setWalletConnectAndroidDeepLink(t), b.openHref(t, "_self"))
        },
        handleUriCopy() {
            return W(this, null, function*() {
                let {
                    walletConnectUri: t
                } = G.state;
                if (t) try {
                    yield navigator.clipboard.writeText(t), ee.openToast("Link copied", "success")
                } catch {
                    ee.openToast("Failed to copy", "error")
                }
            })
        },
        getCustomImageUrls() {
            let {
                walletImages: t
            } = le.state, e = Object.values(t ? ? {});
            return Object.values(e)
        },
        truncate(t, e = 8) {
            return t.length <= e ? t : `${t.substring(0,4)}...${t.substring(t.length-4)}`
        },
        setRecentWallet(t) {
            try {
                localStorage.setItem(f.WCM_RECENT_WALLET_DATA, JSON.stringify(t))
            } catch {
                console.info("Unable to set recent wallet")
            }
        },
        getRecentWallet() {
            try {
                let t = localStorage.getItem(f.WCM_RECENT_WALLET_DATA);
                return t ? JSON.parse(t) : void 0
            } catch {
                console.info("Unable to get recent wallet")
            }
        },
        caseSafeIncludes(t, e) {
            return t.toUpperCase().includes(e.toUpperCase())
        },
        openWalletExplorerUrl() {
            b.openHref(f.EXPLORER_WALLET_URL, "_blank")
        },
        getCachedRouterWalletPlatforms() {
            let {
                desktop: t,
                mobile: e
            } = b.getWalletRouterData(), r = !!t ? .native, o = !!t ? .universal, n = !!e ? .native || !!e ? .universal;
            return {
                isDesktop: r,
                isMobile: n,
                isWeb: o
            }
        },
        goToConnectingView(t) {
            T.setData({
                Wallet: t
            });
            let e = b.isMobile(),
                {
                    isDesktop: r,
                    isWeb: o,
                    isMobile: n
                } = f.getCachedRouterWalletPlatforms();
            e ? n ? T.push("MobileConnecting") : o ? T.push("WebConnecting") : T.push("InstallWallet") : r ? T.push("DesktopConnecting") : o ? T.push("WebConnecting") : n ? T.push("MobileQrcodeConnecting") : T.push("InstallWallet")
        }
    },
    Ta = $ `.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`,
    Pa = Object.defineProperty,
    Ma = Object.getOwnPropertyDescriptor,
    po = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Ma(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Pa(e, r, n), n
    },
    It = class extends v {
        constructor() {
            super(), this.view = T.state.view, this.prevView = T.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = T.subscribe(t => {
                this.view !== t.view && this.onChangeRoute()
            })
        }
        firstUpdated() {
            this.resizeObserver = new ResizeObserver(([t]) => {
                let e = `${t.contentRect.height}px`;
                this.oldHeight !== "0px" && ne(this.routerEl, {
                    height: [this.oldHeight, e]
                }, {
                    duration: .2
                }), this.oldHeight = e
            }), this.resizeObserver.observe(this.contentEl)
        }
        disconnectedCallback() {
            var t, e;
            (t = this.unsubscribe) == null || t.call(this), (e = this.resizeObserver) == null || e.disconnect()
        }
        get routerEl() {
            return f.getShadowRootElement(this, ".wcm-router")
        }
        get contentEl() {
            return f.getShadowRootElement(this, ".wcm-content")
        }
        viewTemplate() {
            switch (this.view) {
                case "ConnectWallet":
                    return d `<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
                case "DesktopConnecting":
                    return d `<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
                case "MobileConnecting":
                    return d `<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
                case "WebConnecting":
                    return d `<wcm-web-connecting-view></wcm-web-connecting-view>`;
                case "MobileQrcodeConnecting":
                    return d `<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
                case "WalletExplorer":
                    return d `<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
                case "Qrcode":
                    return d `<wcm-qrcode-view></wcm-qrcode-view>`;
                case "InstallWallet":
                    return d `<wcm-install-wallet-view></wcm-install-wallet-view>`;
                default:
                    return d `<div>Not Found</div>`
            }
        }
        onChangeRoute() {
            return W(this, null, function*() {
                yield ne(this.routerEl, {
                    opacity: [1, 0],
                    scale: [1, 1.02]
                }, {
                    duration: .15,
                    delay: .1
                }).finished, this.view = T.state.view, ne(this.routerEl, {
                    opacity: [0, 1],
                    scale: [.99, 1]
                }, {
                    duration: .37,
                    delay: .05
                })
            })
        }
        render() {
            return d `<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`
        }
    };
It.styles = [E.globalCss, Ta], po([q()], It.prototype, "view", 2), po([q()], It.prototype, "prevView", 2), It = po([C("wcm-modal-router")], It);
var Ra = $ `div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`,
    Na = Object.defineProperty,
    La = Object.getOwnPropertyDescriptor,
    Ei = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? La(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Na(e, r, n), n
    },
    rr = class extends v {
        constructor() {
            super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = ee.subscribe(t => {
                t.open ? (this.open = !0, this.timeout = setTimeout(() => ee.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout))
            })
        }
        disconnectedCallback() {
            var t;
            (t = this.unsubscribe) == null || t.call(this), clearTimeout(this.timeout), ee.closeToast()
        }
        render() {
            let {
                message: t,
                variant: e
            } = ee.state, r = {
                "wcm-success": e === "success",
                "wcm-error": e === "error"
            };
            return this.open ? d `<div class="${J(r)}">${e==="success"?_.CHECKMARK_ICON:null} ${e==="error"?_.CROSS_ICON:null}<wcm-text variant="small-regular">${t}</wcm-text></div>` : null
        }
    };
rr.styles = [E.globalCss, Ra], Ei([q()], rr.prototype, "open", 2), rr = Ei([C("wcm-modal-toast")], rr);
var Ba = .1,
    $i = 2.5,
    se = 7;

function fo(t, e, r) {
    return t === e ? !1 : (t - e < 0 ? e - t : t - e) <= r + Ba
}

function Da(t, e) {
    let r = Array.prototype.slice.call(Ti.default.create(t, {
            errorCorrectionLevel: e
        }).modules.data, 0),
        o = Math.sqrt(r.length);
    return r.reduce((n, i, s) => (s % o === 0 ? n.push([i]) : n[n.length - 1].push(i)) && n, [])
}
var Ua = {
        generate(t, e, r) {
            let o = "#141414",
                n = "#ffffff",
                i = [],
                s = Da(t, "Q"),
                a = e / s.length,
                l = [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 0,
                    y: 1
                }];
            l.forEach(({
                x: g,
                y: p
            }) => {
                let k = (s.length - se) * a * g,
                    y = (s.length - se) * a * p,
                    M = .45;
                for (let R = 0; R < l.length; R += 1) {
                    let j = a * (se - R * 2);
                    i.push(S `<rect fill="${R%2===0?o:n}" height="${j}" rx="${j*M}" ry="${j*M}" width="${j}" x="${k+a*R}" y="${y+a*R}">`)
                }
            });
            let c = Math.floor((r + 25) / a),
                h = s.length / 2 - c / 2,
                m = s.length / 2 + c / 2 - 1,
                u = [];
            s.forEach((g, p) => {
                g.forEach((k, y) => {
                    if (s[p][y] && !(p < se && y < se || p > s.length - (se + 1) && y < se || p < se && y > s.length - (se + 1)) && !(p > h && p < m && y > h && y < m)) {
                        let M = p * a + a / 2,
                            R = y * a + a / 2;
                        u.push([M, R])
                    }
                })
            });
            let x = {};
            return u.forEach(([g, p]) => {
                x[g] ? x[g].push(p) : x[g] = [p]
            }), Object.entries(x).map(([g, p]) => {
                let k = p.filter(y => p.every(M => !fo(y, M, a)));
                return [Number(g), k]
            }).forEach(([g, p]) => {
                p.forEach(k => {
                    i.push(S `<circle cx="${g}" cy="${k}" fill="${o}" r="${a/$i}">`)
                })
            }), Object.entries(x).filter(([g, p]) => p.length > 1).map(([g, p]) => {
                let k = p.filter(y => p.some(M => fo(y, M, a)));
                return [Number(g), k]
            }).map(([g, p]) => {
                p.sort((y, M) => y < M ? -1 : 1);
                let k = [];
                for (let y of p) {
                    let M = k.find(R => R.some(j => fo(y, j, a)));
                    M ? M.push(y) : k.push([y])
                }
                return [g, k.map(y => [y[0], y[y.length - 1]])]
            }).forEach(([g, p]) => {
                p.forEach(([k, y]) => {
                    i.push(S `<line x1="${g}" x2="${g}" y1="${k}" y2="${y}" stroke="${o}" stroke-width="${a/($i/2)}" stroke-linecap="round">`)
                })
            }), i
        }
    },
    ja = $ `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`,
    Wa = Object.defineProperty,
    Ha = Object.getOwnPropertyDescriptor,
    Ze = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Ha(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Wa(e, r, n), n
    },
    ve = class extends v {
        constructor() {
            super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
        }
        svgTemplate() {
            let t = Ee.state.themeMode === "light" ? this.size : this.size - 36;
            return S `<svg height="${t}" width="${t}">${Ua.generate(this.uri,t,t/4)}</svg>`
        }
        render() {
            let t = {
                "wcm-dark": Ee.state.themeMode === "dark"
            };
            return d `<div style="${`width: ${this.size}px`}" class="${J(t)}">${this.walletId||this.imageUrl?d`<wcm-wallet-image walletId="${H(this.walletId)}" imageId="${H(this.imageId)}" imageUrl="${H(this.imageUrl)}"></wcm-wallet-image>`:_.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
        }
    };
ve.styles = [E.globalCss, ja], Ze([w()], ve.prototype, "uri", 2), Ze([w({
    type: Number
})], ve.prototype, "size", 2), Ze([w()], ve.prototype, "imageId", 2), Ze([w()], ve.prototype, "walletId", 2), Ze([w()], ve.prototype, "imageUrl", 2), ve = Ze([C("wcm-qrcode")], ve);
var Fa = $ `:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`,
    za = Object.defineProperty,
    qa = Object.getOwnPropertyDescriptor,
    Ai = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? qa(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && za(e, r, n), n
    },
    or = class extends v {
        constructor() {
            super(...arguments), this.onChange = () => null
        }
        render() {
            return d `<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${_.SEARCH_ICON}`
        }
    };
or.styles = [E.globalCss, Fa], Ai([w()], or.prototype, "onChange", 2), or = Ai([C("wcm-search-input")], or);
var Va = $ `@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`,
    Za = Object.defineProperty,
    Ka = Object.getOwnPropertyDescriptor,
    Ya = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Ka(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Za(e, r, n), n
    },
    go = class extends v {
        render() {
            return d `<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
        }
    };
go.styles = [E.globalCss, Va], go = Ya([C("wcm-spinner")], go);
var Ga = $ `span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`,
    Ja = Object.defineProperty,
    Qa = Object.getOwnPropertyDescriptor,
    wo = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Qa(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Ja(e, r, n), n
    },
    St = class extends v {
        constructor() {
            super(...arguments), this.variant = "medium-regular", this.color = "primary"
        }
        render() {
            let t = {
                "wcm-big-bold": this.variant === "big-bold",
                "wcm-medium-regular": this.variant === "medium-regular",
                "wcm-small-regular": this.variant === "small-regular",
                "wcm-small-thin": this.variant === "small-thin",
                "wcm-xsmall-regular": this.variant === "xsmall-regular",
                "wcm-xsmall-bold": this.variant === "xsmall-bold",
                "wcm-color-primary": this.color === "primary",
                "wcm-color-secondary": this.color === "secondary",
                "wcm-color-tertiary": this.color === "tertiary",
                "wcm-color-inverse": this.color === "inverse",
                "wcm-color-accnt": this.color === "accent",
                "wcm-color-error": this.color === "error"
            };
            return d `<span><slot class="${J(t)}"></slot></span>`
        }
    };
St.styles = [E.globalCss, Ga], wo([w()], St.prototype, "variant", 2), wo([w()], St.prototype, "color", 2), St = wo([C("wcm-text")], St);
var Xa = $ `button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`,
    el = Object.defineProperty,
    tl = Object.getOwnPropertyDescriptor,
    be = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? tl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && el(e, r, n), n
    },
    X = class extends v {
        constructor() {
            super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
        }
        sublabelTemplate() {
            return this.recent ? d `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? d `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null
        }
        handleClick() {
            To.click({
                name: "WALLET_BUTTON",
                walletId: this.walletId
            }), this.onClick()
        }
        render() {
            var t;
            return d `<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${H(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(t=this.label)!=null?t:f.getWalletName(this.name,!0)}</wcm-text>${this.sublabelTemplate()}</div></button>`
        }
    };
X.styles = [E.globalCss, Xa], be([w()], X.prototype, "onClick", 2), be([w()], X.prototype, "name", 2), be([w()], X.prototype, "walletId", 2), be([w()], X.prototype, "label", 2), be([w()], X.prototype, "imageId", 2), be([w({
    type: Boolean
})], X.prototype, "installed", 2), be([w({
    type: Boolean
})], X.prototype, "recent", 2), X = be([C("wcm-wallet-button")], X);
var rl = $ `:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`,
    ol = Object.defineProperty,
    nl = Object.getOwnPropertyDescriptor,
    nr = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? nl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && ol(e, r, n), n
    },
    Ke = class extends v {
        constructor() {
            super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
        }
        render() {
            var t;
            let e = (t = this.imageUrl) != null && t.length ? this.imageUrl : f.getWalletIcon({
                id: this.walletId,
                image_id: this.imageId
            });
            return d `${e.length?d`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>`:_.WALLET_PLACEHOLDER}`
        }
    };
Ke.styles = [E.globalCss, rl], nr([w()], Ke.prototype, "walletId", 2), nr([w()], Ke.prototype, "imageId", 2), nr([w()], Ke.prototype, "imageUrl", 2), Ke = nr([C("wcm-wallet-image")], Ke);
var il = Object.defineProperty,
    sl = Object.getOwnPropertyDescriptor,
    _i = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? sl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && il(e, r, n), n
    },
    vo = class extends v {
        constructor() {
            super(), this.preload = !0, this.preloadData()
        }
        loadImages(t) {
            return W(this, null, function*() {
                try {
                    t != null && t.length && (yield Promise.all(t.map(e => W(this, null, function*() {
                        return f.preloadImage(e)
                    }))))
                } catch {
                    console.info("Unsuccessful attempt at preloading some images", t)
                }
            })
        }
        preloadListings() {
            return W(this, null, function*() {
                if (le.state.enableExplorer) {
                    yield z.getRecomendedWallets(), G.setIsDataLoaded(!0);
                    let {
                        recomendedWallets: t
                    } = z.state, e = t.map(r => f.getWalletIcon(r));
                    yield this.loadImages(e)
                } else G.setIsDataLoaded(!0)
            })
        }
        preloadCustomImages() {
            return W(this, null, function*() {
                let t = f.getCustomImageUrls();
                yield this.loadImages(t)
            })
        }
        preloadData() {
            return W(this, null, function*() {
                try {
                    this.preload && (this.preload = !1, yield Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                } catch (t) {
                    console.error(t), ee.openToast("Failed preloading", "error")
                }
            })
        }
    };
_i([q()], vo.prototype, "preload", 2), vo = _i([C("wcm-explorer-context")], vo);
var al = Object.defineProperty,
    ll = Object.getOwnPropertyDescriptor,
    cl = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? ll(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && al(e, r, n), n
    },
    Oi = class extends v {
        constructor() {
            super(), this.unsubscribeTheme = void 0, E.setTheme(), this.unsubscribeTheme = Ee.subscribe(E.setTheme)
        }
        disconnectedCallback() {
            var t;
            (t = this.unsubscribeTheme) == null || t.call(this)
        }
    };
Oi = cl([C("wcm-theme-context")], Oi);
var dl = $ `@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`,
    hl = Object.defineProperty,
    ul = Object.getOwnPropertyDescriptor,
    ml = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? ul(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && hl(e, r, n), n
    },
    bo = class extends v {
        onGoToQrcode() {
            T.push("Qrcode")
        }
        render() {
            let {
                recomendedWallets: t
            } = z.state, e = [...t, ...t], r = b.RECOMMENDED_WALLET_AMOUNT * 2;
            return d `<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${_.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${_.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((o,n)=>{let i=e[n%e.length];return i?d`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>`:_.WALLET_PLACEHOLDER})}</div><wcm-button-big @click="${f.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`
        }
    };
bo.styles = [E.globalCss, dl], bo = ml([C("wcm-android-wallet-selection")], bo);
var pl = $ `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`,
    fl = Object.defineProperty,
    gl = Object.getOwnPropertyDescriptor,
    Ye = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? gl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && fl(e, r, n), n
    },
    ye = class extends v {
        constructor() {
            super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
        }
        svgLoaderTemplate() {
            var t, e;
            let r = (e = (t = Ee.state.themeVariables) == null ? void 0 : t["--wcm-wallet-icon-large-border-radius"]) != null ? e : E.getPreset("--wcm-wallet-icon-large-border-radius"),
                o = 0;
            r.includes("%") ? o = 88 / 100 * parseInt(r, 10) : o = parseInt(r, 10), o *= 1.17;
            let n = 317 - o * 1.57,
                i = 425 - o * 1.8;
            return d `<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${o}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${n}" stroke-dashoffset="${i}"></use></svg>`
        }
        render() {
            let t = {
                "wcm-error": this.isError,
                "wcm-stale": this.isStale
            };
            return d `<div class="${J(t)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${H(this.walletId)}" imageId="${H(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</wcm-text>`
        }
    };
ye.styles = [E.globalCss, pl], Ye([w()], ye.prototype, "walletId", 2), Ye([w()], ye.prototype, "imageId", 2), Ye([w({
    type: Boolean
})], ye.prototype, "isError", 2), Ye([w({
    type: Boolean
})], ye.prototype, "isStale", 2), Ye([w()], ye.prototype, "label", 2), ye = Ye([C("wcm-connector-waiting")], ye);
var Je = {
        manualWallets() {
            var t, e;
            let {
                mobileWallets: r,
                desktopWallets: o
            } = le.state, n = (t = Je.recentWallet()) == null ? void 0 : t.id, i = b.isMobile() ? r : o, s = i ? .filter(a => n !== a.id);
            return (e = b.isMobile() ? s ? .map(({
                id: a,
                name: l,
                links: c
            }) => ({
                id: a,
                name: l,
                mobile: c,
                links: c
            })) : s ? .map(({
                id: a,
                name: l,
                links: c
            }) => ({
                id: a,
                name: l,
                desktop: c,
                links: c
            }))) != null ? e : []
        },
        recentWallet() {
            return f.getRecentWallet()
        },
        recomendedWallets(t = !1) {
            var e;
            let r = t || (e = Je.recentWallet()) == null ? void 0 : e.id,
                {
                    recomendedWallets: o
                } = z.state;
            return o.filter(n => r !== n.id)
        }
    },
    xe = {
        onConnecting(t) {
            f.goToConnectingView(t)
        },
        manualWalletsTemplate() {
            return Je.manualWallets().map(t => d `<wcm-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`)
        },
        recomendedWalletsTemplate(t = !1) {
            return Je.recomendedWallets(t).map(e => d `<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`)
        },
        recentWalletTemplate() {
            let t = Je.recentWallet();
            if (t) return d `<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${H(t.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`
        }
    },
    wl = $ `.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`,
    vl = Object.defineProperty,
    bl = Object.getOwnPropertyDescriptor,
    yl = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? bl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && vl(e, r, n), n
    },
    yo = class extends v {
        render() {
            let {
                explorerExcludedWalletIds: t,
                enableExplorer: e
            } = le.state, r = t !== "ALL" && e, o = xe.manualWalletsTemplate(), n = xe.recomendedWalletsTemplate(), i = [xe.recentWalletTemplate(), ...o, ...n];
            i = i.filter(Boolean);
            let s = i.length > 4 || r,
                a = [];
            s ? a = i.slice(0, 3) : a = i;
            let l = !!a.length;
            return d `<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${f.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${_.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${_.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${l?d`<wcm-modal-footer><div class="wcm-desktop-title">${_.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${a} ${s?d`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-footer>`:null}`
        }
    };
yo.styles = [E.globalCss, wl], yo = yl([C("wcm-desktop-wallet-selection")], yo);
var xl = $ `div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`,
    Cl = Object.defineProperty,
    El = Object.getOwnPropertyDescriptor,
    $l = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? El(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Cl(e, r, n), n
    },
    xo = class extends v {
        render() {
            let {
                termsOfServiceUrl: t,
                privacyPolicyUrl: e
            } = le.state;
            return t ? ? e ? d `<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t?d`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${t&&e?"and":null} ${e?d`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</wcm-text></div>` : null
        }
    };
xo.styles = [E.globalCss, xl], xo = $l([C("wcm-legal-notice")], xo);
var Al = $ `div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`,
    _l = Object.defineProperty,
    Ol = Object.getOwnPropertyDescriptor,
    Il = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Ol(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && _l(e, r, n), n
    },
    Co = class extends v {
        onQrcode() {
            T.push("Qrcode")
        }
        render() {
            let {
                explorerExcludedWalletIds: t,
                enableExplorer: e
            } = le.state, r = t !== "ALL" && e, o = xe.manualWalletsTemplate(), n = xe.recomendedWalletsTemplate(), i = [xe.recentWalletTemplate(), ...o, ...n];
            i = i.filter(Boolean);
            let s = i.length > 8 || r,
                a = [];
            s ? a = i.slice(0, 7) : a = i;
            let l = !!a.length;
            return d `<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${_.QRCODE_ICON}"></wcm-modal-header>${l?d`<wcm-modal-content><div>${a} ${s?d`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-content>`:null}`
        }
    };
Co.styles = [E.globalCss, Al], Co = Il([C("wcm-mobile-wallet-selection")], Co);
var Sl = $ `:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`,
    kl = Object.defineProperty,
    Tl = Object.getOwnPropertyDescriptor,
    Eo = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Tl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && kl(e, r, n), n
    },
    kt = class extends v {
        constructor() {
            super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = tt.subscribe(t => {
                t.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
            })
        }
        disconnectedCallback() {
            var t;
            (t = this.unsubscribeModal) == null || t.call(this)
        }
        get overlayEl() {
            return f.getShadowRootElement(this, ".wcm-overlay")
        }
        get containerEl() {
            return f.getShadowRootElement(this, ".wcm-container")
        }
        toggleBodyScroll(t) {
            document.querySelector("body") && (t ? document.getElementById("wcm-styles") ? .remove() : document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'))
        }
        onCloseModal(t) {
            t.target === t.currentTarget && tt.close()
        }
        onOpenModalEvent() {
            this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(() => W(this, null, function*() {
                let t = f.isMobileAnimation() ? {
                        y: ["50vh", "0vh"]
                    } : {
                        scale: [.98, 1]
                    },
                    e = .1,
                    r = .2;
                yield Promise.all([ne(this.overlayEl, {
                    opacity: [0, 1]
                }, {
                    delay: e,
                    duration: r
                }).finished, ne(this.containerEl, t, {
                    delay: e,
                    duration: r
                }).finished]), this.active = !0
            }), 0)
        }
        onCloseModalEvent() {
            return W(this, null, function*() {
                this.toggleBodyScroll(!0), this.removeKeyboardEvents();
                let t = f.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    },
                    e = .2;
                yield Promise.all([ne(this.overlayEl, {
                    opacity: [1, 0]
                }, {
                    duration: e
                }).finished, ne(this.containerEl, t, {
                    duration: e
                }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
            })
        }
        addKeyboardEvents() {
            this.abortController = new AbortController, window.addEventListener("keydown", t => {
                var e;
                t.key === "Escape" ? tt.close() : t.key === "Tab" && ((e = t.target) != null && e.tagName.includes("wcm-") || this.containerEl.focus())
            }, this.abortController), this.containerEl.focus()
        }
        removeKeyboardEvents() {
            var t;
            (t = this.abortController) == null || t.abort(), this.abortController = void 0
        }
        render() {
            let t = {
                "wcm-overlay": !0,
                "wcm-active": this.active
            };
            return d `<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${J(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open?d`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`:null}</div></div>`
        }
    };
kt.styles = [E.globalCss, Sl], Eo([q()], kt.prototype, "open", 2), Eo([q()], kt.prototype, "active", 2), kt = Eo([C("wcm-modal")], kt);
var Pl = $ `div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`,
    Ml = Object.defineProperty,
    Rl = Object.getOwnPropertyDescriptor,
    Tt = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Rl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Ml(e, r, n), n
    },
    Ne = class extends v {
        constructor() {
            super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
        }
        onMobile() {
            b.isMobile() ? T.replace("MobileConnecting") : T.replace("MobileQrcodeConnecting")
        }
        onDesktop() {
            T.replace("DesktopConnecting")
        }
        onWeb() {
            T.replace("WebConnecting")
        }
        render() {
            return d `<div>${this.isRetry?d`<slot></slot>`:null} ${this.isMobile?d`<wcm-button .onClick="${this.onMobile}" .iconLeft="${_.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`:null} ${this.isDesktop?d`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${_.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`:null} ${this.isWeb?d`<wcm-button .onClick="${this.onWeb}" .iconLeft="${_.GLOBE_ICON}" variant="outline">Web</wcm-button>`:null}</div>`
        }
    };
Ne.styles = [E.globalCss, Pl], Tt([w({
    type: Boolean
})], Ne.prototype, "isMobile", 2), Tt([w({
    type: Boolean
})], Ne.prototype, "isDesktop", 2), Tt([w({
    type: Boolean
})], Ne.prototype, "isWeb", 2), Tt([w({
    type: Boolean
})], Ne.prototype, "isRetry", 2), Ne = Tt([C("wcm-platform-selection")], Ne);
var Nl = $ `button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`,
    Ll = Object.defineProperty,
    Bl = Object.getOwnPropertyDescriptor,
    Dl = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Bl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Ll(e, r, n), n
    },
    $o = class extends v {
        onClick() {
            T.push("WalletExplorer")
        }
        render() {
            let {
                recomendedWallets: t
            } = z.state, e = Je.manualWallets(), r = [...t, ...e].reverse().slice(0, 4);
            return d `<button @click="${this.onClick}"><div class="wcm-icons">${r.map(o=>{let n=f.getWalletIcon(o);if(n)return d`<img crossorigin="anonymous" src="${n}">`;let i=f.getWalletIcon({id:o.id});return i?d` < img crossorigin = "anonymous"
            src = "${i}" > `:_.WALLET_PLACEHOLDER})} ${[...Array(4-r.length)].map(()=>_.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`
        }
    };
$o.styles = [E.globalCss, Nl], $o = Dl([C("wcm-view-all-wallets-button")], $o);
var Ul = $ `.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`,
    jl = Object.defineProperty,
    Wl = Object.getOwnPropertyDescriptor,
    ir = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Wl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && jl(e, r, n), n
    },
    Ge = class extends v {
        constructor() {
            super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
                let {
                    walletConnectUri: t
                } = G.state;
                this.uri = t
            }, 0)
        }
        get overlayEl() {
            return f.getShadowRootElement(this, ".wcm-qr-container")
        }
        render() {
            return d `<div class="wcm-qr-container">${this.uri?d`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${H(this.walletId)}" imageId="${H(this.imageId)}"></wcm-qrcode>`:d`<wcm-spinner></wcm-spinner>`}</div>`
        }
    };
Ge.styles = [E.globalCss, Ul], ir([w()], Ge.prototype, "walletId", 2), ir([w()], Ge.prototype, "imageId", 2), ir([q()], Ge.prototype, "uri", 2), Ge = ir([C("wcm-walletconnect-qr")], Ge);
var Hl = Object.defineProperty,
    Fl = Object.getOwnPropertyDescriptor,
    zl = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Fl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Hl(e, r, n), n
    },
    Ao = class extends v {
        viewTemplate() {
            return b.isAndroid() ? d `<wcm-android-wallet-selection></wcm-android-wallet-selection>` : b.isMobile() ? d `<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : d `<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`
        }
        render() {
            return d `${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`
        }
    };
Ao.styles = [E.globalCss], Ao = zl([C("wcm-connect-wallet-view")], Ao);
var ql = $ `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`,
    Vl = Object.defineProperty,
    Zl = Object.getOwnPropertyDescriptor,
    Ii = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Zl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Vl(e, r, n), n
    },
    sr = class extends v {
        constructor() {
            super(), this.isError = !1, this.openDesktopApp()
        }
        onFormatAndRedirect(t) {
            let {
                desktop: e,
                name: r
            } = b.getWalletRouterData(), o = e ? .native;
            if (o) {
                let n = b.formatNativeUrl(o, t, r);
                b.openHref(n, "_self")
            }
        }
        openDesktopApp() {
            let {
                walletConnectUri: t
            } = G.state, e = b.getWalletRouterData();
            f.setRecentWallet(e), t && this.onFormatAndRedirect(t)
        }
        render() {
            let {
                name: t,
                id: e,
                image_id: r
            } = b.getWalletRouterData(), {
                isMobile: o,
                isWeb: n
            } = f.getCachedRouterWalletPlatforms();
            return d `<wcm-modal-header title="${t}" .onAction="${f.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${H(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isWeb="${n}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${_.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
        }
    };
sr.styles = [E.globalCss, ql], Ii([q()], sr.prototype, "isError", 2), sr = Ii([C("wcm-desktop-connecting-view")], sr);
var Kl = $ `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`,
    Yl = Object.defineProperty,
    Gl = Object.getOwnPropertyDescriptor,
    Jl = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? Gl(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Yl(e, r, n), n
    },
    _o = class extends v {
        onInstall(t) {
            t && b.openHref(t, "_blank")
        }
        render() {
            let {
                name: t,
                id: e,
                image_id: r,
                homepage: o
            } = b.getWalletRouterData();
            return d `<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${H(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(o)}" .iconLeft="${_.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`
        }
    };
_o.styles = [E.globalCss, Kl], _o = Jl([C("wcm-install-wallet-view")], _o);
var Ql = $ `wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`,
    Xl = Object.defineProperty,
    ec = Object.getOwnPropertyDescriptor,
    Si = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? ec(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && Xl(e, r, n), n
    },
    ar = class extends v {
        constructor() {
            super(), this.isError = !1, this.openMobileApp()
        }
        onFormatAndRedirect(t, e = !1) {
            let {
                mobile: r,
                name: o
            } = b.getWalletRouterData(), n = r ? .native, i = r ? .universal;
            if (n && !e) {
                let s = b.formatNativeUrl(n, t, o);
                b.openHref(s, "_self")
            } else if (i) {
                let s = b.formatUniversalUrl(i, t, o);
                b.openHref(s, "_self")
            }
        }
        openMobileApp(t = !1) {
            let {
                walletConnectUri: e
            } = G.state, r = b.getWalletRouterData();
            f.setRecentWallet(r), e && this.onFormatAndRedirect(e, t)
        }
        onGoToAppStore(t) {
            t && b.openHref(t, "_blank")
        }
        render() {
            let {
                name: t,
                id: e,
                image_id: r,
                app: o,
                mobile: n
            } = b.getWalletRouterData(), {
                isWeb: i
            } = f.getCachedRouterWalletPlatforms(), s = o ? .ios, a = n ? .universal;
            return d `<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${H(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${_.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${a?d`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>`:null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${H(r)}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${_.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(s)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`
        }
    };
ar.styles = [E.globalCss, Ql], Si([q()], ar.prototype, "isError", 2), ar = Si([C("wcm-mobile-connecting-view")], ar);
var tc = $ `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`,
    rc = Object.defineProperty,
    oc = Object.getOwnPropertyDescriptor,
    nc = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? oc(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && rc(e, r, n), n
    },
    Oo = class extends v {
        render() {
            let {
                name: t,
                id: e,
                image_id: r
            } = b.getWalletRouterData(), {
                isDesktop: o,
                isWeb: n
            } = f.getCachedRouterWalletPlatforms();
            return d `<wcm-modal-header title="${t}" .onAction="${f.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${H(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${o}" .isWeb="${n}"></wcm-platform-selection></wcm-info-footer>`
        }
    };
Oo.styles = [E.globalCss, tc], Oo = nc([C("wcm-mobile-qr-connecting-view")], Oo);
var ic = Object.defineProperty,
    sc = Object.getOwnPropertyDescriptor,
    ac = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? sc(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && ic(e, r, n), n
    },
    Io = class extends v {
        render() {
            return d `<wcm-modal-header title="Scan the code" .onAction="${f.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`
        }
    };
Io.styles = [E.globalCss], Io = ac([C("wcm-qrcode-view")], Io);
var lc = $ `wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`,
    cc = Object.defineProperty,
    dc = Object.getOwnPropertyDescriptor,
    Pt = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? dc(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && cc(e, r, n), n
    },
    So = 40,
    Le = class extends v {
        constructor() {
            super(...arguments), this.loading = !z.state.wallets.listings.length, this.firstFetch = !z.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = f.debounce(t => {
                t.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = t, z.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), z.resetSearch())
            })
        }
        firstUpdated() {
            this.createPaginationObserver()
        }
        disconnectedCallback() {
            var t;
            (t = this.intersectionObserver) == null || t.disconnect()
        }
        get placeholderEl() {
            return f.getShadowRootElement(this, ".wcm-placeholder-block")
        }
        createPaginationObserver() {
            this.intersectionObserver = new IntersectionObserver(([t]) => {
                t.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets()
            }), this.intersectionObserver.observe(this.placeholderEl)
        }
        isLastPage() {
            let {
                wallets: t,
                search: e
            } = z.state, {
                listings: r,
                total: o
            } = this.search ? e : t;
            return o <= So || r.length >= o
        }
        fetchWallets() {
            return W(this, null, function*() {
                var t;
                let {
                    wallets: e,
                    search: r
                } = z.state, {
                    listings: o,
                    total: n,
                    page: i
                } = this.search ? r : e;
                if (!this.endReached && (this.firstFetch || n > So && o.length < n)) try {
                    this.loading = !0;
                    let s = (t = G.state.chains) == null ? void 0 : t.join(","),
                        {
                            listings: a
                        } = yield z.getWallets({
                            page: this.firstFetch ? 1 : i + 1,
                            entries: So,
                            search: this.search,
                            version: 2,
                            chains: s
                        }), l = a.map(c => f.getWalletIcon(c));
                    yield Promise.all([...l.map(c => W(this, null, function*() {
                        return f.preloadImage(c)
                    })), b.wait(300)]), this.endReached = this.isLastPage()
                } catch (s) {
                    console.error(s), ee.openToast(f.getErrorMessage(s), "error")
                } finally {
                    this.loading = !1, this.firstFetch = !1
                }
            })
        }
        onConnect(t) {
            b.isAndroid() ? f.handleMobileLinking(t) : f.goToConnectingView(t)
        }
        onSearchChange(t) {
            let {
                value: e
            } = t.target;
            this.searchDebounce(e)
        }
        render() {
            let {
                wallets: t,
                search: e
            } = z.state, {
                listings: r
            } = this.search ? e : t, o = this.loading && !r.length, n = this.search.length >= 3, i = xe.manualWalletsTemplate(), s = xe.recomendedWalletsTemplate(!0);
            n && (i = i.filter(({
                values: c
            }) => f.caseSafeIncludes(c[0], this.search)), s = s.filter(({
                values: c
            }) => f.caseSafeIncludes(c[0], this.search)));
            let a = !this.loading && !r.length && !s.length,
                l = {
                    "wcm-loading": o,
                    "wcm-end-reached": this.endReached || !this.loading,
                    "wcm-empty": a
                };
            return d `<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${J(l)}"><div class="wcm-grid">${o?null:i} ${o?null:s} ${o?null:r.map(c=>d`${c?d`<wcm-wallet-button imageId="${c.image_id}" name="${c.name}" walletId="${c.id}" .onClick="${()=>this.onConnect(c)}"></wcm-wallet-button>`:null}`)}</div><div class="wcm-placeholder-block">${a?d`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`:null} ${!a&&this.loading?d`<wcm-spinner></wcm-spinner>`:null}</div></wcm-modal-content>`
        }
    };
Le.styles = [E.globalCss, lc], Pt([q()], Le.prototype, "loading", 2), Pt([q()], Le.prototype, "firstFetch", 2), Pt([q()], Le.prototype, "search", 2), Pt([q()], Le.prototype, "endReached", 2), Le = Pt([C("wcm-wallet-explorer-view")], Le);
var hc = $ `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`,
    uc = Object.defineProperty,
    mc = Object.getOwnPropertyDescriptor,
    ki = (t, e, r, o) => {
        for (var n = o > 1 ? void 0 : o ? mc(e, r) : e, i = t.length - 1, s; i >= 0; i--)(s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
        return o && n && uc(e, r, n), n
    },
    lr = class extends v {
        constructor() {
            super(), this.isError = !1, this.openWebWallet()
        }
        onFormatAndRedirect(t) {
            let {
                desktop: e,
                name: r
            } = b.getWalletRouterData(), o = e ? .universal;
            if (o) {
                let n = b.formatUniversalUrl(o, t, r);
                b.openHref(n, "_blank")
            }
        }
        openWebWallet() {
            let {
                walletConnectUri: t
            } = G.state, e = b.getWalletRouterData();
            f.setRecentWallet(e), t && this.onFormatAndRedirect(t)
        }
        render() {
            let {
                name: t,
                id: e,
                image_id: r
            } = b.getWalletRouterData(), {
                isMobile: o,
                isDesktop: n
            } = f.getCachedRouterWalletPlatforms(), i = b.isMobile();
            return d `<wcm-modal-header title="${t}" .onAction="${f.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${H(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isDesktop="${i?!1:n}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${_.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
        }
    };
lr.styles = [E.globalCss, hc], ki([q()], lr.prototype, "isError", 2), lr = ki([C("wcm-web-connecting-view")], lr);
export {
    kt as WcmModal, ve as WcmQrCode
};