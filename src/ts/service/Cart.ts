import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    countTotalWithoutDiscount (): number {
        let totalAmount = this._items.reduce((acc, current) => {
            return acc + current.price
        }, 0)

        return totalAmount;
    }

    countTotalWithDiscount (discount: number): number {
        let totalAmount = this._items.reduce((acc, current) => {
            return acc + current.price
        }, 0)

        let totalAmountWithDiscount = totalAmount - (totalAmount * discount / 100) 
        
        return totalAmountWithDiscount;
    }

    deleteItem (id: number): void {

        this._items = this._items.filter(item => item.id !== id)

    }
}