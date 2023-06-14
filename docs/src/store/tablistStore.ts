import { atom } from 'nanostores';

export const installState = {
  npm: false,
  pnpm: false,
  yarn: false,
};

export const installMethod = atom({
  npm: true,
  pnpm: false,
  yarn: false,
});
