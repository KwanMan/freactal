export const withStateMiddleware = freactalContext => {
  const { state, effects } = freactalContext;
  const effectsWithState = Object.keys(effects).reduce((memo, key) => {
    const baseEffect = effects[key];
    memo[key] = (...args) => baseEffect(state, ...args);
    return memo;
  }, {});
  return Object.assign({}, freactalContext, {
    effects: effectsWithState
  });
};
