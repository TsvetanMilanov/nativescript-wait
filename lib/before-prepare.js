'use strict';

module.exports = () => {
  return new Promise((resolve) => {
    if (process.env.SKIP_WAIT) {
      resolve();

      return;
    }

    const interval = setInterval(() => {
      console.log("WAITING...");
    }, 60 * 1000);

    setTimeout(() => {
      clearInterval(interval);
      resolve();
    }, 910 * 1000);
  });
};
