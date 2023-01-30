import fs from "fs";

import {SendTextI} from "../interface/sendTextI";

export class SendText implements SendTextI{
    sendresult(file: string, text: any ){
        fs.writeFileSync(file, JSON.stringify( text));
    }
}