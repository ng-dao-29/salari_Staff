export class MoneyMonth<T> {
    month : T;
    money : T;
    next : MoneyMonth<T> | null = null;
    constructor(month:T,money:T) {
        this.month = month;
        this.money = money;
    }

    getdata():string {
        return `tháng ${this.month} tiền lương nhận đc là ${this.money}`
    }
}