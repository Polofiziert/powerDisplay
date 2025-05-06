# powerDisplay
A little programm that messures and tracks eltronic power date in a webinterface


## Grober Aufbau

Gesammt Projekt
- powerServer
  + index.js > for orchestration
  + socket.js > WebSocket to pD and PM
  + mqqt.js > MQTT RX and TX from network
  + CAN.js > Sensor data Import over CANbus for future profing an compatability
- powerDisplay
  + index.html onePager
- powerManager
  + index.html (evtl onePager)



Data Flow SensorData
                                                                    +-> mqtt.js
Sensor -> microController -> CAN seriel Bus -> CAN.js -> index.js - |
                                                                    +-> socket.js


Controlldaten
                                                  +-> mqtt.js -> index.js (of subsequent powerDisplays)
powerManager -> socket.js -> index.js -> mqtt.js -|
                                                  +-> mqtt.js -> index.js (of subsewquent powerDisplays)

Hirachi
- ein powerDisplay kann eine session eröffnen, dieses ist dann powerManager(sessionMaster) 
