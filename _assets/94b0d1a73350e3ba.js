(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [35024],
  {
    /***/ 290881: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(621815);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var OI = __c.OI;
        var Jc = __c.Jc;
        var R = __c.R;
        var TI = __c.TI;
        var Gg = __c.Gg;
        var cv = __c.cv;
        var D = __c.D;
        var F = __c.F;
        var O = __c.O;
        var lz = __c.lz;
        var T4 = function () {
            const [a] = (0, __c.ec)(() => lz());
            return a;
          },
          pOb = function (a) {
            switch (a) {
              case 4:
                return O("9ND0kg");
              case 2:
                return O("ibdecg");
              case 7:
                return O("446quA");
              case 5:
                return O("j1fbqg");
              case 1:
                return O("O5i4AQ");
              case 6:
                return O("C0VHsg");
              case 3:
                return O("+IXmVg");
              default:
                throw new F(a);
            }
          },
          qOb = function (a, b, c) {
            const d = [a];
            for (; null != a && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          rOb = function (a) {
            return (b) => ({ type: "react", node: (0, __c.N)(a, { ...b }) });
          },
          tOb = function (a) {
            var b,
              c = a.Pz,
              d = a.content;
            a = a.context;
            __c.B(
              "formula" ===
                (null === d || void 0 === d
                  ? void 0
                  : null === (b = d.tg) || void 0 === b
                  ? void 0
                  : b.type)
            );
            b = d.tg.value;
            switch (b.type) {
              case "invalid":
                b = b.Fca;
                break;
              case "canonical":
                b = b.hL;
                break;
              default:
                throw new F(b);
            }
            __c.B(b.startsWith("="));
            const e = d.Uo;
            b = { type: "dom", render: (h) => (h.innerText = "") };
            let f;
            switch (e.type) {
              case 8:
                f = b;
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 5:
              case 6:
              case 7:
                f = sOb(c, a, d.yA);
                break;
              case 0:
                f = {
                  type: "react",
                  node: U4(__c.rS, {
                    label: pOb(e.error),
                    children: U4(__c.pA, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: U4(__c.vrb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new F(e);
            }
            if (!f) return b;
            c = __c.Yf(__c.CQ, a.attrs);
            d = __c.NI(a.attrs.textAlign, "formula", void 0, () => e.type);
            const g = {
              textAlign: __c.TFa(d, c.direction),
              justifyContent: __c.UFa(d),
              width: "100%",
            };
            switch (f.type) {
              case "dom":
                return {
                  type: "dom",
                  render: (h) => {
                    const k = document.createElement("div");
                    Object.assign(k.style, g);
                    f.render(k);
                    h.innerHTML = "";
                    h.appendChild(k);
                  },
                };
              case "react":
                return {
                  type: "react",
                  node: U4("div", { style: g, children: f.node }),
                };
              default:
                throw new F(f);
            }
          },
          sOb = function (a, b, c) {
            var d;
            return null === (d = a.aha) || void 0 === d
              ? void 0
              : d.call(a, { context: b, value: c });
          },
          wOb = function (a) {
            const b = a.Pz,
              c = a.pf;
            a = a.Whb;
            b.aha = __c.eGa;
            b.lza = (d) => tOb({ ...d, Pz: b });
            b.mza = rOb(uOb({ pf: c, GP: void 0 }));
            b.oza = vOb(a);
            b.pza = rOb(V4);
          },
          xOb = function ({ label: a, width: b, height: c, scale: d, sCa: e }) {
            return U4("div", {
              style: { width: b, height: c, transform: `scale(${d})` },
              className: "bx74uQ",
              children: U4(__c.mA, {
                className: W4("ivlMMQ", X4(e)),
                size: "small",
                alignment: "center",
                children: a,
              }),
            });
          },
          X4 = function (a) {
            return {
              _2BX0vg: "primary-default" === a,
              JfW_Cg: "primary-low" === a,
              isMgNg: "primary-active" === a,
              xwWDeQ: "secondary-default" === a,
              w0EyUQ: "secondary-low" === a,
              _8p5AIA: "secondary-active" === a,
            };
          },
          zOb = function ({ Cd: a, rHa: b, scale: c, cp: d, ep: e, JUa: f }) {
            const g = Y4(() => {
                const m = null === d || void 0 === d ? void 0 : d.get();
                if (null != m && 0 !== m.length) return new __c.uF(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return U4(__c.nA, {
              mq: "light",
              light: "light",
              kt: "light",
              dark: "light",
              children: (m) =>
                U4("div", {
                  className: W4("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: U4("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: W4("N7J3UA", l),
                    ref: null === g || void 0 === g ? void 0 : g.Xl,
                    children: U4(__c.xS, {
                      className: W4("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: O("ruWN9A"),
                      children: U4(yOb, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          BOb = function () {
            const a = new AOb(),
              b = new __c.PS(),
              c = Z4((f) => {
                const {
                    scale: g = 1,
                    mHa: h,
                    size: k = "small",
                    JUa: l = !0,
                  } = f,
                  m = $4((n) => a.ep({ scale: n, size: k, sqa: h }), [k, h]);
                return U4(zOb, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Cd: "rtl" === f.sheet.direction,
                  rHa: null != f.selection && a.T8a(f.sheet, f.selection),
                  ep: m,
                  JUa: l,
                });
              }),
              d = Z4((f) => {
                const {
                    scale: g = 1,
                    mHa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Afb: n,
                  } = f,
                  p = $4((v) => a.ep({ scale: v, size: k, sqa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = $4((v) => null != m && a.oua(m).has(v), [m]),
                  t = $4((v) => null != m && a.P6a(l, m).has(v), [l, m]),
                  u = $4(
                    (v) => {
                      const x =
                        null != n &&
                        0 <= l.layout.cols.Ne(v, n.Xb) &&
                        0 >= l.layout.cols.Ne(v, n.Kc);
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return U4(a5, { ...f, Ed: g, Ud: q, ep: p, FE: u, tF: b });
              }),
              e = Z4((f) => {
                const {
                    scale: g = 1,
                    mHa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Afb: n,
                  } = f,
                  p = $4((v) => a.ep({ scale: v, size: k, sqa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = $4((v) => null != m && a.qua(m).has(v), [m]),
                  t = $4((v) => null != m && a.Q6a(l, m).has(v), [l, m]),
                  u = $4(
                    (v) => {
                      const x =
                        null != n &&
                        0 <= l.layout.rows.Ne(v, n.bc) &&
                        0 >= l.layout.rows.Ne(v, n.ad);
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return U4(b5, { ...f, Ed: q, Ud: g, ep: p, FE: u, tF: b });
              });
            return { lVa: c, kVa: d, mVa: e };
          },
          COb = function (a) {
            const b = a.Vp,
              c = () => null;
            return __c.vz((d) => U4(c5, { ...d, Vp: b, qh: c }));
          },
          DOb = function ({ sheet: a, Y: b, range: c, Pd: d }) {
            d5(
              () =>
                e5(() => {
                  if (null != d.current) {
                    var e,
                      f =
                        null !==
                          (e = null === b || void 0 === b ? void 0 : b.get()) &&
                        void 0 !== e
                          ? e
                          : 1;
                    e = "rtl" === a.direction;
                    e = c ? a.za(c.Xb) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.Aa(c.bc) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          GOb = function ({ onScroll: a }) {
            const b = new EOb(a);
            return {
              xC: b,
              Lga: Z4((c) =>
                U4(FOb, { sheet: c.sheet, xC: b, children: c.children })
              ),
            };
          },
          JOb = function (a) {
            const b = a.Vp,
              c = a.Te,
              d = a.AQa,
              e = ({ children: k }) => k,
              { xC: f, Lga: g } = GOb({ onScroll: a.onScroll });
            class h extends HOb {
              get PK() {
                const k = this.props.na.Sx;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new F(k);
                }
              }
              componentDidMount() {
                d.qQa(this.props.item, {
                  Wb: this.props.Wb,
                  na: this.props.na,
                });
              }
              componentWillUnmount() {
                d.x_a(this.props.item, {
                  Wb: this.props.Wb,
                  na: this.props.na,
                });
              }
              render() {
                d.qQa(this.props.item, {
                  Wb: this.props.Wb,
                  na: this.props.na,
                });
                return U4(IOb, {
                  ...this.props,
                  Y: this.Y,
                  Vp: b,
                  PK: this.PK,
                  qh: this.qh,
                  AQa: d,
                  xC: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.Y = f5(() => {
                  const l = this.props.item;
                  var m = this.props.na,
                    n = m.Sx;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return 1;
                    case "print":
                      n = d.d6a(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.MF(l, n.Wb, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new F(n);
                  }
                });
                this.qh = Z4((l) =>
                  U4("div", {
                    className: "wKvivQ",
                    children: U4(__c.lGa, { ...this.props, ...l, Te: c }),
                  })
                );
              }
            }
            return { gXa: h, xC: f };
          },
          KOb = function (a, b) {
            if (
              null != b &&
              null != b.Xb &&
              null != b.bc &&
              null != b.Kc &&
              null != b.ad
            ) {
              var c = a.za(b.Xb),
                d = a.Aa(b.bc),
                e = a.za(b.Kc) + b.Kc.width - c;
              a = a.Aa(b.ad) + b.ad.height - d;
              return __c.Bv({ top: d, left: c, width: e, height: a });
            }
          },
          MOb = function (a) {
            const b = a.Vp,
              c = () => null;
            return (d) => U4(LOb, { ...d, Vp: b, qh: c });
          },
          QOb = function (a, b, c, d, e, f) {
            if (0 === d.length || 0 === e.length) return [];
            const g = NOb(b, c, d, e);
            f = OOb(b, c, d, e, f);
            const h = POb(a, b, c, d, e),
              k = a.$5a(b),
              l = a.u5a(b),
              m = "rtl" === b.direction;
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.chb,
                  t = n.$la,
                  u = n.iPa;
                const v = n.color,
                  x = n.weight;
                n = n.kc;
                const y = m ? -1 : 1,
                  z =
                    null === (p = h.get(g5(r, u))) || void 0 === p
                      ? void 0
                      : p.Sa;
                p =
                  null === (q = h.get(g5(t, u))) || void 0 === q
                    ? void 0
                    : q.za;
                if (null != z && null != p) {
                  q = D(k.get(u.ua));
                  var A = D(l.get(r.column));
                  r = D(l.get(t.column));
                  u = "start" === u.boundary ? q.start : q.end;
                  q = A.start;
                  t = "start" === t.boundary ? r.start : r.end;
                  return {
                    color: v,
                    weight: x,
                    kc: n,
                    p1: new cv(q + z * y, u),
                    p2: new cv(t + p * y, u),
                    ...__c.VI((t - q) * y, n * x, z),
                  };
                }
              })
              .filter(__c.zb);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.jCa,
                    t = n.mhb,
                    u = n.cma;
                  const v = n.color,
                    x = n.weight;
                  n = n.kc;
                  const y =
                    null === (p = h.get(g5(r, t))) || void 0 === p
                      ? void 0
                      : p.La;
                  p =
                    null === (q = h.get(g5(r, u))) || void 0 === q
                      ? void 0
                      : q.Aa;
                  if (null != y && null != p) {
                    q = D(l.get(r.column));
                    var z = D(k.get(t.ua));
                    t = D(k.get(u.ua));
                    r = "start" === r.boundary ? q.start : q.end;
                    q = z.start;
                    u = "start" === u.boundary ? t.start : t.end;
                    return {
                      color: v,
                      weight: x,
                      kc: n,
                      p1: new cv(r, q + y),
                      p2: new cv(r, u + p),
                      ...__c.VI(u - q, n * x, y),
                    };
                  }
                })
                .filter(__c.zb),
              ...a,
            ];
          },
          ROb = function (a) {
            const b = [];
            a = a.filter((c) => 0 !== c.weight && null != c.color);
            a = __c.nd(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.nd(d, (e) => `${e.Uj}_${e.Vj}`);
              for (const [, e] of a) {
                const { Vj: f, Uj: g } = e[0];
                a = __c.nd(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Uj: g, Vj: f });
              }
            }
            return b;
          },
          TOb = function (a, b, c, d) {
            var e = SOb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { ua: k, boundary: "start" },
                      { ua: k, boundary: "end" },
                    ]
                  : [{ ua: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.zQa.Yeb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = QOb(e, a, h, f, g, d);
            return ROb(c);
          },
          NOb = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.ua;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  ("start" === k.boundary ? g.span.bc === c : g.span.ad === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      "start" === k.boundary
                        ? null === c || void 0 === c
                          ? void 0
                          : c.Aa
                        : null === c || void 0 === c
                        ? void 0
                        : c.La))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: D(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.$la),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.iPa),
                      (h = h.ua === k.ua && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.kc === c.kc &&
                    0 === g.kc
                      ? (g.$la = f)
                      : e.push({
                          iPa: k,
                          chb: l,
                          $la: f,
                          color: c.color,
                          weight: c.weight,
                          kc: c.kc,
                        });
                  }
              }
            return e;
          },
          OOb = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.ua,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  ("start" === l.boundary ? d.span.Xb === h : d.span.Kc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      "start" === l.boundary
                        ? null === d || void 0 === d
                          ? void 0
                          : d.za
                        : null === d || void 0 === d
                        ? void 0
                        : d.Sa) &&
                      ("start" !== l.boundary || 1 !== e(g, h)))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { ua: g, boundary: "start" }
                      : { ua: D(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.jCa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.cma),
                      (k = k.ua === m.ua && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.kc === d.kc &&
                    0 === h.kc
                      ? (h.cma = g)
                      : f.push({
                          jCa: l,
                          mhb: m,
                          cma: g,
                          color: d.color,
                          weight: d.weight,
                          kc: d.kc,
                        });
                  }
              }
            return f;
          },
          POb = function (a, b, c, d, e) {
            const f = a.zQa.y0a(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                u = f.get(r) || 0;
              return t <= u ? q : r;
            };
            const g = new Map();
            if (0 === d.length || 0 === e.length) return g;
            var h = [],
              k = b.layout.cols.Jc(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.Jc(d[0].ua)) &&
              e.push({ ua: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].ua)) &&
              e.push({ ua: d, boundary: "start" });
            for (const q of h) {
              h = (d = "start" === q.boundary ? q.column : void 0)
                ? b.layout.cols.Jc(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = "start" === r.boundary ? r.ua : void 0;
                k = l ? b.layout.rows.Jc(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  "end" === q.boundary
                    ? null === l || void 0 === l
                      ? void 0
                      : l.Sa
                    : null === m || void 0 === m
                    ? void 0
                    : m.za;
                m =
                  "end" === r.boundary
                    ? null === n || void 0 === n
                      ? void 0
                      : n.La
                    : null === m || void 0 === m
                    ? void 0
                    : m.Aa;
                n =
                  "end" === q.boundary
                    ? null === p || void 0 === p
                      ? void 0
                      : p.Sa
                    : null === n || void 0 === n
                    ? void 0
                    : n.za;
                l =
                  "end" === r.boundary
                    ? null === p || void 0 === p
                      ? void 0
                      : p.La
                    : null === l || void 0 === l
                    ? void 0
                    : l.Aa;
                p = __c.sGa({ Aa: n, La: k, za: l, Sa: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: u, width: v } =
                  1 === (null === t || void 0 === t ? void 0 : t.kc)
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (null === l || void 0 === l ? void 0 : l.weight) || 0,
                          (null === m || void 0 === m ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (null === n || void 0 === n ? void 0 : n.weight) || 0,
                          (null === k || void 0 === k ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(g5(q, r), __c.QI(p, u / 2, v / 2));
              }
            }
            return g;
          },
          h5 = function (a, b, c, d, e) {
            if (a && b) {
              var f = b.St ? (a.St ? void 0 : a) : b;
              return __c.SI(
                b.borderStyle,
                a.borderStyle,
                d,
                c,
                e,
                null === f || void 0 === f ? void 0 : f.borderStyle
              );
            }
            return null !==
              (f = null === a || void 0 === a ? void 0 : a.borderStyle) &&
              void 0 !== f
              ? f
              : null === b || void 0 === b
              ? void 0
              : b.borderStyle;
          },
          UOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ c6: void 0, zQ: void 0, g6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.pj.color, weight: a.pj.weight, kc: TI(a.pj.Yd) };
              if (!g) return a.Dm ? void 0 : { borderStyle: b, St: !0 };
              c = i5(g.c6);
              d = j5(g.zQ);
              g = k5(g.g6);
              return null == c && null == d && null == g
                ? a.Dm
                  ? void 0
                  : { borderStyle: b, St: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? TI(g) : b.kc,
                    },
                    St: !1,
                  };
            }
          },
          VOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ b6: void 0, yQ: void 0, f6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.pj.color, weight: a.pj.weight, kc: TI(a.pj.Yd) };
              if (!g) return a.Dm ? void 0 : { borderStyle: b, St: !0 };
              c = i5(g.b6);
              d = j5(g.yQ);
              g = k5(g.f6);
              return null == c && null == d && null == g
                ? a.Dm
                  ? void 0
                  : { borderStyle: b, St: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? TI(g) : b.kc,
                    },
                    St: !1,
                  };
            }
          },
          WOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ e6: void 0, BQ: void 0, j6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.pj.color, weight: a.pj.weight, kc: TI(a.pj.Yd) };
              if (!g) return a.Dm ? void 0 : { borderStyle: b, St: !0 };
              c = i5(g.e6);
              d = j5(g.BQ);
              g = k5(g.j6);
              return null == c && null == d && null == g
                ? a.Dm
                  ? void 0
                  : { borderStyle: b, St: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? TI(g) : b.kc,
                    },
                    St: !1,
                  };
            }
          },
          XOb = function (a, b, c) {
            var d = b && c && a.layout.cells.get(c, b),
              e,
              f,
              g =
                b && c
                  ? a.layout.attrs.get(
                      Gg({ d6: void 0, AQ: void 0, i6: void 0 }),
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.bc) &&
                        void 0 !== e
                        ? e
                        : c,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== f
                        ? f
                        : b
                    ) || {}
                  : void 0;
            if (b && c) {
              b = { color: a.pj.color, weight: a.pj.weight, kc: TI(a.pj.Yd) };
              if (!g) return a.Dm ? void 0 : { borderStyle: b, St: !0 };
              c = i5(g.d6);
              d = j5(g.AQ);
              g = k5(g.i6);
              return null == c && null == d && null == g
                ? a.Dm
                  ? void 0
                  : { borderStyle: b, St: !0 }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : b.color,
                      weight: null !== d && void 0 !== d ? d : b.weight,
                      kc: g ? TI(g) : b.kc,
                    },
                    St: !1,
                  };
            }
          },
          i5 = function (a) {
            return null == a || "inherit" === a ? void 0 : a;
          },
          j5 = function (a) {
            return null == a || "inherit" === a
              ? void 0
              : Number(a.split("px")[0]);
          },
          k5 = function (a) {
            return null == a || "inherit" === a
              ? void 0
              : a
                  .split(" ")
                  .map((b) => {
                    b = Number(b);
                    return 0 < b ? b : void 0;
                  })
                  .filter(__c.zb);
          },
          l5 = function (a, b, c) {
            let d = 0;
            for (; null != a && a !== b; ) (a = c.next(a)) && d++;
            return d;
          },
          YOb = function (a, b) {
            return (
              (null === a || void 0 === a ? void 0 : a.La) ===
                (null === b || void 0 === b ? void 0 : b.La) &&
              (null === a || void 0 === a ? void 0 : a.Aa) ===
                (null === b || void 0 === b ? void 0 : b.Aa) &&
              (null === a || void 0 === a ? void 0 : a.Sa) ===
                (null === b || void 0 === b ? void 0 : b.Sa) &&
              (null === a || void 0 === a ? void 0 : a.za) ===
                (null === b || void 0 === b ? void 0 : b.za)
            );
          },
          aPb = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { JBa: b, yv: b, Ga: {}, zv: {} },
              d = m5(
                () => a.lG.style || c,
                (g) => {
                  var h;
                  Object.assign(a.I6.style, g.JBa);
                  Object.assign(a.LQ.style, g.yv);
                  Object.assign(a.sH.style, g.Ga);
                  Object.assign(a.TD.style, g.zv);
                  g =
                    null === g || void 0 === g
                      ? void 0
                      : null === (h = g.Ga) || void 0 === h
                      ? void 0
                      : h.textDecoration;
                  a.sH.classList.toggle("OQx3PQ", "underline" === g);
                  a.sH.classList.toggle("_99ezUA", "line-through" === g);
                  a.sH.classList.toggle(
                    "kppAqQ",
                    "underline line-through" === g
                  );
                },
                { fireImmediately: !0, equals: ZOb }
              ),
              e = m5(
                () => a.s_ && a.IIa,
                (g) => {
                  a.sH.classList.toggle("_84KvRA", !g);
                  a.I6.classList.toggle("_84KvRA", !g);
                },
                { fireImmediately: !0 }
              ),
              f = m5(
                () => a.renderer,
                (g) => {
                  a.q7 &&
                  "react" !== (null === g || void 0 === g ? void 0 : g.type)
                    ? ((a.q7 = void 0), a.w1.remove())
                    : (a.TD.innerHTML = "");
                  switch (null === g || void 0 === g ? void 0 : g.type) {
                    case "react":
                      a.q7 = $Ob(g.node, a.w1);
                      a.TD.appendChild(a.w1);
                      break;
                    case "dom":
                      g.render(a.TD);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new F(g);
                  }
                  a.fra();
                },
                { fireImmediately: !0 }
              );
            return () => {
              d();
              e();
              f();
            };
          },
          ZOb = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          cPb = function (a) {
            const b = a.Qz,
              c = a.fD,
              d = a.eUa,
              e = new bPb(a.B2);
            return (f) =>
              U4(n5, {
                ...f,
                fD: c,
                Qz: b,
                Moa: e,
                eUa: null === d || void 0 === d ? void 0 : d.get(),
              });
          },
          uOb =
            ({ pf: a, GP: b }) =>
            (c) =>
              (0, __c.N)(__c.skb, { ...c, pf: a, GP: b }),
          o5 = __webpack_require__(443763),
          dPb = o5.Fragment,
          U4 = o5.jsx,
          p5 = o5.jsxs;
        var Z4 = __webpack_require__(214645).Pi;
        var q5 = __webpack_require__(875604),
          r5 = q5.Component,
          HOb = q5.PureComponent,
          $4 = q5.useCallback,
          ePb = q5.useDeferredValue,
          d5 = q5.useEffect,
          fPb = q5.useLayoutEffect,
          Y4 = q5.useMemo,
          s5 = q5.useRef,
          gPb = q5.useState;
        var t5 = __webpack_require__(519427),
          u5 = t5.action,
          e5 = t5.autorun,
          v5 = t5.comparer,
          f5 = t5.computed,
          hPb = t5.createAtom,
          w5 = t5.observable,
          m5 = t5.reaction,
          iPb = t5.untracked;
        var x5 = __webpack_require__(46239).gn;
        var jPb = __webpack_require__,
          kPb = jPb(993864),
          W4 = jPb.n_x(kPb)();
        var lPb = __webpack_require__(358579).Z;
        var y5 = __webpack_require__(635872),
          z5 = y5.Om,
          A5 = y5.kq,
          mPb = y5.YN;
        var $Ob = __webpack_require__(204358).createPortal;
        var nPb = Z4((a) => {
            var b,
              c,
              d = "rtl" === a.sheet.direction;
            d = { H2wykw: !d, UweldA: d };
            const [e] = gPb(() => lz()),
              f = {
                get: $4(() => {
                  var g;
                  const h =
                    null === e || void 0 === e
                      ? void 0
                      : null === (g = e.current) || void 0 === g
                      ? void 0
                      : g.getBoundingClientRect();
                  var k, l;
                  g = {
                    top: 0,
                    left: 0,
                    width:
                      null !==
                        (k = null === h || void 0 === h ? void 0 : h.width) &&
                      void 0 !== k
                        ? k
                        : 0,
                    height:
                      null !==
                        (l = null === h || void 0 === h ? void 0 : h.height) &&
                      void 0 !== l
                        ? l
                        : 0,
                  };
                  return __c.Bv(g);
                }, [e]),
              };
            return p5("div", {
              className: W4("nMvVqA", d),
              children: [
                p5("div", {
                  ref: lPb(a.Pd, e),
                  className: "_0YOFPg",
                  children: [
                    U4(a.Vp, { ...a, viewport: f }),
                    U4("div", {
                      className: W4("Gdl7fQ", d),
                      children:
                        null === (c = a.Hya) || void 0 === c
                          ? void 0
                          : null === (b = c.get()) || void 0 === b
                          ? void 0
                          : b.map((g, h) => U4(g, {}, h)),
                    }),
                  ],
                }),
                "visible" === a.Rtb &&
                  p5(dPb, {
                    children: [
                      U4("div", {
                        className: W4("_32sKQw", d),
                        children: U4(a.dXa, { ...a }),
                      }),
                      U4("div", {
                        className: W4("xdIsTQ", d),
                        children: U4(a.hXa, { ...a }),
                      }),
                      U4("div", {
                        className: W4("rsTRSA", d),
                        children: U4(a.fXa, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          oPb = Z4((a) => {
            a = a.content;
            __c.w("text2" === a.type || "text3" === a.type);
            switch (a.type) {
              case "text2":
                return a.value.ba;
              case "text3":
                return __c.Xq.ra(a.value).cells.ba();
              default:
                throw new F(a);
            }
          });
        var vOb = (a) =>
            __c.RFa((b, c) => {
              const d = b.content;
              b = b.context;
              if (d.value.isEmpty) for (; c.lastChild; ) c.lastChild.remove();
              else
                ({ ui: b } = __c.Yf(__c.Fg, b.attrs)),
                  "wrap" === b &&
                    ((c = c.appendChild(document.createElement("div"))),
                    (c.className = "dt4Dlg")),
                  a.render({
                    container: c,
                    text: d.value,
                    Ma: void 0,
                    writingMode: 1,
                    Fd: "start",
                    qg: pPb(d, b),
                  });
            }),
          pPb = z5(
            (a, b) => {
              if ("wrap" === b) return [];
              a = a.value.ba.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: v5.structural }
          );
        var V4 = class extends r5 {
          static j(a) {
            R(a, { ui: f5 });
          }
          constructor(...a) {
            super(...a);
            V4.j(this);
          }
          get ui() {
            return __c.Yf(__c.Fg, this.props.context.attrs).ui;
          }
          render() {
            var a = this.props.content;
            const b = this.props.context;
            if (a.value.isEmpty) return null;
            a = U4(this.props.qh, {
              content: a,
              ua: b.container.ua,
              col: b.container.column,
              ui: this.ui,
            });
            return "wrap" === this.ui
              ? U4("div", { className: "dt4Dlg", children: a })
              : a;
          }
        };
        V4 = x5([Jc], V4);
        var AOb = class {
          ep({ size: a, scale: b, sqa: c }) {
            b = c ? Math.max(c, b) : b;
            return "large" === a ? __c.S_ * b : __c.FAb * b;
          }
          constructor() {
            this.T8a = z5((a, b) => {
              var c, d;
              b = b.get();
              return (
                null != b &&
                a.layout.rows.count() ===
                  ((null === (c = b.rows) || void 0 === c ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  ((null === (d = b.columns) || void 0 === d
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.oua = A5(
              (a) => {
                var b;
                return new Set(
                  (null === (b = a.get()) || void 0 === b
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.es }
            );
            this.qua = A5(
              (a) => {
                var b;
                return new Set(
                  (null === (b = a.get()) || void 0 === b ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.es }
            );
            this.P6a = z5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (0 < this.qua(b).size) return new Set(a.layout.cols);
                b = this.oua(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ua, e.column);
                  for (const f of qOb(
                    c ? c.span.Xb : e.column,
                    c ? c.span.Kc : e.column,
                    a.layout.cols
                  ))
                    (0 === b.size || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.es }
            );
            this.Q6a = z5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (0 < this.oua(b).size) return new Set(a.layout.rows);
                b = this.qua(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ua, e.column);
                  for (const f of qOb(
                    c ? c.span.bc : e.ua,
                    c ? c.span.ad : e.ua,
                    a.layout.rows
                  ))
                    (0 === b.size || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.es }
            );
          }
        };
        var qPb = parseInt("4px", 10) || 4,
          a5 = class extends r5 {
            static j(a) {
              R(a, { Cd: f5, zq: f5, d3: f5 });
            }
            get Cd() {
              return "rtl" === this.props.sheet.direction;
            }
            get zq() {
              var a;
              const b =
                null === (a = this.props.cp) || void 0 === a ? void 0 : a.get();
              if (null != b && 0 !== b.length) return new __c.uF(b);
            }
            get d3() {
              var a, b, c;
              return null === (b = (c = this.props).jna) || void 0 === b
                ? void 0
                : null === (a = b.call(c)) || void 0 === a
                ? void 0
                : a.get();
            }
            render() {
              return U4(__c.nA, {
                mq: "light",
                light: "light",
                kt: "light",
                dark: "light",
                children: this.M_a,
              });
            }
            constructor(...a) {
              super(...a);
              a5.j(this);
              this.onMouseMove = u5((b) => {
                const { onMouseMove: c, sheet: d, Ed: e = 1 } = this.props;
                null === c || void 0 === c ? void 0 : c(b, d, "column", e);
              });
              this.onMouseLeave = u5((b) => {
                var c, d;
                null === (c = (d = this.props).onMouseLeave) || void 0 === c
                  ? void 0
                  : c.call(d, b);
              });
              this.LOa = (b, c, d) => {
                const {
                    sheet: e,
                    ep: f,
                    FE: g,
                    Ed: h = 1,
                    Ud: k = 1,
                  } = this.props,
                  l = { jNbTIg: !this.Cd, gtA7Dw: this.Cd },
                  m = (null === d || void 0 === d ? 0 : d.sticky)
                    ? this.Cd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var n;
                const p = (null === d || void 0 === d ? 0 : d.sticky)
                  ? null !== (n = this.d3) && void 0 !== n
                    ? n
                    : m
                  : void 0;
                let q = -1;
                return p5("div", {
                  style: p,
                  className: W4("Vt2_4w", l, {
                    Tn3nUw: null === d || void 0 === d ? void 0 : d.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    e.layout.cols.map((r) => {
                      q++;
                      if (
                        !(
                          (b && 0 > e.layout.cols.Ne(r, b)) ||
                          (c && 0 < e.layout.cols.Ne(r, c))
                        )
                      )
                        return U4(
                          rPb,
                          {
                            col: r,
                            label: __c.sC(q),
                            ep: f,
                            FE: g,
                            Ed: h,
                            Ud: k,
                          },
                          r.id
                        );
                    }),
                    (null === d || void 0 === d ? void 0 : d.sticky) &&
                      U4("div", {
                        style: { width: qPb * h },
                        className: W4("HBvlug", "ru3tFQ", l),
                      }),
                  ],
                });
              };
              this.M_a = (b) => {
                var c;
                const d = this.props.sheet,
                  e = d.view.freeze.uH
                    ? d.layout.Id.get(d.view.freeze.uH)
                    : void 0,
                  f = { jNbTIg: !this.Cd, gtA7Dw: this.Cd };
                return p5("div", {
                  ref: null === (c = this.zq) || void 0 === c ? void 0 : c.Xl,
                  className: W4("xhBZaw", f, b.className),
                  children: [
                    e && this.LOa(void 0, e, { sticky: !0 }),
                    this.LOa(e ? d.cols.next(e) : void 0),
                  ],
                });
              };
            }
          };
        a5 = x5([Jc], a5);
        var b5 = class extends r5 {
          static j(a) {
            R(a, { Cd: f5, zq: f5, d3: f5 });
          }
          get Cd() {
            return "rtl" === this.props.sheet.direction;
          }
          get zq() {
            var a;
            const b =
              null === (a = this.props.cp) || void 0 === a ? void 0 : a.get();
            if (null != b && 0 !== b.length) return new __c.uF(b);
          }
          get d3() {
            var a, b, c;
            return null === (b = (c = this.props).jna) || void 0 === b
              ? void 0
              : null === (a = b.call(c)) || void 0 === a
              ? void 0
              : a.get();
          }
          render() {
            return U4(__c.nA, {
              mq: "light",
              light: "light",
              kt: "light",
              dark: "light",
              children: this.nfb,
            });
          }
          constructor(...a) {
            super(...a);
            b5.j(this);
            this.onMouseMove = u5((b) => {
              const { onMouseMove: c, sheet: d, Ud: e = 1 } = this.props;
              null === c || void 0 === c ? void 0 : c(b, d, "row", e);
            });
            this.onMouseLeave = u5((b) => {
              var c, d;
              null === (c = (d = this.props).onMouseLeave) || void 0 === c
                ? void 0
                : c.call(d, b);
            });
            this.POa = (b, c, d) => {
              const {
                  sheet: e,
                  ep: f,
                  FE: g,
                  Ed: h = 1,
                  Ud: k = 1,
                } = this.props,
                l = { jNbTIg: !this.Cd, gtA7Dw: this.Cd },
                m = (null === d || void 0 === d ? 0 : d.sticky)
                  ? { top: 0 }
                  : void 0;
              var n;
              const p = (null === d || void 0 === d ? 0 : d.sticky)
                ? null !== (n = this.d3) && void 0 !== n
                  ? n
                  : m
                : void 0;
              let q = -1;
              return p5("div", {
                style: p,
                className: W4("_93roJg", l, {
                  Tn3nUw: null === d || void 0 === d ? void 0 : d.sticky,
                }),
                onMouseMove: this.onMouseMove,
                onMouseLeave: this.onMouseLeave,
                children: [
                  e.rows.map((r) => {
                    q++;
                    if (
                      !(
                        (b && 0 > e.rows.Ne(r, b)) ||
                        (c && 0 < e.rows.Ne(r, c))
                      )
                    )
                      return U4(
                        sPb,
                        {
                          ua: r,
                          label: `${q + 1}`,
                          FE: g,
                          ep: f,
                          Ed: h,
                          Ud: k,
                        },
                        r.id
                      );
                  }),
                  (null === d || void 0 === d ? void 0 : d.sticky) &&
                    U4("div", {
                      style: { height: qPb * k },
                      className: W4("HBvlug", "koz2Hg"),
                    }),
                ],
              });
            };
            this.nfb = (b) => {
              var c;
              const d = this.props.sheet,
                e = d.view.freeze.BU
                  ? d.layout.Td.get(d.view.freeze.BU)
                  : void 0,
                f = { jNbTIg: !this.Cd, gtA7Dw: this.Cd };
              return p5("div", {
                ref: null === (c = this.zq) || void 0 === c ? void 0 : c.Xl,
                className: W4("An9VeA", f, b.className),
                children: [
                  e && this.POa(void 0, e, { sticky: !0 }),
                  this.POa(e ? d.rows.next(e) : void 0),
                ],
              });
            };
          }
        };
        b5 = x5([Jc], b5);
        var rPb = Z4((a) => {
            const b = a.label,
              c = a.col,
              d = a.FE,
              e = a.ep,
              f = a.Ed;
            a = a.Ud;
            const g = e(a),
              h = mPb(() => d(c));
            return U4("div", {
              className: W4("_83Rssw", "d2uLIA", X4(h)),
              style: { width: c.width * f, height: g },
              children: U4(xOb, {
                label: b,
                width: c.width,
                height: e(1),
                scale: a,
                sCa: h,
              }),
            });
          }),
          sPb = Z4((a) => {
            const b = a.label,
              c = a.ua,
              d = a.ep,
              e = a.FE,
              f = a.Ed;
            a = a.Ud;
            const g = d(f),
              h = mPb(() => e(c));
            return U4("div", {
              className: W4("_83Rssw", "JhBzyw", X4(h)),
              style: { width: g, height: c.height * a },
              children: U4(xOb, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                sCa: h,
              }),
            });
          });
        var tPb =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var uPb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var yOb = __c.kS({ uo: tPb, medium: uPb });
        var c5 = class extends r5 {
          static j(a) {
            R(a, { ae: f5.struct });
          }
          constructor(...a) {
            super(...a);
            c5.j(this);
          }
          render() {
            const a = this.props.element,
              b = this.props.cp,
              c = this.props.Lt,
              d = this.props.Ot,
              e = this.props.Y;
            return U4(this.props.Vp, {
              sheet: a.config,
              container: this.props.container.Gl(a),
              l6: "visible",
              cp: b,
              Lt: c,
              Ot: d,
              Y: e,
              ae: this.ae,
              qh: this.props.qh,
              UG: void 0,
            });
          }
          get ae() {
            return __c.iB(this.props.element.Za, this.props.Be);
          }
        };
        c5 = x5([Jc], c5);
        var vPb = class {
          constructor() {
            this.Gda = new WeakMap();
            this.d6a = (a) => this.Gda.get(a);
            this.qQa = (a, b) => {
              this.Gda.set(a, b);
            };
            this.x_a = (a, b) => {
              const c = this.Gda.get(a);
              c && c.na === b.na && c.Wb === b.Wb && this.Gda.delete(a);
            };
          }
        };
        var B5 = parseInt("4px", 10) || 4,
          wPb = Z4(({ sheet: a, Y: b, range: c, Nv: d, Ov: e }) => {
            if (null != c && (d || e)) {
              var f;
              b =
                null !== (f = null === b || void 0 === b ? void 0 : b.get()) &&
                void 0 !== f
                  ? f
                  : 1;
              if (d && e)
                return (
                  (d = a.Aa(c.ad) + c.ad.height),
                  (a = a.za(c.Kc) + c.Kc.width),
                  U4("div", {
                    style: { top: d * b, width: a * b, height: B5 * b },
                    className: W4("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.za(c.Kc) + c.Kc.width),
                  U4("div", {
                    style: { left: c * b, width: B5 * b, height: a.height * b },
                    className: W4("aX8dhQ", "gl1RPg"),
                  })
                );
              if (e)
                return (
                  (c = a.Aa(c.ad) + c.ad.height),
                  U4("div", {
                    style: { top: c * b, width: a.width * b, height: B5 * b },
                    className: W4("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var C5 = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = T4();
            DOb({ sheet: a, Y: c, range: b, Pd: e });
            return U4("div", {
              ref: e,
              className: W4(
                "nstn2A",
                "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          xPb = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = T4();
            DOb({ sheet: a, Y: c, range: b, Pd: e });
            a = "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ";
            return U4("div", {
              className: W4("nstn2A", a, "_9sodyg"),
              children: U4("div", {
                ref: e,
                className: W4("nstn2A", a),
                children: d,
              }),
            });
          };
        var FOb = Z4(({ sheet: a, children: b, xC: c }) => {
            const d = $4(
                (f) => {
                  c.Kua(a, f);
                },
                [c, a]
              ),
              e = $4(
                (f) => {
                  null != f ? c.zC.set(a, f) : c.zC.delete(a);
                },
                [c, a]
              );
            return U4(__c.zmb, {
              direction: "rtl" === a.config.direction ? "rtl" : "ltr",
              onScroll: d,
              Kw: e,
              children: b,
            });
          }),
          EOb = class {
            Kua(a, b) {
              this.onScroll && this.onScroll(a);
              this.d2.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.zC = new WeakMap();
              this.d2 = w5.map(new Map(), { deep: !1 });
              this.scrollTo = u5((b, c) => {
                b = this.zC.get(b);
                null === b || void 0 === b
                  ? void 0
                  : b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var IOb = Z4((a) => {
          const b = a.item,
            c = a.cp,
            d = a.zf,
            e = a.measureRef,
            f = a.Y,
            g = a.kIa,
            h = a.Wb,
            k = a.Lt,
            l = a.Ot,
            m = a.Vp,
            n = a.PK,
            p = a.qh,
            q = a.Be,
            r = a.xC;
          a = Y4(() => __c.iB(b.Za, q), [b, q]);
          const t = Y4(
            () =>
              Z4(({ sheet: u, range: v, Nv: x, Ov: y }) =>
                U4(C5, {
                  sheet: u,
                  range: v,
                  Y: f,
                  children: U4(wPb, { sheet: u, Y: f, range: v, Nv: x, Ov: y }),
                })
              ),
            [f]
          );
          d5(
            () =>
              e5(() => {
                var u = b.config.view.freeze.uH
                  ? b.config.layout.Id.get(b.config.view.freeze.uH)
                  : void 0;
                if (null != u) {
                  var v = Math.min(h.width, b.F);
                  if (b.config.za(u) + u.width > v) {
                    if ((u = r.zC.get(b))) u.style.overflowX = "hidden";
                  } else if ((u = r.zC.get(b))) u.style.overflowX = "scroll";
                }
              }),
            [b, h.width, r]
          );
          return U4("div", {
            ref: e,
            className: "E8r86A",
            style: { width: Math.min(h.width, b.F) },
            children: U4(n, {
              sheet: b,
              children: U4("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: b.F, height: b.P },
                children: U4(m, {
                  container: d.Hl(b),
                  sheet: b.config,
                  l6: "visible",
                  cp: c,
                  Y: f,
                  Lt: k,
                  Ot: l,
                  ae: a,
                  qh: p,
                  UG: t,
                }),
              }),
            }),
          });
        });
        var yPb = Z4(({ page: a, range: b, pC: c }) => {
          const d = KOb(a.sheet, b);
          return U4("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              null == d ? c(e, f) : __c.zv(__c.Bv(e)).Oq(d) && c(e, f)
            ),
          });
        });
        var zPb = new __c.PS(),
          D5 = (a) => __c.S_ * a,
          APb = () => "primary-default",
          LOb = Z4(
            ({
              container: a,
              cp: b,
              Lt: c,
              Ot: d,
              CZ: e,
              Y: f,
              viewport: g,
              Kgb: h,
              Vp: k,
              qh: l,
              pC: m,
              Tca: n,
              nmb: p,
              mlb: q,
              llb: r,
            }) => {
              const t = a.page,
                u = Y4(
                  () =>
                    Z4(({ sheet: v, range: x, Nv: y, Ov: z }) =>
                      p5(dPb, {
                        children: [
                          U4(C5, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: U4(wPb, {
                              sheet: v,
                              Y: f,
                              range: x,
                              Nv: y,
                              Ov: z,
                            }),
                          }),
                          p5(xPb, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: [
                              p && U4(p, {}),
                              m && U4(yPb, { page: t, pC: m, range: x }),
                              r && U4(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            U4(C5, {
                              sheet: t.sheet,
                              range: x,
                              Y: f,
                              children: U4(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? U4(BPb, {
                    container: a,
                    viewport: g,
                    Y: f,
                    cp: b,
                    Lt: c,
                    Ot: d,
                    Vp: k,
                    qh: l,
                    UG: u,
                  })
                : U4(k, {
                    sheet: t.sheet,
                    container: a,
                    l6: "hidden",
                    cp: b,
                    Lt: c,
                    Ot: d,
                    CZ: e,
                    Y: f,
                    viewport: g,
                    qh: l,
                    UG: u,
                  });
            }
          ),
          BPb = Z4((a) => {
            const b = a.container,
              c = a.Y,
              d = a.viewport,
              e = a.cp,
              f = a.Lt,
              g = a.Ot,
              h = a.Vp,
              k = a.qh;
            a = a.UG;
            const l = b.page,
              m = "rtl" === l.sheet.direction,
              n = s5(null),
              p = s5(null),
              q = s5(null);
            d5(() => {
              const y = E5({
                sheet: l.sheet,
                oea: !0,
                pea: !0,
                Y: c,
                viewport: d,
              });
              return m5(
                () => (null === y || void 0 === y ? void 0 : y.get()),
                (z) => {
                  const A = n.current;
                  if (z && A) {
                    var C = "rtl" === l.sheet.direction,
                      E;
                    A.style.position =
                      null !== (E = z.position) && void 0 !== E ? E : "sticky";
                    var H;
                    A.style.top =
                      null !== (H = z.top) && void 0 !== H ? H : "0px";
                    var I, J;
                    C
                      ? (A.style.right =
                          null !== (I = z.right) && void 0 !== I ? I : "0px")
                      : (A.style.left =
                          null !== (J = z.left) && void 0 !== J ? J : "0px");
                    var L;
                    A.style.transform =
                      null !== (L = z.transform) && void 0 !== L ? L : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            d5(() => {
              const y = E5({
                sheet: l.sheet,
                oea: !1,
                pea: !0,
                Y: c,
                viewport: d,
              });
              return m5(
                () => (null === y || void 0 === y ? void 0 : y.get()),
                (z) => {
                  const A = q.current;
                  if (z && A) {
                    var C;
                    A.style.position =
                      null !== (C = z.position) && void 0 !== C ? C : "sticky";
                    var E;
                    A.style.top =
                      null !== (E = z.top) && void 0 !== E ? E : "0px";
                    var H;
                    A.style.transform =
                      null !== (H = z.transform) && void 0 !== H ? H : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            d5(() => {
              const y = E5({
                sheet: l.sheet,
                oea: !0,
                pea: !1,
                Y: c,
                viewport: d,
              });
              return m5(
                () => (null === y || void 0 === y ? void 0 : y.get()),
                (z) => {
                  const A = p.current;
                  if (z && A) {
                    var C = "rtl" === l.sheet.direction,
                      E;
                    A.style.position =
                      null !== (E = z.position) && void 0 !== E ? E : "sticky";
                    var H, I;
                    C
                      ? (A.style.right =
                          null !== (H = z.right) && void 0 !== H ? H : "0px")
                      : (A.style.left =
                          null !== (I = z.left) && void 0 !== I ? I : "0px");
                    var J;
                    A.style.transform =
                      null !== (J = z.transform) && void 0 !== J ? J : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = $4(
                (y, z, A) =>
                  E5({ sheet: y, oea: z, pea: A, Y: c, viewport: d }),
                [c, d]
              ),
              t = Y4(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              u = Y4(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var v;
            const x =
              null !== (v = null === c || void 0 === c ? void 0 : c.get()) &&
              void 0 !== v
                ? v
                : 1;
            return p5("div", {
              className: "OsKKIQ",
              children: [
                U4("div", {
                  ref: n,
                  className: "_688KWg",
                  children: U4(zOb, { Cd: m, rHa: !1, ep: D5, scale: x }),
                }),
                U4("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: U4(a5, {
                    sheet: l.sheet,
                    Ed: x,
                    Ud: x,
                    ep: D5,
                    FE: APb,
                    tF: zPb,
                    jna: t,
                  }),
                }),
                U4("div", {
                  ref: p,
                  className: "zm537g",
                  children: U4(b5, {
                    sheet: l.sheet,
                    Ed: x,
                    Ud: x,
                    ep: D5,
                    FE: APb,
                    tF: zPb,
                    jna: u,
                  }),
                }),
                U4("div", {
                  className: "VDFv_A",
                  children: U4(h, {
                    sheet: l.sheet,
                    container: b,
                    l6: "hidden",
                    cp: e,
                    Lt: f,
                    Ot: g,
                    CZ: r,
                    Y: c,
                    viewport: d,
                    qh: k,
                    UG: a,
                  }),
                }),
              ],
            });
          }),
          E5 = ({ sheet: a, oea: b, pea: c, Y: d, viewport: e }) =>
            f5(() => {
              var f = null === e || void 0 === e ? void 0 : __c.Jv(e.get()),
                g;
              const h =
                null !== (g = null === d || void 0 === d ? void 0 : d.get()) &&
                void 0 !== g
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new cv(f.left, f.top);
              const k = "rtl" === a.direction;
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var g5 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ua.id}-${b.boundary}`,
          DPb = class {
            constructor() {
              this.zQa = CPb;
              this.$5a = A5((a) => {
                const b = new Map();
                let c = 0;
                a.layout.rows.forEach((d) => {
                  const e = c,
                    f = e + d.height;
                  b.set(d, { start: e, end: f });
                  c = f;
                });
                return b;
              });
              this.u5a = A5((a) => {
                const b = new Map();
                var c = "rtl" === a.direction;
                const d = c ? -1 : 1;
                let e = 0;
                c &&
                  ((c = a.layout.cols.last()),
                  (e = null != c ? a.za(c) + c.width : 0));
                a.layout.cols.forEach((f) => {
                  const g = e,
                    h = g + f.width * d;
                  b.set(f, { start: g, end: h });
                  e = h;
                });
                return b;
              });
            }
          },
          EPb = class {
            constructor() {
              this.Yeb = z5(
                (a, b, c) => {
                  const d = a.layout.cells.get(c, b);
                  var e,
                    f,
                    g = l5(
                      null !==
                        (e = null === d || void 0 === d ? void 0 : d.span.Xb) &&
                        void 0 !== e
                        ? e
                        : b,
                      null !==
                        (f = null === d || void 0 === d ? void 0 : d.span.Kc) &&
                        void 0 !== f
                        ? f
                        : b,
                      a.layout.cols
                    ),
                    h,
                    k;
                  e = l5(
                    null !==
                      (h = null === d || void 0 === d ? void 0 : d.span.bc) &&
                      void 0 !== h
                      ? h
                      : c,
                    null !==
                      (k = null === d || void 0 === d ? void 0 : d.span.ad) &&
                      void 0 !== k
                      ? k
                      : c,
                    a.layout.rows
                  );
                  var l = d ? c === d.span.bc : !0;
                  const m = d ? c === d.span.ad : !0,
                    n = d ? b === d.span.Xb : !0;
                  f = d ? b === d.span.Kc : !0;
                  if (n || f || l || m) {
                    h = {};
                    var p = a.layout.rows.Jc(c),
                      q = a.layout.rows.next(c),
                      r = a.layout.cols.Jc(b);
                    k = a.layout.cols.next(b);
                    if (l) {
                      l = UOb(a, b, c);
                      const Z = b && p && a.layout.cells.get(p, b);
                      p = b && p && VOb(a, b, p);
                      var t, u;
                      const ja = l5(
                        null !==
                          (t =
                            null === Z || void 0 === Z ? void 0 : Z.span.Xb) &&
                          void 0 !== t
                          ? t
                          : b,
                        null !==
                          (u =
                            null === Z || void 0 === Z ? void 0 : Z.span.Kc) &&
                          void 0 !== u
                          ? u
                          : b,
                        a.layout.cols
                      );
                      var v, x;
                      t = a.layout.cols.Ne(
                        null !==
                          (v =
                            null === d || void 0 === d ? void 0 : d.span.Xb) &&
                          void 0 !== v
                          ? v
                          : b,
                        null !==
                          (x =
                            null === Z || void 0 === Z ? void 0 : Z.span.Xb) &&
                          void 0 !== x
                          ? x
                          : b
                      );
                      h.Aa = h5(l, p, g, ja, t);
                    }
                    if (m) {
                      v = VOb(a, b, c);
                      x = b && q && a.layout.cells.get(q, b);
                      t = b && q && UOb(a, b, q);
                      var y, z;
                      u = l5(
                        null !==
                          (y =
                            null === x || void 0 === x ? void 0 : x.span.Xb) &&
                          void 0 !== y
                          ? y
                          : b,
                        null !==
                          (z =
                            null === x || void 0 === x ? void 0 : x.span.Kc) &&
                          void 0 !== z
                          ? z
                          : b,
                        a.layout.cols
                      );
                      var A, C;
                      y = a.layout.cols.Ne(
                        null !==
                          (A =
                            null === d || void 0 === d ? void 0 : d.span.Xb) &&
                          void 0 !== A
                          ? A
                          : b,
                        null !==
                          (C =
                            null === x || void 0 === x ? void 0 : x.span.Xb) &&
                          void 0 !== C
                          ? C
                          : b
                      );
                      h.La = h5(v, t, g, u, y);
                    }
                    if (n) {
                      g = WOb(a, b, c);
                      A = r && c && a.layout.cells.get(c, r);
                      C = r && c && XOb(a, r, c);
                      var E, H;
                      y = l5(
                        null !==
                          (E =
                            null === A || void 0 === A ? void 0 : A.span.bc) &&
                          void 0 !== E
                          ? E
                          : c,
                        null !==
                          (H =
                            null === A || void 0 === A ? void 0 : A.span.ad) &&
                          void 0 !== H
                          ? H
                          : c,
                        a.layout.rows
                      );
                      var I, J;
                      E = a.layout.rows.Ne(
                        null !==
                          (I =
                            null === d || void 0 === d ? void 0 : d.span.bc) &&
                          void 0 !== I
                          ? I
                          : c,
                        null !==
                          (J =
                            null === A || void 0 === A ? void 0 : A.span.bc) &&
                          void 0 !== J
                          ? J
                          : c
                      );
                      h.za = h5(g, C, e, y, E);
                    }
                    if (f) {
                      b = XOb(a, b, c);
                      I = k && c && a.layout.cells.get(c, k);
                      J = k && c && WOb(a, k, c);
                      var L, Q;
                      E = l5(
                        null !==
                          (L =
                            null === I || void 0 === I ? void 0 : I.span.bc) &&
                          void 0 !== L
                          ? L
                          : c,
                        null !==
                          (Q =
                            null === I || void 0 === I ? void 0 : I.span.ad) &&
                          void 0 !== Q
                          ? Q
                          : c,
                        a.layout.rows
                      );
                      var P, U;
                      a = a.layout.rows.Ne(
                        null !==
                          (P =
                            null === d || void 0 === d ? void 0 : d.span.bc) &&
                          void 0 !== P
                          ? P
                          : c,
                        null !==
                          (U =
                            null === I || void 0 === I ? void 0 : I.span.bc) &&
                          void 0 !== U
                          ? U
                          : c
                      );
                      h.Sa = h5(b, J, e, E, a);
                    }
                    return h;
                  }
                },
                { equals: YOb }
              );
              this.y0a = (a, b, c) => {
                const d = new Map();
                a.forEach(({ za: e, Aa: f, Sa: g, La: h }, k) => {
                  e && d.set(e.color, (d.get(e.color) || 0) + 1);
                  f && d.set(f.color, (d.get(f.color) || 0) + 1);
                  g &&
                    c &&
                    k.includes(c.id) &&
                    d.set(g.color, (d.get(g.color) || 0) + 1);
                  h &&
                    b &&
                    k.includes(b.id) &&
                    d.set(h.color, (d.get(h.color) || 0) + 1);
                });
                return d;
              };
            }
          },
          CPb = new EPb(),
          SOb = new DPb();
        var bPb = class {
          constructor(a) {
            this.B2 = a;
            this.j_a = __c.sU;
            this.J5a = z5((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let p = 0; p < d.length; p++) {
                var g = d[p],
                  h = this.D5a(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[p + 1];
                      if (null == k || !OI(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[p + 1];
                      if (null == k || !OI(b, c, k)) continue;
                      k = d[p - 1];
                      if (null == k || !OI(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[p - 1];
                      if (null == k || !OI(b, c, k)) continue;
                      break;
                    default:
                      throw new F(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + ("center" === h ? 0 : this.j_a);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.za(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.za(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.za(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new F(h);
                      }
                      for (l = d.indexOf(g); 0 <= l; l--) {
                        var m = d[l];
                        const q = 0 > l - 1 || OI(b, c, d[l - 1]);
                        var n;
                        if ((n = m === g || OI(b, c, m)))
                          (n = b.za(m)), (n = h < n && n < k);
                        if (n && q) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = OI(b, c, l)))
                          (m = b.za(l)), (m = h < m && m < k);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.D5a = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Ha.ref) &&
                g.span.bc === g.span.ad &&
                g.span.Xb === g.span.Kc
              ) {
                var { ui: h, textAlign: k } = __c.Yf(
                  __c.Fg,
                  b.layout.attrs.get(
                    Gg({ ui: void 0, textAlign: void 0 }),
                    c,
                    d
                  ) || {}
                );
                if ("overflow" === h) {
                  var l = this.B2.GE(b, c, d);
                  return __c.NI(
                    k,
                    null === (e = g.ref.content.ref) || void 0 === e
                      ? void 0
                      : e.type,
                    null === (f = g.ref.Ha.ref) || void 0 === f
                      ? void 0
                      : f.type,
                    l ? () => l.Uo.type : void 0
                  );
                }
              }
            };
          }
        };
        var FPb = Z4(function (a) {
          const b = a.sheet;
          var c = a.Sp;
          const d = a.Rjb,
            e = a.Y,
            f = a.Moa,
            g = a.s5a;
          a = a.overflow;
          const h = T4();
          fPb(
            () =>
              e5(() => {
                const p = D(h.current);
                var q;
                const r =
                  null !==
                    (q = null === e || void 0 === e ? void 0 : e.get()) &&
                  void 0 !== q
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = $4((p) => f.J5a(b, p, d, g), [f, b, d, g]);
          var l = $4(
            (p, q) => {
              var r, t;
              return null !==
                (t = null === (r = k(p)) || void 0 === r ? void 0 : r.get(q)) &&
                void 0 !== t
                ? t
                : 0;
            },
            [k]
          );
          c = TOb(b, c, d, l);
          c = ePb(c);
          l = b.width;
          const m = b.height,
            n = "rtl" === b.direction;
          return U4("svg", {
            ref: h,
            role: "presentation",
            className: W4("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: "visible" === a,
              JMH1ng: "hidden" === a,
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Uj: t, Vj: u }) =>
              U4(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: u,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: v, p2: x }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${u}`
              )
            ),
          });
        });
        var GPb = class {
          get size() {
            return this.Rda;
          }
          get([a, b]) {
            return (a = this.cF.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.cF.get(a);
            return null == a ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.cF.get(a);
            null == d && ((d = new Map()), this.cF.set(a, d));
            d.set(b, c);
            this.Rda++;
            return this;
          }
          clear() {
            this.cF.clear();
            this.Rda = 0;
          }
          delete([a, b]) {
            const c = this.cF.get(a);
            if (null == c || !c.delete(b)) return !1;
            this.Rda--;
            0 === c.size && this.cF.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.cF) for (const [d, e] of c) a([b, d], e);
          }
          *[Symbol.iterator]() {
            for (const [a, b] of this.cF)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.Rda = 0;
            this.cF = new Map();
          }
        };
        var G5 = class extends r5 {
          static j(a) {
            R(a, { D8: f5, BTa: f5 });
          }
          render() {
            var a;
            const { kZ: b, ...c } = this.props,
              d = this.props.sheet;
            return p5("div", {
              ref: this.CQa,
              className: W4(
                "ZTz_iA",
                "ltr" === d.direction ? "TA4X7w" : "WvuqMw"
              ),
              children: [
                (null === b || void 0 === b ? void 0 : b.$Aa) &&
                  U4(F5, {
                    ...c,
                    sheet: d,
                    range: b.$Aa.range,
                    Nv: !0,
                    Ov: !0,
                    className: "_0C8M3w",
                    M6: this.D8,
                  }),
                (null === b || void 0 === b ? void 0 : b.qUa) &&
                  U4(F5, {
                    ...c,
                    sheet: d,
                    range: b.qUa.range,
                    Nv: !1,
                    Ov: !0,
                    className: "_7n44yg",
                    M6: this.D8,
                  }),
                (null === b || void 0 === b ? void 0 : b.uHa) &&
                  U4(F5, {
                    ...c,
                    sheet: d,
                    range: b.uHa.range,
                    Nv: !0,
                    Ov: !1,
                    className: "fF5r6w",
                    M6: this.D8,
                  }),
                (null === b || void 0 === b ? void 0 : b.Nwa) &&
                  U4(F5, {
                    ...c,
                    sheet: d,
                    range:
                      null === b || void 0 === b
                        ? void 0
                        : null === (a = b.Nwa) || void 0 === a
                        ? void 0
                        : a.range,
                    Nv: !1,
                    Ov: !1,
                    className: "llILYw",
                    M6: this.BTa,
                  }),
              ],
            });
          }
          componentDidMount() {
            const a = e5(() => {
              var b = this.props,
                c = b.Y;
              b = b.sheet;
              const d = this.CQa.current;
              d &&
                ((c = c ? c.get() : 1),
                (d.style.width = `${b.width * c}px`),
                (d.style.height = `${b.height * c}px`));
            });
            __c.wc(this, [a]);
          }
          get D8() {
            return { type: "excluded" };
          }
          get BTa() {
            return { type: "hidden", isVisible: this.i_a };
          }
          constructor(...a) {
            super(...a);
            G5.j(this);
            this.CQa = lz();
            this.i_a = (b, c) => {
              var d;
              const e = this.props.sheet;
              var f = this.props.kZ;
              f =
                null === f || void 0 === f
                  ? void 0
                  : null === (d = f.Nwa) || void 0 === d
                  ? void 0
                  : d.range;
              return e.layout.cols.has(b) && e.layout.rows.has(c)
                ? null == f
                  ? !0
                  : 0 >= e.layout.cols.Ne(f.Xb, b) &&
                    0 >= e.layout.cols.Ne(b, f.Kc) &&
                    0 >= e.layout.rows.Ne(f.bc, c) &&
                    0 >= e.layout.rows.Ne(c, f.ad)
                : !1;
            };
          }
        };
        G5 = x5([Jc], G5);
        var F5 = class extends r5 {
          static j(a) {
            R(a, { Yua: f5, bounds: f5 });
          }
          get Yua() {
            const a = this.props.viewport,
              b = this.props.Nv,
              c = this.props.Ov;
            return null == a || (!b && !c)
              ? a
              : f5(() => {
                  const d = __c.Jv(a.get());
                  return __c.Bv({
                    top: c ? 0 : d.top,
                    left: b ? 0 : d.left,
                    width: d.width,
                    height: d.height,
                  });
                });
          }
          render() {
            const a = this.props.sheet,
              b = this.props.container,
              c = this.props.range,
              d = this.props.M6,
              e = this.props.UG,
              f = this.props.Nv,
              g = this.props.Ov;
            return p5("div", {
              ref: this.psa,
              className: W4("i0YQww", this.props.className),
              children: [
                U4("div", {
                  ref: this.aNa,
                  className: "vUKoKg",
                  children: U4("div", {
                    ref: this.bNa,
                    children: U4(H5, {
                      sheet: a,
                      container: b,
                      bounds:
                        "hidden" ===
                        (null === d || void 0 === d ? void 0 : d.type)
                          ? void 0
                          : c,
                      s_:
                        "hidden" ===
                        (null === d || void 0 === d ? void 0 : d.type)
                          ? d.isVisible
                          : void 0,
                      cp: this.props.cp,
                      fD: this.props.fD,
                      qh: this.props.qh,
                      VX: this.props.VX,
                      Y: this.props.Y,
                      Sp: this.Sp,
                      Lfa: this.Lfa,
                      fR: this.fR,
                    }),
                  }),
                }),
                U4(this.Nga, {}),
                e && U4(e, { sheet: a, range: c, Nv: f, Ov: g }),
              ],
            });
          }
          componentDidMount() {
            const a = e5(() => {
                var g = this.props,
                  h = g.Y,
                  k = g.sheet;
                const l = g.range;
                var m = this.psa.current;
                const n = this.aNa.current;
                g = this.bNa.current;
                h = h ? h.get() : 1;
                const p = l ? k.za(l.Kc) + l.Kc.width - k.za(l.Xb) : k.width,
                  q = l ? k.Aa(l.ad) + l.ad.height - k.Aa(l.bc) : k.height;
                m &&
                  ((m.style.width = `${p * h}px`),
                  (m.style.height = `${q * h}px`));
                n &&
                  ((n.style.width = `${p * h}px`),
                  (n.style.height = `${q * h}px`));
                m = "rtl" === k.direction;
                m = l ? k.za(l.Xb) * h * (m ? 1 : -1) : 0;
                k = l ? -k.Aa(l.bc) * h : 0;
                g && (g.style.transform = `translate(${m}px, ${k}px)`);
              }),
              b = this.props.sheet;
            var c = this.props.CZ;
            const d = this.props.Nv,
              e = this.props.Ov,
              f =
                d || e
                  ? null === c || void 0 === c
                    ? void 0
                    : c(b, d, e)
                  : void 0;
            c = e5(() => {
              const g = this.psa.current;
              if (null != g) {
                var h = d || e ? "sticky" : "relative",
                  k = e ? "0px" : "unset",
                  l = d ? "0px" : "unset",
                  m = d ? "0px" : "unset",
                  n = "rtl" === b.direction;
                if (null == f)
                  (g.style.position = h),
                    (g.style.top = k),
                    (g.style.left = n ? "unset" : l),
                    (g.style.right = n ? m : "unset");
                else {
                  const v = f.get();
                  var p;
                  g.style.position =
                    null !== (p = v.position) && void 0 !== p ? p : h;
                  var q;
                  g.style.top = null !== (q = v.top) && void 0 !== q ? q : k;
                  var r;
                  g.style.left = n
                    ? "unset"
                    : null !== (r = v.left) && void 0 !== r
                    ? r
                    : l;
                  var t;
                  g.style.right = n
                    ? null !== (t = v.right) && void 0 !== t
                      ? t
                      : m
                    : "unset";
                  var u;
                  g.style.transform =
                    null !== (u = v.transform) && void 0 !== u ? u : "unset";
                }
              }
            });
            __c.wc(this, [a, c]);
          }
          get bounds() {
            const a = this.props.sheet,
              b = this.props.range;
            var c, d, e, f;
            return {
              Xb:
                null !== (c = null === b || void 0 === b ? void 0 : b.Xb) &&
                void 0 !== c
                  ? c
                  : a.layout.cols.first(),
              Kc:
                null !== (d = null === b || void 0 === b ? void 0 : b.Kc) &&
                void 0 !== d
                  ? d
                  : a.layout.cols.last(),
              bc:
                null !== (e = null === b || void 0 === b ? void 0 : b.bc) &&
                void 0 !== e
                  ? e
                  : a.layout.rows.first(),
              ad:
                null !== (f = null === b || void 0 === b ? void 0 : b.ad) &&
                void 0 !== f
                  ? f
                  : a.layout.rows.last(),
            };
          }
          constructor(...a) {
            super(...a);
            F5.j(this);
            this.psa = lz();
            this.aNa = lz();
            this.bNa = lz();
            this.fR = new HPb();
            this.Tjb = f5(
              () =>
                [...this.Sp.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.rows.Ne(b, c)
                ),
              { equals: __c.hs() }
            );
            this.Qjb = f5(
              () =>
                [...this.Lfa.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.cols.Ne(b, c)
                ),
              { equals: __c.hs() }
            );
            this.Nga = Z4(() =>
              U4(this.props.cXa, {
                Sp: this.Tjb,
                Rjb: this.Qjb,
                s5a: this.fR.z5a,
                range: this.props.range,
              })
            );
            this.Sp = f5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.Y,
                  e =
                    null === (b = this.Yua) || void 0 === b ? void 0 : b.get();
                if (e && (0 >= e.height || 0 >= e.width)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.y - f : b.bc ? c.Aa(b.bc) : 0;
                e = e ? e.br.y + f : b.ad ? c.Aa(b.ad) + b.ad.height : 0;
                f = new Map();
                for (
                  let h = b.bc;
                  null != h && null != b.ad && 0 >= c.layout.rows.Ne(h, b.ad);
                  h = c.layout.rows.next(h)
                ) {
                  const k = c.Aa(h);
                  if (!(k + h.height < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: v5.shallow }
            );
            this.Lfa = f5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.Y,
                  e =
                    null === (b = this.Yua) || void 0 === b ? void 0 : b.get();
                if (e && (0 >= e.height || 0 >= e.width)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.x - f : b.Xb ? c.za(b.Xb) : 0;
                e = e ? e.br.x + f : b.Kc ? c.za(b.Kc) + b.Kc.width : 0;
                f = new Map();
                for (
                  let h = b.Xb;
                  null != h && null != b.Kc && 0 >= c.layout.cols.Ne(h, b.Kc);
                  h = c.layout.cols.next(h)
                ) {
                  const k = c.za(h);
                  if (!(k + h.width < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: v5.shallow }
            );
          }
        };
        F5 = x5([Jc], F5);
        var HPb = class {
            constructor() {
              this.cells = new GPb();
              this.vta = (a, b, c) => {
                let d = this.cells.get([a, b]);
                null == d &&
                  ((d = w5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.z5a = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                null == d &&
                  ((d = w5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return null === (c = d.get()) || void 0 === c ? void 0 : c.MCa;
              };
            }
          },
          H5 = class extends r5 {
            static j(a) {
              R(a, { vK: w5.shallow, zq: f5, JAa: u5, u7: u5.bound });
            }
            get zq() {
              var a;
              const b =
                null === (a = this.props.cp) || void 0 === a ? void 0 : a.get();
              if (null != b && 0 !== b.length) return new __c.uF(b);
            }
            render() {
              var a;
              return p5("div", {
                ref: lPb(
                  this.Pd,
                  null === (a = this.zq) || void 0 === a ? void 0 : a.Xl
                ),
                children: [
                  U4("div", { ref: this.tja, className: "_5YlOqQ" }),
                  U4("div", { ref: this.vja, className: "_XCmKw" }),
                  this.vK.map((b) => b.Edb),
                ],
              });
            }
            componentDidMount() {
              const a = m5(
                  () => [
                    this.props.sheet,
                    this.props.Lfa.get(),
                    this.props.Sp.get(),
                  ],
                  ([d, e, f], g) => {
                    [g] = g || [];
                    d !== g &&
                      ((d = D(this.tja.current)),
                      (g = D(this.vja.current)),
                      (d.innerHTML = ""),
                      (g.innerHTML = ""),
                      (this.rxa.length = 0),
                      (this.vK.length = 0));
                    this.JAa(e, f);
                  },
                  { fireImmediately: !0 }
                ),
                b = e5(() => {
                  var d = this.props,
                    e = d.Y;
                  d = d.sheet;
                  const f = this.Pd.current;
                  f &&
                    ((e = e ? e.get() : 1),
                    (f.style.width = `${d.width * e}px`),
                    (f.style.height = `${d.height * e}px`));
                }),
                c = this.vK.map((d) => aPb(d));
              __c.wc(this, [b, a, ...c]);
            }
            JAa(a, b) {
              const c = D(this.tja.current),
                d = D(this.vja.current),
                e = [],
                f = new Map();
              for (const g of this.rxa)
                b.has(g.ua) ? f.set(g.ua, g) : e.push(g);
              for (const [g, h] of b)
                (b = f.get(g) || e.pop()),
                  b ||
                    ((b = new IPb(this.u7, g)),
                    c.appendChild(b.J6),
                    d.appendChild(b.L6),
                    this.rxa.push(b)),
                  b.update(h, g, a);
              for (const g of e) g.hide();
            }
            u7(a, b) {
              const c = this.props.VX,
                d = this.props.sheet,
                e = this.props.container,
                f = this.props.s_,
                g = this.props.fR;
              a = new JPb(
                this.props.fD,
                this.props.qh,
                c(a, b),
                d,
                a,
                b,
                e,
                f,
                g.vta
              );
              __c.wc(this, aPb(a));
              this.vK.push(a);
              return a;
            }
            constructor(...a) {
              super(...a);
              H5.j(this);
              this.Pd = lz();
              this.tja = lz();
              this.vja = lz();
              this.rxa = [];
              this.vK = [];
            }
          };
        H5 = x5([Jc], H5);
        var IPb = class {
            static j(a) {
              R(a, { update: u5 });
            }
            update(a, b, c) {
              [this.J6, this.L6].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ua = b;
              for (const [d] of c)
                (c = this.vK.get(d)),
                  c ||
                    ((c = this.u7(d, b)),
                    this.vK.set(d, c),
                    this.J6.appendChild(c.I6),
                    this.L6.appendChild(c.LQ)),
                  c.update(b);
            }
            hide() {
              [this.J6, this.L6].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              IPb.j(this);
              this.u7 = a;
              this.ua = b;
              this.J6 = document.createElement("div");
              this.L6 = document.createElement("div");
              this.vK = new Map();
            }
          },
          JPb = class {
            static j(a) {
              R(a, {
                q7: w5.ref,
                ua: w5.ref,
                update: u5,
                Av: f5,
                attrs: f5.struct,
                s_: f5,
                IIa: f5,
                yv: f5,
                renderer: f5,
                MCa: f5.struct,
              });
            }
            update(a) {
              a !== this.ua &&
                ((this.ua = a),
                (this.lG.ua = a),
                this.rla && this.rla(),
                (this.rla = this.vta(this.ua, this.col, this)));
            }
            get Edb() {
              return this.q7;
            }
            get Av() {
              const a = this.sheet.layout.cells.get(this.ua, this.col);
              if (!a || (a.span.bc === this.ua && a.span.Xb === this.col))
                return a ? a.ref : void 0;
            }
            get attrs() {
              return (
                this.sheet.layout.attrs.get(
                  Gg({ ui: 0, textAlign: 0, direction: 0 }),
                  this.ua,
                  this.col
                ) || {}
              );
            }
            get s_() {
              return null != this.isVisible
                ? this.isVisible(this.col, this.ua)
                : !0;
            }
            get IIa() {
              const a = this.sheet.layout.cells.get(this.ua, this.col);
              return !a || (a.span.bc === this.ua && a.span.Xb === this.col);
            }
            get yv() {
              const a = this.sheet,
                b = this.ua,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ua: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.Scb.Ad(c, b);
                case "sheet-item":
                  return this.container.Xua.Ad(c, b);
                case "sheet-element":
                  return this.container.Cgb.Ad(c, b);
                default:
                  throw new F(this.container);
              }
            }
            get renderer() {
              if (this.s_) {
                var a = this.Av;
                if (a && (a.content.ref || a.Ha.ref))
                  return this.fD({
                    context: { container: this.yv, attrs: this.attrs },
                    fu: this.fra,
                    qh: this.qh,
                  });
              }
            }
            get MCa() {
              this.NCa.reportObserved();
              var a = iPb(() => this.renderer);
              if (
                a &&
                ((a = "react" === a.type ? this.w1 : this.TD),
                0 !== a.childNodes.length &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k) {
              JPb.j(this);
              var l, m, n, p, q, r;
              this.fD = a;
              this.lG = c;
              this.sheet = d;
              this.col = e;
              this.container = g;
              this.isVisible = h;
              this.vta = k;
              this.I6 = document.createElement("div");
              this.LQ = document.createElement("div");
              this.sH = document.createElement("div");
              this.TD = document.createElement("div");
              this.w1 = document.createElement("div");
              this.NCa = hPb("content size atom");
              this.fra = u5(() => this.NCa.reportChanged());
              this.ua = f;
              this.I6.className = "_2JFriw";
              this.LQ.className = "imy9ug";
              this.sH.className = W4("pDMp7w", {
                _0yZ6Qg:
                  "text3" !==
                  (null === (m = this.Av) || void 0 === m
                    ? void 0
                    : null === (l = m.content.ref) || void 0 === l
                    ? void 0
                    : l.type),
                qhF5uA:
                  "text3" !==
                    (null === (p = this.Av) || void 0 === p
                      ? void 0
                      : null === (n = p.content.ref) || void 0 === n
                      ? void 0
                      : n.type) &&
                  "text2" !==
                    (null === (r = this.Av) || void 0 === r
                      ? void 0
                      : null === (q = r.content.ref) || void 0 === q
                      ? void 0
                      : q.type),
              });
              this.TD.className = "_30B9pw";
              this.sH.appendChild(this.TD);
              this.LQ.appendChild(this.sH);
              this.w1.className = "G7zH2w";
              this.rla = k(this.ua, this.col, this);
              this.qh = (t) => U4(b, { ...t, fu: this.fra });
            }
          };
        var n5 = class extends r5 {
          static j(a) {
            R(a, { kZ: f5 });
          }
          render() {
            const {
              sheet: a,
              container: b,
              cp: c,
              CZ: d,
              fD: e,
              ae: f,
              qh: g,
              viewport: h,
              UG: k,
              eUa: l = !1,
            } = this.props;
            return U4("div", {
              className: W4(
                "SNkrHw",
                "ltr" === a.direction ? "TA4X7w" : "WvuqMw",
                { RaA0Nw: l }
              ),
              ...f,
              children: U4(G5, {
                fD: e,
                qh: g,
                cXa: this.Nga,
                VX: this.VX,
                sheet: a,
                container: b,
                cp: c,
                CZ: d,
                Y: this.Y,
                viewport: h,
                UG: k,
                kZ: this.kZ,
              }),
            });
          }
          get kZ() {
            var a = this.props.sheet;
            const b = {},
              c = a.view.freeze.BU ? a.layout.Td.get(a.view.freeze.BU) : void 0,
              d = a.view.freeze.uH ? a.layout.Id.get(a.view.freeze.uH) : void 0,
              e = a.layout.rows.first(),
              f = a.layout.rows.last(),
              g = a.layout.cols.first(),
              h = a.layout.cols.last();
            if (null != e && null != f && null != g && null != h) {
              var k = d ? a.layout.cols.next(d) : g;
              a = c ? a.layout.rows.next(c) : e;
              c && d && (b.$Aa = { range: { Xb: g, bc: e, Kc: d, ad: c } });
              c && k && (b.qUa = { range: { Xb: k, bc: e, Kc: h, ad: c } });
              d && a && (b.uHa = { range: { Xb: g, bc: a, Kc: d, ad: f } });
              a && k && (b.Nwa = { range: { Xb: k, bc: a, Kc: h, ad: f } });
              return b;
            }
          }
          get Y() {
            return this.props.Y ? this.props.Y : f5(() => 1);
          }
          constructor(...a) {
            super(...a);
            n5.j(this);
            this.Nga = Z4((b) => {
              const { sheet: c, Moa: d, Y: e, l6: f = "hidden" } = this.props;
              return U4(C5, {
                sheet: c,
                range: b.range,
                Y: e,
                children: U4(FPb, {
                  ...b,
                  sheet: c,
                  Y: this.Y,
                  Moa: d,
                  overflow: f,
                }),
              });
            });
            this.VX = (b, c) =>
              new __c.jGa(
                this.props.Qz,
                this.props.sheet,
                b,
                c,
                this.Y,
                this.Lt,
                this.Ot
              );
            this.Lt = (b, c) => {
              var d, e;
              return null === (d = (e = this.props).Lt) || void 0 === d
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
            this.Ot = (b, c) => {
              var d, e;
              return null === (d = (e = this.props).Ot) || void 0 === d
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
          }
        };
        n5 = x5([Jc], n5);
        __c.qGa = {
          S7a: function (a) {
            const b = a.Jn,
              c = a.ye,
              d = a.fd,
              e = a.Ul,
              f = a.B2,
              g = a.Qz,
              h = a.jW;
            wOb({ Pz: a.Pz, pf: a.pf, Whb: a.nO });
            const k = cPb({ fD: h, B2: f, Qz: g });
            b.eha = MOb({ Vp: k });
            c.Oga = COb({ Vp: k });
            ({ gXa: a } = JOb({ Vp: k, Te: e(), AQa: new vPb() }));
            d.eq.dha = a;
            const { lVa: l, mVa: m, kVa: n } = BOb();
            return {
              $ya: Z4((p) =>
                U4(nPb, {
                  ...p,
                  container: void 0,
                  Vp: k,
                  fXa: l,
                  hXa: m,
                  dXa: n,
                  qh: oPb,
                })
              ),
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/94b0d1a73350e3ba.js.map
