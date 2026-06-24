gdjs.testCode = {};
gdjs.testCode.localVariables = [];
gdjs.testCode.idToCallbackMap = new Map();
gdjs.testCode.GDNewTextObjects1= [];
gdjs.testCode.GDNewTextObjects2= [];


gdjs.testCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.p2p.sendDataToAll("get-proprety", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


};gdjs.testCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("set-proprety", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("set-proprety-status", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.testCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.testCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.testCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.testCode.GDNewTextObjects1[i].getBehavior("Text").getText() + (gdjs.evtTools.p2p.getEventData("set-proprety-status") + "\n"));
}
}

{ //Subevents
gdjs.testCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.testCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testCode.GDNewTextObjects1.length = 0;
gdjs.testCode.GDNewTextObjects2.length = 0;

gdjs.testCode.eventsList1(runtimeScene);
gdjs.testCode.GDNewTextObjects1.length = 0;
gdjs.testCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['testCode'] = gdjs.testCode;
