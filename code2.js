gdjs.loadCode = {};
gdjs.loadCode.localVariables = [];
gdjs.loadCode.idToCallbackMap = new Map();
gdjs.loadCode.GDloadObjects1= [];
gdjs.loadCode.GDloadObjects2= [];


gdjs.loadCode.asyncCallback11780964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.loadCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "main_screen");
}
gdjs.loadCode.localVariables.length = 0;
}
gdjs.loadCode.idToCallbackMap.set(11780964, gdjs.loadCode.asyncCallback11780964);
gdjs.loadCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.loadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.loadCode.asyncCallback11780964(runtimeScene, asyncObjectsList)), 11780964, asyncObjectsList);
}
}

}


};gdjs.loadCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "main_screen");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "main_screen");
if (isConditionTrue_0) {

{ //Subevents
gdjs.loadCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.loadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadCode.GDloadObjects1.length = 0;
gdjs.loadCode.GDloadObjects2.length = 0;

gdjs.loadCode.eventsList1(runtimeScene);
gdjs.loadCode.GDloadObjects1.length = 0;
gdjs.loadCode.GDloadObjects2.length = 0;


return;

}

gdjs['loadCode'] = gdjs.loadCode;
