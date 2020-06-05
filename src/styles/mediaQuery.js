export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  hd: 1280,
  mhd: 1366,
  uhd: 1440,
  fourk: 2560,
};

export const mqMAX = Object.keys(breakpoints).reduce((mq, act) => {
  const modifyObjec = mq;
  modifyObjec[act] = `@media (max-width: ${breakpoints[act]}px)`;
  return modifyObjec;
}, {});
