/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap-native-v4.min */ "./resources/js/bootstrap-native-v4.min.js");

var replayBtns = document.querySelectorAll(".showReplayForm");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = replayBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var btn = _step.value;
    btn.addEventListener("click", function (ev) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = document.querySelectorAll('.replayForm')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var repForm = _step2.value;

          if (repForm.className.indexOf('d-none') === -1) {
            repForm.className += ' d-none';
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var form = document.getElementById(ev.target.getAttribute("replay-id"));
      form.className = form.className.replace('d-none', '').trim(); // form.getElementsByClassName('form-control').focus()
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),

/***/ "./resources/js/bootstrap-native-v4.min.js":
/*!*************************************************!*\
  !*** ./resources/js/bootstrap-native-v4.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
} // Native Javascript for Bootstrap 4 v2.0.26 | © dnp_theme | MIT-License


!function (t, e) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i; }
}(this, function () {
  "use strict";

  var t = "undefined" != typeof global ? global : this || window,
      e = document,
      i = e.documentElement,
      n = "body",
      o = t.BSN = {},
      a = o.supports = [],
      l = "delay",
      r = "target",
      s = "animation",
      c = "getAttribute",
      d = "setAttribute",
      u = "parentNode",
      h = "length",
      f = "Transition",
      p = "Webkit",
      g = "style",
      m = "push",
      v = "active",
      w = "left",
      b = "top",
      T = "onmouseleave" in e ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"],
      y = /\b(top|bottom|left|right)+/,
      k = 0,
      C = p + f in i[g] || f.toLowerCase() in i[g],
      x = p + f in i[g] ? p.toLowerCase() + f + "End" : f.toLowerCase() + "end",
      A = p + "Duration" in i[g] ? p.toLowerCase() + f + "Duration" : f.toLowerCase() + "Duration",
      E = {
    start: "touchstart",
    end: "touchend",
    move: "touchmove"
  },
      L = function L(t) {
    t.focus ? t.focus() : t.setActive();
  },
      N = function N(t, e) {
    t.classList.add(e);
  },
      D = function D(t, e) {
    t.classList.remove(e);
  },
      I = function I(t, e) {
    return t.classList.contains(e);
  },
      H = function H(t, e) {
    return [].slice.call(t.getElementsByClassName(e));
  },
      B = function B(t, i) {
    var n = i || e;
    return "object" == _typeof(t) ? t : n.querySelector(t);
  },
      M = function M(t, i) {
    var n = i.charAt(0),
        o = i.substr(1);

    if ("." === n) {
      for (; t && t !== e; t = t[u]) {
        if (null !== B(i, t[u]) && I(t, o)) return t;
      }
    } else if ("#" === n) for (; t && t !== e; t = t[u]) {
      if (t.id === o) return t;
    }

    return !1;
  },
      S = function S(t, e, i) {
    t.addEventListener(e, i, !1);
  },
      W = function W(t, e, i) {
    t.removeEventListener(e, i, !1);
  },
      R = function R(t, e, i) {
    S(t, e, function n(o) {
      i(o), W(t, e, n);
    });
  },
      P = function P(e) {
    var i = C ? t.getComputedStyle(e)[A] : 0;
    return i = parseFloat(i), i = "number" != typeof i || isNaN(i) ? 0 : 1e3 * i;
  },
      z = function z(t, e) {
    var i = 0;
    P(t) ? R(t, x, function (t) {
      !i && e(t), i = 1;
    }) : setTimeout(function () {
      !i && e(), i = 1;
    }, 17);
  },
      O = function O(t, e, i) {
    var n = new CustomEvent(t + ".bs." + e);
    n.relatedTarget = i, this.dispatchEvent(n);
  },
      X = function X() {
    return {
      y: t.pageYOffset || i.scrollTop,
      x: t.pageXOffset || i.scrollLeft
    };
  },
      j = function j(t, o, a, l) {
    var r,
        s,
        c,
        d,
        u,
        h,
        f = {
      w: o.offsetWidth,
      h: o.offsetHeight
    },
        p = i.clientWidth || e[n].clientWidth,
        m = i.clientHeight || e[n].clientHeight,
        v = t.getBoundingClientRect(),
        T = l === e[n] ? X() : {
      x: l.offsetLeft + l.scrollLeft,
      y: l.offsetTop + l.scrollTop
    },
        k = {
      w: v.right - v[w],
      h: v.bottom - v[b]
    },
        C = I(o, "popover"),
        x = B(".arrow", o),
        A = v[b] + k.h / 2 - f.h / 2 < 0,
        E = v[w] + k.w / 2 - f.w / 2 < 0,
        L = v[w] + f.w / 2 + k.w / 2 >= p,
        N = v[b] + f.h / 2 + k.h / 2 >= m,
        D = v[b] - f.h < 0,
        H = v[w] - f.w < 0,
        M = v[b] + f.h + k.h >= m,
        S = v[w] + f.w + k.w >= p;
    a = (a === w || "right" === a) && H && S ? b : a, a = a === b && D ? "bottom" : a, a = "bottom" === a && M ? b : a, a = a === w && H ? "right" : a, a = "right" === a && S ? w : a, -1 === o.className.indexOf(a) && (o.className = o.className.replace(y, a)), u = x.offsetWidth, h = x.offsetHeight, a === w || "right" === a ? (s = a === w ? v[w] + T.x - f.w - (C ? u : 0) : v[w] + T.x + k.w, A ? (r = v[b] + T.y, c = k.h / 2 - u) : N ? (r = v[b] + T.y - f.h + k.h, c = f.h - k.h / 2 - u) : (r = v[b] + T.y - f.h / 2 + k.h / 2, c = f.h / 2 - (C ? .9 * h : h / 2))) : a !== b && "bottom" !== a || (r = a === b ? v[b] + T.y - f.h - (C ? h : 0) : v[b] + T.y + k.h, E ? (s = 0, d = v[w] + k.w / 2 - u) : L ? (s = p - 1.01 * f.w, d = f.w - (p - v[w]) + k.w / 2 - u / 2) : (s = v[w] + T.x - f.w / 2 + k.w / 2, d = f.w / 2 - u / 2)), o[g][b] = r + "px", o[g][w] = s + "px", c && (x[g][b] = c + "px"), d && (x[g][w] = d + "px");
  };

  o.version = "2.0.26";

  var U = function U(t) {
    t = B(t);

    var e = this,
        i = M(t, ".alert"),
        n = function n() {
      I(i, "fade") ? z(i, a) : a();
    },
        o = function o(n) {
      i = M(n[r], ".alert"), (t = B('[data-dismiss="alert"]', i)) && i && (t === n[r] || t.contains(n[r])) && e.close();
    },
        a = function a() {
      O.call(i, "closed", "alert"), W(t, "click", o), i[u].removeChild(i);
    };

    this.close = function () {
      i && t && I(i, "show") && (O.call(i, "close", "alert"), D(i, "show"), i && n());
    }, "Alert" in t || S(t, "click", o), t.Alert = e;
  };

  a[m](["Alert", U, '[data-dismiss="alert"]']);

  var q = function q(t) {
    t = B(t);

    var i = !1,
        n = "checked",
        o = function o(t) {
      32 === (t.which || t.keyCode) && t[r] === e.activeElement && l(t);
    },
        a = function a(t) {
      32 === (t.which || t.keyCode) && t.preventDefault();
    },
        l = function l(e) {
      var o = "LABEL" === e[r].tagName ? e[r] : "LABEL" === e[r][u].tagName ? e[r][u] : null;

      if (o) {
        var a = e[r],
            l = H(a[u], "btn"),
            s = o.getElementsByTagName("INPUT")[0];

        if (s) {
          if ("checkbox" === s.type && (s[n] ? (D(o, v), s[c](n), s.removeAttribute(n), s[n] = !1) : (N(o, v), s[c](n), s[d](n, n), s[n] = !0), i || (i = !0, O.call(s, "change", "button"), O.call(t, "change", "button"))), "radio" === s.type && !i && !s[n]) {
            N(o, v), s[d](n, n), s[n] = !0, O.call(s, "change", "button"), O.call(t, "change", "button"), i = !0;

            for (var f = 0, p = l[h]; f < p; f++) {
              var g = l[f],
                  m = g.getElementsByTagName("INPUT")[0];
              g !== o && I(g, v) && (D(g, v), m.removeAttribute(n), m[n] = !1, O.call(m, "change", "button"));
            }
          }

          setTimeout(function () {
            i = !1;
          }, 50);
        }
      }
    };

    "Button" in t || (S(t, "click", l), B("[tabindex]", t) && S(t, "keyup", o), S(t, "keydown", a));

    for (var s = H(t, "btn"), f = s[h], p = 0; p < f; p++) {
      !I(s[p], v) && B("input:checked", s[p]) && N(s[p], v);
    }

    t.Button = this;
  };

  a[m](["Button", q, '[data-toggle="buttons"]']);

  var F = function F(n, o) {
    n = B(n), o = o || {};
    var a = n[c]("data-interval"),
        l = o.interval,
        s = "false" === a ? 0 : parseInt(a),
        d = "hover" === n[c]("data-pause") || !1,
        u = "true" === n[c]("data-keyboard") || !1;
    this.keyboard = !0 === o.keyboard || u, this.pause = !("hover" !== o.pause && !d) && "hover", this.interval = "number" == typeof l ? l : !1 === l || 0 === s || !1 === s ? 0 : isNaN(s) ? 5e3 : s;
    var f = this,
        p = n.index = 0,
        g = n.timer = 0,
        m = !1,
        y = !1,
        k = null,
        x = null,
        A = null,
        L = H(n, "carousel-item"),
        M = L[h],
        R = this.direction = w,
        P = H(n, "carousel-control-prev")[0],
        X = H(n, "carousel-control-next")[0],
        j = B(".carousel-indicators", n),
        U = j && j.getElementsByTagName("LI") || [];

    if (!(M < 2)) {
      var q = function q() {
        !1 === f.interval || I(n, "paused") || (N(n, "paused"), !m && (clearInterval(g), g = null));
      },
          F = function F() {
        !1 !== f.interval && I(n, "paused") && (D(n, "paused"), !m && (clearInterval(g), g = null), !m && f.cycle());
      },
          Y = function Y(t) {
        if (t.preventDefault(), !m) {
          var e = t[r];
          if (!e || I(e, v) || !e[c]("data-slide-to")) return !1;
          p = parseInt(e[c]("data-slide-to"), 10), f.slideTo(p);
        }
      },
          G = function G(t) {
        if (t.preventDefault(), !m) {
          var e = t.currentTarget || t.srcElement;
          e === X ? p++ : e === P && p--, f.slideTo(p);
        }
      },
          J = function J(t) {
        if (!m) {
          switch (t.which) {
            case 39:
              p++;
              break;

            case 37:
              p--;
              break;

            default:
              return;
          }

          f.slideTo(p);
        }
      },
          K = function K(t) {
        t(n, E.move, V), t(n, E.end, Z);
      },
          Q = function Q(t) {
        y || (k = parseInt(t.touches[0].pageX), n.contains(t[r]) && (y = !0, K(S)));
      },
          V = function V(t) {
        return y ? (x = parseInt(t.touches[0].pageX), "touchmove" === t.type && t.touches[h] > 1 ? (t.preventDefault(), !1) : void 0) : void t.preventDefault();
      },
          Z = function Z(t) {
        if (y && !m && (A = x || parseInt(t.touches[0].pageX), y)) {
          if ((!n.contains(t[r]) || !n.contains(t.relatedTarget)) && Math.abs(k - A) < 75) return !1;
          x < k ? p++ : x > k && p--, y = !1, f.slideTo(p), K(W);
        }
      },
          $ = function $() {
        var e = n.getBoundingClientRect(),
            o = t.innerHeight || i.clientHeight;
        return e[b] <= o && e.bottom >= 0;
      },
          _ = function _(t) {
        for (var e = 0, i = U[h]; e < i; e++) {
          D(U[e], v);
        }

        U[t] && N(U[t], v);
      };

      this.cycle = function () {
        g && (clearInterval(g), g = null), g = setInterval(function () {
          $() && (p++, f.slideTo(p));
        }, this.interval);
      }, this.slideTo = function (t) {
        if (!m) {
          var i,
              o = this.getActiveIndex();
          o !== t && (o < t || 0 === o && t === M - 1 ? R = f.direction = w : (o > t || o === M - 1 && 0 === t) && (R = f.direction = "right"), t < 0 ? t = M - 1 : t >= M && (t = 0), p = t, i = R === w ? "next" : "prev", O.call(n, "slide", "carousel", L[t]), m = !0, clearInterval(g), g = null, _(t), C && I(n, "slide") ? (N(L[t], "carousel-item-" + i), L[t].offsetWidth, N(L[t], "carousel-item-" + R), N(L[o], "carousel-item-" + R), z(L[t], function (a) {
            var l = a && a[r] !== L[t] ? 1e3 * a.elapsedTime + 100 : 20;
            m && setTimeout(function () {
              m = !1, N(L[t], v), D(L[o], v), D(L[t], "carousel-item-" + i), D(L[t], "carousel-item-" + R), D(L[o], "carousel-item-" + R), O.call(n, "slid", "carousel", L[t]), e.hidden || !f.interval || I(n, "paused") || f.cycle();
            }, l);
          })) : (N(L[t], v), L[t].offsetWidth, D(L[o], v), setTimeout(function () {
            m = !1, f.interval && !I(n, "paused") && f.cycle(), O.call(n, "slid", "carousel", L[t]);
          }, 100)));
        }
      }, this.getActiveIndex = function () {
        return L.indexOf(H(n, "carousel-item active")[0]) || 0;
      }, "Carousel" in n || (f.pause && f.interval && (S(n, T[0], q), S(n, T[1], F), S(n, E.start, q), S(n, E.end, F)), L[h] > 1 && S(n, E.start, Q), X && S(X, "click", G), P && S(P, "click", G), j && S(j, "click", Y), !0 === f.keyboard && S(t, "keydown", J)), f.getActiveIndex() < 0 && (L[h] && N(L[0], v), U[h] && _(0)), f.interval && f.cycle(), n.Carousel = f;
    }
  };

  a[m](["Carousel", F, '[data-ride="carousel"]']);

  var Y = function Y(t, e) {
    t = B(t), e = e || {};

    var i,
        n,
        o = null,
        a = null,
        l = this,
        r = t[c]("data-parent"),
        s = function s(t, e) {
      O.call(t, "show", "collapse"), t.isAnimating = !0, N(t, "collapsing"), D(t, "collapse"), t[g].height = t.scrollHeight + "px", z(t, function () {
        t.isAnimating = !1, t[d]("aria-expanded", "true"), e[d]("aria-expanded", "true"), D(t, "collapsing"), N(t, "collapse"), N(t, "show"), t[g].height = "", O.call(t, "shown", "collapse");
      });
    },
        u = function u(t, e) {
      O.call(t, "hide", "collapse"), t.isAnimating = !0, t[g].height = t.scrollHeight + "px", D(t, "collapse"), D(t, "show"), N(t, "collapsing"), t.offsetWidth, t[g].height = "0px", z(t, function () {
        t.isAnimating = !1, t[d]("aria-expanded", "false"), e[d]("aria-expanded", "false"), D(t, "collapsing"), N(t, "collapse"), t[g].height = "", O.call(t, "hidden", "collapse");
      });
    };

    this.toggle = function (t) {
      t.preventDefault(), I(a, "show") ? l.hide() : l.show();
    }, this.hide = function () {
      a.isAnimating || (u(a, t), N(t, "collapsed"));
    }, this.show = function () {
      o && (i = B(".collapse.show", o), n = i && (B('[data-target="#' + i.id + '"]', o) || B('[href="#' + i.id + '"]', o))), (!a.isAnimating || i && !i.isAnimating) && (n && i !== a && (u(i, n), N(n, "collapsed")), s(a, t), D(t, "collapsed"));
    }, "Collapse" in t || S(t, "click", l.toggle), a = function () {
      var e = t.href && t[c]("href"),
          i = t[c]("data-target"),
          n = e || i && "#" === i.charAt(0) && i;
      return n && B(n);
    }(), a.isAnimating = !1, o = B(e.parent) || r && M(t, r), t.Collapse = l;
  };

  a[m](["Collapse", Y, '[data-toggle="collapse"]']);

  var G = function G(t, i) {
    t = B(t), this.persist = !0 === i || "true" === t[c]("data-persist") || !1;

    var n = this,
        o = t[u],
        a = null,
        l = B(".dropdown-menu", o),
        s = function () {
      for (var t = l.children, e = [], i = 0; i < t[h]; i++) {
        t[i].children[h] && "A" === t[i].children[0].tagName && e[m](t[i].children[0]), "A" === t[i].tagName && e[m](t[i]);
      }

      return e;
    }(),
        f = function f(t) {
      (t.href && "#" === t.href.slice(-1) || t[u] && t[u].href && "#" === t[u].href.slice(-1)) && this.preventDefault();
    },
        p = function p() {
      var i = t.open ? S : W;
      i(e, "click", g), i(e, "keydown", w), i(e, "keyup", b);
    },
        g = function g(e) {
      var i = e[r],
          o = i && ("Dropdown" in i || "Dropdown" in i[u]);
      (i !== l && !l.contains(i) || !n.persist && !o) && (a = i === t || t.contains(i) ? t : null, y(), f.call(e, i));
    },
        v = function v(e) {
      a = t, T(), f.call(e, e[r]);
    },
        w = function w(t) {
      var e = t.which || t.keyCode;
      38 !== e && 40 !== e || t.preventDefault();
    },
        b = function b(i) {
      var o = i.which || i.keyCode,
          r = e.activeElement,
          c = s.indexOf(r),
          d = r === t,
          f = l.contains(r),
          p = r[u] === l || r[u][u] === l;
      (p || d) && (c = d ? 0 : 38 === o ? c > 1 ? c - 1 : 0 : 40 === o && c < s[h] - 1 ? c + 1 : c, s[c] && L(s[c])), (s[h] && p || !s[h] && (f || d) || !f) && t.open && 27 === o && (n.toggle(), a = null);
    },
        T = function T() {
      O.call(o, "show", "dropdown", a), N(l, "show"), N(o, "show"), t[d]("aria-expanded", !0), O.call(o, "shown", "dropdown", a), t.open = !0, W(t, "click", v), setTimeout(function () {
        L(l.getElementsByTagName("INPUT")[0] || t), p();
      }, 1);
    },
        y = function y() {
      O.call(o, "hide", "dropdown", a), D(l, "show"), D(o, "show"), t[d]("aria-expanded", !1), O.call(o, "hidden", "dropdown", a), t.open = !1, p(), L(t), setTimeout(function () {
        S(t, "click", v);
      }, 1);
    };

    t.open = !1, this.toggle = function () {
      I(o, "show") && t.open ? y() : T();
    }, "Dropdown" in t || (!1 in l && l[d]("tabindex", "0"), S(t, "click", v)), t.Dropdown = n;
  };

  a[m](["Dropdown", G, '[data-toggle="dropdown"]']);

  var J = function J(o, a) {
    o = B(o);
    var l = o[c]("data-target") || o[c]("href"),
        s = B(l),
        f = I(o, "modal") ? o : s;

    if (I(o, "modal") && (o = null), f) {
      a = a || {}, this.keyboard = !1 !== a.keyboard && "false" !== f[c]("data-keyboard"), this.backdrop = "static" !== a.backdrop && "static" !== f[c]("data-backdrop") || "static", this.backdrop = !1 !== a.backdrop && "false" !== f[c]("data-backdrop") && this.backdrop, this.content = a.content;

      var p,
          m,
          v,
          b,
          T = this,
          y = null,
          x = H(i, "fixed-top").concat(H(i, "fixed-bottom")),
          A = function A() {
        var e = i.getBoundingClientRect();
        return t.innerWidth || e.right - Math.abs(e[w]);
      },
          E = function E() {
        var i,
            o = t.getComputedStyle(e[n]),
            a = parseInt(o.paddingRight, 10);
        if (p && (e[n][g].paddingRight = a + m + "px", f[g].paddingRight = m + "px", x[h])) for (var l = 0; l < x[h]; l++) {
          i = t.getComputedStyle(x[l]).paddingRight, x[l][g].paddingRight = parseInt(i) + m + "px";
        }
      },
          M = function M() {
        if (e[n][g].paddingRight = "", f[g].paddingRight = "", x[h]) for (var t = 0; t < x[h]; t++) {
          x[t][g].paddingRight = "";
        }
      },
          R = function R() {
        var t,
            i = e.createElement("div");
        return i.className = "modal-scrollbar-measure", e[n].appendChild(i), t = i.offsetWidth - i.clientWidth, e[n].removeChild(i), t;
      },
          X = function X() {
        p = e[n].clientWidth < A(), m = R();
      },
          j = function j() {
        k = 1;
        var t = e.createElement("div");
        null === (v = B(".modal-backdrop")) && (t[d]("class", "modal-backdrop fade"), v = t, e[n].appendChild(v));
      },
          U = function U() {
        v = B(".modal-backdrop"), v && null !== v && "object" == _typeof(v) && (k = 0, e[n].removeChild(v), v = null), O.call(f, "hidden", "modal");
      },
          q = function q() {
        I(f, "show") ? S(e, "keydown", Q) : W(e, "keydown", Q);
      },
          F = function F() {
        I(f, "show") ? S(t, "resize", T.update) : W(t, "resize", T.update);
      },
          Y = function Y() {
        I(f, "show") ? S(f, "click", V) : W(f, "click", V);
      },
          G = function G() {
        F(), Y(), q(), L(f), O.call(f, "shown", "modal", y);
      },
          J = function J() {
        f[g].display = "", o && L(o), function () {
          H(e, "modal show")[0] || (M(), D(e[n], "modal-open"), v && I(v, "fade") ? (D(v, "show"), z(v, U)) : U(), F(), Y(), q());
        }();
      },
          K = function K(t) {
        var e = t[r];
        (e = e.hasAttribute("data-target") || e.hasAttribute("href") ? e : e[u]) !== o || I(f, "show") || (f.modalTrigger = o, y = o, T.show(), t.preventDefault());
      },
          Q = function Q(t) {
        T.keyboard && 27 == t.which && I(f, "show") && T.hide();
      },
          V = function V(t) {
        var e = t[r];
        I(f, "show") && ("modal" === e[u][c]("data-dismiss") || "modal" === e[c]("data-dismiss") || e === f && "static" !== T.backdrop) && (T.hide(), y = null, t.preventDefault());
      };

      this.toggle = function () {
        I(f, "show") ? this.hide() : this.show();
      }, this.show = function () {
        O.call(f, "show", "modal", y);
        var t = H(e, "modal show")[0];
        t && t !== f && ("modalTrigger" in t && t.modalTrigger.Modal.hide(), "Modal" in t && t.Modal.hide()), this.backdrop && !k && j(), v && k && !I(v, "show") && (v.offsetWidth, b = P(v), N(v, "show")), setTimeout(function () {
          f[g].display = "block", X(), E(), N(e[n], "modal-open"), N(f, "show"), f[d]("aria-hidden", !1), I(f, "fade") ? z(f, G) : G();
        }, C && v ? b : 0);
      }, this.hide = function () {
        O.call(f, "hide", "modal"), v = B(".modal-backdrop"), b = v && P(v), D(f, "show"), f[d]("aria-hidden", !0), setTimeout(function () {
          I(f, "fade") ? z(f, J) : J();
        }, C && v ? b : 0);
      }, this.setContent = function (t) {
        B(".modal-content", f).innerHTML = t;
      }, this.update = function () {
        I(f, "show") && (X(), E());
      }, !o || "Modal" in o || S(o, "click", K), T.content && T.setContent(T.content), o ? (o.Modal = T, f.modalTrigger = o) : f.Modal = T;
    }
  };

  a[m](["Modal", J, '[data-toggle="modal"]']);

  var K = function K(i, o) {
    i = B(i), o = o || {};
    var a = i[c]("data-trigger"),
        u = i[c]("data-animation"),
        h = i[c]("data-placement"),
        f = i[c]("data-dismissible"),
        p = i[c]("data-delay"),
        m = i[c]("data-container"),
        v = '<button type="button" class="close">×</button>',
        w = B(o.container),
        y = B(m),
        k = M(i, ".modal"),
        C = M(i, ".fixed-top"),
        x = M(i, ".fixed-bottom");
    this.template = o.template ? o.template : null, this.trigger = o.trigger ? o.trigger : a || "hover", this[s] = o[s] && "fade" !== o[s] ? o[s] : u || "fade", this.placement = o.placement ? o.placement : h || b, this[l] = parseInt(o[l] || p) || 200, this.dismissible = !(!o.dismissible && "true" !== f), this.container = w || y || C || x || k || e[n];
    var A = this,
        E = i[c]("data-title") || null,
        L = i[c]("data-content") || null;

    if (L || this.template) {
      var H = null,
          R = 0,
          P = this.placement,
          X = function X(t) {
        null !== H && t[r] === B(".close", H) && A.hide();
      },
          U = function U() {
        A.container.removeChild(H), R = null, H = null;
      },
          q = function q() {
        E = o.title || i[c]("data-title") || null, L = o.content || i[c]("data-content") || null, H = e.createElement("div");
        var t = e.createElement("div");

        if (t[d]("class", "arrow"), H.appendChild(t), null !== L && null === A.template) {
          if (H[d]("role", "tooltip"), null !== E) {
            var n = e.createElement("h3");
            n[d]("class", "popover-header"), n.innerHTML = A.dismissible ? E + v : E, H.appendChild(n);
          }

          var a = e.createElement("div");
          a[d]("class", "popover-body"), a.innerHTML = A.dismissible && null === E ? L + v : L, H.appendChild(a);
        } else {
          var l = e.createElement("div");
          l.innerHTML = A.template, H.innerHTML = l.firstChild.innerHTML;
        }

        A.container.appendChild(H), H[g].display = "block", H[d]("class", "popover bs-popover-" + P + " " + A[s]);
      },
          F = function F() {
        !I(H, "show") && N(H, "show");
      },
          Y = function Y() {
        j(i, H, P, A.container);
      },
          G = function G(n) {
        "click" != A.trigger && "focus" != A.trigger || !A.dismissible && n(i, "blur", A.hide), A.dismissible && n(e, "click", X), n(t, "resize", A.hide);
      },
          J = function J() {
        G(S), O.call(i, "shown", "popover");
      },
          K = function K() {
        G(W), U(), O.call(i, "hidden", "popover");
      };

      this.toggle = function () {
        null === H ? A.show() : A.hide();
      }, this.show = function () {
        clearTimeout(R), R = setTimeout(function () {
          null === H && (P = A.placement, q(), Y(), F(), O.call(i, "show", "popover"), A[s] ? z(H, J) : J());
        }, 20);
      }, this.hide = function () {
        clearTimeout(R), R = setTimeout(function () {
          H && null !== H && I(H, "show") && (O.call(i, "hide", "popover"), D(H, "show"), A[s] ? z(H, K) : K());
        }, A[l]);
      }, "Popover" in i || ("hover" === A.trigger ? (S(i, T[0], A.show), A.dismissible || S(i, T[1], A.hide)) : "click" != A.trigger && "focus" != A.trigger || S(i, A.trigger, A.toggle)), i.Popover = A;
    }
  };

  a[m](["Popover", K, '[data-toggle="popover"]']);

  var Q = function Q(e, i) {
    e = B(e);
    var n = B(e[c]("data-target")),
        o = e[c]("data-offset");

    if (i = i || {}, i[r] || n) {
      for (var a, l = this, s = i[r] && B(i[r]) || n, d = s && s.getElementsByTagName("A"), f = parseInt(i.offset || o) || 10, p = [], g = [], w = e.offsetHeight < e.scrollHeight ? e : t, T = w === t, y = 0, k = d[h]; y < k; y++) {
        var C = d[y][c]("href"),
            x = C && "#" === C.charAt(0) && "#" !== C.slice(-1) && B(C);
        x && (p[m](d[y]), g[m](x));
      }

      var A = function A(t) {
        var i = p[t],
            n = g[t],
            o = i[u][u],
            l = I(o, "dropdown") && o.getElementsByTagName("A")[0],
            r = T && n.getBoundingClientRect(),
            s = I(i, v) || !1,
            c = (T ? r[b] + a : n.offsetTop) - f,
            d = T ? r.bottom + a - f : g[t + 1] ? g[t + 1].offsetTop - f : e.scrollHeight,
            h = a >= c && d > a;
        if (!s && h) I(i, v) || (N(i, v), l && !I(l, v) && N(l, v), O.call(e, "activate", "scrollspy", p[t]));else if (h) {
          if (!h && !s || s && h) return;
        } else I(i, v) && (D(i, v), l && I(l, v) && !H(i[u], v).length && D(l, v));
      },
          E = function E() {
        a = T ? X().y : e.scrollTop;

        for (var t = 0, i = p[h]; t < i; t++) {
          A(t);
        }
      };

      this.refresh = function () {
        E();
      }, "ScrollSpy" in e || (S(w, "scroll", l.refresh), S(t, "resize", l.refresh)), l.refresh(), e.ScrollSpy = l;
    }
  };

  a[m](["ScrollSpy", Q, '[data-spy="scroll"]']);

  var V = function V(t, e) {
    t = B(t);
    var i = t[c]("data-height");
    e = e || {}, this.height = !!C && (e.height || "true" === i);

    var n,
        o,
        a,
        l,
        r,
        s,
        f,
        p = this,
        m = M(t, ".nav"),
        b = !1,
        T = m && B(".dropdown-toggle", m),
        y = function y() {
      b[g].height = "", D(b, "collapsing"), m.isAnimating = !1;
    },
        k = function k() {
      b ? s ? y() : setTimeout(function () {
        b[g].height = f + "px", b.offsetWidth, z(b, y);
      }, 50) : m.isAnimating = !1, O.call(n, "shown", "tab", o);
    },
        x = function x() {
      b && (a[g]["float"] = w, l[g]["float"] = w, r = a.scrollHeight), N(l, v), O.call(n, "show", "tab", o), D(a, v), O.call(o, "hidden", "tab", n), b && (f = l.scrollHeight, s = f === r, N(b, "collapsing"), b[g].height = r + "px", b.offsetHeight, a[g]["float"] = "", l[g]["float"] = ""), I(l, "fade") ? setTimeout(function () {
        N(l, "show"), z(l, k);
      }, 20) : k();
    };

    if (m) {
      m.isAnimating = !1;

      var A = function A() {
        var t,
            e = H(m, v);
        return 1 !== e[h] || I(e[0][u], "dropdown") ? e[h] > 1 && (t = e[e[h] - 1]) : t = e[0], t;
      },
          E = function E() {
        return B(A()[c]("href"));
      },
          L = function L(t) {
        t.preventDefault(), n = t.currentTarget, !m.isAnimating && !I(n, v) && p.show();
      };

      this.show = function () {
        n = n || t, l = B(n[c]("href")), o = A(), a = E(), m.isAnimating = !0, D(o, v), o[d]("aria-selected", "false"), N(n, v), n[d]("aria-selected", "true"), T && (I(t[u], "dropdown-menu") ? I(T, v) || N(T, v) : I(T, v) && D(T, v)), O.call(o, "hide", "tab", n), I(a, "fade") ? (D(a, "show"), z(a, x)) : x();
      }, "Tab" in t || S(t, "click", L), p.height && (b = E()[u]), t.Tab = p;
    }
  };

  a[m](["Tab", V, '[data-toggle="tab"]']);

  var Z = function Z(t, e) {
    t = B(t), e = e || {};
    var i = t[c]("data-animation"),
        n = t[c]("data-autohide"),
        o = t[c]("data-delay");
    this.animation = !1 === e.animation || "false" === i ? 0 : 1, this.autohide = !1 === e.autohide || "false" === n ? 0 : 1, this[l] = parseInt(e[l] || o) || 500;

    var a = this,
        r = 0,
        s = M(t, ".toast"),
        d = function d() {
      D(s, "showing"), N(s, "show"), O.call(s, "shown", "toast"), a.autohide && a.hide();
    },
        u = function u() {
      N(s, "hide"), O.call(s, "hidden", "toast");
    },
        h = function h() {
      D(s, "show"), a.animation ? z(s, u) : u();
    },
        f = function f() {
      clearTimeout(r), r = null, N(s, "hide"), W(t, "click", a.hide), t.Toast = null, t = null, s = null;
    };

    this.show = function () {
      s && (O.call(s, "show", "toast"), a.animation && N(s, "fade"), D(s, "hide"), N(s, "showing"), a.animation ? z(s, d) : d());
    }, this.hide = function (t) {
      s && I(s, "show") && (O.call(s, "hide", "toast"), t ? h() : r = setTimeout(h, a[l]));
    }, this.dispose = function () {
      s && I(s, "show") && (D(s, "show"), a.animation ? z(s, f) : f());
    }, "Toast" in t || S(t, "click", a.hide), t.Toast = a;
  };

  a[m](["Toast", Z, '[data-dismiss="toast"]']);

  var $ = function $(i, o) {
    i = B(i), o = o || {};
    var a = i[c]("data-animation"),
        r = i[c]("data-placement"),
        u = i[c]("data-delay"),
        h = i[c]("data-container"),
        f = B(o.container),
        p = B(h),
        g = M(i, ".modal"),
        m = M(i, ".fixed-top"),
        v = M(i, ".fixed-bottom");
    this[s] = o[s] && "fade" !== o[s] ? o[s] : a || "fade", this.placement = o.placement ? o.placement : r || b, this[l] = parseInt(o[l] || u) || 200, this.container = f || p || m || v || g || e[n];
    var w = this,
        y = 0,
        k = this.placement,
        C = null,
        x = i[c]("title") || i[c]("data-title") || i[c]("data-original-title");

    if (x && "" != x) {
      var A = function A() {
        w.container.removeChild(C), C = null, y = null;
      },
          E = function E() {
        if (!(x = i[c]("title") || i[c]("data-title") || i[c]("data-original-title")) || "" == x) return !1;
        C = e.createElement("div"), C[d]("role", "tooltip");
        var t = e.createElement("div");
        t[d]("class", "arrow"), C.appendChild(t);
        var n = e.createElement("div");
        n[d]("class", "tooltip-inner"), C.appendChild(n), n.innerHTML = x, w.container.appendChild(C), C[d]("class", "tooltip bs-tooltip-" + k + " " + w[s]);
      },
          L = function L() {
        j(i, C, k, w.container);
      },
          H = function H() {
        !I(C, "show") && N(C, "show");
      },
          R = function R() {
        S(t, "resize", w.hide), O.call(i, "shown", "tooltip");
      },
          P = function P() {
        W(t, "resize", w.hide), A(), O.call(i, "hidden", "tooltip");
      };

      this.show = function () {
        clearTimeout(y), y = setTimeout(function () {
          if (null === C) {
            if (k = w.placement, 0 == E()) return;
            L(), H(), O.call(i, "show", "tooltip"), w[s] ? z(C, R) : R();
          }
        }, 20);
      }, this.hide = function () {
        clearTimeout(y), y = setTimeout(function () {
          C && I(C, "show") && (O.call(i, "hide", "tooltip"), D(C, "show"), w[s] ? z(C, P) : P());
        }, w[l]);
      }, this.toggle = function () {
        C ? w.hide() : w.show();
      }, "Tooltip" in i || (i[d]("data-original-title", x), i.removeAttribute("title"), S(i, T[0], w.show), S(i, T[1], w.hide)), i.Tooltip = w;
    }
  };

  a[m](["Tooltip", $, '[data-toggle="tooltip"]']);

  var _ = function _(t, e) {
    for (var i = 0, n = e[h]; i < n; i++) {
      new t(e[i]);
    }
  },
      tt = o.initCallback = function (t) {
    t = t || e;

    for (var i = 0, n = a[h]; i < n; i++) {
      _(a[i][1], t.querySelectorAll(a[i][2]));
    }
  };

  return e[n] ? tt() : S(e, "DOMContentLoaded", function () {
    tt();
  }), {
    Alert: U,
    Button: q,
    Carousel: F,
    Collapse: Y,
    Dropdown: G,
    Modal: J,
    Popover: K,
    ScrollSpy: Q,
    Tab: V,
    Toast: Z,
    Tooltip: $
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\bl\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\bl\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });