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

export type StoreContentQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type StoreContentQuery = {
  store?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metaobject, 'id' | 'type'> & {
      name?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
      description?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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

export type FooterContentQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type FooterContentQuery = {
  footer?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metaobject, 'id' | 'type'> & {
      name?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
      description?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
      copyright?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
      payments?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
      socialMedia?: StorefrontAPI.Maybe<{
        references?: StorefrontAPI.Maybe<{
          nodes: Array<{
            fields: Array<
              Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
          }>;
        }>;
      }>;
    }
  >;
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

export type AuthorInfoFragment = {
  jobTitle?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
  location?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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
  shortDescription?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MetaobjectField, 'key' | 'type' | 'value'> & {
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

export type AuthorInfoQueryVariables = StorefrontAPI.Exact<{
  authorHandle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type AuthorInfoQuery = {
  authorInfo?: StorefrontAPI.Maybe<{
    articleByHandle?: StorefrontAPI.Maybe<{
      author?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.ArticleAuthor,
          'name' | 'email' | 'firstName' | 'lastName' | 'bio'
        >
      >;
      info?: StorefrontAPI.Maybe<
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
            | (Pick<StorefrontAPI.Metaobject, 'type'> & {
                jobTitle?: StorefrontAPI.Maybe<
                  Pick<
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
                location?: StorefrontAPI.Maybe<
                  Pick<
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
                shortDescription?: StorefrontAPI.Maybe<
                  Pick<
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
      socials?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'key' | 'type' | 'value'> & {
          references?: StorefrontAPI.Maybe<{
            nodes: Array<{
              fields: Array<
                Pick<
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
            }>;
          }>;
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
    }>;
  }>;
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
  '#graphql\n  query StoreContent {\n    store: metaobject(handle: {type: "store", handle: "store"}) {\n      id\n      type\n      name: field(key: "name") {\n        ...MetaobjectField\n      }\n      description: field(key: "description") {\n        ...MetaobjectField\n      }\n    }\n  }\n  #graphql\n  fragment MetaobjectField on MetaobjectField {\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n': {
    return: StoreContentQuery;
    variables: StoreContentQueryVariables;
  };
  '#graphql\n  query FooterContent {\n    footer: metaobject(handle: {type: "footer", handle: "footer"}) {\n      id\n      type\n      name: field(key: "name") {\n        ...MetaobjectField\n      }\n      description: field(key: "description") {\n        ...MetaobjectField\n      }\n      copyright: field(key: "copyright") {\n        ...MetaobjectField\n      }\n      payments: field(key: "payments") {\n        ...MetaobjectField\n      }\n      socialMedia: field(key: "social_media") {\n        references(first: 250) {\n          nodes {\n            ... on Metaobject {\n              fields {\n                ...MetaobjectField\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  #graphql\n  fragment MetaobjectField on MetaobjectField {\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n': {
    return: FooterContentQuery;
    variables: FooterContentQueryVariables;
  };
  '#graphql\n  query Menu(\n    $handle: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    menu(\n      handle: $handle\n    ) {\n      ...Menu\n    }\n  }\n  #graphql\n  fragment Menu on Menu {\n    __typename\n    id\n    title\n    items {\n      ...ParentMenuItem\n    }\n  }\n\n  fragment ParentMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      __typename\n      ...ChildMenuItem\n    }\n  }\n\n  fragment ChildMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      __typename\n      ...SubChildMenuItem\n    }\n  }\n\n  fragment SubChildMenuItem on MenuItem {\n    ...MenuItem\n  }\n\n  fragment MenuItem on MenuItem {\n    __typename\n    id\n    title\n    type\n    url\n    tags\n    resourceId\n    resource {\n      ...MenuItemResource\n    }\n  }\n\n  fragment MenuImage on Image {\n    altText\n    height\n    id\n    url\n    width\n    __typename\n  }\n\n  fragment MenuCollection on Collection {\n    __typename\n    id\n    title\n    handle\n    image {\n      ...MenuImage\n    }\n  }\n\n  fragment MenuProduct on Product {\n    __typename\n    id\n    title\n    handle\n    images(first: 1) {\n      nodes {\n        ...MenuImage\n      }\n    }\n  }\n\n  fragment MenuBlog on Blog {\n    __typename\n    id\n    title\n    handle\n    articles(first: 1) {\n      nodes {\n        ...MenuArticle\n      }\n    }\n  }\n\n  fragment MenuArticle on Article {\n    __typename\n    id\n    title\n    handle\n    blog {\n      handle\n    }\n    image {\n      ...MenuImage\n    }\n  }\n\n  fragment MenuPage on Page {\n    __typename\n    id\n    title\n    handle\n  }\n\n  fragment MenuShopPolicy on ShopPolicy {\n    __typename\n    id\n    title\n    handle\n  }\n\n  fragment MenuItemResource on MenuItemResource {\n    ... on Collection {\n      ...MenuCollection\n    }\n    ... on Product {\n      ...MenuProduct\n    }\n    ... on Blog {\n      ...MenuBlog\n    }\n    ... on Article {\n      ...MenuArticle\n    }\n    ... on Page {\n      ...MenuPage\n    }\n    ... on ShopPolicy {\n      ...MenuShopPolicy\n    }\n  }\n\n': {
    return: MenuQuery;
    variables: MenuQueryVariables;
  };
  '#graphql\n  query Articles(\n    $query: String!\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n    $sortKey: ArticleSortKeys\n    $reverse: Boolean\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    articles(\n      query: $query\n      first: $first\n      last: $last\n      before: $startCursor\n      after: $endCursor\n      reverse: $reverse\n      sortKey: $sortKey\n    ) {\n      nodes {\n        ...ArticleItem\n      }\n      pageInfo {\n        ...PageInfo\n      }\n    }\n  }\n  #graphql\n  fragment ArticleItem on Article {\n    id\n    handle\n    title\n    tags\n    excerpt\n    contentHtml\n    excerptHtml\n    publishedAt\n    trackingParameters\n    blog {\n      id\n      handle\n      title\n    }\n    image {\n      __typename\n      altText\n      height\n      id\n      url\n      width\n    }\n    author: authorV2 {\n      ...ArticleAuthor\n    }\n    articleSeo: seo {\n      title\n      description\n    }\n    countComments: comments(first: 250) {\n      nodes {\n        __typename\n      }\n    }\n  }\n\n  #graphql\n  fragment ArticleAuthor on ArticleAuthor {\n    name\n    email\n    firstName\n    lastName\n    bio\n  }\n\n  #graphql\n  fragment PageInfo on PageInfo {\n    startCursor\n    endCursor\n    hasPreviousPage\n    hasNextPage\n  }\n\n': {
    return: ArticlesQuery;
    variables: ArticlesQueryVariables;
  };
  '#graphql\n  fragment AuthorInfo on Metaobject {\n    jobTitle: field(key: "job_title") {\n      ...MetaobjectField\n    }\n    location: field(key: "location") {\n      ...MetaobjectField\n    }\n    shortDescription: field(key: "short_description") {\n      ...MetaobjectField\n    }\n  }\n\n  query AuthorInfo(\n    $authorHandle: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    authorInfo: blog(handle: "author") {\n      articleByHandle(handle: $authorHandle) {\n        author: authorV2 {\n          ...ArticleAuthor\n        }\n        info: metafield(namespace: "author" key: "info") {\n          ...Metafield\n          reference {\n            ... on Metaobject {\n              type\n              ...AuthorInfo\n            }\n          }\n        }\n        socials: metafield(namespace: "author" key: "socials") {\n          ...Metafield\n          references(first: 250) {\n            nodes {\n              ... on Metaobject {\n                fields {\n                  ...MetaobjectField\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  #graphql\n  fragment ArticleAuthor on ArticleAuthor {\n    name\n    email\n    firstName\n    lastName\n    bio\n  }\n\n  #graphql\n  fragment Metafield on Metafield {\n    id\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment MetaobjectField on MetaobjectField {\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n': {
    return: AuthorInfoQuery;
    variables: AuthorInfoQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
