"use strict";
exports.__esModule = true;
exports.SalaryList = void 0;
var money_month_1 = require("./money_month");
var SalaryList = /** @class */ (function () {
    function SalaryList() {
        this.heal = null;
        this.tail = null;
        this.size = 0;
    }
    SalaryList.prototype.insertFirst = function (month, money) {
        var moneyMonth = new money_month_1.MoneyMonth(month, money);
        moneyMonth.next = this.heal;
        this.heal = moneyMonth;
        if (!this.tail) {
            this.tail = moneyMonth;
        }
        this.size++;
    };
    SalaryList.prototype.showList = function () {
        var mont = [];
        var current = this.heal;
        while (current !== null) {
            mont.push(current.getdata());
            current = current.next;
        }
        return mont;
    };
    SalaryList.prototype.totalSalary = function () {
        var totalMoney = 0;
        var currentMoney = this.heal;
        while (currentMoney !== null) {
            totalMoney = totalMoney + currentMoney.money;
            currentMoney = currentMoney.next;
        }
        return "t\u1ED5ng s\u1ED1 ti\u1EC1n l\u01B0\u01A1ng c\u1EAFc th\u1EAFng qua l\u00E0 ".concat(totalMoney, "VND");
    };
    SalaryList.prototype.highestSalary = function () {
        var current = this.heal;
        var maxMoney = current.money;
        while (current !== null) {
            if (maxMoney < current.money) {
                maxMoney = current.money;
            }
            current = current.next;
        }
        return "th\u00E1ng c\u00F3 l\u01B0\u01A1ng cao nh\u1EA5t l\u00E0 ".concat(maxMoney);
    };
    return SalaryList;
}());
exports.SalaryList = SalaryList;
