import { OrderedMap } from 'immutable'

export const credits: OrderedMap<CreditCategory, Contributor[]> = OrderedMap({
  Artwork: [
    {
      name: 'mop', url: 'https://www.pixiv.net/en/users/2083795',
      icon: process.env.PUBLIC_URL + '/avatars/mop.png',
      artworks: [{
        title: 'どこの組のもんじゃい？',
        url: 'https://www.pixiv.net/en/artworks/79038147'
      }]
    }, {
      name: 'advarcher', url: 'https://twitter.com/Anonamos_701',
      icon: process.env.PUBLIC_URL + '/avatars/Anonamos_701.jpg',
      artworks: [{
        title: '桐生会は不滅なり！',
        url: 'https://twitter.com/Anonamos_701/status/1402504337293643776'
      }]
    }, {
      name: 'Shuuzo', url: 'https://twitter.com/shuuzo3',
      icon: process.env.PUBLIC_URL + '/avatars/shuuzo3.jpg',
      artworks: [{
        title: '天使とドラゴン',
        url: 'https://www.pixiv.net/en/artworks/90510056'
      }]
    }, {
      name: 'Yuusachii', url: 'https://twitter.com/SachiiHappy',
      icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
      artworks: [{
        title: 'Cozy Gen 4',
        url: 'https://www.pixiv.net/en/artworks/89126212'
      },
      // { title: 'New Year Hololive Gen4 Comfy', url: 'https://www.pixiv.net/en/artworks/86730174' }
      ]
    }, {
      name: 'エニモ', url: 'https://twitter.com/ANYMORE_vvv',
      icon: process.env.PUBLIC_URL + '/avatars/ANYMORE_vvv.jpg',
      artworks: [{
        title: 'ほろふぉーす愛',
        url: 'https://www.pixiv.net/en/artworks/89232325'
      }]
    }, {
      name: '銀鏡にと', url: 'https://twitter.com/shiromi_nito',
      icon: process.env.PUBLIC_URL + '/avatars/shiromi_nito.jpg',
      artworks: [{
        title: '4期生アイドル衣装',
        url: 'https://www.pixiv.net/en/artworks/88113908'
      }]
    }, {
      name: 'colonel_AKI', url: 'https://twitter.com/ColonelAki',
      icon: process.env.PUBLIC_URL + '/avatars/ColonelAki.jpg',
      artworks: [{
        title: 'Chibi Hololive #6',
        url: 'https://www.pixiv.net/en/artworks/84002989'
      }]
    }
  ],
  Organization: [
    {
      name: 'タム・tam', url: 'https://twitter.com/tam_vaccount',
      details: 'Project leader',
      icon: process.env.PUBLIC_URL + '/avatars/tam_vaccount.jpg'
    }, {
      name: 'みらい', url: 'https://twitter.com/Mirai_Malekith/',
      details: 'Internal translation',
      icon: process.env.PUBLIC_URL + '/avatars/Mirai_Malekith.jpg'
    }, {
      name: 'こーでー', url: 'https://twitter.com/kody_lu',
      details: 'Internal translation',
      icon: process.env.PUBLIC_URL + '/avatars/kody_lu.jpg'
    }, {
      name: 'いいおか', url: 'https://twitter.com/iiokayama8929',
      details: 'Internal translation',
      icon: process.env.PUBLIC_URL + '/avatars/default_profile.png'
    }
  ],
  Website: [
    {
      name: 'タム・tam', url: 'https://twitter.com/tam_vaccount',
      details: 'Creator',
      icon: process.env.PUBLIC_URL + '/avatars/tam_vaccount.jpg'
    }, {
      name: 'monoAI', url: 'https://twitter.com/monoai_',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/monoai_.jpg'
    }, {
      name: 'Tom "Skeletom" Farro', url: 'https://www.twitter.com/fomtarro',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/FomTarro.jpg'
    }, {
      name: 'BetaLixT', url: 'https://twitter.com/BetaLixT',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/BetaLixT.jpg'
    }, {
      name: 'donmk', url: 'https://twitter.com/donmk_ssbm',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/donmk_ssbm.jpg',
    }, {
      name: 'MegGal', url: 'https://twitter.com/Meggal_SA',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/Meggal_SA.jpg',
    }, {
      name: 'こーでー', url: 'https://twitter.com/kody_lu',
      details: 'Translation',
      icon: process.env.PUBLIC_URL + '/avatars/kody_lu.jpg'
    },
  ],
  Clipping: [
    {
      name: 'Cain Chin', url: 'https://twitter.com/cain_chin',
      icon: process.env.PUBLIC_URL + '/avatars/cain_chin.png',
    },
  ],
  'HimeCoco playlist': [
    { name: 'Marshall Lee',
      url: 'https://twitter.com/Marshall_Lee_A',
      icon: process.env.PUBLIC_URL + '/avatars/Marshall_Lee_A.jpg',
    }, {
      name: 'Cain Chin', url: 'https://twitter.com/cain_chin',
      icon: process.env.PUBLIC_URL + '/avatars/cain_chin.png',
    }, {
      name: 'Dodoliy',
      url: 'https://twitter.com/dodoliy',
      icon: process.env.PUBLIC_URL + '/avatars/dodoliy.jpg',
    }, {
      name: 'monoAI', url: 'https://twitter.com/monoai_',
      icon: process.env.PUBLIC_URL + '/avatars/monoai_.jpg'
    }, {
      name: 'タム・tam', url: 'https://twitter.com/tam_vaccount',
      icon: process.env.PUBLIC_URL + '/avatars/tam_vaccount.jpg'
    },
  ]
}) as OrderedMap<CreditCategory, Contributor[]>

export interface Contributor {
  name: string,
  url?: string,
  icon?: string,
  details?: string,
  artworks?: Artwork[]
}

///////////////////////////////////////////////////////////////////////////////

const contributorCategories = [
  'Organization',
  'Website',
  'Artwork',
  'Clipping',
  'HimeCoco playlist'
] as const

type CreditCategory = typeof contributorCategories[number]

interface Artwork {
  title: string,
  url: string
}
