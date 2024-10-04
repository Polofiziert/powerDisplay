
let mIdata;
const mISocket = new WebSocket("ws://localhost:8443");
mISocket.onmessage = function (e) {
    mIdata = JSON.parse(e.data);
};

let mI = {              //Mesurment Interface 
    capsual: function () {
        return mIdata;
    }
};


let power = {                   //PowerGrid of L1 L2 L3
    totalI: { 
        get: function(messurments){
            var I = messurments.I1.get() + messurments.I2.get() + messurments.I3.get();
            return I;
        },
        name: "totalI",
        unit: "Ampere",
        unitSymbol: "A",
        Symbol: "I"
    },
    L1 : {
        S : function(messurments){
            return messurments.I1.get() * messurments.U1N.get();
        }
    },
    L2 : {
        S : function(messurments){
            return messurments.I2.get() * messurments.U2N.get();
        }
    },
    L3 : {
        S : function(messurments){
            return messurments.I3.get() * messurments.U3N.get();
        }
    },

    totalVA :{
        get : function(messurments){
            return (power.L1.S(messurments) + power.L2.S(messurments) + power.L3.S(messurments))/1000; 
        },
        name: "totalVA",
        unit: "kilo Voltampere",
        unitSymbol: "kVA",
        Symbol: "S"
    },

    IN : function(messurments){
        return powerMath.calcINfromVec(messurments.I1.get(),messurments.I2.get(),messurments.I3.get());
    },
    saveMessurementData : function(data){

    },
}


