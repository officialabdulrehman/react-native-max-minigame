export const generateRandomNumber = (min: number, max: number, exclude: number): number => {
  const number = Math.floor(Math.random() * (max - min)) + min
  return number === exclude ? generateRandomNumber(min, max, exclude) : number
}