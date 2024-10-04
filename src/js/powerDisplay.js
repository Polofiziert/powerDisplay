var pDi = {
    element :  function(id){
        return document.getElementById(id);
    },
    makeChartDataLineI : function(mItimeCapsual){
        var newDataLine = {}
        newDataLine[0] = power.totalI.get(mItimeCapsual);
        newDataLine[1] = mItimeCapsual.I1.get()
        newDataLine[2] = mItimeCapsual.I2.get()
        newDataLine[3] = mItimeCapsual.I3.get()
        return newDataLine;
    },
    makeChartDataLineU : function(mItimeCapsual){
        var newDataLine = {}
        newDataLine[0] = mItimeCapsual.U12.get()
        newDataLine[1] = mItimeCapsual.U23.get()
        newDataLine[2] = mItimeCapsual.U31.get()
        newDataLine[3] = mItimeCapsual.U1N.get()
        newDataLine[4] = mItimeCapsual.U2N.get()
        newDataLine[5] = mItimeCapsual.U3N.get()
        return newDataLine;
    },
    setElementData : function(mItimeCapsual){

        pDi.element("IN_field").innerHTML = Math.round(power.IN(mItimeCapsual)) + "A";
        pDi.element("totalI_field").innerHTML = Math.round(power.totalI.get(mItimeCapsual)) + "A";

        var maxI = pDi.element("maxI_field").value * 3; 
        var valuePercent = power.totalI.get(mItimeCapsual) / maxI * 100;
        pDi.element("totalI_bar").style.width = valuePercent+"%";

        pDi.element("totalVA_field").innerHTML = power.totalVA.get(mItimeCapsual) + power.totalVA.unitSymbol;

    },
}

goThrouElements =  function(mesurements){
    var elements = document.querySelectorAll("*[id]");

    elements.forEach((element) => {
        for (const [key, value] of Object.entries(mesurements)) {

            var index = "_";
            var containsIndex = element.id.indexOf(index); // -1 means no index contained
            if(containsIndex != -1){
                var idStriped = element.id.slice(0, containsIndex).toLocaleLowerCase();
                var idFlag = element.id.slice(containsIndex);

                if(idFlag == "_field"){
                    if(idStriped == key.toLowerCase()){

                        element.innerHTML = value.get()+value.unitSymbol;

                    }
                };
                if(idFlag == "_bar"){
                    if(idStriped == key.toLowerCase()){

                        var maxIperPhase = pDi.element("maxI_field").value;

                        if(element.id.indexOf("total") != -1){

                            var maxI = maxIperPhase * 3; 
                            var valuePercent = value.get() / maxI * 100;

                        }else{
                            var valuePercent = value.get() / maxIperPhase * 100;
                        }

                        element.style.width = valuePercent+"%";
                    }
                };
            };
        }
    });
    return elements;
};