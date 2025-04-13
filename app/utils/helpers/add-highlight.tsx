import {stripHtml} from './html';

export const addHighlight = (text: string, query: string) => {
  const cleanText = stripHtml(text);

  return cleanText.replace(
    new RegExp(query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi'),
    (match) => {
      return `<mark>${match}</mark>`;
    },
  );
};
