export function mutation(individual) {
  const mutationPoint = Math.floor(Math.random() * individual.length);
  const mutatedBit = individual[mutationPoint] === "1" ? "0" : "1";
  const mutatedIndividual =individual.slice(0, mutationPoint) + mutatedBit +individual.slice(mutationPoint + 1);

  return mutatedIndividual;
}

