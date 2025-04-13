import {stripHtml} from './html';

type TruncateType = 'description' | 'title' | null;

export const truncate = (
  text?: null | string,
  type: TruncateType = 'description',
  length = 155,
) => {
  if (!text) return '';

  const charMap = {description: length, title: 120};
  const rawText = stripHtml(text);

  return rawText.length > length
    ? `${rawText.slice(0, Number(charMap?.[type!]) - 3)}...`
    : text;
};
