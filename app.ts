import { Translator } from "./class/translator";
import { TextParser } from "./class/textParser";
import { SendText } from "./class/sendText";
import { pl } from "./text/text";

async function main() {

    const textObjectTools = new TextParser();

    const polishArray = textObjectTools.getTextToArray(pl);

    const translation = new Translator();

    const englishArrayAfterTranslation = await translation.translateText("en", polishArray).catch((err) => console.log(err, "translator nie działa"));

    const sendingResult = new SendText();

    const en = textObjectTools.returnText(englishArrayAfterTranslation, "en",pl);
    console.log(en);
    sendingResult.sendResult("en.json", en);

    const englishArray = textObjectTools.getTextToArray(en);

    const spanishArrayAfterTranslation = await translation.translateText("es", englishArray).catch((err) => console.log(err, "translator nie działa"));

    const es = textObjectTools.returnText(spanishArrayAfterTranslation, "es",en);
    console.log(es);
    sendingResult.sendResult("es.json", en);
    
}

main().catch((err) => console.log(err, "main nie działa"));
