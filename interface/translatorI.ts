
export interface TranslatorI {
        CREDENTIALS : any;
        translate : any;
        detectLanguage(text: string):void;
        translateText(targetLanguage: string, textObject: string[]):void;
    }
    
