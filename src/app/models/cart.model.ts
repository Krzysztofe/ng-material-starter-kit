export interface CartModel {
  readonly id: number;
  readonly date: number;
  readonly products: CartProducts[];
}

interface CartProducts {
  readonly productID: number;
  readonly quantity: number;

}
