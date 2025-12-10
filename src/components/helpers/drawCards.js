export const draw5Tarots = (tarotList) => {
  const drawnTarots = tarotList.slice();
  //double check this Fisher–Yates shuffle

  for (let i = drawnTarots.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [drawnTarots[i], drawnTarots[j]] = [drawnTarots[j], drawnTarots[i]];
  }

  return drawnTarots.slice(0, 5);
};
