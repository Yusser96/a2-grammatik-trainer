// telc Deutsch A2 style "Sprachbausteine".
// Teil 1: a personal or semi-formal letter/e-mail with 10 gaps, three options each (a/b/c).
// Teil 2: a short dialogue with 10 gaps filled from a bank of 15 words (each used at most once).
// Gaps are written as [1] … [10] inside the text. `topic` links each gap to a grammar topic.
window.EXAMS = {
  teil1: [
    {
      title: "Meine neue Wohnung",
      text: "Liebe Sara,\n\nendlich habe ich eine neue Wohnung [1]! Sie liegt [2] dritten Stock und hat zwei Zimmer, eine Küche und einen [3] Balkon. Das Wohnzimmer ist hell und hat ein großes Fenster, und vom Balkon kann man den Park sehen. Die Küche ist leider ziemlich klein, aber das ist nicht so wichtig. Die Wohnung ist viel [4] als meine alte, aber die Miete ist fast gleich. Am Samstag bin ich [5] meinem Bruder umgezogen. Wir [6] alle Kisten die Treppe hinauftragen, [7] der Aufzug kaputt war. Jetzt bin ich sehr müde, [8] bin ich glücklich. Die Nachbarn sind nett, und der Supermarkt ist nur fünf Minuten entfernt. Ich weiß noch nicht, [9] ich im Juli eine kleine Party machen kann. Aber du musst unbedingt bald kommen und [10] die Wohnung ansehen!\n\nLiebe Grüße\nLena",
      gaps: [
        { options: ["gefunden", "finden", "gefindet"], answer: 0, topic: "02", explain: "Perfekt: habe … gefunden. finden is irregular, so the participle is gefunden (not gefindet)." },
        { options: ["im", "ins", "am"], answer: 0, topic: "06", explain: "liegen = location (wo?) → in + Dativ: im dritten Stock. ins would be direction (wohin?)." },
        { options: ["kleinen", "kleiner", "kleine"], answer: 0, topic: "14", explain: "einen Balkon is masculine accusative; after einen the adjective takes -en: einen kleinen Balkon." },
        { options: ["größer", "größte", "groß"], answer: 0, topic: "12", explain: "Comparison with als needs the comparative: größer als (bigger than)." },
        { options: ["mit", "bei", "von"], answer: 0, topic: "07", explain: "mit + Dativ = together with: mit meinem Bruder." },
        { options: ["mussten", "musste", "müssen"], answer: 0, topic: "03", explain: "The story is in the past (der Aufzug kaputt war), subject wir → Präteritum mussten." },
        { options: ["weil", "denn", "deshalb"], answer: 0, topic: "08", explain: "The verb stands at the end (kaputt war), so it is a weil-clause. After denn the verb would stay in position 2." },
        { options: ["trotzdem", "deshalb", "obwohl"], answer: 0, topic: "11", explain: "Tired but happy = contrast → trotzdem; the verb follows directly (trotzdem bin ich). obwohl would send the verb to the end." },
        { options: ["ob", "dass", "wenn"], answer: 0, topic: "10", explain: "Ich weiß noch nicht, ob … = I don’t know yet whether … (indirect yes/no question)." },
        { options: ["dir", "dich", "du"], answer: 0, topic: "15", explain: "sich (Dativ) etwas ansehen: the thing you look at (die Wohnung) is the accusative object, so the reflexive pronoun is dative: dir." }
      ]
    },
    {
      title: "Antwort auf eine Einladung",
      text: "Hallo Tim,\n\nvielen Dank für [1] Einladung zu deinem Geburtstag! Ich komme sehr gern. Leider kann ich erst um acht Uhr da sein, [2] ich bis sieben arbeiten muss. Ich hoffe, das ist kein Problem. Soll ich etwas [3]? Ich könnte einen Salat machen. Was wünschst du dir eigentlich? Ich habe noch keine Idee für ein Geschenk. Kommt Julia auch? Ich habe [4] seit dem Sommer nicht mehr gesehen. Kannst du mir sagen, [5] ich am besten zu dir komme? Mit [6] Bus oder mit der U-Bahn? Ich habe kein Auto, [7] muss ich die Verbindung vorher suchen. [8] die Party lange dauert, schlafe ich vielleicht bei meiner Schwester. Sie wohnt ganz in [9] Nähe. Ich freue mich schon sehr [10] Samstag!\n\nBis dann\nNadia",
      gaps: [
        { options: ["deine", "dein", "deinen"], answer: 0, topic: "18", explain: "die Einladung is feminine; after für (accusative) the possessive takes -e: deine Einladung." },
        { options: ["weil", "dass", "deshalb"], answer: 0, topic: "08", explain: "A reason with the verb at the end (arbeiten muss) → weil." },
        { options: ["mitbringen", "bringe mit", "mitgebracht"], answer: 0, topic: "01", explain: "Modal verb soll in position 2, the infinitive goes to the end in one piece: Soll ich etwas mitbringen?" },
        { options: ["sie", "ihr", "ihn"], answer: 0, topic: "05", explain: "Julia is the accusative object of sehen → sie (not ihr = dative, not ihn = him)." },
        { options: ["wie", "ob", "dass"], answer: 0, topic: "10", explain: "Indirect question about the way (how?) → wie, verb at the end: wie ich … komme." },
        { options: ["dem", "den", "der"], answer: 0, topic: "07", explain: "mit always takes the dative: mit dem Bus (der Bus → dem)." },
        { options: ["deshalb", "weil", "trotzdem"], answer: 0, topic: "11", explain: "No car → so I must look up the connection: deshalb, with inversion (deshalb muss ich)." },
        { options: ["Wenn", "Obwohl", "Als"], answer: 0, topic: "09", explain: "A condition (if the party lasts long) → wenn. Als is only for one event in the past." },
        { options: ["der", "die", "dem"], answer: 0, topic: "06", explain: "in der Nähe = location (wo?) → in + Dativ; die Nähe is feminine → der." },
        { options: ["auf", "über", "an"], answer: 0, topic: "16", explain: "sich freuen auf = to look forward to something in the future: auf Samstag." }
      ]
    },
    {
      title: "Nachricht an die Vermieterin",
      text: "Sehr geehrte Frau Krüger,\n\nich wohne seit [1] Monat in der Wohnung in der Gartenstraße 12 und bin sehr zufrieden. Leider gibt es ein Problem: Die Heizung im Schlafzimmer funktioniert nicht. Ich habe [2] schon mehrmals aus- und wieder eingeschaltet, aber das Zimmer bleibt kalt. [3] Sie bitte einen Handwerker schicken? Am besten passt es mir am Vormittag, [4] ich arbeite nachmittags. Außerdem habe ich eine Frage: [5] ich den Keller auch benutzen? Ich habe viele Kisten und zu wenig Platz in der Wohnung. Der Nachbar, [6] neben mir wohnt, hat mir gesagt, dass jeder Mieter einen [7] Kellerraum hat. Wenn das stimmt, [8] ich mich sehr freuen. Ich hoffe, es ist in Ordnung, dass ich Ihnen eine E-Mail [9]. Sie können [10] auch gern anrufen.\n\nMit freundlichen Grüßen\nAmir Nazari",
      gaps: [
        { options: ["einem", "einen", "ein"], answer: 0, topic: "07", explain: "seit always takes the dative: seit einem Monat (der Monat → einem)." },
        { options: ["sie", "es", "ihn"], answer: 0, topic: "05", explain: "die Heizung is feminine and the accusative object of einschalten → sie." },
        { options: ["Könnten", "Könnte", "Konntet"], answer: 0, topic: "17", explain: "Polite request to Sie → Konjunktiv II in the Sie-form: Könnten Sie bitte …?" },
        { options: ["denn", "weil", "deshalb"], answer: 0, topic: "08", explain: "The verb stays in position 2 (ich arbeite nachmittags), so the reason is given with denn, not weil." },
        { options: ["Darf", "Muss", "Soll"], answer: 0, topic: "04", explain: "Asking for permission (am I allowed to?) → dürfen: Darf ich …?" },
        { options: ["der", "den", "dem"], answer: 0, topic: "19", explain: "Relative clause: der Nachbar is masculine and the subject of wohnt → der." },
        { options: ["eigenen", "eigener", "eigene"], answer: 0, topic: "14", explain: "einen Kellerraum is masculine accusative → the adjective ends in -en: einen eigenen Kellerraum." },
        { options: ["würde", "werde", "wurde"], answer: 0, topic: "17", explain: "A wish/hypothetical: ich würde mich freuen (Konjunktiv II with würde + infinitive)." },
        { options: ["schreibe", "schreiben", "geschrieben"], answer: 0, topic: "08", explain: "In a dass-clause the conjugated verb goes to the end; subject ich → schreibe." },
        { options: ["mich", "mir", "ich"], answer: 0, topic: "05", explain: "anrufen takes an accusative object: Sie können mich anrufen (not mir)." }
      ]
    }
  ],
  teil2: [
    {
      title: "Beim Arzt",
      text: "Sprechstundenhilfe: Guten Morgen, Frau Weber. Haben Sie einen Termin?\nFrau Weber: Nein, leider nicht. Aber ich fühle [1] seit gestern sehr schlecht.\nSprechstundenhilfe: Dann setzen Sie sich bitte kurz ins Wartezimmer. Der Arzt hat gleich Zeit.\nDr. Lang: Guten Tag, Frau Weber. Was fehlt Ihnen denn?\nFrau Weber: Ich habe [2] drei Tagen starke Kopfschmerzen und Fieber. Gestern [3] ich gar nicht arbeiten.\nDr. Lang: Haben Sie schon etwas gegen die Schmerzen [4]?\nFrau Weber: Ja, zwei Tabletten, aber sie haben nicht geholfen.\nDr. Lang: Das ist eine Grippe. Sie [5] im Bett bleiben und viel trinken. Ich schreibe Sie bis Freitag krank.\nFrau Weber: Ist es möglich, das Rezept heute noch [6] bekommen?\nDr. Lang: Natürlich. Die Medikamente [7] in jeder Apotheke verkauft. Sie müssen [8] dreimal am Tag nehmen.\nFrau Weber: Muss ich noch einmal kommen?\nDr. Lang: Nur, [9] es nächste Woche nicht besser ist. Ist [10] zu Hause, der Ihnen helfen kann?\nFrau Weber: Ja, mein Mann. Vielen Dank, Herr Doktor!",
      bank: ["mich", "seit", "konnte", "genommen", "sollen", "zu", "werden", "sie", "wenn", "jemand", "mir", "vor", "soll", "wird", "ob"],
      answers: ["mich", "seit", "konnte", "genommen", "sollen", "zu", "werden", "sie", "wenn", "jemand"],
      topics: ["15", "07", "03", "02", "04", "20", "23", "05", "09", "22"],
      explain: [
        "sich fühlen is reflexive with the accusative: ich fühle mich (not mir).",
        "seit + Dativ for something that started in the past and still continues: seit drei Tagen.",
        "Past of können, subject ich → Präteritum konnte (gestern = yesterday).",
        "Perfekt: Haben Sie … genommen? nehmen is irregular → genommen.",
        "Advice from the doctor to Sie → sollen (Sie sollen …); soll would be the er/sie form.",
        "Infinitive with zu after Ist es möglich, …: das Rezept zu bekommen.",
        "Passive present: werden + participle; die Medikamente is plural → werden … verkauft.",
        "die Medikamente (plural) as accusative object → the pronoun sie: Sie müssen sie nehmen.",
        "A condition (only if it is not better) → wenn. ob only introduces indirect yes/no questions.",
        "jemand = somebody; Ist jemand zu Hause, der …? (someone who can help)."
      ]
    },
    {
      title: "Am Fahrkartenschalter",
      text: "Reisende: Guten Tag. Ich möchte eine Fahrkarte nach München, bitte.\nVerkäufer: Gern. Wann möchten Sie [1]?\nReisende: Morgen früh. Gibt es einen Zug, [2] vor neun Uhr ankommt?\nVerkäufer: Ja, der ICE um 6:15 Uhr. Er ist [3] als der Regionalzug, aber auch teurer.\nReisende: Wie viel kostet die Fahrt mit dem ICE?\nVerkäufer: Ohne Rabatt 79 Euro. Haben Sie eine BahnCard?\nReisende: Ja, hier. Ich weiß aber nicht, [4] sie noch gültig ist.\nVerkäufer: Moment … Ja, bis Dezember. Dann kostet die Fahrt 59 Euro. Möchten Sie einen Sitzplatz reservieren?\nReisende: Ja, bitte. Am liebsten [5] Fenster.\nVerkäufer: Kein Problem. Wagen 7, Platz 42.\nReisende: Von [6] Gleis fährt der Zug ab?\nVerkäufer: Von Gleis 3. Aber achten Sie morgen bitte [7] die Anzeige am Bahnhof.\nReisende: Mache ich. Kann ich [8] Karte bezahlen?\nVerkäufer: Natürlich. Hier ist Ihre Fahrkarte. Ich habe [9] auch die Reservierung ausgedruckt.\nReisende: Vielen Dank! Noch eine Frage: Darf ich meinen [10] Hund mitnehmen?\nVerkäufer: Ja, kleine Hunde fahren kostenlos. Gute Reise!",
      bank: ["fahren", "der", "schneller", "ob", "am", "welchem", "auf", "mit", "Ihnen", "kleinen", "fährt", "den", "dass", "welches", "kleiner"],
      answers: ["fahren", "der", "schneller", "ob", "am", "welchem", "auf", "mit", "Ihnen", "kleinen"],
      topics: ["01", "19", "12", "10", "06", "18", "16", "07", "05", "14"],
      explain: [
        "Modal verb möchten in position 2, the infinitive at the end of the sentence: Wann möchten Sie fahren?",
        "Relative clause: der Zug is masculine and the subject of ankommt → der (den would be accusative).",
        "Comparison with als needs the comparative: schneller als.",
        "Indirect yes/no question (whether it is still valid) → ob, verb at the end.",
        "am Fenster = an dem Fenster: location (wo?) → an + Dativ.",
        "von + Dativ, das Gleis is neuter → welchem Gleis (welches would be nominative/accusative).",
        "achten auf + Akkusativ = to pay attention to: achten Sie auf die Anzeige.",
        "mit + Dativ for the means of payment: mit Karte bezahlen.",
        "ausdrucken + dative person: Ich habe Ihnen … ausgedruckt (I printed it for you).",
        "meinen Hund is masculine accusative → the adjective ends in -en: meinen kleinen Hund."
      ]
    },
    {
      title: "Anruf wegen einer Wohnung",
      text: "Herr Böhm: Böhm, guten Tag.\nFrau Kaya: Guten Tag, mein Name ist Kaya. Ich rufe wegen der Wohnung in der Bergstraße an. Ist sie noch frei?\nHerr Böhm: Ja, sie ist noch frei. Die Küche [1] gerade renoviert, aber bis Ende des Monats ist alles fertig.\nFrau Kaya: Wie groß ist die Wohnung?\nHerr Böhm: 65 Quadratmeter, zwei Zimmer. Es gibt auch einen Balkon und [2] kleinen Keller.\nFrau Kaya: Und wie hoch ist die Miete?\nHerr Böhm: 620 Euro warm. Die Wohnung liegt im [3] Stock, und es gibt keinen Aufzug.\nFrau Kaya: Das ist kein Problem. Könnte ich [4] die Wohnung ansehen? Ich hätte am Donnerstag Zeit.\nHerr Böhm: Natürlich, ich zeige [5] Ihnen gern. [6] Sie um 17 Uhr kommen?\nFrau Kaya: Ja, das passt. Haben Sie noch andere Interessenten?\nHerr Böhm: Gestern [7] zwei Leute hier, aber sie haben sich noch nicht entschieden.\nFrau Kaya: Dann komme ich auf jeden Fall. [8] ich mit dem Bus komme, wo muss ich aussteigen?\nHerr Böhm: An der Haltestelle Marktplatz. [9] gehen Sie noch fünf Minuten zu Fuß, die Bergstraße ist die zweite Straße links.\nFrau Kaya: Vielen Dank. Ich freue mich, Sie am Donnerstag [10].\nHerr Böhm: Ich mich auch. Bis Donnerstag, Frau Kaya!",
      bank: ["wird", "einen", "dritten", "mir", "sie", "Könnten", "waren", "Wenn", "Dann", "kennenzulernen", "werden", "einem", "dritte", "Als", "kennenlernen"],
      answers: ["wird", "einen", "dritten", "mir", "sie", "Könnten", "waren", "Wenn", "Dann", "kennenzulernen"],
      topics: ["23", "05", "13", "15", "24", "17", "03", "21", "11", "20"],
      explain: [
        "Passive present: werden + participle; die Küche is singular → wird … renoviert.",
        "es gibt + Akkusativ; der Keller is masculine → einen kleinen Keller.",
        "im Stock = in dem Stock (dative); after dem the adjective ends in -en: im dritten Stock.",
        "sich (Dativ) etwas ansehen: the flat is the accusative object, so the reflexive pronoun is dative mir.",
        "Two pronouns: accusative before dative → ich zeige sie (die Wohnung) Ihnen.",
        "Polite request with Konjunktiv II in the Sie-form: Könnten Sie … kommen?",
        "Past of sein, subject zwei Leute (plural) → waren (gestern = yesterday).",
        "Condition / repeated situation in the present → Wenn. Als is only for one event in the past.",
        "Sequencing: Dann (then) in position 1, the verb follows directly: Dann gehen Sie …",
        "Infinitive with zu after sich freuen; with a separable verb zu goes in the middle: kennenzulernen."
      ]
    }
  ]
};
