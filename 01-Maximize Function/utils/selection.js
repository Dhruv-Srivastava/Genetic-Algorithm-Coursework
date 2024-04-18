import generateFitness from "./generate-fitness";

export function selection(population, countToBeSelected, objectiveFunction) {
  const fitnessScores = population.map((individual) =>
    generateFitness(objectiveFunction, individual)
  );
  const totalFitnessScore = fitnessScores.reduce(
    (total, current) => total + current,
    0
  );

  const fitnessProbabilities = fitnessScores.map(
    (fitnessScore) => fitnessScore / totalFitnessScore
  );

  let probabilitySum = 0;

  const cumulativeProbabilities = fitnessProbabilities.map((probability) => {
    probabilitySum = probabilitySum + probability;
    return probabilitySum;
  });

  //   Perform Roulette Wheel Selection

  const selected = [];

  for (let i = 1; i <= countToBeSelected; i++) {
    const randomNumber = Math.random();

    for (let j = 0; j < cumulativeProbabilities.length; j++) {
      if (randomNumber <= cumulativeProbabilities[j]) {
        selected.push(population[j]);
        break;
      }
    }
  }

  return selected;
}
