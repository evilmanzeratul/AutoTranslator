
export interface TextparserI {
    getTextToArray(obj: any): string[];
    findText(obj: any, resultArr: string[]): void;
    returnText(resultArr: any, newLanguage: string, obj : any):any;
}