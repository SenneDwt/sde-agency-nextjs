"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
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
            Cookiebeleid
          </h1>
          <p className="text-slate-600 mb-8">
            <strong>Laatst bijgewerkt: 20/12/2025</strong>
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Inleiding
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SDE (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;) gebruikt
              cookies en vergelijkbare technologieën op onze website. Dit
              cookiebeleid legt uit wat cookies zijn, welke cookies wij gebruiken
              en hoe u deze kunt beheren.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Door gebruik te maken van onze website gaat u akkoord met het
              gebruik van cookies in overeenstemming met dit beleid, tenzij u
              deze heeft uitgeschakeld in uw browserinstellingen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Wat zijn cookies?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Cookies zijn kleine tekstbestanden die op uw computer, tablet of
              smartphone worden opgeslagen wanneer u een website bezoekt. Cookies
              bevatten informatie die wordt gebruikt om de website beter te laten
              functioneren en om informatie over uw bezoek te verzamelen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Cookies kunnen worden ingedeeld in verschillende categorieën:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Eerste partij cookies</strong>: cookies die door onze
                website worden geplaatst
              </li>
              <li>
                <strong>Derde partij cookies</strong>: cookies die door andere
                partijen worden geplaatst (bijv. Google, Meta)
              </li>
              <li>
                <strong>Sessie cookies</strong>: tijdelijke cookies die worden
                verwijderd wanneer u uw browser sluit
              </li>
              <li>
                <strong>Permanente cookies</strong>: cookies die op uw apparaat
                blijven staan voor een bepaalde periode
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Welke cookies gebruiken wij?
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              3.1 Noodzakelijke cookies
            </h3>
            <p className="text-slate-700 leading-relaxed mb-2">
              Deze cookies zijn essentieel voor het functioneren van de website
              en kunnen niet worden uitgeschakeld.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Doel</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Het onthouden van uw cookievoorkeuren</li>
              <li>Het waarborgen van de beveiliging van de website</li>
              <li>Het mogelijk maken van basis functionaliteiten</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Voorbeelden</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Cookie consent management</li>
              <li>Sessiebeheer</li>
              <li>Beveiligingscookies</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              <strong>Bewaartermijn</strong>: Sessie of maximaal 1 jaar
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              3.2 Functionele cookies
            </h3>
            <p className="text-slate-700 leading-relaxed mb-2">
              Deze cookies verbeteren de functionaliteit en gebruikerservaring
              van de website.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Doel</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Het onthouden van uw voorkeuren (taal, regio)</li>
              <li>Het verbeteren van de gebruikerservaring</li>
              <li>Het mogelijk maken van extra functionaliteiten</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Voorbeelden</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Taalvoorkeuren</li>
              <li>Formuliergegevens (tijdelijk)</li>
              <li>Video player instellingen</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              <strong>Bewaartermijn</strong>: Maximaal 1 jaar
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              3.3 Analytische cookies
            </h3>
            <p className="text-slate-700 leading-relaxed mb-2">
              Deze cookies helpen ons te begrijpen hoe bezoekers onze website
              gebruiken.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Doel</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Het analyseren van websitebezoek</li>
              <li>Het meten van de effectiviteit van onze content</li>
              <li>
                Het verbeteren van de website op basis van gebruikersgedrag
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Gebruikte tools</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-2">
              <li>
                <strong>Google Analytics</strong>: verzamelt geanonimiseerde
                gegevens over websitebezoek
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>IP-adressen worden geanonimiseerd</li>
                  <li>
                    Gegevens worden gedeeld met Google volgens hun
                    privacybeleid
                  </li>
                  <li>
                    U kunt zich afmelden via{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      Google Analytics Opt-out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Bewaartermijn</strong>: Maximaal 26 maanden (Google
              Analytics standaard)
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Gegevens die worden verzameld</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Aantal bezoekers</li>
              <li>Pagina&apos;s die worden bezocht</li>
              <li>Verblijfsduur</li>
              <li>Verwijzingsbronnen</li>
              <li>Apparaat- en browserinformatie (geanonimiseerd)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              3.4 Marketing- en tracking cookies
            </h3>
            <p className="text-slate-700 leading-relaxed mb-2">
              Deze cookies worden gebruikt om relevante advertenties te tonen en
              de effectiviteit van advertentiecampagnes te meten.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Doel</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Het tonen van gepersonaliseerde advertenties</li>
              <li>Het meten van de effectiviteit van advertentiecampagnes</li>
              <li>Het volgen van gebruikersgedrag voor remarketing</li>
              <li>
                Het voorkomen van het tonen van dezelfde advertentie meerdere
                keren
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Gebruikte tools</strong>:
            </p>
            <div className="space-y-3 mb-2">
              <div>
                <p className="text-slate-700 font-semibold mb-1">
                  Meta Pixel (Facebook/Instagram):
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>
                    Wordt gebruikt voor het meten van conversies van Meta
                    advertentiecampagnes
                  </li>
                  <li>Maakt remarketing mogelijk</li>
                  <li>Volgt gebruikersgedrag op onze website</li>
                  <li>
                    Meer informatie:{" "}
                    <a
                      href="https://www.facebook.com/privacy/explanation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      Meta Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-slate-700 font-semibold mb-1">
                  Google Ads:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>
                    Wordt gebruikt voor het meten van conversies van Google
                    advertentiecampagnes
                  </li>
                  <li>Maakt remarketing mogelijk</li>
                  <li>
                    Meer informatie:{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      Google Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-slate-700 font-semibold mb-1">
                  LinkedIn Insight Tag (indien gebruikt):
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>
                    Wordt gebruikt voor het meten van conversies van LinkedIn
                    advertentiecampagnes
                  </li>
                  <li>
                    Meer informatie:{" "}
                    <a
                      href="https://www.linkedin.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      LinkedIn Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Bewaartermijn</strong>: Maximaal 2 jaar (afhankelijk van
              de tool)
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Gegevens die worden verzameld</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Paginaweergaven</li>
              <li>Conversies (formulierinzendingen, downloads, etc.)</li>
              <li>Interacties met de website</li>
              <li>Demografische gegevens (indien beschikbaar)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Social media cookies
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              Onze website kan knoppen bevatten voor sociale media (LinkedIn,
              Instagram, Twitter). Deze partijen kunnen cookies plaatsen wanneer
              u op deze knoppen klikt.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Doel</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
              <li>Het mogelijk maken van delen op sociale media</li>
              <li>Het volgen van gebruikersgedrag voor analytics</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Meer informatie</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>
                <a
                  href="https://www.linkedin.com/legal/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  LinkedIn Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="https://help.instagram.com/519522125107875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Instagram Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Twitter Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Cookies van derden
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Sommige cookies worden geplaatst door derde partijen. Wij hebben
              geen controle over deze cookies. Voor meer informatie verwijzen
              wij u naar het privacybeleid van deze partijen:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Google</strong>:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a
                  href="https://policies.google.com/technologies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <strong>Meta (Facebook/Instagram)</strong>:{" "}
                <a
                  href="https://www.facebook.com/privacy/explanation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a
                  href="https://www.facebook.com/policies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Cookiebeheer
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              6.1 Cookie-instellingen op onze website
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Bij uw eerste bezoek aan onze website wordt u gevraagd om
              toestemming voor het gebruik van cookies. U kunt uw voorkeuren op
              elk moment wijzigen via de cookie-instellingen op onze website.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              6.2 Browserinstellingen
            </h3>
            <p className="text-slate-700 leading-relaxed mb-2">
              U kunt cookies ook beheren via de instellingen van uw browser. De
              meeste browsers staan standaard toe dat cookies worden geplaatst,
              maar u kunt dit aanpassen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Informatie per browser</strong>:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-2">
              <li>
                <strong>Chrome</strong>:{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Instellingen &gt; Privacy en beveiliging &gt; Cookies
                </a>
              </li>
              <li>
                <strong>Firefox</strong>:{" "}
                <a
                  href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Opties &gt; Privacy &amp; Beveiliging &gt; Cookies en
                  websitegegevens
                </a>
              </li>
              <li>
                <strong>Safari</strong>:{" "}
                <a
                  href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Voorkeuren &gt; Privacy &gt; Cookies en websitegegevens
                </a>
              </li>
              <li>
                <strong>Edge</strong>:{" "}
                <a
                  href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Instellingen &gt; Privacy, zoeken en services &gt; Cookies
                </a>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed font-semibold">
              Let op: Het uitschakelen van cookies kan de functionaliteit van
              onze website beperken en sommige functies mogelijk niet
              beschikbaar maken.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              6.3 Opt-out links
            </h3>
            <p className="text-slate-700 leading-relaxed mb-2">
              U kunt zich specifiek afmelden voor bepaalde tracking cookies:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Google Analytics</strong>:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Opt-out Browser Add-on
                </a>
              </li>
              <li>
                <strong>Google Ads</strong>:{" "}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Advertentie-instellingen
                </a>
              </li>
              <li>
                <strong>Meta (Facebook)</strong>:{" "}
                <a
                  href="https://www.facebook.com/settings?tab=ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Advertentie-instellingen
                </a>
              </li>
              <li>
                <strong>LinkedIn</strong>:{" "}
                <a
                  href="https://www.linkedin.com/psettings/advertising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Advertentie-instellingen
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              6.4 Do Not Track
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Sommige browsers hebben een &quot;Do Not Track&quot; functie. Wij
              respecteren deze instelling, maar sommige derde partijen (zoals
              Google en Meta) kunnen deze instelling mogelijk niet respecteren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Gevolgen van het uitschakelen van cookies
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              Het uitschakelen van bepaalde cookies kan gevolgen hebben voor uw
              gebruikerservaring:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Noodzakelijke cookies</strong>: Website kan niet goed
                functioneren
              </li>
              <li>
                <strong>Functionele cookies</strong>: Sommige voorkeuren worden
                niet onthouden
              </li>
              <li>
                <strong>Analytische cookies</strong>: Wij kunnen uw bezoek niet
                analyseren (geen invloed op functionaliteit)
              </li>
              <li>
                <strong>Marketing cookies</strong>: U ziet mogelijk minder
                relevante advertenties
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Beveiliging
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Wij nemen passende maatregelen om de gegevens die via cookies
              worden verzameld te beschermen. Echter, wij kunnen geen volledige
              garantie geven voor de beveiliging van gegevens die door derde
              partijen worden verzameld via hun cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              9. Wijzigingen in dit cookiebeleid
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken om
              wijzigingen in onze cookies of om andere operationele, juridische
              of regelgevingsredenen weer te geven. Wijzigingen worden op deze
              pagina gepubliceerd met een bijgewerkte &quot;Laatst
              bijgewerkt&quot; datum.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Bij ingrijpende wijzigingen zullen wij u hierover informeren via
              een opvallende melding op onze website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              10. Meer informatie
            </h2>
            <p className="text-slate-700 leading-relaxed mb-2">
              Voor meer informatie over cookies kunt u de volgende websites
              raadplegen:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <a
                  href="https://www.allesovercookies.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Alles over cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.autoriteitpersoonsgegevens.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Autoriteit Persoonsgegevens
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              11. Contact
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Voor vragen over ons gebruik van cookies kunt u contact met ons
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
              Dit cookiebeleid is opgesteld in overeenstemming met de Algemene
              Verordening Gegevensbescherming (AVG) en de Telecommunicatiewet.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}