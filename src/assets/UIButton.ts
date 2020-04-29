import UISprite from './UISprite';

export default class UIButton extends UISprite {

  constructor(parent: PIXI.Container, background: string, x = 0, y = 0) {
    super(parent, background, x, y);

    this.buttonMode = true;
    this.interactive = true;
  }

  addClickHandler(handler: (event: PIXI.interaction.InteractionEvent) => void) {
    this.on('click', handler);
  }
}
