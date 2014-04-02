;(function(){
var g;
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
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ea(a, b) {
  null != a && this.append.apply(this, arguments);
}
ea.prototype.va = "";
ea.prototype.append = function(a, b, c) {
  this.va += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.va += arguments[d];
    }
  }
  return this;
};
ea.prototype.toString = function() {
  return this.va;
};
var fa, ga = null;
function ha() {
  return new q(null, 5, [ja, !0, ka, !0, la, !1, ma, !1, na, null], null);
}
function s(a) {
  return null != a && !1 !== a;
}
function t(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function oa(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = oa(b), c = s(s(c) ? c.ib : c) ? c.hb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function pa(a) {
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
var ra = {}, sa = {};
function ta(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = ta[n(null == a ? null : a)];
  if (!b && (b = ta._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ua(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = ua[n(null == a ? null : a)];
  if (!c && (c = ua._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var va = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.Z : a) {
      return a.Z(a, b, c);
    }
    var h;
    h = y[n(null == a ? null : a)];
    if (!h && (h = y._, !h)) {
      throw v("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
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
}(), wa = {};
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
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = B[n(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var xa = {}, ya = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.B : a) {
      return a.B(a, b, c);
    }
    var h;
    h = C[n(null == a ? null : a)];
    if (!h && (h = C._, !h)) {
      throw v("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
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
function za(a, b) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b);
  }
  var c;
  c = za[n(null == a ? null : a)];
  if (!c && (c = za._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Aa(a, b, c) {
  if (a ? a.wa : a) {
    return a.wa(a, b, c);
  }
  var d;
  d = Aa[n(null == a ? null : a)];
  if (!d && (d = Aa._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ba = {}, Da = {};
function Ea(a) {
  if (a ? a.Ya : a) {
    return a.Ya();
  }
  var b;
  b = Ea[n(null == a ? null : a)];
  if (!b && (b = Ea._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Fa(a) {
  if (a ? a.cb : a) {
    return a.cb();
  }
  var b;
  b = Fa[n(null == a ? null : a)];
  if (!b && (b = Fa._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ga = {}, Ha = {};
function Ia(a, b, c) {
  if (a ? a.Za : a) {
    return a.Za(a, b, c);
  }
  var d;
  d = Ia[n(null == a ? null : a)];
  if (!d && (d = Ia._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
var Ja = {};
function Ka(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = Ka[n(null == a ? null : a)];
  if (!b && (b = Ka._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var La = {};
function Ma(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = Ma[n(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Na = {}, Oa = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var h;
    h = Oa[n(null == a ? null : a)];
    if (!h && (h = Oa._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = Oa[n(null == a ? null : a)];
    if (!c && (c = Oa._, !c)) {
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
function Pa(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = Pa[n(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Qa(a) {
  if (a ? a.v : a) {
    return a.v(a);
  }
  var b;
  b = Qa[n(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Sa(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = Sa[n(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Ta = {};
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
var Ua = {};
function Va(a, b, c) {
  if (a ? a.s : a) {
    return a.s(a, b, c);
  }
  var d;
  d = Va[n(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Wa(a) {
  if (a ? a.pa : a) {
    return a.pa(a);
  }
  var b;
  b = Wa[n(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Xa(a, b) {
  if (a ? a.za : a) {
    return a.za(a, b);
  }
  var c;
  c = Xa[n(null == a ? null : a)];
  if (!c && (c = Xa._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Ya(a) {
  if (a ? a.Aa : a) {
    return a.Aa(a);
  }
  var b;
  b = Ya[n(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Za(a, b, c) {
  if (a ? a.ya : a) {
    return a.ya(a, b, c);
  }
  var d;
  d = Za[n(null == a ? null : a)];
  if (!d && (d = Za._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function $a(a, b, c) {
  if (a ? a.fb : a) {
    return a.fb(0, b, c);
  }
  var d;
  d = $a[n(null == a ? null : a)];
  if (!d && (d = $a._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function ab(a) {
  if (a ? a.ab : a) {
    return a.ab();
  }
  var b;
  b = ab[n(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
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
function bb(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = bb[n(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function cb(a) {
  this.sb = a;
  this.o = 0;
  this.f = 1073741824;
}
cb.prototype.gb = function(a, b) {
  return this.sb.append(b);
};
function db(a) {
  var b = new ea;
  a.s(null, new cb(b), ha());
  return "" + w(b);
}
function eb(a, b) {
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
    c = fb.a ? fb.a(a.L, b.L) : fb.call(null, a.L, b.L);
    return 0 === c ? fb.a ? fb.a(a.name, b.name) : fb.call(null, a.name, b.name) : c;
  }
  return gb ? fb.a ? fb.a(a.name, b.name) : fb.call(null, a.name, b.name) : null;
}
function hb(a, b, c, d, e) {
  this.L = a;
  this.name = b;
  this.na = c;
  this.oa = d;
  this.fa = e;
  this.f = 2154168321;
  this.o = 4096;
}
g = hb.prototype;
g.s = function(a, b) {
  return D(b, this.na);
};
g.v = function() {
  var a = this.oa;
  return null != a ? a : this.oa = a = ib.a ? ib.a(I.d ? I.d(this.L) : I.call(null, this.L), I.d ? I.d(this.name) : I.call(null, this.name)) : ib.call(null, I.d ? I.d(this.L) : I.call(null, this.L), I.d ? I.d(this.name) : I.call(null, this.name));
};
g.F = function(a, b) {
  return new hb(this.L, this.name, this.na, this.oa, b);
};
g.I = function() {
  return this.fa;
};
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return C.b(a, this, null);
};
g.a = function(a, b) {
  return C.b(a, this, b);
};
g.t = function(a, b) {
  return b instanceof hb ? this.na === b.na : !1;
};
g.toString = function() {
  return this.na;
};
function K(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.yb)) {
    return a.C(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new jb(a, 0);
  }
  if (t(Ra, a)) {
    return Sa(a);
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
  return null != a ? a && (a.f & 64 || a.xa) ? a.R(null) : (a = K(a)) ? B(a) : O : O;
}
function P(a) {
  return null == a ? null : a && (a.f & 128 || a.eb) ? a.S(null) : K(N(a));
}
var G = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Pa(a, b);
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
sa["null"] = !0;
ta["null"] = function() {
  return 0;
};
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Pa.number = function(a, b) {
  return a === b;
};
Ja["function"] = !0;
Ka["function"] = function() {
  return null;
};
ra["function"] = !0;
Qa._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
var kb = function() {
  function a(a, b, c, d) {
    for (var l = ta(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ta(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ta(a);
    if (0 === c) {
      return b.X ? b.X() : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.m = a;
  return d;
}(), lb = function() {
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
      return b.X ? b.X() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.m = a;
  return d;
}();
function mb(a) {
  return a ? a.f & 2 || a.kb ? !0 : a.f ? !1 : t(sa, a) : t(sa, a);
}
function nb(a) {
  return a ? a.f & 16 || a.bb ? !0 : a.f ? !1 : t(va, a) : t(va, a);
}
function jb(a, b) {
  this.c = a;
  this.i = b;
  this.f = 166199550;
  this.o = 8192;
}
g = jb.prototype;
g.v = function() {
  return ob.d ? ob.d(this) : ob.call(null, this);
};
g.S = function() {
  return this.i + 1 < this.c.length ? new jb(this.c, this.i + 1) : null;
};
g.D = function(a, b) {
  return R.a ? R.a(b, this) : R.call(null, b, this);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return lb.m(this.c, b, this.c[this.i], this.i + 1);
};
g.O = function(a, b, c) {
  return lb.m(this.c, b, c, this.i);
};
g.C = function() {
  return this;
};
g.G = function() {
  return this.c.length - this.i;
};
g.P = function() {
  return this.c[this.i];
};
g.R = function() {
  return this.i + 1 < this.c.length ? new jb(this.c, this.i + 1) : O;
};
g.t = function(a, b) {
  return pb.a ? pb.a(this, b) : pb.call(null, this, b);
};
g.r = function(a, b) {
  var c = b + this.i;
  return c < this.c.length ? this.c[c] : null;
};
g.Z = function(a, b, c) {
  a = b + this.i;
  return a < this.c.length ? this.c[a] : c;
};
var qb = function() {
  function a(a, b) {
    return b < a.length ? new jb(a, b) : null;
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
    return qb.a(a, b);
  }
  function b(a) {
    return qb.a(a, 0);
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
Pa._ = function(a, b) {
  return a === b;
};
var rb = function() {
  function a(a, b) {
    return null != a ? ua(a, b) : ua(O, b);
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
    if (a && (a.f & 2 || a.kb)) {
      a = a.G(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (t(sa, a)) {
            a = ta(a);
          } else {
            if (u) {
              a: {
                a = K(a);
                for (var b = 0;;) {
                  if (mb(a)) {
                    a = b + ta(a);
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
var sb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return K(a) ? M(a) : c;
      }
      if (nb(a)) {
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
      if (nb(a)) {
        return y.a(a, b);
      }
      if (K(a)) {
        var c = P(a), h = b - 1;
        a = c;
        b = h;
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
      if (t(va, a)) {
        return y.a(a, b);
      }
      if (u) {
        if (a ? a.f & 64 || a.xa || (a.f ? 0 : t(wa, a)) : t(wa, a)) {
          return sb.b(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(pa(oa(a)))].join(""));
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
    if (t(va, a)) {
      return y.a(a, b);
    }
    if (u) {
      if (a ? a.f & 64 || a.xa || (a.f ? 0 : t(wa, a)) : t(wa, a)) {
        return sb.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(pa(oa(a)))].join(""));
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
    return null != a ? a && (a.f & 256 || a.lb) ? a.B(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(ya, a) ? C.b(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.lb) ? a.A(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(ya, a) ? C.a(a, b) : null;
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
}(), ub = function() {
  function a(a, b, c) {
    return null != a ? Aa(a, b, c) : tb.a ? tb.a([b], [c]) : tb.call(null, [b], [c]);
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
  }(), b = function(b, e, f, h) {
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
function vb(a) {
  var b = "function" == n(a);
  return b ? b : a ? s(s(null) ? null : a.jb) ? !0 : a.$a ? !1 : t(ra, a) : t(ra, a);
}
var yb = function wb(b, c) {
  return vb(b) && !(b ? b.f & 262144 || b.Cb || (b.f ? 0 : t(La, b)) : t(La, b)) ? wb(function() {
    "undefined" === typeof fa && (fa = function(b, c, f, h) {
      this.k = b;
      this.Da = c;
      this.tb = f;
      this.rb = h;
      this.o = 0;
      this.f = 393217;
    }, fa.ib = !0, fa.hb = "cljs.core/t9374", fa.qb = function(b) {
      return D(b, "cljs.core/t9374");
    }, fa.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return xb.a ? xb.a(b.Da, d) : xb.call(null, b.Da, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = M(b);
        b = N(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), fa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x(c)));
    }, fa.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return xb.a ? xb.a(self__.Da, b) : xb.call(null, self__.Da, b);
      }
      b.l = 0;
      b.h = function(b) {
        b = K(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), fa.prototype.jb = !0, fa.prototype.I = function() {
      return this.rb;
    }, fa.prototype.F = function(b, c) {
      return new fa(this.k, this.Da, this.tb, c);
    });
    return new fa(c, b, wb, null);
  }(), c) : null == b ? null : Ma(b, c);
};
function zb(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.nb || (a.f ? 0 : t(Ja, a)) : t(Ja, a) : b) ? Ka(a) : null;
}
var Ab = {}, Bb = 0;
function I(a) {
  if (a && (a.f & 4194304 || a.wb)) {
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
            255 < Bb && (Ab = {}, Bb = 0);
            var b = Ab[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Ab[a] = b;
              Bb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : u ? Qa(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Cb(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.xb ? !0 : a.f ? !1 : t(Ba, a) : t(Ba, a);
}
function Db(a) {
  return a ? a.f & 16384 || a.Bb ? !0 : a.f ? !1 : t(Ha, a) : t(Ha, a);
}
function Fb(a) {
  return a ? a.o & 512 || a.ub ? !0 : !1 : !1;
}
function Gb(a) {
  var b = [];
  da(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Hb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Ib = {};
function Jb(a) {
  return s(a) ? !0 : !1;
}
function fb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (oa(a) === oa(b)) {
    return a && (a.o & 2048 || a.Ea) ? a.Fa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Kb = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = fb(T.a(a, h), T.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = S(a), h = S(b);
    return f < h ? -1 : f > h ? 1 : u ? c.m(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.m = a;
  return c;
}(), V = function() {
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
    return c ? Lb.b ? Lb.b(a, M(c), P(c)) : Lb.call(null, a, M(c), P(c)) : a.X ? a.X() : a.call(null);
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
}(), Lb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.pb) ? c.O(null, a, b) : c instanceof Array ? lb.b(c, a, b) : "string" === typeof c ? lb.b(c, a, b) : t(Na, c) ? Oa.b(c, a, b) : u ? V.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.pb) ? b.N(null, a) : b instanceof Array ? lb.a(b, a) : "string" === typeof b ? lb.a(b, a) : t(Na, b) ? Oa.a(b, a) : u ? V.a(a, b) : null;
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
function Mb(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
}
function Nb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Ob(a, b) {
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
      for (var e = new ea(b.d(a)), l = d;;) {
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
  b.X = function() {
    return "";
  };
  b.d = a;
  b.e = c.e;
  return b;
}(), Pb = function() {
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
function pb(a, b) {
  return Jb((b ? b.f & 16777216 || b.zb || (b.f ? 0 : t(Ta, b)) : t(Ta, b)) ? function() {
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
function ib(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function ob(a) {
  if (K(a)) {
    var b = I(M(a));
    for (a = P(a);;) {
      if (null == a) {
        return b;
      }
      b = ib(b, I(M(a)));
      a = P(a);
    }
  } else {
    return 0;
  }
}
function Qb(a) {
  var b = 0;
  for (a = K(a);;) {
    if (a) {
      var c = M(a), b = (b + (I(Rb.d ? Rb.d(c) : Rb.call(null, c)) ^ I(Sb.d ? Sb.d(c) : Sb.call(null, c)))) % 4503599627370496;
      a = P(a);
    } else {
      return b;
    }
  }
}
function Tb(a, b, c, d, e) {
  this.k = a;
  this.Ba = b;
  this.ha = c;
  this.count = d;
  this.j = e;
  this.f = 65937646;
  this.o = 8192;
}
g = Tb.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.S = function() {
  return 1 === this.count ? null : this.ha;
};
g.D = function(a, b) {
  return new Tb(this.k, b, this, this.count + 1, null);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  return this;
};
g.G = function() {
  return this.count;
};
g.P = function() {
  return this.Ba;
};
g.R = function() {
  return 1 === this.count ? O : this.ha;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new Tb(b, this.Ba, this.ha, this.count, this.j);
};
g.I = function() {
  return this.k;
};
function Ub(a) {
  this.k = a;
  this.f = 65937614;
  this.o = 8192;
}
g = Ub.prototype;
g.v = function() {
  return 0;
};
g.S = function() {
  return null;
};
g.D = function(a, b) {
  return new Tb(this.k, b, null, 1, null);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  return null;
};
g.G = function() {
  return 0;
};
g.P = function() {
  return null;
};
g.R = function() {
  return O;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new Ub(b);
};
g.I = function() {
  return this.k;
};
var O = new Ub(null), Vb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof jb && 0 === a.i) {
      b = a.c;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.P(null)), a = a.S(null);
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
function Wb(a, b, c, d) {
  this.k = a;
  this.Ba = b;
  this.ha = c;
  this.j = d;
  this.f = 65929452;
  this.o = 8192;
}
g = Wb.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.S = function() {
  return null == this.ha ? null : K(this.ha);
};
g.D = function(a, b) {
  return new Wb(null, b, this, this.j);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  return this;
};
g.P = function() {
  return this.Ba;
};
g.R = function() {
  return null == this.ha ? O : this.ha;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new Wb(b, this.Ba, this.ha, this.j);
};
g.I = function() {
  return this.k;
};
function R(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.xa)) ? new Wb(null, a, b, null) : new Wb(null, a, K(b), null);
}
function W(a, b, c, d) {
  this.L = a;
  this.name = b;
  this.ka = c;
  this.oa = d;
  this.f = 2153775105;
  this.o = 4096;
}
g = W.prototype;
g.s = function(a, b) {
  return D(b, [w(":"), w(this.ka)].join(""));
};
g.v = function() {
  null == this.oa && (this.oa = ib(I(this.L), I(this.name)) + 2654435769);
  return this.oa;
};
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return U.a(a, this);
};
g.a = function(a, b) {
  return U.b(a, this, b);
};
g.t = function(a, b) {
  return b instanceof W ? this.ka === b.ka : !1;
};
g.toString = function() {
  return[w(":"), w(this.ka)].join("");
};
var Yb = function() {
  function a(a, b) {
    return new W(a, b, [w(s(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof W) {
      return a;
    }
    if (a instanceof hb) {
      var b;
      if (a && (a.o & 4096 || a.ob)) {
        b = a.L;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new W(b, Xb.d ? Xb.d(a) : Xb.call(null, a), a.na, null);
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
g = X.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.S = function() {
  Sa(this);
  return null == this.p ? null : P(this.p);
};
g.D = function(a, b) {
  return R(b, this);
};
g.toString = function() {
  return db(this);
};
function Zb(a) {
  null != a.ta && (a.p = a.ta.X ? a.ta.X() : a.ta.call(null), a.ta = null);
  return a.p;
}
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  Zb(this);
  if (null == this.p) {
    return null;
  }
  for (var a = this.p;;) {
    if (a instanceof X) {
      a = Zb(a);
    } else {
      return this.p = a, K(this.p);
    }
  }
};
g.P = function() {
  Sa(this);
  return null == this.p ? null : M(this.p);
};
g.R = function() {
  Sa(this);
  return null != this.p ? N(this.p) : O;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new X(b, this.ta, this.p, this.j);
};
g.I = function() {
  return this.k;
};
function $b(a, b) {
  this.Ga = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
$b.prototype.G = function() {
  return this.end;
};
$b.prototype.add = function(a) {
  this.Ga[this.end] = a;
  return this.end += 1;
};
$b.prototype.M = function() {
  var a = new ac(this.Ga, 0, this.end);
  this.Ga = null;
  return a;
};
function ac(a, b, c) {
  this.c = a;
  this.q = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
g = ac.prototype;
g.N = function(a, b) {
  return lb.m(this.c, b, this.c[this.q], this.q + 1);
};
g.O = function(a, b, c) {
  return lb.m(this.c, b, c, this.q);
};
g.ab = function() {
  if (this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new ac(this.c, this.q + 1, this.end);
};
g.r = function(a, b) {
  return this.c[this.q + b];
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.c[this.q + b] : c;
};
g.G = function() {
  return this.end - this.q;
};
var bc = function() {
  function a(a, b, c) {
    return new ac(a, b, c);
  }
  function b(a, b) {
    return new ac(a, b, a.length);
  }
  function c(a) {
    return new ac(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.b = a;
  return d;
}();
function cc(a, b, c, d) {
  this.M = a;
  this.da = b;
  this.k = c;
  this.j = d;
  this.f = 31850732;
  this.o = 1536;
}
g = cc.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.S = function() {
  if (1 < ta(this.M)) {
    return new cc(ab(this.M), this.da, this.k, null);
  }
  var a = Sa(this.da);
  return null == a ? null : a;
};
g.D = function(a, b) {
  return R(b, this);
};
g.toString = function() {
  return db(this);
};
g.C = function() {
  return this;
};
g.P = function() {
  return y.a(this.M, 0);
};
g.R = function() {
  return 1 < ta(this.M) ? new cc(ab(this.M), this.da, this.k, null) : null == this.da ? O : this.da;
};
g.Ia = function() {
  return null == this.da ? null : this.da;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new cc(this.M, this.da, b, this.j);
};
g.I = function() {
  return this.k;
};
g.Ja = function() {
  return this.M;
};
g.Ka = function() {
  return null == this.da ? O : this.da;
};
function dc(a, b) {
  return 0 === ta(a) ? b : new cc(a, b, null, null);
}
function ec(a) {
  for (var b = [];;) {
    if (K(a)) {
      b.push(M(a)), a = P(a);
    } else {
      return b;
    }
  }
}
function fc(a, b) {
  if (mb(a)) {
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
var hc = function gc(b) {
  return null == b ? null : null == P(b) ? K(M(b)) : u ? R(M(b), gc(P(b))) : null;
}, ic = function() {
  function a(a, b) {
    return new X(null, function() {
      var c = K(a);
      return c ? Fb(c) ? dc(E(c), d.a(F(c), b)) : R(M(c), d.a(N(c), b)) : b;
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
      return function r(a, b) {
        return new X(null, function() {
          var c = K(a);
          return c ? Fb(c) ? dc(E(c), r(F(c), b)) : R(M(c), r(N(c), b)) : s(b) ? r(M(b), P(b)) : null;
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
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.h = e.h;
  d.X = c;
  d.d = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), jc = function() {
  function a(a, b, c, d) {
    return R(a, R(b, R(c, d)));
  }
  function b(a, b, c) {
    return R(a, R(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var r = null;
      4 < arguments.length && (r = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, r);
    }
    function b(a, c, d, e, f) {
      return R(a, R(c, R(d, R(e, hc(f)))));
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
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return K(c);
      case 2:
        return R(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.e(c, f, h, k, Q(arguments, 4));
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
}(), kc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Xa(a, c), s(d)) {
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
      var h = M(a);
      a = N(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return Xa(a, d);
      default:
        return b.e(a, d, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.a = function(a, b) {
    return Xa(a, b);
  };
  a.e = b.e;
  return a;
}(), mc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Za(a, c, d), s(k)) {
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
      var h = M(a);
      a = P(a);
      var k = M(a);
      a = N(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Za(a, d, e);
      default:
        return b.e(a, d, e, Q(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 3;
  a.h = b.h;
  a.b = function(a, b, e) {
    return Za(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function nc(a, b, c) {
  var d = K(c);
  if (0 === b) {
    return a.X ? a.X() : a.call(null);
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
  var e = z(f), h = B(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = z(h), k = B(h);
  if (4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f);
  }
  h = z(k);
  k = B(k);
  if (5 === b) {
    return a.H ? a.H(c, d, e, f, h) : a.H ? a.H(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  a = z(k);
  var l = B(k);
  if (6 === b) {
    return a.Y ? a.Y(c, d, e, f, h, a) : a.Y ? a.Y(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a);
  }
  var k = z(l), m = B(l);
  if (7 === b) {
    return a.qa ? a.qa(c, d, e, f, h, a, k) : a.qa ? a.qa(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k);
  }
  var l = z(m), p = B(m);
  if (8 === b) {
    return a.Wa ? a.Wa(c, d, e, f, h, a, k, l) : a.Wa ? a.Wa(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l);
  }
  var m = z(p), r = B(p);
  if (9 === b) {
    return a.Xa ? a.Xa(c, d, e, f, h, a, k, l, m) : a.Xa ? a.Xa(c, d, e, f, h, a, k, l, m) : a.call(null, c, d, e, f, h, a, k, l, m);
  }
  var p = z(r), A = B(r);
  if (10 === b) {
    return a.La ? a.La(c, d, e, f, h, a, k, l, m, p) : a.La ? a.La(c, d, e, f, h, a, k, l, m, p) : a.call(null, c, d, e, f, h, a, k, l, m, p);
  }
  var r = z(A), J = B(A);
  if (11 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, a, k, l, m, p, r) : a.Ma ? a.Ma(c, d, e, f, h, a, k, l, m, p, r) : a.call(null, c, d, e, f, h, a, k, l, m, p, r);
  }
  var A = z(J), H = B(J);
  if (12 === b) {
    return a.Na ? a.Na(c, d, e, f, h, a, k, l, m, p, r, A) : a.Na ? a.Na(c, d, e, f, h, a, k, l, m, p, r, A) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A);
  }
  var J = z(H), L = B(H);
  if (13 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, a, k, l, m, p, r, A, J) : a.Oa ? a.Oa(c, d, e, f, h, a, k, l, m, p, r, A, J) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J);
  }
  var H = z(L), aa = B(L);
  if (14 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, a, k, l, m, p, r, A, J, H) : a.Pa ? a.Pa(c, d, e, f, h, a, k, l, m, p, r, A, J, H) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J, H);
  }
  var L = z(aa), ia = B(aa);
  if (15 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L) : a.Qa ? a.Qa(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J, H, L);
  }
  var aa = z(ia), qa = B(ia);
  if (16 === b) {
    return a.Ra ? a.Ra(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa) : a.Ra ? a.Ra(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa);
  }
  var ia = z(qa), Ca = B(qa);
  if (17 === b) {
    return a.Sa ? a.Sa(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia) : a.Sa ? a.Sa(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia);
  }
  var qa = z(Ca), Eb = B(Ca);
  if (18 === b) {
    return a.Ta ? a.Ta(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa) : a.Ta ? a.Ta(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa);
  }
  Ca = z(Eb);
  Eb = B(Eb);
  if (19 === b) {
    return a.Ua ? a.Ua(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa, Ca) : a.Ua ? a.Ua(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa, Ca) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa, Ca);
  }
  var lc = z(Eb);
  B(Eb);
  if (20 === b) {
    return a.Va ? a.Va(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa, Ca, lc) : a.Va ? a.Va(c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa, Ca, lc) : a.call(null, c, d, e, f, h, a, k, l, m, p, r, A, J, H, L, aa, ia, qa, Ca, lc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var xb = function() {
  function a(a, b, c, d, e) {
    b = jc.m(b, c, d, e);
    c = a.l;
    return a.h ? (d = fc(b, c + 1), d <= c ? nc(a, d, b) : a.h(b)) : a.apply(a, ec(b));
  }
  function b(a, b, c, d) {
    b = jc.b(b, c, d);
    c = a.l;
    return a.h ? (d = fc(b, c + 1), d <= c ? nc(a, d, b) : a.h(b)) : a.apply(a, ec(b));
  }
  function c(a, b, c) {
    b = jc.a(b, c);
    c = a.l;
    if (a.h) {
      var d = fc(b, c + 1);
      return d <= c ? nc(a, d, b) : a.h(b);
    }
    return a.apply(a, ec(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = fc(b, c + 1);
      return d <= c ? nc(a, d, b) : a.h(b);
    }
    return a.apply(a, ec(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, J) {
      var H = null;
      5 < arguments.length && (H = Q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, H);
    }
    function b(a, c, d, e, f, h) {
      c = R(c, R(d, R(e, R(f, hc(h)))));
      d = a.l;
      return a.h ? (e = fc(c, d + 1), e <= d ? nc(a, e, c) : a.h(c)) : a.apply(a, ec(c));
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
      var h = M(a);
      a = N(a);
      return b(c, d, e, f, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, m, p, r) {
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
function oc(a, b) {
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
function pc(a) {
  return a;
}
var qc = function() {
  function a(a, b, c, e) {
    return new X(null, function() {
      var m = K(b), p = K(c), r = K(e);
      return m && p && r ? R(a.b ? a.b(M(m), M(p), M(r)) : a.call(null, M(m), M(p), M(r)), d.m(a, N(m), N(p), N(r))) : null;
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
        if (Fb(c)) {
          for (var e = E(c), m = S(e), p = new $b(Array(m), 0), r = 0;;) {
            if (r < m) {
              var A = a.d ? a.d(y.a(e, r)) : a.call(null, y.a(e, r));
              p.add(A);
              r += 1;
            } else {
              break;
            }
          }
          return dc(p.M(), d.a(a, F(c)));
        }
        return R(a.d ? a.d(M(c)) : a.call(null, M(c)), d.a(a, N(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var A = null;
      4 < arguments.length && (A = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, A);
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return xb.a(a, b);
      }, function J(a) {
        return new X(null, function() {
          var b = d.a(K, a);
          return oc(pc, b) ? R(d.a(M, b), J(d.a(N, b))) : null;
        }, null, null);
      }(rb.e(h, f, Q([e, c], 0))));
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
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, Q(arguments, 4));
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
}(), sc = function rc(b, c) {
  return new X(null, function() {
    if (0 < b) {
      var d = K(c);
      return d ? R(M(d), rc(b - 1, N(d))) : null;
    }
    return null;
  }, null, null);
};
function tc(a, b) {
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
var uc = function() {
  function a(a, b) {
    return sc(a, c.d(b));
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
}(), vc = function() {
  function a(a, c) {
    return new X(null, function() {
      var f = K(a), h = K(c);
      return f && h ? R(M(f), R(M(h), b.a(N(f), N(h)))) : null;
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
        var c = qc.a(K, rb.e(e, d, Q([a], 0)));
        return oc(pc, c) ? ic.a(qc.a(M, c), xb.a(b, qc.a(N, c))) : null;
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
function wc(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.vb) ? (c = Lb.b(Xa, Wa(a), b), c = Ya(c)) : c = Lb.b(ua, a, b) : c = Lb.b(rb, O, b);
  return c;
}
var xc = function() {
  function a(a, b, c, k) {
    return new X(null, function() {
      var l = K(k);
      if (l) {
        var m = sc(a, l);
        return a === S(m) ? R(m, d.m(a, b, c, tc(b, l))) : ua(O, sc(a, ic.a(m, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new X(null, function() {
      var k = K(c);
      if (k) {
        var l = sc(a, k);
        return a === S(l) ? R(l, d.b(a, b, tc(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.b(a, a, b);
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.m = a;
  return d;
}(), yc = function() {
  function a(a, b, c, d, f, r) {
    var A = T.b(b, 0, null);
    return(b = Ob(b, 1)) ? ub.b(a, A, e.Y(U.a(a, A), b, c, d, f, r)) : ub.b(a, A, c.m ? c.m(U.a(a, A), d, f, r) : c.call(null, U.a(a, A), d, f, r));
  }
  function b(a, b, c, d, f) {
    var r = T.b(b, 0, null);
    return(b = Ob(b, 1)) ? ub.b(a, r, e.H(U.a(a, r), b, c, d, f)) : ub.b(a, r, c.b ? c.b(U.a(a, r), d, f) : c.call(null, U.a(a, r), d, f));
  }
  function c(a, b, c, d) {
    var f = T.b(b, 0, null);
    return(b = Ob(b, 1)) ? ub.b(a, f, e.m(U.a(a, f), b, c, d)) : ub.b(a, f, c.a ? c.a(U.a(a, f), d) : c.call(null, U.a(a, f), d));
  }
  function d(a, b, c) {
    var d = T.b(b, 0, null);
    return(b = Ob(b, 1)) ? ub.b(a, d, e.b(U.a(a, d), b, c)) : ub.b(a, d, c.d ? c.d(U.a(a, d)) : c.call(null, U.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, J, H) {
      var L = null;
      6 < arguments.length && (L = Q(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, h, J, L);
    }
    function b(a, c, d, f, h, k, H) {
      var L = T.b(c, 0, null);
      return(c = Ob(c, 1)) ? ub.b(a, L, xb.e(e, U.a(a, L), c, d, f, Q([h, k, H], 0))) : ub.b(a, L, xb.e(d, U.a(a, L), f, h, k, Q([H], 0)));
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
      var h = M(a);
      a = P(a);
      var H = M(a);
      a = N(a);
      return b(c, d, e, f, h, H, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, m, p, r, A) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, m);
      case 5:
        return b.call(this, e, k, l, m, p);
      case 6:
        return a.call(this, e, k, l, m, p, r);
      default:
        return f.e(e, k, l, m, p, r, Q(arguments, 6));
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
function zc(a, b) {
  this.n = a;
  this.c = b;
}
function Ac(a) {
  return new zc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Bc(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Cc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ac(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Ec = function Dc(b, c, d, e) {
  var f = new zc(d.n, x(d.c)), h = b.g - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? Dc(b, c - 5, d, e) : Cc(null, c - 5, e), f.c[h] = b);
  return f;
};
function Fc(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function Gc(a, b) {
  if (0 <= b && b < a.g) {
    if (b >= Bc(a)) {
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
    return Fc(b, a.g);
  }
}
var Ic = function Hc(b, c, d, e, f) {
  var h = new zc(d.n, x(d.c));
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Hc(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
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
g = Y.prototype;
g.pa = function() {
  return new Jc(this.g, this.shift, Kc.d ? Kc.d(this.root) : Kc.call(null, this.root), Lc.d ? Lc.d(this.K) : Lc.call(null, this.K));
};
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.A = function(a, b) {
  return y.b(this, b, null);
};
g.B = function(a, b, c) {
  return y.b(this, b, c);
};
g.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ia(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.r(null, a);
};
g.a = function(a, b) {
  return this.Z(null, a, b);
};
g.D = function(a, b) {
  if (32 > this.g - Bc(this)) {
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
  d ? (d = Ac(null), d.c[0] = this.root, e = Cc(null, this.shift, new zc(null, this.K)), d.c[1] = e) : d = Ec(this, this.shift, this.root, new zc(null, this.K));
  return new Y(this.k, this.g + 1, c, d, [b], null);
};
g.Ya = function() {
  return y.a(this, 0);
};
g.cb = function() {
  return y.a(this, 1);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return kb.a(this, b);
};
g.O = function(a, b, c) {
  return kb.b(this, b, c);
};
g.C = function() {
  return 0 === this.g ? null : 32 > this.g ? Q.d(this.K) : u ? Mc.b ? Mc.b(this, 0, 0) : Mc.call(null, this, 0, 0) : null;
};
g.G = function() {
  return this.g;
};
g.Za = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return Bc(this) <= b ? (a = x(this.K), a[b & 31] = c, new Y(this.k, this.g, this.shift, this.root, a, null)) : new Y(this.k, this.g, this.shift, Ic(this, this.shift, this.root, b, c), this.K, null);
  }
  if (b === this.g) {
    return ua(this, c);
  }
  if (u) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.g), w("]")].join(""));
  }
  return null;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new Y(b, this.g, this.shift, this.root, this.K, this.j);
};
g.I = function() {
  return this.k;
};
g.r = function(a, b) {
  return Gc(this, b)[b & 31];
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.g ? y.a(this, b) : c;
};
var Z = new zc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Nc = new Y(null, 0, 5, Z, [], 0);
function Oc(a, b) {
  var c = a.length, d = b ? a : x(a);
  if (32 > c) {
    return new Y(null, c, 5, Z, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, h = (new Y(null, 32, 5, Z, e, null)).pa(null);;) {
    if (f < c) {
      e = f + 1, h = kc.a(h, d[f]), f = e;
    } else {
      return Ya(h);
    }
  }
}
var Pc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof jb && 0 === a.i ? Oc.a ? Oc.a(a.c, !0) : Oc.call(null, a.c, !0) : Ya(Lb.b(Xa, Wa(Nc), a));
  }
  a.l = 0;
  a.h = function(a) {
    a = K(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Qc(a, b, c, d, e, f) {
  this.w = a;
  this.V = b;
  this.i = c;
  this.q = d;
  this.k = e;
  this.j = f;
  this.f = 32243948;
  this.o = 1536;
}
g = Qc.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.S = function() {
  if (this.q + 1 < this.V.length) {
    var a = Mc.m ? Mc.m(this.w, this.V, this.i, this.q + 1) : Mc.call(null, this.w, this.V, this.i, this.q + 1);
    return null == a ? null : a;
  }
  return bb(this);
};
g.D = function(a, b) {
  return R(b, this);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return kb.a(Rc.b ? Rc.b(this.w, this.i + this.q, S(this.w)) : Rc.call(null, this.w, this.i + this.q, S(this.w)), b);
};
g.O = function(a, b, c) {
  return kb.b(Rc.b ? Rc.b(this.w, this.i + this.q, S(this.w)) : Rc.call(null, this.w, this.i + this.q, S(this.w)), b, c);
};
g.C = function() {
  return this;
};
g.P = function() {
  return this.V[this.q];
};
g.R = function() {
  if (this.q + 1 < this.V.length) {
    var a = Mc.m ? Mc.m(this.w, this.V, this.i, this.q + 1) : Mc.call(null, this.w, this.V, this.i, this.q + 1);
    return null == a ? O : a;
  }
  return F(this);
};
g.Ia = function() {
  var a = this.V.length, a = this.i + a < ta(this.w) ? Mc.b ? Mc.b(this.w, this.i + a, 0) : Mc.call(null, this.w, this.i + a, 0) : null;
  return null == a ? null : a;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return Mc.H ? Mc.H(this.w, this.V, this.i, this.q, b) : Mc.call(null, this.w, this.V, this.i, this.q, b);
};
g.Ja = function() {
  return bc.a(this.V, this.q);
};
g.Ka = function() {
  var a = this.V.length, a = this.i + a < ta(this.w) ? Mc.b ? Mc.b(this.w, this.i + a, 0) : Mc.call(null, this.w, this.i + a, 0) : null;
  return null == a ? O : a;
};
var Mc = function() {
  function a(a, b, c, d, l) {
    return new Qc(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Qc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Qc(a, Gc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.m = b;
  d.H = a;
  return d;
}();
function Sc(a, b, c, d, e) {
  this.k = a;
  this.ea = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.f = 166617887;
  this.o = 8192;
}
g = Sc.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.A = function(a, b) {
  return y.b(this, b, null);
};
g.B = function(a, b, c) {
  return y.b(this, b, c);
};
g.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ia(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.r(null, a);
};
g.a = function(a, b) {
  return this.Z(null, a, b);
};
g.D = function(a, b) {
  return Tc.H ? Tc.H(this.k, Ia(this.ea, this.end, b), this.start, this.end + 1, null) : Tc.call(null, this.k, Ia(this.ea, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return kb.a(this, b);
};
g.O = function(a, b, c) {
  return kb.b(this, b, c);
};
g.C = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : R(y.a(a.ea, d), new X(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
g.G = function() {
  return this.end - this.start;
};
g.Za = function(a, b, c) {
  var d = this, e = d.start + b;
  return Tc.H ? Tc.H(d.k, ub.b(d.ea, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Tc.call(null, d.k, ub.b(d.ea, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return Tc.H ? Tc.H(b, this.ea, this.start, this.end, this.j) : Tc.call(null, b, this.ea, this.start, this.end, this.j);
};
g.I = function() {
  return this.k;
};
g.r = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Fc(b, this.end - this.start) : y.a(this.ea, this.start + b);
};
g.Z = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.b(this.ea, this.start + b, c);
};
function Tc(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Sc) {
      c = b.start + c, d = b.start + d, b = b.ea;
    } else {
      var f = S(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Sc(a, b, c, d, e);
    }
  }
}
var Rc = function() {
  function a(a, b, c) {
    return Tc(null, a, b, c, null);
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
function Kc(a) {
  return new zc({}, x(a.c));
}
function Lc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Hb(a, 0, b, 0, a.length);
  return b;
}
var Vc = function Uc(b, c, d, e) {
  d = b.root.n === d.n ? d : new zc(b.root.n, x(d.c));
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? Uc(b, c - 5, h, e) : Cc(b.root.n, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Jc(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.K = d;
  this.f = 275;
  this.o = 88;
}
g = Jc.prototype;
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.A(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
g.A = function(a, b) {
  return y.b(this, b, null);
};
g.B = function(a, b, c) {
  return y.b(this, b, c);
};
g.r = function(a, b) {
  if (this.root.n) {
    return Gc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.g ? y.a(this, b) : c;
};
g.G = function() {
  if (this.root.n) {
    return this.g;
  }
  throw Error("count after persistent!");
};
g.fb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.g) {
      return Bc(this) <= b ? d.K[b & 31] = c : (a = function f(a, k) {
        var l = d.root.n === k.n ? k : new zc(d.root.n, x(k.c));
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
      return Xa(this, c);
    }
    if (u) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.g)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.ya = function(a, b, c) {
  return $a(this, b, c);
};
g.za = function(a, b) {
  if (this.root.n) {
    if (32 > this.g - Bc(this)) {
      this.K[this.g & 31] = b;
    } else {
      var c = new zc(this.root.n, this.K), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.K = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Cc(this.root.n, this.shift, c);
        this.root = new zc(this.root.n, d);
        this.shift = e;
      } else {
        this.root = Vc(this, this.shift, this.root, c);
      }
    }
    this.g += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Aa = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.g - Bc(this), b = Array(a);
    Hb(this.K, 0, b, 0, a);
    return new Y(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Wc() {
  this.o = 0;
  this.f = 2097152;
}
Wc.prototype.t = function() {
  return!1;
};
var Xc = new Wc;
function Yc(a, b) {
  return Jb(Cb(b) ? S(a) === S(b) ? oc(pc, qc.a(function(a) {
    return G.a(U.b(b, M(a), Xc), M(P(a)));
  }, a)) : null : null);
}
function Zc(a, b) {
  var c = a.c;
  if (b instanceof W) {
    a: {
      for (var d = c.length, e = b.ka, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof W && e === h.ka) {
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
      if (b instanceof hb) {
        a: {
          d = c.length;
          e = b.na;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof hb && e === h.na) {
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
function $c(a, b, c) {
  this.c = a;
  this.i = b;
  this.fa = c;
  this.o = 0;
  this.f = 32374990;
}
g = $c.prototype;
g.v = function() {
  return ob(this);
};
g.S = function() {
  return this.i < this.c.length - 2 ? new $c(this.c, this.i + 2, this.fa) : null;
};
g.D = function(a, b) {
  return R(b, this);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  return this;
};
g.G = function() {
  return(this.c.length - this.i) / 2;
};
g.P = function() {
  return new Y(null, 2, 5, Z, [this.c[this.i], this.c[this.i + 1]], null);
};
g.R = function() {
  return this.i < this.c.length - 2 ? new $c(this.c, this.i + 2, this.fa) : O;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new $c(this.c, this.i, b);
};
g.I = function() {
  return this.fa;
};
function q(a, b, c, d) {
  this.k = a;
  this.g = b;
  this.c = c;
  this.j = d;
  this.o = 8196;
  this.f = 16123663;
}
g = q.prototype;
g.pa = function() {
  return new ad({}, this.c.length, x(this.c));
};
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Qb(this);
};
g.A = function(a, b) {
  return C.b(this, b, null);
};
g.B = function(a, b, c) {
  a = Zc(this, b);
  return-1 === a ? c : this.c[a + 1];
};
g.wa = function(a, b, c) {
  a = Zc(this, b);
  if (-1 === a) {
    if (this.g < bd) {
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
      return new q(this.k, this.g + 1, e, null);
    }
    return Ma(Aa(wc(cd, this), b, c), this.k);
  }
  return c === this.c[a + 1] ? this : u ? (b = x(this.c), b[a + 1] = c, new q(this.k, this.g, b, null)) : null;
};
g.Ha = function(a, b) {
  return-1 !== Zc(this, b);
};
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.A(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
g.D = function(a, b) {
  return Db(b) ? Aa(this, y.a(b, 0), y.a(b, 1)) : Lb.b(ua, this, b);
};
g.toString = function() {
  return db(this);
};
g.C = function() {
  return 0 <= this.c.length - 2 ? new $c(this.c, 0, null) : null;
};
g.G = function() {
  return this.g;
};
g.t = function(a, b) {
  return Yc(this, b);
};
g.F = function(a, b) {
  return new q(b, this.g, this.c, this.j);
};
g.I = function() {
  return this.k;
};
var dd = new q(null, 0, [], null), bd = 8;
function ed(a) {
  for (var b = a.length, c = 0, d = Wa(dd);;) {
    if (c < b) {
      var e = c + 2, d = Za(d, a[c], a[c + 1]), c = e
    } else {
      return Ya(d);
    }
  }
}
function ad(a, b, c) {
  this.ra = a;
  this.ga = b;
  this.c = c;
  this.o = 56;
  this.f = 258;
}
g = ad.prototype;
g.ya = function(a, b, c) {
  if (s(this.ra)) {
    a = Zc(this, b);
    if (-1 === a) {
      return this.ga + 2 <= 2 * bd ? (this.ga += 2, this.c.push(b), this.c.push(c), this) : mc.b(fd.a ? fd.a(this.ga, this.c) : fd.call(null, this.ga, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.za = function(a, b) {
  if (s(this.ra)) {
    if (b ? b.f & 2048 || b.mb || (b.f ? 0 : t(Da, b)) : t(Da, b)) {
      return Za(this, Rb.d ? Rb.d(b) : Rb.call(null, b), Sb.d ? Sb.d(b) : Sb.call(null, b));
    }
    for (var c = K(b), d = this;;) {
      var e = M(c);
      if (s(e)) {
        c = P(c), d = Za(d, Rb.d ? Rb.d(e) : Rb.call(null, e), Sb.d ? Sb.d(e) : Sb.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Aa = function() {
  if (s(this.ra)) {
    return this.ra = !1, new q(null, Mb((this.ga - this.ga % 2) / 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.A = function(a, b) {
  return C.b(this, b, null);
};
g.B = function(a, b, c) {
  if (s(this.ra)) {
    return a = Zc(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.G = function() {
  if (s(this.ra)) {
    return Mb((this.ga - this.ga % 2) / 2);
  }
  throw Error("count after persistent!");
};
function fd(a, b) {
  for (var c = Wa(cd), d = 0;;) {
    if (d < a) {
      c = mc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function gd() {
  this.W = !1;
}
function hd(a, b) {
  return a === b ? !0 : a === b || a instanceof W && b instanceof W && a.ka === b.ka ? !0 : u ? G.a(a, b) : null;
}
var id = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.H = a;
  return c;
}(), jd = function() {
  function a(a, b, c, h, k, l) {
    a = a.sa(b);
    a.c[c] = h;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.sa(b);
    a.c[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = b;
  c.Y = a;
  return c;
}();
function kd(a, b, c) {
  this.n = a;
  this.u = b;
  this.c = c;
}
g = kd.prototype;
g.ba = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Nb(this.u & h - 1);
  if (0 === (this.u & h)) {
    var l = Nb(this.u);
    if (2 * l < this.c.length) {
      a = this.sa(a);
      b = a.c;
      f.W = !0;
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
      a.u |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = ld.ba(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.u >>> d & 1) && (k[d] = null != this.c[e] ? ld.ba(a, b + 5, I(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new md(a, l + 1, k);
    }
    return u ? (b = Array(2 * (l + 4)), Hb(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Hb(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.W = !0, a = this.sa(a), a.c = b, a.u |= h, a) : null;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  return null == l ? (l = h.ba(a, b + 5, c, d, e, f), l === h ? this : jd.m(this, a, 2 * k + 1, l)) : hd(d, l) ? e === h ? this : jd.m(this, a, 2 * k + 1, e) : u ? (f.W = !0, jd.Y(this, a, 2 * k, null, 2 * k + 1, nd.qa ? nd.qa(a, b + 5, l, h, c, d, e) : nd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.Ca = function() {
  return od.d ? od.d(this.c) : od.call(null, this.c);
};
g.sa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Nb(this.u), c = Array(0 > b ? 4 : 2 * (b + 1));
  Hb(this.c, 0, c, 0, 2 * b);
  return new kd(a, this.u, c);
};
g.aa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Nb(this.u & f - 1);
  if (0 === (this.u & f)) {
    var k = Nb(this.u);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ld.aa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.u >>> c & 1) && (h[c] = null != this.c[d] ? ld.aa(a + 5, I(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new md(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Hb(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Hb(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.W = !0;
    return new kd(null, this.u | f, a);
  }
  k = this.c[2 * h];
  f = this.c[2 * h + 1];
  return null == k ? (k = f.aa(a + 5, b, c, d, e), k === f ? this : new kd(null, this.u, id.b(this.c, 2 * h + 1, k))) : hd(c, k) ? d === f ? this : new kd(null, this.u, id.b(this.c, 2 * h + 1, d)) : u ? (e.W = !0, new kd(null, this.u, id.H(this.c, 2 * h, null, 2 * h + 1, nd.Y ? nd.Y(a + 5, k, f, b, c, d) : nd.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.la = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.u & e)) {
    return d;
  }
  var f = Nb(this.u & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.la(a + 5, b, c, d) : hd(c, e) ? f : u ? d : null;
};
var ld = new kd(null, 0, []);
function md(a, b, c) {
  this.n = a;
  this.g = b;
  this.c = c;
}
g = md.prototype;
g.ba = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = jd.m(this, a, h, ld.ba(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.ba(a, b + 5, c, d, e, f);
  return b === k ? this : jd.m(this, a, h, b);
};
g.Ca = function() {
  return pd.d ? pd.d(this.c) : pd.call(null, this.c);
};
g.sa = function(a) {
  return a === this.n ? this : new md(a, this.g, x(this.c));
};
g.aa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new md(null, this.g + 1, id.b(this.c, f, ld.aa(a + 5, b, c, d, e)));
  }
  a = h.aa(a + 5, b, c, d, e);
  return a === h ? this : new md(null, this.g, id.b(this.c, f, a));
};
g.la = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.la(a + 5, b, c, d) : d;
};
function qd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (hd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function rd(a, b, c, d) {
  this.n = a;
  this.ja = b;
  this.g = c;
  this.c = d;
}
g = rd.prototype;
g.ba = function(a, b, c, d, e, f) {
  if (c === this.ja) {
    b = qd(this.c, this.g, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.g) {
        return a = jd.Y(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.W = !0, a.g += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Hb(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.W = !0;
      f = this.g + 1;
      a === this.n ? (this.c = b, this.g = f, a = this) : a = new rd(this.n, this.ja, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : jd.m(this, a, b + 1, e);
  }
  return(new kd(a, 1 << (this.ja >>> b & 31), [null, this, null, null])).ba(a, b, c, d, e, f);
};
g.Ca = function() {
  return od.d ? od.d(this.c) : od.call(null, this.c);
};
g.sa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  Hb(this.c, 0, b, 0, 2 * this.g);
  return new rd(a, this.ja, this.g, b);
};
g.aa = function(a, b, c, d, e) {
  return b === this.ja ? (a = qd(this.c, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), Hb(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.W = !0, new rd(null, this.ja, this.g + 1, b)) : G.a(this.c[a], d) ? this : new rd(null, this.ja, this.g, id.b(this.c, a + 1, d))) : (new kd(null, 1 << (this.ja >>> a & 31), [null, this])).aa(a, b, c, d, e);
};
g.la = function(a, b, c, d) {
  a = qd(this.c, this.g, c);
  return 0 > a ? d : hd(c, this.c[a]) ? this.c[a + 1] : u ? d : null;
};
var nd = function() {
  function a(a, b, c, h, k, l, m) {
    var p = I(c);
    if (p === k) {
      return new rd(null, p, 2, [c, h, l, m]);
    }
    var r = new gd;
    return ld.ba(a, b, p, c, h, r).ba(a, b, k, l, m, r);
  }
  function b(a, b, c, h, k, l) {
    var m = I(b);
    if (m === h) {
      return new rd(null, m, 2, [b, c, k, l]);
    }
    var p = new gd;
    return ld.aa(a, m, b, c, p).aa(a, h, k, l, p);
  }
  var c = null, c = function(c, e, f, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Y = b;
  c.qa = a;
  return c;
}();
function sd(a, b, c, d, e) {
  this.k = a;
  this.ca = b;
  this.i = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860;
}
g = sd.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.D = function(a, b) {
  return R(b, this);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  return this;
};
g.P = function() {
  return null == this.p ? new Y(null, 2, 5, Z, [this.ca[this.i], this.ca[this.i + 1]], null) : M(this.p);
};
g.R = function() {
  return null == this.p ? od.b ? od.b(this.ca, this.i + 2, null) : od.call(null, this.ca, this.i + 2, null) : od.b ? od.b(this.ca, this.i, P(this.p)) : od.call(null, this.ca, this.i, P(this.p));
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new sd(b, this.ca, this.i, this.p, this.j);
};
g.I = function() {
  return this.k;
};
var od = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new sd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (s(h) && (h = h.Ca(), s(h))) {
            return new sd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new sd(null, a, b, c, null);
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
function td(a, b, c, d, e) {
  this.k = a;
  this.ca = b;
  this.i = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860;
}
g = td.prototype;
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ob(this);
};
g.D = function(a, b) {
  return R(b, this);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  return this;
};
g.P = function() {
  return M(this.p);
};
g.R = function() {
  return pd.m ? pd.m(null, this.ca, this.i, P(this.p)) : pd.call(null, null, this.ca, this.i, P(this.p));
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new td(b, this.ca, this.i, this.p, this.j);
};
g.I = function() {
  return this.k;
};
var pd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (s(k) && (k = k.Ca(), s(k))) {
            return new td(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new td(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.m(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.m = a;
  return c;
}();
function ud(a, b, c, d, e, f) {
  this.k = a;
  this.g = b;
  this.root = c;
  this.Q = d;
  this.U = e;
  this.j = f;
  this.o = 8196;
  this.f = 16123663;
}
g = ud.prototype;
g.pa = function() {
  return new vd({}, this.root, this.g, this.Q, this.U);
};
g.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Qb(this);
};
g.A = function(a, b) {
  return C.b(this, b, null);
};
g.B = function(a, b, c) {
  return null == b ? this.Q ? this.U : c : null == this.root ? c : u ? this.root.la(0, I(b), b, c) : null;
};
g.wa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.U ? this : new ud(this.k, this.Q ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new gd;
  b = (null == this.root ? ld : this.root).aa(0, I(b), b, c, a);
  return b === this.root ? this : new ud(this.k, a.W ? this.g + 1 : this.g, b, this.Q, this.U, null);
};
g.Ha = function(a, b) {
  return null == b ? this.Q : null == this.root ? !1 : u ? this.root.la(0, I(b), b, Ib) !== Ib : null;
};
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.A(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
g.D = function(a, b) {
  return Db(b) ? Aa(this, y.a(b, 0), y.a(b, 1)) : Lb.b(ua, this, b);
};
g.toString = function() {
  return db(this);
};
g.C = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Ca() : null;
    return this.Q ? R(new Y(null, 2, 5, Z, [null, this.U], null), a) : a;
  }
  return null;
};
g.G = function() {
  return this.g;
};
g.t = function(a, b) {
  return Yc(this, b);
};
g.F = function(a, b) {
  return new ud(b, this.g, this.root, this.Q, this.U, this.j);
};
g.I = function() {
  return this.k;
};
var cd = new ud(null, 0, null, !1, null, 0);
function tb(a, b) {
  for (var c = a.length, d = 0, e = Wa(cd);;) {
    if (d < c) {
      var f = d + 1, e = e.ya(null, a[d], b[d]), d = f
    } else {
      return Ya(e);
    }
  }
}
function vd(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.U = e;
  this.o = 56;
  this.f = 258;
}
g = vd.prototype;
g.ya = function(a, b, c) {
  return wd(this, b, c);
};
g.za = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.f & 2048 || b.mb || (b.f ? 0 : t(Da, b)) : t(Da, b)) {
        c = wd(this, Rb.d ? Rb.d(b) : Rb.call(null, b), Sb.d ? Sb.d(b) : Sb.call(null, b));
        break a;
      }
      c = K(b);
      for (var d = this;;) {
        var e = M(c);
        if (s(e)) {
          c = P(c), d = wd(d, Rb.d ? Rb.d(e) : Rb.call(null, e), Sb.d ? Sb.d(e) : Sb.call(null, e));
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
g.Aa = function() {
  var a;
  if (this.n) {
    this.n = null, a = new ud(null, this.count, this.root, this.Q, this.U, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.A = function(a, b) {
  return null == b ? this.Q ? this.U : null : null == this.root ? null : this.root.la(0, I(b), b);
};
g.B = function(a, b, c) {
  return null == b ? this.Q ? this.U : c : null == this.root ? c : this.root.la(0, I(b), b, c);
};
g.G = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function wd(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.U !== c && (a.U = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new gd;
      b = (null == a.root ? ld : a.root).ba(a.n, 0, I(b), b, c, d);
      b !== a.root && (a.root = b);
      d.W && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function xd(a, b) {
  this.ma = a;
  this.fa = b;
  this.o = 0;
  this.f = 32374988;
}
g = xd.prototype;
g.v = function() {
  return ob(this);
};
g.S = function() {
  var a = this.ma, a = (a ? a.f & 128 || a.eb || (a.f ? 0 : t(xa, a)) : t(xa, a)) ? this.ma.S(null) : P(this.ma);
  return null == a ? null : new xd(a, this.fa);
};
g.D = function(a, b) {
  return R(b, this);
};
g.toString = function() {
  return db(this);
};
g.N = function(a, b) {
  return V.a(b, this);
};
g.O = function(a, b, c) {
  return V.b(b, c, this);
};
g.C = function() {
  return this;
};
g.P = function() {
  return this.ma.P(null).Ya();
};
g.R = function() {
  var a = this.ma, a = (a ? a.f & 128 || a.eb || (a.f ? 0 : t(xa, a)) : t(xa, a)) ? this.ma.S(null) : P(this.ma);
  return null != a ? new xd(a, this.fa) : O;
};
g.t = function(a, b) {
  return pb(this, b);
};
g.F = function(a, b) {
  return new xd(this.ma, b);
};
g.I = function() {
  return this.fa;
};
function Rb(a) {
  return Ea(a);
}
function Sb(a) {
  return Fa(a);
}
function yd(a, b, c) {
  this.k = a;
  this.ua = b;
  this.j = c;
  this.o = 8196;
  this.f = 15077647;
}
g = yd.prototype;
g.pa = function() {
  return new zd(Wa(this.ua));
};
g.v = function() {
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
g.A = function(a, b) {
  return C.b(this, b, null);
};
g.B = function(a, b, c) {
  return za(this.ua, b) ? b : c;
};
g.call = function() {
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
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.A(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
g.D = function(a, b) {
  return new yd(this.k, ub.b(this.ua, b, null), null);
};
g.toString = function() {
  return db(this);
};
g.C = function() {
  var a = K(this.ua);
  return a ? new xd(a, null) : null;
};
g.G = function() {
  return ta(this.ua);
};
g.t = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.Ab ? !0 : b.f ? !1 : t(Ga, b) : t(Ga, b)) && S(c) === S(b) && oc(function(a) {
    return U.b(c, a, Ib) === Ib ? !1 : !0;
  }, b);
};
g.F = function(a, b) {
  return new yd(b, this.ua, this.j);
};
g.I = function() {
  return this.k;
};
function zd(a) {
  this.ia = a;
  this.f = 259;
  this.o = 136;
}
g = zd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.b(this.ia, c, Ib) === Ib ? null : c;
      case 3:
        return C.b(this.ia, c, Ib) === Ib ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return C.b(this.ia, a, Ib) === Ib ? null : a;
};
g.a = function(a, b) {
  return C.b(this.ia, a, Ib) === Ib ? b : a;
};
g.A = function(a, b) {
  return C.b(this, b, null);
};
g.B = function(a, b, c) {
  return C.b(this.ia, b, Ib) === Ib ? c : b;
};
g.G = function() {
  return S(this.ia);
};
g.za = function(a, b) {
  this.ia = mc.b(this.ia, b, null);
  return this;
};
g.Aa = function() {
  return new yd(null, Ya(this.ia), null);
};
function Xb(a) {
  if (a && (a.o & 4096 || a.ob)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function Ad(a, b, c, d, e, f, h) {
  var k = ga;
  try {
    ga = null == ga ? null : ga - 1;
    if (null != ga && 0 > ga) {
      return D(a, "#");
    }
    D(a, c);
    K(h) && (b.b ? b.b(M(h), a, f) : b.call(null, M(h), a, f));
    for (var l = P(h), m = na.d(f);l && (null == m || 0 !== m);) {
      D(a, d);
      b.b ? b.b(M(l), a, f) : b.call(null, M(l), a, f);
      var p = P(l);
      c = m - 1;
      l = p;
      m = c;
    }
    s(na.d(f)) && (D(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
  } finally {
    ga = k;
  }
}
var Bd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = Q(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = K(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.r(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = K(e)) {
          f = e, Fb(f) ? (e = E(f), h = F(f), f = e, l = S(e), e = h, h = l) : (l = M(f), D(a, l), e = P(f), f = null, h = 0), k = 0;
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
}(), Cd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Dd(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Cd[a];
  })), w('"')].join("");
}
var $ = function Ed(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (u) {
    s(function() {
      var c = U.a(d, la);
      return s(c) ? (c = b ? b.f & 131072 || b.nb ? !0 : b.f ? !1 : t(Ja, b) : t(Ja, b)) ? zb(b) : c : c;
    }()) && (D(c, "^"), Ed(zb(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.ib) {
      return b.qb(c);
    }
    if (b && (b.f & 2147483648 || b.J)) {
      return b.s(null, c, d);
    }
    if (oa(b) === Boolean || "number" === typeof b) {
      return D(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), Fd.m ? Fd.m(qc.a(function(c) {
        return new Y(null, 2, 5, Z, [Yb.d(c), b[c]], null);
      }, Gb(b)), Ed, c, d) : Fd.call(null, qc.a(function(c) {
        return new Y(null, 2, 5, Z, [Yb.d(c), b[c]], null);
      }, Gb(b)), Ed, c, d);
    }
    if (b instanceof Array) {
      return Ad(c, Ed, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return s(ka.d(d)) ? D(c, Dd(b)) : D(c, b);
    }
    if (vb(b)) {
      return Bd.e(c, Q(["#\x3c", "" + w(b), "\x3e"], 0));
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
      return Bd.e(c, Q(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Bd.e(c, Q(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.J || (b.f ? 0 : t(Ua, b)) : t(Ua, b)) ? Va(b, c, d) : u ? Bd.e(c, Q(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
}, Gd = function() {
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
      var e = ha(), f = new ea;
      a: {
        var h = new cb(f);
        $(M(a), h, e);
        a = K(P(a));
        for (var k = null, l = 0, m = 0;;) {
          if (m < l) {
            var p = k.r(null, m);
            D(h, " ");
            $(p, h, e);
            m += 1;
          } else {
            if (a = K(a)) {
              k = a, Fb(k) ? (a = E(k), l = F(k), k = a, p = S(a), a = l, l = p) : (p = M(k), D(h, " "), $(p, h, e), a = P(k), k = null, l = 0), m = 0;
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
function Fd(a, b, c, d) {
  return Ad(c, function(a, c, d) {
    b.b ? b.b(Ea(a), c, d) : b.call(null, Ea(a), c, d);
    D(c, " ");
    return b.b ? b.b(Fa(a), c, d) : b.call(null, Fa(a), c, d);
  }, "{", ", ", "}", d, K(a));
}
xd.prototype.J = !0;
xd.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
jb.prototype.J = !0;
jb.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
Sc.prototype.J = !0;
Sc.prototype.s = function(a, b, c) {
  return Ad(b, $, "[", " ", "]", c, this);
};
cc.prototype.J = !0;
cc.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
q.prototype.J = !0;
q.prototype.s = function(a, b, c) {
  return Fd(this, $, b, c);
};
X.prototype.J = !0;
X.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
sd.prototype.J = !0;
sd.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
Qc.prototype.J = !0;
Qc.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
ud.prototype.J = !0;
ud.prototype.s = function(a, b, c) {
  return Fd(this, $, b, c);
};
yd.prototype.J = !0;
yd.prototype.s = function(a, b, c) {
  return Ad(b, $, "#{", " ", "}", c, this);
};
Y.prototype.J = !0;
Y.prototype.s = function(a, b, c) {
  return Ad(b, $, "[", " ", "]", c, this);
};
Tb.prototype.J = !0;
Tb.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
$c.prototype.J = !0;
$c.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
Ub.prototype.J = !0;
Ub.prototype.s = function(a, b) {
  return D(b, "()");
};
Wb.prototype.J = !0;
Wb.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
td.prototype.J = !0;
td.prototype.s = function(a, b, c) {
  return Ad(b, $, "(", " ", ")", c, this);
};
Y.prototype.Ea = !0;
Y.prototype.Fa = function(a, b) {
  return Kb.a(this, b);
};
Sc.prototype.Ea = !0;
Sc.prototype.Fa = function(a, b) {
  return Kb.a(this, b);
};
W.prototype.Ea = !0;
W.prototype.Fa = function(a, b) {
  return eb(this, b);
};
hb.prototype.Ea = !0;
hb.prototype.Fa = function(a, b) {
  return eb(this, b);
};
var Hd = new W(null, "#who", "#who"), la = new W(null, "meta", "meta"), Id = new W(null, ".back", ".back"), Jd = new W(null, "ul", "ul"), ma = new W(null, "dup", "dup"), u = new W(null, "else", "else"), Kd = new W(null, "#services", "#services"), Ld = new W(null, "h4.title", "h4.title"), Md = new W(null, "#principles", "#principles"), Nd = new W(null, ".box.width2", ".box.width2"), Od = new W(null, "mouseenter", "mouseenter"), gb = new W(null, "default", "default"), Pd = new W(null, ".front", ".front"), 
Qd = new W(null, "li", "li"), Rd = new W(null, "mouseout", "mouseout"), Sd = new W(null, "#menu", "#menu"), Td = new W(null, ".expandable-wrapper", ".expandable-wrapper"), Ud = new W(null, "src", "src"), ja = new W(null, "flush-on-newline", "flush-on-newline"), Vd = new W(null, ".boxs", ".boxs"), Wd = new W(null, "style", "style"), Xd = new W(null, "div", "div"), ka = new W(null, "readably", "readably"), Yd = new W(null, "h4", "h4"), Zd = new W(null, "mouseover", "mouseover"), $d = new W(null, "#about", 
"#about"), ae = new W(null, "#logo", "#logo"), na = new W(null, "print-length", "print-length"), be = new W(null, "class", "class"), ce = new W(null, "mouseleave", "mouseleave"), de = new W(null, "#nav-menu", "#nav-menu"), ee = new W(null, "attrs", "attrs"), fe = new W(null, ".clear", ".clear"), ge = new W(null, "h1", "h1"), he = new W(null, ".content", ".content"), ie = new W(null, "p", "p"), je = new W(null, "span.rainbow-word", "span.rainbow-word"), ke = new W(null, "href", "href"), le = new W(null, 
"img", "img"), me = new W(null, "classes", "classes"), ne = new W(null, "a", "a"), oe = new W(null, "span", "span");
"undefined" !== typeof MessageChannel && new MessageChannel;
function pe(a, b, c) {
  this.key = a;
  this.W = b;
  this.forward = c;
  this.o = 0;
  this.f = 2155872256;
}
pe.prototype.s = function(a, b, c) {
  return Ad(b, $, "[", " ", "]", c, this);
};
pe.prototype.C = function() {
  return ua(ua(O, this.W), this.key);
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var h = 0;;) {
      if (h < c.length) {
        c[h] = null, h += 1;
      } else {
        break;
      }
    }
    return new pe(a, b, c);
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
function qe(a) {
  return a instanceof W ? Pb.a("" + w(a), 1) : a;
}
;var re = function() {
  function a(a, b) {
    return xb.a(w, tc(1, vc.a(uc.d(a), b)));
  }
  function b(a) {
    return xb.a(w, a);
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
function se(a, b) {
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
var ue = function() {
  function a(a, b) {
    var c = te(a), h;
    h = qe(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    if (K(h)) {
      var k = c.classList;
      if (s(k)) {
        h = K(h.split(/\s+/));
        for (var l = null, m = 0, p = 0;;) {
          if (p < m) {
            var r = l.r(null, p);
            k.add(r);
            p += 1;
          } else {
            if (h = K(h)) {
              l = h, Fb(l) ? (h = E(l), p = F(l), l = h, m = S(h), h = p) : (h = M(l), k.add(h), h = P(l), l = null, m = 0), p = 0;
            } else {
              break;
            }
          }
        }
      } else {
        for (k = K(h.split(/\s+/)), h = null, m = l = 0;;) {
          if (m < l) {
            p = h.r(null, m), r = c.className, s(se(r, p)) || (c.className = "" === r ? p : [w(r), w(" "), w(p)].join("")), m += 1;
          } else {
            if (k = K(k)) {
              Fb(k) ? (l = E(k), k = F(k), h = l, l = S(l)) : (h = M(k), l = c.className, s(se(l, h)) || (c.className = "" === l ? h : [w(l), w(" "), w(h)].join("")), k = P(k), h = null, l = 0), m = 0;
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
      a = te(a);
      d = K(rb.a(e, d));
      e = null;
      for (var l = 0, m = 0;;) {
        if (m < l) {
          var p = e.r(null, m);
          b.a(a, p);
          m += 1;
        } else {
          if (d = K(d)) {
            e = d, Fb(e) ? (d = E(e), m = F(e), e = d, l = S(d), d = m) : (d = M(e), b.a(a, d), d = P(e), e = null, l = 0), m = 0;
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
function ve(a) {
  return "string" === typeof a ? a : re.a(" ", qc.a(function(a) {
    var c = T.b(a, 0, null);
    a = T.b(a, 1, null);
    return[w(qe(c)), w(":"), w(qe(a)), w(";")].join("");
  }, a));
}
var we = function() {
  function a(a, b, c) {
    if (s(c)) {
      if (vb(c)) {
        return a = te(a), a[qe(b)] = c, a;
      }
      a = te(a);
      a.setAttributeNS(null, qe(b), G.a(b, Wd) ? ve(c) : c);
      return a;
    }
    return null;
  }
  function b(a, b) {
    return c.b(te(a), b, "true");
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
        throw Error([w("Assert failed: "), w(Gd.e(Q([Vb(new hb(null, "even?", "even?", -1543640034, null), Vb(new hb(null, "count", "count", -1545680184, null), new hb(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      a = te(a);
      d = K(R(new Y(null, 2, 5, Z, [d, e], null), xc.a(2, f)));
      e = null;
      for (p = f = 0;;) {
        if (p < f) {
          var r = e.r(null, p), A = T.b(r, 0, null), r = T.b(r, 1, null);
          c.b(a, A, r);
          p += 1;
        } else {
          if (d = K(d)) {
            Fb(d) ? (f = E(d), d = F(d), e = f, f = S(f)) : (f = M(d), e = T.b(f, 0, null), f = T.b(f, 1, null), c.b(a, e, f), d = P(d), e = null, f = 0), p = 0;
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
  }(), c = function(c, f, h, k) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h);
      default:
        return d.e(c, f, h, Q(arguments, 3));
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
var xe = new yd(null, new q(null, 11, ["polyline", null, "rect", null, "svg", null, "path", null, "g", null, "text", null, "circle", null, "textPath", null, "line", null, "clipPath", null, "polygon", null], null), null), ye = {};
function ze(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = ze[n(null == a ? null : a)];
  if (!b && (b = ze._, !b)) {
    throw v("PElement.-elem", a);
  }
  return b.call(null, a);
}
function Ae(a, b) {
  var c = a.indexOf("#", b), d = a.indexOf(".", b), e = Math.min(c, d);
  return 0 > e ? Math.max(c, d) : e;
}
function Be(a) {
  var b = Pb.a("" + w(a), 1), c = Ae(b, 0);
  a = 0 < c ? b.substring(0, c) : 0 === c ? "div" : u ? b : null;
  a = s(xe.d ? xe.d(a) : xe.call(null, a)) ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a);
  if (0 <= c) {
    for (b = b.substring(c);;) {
      var c = Ae(b, 1), d = 0 <= c ? b.substring(0, c) : b, e = d.charAt(0);
      if (G.a("#", e)) {
        a.setAttribute("id", d.substring(1));
      } else {
        if (G.a(".", e)) {
          ue.a(a, d.substring(1));
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
var Ce = function() {
  function a(a, b) {
    if (b ? s(s(null) ? null : b.T) || (b.$a ? 0 : t(ye, b)) : t(ye, b)) {
      return a.appendChild(ze(b)), a;
    }
    if (null == b ? 0 : b ? b.f & 64 || b.xa || (b.f ? 0 : t(wa, b)) : t(wa, b)) {
      for (var f = K(b), h = null, k = 0, l = 0;;) {
        if (l < k) {
          var m = h.r(null, l);
          c.a(a, m);
          l += 1;
        } else {
          if (f = K(f)) {
            h = f, Fb(h) ? (f = E(h), l = F(h), h = f, k = S(f), f = l) : (f = M(h), c.a(a, f), f = P(h), h = null, k = 0), l = 0;
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
        throw[w("Don't know how to make node from: "), w(Gd.e(Q([b], 0)))].join("");
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
function te(a) {
  return(a ? s(s(null) ? null : a.T) || (a.$a ? 0 : t(ye, a)) : t(ye, a)) ? ze(a) : Ce.d(a);
}
ye.string = !0;
ze.string = function(a) {
  return a instanceof W ? Be(a) : document.createTextNode("" + w(a));
};
ye.number = !0;
ze.number = function(a) {
  return document.createTextNode("" + w(a));
};
Y.prototype.T = !0;
Y.prototype.$ = function() {
  for (var a = T.b(this, 0, null), b = T.b(this, 1, null), c = Ob(this, 2), a = Be(a), d = Cb(b) && !(b ? s(s(null) ? null : b.T) || (b.$a ? 0 : t(ye, b)) : t(ye, b)) ? b : null, b = s(d) ? c : R(b, c), c = K(d), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.r(null, f), k = T.b(h, 0, null), h = T.b(h, 1, null), l = k;
      if (G.a(me, l)) {
        for (var k = K(h), h = null, m = l = 0;;) {
          if (m < l) {
            var p = h.r(null, m);
            ue.a(a, p);
            m += 1;
          } else {
            if (k = K(k)) {
              h = k, Fb(h) ? (k = E(h), m = F(h), h = k, l = S(k), k = m) : (k = M(h), ue.a(a, k), k = P(h), h = null, l = 0), m = 0;
            } else {
              break;
            }
          }
        }
      } else {
        G.a(be, l) ? ue.a(a, h) : u && we.b(a, k, h);
      }
      f += 1;
    } else {
      if (c = K(c)) {
        if (Fb(c)) {
          e = E(c), c = F(c), d = e, e = S(e);
        } else {
          e = M(c);
          d = T.b(e, 0, null);
          e = T.b(e, 1, null);
          f = d;
          if (G.a(me, f)) {
            for (d = K(e), e = null, k = f = 0;;) {
              if (k < f) {
                h = e.r(null, k), ue.a(a, h), k += 1;
              } else {
                if (d = K(d)) {
                  e = d, Fb(e) ? (d = E(e), k = F(e), e = d, f = S(d), d = k) : (d = M(e), ue.a(a, d), d = P(e), e = null, f = 0), k = 0;
                } else {
                  break;
                }
              }
            }
          } else {
            G.a(be, f) ? ue.a(a, e) : u && we.b(a, d, e);
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
  a.appendChild(te(b));
  return a;
};
Text.prototype.T = !0;
Text.prototype.$ = function() {
  return this;
};
Comment.prototype.T = !0;
Comment.prototype.$ = function() {
  return this;
};
Element.prototype.T = !0;
Element.prototype.$ = function() {
  return this;
};
"undefined" !== typeof HTMLElement && (HTMLElement.prototype.T = !0, HTMLElement.prototype.$ = function() {
  return this;
});
"undefined" !== typeof DocumentFragment && (DocumentFragment.prototype.T = !0, DocumentFragment.prototype.$ = function() {
  return this;
});
"undefined" !== typeof Document && (Document.prototype.T = !0, Document.prototype.$ = function() {
  return this;
});
"undefined" !== typeof HTMLDocument && (HTMLDocument.prototype.T = !0, HTMLDocument.prototype.$ = function() {
  return this;
});
"undefined" !== typeof SVGElement && (SVGElement.prototype.T = !0, SVGElement.prototype.$ = function() {
  return this;
});
"undefined" !== typeof Window && (Window.prototype.T = !0, Window.prototype.$ = function() {
  return this;
});
var De = function() {
  function a(a, b) {
    var c = te(a);
    c.appendChild(te(b));
    return c;
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = te(a);
      d = K(R(d, e));
      e = null;
      for (var l = 0, m = 0;;) {
        if (m < l) {
          var p = e.r(null, m);
          b.a(a, p);
          m += 1;
        } else {
          if (d = K(d)) {
            e = d, Fb(e) ? (d = E(e), m = F(e), e = d, l = S(d), d = m) : (d = M(e), b.a(a, d), d = P(e), e = null, l = 0), m = 0;
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
wc(dd, qc.a(function(a) {
  var b = T.b(a, 0, null);
  a = T.b(a, 1, null);
  return new Y(null, 2, 5, Z, [b, new ed([a, function(a) {
    return function(b) {
      var e = b.relatedTarget, f;
      f = b.Db;
      f = s(f) ? f : b.currentTarget;
      s(e) && (e = te(e), f = te(f), e = s(f.contains) ? f.contains(e) : s(f.compareDocumentPosition) ? 0 != (f.compareDocumentPosition(e) & 16) : null);
      return s(e) ? null : a.d ? a.d(b) : a.call(null, b);
    };
  }])], null);
}, new q(null, 2, [Od, Zd, ce, Rd], null)));
var Ee = new Y(null, 6, 5, Z, "Mobile/Web content creation. From idea to full product.;Quick prototype or demo;User Interface Design;Front-end components or modules;Create a quality interactive widget;Jumpstarting a big project".split(";"), null);
function Fe(a, b, c, d, e) {
  return new Y(null, 2, 5, Z, [Td, new Y(null, 4, 5, Z, [Xd, yc.b(a, new Y(null, 1, 5, Z, [be], null), function(a) {
    return[w("card "), w(a)].join("");
  }), new Y(null, 4, 5, Z, [Pd, new Y(null, 2, 5, Z, [le, new q(null, 2, [Ud, d, be, "icon"], null)], null), new Y(null, 2, 5, Z, [Yd, b], null), new Y(null, 2, 5, Z, [ie, c], null)], null), new Y(null, 2, 5, Z, [Id, new Y(null, 2, 5, Z, [ie, e], null)], null)], null)], null);
}
;var Ge = new Y(null, 4, 5, Z, ["About", "Principles", "Blog", "Hire Us"], null);
var Je = te(new Y(null, 3, 5, Z, [Sd, te(new Y(null, 3, 5, Z, [ae, new Y(null, 2, 5, Z, [le, new q(null, 1, [Ud, "assets/imgs/logo.svg"], null)], null), new Y(null, 4, 5, Z, [ge, "Immutable", " ", new Y(null, 2, 5, Z, [je, function He(b) {
  return new X(null, function() {
    for (;;) {
      var c = K(b);
      if (c) {
        if (Fb(c)) {
          var d = E(c), e = S(d), f = new $b(Array(e), 0);
          a: {
            for (var h = 0;;) {
              if (h < e) {
                var k = y.a(d, h), k = T.b(k, 0, null);
                f.add(new Y(null, 2, 5, Z, [oe, k], null));
                h += 1;
              } else {
                d = !0;
                break a;
              }
            }
            d = void 0;
          }
          return d ? dc(f.M(), He(F(c))) : dc(f.M(), null);
        }
        f = M(c);
        f = T.b(f, 0, null);
        return R(new Y(null, 2, 5, Z, [oe, f], null), He(N(c)));
      }
      return null;
    }
  }, null, null);
}("Labs")], null)], null)], null)), new Y(null, 2, 5, Z, [de, function Ie(b) {
  return new X(null, function() {
    for (;;) {
      var c = K(b);
      if (c) {
        if (Fb(c)) {
          var d = E(c), e = S(d), f = new $b(Array(e), 0);
          return function() {
            for (var b = 0;;) {
              if (b < e) {
                var c = y.a(d, b), h = f, p = Z, r = Xd, A = c, c = G.a("Blog", A) ? new Y(null, 3, 5, Z, [ne, new q(null, 1, [ke, "blog.html"], null), c], null) : G.a("Hire Us", A) ? new Y(null, 3, 5, Z, [ne, new q(null, 1, [ke, "mailto:nicholasbardy@gmail.com"], null), c], null) : u ? new Y(null, 3, 5, Z, [ne, yb(new q(null, 1, [ke, [w("#"), w(c.toLowerCase())].join("")], null), new q(null, 1, [ee, !0], null)), c], null) : null;
                h.add(new Y(null, 2, 5, p, [r, c], null));
                b += 1;
              } else {
                return!0;
              }
            }
          }() ? dc(f.M(), Ie(F(c))) : dc(f.M(), null);
        }
        var h = M(c);
        return R(new Y(null, 2, 5, Z, [Xd, function() {
          var b = h;
          return G.a("Blog", b) ? new Y(null, 3, 5, Z, [ne, new q(null, 1, [ke, "blog.html"], null), h], null) : G.a("Hire Us", b) ? new Y(null, 3, 5, Z, [ne, new q(null, 1, [ke, "mailto:nicholasbardy@gmail.com"], null), h], null) : u ? new Y(null, 3, 5, Z, [ne, yb(new q(null, 1, [ke, [w("#"), w(h.toLowerCase())].join("")], null), new q(null, 1, [ee, !0], null)), h], null) : null;
        }()], null), Ie(N(c)));
      }
      return null;
    }
  }, null, null);
}(Ge)], null)], null));
De.a(document.body, Je);
(new Headroom(Je, {tolerance:50, offset:180})).init();
De.a(document.body, function() {
  var a = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  a.setAttribute("id", "intro");
  a.appendChild(function() {
    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "h1");
    a.appendChild(document.createTextNode("We create online solutions for mobile and the web"));
    return a;
  }());
  return a;
}());
De.a(document.body, new Y(null, 4, 5, Z, [$d, new Y(null, 4, 5, Z, [Hd, new Y(null, 2, 5, Z, [Ld, "Who we are"], null), new Y(null, 2, 5, Z, [ie, "Immutable Labs is a software development consultancy. We specialize in creating front-end software for mobile and the web. We hold a strong focus on user experience through carefully crafted and well tested user interface designs. We specialize in Clojure and Clojurescript devopment. However our team is comfortable across many languages, platforms and libraries."], 
null), new Y(null, 1, 5, Z, [fe], null)], null), new Y(null, 3, 5, Z, [Md, new Y(null, 2, 5, Z, [Ld, "Principles"], null), new Y(null, 5, 5, Z, [Vd, new Y(null, 2, 5, Z, [Nd, Fe(new q(null, 1, [be, "usability"], null), "Usability", "Keep it simple", "./assets/imgs/icon_9428.svg", "We immediaely focus on delivering a clean User experience. From the layout the the color scheme, we make sure every details assists in delivering high ease of use.")], null), new Y(null, 2, 5, Z, [Nd, Fe(new q(null, 1, 
[be, "innovation"], null), "Innovation", "Cutting Edge", "./assets/imgs/icon_2465.svg", "Our development team aggressivley embraces new technology. If you looking for a unique solution we would love to embrace the challenge.")], null), new Y(null, 2, 5, Z, [Nd, Fe(new q(null, 1, [be, "compatibility"], null), "Compatibilty", "Works everywhere.", "./assets/imgs/icon_29888.svg", "Technology is everywhere and on countless different devices. Our team has professional experience delivering solutions for devices from TVs to mobile phones. We want to help deliver your content seamless across many devices to all of your customers. Whether they are at their desks or on a bus.")], 
null), new Y(null, 1, 5, Z, [fe], null)], null)], null), new Y(null, 3, 5, Z, [Kd, new Y(null, 2, 5, Z, [Ld, "What we do"], null), new Y(null, 2, 5, Z, [he, xb.b(Pc, Jd, function Ke(b) {
  return new X(null, function() {
    for (;;) {
      var c = K(b);
      if (c) {
        if (Fb(c)) {
          var d = E(c), e = S(d), f = new $b(Array(e), 0);
          a: {
            for (var h = 0;;) {
              if (h < e) {
                var k = y.a(d, h);
                f.add(new Y(null, 2, 5, Z, [Qd, k], null));
                h += 1;
              } else {
                d = !0;
                break a;
              }
            }
            d = void 0;
          }
          return d ? dc(f.M(), Ke(F(c))) : dc(f.M(), null);
        }
        f = M(c);
        return R(new Y(null, 2, 5, Z, [Qd, f], null), Ke(N(c)));
      }
      return null;
    }
  }, null, null);
}(Ee))], null)], null)], null));

})();
