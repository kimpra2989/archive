async function delay(sec) {
  return await new Promise((res) => setTimeout(res, sec * 1000))
}
