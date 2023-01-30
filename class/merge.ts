import { MergeI } from "../interface/mergeI";



export class Merge implements MergeI{

    obj: any;
    count : number = 0;
    constructor(obj: any) {
        this.obj = obj;
    }

    countProperty() {
        this.count++ ;
    }

    addText(obj: any, resultArr: string[], newLanguage: string ) {
        const atributeArray: any[] = Object.getOwnPropertyNames(obj);
        const arr: string[] = newLanguage.split('');
        if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) && atributeArray.length > 0) {
            for (const property in obj) {
                const unknown = this.addText(obj[property], resultArr, newLanguage );
                !(typeof (unknown) === "string") ? false : obj[property] = unknown;
            }
        }
        else if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                const unknown = this.addText(obj[i], resultArr, newLanguage );
                !(typeof (unknown) === "string") ? false : obj[i] = unknown;
            }
        }
        else if (typeof obj === "string" && obj.includes("/new-subscriber?lang=")) {
            const textField: string = `/new-subscriber?lang=${newLanguage}`;
            return textField;
        }
        else if (typeof obj === "string" && !obj.includes("/new-subscriber?lang=")) {
            const result = resultArr[this.count];
            this.countProperty();
            return result;
        }
    }
    returnText(resultArr: string[], newLanguage: string) {
        const result = JSON.parse(JSON.stringify(this.obj));
        this.addText(result, resultArr, newLanguage);
        return result;
    }
}