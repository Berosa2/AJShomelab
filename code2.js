gdjs.Connectivity_45testCode = {};
gdjs.Connectivity_45testCode.localVariables = [];
gdjs.Connectivity_45testCode.idToCallbackMap = new Map();
gdjs.Connectivity_45testCode.GDUIDObjects1= [];
gdjs.Connectivity_45testCode.GDUIDObjects2= [];
gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1= [];
gdjs.Connectivity_45testCode.GDUID_9595homelabObjects2= [];
gdjs.Connectivity_45testCode.GDNewTextObjects1= [];
gdjs.Connectivity_45testCode.GDNewTextObjects2= [];
gdjs.Connectivity_45testCode.GDHomeObjects1= [];
gdjs.Connectivity_45testCode.GDHomeObjects2= [];
gdjs.Connectivity_45testCode.GDUser_9595iconObjects1= [];
gdjs.Connectivity_45testCode.GDUser_9595iconObjects2= [];
gdjs.Connectivity_45testCode.GDAppsObjects1= [];
gdjs.Connectivity_45testCode.GDAppsObjects2= [];
gdjs.Connectivity_45testCode.GDSettingsObjects1= [];
gdjs.Connectivity_45testCode.GDSettingsObjects2= [];


gdjs.Connectivity_45testCode.asyncCallback13251660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Connectivity_45testCode.localVariables);
{gdjs.evtTools.p2p.sendVariableToAll("Get-admin", gdjs.VariablesContainer.badVariable);
}
gdjs.Connectivity_45testCode.localVariables.length = 0;
}
gdjs.Connectivity_45testCode.idToCallbackMap.set(13251660, gdjs.Connectivity_45testCode.asyncCallback13251660);
gdjs.Connectivity_45testCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Connectivity_45testCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.21), (runtimeScene) => (gdjs.Connectivity_45testCode.asyncCallback13251660(runtimeScene, asyncObjectsList)), 13251660, asyncObjectsList);
}
}

}


};gdjs.Connectivity_45testCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("UID"), gdjs.Connectivity_45testCode.GDUIDObjects1);
{for(var i = 0, len = gdjs.Connectivity_45testCode.GDUIDObjects1.length ;i < len;++i) {
    gdjs.Connectivity_45testCode.GDUIDObjects1[i].getBehavior("Text").setText(gdjs.evtTools.p2p.getCurrentId());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UID_homelab"), gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1.length;i<l;++i) {
    if ( gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1[k] = gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1[i];
        ++k;
    }
}
gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13250820);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1 */
{gdjs.evtTools.p2p.connect((( gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1.length === 0 ) ? "" :gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1[0].getBehavior("Text").getText()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onConnection();
if (isConditionTrue_0) {

{ //Subevents
gdjs.Connectivity_45testCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Get-info-response", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13252836);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Connectivity_45testCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Connectivity_45testCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Connectivity_45testCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.p2p.getEventData("Get-info-response"));
}
}
}

}


};

gdjs.Connectivity_45testCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Connectivity_45testCode.GDUIDObjects1.length = 0;
gdjs.Connectivity_45testCode.GDUIDObjects2.length = 0;
gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1.length = 0;
gdjs.Connectivity_45testCode.GDUID_9595homelabObjects2.length = 0;
gdjs.Connectivity_45testCode.GDNewTextObjects1.length = 0;
gdjs.Connectivity_45testCode.GDNewTextObjects2.length = 0;
gdjs.Connectivity_45testCode.GDHomeObjects1.length = 0;
gdjs.Connectivity_45testCode.GDHomeObjects2.length = 0;
gdjs.Connectivity_45testCode.GDUser_9595iconObjects1.length = 0;
gdjs.Connectivity_45testCode.GDUser_9595iconObjects2.length = 0;
gdjs.Connectivity_45testCode.GDAppsObjects1.length = 0;
gdjs.Connectivity_45testCode.GDAppsObjects2.length = 0;
gdjs.Connectivity_45testCode.GDSettingsObjects1.length = 0;
gdjs.Connectivity_45testCode.GDSettingsObjects2.length = 0;

gdjs.Connectivity_45testCode.eventsList1(runtimeScene);
gdjs.Connectivity_45testCode.GDUIDObjects1.length = 0;
gdjs.Connectivity_45testCode.GDUIDObjects2.length = 0;
gdjs.Connectivity_45testCode.GDUID_9595homelabObjects1.length = 0;
gdjs.Connectivity_45testCode.GDUID_9595homelabObjects2.length = 0;
gdjs.Connectivity_45testCode.GDNewTextObjects1.length = 0;
gdjs.Connectivity_45testCode.GDNewTextObjects2.length = 0;
gdjs.Connectivity_45testCode.GDHomeObjects1.length = 0;
gdjs.Connectivity_45testCode.GDHomeObjects2.length = 0;
gdjs.Connectivity_45testCode.GDUser_9595iconObjects1.length = 0;
gdjs.Connectivity_45testCode.GDUser_9595iconObjects2.length = 0;
gdjs.Connectivity_45testCode.GDAppsObjects1.length = 0;
gdjs.Connectivity_45testCode.GDAppsObjects2.length = 0;
gdjs.Connectivity_45testCode.GDSettingsObjects1.length = 0;
gdjs.Connectivity_45testCode.GDSettingsObjects2.length = 0;


return;

}

gdjs['Connectivity_45testCode'] = gdjs.Connectivity_45testCode;
