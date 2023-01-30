import { TextparserI } from "../interface/textParserI"


export class TextParser implements TextparserI {

    obj: any;
    constructor(obj: any) {
        this.obj = obj;
    }
    getTextToArray(): string[] {
        const resultArr: string[] = [];
        this.findText(this.obj, resultArr);
        return resultArr;
    }

    findText(obj: any, resultArr: string[]) {
        const atributeArray: any[] = Object.getOwnPropertyNames(obj);
        if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) && atributeArray.length > 0) {
            for (const property in obj) {
                this.findText(obj[property], resultArr);
            }
        }
        else if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                this.findText(obj[i], resultArr);
            }
        }
        else if (typeof obj === "string") {
            !(obj.includes("/new-subscriber?lang=")) ? resultArr.push(obj) : false;
        }
    }
}


