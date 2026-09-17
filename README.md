# Grünprofi – Gartenservice Website

Eine professionelle, responsive Website für den Gartenservice **Grünprofi** in Backnang und Umgebung. Statisch (HTML/CSS/JS), ohne Framework und ohne Build-Schritt – läuft überall, z.&nbsp;B. auf GitHub Pages.

Die Seite läuft aktuell bewusst auf der **kostenlosen GitHub-Pages-Subdomain** (`adihasani3.github.io/Website-Gartenservice`), noch ohne eigene Domain. So lässt sich das Angebot ohne laufende Kosten testen; eine eigene Domain (`gruenprofi-backnang.de` o.&nbsp;ä.) kann jederzeit nachgerüstet werden, sobald sich das Geschäft trägt.

## Inhalt

- `index.html` – Startseite (Hero, Leistungen, Über uns, Ablauf, Einsatzgebiet, FAQ, Kontakt)
- `impressum.html` – Impressum (Pflichtangaben nach § 5 TMG, vollständig ausgefüllt)
- `datenschutz.html` – Datenschutzerklärung (DSGVO-Vorlage)
- `css/style.css` – Styling
- `js/script.js` – mobiles Menü, Kontaktformular (mailto), Header-Effekt
- `assets/favicon.svg` – Favicon
- `robots.txt`, `sitemap.xml` – SEO, aktuell auf die GitHub-Pages-URL ausgerichtet

## Deployment (GitHub Pages, kostenlose Subdomain)

1. Im Repository unter **Settings → Pages** als *Source* den Branch `claude/gartenservice-website-domain-g2wd36` (Root-Verzeichnis) auswählen und speichern. Alternativ vorher auf `main` mergen und dort veröffentlichen.
2. Nach ein bis zwei Minuten ist die Seite unter `https://adihasani3.github.io/Website-Gartenservice/` erreichbar.
3. Dieser Schritt lässt sich nicht automatisch durchführen – GitHub verlangt dafür eine manuelle Bestätigung in den Repository-Einstellungen.

## Später: eigene Domain nachrüsten

1. Domain registrieren (z.&nbsp;B. `gruenprofi-backnang.de`) bei einem Registrar wie IONOS, Strato oder Namecheap.
2. Eine `CNAME`-Datei mit dem Domainnamen im Projektstamm anlegen.
3. Unter **Settings → Pages → Custom domain** die Domain eintragen.
4. Beim Registrar einen `CNAME`-Eintrag (Subdomain) bzw. `A`-Records (Apex-Domain) auf GitHub Pages setzen – siehe [GitHub-Doku zu Custom Domains](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
5. Alle `https://adihasani3.github.io/Website-Gartenservice/`-Verweise (Meta-Tags in `index.html`/`impressum.html`/`datenschutz.html`, `robots.txt`, `sitemap.xml`) auf die neue Domain umstellen.

## Lokale Vorschau

Kein Build-Schritt nötig – `index.html` direkt im Browser öffnen, oder lokal servieren:

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` aufrufen.
