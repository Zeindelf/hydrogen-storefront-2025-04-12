import type {ProfileMatch} from 'social-links';

import SocialLinks, {TYPE_DESKTOP} from 'social-links';

const sl = new SocialLinks();

const profileMatches: ProfileMatch[] = [
  {
    group: 3,
    match: '(https?://)?(www.)?linkedin.com/company/({PROFILE_ID})/?',
    pattern: 'https://linkedin.com/company/{PROFILE_ID}',
    type: TYPE_DESKTOP,
  },
];

sl.addProfile('linkedin-company', profileMatches);

export const socialLinks = (socialLink?: string) => {
  if (!socialLink) return false;

  const profile = sl.detectProfile(socialLink);

  if (!sl.isValid(profile, socialLink)) {
    console.warn(
      `[SOCIAL_MEDIA]: the social link "${socialLink}" is not valid`,
    );

    return false;
  }

  const user = sl.getProfileId(profile, socialLink);
  const link = sl.getLink(profile, user);

  return {link, profile, user};
};
