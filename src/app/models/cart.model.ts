export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: number;
  readonly products: {
    readonly productID: number;
    readonly quantity: number;
  }[];
}
