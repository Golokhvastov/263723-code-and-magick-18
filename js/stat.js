"use strict"

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var COLUMN_WIDTH = 40;
var COLUMN_DISTANCE = 50;
var HISTOGRAM_HEIGHT = 150;

var renderCloud = function(ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, text, x, y) {
  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.fillText(text, x, y);
}

var renderColumn = function(ctx, color, x, y, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, COLUMN_WIDTH, height);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, "rgba(0, 0, 0, 0.7)", CLOUD_X + GAP, CLOUD_Y + GAP);
  renderCloud(ctx, "#ffffff", CLOUD_X, CLOUD_Y);

  renderText(ctx, "Ура вы победили!", CLOUD_X + 20, CLOUD_Y + 30);
  renderText(ctx, "Список результатов:", CLOUD_X + 20, CLOUD_Y + 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (i > 3) {
      break;
    }

    var columnHeight = Math.floor(HISTOGRAM_HEIGHT * (times[i] / maxTime));

    var columnX = CLOUD_X + 40 + (COLUMN_WIDTH + COLUMN_DISTANCE) * i;
    var columnY = CLOUD_Y + 90 + (HISTOGRAM_HEIGHT - columnHeight);

    if (names[i] === "Вы") {
      var columnColor = "rgba(255, 0, 0, 1)";
    } else {
      var columnColor = "hsl(240, " + Math.floor(Math.random() * 100) + "%, 50%)";
    }

    renderColumn(ctx, columnColor, columnX, columnY, columnHeight);

    renderText(ctx, Math.floor(times[i]) + "", columnX, columnY - 10);
    renderText(ctx, names[i], columnX, columnY + columnHeight + 20);
  }
}
