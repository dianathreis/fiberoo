function fib(): number[] {
  const fibNumbers: number[] = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
  }
  return fibNumbers;
}
console.log(fib());

const numsToStrings = (nums: number[]): string[] => nums.map(num => `${num}`);

console.log(numsToStrings(fib()));

const numEvenNums = (nums: number[]): number => nums.filter(num => num % 2 === 0).length;

console.log(numEvenNums(fib()));
