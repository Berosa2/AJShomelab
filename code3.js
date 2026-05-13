gdjs.ConnectarCode = {};
gdjs.ConnectarCode.localVariables = [];
gdjs.ConnectarCode.idToCallbackMap = new Map();
gdjs.ConnectarCode.GDUUIDObjects1= [];
gdjs.ConnectarCode.GDUUIDObjects2= [];
gdjs.ConnectarCode.GDUUIDObjects3= [];
gdjs.ConnectarCode.GDConnectedObjects1= [];
gdjs.ConnectarCode.GDConnectedObjects2= [];
gdjs.ConnectarCode.GDConnectedObjects3= [];
gdjs.ConnectarCode.GDStatusObjects1= [];
gdjs.ConnectarCode.GDStatusObjects2= [];
gdjs.ConnectarCode.GDStatusObjects3= [];
gdjs.ConnectarCode.GDNextObjects1= [];
gdjs.ConnectarCode.GDNextObjects2= [];
gdjs.ConnectarCode.GDNextObjects3= [];
gdjs.ConnectarCode.GDTitleObjects1= [];
gdjs.ConnectarCode.GDTitleObjects2= [];
gdjs.ConnectarCode.GDTitleObjects3= [];
gdjs.ConnectarCode.GDStatus2Objects1= [];
gdjs.ConnectarCode.GDStatus2Objects2= [];
gdjs.ConnectarCode.GDStatus2Objects3= [];
gdjs.ConnectarCode.GDHomeObjects1= [];
gdjs.ConnectarCode.GDHomeObjects2= [];
gdjs.ConnectarCode.GDHomeObjects3= [];
gdjs.ConnectarCode.GDUser_9595iconObjects1= [];
gdjs.ConnectarCode.GDUser_9595iconObjects2= [];
gdjs.ConnectarCode.GDUser_9595iconObjects3= [];
gdjs.ConnectarCode.GDAppsObjects1= [];
gdjs.ConnectarCode.GDAppsObjects2= [];
gdjs.ConnectarCode.GDAppsObjects3= [];
gdjs.ConnectarCode.GDSettingsObjects1= [];
gdjs.ConnectarCode.GDSettingsObjects2= [];
gdjs.ConnectarCode.GDSettingsObjects3= [];


gdjs.ConnectarCode.asyncCallback13278540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ConnectarCode.localVariables);
gdjs.ConnectarCode.localVariables.length = 0;
}
gdjs.ConnectarCode.idToCallbackMap.set(13278540, gdjs.ConnectarCode.asyncCallback13278540);
gdjs.ConnectarCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ConnectarCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.ConnectarCode.asyncCallback13278540(runtimeScene, asyncObjectsList)), 13278540, asyncObjectsList);
}
}

}


};gdjs.ConnectarCode.asyncCallback13277388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ConnectarCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ConnectarCode.GDNextObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}
{for(var i = 0, len = gdjs.ConnectarCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.ConnectarCode.GDNextObjects2[i].hide();
}
}
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}

{ //Subevents
gdjs.ConnectarCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ConnectarCode.localVariables.length = 0;
}
gdjs.ConnectarCode.idToCallbackMap.set(13277388, gdjs.ConnectarCode.asyncCallback13277388);
gdjs.ConnectarCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ConnectarCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.loadStringFromFileAsyncTask(runtimeScene.getScene().getVariables().getFromIndex(1), "C:\\AJShub\\configuration.json", runtimeScene.getScene().getVariables().getFromIndex(3), true), (runtimeScene) => (gdjs.ConnectarCode.asyncCallback13277388(runtimeScene, asyncObjectsList)), 13277388, asyncObjectsList);
}
}

}


};gdjs.ConnectarCode.asyncCallback13285892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ConnectarCode.localVariables);
gdjs.ConnectarCode.localVariables.length = 0;
}
gdjs.ConnectarCode.idToCallbackMap.set(13285892, gdjs.ConnectarCode.asyncCallback13285892);
gdjs.ConnectarCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ConnectarCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.saveStringToFileAsyncTask(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(2)), "C:\\AJShub\\configuration.json", gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.ConnectarCode.asyncCallback13285892(runtimeScene, asyncObjectsList)), 13285892, asyncObjectsList);
}
}

}


};gdjs.ConnectarCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Status2"), gdjs.ConnectarCode.GDStatus2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConnectarCode.GDStatus2Objects1.length;i<l;++i) {
    if ( gdjs.ConnectarCode.GDStatus2Objects1[i].getBehavior("Animation").getAnimationName() == "error" ) {
        isConditionTrue_0 = true;
        gdjs.ConnectarCode.GDStatus2Objects1[k] = gdjs.ConnectarCode.GDStatus2Objects1[i];
        ++k;
    }
}
gdjs.ConnectarCode.GDStatus2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ConnectarCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ConnectarCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.ConnectarCode.GDStatusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConnectarCode.GDStatusObjects1.length;i<l;++i) {
    if ( gdjs.ConnectarCode.GDStatusObjects1[i].getBehavior("Animation").getAnimationName() == "Loading" ) {
        isConditionTrue_0 = true;
        gdjs.ConnectarCode.GDStatusObjects1[k] = gdjs.ConnectarCode.GDStatusObjects1[i];
        ++k;
    }
}
gdjs.ConnectarCode.GDStatusObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ConnectarCode.GDStatusObjects1 */
{for(var i = 0, len = gdjs.ConnectarCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatusObjects1[i].rotate(200, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Status2"), gdjs.ConnectarCode.GDStatus2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConnectarCode.GDStatus2Objects1.length;i<l;++i) {
    if ( gdjs.ConnectarCode.GDStatus2Objects1[i].getBehavior("Animation").getAnimationName() == "Loading" ) {
        isConditionTrue_0 = true;
        gdjs.ConnectarCode.GDStatus2Objects1[k] = gdjs.ConnectarCode.GDStatus2Objects1[i];
        ++k;
    }
}
gdjs.ConnectarCode.GDStatus2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ConnectarCode.GDStatus2Objects1 */
{for(var i = 0, len = gdjs.ConnectarCode.GDStatus2Objects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatus2Objects1[i].rotate(200, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.ConnectarCode.GDStatusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConnectarCode.GDStatusObjects1.length;i<l;++i) {
    if ( gdjs.ConnectarCode.GDStatusObjects1[i].getBehavior("Animation").getAnimationName() != "Loading" ) {
        isConditionTrue_0 = true;
        gdjs.ConnectarCode.GDStatusObjects1[k] = gdjs.ConnectarCode.GDStatusObjects1[i];
        ++k;
    }
}
gdjs.ConnectarCode.GDStatusObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ConnectarCode.GDStatusObjects1 */
{for(var i = 0, len = gdjs.ConnectarCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatusObjects1[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Status2"), gdjs.ConnectarCode.GDStatus2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConnectarCode.GDStatus2Objects1.length;i<l;++i) {
    if ( gdjs.ConnectarCode.GDStatus2Objects1[i].getBehavior("Animation").getAnimationName() != "Loading" ) {
        isConditionTrue_0 = true;
        gdjs.ConnectarCode.GDStatus2Objects1[k] = gdjs.ConnectarCode.GDStatus2Objects1[i];
        ++k;
    }
}
gdjs.ConnectarCode.GDStatus2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ConnectarCode.GDStatus2Objects1 */
{for(var i = 0, len = gdjs.ConnectarCode.GDStatus2Objects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatus2Objects1[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Connected"), gdjs.ConnectarCode.GDConnectedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConnectarCode.GDConnectedObjects1.length;i<l;++i) {
    if ( gdjs.ConnectarCode.GDConnectedObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ConnectarCode.GDConnectedObjects1[k] = gdjs.ConnectarCode.GDConnectedObjects1[i];
        ++k;
    }
}
gdjs.ConnectarCode.GDConnectedObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.ConnectarCode.GDStatusObjects1);
gdjs.copyArray(runtimeScene.getObjects("UUID"), gdjs.ConnectarCode.GDUUIDObjects1);
{gdjs.evtTools.p2p.connect((( gdjs.ConnectarCode.GDUUIDObjects1.length === 0 ) ? "" :gdjs.ConnectarCode.GDUUIDObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.ConnectarCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatusObjects1[i].getBehavior("Animation").setAnimationName("Loading");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ConnectarCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("app-uuid").getChild("simple-database").getAsString() != "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13279924);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.ConnectarCode.GDStatusObjects1);
gdjs.copyArray(runtimeScene.getObjects("UUID"), gdjs.ConnectarCode.GDUUIDObjects1);
{for(var i = 0, len = gdjs.ConnectarCode.GDUUIDObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDUUIDObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("app-uuid").getChild("simple-database").getAsString());
}
}
{gdjs.evtTools.p2p.connect((( gdjs.ConnectarCode.GDUUIDObjects1.length === 0 ) ? "" :gdjs.ConnectarCode.GDUUIDObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.ConnectarCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatusObjects1[i].getBehavior("Animation").setAnimationName("Loading");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onError();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.ConnectarCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.ConnectarCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatusObjects1[i].getBehavior("Animation").setAnimationName("Error");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Connect-sucess", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13282780);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ConnectarCode.GDNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.ConnectarCode.GDStatusObjects1);
gdjs.copyArray(runtimeScene.getObjects("UUID"), gdjs.ConnectarCode.GDUUIDObjects1);
{gdjs.evtTools.storage.writeStringInJSONFile("Server", "UUID", (( gdjs.ConnectarCode.GDUUIDObjects1.length === 0 ) ? "" :gdjs.ConnectarCode.GDUUIDObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.ConnectarCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatusObjects1[i].getBehavior("Animation").setAnimationName("Success");
}
}
{for(var i = 0, len = gdjs.ConnectarCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDNextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ConnectarCode.GDUUIDObjects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDUUIDObjects1[i].setDisabled(true);
}
}

{ //Subevents
gdjs.ConnectarCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ConnectarCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConnectarCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.ConnectarCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ConnectarCode.GDNextObjects1[k] = gdjs.ConnectarCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.ConnectarCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Create/Connect");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "ok");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status2"), gdjs.ConnectarCode.GDStatus2Objects1);
{for(var i = 0, len = gdjs.ConnectarCode.GDStatus2Objects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatus2Objects1[i].getBehavior("Animation").setAnimationName("sucess");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "ok");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status2"), gdjs.ConnectarCode.GDStatus2Objects1);
{for(var i = 0, len = gdjs.ConnectarCode.GDStatus2Objects1.length ;i < len;++i) {
    gdjs.ConnectarCode.GDStatus2Objects1[i].getBehavior("Animation").setAnimationName("error");
}
}
}

}


};

gdjs.ConnectarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConnectarCode.GDUUIDObjects1.length = 0;
gdjs.ConnectarCode.GDUUIDObjects2.length = 0;
gdjs.ConnectarCode.GDUUIDObjects3.length = 0;
gdjs.ConnectarCode.GDConnectedObjects1.length = 0;
gdjs.ConnectarCode.GDConnectedObjects2.length = 0;
gdjs.ConnectarCode.GDConnectedObjects3.length = 0;
gdjs.ConnectarCode.GDStatusObjects1.length = 0;
gdjs.ConnectarCode.GDStatusObjects2.length = 0;
gdjs.ConnectarCode.GDStatusObjects3.length = 0;
gdjs.ConnectarCode.GDNextObjects1.length = 0;
gdjs.ConnectarCode.GDNextObjects2.length = 0;
gdjs.ConnectarCode.GDNextObjects3.length = 0;
gdjs.ConnectarCode.GDTitleObjects1.length = 0;
gdjs.ConnectarCode.GDTitleObjects2.length = 0;
gdjs.ConnectarCode.GDTitleObjects3.length = 0;
gdjs.ConnectarCode.GDStatus2Objects1.length = 0;
gdjs.ConnectarCode.GDStatus2Objects2.length = 0;
gdjs.ConnectarCode.GDStatus2Objects3.length = 0;
gdjs.ConnectarCode.GDHomeObjects1.length = 0;
gdjs.ConnectarCode.GDHomeObjects2.length = 0;
gdjs.ConnectarCode.GDHomeObjects3.length = 0;
gdjs.ConnectarCode.GDUser_9595iconObjects1.length = 0;
gdjs.ConnectarCode.GDUser_9595iconObjects2.length = 0;
gdjs.ConnectarCode.GDUser_9595iconObjects3.length = 0;
gdjs.ConnectarCode.GDAppsObjects1.length = 0;
gdjs.ConnectarCode.GDAppsObjects2.length = 0;
gdjs.ConnectarCode.GDAppsObjects3.length = 0;
gdjs.ConnectarCode.GDSettingsObjects1.length = 0;
gdjs.ConnectarCode.GDSettingsObjects2.length = 0;
gdjs.ConnectarCode.GDSettingsObjects3.length = 0;

gdjs.ConnectarCode.eventsList4(runtimeScene);
gdjs.ConnectarCode.GDUUIDObjects1.length = 0;
gdjs.ConnectarCode.GDUUIDObjects2.length = 0;
gdjs.ConnectarCode.GDUUIDObjects3.length = 0;
gdjs.ConnectarCode.GDConnectedObjects1.length = 0;
gdjs.ConnectarCode.GDConnectedObjects2.length = 0;
gdjs.ConnectarCode.GDConnectedObjects3.length = 0;
gdjs.ConnectarCode.GDStatusObjects1.length = 0;
gdjs.ConnectarCode.GDStatusObjects2.length = 0;
gdjs.ConnectarCode.GDStatusObjects3.length = 0;
gdjs.ConnectarCode.GDNextObjects1.length = 0;
gdjs.ConnectarCode.GDNextObjects2.length = 0;
gdjs.ConnectarCode.GDNextObjects3.length = 0;
gdjs.ConnectarCode.GDTitleObjects1.length = 0;
gdjs.ConnectarCode.GDTitleObjects2.length = 0;
gdjs.ConnectarCode.GDTitleObjects3.length = 0;
gdjs.ConnectarCode.GDStatus2Objects1.length = 0;
gdjs.ConnectarCode.GDStatus2Objects2.length = 0;
gdjs.ConnectarCode.GDStatus2Objects3.length = 0;
gdjs.ConnectarCode.GDHomeObjects1.length = 0;
gdjs.ConnectarCode.GDHomeObjects2.length = 0;
gdjs.ConnectarCode.GDHomeObjects3.length = 0;
gdjs.ConnectarCode.GDUser_9595iconObjects1.length = 0;
gdjs.ConnectarCode.GDUser_9595iconObjects2.length = 0;
gdjs.ConnectarCode.GDUser_9595iconObjects3.length = 0;
gdjs.ConnectarCode.GDAppsObjects1.length = 0;
gdjs.ConnectarCode.GDAppsObjects2.length = 0;
gdjs.ConnectarCode.GDAppsObjects3.length = 0;
gdjs.ConnectarCode.GDSettingsObjects1.length = 0;
gdjs.ConnectarCode.GDSettingsObjects2.length = 0;
gdjs.ConnectarCode.GDSettingsObjects3.length = 0;


return;

}

gdjs['ConnectarCode'] = gdjs.ConnectarCode;
