export function generateChromosome(length) {
  let chromosome = "";
  for (let i = 0; i < length; i++) chromosome += Math.random() < 0.5 ? "0" : 1;

  return chromosome;
}
