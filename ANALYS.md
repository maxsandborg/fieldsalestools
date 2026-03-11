# FieldSalesTools.com — Fullständig analys & handlingsplan
*Genomförd: Mars 2026 | Jämförd mot: G2, Capterra, OpenAlternative, Capterra nisch-sajter*

---

## 1. Vad vi har byggt — nuläge

### Struktur
| Sektion | Antal sidor | Status |
|---|---|---|
| Tool-sidor | 20 | ✅ Klara |
| Redaktionella recensioner | 5/20 | ⚠️ Delvis klar |
| Alternativ-sidor | 5 | ✅ Klara |
| Jämförelsesidor | 7 | ✅ Klara |
| Industri-landningssidor | 8 | ✅ Klara |
| Statiska sidor (about, submit, advertise) | 4 | ✅ Klara |

### Tekniskt fundament
- **Next.js SSG** — Blixtsnabb, SEO-vänlig ✅
- **Sitemap.xml** — Finns ✅ (men saknar alternativ-sidor)
- **robots.txt** — Finns ✅
- **OpenGraph-taggar** — Finns ✅
- **Meta-titlar** — Bra format ("Review 2026 — Pricing, Features & Alternatives") ✅
- **Mobilanpassad** — Ja ✅
- **Structured data / schema** — **SAKNAS HELT** ❌
- **Analytics** — **SAKNAS** ❌

---

## 2. Jämförelse mot framgångsrika directory-sajter

### Hur konkurrenterna tjänar pengar och rankar

**G2 & Capterra** (generalist-giganter):
- Miljontals användares recensioner = trovärdighet
- Review-schema gör att stjärnor visas direkt i Google-resultaten
- Tusentals "best X software" kategori-sidor
- Betald placering i topp = huvudintäkt (tusentals dollar/månad per kund)
- Vi kan **inte** slå dem brett — men vi kan äga niischen

**OpenAlternative.co** (nisch-directory, närmast oss):
- Lanserades early 2024, 1 miljon unika besökare första året
- $57 000 i intäkter under år 1 ($6k+ MRR i december 2024)
- Intäkter: featured listings + sponsringar + affiliate
- Hemligheten: extremt fokuserad nisch (open source-alternativ) med bra SEO-struktur
- **Det är precis vad vi bygger, fast för field sales**

**Viktigt mönster från framgångsrika nisch-directory-sajter:**
1. Rika tool-sidor med djupt innehåll rankar för long-tail-keywords
2. "X alternatives"-sidor driver enormt med trafik (folk googlar "SPOTIO alternative" inte "best field sales software")
3. Schema markup gör att dina recensioner syns som stjärnor i Google = fler klick
4. Affiliate-intäkter på SaaS-produkter är 15–40% kommission, ofta recurring

---

## 3. Gap-analys — vad vi saknar

### 🔴 KRITISKT — åtgärda omedelbart

**1. Structured data / JSON-LD schema saknas helt**
Det här är den enskilt viktigaste tekniska bristen. G2, Capterra och alla seriösa directory-sajter implementerar:
- `SoftwareApplication` schema (berättar för Google vad verktyget är)
- `Review` / `AggregateRating` schema (ger stjärnor i Google-resultat)
- `BreadcrumbList` schema (förbättrar klickfrekvens i SERPs)

Utan detta visas våra sidor som nakna text-resultat i Google. Med rätt schema kan vi ha 4.4 ★ (412 reviews) under varje tool-sida i sökresultaten — det dubblerar klickfrekvensen.

**2. Alternativ-sidorna är inte i sitemap.xml**
Vi byggde 5 st `/alternatives/[slug]`-sidor men de finns inte i sitemap.xml. Google vet inte att de existerar. Dessa är potentiellt de bäst-rankande sidorna på hela sajten (folk googlar aktivt "[verktyg] alternative").

**3. Logos är emojis**
Det är vår tydligaste signal att sajten är ung. Varje seriös directory-sajt visar riktiga logoer. En enkel lösning: Clearbit Logo API (`logo.clearbit.com/spotio.com`) eller hämta logoer direkt och spara dem i `/public/logos/`. Ingenting sänker trovärdigheten lika snabbt som ett 📍 istället för SPOTIOs logotyp.

**4. "2,800+ Reviews" i hero är missvisande**
Den siffran aggregerar externa review-counts från G2/Capterra-datan i tools.ts. En besökare förväntar sig att vi har 2 800 recensioner på vår sajt — det har vi inte. Ska ändras till något korrekt som "20+ Tools Reviewed" eller "Based on 2,800+ real user reviews (G2, Capterra)" med tydlig attributering.

**5. Inga affiliate-program aktiverade**
Vi har `affiliateUrl`-fältet i datan men de flesta verktyg pekar fortfarande på vanliga webbplatser. SalesRabbit har ett offentligt affiliate-program med **15% kommission**. Spotio, Badger Maps och Map My Customers bör kontaktas direkt. Det här är den snabbaste vägen till faktiska intäkter.

---

### 🟡 VIKTIGT — nästa sprint

**6. Recensioner för bara 5 av 20 verktyg**
15 tool-sidor har bara "Overview"-sektionen — inget redaktionellt djup. Google ser tunnt innehåll och rankar det sämre. Målet bör vara fullständiga recensioner för de 10 mest sökta verktygen inom 2–3 veckor.

**7. Ingen sökfunktion**
Det är grundläggande för en directory. Användaren ska kunna skriva "solar CRM" och få relevanta verktyg. Just nu finns bara kategorifilter. En enkel klient-side sökning med fuse.js eller liknande är tillräckligt i dagsläget.

**8. Inga "best X for Y"-sidor utöver industrier**
G2 har hundratals filterkombinationer: "best field sales software for small business", "best field sales apps for Android", osv. Vi borde skapa liknande sidor:
- `/best/solar-canvassing-software`
- `/best/small-team-field-sales`
- `/best/free-field-sales-software`

Dessa rankar för specifika long-tail keywords med hög köpintention.

**9. Ingen e-postlista / newsletter**
Alla framgångsrika directory-sajter bygger en e-postlista. En simpel "Get our weekly field sales tool digest" i footern eller en popup kan bygga upp en lista som är värd tusentals kronor i direkta sponsringar.

**10. Ingen Google Analytics / Plausible**
Utan tracking vet vi ingenting. Kan inte optimera. Kan inte visa annonsörer trafik. Måste lösa innan vi börjar pitcha annonsplatser till vendors.

---

### 🟢 LÄGRE PRIORITET — framtid

**11. Fler jämförelsesidor**
Vi har 7 jämförelsesidor men borde ha 20–30 st. Varje "X vs Y" rankar för ett specifikt sökord och driver köpavsikt-trafik.

**12. Användargenererade recensioner**
Långsiktigt vill man ha riktiga användar-recensioner på sajten, inte bara redaktionella. Men det kräver ett login-system och moderering — inget för nu.

**13. Dynamisk sitemap**
Just nu är sitemap.xml en statisk fil. Bör ersättas med en dynamisk `/sitemap.xml`-route i Next.js som automatiskt inkluderar alla tool-, compare-, industry- och alternatives-sidor.

---

## 4. Design & UX — ärlig bedömning

### Bra
- Färgpalett (navy/blue) är professionell och passar niischen
- Tool cards har rätt informationshierarki (rating → pris → CTA)
- Hero-sektionen kommunicerar tydligt vad sajten är
- Breadcrumbs på tool-sidor (bra för SEO)
- Sticky header fungerar
- Sidebaren med annonsutrymme + "Get Listed"-box är rätt

### Förbättra
- **Emojis → Riktiga logoer** (den enskilt viktigaste design-förändringen)
- **Ad placeholders ser ut som placeholders** — behöver ersättas med Google AdSense eller riktiga annonser så fort möjligt
- **Alternatives-sidor saknar synlighet** — lägg till en "Alternatives" sektion på startsidan eller i navbaren
- **Inga "Last Updated"-datum** på tool-sidor — G2 och Capterra visar alltid när data uppdaterades; det bygger förtroende

---

## 5. Intäktspotential — realistisk prognos

### Monetiseringsordning (prioriterad)
1. **Affiliate-intäkter** — Snabbast. SalesRabbit = 15% kommission. Om 5 kunder/månad stänger avtal via vår länk à $39/user/5 users = $195 → vi får $29/konvertering. Målet: 10–20 konverteringar/månad = $300–$600/månad.
2. **Featured listings** — Vår advertise-sida nämner $299/mo. Realistisk target: 2–3 betalande vendors inom 6 månader = $600–$900/månad.
3. **Google AdSense** — Kräver trafik. B2B SaaS-nisch har högt CPM ($5–15). Med 5 000 månatliga besök = ~$300–600/månad i annonsintäkter.
4. **Direct sponsorships** — När vi har 10 000+ besökare kan vi sälja sponsrade postar/nyhetsbrev direkt till vendors.

### OpenAlternative-jämförelse
De gick från 0 → $6 000/månad på 12 månader med liknande modell. Vår nisch är smalare men köpintentionen är HÖGRE (B2B SaaS-köpare spenderar tusentals dollar, inte hundratals). Vi behöver inte miljoner besökare — vi behöver rätt besökare.

---

## 6. Prioriterad handlingsplan

### Sprint 1 — Teknisk SEO (prioritet 1)
- [ ] Implementera JSON-LD schema på tool-sidor (SoftwareApplication + AggregateRating)
- [ ] Lägg till alternatives-sidor i sitemap.xml
- [ ] Installera Plausible Analytics (open source, GDPR-safe, gratis på egen domän)
- [ ] Byt emojis → riktiga logoer (Clearbit API eller manuellt)
- [ ] Fixa "2,800+ Reviews"-kopian i hero

### Sprint 2 — Innehåll (prioritet 2)
- [ ] Skriv fullständiga recensioner för de 10 mest sökta verktygen (de utan review-data nu)
- [ ] Skapa 10 fler jämförelsesidor (spotio-vs-knockio, salesrabbit-vs-map-my-customers, osv.)
- [ ] Lägg till alternatives-sidor för de resterande 15 verktygen

### Sprint 3 — Monetisering (prioritet 3)
- [ ] Registrera dig i SalesRabbit affiliate-program (salesrabbit.com/partners/)
- [ ] Kontakta SPOTIO, Badger Maps, Map My Customers för affiliate/partnerskap
- [ ] Sätt upp Google AdSense och ersätt ad-placeholders med riktiga annonser
- [ ] Lägg till e-postregistrering i footer ("Field Sales Software Updates")

### Sprint 4 — Tillväxt (prioritet 4)
- [ ] Skapa "best X for Y"-sidor (solar canvassing, small team, free tools)
- [ ] Lägg till sökfunktion på startsidan
- [ ] Pitcha featured listing till 3 vendors direkt
- [ ] Lägg upp sajten på relevanta forum (r/salesforce, r/sales, indie hacker communities)

---

## 7. Sammanfattning

**Vad vi har är riktigt bra fundament.** Datastrukturen är professionell, sidorna laddas snabbt, innehållet är djupt för de 5 granskade verktygen, och SEO-titlarna är välformulerade. Det är mer än vad många nisch-directory-sajter börjar med.

**Det som saknas är inte dramatiskt** men kräver disciplin att genomföra: schema markup, riktiga logoer, affiliate-program, och fler recensioner. Ingen av dessa är tekniskt komplicerade — de är bara arbete.

**Realistisk 12-månaders prognos:** Med konsekvent exekvering på ovanstående plan och 2–3 uppdateringar per vecka, är $1 000–$3 000/månad i passiva intäkter ett rimligt mål inom ett år. Det är i linje med medianprojektet på Indie Hackers ($500–$1 000/månad) och vi har en starkare nisch-positionering än genomsnittet.

---

*Analys genomförd av FieldSalesTools Editorial Team, Mars 2026*
