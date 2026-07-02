"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar homepage
        </Link>

        <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-slate max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Algemene Voorwaarden
          </h1>
          <p className="text-slate-600 mb-8">
            <strong>Laatst bijgewerkt: 20/12/2025</strong>
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Toepasselijkheid
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              1.1 Deze algemene voorwaarden zijn van toepassing op alle
              aanbiedingen, overeenkomsten en diensten van SDE ("wij", "ons",
              "onze") en de opdrachtgever ("u", "uw", "klant").
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              1.2 Afwijkingen van deze voorwaarden zijn alleen geldig indien
              deze schriftelijk zijn overeengekomen.
            </p>
            <p className="text-slate-700 leading-relaxed">
              1.3 Door het accepteren van een offerte of het aangaan van een
              overeenkomst met ons, gaat u akkoord met deze algemene
              voorwaarden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Definities
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              2.1 <strong>SDE</strong>: de dienstverlener die digitale
              marketing- en ontwikkelingsdiensten aanbiedt.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              2.2 <strong>Klant</strong>: de natuurlijke of rechtspersoon die
              diensten van SDE afneemt.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              2.3 <strong>Diensten</strong>: alle diensten die SDE levert,
              waaronder maar niet beperkt tot website ontwikkeling, webdesign,
              Meta advertentiecampagnes, analytics en tracking.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              2.4 <strong>Project</strong>: een specifieke opdracht of dienst
              die door SDE wordt uitgevoerd.
            </p>
            <p className="text-slate-700 leading-relaxed">
              2.5 <strong>Materiaal</strong>: alle door de klant verstrekte
              tekst, afbeeldingen, logo&apos;s, merken en andere content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Aanbiedingen en offertes
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              3.1 Alle aanbiedingen en offertes zijn vrijblijvend, tenzij
              uitdrukkelijk anders vermeld.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              3.2 Offerteprijzen zijn geldig voor 30 dagen, tenzij anders
              vermeld.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              3.3 Wij behouden ons het recht voor om aanbiedingen en offertes te
              wijzigen of in te trekken voordat een overeenkomst tot stand
              komt.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              3.4 Offerteprijzen zijn exclusief BTW, tenzij anders vermeld.
            </p>
            <p className="text-slate-700 leading-relaxed">
              3.5 Wij behouden ons het recht voor om prijzen aan te passen bij
              wijzigingen in de opdracht of bij onvoorziene omstandigheden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Totstandkoming overeenkomst
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              4.1 Een overeenkomst komt tot stand door:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Schriftelijke acceptatie van een offerte door de klant</li>
              <li>Bevestiging van een opdracht door SDE</li>
              <li>Start van de uitvoering van de diensten</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              4.2 Wijzigingen of aanvullingen op de overeenkomst moeten
              schriftelijk worden overeengekomen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Uitvoering van de diensten
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              5.1 Wij zullen de diensten naar beste kunnen uitvoeren,
              overeenkomstig de in de overeenkomst vastgelegde specificaties.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              5.2 De klant is verplicht alle benodigde informatie, materialen en
              toegang tijdig en volledig te verstrekken.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              5.3 Vertraging in de uitvoering als gevolg van het niet tijdig
              verstrekken van informatie of materialen door de klant komt voor
              rekening van de klant.
            </p>
            <p className="text-slate-700 leading-relaxed">
              5.4 Wij behouden ons het recht voor om de uitvoering op te
              schorten indien de klant zijn verplichtingen niet nakomt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Levertermijnen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              6.1 Levertermijnen zijn indicatief en niet-bindend, tenzij
              uitdrukkelijk anders overeengekomen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              6.2 Overschrijding van levertermijnen geeft de klant geen recht op
              ontbinding of schadevergoeding, tenzij sprake is van opzet of
              grove schuld.
            </p>
            <p className="text-slate-700 leading-relaxed">
              6.3 Levertermijnen beginnen te lopen nadat alle benodigde
              informatie en materialen zijn ontvangen en eventuele voorschotten
              zijn betaald.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Prijzen en betaling
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              7.1 Alle prijzen zijn in euro&apos;s en exclusief BTW, tenzij
              anders vermeld.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              7.2 Betaling dient te geschieden binnen 14 dagen na factuurdatum,
              tenzij anders overeengekomen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              7.3 Bij projecten met een waarde boven €5.000 kan een voorschot
              van maximaal 50% worden gevraagd.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              7.4 Bij niet-tijdige betaling is de klant van rechtswege in
              verzuim en verschuldigd:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>De wettelijke rente over het openstaande bedrag</li>
              <li>Alle buitengerechtelijke incassokosten</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              7.5 Wij behouden ons het recht voor om de uitvoering op te
              schorten of te beëindigen bij niet-betaling.
            </p>
            <p className="text-slate-700 leading-relaxed">
              7.6 De klant heeft geen recht op verrekening of opschorting van
              betalingen, tenzij wij daarmee schriftelijk instemmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Intellectueel eigendom
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              8.1 Alle intellectuele eigendomsrechten op door ons ontwikkelde
              werken (waaronder websites, designs, code, strategieën) blijven
              bij SDE, totdat de klant alle betalingen volledig heeft voldaan.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              8.2 Na volledige betaling worden de intellectuele
              eigendomsrechten overgedragen aan de klant, met uitzondering van:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Algemene kennis, methodieken en technieken</li>
              <li>Open source software en libraries</li>
              <li>Templates en frameworks die wij gebruiken</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              8.3 De klant behoudt alle rechten op door hem verstrekte
              materialen (teksten, afbeeldingen, logo&apos;s).
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              8.4 Wij behouden ons het recht voor om ontwikkelde werken te
              gebruiken voor portfolio- en marketingdoeleinden, tenzij anders
              overeengekomen.
            </p>
            <p className="text-slate-700 leading-relaxed">
              8.5 De klant mag de door ons ontwikkelde werken niet zonder
              toestemming aanpassen, verkopen of doorgeven aan derden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              9. Gebruik van materiaal van derden
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              9.1 Wij kunnen gebruik maken van open source software, libraries
              en andere tools van derden.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              9.2 De klant is verantwoordelijk voor het verkrijgen van alle
              benodigde licenties en rechten voor door hem verstrekte
              materialen.
            </p>
            <p className="text-slate-700 leading-relaxed">
              9.3 Wij zijn niet aansprakelijk voor schending van intellectuele
              eigendomsrechten van derden door materiaal dat door de klant is
              verstrekt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              10. Geheimhouding
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              10.1 Wij verplichten ons tot geheimhouding van alle vertrouwelijke
              informatie die wij in het kader van de dienstverlening ontvangen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              10.2 Deze geheimhoudingsplicht geldt niet voor informatie die:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Al openbaar was</li>
              <li>Onafhankelijk door ons is ontwikkeld</li>
              <li>
                Wij verplicht zijn te openbaren op grond van de wet
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              11. Aansprakelijkheid
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              11.1 Onze aansprakelijkheid is beperkt tot het bedrag dat door
              onze verzekering wordt gedekt, met een maximum van de
              factuurwaarde van de betreffende opdracht.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              11.2 Wij zijn niet aansprakelijk voor:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>
                Indirecte schade, gevolgschade, gederfde winst of gemiste
                besparingen
              </li>
              <li>
                Schade als gevolg van het niet tijdig of niet verstrekken van
                informatie door de klant
              </li>
              <li>
                Schade als gevolg van wijzigingen door de klant of derden
              </li>
              <li>
                Schade als gevolg van technische problemen bij derden (hosting,
                platforms, etc.)
              </li>
              <li>
                Schade als gevolg van verouderde browsers of software
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              11.3 Wij zijn niet aansprakelijk voor schade aan gegevens, tenzij
              deze schade het gevolg is van opzet of grove schuld.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              11.4 De klant is verantwoordelijk voor het maken van back-ups van
              zijn gegevens.
            </p>
            <p className="text-slate-700 leading-relaxed">
              11.5 Wij zijn niet aansprakelijk voor het niet behalen van
              bepaalde resultaten, zoals verkeer, conversies of rankings, tenzij
              dit expliciet is gegarandeerd in de overeenkomst.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              12. Resultaten en garanties
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              12.1 Wij streven ernaar de beste resultaten te behalen, maar
              kunnen geen garanties geven over specifieke resultaten zoals:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Aantal websitebezoekers</li>
              <li>Conversiepercentages</li>
              <li>Advertentieprestaties (ROAS, CPC, etc.)</li>
              <li>Zoekmachine rankings</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              12.2 Resultaten zijn afhankelijk van vele factoren buiten onze
              controle, zoals marktomstandigheden, concurrentie en wijzigingen
              in algoritmes.
            </p>
            <p className="text-slate-700 leading-relaxed">
              12.3 Waar resultaten expliciet zijn gegarandeerd in een
              overeenkomst, gelden deze garanties alleen onder de daarin
              gestelde voorwaarden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              13. Wijzigingen en annulering
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              13.1 Wijzigingen in de opdracht moeten schriftelijk worden
              overeengekomen en kunnen leiden tot aanpassing van prijs en
              termijn.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              13.2 De klant kan de overeenkomst alleen opzeggen met
              schriftelijke opzegging met inachtneming van een opzegtermijn van
              minimaal 30 dagen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              13.3 Bij tussentijdse opzegging door de klant blijft de klant
              verplicht tot betaling van:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Reeds geleverde diensten</li>
              <li>Gemaakte kosten</li>
              <li>
                50% van de nog niet geleverde diensten, tenzij anders
                overeengekomen
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              13.4 Wij kunnen de overeenkomst opzeggen met onmiddellijke ingang
              indien:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>De klant zijn betalingsverplichtingen niet nakomt</li>
              <li>
                De klant zijn overige verplichtingen niet nakomt na
                schriftelijke aanmaning
              </li>
              <li>Er sprake is van faillissement of surseance van betaling</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              14. Klachten en geschillen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              14.1 Klachten moeten schriftelijk en gemotiveerd worden ingediend
              binnen 14 dagen na levering van de diensten.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              14.2 Wij zullen binnen 14 dagen na ontvangst van de klacht
              reageren.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              14.3 Indien wij de klacht gegrond achten, zullen wij passende
              maatregelen nemen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              14.4 Op alle overeenkomsten is Nederlands recht van toepassing.
            </p>
            <p className="text-slate-700 leading-relaxed">
              14.5 Geschillen zullen in eerste aanleg worden voorgelegd aan de
              bevoegde rechter in [PLAATS].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              15. Force majeure
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              15.1 Wij zijn niet aansprakelijk voor het niet nakomen van
              verplichtingen als gevolg van overmacht.
            </p>
            <p className="text-slate-700 leading-relaxed">
              15.2 Onder overmacht wordt verstaan: omstandigheden buiten onze
              wil die het nakomen van onze verplichtingen verhinderen, waaronder
              maar niet beperkt tot: natuurrampen, oorlog, stakingen, brand,
              computervirussen, storingen bij derden (hosting, platforms),
              wijzigingen in wet- en regelgeving.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              16. Overige bepalingen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              16.1 Indien een bepaling van deze voorwaarden nietig of
              vernietigbaar blijkt, blijven de overige bepalingen van kracht.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              16.2 Wij behouden ons het recht voor om deze algemene voorwaarden
              te wijzigen. Wijzigingen worden van kracht na publicatie op onze
              website.
            </p>
            <p className="text-slate-700 leading-relaxed">
              16.3 Deze voorwaarden vervangen alle eerdere voorwaarden en
              overeenkomsten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              17. Contact
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Voor vragen over deze algemene voorwaarden kunt u contact met ons
              opnemen:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-900 font-semibold mb-3">SDE</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>E-mail: Senne@sde-agency.com</li>
                <li>Plaats: Lommel, België</li>
                <li>Telefoon: +32 471 24 19 12</li>
              </ul>
            </div>
          </section>

          <div className="border-t border-slate-200 pt-6 mt-8">
            <p className="text-sm text-slate-600 italic">
              Deze algemene voorwaarden zijn opgesteld in overeenstemming met
              het Nederlands recht.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}