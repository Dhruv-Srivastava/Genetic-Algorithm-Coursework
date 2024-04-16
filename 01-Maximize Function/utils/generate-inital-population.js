import { generateChromosome } from "./generate-chromosome.js";

export function generateInitialPopulation(size, chromosomeLength) {
  const population = [];
  for (let i = 0; i < size; i++)
    population.push(generateChromosome(chromosomeLength));

  return population;
}