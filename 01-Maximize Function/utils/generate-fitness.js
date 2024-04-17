export default function generateFitness(objectiveFunction, chromosome) {
  const x = parseInt(chromosome, 2);
  return objectiveFunction(x);
}
