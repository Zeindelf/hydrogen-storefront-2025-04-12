import {UAParser} from 'ua-parser-js';

export const uaParser = (userAgent: null | string) => {
  const parserd = new UAParser(userAgent ?? '');
  const result = parserd.getResult();

  return {
    browser: result.browser.name,
    os: result.os.name,
    type: result.device.type,
    ua: result,
    vendor: result.device.vendor,
  };
};
