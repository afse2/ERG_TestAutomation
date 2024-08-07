import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { Page } from "playwright";

export class CustomWorld extends World{

    recoveryMail:string;
    userName: string;
    


    constructor(options: IWorldOptions){
        super(options);

        this.recoveryMail = "";
        this.userName = "";
    }

}

setWorldConstructor(CustomWorld);