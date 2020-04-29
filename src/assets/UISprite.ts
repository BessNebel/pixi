import UILabel from './UILabel';

export default class UISprite extends PIXI.Sprite {

  public Parent: PIXI.Container;
  public Label?: UILabel;

  constructor(parent: PIXI.Container, textureName = "", x = 0, y = 0) {
    super();

    this.Parent = parent;
    this.Parent.addChild(this);

    this.setTexture(textureName);
    this.move(x, y);
  }

  setTexture(textureName: string) {
    if (textureName != "") {
      this.texture = PIXI.loader.resources[textureName].texture;      
    }
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  addLabel(label: UILabel) {
    this.Label = label;
    this.addChild(label);
  }
}
