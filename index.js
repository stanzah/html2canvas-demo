/**
 * @param {*} ele id值
 * @param {*} ele2 为生成图片长按保存的对象
 * @param {*} dip type:M(移动端),P(pc端）,dpi:默认用2,大屏机型如有要求自行适配
 */
function produceImg(ele, ele2, dip) {
  let eles = document.getElementById(ele);
  let doc = window.document;
  let width = eles.offsetWidth;
  let height = eles.offsetHeight;
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  let scale = dip;

  canvas.width = width * scale;
  canvas.height = height * scale;

  let rect = document.getElementById(ele).getBoundingClientRect(); //获取元素相对于视察的偏移量
  context.translate(-rect.left, -rect.top); //设置context位置，值为相对于视窗的偏移量负值，让图片复位

  canvas.getContext("2d").scale(scale, scale);

  let opts = {
    scale: scale,
    canvas: canvas,
    logging: true,
    width: width,
    height: height,
  };
  html2canvas(eles, opts).then(function (canvas) {
    let dataUrl = canvas.toDataURL();
    console.log('img produced!')
  });
}

produceImg('mother', 'child', 2)