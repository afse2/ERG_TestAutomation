import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";

export class CustomWorld extends World{

    recoveryMail:string;


    constructor(options: IWorldOptions){
        super(options);

        this.recoveryMail= "";
    }

}

setWorldConstructor(CustomWorld);