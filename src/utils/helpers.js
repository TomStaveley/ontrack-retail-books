import store from 'store';
import dumpPlugin from 'store/plugins/dump';

import { BOOKS_DATA_STORAGE_PREFIX } from '../config/store';

export const scrollToAnchor = () => {
  const anchor = document.querySelector('#back-to-top-anchor');
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

export const purgeCache = () => {
  store.addPlugin(dumpPlugin);

  const storageData = store.dump();
  Object.keys(storageData).forEach(key => {
    if (key.startsWith(BOOKS_DATA_STORAGE_PREFIX)) {
      store.remove(key);
    }
  });
};

export const setPageTitle = ({ searchTerm }) => {
  let title = 'OnTrack Retail Technical Test';

  if (searchTerm) {
    title = `Search '${searchTerm}' | ${title}`;
  }

  document.title = title;
};