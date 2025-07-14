import type { Schema, Struct } from '@strapi/strapi';

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

export interface ComponentsFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_sections';
  info: {
    displayName: 'featureSection';
    icon: 'star';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.list-text-img', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0645\u0632\u0627\u064A\u0627 \u0631\u0648\u0632 \u0648\u0648\u062F \u0627\u0644\u062A\u0646\u0627\u0641\u0633\u064A\u0629'>;
  };
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
    five: Schema.Attribute.Component<'components.list-text-img', false>;
    four: Schema.Attribute.Component<'components.list-text-img', false>;
    one: Schema.Attribute.Component<'components.list-text-img', false>;
    six: Schema.Attribute.Component<'components.list-text-img', false>;
    three: Schema.Attribute.Component<'components.list-text-img', false>;
    title: Schema.Attribute.String;
    two: Schema.Attribute.Component<'components.list-text-img', false>;
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
      'components.bulk-order': ComponentsBulkOrder;
      'components.button': ComponentsButton;
      'components.card': ComponentsCard;
      'components.feature-section': ComponentsFeatureSection;
      'components.header': ComponentsHeader;
      'components.list': ComponentsList;
      'components.list-text-img': ComponentsListTextImg;
      'components.video-section': ComponentsVideoSection;
      'components.why-rose-wood': ComponentsWhyRoseWood;
      'components.why-us': ComponentsWhyUs;
    }
  }
}
