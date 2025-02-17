(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [26489],
  {
    /***/ 388770: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var pub = function (a) {
            var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
            try {
              const c = __c.Kt(a),
                d = c instanceof __c.vt ? c.Cr() : c;
              return __c.Ps(b, (e) => {
                e = __c.Kt(e);
                e = e instanceof __c.vt ? __c.EI(e, d) : e;
                return Math.abs(__c.eu(e, d));
              });
            } catch (c) {
              if (
                c instanceof Error &&
                c.message === `unrecognized color: ${b[0]}`
              )
                return b[0];
              throw c;
            }
          },
          qub = function (a) {
            return a
              .trim()
              .split(/\s+/, 2)
              .map((b) => __c.Wu(b)[0])
              .join("");
          },
          tub = function (a = "") {
            a = rub(a);
            a = Math.floor(a() * sub.length);
            return sub[a];
          },
          uub = __webpack_require__(875604),
          vub = uub.memo,
          wub = uub.useId;
        var rub = __webpack_require__(503216);
        var xub = __webpack_require__(443763),
          mY = xub.jsx,
          yub = xub.jsxs;
        var zub = __webpack_require__,
          Aub = zub(993864),
          nY = zub.n_x(Aub)();
        __c.oY = {
          xxsmall: 16,
          xsmall: 24,
          small: 32,
          medium: 40,
          large: 48,
          xlarge: 64,
          xxlarge: 80,
          xxxlarge: 160,
        };
        var sub = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.Ct(__c.Bt(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var Bub = vub((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            tQ: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          d
            ? ((a = __c.Kt(d)),
              (a = a instanceof __c.vt ? __c.Gt(a) : __c.Ct(a)))
            : (a = e ? tub(e) : "#8e8e8e");
          var n = wub();
          let p;
          switch (l) {
            case "circle":
              p = mY("defs", {
                children: mY("clipPath", {
                  id: n,
                  children: mY("circle", {
                    id: `${n}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              p = mY("defs", {
                children: mY("clipPath", {
                  id: n,
                  children: mY("rect", {
                    id: `${n}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.F(l);
          }
          switch (l) {
            case "circle":
              n = mY("circle", {
                cx: "50%",
                cy: "50%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: nY("yCT70Q", { _2LVP_g: c }),
              });
              break;
            case "square":
              n = mY("rect", {
                width: "100%",
                height: "100%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: nY("cUFFRA", { _2LVP_g: c }),
              });
              break;
            default:
              throw new __c.F(l);
          }
          return mY("span", {
            role: f,
            "aria-label": g,
            className: nY("VaW8_A", { cUFFRA: "square" === l }),
            ...m,
            children: yub("svg", {
              className: h,
              style: k,
              children: [
                p,
                n,
                mY("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill: pub(a),
                  fontWeight: "500",
                  fontSize: "50%",
                  children: mY("tspan", {
                    dy: "0.36em",
                    letterSpacing: "0.01rem",
                    children: qub(b).toUpperCase(),
                  }),
                }),
              ],
            }),
          });
        });
        var Cub =
          __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
        var Dub = ({
          borderColor: a,
          tNa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          mY("span", {
            className: nY(d, { JwH6AA: a, QJpRHw: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": "img" === f ? c : void 0,
            ...g,
          });
        __c.Eub = ({
          name: a,
          KYa: b,
          ariaLabel: c,
          tQ: d,
          backgroundColor: e,
          borderColor: f,
          $q: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = nY("n8XGZg", "f4qJng fs-hide", h, { P3N3Pw: "square" === l });
          b = b || "presentation";
          return g
            ? mY(Dub, {
                className: h,
                style: k,
                borderColor: f,
                tNa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? mY(Bub, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                tQ: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : mY(Dub, {
                className: h,
                style: k,
                borderColor: f,
                tNa: Cub,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/81b7c4ddd1e25e3b.js.map
