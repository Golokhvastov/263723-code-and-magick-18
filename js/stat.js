"use strict"

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, text, x, y) {
  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.fillText(text, x, y);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, "rgba(0, 0, 0, 0.7)", 110, 20);
  renderCloud(ctx, "#ffffff", 100, 10);

  renderText(ctx, "Ура вы победили!", 120, 40);
  renderText(ctx, "Список результатов:", 120, 60);
}
