# Handoff — Site PhoneRep

## Contexte
Site vitrine pour PhoneRep, boutique de réparation de téléphones et tablettes du père de l'utilisateur, située à Montceau-les-Mines (71). Projet démarré from scratch dans cette session.

## Infos entreprise
- **Raison sociale** : PHONE REP (SAS, capital 1 000 €)
- **Dirigeant** : Messaoud Anssafou
- **SIRET** : 829 018 894 00024
- **Adresse** : 7 rue Danton, 71300 Montceau-les-Mines ⚠️ le registre dit "7" mais certaines sources disent "6" — à confirmer
- **Téléphone** : 03 85 57 31 34
- **Email** : phonerep71@hotmail.com
- **Fondée en** : 2007 (plus de 20 ans d'expérience)
- **Horaires** : Mardi–Jeudi 9h30–12h / 14h30–18h · Vendredi 9h30–12h / **15h**–18h · Lundi & Samedi fermés

## Repo GitHub
- **URL** : https://github.com/myooooooo/sitephonerep
- **Compte** : myooooooo
- **GitHub Pages** : https://myooooooo.github.io/sitephonerep/
- **Domaine visé** : phonerep.fr (acheté chez Infomaniak, pas encore connecté)

## 3 branches / versions
| Branche | Description | État |
|---|---|---|
| `main` | Hero sombre, cards services, FAQ, style sobre & typographique | ✅ Production-ready |
| `design-moderne` | Même structure + pill buttons, icônes cercles rouges, glow hero, animations scroll, CTA mobile fixe | ✅ Complet |
| `revamp` | Hero split 2 colonnes, "20" géant outlined, stats bande noire, cartes numérotées, bande CTA rouge, processus 4 étapes, footer clair | ✅ Complet |

**GitHub Pages est actuellement sur** : `revamp` (dernier activé)

## Services proposés (sans dégâts des eaux)
1. Écran cassé — **le jour même**
2. Batterie — **le jour même**
3. Connecteur de charge
4. Caméra
5. Tablettes

## Vente d'accessoires
- Vitre de protection hydrogel
- Chargeur (USB-C, Lightning, Micro-USB)
- Housse & étui

## Stack technique
- HTML5 / CSS3 / Vanilla JS — pas de framework
- Font : Manrope via fonts.bunny.net (RGPD-safe, pas Google Fonts)
- Icônes : SVG inline (pas de librairie)
- Hébergement actuel : GitHub Pages (gratuit)
- Hébergement cible : Infomaniak

## Ce qui est fait
- [x] Site complet responsive mobile-first
- [x] SEO : title, meta description, Open Graph, Schema.org LocalBusiness, robots.txt, sitemap.xml, canonical
- [x] Accessibilité WCAG AA : contraste corrigé, aria-labels, th/scope, sr-only, heading hierarchy
- [x] Mentions légales complètes (SIRET, dirigeant, hébergeur Infomaniak)
- [x] Politique de confidentialité RGPD (droits art. 15–21, CNIL, Fonts Bunny, Google Maps)
- [x] Formulaire de contact → génère un email proprement formaté via mailto
- [x] Google Maps embed (recherche par nom "Phonerep Montceau-les-Mines")
- [x] FAQ accordéon JS
- [x] Handoff.html (document visuel de référence)
- [x] 3 versions design en branches séparées

## Ce qui reste à faire
### Prioritaire
- [ ] Choisir une version (main / design-moderne / revamp) et l'activer sur GitHub Pages
- [ ] Connecter phonerep.fr chez Infomaniak → CNAME www + 4 A records GitHub Pages
- [ ] Mettre à jour l'URL canonical dans index.html, sitemap.xml une fois le domaine connecté

### Important
- [ ] Confirmer adresse : **6 ou 7** rue Danton
- [ ] Créer/optimiser fiche Google Business Profile (capital pour le SEO local)

### Recommandé
- [ ] Ajouter photos réelles (boutique, atelier, réparateur)
- [ ] Ajouter avis clients (3–5 suffisent)
- [ ] Remplacer le formulaire mailto par Formspree (formspree.io, gratuit 50 envois/mois) pour que le client reçoive les emails directement sans que l'expéditeur ait à ouvrir son client mail

## Préférences utilisateur (feedback sessions)
- Pas de design "trop IA" / template (cartes identiques, emojis dans boîtes, dégradés génériques)
- Le numéro de téléphone doit être très visible
- Rouge comme accent principal (pas bleu)
- Mentions légales et RGPD complets et corrects
- Formulaire : téléphone obligatoire
- "Depuis 2007" / "20 ans d'expérience" = argument clé à mettre en avant

## Fichiers principaux
```
sitephonerep/
├── index.html                   # Page principale
├── mentions-legales.html        # Légal LCEN
├── politique-confidentialite.html # RGPD
├── handoff.html                 # Document de référence visuel
├── HANDOFF.md                   # Ce fichier
├── robots.txt
├── sitemap.xml
├── css/style.css
└── js/main.js
```

## Pour connecter le domaine Infomaniak → GitHub Pages
1. Chez Infomaniak (DNS) : ajouter CNAME `www` → `myooooooo.github.io` + 4 enregistrements A :
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
2. Sur GitHub : Settings → Pages → Custom domain → `phonerep.fr` → Save
3. Dans le code : remplacer `https://phonerep.fr/` partout (canonical, og:url, schema, sitemap)
