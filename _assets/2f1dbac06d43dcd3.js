(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4143],
  {
    /***/ 62516: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(388770);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var F = __c.F;
        var R = __c.R;
        var lNb = function (a, b = "medium") {
            if (null !== a && void 0 !== a && a.length) {
              var c =
                ("number" === typeof b ? b : __c.oY[b]) *
                (window.devicePixelRatio || 1);
              return [...a].sort((d, e) => {
                d = d.width;
                e = e.width;
                return d > c && e < c
                  ? -1
                  : d < c && e > c
                  ? 1
                  : Math.abs(d - c) - Math.abs(e - c);
              })[0].url;
            }
          },
          rNb = function (a, b) {
            class c {
              static j(d) {
                R(d, { rf: F4, Jha: F4 });
              }
              get rf() {
                switch (this.Jha) {
                  case "date":
                    return new mNb(this.zv, b.language || "en-AU");
                  case "select":
                    return new nNb(this.zv);
                  case "mention":
                    return new oNb(this.zv);
                  case "embed":
                    return new pNb(this.zv);
                  case "plain_number":
                  case "currency":
                  case "percentage":
                  case void 0:
                    break;
                  default:
                    throw new F(this.Jha);
                }
              }
              get Jha() {
                var d;
                return null === (d = this.zv.$A) || void 0 === d
                  ? void 0
                  : d.type;
              }
              constructor(d) {
                c.j(this);
                this.context = d;
                this.zv = __c.D(a.GE(d.sheet, d.ua, d.column));
              }
            }
            return qNb((d) => new c(d).rf);
          },
          tNb = function () {
            const a = G4(() => new Map(), []);
            return {
              X5a: (b) => {
                if (a.has(b)) return __c.D(a.get(b));
                const c = sNb();
                a.set(b, c);
                return c;
              },
            };
          },
          uNb = function (a, b) {
            return G4(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.D(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          BNb = function ({
            children: a,
            keyFrame: b,
            fRa: c,
            ariaLive: d,
            hJa: e = !1,
            vYa: f,
            fka: g,
            K2a: h,
            pqb: k,
            GCa: l,
            AEa: m,
            nqb: n,
            Uib: p,
          }) {
            const { X5a: q } = tNb(),
              { Y4a: r, Deb: t } = vNb(b, a),
              u = uNb(
                (v) => () => {
                  (!1 === e || ("function" === typeof e && !e(v))) && t(v);
                },
                [t, e]
              );
            return H4("div", {
              className: I4(g, "_9GxJfQ", {
                KwB0XQ: "hidden" === l,
                WV1Mmw: "fill-height" === c,
                _2uSJxw: "flex-grow" === c,
              }),
              children: H4("div", {
                className: I4("m2VaAA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: v, element: x }) =>
                    H4(
                      wNb,
                      {
                        in: v === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(v),
                        onExited: u(v),
                        children: (y) =>
                          H4(xNb.Provider, {
                            value: y,
                            children: H4("div", {
                              className: I4("KxXR9g", n, {
                                KwB0XQ: "hidden" === m,
                              }),
                              ref: q(v),
                              "aria-hidden":
                                y === yNb || y === zNb || y === ANb,
                              children: v === b ? a : x,
                            }),
                          }),
                      },
                      v
                    )
                  ),
                  r.every((v) => v.key !== b) &&
                    H4(
                      wNb,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : u(b),
                        children: (v) =>
                          H4(xNb.Provider, {
                            value: v,
                            children: H4("div", {
                              className: I4("KxXR9g", n),
                              ref: q(b),
                              "aria-hidden":
                                v === yNb || v === zNb || v === ANb,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          vNb = function (a, b) {
            const [c, d] = CNb(() => [{ key: a, element: b }]);
            DNb(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = J4((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { Y4a: c, Deb: e };
          },
          ENb = function (a) {
            switch (a.type) {
              case "mention":
                return "bCAtqw";
              case "embed":
                return "BTcT3w";
              case "date":
                return "McKQgg";
              case "select":
                return "V2E5nQ";
              default:
                throw new F(a);
            }
          },
          GNb = function (a, b) {
            switch (a.type) {
              case "mention":
              case "embed":
              case "date":
                break;
              case "select":
                return H4(FNb, { selected: !!b.fPa });
              default:
                throw new F(a);
            }
          },
          K4 = function (a) {
            return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey)
              ? !0
              : a instanceof KeyboardEvent
              ? "Meta" === a.key || ["91", "224"].includes(a.code)
              : !1;
          },
          HNb = function (a) {
            __c.w(!0, "chunkLength must be positive");
            const b = [];
            for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
            return b;
          },
          INb = function (a, b, c) {
            if (c) {
              var d = lNb(c.images, "medium"),
                e = lNb(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = L4(() => a.d4.set(b, e));
                f.onerror = L4(() => a.d4.set(b, void 0));
                !f.complete && c.complete ? a.d4.set(b, d) : (c.src = "");
              }
            } else a.d4.set(b, void 0);
          },
          KNb = function (a, { url: b, id: c, extension: d }) {
            if (!a.promises.has(b)) {
              const e = new Promise((f) => {
                a.wg
                  ? a.wg
                      .ntb(new JNb({ id: c, extension: d }))
                      .then(({ document: g }) => {
                        const h = g.Zg.content.title;
                        h
                          ? (M4(() => a.qSa.set(b, { status: 1, title: h })),
                            f(h))
                          : f(void 0);
                      })
                      .catch(() => {
                        M4(() => a.qSa.set(b, { status: 2 }));
                        f(void 0);
                      })
                  : f(void 0);
              });
              a.promises.set(b, e);
            }
            return a.promises.get(b);
          },
          LNb = __webpack_require__(443763),
          H4 = LNb.jsx,
          MNb = LNb.jsxs;
        var N4 = __webpack_require__(214645).Pi;
        var O4 = __webpack_require__(875604),
          NNb = O4.createContext,
          sNb = O4.createRef,
          P4 = O4.memo,
          J4 = O4.useCallback,
          DNb = O4.useEffect,
          ONb = O4.useLayoutEffect,
          G4 = O4.useMemo,
          CNb = O4.useState;
        var Q4 = __webpack_require__(519427),
          L4 = Q4.action,
          PNb = Q4.comparer,
          F4 = Q4.computed,
          QNb = Q4.observable,
          R4 = Q4.ObservableMap,
          M4 = Q4.runInAction;
        var qNb = __webpack_require__(635872).Om;
        var RNb = __webpack_require__,
          SNb = RNb(993864),
          I4 = RNb.n_x(SNb)();
        var wNb = __webpack_require__(489212).Z;
        var S4 = __webpack_require__(92009),
          ANb = S4.Wj,
          yNb = S4.Ix,
          zNb = S4.$r;
        var TNb = class {
            static j(a) {
              R(a, { text: F4, user: F4, brand: F4 });
            }
            get text() {
              return this.rf.text;
            }
            get user() {
              return this.rf.user;
            }
            get brand() {
              return this.rf.brand;
            }
            constructor(a) {
              TNb.j(this);
              this.rf = a;
              this.type = "mention";
            }
          },
          UNb = class {
            static j(a) {
              R(a, { text: F4, url: F4 });
            }
            get text() {
              return this.rf.text;
            }
            get url() {
              return this.rf.url;
            }
            constructor(a) {
              UNb.j(this);
              this.rf = a;
              this.type = "embed";
            }
          },
          VNb = class {
            static j(a) {
              R(a, { text: F4, language: F4, style: F4, date: F4 });
            }
            get text() {
              return this.rf.text;
            }
            get language() {
              return this.rf.language;
            }
            get style() {
              return this.rf.style;
            }
            get date() {
              return this.rf.date;
            }
            constructor(a) {
              VNb.j(this);
              this.rf = a;
              this.type = "date";
            }
          },
          WNb = class {
            static j(a) {
              R(a, { text: F4, options: F4, lf: F4, XQ: F4 });
            }
            get text() {
              return this.rf.text;
            }
            get options() {
              return this.rf.options.map((a) => a);
            }
            get lf() {
              return this.rf.lf;
            }
            get XQ() {
              var a;
              return null ===
                (a = this.rf.options.first((b) => b.id === this.rf.lf)) ||
                void 0 === a
                ? void 0
                : a.fill.color;
            }
            constructor(a) {
              WNb.j(this);
              this.rf = a;
              this.type = "select";
            }
          },
          XNb = qNb((a) => {
            switch (a.type) {
              case "mention":
                return new TNb(a);
              case "embed":
                return new UNb(a);
              case "date":
                return new VNb(a);
              case "select":
                return new WNb(a);
              default:
                throw new F(a);
            }
          });
        var mNb = class {
            static j(a) {
              R(a, { style: F4, date: F4, text: F4 });
            }
            get style() {
              return 2;
            }
            get date() {
              var a;
              (a = 2 === this.Do.Uo.type ? this.Do.Uo.date : void 0) ||
                ((a = new Date()),
                (a = __c.uE(a)),
                (a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  T6a: a.getHours(),
                  $$a: a.getMinutes(),
                }));
              return a;
            }
            get text() {
              return this.Do.yA;
            }
            constructor(a, b) {
              mNb.j(this);
              this.Do = a;
              this.language = b;
              this.type = "date";
            }
          },
          YNb = class {
            get label() {
              return this.option.label;
            }
            get fill() {
              return this.option.fill;
            }
            constructor(a, b) {
              this.option = a;
              this.id = b;
            }
          },
          nNb = class {
            static j(a) {
              R(a, {
                options: F4,
                lf: F4,
                XQ: F4,
                text: F4,
                aGa: F4({ equals: PNb.shallow }),
              });
            }
            get options() {
              return this.aGa.map((a, b) => new YNb(a, b));
            }
            get lf() {
              var a;
              return null ===
                (a = this.options.find((b) => b.label === this.text)) ||
                void 0 === a
                ? void 0
                : a.id;
            }
            get XQ() {
              var a;
              return null ===
                (a = this.options.find((b) => b.id === this.lf)) || void 0 === a
                ? void 0
                : a.fill.color;
            }
            get text() {
              return this.Do.yA;
            }
            get aGa() {
              var a, b;
              __c.B(
                "select" ===
                  (null === (a = this.Do.$A) || void 0 === a ? void 0 : a.type)
              );
              return null === (b = this.Do.$A) || void 0 === b
                ? void 0
                : b.options;
            }
            constructor(a) {
              nNb.j(this);
              this.Do = a;
              this.type = "select";
            }
          },
          oNb = class {
            static j(a) {
              R(a, { hM: F4 });
            }
            get text() {
              return this.hM ? this.hM.text : "";
            }
            get user() {
              return this.hM ? this.hM.user : "";
            }
            get brand() {
              return this.hM ? this.hM.brand : "";
            }
            get hM() {
              if (8 !== this.Do.Uo.type)
                return (
                  __c.B(6 === this.Do.Uo.type),
                  this.Do.Uo ? this.Do.Uo.value[0] : void 0
                );
            }
            constructor(a) {
              oNb.j(this);
              this.Do = a;
              this.type = "mention";
            }
          },
          pNb = class {
            static j(a) {
              R(a, { ZY: F4 });
            }
            get text() {
              return this.ZY ? this.ZY.embed.text : "";
            }
            get url() {
              return this.ZY ? this.ZY.embed.url : "";
            }
            get ZY() {
              if (8 !== this.Do.Uo.type)
                return (
                  __c.B(7 === this.Do.Uo.type),
                  this.Do.Uo ? this.Do.Uo.value[0] : void 0
                );
            }
            constructor(a) {
              pNb.j(this);
              this.Do = a;
              this.type = "embed";
            }
          };
        var ZNb = class {
          qma(a) {
            this.xia.qma(a);
          }
          z2(a, b) {
            this.xia.z2(a, b);
          }
          sZ(a) {
            return this.xia.sZ(a);
          }
          nma(a) {
            this.DEa.nma(a);
          }
          constructor(a, b, c, d) {
            this.xia = a;
            this.DEa = b;
            this.xc = c;
            this.SH = d;
            this.bxa = new __c.vlb();
            this.p5a = (e) => __c.PEa(this.bxa, e);
          }
        };
        var xNb = NNb(void 0);
        var $Nb = Number.parseInt("300ms", 10),
          aOb = {
            enter: "_QukmA",
            enterActive: "_5_06KQ",
            enterDone: void 0,
            exitActive: "a952jg",
            exitDone: "orZOEA",
          },
          bOb = P4(function ({
            Qx: a = !1,
            children: b,
            keyFrame: c,
            fRa: d,
            GCa: e = "hidden",
            AEa: f = "hidden",
            ariaLive: g,
            hJa: h,
            Stb: k = "none",
          }) {
            a = __c.tb() && !a;
            return BNb({
              children: b,
              keyFrame: c,
              fRa: d,
              ariaLive: g,
              GCa: e,
              AEa: f,
              hJa: h,
              vYa: a ? $Nb : 0,
              K2a: I4({
                _1niDPQ: a,
                Q6kGbg: "none" === k,
                _9j7ODw: "layout" === k,
              }),
              Uib: aOb,
            });
          });
        var cOb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var dOb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var eOb =
          '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var fOb = P4((a) => {
            const b = a.link,
              c = a.className,
              d = a.ariaLabel,
              e = a.XQ,
              f = a.V1a,
              g = a.OWa,
              h = a.oXa,
              k = a.measureRef,
              l = a.onPointerDown,
              m = a.onMouseEnter,
              n = a.onMouseLeave,
              p = I4({ EdewNw: !!g, _6ZpPrw: !!h, pzXyUA: 0 < a.text.length });
            a = 0 < a.text.length ? a.text : "\ufeff";
            return MNb("span", {
              className: I4(c, "FedJ0Q"),
              "aria-label": d || a,
              children: [
                H4("span", {
                  className: I4("_2Lr6pQ", p),
                  children: H4("span", { className: "Z_WvzQ", children: a }),
                }),
                MNb("span", {
                  className: I4("XemTdQ", p),
                  ref: k,
                  style: e ? { color: e } : void 0,
                  onPointerDown: l,
                  onMouseEnter: m,
                  onMouseLeave: n,
                  children: [
                    g,
                    H4("span", {
                      className: I4("U_QH_A", { C9XL8g: !f }),
                      children: b
                        ? H4("a", { className: "vgTP5Q", ...b, children: a })
                        : a,
                    }),
                    h,
                  ],
                }),
              ],
            });
          }),
          gOb = P4((a) => {
            const b = a.backgroundColor,
              c = a.$q;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return H4(bOb, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? H4(__c.Eub, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    $q: c,
                    borderColor: c ? void 0 : b,
                  })
                : H4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: eOb },
                  }),
            });
          }),
          hOb = P4((a) => {
            a = a.icon;
            return H4(bOb, {
              keyFrame: a ? "favicon" : "placeholder",
              children: a
                ? H4("span", {
                    className: "_tFJqA",
                    children: H4("img", { src: a, className: "qpbYdw" }),
                  })
                : H4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: dOb },
                  }),
            });
          }),
          iOb = P4(() =>
            H4("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: cOb },
            })
          ),
          FNb = P4(({ selected: a }) =>
            H4("div", {
              className: I4("whph4A", { zgzjww: a }),
              children: H4(__c.yM, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          jOb = N4((a) => {
            const {
              rf: b,
              fPa: c,
              Csa: d,
              mode: e = "viewable",
              measureRef: f,
              fu: g,
              onPointerDown: h,
            } = a;
            a = b.text || "\u00a0".repeat(16);
            const k = "embed" === b.type ? d.xc(b.url) : void 0,
              [l, m] = CNb(!1),
              n = J4((z) => m(K4(z)), [m]),
              p = J4((z) => m(!K4(z)), [m]),
              q = J4(
                (z) => {
                  m(K4(z.nativeEvent));
                  document.addEventListener("keydown", n);
                  document.addEventListener("keyup", p);
                },
                [m, n, p]
              ),
              r = J4(() => {
                m(!1);
                document.removeEventListener("keydown", n);
                document.removeEventListener("keyup", p);
              }, [m, n, p]);
            DNb(() => {
              M4(() => {
                switch (b.type) {
                  case "mention":
                    b.user && d.qma(b.user);
                    break;
                  case "embed":
                    d.nma(b.url);
                }
              });
            }, [b, d]);
            ONb(() => {
              null === g || void 0 === g ? void 0 : g();
            }, [b.type, a, g]);
            var t = 0 === b.text.length,
              u = b.text || "",
              v = ENb(b),
              x = b.XQ;
            a: {
              switch (b.type) {
                case "mention":
                  var y = H4(gOb, {
                    $q: b.user ? d.sZ(b.user) : void 0,
                    text: b.text,
                    backgroundColor: b.user ? d.p5a(b.user).background : void 0,
                  });
                  break a;
                case "embed":
                  y = H4(hOb, { icon: d.DEa.DY.get(b.url) });
                  break a;
                case "date":
                  y = b.text ? void 0 : H4(iOb, {});
                  break a;
                case "select":
                  break;
                default:
                  throw new F(b);
              }
              y = void 0;
            }
            return H4(fOb, {
              text: a,
              link: "viewable" === e || l ? k : void 0,
              V1a: t,
              ariaLabel: u,
              className: v,
              XQ: x,
              OWa: y,
              oXa: GNb(b, { fPa: c }),
              measureRef: f,
              onPointerDown: h,
              onMouseEnter: "embed" === b.type && "editable" === e ? q : void 0,
              onMouseLeave: "embed" === b.type && "editable" === e ? r : void 0,
            });
          });
        var kOb = __c.M(() => ({
          zub: __c.HN(11),
          mode: __c.G("A?", 1, "BY_USER_IDS"),
          yjb: __c.GN(1),
        }));
        var lOb = class {
            static j(a) {
              R(a, { eP: QNb.shallow, tFa: L4 });
            }
            sZ(a) {
              return this.WAa.sZ(a);
            }
            qma(a) {
              this.axa.has(a) || this.eP.has(a) || (this.eP.add(a), this.y1a());
            }
            z2(a, b) {
              this.axa.has(a) ||
                (this.axa.set(a, b), this.eP.delete(a), INb(this.WAa, a, b));
            }
            async tFa() {
              if (0 !== this.eP.size) {
                var a = [...this.eP.values()];
                this.eP.clear();
                if (this.XAa) {
                  var b = await this.XAa;
                  await Promise.all(
                    HNb(a).map(async (c) => {
                      const d = new kOb({ yjb: c }),
                        { znb: e } = await b.Qsb(d);
                      M4(() => c.forEach((f) => this.z2(f, e.get(f))));
                    })
                  );
                } else a.forEach((c) => this.z2(c));
              }
            }
            constructor(a, b) {
              lOb.j(this);
              this.XAa = a;
              this.axa = new R4();
              this.eP = new Set();
              this.WAa = new mOb();
              this.y1a = __c.Pc(() => this.tFa(), 200);
              M4(() => {
                null === b || void 0 === b
                  ? void 0
                  : b.forEach((c, d) => this.z2(d, c));
              });
            }
          },
          mOb = class {
            sZ(a) {
              return this.d4.get(a);
            }
            constructor() {
              this.d4 = new R4();
            }
          };
        var JNb = __c.M(() => ({
          id: __c.W("id", 1),
          extension: __c.X("extension", 3),
          ifb: __c.CN("revision", 5),
          version: __c.CN("version", 2),
          gub: __c.CN("imagesetsLimit", 6),
        }));
        var nOb = class {
          static j(a) {
            R(a, { j4a: L4 });
          }
          async j4a(a) {
            if (this.wg) {
              var b = new URL(a).pathname;
              {
                const c =
                  /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                null == c || 2 > c.length
                  ? (b = void 0)
                  : ((b = c[2]),
                    new Set(["edit", "remix", "view", "watch"]).has(c[2]) &&
                      (b = void 0),
                    (b = { id: c[1], extension: b }));
              }
              if (b) return await KNb(this, { url: a, ...b });
            }
          }
          constructor(a) {
            nOb.j(this);
            this.wg = a;
            this.qSa = new R4();
            this.promises = new Map();
          }
        };
        var oOb = class {
          static j(a) {
            R(a, { DY: QNb.shallow });
          }
          async nma(a) {
            const b = new Image();
            let c;
            try {
              var d;
              const e = await (null === (d = this.SH) || void 0 === d
                ? void 0
                : d.v5(a));
              c = null === e || void 0 === e ? void 0 : e.i4a;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = L4(() => this.DY.set(a, c))),
                (b.onerror = L4(() => this.DY.set(a, void 0))))
              : this.DY.set(a, void 0);
          }
          constructor(a) {
            oOb.j(this);
            this.SH = a;
            this.DY = new Map();
          }
        };
        __c.ZBa = {
          Q7a: function (a) {
            const b = a.document,
              c = a.wg,
              d = a.xc,
              e = a.SH;
            var f = a.N5;
            const g = a.fd,
              h = a.Pz,
              k = a.KV;
            a = a.uub;
            f = new lOb(null === a || void 0 === a ? void 0 : a(), f);
            a = new oOb(e);
            new nOb(c);
            const l = new ZNb(f, a, d, e),
              m = rNb(k, b);
            g.eq.$ga = N4(({ item: p, measureRef: q }) => {
              const r = G4(() => XNb(p.rf), [p.rf]);
              return H4(jOb, { rf: r, Csa: l, measureRef: q });
            });
            const n = N4(({ context: p, fu: q }) => {
              const r = G4(() => __c.D(m(p.container)), [p]);
              ONb(q, [q, p.container.column.width]);
              return H4(jOb, { rf: r, Csa: l, fu: q });
            });
            h.nza = ({ context: p, fu: q }) => ({
              type: "react",
              node: H4(n, { context: p, fu: q }),
            });
            return { Csa: l };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/2f1dbac06d43dcd3.js.map
