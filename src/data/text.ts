export type LanguageCode = 'en' | 'jp'

export const text: TranslationData = {
  navbar: {
    top: {
      en: 'Top',
      jp: 'トップ'
    },
    playlist: {
      en: 'Playlist',
      jp: 'プレイリスト'
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
      jp: 'ココ会長、貴方に会えなくてみんなとても寂しくなるのですよ。',
    },
    secondParagraph: {
      en: "Here's our HimeCoco playlist so everyone, including you, can remember the good times—and just a little further down, you can read everyone's parting words for you.",
      jp: "会長も、そしてみんなも素敵な日々を思いだせるように姫ココのプレイリストを用意しました。その下にはみんなから会長へのお別れの言葉が綴られています。",
    }
  },
  playlist: {
    himeCocoPlaylist: {
      en: 'HimeCoco playlist',
      jp: '姫ココプレイリスト'
    }
  },
  messages: {
    messagesFromLuknights: {
      en: 'Messages from Luknights',
      jp: 'ルーナイトからのメッセージ'
    }
  },
  credits: {
    credits: {
      en: 'Credits',
      jp: 'クレジット',
    },
    Artwork: {
      en: 'Artwork',
      jp: 'アート',
    },
    Organization: {
      en: 'Organization',
      jp: '計画•制作',
    },
    Website: {
      en: 'Website',
      jp: 'ウェブサイト',
    },
    Clipping: {
      en: 'Clipping',
      jp: '切り抜き',
    },
    'HimeCoco playlist': {
      en: 'Playlist',
      jp: 'プレーリスト',
    },
    'Project leader': {
      en: 'Project leader',
      jp: 'プロジェクトリーダー'
    },
    'Internal translation': {
      en: 'Internal translation',
      jp: 'チーム内通訳'
    },
    Translation: {
      en: 'Translation',
      jp: '翻訳'
    },
    Creator: {
      en: 'Creator',
      jp: 'クリエーター'
    },
    Contributor: {
      en: 'Contributor',
      jp: 'コントリビューター'
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

type TranslationData  = Record<TranslationCategory, ItemTranslations>
type ItemTranslations = Record<ItemName, Translation>
type Translation      = Record<LanguageCode, string>

type TranslationCategory = string
type ItemName            = string
