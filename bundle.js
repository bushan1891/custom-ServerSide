!function e(t, n, r) {
    function o(a, l) {
        if (!n[a]) {
            if (!t[a]) {
                var s = "function" == typeof require && require;
                if (!l && s) return s(a, !0);
                if (i) return i(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u;
            }
            var c = n[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function(e) {
                var n = t[a][1][e];
                return o(n ? n : e);
            }, c, c.exports, e, t, n, r);
        }
        return n[a].exports;
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o;
}({
    1: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
            if (!e) return t;
            var n = (Math.random() * (o.length - 1)).toFixed();
            return r(e - 1, t + o[n]);
        }
        n.__esModule = !0, n["default"] = r;
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }, {} ],
    2: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/array/from"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/array/from": 29
    } ],
    3: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/get-iterator"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/get-iterator": 30
    } ],
    4: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/is-iterable"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/is-iterable": 31
    } ],
    5: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/json/stringify"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/json/stringify": 32
    } ],
    6: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/map"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/map": 33
    } ],
    7: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/assign"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/assign": 34
    } ],
    8: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/create"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/create": 35
    } ],
    9: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/define-property"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/define-property": 36
    } ],
    10: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/get-prototype-of"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/get-prototype-of": 37
    } ],
    11: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/keys"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/keys": 38
    } ],
    12: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/set-prototype-of"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/set-prototype-of": 39
    } ],
    13: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/values"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/values": 40
    } ],
    14: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/promise"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/promise": 41
    } ],
    15: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/symbol"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/symbol": 42
    } ],
    16: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/symbol/iterator"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/symbol/iterator": 43
    } ],
    17: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/weak-map"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/weak-map": 44
    } ],
    18: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/promise"), i = r(o);
        n["default"] = function(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new i["default"](function(e, n) {
                    function r(o, a) {
                        try {
                            var l = t[o](a), s = l.value;
                        } catch (u) {
                            return void n(u);
                        }
                        l.done ? e(s) : i["default"].resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                    }
                    r("next");
                });
            };
        };
    }, {
        "../core-js/promise": 14
    } ],
    19: [ function(e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    }, {} ],
    20: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/object/define-property"), i = r(o);
        n["default"] = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    i["default"](e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
    }, {
        "../core-js/object/define-property": 9
    } ],
    21: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/object/define-property"), i = r(o);
        n["default"] = function(e, t, n) {
            return t in e ? i["default"](e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        };
    }, {
        "../core-js/object/define-property": 9
    } ],
    22: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/object/assign"), i = r(o);
        n["default"] = i["default"] || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
    }, {
        "../core-js/object/assign": 7
    } ],
    23: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/object/set-prototype-of"), i = r(o), a = e("../core-js/object/create"), l = r(a), s = e("../helpers/typeof"), u = r(s);
        n["default"] = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : u["default"](t)));
            e.prototype = l["default"](t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (i["default"] ? i["default"](e, t) : e.__proto__ = t);
        };
    }, {
        "../core-js/object/create": 8,
        "../core-js/object/set-prototype-of": 12,
        "../helpers/typeof": 28
    } ],
    24: [ function(e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        };
    }, {} ],
    25: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../helpers/typeof"), i = r(o);
        n["default"] = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" == typeof t ? "undefined" : i["default"](t)) && "function" != typeof t ? e : t;
        };
    }, {
        "../helpers/typeof": 28
    } ],
    26: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/is-iterable"), i = r(o), a = e("../core-js/get-iterator"), l = r(a);
        n["default"] = function() {
            function e(e, t) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = l["default"](e); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (u) {
                    o = !0, i = u;
                } finally {
                    try {
                        !r && s["return"] && s["return"]();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (i["default"](Object(t))) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    }, {
        "../core-js/get-iterator": 3,
        "../core-js/is-iterable": 4
    } ],
    27: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/array/from"), i = r(o);
        n["default"] = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
            return i["default"](e);
        };
    }, {
        "../core-js/array/from": 2
    } ],
    28: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var o = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof _Symbol && e.constructor === _Symbol ? "symbol" : typeof e;
        };
        n.__esModule = !0;
        var i = e("../core-js/symbol/iterator"), a = r(i), l = e("../core-js/symbol"), s = r(l);
        n["default"] = "function" == typeof s["default"] && "symbol" === o(a["default"]) ? function(e) {
            return "undefined" == typeof e ? "undefined" : o(e);
        } : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] ? "symbol" : "undefined" == typeof e ? "undefined" : o(e);
        };
    }, {
        "../core-js/symbol": 15,
        "../core-js/symbol/iterator": 16
    } ],
    29: [ function(e, t, n) {
        e("../../modules/es6.string.iterator"), e("../../modules/es6.array.from"), t.exports = e("../../modules/$.core").Array.from;
    }, {
        "../../modules/$.core": 56,
        "../../modules/es6.array.from": 109,
        "../../modules/es6.string.iterator": 118
    } ],
    30: [ function(e, t, n) {
        e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.get-iterator");
    }, {
        "../modules/core.get-iterator": 107,
        "../modules/es6.string.iterator": 118,
        "../modules/web.dom.iterable": 123
    } ],
    31: [ function(e, t, n) {
        e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.is-iterable");
    }, {
        "../modules/core.is-iterable": 108,
        "../modules/es6.string.iterator": 118,
        "../modules/web.dom.iterable": 123
    } ],
    32: [ function(e, t, n) {
        var r = e("../../modules/$.core");
        t.exports = function(e) {
            return (r.JSON && r.JSON.stringify || JSON.stringify).apply(JSON, arguments);
        };
    }, {
        "../../modules/$.core": 56
    } ],
    33: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), 
        e("../modules/es6.map"), e("../modules/es7.map.to-json"), t.exports = e("../modules/$.core").Map;
    }, {
        "../modules/$.core": 56,
        "../modules/es6.map": 111,
        "../modules/es6.object.to-string": 116,
        "../modules/es6.string.iterator": 118,
        "../modules/es7.map.to-json": 121,
        "../modules/web.dom.iterable": 123
    } ],
    34: [ function(e, t, n) {
        e("../../modules/es6.object.assign"), t.exports = e("../../modules/$.core").Object.assign;
    }, {
        "../../modules/$.core": 56,
        "../../modules/es6.object.assign": 112
    } ],
    35: [ function(e, t, n) {
        var r = e("../../modules/$");
        t.exports = function(e, t) {
            return r.create(e, t);
        };
    }, {
        "../../modules/$": 81
    } ],
    36: [ function(e, t, n) {
        var r = e("../../modules/$");
        t.exports = function(e, t, n) {
            return r.setDesc(e, t, n);
        };
    }, {
        "../../modules/$": 81
    } ],
    37: [ function(e, t, n) {
        e("../../modules/es6.object.get-prototype-of"), t.exports = e("../../modules/$.core").Object.getPrototypeOf;
    }, {
        "../../modules/$.core": 56,
        "../../modules/es6.object.get-prototype-of": 113
    } ],
    38: [ function(e, t, n) {
        e("../../modules/es6.object.keys"), t.exports = e("../../modules/$.core").Object.keys;
    }, {
        "../../modules/$.core": 56,
        "../../modules/es6.object.keys": 114
    } ],
    39: [ function(e, t, n) {
        e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/$.core").Object.setPrototypeOf;
    }, {
        "../../modules/$.core": 56,
        "../../modules/es6.object.set-prototype-of": 115
    } ],
    40: [ function(e, t, n) {
        e("../../modules/es7.object.values"), t.exports = e("../../modules/$.core").Object.values;
    }, {
        "../../modules/$.core": 56,
        "../../modules/es7.object.values": 122
    } ],
    41: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), 
        e("../modules/es6.promise"), t.exports = e("../modules/$.core").Promise;
    }, {
        "../modules/$.core": 56,
        "../modules/es6.object.to-string": 116,
        "../modules/es6.promise": 117,
        "../modules/es6.string.iterator": 118,
        "../modules/web.dom.iterable": 123
    } ],
    42: [ function(e, t, n) {
        e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), t.exports = e("../../modules/$.core").Symbol;
    }, {
        "../../modules/$.core": 56,
        "../../modules/es6.object.to-string": 116,
        "../../modules/es6.symbol": 119
    } ],
    43: [ function(e, t, n) {
        e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/$.wks")("iterator");
    }, {
        "../../modules/$.wks": 105,
        "../../modules/es6.string.iterator": 118,
        "../../modules/web.dom.iterable": 123
    } ],
    44: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/web.dom.iterable"), e("../modules/es6.weak-map"), 
        t.exports = e("../modules/$.core").WeakMap;
    }, {
        "../modules/$.core": 56,
        "../modules/es6.object.to-string": 116,
        "../modules/es6.weak-map": 120,
        "../modules/web.dom.iterable": 123
    } ],
    45: [ function(e, t, n) {
        t.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    }, {} ],
    46: [ function(e, t, n) {
        t.exports = function() {};
    }, {} ],
    47: [ function(e, t, n) {
        var r = e("./$.is-object");
        t.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    }, {
        "./$.is-object": 74
    } ],
    48: [ function(e, t, n) {
        var r = e("./$.ctx"), o = e("./$.iobject"), i = e("./$.to-object"), a = e("./$.to-length"), l = e("./$.array-species-create");
        t.exports = function(e) {
            var t = 1 == e, n = 2 == e, s = 3 == e, u = 4 == e, c = 6 == e, d = 5 == e || c;
            return function(f, m, p) {
                for (var g, b, h = i(f), v = o(h), _ = r(m, p, 3), y = a(v.length), w = 0, E = t ? l(f, y) : n ? l(f, 0) : void 0; y > w; w++) if ((d || w in v) && (g = v[w], 
                b = _(g, w, h), e)) if (t) E[w] = b; else if (b) switch (e) {
                  case 3:
                    return !0;

                  case 5:
                    return g;

                  case 6:
                    return w;

                  case 2:
                    E.push(g);
                } else if (u) return !1;
                return c ? -1 : s || u ? u : E;
            };
        };
    }, {
        "./$.array-species-create": 49,
        "./$.ctx": 57,
        "./$.iobject": 71,
        "./$.to-length": 102,
        "./$.to-object": 103
    } ],
    49: [ function(e, t, n) {
        var r = e("./$.is-object"), o = e("./$.is-array"), i = e("./$.wks")("species");
        t.exports = function(e, t) {
            var n;
            return o(e) && (n = e.constructor, "function" != typeof n || n !== Array && !o(n.prototype) || (n = void 0), 
            r(n) && (n = n[i], null === n && (n = void 0))), new (void 0 === n ? Array : n)(t);
        };
    }, {
        "./$.is-array": 73,
        "./$.is-object": 74,
        "./$.wks": 105
    } ],
    50: [ function(e, t, n) {
        var r = e("./$.cof"), o = e("./$.wks")("toStringTag"), i = "Arguments" == r(function() {
            return arguments;
        }());
        t.exports = function(e) {
            var t, n, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = (t = Object(e))[o]) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a;
        };
    }, {
        "./$.cof": 51,
        "./$.wks": 105
    } ],
    51: [ function(e, t, n) {
        var r = {}.toString;
        t.exports = function(e) {
            return r.call(e).slice(8, -1);
        };
    }, {} ],
    52: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), o = e("./$.hide"), i = e("./$.redefine-all"), a = e("./$.ctx"), l = e("./$.strict-new"), s = e("./$.defined"), u = e("./$.for-of"), c = e("./$.iter-define"), d = e("./$.iter-step"), f = e("./$.uid")("id"), m = e("./$.has"), p = e("./$.is-object"), g = e("./$.set-species"), b = e("./$.descriptors"), h = Object.isExtensible || p, v = b ? "_s" : "size", _ = 0, y = function(e, t) {
            if (!p(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!m(e, f)) {
                if (!h(e)) return "F";
                if (!t) return "E";
                o(e, f, ++_);
            }
            return "O" + e[f];
        }, w = function(e, t) {
            var n, r = y(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n) if (n.k == t) return n;
        };
        t.exports = {
            getConstructor: function(e, t, n, o) {
                var c = e(function(e, i) {
                    l(e, c, t), e._i = r.create(null), e._f = void 0, e._l = void 0, e[v] = 0, void 0 != i && u(i, n, e[o], e);
                });
                return i(c.prototype, {
                    clear: function() {
                        for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), 
                        delete t[n.i];
                        e._f = e._l = void 0, e[v] = 0;
                    },
                    "delete": function(e) {
                        var t = this, n = w(t, e);
                        if (n) {
                            var r = n.n, o = n.p;
                            delete t._i[n.i], n.r = !0, o && (o.n = r), r && (r.p = o), t._f == n && (t._f = r), 
                            t._l == n && (t._l = o), t[v]--;
                        }
                        return !!n;
                    },
                    forEach: function(e) {
                        for (var t, n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f; ) for (n(t.v, t.k, this); t && t.r; ) t = t.p;
                    },
                    has: function(e) {
                        return !!w(this, e);
                    }
                }), b && r.setDesc(c.prototype, "size", {
                    get: function() {
                        return s(this[v]);
                    }
                }), c;
            },
            def: function(e, t, n) {
                var r, o, i = w(e, t);
                return i ? i.v = n : (e._l = i = {
                    i: o = y(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = i), r && (r.n = i), e[v]++, "F" !== o && (e._i[o] = i)), e;
            },
            getEntry: w,
            setStrong: function(e, t, n) {
                c(e, t, function(e, t) {
                    this._t = e, this._k = t, this._l = void 0;
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? d(0, n.k) : "values" == t ? d(0, n.v) : d(0, [ n.k, n.v ]) : (e._t = void 0, 
                    d(1));
                }, n ? "entries" : "values", !n, !0), g(t);
            }
        };
    }, {
        "./$": 81,
        "./$.ctx": 57,
        "./$.defined": 58,
        "./$.descriptors": 59,
        "./$.for-of": 64,
        "./$.has": 67,
        "./$.hide": 68,
        "./$.is-object": 74,
        "./$.iter-define": 77,
        "./$.iter-step": 79,
        "./$.redefine-all": 89,
        "./$.set-species": 93,
        "./$.strict-new": 97,
        "./$.uid": 104
    } ],
    53: [ function(e, t, n) {
        var r = e("./$.for-of"), o = e("./$.classof");
        t.exports = function(e) {
            return function() {
                if (o(this) != e) throw TypeError(e + "#toJSON isn't generic");
                var t = [];
                return r(this, !1, t.push, t), t;
            };
        };
    }, {
        "./$.classof": 50,
        "./$.for-of": 64
    } ],
    54: [ function(e, t, n) {
        "use strict";
        var r = e("./$.hide"), o = e("./$.redefine-all"), i = e("./$.an-object"), a = e("./$.is-object"), l = e("./$.strict-new"), s = e("./$.for-of"), u = e("./$.array-methods"), c = e("./$.has"), d = e("./$.uid")("weak"), f = Object.isExtensible || a, m = u(5), p = u(6), g = 0, b = function(e) {
            return e._l || (e._l = new h());
        }, h = function() {
            this.a = [];
        }, v = function(e, t) {
            return m(e.a, function(e) {
                return e[0] === t;
            });
        };
        h.prototype = {
            get: function(e) {
                var t = v(this, e);
                return t ? t[1] : void 0;
            },
            has: function(e) {
                return !!v(this, e);
            },
            set: function(e, t) {
                var n = v(this, e);
                n ? n[1] = t : this.a.push([ e, t ]);
            },
            "delete": function(e) {
                var t = p(this.a, function(t) {
                    return t[0] === e;
                });
                return ~t && this.a.splice(t, 1), !!~t;
            }
        }, t.exports = {
            getConstructor: function(e, t, n, r) {
                var i = e(function(e, o) {
                    l(e, i, t), e._i = g++, e._l = void 0, void 0 != o && s(o, n, e[r], e);
                });
                return o(i.prototype, {
                    "delete": function(e) {
                        return a(e) ? f(e) ? c(e, d) && c(e[d], this._i) && delete e[d][this._i] : b(this)["delete"](e) : !1;
                    },
                    has: function(e) {
                        return a(e) ? f(e) ? c(e, d) && c(e[d], this._i) : b(this).has(e) : !1;
                    }
                }), i;
            },
            def: function(e, t, n) {
                return f(i(t)) ? (c(t, d) || r(t, d, {}), t[d][e._i] = n) : b(e).set(t, n), e;
            },
            frozenStore: b,
            WEAK: d
        };
    }, {
        "./$.an-object": 47,
        "./$.array-methods": 48,
        "./$.for-of": 64,
        "./$.has": 67,
        "./$.hide": 68,
        "./$.is-object": 74,
        "./$.redefine-all": 89,
        "./$.strict-new": 97,
        "./$.uid": 104
    } ],
    55: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), o = e("./$.global"), i = e("./$.export"), a = e("./$.fails"), l = e("./$.hide"), s = e("./$.redefine-all"), u = e("./$.for-of"), c = e("./$.strict-new"), d = e("./$.is-object"), f = e("./$.set-to-string-tag"), m = e("./$.descriptors");
        t.exports = function(e, t, n, p, g, b) {
            var h = o[e], v = h, _ = g ? "set" : "add", y = v && v.prototype, w = {};
            return m && "function" == typeof v && (b || y.forEach && !a(function() {
                new v().entries().next();
            })) ? (v = t(function(t, n) {
                c(t, v, e), t._c = new h(), void 0 != n && u(n, g, t[_], t);
            }), r.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","), function(e) {
                var t = "add" == e || "set" == e;
                e in y && (!b || "clear" != e) && l(v.prototype, e, function(n, r) {
                    if (!t && b && !d(n)) return "get" == e ? void 0 : !1;
                    var o = this._c[e](0 === n ? 0 : n, r);
                    return t ? this : o;
                });
            }), "size" in y && r.setDesc(v.prototype, "size", {
                get: function() {
                    return this._c.size;
                }
            })) : (v = p.getConstructor(t, e, g, _), s(v.prototype, n)), f(v, e), w[e] = v, 
            i(i.G + i.W + i.F, w), b || p.setStrong(v, e, g), v;
        };
    }, {
        "./$": 81,
        "./$.descriptors": 59,
        "./$.export": 62,
        "./$.fails": 63,
        "./$.for-of": 64,
        "./$.global": 66,
        "./$.hide": 68,
        "./$.is-object": 74,
        "./$.redefine-all": 89,
        "./$.set-to-string-tag": 94,
        "./$.strict-new": 97
    } ],
    56: [ function(e, t, n) {
        var r = t.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = r);
    }, {} ],
    57: [ function(e, t, n) {
        var r = e("./$.a-function");
        t.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
              case 1:
                return function(n) {
                    return e.call(t, n);
                };

              case 2:
                return function(n, r) {
                    return e.call(t, n, r);
                };

              case 3:
                return function(n, r, o) {
                    return e.call(t, n, r, o);
                };
            }
            return function() {
                return e.apply(t, arguments);
            };
        };
    }, {
        "./$.a-function": 45
    } ],
    58: [ function(e, t, n) {
        t.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    }, {} ],
    59: [ function(e, t, n) {
        t.exports = !e("./$.fails")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./$.fails": 63
    } ],
    60: [ function(e, t, n) {
        var r = e("./$.is-object"), o = e("./$.global").document, i = r(o) && r(o.createElement);
        t.exports = function(e) {
            return i ? o.createElement(e) : {};
        };
    }, {
        "./$.global": 66,
        "./$.is-object": 74
    } ],
    61: [ function(e, t, n) {
        var r = e("./$");
        t.exports = function(e) {
            var t = r.getKeys(e), n = r.getSymbols;
            if (n) for (var o, i = n(e), a = r.isEnum, l = 0; i.length > l; ) a.call(e, o = i[l++]) && t.push(o);
            return t;
        };
    }, {
        "./$": 81
    } ],
    62: [ function(e, t, n) {
        var r = e("./$.global"), o = e("./$.core"), i = e("./$.ctx"), a = "prototype", l = function(e, t, n) {
            var s, u, c, d = e & l.F, f = e & l.G, m = e & l.S, p = e & l.P, g = e & l.B, b = e & l.W, h = f ? o : o[t] || (o[t] = {}), v = f ? r : m ? r[t] : (r[t] || {})[a];
            f && (n = t);
            for (s in n) u = !d && v && s in v, u && s in h || (c = u ? v[s] : n[s], h[s] = f && "function" != typeof v[s] ? n[s] : g && u ? i(c, r) : b && v[s] == c ? function(e) {
                var t = function(t) {
                    return this instanceof e ? new e(t) : e(t);
                };
                return t[a] = e[a], t;
            }(c) : p && "function" == typeof c ? i(Function.call, c) : c, p && ((h[a] || (h[a] = {}))[s] = c));
        };
        l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, t.exports = l;
    }, {
        "./$.core": 56,
        "./$.ctx": 57,
        "./$.global": 66
    } ],
    63: [ function(e, t, n) {
        t.exports = function(e) {
            try {
                return !!e();
            } catch (t) {
                return !0;
            }
        };
    }, {} ],
    64: [ function(e, t, n) {
        var r = e("./$.ctx"), o = e("./$.iter-call"), i = e("./$.is-array-iter"), a = e("./$.an-object"), l = e("./$.to-length"), s = e("./core.get-iterator-method");
        t.exports = function(e, t, n, u) {
            var c, d, f, m = s(e), p = r(n, u, t ? 2 : 1), g = 0;
            if ("function" != typeof m) throw TypeError(e + " is not iterable!");
            if (i(m)) for (c = l(e.length); c > g; g++) t ? p(a(d = e[g])[0], d[1]) : p(e[g]); else for (f = m.call(e); !(d = f.next()).done; ) o(f, p, d.value, t);
        };
    }, {
        "./$.an-object": 47,
        "./$.ctx": 57,
        "./$.is-array-iter": 72,
        "./$.iter-call": 75,
        "./$.to-length": 102,
        "./core.get-iterator-method": 106
    } ],
    65: [ function(e, t, n) {
        var r = e("./$.to-iobject"), o = e("./$").getNames, i = {}.toString, a = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], l = function(e) {
            try {
                return o(e);
            } catch (t) {
                return a.slice();
            }
        };
        t.exports.get = function(e) {
            return a && "[object Window]" == i.call(e) ? l(e) : o(r(e));
        };
    }, {
        "./$": 81,
        "./$.to-iobject": 101
    } ],
    66: [ function(e, t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r);
    }, {} ],
    67: [ function(e, t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function(e, t) {
            return r.call(e, t);
        };
    }, {} ],
    68: [ function(e, t, n) {
        var r = e("./$"), o = e("./$.property-desc");
        t.exports = e("./$.descriptors") ? function(e, t, n) {
            return r.setDesc(e, t, o(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    }, {
        "./$": 81,
        "./$.descriptors": 59,
        "./$.property-desc": 88
    } ],
    69: [ function(e, t, n) {
        t.exports = e("./$.global").document && document.documentElement;
    }, {
        "./$.global": 66
    } ],
    70: [ function(e, t, n) {
        t.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
              case 0:
                return r ? e() : e.call(n);

              case 1:
                return r ? e(t[0]) : e.call(n, t[0]);

              case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

              case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

              case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
        };
    }, {} ],
    71: [ function(e, t, n) {
        var r = e("./$.cof");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    }, {
        "./$.cof": 51
    } ],
    72: [ function(e, t, n) {
        var r = e("./$.iterators"), o = e("./$.wks")("iterator"), i = Array.prototype;
        t.exports = function(e) {
            return void 0 !== e && (r.Array === e || i[o] === e);
        };
    }, {
        "./$.iterators": 80,
        "./$.wks": 105
    } ],
    73: [ function(e, t, n) {
        var r = e("./$.cof");
        t.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    }, {
        "./$.cof": 51
    } ],
    74: [ function(e, t, n) {
        t.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    }, {} ],
    75: [ function(e, t, n) {
        var r = e("./$.an-object");
        t.exports = function(e, t, n, o) {
            try {
                return o ? t(r(n)[0], n[1]) : t(n);
            } catch (i) {
                var a = e["return"];
                throw void 0 !== a && r(a.call(e)), i;
            }
        };
    }, {
        "./$.an-object": 47
    } ],
    76: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), o = e("./$.property-desc"), i = e("./$.set-to-string-tag"), a = {};
        e("./$.hide")(a, e("./$.wks")("iterator"), function() {
            return this;
        }), t.exports = function(e, t, n) {
            e.prototype = r.create(a, {
                next: o(1, n)
            }), i(e, t + " Iterator");
        };
    }, {
        "./$": 81,
        "./$.hide": 68,
        "./$.property-desc": 88,
        "./$.set-to-string-tag": 94,
        "./$.wks": 105
    } ],
    77: [ function(e, t, n) {
        "use strict";
        var r = e("./$.library"), o = e("./$.export"), i = e("./$.redefine"), a = e("./$.hide"), l = e("./$.has"), s = e("./$.iterators"), u = e("./$.iter-create"), c = e("./$.set-to-string-tag"), d = e("./$").getProto, f = e("./$.wks")("iterator"), m = !([].keys && "next" in [].keys()), p = "@@iterator", g = "keys", b = "values", h = function() {
            return this;
        };
        t.exports = function(e, t, n, v, _, y, w) {
            u(n, t, v);
            var E, k, x = function(e) {
                if (!m && e in S) return S[e];
                switch (e) {
                  case g:
                    return function() {
                        return new n(this, e);
                    };

                  case b:
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this, e);
                };
            }, C = t + " Iterator", j = _ == b, T = !1, S = e.prototype, N = S[f] || S[p] || _ && S[_], $ = N || x(_);
            if (N) {
                var M = d($.call(new e()));
                c(M, C, !0), !r && l(S, p) && a(M, f, h), j && N.name !== b && (T = !0, $ = function() {
                    return N.call(this);
                });
            }
            if (r && !w || !m && !T && S[f] || a(S, f, $), s[t] = $, s[C] = h, _) if (E = {
                values: j ? $ : x(b),
                keys: y ? $ : x(g),
                entries: j ? x("entries") : $
            }, w) for (k in E) k in S || i(S, k, E[k]); else o(o.P + o.F * (m || T), t, E);
            return E;
        };
    }, {
        "./$": 81,
        "./$.export": 62,
        "./$.has": 67,
        "./$.hide": 68,
        "./$.iter-create": 76,
        "./$.iterators": 80,
        "./$.library": 83,
        "./$.redefine": 90,
        "./$.set-to-string-tag": 94,
        "./$.wks": 105
    } ],
    78: [ function(e, t, n) {
        var r = e("./$.wks")("iterator"), o = !1;
        try {
            var i = [ 7 ][r]();
            i["return"] = function() {
                o = !0;
            }, Array.from(i, function() {
                throw 2;
            });
        } catch (a) {}
        t.exports = function(e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var i = [ 7 ], a = i[r]();
                a.next = function() {
                    n = !0;
                }, i[r] = function() {
                    return a;
                }, e(i);
            } catch (l) {}
            return n;
        };
    }, {
        "./$.wks": 105
    } ],
    79: [ function(e, t, n) {
        t.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            };
        };
    }, {} ],
    80: [ function(e, t, n) {
        t.exports = {};
    }, {} ],
    81: [ function(e, t, n) {
        var r = Object;
        t.exports = {
            create: r.create,
            getProto: r.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: r.getOwnPropertyDescriptor,
            setDesc: r.defineProperty,
            setDescs: r.defineProperties,
            getKeys: r.keys,
            getNames: r.getOwnPropertyNames,
            getSymbols: r.getOwnPropertySymbols,
            each: [].forEach
        };
    }, {} ],
    82: [ function(e, t, n) {
        var r = e("./$"), o = e("./$.to-iobject");
        t.exports = function(e, t) {
            for (var n, i = o(e), a = r.getKeys(i), l = a.length, s = 0; l > s; ) if (i[n = a[s++]] === t) return n;
        };
    }, {
        "./$": 81,
        "./$.to-iobject": 101
    } ],
    83: [ function(e, t, n) {
        t.exports = !0;
    }, {} ],
    84: [ function(e, t, n) {
        var r, o, i, a = e("./$.global"), l = e("./$.task").set, s = a.MutationObserver || a.WebKitMutationObserver, u = a.process, c = a.Promise, d = "process" == e("./$.cof")(u), f = function() {
            var e, t, n;
            for (d && (e = u.domain) && (u.domain = null, e.exit()); r; ) t = r.domain, n = r.fn, 
            t && t.enter(), n(), t && t.exit(), r = r.next;
            o = void 0, e && e.enter();
        };
        if (d) i = function() {
            u.nextTick(f);
        }; else if (s) {
            var m = 1, p = document.createTextNode("");
            new s(f).observe(p, {
                characterData: !0
            }), i = function() {
                p.data = m = -m;
            };
        } else i = c && c.resolve ? function() {
            c.resolve().then(f);
        } : function() {
            l.call(a, f);
        };
        t.exports = function(e) {
            var t = {
                fn: e,
                next: void 0,
                domain: d && u.domain
            };
            o && (o.next = t), r || (r = t, i()), o = t;
        };
    }, {
        "./$.cof": 51,
        "./$.global": 66,
        "./$.task": 99
    } ],
    85: [ function(e, t, n) {
        var r = e("./$"), o = e("./$.to-object"), i = e("./$.iobject");
        t.exports = e("./$.fails")(function() {
            var e = Object.assign, t = {}, n = {}, r = Symbol(), o = "abcdefghijklmnopqrst";
            return t[r] = 7, o.split("").forEach(function(e) {
                n[e] = e;
            }), 7 != e({}, t)[r] || Object.keys(e({}, n)).join("") != o;
        }) ? function(e, t) {
            for (var n = o(e), a = arguments, l = a.length, s = 1, u = r.getKeys, c = r.getSymbols, d = r.isEnum; l > s; ) for (var f, m = i(a[s++]), p = c ? u(m).concat(c(m)) : u(m), g = p.length, b = 0; g > b; ) d.call(m, f = p[b++]) && (n[f] = m[f]);
            return n;
        } : Object.assign;
    }, {
        "./$": 81,
        "./$.fails": 63,
        "./$.iobject": 71,
        "./$.to-object": 103
    } ],
    86: [ function(e, t, n) {
        var r = e("./$.export"), o = e("./$.core"), i = e("./$.fails");
        t.exports = function(e, t) {
            var n = (o.Object || {})[e] || Object[e], a = {};
            a[e] = t(n), r(r.S + r.F * i(function() {
                n(1);
            }), "Object", a);
        };
    }, {
        "./$.core": 56,
        "./$.export": 62,
        "./$.fails": 63
    } ],
    87: [ function(e, t, n) {
        var r = e("./$"), o = e("./$.to-iobject"), i = r.isEnum;
        t.exports = function(e) {
            return function(t) {
                for (var n, a = o(t), l = r.getKeys(a), s = l.length, u = 0, c = []; s > u; ) i.call(a, n = l[u++]) && c.push(e ? [ n, a[n] ] : a[n]);
                return c;
            };
        };
    }, {
        "./$": 81,
        "./$.to-iobject": 101
    } ],
    88: [ function(e, t, n) {
        t.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    }, {} ],
    89: [ function(e, t, n) {
        var r = e("./$.redefine");
        t.exports = function(e, t) {
            for (var n in t) r(e, n, t[n]);
            return e;
        };
    }, {
        "./$.redefine": 90
    } ],
    90: [ function(e, t, n) {
        t.exports = e("./$.hide");
    }, {
        "./$.hide": 68
    } ],
    91: [ function(e, t, n) {
        t.exports = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t;
        };
    }, {} ],
    92: [ function(e, t, n) {
        var r = e("./$").getDesc, o = e("./$.is-object"), i = e("./$.an-object"), a = function(e, t) {
            if (i(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, o) {
                try {
                    o = e("./$.ctx")(Function.call, r(Object.prototype, "__proto__").set, 2), o(t, []), 
                    n = !(t instanceof Array);
                } catch (i) {
                    n = !0;
                }
                return function(e, t) {
                    return a(e, t), n ? e.__proto__ = t : o(e, t), e;
                };
            }({}, !1) : void 0),
            check: a
        };
    }, {
        "./$": 81,
        "./$.an-object": 47,
        "./$.ctx": 57,
        "./$.is-object": 74
    } ],
    93: [ function(e, t, n) {
        "use strict";
        var r = e("./$.core"), o = e("./$"), i = e("./$.descriptors"), a = e("./$.wks")("species");
        t.exports = function(e) {
            var t = r[e];
            i && t && !t[a] && o.setDesc(t, a, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    }, {
        "./$": 81,
        "./$.core": 56,
        "./$.descriptors": 59,
        "./$.wks": 105
    } ],
    94: [ function(e, t, n) {
        var r = e("./$").setDesc, o = e("./$.has"), i = e("./$.wks")("toStringTag");
        t.exports = function(e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            });
        };
    }, {
        "./$": 81,
        "./$.has": 67,
        "./$.wks": 105
    } ],
    95: [ function(e, t, n) {
        var r = e("./$.global"), o = "__core-js_shared__", i = r[o] || (r[o] = {});
        t.exports = function(e) {
            return i[e] || (i[e] = {});
        };
    }, {
        "./$.global": 66
    } ],
    96: [ function(e, t, n) {
        var r = e("./$.an-object"), o = e("./$.a-function"), i = e("./$.wks")("species");
        t.exports = function(e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || void 0 == (n = r(a)[i]) ? t : o(n);
        };
    }, {
        "./$.a-function": 45,
        "./$.an-object": 47,
        "./$.wks": 105
    } ],
    97: [ function(e, t, n) {
        t.exports = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError(n + ": use the 'new' operator!");
            return e;
        };
    }, {} ],
    98: [ function(e, t, n) {
        var r = e("./$.to-integer"), o = e("./$.defined");
        t.exports = function(e) {
            return function(t, n) {
                var i, a, l = String(o(t)), s = r(n), u = l.length;
                return 0 > s || s >= u ? e ? "" : void 0 : (i = l.charCodeAt(s), 55296 > i || i > 56319 || s + 1 === u || (a = l.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? l.charAt(s) : i : e ? l.slice(s, s + 2) : (i - 55296 << 10) + (a - 56320) + 65536);
            };
        };
    }, {
        "./$.defined": 58,
        "./$.to-integer": 100
    } ],
    99: [ function(e, t, n) {
        var r, o, i, a = e("./$.ctx"), l = e("./$.invoke"), s = e("./$.html"), u = e("./$.dom-create"), c = e("./$.global"), d = c.process, f = c.setImmediate, m = c.clearImmediate, p = c.MessageChannel, g = 0, b = {}, h = "onreadystatechange", v = function() {
            var e = +this;
            if (b.hasOwnProperty(e)) {
                var t = b[e];
                delete b[e], t();
            }
        }, _ = function(e) {
            v.call(e.data);
        };
        f && m || (f = function(e) {
            for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
            return b[++g] = function() {
                l("function" == typeof e ? e : Function(e), t);
            }, r(g), g;
        }, m = function(e) {
            delete b[e];
        }, "process" == e("./$.cof")(d) ? r = function(e) {
            d.nextTick(a(v, e, 1));
        } : p ? (o = new p(), i = o.port2, o.port1.onmessage = _, r = a(i.postMessage, i, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(e) {
            c.postMessage(e + "", "*");
        }, c.addEventListener("message", _, !1)) : r = h in u("script") ? function(e) {
            s.appendChild(u("script"))[h] = function() {
                s.removeChild(this), v.call(e);
            };
        } : function(e) {
            setTimeout(a(v, e, 1), 0);
        }), t.exports = {
            set: f,
            clear: m
        };
    }, {
        "./$.cof": 51,
        "./$.ctx": 57,
        "./$.dom-create": 60,
        "./$.global": 66,
        "./$.html": 69,
        "./$.invoke": 70
    } ],
    100: [ function(e, t, n) {
        var r = Math.ceil, o = Math.floor;
        t.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? o : r)(e);
        };
    }, {} ],
    101: [ function(e, t, n) {
        var r = e("./$.iobject"), o = e("./$.defined");
        t.exports = function(e) {
            return r(o(e));
        };
    }, {
        "./$.defined": 58,
        "./$.iobject": 71
    } ],
    102: [ function(e, t, n) {
        var r = e("./$.to-integer"), o = Math.min;
        t.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
    }, {
        "./$.to-integer": 100
    } ],
    103: [ function(e, t, n) {
        var r = e("./$.defined");
        t.exports = function(e) {
            return Object(r(e));
        };
    }, {
        "./$.defined": 58
    } ],
    104: [ function(e, t, n) {
        var r = 0, o = Math.random();
        t.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + o).toString(36));
        };
    }, {} ],
    105: [ function(e, t, n) {
        var r = e("./$.shared")("wks"), o = e("./$.uid"), i = e("./$.global").Symbol;
        t.exports = function(e) {
            return r[e] || (r[e] = i && i[e] || (i || o)("Symbol." + e));
        };
    }, {
        "./$.global": 66,
        "./$.shared": 95,
        "./$.uid": 104
    } ],
    106: [ function(e, t, n) {
        var r = e("./$.classof"), o = e("./$.wks")("iterator"), i = e("./$.iterators");
        t.exports = e("./$.core").getIteratorMethod = function(e) {
            return void 0 != e ? e[o] || e["@@iterator"] || i[r(e)] : void 0;
        };
    }, {
        "./$.classof": 50,
        "./$.core": 56,
        "./$.iterators": 80,
        "./$.wks": 105
    } ],
    107: [ function(e, t, n) {
        var r = e("./$.an-object"), o = e("./core.get-iterator-method");
        t.exports = e("./$.core").getIterator = function(e) {
            var t = o(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return r(t.call(e));
        };
    }, {
        "./$.an-object": 47,
        "./$.core": 56,
        "./core.get-iterator-method": 106
    } ],
    108: [ function(e, t, n) {
        var r = e("./$.classof"), o = e("./$.wks")("iterator"), i = e("./$.iterators");
        t.exports = e("./$.core").isIterable = function(e) {
            var t = Object(e);
            return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t));
        };
    }, {
        "./$.classof": 50,
        "./$.core": 56,
        "./$.iterators": 80,
        "./$.wks": 105
    } ],
    109: [ function(e, t, n) {
        "use strict";
        var r = e("./$.ctx"), o = e("./$.export"), i = e("./$.to-object"), a = e("./$.iter-call"), l = e("./$.is-array-iter"), s = e("./$.to-length"), u = e("./core.get-iterator-method");
        o(o.S + o.F * !e("./$.iter-detect")(function(e) {
            Array.from(e);
        }), "Array", {
            from: function(e) {
                var t, n, o, c, d = i(e), f = "function" == typeof this ? this : Array, m = arguments, p = m.length, g = p > 1 ? m[1] : void 0, b = void 0 !== g, h = 0, v = u(d);
                if (b && (g = r(g, p > 2 ? m[2] : void 0, 2)), void 0 == v || f == Array && l(v)) for (t = s(d.length), 
                n = new f(t); t > h; h++) n[h] = b ? g(d[h], h) : d[h]; else for (c = v.call(d), 
                n = new f(); !(o = c.next()).done; h++) n[h] = b ? a(c, g, [ o.value, h ], !0) : o.value;
                return n.length = h, n;
            }
        });
    }, {
        "./$.ctx": 57,
        "./$.export": 62,
        "./$.is-array-iter": 72,
        "./$.iter-call": 75,
        "./$.iter-detect": 78,
        "./$.to-length": 102,
        "./$.to-object": 103,
        "./core.get-iterator-method": 106
    } ],
    110: [ function(e, t, n) {
        "use strict";
        var r = e("./$.add-to-unscopables"), o = e("./$.iter-step"), i = e("./$.iterators"), a = e("./$.to-iobject");
        t.exports = e("./$.iter-define")(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t;
        }, function() {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [ n, e[n] ]);
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, {
        "./$.add-to-unscopables": 46,
        "./$.iter-define": 77,
        "./$.iter-step": 79,
        "./$.iterators": 80,
        "./$.to-iobject": 101
    } ],
    111: [ function(e, t, n) {
        "use strict";
        var r = e("./$.collection-strong");
        e("./$.collection")("Map", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            get: function(e) {
                var t = r.getEntry(this, e);
                return t && t.v;
            },
            set: function(e, t) {
                return r.def(this, 0 === e ? 0 : e, t);
            }
        }, r, !0);
    }, {
        "./$.collection": 55,
        "./$.collection-strong": 52
    } ],
    112: [ function(e, t, n) {
        var r = e("./$.export");
        r(r.S + r.F, "Object", {
            assign: e("./$.object-assign")
        });
    }, {
        "./$.export": 62,
        "./$.object-assign": 85
    } ],
    113: [ function(e, t, n) {
        var r = e("./$.to-object");
        e("./$.object-sap")("getPrototypeOf", function(e) {
            return function(t) {
                return e(r(t));
            };
        });
    }, {
        "./$.object-sap": 86,
        "./$.to-object": 103
    } ],
    114: [ function(e, t, n) {
        var r = e("./$.to-object");
        e("./$.object-sap")("keys", function(e) {
            return function(t) {
                return e(r(t));
            };
        });
    }, {
        "./$.object-sap": 86,
        "./$.to-object": 103
    } ],
    115: [ function(e, t, n) {
        var r = e("./$.export");
        r(r.S, "Object", {
            setPrototypeOf: e("./$.set-proto").set
        });
    }, {
        "./$.export": 62,
        "./$.set-proto": 92
    } ],
    116: [ function(e, t, n) {}, {} ],
    117: [ function(e, t, n) {
        "use strict";
        var r, o = e("./$"), i = e("./$.library"), a = e("./$.global"), l = e("./$.ctx"), s = e("./$.classof"), u = e("./$.export"), c = e("./$.is-object"), d = e("./$.an-object"), f = e("./$.a-function"), m = e("./$.strict-new"), p = e("./$.for-of"), g = e("./$.set-proto").set, b = e("./$.same-value"), h = e("./$.wks")("species"), v = e("./$.species-constructor"), _ = e("./$.microtask"), y = "Promise", w = a.process, E = "process" == s(w), k = a[y], x = function(e) {
            var t = new k(function() {});
            return e && (t.constructor = Object), k.resolve(t) === t;
        }, C = function() {
            function t(e) {
                var n = new k(e);
                return g(n, t.prototype), n;
            }
            var n = !1;
            try {
                if (n = k && k.resolve && x(), g(t, k), t.prototype = o.create(k.prototype, {
                    constructor: {
                        value: t
                    }
                }), t.resolve(5).then(function() {}) instanceof t || (n = !1), n && e("./$.descriptors")) {
                    var r = !1;
                    k.resolve(o.setDesc({}, "then", {
                        get: function() {
                            r = !0;
                        }
                    })), n = r;
                }
            } catch (i) {
                n = !1;
            }
            return n;
        }(), j = function(e, t) {
            return i && e === k && t === r ? !0 : b(e, t);
        }, T = function(e) {
            var t = d(e)[h];
            return void 0 != t ? t : e;
        }, S = function(e) {
            var t;
            return c(e) && "function" == typeof (t = e.then) ? t : !1;
        }, N = function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r;
            }), this.resolve = f(t), this.reject = f(n);
        }, $ = function(e) {
            try {
                e();
            } catch (t) {
                return {
                    error: t
                };
            }
        }, M = function(e, t) {
            if (!e.n) {
                e.n = !0;
                var n = e.c;
                _(function() {
                    for (var r = e.v, o = 1 == e.s, i = 0, l = function(t) {
                        var n, i, a = o ? t.ok : t.fail, l = t.resolve, s = t.reject;
                        try {
                            a ? (o || (e.h = !0), n = a === !0 ? r : a(r), n === t.promise ? s(TypeError("Promise-chain cycle")) : (i = S(n)) ? i.call(n, l, s) : l(n)) : s(r);
                        } catch (u) {
                            s(u);
                        }
                    }; n.length > i; ) l(n[i++]);
                    n.length = 0, e.n = !1, t && setTimeout(function() {
                        var t, n, o = e.p;
                        A(o) && (E ? w.emit("unhandledRejection", r, o) : (t = a.onunhandledrejection) ? t({
                            promise: o,
                            reason: r
                        }) : (n = a.console) && n.error && n.error("Unhandled promise rejection", r)), e.a = void 0;
                    }, 1);
                });
            }
        }, A = function(e) {
            var t, n = e._d, r = n.a || n.c, o = 0;
            if (n.h) return !1;
            for (;r.length > o; ) if (t = r[o++], t.fail || !A(t.promise)) return !1;
            return !0;
        }, P = function(e) {
            var t = this;
            t.d || (t.d = !0, t = t.r || t, t.v = e, t.s = 2, t.a = t.c.slice(), M(t, !0));
        }, D = function(e) {
            var t, n = this;
            if (!n.d) {
                n.d = !0, n = n.r || n;
                try {
                    if (n.p === e) throw TypeError("Promise can't be resolved itself");
                    (t = S(e)) ? _(function() {
                        var r = {
                            r: n,
                            d: !1
                        };
                        try {
                            t.call(e, l(D, r, 1), l(P, r, 1));
                        } catch (o) {
                            P.call(r, o);
                        }
                    }) : (n.v = e, n.s = 1, M(n, !1));
                } catch (r) {
                    P.call({
                        r: n,
                        d: !1
                    }, r);
                }
            }
        };
        C || (k = function(e) {
            f(e);
            var t = this._d = {
                p: m(this, k, y),
                c: [],
                a: void 0,
                s: 0,
                d: !1,
                v: void 0,
                h: !1,
                n: !1
            };
            try {
                e(l(D, t, 1), l(P, t, 1));
            } catch (n) {
                P.call(t, n);
            }
        }, e("./$.redefine-all")(k.prototype, {
            then: function(e, t) {
                var n = new N(v(this, k)), r = n.promise, o = this._d;
                return n.ok = "function" == typeof e ? e : !0, n.fail = "function" == typeof t && t, 
                o.c.push(n), o.a && o.a.push(n), o.s && M(o, !1), r;
            },
            "catch": function(e) {
                return this.then(void 0, e);
            }
        })), u(u.G + u.W + u.F * !C, {
            Promise: k
        }), e("./$.set-to-string-tag")(k, y), e("./$.set-species")(y), r = e("./$.core")[y], 
        u(u.S + u.F * !C, y, {
            reject: function(e) {
                var t = new N(this), n = t.reject;
                return n(e), t.promise;
            }
        }), u(u.S + u.F * (!C || x(!0)), y, {
            resolve: function(e) {
                if (e instanceof k && j(e.constructor, this)) return e;
                var t = new N(this), n = t.resolve;
                return n(e), t.promise;
            }
        }), u(u.S + u.F * !(C && e("./$.iter-detect")(function(e) {
            k.all(e)["catch"](function() {});
        })), y, {
            all: function(e) {
                var t = T(this), n = new N(t), r = n.resolve, i = n.reject, a = [], l = $(function() {
                    p(e, !1, a.push, a);
                    var n = a.length, l = Array(n);
                    n ? o.each.call(a, function(e, o) {
                        var a = !1;
                        t.resolve(e).then(function(e) {
                            a || (a = !0, l[o] = e, --n || r(l));
                        }, i);
                    }) : r(l);
                });
                return l && i(l.error), n.promise;
            },
            race: function(e) {
                var t = T(this), n = new N(t), r = n.reject, o = $(function() {
                    p(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r);
                    });
                });
                return o && r(o.error), n.promise;
            }
        });
    }, {
        "./$": 81,
        "./$.a-function": 45,
        "./$.an-object": 47,
        "./$.classof": 50,
        "./$.core": 56,
        "./$.ctx": 57,
        "./$.descriptors": 59,
        "./$.export": 62,
        "./$.for-of": 64,
        "./$.global": 66,
        "./$.is-object": 74,
        "./$.iter-detect": 78,
        "./$.library": 83,
        "./$.microtask": 84,
        "./$.redefine-all": 89,
        "./$.same-value": 91,
        "./$.set-proto": 92,
        "./$.set-species": 93,
        "./$.set-to-string-tag": 94,
        "./$.species-constructor": 96,
        "./$.strict-new": 97,
        "./$.wks": 105
    } ],
    118: [ function(e, t, n) {
        "use strict";
        var r = e("./$.string-at")(!0);
        e("./$.iter-define")(String, "String", function(e) {
            this._t = String(e), this._i = 0;
        }, function() {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            });
        });
    }, {
        "./$.iter-define": 77,
        "./$.string-at": 98
    } ],
    119: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), o = e("./$.global"), i = e("./$.has"), a = e("./$.descriptors"), l = e("./$.export"), s = e("./$.redefine"), u = e("./$.fails"), c = e("./$.shared"), d = e("./$.set-to-string-tag"), f = e("./$.uid"), m = e("./$.wks"), p = e("./$.keyof"), g = e("./$.get-names"), b = e("./$.enum-keys"), h = e("./$.is-array"), v = e("./$.an-object"), _ = e("./$.to-iobject"), y = e("./$.property-desc"), w = r.getDesc, E = r.setDesc, k = r.create, x = g.get, C = o.Symbol, j = o.JSON, T = j && j.stringify, S = !1, N = m("_hidden"), $ = r.isEnum, M = c("symbol-registry"), A = c("symbols"), P = "function" == typeof C, D = Object.prototype, O = a && u(function() {
            return 7 != k(E({}, "a", {
                get: function() {
                    return E(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(e, t, n) {
            var r = w(D, t);
            r && delete D[t], E(e, t, n), r && e !== D && E(D, t, r);
        } : E, L = function(e) {
            var t = A[e] = k(C.prototype);
            return t._k = e, a && S && O(D, e, {
                configurable: !0,
                set: function(t) {
                    i(this, N) && i(this[N], e) && (this[N][e] = !1), O(this, e, y(1, t));
                }
            }), t;
        }, I = function(e) {
            return "symbol" == typeof e;
        }, R = function(e, t, n) {
            return n && i(A, t) ? (n.enumerable ? (i(e, N) && e[N][t] && (e[N][t] = !1), n = k(n, {
                enumerable: y(0, !1)
            })) : (i(e, N) || E(e, N, y(1, {})), e[N][t] = !0), O(e, t, n)) : E(e, t, n);
        }, F = function(e, t) {
            v(e);
            for (var n, r = b(t = _(t)), o = 0, i = r.length; i > o; ) R(e, n = r[o++], t[n]);
            return e;
        }, G = function(e, t) {
            return void 0 === t ? k(e) : F(k(e), t);
        }, B = function(e) {
            var t = $.call(this, e);
            return t || !i(this, e) || !i(A, e) || i(this, N) && this[N][e] ? t : !0;
        }, H = function(e, t) {
            var n = w(e = _(e), t);
            return !n || !i(A, t) || i(e, N) && e[N][t] || (n.enumerable = !0), n;
        }, z = function(e) {
            for (var t, n = x(_(e)), r = [], o = 0; n.length > o; ) i(A, t = n[o++]) || t == N || r.push(t);
            return r;
        }, W = function(e) {
            for (var t, n = x(_(e)), r = [], o = 0; n.length > o; ) i(A, t = n[o++]) && r.push(A[t]);
            return r;
        }, U = function(e) {
            if (void 0 !== e && !I(e)) {
                for (var t, n, r = [ e ], o = 1, i = arguments; i.length > o; ) r.push(i[o++]);
                return t = r[1], "function" == typeof t && (n = t), (n || !h(t)) && (t = function(e, t) {
                    return n && (t = n.call(this, e, t)), I(t) ? void 0 : t;
                }), r[1] = t, T.apply(j, r);
            }
        }, V = u(function() {
            var e = C();
            return "[null]" != T([ e ]) || "{}" != T({
                a: e
            }) || "{}" != T(Object(e));
        });
        P || (C = function() {
            if (I(this)) throw TypeError("Symbol is not a constructor");
            return L(f(arguments.length > 0 ? arguments[0] : void 0));
        }, s(C.prototype, "toString", function() {
            return this._k;
        }), I = function(e) {
            return e instanceof C;
        }, r.create = G, r.isEnum = B, r.getDesc = H, r.setDesc = R, r.setDescs = F, r.getNames = g.get = z, 
        r.getSymbols = W, a && !e("./$.library") && s(D, "propertyIsEnumerable", B, !0));
        var q = {
            "for": function(e) {
                return i(M, e += "") ? M[e] : M[e] = C(e);
            },
            keyFor: function(e) {
                return p(M, e);
            },
            useSetter: function() {
                S = !0;
            },
            useSimple: function() {
                S = !1;
            }
        };
        r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(e) {
            var t = m(e);
            q[e] = P ? t : L(t);
        }), S = !0, l(l.G + l.W, {
            Symbol: C
        }), l(l.S, "Symbol", q), l(l.S + l.F * !P, "Object", {
            create: G,
            defineProperty: R,
            defineProperties: F,
            getOwnPropertyDescriptor: H,
            getOwnPropertyNames: z,
            getOwnPropertySymbols: W
        }), j && l(l.S + l.F * (!P || V), "JSON", {
            stringify: U
        }), d(C, "Symbol"), d(Math, "Math", !0), d(o.JSON, "JSON", !0);
    }, {
        "./$": 81,
        "./$.an-object": 47,
        "./$.descriptors": 59,
        "./$.enum-keys": 61,
        "./$.export": 62,
        "./$.fails": 63,
        "./$.get-names": 65,
        "./$.global": 66,
        "./$.has": 67,
        "./$.is-array": 73,
        "./$.keyof": 82,
        "./$.library": 83,
        "./$.property-desc": 88,
        "./$.redefine": 90,
        "./$.set-to-string-tag": 94,
        "./$.shared": 95,
        "./$.to-iobject": 101,
        "./$.uid": 104,
        "./$.wks": 105
    } ],
    120: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), o = e("./$.redefine"), i = e("./$.collection-weak"), a = e("./$.is-object"), l = e("./$.has"), s = i.frozenStore, u = i.WEAK, c = Object.isExtensible || a, d = {}, f = e("./$.collection")("WeakMap", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            get: function(e) {
                if (a(e)) {
                    if (!c(e)) return s(this).get(e);
                    if (l(e, u)) return e[u][this._i];
                }
            },
            set: function(e, t) {
                return i.def(this, e, t);
            }
        }, i, !0, !0);
        7 != new f().set((Object.freeze || Object)(d), 7).get(d) && r.each.call([ "delete", "has", "get", "set" ], function(e) {
            var t = f.prototype, n = t[e];
            o(t, e, function(t, r) {
                if (a(t) && !c(t)) {
                    var o = s(this)[e](t, r);
                    return "set" == e ? this : o;
                }
                return n.call(this, t, r);
            });
        });
    }, {
        "./$": 81,
        "./$.collection": 55,
        "./$.collection-weak": 54,
        "./$.has": 67,
        "./$.is-object": 74,
        "./$.redefine": 90
    } ],
    121: [ function(e, t, n) {
        var r = e("./$.export");
        r(r.P, "Map", {
            toJSON: e("./$.collection-to-json")("Map")
        });
    }, {
        "./$.collection-to-json": 53,
        "./$.export": 62
    } ],
    122: [ function(e, t, n) {
        var r = e("./$.export"), o = e("./$.object-to-array")(!1);
        r(r.S, "Object", {
            values: function(e) {
                return o(e);
            }
        });
    }, {
        "./$.export": 62,
        "./$.object-to-array": 87
    } ],
    123: [ function(e, t, n) {
        e("./es6.array.iterator");
        var r = e("./$.iterators");
        r.NodeList = r.HTMLCollection = r.Array;
    }, {
        "./$.iterators": 80,
        "./es6.array.iterator": 110
    } ],
    124: [ function(e, t, n) {
        (function(n) {
            var r = "object" == typeof n ? n : "object" == typeof window ? window : "object" == typeof self ? self : this, o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, i = o && r.regeneratorRuntime;
            if (r.regeneratorRuntime = void 0, t.exports = e("./runtime"), o) r.regeneratorRuntime = i; else try {
                delete r.regeneratorRuntime;
            } catch (a) {
                r.regeneratorRuntime = void 0;
            }
            t.exports = {
                "default": t.exports,
                __esModule: !0
            };
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "./runtime": 125
    } ],
    125: [ function(e, t, n) {
        (function(n, r) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            var i = e("../core-js/promise"), a = o(i), l = e("../core-js/object/set-prototype-of"), s = o(l), u = e("../core-js/object/create"), c = o(u), d = e("../helpers/typeof"), f = o(d), m = e("../core-js/symbol/iterator"), p = o(m), g = e("../core-js/symbol"), b = o(g);
            !function(e) {
                function r(e, t, n, r) {
                    var o = c["default"]((t || i).prototype), a = new y(r || []);
                    return o._invoke = h(e, n, a), o;
                }
                function o(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        };
                    } catch (r) {
                        return {
                            type: "throw",
                            arg: r
                        };
                    }
                }
                function i() {}
                function l() {}
                function u() {}
                function d(e) {
                    [ "next", "throw", "return" ].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function m(e) {
                    this.arg = e;
                }
                function g(e) {
                    function t(t, n) {
                        var r = e[t](n), o = r.value;
                        return o instanceof m ? a["default"].resolve(o.arg).then(i, l) : a["default"].resolve(o).then(function(e) {
                            return r.value = e, r;
                        });
                    }
                    function r(e, n) {
                        function r() {
                            return t(e, n);
                        }
                        return o = o ? o.then(r, r) : new a["default"](function(e) {
                            e(r());
                        });
                    }
                    "object" === ("undefined" == typeof n ? "undefined" : f["default"](n)) && n.domain && (t = n.domain.bind(t));
                    var o, i = t.bind(e, "next"), l = t.bind(e, "throw");
                    t.bind(e, "return");
                    this._invoke = r;
                }
                function h(e, t, n) {
                    var r = S;
                    return function(i, a) {
                        if (r === $) throw new Error("Generator is already running");
                        if (r === M) {
                            if ("throw" === i) throw a;
                            return E();
                        }
                        for (;;) {
                            var l = n.delegate;
                            if (l) {
                                if ("return" === i || "throw" === i && l.iterator[i] === k) {
                                    n.delegate = null;
                                    var s = l.iterator["return"];
                                    if (s) {
                                        var u = o(s, l.iterator, a);
                                        if ("throw" === u.type) {
                                            i = "throw", a = u.arg;
                                            continue;
                                        }
                                    }
                                    if ("return" === i) continue;
                                }
                                var u = o(l.iterator[i], l.iterator, a);
                                if ("throw" === u.type) {
                                    n.delegate = null, i = "throw", a = u.arg;
                                    continue;
                                }
                                i = "next", a = k;
                                var c = u.arg;
                                if (!c.done) return r = N, c;
                                n[l.resultName] = c.value, n.next = l.nextLoc, n.delegate = null;
                            }
                            if ("next" === i) n._sent = a, r === N ? n.sent = a : n.sent = k; else if ("throw" === i) {
                                if (r === S) throw r = M, a;
                                n.dispatchException(a) && (i = "next", a = k);
                            } else "return" === i && n.abrupt("return", a);
                            r = $;
                            var u = o(e, t, n);
                            if ("normal" === u.type) {
                                r = n.done ? M : N;
                                var c = {
                                    value: u.arg,
                                    done: n.done
                                };
                                if (u.arg !== A) return c;
                                n.delegate && "next" === i && (a = k);
                            } else "throw" === u.type && (r = M, i = "throw", a = u.arg);
                        }
                    };
                }
                function v(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                    this.tryEntries.push(t);
                }
                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function y(e) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], e.forEach(v, this), this.reset(!0);
                }
                function w(e) {
                    if (e) {
                        var t = e[C];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, r = function o() {
                                for (;++n < e.length; ) if (x.call(e, n)) return o.value = e[n], o.done = !1, o;
                                return o.value = k, o.done = !0, o;
                            };
                            return r.next = r;
                        }
                    }
                    return {
                        next: E
                    };
                }
                function E() {
                    return {
                        value: k,
                        done: !0
                    };
                }
                var k, x = Object.prototype.hasOwnProperty, C = "function" == typeof b["default"] && p["default"] || "@@iterator", j = "object" === ("undefined" == typeof t ? "undefined" : f["default"](t)), T = e.regeneratorRuntime;
                if (T) return void (j && (t.exports = T));
                T = e.regeneratorRuntime = j ? t.exports : {}, T.wrap = r;
                var S = "suspendedStart", N = "suspendedYield", $ = "executing", M = "completed", A = {}, P = u.prototype = i.prototype;
                l.prototype = P.constructor = u, u.constructor = l, l.displayName = "GeneratorFunction", 
                T.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return t ? t === l || "GeneratorFunction" === (t.displayName || t.name) : !1;
                }, T.mark = function(e) {
                    return s["default"] ? s["default"](e, u) : e.__proto__ = u, e.prototype = c["default"](P), 
                    e;
                }, T.awrap = function(e) {
                    return new m(e);
                }, d(g.prototype), T.async = function(e, t, n, o) {
                    var i = new g(r(e, t, n, o));
                    return T.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
                }, d(P), P[C] = function() {
                    return this;
                }, P.toString = function() {
                    return "[object Generator]";
                }, T.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function r() {
                        for (;t.length; ) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r;
                        }
                        return r.done = !0, r;
                    };
                }, T.values = w, y.prototype = {
                    constructor: y,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = k, this.done = !1, this.delegate = null, 
                        this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && x.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = k);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0], t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return i.type = "throw", i.arg = e, n.next = t, !!r;
                        }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r], i = o.completion;
                            if ("root" === o.tryLoc) return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = x.call(o, "catchLoc"), l = x.call(o, "finallyLoc");
                                if (a && l) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && x.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? this.next = o.finallyLoc : this.complete(i), A;
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, 
                        this.next = "end") : "normal" === e.type && t && (this.next = t);
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), A;
                        }
                    },
                    "catch": function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    _(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: w(e),
                            resultName: t,
                            nextLoc: n
                        }, A;
                    }
                };
            }("object" === ("undefined" == typeof r ? "undefined" : f["default"](r)) ? r : "object" === ("undefined" == typeof window ? "undefined" : f["default"](window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : f["default"](self)) ? self : void 0);
        }).call(this, e("_process"), "undefined" != typeof window ? window : {});
    }, {
        "../core-js/object/create": 8,
        "../core-js/object/set-prototype-of": 12,
        "../core-js/promise": 14,
        "../core-js/symbol": 15,
        "../core-js/symbol/iterator": 16,
        "../helpers/typeof": 28,
        _process: 126
    } ],
    126: [ function(e, t, n) {
        function r() {
            c = !1, l.length ? u = l.concat(u) : d = -1, u.length && o();
        }
        function o() {
            if (!c) {
                var e = setTimeout(r);
                c = !0;
                for (var t = u.length; t; ) {
                    for (l = u, u = []; ++d < t; ) l && l[d].run();
                    d = -1, t = u.length;
                }
                l = null, c = !1, clearTimeout(e);
            }
        }
        function i(e, t) {
            this.fun = e, this.array = t;
        }
        function a() {}
        var l, s = t.exports = {}, u = [], c = !1, d = -1;
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new i(e, t)), 1 !== u.length || c || setTimeout(o, 0);
        }, i.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", 
        s.versions = {}, s.on = a, s.addListener = a, s.once = a, s.off = a, s.removeListener = a, 
        s.removeAllListeners = a, s.emit = a, s.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, s.cwd = function() {
            return "/";
        }, s.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, s.umask = function() {
            return 0;
        };
    }, {} ],
    127: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return "about:" == document.location.protocol ? a["default"].success("index_load") : (document.body.dataset.grCSLoaded = !0, 
            a["default"].startAppLoadTimer(), void e("./lib/app"));
        }
        var i = e("./lib/failover"), a = r(i), l = e("./lib/ghost/html-ghost-locator"), s = e("./lib/client-script"), u = r(s), c = l.getClientScriptFunction();
        if (c) {
            u["default"].addScript(document, c);
            var d = l.getGhostListener();
            d && d();
        }
        a["default"].startPageLoadTimer(), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", o, !1) : o();
    }, {
        "./lib/app": 128,
        "./lib/client-script": 149,
        "./lib/failover": 182,
        "./lib/ghost/html-ghost-locator": 187
    } ],
    128: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            var e = {
                connection: {
                    networkOffline: !window.navigator.onLine,
                    online: !1,
                    bgNotConnected: !0,
                    cookiesDisabled: 0 == navigator.cookieEnabled
                },
                user: {
                    anonymous: !0,
                    premium: !1,
                    settings: {}
                },
                page: {
                    enabled: !0,
                    enabledDefs: !1,
                    domain: F
                }
            };
            i(e);
        }
        function i(e) {
            if (e.page.domain != F) return void N.call("felog.warn", "state_invariant", {
                locationHash: b["default"].hash(F)
            });
            var t = 0 == navigator.cookieEnabled;
            e.connection.cookiesDisabled != t && V.updateConnection({
                cookiesDisabled: t
            });
            var n = D["default"].stop(R);
            n && !e.connection.bgNotConnected && (N.call("felog.warn", "restored_bg_connection", {
                active_time: n
            }), N.call("statsc.ui.timing", "stability:restored_bg_connection", n)), W && (clearTimeout(W), 
            W = null), !z && l(e.page.domain, e.connection), e.page.enabled ? a(e) : f(), !z && S["default"].success("app_load"), 
            z = !0;
        }
        function a(e) {
            return c(e.page), B ? B.updateState(e) : void (B = E["default"](p["default"]({}, e, {
                app: G,
                doc: L,
                actions: V
            })));
        }
        function l(e, t) {
            var n = t.bgNotConnected;
            s(e), y.isSafari() && d();
            var r = x["default"](L);
            r.customizeElements(), r.addDomainClass(), S["default"].success("index_load"), n && (D["default"].start(R), 
            N.call("felog.warn", "init_without_bg_connection"), N.call("statsc.ui.increment", "stability:init_without_bg_connection"));
        }
        function s(e) {
            e.includes(O.GRAMMARLY_DOMAIN) && j["default"]();
        }
        function u() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
            v["default"](e);
        }
        function c(e) {
            var t = e.enabledDefs, n = e.cardInspection;
            t && !H ? H = A["default"]({
                doc: L,
                cardInspection: n
            }) : (H && H.clear(), H = null);
        }
        function d() {
            function e() {
                var n = window.getComputedStyle(t), r = n.getPropertyValue("opacity");
                "0.5" != r ? f() : setTimeout(e, 200);
            }
            var t = L.createElement("div");
            L.body.appendChild(t), t.classList.add("grammarly-disable-indicator"), setTimeout(e, 1e3);
        }
        function f() {
            B && (console.log("cleanup page from extension"), B.clear(), B = null);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var m = e("babel-runtime/helpers/extends"), p = r(m);
        n.update = i;
        var g = e("spark-md5"), b = r(g), h = e("./console"), v = r(h), _ = e("./state"), y = e("./util"), w = e("./buttons"), E = r(w), k = e("./sites"), x = r(k), C = e("./external"), j = r(C), T = e("./failover"), S = r(T), N = e("./tracking"), $ = e("./location"), M = e("./dictionary"), A = r(M), P = e("./timers"), D = r(P), O = e("lib/config"), L = document, I = 3e4, R = "init_without_bg_connection", F = $.getDomain(), G = {}, B = void 0, H = void 0, z = void 0, W = setTimeout(o, I), U = _.createAndObserve(i), V = U.actions;
        u();
    }, {
        "./buttons": 137,
        "./console": 151,
        "./dictionary": 153,
        "./external": 181,
        "./failover": 182,
        "./location": 191,
        "./sites": 199,
        "./state": 205,
        "./test-api": 209,
        "./timers": 210,
        "./tracking": 214,
        "./util": 218,
        "babel-runtime/helpers/extends": 22,
        "lib/config": 150,
        "spark-md5": "spark-md5"
    } ],
    129: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/weak-map");
        r(o);
        n["default"] = function(e) {
            return;
        };
        e("./dom");
        t.exports = n["default"];
    }, {
        "./dom": 154,
        "babel-runtime/core-js/weak-map": 17
    } ],
    130: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return u.isChrome() ? new a["default"](function(e, t) {
                try {
                    window.chrome.cookies.getAll({
                        domain: c.GRAMMARLY_DOMAIN,
                        path: d
                    }, function(t) {
                        return e(Array.isArray(t) ? t : []);
                    });
                } catch (n) {
                    t(n);
                }
            }) : [];
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setCookie = n.watchToken = n.getToken = n.watch = n.getCookie = void 0;
        var i = e("babel-runtime/core-js/promise"), a = r(i);
        n.getAllGrammarlyCookies = o;
        var l = e("lib/forge"), s = r(l), u = e("lib/util"), c = e("lib/config"), d = "/", f = n.getCookie = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? c.GRAMMARLY_DOMAIN : arguments[1];
            return new a["default"](function(n, r) {
                return s["default"].cookies.get(t, d, e, n, r);
            });
        }, m = n.watch = function(e, t) {
            arguments.length <= 2 || void 0 === arguments[2] ? c.GRAMMARLY_DOMAIN : arguments[2];
            if (!e) throw new Error("cookies.watch: callback required");
            s["default"].cookies.watch(c.GRAMMARLY_DOMAIN, d, t, e);
        };
        n.getToken = function() {
            return f("grauth");
        }, n.watchToken = function(e) {
            return m(e, "grauth");
        }, n.setCookie = function(e) {
            return new a["default"](function(t, n) {
                return s["default"].cookies.set(e, t, n);
            });
        };
    }, {
        "babel-runtime/core-js/promise": 14,
        "lib/config": 150,
        "lib/forge": 183,
        "lib/util": 218
    } ],
    131: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t;
        }
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/core-js/object/assign"), a = o(i), l = e("./user/actions"), s = r(l), u = e("./settings/actions"), c = r(u), d = e("./connection/actions"), f = r(d);
        n["default"] = a["default"]({}, s, f, c), t.exports = n["default"];
    }, {
        "./connection/actions": 132,
        "./settings/actions": 133,
        "./user/actions": 134,
        "babel-runtime/core-js/object/assign": 7
    } ],
    132: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: i.UPDATE_CONNECTION,
                data: e
            };
        }
        function o(e) {
            return {
                type: i.ONLINE_STATE,
                online: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.updateConnection = r, n.onlineConnection = o;
        var i = n.t = {
            UPDATE_CONNECTION: "connection/UPDATE_CONNECTION",
            ONLINE_STATE: "connection/ONLINE_STATE"
        };
    }, {} ],
    133: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: m.SET_WEAK_DIALECT,
                data: e
            };
        }
        function o(e) {
            return {
                type: m.CHANGE_WEAK_DIALECT,
                data: e
            };
        }
        function i(e) {
            return {
                type: m.SETTINGS_INITIAL,
                data: e
            };
        }
        function a(e) {
            return {
                type: m.TOGGLE_DEFS,
                enabledDefs: e
            };
        }
        function l(e, t) {
            return {
                type: m.TOGGLE_SITE,
                domain: t,
                enabled: e
            };
        }
        function s(e, t) {
            return {
                type: m.TOGGLE_FIELD,
                domain: t,
                data: e
            };
        }
        function u() {
            return {
                type: m.SEEN_NEWS
            };
        }
        function c(e) {
            return {
                type: m.SHOW_NEWS,
                showNews: e
            };
        }
        function d() {
            return {
                type: m.SEEN_REFERRALS
            };
        }
        function f() {
            return {
                type: m.CLICK_REFERRALS
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setWeakDialect = r, n.changeWeakDialect = o, n.initialSettings = i, n.toggleDefs = a, 
        n.toggleSite = l, n.toggleField = s, n.seenNews = u, n.showNews = c, n.seenReferrals = d, 
        n.clickReferrals = f;
        var m = n.t = {
            SETTINGS_INITIAL: "settings/SETTINGS_INITIAL",
            TOGGLE_DEFS: "settings/TOGGLE_DEFS",
            TOGGLE_SITE: "settings/TOGGLE_SITE",
            TOGGLE_FIELD: "settings/TOGGLE_FIELD",
            SHOW_NEWS: "settings/SHOW_NEWS",
            SEEN_NEWS: "settings/SEEN_NEWS",
            SEEN_REFERRALS: "settings/SEEN_REFERRALS",
            CLICK_REFERRALS: "settings/CLICK_REFERRALS",
            SET_WEAK_DIALECT: "settings/SET_WEAK_DIALECT",
            CHANGE_WEAK_DIALECT: "settings/CHANGE_WEAK_DIALECT"
        };
        n.DAPI_ACTIONS = [ m.CHANGE_WEAK_DIALECT ], n.CACHED_ACTIONS = [ m.TOGGLE_DEFS, m.TOGGLE_SITE, m.TOGGLE_FIELD, m.SEEN_NEWS, m.SEEN_REFERRALS, m.CLICK_REFERRALS ];
    }, {} ],
    134: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: s.SET_USER,
                data: e
            };
        }
        function o(e) {
            return {
                type: s.UPDATE_SETTINGS,
                data: e
            };
        }
        function i(e) {
            return {
                type: s.SET_SETTINGS,
                data: e
            };
        }
        function a(e) {
            return {
                type: s.SESSION_INVALIDATE,
                reason: e
            };
        }
        function l() {
            return {
                type: s.INC_FIXED
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setUser = r, n.updateSettings = o, n.setSettings = i, n.sessionInvalidate = a, 
        n.incFixed = l;
        var s = n.t = {
            SET_USER: "user/SET_USER",
            SET_SETTINGS: "user/SET_SETTINGS",
            UPDATE_SETTINGS: "user/UPDATE_SETTINGS",
            SESSION_INVALIDATE: "user/SESSION_INVALIDATE",
            INC_FIXED: "user/INC_FIXED"
        };
    }, {} ],
    135: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/object/keys"), i = r(o), a = e("babel-runtime/helpers/typeof"), l = r(a), s = e("babel-runtime/regenerator"), u = r(s), c = e("babel-runtime/helpers/defineProperty"), d = r(c), f = e("babel-runtime/core-js/object/assign"), m = r(f), p = e("babel-runtime/helpers/asyncToGenerator"), g = r(p), b = e("babel-runtime/core-js/promise"), h = r(b), v = e("emitter"), _ = r(v), y = e("lib/forge"), w = r(y), E = function(e) {
            return new h["default"](function(t, n) {
                try {
                    w["default"].prefs.get(e, t, function(t) {
                        return t && t.message && t.message.includes("SyntaxError") ? (w["default"].prefs.clear(e), 
                        n("Prop:" + e + " has corrupted value, cleanup")) : void n(t);
                    });
                } catch (r) {
                    n(r);
                }
            });
        }, k = _["default"]({
            get: function() {
                var e = g["default"](u["default"].mark(function t(e) {
                    var n, r;
                    return u["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = Array.isArray(e), r = void 0, t.prev = 2, !n) {
                                t.next = 7;
                                break;
                            }
                            return t.delegateYield(u["default"].mark(function o() {
                                var t;
                                return u["default"].wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return n.next = 2, h["default"].all(e.map(E));

                                      case 2:
                                        t = n.sent, r = e.reduce(function(e, n, r) {
                                            return m["default"](e, d["default"]({}, n, t[r]));
                                        }, {});

                                      case 4:
                                      case "end":
                                        return n.stop();
                                    }
                                }, o, void 0);
                            })(), "t0", 5);

                          case 5:
                            t.next = 10;
                            break;

                          case 7:
                            return t.next = 9, E(e);

                          case 9:
                            r = t.sent;

                          case 10:
                            t.next = 16;
                            break;

                          case 12:
                            t.prev = 12, t.t1 = t["catch"](2), n && (r = {}), console.warn("prefs get error:", t.t1);

                          case 16:
                            return t.abrupt("return", r);

                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t, void 0, [ [ 2, 12 ] ]);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(),
            set: function() {
                var e = g["default"](u["default"].mark(function t(e, n) {
                    return u["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (null === e || "object" !== ("undefined" == typeof e ? "undefined" : l["default"](e))) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", i["default"](e).forEach(function(t) {
                                return k.set(t, e[t]);
                            }));

                          case 2:
                            try {
                                w["default"].prefs.set(e, n);
                            } catch (r) {
                                console.warn("prefs set error", r);
                            }

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, void 0);
                }));
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            }(),
            all: function() {
                return new h["default"](function(e, t) {
                    try {
                        w["default"].prefs.all(e, t);
                    } catch (n) {
                        t(n);
                    }
                });
            },
            clearAll: function() {
                try {
                    w["default"].prefs.clearAll();
                } catch (e) {
                    console.warn("prefs clearAll error", e);
                }
            }
        });
        n["default"] = k, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/assign": 7,
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/core-js/promise": 14,
        "babel-runtime/helpers/asyncToGenerator": 18,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/typeof": 28,
        "babel-runtime/regenerator": 124,
        emitter: "emitter",
        "lib/forge": 183
    } ],
    136: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            function n() {
                ne = ce.createElement("grammarly-btn"), re = h["default"].findDOMNode(j()), r(), 
                oe = new $["default"]({
                    btnEl: re,
                    fieldEl: Q,
                    custom: he,
                    sourceEl: De,
                    isTextarea: "textarea" == ee,
                    initCondition: ve
                }), oe.on("update", b), oe.on("change-state", _), Ae = A["default"]({
                    editorEl: Q,
                    btnEl: re,
                    padding: 15
                }), ie = D["default"]({
                    el: re,
                    editor: ae,
                    posSourceEl: de && Q,
                    enabled: ve,
                    referral: Se,
                    referralWasClicked: Ne,
                    onReferralClick: te.clickReferrals,
                    mimic: $e,
                    btn: We,
                    app: K
                }), le = T["default"]({
                    el: re,
                    doc: ce,
                    win: window
                }), ie.bind(), ie.on("change-state", function(e) {
                    _e = e, x();
                }), v.listen(re, "click", f), t.on("hover", N), v.listen(fe, "focus", o), v.listen(fe, "blur", p), 
                v.isFocused(fe) && (N({
                    target: fe
                }), o()), Le.fieldParentCustomStyle && (Re = v.setCustomCss(Q.parentNode, Le.fieldParentCustomStyle(Q))), 
                !Z.online && We.offline();
            }
            function r() {
                var e = {
                    "z-index": (parseInt(v.css(Q, "z-index")) || 1) + 1
                }, t = Le.btnCustomContainer && Le.btnCustomContainer(Q);
                if (t) {
                    he = !0, De = t;
                    var n = Le.btnCustomStyles && Le.btnCustomStyles(!0, Q);
                    n && u["default"](e, n);
                }
                v.insertAfter(ne, De), b(e);
            }
            function o() {
                if (Ce = !0, ge = !0, we = !0, t.off("hover", N), !ve) return void V();
                if (!xe) {
                    xe = !0;
                    try {
                        ae = E["default"]({
                            app: K,
                            doc: ce,
                            connection: Z,
                            page: J,
                            user: X,
                            type: ee,
                            field: Q,
                            actions: te
                        }), se = C["default"](ae.reset, We.offline), s("on"), ae.run(), ie.updateEditor(ae), 
                        oe.set("minimize", !pe), oe.set("editor", ae);
                    } catch (e) {
                        console.error(e), We.offline();
                    }
                    V();
                }
            }
            function s() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                ae[e]("finish", c), ae[e]("rendered", V), ae[e]("sending", I), ae[e]("show-dialog", B);
            }
            function c() {
                B(), V();
            }
            function f() {
                ae && ae.isOffline() && le.fastShow();
            }
            function p(e) {
                ye && v.isFocused(fe) && N(e);
            }
            function b(e) {
                u["default"](ue, e), x();
            }
            function _() {
                Ee = !q(), ke = !0, k.fire("button-change-state", Ee), ie && ie.hide();
            }
            function w(e) {
                pe || (fe.focus(), v.hasClass(e.target, G["default"].status) && ie.show(!0));
            }
            function x() {
                ne || n(), j();
            }
            function j() {
                return h["default"].render(g["default"].createElement(R["default"], {
                    state: Y(),
                    inlineStyle: ue,
                    onViewClick: w
                }), ne);
            }
            function N(e) {
                if (!v.isFocused(fe) && ge) {
                    if (Ae.within(e)) return void P();
                    ge = !1;
                }
                if (e.target != fe) return O();
                if (i(e.target, re, fe)) ge = !0, P(); else {
                    if (a(e.target)) return;
                    O();
                }
            }
            function M() {
                ye = !0, we = !0, 0 == re.style.opacity && (re.style.opacity = 1), V(), Fe();
            }
            function P() {
                ye || (ve ? M() : Pe = setTimeout(M, 150));
            }
            function O() {
                if (ye) {
                    if (clearTimeout(Pe), ie.isOpened()) return void (re.style.opacity = 0);
                    ye = !1, we = !1, V();
                }
            }
            function I() {
                pe || (clearTimeout(Me), F());
            }
            function F() {
                clearTimeout(Me), ae && !ae.getText().trim() || me || (me = !0, se && se.start(), 
                !ye && N({
                    target: fe
                }), V());
            }
            function B() {
                clearTimeout(Me), se && se.finish(), Me = setTimeout(H, 200);
            }
            function H() {
                me = !1, V();
            }
            function z() {
                ae && (se && se.finish(), xe = !1, ae.remove(), s("off"));
            }
            function W() {
                Oe && k.fire("session-end", Oe), z(), oe && oe.remove(), ie && ie.remove(), ie && ie.unbind(), 
                v.unlisten(re, "click", f), t.off("hover", N), v.unlisten(fe, "focus", o), v.unlisten(fe, "blur", p), 
                le.remove(), Re && Re(), ne.parentNode && ne.parentNode.removeChild(ne);
            }
            function U(e) {
                var t = e.user, n = e.connection, r = e.page;
                je = t.anonymous, Te = t.premium, Se = t.referral, Ne = r.referralWasClicked, $e = t.mimic, 
                Ge(n.online), ae && ae.updateState({
                    user: t,
                    connection: n,
                    page: r
                }), V();
            }
            function V() {
                var e = ae && ae.errorData() || {};
                e.enabled = ve, e.checking = me, e.anonymous = je, e.premium = Te, e.referral = Se, 
                e.referralWasClicked = Ne, e.mimic = $e, e.fieldWasFocused = Ce, ie && ie.update(e), 
                oe && oe.set("show", we), x();
            }
            function q() {
                return oe.max;
            }
            function Y() {
                var e = ae && ae.errorData() || {};
                return e.critical < 1 && !me && e.plus > 0 && Oe++, {
                    offline: pe,
                    checking: me,
                    enabled: ve,
                    anonymous: je,
                    premium: Te,
                    show: we,
                    visible: ye,
                    wasMinimized: ke,
                    minimized: Ee,
                    hovered: _e,
                    isFieldEmpty: be,
                    isFieldHovered: ge,
                    fieldWasFocused: Ce,
                    isEditorInited: xe,
                    referralWasClicked: Ne,
                    errors: e
                };
            }
            var K = e.app, X = e.user, J = e.page, Z = e.connection, Q = e.field, ee = e.type, te = e.actions, ne = (e.disableIntersectionCheck, 
            void 0), re = void 0, oe = void 0, ie = void 0, ae = void 0, le = void 0, se = void 0, ue = {
                visibility: "hidden"
            }, ce = Q.ownerDocument, de = "iframe" == ee, fe = de ? l(Q) : Q, me = !1, pe = !Z.online, ge = void 0, be = 0 == (Q.value || Q.textContent || "").trim().length, he = !1, ve = !0, _e = !1, ye = !1, we = !1, Ee = !1, ke = !1, xe = !1, Ce = !1, je = X.anonymous, Te = X.premium, Se = X.referral, Ne = J.referralWasClicked, $e = X.mimic, Me = void 0, Ae = void 0, Pe = void 0, De = Q, Oe = 0, Le = y["default"](ce).getFixesForCurrentDomain(), Ie = L["default"](J.disabledFields, te.toggleField), Re = void 0, Fe = m["default"].throttle(function() {
                var e, t = (e = {
                    "true": "freemium"
                }, d["default"](e, je, "anonymous"), d["default"](e, Te, "premium"), e), n = t["true"];
                k.call("gnar.send", S.getBrowser() + "Ext/gButtonShown"), k.call("statsc.ui.increment", "stability:g_button_shown_to." + n);
            }, 2e3), Ge = function(e) {
                pe != !e && (pe = !e, oe && oe.set("minimize", e), V(), ae && ae[pe ? "offline" : "online"](), 
                ve && le[pe ? "enable" : "disable"]());
            }, Be = function(e) {
                if (ve != e) {
                    var t = e && !ve, n = S.isSafari() && t;
                    ve = e, Ie.changeFieldState(Q, De, !e), oe && oe.set("maximize", e), e ? (ie.hide(), 
                    o()) : z(), V(), n && (re.style.display = "none", S.asyncCall(function() {
                        return re.style.display = "";
                    }));
                }
            }, He = function() {
                ve = !Ie.isFieldDisabled(Q), Ee = !ve, !ve && Be(!1), x();
            }, ze = function() {
                return re;
            }, We = {
                online: function() {
                    return Ge(!0);
                },
                offline: function() {
                    return Ge(!1);
                },
                enable: function() {
                    return Be(!0);
                },
                disable: function() {
                    return Be(!1);
                },
                remove: W,
                getEl: ze,
                getState: Y,
                updateState: U,
                getPosState: q,
                onViewClick: w,
                onChangeState: _,
                show: P,
                hide: O,
                checking: I,
                cancelChecking: B
            };
            return He(), We;
        }
        function i(e, t, n) {
            return v.isFocused(n) || e == n || v.isParent(e, n) || e == t || v.isParent(e, t);
        }
        function a(e) {
            return 0 == e.className.indexOf("gr-") || v.resolveEl(e, G["default"].textarea_btn) || v.resolveEl(e, "gr__tooltip");
        }
        function l(e) {
            var t = S.guid(), n = e;
            v.setGRAttributes(n, t), n.setAttribute("gramm-ifr", !0);
            var r = n.contentDocument;
            return v.addIframeCss(r), v.setGRAttributes(r.body, t), n.style.height = n.style.height || getComputedStyle(n).height, 
            r.body;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/core-js/object/assign"), u = r(s), c = e("babel-runtime/helpers/defineProperty"), d = r(c), f = e("lodash"), m = r(f), p = e("react"), g = r(p), b = e("react-dom"), h = r(b), v = e("../dom"), _ = e("../sites"), y = r(_), w = e("../editor"), E = r(w), k = e("../tracking"), x = e("../infinity-checker"), C = r(x), j = e("../elements/error-tooltip"), T = r(j), S = e("../util"), N = e("./pos"), $ = r(N), M = e("./path"), A = r(M), P = e("./menu"), D = r(P), O = e("./state"), L = r(O), I = e("./view"), R = r(I), F = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        }, G = r(F);
        n["default"] = o, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../editor": 156,
        "../elements/error-tooltip": 162,
        "../infinity-checker": 190,
        "../sites": 199,
        "../tracking": 214,
        "../util": 218,
        "./menu": 139,
        "./path": 142,
        "./pos": 144,
        "./state": 147,
        "./view": 148,
        "babel-runtime/core-js/object/assign": 7,
        "babel-runtime/helpers/defineProperty": 21,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    137: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e) {
                function t(e, t) {
                    l.call("statsc.ui.increment", "activity:" + t + ".button_created"), w.set(e, m["default"]({
                        field: e,
                        app: f,
                        user: h,
                        page: v,
                        connection: b,
                        type: t,
                        actions: _
                    }, y));
                }
                c(e), e.textareas.forEach(function(e) {
                    return t(e, "textarea");
                }), e.contenteditables.forEach(function(e) {
                    return t(e, "contenteditable");
                }), e.iframes.forEach(function(e) {
                    return t(e, "iframe");
                }), e.htmlghosts.forEach(function(e) {
                    return t(e, "htmlghost");
                });
            }
            function n(e) {
                console.log("remove", e), w.get(e) && w.get(e).remove(), w["delete"](e);
            }
            function r() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                y[e]("add", t), y[e]("remove", n);
            }
            function o(e) {
                i(e.connection.bgNotConnected), f.elements && f.elements.updateState(e), w.forEach(function(t) {
                    return t.updateState(e);
                });
            }
            function i(e) {
                if (e && E) u["default"].start(p), l.call("statsc.ui.increment", "stability:lost_connection_to_bg_page"), 
                l.call("felog.error", "lost_connection_to_bg_page"); else if (!e && !E) {
                    var t = u["default"].stop(p);
                    l.call("statsc.ui.timing", "stability:restore_connection_to_bg_page", t), l.call("felog.info", "restore_connection_to_bg_page", {
                        active_time: t
                    });
                }
                E = !e;
            }
            function s() {
                r("off"), w.forEach(function(e) {
                    return e.remove();
                }), w.clear(), w = null, f.elements && f.elements.clear(), f.elements = null, y.reset(), 
                y.stop(), y = null;
            }
            function c(e) {
                try {
                    console.log("add", e);
                } catch (t) {
                    console.log("fields added");
                }
            }
            var f = e.app, g = e.doc, b = e.connection, h = e.user, v = e.page, _ = e.actions, y = d["default"]({
                doc: g,
                page: v
            }), w = new a["default"](), E = !0;
            return i(b.bgNotConnected), r("on"), t(y.get()), {
                add: t,
                updateState: o,
                remove: n,
                clear: s
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/core-js/map"), a = r(i), l = e("../tracking"), s = e("../timers"), u = r(s), c = e("../page-fields"), d = r(c), f = e("./button"), m = r(f), p = "life_without_bg_connection";
        n["default"] = o, t.exports = n["default"];
    }, {
        "../page-fields": 194,
        "../timers": 210,
        "../tracking": 214,
        "./button": 136,
        "babel-runtime/core-js/map": 6
    } ],
    138: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("react-dom"), _ = r(v), y = e("../../dom"), w = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, E = r(w), k = function(e) {
            function t() {
                u["default"](this, t);
                var e = m["default"](this, l["default"](t).call(this));
                return e.onMouseEnterHandler = e.onMouseEnterHandler.bind(e), e.onMouseLeaveHandler = e.onMouseLeaveHandler.bind(e), 
                e.onMouseClick = e.onMouseClick.bind(e), e;
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "onMouseEnterHandler",
                value: function() {
                    var e = this, t = this.props.data.type.includes("referral"), n = t ? 150 : 1350;
                    this.tooltipTimeout = setTimeout(function() {
                        e.props.data.onTooltip({
                            active: !0,
                            el: _["default"].findDOMNode(e),
                            text: e.props.data.text,
                            cls: t ? "referral" : e.props.data.type
                        });
                    }, n);
                }
            }, {
                key: "onMouseLeaveHandler",
                value: function() {
                    clearTimeout(this.tooltipTimeout), this.props.data.onTooltip({
                        active: !1,
                        text: this.props.data.text,
                        cls: this.props.data.type
                    });
                }
            }, {
                key: "onMouseClick",
                value: function(e) {
                    this.props.data.click && this.props.data.click(e), "disable" == this.props.data.type && this.onMouseLeaveHandler();
                }
            }, {
                key: "isShowInviteFriends",
                value: function(e) {
                    return !e.referralWasClicked;
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props.data, n = y.cs((e = {}, i["default"](e, E["default"].btn, !0), 
                    i["default"](e, E["default"]["btn_" + t.type], !0), i["default"](e, E["default"].counter, t.count > 0), 
                    i["default"](e, E["default"].counter100, t.count > 99), e));
                    return h["default"].createElement("div", {
                        className: E["default"].buttonArea
                    }, t.type.includes("referral") ? h["default"].createElement("div", {
                        className: E["default"].referralArea,
                        onClick: this.onMouseClick,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler,
                        "data-action": t.actionType,
                        tabIndex: "-1"
                    }, h["default"].createElement("div", {
                        className: n
                    }), this.isShowInviteFriends(t) && h["default"].createElement("span", {
                        className: E["default"].referralText
                    }, "Invite Friends")) : h["default"].createElement("div", {
                        className: n,
                        onClick: this.onMouseClick,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler,
                        "data-action": t.actionType,
                        tabIndex: "-1"
                    }, t.count > 0 ? t.count : null));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = k, t.exports = n["default"];
    }, {
        "../../dom": 154,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        react: "react",
        "react-dom": "react-dom"
    } ],
    139: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e) {
                function t() {
                    P.showDialog({
                        caller: "button_hover"
                    }), S.fire("correct-btn-clicked"), k["default"].start("open_editor");
                }
                function n() {
                    return R.mimic.includes("001_premium_popup") ? (S.fire("premium-popup-show"), void new T["default"]({
                        doc: F,
                        plus: R.plus,
                        editor: P
                    })) : r();
                }
                function r() {
                    var e = b["default"].getUpgradeUrlFromMatches({
                        baseUrl: _.URLS.upgrade,
                        returnUrl: "",
                        appType: "popup",
                        matches: P.getMatches()
                    });
                    S.fire("upgrade", "button_hover"), w["default"].emitBackground("open-url", e);
                }
                if (!P.isOffline()) {
                    var o = e.target;
                    h.hasClass(o, A["default"].btn_premium) ? R.premium ? t() : n() : h.hasClass(o, A["default"].btn_grammarly) && t(), 
                    setTimeout(j, 200);
                }
            }
            function n() {
                L(), S.fire("referral-clicked", "gButton"), w["default"].emitBackground("open-url", _.URLS.referral), 
                j();
            }
            function r() {
                S.fire("referral-shown", "gButton");
            }
            function o() {
                R.enabled ? (R.enabled = !1, O.disable(), j()) : (O.enable(), R.enabled = !0), S.fire("btn-disable-in-field", R.enabled), 
                d();
            }
            function i(e) {
                R = e, d();
            }
            function l(e) {
                P = e;
            }
            function u(e) {
                var t = v.getAbsRect(M), n = {}, r = !O.getPosState() && R.enabled, o = t.top, i = t.left;
                return e && (i -= e.clientWidth, o -= e.clientHeight / 2), o += r ? X : Y, i -= r ? K : q, 
                !r && I.menuPosLeft && (i = I.menuPosLeft(P, i, R)), s["default"](n, a["default"]({}, H, "translate(" + i + "px, " + o + "px)")), 
                n;
            }
            function d() {
                var e = m(R, u(), B);
                return V = f["default"].findDOMNode(e), m(R, u(V), G);
            }
            function m(e, r, i) {
                return f["default"].render(c["default"].createElement(C["default"], {
                    style: r,
                    click: t,
                    disableClick: o,
                    referralClick: n,
                    state: e,
                    opened: W
                }), i);
            }
            function g() {
                h.listen(F.documentElement, "mousemove", E), P && P.on("iframe-mousemove", E);
            }
            function y(e) {
                (!W || e) && (h.unlisten(F.documentElement, "mousemove", E), P && P.off("iframe-mousemove", E));
            }
            function E(e) {
                var t = h.resolveEl(e.target, D["default"].textarea_btn);
                if (t && t != M) return j();
                if (h.hasClass(M, D["default"].offline)) return j();
                var n = h.resolveEl(e.target, A["default"].hoverMenu);
                return t || n == z ? e.target.classList.contains(D["default"].btn_text) ? j() : void x() : j();
            }
            function x(e) {
                (U && !R.offline && R.fieldWasFocused || e) && (W || (W = !0, J.emit("change-state", !0), 
                d(), R.referral && r()));
            }
            function j() {
                W && (W = !1, J.emit("change-state", !1), d());
            }
            function N() {
                y(), G.parentNode && G.parentNode.removeChild(G), B.parentNode && B.parentNode.removeChild(B);
            }
            var M = e.el, P = e.editor, O = e.btn, L = e.onReferralClick, I = $["default"](F).getFixesForCurrentDomain(), R = {
                critical: 0,
                plus: 0,
                mimic: e.mimic,
                offline: !1,
                referral: e.referral,
                referralWasClicked: e.referralWasClicked,
                enabled: e.enabled,
                initial: e.initial,
                checking: e.checking,
                fieldWasFocused: e.fieldWasFocused
            }, F = M.ownerDocument, G = F.createElement("div"), B = F.createElement("div"), H = h.transformProp(F), z = f["default"].findDOMNode(d()), W = !1, U = !0, V = void 0, q = -26, Y = 11, K = -13, X = 2;
            h.addClass(G, "gr-top-z-index"), h.addClass(G, "gr-top-zero"), G.setAttribute("tabindex", -1), 
            B.style.cssText = "visibility: hidden;top: -9999px;position: absolute;opacity: 0", 
            F.documentElement.insertBefore(G, F.body), F.documentElement.insertBefore(B, F.body);
            var J = p["default"]({
                show: x,
                hide: j,
                bind: g,
                unbind: y,
                remove: N,
                render: d,
                menuEl: z,
                update: i,
                onclick: t,
                updateEditor: l,
                isOpened: function() {
                    return W;
                },
                isEnabled: function() {
                    return U;
                },
                disable: function() {
                    return U = !1;
                },
                enable: function() {
                    return U = !0;
                },
                getState: function() {
                    return R;
                }
            });
            return J;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/defineProperty"), a = r(i), l = e("babel-runtime/core-js/object/assign"), s = r(l), u = e("react"), c = r(u), d = e("react-dom"), f = r(d), m = e("emitter"), p = r(m), g = e("grammarly-editor"), b = r(g), h = e("../../dom"), v = e("../../position"), _ = e("../../config"), y = e("../../message"), w = r(y), E = e("../../timers"), k = r(E), x = e("./view"), C = r(x), j = e("../../elements/premium-dialog"), T = r(j), S = e("../../tracking"), N = e("../../sites"), $ = r(N), M = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, A = r(M), P = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        }, D = r(P);
        n["default"] = o, t.exports = n["default"];
    }, {
        "../../config": 150,
        "../../dom": 154,
        "../../elements/premium-dialog": 168,
        "../../message": 192,
        "../../position": 195,
        "../../sites": 199,
        "../../timers": 210,
        "../../tracking": 214,
        "./view": 141,
        "babel-runtime/core-js/object/assign": 7,
        "babel-runtime/helpers/defineProperty": 21,
        emitter: "emitter",
        "grammarly-editor": "grammarly-editor",
        react: "react",
        "react-dom": "react-dom"
    } ],
    140: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("../../dom"), _ = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, y = r(_), w = function(e) {
            function t() {
                return u["default"](this, t), m["default"](this, l["default"](t).apply(this, arguments));
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.data || {}, n = this.props.measure, r = v.cs((e = {}, i["default"](e, y["default"].tooltip, !0), 
                    i["default"](e, y["default"].tooltip_visible, t.active && !n), i["default"](e, y["default"].tooltip_hidden, !t.active && !n), 
                    i["default"](e, y["default"]["tooltip_" + t.cls], !0), e)), o = void 0;
                    return t.active && !n && (o = {
                        right: 0
                    }), h["default"].createElement("div", {
                        style: o,
                        className: r,
                        refs: "tooltip",
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    });
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = w, t.exports = n["default"];
    }, {
        "../../dom": 154,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        react: "react"
    } ],
    141: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("react-dom"), _ = r(v), y = e("./action"), w = r(y), E = e("./tooltip"), k = r(E), x = e("../../dom"), C = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, j = r(C), T = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var i = arguments.length, a = Array(i), s = 0; i > s; s++) a[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(a))), 
                r.state = {
                    tooltip: {
                        active: !1,
                        text: "",
                        cls: ""
                    }
                }, r.onTooltip = function(e) {
                    var t = _["default"].render(h["default"].createElement(k["default"], {
                        data: e,
                        measure: !0
                    }), r.tooltipMeasure);
                    setTimeout(function() {
                        e.width = _["default"].findDOMNode(t).clientWidth, r.setState({
                            tooltip: e
                        });
                    }, 10);
                }, o = n, m["default"](r, o);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "componentDidMount",
                value: function() {
                    this.tooltipMeasure = document.createElement("div"), this.tooltipMeasure.style.cssText = "visibility: hidden;top: -9999px;position: absolute;opacity: 0", 
                    document.documentElement.appendChild(this.tooltipMeasure);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.documentElement.removeChild(this.tooltipMeasure);
                }
            }, {
                key: "getTooltipText",
                value: function(e) {
                    return e.enabled ? "Disable in this text field" : "Enable Grammarly here";
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.state, r = n.critical, o = n.plus, a = x.cs((e = {}, 
                    i["default"](e, j["default"].hoverMenu, !0), i["default"](e, j["default"].initial, n.initial), 
                    i["default"](e, j["default"].premium, n.premium), i["default"](e, j["default"].anonymous, n.anonymous), 
                    i["default"](e, j["default"].checking, n.checking), i["default"](e, j["default"].disabled, 0 == n.enabled), 
                    i["default"](e, j["default"].critical, r), i["default"](e, j["default"].plus, o), 
                    i["default"](e, j["default"].opened, t.opened), i["default"](e, j["default"].referral, n.referral), 
                    e)), l = n.anonymous ? "Log in to enable personalized<br/>checks and other features" : "Edit in Grammarly", s = n.premium ? "See advanced corrections" : "Upgrade to make advanced corrections", u = this.getTooltipText(n), c = "Invite friends. Get Premium for free.";
                    return h["default"].createElement("div", {
                        className: a,
                        style: t.style
                    }, h["default"].createElement("div", {
                        className: j["default"].panel
                    }, h["default"].createElement(k["default"], {
                        data: this.state.tooltip
                    }), h["default"].createElement(w["default"], {
                        data: {
                            type: "disable",
                            size: "small",
                            text: u,
                            click: t.disableClick,
                            onTooltip: this.onTooltip
                        }
                    }), n.referral && h["default"].createElement(w["default"], {
                        data: {
                            type: "referral",
                            size: "small",
                            text: c,
                            click: t.referralClick,
                            onTooltip: this.onTooltip,
                            referralWasClicked: n.referralWasClicked
                        }
                    }), h["default"].createElement("div", {
                        className: j["default"].line
                    }), o ? h["default"].createElement(w["default"], {
                        data: {
                            type: "premium",
                            size: "small",
                            text: s,
                            count: o,
                            click: t.click,
                            onTooltip: this.onTooltip
                        }
                    }) : null, h["default"].createElement(w["default"], {
                        data: {
                            type: "grammarly",
                            actionType: "editor",
                            size: "small",
                            text: l,
                            click: t.click,
                            count: r,
                            onTooltip: this.onTooltip
                        }
                    })));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = T, t.exports = n["default"];
    }, {
        "../../dom": 154,
        "./action": 138,
        "./tooltip": 140,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        react: "react",
        "react-dom": "react-dom"
    } ],
    142: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function(e) {
            function t(e, t) {
                return t.left >= e.left && t.top >= e.top ? "se" : t.left >= e.left && t.top <= e.top ? "ne" : t.left <= e.left && t.top <= e.top ? "nw" : t.left <= e.left && t.top >= e.top ? "sw" : void 0;
            }
            function n(e, t, n, r) {
                var o = r.left + r.width + l, i = r.left - l, a = r.top + r.height + l, s = r.top - l, u = n.left - l, c = n.left + n.width + l, d = n.top - l, f = n.top + n.height + l, m = c > o ? c : o;
                return "se" == e && t.x >= u && t.x <= m && t.y >= d && t.y <= a ? !0 : "ne" == e && t.x >= u && t.x <= m && t.y >= s && t.y <= f ? !0 : "nw" == e && t.x >= i && t.x <= c && t.y >= s && t.y <= f ? !0 : "sw" == e && t.x >= i && t.x <= c && t.y >= d && t.y <= a ? !0 : !1;
            }
            function r(e) {
                var t = e.getBoundingClientRect();
                return {
                    height: t.height,
                    width: t.width,
                    top: t.top,
                    left: t.left
                };
            }
            function o(e) {
                var o = r(i), l = r(a), s = t(o, l);
                return n(s, e, o, l);
            }
            var i = e.editorEl, a = e.btnEl, l = e.padding, s = void 0;
            return s = {
                within: o
            };
        };
        n["default"] = r, t.exports = n["default"];
    }, {} ],
    143: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e) {
                return e.ghostarea ? e.ghostarea.gh.clone.firstChild : l;
            }
            function n(e) {
                var n = d(t(e)), r = e && e.getText().trim().length;
                if (n && r > 0) return m = r, "minimize";
                var o = m - r > u, i = !m || o || 0 == r;
                return i && "maximize";
            }
            function r(e, t) {
                return t && e != t ? t : void 0;
            }
            function o(e, t) {
                var o = e.minimize, i = e.maximize, a = e.editor, s = t ? "maximize" : "minimize";
                if (o || i) {
                    var u = f.forceMinimize && f.forceMinimize(l);
                    if (u || o && !i) return r(s, "minimize");
                    if (!a || !o && i) return r(s, "maximize");
                    var c = n(a);
                    return r(s, c);
                }
            }
            var i = e.btnEl, l = e.fieldEl, u = 200, c = i.ownerDocument, d = s["default"]({
                btnEl: i
            }), f = a["default"](c).getFixesForCurrentDomain(), m = void 0;
            return {
                get: o
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = o;
        var i = e("lib/sites"), a = r(i), l = e("./intersect"), s = r(l);
        t.exports = n["default"];
    }, {
        "./intersect": 145,
        "lib/sites": 199
    } ],
    144: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/toConsumableArray"), i = r(o), a = e("babel-runtime/core-js/object/assign"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("lodash"), m = r(f), p = e("emitter"), g = r(p), b = e("lib/window-events"), h = r(b), v = e("lib/util"), _ = e("lib/dom"), y = e("./position"), w = r(y), E = e("./condition"), k = r(E), x = function() {
            function e(t) {
                var n = this, r = t.btnEl, o = t.fieldEl, i = t.sourceEl, a = t.custom, s = t.isTextarea, c = t.initCondition;
                u["default"](this, e), this.state = {
                    minimize: !1,
                    maximize: !0,
                    editor: null,
                    show: !1
                }, this.max = !0, this.windowEvents = [ {
                    paste: function() {
                        return n.debouncedUpdate();
                    },
                    resize: function() {
                        return n.update();
                    },
                    keyup: function() {
                        _.isFocused(n.fieldEl) && n.debouncedUpdate();
                    }
                }, !0 ], this.checkResize = function() {
                    try {
                        n.position && n.position.resize() && n.debouncedUpdate();
                    } catch (e) {
                        console.error(e), v.cancelInterval(n.checkResize);
                    }
                }, this.debouncedUpdate = m["default"].debounce(function() {
                    return n.update();
                }, 50), this.update = function() {
                    if (n.state.show && n.position && (n.emit("update", {
                        visibility: "hidden"
                    }), n.emit("update", n.position.get(n.max)), n.state.editor)) {
                        var e = n.condition.get(n.state, n.max);
                        "undefined" != typeof e && (n.max = "maximize" == e, n.emit("change-state"), n.update());
                    }
                }, this.remove = function() {
                    n.listeners("off"), n.condition = null, n.position && n.position.remove(), n.position = null;
                }, this.max = c, this.state.minimize = !c, this.state.maximize = c, l["default"](this, g["default"]({
                    fieldEl: o
                })), this.position = w["default"]({
                    btnEl: r,
                    sourceEl: i,
                    custom: a,
                    isTextarea: s
                }), this.condition = k["default"]({
                    btnEl: r,
                    fieldEl: o,
                    custom: a
                }), this.listeners();
            }
            return d["default"](e, [ {
                key: "set",
                value: function(e, t) {
                    this.state[e] = t, this.update();
                }
            }, {
                key: "listeners",
                value: function() {
                    var e, t = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                    h["default"][t].apply(h["default"], i["default"](this.windowEvents));
                    var n = "on" == t ? _.on : _.off;
                    (e = this.fieldEl, n).call(e, "scroll", this.debouncedUpdate);
                    var r = "on" == t ? v.interval : v.cancelInterval;
                    r(this.checkResize, 200);
                }
            } ]), e;
        }();
        n["default"] = x, t.exports = n["default"];
    }, {
        "./condition": 143,
        "./position": 146,
        "babel-runtime/core-js/object/assign": 7,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/toConsumableArray": 27,
        emitter: "emitter",
        "lib/dom": 154,
        "lib/util": 218,
        "lib/window-events": 219,
        lodash: "lodash"
    } ],
    145: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e, t, n) {
                var r = document.createElement("div");
                r.className = t, r.style.top = e.top + "px", r.style.left = e.left + "px", r.style.height = e.height + "px", 
                r.style.width = e.width + "px", r.style.position = "absolute", r.style.border = "1px dashed red", 
                r.style.zIndex = "1000000", r.style.pointerEvents = "none", n && (r.style.borderColor = n), 
                document.body.appendChild(r);
            }
            function n(e, t) {
                return e.left + e.width > t.left && (e.bottom > t.top && e.bottom < t.bottom || e.top < t.bottom && e.top > t.top);
            }
            function r(e, r) {
                var o = document.body.scrollTop;
                return i && a["default"](document.querySelectorAll(".gr-evade")).forEach(function(e) {
                    return e.parentElement.removeChild(e);
                }), e.map(function(e) {
                    return {
                        top: e.top + o,
                        bottom: e.bottom + o,
                        left: e.left,
                        width: e.width,
                        height: e.height
                    };
                }).some(function(e) {
                    return i && t(e, "gr-evade"), n(e, r);
                });
            }
            var o = e.btnEl, i = !1, l = 2;
            return function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], n = o.getBoundingClientRect();
                if (n) {
                    n = {
                        top: n.top + document.body.scrollTop - l + t,
                        bottom: n.bottom + document.body.scrollTop + l + t,
                        left: n.left - l + t,
                        width: n.width,
                        height: n.height
                    };
                    var i = document.createRange();
                    i.selectNodeContents(e);
                    var s = e.clientWidth, u = a["default"](i.getClientRects()).filter(function(e) {
                        var t = e.width;
                        return s > t;
                    });
                    return r(u, n);
                }
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/core-js/array/from"), a = r(i);
        n["default"] = o, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/array/from": 2
    } ],
    146: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t() {
                var e = g.getPos(d), t = e.x != T.x || e.y != T.y;
                return j.clientWidth != d.clientWidth || j.clientHeight != d.clientHeight || t ? (T = e, 
                !0) : void 0;
            }
            function n() {
                if (!$) {
                    j = f["default"]({
                        offsetHeight: d.offsetHeight,
                        clientWidth: d.clientWidth,
                        clientHeight: d.clientHeight
                    }, b.compStyle(d, "border-bottom-width", "border-right-width", "resize", "padding-top", "padding-bottom", "overflowX", "overflow", "padding-right"), g.getAbsRect(d)), 
                    j.resize = [ "both", "horizontal", "vertical" ].includes(j.resize);
                    var e = g.getAbsRect(u), t = e.left, n = e.top;
                    j.left += S - t, j.top += N - n, _ || "scroll" == j.overflowX || "scroll" == j.overflow || (j.height = Math.max(parseInt(j.height), j.offsetHeight));
                }
            }
            function r(e) {
                if (e) return 0;
                var t = parseInt(j["padding-right"]);
                return t > 0 ? -t / 2 + 2 : -5;
            }
            function o(e, t) {
                var n = e ? E : k;
                return e ? t ? (n - j.height) / 2 : -8 : 0;
            }
            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0], t = {
                    visibility: ""
                };
                if (h) return c["default"](t, M.btnCustomStyles ? M.btnCustomStyles(e, d) : {});
                n();
                var i = !e && j.resize ? -10 : 0, l = j.clientHeight < y, u = o(e, l) + r(e), f = e || l ? 0 : -7, m = e ? E : k, p = M.btnDiff && M.btnDiff(d, e) || [ 0, 0 ], g = s["default"](p, 2), b = g[0], v = g[1], _ = j.left + j.width - parseInt(j["border-right-width"]) - m + u + b, w = j.top + j.height - parseInt(j["border-bottom-width"]) - m + u + f + v + i;
                return _ == S && w == N ? t : (c["default"](t, a["default"]({}, C, "translate(" + _ + "px, " + w + "px)")), 
                $ = !0, S = _, N = w, t);
            }
            function l() {
                b.off.call(u, w, A);
            }
            var u = e.btnEl, d = e.sourceEl, m = e.custom, h = void 0 === m ? !1 : m, v = e.isTextarea, _ = void 0 === v ? !1 : v, y = 25, w = b.transitionEndEventName(), E = 22, k = 8, x = u.ownerDocument, C = b.transformProp(x), j = void 0, T = g.getPos(d), S = 0, N = 0, $ = !1, M = p["default"](x).getFixesForCurrentDomain(), A = function() {
                $ = !1, n();
            };
            return b.on.call(u, w, A), n(), {
                get: i,
                resize: t,
                remove: l
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/defineProperty"), a = r(i), l = e("babel-runtime/helpers/slicedToArray"), s = r(l), u = e("babel-runtime/core-js/object/assign"), c = r(u), d = e("babel-runtime/helpers/extends"), f = r(d);
        n["default"] = o;
        var m = e("lib/sites"), p = r(m), g = e("lib/position"), b = e("lib/dom");
        t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/assign": 7,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/slicedToArray": 26,
        "lib/dom": 154,
        "lib/position": 195,
        "lib/sites": 199
    } ],
    147: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            function e(e, n) {
                var r = s["default"](e.ownerDocument).getFixesForCurrentDomain(), o = r.fieldStateForDomain && r.fieldStateForDomain(e);
                if (o) return o;
                var i = n && "IFRAME" == n.tagName, a = i ? n : e, l = [ a.getAttribute("id") || "", a.getAttribute("name") || "" ].filter(Boolean);
                return l.length || l.push(t(a)), i && l.push(n.ownerDocument.location.host || ""), 
                l.join(":");
            }
            function t(e, t) {
                return e && e.id && !t ? '//*[@id="' + e.id + '"]' : n(e);
            }
            function n(e) {
                for (var t = []; e && 1 == e.nodeType; e = e.parentNode) {
                    for (var n = 0, r = e.previousSibling; r; r = r.previousSibling) r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName == e.nodeName && ++n;
                    var o = e.nodeName.toLowerCase(), i = n ? "[" + (n + 1) + "]" : "";
                    t.splice(0, 0, o + i);
                }
                return t.length ? "/" + t.join("/") : null;
            }
            function r(t, n) {
                var r = e(t, n);
                return i[r];
            }
            function o(t, n, r) {
                var o = e(t, n);
                i[o] != r && l(a["default"]({}, o, r));
            }
            var i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], l = arguments[1];
            return {
                getSelector: e,
                isFieldDisabled: r,
                changeFieldState: o
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/defineProperty"), a = r(i);
        n["default"] = o;
        var l = e("../sites"), s = r(l);
        t.exports = n["default"];
    }, {
        "../sites": 199,
        "babel-runtime/helpers/defineProperty": 21
    } ],
    148: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("lodash"), h = r(b), v = e("react"), _ = r(v), y = e("../dom"), w = e("../util"), E = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        }, k = r(E), x = function(e) {
            function t() {
                return u["default"](this, t), m["default"](this, l["default"](t).apply(this, arguments));
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.state, n = t.anonymous, r = t.premium, o = this.props.onViewClick, a = t.errors.critical, l = a > 0 && !t.checking, s = !t.enabled, u = t.offline, c = !s && !u && t.isFieldEmpty && n, d = h["default"]([ k["default"].textarea_btn ]).push(y.cs((e = {}, 
                    i["default"](e, k["default"].show, t.show), i["default"](e, k["default"].minimized, t.minimized), 
                    i["default"](e, k["default"].minimize_transition, t.wasMinimized), i["default"](e, k["default"].errors, l), 
                    i["default"](e, k["default"].has_errors, a > 0), i["default"](e, k["default"].errors_100, a > 99), 
                    i["default"](e, k["default"].offline, u), i["default"](e, k["default"].checking, t.checking && !u && !s), 
                    i["default"](e, k["default"].disabled, s), i["default"](e, k["default"].plus_only, r && !l && t.errors.plus > 0), 
                    i["default"](e, k["default"].anonymous, n), i["default"](e, k["default"].hovered, t.hovered), 
                    i["default"](e, k["default"].field_hovered, t.isFieldHovered), i["default"](e, k["default"].not_focused, !t.fieldWasFocused), 
                    e))).join(" "), f = y.camelizeAttrs(this.props.inlineStyle), m = l && a ? a : " ", p = "Found " + a + " " + w.declension(a, [ "error", "errors" ]) + " in text", g = "Not signed in";
                    return a || (p = "Protected by Grammarly"), _["default"].createElement("div", {
                        onClick: o,
                        style: f,
                        className: d
                    }, _["default"].createElement("div", {
                        className: k["default"].transform_wrap
                    }, _["default"].createElement("div", {
                        title: p,
                        className: k["default"].status
                    }, m)), c ? _["default"].createElement("span", {
                        className: k["default"].btn_text
                    }, g) : null);
                }
            } ]), t;
        }(_["default"].Component);
        n["default"] = x, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../util": 218,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        lodash: "lodash",
        react: "react"
    } ],
    149: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("dompurify"), o = function() {
            function e(e) {
                function n(e) {
                    function t(e) {
                        if (e.parentNode) if (e.childNodes.length > 1) {
                            for (var t = document.createDocumentFragment(); e.childNodes.length > 0; ) {
                                var n = e.childNodes[0];
                                t.appendChild(n);
                            }
                            e.parentNode.replaceChild(t, e);
                        } else e.firstChild ? e.parentNode.replaceChild(e.firstChild, e) : e.parentNode.removeChild(e);
                    }
                    function n(e) {
                        if (e) try {
                            for (var n = e.querySelectorAll(".gr_"), r = n.length, o = 0; r > o; o++) t(n[o]);
                        } catch (i) {}
                    }
                    function r(e) {
                        try {
                            Object.defineProperty(e, "innerHTML", {
                                get: function() {
                                    try {
                                        var t = e.ownerDocument.createRange();
                                        t.selectNodeContents(e);
                                        var r = t.cloneContents(), o = document.createElement("div");
                                        return o.appendChild(r), n(o), o.innerHTML;
                                    } catch (i) {}
                                },
                                set: function(t) {
                                    try {
                                        var n = e.ownerDocument.createRange();
                                        n.selectNodeContents(e), n.deleteContents();
                                        var r = n.createContextualFragment(t);
                                        e.appendChild(r);
                                    } catch (o) {}
                                }
                            });
                        } catch (t) {}
                    }
                    if (e) {
                        var o = e.cloneNode;
                        e.cloneNode = function(t) {
                            var i = o.call(e, t);
                            if (e.classList.contains("mceContentBody")) i.innerHTML = e.innerHTML, n(i); else try {
                                r(i);
                            } catch (a) {}
                            return i;
                        }, r(e);
                    }
                }
                if ("TEXTAREA" != e.tagName) try {
                    var o = e.ownerDocument, i = r.sanitize(e.getAttribute("data-gramm_id")), a = "document.querySelector(\"[data-gramm_id='" + i + "']\")";
                    t(o, n, [ a ]);
                } catch (l) {
                    console.log("error rewrite " + l);
                }
            }
            function t(e, t, n) {
                var r = e.createElement("script");
                n = n || [], Array.isArray(t) || (t = [ t ]);
                var o = t.join(" "), i = (t[t.length - 1].name, n.join(","));
                r.innerHTML = "(function(){(" + o + ")(" + i + ") })()", e.documentElement.appendChild(r);
            }
            return {
                rewriteInnerHTML: e,
                addScript: t
            };
        }();
        n["default"] = o, t.exports = n["default"];
    }, {
        dompurify: "dompurify"
    } ],
    150: [ function(e, t, n) {
        (function(r) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c["default"](T, e);
            }
            function a() {
                return f["default"] ? f["default"].config.modules.parameters.version : void 0;
            }
            function l() {
                return f["default"] ? f["default"].config.modules.parameters.updateTime : void 0;
            }
            function s() {
                return f["default"] ? f["default"].config.uuid : void 0;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var u = e("babel-runtime/core-js/object/assign"), c = o(u), d = "undefined" != typeof window ? window.forge : "undefined" != typeof r ? r.forge : null, f = o(d), m = e("spark-md5"), p = o(m), g = {
                key: "b37252e300204b00ad697fe1d3b979e1",
                project: "15",
                pingTimeout: 6e5
            }, b = {
                url: "https://gnar.grammarly.com",
                qaUrl: "https://gnar.qagr.io"
            }, h = "c10dd64c87f70ef5563a63c368797e8c", v = {
                qaKey: "7a5c95b5cba1b225d00cc3ba1c410c78",
                key: h,
                cookie: "mp_" + h + "_mixpanel"
            }, _ = {
                URL: "https://stats-public.grammarly.io/",
                PREFIX: "grammarly.ui"
            }, y = "grammarly.com", w = "https://www." + y, E = "https://data." + y, k = "https://app." + y, x = "https://auth." + y + "/v3", C = x + "/user", j = w + "/after_install_page", T = {
                app: k,
                capi: "wss://capi." + y + "/freews",
                dapiMimic: E + "/api/mimic",
                dapiProps: E + "/api/props",
                editorDictionary: k + "/profile/dictionary",
                dictionary: "https://capi." + y + "/api/defs",
                docs: k + "/docs",
                docsApi: "https://dox." + y + "/documents",
                authSettings: C + "/settings",
                authCreatePage: x + "/redirect-anonymous?location=" + j,
                userOrAnonymous: C + "/oranonymous",
                authSignin: x + "/login",
                authSignup: x + "/signup",
                signin: w + "/signin",
                signup: w + "/signup",
                resetPassword: w + "/resetpassword",
                raven: "felog.grammarly.io",
                referral: w + "/referral?page=extension",
                welcomeC: w + "/extension-success",
                upgrade: w + "/upgrade",
                uninstall: w + "/extension-uninstall",
                terms: w + "/terms",
                policy: w + "/privacy-policy",
                pageConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json"
            }, S = [ "The G logo gets out of the way when you're typing", "Switch between American and British English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface" ], N = [ "id", "email", "firstName", "anonymous", "type", "subscriptionFree", "premium", "settings", "registrationDate", "mimic", "groups", "extensionInstallDate", "fixed_errors", "referral" ];
            N.push("token");
            var $ = {
                EXAMPLE_FEATURE: "example_feature"
            }, M = {
                example_feature: {
                    Free: [],
                    Premium: []
                }
            };
            n["default"] = {
                news: S,
                newsId: S.length && p["default"].hash(S.join("\n")),
                getUpdateTime: l,
                GRAMMARLY_DOMAIN: y,
                URLS: T,
                updateUrls: i,
                FELOG: g,
                STATSC: _,
                DAPI: E,
                MIXPANEL: v,
                GNAR: b,
                getVersion: a,
                getUuid: s,
                isTest: !f["default"],
                nextVerClass: "gr_ver_2",
                restrictedAttrs: [ "data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "pm-container", [ "class", "redactor-editor" ], [ "aria-label", "Search Facebook" ] ],
                restrictedParentAttrs: "[data-reactid]",
                userFields: N,
                externalEvents: [ "changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix" ],
                development: "127.0.0.1:3117" == document.location.host,
                FEATURES: $,
                isFeatureDisabled: function(e, t, n) {
                    var r = M[e][n] || [];
                    return r && t && t.some(function(e) {
                        return r.includes(e);
                    });
                }
            }, t.exports = n["default"];
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "babel-runtime/core-js/object/assign": 7,
        "spark-md5": "spark-md5"
    } ],
    151: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./util"), o = void 0, i = [ "info", "warn", "error", "time", "timeEnd", "debug" ];
        o = r.isBgOrPopup() ? window.console : window.gdebug = function() {
            var e = console;
            return function(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                t === !1 ? (window.console = {}, window.console.log = r._f, i.forEach(function(t) {
                    window.console[t] = n ? r._f : e[t];
                })) : window.console = e;
            };
        }(), n["default"] = o, t.exports = n["default"];
    }, {
        "./util": 218
    } ],
    152: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            function e(e) {
                b.innerHTML = E["default"].sanitize(e);
                var t = b.querySelector("span.qualifier");
                return t ? (t.innerHTML = t.innerHTML.replace("(", "").replace(")", ""), b.innerHTML) : e;
            }
            function t(e) {
                return e.replace(/&lt;(sup|sub)&gt;(.*?)&lt;(\/sup|\/sub)&gt;/, "<$1>$2<$3>").replace(/&amp;(?=\w{1,8};)/, "&");
            }
            function n(n, o) {
                var i = {
                    ownerDocument: u,
                    getBoundingClientRect: function() {
                        return o.pos;
                    },
                    getClientRects: function() {
                        return [ o.pos ];
                    }
                };
                if (S = n, S.defs && S.defs.length) {
                    var a = g["default"].getAbsRect(i);
                    S.title = o.el.toString(), S.defs = S.defs.splice(0, 3).map(e).map(t), k = r(!1), 
                    C = y.findDOMNode(k.component), $ = g["default"].posToRect(C, a), r();
                } else w.enable(), w.show({
                    posEl: o.el,
                    text: "No definition found"
                });
                x["default"].on(P, !0), j["default"].start(v), T.call("statsc.ui.increment", "activity:defs.open");
            }
            function r() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                return f["default"].renderReactWithParent(_["default"].createElement(A, {
                    pos: $,
                    data: S,
                    visible: e,
                    className: p
                }), u.documentElement, v, "grammarly-card");
            }
            function o() {
                k && k.remove(), x["default"].off(P, !0), D.emit("hide"), w.disable(), w.hide(), 
                k = null, T.call("statsc.ui.timing", "activity:defs.close", j["default"].stop(v));
            }
            function i(e) {
                27 == m.keyCode(e) && o();
            }
            function a(e) {
                var t = f["default"].inEl(e.target, C);
                (!t || t && f["default"].hasClass(e.target, M("btn-close"))) && o();
            }
            var l = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], s = l.doc, u = void 0 === s ? document : s, d = l.domCls, p = void 0 === d ? "" : d, b = u.createElement("div"), v = c["default"]("DictionaryCard"), w = N["default"]({
                cls: "gr-notfound-tooltip",
                enabled: !1,
                doc: u
            }), k = void 0, C = void 0, S = void 0, $ = void 0, P = {
                click: a,
                keydown: i,
                scroll: o,
                resize: o
            }, D = h["default"]({
                show: n,
                hide: o,
                unescapeSuperscript: t
            });
            return D;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/typeof"), a = r(i), l = e("babel-runtime/helpers/defineProperty"), s = r(l), u = e("babel-runtime/core-js/symbol"), c = r(u), d = e("./dom"), f = r(d), m = e("./util"), p = e("./position"), g = r(p), b = e("emitter"), h = r(b), v = e("react"), _ = r(v), y = e("react-dom"), w = e("dompurify"), E = r(w), k = e("./window-events"), x = r(k), C = e("./timers"), j = r(C), T = e("./tracking"), S = e("./elements/tooltip"), N = r(S), $ = "gr-dictionary-card", M = function(e) {
            return $ + "_" + e;
        }, A = _["default"].createClass({
            displayName: "DictionaryCard",
            getDefaultProps: function() {
                return {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    }
                };
            },
            getTriangleMargin: function() {
                var e = this.props.pos.sourceRect.width / 2;
                return this.props.pos.delta.right > 0 ? e : -this.props.pos.delta.right + e;
            },
            renderContent: function() {
                var e = this.props.data;
                return e.defs.map(function(t, n) {
                    var r, o = t.replace(/^([:,]\s)/, "");
                    o = o[0].toUpperCase() + o.substring(1, o.length);
                    var i = f["default"].cs((r = {}, s["default"](r, M("item-single"), 1 == e.defs.length), 
                    s["default"](r, M("item"), !0), r));
                    return _["default"].createElement("div", {
                        key: n,
                        className: i,
                        dangerouslySetInnerHTML: {
                            __html: E["default"].sanitize(o)
                        }
                    });
                });
            },
            renderFooterLink: function() {
                var e = this.props.data;
                if (e.url && "wiki" === e.origin) {
                    var t = function() {
                        var t = "More on Wikipedia";
                        return {
                            v: _["default"].createElement("a", {
                                className: M("link"),
                                href: encodeURI(e.url),
                                onClick: function() {
                                    return T.call("felog.info", "dictionary_goto", {
                                        type: t
                                    });
                                },
                                target: "_blank"
                            }, t)
                        };
                    }();
                    if ("object" === ("undefined" == typeof t ? "undefined" : a["default"](t))) return t.v;
                }
            },
            render: function() {
                var e, t = {}, n = this.props.pos, r = f["default"].cs((e = {}, s["default"](e, $, !0), 
                s["default"](e, M("empty"), 0 == this.props.data.defs.length), s["default"](e, M("flip"), n.rect.flip), 
                s["default"](e, this.props.className, this.props.className), e)), o = {
                    marginLeft: this.getTriangleMargin()
                };
                return t.top = n.rect.top, t.left = n.rect.left, t.visibility = this.props.visible ? "" : "hidden", 
                _["default"].createElement("div", {
                    tabIndex: "-1",
                    style: t,
                    className: r
                }, _["default"].createElement("span", {
                    style: o,
                    className: M("triangle")
                }), _["default"].createElement("div", {
                    className: M("title")
                }, this.props.data.title), _["default"].createElement("div", {
                    className: M("content")
                }, this.renderContent()), _["default"].createElement("div", {
                    className: M("footer")
                }, this.renderFooterLink(), _["default"].createElement("div", {
                    className: M("btn-close")
                }, "Close")));
            }
        });
        o.component = A, n["default"] = o, t.exports = n["default"];
    }, {
        "./dom": 154,
        "./elements/tooltip": 180,
        "./position": 195,
        "./timers": 210,
        "./tracking": 214,
        "./util": 218,
        "./window-events": 219,
        "babel-runtime/core-js/symbol": 15,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/typeof": 28,
        dompurify: "dompurify",
        emitter: "emitter",
        react: "react",
        "react-dom": "react-dom"
    } ],
    153: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/regenerator"), i = r(o), a = e("babel-runtime/helpers/extends"), l = r(a), s = e("babel-runtime/helpers/asyncToGenerator"), u = r(s);
        n["default"] = function(e) {
            function t() {
                s.release(), s = null, c = null, a = null;
            }
            var n = function() {
                var e = u["default"](i["default"].mark(function t(e) {
                    var n, s, u;
                    return i["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = e.el.startContainer ? e.el.startContainer.parentNode : e.el, s = b.matchesSelector(n, ".gr-grammar-card, .gr-grammar-card *, .gr-dictionary-card, .gr-dictionary-card *"), 
                            !s || o) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return");

                          case 3:
                            return p = "gr-selection-anim-dict " + h.nextVerClass, w["default"].animate(e.el, r, p), 
                            a = e, u = {}, t.prev = 7, t.next = 10, m.fetch(h.URLS.dictionary, {
                                data: l["default"]({}, e.data)
                            });

                          case 10:
                            if (u = t.sent, a == e) {
                                t.next = 13;
                                break;
                            }
                            return t.abrupt("return");

                          case 13:
                            t.next = 18;
                            break;

                          case 15:
                            t.prev = 15, t.t0 = t["catch"](7), f.call("felog.warn", "fetch_definitions_fail", {
                                error: t.t0
                            });

                          case 18:
                            w["default"].complete(), c.show(u, e), s && w["default"].remove();

                          case 21:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 7, 15 ] ]);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(), r = e.doc, o = e.cardInspection, a = void 0, s = g["default"](r), c = _["default"]({
                doc: r
            }), p = void 0;
            return s.on("select", n), s.on("unselect", w["default"].remove), c.on("hide", w["default"].remove), 
            d["default"]({
                clear: t
            });
        };
        var c = e("emitter"), d = r(c), f = e("./tracking"), m = e("./request"), p = e("./selection"), g = r(p), b = e("./dom"), h = e("./config"), v = e("./dictionary-card"), _ = r(v), y = e("./selection-animator"), w = r(y);
        t.exports = n["default"];
    }, {
        "./config": 150,
        "./dictionary-card": 152,
        "./dom": 154,
        "./request": 196,
        "./selection": 198,
        "./selection-animator": 197,
        "./tracking": 214,
        "babel-runtime/helpers/asyncToGenerator": 18,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/regenerator": 124,
        emitter: "emitter"
    } ],
    154: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            var n = (t || document).createElement("div");
            return n.innerHTML = e.trim(), n.firstElementChild;
        }
        function i(e, t, n) {
            var r = arguments.length <= 3 || void 0 === arguments[3] ? "div" : arguments[3], o = t[n] || {};
            t[n] = o, o.el || (o.el = t.ownerDocument.createElement(r), t.appendChild(o.el));
            var i = pe["default"].render(e, o.el);
            return o.remove || (o.remove = function() {
                delete t[n], t.removeChild(o.el), pe["default"].unmountComponentAtNode(o.el);
            }), {
                component: i,
                remove: o.remove,
                el: o.el
            };
        }
        function a(e, t) {
            for (var n = arguments.length <= 2 || void 0 === arguments[2] ? 1e3 : arguments[2], r = 0; e.parentNode && n > r; ) {
                if ("string" != typeof t && t == e) return !0;
                if (e.id == t || e == t) return !0;
                e = e.parentNode;
            }
            return !1;
        }
        function l(e, t) {
            return e && void 0 != e.className ? e.classList.contains(t) : !1;
        }
        function s(e, t) {
            return e && e.classList ? e.classList.remove(t) : void 0;
        }
        function u(e, t) {
            if (e) {
                if (-1 == t.indexOf(" ")) return e.classList.add(t);
                t = t.split(" ");
                for (var n = 0; n < t.length; n++) e.classList.add(t[n]);
            }
        }
        function c(e, t, n) {
            t ? u(e, n) : s(e, n);
        }
        function d(e, t) {
            for (;e = e.parentNode; ) if (p(e, t)) return e;
            return !1;
        }
        function f(e) {
            for (;e = e.parentNode; ) if (m(e)) return e;
            return !1;
        }
        function m(e) {
            return "true" == e.contentEditable || "plaintext-only" == e.contentEditable;
        }
        function p(e, t) {
            return e ? e.matches ? e.matches(t) : e.matchesSelector ? e.matchesSelector(t) : e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : e.mozMatchesSelector ? e.mozMatchesSelector(t) : window.$ && window.$.is ? window.$(e).is(t) : void 0 : !1;
        }
        function g(e) {
            return document.activeElement && "IFRAME" == document.activeElement.tagName ? e === e.ownerDocument.activeElement : document.activeElement && "BODY" == document.activeElement.tagName ? e === document.activeElement : e === document.activeElement;
        }
        function b(e, t, n, r) {
            var o = arguments.length <= 4 || void 0 === arguments[4] ? !1 : arguments[4];
            if (e) {
                if (de["default"].isObject(t)) return de["default"].each(t, function(t, n) {
                    b(e, n, t, r);
                });
                var i = r ? "removeEventListener" : "addEventListener", a = e[be] || [];
                return e[be] = a, r ? e[be] = a.filter(function(e) {
                    return !(e.event == t && e.cb == n);
                }) : a.push({
                    event: t,
                    cb: n
                }), e[i](t, n, o), {
                    el: e,
                    event: t,
                    cb: n,
                    bubble: o
                };
            }
        }
        function h(e, t, n, r) {
            return !t && e[be] ? e[be].each(function(t) {
                return h(e, t.event, t.cb, t.bubble);
            }) : void b(e, t, n, !0, r);
        }
        function v() {
            for (var e = this, t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
            return this.addEventListener.apply(this, n), {
                off: function() {
                    return _.call.apply(_, [ e ].concat(n));
                }
            };
        }
        function _() {
            this.removeEventListener.apply(this, arguments);
        }
        function y(e, t) {
            var n = this, r = function o(r) {
                t(r), _.call(n, e, o);
            };
            v.call(this, e, r);
        }
        function w(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, t), this.dispatchEvent(n);
        }
        function E(e) {
            var t = getComputedStyle(e, null), n = "none" != t.getPropertyValue("display") && "hidden" != t.getPropertyValue("visibility") && e.clientHeight > 0;
            return n;
        }
        function k() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            return t.reduce(function(e, t) {
                return e.concat(de["default"].isObject(t) ? ue["default"](t).filter(function(e) {
                    return t[e];
                }) : t);
            }, []).join(" ");
        }
        function x(e, t) {
            return "number" != typeof t || he[T(e)] ? t : t + "px";
        }
        function C(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        }
        function j(e) {
            return de["default"].transform(e, function(e, t, n) {
                return e[C(n)] = t;
            });
        }
        function T(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        function S(e, t, n) {
            if (arguments.length < 3) {
                var r = function() {
                    var n = e;
                    if (!n) return {
                        v: void 0
                    };
                    var r = getComputedStyle(n, "");
                    if ("string" == typeof t) return {
                        v: n.style[C(t)] || r.getPropertyValue(t)
                    };
                    if (de["default"].isArray(t)) {
                        var o = function() {
                            var e = {};
                            return de["default"].each(t, function(t, o) {
                                e[C(t)] = n.style[C(t)] || r.getPropertyValue(t);
                            }), {
                                v: {
                                    v: e
                                }
                            };
                        }();
                        if ("object" === ("undefined" == typeof o ? "undefined" : le["default"](o))) return o.v;
                    }
                }();
                if ("object" === ("undefined" == typeof r ? "undefined" : le["default"](r))) return r.v;
            }
            var o = "";
            if (de["default"].isString(t)) n || 0 === n ? o = T(t) + ":" + x(t, n) : e.style.removeProperty(T(t)); else for (var i in t) t[i] || 0 === t[i] ? o += T(i) + ":" + x(i, t[i]) + ";" : e.style.removeProperty(T(i));
            return e.style.cssText += ";" + o;
        }
        function N(e, t) {
            if (t && e) {
                var n = S(e, ue["default"](t));
                return S(e, t), function() {
                    return S(e, n);
                };
            }
        }
        function $(e, t) {
            for (;e = e.parentNode; ) if (e.tagName == t) return e;
            return !1;
        }
        function M(e, t, n) {
            for (;e = e.parentNode; ) if (e.dataset && e.dataset[t] && e.dataset[t] == n) return e;
        }
        function A(e, t) {
            return l(e, t) ? e : P(e, t);
        }
        function P(e, t) {
            for (;e = e.parentNode; ) if (l(e, t)) return e;
            return !1;
        }
        function D(e, t) {
            if (!e) return !1;
            for (;e.parentNode; ) {
                if (l(e, t)) return e;
                e = e.parentNode;
            }
            return !1;
        }
        function O() {
            var e, t = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0];
            return t ? (e = this.parentNode, O).call(e, --t) : this;
        }
        function L(e, t) {
            if (!e) return !1;
            for (;e.parentNode; ) {
                if (t == e.parentNode) return e;
                e = e.parentNode;
            }
            return !1;
        }
        function I(e, t) {
            var n = t.parentNode;
            n.lastChild == t ? n.appendChild(e) : n.insertBefore(e, t.nextSibling);
        }
        function R(e, t) {
            t.parentNode.insertBefore(e, t);
        }
        function F(e, t) {
            for (t = t || document; e; ) {
                if (e == t) return !0;
                e = e.parentNode;
            }
            return !1;
        }
        function G(e) {
            var t = void 0, n = void 0, r = void 0, o = {
                ctrl: !1,
                meta: !1,
                shift: !1,
                alt: !1
            };
            e = de["default"].extend(o, e);
            try {
                t = e.el.ownerDocument.createEvent("KeyEvents"), n = e.el.ownerDocument.defaultView, 
                r = ge.keyCode(e), t.initKeyEvent(e.type, !0, !0, n, e.ctrl, e.alt, e.shift, e.meta, r, r);
            } catch (i) {
                t = e.el.ownerDocument.createEvent("UIEvents"), t.initUIEvent(e.name, !0, !0, window, 1), 
                t.keyCode = r, t.which = r, t.charCode = r, t.ctrlKey = e.ctrl, t.altKey = e.alt, 
                t.shiftKey = e.shift, t.metaKey = e.metaKey;
            }
            e.el.dispatchEvent(t);
        }
        function B(e) {
            return "undefined" != typeof e.hidden ? e.hidden : "undefined" != typeof e.mozHidden ? e.mozHidden : "undefined" != typeof e.webkitHidden ? e.webkitHidden : "undefined" != typeof e.msHidden ? e.msHidden : !1;
        }
        function H(e) {
            return "undefined" != typeof e.hidden ? "visibilitychange" : "undefined" != typeof e.mozHidden ? "mozvisibilitychange" : "undefined" != typeof e.webkitHidden ? "webkitvisibilitychange" : "undefined" != typeof e.msHidden ? "msvisibilitychange" : !1;
        }
        function z() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0];
            return "undefined" != typeof e.body.style.transform ? "transform" : "undefined" != typeof e.body.style.WebkitTransform ? "WebkitTransform" : "undefined" != typeof e.body.style.MozTransform ? "MozTransform" : void 0;
        }
        function W(e) {
            if (e) {
                var t = e.ownerDocument;
                if (t) {
                    var n = t.defaultView || window;
                    if (n) {
                        var r = n.getComputedStyle(e, null);
                        if (r) {
                            for (var o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; o > a; a++) i[a - 1] = arguments[a];
                            return 1 == i.length ? r.getPropertyValue(i[0]) : i.reduce(function(e, t) {
                                return ie["default"]({}, e, re["default"]({}, t, r.getPropertyValue(t)));
                            }, {});
                        }
                    }
                }
            }
        }
        function U(e) {
            return e.split(" ").map(function(e) {
                return "." != e[0] ? "." + e : e;
            }).join("").trim();
        }
        function V(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            if (n.length > 0) {
                var o = function() {
                    var t = [];
                    return t.push(V(e)), n.forEach(function(e) {
                        return t.push(V(e));
                    }), {
                        v: t.join(", ")
                    };
                }();
                if ("object" === ("undefined" == typeof o ? "undefined" : le["default"](o))) return o.v;
            }
            return e = e.split(", ").map(function(e) {
                return "." != e[0] ? "." + e : e;
            }).join(", ").trim(), e + ", " + e + " *";
        }
        function q(e, t) {
            if (t == e) return !0;
            if (!e.children) return !1;
            for (var n = 0; n < e.children.length; n++) if (q(e.children[n], t)) return !0;
            return !1;
        }
        function Y(e, t) {
            var n = function(n) {
                n.map(function(n) {
                    if (0 != n.removedNodes.length) for (var o = n.removedNodes, i = o.length, a = 0; i > a; a++) {
                        var l = o[a];
                        (l.contains && l.contains(e) || q(l, e)) && (r.disconnect(), t());
                    }
                });
            }, r = new MutationObserver(n);
            r.observe(e.ownerDocument.body, {
                childList: !0,
                subtree: !0
            });
        }
        function K() {
            var e = void 0, t = document.createElement("fakeelement"), n = {
                animation: "animationend",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (e in n) if (void 0 != t.style[e]) return n[e];
        }
        function X() {
            var e = void 0, t = document.createElement("fakeelement"), n = {
                transition: "transitionend",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (e in n) if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e];
        }
        function J(e) {
            if ("undefined" != typeof GR_INLINE_STYLES) {
                var t = e.createElement("style");
                t.innerHTML = GR_INLINE_STYLES;
                try {
                    e.querySelector("head").appendChild(t);
                } catch (n) {
                    console.log("can't append style", n);
                }
            }
        }
        function Z(e, t) {
            e.setAttribute("data-gramm_id", t), e.setAttribute("data-gramm", !0);
        }
        function Q(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = document.createEvent("CustomEvent");
            n.initCustomEvent(e + "-gr", !0, !0, t), document.dispatchEvent(n);
        }
        function ee(e, t) {
            var n = e.getSelection();
            n.removeAllRanges(), n.addRange(t);
        }
        function te(e, t) {
            var n = e.createRange();
            n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), 
            ee(e, n);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var ne = e("babel-runtime/helpers/defineProperty"), re = r(ne), oe = e("babel-runtime/helpers/extends"), ie = r(oe), ae = e("babel-runtime/helpers/typeof"), le = r(ae), se = e("babel-runtime/core-js/object/keys"), ue = r(se), ce = e("lodash"), de = r(ce), fe = e("react"), me = (r(fe), 
        e("react-dom")), pe = r(me), ge = e("./util"), be = ge.guid(), he = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        };
        n["default"] = {
            isVisible: E,
            createEl: o,
            renderReactWithParent: i,
            inEl: a,
            hasClass: l,
            addClass: u,
            removeClass: s,
            toggleClass: c,
            setDomRange: te,
            matchesSelector: p,
            getParentBySel: d,
            getParentByData: M,
            getParentByDepth: O,
            parentIsContentEditable: f,
            isContentEditable: m,
            isFocused: g,
            listen: b,
            unlisten: h,
            emitDomEvent: Q,
            on: v,
            off: _,
            once: y,
            emit: w,
            css: S,
            setCustomCss: N,
            addIframeCss: J,
            setGRAttributes: Z,
            compStyle: W,
            camelize: C,
            camelizeAttrs: j,
            insertBefore: R,
            insertAfter: I,
            elementInDocument: F,
            getParentByTag: $,
            parentHasClass: D,
            isParent: L,
            resolveEl: A,
            getParent: P,
            runKeyEvent: G,
            docHidden: B,
            visibilityEvent: H,
            transformProp: z,
            cs: k,
            selectorAll: V,
            classSelector: U,
            watchNodeRemove: Y,
            whichAnimationEndEvent: K,
            transitionEndEventName: X
        }, t.exports = n["default"];
    }, {
        "./util": 218,
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/typeof": 28,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    155: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/object/assign"), i = r(o), a = e("grammarly-editor"), l = r(a), s = e("../socket"), u = r(s), c = e("../timers"), d = r(c), f = e("../message"), m = r(f), p = e("../util"), g = e("../tracking"), b = e("../benchmark"), h = (r(b), 
        e("lib/ghost/html-ghost-locator")), v = e("../position"), _ = e("../client-script"), y = r(_), w = e("../window-events"), E = r(w), k = e("../config"), x = e("../dom"), C = e("../ghost/html-ghost"), j = r(C), T = e("./track"), S = r(T), N = function(e) {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                E["default"][e]("beforeunload", Z), m["default"][e]("editor-set-state", D, onerror), 
                m["default"][e]("dialog-closed", O), m["default"][e]("focus-editor", L), m["default"][e]("after-refresh-dialog", F), 
                ce[e]("track", S["default"]), ce[e]("fix", oe), ce[e]("serviceState", P), ce[e]("addedSynonym", $), 
                ce[e]("afterReplace", c), ce.dom[e]("badCursorPositionRetryFail", o), ce.dom[e]("badCursorPosition", r), 
                ce[e]("iframe-mousemove", M), s(!0);
                var t = "on" == e ? x.listen : x.unlisten;
                t(be, x.visibilityEvent(be), U), t(be, "grammarly:reset", A), fe && t(be.documentElement, "mousemove", f), 
                ee.card && (ee.card[e]("show", w), ee.card[e]("hide", C), ee.card[e]("toeditor", T), 
                ee.card[e]("addtodict", N));
            }
            function n() {
                d["default"].start(Q + "run"), t("on"), he(), y["default"].rewriteInnerHTML(de), 
                ce.getText() && ce.emit("sending"), J(re.enabledDefs), pe && G();
            }
            function r() {
                g.call("felog.info", "bad_cursor_position");
            }
            function o() {
                g.call("felog.error", "cursor_jump");
            }
            function a(e) {
                var t = e.user, n = e.page;
                le = t.settings.dialectStrong || n.dialectWeak, s(), se = t.anonymous, J(n.enabledDefs);
            }
            function s(e) {
                le || ue ? ue && (le || e) && ce.off("finished", b) : (ue = !0, ce.on("finished", b));
            }
            function c(e) {
                return Array.isArray(re.afterReplaceEvents) && re.afterReplaceEvents.forEach(function(e) {
                    return x.emit.call(de, e);
                }), e && e.remove();
            }
            function f(e) {
                ce.emit("iframe-mousemove", e);
            }
            function b(e) {
                var t = e.dialect;
                t && "undefined" !== t && (ie(t), le = t, s());
            }
            function _(e) {
                e && ce.setState(e), ce.api.ws.reconnect();
            }
            function w(e) {
                var t = ce.matches.byId(e);
                t && (ce.emit("context"), t.editorId = ce.id, t.select(), ee.card.setData(t));
            }
            function C() {
                R();
            }
            function T(e) {
                e == ce.id && (ce.showDialog({
                    caller: "card"
                }), d["default"].start("open_editor"), g.call("statsc.ui.increment", "stability:editor.open_from_card"));
            }
            function N(e) {
                e.match.editorId == ce.id && (se ? (e.hide(), ce.showDialog({
                    caller: "card"
                })) : e.match.addToDict());
            }
            function $(e) {
                e.editorId = ce.id, ee.card.showSynonyms(e);
            }
            function M(e) {
                ee.card.setOuterIframe(ge);
            }
            function A() {
                console.log("reseting capi session..."), _();
            }
            function P(e) {
                return "capi" == e.type ? e.available ? void (pe && H()) : G("Error checking is temporarily unavailable") : void 0;
            }
            function D(e) {
                e.editorId == ce.id && (ce.setState(e), ve && (ve = !1, Z()));
            }
            function O(e) {
                e == ce.id && (R(), ce.isHtmlGhost || I());
            }
            function L(e) {
                e == ce.id && I();
            }
            function I() {
                ce.srcEl.focus();
            }
            function R() {
                ce.selectedMatch && (ee.card.removeLoading(ce.selectedMatch.getEl()), ce.selectedMatch.deselect());
            }
            function F(e) {
                e.editorId == ce.id && _(e);
            }
            function G() {
                pe = !0, ce.clearData(), ce.api.close(), ce.render();
            }
            function B() {
                return pe;
            }
            function H() {
                pe = !1, _();
            }
            function z() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = e.caller, n = {
                    data: ce.getState(),
                    caller: t
                };
                ce.emit("show-dialog"), x.emitDomEvent("show-dialog"), m["default"].emitFocusedTab("show-dialog", n);
            }
            function W() {
                var e = de.ownerDocument.createRange();
                e.selectNodeContents(de);
                var t = e.cloneContents(), n = document.createElement("div");
                n.appendChild(t);
                for (var r = n.querySelectorAll("img"), o = r.length, i = 0; o > i; i++) r[i].src = r[i].src;
                return n.innerHTML;
            }
            function U() {
                return x.docHidden(be) ? Y() : void K();
            }
            function V(e) {
                return pe ? [] : e.filter(function(e) {
                    return e.free && !e.hidden;
                });
            }
            function q(e) {
                return x.matchesSelector(e, ".b-card.Synonyms .btn-close") ? !0 : !x.matchesSelector(e, ".b-card.Synonyms, .b-card.Synonyms *");
            }
            function Y() {}
            function K() {}
            function X() {
                var e = ce.getMatches();
                return {
                    critical: e.filter(function(e) {
                        return e.free && e.inDom;
                    }).length,
                    plus: e.filter(function(e) {
                        return !e.free;
                    }).length
                };
            }
            function J(e) {
                ce.enabledSynonyms != e && (ce.enabledSynonyms = e, ce.synonyms[e ? "fieldEnable" : "disable"]());
            }
            function Z(e) {
                if (!me || e) {
                    me = !0;
                    var n = ce.dom.getCleanHtml && ce.dom.getCleanHtml();
                    if (n && (ce.el.innerHTML = n), t("off"), ce.exit(), console.log("exit"), de.removeAttribute && k.restrictedAttrs.forEach(de.removeAttribute.bind(de)), 
                    fe && k.restrictedAttrs.forEach(ce.srcEl.removeAttribute.bind(ce.srcEl)), de.setAttribute("spellcheck", !0), 
                    h.isHtmlGhostSite()) {
                        var r = de.parentElement && de.parentElement.parentElement;
                        r && r.removeAttribute("spellcheck");
                    }
                    ce.emit("exit");
                }
            }
            var Q = (e.el || e.srcEl).getAttribute("gramm_id") || p.guid(), ee = e.app, te = e.user, ne = e.actions, re = e.page, oe = ne.incFixed, ie = ne.changeWeakDialect, ae = e.editorType.htmlghost, le = te.settings.dialectStrong || re.dialectWeak, se = te.anonymous, ue = void 0;
            i["default"](e, {
                capiUrl: k.URLS.capi,
                createWs: u["default"],
                docid: Q,
                textareaWrapSelector: '[gramm_id="' + Q + '"]',
                animatorContainer: e.el.ownerDocument.documentElement,
                getAnimatorElPos: v.getAbsRect,
                updateTextareaHeight: p._f,
                dialect: le,
                canRemoveSynonym: q,
                filter: V
            }), i["default"](l["default"].Capi, {
                CLIENT_NAME: "extension",
                clientVersion: k.getVersion(),
                extDomain: re.domain
            }), ae && (e.dom = j["default"]), l["default"].MatchPositions = function() {
                return {
                    generateMatchPositions: p._f
                };
            }, e.matchPrefix = k.nextVerClass;
            var ce = l["default"](e), de = ce.el, fe = e.posSourceEl && "IFRAME" == e.posSourceEl.tagName, me = !1, pe = !e.connection.online, ge = e.srcEl || de, be = de.ownerDocument, he = ce.run, ve = !1;
            i["default"](ce, {
                id: Q,
                srcEl: ge,
                camouflage: p._f,
                isHtmlGhost: ae,
                run: n,
                errorData: X,
                showDialog: z,
                isOffline: B,
                offline: G,
                online: H,
                updateState: a,
                outerIframe: e.outerIframe,
                cleanupText: p._f,
                activate: p._f,
                toggleBtn: p._f,
                remove: Z,
                reset: _
            });
            var _e = ce.getMatchClass;
            return ce.getMatchClass = function(e, t) {
                var n = _e(e, t);
                return n += e.renderedOnce || p.isSafari() ? " gr_disable_anim_appear" : " gr_run_anim", 
                e.renderedOnce = !0, n;
            }, ce.dom.changeSelection = p._f, ce.matches.fromReplaced = ce.matches.fromReplace = ce.matches.byId, 
            ce.current = ce.getFiltered, ce.started = !1, ce.el.setAttribute("data-gramm_editor", !0), 
            ce.getHtml && (ce.getHtml = W), ce;
        };
        n["default"] = N, t.exports = n["default"];
    }, {
        "../benchmark": 129,
        "../client-script": 149,
        "../config": 150,
        "../dom": 154,
        "../ghost/html-ghost": 188,
        "../message": 192,
        "../position": 195,
        "../socket": 202,
        "../timers": 210,
        "../tracking": 214,
        "../util": 218,
        "../window-events": 219,
        "./track": 157,
        "babel-runtime/core-js/object/assign": 7,
        "grammarly-editor": "grammarly-editor",
        "lib/ghost/html-ghost-locator": 187
    } ],
    156: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t, n = e.app, r = e.doc, o = e.type, i = e.field, s = e.connection, u = e.page, c = e.user, f = e.actions;
            return m.call("statsc.ui.increment", "activity:" + o + ".editor_init"), n.elements = n.elements || g["default"]({
                app: n,
                doc: r,
                user: c,
                actions: f
            }), "iframe" == o ? l(n, i, s, u, c, f) : a(n, i, (t = {}, d["default"](t, o, !0), 
            d["default"](t, "value", o), t), s, u, c, f);
        }
        function i(e, t) {
            if (b.setGRAttributes(e, t), e.setAttribute("spellcheck", !1), h.isHtmlGhostSite()) {
                var n = e.parentElement && e.parentElement.parentElement;
                n && n.setAttribute("spellcheck", !1);
            }
        }
        function a(e, t, n, r, o, a, l) {
            function s(t) {
                var s = t.el, u = t.id;
                return i(s, u), _["default"]({
                    id: u,
                    el: s,
                    app: e,
                    connection: r,
                    page: o,
                    user: a,
                    actions: l,
                    editorType: n
                });
            }
            var c = {
                el: t,
                id: f.guid()
            };
            return "contenteditable" == n.value ? s(u["default"]({}, c)) : w["default"](u["default"]({}, c, {
                createEditor: s
            }));
        }
        function l(e, t, n, r, o, a) {
            var l = f.guid(), s = t.contentDocument, u = s.body;
            return i(t, l), t.setAttribute("gramm-ifr", !0), b.addIframeCss(s), i(u, l), t.style.height = t.style.height || getComputedStyle(t).height, 
            _["default"]({
                el: u,
                app: e,
                connection: n,
                page: r,
                user: o,
                actions: a,
                srcEl: t,
                posSourceEl: t,
                editorType: {
                    contenteditable: !0,
                    value: "contenteditable"
                }
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/helpers/extends"), u = r(s), c = e("babel-runtime/helpers/defineProperty"), d = r(c);
        n["default"] = o;
        var f = e("../util"), m = e("../tracking"), p = e("../elements"), g = r(p), b = e("../dom"), h = e("lib/ghost/html-ghost-locator"), v = e("./editor"), _ = r(v), y = e("../ghost/ghostarea"), w = r(y);
        t.exports = n["default"];
    }, {
        "../dom": 154,
        "../elements": 165,
        "../ghost/ghostarea": 186,
        "../tracking": 214,
        "../util": 218,
        "./editor": 155,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/extends": 22,
        "lib/ghost/html-ghost-locator": 187
    } ],
    157: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function(e) {
            var t = e.type, n = e.key, o = e.value, i = e.data;
            (n || i) && (n ? r.call("statsc.ui." + t, n, o) : r.call("statsc.ui." + t, i));
        };
        var r = e("../tracking");
        t.exports = n["default"];
    }, {
        "../tracking": 214
    } ],
    158: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            return null != e && null !== e.match(/^[.,;:!?\\\/-]$/);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/defineProperty"), a = r(i), l = e("babel-runtime/core-js/object/keys"), s = r(l), u = e("babel-runtime/core-js/object/get-prototype-of"), c = r(u), d = e("babel-runtime/helpers/classCallCheck"), f = r(d), m = e("babel-runtime/helpers/createClass"), p = r(m), g = e("babel-runtime/helpers/possibleConstructorReturn"), b = r(g), h = e("babel-runtime/helpers/inherits"), v = r(h), _ = e("react"), y = r(_), w = e("../dom"), E = e("../tracking"), k = {
            container: "_e9f3f1-container",
            flip: "_e9f3f1-flip",
            actions: "_e9f3f1-actions",
            ignore: "_e9f3f1-ignore",
            details: "_e9f3f1-details",
            replacements: "_e9f3f1-replacements",
            addToDict: "_e9f3f1-addToDict",
            replacement: "_e9f3f1-replacement",
            didYouMean: "_e9f3f1-didYouMean",
            insert: "_e9f3f1-insert",
            "delete": "_e9f3f1-delete",
            word: "_e9f3f1-word",
            delPart: "_e9f3f1-delPart",
            insPunc: "_e9f3f1-insPunc",
            delPunc: "_e9f3f1-delPunc"
        }, x = r(k), C = "gr-grammar-card", j = function(e) {
            return e.split(" ").map(function(e) {
                return C + "_" + e;
            }).join(" ");
        }, T = function(e) {
            function t() {
                return f["default"](this, t), b["default"](this, c["default"](t).apply(this, arguments));
            }
            return v["default"](t, e), p["default"](t, [ {
                key: "getInsertNode",
                value: function(e, t) {
                    var n = w.cs(x["default"].insPart, o(e) && x["default"].insPunc);
                    return y["default"].createElement("span", {
                        className: n,
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    });
                }
            }, {
                key: "getDeleteNode",
                value: function(e, t) {
                    var n = w.cs(x["default"].delPart, o(e) && x["default"].delPunc);
                    return y["default"].createElement("span", {
                        className: n,
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    });
                }
            }, {
                key: "getWordNode",
                value: function(e, t) {
                    return y["default"].createElement("span", {
                        className: x["default"].word,
                        key: t
                    }, e);
                }
            }, {
                key: "concatTransform",
                value: function(e) {
                    var t = this, n = "", r = e.map(function(e, r) {
                        var o = e.value, i = e.type;
                        switch (i) {
                          case "del":
                            return n = "delete", t.getDeleteNode(o, r);

                          case "ins":
                            return n = "insert", t.getInsertNode(o, r);

                          default:
                            return t.getWordNode(o, r);
                        }
                    });
                    return y["default"].createElement("div", {
                        className: x["default"][n]
                    }, r);
                }
            }, {
                key: "onReplaceClick",
                value: function n(e, t) {
                    var n = this.props.onReplaceClick;
                    n("replace", e), t.stopPropagation();
                }
            }, {
                key: "renderTransform",
                value: function(e, t) {
                    var n = this, r = [];
                    return e.forEach(function(e) {
                        "sep" == e.type && (r = []), r.push(e);
                    }), y["default"].createElement("div", {
                        className: x["default"].replacement,
                        onClick: function(e) {
                            return n.onReplaceClick(t, e);
                        }
                    }, this.concatTransform(r));
                }
            }, {
                key: "replacementToTransform",
                value: function(e) {
                    return [ {
                        value: e,
                        type: "ins"
                    } ];
                }
            }, {
                key: "reformatTransforms",
                value: function(e) {
                    return e.map(function(e) {
                        return e[0].del && e.length > 1 && (e = e.slice(1)), e.map(function(e) {
                            var t = {};
                            return s["default"](e).forEach(function(n) {
                                t.type = n, t.value = e[n];
                            }), t;
                        });
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this, t = this.props, n = t.transforms, r = t.replacements, o = t.didYouMean, i = this.reformatTransforms(n), a = null;
                    return i.length > 0 ? a = i.map(function(t, n) {
                        return e.renderTransform(t, r[n]);
                    }) : r.length > 0 && (a = r.map(function(t) {
                        return e.renderTransform(e.replacementToTransform(t), t);
                    })), y["default"].createElement("div", {
                        className: x["default"].replacements + (o ? " " + x["default"].didYouMean : "")
                    }, a);
                }
            } ]), t;
        }(y["default"].Component), S = function(e) {
            function t() {
                f["default"](this, t);
                var e = b["default"](this, c["default"](t).call(this));
                return e.handlers = function(t, n) {
                    var r = e.state.match, o = e.props;
                    if (e.state.addedToDict) return void E.fire("show-dictionary");
                    if (t) switch (t) {
                      case "replace":
                        r.replace(n), o.hide(), E.call("statsc.ui.increment", "activity:" + (r.syn ? "synonyms" : "replacement") + ".click");
                        break;

                      case "ignore":
                        r.ignore(), o.hide();
                        break;

                      case "hide":
                        o.hide();
                        break;

                      case "anim-hide":
                        o.hide();
                        break;

                      case "editor":
                        o.openEditor();
                        break;

                      case "login":
                        o.openEditor();
                        break;

                      case "add":
                        o.addToDict(), o.hide();
                    }
                }, e.state = {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    },
                    addedToDict: !1,
                    match: {},
                    visible: !1
                }, e;
            }
            return v["default"](t, e), p["default"](t, [ {
                key: "renderSynonymsContent",
                value: function() {
                    var e, t = this, n = this.state.match, r = n.synonyms.meanings;
                    if (0 == r.length) return y["default"].createElement("div", {
                        className: j("content")
                    }, y["default"].createElement("div", {
                        className: j("nothing")
                    }, "No synonyms found"));
                    var o = w.cs((e = {}, a["default"](e, j("item-single"), 1 == r.length), a["default"](e, j("item"), !0), 
                    e));
                    return y["default"].createElement("div", {
                        className: j("content")
                    }, r.map(function(e, n) {
                        return y["default"].createElement("div", {
                            className: o,
                            key: n
                        }, y["default"].createElement("div", {
                            className: j("meaning")
                        }, e.meaning), y["default"].createElement("div", {
                            className: j("replacements")
                        }, e.synonyms.map(function(e, n) {
                            return y["default"].createElement("span", {
                                className: j("ins"),
                                key: n,
                                onClick: function() {
                                    return t.handlers("replace", e.base);
                                }
                            }, e.base);
                        }, t)));
                    }, this));
                }
            }, {
                key: "renderSynonyms",
                value: function() {
                    var e, t = this, n = {}, r = "title", o = this.state, i = o.pos, l = o.match, s = i.sourceRect.width / 2, u = i.delta.right, c = u > 0 ? s : -u + s, d = {
                        marginLeft: c
                    }, f = w.cs((e = {}, a["default"](e, C, !0), a["default"](e, j("syn"), l.syn), a["default"](e, j("flip"), i.rect.flip), 
                    a["default"](e, j("animate"), this.state.animate), a["default"](e, j("anonymous"), this.props.isAnonymous()), 
                    e));
                    return n.top = i.rect.top, n.left = i.rect.left, 0 == i.rect.top && 0 == i.rect.left && this.state.visible && E.call("statsc.ui.increment", "stability:card.top_left_0"), 
                    i.rect.top > 0 && i.rect.top < 10 && i.rect.left > 0 && i.rect.left < 10 && this.state.visible && E.call("statsc.ui.increment", "stability:card.top_left_10"), 
                    n.visibility = this.state.visible ? "" : "hidden", y["default"].createElement("div", {
                        style: n,
                        className: f
                    }, y["default"].createElement("span", {
                        style: d,
                        className: j("triangle")
                    }), y["default"].createElement("div", {
                        className: j(r)
                    }, "Synonyms suggested by Grammarly"), this.renderSynonymsContent(), y["default"].createElement("div", {
                        className: j("footer")
                    }, y["default"].createElement("div", {
                        className: j("link"),
                        onClick: function() {
                            return t.handlers("editor");
                        }
                    }, "Correct with Grammarly"), y["default"].createElement("div", {
                        className: j("btn-close"),
                        onClick: function() {
                            return t.handlers("hide");
                        }
                    }, "Close")));
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = {}, r = this.state, o = r.pos, i = r.match, l = r.visible, u = i.didYouMean, c = o.rect.flip;
                    if (!l) return y["default"].createElement("div", null);
                    if (i.syn) return this.renderSynonyms();
                    var d = i.transforms, f = i.origReplacements, m = y["default"].createElement("div", {
                        className: x["default"].actions
                    }, y["default"].createElement("div", {
                        className: x["default"].ignore,
                        onClick: function() {
                            return t.handlers("ignore");
                        }
                    }, "Ignore"), y["default"].createElement("div", {
                        className: x["default"].details,
                        onClick: function() {
                            return t.handlers("editor");
                        }
                    }, "Revise")), p = i.showAddToDictionary && y["default"].createElement("div", {
                        className: x["default"].addToDict,
                        onClick: function() {
                            return t.handlers("add");
                        }
                    }, "Add to Dictionary"), g = !s["default"](i).length;
                    u && (f = [ i.rFirst ]);
                    var b = y["default"].createElement(T, {
                        didYouMean: u,
                        transforms: c && d.reverse() || d,
                        replacements: c && f.reverse() || f,
                        onReplaceClick: this.handlers
                    }), h = !g && y["default"].createElement("div", null, c && m, c && p, b, !c && p, !c && m), v = w.cs((e = {}, 
                    a["default"](e, x["default"].container, !0), a["default"](e, x["default"].flip, c), 
                    e));
                    return n.top = o.rect.top, n.left = o.rect.left, 0 == o.rect.top && 0 == o.rect.left && this.state.visible && E.call("statsc.ui.increment", "stability:card.top_left_0"), 
                    o.rect.top > 0 && o.rect.top < 10 && o.rect.left > 0 && o.rect.left < 10 && this.state.visible && E.call("statsc.ui.increment", "stability:card.top_left_10"), 
                    n.visibility = this.state.visible ? "" : "hidden", y["default"].createElement("div", {
                        style: n,
                        className: v
                    }, h);
                }
            } ]), t;
        }(y["default"].Component);
        n["default"] = S, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../tracking": 214,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        react: "react"
    } ],
    159: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = /class=["']([^'"]+)['"]/g;
            return d.sanitize(e).replace(t, function(e, t) {
                return 'class="' + b(t.trim()) + '"';
            });
        }
        function i(e) {
            return e ? e.showAddToDictionary : void 0;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), l = r(a), s = e("react"), u = r(s), c = e("react-dom"), d = e("dompurify"), f = e("../dom"), m = e("../tracking"), p = e("../config"), g = "gr-grammar-card", b = function(e) {
            return e.split(" ").map(function(e) {
                return g + "_" + e;
            }).join(" ");
        };
        n["default"] = u["default"].createClass({
            displayName: "card-component",
            getInitialState: function() {
                return {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    },
                    addedToDict: !1,
                    match: {},
                    visible: !1
                };
            },
            renderHeader: function() {
                var e = this.state.match, t = "title";
                if (e.syn && e.synonyms.meanings.length) return u["default"].createElement("div", {
                    className: b(t)
                }, "Synonyms suggested by Grammarly");
                if (e.title) {
                    if (e.spell && "Unknown" != e.category || (t += " title-link"), !e.spell || e.showTitle || e.didYouMean) return u["default"].createElement("div", {
                        className: b(t),
                        dangerouslySetInnerHTML: {
                            __html: d.sanitize(e.title)
                        },
                        "data-action": "editor"
                    });
                    if (!e.rFirst || !e.rFirst.trim()) return u["default"].createElement("div", {
                        className: b(t)
                    }, u["default"].createElement("div", {
                        className: b("replacement-block")
                    }, u["default"].createElement("span", {
                        className: b("replacement"),
                        "data-action": "replace",
                        "data-replace": e.rFirst,
                        dangerouslySetInnerHTML: {
                            __html: o(e.header)
                        }
                    })));
                    var n = e.origReplacements || [];
                    return u["default"].createElement("div", {
                        className: b(t)
                    }, n.map(function(t, n) {
                        return u["default"].createElement("div", {
                            className: b("replacement-block"),
                            key: n
                        }, u["default"].createElement("span", {
                            className: b("replacement"),
                            "data-replace": t
                        }, u["default"].createElement("span", {
                            className: b("del")
                        }, e.oldVal), u["default"].createElement("span", {
                            className: b("arr")
                        }, " → "), u["default"].createElement("span", {
                            className: b("ins")
                        }, t)));
                    }, this));
                }
            },
            renderFooter: function(e) {
                var t = this.props.isAnonymous();
                return t ? u["default"].createElement("div", {
                    className: b("footer anonymous")
                }, u["default"].createElement("a", {
                    className: b("link"),
                    tabIndex: "-1",
                    "data-action": "login",
                    target: "__blank"
                }, "Log in"), " to enable personalized grammar and spelling checks,", u["default"].createElement("br", null), "a custom dictionary, and additional features. It's free!") : u["default"].createElement("div", {
                    className: b("footer")
                }, u["default"].createElement("div", {
                    className: b("link"),
                    tabIndex: "-1",
                    "data-action": "editor"
                }, "Correct with Grammarly"), this.renderAddToDict(), e.syn ? u["default"].createElement("div", {
                    className: b("btn-close"),
                    "data-action": "close"
                }, "Close") : u["default"].createElement("div", {
                    className: b("btn-close ignore"),
                    "data-action": "ignore"
                }, "Ignore"));
            },
            getTriangleMargin: function() {
                var e = this.state.pos.sourceRect.width / 2, t = this.state.pos.delta.right;
                return t > 0 ? e : -t + e;
            },
            renderConfused: function() {
                var e = this.state.match;
                return u["default"].createElement("div", {
                    className: b("replacement-block sub-title")
                }, u["default"].createElement("span", {
                    className: b("replacement")
                }, "Did you mean ", u["default"].createElement("span", {
                    className: b("ins"),
                    "data-replace": e.rFirst
                }, e.rFirst), "?"));
            },
            renderSynonyms: function() {
                var e, t = this, n = this.state.match, r = n.synonyms.meanings;
                if (0 == r.length) return u["default"].createElement("div", {
                    className: b("content")
                }, u["default"].createElement("div", {
                    className: b("nothing")
                }, "No synonyms found"));
                var o = f.cs((e = {}, l["default"](e, b("item-single"), 1 == r.length), l["default"](e, b("item"), !0), 
                e));
                return u["default"].createElement("div", {
                    className: b("content")
                }, r.map(function(e, n) {
                    return u["default"].createElement("div", {
                        className: o,
                        key: n
                    }, u["default"].createElement("div", {
                        className: b("meaning")
                    }, e.meaning), u["default"].createElement("div", {
                        className: b("replacements")
                    }, e.synonyms.map(function(e, t) {
                        return u["default"].createElement("span", {
                            className: b("ins"),
                            key: t,
                            "data-replace": e.base
                        }, e.base);
                    }, t)));
                }, this));
            },
            renderAddToDict: function() {
                return i(this.state.match) ? u["default"].createElement("div", {
                    className: b("link add-to-dict"),
                    "data-action": "add"
                }, "Add to dictionary") : void 0;
            },
            renderAddedToDict: function() {
                var e = this.state.pos.width, t = this.state.pos.height;
                return u["default"].createElement("div", {
                    className: b("added-to-dict-message")
                }, u["default"].createElement("div", {
                    className: b("added-to-dict-message-content")
                }, u["default"].createElement("div", {
                    className: b("added-to-dict-word")
                }, this.state.match.value), " is now in your ", u["default"].createElement("a", {
                    target: "__blank",
                    href: p.URLS.editorDictionary
                }, "personal dictionary")), u["default"].createElement("div", {
                    style: {
                        width: e,
                        height: t
                    },
                    "data-action": "hide",
                    className: b("added-to-dict-sizer")
                }));
            },
            componentWillMount: function() {
                var e = this;
                this.cardEvents = function(t) {
                    var n = t.target, r = n.dataset, o = r.action, i = r.replace, a = e.state.match, l = e.props;
                    if (e.state.addedToDict && "A" == n.tagName) return void m.fire("show-dictionary");
                    if (t.stopPropagation(), t.preventDefault(), o || i || (o = n.parentNode.dataset.action, 
                    i = n.parentNode.dataset.replace), i && (o = "replace"), o) switch (o) {
                      case "replace":
                        a.replace(i), l.hide(), m.call("statsc.ui.increment", "activity:" + (a.syn ? "synonyms" : "replacement") + ".click");
                        break;

                      case "ignore":
                        a.ignore(), l.hide();
                        break;

                      case "hide":
                        l.hide();
                        break;

                      case "anim-hide":
                        l.animHide();
                        break;

                      case "editor":
                        l.openEditor();
                        break;

                      case "login":
                        l.openEditor();
                        break;

                      case "add":
                        l.addToDict();
                    }
                };
            },
            componentDidMount: function() {
                var e;
                (e = c.findDOMNode(this), f.on).call(e, "click", this.cardEvents);
            },
            componentWillUnmount: function() {
                var e;
                (e = c.findDOMNode(this), f.off).call(e, "click", this.cardEvents);
            },
            render: function() {
                var e, t = {}, n = this.state.pos, r = this.state.match, o = this.state.addedToDict, a = f.cs((e = {}, 
                l["default"](e, g, !0), l["default"](e, b("syn"), r.syn), l["default"](e, b("flip"), n.rect.flip), 
                l["default"](e, b("animate"), this.state.animate), l["default"](e, this.state.className, this.state.className), 
                l["default"](e, b("wide-footer"), i(this.state.match)), l["default"](e, b("anonymous"), this.props.isAnonymous()), 
                l["default"](e, b("added-to-dict"), o), e)), s = {
                    marginLeft: this.getTriangleMargin()
                };
                return t.top = n.rect.top, t.left = n.rect.left, 0 == n.rect.top && 0 == n.rect.left && this.state.visible && m.call("statsc.ui.increment", "stability:card.top_left_0"), 
                n.rect.top > 0 && n.rect.top < 10 && n.rect.left > 0 && n.rect.left < 10 && this.state.visible && m.call("statsc.ui.increment", "stability:card.top_left_10"), 
                t.visibility = this.state.visible ? "" : "hidden", u["default"].createElement("div", {
                    tabIndex: "-1",
                    style: t,
                    className: a
                }, u["default"].createElement("span", {
                    style: s,
                    className: b("triangle")
                }), this.renderHeader(), o && this.renderAddedToDict(), r.syn && this.renderSynonyms(), r.didYouMean && this.renderConfused(), this.renderFooter(r));
            }
        }), t.exports = n["default"];
    }, {
        "../config": 150,
        "../dom": 154,
        "../tracking": 214,
        "babel-runtime/helpers/defineProperty": 21,
        dompurify: "dompurify",
        react: "react",
        "react-dom": "react-dom"
    } ],
    160: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            if (e) {
                if (!e.length) return e;
                if (1 == e.length || !t) return e[0];
                var n = t.pageX || t.clientX, r = t.pageY || t.clientY, o = void 0;
                return e.forEach(function(e) {
                    var t = e.top, i = e.left, a = e.width, l = e.height;
                    r >= t && t + l >= r && n >= i && i + a >= n && (o = e);
                }), o || e[0];
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/core-js/symbol"), a = r(i), l = e("babel-runtime/core-js/object/get-prototype-of"), s = r(l), u = e("babel-runtime/helpers/classCallCheck"), c = r(u), d = e("babel-runtime/helpers/createClass"), f = r(d), m = e("babel-runtime/helpers/possibleConstructorReturn"), p = r(m), g = e("babel-runtime/helpers/inherits"), b = r(g), h = e("react"), v = r(h), _ = e("react-dom"), y = e("emitter"), w = r(y), E = e("../timers"), k = r(E), x = e("../util"), C = e("../window-events"), j = r(C), T = e("../tracking"), S = e("../position"), N = e("../dom"), $ = e("./hint"), M = r($), A = e("./tooltip"), P = r(A), D = e("./card-component"), O = r(D), L = e("./card-component-2"), I = r(L), R = {}, F = function(e) {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = e.doc, r = void 0 === n ? document : n, o = e.domCls, i = void 0 === o ? "" : o, l = e.user, u = void 0 === l ? {} : l;
                c["default"](this, t);
                var d = p["default"](this, s["default"](t).call(this));
                return d.isAnonymous = function() {
                    return d.user.anonymous;
                }, d.show = function(e, t) {
                    return d.emit("show", e.id), d.updatePos(e, t), k["default"].start(R.id), T.call("statsc.ui.increment", "stability:card.open"), 
                    d;
                }, d.hide = function() {
                    if (R.hint.visible) {
                        R.container.el.style.display = "none", d.setState({
                            animate: !1,
                            visible: !1,
                            match: {}
                        });
                        var e = R.notfound && R.notfound.isEnabled();
                        R.notfound.disable(), R.notfound.hide(), d.emit("hide", d.match), d.removeLoading(R.hint.currentEl);
                        var t = k["default"].stop(R.id);
                        if (d.match) {
                            var n = d.match.syn;
                            T.call("statsc.ui.timing", "stability:" + (n ? "syn" : "card") + ".close", t);
                        }
                        return e && T.call("statsc.ui.timing", "stability:syn.close", t), d.match = null, 
                        R.container.el.style.display = "", d;
                    }
                }, d.animHide = function() {
                    var e;
                    return d.setState({
                        animate: !0
                    }), (e = R.el, N.once).call(e, N.whichAnimationEndEvent(), d.hide), d;
                }, d.openEditor = function() {
                    d.removeLoading(R.hint.currentEl), d.emit("toeditor", d.match.editorId), d.hide();
                }, d.addToDict = function() {
                    d.setState({
                        addedToDict: !0
                    }), d.emit("addtodict", {
                        match: d.match,
                        hide: d.hide,
                        animHide: d.animHide
                    });
                }, d.inTarget = function(e) {
                    var t = e.target, n = e.clientX, r = e.clientY, o = e.detail, i = R.hint.currentEl, a = (N.parentHasClass(t, R.cls) || N.hasClass(t, R.cls)) && !N.hasClass(i, "g-selection-anim"), l = d.elementsFromPoint(n, r).some(function(e) {
                        return N.hasClass(e, R.cls);
                    });
                    return l && R.hint.visible && 1 == o ? !0 : a ? i && i != t ? (R.hint.fastHide(), 
                    void d.removeLoading(i)) : (d.addLoading(t), !0) : void (!R.hint.visible && i && d.removeLoading(i));
                }, d.addLoading = function(e) {
                    return !N.hasClass(e, R.pCls) && N.addClass(e, R.pCls);
                }, d.removeLoading = function(e) {
                    N.hasClass(e, R.pCls) && N.removeClass(e, R.pCls), N.hasClass(e, "g-selection-anim") && e.parentNode && e.parentNode.removeChild(e);
                }, d.showSynonyms = function(e) {
                    return e.animEl && 0 != e.animEl.getClientRects().length ? (R.hint.currentEl && d.hide(), 
                    R.hint.currentEl = e.animEl, 0 == e.synonyms.meanings.length ? (R.notfound.enable(), 
                    R.notfound.show({
                        posEl: e.animEl,
                        text: "No synonyms found",
                        outerIframe: R.iframe
                    })) : (d.setData(e), d.updatePos(e.animEl), d.setState({
                        visible: !0
                    })), R.hint.setVisible(!0), k["default"].start(R.id), T.call("statsc.ui.increment", "stability:syn.open"), 
                    d) : d;
                }, d.setOuterIframe = function(e) {
                    var t = e.contentDocument;
                    !e || t && e == R.iframe || (R.iframe = e, R.hint.setDocs(R.doc, t));
                }, d.user = u, R = {
                    id: a["default"]("GrammarCard"),
                    notfound: P["default"]({
                        cls: "gr-notfound-tooltip",
                        enabled: !1,
                        doc: r
                    }),
                    windowEvents: {
                        keydown: d.hide,
                        scroll: d.hide,
                        resize: d.hide
                    },
                    doc: r,
                    domCls: i,
                    cls: "gr_",
                    pCls: "gr-progress"
                }, R.container = d.render(R), R.el = _.findDOMNode(R.container.component), R.hint = new M["default"]({
                    doc: R.doc,
                    hint: R.el,
                    hideDelay: 500,
                    inTarget: d.inTarget,
                    cls: R.cls,
                    delay: 400,
                    onshow: d.show,
                    onhide: d.hide
                }).bind(), d.hint = R.hint, j["default"].on(R.windowEvents, !0), d;
            }
            return b["default"](t, e), f["default"](t, [ {
                key: "updateState",
                value: function(e) {
                    this.user = e;
                }
            }, {
                key: "elementsFromPoint",
                value: function(e, t) {
                    return e && t ? R.doc.elementsFromPoint ? R.doc.elementsFromPoint(e, t) : [ R.doc.elementFromPoint(e, t) ] : [];
                }
            }, {
                key: "setState",
                value: function(e) {
                    R.container.component.setState(e);
                }
            }, {
                key: "setData",
                value: function(e) {
                    return e ? (this.setState({
                        match: e,
                        visible: !0,
                        addedToDict: !1
                    }), this.match = e, this) : this;
                }
            }, {
                key: "updatePos",
                value: function(e, t) {
                    if (null == e.parentNode) {
                        if (!e.id) return this.hide();
                        var n = R.doc.querySelector(".gr_" + e.id);
                        if (!n) return this.hide();
                        R.hint.currentEl = e = n;
                    }
                    var r = S.getAbsRect(e, R.iframe, !0), i = S.posToRect(R.el, o(r, t));
                    i.rect.flip && (i.rect.top = i.rect.top + R.el.clientHeight), i.width = R.el.clientWidth, 
                    i.height = R.el.clientHeight, this.setState({
                        pos: i
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        className: R.domCls,
                        isAnonymous: this.isAnonymous,
                        hide: this.hide,
                        animHide: this.animHide,
                        openEditor: this.openEditor,
                        addToDict: this.addToDict
                    }, t = this.user && x.isGrammarlyEmail(this.user.email) ? I["default"] : O["default"];
                    return N.renderReactWithParent(v["default"].createElement(t, e), R.doc.documentElement, R.id, "grammarly-card");
                }
            }, {
                key: "remove",
                value: function() {
                    R.hint.unbind(), j["default"].off(R.windowEvents, !0), R.container.remove();
                }
            } ]), t;
        }(x.createClass(w["default"]));
        n["default"] = F, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../position": 195,
        "../timers": 210,
        "../tracking": 214,
        "../util": 218,
        "../window-events": 219,
        "./card-component": 159,
        "./card-component-2": 158,
        "./hint": 163,
        "./tooltip": 180,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/core-js/symbol": 15,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        emitter: "emitter",
        react: "react",
        "react-dom": "react-dom"
    } ],
    161: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e) {
                F = e, K && K.updateUser(e);
            }
            function n(e) {
                var t = "off" == e;
                P.toggleClass(D.body, t, "gr-disable-scroll"), P.toggleClass(D.documentElement, t, "gr-disable-scroll");
            }
            function r() {
                Y && !F.anonymous && d();
            }
            function o(e) {
                return new C["default"]({
                    doc: D,
                    user: e
                });
            }
            function i(e, t) {
                n("off"), K = o(t), K.on("hide", function() {
                    n("on"), S["default"].emitFocusedTab("focus-editor", Y.editorId), M.call("felog.info", "signin_close", {
                        active_time: $["default"].stop(z)
                    });
                }), M.call("felog.info", "signin_open"), M.fire("login-attempt", e);
            }
            function a() {
                q = !0, U = D.querySelector(O), U || (U = w.findDOMNode(P.renderReactWithParent(y["default"].createElement(R, null), D.documentElement, j.guid()).component)), 
                V = U.querySelector(L("back"));
            }
            function l() {
                var e = {
                    "mail.google.com": "Gmail",
                    "facebook.com": "Facebook",
                    "twitter.com": "Twitter"
                };
                return "Back to " + (e[A.getDomain()] || document.title);
            }
            function s(e) {
                e.stopPropagation(e), x();
            }
            function u(e) {
                S["default"].emitFocusedTab("editor-set-state", e);
            }
            function c() {
                S["default"].emitFocusedTab("dialog-closed", Y.editorId);
            }
            function d() {
                if (W) {
                    var e = function() {
                        I.el.style.background = "";
                        var e = u;
                        return u = function(t) {
                            u = e, I.refresh(), S["default"].emitFocusedTab("after-refresh-dialog", t);
                        }, x(), {
                            v: void 0
                        };
                    }();
                    if ("object" === ("undefined" == typeof e ? "undefined" : p["default"](e))) return e.v;
                }
                I.refresh();
            }
            function f(e) {
                S["default"].emitBackground("iframe-mode", {
                    iframeMode: e,
                    id: Y.socketId
                });
            }
            function m() {
                F.anonymous || I.activate();
            }
            function g(e) {
                var t = e.data, n = e.caller;
                return $["default"].start(z), Y = t, F.anonymous ? i(n, F) : (I.activate(), void h(t));
            }
            function h(e) {
                q || a(), U.style.opacity = 0, P.addClass(U, "gr-_show");
                var t = v["default"].extend({
                    favicon: A.getFavicon(),
                    page: l()
                }, e);
                I.send(t), f(!0), setTimeout(function() {
                    return U.style.opacity = 1;
                }, 10), n("off"), P.listen(D.body, "keydown", N), P.listen(V, "click", s), P.listen(U, "click", s), 
                W = !0;
            }
            function _(e) {
                var t = e.action;
                "edit" == t && u(e), "close" == t && x(), "initialized" == t && (k(e), setTimeout(function() {
                    return I.el.style.background = "transparent";
                }, 300)), "socket" == t && S["default"].emitBackground("socket-client", e), "setSettings" == t && B(e.data), 
                "tracking" == t && M.call(e.method, e.param), "popup-editor-fix" == t && H(), "open-url" == t && (M.fire("upgrade", "popup_editor_other"), 
                S["default"].emitBackground("open-url", e.url));
            }
            function E(e, t) {
                Y && e.socketId == Y.socketId && (t("ok"), e.action = "socket", I.send(e));
            }
            function k(e) {
                var t = "Premium" == e.userType ? "freemium-plus" : "freemium";
                D.documentElement.setAttribute("data-type", t);
            }
            function x() {
                W && (W = !1, n("on"), U.style.opacity = 0, P.removeClass(U, "gr-_show"), P.unlisten(D.body, "keydown", N), 
                P.unlisten(V, "click", s), P.unlisten(U, "click", s), I.send({
                    action: "hide"
                }), f(!1), c(), M.call("statsc.ui.timing", "stability:editor.close", $["default"].stop(z)));
            }
            function T() {
                window == window.top && (S["default"].off("show-dialog", g), S["default"].off("hide-dialog", x), 
                S["default"].off("reset", r), S["default"].off("socket-server-iframe", E)), I.deactivate(), 
                I.off("message", _), U.parentNode.removeChild(U);
            }
            function N(e) {
                return 27 == j.keyCode(e) && W ? (e.stopPropagation(), e.preventDefault(), x()) : void 0;
            }
            var D = e.doc, I = e.iframe, F = e.user, G = e.actions, B = G.updateSettings, H = G.incFixed, z = b["default"]("Dialog"), W = !1, U = void 0, V = void 0, q = void 0, Y = void 0, K = void 0, X = {
                show: g,
                hide: x,
                updateState: t,
                preActivate: m,
                render: a,
                getSignin: o,
                remove: T,
                refresh: d
            };
            return I.on("message", _), window == window.top && (S["default"].on("show-dialog", g), 
            S["default"].on("hide-dialog", x), S["default"].on("reset", r), S["default"].on("socket-server-iframe", E)), 
            X;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/core-js/object/get-prototype-of"), a = r(i), l = e("babel-runtime/helpers/classCallCheck"), s = r(l), u = e("babel-runtime/helpers/possibleConstructorReturn"), c = r(u), d = e("babel-runtime/helpers/inherits"), f = r(d), m = e("babel-runtime/helpers/typeof"), p = r(m), g = e("babel-runtime/core-js/symbol"), b = r(g);
        n["default"] = o;
        var h = e("lodash"), v = r(h), _ = e("react"), y = r(_), w = e("react-dom"), E = e("./iframe"), k = r(E), x = e("./signin-dialog"), C = r(x), j = e("../util"), T = e("../message"), S = r(T), N = e("../timers"), $ = r(N), M = e("../tracking"), A = e("../location"), P = e("../dom"), D = "gr_-editor", O = "." + D, L = function(e) {
            return "." + D + "_" + e;
        }, I = function(e) {
            return D + "_" + e;
        }, R = function(e) {
            function t() {
                var e, n, r, o;
                s["default"](this, t);
                for (var i = arguments.length, l = Array(i), u = 0; i > u; u++) l[u] = arguments[u];
                return n = r = c["default"](this, (e = a["default"](t)).call.apply(e, [ this ].concat(l))), 
                r.render = function() {
                    return y["default"].createElement("div", {
                        className: D,
                        style: {
                            display: "none"
                        }
                    }, y["default"].createElement("div", {
                        className: I("back")
                    }), y["default"].createElement(k["default"].IframeComponent, null));
                }, o = n, c["default"](r, o);
            }
            return f["default"](t, e), t;
        }(y["default"].Component);
        t.exports = n["default"];
    }, {
        "../dom": 154,
        "../location": 191,
        "../message": 192,
        "../timers": 210,
        "../tracking": 214,
        "../util": 218,
        "./iframe": 164,
        "./signin-dialog": 173,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/core-js/symbol": 15,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "babel-runtime/helpers/typeof": 28,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    162: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./tooltip"), i = r(o), a = e("../dom"), l = e("../tracking"), s = function(e) {
            function t(e) {
                a.hasClass(e.target, "fr-reload-tab") && (l.call("felog.info", "g_button_hover_reload_click"), 
                setTimeout(function() {
                    return window.location.reload(!0);
                }, 200));
            }
            var n = e.el, r = e.win, o = e.outerIframe, s = i["default"]({
                posEl: n,
                html: "<span class='fr-tooltip-title'>Cannot connect to Grammarly.</span> Please <span class='fr-reload-tab'>reload</span> the browser tab and check your internet connection. <span class='fr-dialog-br'></span>Don't lose your work! Copy any unsaved text before you reload the tab.",
                doc: n.ownerDocument,
                cls: "fr-btn-offline-tooltip",
                outerIframe: o,
                enabled: !1
            });
            a.listen(r, "click", t);
            var u = s.remove;
            return s.remove = function() {
                u(), a.unlisten(r, "click", t);
            }, s;
        };
        n["default"] = s, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../tracking": 214,
        "./tooltip": 180
    } ],
    163: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/classCallCheck"), i = r(o), a = e("lodash"), l = r(a), s = e("../util"), u = e("../dom"), c = {
            hideDelay: 10,
            onshow: s._f,
            onhide: s._f,
            onmousemove: s._f,
            onInnerMouseMove: s._f,
            inTarget: function(e) {
                var t = e.target, n = u.parentHasClass(t, this.cls) || u.hasClass(t, this.cls);
                if (n) return this.currentEl && this.currentEl != t ? void this.fastHide() : !0;
            }
        }, d = function f(e) {
            var t = this;
            i["default"](this, f), l["default"].extend(this, c, e, {
                bind: function(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? t.doc : arguments[1];
                    return t.doc2 && t.doc2 != n && t.bind(e, t.doc2), u.listen(n.body, "resize", t.fastHide, e), 
                    u.listen(n, {
                        gramMouse: t.mousemove,
                        mousemove: t.mousemove,
                        scroll: t.fastHide
                    }, s._f, e), u.listen(n, "click", t.click, e, !0), u.listen(t.hint, "mousemove", t.innerMouseMove, e), 
                    t;
                },
                setDocs: function(e, n) {
                    t.unbind(), l["default"].extend(t, {
                        doc: e,
                        doc2: n
                    }), t.bind();
                },
                unbind: function(e) {
                    return t.bind(!0, e);
                },
                fastHide: function() {
                    t.onhide(), t.cancelTimeout("show").cancelTimeout("hide"), t.visible = !1, t.currentEl = null;
                },
                innerMouseMove: function(e) {
                    t.onInnerMouseMove(e), e.preventDefault(), e.stopPropagation(), t.cancelTimeout("hide");
                },
                click: function(e) {
                    return !t.elInHint(e.target) && !t.inTarget(e) && t.fastHide();
                },
                elInHint: function(e) {
                    return e && (u.inEl(e, t.hint) || e == t.hint);
                },
                mousemove: function(e) {
                    var n = e.target;
                    if ("IFRAME" != n.tagName) {
                        if (e.detail && e.detail.el && (n = e.detail.el, e = {
                            target: n,
                            clientX: e.detail.e.clientX,
                            clientY: e.detail.e.clientY
                        }), s.isSafari() && "mousemove" == e.type) {
                            if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return t.mouseMoveCoordinates = e.x + "-" + e.y;
                            if (t.mouseMoveCoordinates == e.x + "-" + e.y) return;
                        }
                        if (t.elInHint(n)) return t.onmousemove(e, !0), void t.cancelTimeout("show").cancelTimeout("hide");
                        if (!t.inTarget(e)) return t.onmousemove(e, !1), void (t.visible ? t.hide() : t.cancelTimeout("show"));
                        t.onmousemove(e, !0), t.visible || (t.show(e, n).cancelTimeout("hide"), t.currentEl = n);
                    }
                },
                show: function(e, n) {
                    return t.showTimeout ? t : (t.cancelTimeout("hide"), t.showTimeout = setTimeout(function() {
                        this.cancelTimeout("show"), (this.elInHint(n) || this.inTarget(e)) && (this.visible = !0, 
                        this.onshow(n, {
                            pageX: e.pageX,
                            pageY: e.pageY,
                            clientX: e.clientX,
                            clientY: e.clientY
                        }));
                    }.bind(t), t.delay), t);
                },
                hide: function() {
                    return t.hideTimeout ? t : (t.hideTimeout = setTimeout(function() {
                        this.onhide(), this.visible = !1, this.currentEl = null;
                    }.bind(t), t.hideDelay), t);
                },
                cancelTimeout: function(e) {
                    var n = e + "Timeout";
                    return t[n] ? (clearTimeout(t[n]), t[n] = null, t) : t;
                },
                setVisible: function(e) {
                    t.visible = e, t.cancelTimeout("hide");
                }
            });
        };
        n["default"] = d, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../util": 218,
        "babel-runtime/helpers/classCallCheck": 19,
        lodash: "lodash"
    } ],
    164: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e) {
                _ = e;
            }
            function n() {
                function e() {
                    (y || (y = v.querySelector(h), x.el = y, y)) && (g.listen(window.top, "message", l), 
                    y.srcdoc || r(t), g.addClass(y, "gr-freemium-ifr"), w = !0, x.activated = w);
                }
                var t = arguments.length <= 0 || void 0 === arguments[0] ? d._f : arguments[0];
                w || e();
            }
            function r() {
                var e, t = arguments.length <= 0 || void 0 === arguments[0] ? d._f : arguments[0];
                y.setAttribute("srcdoc", window.GR_INLINE_POPUP), (e = y, g.once).call(e, "load", function() {
                    try {
                        window.ACTIVATE_GR_POPUP(y.contentWindow, y.contentDocument, c["default"]), t();
                    } catch (e) {
                        console.error("Cannot activate popup", e), p.call("felog.error", "editor_popup_activation_error", {
                            error: e
                        });
                    }
                });
            }
            function o() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? d._f : arguments[0];
                y ? f() : n(e);
            }
            function i(e, t) {
                return k || t ? void a(e) : E.push(e);
            }
            function a(e) {
                e.grammarly = !0;
                try {
                    y.contentWindow.postMessage(e, "*");
                } catch (t) {
                    console.error("wtf", t);
                }
            }
            function l(e) {
                var t = e.data;
                e.origin;
                if (t && t.grammarly) {
                    var n = t.action;
                    if ("user" == n) return f();
                    if (k = !0, "initialized" == n && E) {
                        var r = m["default"].stop("open_editor");
                        r && p.call("statsc.ui.timing", "performance:popup.first.load_time", r), E.forEach(x.send);
                    }
                    var o = m["default"].stop("open_editor");
                    o && p.call("statsc.ui.timing", "performance:popup.load_time", o), "accepted" == n && (E = []), 
                    x.emit("message", t);
                }
            }
            function u() {
                g.unlisten(window.top, "message", l);
            }
            function f() {
                a({
                    action: "user",
                    user: _
                });
            }
            var v = e.doc, _ = e.user, y = void 0, w = void 0, E = [], k = !1, x = s["default"]({
                activate: n,
                refresh: o,
                send: i,
                selector: h,
                baseCls: b,
                updateState: t,
                deactivate: u
            });
            return x;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("react"), a = r(i), l = e("emitter"), s = r(l), u = e("dompurify"), c = r(u), d = e("../util"), f = e("../timers"), m = r(f), p = e("../tracking"), g = e("../dom"), b = "gr_-ifr", h = "." + b, v = a["default"].createClass({
            displayName: "IframeComponent",
            render: function() {
                return a["default"].createElement("iframe", {
                    className: b + " gr-_dialog-content"
                });
            }
        });
        o.IframeComponent = v, o.baseCls = b, o.selector = h, n["default"] = o, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../timers": 210,
        "../tracking": 214,
        "../util": 218,
        dompurify: "dompurify",
        emitter: "emitter",
        react: "react"
    } ],
    165: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e) {
                var t = e.user;
                r.card && r.card.updateState(t), r.iframe && r.iframe.updateState(t), r.dialog && r.dialog.updateState(t);
            }
            function n() {
                r.iframe && r.iframe.deactivate(), r.dialog && r.dialog.remove(), r.card && r.card.remove(), 
                r.iframe = null, r.dialog = null, r.card = null;
            }
            var r = e.app, o = e.doc, i = void 0 === o ? document : o, l = e.user, u = e.actions, d = r.iframe = a["default"]({
                doc: i,
                user: l
            });
            return r.dialog = s["default"]({
                doc: i,
                iframe: d,
                user: l,
                actions: u
            }), r.dialog.render(), r.dialog.preActivate(), r.card = new c["default"]({
                doc: i,
                user: l
            }), {
                clear: n,
                updateState: t
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = o;
        var i = e("./iframe"), a = r(i), l = e("./dialog"), s = r(l), u = e("./card"), c = r(u);
        t.exports = n["default"];
    }, {
        "./card": 160,
        "./dialog": 161,
        "./iframe": 164
    } ],
    166: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("./features"), _ = r(v), y = e("./quotes"), w = r(y), E = {
            wrapper: "_2ba6ba-wrapper",
            hide: "_2ba6ba-hide",
            content: "_2ba6ba-content",
            features: "_2ba6ba-features",
            quotes: "_2ba6ba-quotes"
        }, k = r(E), x = e("lib/dom"), C = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var i = arguments.length, a = Array(i), s = 0; i > s; s++) a[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(a))), 
                r.state = {
                    hide: !1
                }, r.onClick = function(e) {
                    return !x.matchesSelector(e.target, "." + k["default"].content + ", ." + k["default"].content + " *") && r.handleClose(e);
                }, r.handleClose = function(e) {
                    e && e.stopPropagation(), r.setState({
                        hide: !0
                    }), setTimeout(function() {
                        return r.props.onClose(e);
                    }, 400);
                }, o = n, m["default"](r, o);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    return h["default"].createElement("div", {
                        className: x.cs(k["default"].wrapper, i["default"]({}, k["default"].hide, this.state.hide)),
                        onClick: this.onClick
                    }, h["default"].createElement("div", {
                        className: k["default"].content
                    }, h["default"].createElement("div", {
                        className: k["default"].features
                    }, h["default"].createElement(_["default"], {
                        plus: this.props.plus,
                        editor: this.props.editor
                    })), h["default"].createElement("div", {
                        className: k["default"].quotes
                    }, h["default"].createElement(w["default"], {
                        onClose: this.handleClose
                    }))));
                }
            } ]), t;
        }(b.Component);
        n["default"] = C, t.exports = n["default"];
    }, {
        "./features": 167,
        "./quotes": 169,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "lib/dom": 154,
        react: "react"
    } ],
    167: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/object/get-prototype-of"), i = r(o), a = e("babel-runtime/helpers/classCallCheck"), l = r(a), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = e("grammarly-editor"), h = r(b), v = e("../../config"), _ = e("../../message"), y = r(_), w = e("../../tracking"), E = {
            wrapper: "_7d2e3f-wrapper",
            titleWrapper: "_7d2e3f-titleWrapper",
            plus: "_7d2e3f-plus",
            plusCount: "_7d2e3f-plusCount",
            title: "_7d2e3f-title",
            subtitle: "_7d2e3f-subtitle",
            featuresWrapper: "_7d2e3f-featuresWrapper",
            featureRow: "_7d2e3f-featureRow",
            featureRowContent: "_7d2e3f-featureRowContent",
            featureTypeCol: "_7d2e3f-featureTypeCol",
            featureFreeLabel: "_7d2e3f-featureFreeLabel",
            featureTypeLabel: "_7d2e3f-featureTypeLabel",
            featurePremiumLabel: "_7d2e3f-featurePremiumLabel",
            featureFreeCol: "_7d2e3f-featureFreeCol",
            featurePremiumCol: "_7d2e3f-featurePremiumCol",
            premium: "_7d2e3f-premium",
            freeNope: "_7d2e3f-freeNope",
            freeCheckMark: "_7d2e3f-freeCheckMark",
            premiumCheckMark: "_7d2e3f-premiumCheckMark",
            premiumGift: "_7d2e3f-premiumGift",
            premiumArrow: "_7d2e3f-premiumArrow",
            premiumHover: "_7d2e3f-premiumHover",
            premiumInfo: "_7d2e3f-premiumInfo",
            premiumInfoWrapper: "_7d2e3f-premiumInfoWrapper",
            premiumInfoFeatures: "_7d2e3f-premiumInfoFeatures",
            premiumInfoTitle: "_7d2e3f-premiumInfoTitle",
            btnWrapper: "_7d2e3f-btnWrapper",
            premiumButton: "_7d2e3f-premiumButton",
            inviteWrapper: "_7d2e3f-inviteWrapper",
            inviteTextLabel: "_7d2e3f-inviteTextLabel",
            inviteText: "_7d2e3f-inviteText"
        }, k = r(E), x = g["default"].createElement("span", null, "100+ additional advanced checks", g["default"].createElement("span", {
            className: k["default"].premiumHover
        }, g["default"].createElement("span", {
            className: k["default"].premiumInfo
        }), g["default"].createElement("div", {
            className: k["default"].premiumInfoWrapper
        }, g["default"].createElement("span", {
            className: k["default"].premiumInfoTitle
        }, "Premium comes with these checks:"), g["default"].createElement("span", {
            className: k["default"].premiumInfoFeatures
        }, "Repetitive Words", g["default"].createElement("br", null), "Overused Words", g["default"].createElement("br", null), "No Comma with Coordinate Clauses", g["default"].createElement("br", null), "Better Word Pair", g["default"].createElement("br", null), "Wordiness", g["default"].createElement("br", null), "No Comma with Introductory Clauses", g["default"].createElement("br", null), "Comma Splice", g["default"].createElement("br", null), "Fragment", g["default"].createElement("br", null), "Slang", g["default"].createElement("br", null), "Closing Punctuation", g["default"].createElement("br", null), "Squinting Modifier", g["default"].createElement("br", null), "Adjective Order", g["default"].createElement("br", null), "Sequence of Tenses", g["default"].createElement("br", null), "Lonely Gerund", g["default"].createElement("br", null), "Brevity", g["default"].createElement("br", null), "and many more…")))), C = function(e) {
            function t() {
                var e, n, r, o;
                l["default"](this, t);
                for (var a = arguments.length, s = Array(a), u = 0; a > u; u++) s[u] = arguments[u];
                return n = r = d["default"](this, (e = i["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.features = [ {
                    text: "150 critical grammar and spelling checks",
                    free: !0,
                    id: 1
                }, {
                    text: x,
                    id: 2
                }, {
                    text: "Vocabulary enhancement suggestions",
                    id: 3
                }, {
                    text: "Genre-specific writing style checks",
                    id: 4
                }, {
                    text: "Sophisticated plagiarism detector",
                    id: 5
                } ], r.goPremium = function() {
                    var e = h["default"].getUpgradeUrlFromMatches({
                        baseUrl: v.URLS.upgrade,
                        returnUrl: "",
                        appType: "popup",
                        matches: r.props.editor.getMatches()
                    });
                    y["default"].emitBackground("open-url", e), w.fire("premium-popup-upgrade-click");
                }, r.goReferral = function() {
                    y["default"].emitBackground("open-url", v.URLS.referral), w.fire("premium-popup-referral-click");
                }, o = n, d["default"](r, o);
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "render",
                value: function() {
                    return g["default"].createElement("div", {
                        className: k["default"].wrapper
                    }, g["default"].createElement("div", {
                        className: k["default"].titleWrapper
                    }, g["default"].createElement("span", {
                        className: k["default"].plus
                    }, "FIX ", g["default"].createElement("span", {
                        className: k["default"].plusCount
                    }, g["default"].createElement("span", null, this.props.plus)), " ADVANCED ISSUE", this.props.plus > 1 && "S", " WITH GRAMMARLY PREMIUM"), g["default"].createElement("span", {
                        className: k["default"].title
                    }, "Take Your Writing to the Next Level"), g["default"].createElement("span", {
                        className: k["default"].subtitle
                    }, "Built by linguists, Grammarly Premium finds and corrects hundreds of", g["default"].createElement("br", null), "complex writing errors — so you don’t have to.")), g["default"].createElement("div", {
                        className: k["default"].featuresWrapper
                    }, g["default"].createElement("div", {
                        className: k["default"].featureRow
                    }, g["default"].createElement("div", {
                        className: k["default"].featureTypeLabel
                    }, "Product features"), g["default"].createElement("div", {
                        className: k["default"].featureFreeLabel
                    }, "Free"), g["default"].createElement("div", {
                        className: k["default"].featurePremiumLabel
                    }, g["default"].createElement("span", {
                        className: k["default"].premium
                    }, "Premium"))), this.features.map(function(e) {
                        var t = e.text, n = e.free, r = e.id;
                        return g["default"].createElement("div", {
                            key: r,
                            className: k["default"].featureRowContent
                        }, g["default"].createElement("div", {
                            className: k["default"].featureTypeCol
                        }, t), g["default"].createElement("div", {
                            className: k["default"].featureFreeCol
                        }, g["default"].createElement("span", {
                            className: n ? k["default"].freeCheckMark : k["default"].freeNope
                        })), g["default"].createElement("div", {
                            className: k["default"].featurePremiumCol
                        }, g["default"].createElement("span", {
                            className: k["default"].premiumCheckMark
                        })));
                    })), g["default"].createElement("div", {
                        className: k["default"].btnWrapper
                    }, g["default"].createElement("div", {
                        className: k["default"].premiumButton,
                        onClick: this.goPremium
                    }, "View Plans"), g["default"].createElement("div", {
                        className: k["default"].inviteWrapper,
                        onClick: this.goReferral
                    }, g["default"].createElement("span", {
                        className: k["default"].premiumGift
                    }), g["default"].createElement("span", {
                        className: k["default"].inviteText
                    }, "Prefer a Test Drive? ", g["default"].createElement("span", {
                        className: k["default"].inviteTextLabel
                    }, "Give Premium, Get Premium")))));
                }
            } ]), t;
        }(p.Component);
        n["default"] = C, t.exports = n["default"];
    }, {
        "../../config": 150,
        "../../message": 192,
        "../../tracking": 214,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "grammarly-editor": "grammarly-editor",
        react: "react"
    } ],
    168: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/object/get-prototype-of"), i = r(o), a = e("babel-runtime/helpers/classCallCheck"), l = r(a), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = e("react-dom"), h = r(b), v = e("emitter"), _ = r(v), y = e("lib/util"), w = e("./dialog"), E = r(w), k = function(e) {
            function t(e) {
                var n = e.container, r = e.doc, o = e.plus, a = e.editor;
                l["default"](this, t);
                var s = d["default"](this, i["default"](t).call(this));
                return s.dialogComponent = null, s.onClose = function() {
                    s.emit("hide"), s.remove();
                }, s.remove = function() {
                    return s.container.parentNode.removeChild(s.container);
                }, s.container = n, s.doc = r, s.editor = a, s.plus = o, s.render(), s;
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "checkContainer",
                value: function() {
                    this.container || (this.container = this.doc.createElement("premium_dialog"), this.doc.documentElement.appendChild(this.container));
                }
            }, {
                key: "render",
                value: function() {
                    this.checkContainer(), this.dialogComponent = h["default"].render(g["default"].createElement(E["default"], {
                        onClose: this.onClose,
                        plus: this.plus,
                        editor: this.editor
                    }), this.container);
                }
            } ]), t;
        }(y.createClass(_["default"]));
        n["default"] = k, t.exports = n["default"];
    }, {
        "./dialog": 166,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        emitter: "emitter",
        "lib/util": 218,
        react: "react",
        "react-dom": "react-dom"
    } ],
    169: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/object/get-prototype-of"), i = r(o), a = e("babel-runtime/helpers/classCallCheck"), l = r(a), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = {
            wrapper: "_884a1d-wrapper",
            crossWrapper: "_884a1d-crossWrapper",
            cross: "_884a1d-cross",
            quote: "_884a1d-quote",
            text: "_884a1d-text",
            firstAuthor: "_884a1d-firstAuthor",
            secondAuthor: "_884a1d-secondAuthor",
            firstAuthorAvatar: "_884a1d-firstAuthorAvatar",
            secondAuthorAvatar: "_884a1d-secondAuthorAvatar"
        }, h = r(b), v = function(e) {
            function t() {
                return l["default"](this, t), d["default"](this, i["default"](t).apply(this, arguments));
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "render",
                value: function() {
                    return g["default"].createElement("div", {
                        className: h["default"].wrapper
                    }, g["default"].createElement("div", {
                        className: h["default"].crossWrapper,
                        onClick: this.props.onClose
                    }, g["default"].createElement("div", {
                        className: h["default"].cross
                    })), g["default"].createElement("div", {
                        className: h["default"].quotesWrapper
                    }, g["default"].createElement("div", {
                        className: h["default"].quote
                    }, g["default"].createElement("span", {
                        className: h["default"].text
                    }, "“Thinking about getting #grammarly? DO IT. I'm 100% sold. I bought a month of their premium service, about to extend for a year.”"), g["default"].createElement("span", {
                        className: h["default"].firstAuthorAvatar
                    }), g["default"].createElement("span", {
                        className: h["default"].firstAuthor
                    }, "J. M. Bush, Author")), g["default"].createElement("div", null, g["default"].createElement("span", {
                        className: h["default"].text
                    }, "“Immediately purchased \u2028the premium version of @grammarly after using it \u2028for a single piece of text. Highly recommended.”"), g["default"].createElement("span", {
                        className: h["default"].secondAuthorAvatar
                    }), g["default"].createElement("span", {
                        className: h["default"].secondAuthor
                    }, "Lara Littlefield, Software Engineer"))));
                }
            } ]), t;
        }(p.Component);
        n["default"] = v, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        react: "react"
    } ],
    170: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("lib/dom"), _ = e("lib/spinner"), y = {
            button_container: "_578484-button_container",
            button_spinner: "_578484-button_spinner",
            button: "_578484-button",
            loading: "_578484-loading"
        }, w = r(y), E = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var i = arguments.length, a = Array(i), s = 0; i > s; s++) a[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(a))), 
                r.onClick = function(e) {
                    e.preventDefault(), r.props.loading || r.props.onClick(e);
                }, o = n, m["default"](r, o);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.loading, n = t ? "" : this.props.text, r = v.cs((e = {}, i["default"](e, w["default"].button_container, !0), 
                    i["default"](e, w["default"].loading, t), e));
                    return h["default"].createElement("div", {
                        className: r
                    }, t && h["default"].createElement(_.SpinnerComponent, {
                        className: w["default"].button_spinner
                    }), h["default"].createElement("button", {
                        type: "button",
                        onClick: this.onClick,
                        className: w["default"].button
                    }, n));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = E, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "lib/dom": 154,
        "lib/spinner": 203,
        react: "react"
    } ],
    171: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, _ = r(v), y = e("./input"), w = r(y), E = [ {
            label: "Name",
            name: "name",
            type: "text"
        }, {
            label: "Email",
            name: "email",
            type: "text"
        }, {
            label: "Password",
            name: "password",
            type: "password"
        } ], k = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var a = arguments.length, s = Array(a), c = 0; a > c; c++) s[c] = arguments[c];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.render = function() {
                    return h["default"].createElement("fieldset", {
                        className: _["default"].inputs
                    }, h["default"].createElement("input", {
                        className: _["default"].hidden,
                        type: "text",
                        name: "fakeusernameremembered"
                    }), h["default"].createElement("input", {
                        className: _["default"].hidden,
                        type: "password",
                        name: "fakepasswordremembered"
                    }), E.filter(function(e) {
                        var t = e.name;
                        return r.props.fields.includes(t);
                    }).map(function(e, t) {
                        return h["default"].createElement(w["default"], i["default"]({}, e, {
                            ref: e.name,
                            onSet: r.props.onSet(e.name),
                            value: r.props.formData[e.name],
                            validation: r.props.validation[e.name],
                            onValidate: r.props.onValidate(e.name),
                            forceValidation: r.props.forceValidation,
                            key: t
                        }));
                    }));
                }, o = n, m["default"](r, o);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? this.props.fields[0] : arguments[0];
                    this.refs[e].refs.input.focus();
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = k, t.exports = n["default"];
    }, {
        "./input": 174,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        react: "react"
    } ],
    172: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("react"), i = r(o), a = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, l = r(a), s = e("lib/config");
        n["default"] = function() {
            return i["default"].createElement("div", {
                className: l["default"].footer
            }, "By signing up, you agree to our ", i["default"].createElement("a", {
                tabIndex: "-1",
                target: "__blank",
                href: s.URLS.terms
            }, "Terms and Conditions"), " and ", i["default"].createElement("a", {
                tabIndex: "-1",
                target: "__blank",
                href: s.URLS.policy
            }, "Privacy ", i["default"].createElement("br", null), " Policy"), ". You also agree to receive product-related emails from ", i["default"].createElement("br", null), "Grammarly, which you can unsubscribe from at any time.");
        }, t.exports = n["default"];
    }, {
        "lib/config": 150,
        react: "react"
    } ],
    173: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o), a = e("babel-runtime/helpers/defineProperty"), l = r(a), s = e("babel-runtime/regenerator"), u = r(s), c = e("babel-runtime/helpers/asyncToGenerator"), d = r(c), f = e("babel-runtime/core-js/object/keys"), m = r(f), p = e("babel-runtime/core-js/object/get-prototype-of"), g = r(p), b = e("babel-runtime/helpers/classCallCheck"), h = r(b), v = e("babel-runtime/helpers/createClass"), _ = r(v), y = e("babel-runtime/helpers/possibleConstructorReturn"), w = r(y), E = e("babel-runtime/helpers/inherits"), k = r(E), x = e("react"), C = r(x), j = e("react-dom"), T = r(j), S = e("lib/config"), N = e("lib/util"), $ = e("lib/dom"), M = e("lib/message"), A = r(M), P = e("./signin-dialog"), D = r(P), O = e("lib/tracking"), L = e("emitter"), I = r(L), R = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, F = r(R), G = function(e) {
            function t(e) {
                var n = e.doc, r = e.container, o = e.view, i = void 0 === o ? "register" : o, a = e.user;
                h["default"](this, t);
                var l = w["default"](this, g["default"](t).call(this));
                return B.call(l), l.doc = n, l.user = a, l.container = r, l.setView(i), l;
            }
            return k["default"](t, e), _["default"](t, [ {
                key: "validate",
                value: function(e) {
                    var t = this, n = m["default"](e).reduce(function(n, r) {
                        var o = e[r];
                        return o && "" != o ? ("password" == r && "register" == t.view && o.length < 6 && (n[r] = t.validationMessages.shortPassword), 
                        "email" != r || N.isValidEmail(o) || (n[r] = t.validationMessages.incorrectEmail), 
                        n) : (n[r] = t.validationMessages.required, n);
                    }, {});
                    return n._valid = 0 == m["default"](n).length, n;
                }
            }, {
                key: "extendWithServerValidation",
                value: function(e, t) {
                    return t.error ? (e._valid = !1, "Conflict" == t.error ? (e.email = this.validationMessages.emailExists, 
                    e) : "Unauthorized" == t.error ? (e.error = this.validationMessages.invalidUser, 
                    e) : (e.error = this.validationMessages.fail, e)) : (e._valid = !0, e);
                }
            }, {
                key: "onAuth",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments);
                    }
                    var t = d["default"](u["default"].mark(function n(e, t) {
                        var r, o;
                        return u["default"].wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (this.validation = this.validate(t), this.forceValidation = !0, !this.validation._valid) {
                                    n.next = 18;
                                    break;
                                }
                                return this.loading = !0, this.render(), r = void 0, n.prev = 6, n.next = 9, A["default"].promiseBackground(e, t);

                              case 9:
                                r = n.sent, n.next = 16;
                                break;

                              case 12:
                                n.prev = 12, n.t0 = n["catch"](6), n.t0.message && n.t0.message.includes("rejected by timeout") && O.call("felog.error", "stability.cant_connect_to_bg_page_during_login"), 
                                r = {
                                    error: !0
                                };

                              case 16:
                                this.validation = this.extendWithServerValidation(this.validation, r), this.validation._valid || O.fire(e + "-error", this.validation);

                              case 18:
                                if (this.loading = !1, !this.validation._valid) {
                                    n.next = 22;
                                    break;
                                }
                                return o = "signup" == e ? "welcome" : "login_success", n.abrupt("return", this.setView(o));

                              case 22:
                                this.render();

                              case 23:
                              case "end":
                                return n.stop();
                            }
                        }, n, this, [ [ 6, 12 ] ]);
                    }));
                    return e;
                }()
            }, {
                key: "checkContainer",
                value: function() {
                    this.container || (this.container = this.doc.createElement("signin_dialog"), this.doc.documentElement.appendChild(this.container), 
                    $.listen(this.doc.defaultView, "keydown", this.onKey));
                }
            }, {
                key: "render",
                value: function() {
                    this.checkContainer(), this.dialogComponent = T["default"].render(C["default"].createElement(D["default"], {
                        username: this.user.firstName,
                        formData: this.formData,
                        onSet: this.onSet,
                        onGoPremium: this.onGoPremium,
                        onSubmit: this.onSubmit,
                        onGoLogin: this.onGoLogin,
                        onGoRegister: this.onGoRegister,
                        onClose: this.onClose,
                        view: this.view,
                        validation: this.validation,
                        forceValidation: this.forceValidation,
                        onValidate: this.onValidate,
                        loading: this.loading
                    }), this.container);
                }
            }, {
                key: "remove",
                value: function() {
                    $.unlisten(this.doc.defaultView, "keydown", this.onKey), this.container.parentNode.removeChild(this.container);
                }
            } ]), t;
        }(N.createClass(I["default"])), B = function() {
            var e = this;
            this.loading = !1, this.dialogComponent = null, this.formData = {
                name: null,
                email: null,
                password: null
            }, this.updateUser = function(t) {
                e.user = t, e.render();
            }, this.setView = function(t, n) {
                "login_success" != t && (e.formData = e.getFormData("password")), ("login" == t || "register" == t) && (e.formData.password = null), 
                e.forceValidation = !1, e.view = t, e.validation = {}, e.render(), "string" != typeof n && (n = void 0), 
                e.dialogComponent.setFocus(t, n);
            }, this.validationMessages = {
                fail: "Something went wrong. Please try again later.",
                invalidUser: "Invalid email address/password combination.",
                required: "Required",
                shortPassword: "Must be >5 characters",
                incorrectEmail: "Incorrect",
                emailExists: 'Already in use. Do you need to <a data-view="login">Log in</a>?'
            }, this.onValidate = function(t) {
                return function(n) {
                    e.validation[t] = e.validate(l["default"]({}, t, n))[t], delete e.validation.error, 
                    e.render();
                };
            }, this.onSet = function(t) {
                return function(n) {
                    e.formData = i["default"]({}, e.formData, l["default"]({}, t, n)), e.render();
                };
            }, this.getFormData = function(t) {
                var n = i["default"]({}, e.formData);
                return n.hasOwnProperty(t) && delete n[t], n;
            }, this.onClose = function() {
                e.emit("hide"), e.remove();
            }, this.onGoPremium = function() {
                O.fire("upgrade-after-register"), A["default"].emitBackground("open-url", S.URLS.upgrade);
            }, this.onLogin = function() {
                return e.onAuth("signin", e.getFormData("name"));
            }, this.onSignup = function() {
                return e.onAuth("signup", e.getFormData());
            }, this.onGoLogin = function(t) {
                return e.setView("login", t);
            }, this.onGoRegister = function() {
                return e.setView("register");
            }, this.onSubmit = function() {
                e.loading || ("welcome" == e.view ? e.onClose() : "login" == e.view ? e.onLogin() : "register" == e.view && e.onSignup());
            }, this.onKey = function(t) {
                if (delete e.validation.error, 27 == N.keyCode(t) && e.onClose(), 13 == N.keyCode(t)) {
                    var n = t.target;
                    if ("A" == n.tagName) return;
                    var r = $.matchesSelector(n, "." + F["default"].navigation_item);
                    r ? "login" == e.view ? e.onGoRegister() : "register" == e.view && e.onGoLogin() : e.onSubmit();
                }
            };
        };
        n["default"] = G, t.exports = n["default"];
    }, {
        "./signin-dialog": 178,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/helpers/asyncToGenerator": 18,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "babel-runtime/regenerator": 124,
        emitter: "emitter",
        "lib/config": 150,
        "lib/dom": 154,
        "lib/message": 192,
        "lib/tracking": 214,
        "lib/util": 218,
        react: "react",
        "react-dom": "react-dom"
    } ],
    174: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/object/get-prototype-of"), i = r(o), a = e("babel-runtime/helpers/classCallCheck"), l = r(a), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = e("lib/util"), h = {
            input: "_5517df-input",
            label: "_5517df-label",
            input_element: "_5517df-input_element",
            validation: "_5517df-validation"
        }, v = r(h), _ = function(e) {
            function t() {
                var e, n, r, o;
                l["default"](this, t);
                for (var a = arguments.length, s = Array(a), u = 0; a > u; u++) s[u] = arguments[u];
                return n = r = d["default"](this, (e = i["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.id = b.guid(), r.state = {
                    cancelValidation: !0,
                    dirty: !1
                }, r.onBlur = function() {
                    r.setState({
                        cancelValidation: !1
                    }), r.props.onValidate(r.value);
                }, r.onChange = function() {
                    r.setState({
                        cancelValidation: !0,
                        dirty: !0
                    }), r.props.onSet(r.value);
                }, o = n, d["default"](r, o);
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "getValidation",
                value: function() {
                    return (this.props.validation && !this.state.cancelValidation && this.state.dirty || this.props.forceValidation) && g["default"].createElement("div", {
                        className: v["default"].validation,
                        dangerouslySetInnerHTML: {
                            __html: this.props.validation
                        }
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props, t = e.name, n = e.type, r = e.label, o = e.value, i = {
                        name: t,
                        type: n,
                        value: o,
                        id: this.id,
                        ref: "input",
                        required: "required",
                        spellCheck: !1,
                        onBlur: this.onBlur,
                        onChange: this.onChange,
                        className: v["default"].input_element
                    };
                    return g["default"].createElement("div", {
                        className: v["default"].input
                    }, this.getValidation(), g["default"].createElement("input", i), g["default"].createElement("label", {
                        htmlFor: this.id,
                        className: v["default"].label
                    }, r));
                }
            }, {
                key: "value",
                get: function() {
                    return this.refs.input.value;
                }
            } ]), t;
        }(g["default"].Component);
        n["default"] = _, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "lib/util": 218,
        react: "react"
    } ],
    175: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("react"), i = r(o), a = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, l = r(a);
        n["default"] = function(e) {
            var t = e.isAutoClose, n = e.onClose, r = e.username;
            return t && n && setTimeout(n, 1500), r ? i["default"].createElement("div", {
                className: l["default"].login_success_label
            }, "Welcome back, ", i["default"].createElement("span", {
                className: l["default"].login_name
            }, r), "!") : i["default"].createElement("div", {
                className: l["default"].login_success_label
            }, "Welcome back!");
        }, t.exports = n["default"];
    }, {
        react: "react"
    } ],
    176: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("lib/config"), _ = e("./fieldset"), y = r(_), w = e("./button"), E = r(w), k = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, x = r(k), C = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var a = arguments.length, s = Array(a), c = 0; a > c; c++) s[c] = arguments[c];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.fields = [ "email", "password" ], r.focusForm = function(e) {
                    return function(t) {
                        "start" == e && r.setFocus(), "end" == e && r.refs.end.focus();
                    };
                }, r.render = function() {
                    return h["default"].createElement("form", null, h["default"].createElement("div", {
                        className: x["default"].title
                    }, "Member Login"), h["default"].createElement("input", {
                        className: x["default"].fakefield,
                        type: "text",
                        name: "fakeformstart",
                        onFocus: r.focusForm("end")
                    }), h["default"].createElement(y["default"], i["default"]({
                        ref: "fieldset",
                        fields: r.fields
                    }, r.props)), h["default"].createElement(E["default"], {
                        loading: r.props.loading,
                        text: "Log In",
                        onClick: r.props.onSubmit
                    }), h["default"].createElement("div", {
                        className: x["default"].navigation
                    }, h["default"].createElement("span", {
                        tabIndex: "0",
                        onClick: r.props.onGoRegister,
                        className: x["default"].navigation_item
                    }, "Don’t have an account?"), h["default"].createElement("span", {
                        className: x["default"].navigation_split
                    }, "·"), h["default"].createElement("a", {
                        target: "__blank",
                        href: v.URLS.resetPassword,
                        ref: "end",
                        className: x["default"].navigation_item
                    }, "Forgot password?")), h["default"].createElement("input", {
                        className: x["default"].fakefield,
                        type: "text",
                        name: "fakeformend",
                        onFocus: r.focusForm("start")
                    }));
                }, o = n, m["default"](r, o);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function(e) {
                    this.refs.fieldset.setFocus(e);
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = C, t.exports = n["default"];
    }, {
        "./button": 170,
        "./fieldset": 171,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "lib/config": 150,
        react: "react"
    } ],
    177: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("./button"), _ = r(v), y = e("./footer"), w = r(y), E = e("./fieldset"), k = r(E), x = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, C = r(x), j = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var a = arguments.length, s = Array(a), c = 0; a > c; c++) s[c] = arguments[c];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.fields = [ "name", "email", "password" ], r.focusForm = function(e) {
                    return function(t) {
                        "start" == e && r.setFocus(), "end" == e && r.refs.end.focus();
                    };
                }, r.render = function() {
                    return h["default"].createElement("form", null, h["default"].createElement("div", {
                        className: C["default"].title
                    }, "Create an Account"), h["default"].createElement("input", {
                        className: C["default"].fakefield,
                        type: "text",
                        name: "fakeformstart",
                        onFocus: r.focusForm("end")
                    }), h["default"].createElement(k["default"], i["default"]({
                        ref: "fieldset",
                        fields: r.fields
                    }, r.props)), h["default"].createElement(_["default"], {
                        loading: r.props.loading,
                        onClick: r.props.onSubmit,
                        text: "Sign Up"
                    }), h["default"].createElement("div", {
                        className: C["default"].navigation
                    }, h["default"].createElement("span", {
                        tabIndex: "0",
                        ref: "end",
                        onClick: r.props.onGoLogin,
                        className: C["default"].navigation_item
                    }, "Already have an account?")), h["default"].createElement(w["default"], null), h["default"].createElement("input", {
                        className: C["default"].fakefield,
                        type: "text",
                        name: "fakeformend",
                        onFocus: r.focusForm("start")
                    }));
                }, o = n, m["default"](r, o);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function(e) {
                    this.refs.fieldset.setFocus(e);
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = j, t.exports = n["default"];
    }, {
        "./button": 170,
        "./fieldset": 171,
        "./footer": 172,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        react: "react"
    } ],
    178: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("lib/util"), _ = e("lib/dom"), y = e("./login"), w = r(y), E = e("./welcome"), k = r(E), x = e("./register"), C = r(x), j = e("./login-success"), T = r(j), S = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, N = r(S), $ = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var i = arguments.length, a = Array(i), s = 0; i > s; s++) a[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(a))), 
                r.state = {
                    hide: !1
                }, r.previousView = "register", r.onClick = function(e) {
                    return "login_success" == r.props.view ? r.onClose(e) : (_.matchesSelector(e.target, "." + N["default"].content + ", ." + N["default"].content + " *") || r.onClose(e), 
                    void ("login" == e.target.dataset.view && r.props.onGoLogin("password")));
                }, r.onClose = function(e) {
                    e && e.stopPropagation(), r.setState({
                        hide: !0
                    }), setTimeout(function() {
                        return r.props.onClose(e);
                    }, 400);
                }, r.viewClass = function(e) {
                    return N["default"]["view_" + e];
                }, o = n, m["default"](r, o);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function(e, t) {
                    ("register" == e || "login" == e) && this.refs[e].setFocus(t);
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.previousView, n = this.props.view, r = _.cs((e = {}, i["default"](e, this.viewClass(n), !0), 
                    i["default"](e, "keep_" + this.viewClass(t), !0), i["default"](e, N["default"].signin_dialog, !0), 
                    i["default"](e, N["default"].loading, this.props.loading), i["default"](e, N["default"].hide, this.state.hide), 
                    i["default"](e, N["default"].windows, v.isWindows()), e)), o = "login_success" == n && this.previousView != n;
                    return this.previousView = n, h["default"].createElement("div", {
                        ref: "dialogEl",
                        onClick: this.onClick,
                        className: r
                    }, h["default"].createElement("div", {
                        className: N["default"].content
                    }, h["default"].createElement("div", {
                        className: N["default"].validation
                    }, this.props.validation.error), h["default"].createElement("div", {
                        className: N["default"].btn_close,
                        onClick: this.onClose
                    }), h["default"].createElement("div", {
                        className: N["default"].view_container
                    }, h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].register
                    }, h["default"].createElement(C["default"], {
                        ref: "register",
                        formData: this.props.formData,
                        onSet: this.props.onSet,
                        validation: this.props.validation,
                        onValidate: this.props.onValidate,
                        forceValidation: this.props.forceValidation,
                        loading: this.props.loading,
                        onSubmit: this.props.onSubmit,
                        onGoLogin: this.props.onGoLogin
                    })), h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].login
                    }, h["default"].createElement(w["default"], {
                        ref: "login",
                        formData: this.props.formData,
                        onSet: this.props.onSet,
                        validation: this.props.validation,
                        onValidate: this.props.onValidate,
                        forceValidation: this.props.forceValidation,
                        loading: this.props.loading,
                        onSubmit: this.props.onSubmit,
                        onGoRegister: this.props.onGoRegister
                    })), h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].welcome
                    }, h["default"].createElement(k["default"], {
                        isShow: "welcome" == n,
                        onGoPremium: this.props.onGoPremium,
                        onClose: this.props.onClose
                    })), h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].login_success
                    }, h["default"].createElement(T["default"], {
                        username: this.props.username,
                        isAutoClose: o,
                        onClose: this.onClose
                    })))));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = $, t.exports = n["default"];
    }, {
        "./login": 176,
        "./login-success": 175,
        "./register": 177,
        "./welcome": 179,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/createClass": 20,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "lib/dom": 154,
        "lib/util": 218,
        react: "react"
    } ],
    179: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), a = e("babel-runtime/core-js/object/get-prototype-of"), l = r(a), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = {
            welcome: "_4e742d-welcome",
            windows: "_4e742d-windows",
            image: "_4e742d-image",
            content: "_4e742d-content",
            show: "_4e742d-show",
            title: "_4e742d-title",
            text: "_4e742d-text",
            close: "_4e742d-close",
            learn_more: "_4e742d-learn_more",
            go_premium: "_4e742d-go_premium"
        }, h = r(b), v = e("lib/dom"), _ = e("lib/util"), y = e("./button"), w = r(y), E = function(e) {
            function t() {
                var e, n, r, o;
                u["default"](this, t);
                for (var a = arguments.length, s = Array(a), c = 0; a > c; c++) s[c] = arguments[c];
                return n = r = d["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.render = function() {
                    var e, t = v.cs((e = {}, i["default"](e, h["default"].welcome, !0), i["default"](e, h["default"].show, r.props.isShow), 
                    i["default"](e, h["default"].windows, _.isWindows()), e));
                    return g["default"].createElement("div", {
                        className: t
                    }, g["default"].createElement("div", {
                        className: h["default"].image
                    }), g["default"].createElement("div", {
                        className: h["default"].content
                    }, g["default"].createElement("div", {
                        className: h["default"].title
                    }, "Welcome to Grammarly"), g["default"].createElement("div", {
                        className: h["default"].text
                    }, "Wave good-bye to the most frequent and pesky ", g["default"].createElement("br", null), "writing mistakes."), g["default"].createElement("div", {
                        className: h["default"].go_premium
                    }, g["default"].createElement("span", {
                        className: h["default"].checks
                    }, "Go Premium and get 150+ additional", g["default"].createElement("br", null), "advanced checks."), " ", g["default"].createElement("a", {
                        onClick: r.props.onGoPremium,
                        className: h["default"].learn_more
                    }, "Learn more")), g["default"].createElement("div", {
                        className: h["default"].close
                    }, g["default"].createElement(w["default"], {
                        onClick: r.props.onClose,
                        text: "Continue to Your Text"
                    }))));
                }, o = n, d["default"](r, o);
            }
            return m["default"](t, e), t;
        }(g["default"].Component);
        n["default"] = E, t.exports = n["default"];
    }, {
        "./button": 170,
        "babel-runtime/core-js/object/get-prototype-of": 10,
        "babel-runtime/helpers/classCallCheck": 19,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/inherits": 23,
        "babel-runtime/helpers/possibleConstructorReturn": 25,
        "lib/dom": 154,
        "lib/util": 218,
        react: "react"
    } ],
    180: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            function e() {
                m.fastHide();
            }
            function t(e) {
                var t = e.target;
                return c.inEl(t, l.posEl);
            }
            function n() {
                l.posEl && (d.parentNode && d.parentNode.removeChild(d), c.unlisten(l.doc, "scroll", e), 
                c.unlisten(l.moveListenerDoc, "scroll", e));
            }
            function r() {
                p && (p = !1, d.style.opacity = 0, d.style.top = "-9999px", m && m.setVisible(!1), 
                c.removeClass(d, l.cls), console.log("hide tooltip"));
            }
            function o() {
                l.cls += " gr-no-transition", i(), setTimeout(function() {
                    l.cls = l.cls.replace(" gr-no-transition", ""), c.removeClass(d, "gr-no-transition");
                }, 100);
            }
            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? l : arguments[0], t = e.posEl, n = void 0 === t ? l.posEl : t, r = e.html, o = void 0 === r ? l.html : r, i = e.text, s = void 0 === i ? l.text : i, b = e.cls, h = void 0 === b ? l.cls : b, v = e.doc, _ = void 0 === v ? l.doc : v, y = e.outerIframe, w = void 0 === y ? l.outerIframe : y;
                if (a["default"].extend(l, {
                    posEl: n,
                    html: o,
                    text: s,
                    cls: h,
                    doc: _,
                    outerIframe: w
                }), g) {
                    p = !0, m && m.setVisible(!0), s && d.setAttribute("data-content", s), o && (f.innerHTML = o), 
                    d.className = "gr__tooltip", h && c.addClass(d, h), c.removeClass(d, "gr__flipped");
                    var E = u.getAbsRect(n, w), k = u.posToRect(d, E), x = k.rect, C = x.top, j = x.left;
                    c.css(d, {
                        top: C,
                        left: j
                    }), k && k.rect && !k.rect.flip && c.addClass(d, "gr__flipped");
                    var T = d.clientWidth, S = d.querySelector(".gr__triangle"), N = E.width / 2;
                    N > T && (N = 0), k.delta.right <= 0 && (N -= k.delta.right), N -= parseInt(getComputedStyle(d, null).getPropertyValue("margin-left")), 
                    S.style.marginLeft = parseInt(N) + "px", d.style.opacity = 1;
                }
            }
            var l = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], d = document.querySelector(".gr__tooltip"), f = void 0, m = void 0, p = void 0, g = void 0 != l.enabled ? l.enabled : !0;
            if (d || (d = c.createEl('<span class="gr__tooltip"><span class="gr__tooltip-content"></span><i class="gr__tooltip-logo"></i><span class="gr__triangle"></span></span>'), 
            document.documentElement.appendChild(d)), f = d.querySelector(".gr__tooltip-content"), 
            l.posEl) {
                var b = l.outerIframe && l.outerIframe.contentDocument || l.doc;
                m = new s["default"]({
                    doc: b,
                    doc2: l.doc,
                    hint: d,
                    hideDelay: 500,
                    delay: 0,
                    onshow: i,
                    onhide: r,
                    inTarget: t
                }), c.listen(l.doc, "scroll", e), c.listen(b, "scroll", e), m.bind();
            }
            var h = {
                show: i,
                fastShow: o,
                hide: r,
                remove: n,
                el: d,
                enable: function() {
                    g = !0;
                },
                disable: function() {
                    g = !1;
                },
                isEnabled: function() {
                    return g;
                }
            };
            return h;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("lodash"), a = r(i), l = e("./hint"), s = r(l), u = e("../position"), c = e("../dom");
        n["default"] = o, t.exports = n["default"];
    }, {
        "../dom": 154,
        "../position": 195,
        "./hint": 163,
        lodash: "lodash"
    } ],
    181: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = document.createElement("script");
            t.innerHTML = e, document.head.appendChild(t), t.parentNode.removeChild(t);
        }
        function i() {
            c.initContentScript(), o("window.GR_EXTENSION_ID='" + u.getUuid() + "'"), o("\n    window.GR_EXTENSION_SEND = function(key, data) {\n      if (!key) throw new TypeError('cant be called without message')\n      var e = document.createEvent('CustomEvent')\n      e.initCustomEvent('external:' + key, true, true, data)\n      document.dispatchEvent(e)\n    }\n  "), 
            u.externalEvents.map(function(e) {
                return "external:" + e;
            }).forEach(function(e) {
                var t;
                return (t = document, a.on).call(t, e, function(t) {
                    var n = t.detail;
                    console.log("external event", e, n), s["default"].emitBackground(e, n);
                });
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = i;
        var a = e("./dom"), l = e("./message"), s = r(l), u = e("./config"), c = e("./tracking");
        t.exports = n["default"];
    }, {
        "./config": 150,
        "./dom": 154,
        "./message": 192,
        "./tracking": 214
    } ],
    182: [ function(e, t, n) {
        "use strict";
        function r() {
            function e() {
                setTimeout(a, s), i.index_load = !1;
            }
            function t() {
                setTimeout(l, u), i.app_load = !1;
            }
            function n(e) {
                i[e] = !0;
            }
            function r(e, t) {
                i[e] ? o.call("statsc.ui.increment", "stability:" + t + "_success") : (o.call("statsc.ui.increment", "stability:" + t + "_timeout"), 
                o.call("felog.error", "stability." + t + "_timeout"));
            }
            function a() {
                r("index_load", "extension_loading");
            }
            function l() {
                r("app_load", "extension_app_loading");
            }
            var s = 12e4, u = 12e4, c = {
                startPageLoadTimer: e,
                startAppLoadTimer: t,
                success: n,
                setPageLoadTimeout: function(e) {
                    return s = e;
                },
                setAppLoadTimeout: function(e) {
                    return u = e;
                }
            };
            return c;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./tracking"), i = {};
        n["default"] = r(), t.exports = n["default"];
    }, {
        "./tracking": 214
    } ],
    183: [ function(e, t, n) {
        (function(e) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n["default"] = "undefined" != typeof window ? window.forge : "undefined" != typeof e ? e.forge : null, 
            t.exports = n["default"];
        }).call(this, "undefined" != typeof window ? window : {});
    }, {} ],
    184: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            t.setDomSelection = function(t) {
                var n = l["default"].getNodeByTextPos(e, t.begin), r = l["default"].getNodeByTextPos(e, t.end);
                s.setDomRange(e.ownerDocument, {
                    anchorNode: n.node,
                    anchorOffset: t.begin - n.pos,
                    focusNode: r.node,
                    focusOffset: t.end - r.pos
                });
            }, t.setCursor = function(e) {
                t.cursor = e;
            }, t.fireDomEvent = function(e) {
                u.isFF() && s.emitDomEvent("document-mousedown-mouseup-activeElement");
                var t = " " == e || e.trim() ? "paste" : "backspace";
                s.emitDomEvent("document-" + t + "-activeElement", {
                    value: e
                });
            }, t.doReplace = function(e, n) {
                t.safeFocus(), t.setDomSelection(e), u.asyncCall(function() {
                    return t.fireDomEvent(n);
                });
            }, t.setTextareaValue = function(n) {
                t.safeFocus(), e.ownerDocument.getSelection().selectAllChildren(e), u.asyncCall(function() {
                    t.fireDomEvent(n.trimRight()), u.asyncCall(t._setCursor, 100);
                }, u.isSafari() ? 100 : 10);
            };
        }
        function i() {
            function e(e) {
                var t = {
                    target: document.activeElement,
                    _inherits_from_prototype: !0,
                    defaultPrevented: !1,
                    preventDefault: function() {}
                };
                for (var n in e) t[n] = e[n];
                return t;
            }
            function t(e, t) {
                var r = n[e];
                r && r.forEach(function(e) {
                    e(t);
                });
            }
            var n = {};
            document.addEventListener("document-paste-activeElement-gr", function(n) {
                var r = n.detail ? n.detail.value : "";
                t("paste", e({
                    clipboardData: {
                        getData: function() {
                            return r;
                        },
                        items: [ "text/plain" ]
                    }
                }));
            }), document.addEventListener("document-mousedown-mouseup-activeElement-gr", function(n) {
                t("mousedown", e({
                    type: "mousedown"
                })), t("mouseup", e({
                    type: "mouseup"
                }));
            }), document.addEventListener("document-backspace-activeElement-gr", function(n) {
                t("keydown", e({
                    keyCode: 8,
                    which: 8,
                    charCode: 0,
                    type: "keydown"
                }));
            });
            var r = document.addEventListener.bind(document);
            document.addEventListener = function(e, t, o) {
                var i = n[e] || [];
                i.push(t), n[e] = i, r(e, t, o);
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("wrap"), l = r(a), s = e("lib/dom"), u = e("lib/util");
        n["default"] = {
            facebookRewriteFunction: i,
            extendDom: o
        }, t.exports = n["default"];
    }, {
        "lib/dom": 154,
        "lib/util": 218,
        wrap: "wrap"
    } ],
    185: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t() {
                k();
            }
            function n(e) {
                var t = $.getBoundingClientRect(), n = C(e.clientX - t.left, e.clientY - t.top, t.left, t.top);
                if (n) {
                    n.e = e, e.stopPropagation();
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent("gramMouse", !0, !0, n), A.dispatchEvent(r);
                }
            }
            function r(e) {
                try {
                    z.child.height = $.scrollHeight, I.scrollTop = $.scrollTop, clearTimeout(V), V = setTimeout(r, 100);
                } catch (e) {
                    console.log(e), r = g._f;
                }
            }
            function o(e) {
                return e ? e.split(" ").map(function(e) {
                    return isNaN(parseFloat(e)) && -1 == e.indexOf("px") ? e : Math.floor(parseFloat(e)) + "px";
                }).join(" ") : e;
            }
            function i() {
                var e = {}, t = P.getComputedStyle($, null);
                if (!t) return e;
                var n = function(e) {
                    return t.getPropertyValue(e);
                }, r = function(e) {
                    var t = {};
                    return e.map(function(e) {
                        t[e] = n(e), "z-index" == e && "auto" == t[e] && $.style.zIndex && (t[e] = $.style.zIndex);
                    }), t;
                };
                e = {
                    parent: r([ "border", "border-radius", "box-sizing", "height", "width", "margin", "padding", "z-index", "border-top-width", "border-right-width", "border-left-width", "border-bottom-width", "border-top-style", "border-right-style", "border-left-style", "border-bottom-style", "padding-top", "padding-left", "padding-bottom", "padding-right", "margin-top", "margin-left", "margin-bottom", "margin-right" ]),
                    child: r([ "font", "font-size", "font-family", "text-align", "line-height", "letter-spacing", "text-shadow" ]),
                    src: r([ "position", "margin-top", "line-height", "font-size", "font-family", "z-index" ])
                };
                var i = e.parent["z-index"];
                if (e.parent["z-index"] = i && "auto" != i ? parseInt(i) - 1 : 0, e.parent.marginTop = o(e.parent.marginTop), 
                e.src.marginTop = o(e.src.marginTop), e.parent.margin = o(e.parent.margin), e.parent.padding = o(e.parent.padding), 
                (e.parent["border-top-width"] || e.parent["border-left-width"]) && (e.parent["border-style"] = "solid"), 
                e.parent.border) {
                    var a = e.parent.border.split(" ");
                    e.parent["border-width"] = a[0], a.length > 1 && (e.parent["border-style"] = a[1]), 
                    delete e.parent.border;
                }
                if (e.parent["border-color"] = "transparent !important", "absolute" == e.src.position || "relative" == e.src.position ? e.parent = p["default"].extend(e.parent, r([ "top", "left" ])) : e.src.position = "relative", 
                U = Y.customDefaultBg && Y.customDefaultBg($) || U || n("background"), g.isFF() && !U && (U = [ "background-color", "background-image", "background-repeat", "background-attachment", "background-position" ].map(n).join(" ")), 
                e.parent.background = U, g.isFF()) {
                    var l = parseInt(n("border-right-width")) - parseInt(n("border-left-width")), s = $.offsetWidth - $.clientWidth - l;
                    e.child["padding-right"] = s - 1 + "px";
                }
                return "start" == n("text-align") && (e.child["text-align"] = "ltr" == n("direction") ? "left" : "right"), 
                e;
            }
            function a(e) {
                B = e, u();
            }
            function l(e) {
                var t = {
                    background: "transparent !important",
                    "z-index": e["z-index"] || 1,
                    position: e.position,
                    "line-height": e["line-height"],
                    "font-size": e["font-size"],
                    "-webkit-transition": "none",
                    transition: "none"
                };
                parseInt(e["margin-top"]) > 0 && v.css($.parentNode, {
                    width: "auto",
                    overflow: "hidden"
                });
                var n = P.devicePixelRatio > 1;
                if (n) {
                    var r = e["font-family"];
                    0 == r.indexOf("Consolas") && (r = r.replace("Consolas,", "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif"), 
                    z.child["font-family"] = r, t["font-family"] = r);
                }
                v.css($, t);
            }
            function u() {
                var e = i();
                F || (l(e.src), H = $.previousElementSibling && "left" == v.css($.previousElementSibling, "float"), 
                g.interval(u, 500), G || (G = !0, v.listen($, X)), F = !0), z.parent.marginTop = o(z.parent.marginTop), 
                e = p["default"].merge(e, z), e.child.height = $.scrollHeight, Y.fieldRestoreInlineStyles && Y.fieldRestoreInlineStyles($, e), 
                Y.ghostHeight && (e.child.height = Y.ghostHeight(e.child.height));
                var t = p["default"].merge(W, {
                    "data-id": O,
                    "data-gramm_id": O,
                    "data-gramm": "gramm",
                    "data-gramm_editor": !0,
                    dir: $.getAttribute("dir")
                });
                L || (L = A.createElement("grammarly-ghost"), L.setAttribute("spellcheck", !1), 
                v.insertBefore(L, M)), D.matchPrefix && (t.className = D.matchPrefix), Y.ghostHeight && (e.parent.height = Y.ghostHeight(e.parent.height));
                var n = f["default"].render(c["default"].createElement(E, {
                    style: e,
                    attrs: t,
                    val: B
                }), L);
                I = f["default"].findDOMNode(n), R = I.firstElementChild, I.contentEditable = !0, 
                K.clone = I, K.cloneVal = R, d(), m(), _(), 0 == $.offsetHeight ? T() : S(), K.emit("render");
            }
            function d() {
                if (H) {
                    if ($.getBoundingClientRect().left == I.getBoundingClientRect().left && $.getBoundingClientRect().top == I.getBoundingClientRect().top) return H = !1;
                    var e = $.getBoundingClientRect(), t = $.parentNode.getBoundingClientRect(), n = e.left - t.left, r = e.top - t.top, o = "translate(" + n + "px, " + r + "px)";
                    z.parent["-webkit-transform"] = o, z.parent.transform = o;
                }
            }
            function m() {
                function e(e, r, o) {
                    var i = o ? [ $, I ] : [ t, n ];
                    z.parent[r] = parseInt(parseInt(I.style[r]) + i[0][e] - i[1][e]) + "px";
                }
                var t = h.getAbsRect($), n = h.getAbsRect(I);
                if (n.left != t.left && e("left", "marginLeft", !1), n.top != t.top && e("top", "marginTop", !1), 
                I.clientWidth == $.clientWidth || g.isFF() ? n.width != t.width && (W.width = t.width) : n.width != t.width ? I.style.width = t.width : e("clientWidth", "width", !0), 
                g.isFF()) {
                    var r = v.css($.parentNode, [ "margin-left", "margin-top", "position" ]);
                    r && (r.marginLeft || r.marginTop) && "static" == r.position && ($.parentNode.style.position = "relative", 
                    $.parentNode.style.overflow = "");
                }
                n.height != t.height && (z.parent.height = t.height);
            }
            function _() {
                function e(e, t) {
                    return b.isFacebookSite() ? e.nextElementSibling && e.nextElementSibling.childNodes[0] != t : e.nextElementSibling != t;
                }
                var t = function(e) {
                    return A.contains && A.contains(e) || v.elementInDocument(e, A);
                };
                L && t($) && (e(L, $) || !t(L)) && v.insertBefore(L, M);
            }
            function w(e) {
                return I.querySelector(".gr_" + e);
            }
            function k() {
                var e = D.current();
                q = [];
                for (var t = I.scrollTop, n = function(e) {
                    return {
                        x1: e.left,
                        x2: e.right,
                        y1: e.top + t,
                        y2: e.bottom + t
                    };
                }, r = 0; r < e.length; r++) {
                    var o = e[r], i = w(o.id);
                    if (i) {
                        x(i);
                        var a = h.getPos(i, I), l = {
                            x1: a.x,
                            x2: a.x + i.offsetWidth,
                            y1: a.y,
                            y2: a.y + i.offsetHeight + 5
                        }, s = {
                            match: o,
                            el: i,
                            box: l
                        };
                        q.push(s);
                        var u = i.textContent.trim().split(" ").length > 1;
                        if (u) {
                            var c = i.getClientRects();
                            c.length < 2 || (s.rects = p["default"].map(c, n));
                        }
                    }
                }
            }
            function x(e) {
                e.setAttribute("style", e.parentNode.getAttribute("style")), !e.classList.contains("gr_disable_anim_appear") && e.addEventListener("animationend", function() {
                    return e.classList.add("gr_disable_anim_appear");
                }), v.css(e, {
                    display: "",
                    padding: "",
                    margin: "",
                    width: ""
                });
            }
            function C(e, t, n, r) {
                for (var o = I.scrollTop, i = 0; i < q.length; i++) {
                    var a = q[i], l = a.box;
                    if (e >= l.x1 && e <= l.x2 && t >= l.y1 - o && t <= l.y2 - o) return a;
                    if (a.rects) for (var s = 0; s < a.rects.length; s++) {
                        var u = a.rects[s], c = e + n, d = t + r;
                        if (c >= u.x1 && c <= u.x2 && d >= u.y1 - o && d <= u.y2 - o) return a;
                    }
                }
            }
            function j() {
                clearTimeout(V), g.cancelInterval(u);
            }
            function T() {
                L.style.display = "none", g.isSafari() && ($.style.background = "", $.style.backgroundColor = ""), 
                $.style.background = U, g.cancelInterval(u), setTimeout(function() {
                    return K.emit("render");
                }, 300), F = !1, L.parentNode && L.parentNode.removeChild(L);
            }
            function S() {
                F || (L.style.display = "", L.parentNode || v.insertBefore(L, M), u(), r());
            }
            function N() {
                j(), v.unlisten($, X), T();
            }
            var $ = e.el, M = b.isFacebookSite() ? $.parentNode : $, A = $.ownerDocument, P = A.defaultView, D = e.editor || {
                current: function() {
                    return [];
                }
            }, O = e.id, L = void 0, I = void 0, R = void 0, F = !1, G = void 0, B = "", H = !1, z = {
                parent: {},
                child: {}
            }, W = {}, U = void 0, V = void 0, q = [], Y = y["default"](A).getFixesForCurrentDomain(), K = s["default"]({
                render: u,
                getStyle: i,
                setText: a,
                generateAlertPositions: k,
                remove: N,
                hide: T,
                show: S
            }), X = {
                mousemove: n,
                mouseenter: t,
                keyup: r,
                scroll: r
            };
            return K;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/extends"), a = r(i), l = e("emitter"), s = r(l), u = e("react"), c = r(u), d = e("react-dom"), f = r(d), m = e("lodash"), p = r(m), g = e("../util"), b = e("lib/location"), h = e("../position"), v = e("../dom"), _ = e("../sites"), y = r(_);
        n["default"] = o;
        var w = {
            style: {
                child: {
                    display: "inline-block",
                    "line-height": "initial",
                    color: "transparent",
                    overflow: "hidden",
                    "text-align": "left",
                    "float": "initial",
                    clear: "none",
                    "box-sizing": "border-box",
                    "vertical-align": "baseline",
                    "white-space": "pre-wrap",
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    border: 0
                },
                parent: {
                    position: "absolute",
                    color: "transparent",
                    "border-color": "transparent !important",
                    overflow: "hidden",
                    "white-space": "pre-wrap"
                },
                src: {}
            },
            attrs: {},
            val: ""
        }, E = c["default"].createClass({
            displayName: "GhostComponent",
            getDefaultProps: function() {
                return w;
            },
            render: function() {
                var e = p["default"].merge(w.style, this.props.style), t = this.props.attrs, n = v.camelizeAttrs(e.parent), r = v.camelizeAttrs(e.child), o = this.props.val;
                return c["default"].createElement("div", a["default"]({
                    style: n
                }, t, {
                    gramm: !0
                }), c["default"].createElement("span", {
                    style: r,
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                }), c["default"].createElement("br", null));
            }
        });
        t.exports = n["default"];
    }, {
        "../dom": 154,
        "../position": 195,
        "../sites": 199,
        "../util": 218,
        "babel-runtime/helpers/extends": 22,
        emitter: "emitter",
        "lib/location": 191,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    186: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t() {
                return F = I(B), F.on("exit", j), F.dom.insertGhost = w, R = u["default"]({
                    id: $,
                    el: T,
                    editor: F
                }), B.gh = R, F.ghostarea = B, F._run = F.run, F.run = n, F;
            }
            function n() {
                r("on"), O = !0, M = o(), F._run(), R.show();
            }
            function r() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0], t = "on" == e ? i.listen : i.unlisten;
                t(T, "input", d), t(T, "keyup", _), t(T, "keydown", y), t(N, "click", g, null, !0), 
                R[e]("render", h), F[e]("rendered", k), F.isHtmlGhost || (F[e]("beforeReplace", m), 
                F[e]("afterReplace", E));
            }
            function o() {
                return "TEXTAREA" == T.tagName ? T.value : T.parentNode ? p["default"].getText(T) : "";
            }
            function s(e) {
                T.value = e;
            }
            function d() {
                O && (M = o());
            }
            function m() {
                D = T.scrollTop;
            }
            function g(e) {
                return l.isFacebookSite() && i.matchesSelector(e.target, G) ? v() : void 0;
            }
            function b() {
                var e = S.createEvent("TextEvent");
                e.initTextEvent ? F.latestCursor.s == F.latestCursor.e && (e.initTextEvent("textInput", !0, !0, null, String.fromCharCode(8203), 1, "en-US"), 
                setTimeout(function() {
                    F.saveCursor(), F.skipInputEvents(), T.dispatchEvent(e), setTimeout(function() {
                        s(o().replace(String.fromCharCode(8203), "")), F.restoreCursor(), F.skipInputEvents(!1);
                    }, 50);
                }, 50)) : (i.runKeyEvent({
                    el: T,
                    type: "keydown"
                }), i.runKeyEvent({
                    el: T,
                    type: "keyup"
                })), T.scrollTop = D, M = o();
            }
            function h() {
                if ((0 == M.length && o().length > 0 || L) && (M = o(), L = !1), O) {
                    M = M.replace(new RegExp(String.fromCharCode(8203), "g"), "");
                    var e = c.diffPos(M, o()), t = 1 != M.indexOf("@") && -1 == o().indexOf("@");
                    e.delta >= 2 && 0 == e.s && (A || P) && !t && v();
                }
            }
            function v() {
                O && (x(), F.clearData());
            }
            function _(e) {
                F.camouflage();
            }
            function y(e) {
                P = 13 == a.keyCode(e);
            }
            function w() {
                return R.render(), {
                    clone: R.clone,
                    cloneVal: R.cloneVal
                };
            }
            function E() {
                setTimeout(b, 50);
            }
            function k() {
                R.generateAlertPositions();
            }
            function x() {
                O && R.hide();
            }
            function C() {
                O = !0, R.show();
            }
            function j() {
                r("off"), F && (F.off("exit", j), F.remove(), F = null), B.emit("exit"), T.removeAttribute("data-gramm"), 
                T.removeAttribute("data-txt_gramm_id"), R && (R.remove(), R = null);
            }
            var T = e.el, S = T.ownerDocument, N = S.defaultView, $ = e.id, M = o(), A = !1, P = !1, D = void 0, O = !1, L = void 0, I = e.createEditor, R = void 0, F = void 0;
            T.setAttribute("data-gramm", ""), T.setAttribute("data-txt_gramm_id", $);
            var G = "div[role=navigation] li[role=listitem] *", B = f["default"]({
                el: T,
                id: $,
                hideClone: x,
                showClone: C,
                insertGhost: w,
                remove: j,
                run: n
            });
            return t();
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = o;
        var i = e("../dom"), a = e("../util"), l = e("lib/location"), s = e("./ghost"), u = r(s), c = e("textdiff"), d = e("emitter"), f = r(d), m = e("wrap"), p = r(m);
        t.exports = n["default"];
    }, {
        "../dom": 154,
        "../util": 218,
        "./ghost": 185,
        emitter: "emitter",
        "lib/location": 191,
        textdiff: "textdiff",
        wrap: "wrap"
    } ],
    187: [ function(e, t, n) {
        "use strict";
        function r() {
            return s.HTML_GHOST_SITES.includes(f);
        }
        function o() {
            return "[contenteditable]";
        }
        function i() {
            return l.isFacebookSite() ? u.facebookRewriteFunction : l.isJiraSite() ? (d.call("felog.info", "init_on_jira"), 
            c.jiraRewriteFunction) : void 0;
        }
        function a() {
            return l.isJiraSite() ? c.jiraGhostListener : void 0;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("lib/location"), s = e("../page-config/defaults"), u = e("./facebook-ghost"), c = e("./jira-ghost"), d = e("lib/tracking"), f = l.getDomain();
        n["default"] = {
            isHtmlGhostSite: r,
            getHtmlGhostSelector: o,
            getClientScriptFunction: i,
            getGhostListener: a
        }, t.exports = n["default"];
    }, {
        "../page-config/defaults": 193,
        "./facebook-ghost": 184,
        "./jira-ghost": 189,
        "lib/location": 191,
        "lib/tracking": 214
    } ],
    188: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("under"), i = e("wrap"), a = r(i), l = e("lib/util"), s = e("./facebook-ghost"), u = e("lib/location"), c = function(e) {
            var t = e.editor, n = e.el, r = n.ownerDocument, i = o.HtmlDom(e), c = o.TextareaDom(e);
            return c.safeFocus = function() {
                var e = r.body.scrollTop;
                n.focus(), r.body.scrollTop = e;
            }, c.getCursor = function() {
                return i.getCursor();
            }, c.setCursor = function(e) {
                c.cursor = e, c._setCursor();
            }, c._setCursor = function() {
                a["default"].invalidateNode(n), i.setCursor(c.cursor);
            }, c.getText = function() {
                return n.parentNode ? (a["default"].invalidateNode(n), delete n.__getText, a["default"].getText(n)) : "";
            }, c.replace = function(e, n, r) {
                t.inputListener.ignorePaste = !0, c.doReplace(e, n), e.replaced = !r, e.inDom = !r, 
                t.inputListener.ignorePaste = !1;
            }, c.doReplace = function(e, t) {
                var n = c.getText();
                n = n.substring(0, e.s) + t + n.substr(e.e), c.setTextareaValueSync(n), l.asyncCall(c._setCursor);
            }, c.setTextareaValueSync = function(e) {
                n.innerText = e, a["default"].invalidateNode(n), c.safeFocus();
            }, c.setTextareaValue = function(e) {
                c.safeFocus(), l.asyncCall(function() {
                    n.innerText = e, a["default"].invalidateNode(n);
                });
            }, u.isFacebookSite() && s.extendDom(n, c), c;
        };
        n["default"] = c, t.exports = n["default"];
    }, {
        "./facebook-ghost": 184,
        "lib/location": 191,
        "lib/util": 218,
        under: "under",
        wrap: "wrap"
    } ],
    189: [ function(e, t, n) {
        "use strict";
        function r() {
            i.listen(document, "jira-inline-support", function(e) {
                var t = e.activated, n = t ? "jira-inline-support-activated" : "jira-inline-support-deactivated";
                a.call("felog.info", n);
            });
        }
        function o() {
            function e(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = document.createEvent("CustomEvent");
                n.initCustomEvent(e + "-gr", !0, !0, t), document.dispatchEvent(n);
            }
            function t(e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? 10 : arguments[2];
                if (e) {
                    for (;e && e != document.body && !t(e) && n > 0; ) e = e.parentElement, n--;
                    return e && t(e);
                }
            }
            function n(e) {
                return t(e, function(e) {
                    return e.classList && e.classList.contains("inline-edit-fields");
                });
            }
            function r(e) {
                return t(e, function(e) {
                    return "function" == typeof e.matches && e.matches("grammarly-card, .gr-top-zero");
                });
            }
            function o(e, t) {
                var n = t && t.getAttribute("data-action");
                "editor" != n && "login" != n && e.focus();
            }
            function i(e) {
                var t = e.target, i = e.relatedTarget || e.explicitOriginalTarget;
                i && t && n(t) && r(i) && (e.stopImmediatePropagation(), o(t, i));
            }
            document.addEventListener("blur", i, !0), document.addEventListener("DOMContentLoaded", function() {
                function t() {
                    return "jira" === document.body.id && document.body.getAttribute("data-version") || document.querySelector("input[type=hidden][title=JiraVersion]");
                }
                t() ? e("jira-inline-support", {
                    activated: !0
                }) : (e("jira-inline-support", {
                    activated: !1
                }), document.removeEventListener("blur", i, !0));
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("lib/dom"), a = e("lib/tracking");
        n["default"] = {
            jiraRewriteFunction: o,
            jiraGhostListener: r
        }, t.exports = n["default"];
    }, {
        "lib/dom": 154,
        "lib/tracking": 214
    } ],
    190: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            function n() {
                r(), c = setTimeout(p, l), d = setTimeout(p, 1e3 * s[0]), f = setTimeout(p, 1e3 * s[1]), 
                m = setTimeout(p, 1e3 * s[2]);
            }
            function r() {
                u = 0, clearTimeout(c), clearTimeout(d), clearTimeout(f), clearTimeout(m);
            }
            var l = arguments.length <= 2 || void 0 === arguments[2] ? i : arguments[2], s = arguments.length <= 3 || void 0 === arguments[3] ? [ 30, 60, 120 ] : arguments[3], u = 0, c = void 0, d = void 0, f = void 0, m = void 0, p = function g() {
                return a > u ? (l == i && e(), c = setTimeout(g, l), void u++) : (o.call("felog.error", "infinity_check_reset_fail", {
                    delay: l
                }), void console.error("Infinity check reset fails, change to the offline state."));
            };
            return {
                start: n,
                finish: r
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = r;
        var o = e("./tracking"), i = 2e4, a = 3;
        t.exports = n["default"];
    }, {
        "./tracking": 214
    } ],
    191: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return new f["default"](function(e) {
                var t = setTimeout(function() {
                    return b["default"].tabs.getCurrentTabUrl(e);
                }, 2e3);
                b["default"].tabs.getCurrentTabUrl(function(n) {
                    clearTimeout(t), e(n);
                });
            });
        }
        function i(e, t) {
            return h.isFunction(e) && (t = e, e = ""), t ? !h.isBgOrPopup() && b["default"] ? void p["default"].emitBackground("get-domain", {}, t) : void (b["default"] && b["default"].tabs ? o().then(function(e) {
                return t(s(e));
            }) : t(l(e))) : l(e);
        }
        function a(e) {
            return !h.isBgOrPopup() && b["default"] ? p["default"].promiseBackground("get-domain") : b["default"] && b["default"].tabs ? f["default"].race([ o().then(s), h.delay(1e4).then(function() {
                throw new Error("Request to forge.tabs.getCurrentTabUrl rejected by timeout");
            }) ]) : l(e);
        }
        function l(e) {
            var t = e && e.ownerDocument || document, n = t.location || t.defaultView.location;
            return n ? w(n.hostname) : "";
        }
        function s(e) {
            if (h.isFF() && /^about:/.test(e)) return e;
            var t = document.createElement("a");
            return t.href = e, w(t.hostname);
        }
        function u(e) {
            var t = e && e.ownerDocument || document, n = t.location || t.defaultView.location;
            return n ? n.pathname + n.search : "";
        }
        function c() {
            for (var e = new RegExp("^(?:[a-z]+:)?//", "i"), t = "", n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                var o = n[r], i = '"' + o.getAttribute("rel") + '"', a = /(\"icon )|( icon\")|(\"icon\")|( icon )/i;
                -1 != i.search(a) && (t = o.getAttribute("href"));
            }
            return t || (t = "favicon.ico"), e.test(t) ? t : "/" != t[0] ? "//" + document.location.host + document.location.pathname + t : "//" + document.location.host + t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var d = e("babel-runtime/core-js/promise"), f = r(d), m = e("./message"), p = r(m), g = e("./forge"), b = r(g), h = e("./util"), v = e("./page-config/defaults"), _ = function() {
            return v.FACEBOOK_SITES.includes(i());
        }, y = function() {
            return /\.atlassian\.net/.test(i());
        }, w = function(e) {
            return e.replace("www.", "");
        };
        n["default"] = {
            getDomain: i,
            isFacebookSite: _,
            isJiraSite: y,
            currentUrl: o,
            promiseGetDomain: a,
            domainFromUrl: s,
            getFavicon: c,
            getUrl: u
        }, t.exports = n["default"];
    }, {
        "./forge": 183,
        "./message": 192,
        "./page-config/defaults": 193,
        "./util": 218,
        "babel-runtime/core-js/promise": 14
    } ],
    192: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            function n() {
                a(e, n);
                for (var r = arguments.length, o = Array(r), i = 0; r > i; i++) o[i] = arguments[i];
                t.apply(this, o);
            }
            i(e, n);
        }
        function i(e, t, n, r) {
            if ("__bgerror" == e) return x.on("__bgerror", t);
            var o = C[e] = C[e] || [];
            if (o.length) o.push(t); else {
                o.push(t);
                try {
                    w["default"].message.listen(e, function() {
                        var e = !0, t = !1, n = void 0;
                        try {
                            for (var r, i = g["default"](o); !(e = (r = i.next()).done); e = !0) {
                                var a = r.value;
                                a.apply(void 0, arguments);
                            }
                        } catch (l) {
                            t = !0, n = l;
                        } finally {
                            try {
                                !e && i["return"] && i["return"]();
                            } finally {
                                if (t) throw n;
                            }
                        }
                    }, n, r);
                } catch (i) {
                    j(i);
                }
            }
        }
        function a(e, t) {
            if ("__bgerror" == e) return x.off("__bgerror", t);
            var n = C[e];
            if (n) {
                var r = n.indexOf(t);
                -1 != r && n.splice(r, 1), 0 == n.length && delete C[e];
            }
        }
        function l(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments[2], r = arguments[3];
            try {
                w["default"].message.broadcast(e, t, n, r);
            } catch (o) {
                j(o);
            }
        }
        function s(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], r = arguments[3], o = arguments[4];
            try {
                if (!e) throw TypeError("emitTo can't be used without destination point");
                w["default"].message.sendTo(e, t, n, r, o);
            } catch (i) {
                j(i);
            }
        }
        function u(e, t, n, r) {
            try {
                w["default"].message.toFocussed(e, t, n, r);
            } catch (o) {
                j(o);
            }
        }
        function c(e, t, n, r) {
            try {
                w["default"].message.broadcastBackground(e, t, n, r);
            } catch (o) {
                j(o);
            }
        }
        function d(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? 1e4 : arguments[2], r = new m["default"](function(n, r) {
                try {
                    w["default"].message.broadcastBackground(e, t, n, r);
                } catch (o) {
                    r(o), j(o);
                }
            });
            return m["default"].race([ r, E.delay(n).then(function() {
                throw new Error("Request to bg page (" + e + ") rejected by timeout");
            }) ]);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var f = e("babel-runtime/core-js/promise"), m = r(f), p = e("babel-runtime/core-js/get-iterator"), g = r(p), b = e("lodash"), h = r(b), v = e("emitter"), _ = r(v), y = e("./forge"), w = r(y), E = e("./util"), k = e("./dom"), x = _["default"]({}), C = {}, j = h["default"].throttle(function(e) {
            return x.emit("__bgerror", e);
        }, 1e3);
        E.isBg() && k.listen(document, "grammarly:offline", function() {
            return j("proxy dead");
        }), n["default"] = {
            on: i,
            one: o,
            off: a,
            emitError: j,
            emitTabs: l,
            emitTo: s,
            emitFocusedTab: u,
            emitBackground: c,
            promiseBackground: d
        }, t.exports = n["default"];
    }, {
        "./dom": 154,
        "./forge": 183,
        "./util": 218,
        "babel-runtime/core-js/get-iterator": 3,
        "babel-runtime/core-js/promise": 14,
        emitter: "emitter",
        lodash: "lodash"
    } ],
    193: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e("babel-runtime/helpers/defineProperty"), a = r(i), l = e("lodash"), s = e("lib/config"), u = "1.0", c = [ "inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com" ], d = [ "facebook.com", "messenger.com", "work.fb.com", "business.facebook.com" ], f = [ "twitter.com" ].concat(d), m = {
            "drive.google.com": {
                title: "Google Drive",
                message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + s.URLS.app + '">Grammarly Editor</a>.'
            },
            "docs.google.com": {
                title: "Google Drive",
                message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + s.URLS.app + '">Grammarly Editor</a>.'
            }
        }, p = 18e5, g = p, b = [ 6e5, g, 36e5, 108e5, 432e5, 864e5, 31536e6 ], h = {}, v = (o = {
            version: {
                enabled: !1,
                servicePage: !0
            },
            extensions: {
                enabled: !1,
                servicePage: !0
            },
            settings: {
                enabled: !1,
                servicePage: !0
            },
            "com.safari.grammarlyspellcheckergrammarchecker": {
                enabled: !1,
                matchPartOfUrl: !0,
                servicePage: !0
            }
        }, a["default"](o, "app." + s.GRAMMARLY_DOMAIN, {
            enabled: !1,
            grammarlyEditor: !0
        }), a["default"](o, "linkedin.com", {
            pages: {
                "/messaging": {
                    afterReplaceEvents: [ "input" ]
                }
            }
        }), a["default"](o, "plus.google.com", {
            afterReplaceEvents: [ "keyup" ],
            minFieldHeight: 0,
            minFieldWidth: 0
        }), a["default"](o, "facebook.com", {
            minFieldHeight: 0
        }), a["default"](o, "mail.google.com", {
            fields: [ {
                name: "to"
            }, {
                name: "cc"
            }, {
                name: "bcc"
            }, {
                className: "vO"
            } ],
            subframes: !1
        }), a["default"](o, "drive.google.com", {
            track: !0
        }), a["default"](o, "docs.google.com", {
            track: !0
        }), a["default"](o, "app.asana.com", {
            fields: [ {
                className: "task-row-text-input"
            } ]
        }), a["default"](o, "tumblr.com", {
            fields: [ {
                attr: [ "aria-label", "Post title" ]
            }, {
                attr: [ "aria-label", "Type or paste a URL" ]
            } ]
        }), o), _ = {
            "hootsuite.com": {
                enabled: !1
            },
            "chrome.google.com": {
                enabled: !1
            },
            "facebook.com": {
                enabled: !0,
                pages: {
                    ".*/notes": {
                        enabled: !1
                    }
                }
            },
            "onedrive.live.com": {
                enabled: !1
            },
            "docs.com": {
                enabled: !1
            },
            "sp.docs.com": {
                enabled: !1
            },
            "docs.google.com": {
                enabled: !1
            },
            "drive.google.com": {
                enabled: !1
            },
            "texteditor.nsspot.net": {
                enabled: !1
            },
            "jsbin.com": {
                enabled: !1
            },
            "jsfiddle.net": {
                enabled: !1
            },
            "quora.com": {
                enabled: !1
            },
            "paper.dropbox.com": {
                enabled: !1
            },
            "mail.live.com": {
                enabled: !1,
                matchPartOfUrl: !0
            },
            "imperavi.com": {
                enabled: !1
            },
            "usecanvas.com": {
                enabled: !1
            }
        }, y = {
            pageConfig: l.merge({}, _, v)
        };
        n["default"] = {
            PAGE_CONFIG: y,
            OVERRIDE_PAGE_CONFIG: h,
            PAGE_CONFIG_DEFAULT_INTERVAL: g,
            PAGE_CONFIG_UPDATE_INTERVALS: b,
            PROTOCOL_VERSION: u,
            SITES_TO_RELOAD: c,
            CUSTOM_UNSUPPORTED_MESSAGES: m,
            FACEBOOK_SITES: d,
            HTML_GHOST_SITES: f
        }, t.exports = n["default"];
    }, {
        "babel-runtime/helpers/defineProperty": 21,
        "lib/config": 150,
        lodash: "lodash"
    } ],
    194: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t() {
                N["default"].on("mousemove", i, !0), ye = !0, we = new MutationObserver(u), we.observe(be.body, {
                    childList: !0,
                    subtree: !0
                }), A.interval(g, 1e3);
            }
            function n(e) {
                var t = e.contentDocument, n = void 0, r = function(e) {
                    me = e.x, pe = e.y;
                    var n = se = t.body;
                    setTimeout(function() {
                        return Ee.emit("hover", {
                            target: n,
                            x: me,
                            y: pe
                        });
                    }, 0);
                }, o = function() {
                    !n && P.listen(t, "mousemove", r), n = !0;
                };
                return o(), {
                    on: o,
                    off: function() {
                        n && P.unlisten(t, "mousemove", r), n = !1;
                    }
                };
            }
            function r() {
                return [].concat(b["default"](ge)).find(function(e) {
                    return "IFRAME" != e.tagName && (se == e || P.isParent(se, e));
                });
            }
            function o() {
                var e = r();
                setTimeout(function() {
                    return Ee.emit("hover", {
                        target: e,
                        x: me,
                        y: pe
                    });
                }, 0);
            }
            function i(e) {
                me = e.x, pe = e.y, se = e.target, o();
            }
            function l(e) {
                function t(e) {
                    return -1 != r.indexOf(e) ? n.push(e) : void 0;
                }
                var n = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1], r = y["default"].flatten(y["default"].transform(ge, function(e, t) {
                    return e.push(t);
                }, []));
                if (t(e) || !e.children) return n;
                for (var o = 0; o < e.children.length; o++) l(e.children[o], n);
                return n;
            }
            function u(e) {
                e.map(function(e) {
                    var t = e.removedNodes;
                    return [].concat(b["default"](t)).map(function(e) {
                        return l(e);
                    });
                }).reduce(function(e, t) {
                    return e.concat.apply(e, b["default"](t));
                }, []).forEach(_);
            }
            function d() {
                ye && (N["default"].off("mousemove", i, !0), A.cancelInterval(g), we.disconnect(), 
                ye = !1);
            }
            function m() {
                return [].concat(b["default"](ge)).filter(function(e) {
                    return fe(e) || !e.offsetHeight;
                });
            }
            function g() {
                m().forEach(_);
                var e = Q();
                C(e) || Ee.emit("add", e);
            }
            function h() {
                y["default"].each(ge, function(e) {
                    return e.forEach(B);
                }), ge = k(), Ee.emit("add", Q()), t();
            }
            function _(e) {
                ue.has(e) && (ue.get(e).off(), ue["delete"](e)), [ "textareas", "contenteditables", "iframes", "htmlghosts" ].forEach(function(t) {
                    var n = ge[t].indexOf(e);
                    -1 != n && ge[t].splice(n, 1);
                }), Ee.emit("remove", e);
            }
            function w() {
                return p["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.delegateYield(this.textareas, "t0", 1);

                      case 1:
                        return e.delegateYield(this.contenteditables, "t1", 2);

                      case 2:
                        return e.delegateYield(this.iframes, "t2", 3);

                      case 3:
                        return e.delegateYield(this.htmlghosts, "t3", 4);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, te[0], this);
            }
            function k() {
                return c["default"]({
                    textareas: [],
                    contenteditables: [],
                    iframes: [],
                    htmlghosts: []
                }, f["default"], w);
            }
            function x(e) {
                be = e, ve = be.location.hostname, _e = new RegExp("://" + ve), he = be.defaultView, 
                oe && (ae = y["default"].isNumber(oe.minFieldHeight) ? oe.minFieldHeight : ae, le = y["default"].isNumber(oe.minFieldWidth) ? oe.minFieldHeight : le);
            }
            function C(e) {
                return 0 == e.textareas.length && 0 == e.contenteditables.length && 0 == e.iframes.length && 0 == e.htmlghosts.length;
            }
            function S(e) {
                if (!oe) return !0;
                if (oe.enabled === !1) return !1;
                if (!oe.fields && oe.enabled === !0) return !0;
                var t = function(t) {
                    var n = s["default"](t, 2), r = n[0], o = n[1];
                    return e.getAttribute(r) == o;
                };
                return !oe.fields.some(function(n) {
                    var r = n.name, o = n.id, i = n.className, a = n.attr;
                    return r && r == e.name || o && o == e.id || i && P.hasClass(e, i) || a && Array.isArray(a) && t(a);
                });
            }
            function $() {
                return !be.location || 0 == be.location.href.indexOf("about:") || 0 == be.location.href.indexOf("chrome:") || !be.body || 0 == be.body.childNodes.length;
            }
            function I() {
                return "interactive" != be.readyState && "complete" != be.readyState;
            }
            function R() {
                var e = be.documentElement.getBoundingClientRect();
                return e.height < ie && he.innerHeight < ie || e.width < ie;
            }
            function F(e) {
                return e.clientHeight < ae || e.clientWidth < le;
            }
            function G(e) {
                var t = D.some(function(t) {
                    return Array.isArray(t) ? e.hasAttribute(t[0]) && e.getAttribute(t[0]).includes(t[1]) : e.hasAttribute(t);
                });
                return t || "rtl" == e.getAttribute("dir");
            }
            function B(e) {
                if ([].concat(b["default"](D), [ "spellcheck" ]).forEach(function(t) {
                    return e.removeAttribute(t);
                }), T.isHtmlGhostSite()) {
                    var t = e.parentElement && e.parentElement.parentElement;
                    t && t.removeAttribute("spellcheck");
                }
            }
            function H(e) {
                return P.getParentBySel(e, O);
            }
            function z(e) {
                return !G(e) && !F(e) && (P.isVisible(e) && S(e) || P.hasClass(e, "grammDemo"));
            }
            function W(e) {
                return [].concat(b["default"](be.querySelectorAll(e))).filter(z);
            }
            function U(e) {
                return W("textarea", e);
            }
            function V(e) {
                return ce ? [] : W('[contenteditable]:not([contenteditable="false"]):not([data-reactid])', e).filter(function(e) {
                    return !H(e);
                });
            }
            function q(e) {
                return ce ? W(T.getHtmlGhostSelector(), e) : [];
            }
            function Y(e) {
                if (L.href = e.src, (0 != e.src.indexOf("http") || _e.test(e.src)) && "about:blank" != e.src && (!e.src || -1 != e.src.indexOf("javascript:") || L.protocol == document.location.protocol && L.hostname == document.location.hostname && L.port == document.location.port) && !P.hasClass(e, M["default"].baseCls)) {
                    var t = null;
                    try {
                        t = e.contentDocument;
                    } catch (n) {
                        return;
                    }
                    if ((!t || t.body) && t && !G(e) && !G(t.body) && S(e)) {
                        var r = t.querySelector("html") || {
                            hasAttribute: A._f
                        };
                        if (("on" == t.designMode || t.body.hasAttribute("contenteditable") || "false" == t.body.getAttribute("contenteditable") || r.hasAttribute("contenteditable") || "false" == r.getAttribute("contenteditable")) && !F(e)) return A.isFF() && "on" == t.designMode && (t.designMode = "off", 
                        t.body.setAttribute("contenteditable", !0)), !0;
                    }
                }
            }
            function K(e) {
                return [].concat(b["default"](be.querySelectorAll("iframe"))).filter(Y);
            }
            function X(e) {
                ge = y["default"].mapValues(ge, function(t, n) {
                    return [].concat(t, e[n]);
                }), ge[f["default"]] = w;
            }
            function J(e, t) {
                return y["default"].difference(e[t], ge[t]);
            }
            function Z(e, t) {
                var n = J(e, t);
                return de.shouldRemove ? n.filter(function(e) {
                    return !de.shouldRemove(e);
                }) : n;
            }
            function Q() {
                var e = ee(), t = c["default"]({
                    textareas: Z(e, "textareas"),
                    contenteditables: Z(e, "contenteditables"),
                    iframes: Z(e, "iframes"),
                    htmlghosts: Z(e, "htmlghosts")
                }, f["default"], w);
                return X(t), t.iframes.forEach(function(e) {
                    return ue.set(e, n(e));
                }), t;
            }
            function ee() {
                var e = k();
                return $() || I() || R() ? e : a["default"]({}, e, {
                    textareas: U(),
                    contenteditables: V(),
                    iframes: K(),
                    htmlghosts: q()
                });
            }
            var te = [ w ].map(p["default"].mark), ne = e.doc, re = void 0 === ne ? document : ne, oe = e.page, ie = 150, ae = 35, le = 300, se = void 0, ue = new v["default"](), ce = T.isHtmlGhostSite(), de = j["default"](re).getFixesForCurrentDomain(), fe = de.shouldRemove || A._f, me = void 0, pe = void 0, ge = k(), be = void 0, he = void 0, ve = void 0, _e = void 0, ye = void 0, we = void 0;
            x(re);
            var Ee = E["default"]({
                get: Q,
                reset: h,
                remove: _,
                stop: d
            }), ke = Ee.on;
            return Ee.on = function(e, n) {
                ye || t(), ke(e, n), "hover" == e && o();
            }, Ee;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/extends"), a = r(i), l = e("babel-runtime/helpers/slicedToArray"), s = r(l), u = e("babel-runtime/helpers/defineProperty"), c = r(u), d = e("babel-runtime/core-js/symbol/iterator"), f = r(d), m = e("babel-runtime/regenerator"), p = r(m), g = e("babel-runtime/helpers/toConsumableArray"), b = r(g), h = e("babel-runtime/core-js/map"), v = r(h), _ = e("lodash"), y = r(_), w = e("emitter"), E = r(w), k = e("./config"), x = r(k), C = e("./sites"), j = r(C), T = e("./ghost/html-ghost-locator"), S = e("./window-events"), N = r(S), $ = e("./elements/iframe"), M = r($), A = e("./util"), P = e("./dom"), D = x["default"].restrictedAttrs, O = x["default"].restrictedParentAttrs, L = document.createElement("a");
        n["default"] = o, t.exports = n["default"];
    }, {
        "./config": 150,
        "./dom": 154,
        "./elements/iframe": 164,
        "./ghost/html-ghost-locator": 187,
        "./sites": 199,
        "./util": 218,
        "./window-events": 219,
        "babel-runtime/core-js/map": 6,
        "babel-runtime/core-js/symbol/iterator": 16,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/slicedToArray": 26,
        "babel-runtime/helpers/toConsumableArray": 27,
        "babel-runtime/regenerator": 124,
        emitter: "emitter",
        lodash: "lodash"
    } ],
    195: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t, n) {
            var r = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            };
            if (!e) return r;
            var i = e.ownerDocument, a = i.documentElement, l = e.getClientRects(), s = a.scrollTop || i.body.scrollTop, u = a.scrollLeft || i.body.scrollLeft, c = t && t.contentDocument;
            if (0 == l.length) return r;
            var f = m["default"](l).map(function(e) {
                return {
                    top: e.top + s,
                    left: e.left + u,
                    height: e.height,
                    width: e.width
                };
            });
            return c && c.documentElement && c.documentElement == a && !function() {
                var e = o(t);
                f = f.map(function(t) {
                    return d["default"]({}, t, {
                        top: t.top + e.top - s,
                        left: t.left + e.left - u
                    });
                });
            }(), n && f || f[0];
        }
        function i(e, t, n) {
            var r = e.ownerDocument, o = s(r), i = e.clientWidth, a = e.clientHeight, l = {}, u = {
                top: t.top - r.body.scrollTop - a,
                left: t.left - i,
                bottom: r.body.scrollTop + o.height - t.top - t.height - a,
                right: r.body.scrollLeft + o.width - t.left - i
            };
            return u.bottom < 0 && u.bottom < u.top || n ? (l.top = t.top - a + 3, l.flip = !0) : (l.top = t.top + t.height - 3, 
            l.flip = !1), u.right < 0 ? l.left = o.width - i : l.left = t.left, t.forceCoords && (l.left = t.pageX, 
            l.top = l.flip ? t.pageY - a : t.pageY + 5), {
                rect: l,
                delta: u,
                sourceRect: t
            };
        }
        function a(e, t, n) {
            function r(e, t) {
                s[e] += i[t] / 2 - a[t] / 2, o[e] > s[e] && (s[e] = o[e]), o[e] + o[t] < s[e] + a[t] && (s[e] = o[e] + o[t] - a[t]);
            }
            var o = l(), i = t.getBoundingClientRect(), a = e.getBoundingClientRect(), s = {
                flipY: !1,
                flipX: !1
            }, u = {
                top: i.top - o.top,
                left: i.left - o.left,
                bottom: -i.bottom + o.bottom,
                right: -i.right + o.right
            };
            return n = n || "top:center", n = n.split(":"), s.top = i.top, "center" == n[0] ? r("top", "height") : "top" == n[0] ? u.top > a.height ? s.top -= a.height : (s.top += i.height, 
            s.flipY = !0) : "bottom" == n[0] && (u.bottom > a.height ? s.top += i.height : (s.top -= a.height, 
            s.flipY = !0)), s.left = i.left, "center" == n[1] ? r("left", "width") : "left" == n[1] ? (s.left += i.width - a.width, 
            u.left + i.width < a.width && (s.left = o.left)) : "right" == n[1] && u.right + i.width < a.width && (s.left += i.width + u.right - a.width), 
            s;
        }
        function l() {
            var e = document.createElement("div");
            e.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;", document.documentElement.insertBefore(e, document.documentElement.firstChild);
            var t = e.getBoundingClientRect();
            return document.documentElement.removeChild(e), t;
        }
        function s(e) {
            var t = e.documentElement.clientTop || e.body.clientTop || 0, n = e.documentElement.clientLeft || e.body.clientLeft || 0, r = e.documentElement.scrollLeft || e.body.scrollLeft, o = e.documentElement.scrollTop || e.body.scrollTop, i = e.defaultView.innerHeight, a = e.defaultView.innerWidth;
            return {
                width: a,
                height: i,
                scrollTop: o - t,
                scrollLeft: r - n,
                top: t,
                left: n
            };
        }
        function u(e, t) {
            if (!e || e == t) return {
                x: 0,
                y: 0
            };
            var n = {
                x: e.offsetLeft,
                y: e.offsetTop
            }, r = u(e.offsetParent, t);
            for (var o in r) n[o] += r[o];
            return n;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = e("babel-runtime/helpers/extends"), d = r(c), f = e("babel-runtime/core-js/array/from"), m = r(f);
        n["default"] = {
            posToRect: i,
            getAbsRect: o,
            getPos: u,
            posToEl: a
        }, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/array/from": 2,
        "babel-runtime/helpers/extends": 22
    } ],
    196: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            if (e.data && (e.query || "post" != e.method) && (e.url += "?" + l(e.data)), e.data && "post" == e.method && !e.query && !e.body) {
                try {
                    e.body = m["default"](e.data);
                } catch (t) {
                    e.body = {}, console.warn(t);
                }
                e.headers = e.headers || {}, e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json", 
                delete e.data;
            }
            return e.credentials = "include", e;
        }
        function i(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return t.url = e, o(t), h.isBg() || b.isTest ? a(t) : _["default"].promiseBackground("fetch", t).then(function(e) {
                if (p.isObject(e) && e.error) throw new Error(e.error);
                return e;
            });
        }
        function a(e) {
            function t(e) {
                return e.ok ? e[r.isText ? "text" : "json"]() : e.text().then(function(t) {
                    throw {
                        name: "RequestError",
                        body: t,
                        statusCode: e.status,
                        message: e.statusText
                    };
                });
            }
            var n = e.url, r = d["default"](e, [ "url" ]);
            return h.isFF() ? new u["default"](function(e, t) {
                g.request.ajax({
                    url: n,
                    data: r.data || r.body,
                    headers: r.headers,
                    type: (r.method || "GET").toUpperCase(),
                    dataType: "json",
                    timeout: r.timeout || y,
                    success: function(n) {
                        var r = "string" == typeof n ? JSON.parse(n) : n;
                        return r.error ? t({
                            message: r.error
                        }) : void e(r);
                    },
                    error: function(e) {
                        return t({
                            name: "RequestError",
                            message: e.message,
                            statusCode: e.statusCode,
                            url: "Request timed out" === e.message ? n : ""
                        });
                    }
                });
            }) : u["default"].race([ window.fetch(n, r).then(t).then(function(e) {
                if (e.error) throw new Error(e.error);
                return e;
            }), h.delay(r.timeout || y).then(function() {
                throw new Error("Fetch request to " + n + " rejected by timeout");
            }) ]);
        }
        function l(e) {
            var t = "", n = function(n) {
                Array.isArray(e[n]) ? e[n].length && (t += "" + (t.length ? "&" : "") + e[n].map(function(e) {
                    return n + "=" + e;
                }).join("&")) : t += "" + (t.length ? "&" : "") + n + "=" + encodeURIComponent(e[n]);
            };
            for (var r in e) n(r);
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/core-js/promise"), u = r(s), c = e("babel-runtime/helpers/objectWithoutProperties"), d = r(c), f = e("babel-runtime/core-js/json/stringify"), m = r(f), p = e("lodash"), g = e("./forge"), b = e("./config"), h = e("./util"), v = e("./message"), _ = r(v), y = 1e4;
        h.isBg() && (e("whatwg-fetch"), _["default"].on("fetch", function(e, t) {
            return a(e).then(t, function(e) {
                return t({
                    error: e.message
                });
            });
        })), n["default"] = {
            fetch: i,
            transformOptions: o,
            paramStr: l
        }, t.exports = n["default"];
    }, {
        "./config": 150,
        "./forge": 183,
        "./message": 192,
        "./util": 218,
        "babel-runtime/core-js/json/stringify": 5,
        "babel-runtime/core-js/promise": 14,
        "babel-runtime/helpers/objectWithoutProperties": 24,
        lodash: "lodash",
        "whatwg-fetch": "whatwg-fetch"
    } ],
    197: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? document : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2];
            b = n;
            var r = d["default"].getAbsRect(e);
            y = t, g = {
                top: r.top + r.height + 1,
                left: r.left,
                width: 0,
                height: 2
            }, v = Math.ceil(r.width / 8), h = r.width - v, setTimeout(function() {
                g.width = h, i();
            }, 10), setTimeout(function() {
                l();
            }, 500), i();
        }
        function i() {
            _ = f.renderReactWithParent(p["default"].createElement(E, {
                style: g,
                className: b
            }), y.documentElement, w);
        }
        function a() {
            _ && (_.remove(), _ = null);
        }
        function l() {
            g.WebkitTransitionDuration = "0.2s", g.MozTransitionDuration = "0.2s", g.transitionDuration = "0.2s", 
            g.width = h + v, _ && i();
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/core-js/symbol"), u = r(s), c = e("./position"), d = r(c), f = e("./dom"), m = e("react"), p = r(m), g = void 0, b = void 0, h = 0, v = 0, _ = void 0, y = void 0, w = u["default"]("SelectionAnimator"), E = p["default"].createClass({
            displayName: "AnimationLine",
            render: function() {
                return p["default"].createElement("div", {
                    style: this.props.style,
                    className: "g-selection-anim " + this.props.className
                });
            }
        }), k = {
            animate: o,
            remove: a,
            complete: l
        };
        n["default"] = k, t.exports = n["default"];
    }, {
        "./dom": 154,
        "./position": 195,
        "babel-runtime/core-js/symbol": 15,
        react: "react"
    } ],
    198: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("emitter"), i = r(o), a = e("./config"), l = e("./dom"), s = function(e) {
            function t(e) {
                return e.getRangeAt(0).getBoundingClientRect();
            }
            function n(e, t, n) {
                for (var r = e.split(/[.;!?]/g), o = 0, i = 0, a = 0; a < r.length; a++) {
                    if (i = o + r[a].length, t >= o && i >= n) {
                        var l = {
                            t: r[a],
                            s: t - o,
                            e: n - o
                        };
                        return l;
                    }
                    o = i + 1;
                }
            }
            function r(t) {
                var n = t.anchorNode;
                if (!n) return !1;
                var r = a.restrictedAttrs.map(function(e) {
                    return Array.isArray(e) ? "[" + e[0] + '="' + e[1] + '"]' : "[" + e + "]";
                }).join(","), o = t.toString().trim(), i = "TEXTAREA" != n.tagName && "INPUT" != n.tagName, s = !(e.activeElement && "INPUT" == e.activeElement.tagName || e.activeElement && "TEXTAREA" == e.activeElement.tagName), u = !l.isContentEditable(n), c = !l.getParentBySel(n, r) && !l.matchesSelector(n, r), d = !l.getParentBySel(n, "[contenteditable=true],[contenteditable=plaintext-only]") && !l.parentIsContentEditable(n);
                return !!(o && i && s && u && c && d);
            }
            function o(o) {
                var i = o.detail;
                if (2 != i) return void (u && (s.emit("unselect"), u = !1));
                u = !0;
                var a = e.getSelection(), l = r(a);
                if (l) {
                    var c = a.anchorNode.textContent, d = a.toString();
                    if (!d.match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’=']/)) {
                        var f = {
                            t: d,
                            s: 0,
                            e: d.length
                        }, m = a.getRangeAt(0);
                        if (m.ownerDocument = e, a.anchorNode == a.focusNode) {
                            var p = a.anchorOffset, g = p + d.length;
                            f = n(c, p, g);
                        }
                        var b = {
                            data: {
                                v: f.t,
                                s: f.s,
                                e: f.e,
                                w: d
                            },
                            pos: t(a),
                            el: m
                        };
                        s.emit("select", b);
                    }
                }
            }
            l.listen(e, "click", o);
            var s = i["default"]({
                release: function() {
                    l.unlisten(e, "click", o);
                },
                isValidSelection: r
            }), u = !1;
            return s;
        };
        n["default"] = s, t.exports = n["default"];
    }, {
        "./config": 150,
        "./dom": 154,
        emitter: "emitter"
    } ],
    199: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            return e.find(function(e) {
                return i(t, e.split(":"));
            });
        }
        function i(e, t) {
            var n = f["default"](t, 2), r = n[0], o = n[1], i = e.getAttribute(r);
            return i && (i == o || i.includes(o) && r + ":" + o);
        }
        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0], t = m.getDomain({
                ownerDocument: e
            }), n = y[t];
            return {
                addDomainClass: function() {
                    e.documentElement.classList.add("gr__" + t.replace(/\./g, "_"));
                },
                customizeElements: function() {
                    n && b["default"](n).each(function(t, n) {
                        return [].concat(c["default"](e.querySelectorAll(n))).forEach(function(e) {
                            b["default"].extend(e.style, t);
                        });
                    });
                },
                getFixesForCurrentDomain: function() {
                    var e = E[t];
                    if (e) return e;
                    var n = s["default"](E).filter(function(e) {
                        return e.includes("*");
                    }).find(function(e) {
                        return t.indexOf(e.replace("*", "")) > -1;
                    });
                    return n && E[n] || {};
                }
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/core-js/object/keys"), s = r(l), u = e("babel-runtime/helpers/toConsumableArray"), c = r(u), d = e("babel-runtime/helpers/slicedToArray"), f = r(d), m = e("./location"), p = e("./util"), g = e("lodash"), b = r(g), h = e("./client-script"), v = r(h), _ = e("./dom"), y = {
            "translate.google.com": {
                "#gt-clear": {
                    zIndex: 2
                }
            },
            "linkedin.com": {
                ".mentions-highlighter": {
                    zIndex: 0
                }
            },
            "us.nakedwines.com": {
                ".postbutton": {
                    display: "inline-block"
                }
            }
        }, w = function() {
            var e = void 0;
            return function() {
                return "undefined" == typeof e && (e = !!document.querySelector("c-wiz")), e;
            };
        }(), E = {
            "twitter.com": {
                btnMargin: function(e, t) {
                    t.clientHeight > 40 || (e["margin-left"] = e["margin-left"] - 30);
                },
                btnDiff: function(e) {
                    if ("tweet-box-dm-conversation" == e.id) return [ -25, 1 ];
                    if (!(e.clientHeight > 40 || "tweet-box-home-timeline" != e.id)) return [ -30, 0 ];
                },
                fieldRestoreInlineStyles: function(e, t) {
                    "tweet-box-dm-conversation" == e.id && e.style["z-index"] != t.src["z-index"] && (e.style["z-index"] = t.src["z-index"], 
                    e.style.position = t.src.position, e.style.transition = "none", e.style.background = "transparent");
                }
            },
            "linkedin.com": {
                fieldStateForDomain: function(e) {
                    if ("IFRAME" == e.tagName && e.id) return e.id.replace(/\d*\d/, "");
                    var t = [ "class:trans" ];
                    return o(t, e);
                },
                menuPosLeft: function(e, t, n) {
                    return !p.isSafari() || n.enabled ? t : t - 7;
                }
            },
            "*.slack.com": {
                forceMinimize: function(e) {
                    return e.clientHeight > 40 ? !0 : !1;
                },
                btnCustomContainer: function(e) {
                    return e;
                },
                btnCustomStyles: function(e, t) {
                    var n = t.clientHeight < 40 ? 25 : 0;
                    return e ? {
                        right: 10 + n,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -10,
                        bottom: -2,
                        left: "auto",
                        top: "auto"
                    };
                },
                customDefaultBg: function(e) {
                    return e.parentNode.parentNode.classList.contains("offline") ? "rgb(253, 241, 193)" : "rgb(255, 255, 255)";
                }
            },
            "*.zendesk.com": {
                customDefaultBg: function(e) {
                    return e.classList.contains("ember-text-area") && (e.parentNode.parentNode.parentNode.classList.contains("is-public") ? "#fff" : "#fff6d9") || null;
                }
            },
            "facebook.com": {
                fieldStateForDomain: function(e) {
                    var t = [ "role:textbox", "testid:ufi_comment_composer", "testid:react-composer-root" ], n = function(e, t) {
                        var n = f["default"](t, 2), r = (n[0], n[1]);
                        return e.dataset && e.dataset.testid == r ? "testid:" + r : _.getParentByData(e, "testid", r) ? "testid:" + r : void 0;
                    };
                    return t.find(function(t) {
                        var r = t.split(":"), o = f["default"](r, 2), a = o[0], l = o[1];
                        return "testid" == a ? n(e, [ a, l ]) : i(e, [ a, l ]);
                    });
                },
                ghostHeight: function(e) {
                    var t = parseInt(e, 10);
                    return t > 0 ? t + 1 + "px" : t + "px";
                },
                menuPosLeft: function(e, t) {
                    return e && e.el.name && "xhpc_message_text" == e.el.name ? Math.ceil(t) : t;
                },
                forceMinimize: function(e) {
                    return "ufi_reply_composer" == e.dataset.testid;
                },
                btnCustomContainer: function(e) {
                    if (e.dataset && ("ufi_comment_composer" == e.dataset.testid || "ufi_reply_composer" == e.dataset.testid)) return e;
                    if (e.name && "xhpc_message_text" == e.name) return e.parentNode;
                    var t = _.getParentByData(e, "testid", "react-composer-root");
                    if (t) {
                        var n = _.getParentByDepth.call(e, 3);
                        return n.parentNode.style.position = "relative", n;
                    }
                    return "webMessengerRecentMessages" == e.getAttribute("aria-controls") ? e : void 0;
                },
                btnCustomStyles: function(e, t) {
                    if ("webMessengerRecentMessages" == t.getAttribute("aria-controls")) return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -5,
                        bottom: 2,
                        left: "auto",
                        top: "auto"
                    };
                    if (t.dataset && "ufi_comment_composer" == t.dataset.testid) {
                        var n = _.getParentByDepth.call(t, 6).querySelector(".UFICommentAttachmentButtons"), r = n ? n.childNodes.length : 2, o = [ 56, 30, 0 ], i = e ? -o[r] : -74, a = e ? -3 : -14;
                        return {
                            right: i,
                            bottom: a,
                            left: "auto",
                            top: "auto"
                        };
                    }
                    if (t.dataset && "ufi_reply_composer" == t.dataset.testid || t.hasAttribute("aria-haspopup") && t.hasAttribute("aria-owns")) {
                        var l = _.getParentByDepth.call(t, 6).querySelector(".UFICommentAttachmentButtons"), s = l ? l.childNodes.length : 2, u = [ 60, 30, 0 ], c = e ? -u[s] : -74, d = e ? -3 : -8;
                        return {
                            right: c,
                            bottom: d,
                            left: "auto",
                            top: "auto"
                        };
                    }
                    return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -8,
                        bottom: -5,
                        left: "auto",
                        top: "auto"
                    };
                }
            },
            "mail.google.com": {
                btnCustomContainer: function(e) {
                    var t = _.getParentByTag(e, "TABLE"), n = t && _.getParentByTag(t, "TABLE"), r = n && n.querySelector('[command="Files"]');
                    return n && r && _.getParentByTag(r, "TABLE");
                },
                btnCustomStyles: function(e) {
                    return e ? {
                        right: 10,
                        top: -30,
                        left: "auto"
                    } : {
                        right: -2,
                        top: -25,
                        left: "auto"
                    };
                },
                shouldRemove: function(e) {
                    var t = _.getParentByTag(e, "TABLE");
                    if (t) {
                        var n = _.getParentByTag(t, "TABLE");
                        if (n) {
                            var r = n.querySelector('[role=toolbar][aria-label="Spell Check"]');
                            return r && r.offsetParent;
                        }
                    }
                }
            },
            "inbox.google.com": {
                btnCustomContainer: function(e) {
                    return e.parentNode;
                },
                btnCustomStyles: function(e) {
                    return e ? {
                        right: 12,
                        top: "auto",
                        left: "auto",
                        bottom: 62
                    } : {
                        right: -5,
                        top: "auto",
                        left: "auto",
                        bottom: 60
                    };
                }
            },
            "medium.com": {
                btnDiff: function(e) {
                    return _.parentHasClass(e, "postArticle--full") ? [ -75, 0, !1 ] : void 0;
                }
            },
            "plus.google.com": {
                forceMinimize: function(e) {
                    return e.clientHeight < 30 ? !0 : !1;
                },
                btnCustomContainer: function(e) {
                    var t = function(e) {
                        return /comment/i.test(e.getAttribute("aria-label"));
                    };
                    return w() && t(e) ? e.parentNode : e;
                },
                btnCustomStyles: function(e, t) {
                    var n = w() ? -12 : -18, r = w() ? -5 : -10;
                    return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: n,
                        bottom: r,
                        left: "auto",
                        top: "auto"
                    };
                },
                fieldParentCustomStyle: function(e) {
                    var t = {
                        "padding-bottom": "2px",
                        "overflow-x": "hidden"
                    };
                    return w() ? t : {};
                }
            },
            "app.asana.com": {
                forceMinimize: function(e) {
                    return e.classList.contains("task-comments-input") ? !e.parentNode.parentNode.parentNode.classList.contains("focused") : void 0;
                }
            },
            "youtube.com": {
                btnDiff: function(e) {
                    return _.hasClass(e, "comment-simplebox-text") ? [ 15, 15 ] : void 0;
                }
            }
        };
        !function() {
            function e() {
                if (window.randomize) {
                    var e = window.randomize;
                    window.randomize = function(t) {
                        try {
                            if (t.data) {
                                var n = JSON.parse(t.data);
                                n[0] && n[0].parentWindowLocation && e(t);
                            }
                        } catch (t) {}
                    };
                }
            }
            (m.getDomain().indexOf("chase.com") > -1 || m.getDomain().indexOf("chaseonline.com") > -1) && v["default"].addScript(document, [ e ]);
        }(), n["default"] = a, t.exports = n["default"];
    }, {
        "./client-script": 149,
        "./dom": 154,
        "./location": 191,
        "./util": 218,
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/helpers/slicedToArray": 26,
        "babel-runtime/helpers/toConsumableArray": 27,
        lodash: "lodash"
    } ],
    200: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            if ("disconnected" != e) {
                var t = {};
                "string" == typeof e ? t.msg = e : e.error && (t.readyState = e.error.currentTarget && e.error.currentTarget.readyState, 
                t.returnValue = e.error.returnValue), x.call("felog.error", "socket_fail_bg", t), 
                console.error("capi error", e), window.emit || _["default"](window), window.emit("bgerror", e || "when send message to the socket");
            }
        }
        function i(e) {
            function t(t, r, o) {
                if (t) {
                    var a = t.socketId, l = $[a], s = t.method, u = "close" == s;
                    (l || !u) && (e.get().authToCapiDegradation || (l || (l = D(t, n, o, e), $[a] = l), 
                    t.arg && "start" == t.arg.action && h["default"](t.arg, i), s && ("connect" == s ? e.refreshUser(!0, "onSessionStart").then(function() {
                        return l[s](t.arg);
                    }) : l[s](t.arg), u && n(a))));
                }
            }
            function n(e) {
                $[e] && ($[e].close(), $[e].emit = function(e, t) {}, delete $[e]);
            }
            var r = {};
            window.socketServer = r, k["default"].on("iframe-mode", function(e) {
                console.log("IFRAME MODE", e.id, $), $[e.id].iframeMode(e.iframeMode);
            }, o, !0), k["default"].on("socket-client", t, o, !0), r.sockets = $, r.toString = function() {
                return "[object SocketServer]";
            };
            var i = {};
            return r.wsReconnect = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                h["default"](i, e), g["default"]($).forEach(function(e) {
                    return e.reconnect();
                });
            }, r;
        }
        function a() {
            var e = M.slice(0);
            return M.length = 0, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/regenerator"), s = r(l), u = e("babel-runtime/helpers/asyncToGenerator"), c = r(u), d = e("babel-runtime/core-js/promise"), f = r(d), m = e("babel-runtime/helpers/extends"), p = (r(m), 
        e("babel-runtime/core-js/object/values")), g = r(p), b = e("babel-runtime/core-js/object/assign"), h = r(b);
        n.SocketServer = i, n.getLog = a;
        var v = e("emitter"), _ = r(v), y = e("websocket"), w = r(y), E = e("lib/message"), k = r(E), x = e("lib/tracking"), C = e("lib/timers"), j = r(C), T = e("lib/util"), S = e("lib/config"), N = e("lib/bg/cookie"), $ = {}, M = [], A = {
            docid: T.guid(),
            client: "extension",
            protocolVersion: "1.0",
            action: "start",
            id: 0
        }, P = 12e4, D = function(e, t, n, r) {
            function i(e, t) {
                if (D(e, t), "disconnect" == e && O) return void (O = !1);
                var r = setTimeout(d, 5e3), i = E ? "socket-server-iframe" : "socket-server";
                return console.log("from ws", e, y, t, i), t && t.error && "not_authorized" == t.error ? m(_) : void k["default"].emitTo(n, i, {
                    socketId: y,
                    event: e,
                    msg: t,
                    id: T.guid()
                }, function(e) {
                    return e && clearTimeout(r);
                }, o);
            }
            function a() {
                L || (L = !0, l().then(function() {
                    return L = !1;
                }));
            }
            function l() {
                var e = void 0, t = new f["default"](function(t) {
                    return e = t;
                });
                return _.one("connect", e), _.isConnected() ? (_.one("disconnect", function() {
                    return setTimeout(_.connect.bind(null, !0), 0);
                }), O = !0, _.close()) : _.connect(!0), t;
            }
            function u(e) {
                E = e, console.log("USE EXT SOCKET", e);
            }
            function d() {
                console.log("CLOSE SOCKET"), C++, C > 7 && !M && (x.call("felog.warn", "too_frequent_socket_release", {
                    release_count: C
                }), M = !0);
                var e = u ? "socket_timeout_close_iframe:stability" : "socket_timeout_close:stability";
                x.call("statsc.ui.increment", e), _.close(), _.release(), t();
            }
            function m(e) {
                var t = r.get(), n = t.authToCapiDegradation, o = t.authDegradation, i = t.cookiesDisabled;
                return n ? (x.call("felog.error", "stability.capi_error_not_authorized_loop", {
                    authDegradation: o,
                    cookiesDisabled: i
                }), void console.error("User not authorized... Recovery fail =(")) : (i && (x.call("felog.error", "stability.capi_error_disabled_cookies"), 
                console.error("User disabled cookies... =(")), console.warn("User not authorized... Try to recover"), 
                r.update({
                    authToCapiDegradation: !0
                }), void p());
            }
            var p = function() {
                var e = c["default"](s["default"].mark(function t() {
                    var e, n;
                    return s["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return g["default"]($).forEach(function(e) {
                                e.close(), e.release();
                            }), e = "capiConnectionResolver", j["default"].start(e), t.next = 5, new f["default"](function(e) {
                                return v(e);
                            });

                          case 5:
                            n = t.sent, r.update({
                                authToCapiDegradation: !1
                            }), g["default"]($).forEach(function(e) {
                                return e.reconnect();
                            }), x.call("statsc.ui.timing", "stability:capi_restored_after_auth_degradation", j["default"].stop(e)), 
                            x.call("felog.warn", "stability.capi_restored_after_auth_degradation", {
                                count: n
                            });

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), b = function() {
                var e = c["default"](s["default"].mark(function t(e) {
                    var n, r = e.count, o = e.error;
                    return s["default"].wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = "exception", e.prev = 1, e.next = 4, N.getToken();

                          case 4:
                            n = e.sent, e.next = 9;
                            break;

                          case 7:
                            e.prev = 7, e.t0 = e["catch"](1);

                          case 9:
                            console.warn("log failed reconnect", r, o), x.call("felog.info", "stability:capi_error_in_fixer", {
                                token: n,
                                count: r,
                                error: o
                            });

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, t, this, [ [ 1, 7 ] ]);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(), v = function() {
                var e = c["default"](s["default"].mark(function t(e) {
                    var n, o, i = arguments.length <= 1 || void 0 === arguments[1] ? 1e4 : arguments[1], a = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                    return s["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return console.warn("Fixer inited, will try to connect in ", i / 1e3, "s., count:", a), 
                            t.next = 3, T.delay(i);

                          case 3:
                            return t.next = 5, r.refreshUser(!1, "recover_after_capi_error");

                          case 5:
                            n = w["default"]({
                                url: S.URLS.capi
                            }), o = function() {
                                n.close(), n.release(), n.emit = T._f, n = null;
                            }, n.emit = function(t) {
                                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                return "connect" == t ? n.send(A) : r.action && "start" == r.action ? (o(), console.warn("yay, we fixed capi connection!"), 
                                e(a)) : void ((r.error || "error" == t) && (o(), x.call("statsc.ui.increment", "stability:capi_error_in_fixer"), 
                                a % 10 == 0 && b({
                                    count: a,
                                    error: r.error
                                }), console.warn("still on error(", t, r), v(e, Math.min(P, 2 * i), a + 1)));
                            }, n.connect();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return function(t, n, r) {
                    return e.apply(this, arguments);
                };
            }(), _ = w["default"](e), y = e.socketId, E = void 0, C = 0, M = !1, D = _.emit, O = !1, L = void 0;
            return h["default"](_, {
                emit: i,
                reconnect: a,
                iframeMode: u,
                toString: function() {
                    return "[object BackgroundSocket]";
                }
            }), _;
        };
    }, {
        "babel-runtime/core-js/object/assign": 7,
        "babel-runtime/core-js/object/values": 13,
        "babel-runtime/core-js/promise": 14,
        "babel-runtime/helpers/asyncToGenerator": 18,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/regenerator": 124,
        emitter: "emitter",
        "lib/bg/cookie": 130,
        "lib/config": 150,
        "lib/message": 192,
        "lib/timers": 210,
        "lib/tracking": 214,
        "lib/util": 218,
        websocket: "websocket"
    } ],
    201: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            if ("disconnected" != e) {
                var t = {};
                "string" == typeof e ? t.msg = e : e.error && (t.readyState = e.error.currentTarget && e.error.currentTarget.readyState, 
                t.returnValue = e.error.returnValue), b.call("felog.error", "socket_fail_cs", t), 
                console.error("capi error", e), window.emit || c["default"](window), window.emit("bgerror", e || "when send message to the socket");
            }
        }
        function i(e) {
            g["default"].emitError(e);
        }
        function a(e) {
            function t(e, t) {
                var o = {
                    socketId: u,
                    method: e,
                    arg: t,
                    url: f,
                    useStandBy: p
                };
                _ || r(), g["default"].emitBackground("socket-client", o, null, i), "close" == e && n();
            }
            function n() {
                v.off("disconnect", n), g["default"].off("socket-server", a, i), _ = !1, h[u] && (delete h[u], 
                b.call("statsc.ui.timing", "activity:socket.close", m["default"].stop(u)));
            }
            function r() {
                _ = !0, g["default"].on("socket-server", a, i);
            }
            function a(e, t) {
                if (e.socketId == u) {
                    var n = e.msg || {};
                    n.action && "error" == n.action.toLowerCase() && (b.call("statsc.ui.increment", "stability:capi_error"), 
                    b.call("felog.error", "stability.capi_error", n)), t("ok"), v.emit(e.event, e.msg);
                }
            }
            var l = e.socketId, u = void 0 === l ? d.guid() : l, f = e.url, p = e.useStandBy, v = c["default"]({}), _ = !1, y = [ "connect", "send", "close", "reconnect", "release", "wsPlay", "wsPause" ];
            return y.forEach(function(e) {
                return v[e] = t.bind(null, e);
            }), v.one("connect", function() {
                h[u] = h[u] || u, m["default"].start(u), b.call("statsc.ui.timing", "activity:socket.open", s["default"](h).length);
            }), v.one("disconnect", n), v.on("error", o), v.socketId = u, v.toString = function() {
                return "[object SocketClient]";
            }, v;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/core-js/object/keys"), s = r(l);
        n.SocketClient = a;
        var u = e("emitter"), c = r(u), d = e("lib/util"), f = e("lib/timers"), m = r(f), p = e("lib/message"), g = r(p), b = e("lib/tracking"), h = {};
    }, {
        "babel-runtime/core-js/object/keys": 11,
        emitter: "emitter",
        "lib/message": 192,
        "lib/timers": 210,
        "lib/tracking": 214,
        "lib/util": 218
    } ],
    202: [ function(e, t, n) {
        (function(r) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            function i(t) {
                return (!l["default"] && !window.socketServer || window.gr___sandbox) && e("./bg").SocketServer(t), 
                s.isBg() ? e("./bg").SocketServer(t) : e("./cs").SocketClient(t);
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n["default"] = i;
            var a = "undefined" != typeof window ? window.forge : "undefined" != typeof r ? r.forge : null, l = o(a), s = e("lib/util");
            t.exports = n["default"];
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "./bg": 200,
        "./cs": 201,
        "lib/util": 218
    } ],
    203: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = e.el, n = a.guid(), r = i.renderReactWithParent(s["default"].createElement(c, null), t, n, "spinner");
            return {
                remove: r.remove,
                el: u.findDOMNode(r.component)
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./dom"), a = e("./util"), l = e("react"), s = r(l), u = e("react-dom"), c = s["default"].createClass({
            displayName: "SpinnerComponent",
            render: function() {
                return s["default"].createElement("div", {
                    className: "gr_-spinner " + this.props.className
                }, s["default"].createElement("div", {
                    className: "gr_-bounce1"
                }), s["default"].createElement("div", {
                    className: "gr_-bounce2"
                }), s["default"].createElement("div", {
                    className: "gr_-bounce3"
                }));
            }
        });
        o.SpinnerComponent = c, n["default"] = o, t.exports = n["default"];
    }, {
        "./dom": 154,
        "./util": 218,
        react: "react",
        "react-dom": "react-dom"
    } ],
    204: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: o,
                data: {
                    bgNotConnected: !0,
                    online: !1
                },
                reason: e,
                sync: !1
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.bgPageDown = r;
        var o = n.UPDATE_CONNECTION = "connection/UPDATE_CONNECTION";
    }, {} ],
    205: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = l.createMirrorStore(e, {
                bgPageDown: c.bgPageDown
            }, u["default"]), n = t.store, r = t.actions;
            return a["default"].on("__bgerror", r.bgPageDown), {
                store: n,
                actions: r
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.createAndObserve = o;
        var i = e("lib/message"), a = r(i), l = e("lib/store-mirror"), s = e("./reducer"), u = r(s), c = e("./actions");
    }, {
        "./actions": 204,
        "./reducer": 206,
        "lib/message": 192,
        "lib/store-mirror": 208
    } ],
    206: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1], n = t.type, r = t.data;
            switch (n) {
              case l.UPDATE_CONNECTION:
                return a["default"]({}, e, {
                    connection: a["default"]({}, e.connection, r)
                });

              default:
                return e;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/extends"), a = r(i);
        n["default"] = o;
        var l = e("./actions");
        t.exports = n["default"];
    }, {
        "./actions": 204,
        "babel-runtime/helpers/extends": 22
    } ],
    207: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            function n() {
                var n = e.getState();
                m.isEmpty(n) || m.isEqual(r, n) || (r = n, t(n));
            }
            var r = void 0;
            return p.asyncCall(n), e.subscribe(n);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.bindActions = void 0;
        var i = e("babel-runtime/helpers/defineProperty"), a = r(i), l = e("babel-runtime/helpers/extends"), s = r(l), u = e("babel-runtime/core-js/object/assign"), c = r(u), d = e("babel-runtime/core-js/object/keys"), f = r(d);
        n.observeStore = o;
        var m = e("lodash"), p = e("lib/util");
        n.bindActions = function(e, t) {
            return f["default"](e).filter(function(t) {
                return e[t];
            }).reduce(function(n, r) {
                return c["default"](n, a["default"]({}, r, function() {
                    var n = e[r].apply(e, arguments), o = "undefined" == typeof n.sync ? !0 : n.sync;
                    return t(s["default"]({}, n, {
                        sync: o
                    }));
                }));
            }, {});
        };
    }, {
        "babel-runtime/core-js/object/assign": 7,
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/extends": 22,
        "lib/util": 218,
        lodash: "lodash"
    } ],
    208: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments[2], r = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? v : arguments[0], t = arguments[1], r = (e.page || e.config || {}).domain;
                return t.sync && d["default"].emitBackground("dispatch", a["default"]({}, t, {
                    domain: r
                })), t.type == h ? a["default"]({}, e, t.data) : n ? n(e, t) : e;
            }, o = u.createStore(r, {}, u.applyMiddleware(b)), i = p.bindActions(a["default"]({}, m["default"], t), o.dispatch);
            return d["default"].on("state", function(e) {
                g.asyncCall(function() {
                    return o.dispatch({
                        type: h,
                        data: e
                    });
                }, 0);
            }), p.observeStore(o, e), {
                store: o,
                actions: i
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/extends"), a = r(i);
        n.createMirrorStore = o;
        var l = e("redux-logger"), s = r(l), u = e("redux"), c = e("lib/message"), d = r(c), f = e("lib/bg/features/actions"), m = r(f), p = e("./helpers"), g = e("../util"), b = s["default"]({
            level: "debug",
            collapsed: function() {
                return !0;
            },
            predicate: function() {
                return !1;
            }
        }), h = "store/SYNC", v = {
            page: {},
            connection: {}
        };
    }, {
        "../util": 218,
        "./helpers": 207,
        "babel-runtime/helpers/extends": 22,
        "lib/bg/features/actions": 131,
        "lib/message": 192,
        redux: "redux",
        "redux-logger": "redux-logger"
    } ],
    209: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            function e() {
                l["default"].emitBackground("bg-reload", {});
            }
            function t() {
                l["default"].emitBackground("reset", {});
            }
            function n() {
                l["default"].emitBackground("get-tracker-log", {}, function(e) {
                    return i.emitDomEvent("tracker-log", e);
                });
            }
            function r() {
                l["default"].emitBackground("get-capi-log", {}, function(e) {
                    return i.emitDomEvent("capi-log", e);
                });
            }
            function o() {
                l["default"].emitBackground("get-extid", {}, function(e) {
                    return i.emitDomEvent("extid", e);
                });
            }
            function a() {
                l["default"].emitBackground("get-localforage", {}, function(e) {
                    return i.emitDomEvent("localforage", e);
                });
            }
            function s(e) {
                l["default"].emitBackground("set-localforage", {
                    key: e.key,
                    value: e.value
                }, function(e) {
                    return i.emitDomEvent("localforage", e);
                });
            }
            function c(e) {
                var t = e.key;
                u["default"].get(t).then(function(e) {
                    return i.emitDomEvent("pref", {
                        key: t,
                        value: e
                    });
                });
            }
            function d(e) {
                var t = e.key, n = e.value;
                u["default"].set(t, n);
            }
            i.listen(document, "bg-reload", e), i.listen(document, "reset", t), i.listen(document, "get-extid", o), 
            i.listen(document, "get-capi-log", r), i.listen(document, "get-tracker-log", n), 
            i.listen(document, "get-localforage", a), i.listen(document, "set-localforage", s), 
            i.listen(document, "get-pref", c), i.listen(document, "set-prefs", d);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = o;
        var i = e("./dom"), a = e("./message"), l = r(a), s = e("./bg/prefs"), u = r(s);
        t.exports = n["default"];
    }, {
        "./bg/prefs": 135,
        "./dom": 154,
        "./message": 192
    } ],
    210: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = {};
        n["default"] = {
            start: function(e) {
                r[e] = Date.now();
            },
            stop: function(e) {
                var t = this.passed(e);
                return delete r[e], t;
            },
            passed: function(e) {
                return e && r[e] ? Date.now() - r[e] : 0;
            }
        }, t.exports = n["default"];
    }, {} ],
    211: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            function t(e, t) {
                if (t) {
                    if (!e) return j.call("felog.warn", "malfunction_update_id");
                    g["default"](e, t), m["default"](e, null), m["default"](e, t, a);
                }
            }
            var n = e.mpCookie, r = e.gnar, o = e.dapi, i = k.getDomain(), a = {
                path: "/",
                domain: i,
                expires: new Date(new Date().setYear(new Date().getFullYear() + 1))
            };
            r && A(r, "external-change"), t(C.MIXPANEL.cookie, n), t($, r), t("__fngrprnt__", o);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getContainerId = n.isValidContainerId = n.init = void 0;
        var i = e("babel-runtime/regenerator"), a = r(i), l = e("babel-runtime/helpers/asyncToGenerator"), s = r(l), u = (n.init = function() {
            var t = s["default"](a["default"].mark(function n() {
                var t, r, o;
                return a["default"].wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return t = {
                            toJSON: function() {
                                var e = d["default"](15), t = Date.now();
                                return function() {
                                    return Date.now() - t > x.DAY && (e = d["default"](15), t = Date.now()), e;
                                };
                            }()
                        }, r = function() {
                            return x.isFF() && E["default"].request.ajax;
                        }(), h["default"](), _["default"](), e("tracker"), S["default"]().init({
                            mixpanel: {
                                key: C.MIXPANEL.key,
                                qaKey: C.MIXPANEL.qaKey,
                                dapi: C.DAPI,
                                ajax: r
                            },
                            gnar: {
                                url: C.GNAR.url,
                                qaUrl: C.GNAR.qaUrl,
                                app: x.getBrowser() + "Ext",
                                appVersion: C.getVersion(),
                                ajax: r
                            },
                            felog: {
                                application: "browserplugin",
                                key: C.FELOG.key,
                                url: C.URLS.raven,
                                project: C.FELOG.project,
                                commit: C.getVersion(),
                                version: C.getVersion(),
                                readyOnSetUser: !1,
                                sessionId: d["default"](15),
                                sessionIdDaily: t
                            },
                            statsc: {
                                url: C.STATSC.URL
                            }
                        }), S["default"]().statsc.createRoot({
                            prefix: C.STATSC.PREFIX,
                            postfix: x.getBrowser() + ".extension.world",
                            id: "ui"
                        }), n.next = 9, N();

                      case 9:
                        if (n.t0 = n.sent, n.t0) {
                            n.next = 12;
                            break;
                        }
                        n.t0 = g["default"]("mpCookie");

                      case 12:
                        if (o = n.t0) {
                            n.next = 15;
                            break;
                        }
                        return n.abrupt("return");

                      case 15:
                        window.mixpanel.persistence.load(), j.call("mixpanel.setProps", {
                            gProduct: "Extension-" + x.getBrowser(),
                            fullProductVersion: C.getVersion()
                        }, "Ext");

                      case 17:
                      case "end":
                        return n.stop();
                    }
                }, n, this);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }(), function() {
            var e = s["default"](a["default"].mark(function t() {
                var e;
                return a["default"].wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, y.getCookie($);

                      case 3:
                        if (e = t.sent, !P(e)) {
                            t.next = 7;
                            break;
                        }
                        return g["default"]($, e), t.abrupt("return", e);

                      case 7:
                        t.next = 12;
                        break;

                      case 9:
                        t.prev = 9, t.t0 = t["catch"](0), j.call("felog.error", "fetch_gnar_containerId_fail", {
                            error: t.t0,
                            errorMessage: t.t0.message,
                            placement: "cookie"
                        });

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 0, 9 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }());
        n.processCookiesFromGrammarly = o;
        var c = e("@grammarly-npm/alphanumeric"), d = r(c), f = e("cookie"), m = r(f), p = e("local-storage"), g = r(p), b = e("vendor/mixpanel"), h = r(b), v = e("vendor/mixpanel-2.2"), _ = r(v), y = e("../bg/cookie"), w = e("lib/forge"), E = r(w), k = e("../location"), x = e("../util"), C = e("../config"), j = e("./call"), T = e("./tracker"), S = r(T), N = function() {
            return y.getCookie(C.MIXPANEL.cookie)["catch"](function() {
                return "";
            });
        }, $ = "gnar_containerId", M = "funnel_container_parsed", A = function() {
            var e = void 0, t = 0;
            return function(n, r) {
                if (e && e !== n) {
                    var o = x.checkLocalStorage(), i = o.enabled;
                    t++, j.call("felog.warn", "containerId_change_detected", {
                        reason: r,
                        newContainerId: n,
                        count: t,
                        localStorageEnabled: i
                    });
                }
                e = n;
            };
        }(), P = n.isValidContainerId = function(e) {
            if (!e) throw new Error("Invalid GNAR_CONTAINER_ID: empty id");
            if (12 != e.length) throw new Error("Invalid GNAR_CONTAINER_ID: malformed id: " + e.length);
            return !0;
        };
        n.getContainerId = function() {
            var e = s["default"](a["default"].mark(function t() {
                var e, n, r;
                return a["default"].wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, e = g["default"](M)) {
                            t.next = 4;
                            break;
                        }
                        throw new Error("migrate me");

                      case 4:
                        t.next = 12;
                        break;

                      case 6:
                        return t.prev = 6, t.t0 = t["catch"](0), t.next = 10, u();

                      case 10:
                        j.call("felog.info", "migrated_to_fixed_containerId"), g["default"](M, !0);

                      case 12:
                        if (t.prev = 12, n = g["default"]($), !P(n)) {
                            t.next = 17;
                            break;
                        }
                        return A(n, "local-storage-or-cookie"), t.abrupt("return", n);

                      case 17:
                        t.next = 22;
                        break;

                      case 19:
                        t.prev = 19, t.t1 = t["catch"](12), j.call("felog.error", "fetch_gnar_containerId_fail", {
                            error: t.t1,
                            errorMessage: t.t1.message,
                            placement: "prefs"
                        });

                      case 22:
                        return t.next = 24, u();

                      case 24:
                        return t.prev = 24, r = S["default"]().gnar.meta().containerId, A(r, "own-generated"), 
                        t.abrupt("return", r);

                      case 30:
                        return t.prev = 30, t.t2 = t["catch"](24), j.call("felog.error", "fetch_gnar_containerId_fail", {
                            error: t.t2,
                            errorMessage: t.t2.message,
                            placement: "tracker"
                        }), t.abrupt("return", "");

                      case 34:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 0, 6 ], [ 12, 19 ], [ 24, 30 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }();
    }, {
        "../bg/cookie": 130,
        "../config": 150,
        "../location": 191,
        "../util": 218,
        "./call": 212,
        "./tracker": 217,
        "@grammarly-npm/alphanumeric": 1,
        "babel-runtime/helpers/asyncToGenerator": 18,
        "babel-runtime/regenerator": 124,
        cookie: "cookie",
        "lib/forge": 183,
        "local-storage": "local-storage",
        tracker: "tracker",
        "vendor/mixpanel": "vendor/mixpanel",
        "vendor/mixpanel-2.2": "vendor/mixpanel-2.2"
    } ],
    212: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            var o = function(t) {
                return e.includes("felog") ? _["default"].apply(void 0, f["default"](l(n))) : e.includes("statsc.ui.increment") ? w["default"].apply(void 0, [ e.split(".").pop() ].concat(n)) : void console.warn("tracking call " + e + " failed, reason: ", t);
            };
            if (g.isBg()) return g.asyncCall(function() {
                try {
                    i(e, n);
                } catch (t) {
                    o(t);
                }
            }, 20);
            var a = 1e4, s = setTimeout(function() {
                return c("timeout call through bg page");
            }, a), u = function() {
                return clearInterval(s);
            }, c = function(e) {
                u(), o(e);
            };
            p["default"].emitBackground("tracking-call", {
                msg: e,
                data: n
            }, u, c);
        }
        function i(e, t) {
            var n = e.split("."), r = n.pop(), o = n.reduce(function(e, t) {
                return t in e ? e[t] : {};
            }, h["default"]());
            return o && o[r] ? (o[r].apply(o, f["default"](t)), void a(e, t)) : console.error("No method " + e + " in tracker object");
        }
        function a(e, t) {
            console.info(e, t);
        }
        function l() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0], t = {
                headers: {
                    "User-Agent": navigator.userAgent
                }
            };
            if (e.length < 2) return [ e[0], {
                request: t
            } ];
            var n = e[1], r = "string" == typeof n ? {
                message: n
            } : n;
            return [ e[0], c["default"]({}, r, {
                request: t
            }) ].concat(f["default"](e.slice(2)));
        }
        function s() {
            var e = E.slice(0);
            return E.length = 0, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var u = e("babel-runtime/helpers/extends"), c = r(u), d = e("babel-runtime/helpers/toConsumableArray"), f = r(d);
        n.call = o, n.runMessage = i, n.getLog = s;
        var m = e("../message"), p = r(m), g = e("../util"), b = e("./tracker"), h = r(b), v = e("./felogPixel"), _ = r(v), y = e("./statscPixel"), w = r(y), E = [];
    }, {
        "../message": 192,
        "../util": 218,
        "./felogPixel": 213,
        "./statscPixel": 216,
        "./tracker": 217,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/toConsumableArray": 27
    } ],
    213: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/json/stringify"), i = r(o);
        n["default"] = function(e, t) {
            var n = {};
            try {
                i["default"](t), n = t;
            } catch (r) {
                console.error(r);
            }
            var o = document.createElement("img"), l = {
                logger: "javascript",
                platform: "javascript",
                tags: {
                    application: "browserplugin",
                    fromPixel: !0,
                    commit: a.getVersion(),
                    version: a.getVersion()
                },
                message: e,
                extra: n
            }, s = "https://" + a.URLS.raven + "/api/" + a.FELOG.project + "/store/\n?sentry_version=4\n&sentry_client=raven-js/1.1.16\n&sentry_key=" + a.FELOG.key + "\n&sentry_data=" + encodeURIComponent(i["default"](l));
            return o.src = s, console.info(e, t), o;
        };
        var a = e("../config");
        t.exports = n["default"];
    }, {
        "../config": 150,
        "babel-runtime/core-js/json/stringify": 5
    } ],
    214: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            var t = e("./bgonly"), n = t.init, r = t.processCookiesFromGrammarly;
            n()["catch"](function(e) {
                return m.call("felog.error", "bg_tracking_start_fail", {
                    error: e
                });
            }), window.addEventListener("unhandledrejection", function(e) {
                window.onerror && window.onerror("Promise unhandledrejection", "", "", "", e.reason);
            }), window.__forgeExceptions && window.__forgeExceptions.length && window.onerror && window.__forgeExceptions.forEach(function(e) {
                var t;
                return (t = window).onerror.apply(t, s["default"](e));
            }), p = e("./on"), d["default"].on("tracking-fire", function(e) {
                var t = e.msg, n = e.data;
                return i.apply(void 0, [ t ].concat(s["default"](n)));
            }), d["default"].on("tracker-init", r), d["default"].on("tracking-call", function(e) {
                var t = e.msg, n = e.data, r = arguments.length <= 1 || void 0 === arguments[1] ? u._f : arguments[1];
                m.call.apply(void 0, [ t ].concat(s["default"](n))), r();
            }), i("activity-ping");
        }
        function i(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            if (u.isBg()) {
                if (!p[e]) return console.error("No handler specified for message: " + e);
                u.asyncCall(function() {
                    var t;
                    return (t = p)[e].apply(t, n);
                }, 20);
            } else d["default"].emitBackground("tracking-fire", {
                msg: e,
                data: n
            });
        }
        function a() {
            function t() {
                n++, n > i && clearInterval(o);
                var e = {
                    mpCookie: r(f.MIXPANEL.cookie),
                    gnar: r("gnar_containerId"),
                    dapi: r("__fngrprnt__")
                };
                e.mpCookie && (clearInterval(o), d["default"].emitBackground("tracker-init", e));
            }
            var n = 0, r = e("cookie"), o = setInterval(t, 500), i = 10;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/helpers/toConsumableArray"), s = r(l), u = e("../util"), c = e("../message"), d = r(c), f = e("../config"), m = e("./call"), p = {};
        n["default"] = {
            initBg: o,
            initContentScript: a,
            getLog: m.getLog,
            fire: i,
            call: m.call
        }, t.exports = n["default"];
    }, {
        "../config": 150,
        "../message": 192,
        "../util": 218,
        "./bgonly": 211,
        "./call": 212,
        "./on": 215,
        "babel-runtime/helpers/toConsumableArray": 27,
        cookie: "cookie"
    } ],
    215: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e("babel-runtime/helpers/defineProperty"), a = r(i), l = e("babel-runtime/regenerator"), s = r(l), u = e("babel-runtime/helpers/slicedToArray"), c = r(u), d = e("babel-runtime/helpers/asyncToGenerator"), f = r(d), m = e("../bg/prefs"), p = r(m), g = e("../config"), b = e("../util"), h = e("./call");
        n["default"] = (o = {}, a["default"](o, "activity-ping", function() {
            var e = function(e) {
                return parseFloat(Math.round(100 * e * 100) / 100).toFixed(2);
            };
            setInterval(function() {
                return b.isChrome() ? void (window.chrome.system && window.chrome.system.cpu && window.chrome.system.cpu.getInfo(function(t) {
                    var n = t.processors.map(function(e) {
                        return (e.usage.total - e.usage.idle) / e.usage.total;
                    }).reduce(function(e, t, n, r) {
                        return e + t / r.length;
                    }, 0), r = window.performance.memory, o = r.usedJSHeapSize, i = r.totalJSHeapSize;
                    n = e(n), h.call("statsc.ui.increment", "activity:activity_ping"), h.call("statsc.ui.gauge", {
                        "performance:memory_used": o,
                        "performance:memory_used_of_total": e((i - o) / i),
                        "performance:cpu_load": n
                    });
                })) : h.call("statsc.ui.increment", "activity:activity_ping");
            }, g.FELOG.pingTimeout);
        }), a["default"](o, "daily-ping", function(e, t) {
            var n = this;
            return f["default"](s["default"].mark(function r() {
                var o, i, a, l, u, d;
                return s["default"].wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!g.debug && e) {
                            n.next = 2;
                            break;
                        }
                        return n.abrupt("return");

                      case 2:
                        return n.next = 4, p["default"].get("pingDate");

                      case 4:
                        if (o = n.sent, "string" != typeof o && (o = ""), i = o.split("|"), a = c["default"](i, 2), 
                        l = a[0], u = a[1], d = t ? "cookiesDisabled" : e, !(l && l > Date.now() && u == d)) {
                            n.next = 13;
                            break;
                        }
                        return n.abrupt("return");

                      case 13:
                        h.call("mixpanel.dapiEvent", "Daily_Ping", {
                            gProduct: "Extension-" + b.getBrowser()
                        }), h.call("gnar.trackTrackTrack"), h.call("mixpanel.track", "Ext:Daily_Ping"), 
                        h.call("felog.event", "daily_ping"), p["default"].set("pingDate", [ b.getNextPingDate(), d ].join("|"));

                      case 18:
                      case "end":
                        return n.stop();
                    }
                }, r, n);
            }))();
        }), a["default"](o, "app_signin_success", function() {
            h.call("mixpanel.track", "G:User_Login_Succeeded"), h.call("gnar.send", b.getBrowser() + "Ext/userLoginForm/accepted"), 
            h.call("statsc.ui.increment", "stability:app_signin_success");
        }), a["default"](o, "app_signup_success", function() {
            h.call("mixpanel.track", "G:User_Account_Created"), h.call("gnar.send", b.getBrowser() + "Ext/userAccountSignupForm/accepted"), 
            h.call("statsc.ui.increment", "stability:app_signup_success");
        }), a["default"](o, "signin-error", function(e) {
            e.errorType = "Server-Side", h.call("mixpanel.track", "G:User_Login_Rejected"), 
            h.call("gnar.send", b.getBrowser() + "Ext/userLoginForm/rejected");
        }), a["default"](o, "signup-error", function(e) {
            e.errorType = "Server-Side", h.call("mixpanel.track", "G:User_Signup_Rejected"), 
            h.call("gnar.send", b.getBrowser() + "Ext/userAccountSignupForm/rejected");
        }), a["default"](o, "upgrade-after-register", function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = f["default"](s["default"].mark(function n() {
                return s["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        h.call("mixpanel.track", "NE:Account_Type_Selected", {
                            accountTypeSelected: "premium"
                        }), h.call("gnar.send", b.getBrowser() + "Ext/Account_Type_Selected");

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, n, this);
            }));
            return e;
        }()), a["default"](o, "upgrade", function(e) {
            var t = {
                placement: e
            };
            h.call("gnar.send", b.getBrowser() + "Ext/upgradeButtonClicked", t), h.call("mixpanel.track", "Ext:Upgrade_To_Plus_Clicked", t), 
            h.call("felog.info", "upgrade_click", t), h.call("statsc.ui.increment", "activity:upgrade." + e + ".click");
        }), a["default"](o, "correct-btn-clicked", function() {
            h.call("mixpanel.track", "Ext:Gbutton_Clicked"), h.call("gnar.send", b.getBrowser() + "Ext/gbuttonClicked"), 
            h.call("statsc.ui.increment", "stability:editor.gbutton_clicked"), h.call("felog.event", "g_button_clicked");
        }), a["default"](o, "btn-disable-in-field", function(e) {
            h.call("mixpanel.track", "Ext:Checking_in_field_toggled", {
                enabled: e
            }), h.call("gnar.send", b.getBrowser() + "Ext/checkingInFieldToggled", {
                enabled: e
            }), h.call("statsc.ui.increment", "stability:disable_in_field." + (e ? "on" : "off")), 
            h.call("felog.info", "g_button_disable_in_field_click");
        }), a["default"](o, "button-change-state", function(e) {
            h.call("statsc.ui.increment", "stability:g_button_minimize_toggled");
        }), a["default"](o, "session-end", function(e) {
            h.call("mixpanel.track", "Ext:Only_Advanced_Mistakes", {
                advancedCount: e
            }), h.call("gnar.send", b.getBrowser() + "Ext/onlyAdvancedMistakes", {
                advancedCount: e
            }), h.call("felog.info", "only_advanced_mistakes", {
                advancedCount: e
            });
        }), a["default"](o, "login-attempt", function(e) {
            h.call("gnar.send", b.getBrowser() + "Ext/signInClicked", {
                placement: e
            }), h.call("mixpanel.track", "Ext:Sign_In_Clicked", {
                placement: e
            });
        }), a["default"](o, "show-dictionary", function() {
            h.call("gnar.send", b.getBrowser() + "Ext/showDictionary"), h.call("mixpanel.track", "Ext:Show_Dictionary");
        }), a["default"](o, "referral-shown", function(e) {
            h.call("mixpanel.track", "WE:Referral_Notification_Shown", {
                placement: e
            }), h.call("gnar.send", "referral/referralNotificationShown", {
                placement: e
            });
        }), a["default"](o, "referral-clicked", function(e) {
            h.call("mixpanel.track", "WE:Referral_Button_Clicked", {
                placement: e
            }), h.call("gnar.send", "referral/referralButtonClicked", {
                placement: e
            });
        }), a["default"](o, "tab-connected", function(e, t, n) {
            var r = t.enabled, o = n.cookiesDisabled;
            this["daily-ping"](e, o), r || (h.call("felog.info", "not_enable_on_domain"), h.call("gnar.send", b.getBrowser() + "Ext/notEnableOnDomain"));
        }), a["default"](o, "session-invalidate", function(e, t, n, r, o) {
            var i = e.id, a = e.name, l = e.anonymous, s = e.premium, u = e.email, c = e.type;
            i != t.id && (h.call("gnar.setUser", i), h.call("mixpanel.initProps"), h.call("felog.setUser", {
                id: i,
                name: a,
                anonymous: l,
                premium: s,
                email: u,
                type: c,
                containerId: o
            }), this["daily-ping"](i, r)), n && h.call("felog.info", "session_invalidated_by", {
                reason: n,
                userChanged: i != t.id
            }), t.email && !t.anonymous && l && h.call("felog.warn", "unexpected_user_convert_to_anonymous", {
                email: t.email,
                token: t.token,
                grauth: t.grauth,
                tokenEqualsGrauth: t.token == t.grauth,
                cookiesDisabled: r,
                reason: n
            });
        }), a["default"](o, "set-weak-dialect", function(e) {
            h.call("mixpanel.track", "G:Language_Weak_Preference", {
                dialect: e
            }), h.call("gnar.send", b.getBrowser() + "Ext/languageWeakPreference", {
                dialect: e
            }), h.call("statsc.ui.increment", "stability:weak_dialect_changed"), h.call("felog.info", "weak_dialect_changed", {
                dialect: e
            });
        }), a["default"](o, "change-dialect", function(e) {
            var t = e.language, n = e.dialectWeak, r = {
                language: t
            };
            n && (r.sameAsWeak = t == n), h.call("felog.info", "language_dialect_changed", r), 
            h.call("mixpanel.track", "G:Language_Strong_Preference", r), h.call("gnar.send", b.getBrowser() + "Ext/languageStrongPreference", r), 
            h.call("statsc.ui.increment", "stability:language_dialect_changed");
        }), a["default"](o, "get-dapi-prop-error", function(e, t) {
            h.call("statsc.ui.increment", "stability:get_dapi_prop_error"), h.call("felog.info", "get_dapi_prop_error", {
                error: t,
                property: e
            });
        }), a["default"](o, "set-dapi-prop-error", function(e, t) {
            h.call("statsc.ui.increment", "stability:set_dapi_prop_error"), h.call("felog.info", "set_dapi_prop_error", {
                error: t,
                property: e
            });
        }), a["default"](o, "change-defs", function(e) {
            h.call("felog.info", "toggle_extension_defs", e), h.call("mixpanel.track", "Ext:Definitions_Toggled:Popup", e), 
            h.call("statsc.ui.increment", "stability:definitions_toggled"), h.call("gnar.send", b.getBrowser() + "Ext/definitionsToggled", e);
        }), a["default"](o, "change-grammar", function(e) {
            h.call("felog.info", "toggle_extension_on_site", e), h.call("statsc.ui.increment", "stability:toggle_extension_on_site"), 
            h.call("mixpanel.track", "Ext:Checking_Toggled:Popup", e), h.call("gnar.send", b.getBrowser() + "Ext/checkingToggled", e);
        }), a["default"](o, "popup-open", function() {
            h.call("felog.info", "extension_toolbar_btn_click"), h.call("gnar.send", b.getBrowser() + "Ext/browserToolbarButtonClicked"), 
            h.call("mixpanel.track", "Ext:Browser_Toolbar_Button_Clicked");
        }), a["default"](o, "popup-open-on-unsupported", function() {
            h.call("gnar.send", b.getBrowser() + "Ext/browserToolbarButtonClicked/unsupported"), 
            h.call("mixpanel.track", "Ext:Settings_Open_Unsupported_Domain");
        }), a["default"](o, "cookie-overflow", function(e, t) {
            h.call("felog.warn", "too_big_cookie_header", {
                total: e,
                biggestCookie: t
            }), h.call("statsc.ui.timing", "stability:too_big_cookie_header.total", e);
        }), a["default"](o, "premium-popup-show", function() {
            h.call("mixpanel.track", "Ext:Upgrade_Referral_Popup_Shown"), h.call("gnar.send", b.getBrowser() + "Ext/upgradeReferralPopupShown");
        }), a["default"](o, "premium-popup-upgrade-click", function() {
            h.call("mixpanel.track", "Ext:Upgrade_Referral_Premium_Btn_Clicked"), h.call("gnar.send", b.getBrowser() + "Ext/upgradeReferralPremiumBtnClicked");
        }), a["default"](o, "premium-popup-referral-click", function() {
            h.call("mixpanel.track", "Ext:Upgrade_Referral_Invite_Btn_Clicked"), h.call("gnar.send", b.getBrowser() + "Ext/upgradeReferralInviteBtnClicked");
        }), o), t.exports = n["default"];
    }, {
        "../bg/prefs": 135,
        "../config": 150,
        "../util": 218,
        "./call": 212,
        "babel-runtime/helpers/asyncToGenerator": 18,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/slicedToArray": 26,
        "babel-runtime/regenerator": 124
    } ],
    216: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/json/stringify"), i = r(o);
        n["default"] = function(e, t) {
            var n = t && t.split(":");
            if (n[0] && n[1]) {
                var r = "grammarly.ui." + n[0] + "." + a.getBrowser() + ".extension.world." + n[1], o = {
                    c: {}
                };
                o.c[r] = [ "1" ];
                var s = document.createElement("img");
                return s.src = l.STATSC.URL + "?json=" + i["default"](o), console.info(e, t), s;
            }
        };
        var a = e("../util"), l = e("../config");
        t.exports = n["default"];
    }, {
        "../config": 150,
        "../util": 218,
        "babel-runtime/core-js/json/stringify": 5
    } ],
    217: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function() {
            return window.tracker;
        }, t.exports = n["default"];
    }, {} ],
    218: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return -1 != window.navigator.userAgent.indexOf("Firefox");
        }
        function i() {
            return !!window.chrome;
        }
        function a() {
            return /^((?!chrome).)*safari/i.test(navigator.userAgent);
        }
        function l() {
            return /^((?!chrome).)*safari/i.test(navigator.userAgent) && -1 != navigator.userAgent.indexOf("Version/8.0");
        }
        function s() {
            return -1 != navigator.appVersion.indexOf("Win");
        }
        function u() {
            return window.IS_BG;
        }
        function c() {
            return window.IS_POPUP;
        }
        function d() {
            return u() || c();
        }
        function f() {
            return i() ? "chrome" : o() ? "firefox" : a() ? "safari" : "other";
        }
        function m(e) {
            var t = -1 != [ "freeeeeeee@grammarly.com", "premiumuser@grammarly.com" ].indexOf(e);
            return !t && /^.*@grammarly.com$/.test(e);
        }
        function p() {
            return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError;
        }
        function g(e) {
            return !!(e && e.constructor && e.call && e.apply);
        }
        function b(e, t) {
            function n() {
                function n() {
                    o(), e();
                }
                function o() {
                    var o = setTimeout(n, t);
                    r[e] = o;
                }
                o();
            }
            var r = b.items = b.items || {}, o = r[e];
            if (o || t) return o && !t ? (clearTimeout(o), void delete r[e]) : void n();
        }
        function h(e) {
            b(e);
        }
        function v() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        }
        function _() {
            return v() + v() + "-" + v() + "-" + v() + "-" + v() + "-" + v() + v() + v();
        }
        function y() {}
        function w() {
            return !0;
        }
        function E() {
            i() && window.chrome.runtime.reload();
        }
        function k(e) {
            if (e.location) {
                var t = "mail.google.com" == e.location.host, n = e.querySelector("iframe#js_frame") && e.querySelector("iframe#sound_frame");
                return t || n;
            }
        }
        function x(e) {
            return /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(e);
        }
        function C(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        function j(e, t) {
            return t[1 == e ? 0 : 1];
        }
        function T(e) {
            return oe["default"].transform(e, function(e, t) {
                return e[t] = y;
            });
        }
        function S(e, t, n) {
            var r = {};
            return function() {
                var o = "_memoize_" + (t ? t.apply(this, arguments) : arguments[0]);
                return hasOwnProperty.call(r, o) ? r[o] : (n && setTimeout(function() {
                    delete r[o];
                }, n), r[o] = e.apply(this, arguments));
            };
        }
        function N(e, t) {
            return te["default"](t).reduce(function(n, r) {
                return Q["default"]({}, n, J["default"]({}, r, function() {
                    for (var n = arguments.length, o = Array(n), i = 0; n > i; i++) o[i] = arguments[i];
                    return e.then(function() {
                        return t[r].apply(t, o);
                    });
                }));
            }, {});
        }
        function $(e) {
            return new K["default"](function(t) {
                return e(t);
            });
        }
        function M(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
        }
        function A(e) {
            return new K["default"](function(t) {
                return setTimeout(t, e);
            });
        }
        function P(e) {
            if (e) {
                var t = new Date(e);
                if ("Invalid Date" != t.toString()) return ue[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear();
            }
        }
        function D(e) {
            var t = function() {};
            return t.prototype = e(), t;
        }
        function O() {
            function e(e) {
                return e.split(".").map(function(e) {
                    return Number(e) || 0;
                });
            }
            var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], n = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1], r = e(t), o = e(n), i = Array(Math.abs(r.length - o.length)).fill(0);
            if (r.length > o.length ? o.push.apply(o, q["default"](i)) : r.push.apply(r, q["default"](i)), 
            r.every(function(e, t) {
                return e === o[t];
            })) return 0;
            for (var a = 0, l = r.length; l > a; a++) {
                if (r[a] > o[a]) return 1;
                if (r[a] < o[a]) return -1;
            }
            return -1;
        }
        function L(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 10 : arguments[1];
            setTimeout(e, t);
        }
        function I() {
            function e(e) {
                if (a.length) {
                    var t = a.shift();
                    t(e);
                } else o ? i.push(e) : i[0] = e;
            }
            function t() {
                return i.length ? K["default"].resolve(i.shift()) : new K["default"](function(e) {
                    return a.push(e);
                });
            }
            var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], r = n.buffered, o = void 0 === r ? !0 : r, i = [], a = [];
            return {
                take: t,
                put: e
            };
        }
        function R(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 100 : arguments[1];
            if (!e) return NaN;
            var n = ae["default"].createHash("superfasthash");
            return parseInt(n.hash(e), 16) % t;
        }
        function F(e) {
            return e.which || e.charCode || e.keyCode || 0;
        }
        function G() {
            var e = new Date();
            return e.getHours() > 2 && e.setDate(e.getDate() + 1), e.setHours(3), e.setMinutes(Math.floor(60 * Math.random())), 
            e.getTime();
        }
        function B() {
            var e = "test_localstorage_availability", t = "test";
            try {
                se["default"](e, t);
                var n = se["default"](e);
                if (n !== t) return {
                    enabled: !1,
                    message: "wrong property returned: [" + n + "]"
                };
            } catch (r) {
                return {
                    enabled: !1,
                    message: r.message
                };
            }
            return {
                enabled: !0
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var H = e("babel-runtime/regenerator"), z = r(H), W = e("babel-runtime/helpers/asyncToGenerator"), U = r(W), V = e("babel-runtime/helpers/toConsumableArray"), q = r(V), Y = e("babel-runtime/core-js/promise"), K = r(Y), X = e("babel-runtime/helpers/defineProperty"), J = r(X), Z = e("babel-runtime/helpers/extends"), Q = r(Z), ee = e("babel-runtime/core-js/object/keys"), te = r(ee), ne = function() {
            var e = U["default"](z["default"].mark(function t() {
                return z["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (i()) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", null);

                      case 2:
                        return e.prev = 2, e.next = 5, K["default"].race([ new K["default"](function(e) {
                            return window.chrome.runtime.sendMessage("ping", e);
                        }), A(1e4).then(function() {
                            return "timeouted";
                        }) ]);

                      case 5:
                        return e.abrupt("return", e.sent);

                      case 8:
                        return e.prev = 8, e.t0 = e["catch"](2), e.abrupt("return", "orphaned");

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, t, this, [ [ 2, 8 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(), re = e("lodash"), oe = r(re), ie = e("non-crypto-hash"), ae = r(ie), le = e("local-storage"), se = r(le), ue = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], ce = 1e3, de = 60 * ce, fe = 60 * de, me = 24 * fe, pe = function(e) {
            return Math.round(Math.abs(new Date() - new Date(e)) / me);
        };
        n["default"] = {
            getBrowser: f,
            isFunction: g,
            chromeBgError: p,
            interval: b,
            declension: j,
            cancelInterval: h,
            bgPageReload: E,
            isFF: o,
            isChrome: i,
            isSafari: a,
            isSafari8: l,
            isGmail: k,
            isWindows: s,
            isBg: u,
            isBgOrPopup: d,
            isPopup: c,
            isGrammarlyEmail: m,
            guid: _,
            formatNumber: C,
            getRandomIntInclusive: M,
            stub: T,
            memoize: S,
            syncWait: N,
            promisify: $,
            delay: A,
            formatDate: P,
            createClass: D,
            versionComparator: O,
            isValidEmail: x,
            isBgAlive: ne,
            asyncCall: L,
            createChannel: I,
            normalizedHashCode: R,
            keyCode: F,
            _f: y,
            _F: w,
            getNextPingDate: G,
            pastDays: pe,
            SECOND: ce,
            MINUTE: de,
            HOUR: fe,
            DAY: me,
            checkLocalStorage: B
        }, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/core-js/promise": 14,
        "babel-runtime/helpers/asyncToGenerator": 18,
        "babel-runtime/helpers/defineProperty": 21,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/toConsumableArray": 27,
        "babel-runtime/regenerator": 124,
        "local-storage": "local-storage",
        lodash: "lodash",
        "non-crypto-hash": "non-crypto-hash"
    } ],
    219: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t, n, r) {
            var o = r ? t + "_forced" : t, i = {
                listeners: []
            }, a = function(e) {
                var t = i.listeners.indexOf(n);
                t > -1 && i.listeners.splice(t, 1);
            };
            if (("on" == e || "once" == e) && (i = v[o] || (v[o] = {
                domEventListener: function(t) {
                    h.emit(o, t), "once" == e && a(n);
                },
                listeners: []
            }), i.domEventListener.__wrapFunc = i.domEventListener.__wrapFunc || function(e) {
                i.domEventListener(m["default"]({
                    originalEvent: e,
                    preventDefault: b._f,
                    stopPropagation: b._f
                }, e.detail));
            }, 0 == i.listeners.length && (window.addEventListener(t, i.domEventListener, r), 
            window.addEventListener(t + "-gr", i.domEventListener.__wrapFunc, r)), i.listeners.push(n)), 
            "un" == e) {
                var l = v[o];
                if (!l) return;
                a(n), 0 == l.listeners.length && (window.removeEventListener(t, l.domEventListener, r), 
                window.removeEventListener(t + "-gr", l.domEventListener.__wrapFunc, r));
            }
            h[e](o, n);
        }
        function i(e) {
            return function(t, n, r) {
                if ("object" == ("undefined" == typeof t ? "undefined" : d["default"](t))) {
                    var i = !0, a = !1, s = void 0;
                    try {
                        for (var c, f = u["default"](l["default"](t)); !(i = (c = f.next()).done); i = !0) {
                            var m = c.value;
                            o(e, m, t[m], n);
                        }
                    } catch (p) {
                        a = !0, s = p;
                    } finally {
                        try {
                            !i && f["return"] && f["return"]();
                        } finally {
                            if (a) throw s;
                        }
                    }
                } else o(e, t, n, r);
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/keys"), l = r(a), s = e("babel-runtime/core-js/get-iterator"), u = r(s), c = e("babel-runtime/helpers/typeof"), d = r(c), f = e("babel-runtime/helpers/extends"), m = r(f), p = e("emitter"), g = r(p), b = e("./util"), h = g["default"]({}), v = {};
        n["default"] = {
            on: i("on"),
            off: i("un"),
            once: i("one")
        }, t.exports = n["default"];
    }, {
        "./util": 218,
        "babel-runtime/core-js/get-iterator": 3,
        "babel-runtime/core-js/object/keys": 11,
        "babel-runtime/helpers/extends": 22,
        "babel-runtime/helpers/typeof": 28,
        emitter: "emitter"
    } ]
}, {}, [ 127 ]);