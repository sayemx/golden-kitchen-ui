export class Dish {
  public name: string;
  public imagePath: string;
  public price: string;

  constructor(name: string, imagePath: string, price: string) {
    this.name = name;
    this.imagePath = imagePath;
    this.price = price;
  }
}
