gdjs.login_95screenCode = {};
gdjs.login_95screenCode.localVariables = [];
gdjs.login_95screenCode.idToCallbackMap = new Map();
gdjs.login_95screenCode.GDBackgroundObjects1= [];
gdjs.login_95screenCode.GDBackgroundObjects2= [];
gdjs.login_95screenCode.GDlogoObjects1= [];
gdjs.login_95screenCode.GDlogoObjects2= [];
gdjs.login_95screenCode.GDASCObjects1= [];
gdjs.login_95screenCode.GDASCObjects2= [];
gdjs.login_95screenCode.GDLogin_95952PointsObjects1= [];
gdjs.login_95screenCode.GDLogin_95952PointsObjects2= [];
gdjs.login_95screenCode.GDSenha_95952PointsObjects1= [];
gdjs.login_95screenCode.GDSenha_95952PointsObjects2= [];
gdjs.login_95screenCode.GDDuvidasObjects1= [];
gdjs.login_95screenCode.GDDuvidasObjects2= [];
gdjs.login_95screenCode.GDEntrarObjects1= [];
gdjs.login_95screenCode.GDEntrarObjects2= [];
gdjs.login_95screenCode.GDLoginObjects1= [];
gdjs.login_95screenCode.GDLoginObjects2= [];
gdjs.login_95screenCode.GDSenhaObjects1= [];
gdjs.login_95screenCode.GDSenhaObjects2= [];
gdjs.login_95screenCode.GDlogo_9595pessoalObjects1= [];
gdjs.login_95screenCode.GDlogo_9595pessoalObjects2= [];
gdjs.login_95screenCode.GDUUIDObjects1= [];
gdjs.login_95screenCode.GDUUIDObjects2= [];
gdjs.login_95screenCode.GDerrorObjects1= [];
gdjs.login_95screenCode.GDerrorObjects2= [];


gdjs.login_95screenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Error-code").getAsNumber() == 200);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.login_95screenCode.GDLoginObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.login_95screenCode.GDLoginObjects1.length === 0 ) ? "" :gdjs.login_95screenCode.GDLoginObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Role").getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("id").getAsNumber());
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "load");
}
}

}


};gdjs.login_95screenCode.eventsList1 = function(runtimeScene) {

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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Connect-sucess", false);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Login");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Status", false);
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.p2p.getEventData("Status"), runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.login_95screenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UUID"), gdjs.login_95screenCode.GDUUIDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.login_95screenCode.GDUUIDObjects1.length;i<l;++i) {
    if ( gdjs.login_95screenCode.GDUUIDObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.login_95screenCode.GDUUIDObjects1[k] = gdjs.login_95screenCode.GDUUIDObjects1[i];
        ++k;
    }
}
gdjs.login_95screenCode.GDUUIDObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11573252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.login_95screenCode.GDUUIDObjects1 */
{gdjs.evtTools.p2p.connect((( gdjs.login_95screenCode.GDUUIDObjects1.length === 0 ) ? "" :gdjs.login_95screenCode.GDUUIDObjects1[0].getBehavior("Text").getText()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Entrar"), gdjs.login_95screenCode.GDEntrarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.login_95screenCode.GDEntrarObjects1.length;i<l;++i) {
    if ( gdjs.login_95screenCode.GDEntrarObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.login_95screenCode.GDEntrarObjects1[k] = gdjs.login_95screenCode.GDEntrarObjects1[i];
        ++k;
    }
}
gdjs.login_95screenCode.GDEntrarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.login_95screenCode.GDLoginObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.login_95screenCode.GDSenhaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Login").getChild("name").setString((( gdjs.login_95screenCode.GDLoginObjects1.length === 0 ) ? "" :gdjs.login_95screenCode.GDLoginObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Login").getChild("password").setString((( gdjs.login_95screenCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.login_95screenCode.GDSenhaObjects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.p2p.sendDataToAll("Connect", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Login")));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.login_95screenCode.GDerrorObjects1);
{for(var i = 0, len = gdjs.login_95screenCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.login_95screenCode.GDerrorObjects1[i].getBehavior("Text").setText(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
}

}


};

gdjs.login_95screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.login_95screenCode.GDBackgroundObjects1.length = 0;
gdjs.login_95screenCode.GDBackgroundObjects2.length = 0;
gdjs.login_95screenCode.GDlogoObjects1.length = 0;
gdjs.login_95screenCode.GDlogoObjects2.length = 0;
gdjs.login_95screenCode.GDASCObjects1.length = 0;
gdjs.login_95screenCode.GDASCObjects2.length = 0;
gdjs.login_95screenCode.GDLogin_95952PointsObjects1.length = 0;
gdjs.login_95screenCode.GDLogin_95952PointsObjects2.length = 0;
gdjs.login_95screenCode.GDSenha_95952PointsObjects1.length = 0;
gdjs.login_95screenCode.GDSenha_95952PointsObjects2.length = 0;
gdjs.login_95screenCode.GDDuvidasObjects1.length = 0;
gdjs.login_95screenCode.GDDuvidasObjects2.length = 0;
gdjs.login_95screenCode.GDEntrarObjects1.length = 0;
gdjs.login_95screenCode.GDEntrarObjects2.length = 0;
gdjs.login_95screenCode.GDLoginObjects1.length = 0;
gdjs.login_95screenCode.GDLoginObjects2.length = 0;
gdjs.login_95screenCode.GDSenhaObjects1.length = 0;
gdjs.login_95screenCode.GDSenhaObjects2.length = 0;
gdjs.login_95screenCode.GDlogo_9595pessoalObjects1.length = 0;
gdjs.login_95screenCode.GDlogo_9595pessoalObjects2.length = 0;
gdjs.login_95screenCode.GDUUIDObjects1.length = 0;
gdjs.login_95screenCode.GDUUIDObjects2.length = 0;
gdjs.login_95screenCode.GDerrorObjects1.length = 0;
gdjs.login_95screenCode.GDerrorObjects2.length = 0;

gdjs.login_95screenCode.eventsList1(runtimeScene);
gdjs.login_95screenCode.GDBackgroundObjects1.length = 0;
gdjs.login_95screenCode.GDBackgroundObjects2.length = 0;
gdjs.login_95screenCode.GDlogoObjects1.length = 0;
gdjs.login_95screenCode.GDlogoObjects2.length = 0;
gdjs.login_95screenCode.GDASCObjects1.length = 0;
gdjs.login_95screenCode.GDASCObjects2.length = 0;
gdjs.login_95screenCode.GDLogin_95952PointsObjects1.length = 0;
gdjs.login_95screenCode.GDLogin_95952PointsObjects2.length = 0;
gdjs.login_95screenCode.GDSenha_95952PointsObjects1.length = 0;
gdjs.login_95screenCode.GDSenha_95952PointsObjects2.length = 0;
gdjs.login_95screenCode.GDDuvidasObjects1.length = 0;
gdjs.login_95screenCode.GDDuvidasObjects2.length = 0;
gdjs.login_95screenCode.GDEntrarObjects1.length = 0;
gdjs.login_95screenCode.GDEntrarObjects2.length = 0;
gdjs.login_95screenCode.GDLoginObjects1.length = 0;
gdjs.login_95screenCode.GDLoginObjects2.length = 0;
gdjs.login_95screenCode.GDSenhaObjects1.length = 0;
gdjs.login_95screenCode.GDSenhaObjects2.length = 0;
gdjs.login_95screenCode.GDlogo_9595pessoalObjects1.length = 0;
gdjs.login_95screenCode.GDlogo_9595pessoalObjects2.length = 0;
gdjs.login_95screenCode.GDUUIDObjects1.length = 0;
gdjs.login_95screenCode.GDUUIDObjects2.length = 0;
gdjs.login_95screenCode.GDerrorObjects1.length = 0;
gdjs.login_95screenCode.GDerrorObjects2.length = 0;


return;

}

gdjs['login_95screenCode'] = gdjs.login_95screenCode;
