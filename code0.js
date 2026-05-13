gdjs.Create_47ConnectCode = {};
gdjs.Create_47ConnectCode.localVariables = [];
gdjs.Create_47ConnectCode.idToCallbackMap = new Map();
gdjs.Create_47ConnectCode.GDTitleObjects1= [];
gdjs.Create_47ConnectCode.GDTitleObjects2= [];
gdjs.Create_47ConnectCode.GDTitleObjects3= [];
gdjs.Create_47ConnectCode.GDTitleObjects4= [];
gdjs.Create_47ConnectCode.GDNomeObjects1= [];
gdjs.Create_47ConnectCode.GDNomeObjects2= [];
gdjs.Create_47ConnectCode.GDNomeObjects3= [];
gdjs.Create_47ConnectCode.GDNomeObjects4= [];
gdjs.Create_47ConnectCode.GDSenhaObjects1= [];
gdjs.Create_47ConnectCode.GDSenhaObjects2= [];
gdjs.Create_47ConnectCode.GDSenhaObjects3= [];
gdjs.Create_47ConnectCode.GDSenhaObjects4= [];
gdjs.Create_47ConnectCode.GDEmailObjects1= [];
gdjs.Create_47ConnectCode.GDEmailObjects2= [];
gdjs.Create_47ConnectCode.GDEmailObjects3= [];
gdjs.Create_47ConnectCode.GDEmailObjects4= [];
gdjs.Create_47ConnectCode.GDTelephoneObjects1= [];
gdjs.Create_47ConnectCode.GDTelephoneObjects2= [];
gdjs.Create_47ConnectCode.GDTelephoneObjects3= [];
gdjs.Create_47ConnectCode.GDTelephoneObjects4= [];
gdjs.Create_47ConnectCode.GDIdadeObjects1= [];
gdjs.Create_47ConnectCode.GDIdadeObjects2= [];
gdjs.Create_47ConnectCode.GDIdadeObjects3= [];
gdjs.Create_47ConnectCode.GDIdadeObjects4= [];
gdjs.Create_47ConnectCode.GDCreateObjects1= [];
gdjs.Create_47ConnectCode.GDCreateObjects2= [];
gdjs.Create_47ConnectCode.GDCreateObjects3= [];
gdjs.Create_47ConnectCode.GDCreateObjects4= [];
gdjs.Create_47ConnectCode.GDLogObjects1= [];
gdjs.Create_47ConnectCode.GDLogObjects2= [];
gdjs.Create_47ConnectCode.GDLogObjects3= [];
gdjs.Create_47ConnectCode.GDLogObjects4= [];
gdjs.Create_47ConnectCode.GDNextObjects1= [];
gdjs.Create_47ConnectCode.GDNextObjects2= [];
gdjs.Create_47ConnectCode.GDNextObjects3= [];
gdjs.Create_47ConnectCode.GDNextObjects4= [];
gdjs.Create_47ConnectCode.GDConnectObjects1= [];
gdjs.Create_47ConnectCode.GDConnectObjects2= [];
gdjs.Create_47ConnectCode.GDConnectObjects3= [];
gdjs.Create_47ConnectCode.GDConnectObjects4= [];
gdjs.Create_47ConnectCode.GDVoltadoObjects1= [];
gdjs.Create_47ConnectCode.GDVoltadoObjects2= [];
gdjs.Create_47ConnectCode.GDVoltadoObjects3= [];
gdjs.Create_47ConnectCode.GDVoltadoObjects4= [];
gdjs.Create_47ConnectCode.GDHomeObjects1= [];
gdjs.Create_47ConnectCode.GDHomeObjects2= [];
gdjs.Create_47ConnectCode.GDHomeObjects3= [];
gdjs.Create_47ConnectCode.GDHomeObjects4= [];
gdjs.Create_47ConnectCode.GDUser_9595iconObjects1= [];
gdjs.Create_47ConnectCode.GDUser_9595iconObjects2= [];
gdjs.Create_47ConnectCode.GDUser_9595iconObjects3= [];
gdjs.Create_47ConnectCode.GDUser_9595iconObjects4= [];
gdjs.Create_47ConnectCode.GDAppsObjects1= [];
gdjs.Create_47ConnectCode.GDAppsObjects2= [];
gdjs.Create_47ConnectCode.GDAppsObjects3= [];
gdjs.Create_47ConnectCode.GDAppsObjects4= [];
gdjs.Create_47ConnectCode.GDSettingsObjects1= [];
gdjs.Create_47ConnectCode.GDSettingsObjects2= [];
gdjs.Create_47ConnectCode.GDSettingsObjects3= [];
gdjs.Create_47ConnectCode.GDSettingsObjects4= [];


gdjs.Create_47ConnectCode.asyncCallback13129252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Create_47ConnectCode.localVariables);
{gdjs.evtTools.p2p.sendDataToAll("Connect", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
gdjs.Create_47ConnectCode.localVariables.length = 0;
}
gdjs.Create_47ConnectCode.idToCallbackMap.set(13129252, gdjs.Create_47ConnectCode.asyncCallback13129252);
gdjs.Create_47ConnectCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Create_47ConnectCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Create_47ConnectCode.asyncCallback13129252(runtimeScene, asyncObjectsList)), 13129252, asyncObjectsList);
}
}

}


};gdjs.Create_47ConnectCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.Create_47ConnectCode.GDNomeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDNomeObjects3.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDNomeObjects3[i].isOnLayer("Create") ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDNomeObjects3[k] = gdjs.Create_47ConnectCode.GDNomeObjects3[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDNomeObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Create_47ConnectCode.GDNomeObjects3 */
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDNomeObjects3.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDNomeObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Create_47ConnectCode.GDSenhaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDSenhaObjects2.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDSenhaObjects2[i].isOnLayer("Create") ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDSenhaObjects2[k] = gdjs.Create_47ConnectCode.GDSenhaObjects2[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDSenhaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Create_47ConnectCode.GDSenhaObjects2 */
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDSenhaObjects2.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDSenhaObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Create_47ConnectCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.Create_47ConnectCode.GDNomeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDNomeObjects2.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDNomeObjects2[i].isOnLayer("Connect") ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDNomeObjects2[k] = gdjs.Create_47ConnectCode.GDNomeObjects2[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDNomeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Create_47ConnectCode.GDNomeObjects2 */
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDNomeObjects2.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDNomeObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Create_47ConnectCode.GDSenhaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDSenhaObjects2.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDSenhaObjects2[i].isOnLayer("Connect") ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDSenhaObjects2[k] = gdjs.Create_47ConnectCode.GDSenhaObjects2[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDSenhaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Create_47ConnectCode.GDSenhaObjects2 */
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDSenhaObjects2.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDSenhaObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Create_47ConnectCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Connect");
}

{ //Subevents
gdjs.Create_47ConnectCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Create");
}

{ //Subevents
gdjs.Create_47ConnectCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Create_47ConnectCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Create"), gdjs.Create_47ConnectCode.GDCreateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDCreateObjects1.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDCreateObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDCreateObjects1[k] = gdjs.Create_47ConnectCode.GDCreateObjects1[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDCreateObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDCreateObjects1.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDCreateObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDCreateObjects1[k] = gdjs.Create_47ConnectCode.GDCreateObjects1[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDCreateObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Create_47ConnectCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.Create_47ConnectCode.GDNomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Create_47ConnectCode.GDSenhaObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("email").setString((( gdjs.Create_47ConnectCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.Create_47ConnectCode.GDEmailObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("password").setString((( gdjs.Create_47ConnectCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.Create_47ConnectCode.GDSenhaObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name").setString((( gdjs.Create_47ConnectCode.GDNomeObjects1.length === 0 ) ? "" :gdjs.Create_47ConnectCode.GDNomeObjects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.p2p.sendDataToAll("Create-accont", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Connect"), gdjs.Create_47ConnectCode.GDConnectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDConnectObjects1.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDConnectObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDConnectObjects1[k] = gdjs.Create_47ConnectCode.GDConnectObjects1[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDConnectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDConnectObjects1.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDConnectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDConnectObjects1[k] = gdjs.Create_47ConnectCode.GDConnectObjects1[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDConnectObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.Create_47ConnectCode.GDNomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Create_47ConnectCode.GDSenhaObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("password").setString((( gdjs.Create_47ConnectCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.Create_47ConnectCode.GDSenhaObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name").setString((( gdjs.Create_47ConnectCode.GDNomeObjects1.length === 0 ) ? "" :gdjs.Create_47ConnectCode.GDNomeObjects1[0].getBehavior("Text").getText()));
}

{ //Subevents
gdjs.Create_47ConnectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Create-sucess", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Create_47ConnectCode.GDLogObjects1);
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDLogObjects1.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDLogObjects1[i].getBehavior("Text").setText(gdjs.evtTools.p2p.getEventData("Create-sucess"));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.p2p.getEventData("Create-sucess"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Status", false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.p2p.getEventData("Status"));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(3));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Create_47ConnectCode.GDNextObjects1);
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDNextObjects1[i].hide();
}
}
{gdjs.evtTools.p2p.sendDataToAll("Check-users", "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Check-users-sucess", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Create_47ConnectCode.GDLogObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("Check-users-sucess")));
}
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDLogObjects1.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDLogObjects1[i].getBehavior("Text").setText(gdjs.evtTools.p2p.getEventData("Check-users-sucess"));
}
}

{ //Subevents
gdjs.Create_47ConnectCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Create_47ConnectCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDNextObjects1[k] = gdjs.Create_47ConnectCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDNextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDNextObjects1[k] = gdjs.Create_47ConnectCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDNextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Error-code").getAsString() == "200");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Create_47ConnectCode.GDNextObjects1);
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDNextObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "200");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Create_47ConnectCode.GDNextObjects1);
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDNextObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Create_47ConnectCode.GDLogObjects1);
{for(var i = 0, len = gdjs.Create_47ConnectCode.GDLogObjects1.length ;i < len;++i) {
    gdjs.Create_47ConnectCode.GDLogObjects1[i].getBehavior("Text").setText(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(0)) + "\n" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onError();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Connectar");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Voltado"), gdjs.Create_47ConnectCode.GDVoltadoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Create_47ConnectCode.GDVoltadoObjects1.length;i<l;++i) {
    if ( gdjs.Create_47ConnectCode.GDVoltadoObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Create_47ConnectCode.GDVoltadoObjects1[k] = gdjs.Create_47ConnectCode.GDVoltadoObjects1[i];
        ++k;
    }
}
gdjs.Create_47ConnectCode.GDVoltadoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Connectar");
}
}

}


};

gdjs.Create_47ConnectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Create_47ConnectCode.GDTitleObjects1.length = 0;
gdjs.Create_47ConnectCode.GDTitleObjects2.length = 0;
gdjs.Create_47ConnectCode.GDTitleObjects3.length = 0;
gdjs.Create_47ConnectCode.GDTitleObjects4.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects1.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects2.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects3.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects4.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects1.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects2.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects3.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects4.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects1.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects2.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects3.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects4.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects1.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects2.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects3.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects4.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects1.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects2.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects3.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects4.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects1.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects2.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects3.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects4.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects1.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects2.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects3.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects4.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects1.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects2.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects3.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects4.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects1.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects2.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects3.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects4.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects1.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects2.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects3.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects4.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects1.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects2.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects3.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects4.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects1.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects2.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects3.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects4.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects1.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects2.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects3.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects4.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects1.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects2.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects3.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects4.length = 0;

gdjs.Create_47ConnectCode.eventsList4(runtimeScene);
gdjs.Create_47ConnectCode.GDTitleObjects1.length = 0;
gdjs.Create_47ConnectCode.GDTitleObjects2.length = 0;
gdjs.Create_47ConnectCode.GDTitleObjects3.length = 0;
gdjs.Create_47ConnectCode.GDTitleObjects4.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects1.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects2.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects3.length = 0;
gdjs.Create_47ConnectCode.GDNomeObjects4.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects1.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects2.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects3.length = 0;
gdjs.Create_47ConnectCode.GDSenhaObjects4.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects1.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects2.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects3.length = 0;
gdjs.Create_47ConnectCode.GDEmailObjects4.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects1.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects2.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects3.length = 0;
gdjs.Create_47ConnectCode.GDTelephoneObjects4.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects1.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects2.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects3.length = 0;
gdjs.Create_47ConnectCode.GDIdadeObjects4.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects1.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects2.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects3.length = 0;
gdjs.Create_47ConnectCode.GDCreateObjects4.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects1.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects2.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects3.length = 0;
gdjs.Create_47ConnectCode.GDLogObjects4.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects1.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects2.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects3.length = 0;
gdjs.Create_47ConnectCode.GDNextObjects4.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects1.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects2.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects3.length = 0;
gdjs.Create_47ConnectCode.GDConnectObjects4.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects1.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects2.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects3.length = 0;
gdjs.Create_47ConnectCode.GDVoltadoObjects4.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects1.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects2.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects3.length = 0;
gdjs.Create_47ConnectCode.GDHomeObjects4.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects1.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects2.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects3.length = 0;
gdjs.Create_47ConnectCode.GDUser_9595iconObjects4.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects1.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects2.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects3.length = 0;
gdjs.Create_47ConnectCode.GDAppsObjects4.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects1.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects2.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects3.length = 0;
gdjs.Create_47ConnectCode.GDSettingsObjects4.length = 0;


return;

}

gdjs['Create_47ConnectCode'] = gdjs.Create_47ConnectCode;
