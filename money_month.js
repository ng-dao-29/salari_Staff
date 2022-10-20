"use strict";
exports.__esModule = true;
exports.MoneyMonth = void 0;
var MoneyMonth = /** @class */ (function () {
    function MoneyMonth(month, money) {
        this.next = null;
        this.month = month;
        this.money = money;
    }
    MoneyMonth.prototype.getdata = function () {
        return "th\u00E1ng ".concat(this.month, " ti\u1EC1n l\u01B0\u01A1ng nh\u1EADn \u0111c l\u00E0 ").concat(this.money);
    };
    return MoneyMonth;
}());
exports.MoneyMonth = MoneyMonth;
