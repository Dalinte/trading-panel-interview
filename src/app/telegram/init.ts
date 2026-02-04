import { init } from '@tma.js/sdk-react';

export const initTelegram = () => {
  try {
    init();
  } catch (e) {
    console.log(e);
  }
};
