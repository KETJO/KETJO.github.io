(function (t) {
	function e(e) {
		for (var a, o, n = e[0], l = e[1], c = e[2], g = 0, u = []; g < n.length; g++) o = n[g], Object.prototype.hasOwnProperty.call(i, o) && i[o] && u.push(i[o][0]), i[o] = 0;
		for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
		m && m(e);
		while (u.length) u.shift()();
		return r.push.apply(r, c || []), s()
	}

	function s() {
		for (var t, e = 0; e < r.length; e++) {
			for (var s = r[e], a = !0, n = 1; n < s.length; n++) {
				var l = s[n];
				0 !== i[l] && (a = !1)
			}
			a && (r.splice(e--, 1), t = o(o.s = s[0]))
		}
		return t
	}
	var a = {},
		i = {
			app: 0
		},
		r = [];

	function o(e) {
		if (a[e]) return a[e].exports;
		var s = a[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(s.exports, s, s.exports, o), s.l = !0, s.exports
	}
	o.m = t, o.c = a, o.d = function (t, e, s) {
		o.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: s
		})
	}, o.r = function (t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, o.t = function (t, e) {
		if (1 & e && (t = o(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var s = Object.create(null);
		if (o.r(s), Object.defineProperty(s, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var a in t) o.d(s, a, function (e) {
				return t[e]
			}.bind(null, a));
		return s
	}, o.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t["default"]
		} : function () {
			return t
		};
		return o.d(e, "a", e), e
	}, o.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, o.p = "/";
	var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
		l = n.push.bind(n);
	n.push = e, n = n.slice();
	for (var c = 0; c < n.length; c++) e(n[c]);
	var m = l;
	r.push([0, "chunk-vendors"]), s()
})({
	0: function (t, e, s) {
		t.exports = s("56d7")
	},
	"0375": function (t, e, s) {
		"use strict";
		s("f467")
	},
	"10b4": function (t, e, s) {},
	2605: function (t, e, s) {},
	"2b1d": function (t, e, s) {},
	"449d": function (t, e, s) {
		"use strict";
		s("10b4")
	},
	"482f": function (t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGKSURBVHgBdVJLUsJAEH09AsUyNzCegHgCtoIbo2K5gxsYTzDEci85AWErUrIBLDcegXgCOYJLNTJtDyZIEeyqSaamP6/7vSZs2MmjdipVBAS0GXBXj4yEiZIUHI4b4SKPVfmlNdMdSXqThDqz6rLB4eoQInG7Zcb8fKqDPJ7s5+JJHhh3S1adUVMPsMNskqK/GLqcadcAcybuDo9uonUhQ3UidgQ9vs+K2a4sQPqJA8UgLe0leVJroj3YdkE9kJJj4tPJ7b71DRthDJm3UuWrkiB5ZCQgs+FxmMjPt3fbjRSFUSnl/j3wwAiYEmiP2bxuz9R61p6M8LJk+JtsLg1sYbeEf4wM+sKqP/rtoGBCFBZEqrbtYEaUKrwXM+CJFoklJ2YynQIiwSkbOMU8akvRRH1VORJU72watrcQa4ay7cnMysRgLwXCFVtWH7n0DeP6oRn2sMPyGFEhsNKtac42Q8tDYkXPmd6Tmdi2J0iyNUG+WbRZNdNNy356VqbseWHA8fcHRWM/XJP1A32kwhgPBNTmAAAAAElFTkSuQmCC"
	},
	4975: function (t, e, s) {},
	"56d7": function (t, e, s) {
		"use strict";
		s.r(e), s.d(e, "bus", (function () {
			return ot
		})), s.d(e, "auxBus", (function () {
			return nt
		}));
		s("4de4"), s("d3b7"), s("ac1f"), s("25f0"), s("5319"), s("e260"), s("e6cf"), s("cca6"), s("a79d");
		var a = s("2b0e"),
			i = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("v-app", [s("div", {
					staticClass: "custom-container"
				}, [s("FilterSide"), s("Find"), s("Pagination"), s("div", {
					staticClass: "aside-right"
				}, [s("Ad"), s("Manager")], 1)], 1)])
			},
			r = [],
			o = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", [s("div", {
					staticClass: "filter"
				}, [t.loaded ? t._e() : s("Loader", {
					staticClass: "ldr"
				}), s("h1", [t._v("Квартиры в ЖК «Фрукты»")]), t._m(0), s("div", {
					staticClass: "costAndSquare"
				}, [s("div", {
					staticClass: "cost input-side"
				}, [s("span", [t._v("Стоимость квартиры")]), s("div", {
					staticClass: "cost__box input-side__box"
				}, [s("div", {
					staticClass: "from"
				}, [s("span", [t._v("От")]), s("v-text-field", {
					staticClass: "mt-0 pt-0",
					attrs: {
						value: t.range[0],
						"hide-details": "",
						loading: "false",
						"single-line": "",
						type: "number"
					},
					on: {
						change: function (e) {
							return t.$set(t.range, 0, e)
						}
					}
				})], 1), s("div", {
					staticClass: "divider"
				}), s("div", {
					staticClass: "to"
				}, [s("span", [t._v("до")]), s("v-text-field", {
					staticClass: "mt-0 pt-0",
					attrs: {
						value: t.range[1],
						"hide-details": "",
						loading: "false",
						"single-line": "",
						type: "number"
					},
					on: {
						change: function (e) {
							return t.$set(t.range, 1, e)
						}
					}
				}), s("span", [t._v("₽")])], 1), s("v-range-slider", {
					staticClass: "align-center",
					attrs: {
						max: t.slPrMax,
						min: t.slPrMin,
						"hide-details": ""
					},
					model: {
						value: t.range,
						callback: function (e) {
							t.range = e
						},
						expression: "range"
					}
				})], 1)]), s("div", {
					staticClass: "square input-side"
				}, [s("span", [t._v(" Общая площадь")]), s("div", {
					staticClass: "square__box input-side__box"
				}, [s("div", {
					staticClass: "from"
				}, [s("span", [t._v("От")]), s("v-text-field", {
					staticClass: "mt-0 pt-0",
					attrs: {
						value: t.rangeSq[0],
						"hide-details": "",
						loading: "false",
						"single-line": "",
						type: "number"
					},
					on: {
						change: function (e) {
							return t.$set(t.rangeSq, 0, e)
						}
					}
				})], 1), s("div", {
					staticClass: "divider"
				}), s("div", {
					staticClass: "to"
				}, [s("span", [t._v("до")]), s("v-text-field", {
					staticClass: "mt-0 pt-0",
					attrs: {
						value: t.rangeSq[1],
						"hide-details": "",
						loading: "false",
						"single-line": "",
						type: "number"
					},
					on: {
						change: function (e) {
							return t.$set(t.rangeSq, 1, e)
						}
					}
				}), s("span", [t._v("м²")])], 1), s("v-range-slider", {
					staticClass: "align-center",
					attrs: {
						max: t.slSqMax,
						min: t.slSqMin,
						"hide-details": ""
					},
					model: {
						value: t.rangeSq,
						callback: function (e) {
							t.rangeSq = e
						},
						expression: "rangeSq"
					}
				})], 1)])]), s("div", {
					staticClass: "buttons"
				}, [s("button", {
					staticClass: "btn reset",
					on: {
						click: t.resetResults
					}
				}, [s("p", [t._v("Сбросить")])]), s("button", {
					staticClass: "btn show",
					on: {
						click: t.showResults
					}
				}, [s("p", [t._v("Показать " + t._s(t.resultLength) + " квартиры")])])])], 1)])
			},
			n = [function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "rooms"
				}, [s("span", [t._v("Количество комнат")]), s("div", {
					staticClass: "rooms__items"
				}, [s("button", {
					attrs: {
						id: "roomsBtn"
					}
				}, [t._v("Своб.план")]), s("button", {
					attrs: {
						id: "roomsBtn"
					}
				}, [t._v("Студия")]), s("button", {
					staticClass: "round",
					attrs: {
						id: "roomsBtn"
					}
				}, [t._v("1")]), s("button", {
					staticClass: "round",
					attrs: {
						id: "roomsBtn"
					}
				}, [t._v("2")]), s("button", {
					staticClass: "round",
					attrs: {
						id: "roomsBtn"
					}
				}, [t._v("3")]), s("button", {
					staticClass: "fourPlus round",
					attrs: {
						id: "roomsBtn"
					}
				})])])
			}],
			l = (s("4160"), s("159b"), s("5530")),
			c = s("2f62"),
			m = function () {
				var t = this,
					e = t.$createElement;
				t._self._c;
				return t._m(0)
			},
			g = [function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "loader"
				}, [s("div", {
					staticClass: "lds-ring"
				}, [s("div"), s("div"), s("div"), s("div")])])
			}],
			u = {},
			d = u,
			A = (s("449d"), s("2877")),
			p = Object(A["a"])(d, m, g, !1, null, null, null),
			f = p.exports,
			v = {
				components: {
					Loader: f
				},
				data: function () {
					return {
						range: [-0, 70],
						slPrMin: 0,
						slPrMax: 0,
						rangeSq: [-0, 70],
						slSqMin: 0,
						slSqMax: 0,
						rooms: "all",
						resultLength: 0
					}
				},
				computed: Object(l["a"])({}, Object(c["b"])(["sortByPrice", "sortBySquares", "flats", "loaded"])),
				methods: Object(l["a"])(Object(l["a"])({}, Object(c["c"])(["SET_FILTERED_DATA", "CHANGE_LOADED", "RESET_FILTERED_DATA"])), {}, {
					showResults: function () {
						var t = this;
						this.CHANGE_LOADED(), setTimeout((function () {
							t.CHANGE_LOADED()
						}), 2e3), ot.$emit("showResults")
					},
					resetResults: function () {
						this.range = [-0, 70], this.slPrMin = 0, this.slPrMax = 0, this.rangeSq = [-0, 70], this.slSqMin = 0, this.slSqMax = 0, this.rooms = "all", this.resultLength = 0, this.RESET_FILTERED_DATA(), this.setStartVals(), this.handleRoomsBtn()
					},
					setStartVals: function () {
						this.slPrMin = this.sortByPrice[0].price, this.slPrMax = this.sortByPrice[this.sortByPrice.length - 1].price, this.range[0] = this.slPrMin, this.range[1] = this.slPrMax, this.slSqMin = this.sortBySquares[0].totalArea, this.slSqMax = this.sortBySquares[this.sortBySquares.length - 1].totalArea, this.rangeSq[0] = this.slSqMin, this.rangeSq[1] = this.slSqMax
					},
					roomsSet: function (t) {
						var e, s = document.querySelectorAll("#roomsBtn");
						s.forEach((function (e) {
							t.target.textContent != e.textContent && e.classList.remove("room-active")
						})), t.target.classList.toggle("room-active");
						var a = t.target.textContent;
						switch (a) {
							case "":
								e = "4";
								break;
							case "Своб.план":
								e = "layout";
								break;
							case "Студия":
								e = "atelier";
								break;
							default:
								e = t.target.textContent;
								break
						}
						var i = document.querySelector(".room-active");
						i || (e = "all"), this.rooms = e
					},
					filterFlats: function () {
						var t = this,
							e = [],
							s = [];
						s = this.flats.filter((function (e) {
							return "all" === t.rooms ? e.filterRooms : e.filterRooms === t.rooms
						}));
						var a = [];
						a = s.filter((function (e) {
							return e.price >= t.range[0] && e.price <= t.range[1]
						}));
						var i = [];
						i = a.filter((function (e) {
							return e.totalArea >= t.rangeSq[0] && e.totalArea <= t.rangeSq[1]
						})), e = i, this.resultLength = i.length, this.SET_FILTERED_DATA(e)
					},
					handleRoomsBtn: function () {
						var t = this,
							e = document.querySelectorAll("#roomsBtn");
						e.forEach((function (e) {
							e.addEventListener("click", t.roomsSet)
						}))
					}
				}),
				watch: {
					range: function () {
						this.filterFlats()
					},
					rangeSq: function () {
						this.filterFlats()
					},
					rooms: function () {
						this.filterFlats()
					}
				},
				mounted: function () {
					this.setStartVals(), this.handleRoomsBtn()
				}
			},
			h = v,
			R = (s("94c7"), s("6544")),
			y = s.n(R),
			_ = s("5963"),
			k = s("8654"),
			C = Object(A["a"])(h, o, n, !1, null, null, null),
			S = C.exports;
		y()(C, {
			VRangeSlider: _["a"],
			VTextField: k["a"]
		});
		var b = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "ad"
				}, [s("h2", [t._v(" ЖК Министерские озера")]), s("div", {
					staticClass: "stat-line"
				}, [t._m(0), t._m(1), s("div", {
					staticClass: "rating"
				}, [s("v-rating", {
					attrs: {
						"background-color": "yellow",
						color: "yellow accent-4",
						dense: "",
						"half-increments": "",
						hover: "",
						size: "18"
					},
					model: {
						value: t.rating,
						callback: function (e) {
							t.rating = e
						},
						expression: "rating"
					}
				})], 1), s("a", {
					attrs: {
						href: "#"
					}
				}, [t._v("23 отзыва")])]), t._m(2), s("div", {
					staticClass: "line"
				}), t._m(3)])
			},
			P = [function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("a", {
					attrs: {
						href: "#"
					}
				}, [a("img", {
					staticClass: "net",
					attrs: {
						src: s("dca3")
					}
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("a", {
					attrs: {
						href: "#"
					}
				}, [a("img", {
					staticClass: "heart",
					attrs: {
						src: s("7b48")
					}
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "cost"
				}, [s("h3", [t._v("1.5-24.8 млн.₽")]), s("span", [t._v("120 000 - 170 000 ₽ за м²")])])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "mortgage"
				}, [s("p", [t._v("В ипотеку")]), s("a", [t._v("от 29 500 ₽/мес")])])
			}],
			M = {
				data: function () {
					return {
						rating: 3.2
					}
				}
			},
			E = M,
			w = (s("0375"), s("1d4d")),
			q = Object(A["a"])(E, b, P, !1, null, "93b1effa", null),
			I = q.exports;
		y()(q, {
			VRating: w["a"]
		});
		var j = function () {
				var t = this,
					e = t.$createElement;
				t._self._c;
				return t._m(0)
			},
			B = [function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "manager"
				}, [a("div", {
					staticClass: "manager__name"
				}, [a("img", {
					attrs: {
						src: s("b2e1")
					}
				}), a("div", {
					staticClass: "manager__title"
				}, [a("h3", [t._v("Константин "), a("br"), t._v(" Константинопольский")]), a("p", [t._v("Менеджер по подбору")])])]), a("div", {
					staticClass: "line"
				}), a("div", {
					staticClass: "manager__content"
				}, [a("div", {
					staticClass: "manager__contact"
				}, [a("p", [t._v("+7(931) 364-87-11")]), a("p", [t._v("murashkintcev@bvbrealty.ru ")])]), a("div", {
					staticClass: "manager__btns"
				}, [a("button", {
					staticClass: "order"
				}, [t._v("Заказать показ ")]), a("button", {
					staticClass: "call"
				}, [t._v("Позвонить мне ")])])])])
			}],
			x = {
				data: function () {
					return {}
				}
			},
			U = x,
			D = (s("e242"), Object(A["a"])(U, j, B, !1, null, "5460892c", null)),
			T = D.exports,
			O = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "find"
				}, [t.loaded ? t._e() : s("div", {
					staticClass: "cover"
				}), 0 == t.sortedData.length ? s("div", {
					staticClass: "empty"
				}, [t._m(0), t._m(1)]) : s("div", {
					staticClass: "find-cont"
				}, [s("h2", [t._v("Найдено " + t._s(t.sortedData.length) + " квартир")]), s("div", {
					staticClass: "table"
				}, [t._m(2), t._l(t.flatsToShow, (function (e) {
					return s("div", {
						key: e.id,
						staticClass: "table-row flatLine",
						on: {
							click: t.expandCard
						}
					}, [s("div", {
						staticClass: "table-row-item type"
					}, [t._v(t._s(t._f("roomType")(e.room)))]), s("div", {
						staticClass: "table-row-item"
					}, [t._v(t._s(e.floor) + "/25")]), s("div", {
						staticClass: "table-row-item"
					}, [t._v(t._s(e.quarter) + "кв." + t._s(e.year))]), s("div", {
						staticClass: "table-row-item"
					}, [t._v(t._s(e.totalArea) + "м²")]), s("div", {
						staticClass: "table-row-item cost"
					}, [t._v(t._s(t._f("splitByNum")(e.price)) + "₽")]), t._m(3, !0), s("div", {
						staticClass: "content-part"
					}, [t._m(4, !0), s("div", {
						staticClass: "detail"
					}, [t._m(5, !0), s("div", {
						staticClass: "detail__info"
					}, [s("h3", [t._v(t._s(t._f("roomTypeDetail")(e.room)))]), s("div", {
						staticClass: "detail__first-row"
					}, [s("span", [t._v(t._s(t._f("splitByNum")(e.price)) + " ₽")]), s("div", {
						staticClass: "vert-line"
					}), s("span", [t._v(t._s(e.totalArea) + "м²")])]), s("div", {
						staticClass: "detail__scnd-row"
					}, [s("div", {
						staticClass: "detail__square"
					}, [s("p", {
						staticClass: "detail-subtitle"
					}, [t._v("Цена за м²")]), s("p", [t._v(t._s(e.priceM2) + " ₽")])]), s("div", {
						staticClass: "detail__otdelka"
					}, [s("p", {
						staticClass: "detail-subtitle"
					}, [t._v("Отделка")]), s("p", [t._v(t._s(e.finishingApartments))])]), s("div", {
						staticClass: "detail__corp"
					}, [s("p", {
						staticClass: "detail-subtitle"
					}, [t._v("Корпус ")]), s("p", [t._v(t._s(e.corpus))])])]), t._m(6, !0)])]), s("div", {
						staticClass: "down-line"
					}), t._m(7, !0)])])
				}))], 2)])])
			},
			F = [function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "empty__image-side"
				}, [s("div", {
					staticClass: "cirkle-dashed"
				}), s("div", {
					staticClass: "lens"
				}, [s("div", {
					staticClass: "round"
				}, [s("div", {
					staticClass: "stick"
				})])]), s("div", {
					staticClass: "sliders-round"
				}, [s("div", {
					staticClass: "sldrs"
				}, [s("div", {
					staticClass: "sldr"
				}, [s("div", {
					staticClass: "slRoLeft"
				})]), s("div", {
					staticClass: "sldr"
				}, [s("div", {
					staticClass: "slRoRight"
				})])])])])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "empty__info-side"
				}, [s("h3", [t._v("Мы ничего похожего "), s("br"), t._v(" не нашли")]), s("p", [t._v("Попробуйте задать другие условия поиска "), s("br"), t._v(" или сбросьте фильтр")])])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "table-header table-row"
				}, [s("div", {
					staticClass: "table-header__item table-row-item"
				}, [t._v("Тип")]), s("div", {
					staticClass: "table-header__item table-row-item"
				}, [t._v("Этаж")]), s("div", {
					staticClass: "table-header__item table-row-item"
				}, [t._v("Срок сдачи ")]), s("div", {
					staticClass: "table-header__item table-row-item"
				}, [t._v("Площадь")]), s("div", {
					staticClass: "table-header__item table-row-item"
				}, [t._v("Стоимость")]), s("div", {
					staticClass: "table-header__item table-row-item"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "table-row-item"
				}, [a("div", {
					staticClass: "heart"
				}, [a("img", {
					attrs: {
						src: s("7b48")
					}
				})]), a("div", {
					staticClass: "arrow"
				}, [a("img", {
					attrs: {
						src: s("5a8f")
					}
				})])])
			}, function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "chips"
				}, [a("div", {
					staticClass: "discount"
				}, [a("a", {
					attrs: {
						href: "#"
					}
				}, [t._v("Скидка 2%")]), a("img", {
					attrs: {
						src: s("482f")
					}
				})]), a("div", {
					staticClass: "mat-cap"
				}, [a("a", {
					attrs: {
						href: "#"
					}
				}, [t._v("Материнский капитал")]), a("img", {
					attrs: {
						src: s("e8a3")
					}
				})]), a("div", {
					staticClass: "mortgage"
				}, [a("a", {
					attrs: {
						href: "#"
					}
				}, [t._v("Ипотека от 1% ")])])])
			}, function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "image-side"
				}, [a("img", {
					attrs: {
						src: s("7703")
					}
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "detail__desc"
				}, [a("a", [t._v("Подробное описание")]), a("img", {
					attrs: {
						src: s("dcc5")
					}
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "inner-form"
				}, [s("h3", [t._v("Хотите записаться на просмотр объекта?")]), s("h4", [t._v("Оставьте свои данные, и мы организуем просмотр в удобное для вас время.")]), s("div", {
					staticClass: "inner-form__body"
				}, [s("div", {
					staticClass: "name-side"
				}, [s("p", [t._v("Имя ")]), s("input", {
					attrs: {
						placeholder: "Введите имя"
					}
				})]), s("div", {
					staticClass: "phone-side"
				}, [s("p", [t._v("Номер телефона ")]), s("input", {
					attrs: {
						placeholder: "+7"
					}
				})]), s("div", {
					staticClass: "order-btn"
				}, [s("button", [t._v("Оставить заявку")])])]), s("div", {
					staticClass: "policy"
				}, [s("span", [t._v("Оставляя заявку вы соглашаетесь с ")]), s("a", [t._v("политикой конфиденциальности")])])])
			}],
			J = (s("fb6a"), {
				data: function () {
					return {
						sortedData: [],
						indexFlatToAppear: [],
						flatsToShow: []
					}
				},
				computed: Object(l["a"])({}, Object(c["b"])(["flats", "filteredFlats", "loaded"])),
				methods: {
					updateShowsData: function () {
						this.sortedData = this.filteredFlats, this.updatedPageContent
					},
					expandCard: function (t) {
						t.target.closest(".flatLine").classList.toggle("active")
					}
				},
				mounted: function () {
					var t = this;
					ot.$on("showResults", (function () {
						t.updateShowsData(), t.flatsToShow = t.filteredFlats.slice(0, 9)
					})), this.sortedData = this.flats, nt.$on("pageChange", (function (e) {
						t.flatsToShow = e
					})), this.flatsToShow = this.flats.slice(0, 9)
				},
				filters: {
					roomType: function (t) {
						var e;
						switch (t) {
							case "layout":
								e = "Cвоб.план.";
								break;
							case "atelier":
								e = "Студия";
								break;
							default:
								e = t + "-комн.";
								break
						}
						return e
					},
					roomTypeDetail: function (t) {
						var e;
						switch (t) {
							case "layout":
								e = "Cвободная планировка";
								break;
							case "atelier":
								e = "Студия";
								break;
							default:
								e = t + "-комнатная квартира";
								break
						}
						return e
					}
				}
			}),
			L = J,
			Q = (s("7b09"), Object(A["a"])(L, O, F, !1, null, "5f4845f4", null)),
			N = Q.exports,
			Y = function () {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "pagination"
				}, [a("ul", [1 != t.currentPage ? a("li", {
					staticClass: "prev",
					on: {
						click: function (e) {
							t.currentPage--
						}
					}
				}, [a("img", {
					attrs: {
						src: s("5a8f")
					}
				})]) : t._e(), t._l(t.pages, (function (e, s) {
					return a("li", {
						key: e.id,
						attrs: {
							id: "pageBtn"
						},
						on: {
							click: t.setPage
						}
					}, [t._v(t._s(s + 1) + " ")])
				})), t.currentPage != t.pages ? a("li", {
					staticClass: "next",
					on: {
						click: function (e) {
							t.currentPage++
						}
					}
				}, [a("img", {
					attrs: {
						src: s("5a8f")
					}
				})]) : t._e()], 2)])
			},
			V = [],
			K = (s("a9e3"), {
				data: function () {
					return {
						elIndexRange: [0, 1],
						itemsPerPage: 10,
						pages: 1,
						currentPage: 1
					}
				},
				computed: Object(l["a"])({}, Object(c["b"])(["flats", "filteredFlats"])),
				mounted: function () {
					var t = this;
					ot.$on("showResults", (function () {
						t.pages = Math.ceil(t.filteredFlats.length / t.itemsPerPage), t.setFirstPage()
					})), this.pages = Math.ceil(this.flats.length / this.itemsPerPage), this.setFirstPage()
				},
				methods: {
					setFirstPage: function () {
						var t = document.querySelectorAll("#pageBtn");
						t[0].classList.add("page-active"), this.elIndexRange[0] = 0, this.elIndexRange[1] = this.itemsPerPage - 1
					},
					setPage: function (t) {
						this.currentPage = Number(t.target.textContent)
					},
					setPaginationRange: function () {
						var t = (this.currentPage - 1) * this.itemsPerPage,
							e = t + this.itemsPerPage - 1;
						this.elIndexRange[0] = t, this.elIndexRange[1] = e
					}
				},
				watch: {
					currentPage: function () {
						var t = this,
							e = document.querySelectorAll("#pageBtn");
						e.forEach((function (e) {
							t.currentPage == e.textContent ? e.classList.add("page-active") : e.classList.remove("page-active")
						})), this.setPaginationRange(), setTimeout((function () {
							nt.$emit("pageChange", t.filteredFlats.slice(t.elIndexRange[0], t.elIndexRange[1]))
						}), 0)
					}
				}
			}),
			X = K,
			G = (s("de75"), Object(A["a"])(X, Y, V, !1, null, "4bddd2ae", null)),
			H = G.exports,
			Z = {
				name: "App",
				components: {
					FilterSide: S,
					Ad: I,
					Manager: T,
					Find: N,
					Pagination: H
				},
				data: function () {
					return {}
				}
			},
			W = Z,
			z = (s("cf25"), s("7496")),
			$ = Object(A["a"])(W, i, r, !1, null, null, null),
			tt = $.exports;
		y()($, {
			VApp: z["a"]
		});
		var et = s("f309");
		a["a"].use(et["a"]);
		var st = new et["a"]({}),
			at = s("8c4f");
		a["a"].use(at["a"]);
		var it = new at["a"]({
			mode: "history"
		});
		a["a"].use(c["a"]);
		var rt = new c["a"].Store({
			actions: {},
			mutations: {
				SET_FILTERED_DATA: function (t, e) {
					t.filteredData = e
				},
				CHANGE_LOADED: function (t) {
					t.loaded = !t.loaded
				},
				RESET_FILTERED_DATA: function (t) {
					t.filteredData = []
				}
			},
			state: {
				data: [{
					id: 1,
					room: 1,
					filterRooms: "1",
					price: 22356e3,
					priceM2: 12e4,
					totalArea: 155,
					livingRoom: 100,
					kitchenArea: 15,
					floor: 10,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2023,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !0,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 2,
					room: "atelier",
					filterRooms: "atelier",
					price: 12356e3,
					priceM2: 13e4,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 25,
					floor: 20,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !0,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 3,
					room: 1,
					filterRooms: "1",
					price: 2211e3,
					priceM2: 132e3,
					totalArea: 108,
					livingRoom: 100,
					kitchenArea: 12,
					floor: 8,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 4,
					room: 1,
					filterRooms: "1",
					price: 31201e3,
					priceM2: 12e4,
					totalArea: 100,
					livingRoom: 100,
					kitchenArea: 30,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2020,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !0,
						developerReservation: !1,
						customerReservation: !0,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 5,
					room: "atelier",
					filterRooms: "atelier",
					price: 4001e3,
					priceM2: 1e4,
					totalArea: 222,
					livingRoom: 100,
					kitchenArea: 21,
					floor: 15,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2021,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !0,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 6,
					room: 1,
					filterRooms: "1",
					price: 44501e3,
					priceM2: 12e4,
					totalArea: 322,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 2,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 1,
					year: 2022,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 7,
					room: "atelier",
					filterRooms: "atelier",
					price: 92501e3,
					priceM2: 1192e3,
					totalArea: 392,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2022,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 8,
					room: 2,
					filterRooms: "2",
					price: 10050100,
					priceM2: 5192e3,
					totalArea: 310,
					livingRoom: 100,
					kitchenArea: 28,
					floor: 18,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2023,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 9,
					room: 3,
					filterRooms: "3",
					price: 100501e3,
					priceM2: 5192e3,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 22,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2024,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !0,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 10,
					room: 4,
					filterRooms: "4",
					price: 8401e3,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 6,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 4,
					quarter: 2,
					year: 2021,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !0,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 11,
					room: 4,
					filterRooms: "4",
					price: 201e4,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 92,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 3,
					year: 2023,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 12,
					room: "layout",
					filterRooms: "layout",
					price: 22356e3,
					priceM2: 12e4,
					totalArea: 155,
					livingRoom: 100,
					kitchenArea: 15,
					floor: 10,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2023,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 13,
					room: "atelier",
					filterRooms: "atelier",
					price: 12356e3,
					priceM2: 13e4,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 25,
					floor: 20,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 14,
					room: 1,
					filterRooms: "1",
					price: 2211e3,
					priceM2: 132e3,
					totalArea: 108,
					livingRoom: 100,
					kitchenArea: 12,
					floor: 8,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2020,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 15,
					room: "atelier",
					filterRooms: "atelier",
					price: 31201e3,
					priceM2: 12e4,
					totalArea: 100,
					livingRoom: 100,
					kitchenArea: 30,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 16,
					room: 1,
					filterRooms: "1",
					price: 4001e3,
					priceM2: 1e4,
					totalArea: 222,
					livingRoom: 100,
					kitchenArea: 21,
					floor: 15,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2021,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !0,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 17,
					room: 1,
					filterRooms: "1",
					price: 44501e3,
					priceM2: 12e4,
					totalArea: 322,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 2,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 1,
					year: 2022,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 18,
					room: "atelier",
					filterRooms: "atelier",
					price: 92501e3,
					priceM2: 1192e3,
					totalArea: 392,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2022,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 19,
					room: 2,
					filterRooms: "2",
					price: 100501e3,
					priceM2: 5192e3,
					totalArea: 310,
					livingRoom: 100,
					kitchenArea: 28,
					floor: 18,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2023,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 20,
					room: 3,
					filterRooms: "3",
					price: 100501e3,
					priceM2: 5192e3,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 22,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2024,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 21,
					room: 4,
					filterRooms: "4",
					price: 8401e3,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 6,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 4,
					quarter: 2,
					year: 2021,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 22,
					room: 4,
					filterRooms: "4",
					price: 201e4,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 92,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 3,
					year: 2023,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !0,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 23,
					room: "layout",
					filterRooms: "layout",
					price: 22356e3,
					priceM2: 12e4,
					totalArea: 155,
					livingRoom: 100,
					kitchenArea: 15,
					floor: 10,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2023,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 24,
					room: "atelier",
					filterRooms: "atelier",
					price: 12356e3,
					priceM2: 13e4,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 25,
					floor: 20,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 25,
					room: 1,
					filterRooms: "1",
					price: 2211e3,
					priceM2: 132e3,
					totalArea: 108,
					livingRoom: 100,
					kitchenArea: 12,
					floor: 8,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2020,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 26,
					room: "atelier",
					filterRooms: "atelier",
					price: 31201e3,
					priceM2: 12e4,
					totalArea: 100,
					livingRoom: 100,
					kitchenArea: 30,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 27,
					room: 1,
					filterRooms: "1",
					price: 4001e3,
					priceM2: 1e4,
					totalArea: 222,
					livingRoom: 100,
					kitchenArea: 21,
					floor: 15,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2021,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 28,
					room: 1,
					filterRooms: "1",
					price: 44501e3,
					priceM2: 12e4,
					totalArea: 322,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 2,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 1,
					year: 2022,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !0,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 29,
					room: 1,
					filterRooms: "1",
					price: 92501e3,
					priceM2: 1192e3,
					totalArea: 392,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2022,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 30,
					room: 2,
					filterRooms: "2",
					price: 100501e3,
					priceM2: 5192e3,
					totalArea: 310,
					livingRoom: 100,
					kitchenArea: 28,
					floor: 18,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2023,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 31,
					room: 3,
					filterRooms: "3",
					price: 100501e3,
					priceM2: 5192e3,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 22,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2024,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 32,
					room: 4,
					filterRooms: "4",
					price: 8401e3,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 6,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 4,
					quarter: 2,
					year: 2021,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !0,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 33,
					room: 4,
					filterRooms: "4",
					price: 201e4,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 92,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 3,
					year: 2023,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 34,
					room: "layout",
					filterRooms: "layout",
					price: 22356e3,
					priceM2: 12e4,
					totalArea: 155,
					livingRoom: 100,
					kitchenArea: 15,
					floor: 10,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2023,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !0
					}]
				}, {
					id: 35,
					room: "layout",
					filterRooms: "layout",
					price: 12356e3,
					priceM2: 13e4,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 25,
					floor: 20,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 1,
					quarter: 1,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 36,
					room: "atelier",
					filterRooms: "atelier",
					price: 2211e3,
					priceM2: 132e3,
					totalArea: 108,
					livingRoom: 100,
					kitchenArea: 12,
					floor: 8,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2020,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 37,
					room: 1,
					filterRooms: "1",
					price: 31201e3,
					priceM2: 12e4,
					totalArea: 100,
					livingRoom: 100,
					kitchenArea: 30,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2020,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !0,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 38,
					room: "atelier",
					filterRooms: "atelier",
					price: 4001e3,
					priceM2: 1e4,
					totalArea: 222,
					livingRoom: 100,
					kitchenArea: 21,
					floor: 15,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2021,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 39,
					room: 1,
					filterRooms: "1",
					price: 44501e3,
					priceM2: 12e4,
					totalArea: 322,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 2,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 1,
					year: 2022,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 40,
					room: 1,
					filterRooms: "1",
					price: 92501e3,
					priceM2: 1192e3,
					totalArea: 392,
					livingRoom: 100,
					kitchenArea: 11,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 3,
					year: 2022,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !0,
						sold: !1,
						stock: !0
					}]
				}, {
					id: 41,
					room: 2,
					filterRooms: "2",
					price: 100501e3,
					priceM2: 5192e3,
					totalArea: 310,
					livingRoom: 100,
					kitchenArea: 28,
					floor: 18,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 3,
					quarter: 4,
					year: 2023,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !0,
						stock: !1
					}]
				}, {
					id: 42,
					room: 3,
					filterRooms: "3",
					price: 100501e3,
					priceM2: 5192e3,
					totalArea: 128,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 22,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 2,
					year: 2024,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 43,
					room: 4,
					filterRooms: "4",
					price: 8401e3,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 18,
					floor: 6,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 4,
					quarter: 2,
					year: 2021,
					finishingApartments: "Чистовая",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !1,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 44,
					room: 4,
					filterRooms: "4",
					price: 201e4,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 92,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 3,
					year: 2023,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 45,
					room: 5,
					filterRooms: "4",
					price: 201e4,
					priceM2: 292e3,
					totalArea: 228,
					livingRoom: 100,
					kitchenArea: 92,
					floor: 9,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 3,
					year: 2023,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 46,
					room: 5,
					filterRooms: "4",
					price: 1001e4,
					priceM2: 292e3,
					totalArea: 105,
					livingRoom: 100,
					kitchenArea: 92,
					floor: 20,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 1,
					year: 2022,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !1,
						assignation: !0,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}, {
					id: 47,
					room: 6,
					filterRooms: "4",
					price: 1001e4,
					priceM2: 292e3,
					totalArea: 201,
					livingRoom: 100,
					kitchenArea: 92,
					floor: 5,
					layoutImg: "static/images/content/image.png",
					sitePath: "/jkrooms-123-123/",
					corpus: 2,
					quarter: 1,
					year: 2022,
					finishingApartments: "Дизайнерская",
					settingStatus: [{
						secondary: !0,
						assignation: !1,
						freely: !1,
						developerReservation: !0,
						customerReservation: !1,
						sold: !1,
						stock: !1
					}]
				}],
				filteredData: [],
				loaded: !0
			},
			getters: {
				sortByPrice: function (t) {
					var e = t.data.sort((function (t, e) {
						return t.price - e.price
					}));
					return e
				},
				sortBySquares: function (t) {
					var e = t.data.sort((function (t, e) {
						return t.totalArea - e.totalArea
					}));
					return e
				},
				flats: function (t) {
					return t.data
				},
				filteredFlats: function (t) {
					return t.filteredData
				},
				loaded: function (t) {
					return t.loaded
				}
			}
		});
		a["a"].config.productionTip = !1;
		var ot = new a["a"],
			nt = new a["a"];
		a["a"].filter("splitByNum", (function (t) {
			return t.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
		})), new a["a"]({
			vuetify: st,
			router: it,
			store: rt,
			render: function (t) {
				return t(tt)
			}
		}).$mount("#app")
	},
	"5a8f": function (t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAYAAAACTR1pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhY9BCsIwEEVnou57hB5B1yK2gnuP4kalbsasilTwLC7FhS249wo5gksXbWpqCJo2oR8CYf5/zB8ApR1l0ZZOK+jRfw73dB7XrHpqq+YpbQ4uKOGZmiM1/1LKCRsBCAUIbSPpgB9qsgyq16Aoru/pfHFBZKoCBupFs3iJj/yWuyApy/jIE4G//mnI2PCuQqGpbVq0oe8UrOPbsJENdUDP5g7kBG0YwAX1ak0U+LwPe0tdAHMDAHoAAAAASUVORK5CYII="
	},
	7703: function (t, e, s) {
		t.exports = s.p + "img/flat.4175f5b5.png"
	},
	"7b09": function (t, e, s) {
		"use strict";
		s("2b1d")
	},
	"7b48": function (t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgBpZRNbtNQEIBnxqUIVuEE5AjhABWOBBJLluyS3iABCk1ZPD+EaENASU5AeoJ2ixCKK8E+S5Y+ggUSFVU8w4yN1dQKNE1HSuTnmfne/BqhIi/dfh1hM7RnAU76fide1O+4d40AggaDpAjBrO+7yaIez0HDOlH2UR/Di1egOmAEmN1BIScgtUoMMXOwXYJz4J4bNoB4asaiABE+RqBUYwwRL14gArG6xRp9jRAe63NdX6dz5ubAv5hhERlP1bQugtFB9MxXS0C0MS1OQXvfPT1Z1O9GHxyiRJbJKdM9vYTDAgaTKsyk73sJ87xpvyrMxHwEYWKMm5S1NpCkZYpMeAz/EIPCf0QyOUTCtnYxpL81AMsf1pRyEgiloUBJ7PDqzfu7sKbkTbVIBRPSv9gO2VxDXlMYuAACzhR4dmgH7VSn44a1q8JsSpDA5Qc5G1NecMGRHmu3g2wIV5QgYGcdZmUYi+zlppC3WurotHt+EK0KM1sRaZvvb/mRj1wO9L6b2pzp2uh2oFsFWtigMx/zHXmf5hGXBt9OvqRb9x98QsQnavhoq/kQv8af48tgoCt34He/lzqsGu/p10QIj2w+UXDyS6g70gxMZ027RZnVu1XC3lbmF5dFcL6/WLcdZaamplIT4iNrgNXM0ly2QUuBJRSDGw61URWP49Ps53ZZs5WBpfReDzqaej5nGUDUd8/HcF2xaDvOrTT0fwCc3w71c/fOGgAAAABJRU5ErkJggg=="
	},
	"94c7": function (t, e, s) {
		"use strict";
		s("f4a1")
	},
	b2e1: function (t, e, s) {
		t.exports = s.p + "img/manager.ca17a7e4.png"
	},
	cf25: function (t, e, s) {
		"use strict";
		s("fea6")
	},
	dca3: function (t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGgSURBVHgBrZNLTsMwEIZnJlSCHZyA3IAcAESRYA8nIJwACpX6oJJjiapAW9ob0O7YlTVsgtQ9PUJ6Aip2QOPBDuXRdyPxS7Zj/87n8WMA/kkIMZUXNQcovGUAR3c7SlkHVzIVUBxIRtRsJtUaQIwcwrBlPmKBAPo2ANtDQwjO+UVlfWHQiaitWoT74w4HxUK6uxAoK6ruCqlnvaVjYOgMYZgapl2aBciIcpIIhZ6eNCsDWMmSd/qUkzfb2rbJUn6xcNY1c39uLSfLHiBugMKgz2EzQeSaCPSEnmKsX3pnctaiESgvK/Uo7BEZwBu/yrqUPZgjFPoQ3yl8meC5JZFuwoKaetgKeG4UQxGZKicrDd0cjpmMjZBJmpc7D2SZqu0/3G9u73ZRcxnwjlilmHBZWy4i7G/t7K21/Ucf5kU0TRlRsi1KDFICA128kjhtmnGGhINgdb6jXShps+Laxeg9oa27vi7JP3Z0KbGyP+dVa/rgTkaGexq0FitpkWnSc1g1VSxQAiD4SpVfMUdbjQeSMtVTqr9jfta3G0QtfxwZ7xMhYJ/Tcu5JOQAAAABJRU5ErkJggg=="
	},
	dcc5: function (t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBbY+xEYAgDEWTFJ4r2DGClWfrYnpOZmvpBtKxgwWa74EHwi/I8d9PIDzM7iSVME372lkKklCNv2kbF2c+cGlSq/1DxtHrpVETECGM5dhawAhayvV2YK5P0niXa+ah35aame6RmdADvuM0/rlJFXUAAAAASUVORK5CYII="
	},
	de75: function (t, e, s) {
		"use strict";
		s("2605")
	},
	e242: function (t, e, s) {
		"use strict";
		s("4975")
	},
	e8a3: function (t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgBdVJLThtBEH1VPR4pHxH7BpMTMDlBklXsyconsCNFgSiL+AaGE8AswNgb2zdgw08s4AYMJ8CcwOAFQri7i+4RgwYbWppP17/ee4TSmQ6/VfnhfYeAlrtG3kaETCwyI3az9vd4UsRy8TPrJW318OGKRL4CdsNofPGPNjYFJFLMF7e7jU65EW77PzuzfiKzfr2FN86033gRQ9Ne3VVTFyJ649P6SVoUYrjORFUSjD6uHYzz5F697TpvmfDuM80GyRBWopX1o++5c5DEStAlkm1xibDYryhE734fXucrDRpnJHQeECgWstvFSLU/h5n7NJ86+N1wP7f0PLOhsTC6LCKx0eZyaaedJGamMwPdLKNpFHzhKHgLjKBCQz2fN2v/TrPX/J6OSSUIVxcd2pgUrG4W7cogFkjGbviRJdteqsjKAWOqi3ZS1HLgZKzDMIVwvMihE8IqAorKNk+T9Zg4FeUGz48nd0kZpeOVlcfs/fifFy4cXhkK3PXa9KRDS460ZcR+PN+JYDsra8fjF4lPnSOluCvigoHY2xwQE/ce2fA+rf06fwbrEXzeyH3XIDnwAAAAAElFTkSuQmCC"
	},
	f467: function (t, e, s) {},
	f4a1: function (t, e, s) {},
	fea6: function (t, e, s) {}
});
//# sourceMappingURL=app.7833beb7.js.map