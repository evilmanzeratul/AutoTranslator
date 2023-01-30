
export interface MergeI {
    obj: any;
    count : number;
    countProperty():void;
    addText(obj: any, resultArr: string[], newLanguage: string ): void | string;
    returnText(resultArr: string[], newLanguage: string): any;
}