/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type CartApiMoneyFragment = Pick<
  StorefrontAPI.MoneyV2,
  'currencyCode' | 'amount'
>;

export type CartLineFragment = Pick<
  StorefrontAPI.CartLine,
  'id' | 'quantity'
> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
  };
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    'id' | 'availableForSale' | 'requiresShipping' | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >;
    product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>;
    selectedOptions: Array<
      Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
    >;
  };
};

export type CartLineComponentFragment = Pick<
  StorefrontAPI.ComponentizableCartLine,
  'id' | 'quantity'
> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
  };
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    'id' | 'availableForSale' | 'requiresShipping' | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >;
    product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>;
    selectedOptions: Array<
      Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
    >;
  };
};

export type CartApiQueryFragment = Pick<
  StorefrontAPI.Cart,
  'updatedAt' | 'id' | 'checkoutUrl' | 'totalQuantity' | 'note'
> & {
  appliedGiftCards: Array<
    Pick<StorefrontAPI.AppliedGiftCard, 'lastCharacters'> & {
      amountUsed: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    }
  >;
  buyerIdentity: Pick<
    StorefrontAPI.CartBuyerIdentity,
    'countryCode' | 'email' | 'phone'
  > & {
    customer?: StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.Customer,
        'id' | 'email' | 'firstName' | 'lastName' | 'displayName'
      >
    >;
  };
  lines: {
    nodes: Array<
      | (Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
          attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
          cost: {
            totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
            amountPerQuantity: Pick<
              StorefrontAPI.MoneyV2,
              'currencyCode' | 'amount'
            >;
            compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >;
          };
          merchandise: Pick<
            StorefrontAPI.ProductVariant,
            'id' | 'availableForSale' | 'requiresShipping' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
            image?: StorefrontAPI.Maybe<
              Pick<
                StorefrontAPI.Image,
                'id' | 'url' | 'altText' | 'width' | 'height'
              >
            >;
            product: Pick<
              StorefrontAPI.Product,
              'handle' | 'title' | 'id' | 'vendor'
            >;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
          };
        })
      | (Pick<StorefrontAPI.ComponentizableCartLine, 'id' | 'quantity'> & {
          attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
          cost: {
            totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
            amountPerQuantity: Pick<
              StorefrontAPI.MoneyV2,
              'currencyCode' | 'amount'
            >;
            compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >;
          };
          merchandise: Pick<
            StorefrontAPI.ProductVariant,
            'id' | 'availableForSale' | 'requiresShipping' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
            image?: StorefrontAPI.Maybe<
              Pick<
                StorefrontAPI.Image,
                'id' | 'url' | 'altText' | 'width' | 'height'
              >
            >;
            product: Pick<
              StorefrontAPI.Product,
              'handle' | 'title' | 'id' | 'vendor'
            >;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
          };
        })
    >;
  };
  cost: {
    subtotalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    totalDutyAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
    totalTaxAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
    checkoutChargeAmount: Pick<
      StorefrontAPI.MoneyV2,
      'currencyCode' | 'amount'
    >;
  };
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  discountCodes: Array<
    Pick<StorefrontAPI.CartDiscountCode, 'code' | 'applicable'>
  >;
  discountAllocations: Array<{
    discountedAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  }>;
};

export type FilterFragment = Pick<
  StorefrontAPI.Filter,
  'id' | 'label' | 'type'
> & {
  values: Array<
    Pick<StorefrontAPI.FilterValue, 'id' | 'label' | 'count' | 'input'> & {
      swatch?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Swatch, 'color'> & {
          image?: StorefrontAPI.Maybe<
            {__typename: 'MediaImage'} & Pick<
              StorefrontAPI.MediaImage,
              'id' | 'alt' | 'mediaContentType'
            > & {
                image?: StorefrontAPI.Maybe<
                  {__typename: 'Image'} & Pick<
                    StorefrontAPI.Image,
                    'altText' | 'url' | 'width' | 'height'
                  >
                >;
                previewImage?: StorefrontAPI.Maybe<
                  {__typename: 'Image'} & Pick<
                    StorefrontAPI.Image,
                    'altText' | 'url'
                  >
                >;
              }
          >;
        }
      >;
    }
  >;
};

export type GenericFileFragment = Pick<
  StorefrontAPI.GenericFile,
  'id' | 'url' | 'mimeType' | 'originalFileSize'
>;

export type LinkFragment = {
  reference?: StorefrontAPI.Maybe<{
    href?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>;
    target?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>;
    text?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>;
  }>;
};

export type SitemapImageFragment = {
  alt: StorefrontAPI.Image['altText'];
  filepath: StorefrontAPI.Image['url'];
};

type Media_ExternalVideo_Fragment = {__typename: 'ExternalVideo'} & Pick<
  StorefrontAPI.ExternalVideo,
  'alt' | 'embedUrl' | 'host' | 'id' | 'originUrl' | 'mediaContentType'
> & {
    previewImage?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<
        StorefrontAPI.Image,
        'altText' | 'height' | 'id' | 'url' | 'width'
      >
    >;
  };

type Media_MediaImage_Fragment = {__typename: 'MediaImage'} & Pick<
  StorefrontAPI.MediaImage,
  'id' | 'alt' | 'mediaContentType'
> & {
    image?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<
        StorefrontAPI.Image,
        'altText' | 'url' | 'width' | 'height'
      >
    >;
    previewImage?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
    >;
  };

type Media_Model3d_Fragment = {__typename: 'Model3d'} & Pick<
  StorefrontAPI.Model3d,
  'id' | 'alt' | 'mediaContentType'
> & {
    sources: Array<
      {__typename: 'Model3dSource'} & Pick<
        StorefrontAPI.Model3dSource,
        'format' | 'filesize' | 'mimeType' | 'url'
      >
    >;
    previewImage?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
    >;
  };

type Media_Video_Fragment = {__typename: 'Video'} & Pick<
  StorefrontAPI.Video,
  'id' | 'alt' | 'mediaContentType'
> & {
    sources: Array<
      {__typename: 'VideoSource'} & Pick<
        StorefrontAPI.VideoSource,
        'format' | 'mimeType' | 'url'
      >
    >;
    previewImage?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
    >;
  };

export type MediaFragment =
  | Media_ExternalVideo_Fragment
  | Media_MediaImage_Fragment
  | Media_Model3d_Fragment
  | Media_Video_Fragment;

export type MenuFragment = {__typename: 'Menu'} & Pick<
  StorefrontAPI.Menu,
  'id' | 'title'
> & {
    items: Array<
      {__typename: 'MenuItem'} & Pick<
        StorefrontAPI.MenuItem,
        'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
      > & {
          items: Array<
            {__typename: 'MenuItem'} & Pick<
              StorefrontAPI.MenuItem,
              'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
            > & {
                items: Array<
                  {__typename: 'MenuItem'} & Pick<
                    StorefrontAPI.MenuItem,
                    'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
                  > & {
                      resource?: StorefrontAPI.Maybe<
                        | ({__typename: 'Article'} & Pick<
                            StorefrontAPI.Article,
                            'id' | 'title' | 'handle'
                          > & {
                              blog: Pick<StorefrontAPI.Blog, 'handle'>;
                              image?: StorefrontAPI.Maybe<
                                {__typename: 'Image'} & Pick<
                                  StorefrontAPI.Image,
                                  'altText' | 'height' | 'id' | 'url' | 'width'
                                >
                              >;
                            })
                        | ({__typename: 'Blog'} & Pick<
                            StorefrontAPI.Blog,
                            'id' | 'title' | 'handle'
                          > & {
                              articles: {
                                nodes: Array<
                                  {__typename: 'Article'} & Pick<
                                    StorefrontAPI.Article,
                                    'id' | 'title' | 'handle'
                                  > & {
                                      blog: Pick<StorefrontAPI.Blog, 'handle'>;
                                      image?: StorefrontAPI.Maybe<
                                        {__typename: 'Image'} & Pick<
                                          StorefrontAPI.Image,
                                          | 'altText'
                                          | 'height'
                                          | 'id'
                                          | 'url'
                                          | 'width'
                                        >
                                      >;
                                    }
                                >;
                              };
                            })
                        | ({__typename: 'Collection'} & Pick<
                            StorefrontAPI.Collection,
                            'id' | 'title' | 'handle'
                          > & {
                              image?: StorefrontAPI.Maybe<
                                {__typename: 'Image'} & Pick<
                                  StorefrontAPI.Image,
                                  'altText' | 'height' | 'id' | 'url' | 'width'
                                >
                              >;
                            })
                        | ({__typename: 'Page'} & Pick<
                            StorefrontAPI.Page,
                            'id' | 'title' | 'handle'
                          >)
                        | ({__typename: 'Product'} & Pick<
                            StorefrontAPI.Product,
                            'id' | 'title' | 'handle'
                          > & {
                              images: {
                                nodes: Array<
                                  {__typename: 'Image'} & Pick<
                                    StorefrontAPI.Image,
                                    | 'altText'
                                    | 'height'
                                    | 'id'
                                    | 'url'
                                    | 'width'
                                  >
                                >;
                              };
                            })
                        | ({__typename: 'ShopPolicy'} & Pick<
                            StorefrontAPI.ShopPolicy,
                            'id' | 'title' | 'handle'
                          >)
                      >;
                    }
                >;
                resource?: StorefrontAPI.Maybe<
                  | ({__typename: 'Article'} & Pick<
                      StorefrontAPI.Article,
                      'id' | 'title' | 'handle'
                    > & {
                        blog: Pick<StorefrontAPI.Blog, 'handle'>;
                        image?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'altText' | 'height' | 'id' | 'url' | 'width'
                          >
                        >;
                      })
                  | ({__typename: 'Blog'} & Pick<
                      StorefrontAPI.Blog,
                      'id' | 'title' | 'handle'
                    > & {
                        articles: {
                          nodes: Array<
                            {__typename: 'Article'} & Pick<
                              StorefrontAPI.Article,
                              'id' | 'title' | 'handle'
                            > & {
                                blog: Pick<StorefrontAPI.Blog, 'handle'>;
                                image?: StorefrontAPI.Maybe<
                                  {__typename: 'Image'} & Pick<
                                    StorefrontAPI.Image,
                                    | 'altText'
                                    | 'height'
                                    | 'id'
                                    | 'url'
                                    | 'width'
                                  >
                                >;
                              }
                          >;
                        };
                      })
                  | ({__typename: 'Collection'} & Pick<
                      StorefrontAPI.Collection,
                      'id' | 'title' | 'handle'
                    > & {
                        image?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'altText' | 'height' | 'id' | 'url' | 'width'
                          >
                        >;
                      })
                  | ({__typename: 'Page'} & Pick<
                      StorefrontAPI.Page,
                      'id' | 'title' | 'handle'
                    >)
                  | ({__typename: 'Product'} & Pick<
                      StorefrontAPI.Product,
                      'id' | 'title' | 'handle'
                    > & {
                        images: {
                          nodes: Array<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'height' | 'id' | 'url' | 'width'
                            >
                          >;
                        };
                      })
                  | ({__typename: 'ShopPolicy'} & Pick<
                      StorefrontAPI.ShopPolicy,
                      'id' | 'title' | 'handle'
                    >)
                >;
              }
          >;
          resource?: StorefrontAPI.Maybe<
            | ({__typename: 'Article'} & Pick<
                StorefrontAPI.Article,
                'id' | 'title' | 'handle'
              > & {
                  blog: Pick<StorefrontAPI.Blog, 'handle'>;
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                })
            | ({__typename: 'Blog'} & Pick<
                StorefrontAPI.Blog,
                'id' | 'title' | 'handle'
              > & {
                  articles: {
                    nodes: Array<
                      {__typename: 'Article'} & Pick<
                        StorefrontAPI.Article,
                        'id' | 'title' | 'handle'
                      > & {
                          blog: Pick<StorefrontAPI.Blog, 'handle'>;
                          image?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'height' | 'id' | 'url' | 'width'
                            >
                          >;
                        }
                    >;
                  };
                })
            | ({__typename: 'Collection'} & Pick<
                StorefrontAPI.Collection,
                'id' | 'title' | 'handle'
              > & {
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                })
            | ({__typename: 'Page'} & Pick<
                StorefrontAPI.Page,
                'id' | 'title' | 'handle'
              >)
            | ({__typename: 'Product'} & Pick<
                StorefrontAPI.Product,
                'id' | 'title' | 'handle'
              > & {
                  images: {
                    nodes: Array<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'height' | 'id' | 'url' | 'width'
                      >
                    >;
                  };
                })
            | ({__typename: 'ShopPolicy'} & Pick<
                StorefrontAPI.ShopPolicy,
                'id' | 'title' | 'handle'
              >)
          >;
        }
    >;
  };

export type ParentMenuItemFragment = {__typename: 'MenuItem'} & Pick<
  StorefrontAPI.MenuItem,
  'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
> & {
    items: Array<
      {__typename: 'MenuItem'} & Pick<
        StorefrontAPI.MenuItem,
        'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
      > & {
          items: Array<
            {__typename: 'MenuItem'} & Pick<
              StorefrontAPI.MenuItem,
              'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
            > & {
                resource?: StorefrontAPI.Maybe<
                  | ({__typename: 'Article'} & Pick<
                      StorefrontAPI.Article,
                      'id' | 'title' | 'handle'
                    > & {
                        blog: Pick<StorefrontAPI.Blog, 'handle'>;
                        image?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'altText' | 'height' | 'id' | 'url' | 'width'
                          >
                        >;
                      })
                  | ({__typename: 'Blog'} & Pick<
                      StorefrontAPI.Blog,
                      'id' | 'title' | 'handle'
                    > & {
                        articles: {
                          nodes: Array<
                            {__typename: 'Article'} & Pick<
                              StorefrontAPI.Article,
                              'id' | 'title' | 'handle'
                            > & {
                                blog: Pick<StorefrontAPI.Blog, 'handle'>;
                                image?: StorefrontAPI.Maybe<
                                  {__typename: 'Image'} & Pick<
                                    StorefrontAPI.Image,
                                    | 'altText'
                                    | 'height'
                                    | 'id'
                                    | 'url'
                                    | 'width'
                                  >
                                >;
                              }
                          >;
                        };
                      })
                  | ({__typename: 'Collection'} & Pick<
                      StorefrontAPI.Collection,
                      'id' | 'title' | 'handle'
                    > & {
                        image?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'altText' | 'height' | 'id' | 'url' | 'width'
                          >
                        >;
                      })
                  | ({__typename: 'Page'} & Pick<
                      StorefrontAPI.Page,
                      'id' | 'title' | 'handle'
                    >)
                  | ({__typename: 'Product'} & Pick<
                      StorefrontAPI.Product,
                      'id' | 'title' | 'handle'
                    > & {
                        images: {
                          nodes: Array<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'height' | 'id' | 'url' | 'width'
                            >
                          >;
                        };
                      })
                  | ({__typename: 'ShopPolicy'} & Pick<
                      StorefrontAPI.ShopPolicy,
                      'id' | 'title' | 'handle'
                    >)
                >;
              }
          >;
          resource?: StorefrontAPI.Maybe<
            | ({__typename: 'Article'} & Pick<
                StorefrontAPI.Article,
                'id' | 'title' | 'handle'
              > & {
                  blog: Pick<StorefrontAPI.Blog, 'handle'>;
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                })
            | ({__typename: 'Blog'} & Pick<
                StorefrontAPI.Blog,
                'id' | 'title' | 'handle'
              > & {
                  articles: {
                    nodes: Array<
                      {__typename: 'Article'} & Pick<
                        StorefrontAPI.Article,
                        'id' | 'title' | 'handle'
                      > & {
                          blog: Pick<StorefrontAPI.Blog, 'handle'>;
                          image?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'height' | 'id' | 'url' | 'width'
                            >
                          >;
                        }
                    >;
                  };
                })
            | ({__typename: 'Collection'} & Pick<
                StorefrontAPI.Collection,
                'id' | 'title' | 'handle'
              > & {
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                })
            | ({__typename: 'Page'} & Pick<
                StorefrontAPI.Page,
                'id' | 'title' | 'handle'
              >)
            | ({__typename: 'Product'} & Pick<
                StorefrontAPI.Product,
                'id' | 'title' | 'handle'
              > & {
                  images: {
                    nodes: Array<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'height' | 'id' | 'url' | 'width'
                      >
                    >;
                  };
                })
            | ({__typename: 'ShopPolicy'} & Pick<
                StorefrontAPI.ShopPolicy,
                'id' | 'title' | 'handle'
              >)
          >;
        }
    >;
    resource?: StorefrontAPI.Maybe<
      | ({__typename: 'Article'} & Pick<
          StorefrontAPI.Article,
          'id' | 'title' | 'handle'
        > & {
            blog: Pick<StorefrontAPI.Blog, 'handle'>;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Blog'} & Pick<
          StorefrontAPI.Blog,
          'id' | 'title' | 'handle'
        > & {
            articles: {
              nodes: Array<
                {__typename: 'Article'} & Pick<
                  StorefrontAPI.Article,
                  'id' | 'title' | 'handle'
                > & {
                    blog: Pick<StorefrontAPI.Blog, 'handle'>;
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'height' | 'id' | 'url' | 'width'
                      >
                    >;
                  }
              >;
            };
          })
      | ({__typename: 'Collection'} & Pick<
          StorefrontAPI.Collection,
          'id' | 'title' | 'handle'
        > & {
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Page'} & Pick<
          StorefrontAPI.Page,
          'id' | 'title' | 'handle'
        >)
      | ({__typename: 'Product'} & Pick<
          StorefrontAPI.Product,
          'id' | 'title' | 'handle'
        > & {
            images: {
              nodes: Array<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'height' | 'id' | 'url' | 'width'
                >
              >;
            };
          })
      | ({__typename: 'ShopPolicy'} & Pick<
          StorefrontAPI.ShopPolicy,
          'id' | 'title' | 'handle'
        >)
    >;
  };

export type ChildMenuItemFragment = {__typename: 'MenuItem'} & Pick<
  StorefrontAPI.MenuItem,
  'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
> & {
    items: Array<
      {__typename: 'MenuItem'} & Pick<
        StorefrontAPI.MenuItem,
        'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
      > & {
          resource?: StorefrontAPI.Maybe<
            | ({__typename: 'Article'} & Pick<
                StorefrontAPI.Article,
                'id' | 'title' | 'handle'
              > & {
                  blog: Pick<StorefrontAPI.Blog, 'handle'>;
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                })
            | ({__typename: 'Blog'} & Pick<
                StorefrontAPI.Blog,
                'id' | 'title' | 'handle'
              > & {
                  articles: {
                    nodes: Array<
                      {__typename: 'Article'} & Pick<
                        StorefrontAPI.Article,
                        'id' | 'title' | 'handle'
                      > & {
                          blog: Pick<StorefrontAPI.Blog, 'handle'>;
                          image?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'height' | 'id' | 'url' | 'width'
                            >
                          >;
                        }
                    >;
                  };
                })
            | ({__typename: 'Collection'} & Pick<
                StorefrontAPI.Collection,
                'id' | 'title' | 'handle'
              > & {
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                })
            | ({__typename: 'Page'} & Pick<
                StorefrontAPI.Page,
                'id' | 'title' | 'handle'
              >)
            | ({__typename: 'Product'} & Pick<
                StorefrontAPI.Product,
                'id' | 'title' | 'handle'
              > & {
                  images: {
                    nodes: Array<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'height' | 'id' | 'url' | 'width'
                      >
                    >;
                  };
                })
            | ({__typename: 'ShopPolicy'} & Pick<
                StorefrontAPI.ShopPolicy,
                'id' | 'title' | 'handle'
              >)
          >;
        }
    >;
    resource?: StorefrontAPI.Maybe<
      | ({__typename: 'Article'} & Pick<
          StorefrontAPI.Article,
          'id' | 'title' | 'handle'
        > & {
            blog: Pick<StorefrontAPI.Blog, 'handle'>;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Blog'} & Pick<
          StorefrontAPI.Blog,
          'id' | 'title' | 'handle'
        > & {
            articles: {
              nodes: Array<
                {__typename: 'Article'} & Pick<
                  StorefrontAPI.Article,
                  'id' | 'title' | 'handle'
                > & {
                    blog: Pick<StorefrontAPI.Blog, 'handle'>;
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'height' | 'id' | 'url' | 'width'
                      >
                    >;
                  }
              >;
            };
          })
      | ({__typename: 'Collection'} & Pick<
          StorefrontAPI.Collection,
          'id' | 'title' | 'handle'
        > & {
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Page'} & Pick<
          StorefrontAPI.Page,
          'id' | 'title' | 'handle'
        >)
      | ({__typename: 'Product'} & Pick<
          StorefrontAPI.Product,
          'id' | 'title' | 'handle'
        > & {
            images: {
              nodes: Array<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'height' | 'id' | 'url' | 'width'
                >
              >;
            };
          })
      | ({__typename: 'ShopPolicy'} & Pick<
          StorefrontAPI.ShopPolicy,
          'id' | 'title' | 'handle'
        >)
    >;
  };

export type SubChildMenuItemFragment = {__typename: 'MenuItem'} & Pick<
  StorefrontAPI.MenuItem,
  'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
> & {
    resource?: StorefrontAPI.Maybe<
      | ({__typename: 'Article'} & Pick<
          StorefrontAPI.Article,
          'id' | 'title' | 'handle'
        > & {
            blog: Pick<StorefrontAPI.Blog, 'handle'>;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Blog'} & Pick<
          StorefrontAPI.Blog,
          'id' | 'title' | 'handle'
        > & {
            articles: {
              nodes: Array<
                {__typename: 'Article'} & Pick<
                  StorefrontAPI.Article,
                  'id' | 'title' | 'handle'
                > & {
                    blog: Pick<StorefrontAPI.Blog, 'handle'>;
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'height' | 'id' | 'url' | 'width'
                      >
                    >;
                  }
              >;
            };
          })
      | ({__typename: 'Collection'} & Pick<
          StorefrontAPI.Collection,
          'id' | 'title' | 'handle'
        > & {
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Page'} & Pick<
          StorefrontAPI.Page,
          'id' | 'title' | 'handle'
        >)
      | ({__typename: 'Product'} & Pick<
          StorefrontAPI.Product,
          'id' | 'title' | 'handle'
        > & {
            images: {
              nodes: Array<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'height' | 'id' | 'url' | 'width'
                >
              >;
            };
          })
      | ({__typename: 'ShopPolicy'} & Pick<
          StorefrontAPI.ShopPolicy,
          'id' | 'title' | 'handle'
        >)
    >;
  };

export type MenuItemFragment = {__typename: 'MenuItem'} & Pick<
  StorefrontAPI.MenuItem,
  'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
> & {
    resource?: StorefrontAPI.Maybe<
      | ({__typename: 'Article'} & Pick<
          StorefrontAPI.Article,
          'id' | 'title' | 'handle'
        > & {
            blog: Pick<StorefrontAPI.Blog, 'handle'>;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Blog'} & Pick<
          StorefrontAPI.Blog,
          'id' | 'title' | 'handle'
        > & {
            articles: {
              nodes: Array<
                {__typename: 'Article'} & Pick<
                  StorefrontAPI.Article,
                  'id' | 'title' | 'handle'
                > & {
                    blog: Pick<StorefrontAPI.Blog, 'handle'>;
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'height' | 'id' | 'url' | 'width'
                      >
                    >;
                  }
              >;
            };
          })
      | ({__typename: 'Collection'} & Pick<
          StorefrontAPI.Collection,
          'id' | 'title' | 'handle'
        > & {
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          })
      | ({__typename: 'Page'} & Pick<
          StorefrontAPI.Page,
          'id' | 'title' | 'handle'
        >)
      | ({__typename: 'Product'} & Pick<
          StorefrontAPI.Product,
          'id' | 'title' | 'handle'
        > & {
            images: {
              nodes: Array<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'height' | 'id' | 'url' | 'width'
                >
              >;
            };
          })
      | ({__typename: 'ShopPolicy'} & Pick<
          StorefrontAPI.ShopPolicy,
          'id' | 'title' | 'handle'
        >)
    >;
  };

export type MenuImageFragment = {__typename: 'Image'} & Pick<
  StorefrontAPI.Image,
  'altText' | 'height' | 'id' | 'url' | 'width'
>;

export type MenuCollectionFragment = {__typename: 'Collection'} & Pick<
  StorefrontAPI.Collection,
  'id' | 'title' | 'handle'
> & {
    image?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<
        StorefrontAPI.Image,
        'altText' | 'height' | 'id' | 'url' | 'width'
      >
    >;
  };

export type MenuProductFragment = {__typename: 'Product'} & Pick<
  StorefrontAPI.Product,
  'id' | 'title' | 'handle'
> & {
    images: {
      nodes: Array<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'altText' | 'height' | 'id' | 'url' | 'width'
        >
      >;
    };
  };

export type MenuBlogFragment = {__typename: 'Blog'} & Pick<
  StorefrontAPI.Blog,
  'id' | 'title' | 'handle'
> & {
    articles: {
      nodes: Array<
        {__typename: 'Article'} & Pick<
          StorefrontAPI.Article,
          'id' | 'title' | 'handle'
        > & {
            blog: Pick<StorefrontAPI.Blog, 'handle'>;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          }
      >;
    };
  };

export type MenuArticleFragment = {__typename: 'Article'} & Pick<
  StorefrontAPI.Article,
  'id' | 'title' | 'handle'
> & {
    blog: Pick<StorefrontAPI.Blog, 'handle'>;
    image?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<
        StorefrontAPI.Image,
        'altText' | 'height' | 'id' | 'url' | 'width'
      >
    >;
  };

export type MenuPageFragment = {__typename: 'Page'} & Pick<
  StorefrontAPI.Page,
  'id' | 'title' | 'handle'
>;

export type MenuShopPolicyFragment = {__typename: 'ShopPolicy'} & Pick<
  StorefrontAPI.ShopPolicy,
  'id' | 'title' | 'handle'
>;

type MenuItemResource_Article_Fragment = {__typename: 'Article'} & Pick<
  StorefrontAPI.Article,
  'id' | 'title' | 'handle'
> & {
    blog: Pick<StorefrontAPI.Blog, 'handle'>;
    image?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<
        StorefrontAPI.Image,
        'altText' | 'height' | 'id' | 'url' | 'width'
      >
    >;
  };

type MenuItemResource_Blog_Fragment = {__typename: 'Blog'} & Pick<
  StorefrontAPI.Blog,
  'id' | 'title' | 'handle'
> & {
    articles: {
      nodes: Array<
        {__typename: 'Article'} & Pick<
          StorefrontAPI.Article,
          'id' | 'title' | 'handle'
        > & {
            blog: Pick<StorefrontAPI.Blog, 'handle'>;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          }
      >;
    };
  };

type MenuItemResource_Collection_Fragment = {__typename: 'Collection'} & Pick<
  StorefrontAPI.Collection,
  'id' | 'title' | 'handle'
> & {
    image?: StorefrontAPI.Maybe<
      {__typename: 'Image'} & Pick<
        StorefrontAPI.Image,
        'altText' | 'height' | 'id' | 'url' | 'width'
      >
    >;
  };

type MenuItemResource_Metaobject_Fragment = {};

type MenuItemResource_Page_Fragment = {__typename: 'Page'} & Pick<
  StorefrontAPI.Page,
  'id' | 'title' | 'handle'
>;

type MenuItemResource_Product_Fragment = {__typename: 'Product'} & Pick<
  StorefrontAPI.Product,
  'id' | 'title' | 'handle'
> & {
    images: {
      nodes: Array<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'altText' | 'height' | 'id' | 'url' | 'width'
        >
      >;
    };
  };

type MenuItemResource_ShopPolicy_Fragment = {__typename: 'ShopPolicy'} & Pick<
  StorefrontAPI.ShopPolicy,
  'id' | 'title' | 'handle'
>;

export type MenuItemResourceFragment =
  | MenuItemResource_Article_Fragment
  | MenuItemResource_Blog_Fragment
  | MenuItemResource_Collection_Fragment
  | MenuItemResource_Metaobject_Fragment
  | MenuItemResource_Page_Fragment
  | MenuItemResource_Product_Fragment
  | MenuItemResource_ShopPolicy_Fragment;

export type MetafieldFragment = Pick<
  StorefrontAPI.Metafield,
  'id' | 'key' | 'type' | 'value'
> & {
  reference?: StorefrontAPI.Maybe<
    | Pick<
        StorefrontAPI.GenericFile,
        'id' | 'url' | 'mimeType' | 'originalFileSize'
      >
    | ({__typename: 'MediaImage'} & Pick<
        StorefrontAPI.MediaImage,
        'id' | 'alt' | 'mediaContentType'
      > & {
          image?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<
              StorefrontAPI.Image,
              'altText' | 'url' | 'width' | 'height'
            >
          >;
          previewImage?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
          >;
        })
    | ({__typename: 'Model3d'} & Pick<
        StorefrontAPI.Model3d,
        'id' | 'alt' | 'mediaContentType'
      > & {
          sources: Array<
            {__typename: 'Model3dSource'} & Pick<
              StorefrontAPI.Model3dSource,
              'format' | 'filesize' | 'mimeType' | 'url'
            >
          >;
          previewImage?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
          >;
        })
    | ({__typename: 'Video'} & Pick<
        StorefrontAPI.Video,
        'id' | 'alt' | 'mediaContentType'
      > & {
          sources: Array<
            {__typename: 'VideoSource'} & Pick<
              StorefrontAPI.VideoSource,
              'format' | 'mimeType' | 'url'
            >
          >;
          previewImage?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
          >;
        })
  >;
};

export type MetaobjectFieldFragment = Pick<
  StorefrontAPI.MetaobjectField,
  'key' | 'type' | 'value'
> & {
  reference?: StorefrontAPI.Maybe<
    | Pick<
        StorefrontAPI.GenericFile,
        'id' | 'url' | 'mimeType' | 'originalFileSize'
      >
    | ({__typename: 'MediaImage'} & Pick<
        StorefrontAPI.MediaImage,
        'id' | 'alt' | 'mediaContentType'
      > & {
          image?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<
              StorefrontAPI.Image,
              'altText' | 'url' | 'width' | 'height'
            >
          >;
          previewImage?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
          >;
        })
    | ({__typename: 'Model3d'} & Pick<
        StorefrontAPI.Model3d,
        'id' | 'alt' | 'mediaContentType'
      > & {
          sources: Array<
            {__typename: 'Model3dSource'} & Pick<
              StorefrontAPI.Model3dSource,
              'format' | 'filesize' | 'mimeType' | 'url'
            >
          >;
          previewImage?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
          >;
        })
    | ({__typename: 'Video'} & Pick<
        StorefrontAPI.Video,
        'id' | 'alt' | 'mediaContentType'
      > & {
          sources: Array<
            {__typename: 'VideoSource'} & Pick<
              StorefrontAPI.VideoSource,
              'format' | 'mimeType' | 'url'
            >
          >;
          previewImage?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<StorefrontAPI.Image, 'altText' | 'url'>
          >;
        })
  >;
};

export type PageInfoFragment = Pick<
  StorefrontAPI.PageInfo,
  'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'
>;

export type PriceRangeFragment = {
  priceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
  compareAtPriceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
};

export type ProductItemFragment = Pick<
  StorefrontAPI.Product,
  'id' | 'handle' | 'title' | 'tags' | 'vendor' | 'createdAt' | 'updatedAt'
> & {
  featuredImage?: StorefrontAPI.Maybe<
    {__typename: 'Image'} & Pick<
      StorefrontAPI.Image,
      'altText' | 'height' | 'id' | 'url' | 'width'
    >
  >;
  variants: {
    nodes: Array<
      Pick<
        StorefrontAPI.ProductVariant,
        | 'id'
        | 'sku'
        | 'title'
        | 'barcode'
        | 'availableForSale'
        | 'quantityAvailable'
      > & {
        compareAtPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'id' | 'url' | 'width'
          >
        >;
        price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
        selectedOptions: Array<
          Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
        >;
        unitPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
      }
    >;
  };
  selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.ProductVariant,
      | 'id'
      | 'sku'
      | 'title'
      | 'barcode'
      | 'availableForSale'
      | 'quantityAvailable'
    > & {
      compareAtPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      image?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'altText' | 'height' | 'id' | 'url' | 'width'
        >
      >;
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
      selectedOptions: Array<
        Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
      >;
      unitPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
    }
  >;
  adjacentVariants: Array<
    Pick<
      StorefrontAPI.ProductVariant,
      | 'id'
      | 'sku'
      | 'title'
      | 'barcode'
      | 'availableForSale'
      | 'quantityAvailable'
    > & {
      compareAtPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      image?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'altText' | 'height' | 'id' | 'url' | 'width'
        >
      >;
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
      selectedOptions: Array<
        Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
      >;
      unitPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
    }
  >;
  priceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
  compareAtPriceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
};

export type ProductVariantFragment = Pick<
  StorefrontAPI.ProductVariant,
  'id' | 'sku' | 'title' | 'barcode' | 'availableForSale' | 'quantityAvailable'
> & {
  compareAtPrice?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  image?: StorefrontAPI.Maybe<
    {__typename: 'Image'} & Pick<
      StorefrontAPI.Image,
      'altText' | 'height' | 'id' | 'url' | 'width'
    >
  >;
  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
  selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>;
  unitPrice?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
};

export type BlogFragment = Pick<
  StorefrontAPI.Blog,
  'id' | 'handle' | 'title'
> & {
  blogSeo?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Seo, 'title' | 'description'>
  >;
  blogImage?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
      reference?: StorefrontAPI.Maybe<
        | Pick<
            StorefrontAPI.GenericFile,
            'id' | 'url' | 'mimeType' | 'originalFileSize'
          >
        | ({__typename: 'MediaImage'} & Pick<
            StorefrontAPI.MediaImage,
            'id' | 'alt' | 'mediaContentType'
          > & {
              image?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url' | 'width' | 'height'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
        | ({__typename: 'Model3d'} & Pick<
            StorefrontAPI.Model3d,
            'id' | 'alt' | 'mediaContentType'
          > & {
              sources: Array<
                {__typename: 'Model3dSource'} & Pick<
                  StorefrontAPI.Model3dSource,
                  'format' | 'filesize' | 'mimeType' | 'url'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
        | ({__typename: 'Video'} & Pick<
            StorefrontAPI.Video,
            'id' | 'alt' | 'mediaContentType'
          > & {
              sources: Array<
                {__typename: 'VideoSource'} & Pick<
                  StorefrontAPI.VideoSource,
                  'format' | 'mimeType' | 'url'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
      >;
    }
  >;
  blogDescription?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
      reference?: StorefrontAPI.Maybe<
        | Pick<
            StorefrontAPI.GenericFile,
            'id' | 'url' | 'mimeType' | 'originalFileSize'
          >
        | ({__typename: 'MediaImage'} & Pick<
            StorefrontAPI.MediaImage,
            'id' | 'alt' | 'mediaContentType'
          > & {
              image?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url' | 'width' | 'height'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
        | ({__typename: 'Model3d'} & Pick<
            StorefrontAPI.Model3d,
            'id' | 'alt' | 'mediaContentType'
          > & {
              sources: Array<
                {__typename: 'Model3dSource'} & Pick<
                  StorefrontAPI.Model3dSource,
                  'format' | 'filesize' | 'mimeType' | 'url'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
        | ({__typename: 'Video'} & Pick<
            StorefrontAPI.Video,
            'id' | 'alt' | 'mediaContentType'
          > & {
              sources: Array<
                {__typename: 'VideoSource'} & Pick<
                  StorefrontAPI.VideoSource,
                  'format' | 'mimeType' | 'url'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
      >;
    }
  >;
};

export type ArticleAuthorFragment = Pick<
  StorefrontAPI.ArticleAuthor,
  'name' | 'email' | 'firstName' | 'lastName' | 'bio'
>;

export type ArticleCommentFragment = Pick<
  StorefrontAPI.Comment,
  'id' | 'content' | 'contentHtml'
> & {author: Pick<StorefrontAPI.CommentAuthor, 'email' | 'name'>};

export type ArticleItemFragment = Pick<
  StorefrontAPI.Article,
  | 'id'
  | 'handle'
  | 'title'
  | 'tags'
  | 'excerpt'
  | 'contentHtml'
  | 'excerptHtml'
  | 'publishedAt'
  | 'trackingParameters'
> & {
  blog: Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'>;
  image?: StorefrontAPI.Maybe<
    {__typename: 'Image'} & Pick<
      StorefrontAPI.Image,
      'altText' | 'height' | 'id' | 'url' | 'width'
    >
  >;
  author?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.ArticleAuthor,
      'name' | 'email' | 'firstName' | 'lastName' | 'bio'
    >
  >;
  articleSeo?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Seo, 'title' | 'description'>
  >;
  countComments: {nodes: Array<{__typename: 'Comment'}>};
};

export type ShopMediaImageFragment = Pick<StorefrontAPI.MediaImage, 'id'> & {
  image?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Image, 'altText' | 'height' | 'id' | 'url' | 'width'>
  >;
};

export type ShopQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type ShopQuery = {
  shop: Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
    primaryDomain: Pick<StorefrontAPI.Domain, 'host' | 'url'>;
    brand?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Brand, 'shortDescription' | 'slogan'> & {
        logo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MediaImage, 'id'> & {
            image?: StorefrontAPI.Maybe<
              Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          }
        >;
        coverImage?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MediaImage, 'id'> & {
            image?: StorefrontAPI.Maybe<
              Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
          }
        >;
      }
    >;
    paymentSettings: Pick<
      StorefrontAPI.PaymentSettings,
      'countryCode' | 'currencyCode'
    >;
  };
};

export type LocationQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type LocationQuery = {
  localization: {
    country: Pick<StorefrontAPI.Country, 'isoCode' | 'name' | 'unitSystem'> & {
      currency: Pick<StorefrontAPI.Currency, 'isoCode' | 'name' | 'symbol'>;
    };
    language: Pick<StorefrontAPI.Language, 'endonymName' | 'isoCode' | 'name'>;
    market: Pick<StorefrontAPI.Market, 'handle' | 'id'>;
  };
};

export type MenuQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type MenuQuery = {
  menu?: StorefrontAPI.Maybe<
    {__typename: 'Menu'} & Pick<StorefrontAPI.Menu, 'id' | 'title'> & {
        items: Array<
          {__typename: 'MenuItem'} & Pick<
            StorefrontAPI.MenuItem,
            'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
          > & {
              items: Array<
                {__typename: 'MenuItem'} & Pick<
                  StorefrontAPI.MenuItem,
                  'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
                > & {
                    items: Array<
                      {__typename: 'MenuItem'} & Pick<
                        StorefrontAPI.MenuItem,
                        'id' | 'title' | 'type' | 'url' | 'tags' | 'resourceId'
                      > & {
                          resource?: StorefrontAPI.Maybe<
                            | ({__typename: 'Article'} & Pick<
                                StorefrontAPI.Article,
                                'id' | 'title' | 'handle'
                              > & {
                                  blog: Pick<StorefrontAPI.Blog, 'handle'>;
                                  image?: StorefrontAPI.Maybe<
                                    {__typename: 'Image'} & Pick<
                                      StorefrontAPI.Image,
                                      | 'altText'
                                      | 'height'
                                      | 'id'
                                      | 'url'
                                      | 'width'
                                    >
                                  >;
                                })
                            | ({__typename: 'Blog'} & Pick<
                                StorefrontAPI.Blog,
                                'id' | 'title' | 'handle'
                              > & {
                                  articles: {
                                    nodes: Array<
                                      {__typename: 'Article'} & Pick<
                                        StorefrontAPI.Article,
                                        'id' | 'title' | 'handle'
                                      > & {
                                          blog: Pick<
                                            StorefrontAPI.Blog,
                                            'handle'
                                          >;
                                          image?: StorefrontAPI.Maybe<
                                            {__typename: 'Image'} & Pick<
                                              StorefrontAPI.Image,
                                              | 'altText'
                                              | 'height'
                                              | 'id'
                                              | 'url'
                                              | 'width'
                                            >
                                          >;
                                        }
                                    >;
                                  };
                                })
                            | ({__typename: 'Collection'} & Pick<
                                StorefrontAPI.Collection,
                                'id' | 'title' | 'handle'
                              > & {
                                  image?: StorefrontAPI.Maybe<
                                    {__typename: 'Image'} & Pick<
                                      StorefrontAPI.Image,
                                      | 'altText'
                                      | 'height'
                                      | 'id'
                                      | 'url'
                                      | 'width'
                                    >
                                  >;
                                })
                            | ({__typename: 'Page'} & Pick<
                                StorefrontAPI.Page,
                                'id' | 'title' | 'handle'
                              >)
                            | ({__typename: 'Product'} & Pick<
                                StorefrontAPI.Product,
                                'id' | 'title' | 'handle'
                              > & {
                                  images: {
                                    nodes: Array<
                                      {__typename: 'Image'} & Pick<
                                        StorefrontAPI.Image,
                                        | 'altText'
                                        | 'height'
                                        | 'id'
                                        | 'url'
                                        | 'width'
                                      >
                                    >;
                                  };
                                })
                            | ({__typename: 'ShopPolicy'} & Pick<
                                StorefrontAPI.ShopPolicy,
                                'id' | 'title' | 'handle'
                              >)
                          >;
                        }
                    >;
                    resource?: StorefrontAPI.Maybe<
                      | ({__typename: 'Article'} & Pick<
                          StorefrontAPI.Article,
                          'id' | 'title' | 'handle'
                        > & {
                            blog: Pick<StorefrontAPI.Blog, 'handle'>;
                            image?: StorefrontAPI.Maybe<
                              {__typename: 'Image'} & Pick<
                                StorefrontAPI.Image,
                                'altText' | 'height' | 'id' | 'url' | 'width'
                              >
                            >;
                          })
                      | ({__typename: 'Blog'} & Pick<
                          StorefrontAPI.Blog,
                          'id' | 'title' | 'handle'
                        > & {
                            articles: {
                              nodes: Array<
                                {__typename: 'Article'} & Pick<
                                  StorefrontAPI.Article,
                                  'id' | 'title' | 'handle'
                                > & {
                                    blog: Pick<StorefrontAPI.Blog, 'handle'>;
                                    image?: StorefrontAPI.Maybe<
                                      {__typename: 'Image'} & Pick<
                                        StorefrontAPI.Image,
                                        | 'altText'
                                        | 'height'
                                        | 'id'
                                        | 'url'
                                        | 'width'
                                      >
                                    >;
                                  }
                              >;
                            };
                          })
                      | ({__typename: 'Collection'} & Pick<
                          StorefrontAPI.Collection,
                          'id' | 'title' | 'handle'
                        > & {
                            image?: StorefrontAPI.Maybe<
                              {__typename: 'Image'} & Pick<
                                StorefrontAPI.Image,
                                'altText' | 'height' | 'id' | 'url' | 'width'
                              >
                            >;
                          })
                      | ({__typename: 'Page'} & Pick<
                          StorefrontAPI.Page,
                          'id' | 'title' | 'handle'
                        >)
                      | ({__typename: 'Product'} & Pick<
                          StorefrontAPI.Product,
                          'id' | 'title' | 'handle'
                        > & {
                            images: {
                              nodes: Array<
                                {__typename: 'Image'} & Pick<
                                  StorefrontAPI.Image,
                                  'altText' | 'height' | 'id' | 'url' | 'width'
                                >
                              >;
                            };
                          })
                      | ({__typename: 'ShopPolicy'} & Pick<
                          StorefrontAPI.ShopPolicy,
                          'id' | 'title' | 'handle'
                        >)
                    >;
                  }
              >;
              resource?: StorefrontAPI.Maybe<
                | ({__typename: 'Article'} & Pick<
                    StorefrontAPI.Article,
                    'id' | 'title' | 'handle'
                  > & {
                      blog: Pick<StorefrontAPI.Blog, 'handle'>;
                      image?: StorefrontAPI.Maybe<
                        {__typename: 'Image'} & Pick<
                          StorefrontAPI.Image,
                          'altText' | 'height' | 'id' | 'url' | 'width'
                        >
                      >;
                    })
                | ({__typename: 'Blog'} & Pick<
                    StorefrontAPI.Blog,
                    'id' | 'title' | 'handle'
                  > & {
                      articles: {
                        nodes: Array<
                          {__typename: 'Article'} & Pick<
                            StorefrontAPI.Article,
                            'id' | 'title' | 'handle'
                          > & {
                              blog: Pick<StorefrontAPI.Blog, 'handle'>;
                              image?: StorefrontAPI.Maybe<
                                {__typename: 'Image'} & Pick<
                                  StorefrontAPI.Image,
                                  'altText' | 'height' | 'id' | 'url' | 'width'
                                >
                              >;
                            }
                        >;
                      };
                    })
                | ({__typename: 'Collection'} & Pick<
                    StorefrontAPI.Collection,
                    'id' | 'title' | 'handle'
                  > & {
                      image?: StorefrontAPI.Maybe<
                        {__typename: 'Image'} & Pick<
                          StorefrontAPI.Image,
                          'altText' | 'height' | 'id' | 'url' | 'width'
                        >
                      >;
                    })
                | ({__typename: 'Page'} & Pick<
                    StorefrontAPI.Page,
                    'id' | 'title' | 'handle'
                  >)
                | ({__typename: 'Product'} & Pick<
                    StorefrontAPI.Product,
                    'id' | 'title' | 'handle'
                  > & {
                      images: {
                        nodes: Array<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'altText' | 'height' | 'id' | 'url' | 'width'
                          >
                        >;
                      };
                    })
                | ({__typename: 'ShopPolicy'} & Pick<
                    StorefrontAPI.ShopPolicy,
                    'id' | 'title' | 'handle'
                  >)
              >;
            }
        >;
      }
  >;
};

export type ArticlesQueryVariables = StorefrontAPI.Exact<{
  query: StorefrontAPI.Scalars['String']['input'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  sortKey?: StorefrontAPI.InputMaybe<StorefrontAPI.ArticleSortKeys>;
  reverse?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Boolean']['input']>;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type ArticlesQuery = {
  articles: {
    nodes: Array<
      Pick<
        StorefrontAPI.Article,
        | 'id'
        | 'handle'
        | 'title'
        | 'tags'
        | 'excerpt'
        | 'contentHtml'
        | 'excerptHtml'
        | 'publishedAt'
        | 'trackingParameters'
      > & {
        blog: Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'>;
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'id' | 'url' | 'width'
          >
        >;
        author?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.ArticleAuthor,
            'name' | 'email' | 'firstName' | 'lastName' | 'bio'
          >
        >;
        articleSeo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Seo, 'title' | 'description'>
        >;
        countComments: {nodes: Array<{__typename: 'Comment'}>};
      }
    >;
    pageInfo: Pick<
      StorefrontAPI.PageInfo,
      'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'
    >;
  };
};

export type ArticleQueryVariables = StorefrontAPI.Exact<{
  articleHandle: StorefrontAPI.Scalars['String']['input'];
  blogHandle: StorefrontAPI.Scalars['String']['input'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  reverse?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Boolean']['input']>;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type ArticleQuery = {
  blog?: StorefrontAPI.Maybe<{
    articleByHandle?: StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.Article,
        | 'id'
        | 'handle'
        | 'title'
        | 'tags'
        | 'excerpt'
        | 'contentHtml'
        | 'excerptHtml'
        | 'publishedAt'
        | 'trackingParameters'
      > & {
        comments: {
          nodes: Array<
            Pick<StorefrontAPI.Comment, 'id' | 'content' | 'contentHtml'> & {
              author: Pick<StorefrontAPI.CommentAuthor, 'email' | 'name'>;
            }
          >;
          pageInfo: Pick<
            StorefrontAPI.PageInfo,
            'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'
          >;
        };
        blog: Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'>;
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'id' | 'url' | 'width'
          >
        >;
        author?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.ArticleAuthor,
            'name' | 'email' | 'firstName' | 'lastName' | 'bio'
          >
        >;
        articleSeo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Seo, 'title' | 'description'>
        >;
        countComments: {nodes: Array<{__typename: 'Comment'}>};
      }
    >;
  }>;
};

export type AdjacentArticleFragment = Pick<
  StorefrontAPI.Article,
  'title' | 'handle'
> & {blog: Pick<StorefrontAPI.Blog, 'title' | 'handle'>};

export type AdjacentArticlesQueryVariables = StorefrontAPI.Exact<{
  query?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']['input']>;
  cursor: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type AdjacentArticlesQuery = {
  previous: {
    nodes: Array<
      Pick<StorefrontAPI.Article, 'title' | 'handle'> & {
        blog: Pick<StorefrontAPI.Blog, 'title' | 'handle'>;
      }
    >;
  };
  next: {
    nodes: Array<
      Pick<StorefrontAPI.Article, 'title' | 'handle'> & {
        blog: Pick<StorefrontAPI.Blog, 'title' | 'handle'>;
      }
    >;
  };
};

export type BlogCategoryQueryVariables = StorefrontAPI.Exact<{
  blogHandle: StorefrontAPI.Scalars['String']['input'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type BlogCategoryQuery = {
  blog?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'> & {
      articles: {
        nodes: Array<
          Pick<
            StorefrontAPI.Article,
            | 'id'
            | 'handle'
            | 'title'
            | 'tags'
            | 'excerpt'
            | 'contentHtml'
            | 'excerptHtml'
            | 'publishedAt'
            | 'trackingParameters'
          > & {
            blog: Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'>;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
            author?: StorefrontAPI.Maybe<
              Pick<
                StorefrontAPI.ArticleAuthor,
                'name' | 'email' | 'firstName' | 'lastName' | 'bio'
              >
            >;
            articleSeo?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Seo, 'title' | 'description'>
            >;
            countComments: {nodes: Array<{__typename: 'Comment'}>};
          }
        >;
        pageInfo: Pick<
          StorefrontAPI.PageInfo,
          'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'
        >;
      };
      blogSeo?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Seo, 'title' | 'description'>
      >;
      blogImage?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
          reference?: StorefrontAPI.Maybe<
            | Pick<
                StorefrontAPI.GenericFile,
                'id' | 'url' | 'mimeType' | 'originalFileSize'
              >
            | ({__typename: 'MediaImage'} & Pick<
                StorefrontAPI.MediaImage,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
            | ({__typename: 'Model3d'} & Pick<
                StorefrontAPI.Model3d,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  sources: Array<
                    {__typename: 'Model3dSource'} & Pick<
                      StorefrontAPI.Model3dSource,
                      'format' | 'filesize' | 'mimeType' | 'url'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
            | ({__typename: 'Video'} & Pick<
                StorefrontAPI.Video,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  sources: Array<
                    {__typename: 'VideoSource'} & Pick<
                      StorefrontAPI.VideoSource,
                      'format' | 'mimeType' | 'url'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
          >;
        }
      >;
      blogDescription?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
          reference?: StorefrontAPI.Maybe<
            | Pick<
                StorefrontAPI.GenericFile,
                'id' | 'url' | 'mimeType' | 'originalFileSize'
              >
            | ({__typename: 'MediaImage'} & Pick<
                StorefrontAPI.MediaImage,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
            | ({__typename: 'Model3d'} & Pick<
                StorefrontAPI.Model3d,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  sources: Array<
                    {__typename: 'Model3dSource'} & Pick<
                      StorefrontAPI.Model3dSource,
                      'format' | 'filesize' | 'mimeType' | 'url'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
            | ({__typename: 'Video'} & Pick<
                StorefrontAPI.Video,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  sources: Array<
                    {__typename: 'VideoSource'} & Pick<
                      StorefrontAPI.VideoSource,
                      'format' | 'mimeType' | 'url'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
          >;
        }
      >;
    }
  >;
};

export type HomeBlogQueryVariables = StorefrontAPI.Exact<{
  query?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']['input']>;
  featured?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  latest?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type HomeBlogQuery = {
  featured: {
    nodes: Array<
      Pick<
        StorefrontAPI.Article,
        | 'id'
        | 'handle'
        | 'title'
        | 'tags'
        | 'excerpt'
        | 'contentHtml'
        | 'excerptHtml'
        | 'publishedAt'
        | 'trackingParameters'
      > & {
        blog: Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'>;
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'id' | 'url' | 'width'
          >
        >;
        author?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.ArticleAuthor,
            'name' | 'email' | 'firstName' | 'lastName' | 'bio'
          >
        >;
        articleSeo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Seo, 'title' | 'description'>
        >;
        countComments: {nodes: Array<{__typename: 'Comment'}>};
      }
    >;
  };
  latest: {
    nodes: Array<
      Pick<
        StorefrontAPI.Article,
        | 'id'
        | 'handle'
        | 'title'
        | 'tags'
        | 'excerpt'
        | 'contentHtml'
        | 'excerptHtml'
        | 'publishedAt'
        | 'trackingParameters'
      > & {
        blog: Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'>;
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'id' | 'url' | 'width'
          >
        >;
        author?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.ArticleAuthor,
            'name' | 'email' | 'firstName' | 'lastName' | 'bio'
          >
        >;
        articleSeo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Seo, 'title' | 'description'>
        >;
        countComments: {nodes: Array<{__typename: 'Comment'}>};
      }
    >;
  };
};

export type BlogCategoriesQueryVariables = StorefrontAPI.Exact<{
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type BlogCategoriesQuery = {
  blogs: {
    categories: Array<
      Pick<StorefrontAPI.Blog, 'id' | 'handle' | 'title'> & {
        articles: {countArticles: Array<{__typename: 'Article'}>};
        blogSeo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Seo, 'title' | 'description'>
        >;
        blogImage?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
            reference?: StorefrontAPI.Maybe<
              | Pick<
                  StorefrontAPI.GenericFile,
                  'id' | 'url' | 'mimeType' | 'originalFileSize'
                >
              | ({__typename: 'MediaImage'} & Pick<
                  StorefrontAPI.MediaImage,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url' | 'width' | 'height'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
              | ({__typename: 'Model3d'} & Pick<
                  StorefrontAPI.Model3d,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    sources: Array<
                      {__typename: 'Model3dSource'} & Pick<
                        StorefrontAPI.Model3dSource,
                        'format' | 'filesize' | 'mimeType' | 'url'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
              | ({__typename: 'Video'} & Pick<
                  StorefrontAPI.Video,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    sources: Array<
                      {__typename: 'VideoSource'} & Pick<
                        StorefrontAPI.VideoSource,
                        'format' | 'mimeType' | 'url'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
            >;
          }
        >;
        blogDescription?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
            reference?: StorefrontAPI.Maybe<
              | Pick<
                  StorefrontAPI.GenericFile,
                  'id' | 'url' | 'mimeType' | 'originalFileSize'
                >
              | ({__typename: 'MediaImage'} & Pick<
                  StorefrontAPI.MediaImage,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url' | 'width' | 'height'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
              | ({__typename: 'Model3d'} & Pick<
                  StorefrontAPI.Model3d,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    sources: Array<
                      {__typename: 'Model3dSource'} & Pick<
                        StorefrontAPI.Model3dSource,
                        'format' | 'filesize' | 'mimeType' | 'url'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
              | ({__typename: 'Video'} & Pick<
                  StorefrontAPI.Video,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    sources: Array<
                      {__typename: 'VideoSource'} & Pick<
                        StorefrontAPI.VideoSource,
                        'format' | 'mimeType' | 'url'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
            >;
          }
        >;
      }
    >;
    pageInfo: Pick<
      StorefrontAPI.PageInfo,
      'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'
    >;
  };
};

export type CollectionFragment = Pick<
  StorefrontAPI.Collection,
  'id' | 'title' | 'handle' | 'description'
> & {
  collectionSeo: Pick<StorefrontAPI.Seo, 'description' | 'title'>;
  image?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Image, 'altText' | 'height' | 'id' | 'url' | 'width'>
  >;
  seoText?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'value'>
  >;
};

export type CollectionQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  sortKey?: StorefrontAPI.InputMaybe<StorefrontAPI.ProductCollectionSortKeys>;
  reverse?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Boolean']['input']>;
  filters?: StorefrontAPI.InputMaybe<
    Array<StorefrontAPI.ProductFilter> | StorefrontAPI.ProductFilter
  >;
  noPriceFilters?: StorefrontAPI.InputMaybe<
    Array<StorefrontAPI.ProductFilter> | StorefrontAPI.ProductFilter
  >;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CollectionQuery = {
  collection?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Collection,
      'id' | 'title' | 'handle' | 'description'
    > & {
      products: {
        nodes: Array<
          Pick<
            StorefrontAPI.Product,
            | 'id'
            | 'handle'
            | 'title'
            | 'tags'
            | 'vendor'
            | 'createdAt'
            | 'updatedAt'
          > & {
            featuredImage?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
            variants: {
              nodes: Array<
                Pick<
                  StorefrontAPI.ProductVariant,
                  | 'id'
                  | 'sku'
                  | 'title'
                  | 'barcode'
                  | 'availableForSale'
                  | 'quantityAvailable'
                > & {
                  compareAtPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
                  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
                  selectedOptions: Array<
                    Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                  >;
                  unitPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                }
              >;
            };
            selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
              Pick<
                StorefrontAPI.ProductVariant,
                | 'id'
                | 'sku'
                | 'title'
                | 'barcode'
                | 'availableForSale'
                | 'quantityAvailable'
              > & {
                compareAtPrice?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                >;
                image?: StorefrontAPI.Maybe<
                  {__typename: 'Image'} & Pick<
                    StorefrontAPI.Image,
                    'altText' | 'height' | 'id' | 'url' | 'width'
                  >
                >;
                price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
                product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
                selectedOptions: Array<
                  Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                >;
                unitPrice?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                >;
              }
            >;
            adjacentVariants: Array<
              Pick<
                StorefrontAPI.ProductVariant,
                | 'id'
                | 'sku'
                | 'title'
                | 'barcode'
                | 'availableForSale'
                | 'quantityAvailable'
              > & {
                compareAtPrice?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                >;
                image?: StorefrontAPI.Maybe<
                  {__typename: 'Image'} & Pick<
                    StorefrontAPI.Image,
                    'altText' | 'height' | 'id' | 'url' | 'width'
                  >
                >;
                price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
                product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
                selectedOptions: Array<
                  Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                >;
                unitPrice?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                >;
              }
            >;
            priceRange: {
              minVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              maxVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
            };
            compareAtPriceRange: {
              minVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              maxVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
            };
          }
        >;
        filters: Array<
          Pick<StorefrontAPI.Filter, 'id' | 'label' | 'type'> & {
            values: Array<
              Pick<
                StorefrontAPI.FilterValue,
                'id' | 'label' | 'count' | 'input'
              > & {
                swatch?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.Swatch, 'color'> & {
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'MediaImage'} & Pick<
                        StorefrontAPI.MediaImage,
                        'id' | 'alt' | 'mediaContentType'
                      > & {
                          image?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'url' | 'width' | 'height'
                            >
                          >;
                          previewImage?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'url'
                            >
                          >;
                        }
                    >;
                  }
                >;
              }
            >;
          }
        >;
        pageInfo: Pick<
          StorefrontAPI.PageInfo,
          'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'
        >;
      };
      collectionSeo: Pick<StorefrontAPI.Seo, 'description' | 'title'>;
      image?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Image, 'altText' | 'height' | 'id' | 'url' | 'width'>
      >;
      seoText?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'value'>
      >;
    }
  >;
  paginate?: StorefrontAPI.Maybe<{
    products: {edges: Array<Pick<StorefrontAPI.ProductEdge, 'cursor'>>};
  }>;
  minPrice?: StorefrontAPI.Maybe<{
    products: {
      nodes: Array<{
        priceRange: {minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount'>};
      }>;
    };
  }>;
  maxPrice?: StorefrontAPI.Maybe<{
    products: {
      nodes: Array<{
        priceRange: {maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount'>};
      }>;
    };
  }>;
};

export type HealthShopQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type HealthShopQuery = {shop: Pick<StorefrontAPI.Shop, 'name'>};

export type ProductFragment = Pick<
  StorefrontAPI.Product,
  | 'id'
  | 'title'
  | 'vendor'
  | 'handle'
  | 'descriptionHtml'
  | 'description'
  | 'tags'
  | 'availableForSale'
  | 'isGiftCard'
  | 'productType'
  | 'createdAt'
  | 'updatedAt'
  | 'encodedVariantExistence'
  | 'encodedVariantAvailability'
> & {
  images: {
    nodes: Array<
      {__typename: 'Image'} & Pick<
        StorefrontAPI.Image,
        'altText' | 'height' | 'id' | 'url' | 'width'
      >
    >;
  };
  options: Array<
    Pick<StorefrontAPI.ProductOption, 'id' | 'name'> & {
      optionValues: Array<
        Pick<StorefrontAPI.ProductOptionValue, 'id' | 'name'> & {
          firstSelectableVariant?: StorefrontAPI.Maybe<
            Pick<
              StorefrontAPI.ProductVariant,
              | 'id'
              | 'sku'
              | 'title'
              | 'barcode'
              | 'availableForSale'
              | 'quantityAvailable'
            > & {
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
              image?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'height' | 'id' | 'url' | 'width'
                >
              >;
              price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
              product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
              selectedOptions: Array<
                Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
              >;
              unitPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
            }
          >;
          swatch?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.ProductOptionValueSwatch, 'color'> & {
              image?: StorefrontAPI.Maybe<
                | ({__typename: 'ExternalVideo'} & Pick<
                    StorefrontAPI.ExternalVideo,
                    | 'alt'
                    | 'embedUrl'
                    | 'host'
                    | 'id'
                    | 'originUrl'
                    | 'mediaContentType'
                  > & {
                      previewImage?: StorefrontAPI.Maybe<
                        {__typename: 'Image'} & Pick<
                          StorefrontAPI.Image,
                          'altText' | 'height' | 'id' | 'url' | 'width'
                        >
                      >;
                    })
                | ({__typename: 'MediaImage'} & Pick<
                    StorefrontAPI.MediaImage,
                    'id' | 'alt' | 'mediaContentType'
                  > & {
                      image?: StorefrontAPI.Maybe<
                        {__typename: 'Image'} & Pick<
                          StorefrontAPI.Image,
                          'altText' | 'url' | 'width' | 'height'
                        >
                      >;
                      previewImage?: StorefrontAPI.Maybe<
                        {__typename: 'Image'} & Pick<
                          StorefrontAPI.Image,
                          'altText' | 'url'
                        >
                      >;
                    })
                | ({__typename: 'Model3d'} & Pick<
                    StorefrontAPI.Model3d,
                    'id' | 'alt' | 'mediaContentType'
                  > & {
                      sources: Array<
                        {__typename: 'Model3dSource'} & Pick<
                          StorefrontAPI.Model3dSource,
                          'format' | 'filesize' | 'mimeType' | 'url'
                        >
                      >;
                      previewImage?: StorefrontAPI.Maybe<
                        {__typename: 'Image'} & Pick<
                          StorefrontAPI.Image,
                          'altText' | 'url'
                        >
                      >;
                    })
                | ({__typename: 'Video'} & Pick<
                    StorefrontAPI.Video,
                    'id' | 'alt' | 'mediaContentType'
                  > & {
                      sources: Array<
                        {__typename: 'VideoSource'} & Pick<
                          StorefrontAPI.VideoSource,
                          'format' | 'mimeType' | 'url'
                        >
                      >;
                      previewImage?: StorefrontAPI.Maybe<
                        {__typename: 'Image'} & Pick<
                          StorefrontAPI.Image,
                          'altText' | 'url'
                        >
                      >;
                    })
              >;
            }
          >;
        }
      >;
    }
  >;
  selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.ProductVariant,
      | 'id'
      | 'sku'
      | 'title'
      | 'barcode'
      | 'availableForSale'
      | 'quantityAvailable'
    > & {
      compareAtPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      image?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'altText' | 'height' | 'id' | 'url' | 'width'
        >
      >;
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
      selectedOptions: Array<
        Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
      >;
      unitPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
    }
  >;
  adjacentVariants: Array<
    Pick<
      StorefrontAPI.ProductVariant,
      | 'id'
      | 'sku'
      | 'title'
      | 'barcode'
      | 'availableForSale'
      | 'quantityAvailable'
    > & {
      compareAtPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      image?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'altText' | 'height' | 'id' | 'url' | 'width'
        >
      >;
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
      selectedOptions: Array<
        Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
      >;
      unitPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
    }
  >;
  productSeo: Pick<StorefrontAPI.Seo, 'title' | 'description'>;
  collections: {
    nodes: Array<Pick<StorefrontAPI.Collection, 'id' | 'title' | 'handle'>>;
  };
  priceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
  compareAtPriceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
};

export type ProductQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  selectedOptions:
    | Array<StorefrontAPI.SelectedOptionInput>
    | StorefrontAPI.SelectedOptionInput;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type ProductQuery = {
  product?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Product,
      | 'id'
      | 'title'
      | 'vendor'
      | 'handle'
      | 'descriptionHtml'
      | 'description'
      | 'tags'
      | 'availableForSale'
      | 'isGiftCard'
      | 'productType'
      | 'createdAt'
      | 'updatedAt'
      | 'encodedVariantExistence'
      | 'encodedVariantAvailability'
    > & {
      images: {
        nodes: Array<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'id' | 'url' | 'width'
          >
        >;
      };
      options: Array<
        Pick<StorefrontAPI.ProductOption, 'id' | 'name'> & {
          optionValues: Array<
            Pick<StorefrontAPI.ProductOptionValue, 'id' | 'name'> & {
              firstSelectableVariant?: StorefrontAPI.Maybe<
                Pick<
                  StorefrontAPI.ProductVariant,
                  | 'id'
                  | 'sku'
                  | 'title'
                  | 'barcode'
                  | 'availableForSale'
                  | 'quantityAvailable'
                > & {
                  compareAtPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'height' | 'id' | 'url' | 'width'
                    >
                  >;
                  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
                  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
                  selectedOptions: Array<
                    Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                  >;
                  unitPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                }
              >;
              swatch?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.ProductOptionValueSwatch, 'color'> & {
                  image?: StorefrontAPI.Maybe<
                    | ({__typename: 'ExternalVideo'} & Pick<
                        StorefrontAPI.ExternalVideo,
                        | 'alt'
                        | 'embedUrl'
                        | 'host'
                        | 'id'
                        | 'originUrl'
                        | 'mediaContentType'
                      > & {
                          previewImage?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'height' | 'id' | 'url' | 'width'
                            >
                          >;
                        })
                    | ({__typename: 'MediaImage'} & Pick<
                        StorefrontAPI.MediaImage,
                        'id' | 'alt' | 'mediaContentType'
                      > & {
                          image?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'url' | 'width' | 'height'
                            >
                          >;
                          previewImage?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'url'
                            >
                          >;
                        })
                    | ({__typename: 'Model3d'} & Pick<
                        StorefrontAPI.Model3d,
                        'id' | 'alt' | 'mediaContentType'
                      > & {
                          sources: Array<
                            {__typename: 'Model3dSource'} & Pick<
                              StorefrontAPI.Model3dSource,
                              'format' | 'filesize' | 'mimeType' | 'url'
                            >
                          >;
                          previewImage?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'url'
                            >
                          >;
                        })
                    | ({__typename: 'Video'} & Pick<
                        StorefrontAPI.Video,
                        'id' | 'alt' | 'mediaContentType'
                      > & {
                          sources: Array<
                            {__typename: 'VideoSource'} & Pick<
                              StorefrontAPI.VideoSource,
                              'format' | 'mimeType' | 'url'
                            >
                          >;
                          previewImage?: StorefrontAPI.Maybe<
                            {__typename: 'Image'} & Pick<
                              StorefrontAPI.Image,
                              'altText' | 'url'
                            >
                          >;
                        })
                  >;
                }
              >;
            }
          >;
        }
      >;
      selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.ProductVariant,
          | 'id'
          | 'sku'
          | 'title'
          | 'barcode'
          | 'availableForSale'
          | 'quantityAvailable'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          image?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<
              StorefrontAPI.Image,
              'altText' | 'height' | 'id' | 'url' | 'width'
            >
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
          unitPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
        }
      >;
      adjacentVariants: Array<
        Pick<
          StorefrontAPI.ProductVariant,
          | 'id'
          | 'sku'
          | 'title'
          | 'barcode'
          | 'availableForSale'
          | 'quantityAvailable'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          image?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<
              StorefrontAPI.Image,
              'altText' | 'height' | 'id' | 'url' | 'width'
            >
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
          unitPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
        }
      >;
      productSeo: Pick<StorefrontAPI.Seo, 'title' | 'description'>;
      collections: {
        nodes: Array<Pick<StorefrontAPI.Collection, 'id' | 'title' | 'handle'>>;
      };
      priceRange: {
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
      compareAtPriceRange: {
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
    }
  >;
};

export type ComplementaryProductFragment = Pick<
  StorefrontAPI.Product,
  'id' | 'handle' | 'title'
> & {
  selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.ProductVariant,
      | 'id'
      | 'sku'
      | 'title'
      | 'barcode'
      | 'availableForSale'
      | 'quantityAvailable'
    > & {
      compareAtPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      image?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'altText' | 'height' | 'id' | 'url' | 'width'
        >
      >;
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
      selectedOptions: Array<
        Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
      >;
      unitPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
    }
  >;
};

export type GetProductRecommendationsQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type GetProductRecommendationsQuery = {
  recommendations?: StorefrontAPI.Maybe<
    Array<
      Pick<
        StorefrontAPI.Product,
        | 'id'
        | 'handle'
        | 'title'
        | 'tags'
        | 'vendor'
        | 'createdAt'
        | 'updatedAt'
      > & {
        featuredImage?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'id' | 'url' | 'width'
          >
        >;
        variants: {
          nodes: Array<
            Pick<
              StorefrontAPI.ProductVariant,
              | 'id'
              | 'sku'
              | 'title'
              | 'barcode'
              | 'availableForSale'
              | 'quantityAvailable'
            > & {
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
              image?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'height' | 'id' | 'url' | 'width'
                >
              >;
              price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
              product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
              selectedOptions: Array<
                Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
              >;
              unitPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
            }
          >;
        };
        selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.ProductVariant,
            | 'id'
            | 'sku'
            | 'title'
            | 'barcode'
            | 'availableForSale'
            | 'quantityAvailable'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
            product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            unitPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
          }
        >;
        adjacentVariants: Array<
          Pick<
            StorefrontAPI.ProductVariant,
            | 'id'
            | 'sku'
            | 'title'
            | 'barcode'
            | 'availableForSale'
            | 'quantityAvailable'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
            product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            unitPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
          }
        >;
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          maxVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
        compareAtPriceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          maxVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
      }
    >
  >;
  complementary?: StorefrontAPI.Maybe<
    Array<
      Pick<StorefrontAPI.Product, 'id' | 'handle' | 'title'> & {
        selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.ProductVariant,
            | 'id'
            | 'sku'
            | 'title'
            | 'barcode'
            | 'availableForSale'
            | 'quantityAvailable'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'id' | 'url' | 'width'
              >
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
            product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            unitPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
          }
        >;
      }
    >
  >;
};

export type GetVariantsQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  handle: StorefrontAPI.Scalars['String']['input'];
}>;

export type GetVariantsQuery = {
  product?: StorefrontAPI.Maybe<{
    variants: {
      nodes: Array<
        Pick<
          StorefrontAPI.ProductVariant,
          | 'id'
          | 'sku'
          | 'title'
          | 'barcode'
          | 'availableForSale'
          | 'quantityAvailable'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          image?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<
              StorefrontAPI.Image,
              'altText' | 'height' | 'id' | 'url' | 'width'
            >
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
          unitPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
        }
      >;
    };
  }>;
};

export type PageFragment = Pick<
  StorefrontAPI.Page,
  'id' | 'title' | 'body' | 'handle'
> & {
  pageSeo?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Seo, 'description' | 'title'>
  >;
  pageImage?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
      reference?: StorefrontAPI.Maybe<
        | Pick<
            StorefrontAPI.GenericFile,
            'id' | 'url' | 'mimeType' | 'originalFileSize'
          >
        | ({__typename: 'MediaImage'} & Pick<
            StorefrontAPI.MediaImage,
            'id' | 'alt' | 'mediaContentType'
          > & {
              image?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url' | 'width' | 'height'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
        | ({__typename: 'Model3d'} & Pick<
            StorefrontAPI.Model3d,
            'id' | 'alt' | 'mediaContentType'
          > & {
              sources: Array<
                {__typename: 'Model3dSource'} & Pick<
                  StorefrontAPI.Model3dSource,
                  'format' | 'filesize' | 'mimeType' | 'url'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
        | ({__typename: 'Video'} & Pick<
            StorefrontAPI.Video,
            'id' | 'alt' | 'mediaContentType'
          > & {
              sources: Array<
                {__typename: 'VideoSource'} & Pick<
                  StorefrontAPI.VideoSource,
                  'format' | 'mimeType' | 'url'
                >
              >;
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'altText' | 'url'
                >
              >;
            })
      >;
    }
  >;
};

export type PageQueryVariables = StorefrontAPI.Exact<{
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  handle: StorefrontAPI.Scalars['String']['input'];
}>;

export type PageQuery = {
  page?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Page, 'id' | 'title' | 'body' | 'handle'> & {
      pageSeo?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Seo, 'description' | 'title'>
      >;
      pageImage?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
          reference?: StorefrontAPI.Maybe<
            | Pick<
                StorefrontAPI.GenericFile,
                'id' | 'url' | 'mimeType' | 'originalFileSize'
              >
            | ({__typename: 'MediaImage'} & Pick<
                StorefrontAPI.MediaImage,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
            | ({__typename: 'Model3d'} & Pick<
                StorefrontAPI.Model3d,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  sources: Array<
                    {__typename: 'Model3dSource'} & Pick<
                      StorefrontAPI.Model3dSource,
                      'format' | 'filesize' | 'mimeType' | 'url'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
            | ({__typename: 'Video'} & Pick<
                StorefrontAPI.Video,
                'id' | 'alt' | 'mediaContentType'
              > & {
                  sources: Array<
                    {__typename: 'VideoSource'} & Pick<
                      StorefrontAPI.VideoSource,
                      'format' | 'mimeType' | 'url'
                    >
                  >;
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'altText' | 'url'
                    >
                  >;
                })
          >;
        }
      >;
    }
  >;
};

export type PolicyFragment = Pick<
  StorefrontAPI.ShopPolicy,
  'body' | 'handle' | 'id' | 'title' | 'url'
>;

export type PolicyQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  privacyPolicy: StorefrontAPI.Scalars['Boolean']['input'];
  refundPolicy: StorefrontAPI.Scalars['Boolean']['input'];
  shippingPolicy: StorefrontAPI.Scalars['Boolean']['input'];
  termsOfService: StorefrontAPI.Scalars['Boolean']['input'];
}>;

export type PolicyQuery = {
  shop: {
    privacyPolicy?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'body' | 'handle' | 'id' | 'title' | 'url'>
    >;
    shippingPolicy?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'body' | 'handle' | 'id' | 'title' | 'url'>
    >;
    termsOfService?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'body' | 'handle' | 'id' | 'title' | 'url'>
    >;
    refundPolicy?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'body' | 'handle' | 'id' | 'title' | 'url'>
    >;
  };
};

export type PolicyItemFragment = Pick<
  StorefrontAPI.ShopPolicy,
  'id' | 'title' | 'handle'
>;

export type PoliciesQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type PoliciesQuery = {
  shop: {
    privacyPolicy?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'id' | 'title' | 'handle'>
    >;
    shippingPolicy?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'id' | 'title' | 'handle'>
    >;
    termsOfService?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'id' | 'title' | 'handle'>
    >;
    refundPolicy?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicy, 'id' | 'title' | 'handle'>
    >;
    subscriptionPolicy?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.ShopPolicyWithDefault, 'id' | 'title' | 'handle'>
    >;
  };
};

export type StoreRobotsQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type StoreRobotsQuery = {shop: Pick<StorefrontAPI.Shop, 'id'>};

export type SitemapMetaobjectsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapMetaobjectsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<
            StorefrontAPI.SitemapResourceMetaobject,
            'type' | 'handle' | 'updatedAt'
          >
      >;
    }>;
  };
};

export type SitemapArticlesQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapArticlesQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SearchArticleByHandleQueryVariables = StorefrontAPI.Exact<{
  query?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']['input']>;
}>;

export type SearchArticleByHandleQuery = {
  articles: {
    nodes: Array<
      Pick<StorefrontAPI.Article, 'handle' | 'title'> & {
        blog: Pick<StorefrontAPI.Blog, 'handle'>;
        image?: StorefrontAPI.Maybe<{
          alt: StorefrontAPI.Image['altText'];
          filepath: StorefrontAPI.Image['url'];
        }>;
      }
    >;
  };
};

export type SitemapBlogsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapBlogsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SearchBlogsByHandleQueryVariables = StorefrontAPI.Exact<{
  query: StorefrontAPI.Scalars['String']['input'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
}>;

export type SearchBlogsByHandleQuery = {
  blogs: {
    nodes: Array<
      Pick<StorefrontAPI.Blog, 'handle' | 'title'> & {
        blogImage?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
            reference?: StorefrontAPI.Maybe<
              | Pick<
                  StorefrontAPI.GenericFile,
                  'id' | 'url' | 'mimeType' | 'originalFileSize'
                >
              | ({__typename: 'MediaImage'} & Pick<
                  StorefrontAPI.MediaImage,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    image?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url' | 'width' | 'height'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
              | ({__typename: 'Model3d'} & Pick<
                  StorefrontAPI.Model3d,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    sources: Array<
                      {__typename: 'Model3dSource'} & Pick<
                        StorefrontAPI.Model3dSource,
                        'format' | 'filesize' | 'mimeType' | 'url'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
              | ({__typename: 'Video'} & Pick<
                  StorefrontAPI.Video,
                  'id' | 'alt' | 'mediaContentType'
                > & {
                    sources: Array<
                      {__typename: 'VideoSource'} & Pick<
                        StorefrontAPI.VideoSource,
                        'format' | 'mimeType' | 'url'
                      >
                    >;
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'altText' | 'url'
                      >
                    >;
                  })
            >;
          }
        >;
      }
    >;
  };
};

export type AuthorsInfoSitemapQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type AuthorsInfoSitemapQuery = {
  authors?: StorefrontAPI.Maybe<{
    articles: {
      nodes: Array<{
        authorV2?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.ArticleAuthor, 'name' | 'email'>
        >;
      }>;
    };
  }>;
};

export type SitemapCollectionsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapCollectionsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type GetCollectionsByHandleQueryVariables = StorefrontAPI.Exact<{
  query?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']['input']>;
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
}>;

export type GetCollectionsByHandleQuery = {
  collections: {
    nodes: Array<
      Pick<StorefrontAPI.Collection, 'title' | 'handle'> & {
        image?: StorefrontAPI.Maybe<{
          alt: StorefrontAPI.Image['altText'];
          filepath: StorefrontAPI.Image['url'];
        }>;
      }
    >;
  };
};

export type SitemapPagesQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapPagesQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SearchPageByHandleQueryVariables = StorefrontAPI.Exact<{
  query?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']['input']>;
}>;

export type SearchPageByHandleQuery = {
  pages: {nodes: Array<Pick<StorefrontAPI.Page, 'handle' | 'title'>>};
};

export type SitemapProductsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapProductsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SearchProductsByHandleQueryVariables = StorefrontAPI.Exact<{
  query: StorefrontAPI.Scalars['String']['input'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
}>;

export type SearchProductsByHandleQuery = {
  products: {
    nodes: Array<
      Pick<StorefrontAPI.Product, 'handle' | 'title'> & {
        image?: StorefrontAPI.Maybe<{
          alt: StorefrontAPI.Image['altText'];
          filepath: StorefrontAPI.Image['url'];
        }>;
      }
    >;
  };
};

interface GeneratedQueryTypes {
  '#graphql\n  fragment ShopMediaImage on MediaImage {\n    id\n    image {\n      altText\n      height\n      id\n      url\n      width\n    }\n  }\n\n  query Shop(\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    shop {\n      id\n      name\n      description\n      primaryDomain {\n        host\n        url\n      }\n      brand {\n        shortDescription\n        slogan\n        logo {\n          ...ShopMediaImage\n        }\n        coverImage {\n          ...ShopMediaImage\n        }\n      }\n      paymentSettings {\n        countryCode\n        currencyCode\n      }\n    }\n  }\n': {
    return: ShopQuery;
    variables: ShopQueryVariables;
  };
  '#graphql\n  query Location(\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    localization {\n      country {\n        currency {\n          isoCode\n          name\n          symbol\n        }\n        isoCode\n        name\n        unitSystem\n      }\n      language {\n        endonymName\n        isoCode\n        name\n      }\n      market {\n        handle\n        id\n      }\n    }\n  }\n': {
    return: LocationQuery;
    variables: LocationQueryVariables;
  };
  '#graphql\n  query Menu(\n    $handle: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    menu(\n      handle: $handle\n    ) {\n      ...Menu\n    }\n  }\n  #graphql\n  fragment Menu on Menu {\n    __typename\n    id\n    title\n    items {\n      ...ParentMenuItem\n    }\n  }\n\n  fragment ParentMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      __typename\n      ...ChildMenuItem\n    }\n  }\n\n  fragment ChildMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      __typename\n      ...SubChildMenuItem\n    }\n  }\n\n  fragment SubChildMenuItem on MenuItem {\n    ...MenuItem\n  }\n\n  fragment MenuItem on MenuItem {\n    __typename\n    id\n    title\n    type\n    url\n    tags\n    resourceId\n    resource {\n      ...MenuItemResource\n    }\n  }\n\n  fragment MenuImage on Image {\n    altText\n    height\n    id\n    url\n    width\n    __typename\n  }\n\n  fragment MenuCollection on Collection {\n    __typename\n    id\n    title\n    handle\n    image {\n      ...MenuImage\n    }\n  }\n\n  fragment MenuProduct on Product {\n    __typename\n    id\n    title\n    handle\n    images(first: 1) {\n      nodes {\n        ...MenuImage\n      }\n    }\n  }\n\n  fragment MenuBlog on Blog {\n    __typename\n    id\n    title\n    handle\n    articles(first: 1) {\n      nodes {\n        ...MenuArticle\n      }\n    }\n  }\n\n  fragment MenuArticle on Article {\n    __typename\n    id\n    title\n    handle\n    blog {\n      handle\n    }\n    image {\n      ...MenuImage\n    }\n  }\n\n  fragment MenuPage on Page {\n    __typename\n    id\n    title\n    handle\n  }\n\n  fragment MenuShopPolicy on ShopPolicy {\n    __typename\n    id\n    title\n    handle\n  }\n\n  fragment MenuItemResource on MenuItemResource {\n    ... on Collection {\n      ...MenuCollection\n    }\n    ... on Product {\n      ...MenuProduct\n    }\n    ... on Blog {\n      ...MenuBlog\n    }\n    ... on Article {\n      ...MenuArticle\n    }\n    ... on Page {\n      ...MenuPage\n    }\n    ... on ShopPolicy {\n      ...MenuShopPolicy\n    }\n  }\n\n': {
    return: MenuQuery;
    variables: MenuQueryVariables;
  };
  '#graphql\n  query Articles(\n    $query: String!\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n    $sortKey: ArticleSortKeys\n    $reverse: Boolean\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    articles(\n      query: $query\n      first: $first\n      last: $last\n      before: $startCursor\n      after: $endCursor\n      reverse: $reverse\n      sortKey: $sortKey\n    ) {\n      nodes {\n        ...ArticleItem\n      }\n      pageInfo {\n        ...PageInfo\n      }\n    }\n  }\n  #graphql\n  fragment ArticleItem on Article {\n    id\n    handle\n    title\n    tags\n    excerpt\n    contentHtml\n    excerptHtml\n    publishedAt\n    trackingParameters\n    blog {\n      id\n      handle\n      title\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    author: authorV2 {\n      ...ArticleAuthor\n    }\n    articleSeo: seo {\n      title\n      description\n    }\n    countComments: comments(first: 250) {\n      nodes {\n        __typename\n      }\n    }\n  }\n\n  #graphql\n  fragment ArticleAuthor on ArticleAuthor {\n    name\n    email\n    firstName\n    lastName\n    bio\n  }\n\n  #graphql\n  fragment PageInfo on PageInfo {\n    startCursor\n    endCursor\n    hasPreviousPage\n    hasNextPage\n  }\n\n': {
    return: ArticlesQuery;
    variables: ArticlesQueryVariables;
  };
  '#graphql\n  query Article(\n    $articleHandle: String!\n    $blogHandle: String!\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n    $reverse: Boolean\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    blog(handle: $blogHandle) {\n      articleByHandle(handle: $articleHandle) {\n        ...ArticleItem\n        comments(\n          first: $first\n          last: $last\n          before: $startCursor\n          after: $endCursor\n          reverse: $reverse\n        ) {\n          nodes {\n            ...ArticleComment\n          }\n          pageInfo {\n            ...PageInfo\n          }\n        }\n      }\n    }\n  }\n  #graphql\n  fragment ArticleItem on Article {\n    id\n    handle\n    title\n    tags\n    excerpt\n    contentHtml\n    excerptHtml\n    publishedAt\n    trackingParameters\n    blog {\n      id\n      handle\n      title\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    author: authorV2 {\n      ...ArticleAuthor\n    }\n    articleSeo: seo {\n      title\n      description\n    }\n    countComments: comments(first: 250) {\n      nodes {\n        __typename\n      }\n    }\n  }\n\n  #graphql\n  fragment ArticleAuthor on ArticleAuthor {\n    name\n    email\n    firstName\n    lastName\n    bio\n  }\n\n  #graphql\n  fragment ArticleComment on Comment {\n    id\n    content\n    contentHtml\n    author {\n      email\n      name\n    }\n  }\n\n  #graphql\n  fragment PageInfo on PageInfo {\n    startCursor\n    endCursor\n    hasPreviousPage\n    hasNextPage\n  }\n\n': {
    return: ArticleQuery;
    variables: ArticleQueryVariables;
  };
  '#graphql\n  fragment AdjacentArticle on Article {\n    title\n    handle\n    blog {\n      title\n      handle\n    }\n  }\n\n  query AdjacentArticles(\n    $query: String = "NOT author"\n    $cursor: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    previous: articles(\n      query: $query\n      before: $cursor\n      last: 1\n    ) {\n      nodes {\n        ...AdjacentArticle\n      }\n    }\n    next: articles(\n      query: $query\n      after: $cursor\n      first: 1\n    ) {\n      nodes {\n        ...AdjacentArticle\n      }\n    }\n  }\n': {
    return: AdjacentArticlesQuery;
    variables: AdjacentArticlesQueryVariables;
  };
  '#graphql\n  query BlogCategory(\n    $blogHandle: String!\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    blog(handle: $blogHandle) {\n      ...Blog\n      articles(\n        first: $first,\n        last: $last,\n        before: $startCursor,\n        after: $endCursor\n      ) {\n        nodes {\n          ...ArticleItem\n        }\n        pageInfo {\n          ...PageInfo\n        }\n      }\n    }\n  }\n  #graphql\n  fragment Blog on Blog {\n    id\n    handle\n    title\n    blogSeo: seo {\n      title\n      description\n    }\n    blogImage: metafield(namespace: "category", key: "image") {\n      ...Metafield\n    }\n    blogDescription: metafield(namespace: "category", key: "description") {\n      ...Metafield\n    }\n  }\n\n  #graphql\n  fragment Metafield on Metafield {\n    id\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment ArticleItem on Article {\n    id\n    handle\n    title\n    tags\n    excerpt\n    contentHtml\n    excerptHtml\n    publishedAt\n    trackingParameters\n    blog {\n      id\n      handle\n      title\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    author: authorV2 {\n      ...ArticleAuthor\n    }\n    articleSeo: seo {\n      title\n      description\n    }\n    countComments: comments(first: 250) {\n      nodes {\n        __typename\n      }\n    }\n  }\n\n  #graphql\n  fragment ArticleAuthor on ArticleAuthor {\n    name\n    email\n    firstName\n    lastName\n    bio\n  }\n\n  #graphql\n  fragment PageInfo on PageInfo {\n    startCursor\n    endCursor\n    hasPreviousPage\n    hasNextPage\n  }\n\n': {
    return: BlogCategoryQuery;
    variables: BlogCategoryQueryVariables;
  };
  '#graphql\n  query HomeBlog(\n    $query: String = "NOT author"\n    $featured: Int\n    $latest: Int\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    featured: articles(\n      query: $query\n      first: $featured\n      sortKey: RELEVANCE\n    ) {\n      nodes {\n        ...ArticleItem\n      }\n    }\n    latest: articles(\n      query: $query\n      first: $latest\n      sortKey: PUBLISHED_AT\n      reverse: true\n    ) {\n      nodes {\n        ...ArticleItem\n      }\n    }\n  }\n  #graphql\n  fragment ArticleItem on Article {\n    id\n    handle\n    title\n    tags\n    excerpt\n    contentHtml\n    excerptHtml\n    publishedAt\n    trackingParameters\n    blog {\n      id\n      handle\n      title\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    author: authorV2 {\n      ...ArticleAuthor\n    }\n    articleSeo: seo {\n      title\n      description\n    }\n    countComments: comments(first: 250) {\n      nodes {\n        __typename\n      }\n    }\n  }\n\n  #graphql\n  fragment ArticleAuthor on ArticleAuthor {\n    name\n    email\n    firstName\n    lastName\n    bio\n  }\n\n': {
    return: HomeBlogQuery;
    variables: HomeBlogQueryVariables;
  };
  '#graphql\n  query BlogCategories(\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    blogs(\n      first: $first,\n      last: $last,\n      before: $startCursor,\n      after: $endCursor\n      query: "NOT author"\n    ) {\n      categories: nodes {\n        ...Blog\n        articles(\n          first: 250\n        ) {\n          countArticles: nodes {\n            __typename\n          }\n        }\n      }\n      pageInfo {\n        ...PageInfo\n      }\n    }\n  }\n  #graphql\n  fragment Blog on Blog {\n    id\n    handle\n    title\n    blogSeo: seo {\n      title\n      description\n    }\n    blogImage: metafield(namespace: "category", key: "image") {\n      ...Metafield\n    }\n    blogDescription: metafield(namespace: "category", key: "description") {\n      ...Metafield\n    }\n  }\n\n  #graphql\n  fragment Metafield on Metafield {\n    id\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment PageInfo on PageInfo {\n    startCursor\n    endCursor\n    hasPreviousPage\n    hasNextPage\n  }\n\n': {
    return: BlogCategoriesQuery;
    variables: BlogCategoriesQueryVariables;
  };
  '#graphql\n  fragment Collection on Collection {\n    id\n    title\n    handle\n    description\n    collectionSeo :seo {\n      description\n      title\n    }\n    image {\n      altText\n      height\n      id\n      url\n      width\n    }\n    seoText: metafield(namespace: "collection", key: "seo_text") {\n      id\n      key\n      value\n    }\n  }\n\n  query Collection(\n    $handle: String!\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n    $filters: [ProductFilter!]\n    $noPriceFilters: [ProductFilter!]\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    collection(\n      handle: $handle\n    ) {\n      ...Collection\n      products(\n        first: $first\n        last: $last\n        before: $startCursor\n        after: $endCursor\n        sortKey: $sortKey\n        reverse: $reverse\n        filters: $filters\n      ) {\n        nodes {\n          ...ProductItem\n        }\n        filters {\n          ...Filter\n        }\n        pageInfo {\n          ...PageInfo\n        }\n      }\n    }\n\n    paginate: collection(handle: $handle) {\n      products(\n        first: 250\n        sortKey: $sortKey\n        reverse: $reverse\n        filters: $filters\n      ) {\n        edges {\n          cursor\n        }\n      }\n    }\n\n    minPrice: collection(\n      handle: $handle\n    ) {\n      products(\n        first: 1\n        sortKey: PRICE\n        filters: $noPriceFilters\n      ) {\n        nodes {\n          priceRange {\n            minVariantPrice {\n              amount\n            }\n          }\n        }\n      }\n    }\n\n    maxPrice: collection(\n      handle: $handle\n    ) {\n      products(\n        first: 1\n        sortKey: PRICE\n        reverse: true\n        filters: $noPriceFilters\n      ) {\n        nodes {\n          priceRange {\n            maxVariantPrice {\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n\n  #graphql\n  fragment ProductItem on Product {\n    id\n    handle\n    title\n    tags\n    vendor\n    createdAt\n    updatedAt\n    featuredImage {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    variants(first: 250) {\n      nodes {\n        ...ProductVariant\n      }\n    }\n    selectedOrFirstAvailableVariant(ignoreUnknownOptions: true, caseInsensitiveMatch: true) {\n      ...ProductVariant\n    }\n    adjacentVariants {\n      ...ProductVariant\n    }\n    ...PriceRange\n  }\n\n  #graphql\n  fragment ProductVariant on ProductVariant {\n    id\n    sku\n    title\n    barcode\n    availableForSale\n    quantityAvailable\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    price {\n      amount\n      currencyCode\n    }\n    product {\n      title\n      handle\n    }\n    selectedOptions {\n      name\n      value\n    }\n    unitPrice {\n      amount\n      currencyCode\n    }\n  }\n\n  #graphql\n  fragment Filter on Filter{\n    id\n    label\n    type\n    values {\n      id\n      label\n      count\n      input\n      swatch {\n      color\n      image {\n          ...Media\n        }\n      }\n    }\n  }\n\n  #graphql\n  fragment PageInfo on PageInfo {\n    startCursor\n    endCursor\n    hasPreviousPage\n    hasNextPage\n  }\n\n  #graphql\n  fragment PriceRange on Product {\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n': {
    return: CollectionQuery;
    variables: CollectionQueryVariables;
  };
  '#graphql\n  query HealthShop {\n    shop {\n      name\n    }\n  }\n': {
    return: HealthShopQuery;
    variables: HealthShopQueryVariables;
  };
  '#graphql\n  fragment Product on Product {\n    id\n    title\n    vendor\n    handle\n    descriptionHtml\n    description\n    tags\n    availableForSale\n    isGiftCard\n    productType\n    createdAt\n    updatedAt\n    encodedVariantExistence\n    encodedVariantAvailability\n    ...PriceRange\n    images(first: 250) {\n      nodes {\n        __typename\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n        firstSelectableVariant {\n          ...ProductVariant\n        }\n        swatch {\n          color\n          image {\n            ...Media\n          }\n        }\n      }\n    }\n    selectedOrFirstAvailableVariant(\n      selectedOptions: $selectedOptions\n      ignoreUnknownOptions: true\n      caseInsensitiveMatch: true\n    ) {\n      ...ProductVariant\n    }\n    adjacentVariants (selectedOptions: $selectedOptions) {\n      ...ProductVariant\n    }\n    productSeo: seo {\n      title\n      description\n    }\n    collections(first: 250) {\n      nodes {\n        id\n        title\n        handle\n      }\n    }\n  }\n\n  query Product(\n    $handle: String!\n    $selectedOptions: [SelectedOptionInput!]!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    product(handle: $handle) {\n      ...Product\n    }\n  }\n\n  #graphql\n  fragment ProductVariant on ProductVariant {\n    id\n    sku\n    title\n    barcode\n    availableForSale\n    quantityAvailable\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    price {\n      amount\n      currencyCode\n    }\n    product {\n      title\n      handle\n    }\n    selectedOptions {\n      name\n      value\n    }\n    unitPrice {\n      amount\n      currencyCode\n    }\n  }\n\n  #graphql\n  fragment PriceRange on Product {\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n  #graphql\n  fragment Metafield on Metafield {\n    id\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment MetaobjectField on MetaobjectField {\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n': {
    return: ProductQuery;
    variables: ProductQueryVariables;
  };
  '#graphql\n  fragment ComplementaryProduct on Product {\n    id\n    handle\n    title\n    selectedOrFirstAvailableVariant(\n      ignoreUnknownOptions: true\n      caseInsensitiveMatch: true\n    ) {\n      ...ProductVariant\n    }\n  }\n\n  query GetProductRecommendations(\n    $handle: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    recommendations: productRecommendations(\n      productHandle: $handle\n      intent: RELATED\n    ) {\n      ...ProductItem\n    }\n    complementary: productRecommendations(\n      productHandle: $handle\n      intent: COMPLEMENTARY\n    ) {\n      ...ComplementaryProduct\n    }\n  }\n\n  #graphql\n  fragment ProductItem on Product {\n    id\n    handle\n    title\n    tags\n    vendor\n    createdAt\n    updatedAt\n    featuredImage {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    variants(first: 250) {\n      nodes {\n        ...ProductVariant\n      }\n    }\n    selectedOrFirstAvailableVariant(ignoreUnknownOptions: true, caseInsensitiveMatch: true) {\n      ...ProductVariant\n    }\n    adjacentVariants {\n      ...ProductVariant\n    }\n    ...PriceRange\n  }\n\n  #graphql\n  fragment PriceRange on Product {\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n  }\n\n  #graphql\n  fragment ProductVariant on ProductVariant {\n    id\n    sku\n    title\n    barcode\n    availableForSale\n    quantityAvailable\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    price {\n      amount\n      currencyCode\n    }\n    product {\n      title\n      handle\n    }\n    selectedOptions {\n      name\n      value\n    }\n    unitPrice {\n      amount\n      currencyCode\n    }\n  }\n\n  #graphql\n  fragment MetaobjectField on MetaobjectField {\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n': {
    return: GetProductRecommendationsQuery;
    variables: GetProductRecommendationsQueryVariables;
  };
  '#graphql\n  query GetVariants(\n    $country: CountryCode\n    $language: LanguageCode\n    $handle: String!\n  ) @inContext(country: $country, language: $language) {\n    product(handle: $handle) {\n      variants(first: 250) {\n        nodes {\n          ...ProductVariant\n        }\n      }\n    }\n  }\n\n  #graphql\n  fragment ProductVariant on ProductVariant {\n    id\n    sku\n    title\n    barcode\n    availableForSale\n    quantityAvailable\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    price {\n      amount\n      currencyCode\n    }\n    product {\n      title\n      handle\n    }\n    selectedOptions {\n      name\n      value\n    }\n    unitPrice {\n      amount\n      currencyCode\n    }\n  }\n\n': {
    return: GetVariantsQuery;
    variables: GetVariantsQueryVariables;
  };
  '#graphql\n  fragment Page on Page {\n    id\n    title\n    body\n    handle\n    pageSeo: seo {\n      description\n      title\n    }\n    pageImage: metafield(namespace: "page", key: "image") {\n      ...Metafield\n    }\n  }\n\n  query Page(\n    $language: LanguageCode,\n    $country: CountryCode,\n    $handle: String!\n  ) @inContext(language: $language, country: $country) {\n    page(handle: $handle) {\n      ...Page\n    }\n  }\n\n  #graphql\n  fragment Metafield on Metafield {\n    id\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n': {
    return: PageQuery;
    variables: PageQueryVariables;
  };
  '#graphql\n  fragment Policy on ShopPolicy {\n    body\n    handle\n    id\n    title\n    url\n  }\n  query Policy(\n    $country: CountryCode\n    $language: LanguageCode\n    $privacyPolicy: Boolean!\n    $refundPolicy: Boolean!\n    $shippingPolicy: Boolean!\n    $termsOfService: Boolean!\n  ) @inContext(language: $language, country: $country) {\n    shop {\n      privacyPolicy @include(if: $privacyPolicy) {\n        ...Policy\n      }\n      shippingPolicy @include(if: $shippingPolicy) {\n        ...Policy\n      }\n      termsOfService @include(if: $termsOfService) {\n        ...Policy\n      }\n      refundPolicy @include(if: $refundPolicy) {\n        ...Policy\n      }\n    }\n  }\n': {
    return: PolicyQuery;
    variables: PolicyQueryVariables;
  };
  '#graphql\n  fragment PolicyItem on ShopPolicy {\n    id\n    title\n    handle\n  }\n\n  query Policies (\n    $country: CountryCode,\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    shop {\n      privacyPolicy {\n        ...PolicyItem\n      }\n      shippingPolicy {\n        ...PolicyItem\n      }\n      termsOfService {\n        ...PolicyItem\n      }\n      refundPolicy {\n        ...PolicyItem\n      }\n      subscriptionPolicy {\n        id\n        title\n        handle\n      }\n    }\n  }\n': {
    return: PoliciesQuery;
    variables: PoliciesQueryVariables;
  };
  '#graphql\n  query StoreRobots(\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    shop {\n      id\n    }\n  }\n': {
    return: StoreRobotsQuery;
    variables: StoreRobotsQueryVariables;
  };
  '#graphql\n    query SitemapMetaobjects($page: Int!) {\n      sitemap(type: METAOBJECT) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n            ... on SitemapResourceMetaobject {\n              type\n            }\n          }\n        }\n      }\n    }\n': {
    return: SitemapMetaobjectsQuery;
    variables: SitemapMetaobjectsQueryVariables;
  };
  '#graphql\n    query SitemapArticles($page: Int!) {\n      sitemap(type: ARTICLE) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapArticlesQuery;
    variables: SitemapArticlesQueryVariables;
  };
  '#graphql\n  query SearchArticleByHandle($query: String) {\n    articles(\n      query: $query\n      first: 250\n    ) {\n      nodes {\n        handle\n        title\n        blog {\n          handle\n        }\n        image {\n          alt: altText\n          filepath: url\n        }\n      }\n    }\n  }\n': {
    return: SearchArticleByHandleQuery;
    variables: SearchArticleByHandleQueryVariables;
  };
  '#graphql\n  query SitemapBlogs($page: Int!) {\n    sitemap(type: BLOG) {\n      resources(page: $page) {\n        items {\n          handle\n          updatedAt\n        }\n      }\n    }\n  }\n': {
    return: SitemapBlogsQuery;
    variables: SitemapBlogsQueryVariables;
  };
  '#graphql\n  query SearchBlogsByHandle(\n    $query: String!\n    $first: Int = 250\n  ) {\n    blogs(\n      query: $query\n      first: $first\n    ) {\n      nodes {\n        handle\n        title\n        blogImage: metafield(namespace: "category", key: "image") {\n          ...Metafield\n        }\n      }\n    }\n  }\n  #graphql\n  fragment Metafield on Metafield {\n    id\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n': {
    return: SearchBlogsByHandleQuery;
    variables: SearchBlogsByHandleQueryVariables;
  };
  '#graphql\n  query AuthorsInfoSitemap {\n    authors: blog(handle: "author") {\n      articles(first: 250) {\n        nodes {\n          authorV2 {\n            name\n            email\n          }\n        }\n      }\n    }\n  }\n': {
    return: AuthorsInfoSitemapQuery;
    variables: AuthorsInfoSitemapQueryVariables;
  };
  '#graphql\n    query SitemapCollections($page: Int!) {\n      sitemap(type: COLLECTION) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapCollectionsQuery;
    variables: SitemapCollectionsQueryVariables;
  };
  '#graphql\n  query GetCollectionsByHandle(\n    $query: String\n    $first: Int = 250\n  ) {\n    collections(\n      query: $query\n      first: $first\n    ) {\n      nodes {\n        title\n        handle\n        image {\n          ...SitemapImage\n        }\n      }\n    }\n  }\n  #graphql\n  fragment SitemapImage on Image {\n    alt: altText\n    filepath: url\n  }\n\n': {
    return: GetCollectionsByHandleQuery;
    variables: GetCollectionsByHandleQueryVariables;
  };
  '#graphql\n    query SitemapPages($page: Int!) {\n      sitemap(type: PAGE) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapPagesQuery;
    variables: SitemapPagesQueryVariables;
  };
  '#graphql\n  query SearchPageByHandle($query: String) {\n    pages(\n      query: $query\n      first: 250\n    ) {\n      nodes {\n        handle\n        title\n      }\n    }\n  }\n': {
    return: SearchPageByHandleQuery;
    variables: SearchPageByHandleQueryVariables;
  };
  '#graphql\n    query SitemapProducts($page: Int!) {\n      sitemap(type: PRODUCT) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapProductsQuery;
    variables: SitemapProductsQueryVariables;
  };
  '#graphql\n  query SearchProductsByHandle(\n    $query: String!\n    $first: Int = 250\n  ) {\n    products(\n      query: $query\n      first: $first\n    ) {\n      nodes {\n        handle\n        title\n        image: featuredImage {\n          ...SitemapImage\n        }\n      }\n    }\n  }\n  #graphql\n  fragment SitemapImage on Image {\n    alt: altText\n    filepath: url\n  }\n\n': {
    return: SearchProductsByHandleQuery;
    variables: SearchProductsByHandleQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
