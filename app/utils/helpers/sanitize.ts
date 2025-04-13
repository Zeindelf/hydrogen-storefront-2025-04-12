import {escapeHtml, stripHtml} from './html';

export const sanitize = (text: string): string => {
  const regex = /[?&[\]=%]/gi;
  const cleanText = stripHtml(text);
  const escaped = escapeHtml(cleanText);

  return escaped.trim().replace(regex, '');
};
