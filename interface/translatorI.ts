
export interface TranslatorI {
        textObject : string[];
        CREDENTIALS : any;
        translate : any;
        detectLanguage(text: string):void;
        translateText(targetLanguage: string):void;
    }
    
