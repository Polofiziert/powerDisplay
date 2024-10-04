let powerMath =  {

    //Trigonometrie Sin Cos Tang
    sin: function(degree) {
        // radians = degrees * PI / 180
        let x = Math.sin(degree * Math.PI / 180);
        return x.toFixed(2);   
    },
    cos: function(degree) {
        // radians = degrees * PI / 180
        let x = Math.cos(degree * Math.PI / 180);
        return x.toFixed(2);   
    },
    getRandomInt: function(max) {
        return Math.random() * (max - min) + min;
    },

    //Vektor rechnung
    Vector: {
        addVec: function(vectorA, vectorB){
            return {
                x: vectorA.x + vectorB.x,
                y: vectorA.y + vectorB.y
            };
        },
        subVec: function(vectorA, vectorB){
            return {
                x: vectorB.x - vectorA.x,
                y: vectorB.y - vectorA.y
            };
        },
        multVec: function(vectorA, vectorB){
            return {
                x: vectorA.x * vectorB.x,
                y: vectorA.y * vectorB.y
            };
        },
        scaleVec: function(vector){
            return {
                x: vector.x * scale,
                y: vector.y * scale
            };
        },
        rotateVec: function(vector, angle){
            var ans = { //work around so the scope sees powerMath, otherwise error "is not a function" returns for all in powerMath higher of herachie
                x: vector.x * powerMath.cos(angle) - vector.y * powerMath.sin(angle),
                y: vector.x * powerMath.sin(angle) + vector.y * powerMath.cos(angle)
            }
            return ans;
        },
        amountVec: function(vector){
            return Math.sqrt((vector.x ** 2) + (vector.y ** 2)); 
        },
        getFromPoint: function(pointA, pointB){
            return {
                x: pointB.x - pointA.x,
                y: pointB.y - pointB.y
            }
        },
        getFromAngle: function(length, angle){
            var ans = { //work around so the scope sees powerMath, otherwise error "is not a function" returns for all in powerMath higher of herachie
                x: powerMath.cos(angle)*length,
                y: powerMath.sin(angle)*length
            }
            return ans;
        }

    },

    //Drehstrom rechnungen
    Phi: {
        getFromCos: function(cosPhi){
            return Math.acos(cosPhi);  
        },
        getFromSin: function(sinPhi){
            return Math.asin(sinPhi);
        },
        getFromTan: function(tanPhi){
            return Math.atan(tanPhi);
        },
        getCos: function(wirk, schein){
            var cosPhi = wirk / schein;
            return cosPhi;
        },
        getSin: function(blind, schein){
            var sinPhi = blind / schein;
            return sinPhi;
        },
        getTan: function(blind, wirk){
            var tanPhi = blind / wirk;
            return tanPhi;
        },
    },

    calcINfromVec: function(il1,il2,il3){

        //Berechnung über pytagoras, länge des vec bekannt (phasen strom) 
        //winkel auch bekannt. Ein konstruirtes dreieckt von der x axe zum vec (der länge phasentron(il)), 120°(phasenverschub)-90°=30°
        var vecIL1 = this.Vector.getFromAngle(il1, 30);
        var vecIL2 = this.Vector.getFromAngle(il2, 30);
        var vecIL3 = this.Vector.getFromAngle(il3, 30);
        
        vecIL1 = this.Vector.rotateVec(vecIL1,240);
        vecIL2 = this.Vector.rotateVec(vecIL2,120);
        vecIL3 = this.Vector.rotateVec(vecIL3,0);
        
        var vecIL12 = this.Vector.addVec(vecIL1, vecIL2);
        var vecIL123 = this.Vector.addVec(vecIL12, vecIL3);

        return this.Vector.amountVec(vecIL123);
    },
};