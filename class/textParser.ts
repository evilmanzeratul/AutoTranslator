import { TextparserI } from "../interface/textParserI";

export class TextParser implements TextparserI {

    getTextToArray(obj: any){
        const resultArr: string[] = [];
        this.findText(obj, resultArr);
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
            obj.forEach((element, index)=>{
                this.findText(obj[index], resultArr); 
            })
        }
        else if (typeof obj === "string") {
            !(obj.includes("/new-subscriber?lang=")) ? resultArr.push(obj) : false;
        }
    }
    returnText(resultArr: any, newLanguage: string, obj : any) {

        let count: number = 0;

        function countProperty() {
            count++;
            return count;
        }

        function addText(obj: any, resultArr: string[], newLanguage: string,) {

            const atributeArray: any[] = Object.getOwnPropertyNames(obj);
    
            if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) && atributeArray.length > 0) {
                let unknownObjectType: any;
                for (const property in obj) {
                    unknownObjectType = addText(obj[property], resultArr, newLanguage);
                    !(typeof (unknownObjectType) === "string") ? false : obj[property] = unknownObjectType;
                }
            }
            else if (Array.isArray(obj)) {
                let unknownObjectType: any;
                obj.forEach((element, index) => {
                    unknownObjectType = addText(obj[index], resultArr, newLanguage);
                    !(typeof (unknownObjectType) === "string") ? false : obj[index] = unknownObjectType;
                })
            }
            else if (obj.includes("/new-subscriber?lang=")) {
                const result = `/new-subscriber?lang=${newLanguage}`;
                return result;
            }
            else if (typeof obj === "string") {
                const result = resultArr[count];
                countProperty();
                return result;
            }
        }

        const result = JSON.parse(JSON.stringify(obj));
        addText(result, resultArr, newLanguage);
        return result;
    }
}


