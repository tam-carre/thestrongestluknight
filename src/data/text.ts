export const text: TranslationData = {
  navbar: {
    top: {
      en: 'Top',
      jp: 'Top'
    },
    playlist: {
      en: 'Playlist',
      jp: 'プレーリスト'
    },
    messages: {
      en: 'Messages',
      jp: 'メッセージ'
    },
    credits: {
      en: 'Credits',
      jp: 'クレジット'
    },
  },
  header: {
    toTheStrongest: {
      en: 'To the strongest',
      jp: '最強の'
    },
    luknight: {
      en: 'Luknight',
      jp: 'ルーナイトへ'
    },
  },
  introduction: {
    firstParagraph: {
      en: 'Hey Kaichou, we Luknights want you to know that everyone is going to miss you dearly.',
      jp: '我々ルーナイトは、みんなが会長のことを心から寂しく思っていることを知ってほしいのです。',
    },
    secondParagraph: {
      en: "Here's our HimeCoco playlist so everyone, including you, can remember the good times—and just a little further down, you can read everyone's parting words for you.",
      jp: "会長もみんなも楽しかった頃を思い出せるように、姫ココのプレイリストを紹介します。さらにその下には、みんなからのお別れの言葉が書かれています。",
    }
  },
  playlist: {
    himeCocoPlaylist: {
      en: 'HimeCoco playlist',
      jp: '姫ココプレーリスト'
    }
  },
  messages: {
    messagesFromLuknights: {
      en: 'Messages from Luknights',
      jp: 'ルーナイトからメッセージ'
    }
  },
  credits: {
    credits: {
      en: 'Credits',
      jp: 'クレジット',
    },
    artwork: {
      en: 'Artwork',
      jp: 'アート',
    },
    organization: {
      en: 'Organization',
      jp: 'オルグ',
    },
    website: {
      en: 'Website',
      jp: 'ウェブサイト',
    },
    clipping: {
      en: 'Clipping',
      jp: '切り抜き',
    },
    himeCocoPlaylist: {
      en: 'HimeCoco playlist',
      jp: '姫ココプレーリスト',
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
