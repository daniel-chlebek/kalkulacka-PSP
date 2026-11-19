# Parkování dle PSP

Webová kalkulačka pro výpočet bilance parkovacích stání podle pravidel pražských stavebních předpisů (pro auta) a podle brněnských stavebních předpisů (pro zajímavost pro kola). Umožňuje sestavit stavební záměr z více účelů užívání a zobrazit celkový zaokrouhlený výsledek.

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

**Pro správné výsledky podle předpisů je nutné použít tabulku vždy jen pro 1 záměr v 1 zóně a pro každý účel použít pouze 1 řádek (sečíst m² daného účelu ze všech objektů).**

Pro informativní výpočet je možné zadat do tabulky více různých záměrů i zón. 


Symbol **∞** označuje výsledek, pro který použitá pravidla nestanovují konečné maximum.

## Mapy

Tlačítko mapy u položky otevře interaktivní výběr zóny. Kliknutím na polygon se zóna přiřadí k položce. Podklad lze přepnout mezi ortofotem ČÚZK a OpenStreetMap.

Horní tlačítko **Mapa zón** zobrazí přehledovou mapu vč. tabulky. Odkaz **Otevřít Atlas Prahy** vede na externí mapový portál.

## Export, import a tisk

- **Export .xlsx** stáhne výsledky do souboru pro Excel.
- **Import .xlsx** importuje zadání hodnot zpět z Excelu do webové aplikace. 
- **Tisk / PDF** otevře tiskové okno prohlížeče, kde lze vybrat tiskárnu nebo uložení do PDF.

## Ukládání položek

Položky se automaticky ukládají do místního úložiště prohlížeče na daném zařízení. Po opětovném otevření stejné adresy ve stejném prohlížeči se obnoví.

Mezi zařízeními ani prohlížeči se nesynchronizují. Vymazáním dat webu se uložené položky odstraní. Údaje z dřívější adresy aplikace se na tuto adresu automaticky nepřenesou.

## Technické informace

Aplikace běží v prohlížeči a je hostovaná přes GitHub Pages. GeoJSON se zónami a přehledová mapa jsou součástí webu. Mapové podklady ČÚZK a OpenStreetMap a písma Google Fonts se načítají z internetu.

Výpočty odpovídají pravidlům implementovaným v této verzi kalkulačky a jsou pouze orientační. Pro použití v projektové dokumentaci ověřte jejich aktuálnost a použitelnost pro konkrétní záměr.
