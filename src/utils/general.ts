export function doNothing () {}

export function insertEveryN <T, U> (n: number, arr: T[], ins: U[]): (T|U)[] {
  return arr.flatMap ((x, i) => i%n ? x : [x, ins[i/n]].filter (x => x))
}
