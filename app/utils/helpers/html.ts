export const stripHtml = (str: string) => str.replace(/(<([^>]+)>)/gi, '');

export const escapeHtml = (text: string) => {
  const map: Record<string, string> = {
    "'": '&#39;',
    '"': '&quot;',
    '/': '&#47;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };

  return text.replace(/[<>&'"\/]/g, (char: string): string => map[char]);
};
