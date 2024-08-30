import {
    a as Ut,
    b as Rr,
    d as Dt,
    e as Fr,
    f as Lr,
    i as Nt,
    j as Ht,
    k as Ur,
    m as Dr,
    n as Nr,
    o as Hr
} from "./chunk-2QCO2I2U.js";
import {
    a as h,
    b as v,
    d as F,
    l as O
} from "./chunk-PWCKSV3D.js";
var _r = "1.0.5";
var w = class e extends Error {
    constructor(t, r = {}) {
        let n = r.cause instanceof e ? r.cause.details : r.cause ? .message ? r.cause.message : r.details,
            o = r.cause instanceof e && r.cause.docsPath || r.docsPath,
            i = [t || "An error occurred.", "", ...r.metaMessages ? [...r.metaMessages, ""] : [], ...o ? [`Docs: https://abitype.dev${o}`] : [], ...n ? [`Details: ${n}`] : [], `Version: abitype@${_r}`].join(`
`);
        super(i), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiTypeError"
        }), r.cause && (this.cause = r.cause), this.details = n, this.docsPath = o, this.metaMessages = r.metaMessages, this.shortMessage = t
    }
};

function E(e, t) {
    return e.exec(t) ? .groups
}
var _t = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
    Gt = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
    Fe = /^\(.+?\).*?$/;
var Gr = /^tuple(?<array>(\[(\d*)\])*)$/;

function Le(e) {
    let t = e.type;
    if (Gr.test(e.type) && "components" in e) {
        t = "(";
        let r = e.components.length;
        for (let o = 0; o < r; o++) {
            let i = e.components[o];
            t += Le(i), o < r - 1 && (t += ", ")
        }
        let n = E(Gr, e.type);
        return t += `)${n?.array??""}`, Le(v(h({}, e), {
            type: t
        }))
    }
    return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t
}

function re(e) {
    let t = "",
        r = e.length;
    for (let n = 0; n < r; n++) {
        let o = e[n];
        t += Le(o), n !== r - 1 && (t += ", ")
    }
    return t
}

function Vt(e) {
    return e.type === "function" ? `function ${e.name}(${re(e.inputs)})${e.stateMutability&&e.stateMutability!=="nonpayable"?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${re(e.outputs)})`:""}` : e.type === "event" ? `event ${e.name}(${re(e.inputs)})` : e.type === "error" ? `error ${e.name}(${re(e.inputs)})` : e.type === "constructor" ? `constructor(${re(e.inputs)})${e.stateMutability==="payable"?" payable":""}` : e.type === "fallback" ? "fallback()" : "receive() external payable"
}
var Vr = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;

function Wr(e) {
    return Vr.test(e)
}

function Zr(e) {
    return E(Vr, e)
}
var qr = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;

function Jr(e) {
    return qr.test(e)
}

function Kr(e) {
    return E(qr, e)
}
var Xr = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;

function Yr(e) {
    return Xr.test(e)
}

function Qr(e) {
    return E(Xr, e)
}
var en = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;

function Ue(e) {
    return en.test(e)
}

function tn(e) {
    return E(en, e)
}
var rn = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;

function nn(e) {
    return rn.test(e)
}

function on(e) {
    return E(rn, e)
}
var ko = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;

function sn(e) {
    return ko.test(e)
}
var Oo = /^receive\(\) external payable$/;

function an(e) {
    return Oo.test(e)
}
var un = new Set(["indexed"]),
    De = new Set(["calldata", "memory", "storage"]);
var Ne = class extends w {
        constructor({
            type: t
        }) {
            super("Unknown type.", {
                metaMessages: [`Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "UnknownTypeError"
            })
        }
    },
    He = class extends w {
        constructor({
            type: t
        }) {
            super("Unknown type.", {
                metaMessages: [`Type "${t}" is not a valid ABI type.`]
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "UnknownSolidityTypeError"
            })
        }
    };
var _e = class extends w {
        constructor({
            param: t
        }) {
            super("Invalid ABI parameter.", {
                details: t
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "InvalidParameterError"
            })
        }
    },
    Ge = class extends w {
        constructor({
            param: t,
            name: r
        }) {
            super("Invalid ABI parameter.", {
                details: t,
                metaMessages: [`"${r}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "SolidityProtectedKeywordError"
            })
        }
    },
    Ve = class extends w {
        constructor({
            param: t,
            type: r,
            modifier: n
        }) {
            super("Invalid ABI parameter.", {
                details: t,
                metaMessages: [`Modifier "${n}" not allowed${r?` in "${r}" type`:""}.`]
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "InvalidModifierError"
            })
        }
    },
    We = class extends w {
        constructor({
            param: t,
            type: r,
            modifier: n
        }) {
            super("Invalid ABI parameter.", {
                details: t,
                metaMessages: [`Modifier "${n}" not allowed${r?` in "${r}" type`:""}.`, `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`]
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "InvalidFunctionModifierError"
            })
        }
    },
    Ze = class extends w {
        constructor({
            abiParameter: t
        }) {
            super("Invalid ABI parameter.", {
                details: JSON.stringify(t, null, 2),
                metaMessages: ["ABI parameter type is invalid."]
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "InvalidAbiTypeParameterError"
            })
        }
    };
var L = class extends w {
        constructor({
            signature: t,
            type: r
        }) {
            super(`Invalid ${r} signature.`, {
                details: t
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "InvalidSignatureError"
            })
        }
    },
    qe = class extends w {
        constructor({
            signature: t
        }) {
            super("Unknown signature.", {
                details: t
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "UnknownSignatureError"
            })
        }
    },
    Je = class extends w {
        constructor({
            signature: t
        }) {
            super("Invalid struct signature.", {
                details: t,
                metaMessages: ["No properties exist."]
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "InvalidStructSignatureError"
            })
        }
    };
var Ke = class extends w {
    constructor({
        type: t
    }) {
        super("Circular reference detected.", {
            metaMessages: [`Struct "${t}" is a circular reference.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CircularReferenceError"
        })
    }
};
var Xe = class extends w {
    constructor({
        current: t,
        depth: r
    }) {
        super("Unbalanced parentheses.", {
            metaMessages: [`"${t.trim()}" has too many ${r>0?"opening":"closing"} parentheses.`],
            details: `Depth "${r}"`
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParenthesisError"
        })
    }
};

function cn(e, t) {
    return t ? `${t}:${e}` : e
}
var Ye = new Map([
    ["address", {
        type: "address"
    }],
    ["bool", {
        type: "bool"
    }],
    ["bytes", {
        type: "bytes"
    }],
    ["bytes32", {
        type: "bytes32"
    }],
    ["int", {
        type: "int256"
    }],
    ["int256", {
        type: "int256"
    }],
    ["string", {
        type: "string"
    }],
    ["uint", {
        type: "uint256"
    }],
    ["uint8", {
        type: "uint8"
    }],
    ["uint16", {
        type: "uint16"
    }],
    ["uint24", {
        type: "uint24"
    }],
    ["uint32", {
        type: "uint32"
    }],
    ["uint64", {
        type: "uint64"
    }],
    ["uint96", {
        type: "uint96"
    }],
    ["uint112", {
        type: "uint112"
    }],
    ["uint160", {
        type: "uint160"
    }],
    ["uint192", {
        type: "uint192"
    }],
    ["uint256", {
        type: "uint256"
    }],
    ["address owner", {
        type: "address",
        name: "owner"
    }],
    ["address to", {
        type: "address",
        name: "to"
    }],
    ["bool approved", {
        type: "bool",
        name: "approved"
    }],
    ["bytes _data", {
        type: "bytes",
        name: "_data"
    }],
    ["bytes data", {
        type: "bytes",
        name: "data"
    }],
    ["bytes signature", {
        type: "bytes",
        name: "signature"
    }],
    ["bytes32 hash", {
        type: "bytes32",
        name: "hash"
    }],
    ["bytes32 r", {
        type: "bytes32",
        name: "r"
    }],
    ["bytes32 root", {
        type: "bytes32",
        name: "root"
    }],
    ["bytes32 s", {
        type: "bytes32",
        name: "s"
    }],
    ["string name", {
        type: "string",
        name: "name"
    }],
    ["string symbol", {
        type: "string",
        name: "symbol"
    }],
    ["string tokenURI", {
        type: "string",
        name: "tokenURI"
    }],
    ["uint tokenId", {
        type: "uint256",
        name: "tokenId"
    }],
    ["uint8 v", {
        type: "uint8",
        name: "v"
    }],
    ["uint256 balance", {
        type: "uint256",
        name: "balance"
    }],
    ["uint256 tokenId", {
        type: "uint256",
        name: "tokenId"
    }],
    ["uint256 value", {
        type: "uint256",
        name: "value"
    }],
    ["event:address indexed from", {
        type: "address",
        name: "from",
        indexed: !0
    }],
    ["event:address indexed to", {
        type: "address",
        name: "to",
        indexed: !0
    }],
    ["event:uint indexed tokenId", {
        type: "uint256",
        name: "tokenId",
        indexed: !0
    }],
    ["event:uint256 indexed tokenId", {
        type: "uint256",
        name: "tokenId",
        indexed: !0
    }]
]);

function pn(e, t = {}) {
    if (Yr(e)) {
        let r = Qr(e);
        if (!r) throw new L({
            signature: e,
            type: "function"
        });
        let n = I(r.parameters),
            o = [],
            i = n.length;
        for (let a = 0; a < i; a++) o.push(_(n[a], {
            modifiers: De,
            structs: t,
            type: "function"
        }));
        let s = [];
        if (r.returns) {
            let a = I(r.returns),
                u = a.length;
            for (let p = 0; p < u; p++) s.push(_(a[p], {
                modifiers: De,
                structs: t,
                type: "function"
            }))
        }
        return {
            name: r.name,
            type: "function",
            stateMutability: r.stateMutability ? ? "nonpayable",
            inputs: o,
            outputs: s
        }
    }
    if (Jr(e)) {
        let r = Kr(e);
        if (!r) throw new L({
            signature: e,
            type: "event"
        });
        let n = I(r.parameters),
            o = [],
            i = n.length;
        for (let s = 0; s < i; s++) o.push(_(n[s], {
            modifiers: un,
            structs: t,
            type: "event"
        }));
        return {
            name: r.name,
            type: "event",
            inputs: o
        }
    }
    if (Wr(e)) {
        let r = Zr(e);
        if (!r) throw new L({
            signature: e,
            type: "error"
        });
        let n = I(r.parameters),
            o = [],
            i = n.length;
        for (let s = 0; s < i; s++) o.push(_(n[s], {
            structs: t,
            type: "error"
        }));
        return {
            name: r.name,
            type: "error",
            inputs: o
        }
    }
    if (nn(e)) {
        let r = on(e);
        if (!r) throw new L({
            signature: e,
            type: "constructor"
        });
        let n = I(r.parameters),
            o = [],
            i = n.length;
        for (let s = 0; s < i; s++) o.push(_(n[s], {
            structs: t,
            type: "constructor"
        }));
        return {
            type: "constructor",
            stateMutability: r.stateMutability ? ? "nonpayable",
            inputs: o
        }
    }
    if (sn(e)) return {
        type: "fallback"
    };
    if (an(e)) return {
        type: "receive",
        stateMutability: "payable"
    };
    throw new qe({
        signature: e
    })
}
var jo = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    zo = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    Co = /^u?int$/;

function _(e, t) {
    let r = cn(e, t ? .type);
    if (Ye.has(r)) return Ye.get(r);
    let n = Fe.test(e),
        o = E(n ? zo : jo, e);
    if (!o) throw new _e({
        param: e
    });
    if (o.name && Fo(o.name)) throw new Ge({
        param: e,
        name: o.name
    });
    let i = o.name ? {
            name: o.name
        } : {},
        s = o.modifier === "indexed" ? {
            indexed: !0
        } : {},
        a = t ? .structs ? ? {},
        u, p = {};
    if (n) {
        u = "tuple";
        let f = I(o.type),
            m = [],
            l = f.length;
        for (let y = 0; y < l; y++) m.push(_(f[y], {
            structs: a
        }));
        p = {
            components: m
        }
    } else if (o.type in a) u = "tuple", p = {
        components: a[o.type]
    };
    else if (Co.test(o.type)) u = `${o.type}256`;
    else if (u = o.type, t ? .type !== "struct" && !Wt(u)) throw new He({
        type: u
    });
    if (o.modifier) {
        if (!t ? .modifiers ? .has ? .(o.modifier)) throw new Ve({
            param: e,
            type: t ? .type,
            modifier: o.modifier
        });
        if (De.has(o.modifier) && !Lo(u, !!o.array)) throw new We({
            param: e,
            type: t ? .type,
            modifier: o.modifier
        })
    }
    let d = h(h(h({
        type: `${u}${o.array??""}`
    }, i), s), p);
    return Ye.set(r, d), d
}

function I(e, t = [], r = "", n = 0) {
    let o = e.trim().length;
    for (let i = 0; i < o; i++) {
        let s = e[i],
            a = e.slice(i + 1);
        switch (s) {
            case ",":
                return n === 0 ? I(a, [...t, r.trim()]) : I(a, t, `${r}${s}`, n);
            case "(":
                return I(a, t, `${r}${s}`, n + 1);
            case ")":
                return I(a, t, `${r}${s}`, n - 1);
            default:
                return I(a, t, `${r}${s}`, n)
        }
    }
    if (r === "") return t;
    if (n !== 0) throw new Xe({
        current: r,
        depth: n
    });
    return t.push(r.trim()), t
}

function Wt(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || _t.test(e) || Gt.test(e)
}
var Ro = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;

function Fo(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || _t.test(e) || Gt.test(e) || Ro.test(e)
}

function Lo(e, t) {
    return t || e === "bytes" || e === "string" || e === "tuple"
}

function dn(e) {
    let t = {},
        r = e.length;
    for (let s = 0; s < r; s++) {
        let a = e[s];
        if (!Ue(a)) continue;
        let u = tn(a);
        if (!u) throw new L({
            signature: a,
            type: "struct"
        });
        let p = u.properties.split(";"),
            d = [],
            f = p.length;
        for (let m = 0; m < f; m++) {
            let y = p[m].trim();
            if (!y) continue;
            let g = _(y, {
                type: "struct"
            });
            d.push(g)
        }
        if (!d.length) throw new Je({
            signature: a
        });
        t[u.name] = d
    }
    let n = {},
        o = Object.entries(t),
        i = o.length;
    for (let s = 0; s < i; s++) {
        let [a, u] = o[s];
        n[a] = fn(u, t)
    }
    return n
}
var Uo = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;

function fn(e, t, r = new Set) {
    let n = [],
        o = e.length;
    for (let i = 0; i < o; i++) {
        let s = e[i];
        if (Fe.test(s.type)) n.push(s);
        else {
            let u = E(Uo, s.type);
            if (!u ? .type) throw new Ze({
                abiParameter: s
            });
            let {
                array: p,
                type: d
            } = u;
            if (d in t) {
                if (r.has(d)) throw new Ke({
                    type: d
                });
                n.push(v(h({}, s), {
                    type: `tuple${p??""}`,
                    components: fn(t[d] ? ? [], t, new Set([...r, d]))
                }))
            } else if (Wt(d)) n.push(s);
            else throw new Ne({
                type: d
            })
        }
    }
    return n
}

function Qe(e) {
    let t = dn(e),
        r = [],
        n = e.length;
    for (let o = 0; o < n; o++) {
        let i = e[o];
        Ue(i) || r.push(pn(i, t))
    }
    return r
}

function ne(e) {
    return typeof e == "string" ? {
        address: e,
        type: "json-rpc"
    } : e
}
var Zt = [{
        inputs: [{
            components: [{
                name: "target",
                type: "address"
            }, {
                name: "allowFailure",
                type: "bool"
            }, {
                name: "callData",
                type: "bytes"
            }],
            name: "calls",
            type: "tuple[]"
        }],
        name: "aggregate3",
        outputs: [{
            components: [{
                name: "success",
                type: "bool"
            }, {
                name: "returnData",
                type: "bytes"
            }],
            name: "returnData",
            type: "tuple[]"
        }],
        stateMutability: "view",
        type: "function"
    }],
    ln = [{
        inputs: [],
        name: "ResolverNotFound",
        type: "error"
    }, {
        inputs: [],
        name: "ResolverWildcardNotSupported",
        type: "error"
    }, {
        inputs: [],
        name: "ResolverNotContract",
        type: "error"
    }, {
        inputs: [{
            name: "returnData",
            type: "bytes"
        }],
        name: "ResolverError",
        type: "error"
    }, {
        inputs: [{
            components: [{
                name: "status",
                type: "uint16"
            }, {
                name: "message",
                type: "string"
            }],
            name: "errors",
            type: "tuple[]"
        }],
        name: "HttpError",
        type: "error"
    }],
    Ii = [...ln, {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "data",
            type: "bytes"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }, {
            name: "address",
            type: "address"
        }]
    }, {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "data",
            type: "bytes"
        }, {
            name: "gateways",
            type: "string[]"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }, {
            name: "address",
            type: "address"
        }]
    }],
    ki = [...ln, {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "bytes",
            name: "reverseName"
        }],
        outputs: [{
            type: "string",
            name: "resolvedName"
        }, {
            type: "address",
            name: "resolvedAddress"
        }, {
            type: "address",
            name: "reverseResolver"
        }, {
            type: "address",
            name: "resolver"
        }]
    }, {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "bytes",
            name: "reverseName"
        }, {
            type: "string[]",
            name: "gateways"
        }],
        outputs: [{
            type: "string",
            name: "resolvedName"
        }, {
            type: "address",
            name: "resolvedAddress"
        }, {
            type: "address",
            name: "reverseResolver"
        }, {
            type: "address",
            name: "resolver"
        }]
    }];
var mn = "0x82ad56cb";
var yn = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
    bn = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe";
var qt = "2.19.7";
var Jt = {
    getDocsUrl: ({
        docsBaseUrl: e,
        docsPath: t = "",
        docsSlug: r
    }) => t ? `${e??"https://viem.sh"}${t}${r?`#${r}`:""}` : void 0,
    version: qt
};
var c = class e extends Error {
    constructor(t, r = {}) {
        let n = r.cause instanceof e ? r.cause.details : r.cause ? .message ? r.cause.message : r.details,
            o = r.cause instanceof e && r.cause.docsPath || r.docsPath,
            i = Jt.getDocsUrl ? .(v(h({}, r), {
                docsPath: o
            })),
            s = [t || "An error occurred.", "", ...r.metaMessages ? [...r.metaMessages, ""] : [], ...i ? [`Docs: ${i}`] : [], ...n ? [`Details: ${n}`] : [], ...Jt.version ? [`Version: ${Jt.version}`] : []].join(`
`);
        super(s, r.cause ? {
            cause: r.cause
        } : void 0), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError"
        }), this.details = n, this.docsPath = o, this.metaMessages = r.metaMessages, this.name = r.name ? ? this.name, this.shortMessage = t, this.version = qt
    }
    walk(t) {
        return hn(this, t)
    }
};

function hn(e, t) {
    return t ? .(e) ? e : e && typeof e == "object" && "cause" in e ? hn(e.cause, t) : t ? null : e
}
var X = class extends c {
        constructor({
            blockNumber: t,
            chain: r,
            contract: n
        }) {
            super(`Chain "${r.name}" does not support contract "${n.name}".`, {
                metaMessages: ["This could be due to any of the following:", ...t && n.blockCreated && n.blockCreated > t ? [`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${t}).`] : [`- The chain does not have the contract "${n.name}" configured.`]],
                name: "ChainDoesNotSupportContract"
            })
        }
    },
    gn = class extends c {
        constructor({
            chain: t,
            currentChainId: r
        }) {
            super(`The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${t.id} \u2013 ${t.name}).`, {
                metaMessages: [`Current Chain ID:  ${r}`, `Expected Chain ID: ${t.id} \u2013 ${t.name}`],
                name: "ChainMismatchError"
            })
        }
    },
    xn = class extends c {
        constructor() {
            super(["No chain was provided to the request.", "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`), {
                name: "ChainNotFoundError"
            })
        }
    },
    $e = class extends c {
        constructor() {
            super("No chain was provided to the Client.", {
                name: "ClientChainNotConfiguredError"
            })
        }
    };
var wn = {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type."
    },
    vn = {
        inputs: [{
            name: "message",
            type: "string"
        }],
        name: "Error",
        type: "error"
    },
    $n = {
        inputs: [{
            name: "reason",
            type: "uint256"
        }],
        name: "Panic",
        type: "error"
    };

function j(e, {
    includeName: t = !1
} = {}) {
    if (e.type !== "function" && e.type !== "event" && e.type !== "error") throw new tt(e.type);
    return `${e.name}(${et(e.inputs,{includeName:t})})`
}

function et(e, {
    includeName: t = !1
} = {}) {
    return e ? e.map(r => Do(r, {
        includeName: t
    })).join(t ? ", " : ",") : ""
}

function Do(e, {
    includeName: t
}) {
    return e.type.startsWith("tuple") ? `(${et(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
}

function T(e, {
    strict: t = !0
} = {}) {
    return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x")
}

function x(e) {
    return T(e, {
        strict: !1
    }) ? Math.ceil((e.length - 2) / 2) : e.length
}
var rt = class extends c {
        constructor({
            docsPath: t
        }) {
            super(["A constructor was not found on the ABI.", "Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`), {
                docsPath: t,
                name: "AbiConstructorNotFoundError"
            })
        }
    },
    Ae = class extends c {
        constructor({
            docsPath: t
        }) {
            super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.", "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`), {
                docsPath: t,
                name: "AbiConstructorParamsNotFoundError"
            })
        }
    };
var nt = class extends c {
        constructor({
            data: t,
            params: r,
            size: n
        }) {
            super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`), {
                metaMessages: [`Params: (${et(r,{includeName:!0})})`, `Data:   ${t} (${n} bytes)`],
                name: "AbiDecodingDataSizeTooSmallError"
            }), Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "params", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "size", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.data = t, this.params = r, this.size = n
        }
    },
    oe = class extends c {
        constructor() {
            super('Cannot decode zero data ("0x") with ABI parameters.', {
                name: "AbiDecodingZeroDataError"
            })
        }
    },
    ot = class extends c {
        constructor({
            expectedLength: t,
            givenLength: r,
            type: n
        }) {
            super([`ABI encoding array length mismatch for type ${n}.`, `Expected length: ${t}`, `Given length: ${r}`].join(`
`), {
                name: "AbiEncodingArrayLengthMismatchError"
            })
        }
    },
    st = class extends c {
        constructor({
            expectedSize: t,
            value: r
        }) {
            super(`Size of bytes "${r}" (bytes${x(r)}) does not match expected size (bytes${t}).`, {
                name: "AbiEncodingBytesSizeMismatchError"
            })
        }
    },
    it = class extends c {
        constructor({
            expectedLength: t,
            givenLength: r
        }) {
            super(["ABI encoding params/values length mismatch.", `Expected length (params): ${t}`, `Given length (values): ${r}`].join(`
`), {
                name: "AbiEncodingLengthMismatchError"
            })
        }
    };
var se = class extends c {
    constructor(t, {
        docsPath: r
    }) {
        super([`Encoded error signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: r,
            name: "AbiErrorSignatureNotFoundError"
        }), Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.signature = t
    }
};
var G = class extends c {
        constructor(t, {
            docsPath: r
        } = {}) {
            super([`Function ${t?`"${t}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
                docsPath: r,
                name: "AbiFunctionNotFoundError"
            })
        }
    },
    at = class extends c {
        constructor(t, {
            docsPath: r
        }) {
            super([`Function "${t}" does not contain any \`outputs\` on ABI.`, "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
                docsPath: r,
                name: "AbiFunctionOutputsNotFoundError"
            })
        }
    };
var ut = class extends c {
    constructor(t, r) {
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [`\`${t.type}\` in \`${j(t.abiItem)}\`, and`, `\`${r.type}\` in \`${j(r.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."],
            name: "AbiItemAmbiguityError"
        })
    }
};
var ct = class extends c {
        constructor(t, {
            docsPath: r
        }) {
            super([`Type "${t}" is not a valid encoding type.`, "Please provide a valid ABI type."].join(`
`), {
                docsPath: r,
                name: "InvalidAbiEncodingType"
            })
        }
    },
    pt = class extends c {
        constructor(t, {
            docsPath: r
        }) {
            super([`Type "${t}" is not a valid decoding type.`, "Please provide a valid ABI type."].join(`
`), {
                docsPath: r,
                name: "InvalidAbiDecodingType"
            })
        }
    },
    dt = class extends c {
        constructor(t) {
            super([`Value "${t}" is not a valid array.`].join(`
`), {
                name: "InvalidArrayError"
            })
        }
    },
    tt = class extends c {
        constructor(t) {
            super([`"${t}" is not a valid definition type.`, 'Valid types: "function", "event", "error"'].join(`
`), {
                name: "InvalidDefinitionTypeError"
            })
        }
    };
var Pe = class extends c {
        constructor({
            offset: t,
            position: r,
            size: n
        }) {
            super(`Slice ${r==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${n}).`, {
                name: "SliceOffsetOutOfBoundsError"
            })
        }
    },
    Me = class extends c {
        constructor({
            size: t,
            targetSize: r,
            type: n
        }) {
            super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${t}) exceeds padding size (${r}).`, {
                name: "SizeExceedsPaddingSizeError"
            })
        }
    },
    Se = class extends c {
        constructor({
            size: t,
            targetSize: r,
            type: n
        }) {
            super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} is expected to be ${r} ${n} long, but is ${t} ${n} long.`, {
                name: "InvalidBytesLengthError"
            })
        }
    };

function Y(e, t, r, {
    strict: n
} = {}) {
    return T(e, {
        strict: !1
    }) ? No(e, t, r, {
        strict: n
    }) : Kt(e, t, r, {
        strict: n
    })
}

function An(e, t) {
    if (typeof t == "number" && t > 0 && t > x(e) - 1) throw new Pe({
        offset: t,
        position: "start",
        size: x(e)
    })
}

function Pn(e, t, r) {
    if (typeof t == "number" && typeof r == "number" && x(e) !== r - t) throw new Pe({
        offset: r,
        position: "end",
        size: x(e)
    })
}

function Kt(e, t, r, {
    strict: n
} = {}) {
    An(e, t);
    let o = e.slice(t, r);
    return n && Pn(o, t, r), o
}

function No(e, t, r, {
    strict: n
} = {}) {
    An(e, t);
    let o = `0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;
    return n && Pn(o, t, r), o
}

function V(e, {
    dir: t,
    size: r = 32
} = {}) {
    return typeof e == "string" ? U(e, {
        dir: t,
        size: r
    }) : Ho(e, {
        dir: t,
        size: r
    })
}

function U(e, {
    dir: t,
    size: r = 32
} = {}) {
    if (r === null) return e;
    let n = e.replace("0x", "");
    if (n.length > r * 2) throw new Me({
        size: Math.ceil(n.length / 2),
        targetSize: r,
        type: "hex"
    });
    return `0x${n[t==="right"?"padEnd":"padStart"](r*2,"0")}`
}

function Ho(e, {
    dir: t,
    size: r = 32
} = {}) {
    if (r === null) return e;
    if (e.length > r) throw new Me({
        size: e.length,
        targetSize: r,
        type: "bytes"
    });
    let n = new Uint8Array(r);
    for (let o = 0; o < r; o++) {
        let i = t === "right";
        n[i ? o : r - o - 1] = e[i ? o : e.length - o - 1]
    }
    return n
}
var ft = class extends c {
        constructor({
            max: t,
            min: r,
            signed: n,
            size: o,
            value: i
        }) {
            super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${n?"signed":"unsigned"} `:""}integer range ${t?`(${r} to ${t})`:`(above ${r})`}`, {
                name: "IntegerOutOfRangeError"
            })
        }
    },
    lt = class extends c {
        constructor(t) {
            super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
                name: "InvalidBytesBooleanError"
            })
        }
    };
var mt = class extends c {
    constructor({
        givenSize: t,
        maxSize: r
    }) {
        super(`Size cannot exceed ${r} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError"
        })
    }
};

function Q(e, {
    dir: t = "left"
} = {}) {
    let r = typeof e == "string" ? e.replace("0x", "") : e,
        n = 0;
    for (let o = 0; o < r.length - 1 && r[t === "left" ? o : r.length - o - 1].toString() === "0"; o++) n++;
    return r = t === "left" ? r.slice(n) : r.slice(0, r.length - n), typeof e == "string" ? (r.length === 1 && t === "right" && (r = `${r}0`), `0x${r.length%2===1?`0${r}`:r}`) : r
}

function P(e, {
    size: t
}) {
    if (x(e) > t) throw new mt({
        givenSize: x(e),
        maxSize: t
    })
}

function Xt(e, t = {}) {
    let {
        signed: r
    } = t;
    t.size && P(e, {
        size: t.size
    });
    let n = BigInt(e);
    if (!r) return n;
    let o = (e.length - 2) / 2,
        i = (1 n << BigInt(o) * 8 n - 1 n) - 1 n;
    return n <= i ? n : n - BigInt(`0x${"f".padStart(o*2,"f")}`) - 1 n
}

function Mn(e, t = {}) {
    return Number(Xt(e, t))
}

function la(e, t = {}) {
    let r = ie(e);
    return t.size && (P(r, {
        size: t.size
    }), r = Q(r, {
        dir: "right"
    })), new TextDecoder().decode(r)
}
var _o = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));

function Sn(e, t = {}) {
    return typeof e == "number" || typeof e == "bigint" ? b(e, t) : typeof e == "string" ? Qt(e, t) : typeof e == "boolean" ? Yt(e, t) : B(e, t)
}

function Yt(e, t = {}) {
    let r = `0x${Number(e)}`;
    return typeof t.size == "number" ? (P(r, {
        size: t.size
    }), V(r, {
        size: t.size
    })) : r
}

function B(e, t = {}) {
    let r = "";
    for (let o = 0; o < e.length; o++) r += _o[e[o]];
    let n = `0x${r}`;
    return typeof t.size == "number" ? (P(n, {
        size: t.size
    }), V(n, {
        dir: "right",
        size: t.size
    })) : n
}

function b(e, t = {}) {
    let {
        signed: r,
        size: n
    } = t, o = BigInt(e), i;
    n ? r ? i = (1 n << BigInt(n) * 8 n - 1 n) - 1 n : i = 2 n ** (BigInt(n) * 8 n) - 1 n : typeof e == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    let s = typeof i == "bigint" && r ? -i - 1 n : 0;
    if (i && o > i || o < s) {
        let u = typeof e == "bigint" ? "n" : "";
        throw new ft({
            max: i ? `${i}${u}` : void 0,
            min: `${s}${u}`,
            signed: r,
            size: n,
            value: `${e}${u}`
        })
    }
    let a = `0x${(r&&o<0?(1n<<BigInt(n*8))+BigInt(o):o).toString(16)}`;
    return n ? V(a, {
        size: n
    }) : a
}
var Go = new TextEncoder;

function Qt(e, t = {}) {
    let r = Go.encode(e);
    return B(r, t)
}
var Vo = new TextEncoder;

function yt(e, t = {}) {
    return typeof e == "number" || typeof e == "bigint" ? Zo(e, t) : typeof e == "boolean" ? Wo(e, t) : T(e) ? ie(e, t) : er(e, t)
}

function Wo(e, t = {}) {
    let r = new Uint8Array(1);
    return r[0] = Number(e), typeof t.size == "number" ? (P(r, {
        size: t.size
    }), V(r, {
        size: t.size
    })) : r
}
var D = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};

function En(e) {
    if (e >= D.zero && e <= D.nine) return e - D.zero;
    if (e >= D.A && e <= D.F) return e - (D.A - 10);
    if (e >= D.a && e <= D.f) return e - (D.a - 10)
}

function ie(e, t = {}) {
    let r = e;
    t.size && (P(r, {
        size: t.size
    }), r = V(r, {
        dir: "right",
        size: t.size
    }));
    let n = r.slice(2);
    n.length % 2 && (n = `0${n}`);
    let o = n.length / 2,
        i = new Uint8Array(o);
    for (let s = 0, a = 0; s < o; s++) {
        let u = En(n.charCodeAt(a++)),
            p = En(n.charCodeAt(a++));
        if (u === void 0 || p === void 0) throw new c(`Invalid byte sequence ("${n[a-2]}${n[a-1]}" in "${n}").`);
        i[s] = u * 16 + p
    }
    return i
}

function Zo(e, t) {
    let r = b(e, t);
    return ie(r)
}

function er(e, t = {}) {
    let r = Vo.encode(e);
    return typeof t.size == "number" ? (P(r, {
        size: t.size
    }), V(r, {
        dir: "right",
        size: t.size
    })) : r
}
var bt = BigInt(4294967295),
    Tn = BigInt(32);

function qo(e, t = !1) {
    return t ? {
        h: Number(e & bt),
        l: Number(e >> Tn & bt)
    } : {
        h: Number(e >> Tn & bt) | 0,
        l: Number(e & bt) | 0
    }
}

function Bn(e, t = !1) {
    let r = new Uint32Array(e.length),
        n = new Uint32Array(e.length);
    for (let o = 0; o < e.length; o++) {
        let {
            h: i,
            l: s
        } = qo(e[o], t);
        [r[o], n[o]] = [i, s]
    }
    return [r, n]
}
var In = (e, t, r) => e << r | t >>> 32 - r,
    kn = (e, t, r) => t << r | e >>> 32 - r,
    On = (e, t, r) => t << r - 32 | e >>> 64 - r,
    jn = (e, t, r) => e << r - 32 | t >>> 64 - r;
var Rn = [],
    Fn = [],
    Ln = [],
    Jo = BigInt(0),
    Ee = BigInt(1),
    Ko = BigInt(2),
    Xo = BigInt(7),
    Yo = BigInt(256),
    Qo = BigInt(113);
for (let e = 0, t = Ee, r = 1, n = 0; e < 24; e++) {
    [r, n] = [n, (2 * r + 3 * n) % 5], Rn.push(2 * (5 * n + r)), Fn.push((e + 1) * (e + 2) / 2 % 64);
    let o = Jo;
    for (let i = 0; i < 7; i++) t = (t << Ee ^ (t >> Xo) * Qo) % Yo, t & Ko && (o ^= Ee << (Ee << BigInt(i)) - Ee);
    Ln.push(o)
}
var [es, ts] = Bn(Ln, !0), zn = (e, t, r) => r > 32 ? On(e, t, r) : In(e, t, r), Cn = (e, t, r) => r > 32 ? jn(e, t, r) : kn(e, t, r);

function rs(e, t = 24) {
    let r = new Uint32Array(10);
    for (let n = 24 - t; n < 24; n++) {
        for (let s = 0; s < 10; s++) r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
        for (let s = 0; s < 10; s += 2) {
            let a = (s + 8) % 10,
                u = (s + 2) % 10,
                p = r[u],
                d = r[u + 1],
                f = zn(p, d, 1) ^ r[a],
                m = Cn(p, d, 1) ^ r[a + 1];
            for (let l = 0; l < 50; l += 10) e[s + l] ^= f, e[s + l + 1] ^= m
        }
        let o = e[2],
            i = e[3];
        for (let s = 0; s < 24; s++) {
            let a = Fn[s],
                u = zn(o, i, a),
                p = Cn(o, i, a),
                d = Rn[s];
            o = e[d], i = e[d + 1], e[d] = u, e[d + 1] = p
        }
        for (let s = 0; s < 50; s += 10) {
            for (let a = 0; a < 10; a++) r[a] = e[s + a];
            for (let a = 0; a < 10; a++) e[s + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10]
        }
        e[0] ^= es[n], e[1] ^= ts[n]
    }
    r.fill(0)
}
var ht = class e extends Dr {
        constructor(t, r, n, o = !1, i = 24) {
            if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Ut(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
            this.state = new Uint8Array(200), this.state32 = Lr(this.state)
        }
        keccak() {
            Nt || Ht(this.state32), rs(this.state32, this.rounds), Nt || Ht(this.state32), this.posOut = 0, this.pos = 0
        }
        update(t) {
            Dt(this);
            let {
                blockLen: r,
                state: n
            } = this;
            t = Ur(t);
            let o = t.length;
            for (let i = 0; i < o;) {
                let s = Math.min(r - this.pos, o - i);
                for (let a = 0; a < s; a++) n[this.pos++] ^= t[i++];
                this.pos === r && this.keccak()
            }
            return this
        }
        finish() {
            if (this.finished) return;
            this.finished = !0;
            let {
                state: t,
                suffix: r,
                pos: n,
                blockLen: o
            } = this;
            t[n] ^= r, r & 128 && n === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak()
        }
        writeInto(t) {
            Dt(this, !1), Rr(t), this.finish();
            let r = this.state,
                {
                    blockLen: n
                } = this;
            for (let o = 0, i = t.length; o < i;) {
                this.posOut >= n && this.keccak();
                let s = Math.min(n - this.posOut, i - o);
                t.set(r.subarray(this.posOut, this.posOut + s), o), this.posOut += s, o += s
            }
            return t
        }
        xofInto(t) {
            if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
            return this.writeInto(t)
        }
        xof(t) {
            return Ut(t), this.xofInto(new Uint8Array(t))
        }
        digestInto(t) {
            if (Fr(t, this), this.finished) throw new Error("digest() was already called");
            return this.writeInto(t), this.destroy(), t
        }
        digest() {
            return this.digestInto(new Uint8Array(this.outputLen))
        }
        destroy() {
            this.destroyed = !0, this.state.fill(0)
        }
        _cloneInto(t) {
            let {
                blockLen: r,
                suffix: n,
                outputLen: o,
                rounds: i,
                enableXOF: s
            } = this;
            return t || (t = new e(r, n, o, s, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = o, t.enableXOF = s, t.destroyed = this.destroyed, t
        }
    },
    W = (e, t, r) => Nr(() => new ht(t, e, r)),
    Ba = W(6, 144, 224 / 8),
    Ia = W(6, 136, 256 / 8),
    ka = W(6, 104, 384 / 8),
    Oa = W(6, 72, 512 / 8),
    ja = W(1, 144, 224 / 8),
    Un = W(1, 136, 256 / 8),
    za = W(1, 104, 384 / 8),
    Ca = W(1, 72, 512 / 8),
    Dn = (e, t, r) => Hr((n = {}) => new ht(t, e, n.dkLen === void 0 ? r : n.dkLen, !0)),
    Ra = Dn(31, 168, 128 / 8),
    Fa = Dn(31, 136, 256 / 8);

function gt(e, t) {
    let r = t || "hex",
        n = Un(T(e, {
            strict: !1
        }) ? yt(e) : e);
    return r === "bytes" ? n : Sn(n)
}
var ns = e => gt(yt(e));

function Nn(e) {
    return ns(e)
}

function Hn(e) {
    let t = !0,
        r = "",
        n = 0,
        o = "",
        i = !1;
    for (let s = 0; s < e.length; s++) {
        let a = e[s];
        if (["(", ")", ","].includes(a) && (t = !0), a === "(" && n++, a === ")" && n--, !!t) {
            if (n === 0) {
                if (a === " " && ["event", "function", ""].includes(o)) o = "";
                else if (o += a, a === ")") {
                    i = !0;
                    break
                }
                continue
            }
            if (a === " ") {
                e[s - 1] !== "," && r !== "," && r !== ",(" && (r = "", t = !1);
                continue
            }
            o += a, r += a
        }
    }
    if (!i) throw new c("Unable to normalize signature.");
    return o
}
var _n = e => {
    let t = typeof e == "string" ? e : Vt(e);
    return Hn(t)
};

function xt(e) {
    return Nn(_n(e))
}
var ae = e => Y(xt(e), 0, 4);
var M = class extends c {
    constructor({
        address: t
    }) {
        super(`Address "${t}" is invalid.`, {
            metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
            name: "InvalidAddressError"
        })
    }
};
var ue = class extends Map {
    constructor(t) {
        super(), Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.maxSize = t
    }
    set(t, r) {
        return super.set(t, r), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this
    }
};
var os = /^0x[a-fA-F0-9]{40}$/,
    tr = new ue(8192);

function $(e, t) {
    let {
        strict: r = !0
    } = t ? ? {}, n = `${e}.${r}`;
    if (tr.has(n)) return tr.get(n);
    let o = os.test(e) ? e.toLowerCase() === e ? !0 : r ? Te(e) === e : !0 : !1;
    return tr.set(n, o), o
}
var rr = new ue(8192);

function Te(e, t) {
    if (rr.has(`${e}.${t}`)) return rr.get(`${e}.${t}`);
    let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
        n = gt(er(r), "bytes"),
        o = (t ? r.substring(`${t}0x`.length) : r).split("");
    for (let s = 0; s < 40; s += 2) n[s >> 1] >> 4 >= 8 && o[s] && (o[s] = o[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && o[s + 1] && (o[s + 1] = o[s + 1].toUpperCase());
    let i = `0x${o.join("")}`;
    return rr.set(`${e}.${t}`, i), i
}

function yu(e, t) {
    if (!$(e, {
            strict: !1
        })) throw new M({
        address: e
    });
    return Te(e, t)
}
var Be = class extends c {
        constructor({
            offset: t
        }) {
            super(`Offset \`${t}\` cannot be negative.`, {
                name: "NegativeOffsetError"
            })
        }
    },
    wt = class extends c {
        constructor({
            length: t,
            position: r
        }) {
            super(`Position \`${r}\` is out of bounds (\`0 < position < ${t}\`).`, {
                name: "PositionOutOfBoundsError"
            })
        }
    },
    vt = class extends c {
        constructor({
            count: t,
            limit: r
        }) {
            super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${t}\`).`, {
                name: "RecursiveReadLimitExceededError"
            })
        }
    };
var ss = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new vt({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1) throw new wt({
            length: this.bytes.length,
            position: e
        })
    },
    decrementPosition(e) {
        if (e < 0) throw new Be({
            offset: e
        });
        let t = this.position - e;
        this.assertPosition(t), this.position = t
    },
    getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0
    },
    incrementPosition(e) {
        if (e < 0) throw new Be({
            offset: e
        });
        let t = this.position + e;
        this.assertPosition(t), this.position = t
    },
    inspectByte(e) {
        let t = e ? ? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectBytes(e, t) {
        let r = t ? ? this.position;
        return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e)
    },
    inspectUint8(e) {
        let t = e ? ? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectUint16(e) {
        let t = e ? ? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t)
    },
    inspectUint24(e) {
        let t = e ? ? this.position;
        return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    },
    inspectUint32(e) {
        let t = e ? ? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t)
    },
    pushByte(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushBytes(e) {
        this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
    },
    pushUint8(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushUint16(e) {
        this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
    },
    pushUint24(e) {
        this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3
    },
    pushUint32(e) {
        this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
    },
    readByte() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectByte();
        return this.position++, e
    },
    readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        let r = this.inspectBytes(e);
        return this.position += t ? ? e, r
    },
    readUint8() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint8();
        return this.position += 1, e
    },
    readUint16() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint16();
        return this.position += 2, e
    },
    readUint24() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint24();
        return this.position += 3, e
    },
    readUint32() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint32();
        return this.position += 4, e
    },
    get remaining() {
        return this.bytes.length - this.position
    },
    setPosition(e) {
        let t = this.position;
        return this.assertPosition(e), this.position = e, () => this.position = t
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        let e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
    }
};

function Gn(e, {
    recursiveReadLimit: t = 8192
} = {}) {
    let r = Object.create(ss);
    return r.bytes = e, r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), r.positionReadCount = new Map, r.recursiveReadLimit = t, r
}

function Vn(e, t = {}) {
    typeof t.size < "u" && P(e, {
        size: t.size
    });
    let r = B(e, t);
    return Xt(r, t)
}

function Wn(e, t = {}) {
    let r = e;
    if (typeof t.size < "u" && (P(r, {
            size: t.size
        }), r = Q(r)), r.length > 1 || r[0] > 1) throw new lt(r);
    return !!r[0]
}

function z(e, t = {}) {
    typeof t.size < "u" && P(e, {
        size: t.size
    });
    let r = B(e, t);
    return Mn(r, t)
}

function Zn(e, t = {}) {
    let r = e;
    return typeof t.size < "u" && (P(r, {
        size: t.size
    }), r = Q(r, {
        dir: "right"
    })), new TextDecoder().decode(r)
}

function N(e) {
    return typeof e[0] == "string" ? Ie(e) : is(e)
}

function is(e) {
    let t = 0;
    for (let o of e) t += o.length;
    let r = new Uint8Array(t),
        n = 0;
    for (let o of e) r.set(o, n), n += o.length;
    return r
}

function Ie(e) {
    return `0x${e.reduce((t,r)=>t+r.replace("0x",""),"")}`
}

function ce(e, t) {
    if (e.length !== t.length) throw new it({
        expectedLength: e.length,
        givenLength: t.length
    });
    let r = as({
            params: e,
            values: t
        }),
        n = or(r);
    return n.length === 0 ? "0x" : n
}

function as({
    params: e,
    values: t
}) {
    let r = [];
    for (let n = 0; n < e.length; n++) r.push(nr({
        param: e[n],
        value: t[n]
    }));
    return r
}

function nr({
    param: e,
    value: t
}) {
    let r = $t(e.type);
    if (r) {
        let [n, o] = r;
        return cs(t, {
            length: n,
            param: v(h({}, e), {
                type: o
            })
        })
    }
    if (e.type === "tuple") return ms(t, {
        param: e
    });
    if (e.type === "address") return us(t);
    if (e.type === "bool") return ds(t);
    if (e.type.startsWith("uint") || e.type.startsWith("int")) {
        let n = e.type.startsWith("int");
        return fs(t, {
            signed: n
        })
    }
    if (e.type.startsWith("bytes")) return ps(t, {
        param: e
    });
    if (e.type === "string") return ls(t);
    throw new ct(e.type, {
        docsPath: "/docs/contract/encodeAbiParameters"
    })
}

function or(e) {
    let t = 0;
    for (let i = 0; i < e.length; i++) {
        let {
            dynamic: s,
            encoded: a
        } = e[i];
        s ? t += 32 : t += x(a)
    }
    let r = [],
        n = [],
        o = 0;
    for (let i = 0; i < e.length; i++) {
        let {
            dynamic: s,
            encoded: a
        } = e[i];
        s ? (r.push(b(t + o, {
            size: 32
        })), n.push(a), o += x(a)) : r.push(a)
    }
    return N([...r, ...n])
}

function us(e) {
    if (!$(e)) throw new M({
        address: e
    });
    return {
        dynamic: !1,
        encoded: U(e.toLowerCase())
    }
}

function cs(e, {
    length: t,
    param: r
}) {
    let n = t === null;
    if (!Array.isArray(e)) throw new dt(e);
    if (!n && e.length !== t) throw new ot({
        expectedLength: t,
        givenLength: e.length,
        type: `${r.type}[${t}]`
    });
    let o = !1,
        i = [];
    for (let s = 0; s < e.length; s++) {
        let a = nr({
            param: r,
            value: e[s]
        });
        a.dynamic && (o = !0), i.push(a)
    }
    if (n || o) {
        let s = or(i);
        if (n) {
            let a = b(i.length, {
                size: 32
            });
            return {
                dynamic: !0,
                encoded: i.length > 0 ? N([a, s]) : a
            }
        }
        if (o) return {
            dynamic: !0,
            encoded: s
        }
    }
    return {
        dynamic: !1,
        encoded: N(i.map(({
            encoded: s
        }) => s))
    }
}

function ps(e, {
    param: t
}) {
    let [, r] = t.type.split("bytes"), n = x(e);
    if (!r) {
        let o = e;
        return n % 32 !== 0 && (o = U(o, {
            dir: "right",
            size: Math.ceil((e.length - 2) / 2 / 32) * 32
        })), {
            dynamic: !0,
            encoded: N([U(b(n, {
                size: 32
            })), o])
        }
    }
    if (n !== Number.parseInt(r)) throw new st({
        expectedSize: Number.parseInt(r),
        value: e
    });
    return {
        dynamic: !1,
        encoded: U(e, {
            dir: "right"
        })
    }
}

function ds(e) {
    if (typeof e != "boolean") throw new c(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: !1,
        encoded: U(Yt(e))
    }
}

function fs(e, {
    signed: t
}) {
    return {
        dynamic: !1,
        encoded: b(e, {
            size: 32,
            signed: t
        })
    }
}

function ls(e) {
    let t = Qt(e),
        r = Math.ceil(x(t) / 32),
        n = [];
    for (let o = 0; o < r; o++) n.push(U(Y(t, o * 32, (o + 1) * 32), {
        dir: "right"
    }));
    return {
        dynamic: !0,
        encoded: N([U(b(x(t), {
            size: 32
        })), ...n])
    }
}

function ms(e, {
    param: t
}) {
    let r = !1,
        n = [];
    for (let o = 0; o < t.components.length; o++) {
        let i = t.components[o],
            s = Array.isArray(e) ? o : i.name,
            a = nr({
                param: i,
                value: e[s]
            });
        n.push(a), a.dynamic && (r = !0)
    }
    return {
        dynamic: r,
        encoded: r ? or(n) : N(n.map(({
            encoded: o
        }) => o))
    }
}

function $t(e) {
    let t = e.match(/^(.*)\[(\d+)?\]$/);
    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}

function At(e, t) {
    let r = typeof t == "string" ? ie(t) : t,
        n = Gn(r);
    if (x(r) === 0 && e.length > 0) throw new oe;
    if (x(t) && x(t) < 32) throw new nt({
        data: typeof t == "string" ? t : B(t),
        params: e,
        size: x(t)
    });
    let o = 0,
        i = [];
    for (let s = 0; s < e.length; ++s) {
        let a = e[s];
        n.setPosition(o);
        let [u, p] = pe(n, a, {
            staticPosition: 0
        });
        o += p, i.push(u)
    }
    return i
}

function pe(e, t, {
    staticPosition: r
}) {
    let n = $t(t.type);
    if (n) {
        let [o, i] = n;
        return bs(e, v(h({}, t), {
            type: i
        }), {
            length: o,
            staticPosition: r
        })
    }
    if (t.type === "tuple") return ws(e, t, {
        staticPosition: r
    });
    if (t.type === "address") return ys(e);
    if (t.type === "bool") return hs(e);
    if (t.type.startsWith("bytes")) return gs(e, t, {
        staticPosition: r
    });
    if (t.type.startsWith("uint") || t.type.startsWith("int")) return xs(e, t);
    if (t.type === "string") return vs(e, {
        staticPosition: r
    });
    throw new pt(t.type, {
        docsPath: "/docs/contract/decodeAbiParameters"
    })
}
var qn = 32,
    sr = 32;

function ys(e) {
    let t = e.readBytes(32);
    return [Te(B(Kt(t, -20))), 32]
}

function bs(e, t, {
    length: r,
    staticPosition: n
}) {
    if (!r) {
        let s = z(e.readBytes(sr)),
            a = n + s,
            u = a + qn;
        e.setPosition(a);
        let p = z(e.readBytes(qn)),
            d = ke(t),
            f = 0,
            m = [];
        for (let l = 0; l < p; ++l) {
            e.setPosition(u + (d ? l * 32 : f));
            let [y, g] = pe(e, t, {
                staticPosition: u
            });
            f += g, m.push(y)
        }
        return e.setPosition(n + 32), [m, 32]
    }
    if (ke(t)) {
        let s = z(e.readBytes(sr)),
            a = n + s,
            u = [];
        for (let p = 0; p < r; ++p) {
            e.setPosition(a + p * 32);
            let [d] = pe(e, t, {
                staticPosition: a
            });
            u.push(d)
        }
        return e.setPosition(n + 32), [u, 32]
    }
    let o = 0,
        i = [];
    for (let s = 0; s < r; ++s) {
        let [a, u] = pe(e, t, {
            staticPosition: n + o
        });
        o += u, i.push(a)
    }
    return [i, o]
}

function hs(e) {
    return [Wn(e.readBytes(32), {
        size: 32
    }), 32]
}

function gs(e, t, {
    staticPosition: r
}) {
    let [n, o] = t.type.split("bytes");
    if (!o) {
        let s = z(e.readBytes(32));
        e.setPosition(r + s);
        let a = z(e.readBytes(32));
        if (a === 0) return e.setPosition(r + 32), ["0x", 32];
        let u = e.readBytes(a);
        return e.setPosition(r + 32), [B(u), 32]
    }
    return [B(e.readBytes(Number.parseInt(o), 32)), 32]
}

function xs(e, t) {
    let r = t.type.startsWith("int"),
        n = Number.parseInt(t.type.split("int")[1] || "256"),
        o = e.readBytes(32);
    return [n > 48 ? Vn(o, {
        signed: r
    }) : z(o, {
        signed: r
    }), 32]
}

function ws(e, t, {
    staticPosition: r
}) {
    let n = t.components.length === 0 || t.components.some(({
            name: s
        }) => !s),
        o = n ? [] : {},
        i = 0;
    if (ke(t)) {
        let s = z(e.readBytes(sr)),
            a = r + s;
        for (let u = 0; u < t.components.length; ++u) {
            let p = t.components[u];
            e.setPosition(a + i);
            let [d, f] = pe(e, p, {
                staticPosition: a
            });
            i += f, o[n ? u : p ? .name] = d
        }
        return e.setPosition(r + 32), [o, 32]
    }
    for (let s = 0; s < t.components.length; ++s) {
        let a = t.components[s],
            [u, p] = pe(e, a, {
                staticPosition: r
            });
        o[n ? s : a ? .name] = u, i += p
    }
    return [o, i]
}

function vs(e, {
    staticPosition: t
}) {
    let r = z(e.readBytes(32)),
        n = t + r;
    e.setPosition(n);
    let o = z(e.readBytes(32));
    if (o === 0) return e.setPosition(t + 32), ["", 32];
    let i = e.readBytes(o, 32),
        s = Zn(Q(i));
    return e.setPosition(t + 32), [s, 32]
}

function ke(e) {
    let {
        type: t
    } = e;
    if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
    if (t === "tuple") return e.components ? .some(ke);
    let r = $t(e.type);
    return !!(r && ke(v(h({}, e), {
        type: r[1]
    })))
}

function Pt(e) {
    let {
        abi: t,
        data: r
    } = e, n = Y(r, 0, 4);
    if (n === "0x") throw new oe;
    let i = [...t || [], vn, $n].find(s => s.type === "error" && n === ae(j(s)));
    if (!i) throw new se(n, {
        docsPath: "/docs/contract/decodeErrorResult"
    });
    return {
        abiItem: i,
        args: "inputs" in i && i.inputs && i.inputs.length > 0 ? At(i.inputs, Y(r, 4)) : void 0,
        errorName: i.name
    }
}
var C = (e, t, r) => JSON.stringify(e, (n, o) => {
    let i = typeof o == "bigint" ? o.toString() : o;
    return typeof t == "function" ? t(n, i) : i
}, r);

function ir({
    abiItem: e,
    args: t,
    includeFunctionName: r = !0,
    includeName: n = !1
}) {
    if ("name" in e && "inputs" in e && e.inputs) return `${r?e.name:""}(${e.inputs.map((o,i)=>`${n&&o.name?`${o.name}: `:""}${typeof t[i]=="object"?C(t[i]):t[i]}`).join(", ")})`
}
var Jn = xt;

function de(e) {
    let {
        abi: t,
        args: r = [],
        name: n
    } = e, o = T(n, {
        strict: !1
    }), i = t.filter(a => o ? a.type === "function" ? ae(a) === n : a.type === "event" ? Jn(a) === n : !1 : "name" in a && a.name === n);
    if (i.length === 0) return;
    if (i.length === 1) return i[0];
    let s;
    for (let a of i) {
        if (!("inputs" in a)) continue;
        if (!r || r.length === 0) {
            if (!a.inputs || a.inputs.length === 0) return a;
            continue
        }
        if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== r.length) continue;
        if (r.every((p, d) => {
                let f = "inputs" in a && a.inputs[d];
                return f ? ar(p, f) : !1
            })) {
            if (s && "inputs" in s && s.inputs) {
                let p = Kn(a.inputs, s.inputs, r);
                if (p) throw new ut({
                    abiItem: a,
                    type: p[0]
                }, {
                    abiItem: s,
                    type: p[1]
                })
            }
            s = a
        }
    }
    return s || i[0]
}

function ar(e, t) {
    let r = typeof e,
        n = t.type;
    switch (n) {
        case "address":
            return $(e, {
                strict: !1
            });
        case "bool":
            return r === "boolean";
        case "function":
            return r === "string";
        case "string":
            return r === "string";
        default:
            return n === "tuple" && "components" in t ? Object.values(t.components).every((o, i) => ar(Object.values(e)[i], o)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n) ? r === "number" || r === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n) ? r === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n) ? Array.isArray(e) && e.every(o => ar(o, v(h({}, t), {
                type: n.replace(/(\[[0-9]{0,}\])$/, "")
            }))) : !1
    }
}

function Kn(e, t, r) {
    for (let n in e) {
        let o = e[n],
            i = t[n];
        if (o.type === "tuple" && i.type === "tuple" && "components" in o && "components" in i) return Kn(o.components, i.components, r[n]);
        let s = [o.type, i.type];
        if (s.includes("address") && s.includes("bytes20") ? !0 : s.includes("address") && s.includes("string") ? $(r[n], {
                strict: !1
            }) : s.includes("address") && s.includes("bytes") ? $(r[n], {
                strict: !1
            }) : !1) return s
    }
}
var Xn = {
        gwei: 9,
        wei: 18
    },
    Yn = {
        ether: -9,
        wei: 9
    },
    yc = {
        ether: -18,
        gwei: -9
    };

function Mt(e, t) {
    let r = e.toString(),
        n = r.startsWith("-");
    n && (r = r.slice(1)), r = r.padStart(t, "0");
    let [o, i] = [r.slice(0, r.length - t), r.slice(r.length - t)];
    return i = i.replace(/(0+)$/, ""), `${n?"-":""}${o||"0"}${i?`.${i}`:""}`
}

function St(e, t = "wei") {
    return Mt(e, Xn[t])
}

function S(e, t = "wei") {
    return Mt(e, Yn[t])
}
var Et = class extends c {
        constructor({
            address: t
        }) {
            super(`State for account "${t}" is set multiple times.`, {
                name: "AccountStateConflictError"
            })
        }
    },
    Tt = class extends c {
        constructor() {
            super("state and stateDiff are set on the same account.", {
                name: "StateAssignmentConflictError"
            })
        }
    };

function Qn(e) {
    return e.reduce((t, {
        slot: r,
        value: n
    }) => `${t}        ${r}: ${n}
`, "")
}

function eo(e) {
    return e.reduce((t, o) => {
        var i = o,
            {
                address: r
            } = i,
            n = F(i, ["address"]);
        let s = `${t}    ${r}:
`;
        return n.nonce && (s += `      nonce: ${n.nonce}
`), n.balance && (s += `      balance: ${n.balance}
`), n.code && (s += `      code: ${n.code}
`), n.state && (s += `      state:
`, s += Qn(n.state)), n.stateDiff && (s += `      stateDiff:
`, s += Qn(n.stateDiff)), s
    }, `  State Override:
`).slice(0, -1)
}

function Oe(e) {
    let t = Object.entries(e).map(([n, o]) => o === void 0 || o === !1 ? null : [n, o]).filter(Boolean),
        r = t.reduce((n, [o]) => Math.max(n, o.length), 0);
    return t.map(([n, o]) => `  ${`${n}:`.padEnd(r+1)}  ${o}`).join(`
`)
}
var Bt = class extends c {
    constructor() {
        super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.", "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`), {
            name: "FeeConflictError"
        })
    }
};
var to = class extends c {
    constructor({
        transaction: t
    }) {
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: ["Provided Transaction:", "{", Oe(t), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- an EIP-7702 Transaction with `authorizationList`, or", "- a Legacy Transaction with `gasPrice`"],
            name: "InvalidSerializableTransactionError"
        })
    }
};
var ro = class extends c {
        constructor(t, {
            account: r,
            docsPath: n,
            chain: o,
            data: i,
            gas: s,
            gasPrice: a,
            maxFeePerGas: u,
            maxPriorityFeePerGas: p,
            nonce: d,
            to: f,
            value: m
        }) {
            let l = Oe({
                chain: o && `${o?.name} (id: ${o?.id})`,
                from: r ? .address,
                to: f,
                value: typeof m < "u" && `${St(m)} ${o?.nativeCurrency?.symbol||"ETH"}`,
                data: i,
                gas: s,
                gasPrice: typeof a < "u" && `${S(a)} gwei`,
                maxFeePerGas: typeof u < "u" && `${S(u)} gwei`,
                maxPriorityFeePerGas: typeof p < "u" && `${S(p)} gwei`,
                nonce: d
            });
            super(t.shortMessage, {
                cause: t,
                docsPath: n,
                metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Request Arguments:", l].filter(Boolean),
                name: "TransactionExecutionError"
            }), Object.defineProperty(this, "cause", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.cause = t
        }
    },
    no = class extends c {
        constructor({
            blockHash: t,
            blockNumber: r,
            blockTag: n,
            hash: o,
            index: i
        }) {
            let s = "Transaction";
            n && i !== void 0 && (s = `Transaction at block time "${n}" at index "${i}"`), t && i !== void 0 && (s = `Transaction at block hash "${t}" at index "${i}"`), r && i !== void 0 && (s = `Transaction at block number "${r}" at index "${i}"`), o && (s = `Transaction with hash "${o}"`), super(`${s} could not be found.`, {
                name: "TransactionNotFoundError"
            })
        }
    },
    oo = class extends c {
        constructor({
            hash: t
        }) {
            super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
                name: "TransactionReceiptNotFoundError"
            })
        }
    },
    so = class extends c {
        constructor({
            hash: t
        }) {
            super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, {
                name: "WaitForTransactionReceiptTimeoutError"
            })
        }
    };
var io = e => e,
    ee = e => e;
var It = class extends c {
        constructor(t, {
            account: r,
            docsPath: n,
            chain: o,
            data: i,
            gas: s,
            gasPrice: a,
            maxFeePerGas: u,
            maxPriorityFeePerGas: p,
            nonce: d,
            to: f,
            value: m,
            stateOverride: l
        }) {
            let y = r ? ne(r) : void 0,
                g = Oe({
                    from: y ? .address,
                    to: f,
                    value: typeof m < "u" && `${St(m)} ${o?.nativeCurrency?.symbol||"ETH"}`,
                    data: i,
                    gas: s,
                    gasPrice: typeof a < "u" && `${S(a)} gwei`,
                    maxFeePerGas: typeof u < "u" && `${S(u)} gwei`,
                    maxPriorityFeePerGas: typeof p < "u" && `${S(p)} gwei`,
                    nonce: d
                });
            l && (g += `
${eo(l)}`), super(t.shortMessage, {
                cause: t,
                docsPath: n,
                metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Raw Call Arguments:", g].filter(Boolean),
                name: "CallExecutionError"
            }), Object.defineProperty(this, "cause", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.cause = t
        }
    },
    ao = class extends c {
        constructor(t, {
            abi: r,
            args: n,
            contractAddress: o,
            docsPath: i,
            functionName: s,
            sender: a
        }) {
            let u = de({
                    abi: r,
                    args: n,
                    name: s
                }),
                p = u ? ir({
                    abiItem: u,
                    args: n,
                    includeFunctionName: !1,
                    includeName: !1
                }) : void 0,
                d = u ? j(u, {
                    includeName: !0
                }) : void 0,
                f = Oe({
                    address: o && io(o),
                    function: d,
                    args: p && p !== "()" && `${[...Array(s?.length??0).keys()].map(()=>" ").join("")}${p}`,
                    sender: a
                });
            super(t.shortMessage || `An unknown error occurred while executing the contract function "${s}".`, {
                cause: t,
                docsPath: i,
                metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], f && "Contract Call:", f].filter(Boolean),
                name: "ContractFunctionExecutionError"
            }), Object.defineProperty(this, "abi", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "args", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "cause", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "contractAddress", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "formattedArgs", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "functionName", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "sender", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.abi = r, this.args = n, this.cause = t, this.contractAddress = o, this.functionName = s, this.sender = a
        }
    },
    uo = class extends c {
        constructor({
            abi: t,
            data: r,
            functionName: n,
            message: o
        }) {
            let i, s, a, u;
            if (r && r !== "0x") try {
                s = Pt({
                    abi: t,
                    data: r
                });
                let {
                    abiItem: d,
                    errorName: f,
                    args: m
                } = s;
                if (f === "Error") u = m[0];
                else if (f === "Panic") {
                    let [l] = m;
                    u = wn[l]
                } else {
                    let l = d ? j(d, {
                            includeName: !0
                        }) : void 0,
                        y = d && m ? ir({
                            abiItem: d,
                            args: m,
                            includeFunctionName: !1,
                            includeName: !1
                        }) : void 0;
                    a = [l ? `Error: ${l}` : "", y && y !== "()" ? `       ${[...Array(f?.length??0).keys()].map(()=>" ").join("")}${y}` : ""]
                }
            } catch (d) {
                i = d
            } else o && (u = o);
            let p;
            i instanceof se && (p = i.signature, a = [`Unable to decode signature "${p}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`]), super(u && u !== "execution reverted" || p ? [`The contract function "${n}" reverted with the following ${p?"signature":"reason"}:`, u || p].join(`
`) : `The contract function "${n}" reverted.`, {
                cause: i,
                metaMessages: a,
                name: "ContractFunctionRevertedError"
            }), Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "reason", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "signature", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.data = s, this.reason = u, this.signature = p
        }
    },
    co = class extends c {
        constructor({
            functionName: t
        }) {
            super(`The contract function "${t}" returned no data ("0x").`, {
                metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${t}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."],
                name: "ContractFunctionZeroDataError"
            })
        }
    },
    kt = class extends c {
        constructor({
            factory: t
        }) {
            super(`Deployment for counterfactual contract call failed${t?` for factory "${t}".`:""}`, {
                metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],
                name: "CounterfactualDeploymentFailedError"
            })
        }
    },
    Ot = class extends c {
        constructor({
            data: t,
            message: r
        }) {
            super(r || "", {
                name: "RawContractError"
            }), Object.defineProperty(this, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3
            }), Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.data = t
        }
    };
var ur = "/docs/contract/decodeFunctionResult";

function po(e) {
    let {
        abi: t,
        args: r,
        functionName: n,
        data: o
    } = e, i = t[0];
    if (n) {
        let a = de({
            abi: t,
            args: r,
            name: n
        });
        if (!a) throw new G(n, {
            docsPath: ur
        });
        i = a
    }
    if (i.type !== "function") throw new G(void 0, {
        docsPath: ur
    });
    if (!i.outputs) throw new at(i.name, {
        docsPath: ur
    });
    let s = At(i.outputs, o);
    if (s && s.length > 1) return s;
    if (s && s.length === 1) return s[0]
}
var cr = "/docs/contract/encodeDeployData";

function pr(e) {
    let {
        abi: t,
        args: r,
        bytecode: n
    } = e;
    if (!r || r.length === 0) return n;
    let o = t.find(s => "type" in s && s.type === "constructor");
    if (!o) throw new rt({
        docsPath: cr
    });
    if (!("inputs" in o)) throw new Ae({
        docsPath: cr
    });
    if (!o.inputs || o.inputs.length === 0) throw new Ae({
        docsPath: cr
    });
    let i = ce(o.inputs, r);
    return Ie([n, i])
}
var fo = "/docs/contract/encodeFunctionData";

function lo(e) {
    let {
        abi: t,
        args: r,
        functionName: n
    } = e, o = t[0];
    if (n) {
        let i = de({
            abi: t,
            args: r,
            name: n
        });
        if (!i) throw new G(n, {
            docsPath: fo
        });
        o = i
    }
    if (o.type !== "function") throw new G(void 0, {
        docsPath: fo
    });
    return {
        abi: [o],
        functionName: ae(j(o))
    }
}

function mo(e) {
    let {
        args: t
    } = e, {
        abi: r,
        functionName: n
    } = e.abi.length === 1 && e.functionName ? .startsWith("0x") ? e : lo(e), o = r[0], i = n, s = "inputs" in o && o.inputs ? ce(o.inputs, t ? ? []) : void 0;
    return Ie([i, s ? ? "0x"])
}

function yo({
    blockNumber: e,
    chain: t,
    contract: r
}) {
    let n = t ? .contracts ? .[r];
    if (!n) throw new X({
        chain: t,
        contract: {
            name: r
        }
    });
    if (e && n.blockCreated && n.blockCreated > e) throw new X({
        blockNumber: e,
        chain: t,
        contract: {
            name: r,
            blockCreated: n.blockCreated
        }
    });
    return n.address
}
var H = class extends c {
    constructor({
        cause: t,
        message: r
    } = {}) {
        let n = r ? .replace("execution reverted: ", "") ? .replace("execution reverted", "");
        super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`, {
            cause: t,
            name: "ExecutionRevertedError"
        })
    }
};
Object.defineProperty(H, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
});
Object.defineProperty(H, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
var Z = class extends c {
    constructor({
        cause: t,
        maxFeePerGas: r
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${r?` = ${S(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: t,
            name: "FeeCapTooHighError"
        })
    }
};
Object.defineProperty(Z, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
var fe = class extends c {
    constructor({
        cause: t,
        maxFeePerGas: r
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${r?` = ${S(r)}`:""} gwei) cannot be lower than the block base fee.`, {
            cause: t,
            name: "FeeCapTooLowError"
        })
    }
};
Object.defineProperty(fe, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
var le = class extends c {
    constructor({
        cause: t,
        nonce: r
    } = {}) {
        super(`Nonce provided for the transaction ${r?`(${r}) `:""}is higher than the next one expected.`, {
            cause: t,
            name: "NonceTooHighError"
        })
    }
};
Object.defineProperty(le, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
var me = class extends c {
    constructor({
        cause: t,
        nonce: r
    } = {}) {
        super([`Nonce provided for the transaction ${r?`(${r}) `:""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`), {
            cause: t,
            name: "NonceTooLowError"
        })
    }
};
Object.defineProperty(me, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
var ye = class extends c {
    constructor({
        cause: t,
        nonce: r
    } = {}) {
        super(`Nonce provided for the transaction ${r?`(${r}) `:""}exceeds the maximum allowed nonce.`, {
            cause: t,
            name: "NonceMaxValueError"
        })
    }
};
Object.defineProperty(ye, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
var be = class extends c {
    constructor({
        cause: t
    } = {}) {
        super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`), {
            cause: t,
            metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."],
            name: "InsufficientFundsError"
        })
    }
};
Object.defineProperty(be, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds/
});
var he = class extends c {
    constructor({
        cause: t,
        gas: r
    } = {}) {
        super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: t,
            name: "IntrinsicGasTooHighError"
        })
    }
};
Object.defineProperty(he, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
var ge = class extends c {
    constructor({
        cause: t,
        gas: r
    } = {}) {
        super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction is too low.`, {
            cause: t,
            name: "IntrinsicGasTooLowError"
        })
    }
};
Object.defineProperty(ge, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
var xe = class extends c {
    constructor({
        cause: t
    }) {
        super("The transaction type is not supported for this chain.", {
            cause: t,
            name: "TransactionTypeNotSupportedError"
        })
    }
};
Object.defineProperty(xe, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
var q = class extends c {
    constructor({
        cause: t,
        maxPriorityFeePerGas: r,
        maxFeePerGas: n
    } = {}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${S(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${S(n)} gwei`:""}).`].join(`
`), {
            cause: t,
            name: "TipAboveFeeCapError"
        })
    }
};
Object.defineProperty(q, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
var we = class extends c {
    constructor({
        cause: t
    }) {
        super(`An error occurred while executing: ${t?.shortMessage}`, {
            cause: t,
            name: "UnknownNodeError"
        })
    }
};
var je = class extends c {
    constructor({
        body: t,
        cause: r,
        details: n,
        headers: o,
        status: i,
        url: s
    }) {
        super("HTTP request failed.", {
            cause: r,
            details: n,
            metaMessages: [i && `Status: ${i}`, `URL: ${ee(s)}`, t && `Request body: ${C(t)}`].filter(Boolean),
            name: "HttpRequestError"
        }), Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.body = t, this.headers = o, this.status = i, this.url = s
    }
};
var jt = class extends c {
    constructor({
        body: t,
        error: r,
        url: n
    }) {
        super("RPC Request failed.", {
            cause: r,
            details: r.message,
            metaMessages: [`URL: ${ee(n)}`, `Request body: ${C(t)}`],
            name: "RpcRequestError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.code = r.code
    }
};
var bo = class extends c {
    constructor({
        body: t,
        url: r
    }) {
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [`URL: ${ee(r)}`, `Request body: ${C(t)}`],
            name: "TimeoutError"
        })
    }
};
var $s = -1,
    A = class extends c {
        constructor(t, {
            code: r,
            docsPath: n,
            metaMessages: o,
            name: i,
            shortMessage: s
        }) {
            super(s, {
                cause: t,
                docsPath: n,
                metaMessages: o || t ? .metaMessages,
                name: i || "RpcError"
            }), Object.defineProperty(this, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.name = i || t.name, this.code = t instanceof jt ? t.code : r ? ? $s
        }
    },
    J = class extends A {
        constructor(t, r) {
            super(t, r), Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.data = r.data
        }
    },
    dr = class e extends A {
        constructor(t) {
            super(t, {
                code: e.code,
                name: "ParseRpcError",
                shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            })
        }
    };
Object.defineProperty(dr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
var fr = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object."
        })
    }
};
Object.defineProperty(fr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
var lr = class e extends A {
    constructor(t, {
        method: r
    } = {}) {
        super(t, {
            code: e.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${r?` "${r}"`:""} does not exist / is not available.`
        })
    }
};
Object.defineProperty(lr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
var mr = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InvalidParamsRpcError",
            shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
};
Object.defineProperty(mr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
var yr = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received."
        })
    }
};
Object.defineProperty(yr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
var br = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InvalidInputRpcError",
            shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
};
Object.defineProperty(br, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
var hr = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError"
        })
    }
};
Object.defineProperty(hr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
var gr = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available."
        })
    }
};
Object.defineProperty(gr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
var xr = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed."
        })
    }
};
Object.defineProperty(xr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
var wr = class e extends A {
    constructor(t, {
        method: r
    } = {}) {
        super(t, {
            code: e.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${r?` "${r}"`:""} is not implemented.`
        })
    }
};
Object.defineProperty(wr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
var vr = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit."
        })
    }
};
Object.defineProperty(vr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
var $r = class e extends A {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported."
        })
    }
};
Object.defineProperty($r, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
var Ar = class e extends J {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request."
        })
    }
};
Object.defineProperty(Ar, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
var Pr = class e extends J {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "UnauthorizedProviderError",
            shortMessage: "The requested method and/or account has not been authorized by the user."
        })
    }
};
Object.defineProperty(Pr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
var Mr = class e extends J {
    constructor(t, {
        method: r
    } = {}) {
        super(t, {
            code: e.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${r?` " ${r}"`:""}.`
        })
    }
};
Object.defineProperty(Mr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
var Sr = class e extends J {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains."
        })
    }
};
Object.defineProperty(Sr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
var Er = class e extends J {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ChainDisconnectedError",
            shortMessage: "The Provider is not connected to the requested chain."
        })
    }
};
Object.defineProperty(Er, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
var Tr = class e extends J {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain."
        })
    }
};
Object.defineProperty(Tr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
var ho = class extends A {
    constructor(t) {
        super(t, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred."
        })
    }
};

function go(e, t) {
    let r = (e.details || "").toLowerCase(),
        n = e instanceof c ? e.walk(o => o.code === H.code) : e;
    return n instanceof c ? new H({
        cause: e,
        message: n.details
    }) : H.nodeMessage.test(r) ? new H({
        cause: e,
        message: e.details
    }) : Z.nodeMessage.test(r) ? new Z({
        cause: e,
        maxFeePerGas: t ? .maxFeePerGas
    }) : fe.nodeMessage.test(r) ? new fe({
        cause: e,
        maxFeePerGas: t ? .maxFeePerGas
    }) : le.nodeMessage.test(r) ? new le({
        cause: e,
        nonce: t ? .nonce
    }) : me.nodeMessage.test(r) ? new me({
        cause: e,
        nonce: t ? .nonce
    }) : ye.nodeMessage.test(r) ? new ye({
        cause: e,
        nonce: t ? .nonce
    }) : be.nodeMessage.test(r) ? new be({
        cause: e
    }) : he.nodeMessage.test(r) ? new he({
        cause: e,
        gas: t ? .gas
    }) : ge.nodeMessage.test(r) ? new ge({
        cause: e,
        gas: t ? .gas
    }) : xe.nodeMessage.test(r) ? new xe({
        cause: e
    }) : q.nodeMessage.test(r) ? new q({
        cause: e,
        maxFeePerGas: t ? .maxFeePerGas,
        maxPriorityFeePerGas: t ? .maxPriorityFeePerGas
    }) : new we({
        cause: e
    })
}

function xo(e, n) {
    var o = n,
        {
            docsPath: t
        } = o,
        r = F(o, ["docsPath"]);
    let i = (() => {
        let s = go(e, r);
        return s instanceof we ? e : s
    })();
    return new It(i, h({
        docsPath: t
    }, r))
}

function wo(e, {
    format: t
}) {
    if (!t) return {};
    let r = {};

    function n(i) {
        let s = Object.keys(i);
        for (let a of s) a in e && (r[a] = e[a]), i[a] && typeof i[a] == "object" && !Array.isArray(i[a]) && n(i[a])
    }
    let o = t(e || {});
    return n(o), r
}
var As = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3",
    eip7702: "0x4"
};

function vo(e) {
    let t = {};
    return typeof e.authorizationList < "u" && (t.authorizationList = Ps(e.authorizationList)), typeof e.accessList < "u" && (t.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map(r => B(r)) : t.blobs = e.blobs), typeof e.data < "u" && (t.data = e.data), typeof e.from < "u" && (t.from = e.from), typeof e.gas < "u" && (t.gas = b(e.gas)), typeof e.gasPrice < "u" && (t.gasPrice = b(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = b(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = b(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = b(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (t.nonce = b(e.nonce)), typeof e.to < "u" && (t.to = e.to), typeof e.type < "u" && (t.type = As[e.type]), typeof e.value < "u" && (t.value = b(e.value)), t
}

function Ps(e) {
    return e.map(t => h(h({
        address: t.contractAddress,
        r: t.r,
        s: t.s,
        chainId: b(t.chainId),
        nonce: b(t.nonce)
    }, typeof t.yParity < "u" ? {
        yParity: b(t.yParity)
    } : {}), typeof t.v < "u" && typeof t.yParity > "u" ? {
        v: b(t.v)
    } : {}))
}
var Br = new Map;

function $o({
    fn: e,
    id: t,
    shouldSplitBatch: r,
    wait: n = 0,
    sort: o
}) {
    let i = () => O(this, null, function*() {
            let f = u();
            s();
            let m = f.map(({
                args: l
            }) => l);
            m.length !== 0 && e(m).then(l => {
                o && Array.isArray(l) && l.sort(o);
                for (let y = 0; y < f.length; y++) {
                    let {
                        pendingPromise: g
                    } = f[y];
                    g.resolve ? .([l[y], l])
                }
            }).catch(l => {
                for (let y = 0; y < f.length; y++) {
                    let {
                        pendingPromise: g
                    } = f[y];
                    g.reject ? .(l)
                }
            })
        }),
        s = () => Br.delete(t),
        a = () => u().map(({
            args: f
        }) => f),
        u = () => Br.get(t) || [],
        p = f => Br.set(t, [...u(), f]);
    return {
        flush: s,
        schedule(f) {
            return O(this, null, function*() {
                let m = {},
                    l = new Promise((R, K) => {
                        m.resolve = R, m.reject = K
                    });
                return r ? .([...a(), f]) && i(), u().length > 0 ? (p({
                    args: f,
                    pendingPromise: m
                }), l) : (p({
                    args: f,
                    pendingPromise: m
                }), setTimeout(i, n), l)
            })
        }
    }
}

function Ao(e) {
    if (!(!e || e.length === 0)) return e.reduce((t, {
        slot: r,
        value: n
    }) => {
        if (r.length !== 66) throw new Se({
            size: r.length,
            targetSize: 66,
            type: "hex"
        });
        if (n.length !== 66) throw new Se({
            size: n.length,
            targetSize: 66,
            type: "hex"
        });
        return t[r] = n, t
    }, {})
}

function Ms(e) {
    let {
        balance: t,
        nonce: r,
        state: n,
        stateDiff: o,
        code: i
    } = e, s = {};
    if (i !== void 0 && (s.code = i), t !== void 0 && (s.balance = b(t)), r !== void 0 && (s.nonce = b(r)), n !== void 0 && (s.state = Ao(n)), o !== void 0) {
        if (s.state) throw new Tt;
        s.stateDiff = Ao(o)
    }
    return s
}

function Po(e) {
    if (!e) return;
    let t = {};
    for (let r of e) {
        let n = r,
            {
                address: o
            } = n,
            i = F(n, ["address"]);
        if (!$(o, {
                strict: !1
            })) throw new M({
            address: o
        });
        if (t[o]) throw new Et({
            address: o
        });
        t[o] = Ms(i)
    }
    return t
}

function Mo(e) {
    let {
        account: t,
        gasPrice: r,
        maxFeePerGas: n,
        maxPriorityFeePerGas: o,
        to: i
    } = e, s = t ? ne(t) : void 0;
    if (s && !$(s.address)) throw new M({
        address: s.address
    });
    if (i && !$(i)) throw new M({
        address: i
    });
    if (typeof r < "u" && (typeof n < "u" || typeof o < "u")) throw new Bt;
    if (n && n > 2 n ** 256 n - 1 n) throw new Z({
        maxFeePerGas: n
    });
    if (o && n && o > n) throw new q({
        maxFeePerGas: n,
        maxPriorityFeePerGas: o
    })
}

function So(e, t) {
    return O(this, null, function*() {
        let zr = t,
            {
                account: r = e.account,
                batch: n = !!e.batch ? .multicall,
                blockNumber: o,
                blockTag: i = "latest",
                accessList: s,
                blobs: a,
                code: u,
                data: p,
                factory: d,
                factoryData: f,
                gas: m,
                gasPrice: l,
                maxFeePerBlobGas: y,
                maxFeePerGas: g,
                maxPriorityFeePerGas: R,
                nonce: K,
                to: k,
                value: ze,
                stateOverride: To
            } = zr,
            Bo = F(zr, ["account", "batch", "blockNumber", "blockTag", "accessList", "blobs", "code", "data", "factory", "factoryData", "gas", "gasPrice", "maxFeePerBlobGas", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "value", "stateOverride"]),
            Ir = r ? ne(r) : void 0;
        if (u && (d || f)) throw new c("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
        if (u && k) throw new c("Cannot provide both `code` & `to` as parameters.");
        let kr = u && p,
            Or = d && f && k && p,
            jr = kr || Or,
            Io = kr ? Ts({
                code: u,
                data: p
            }) : Or ? Bs({
                data: p,
                factory: d,
                factoryData: f,
                to: k
            }) : p;
        try {
            Mo(t);
            let te = (o ? b(o) : void 0) || i,
                ve = Po(To),
                Ce = e.chain ? .formatters ? .transactionRequest ? .format,
                Re = (Ce || vo)(v(h({}, wo(Bo, {
                    format: Ce
                })), {
                    from: Ir ? .address,
                    accessList: s,
                    blobs: a,
                    data: Io,
                    gas: m,
                    gasPrice: l,
                    maxFeePerBlobGas: y,
                    maxFeePerGas: g,
                    maxPriorityFeePerGas: R,
                    nonce: K,
                    to: jr ? void 0 : k,
                    value: ze
                }));
            if (n && Ss({
                    request: Re
                }) && !ve) try {
                return yield Es(e, v(h({}, Re), {
                    blockNumber: o,
                    blockTag: i
                }))
            } catch (Lt) {
                if (!(Lt instanceof $e) && !(Lt instanceof X)) throw Lt
            }
            let Cr = yield e.request({
                method: "eth_call",
                params: ve ? [Re, te, ve] : [Re, te]
            });
            return Cr === "0x" ? {
                data: void 0
            } : {
                data: Cr
            }
        } catch (Ft) {
            let te = Is(Ft),
                {
                    offchainLookup: ve,
                    offchainLookupSignature: Ce
                } = yield
            import ("./chunk-FWDNUC5I.js");
            if (e.ccipRead !== !1 && te ? .slice(0, 10) === Ce && k) return {
                data: yield ve(e, {
                    data: te,
                    to: k
                })
            };
            throw jr && te ? .slice(0, 10) === "0x101bb98d" ? new kt({
                factory: d
            }) : xo(Ft, v(h({}, t), {
                account: Ir,
                chain: e.chain
            }))
        }
    })
}

function Ss({
    request: e
}) {
    let o = e,
        {
            data: t,
            to: r
        } = o,
        n = F(o, ["data", "to"]);
    return !(!t || t.startsWith(mn) || !r || Object.values(n).filter(i => typeof i < "u").length > 0)
}

function Es(e, t) {
    return O(this, null, function*() {
        let {
            batchSize: r = 1024,
            wait: n = 0
        } = typeof e.batch ? .multicall == "object" ? e.batch.multicall : {}, {
            blockNumber: o,
            blockTag: i = "latest",
            data: s,
            multicallAddress: a,
            to: u
        } = t, p = a;
        if (!p) {
            if (!e.chain) throw new $e;
            p = yo({
                blockNumber: o,
                chain: e.chain,
                contract: "multicall3"
            })
        }
        let f = (o ? b(o) : void 0) || i,
            {
                schedule: m
            } = $o({
                id: `${e.uid}.${f}`,
                wait: n,
                shouldSplitBatch(g) {
                    return g.reduce((K, {
                        data: k
                    }) => K + (k.length - 2), 0) > r * 2
                },
                fn: g => O(this, null, function*() {
                    let R = g.map(ze => ({
                            allowFailure: !0,
                            callData: ze.data,
                            target: ze.to
                        })),
                        K = mo({
                            abi: Zt,
                            args: [R],
                            functionName: "aggregate3"
                        }),
                        k = yield e.request({
                            method: "eth_call",
                            params: [{
                                data: K,
                                to: p
                            }, f]
                        });
                    return po({
                        abi: Zt,
                        args: [R],
                        functionName: "aggregate3",
                        data: k || "0x"
                    })
                })
            }),
            [{
                returnData: l,
                success: y
            }] = yield m({
                data: s,
                to: u
            });
        if (!y) throw new Ot({
            data: l
        });
        return l === "0x" ? {
            data: void 0
        } : {
            data: l
        }
    })
}

function Ts(e) {
    let {
        code: t,
        data: r
    } = e;
    return pr({
        abi: Qe(["constructor(bytes, bytes)"]),
        bytecode: yn,
        args: [t, r]
    })
}

function Bs(e) {
    let {
        data: t,
        factory: r,
        factoryData: n,
        to: o
    } = e;
    return pr({
        abi: Qe(["constructor(address, bytes, address, bytes)"]),
        bytecode: bn,
        args: [o, t, r, n]
    })
}

function Is(e) {
    if (!(e instanceof c)) return;
    let t = e.walk();
    return typeof t ? .data == "object" ? t.data ? .data : t.data
}
var zt = class extends c {
        constructor({
            callbackSelector: t,
            cause: r,
            data: n,
            extraData: o,
            sender: i,
            urls: s
        }) {
            super(r.shortMessage || "An error occurred while fetching for an offchain result.", {
                cause: r,
                metaMessages: [...r.metaMessages || [], r.metaMessages ? .length ? "" : [], "Offchain Gateway Call:", s && ["  Gateway URL(s):", ...s.map(a => `    ${ee(a)}`)], `  Sender: ${i}`, `  Data: ${n}`, `  Callback selector: ${t}`, `  Extra data: ${o}`].flat(),
                name: "OffchainLookupError"
            })
        }
    },
    Ct = class extends c {
        constructor({
            result: t,
            url: r
        }) {
            super("Offchain gateway response is malformed. Response data must be a hex value.", {
                metaMessages: [`Gateway URL: ${ee(r)}`, `Response: ${C(t)}`],
                name: "OffchainLookupResponseMalformedError"
            })
        }
    },
    Rt = class extends c {
        constructor({
            sender: t,
            to: r
        }) {
            super("Reverted sender address does not match target contract address (`to`).", {
                metaMessages: [`Contract address: ${r}`, `OffchainLookup sender address: ${t}`],
                name: "OffchainLookupSenderMismatchError"
            })
        }
    };

function Eo(e, t) {
    if (!$(e, {
            strict: !1
        })) throw new M({
        address: e
    });
    if (!$(t, {
            strict: !1
        })) throw new M({
        address: t
    });
    return e.toLowerCase() === t.toLowerCase()
}
var kd = "0x556f1830",
    ks = {
        name: "OffchainLookup",
        type: "error",
        inputs: [{
            name: "sender",
            type: "address"
        }, {
            name: "urls",
            type: "string[]"
        }, {
            name: "callData",
            type: "bytes"
        }, {
            name: "callbackFunction",
            type: "bytes4"
        }, {
            name: "extraData",
            type: "bytes"
        }]
    };

function Od(i, s) {
    return O(this, arguments, function*(e, {
        blockNumber: t,
        blockTag: r,
        data: n,
        to: o
    }) {
        let {
            args: a
        } = Pt({
            data: n,
            abi: [ks]
        }), [u, p, d, f, m] = a, {
            ccipRead: l
        } = e, y = l && typeof l ? .request == "function" ? l.request : Os;
        try {
            if (!Eo(o, u)) throw new Rt({
                sender: u,
                to: o
            });
            let g = yield y({
                data: d,
                sender: u,
                urls: p
            }), {
                data: R
            } = yield So(e, {
                blockNumber: t,
                blockTag: r,
                data: N([f, ce([{
                    type: "bytes"
                }, {
                    type: "bytes"
                }], [g, m])]),
                to: o
            });
            return R
        } catch (g) {
            throw new zt({
                callbackSelector: f,
                cause: g,
                data: n,
                extraData: m,
                sender: u,
                urls: p
            })
        }
    })
}

function Os(n) {
    return O(this, arguments, function*({
        data: e,
        sender: t,
        urls: r
    }) {
        let o = new Error("An unknown error occurred.");
        for (let i = 0; i < r.length; i++) {
            let s = r[i],
                a = s.includes("{data}") ? "GET" : "POST",
                u = a === "POST" ? {
                    data: e,
                    sender: t
                } : void 0;
            try {
                let p = yield fetch(s.replace("{sender}", t).replace("{data}", e), {
                    body: JSON.stringify(u),
                    method: a
                }), d;
                if (p.headers.get("Content-Type") ? .startsWith("application/json") ? d = (yield p.json()).data : d = yield p.text(), !p.ok) {
                    o = new je({
                        body: u,
                        details: d ? .error ? C(d.error) : p.statusText,
                        headers: p.headers,
                        status: p.status,
                        url: s
                    });
                    continue
                }
                if (!T(d)) {
                    o = new Ct({
                        result: d,
                        url: s
                    });
                    continue
                }
                return d
            } catch (p) {
                o = new je({
                    body: u,
                    details: p.message,
                    url: s
                })
            }
        }
        throw o
    })
}
export {
    c as a, T as b, x as c, Q as d, yt as e, ie as f, Xt as g, Mn as h, la as i, Sn as j, B as k, b as l, Qt as m, oe as n, Ie as o, ue as p, gt as q, Te as r, yu as s, ne as t, Gn as u, gn as v, xn as w, Xn as x, yc as y, Mt as z, S as A, we as B, St as C, Oe as D, to as E, ro as F, no as G, oo as H, so as I, C as J, je as K, jt as L, bo as M, dr as N, fr as O, lr as P, mr as Q, yr as R, br as S, hr as T, gr as U, xr as V, wr as W, vr as X, $r as Y, Ar as Z, Pr as _, Mr as $, Sr as aa, Er as ba, Tr as ca, ho as da, go as ea, wo as fa, vo as ga, Mo as ha, Po as ia, Zt as ja, po as ka, mo as la, yo as ma, ao as na, uo as oa, co as pa, Ot as qa, $o as ra, kd as sa, ks as ta, Od as ua, Os as va, So as wa
};