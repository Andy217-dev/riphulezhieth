(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [49222],
  {
    /***/ 32282: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(999741);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var F = __c.F;
        var B = __c.B;
        var PPb = function (a, b, c, d) {
            c = new OPb(c, d);
            B(1 === a.count(), "Only single widget root element is supported");
            a = a.first();
            B(
              null != a && "layout" === a.type,
              `Unexpected widget root found: ${
                null === a || void 0 === a ? void 0 : a.type
              }`
            );
            c.Nfa(a, b);
          },
          RPb = function (a) {
            return {
              ...__c.ux,
              ...I5,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Hfa.width,
                height: a.Hfa.height,
              },
              yb: a.yb.map(QPb),
            };
          },
          SPb = function (a) {
            switch (a.pG) {
              case 0:
                var b = __c.Aj.Nc().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? 1e3 * a.lineHeight : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Rg("color", a.color);
                b = b
                  .zc(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.TL,
                  ...J5,
                  ...I5,
                  Pa: null !== (c = a.Pa) && void 0 !== c ? c : 0,
                  text: b,
                  uh: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.TL, ...J5, ...I5, text: b, uh: 2 }
                );
              default:
                throw new F(a);
            }
          },
          N5 = function ({ content: a, fill: b, border: c, V: d }) {
            b = { ...__c.F8a, fill: K5(b), border: L5(c), V: M5(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: RPb(a) };
              case "text":
                return { ...b, element: SPb(a) };
              case "layout":
                return { ...b, element: TPb(a) };
              default:
                throw new F(a);
            }
          },
          TPb = function ({
            cells: a,
            border: b,
            fill: c,
            V: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.G8a,
              ...J5,
              ...I5,
              F: J5.width,
              P: J5.height,
              fill: K5(c),
              border: L5(b),
              direction: 1,
              V: M5(d),
              cells: new Map(a.map((k) => [k.id, N5(k)])),
              behavior: {
                rules: [
                  {
                    Fg: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: null !== g && void 0 !== g ? g : 0,
                      rowGap: null !== h && void 0 !== h ? h : 0,
                      Sg: UPb(a),
                    },
                  },
                ],
              },
              Mf: void 0,
            };
          },
          UPb = function (a) {
            return new Map(a.map((b) => [b.id, VPb(b)]));
          },
          VPb = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.fya,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.HR,
                ...(null != b ? ("number" === typeof b ? { all: b } : b) : {}),
              },
            };
          },
          L5 = function (a) {
            var b;
            const c =
              null !== (b = null === a || void 0 === a ? void 0 : a.color) &&
              void 0 !== b
                ? b
                : "#000000";
            var d;
            return {
              ...__c.jF,
              all: a
                ? {
                    ...__c.xR,
                    weight: null !== (d = a.weight) && void 0 !== d ? d : 1,
                    color: c,
                    xf: !0,
                  }
                : void 0,
            };
          },
          M5 = function (a) {
            return {
              ...__c.GR,
              ...(null != a ? ("number" === typeof a ? { all: a } : a) : {}),
            };
          },
          QPb = function (a) {
            return { ...__c.vx, ...a, fill: K5(a.fill), stroke: WPb(a.stroke) };
          },
          WPb = function (a) {
            return a ? { ...__c.xR, color: a.color, weight: a.weight } : void 0;
          },
          K5 = function (a) {
            var b;
            const c = {
              ...__c.wx,
              Pa:
                null !== (b = null === a || void 0 === a ? void 0 : a.Pa) &&
                void 0 !== b
                  ? b
                  : 0,
            };
            switch (null === a || void 0 === a ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, pb: a.pb };
              case void 0:
                return c;
              default:
                throw new F(a);
            }
          },
          bQb = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            XPb(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                YPb(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, N5(f));
                  g = !0;
                });
                g ||
                  (O5(e.fill, f.fill), ZPb(e.border, f.border), $Pb(e.V, f.V));
              },
              (e) => N5(e)
            );
            aQb(a.behavior, b, c);
            O5(a.fill, b.fill);
            $Pb(a.V, b.V);
            ZPb(a.border, b.border);
            var d;
            a.Pa = null !== (d = b.Pa) && void 0 !== d ? d : 0;
          },
          aQb = function (a, b, c) {
            P5(
              a.rules,
              [b],
              (d) => {
                cQb(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                cQb(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  null !== (e = b.columnGap) && void 0 !== e ? e : 0;
                var f;
                d.grid.rowGap = null !== (f = b.rowGap) && void 0 !== f ? f : 0;
                XPb(
                  d.grid.Sg,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    "number" === typeof k && g.padding.all !== k
                      ? (g.padding.all = k)
                      : "number" !== typeof k &&
                        ((g.padding.Aa =
                          null === k || void 0 === k ? void 0 : k.Aa),
                        (g.padding.La =
                          null === k || void 0 === k ? void 0 : k.La),
                        (g.padding.za =
                          null === k || void 0 === k ? void 0 : k.za),
                        (g.padding.Sa =
                          null === k || void 0 === k ? void 0 : k.Sa));
                    g.alignSelf = p;
                  },
                  (g) => VPb(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  Fg: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      null !== (e = b.columnGap) && void 0 !== e ? e : 0,
                    rowGap: null !== (f = b.rowGap) && void 0 !== f ? f : 0,
                    Sg: UPb(d.cells),
                  },
                };
              }
            );
          },
          dQb = function (a, b) {
            P5(
              a.yb,
              b.yb,
              (e, f) => {
                e.d = f.d;
                O5(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(WPb(f.stroke));
              },
              (e) => QPb(e)
            );
            const { viewBox: c, width: d } = RPb(b);
            a.width = d;
            __c.Bv(a.viewBox).equals(__c.Bv(c)) || (a.viewBox = c);
          },
          YPb = function (a, b, c) {
            switch (b.type) {
              case "shape":
                "shape" === a.type ? dQb(a, b) : c();
                break;
              case "text":
                ("text" === a.type &&
                  __c.Aj.domain.Tb(__c.Aj.ra(a.text), SPb(b).text)) ||
                  c();
                break;
              case "layout":
                "layout" === a.type ? bQb(a, b) : c();
                break;
              default:
                throw new F(b);
            }
          },
          XPb = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          P5 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          O5 = function (a, b) {
            switch (null === b || void 0 === b ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.pb.set(void 0);
                var c;
                a.Pa = null !== (c = b.Pa) && void 0 !== c ? c : 0;
                break;
              case "gradient":
                if (a.pb.ref && __c.LYa.domain.Tb(a.pb.ref, b.pb)) break;
                a.color = void 0;
                a.pb.set(b.pb);
                var d;
                a.Pa = null !== (d = b.Pa) && void 0 !== d ? d : 0;
                break;
              default:
                (a.color = void 0), a.pb.set(void 0);
            }
          },
          $Pb = function (a, b) {
            b = M5(b);
            a.all = b.all;
            a.LD = b.LD;
            a.JD = b.JD;
            a.KD = b.KD;
            a.ID = b.ID;
          },
          ZPb = function (a, b) {
            b = L5(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.kF.domain.Tb(__c.kF.ra(c), b) : !c && !b));
            c && a.all.set(b);
          },
          cQb = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          fQb = function (a, b, c, d) {
            let e = a.NOa.get(b);
            if (e) return e;
            e = {
              Px: new eQb(c.Jz, b, d, c.toa),
              CAa: void 0,
              ZJa: void 0,
              QKa: __c.ZV.mode,
            };
            a.NOa.set(b, e);
            return e;
          },
          hQb = function (a, b, c, d, e) {
            var f, g;
            e = fQb(a, c, b, e);
            const h = e.Px,
              k = e.ZJa,
              l = e.CAa,
              m = e.QKa;
            c = __c.NQ.ra(c);
            const n =
              (null === (f = (g = a.kA).EGa) || void 0 === f
                ? void 0
                : f.call(g, d)) || __c.ZV;
            (h.Im === k && gQb.structural(c, l) && n.mode === m) ||
              ((e.CAa = c),
              (e.ZJa = h.Im),
              (e.QKa = n.mode),
              (b = b.render(h, n)),
              a.eab.update(d, b),
              PPb(
                d,
                b,
                (p, q) => a.hP.Ioa.set(p, q),
                (p, q, r) => a.hP.refs.set(p, { ref: q, key: r })
              ));
          },
          kQb = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.Oab());
            c.push(
              iQb(
                () => {
                  a: {
                    var e = new jQb();
                    for (const f of b)
                      if ((e.jP(f), e.yma)) {
                        e = e.yma;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.jc.isLoaded(e) || a.Epa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) B("layout" === f.type), a.Cj.Kca(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          lQb = function (a, b) {
            return {
              jR: ({ Al: c }) => {
                var d;
                const { Px: e } = fQb(a.renderer, c, b, a.f0),
                  f = __c.PQ.create([]),
                  g = [];
                g.push(kQb(a.M4a, f));
                g.push(
                  iQb(
                    () => {
                      var k, l;
                      return [
                        null === (k = (l = a.kA).EGa) || void 0 === k
                          ? void 0
                          : k.call(l, f),
                        __c.NQ.ra(c),
                        e.Im,
                      ];
                    },
                    () => {
                      hQb(a.renderer, b, c, f, a.f0);
                    },
                    { fireImmediately: !0, equals: gQb.structural }
                  )
                );
                const h =
                  null === (d = b.Wqa) || void 0 === d
                    ? void 0
                    : d.call(b, { Px: e });
                h && g.push(h);
                return {
                  sb: f,
                  uw: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          nQb = function (a, b) {
            let c = a.D5.get(b);
            c || ((c = mQb("weakKey")), a.D5.set(b, c));
            c.reportObserved();
          },
          Q5 = __webpack_require__(519427),
          gQb = Q5.comparer,
          oQb = Q5.computed,
          mQb = Q5.createAtom,
          R5 = Q5.observable,
          iQb = Q5.reaction,
          pQb = Q5.runInAction;
        var qQb = class {
          static j(a) {
            __c.R(a, { scb: R5.ref, Q5a: R5.ref });
          }
          constructor() {
            qQb.j(this);
          }
        };
        var rQb = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          eQb = class {
            static j(a) {
              __c.R(a, { Ye: oQb });
            }
            get $Ja() {
              var a = this.f0,
                b = this.Al,
                c = this.toa;
              let d = a.sources.get(b);
              d || ((d = R5.box(c)), a.sources.set(b, d));
              return d;
            }
            get Im() {
              return this.$Ja.get();
            }
            get Ye() {
              return this.Jz.Nu({ type: "dict", value: this.Al });
            }
            Wl(a) {
              this.$Ja.set(
                a instanceof Function
                  ? { ...this.Im, ...a() }
                  : { ...this.Im, ...a }
              );
            }
            constructor(a, b, c, d) {
              eQb.j(this);
              this.Jz = a;
              this.Al = b;
              this.f0 = c;
              this.toa = d;
            }
          };
        var OPb = class {
          t4(a, b) {
            this.EOa(a, b);
            b.ref && this.wta(a, b.ref, b.key);
          }
          nP(a, b) {
            b.ref && this.wta(a.text, b.ref, b.key);
          }
          Cxa(a, b) {
            switch (b.content.type) {
              case "shape":
                B("shape" === a.element.type);
                this.t4(a.element, b.content);
                break;
              case "text":
                B("text" === a.element.type);
                this.nP(a.element, b.content);
                break;
              case "layout":
                B("layout" === a.element.type);
                this.Nfa(a.element, b.content);
                break;
              default:
                throw new F(b.content);
            }
          }
          Nfa(a, b) {
            this.EOa(a, b);
            b.ref && this.wta(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                B(!!d && !!a),
                this.Cxa(d, a);
          }
          constructor(a, b) {
            this.EOa = a;
            this.wta = b;
          }
        };
        var I5 = { locked: !0, Bo: { NX: !1, fV: !1 }, Aj: !0 },
          J5 = { top: 0, left: 0, width: 1, height: 1 };
        var sQb = class {
          constructor(a) {
            this.Cj = a;
            this.update = (b, c) => {
              P5(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      bQb(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...TPb(d),
                        ...I5,
                        width: d.minWidth,
                        height: d.minHeight,
                        F: d.minWidth,
                        P: d.minHeight,
                      };
                      break a;
                    default:
                      throw new F(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                B("layout" === d.type),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.F = c.minWidth),
                  (d.P = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.Cj.Kca(d);
            };
          }
        };
        var tQb = class {
          constructor(a, b, c) {
            this.eab = a;
            this.hP = b;
            this.kA = c;
            this.NOa = new WeakMap();
          }
        };
        var uQb = class {
            static j(a) {
              __c.R(a, { Epa: R5.shallow });
            }
            constructor(a, b) {
              uQb.j(this);
              this.jc = a;
              this.Cj = b;
              this.Epa = new Set();
              this.Jma = new Set();
              this.Oab = () => {
                this.b9 ||
                  (this.b9 = __c.Gua(this.jc).subscribe((d) => {
                    pQb(() => {
                      this.Epa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.Jma.add(c);
                return () => {
                  this.Jma.delete(c);
                  0 >= this.Jma.size &&
                    this.b9 &&
                    (this.b9.unsubscribe(), (this.b9 = void 0));
                };
              };
            }
          },
          jQb = class extends __c.AD {
            jP(a, b) {
              this.yma || super.jP(a, b);
            }
            nP(a) {
              this.yma =
                (a = a.text
                  .vy("font-family")
                  ["font-family"].values()
                  .next().value) && __c.pB(a).id;
            }
          };
        var vQb = !1,
          wQb = class {
            register(a, b) {
              this.SD.has(a) ||
                (this.SD.set(a, b),
                vQb || (__c.OQ.set(a, lQb(this, b)), (vQb = !0)));
            }
            get(a) {
              return this.SD.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.f0 = b;
              this.kA = c;
              this.jc = d;
              this.Cj = e;
              this.SD = new Map();
              this.M4a = new uQb(this.jc, this.Cj);
            }
          };
        var xQb = class {
          delete(a) {
            var b;
            const c = this.map.delete(a);
            c &&
              (null === (b = this.D5.get(a)) || void 0 === b
                ? void 0
                : b.reportChanged());
            return c;
          }
          get(a) {
            nQb(this, a);
            return this.map.get(a);
          }
          has(a) {
            nQb(this, a);
            return this.map.has(a);
          }
          set(a, b) {
            if (!this.map.has(a) || this.map.get(a) !== b) {
              var c;
              this.map.set(a, b);
              null === (c = this.D5.get(a)) || void 0 === c
                ? void 0
                : c.reportChanged();
            }
            return this;
          }
          constructor() {
            this.D5 = new WeakMap();
            this.map = new WeakMap();
          }
        };
        var yQb = class {
            constructor() {
              this.Ioa = new xQb();
              this.refs = new xQb();
            }
          },
          zQb = class {
            getContext(a) {
              return this.hP.refs.get(a);
            }
            pM(a) {
              return this.hP.Ioa.get(a);
            }
            constructor(a, b, c) {
              this.hP = a;
              this.f0 = b;
              this.renderer = c;
            }
          };
        __c.PLa = {
          W7a: function (a) {
            const b = new qQb(),
              c = new yQb(),
              d = new tQb(new sQb(a.Cj), c, b),
              e = new rQb();
            a = new wQb(d, e, b, a.jc, a.Cj);
            return { kA: b, tCb: new zQb(c, e, d), jkb: a, hP: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/8a171d74df29a850.js.map
