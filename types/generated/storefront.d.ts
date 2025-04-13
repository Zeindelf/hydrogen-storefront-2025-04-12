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

export type HealthShopQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type HealthShopQuery = {shop: Pick<StorefrontAPI.Shop, 'name'>};

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
  '#graphql\n  fragment AuthorInfo on Metaobject {\n    jobTitle: field(key: "job_title") {\n      ...MetaobjectField\n    }\n    location: field(key: "location") {\n      ...MetaobjectField\n    }\n    shortDescription: field(key: "short_description") {\n      ...MetaobjectField\n    }\n  }\n\n  query AuthorInfo(\n    $authorHandle: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    authorInfo: blog(handle: "author") {\n      articleByHandle(handle: $authorHandle) {\n        author: authorV2 {\n          ...ArticleAuthor\n        }\n        info: metafield(namespace: "author" key: "info") {\n          ...Metafield\n          reference {\n            ... on Metaobject {\n              type\n              ...AuthorInfo\n            }\n          }\n        }\n        socials: metafield(namespace: "author" key: "socials") {\n          ...Metafield\n          references(first: 250) {\n            nodes {\n              ... on Metaobject {\n                fields {\n                  ...MetaobjectField\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  #graphql\n  fragment ArticleAuthor on ArticleAuthor {\n    name\n    email\n    firstName\n    lastName\n    bio\n  }\n\n  #graphql\n  fragment Metafield on Metafield {\n    id\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n  #graphql\n  fragment GenericFile on GenericFile {\n    ... on GenericFile {\n      id\n      url\n      mimeType\n      originalFileSize\n    }\n  }\n\n  #graphql\n  fragment Media on Media {\n    __typename\n    alt\n    mediaContentType\n    previewImage {\n      __typename\n      altText\n      url\n    }\n    ... on MediaImage {\n      __typename\n      id\n      image {\n        __typename\n        altText\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      __typename\n      id\n      sources {\n        __typename\n        format\n        filesize\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      __typename\n      alt\n      embedUrl\n      host\n      id\n      originUrl\n      previewImage {\n        altText\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n\n  #graphql\n  fragment MetaobjectField on MetaobjectField {\n    key\n    type\n    value\n    reference {\n      ...Media\n      ...GenericFile\n    }\n  }\n\n': {
    return: AuthorInfoQuery;
    variables: AuthorInfoQueryVariables;
  };
  '#graphql\n  query HealthShop {\n    shop {\n      name\n    }\n  }\n': {
    return: HealthShopQuery;
    variables: HealthShopQueryVariables;
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
