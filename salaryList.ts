import {MoneyMonth} from "./money_month";

export class SalaryList <T> {
    private heal: MoneyMonth<number> | null;
    private tail: MoneyMonth<number> | null;
    protected size: number;
    constructor() {
        this.heal = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(month:number, money:number): void {
        let moneyMonth = new MoneyMonth(month,money);
        moneyMonth.next = this.heal;
        this.heal = moneyMonth;
        if (!this.tail) {
            this.tail = moneyMonth;
        }
        this.size++
    }
    showList(): T[] {
        let mont = [];
        let current = this.heal;
        while (current !== null) {
            mont.push(current.getdata());
            current = current.next;
        }
        return mont;
    }

    totalSalary(): string {
        let totalMoney = 0;
        let currentMoney = this.heal;
        while (currentMoney !== null) {
            totalMoney = totalMoney + currentMoney.money;
            currentMoney = currentMoney.next;
        }
        return `tổng số tiền lương cắc thắng qua là ${totalMoney}VND`
    }

    highestSalary() {
        let current = this.heal;
        let maxMoney = current.money;
        while (current !== null) {
            if (maxMoney < current.money) {
                maxMoney = current.money
            }
            current = current.next
        }
        return `tháng có lương cao nhất là ${maxMoney}`
    }

}