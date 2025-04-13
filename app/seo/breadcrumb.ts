import type {BreadcrumbList, WithContext} from 'schema-dts';

/**
About relative url:
"If you paste markup directly into google validator and there is a relative path - validator doesn't know which domain it belongs to and just appends its own domain (https://search.google.com). Once you deploy changes and test with real url you'll see that validator will append correct domain, so you can definitely use relative urls in structured data."
 */
export type BreadcrumbItem = {
  ariaLabel: string;
  pathname: string;
  title: string;
};

interface BreadcrumbSchemaArgs {
  listItems: BreadcrumbItem[];
}

export const homeItem: BreadcrumbItem = {
  ariaLabel: 'Voltar para página principal',
  pathname: '/',
  title: 'Início',
};

export const createBreadcrumbSchema = ({listItems}: BreadcrumbSchemaArgs) => {
  const items = [homeItem, ...listItems];

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      item: item.pathname,
      name: item.title,
      position: idx + 1,
    })),
    numberOfItems: items.length,
  };

  return {breadcrumbSchema};
};
