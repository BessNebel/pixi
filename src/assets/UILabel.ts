export default class UILabel extends PIXI.Text {

  public parent: PIXI.Container;

  constructor(parent: PIXI.Container, text: string, size = 20, color = 0xffffff, x = 0, y = 0) {
    super(text, {fontSize: size, fill: color});

    this.parent = parent;
    this.parent.addChild(this);

    this.move(x, y);
  }

  move(x: number, y: number) {
    this.x = x - this.width/2;
    this.y = y - this.height/2;
  }
}
