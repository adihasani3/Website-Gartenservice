# Grünprofi – Gartenservice Website

Eine professionelle, responsive Website für den Gartenservice **Grünprofi** in Backnang und Umgebung. Statisch (HTML/CSS/JS), ohne Framework und ohne Build-Schritt – läuft überall, z.&nbsp;B. auf GitHub Pages.

## Inhalt

- `index.html` – Startseite (Hero, Leistungen, Über uns, Ablauf, Einsatzgebiet, FAQ, Kontakt)
- `impressum.html` – Impressum (Pflichtangaben nach § 5 TMG, vollständig ausgefüllt)
- `datenschutz.html` – Datenschutzerklärung (DSGVO-Vorlage)
- `css/style.css` – Styling
- `js/script.js` – mobiles Menü, Kontaktformular (mailto), Header-Effekt
- `assets/favicon.svg` – Favicon
- `robots.txt`, `sitemap.xml` – SEO
- `CNAME` – Custom Domain für GitHub Pages

## Vor dem Livegang unbedingt erledigen

1. **Domain registrieren**: Die Seite ist technisch auf `gruenprofi-backnang.de` vorbereitet (Meta-Tags, `sitemap.xml`, `robots.txt`, `CNAME`). Die Domain muss noch bei einem Registrar (z.&nbsp;B. IONOS, Strato, Namecheap) registriert werden – das kann Claude Code nicht automatisch für dich tun.
2. **Social-Preview-Bild** (optional): `assets/og-image.png` (1200×630 px) ergänzen, damit Linkvorschauen in Social Media/Messengern ein Bild zeigen.
3. **Kontaktdaten/Rechtsangaben bei Bedarf aktualisieren**: Telefon, E-Mail, Anschrift (Adrian Hasani, Stettiner Ring 11, 71522 Backnang) und Kleinunternehmerregelung (§ 19 UStG) sind in `impressum.html` und `datenschutz.html` hinterlegt.

## Deployment (Beispiel: GitHub Pages)

1. Repository-Einstellungen → *Pages* → Branch auswählen (z.&nbsp;B. `main`), Root-Verzeichnis.
2. Unter *Custom domain* `gruenprofi-backnang.de` eintragen (ist bereits in der `CNAME`-Datei hinterlegt).
3. Beim Domain-Registrar einen `CNAME`-Eintrag (Subdomain) bzw. `A`-Records (Apex-Domain) auf GitHub Pages setzen – siehe [GitHub-Doku zu Custom Domains](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Lokale Vorschau

Kein Build-Schritt nötig – `index.html` direkt im Browser öffnen, oder lokal servieren:

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` aufrufen.
