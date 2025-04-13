import * as React from 'react';

import type {BreadcrumbItem} from '~/seo/breadcrumb';

import {Breadcrumb as UIBreadcrumb} from '~/components/ui/breadcrumb';
import {createBreadcrumbSchema, homeItem} from '~/seo/breadcrumb';
import {JsonSchema} from '~/seo/json-schema';
import {truncate} from '~/utils/helpers';

export const Breadcrumb = ({listItems = []}: {listItems: BreadcrumbItem[]}) => {
  const items = [homeItem, ...listItems];

  const {breadcrumbSchema} = createBreadcrumbSchema({listItems});
  const jsonLd = [breadcrumbSchema];

  return (
    <>
      <JsonSchema jsonLd={jsonLd} />

      <section className="container my-4">
        <UIBreadcrumb.Root>
          <UIBreadcrumb.List>
            {items.map((item, idx) => {
              return idx + 1 < items.length ? (
                <React.Fragment key={item.pathname}>
                  <UIBreadcrumb.Item>
                    <UIBreadcrumb.Link
                      ariaLabel={item.ariaLabel}
                      prefetch="intent"
                      title={item.title}
                      to={item.pathname}
                    >
                      {truncate(item.title, 'description', 25)}
                    </UIBreadcrumb.Link>
                  </UIBreadcrumb.Item>
                  <UIBreadcrumb.Separator />
                </React.Fragment>
              ) : (
                <UIBreadcrumb.Item key={item.pathname}>
                  <UIBreadcrumb.Page>{item.title}</UIBreadcrumb.Page>
                </UIBreadcrumb.Item>
              );
            })}
          </UIBreadcrumb.List>
        </UIBreadcrumb.Root>
      </section>
    </>
  );
};
