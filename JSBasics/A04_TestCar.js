import {Tesla} from "./A03_Tesla.js";
import {Bmw} from "./A02_Bmw.js";
import {Carinfo} from "./A01_Car.js";


console.log("*****This is Carinfo class object creation*********");
let carInfo=new Carinfo();
carInfo.start();
carInfo.fuelFill();
carInfo.stop();


console.log("\n*****This is BMW class object creation*********");
const bmwCarinfo=new Bmw();
bmwCarinfo.remoteAccess();
bmwCarinfo.autoparking()
bmwCarinfo.start();
bmwCarinfo.fuelFill();
bmwCarinfo.stop();

console.log("\n*****This is Tesla class object creation*********");
const tesla=new Tesla();
tesla.selfDriving();
tesla.emergencyAlert();
tesla.start();
tesla.fuelFill();
tesla.stop();

