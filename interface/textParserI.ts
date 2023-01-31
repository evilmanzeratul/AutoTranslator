
export interface TextparserI {
    getTextToArray(obj: any): string[];
    findText(obj: any, resultArr: string[]): void;
    returnText(resultArr: string[], newLanguage: string, obj : any):any;
}