;(function(){
var h, aa = this;
function n(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
;function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
ga.prototype.va = "";
ga.prototype.append = function(a, b, c) {
  this.va += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.va += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.va;
};
var ha, ja = null;
function ka() {
  return new r(null, 5, [la, !0, ma, !0, na, !1, oa, !1, pa, null], null);
}
function s(a) {
  return null != a && !1 !== a;
}
function t(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function ra(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = ra(b), c = s(s(c) ? c.ib : c) ? c.hb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function sa(a) {
  var b = a.hb;
  return s(b) ? b : "" + w(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ta = {}, ua = {};
function va(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = va[n(null == a ? null : a)];
  if (!b && (b = va._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function wa(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = wa[n(null == a ? null : a)];
  if (!c && (c = wa._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var xa = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.Z : a) {
      return a.Z(a, b, c);
    }
    var g;
    g = y[n(null == a ? null : a)];
    if (!g && (g = y._, !g)) {
      throw v("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.r : a) {
      return a.r(a, b);
    }
    var c;
    c = y[n(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw v("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), ya = {};
function z(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = z[n(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = B[n(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var za = {}, Aa = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.B : a) {
      return a.B(a, b, c);
    }
    var g;
    g = C[n(null == a ? null : a)];
    if (!g && (g = C._, !g)) {
      throw v("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.A : a) {
      return a.A(a, b);
    }
    var c;
    c = C[n(null == a ? null : a)];
    if (!c && (c = C._, !c)) {
      throw v("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Ba(a, b) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b);
  }
  var c;
  c = Ba[n(null == a ? null : a)];
  if (!c && (c = Ba._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Da(a, b, c) {
  if (a ? a.wa : a) {
    return a.wa(a, b, c);
  }
  var d;
  d = Da[n(null == a ? null : a)];
  if (!d && (d = Da._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ea = {}, Fa = {};
function Ga(a) {
  if (a ? a.Ya : a) {
    return a.Ya();
  }
  var b;
  b = Ga[n(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ha(a) {
  if (a ? a.cb : a) {
    return a.cb();
  }
  var b;
  b = Ha[n(null == a ? null : a)];
  if (!b && (b = Ha._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ia = {}, Ja = {};
function Ka(a, b, c) {
  if (a ? a.Za : a) {
    return a.Za(a, b, c);
  }
  var d;
  d = Ka[n(null == a ? null : a)];
  if (!d && (d = Ka._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
var La = {};
function Ma(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = Ma[n(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Na = {};
function Oa(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = Oa[n(null == a ? null : a)];
  if (!c && (c = Oa._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Pa = {}, Qa = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var g;
    g = Qa[n(null == a ? null : a)];
    if (!g && (g = Qa._, !g)) {
      throw v("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = Qa[n(null == a ? null : a)];
    if (!c && (c = Qa._, !c)) {
      throw v("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Ra(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = Ra[n(null == a ? null : a)];
  if (!c && (c = Ra._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Sa(a) {
  if (a ? a.v : a) {
    return a.v(a);
  }
  var b;
  b = Sa[n(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Ta = {};
function Ua(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = Ua[n(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Va = {};
function D(a, b) {
  if (a ? a.gb : a) {
    return a.gb(0, b);
  }
  var c;
  c = D[n(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Wa = {};
function Xa(a, b, c) {
  if (a ? a.s : a) {
    return a.s(a, b, c);
  }
  var d;
  d = Xa[n(null == a ? null : a)];
  if (!d && (d = Xa._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Ya(a) {
  if (a ? a.pa : a) {
    return a.pa(a);
  }
  var b;
  b = Ya[n(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Za(a, b) {
  if (a ? a.za : a) {
    return a.za(a, b);
  }
  var c;
  c = Za[n(null == a ? null : a)];
  if (!c && (c = Za._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function $a(a) {
  if (a ? a.Aa : a) {
    return a.Aa(a);
  }
  var b;
  b = $a[n(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function ab(a, b, c) {
  if (a ? a.ya : a) {
    return a.ya(a, b, c);
  }
  var d;
  d = ab[n(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function bb(a, b, c) {
  if (a ? a.fb : a) {
    return a.fb(0, b, c);
  }
  var d;
  d = bb[n(null == a ? null : a)];
  if (!d && (d = bb._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function cb(a) {
  if (a ? a.ab : a) {
    return a.ab();
  }
  var b;
  b = cb[n(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function E(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = E[n(null == a ? null : a)];
  if (!b && (b = E._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function F(a) {
  if (a ? a.Ka : a) {
    return a.Ka(a);
  }
  var b;
  b = F[n(null == a ? null : a)];
  if (!b && (b = F._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function db(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = db[n(null == a ? null : a)];
  if (!b && (b = db._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function eb(a) {
  this.tb = a;
  this.o = 0;
  this.f = 1073741824;
}
eb.prototype.gb = function(a, b) {
  return this.tb.append(b);
};
function fb(a) {
  var b = new ga;
  a.s(null, new eb(b), ka());
  return "" + w(b);
}
function gb(a, b) {
  if (s(G.a ? G.a(a, b) : G.call(null, a, b))) {
    return 0;
  }
  var c = s(a.L) ? !1 : !0;
  if (s(c ? b.L : c)) {
    return-1;
  }
  if (s(a.L)) {
    if (!s(b.L)) {
      return 1;
    }
    c = hb.a ? hb.a(a.L, b.L) : hb.call(null, a.L, b.L);
    return 0 === c ? hb.a ? hb.a(a.name, b.name) : hb.call(null, a.name, b.name) : c;
  }
  return ib ? hb.a ? hb.a(a.name, b.name) : hb.call(null, a.name, b.name) : null;
}
function jb(a, b, c, d, e) {
  this.L = a;
  this.name = b;
  this.na = c;
  this.oa = d;
  this.fa = e;
  this.f = 2154168321;
  this.o = 4096;
}
h = jb.prototype;
h.s = function(a, b) {
  return D(b, this.na);
};
h.v = function() {
  var a = this.oa;
  return null != a ? a : this.oa = a = kb.a ? kb.a(I.d ? I.d(this.L) : I.call(null, this.L), I.d ? I.d(this.name) : I.call(null, this.name)) : kb.call(null, I.d ? I.d(this.L) : I.call(null, this.L), I.d ? I.d(this.name) : I.call(null, this.name));
};
h.F = function(a, b) {
  return new jb(this.L, this.name, this.na, this.oa, b);
};
h.I = function() {
  return this.fa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.b(c, this, null);
      case 3:
        return C.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return C.b(a, this, null);
};
h.a = function(a, b) {
  return C.b(a, this, b);
};
h.t = function(a, b) {
  return b instanceof jb ? this.na === b.na : !1;
};
h.toString = function() {
  return this.na;
};
function K(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.zb)) {
    return a.C(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new lb(a, 0);
  }
  if (t(Ta, a)) {
    return Ua(a);
  }
  if (u) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function M(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.xa)) {
    return a.P(null);
  }
  a = K(a);
  return null == a ? null : z(a);
}
function N(a) {
  return null != a ? a && (a.f & 64 || a.xa) ? a.S(null) : (a = K(a)) ? B(a) : O : O;
}
function P(a) {
  return null == a ? null : a && (a.f & 128 || a.eb) ? a.T(null) : K(N(a));
}
var G = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ra(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (P(e)) {
            a = d, d = M(e), e = P(e);
          } else {
            return b.a(d, M(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
ua["null"] = !0;
va["null"] = function() {
  return 0;
};
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Ra.number = function(a, b) {
  return a === b;
};
La["function"] = !0;
Ma["function"] = function() {
  return null;
};
ta["function"] = !0;
Sa._ = function(a) {
  return a[ca] || (a[ca] = ++da);
};
var mb = function() {
  function a(a, b, c, d) {
    for (var l = va(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = va(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = va(a);
    if (0 === c) {
      return b.R ? b.R() : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.m = a;
  return d;
}(), nb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.R ? b.R() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.m = a;
  return d;
}();
function ob(a) {
  return a ? a.f & 2 || a.lb ? !0 : a.f ? !1 : t(ua, a) : t(ua, a);
}
function pb(a) {
  return a ? a.f & 16 || a.bb ? !0 : a.f ? !1 : t(xa, a) : t(xa, a);
}
function lb(a, b) {
  this.c = a;
  this.i = b;
  this.f = 166199550;
  this.o = 8192;
}
h = lb.prototype;
h.v = function() {
  return qb.d ? qb.d(this) : qb.call(null, this);
};
h.T = function() {
  return this.i + 1 < this.c.length ? new lb(this.c, this.i + 1) : null;
};
h.D = function(a, b) {
  return R.a ? R.a(b, this) : R.call(null, b, this);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return nb.m(this.c, b, this.c[this.i], this.i + 1);
};
h.O = function(a, b, c) {
  return nb.m(this.c, b, c, this.i);
};
h.C = function() {
  return this;
};
h.G = function() {
  return this.c.length - this.i;
};
h.P = function() {
  return this.c[this.i];
};
h.S = function() {
  return this.i + 1 < this.c.length ? new lb(this.c, this.i + 1) : O;
};
h.t = function(a, b) {
  return rb.a ? rb.a(this, b) : rb.call(null, this, b);
};
h.r = function(a, b) {
  var c = b + this.i;
  return c < this.c.length ? this.c[c] : null;
};
h.Z = function(a, b, c) {
  a = b + this.i;
  return a < this.c.length ? this.c[a] : c;
};
var sb = function() {
  function a(a, b) {
    return b < a.length ? new lb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), Q = function() {
  function a(a, b) {
    return sb.a(a, b);
  }
  function b(a) {
    return sb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
Ra._ = function(a, b) {
  return a === b;
};
var tb = function() {
  function a(a, b) {
    return null != a ? wa(a, b) : wa(O, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (s(e)) {
          a = b.a(a, d), d = M(e), e = P(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function S(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.lb)) {
      a = a.G(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (t(ua, a)) {
            a = va(a);
          } else {
            if (u) {
              a: {
                a = K(a);
                for (var b = 0;;) {
                  if (ob(a)) {
                    a = b + va(a);
                    break a;
                  }
                  a = P(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var ub = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return K(a) ? M(a) : c;
      }
      if (pb(a)) {
        return y.b(a, b, c);
      }
      if (K(a)) {
        a = P(a), b -= 1;
      } else {
        return u ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (K(a)) {
          return M(a);
        }
        throw Error("Index out of bounds");
      }
      if (pb(a)) {
        return y.a(a, b);
      }
      if (K(a)) {
        var c = P(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (u) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), T = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.f & 16 || a.bb)) {
        return a.Z(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (t(xa, a)) {
        return y.a(a, b);
      }
      if (u) {
        if (a ? a.f & 64 || a.xa || (a.f ? 0 : t(ya, a)) : t(ya, a)) {
          return ub.b(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(sa(ra(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.f & 16 || a.bb)) {
      return a.r(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (t(xa, a)) {
      return y.a(a, b);
    }
    if (u) {
      if (a ? a.f & 64 || a.xa || (a.f ? 0 : t(ya, a)) : t(ya, a)) {
        return ub.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(sa(ra(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), U = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.mb) ? a.B(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(Aa, a) ? C.b(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.mb) ? a.A(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(Aa, a) ? C.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), wb = function() {
  function a(a, b, c) {
    return null != a ? Da(a, b, c) : vb.a ? vb.a([b], [c]) : vb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), s(l)) {
          d = M(l), e = M(P(l)), l = P(P(l));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var l = M(a);
      a = N(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, Q(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function xb(a) {
  var b = "function" == n(a);
  return b ? b : a ? s(s(null) ? null : a.kb) ? !0 : a.$a ? !1 : t(ta, a) : t(ta, a);
}
var Ab = function yb(b, c) {
  return xb(b) && !(b ? b.f & 262144 || b.Db || (b.f ? 0 : t(Na, b)) : t(Na, b)) ? yb(function() {
    "undefined" === typeof ha && (ha = function(b, c, f, g) {
      this.k = b;
      this.Da = c;
      this.ub = f;
      this.sb = g;
      this.o = 0;
      this.f = 393217;
    }, ha.ib = !0, ha.hb = "cljs.core/t9374", ha.rb = function(b) {
      return D(b, "cljs.core/t9374");
    }, ha.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return zb.a ? zb.a(b.Da, d) : zb.call(null, b.Da, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = M(b);
        b = N(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x(c)));
    }, ha.prototype.a = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = Q(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return zb.a ? zb.a(self__.Da, b) : zb.call(null, self__.Da, b);
      }
      b.l = 0;
      b.h = function(b) {
        b = K(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.kb = !0, ha.prototype.I = function() {
      return this.sb;
    }, ha.prototype.F = function(b, c) {
      return new ha(this.k, this.Da, this.ub, c);
    });
    return new ha(c, b, yb, null);
  }(), c) : null == b ? null : Oa(b, c);
};
function Bb(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.ob || (a.f ? 0 : t(La, a)) : t(La, a) : b) ? Ma(a) : null;
}
var Cb = {}, Db = 0;
function I(a) {
  if (a && (a.f & 4194304 || a.xb)) {
    a = a.v(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < Db && (Cb = {}, Db = 0);
            var b = Cb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Cb[a] = b;
              Db += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : u ? Sa(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Eb(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.yb ? !0 : a.f ? !1 : t(Ea, a) : t(Ea, a);
}
function Fb(a) {
  return a ? a.f & 16384 || a.Cb ? !0 : a.f ? !1 : t(Ja, a) : t(Ja, a);
}
function V(a) {
  return a ? a.o & 512 || a.vb ? !0 : !1 : !1;
}
function Gb(a) {
  var b = [];
  fa(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Ib(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Jb = {};
function Kb(a) {
  return s(a) ? !0 : !1;
}
function hb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ra(a) === ra(b)) {
    return a && (a.o & 2048 || a.Ea) ? a.Fa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Lb = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = hb(T.a(a, g), T.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = S(a), g = S(b);
    return f < g ? -1 : f > g ? 1 : u ? c.m(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.m = a;
  return c;
}(), Nb = function() {
  function a(a, b, c) {
    for (c = K(c);;) {
      if (c) {
        b = a.a ? a.a(b, M(c)) : a.call(null, b, M(c)), c = P(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = K(b);
    return c ? Mb.b ? Mb.b(a, M(c), P(c)) : Mb.call(null, a, M(c), P(c)) : a.R ? a.R() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Mb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.qb) ? c.O(null, a, b) : c instanceof Array ? nb.b(c, a, b) : "string" === typeof c ? nb.b(c, a, b) : t(Pa, c) ? Qa.b(c, a, b) : u ? Nb.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.qb) ? b.N(null, a) : b instanceof Array ? nb.a(b, a) : "string" === typeof b ? nb.a(b, a) : t(Pa, b) ? Qa.a(b, a) : u ? Nb.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Ob(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
}
function Pb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Qb(a, b) {
  for (var c = b, d = K(a);;) {
    if (d && 0 < c) {
      c -= 1, d = P(d);
    } else {
      return d;
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.d(a)), l = d;;) {
        if (s(l)) {
          e = e.append(b.d(M(l))), l = P(l);
        } else {
          return e.toString();
        }
      }
    }
    a.l = 1;
    a.h = function(a) {
      var b = M(a);
      a = N(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, Q(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.R = function() {
    return "";
  };
  b.d = a;
  b.e = c.e;
  return b;
}(), Rb = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c);
  };
  a.b = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function rb(a, b) {
  return Kb((b ? b.f & 16777216 || b.Ab || (b.f ? 0 : t(Va, b)) : t(Va, b)) ? function() {
    for (var c = K(a), d = K(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (G.a(M(c), M(d))) {
        c = P(c), d = P(d);
      } else {
        return u ? !1 : null;
      }
    }
  }() : null);
}
function kb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function qb(a) {
  if (K(a)) {
    var b = I(M(a));
    for (a = P(a);;) {
      if (null == a) {
        return b;
      }
      b = kb(b, I(M(a)));
      a = P(a);
    }
  } else {
    return 0;
  }
}
function Sb(a) {
  var b = 0;
  for (a = K(a);;) {
    if (a) {
      var c = M(a), b = (b + (I(Tb.d ? Tb.d(c) : Tb.call(null, c)) ^ I(Ub.d ? Ub.d(c) : Ub.call(null, c)))) % 4503599627370496;
      a = P(a);
    } else {
      return b;
    }
  }
}
function Vb(a, b, c, d, e) {
  this.k = a;
  this.Ba = b;
  this.ha = c;
  this.count = d;
  this.j = e;
  this.f = 65937646;
  this.o = 8192;
}
h = Vb.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.T = function() {
  return 1 === this.count ? null : this.ha;
};
h.D = function(a, b) {
  return new Vb(this.k, b, this, this.count + 1, null);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  return this;
};
h.G = function() {
  return this.count;
};
h.P = function() {
  return this.Ba;
};
h.S = function() {
  return 1 === this.count ? O : this.ha;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new Vb(b, this.Ba, this.ha, this.count, this.j);
};
h.I = function() {
  return this.k;
};
function Wb(a) {
  this.k = a;
  this.f = 65937614;
  this.o = 8192;
}
h = Wb.prototype;
h.v = function() {
  return 0;
};
h.T = function() {
  return null;
};
h.D = function(a, b) {
  return new Vb(this.k, b, null, 1, null);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  return null;
};
h.G = function() {
  return 0;
};
h.P = function() {
  return null;
};
h.S = function() {
  return O;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new Wb(b);
};
h.I = function() {
  return this.k;
};
var O = new Wb(null), Xb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof lb && 0 === a.i) {
      b = a.c;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.P(null)), a = a.T(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = O;;) {
      if (0 < a) {
        var f = a - 1, e = e.D(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = K(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Yb(a, b, c, d) {
  this.k = a;
  this.Ba = b;
  this.ha = c;
  this.j = d;
  this.f = 65929452;
  this.o = 8192;
}
h = Yb.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.T = function() {
  return null == this.ha ? null : K(this.ha);
};
h.D = function(a, b) {
  return new Yb(null, b, this, this.j);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  return this;
};
h.P = function() {
  return this.Ba;
};
h.S = function() {
  return null == this.ha ? O : this.ha;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new Yb(b, this.Ba, this.ha, this.j);
};
h.I = function() {
  return this.k;
};
function R(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.xa)) ? new Yb(null, a, b, null) : new Yb(null, a, K(b), null);
}
function W(a, b, c, d) {
  this.L = a;
  this.name = b;
  this.ka = c;
  this.oa = d;
  this.f = 2153775105;
  this.o = 4096;
}
h = W.prototype;
h.s = function(a, b) {
  return D(b, [w(":"), w(this.ka)].join(""));
};
h.v = function() {
  null == this.oa && (this.oa = kb(I(this.L), I(this.name)) + 2654435769);
  return this.oa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return U.a(c, this);
      case 3:
        return U.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return U.a(a, this);
};
h.a = function(a, b) {
  return U.b(a, this, b);
};
h.t = function(a, b) {
  return b instanceof W ? this.ka === b.ka : !1;
};
h.toString = function() {
  return[w(":"), w(this.ka)].join("");
};
var $b = function() {
  function a(a, b) {
    return new W(a, b, [w(s(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof W) {
      return a;
    }
    if (a instanceof jb) {
      var b;
      if (a && (a.o & 4096 || a.pb)) {
        b = a.L;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new W(b, Zb.d ? Zb.d(a) : Zb.call(null, a), a.na, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new W(b[0], b[1], a, null) : new W(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function X(a, b, c, d) {
  this.k = a;
  this.ta = b;
  this.p = c;
  this.j = d;
  this.o = 0;
  this.f = 32374988;
}
h = X.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.T = function() {
  Ua(this);
  return null == this.p ? null : P(this.p);
};
h.D = function(a, b) {
  return R(b, this);
};
h.toString = function() {
  return fb(this);
};
function ac(a) {
  null != a.ta && (a.p = a.ta.R ? a.ta.R() : a.ta.call(null), a.ta = null);
  return a.p;
}
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  ac(this);
  if (null == this.p) {
    return null;
  }
  for (var a = this.p;;) {
    if (a instanceof X) {
      a = ac(a);
    } else {
      return this.p = a, K(this.p);
    }
  }
};
h.P = function() {
  Ua(this);
  return null == this.p ? null : M(this.p);
};
h.S = function() {
  Ua(this);
  return null != this.p ? N(this.p) : O;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new X(b, this.ta, this.p, this.j);
};
h.I = function() {
  return this.k;
};
function bc(a, b) {
  this.Ga = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
bc.prototype.G = function() {
  return this.end;
};
bc.prototype.add = function(a) {
  this.Ga[this.end] = a;
  return this.end += 1;
};
bc.prototype.M = function() {
  var a = new cc(this.Ga, 0, this.end);
  this.Ga = null;
  return a;
};
function cc(a, b, c) {
  this.c = a;
  this.q = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
h = cc.prototype;
h.N = function(a, b) {
  return nb.m(this.c, b, this.c[this.q], this.q + 1);
};
h.O = function(a, b, c) {
  return nb.m(this.c, b, c, this.q);
};
h.ab = function() {
  if (this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new cc(this.c, this.q + 1, this.end);
};
h.r = function(a, b) {
  return this.c[this.q + b];
};
h.Z = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.c[this.q + b] : c;
};
h.G = function() {
  return this.end - this.q;
};
var dc = function() {
  function a(a, b, c) {
    return new cc(a, b, c);
  }
  function b(a, b) {
    return new cc(a, b, a.length);
  }
  function c(a) {
    return new cc(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.b = a;
  return d;
}();
function ec(a, b, c, d) {
  this.M = a;
  this.da = b;
  this.k = c;
  this.j = d;
  this.f = 31850732;
  this.o = 1536;
}
h = ec.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.T = function() {
  if (1 < va(this.M)) {
    return new ec(cb(this.M), this.da, this.k, null);
  }
  var a = Ua(this.da);
  return null == a ? null : a;
};
h.D = function(a, b) {
  return R(b, this);
};
h.toString = function() {
  return fb(this);
};
h.C = function() {
  return this;
};
h.P = function() {
  return y.a(this.M, 0);
};
h.S = function() {
  return 1 < va(this.M) ? new ec(cb(this.M), this.da, this.k, null) : null == this.da ? O : this.da;
};
h.Ia = function() {
  return null == this.da ? null : this.da;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new ec(this.M, this.da, b, this.j);
};
h.I = function() {
  return this.k;
};
h.Ja = function() {
  return this.M;
};
h.Ka = function() {
  return null == this.da ? O : this.da;
};
function fc(a, b) {
  return 0 === va(a) ? b : new ec(a, b, null, null);
}
function gc(a) {
  for (var b = [];;) {
    if (K(a)) {
      b.push(M(a)), a = P(a);
    } else {
      return b;
    }
  }
}
function hc(a, b) {
  if (ob(a)) {
    return S(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && K(c)) {
      c = P(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var jc = function ic(b) {
  return null == b ? null : null == P(b) ? K(M(b)) : u ? R(M(b), ic(P(b))) : null;
}, kc = function() {
  function a(a, b) {
    return new X(null, function() {
      var c = K(a);
      return c ? V(c) ? fc(E(c), d.a(F(c), b)) : R(M(c), d.a(N(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new X(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new X(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = Q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function q(a, b) {
        return new X(null, function() {
          var c = K(a);
          return c ? V(c) ? fc(E(c), q(F(c), b)) : R(M(c), q(N(c), b)) : s(b) ? q(M(b), P(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.l = 2;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.e(d, g, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.h = e.h;
  d.R = c;
  d.d = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), lc = function() {
  function a(a, b, c, d) {
    return R(a, R(b, R(c, d)));
  }
  function b(a, b, c) {
    return R(a, R(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var q = null;
      4 < arguments.length && (q = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q);
    }
    function b(a, c, d, e, f) {
      return R(a, R(c, R(d, R(e, jc(f)))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var p = M(a);
      a = N(a);
      return b(c, d, e, p, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return K(c);
      case 2:
        return R(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.e(c, f, g, k, Q(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.h = d.h;
  c.d = function(a) {
    return K(a);
  };
  c.a = function(a, b) {
    return R(a, b);
  };
  c.b = b;
  c.m = a;
  c.e = d.e;
  return c;
}(), mc = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Za(a, c), s(d)) {
          c = M(d), d = P(d);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var g = M(a);
      a = N(a);
      return b(c, g, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return Za(a, d);
      default:
        return b.e(a, d, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.a = function(a, b) {
    return Za(a, b);
  };
  a.e = b.e;
  return a;
}(), nc = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = ab(a, c, d), s(k)) {
          c = M(k), d = M(P(k)), k = P(P(k));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var g = M(a);
      a = P(a);
      var k = M(a);
      a = N(a);
      return b(c, g, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return ab(a, d, e);
      default:
        return b.e(a, d, e, Q(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 3;
  a.h = b.h;
  a.b = function(a, b, e) {
    return ab(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function oc(a, b, c) {
  var d = K(c);
  if (0 === b) {
    return a.R ? a.R() : a.call(null);
  }
  c = z(d);
  var e = B(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = z(e), f = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = z(f), g = B(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = z(g), k = B(g);
  if (4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = z(k);
  k = B(k);
  if (5 === b) {
    return a.H ? a.H(c, d, e, f, g) : a.H ? a.H(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  a = z(k);
  var l = B(k);
  if (6 === b) {
    return a.Y ? a.Y(c, d, e, f, g, a) : a.Y ? a.Y(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a);
  }
  var k = z(l), m = B(l);
  if (7 === b) {
    return a.qa ? a.qa(c, d, e, f, g, a, k) : a.qa ? a.qa(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
  }
  var l = z(m), p = B(m);
  if (8 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, a, k, l) : a.Wa ? a.Wa(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l);
  }
  var m = z(p), q = B(p);
  if (9 === b) {
    return a.Xa ? a.Xa(c, d, e, f, g, a, k, l, m) : a.Xa ? a.Xa(c, d, e, f, g, a, k, l, m) : a.call(null, c, d, e, f, g, a, k, l, m);
  }
  var p = z(q), A = B(q);
  if (10 === b) {
    return a.La ? a.La(c, d, e, f, g, a, k, l, m, p) : a.La ? a.La(c, d, e, f, g, a, k, l, m, p) : a.call(null, c, d, e, f, g, a, k, l, m, p);
  }
  var q = z(A), J = B(A);
  if (11 === b) {
    return a.Ma ? a.Ma(c, d, e, f, g, a, k, l, m, p, q) : a.Ma ? a.Ma(c, d, e, f, g, a, k, l, m, p, q) : a.call(null, c, d, e, f, g, a, k, l, m, p, q);
  }
  var A = z(J), H = B(J);
  if (12 === b) {
    return a.Na ? a.Na(c, d, e, f, g, a, k, l, m, p, q, A) : a.Na ? a.Na(c, d, e, f, g, a, k, l, m, p, q, A) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A);
  }
  var J = z(H), L = B(H);
  if (13 === b) {
    return a.Oa ? a.Oa(c, d, e, f, g, a, k, l, m, p, q, A, J) : a.Oa ? a.Oa(c, d, e, f, g, a, k, l, m, p, q, A, J) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J);
  }
  var H = z(L), ba = B(L);
  if (14 === b) {
    return a.Pa ? a.Pa(c, d, e, f, g, a, k, l, m, p, q, A, J, H) : a.Pa ? a.Pa(c, d, e, f, g, a, k, l, m, p, q, A, J, H) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J, H);
  }
  var L = z(ba), ia = B(ba);
  if (15 === b) {
    return a.Qa ? a.Qa(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L) : a.Qa ? a.Qa(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J, H, L);
  }
  var ba = z(ia), qa = B(ia);
  if (16 === b) {
    return a.Ra ? a.Ra(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba) : a.Ra ? a.Ra(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba);
  }
  var ia = z(qa), Ca = B(qa);
  if (17 === b) {
    return a.Sa ? a.Sa(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia) : a.Sa ? a.Sa(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia);
  }
  var qa = z(Ca), Hb = B(Ca);
  if (18 === b) {
    return a.Ta ? a.Ta(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa) : a.Ta ? a.Ta(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa);
  }
  Ca = z(Hb);
  Hb = B(Hb);
  if (19 === b) {
    return a.Ua ? a.Ua(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa, Ca) : a.Ua ? a.Ua(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa, Ca) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa, Ca);
  }
  var xc = z(Hb);
  B(Hb);
  if (20 === b) {
    return a.Va ? a.Va(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa, Ca, xc) : a.Va ? a.Va(c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa, Ca, xc) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, A, J, H, L, ba, ia, qa, Ca, xc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var zb = function() {
  function a(a, b, c, d, e) {
    b = lc.m(b, c, d, e);
    c = a.l;
    return a.h ? (d = hc(b, c + 1), d <= c ? oc(a, d, b) : a.h(b)) : a.apply(a, gc(b));
  }
  function b(a, b, c, d) {
    b = lc.b(b, c, d);
    c = a.l;
    return a.h ? (d = hc(b, c + 1), d <= c ? oc(a, d, b) : a.h(b)) : a.apply(a, gc(b));
  }
  function c(a, b, c) {
    b = lc.a(b, c);
    c = a.l;
    if (a.h) {
      var d = hc(b, c + 1);
      return d <= c ? oc(a, d, b) : a.h(b);
    }
    return a.apply(a, gc(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = hc(b, c + 1);
      return d <= c ? oc(a, d, b) : a.h(b);
    }
    return a.apply(a, gc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, J) {
      var H = null;
      5 < arguments.length && (H = Q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, H);
    }
    function b(a, c, d, e, f, g) {
      c = R(c, R(d, R(e, R(f, jc(g)))));
      d = a.l;
      return a.h ? (e = hc(c, d + 1), e <= d ? oc(a, e, c) : a.h(c)) : a.apply(a, gc(c));
    }
    a.l = 5;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var f = M(a);
      a = P(a);
      var g = M(a);
      a = N(a);
      return b(c, d, e, f, g, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return f.e(e, k, l, m, p, Q(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.h = f.h;
  e.a = d;
  e.b = c;
  e.m = b;
  e.H = a;
  e.e = f.e;
  return e;
}();
function pc(a, b) {
  for (;;) {
    if (null == K(b)) {
      return!0;
    }
    if (s(a.d ? a.d(M(b)) : a.call(null, M(b)))) {
      var c = a, d = P(b);
      a = c;
      b = d;
    } else {
      return u ? !1 : null;
    }
  }
}
function qc(a) {
  return a;
}
var rc = function() {
  function a(a, b, c, e) {
    return new X(null, function() {
      var m = K(b), p = K(c), q = K(e);
      return m && p && q ? R(a.b ? a.b(M(m), M(p), M(q)) : a.call(null, M(m), M(p), M(q)), d.m(a, N(m), N(p), N(q))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new X(null, function() {
      var e = K(b), m = K(c);
      return e && m ? R(a.a ? a.a(M(e), M(m)) : a.call(null, M(e), M(m)), d.b(a, N(e), N(m))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new X(null, function() {
      var c = K(b);
      if (c) {
        if (V(c)) {
          for (var e = E(c), m = S(e), p = new bc(Array(m), 0), q = 0;;) {
            if (q < m) {
              var A = a.d ? a.d(y.a(e, q)) : a.call(null, y.a(e, q));
              p.add(A);
              q += 1;
            } else {
              break;
            }
          }
          return fc(p.M(), d.a(a, F(c)));
        }
        return R(a.d ? a.d(M(c)) : a.call(null, M(c)), d.a(a, N(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var A = null;
      4 < arguments.length && (A = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, A);
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return zb.a(a, b);
      }, function J(a) {
        return new X(null, function() {
          var b = d.a(K, a);
          return pc(qc, b) ? R(d.a(M, b), J(d.a(N, b))) : null;
        }, null, null);
      }(tb.e(g, f, Q([e, c], 0))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var f = M(a);
      a = N(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, Q(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.m = a;
  d.e = e.e;
  return d;
}(), tc = function sc(b, c) {
  return new X(null, function() {
    if (0 < b) {
      var d = K(c);
      return d ? R(M(d), sc(b - 1, N(d))) : null;
    }
    return null;
  }, null, null);
};
function uc(a, b) {
  return new X(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = K(d), 0 < c && d) {
          c -= 1, d = N(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
var vc = function() {
  function a(a, b) {
    return tc(a, c.d(b));
  }
  function b(a) {
    return new X(null, function() {
      return R(a, c.d(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), wc = function() {
  function a(a, c) {
    return new X(null, function() {
      var f = K(a), g = K(c);
      return f && g ? R(M(f), R(M(g), b.a(N(f), N(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new X(null, function() {
        var c = rc.a(K, tb.e(e, d, Q([a], 0)));
        return pc(qc, c) ? kc.a(rc.a(M, c), zb.a(b, rc.a(N, c))) : null;
      }, null, null);
    }
    a.l = 2;
    a.h = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function yc(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.wb) ? (c = Mb.b(Za, Ya(a), b), c = $a(c)) : c = Mb.b(wa, a, b) : c = Mb.b(tb, O, b);
  return c;
}
var zc = function() {
  function a(a, b, c, k) {
    return new X(null, function() {
      var l = K(k);
      if (l) {
        var m = tc(a, l);
        return a === S(m) ? R(m, d.m(a, b, c, uc(b, l))) : wa(O, tc(a, kc.a(m, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new X(null, function() {
      var k = K(c);
      if (k) {
        var l = tc(a, k);
        return a === S(l) ? R(l, d.b(a, b, uc(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.b(a, a, b);
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.m = a;
  return d;
}(), Ac = function() {
  function a(a, b, c, d, f, q) {
    var A = T.b(b, 0, null);
    return(b = Qb(b, 1)) ? wb.b(a, A, e.Y(U.a(a, A), b, c, d, f, q)) : wb.b(a, A, c.m ? c.m(U.a(a, A), d, f, q) : c.call(null, U.a(a, A), d, f, q));
  }
  function b(a, b, c, d, f) {
    var q = T.b(b, 0, null);
    return(b = Qb(b, 1)) ? wb.b(a, q, e.H(U.a(a, q), b, c, d, f)) : wb.b(a, q, c.b ? c.b(U.a(a, q), d, f) : c.call(null, U.a(a, q), d, f));
  }
  function c(a, b, c, d) {
    var f = T.b(b, 0, null);
    return(b = Qb(b, 1)) ? wb.b(a, f, e.m(U.a(a, f), b, c, d)) : wb.b(a, f, c.a ? c.a(U.a(a, f), d) : c.call(null, U.a(a, f), d));
  }
  function d(a, b, c) {
    var d = T.b(b, 0, null);
    return(b = Qb(b, 1)) ? wb.b(a, d, e.b(U.a(a, d), b, c)) : wb.b(a, d, c.d ? c.d(U.a(a, d)) : c.call(null, U.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, J, H) {
      var L = null;
      6 < arguments.length && (L = Q(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, J, L);
    }
    function b(a, c, d, f, g, k, H) {
      var L = T.b(c, 0, null);
      return(c = Qb(c, 1)) ? wb.b(a, L, zb.e(e, U.a(a, L), c, d, f, Q([g, k, H], 0))) : wb.b(a, L, zb.e(d, U.a(a, L), f, g, k, Q([H], 0)));
    }
    a.l = 6;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var f = M(a);
      a = P(a);
      var g = M(a);
      a = P(a);
      var H = M(a);
      a = N(a);
      return b(c, d, e, f, g, H, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, m, p, q, A) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, m);
      case 5:
        return b.call(this, e, k, l, m, p);
      case 6:
        return a.call(this, e, k, l, m, p, q);
      default:
        return f.e(e, k, l, m, p, q, Q(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 6;
  e.h = f.h;
  e.b = d;
  e.m = c;
  e.H = b;
  e.Y = a;
  e.e = f.e;
  return e;
}();
function Bc(a, b) {
  this.n = a;
  this.c = b;
}
function Cc(a) {
  return new Bc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Dc(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Ec(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Cc(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Gc = function Fc(b, c, d, e) {
  var f = new Bc(d.n, x(d.c)), g = b.g - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? Fc(b, c - 5, d, e) : Ec(null, c - 5, e), f.c[g] = b);
  return f;
};
function Hc(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function Ic(a, b) {
  if (0 <= b && b < a.g) {
    if (b >= Dc(a)) {
      return a.K;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.c[b >>> d & 31], d = e
      } else {
        return c.c;
      }
    }
  } else {
    return Hc(b, a.g);
  }
}
var Kc = function Jc(b, c, d, e, f) {
  var g = new Bc(d.n, x(d.c));
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Jc(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
};
function Y(a, b, c, d, e, f) {
  this.k = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.K = e;
  this.j = f;
  this.o = 8196;
  this.f = 167668511;
}
h = Y.prototype;
h.pa = function() {
  return new Lc(this.g, this.shift, Mc.d ? Mc.d(this.root) : Mc.call(null, this.root), Nc.d ? Nc.d(this.K) : Nc.call(null, this.K));
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.A = function(a, b) {
  return y.b(this, b, null);
};
h.B = function(a, b, c) {
  return y.b(this, b, c);
};
h.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ka(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.r(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return this.r(null, a);
};
h.a = function(a, b) {
  return this.Z(null, a, b);
};
h.D = function(a, b) {
  if (32 > this.g - Dc(this)) {
    for (var c = this.K.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.K[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Y(this.k, this.g + 1, this.shift, this.root, d, null);
  }
  c = (d = this.g >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Cc(null), d.c[0] = this.root, e = Ec(null, this.shift, new Bc(null, this.K)), d.c[1] = e) : d = Gc(this, this.shift, this.root, new Bc(null, this.K));
  return new Y(this.k, this.g + 1, c, d, [b], null);
};
h.Ya = function() {
  return y.a(this, 0);
};
h.cb = function() {
  return y.a(this, 1);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return mb.a(this, b);
};
h.O = function(a, b, c) {
  return mb.b(this, b, c);
};
h.C = function() {
  return 0 === this.g ? null : 32 > this.g ? Q.d(this.K) : u ? Oc.b ? Oc.b(this, 0, 0) : Oc.call(null, this, 0, 0) : null;
};
h.G = function() {
  return this.g;
};
h.Za = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return Dc(this) <= b ? (a = x(this.K), a[b & 31] = c, new Y(this.k, this.g, this.shift, this.root, a, null)) : new Y(this.k, this.g, this.shift, Kc(this, this.shift, this.root, b, c), this.K, null);
  }
  if (b === this.g) {
    return wa(this, c);
  }
  if (u) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.g), w("]")].join(""));
  }
  return null;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new Y(b, this.g, this.shift, this.root, this.K, this.j);
};
h.I = function() {
  return this.k;
};
h.r = function(a, b) {
  return Ic(this, b)[b & 31];
};
h.Z = function(a, b, c) {
  return 0 <= b && b < this.g ? y.a(this, b) : c;
};
var Z = new Bc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Pc = new Y(null, 0, 5, Z, [], 0);
function Qc(a, b) {
  var c = a.length, d = b ? a : x(a);
  if (32 > c) {
    return new Y(null, c, 5, Z, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new Y(null, 32, 5, Z, e, null)).pa(null);;) {
    if (f < c) {
      e = f + 1, g = mc.a(g, d[f]), f = e;
    } else {
      return $a(g);
    }
  }
}
var Rc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof lb && 0 === a.i ? Qc.a ? Qc.a(a.c, !0) : Qc.call(null, a.c, !0) : $a(Mb.b(Za, Ya(Pc), a));
  }
  a.l = 0;
  a.h = function(a) {
    a = K(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Sc(a, b, c, d, e, f) {
  this.w = a;
  this.W = b;
  this.i = c;
  this.q = d;
  this.k = e;
  this.j = f;
  this.f = 32243948;
  this.o = 1536;
}
h = Sc.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.T = function() {
  if (this.q + 1 < this.W.length) {
    var a = Oc.m ? Oc.m(this.w, this.W, this.i, this.q + 1) : Oc.call(null, this.w, this.W, this.i, this.q + 1);
    return null == a ? null : a;
  }
  return db(this);
};
h.D = function(a, b) {
  return R(b, this);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return mb.a(Tc.b ? Tc.b(this.w, this.i + this.q, S(this.w)) : Tc.call(null, this.w, this.i + this.q, S(this.w)), b);
};
h.O = function(a, b, c) {
  return mb.b(Tc.b ? Tc.b(this.w, this.i + this.q, S(this.w)) : Tc.call(null, this.w, this.i + this.q, S(this.w)), b, c);
};
h.C = function() {
  return this;
};
h.P = function() {
  return this.W[this.q];
};
h.S = function() {
  if (this.q + 1 < this.W.length) {
    var a = Oc.m ? Oc.m(this.w, this.W, this.i, this.q + 1) : Oc.call(null, this.w, this.W, this.i, this.q + 1);
    return null == a ? O : a;
  }
  return F(this);
};
h.Ia = function() {
  var a = this.W.length, a = this.i + a < va(this.w) ? Oc.b ? Oc.b(this.w, this.i + a, 0) : Oc.call(null, this.w, this.i + a, 0) : null;
  return null == a ? null : a;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return Oc.H ? Oc.H(this.w, this.W, this.i, this.q, b) : Oc.call(null, this.w, this.W, this.i, this.q, b);
};
h.Ja = function() {
  return dc.a(this.W, this.q);
};
h.Ka = function() {
  var a = this.W.length, a = this.i + a < va(this.w) ? Oc.b ? Oc.b(this.w, this.i + a, 0) : Oc.call(null, this.w, this.i + a, 0) : null;
  return null == a ? O : a;
};
var Oc = function() {
  function a(a, b, c, d, l) {
    return new Sc(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Sc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Sc(a, Ic(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.m = b;
  d.H = a;
  return d;
}();
function Uc(a, b, c, d, e) {
  this.k = a;
  this.ea = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.f = 166617887;
  this.o = 8192;
}
h = Uc.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.A = function(a, b) {
  return y.b(this, b, null);
};
h.B = function(a, b, c) {
  return y.b(this, b, c);
};
h.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ka(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.r(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return this.r(null, a);
};
h.a = function(a, b) {
  return this.Z(null, a, b);
};
h.D = function(a, b) {
  return Vc.H ? Vc.H(this.k, Ka(this.ea, this.end, b), this.start, this.end + 1, null) : Vc.call(null, this.k, Ka(this.ea, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return mb.a(this, b);
};
h.O = function(a, b, c) {
  return mb.b(this, b, c);
};
h.C = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : R(y.a(a.ea, d), new X(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.G = function() {
  return this.end - this.start;
};
h.Za = function(a, b, c) {
  var d = this, e = d.start + b;
  return Vc.H ? Vc.H(d.k, wb.b(d.ea, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Vc.call(null, d.k, wb.b(d.ea, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return Vc.H ? Vc.H(b, this.ea, this.start, this.end, this.j) : Vc.call(null, b, this.ea, this.start, this.end, this.j);
};
h.I = function() {
  return this.k;
};
h.r = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Hc(b, this.end - this.start) : y.a(this.ea, this.start + b);
};
h.Z = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.b(this.ea, this.start + b, c);
};
function Vc(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Uc) {
      c = b.start + c, d = b.start + d, b = b.ea;
    } else {
      var f = S(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Uc(a, b, c, d, e);
    }
  }
}
var Tc = function() {
  function a(a, b, c) {
    return Vc(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, S(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Mc(a) {
  return new Bc({}, x(a.c));
}
function Nc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Ib(a, 0, b, 0, a.length);
  return b;
}
var Xc = function Wc(b, c, d, e) {
  d = b.root.n === d.n ? d : new Bc(b.root.n, x(d.c));
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? Wc(b, c - 5, g, e) : Ec(b.root.n, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Lc(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.K = d;
  this.f = 275;
  this.o = 88;
}
h = Lc.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.A = function(a, b) {
  return y.b(this, b, null);
};
h.B = function(a, b, c) {
  return y.b(this, b, c);
};
h.r = function(a, b) {
  if (this.root.n) {
    return Ic(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.Z = function(a, b, c) {
  return 0 <= b && b < this.g ? y.a(this, b) : c;
};
h.G = function() {
  if (this.root.n) {
    return this.g;
  }
  throw Error("count after persistent!");
};
h.fb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.g) {
      return Dc(this) <= b ? d.K[b & 31] = c : (a = function f(a, k) {
        var l = d.root.n === k.n ? k : new Bc(d.root.n, x(k.c));
        if (0 === a) {
          l.c[b & 31] = c;
        } else {
          var m = b >>> a & 31, p = f(a - 5, l.c[m]);
          l.c[m] = p;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.g) {
      return Za(this, c);
    }
    if (u) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.g)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.ya = function(a, b, c) {
  return bb(this, b, c);
};
h.za = function(a, b) {
  if (this.root.n) {
    if (32 > this.g - Dc(this)) {
      this.K[this.g & 31] = b;
    } else {
      var c = new Bc(this.root.n, this.K), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.K = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ec(this.root.n, this.shift, c);
        this.root = new Bc(this.root.n, d);
        this.shift = e;
      } else {
        this.root = Xc(this, this.shift, this.root, c);
      }
    }
    this.g += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Aa = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.g - Dc(this), b = Array(a);
    Ib(this.K, 0, b, 0, a);
    return new Y(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Yc() {
  this.o = 0;
  this.f = 2097152;
}
Yc.prototype.t = function() {
  return!1;
};
var Zc = new Yc;
function $c(a, b) {
  return Kb(Eb(b) ? S(a) === S(b) ? pc(qc, rc.a(function(a) {
    return G.a(U.b(b, M(a), Zc), M(P(a)));
  }, a)) : null : null);
}
function ad(a, b) {
  var c = a.c;
  if (b instanceof W) {
    a: {
      for (var d = c.length, e = b.ka, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof W && e === g.ka) {
          c = f;
          break a;
        }
        if (u) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (u) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof jb) {
        a: {
          d = c.length;
          e = b.na;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof jb && e === g.na) {
              c = f;
              break a;
            }
            if (u) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (u) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (u) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (G.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (u) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function bd(a, b, c) {
  this.c = a;
  this.i = b;
  this.fa = c;
  this.o = 0;
  this.f = 32374990;
}
h = bd.prototype;
h.v = function() {
  return qb(this);
};
h.T = function() {
  return this.i < this.c.length - 2 ? new bd(this.c, this.i + 2, this.fa) : null;
};
h.D = function(a, b) {
  return R(b, this);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  return this;
};
h.G = function() {
  return(this.c.length - this.i) / 2;
};
h.P = function() {
  return new Y(null, 2, 5, Z, [this.c[this.i], this.c[this.i + 1]], null);
};
h.S = function() {
  return this.i < this.c.length - 2 ? new bd(this.c, this.i + 2, this.fa) : O;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new bd(this.c, this.i, b);
};
h.I = function() {
  return this.fa;
};
function r(a, b, c, d) {
  this.k = a;
  this.g = b;
  this.c = c;
  this.j = d;
  this.o = 8196;
  this.f = 16123663;
}
h = r.prototype;
h.pa = function() {
  return new cd({}, this.c.length, x(this.c));
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.A = function(a, b) {
  return C.b(this, b, null);
};
h.B = function(a, b, c) {
  a = ad(this, b);
  return-1 === a ? c : this.c[a + 1];
};
h.wa = function(a, b, c) {
  a = ad(this, b);
  if (-1 === a) {
    if (this.g < dd) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new r(this.k, this.g + 1, e, null);
    }
    return Oa(Da(yc(ed, this), b, c), this.k);
  }
  return c === this.c[a + 1] ? this : u ? (b = x(this.c), b[a + 1] = c, new r(this.k, this.g, b, null)) : null;
};
h.Ha = function(a, b) {
  return-1 !== ad(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.D = function(a, b) {
  return Fb(b) ? Da(this, y.a(b, 0), y.a(b, 1)) : Mb.b(wa, this, b);
};
h.toString = function() {
  return fb(this);
};
h.C = function() {
  return 0 <= this.c.length - 2 ? new bd(this.c, 0, null) : null;
};
h.G = function() {
  return this.g;
};
h.t = function(a, b) {
  return $c(this, b);
};
h.F = function(a, b) {
  return new r(b, this.g, this.c, this.j);
};
h.I = function() {
  return this.k;
};
var fd = new r(null, 0, [], null), dd = 8;
function gd(a) {
  for (var b = a.length, c = 0, d = Ya(fd);;) {
    if (c < b) {
      var e = c + 2, d = ab(d, a[c], a[c + 1]), c = e
    } else {
      return $a(d);
    }
  }
}
function cd(a, b, c) {
  this.ra = a;
  this.ga = b;
  this.c = c;
  this.o = 56;
  this.f = 258;
}
h = cd.prototype;
h.ya = function(a, b, c) {
  if (s(this.ra)) {
    a = ad(this, b);
    if (-1 === a) {
      return this.ga + 2 <= 2 * dd ? (this.ga += 2, this.c.push(b), this.c.push(c), this) : nc.b(hd.a ? hd.a(this.ga, this.c) : hd.call(null, this.ga, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.za = function(a, b) {
  if (s(this.ra)) {
    if (b ? b.f & 2048 || b.nb || (b.f ? 0 : t(Fa, b)) : t(Fa, b)) {
      return ab(this, Tb.d ? Tb.d(b) : Tb.call(null, b), Ub.d ? Ub.d(b) : Ub.call(null, b));
    }
    for (var c = K(b), d = this;;) {
      var e = M(c);
      if (s(e)) {
        c = P(c), d = ab(d, Tb.d ? Tb.d(e) : Tb.call(null, e), Ub.d ? Ub.d(e) : Ub.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Aa = function() {
  if (s(this.ra)) {
    return this.ra = !1, new r(null, Ob((this.ga - this.ga % 2) / 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.A = function(a, b) {
  return C.b(this, b, null);
};
h.B = function(a, b, c) {
  if (s(this.ra)) {
    return a = ad(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.G = function() {
  if (s(this.ra)) {
    return Ob((this.ga - this.ga % 2) / 2);
  }
  throw Error("count after persistent!");
};
function hd(a, b) {
  for (var c = Ya(ed), d = 0;;) {
    if (d < a) {
      c = nc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function id() {
  this.X = !1;
}
function jd(a, b) {
  return a === b ? !0 : a === b || a instanceof W && b instanceof W && a.ka === b.ka ? !0 : u ? G.a(a, b) : null;
}
var kd = function() {
  function a(a, b, c, g, k) {
    a = x(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.H = a;
  return c;
}(), ld = function() {
  function a(a, b, c, g, k, l) {
    a = a.sa(b);
    a.c[c] = g;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.sa(b);
    a.c[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = b;
  c.Y = a;
  return c;
}();
function md(a, b, c) {
  this.n = a;
  this.u = b;
  this.c = c;
}
h = md.prototype;
h.ba = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Pb(this.u & g - 1);
  if (0 === (this.u & g)) {
    var l = Pb(this.u);
    if (2 * l < this.c.length) {
      a = this.sa(a);
      b = a.c;
      f.X = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.u |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = nd.ba(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.u >>> d & 1) && (k[d] = null != this.c[e] ? nd.ba(a, b + 5, I(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new od(a, l + 1, k);
    }
    return u ? (b = Array(2 * (l + 4)), Ib(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Ib(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.X = !0, a = this.sa(a), a.c = b, a.u |= g, a) : null;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  return null == l ? (l = g.ba(a, b + 5, c, d, e, f), l === g ? this : ld.m(this, a, 2 * k + 1, l)) : jd(d, l) ? e === g ? this : ld.m(this, a, 2 * k + 1, e) : u ? (f.X = !0, ld.Y(this, a, 2 * k, null, 2 * k + 1, pd.qa ? pd.qa(a, b + 5, l, g, c, d, e) : pd.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.Ca = function() {
  return qd.d ? qd.d(this.c) : qd.call(null, this.c);
};
h.sa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Pb(this.u), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ib(this.c, 0, c, 0, 2 * b);
  return new md(a, this.u, c);
};
h.aa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Pb(this.u & f - 1);
  if (0 === (this.u & f)) {
    var k = Pb(this.u);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = nd.aa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.u >>> c & 1) && (g[c] = null != this.c[d] ? nd.aa(a + 5, I(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new od(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Ib(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Ib(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.X = !0;
    return new md(null, this.u | f, a);
  }
  k = this.c[2 * g];
  f = this.c[2 * g + 1];
  return null == k ? (k = f.aa(a + 5, b, c, d, e), k === f ? this : new md(null, this.u, kd.b(this.c, 2 * g + 1, k))) : jd(c, k) ? d === f ? this : new md(null, this.u, kd.b(this.c, 2 * g + 1, d)) : u ? (e.X = !0, new md(null, this.u, kd.H(this.c, 2 * g, null, 2 * g + 1, pd.Y ? pd.Y(a + 5, k, f, b, c, d) : pd.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.la = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.u & e)) {
    return d;
  }
  var f = Pb(this.u & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.la(a + 5, b, c, d) : jd(c, e) ? f : u ? d : null;
};
var nd = new md(null, 0, []);
function od(a, b, c) {
  this.n = a;
  this.g = b;
  this.c = c;
}
h = od.prototype;
h.ba = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = ld.m(this, a, g, nd.ba(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.ba(a, b + 5, c, d, e, f);
  return b === k ? this : ld.m(this, a, g, b);
};
h.Ca = function() {
  return rd.d ? rd.d(this.c) : rd.call(null, this.c);
};
h.sa = function(a) {
  return a === this.n ? this : new od(a, this.g, x(this.c));
};
h.aa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new od(null, this.g + 1, kd.b(this.c, f, nd.aa(a + 5, b, c, d, e)));
  }
  a = g.aa(a + 5, b, c, d, e);
  return a === g ? this : new od(null, this.g, kd.b(this.c, f, a));
};
h.la = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.la(a + 5, b, c, d) : d;
};
function sd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (jd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function td(a, b, c, d) {
  this.n = a;
  this.ja = b;
  this.g = c;
  this.c = d;
}
h = td.prototype;
h.ba = function(a, b, c, d, e, f) {
  if (c === this.ja) {
    b = sd(this.c, this.g, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.g) {
        return a = ld.Y(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.X = !0, a.g += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Ib(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.X = !0;
      f = this.g + 1;
      a === this.n ? (this.c = b, this.g = f, a = this) : a = new td(this.n, this.ja, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : ld.m(this, a, b + 1, e);
  }
  return(new md(a, 1 << (this.ja >>> b & 31), [null, this, null, null])).ba(a, b, c, d, e, f);
};
h.Ca = function() {
  return qd.d ? qd.d(this.c) : qd.call(null, this.c);
};
h.sa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  Ib(this.c, 0, b, 0, 2 * this.g);
  return new td(a, this.ja, this.g, b);
};
h.aa = function(a, b, c, d, e) {
  return b === this.ja ? (a = sd(this.c, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), Ib(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.X = !0, new td(null, this.ja, this.g + 1, b)) : G.a(this.c[a], d) ? this : new td(null, this.ja, this.g, kd.b(this.c, a + 1, d))) : (new md(null, 1 << (this.ja >>> a & 31), [null, this])).aa(a, b, c, d, e);
};
h.la = function(a, b, c, d) {
  a = sd(this.c, this.g, c);
  return 0 > a ? d : jd(c, this.c[a]) ? this.c[a + 1] : u ? d : null;
};
var pd = function() {
  function a(a, b, c, g, k, l, m) {
    var p = I(c);
    if (p === k) {
      return new td(null, p, 2, [c, g, l, m]);
    }
    var q = new id;
    return nd.ba(a, b, p, c, g, q).ba(a, b, k, l, m, q);
  }
  function b(a, b, c, g, k, l) {
    var m = I(b);
    if (m === g) {
      return new td(null, m, 2, [b, c, k, l]);
    }
    var p = new id;
    return nd.aa(a, m, b, c, p).aa(a, g, k, l, p);
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Y = b;
  c.qa = a;
  return c;
}();
function ud(a, b, c, d, e) {
  this.k = a;
  this.ca = b;
  this.i = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860;
}
h = ud.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.D = function(a, b) {
  return R(b, this);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  return this;
};
h.P = function() {
  return null == this.p ? new Y(null, 2, 5, Z, [this.ca[this.i], this.ca[this.i + 1]], null) : M(this.p);
};
h.S = function() {
  return null == this.p ? qd.b ? qd.b(this.ca, this.i + 2, null) : qd.call(null, this.ca, this.i + 2, null) : qd.b ? qd.b(this.ca, this.i, P(this.p)) : qd.call(null, this.ca, this.i, P(this.p));
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new ud(b, this.ca, this.i, this.p, this.j);
};
h.I = function() {
  return this.k;
};
var qd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new ud(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (s(g) && (g = g.Ca(), s(g))) {
            return new ud(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new ud(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.b = a;
  return c;
}();
function vd(a, b, c, d, e) {
  this.k = a;
  this.ca = b;
  this.i = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860;
}
h = vd.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = qb(this);
};
h.D = function(a, b) {
  return R(b, this);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  return this;
};
h.P = function() {
  return M(this.p);
};
h.S = function() {
  return rd.m ? rd.m(null, this.ca, this.i, P(this.p)) : rd.call(null, null, this.ca, this.i, P(this.p));
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new vd(b, this.ca, this.i, this.p, this.j);
};
h.I = function() {
  return this.k;
};
var rd = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (s(k) && (k = k.Ca(), s(k))) {
            return new vd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new vd(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.m(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.m = a;
  return c;
}();
function wd(a, b, c, d, e, f) {
  this.k = a;
  this.g = b;
  this.root = c;
  this.Q = d;
  this.V = e;
  this.j = f;
  this.o = 8196;
  this.f = 16123663;
}
h = wd.prototype;
h.pa = function() {
  return new xd({}, this.root, this.g, this.Q, this.V);
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.A = function(a, b) {
  return C.b(this, b, null);
};
h.B = function(a, b, c) {
  return null == b ? this.Q ? this.V : c : null == this.root ? c : u ? this.root.la(0, I(b), b, c) : null;
};
h.wa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.V ? this : new wd(this.k, this.Q ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new id;
  b = (null == this.root ? nd : this.root).aa(0, I(b), b, c, a);
  return b === this.root ? this : new wd(this.k, a.X ? this.g + 1 : this.g, b, this.Q, this.V, null);
};
h.Ha = function(a, b) {
  return null == b ? this.Q : null == this.root ? !1 : u ? this.root.la(0, I(b), b, Jb) !== Jb : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.D = function(a, b) {
  return Fb(b) ? Da(this, y.a(b, 0), y.a(b, 1)) : Mb.b(wa, this, b);
};
h.toString = function() {
  return fb(this);
};
h.C = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Ca() : null;
    return this.Q ? R(new Y(null, 2, 5, Z, [null, this.V], null), a) : a;
  }
  return null;
};
h.G = function() {
  return this.g;
};
h.t = function(a, b) {
  return $c(this, b);
};
h.F = function(a, b) {
  return new wd(b, this.g, this.root, this.Q, this.V, this.j);
};
h.I = function() {
  return this.k;
};
var ed = new wd(null, 0, null, !1, null, 0);
function vb(a, b) {
  for (var c = a.length, d = 0, e = Ya(ed);;) {
    if (d < c) {
      var f = d + 1, e = e.ya(null, a[d], b[d]), d = f
    } else {
      return $a(e);
    }
  }
}
function xd(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.V = e;
  this.o = 56;
  this.f = 258;
}
h = xd.prototype;
h.ya = function(a, b, c) {
  return yd(this, b, c);
};
h.za = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.f & 2048 || b.nb || (b.f ? 0 : t(Fa, b)) : t(Fa, b)) {
        c = yd(this, Tb.d ? Tb.d(b) : Tb.call(null, b), Ub.d ? Ub.d(b) : Ub.call(null, b));
        break a;
      }
      c = K(b);
      for (var d = this;;) {
        var e = M(c);
        if (s(e)) {
          c = P(c), d = yd(d, Tb.d ? Tb.d(e) : Tb.call(null, e), Ub.d ? Ub.d(e) : Ub.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
h.Aa = function() {
  var a;
  if (this.n) {
    this.n = null, a = new wd(null, this.count, this.root, this.Q, this.V, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.A = function(a, b) {
  return null == b ? this.Q ? this.V : null : null == this.root ? null : this.root.la(0, I(b), b);
};
h.B = function(a, b, c) {
  return null == b ? this.Q ? this.V : c : null == this.root ? c : this.root.la(0, I(b), b, c);
};
h.G = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function yd(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.V !== c && (a.V = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new id;
      b = (null == a.root ? nd : a.root).ba(a.n, 0, I(b), b, c, d);
      b !== a.root && (a.root = b);
      d.X && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function zd(a, b) {
  this.ma = a;
  this.fa = b;
  this.o = 0;
  this.f = 32374988;
}
h = zd.prototype;
h.v = function() {
  return qb(this);
};
h.T = function() {
  var a = this.ma, a = (a ? a.f & 128 || a.eb || (a.f ? 0 : t(za, a)) : t(za, a)) ? this.ma.T(null) : P(this.ma);
  return null == a ? null : new zd(a, this.fa);
};
h.D = function(a, b) {
  return R(b, this);
};
h.toString = function() {
  return fb(this);
};
h.N = function(a, b) {
  return Nb.a(b, this);
};
h.O = function(a, b, c) {
  return Nb.b(b, c, this);
};
h.C = function() {
  return this;
};
h.P = function() {
  return this.ma.P(null).Ya();
};
h.S = function() {
  var a = this.ma, a = (a ? a.f & 128 || a.eb || (a.f ? 0 : t(za, a)) : t(za, a)) ? this.ma.T(null) : P(this.ma);
  return null != a ? new zd(a, this.fa) : O;
};
h.t = function(a, b) {
  return rb(this, b);
};
h.F = function(a, b) {
  return new zd(this.ma, b);
};
h.I = function() {
  return this.fa;
};
function Tb(a) {
  return Ga(a);
}
function Ub(a) {
  return Ha(a);
}
function Ad(a, b, c) {
  this.k = a;
  this.ua = b;
  this.j = c;
  this.o = 8196;
  this.f = 15077647;
}
h = Ad.prototype;
h.pa = function() {
  return new Bd(Ya(this.ua));
};
h.v = function() {
  var a = this.j;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = K(this);;) {
      if (b) {
        var c = M(b), a = (a + I(c)) % 4503599627370496, b = P(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.j = a;
};
h.A = function(a, b) {
  return C.b(this, b, null);
};
h.B = function(a, b, c) {
  return Ba(this.ua, b) ? b : c;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.D = function(a, b) {
  return new Ad(this.k, wb.b(this.ua, b, null), null);
};
h.toString = function() {
  return fb(this);
};
h.C = function() {
  var a = K(this.ua);
  return a ? new zd(a, null) : null;
};
h.G = function() {
  return va(this.ua);
};
h.t = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.Bb ? !0 : b.f ? !1 : t(Ia, b) : t(Ia, b)) && S(c) === S(b) && pc(function(a) {
    return U.b(c, a, Jb) === Jb ? !1 : !0;
  }, b);
};
h.F = function(a, b) {
  return new Ad(b, this.ua, this.j);
};
h.I = function() {
  return this.k;
};
function Bd(a) {
  this.ia = a;
  this.f = 259;
  this.o = 136;
}
h = Bd.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.b(this.ia, c, Jb) === Jb ? null : c;
      case 3:
        return C.b(this.ia, c, Jb) === Jb ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.d = function(a) {
  return C.b(this.ia, a, Jb) === Jb ? null : a;
};
h.a = function(a, b) {
  return C.b(this.ia, a, Jb) === Jb ? b : a;
};
h.A = function(a, b) {
  return C.b(this, b, null);
};
h.B = function(a, b, c) {
  return C.b(this.ia, b, Jb) === Jb ? c : b;
};
h.G = function() {
  return S(this.ia);
};
h.za = function(a, b) {
  this.ia = nc.b(this.ia, b, null);
  return this;
};
h.Aa = function() {
  return new Ad(null, $a(this.ia), null);
};
function Zb(a) {
  if (a && (a.o & 4096 || a.pb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function Cd(a, b, c, d, e, f, g) {
  var k = ja;
  try {
    ja = null == ja ? null : ja - 1;
    if (null != ja && 0 > ja) {
      return D(a, "#");
    }
    D(a, c);
    K(g) && (b.b ? b.b(M(g), a, f) : b.call(null, M(g), a, f));
    for (var l = P(g), m = pa.d(f);l && (null == m || 0 !== m);) {
      D(a, d);
      b.b ? b.b(M(l), a, f) : b.call(null, M(l), a, f);
      var p = P(l);
      c = m - 1;
      l = p;
      m = c;
    }
    s(pa.d(f)) && (D(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
  } finally {
    ja = k;
  }
}
var Dd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = Q(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = K(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.r(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = K(e)) {
          f = e, V(f) ? (e = E(f), g = F(f), f = e, l = S(e), e = g, g = l) : (l = M(f), D(a, l), e = P(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.l = 1;
  a.h = function(a) {
    var d = M(a);
    a = N(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Ed = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Fd(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ed[a];
  })), w('"')].join("");
}
var $ = function Gd(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (u) {
    s(function() {
      var c = U.a(d, na);
      return s(c) ? (c = b ? b.f & 131072 || b.ob ? !0 : b.f ? !1 : t(La, b) : t(La, b)) ? Bb(b) : c : c;
    }()) && (D(c, "^"), Gd(Bb(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.ib) {
      return b.rb(c);
    }
    if (b && (b.f & 2147483648 || b.J)) {
      return b.s(null, c, d);
    }
    if (ra(b) === Boolean || "number" === typeof b) {
      return D(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), Hd.m ? Hd.m(rc.a(function(c) {
        return new Y(null, 2, 5, Z, [$b.d(c), b[c]], null);
      }, Gb(b)), Gd, c, d) : Hd.call(null, rc.a(function(c) {
        return new Y(null, 2, 5, Z, [$b.d(c), b[c]], null);
      }, Gb(b)), Gd, c, d);
    }
    if (b instanceof Array) {
      return Cd(c, Gd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return s(ma.d(d)) ? D(c, Fd(b)) : D(c, b);
    }
    if (xb(b)) {
      return Dd.e(c, Q(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (S(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Dd.e(c, Q(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Dd.e(c, Q(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.J || (b.f ? 0 : t(Wa, b)) : t(Wa, b)) ? Xa(b, c, d) : u ? Dd.e(c, Q(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
}, Id = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    (b = null == a) || (b = K(a), b = s(b) ? !1 : !0);
    if (b) {
      b = "";
    } else {
      b = w;
      var e = ka(), f = new ga;
      a: {
        var g = new eb(f);
        $(M(a), g, e);
        a = K(P(a));
        for (var k = null, l = 0, m = 0;;) {
          if (m < l) {
            var p = k.r(null, m);
            D(g, " ");
            $(p, g, e);
            m += 1;
          } else {
            if (a = K(a)) {
              k = a, V(k) ? (a = E(k), l = F(k), k = a, p = S(a), a = l, l = p) : (p = M(k), D(g, " "), $(p, g, e), a = P(k), k = null, l = 0), m = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.l = 0;
  a.h = function(a) {
    a = K(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Hd(a, b, c, d) {
  return Cd(c, function(a, c, d) {
    b.b ? b.b(Ga(a), c, d) : b.call(null, Ga(a), c, d);
    D(c, " ");
    return b.b ? b.b(Ha(a), c, d) : b.call(null, Ha(a), c, d);
  }, "{", ", ", "}", d, K(a));
}
zd.prototype.J = !0;
zd.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
lb.prototype.J = !0;
lb.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
Uc.prototype.J = !0;
Uc.prototype.s = function(a, b, c) {
  return Cd(b, $, "[", " ", "]", c, this);
};
ec.prototype.J = !0;
ec.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
r.prototype.J = !0;
r.prototype.s = function(a, b, c) {
  return Hd(this, $, b, c);
};
X.prototype.J = !0;
X.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
ud.prototype.J = !0;
ud.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
Sc.prototype.J = !0;
Sc.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
wd.prototype.J = !0;
wd.prototype.s = function(a, b, c) {
  return Hd(this, $, b, c);
};
Ad.prototype.J = !0;
Ad.prototype.s = function(a, b, c) {
  return Cd(b, $, "#{", " ", "}", c, this);
};
Y.prototype.J = !0;
Y.prototype.s = function(a, b, c) {
  return Cd(b, $, "[", " ", "]", c, this);
};
Vb.prototype.J = !0;
Vb.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
bd.prototype.J = !0;
bd.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
Wb.prototype.J = !0;
Wb.prototype.s = function(a, b) {
  return D(b, "()");
};
Yb.prototype.J = !0;
Yb.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
vd.prototype.J = !0;
vd.prototype.s = function(a, b, c) {
  return Cd(b, $, "(", " ", ")", c, this);
};
Y.prototype.Ea = !0;
Y.prototype.Fa = function(a, b) {
  return Lb.a(this, b);
};
Uc.prototype.Ea = !0;
Uc.prototype.Fa = function(a, b) {
  return Lb.a(this, b);
};
W.prototype.Ea = !0;
W.prototype.Fa = function(a, b) {
  return gb(this, b);
};
jb.prototype.Ea = !0;
jb.prototype.Fa = function(a, b) {
  return gb(this, b);
};
var Jd = new W(null, "#who", "#who"), na = new W(null, "meta", "meta"), Kd = new W(null, ".back", ".back"), Ld = new W(null, "ul", "ul"), oa = new W(null, "dup", "dup"), u = new W(null, "else", "else"), Md = new W(null, "#services", "#services"), Nd = new W(null, "h4.title", "h4.title"), Od = new W(null, "#principles", "#principles"), Pd = new W(null, ".box.width2", ".box.width2"), Qd = new W(null, "mouseenter", "mouseenter"), ib = new W(null, "default", "default"), Rd = new W(null, ".front", ".front"), 
Sd = new W(null, "li", "li"), Td = new W(null, "mouseout", "mouseout"), Ud = new W(null, "#menu", "#menu"), Vd = new W(null, ".expandable-wrapper", ".expandable-wrapper"), Wd = new W(null, "src", "src"), la = new W(null, "flush-on-newline", "flush-on-newline"), Xd = new W(null, ".boxs", ".boxs"), Yd = new W(null, "style", "style"), Zd = new W(null, "div", "div"), ma = new W(null, "readably", "readably"), $d = new W(null, "h4", "h4"), ae = new W(null, "mouseover", "mouseover"), be = new W(null, "#about", 
"#about"), ce = new W(null, "#logo", "#logo"), pa = new W(null, "print-length", "print-length"), de = new W(null, "class", "class"), ee = new W(null, "mouseleave", "mouseleave"), fe = new W(null, "#nav-menu", "#nav-menu"), ge = new W(null, "attrs", "attrs"), he = new W(null, ".clear", ".clear"), ie = new W(null, "h1", "h1"), je = new W(null, ".content", ".content"), ke = new W(null, "p", "p"), le = new W(null, "span.rainbow-word", "span.rainbow-word"), me = new W(null, "href", "href"), ne = new W(null, 
"img", "img"), oe = new W(null, "classes", "classes"), pe = new W(null, "a", "a"), qe = new W(null, "span", "span");
"undefined" !== typeof MessageChannel && new MessageChannel;
function re(a, b, c) {
  this.key = a;
  this.X = b;
  this.forward = c;
  this.o = 0;
  this.f = 2155872256;
}
re.prototype.s = function(a, b, c) {
  return Cd(b, $, "[", " ", "]", c, this);
};
re.prototype.C = function() {
  return wa(wa(O, this.X), this.key);
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new re(a, b, c);
  }
  function b(a) {
    return c.b(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.b = a;
  return c;
})().d(0);
function se(a) {
  return a instanceof W ? Rb.a("" + w(a), 1) : a;
}
;function te() {
  var a = ue.src, b = /svg/;
  if ("string" === typeof b) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "png");
  }
  if (s(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), "png");
  }
  if (u) {
    throw[w("Invalid match arg: "), w(b)].join("");
  }
  return null;
}
var ve = function() {
  function a(a, b) {
    return zb.a(w, uc(1, wc.a(vc.d(a), b)));
  }
  function b(a) {
    return zb.a(w, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function we(a, b) {
  for (var c = 0;;) {
    if (c = a.indexOf(b, c), 0 <= c) {
      var d;
      if (d = 0 === c || " " === a.charAt(c - 1)) {
        d = a.length;
        var e = c + b.length;
        d = e <= d ? e === d || " " === a.charAt(e) : null;
      }
      if (d) {
        return c;
      }
      c += b.length;
    } else {
      return null;
    }
  }
}
var ye = function() {
  function a(a, b) {
    var c = xe(a), g, k = se(b);
    g = ea(k);
    if (K(g)) {
      if (k = c.classList, s(k)) {
        g = K(g.split(/\s+/));
        for (var l = null, m = 0, p = 0;;) {
          if (p < m) {
            var q = l.r(null, p);
            k.add(q);
            p += 1;
          } else {
            if (g = K(g)) {
              l = g, V(l) ? (g = E(l), p = F(l), l = g, m = S(g), g = p) : (g = M(l), k.add(g), g = P(l), l = null, m = 0), p = 0;
            } else {
              break;
            }
          }
        }
      } else {
        for (k = K(g.split(/\s+/)), g = null, m = l = 0;;) {
          if (m < l) {
            p = g.r(null, m), q = c.className, s(we(q, p)) || (c.className = "" === q ? p : [w(q), w(" "), w(p)].join("")), m += 1;
          } else {
            if (k = K(k)) {
              V(k) ? (l = E(k), k = F(k), g = l, l = S(l)) : (g = M(k), l = c.className, s(we(l, g)) || (c.className = "" === l ? g : [w(l), w(" "), w(g)].join("")), k = P(k), g = null, l = 0), m = 0;
            } else {
              break;
            }
          }
        }
      }
    }
    return c;
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = xe(a);
      d = K(tb.a(e, d));
      e = null;
      for (var l = 0, m = 0;;) {
        if (m < l) {
          var p = e.r(null, m);
          b.a(a, p);
          m += 1;
        } else {
          if (d = K(d)) {
            e = d, V(e) ? (d = E(e), m = F(e), e = d, l = S(d), d = m) : (d = M(e), b.a(a, d), d = P(e), e = null, l = 0), m = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    a.l = 2;
    a.h = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function ze(a) {
  return "string" === typeof a ? a : ve.a(" ", rc.a(function(a) {
    var c = T.b(a, 0, null);
    a = T.b(a, 1, null);
    return[w(se(c)), w(":"), w(se(a)), w(";")].join("");
  }, a));
}
var Ae = function() {
  function a(a, b, c) {
    if (s(c)) {
      if (xb(c)) {
        return a = xe(a), a[se(b)] = c, a;
      }
      a = xe(a);
      a.setAttributeNS(null, se(b), G.a(b, Yd) ? ze(c) : c);
      return a;
    }
    return null;
  }
  function b(a, b) {
    return c.b(xe(a), b, "true");
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var p = null;
      3 < arguments.length && (p = Q(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, p);
    }
    function b(a, d, e, f) {
      var p = S(f);
      if ("number" !== typeof p || isNaN(p) || Infinity === p || parseFloat(p) !== parseInt(p, 10)) {
        throw Error([w("Argument must be an integer: "), w(p)].join(""));
      }
      if (0 !== (p & 1)) {
        throw Error([w("Assert failed: "), w(Id.e(Q([Xb(new jb(null, "even?", "even?", -1543640034, null), Xb(new jb(null, "count", "count", -1545680184, null), new jb(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      a = xe(a);
      d = K(R(new Y(null, 2, 5, Z, [d, e], null), zc.a(2, f)));
      e = null;
      for (p = f = 0;;) {
        if (p < f) {
          var q = e.r(null, p), A = T.b(q, 0, null), q = T.b(q, 1, null);
          c.b(a, A, q);
          p += 1;
        } else {
          if (d = K(d)) {
            V(d) ? (f = E(d), d = F(d), e = f, f = S(f)) : (f = M(d), e = T.b(f, 0, null), f = T.b(f, 1, null), c.b(a, e, f), d = P(d), e = null, f = 0), p = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    a.l = 3;
    a.h = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = N(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.e(c, f, g, Q(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 3;
  c.h = d.h;
  c.a = b;
  c.b = a;
  c.e = d.e;
  return c;
}();
var Be = new Ad(null, new r(null, 11, ["polyline", null, "rect", null, "svg", null, "path", null, "g", null, "text", null, "circle", null, "textPath", null, "line", null, "clipPath", null, "polygon", null], null), null), Ce = {};
function De(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = De[n(null == a ? null : a)];
  if (!b && (b = De._, !b)) {
    throw v("PElement.-elem", a);
  }
  return b.call(null, a);
}
function Ee(a, b) {
  var c = a.indexOf("#", b), d = a.indexOf(".", b), e = Math.min(c, d);
  return 0 > e ? Math.max(c, d) : e;
}
function Fe(a) {
  var b = Rb.a("" + w(a), 1), c = Ee(b, 0);
  a = 0 < c ? b.substring(0, c) : 0 === c ? "div" : u ? b : null;
  a = s(Be.d ? Be.d(a) : Be.call(null, a)) ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a);
  if (0 <= c) {
    for (b = b.substring(c);;) {
      var c = Ee(b, 1), d = 0 <= c ? b.substring(0, c) : b, e = d.charAt(0);
      if (G.a("#", e)) {
        a.setAttribute("id", d.substring(1));
      } else {
        if (G.a(".", e)) {
          ye.a(a, d.substring(1));
        } else {
          if (u) {
            throw Error([w("No matching clause: "), w(d.charAt(0))].join(""));
          }
        }
      }
      if (0 <= c) {
        b = b.substring(c);
      } else {
        break;
      }
    }
  }
  return a;
}
var Ge = function() {
  function a(a, b) {
    if (b ? s(s(null) ? null : b.U) || (b.$a ? 0 : t(Ce, b)) : t(Ce, b)) {
      return a.appendChild(De(b)), a;
    }
    if (null == b ? 0 : b ? b.f & 64 || b.xa || (b.f ? 0 : t(ya, b)) : t(ya, b)) {
      for (var f = K(b), g = null, k = 0, l = 0;;) {
        if (l < k) {
          var m = g.r(null, l);
          c.a(a, m);
          l += 1;
        } else {
          if (f = K(f)) {
            g = f, V(g) ? (f = E(g), l = F(g), g = f, k = S(f), f = l) : (f = M(g), c.a(a, f), f = P(g), g = null, k = 0), l = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    if (null == b) {
      f = a;
    } else {
      if (u) {
        throw[w("Don't know how to make node from: "), w(Id.e(Q([b], 0)))].join("");
      }
      f = null;
    }
    return f;
  }
  function b(a) {
    return c.a(document.createDocumentFragment(), a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function xe(a) {
  return(a ? s(s(null) ? null : a.U) || (a.$a ? 0 : t(Ce, a)) : t(Ce, a)) ? De(a) : Ge.d(a);
}
Ce.string = !0;
De.string = function(a) {
  return a instanceof W ? Fe(a) : document.createTextNode("" + w(a));
};
Ce.number = !0;
De.number = function(a) {
  return document.createTextNode("" + w(a));
};
Y.prototype.U = !0;
Y.prototype.$ = function() {
  for (var a = T.b(this, 0, null), b = T.b(this, 1, null), c = Qb(this, 2), a = Fe(a), d = Eb(b) && !(b ? s(s(null) ? null : b.U) || (b.$a ? 0 : t(Ce, b)) : t(Ce, b)) ? b : null, b = s(d) ? c : R(b, c), c = K(d), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.r(null, f), k = T.b(g, 0, null), g = T.b(g, 1, null), l = k;
      if (G.a(oe, l)) {
        for (var k = K(g), g = null, m = l = 0;;) {
          if (m < l) {
            var p = g.r(null, m);
            ye.a(a, p);
            m += 1;
          } else {
            if (k = K(k)) {
              g = k, V(g) ? (k = E(g), m = F(g), g = k, l = S(k), k = m) : (k = M(g), ye.a(a, k), k = P(g), g = null, l = 0), m = 0;
            } else {
              break;
            }
          }
        }
      } else {
        G.a(de, l) ? ye.a(a, g) : u && Ae.b(a, k, g);
      }
      f += 1;
    } else {
      if (c = K(c)) {
        if (V(c)) {
          e = E(c), c = F(c), d = e, e = S(e);
        } else {
          e = M(c);
          d = T.b(e, 0, null);
          e = T.b(e, 1, null);
          f = d;
          if (G.a(oe, f)) {
            for (d = K(e), e = null, k = f = 0;;) {
              if (k < f) {
                g = e.r(null, k), ye.a(a, g), k += 1;
              } else {
                if (d = K(d)) {
                  e = d, V(e) ? (d = E(e), k = F(e), e = d, f = S(d), d = k) : (d = M(e), ye.a(a, d), d = P(e), e = null, f = 0), k = 0;
                } else {
                  break;
                }
              }
            }
          } else {
            G.a(de, f) ? ye.a(a, e) : u && Ae.b(a, d, e);
          }
          c = P(c);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
  a.appendChild(xe(b));
  return a;
};
Text.prototype.U = !0;
Text.prototype.$ = function() {
  return this;
};
Comment.prototype.U = !0;
Comment.prototype.$ = function() {
  return this;
};
Element.prototype.U = !0;
Element.prototype.$ = function() {
  return this;
};
"undefined" !== typeof HTMLElement && (HTMLElement.prototype.U = !0, HTMLElement.prototype.$ = function() {
  return this;
});
"undefined" !== typeof DocumentFragment && (DocumentFragment.prototype.U = !0, DocumentFragment.prototype.$ = function() {
  return this;
});
"undefined" !== typeof Document && (Document.prototype.U = !0, Document.prototype.$ = function() {
  return this;
});
"undefined" !== typeof HTMLDocument && (HTMLDocument.prototype.U = !0, HTMLDocument.prototype.$ = function() {
  return this;
});
"undefined" !== typeof SVGElement && (SVGElement.prototype.U = !0, SVGElement.prototype.$ = function() {
  return this;
});
"undefined" !== typeof Window && (Window.prototype.U = !0, Window.prototype.$ = function() {
  return this;
});
var He = function() {
  function a(a, b) {
    var c = xe(a);
    c.appendChild(xe(b));
    return c;
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = xe(a);
      d = K(R(d, e));
      e = null;
      for (var l = 0, m = 0;;) {
        if (m < l) {
          var p = e.r(null, m);
          b.a(a, p);
          m += 1;
        } else {
          if (d = K(d)) {
            e = d, V(e) ? (d = E(e), m = F(e), e = d, l = S(d), d = m) : (d = M(e), b.a(a, d), d = P(e), e = null, l = 0), m = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    a.l = 2;
    a.h = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
yc(fd, rc.a(function(a) {
  var b = T.b(a, 0, null);
  a = T.b(a, 1, null);
  return new Y(null, 2, 5, Z, [b, new gd([a, function(a) {
    return function(b) {
      var e = b.relatedTarget, f;
      f = b.Eb;
      f = s(f) ? f : b.currentTarget;
      s(e) && (e = xe(e), f = xe(f), e = s(f.contains) ? f.contains(e) : s(f.compareDocumentPosition) ? 0 != (f.compareDocumentPosition(e) & 16) : null);
      return s(e) ? null : a.d ? a.d(b) : a.call(null, b);
    };
  }])], null);
}, new r(null, 2, [Qd, ae, ee, Td], null)));
var Ie = new Y(null, 6, 5, Z, "Mobile/Web content creation. From idea to full product.;Quick prototype or demo;User Interface Design;Front-end components or modules;Create a quality interactive widget;Jumpstarting a big project".split(";"), null);
function Je(a, b, c, d, e) {
  return new Y(null, 2, 5, Z, [Vd, new Y(null, 4, 5, Z, [Zd, Ac.b(a, new Y(null, 1, 5, Z, [de], null), function(a) {
    return[w("card "), w(a)].join("");
  }), new Y(null, 4, 5, Z, [Rd, new Y(null, 2, 5, Z, [ne, new r(null, 2, [Wd, d, de, "icon"], null)], null), new Y(null, 2, 5, Z, [$d, b], null), new Y(null, 2, 5, Z, [ke, c], null)], null), new Y(null, 2, 5, Z, [Kd, new Y(null, 2, 5, Z, [ke, e], null)], null)], null)], null);
}
;var Ke, Le, Me, Ne;
function Oe() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
Ne = Me = Le = Ke = !1;
var Pe;
if (Pe = Oe()) {
  var Qe = aa.navigator;
  Ke = 0 == Pe.indexOf("Opera");
  Le = !Ke && -1 != Pe.indexOf("MSIE");
  Me = !Ke && -1 != Pe.indexOf("WebKit");
  Ne = !Ke && !Me && "Gecko" == Qe.product;
}
var Re = Le, Se = Ne, Te = Me;
function Ue() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Ve;
a: {
  var We = "", Xe;
  if (Ke && aa.opera) {
    var Ye = aa.opera.version, We = "function" == typeof Ye ? Ye() : Ye
  } else {
    if (Se ? Xe = /rv\:([^\);]+)(\)|;)/ : Re ? Xe = /MSIE\s+([^\);]+)(\)|;)/ : Te && (Xe = /WebKit\/(\S+)/), Xe) {
      var Ze = Xe.exec(Oe()), We = Ze ? Ze[1] : ""
    }
  }
  if (Re) {
    var $e = Ue();
    if ($e > parseFloat(We)) {
      Ve = String($e);
      break a;
    }
  }
  Ve = We;
}
var af = {};
function bf(a) {
  if (!af[a]) {
    for (var b = 0, c = ea(String(Ve)).split("."), d = ea(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(g) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == q[0].length) {
          break;
        }
        b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == q[2].length) ? -1 : (0 == p[2].length) > (0 == q[2].length) ? 1 : 0) || (p[2] < q[2] ? -1 : p[2] > q[2] ? 1 : 0);
      } while (0 == b);
    }
    af[a] = 0 <= b;
  }
}
var cf = aa.document, df = cf && Re ? Ue() || ("CSS1Compat" == cf.compatMode ? parseInt(Ve, 10) : 5) : void 0;
if (Se || Re) {
  var ef;
  if (ef = Re) {
    ef = Re && 9 <= df;
  }
  ef || Se && bf("1.9.1");
}
Re && bf("9");
function ff() {
  var a = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  a.setAttribute("id", "intro");
  a.appendChild(function() {
    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "h1");
    a.appendChild(document.createTextNode("We create online solutions for mobile and the web"));
    return a;
  }());
  return a;
}
;var gf = new Y(null, 4, 5, Z, ["About", "Principles", "Blog", "Hire Us"], null);
var hf = {};
if (G.a("#/blog", window.location.hash)) {
  hf.jb.R ? hf.jb.R() : hf.jb.call(null);
} else {
  var lf = xe(new Y(null, 3, 5, Z, [Ud, xe(new Y(null, 3, 5, Z, [ce, new Y(null, 2, 5, Z, [ne, new r(null, 1, [Wd, "assets/imgs/logo.svg"], null)], null), new Y(null, 4, 5, Z, [ie, "Immutable", " ", new Y(null, 2, 5, Z, [le, function jf(b) {
    return new X(null, function() {
      for (;;) {
        var c = K(b);
        if (c) {
          if (V(c)) {
            var d = E(c), e = S(d), f = new bc(Array(e), 0);
            a: {
              for (var g = 0;;) {
                if (g < e) {
                  var k = y.a(d, g), k = T.b(k, 0, null);
                  f.add(new Y(null, 2, 5, Z, [qe, k], null));
                  g += 1;
                } else {
                  d = !0;
                  break a;
                }
              }
              d = void 0;
            }
            return d ? fc(f.M(), jf(F(c))) : fc(f.M(), null);
          }
          f = M(c);
          f = T.b(f, 0, null);
          return R(new Y(null, 2, 5, Z, [qe, f], null), jf(N(c)));
        }
        return null;
      }
    }, null, null);
  }("Labs")], null)], null)], null)), new Y(null, 2, 5, Z, [fe, function kf(b) {
    return new X(null, function() {
      for (;;) {
        var c = K(b);
        if (c) {
          if (V(c)) {
            var d = E(c), e = S(d), f = new bc(Array(e), 0);
            return function() {
              for (var b = 0;;) {
                if (b < e) {
                  var c = y.a(d, b), g = f, p = Z, q = Zd, A = c, c = G.a("Blog", A) ? new Y(null, 3, 5, Z, [pe, new r(null, 1, [me, "/#/blog"], null), c], null) : G.a("Hire Us", A) ? new Y(null, 3, 5, Z, [pe, new r(null, 1, [me, "mailto:nicholasbardy@gmail.com"], null), c], null) : u ? new Y(null, 3, 5, Z, [pe, Ab(new r(null, 1, [me, [w("#"), w(c.toLowerCase())].join("")], null), new r(null, 1, [ge, !0], null)), c], null) : null;
                  g.add(new Y(null, 2, 5, p, [q, c], null));
                  b += 1;
                } else {
                  return!0;
                }
              }
            }() ? fc(f.M(), kf(F(c))) : fc(f.M(), null);
          }
          var g = M(c);
          return R(new Y(null, 2, 5, Z, [Zd, function() {
            var b = g;
            return G.a("Blog", b) ? new Y(null, 3, 5, Z, [pe, new r(null, 1, [me, "/#/blog"], null), g], null) : G.a("Hire Us", b) ? new Y(null, 3, 5, Z, [pe, new r(null, 1, [me, "mailto:nicholasbardy@gmail.com"], null), g], null) : u ? new Y(null, 3, 5, Z, [pe, Ab(new r(null, 1, [me, [w("#"), w(g.toLowerCase())].join("")], null), new r(null, 1, [ge, !0], null)), g], null) : null;
          }()], null), kf(N(c)));
        }
        return null;
      }
    }, null, null);
  }(gf)], null)], null));
  He.a(document.body, lf);
  (new Headroom(lf, {tolerance:50, offset:180})).init();
  He.a(document.body, ff());
  He.a(document.body, new Y(null, 4, 5, Z, [be, new Y(null, 3, 5, Z, [Jd, new Y(null, 3, 5, Z, [ke, new Y(null, 2, 5, Z, [Nd, "Who we are"], null), "Immutable Labs is a software development consultancy. We specialize in creating front-end software for mobile and the web. We hold a strong focus on user experience through carefully crafted and well tested user interface designs. We specialize in Clojure and Clojurescript devopment. However our team is comfortable across many languages, platforms and libraries."], 
  null), new Y(null, 1, 5, Z, [he], null)], null), new Y(null, 2, 5, Z, [Od, new Y(null, 6, 5, Z, [Xd, new Y(null, 2, 5, Z, [Nd, "Principles"], null), new Y(null, 2, 5, Z, [Pd, Je(new r(null, 1, [de, "usability"], null), "Usability", "Keep it simple", "./assets/imgs/icon_9428.svg", "We immediaely focus on delivering a clean User experience. From the layout the the color scheme, we make sure every details assists in delivering high ease of use.")], null), new Y(null, 2, 5, Z, [Pd, Je(new r(null, 1, 
  [de, "innovation"], null), "Innovation", "Cutting Edge", "./assets/imgs/icon_2465.svg", "Our development team aggressivley embraces new technology. If you looking for a unique solution we would love to embrace the challenge.")], null), new Y(null, 2, 5, Z, [Pd, Je(new r(null, 1, [de, "compatibility"], null), "Compatibilty", "Works everywhere.", "./assets/imgs/icon_29888.svg", "Technology is everywhere and on countless different devices. Our team has professional experience delivering solutions for devices from TVs to mobile phones. We want to help deliver your content seamless across many devices to all of your customers. Whether they are at their desks or on a bus.")], 
  null), new Y(null, 1, 5, Z, [he], null)], null)], null), new Y(null, 2, 5, Z, [Md, new Y(null, 3, 5, Z, [je, new Y(null, 2, 5, Z, [Nd, "What we do"], null), zb.b(Rc, Ld, function mf(b) {
    return new X(null, function() {
      for (;;) {
        var c = K(b);
        if (c) {
          if (V(c)) {
            var d = E(c), e = S(d), f = new bc(Array(e), 0);
            a: {
              for (var g = 0;;) {
                if (g < e) {
                  var k = y.a(d, g);
                  f.add(new Y(null, 2, 5, Z, [Sd, k], null));
                  g += 1;
                } else {
                  d = !0;
                  break a;
                }
              }
              d = void 0;
            }
            return d ? fc(f.M(), mf(F(c))) : fc(f.M(), null);
          }
          f = M(c);
          return R(new Y(null, 2, 5, Z, [Sd, f], null), mf(N(c)));
        }
        return null;
      }
    }, null, null);
  }(Ie))], null)], null)], null));
  a: {
    if (!s(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"))) {
      for (var nf = K(Array.prototype.slice.call(document.getElementsByTagName("img"))), of = null, pf = 0, qf = 0;;) {
        if (qf < pf) {
          var ue = of.r(null, qf);
          ue.src = te();
          qf += 1;
        } else {
          var rf = K(nf);
          if (rf) {
            var sf = rf;
            if (V(sf)) {
              var tf = E(sf), uf = F(sf), vf = tf, wf = S(tf), nf = uf, of = vf, pf = wf
            } else {
              ue = M(sf), ue.src = te(), nf = P(sf), of = null, pf = 0;
            }
            qf = 0;
          } else {
            break a;
          }
        }
      }
    }
  }
}
;
})();
