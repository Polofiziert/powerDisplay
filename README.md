# powerDisplay
A little programm that messures and tracks eltronic power date in a webinterface


## Grober Aufbau

Gesammt Projekt
- powerServer
  + index.js > for orchestration
  + socket.js > WebSocket to pD and PM
  + mqqt.js > MQTT RX and TX from network
  + ucanBus.js > Sensor data Import
- powerDisplay
  + index.html onePager
- powerManager
  + index.html (evtl onePager)
