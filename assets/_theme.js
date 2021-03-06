function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
}();
!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 53)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "matchesBreakpoint",
            value: function(e) {
                switch (e) {
                case "phone":
                    return window.matchMedia("screen and (max-width: 640px)").matches;
                case "tablet":
                    return window.matchMedia("screen and (min-width: 641px) and (max-width: 1023px)").matches;
                case "tablet-and-up":
                    return window.matchMedia("screen and (min-width: 641px)").matches;
                case "pocket":
                    return window.matchMedia("screen and (max-width: 1023px)").matches;
                case "lap":
                    return window.matchMedia("screen and (min-width: 1024px) and (max-width: 1279px)").matches;
                case "lap-and-up":
                    return window.matchMedia("screen and (min-width: 1024px)").matches;
                case "desk":
                    return window.matchMedia("screen and (min-width: 1280px)").matches;
                case "widescreen":
                    return window.matchMedia("screen and (min-width: 1440px)").matches;
                case "supports-hover":
                    return window.matchMedia("(-moz-touch-enabled: 0), (hover: hover)").matches
                }
            }
        }, {
            key: "getCurrentBreakpoint",
            value: function() {
                return window.matchMedia("screen and (max-width: 640px)").matches ? "phone" : window.matchMedia("screen and (min-width: 641px) and (max-width: 1023px)").matches ? "tablet" : window.matchMedia("screen and (min-width: 1024px) and (max-width: 1279px)").matches ? "lap" : window.matchMedia("screen and (min-width: 1280px)").matches ? "desk" : void 0
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "formatMoney",
            value: function(e, t) {
                function n(e, t) {
                    return null == e || e !== e ? t : e
                }
                function i(e, t, i, o) {
                    if (t = n(t, 2),
                    i = n(i, ","),
                    o = n(o, "."),
                    isNaN(e) || null == e)
                        return 0;
                    e = (e / 100).toFixed(t);
                    var a = e.split(".")
                      , r = a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i)
                      , s = a[1] ? o + a[1] : "";
                    return r + s
                }
                "string" == typeof e && (e = e.replace(".", ""));
                var o = /\{\{\s*(\w+)\s*\}\}/
                  , a = t || "${{amount}}"
                  , r = "";
                switch (a.match(o)[1]) {
                case "amount":
                    r = i(e, 2);
                    break;
                case "amount_no_decimals":
                    r = i(e, 0);
                    break;
                case "amount_with_space_separator":
                    r = i(e, 2, " ", ".");
                    break;
                case "amount_no_decimals_with_comma_separator":
                    r = i(e, 0, ",", ".");
                    break;
                case "amount_no_decimals_with_space_separator":
                    r = i(e, 0, " ");
                    break;
                case "amount_with_comma_separator":
                    r = i(e, 2, ".", ",")
                }
                return a.indexOf("with_comma_separator") !== -1 ? a.replace(o, r).replace(",00", "") : a.replace(o, r).replace(".00", "")
            }
        }, {
            key: "convertAll",
            value: function(e) {
                var t = this
                  , n = {
                    USD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} USD"
                    },
                    EUR: {
                        money_format: "&euro;{{amount}}",
                        money_with_currency_format: "&euro;{{amount}} EUR"
                    },
                    GBP: {
                        money_format: "&pound;{{amount}}",
                        money_with_currency_format: "&pound;{{amount}} GBP"
                    },
                    CAD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} CAD"
                    },
                    ALL: {
                        money_format: "Lek {{amount}}",
                        money_with_currency_format: "Lek {{amount}} ALL"
                    },
                    DZD: {
                        money_format: "DA {{amount}}",
                        money_with_currency_format: "DA {{amount}} DZD"
                    },
                    AOA: {
                        money_format: "Kz{{amount}}",
                        money_with_currency_format: "Kz{{amount}} AOA"
                    },
                    ARS: {
                        money_format: "${{amount_with_comma_separator}}",
                        money_with_currency_format: "${{amount_with_comma_separator}} ARS"
                    },
                    AMD: {
                        money_format: "{{amount}} AMD",
                        money_with_currency_format: "{{amount}} AMD"
                    },
                    AWG: {
                        money_format: "Afl{{amount}}",
                        money_with_currency_format: "Afl{{amount}} AWG"
                    },
                    AUD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} AUD"
                    },
                    BBD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} Bds"
                    },
                    AZN: {
                        money_format: "m.{{amount}}",
                        money_with_currency_format: "m.{{amount}} AZN"
                    },
                    BDT: {
                        money_format: "Tk {{amount}}",
                        money_with_currency_format: "Tk {{amount}} BDT"
                    },
                    BSD: {
                        money_format: "BS${{amount}}",
                        money_with_currency_format: "BS${{amount}} BSD"
                    },
                    BHD: {
                        money_format: "{{amount}} BD",
                        money_with_currency_format: "{{amount}} BHD"
                    },
                    BYR: {
                        money_format: "Br {{amount}}",
                        money_with_currency_format: "Br {{amount}} BYR"
                    },
                    BZD: {
                        money_format: "BZ${{amount}}",
                        money_with_currency_format: "BZ${{amount}} BZD"
                    },
                    BTN: {
                        money_format: "Nu {{amount}}",
                        money_with_currency_format: "Nu {{amount}} BTN"
                    },
                    BAM: {
                        money_format: "KM {{amount_with_comma_separator}}",
                        money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
                    },
                    BRL: {
                        money_format: "R$ {{amount_with_comma_separator}}",
                        money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
                    },
                    BOB: {
                        money_format: "Bs{{amount_with_comma_separator}}",
                        money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
                    },
                    BWP: {
                        money_format: "P{{amount}}",
                        money_with_currency_format: "P{{amount}} BWP"
                    },
                    BND: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} BND"
                    },
                    BGN: {
                        money_format: "{{amount}} ????????",
                        money_with_currency_format: "{{amount}} ???????? BGN"
                    },
                    MMK: {
                        money_format: "K{{amount}}",
                        money_with_currency_format: "K{{amount}} MMK"
                    },
                    KHR: {
                        money_format: "KHR{{amount}}",
                        money_with_currency_format: "KHR{{amount}}"
                    },
                    KYD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} KYD"
                    },
                    XAF: {
                        money_format: "FCFA{{amount}}",
                        money_with_currency_format: "FCFA{{amount}} XAF"
                    },
                    CLP: {
                        money_format: "${{amount_no_decimals}}",
                        money_with_currency_format: "${{amount_no_decimals}} CLP"
                    },
                    CNY: {
                        money_format: "&#165;{{amount}}",
                        money_with_currency_format: "&#165;{{amount}} CNY"
                    },
                    COP: {
                        money_format: "${{amount_with_comma_separator}}",
                        money_with_currency_format: "${{amount_with_comma_separator}} COP"
                    },
                    CRC: {
                        money_format: "&#8353; {{amount_with_comma_separator}}",
                        money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
                    },
                    HRK: {
                        money_format: "{{amount_with_comma_separator}} kn",
                        money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
                    },
                    CZK: {
                        money_format: "{{amount_with_comma_separator}} K&#269;",
                        money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
                    },
                    DKK: {
                        money_format: "{{amount_with_comma_separator}}",
                        money_with_currency_format: "kr.{{amount_with_comma_separator}}"
                    },
                    DOP: {
                        money_format: "RD$ {{amount}}",
                        money_with_currency_format: "RD$ {{amount}}"
                    },
                    XCD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "EC${{amount}}"
                    },
                    EGP: {
                        money_format: "LE {{amount}}",
                        money_with_currency_format: "LE {{amount}} EGP"
                    },
                    ETB: {
                        money_format: "Br{{amount}}",
                        money_with_currency_format: "Br{{amount}} ETB"
                    },
                    XPF: {
                        money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
                        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
                    },
                    FJD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "FJ${{amount}}"
                    },
                    GMD: {
                        money_format: "D {{amount}}",
                        money_with_currency_format: "D {{amount}} GMD"
                    },
                    GHS: {
                        money_format: "GH&#8373;{{amount}}",
                        money_with_currency_format: "GH&#8373;{{amount}}"
                    },
                    GTQ: {
                        money_format: "Q{{amount}}",
                        money_with_currency_format: "{{amount}} GTQ"
                    },
                    GYD: {
                        money_format: "G${{amount}}",
                        money_with_currency_format: "${{amount}} GYD"
                    },
                    GEL: {
                        money_format: "{{amount}} GEL",
                        money_with_currency_format: "{{amount}} GEL"
                    },
                    HNL: {
                        money_format: "L {{amount}}",
                        money_with_currency_format: "L {{amount}} HNL"
                    },
                    HKD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "HK${{amount}}"
                    },
                    HUF: {
                        money_format: "{{amount_no_decimals_with_comma_separator}}",
                        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
                    },
                    ISK: {
                        money_format: "{{amount_no_decimals}} kr",
                        money_with_currency_format: "{{amount_no_decimals}} kr ISK"
                    },
                    INR: {
                        money_format: "Rs. {{amount}}",
                        money_with_currency_format: "Rs. {{amount}}"
                    },
                    IDR: {
                        money_format: "{{amount_with_comma_separator}}",
                        money_with_currency_format: "Rp {{amount_with_comma_separator}}"
                    },
                    ILS: {
                        money_format: "{{amount}} NIS",
                        money_with_currency_format: "{{amount}} NIS"
                    },
                    JMD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} JMD"
                    },
                    JPY: {
                        money_format: "&#165;{{amount_no_decimals}}",
                        money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"
                    },
                    JEP: {
                        money_format: "&pound;{{amount}}",
                        money_with_currency_format: "&pound;{{amount}} JEP"
                    },
                    JOD: {
                        money_format: "{{amount}} JD",
                        money_with_currency_format: "{{amount}} JOD"
                    },
                    KZT: {
                        money_format: "{{amount}} KZT",
                        money_with_currency_format: "{{amount}} KZT"
                    },
                    KES: {
                        money_format: "KSh{{amount}}",
                        money_with_currency_format: "KSh{{amount}}"
                    },
                    KWD: {
                        money_format: "{{amount}} KD",
                        money_with_currency_format: "{{amount}} KWD"
                    },
                    KGS: {
                        money_format: "????????{{amount}}",
                        money_with_currency_format: "????????{{amount}}"
                    },
                    LVL: {
                        money_format: "Ls {{amount}}",
                        money_with_currency_format: "Ls {{amount}} LVL"
                    },
                    LBP: {
                        money_format: "L&pound;{{amount}}",
                        money_with_currency_format: "L&pound;{{amount}} LBP"
                    },
                    LTL: {
                        money_format: "{{amount}} Lt",
                        money_with_currency_format: "{{amount}} Lt"
                    },
                    MGA: {
                        money_format: "Ar {{amount}}",
                        money_with_currency_format: "Ar {{amount}} MGA"
                    },
                    MKD: {
                        money_format: "???????????? {{amount}}",
                        money_with_currency_format: "???????????? {{amount}} MKD"
                    },
                    MOP: {
                        money_format: "MOP${{amount}}",
                        money_with_currency_format: "MOP${{amount}}"
                    },
                    MVR: {
                        money_format: "Rf{{amount}}",
                        money_with_currency_format: "Rf{{amount}} MRf"
                    },
                    MXN: {
                        money_format: "$ {{amount}}",
                        money_with_currency_format: "$ {{amount}} MXN"
                    },
                    MYR: {
                        money_format: "RM{{amount}} MYR",
                        money_with_currency_format: "RM{{amount}} MYR"
                    },
                    MUR: {
                        money_format: "Rs {{amount}}",
                        money_with_currency_format: "Rs {{amount}} MUR"
                    },
                    MDL: {
                        money_format: "{{amount}} MDL",
                        money_with_currency_format: "{{amount}} MDL"
                    },
                    MAD: {
                        money_format: "{{amount}} dh",
                        money_with_currency_format: "Dh {{amount}} MAD"
                    },
                    MNT: {
                        money_format: "{{amount_no_decimals}} &#8366",
                        money_with_currency_format: "{{amount_no_decimals}} MNT"
                    },
                    MZN: {
                        money_format: "{{amount}} Mt",
                        money_with_currency_format: "Mt {{amount}} MZN"
                    },
                    NAD: {
                        money_format: "N${{amount}}",
                        money_with_currency_format: "N${{amount}} NAD"
                    },
                    NPR: {
                        money_format: "Rs{{amount}}",
                        money_with_currency_format: "Rs{{amount}} NPR"
                    },
                    ANG: {
                        money_format: "&fnof;{{amount}}",
                        money_with_currency_format: "{{amount}} NA&fnof;"
                    },
                    NZD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} NZD"
                    },
                    NIO: {
                        money_format: "C${{amount}}",
                        money_with_currency_format: "C${{amount}} NIO"
                    },
                    NGN: {
                        money_format: "&#8358;{{amount}}",
                        money_with_currency_format: "&#8358;{{amount}} NGN"
                    },
                    NOK: {
                        money_format: "kr {{amount_with_comma_separator}}",
                        money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
                    },
                    OMR: {
                        money_format: "{{amount_with_comma_separator}} OMR",
                        money_with_currency_format: "{{amount_with_comma_separator}} OMR"
                    },
                    PKR: {
                        money_format: "Rs.{{amount}}",
                        money_with_currency_format: "Rs.{{amount}} PKR"
                    },
                    PGK: {
                        money_format: "K {{amount}}",
                        money_with_currency_format: "K {{amount}} PGK"
                    },
                    PYG: {
                        money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
                        money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
                    },
                    PEN: {
                        money_format: "S/. {{amount}}",
                        money_with_currency_format: "S/. {{amount}} PEN"
                    },
                    PHP: {
                        money_format: "&#8369;{{amount}}",
                        money_with_currency_format: "&#8369;{{amount}} PHP"
                    },
                    PLN: {
                        money_format: "{{amount_with_comma_separator}} zl",
                        money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
                    },
                    QAR: {
                        money_format: "QAR {{amount_with_comma_separator}}",
                        money_with_currency_format: "QAR {{amount_with_comma_separator}}"
                    },
                    RON: {
                        money_format: "{{amount_with_comma_separator}} lei",
                        money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
                    },
                    RUB: {
                        money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
                        money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
                    },
                    RWF: {
                        money_format: "{{amount_no_decimals}} RF",
                        money_with_currency_format: "{{amount_no_decimals}} RWF"
                    },
                    WST: {
                        money_format: "WS$ {{amount}}",
                        money_with_currency_format: "WS$ {{amount}} WST"
                    },
                    SAR: {
                        money_format: "{{amount}} SR",
                        money_with_currency_format: "{{amount}} SAR"
                    },
                    STD: {
                        money_format: "Db {{amount}}",
                        money_with_currency_format: "Db {{amount}} STD"
                    },
                    RSD: {
                        money_format: "{{amount}} RSD",
                        money_with_currency_format: "{{amount}} RSD"
                    },
                    SCR: {
                        money_format: "Rs {{amount}}",
                        money_with_currency_format: "Rs {{amount}} SCR"
                    },
                    SGD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} SGD"
                    },
                    SYP: {
                        money_format: "S&pound;{{amount}}",
                        money_with_currency_format: "S&pound;{{amount}} SYP"
                    },
                    ZAR: {
                        money_format: "R {{amount}}",
                        money_with_currency_format: "R {{amount}} ZAR"
                    },
                    KRW: {
                        money_format: "&#8361;{{amount_no_decimals}}",
                        money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
                    },
                    LKR: {
                        money_format: "Rs {{amount}}",
                        money_with_currency_format: "Rs {{amount}} LKR"
                    },
                    SEK: {
                        money_format: "{{amount_no_decimals}} kr",
                        money_with_currency_format: "{{amount_no_decimals}} kr SEK"
                    },
                    CHF: {
                        money_format: "{{amount}} CHF",
                        money_with_currency_format: "{{amount}} CHF"
                    },
                    TWD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} TWD"
                    },
                    THB: {
                        money_format: "{{amount}} &#xe3f;",
                        money_with_currency_format: "{{amount}} &#xe3f; THB"
                    },
                    TZS: {
                        money_format: "{{amount}} TZS",
                        money_with_currency_format: "{{amount}} TZS"
                    },
                    TTD: {
                        money_format: "${{amount}}",
                        money_with_currency_format: "${{amount}} TTD"
                    },
                    TND: {
                        money_format: "{{amount}}",
                        money_with_currency_format: "{{amount}} DT"
                    },
                    TRY: {
                        money_format: "{{amount}}TL",
                        money_with_currency_format: "{{amount}}TL"
                    },
                    UGX: {
                        money_format: "Ush {{amount_no_decimals}}",
                        money_with_currency_format: "Ush {{amount_no_decimals}} UGX"
                    },
                    UAH: {
                        money_format: "???{{amount}}",
                        money_with_currency_format: "{{amount}} UAH"
                    },
                    AED: {
                        money_format: "Dhs. {{amount}}",
                        money_with_currency_format: "Dhs. {{amount}} AED"
                    },
                    UYU: {
                        money_format: "${{amount_with_comma_separator}}",
                        money_with_currency_format: "${{amount_with_comma_separator}} UYU"
                    },
                    VUV: {
                        money_format: "{{amount}} VT",
                        money_with_currency_format: "{{amount}} VT"
                    },
                    VEF: {
                        money_format: "Bs. {{amount_with_comma_separator}}",
                        money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
                    },
                    VND: {
                        money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
                        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
                    },
                    XBT: {
                        money_format: "{{amount_no_decimals}} BTC",
                        money_with_currency_format: "{{amount_no_decimals}} BTC"
                    },
                    XOF: {
                        money_format: "CFA{{amount}}",
                        money_with_currency_format: "CFA{{amount}} XOF"
                    },
                    ZMW: {
                        money_format: "K{{amount_no_decimals_with_comma_separator}}",
                        money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
                    }
                }
                  , i = window.theme.shopCurrency
                  , o = document.querySelector(".currency-selector").value;
                (e || document).querySelectorAll("[data-money-convertible]").forEach(function(e) {
                    if (e.hasAttribute("data-currency-" + i) || e.setAttribute("data-currency-" + i, e.innerHTML),
                    e.getAttribute("data-currency") !== o) {
                        var a = e.getAttribute("data-currency-" + i);
                        if (e.hasAttribute("data-currency-" + o))
                            e.innerHTML = e.getAttribute("data-currency-" + o);
                        else {
                            var r = n[o][window.theme.currencyConversionMoneyFormat] || "{{amount}}";
                            window.theme.moneyFormat.indexOf("with_comma_separator") !== -1 && (a = a.replace(/[,.]/g, function(e) {
                                return "," === e ? "." : ","
                            }));
                            var s = window.Currency.convert(100 * parseFloat(a.replace(/^[^0-9]+|[^0-9.]/g, "", ""), 10), i, o);
                            window.theme.currencyConversionRoundAmounts && (s = 100 * Math.round(s / 100));
                            var l = t.formatMoney(s, r);
                            e.innerHTML = l,
                            e.setAttribute("data-currency-" + o, l)
                        }
                        e.setAttribute("data-currency", o)
                    }
                }),
                localStorage.setItem("currency", o)
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "serialize",
            value: function(t) {
                function n(e, t) {
                    var i = e.lastIndexOf("[");
                    if (i === -1) {
                        var o = {};
                        return o[e] = t,
                        o
                    }
                    var a = e.substr(0, i)
                      , r = {};
                    return r[e.substring(i + 1, e.length - 1)] = t,
                    n(a, r)
                }
                for (var i = {}, o = 0, a = t.elements.length; o < a; o++) {
                    var r = t.elements[o];
                    if ("" !== r.name && !r.disabled && r.name && !r.disabled && (r.checked || /select|textarea/i.test(r.nodeName) || /hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(r.type))) {
                        var s = n(r.name, r.value);
                        i = e.extend(i, s)
                    }
                }
                return i
            }
        }, {
            key: "extend",
            value: function() {
                for (var t = {}, n = 0, i = function(n) {
                    for (var i in n)
                        n.hasOwnProperty(i) && ("[object Object]" === Object.prototype.toString.call(n[i]) ? t[i] = e.extend(t[i], n[i]) : t[i] = n[i])
                }; n < arguments.length; n++)
                    i(arguments[n]);
                return t
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "getSiblings",
            value: function(e, t) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = [], o = e; o = o.previousElementSibling; )
                    t && !o.matches(t) || i.push(o);
                for (n && i.push(e),
                o = e; o = o.nextElementSibling; )
                    t && !o.matches(t) || i.push(o);
                return i
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10)
      , o = n(17)
      , a = n(19)
      , r = n(18)
      , s = n(0)
      , l = function() {
        function e(t) {
            var n = this;
            if (_classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this._createCarousel(),
            this._initShopifyReviews(),
            this.options.isQuickView && this.options.showPaymentButton && window.Shopify.PaymentButton && Shopify.PaymentButton.init(),
            this.productVariants = new r["default"](this.element,this.options),
            this.options.showShippingEstimator && (this.shippingEstimator = new i["default"](this.element.querySelector(".shipping-estimator"),{
                singleProduct: !0
            })),
            this.options.showQuantitySelector) {
                var l = this.element.querySelector('select[name="quantity"]');
                l && (this.quantityPicker = new a["default"](l))
            }
            if (this.options.enableImageZoom) {
                this.driftObjects = [];
                var c = this.element.querySelector(".product__zoom-wrapper");
                s["default"].matchesBreakpoint("supports-hover") && this.element.querySelectorAll(".product-gallery__image").forEach(function(e) {
                    n.driftObjects.push(new Drift(e,{
                        containInline: "outside" === n.options.zoomEffect,
                        inlinePane: window.innerWidth < 1024 || "outside" !== n.options.zoomEffect,
                        hoverBoundingBox: "outside" === n.options.zoomEffect,
                        handleTouch: !1,
                        inlineOffsetY: window.innerWidth < 1024 ? -85 : 0,
                        paneContainer: c
                    }))
                })
            }
            var u = this.element.querySelector(".product-block-list__item--info .card");
            u && (this.element.querySelector(".product-block-list__wrapper").style.minHeight = u.clientHeight + "px",
            this.options.infoOverflowScroll && (this.infoOverflowScroller = new o["default"](u,{
                offsetTop: document.documentElement.style.getPropertyValue("--header-is-sticky") * parseInt(document.documentElement.style.getPropertyValue("--header-height") + 30),
                offsetBottom: 30
            }))),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.productVariants.destroy(),
                this.flickityInstance && this.flickityInstance.destroy(),
                this.options.showShippingEstimator && this.shippingEstimator.destroy(),
                this.options.infoOverflowScroll && this.infoOverflowScroller.destroy(),
                this.options.enableImageZoom && (this.driftObjects.forEach(function(e) {
                    e.destroy()
                }),
                document.querySelectorAll(".drift-bounding-box, .drift-zoom-pane").forEach(function(e) {
                    e.remove()
                })),
                this.delegateElement.off(),
                this.element.removeEventListener("variant:changed", this._onVariantChangedListener)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._onVariantChangedListener = this._onVariantChanged.bind(this),
                this.element.addEventListener("variant:changed", this._onVariantChangedListener)
            }
        }, {
            key: "_initShopifyReviews",
            value: function() {
                var e = this;
                Shopify.designMode && window.SPR && (window.SPR.initDomEls(),
                window.SPR.loadBadges(),
                window.SPR.loadProducts()),
                window.SPRCallbacks = {},
                window.SPRCallbacks.onFormSuccess = function() {
                    e.element.querySelector("#shopify-product-reviews .spr-form").classList.add("spr-form-submitted")
                }
                ,
                this.options.isQuickView && window.SPR && (window.SPR.initDomEls(),
                window.SPR.loadBadges(),
                this.options.showPaymentButton && window.Shopify.PaymentButton && Shopify.PaymentButton.init())
            }
        }, {
            key: "_createCarousel",
            value: function() {
                var e = this;
                if (this.productGalleryElement = this.element.querySelector(".product-gallery__carousel"),
                this.productGalleryCellsElements = this.productGalleryElement ? this.productGalleryElement.querySelectorAll(".product-gallery__carousel-item") : [],
                this.productGalleryElement && parseInt(this.productGalleryElement.getAttribute("data-image-count")) > 1) {
                    var t = [].slice.call(this.productGalleryCellsElements).filter(function(e) {
                        return !e.classList.contains("is-filtered")
                    })
                      , n = 0;
                    t.forEach(function(t, i) {
                        t.getAttribute("data-image-id") === e.productGalleryElement.getAttribute("data-initial-image-id") && (n = i)
                    }),
                    this.flickityInstance = new Flickity(this.productGalleryElement,{
                        prevNextButtons: !1,
                        pageDots: !1,
                        adaptiveHeight: !0,
                        fade: "fade" === this.options.galleryTransitionEffect,
                        cellSelector: ".product-gallery__carousel-item:not(.is-filtered)",
                        initialIndex: n
                    })
                }
                this.productThumbnailsListElement = this.element.querySelector(".product-gallery__thumbnail-list"),
                this.productThumbnailsListElement && this.flickityInstance && (this.productThumbnailsCellsElements = this.productThumbnailsListElement.querySelectorAll(".product-gallery__thumbnail"),
                this.delegateElement.on("click", ".product-gallery__thumbnail", this._onThumbnailClicked.bind(this)),
                this.flickityInstance.on("select", this._onGallerySlideChanged.bind(this)),
                this._onGallerySlideChanged(!1))
            }
        }, {
            key: "_onGallerySlideChanged",
            value: function() {
                var e = this
                  , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , n = null
                  , i = null;
                if (this.productThumbnailsCellsElements.forEach(function(t) {
                    t.classList.contains("is-nav-selected") && (n = t),
                    t.getAttribute("data-image-id") === e.flickityInstance.selectedElement.getAttribute("data-image-id") && (i = t)
                }),
                n.classList.remove("is-nav-selected"),
                i.classList.add("is-nav-selected"),
                s["default"].matchesBreakpoint("pocket")) {
                    var o = i.offsetLeft - (this.productThumbnailsListElement.parentNode.clientWidth - i.clientWidth) / 2;
                    this.productThumbnailsListElement.parentNode.scrollTo({
                        left: o,
                        behavior: t ? "smooth" : "auto"
                    })
                } else {
                    var a = i.offsetTop - (this.productThumbnailsListElement.clientHeight - i.clientHeight) / 2;
                    this.productThumbnailsListElement.scrollTo({
                        top: a,
                        behavior: t ? "smooth" : "auto"
                    })
                }
            }
        }, {
            key: "_onThumbnailClicked",
            value: function(e, t) {
                t.hasAttribute("data-media-position") ? this.flickityInstance.selectCell('[data-media-position="' + t.getAttribute("data-media-position") + '"]') : this.flickityInstance.selectCell('[data-image-id="' + t.getAttribute("data-image-id") + '"]')
            }
        }, {
            key: "_onVariantChanged",
            value: function(e) {
                var t = this
                  , n = e.detail.variant
                  , i = !1;
                fastdom.mutate(function() {
                    t.productGalleryCellsElements.forEach(function(e, o) {
                        if (e.hasAttribute("data-group-name")) {
                            var a = e.getAttribute("data-group-name");
                            t.options.productOptions.forEach(function(i, r) {
                                i.toLowerCase() === a && (n["option" + (r + 1)].toLowerCase() === e.getAttribute("data-group-value") || n.featured_image && n.featured_image.id === parseInt(e.getAttribute("data-image-id")) ? (e.classList.remove("is-filtered"),
                                t.productThumbnailsCellsElements[o].classList.remove("is-filtered")) : (e.classList.add("is-filtered"),
                                t.productThumbnailsCellsElements[o].classList.add("is-filtered")))
                            }),
                            i = !0
                        }
                    }),
                    i && (t.flickityInstance.deactivate(),
                    t.flickityInstance.activate()),
                    n && n.featured_image && t.flickityInstance.selectCell('[data-image-id="' + n.featured_image.id + '"]')
                })
            }
        }]),
        e
    }();
    t["default"] = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = {}
      , o = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "slideUp",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "height";
                e.style[n] = e.scrollHeight + "px",
                e.offsetHeight,
                e.style[n] = 0,
                i[e.id] && (e.removeEventListener("transitionend", i[e.id]),
                delete i[e.id]);
                var o = function a(n) {
                    "height" === n.propertyName && (e.removeEventListener("transitionend", a),
                    (t || function() {}
                    )())
                };
                e.addEventListener("transitionend", o)
            }
        }, {
            key: "slideDown",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "height";
                e.style[n] = e.scrollHeight + "px";
                var o = function a(o) {
                    if (o.propertyName === n) {
                        var r = "auto";
                        "max-height" === n && (r = "none"),
                        e.style[n] = r,
                        e.removeEventListener("transitionend", a),
                        delete i[e.id],
                        (t || function() {}
                        )()
                    }
                };
                e.addEventListener("transitionend", o),
                i[e.id] = o
            }
        }]),
        e
    }();
    t["default"] = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this._attachListeners(),
            this.recalculateSwatches()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off(),
                window.removeEventListener("resize", this._recalculateSwatchesListener)
            }
        }, {
            key: "recalculateSwatches",
            value: function() {
                var e = this;
                fastdom.measure(function() {
                    e.element.querySelectorAll(".product-item__swatch-list").forEach(function(e) {
                        var t = e.clientWidth
                          , n = parseInt(Math.min(t, 200))
                          , i = Math.floor(n / 30);
                        fastdom.mutate(function() {
                            var t = e.querySelectorAll(".color-swatch");
                            t.forEach(function(e, n) {
                                e.classList.remove("color-swatch--view-more"),
                                i === n + 1 && i !== t.length && e.classList.add("color-swatch--view-more")
                            })
                        })
                    })
                })
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._recalculateSwatchesListener = this.recalculateSwatches.bind(this),
                this.delegateElement.on("change", ".product-item__swatch-list .color-swatch__radio", this._colorChanged.bind(this)),
                window.addEventListener("resize", this._recalculateSwatchesListener)
            }
        }, {
            key: "_colorChanged",
            value: function(e, t) {
                var n = t.closest(".product-item")
                  , i = t.getAttribute("data-variant-url");
                n.querySelector(".product-item__image-wrapper").setAttribute("href", i),
                n.querySelector(".product-item__title").setAttribute("href", i);
                var o = n.querySelector(".product-item__primary-image");
                if (t.hasAttribute("data-image-url") && t.getAttribute("data-image-id") !== o.getAttribute("data-image-id")) {
                    var a = document.createElement("img");
                    a.className = "product-item__primary-image lazyload image--fade-in",
                    a.setAttribute("data-image-id", t.getAttribute("data-image-id")),
                    a.setAttribute("data-src", t.getAttribute("data-image-url")),
                    a.setAttribute("data-widths", t.getAttribute("data-image-widths")),
                    a.setAttribute("data-sizes", "auto"),
                    o.parentNode.style.paddingBottom = 100 / a.getAttribute("data-image-aspect-ratio") + "%",
                    o.parentNode.replaceChild(a, o)
                }
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, e),
            this.id = t,
            this.delegateRoot = new domDelegate.Delegate(document.documentElement),
            this.isOpen = !1,
            this.togglerElement = document.querySelector('[data-action="open-value-picker"][aria-controls="' + this.id + '"]'),
            this.onSelect = n.onValueSelect || function() {}
            ,
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateRoot.off()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateRoot.on("click", '[data-action="open-value-picker"][aria-controls="' + this.id + '"]', this._toggle.bind(this)),
                this.delegateRoot.on("click", '[data-action="close-value-picker"][aria-controls="' + this.id + '"]', this._toggle.bind(this)),
                this.delegateRoot.on("click", "#" + this.id + ' [data-action="select-value"]', this._selectValue.bind(this)),
                this.delegateRoot.on("click", this._detectOutsideClick.bind(this), !0)
            }
        }, {
            key: "_toggle",
            value: function(e) {
                this.isOpen ? this._close(e) : this._open(e)
            }
        }, {
            key: "_open",
            value: function(e) {
                if (document.querySelector('[data-action="open-value-picker"][aria-controls="' + this.id + '"]').setAttribute("aria-expanded", "true"),
                document.getElementById(this.id).setAttribute("aria-hidden", "false"),
                i["default"].matchesBreakpoint("phone")) {
                    var t = document.getElementById("shopify-section-header");
                    t.style.zIndex = "3"
                }
                this.isOpen = !0
            }
        }, {
            key: "_close",
            value: function(e) {
                document.querySelector('[data-action="open-value-picker"][aria-controls="' + this.id + '"]').setAttribute("aria-expanded", "false"),
                document.getElementById(this.id).setAttribute("aria-hidden", "true");
                var t = document.getElementById("shopify-section-header");
                t.style.zIndex = "",
                this.isOpen = !1
            }
        }, {
            key: "_selectValue",
            value: function(e, t) {
                this.onSelect(t.getAttribute("data-value")),
                this._close()
            }
        }, {
            key: "_detectOutsideClick",
            value: function(e) {
                this.isOpen && this.togglerElement !== e.target && !this.togglerElement.contains(e.target) && !e.target.closest(".value-picker__inner") && this.isOpen && this._close(e)
            }
        }]),
        e
    }();
    t["default"] = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "trapFocus",
            value: function(e, t) {
                this.listeners = this.listeners || {};
                var n = e.querySelector("[autofocus]") || e;
                e.setAttribute("tabindex", "-1"),
                n.focus(),
                this.listeners[t] = function(t) {
                    e === t.target || e.contains(t.target) || n.focus()
                }
                ,
                document.addEventListener("focusin", this.listeners[t])
            }
        }, {
            key: "removeTrapFocus",
            value: function(e, t) {
                e && e.removeAttribute("tabindex"),
                document.removeEventListener("focusin", this.listeners[t])
            }
        }, {
            key: "clearTrapFocus",
            value: function() {
                for (var e in this.listeners)
                    this.listeners.hasOwnProperty(e) && document.removeEventListener("focusin", this.listeners[e]);
                this.listeners = {}
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t, n) {
            _classCallCheck(this, e),
            this.countrySelect = t,
            this.provinceSelect = n,
            this.countrySelect && this.provinceSelect && (this._attachListeners(),
            this._initSelectors())
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.countrySelect && this.countrySelect.removeEventListener("change", this._onCountryChangedListener)
            }
        }, {
            key: "_initSelectors",
            value: function() {
                var e = this.countrySelect.getAttribute("data-default");
                if (e) {
                    for (var t = 0; t !== this.countrySelect.options.length; ++t)
                        if (this.countrySelect.options[t].text === e) {
                            this.countrySelect.selectedIndex = t;
                            break
                        }
                } else
                    this.countrySelect.selectedIndex = 0;
                var n = new Event("change",{
                    bubbles: !0
                });
                this.countrySelect.dispatchEvent(n);
                var i = this.provinceSelect.getAttribute("data-default");
                i && (this.provinceSelect.value = i)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._onCountryChangedListener = this._onCountryChanged.bind(this),
                this.countrySelect.addEventListener("change", this._onCountryChangedListener)
            }
        }, {
            key: "_onCountryChanged",
            value: function() {
                var e = this
                  , t = this.countrySelect.options[this.countrySelect.selectedIndex];
                if (t) {
                    var n = JSON.parse(t.getAttribute("data-provinces") || "[]");
                    if (this.provinceSelect.innerHTML = "",
                    0 === n.length)
                        return void (this.provinceSelect.closest(".form__input-wrapper").style.display = "none");
                    n.forEach(function(t) {
                        e.provinceSelect.options.add(new Option(t[1],t[0]))
                    }),
                    this.provinceSelect.closest(".form__input-wrapper").style.display = "block"
                }
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(9)
      , o = n(1)
      , a = n(2)
      , r = function() {
        function e(t, n) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = n,
            this.countrySelector = new i["default"](this.element.querySelector('[name="country"]'),this.element.querySelector('[name="province"]')),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off("click"),
                this.countrySelector.destroy()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("click", '[data-action="estimate-shipping"]', this._fetchRates.bind(this))
            }
        }, {
            key: "_fetchRates",
            value: function() {
                document.dispatchEvent(new CustomEvent("theme:loading:start")),
                this.options.singleProduct ? this._fetchRatesForProduct() : this._fetchRatesForCart()
            }
        }, {
            key: "_fetchRatesForCart",
            value: function() {
                var e = this
                  , t = this.element.querySelector('[name="country"]').value
                  , n = this.element.querySelector('[name="province"]').value
                  , i = this.element.querySelector('[name="zip"]').value;
                fetch(window.theme.localeRootUrl + "/cart/shipping_rates.json?shipping_address[zip]=" + i + "&shipping_address[country]=" + t + "&shipping_address[province]=" + n, {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(t) {
                    document.dispatchEvent(new CustomEvent("theme:loading:end")),
                    t.json().then(function(n) {
                        e._formatResults(t.ok, n)
                    })
                })
            }
        }, {
            key: "_fetchRatesForProduct",
            value: function() {
                var e = this
                  , t = this._getCookie("cart")
                  , n = "temp-cart-cookie___" + Date.now() + parseInt(1e3 * Math.random())
                  , i = "fake-cart-cookie___" + Date.now() + parseInt(1e3 * Math.random());
                if (t || (this._updateCartCookie(n),
                t = this._getCookie("cart")),
                !(t.length < 32)) {
                    this._updateCartCookie(i);
                    var o = document.querySelector('form[action*="/cart/add"]');
                    fetch(window.theme.localeRootUrl + "/cart/add.js", {
                        body: JSON.stringify(a["default"].serialize(o)),
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        method: "POST"
                    }).then(function(n) {
                        n.json().then(function() {
                            var n = e.element.querySelector('[name="country"]').value
                              , i = e.element.querySelector('[name="province"]').value
                              , o = e.element.querySelector('[name="zip"]').value;
                            fetch(window.theme.localeRootUrl + "/cart/shipping_rates.json?shipping_address[zip]=" + o + "&shipping_address[country]=" + n + "&shipping_address[province]=" + i, {
                                credentials: "same-origin",
                                method: "GET"
                            }).then(function(n) {
                                document.dispatchEvent(new CustomEvent("theme:loading:end")),
                                n.json().then(function(t) {
                                    e._formatResults(n.ok, t)
                                }),
                                e._updateCartCookie(t)
                            })["catch"](function() {
                                e._updateCartCookie(t)
                            })
                        })["catch"](function() {
                            e._updateCartCookie(t),
                            document.dispatchEvent(new CustomEvent("theme:loading:end"))
                        })
                    })
                }
            }
        }, {
            key: "_formatResults",
            value: function(e, t) {
                var n = this.element.querySelector(".shipping-estimator__results");
                if (n.innerHTML = "",
                e) {
                    var i = t.shipping_rates;
                    if (0 === i.length)
                        n.innerHTML = "<p>" + window.languages.shippingEstimatorNoResults + "</p>";
                    else {
                        1 === i.length ? n.innerHTML = "<p>" + window.languages.shippingEstimatorOneResult + "</p>" : n.innerHTML = "<p>" + window.languages.shippingEstimatorMultipleResults.replace("{{count}}", i.length) + "</p>";
                        var a = "";
                        i.forEach(function(e) {
                            a += "<li>" + e.name + ": " + o["default"].formatMoney(e.price, window.theme.moneyFormat) + "</li>"
                        }),
                        n.innerHTML += "<ul>" + a + "</ul>"
                    }
                } else {
                    n.innerHTML = "<p>" + window.languages.shippingEstimatorErrors + "</p>";
                    var r = "";
                    Object.keys(t).forEach(function(e) {
                        r += '<li class="alert__list-item">' + e + " " + t[e] + "</li>"
                    }),
                    n.innerHTML += "<ul>" + r + "</ul>"
                }
                n.style.display = "block"
            }
        }, {
            key: "_getCookie",
            value: function(e) {
                var t = "; " + document.cookie
                  , n = t.split("; " + e + "=");
                if (2 === n.length)
                    return n.pop().split(";").shift()
            }
        }, {
            key: "_updateCartCookie",
            value: function(e) {
                var t = new Date;
                t.setTime(t.getTime() + 12096e5),
                document.cookie = "cart=" + e + "; expires=" + t.toUTCString() + "; path=/"
            }
        }]),
        e
    }();
    t["default"] = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(1)
      , a = function() {
        function e(t, n) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.delegateRoot = new domDelegate.Delegate(document.documentElement),
            this.options = n,
            this.miniCartElement = this.element.querySelector(".mini-cart"),
            this.isMiniCartOpen = !1,
            "cart" !== window.theme.template && this.miniCartElement && (this.miniCartToggleElement = this.element.querySelector('[aria-controls="' + this.miniCartElement.id + '"]'),
            this._checkMiniCartScrollability()),
            this.itemCount = window.theme.cartCount,
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off(),
                this.delegateRoot.off(),
                window.removeEventListener("resize", this._calculateMiniCartHeightListener)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._calculateMiniCartHeightListener = this._calculateMiniCartHeight.bind(this),
                "cart" !== window.theme.template && "page" !== window.theme.cartType && (this.delegateElement.on("click", '[data-action="toggle-mini-cart"]', this._toggleMiniCart.bind(this)),
                this.delegateRoot.on("click", this._onClick.bind(this)),
                window.addEventListener("resize", this._calculateMiniCartHeightListener)),
                this.delegateRoot.on("click", '[data-action="decrease-quantity"]', this._updateQuantity.bind(this)),
                this.delegateRoot.on("click", '[data-action="increase-quantity"]', this._updateQuantity.bind(this)),
                this.delegateRoot.on("change", ".quantity-selector__value", this._updateQuantity.bind(this)),
                this.delegateRoot.on("keyup", ".quantity-selector__value", this._updateQuantitySize.bind(this)),
                this.delegateRoot.on("product:added", this._onProductAdded.bind(this)),
                this.delegateRoot.on("cart:refresh", this._onCartRefresh.bind(this))
            }
        }, {
            key: "_toggleMiniCart",
            value: function(e) {
                e && e.preventDefault(),
                this.isMiniCartOpen ? this._closeMiniCart() : this._openMiniCart()
            }
        }, {
            key: "_openMiniCart",
            value: function() {
                this.miniCartToggleElement.setAttribute("aria-expanded", "true"),
                "phone" === i["default"].getCurrentBreakpoint() && this.miniCartToggleElement.querySelector(".header__cart-icon").setAttribute("aria-expanded", "true"),
                this.miniCartElement.setAttribute("aria-hidden", "false"),
                this.isMiniCartOpen = !0,
                this._calculateMiniCartHeight()
            }
        }, {
            key: "_closeMiniCart",
            value: function() {
                this.miniCartToggleElement.setAttribute("aria-expanded", "false"),
                "phone" === i["default"].getCurrentBreakpoint() && (this.miniCartToggleElement.querySelector(".header__cart-icon").setAttribute("aria-expanded", "false"),
                this.miniCartElement.style.maxHeight = ""),
                this.miniCartElement.setAttribute("aria-hidden", "true"),
                this.isMiniCartOpen = !1
            }
        }, {
            key: "_calculateMiniCartHeight",
            value: function() {
                if ("phone" === i["default"].getCurrentBreakpoint())
                    if (this.isMiniCartOpen) {
                        var e = window.innerHeight - document.querySelector(".header").getBoundingClientRect().bottom;
                        this.miniCartElement.style.maxHeight = e + "px";
                        var t = this.miniCartElement.querySelector(".mini-cart__content")
                          , n = this.miniCartElement.querySelector(".mini-cart__recap");
                        n && (t.style.maxHeight = e - n.clientHeight + "px")
                    } else
                        this.miniCartElement.style.maxHeight = "",
                        this.miniCartElement.querySelector(".mini-cart__content").style.maxHeight = "";
                else
                    this.miniCartElement.style.maxHeight = "",
                    this.miniCartElement.querySelector(".mini-cart__content").style.maxHeight = ""
            }
        }, {
            key: "_updateQuantity",
            value: function(e, t) {
                var n = this
                  , i = 1;
                i = "INPUT" === t.tagName ? parseInt(t.value) : parseInt(t.getAttribute("data-quantity")),
                document.dispatchEvent(new CustomEvent("theme:loading:start")),
                fetch(window.theme.localeRootUrl + "/cart/change.js", {
                    body: JSON.stringify({
                        id: t.getAttribute("data-line-id"),
                        quantity: i
                    }),
                    credentials: "same-origin",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function(e) {
                    e.json().then(function(e) {
                        n.itemCount = e.item_count,
                        n._rerender(!1).then(function() {
                            document.dispatchEvent(new CustomEvent("theme:loading:end"))
                        })
                    })
                }),
                e.preventDefault()
            }
        }, {
            key: "_updateQuantitySize",
            value: function(e, t) {
                t.setAttribute("size", Math.max(t.value.length, 2))
            }
        }, {
            key: "_rerender",
            value: function() {
                var e = this
                  , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , n = "";
                return n = "cart" !== window.theme.template ? window.theme.localeRootUrl + "/cart?view=mini-cart&timestamp=" + Date.now() : window.theme.localeRootUrl + "/cart?timestamp=" + Date.now(),
                fetch(n, {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(n) {
                    e.element.querySelector(".header__cart-count").textContent = e.itemCount,
                    "cart" !== window.theme.template ? n.text().then(function(t) {
                        var n = document.createElement("div");
                        n.innerHTML = t;
                        var i = e.miniCartElement.querySelector(".mini-cart__line-item-list")
                          , o = null;
                        i && (o = i.scrollTop),
                        e.miniCartElement.innerHTML = n.querySelector(".mini-cart").innerHTML;
                        var a = e.miniCartElement.querySelector(".mini-cart__line-item-list");
                        a && null !== o && (a.scrollTop = o),
                        e._checkMiniCartScrollability(),
                        e._calculateMiniCartHeight(),
                        e.element.dispatchEvent(new CustomEvent("cart:rerendered"))
                    }) : n.text().then(function(n) {
                        var i = document.createElement("div");
                        i.innerHTML = n;
                        var o = document.querySelector('[data-section-type="cart"]');
                        o.innerHTML = i.querySelector('[data-section-type="cart"]').innerHTML,
                        t && window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }),
                        window.SPR && (window.SPR.initDomEls(),
                        window.SPR.loadBadges()),
                        e.element.dispatchEvent(new CustomEvent("cart:rerendered",{
                            bubbles: !0
                        }))
                    }),
                    window.theme.currencyConversionEnabled && o["default"].convertAll(e.element)
                })
            }
        }, {
            key: "_checkMiniCartScrollability",
            value: function() {
                var e = this.miniCartElement.querySelector(".mini-cart__line-item-list");
                e && e.scrollHeight > e.clientHeight && e.classList.add("is-scrollable")
            }
        }, {
            key: "_onProductAdded",
            value: function(e) {
                var t = this;
                this.itemCount += e.detail.quantity,
                this._onCartRefresh().then(function() {
                    t.options.useStickyHeader && "cart" !== window.theme.template && t._openMiniCart()
                })
            }
        }, {
            key: "_onCartRefresh",
            value: function() {
                return this._rerender().then(function() {
                    document.dispatchEvent(new CustomEvent("theme:loading:end"))
                })
            }
        }, {
            key: "_onClick",
            value: function(e) {
                this.miniCartElement && !this.element.contains(e.target) && this._closeMiniCart()
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = document.getElementById("mobile-collection-filters"),
            this.delegateRoot = new domDelegate.Delegate(document.documentElement),
            this.options = t,
            this.element && this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateRoot.off()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateRoot.on("click", '[aria-controls="mobile-collection-filters"][data-action="open-drawer"]', this.open.bind(this)),
                this.delegateRoot.on("click", '#mobile-collection-filters [data-action="close-drawer"]', this.close.bind(this)),
                document.addEventListener("collection-filter:close", this.close.bind(this)),
                document.addEventListener("click", this._detectOutsideClick.bind(this)),
                window.addEventListener("resize", this._computeDrawerHeight.bind(this))
            }
        }, {
            key: "open",
            value: function(e) {
                e && e.stopPropagation(),
                this._computeDrawerHeight(),
                document.querySelector('[aria-controls="mobile-collection-filters"]').setAttribute("aria-expanded", "true"),
                document.getElementById("mobile-collection-filters").setAttribute("aria-hidden", "false")
            }
        }, {
            key: "close",
            value: function(e) {
                e && e.stopPropagation(),
                document.querySelector('[aria-controls="mobile-collection-filters"]').setAttribute("aria-expanded", "false"),
                document.getElementById("mobile-collection-filters").setAttribute("aria-hidden", "true")
            }
        }, {
            key: "_computeDrawerHeight",
            value: function() {
                document.getElementById("mobile-collection-filters").querySelector(".collection-drawer").style.maxHeight = window.innerHeight + "px"
            }
        }, {
            key: "_filtersHaveChanged",
            value: function(e) {
                var t = this;
                this.element && fastdom.mutate(function() {
                    var n = t.element.querySelector(".collection-drawer__filter-count");
                    n.innerText = "(" + e.length + ")",
                    n.style.display = 0 === e.length ? "none" : "inline",
                    t.element.querySelector('[data-action="clear-tags"]').style.display = 0 === e.length ? "none" : "block",
                    "group" === t.options.filterType && t.element.querySelectorAll(".collection__filter-item-active").forEach(function(e) {
                        var t = e.closest(".collection__filter-group")
                          , n = t.querySelector(".is-selected[data-tag]");
                        n ? (e.style.display = "block",
                        e.innerText = n.getAttribute("data-tag-user")) : e.style.display = "none"
                    })
                })
            }
        }, {
            key: "_detectOutsideClick",
            value: function(e) {
                e.target.closest(".collection-drawer__inner") || this.close()
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3)
      , o = n(0)
      , a = function() {
        function e(t, n, i) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.delegateRoot = new domDelegate.Delegate(document.documentElement),
            this.useInlineNavigation = "inline" === n,
            this.isNavigationVisible = this.useInlineNavigation,
            this.openTrigger = i,
            o["default"].matchesBreakpoint("supports-hover") || (this.openTrigger = "click"),
            this.openItems = [],
            this.dropdownActivationTimeouts = {},
            this.dropdownDeactivationTimeouts = {},
            this.DROPDOWN_TIMEOUT = 100,
            this._attachListeners(),
            this.useInlineNavigation && this._setupInlineNavigation()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off(),
                this.delegateRoot.off()
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                var t = this;
                this.useInlineNavigation || this._openNavigation(),
                i["default"].getSiblings(e.target.parentNode, ".is-dropdown-open").forEach(function(n) {
                    t._deactivateDropdown(e, n.querySelector('[role="menuitem"][aria-haspopup]'))
                }),
                this._activateDropdown(e, e.target.previousElementSibling)
            }
        }, {
            key: "onBlockDeselect",
            value: function(e) {
                this.useInlineNavigation || this._closeNavigation(),
                this._deactivateDropdown(e, e.target.parentNode)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("focusout", this._onFocusOut.bind(this)),
                this.delegateRoot.on("click", this._onClick.bind(this)),
                this.delegateElement.on("click", '[data-action="toggle-menu"]', this._toggleNavigation.bind(this)),
                "hover" === this.openTrigger ? (this.delegateElement.on("focusin", '[role="menuitem"][aria-haspopup]', this._activateDropdown.bind(this)),
                this.delegateElement.on("mouseover", '[role="menuitem"][aria-haspopup]', this._activateDropdown.bind(this)),
                this.delegateElement.on("mouseover", '[role="menu"][aria-hidden="false"]', this._blockDropdownDeactivation.bind(this)),
                this.delegateElement.on("focusout", ".is-dropdown-open", this._deactivateDropdown.bind(this)),
                this.delegateElement.on("mouseout", ".is-dropdown-open", this._deactivateDropdown.bind(this))) : this.delegateElement.on("click", '[role="menuitem"][aria-haspopup]', this._toggleDropdown.bind(this))
            }
        }, {
            key: "_onFocusOut",
            value: function(e) {
                null === e.relatedTarget || this.element.contains(e.relatedTarget) || this._closeNavigation()
            }
        }, {
            key: "_onClick",
            value: function(e) {
                this.element.contains(e.target) || this._closeNavigation()
            }
        }, {
            key: "_openNavigation",
            value: function() {
                this.useInlineNavigation || (this.element.querySelector('[data-action="toggle-menu"]').setAttribute("aria-expanded", "true"),
                this.element.querySelector('[role="menu"]').setAttribute("aria-hidden", "false"),
                this.isNavigationVisible = !0)
            }
        }, {
            key: "_closeNavigation",
            value: function() {
                var e = this;
                if (this.useInlineNavigation || (this.element.querySelector('[data-action="toggle-menu"]').setAttribute("aria-expanded", "false"),
                this.element.querySelector('[role="menu"]').setAttribute("aria-hidden", "true")),
                this.isNavigationVisible = !1,
                "click" === this.openTrigger) {
                    var t = this.openItems.slice(0);
                    t.forEach(function(t) {
                        e._deactivateDropdown(event, t)
                    })
                }
            }
        }, {
            key: "_toggleNavigation",
            value: function(e) {
                this.isNavigationVisible ? this._closeNavigation() : this._openNavigation()
            }
        }, {
            key: "_toggleDropdown",
            value: function(e, t) {
                "false" === t.getAttribute("aria-expanded") && e.preventDefault(),
                "true" === t.getAttribute("aria-expanded") ? "#" === t.getAttribute("href") && (e.preventDefault(),
                this._deactivateDropdown(e, t.closest(".is-dropdown-open"))) : this._activateDropdown(e, t)
            }
        }, {
            key: "_activateDropdown",
            value: function(e, t) {
                var n = this;
                if ("click" === this.openTrigger) {
                    var o = this.openItems.slice(0);
                    o.forEach(function(i) {
                        i.contains(t) || n._deactivateDropdown(e, i)
                    })
                }
                var a = i["default"].getSiblings(t, "[aria-hidden]")[0]
                  , r = function() {
                    if (t.setAttribute("aria-expanded", "true"),
                    t.parentNode.classList.add("is-dropdown-open"),
                    a.setAttribute("aria-hidden", "false"),
                    "hover" === n.openTrigger && n.dropdownDeactivationTimeouts[a.id] && (clearTimeout(n.dropdownDeactivationTimeouts[a.id]),
                    delete n.dropdownDeactivationTimeouts[a.id]),
                    n.useInlineNavigation) {
                        var e = window.innerWidth
                          , i = !1;
                        a.querySelectorAll(".nav-dropdown").forEach(function(t) {
                            t.getBoundingClientRect().right > e && (i = !0)
                        }),
                        i && a.classList.add("nav-dropdown--inverse")
                    }
                    t.closest('[role="menu"]').classList.add("nav-dropdown--glued"),
                    a.classList.contains("mega-menu") && n._setupMegaMenu(a),
                    "click" === n.openTrigger && n.openItems.push(t.parentNode)
                };
                if ("click" === this.openTrigger)
                    r();
                else {
                    for (var s in this.dropdownActivationTimeouts)
                        this.dropdownActivationTimeouts.hasOwnProperty(s) && (clearTimeout(this.dropdownActivationTimeouts[s]),
                        delete this.dropdownActivationTimeouts[s]);
                    r()
                }
            }
        }, {
            key: "_deactivateDropdown",
            value: function(e, t) {
                var n = this;
                if ("hover" !== this.openTrigger || !t.contains(e.relatedTarget)) {
                    var i = t.querySelector("[aria-hidden]")
                      , o = function() {
                        t.classList.remove("is-dropdown-open"),
                        t.querySelector('[role="menuitem"]').setAttribute("aria-expanded", "false");
                        var i = t.querySelector("[aria-hidden]");
                        if (i.setAttribute("aria-hidden", "true"),
                        t.closest('[role="menu"]').classList.remove("nav-dropdown--glued"),
                        "click" === n.openTrigger) {
                            t.querySelectorAll(".is-dropdown-open").forEach(function(t) {
                                n._deactivateDropdown(e, t);
                                var i = n.openItems.indexOf(t);
                                i > -1 && n.openItems.splice(i, 1)
                            });
                            var o = n.openItems.indexOf(t);
                            o > -1 && n.openItems.splice(o, 1)
                        }
                    };
                    "click" === this.openTrigger ? o() : this.dropdownDeactivationTimeouts[i.id] = setTimeout(function() {
                        o(),
                        delete n.dropdownDeactivationTimeouts[i.id]
                    }, this.DROPDOWN_TIMEOUT)
                }
            }
        }, {
            key: "_blockDropdownDeactivation",
            value: function(e, t) {
                if (void 0 !== this.dropdownDeactivationTimeouts[t.id]) {
                    clearTimeout(this.dropdownDeactivationTimeouts[t.id]),
                    delete this.dropdownDeactivationTimeouts[t.id];
                    for (var n in this.dropdownActivationTimeouts)
                        this.dropdownActivationTimeouts.hasOwnProperty(n) && (clearTimeout(this.dropdownActivationTimeouts[n]),
                        delete this.dropdownActivationTimeouts[n])
                }
            }
        }, {
            key: "_setupMegaMenu",
            value: function(e) {
                if (!this.useInlineNavigation) {
                    var t = e.closest(".nav-dropdown").clientWidth;
                    e.style.maxWidth = Math.min(1400 - t, parseInt(window.innerWidth - t - 80)) + "px"
                }
            }
        }, {
            key: "_setupInlineNavigation",
            value: function() {
                this.element.querySelectorAll(".mega-menu").forEach(function(e) {
                    e.closest(".nav-bar__item").classList.add("nav-bar__item--static")
                })
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(t.getAttribute("data-popup-settings")),
            this.hasOpenOnceInCurrentPage = !1;
            try {
                "#exit-popup" === window.location.hash && this._openPopup()
            } catch (n) {}
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                var e = this;
                i["default"].matchesBreakpoint("supports-hover") && (this.delegateElement.on("click", '[data-action="close-popup"]', this._closePopup.bind(this)),
                document.addEventListener("mouseleave", function() {
                    e.hasOpenOnceInCurrentPage || (!e.options.showOnlyOnce || e.options.showOnlyOnce && null === localStorage.getItem("themeExitPopup")) && e._openPopup()
                }),
                this._clickOutsideListener = this._checkClickOutside.bind(this))
            }
        }, {
            key: "_openPopup",
            value: function() {
                window.theme.isNewsletterPopupOpen || (this.element.setAttribute("aria-hidden", "false"),
                localStorage.setItem("themeExitPopup", "true"),
                this.hasOpenOnceInCurrentPage = !0,
                window.theme.isExitPopupOpen = !0,
                this.delegateElement.on("click", this._clickOutsideListener))
            }
        }, {
            key: "_closePopup",
            value: function() {
                this.element.setAttribute("aria-hidden", "true"),
                window.theme.isExitPopupOpen = !1,
                this.delegateElement.off("click", this._clickOutsideListener)
            }
        }, {
            key: "_checkClickOutside",
            value: function(e) {
                this.element.contains(e.target) && this.element !== e.target || this._closePopup()
            }
        }]),
        e
    }();
    t["default"] = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.delegateRoot = new domDelegate.Delegate(document.documentElement),
            this.mobileMenuElement = this.element.querySelector(".mobile-menu"),
            this.mobileMenuToggleElement = this.element.querySelector('[aria-controls="' + this.mobileMenuElement.id + '"]'),
            this.isOpen = !1,
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off(),
                this.delegateRoot.off(),
                window.removeEventListener("resize", this._calculatMaxHeightListener)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._calculatMaxHeightListener = this._calculateMaxHeight.bind(this),
                this.delegateElement.on("click", '[data-action="toggle-menu"]', this._toggleMenu.bind(this)),
                this.delegateElement.on("click", '[data-action="open-panel"]', this._openPanel.bind(this)),
                this.delegateElement.on("click", '[data-action="close-panel"]', this._closePanel.bind(this)),
                this.delegateRoot.on("click", this._onWindowClick.bind(this)),
                window.addEventListener("resize", this._calculatMaxHeightListener)
            }
        }, {
            key: "_toggleMenu",
            value: function() {
                this.isOpen = !this.isOpen,
                this.mobileMenuToggleElement.setAttribute("aria-expanded", this.isOpen ? "true" : "false"),
                this.mobileMenuElement.setAttribute("aria-hidden", this.isOpen ? "false" : "true"),
                this.isOpen ? this._calculateMaxHeight() : (this.mobileMenuElement.style.maxHeight = "",
                this.element.querySelectorAll(".mobile-menu__panel.is-open").forEach(function(e) {
                    e.classList.remove("is-open")
                }))
            }
        }, {
            key: "_openPanel",
            value: function(e, t) {
                t.setAttribute("aria-expanded", "true"),
                this.element.querySelector("#" + t.getAttribute("aria-controls")).classList.add("is-open")
            }
        }, {
            key: "_closePanel",
            value: function(e, t) {
                var n = t.closest(".mobile-menu__panel.is-open");
                n.classList.remove("is-open"),
                this.element.querySelector('[aria-controls="' + n.id + '"]').setAttribute("aria-expanded", "false")
            }
        }, {
            key: "_calculateMaxHeight",
            value: function() {
                this.isOpen && (this.mobileMenuElement.style.maxHeight = window.innerHeight - document.querySelector(".header").getBoundingClientRect().bottom + "px")
            }
        }, {
            key: "_onWindowClick",
            value: function(e) {
                this.isOpen && !this.element.contains(e.target) && this._toggleMenu()
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(t.getAttribute("data-popup-settings"));
            try {
                "#newsletter-popup" === window.location.hash ? this._openPopup() : (!this.options.showOnlyOnce || this.options.showOnlyOnce && null === localStorage.getItem("themePopup")) && setTimeout(this._openPopup.bind(this), 1e3 * this.options.apparitionDelay)
            } catch (n) {}
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("click", '[data-action="close-popup"]', this._closePopup.bind(this)),
                this._clickOutsideListener = this._checkClickOutside.bind(this)
            }
        }, {
            key: "_openPopup",
            value: function() {
                window.theme.isExitPopupOpen || (this.element.setAttribute("aria-hidden", "false"),
                localStorage.setItem("themePopup", "true"),
                window.theme.isNewsletterPopupOpen = !0,
                this.delegateElement.on("click", this._clickOutsideListener))
            }
        }, {
            key: "_closePopup",
            value: function() {
                this.element.setAttribute("aria-hidden", "true"),
                window.theme.isNewsletterPopupOpen = !1,
                this.delegateElement.off("click")
            }
        }, {
            key: "_checkClickOutside",
            value: function(e) {
                this.element.contains(e.target) && this.element !== e.target || this._closePopup()
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t, n) {
            _classCallCheck(this, e),
            t && (this.element = t,
            this.options = n,
            this.lastKnownY = window.scrollY,
            this.currentTop = 0,
            this.initialTopOffset = n.offsetTop || parseInt(window.getComputedStyle(this.element).top),
            this._attachListeners())
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                window.removeEventListener("scroll", this._checkPositionListener)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._checkPositionListener = this._checkPosition.bind(this),
                window.addEventListener("scroll", this._checkPositionListener)
            }
        }, {
            key: "_checkPosition",
            value: function() {
                var e = this;
                fastdom.measure(function() {
                    var t = e.element.getBoundingClientRect()
                      , n = t.top + window.scrollY - e.element.offsetTop + e.initialTopOffset
                      , i = e.element.clientHeight - window.innerHeight + (e.options.offsetBottom || 0);
                    window.scrollY < e.lastKnownY ? e.currentTop -= window.scrollY - e.lastKnownY : e.currentTop += e.lastKnownY - window.scrollY,
                    e.currentTop = Math.min(Math.max(e.currentTop, -i), n, e.initialTopOffset),
                    e.lastKnownY = window.scrollY
                }),
                fastdom.mutate(function() {
                    e.element.style.top = e.currentTop + "px"
                })
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1)
      , o = n(2)
      , a = n(5)
      , r = function() {
        function e(t, n) {
            var i = this;
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = n;
            var o = this.element.querySelector("[data-product-json]");
            if (o) {
                var a = JSON.parse(o.innerHTML);
                this.productData = a.product,
                this.productOptionsWithValues = a.options_with_values,
                this.variantsInventories = a.inventories || {},
                this.variantSelectors = this.element.querySelectorAll(".product-form__option[data-selector-type]"),
                this.masterSelector = this.element.querySelector("#product-select-" + this.productData.id),
                this.productData.variants.forEach(function(e) {
                    e.id === a.selected_variant_id && (i.currentVariant = e,
                    i.option1 = e.option1,
                    i.option2 = e.option2,
                    i.option3 = e.option3)
                })
            }
            this._updateSelectors(this.currentVariant),
            this._setupStockCountdown(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off("click")
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("change", ".product-form__single-selector", this._onOptionChanged.bind(this)),
                this.delegateElement.on("click", '[data-action="add-to-cart"]', this._addToCart.bind(this))
            }
        }, {
            key: "_onVariantChanged",
            value: function(e, t) {
                this._updateProductPrices(t, e),
                this._updateInventory(t, e),
                this._updateSku(t, e),
                this._updateDiscountLabel(t, e),
                this._updateUnitPrice(t, e),
                this._updateSelectors(t, e),
                this._updateAddToCartButton(t, e),
                window.theme.currencyConversionEnabled && i["default"].convertAll(this.element),
                this.element.dispatchEvent(new CustomEvent("variant:changed",{
                    bubbles: !0,
                    detail: {
                        variant: t,
                        previousVariant: e
                    }
                }))
            }
        }, {
            key: "_updateProductPrices",
            value: function(e, t) {
                var n = this.element.querySelector(".price-list");
                if (e) {
                    if (t && t.price === e.price && t.compare_at_price === e.compare_at_price)
                        return;
                    n.innerHTML = "",
                    e.compare_at_price > e.price ? (n.innerHTML += '<span class="price price--highlight" data-money-convertible>' + i["default"].formatMoney(e.price, window.theme.moneyFormat) + "</span>",
                    n.innerHTML += '<span class="price price--compare" data-money-convertible>' + i["default"].formatMoney(e.compare_at_price, window.theme.moneyFormat) + "</span>") : n.innerHTML += '<span class="price" data-money-convertible>' + i["default"].formatMoney(e.price, window.theme.moneyFormat) + "</span>",
                    n.style.display = ""
                } else
                    n.style.display = "none"
            }
        }, {
            key: "_updateInventory",
            value: function(e) {
                if (this.options.showInventoryQuantity && e) {
                    var t = this.element.querySelector(".product-form__inventory")
                      , n = this.variantsInventories[e.id].inventory_management
                      , i = this.variantsInventories[e.id].inventory_policy
                      , o = this.variantsInventories[e.id].inventory_quantity
                      , a = this.variantsInventories[e.id].inventory_message;
                    //t.classList.remove("inventory--high"),
                    //t.classList.remove("inventory--low"),
                    //e.available && (null !== n && "deny" === i && this.options.lowInventoryThreshold > 0 && o <= this.options.lowInventoryThreshold ? t.classList.add("inventory--low") : t.classList.add("inventory--high"));
                    var r = this.element.querySelector(".inventory-bar");
                    if (r) {
                        var s = Math.min(Math.max(o / parseInt(r.getAttribute("data-stock-countdown-max")) * 100, 0), 100);
                        //r.classList.toggle("inventory-bar--hidden", 0 === s),
                        r.firstElementChild.style.width = s + "%"
                    }
                    //t.innerHTML = a
                }
            }
        }, {
            key: "_updateSku",
            value: function(e, t) {
                var n = this.element.querySelector(".product-meta__sku-number");
                if (n)
                    if (e) {
                        if (t && t.sku === e.sku)
                            return;
                        n.innerHTML = e.sku,
                        n.style.display = ""
                    } else
                        n.style.display = "none"
            }
        }, {
            key: "_updateDiscountLabel",
            value: function(e, t) {
                if (window.theme.showDiscount) {
                    var n = this.element.querySelector(".product-meta .product-label--on-sale");
                    if (n)
                        if (e && e.price < e.compare_at_price) {
                            var o = null;
                            o = "percentage" === window.theme.discountMode ? Math.round(100 * (e.compare_at_price - e.price) / e.compare_at_price) + "%" : "<span data-money-convertible>" + i["default"].formatMoney(e.compare_at_price - e.price, window.theme.moneyFormat) + "</span>",
                            n.innerHTML = "" + window.languages.collectionOnSaleLabel.replace("{{savings}}", o),
                            n.style.display = "inline-block"
                        } else
                            n.style.display = "none"
                }
            }
        }, {
            key: "_updateUnitPrice",
            value: function(e, t) {
                var n = this.element.querySelector(".unit-price-measurement");
                if (e && e.unit_price_measurement) {
                    n.parentNode.style.display = "block",
                    n.querySelector(".unit-price-measurement__price").innerHTML = i["default"].formatMoney(e.unit_price, window.theme.moneyFormat),
                    n.querySelector(".unit-price-measurement__reference-unit").innerHTML = e.unit_price_measurement.reference_unit;
                    var o = n.querySelector(".unit-price-measurement__reference-value");
                    o && (o.innerHTML = e.unit_price_measurement.reference_value)
                } else
                    n.parentNode.style.display = "none"
            }
        }, {
            key: "_updateSelectors",
            value: function(e) {
                var t = this;
                if (e) {
                    var n = e.option1
                      , i = e.option2
                      , o = e.option3
                      , a = this.productData.variants.length;
                    this.variantSelectors.forEach(function(e, r) {
                        var s = e.getAttribute("data-selector-type");
                        if ("select" !== s) {
                            var l = r + 1
                              , c = t.productOptionsWithValues[r].values;
                            c.forEach(function(r, c) {
                                var u = !1;
                                if (1 === l)
                                    for (var d = 0; d !== a; ++d) {
                                        var h = t.productData.variants[d];
                                        if (h.option1 === r && h.option2 === i && h.option3 === o) {
                                            u = h.available;
                                            break
                                        }
                                    }
                                else if (2 === l)
                                    for (var m = 0; m !== a; ++m) {
                                        var p = t.productData.variants[m];
                                        if (p.option1 === n && p.option2 === r && p.option3 === o) {
                                            u = p.available;
                                            break
                                        }
                                    }
                                else if (3 === l)
                                    for (var f = 0; f !== a; ++f) {
                                        var _ = t.productData.variants[f];
                                        if (_.option1 === n && _.option2 === i && _.option3 === r) {
                                            u = _.available;
                                            break
                                        }
                                    }
                                switch (s) {
                                case "color":
                                    e.querySelector(".color-swatch:nth-child(" + (c + 1) + ")").classList.toggle("color-swatch--disabled", !u);
                                    break;
                                case "variant":
                                    e.querySelector(".variant-swatch:nth-child(" + (c + 1) + ")").classList.toggle("variant-swatch--disabled", !u);
                                    break;
                                case "block":
                                    e.querySelector(".block-swatch:nth-child(" + (c + 1) + ")").classList.toggle("block-swatch--disabled", !u)
                                }
                            })
                        }
                    })
                }
            }
        }, {
            key: "_updateAddToCartButton",
            value: function(e) {
                var t = this.element.querySelector(".product-form__add-button")
                  , n = this.element.querySelector(".product-form__info-list");
                if (e ? (n.style.display = "block",
                e.available ? (t.removeAttribute("disabled"),
                t.classList.remove("button--disabled"),
                t.classList.add("button--primary"),
                t.setAttribute("data-action", "add-to-cart"),
                t.innerHTML = window.languages.productFormAddToCart) : (t.setAttribute("disabled", "disabled"),
                t.classList.add("button--disabled"),
                t.classList.remove("button--primary"),
                t.removeAttribute("data-action"),
                t.innerHTML = window.languages.productFormSoldOut)) : (t.setAttribute("disabled", "disabled"),
                t.classList.add("button--disabled"),
                t.classList.remove("button--primary"),
                t.removeAttribute("data-action"),
                t.innerHTML = window.languages.productFormUnavailable,
                n.style.display = "none"),
                this.options.showPaymentButton) {
                    var i = this.element.querySelector(".shopify-payment-button");
                    e && e.available ? i.style.display = "block" : i.style.display = "none"
                }
            }
        }, {
            key: "_onOptionChanged",
            value: function(e, t) {
                this["option" + t.getAttribute("data-option-position")] = t.value;
                var n = t.closest(".product-form__option").querySelector(".product-form__selected-value");
                n && (n.innerHTML = t.value);
                var i = this.currentVariant;
                if (this.currentVariant = this._getCurrentVariantFromOptions(),
                this._onVariantChanged(i, this.currentVariant),
                this.currentVariant) {
                    if (this.options.enableHistoryState && history.replaceState) {
                        var o = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + this.currentVariant.id;
                        window.history.replaceState({
                            path: o
                        }, "", o)
                    }
                    this.masterSelector.querySelector("[selected]").removeAttribute("selected"),
                    this.masterSelector.querySelector('[value="' + this.currentVariant.id + '"]').setAttribute("selected", "selected")
                }
            }
        }, {
            key: "_getCurrentVariantFromOptions",
            value: function() {
                var e = this
                  , t = !1;
                return this.productData.variants.forEach(function(n) {
                    n.option1 === e.option1 && n.option2 === e.option2 && n.option3 === e.option3 && (t = n)
                }),
                t || null
            }
        }, {
            key: "_addToCart",
            value: function(e, t) {
                var n = this;
                if ("page" !== window.theme.cartType) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setAttribute("disabled", "disabled"),
                    document.dispatchEvent(new CustomEvent("theme:loading:start"));
                    var i = this.element.querySelector('form[action*="/cart/add"]');
                    fetch(window.theme.localeRootUrl + "/cart/add.js", {
                        body: JSON.stringify(o["default"].serialize(i)),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }).then(function(e) {
                        document.dispatchEvent(new CustomEvent("theme:loading:end")),
                        e.ok ? (t.removeAttribute("disabled"),
                        n.element.dispatchEvent(new CustomEvent("product:added",{
                            bubbles: !0,
                            detail: {
                                variant: n.currentVariant,
                                quantity: parseInt(i.querySelector('[name="quantity"]').value)
                            }
                        })),
                        n.options.isQuickView && document.dispatchEvent(new CustomEvent("modal:close"))) : e.json().then(function(e) {
                            var n = document.createElement("div");
                            n.className = "product-form__error",
                            n.innerHTML = '<p class="alert alert--error">' + e.description + "</p>",
                            t.removeAttribute("disabled"),
                            t.parentNode.insertAdjacentElement("afterend", n),
                            a["default"].slideDown(n),
                            setTimeout(function() {
                                a["default"].slideUp(n, function() {
                                    n.remove()
                                })
                            }, 5500)
                        })
                    }),
                    e.preventDefault()
                }
            }
        }, {
            key: "_setupStockCountdown",
            value: function() {
                var e = this
                  , t = this.element.querySelector(".inventory-bar");
                if (t) {
                    var n = new IntersectionObserver(function(i) {
                        i.forEach(function(i) {
                            if (i.isIntersecting) {
                                var o = e.variantsInventories[e.currentVariant.id].inventory_quantity
                                  , a = Math.min(Math.max(o / parseInt(t.getAttribute("data-stock-countdown-max")) * 100, 0), 100);
                                t.classList.toggle("inventory-bar--hidden", 0 === a),
                                t.firstElementChild.style.width = a + "%",
                                n.disconnect()
                            }
                        })
                    }
                    );
                    n.observe(t)
                }
            }
        }]),
        e
    }();
    t["default"] = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "_attachListeners",
            value: function() {
                this.element.addEventListener("change", this._onSelectValueChanged.bind(this))
            }
        }, {
            key: "_onSelectValueChanged",
            value: function(e) {
                var t = parseInt(e.target.value);
                if (10 === t) {
                    var n = e.target.closest(".select-wrapper")
                      , i = document.createElement("input");
                    i.id = e.target.id,
                    i.className = "product-form__quantity form__field form__field--small form__field--text",
                    i.pattern = "[0-9]*",
                    i.name = "quantity",
                    i.value = "10",
                    n.parentNode.replaceChild(i, n),
                    i.focus(),
                    i.addEventListener("keyup", this._onInputValueChanged.bind(this)),
                    i.addEventListener("focusout", this._onInputFocusOut.bind(this))
                }
            }
        }, {
            key: "_onInputValueChanged",
            value: function(e) {
                var t = e.target.value;
                "" !== t && isNaN(t) && (e.target.value = Math.max(1, parseInt(t) || 1))
            }
        }, {
            key: "_onInputFocusOut",
            value: function(e) {
                e.target.value = Math.max(1, parseInt(e.target.value) || 1)
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "getSizedImageUrl",
            value: function(e, t) {
                if (null === t)
                    return e;
                if ("master" === t)
                    return e.replace(/http(s)?:/, "");
                var n = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
                if (n) {
                    var i = e.split(n[0])
                      , o = n[0];
                    return (i[0] + "_" + t + o).replace(/http(s)?:/, "")
                }
                return null
            }
        }, {
            key: "getSupportedSizes",
            value: function(e, t) {
                var n = []
                  , i = e.width;
                return t.forEach(function(e) {
                    i >= e && n.push(e)
                }),
                n
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(8);
    n.d(t, "AccessibilityHelper", function() {
        return i["default"]
    });
    var o = n(5);
    n.d(t, "AnimationHelper", function() {
        return o["default"]
    });
    var a = n(1);
    n.d(t, "CurrencyHelper", function() {
        return a["default"]
    });
    var r = n(3);
    n.d(t, "DomHelper", function() {
        return r["default"]
    });
    var s = n(20);
    n.d(t, "ImageHelper", function() {
        return s["default"]
    });
    var l = n(0);
    n.d(t, "ResponsiveHelper", function() {
        return l["default"]
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5)
      , o = n(3)
      , a = function() {
        function e() {
            _classCallCheck(this, e),
            this.domDelegate = new domDelegate.Delegate(document.body),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "_attachListeners",
            value: function() {
                this.domDelegate.on("click", '[data-action="toggle-collapsible"]:not([disabled])', this._toggleCollapsible.bind(this)),
                document.addEventListener("collapsible:toggle", this._toggleCollapsible.bind(this))
            }
        }, {
            key: "_toggleCollapsible",
            value: function(e, t) {
                var n = this;
                !t && e.detail && (t = document.querySelector('[aria-controls="' + e.detail.id + '"]'));
                var i = "true" === t.getAttribute("aria-expanded")
                  , a = t.parentNode;
                i ? this._close(a) : this._open(a),
                "false" !== t.getAttribute("data-close-siblings") && o["default"].getSiblings(a).forEach(function(e) {
                    return n._close(e)
                })
            }
        }, {
            key: "_open",
            value: function(e) {
                var t = e.querySelector("[aria-controls]");
                if (t && "true" !== t.getAttribute("aria-expanded")) {
                    var n = e.querySelector("#" + t.getAttribute("aria-controls"));
                    t.setAttribute("aria-expanded", "true"),
                    n.hasAttribute("aria-hidden") && n.setAttribute("aria-hidden", "false"),
                    i["default"].slideDown(n, function() {
                        t.hasAttribute("data-collapsible-force-overflow") && (n.style.overflow = "visible");
                        var e = n.querySelector("[autofocus]");
                        e && e.focus()
                    })
                }
            }
        }, {
            key: "_close",
            value: function(e) {
                var t = e.querySelector("[aria-controls]");
                if (t && "false" !== t.getAttribute("aria-expanded")) {
                    var n = e.querySelector("#" + t.getAttribute("aria-controls"));
                    t.hasAttribute("data-collapsible-force-overflow") && (n.style.overflow = "hidden"),
                    n.hasAttribute("aria-hidden") && n.setAttribute("aria-hidden", "true"),
                    t.setAttribute("aria-expanded", "false"),
                    i["default"].slideUp(n)
                }
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e),
            this.element = document.querySelector(".loading-bar"),
            this.element && (document.addEventListener("theme:loading:start", this._onLoadingStart.bind(this)),
            document.addEventListener("theme:loading:end", this._onLoadingEnd.bind(this)),
            this.element.addEventListener("transitionend", this._onTransitionEnd.bind(this)))
        }
        return _createClass(e, [{
            key: "_onLoadingStart",
            value: function() {
                this.element.classList.add("is-visible"),
                this.element.style.width = "40%"
            }
        }, {
            key: "_onLoadingEnd",
            value: function() {
                this.element.style.width = "100%",
                this.element.classList.add("is-finished")
            }
        }, {
            key: "_onTransitionEnd",
            value: function(e) {
                "width" === e.propertyName && this.element.classList.contains("is-finished") && (this.element.classList.remove("is-visible"),
                this.element.classList.remove("is-finished"),
                this.element.style.width = "0")
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(8)
      , o = function() {
        function e() {
            _classCallCheck(this, e),
            this.domDelegate = new domDelegate.Delegate(document.body),
            this.activeModal = document.querySelector('.modal[aria-hidden="false"]'),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "_attachListeners",
            value: function() {
                this.domDelegate.on("click", '[data-action="open-modal"]', this._openModal.bind(this)),
                this.domDelegate.on("click", '[data-action="close-modal"]', this._closeModal.bind(this)),
                document.addEventListener("modal:close", this._closeModal.bind(this)),
                this._clickOutsideListener = this._checkClickOutside.bind(this),
                this.activeModal && (document.documentElement.classList.add("is-locked"),
                this.domDelegate.on("click", this._clickOutsideListener))
            }
        }, {
            key: "_openModal",
            value: function(e, t) {
                var n = this
                  , o = document.querySelector("#" + t.getAttribute("aria-controls"));
                if (o) {
                    var a = function r(e) {
                        "visibility" === e.propertyName && (o.removeEventListener("transitionend", r),
                        i["default"].trapFocus(o, "modal"),
                        n.activeModal = o)
                    };
                    return o.addEventListener("transitionend", a),
                    o.setAttribute("aria-hidden", "false"),
                    document.documentElement.classList.add("is-locked"),
                    this.domDelegate.on("click", this._clickOutsideListener),
                    !1
                }
            }
        }, {
            key: "_closeModal",
            value: function() {
                var e = this;
                if (this.activeModal) {
                    var t = function n(t) {
                        "visibility" === t.propertyName && (e.activeModal.removeEventListener("transitionend", n),
                        i["default"].removeTrapFocus(e.activeModal, "modal"),
                        e.activeModal = null)
                    };
                    this.activeModal.addEventListener("transitionend", t),
                    this.activeModal.setAttribute("aria-hidden", "true"),
                    document.documentElement.classList.remove("is-locked"),
                    this.domDelegate.off("click", this._clickOutsideListener)
                }
            }
        }, {
            key: "_checkClickOutside",
            value: function(e) {
                !this.activeModal || this.activeModal.contains(e.target) && this.activeModal !== e.target || this._closeModal()
            }
        }]),
        e
    }();
    t["default"] = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = function() {
        function e() {
            _classCallCheck(this, e),
            this.delegateElement = new domDelegate.Delegate(document.body),
            this.delegateRoot = new domDelegate.Delegate(document.documentElement),
            this.activePopover = null,
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("click", '[data-action="toggle-popover"]', this._togglePopover.bind(this)),
                this.delegateElement.on("click", '[data-action="show-popover-panel"]', this._showPanel.bind(this)),
                this.delegateRoot.on("click", this._onWindowClick.bind(this)),
                document.addEventListener("popover:close", this._closeActivePopover.bind(this)),
                window.addEventListener("resize", this._windowResized.bind(this))
            }
        }, {
            key: "_togglePopover",
            value: function(e, t) {
                var n = null !== this.activePopover
                  , o = this.activePopover ? this.activePopover.id : null;
                t.hasAttribute("data-follow-link") && i["default"].matchesBreakpoint(t.getAttribute("data-follow-link")) || (n && this._closeActivePopover(),
                (!n || n && t.getAttribute("aria-controls") !== o) && this._openPopover(t),
                e.preventDefault())
            }
        }, {
            key: "_closeActivePopover",
            value: function() {
                this.activePopover.setAttribute("aria-hidden", "true"),
                document.querySelector('[aria-controls="' + this.activePopover.id + '"]').setAttribute("aria-expanded", "false"),
                this.activePopover = null
            }
        }, {
            key: "_openPopover",
            value: function(e) {
                var t = document.getElementById(e.getAttribute("aria-controls"));
                if (e.setAttribute("aria-expanded", "true"),
                t.setAttribute("aria-hidden", "false"),
                "phone" === i["default"].getCurrentBreakpoint())
                    t.style.height = window.innerHeight - document.querySelector(".header").getBoundingClientRect().bottom + "px";
                else {
                    t.style.height = "";
                    var n = t.querySelector(".popover__panel-list");
                    n && (n.style.height = n.clientHeight + "px")
                }
                this.activePopover = t
            }
        }, {
            key: "_showPanel",
            value: function(e, t) {
                if (this.activePopover) {
                    var n = this.activePopover.querySelectorAll(".popover__panel");
                    n.forEach(function(e) {
                        e.id === t.getAttribute("aria-controls") ? (e.classList.add("is-selected"),
                        e.closest(".popover__panel-list").style.height = e.clientHeight + "px") : e.classList.remove("is-selected")
                    })
                }
            }
        }, {
            key: "_onWindowClick",
            value: function(e) {
                "toggle-popover" === e.target.getAttribute("data-action") || e.target.closest('[data-action="toggle-popover"]') || this.activePopover && !this.activePopover.contains(e.target) && this._closeActivePopover()
            }
        }, {
            key: "_windowResized",
            value: function() {
                "phone" === i["default"].getCurrentBreakpoint() && this.activePopover && (this.activePopover.style.height = window.innerHeight - document.querySelector(".header").getBoundingClientRect().bottom + "px")
            }
        }]),
        e
    }();
    t["default"] = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1)
      , o = n(0)
      , a = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.headerElement = this.element.closest(".header"),
            //this.searchBarElement = this.element.querySelector(".search-bar"),
            //this.inputElement = this.element.querySelector('[name="q"]'),
            //this.searchMenuElement = this.element.querySelector(".search-bar__menu-wrapper"),
            //this.searchResultsElement = this.element.querySelector(".search-bar__results"),
            //this.closeButtonElement = this.element.querySelector(".search-bar__close-button"),
            this.productTypeFilter = "",
            this.isSearchOpen = !1
            //this._attachListeners()
        }
        return _createClass(e, [{
            key: "destroy",
            value: function() {
                this.delegateElement.off()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("click", '[data-action="clear-input"]', this._clearInput.bind(this)),
                this.delegateElement.on("click", '[data-action="unfix-search"]', this._unfixMobileSearch.bind(this)),
                this.delegateElement.on("focusin", '[name="q"]', this._onInputFocus.bind(this)),
                this.delegateElement.on("focusout", this._onFocusOut.bind(this)),
                this.delegateElement.on("keydown", '[name="q"]', this._handleTab.bind(this)),
                this.delegateElement.on("input", '[name="q"]', this._debounce(this._doSearch.bind(this), 250)),
                this.delegateElement.on("change", "#search-product-type", this._productTypeChanged.bind(this)),
                this.delegateElement.on("submit", this._onFormSubmit.bind(this))
            }
        }, {
            key: "toggleMobileSearch",
            value: function() {
                this.isSearchOpen ? (this.headerElement.classList.remove("header--search-expanded"),
                this.element.classList.remove("is-visible")) : (this.headerElement.classList.add("header--search-expanded"),
                this.element.classList.add("is-visible")),
                this.isSearchOpen = !this.isSearchOpen
            }
        }, {
            key: "_unfixMobileSearch",
            value: function() {
                this.element.classList.remove("is-fixed"),
                this.closeButtonElement.style.width = "",
                this.searchBarElement.classList.remove("is-expanded"),
                this.searchResultsElement.setAttribute("aria-hidden", "true"),
                this.inputElement.classList.remove("is-filled"),
                this.searchMenuElement && this.searchMenuElement.setAttribute("aria-hidden", "true")
            }
        }, {
            key: "_clearInput",
            value: function() {
                this.inputElement.value = "",
                this.inputElement.classList.remove("is-filled"),
                this.searchResultsElement.setAttribute("aria-hidden", "true"),
                this.searchMenuElement && this.searchMenuElement.setAttribute("aria-hidden", "false")
            }
        }, {
            key: "_onInputFocus",
            value: function() {
                //this.element.classList.add("is-fixed"),
                //this.closeButtonElement.style.width = this.closeButtonElement.firstElementChild.offsetWidth + "px",
                //"" === this.inputElement.value ? (this.searchMenuElement && this.searchMenuElement.setAttribute("aria-hidden", "false"),
                //this.searchResultsElement.setAttribute("aria-hidden", "true")) : (this.searchMenuElement && this.searchMenuElement.setAttribute("aria-hidden", "true"),
                //this.searchResultsElement.setAttribute("aria-hidden", "false"),
                //this.inputElement.classList.add("is-filled"),
                //this.searchBarElement.classList.add("is-expanded")),
                //this.searchMenuElement && this.searchBarElement.classList.add("is-expanded")
            }
        }, {
            key: "_onFocusOut",
            value: function(e) {
                o["default"].matchesBreakpoint("phone") || (this.element.classList.remove("is-fixed"),
                this.element.contains(e.relatedTarget) || (this.searchMenuElement && this.searchMenuElement.setAttribute("aria-hidden", "true"),
                this.searchResultsElement.setAttribute("aria-hidden", "true"),
                this.searchBarElement.classList.remove("is-expanded")))
            }
        }, {
            key: "_handleTab",
            value: function(e) {
                if (9 === e.keyCode) {
                    var t = this.searchResultsElement.querySelector("a");
                    t && (t.focus(),
                    e.preventDefault())
                }
            }
        }, {
            //key: "_doSearch",
            //value: function() {
              //  var e = this; //remove semi-colon if need to be put back
                  //, t = this.inputElement.value;
                //if (this.lastInputValue = t,
                //"" === t)
                  //  this.searchMenuElement ? this.searchMenuElement.setAttribute("aria-hidden", "false") : this.searchBarElement.classList.remove("is-expanded"),
                    //this.searchResultsElement.setAttribute("aria-hidden", "true");
                //else {
                  //  this.searchMenuElement && this.searchMenuElement.setAttribute("aria-hidden", "true"); //change back to comma if put back
                    //this.searchResultsElement.setAttribute("aria-hidden", "false"),
                    //this.searchBarElement.classList.add("is-expanded", "is-loading");
                    //var n = {
                      //  method: "GET",
                        //credentials: "same-origin"
                    //}
                      //, o = "NOT tag:__gift AND " + ("" !== this.productTypeFilter ? "product_type:" + this.productTypeFilter + " AND " : "") + this.lastInputValue + "*"
                      //, a = [fetch(window.theme.localeRootUrl + "/search?view=ajax&q=" + o + "&type=product", n)];
                    //"product" !== window.theme.searchMode && a.push(fetch(window.theme.localeRootUrl + "/search?view=ajax&q=" + encodeURIComponent(this.lastInputValue) + "*&type=" + window.theme.searchMode.replace("product,", ""), n)),
                    //Promise.all(a).then(function(n) {
                      //  e.lastInputValue === t && Promise.all(n.map(function(e) {
                        //    return e.text()
                        //})).then(function(t) {
                            //e.searchBarElement.classList.remove("is-loading");
                          //  var n = document.createElement("div");
                            //n.innerHTML = t.join("").trim();
                            //var o = n.querySelector(".search-bar__view-all");
                            //o && n.insertAdjacentElement("beforeend", o),
                           // e.searchBarElement.querySelector(".search-bar__results-inner").innerHTML = n.innerHTML,
                            //window.theme.currencyConversionEnabled && i["default"].convertAll(e.element)
                        //})
                    //})
                //}
            //}
        }, {
            key: "_productTypeChanged",
            value: function(e, t) {
                t.closest(".search-bar__filter").querySelector(".search-bar__filter-active").innerText = t.options[t.selectedIndex].innerText,
                this.productTypeFilter = t.value,
                "" !== this.inputElement.value && this._doSearch()
            }
        }, {
            key: "_onFormSubmit",
            value: function(e) {
                if ("" === this.inputElement.value)
                    e.preventDefault();
                else {
                    var t = this.inputElement.cloneNode();
                    t.setAttribute("type", "hidden"),
                    t.value = "NOT tag:__gift AND " + ("" !== this.productTypeFilter ? "product_type:" + this.productTypeFilter + " AND " : "") + this.inputElement.value + "*",
                    this.inputElement.removeAttribute("name"),
                    this.inputElement.insertAdjacentElement("afterend", t)
                }
            }
        }, {
            key: "_debounce",
            value: function(e, t) {
                var n = this
                  , i = null;
                return function() {
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++)
                        a[r] = arguments[r];
                    clearTimeout(i),
                    i = setTimeout(function() {
                        e.apply(n, a)
                    }, t)
                }
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(22);
    n.d(t, "CollapsibleManager", function() {
        return i["default"]
    });
    var o = n(9);
    n.d(t, "CountrySelector", function() {
        return o["default"]
    });
    var a = n(13);
    n.d(t, "DesktopNavigation", function() {
        return a["default"]
    });
    var r = n(12);
    n.d(t, "CollectionFilterDrawer", function() {
        return r["default"]
    });
    var s = n(14);
    n.d(t, "ExitPopup", function() {
        return s["default"]
    });
    var l = n(23);
    n.d(t, "LoadingBar", function() {
        return l["default"]
    });
    var c = n(11);
    n.d(t, "Cart", function() {
        return c["default"]
    });
    var u = n(15);
    n.d(t, "MobileNavigation", function() {
        return u["default"]
    });
    var d = n(24);
    n.d(t, "ModalManager", function() {
        return d["default"]
    });
    var h = n(16);
    n.d(t, "NewsletterPopup", function() {
        return h["default"]
    });
    var m = n(17);
    n.d(t, "OverflowScroller", function() {
        return m["default"]
    });
    var p = n(25);
    n.d(t, "PopoverManager", function() {
        return p["default"]
    });
    var f = n(6);
    n.d(t, "ProductItemColorSwatch", function() {
        return f["default"]
    });
    var _ = n(18);
    n.d(t, "ProductVariants", function() {
        return _["default"]
    });
    var y = n(19);
    n.d(t, "QuantityPicker", function() {
        return y["default"]
    });
    var v = n(10);
    n.d(t, "ShippingEstimator", function() {
        return v["default"]
    });
    var g = n(7);
    n.d(t, "ValuePicker", function() {
        return g["default"]
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(9)
      , o = n(7)
      , a = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.domDelegate = new domDelegate.Delegate(this.element),
            this.element.querySelectorAll('[action*="/account/addresses"]').forEach(function(e) {
                new i["default"](e.querySelector('[name="address[country]"]'),e.querySelector('[name="address[province]"]'))
            }),
            this.pageSelector = new o["default"]("account-selector")
        }
        return _createClass(e, [{
            key: "_onUnload",
            value: function() {
                this.pageSelector.destroy()
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(8)
      , o = n(5)
      , a = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.domDelegate = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.isOpen = !1,
            this.options.showNewsletter ? document.documentElement.style.setProperty("--announcement-bar-button-width", this.element.querySelector(".announcement-bar__button").clientWidth + "px") : document.documentElement.style.removeProperty("--announcement-bar-button-width"),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onSelect",
            value: function() {
                this.options.showNewsletter && !this.isOpen && this._toggleNewsletter()
            }
        }, {
            key: "onDeselect",
            value: function() {
                this.options.showNewsletter && this.isOpen && this._toggleNewsletter()
            }
        }, {
            key: "onUnload",
            value: function() {
                this.domDelegate.off()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.domDelegate.on("click", '[data-action="toggle-newsletter"]', this._toggleNewsletter.bind(this)),
                this.domDelegate.on("keyup", this._handleKey.bind(this))
            }
        }, {
            key: "_toggleNewsletter",
            value: function() {
                var e = this.element.querySelector(".announcement-bar__button")
                  , t = this.element.querySelector(".announcement-bar__newsletter");
                "false" === e.getAttribute("aria-expanded") ? (e.setAttribute("aria-expanded", "true"),
                t.setAttribute("aria-hidden", "false"),
                o["default"].slideDown(t, function() {
                    i["default"].trapFocus(t, "announcement-bar")
                })) : (e.setAttribute("aria-expanded", "false"),
                t.setAttribute("aria-hidden", "true"),
                o["default"].slideUp(t),
                i["default"].removeTrapFocus(t, "announcement-bar")),
                this.isOpen = !this.isOpen
            }
        }, {
            key: "_handleKey",
            value: function(e) {
                27 === e.keyCode && this.isOpen && this._toggleNewsletter()
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function o(e) {
        if (_classCallCheck(this, o),
        this.element = e,
        Shopify.designMode) {
            var t = this.element.querySelector(".page__header");
            t && (document.querySelector(".blog-container").previousElementSibling.remove(),
            document.querySelector(".blog-container").insertAdjacentElement("beforebegin", t))
        }
    };
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(7)
      , o = function() {
        function e(t) {
            if (_classCallCheck(this, e),
            this.element = t,
            this.blogTagSelector = new i["default"]("blog-tag-selector"),
            Shopify.designMode) {
                var n = this.element.querySelector(".page__header");
                n && (console.log(document.querySelector(".blog-container").previousElementSibling),
                document.querySelector(".blog-container").previousElementSibling.remove(),
                document.querySelector(".blog-container").insertAdjacentElement("beforebegin", n))
            }
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.blogTagSelector.destroy()
            }
        }]),
        e
    }();
    t["default"] = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            Shopify.designMode && window.SPR && (window.SPR.initDomEls(),
            window.SPR.loadBadges()),
            "blog" === window.theme.template && this._fixItemsPerRow()
        }
        return _createClass(e, [{
            key: "_fixItemsPerRow",
            value: function() {
                var e = this.element.querySelectorAll(".blog-sidebar__item");
                0 === e.length ? (document.querySelector(".blog-container").classList.add("blog-container--without-sidebar"),
                document.querySelectorAll(".shopify-section__blog-posts .block-list__item").forEach(function(e) {
                    e.classList.contains("1/2--lap-and-up") && (e.classList.remove("1/2--lap-and-up"),
                    e.classList.add("1/3--lap-and-up"))
                })) : (document.querySelector(".blog-container").classList.remove("blog-container--without-sidebar"),
                document.querySelectorAll(".shopify-section__blog-posts .block-list__item").forEach(function(e) {
                    e.classList.contains("1/3--lap-and-up") && (e.classList.remove("1/3--lap-and-up"),
                    e.classList.add("1/2--lap-and-up"))
                }))
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10)
      , o = n(2)
      , a = n(4)
      , r = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.domDelegate = new domDelegate.Delegate(this.element),
            this.delegateRoot = new domDelegate.Delegate(document.documentElement),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.options.showShippingEstimator && (this.shippingEstimator = new i["default"](this.element.querySelector(".shipping-estimator"),{
                singleProduct: !1
            })),
            this._attachListeners(),
            this._enforceMinimumHeight()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.options.showShippingEstimator && this.shippingEstimator.destroy()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.domDelegate.on("click", '[data-action="add-to-cart"]', this._addToCart.bind(this)),
                this.domDelegate.on("click", '[data-action="save-note"]', this._saveNote.bind(this)),
                this.domDelegate.on("click", '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this)),
                this.delegateRoot.on("cart:rerendered", this._onCartRerendered.bind(this))
            }
        }, {
            key: "_saveNote",
            value: function() {
                var e = this.element.querySelector('[name="cart[note]"]').value;
                fetch(window.theme.localeRootUrl + "/cart/update.js", {
                    body: JSON.stringify({
                        note: e
                    }),
                    credentials: "same-origin",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }),
                this.element.querySelector(".cart-recap__note-edit").classList.toggle("is-visible", "" !== e),
                document.dispatchEvent(new CustomEvent("collapsible:toggle",{
                    detail: {
                        id: "order-note"
                    }
                }))
            }
        }, {
            key: "_addToCart",
            value: function(e, t) {
                var n = this;
                if ("page" !== window.theme.cartType) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setAttribute("disabled", "disabled"),
                    document.dispatchEvent(new CustomEvent("theme:loading:start"));
                    var i = t.closest('form[action*="/cart/add"]');
                    fetch(window.theme.localeRootUrl + "/cart/add.js", {
                        body: JSON.stringify(o["default"].serialize(i)),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }).then(function(e) {
                        e.ok ? (t.removeAttribute("disabled"),
                        n.element.dispatchEvent(new CustomEvent("product:added",{
                            bubbles: !0,
                            detail: {
                                variant: null,
                                quantity: parseInt(i.querySelector('[name="quantity"]').value)
                            }
                        }))) : t.removeAttribute("disabled")
                    }),
                    e.preventDefault()
                }
            }
        }, {
            key: "_openQuickView",
            value: function(e, t) {
                var n = document.getElementById(t.getAttribute("aria-controls"));
                n.classList.add("is-loading"),
                fetch(t.getAttribute("data-product-url") + "?view=quick-view", {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(e) {
                    e.text().then(function(e) {
                        n.querySelector(".modal__inner").innerHTML = e,
                        n.classList.remove("is-loading"),
                        new a["default"](n.querySelector('[data-section-type="product"]'))
                    })
                })
            }
        }, {
            key: "_enforceMinimumHeight",
            value: function() {
                var e = this.element.querySelector(".cart-wrapper")
                  , t = this.element.querySelector(".cart-recap__scroller");
                if (e && t && (e.style.minHeight = t.clientHeight + "px",
                window.ResizeObserver)) {
                    var n = new ResizeObserver(function(t) {
                        var n = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, r = t[Symbol.iterator](); !(n = (a = r.next()).done); n = !0) {
                                var s = a.value;
                                e.style.minHeight = parseInt(s.contentRect.height) + "px"
                            }
                        } catch (l) {
                            i = !0,
                            o = l
                        } finally {
                            try {
                                !n && r["return"] && r["return"]()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                    }
                    );
                    n.observe(t)
                }
            }
        }, {
            key: "_onCartRerendered",
            value: function() {
                this.options.showShippingEstimator && (this.shippingEstimator.destroy(),
                this.shippingEstimator = new i["default"](this.element.querySelector(".shipping-estimator"),{
                    singleProduct: !1
                }))
            }
        }]),
        e
    }();
    t["default"] = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.flickityInstance = new Flickity(this.element.querySelector(".collection-list"),{
                watchCSS: !0,
                prevNextButtons: !0,
                draggable: !window.matchMedia("(-moz-touch-enabled: 0), (hover: hover)").matches,
                pageDots: !1,
                cellAlign: "left",
                contain: !0,
                groupCells: !0
            })
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.flickityInstance.destroy()
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                this.flickityInstance.isActive && this.flickityInstance.selectCell(parseInt(e.target.getAttribute("data-collection-index")), null, e.detail.load)
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3)
      , o = n(1)
      , a = n(2)
      , r = n(0)
      , s = n(7)
      , l = n(12)
      , c = n(6)
      , u = n(4)
      , d = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.collectionFilterTagElements = this.element.querySelectorAll("[data-tag]"),
            this.currentUrl = new URL(window.location.href),
            this.currentTags = this.options.currentTags,
            Shopify.designMode && window.SPR && (window.SPR.initDomEls(),
            window.SPR.loadBadges()),
            this.mobileFilterDrawer = new l["default"](this.options),
            this.displayByValuePicker = new s["default"]("display-by-selector",{
                onValueSelect: this._showingCountChanged.bind(this)
            }),
            this.sortByValuePicker = new s["default"]("sort-by-selector",{
                onValueSelect: this._sortByChanged.bind(this)
            }),
            this.productItemColorSwatch = new c["default"](this.element),
            "search" === window.theme.template && "product" !== window.theme.searchMode && this._loadContentResults(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.delegateElement.off(),
                this.mobileFilterDrawer.destroy(),
                this.displayByValuePicker.destroy(),
                this.sortByValuePicker.destroy(),
                this.productItemColorSwatch.destroy()
            }
        }, {
            key: "onSelect",
            value: function(e) {
                Shopify.designMode && e.detail.load && (this.element.querySelector('.collection__layout-button[data-layout-mode="' + this.options.defaultLayout + '"]').click(),
                this._showingCountChanged(this.options.defaultProductsPerPage))
            }
        }, {
            key: "_attachListeners",
            value: function() {
                var e = this;
                this.delegateElement.on("click", '[data-action="change-layout"]', this._changeLayout.bind(this)),
                this.delegateElement.on("change", "#mobile-sort-by, #desktop-sort-by", this._sortByChanged.bind(this)),
                this.delegateElement.on("change", "#showing-count", this._showingCountChanged.bind(this)),
                this.delegateElement.on("click", ".pagination [data-page]", this._paginationPageChanged.bind(this)),
                this.delegateElement.on("click", '[data-action="toggle-tag"]', this._tagToggled.bind(this)),
                this.delegateElement.on("click", '[data-action="clear-tags"]', this._clearTags.bind(this)),
                this.delegateElement.on("click", '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this)),
                this.delegateElement.on("click", '[data-action="add-to-cart"]', this._addToCart.bind(this)),
                window.addEventListener("popstate", function(t) {
                    t.state.path && (e.currentUrl = new URL(t.state.path),
                    e._reload(!1))
                })
            }
        }, {
            key: "_openQuickView",
            value: function(e, t) {
                var n = new URL("" + window.location.origin + t.getAttribute("data-product-url"));
                if (r["default"].matchesBreakpoint("phone") || r["default"].matchesBreakpoint("tablet"))
                    return window.location.href = n.href,
                    !1;
                var i = document.getElementById(t.getAttribute("aria-controls"));
                i.classList.add("is-loading"),
                n.searchParams.set("view", "quick-view"),
                fetch(n.href, {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(e) {
                    e.text().then(function(e) {
                        i.querySelector(".modal__inner").innerHTML = e,
                        i.classList.remove("is-loading"),
                        new u["default"](i.querySelector('[data-section-type="product"]'))
                    })
                })
            }
        }, {
            key: "_changeLayout",
            value: function(e, t) {
                var n = this;
                if (!t.classList.contains("is-selected")) {
                    var o = t.getAttribute("data-layout-mode");
                    fetch(window.theme.localeRootUrl + "/cart/update.js", {
                        body: JSON.stringify({
                            attributes: {
                                collection_layout: o
                            }
                        }),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }),
                    fastdom.mutate(function() {
                        i["default"].getSiblings(t, ".is-selected").forEach(function(e) {
                            return e.classList.remove("is-selected")
                        }),
                        t.classList.add("is-selected"),
                        n.element.querySelectorAll(".product-item").forEach(function(e) {
                            "grid" === o ? e.className = "product-item product-item--vertical " + n.options.gridClasses : e.className = "product-item product-item--list"
                        }),
                        n.productItemColorSwatch.recalculateSwatches()
                    })
                }
            }
        }, {
            key: "_sortByChanged",
            value: function(e) {
                this.currentUrl.searchParams.set("sort_by", e),
                this.currentUrl.searchParams["delete"]("page"),
                this._reload(!0)
            }
        }, {
            key: "_showingCountChanged",
            value: function(e) {
                var t = this;
                this.currentUrl.searchParams["delete"]("page"),
                fetch(window.theme.localeRootUrl + "/cart/update.js", {
                    body: JSON.stringify({
                        attributes: {
                            collection_products_per_page: e
                        }
                    }),
                    credentials: "same-origin",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function() {
                    t._reload(!0)
                })
            }
        }, {
            key: "_paginationPageChanged",
            value: function(e, t) {
                e.preventDefault(),
                this.currentUrl.searchParams.set("page", parseInt(t.getAttribute("data-page"))),
                this._reload(!0)
            }
        }, {
            key: "_tagToggled",
            value: function(e, t) {
                var n = this
                  , i = t.getAttribute("data-tag")
                  , o = this.currentTags.length > 0;
                if (this.currentTags.includes(i))
                    this.currentTags = this.currentTags.filter(function(e) {
                        return e !== i
                    });
                else if ("tag" === this.options.filterType)
                    this.currentTags = [i];
                else {
                    var a = i.split("_")[0];
                    this.currentTags.forEach(function(e) {
                        e.split("_")[0] === a && (n.currentTags = n.currentTags.filter(function(t) {
                            return t !== e
                        }))
                    }),
                    this.currentTags.push(i)
                }
                this.currentUrl.searchParams["delete"]("page"),
                this._updateTagUrl(o),
                this._reload(!0)
            }
        }, {
            key: "_clearTags",
            value: function() {
                var e = this.currentTags.length > 0;
                this.currentTags = [],
                this.currentUrl.searchParams["delete"]("page"),
                this._updateTagUrl(e),
                this._reload(!0).then(function() {
                    document.dispatchEvent(new CustomEvent("collection-filter:close"))
                })
            }
        }, {
            key: "_updateTagUrl",
            value: function(e) {
                var t = this;
                if (fastdom.mutate(function() {
                    t.collectionFilterTagElements.forEach(function(e) {
                        t.currentTags.includes(e.getAttribute("data-tag")) ? (e.classList.add("is-selected"),
                        "INPUT" === e.tagName && (e.checked = !0)) : (e.classList.remove("is-selected"),
                        "INPUT" === e.tagName && (e.checked = !1))
                    })
                }),
                this.options.isAutomatic)
                    0 === this.currentTags.length ? this.currentUrl.searchParams["delete"]("constraint") : this.currentUrl.searchParams.set("constraint", this.currentTags.join("+"));
                else {
                    var n = this.currentTags.join("+")
                      , i = "/" === this.currentUrl.pathname.substr(-1) ? this.currentUrl.pathname.substr(0, this.currentUrl.pathname.length - 1) : this.currentUrl.pathname;
                    if (e) {
                        var o = i.split("/");
                        o.pop(),
                        this.currentUrl.pathname = o.join("/") + "/" + n
                    } else
                        this.currentUrl.pathname = i + "/" + n
                }
            }
        }, {
            key: "_reload",
            value: function(e) {
                var t = this;
                e && window.history.pushState({
                    path: this.currentUrl.toString()
                }, "", this.currentUrl.toString()),
                document.dispatchEvent(new CustomEvent("theme:loading:start")),
                this.mobileFilterDrawer._filtersHaveChanged(this.currentTags);
                var n = window.getComputedStyle(document.documentElement)
                  , i = "";
                return i = this.currentUrl.search ? this.currentUrl.pathname + "/" + this.currentUrl.search + "&section_id=" + this.element.getAttribute("data-section-id") : this.currentUrl.pathname + "?section_id=" + this.element.getAttribute("data-section-id"),
                fetch(i, {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(e) {
                    e.text().then(function(e) {
                        var i = document.createElement("div");
                        i.innerHTML = e,
                        t.element.querySelector(".collection__dynamic-part").innerHTML = i.querySelector(".collection__dynamic-part").innerHTML;
                        var a = t.element.querySelector(".collection__active-filters");
                        a && (a.innerHTML = i.querySelector(".collection__active-filters").innerHTML),
                        window.theme.currencyConversionEnabled && o["default"].convertAll(t.element),
                        window.SPR && (window.SPR.initDomEls(),
                        window.SPR.loadBadges()),
                        t.productItemColorSwatch.recalculateSwatches();
                        var r = t.element.querySelector(".collection").getBoundingClientRect().top - 25 - parseInt(n.getPropertyValue("--header-is-sticky")) * parseInt(n.getPropertyValue("--header-height"));
                        r < 0 && window.scrollBy({
                            top: r,
                            behavior: "smooth"
                        }),
                        document.dispatchEvent(new CustomEvent("theme:loading:end"))
                    })
                })
            }
        }, {
            key: "_loadContentResults",
            value: function() {
                var e = this
                  , t = new URL(window.location.href);
                fetch(window.theme.localeRootUrl + "/search?view=content&q=" + t.searchParams.get("q") + "&type=" + window.theme.searchMode.replace("product,", ""), {
                    credentials: "same-origin"
                }).then(function(t) {
                    t.text().then(function(t) {
                        var n = e.element.querySelector(".link-search-results");
                        n && "" !== t.trim() && (n.innerHTML = t,
                        n.style.display = "block")
                    })
                })
            }
        }, {
            key: "_addToCart",
            value: function(e, t) {
                var n = this;
                if ("page" !== window.theme.cartType) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setAttribute("disabled", "disabled"),
                    document.dispatchEvent(new CustomEvent("theme:loading:start"));
                    var i = t.closest('form[action*="/cart/add"]');
                    fetch(window.theme.localeRootUrl + "/cart/add.js", {
                        body: JSON.stringify(a["default"].serialize(i)),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }).then(function(e) {
                        t.removeAttribute("disabled"),
                        e.ok ? n.element.dispatchEvent(new CustomEvent("product:added",{
                            bubbles: !0,
                            detail: {
                                variant: null,
                                quantity: parseInt(i.querySelector('[name="quantity"]').value)
                            }
                        })) : document.dispatchEvent(new CustomEvent("theme:loading:end"))
                    }),
                    e.preventDefault()
                }
            }
        }]),
        e
    }();
    t["default"] = d
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(2)
      , o = n(0)
      , a = n(6)
      , r = n(4)
      , s = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.options.stackable || (this.flickityInstance = new Flickity(this.element.querySelector(".product-list"),{
                watchCSS: !0,
                pageDots: !1,
                prevNextButtons: !0,
                contain: !0,
                groupCells: !0,
                cellAlign: "left",
                draggable: !window.matchMedia("(-moz-touch-enabled: 0), (hover: hover)").matches
            })),
            Shopify.designMode && window.SPR && (window.SPR.initDomEls(),
            window.SPR.loadBadges()),
            this.productItemColorSwatch = new a["default"](this.element),
            this._fixSafari(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.options.stackable || this.flickityInstance.destroy(),
                window.removeEventListener("resize", this._fixSafariListener),
                this.delegateElement.off("change"),
                this.productItemColorSwatch.destroy()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._fixSafariListener = this._fixSafari.bind(this),
                window.addEventListener("resize", this._fixSafariListener),
                this.delegateElement.on("click", '[data-action="add-to-cart"]', this._addToCart.bind(this)),
                this.delegateElement.on("click", '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this))
            }
        }, {
            key: "_fixSafari",
            value: function() {
                var e = window.navigator.userAgent.toLowerCase();
                if (e.includes("safari") && (e.includes("version/10.1") || e.includes("version/10.3") || e.includes("version/11.0"))) {
                    var t = o["default"].matchesBreakpoint("phone");
                    this.element.querySelectorAll(".product-item__image-wrapper .aspect-ratio, .product-item__image-wrapper .placeholder-svg").forEach(function(e) {
                        t ? e.parentNode.style.height = null : e.parentNode.style.height = e.clientHeight + "px"
                    })
                }
            }
        }, {
            key: "_openQuickView",
            value: function(e, t) {
                var n = new URL("" + window.location.origin + t.getAttribute("data-product-url"));
                if (o["default"].matchesBreakpoint("phone") || o["default"].matchesBreakpoint("tablet"))
                    return window.location.href = n.href,
                    !1;
                var i = document.getElementById(t.getAttribute("aria-controls"));
                i.classList.add("is-loading"),
                n.searchParams.set("view", "quick-view"),
                fetch(n.href, {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(e) {
                    e.text().then(function(e) {
                        i.querySelector(".modal__inner").innerHTML = e,
                        i.classList.remove("is-loading"),
                        new r["default"](i.querySelector('[data-section-type="product"]'))
                    })
                })
            }
        }, {
            key: "_addToCart",
            value: function(e, t) {
                var n = this;
                if ("page" !== window.theme.cartType) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setAttribute("disabled", "disabled"),
                    document.dispatchEvent(new CustomEvent("theme:loading:start"));
                    var o = t.closest('form[action*="/cart/add"]');
                    fetch(window.theme.localeRootUrl + "/cart/add.js", {
                        body: JSON.stringify(i["default"].serialize(o)),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }).then(function(e) {
                        t.removeAttribute("disabled"),
                        e.ok ? n.element.dispatchEvent(new CustomEvent("product:added",{
                            bubbles: !0,
                            detail: {
                                variant: null,
                                quantity: parseInt(o.querySelector('[name="quantity"]').value)
                            }
                        })) : document.dispatchEvent(new CustomEvent("theme:loading:end"))
                    }),
                    e.preventDefault()
                }
            }
        }]),
        e
    }();
    t["default"] = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.domDelegate = new domDelegate.Delegate(this.element),
            this.cookieBarElement = this.element.querySelector(".cookie-bar"),
            this.cookieBarElement && this._setupCookieBar(),
            this._setupCollapsibles(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                window.removeEventListener("resize", this._setupCollapsiblesListener),
                this.domDelegate.off()
            }
        }, {
            key: "onSelect",
            value: function() {
                this.cookieBarElement && this.cookieBarElement.setAttribute("aria-hidden", "false")
            }
        }, {
            key: "onDeselect",
            value: function() {
                this.cookieBarElement && this.cookieBarElement.setAttribute("aria-hidden", "true")
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._setupCollapsiblesListener = this._setupCollapsibles.bind(this),
                window.addEventListener("resize", this._setupCollapsiblesListener),
                this.domDelegate.on("click", '[data-action="accept-terms"]', this._acceptCookieBarTerms.bind(this))
            }
        }, {
            key: "_setupCollapsibles",
            value: function() {
                var e = this.element.querySelectorAll('[data-action="toggle-collapsible"]')
                  , t = i["default"].matchesBreakpoint("phone");
                e.forEach(function(e) {
                    t ? e.removeAttribute("disabled") : (e.setAttribute("disabled", "disabled"),
                    document.getElementById(e.getAttribute("aria-controls")).style.height = "")
                })
            }
        }, {
            key: "_setupCookieBar",
            value: function() {
                try {
                    null === localStorage.getItem("cookieWasAccepted") && this.cookieBarElement.setAttribute("aria-hidden", "false")
                } catch (e) {}
            }
        }, {
            key: "_acceptCookieBarTerms",
            value: function() {
                this.cookieBarElement.setAttribute("aria-hidden", "true");
                try {
                    localStorage.setItem("cookieWasAccepted", "true")
                } catch (e) {}
            }
        }]),
        e
    }();
    t["default"] = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this._createQrCode(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.delegateElement.off()
            }
        }, {
            key: "_createQrCode",
            value: function() {
                var e = document.querySelectorAll(".gift-card__qr");
                e.forEach(function(e) {
                    new QRCode(e,{
                        text: e.getAttribute("data-identifier"),
                        width: 200,
                        height: 200
                    })
                })
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("click", '[data-action="print"]', this._print.bind(this)),
                this.delegateElement.on("click", '[data-action="select-code"]', this._selectCode.bind(this))
            }
        }, {
            key: "_print",
            value: function() {
                window.print()
            }
        }, {
            key: "_selectCode",
            value: function(e, t) {
                t.select()
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(13)
      , o = n(15)
      , a = n(11)
      , r = n(26)
      , s = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.searchBar = new r["default"](this.element.querySelector(".header__search-bar-wrapper")),
            this.cart = new a["default"](this.element.querySelector(".header__action-item--cart"),{
                useStickyHeader: this.options.useStickyHeader
            });
            var n = this.element.querySelector("inline" === this.options.navigationLayout ? ".nav-bar" : ".header__desktop-nav");
            n && (this.desktopNavigation = new i["default"](n,this.options.navigationLayout,this.options.desktopOpenTrigger));
            var s = this.element.querySelector(".header__mobile-nav");
            s && (this.mobileNavigation = new o["default"](s)),
            this._setupCssVariables(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.searchBar.destroy(),
                this.cart.destroy(),
                this.desktopNavigation && this.desktopNavigation.destroy(),
                this.mobileNavigation && this.mobileNavigation.destroy(),
                window.removeEventListener("resize", this._setupCssVariablesListener)
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                this.desktopNavigation && this.desktopNavigation.onBlockSelect(e)
            }
        }, {
            key: "onBlockDeselect",
            value: function(e) {
                this.desktopNavigation && this.desktopNavigation.onBlockDeselect(e)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._setupCssVariablesListener = this._setupCssVariables.bind(this),
                window.addEventListener("resize", this._setupCssVariablesListener),
                this.delegateElement.on("click", '[data-action="toggle-search"]', this._toggleMobileSearch.bind(this))
            }
        }, {
            key: "_setupCssVariables",
            value: function() {
                document.documentElement.style.setProperty("--header-height", this.element.parentNode.clientHeight + "px")
            }
        }, {
            key: "_toggleMobileSearch",
            value: function(e) {
                this.searchBar.toggleMobileSearch(),
                e.preventDefault()
            }
        }]),
        e
    }();
    t["default"] = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this._initInstafeed()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.carousel.destroy()
            }
        }, {
            key: "_initInstafeed",
            value: function() {
                var e = this
                  , t = {
                    pageDots: !1,
                    prevNextButtons: !1,
                    wrapAround: !0,
                    cellAlign: "center",
                    watchCSS: !0
                };
                if (this.options.accessToken) {
                    var n = new Instafeed({
                        get: "user",
                        userId: "self",
                        target: this.element.querySelector(".instafeed"),
                        accessToken: this.options.accessToken,
                        sortBy: "most-recent",
                        limit: 6,
                        resolution: "standard_resolution",
                        template: '<a href="{{link}}" target="_blank" rel="nofollow noopener" class="instagram-item"><div class="instagram-item__image lazyload image--fade-in" style="padding-bottom: 100%" data-bg="{{image}}"></div><div class="instagram-item__overlay"><span class="instagram-item__like-count"><svg class="icon icon--heart" viewBox="0 0 17 15" role="presentation"><path d="M15.0349331 1.40485867C14.1287273.49933787 12.9252477 0 11.6443673 0S9.16000731.49933787 8.25448651 1.40417371c-.01164437.01164436-.02328874.02328873-.03493311.03561806-.01164436-.01232933-.02260377-.02328873-.03424813-.0349331C7.2790995.49933787 6.07561989 0 4.79473949 0 3.51385908 0 2.31037947.49933787 1.40417371 1.40485867.49796794 2.31037947 0 3.51385908 0 4.79473949 0 6.07561989.4986529 7.2790995 1.40417371 8.1846203L8.2195534 15l6.8153797-6.8153797c.9055208-.9055208 1.4041737-2.10900041 1.4041737-3.38988081 0-1.28019545-.4986529-2.48436002-1.4041737-3.38988082z"></path></svg>{{likes}}</span><p class="instagram-item__caption">{{caption}}</p><time class="instagram-item__date heading h6">{{model.date}}</time></div></a>',
                        success: function(e) {
                            var t = new Intl.DateTimeFormat(window.theme.locale,{
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            });
                            e.data.forEach(function(e) {
                                e.date = t.format(new Date(1e3 * parseInt(e.created_time))),
                                1 === e.likes.count ? e.likes.count = e.likes.count + " like" : e.likes.count = e.likes.count + " likes"
                            })
                        },
                        after: function() {
                            e.element.querySelectorAll(".instagram-item--dummy").forEach(function(e) {
                                e.remove()
                            }),
                            e.carousel = new Flickity(e.element.querySelector(".instafeed"),t)
                        }
                    });
                    n.run()
                } else
                    this.carousel = new Flickity(this.element.querySelector(".instafeed"),t)
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.domDelegate = new domDelegate.Delegate(this.element),
            this.customerLoginForm = this.element.querySelector("#customer_login"),
            this.recoverPasswordForm = this.element.querySelector("#recover_customer_password"),
            this.domDelegate.on("click", '[data-action="toggle-login-form"]', this._showRecoverPassword.bind(this))
        }
        return _createClass(e, [{
            key: "_showRecoverPassword",
            value: function() {
                var e = "block" === this.customerLoginForm.style.display;
                e ? (this.customerLoginForm.style.display = "none",
                this.recoverPasswordForm.style.display = "block") : (this.customerLoginForm.style.display = "block",
                this.recoverPasswordForm.style.display = "none")
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3)
      , o = n(0)
      , a = n(5)
      , r = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(t.getAttribute("data-section-settings")),
            this.mapPositions = [],
            this.desktopMarkers = [],
            this.desktopMapElement = null,
            this.mobileMarkers = [],
            this.mobileMapElements = [],
            this.options.apiKey && this.options.mapAddresses.length > 0 && this._loadScript().then(this._initMaps.bind(this)),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.delegateElement.off("click"),
                this.options.apiKey && this.options.mapAddresses.length > 0 && google.maps.event.clearInstanceListeners(window)
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                this._showStore(e.target)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                var e = this;
                this.delegateElement.on("click", '[data-action="toggle-store"]', function(t, n) {
                    e._showStore(n.closest(".map__store-item"))
                })
            }
        }, {
            key: "_showStore",
            value: function(e) {
                var t = this
                  , n = e.querySelector('[data-action="toggle-store"]');
                if ("phone" === o["default"].getCurrentBreakpoint() || "true" !== n.getAttribute("aria-expanded")) {
                    "true" === n.getAttribute("aria-expanded") ? (n.setAttribute("aria-expanded", "false"),
                    a["default"].slideUp(e.querySelector(".map__store-collapsible"))) : (n.setAttribute("aria-expanded", "true"),
                    a["default"].slideDown(e.querySelector(".map__store-collapsible"))),
                    i["default"].getSiblings(e).forEach(function(e) {
                        e.querySelector('[data-action="toggle-store"]').setAttribute("aria-expanded", "false"),
                        a["default"].slideUp(e.querySelector(".map__store-collapsible"))
                    });
                    var r = parseInt(e.getAttribute("data-store-index"));
                    this.desktopMapElement.panTo(this.mapPositions[r]),
                    this.desktopMarkers.forEach(function(e, n) {
                        e.setMap(t.desktopMapElement),
                        n === r ? e.icon.fillColor = t.options.markerActiveColor : e.icon.fillColor = t.options.markerColor
                    })
                }
            }
        }, {
            key: "_loadScript",
            value: function() {
                var e = this;
                return new Promise(function(t, n) {
                    var i = document.createElement("script");
                    document.body.appendChild(i),
                    i.onload = t,
                    i.onerror = n,
                    i.async = !0,
                    i.src = "https://maps.googleapis.com/maps/api/js?key=" + e.options.apiKey
                }
                )
            }
        }, {
            key: "_initMaps",
            value: function() {
                var e = this
                  , t = {
                    zoom: this.options.zoom,
                    draggable: this.options.draggableMap,
                    clickableIcons: !1,
                    scrollwheel: this.options.draggableMap,
                    disableDoubleClickZoom: !0,
                    disableDefaultUI: !this.options.showMapControls,
                    styles: JSON.parse(this.element.querySelector("[data-gmap-style]").innerHTML)
                };
                this.desktopMapElement = new google.maps.Map(this.element.querySelector(".map__map-container--desktop .map__gmap"),t),
                this.mobileMapElements = [],
                this.element.querySelectorAll(".map__map-container--mobile .map__gmap").forEach(function(n, i) {
                    e.mobileMapElements[i] = new google.maps.Map(n,t)
                }),
                this._geocodeAddresses(),
                google.maps.event.addDomListener(window, "resize", function() {
                    var t = e.desktopMapElement.getCenter();
                    google.maps.event.trigger(e.desktopMapElement, "resize"),
                    e.desktopMapElement.setCenter(t),
                    e.mobileMapElements.forEach(function(e) {
                        var t = e.getCenter();
                        google.maps.event.trigger(e, "resize"),
                        e.setCenter(t)
                    })
                })
            }
        }, {
            key: "_onMarkerClicked",
            value: function(e) {
                window.open("https://www.google.com/maps/search/?api=1&query=" + e, "_blank")
            }
        }, {
            key: "_geocodeAddresses",
            value: function() {
                var e = this
                  , t = new google.maps.Geocoder;
                this.options.mapAddresses.forEach(function(n, i) {
                    t.geocode({
                        address: n
                    }, function(t, o) {
                        if (o !== google.maps.GeocoderStatus.OK)
                            Shopify.designMode;
                        else {
                            var a = t[0].geometry.location;
                            e.mapPositions[i] = a,
                            e.desktopMarkers[i] = new google.maps.Marker({
                                map: 0 === i ? e.desktopMapElement : null,
                                position: a,
                                icon: {
                                    path: "M12.5,0 C6.388889,0 0,4.7304348 0,12.5217391 C0,19.8956522 11.111111,31.1652174 11.527778,31.5826087 C11.805556,31.8608696 12.083333,32 12.5,32 C12.916667,32 13.194444,31.8608696 13.472222,31.5826087 C13.888889,31.1652174 25,19.8956522 25,12.5217391 C25,4.7304348 18.611111,0 12.5,0 Z M12,16 C9.733333,16 8,14.2666667 8,12 C8,9.7333333 9.733333,8 12,8 C14.266667,8 16,9.7333333 16,12 C16,14.2666667 14.266667,16 12,16 Z",
                                    fillColor: 0 === i ? e.options.markerActiveColor : e.options.markerColor,
                                    fillOpacity: 1,
                                    anchor: new google.maps.Point(12,30),
                                    strokeWeight: 0
                                }
                            }),
                            e.mobileMarkers[i] = new google.maps.Marker({
                                map: e.mobileMapElements[i],
                                position: a,
                                icon: {
                                    path: "M12.5,0 C6.388889,0 0,4.7304348 0,12.5217391 C0,19.8956522 11.111111,31.1652174 11.527778,31.5826087 C11.805556,31.8608696 12.083333,32 12.5,32 C12.916667,32 13.194444,31.8608696 13.472222,31.5826087 C13.888889,31.1652174 25,19.8956522 25,12.5217391 C25,4.7304348 18.611111,0 12.5,0 Z M12,16 C9.733333,16 8,14.2666667 8,12 C8,9.7333333 9.733333,8 12,8 C14.266667,8 16,9.7333333 16,12 C16,14.2666667 14.266667,16 12,16 Z",
                                    fillColor: e.options.markerActiveColor,
                                    fillOpacity: 1,
                                    anchor: new google.maps.Point(12,30),
                                    strokeWeight: 0
                                }
                            }),
                            e.desktopMarkers[i].addListener("click", e._onMarkerClicked.bind(e, n)),
                            e.mobileMarkers[i].addListener("click", e._onMarkerClicked.bind(e, n)),
                            0 === i && e.desktopMapElement.setCenter(a),
                            e.mobileMapElements[i].setCenter(a)
                        }
                    })
                })
            }
        }]),
        e
    }();
    t["default"] = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this._setupCssVariables(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                window.removeEventListener("resize", this._setupCssVariablesListener)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._setupCssVariablesListener = this._setupCssVariables.bind(this),
                window.addEventListener("resize", this._setupCssVariablesListener)
            }
        }, {
            key: "_setupCssVariables",
            value: function() {
                document.documentElement.style.setProperty("--header-height", this.element.parentNode.clientHeight + "px")
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(16)
      , o = n(14)
      , a = function() {
        function e(t) {
            var n = this;
            _classCallCheck(this, e),
            t.querySelectorAll("[data-popup-type]").forEach(function(e) {
                "exit" === e.getAttribute("data-popup-type") ? n.exitPopup = new o["default"](e) : "newsletter" === e.getAttribute("data-popup-type") && (n.newsletterPopup = new i["default"](e))
            })
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.exitPopup && this.exitPopup.destroy(),
                this.newsletterPopup && this.newsletterPopup.destroy()
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                "exit" === e.target.getAttribute("data-popup-type") && this.exitPopup ? this.exitPopup._openPopup() : "newsletter" === e.target.getAttribute("data-popup-type") && this.newsletterPopup && this.newsletterPopup._openPopup()
            }
        }, {
            key: "onBlockDeselect",
            value: function() {
                this.exitPopup && this.exitPopup._closePopup(),
                this.newsletterPopup && this.newsletterPopup._closePopup()
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(6)
      , a = n(1)
      , r = n(4)
      , s = n(2)
      , l = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.options.useRecommendations ? this._loadRecommendations().then(this._createSlideshow.bind(this)) : this._createSlideshow(),
            this.productItemColorSwatch = new o["default"](this.element),
            this._fixSafari(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.options.stackable || this.flickityInstance.destroy(),
                window.removeEventListener("resize", this._fixSafariListener),
                this.delegateElement.off("change"),
                this.productItemColorSwatch.destroy()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this._fixSafariListener = this._fixSafari.bind(this),
                window.addEventListener("resize", this._fixSafariListener),
                this.delegateElement.on("click", '[data-action="add-to-cart"]', this._addToCart.bind(this)),
                this.delegateElement.on("click", '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this))
            }
        }, {
            key: "_fixSafari",
            value: function() {
                var e = window.navigator.userAgent.toLowerCase();
                if (e.includes("safari") && (e.includes("version/10.1") || e.includes("version/10.3") || e.includes("version/11.0"))) {
                    var t = i["default"].matchesBreakpoint("phone");
                    this.element.querySelectorAll(".product-item__image-wrapper .aspect-ratio, .product-item__image-wrapper .placeholder-svg").forEach(function(e) {
                        t ? e.parentNode.style.height = null : e.parentNode.style.height = e.clientHeight + "px"
                    })
                }
            }
        }, {
            key: "_loadRecommendations",
            value: function() {
                var e = this
                  , t = "/recommendations/products?section_id=product-recommendations&product_id=" + this.options.productId + "&limit=" + this.options.recommendationsCount;
                return fetch(t).then(function(t) {
                    return t.text().then(function(t) {
                        var n = document.createElement("div");
                        n.innerHTML = t,
                        e.element.querySelector(".product-recommendations").innerHTML = n.querySelector(".product-recommendations").innerHTML,
                        e.productItemColorSwatch.recalculateSwatches(),
                        window.theme.currencyConversionEnabled && a["default"].convertAll(e.element),
                        Shopify.designMode && window.SPR && (window.SPR.initDomEls(),
                        window.SPR.loadBadges())
                    })
                })
            }
        }, {
            key: "_createSlideshow",
            value: function() {
                this.options.stackable || (this.flickityInstance = new Flickity(this.element.querySelector(".product-list"),{
                    watchCSS: !0,
                    pageDots: !1,
                    prevNextButtons: !0,
                    contain: !0,
                    groupCells: !0,
                    cellAlign: "left",
                    draggable: !window.matchMedia("(-moz-touch-enabled: 0), (hover: hover)").matches
                })),
                Shopify.designMode && window.SPR && (window.SPR.initDomEls(),
                window.SPR.loadBadges())
            }
        }, {
            key: "_openQuickView",
            value: function(e, t) {
                var n = new URL("" + window.location.origin + t.getAttribute("data-product-url"));
                if (i["default"].matchesBreakpoint("phone") || i["default"].matchesBreakpoint("tablet"))
                    return window.location.href = n.href,
                    !1;
                var o = document.getElementById(t.getAttribute("aria-controls"));
                o.classList.add("is-loading"),
                n.searchParams.set("view", "quick-view"),
                fetch(n.href, {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(e) {
                    e.text().then(function(e) {
                        o.querySelector(".modal__inner").innerHTML = e,
                        o.classList.remove("is-loading"),
                        new r["default"](o.querySelector('[data-section-type="product"]'))
                    })
                })
            }
        }, {
            key: "_addToCart",
            value: function(e, t) {
                var n = this;
                if ("page" !== window.theme.cartType) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setAttribute("disabled", "disabled"),
                    document.dispatchEvent(new CustomEvent("theme:loading:start"));
                    var i = t.closest('form[action*="/cart/add"]');
                    fetch(window.theme.localeRootUrl + "/cart/add.js", {
                        body: JSON.stringify(s["default"].serialize(i)),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }).then(function(e) {
                        t.removeAttribute("disabled"),
                        e.ok ? n.element.dispatchEvent(new CustomEvent("product:added",{
                            bubbles: !0,
                            detail: {
                                variant: null,
                                quantity: parseInt(i.querySelector('[name="quantity"]').value)
                            }
                        })) : document.dispatchEvent(new CustomEvent("theme:loading:end"))
                    }),
                    e.preventDefault()
                }
            }
        }]),
        e
    }();
    t["default"] = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function o(e) {
        _classCallCheck(this, o),
        this.element = e,
        Shopify.designMode && this.element.classList.remove("hidden-lap-and-up")
    };
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1)
      , o = n(6)
      , a = n(0)
      , r = n(4)
      , s = n(2)
      , l = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.delegateElement = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.options.currentProductId && this._saveCurrentProduct(),
            this.productItemColorSwatch = new o["default"](this.element),
            this._fetchProducts(),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.flickityInstance && this.flickityInstance.destroy(),
                this.productItemColorSwatch.destroy()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.delegateElement.on("click", '[data-action="add-to-cart"]', this._addToCart.bind(this)),
                this.delegateElement.on("click", '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this))
            }
        }, {
            key: "_saveCurrentProduct",
            value: function() {
                var e = JSON.parse(localStorage.getItem("recentlyViewedProducts") || "[]")
                  , t = this.options.currentProductId;
                e.includes(t) || e.unshift(t);
                try {
                    localStorage.setItem("recentlyViewedProducts", JSON.stringify(e.slice(0, 18)))
                } catch (n) {}
            }
        }, {
            key: "_fetchProducts",
            value: function() {
                var e = this
                  , t = this._getSearchQueryString();
                if ("" !== t) {
                    var n = "index" === window.theme.template ? "recently-viewed-products" : "static-recently-viewed-products";
                    fetch(window.theme.localeRootUrl + "/search?view=" + n + "&type=product&q=" + t, {
                        credentials: "same-origin",
                        method: "GET"
                    }).then(function(t) {
                        t.text().then(function(t) {
                            var n = document.createElement("div");
                            n.innerHTML = t,
                            e.element.querySelector(".recently-viewed-products-placeholder").innerHTML = n.querySelector('[data-section-type="recently-viewed-products"] .recently-viewed-products-placeholder').innerHTML,
                            e.element.parentNode.style.display = "block",
                            e.productItemColorSwatch.recalculateSwatches(),
                            window.theme.currencyConversionEnabled && i["default"].convertAll(e.element),
                            Shopify.designMode && window.SPR && (window.SPR.initDomEls(),
                            window.SPR.loadBadges()),
                            e.flickityInstance = new Flickity(e.element.querySelector(".product-list"),{
                                watchCSS: !0,
                                pageDots: !1,
                                prevNextButtons: !0,
                                contain: !0,
                                groupCells: !0,
                                cellAlign: "left",
                                draggable: !window.matchMedia("(-moz-touch-enabled: 0), (hover: hover)").matches
                            })
                        })
                    })
                }
            }
        }, {
            key: "_getSearchQueryString",
            value: function() {
                var e = JSON.parse(localStorage.getItem("recentlyViewedProducts") || "[]");
                return e.includes(this.options.currentProductId) && e.splice(e.indexOf(this.options.currentProductId), 1),
                e.map(function(e) {
                    return "id:" + e
                }).join(" OR ")
            }
        }, {
            key: "_openQuickView",
            value: function(e, t) {
                var n = new URL("" + window.location.origin + t.getAttribute("data-product-url"));
                if (a["default"].matchesBreakpoint("phone") || a["default"].matchesBreakpoint("tablet"))
                    return window.location.href = n.href,
                    !1;
                var i = document.getElementById(t.getAttribute("aria-controls"));
                i.classList.add("is-loading"),
                n.searchParams.set("view", "quick-view"),
                fetch(n.href, {
                    credentials: "same-origin",
                    method: "GET"
                }).then(function(e) {
                    e.text().then(function(e) {
                        i.querySelector(".modal__inner").innerHTML = e,
                        i.classList.remove("is-loading"),
                        new r["default"](i.querySelector('[data-section-type="product"]'))
                    })
                })
            }
        }, {
            key: "_addToCart",
            value: function(e, t) {
                var n = this;
                if ("page" !== window.theme.cartType) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setAttribute("disabled", "disabled"),
                    document.dispatchEvent(new CustomEvent("theme:loading:start"));
                    var i = t.closest('form[action*="/cart/add"]');
                    fetch(window.theme.localeRootUrl + "/cart/add.js", {
                        body: JSON.stringify(s["default"].serialize(i)),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }).then(function(e) {
                        t.removeAttribute("disabled"),
                        e.ok ? n.element.dispatchEvent(new CustomEvent("product:added",{
                            bubbles: !0,
                            detail: {
                                variant: null,
                                quantity: parseInt(i.querySelector('[name="quantity"]').value)
                            }
                        })) : document.dispatchEvent(new CustomEvent("theme:loading:end"))
                    }),
                    e.preventDefault()
                }
            }
        }]),
        e
    }();
    t["default"] = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            _classCallCheck(this, e),
            this.constructors = [],
            this.instances = [],
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "_attachListeners",
            value: function() {
                document.addEventListener("shopify:section:load", this._onSectionLoad.bind(this)),
                document.addEventListener("shopify:section:unload", this._onSectionUnload.bind(this)),
                document.addEventListener("shopify:section:select", this._onSelect.bind(this)),
                document.addEventListener("shopify:section:deselect", this._onDeselect.bind(this)),
                document.addEventListener("shopify:section:reorder", this._onReorder.bind(this)),
                document.addEventListener("shopify:block:select", this._onBlockSelect.bind(this)),
                document.addEventListener("shopify:block:deselect", this._onBlockDeselect.bind(this))
            }
        }, {
            key: "register",
            value: function(e, t) {
                var n = this;
                this.constructors[e] = t,
                document.querySelectorAll("[data-section-type=" + e + "]").forEach(function(e) {
                    n._createInstance(e, t)
                })
            }
        }, {
            key: "_findInstance",
            value: function(e, t, n) {
                for (var i = 0; i < e.length; i++)
                    if (e[i][t] === n)
                        return e[i]
            }
        }, {
            key: "_removeInstance",
            value: function(e, t, n) {
                for (var i = e.length; i--; )
                    if (e[i][t] === n) {
                        e.splice(i, 1);
                        break
                    }
                return e
            }
        }, {
            key: "_onSectionLoad",
            value: function(e) {
                var t = e.target.querySelector("[data-section-id]");
                t && this._createInstance(t)
            }
        }, {
            key: "_onSectionUnload",
            value: function(e) {
                var t = this._findInstance(this.instances, "id", e.detail.sectionId);
                t && ("function" == typeof t.onUnload && t.onUnload(e),
                this.instances = this._removeInstance(this.instances, "id", e.detail.sectionId))
            }
        }, {
            key: "_onSelect",
            value: function(e) {
                var t = this._findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onSelect && t.onSelect(e)
            }
        }, {
            key: "_onDeselect",
            value: function(e) {
                var t = this._findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onDeselect && t.onDeselect(e)
            }
        }, {
            key: "_onReorder",
            value: function(e) {
                var t = this._findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onReorder && t.onReorder(e)
            }
        }, {
            key: "_onBlockSelect",
            value: function(e) {
                var t = this._findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onBlockSelect && t.onBlockSelect(e)
            }
        }, {
            key: "_onBlockDeselect",
            value: function(e) {
                var t = this._findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onBlockDeselect && t.onBlockDeselect(e)
            }
        }, {
            key: "_createInstance",
            value: function(e, t) {
                var n = e.getAttribute("data-section-id")
                  , i = e.getAttribute("data-section-type");
                if (t = t || this.constructors[i],
                "undefined" != typeof t) {
                    var o = Object.assign(new t(e), {
                        id: n,
                        type: i,
                        container: e
                    });
                    this.instances.push(o)
                }
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.flickityInstance = new Flickity(t.querySelector(".slideshow"),{
                pageDots: this.options.pageDots,
                prevNextButtons: this.options.prevNextButtons,
                wrapAround: !0,
                dragThreshold: 12,
                draggable: ">1",
                fade: "fade" === this.options.transitionEffect,
                setGallerySize: this.options.setGallerySize,
                adaptiveHeight: this.options.adaptiveHeight,
                autoPlay: !!this.options.autoPlay && this.options.cycleSpeed
            })
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.flickityInstance.destroy()
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                this.flickityInstance.isActive && (this.flickityInstance.selectCell(parseInt(e.target.getAttribute("data-block-index")), !1, e.detail.load),
                this.flickityInstance.pausePlayer())
            }
        }, {
            key: "onBlockDeselect",
            value: function() {
                this.flickityInstance.isActive && this.flickityInstance.unpausePlayer()
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.flickityInstance = new Flickity(t.querySelector(".text-with-icons"),{
                pageDots: !0,
                prevNextButtons: !1,
                wrapAround: !0,
                autoPlay: 5e3,
                watchCSS: !0
            })
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.flickityInstance.destroy()
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                this.flickityInstance.isActive && (this.flickityInstance.selectCell(parseInt(e.target.getAttribute("data-block-index")), !1, e.detail.load),
                this.flickityInstance.pausePlayer())
            }
        }, {
            key: "onBlockDeselect",
            value: function() {
                this.flickityInstance.isActive && this.flickityInstance.unpausePlayer()
            }
        }]),
        e
    }();
    t["default"] = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3)
      , o = n(0)
      , a = function() {
        function e(t) {
            _classCallCheck(this, e),
            this.element = t,
            this.domDelegate = new domDelegate.Delegate(this.element),
            this.options = JSON.parse(this.element.getAttribute("data-section-settings")),
            this.videoPreviewList = this.element.querySelector(".video-preview-list"),
            this.videos = this.element.querySelectorAll(".video-list .video-list__item"),
            this._attachListeners()
        }
        return _createClass(e, [{
            key: "onUnload",
            value: function() {
                this.domDelegate.off("click")
            }
        }, {
            key: "onBlockSelect",
            value: function(e) {
                this._selectVideo(e, e.target)
            }
        }, {
            key: "_attachListeners",
            value: function() {
                this.domDelegate.on("click", '[data-action="play-video"]', this._playVideo.bind(this)),
                this.domDelegate.on("click", '[data-action="select-video"]', this._selectVideo.bind(this))
            }
        }, {
            key: "_playVideo",
            value: function(e, t) {
                var n = t.querySelector("iframe");
                n.src = n.getAttribute("data-src"),
                t.classList.add("is-playing")
            }
        }, {
            key: "_selectVideo",
            value: function(e, t) {
                var n = this
                  , a = this.videos[parseInt(t.getAttribute("data-video-index"))];
                if (t.classList.add("is-selected"),
                a.setAttribute("aria-hidden", "false"),
                i["default"].getSiblings(t, ".is-selected").forEach(function(e) {
                    var t = n.videos[parseInt(e.getAttribute("data-video-index"))];
                    t.setAttribute("aria-hidden", "true"),
                    t.classList.remove("is-playing");
                    var i = t.querySelector("iframe")
                      , o = i.cloneNode(!1);
                    o.removeAttribute("src"),
                    i.parentNode.replaceChild(o, i),
                    e.classList.remove("is-selected")
                }),
                o["default"].matchesBreakpoint("phone")) {
                    var r = t.offsetLeft - (this.videoPreviewList.parentNode.clientWidth - t.clientWidth) / 2;
                    this.videoPreviewList.parentNode.scrollTo({
                        left: r,
                        behavior: "smooth"
                    })
                }
            }
        }]),
        e
    }();
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(28);
    n.d(t, "AccountSection", function() {
        return i["default"]
    });
    var o = n(29);
    n.d(t, "AnnouncementBarSection", function() {
        return o["default"]
    });
    var a = n(31);
    n.d(t, "BlogSection", function() {
        return a["default"]
    });
    var r = n(30);
    n.d(t, "BlogPostSection", function() {
        return r["default"]
    });
    var s = n(32);
    n.d(t, "BlogSidebarSection", function() {
        return s["default"]
    });
    var l = n(33);
    n.d(t, "CartSection", function() {
        return l["default"]
    });
    var c = n(34);
    n.d(t, "CollectionListSection", function() {
        return c["default"]
    });
    var u = n(35);
    n.d(t, "CollectionSection", function() {
        return u["default"]
    });
    var d = n(36);
    n.d(t, "FeaturedCollectionSection", function() {
        return d["default"]
    });
    var h = n(38);
    n.d(t, "GiftCardSection", function() {
        return h["default"]
    });
    var m = n(37);
    n.d(t, "FooterSection", function() {
        return m["default"]
    });
    var p = n(39);
    n.d(t, "HeaderSection", function() {
        return p["default"]
    });
    var f = n(40);
    n.d(t, "InstagramSection", function() {
        return f["default"]
    });
    var _ = n(41);
    n.d(t, "LoginSection", function() {
        return _["default"]
    });
    var y = n(42);
    n.d(t, "MapSection", function() {
        return y["default"]
    });
    var v = n(43);
    n.d(t, "MinimalHeaderSection", function() {
        return v["default"]
    });
    var g = n(4);
    n.d(t, "ProductSection", function() {
        return g["default"]
    });
    var w = n(46);
    n.d(t, "QuickLinksSection", function() {
        return w["default"]
    });
    var b = n(44);
    n.d(t, "PopupsSection", function() {
        return b["default"]
    });
    var k = n(45);
    n.d(t, "ProductRecommendations", function() {
        return k["default"]
    });
    var S = n(47);
    n.d(t, "RecentlyViewedProductsSection", function() {
        return S["default"]
    });
    var C = n(48);
    n.d(t, "SectionContainer", function() {
        return C["default"]
    });
    var E = n(49);
    n.d(t, "SlideshowSection", function() {
        return E["default"]
    });
    var L = n(50);
    n.d(t, "TextWithIconsSection", function() {
        return L["default"]
    });
    var A = n(51);
    n.d(t, "VideoSection", function() {
        return A["default"]
    })
}
, function(e, t, n) {
    n(8),
    n(5),
    n(1),
    n(3),
    n(2),
    n(20),
    n(0),
    n(21),
    n(11),
    n(22),
    n(12),
    n(9),
    n(13),
    n(14),
    n(23),
    n(15),
    n(24),
    n(16),
    n(17),
    n(25),
    n(6),
    n(18),
    n(19),
    n(26),
    n(10),
    n(7),
    n(27),
    n(28),
    n(29),
    n(30),
    n(31),
    n(32),
    n(33),
    n(34),
    n(35),
    n(36),
    n(37),
    n(38),
    n(39),
    n(40),
    n(41),
    n(42),
    n(43),
    n(44),
    n(45),
    n(4),
    n(46),
    n(47),
    n(48),
    n(49),
    n(50),
    n(51),
    n(52),
    e.exports = n(54)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(27)
      , o = n(21)
      , a = n(52);
    !function() {
        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
            t = t || window;
            for (var n = 0; n < this.length; n++)
                e.call(t, this[n], n, this)
        }
        ),
        new i.CollapsibleManager,
        new i.LoadingBar,
        new i.ModalManager,
        new i.PopoverManager;
        var e = new a.SectionContainer;
        e.register("account", a.AccountSection),
        e.register("announcement-bar", a.AnnouncementBarSection),
        e.register("blog", a.BlogSection),
        e.register("blog-sidebar", a.BlogSidebarSection),
        e.register("blog-post", a.BlogPostSection),
        e.register("cart", a.CartSection),
        e.register("collection-list", a.CollectionListSection),
        e.register("collection", a.CollectionSection),
        e.register("featured-collection", a.FeaturedCollectionSection),
        e.register("footer", a.FooterSection),
        e.register("gift-card", a.GiftCardSection),
        e.register("header", a.HeaderSection),
        e.register("instagram", a.InstagramSection),
        e.register("login", a.LoginSection),
        e.register("map", a.MapSection),
        e.register("minimal-header", a.MinimalHeaderSection),
        e.register("popups", a.PopupsSection),
        e.register("product-recommendations", a.ProductRecommendations),
        e.register("product", a.ProductSection),
        e.register("quick-links", a.QuickLinksSection),
        e.register("recently-viewed-products", a.RecentlyViewedProductsSection),
        e.register("slideshow", a.SlideshowSection),
        e.register("text-with-icons", a.TextWithIconsSection),
        e.register("video", a.VideoSection),
        function() {
            var e = new domDelegate.Delegate(document.body)
              , t = window.theme.shopCurrency
              , n = document.querySelectorAll(".currency-selector")
              , i = document.querySelectorAll(".currency-selector__value");
            if (window.theme.currencyConversionEnabled) {
                var a = function(e) {
                    n.forEach(function(t) {
                        t.value = e
                    }),
                    i.forEach(function(t) {
                        t.innerHTML = e
                    }),
                    o.CurrencyHelper.convertAll()
                };
                if (n.length > 0) {
                    var r = function(e) {
                        var t = e.target.value;
                        a(t)
                    };
                    n.forEach(function(e) {
                        e.addEventListener("change", r)
                    }),
                    e.on("click", '[data-action="select-currency"]', function(e, t) {
                        a(t.getAttribute("data-currency-code")),
                        document.dispatchEvent(new CustomEvent("popover:close"))
                    });
                    var s = localStorage.getItem("currency") || t;
                    s !== t && a(s)
                }
            }
        }(),
        function() {
            var e = new domDelegate.Delegate(document.body);
            e.on("change", ".locale-selector", function(e, t) {
                window.location.href = t.value
            })
        }(),
        function() {
            document.querySelectorAll(".rte table").forEach(function(e) {
                e.outerHTML = '<div class="table-wrapper">' + e.outerHTML + "</div>"
            }),
            document.querySelectorAll(".rte iframe").forEach(function(e) {
                e.src.indexOf("youtube") === -1 && e.src.indexOf("youtu.be") === -1 && e.src.indexOf("vimeo") === -1 || (e.outerHTML = '<div class="video-wrapper">' + e.outerHTML + "</div>",
                e.src = e.src)
            })
        }(),
        function() {
            var e = !1
              , t = void 0;
            document.body.addEventListener("touchstart", function(n) {
                var i = n.target.closest(".flickity-slider");
                if (!i)
                    return void (e = !1);
                var o = Flickity.data(i.closest(".flickity-enabled"));
                return o.isDraggable ? (e = !0,
                void (t = {
                    x: n.touches[0].pageX,
                    y: n.touches[0].pageY
                })) : void (e = !1)
            }),
            document.body.addEventListener("touchmove", function(n) {
                if (e && n.cancelable) {
                    var i = {
                        x: n.touches[0].pageX - t.x,
                        y: n.touches[0].pageY - t.y
                    };
                    Math.abs(i.x) > 8 && n.preventDefault()
                }
            }, {
                passive: !1
            })
        }(),
        function() {
            var e = new domDelegate.Delegate(document.body);
            e.on("click", ".expandable-content__toggle", function(e, t) {
                var n = t.closest(".expandable-content");
                if ("true" === n.getAttribute("aria-expanded")) {
                    n.setAttribute("aria-expanded", "false"),
                    n.style["max-height"] = n.offsetHeight + "px",
                    n.offsetHeight,
                    n.style["max-height"] = null;
                    var i = t.querySelector(".expandable-content__toggle-text");
                    i.innerHTML = i.getAttribute("data-view-more");
                    var a = n.closest(".card");
                    if (a) {
                        var r = a.getBoundingClientRect().top - 15 - parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));
                        window.scrollBy({
                            top: r,
                            behavior: "smooth"
                        })
                    }
                } else {
                    n.setAttribute("aria-expanded", "true"),
                    t.previousElementSibling && (t.previousElementSibling.style["margin-bottom"] = parseInt(t.clientHeight / 1.5) + "px"),
                    o.AnimationHelper.slideDown(n, null, "max-height");
                    var s = t.querySelector(".expandable-content__toggle-text");
                    s.innerHTML = s.getAttribute("data-view-less")
                }
            });
            var t = function() {
                document.querySelectorAll(".expandable-content[aria-expanded]").forEach(function(e) {
                    e.scrollHeight > e.clientHeight ? e.classList.add("expandable-content--expandable") : e.setAttribute("aria-expanded", "true")
                })
            };
            document.addEventListener("shopify:section:load", function(e) {
                t()
            }),
            t()
        }(),
        function() {
            if ("phone" === o.ResponsiveHelper.getCurrentBreakpoint())
                for (var e = document.querySelectorAll("input[autofocus]"), t = 0; t < e.length; t++)
                    e[t].blur(),
                    e[t].removeAttribute("autofocus")
        }(),
        function() {
            var e = new domDelegate.Delegate(document.body);
            e.on("click", '[href^="#"], [data-href]', function(e, t) {
                var n = t.hasAttribute("href") ? t.getAttribute("href") : t.getAttribute("data-href");
                if ("#" !== n) {
                    for (var i = document.querySelector(n), o = parseInt(t.getAttribute("data-offset") || 0), a = 0; "BODY" !== i.offsetParent.tagName; )
                        a += i.offsetTop,
                        i = i.offsetParent;
                    a += i.offsetTop,
                    window.scrollTo({
                        behavior: "smooth",
                        top: a - o
                    }),
                    e.preventDefault()
                }
            })
        }(),
        function() {
            function e(t) {
                9 === t.keyCode && (document.body.classList.add("is-tabbing"),
                window.removeEventListener("keydown", e))
            }
            window.addEventListener("keydown", e)
        }(),
        function() {
            var e = new domDelegate.Delegate(document.body);
            e.on("keyup", "input, textarea", function(e, t) {
                t.classList.toggle("is-filled", "" !== t.value)
            }),
            e.on("change", "select", function(e, t) {
                t.parentNode.classList.toggle("is-filled", "" !== t.value)
            })
        }(),
        function() {
            var e = document.links;
            fastdom.mutate(function() {
                for (var t = 0, n = e.length; t < n; t++)
                    e[t].hostname !== window.location.hostname && (e[t].target = "_blank")
            })
        }()
    }()
}
]);
