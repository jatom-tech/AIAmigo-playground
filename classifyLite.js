
// classifyLite.js – bruges i AIAmigoLite Playground

export function classifyLite(text) {
  const redPattern = /\b(\d{6}[-\s]?\d{4})\b|\bcpr\b|\bssn\b|\bsocial security\b|\bpersonnummer\b|\bdni\b|\bn[úu]mero de identidad\b/i;
  const yellowWords = [
    "sygdom", "afskedigelse", "diskrimination", "løn", "illness",
    "dismissal", "discrimination", "salary", "lægeerklæring",
    "sygedagpenge", "fyring", "konflikt", "klage", "sag", "retsag"
  ];

  if (redPattern.test(text)) {
    return { score: 0.95, category: "høj risiko", status: "⚠️ Risiko" };
  }
  if (yellowWords.some(word => text.toLowerCase().includes(word))) {
    return { score: 0.6, category: "middel risiko", status: "⚠️ Tjek" };
  }
  if (text.trim().length > 0) {
    return { score: 0.15, category: "ingen risiko", status: "✅ SAFE" };
  }
  return { score: 0.0, category: "ukendt", status: "⚠️ Ukendt" };
}
