import N, { useState as J, useMemo as pe } from "react";
import { useTheme as K, useMediaQuery as ie, Card as Ar, CardContent as Ir, Checkbox as er, Avatar as me, Box as x, Typography as T, Chip as re, Popper as Dr, Paper as Oe, Divider as Re, Accordion as Mr, AccordionSummary as Gr, Button as he, AccordionDetails as Wr, Tooltip as rr, IconButton as ae, Menu as zr, MenuItem as ke, ClickAwayListener as Lr, Collapse as Ur, MenuList as $r, List as Nr, ListItem as Yr, ListItemButton as Br, ListItemText as qr, Stack as Vr, TextField as Hr, InputAdornment as Jr, Drawer as Kr, Popover as Xr } from "@mui/material";
import { Group as Zr, ExpandMore as Qr, SortByAlpha as en, Category as rn, ArrowDropUp as nn, ArrowDropDown as tn, ChevronRight as nr, ArrowBack as tr, Close as on, Search as an } from "@mui/icons-material";
var Ee = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function sn() {
  if (Xe) return te;
  Xe = 1;
  var t = N, o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, v, _) {
    var j, M = {}, s = null, C = null;
    _ !== void 0 && (s = "" + _), v.key !== void 0 && (s = "" + v.key), v.ref !== void 0 && (C = v.ref);
    for (j in v) i.call(v, j) && !h.hasOwnProperty(j) && (M[j] = v[j]);
    if (f && f.defaultProps) for (j in v = f.defaultProps, v) M[j] === void 0 && (M[j] = v[j]);
    return { $$typeof: o, type: f, key: s, ref: C, props: M, _owner: p.current };
  }
  return te.Fragment = l, te.jsx = d, te.jsxs = d, te;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function ln() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var t = N, o = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), k = Symbol.iterator, c = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = k && e[k] || e[c];
      return typeof n == "function" ? n : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          a[u - 1] = arguments[u];
        G("error", e, a);
      }
    }
    function G(e, n, a) {
      {
        var u = P.ReactDebugCurrentFrame, E = u.getStackAddendum();
        E !== "" && (n += "%s", a = a.concat([E]));
        var R = a.map(function(y) {
          return String(y);
        });
        R.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var m = !1, F = !1, A = !1, Y = !1, X = !1, Z;
    Z = Symbol.for("react.module.reference");
    function q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === h || X || e === p || e === _ || e === j || Y || e === C || m || F || A || typeof e == "object" && e !== null && (e.$$typeof === s || e.$$typeof === M || e.$$typeof === d || e.$$typeof === f || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function se(e, n, a) {
      var u = e.displayName;
      if (u)
        return u;
      var E = n.displayName || n.name || "";
      return E !== "" ? a + "(" + E + ")" : a;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function B(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case l:
          return "Portal";
        case h:
          return "Profiler";
        case p:
          return "StrictMode";
        case _:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var n = e;
            return le(n) + ".Consumer";
          case d:
            var a = e;
            return le(a._context) + ".Provider";
          case v:
            return se(e, e.render, "ForwardRef");
          case M:
            var u = e.displayName || null;
            return u !== null ? u : B(e.type) || "Memo";
          case s: {
            var E = e, R = E._payload, y = E._init;
            try {
              return B(y(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, O = 0, W, U, V, Pe, Fe, Ae, Ie;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function ir() {
      {
        if (O === 0) {
          W = console.log, U = console.info, V = console.warn, Pe = console.error, Fe = console.group, Ae = console.groupCollapsed, Ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: De,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        O++;
      }
    }
    function sr() {
      {
        if (O--, O === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: W
            }),
            info: w({}, e, {
              value: U
            }),
            warn: w({}, e, {
              value: V
            }),
            error: w({}, e, {
              value: Pe
            }),
            group: w({}, e, {
              value: Fe
            }),
            groupCollapsed: w({}, e, {
              value: Ae
            }),
            groupEnd: w({}, e, {
              value: Ie
            })
          });
        }
        O < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = P.ReactCurrentDispatcher, ge;
    function ce(e, n, a) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (E) {
            var u = E.stack.trim().match(/\n( *(at )?)/);
            ge = u && u[1] || "";
          }
        return `
` + ge + e;
      }
    }
    var be = !1, de;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      de = new lr();
    }
    function Me(e, n) {
      if (!e || be)
        return "";
      {
        var a = de.get(e);
        if (a !== void 0)
          return a;
      }
      var u;
      be = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = ve.current, ve.current = null, ir();
      try {
        if (n) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (L) {
              u = L;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (L) {
              u = L;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            u = L;
          }
          e();
        }
      } catch (L) {
        if (L && u && typeof L.stack == "string") {
          for (var g = L.stack.split(`
`), z = u.stack.split(`
`), I = g.length - 1, D = z.length - 1; I >= 1 && D >= 0 && g[I] !== z[D]; )
            D--;
          for (; I >= 1 && D >= 0; I--, D--)
            if (g[I] !== z[D]) {
              if (I !== 1 || D !== 1)
                do
                  if (I--, D--, D < 0 || g[I] !== z[D]) {
                    var $ = `
` + g[I].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && de.set(e, $), $;
                  }
                while (I >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        be = !1, ve.current = R, sr(), Error.prepareStackTrace = E;
      }
      var ee = e ? e.displayName || e.name : "", H = ee ? ce(ee) : "";
      return typeof e == "function" && de.set(e, H), H;
    }
    function cr(e, n, a) {
      return Me(e, !1);
    }
    function dr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ue(e, n, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, dr(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case _:
          return ce("Suspense");
        case j:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return cr(e.render);
          case M:
            return ue(e.type, n, a);
          case s: {
            var u = e, E = u._payload, R = u._init;
            try {
              return ue(R(E), n, a);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ge = {}, We = P.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var n = e._owner, a = ue(e.type, e._source, n ? n.type : null);
        We.setExtraStackFrame(a);
      } else
        We.setExtraStackFrame(null);
    }
    function ur(e, n, a, u, E) {
      {
        var R = Function.call.bind(ne);
        for (var y in e)
          if (R(e, y)) {
            var g = void 0;
            try {
              if (typeof e[y] != "function") {
                var z = Error((u || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              g = e[y](n, y, u, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              g = I;
            }
            g && !(g instanceof Error) && (fe(E), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", a, y, typeof g), fe(null)), g instanceof Error && !(g.message in Ge) && (Ge[g.message] = !0, fe(E), b("Failed %s type: %s", a, g.message), fe(null));
          }
      }
    }
    var fr = Array.isArray;
    function ye(e) {
      return fr(e);
    }
    function pr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, a = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function mr(e) {
      try {
        return ze(e), !1;
      } catch {
        return !0;
      }
    }
    function ze(e) {
      return "" + e;
    }
    function Le(e) {
      if (mr(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(e)), ze(e);
    }
    var Ue = P.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Ne;
    function hr(e) {
      if (ne.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vr(e) {
      if (ne.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gr(e, n) {
      typeof e.ref == "string" && Ue.current;
    }
    function br(e, n) {
      {
        var a = function() {
          $e || ($e = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function yr(e, n) {
      {
        var a = function() {
          Ne || (Ne = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var jr = function(e, n, a, u, E, R, y) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: a,
        props: y,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Sr(e, n, a, u, E) {
      {
        var R, y = {}, g = null, z = null;
        a !== void 0 && (Le(a), g = "" + a), vr(n) && (Le(n.key), g = "" + n.key), hr(n) && (z = n.ref, gr(n, E));
        for (R in n)
          ne.call(n, R) && !xr.hasOwnProperty(R) && (y[R] = n[R]);
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (R in I)
            y[R] === void 0 && (y[R] = I[R]);
        }
        if (g || z) {
          var D = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && br(y, D), z && yr(y, D);
        }
        return jr(e, g, z, E, u, Ue.current, y);
      }
    }
    var je = P.ReactCurrentOwner, Ye = P.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var n = e._owner, a = ue(e.type, e._source, n ? n.type : null);
        Ye.setExtraStackFrame(a);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Be() {
      {
        if (je.current) {
          var e = B(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wr(e) {
      return "";
    }
    var qe = {};
    function Cr(e) {
      {
        var n = Be();
        if (!n) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (n = `

Check the top-level render call using <` + a + ">.");
        }
        return n;
      }
    }
    function Ve(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Cr(n);
        if (qe[a])
          return;
        qe[a] = !0;
        var u = "";
        e && e._owner && e._owner !== je.current && (u = " It was passed a child from " + B(e._owner.type) + "."), Q(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, u), Q(null);
      }
    }
    function He(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var a = 0; a < e.length; a++) {
            var u = e[a];
            we(u) && Ve(u, n);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = S(e);
          if (typeof E == "function" && E !== e.entries)
            for (var R = E.call(e), y; !(y = R.next()).done; )
              we(y.value) && Ve(y.value, n);
        }
      }
    }
    function kr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var a;
        if (typeof n == "function")
          a = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === M))
          a = n.propTypes;
        else
          return;
        if (a) {
          var u = B(n);
          ur(a, e.props, "prop", u, e);
        } else if (n.PropTypes !== void 0 && !Se) {
          Se = !0;
          var E = B(n);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var n = Object.keys(e.props), a = 0; a < n.length; a++) {
          var u = n[a];
          if (u !== "children" && u !== "key") {
            Q(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), Q(null);
            break;
          }
        }
        e.ref !== null && (Q(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    var Je = {};
    function Ke(e, n, a, u, E, R) {
      {
        var y = q(e);
        if (!y) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = wr();
          z ? g += z : g += Be();
          var I;
          e === null ? I = "null" : ye(e) ? I = "array" : e !== void 0 && e.$$typeof === o ? (I = "<" + (B(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : I = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, g);
        }
        var D = Sr(e, n, a, E, R);
        if (D == null)
          return D;
        if (y) {
          var $ = n.children;
          if ($ !== void 0)
            if (u)
              if (ye($)) {
                for (var ee = 0; ee < $.length; ee++)
                  He($[ee], e);
                Object.freeze && Object.freeze($);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He($, e);
        }
        if (ne.call(n, "key")) {
          var H = B(e), L = Object.keys(n).filter(function(Fr) {
            return Fr !== "key";
          }), Ce = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[H + Ce]) {
            var Pr = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ce, H, Pr, H), Je[H + Ce] = !0;
          }
        }
        return e === i ? Er(D) : kr(D), D;
      }
    }
    function Or(e, n, a) {
      return Ke(e, n, a, !0);
    }
    function Rr(e, n, a) {
      return Ke(e, n, a, !1);
    }
    var Tr = Rr, _r = Or;
    oe.Fragment = i, oe.jsx = Tr, oe.jsxs = _r;
  }()), oe;
}
process.env.NODE_ENV === "production" ? Ee.exports = sn() : Ee.exports = ln();
var r = Ee.exports;
const bn = (t) => {
  const o = t.reduce((l, i) => (l[i.ageGroup] || (l[i.ageGroup] = {
    id: i.ageGroup,
    name: i.ageGroup,
    athletes: [],
    isExpanded: !1
  }), l[i.ageGroup].athletes.push(i), l), {});
  return Object.values(o).sort((l, i) => {
    const p = parseInt(l.name.replace("U", ""));
    return parseInt(i.name.replace("U", "")) - p;
  });
}, yn = (t) => {
  const o = t.reduce((l, i) => (l[i.position] || (l[i.position] = {
    id: i.position,
    name: i.position,
    athletes: []
  }), l[i.position].athletes.push(i), l), {});
  return Object.values(o).sort((l, i) => l.name.localeCompare(i.name));
}, cn = (t, o) => t.filter((l) => {
  if (o.selectedSquad)
    switch (o.selectedSquad) {
      case "current":
        if (!["U21", "U19", "U17"].includes(l.ageGroup))
          return !1;
        break;
      case "free-agents":
        return !1;
      case "historical":
        if (["U21", "U19", "U17"].includes(l.ageGroup))
          return !1;
        break;
    }
  if (o.searchTerm) {
    const i = o.searchTerm.toLowerCase();
    if (!l.name.toLowerCase().includes(i) && !l.position.toLowerCase().includes(i) && !l.ageGroup.toLowerCase().includes(i))
      return !1;
  }
  return !(o.selectedAgeGroups.length > 0 && !o.selectedAgeGroups.includes(l.ageGroup) || o.selectedPositions.length > 0 && !o.selectedPositions.includes(l.position));
}), dn = (t, o, l) => [...t].sort((i, p) => {
  let h = 0;
  switch (o) {
    case "name":
      h = i.name.localeCompare(p.name);
      break;
    case "position":
      h = i.position.localeCompare(p.position);
      break;
    case "ageGroup": {
      const d = parseInt(i.ageGroup.replace("U", ""));
      h = parseInt(p.ageGroup.replace("U", "")) - d;
      break;
    }
    default:
      h = 0;
  }
  return l === "desc" ? -h : h;
}), Te = (t) => {
  switch (t) {
    case "available":
      return "success";
    case "unavailable":
      return "default";
    case "injured":
      return "error";
    default:
      return "default";
  }
}, _e = (t) => {
  switch (t) {
    case "available":
      return "Available";
    case "unavailable":
      return "Unavailable";
    case "injured":
      return "Injured";
    default:
      return "Unknown";
  }
}, jn = ({
  athlete: t,
  isSelected: o,
  onSelectionChange: l,
  compact: i = !1
}) => {
  const p = K(), h = ie(p.breakpoints.down("sm")), d = i || h, f = (v) => {
    l(t.id, v.target.checked);
  };
  return /* @__PURE__ */ r.jsx(
    Ar,
    {
      variant: "outlined",
      sx: {
        mb: 1,
        backgroundColor: o ? "action.selected" : "transparent",
        "&:hover": {
          backgroundColor: "action.hover"
        },
        transition: p.transitions.create("background-color", {
          duration: p.transitions.duration.short
        }),
        border: "1px solid",
        borderColor: "divider"
      },
      children: /* @__PURE__ */ r.jsxs(
        Ir,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: d ? 1.5 : 2,
            px: d ? 2 : 3,
            "&:last-child": { pb: d ? 1.5 : 2 }
          },
          children: [
            /* @__PURE__ */ r.jsx(
              er,
              {
                checked: o,
                onChange: f,
                size: d ? "small" : "medium",
                sx: {
                  color: "primary.main",
                  "&.Mui-checked": {
                    color: "primary.main"
                  }
                }
              }
            ),
            /* @__PURE__ */ r.jsx(
              me,
              {
                src: t.avatar,
                alt: t.name,
                sx: {
                  width: d ? 32 : 40,
                  height: d ? 32 : 40,
                  border: "1px solid",
                  borderColor: "divider"
                },
                children: t.name.split(" ").map((v) => v[0]).join("").toUpperCase()
              }
            ),
            /* @__PURE__ */ r.jsxs(x, { sx: { flexGrow: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ r.jsx(
                T,
                {
                  variant: d ? "body2" : "body1",
                  fontWeight: "medium",
                  sx: {
                    color: "text.primary",
                    mb: 0.5,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: t.name
                }
              ),
              /* @__PURE__ */ r.jsx(
                T,
                {
                  variant: d ? "caption" : "body2",
                  color: "text.secondary",
                  sx: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: t.position
                }
              )
            ] }),
            /* @__PURE__ */ r.jsx(
              re,
              {
                label: _e(t.status),
                color: Te(t.status),
                size: d ? "small" : "medium",
                variant: "filled",
                sx: {
                  minWidth: d ? 60 : 80,
                  fontWeight: "medium",
                  fontFamily: '"Open Sans", sans-serif'
                }
              }
            )
          ]
        }
      )
    }
  );
}, un = ({
  athlete: t,
  squads: o = [],
  dateOfBirth: l,
  squadNumber: i,
  leagueId: p,
  labels: h,
  tags: d,
  enabled: f = !0,
  placement: v = "right",
  hoverOpenDelayMs: _ = 120,
  hoverCloseDelayMs: j = 140,
  children: M
}) => {
  const s = K(), C = N.useRef(null), [k, c] = N.useState(!1), S = N.useRef(null), P = N.useRef(null), b = () => {
    S.current && clearTimeout(S.current), P.current && clearTimeout(P.current);
  }, G = () => {
    f && (b(), S.current = setTimeout(() => c(!0), _));
  }, m = () => {
    f && (b(), P.current = setTimeout(() => c(!1), j));
  };
  N.useEffect(() => () => b(), []);
  const F = N.useMemo(() => {
    const A = [t.ageGroup, ...o].filter(Boolean);
    return Array.from(new Set(A));
  }, [t.ageGroup, o]);
  return /* @__PURE__ */ r.jsxs(x, { sx: { display: "inline-flex", alignItems: "center" }, children: [
    /* @__PURE__ */ r.jsx(
      x,
      {
        ref: C,
        onMouseEnter: G,
        onMouseLeave: m,
        sx: {
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          cursor: f ? "pointer" : "default"
        },
        children: M ?? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            me,
            {
              src: t.avatar,
              alt: t.name,
              sx: {
                width: 28,
                height: 28,
                border: "1px solid",
                borderColor: "divider"
              },
              children: t.name.split(" ").map((A) => A[0]).join("").toUpperCase()
            }
          ),
          /* @__PURE__ */ r.jsx(
            T,
            {
              variant: "body2",
              sx: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "0.95rem",
                color: "text.primary",
                lineHeight: 1.3
              },
              children: t.name
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ r.jsx(
      Dr,
      {
        open: f && k,
        anchorEl: C.current,
        placement: v,
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
        onMouseEnter: G,
        onMouseLeave: m,
        disablePortal: !1,
        sx: { zIndex: (A) => A.zIndex.tooltip },
        keepMounted: !0,
        children: /* @__PURE__ */ r.jsxs(
          Oe,
          {
            elevation: 4,
            sx: {
              width: 320,
              p: 2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: s.shadows[6]
            },
            children: [
              /* @__PURE__ */ r.jsxs(x, { sx: { display: "flex", alignItems: "center", gap: 1.5, mb: 1 }, children: [
                /* @__PURE__ */ r.jsx(
                  me,
                  {
                    src: t.avatar,
                    alt: t.name,
                    sx: { width: 40, height: 40, border: "1px solid", borderColor: "divider" },
                    children: t.name.split(" ").map((A) => A[0]).join("").toUpperCase()
                  }
                ),
                /* @__PURE__ */ r.jsxs(x, { sx: { minWidth: 0 }, children: [
                  /* @__PURE__ */ r.jsx(
                    T,
                    {
                      variant: "body1",
                      sx: {
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "text.primary",
                        lineHeight: 1.3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: t.name
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    T,
                    {
                      variant: "body2",
                      sx: {
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "0.875rem",
                        color: "text.secondary",
                        lineHeight: 1.3
                      },
                      children: t.position
                    }
                  )
                ] }),
                /* @__PURE__ */ r.jsx(
                  re,
                  {
                    label: _e(t.status),
                    color: Te(t.status),
                    size: "small",
                    sx: { ml: "auto" }
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx(Re, { sx: { mb: 1 } }),
              /* @__PURE__ */ r.jsxs(x, { sx: { mb: 1 }, children: [
                /* @__PURE__ */ r.jsx(
                  T,
                  {
                    variant: "caption",
                    sx: {
                      fontFamily: '"Open Sans", sans-serif',
                      color: "text.secondary",
                      display: "block",
                      mb: 0.5
                    },
                    children: "Squads"
                  }
                ),
                /* @__PURE__ */ r.jsx(x, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: F.map((A) => /* @__PURE__ */ r.jsx(re, { label: A, size: "small", variant: "outlined" }, A)) })
              ] }),
              /* @__PURE__ */ r.jsxs(x, { sx: { display: "grid", gridTemplateColumns: "auto 1fr", rowGap: 0.5, columnGap: 1 }, children: [
                /* @__PURE__ */ r.jsx(T, { variant: "caption", color: "text.secondary", children: "DOB" }),
                /* @__PURE__ */ r.jsx(T, { variant: "body2", children: l || "—" }),
                /* @__PURE__ */ r.jsx(T, { variant: "caption", color: "text.secondary", children: "Squad Number" }),
                /* @__PURE__ */ r.jsx(T, { variant: "body2", children: i ?? "—" }),
                /* @__PURE__ */ r.jsx(T, { variant: "caption", color: "text.secondary", children: "League ID" }),
                /* @__PURE__ */ r.jsx(T, { variant: "body2", children: p || "—" })
              ] }),
              (() => {
                const A = h && h.length ? h : d || [];
                return /* @__PURE__ */ r.jsxs(x, { sx: { mt: 1 }, children: [
                  /* @__PURE__ */ r.jsx(
                    T,
                    {
                      variant: "caption",
                      sx: {
                        fontFamily: '"Open Sans", sans-serif',
                        color: "text.secondary",
                        display: "block",
                        mb: 0.5
                      },
                      children: "Labels"
                    }
                  ),
                  /* @__PURE__ */ r.jsx(x, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5, minHeight: 24 }, children: A.map((Y) => /* @__PURE__ */ r.jsx(re, { label: Y, size: "small" }, Y)) })
                ] });
              })()
            ]
          }
        )
      }
    )
  ] });
}, xe = ({
  athlete: t,
  isSelected: o,
  onToggle: l,
  showGroupIcon: i = !1
}) => {
  const p = K(), h = () => {
    l(t.id);
  }, d = t.name.includes("Aggregate") || i;
  return /* @__PURE__ */ r.jsxs(
    x,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        py: 1,
        px: 2,
        minHeight: 48,
        backgroundColor: o ? "action.selected" : "transparent",
        "&:hover": {
          backgroundColor: o ? "action.selected" : "action.hover"
        },
        transition: p.transitions.create("background-color", {
          duration: p.transitions.duration.short
        })
      },
      children: [
        /* @__PURE__ */ r.jsx(
          er,
          {
            checked: o,
            onChange: h,
            size: "small",
            sx: {
              color: "primary.main",
              "&.Mui-checked": {
                color: "primary.main"
              },
              p: 0.5,
              mr: 1
            }
          }
        ),
        /* @__PURE__ */ r.jsx(
          un,
          {
            athlete: t,
            squads: [t.ageGroup],
            dateOfBirth: t.dateOfBirth,
            squadNumber: t.squadNumber,
            leagueId: t.leagueId,
            labels: t.labels,
            enabled: !d,
            children: /* @__PURE__ */ r.jsxs(x, { sx: { display: "flex", alignItems: "center" }, children: [
              /* @__PURE__ */ r.jsx(x, { sx: { mr: 1, position: "relative" }, children: /* @__PURE__ */ r.jsx(
                me,
                {
                  src: d ? void 0 : t.avatar,
                  alt: t.name,
                  sx: {
                    width: 34,
                    height: 34,
                    bgcolor: d ? "grey.300" : void 0
                  },
                  children: d && /* @__PURE__ */ r.jsx(
                    Zr,
                    {
                      sx: {
                        fontSize: 18,
                        color: "text.secondary"
                      }
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ r.jsxs(x, { sx: { flexGrow: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ r.jsx(
                  T,
                  {
                    variant: "body1",
                    sx: {
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "text.primary",
                      lineHeight: 1.3,
                      mb: 0
                    },
                    children: t.name
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  T,
                  {
                    variant: "body2",
                    sx: {
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: "0.875rem",
                      fontWeight: 400,
                      color: "text.secondary",
                      lineHeight: 1.3
                    },
                    children: t.position
                  }
                )
              ] })
            ] })
          }
        ),
        !d && /* @__PURE__ */ r.jsx(
          re,
          {
            label: _e(t.status),
            color: Te(t.status),
            size: "small",
            variant: "filled",
            sx: {
              ml: "auto",
              minWidth: 70,
              height: 24,
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "0.8125rem",
              fontWeight: 400,
              "& .MuiChip-label": {
                px: 1,
                lineHeight: "18px"
              }
            }
          }
        )
      ]
    }
  );
}, or = ({
  athletes: t,
  selectedAthletes: o,
  onSelectionChange: l,
  onBatchSelectionChange: i,
  groupBy: p,
  order: h,
  showOnlySelected: d = !1
}) => {
  const [f, v] = J(["Goalkeeper", "Defender", "Midfielder", "Forward"]), _ = (c) => {
    const S = o.includes(c);
    l(c, !S);
  }, j = (c) => {
    const S = c.every(
      (G) => o.includes(G.id)
    ), P = c.map((G) => G.id), b = !S;
    i ? i(P, b) : P.forEach((G) => {
      l(G, b);
    });
  }, M = (c) => (S, P) => {
    v(
      (b) => P ? [...b, c] : b.filter((G) => G !== c)
    );
  }, s = pe(() => d ? t.filter((c) => o.includes(c.id)) : t, [t, o, d]), C = (c) => {
    switch (c.toLowerCase().trim()) {
      case "goalkeeper":
        return "Goalkeeper";
      case "defender":
        return "Defender";
      case "midfielder":
      case "winger":
        return "Midfielder";
      case "striker":
      case "centre forward":
      case "center forward":
        return "Forward";
      default:
        return c;
    }
  }, k = pe(() => {
    const c = {};
    s.forEach((m) => {
      let F;
      p === "position" ? F = C(m.position) : p === "status" ? F = m.status : F = m.ageGroup, c[F] || (c[F] = []), c[F].push(m);
    });
    const S = Object.entries(c).map(([m, F]) => {
      var X;
      const A = [...F].sort((Z, q) => Z.name.localeCompare(q.name));
      h === "desc" && A.reverse();
      const Y = p === "position" ? {
        id: `${m}-aggregate`,
        name: m,
        position: "Aggregate",
        ageGroup: ((X = A[0]) == null ? void 0 : X.ageGroup) || "U23",
        status: "available",
        avatar: ""
      } : void 0;
      return {
        id: m,
        name: m,
        athletes: A,
        aggregateAthlete: Y
      };
    }), P = (m) => {
      const F = m.match(/U(\d+)/);
      return F ? parseInt(F[1], 10) : 0;
    }, b = ["Goalkeeper", "Defender", "Midfielder", "Forward"], G = (m) => {
      const F = b.indexOf(m);
      return F >= 0 ? F : 999;
    };
    return S.sort((m, F) => p === "squad" ? P(F.name) - P(m.name) : p === "position" ? G(m.name) - G(F.name) : m.name.localeCompare(F.name)), S;
  }, [s, p, h]);
  return /* @__PURE__ */ r.jsx(x, { sx: { width: "100%" }, children: k.map((c, S) => {
    const P = f.includes(c.id), b = c.athletes.filter(
      (m) => o.includes(m.id)
    ).length, G = c.athletes.every(
      (m) => o.includes(m.id)
    );
    return /* @__PURE__ */ r.jsxs(x, { children: [
      /* @__PURE__ */ r.jsxs(
        Mr,
        {
          expanded: P,
          onChange: M(c.id),
          elevation: 0,
          sx: {
            "&:before": {
              display: "none"
            },
            "& .MuiAccordionSummary-root": {
              minHeight: 48,
              px: 2,
              py: 0,
              "&.Mui-expanded": {
                minHeight: 48
              }
            },
            "& .MuiAccordionDetails-root": {
              p: 0
            }
          },
          children: [
            /* @__PURE__ */ r.jsx(
              Gr,
              {
                expandIcon: /* @__PURE__ */ r.jsx(Qr, {}),
                sx: {
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    transform: P ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    mr: 1
                  }
                },
                children: /* @__PURE__ */ r.jsxs(
                  x,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%"
                    },
                    children: [
                      /* @__PURE__ */ r.jsxs(
                        T,
                        {
                          variant: "body1",
                          sx: {
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: "1rem",
                            fontWeight: 400,
                            color: "text.primary"
                          },
                          children: [
                            c.name,
                            b > 0 && /* @__PURE__ */ r.jsxs(
                              T,
                              {
                                component: "span",
                                variant: "body2",
                                sx: { color: "text.secondary", ml: 0.5 },
                                children: [
                                  "(",
                                  b,
                                  ")"
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        he,
                        {
                          size: "small",
                          onClick: (m) => {
                            m.stopPropagation(), j(c.athletes);
                          },
                          sx: {
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: "0.875rem",
                            fontWeight: 400,
                            color: "text.primary",
                            textTransform: "none",
                            minWidth: "auto",
                            p: 0,
                            "&:hover": {
                              backgroundColor: "transparent",
                              textDecoration: "underline"
                            }
                          },
                          children: G ? "Deselect all" : "Select all"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ r.jsx(Wr, { children: /* @__PURE__ */ r.jsxs(x, { children: [
              c.aggregateAthlete && /* @__PURE__ */ r.jsx(
                xe,
                {
                  athlete: c.aggregateAthlete,
                  isSelected: o.includes(c.aggregateAthlete.id),
                  onToggle: _,
                  showGroupIcon: !0
                }
              ),
              p === "position" && /* @__PURE__ */ r.jsx(x, { sx: { px: 2, py: 0 }, children: /* @__PURE__ */ r.jsx(
                T,
                {
                  variant: "body2",
                  sx: {
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "text.primary"
                  },
                  children: c.name
                }
              ) }),
              c.athletes.map((m) => /* @__PURE__ */ r.jsx(
                xe,
                {
                  athlete: m,
                  isSelected: o.includes(m.id),
                  onToggle: _
                },
                m.id
              ))
            ] }) })
          ]
        }
      ),
      S < k.length - 1 && /* @__PURE__ */ r.jsx(Re, { sx: { mx: 2 } })
    ] }, c.id);
  }) });
}, fn = ({ order: t, onChange: o }) => {
  const l = t === "asc" ? "desc" : "asc", i = t === "asc" ? "Order A → Z" : "Order Z → A";
  return /* @__PURE__ */ r.jsx(rr, { title: i, arrow: !0, children: /* @__PURE__ */ r.jsx(
    ae,
    {
      size: "small",
      onClick: () => o(l),
      sx: {
        color: "text.secondary",
        "&:hover": { backgroundColor: "action.hover" },
        transform: t === "asc" ? "none" : "scaleX(-1)",
        // mirror for Z→A hint
        transition: "transform 120ms ease-in-out"
      },
      "aria-label": i,
      children: /* @__PURE__ */ r.jsx(en, { fontSize: "small" })
    }
  ) });
}, pn = ({ groupBy: t, onChange: o }) => {
  const [l, i] = N.useState(null), p = !!l, h = t === "position" ? "Group by: Position" : "Group by: Availability", d = (_) => {
    i(_.currentTarget);
  }, f = () => i(null), v = (_) => {
    o(_), f();
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(rr, { title: h, arrow: !0, children: /* @__PURE__ */ r.jsx(
      ae,
      {
        size: "small",
        onClick: d,
        sx: { color: "text.secondary", "&:hover": { backgroundColor: "action.hover" } },
        "aria-label": h,
        "aria-controls": p ? "group-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": p ? "true" : void 0,
        children: /* @__PURE__ */ r.jsx(rn, { fontSize: "small" })
      }
    ) }),
    /* @__PURE__ */ r.jsxs(
      zr,
      {
        id: "group-menu",
        anchorEl: l,
        open: p,
        onClose: f,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        children: [
          /* @__PURE__ */ r.jsx(ke, { selected: t === "position", onClick: () => v("position"), children: "Position" }),
          /* @__PURE__ */ r.jsx(ke, { selected: t === "status", onClick: () => v("status"), children: "Availability" })
        ]
      }
    )
  ] });
}, Qe = [
  { id: "squads", label: "Squads" },
  { id: "free-agents", label: "Free Agents" },
  { id: "historical", label: "Historical Athletes" },
  { id: "selected", label: "Selected", isSpecial: !0 }
], mn = ({
  selectedSquad: t,
  onSquadChange: o,
  selectedCount: l = 0,
  compact: i = !1
}) => {
  const p = K(), h = ie(p.breakpoints.down("sm")), [d, f] = J(!1), v = () => {
    f(!d);
  }, _ = (s) => {
    o(s), f(!1);
  }, j = () => {
    const s = Qe.find((C) => C.id === t);
    return (s == null ? void 0 : s.label) || "Squads";
  }, M = (s) => s.id === "selected" ? `${s.label} (${l})` : s.label;
  return /* @__PURE__ */ r.jsx(Lr, { onClickAway: () => d && f(!1), children: /* @__PURE__ */ r.jsxs(x, { sx: { position: "relative", width: "100%" }, children: [
    /* @__PURE__ */ r.jsx(
      he,
      {
        onClick: v,
        variant: "text",
        endIcon: d ? /* @__PURE__ */ r.jsx(nn, {}) : /* @__PURE__ */ r.jsx(tn, {}),
        sx: {
          width: "100%",
          justifyContent: "space-between",
          textTransform: "none",
          fontFamily: '"Open Sans", sans-serif',
          fontSize: i ? "0.875rem" : "1rem",
          fontWeight: 400,
          color: "text.primary",
          px: i ? 1.5 : 2,
          py: i ? 1 : 1.5,
          minHeight: i ? 36 : 44,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "action.hover",
            borderColor: "primary.main"
          }
        },
        children: j()
      }
    ),
    /* @__PURE__ */ r.jsx(Ur, { in: d, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ r.jsx(
      Oe,
      {
        elevation: 8,
        sx: {
          position: "absolute",
          top: "100%",
          left: 0,
          minWidth: "100%",
          width: "max-content",
          zIndex: p.zIndex.modal,
          maxHeight: h ? "70vh" : "400px",
          overflowY: "auto",
          mt: 0.5,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1
        },
        children: /* @__PURE__ */ r.jsx(
          $r,
          {
            sx: {
              py: 1,
              minWidth: "200px",
              "& .MuiMenuItem-root": {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1rem",
                fontWeight: 400,
                px: 2,
                py: 1.5,
                minHeight: "auto",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }
            },
            children: Qe.filter((s) => s.id !== "selected").map((s) => /* @__PURE__ */ r.jsxs(N.Fragment, { children: [
              s.isSpecial && /* @__PURE__ */ r.jsx(Re, { sx: { my: 0.5 } }),
              /* @__PURE__ */ r.jsxs(
                ke,
                {
                  selected: t === s.id,
                  onClick: () => _(s.id),
                  sx: {
                    backgroundColor: t === s.id ? "action.selected" : "transparent",
                    "&:hover": {
                      backgroundColor: t === s.id ? "action.selected" : "action.hover"
                    },
                    "&.Mui-selected": {
                      backgroundColor: "action.selected",
                      "&:hover": {
                        backgroundColor: "action.selected"
                      }
                    },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // Special styling for Selected option
                    ...s.isSpecial && {
                      fontWeight: 400,
                      color: "primary.main",
                      "&.Mui-selected": {
                        backgroundColor: "primary.light",
                        color: "primary.contrastText",
                        "&:hover": {
                          backgroundColor: "primary.light"
                        }
                      }
                    }
                  },
                  children: [
                    /* @__PURE__ */ r.jsx(
                      T,
                      {
                        variant: "body1",
                        sx: {
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: "1rem",
                          fontWeight: 400,
                          color: s.isSpecial ? "primary.main" : "text.primary",
                          flexGrow: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: M(s)
                      }
                    ),
                    s.hasSubmenu && /* @__PURE__ */ r.jsx(
                      nr,
                      {
                        fontSize: "small",
                        sx: {
                          color: "text.secondary",
                          ml: 1
                        }
                      }
                    )
                  ]
                }
              )
            ] }, s.id))
          }
        )
      }
    ) })
  ] }) });
}, xn = ({
  athletes: t,
  selectedAthletes: o,
  onSelectionChange: l,
  onBatchSelectionChange: i,
  order: p = "asc",
  groupBy: h = "position"
}) => {
  const [d, f] = J(null), v = N.useMemo(() => {
    const s = {};
    return t.forEach((C) => {
      const k = C.ageGroup;
      s[k] || (s[k] = []), s[k].push(C);
    }), Object.entries(s).map(([C, k]) => ({
      id: C,
      name: C,
      athletes: k
    })).sort((C, k) => {
      const c = (S) => {
        const P = S.match(/U(\d+)/);
        return P ? parseInt(P[1]) : 0;
      };
      return c(k.name) - c(C.name);
    });
  }, [t]), _ = (s) => {
    f(s);
  }, j = () => {
    f(null);
  }, M = (s) => {
    const C = s.every(
      (S) => o.includes(S.id)
    ), k = s.map((S) => S.id), c = !C;
    i ? i(k, c) : k.forEach((S) => {
      l(S, c);
    });
  };
  return d ? /* @__PURE__ */ r.jsxs(x, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ r.jsxs(
      x,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1.5,
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper"
        },
        children: [
          /* @__PURE__ */ r.jsx(
            ae,
            {
              onClick: j,
              size: "small",
              sx: { mr: 1 },
              children: /* @__PURE__ */ r.jsx(tr, { fontSize: "small" })
            }
          ),
          /* @__PURE__ */ r.jsx(
            T,
            {
              variant: "h6",
              sx: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1rem",
                fontWeight: 600,
                color: "text.primary",
                flexGrow: 1
              },
              children: d.name
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(x, { sx: { overflow: "auto" }, children: /* @__PURE__ */ r.jsx(
      or,
      {
        athletes: d.athletes,
        selectedAthletes: o,
        onSelectionChange: l,
        onBatchSelectionChange: i,
        groupBy: h,
        order: p
      }
    ) })
  ] }) : /* @__PURE__ */ r.jsx(Oe, { elevation: 0, sx: { width: "100%" }, children: /* @__PURE__ */ r.jsx(Nr, { sx: { py: 0 }, children: v.map((s) => {
    const C = s.name === "U23";
    return /* @__PURE__ */ r.jsx(
      Yr,
      {
        disablePadding: !0,
        sx: {
          backgroundColor: C ? "action.selected" : "transparent"
        },
        children: /* @__PURE__ */ r.jsxs(
          Br,
          {
            onClick: () => _(s),
            sx: {
              px: 2,
              py: 1,
              "&:hover": {
                backgroundColor: C ? "action.selected" : "action.hover"
              }
            },
            children: [
              /* @__PURE__ */ r.jsx(
                qr,
                {
                  primary: /* @__PURE__ */ r.jsxs(
                    T,
                    {
                      sx: {
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "text.primary"
                      },
                      children: [
                        s.name,
                        (() => {
                          const k = s.athletes.filter((c) => o.includes(c.id)).length;
                          return k > 0 ? /* @__PURE__ */ r.jsxs(T, { component: "span", variant: "body2", sx: { color: "text.secondary", ml: 0.5 }, children: [
                            "(",
                            k,
                            ")"
                          ] }) : null;
                        })()
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ r.jsxs(x, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                (() => {
                  const c = s.athletes.filter((S) => o.includes(S.id)).length === s.athletes.length && s.athletes.length > 0;
                  return /* @__PURE__ */ r.jsx(
                    he,
                    {
                      size: "small",
                      onClick: (S) => {
                        S.stopPropagation(), M(s.athletes);
                      },
                      sx: {
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "0.8125rem",
                        fontWeight: 400,
                        color: "text.primary",
                        textTransform: "none",
                        minWidth: "auto",
                        p: 0,
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline"
                        }
                      },
                      children: c ? "Deselect all" : "Select all"
                    }
                  );
                })(),
                /* @__PURE__ */ r.jsx(
                  nr,
                  {
                    fontSize: "small",
                    sx: { color: "text.secondary" }
                  }
                )
              ] })
            ]
          }
        )
      },
      s.id
    );
  }) }) });
}, ar = ({
  athletes: t,
  selectedAthletes: o = [],
  onSelectionChange: l,
  onClose: i,
  onBack: p,
  title: h = "Athletes",
  showBackButton: d = !1,
  maxHeight: f = 600,
  compact: v = !1,
  loading: _ = !1,
  error: j
}) => {
  const M = K(), s = ie(M.breakpoints.down("sm")), C = v || s, [k, c] = J({
    searchTerm: "",
    selectedAgeGroups: [],
    selectedPositions: [],
    selectedSquad: "current",
    sortBy: "name",
    sortOrder: "asc"
  }), [S, P] = J("asc"), [b, G] = J("position"), [m, F] = J("squads"), A = pe(() => {
    const w = cn(t, k);
    return dn(w, k.sortBy, k.sortOrder);
  }, [t, k]), Y = pe(() => m === "selected" ? A.filter((w) => o.includes(w.id)) : A, [A, o, m]), X = (w) => {
    c((O) => ({ ...O, searchTerm: w.target.value }));
  }, Z = (w) => {
    let O = "all";
    switch (F(w), w) {
      case "selected":
        O = "all";
        break;
      case "squads":
        O = "current";
        break;
      case "free-agents":
        O = "free-agents";
        break;
      case "historical":
        O = "historical";
        break;
      default:
        O = "all";
        break;
    }
    c((W) => ({ ...W, selectedSquad: O }));
  }, q = (w, O) => {
    const W = O ? [...o, w] : o.filter((U) => U !== w);
    l(W);
  }, se = (w, O) => {
    let W;
    O ? W = [...o, ...w.filter((U) => !o.includes(U))] : W = o.filter((U) => !w.includes(U)), l(W);
  }, le = (w) => P(w), B = (w) => G(w);
  return _ ? /* @__PURE__ */ r.jsx(x, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(T, { children: "Loading athletes..." }) }) : j ? /* @__PURE__ */ r.jsx(x, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(T, { color: "error", children: j }) }) : /* @__PURE__ */ r.jsxs(
    x,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        // If maxHeight is '100%', treat as full-height flexible container
        height: typeof f == "string" && f === "100%" ? "100%" : void 0,
        flex: typeof f == "string" && f === "100%" ? "1 1 auto" : void 0,
        minHeight: typeof f == "string" && f === "100%" ? 0 : void 0,
        maxHeight: typeof f == "string" && f === "100%" ? void 0 : typeof f == "number" ? `${f}px` : f,
        bgcolor: "background.paper",
        borderRadius: 1,
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ r.jsxs(
          x,
          {
            sx: {
              py: 1,
              px: C ? 2 : 3,
              borderBottom: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ r.jsxs(x, { sx: { display: "flex", alignItems: "center", mb: 0 }, children: [
                d && p && /* @__PURE__ */ r.jsx(
                  ae,
                  {
                    onClick: p,
                    size: C ? "small" : "medium",
                    sx: { mr: 1 },
                    children: /* @__PURE__ */ r.jsx(tr, {})
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  T,
                  {
                    variant: C ? "h6" : "h5",
                    fontWeight: "semibold",
                    sx: { flexGrow: 1 },
                    children: h
                  }
                ),
                i && /* @__PURE__ */ r.jsx(ae, { onClick: i, size: C ? "small" : "medium", children: /* @__PURE__ */ r.jsx(on, {}) })
              ] }),
              /* @__PURE__ */ r.jsxs(Vr, { spacing: 0.5, children: [
                /* @__PURE__ */ r.jsxs(x, { sx: { display: "flex", gap: 1, alignItems: "center", mb: 0 }, children: [
                  /* @__PURE__ */ r.jsx(x, { sx: { minWidth: 140, flexShrink: 0 }, children: /* @__PURE__ */ r.jsx(
                    mn,
                    {
                      selectedSquad: m,
                      onSquadChange: Z,
                      selectedCount: o.length,
                      compact: !0
                    }
                  ) }),
                  /* @__PURE__ */ r.jsx(
                    Hr,
                    {
                      placeholder: "Search",
                      value: k.searchTerm,
                      onChange: X,
                      size: "small",
                      sx: {
                        flexGrow: 1,
                        maxWidth: C ? 160 : 240,
                        "& .MuiInputBase-root": {
                          fontFamily: '"Open Sans", sans-serif'
                        }
                      },
                      InputProps: {
                        endAdornment: /* @__PURE__ */ r.jsx(Jr, { position: "end", children: /* @__PURE__ */ r.jsx(an, { fontSize: "small" }) })
                      }
                    }
                  ),
                  /* @__PURE__ */ r.jsx(pn, { groupBy: b, onChange: B }),
                  /* @__PURE__ */ r.jsx(fn, { order: S, onChange: le })
                ] }),
                /* @__PURE__ */ r.jsx(x, { children: /* @__PURE__ */ r.jsx(
                  re,
                  {
                    label: `Selected (${o.length})`,
                    color: o.length > 0 ? "primary" : "default",
                    size: "small",
                    clickable: o.length > 0,
                    onClick: o.length > 0 ? () => F("selected") : void 0,
                    onDelete: o.length > 0 ? () => l([]) : void 0,
                    sx: {
                      fontFamily: '"Open Sans", sans-serif',
                      "&.MuiChip-clickable": {
                        cursor: o.length > 0 ? "pointer" : "default"
                      }
                    }
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(x, { sx: { flexGrow: 1, overflow: "auto" }, children: m === "selected" ? (() => {
          const w = [...Y].filter((O) => o.includes(O.id)).sort((O, W) => O.name.localeCompare(W.name));
          return S === "desc" && w.reverse(), w.length === 0 ? /* @__PURE__ */ r.jsx(x, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(T, { variant: "body2", color: "text.secondary", children: "No selected athletes yet" }) }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: w.map((O) => {
            const W = o.includes(O.id);
            return /* @__PURE__ */ r.jsx(
              xe,
              {
                athlete: O,
                isSelected: W,
                onToggle: (U) => q(U, !W)
              },
              O.id
            );
          }) });
        })() : m === "historical" ? /* @__PURE__ */ r.jsx(
          or,
          {
            athletes: Y,
            selectedAthletes: o,
            onSelectionChange: q,
            onBatchSelectionChange: se,
            groupBy: b,
            order: S,
            showOnlySelected: !1
          }
        ) : m === "free-agents" ? k.searchTerm.trim() === "" ? /* @__PURE__ */ r.jsx(x, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(T, { variant: "body2", color: "text.secondary", children: "Use search to find free agents" }) }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: (() => {
          const w = k.searchTerm.trim(), O = w.split(" ").filter(Boolean).map((V) => V.charAt(0).toUpperCase() + V.slice(1)).join(" "), W = {
            id: `free-agent-${w.toLowerCase()}`,
            name: O || "Free Agent",
            position: "Forward",
            ageGroup: "FA",
            status: "available",
            avatar: void 0
          }, U = o.includes(W.id);
          return /* @__PURE__ */ r.jsx(
            xe,
            {
              athlete: W,
              isSelected: U,
              onToggle: (V) => q(V, !U)
            }
          );
        })() }) : /* @__PURE__ */ r.jsx(
          xn,
          {
            athletes: Y,
            selectedAthletes: o,
            onSelectionChange: q,
            onBatchSelectionChange: se,
            groupBy: b,
            order: S
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          x,
          {
            sx: {
              py: 1,
              px: C ? 2 : 3,
              borderTop: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: /* @__PURE__ */ r.jsx(x, { sx: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r.jsx(
              he,
              {
                variant: "contained",
                color: "primary",
                onClick: i,
                disabled: o.length === 0,
                sx: {
                  fontFamily: '"Open Sans", sans-serif',
                  textTransform: "none"
                },
                children: "Done"
              }
            ) })
          }
        )
      ]
    }
  );
}, Sn = ({
  open: t,
  onClose: o,
  anchor: l = "right",
  athletes: i,
  selectedAthletes: p,
  onSelectionChange: h,
  title: d = "Select Athletes",
  maxHeight: f,
  ...v
}) => {
  const _ = K(), j = ie(_.breakpoints.down("sm"));
  return /* @__PURE__ */ r.jsx(
    Kr,
    {
      anchor: l,
      open: t,
      onClose: o,
      variant: "temporary",
      sx: {
        "& .MuiDrawer-paper": {
          display: "flex",
          flexDirection: "column",
          width: j ? "100vw" : 500,
          maxWidth: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          boxShadow: _.shadows[16],
          borderRadius: j ? "16px 16px 0 0" : 0
        }
      },
      ModalProps: {
        keepMounted: !0,
        hideBackdrop: !0
      },
      children: /* @__PURE__ */ r.jsx("div", { style: { flex: 1, minHeight: 0 }, children: /* @__PURE__ */ r.jsx(
        ar,
        {
          athletes: i,
          selectedAthletes: p,
          onSelectionChange: h,
          onClose: o,
          title: d,
          compact: j,
          maxHeight: "100%",
          ...v
        }
      ) })
    }
  );
}, wn = ({
  open: t,
  onClose: o,
  anchorEl: l,
  athletes: i,
  selectedAthletes: p,
  onSelectionChange: h,
  title: d = "Select Athletes",
  maxHeight: f = 600,
  ...v
}) => {
  const _ = K(), j = ie(_.breakpoints.down("sm"));
  return /* @__PURE__ */ r.jsx(
    Xr,
    {
      open: t,
      anchorEl: l,
      onClose: o,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      PaperProps: {
        sx: {
          width: j ? "90vw" : 500,
          maxWidth: "95vw",
          height: j ? "75vh" : f,
          minHeight: j ? "75vh" : f,
          overflow: "hidden"
        }
      },
      children: /* @__PURE__ */ r.jsx(
        ar,
        {
          athletes: i,
          selectedAthletes: p,
          onSelectionChange: h,
          onClose: o,
          title: d,
          compact: j,
          maxHeight: f,
          ...v
        }
      )
    }
  );
};
export {
  jn as AthleteCard,
  Sn as AthleteSelectorDrawer,
  wn as AthleteSelectorDropdown,
  ar as AthleteSelectorTreeContent,
  xe as CompactAthleteCard,
  pn as GroupMenu,
  or as GroupedAthleteList,
  un as PlayerProfileHoverCard,
  xn as SimpleTreeNavigationList,
  fn as SortMenu,
  cn as filterAthletes,
  Te as getStatusColor,
  _e as getStatusLabel,
  bn as groupAthletesByAgeGroup,
  yn as groupAthletesByPosition,
  dn as sortAthletes
};
