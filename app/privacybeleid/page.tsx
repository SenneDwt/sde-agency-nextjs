"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            Privacybeleid
          </h1>
          <p className="text-slate-600 mb-8">
            <strong>Laatst bijgewerkt: 20/12/2025</strong>
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Inleiding
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SDE ("wij", "ons", "onze") respecteert uw privacy en zet zich in
              voor de bescherming van uw persoonlijke gegevens. Dit
              privacybeleid legt uit hoe wij uw persoonlijke gegevens
              verzamelen, gebruiken, delen en beschermen wanneer u onze website
              bezoekt of onze diensten gebruikt.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Door gebruik te maken van onze website en diensten, gaat u akkoord
              met de verzameling en het gebruik van informatie in overeenstemming
              met dit beleid.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Gegevensverantwoordelijke
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              SDE is de verantwoordelijke voor de verwerking van uw persoonlijke
              gegevens. Voor vragen over dit privacybeleid kunt u contact met
              ons opnemen via:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>E-mail: [E-MAILADRES]</li>
              <li>Adres: [ADRES]</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Welke gegevens verzamelen wij?
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              3.1 Gegevens die u aan ons verstrekt
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Contactgegevens</strong>: naam, e-mailadres,
                telefoonnummer, bedrijfsnaam
              </li>
              <li>
                <strong>Communicatiegegevens</strong>: berichten die u naar ons
                stuurt via contactformulieren, e-mail of andere
                communicatiekanalen
              </li>
              <li>
                <strong>Projectinformatie</strong>: informatie over uw project,
                doelen en vereisten wanneer u onze diensten aanvraagt
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              3.2 Gegevens die automatisch worden verzameld
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Technische gegevens</strong>: IP-adres, browsertype,
                besturingssysteem, apparaatinformatie
              </li>
              <li>
                <strong>Gebruiksgegevens</strong>: pagina&apos;s die u bezoekt,
                tijdstip en duur van bezoek, klikgedrag, verwijzingsbronnen
              </li>
              <li>
                <strong>Cookies en vergelijkbare technologieën</strong>: zie
                ons{" "}
                <Link
                  href="/Cookiebeleid"
                  className="text-orange-500 hover:underline"
                >
                  Cookiebeleid
                </Link>{" "}
                voor meer informatie
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              3.3 Gegevens van derden
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Social media</strong>: wanneer u via sociale media met
                ons communiceert
              </li>
              <li>
                <strong>Analytics tools</strong>: geanonimiseerde gegevens via
                Google Analytics en andere analytics tools
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Waarom verzamelen wij uw gegevens?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Wij gebruiken uw persoonlijke gegevens voor de volgende
              doeleinden:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              4.1 Uitvoering van onze diensten
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                Het verwerken van uw aanvragen en het leveren van onze diensten
              </li>
              <li>Communicatie met u over uw projecten en diensten</li>
              <li>Het beheren van onze klantrelaties</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              4.2 Websiteverbetering
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                Het analyseren van websitegebruik om onze website te verbeteren
              </li>
              <li>
                Het optimaliseren van gebruikerservaring en functionaliteit
              </li>
              <li>Het oplossen van technische problemen</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              4.3 Marketing en communicatie
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                Het versturen van marketingcommunicatie (met uw toestemming)
              </li>
              <li>
                Het informeren over nieuwe diensten, producten of aanbiedingen
              </li>
              <li>Het uitvoeren van marktonderzoek en analyses</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              4.4 Wettelijke verplichtingen
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Het voldoen aan wettelijke verplichtingen</li>
              <li>Het beschermen van onze rechten en belangen</li>
              <li>Het voorkomen van fraude en misbruik</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Juridische basis voor verwerking
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Wij verwerken uw persoonlijke gegevens op basis van:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Uw toestemming</strong>: wanneer u expliciet toestemming
                heeft gegeven
              </li>
              <li>
                <strong>Uitvoering van overeenkomst</strong>: voor het leveren
                van aangevraagde diensten
              </li>
              <li>
                <strong>Gerechtvaardigd belang</strong>: voor
                websiteverbetering, marketing en beveiliging
              </li>
              <li>
                <strong>Wettelijke verplichting</strong>: wanneer wij verplicht
                zijn gegevens te verwerken
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Met wie delen wij uw gegevens?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Wij delen uw gegevens alleen met:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              6.1 Dienstverleners
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Hostingproviders</strong>: voor het hosten van onze
                website
              </li>
              <li>
                <strong>Analytics tools</strong>: zoals Google Analytics
                (geanonimiseerde gegevens)
              </li>
              <li>
                <strong>E-mailserviceproviders</strong>: voor het versturen van
                e-mails
              </li>
              <li>
                <strong>Projectmanagementtools</strong>: voor het beheren van
                projecten
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              6.2 Advertentieplatforms
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Meta Platforms</strong> (Facebook, Instagram): voor het
                uitvoeren van advertentiecampagnes en tracking
              </li>
              <li>
                <strong>Google</strong>: voor advertenties en analytics
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
              6.3 Wettelijke verplichtingen
            </h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Wanneer dit wettelijk verplicht is</li>
              <li>Om onze rechten te beschermen</li>
              <li>In geval van gerechtelijke procedures</li>
            </ul>

            <p className="text-slate-700 leading-relaxed font-semibold">
              Wij verkopen uw gegevens nooit aan derden voor commerciële
              doeleinden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Internationale doorgifte
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Sommige van onze dienstverleners kunnen zich buiten de Europese
              Economische Ruimte (EER) bevinden. In dergelijke gevallen zorgen
              wij ervoor dat passende waarborgen worden getroffen, zoals:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                Standaard contractbepalingen goedgekeurd door de Europese
                Commissie
              </li>
              <li>Adequaatheidsbesluiten</li>
              <li>Andere passende maatregelen conform de AVG</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Bewaartermijnen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk
              voor de doeleinden waarvoor zij zijn verzameld:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Contactgegevens</strong>: zolang nodig voor de
                dienstverlening en daarna maximaal 7 jaar voor administratieve
                doeleinden
              </li>
              <li>
                <strong>Marketinggegevens</strong>: totdat u zich afmeldt of wij
                de gegevens niet meer nodig hebben
              </li>
              <li>
                <strong>Website analytics</strong>: maximaal 26 maanden (Google
                Analytics standaard)
              </li>
              <li>
                <strong>Wettelijke bewaarplicht</strong>: conform wettelijke
                verplichtingen (bijv. fiscale bewaarplicht van 7 jaar)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              9. Uw rechten
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              U heeft de volgende rechten met betrekking tot uw persoonlijke
              gegevens:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.1 Recht op inzage
                </h3>
                <p className="text-slate-700">
                  U heeft het recht om te weten welke gegevens wij over u
                  verwerken.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.2 Recht op rectificatie
                </h3>
                <p className="text-slate-700">
                  U kunt onjuiste of onvolledige gegevens laten corrigeren.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.3 Recht op gegevenswissing ("recht om vergeten te worden")
                </h3>
                <p className="text-slate-700">
                  U kunt verzoeken om verwijdering van uw gegevens, tenzij wij
                  deze moeten bewaren voor wettelijke doeleinden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.4 Recht op beperking van verwerking
                </h3>
                <p className="text-slate-700">
                  U kunt verzoeken om beperking van de verwerking van uw
                  gegevens.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.5 Recht op dataportabiliteit
                </h3>
                <p className="text-slate-700">
                  U kunt uw gegevens in een gestructureerd formaat ontvangen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.6 Recht van bezwaar
                </h3>
                <p className="text-slate-700">
                  U kunt bezwaar maken tegen de verwerking van uw gegevens voor
                  direct marketing of op grond van gerechtvaardigd belang.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.7 Intrekken van toestemming
                </h3>
                <p className="text-slate-700">
                  Wanneer verwerking op basis van toestemming plaatsvindt, kunt
                  u deze te allen tijde intrekken.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  9.8 Klacht indienen
                </h3>
                <p className="text-slate-700 mb-4">
                  U heeft het recht om een klacht in te dienen bij de Autoriteit
                  Persoonsgegevens (AP) als u van mening bent dat wij uw
                  gegevens niet correct verwerken.
                </p>
                <p className="text-slate-700 font-semibold mb-2">
                  Autoriteit Persoonsgegevens
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Website: www.autoriteitpersoonsgegevens.nl</li>
                  <li>Telefoon: 088 - 1805 250</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              10. Beveiliging
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Wij nemen passende technische en organisatorische maatregelen om
              uw persoonlijke gegevens te beschermen tegen ongeautoriseerde
              toegang, verlies, vernietiging of wijziging:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>SSL/TLS encryptie</strong>: voor veilige
                gegevensoverdracht
              </li>
              <li>
                <strong>Toegangsbeperkingen</strong>: alleen geautoriseerd
                personeel heeft toegang tot gegevens
              </li>
              <li>
                <strong>Regelmatige beveiligingsupdates</strong>: van onze
                systemen en software
              </li>
              <li>
                <strong>Back-ups</strong>: regelmatige back-ups van belangrijke
                gegevens
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              11. Cookies en tracking
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Onze website gebruikt cookies en vergelijkbare technologieën. Voor
              gedetailleerde informatie verwijzen wij u naar ons{" "}
              <Link
                href="/Cookiebeleid"
                className="text-orange-500 hover:underline"
              >
                Cookiebeleid
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              12. Links naar andere websites
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Onze website kan links bevatten naar externe websites. Wij zijn
              niet verantwoordelijk voor het privacybeleid of de inhoud van deze
              websites. Wij raden u aan het privacybeleid van deze websites te
              lezen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              13. Wijzigingen in dit privacybeleid
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken.
              Wijzigingen worden op deze pagina gepubliceerd met een bijgewerkte
              &quot;Laatst bijgewerkt&quot; datum. Wij raden u aan deze pagina
              regelmatig te raadplegen.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Bij ingrijpende wijzigingen zullen wij u hierover informeren via
              e-mail of een opvallende melding op onze website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              14. Contact
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Voor vragen, verzoeken of klachten over dit privacybeleid of de
              verwerking van uw gegevens, kunt u contact met ons opnemen:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-900 font-semibold mb-3">SDE</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>E-mail: Senne@sde-agency.com</li>
                <li>PLaats: Lommel, België</li>
                <li>Telefoon: +32 471 24 19 12</li>
              </ul>
            </div>
          </section>

          <div className="border-t border-slate-200 pt-6 mt-8">
            <p className="text-sm text-slate-600 italic">
              Dit privacybeleid is opgesteld in overeenstemming met de Algemene
              Verordening Gegevensbescherming (AVG) en de Nederlandse
              privacywetgeving.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}