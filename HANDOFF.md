# Handoff — PhoneRep
Site vitrine · Montceau-les-Mines · Juin 2026  
Développé par **Zineb Anssafou**, étudiante BUT MMI

---

## Infos entreprise

| Champ | Valeur |
|---|---|
| Raison sociale | PHONE REP (SAS, capital 1 000 €) |
| Dirigeant | Messaoud Anssafou |
| SIRET | 829 018 894 00024 |
| RCS | Chalon-sur-Saône, numéro 829 018 894 |
| TVA | FR71829018894 |
| Adresse | 7 rue Danton, 71300 Montceau-les-Mines ✅ confirmé Google Maps |
| Téléphone | 03 85 57 31 34 |
| Email | phonerep71@hotmail.com |
| Fondée | 2007 (+ de 20 ans d'expérience) |
| Horaires | Mar–Jeu 9h30–12h / 14h30–18h · Ven 9h30–12h / 15h–18h · Lun & Sam fermés |

---

## Déploiement

| | URL |
|---|---|
| GitHub repo | https://github.com/myooooooo/sitephonerep |
| GitHub Pages | https://myooooooo.github.io/sitephonerep/ |
| Vercel | Connecté au repo, déploiement auto sur push `main` |
| Domaine cible | phonerep.fr — **pas encore acheté** |

---

## Google Business Profile

- Fiche **existante** sur Google Maps
- Note : **3,8 / 5** · **66 avis**
- Statut : **non revendiquée** ⚠️
- Une lettre avec un PIN a été reçue par courrier → à entrer sur business.google.com

---

## Structure des fichiers

```
index.html                      Page principale (one-page)
css/style.css                   Tous les styles
js/main.js                      Nav mobile, FAQ accordéon, formulaire
mentions-legales.html           Mentions légales LCEN
politique-confidentialite.html  Politique RGPD complète
HANDOFF.md                      Ce document
images/
  reparateur.jpg                Photo hero (technicien + téléphone ouvert)
  atelier.jpg                   Photo section "Pourquoi nous"
  favicon.svg                   Favicon SVG — smartphone blanc sur rouge
favicon.ico                     Favicon ICO (16 + 32 px)
favicon-16.png                  Favicon PNG 16×16
favicon-32.png                  Favicon PNG 32×32
robots.txt                      Instructions crawlers
sitemap.xml                     Sitemap SEO (URL phonerep.fr, lastmod 2026-06-23)
```

---

## Ordre des sections (index.html)

1. **Hero** — titre + photo split 2 colonnes, tél rouge cliquable, CTA devis
2. **Services** — 5 pannes en cards (écran, batterie, connecteur, caméra, tablettes)
3. **Pourquoi nous** — 4 arguments + 4 stats + photo atelier
4. **Avis clients** — 3,8/5 · 66 avis · 3 vrais témoignages Google
5. **Accessoires** — vitre hydrogel, chargeur, housse
6. **Contact** — infos + horaires + formulaire (nom, tél, appareil, panne, RGPD)
7. **FAQ** — accordéon JS, 7 questions dont zone géographique
8. **Google Maps** — embed + bouton itinéraire CTA rouge
9. **Footer** — logo, liens légaux, copyright, crédit Zineb

---

## Design tokens

| Token | Valeur |
|---|---|
| Accent rouge | `#CC1414` |
| Texte | `#111111` |
| Texte secondaire | `#555550` |
| Texte tertiaire | `#686864` |
| Fond principal | `#F7F6F4` |
| Fond sections alt | `#EEECEA` |
| Police titres | Manrope 800 (fonts.bunny.net — RGPD-safe) |
| Police corps | System UI (sans requête externe) |

---

## Ce qui est fait ✅

### Légal
- Mentions légales LCEN complètes (SIRET, RCS, TVA, hébergeur, médiation, droit applicable)
- Politique RGPD complète : données collectées corrigées (tél obligatoire, modèle appareil), Fonts Bunny, Google Maps + transfert hors UE, hébergeur GitHub Pages (art. 6.1.f), DPO non obligatoire
- Formulaire RGPD : case à cocher obligatoire, champ tél required

### SEO
- Schema.org `LocalBusiness` (adresse, horaires, tél, fondation)
- Title enrichi avec "depuis 2007 · 71300"
- Meta description avec marques + J+0 + sans rendez-vous
- FAQ zone géo : Blanzy, Le Creusot, Chalon-sur-Saône, Saône-et-Loire
- Textes services : iPhone, Samsung Galaxy, Xiaomi, Galaxy Tab nommés
- sitemap.xml : URL phonerep.fr + date 2026
- robots.txt, balise canonical, Open Graph

### UX / Conversion
- Sticky bar mobile fixe (tél + bouton devis)
- Tél nav toujours rouge
- Hero sous-titre renforcé
- Bouton CTA rouge "Itinéraire Google Maps" centré mobile
- Contact : adresse/tél/email centré sur mobile
- Section Avis : 3 vrais témoignages Google (Gaëtan G., Didier T. Local Guide, Christiane M.)

### Tech
- Favicon refait : smartphone moderne SVG + PNG 16/32 + ICO
- Images poussées sur GitHub (photos + favicons)
- Déployé sur Vercel (auto-deploy sur push main)
- Crédit développeuse dans footer des 3 pages

---

## Ce qui reste à faire

### 🔴 Prioritaire
- [ ] **Revendiquer Google Business Profile** — retrouver la lettre PIN → business.google.com → entrer le code → ajouter site web + photos
- [ ] **Acheter phonerep.fr** — puis configurer DNS vers Vercel chez Infomaniak, mettre à jour canonical/og:url/schema dans index.html

### 🟡 Important
- [ ] **Google Search Console** — après domaine connecté : vérifier via DNS TXT, soumettre sitemap.xml *(pas de traceur ajouté au site)*
- [ ] **Photos boutique** — ajouter sur Google Business après revendication (extérieur, atelier, réparations en cours)

### 🟢 Recommandé
- [ ] **Formspree** — remplacer `mailto:` du formulaire par Formspree.io (gratuit 50 envois/mois → livraison directe sur phonerep71@hotmail.com)
- [ ] **Avis supplémentaires** — Edith Ciron et Riyan Zaidi disponibles pour compléter la section (passer à 5 témoignages)

---

*Projet PhoneRep · Handoff juin 2026 · GitHub : myooooooo/sitephonerep*
