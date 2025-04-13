import {createCookie} from '@shopify/remix-oxygen';
import {CSRF, CSRFError} from 'remix-utils/csrf/server';

import {badRequest} from '~/utils/helpers';

const isProduction = process.env.NODE_ENV === 'production';
const secret = process.env.SESSION_SECRET || 's3cr3t';

export const cookie = createCookie('csrf', {
  httpOnly: true,
  path: '/',
  sameSite: 'lax',
  secrets: [secret],
  secure: isProduction,
});

export const csrf = new CSRF({cookie, formDataKey: 'csrf', secret});

export const csrfValidation = async (
  data: FormData | Request,
  headers?: Headers,
) => {
  try {
    await csrf.validate(data as any, headers as any);
  } catch (error) {
    if (error instanceof CSRFError) {
      console.error('CSRF Token: ', error);
      throw badRequest('Invalid request', []);
    }

    console.error('Error: ', error);
    throw new Error((error as Error).message);
  }
};
