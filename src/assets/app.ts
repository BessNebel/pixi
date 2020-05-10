import * as PIXI from 'pixi.js';
import * as Images from './Images';
import PopupMessage from './PopupMessage';
import PopupNotification from './PopupNotification';

const pixi = new PIXI.Application({ width: 1250, height: 540, transparent: false });
pixi.renderer.backgroundColor = 0xCCCCCC;
document.body.appendChild(pixi.view);

PIXI
  .loader
  .add(Object.values(Images.images))
  .load(setup);

function setup() {
  let popupMessage = new PopupMessage(50, 50);
  pixi.stage.addChild(popupMessage);
  popupMessage.ImageBackground.ImageBackgroundMessage.TextTest.text = ":)";

  let popupNotifiaction = new PopupNotification(650, 150);
  pixi.stage.addChild(popupNotifiaction);
  popupNotifiaction.TextNotification.text = "Notification";
};
