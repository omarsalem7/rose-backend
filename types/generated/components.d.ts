import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsCardSector extends Struct.ComponentSchema {
  collectionName: 'components_about_us_card_sectors';
  info: {
    displayName: 'card-sector';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    list: Schema.Attribute.Component<'components.list', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsHero extends Struct.ComponentSchema {
  collectionName: 'components_about_us_heroes';
  info: {
    displayName: 'hero';
    icon: 'attachment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsHowWrok extends Struct.ComponentSchema {
  collectionName: 'components_about_us_how_wroks';
  info: {
    displayName: 'how-wrok';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'components.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    images: Schema.Attribute.Media<'images', true>;
    list: Schema.Attribute.Component<'components.list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsOurMessage extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_messages';
  info: {
    displayName: 'our-message';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    endDescription: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsOurVision extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_visions';
  info: {
    displayName: 'our-vision';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsSectorSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_sector_sections';
  info: {
    displayName: 'sector-section';
  };
  attributes: {
    card: Schema.Attribute.Component<'about-us.card-sector', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface ComponentsBulkOrder extends Struct.ComponentSchema {
  collectionName: 'components_components_bulk_orders';
  info: {
    displayName: 'bulkOrder';
    icon: 'connector';
  };
  attributes: {
    card1: Schema.Attribute.Component<'components.card', false>;
    card2: Schema.Attribute.Component<'components.card', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    icon: 'command';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'card';
    icon: 'check';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsContactUs extends Struct.ComponentSchema {
  collectionName: 'components_components_contactuses';
  info: {
    displayName: 'contactUs';
    icon: 'file';
  };
  attributes: {
    fieldEmail: Schema.Attribute.String;
    fieldMessage: Schema.Attribute.Text;
    fieldName: Schema.Attribute.String;
    fieldPhone: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_sections';
  info: {
    displayName: 'featureSection';
    icon: 'star';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.list-text-img', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0645\u0632\u0627\u064A\u0627 \u0631\u0648\u0632 \u0648\u0648\u062F \u0627\u0644\u062A\u0646\u0627\u0641\u0633\u064A\u0629'>;
  };
}

export interface ComponentsFooterItems extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_items';
  info: {
    displayName: 'footerItems';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.list-text-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFooterList extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_lists';
  info: {
    displayName: 'footer-list';
  };
  attributes: {};
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'header';
    icon: 'bold';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    subTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsList extends Struct.ComponentSchema {
  collectionName: 'components_components_lists';
  info: {
    displayName: 'list(text)';
    icon: 'arrowRight';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ComponentsListTextImg extends Struct.ComponentSchema {
  collectionName: 'components_components_list_text_img_s';
  info: {
    displayName: 'list(text-img)';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface ComponentsListTextLink extends Struct.ComponentSchema {
  collectionName: 'components_components_list_text_link_s';
  info: {
    displayName: 'list(text-link)';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsQuotation extends Struct.ComponentSchema {
  collectionName: 'components_components_quotations';
  info: {
    displayName: 'quotation';
    icon: 'crown';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_components_video_sections';
  info: {
    displayName: 'videoSection';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ComponentsWhyRoseWood extends Struct.ComponentSchema {
  collectionName: 'components_components_why_rose_woods';
  info: {
    displayName: 'whyRoseWood';
    icon: 'crown';
  };
  attributes: {
    features: Schema.Attribute.Component<'components.list-text-img', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_components_whyuses';
  info: {
    displayName: 'whyUs';
    icon: 'alien';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'components.button', true>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    listPoints: Schema.Attribute.Component<'components.list', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.card-sector': AboutUsCardSector;
      'about-us.hero': AboutUsHero;
      'about-us.how-wrok': AboutUsHowWrok;
      'about-us.our-message': AboutUsOurMessage;
      'about-us.our-vision': AboutUsOurVision;
      'about-us.sector-section': AboutUsSectorSection;
      'components.bulk-order': ComponentsBulkOrder;
      'components.button': ComponentsButton;
      'components.card': ComponentsCard;
      'components.contact-us': ComponentsContactUs;
      'components.feature-section': ComponentsFeatureSection;
      'components.footer-items': ComponentsFooterItems;
      'components.footer-list': ComponentsFooterList;
      'components.header': ComponentsHeader;
      'components.list': ComponentsList;
      'components.list-text-img': ComponentsListTextImg;
      'components.list-text-link': ComponentsListTextLink;
      'components.quotation': ComponentsQuotation;
      'components.video-section': ComponentsVideoSection;
      'components.why-rose-wood': ComponentsWhyRoseWood;
      'components.why-us': ComponentsWhyUs;
    }
  }
}
