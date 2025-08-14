import ge, { useState as G, useMemo as Ve, useRef as Yr } from "react";
import { useTheme as L, useMediaQuery as U, Box as b, Button as ne, Collapse as Nr, Paper as ve, MenuList as Hr, MenuItem as Ke, Typography as A, Checkbox as Je, Avatar as Xe, Chip as ie, Accordion as Vr, AccordionSummary as Kr, AccordionDetails as Jr, Divider as Xr, IconButton as H, Menu as Qr, ListItemText as Qe, TextField as Ze, InputAdornment as er, Stack as rr, Drawer as nr, Badge as Zr, Popover as tr, Card as en, CardContent as rn, List as nn, ListItem as tn, ListItemButton as on } from "@mui/material";
import { ArrowDropUp as an, ArrowDropDown as or, ChevronRight as ar, Group as sn, ExpandMore as ln, Sort as cn, ArrowBack as be, Close as sr, Search as ir, People as un } from "@mui/icons-material";
var me = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function dn() {
  if (qe) return ee;
  qe = 1;
  var a = ge, s = Symbol.for("react.element"), i = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, h = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(S, f, j) {
    var l, u = {}, d = null, x = null;
    j !== void 0 && (d = "" + j), f.key !== void 0 && (d = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (l in f) t.call(f, l) && !g.hasOwnProperty(l) && (u[l] = f[l]);
    if (S && S.defaultProps) for (l in f = S.defaultProps, f) u[l] === void 0 && (u[l] = f[l]);
    return { $$typeof: s, type: S, key: d, ref: x, props: u, _owner: h.current };
  }
  return ee.Fragment = i, ee.jsx = c, ee.jsxs = c, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function fn() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ge, s = Symbol.for("react.element"), i = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), S = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), m = Symbol.iterator, D = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = m && e[m] || e[D];
      return typeof n == "function" ? n : null;
    }
    var I = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          o[p - 1] = arguments[p];
        z("error", e, o);
      }
    }
    function z(e, n, o) {
      {
        var p = I.ReactDebugCurrentFrame, C = p.getStackAddendum();
        C !== "" && (n += "%s", o = o.concat([C]));
        var w = o.map(function(y) {
          return String(y);
        });
        w.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var V = !1, K = !1, J = !1, k = !1, R = !1, W;
    W = Symbol.for("react.module.reference");
    function X(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === g || R || e === h || e === j || e === l || k || e === x || V || K || J || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === u || e.$$typeof === c || e.$$typeof === S || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === W || e.getModuleId !== void 0));
    }
    function gr(e, n, o) {
      var p = e.displayName;
      if (p)
        return p;
      var C = n.displayName || n.name || "";
      return C !== "" ? o + "(" + C + ")" : o;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case t:
          return "Fragment";
        case i:
          return "Portal";
        case g:
          return "Profiler";
        case h:
          return "StrictMode";
        case j:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var n = e;
            return ye(n) + ".Consumer";
          case c:
            var o = e;
            return ye(o._context) + ".Provider";
          case f:
            return gr(e, e.render, "ForwardRef");
          case u:
            var p = e.displayName || null;
            return p !== null ? p : $(e.type) || "Memo";
          case d: {
            var C = e, w = C._payload, y = C._init;
            try {
              return $(y(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, Q = 0, je, Se, Ce, we, ke, Ee, Re;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function vr() {
      {
        if (Q === 0) {
          je = console.log, Se = console.info, Ce = console.warn, we = console.error, ke = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        Q++;
      }
    }
    function br() {
      {
        if (Q--, Q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: je
            }),
            info: B({}, e, {
              value: Se
            }),
            warn: B({}, e, {
              value: Ce
            }),
            error: B({}, e, {
              value: we
            }),
            group: B({}, e, {
              value: ke
            }),
            groupCollapsed: B({}, e, {
              value: Ee
            }),
            groupEnd: B({}, e, {
              value: Re
            })
          });
        }
        Q < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = I.ReactCurrentDispatcher, ce;
    function te(e, n, o) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (C) {
            var p = C.stack.trim().match(/\n( *(at )?)/);
            ce = p && p[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var ue = !1, oe;
    {
      var yr = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new yr();
    }
    function Oe(e, n) {
      if (!e || ue)
        return "";
      {
        var o = oe.get(e);
        if (o !== void 0)
          return o;
      }
      var p;
      ue = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = le.current, le.current = null, vr();
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
            } catch (P) {
              p = P;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (P) {
              p = P;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            p = P;
          }
          e();
        }
      } catch (P) {
        if (P && p && typeof P.stack == "string") {
          for (var v = P.stack.split(`
`), T = p.stack.split(`
`), _ = v.length - 1, O = T.length - 1; _ >= 1 && O >= 0 && v[_] !== T[O]; )
            O--;
          for (; _ >= 1 && O >= 0; _--, O--)
            if (v[_] !== T[O]) {
              if (_ !== 1 || O !== 1)
                do
                  if (_--, O--, O < 0 || v[_] !== T[O]) {
                    var M = `
` + v[_].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, M), M;
                  }
                while (_ >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        ue = !1, le.current = w, br(), Error.prepareStackTrace = C;
      }
      var N = e ? e.displayName || e.name : "", q = N ? te(N) : "";
      return typeof e == "function" && oe.set(e, q), q;
    }
    function jr(e, n, o) {
      return Oe(e, !1);
    }
    function Sr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ae(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Sr(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case j:
          return te("Suspense");
        case l:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return jr(e.render);
          case u:
            return ae(e.type, n, o);
          case d: {
            var p = e, C = p._payload, w = p._init;
            try {
              return ae(w(C), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Te = {}, Pe = I.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var n = e._owner, o = ae(e.type, e._source, n ? n.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Cr(e, n, o, p, C) {
      {
        var w = Function.call.bind(Z);
        for (var y in e)
          if (w(e, y)) {
            var v = void 0;
            try {
              if (typeof e[y] != "function") {
                var T = Error((p || "React class") + ": " + o + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = e[y](n, y, p, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              v = _;
            }
            v && !(v instanceof Error) && (se(C), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", o, y, typeof v), se(null)), v instanceof Error && !(v.message in Te) && (Te[v.message] = !0, se(C), E("Failed %s type: %s", o, v.message), se(null));
          }
      }
    }
    var wr = Array.isArray;
    function de(e) {
      return wr(e);
    }
    function kr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Er(e) {
      try {
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function De(e) {
      if (Er(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(e)), Ae(e);
    }
    var Fe = I.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Me;
    function _r(e) {
      if (Z.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Or(e) {
      if (Z.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Tr(e, n) {
      typeof e.ref == "string" && Fe.current;
    }
    function Pr(e, n) {
      {
        var o = function() {
          Ie || (Ie = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Ar(e, n) {
      {
        var o = function() {
          Me || (Me = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Dr = function(e, n, o, p, C, w, y) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: y,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Fr(e, n, o, p, C) {
      {
        var w, y = {}, v = null, T = null;
        o !== void 0 && (De(o), v = "" + o), Or(n) && (De(n.key), v = "" + n.key), _r(n) && (T = n.ref, Tr(n, C));
        for (w in n)
          Z.call(n, w) && !Rr.hasOwnProperty(w) && (y[w] = n[w]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (w in _)
            y[w] === void 0 && (y[w] = _[w]);
        }
        if (v || T) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Pr(y, O), T && Ar(y, O);
        }
        return Dr(e, v, T, C, p, Fe.current, y);
      }
    }
    var fe = I.ReactCurrentOwner, We = I.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var n = e._owner, o = ae(e.type, e._source, n ? n.type : null);
        We.setExtraStackFrame(o);
      } else
        We.setExtraStackFrame(null);
    }
    var pe;
    pe = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function ze() {
      {
        if (fe.current) {
          var e = $(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ir(e) {
      return "";
    }
    var Ge = {};
    function Mr(e) {
      {
        var n = ze();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function Le(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Mr(n);
        if (Ge[o])
          return;
        Ge[o] = !0;
        var p = "";
        e && e._owner && e._owner !== fe.current && (p = " It was passed a child from " + $(e._owner.type) + "."), Y(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, p), Y(null);
      }
    }
    function $e(e, n) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var o = 0; o < e.length; o++) {
            var p = e[o];
            he(p) && Le(p, n);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var C = F(e);
          if (typeof C == "function" && C !== e.entries)
            for (var w = C.call(e), y; !(y = w.next()).done; )
              he(y.value) && Le(y.value, n);
        }
      }
    }
    function Wr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === u))
          o = n.propTypes;
        else
          return;
        if (o) {
          var p = $(n);
          Cr(o, e.props, "prop", p, e);
        } else if (n.PropTypes !== void 0 && !pe) {
          pe = !0;
          var C = $(n);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zr(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var p = n[o];
          if (p !== "children" && p !== "key") {
            Y(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Ue = {};
    function Be(e, n, o, p, C, w) {
      {
        var y = X(e);
        if (!y) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = Ir();
          T ? v += T : v += ze();
          var _;
          e === null ? _ = "null" : de(e) ? _ = "array" : e !== void 0 && e.$$typeof === s ? (_ = "<" + ($(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, v);
        }
        var O = Fr(e, n, o, C, w);
        if (O == null)
          return O;
        if (y) {
          var M = n.children;
          if (M !== void 0)
            if (p)
              if (de(M)) {
                for (var N = 0; N < M.length; N++)
                  $e(M[N], e);
                Object.freeze && Object.freeze(M);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(M, e);
        }
        if (Z.call(n, "key")) {
          var q = $(e), P = Object.keys(n).filter(function(qr) {
            return qr !== "key";
          }), xe = P.length > 0 ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[q + xe]) {
            var Br = P.length > 0 ? "{" + P.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, q, Br, q), Ue[q + xe] = !0;
          }
        }
        return e === t ? zr(O) : Wr(O), O;
      }
    }
    function Gr(e, n, o) {
      return Be(e, n, o, !0);
    }
    function Lr(e, n, o) {
      return Be(e, n, o, !1);
    }
    var $r = Lr, Ur = Gr;
    re.Fragment = t, re.jsx = $r, re.jsxs = Ur;
  }()), re;
}
process.env.NODE_ENV === "production" ? me.exports = dn() : me.exports = fn();
var r = me.exports;
const Ne = [
  { id: "selected", label: "Selected", count: 1 },
  { id: "current", label: "Current squads" },
  { id: "labels", label: "Labels" },
  { id: "groups", label: "Groups" },
  { id: "status", label: "Status" },
  { id: "position-groups", label: "Position groups" },
  { id: "historical", label: "Historical squads", hasSubmenu: !0 }
], lr = ({
  selectedSquad: a,
  onSquadChange: s,
  selectedCount: i = 0,
  compact: t = !1
}) => {
  const h = L(), g = U(h.breakpoints.down("sm")), [c, S] = G(!1), f = () => {
    S(!c);
  }, j = (d) => {
    s(d), g || S(!1);
  }, l = () => {
    const d = Ne.find((x) => x.id === a);
    return (d == null ? void 0 : d.label) || "Current squads";
  }, u = (d) => d.id === "selected" && i > 0 ? `${d.label} (${i})` : d.label;
  return /* @__PURE__ */ r.jsxs(b, { sx: { position: "relative", width: "100%" }, children: [
    /* @__PURE__ */ r.jsx(
      ne,
      {
        onClick: f,
        variant: "text",
        endIcon: c ? /* @__PURE__ */ r.jsx(an, {}) : /* @__PURE__ */ r.jsx(or, {}),
        sx: {
          width: "100%",
          justifyContent: "space-between",
          textTransform: "none",
          fontFamily: '"Open Sans", sans-serif',
          fontSize: t ? "0.875rem" : "1rem",
          fontWeight: 400,
          color: "text.primary",
          px: t ? 1.5 : 2,
          py: t ? 1 : 1.5,
          minHeight: t ? 36 : 44,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "action.hover",
            borderColor: "primary.main"
          }
        },
        children: l()
      }
    ),
    /* @__PURE__ */ r.jsx(Nr, { in: c, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ r.jsx(
      ve,
      {
        elevation: 8,
        sx: {
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          zIndex: h.zIndex.modal,
          maxHeight: g ? "70vh" : "400px",
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
              "& .MuiMenuItem-root": {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1rem",
                fontWeight: 400,
                px: 2,
                py: 1.5,
                minHeight: "auto"
              }
            },
            children: Ne.map((d) => /* @__PURE__ */ r.jsxs(
              Ke,
              {
                selected: a === d.id,
                onClick: () => j(d.id),
                sx: {
                  backgroundColor: a === d.id ? "action.selected" : "transparent",
                  "&:hover": {
                    backgroundColor: a === d.id ? "action.selected" : "action.hover"
                  },
                  "&.Mui-selected": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selected"
                    }
                  },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ r.jsx(
                    A,
                    {
                      variant: "body1",
                      sx: {
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "text.primary",
                        flexGrow: 1
                      },
                      children: u(d)
                    }
                  ),
                  d.hasSubmenu && /* @__PURE__ */ r.jsx(
                    ar,
                    {
                      fontSize: "small",
                      sx: {
                        color: "text.secondary",
                        ml: 1
                      }
                    }
                  )
                ]
              },
              d.id
            ))
          }
        )
      }
    ) })
  ] });
}, vn = (a) => {
  const s = a.reduce((i, t) => (i[t.ageGroup] || (i[t.ageGroup] = {
    id: t.ageGroup,
    name: t.ageGroup,
    athletes: [],
    isExpanded: !1
  }), i[t.ageGroup].athletes.push(t), i), {});
  return Object.values(s).sort((i, t) => {
    const h = parseInt(i.name.replace("U", ""));
    return parseInt(t.name.replace("U", "")) - h;
  });
}, bn = (a) => {
  const s = a.reduce((i, t) => (i[t.position] || (i[t.position] = {
    id: t.position,
    name: t.position,
    athletes: []
  }), i[t.position].athletes.push(t), i), {});
  return Object.values(s).sort((i, t) => i.name.localeCompare(t.name));
}, cr = (a, s) => a.filter((i) => {
  if (s.selectedSquad)
    switch (s.selectedSquad) {
      case "current":
        if (!["U21", "U19", "U17"].includes(i.ageGroup))
          return !1;
        break;
      case "youth":
        if (parseInt(i.ageGroup.replace("U", "")) > 17)
          return !1;
        break;
    }
  if (s.searchTerm) {
    const t = s.searchTerm.toLowerCase();
    if (!i.name.toLowerCase().includes(t) && !i.position.toLowerCase().includes(t) && !i.ageGroup.toLowerCase().includes(t))
      return !1;
  }
  return !(s.selectedAgeGroups.length > 0 && !s.selectedAgeGroups.includes(i.ageGroup) || s.selectedPositions.length > 0 && !s.selectedPositions.includes(i.position));
}), ur = (a, s, i) => [...a].sort((t, h) => {
  let g = 0;
  switch (s) {
    case "name":
      g = t.name.localeCompare(h.name);
      break;
    case "position":
      g = t.position.localeCompare(h.position);
      break;
    case "ageGroup":
      const c = parseInt(t.ageGroup.replace("U", ""));
      g = parseInt(h.ageGroup.replace("U", "")) - c;
      break;
    default:
      g = 0;
  }
  return i === "desc" ? -g : g;
}), dr = (a) => {
  switch (a) {
    case "available":
      return "success";
    case "unavailable":
      return "default";
    case "injured":
      return "error";
    default:
      return "default";
  }
}, fr = (a) => {
  switch (a) {
    case "available":
      return "Available";
    case "unavailable":
      return "Unavailable";
    case "injured":
      return "Injured";
    default:
      return "Unknown";
  }
}, He = ({
  athlete: a,
  isSelected: s,
  onToggle: i,
  showGroupIcon: t = !1
}) => {
  const h = L(), g = () => {
    i(a.id);
  }, c = a.name.includes("Aggregate") || t;
  return /* @__PURE__ */ r.jsxs(
    b,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        py: 1,
        px: 2,
        minHeight: 48,
        backgroundColor: s ? "action.selected" : "transparent",
        "&:hover": {
          backgroundColor: s ? "action.selected" : "action.hover"
        },
        transition: h.transitions.create("background-color", {
          duration: h.transitions.duration.short
        })
      },
      children: [
        /* @__PURE__ */ r.jsx(
          Je,
          {
            checked: s,
            onChange: g,
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
          Xe,
          {
            src: c ? void 0 : a.avatar,
            alt: a.name,
            sx: {
              width: 34,
              height: 34,
              bgcolor: c ? "grey.300" : void 0
            },
            children: c && /* @__PURE__ */ r.jsx(
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
            A,
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
              children: a.name
            }
          ),
          /* @__PURE__ */ r.jsx(
            A,
            {
              variant: "body2",
              sx: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "text.secondary",
                lineHeight: 1.3
              },
              children: a.position
            }
          )
        ] }),
        !c && /* @__PURE__ */ r.jsx(
          ie,
          {
            label: fr(a.status),
            color: dr(a.status),
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
}, pr = ({
  athletes: a,
  selectedAthletes: s,
  onSelectionChange: i,
  sortBy: t
}) => {
  const [h, g] = G(["Forward"]), c = (u) => {
    const d = s.includes(u);
    i(u, !d);
  }, S = (u) => {
    const d = u.every(
      (x) => s.includes(x.id)
    );
    u.forEach((x) => {
      i(x.id, !d);
    });
  }, f = (u) => (d, x) => {
    g(
      (m) => x ? [...m, u] : m.filter((D) => D !== u)
    );
  }, l = ((u) => {
    const d = {};
    return u.forEach((x) => {
      let m;
      switch (t) {
        case "position":
          m = x.position;
          break;
        case "status":
          m = x.status;
          break;
        case "squad":
        default:
          m = x.ageGroup;
          break;
      }
      d[m] || (d[m] = []), d[m].push(x);
    }), Object.entries(d).map(([x, m]) => {
      var F;
      const D = t === "position" ? {
        id: `${x}-aggregate`,
        name: x,
        position: "Aggregate",
        ageGroup: ((F = m[0]) == null ? void 0 : F.ageGroup) || "U23",
        status: "available",
        avatar: ""
      } : void 0;
      return {
        id: x,
        name: x,
        athletes: m,
        aggregateAthlete: D
      };
    });
  })(a);
  return /* @__PURE__ */ r.jsx(b, { sx: { width: "100%" }, children: l.map((u, d) => {
    const x = h.includes(u.id);
    return /* @__PURE__ */ r.jsxs(b, { children: [
      /* @__PURE__ */ r.jsxs(
        Vr,
        {
          expanded: x,
          onChange: f(u.id),
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
              Kr,
              {
                expandIcon: /* @__PURE__ */ r.jsx(ln, {}),
                sx: {
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    transform: x ? "rotate(180deg)" : "rotate(0deg)",
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
                      /* @__PURE__ */ r.jsx(
                        A,
                        {
                          variant: "body1",
                          sx: {
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: "1rem",
                            fontWeight: 400,
                            color: "text.primary"
                          },
                          children: u.name
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        ne,
                        {
                          size: "small",
                          onClick: (m) => {
                            m.stopPropagation(), S(u.athletes);
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
                          children: "Select all"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ r.jsx(Jr, { children: /* @__PURE__ */ r.jsxs(b, { children: [
              u.aggregateAthlete && /* @__PURE__ */ r.jsx(
                He,
                {
                  athlete: u.aggregateAthlete,
                  isSelected: s.includes(u.aggregateAthlete.id),
                  onToggle: c,
                  showGroupIcon: !0
                }
              ),
              t === "position" && /* @__PURE__ */ r.jsx(b, { sx: { px: 2, py: 0 }, children: /* @__PURE__ */ r.jsx(
                A,
                {
                  variant: "body2",
                  sx: {
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "text.primary"
                  },
                  children: u.name
                }
              ) }),
              u.athletes.map((m) => /* @__PURE__ */ r.jsx(
                He,
                {
                  athlete: m,
                  isSelected: s.includes(m.id),
                  onToggle: c
                },
                m.id
              ))
            ] }) })
          ]
        }
      ),
      d < l.length - 1 && /* @__PURE__ */ r.jsx(Xr, { sx: { mx: 2 } })
    ] }, u.id);
  }) });
}, pn = [
  { value: "squad", label: "Squad" },
  { value: "status", label: "Status" },
  { value: "position", label: "Position group" }
], hr = ({
  currentSort: a,
  onSortChange: s
}) => {
  const [i, t] = G(null), h = !!i, g = (f) => {
    t(f.currentTarget);
  }, c = () => {
    t(null);
  }, S = (f) => {
    s(f), c();
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      H,
      {
        size: "small",
        onClick: g,
        sx: {
          color: "text.secondary",
          "&:hover": {
            backgroundColor: "action.hover"
          }
        },
        children: /* @__PURE__ */ r.jsx(cn, { fontSize: "small" })
      }
    ),
    /* @__PURE__ */ r.jsx(
      Qr,
      {
        anchorEl: i,
        open: h,
        onClose: c,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        PaperProps: {
          sx: {
            minWidth: 160,
            mt: 0.5,
            "& .MuiMenuItem-root": {
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "0.875rem",
              py: 1
            }
          }
        },
        children: pn.map((f) => /* @__PURE__ */ r.jsx(
          Ke,
          {
            selected: a === f.value,
            onClick: () => S(f.value),
            children: /* @__PURE__ */ r.jsx(
              Qe,
              {
                primary: f.label,
                sx: {
                  "& .MuiTypography-root": {
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "0.875rem"
                  }
                }
              }
            )
          },
          f.value
        ))
      }
    )
  ] });
}, xr = ({
  athletes: a,
  selectedAthletes: s = [],
  onSelectionChange: i,
  onClose: t,
  onBack: h,
  title: g = "Athletes",
  showBackButton: c = !1,
  maxHeight: S = 600,
  compact: f = !1,
  loading: j = !1,
  error: l
}) => {
  const u = L(), d = U(u.breakpoints.down("sm")), x = f || d, [m, D] = G({
    searchTerm: "",
    selectedAgeGroups: [],
    selectedPositions: [],
    selectedSquad: "current",
    sortBy: "name",
    sortOrder: "asc"
  }), [F, I] = G("position"), E = Ve(() => {
    const k = cr(a, m);
    return ur(k, m.sortBy, m.sortOrder);
  }, [a, m]), z = (k) => {
    D((R) => ({ ...R, searchTerm: k.target.value }));
  }, V = (k) => {
    let R = k;
    switch (k) {
      case "selected":
        R = "all";
        break;
      case "current":
        R = "current";
        break;
      case "labels":
      case "groups":
      case "status":
      case "position-groups":
      case "historical":
        R = "all";
        break;
      default:
        R = "all";
    }
    D((W) => ({ ...W, selectedSquad: R }));
  }, K = (k, R) => {
    const W = R ? [...s, k] : s.filter((X) => X !== k);
    i(W);
  }, J = (k) => {
    I(k);
  };
  return j ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(A, { children: "Loading athletes..." }) }) : l ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(A, { color: "error", children: l }) }) : /* @__PURE__ */ r.jsxs(
    b,
    {
      sx: {
        height: "100%",
        maxHeight: S,
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
              px: x ? 2 : 3,
              borderBottom: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", alignItems: "center", mb: 0 }, children: [
                c && /* @__PURE__ */ r.jsx(
                  H,
                  {
                    onClick: h,
                    sx: { mr: 1 },
                    size: x ? "small" : "medium",
                    children: /* @__PURE__ */ r.jsx(be, {})
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  A,
                  {
                    variant: x ? "h6" : "h5",
                    fontWeight: "semibold",
                    sx: { flexGrow: 1 },
                    children: g
                  }
                ),
                t && /* @__PURE__ */ r.jsx(
                  H,
                  {
                    onClick: t,
                    size: x ? "small" : "medium",
                    children: /* @__PURE__ */ r.jsx(sr, {})
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: [
                /* @__PURE__ */ r.jsx(b, { sx: { minWidth: 140, flexShrink: 0 }, children: /* @__PURE__ */ r.jsx(
                  lr,
                  {
                    selectedSquad: m.selectedSquad === "current" ? "current" : "all",
                    onSquadChange: V,
                    selectedCount: s.length,
                    compact: !0
                  }
                ) }),
                /* @__PURE__ */ r.jsx(
                  Ze,
                  {
                    placeholder: "Search",
                    value: m.searchTerm,
                    onChange: z,
                    size: "small",
                    sx: {
                      flexGrow: 1,
                      "& .MuiInputBase-root": {
                        fontFamily: '"Open Sans", sans-serif'
                      }
                    },
                    InputProps: {
                      endAdornment: /* @__PURE__ */ r.jsx(er, { position: "end", children: /* @__PURE__ */ r.jsx(ir, { fontSize: "small" }) })
                    }
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  hr,
                  {
                    currentSort: F,
                    onSortChange: J
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx(rr, { spacing: 1, children: s.length > 0 && /* @__PURE__ */ r.jsx(b, { children: /* @__PURE__ */ r.jsx(
                ie,
                {
                  label: `${s.length} selected`,
                  color: "primary",
                  size: "small",
                  onDelete: () => i([])
                }
              ) }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(b, { sx: { flexGrow: 1, overflow: "auto" }, children: /* @__PURE__ */ r.jsx(
          pr,
          {
            athletes: E,
            selectedAthletes: s,
            onSelectionChange: K,
            sortBy: F
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          b,
          {
            sx: {
              py: 1,
              px: x ? 2 : 3,
              borderTop: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: /* @__PURE__ */ r.jsx(b, { sx: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r.jsx(
              ne,
              {
                variant: "contained",
                color: "primary",
                onClick: t,
                disabled: s.length === 0,
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
}, yn = ({
  open: a,
  anchor: s = "right",
  width: i = 460,
  onClose: t,
  ...h
}) => {
  const g = L(), c = U(g.breakpoints.down("md")), S = c ? "100vw" : i, f = c ? "bottom" : s;
  return /* @__PURE__ */ r.jsx(
    nr,
    {
      open: a,
      onClose: t,
      anchor: f,
      sx: {
        "& .MuiDrawer-paper": {
          width: S,
          maxWidth: "100vw",
          height: c ? "90vh" : "100vh",
          maxHeight: "100vh",
          boxShadow: g.shadows[16],
          borderRadius: c ? "16px 16px 0 0" : 0
        }
      },
      ModalProps: {
        keepMounted: !0
        // Better open performance on mobile
      },
      children: /* @__PURE__ */ r.jsx(
        xr,
        {
          ...h,
          onClose: t,
          compact: c,
          maxHeight: "100%"
        }
      )
    }
  );
}, jn = ({
  selectedAthletes: a = [],
  buttonText: s = "Select Athletes",
  buttonVariant: i = "outlined",
  buttonColor: t = "primary",
  showBadge: h = !0,
  maxWidth: g = 400,
  maxHeight: c = 500,
  onSelectionChange: S,
  ...f
}) => {
  const j = L(), l = U(j.breakpoints.down("sm")), [u, d] = G(null), x = Yr(null), m = !!u, D = (z) => {
    d(z.currentTarget);
  }, F = () => {
    d(null);
  }, I = (z) => {
    S(z);
  }, E = /* @__PURE__ */ r.jsx(
    ne,
    {
      ref: x,
      variant: i,
      color: t,
      onClick: D,
      endIcon: /* @__PURE__ */ r.jsx(or, {}),
      startIcon: /* @__PURE__ */ r.jsx(un, {}),
      sx: {
        textTransform: "none",
        minWidth: l ? "100%" : "auto"
      },
      children: a.length > 0 ? `${a.length} ${a.length === 1 ? "athlete" : "athletes"} selected` : s
    }
  );
  return /* @__PURE__ */ r.jsxs(b, { sx: { display: "inline-block", width: l ? "100%" : "auto" }, children: [
    h && a.length > 0 ? /* @__PURE__ */ r.jsx(
      Zr,
      {
        badgeContent: a.length,
        color: "primary",
        max: 99,
        children: E
      }
    ) : E,
    /* @__PURE__ */ r.jsx(
      tr,
      {
        open: m,
        anchorEl: u,
        onClose: F,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: l ? "center" : "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: l ? "center" : "left"
        },
        sx: {
          "& .MuiPopover-paper": {
            mt: 1,
            maxWidth: l ? "95vw" : g,
            maxHeight: l ? "80vh" : c,
            minWidth: l ? "90vw" : 350,
            borderRadius: 2,
            boxShadow: j.shadows[8]
          }
        },
        slotProps: {
          paper: {
            elevation: 8
          }
        },
        children: /* @__PURE__ */ r.jsx(ve, { children: /* @__PURE__ */ r.jsx(
          xr,
          {
            ...f,
            selectedAthletes: a,
            onSelectionChange: I,
            onClose: F,
            compact: l,
            maxHeight: l ? "75vh" : c
          }
        ) })
      }
    )
  ] });
}, Sn = ({
  athlete: a,
  isSelected: s,
  onSelectionChange: i,
  compact: t = !1
}) => {
  const h = L(), g = U(h.breakpoints.down("sm")), c = t || g, S = (f) => {
    i(a.id, f.target.checked);
  };
  return /* @__PURE__ */ r.jsx(
    en,
    {
      variant: "outlined",
      sx: {
        mb: 1,
        backgroundColor: s ? "action.selected" : "transparent",
        "&:hover": {
          backgroundColor: "action.hover"
        },
        transition: h.transitions.create("background-color", {
          duration: h.transitions.duration.short
        }),
        border: "1px solid",
        borderColor: "divider"
      },
      children: /* @__PURE__ */ r.jsxs(
        rn,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: c ? 1.5 : 2,
            px: c ? 2 : 3,
            "&:last-child": { pb: c ? 1.5 : 2 }
          },
          children: [
            /* @__PURE__ */ r.jsx(
              Je,
              {
                checked: s,
                onChange: S,
                size: c ? "small" : "medium",
                sx: {
                  color: "primary.main",
                  "&.Mui-checked": {
                    color: "primary.main"
                  }
                }
              }
            ),
            /* @__PURE__ */ r.jsx(
              Xe,
              {
                src: a.avatar,
                alt: a.name,
                sx: {
                  width: c ? 32 : 40,
                  height: c ? 32 : 40,
                  border: "1px solid",
                  borderColor: "divider"
                },
                children: a.name.split(" ").map((f) => f[0]).join("").toUpperCase()
              }
            ),
            /* @__PURE__ */ r.jsxs(b, { sx: { flexGrow: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ r.jsx(
                A,
                {
                  variant: c ? "body2" : "body1",
                  fontWeight: "medium",
                  sx: {
                    color: "text.primary",
                    mb: 0.5,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: a.name
                }
              ),
              /* @__PURE__ */ r.jsx(
                A,
                {
                  variant: c ? "caption" : "body2",
                  color: "text.secondary",
                  sx: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: a.position
                }
              )
            ] }),
            /* @__PURE__ */ r.jsx(
              ie,
              {
                label: fr(a.status),
                color: dr(a.status),
                size: c ? "small" : "medium",
                variant: "filled",
                sx: {
                  minWidth: c ? 60 : 80,
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
}, hn = ({
  athletes: a,
  selectedAthletes: s,
  onSelectionChange: i,
  sortBy: t
}) => {
  const [h, g] = G(null), c = ge.useMemo(() => {
    const j = {};
    return a.forEach((l) => {
      const u = l.ageGroup;
      j[u] || (j[u] = []), j[u].push(l);
    }), Object.entries(j).map(([l, u]) => ({
      id: l,
      name: l,
      athletes: u
    })).sort((l, u) => {
      const d = (x) => {
        const m = x.match(/U(\d+)/);
        return m ? parseInt(m[1]) : 0;
      };
      return d(u.name) - d(l.name);
    });
  }, [a]), S = (j) => {
    g(j);
  }, f = () => {
    g(null);
  };
  return h ? /* @__PURE__ */ r.jsxs(b, { sx: { width: "100%" }, children: [
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
            H,
            {
              onClick: f,
              size: "small",
              sx: { mr: 1 },
              children: /* @__PURE__ */ r.jsx(be, { fontSize: "small" })
            }
          ),
          /* @__PURE__ */ r.jsx(
            A,
            {
              variant: "h6",
              sx: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1rem",
                fontWeight: 600,
                color: "text.primary",
                flexGrow: 1
              },
              children: h.name
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(b, { sx: { overflow: "auto" }, children: /* @__PURE__ */ r.jsx(
      pr,
      {
        athletes: h.athletes,
        selectedAthletes: s,
        onSelectionChange: i,
        sortBy: t
      }
    ) })
  ] }) : /* @__PURE__ */ r.jsx(ve, { elevation: 0, sx: { width: "100%" }, children: /* @__PURE__ */ r.jsx(nn, { sx: { py: 0 }, children: c.map((j) => {
    const l = j.name === "U23";
    return /* @__PURE__ */ r.jsx(
      tn,
      {
        disablePadding: !0,
        sx: {
          backgroundColor: l ? "action.selected" : "transparent"
        },
        children: /* @__PURE__ */ r.jsxs(
          on,
          {
            onClick: () => S(j),
            sx: {
              px: 2,
              py: 1,
              "&:hover": {
                backgroundColor: l ? "action.selected" : "action.hover"
              }
            },
            children: [
              /* @__PURE__ */ r.jsx(
                Qe,
                {
                  primary: j.name,
                  primaryTypographyProps: {
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "text.primary"
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(
                ar,
                {
                  fontSize: "small",
                  sx: { color: "text.secondary" }
                }
              )
            ]
          }
        )
      },
      j.id
    );
  }) }) });
}, mr = ({
  athletes: a,
  selectedAthletes: s = [],
  onSelectionChange: i,
  onClose: t,
  onBack: h,
  title: g = "Athletes",
  showBackButton: c = !1,
  maxHeight: S = 600,
  compact: f = !1,
  loading: j = !1,
  error: l
}) => {
  const u = L(), d = U(u.breakpoints.down("sm")), x = f || d, [m, D] = G({
    searchTerm: "",
    selectedAgeGroups: [],
    selectedPositions: [],
    selectedSquad: "current",
    sortBy: "name",
    sortOrder: "asc"
  }), [F, I] = G("position"), E = Ve(() => {
    const k = cr(a, m);
    return ur(k, m.sortBy, m.sortOrder);
  }, [a, m]), z = (k) => {
    D((R) => ({ ...R, searchTerm: k.target.value }));
  }, V = (k) => {
    let R = k;
    switch (k) {
      case "selected":
        R = "all";
        break;
      case "current":
        R = "current";
        break;
      case "labels":
      case "groups":
      case "status":
      case "position-groups":
      case "historical":
        R = "all";
        break;
      default:
        R = "all";
    }
    D((W) => ({ ...W, selectedSquad: R }));
  }, K = (k, R) => {
    const W = R ? [...s, k] : s.filter((X) => X !== k);
    i(W);
  }, J = (k) => {
    I(k);
  };
  return j ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(A, { children: "Loading athletes..." }) }) : l ? /* @__PURE__ */ r.jsx(b, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ r.jsx(A, { color: "error", children: l }) }) : /* @__PURE__ */ r.jsxs(
    b,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxHeight: `${S}px`,
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
              px: x ? 2 : 3,
              borderBottom: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", alignItems: "center", mb: 0 }, children: [
                c && h && /* @__PURE__ */ r.jsx(
                  H,
                  {
                    onClick: h,
                    size: x ? "small" : "medium",
                    sx: { mr: 1 },
                    children: /* @__PURE__ */ r.jsx(be, {})
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  A,
                  {
                    variant: x ? "h6" : "h5",
                    fontWeight: "semibold",
                    sx: { flexGrow: 1 },
                    children: g
                  }
                ),
                t && /* @__PURE__ */ r.jsx(H, { onClick: t, size: x ? "small" : "medium", children: /* @__PURE__ */ r.jsx(sr, {}) })
              ] }),
              /* @__PURE__ */ r.jsxs(b, { sx: { display: "flex", gap: 1, alignItems: "center", mb: 0 }, children: [
                /* @__PURE__ */ r.jsx(b, { sx: { minWidth: 140, flexShrink: 0 }, children: /* @__PURE__ */ r.jsx(
                  lr,
                  {
                    selectedSquad: m.selectedSquad === "current" ? "current" : "all",
                    onSquadChange: V,
                    selectedCount: s.length,
                    compact: !0
                  }
                ) }),
                /* @__PURE__ */ r.jsx(
                  Ze,
                  {
                    placeholder: "Search",
                    value: m.searchTerm,
                    onChange: z,
                    size: "small",
                    sx: {
                      flexGrow: 1,
                      "& .MuiInputBase-root": {
                        fontFamily: '"Open Sans", sans-serif'
                      }
                    },
                    InputProps: {
                      endAdornment: /* @__PURE__ */ r.jsx(er, { position: "end", children: /* @__PURE__ */ r.jsx(ir, { fontSize: "small" }) })
                    }
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  hr,
                  {
                    currentSort: F,
                    onSortChange: J
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx(rr, { spacing: 1, children: s.length > 0 && /* @__PURE__ */ r.jsx(b, { children: /* @__PURE__ */ r.jsx(
                ie,
                {
                  label: `${s.length} selected`,
                  color: "primary",
                  size: "small",
                  onDelete: () => i([])
                }
              ) }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(b, { sx: { flexGrow: 1, overflow: "auto" }, children: /* @__PURE__ */ r.jsx(
          hn,
          {
            athletes: E,
            selectedAthletes: s,
            onSelectionChange: K,
            sortBy: F
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          b,
          {
            sx: {
              py: 1,
              px: x ? 2 : 3,
              borderTop: "1px solid",
              borderColor: "divider",
              flexShrink: 0
            },
            children: /* @__PURE__ */ r.jsx(b, { sx: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r.jsx(
              ne,
              {
                variant: "contained",
                color: "primary",
                onClick: t,
                disabled: s.length === 0,
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
}, Cn = ({
  open: a,
  onClose: s,
  anchor: i = "right",
  athletes: t,
  selectedAthletes: h,
  onSelectionChange: g,
  title: c = "Select Athletes",
  maxHeight: S,
  ...f
}) => {
  const j = L(), l = U(j.breakpoints.down("sm"));
  return /* @__PURE__ */ r.jsx(
    nr,
    {
      anchor: i,
      open: a,
      onClose: s,
      variant: "temporary",
      sx: {
        "& .MuiDrawer-paper": {
          width: l ? "100vw" : 500,
          maxWidth: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          boxShadow: j.shadows[16],
          borderRadius: l ? "16px 16px 0 0" : 0
        }
      },
      ModalProps: {
        keepMounted: !0
        // Better open performance on mobile
      },
      children: /* @__PURE__ */ r.jsx(
        mr,
        {
          athletes: t,
          selectedAthletes: h,
          onSelectionChange: g,
          onClose: s,
          title: c,
          compact: l,
          maxHeight: "100%",
          ...f
        }
      )
    }
  );
}, wn = ({
  open: a,
  onClose: s,
  anchorEl: i,
  athletes: t,
  selectedAthletes: h,
  onSelectionChange: g,
  title: c = "Select Athletes",
  maxHeight: S = 600,
  ...f
}) => {
  const j = L(), l = U(j.breakpoints.down("sm"));
  return /* @__PURE__ */ r.jsx(
    tr,
    {
      open: a,
      anchorEl: i,
      onClose: s,
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
          width: l ? "90vw" : 500,
          maxWidth: "95vw",
          maxHeight: l ? "80vh" : S,
          overflow: "hidden"
        }
      },
      children: /* @__PURE__ */ r.jsx(
        mr,
        {
          athletes: t,
          selectedAthletes: h,
          onSelectionChange: g,
          onClose: s,
          title: c,
          compact: l,
          maxHeight: S,
          ...f
        }
      )
    }
  );
};
export {
  Sn as AthleteCard,
  xr as AthleteSelectorContent,
  mr as AthleteSelectorTreeContent,
  He as CompactAthleteCard,
  yn as DrawerAthleteSelector,
  Cn as DrawerAthleteSelectorTree,
  jn as DropdownAthleteSelector,
  wn as DropdownAthleteSelectorTree,
  lr as ExpandableSquadSelector,
  pr as GroupedAthleteList,
  hn as SimpleTreeNavigationList,
  hr as SortMenu,
  cr as filterAthletes,
  dr as getStatusColor,
  fr as getStatusLabel,
  vn as groupAthletesByAgeGroup,
  bn as groupAthletesByPosition,
  ur as sortAthletes
};
