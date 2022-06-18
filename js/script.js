/* == Page scroll to id == Version: 1.6.8, License: MIT License (MIT) */
!function (e, t, a) { var n, l, s, i, o, r, c, u, h, f, g, d, p = "mPageScroll2id", _ = "mPS2id", C = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id", v = { scrollSpeed: 1e3, autoScrollSpeed: !0, scrollEasing: "easeInOutQuint", scrollingEasing: "easeOutQuint", pageEndSmoothScroll: !0, layout: "vertical", offset: 0, highlightSelector: !1, clickedClass: _ + "-clicked", targetClass: _ + "-target", highlightClass: _ + "-highlight", forceSingleHighlight: !1, keepHighlightUntilNext: !1, highlightByNextTarget: !1, disablePluginBelow: !1, clickEvents: !0, appendHash: !1, onStart: function () { }, onComplete: function () { }, defaultSelector: !1, live: !0, liveSelector: !1, excludeSelectors: !1, encodeLinks: !1, inIframe: !1 }, m = 0, I = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, S = { init: function (r) { var r = e.extend(!0, {}, v, r); if (e(a).data(_, r), l = e(a).data(_), !this.selector) { var c = "__" + _; this.each(function () { var t = e(this); t.hasClass(c) || t.addClass(c) }), this.selector = "." + c } l.liveSelector && (this.selector += "," + l.liveSelector), n = n ? n + "," + this.selector : this.selector, l.defaultSelector && ("object" == typeof e(n) && 0 !== e(n).length || (n = C)), l.clickEvents && e(a).off("." + _).on("click." + _, n, function (t) { if (O._isDisabled.call(null)) return void O._removeClasses.call(null); var a = e(this), n = a.attr("href"), s = a.prop("href").baseVal || a.prop("href"); l.excludeSelectors && a.is(l.excludeSelectors) || n && -1 !== n.indexOf("#/") || (O._reset.call(null), f = a.data("ps2id-offset") || 0, O._isValid.call(null, n, s) && O._findTarget.call(null, n) && (t.preventDefault(), i = "selector", o = a, O._setClasses.call(null, !0), O._scrollTo.call(null))) }), e(t).off("." + _).on("scroll." + _ + " resize." + _, function () { if (O._isDisabled.call(null)) return void O._removeClasses.call(null); var t = e("._" + _ + "-t"); t.each(function (a) { var n = e(this), l = n.attr("id"), s = O._findHighlight.call(null, l); O._setClasses.call(null, !1, n, s), a == t.length - 1 && O._extendClasses.call(null) }) }), s = !0, O._setup.call(null), O._live.call(null) }, scrollTo: function (t, a) { if (O._isDisabled.call(null)) return void O._removeClasses.call(null); if (t && "undefined" != typeof t) { O._isInit.call(null); var n = { layout: l.layout, offset: l.offset, clicked: !1 }, a = e.extend(!0, {}, n, a); O._reset.call(null), u = a.layout, h = a.offset, t = -1 !== t.indexOf("#") ? t : "#" + t, O._isValid.call(null, t) && O._findTarget.call(null, t) && (i = "scrollTo", o = a.clicked, o && O._setClasses.call(null, !0), O._scrollTo.call(null)) } }, destroy: function () { e(t).off("." + _), e(a).off("." + _).removeData(_), e("._" + _ + "-t").removeData(_), O._removeClasses.call(null, !0) } }, O = { _isDisabled: function () { var e = t, n = "inner", s = l.disablePluginBelow instanceof Array ? [l.disablePluginBelow[0] || 0, l.disablePluginBelow[1] || 0] : [l.disablePluginBelow || 0, 0]; return "innerWidth" in t || (n = "client", e = a.documentElement || a.body), e[n + "Width"] <= s[0] || e[n + "Height"] <= s[1] }, _isValid: function (e, a) { if (e) { a = a ? a : e; var n = -1 !== a.indexOf("#/") ? a.split("#/")[0] : a.split("#")[0], s = l.inIframe || t.location === t.parent.location ? t.location : t.parent.location, i = s.toString().split("#")[0]; return "#" !== e && -1 !== e.indexOf("#") && ("" === n || decodeURIComponent(n) === decodeURIComponent(i)) } }, _setup: function () { var t = O._highlightSelector(), n = 1, s = 0; return e(t).each(function () { var i = e(this), o = i.attr("href"), r = i.prop("href").baseVal || i.prop("href"); if (O._isValid.call(null, o, r)) { if (l.excludeSelectors && i.is(l.excludeSelectors)) return; var c = -1 !== o.indexOf("#/") ? o.split("#/")[1] : o.substring(o.indexOf("#") + 1), u = e(I.test(c) ? a.getElementById(c) : "#" + c); if (u.length > 0) { l.highlightByNextTarget && u !== s && (s ? s.data(_, { tn: u }) : u.data(_, { tn: "0" }), s = u), u.hasClass("_" + _ + "-t") || u.addClass("_" + _ + "-t"), u.data(_, { i: n }), i.hasClass("_" + _ + "-h") || i.addClass("_" + _ + "-h"); var h = O._findHighlight.call(null, c); O._setClasses.call(null, !1, u, h), m = n, n++, n == e(t).length && O._extendClasses.call(null) } } }) }, _highlightSelector: function () { return l.highlightSelector && "" !== l.highlightSelector ? l.highlightSelector : n }, _findTarget: function (t) { var n = -1 !== t.indexOf("#/") ? t.split("#/")[1] : t.substring(t.indexOf("#") + 1), s = e(I.test(n) ? a.getElementById(n) : "#" + n); if (s.length < 1 || "fixed" === s.css("position")) { if ("top" !== n) return; s = e("body") } return r = s, u || (u = l.layout), h = O._setOffset.call(null), c = [(s.offset().top - h[0]).toString(), (s.offset().left - h[1]).toString()], c[0] = c[0] < 0 ? 0 : c[0], c[1] = c[1] < 0 ? 0 : c[1], c }, _setOffset: function () { h || (h = l.offset ? l.offset : 0), f && (h = f); var t, a, n, s; switch (typeof h) { case "object": case "string": t = [h.y ? h.y : h, h.x ? h.x : h], a = [t[0] instanceof jQuery ? t[0] : e(t[0]), t[1] instanceof jQuery ? t[1] : e(t[1])], a[0].length > 0 ? (n = a[0].height(), "fixed" === a[0].css("position") && (n += a[0][0].offsetTop)) : n = !isNaN(parseFloat(t[0])) && isFinite(t[0]) ? parseInt(t[0]) : 0, a[1].length > 0 ? (s = a[1].width(), "fixed" === a[1].css("position") && (s += a[1][0].offsetLeft)) : s = !isNaN(parseFloat(t[1])) && isFinite(t[1]) ? parseInt(t[1]) : 0; break; case "function": t = h.call(null), t instanceof Array ? (n = t[0], s = t[1]) : n = s = t; break; default: n = s = parseInt(h) }return [n, s] }, _findHighlight: function (a) { var n = l.inIframe || t.location === t.parent.location ? t.location : t.parent.location, s = n.toString().split("#")[0], i = n.pathname; if (-1 !== s.indexOf("'") && (s = s.replace("'", "\\'")), -1 !== i.indexOf("'") && (i = i.replace("'", "\\'")), s = decodeURIComponent(s), i = decodeURIComponent(i), l.encodeLinks) { var o = encodeURI(s).toLowerCase(), r = encodeURI(i).toLowerCase(); return e("._" + _ + "-h[href='#" + a + "'],._" + _ + "-h[href='" + s + "#" + a + "'],._" + _ + "-h[href='" + i + "#" + a + "'],._" + _ + "-h[href='#/" + a + "'],._" + _ + "-h[href='" + s + "#/" + a + "'],._" + _ + "-h[href='" + i + "#/" + a + "'],._" + _ + "-h[href='" + o + "#/" + a + "'],._" + _ + "-h[href='" + o + "#" + a + "'],._" + _ + "-h[href='" + r + "#/" + a + "'],._" + _ + "-h[href='" + r + "#" + a + "']") } return e("._" + _ + "-h[href='#" + a + "'],._" + _ + "-h[href='" + s + "#" + a + "'],._" + _ + "-h[href='" + i + "#" + a + "'],._" + _ + "-h[href='#/" + a + "'],._" + _ + "-h[href='" + s + "#/" + a + "'],._" + _ + "-h[href='" + i + "#/" + a + "']") }, _setClasses: function (t, a, n) { var s = l.clickedClass, i = l.targetClass, r = l.highlightClass; t && s && "" !== s ? (e("." + s).removeClass(s), o.addClass(s)) : a && i && "" !== i && n && r && "" !== r && (O._currentTarget.call(null, a) ? (a.addClass(i), n.addClass(r)) : (!l.keepHighlightUntilNext || e("." + r).length > 1) && (a.removeClass(i), n.removeClass(r))) }, _extendClasses: function () { var t = l.targetClass, a = l.highlightClass, n = e("." + t), s = e("." + a), i = t + "-first", o = t + "-last", r = a + "-first", c = a + "-last"; e("._" + _ + "-t").removeClass(i + " " + o), e("._" + _ + "-h").removeClass(r + " " + c), l.forceSingleHighlight ? l.keepHighlightUntilNext && n.length > 1 ? (n.slice(0, 1).removeClass(t), s.slice(0, 1).removeClass(a)) : (n.slice(1).removeClass(t), s.slice(1).removeClass(a)) : (n.slice(0, 1).addClass(i).end().slice(-1).addClass(o), s.slice(0, 1).addClass(r).end().slice(-1).addClass(c)) }, _removeClasses: function (t) { e("." + l.clickedClass).removeClass(l.clickedClass), e("." + l.targetClass).removeClass(l.targetClass + " " + l.targetClass + "-first " + l.targetClass + "-last"), e("." + l.highlightClass).removeClass(l.highlightClass + " " + l.highlightClass + "-first " + l.highlightClass + "-last"), t && (e("._" + _ + "-t").removeClass("_" + _ + "-t"), e("._" + _ + "-h").removeClass("_" + _ + "-h")) }, _currentTarget: function (a) { if (a.data(_)) { var n = l["target_" + a.data(_).i], s = a.data("ps2id-target"), i = s && e(s)[0] ? e(s)[0].getBoundingClientRect() : a[0].getBoundingClientRect(); if ("undefined" != typeof n) { var o = a.offset().top, r = a.offset().left, c = n.from ? n.from + o : o, u = n.to ? n.to + o : o, h = n.fromX ? n.fromX + r : r, f = n.toX ? n.toX + r : r; return i.top >= u && i.top <= c && i.left >= f && i.left <= h } var g = e(t).height(), d = e(t).width(), p = s ? e(s).height() : a.height(), C = s ? e(s).width() : a.width(), v = 1 + p / g, m = v, I = g > p ? v * (g / p) : v, S = 1 + C / d, O = S, M = d > C ? S * (d / C) : S, b = [i.top <= g / m, i.bottom >= g / I, i.left <= d / O, i.right >= d / M]; if (l.highlightByNextTarget) { var y = a.data(_).tn; if (y) { var w = y[0].getBoundingClientRect(); "vertical" === l.layout ? b = [i.top <= g / 2, w.top > g / 2, 1, 1] : "horizontal" === l.layout && (b = [1, 1, i.left <= d / 2, w.left > d / 2]) } } return b[0] && b[1] && b[2] && b[3] } }, _scrollTo: function () { d = O._scrollSpeed.call(null), c = l.pageEndSmoothScroll ? O._pageEndSmoothScroll.call(null) : c; var a = e("html,body"), n = l.autoScrollSpeed ? O._autoScrollSpeed.call(null) : d, s = a.is(":animated") ? l.scrollingEasing : l.scrollEasing, i = e(t).scrollTop(), o = e(t).scrollLeft(); switch (u) { case "horizontal": o != c[1] && (O._callbacks.call(null, "onStart"), a.stop().animate({ scrollLeft: c[1] }, n, s).promise().then(function () { O._callbacks.call(null, "onComplete") })); break; case "auto": if (i != c[0] || o != c[1]) if (O._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) { var r; a.stop().animate({ pageYOffset: c[0], pageXOffset: c[1] }, { duration: n, easing: s, step: function (e, a) { "pageXOffset" == a.prop ? r = e : "pageYOffset" == a.prop && t.scrollTo(r, e) } }).promise().then(function () { O._callbacks.call(null, "onComplete") }) } else a.stop().animate({ scrollTop: c[0], scrollLeft: c[1] }, n, s).promise().then(function () { O._callbacks.call(null, "onComplete") }); break; default: i != c[0] && (O._callbacks.call(null, "onStart"), a.stop().animate({ scrollTop: c[0] }, n, s).promise().then(function () { O._callbacks.call(null, "onComplete") })) } }, _pageEndSmoothScroll: function () { var n = e(a).height(), l = e(a).width(), s = e(t).height(), i = e(t).width(); return [n - c[0] < s ? n - s : c[0], l - c[1] < i ? l - i : c[1]] }, _scrollSpeed: function () { var t = l.scrollSpeed; return o && o.length && o.add(o.parent()).each(function () { var a = e(this); if (a.attr("class")) { var n = a.attr("class").split(" "); for (var l in n) if (String(n[l]).match(/^ps2id-speed-\d+$/)) { t = n[l].split("ps2id-speed-")[1]; break } } }), parseInt(t) }, _autoScrollSpeed: function () { var n = e(t).scrollTop(), l = e(t).scrollLeft(), s = e(a).height(), i = e(a).width(), o = [d + d * Math.floor(Math.abs(c[0] - n) / s * 100) / 100, d + d * Math.floor(Math.abs(c[1] - l) / i * 100) / 100]; return Math.max.apply(Math, o) }, _callbacks: function (e) { if (l) switch (this[_] = { trigger: i, clicked: o, target: r, scrollTo: { y: c[0], x: c[1] } }, e) { case "onStart": if (l.appendHash && t.history && t.history.pushState && o && o.length) { var a = o.attr("href"), n = "#" + a.substring(a.indexOf("#") + 1); n !== t.location.hash && history.pushState("", "", n) } l.onStart.call(null, this[_]); break; case "onComplete": l.onComplete.call(null, this[_]) } }, _reset: function () { u = h = f = !1 }, _isInit: function () { s || S.init.apply(this) }, _live: function () { g = setTimeout(function () { l.live ? e(O._highlightSelector()).length !== m && O._setup.call(null) : g && clearTimeout(g), O._live.call(null) }, 1e3) }, _easing: function () { function t(e) { var t = 7.5625, a = 2.75; return 1 / a > e ? t * e * e : 2 / a > e ? t * (e -= 1.5 / a) * e + .75 : 2.5 / a > e ? t * (e -= 2.25 / a) * e + .9375 : t * (e -= 2.625 / a) * e + .984375 } e.easing.easeInQuad = e.easing.easeInQuad || function (e) { return e * e }, e.easing.easeOutQuad = e.easing.easeOutQuad || function (e) { return 1 - (1 - e) * (1 - e) }, e.easing.easeInOutQuad = e.easing.easeInOutQuad || function (e) { return .5 > e ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2 }, e.easing.easeInCubic = e.easing.easeInCubic || function (e) { return e * e * e }, e.easing.easeOutCubic = e.easing.easeOutCubic || function (e) { return 1 - Math.pow(1 - e, 3) }, e.easing.easeInOutCubic = e.easing.easeInOutCubic || function (e) { return .5 > e ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2 }, e.easing.easeInQuart = e.easing.easeInQuart || function (e) { return e * e * e * e }, e.easing.easeOutQuart = e.easing.easeOutQuart || function (e) { return 1 - Math.pow(1 - e, 4) }, e.easing.easeInOutQuart = e.easing.easeInOutQuart || function (e) { return .5 > e ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2 }, e.easing.easeInQuint = e.easing.easeInQuint || function (e) { return e * e * e * e * e }, e.easing.easeOutQuint = e.easing.easeOutQuint || function (e) { return 1 - Math.pow(1 - e, 5) }, e.easing.easeInOutQuint = e.easing.easeInOutQuint || function (e) { return .5 > e ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2 }, e.easing.easeInExpo = e.easing.easeInExpo || function (e) { return 0 === e ? 0 : Math.pow(2, 10 * e - 10) }, e.easing.easeOutExpo = e.easing.easeOutExpo || function (e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e) }, e.easing.easeInOutExpo = e.easing.easeInOutExpo || function (e) { return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2 }, e.easing.easeInSine = e.easing.easeInSine || function (e) { return 1 - Math.cos(e * Math.PI / 2) }, e.easing.easeOutSine = e.easing.easeOutSine || function (e) { return Math.sin(e * Math.PI / 2) }, e.easing.easeInOutSine = e.easing.easeInOutSine || function (e) { return -(Math.cos(Math.PI * e) - 1) / 2 }, e.easing.easeInCirc = e.easing.easeInCirc || function (e) { return 1 - Math.sqrt(1 - Math.pow(e, 2)) }, e.easing.easeOutCirc = e.easing.easeOutCirc || function (e) { return Math.sqrt(1 - Math.pow(e - 1, 2)) }, e.easing.easeInOutCirc = e.easing.easeInOutCirc || function (e) { return .5 > e ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2 }, e.easing.easeInElastic = e.easing.easeInElastic || function (e) { return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * (2 * Math.PI / 3)) }, e.easing.easeOutElastic = e.easing.easeOutElastic || function (e) { return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * (2 * Math.PI / 3)) + 1 }, e.easing.easeInOutElastic = e.easing.easeInOutElastic || function (e) { return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5))) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5)) / 2 + 1 }, e.easing.easeInBack = e.easing.easeInBack || function (e) { return 2.70158 * e * e * e - 1.70158 * e * e }, e.easing.easeOutBack = e.easing.easeOutBack || function (e) { return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2) }, e.easing.easeInOutBack = e.easing.easeInOutBack || function (e) { return .5 > e ? Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + 2.5949095) + 2) / 2 }, e.easing.easeInBounce = e.easing.easeInBounce || function (e) { return 1 - t(1 - e) }, e.easing.easeOutBounce = e.easing.easeOutBounce || t, e.easing.easeInOutBounce = e.easing.easeInOutBounce || function (e) { return .5 > e ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2 } } }; O._easing.call(), e.fn[p] = function (t) { return S[t] ? S[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : S.init.apply(this, arguments) }, e[p] = function (t) { return S[t] ? S[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : S.init.apply(this, arguments) }, e[p].defaults = v }(jQuery, window, document);
const preloader = document.querySelector('#preloader');
const password = document.querySelector('#password');
const skip = document.querySelector('#skip');
const back = document.querySelector('#back');
const buttonWelcome = document.querySelector('.block__welcome').lastElementChild;
const welcome = document.querySelector('.welcome');
const login = document.querySelector('.login');
const main = document.querySelector('.main');
const ButtonLogin = document.querySelector('.input-button__login');
const inputLogin = document.querySelector('.input__login');
const changeLogin = document.querySelector('.change__login');
const textLogin = document.querySelector(".text__login");
const body = document.querySelector('body');
const inputMain = document.querySelector(".input-search");
const leterMain = document.querySelector(".header-user__main");
const svgMain = document.querySelector(".block-search").lastElementChild;

let speed = 200;
let ti = 0;
let txt4 = "Create Account";




function typeWriter4() {
    if (ti < txt4.length + 1) {
        textLogin.innerHTML = txt4.slice(0, ti);
        ti++;
        setTimeout(typeWriter4, speed);
    }
}





skip.addEventListener('click', function (e) {
    welcome.classList.add('block-start__hide-soon');
    login.classList.add('block-start__hide-soon');
    welcome.classList.remove('block-start__show');
    body.classList.add('main__active');
})
back.addEventListener('click', function (e) {
    welcome.classList.add('block-start__show');
})
window.addEventListener('load', function (e) {
    preloader.classList.add('block-start__hide-slowly')
})
buttonWelcome.addEventListener('click', function (e) {
    welcome.classList.add('block-start__hide-soon');
    welcome.classList.remove('block-start__show');
    setTimeout(typeWriter4, 1000)
})
ButtonLogin.addEventListener('click', function (e) {
    login.classList.add('block-start__hide-soon');
    setTimeout(typeWriter4, 1000)
    body.classList.add('main__active');
})
inputMain.addEventListener('focus', function (e) {
    svgMain.classList.add('svg__main-active')
    e.target.value = "";
})
inputMain.addEventListener('blur', function (e) {
    svgMain.classList.remove('svg__main-active');
})
inputLogin.addEventListener('change', function (params) {
    if (inputLogin.value != "" && inputLogin.value != "name") {
        let leter = inputLogin.value[0]
        leterMain.innerHTML = leter.toUpperCase()
    }
    else {
        leterMain.innerHTML = ""
    }

}
)
inputLogin.addEventListener('focus', function (e) {
        e.target.value = "";
})
password.addEventListener('focus', function name(e) {
    password.setAttribute('type', 'password')
    e.target.value = "";
})

const list = document.querySelectorAll('.menu-item__menu');
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink)
)
    $(".menu-item__menu").mPageScroll2id({
        scrollSpeed: 2000
    });
