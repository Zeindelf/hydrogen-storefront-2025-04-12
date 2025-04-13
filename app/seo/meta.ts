import type {SeoConfig} from '@shopify/hydrogen';
import type {
  LoaderFunction,
  MetaArgs,
  MetaFunction,
} from '@shopify/remix-oxygen';

import {getSeoMeta} from '@shopify/hydrogen';

/** @refer https://gist.github.com/ryanflorence/ec1849c6d690cfbffcb408ecd633e069 */
export const mergeMeta = <
  Loader extends LoaderFunction | unknown = unknown,
  ParentsLoaders extends Record<string, LoaderFunction | unknown> = Record<
    string,
    unknown
  >,
>(
  leafMetaFn: MetaFunction<Loader, ParentsLoaders>,
): MetaFunction<Loader, ParentsLoaders> => {
  return (arg) => {
    const leafMeta = leafMetaFn(arg);
    return arg.matches.reduceRight((acc, match) => {
      for (const parentMeta of match.meta) {
        const index = acc.findIndex(
          (meta) => JSON.stringify(meta) === JSON.stringify(parentMeta),
        );
        if (index == -1) {
          // Parent meta not found in acc, so add it
          acc.push(parentMeta);
        }
      }
      return acc;
    }, leafMeta);
  };
};

type MatchData =
  | ({
      seo?: SeoConfig;
    } & Record<string, unknown>)
  | undefined;

export function getSeoMetaFromMatches(matches: MetaArgs['matches']) {
  const seoData = [
    ...matches
      .filter((match) => typeof (match.data as MatchData)?.seo !== 'undefined')
      .map((match) => (match.data as MatchData)?.seo),
  ];
  return getSeoMeta(...seoData) || [];
}
