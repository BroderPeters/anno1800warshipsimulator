"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var battleship_1 = require("./battleship");
// function init<T>(ctor: new () => T, props: Partial<T>): T {
//     return Object.assign(new ctor(), props);
//   }
var gunBoat = __assign(__assign({}, battleship_1.Battleship), { shipType: "Gunboat" });
document.body.textContent = gunBoat.shipType;
