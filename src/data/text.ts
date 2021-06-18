export const text: TranslationData = {
  navbar: {
    top: {
      en: 'Top',
      jp: 'Top'
    },
    playlist: {
      en: 'Playlist',
      jp: 'Playlist'
    },
    messages: {
      en: 'Messages',
      jp: 'Messages'
    },
    credits: {
      en: 'Credits',
      jp: 'Credits'
    },
  },
  header: {
    toTheStrongest: {
      en: 'To the strongest',
      jp: 'To the strongest'
    },
    luknight: {
      en: 'Luknight',
      jp: 'Luknight'
    },
  },
  playlist: {
    firstParagraph: {
      en: 'Hey Kaichou, we Luknights want you to know that everyone is going to miss you dearly.',
      jp: 'マリオ（英: Mario）は、任天堂が開発・発売しているコンピューターゲーム｢スーパーマリオシリーズ｣に登場する架空の人物で、同社の登録商標（第2343144号ほか）。',
    },
    secondParagraph: {
      en: "Here's our HimeCoco playlist so everyone, including you, can remember the good times—and just a little further down, you can read everyone's parting words for you.",
      jp: "Here's our HimeCoco playlist so everyone, including you, can remember the good times—and just a little further down, you can read everyone's parting words for you.",
    }
  },
  credits: {
    credits: {
      en: 'Credits',
      jp: 'Credits',
    },
    artwork: {
      en: 'Artwork',
      jp: 'Artwork',
    },
    organization: {
      en: 'Organization',
      jp: 'Organization',
    },
    website: {
      en: 'Website',
      jp: 'Website',
    },
    clipping: {
      en: 'Clipping',
      jp: 'Clipping',
    },
    himeCocoPlaylist: {
      en: 'HimeCoco playlist',
      jp: 'HimeCoco playlist',
    },
  }
}

///////////////////////////////////////////////////////////////////////////////

type TranslationData  = Record<TranslationCategory, ItemTranslations>
type ItemTranslations = Record<ItemName, Translation>
type Translation      = Record<LanguageCode, string>

type TranslationCategory = string
type ItemName            = string
type LanguageCode        = "en" | "jp"
