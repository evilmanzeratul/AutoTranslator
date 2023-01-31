import { Translator } from "./class/translator";
import { TextParser } from "./class/textParser";
import { SendText } from "./class/sendText";
import { pl } from "./text/text";

async function main() {

    const polishText = new TextParser(pl);

    const polishArray = polishText.getTextToArray();

    const translationFromPolish = new Translator(polishArray);

    const englishArrayAfterTranslation = await translationFromPolish.translateText("en").catch((err) => console.log(err, "translator nie działa"));

    const sendingResult = new SendText();

    const en = polishText.returnText(englishArrayAfterTranslation, "en");
    console.log(en);
    sendingResult.sendResult("en.json", en);

    const englishText = new TextParser(en);

    const englishArray = englishText.getTextToArray();

    const translationFromEnglish = new Translator(englishArray);

    const spanishArrayAfterTranslation = await translationFromEnglish.translateText("es").catch((err) => console.log(err, "translator nie działa"));

    const es = polishText.returnText(spanishArrayAfterTranslation, "es");
    console.log(es);
    sendingResult.sendResult("es.json", en);
    
}

main().catch((err) => console.log(err, "main nie działa"));
