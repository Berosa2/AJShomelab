gdjs.APICode = {};
gdjs.APICode.localVariables = [];
gdjs.APICode.idToCallbackMap = new Map();
gdjs.APICode.GDOutputObjects1= [];
gdjs.APICode.GDOutputObjects2= [];
gdjs.APICode.GDOutputObjects3= [];
gdjs.APICode.GDOutputObjects4= [];
gdjs.APICode.GDinputObjects1= [];
gdjs.APICode.GDinputObjects2= [];
gdjs.APICode.GDinputObjects3= [];
gdjs.APICode.GDinputObjects4= [];
gdjs.APICode.GDHomeObjects1= [];
gdjs.APICode.GDHomeObjects2= [];
gdjs.APICode.GDHomeObjects3= [];
gdjs.APICode.GDHomeObjects4= [];
gdjs.APICode.GDUser_9595iconObjects1= [];
gdjs.APICode.GDUser_9595iconObjects2= [];
gdjs.APICode.GDUser_9595iconObjects3= [];
gdjs.APICode.GDUser_9595iconObjects4= [];
gdjs.APICode.GDAppsObjects1= [];
gdjs.APICode.GDAppsObjects2= [];
gdjs.APICode.GDAppsObjects3= [];
gdjs.APICode.GDAppsObjects4= [];
gdjs.APICode.GDSettingsObjects1= [];
gdjs.APICode.GDSettingsObjects2= [];
gdjs.APICode.GDSettingsObjects3= [];
gdjs.APICode.GDSettingsObjects4= [];


gdjs.APICode.userFunc0xcebc80 = function GDJSInlineCode(runtimeScene) {
"use strict";
const input = runtimeScene.getVariables().get("Command").getAsString();

// match quoted strings OR normal words
const parts = input.match(/"([^"]+)"|[^\s]+/g) || [];

// remove quotes
const clean = parts.map(p => p.replace(/^"|"$/g, ""));

// store into a GDevelop array variable
const arrayVar = runtimeScene.getVariables().get("CommandArray");

for (let i = 0; i < clean.length; i++) {
    arrayVar.getChild(i).setString(clean[i]);
}
};
gdjs.APICode.eventsList0 = function(runtimeScene) {

{


gdjs.APICode.userFunc0xcebc80(runtimeScene);

}


};gdjs.APICode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2).getAsString() == "show");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.APICode.GDOutputObjects2, gdjs.APICode.GDOutputObjects3);

{for(var i = 0, len = gdjs.APICode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects3[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects3[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] all clients connected " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2).getAsString() != "show");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


};gdjs.APICode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString() == "all");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects2);
{gdjs.evtTools.p2p.disconnectFromAllPeers();
}
{for(var i = 0, len = gdjs.APICode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects2[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Desconnecting all clients"));
}
}

{ //Subevents
gdjs.APICode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString() != "all");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Desconnected from " + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString()));
}
}
{gdjs.evtTools.p2p.disconnectFromPeer(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString());
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


};gdjs.APICode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString() == "all");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects2);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects2[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Saving terminal logs in"));
}
}
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp")) + ".txt", (( gdjs.APICode.GDOutputObjects2.length === 0 ) ? "" :gdjs.APICode.GDOutputObjects2[0].getBehavior("Text").getText()), null);
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString() == "packages");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects2);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects2[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Saving packages logs"));
}
}
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp")) + ".txt", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(3)), null);
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString() == "connections");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Saving last hour connection logs"));
}
}
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp")) + ".txt", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(4)), null);
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


};gdjs.APICode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Get-admin", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("Info", "Email", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("email"));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Info", "Name", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name"));
}
{gdjs.evtTools.p2p.sendDataTo(gdjs.evtTools.p2p.getEventSender("Get-admin"), "Get-info-response", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\nSomeone requested the info about the admin accont!\nPeer Requested:" + gdjs.evtTools.p2p.getEventSender("Get-info-response")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Status", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\nSimple Database Response - " + gdjs.evtTools.p2p.getEventData("Status")));
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

gdjs.copyArray(runtimeScene.getObjects("input"), gdjs.APICode.GDinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDinputObjects1.length;i<l;++i) {
    if ( gdjs.APICode.GDinputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDinputObjects1[k] = gdjs.APICode.GDinputObjects1[i];
        ++k;
    }
}
gdjs.APICode.GDinputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDinputObjects1.length;i<l;++i) {
    if ( gdjs.APICode.GDinputObjects1[i].getBehavior("Text").getText() == "get-command" ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDinputObjects1[k] = gdjs.APICode.GDinputObjects1[i];
        ++k;
    }
}
gdjs.APICode.GDinputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13193836);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
/* Reuse gdjs.APICode.GDinputObjects1 */
{for(var i = 0, len = gdjs.APICode.GDinputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDinputObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n" + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("input"), gdjs.APICode.GDinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDinputObjects1.length;i<l;++i) {
    if ( gdjs.APICode.GDinputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDinputObjects1[k] = gdjs.APICode.GDinputObjects1[i];
        ++k;
    }
}
gdjs.APICode.GDinputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDinputObjects1.length;i<l;++i) {
    if ( (gdjs.APICode.GDinputObjects1[i].getBehavior("Text").getText()).startsWith("/") ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDinputObjects1[k] = gdjs.APICode.GDinputObjects1[i];
        ++k;
    }
}
gdjs.APICode.GDinputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13196012);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.APICode.GDinputObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).setString((( gdjs.APICode.GDinputObjects1.length === 0 ) ? "" :gdjs.APICode.GDinputObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.APICode.GDinputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDinputObjects1[i].getBehavior("Text").setText("");
}
}

{ //Subevents
gdjs.APICode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onConnection();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13197780);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\nAn new uuid connected: " + gdjs.evtTools.p2p.getConnectedPeer()));
}
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.evtTools.p2p.getConnectedPeer());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/help");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n/uuid - shows the server localizer id and last connection.\n/log - logs the terminal output - /log [type (all, packages, connections)]\n/send - send an package to an peer - /send [uuid] [pack-name] [pack-content]\n/ssend - See what packages you sended\n/connect - connects to an client - /connect [uuid]\n/desconnect - desconnect from all people - /desconnect [type (all, uuid)] [if all (show = connected)]\n/ssend - see logs of sended data\n/restart - restarts all the server, changind the uuid, desconnecting from all other people, like making an new server but no data is lose"));
}
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/uuid");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\nServerID: " + gdjs.evtTools.p2p.getCurrentId() + "\nLast Connection: " + gdjs.evtTools.p2p.getConnectedPeer()));
}
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/connect");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{gdjs.evtTools.p2p.connect(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString());
}
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Connectiong to " + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString()));
}
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/desconnect");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.APICode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/send");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(5).getChild(3).getAsString());
}
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] You sended yor info to " + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsString()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("content").setString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(3).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("rounte").setString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2).getAsString());
}
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/log");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.APICode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/ssend");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Sended Content: " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() == "/restart");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.APICode.GDOutputObjects1);
{gdjs.evtTools.p2p.disconnectFromAllPeers();
}
{gdjs.evtTools.p2p.disconnectFromBroker();
}
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{for(var i = 0, len = gdjs.APICode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDOutputObjects1[i].getBehavior("Text").getText() + ("\n[" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsString() + "] Restarded, your uuid reseted"));
}
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Clean cache", 3600, null);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(4));
}
}

}


};

gdjs.APICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.APICode.GDOutputObjects1.length = 0;
gdjs.APICode.GDOutputObjects2.length = 0;
gdjs.APICode.GDOutputObjects3.length = 0;
gdjs.APICode.GDOutputObjects4.length = 0;
gdjs.APICode.GDinputObjects1.length = 0;
gdjs.APICode.GDinputObjects2.length = 0;
gdjs.APICode.GDinputObjects3.length = 0;
gdjs.APICode.GDinputObjects4.length = 0;
gdjs.APICode.GDHomeObjects1.length = 0;
gdjs.APICode.GDHomeObjects2.length = 0;
gdjs.APICode.GDHomeObjects3.length = 0;
gdjs.APICode.GDHomeObjects4.length = 0;
gdjs.APICode.GDUser_9595iconObjects1.length = 0;
gdjs.APICode.GDUser_9595iconObjects2.length = 0;
gdjs.APICode.GDUser_9595iconObjects3.length = 0;
gdjs.APICode.GDUser_9595iconObjects4.length = 0;
gdjs.APICode.GDAppsObjects1.length = 0;
gdjs.APICode.GDAppsObjects2.length = 0;
gdjs.APICode.GDAppsObjects3.length = 0;
gdjs.APICode.GDAppsObjects4.length = 0;
gdjs.APICode.GDSettingsObjects1.length = 0;
gdjs.APICode.GDSettingsObjects2.length = 0;
gdjs.APICode.GDSettingsObjects3.length = 0;
gdjs.APICode.GDSettingsObjects4.length = 0;

gdjs.APICode.eventsList4(runtimeScene);
gdjs.APICode.GDOutputObjects1.length = 0;
gdjs.APICode.GDOutputObjects2.length = 0;
gdjs.APICode.GDOutputObjects3.length = 0;
gdjs.APICode.GDOutputObjects4.length = 0;
gdjs.APICode.GDinputObjects1.length = 0;
gdjs.APICode.GDinputObjects2.length = 0;
gdjs.APICode.GDinputObjects3.length = 0;
gdjs.APICode.GDinputObjects4.length = 0;
gdjs.APICode.GDHomeObjects1.length = 0;
gdjs.APICode.GDHomeObjects2.length = 0;
gdjs.APICode.GDHomeObjects3.length = 0;
gdjs.APICode.GDHomeObjects4.length = 0;
gdjs.APICode.GDUser_9595iconObjects1.length = 0;
gdjs.APICode.GDUser_9595iconObjects2.length = 0;
gdjs.APICode.GDUser_9595iconObjects3.length = 0;
gdjs.APICode.GDUser_9595iconObjects4.length = 0;
gdjs.APICode.GDAppsObjects1.length = 0;
gdjs.APICode.GDAppsObjects2.length = 0;
gdjs.APICode.GDAppsObjects3.length = 0;
gdjs.APICode.GDAppsObjects4.length = 0;
gdjs.APICode.GDSettingsObjects1.length = 0;
gdjs.APICode.GDSettingsObjects2.length = 0;
gdjs.APICode.GDSettingsObjects3.length = 0;
gdjs.APICode.GDSettingsObjects4.length = 0;


return;

}

gdjs['APICode'] = gdjs.APICode;
