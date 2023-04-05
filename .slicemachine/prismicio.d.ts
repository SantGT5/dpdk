// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for AboutPage documents */
interface AboutDocumentData {
    /**
     * Slice Zone field in *AboutPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: about.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<AboutDocumentDataSlicesSlice>;
}
/**
 * Slice for *AboutPage → Slice Zone*
 *
 */
type AboutDocumentDataSlicesSlice = NavSlice | HeroSlice | FooterSlice | AboutContentSlice;
/**
 * AboutPage document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for ArticlesPage documents */
interface ArticlesDocumentData {
    /**
     * Slice Zone field in *ArticlesPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: articles.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ArticlesDocumentDataSlicesSlice>;
}
/**
 * Slice for *ArticlesPage → Slice Zone*
 *
 */
type ArticlesDocumentDataSlicesSlice = NavSlice | HeroSlice | StoriesListSlice | FooterSlice;
/**
 * ArticlesPage document from Prismic
 *
 * - **API ID**: `articles`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticlesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ArticlesDocumentData>, "articles", Lang>;
/** Content for ContactMePage documents */
interface ContactDocumentData {
    /**
     * Slice Zone field in *ContactMePage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ContactDocumentDataSlicesSlice>;
}
/**
 * Slice for *ContactMePage → Slice Zone*
 *
 */
type ContactDocumentDataSlicesSlice = NavSlice | HeroSlice | FooterSlice | SendMessageSlice;
/**
 * ContactMePage document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ContactDocumentData>, "contact", Lang>;
export type AllDocumentTypes = AboutDocument | ArticlesDocument | ContactDocument;
/**
 * Primary content in AboutContent → Primary
 *
 */
interface AboutContentSliceDefaultPrimary {
    /**
     * Description field in *AboutContent → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_content.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Img field in *AboutContent → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_content.primary.aboutimg
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    aboutimg: prismicT.ImageField<never>;
    /**
     * ImgDesc field in *AboutContent → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_content.primary.imgdesc
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    imgdesc: prismicT.KeyTextField;
    /**
     * Quote field in *AboutContent → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_content.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    quote: prismicT.KeyTextField;
    /**
     * Text field in *AboutContent → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_content.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
}
/**
 * Default variation for AboutContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AboutContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AboutContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *AboutContent*
 *
 */
type AboutContentSliceVariation = AboutContentSliceDefault;
/**
 * AboutContent Shared Slice
 *
 * - **API ID**: `about_content`
 * - **Description**: `AboutContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutContentSlice = prismicT.SharedSlice<"about_content", AboutContentSliceVariation>;
/**
 * Primary content in Footer → Primary
 *
 */
interface FooterSliceDefaultPrimary {
    /**
     * Title field in *Footer → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: footer.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Footer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: footer.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Footer*
 *
 */
type FooterSliceVariation = FooterSliceDefault;
/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSlice = prismicT.SharedSlice<"footer", FooterSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Title field in *Hero → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
    /**
     * profile_Img field in *Hero → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.items[].profile_img
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profile_img: prismicT.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, Simplify<HeroSliceDefaultItem>>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Nav → Primary
 *
 */
interface NavSliceDefaultPrimary {
    /**
     * Title field in *Nav → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: nav.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Nav → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: nav.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Nav → Items
 *
 */
export interface NavSliceDefaultItem {
    /**
     * link field in *Nav → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: nav.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * label field in *Nav → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: nav.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
}
/**
 * Default variation for Nav Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Nav`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavSliceDefaultPrimary>, Simplify<NavSliceDefaultItem>>;
/**
 * Slice variation for *Nav*
 *
 */
type NavSliceVariation = NavSliceDefault;
/**
 * Nav Shared Slice
 *
 * - **API ID**: `nav`
 * - **Description**: `Nav`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavSlice = prismicT.SharedSlice<"nav", NavSliceVariation>;
/**
 * Primary content in SendMessage → Primary
 *
 */
interface SendMessageSliceDefaultPrimary {
    /**
     * text field in *SendMessage → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: send_message.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
}
/**
 * Default variation for SendMessage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SendMessage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SendMessageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SendMessageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *SendMessage*
 *
 */
type SendMessageSliceVariation = SendMessageSliceDefault;
/**
 * SendMessage Shared Slice
 *
 * - **API ID**: `send_message`
 * - **Description**: `SendMessage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SendMessageSlice = prismicT.SharedSlice<"send_message", SendMessageSliceVariation>;
/**
 * Item in StoriesList → Items
 *
 */
export interface StoriesListSliceDefaultItem {
    /**
     * StoryImg field in *StoriesList → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: stories_list.items[].storyimg
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    storyimg: prismicT.ImageField<never>;
    /**
     * Title field in *StoriesList → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: stories_list.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Date field in *StoriesList → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: stories_list.items[].date
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    date: prismicT.KeyTextField;
    /**
     * Description field in *StoriesList → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: stories_list.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
}
/**
 * Default variation for StoriesList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `StoriesList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StoriesListSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<StoriesListSliceDefaultItem>>;
/**
 * Slice variation for *StoriesList*
 *
 */
type StoriesListSliceVariation = StoriesListSliceDefault;
/**
 * StoriesList Shared Slice
 *
 * - **API ID**: `stories_list`
 * - **Description**: `StoriesList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StoriesListSlice = prismicT.SharedSlice<"stories_list", StoriesListSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocumentDataSlicesSlice, AboutDocument, ArticlesDocumentData, ArticlesDocumentDataSlicesSlice, ArticlesDocument, ContactDocumentData, ContactDocumentDataSlicesSlice, ContactDocument, AllDocumentTypes, AboutContentSliceDefaultPrimary, AboutContentSliceDefault, AboutContentSliceVariation, AboutContentSlice, FooterSliceDefaultPrimary, FooterSliceDefault, FooterSliceVariation, FooterSlice, HeroSliceDefaultPrimary, HeroSliceDefaultItem, HeroSliceDefault, HeroSliceVariation, HeroSlice, NavSliceDefaultPrimary, NavSliceDefaultItem, NavSliceDefault, NavSliceVariation, NavSlice, SendMessageSliceDefaultPrimary, SendMessageSliceDefault, SendMessageSliceVariation, SendMessageSlice, StoriesListSliceDefaultItem, StoriesListSliceDefault, StoriesListSliceVariation, StoriesListSlice };
    }
}
