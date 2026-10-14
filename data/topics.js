// Grammar reference for the 24 A2 topics. English explanations, German examples.
window.TOPICS = [
{
  id:"01", title:"Verb position and the sentence bracket", tag:"V2, V1 in questions, modal/separable/Perfekt bracket",
  intuition:"Every German statement hangs on one hook: the conjugated verb in position 2. Whatever you put in position 1 – the subject, ‘heute’, ‘am Wochenende’, an object – the verb comes right after it, and the subject slides behind the verb if it lost its place. The second half of the verb (an infinitive after a modal, a participle in Perfekt, the prefix of a separable verb) goes to the very end. The two parts form a bracket, and all the other information sits inside it.",
  rule:[
    "Position 1 can be the subject, a time, a place or an object; position 2 is always the conjugated verb: Heute gehe ich einkaufen.",
    "If something other than the subject stands in position 1, the subject follows the verb (inversion): Am Montag habe ich frei.",
    "Bracket: modal + infinitive, haben/sein + participle, separable prefix at the end: Ich muss morgen früh aufstehen. Ich stehe um sechs auf. Ich habe lange geschlafen.",
    "Yes/no questions and commands start with the verb (position 1): Kommst du mit? Mach bitte das Fenster zu! W-questions: W-word, then the verb: Wann fängt der Film an?",
    "Time, place and objects go in the middle, between the two parts of the bracket: Ich habe gestern im Supermarkt eingekauft."
  ],
  examples:[
    {de:"Ich kaufe am Samstag auf dem Markt ein.", en:"I shop at the market on Saturday."},
    {de:"Morgen kann ich leider nicht kommen.", en:"Unfortunately I can’t come tomorrow."},
    {de:"Hast du schon mit dem Arzt gesprochen?", en:"Have you already spoken to the doctor?"},
    {de:"Wann fängt der Deutschkurs an?", en:"When does the German course start?"}
  ],
  trap:"Do not keep English order after a fronted time word: ‘Morgen ich gehe zum Arzt’ ✗ → ‘Morgen gehe ich zum Arzt’ ✓. And the second verb part belongs at the end: ‘Ich muss aufstehen früh’ ✗ → ‘Ich muss früh aufstehen’ ✓.",
  table:{head:["Position 1","Verb (2)","Middle field","End of bracket"],rows:[
    ["Ich","stehe","jeden Tag um sechs","auf."],
    ["Morgen","muss","ich früh","aufstehen."],
    ["Gestern","habe","ich lange","geschlafen."],
    ["Wann","fängt","der Kurs","an?"],
    ["—","Kommst","du heute Abend","mit?"]]}
},
{
  id:"02", title:"Perfekt: regular, irregular and mixed verbs", tag:"gemacht, gefunden, gebracht; haben vs sein",
  intuition:"When you tell someone what happened yesterday, you use Perfekt: haben or sein in position 2 and the participle parked at the end. Participles come in three families. Regular verbs take ge-…-t (gemacht). Irregular verbs change their vowel and take ge-…-en (gefunden). A small ‘mixed’ group changes the vowel like an irregular verb but ends in -t like a regular one: gebracht, gedacht, gekannt, gewusst. Learn those four as a set – they are in every exam.",
  rule:[
    "Regular: ge- + stem + -t: machen → gemacht, kaufen → gekauft; stems in -t/-d add -et: arbeiten → gearbeitet.",
    "Irregular: ge- + changed stem + -en: finden → gefunden, trinken → getrunken, schreiben → geschrieben, sehen → gesehen.",
    "Mixed: new stem + -t: bringen → gebracht, denken → gedacht, kennen → gekannt, wissen → gewusst, nennen → genannt.",
    "Separable verbs put ge- between prefix and verb: einkaufen → eingekauft, anrufen → angerufen. No ge- at all for -ieren verbs and for be-/ver-/er-/ent- verbs: telefoniert, besucht, verstanden, erzählt.",
    "sein for movement from A to B and change of state (fahren, gehen, kommen, aufstehen, einschlafen, umziehen) and for sein, bleiben, werden, passieren; haben for everything else: Ich bin gefahren, aber ich habe gegessen."
  ],
  examples:[
    {de:"Ich habe gestern lange mit meiner Schwester telefoniert.", en:"I talked on the phone with my sister for a long time yesterday."},
    {de:"Wir sind am Wochenende nach Hamburg gefahren.", en:"We went to Hamburg at the weekend."},
    {de:"Hast du deine Brille gefunden? – Ja, sie war in der Küche.", en:"Did you find your glasses? – Yes, they were in the kitchen."},
    {de:"Das habe ich nicht gewusst! Sie hat ihren Hund mitgebracht.", en:"I didn’t know that! She brought her dog along."}
  ],
  trap:"Movement verbs take sein: ‘Ich habe nach Berlin gefahren’ ✗ → ‘Ich bin nach Berlin gefahren’ ✓. Mixed verbs are not regular: ‘gebringt’ ✗ → ‘gebracht’ ✓, ‘gewisst’ ✗ → ‘gewusst’ ✓.",
  table:{head:["Type","Infinitive","Partizip II","haben / sein"],rows:[
    ["regular","machen","gemacht","haben"],
    ["regular, stem in -t","arbeiten","gearbeitet","haben"],
    ["irregular","finden","gefunden","haben"],
    ["irregular, movement","fahren","gefahren","sein"],
    ["irregular, change of state","einschlafen","eingeschlafen","sein"],
    ["mixed","bringen","gebracht","haben"],
    ["mixed","denken","gedacht","haben"],
    ["mixed","kennen","gekannt","haben"],
    ["mixed","wissen","gewusst","haben"],
    ["separable","einkaufen","eingekauft","haben"],
    ["separable, movement","aufstehen","aufgestanden","sein"],
    ["-ieren (no ge-)","telefonieren","telefoniert","haben"],
    ["be-/ver-/er- (no ge-)","besuchen / verstehen","besucht / verstanden","haben"]]}
},
{
  id:"03", title:"Präteritum of sein, haben and modals", tag:"war, hatte, konnte, musste, wollte, durfte, sollte",
  intuition:"In conversation Germans use Perfekt for most verbs, but for sein, haben and the modal verbs they almost always switch to the simple past: ‘Ich war krank’, not ‘Ich bin krank gewesen’. These forms are short, so they are the natural choice even in the middle of a Perfekt story. Learn them as one small set – war, hatte, konnte, musste, wollte, durfte, sollte – and every story about ‘als ich klein war’ becomes easy.",
  rule:[
    "sein: war, warst, war, waren, wart, waren. haben: hatte, hattest, hatte, hatten, hattet, hatten.",
    "Modals: stem + -te + ending, and the umlaut disappears: konnte, musste, durfte, wollte, sollte. ich and er/sie/es have no ending: ich konnte, er konnte.",
    "A modal in Präteritum still sends the infinitive to the end: Ich musste gestern lange arbeiten.",
    "Use it for stories and reasons: Als ich klein war, hatte ich einen Hund. Ich konnte nicht kommen, weil ich krank war. And for polite past: Ich wollte fragen, ob der Termin noch frei ist.",
    "Mixing is normal: the story is in Perfekt, but sein/haben/modals stay in Präteritum: Ich bin zu Hause geblieben, weil ich Fieber hatte."
  ],
  examples:[
    {de:"Gestern war ich beim Arzt, ich hatte Halsschmerzen.", en:"Yesterday I was at the doctor’s, I had a sore throat."},
    {de:"Als ich klein war, wollte ich Pilotin werden.", en:"When I was little, I wanted to become a pilot."},
    {de:"Wir konnten am Sonntag nicht kommen, weil wir keine Zeit hatten.", en:"We couldn’t come on Sunday because we had no time."},
    {de:"Ich sollte um acht im Büro sein, aber der Bus hatte Verspätung.", en:"I was supposed to be in the office at eight, but the bus was late."}
  ],
  trap:"‘Ich bin gestern müde gewesen’ is not wrong but sounds odd → ‘Ich war gestern müde’ ✓. Keep the umlaut out of the past: ‘ich könnte’ is Konjunktiv (could), ‘ich konnte’ ✓ is the past (was able to). ‘Ich habe gestern einen Termin’ ✗ for yesterday → ‘Ich hatte gestern einen Termin’ ✓.",
  table:{head:["","sein","haben","können","müssen","wollen","dürfen","sollen"],rows:[
    ["ich / er / sie / es","war","hatte","konnte","musste","wollte","durfte","sollte"],
    ["du","warst","hattest","konntest","musstest","wolltest","durftest","solltest"],
    ["wir / sie / Sie","waren","hatten","konnten","mussten","wollten","durften","sollten"],
    ["ihr","wart","hattet","konntet","musstet","wolltet","durftet","solltet"]]}
},
{
  id:"04", title:"Modal verbs: sollen, dürfen, nicht müssen", tag:"Du sollst …, Man darf nicht …, Du musst nicht …",
  intuition:"Two negated modals mean something different from what English suggests. ‘Du musst nicht’ is not ‘you must not’ – it means ‘you don’t have to’. A real prohibition needs ‘nicht dürfen’. And sollen is the modal of other people’s wishes: the doctor, the boss or your mother wants you to do it. Finally keep the three ‘wanting’ words apart: möchte is a polite wish, wollen is a firm plan, mögen is liking things.",
  rule:[
    "nicht dürfen / kein … dürfen = prohibition (must not): Hier darf man nicht rauchen. Man darf hier keine Fotos machen.",
    "nicht müssen / kein … müssen = no need (don’t have to): Du musst nicht kommen, wenn du müde bist. Du musst kein Geschenk kaufen.",
    "sollen = instruction or advice from someone else: Der Arzt sagt, ich soll mehr Wasser trinken. As a question it is an offer: Soll ich das Fenster öffnen?",
    "möchte = polite wish (Ich möchte einen Kaffee, bitte), wollen = firm intention (Ich will nächstes Jahr umziehen), mögen + noun = like (Ich mag Pizza).",
    "The modal is conjugated in position 2, the infinitive stands at the end: Man darf hier nicht parken. If the context is clear, the infinitive can be dropped: Ich muss jetzt nach Hause."
  ],
  examples:[
    {de:"Im Krankenhaus darf man nicht laut telefonieren.", en:"In the hospital you must not make loud phone calls."},
    {de:"Du musst das Formular nicht heute abgeben, morgen ist auch okay.", en:"You don’t have to hand in the form today, tomorrow is fine too."},
    {de:"Mein Chef sagt, ich soll am Samstag arbeiten.", en:"My boss says I’m supposed to work on Saturday."},
    {de:"Ich möchte gern ein Zimmer reservieren. – Wollen Sie ein Einzelzimmer oder ein Doppelzimmer?", en:"I would like to book a room. – Do you want a single or a double room?"}
  ],
  trap:"‘Du musst hier nicht rauchen’ ✗ only means ‘you don’t have to smoke here’. For a ban say ‘Du darfst hier nicht rauchen’ ✓. And ‘Ich will einen Kaffee’ sounds rude in a café → ‘Ich möchte einen Kaffee’ ✓.",
  table:{head:["Modal","ich / du / er","Meaning","Example"],rows:[
    ["dürfen","darf / darfst / darf","permission; nicht dürfen = prohibition","Hier darf man nicht parken."],
    ["müssen","muss / musst / muss","necessity; nicht müssen = no need","Du musst nicht mitkommen."],
    ["sollen","soll / sollst / soll","instruction or advice from others; Soll ich …? = offer","Du sollst mehr schlafen."],
    ["wollen","will / willst / will","firm intention","Ich will im Sommer nach Spanien fahren."],
    ["möchte-","möchte / möchtest / möchte","polite wish","Ich möchte bitte bezahlen."],
    ["mögen","mag / magst / mag","like (people, food, things)","Ich mag keinen Fisch."]]}
},
{
  id:"05", title:"Accusative and dative: articles and pronouns", tag:"den/dem, mich/mir; helfen, gefallen, danken, gehören",
  intuition:"The accusative marks the thing the action hits directly (Wen? Was? – Ich sehe den Bus). The dative marks the person who receives, benefits or is addressed (Wem? – Ich helfe dem Kind). Masculine words show the difference most clearly: den vs dem, ihn vs ihm. A group of common verbs always wants the dative, even though English uses a direct object: helfen, danken, gefallen, gehören, antworten, gratulieren, schmecken, passen.",
  rule:[
    "Akkusativ: only masculine changes: der → den, ein → einen. Feminine, neuter and plural look like the nominative: Ich sehe den Bus, die Frau, das Kind, die Leute.",
    "Dativ: dem / der / dem / den (plural noun gets -n): Ich helfe dem Mann, der Frau, dem Kind, den Kindern. With ein: einem / einer / einem.",
    "Pronouns: Akk mich, dich, ihn, sie, es, uns, euch, sie, Sie; Dat mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.",
    "Dative verbs: helfen, danken, gefallen, gehören, antworten, gratulieren, schmecken, passen, fehlen: Das Kleid gefällt mir. Das Handy gehört ihm. Ich danke dir.",
    "Verbs with two objects give the person the dative and the thing the accusative: Ich gebe dem Nachbarn den Schlüssel. Sie zeigt mir das Foto. (geben, schenken, zeigen, erklären, bringen, schicken, kaufen)"
  ],
  examples:[
    {de:"Kannst du mir bitte helfen? Ich finde den Schlüssel nicht.", en:"Can you help me, please? I can’t find the key."},
    {de:"Der Pullover gefällt mir, aber er passt mir nicht.", en:"I like the sweater, but it doesn’t fit me."},
    {de:"Ich danke Ihnen für die Einladung.", en:"Thank you for the invitation."},
    {de:"Wem gehört das Fahrrad? – Es gehört meinem Bruder.", en:"Whose bike is this? – It belongs to my brother."}
  ],
  trap:"Dative verbs take dative, not accusative: ‘Ich helfe dich’ ✗ → ‘Ich helfe dir’ ✓; ‘Das Buch gehört mich’ ✗ → ‘Das Buch gehört mir’ ✓. And masculine accusative needs -n: ‘Ich sehe der Mann’ ✗ → ‘den Mann’ ✓.",
  table:{head:["","Nominativ (Wer?)","Akkusativ (Wen? Was?)","Dativ (Wem?)"],rows:[
    ["masculine","der / ein Mann","den / einen Mann","dem / einem Mann"],
    ["feminine","die / eine Frau","die / eine Frau","der / einer Frau"],
    ["neuter","das / ein Kind","das / ein Kind","dem / einem Kind"],
    ["plural","die / keine Kinder","die / keine Kinder","den / keinen Kindern"],
    ["ich","ich","mich","mir"],
    ["du","du","dich","dir"],
    ["er / sie / es","er / sie / es","ihn / sie / es","ihm / ihr / ihm"],
    ["wir","wir","uns","uns"],
    ["ihr","ihr","euch","euch"],
    ["sie / Sie","sie / Sie","sie / Sie","ihnen / Ihnen"]]}
},
{
  id:"06", title:"Two-way prepositions: wo? wohin?", tag:"in, an, auf, über, unter, vor, hinter, neben, zwischen",
  intuition:"Nine prepositions ask one question: is something moving to a new place, or is it already there? ‘Wohin?’ (direction) takes the accusative, ‘Wo?’ (location) takes the dative. The verb usually tells you: stellen, legen, setzen, hängen move things somewhere (accusative), stehen, liegen, sitzen, hängen describe where they are (dative). The test is simple: can you answer ‘wohin?’ – then accusative.",
  rule:[
    "wo? (position, no change of place) → Dativ: Die Lampe steht auf dem Tisch. Ich bin im Büro. Das Bild hängt an der Wand.",
    "wohin? (direction, goal) → Akkusativ: Ich stelle die Lampe auf den Tisch. Ich gehe ins Büro. Ich hänge das Bild an die Wand.",
    "Verb pairs: stellen / stehen, legen / liegen, (sich) setzen / sitzen; hängen works for both: Ich hänge die Jacke in den Schrank. Die Jacke hängt im Schrank.",
    "Contractions: in dem = im, in das = ins, an dem = am, an das = ans, auf das = aufs.",
    "Movement inside a place is still ‘wo?’: Ich gehe im Park spazieren (I walk around in the park, dative) vs Ich gehe in den Park (into the park, accusative)."
  ],
  examples:[
    {de:"Ich hänge das Bild über das Sofa. Jetzt hängt es über dem Sofa.", en:"I hang the picture above the sofa. Now it hangs above the sofa."},
    {de:"Die Kinder sitzen auf dem Boden und spielen.", en:"The children are sitting on the floor playing."},
    {de:"Stell die Milch bitte in den Kühlschrank.", en:"Please put the milk in the fridge."},
    {de:"Wir treffen uns vor dem Kino, neben der Bushaltestelle.", en:"We’ll meet in front of the cinema, next to the bus stop."}
  ],
  trap:"Direction needs accusative, position needs dative: ‘Ich gehe in der Schule’ ✗ → ‘Ich gehe in die Schule’ ✓; ‘Ich bin in die Schule’ ✗ → ‘Ich bin in der Schule’ ✓.",
  table:{head:["Preposition","wo? → Dativ","wohin? → Akkusativ"],rows:[
    ["in","Er ist im Garten.","Er geht in den Garten."],
    ["an","Sie steht am Fenster.","Sie geht ans Fenster."],
    ["auf","Das Buch liegt auf dem Tisch.","Ich lege das Buch auf den Tisch."],
    ["über","Die Lampe hängt über dem Bett.","Ich hänge die Lampe über das Bett."],
    ["unter","Die Katze sitzt unter dem Stuhl.","Die Katze läuft unter den Stuhl."],
    ["vor","Das Auto steht vor der Tür.","Ich stelle das Auto vor die Tür."],
    ["hinter","Der Ball liegt hinter dem Haus.","Der Ball fliegt hinter das Haus."],
    ["neben","Er sitzt neben der Lampe.","Er setzt sich neben die Lampe."],
    ["zwischen","Der Brief liegt zwischen den Büchern.","Ich lege den Brief zwischen die Bücher."]]}
},
{
  id:"07", title:"Prepositions with dative and accusative", tag:"aus, bei, mit, nach, seit, von, zu / durch, für, gegen, ohne, um",
  intuition:"These prepositions never ask ‘wo or wohin?’ – each one is married to a single case. Learn them as two short chants: aus, bei, mit, nach, seit, von, zu always take the dative; durch, für, gegen, ohne, um always take the accusative. Then the only work is the article ending, and the frequent combinations melt into one word: zum, zur, beim, vom.",
  rule:[
    "Always Dativ: aus, bei, mit, nach, seit, von, zu (also ab, gegenüber): mit dem Bus, bei meiner Oma, seit einem Jahr, von meinem Chef.",
    "Always Akkusativ: durch, für, gegen, ohne, um (also bis, entlang): für meinen Freund, ohne dich, durch die Stadt, um die Ecke.",
    "Contractions: zu dem = zum, zu der = zur, bei dem = beim, von dem = vom; durch das = durchs, für das = fürs.",
    "Meaning tips: nach + city/country without article (nach Berlin, nach Hause), zu + person or building (zum Arzt, zur Schule, zu Anna), aus + origin (aus der Türkei), seit + present tense for something still going on (Ich wohne seit zwei Jahren hier).",
    "Time: um = exact time (um 8 Uhr), gegen = approximately (gegen 8 Uhr), seit = since/for (seit Montag, seit drei Tagen), nach = after (nach dem Essen)."
  ],
  examples:[
    {de:"Ich fahre jeden Tag mit dem Fahrrad zur Arbeit.", en:"I cycle to work every day."},
    {de:"Seit einem Monat wohne ich bei meiner Tante.", en:"I have been living at my aunt’s for a month."},
    {de:"Das Geschenk ist für meinen Bruder, er hat am Samstag Geburtstag.", en:"The present is for my brother, his birthday is on Saturday."},
    {de:"Gehen Sie durch den Park, der Bahnhof ist gleich um die Ecke.", en:"Go through the park, the station is just around the corner."}
  ],
  trap:"‘mit meinen Freund’ ✗ → ‘mit meinem Freund’ ✓ (mit always dative). ‘Ich gehe nach dem Arzt’ ✗ → ‘Ich gehe zum Arzt’ ✓ (nach only with places without article). ‘Ich habe seit zwei Jahren hier gewohnt’ ✗ if you still live there → ‘Ich wohne seit zwei Jahren hier’ ✓.",
  table:{head:["Preposition","Case","Typical phrase","Contraction"],rows:[
    ["aus","Dativ","aus der Schweiz, aus dem Haus","—"],
    ["bei","Dativ","bei meinem Onkel, bei der Arbeit","beim (bei dem)"],
    ["mit","Dativ","mit dem Zug, mit meiner Freundin","—"],
    ["nach","Dativ","nach Italien, nach Hause, nach dem Essen","—"],
    ["seit","Dativ","seit einem Jahr, seit dem Umzug","—"],
    ["von","Dativ","von meiner Chefin, vom Bahnhof","vom (von dem)"],
    ["zu","Dativ","zu meiner Freundin, zum Arzt, zur Schule","zum (zu dem), zur (zu der)"],
    ["durch","Akkusativ","durch die Stadt, durch den Park","durchs (durch das)"],
    ["für","Akkusativ","für meinen Sohn, für dich","fürs (für das)"],
    ["gegen","Akkusativ","gegen die Wand, gegen 9 Uhr","—"],
    ["ohne","Akkusativ","ohne meinen Mann, ohne Zucker","—"],
    ["um","Akkusativ","um die Ecke, um 9 Uhr","—"]]}
},
{
  id:"08", title:"Subordinate clauses: weil and dass", tag:"…, weil ich keine Zeit habe. Ich glaube, dass …",
  intuition:"weil and dass open a bracket: everything inside waits for the verb, which lands at the very end. A German listener hears ‘weil …’ and keeps listening until the verb arrives. The main clause stays normal; only the part after the comma changes. If you want ‘because’ without changing the order, use denn instead – it is glue between two normal sentences.",
  rule:[
    "Main clause, + weil/dass + subject + … + conjugated verb at the end: Ich bleibe zu Hause, weil ich krank bin.",
    "With a modal, the infinitive comes first, the modal last: …, weil ich morgen früh arbeiten muss. In Perfekt: participle, then haben/sein: …, dass er den Bus verpasst hat.",
    "Separable verbs join together again at the end: …, weil der Kurs um neun anfängt.",
    "dass follows verbs of thinking, saying and feeling, and phrases with es: Ich glaube / hoffe / finde / weiß / denke, dass … Es ist wichtig, dass … Es tut mir leid, dass …",
    "denn = because with main-clause order (verb stays in position 2): Ich bleibe zu Hause, denn ich bin krank. There is always a comma before weil, dass and denn."
  ],
  examples:[
    {de:"Ich kann heute nicht kommen, weil ich arbeiten muss.", en:"I can’t come today because I have to work."},
    {de:"Ich hoffe, dass das Wetter am Wochenende schön wird.", en:"I hope that the weather will be nice at the weekend."},
    {de:"Sie ist müde, weil sie gestern erst um zwei eingeschlafen ist.", en:"She is tired because she only fell asleep at two yesterday."},
    {de:"Ich finde, dass die Wohnung zu teuer ist.", en:"I think the flat is too expensive."}
  ],
  trap:"After weil/dass the verb goes to the end: ‘…, weil ich habe keine Zeit’ ✗ → ‘…, weil ich keine Zeit habe’ ✓. With a modal: ‘…, weil ich muss arbeiten’ ✗ → ‘…, weil ich arbeiten muss’ ✓.",
  table:{head:["Main clause","Conjunction","Subject + middle","Verb(s) at the end"],rows:[
    ["Ich bleibe zu Hause,","weil","ich","krank bin."],
    ["Ich kann nicht kommen,","weil","ich morgen früh","arbeiten muss."],
    ["Er ist müde,","weil","er sehr spät","eingeschlafen ist."],
    ["Ich glaube,","dass","der Kurs um neun","anfängt."],
    ["Es ist wichtig,","dass","du den Termin nicht","vergisst."],
    ["Ich bleibe zu Hause,","denn","ich bin krank.","— (verb stays in position 2)"]]}
},
{
  id:"09", title:"Subordinate clauses: wenn and obwohl", tag:"Wenn ich Zeit habe, … / Obwohl es regnet, …",
  intuition:"wenn sets a condition (‘if’ or ‘whenever’), obwohl adds a surprising contrast (‘although’). Both build subordinate clauses with the verb at the end, and both love to come first. When the sub-clause starts the sentence, it fills position 1 as a whole, so the main clause begins with its verb – you get the typical pattern ‘…verb, verb…’ around the comma: Wenn ich Zeit habe, koche ich.",
  rule:[
    "wenn = if / whenever, for present, future and repeated events: Wenn es regnet, nehme ich den Bus. Wenn ich Zeit habe, rufe ich dich an.",
    "obwohl = although, a fact that makes the main clause surprising: Obwohl er krank ist, geht er zur Arbeit. The main-clause partner is trotzdem: Er ist krank. Trotzdem geht er zur Arbeit.",
    "Sub-clause first → comma → main clause starts with the verb: Wenn ich Zeit habe, koche ich. Obwohl es kalt ist, gehen wir raus.",
    "Sub-clause second → verb at the end of the sentence: Ich koche, wenn ich Zeit habe. Wir gehen raus, obwohl es kalt ist.",
    "wenn vs als: als is for one single event or period in the past (Als ich 18 war, …); wenn for everything else, including repeated past events (Immer wenn ich Oma besucht habe, …)."
  ],
  examples:[
    {de:"Wenn ich krank bin, bleibe ich im Bett und trinke Tee.", en:"When I am ill, I stay in bed and drink tea."},
    {de:"Obwohl die Wohnung klein ist, gefällt sie mir sehr.", en:"Although the flat is small, I like it a lot."},
    {de:"Ruf mich an, wenn du am Bahnhof bist.", en:"Call me when you are at the station."},
    {de:"Er fährt mit dem Fahrrad zur Arbeit, obwohl es schneit.", en:"He cycles to work although it is snowing."}
  ],
  trap:"After a fronted sub-clause the verb comes first: ‘Wenn ich Zeit habe, ich gehe ins Kino’ ✗ → ‘Wenn ich Zeit habe, gehe ich ins Kino’ ✓. Do not double the contrast: ‘Obwohl es regnet, trotzdem gehe ich raus’ ✗ → ‘Obwohl es regnet, gehe ich raus’ ✓.",
  table:{head:["Sub-clause (verb at the end)","Main clause (verb first)","Meaning"],rows:[
    ["Wenn ich Zeit habe,","gehe ich schwimmen.","condition / whenever"],
    ["Wenn du Hilfe brauchst,","ruf mich an.","condition (future)"],
    ["Wenn das Wetter schön war,","sind wir immer wandern gegangen.","repeated event in the past"],
    ["Obwohl es regnet,","gehen wir spazieren.","contrast"],
    ["Obwohl er müde war,","hat er noch gelernt.","contrast (past)"],
    ["Als ich klein war,","hatte ich einen Hund.","one past period → als"]]}
},
{
  id:"10", title:"Indirect questions: ob and W-words", tag:"Ich weiß nicht, ob … / Kannst du mir sagen, wo …",
  intuition:"A question inside another sentence behaves like a subordinate clause: the verb walks to the end. A yes/no question gets the word ob (whether); a question with a W-word keeps that word. This is also the polite way to ask strangers: ‘Können Sie mir sagen, wo der Bahnhof ist?’ sounds much softer than ‘Wo ist der Bahnhof?’.",
  rule:[
    "Yes/no question → ob + subject + … + verb at the end: Kommt sie? → Ich weiß nicht, ob sie kommt.",
    "W-question → the W-word stays, the verb goes to the end: Wo ist der Bahnhof? → Können Sie mir sagen, wo der Bahnhof ist?",
    "Typical openers: Ich weiß nicht, … / Kannst du mir sagen, … / Können Sie mir sagen, … / Ich möchte wissen, … / Weißt du, … / Ich frage mich, …",
    "The sentence ends with a question mark only if the opener is a question: Wissen Sie, wann der Zug fährt? but Ich weiß nicht, wann der Zug fährt.",
    "Never combine ob with a W-word and never keep question order inside: ‘ob wann er kommt’ ✗, ‘ob kommt er’ ✗. Modals, participles and prefixes all go to the end: …, ob ich morgen arbeiten muss; …, wann der Film anfängt."
  ],
  examples:[
    {de:"Entschuldigung, können Sie mir sagen, wo die Post ist?", en:"Excuse me, can you tell me where the post office is?"},
    {de:"Ich weiß nicht, ob der Supermarkt sonntags geöffnet hat.", en:"I don’t know whether the supermarket is open on Sundays."},
    {de:"Weißt du, wann der Film anfängt?", en:"Do you know when the film starts?"},
    {de:"Ich möchte wissen, wie viel das Zimmer kostet.", en:"I would like to know how much the room costs."}
  ],
  trap:"‘Ich weiß nicht, ob kommt er’ ✗ → ‘Ich weiß nicht, ob er kommt’ ✓ (verb at the end). And ‘wann’ is the question word, ‘wenn’ is a condition: ‘Ich weiß nicht, wenn er kommt’ ✗ → ‘Ich weiß nicht, wann er kommt’ ✓.",
  table:{head:["Direct question","Indirect question"],rows:[
    ["Kommt er heute?","Ich weiß nicht, ob er heute kommt."],
    ["Hat der Laden geöffnet?","Weißt du, ob der Laden geöffnet hat?"],
    ["Muss ich einen Termin machen?","Ich möchte wissen, ob ich einen Termin machen muss."],
    ["Wo ist die Toilette?","Können Sie mir sagen, wo die Toilette ist?"],
    ["Wann fängt der Kurs an?","Ich möchte wissen, wann der Kurs anfängt."],
    ["Wie viel kostet das?","Sag mir bitte, wie viel das kostet."],
    ["Warum ist er nicht gekommen?","Ich frage mich, warum er nicht gekommen ist."]]}
},
{
  id:"11", title:"Connectors: deshalb, trotzdem, dann, danach, zuerst", tag:"Es regnet, deshalb bleibe ich zu Hause.",
  intuition:"Words like deshalb, trotzdem, dann and danach are not conjunctions but adverbs – real sentence parts. So they take position 1, and the verb must follow them immediately, pushing the subject behind it. Compare: und/aber/denn sit in ‘position 0’ and change nothing; weil opens a sub-clause and sends the verb to the end. Three ways to express a reason, three different word orders.",
  rule:[
    "deshalb / deswegen / darum = that is why (the result follows): Es regnet, deshalb bleibe ich zu Hause. Also after a full stop: Es regnet. Deshalb bleibe ich zu Hause.",
    "trotzdem = nevertheless (a surprising result): Es regnet. Trotzdem gehe ich joggen.",
    "Telling a story in order: zuerst, dann, danach, später, zum Schluss – all in position 1, verb right after: Zuerst frühstücke ich, dann dusche ich, danach fahre ich zur Arbeit.",
    "These adverbs can also sit in the middle field; then the subject keeps position 1: Ich bleibe deshalb zu Hause. Ich gehe trotzdem joggen.",
    "Reason vs result: weil and denn introduce the reason (Ich bleibe zu Hause, weil ich krank bin / denn ich bin krank), deshalb introduces the result (Ich bin krank, deshalb bleibe ich zu Hause). Do not swap them."
  ],
  examples:[
    {de:"Mein Auto ist kaputt, deshalb fahre ich mit dem Bus.", en:"My car is broken, that’s why I take the bus."},
    {de:"Das Restaurant war teuer, trotzdem gehen wir wieder hin.", en:"The restaurant was expensive, nevertheless we are going there again."},
    {de:"Zuerst habe ich eingekauft, dann habe ich gekocht und danach haben wir gegessen.", en:"First I did the shopping, then I cooked and after that we ate."},
    {de:"Ich habe Kopfschmerzen, deshalb nehme ich eine Tablette.", en:"I have a headache, so I’m taking a tablet."}
  ],
  trap:"After deshalb/trotzdem/dann the verb comes first: ‘Deshalb ich bleibe zu Hause’ ✗ → ‘Deshalb bleibe ich zu Hause’ ✓. ‘Dann ich habe gegessen’ ✗ → ‘Dann habe ich gegessen’ ✓.",
  table:{head:["Connector","Meaning","Position and word order","Example"],rows:[
    ["deshalb / deswegen / darum","that is why (result)","position 1 → verb, then subject","Ich bin müde, deshalb gehe ich ins Bett."],
    ["trotzdem","nevertheless","position 1 → verb, then subject","Es ist kalt, trotzdem gehe ich raus."],
    ["zuerst / dann / danach / zum Schluss","first / then / after that / finally","position 1 → verb, then subject","Zuerst esse ich, dann lerne ich."],
    ["denn","because (reason)","position 0 → normal main clause","Ich gehe ins Bett, denn ich bin müde."],
    ["weil","because (reason)","opens a sub-clause → verb at the end","Ich gehe ins Bett, weil ich müde bin."],
    ["und / aber / oder","and / but / or","position 0 → normal main clause","Ich lerne, aber er schläft."]]}
},
{
  id:"12", title:"Comparison", tag:"größer als, so groß wie, am größten",
  intuition:"German comparatives always add -er to the adjective – there is no ‘more beautiful’, only ‘schöner’. Short adjectives with a, o, u usually take an umlaut (älter, größer, jünger). The superlative has two shapes: ‘am -sten’ when it stands alone after sein, and ‘der/die/das -ste’ with an ending in front of a noun. For comparing, als goes with the comparative, wie with ‘so … wie’.",
  rule:[
    "Comparative = adjective + -er, often with umlaut: klein → kleiner, alt → älter, groß → größer, jung → jünger, kalt → kälter. Never ‘mehr schön’.",
    "Superlative after sein or as adverb: am + -sten (am schnellsten); before a noun: der/die/das + -ste + ending (der schnellste Zug, das beste Restaurant). After -t, -d, -s, -z: -esten (am ältesten, am kürzesten).",
    "Comparing: X ist größer als Y. X ist (genau)so groß wie Y. X ist nicht so groß wie Y.",
    "Irregular: gut – besser – am besten; viel – mehr – am meisten; gern – lieber – am liebsten; hoch – höher – am höchsten; nah – näher – am nächsten; teuer – teurer; dunkel – dunkler.",
    "A comparative in front of a noun needs the normal adjective ending: ein größeres Zimmer, die bessere Idee, einen billigeren Flug."
  ],
  examples:[
    {de:"Mein Bruder ist älter als ich, aber ich bin größer.", en:"My brother is older than me, but I am taller."},
    {de:"Das neue Handy ist genauso teuer wie das alte.", en:"The new phone is just as expensive as the old one."},
    {de:"Ich trinke lieber Tee als Kaffee, am liebsten trinke ich Wasser.", en:"I prefer tea to coffee, and most of all I like drinking water."},
    {de:"Welcher Weg ist am kürzesten? – Der Weg durch den Park.", en:"Which way is the shortest? – The way through the park."}
  ],
  trap:"Comparative + als, not wie: ‘Er ist größer wie ich’ ✗ → ‘Er ist größer als ich’ ✓. No ‘mehr’ with adjectives: ‘mehr schnell’ ✗ → ‘schneller’ ✓. Irregular forms: ‘guter’ ✗ → ‘besser’ ✓, ‘gerner’ ✗ → ‘lieber’ ✓.",
  table:{head:["Adjective","Comparative","Superlative (am …)","Before a noun"],rows:[
    ["klein","kleiner","am kleinsten","der kleinste"],
    ["alt","älter","am ältesten","der älteste"],
    ["groß","größer","am größten","der größte"],
    ["jung","jünger","am jüngsten","der jüngste"],
    ["gut","besser","am besten","der beste"],
    ["viel","mehr","am meisten","die meisten"],
    ["gern","lieber","am liebsten","—"],
    ["hoch","höher","am höchsten","der höchste"],
    ["nah","näher","am nächsten","der nächste"],
    ["teuer","teurer","am teuersten","der teuerste"],
    ["dunkel","dunkler","am dunkelsten","der dunkelste"]]}
},
{
  id:"13", title:"Adjective endings after der, die, das", tag:"der kleine Hund, den kleinen Hund, mit dem kleinen Hund",
  intuition:"After der, die, das the article already tells you gender and case, so the adjective can relax. It takes -e in the five ‘basic’ slots (nominative singular of all three genders, plus accusative feminine and neuter – the slots where the article does not change) and -en everywhere else. Think of it as a small island of -e in the top-left corner of the table, and -en all around it. dieser, jeder and welcher are der-words and behave the same way.",
  rule:[
    "Nominative singular → -e: der kleine Hund, die kleine Katze, das kleine Kind.",
    "Accusative feminine and neuter also -e, because the article does not change: die kleine Katze, das kleine Kind.",
    "All other slots → -en: den kleinen Hund (Akk. masc.), dem kleinen Hund / der kleinen Katze / dem kleinen Kind (Dat.), and the whole plural: die kleinen Kinder, mit den kleinen Kindern.",
    "dieser, jeder, welcher, jener, mancher and alle take the same endings as der: dieser neue Kollege, jeden neuen Film, mit welcher roten Jacke, alle alten Häuser.",
    "Several adjectives in a row share the ending: der kleine, schwarze Hund; mit dem alten, kaputten Auto."
  ],
  examples:[
    {de:"Der neue Kollege kommt aus Spanien.", en:"The new colleague comes from Spain."},
    {de:"Ich nehme das blaue Hemd und die schwarze Hose.", en:"I’ll take the blue shirt and the black trousers."},
    {de:"Kennst du den jungen Mann dort an der Bar?", en:"Do you know the young man over there at the bar?"},
    {de:"Wir wohnen im alten Haus neben der kleinen Kirche.", en:"We live in the old house next to the little church."}
  ],
  trap:"Accusative masculine and the whole plural take -en: ‘Ich sehe der kleine Hund’ ✗ → ‘Ich sehe den kleinen Hund’ ✓; ‘die kleine Kinder’ ✗ → ‘die kleinen Kinder’ ✓.",
  table:{head:["","masculine","feminine","neuter","plural"],rows:[
    ["Nominativ","der kleine Hund","die kleine Katze","das kleine Kind","die kleinen Hunde"],
    ["Akkusativ","den kleinen Hund","die kleine Katze","das kleine Kind","die kleinen Hunde"],
    ["Dativ","dem kleinen Hund","der kleinen Katze","dem kleinen Kind","den kleinen Hunden"],
    ["same after","dieser / jeder / welcher","diese / jede / welche","dieses / jedes / welches","diese / alle / welche"]]}
},
{
  id:"14", title:"Adjective endings after ein, kein, mein and without article", tag:"ein kleiner Hund, eine kleine Katze, kleine Kinder, mit frischem Brot",
  intuition:"ein is lazy: in the nominative it does not show the gender (ein Mann, ein Kind look the same). So the adjective has to do it: ein kleiner Hund, eine kleine Katze, ein kleines Kind – the endings -er, -e, -es are the endings of der, die, das. Everywhere else it is -en again, except the two slots where nothing changes (accusative feminine and neuter). When there is no article at all, the adjective takes over the full job of the article: frisches Brot (das), mit frischem Brot (dem).",
  rule:[
    "Nominative: the adjective shows the gender: ein kleiner Hund, eine kleine Katze, ein kleines Kind.",
    "Accusative: masculine → -en (einen kleinen Hund); feminine and neuter stay as in the nominative (eine kleine Katze, ein kleines Kind).",
    "Dative singular and the whole plural → -en: mit einem kleinen Hund, mit meiner kleinen Tochter, keine kleinen Kinder, mit meinen alten Freunden.",
    "kein and the possessives mein, dein, sein, ihr, unser, euer, Ihr take exactly the ein-endings; in the plural they exist (keine, meine) and the adjective takes -en: meine neuen Schuhe.",
    "No article: the adjective takes the der-word ending itself: kalter Kaffee (der), frische Milch (die), frisches Brot (das), kleine Kinder (die); dative: mit kaltem Kaffee, mit frischer Milch, mit frischem Brot, mit guten Freunden."
  ],
  examples:[
    {de:"Das ist ein guter Freund von mir.", en:"This is a good friend of mine."},
    {de:"Ich habe eine neue Wohnung mit einem großen Balkon.", en:"I have a new flat with a big balcony."},
    {de:"Morgens trinke ich schwarzen Kaffee und esse frisches Brot.", en:"In the morning I drink black coffee and eat fresh bread."},
    {de:"Meine alten Nachbarn haben ein kleines Haus gekauft.", en:"My old neighbours have bought a small house."}
  ],
  trap:"After ein the adjective must show the gender: ‘ein kleine Kind’ ✗ → ‘ein kleines Kind’ ✓, ‘ein kleine Hund’ ✗ → ‘ein kleiner Hund’ ✓. Without article the dative ending is -em/-er: ‘mit frischen Brot’ ✗ → ‘mit frischem Brot’ ✓.",
  table:{head:["","masculine","feminine","neuter","plural"],rows:[
    ["Nom. (ein / kein / mein)","ein kleiner Hund","eine kleine Katze","ein kleines Kind","keine kleinen Hunde"],
    ["Akk. (ein / kein / mein)","einen kleinen Hund","eine kleine Katze","ein kleines Kind","keine kleinen Hunde"],
    ["Dat. (ein / kein / mein)","einem kleinen Hund","einer kleinen Katze","einem kleinen Kind","keinen kleinen Hunden"],
    ["Nom. (no article)","kalter Kaffee","frische Milch","frisches Brot","kleine Kinder"],
    ["Akk. (no article)","kalten Kaffee","frische Milch","frisches Brot","kleine Kinder"],
    ["Dat. (no article)","mit kaltem Kaffee","mit frischer Milch","mit frischem Brot","mit kleinen Kindern"]]}
},
{
  id:"15", title:"Reflexive verbs", tag:"sich waschen, sich freuen, sich treffen, sich ärgern",
  intuition:"A reflexive verb sends the action back to the subject: ich wasche mich, er ärgert sich. The reflexive pronoun is simply the accusative pronoun – the only new form is sich for er/sie/es, sie and Sie. Some verbs are reflexive only sometimes (waschen), many are always reflexive (sich freuen, sich beeilen, sich erkälten). One twist: if the sentence also names a body part or an object, the pronoun switches to the dative – Ich wasche mir die Hände.",
  rule:[
    "Reflexive pronouns (accusative): mich, dich, sich, uns, euch, sich: Ich freue mich. Du wäschst dich. Er ärgert sich. Wir treffen uns.",
    "Dative reflexive when there is also an accusative object (body part, clothes, thing): Ich wasche mir die Hände. Du putzt dir die Zähne. Only ich and du change (mir, dir); the others stay the same.",
    "Common reflexive verbs: sich freuen, sich treffen, sich ärgern, sich beeilen, sich ausruhen, sich erkälten, sich anziehen, sich setzen, sich fühlen, sich entschuldigen, sich interessieren, sich erinnern.",
    "Position: directly after the conjugated verb in a main clause (Ich treffe mich heute mit Anna), after the subject in questions and sub-clauses (Freust du dich? …, weil ich mich heute mit Anna treffe).",
    "Perfekt always with haben: Ich habe mich erkältet. Wir haben uns im Park getroffen."
  ],
  examples:[
    {de:"Ich freue mich auf das Wochenende.", en:"I’m looking forward to the weekend."},
    {de:"Wir treffen uns um sieben vor dem Kino.", en:"We’re meeting at seven in front of the cinema."},
    {de:"Ich habe mich erkältet und fühle mich nicht gut.", en:"I’ve caught a cold and don’t feel well."},
    {de:"Wasch dir bitte die Hände, dann essen wir.", en:"Please wash your hands, then we’ll eat."}
  ],
  trap:"With a body part the pronoun is dative: ‘Ich wasche mich die Hände’ ✗ → ‘Ich wasche mir die Hände’ ✓. Third person is always sich: ‘Er freut ihn’ ✗ → ‘Er freut sich’ ✓.",
  table:{head:["","Akkusativ (sich waschen)","Dativ + object (sich die Hände waschen)"],rows:[
    ["ich","Ich wasche mich.","Ich wasche mir die Hände."],
    ["du","Du wäschst dich.","Du wäschst dir die Hände."],
    ["er / sie / es","Er wäscht sich.","Er wäscht sich die Hände."],
    ["wir","Wir waschen uns.","Wir waschen uns die Hände."],
    ["ihr","Ihr wascht euch.","Ihr wascht euch die Hände."],
    ["sie / Sie","Sie waschen sich.","Sie waschen sich die Hände."]]}
},
{
  id:"16", title:"Verbs with prepositions", tag:"sich interessieren für, warten auf, sprechen über, träumen von",
  intuition:"Some verbs come with a fixed preposition that has lost its normal meaning: warten auf is not ‘wait on top of’, it is simply ‘wait for’. The only way to get these right is to learn verb, preposition and case as one unit, like a three-word vocabulary item. A useful pattern: the two-way prepositions auf, über, an, in nearly always take the accusative in these pairs, while von, mit, nach, bei, zu keep their dative.",
  rule:[
    "Learn triples: warten auf + Akk, sich interessieren für + Akk, sprechen über + Akk, träumen von + Dat, Angst haben vor + Dat.",
    "auf, über, an, um, für → accusative in these pairs; von, mit, nach, bei, zu, aus → always dative.",
    "sich freuen auf = looking forward to something in the future (Ich freue mich auf den Urlaub); sich freuen über = being happy about something that is here or has happened (Ich freue mich über das Geschenk).",
    "More pairs to know: denken an, sich kümmern um, sich ärgern über, sich erinnern an, sich bedanken für, fragen nach, sprechen mit, einladen zu, sich unterhalten mit, aufhören mit.",
    "Questions: for things use wo(r)- + preposition (Worauf wartest du? Wofür interessierst du dich?), for people preposition + wen/wem (Auf wen wartest du? Mit wem sprichst du?)."
  ],
  examples:[
    {de:"Ich warte schon zwanzig Minuten auf den Bus.", en:"I have been waiting for the bus for twenty minutes."},
    {de:"Meine Tochter interessiert sich für Musik und träumt von einer eigenen Band.", en:"My daughter is interested in music and dreams of her own band."},
    {de:"Wir freuen uns auf den Urlaub. – Und ich freue mich über das Geschenk.", en:"We’re looking forward to the holiday. – And I’m happy about the present."},
    {de:"Hast du Angst vor dem Zahnarzt? – Ja, ich denke jeden Tag an den Termin.", en:"Are you afraid of the dentist? – Yes, I think about the appointment every day."}
  ],
  trap:"Do not translate the English preposition: ‘Ich warte für den Bus’ ✗ → ‘Ich warte auf den Bus’ ✓; ‘Ich interessiere mich in Musik’ ✗ → ‘für Musik’ ✓. Future vs present: ‘Ich freue mich auf das Geschenk’ ✗ when you already have it → ‘über das Geschenk’ ✓.",
  table:{head:["Verb + preposition","Case","Example"],rows:[
    ["warten auf","Akkusativ","Ich warte auf den Zug."],
    ["sich freuen auf","Akkusativ","Ich freue mich auf die Ferien."],
    ["sich freuen über","Akkusativ","Sie freut sich über die Blumen."],
    ["sich interessieren für","Akkusativ","Er interessiert sich für Fußball."],
    ["sprechen über","Akkusativ","Wir sprechen über das Wetter."],
    ["sich ärgern über","Akkusativ","Ich ärgere mich über den Stau."],
    ["denken an","Akkusativ","Ich denke an meine Familie."],
    ["sich erinnern an","Akkusativ","Erinnerst du dich an den Urlaub?"],
    ["sich kümmern um","Akkusativ","Sie kümmert sich um die Kinder."],
    ["sich bedanken für","Akkusativ","Ich bedanke mich für die Hilfe."],
    ["träumen von","Dativ","Ich träume von einem Haus am Meer."],
    ["Angst haben vor","Dativ","Er hat Angst vor Hunden."],
    ["sprechen mit","Dativ","Ich spreche mit meinem Chef."],
    ["fragen nach","Dativ","Sie fragt nach dem Weg."],
    ["einladen zu","Dativ","Ich lade dich zu meiner Party ein."]]}
},
{
  id:"17", title:"Konjunktiv II: würde, könnte, hätte, wäre", tag:"Könnten Sie …? Ich hätte gern … An deiner Stelle würde ich …",
  intuition:"Konjunktiv II is the ‘softener’ of German. It signals that something is not real right now: a polite request (Könnten Sie …? is gentler than Können Sie …?), a wish (Ich hätte gern …), advice (An deiner Stelle würde ich …) or an imagined situation. Only a handful of verbs have their own forms you need at A2 – hätte, wäre, könnte, sollte – and every other verb simply uses würde + infinitive.",
  rule:[
    "Polite requests: Könnten Sie mir helfen? Würden Sie bitte das Fenster schließen? Hätten Sie einen Moment Zeit? Wären Sie so nett …?",
    "Wishes: Ich hätte gern einen Kaffee. Ich wäre jetzt gern am Meer. Ich würde gern ein Zimmer reservieren.",
    "Advice: An deiner Stelle würde ich zum Arzt gehen. Du solltest mehr schlafen. Sie sollten früher ins Bett gehen.",
    "Forms: haben → hätte, sein → wäre, können → könnte, sollen → sollte, werden → würde; endings -, -st, -, -n, -t, -n (hätte, hättest, hätte, hätten, hättet, hätten). All other verbs: würde + infinitive at the end: Ich würde das Auto kaufen.",
    "Simple unreal condition with wenn: Wenn ich Zeit hätte, würde ich dich besuchen. Wenn das Wetter besser wäre, könnten wir grillen."
  ],
  examples:[
    {de:"Könnten Sie das bitte wiederholen? Ich habe Sie nicht verstanden.", en:"Could you repeat that, please? I didn’t understand you."},
    {de:"Ich hätte gern zwei Brötchen und ein Stück Kuchen.", en:"I would like two bread rolls and a piece of cake."},
    {de:"An deiner Stelle würde ich die Wohnung nehmen, sie ist günstig.", en:"If I were you, I would take the flat, it’s cheap."},
    {de:"Wenn ich mehr Zeit hätte, würde ich öfter Sport machen.", en:"If I had more time, I would do sport more often."}
  ],
  trap:"Umlaut makes the difference between past and polite: ‘Konnten Sie mir helfen?’ ✗ (= were you able to) → ‘Könnten Sie mir helfen?’ ✓. Do not build würde + sein/haben: ‘Ich würde müde sein’ ✗ → ‘Ich wäre müde’ ✓, ‘Ich würde gern Zeit haben’ ✗ → ‘Ich hätte gern Zeit’ ✓.",
  table:{head:["","haben → hätte","sein → wäre","können → könnte","sollen → sollte","werden → würde (+ infinitive)"],rows:[
    ["ich","hätte","wäre","könnte","sollte","würde"],
    ["du","hättest","wärst","könntest","solltest","würdest"],
    ["er / sie / es","hätte","wäre","könnte","sollte","würde"],
    ["wir","hätten","wären","könnten","sollten","würden"],
    ["ihr","hättet","wärt","könntet","solltet","würdet"],
    ["sie / Sie","hätten","wären","könnten","sollten","würden"]]}
},
{
  id:"18", title:"Possessives, demonstratives and question articles", tag:"mein-, dies-, jed-, welch- in all cases",
  intuition:"A possessive article has two jobs. The stem tells you who owns something (mein, dein, sein, ihr, unser, euer, ihr, Ihr); the ending tells you the gender and case of the thing owned – exactly like ein and kein. So ‘her brother’ is ihr Bruder but ‘her sister’ is ihre Schwester, and ‘his sister’ is seine Schwester. dieser, jeder and welcher are the opposite family: they take the endings of der, die, das.",
  rule:[
    "Owner → stem: ich mein, du dein, er/es sein, sie (she) ihr, wir unser, ihr euer, sie (they) ihr, Sie Ihr.",
    "Ending → like ein/kein, following the noun: mein Bruder, meine Schwester, mein Kind, meine Eltern; Akk. meinen Bruder; Dat. meinem Bruder, meiner Schwester, meinem Kind, meinen Eltern.",
    "euer loses its second e before an ending: eure Kinder, euren Sohn, eurem Vater; unser keeps it: unsere Wohnung, unserem Haus.",
    "dieser / jeder / welcher take the der-endings: dieser Mann, diese Frau, dieses Kind, diese Leute; Akk. diesen Mann; Dat. diesem Mann, dieser Frau, diesem Kind, diesen Leuten. jeder exists only in the singular; the plural is alle.",
    "welcher asks for a choice from a known group (Welchen Bus nimmst du? Welche Jacke gefällt dir?); the answer is often a demonstrative: Diesen. Diese hier."
  ],
  examples:[
    {de:"Das ist meine Schwester mit ihrem Mann und ihren Kindern.", en:"This is my sister with her husband and her children."},
    {de:"Welchen Pullover nimmst du? – Diesen hier, er ist billiger.", en:"Which sweater are you taking? – This one here, it’s cheaper."},
    {de:"Jeder Gast bekommt ein Glas Sekt.", en:"Every guest gets a glass of sparkling wine."},
    {de:"Habt ihr euren Schlüssel? – Ja, er ist in unserer Tasche.", en:"Do you have your key? – Yes, it’s in our bag."}
  ],
  trap:"Stem = owner, ending = noun: ‘Peter liebt ihre Frau’ ✗ (that would be someone else’s wife) → ‘Peter liebt seine Frau’ ✓; ‘Ich besuche meinen Oma’ ✗ → ‘meine Oma’ ✓ (feminine accusative has no -n).",
  table:{head:["","masculine","feminine","neuter","plural"],rows:[
    ["Nom. mein-","mein Bruder","meine Schwester","mein Kind","meine Eltern"],
    ["Akk. mein-","meinen Bruder","meine Schwester","mein Kind","meine Eltern"],
    ["Dat. mein-","meinem Bruder","meiner Schwester","meinem Kind","meinen Eltern"],
    ["Nom. dies- / jed- / welch-","dieser / jeder / welcher","diese / jede / welche","dieses / jedes / welches","diese / alle / welche"],
    ["Akk. dies- / jed- / welch-","diesen / jeden / welchen","diese / jede / welche","dieses / jedes / welches","diese / alle / welche"],
    ["Dat. dies- / jed- / welch-","diesem / jedem / welchem","dieser / jeder / welcher","diesem / jedem / welchem","diesen / allen / welchen"]]}
},
{
  id:"19", title:"Relative clauses", tag:"der Mann, der …; das Buch, das ich lese",
  intuition:"A relative clause glues two sentences about the same person or thing: ‘Das ist der Mann. Der Mann wohnt hier.’ → ‘Das ist der Mann, der hier wohnt.’ The relative pronoun looks like the definite article. Its gender and number come from the noun before the comma; its case comes from the job it does inside the relative clause (subject → nominative, direct object → accusative). Like every subordinate clause, it ends with the verb.",
  rule:[
    "Gender and number come from the noun: der Mann, der …; die Frau, die …; das Kind, das …; die Leute, die …",
    "Case comes from the role inside the relative clause: subject → Nominativ (der Mann, der dort wohnt); direct object → Akkusativ (der Mann, den ich kenne); after a dative verb or preposition → Dativ (der Mann, dem ich helfe; die Frau, mit der ich arbeite).",
    "The verb goes to the end; with Perfekt or a modal the helper comes last: das Buch, das ich gestern gekauft habe; der Kollege, der heute länger arbeiten muss.",
    "The relative clause stands right after its noun, even in the middle of the main clause, with commas on both sides: Der Mann, der dort wohnt, ist Arzt.",
    "Only the dative plural has a special form: die Freunde, denen ich schreibe."
  ],
  examples:[
    {de:"Das ist der Kollege, der neben mir sitzt.", en:"This is the colleague who sits next to me."},
    {de:"Die Wohnung, die wir gestern gesehen haben, ist zu klein.", en:"The flat we saw yesterday is too small."},
    {de:"Der Film, den wir gestern gesehen haben, war langweilig.", en:"The film we saw yesterday was boring."},
    {de:"Die Nachbarn, die über uns wohnen, sind sehr laut.", en:"The neighbours who live above us are very loud."}
  ],
  trap:"The case comes from the relative clause, not from the main clause: ‘der Film, der ich gesehen habe’ ✗ → ‘der Film, den ich gesehen habe’ ✓ (object → accusative). And the verb goes to the end: ‘die Frau, die wohnt hier’ ✗ → ‘die Frau, die hier wohnt’ ✓.",
  table:{head:["Case (role in the relative clause)","masculine","feminine","neuter","plural"],rows:[
    ["Nominativ (who does it)","der","die","das","die"],
    ["Akkusativ (whom / what)","den","die","das","die"],
    ["Dativ (to whom; mit, bei, von …)","dem","der","dem","denen"],
    ["example","der Mann, den ich kenne","die Frau, die hier wohnt","das Buch, das ich lese","die Leute, denen ich helfe"]]}
},
{
  id:"20", title:"Infinitive with zu and um … zu", tag:"Ich habe keine Lust, … zu … / Ich lerne Deutsch, um … zu …",
  intuition:"A zu-infinitive is a mini-clause without its own subject, hanging at the end of the sentence: Ich habe keine Lust, heute zu kochen. The word zu goes right before the infinitive – and for separable verbs it squeezes into the middle: anzurufen, einzukaufen. um … zu adds a purpose and answers the question wozu? The one place where zu is forbidden is after modal verbs: Ich muss arbeiten.",
  rule:[
    "After nouns (Lust / Zeit / Angst haben), after es ist + adjective (wichtig, schwer, schön) and after verbs like vorhaben, anfangen, aufhören, versuchen, vergessen, hoffen: …, zu + infinitive at the end: Ich habe keine Zeit, einkaufen zu gehen. Ich versuche, jeden Tag Deutsch zu lernen.",
    "Separable verbs: zu sits between prefix and verb, written as one word: anzurufen, einzukaufen, aufzustehen, mitzukommen.",
    "Objects and time phrases come before zu + verb; a comma usually separates the zu-group: Ich habe vergessen, meine Mutter anzurufen.",
    "um … zu = in order to (purpose, wozu?): Ich lerne Deutsch, um in Deutschland zu arbeiten. The subject must be the same in both parts.",
    "No zu after modal verbs (Ich muss arbeiten, ich möchte schlafen) and after gehen + activity (Wir gehen schwimmen)."
  ],
  examples:[
    {de:"Ich habe keine Lust, heute Abend zu kochen.", en:"I don’t feel like cooking tonight."},
    {de:"Vergiss nicht, die Tür abzuschließen!", en:"Don’t forget to lock the door!"},
    {de:"Es ist wichtig, jeden Tag ein bisschen zu lernen.", en:"It is important to study a little every day."},
    {de:"Ich spare Geld, um im Sommer nach Italien zu fahren.", en:"I’m saving money in order to go to Italy in the summer."}
  ],
  trap:"zu goes inside a separable verb: ‘Ich habe keine Zeit, zu einkaufen’ ✗ → ‘einzukaufen’ ✓. No zu after modals: ‘Ich muss zu arbeiten’ ✗ → ‘Ich muss arbeiten’ ✓. Purpose needs um: ‘Ich lerne Deutsch, zu arbeiten’ ✗ → ‘um zu arbeiten’ ✓.",
  table:{head:["Opener","Example","Note"],rows:[
    ["Lust / Zeit / Angst haben","Ich habe keine Zeit, einkaufen zu gehen.","noun + zu-infinitive"],
    ["Es ist wichtig / schwer / schön","Es ist schwer, früh aufzustehen.","separable: auf-zu-stehen"],
    ["vorhaben / versuchen / vergessen / anfangen / aufhören","Ich versuche, weniger zu rauchen.","verb + zu-infinitive"],
    ["um … zu (purpose)","Ich gehe zum Markt, um Obst zu kaufen.","wozu? – same subject in both parts"],
    ["modal verbs","Ich muss morgen arbeiten.","no zu"],
    ["gehen + activity","Wir gehen heute schwimmen.","no zu"]]}
},
{
  id:"21", title:"Time clauses: als, wenn, bis, seit", tag:"Als ich klein war … / Wenn ich Zeit habe … / seit ich … / bis …",
  intuition:"English ‘when’ splits into two German words. als is for one single moment or period in the past – it happened once (Als ich 18 war). wenn is for everything that repeats or lies in the present or future (Wenn ich Zeit habe, immer wenn …). seit(dem) means ‘since’ and, because the situation is still going on, German uses the present tense. bis means ‘until’. All of them are subordinating: verb at the end.",
  rule:[
    "als: one single event or period in the past: Als ich 18 war, habe ich den Führerschein gemacht. Als wir in Rom waren, hat es jeden Tag geregnet.",
    "wenn: repeated events (also in the past with immer / jedes Mal) and present / future: Wenn ich nach Hause komme, koche ich. Immer wenn ich Oma besucht habe, gab es Kuchen.",
    "seit / seitdem: since; the situation continues, so the verb is in the present: Seit ich in Berlin wohne, fahre ich Fahrrad. With a noun: seit zwei Jahren.",
    "bis: until, often with a future meaning: Ich warte, bis der Regen aufhört. With a noun: bis morgen, bis 18 Uhr.",
    "bevor = before, nachdem = after: Bevor ich schlafen gehe, lese ich. Nachdem ich gefrühstückt habe, gehe ich zur Arbeit. Sub-clause first → main clause starts with the verb."
  ],
  examples:[
    {de:"Als ich klein war, haben wir in einem Dorf gewohnt.", en:"When I was little, we lived in a village."},
    {de:"Immer wenn ich Zeit habe, besuche ich meine Großeltern.", en:"Whenever I have time, I visit my grandparents."},
    {de:"Seit ich den neuen Job habe, stehe ich um sechs Uhr auf.", en:"Since I’ve had the new job, I get up at six."},
    {de:"Du musst warten, bis die Ampel grün ist.", en:"You have to wait until the traffic light is green."}
  ],
  trap:"One past period needs als: ‘Wenn ich ein Kind war’ ✗ → ‘Als ich ein Kind war’ ✓. seit + something still true needs the present: ‘Seit ich hier gewohnt habe, …’ ✗ → ‘Seit ich hier wohne, …’ ✓.",
  table:{head:["Conjunction","Meaning","When to use it","Example"],rows:[
    ["als","when","one event or period in the past","Als ich 20 war, bin ich umgezogen."],
    ["wenn","when / whenever / if","repeated events, present, future","Wenn ich müde bin, trinke ich Kaffee."],
    ["seit / seitdem","since","started in the past, still true → present tense","Seit ich Deutsch lerne, lese ich mehr."],
    ["bis","until","end point","Warte hier, bis ich zurückkomme."],
    ["bevor","before","earlier / later action","Bevor ich gehe, dusche ich."],
    ["nachdem","after","earlier / later action","Nachdem ich gegessen habe, spüle ich."]]}
},
{
  id:"22", title:"Indefinite pronouns and man", tag:"man, jemand, niemand, etwas, nichts, alle, viele, einige, jeder",
  intuition:"man is the German way of saying ‘people in general’ – English ‘you’, ‘one’ or ‘they’ – and it always behaves like er/sie/es. jemand and niemand are a person you cannot name. etwas and nichts can take an adjective, which then becomes a capitalised noun with -es: etwas Neues, nichts Besonderes. The quantity words alle, viele, einige and jeder behave like articles: they take the der-endings.",
  rule:[
    "man + verb in the 3rd person singular: In Deutschland trennt man den Müll. Hier darf man nicht parken. Wie schreibt man das?",
    "jemand = somebody, niemand = nobody: Hat jemand angerufen? – Nein, niemand. In accusative and dative they can take -en / -em: Ich habe niemanden gesehen. Ich habe mit jemandem gesprochen.",
    "etwas / nichts + adjective as a noun: capital letter and -es: etwas Neues, etwas Schönes, nichts Besonderes, nichts Interessantes; alles + -e: alles Gute!",
    "alle, viele, einige, wenige, manche (plural) take the plural der-endings: alle Kinder, mit allen Kindern, viele Leute, für viele Leute, mit einigen Freunden. jeder (singular) works like dieser: jeder Tag, jeden Tag, in jedem Zimmer, jede Woche.",
    "They can stand alone as pronouns: Alle sind da. Viele kommen später. Jeder weiß das. Keiner / niemand hat Zeit."
  ],
  examples:[
    {de:"Hier darf man nicht parken, das weiß doch jeder.", en:"You’re not allowed to park here, everybody knows that."},
    {de:"Ist jemand zu Hause? – Nein, niemand ist da.", en:"Is anybody at home? – No, nobody is there."},
    {de:"Hast du am Wochenende etwas Schönes gemacht? – Nein, nichts Besonderes.", en:"Did you do anything nice at the weekend? – No, nothing special."},
    {de:"Alle Kollegen kommen zur Party, aber nur einige bringen etwas zu essen mit.", en:"All colleagues are coming to the party, but only some are bringing something to eat."}
  ],
  trap:"man is singular: ‘man haben’ ✗ → ‘man hat’ ✓. Adjectives after etwas/nichts become nouns: ‘etwas neues’ ✗ → ‘etwas Neues’ ✓. ‘nicht jemand’ ✗ → ‘niemand’ ✓.",
  table:{head:["Pronoun","Meaning","Forms / pattern","Example"],rows:[
    ["man","one, people, you","always with verb like er / sie / es","Hier spricht man Deutsch."],
    ["jemand","somebody","Akk. jemanden, Dat. jemandem","Ich warte auf jemanden."],
    ["niemand","nobody","Akk. niemanden, Dat. niemandem","Ich habe niemanden gesehen."],
    ["etwas / nichts","something / nothing","+ adjective with capital letter and -es","etwas Neues, nichts Besonderes"],
    ["alles","everything","+ adjective with capital letter and -e","Alles Gute zum Geburtstag!"],
    ["alle","all (plural)","alle, Dat. allen","alle Kinder, mit allen Kindern"],
    ["viele / einige / wenige","many / some / few","-e, Dat. -en","viele Leute, mit einigen Freunden"],
    ["jeder","each, every (singular)","like dieser: jeder, jede, jedes; jeden, jedem","jeden Tag, in jedem Zimmer"]]}
},
{
  id:"23", title:"Passive in the present", tag:"Das Brot wird gebacken. Hier werden Autos repariert.",
  intuition:"The passive puts the spotlight on what happens to something, not on who does it: ‘Das Brot wird gebacken’ – it does not matter who the baker is. You build it with werden in position 2 and the participle at the end, so it looks like a Perfekt with werden instead of haben. If you want to name the doer, add von + dative. Signs, instructions and descriptions of processes love the passive, and so do exams.",
  rule:[
    "werden (conjugated, position 2) + Partizip II at the end: Das Brot wird gebacken. Die Autos werden repariert.",
    "werden: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. The verb agrees with the thing that is now the subject: Das Auto wird gewaschen. Die Autos werden gewaschen.",
    "The accusative object of the active sentence becomes the nominative subject: Man repariert das Auto. → Das Auto wird repariert. man disappears.",
    "Name the doer with von + Dativ, but only if it matters: Der Brief wird von der Sekretärin geschrieben. Das Formular wird vom Arzt ausgefüllt.",
    "Typical uses: signs and rules (Hier wird Deutsch gesprochen. Der Müll wird montags abgeholt.) and processes (Zuerst wird das Gemüse gewaschen, dann wird es geschnitten.). With a modal: modal + participle + werden: Die Rechnung muss heute bezahlt werden."
  ],
  examples:[
    {de:"In der Bäckerei wird das Brot jeden Morgen frisch gebacken.", en:"At the bakery the bread is baked fresh every morning."},
    {de:"Hier werden Fahrräder repariert.", en:"Bicycles are repaired here."},
    {de:"Das Formular wird vom Arzt ausgefüllt.", en:"The form is filled in by the doctor."},
    {de:"Die Wohnung wird gerade renoviert, deshalb wohnen wir bei Freunden.", en:"The flat is being renovated right now, so we are staying with friends."}
  ],
  trap:"Use werden, not sein, for an action: ‘Das Brot ist gebacken’ ✗ describes a finished state → ‘Das Brot wird gebacken’ ✓. The verb agrees with the plural subject: ‘Die Autos wird repariert’ ✗ → ‘Die Autos werden repariert’ ✓.",
  table:{head:["","Active (man …)","Passive (werden + Partizip II)"],rows:[
    ["singular","Man backt das Brot.","Das Brot wird gebacken."],
    ["plural","Man repariert die Autos.","Die Autos werden repariert."],
    ["with agent (von + Dat.)","Der Lehrer erklärt die Regel.","Die Regel wird vom Lehrer erklärt."],
    ["separable verb","Man füllt das Formular aus.","Das Formular wird ausgefüllt."],
    ["with modal","Man muss die Rechnung bezahlen.","Die Rechnung muss bezahlt werden."],
    ["forms of werden","ich werde / du wirst / er, sie, es wird","wir werden / ihr werdet / sie, Sie werden"]]}
},
{
  id:"24", title:"Word order in the middle field", tag:"Ich fahre morgen nach Berlin. Ich gebe ihm das Buch.",
  intuition:"Between the verb in position 2 and the end of the bracket lies the ‘middle field’. German fills it with a few habits: time before place (morgen nach Berlin), known things before new things, pronouns before nouns, dative before accusative when both are nouns – but accusative first when both are pronouns (es ihm). nicht normally stands near the end, just before the part of the bracket it cannot pass.",
  rule:[
    "Time before place (wann before wo/wohin): Ich fahre morgen nach Berlin. Fuller order: time – manner – place: Ich fahre morgen mit dem Zug nach Berlin.",
    "Two nouns: Dativ (person) before Akkusativ (thing): Ich gebe dem Kind das Buch. Ich schenke meiner Mutter Blumen.",
    "Pronouns come first, right after the verb, before any noun: Ich gebe ihm das Buch. Ich gebe es dem Kind.",
    "Two pronouns: Akkusativ before Dativ: Ich gebe es ihm. Kannst du es mir schicken?",
    "nicht negates the whole sentence from near the end: before the second verb part, a predicate adjective or a place phrase, otherwise at the very end: Ich komme heute nicht. Ich habe das nicht gemacht. Ich bin nicht müde. Ich fahre nicht nach Berlin. To negate one element, put nicht directly before it: nicht heute, sondern morgen."
  ],
  examples:[
    {de:"Ich fahre am Samstag mit dem Zug nach München.", en:"I’m going to Munich by train on Saturday."},
    {de:"Kannst du mir das Formular schicken? – Ja, ich schicke es dir heute.", en:"Can you send me the form? – Yes, I’ll send it to you today."},
    {de:"Ich habe meiner Schwester ein Buch geschenkt.", en:"I gave my sister a book as a present."},
    {de:"Er kommt heute nicht zur Arbeit, weil er krank ist.", en:"He isn’t coming to work today because he is ill."}
  ],
  trap:"Two pronouns: accusative first: ‘Ich gebe ihm es’ ✗ → ‘Ich gebe es ihm’ ✓. Time before place: ‘Ich fahre nach Berlin morgen’ ✗ → ‘Ich fahre morgen nach Berlin’ ✓. nicht does not go before the object: ‘Ich habe nicht den Film gesehen’ means ‘not this film but another one’ → ‘Ich habe den Film nicht gesehen’ ✓.",
  table:{head:["Pattern","Example","Rule"],rows:[
    ["time → place","Ich fahre morgen nach Berlin.","wann before wo / wohin"],
    ["time → manner → place","Ich fahre morgen mit dem Zug nach Berlin.","wann – wie – wohin"],
    ["Dat. noun → Akk. noun","Ich gebe dem Nachbarn den Schlüssel.","person before thing"],
    ["pronoun → noun","Ich gebe ihm den Schlüssel. / Ich gebe ihn dem Nachbarn.","pronoun first, right after the verb"],
    ["Akk. pronoun → Dat. pronoun","Ich gebe ihn ihm. / Ich schicke es dir.","es / ihn before ihm / dir"],
    ["nicht (whole sentence)","Ich komme heute nicht. / Ich habe ihn nicht gesehen.","at the end or before the bracket part"],
    ["nicht (one element)","Ich komme nicht heute, sondern morgen.","directly before the element"]]}
}
];
