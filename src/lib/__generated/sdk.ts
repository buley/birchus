// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageTopicCollection?: Maybe<PageTopicCollection>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageTopicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeo = Entry & {
  __typename?: 'ComponentSeo';
  canonicalUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageTopicCollection?: Maybe<PageTopicCollection>;
  staticCollection?: Maybe<StaticCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageTopicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageTopicCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsStaticCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsStaticCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSeoLinkingCollectionsPageArticleCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageTopicCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsStaticCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticle = Entry & {
  __typename?: 'PageArticle';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  featuredProductImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageArticleLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  productImagesCollection?: Maybe<AssetCollection>;
  relatedProductsCollection?: Maybe<PageArticleRelatedProductsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleFeaturedProductImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleProductImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleRelatedProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleRelatedProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** To output data for a single piece of produced content. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageArticle) */
export type PageArticleSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageArticleCollection = {
  __typename?: 'PageArticleCollection';
  items: Array<Maybe<PageArticle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageArticleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProducts?: InputMaybe<CfPageProductNestedFilter>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageArticleLinkingCollections = {
  __typename?: 'PageArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageTopicCollection?: Maybe<PageTopicCollection>;
};


export type PageArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageArticleLinkingCollectionsPageTopicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleLinkingCollectionsPageTopicCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageArticleLinkingCollectionsPageTopicCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageArticleOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageArticleRelatedProductsCollection = {
  __typename?: 'PageArticleRelatedProductsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageArticleRelatedProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLanding = Entry & {
  __typename?: 'PageLanding';
  contentfulMetadata: ContentfulMetadata;
  heroBannerHeadline?: Maybe<Scalars['String']>;
  heroBannerHeadlineColor?: Maybe<Scalars['String']>;
  heroBannerImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  mediaCollection?: Maybe<PageLandingMediaCollection>;
  productsCollection?: Maybe<PageLandingProductsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingHeroBannerHeadlineColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageTopicFilter>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroBannerHeadline?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadlineColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadlineColor_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  media?: InputMaybe<CfPageTopicNestedFilter>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  products?: InputMaybe<CfPageProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageTopicCollection?: Maybe<PageTopicCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLandingLinkingCollectionsPageTopicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingLinkingCollectionsPageTopicCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLandingLinkingCollectionsPageTopicCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingMediaCollection = {
  __typename?: 'PageLandingMediaCollection';
  items: Array<Maybe<PageTopic>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageLandingMediaCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLandingOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingProductsCollection = {
  __typename?: 'PageLandingProductsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageLandingProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProduct = Entry & {
  __typename?: 'PageProduct';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  featuredProductImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageProductLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productImagesCollection?: Maybe<AssetCollection>;
  relatedProductsCollection?: Maybe<PageProductRelatedProductsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductFeaturedProductImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductProductImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductRelatedProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductRelatedProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageProduct) */
export type PageProductSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageProductCollection = {
  __typename?: 'PageProductCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProducts?: InputMaybe<CfPageProductNestedFilter>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageProductLinkingCollections = {
  __typename?: 'PageProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageTopicCollection?: Maybe<PageTopicCollection>;
};


export type PageProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProductLinkingCollectionsPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProductLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProductLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProductLinkingCollectionsPageTopicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageTopicCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageProductLinkingCollectionsPageArticleCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductLinkingCollectionsPageLandingCollectionOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductLinkingCollectionsPageProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductLinkingCollectionsPageTopicCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageProductRelatedProductsCollection = {
  __typename?: 'PageProductRelatedProductsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageProductRelatedProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopic = Entry & {
  __typename?: 'PageTopic';
  articlesCollection?: Maybe<PageTopicArticlesCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  featuredMediaImage?: Maybe<Asset>;
  heroBannerHeadline?: Maybe<Scalars['String']>;
  heroBannerHeadlineColor?: Maybe<Scalars['String']>;
  heroBannerImage?: Maybe<Asset>;
  homepage?: Maybe<PageLanding>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageTopicLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  productsCollection?: Maybe<PageTopicProductsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicArticlesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageTopicArticlesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageArticleFilter>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicFeaturedMediaImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicHeroBannerHeadlineColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicHomepageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageLandingFilter>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageTopicProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** To have a place for topic-based hubs. [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/pageTopic) */
export type PageTopicSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageTopicArticlesCollection = {
  __typename?: 'PageTopicArticlesCollection';
  items: Array<Maybe<PageArticle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageTopicArticlesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTopicCollection = {
  __typename?: 'PageTopicCollection';
  items: Array<Maybe<PageTopic>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageTopicFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTopicFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageTopicFilter>>>;
  articles?: InputMaybe<CfPageArticleNestedFilter>;
  articlesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredMediaImage_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadlineColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadlineColor_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerImage_exists?: InputMaybe<Scalars['Boolean']>;
  homepage?: InputMaybe<CfPageLandingNestedFilter>;
  homepage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products?: InputMaybe<CfPageProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageTopicLinkingCollections = {
  __typename?: 'PageTopicLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type PageTopicLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageTopicLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageTopicLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageTopicLinkingCollectionsPageLandingCollectionOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageTopicOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTopicProductsCollection = {
  __typename?: 'PageTopicProductsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageTopicProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageArticle?: Maybe<PageArticle>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProduct?: Maybe<PageProduct>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageTopic?: Maybe<PageTopic>;
  pageTopicCollection?: Maybe<PageTopicCollection>;
  static?: Maybe<Static>;
  staticCollection?: Maybe<StaticCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPageArticleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageArticleFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryPageProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


export type QueryPageTopicArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageTopicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageTopicOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageTopicFilter>;
};


export type QueryStaticArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStaticCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StaticOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StaticFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
};

/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/static) */
export type Static = Entry & {
  __typename?: 'Static';
  contentBody?: Maybe<StaticContentBody>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<StaticLinkingCollections>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/static) */
export type StaticContentBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/static) */
export type StaticInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/static) */
export type StaticLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/r11leasokahm/content_types/static) */
export type StaticSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type StaticCollection = {
  __typename?: 'StaticCollection';
  items: Array<Maybe<Static>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StaticContentBody = {
  __typename?: 'StaticContentBody';
  json: Scalars['JSON'];
  links: StaticContentBodyLinks;
};

export type StaticContentBodyAssets = {
  __typename?: 'StaticContentBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type StaticContentBodyEntries = {
  __typename?: 'StaticContentBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type StaticContentBodyLinks = {
  __typename?: 'StaticContentBodyLinks';
  assets: StaticContentBodyAssets;
  entries: StaticContentBodyEntries;
  resources: StaticContentBodyResources;
};

export type StaticContentBodyResources = {
  __typename?: 'StaticContentBodyResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type StaticFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaticFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StaticFilter>>>;
  contentBody_contains?: InputMaybe<Scalars['String']>;
  contentBody_exists?: InputMaybe<Scalars['Boolean']>;
  contentBody_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type StaticLinkingCollections = {
  __typename?: 'StaticLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StaticLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StaticOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageArticleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageArticleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageArticleNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageLandingNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageLandingNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageLandingNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroBannerHeadline?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadlineColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadlineColor_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageTopicNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageTopicNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageTopicNestedFilter>>>;
  articlesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredMediaImage_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadlineColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadlineColor_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerImage_exists?: InputMaybe<Scalars['Boolean']>;
  homepage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;