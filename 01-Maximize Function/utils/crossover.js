export function crossover(parent1, parent2) {
  const crossoverPoint = Math.floor(Math.random() * parent1.length);

  const offspring1 =
    parent1.slice(0, crossoverPoint + 1) + parent2.slice(crossoverPoint + 1);
  const offspring2 =
    parent2.slice(0, crossoverPoint + 1) + parent1.slice(crossoverPoint + 1);

  return [offspring1, offspring2];
}
