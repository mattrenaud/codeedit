export default (len = 6) => {
  const numChunks = Math.ceil(len / 11);
  let fullStr = '';
  for (let i = 0; i < numChunks; i++) {
    fullStr += Math.random()
      .toString(36)
      .slice(2, 15);
  }
  return fullStr.slice(0, len);
};
