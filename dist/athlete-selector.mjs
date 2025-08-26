import fe, { useState as q, useMemo as se, useRef as qr } from "react";
import { useTheme as J, useMediaQuery as K, Box as b, Button as te, Collapse as Yr, Paper as Ce, MenuList as Hr, MenuItem as Nr, Typography as z, Divider as Xe, Checkbox as Ze, Avatar as Qe, Chip as pe, Accordion as Vr, AccordionSummary as Jr, AccordionDetails as Kr, Tooltip as Xr, IconButton as ne, Stack as er, TextField as rr, InputAdornment as nr, Drawer as tr, Badge as Zr, Popover as or, Card as Qr, CardContent as en, List as rn, ListItem as nn, ListItemButton as tn, ListItemText as on } from "@mui/material";
import { ArrowDropUp as an, ArrowDropDown as ar, ChevronRight as ir, Group as sn, ExpandMore as ln, SortByAlpha as cn, ArrowBack as ke, Close as sr, Search as lr, People as un } from "@mui/icons-material";
var we = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function dn() {
  if (Ve) return ae;
  Ve = 1;
  var o = fe, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(C, g, _) {
    var p, h = {}, c = null, m = null;
    _ !== void 0 && (c = "" + _), g.key !== void 0 && (c = "" + g.key), g.ref !== void 0 && (m = g.ref);
    for (p in g) a.call(g, p) && !x.hasOwnProperty(p) && (h[p] = g[p]);
    if (C && C.defaultProps) for (p in g = C.defaultProps, g) h[p] === void 0 && (h[p] = g[p]);
    return { $$typeof: t, type: C, key: c, ref: m, props: h, _owner: f.current };
  }
  return ae.Fragment = s, ae.jsx = u, ae.jsxs = u, ae;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function fn() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var o = fe, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), C = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, l = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = k && e[k] || e[l];
      return typeof n == "function" ? n : null;
    }
    var P = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++)
          i[d - 1] = arguments[d];
        D("error", e, i);
      }
    }
    function D(e, n, i) {
      {
        var d = P.ReactDebugCurrentFrame, w = d.getStackAddendum();
        w !== "" && (n += "%s", i = i.concat([w]));
        var R = i.map(function(S) {
          return String(S);
        });
        R.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var j = !1, E = !1, H = !1, X = !1, N = !1, V;
    V = Symbol.for("react.module.reference");
    function Z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === x || N || e === f || e === _ || e === p || X || e === m || j || E || H || typeof e == "object" && e !== null && (e.$$typeof === c || e.$$typeof === h || e.$$typeof === u || e.$$typeof === C || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === V || e.getModuleId !== void 0));
    }
    function F(e, n, i) {
      var d = e.displayName;
      if (d)
        return d;
      var w = n.displayName || n.name || "";
      return w !== "" ? i + "(" + w + ")" : i;
    }
    function G(e) {
      return e.displayName || "Context";
    }
    function W(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case x:
          return "Profiler";
        case f:
          return "StrictMode";
        case _:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var n = e;
            return G(n) + ".Consumer";
          case u:
            var i = e;
            return G(i._context) + ".Provider";
          case g:
            return F(e, e.render, "ForwardRef");
          case h:
            var d = e.displayName || null;
            return d !== null ? d : W(e.type) || "Memo";
          case c: {
            var w = e, R = w._payload, S = w._init;
            try {
              return W(S(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, M = 0, L, Y, Oe, Re, _e, Te, Pe;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function gr() {
      {
        if (M === 0) {
          L = console.log, Y = console.info, Oe = console.warn, Re = console.error, _e = console.group, Te = console.groupCollapsed, Pe = console.groupEnd;
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
        M++;
      }
    }
    function vr() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: L
            }),
            info: O({}, e, {
              value: Y
            }),
            warn: O({}, e, {
              value: Oe
            }),
            error: O({}, e, {
              value: Re
            }),
            group: O({}, e, {
              value: _e
            }),
            groupCollapsed: O({}, e, {
              value: Te
            }),
            groupEnd: O({}, e, {
              value: Pe
            })
          });
        }
        M < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = P.ReactCurrentDispatcher, xe;
    function le(e, n, i) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (w) {
            var d = w.stack.trim().match(/\n( *(at )?)/);
            xe = d && d[1] || "";
          }
        return `
` + xe + e;
      }
    }
    var me = !1, ce;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new br();
    }
    function Ae(e, n) {
      if (!e || me)
        return "";
      {
        var i = ce.get(e);
        if (i !== void 0)
          return i;
      }
      var d;
      me = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = he.current, he.current = null, gr();
      try {
        if (n) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch ($) {
              d = $;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch ($) {
              d = $;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            d = $;
          }
          e();
        }
      } catch ($) {
        if ($ && d && typeof $.stack == "string") {
          for (var y = $.stack.split(`
`), U = d.stack.split(`
`), A = y.length - 1, I = U.length - 1; A >= 1 && I >= 0 && y[A] !== U[I]; )
            I--;
          for (; A >= 1 && I >= 0; A--, I--)
            if (y[A] !== U[I]) {
              if (A !== 1 || I !== 1)
                do
                  if (A--, I--, I < 0 || y[A] !== U[I]) {
                    var B = `
` + y[A].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, B), B;
                  }
                while (A >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        me = !1, he.current = R, vr(), Error.prepareStackTrace = w;
      }
      var re = e ? e.displayName || e.name : "", Q = re ? le(re) : "";
      return typeof e == "function" && ce.set(e, Q), Q;
    }
    function yr(e, n, i) {
      return Ae(e, !1);
    }
    function jr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ue(e, n, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, jr(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case _:
          return le("Suspense");
        case p:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return yr(e.render);
          case h:
            return ue(e.type, n, i);
          case c: {
            var d = e, w = d._payload, R = d._init;
            try {
              return ue(R(w), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Fe = {}, Ie = P.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var n = e._owner, i = ue(e.type, e._source, n ? n.type : null);
        Ie.setExtraStackFrame(i);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Sr(e, n, i, d, w) {
      {
        var R = Function.call.bind(oe);
        for (var S in e)
          if (R(e, S)) {
            var y = void 0;
            try {
              if (typeof e[S] != "function") {
                var U = Error((d || "React class") + ": " + i + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              y = e[S](n, S, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              y = A;
            }
            y && !(y instanceof Error) && (de(w), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, S, typeof y), de(null)), y instanceof Error && !(y.message in Fe) && (Fe[y.message] = !0, de(w), v("Failed %s type: %s", i, y.message), de(null));
          }
      }
    }
    var wr = Array.isArray;
    function ge(e) {
      return wr(e);
    }
    function Cr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function kr(e) {
      try {
        return We(e), !1;
      } catch {
        return !0;
      }
    }
    function We(e) {
      return "" + e;
    }
    function Me(e) {
      if (kr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(e)), We(e);
    }
    var Ge = P.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Le;
    function Or(e) {
      if (oe.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Rr(e) {
      if (oe.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function _r(e, n) {
      typeof e.ref == "string" && Ge.current;
    }
    function Tr(e, n) {
      {
        var i = function() {
          ze || (ze = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Pr(e, n) {
      {
        var i = function() {
          Le || (Le = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Dr = function(e, n, i, d, w, R, S) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: i,
        props: S,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Ar(e, n, i, d, w) {
      {
        var R, S = {}, y = null, U = null;
        i !== void 0 && (Me(i), y = "" + i), Rr(n) && (Me(n.key), y = "" + n.key), Or(n) && (U = n.ref, _r(n, w));
        for (R in n)
          oe.call(n, R) && !Er.hasOwnProperty(R) && (S[R] = n[R]);
        if (e && e.defaultProps) {
          var A = e.defaultProps;
          for (R in A)
            S[R] === void 0 && (S[R] = A[R]);
        }
        if (y || U) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && Tr(S, I), U && Pr(S, I);
        }
        return Dr(e, y, U, w, d, Ge.current, S);
      }
    }
    var ve = P.ReactCurrentOwner, Ue = P.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var n = e._owner, i = ue(e.type, e._source, n ? n.type : null);
        Ue.setExtraStackFrame(i);
      } else
        Ue.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function ye(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function $e() {
      {
        if (ve.current) {
          var e = W(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Fr(e) {
      return "";
    }
    var Be = {};
    function Ir(e) {
      {
        var n = $e();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function qe(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Ir(n);
        if (Be[i])
          return;
        Be[i] = !0;
        var d = "";
        e && e._owner && e._owner !== ve.current && (d = " It was passed a child from " + W(e._owner.type) + "."), ee(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), ee(null);
      }
    }
    function Ye(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var i = 0; i < e.length; i++) {
            var d = e[i];
            ye(d) && qe(d, n);
          }
        else if (ye(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = T(e);
          if (typeof w == "function" && w !== e.entries)
            for (var R = w.call(e), S; !(S = R.next()).done; )
              ye(S.value) && qe(S.value, n);
        }
      }
    }
    function Wr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === h))
          i = n.propTypes;
        else
          return;
        if (i) {
          var d = W(n);
          Sr(i, e.props, "prop", d, e);
        } else if (n.PropTypes !== void 0 && !be) {
          be = !0;
          var w = W(n);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var d = n[i];
          if (d !== "children" && d !== "key") {
            ee(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var He = {};
    function Ne(e, n, i, d, w, R) {
      {
        var S = Z(e);
        if (!S) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = Fr();
          U ? y += U : y += $e();
          var A;
          e === null ? A = "null" : ge(e) ? A = "array" : e !== void 0 && e.$$typeof === t ? (A = "<" + (W(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, y);
        }
        var I = Ar(e, n, i, w, R);
        if (I == null)
          return I;
        if (S) {
          var B = n.children;
          if (B !== void 0)
            if (d)
              if (ge(B)) {
                for (var re = 0; re < B.length; re++)
                  Ye(B[re], e);
                Object.freeze && Object.freeze(B);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(B, e);
        }
        if (oe.call(n, "key")) {
          var Q = W(e), $ = Object.keys(n).filter(function(Br) {
            return Br !== "key";
          }), je = $.length > 0 ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[Q + je]) {
            var $r = $.length > 0 ? "{" + $.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, Q, $r, Q), He[Q + je] = !0;
          }
        }
        return e === a ? Mr(I) : Wr(I), I;
      }
    }
    function Gr(e, n, i) {
      return Ne(e, n, i, !0);
    }
    function zr(e, n, i) {
      return Ne(e, n, i, !1);
    }
    var Lr = zr, Ur = Gr;
    ie.Fragment = a, ie.jsx = Lr, ie.jsxs = Ur;
  }()), ie;
}
process.env.NODE_ENV === "production" ? we.exports = dn() : we.exports = fn();
var r = we.exports;
const Se = [
  { id: "selected", label: "Selected", count: 1, isSpecial: !0 },
  { id: "squads", label: "Squads" },
  { id: "free-agents", label: "Free Agents" },
  { id: "historical", label: "Historical Athletes" }
], cr = ({
  selectedSquad: o,
  onSquadChange: t,
  selectedCount: s = 0,
  compact: a = !1
}) => {
  const f = J(), x = K(f.breakpoints.down("sm")), [u, C] = q(!1), g = () => {
    C(!u);
  }, _ = (c) => {
    t(c), x || C(!1);
  }, p = () => {
    const c = Se.find((m) => m.id === o);
    return (c == null ? void 0 : c.label) || "Squads";
  }, h = (c) => c.id === "selected" && s > 0 ? `${c.label} (${s})` : c.label;
  return /* @__PURE__ */ r.jsxs(b, { sx: { position: "relative", width: "100%" }, children: [
    /* @__PURE__ */ r.jsx(
      te,
      {
        onClick: g,
        variant: "text",
        endIcon: u ? /* @__PURE__ */ r.jsx(an, {}) : /* @__PURE__ */ r.jsx(ar, {}),
        sx: {
          width: "100%",
          justifyContent: "space-between",
          textTransform: "none",
          fontFamily: '"Open Sans", sans-serif',
          fontSize: a ? "0.875rem" : "1rem",
          fontWeight: 400,
          color: "text.primary",
          px: a ? 1.5 : 2,
          py: a ? 1 : 1.5,
          minHeight: a ? 36 : 44,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "action.hover",
            borderColor: "primary.main"
          }
        },
        children: p()
      }
    ),
    /* @__PURE__ */ r.jsx(Yr, { in: u, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ r.jsx(
      Ce,
      {
        elevation: 8,
        sx: {
          position: "absolute",
          top: "100%",
          left: 0,
          minWidth: "100%",
          width: "max-content",
          zIndex: f.zIndex.modal,
          maxHeight: x ? "70vh" : "400px",
          overflowY: "auto",
          mt: 0.5,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1
        },
        children: /* @__PURE__ */ r.jsx(
          Hr,
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
            children: Se.map((c, m) => /* @__PURE__ */ r.jsxs(fe.Fragment, { children: [
              /* @__PURE__ */ r.jsxs(
                Nr,
                {
                  selected: o === c.id,
                  onClick: () => _(c.id),
                  sx: {
                    backgroundColor: o === c.id ? "action.selected" : "transparent",
                    "&:hover": {
                      backgroundColor: o === c.id ? "action.selected" : "action.hover"
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
                    ...c.isSpecial && {
                      fontWeight: 600,
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
                      z,
                      {
                        variant: "body1",
                        sx: {
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: "1rem",
                          fontWeight: c.isSpecial ? 600 : 400,
                          color: c.isSpecial ? "primary.main" : "text.primary",
                          flexGrow: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: h(c)
                      }
                    ),
                    c.hasSubmenu && /* @__PURE__ */ r.jsx(
                      ir,
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
              ),
              c.isSpecial && m < Se.length - 1 && /* @__PURE__ */ r.jsx(Xe, { sx: { my: 0.5 } })
            ] }, c.id))
          }
        )
      }
    ) })
  ] });
}, gn = (o) => {
  const t = o.reduce((s, a) => (s[a.ageGroup] || (s[a.ageGroup] = {
    id: a.ageGroup,
    name: a.ageGroup,
    athletes: [],
    isExpanded: !1
  }), s[a.ageGroup].athletes.push(a), s), {});
  return Object.values(t).sort((s, a) => {
    const f = parseInt(s.name.replace("U", ""));
    return parseInt(a.name.replace("U", "")) - f;
  });
}, vn = (o) => {
  const t = o.reduce((s, a) => (s[a.position] || (s[a.position] = {
    id: a.position,
    name: a.position,
    athletes: []
  }), s[a.position].athletes.push(a), s), {});
  return Object.values(t).sort((s, a) => s.name.localeCompare(a.name));
}, ur = (o, t) => o.filter((s) => {
  if (t.selectedSquad)
    switch (t.selectedSquad) {
      case "current":
        if (!["U21", "U19", "U17"].includes(s.ageGroup))
          return !1;
        break;
      case "free-agents":
        return !1;
      case "historical":
        if (["U21", "U19", "U17"].includes(s.ageGroup))
          return !1;
        break;
    }
  if (t.searchTerm) {
    const a = t.searchTerm.toLowerCase();
    if (!s.name.toLowerCase().includes(a) && !s.position.toLowerCase().includes(a) && !s.ageGroup.toLowerCase().includes(a))
      return !1;
  }
  return !(t.selectedAgeGroups.length > 0 && !t.selectedAgeGroups.includes(s.ageGroup) || t.selectedPositions.length > 0 && !t.selectedPositions.includes(s.position));
}), dr = (o, t, s) => [...o].sort((a, f) => {
  let x = 0;
  switch (t) {
    case "name":
      x = a.name.localeCompare(f.name);
      break;
    case "position":
      x = a.position.localeCompare(f.position);
      break;
    case "ageGroup":
      const u = parseInt(a.ageGroup.replace("U", ""));
      x = parseInt(f.ageGroup.replace("U", "")) - u;
      break;
    default:
      x = 0;
  }
  return s === "desc" ? -x : x;
}), fr = (o) => {
  switch (o) {
    case "available":
      return "success";
    case "unavailable":
      return "default";
    case "injured":
      return "error";
    default:
      return "default";
  }
}, pr = (o) => {
  switch (o) {
    case "available":
      return "Available";
    case "unavailable":
      return "Unavailable";
    case "injured":
      return "Injured";
    default:
      return "Unknown";
  }
}, Ke = ({
  athlete: o,
  isSelected: t,
  onToggle: s,
  showGroupIcon: a = !1
}) => {
  const f = J(), x = () => {
    s(o.id);
  }, u = o.name.includes("Aggregate") || a;
  return /* @__PURE__ */ r.jsxs(
    b,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        py: 1,
        px: 2,
        minHeight: 48,
        backgroundColor: t ? "action.selected" : "transparent",
        "&:hover": {
          backgroundColor: t ? "action.selected" : "action.hover"
        },
        transition: f.transitions.create("background-color", {
          duration: f.transitions.duration.short
        })
      },
      children: [
        /* @__PURE__ */ r.jsx(
          Ze,
          {
            checked: t,
            onChange: x,
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
        /* @__PURE__ */ r.jsx(b, { sx: { mr: 1, position: "relative" }, children: /* @__PURE__ */ r.jsx(
          Qe,
          {
            src: u ? void 0 : o.avatar,
            alt: o.name,
            sx: {
              width: 34,
              height: 34,
              bgcolor: u ? "grey.300" : void 0
            },
            children: u && /* @__PURE__ */ r.jsx(
              sn,
              {
                sx: {
                  fontSize: 18,
                  color: "text.secondary"
                }
              }
            )
          }
        ) }),
        /* @__PURE__ */ r.jsxs(b, { sx: { flexGrow: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ r.jsx(
            z,
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
              children: o.name
            }
          ),
          /* @__PURE__ */ r.jsx(
            z,
            {
              variant: "body2",
              sx: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "text.secondary",
                lineHeight: 1.3
              },
              children: o.position
            }
          )
        ] }),
        !u && /* @__PURE__ */ r.jsx(
          pe,
          {
            label: pr(o.status),
            color: fr(o.status),
            size: "small",
            variant: "filled",
            sx: {
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
}, Ee = ({
  athletes: o,
  selectedAthletes: t,
  onSelectionChange: s,
  onBatchSelectionChange: a,
  groupBy: f,
  order: x,
  showOnlySelected: u = !1
}) => {
  const [C, g] = q(["Goalkeeper", "Defender", "Midfielder", "Forward"]), _ = (l) => {
    const T = t.includes(l);
    s(l, !T);
  }, p = (l) => {
    const T = l.every(
      (D) => t.includes(D.id)
    ), P = l.map((D) => D.id), v = !T;
    a ? a(P, v) : P.forEach((D) => {
      s(D, v);
    });
  }, h = (l) => (T, P) => {
    g(
      (v) => P ? [...v, l] : v.filter((D) => D !== l)
    );
  }, c = se(() => u ? o.filter((l) => t.includes(l.id)) : o, [o, t, u]), m = (l) => {
    switch (l.toLowerCase().trim()) {
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
        return l;
    }
  }, k = se(() => {
    const l = {};
    c.forEach((j) => {
      let E;
      f === "position" ? E = m(j.position) : f === "status" ? E = j.status : E = j.ageGroup, l[E] || (l[E] = []), l[E].push(j);
    });
    const T = Object.entries(l).map(([j, E]) => {
      var N;
      const H = [...E].sort((V, Z) => V.name.localeCompare(Z.name));
      x === "desc" && H.reverse();
      const X = f === "position" ? {
        id: `${j}-aggregate`,
        name: j,
        position: "Aggregate",
        ageGroup: ((N = H[0]) == null ? void 0 : N.ageGroup) || "U23",
        status: "available",
        avatar: ""
      } : void 0;
      return {
        id: j,
        name: j,
        athletes: H,
        aggregateAthlete: X
      };
    }), P = (j) => {
      const E = j.match(/U(\d+)/);
      return E ? parseInt(E[1], 10) : 0;
    }, v = ["Goalkeeper", "Defender", "Midfielder", "Forward"], D = (j) => {
      const E = v.indexOf(j);
      return E >= 0 ? E : 999;
    };
    return T.sort((j, E) => f === "squad" ? P(E.name) - P(j.name) : f === "position" ? D(j.name) - D(E.name) : j.name.localeCompare(E.name)), T;
  }, [c, f, x]);
  return /* @__PURE__ */ r.jsx(b, { sx: { width: "100%" }, children: k.map((l, T) => {
    const P = C.includes(l.id), v = l.athletes.filter(
      (j) => t.includes(j.id)
    ).length, D = l.athletes.every(
      (j) => t.includes(j.id)
    );
    return /* @__PURE__ */ r.jsxs(b, { children: [
      /* @__PURE__ */ r.jsxs(
        Vr,
        {
          expanded: P,
          onChange: h(l.id),
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
              Jr,
              {
                expandIcon: /* @__PURE__ */ r.jsx(ln, {}),
                sx: {
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    transform: P ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    mr: 1
                  }
                },
                children: /* @__PURE__ */ r.jsxs(
                  b,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%"
                    },
                    children: [
                      /* @__PURE__ */ r.jsxs(
                        z,
                        {
                          variant: "body1",
                          sx: {
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: "1rem",
                            fontWeight: 400,
                            color: "text.primary"
                          },
                          children: [
                            l.name,
                            v > 0 && /* @__PURE__ */ r.jsxs(
                              z,
                              {
                                component: "span",
                                variant: "body2",
                                sx: { color: "text.secondary", ml: 0.5 },
                                children: [
                                  "(",
                                  v,
                                  ")"
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        te,
                        {
                          size: "small",
                          onClick: (j) => {
                            j.stopPropagation(), p(l.athletes);
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
                          children: D ? "Deselect all" : "Select all"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ r.jsx(Kr, { children: /* @__PURE__ */ r.jsxs(b, { children: [
              l.aggregateAthlete && /* @__PURE__ */ r.jsx(
                Ke,
                {
                  athlete: l.aggregateAthlete,
                  isSelected: t.includes(l.aggregateAthlete.id),
                  onToggle: _,
                  showGroupIcon: !0
                }
              ),
              f === "position" && /* @__PURE__ */ r.jsx(b, { sx: { px: 2, py: 0 }, children: /* @__PURE__ */ r.jsx(
                z,
                {
                  variant: "body2",
                  sx: {
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "text.primary"
                  },
                  children: l.name
                }
              ) }),
              l.athletes.map((j) => /* @__PURE__ */ r.jsx(
                Ke,
                {
                  athlete: j,
                  isSelected: t.includes(j.id),
                  onToggle: _
                },
                j.id
              ))
            ] }) })
          ]
        }
      ),
      T < k.length - 1 && /* @__PURE__ */ r.jsx(Xe, { sx: { mx: 2 } })
    ] }, l.id);
  }) });
}, hr = ({ order: o, onChange: t }) => {
  const s = o === "asc" ? "desc" : "asc", a = o === "asc" ? "Order A → Z" : "Order Z → A";
  return /* @__PURE__ */ r.jsx(Xr, { title: a, arrow: !0, children: /* @__PURE__ */ r.jsx(
    ne,
    {
      size: "small",
      onClick: () => t(s),
      sx: {
        color: "text.secondary",
        "&:hover": { backgroundColor: "action.hover" },
        transform: o === "asc" ? "none" : "scaleX(-1)",
        // mirror for Z→A hint
        transition: "transform 120ms ease-in-out"
      },
      "aria-label": a,
      children: /* @__PURE__ */ r.jsx(cn, { fontSize: "small" })
    }
  ) });
}, xr = ({
  athletes: o,
  selectedAthletes: t = [],
  onSelectionChange: s,
  onClose: a,
  onBack: f,
  title: x = "Athletes",
  showBackButton: u = !1,
  maxHeight: C = 600,
  compact: g = !1,
  loading: _ = !1,
  error: p
}) => {
  const h = J(), c = K(h.breakpoints.down("sm")), m = g || c, [k, l] = q({
    searchTerm: "",
    selectedAgeGroups: [],
    selectedPositions: [],
    selectedSquad: "current",
    sortBy: "name",
    sortOrder: "asc"
  }), [T, P] = q("position"), [v, D] = q("asc"), [j, E] = q(!1), [H, X] = q("squads"), N = se(() => {
    const O = ur(o, k);
    return dr(O, k.sortBy, k.sortOrder);
  }, [o, k]), V = (O) => {
    l((M) => ({ ...M, searchTerm: O.target.value }));
  }, Z = (O) => {
    let M = "all", L = T;
    switch (X(O), O) {
      case "selected":
        M = "all", L = "position", E(!0);
        break;
      case "squads":
        M = "current", L = "squad", E(!1);
        break;
      case "free-agents":
        M = "free-agents", L = "position", E(!1);
        break;
      case "historical":
        M = "historical", L = "position", E(!1);
        break;
      default:
        M = "all", L = "position", E(!1);
        break;
    }
    P(L), l((Y) => ({ ...Y, selectedSquad: M }));
  }, F = (O, M) => {
    const L = M ? [...t, O] : t.filter((Y) => Y !== O);
    s(L);
  }, G = (O, M) => {
    let L;
    M ? L = [...t, ...O.filter((Y) => !t.includes(Y))] : L = t.filter((Y) => !O.includes(Y)), s(L);
  }, W = (O) => {
    D(O);
  };
  return _ ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(z, { children: "Loading athletes..." }) }) : p ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(z, { color: "error", children: p }) }) : /* @__PURE__ */ r.jsxs(
    b,
    {
      sx: {
        height: "100%",
        maxHeight: C,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ r.jsxs(
          b,
          {
            sx: {
              py: 1,
              px: m ? 2 : 3,
              borderBottom: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", alignItems: "center", mb: 0 }, children: [
                u && /* @__PURE__ */ r.jsx(
                  ne,
                  {
                    onClick: f,
                    sx: { mr: 1 },
                    size: m ? "small" : "medium",
                    children: /* @__PURE__ */ r.jsx(ke, {})
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  z,
                  {
                    variant: m ? "h6" : "h5",
                    fontWeight: "semibold",
                    sx: { flexGrow: 1 },
                    children: x
                  }
                ),
                a && /* @__PURE__ */ r.jsx(
                  ne,
                  {
                    onClick: a,
                    size: m ? "small" : "medium",
                    children: /* @__PURE__ */ r.jsx(sr, {})
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs(er, { spacing: 0.5, children: [
                /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: [
                  /* @__PURE__ */ r.jsx(b, { sx: { minWidth: 140, flexShrink: 0 }, children: /* @__PURE__ */ r.jsx(
                    cr,
                    {
                      selectedSquad: H,
                      onSquadChange: Z,
                      selectedCount: t.length,
                      compact: !0
                    }
                  ) }),
                  /* @__PURE__ */ r.jsx(
                    rr,
                    {
                      placeholder: "Search",
                      value: k.searchTerm,
                      onChange: V,
                      size: "small",
                      sx: {
                        flexGrow: 1,
                        "& .MuiInputBase-root": {
                          fontFamily: '"Open Sans", sans-serif'
                        }
                      },
                      InputProps: {
                        endAdornment: /* @__PURE__ */ r.jsx(nr, { position: "end", children: /* @__PURE__ */ r.jsx(lr, { fontSize: "small" }) })
                      }
                    }
                  ),
                  /* @__PURE__ */ r.jsx(hr, { order: v, onChange: W })
                ] }),
                t.length > 0 && /* @__PURE__ */ r.jsx(b, { children: /* @__PURE__ */ r.jsx(
                  pe,
                  {
                    label: `${t.length} selected`,
                    color: "primary",
                    size: "small",
                    onDelete: () => s([])
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(b, { sx: { flexGrow: 1, overflow: "auto" }, children: /* @__PURE__ */ r.jsx(
          Ee,
          {
            athletes: N,
            selectedAthletes: t,
            onSelectionChange: F,
            onBatchSelectionChange: G,
            groupBy: T,
            order: v,
            showOnlySelected: j
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          b,
          {
            sx: {
              py: 1,
              px: m ? 2 : 3,
              borderTop: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: /* @__PURE__ */ r.jsx(b, { sx: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r.jsx(
              te,
              {
                variant: "contained",
                color: "primary",
                onClick: a,
                disabled: t.length === 0,
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
}, bn = ({
  open: o,
  anchor: t = "right",
  width: s = 460,
  onClose: a,
  ...f
}) => {
  const x = J(), u = K(x.breakpoints.down("md")), C = u ? "100vw" : s, g = u ? "bottom" : t;
  return /* @__PURE__ */ r.jsx(
    tr,
    {
      open: o,
      onClose: a,
      anchor: g,
      sx: {
        "& .MuiDrawer-paper": {
          width: C,
          maxWidth: "100vw",
          height: u ? "90vh" : "100vh",
          maxHeight: "100vh",
          boxShadow: x.shadows[16],
          borderRadius: u ? "16px 16px 0 0" : 0
        }
      },
      ModalProps: {
        keepMounted: !0
        // Better open performance on mobile
      },
      children: /* @__PURE__ */ r.jsx(
        xr,
        {
          ...f,
          onClose: a,
          compact: u,
          maxHeight: "100%"
        }
      )
    }
  );
}, yn = ({
  selectedAthletes: o = [],
  buttonText: t = "Select Athletes",
  buttonVariant: s = "outlined",
  buttonColor: a = "primary",
  showBadge: f = !0,
  maxWidth: x = 400,
  maxHeight: u = 500,
  onSelectionChange: C,
  ...g
}) => {
  const _ = J(), p = K(_.breakpoints.down("sm")), [h, c] = q(null), m = qr(null), k = !!h, l = (D) => {
    c(D.currentTarget);
  }, T = () => {
    c(null);
  }, P = (D) => {
    C(D);
  }, v = /* @__PURE__ */ r.jsx(
    te,
    {
      ref: m,
      variant: s,
      color: a,
      onClick: l,
      endIcon: /* @__PURE__ */ r.jsx(ar, {}),
      startIcon: /* @__PURE__ */ r.jsx(un, {}),
      sx: {
        textTransform: "none",
        minWidth: p ? "100%" : "auto"
      },
      children: o.length > 0 ? `${o.length} ${o.length === 1 ? "athlete" : "athletes"} selected` : t
    }
  );
  return /* @__PURE__ */ r.jsxs(b, { sx: { display: "inline-block", width: p ? "100%" : "auto" }, children: [
    f && o.length > 0 ? /* @__PURE__ */ r.jsx(
      Zr,
      {
        badgeContent: o.length,
        color: "primary",
        max: 99,
        children: v
      }
    ) : v,
    /* @__PURE__ */ r.jsx(
      or,
      {
        open: k,
        anchorEl: h,
        onClose: T,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: p ? "center" : "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: p ? "center" : "left"
        },
        sx: {
          "& .MuiPopover-paper": {
            mt: 1,
            maxWidth: p ? "95vw" : x,
            maxHeight: p ? "80vh" : u,
            minWidth: p ? "90vw" : 350,
            borderRadius: 2,
            boxShadow: _.shadows[8]
          }
        },
        slotProps: {
          paper: {
            elevation: 8
          }
        },
        children: /* @__PURE__ */ r.jsx(Ce, { children: /* @__PURE__ */ r.jsx(
          xr,
          {
            ...g,
            selectedAthletes: o,
            onSelectionChange: P,
            onClose: T,
            compact: p,
            maxHeight: p ? "75vh" : u
          }
        ) })
      }
    )
  ] });
}, jn = ({
  athlete: o,
  isSelected: t,
  onSelectionChange: s,
  compact: a = !1
}) => {
  const f = J(), x = K(f.breakpoints.down("sm")), u = a || x, C = (g) => {
    s(o.id, g.target.checked);
  };
  return /* @__PURE__ */ r.jsx(
    Qr,
    {
      variant: "outlined",
      sx: {
        mb: 1,
        backgroundColor: t ? "action.selected" : "transparent",
        "&:hover": {
          backgroundColor: "action.hover"
        },
        transition: f.transitions.create("background-color", {
          duration: f.transitions.duration.short
        }),
        border: "1px solid",
        borderColor: "divider"
      },
      children: /* @__PURE__ */ r.jsxs(
        en,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: u ? 1.5 : 2,
            px: u ? 2 : 3,
            "&:last-child": { pb: u ? 1.5 : 2 }
          },
          children: [
            /* @__PURE__ */ r.jsx(
              Ze,
              {
                checked: t,
                onChange: C,
                size: u ? "small" : "medium",
                sx: {
                  color: "primary.main",
                  "&.Mui-checked": {
                    color: "primary.main"
                  }
                }
              }
            ),
            /* @__PURE__ */ r.jsx(
              Qe,
              {
                src: o.avatar,
                alt: o.name,
                sx: {
                  width: u ? 32 : 40,
                  height: u ? 32 : 40,
                  border: "1px solid",
                  borderColor: "divider"
                },
                children: o.name.split(" ").map((g) => g[0]).join("").toUpperCase()
              }
            ),
            /* @__PURE__ */ r.jsxs(b, { sx: { flexGrow: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ r.jsx(
                z,
                {
                  variant: u ? "body2" : "body1",
                  fontWeight: "medium",
                  sx: {
                    color: "text.primary",
                    mb: 0.5,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: o.name
                }
              ),
              /* @__PURE__ */ r.jsx(
                z,
                {
                  variant: u ? "caption" : "body2",
                  color: "text.secondary",
                  sx: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: o.position
                }
              )
            ] }),
            /* @__PURE__ */ r.jsx(
              pe,
              {
                label: pr(o.status),
                color: fr(o.status),
                size: u ? "small" : "medium",
                variant: "filled",
                sx: {
                  minWidth: u ? 60 : 80,
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
}, pn = ({
  athletes: o,
  selectedAthletes: t,
  onSelectionChange: s,
  onBatchSelectionChange: a,
  order: f = "asc"
}) => {
  const [x, u] = q(null), C = fe.useMemo(() => {
    const h = {};
    return o.forEach((c) => {
      const m = c.ageGroup;
      h[m] || (h[m] = []), h[m].push(c);
    }), Object.entries(h).map(([c, m]) => ({
      id: c,
      name: c,
      athletes: m
    })).sort((c, m) => {
      const k = (l) => {
        const T = l.match(/U(\d+)/);
        return T ? parseInt(T[1]) : 0;
      };
      return k(m.name) - k(c.name);
    });
  }, [o]), g = (h) => {
    u(h);
  }, _ = () => {
    u(null);
  }, p = (h) => {
    const c = h.every(
      (l) => t.includes(l.id)
    ), m = h.map((l) => l.id), k = !c;
    a ? a(m, k) : m.forEach((l) => {
      s(l, k);
    });
  };
  return x ? /* @__PURE__ */ r.jsxs(b, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ r.jsxs(
      b,
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
            ne,
            {
              onClick: _,
              size: "small",
              sx: { mr: 1 },
              children: /* @__PURE__ */ r.jsx(ke, { fontSize: "small" })
            }
          ),
          /* @__PURE__ */ r.jsx(
            z,
            {
              variant: "h6",
              sx: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1rem",
                fontWeight: 600,
                color: "text.primary",
                flexGrow: 1
              },
              children: x.name
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(b, { sx: { overflow: "auto" }, children: /* @__PURE__ */ r.jsx(
      Ee,
      {
        athletes: x.athletes,
        selectedAthletes: t,
        onSelectionChange: s,
        onBatchSelectionChange: a,
        groupBy: "position",
        order: f
      }
    ) })
  ] }) : /* @__PURE__ */ r.jsx(Ce, { elevation: 0, sx: { width: "100%" }, children: /* @__PURE__ */ r.jsx(rn, { sx: { py: 0 }, children: C.map((h) => {
    const c = h.name === "U23";
    return /* @__PURE__ */ r.jsx(
      nn,
      {
        disablePadding: !0,
        sx: {
          backgroundColor: c ? "action.selected" : "transparent"
        },
        children: /* @__PURE__ */ r.jsx(
          tn,
          {
            onClick: () => g(h),
            sx: {
              px: 2,
              py: 1,
              "&:hover": {
                backgroundColor: c ? "action.selected" : "action.hover"
              }
            },
            children: /* @__PURE__ */ r.jsx(
              on,
              {
                primary: /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                  /* @__PURE__ */ r.jsxs(
                    z,
                    {
                      sx: {
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "text.primary"
                      },
                      children: [
                        h.name,
                        (() => {
                          const m = h.athletes.filter((k) => t.includes(k.id)).length;
                          return m > 0 ? /* @__PURE__ */ r.jsxs(z, { component: "span", variant: "body2", sx: { color: "text.secondary", ml: 0.5 }, children: [
                            "(",
                            m,
                            ")"
                          ] }) : null;
                        })()
                      ]
                    }
                  ),
                  (() => {
                    const k = h.athletes.filter((l) => t.includes(l.id)).length === h.athletes.length && h.athletes.length > 0;
                    return /* @__PURE__ */ r.jsx(
                      te,
                      {
                        size: "small",
                        onClick: (l) => {
                          l.stopPropagation(), p(h.athletes);
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
                        children: k ? "Deselect all" : "Select all"
                      }
                    );
                  })(),
                  /* @__PURE__ */ r.jsx(
                    ir,
                    {
                      fontSize: "small",
                      sx: { color: "text.secondary" }
                    }
                  )
                ] })
              }
            )
          }
        )
      },
      h.id
    );
  }) }) });
}, mr = ({
  athletes: o,
  selectedAthletes: t = [],
  onSelectionChange: s,
  onClose: a,
  onBack: f,
  title: x = "Athletes",
  showBackButton: u = !1,
  maxHeight: C = 600,
  compact: g = !1,
  loading: _ = !1,
  error: p
}) => {
  const h = J(), c = K(h.breakpoints.down("sm")), m = g || c, [k, l] = q({
    searchTerm: "",
    selectedAgeGroups: [],
    selectedPositions: [],
    selectedSquad: "current",
    sortBy: "name",
    sortOrder: "asc"
  }), [T, P] = q("asc"), [v, D] = q("squads"), j = se(() => {
    const F = ur(o, k);
    return dr(F, k.sortBy, k.sortOrder);
  }, [o, k]), E = se(() => v === "selected" ? j.filter((F) => t.includes(F.id)) : j, [j, t, v]), H = (F) => {
    l((G) => ({ ...G, searchTerm: F.target.value }));
  }, X = (F) => {
    let G = "all";
    switch (D(F), F) {
      case "selected":
        G = "all";
        break;
      case "squads":
        G = "current";
        break;
      case "free-agents":
        G = "free-agents";
        break;
      case "historical":
        G = "historical";
        break;
      default:
        G = "all";
        break;
    }
    l((W) => ({ ...W, selectedSquad: G }));
  }, N = (F, G) => {
    const W = G ? [...t, F] : t.filter((O) => O !== F);
    s(W);
  }, V = (F, G) => {
    let W;
    G ? W = [...t, ...F.filter((O) => !t.includes(O))] : W = t.filter((O) => !F.includes(O)), s(W);
  }, Z = (F) => P(F);
  return _ ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(z, { children: "Loading athletes..." }) }) : p ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(z, { color: "error", children: p }) }) : /* @__PURE__ */ r.jsxs(
    b,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxHeight: `${C}px`,
        bgcolor: "background.paper",
        borderRadius: 1,
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ r.jsxs(
          b,
          {
            sx: {
              py: 1,
              px: m ? 2 : 3,
              borderBottom: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", alignItems: "center", mb: 0 }, children: [
                u && f && /* @__PURE__ */ r.jsx(
                  ne,
                  {
                    onClick: f,
                    size: m ? "small" : "medium",
                    sx: { mr: 1 },
                    children: /* @__PURE__ */ r.jsx(ke, {})
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  z,
                  {
                    variant: m ? "h6" : "h5",
                    fontWeight: "semibold",
                    sx: { flexGrow: 1 },
                    children: x
                  }
                ),
                a && /* @__PURE__ */ r.jsx(ne, { onClick: a, size: m ? "small" : "medium", children: /* @__PURE__ */ r.jsx(sr, {}) })
              ] }),
              /* @__PURE__ */ r.jsxs(er, { spacing: 0.5, children: [
                /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", gap: 1, alignItems: "center", mb: 0 }, children: [
                  /* @__PURE__ */ r.jsx(b, { sx: { minWidth: 140, flexShrink: 0 }, children: /* @__PURE__ */ r.jsx(
                    cr,
                    {
                      selectedSquad: v,
                      onSquadChange: X,
                      selectedCount: t.length,
                      compact: !0
                    }
                  ) }),
                  /* @__PURE__ */ r.jsx(
                    rr,
                    {
                      placeholder: "Search",
                      value: k.searchTerm,
                      onChange: H,
                      size: "small",
                      sx: {
                        flexGrow: 1,
                        "& .MuiInputBase-root": {
                          fontFamily: '"Open Sans", sans-serif'
                        }
                      },
                      InputProps: {
                        endAdornment: /* @__PURE__ */ r.jsx(nr, { position: "end", children: /* @__PURE__ */ r.jsx(lr, { fontSize: "small" }) })
                      }
                    }
                  ),
                  /* @__PURE__ */ r.jsx(hr, { order: T, onChange: Z })
                ] }),
                t.length > 0 && /* @__PURE__ */ r.jsx(b, { children: /* @__PURE__ */ r.jsx(
                  pe,
                  {
                    label: `${t.length} selected`,
                    color: "primary",
                    size: "small",
                    onDelete: () => s([])
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(b, { sx: { flexGrow: 1, overflow: "auto" }, children: v === "historical" ? /* @__PURE__ */ r.jsx(
          Ee,
          {
            athletes: E,
            selectedAthletes: t,
            onSelectionChange: N,
            onBatchSelectionChange: V,
            groupBy: "position",
            order: T,
            showOnlySelected: !1
          }
        ) : /* @__PURE__ */ r.jsx(
          pn,
          {
            athletes: E,
            selectedAthletes: t,
            onSelectionChange: N,
            onBatchSelectionChange: V,
            order: T
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          b,
          {
            sx: {
              py: 1,
              px: m ? 2 : 3,
              borderTop: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: /* @__PURE__ */ r.jsx(b, { sx: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r.jsx(
              te,
              {
                variant: "contained",
                color: "primary",
                onClick: a,
                disabled: t.length === 0,
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
  open: o,
  onClose: t,
  anchor: s = "right",
  athletes: a,
  selectedAthletes: f,
  onSelectionChange: x,
  title: u = "Select Athletes",
  maxHeight: C,
  ...g
}) => {
  const _ = J(), p = K(_.breakpoints.down("sm"));
  return /* @__PURE__ */ r.jsx(
    tr,
    {
      anchor: s,
      open: o,
      onClose: t,
      variant: "temporary",
      sx: {
        "& .MuiDrawer-paper": {
          width: p ? "100vw" : 500,
          maxWidth: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          boxShadow: _.shadows[16],
          borderRadius: p ? "16px 16px 0 0" : 0
        }
      },
      ModalProps: {
        keepMounted: !0
        // Better open performance on mobile
      },
      children: /* @__PURE__ */ r.jsx(
        mr,
        {
          athletes: a,
          selectedAthletes: f,
          onSelectionChange: x,
          onClose: t,
          title: u,
          compact: p,
          maxHeight: "100%",
          ...g
        }
      )
    }
  );
}, wn = ({
  open: o,
  onClose: t,
  anchorEl: s,
  athletes: a,
  selectedAthletes: f,
  onSelectionChange: x,
  title: u = "Select Athletes",
  maxHeight: C = 600,
  ...g
}) => {
  const _ = J(), p = K(_.breakpoints.down("sm"));
  return /* @__PURE__ */ r.jsx(
    or,
    {
      open: o,
      anchorEl: s,
      onClose: t,
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
          width: p ? "90vw" : 500,
          maxWidth: "95vw",
          maxHeight: p ? "80vh" : C,
          overflow: "hidden"
        }
      },
      children: /* @__PURE__ */ r.jsx(
        mr,
        {
          athletes: a,
          selectedAthletes: f,
          onSelectionChange: x,
          onClose: t,
          title: u,
          compact: p,
          maxHeight: C,
          ...g
        }
      )
    }
  );
};
export {
  jn as AthleteCard,
  xr as AthleteSelectorContent,
  mr as AthleteSelectorTreeContent,
  Ke as CompactAthleteCard,
  bn as DrawerAthleteSelector,
  Sn as DrawerAthleteSelectorTree,
  yn as DropdownAthleteSelector,
  wn as DropdownAthleteSelectorTree,
  cr as ExpandableSquadSelector,
  Ee as GroupedAthleteList,
  pn as SimpleTreeNavigationList,
  hr as SortMenu,
  ur as filterAthletes,
  fr as getStatusColor,
  pr as getStatusLabel,
  gn as groupAthletesByAgeGroup,
  vn as groupAthletesByPosition,
  dr as sortAthletes
};
