# Parkování dle PSP — GitHub Pages

Hotový statický web vytvořený z projektu Macaly. Výpočty, React komponenty, localStorage, XLSX a tisk vycházejí z původního kódu. GeoJSON a obrázek mapy jsou přiložené.

## Publikování
1. Rozbalte ZIP.
2. Vytvořte na GitHubu veřejný repozitář, například kalkulacka.
3. Nahrajte celý obsah této složky, včetně složky assets. index.html musí být přímo v hlavní složce repozitáře.
4. Settings → Pages → Deploy from a branch → main → / (root) → Save.
5. Po dokončení nasazení otevřete odkaz uvedený v Pages.

Web funguje i v podsložce /kalkulacka/. Testujte přes HTTP/HTTPS, ne dvojklikem z disku.
Mapové podklady ČÚZK, OpenStreetMap a Google Fonts se načítají z internetu.
GeoJSON a mapa SVG jsou součástí tohoto balíčku. Všechny soubory publikovaného webu budou veřejně dostupné.
Dosavadní položky localStorage z Macaly se na novou adresu automaticky nepřenesou.
Při změně obrázku mapy změňte CACHE_NAME v map-cache-worker.js, aby se aktualizovala cache.
Pravidla a výpočty jsou převzaté z původní aplikace. Tento export nepředstavuje kontrolu jejich souladu s předpisy.
