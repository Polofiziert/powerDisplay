import { WebSocketServer } from 'ws';
let data;
const socketServer = new WebSocketServer({ port:8443 });

socketServer.on('connection', function connection(ws) {
   console.log('Client connected');
   socketServer.clients.forEach((client) => {
      client.send(data);
   });
});

setInterval(() => {

   let mI = {              //Mesurment Interface
      U1N :  {
          get : function(){
              return Math.floor(Math.random() * (231 - 230) + 230);
          },
          name: "U1N",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
      U2N : {
          get : function(){
              return Math.floor(Math.random() * (230 - 229) + 229);
          },
          name: "U2N",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
      U3N : {
          get : function(){
              return Math.floor(Math.random() * (229 - 228) + 228);
          },
          name: "U3N",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
  
      U12 : {
          get : function(){
              return Math.floor(Math.random() * (401 - 399) + 399);
          },
          name: "U12",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
      U23 : {
          get : function(){
              return Math.floor(Math.random() * (401 - 399) + 399);
          },
          name: "U23",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
      U31 : {
          get : function(){
              return Math.floor(Math.random() * (401 - 399) + 399);
          },
          name: "U31",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
  
      U1PE : {
          get : function(){
              return Math.floor(Math.random() * (230 - 229) + 229);
          },
          name: "U1PE",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
      U2PE : {
          get : function(){
              return Math.floor(Math.random() * (230 - 229) + 229);
          },
          name: "U2PE",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
      U3PE : {
          get : function(){
              return Math.floor(Math.random() * (230 - 229) + 229);
          },
          name: "U3PE",
          unit: "Volts",
          unitSymbol: "V",
          Symbol: "U"
      },
  
      I1: {
          get: function(){
              return Math.floor(Math.random() * (16 - 14) + 14);
          },
          name: "I1",
          unit: "Ampere",
          unitSymbol: "A",
          Symbol: "I"
      },
      I2: {
          get: function(){
              return Math.floor(Math.random() * (10 - 1) + 1);
          },
          name: "I2",
          unit: "Ampere",
          unitSymbol: "A",
          Symbol: "I"
      },
      I3: {
          get: function(){
              return Math.floor(Math.random() * (10 - 4) + 4);
          },
          name: "I3",
          unit: "Ampere",
          unitSymbol: "A",
          Symbol: "I"
      },
      totalFreq: {
          get: function(){
              return Math.floor(Math.random() * (50 - 49,8) + 49,8);
          },
          name: "F",
          unit: "Herz",
          unitSymbol: "Hz",
          Symbol: "f"
      },
      capsual: function () {
          var cap = {};
          for (const [key1, value1] of Object.entries(mI)) {
              if(key1 != "capsual"){
  
                  cap[key1] = {};
                  for (const [key2, value2] of Object.entries(value1)) {
                      if (typeof value2 === "function") {
                          const n = value2(); //freez value2
                          cap[key1][key2] = n;
                      } else {
                          cap[key1][key2] = value2;
                      }
                  }
              }
              
          }
          return cap;
      },
  };

   data = JSON.stringify(mI.capsual());
   socketServer.clients.forEach((client) => {
      client.send(data);
      console.log("Data Send");
   });

}, 2000);