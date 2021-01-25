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
    case 'venti':
      modelName = 'ウェンティ.pmd';
      break;
    case 'albedo':
      modelName = 'アルベド.pmd';
      break;
    case 'xingqiu':
      modelName = '行秋.pmd';
      break;
    case 'chongyun':
      modelName = '重雲.pmd';
      break;
    case 'kequing':
      modelName = '刻晴.pmd';
      break;
    case 'hilichurl':
      modelName = 'ヒルチャール.pmd';
      break;
    case 'unusual_Hilichurl':
      modelName = '変わったヒルチャール.pmd';
      break;
    case 'paimon':
      modelName = 'パイモン.pmd';
      break;
    case 'amber':
      modelName = 'アンバー.pmd';
      break;
    case 'barbara':
      modelName = 'バーバラ.pmd';
      break;
    case 'aether':
      modelName = '空.pmd';
      break;
    case 'lumine':
      modelName = '蛍.pmd';
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

    //そのうち実装する
    //var dance = new MMD.Motion('motion/kishimen.vmd');
    //dance.load(function() {
    //  mmd.addModelMotion(model, dance, true);
    //  mmd.play();
    //  setInterval(function() {
    //    console.log('fps = ' + mmd.realFps);
    //  }, 1000);
    //});

  });

}