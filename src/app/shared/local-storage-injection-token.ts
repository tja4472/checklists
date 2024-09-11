import { InjectionToken, PLATFORM_ID, inject } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'window local storage object',
  {
    providedIn: 'root',
    factory: () => {
      return inject(PLATFORM_ID) === 'browser'
        ? window.localStorage
        : // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          ({} as Storage);
    },
  }
);
