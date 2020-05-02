import UILabel from './UILabel';

export default class UISprite extends PIXI.Sprite {

  constructor(textureName = "", x = 0, y = 0) {
    super();

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
}
