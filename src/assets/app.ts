import * as PIXI from 'pixi.js';
import * as Images from './Images';
import PopupMessage from './PopupMessage';

const pixi = new PIXI.Application({ width: 760, height: 540, transparent: false });
pixi.renderer.backgroundColor = 0xCCCCCC;
document.body.appendChild(pixi.view);

PIXI
  .loader
  .add(Object.values(Images.images))
  .load(setup);

function setup() {
  let ts = new PopupMessage(80, 80);
  pixi.stage.addChild(ts);

  ts.ImageBackground.ImageBackgroundMessage.TextTest.text = ":)";
};
