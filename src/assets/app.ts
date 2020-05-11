import * as PIXI from 'pixi.js';
import * as Images from './Images';
import PopupTest from './PopupTest';

const pixi = new PIXI.Application({ width: 1250, height: 1000, transparent: false });
pixi.renderer.backgroundColor = 0xCCCCCC;
document.body.appendChild(pixi.view);

PIXI
  .loader
  .add(Object.values(Images.images))
  .load(setup);

function setup() {
  let popupTest = new PopupTest();
  pixi.stage.addChild(popupTest);

  popupTest.one.panel.buttons.accept.TextLabel.text = "accept";
  popupTest.two.panel.buttons.reject.TextLabel.text = "reject";
};
