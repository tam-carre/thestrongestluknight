import { OrderedMap } from 'immutable'

export const credits: OrderedMap<CreditCategory, Contributor[]> = OrderedMap({
  Artwork: [
    {
      name: 'mop', url: 'https://www.pixiv.net/en/users/2083795',
      imageUrl: 'https://i.imgur.com/o0WSKZv.png',
      artworks: [{
        title: 'どこの組のもんじゃい？',
        url: 'https://www.pixiv.net/en/artworks/79038147'
      }]
    }, {
      name: 'Yuusachii', url: 'https://twitter.com/SachiiHappy',
      imageUrl: 'https://pbs.twimg.com/profile_images/1404768807286022155/h3B2Vcrk_mini.jpg',
      artworks: [{
        title: 'Cozy Gen 4',
        url: 'https://www.pixiv.net/en/artworks/89126212'
      }, {
        title: 'New Year Hololive Gen4 Comfy',
        url: 'https://www.pixiv.net/en/artworks/86730174'
      }]
    }, {
      name: 'エニモ', url: 'https://twitter.com/ANYMORE_vvv',
      imageUrl: 'https://pbs.twimg.com/profile_images/1366061609504763911/JYlQFkyh_mini.jpg',
      artworks: [{
          title: 'ほろふぉーす愛',
          url: 'https://www.pixiv.net/en/artworks/89232325'
        }]
    }, {
      name: '銀鏡にと', url: 'https://twitter.com/shiromi_nito',
      imageUrl: 'https://pbs.twimg.com/profile_images/1399731439529172993/dGYLbwAh_mini.jpg',
      artworks: [{
          title: '4期生アイドル衣装',
          url: 'https://www.pixiv.net/en/artworks/88113908'
        }]
    }, {
      name: 'colonel_AKI', url: 'https://twitter.com/ColonelAki',
      imageUrl: 'https://pbs.twimg.com/profile_images/1215612633660846080/moHGefzP_mini.jpg',
      artworks: [{
          title: 'Chibi Hololive #6',
          url: 'https://www.pixiv.net/en/artworks/84002989'
        }]
    }
  ],
  Organization: [
    {
      name: 'タム・tam', url: 'https://twitter.com/tam_vaccount',
      details: 'Project leader, internal translation',
      imageUrl: 'https://pbs.twimg.com/profile_images/1352886724066742273/TbZ1Mxf-_mini.jpg'
    }, {
      name: 'みらい', url: 'https://twitter.com/Mirai_Malekith/',
      details: 'Internal translation',
      imageUrl: 'https://pbs.twimg.com/profile_images/1309924988820942848/of_moOeY_mini.jpg'
    }, {
      name: 'こーでー', url: 'https://twitter.com/kody_lu',
      details: 'Internal translation',
      imageUrl: 'https://pbs.twimg.com/profile_images/1385640460593422336/ZOffs-0s_mini.jpg'
    }, {
      name: 'いいおか', url: 'https://twitter.com/iiokayama8929',
      details: 'Internal translation',
      imageUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_mini.png'
    }
  ],
  Website: [
    {
      name: 'タム・tam', url: 'https://twitter.com/tam_vaccount',
      imageUrl: 'https://pbs.twimg.com/profile_images/1352886724066742273/TbZ1Mxf-_mini.jpg'
    },
    {
      name: 'monoAI', url: 'https://twitter.com/monoai_',
      details: 'Contributor',
      imageUrl: 'https://pbs.twimg.com/profile_images/1322893440909103104/DI7CIANj_mini.jpg'
    },
    {
      name: 'Tom "Skeletom" Farro', url: 'https://www.twitter.com/fomtarro',
      details: 'Contributor',
      imageUrl: 'https://pbs.twimg.com/profile_images/1392942071770722312/BNu2RfS0_mini.jpg'
    },
    {
      name: 'BetaLixT', url: 'https://twitter.com/BetaLixT',
      details: 'Contributor',
      imageUrl: 'https://pbs.twimg.com/profile_images/1392870556714749952/AHXjmKv1_mini.jpg'
    },
    {
      name: 'donmk',
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
  imageUrl?: string,
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
