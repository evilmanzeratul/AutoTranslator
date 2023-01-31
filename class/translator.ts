import {TranslatorI} from "../interface/translatorI";
import {Translate} from "@google-cloud/translate/build/src/v2/index";
import * as dotenv from 'dotenv';
dotenv.config();

export class Translator implements TranslatorI { 
    
    CREDENTIALS = JSON.parse(process.env.CREDENTIALS!);

    translate = new Translate({
        credentials: this.CREDENTIALS,                       
        projectId: this.CREDENTIALS.project_id
    })

    async detectLanguage(text: string) {
        try {      
            let response = await this.translate.detect(text);
            return response[0].language;
        } catch (error) {
            console.log(`Error at detectLanguage --> ${error}`);
            return 0;
        }
    }
    async translateText(targetLanguage: string, textObject: string[]) {
        try {
            const resultArr : string[] = [];
            let [translations] = await this.translate.translate(textObject, targetLanguage);
            translations = Array.isArray(translations) ? translations : [translations];
            translations.forEach((translation: string) => {
                resultArr.push(translation);
                    })

            return resultArr;
        } catch (error) {
            console.log(`Error at translateText --> ${error}`);
            return 0;
        }
    }
}
