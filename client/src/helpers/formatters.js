export const humanizeDate = rawDate => {
  const date = new Date(rawDate).toDateString()
  return `${date.split(" ")[1]} ${date.split(" ")[2]}, ${date.split(" ")[3]}`
}