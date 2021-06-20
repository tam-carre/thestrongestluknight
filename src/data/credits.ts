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
      name: 'Yuusachii', url: 'https://twitter.com/SachiiHappy',
      icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
      artworks: [{
        title: 'Cozy Gen 4',
        url: 'https://www.pixiv.net/en/artworks/89126212'
      }, {
        title: 'New Year Hololive Gen4 Comfy',
        url: 'https://www.pixiv.net/en/artworks/86730174'
      }]
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
    }, {
      name: 'advarcher', url: 'https://twitter.com/Anonamos_701',
      artworks: [{
        title: '桐生会は不滅なり！',
        url: 'https://twitter.com/Anonamos_701/status/1402504337293643776'
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
    },
    {
      name: 'monoAI', url: 'https://twitter.com/monoai_',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/monoai_.jpg'
    },
    {
      name: 'Tom "Skeletom" Farro', url: 'https://www.twitter.com/fomtarro',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/FomTarro.jpg'
    },
    {
      name: 'BetaLixT', url: 'https://twitter.com/BetaLixT',
      details: 'Contributor',
      icon: process.env.PUBLIC_URL + '/avatars/BetaLixT.jpg'
    },
    {
      name: 'donmk',
      details: 'Contributor',
    },
    {
      name: 'MegGal',
      details: 'Contributor',
    },
  ],
  Clipping: [
    { name: 'Cain Chin', url: 'https://twitter.com/cain_chin' },
    // Please include the clipping channels' names and their Twitter URL
    // if no Twitter URL then their YouTube ch URL

    // https://www.youtube.com/playlist?list=PLAW64Usi0SJFIRk-2RzTVk9vExyIBhTHw&jct=HVa9mT52CFQx49UuCLQQNy1RsNLt0g
  ],
  'HimeCoco playlist': [
    // Please include the playlist contributors' names and
    // twitter url if they have a twitter account they use for luknight
    // activities.
    // ask them if needed.
    { name: 'Cain Chin', url: 'https://twitter.com/cain_chin' },
    { name: 'Marshall Lee', url: 'https://twitter.com/Marshall_Lee_A' },
    { name: 'Dodoliy', url: 'https://twitter.com/dodoliy'}
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
