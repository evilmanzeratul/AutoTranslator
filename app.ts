import { Translator } from "./class/translator";
import { TextParser } from "./class/textParser";
import { SendText } from "./class/sendText";
import { Merge } from "./class/merge";
import { pl } from "./text/text";

async function main(text:any, language:string, destination: string) {
    const polichText = new TextParser(text);

    const polishArray = polichText.getTextToArray();

    const translation = new Translator(polishArray);

    const englishArray = await translation.translateText(language).catch((err) => console.log(err, "translator nie działa"));

    const merging = new Merge(text);

    const sendingResult = new SendText();

    if (Array.isArray(englishArray)) {
        const englishText = merging.returnText(englishArray, language);
        console.log(englishText);
        sendingResult.sendResult(destination, englishText);
    }
}

main(pl,"en","en.json").catch((err) => console.log(err, "main nie działa"));