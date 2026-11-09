# Parkování dle PSP

Webová kalkulačka pro výpočet bilance parkovacích a cyklistických stání podle pravidel PSP a BSP implementovaných v aplikaci. Umožňuje sestavit stavební záměr z více položek a zobrazit jejich výsledky i souhrn projektu.

## Jak kalkulačku používat

1. Klikněte na **Přidat položku**.
2. Zadejte název části záměru.
3. Vyberte městskou zónu ručně nebo tlačítkem mapy u položky.
4. Zvolte funkci využití a vyplňte hrubou podlažní plochu v m².
5. U bydlení doplňte počet bytů, pokud jej znáte.
6. Přidejte další položky podle potřeby. Výsledky se průběžně přepočítávají.

U funkcí s individuálním nastavením doplňte příslušné ukazatele. Tlačítkem **Zobrazit výpočet** otevřete podrobnosti konkrétní položky.

## Výsledky

Tabulka zobrazuje minimální a maximální počty stání s rozdělením na vázaná a návštěvnická. Souhrn projektu kombinuje výsledky všech zadaných položek.

Symbol **∞** označuje výsledek, pro který použitá pravidla nestanovují konečné maximum.

## Mapy

Tlačítko mapy u položky otevře interaktivní výběr zóny. Kliknutím na polygon se zóna přiřadí k položce. Podklad lze přepnout mezi ortofotem ČÚZK a OpenStreetMap.

Horní tlačítko **Mapa zón** zobrazí přehledovou mapu. Odkaz **Otevřít Atlas Prahy** vede na externí mapový portál.

## Export a tisk

- **Export .xlsx** stáhne výsledky do souboru pro Excel.
- **Tisk / PDF** otevře tiskové okno prohlížeče, kde lze vybrat tiskárnu nebo uložení do PDF.

## Ukládání položek

Položky se automaticky ukládají do místního úložiště prohlížeče na daném zařízení. Po opětovném otevření stejné adresy ve stejném prohlížeči se obnoví.

Mezi zařízeními ani prohlížeči se nesynchronizují. Vymazáním dat webu se uložené položky odstraní. Údaje z dřívější adresy aplikace se na tuto adresu automaticky nepřenesou.

## Technické informace

Aplikace běží v prohlížeči a je hostovaná přes GitHub Pages. GeoJSON se zónami a přehledová mapa jsou součástí webu. Mapové podklady ČÚZK a OpenStreetMap a písma Google Fonts se načítají z internetu.

Výpočty odpovídají pravidlům implementovaným v této verzi kalkulačky. Pro použití v projektové dokumentaci ověřte jejich aktuálnost a použitelnost pro konkrétní záměr.
