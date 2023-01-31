import { Translator } from "./class/translator";
import { TextParser } from "./class/textParser";
import { SendText } from "./class/sendText";
import { pl } from "./text/text";

async function main() {

    const polishText = new TextParser(pl); 

    const polishArray = polishText.getTextToArray();

    const translation = new Translator(polishArray);

    const englishArray = await translation.translateText("en").catch((err) => console.log(err, "translator nie działa"));

    const spanishArray = await translation.translateText("es").catch((err) => console.log(err, "translator nie działa"));

    const sendingResult = new SendText();

    if (Array.isArray(englishArray)) {
        const englishText = polishText.returnText(englishArray, "en");
        console.log(englishText);
        sendingResult.sendResult("en.json", englishText);
    }
    if (Array.isArray(spanishArray)) {
        const spanishText = polishText.returnText(spanishArray, "es");
        console.log(spanishText);
        sendingResult.sendResult("esp.json", spanishText);
    }
}

main().catch((err) => console.log(err, "main nie działa"));
