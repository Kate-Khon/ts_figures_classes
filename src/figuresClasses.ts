type Figures = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Figures;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figures = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sortedValues = [a, b, c].sort((value1, value2) => value1 - value2);

    const sumOfSmallestValues
    = Number(sortedValues[0])
    + Number(sortedValues[1]);

    const biggestValue = Number(sortedValues.slice(-1));

    if (biggestValue >= sumOfSmallestValues
      || !a
      || !b
      || !c
    ) {
      throw new Error('The entered data of the sides is incorrect');
    }
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      halfOfPerimeter
      * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Figures = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The entered radius is incorrect');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Figures = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The entered height or/and width is incorrect');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
