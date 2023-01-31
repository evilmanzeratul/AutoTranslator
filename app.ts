import { Translator } from "./class/translator";
import { TextParser } from "./class/textParser";
import { SendText } from "./class/sendText";
import { pl } from "./text/text";

async function main() {

    const textObjectTools = new TextParser();

    const polishArray = textObjectTools.getTextToArray(pl);

    const translation = new Translator();

    const englishTranslationResult = await translation.translateText("en", polishArray).catch((err) => console.log(err, "translator nie działa"));

    const englishArray = englishTranslationResult as string[]

    const sendingResult = new SendText();

    const en = textObjectTools.returnText(englishArray, "en", pl);
    console.log(en);
    sendingResult.sendResult("en.json", en);

    const spanishTranslationResult = await translation.translateText("es", englishArray).catch((err) => console.log(err, "translator nie działa"));

    const spanishArray = spanishTranslationResult as string[]

    const es = textObjectTools.returnText(spanishArray, "es", en);
    console.log(es);
    sendingResult.sendResult("es.json", en);

}

main().catch((err) => console.log(err, "main nie działa"));
