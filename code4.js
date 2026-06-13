gdjs.TerminalCode = {};
gdjs.TerminalCode.localVariables = [];
gdjs.TerminalCode.idToCallbackMap = new Map();
gdjs.TerminalCode.GDOutputObjects1= [];
gdjs.TerminalCode.GDOutputObjects2= [];
gdjs.TerminalCode.GDOutputObjects3= [];
gdjs.TerminalCode.GDInputObjects1= [];
gdjs.TerminalCode.GDInputObjects2= [];
gdjs.TerminalCode.GDInputObjects3= [];
gdjs.TerminalCode.GDHomeObjects1= [];
gdjs.TerminalCode.GDHomeObjects2= [];
gdjs.TerminalCode.GDHomeObjects3= [];
gdjs.TerminalCode.GDUser_9595iconObjects1= [];
gdjs.TerminalCode.GDUser_9595iconObjects2= [];
gdjs.TerminalCode.GDUser_9595iconObjects3= [];
gdjs.TerminalCode.GDAppsObjects1= [];
gdjs.TerminalCode.GDAppsObjects2= [];
gdjs.TerminalCode.GDAppsObjects3= [];
gdjs.TerminalCode.GDSettingsObjects1= [];
gdjs.TerminalCode.GDSettingsObjects2= [];
gdjs.TerminalCode.GDSettingsObjects3= [];
gdjs.TerminalCode.GDFilesObjects1= [];
gdjs.TerminalCode.GDFilesObjects2= [];
gdjs.TerminalCode.GDFilesObjects3= [];


gdjs.TerminalCode.asyncCallback13410092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TerminalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Output"), gdjs.TerminalCode.GDOutputObjects3);

{for(var i = 0, len = gdjs.TerminalCode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.TerminalCode.GDOutputObjects3[i].getBehavior("Text").setText(gdjs.TerminalCode.GDOutputObjects3[i].getBehavior("Text").getText() + ("Installed UBUjs! You can use :wsl start to initialize the VM\n"));
}
}
gdjs.TerminalCode.localVariables.length = 0;
}
gdjs.TerminalCode.idToCallbackMap.set(13410092, gdjs.TerminalCode.asyncCallback13410092);
gdjs.TerminalCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TerminalCode.localVariables);
for (const obj of gdjs.TerminalCode.GDOutputObjects2) asyncObjectsList.addObject("Output", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.TerminalCode.asyncCallback13410092(runtimeScene, asyncObjectsList)), 13410092, asyncObjectsList);
}
}

}


};gdjs.TerminalCode.asyncCallback13409700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TerminalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Output"), gdjs.TerminalCode.GDOutputObjects2);

{for(var i = 0, len = gdjs.TerminalCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.TerminalCode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.TerminalCode.GDOutputObjects2[i].getBehavior("Text").getText() + ("[# =Loading...= #]\n"));
}
}
{gdjs.evtTools.storage.writeStringInJSONFile("WSL", "command", "understand UBUjs");
}

{ //Subevents
gdjs.TerminalCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TerminalCode.localVariables.length = 0;
}
gdjs.TerminalCode.idToCallbackMap.set(13409700, gdjs.TerminalCode.asyncCallback13409700);
gdjs.TerminalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TerminalCode.localVariables);
for (const obj of gdjs.TerminalCode.GDOutputObjects1) asyncObjectsList.addObject("Output", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.TerminalCode.asyncCallback13409700(runtimeScene, asyncObjectsList)), 13409700, asyncObjectsList);
}
}

}


};gdjs.TerminalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TerminalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.TerminalCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.TerminalCode.GDInputObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( (gdjs.TerminalCode.GDInputObjects1[i].getBehavior("Text").getText()).endsWith("UBUjs") ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TerminalCode.GDInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.TerminalCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.TerminalCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.TerminalCode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.TerminalCode.GDOutputObjects1[i].getBehavior("Text").getText() + ("Installando UBUjs... Pode demorar\n"));
}
}
{for(var i = 0, len = gdjs.TerminalCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.TerminalCode.GDInputObjects1[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.storage.writeStringInJSONFile("WSL", "ubujs", "act");
}

{ //Subevents
gdjs.TerminalCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TerminalCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("ubujs", "WSL");
if (isConditionTrue_0) {
}

}


};gdjs.TerminalCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.TerminalCode.GDInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.TerminalCode.GDInputObjects1[i].getBehavior("Text").getText() == ":ajs wsl.exe" ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.TerminalCode.GDInputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( !((gdjs.TerminalCode.GDInputObjects1[i].getPlaceholder()).includes("@ubujs >")) ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13403556);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TerminalCode.GDInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.TerminalCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.TerminalCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.TerminalCode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.TerminalCode.GDOutputObjects1[i].getBehavior("Text").getText() + ("WSL Precisa configurar algumas coisas. E pode demorar um pouco...\n"));
}
}
{for(var i = 0, len = gdjs.TerminalCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.TerminalCode.GDInputObjects1[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.storage.writeStringInJSONFile("Important", "WSL", "act");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.TerminalCode.GDInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Important", "WSL");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( (gdjs.TerminalCode.GDInputObjects1[i].getBehavior("Text").getText()).startsWith(":wsl install ") ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( !((gdjs.TerminalCode.GDInputObjects1[i].getPlaceholder()).includes("@ubujs >")) ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.TerminalCode.GDInputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13406948);
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TerminalCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.TerminalCode.GDInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("WSL", "ubujs");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.TerminalCode.GDInputObjects1[i].getBehavior("Text").getText() == ":wsl start UBUjs" ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TerminalCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.TerminalCode.GDInputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.TerminalCode.GDInputObjects1[k] = gdjs.TerminalCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.TerminalCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13412996);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TerminalCode.GDInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.TerminalCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.TerminalCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.TerminalCode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.TerminalCode.GDOutputObjects1[i].getBehavior("Text").getText() + ("Welcome to UBUjs! An Linux in Gdevelop! (Or AJShub)\n"));
}
}
{for(var i = 0, len = gdjs.TerminalCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.TerminalCode.GDInputObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.TerminalCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.TerminalCode.GDInputObjects1[i].setPlaceholder("defalt@ubujs >");
}
}

{ //Subevents
gdjs.TerminalCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.TerminalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TerminalCode.GDOutputObjects1.length = 0;
gdjs.TerminalCode.GDOutputObjects2.length = 0;
gdjs.TerminalCode.GDOutputObjects3.length = 0;
gdjs.TerminalCode.GDInputObjects1.length = 0;
gdjs.TerminalCode.GDInputObjects2.length = 0;
gdjs.TerminalCode.GDInputObjects3.length = 0;
gdjs.TerminalCode.GDHomeObjects1.length = 0;
gdjs.TerminalCode.GDHomeObjects2.length = 0;
gdjs.TerminalCode.GDHomeObjects3.length = 0;
gdjs.TerminalCode.GDUser_9595iconObjects1.length = 0;
gdjs.TerminalCode.GDUser_9595iconObjects2.length = 0;
gdjs.TerminalCode.GDUser_9595iconObjects3.length = 0;
gdjs.TerminalCode.GDAppsObjects1.length = 0;
gdjs.TerminalCode.GDAppsObjects2.length = 0;
gdjs.TerminalCode.GDAppsObjects3.length = 0;
gdjs.TerminalCode.GDSettingsObjects1.length = 0;
gdjs.TerminalCode.GDSettingsObjects2.length = 0;
gdjs.TerminalCode.GDSettingsObjects3.length = 0;
gdjs.TerminalCode.GDFilesObjects1.length = 0;
gdjs.TerminalCode.GDFilesObjects2.length = 0;
gdjs.TerminalCode.GDFilesObjects3.length = 0;

gdjs.TerminalCode.eventsList5(runtimeScene);
gdjs.TerminalCode.GDOutputObjects1.length = 0;
gdjs.TerminalCode.GDOutputObjects2.length = 0;
gdjs.TerminalCode.GDOutputObjects3.length = 0;
gdjs.TerminalCode.GDInputObjects1.length = 0;
gdjs.TerminalCode.GDInputObjects2.length = 0;
gdjs.TerminalCode.GDInputObjects3.length = 0;
gdjs.TerminalCode.GDHomeObjects1.length = 0;
gdjs.TerminalCode.GDHomeObjects2.length = 0;
gdjs.TerminalCode.GDHomeObjects3.length = 0;
gdjs.TerminalCode.GDUser_9595iconObjects1.length = 0;
gdjs.TerminalCode.GDUser_9595iconObjects2.length = 0;
gdjs.TerminalCode.GDUser_9595iconObjects3.length = 0;
gdjs.TerminalCode.GDAppsObjects1.length = 0;
gdjs.TerminalCode.GDAppsObjects2.length = 0;
gdjs.TerminalCode.GDAppsObjects3.length = 0;
gdjs.TerminalCode.GDSettingsObjects1.length = 0;
gdjs.TerminalCode.GDSettingsObjects2.length = 0;
gdjs.TerminalCode.GDSettingsObjects3.length = 0;
gdjs.TerminalCode.GDFilesObjects1.length = 0;
gdjs.TerminalCode.GDFilesObjects2.length = 0;
gdjs.TerminalCode.GDFilesObjects3.length = 0;


return;

}

gdjs['TerminalCode'] = gdjs.TerminalCode;
