// Level-specific settings. The same app code serves the A1, A2 and B1 trainers.
window.CONFIG = {
  level: "A2",
  topics: 24,
  storageKey: "a2trainer.v1",
  hero: "Grammatik für die A2-Prüfung",
  examIntro: "Modelled on the telc Deutsch A2 <em>Sprachbausteine</em>: a text with 10 gaps (a/b/c), a dialogue with gaps filled from a word list (telc uses 8 gaps; here 10 from a 15-word bank), then 20 shuffled grammar questions from the bank. No feedback until you finish, as in the real exam.",
  examTiming: "telc allows about 15 minutes for the two Sprachbausteine parts; 20–25 minutes including the grammar mix is realistic.",
  teil1Note: "In telc A2 this part is worth 15 points.",
  pointsNote: "Each gap counts 1.5 points, as in telc Sprachbausteine.",
  passPct: 60,
  siblings: [
    { level: "A1", url: "https://yusser96.github.io/a1-grammatik-trainer/" },
    { level: "A2", url: "https://yusser96.github.io/a2-grammatik-trainer/" },
    { level: "B1", url: "https://yusser96.github.io/b1-grammatik-trainer/" }
  ]
};
