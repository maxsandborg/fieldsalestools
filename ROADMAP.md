# FieldSalesTools.com — Roadmap & Action Plan
> Skapad: 2026-03-10 | Uppdateras löpande

---

## STATUS ÖVERSIKT

| Fas | Status | Ansvarig |
|---|---|---|
| Fas 1 — Tekniska fixar | ✅ Klar 2026-03-10 | Claude |
| Fas 2 — Affiliate-program | ⏳ Väntar på Max | Max |
| Fas 3 — Google AdSense | ⏳ Väntar på Fas 1 | Max |
| Fas 4 — Vendor outreach | ⏳ Ej påbörjad | Max |
| Fas 5 — Jämförelsesidor | ⏳ Ej påbörjad | Claude |

---

## FAS 1 — Tekniska fixar
**Mål: Komplett, fungerande sajt redo för monetisering**
**Ansvarig: Claude bygger → Max committar & pushar till GitHub**

### Att göra
- [x] Ta bort sökrutan från hero-sektionen
- [x] Skapa `/advertise`-sida med prislista för featured placement
- [x] Skapa `/submit`-sida med vendor-formulär
- [x] Skapa `/about`-sida
- [x] Skapa `/privacy`-sida *(krävs för Google AdSense)*
- [x] Skapa `/disclaimer`-sida *(krävs för Google AdSense)*
- [x] Lägga till `sitemap.xml` och `robots.txt`
- [x] Fixa eller ta bort "Compare Tools"-knapp

### Hur man deployer ändringar
1. Öppna GitHub Desktop
2. Skriv kort commit-meddelande (ex: "Add missing pages")
3. Klicka **Commit to main**
4. Klicka **Push origin**
5. Vercel deployer automatiskt inom ~2 minuter

---

## FAS 2 — Affiliate-program
**Mål: Varje klick på "Visit Tool" ger provision**
**Ansvarig: Max registrerar sig → Claude byter ut länkarna**

### Att göra
- [ ] Registrera hos SalesRabbit Affiliate Program
  - URL: salesrabbit.com → kontakta dem direkt
  - Förväntad provision: ~20-30%
- [ ] Registrera hos Badger Maps Partner Program
  - URL: badgermapping.com → kontakta dem
- [ ] Hitta SPOTIO på Impact.com (affiliate-nätverk)
  - URL: impact.com → sök "SPOTIO"
- [ ] Ge Claude affiliate-länkarna → Claude byter ut alla "Visit Tool"-knappar

---

## FAS 3 — Google AdSense
**Mål: Reklambannrarna visar riktiga annonser**
**Krav: Fas 1 måste vara klar (privacy policy etc.)**
**Ansvarig: Max ansöker → Claude lägger in koden**

### Att göra
- [ ] Gå till adsense.google.com
- [ ] Ansök med `fieldsalestools.com`
- [ ] Lägg in verifieringskod (Claude hjälper)
- [ ] Vänta på godkännande (2–14 dagar)
- [ ] Claude byter ut alla grå "Advertisement"-rutor mot riktiga AdSense-koder

### Krav för godkännande
- ✅ Privacy Policy-sida
- ✅ About-sida
- ✅ Disclaimer om affiliate-länkar
- ✅ Tillräckligt med innehåll (10 tool-sidor = bra)
- ⚠️ Sajten bör ha funnits live i ~2 veckor

---

## FAS 4 — Vendor Outreach
**Mål: Direktintäkt från featured placement**
**Prislista:**
- Featured badge + topp 3-placering: **$299/månad**
- Sidebar-annons (300×250): **$149/månad**
- Paket (båda): **$399/månad**

### Verktyg att kontakta (prioritetsordning)
- [ ] SPOTIO — spotio.com/contact
- [ ] SalesRabbit — salesrabbit.com/contact
- [ ] Badger Maps — badgermapping.com/contact
- [ ] Map My Customers — mapmycustomers.com/contact
- [ ] Knockbase — knockbase.com/contact
- [ ] Sunbase — sunbasedata.com/contact
- [ ] Knockio — knockio.com/contact
- [ ] Canvass — canvass.com/contact
- [ ] D2D CRM — d2dcrm.com/contact
- [ ] LeadSquared — leadsquared.com/contact

### Mail-template (Claude skriver detta i Fas 4)
> Ska skapas — be Claude: "skriv vendor outreach mail för FieldSalesTools"

---

## FAS 5 — Jämförelsesidor
**Mål: Organisk Google-trafik via SEO**
**Ansvarig: Claude bygger**

### Prioriterade sidor (högst sökvolym)
- [ ] SPOTIO vs SalesRabbit
- [ ] Badger Maps vs Map My Customers
- [ ] Best D2D software for solar 2026
- [ ] Best D2D software for roofing 2026
- [ ] Best field sales app for small teams
- [ ] SalesRabbit alternatives
- [ ] SPOTIO alternatives
- [ ] Best canvassing software 2026

---

## TEKNISK STACK
- **Framework:** Next.js 16 (App Router)
- **Hosting:** Vercel (auto-deploy från GitHub)
- **Domän:** fieldsalestools.com (GoDaddy → Vercel DNS)
- **Repo:** github.com/maxsandborg/Site-Directory-Sales-system
- **Lokal mapp:** C:\Users\maxSH\Claude OS\Site Directory Sales system\

---

## INTÄKTSMODELL SAMMANFATTNING

| Källa | Potential | Tidshorisont |
|---|---|---|
| Google AdSense | $50–500/mån (skalar med trafik) | 2–4 veckor |
| Affiliate-länkar | $100–1000/mån | 1–2 veckor |
| Featured placement | $300–1200/mån (1–3 vendors) | Omedelbart möjligt |
| **Total potential månad 1** | **$450–2700/mån** | |

---

## SESSION LOG

### 2026-03-10
- Marknadsanalys — top 10 D2D/field sales verktyg rankade
- Next.js-sajt byggd från grunden (startsida + 10 tool-sidor)
- GitHub-repo uppsatt: Site-Directory-Sales-system
- Deployad live på Vercel
- Domän fieldsalestools.com kopplad via GoDaddy DNS
- Fas 1 tekniska fixar genomförda
