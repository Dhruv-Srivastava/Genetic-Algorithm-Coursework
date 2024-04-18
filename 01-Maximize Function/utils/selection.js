import generateFitness from "./generate-fitness.js";

export function selection(population, countToBeSelected, objectiveFunction) {
  const fitnessScores = population.map(x => generateFitness(objectiveFunction,x))

  const adjustmentFactor = Math.abs(Math.min(...fitnessScores));

  const adjustedFitnessScores = population.map((individual) =>
    generateFitness(objectiveFunction, individual) + adjustmentFactor
  );

  
  const totalFitnessScore = adjustedFitnessScores.reduce(
    (total, current) => total + current,
    0
  );


  const fitnessProbabilities = adjustedFitnessScores.map(
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
