gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDObstaculoObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDObstaculoObjects2= [];

gdjs.Cena_32sem_32t_237tuloCode.conditionTrue_0 = {val:false};
gdjs.Cena_32sem_32t_237tuloCode.condition0IsTrue_0 = {val:false};


gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDObstaculoObjects1Objects = Hashtable.newFrom({"Obstaculo": gdjs.Cena_32sem_32t_237tuloCode.GDObstaculoObjects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Jogador"), gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo"), gdjs.Cena_32sem_32t_237tuloCode.GDObstaculoObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects1[i].separateFromObjectsList(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDObstaculoObjects1Objects, false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects1.length !== 0 ? gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDJogadorObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDObstaculoObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDObstaculoObjects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);
return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
