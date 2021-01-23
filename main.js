window.onload = function(){ 
  // 初期表示をディルックとする
  view('diluc');
};

function view(id){

  var modelName = '';
  switch(id){
    case 'diluc':
      modelName = 'ディルック.pmd';
      break;
    case 'kaeya':
      modelName = 'ガイア.pmd';
      break;
    case 'zhongli':
      modelName = '鍾離.pmd';
      break;
    case 'childe':
      modelName = 'タルタリヤ.pmd';
      break;
    default:
      return;
  }

  var canvas = document.getElementById('canvas');
  if(canvas != null){
    document.getElementById('canvas').remove();
  }

  var size = 500;
  canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.width = size;
  canvas.height = size;
  canvas.style.border = 'solid black 1px';

  document.getElementById('viewer').appendChild(canvas);

  var mmd = new MMD(canvas, canvas.width, canvas.height);
  mmd.initShaders();
  mmd.initParameters();
  mmd.registerKeyListener(document);
  mmd.registerMouseListener(document);

  var model = new MMD.Model('model', modelName);

  model.load(function() {
    mmd.addModel(model);
    mmd.initBuffers();
    mmd.start();
  });

}