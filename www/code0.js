gdjs.JogoCode = {};
gdjs.JogoCode.GDJogadorObjects1= [];
gdjs.JogoCode.GDJogadorObjects2= [];
gdjs.JogoCode.GDObstaculoObjects1= [];
gdjs.JogoCode.GDObstaculoObjects2= [];
gdjs.JogoCode.GDHologramaObjects1= [];
gdjs.JogoCode.GDHologramaObjects2= [];

gdjs.JogoCode.conditionTrue_0 = {val:false};
gdjs.JogoCode.condition0IsTrue_0 = {val:false};
gdjs.JogoCode.condition1IsTrue_0 = {val:false};


gdjs.JogoCode.mapOfGDgdjs_46JogoCode_46GDObstaculoObjects1Objects = Hashtable.newFrom({"Obstaculo": gdjs.JogoCode.GDObstaculoObjects1});
gdjs.JogoCode.userFunc0x7391e8 = function(runtimeScene) {
"use strict";
const jogador = runtimeScene.getObjects("Jogador")[0]
const script = document.createElement("script")
script.type = "text/javascript"
script.src = "https://cdn.jsdelivr.net/gh/subins2000/p2pt/dist/p2pt.umd.min.js"
script.onload = e => {
    var p2pt = new P2PT([
        "wss://tracker.openwebtorrent.com",
        "wss://tracker.btorrent.xyz",
        "wss://tracker.fastcast.nz",
        "wss://tracker.sloppyta.co:443/announce",
        "wss://tracker.novage.com.ua:443/announce",
        "wss://tracker.btorrent.xyz:443/announce",
    ], "Emoji Arena")
    const peers = []
    p2pt.on("peerconnect", (peer) => {
        peers.push(peer)
        peer.objeto = runtimeScene.createObject("Holograma")
        peer.objeto.setX(191)
        peer.objeto.setY(99)
        peer.objeto.setWidth(64)
        peer.objeto.setHeight(64)
    })
    p2pt.on("msg", (peer, mensagem) => {
        const nova_posição = JSON.parse(mensagem)
        peer.objeto.setX(nova_posição[0])
        peer.objeto.setY(nova_posição[1])
    })
    p2pt.start()
    setInterval(() => {
        peers.forEach(peer => {
            p2pt.send(peer, JSON.stringify([jogador.getX(), jogador.getY()]))
        })
    })
}
document.head.appendChild(script)
};
gdjs.JogoCode.eventsList0 = function(runtimeScene) {

{


gdjs.JogoCode.userFunc0x7391e8(runtimeScene);

}


};gdjs.JogoCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Jogador"), gdjs.JogoCode.GDJogadorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo"), gdjs.JogoCode.GDObstaculoObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDJogadorObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDJogadorObjects1[i].separateFromObjectsList(gdjs.JogoCode.mapOfGDgdjs_46JogoCode_46GDObstaculoObjects1Objects, false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.JogoCode.GDJogadorObjects1.length !== 0 ? gdjs.JogoCode.GDJogadorObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JogoCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.JogoCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.JogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JogoCode.GDJogadorObjects1.length = 0;
gdjs.JogoCode.GDJogadorObjects2.length = 0;
gdjs.JogoCode.GDObstaculoObjects1.length = 0;
gdjs.JogoCode.GDObstaculoObjects2.length = 0;
gdjs.JogoCode.GDHologramaObjects1.length = 0;
gdjs.JogoCode.GDHologramaObjects2.length = 0;

gdjs.JogoCode.eventsList1(runtimeScene);
return;

}

gdjs['JogoCode'] = gdjs.JogoCode;
