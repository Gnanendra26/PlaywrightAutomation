import {Bmw} from "./A02_Bmw.js";
import {Carinfo} from "./A01_Car.js";

export class Tesla extends Carinfo
{

    selfDriving()
    {
        console.log("\nTesla has the selfdriving function without driver intervention.");
    }
    emergencyAlert()
    {
        console.log("\nTesla has the emergency safety functionality.")
    }
    cabinControl()
    {
        console.log("\nTesla control the cabibn temparature.");
    }
}