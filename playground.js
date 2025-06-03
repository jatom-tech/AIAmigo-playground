
function classify(text) {
  const redPattern = /\b(\d{6}[-\s]?\d{4})\b|\bcpr\b|\bssn\b|\bsocial security\b|\bpersonnummer\b|\bdni\b|\bn[úu]mero de identidad\b/i;
  const yellowWords = [
    "sygdom", "afskedigelse", "diskrimination", "løn", "illness",
    "dismissal", "discrimination", "salary", "lægeerklæring",
    "sygedagpenge", "fyring", "konflikt", "klage", "sag", "retsag"
  ];

  if (redPattern.test(text)) return "red";
  if (yellowWords.some(w => text.toLowerCase().includes(w))) return "yellow";
  if (text.trim().length > 0) return "green";
  return "unknown";
}

document.getElementById('checkButton').addEventListener('click', () => {
  const prompt = document.getElementById('promptInput').value;
  const status = classify(prompt);

  let output = "";
  if (status === "red") output = "❌ Følsomt indhold (høj risiko)";
  else if (status === "yellow") output = "⚠️ Vær opmærksom (medium risiko)";
  else if (status === "green") output = "✅ OK (ingen risiko)";
  else output = "⚠️ Ukendt (kan ikke klassificeres)";

  document.getElementById('result').innerHTML = `<strong>${output}</strong>`;
});
