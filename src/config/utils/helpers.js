export const generateParamUrl = (endpoint, params = {}) => {
  const url = Object.keys(params).reduce((prev, current) => {
    return prev.replace(new RegExp(`:${current}`, 'g'), params[current]);
  }, endpoint);
  return url || endpoint;
};
