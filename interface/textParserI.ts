
export interface TextparserI {
    obj: any;
    getTextToArray(): string[];
    findText(obj: any, resultArr: string[]): void;
}