# Naptár- és utazás-rendszerező webalkalmazás

*BSc szakdolgozat – ELTE IK, programtervező informatikus szak*

## A projekt célja

A szakdolgozat célja egy, az egyetemi élet szervezését segítő naptárrendszer fejlesztése, amely segíti a felhasználót a napi programjának hatékony megtervezésében. Az alkalmazás a felhasználó által megadott események, órák, beadandók és egyéb kötelezettségek alapján javaslatot tesz a nap beosztására, továbbá az utazással töltött idő figyelembevételével igyekszik optimalizálni a napi programot.

## Fő funkciók

### Utazási idő tervezése

A rendszer egyik fő funkciója az utazási idő megtervezése a **Google Maps API** segítségével. A felhasználó megadhatja a kiindulási és célpontot, az alkalmazás pedig a várható utazási idő alapján becsüli meg, mikor kell elindulnia a következő eseményre, így csökkentve a késés esélyét és segítve a reális napirend kialakítását.

### Naptárak importálása és exportálása

Az alkalmazás lehetőséget biztosít különböző naptárformátumok importálására, beleértve a **Neptunból** exportált naptárat is. Ennek révén az egyetemi órák, vizsgák és egyéb intézményi események automatikusan megjelenhetnek a rendszerben, nem szükséges azokat külön-külön rögzíteni. A generált vagy módosított események ezután összekapcsolhatók, illetve exportálhatók a felhasználó által preferált naptárrendszerbe, például **Google Calendar** vagy **Outlook** formátumban.

### Beadandók és határidők

A fejlesztendő rendszer része továbbá a beadandók és egyéb határidők nyilvántartása. A felhasználó rögzítheti a feladatok leadási dátumát és prioritását, a rendszer pedig a megadott időpontok közeledtével értesítéseket küld, így segítve a határidők betartását és a feladatok időben történő elvégzését.

### Felhasználói élmény és biztonság

A program kialakítása során különös hangsúlyt kap a felhasználói élmény, valamint az egyszerű és átlátható kezelhetőség. Biztonságos felhasználói felületet nyújt, beleértve a regisztrációt, a belépést és az adatok védelmét.

## Kihívások

A projekt kihívásai közé tartozik:

- a különböző naptárforrásokból származó adatok egységes kezelése,
- az utazási idők pontos becslése,
- a napi program dinamikus újraszámítása,
- a felhasználói értesítések hatékony kezelése.
