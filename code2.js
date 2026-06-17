gdjs.loadCode = {};
gdjs.loadCode.localVariables = [];
gdjs.loadCode.idToCallbackMap = new Map();


gdjs.loadCode.eventsList0 = function(runtimeScene) {

};

gdjs.loadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.loadCode.eventsList0(runtimeScene);


return;

}

gdjs['loadCode'] = gdjs.loadCode;
