import UISprite from './UISprite';

export default class UIButton extends UISprite {

  constructor(background: string = "", x = 0, y = 0) {
    super(background, x, y);

    this.buttonMode = true;
    this.interactive = true;
  }

  addClickHandler(handler: (event: PIXI.interaction.InteractionEvent) => void) {
    this.on('click', handler);
  }
}
