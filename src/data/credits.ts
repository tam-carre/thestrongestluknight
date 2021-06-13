import { OrderedMap } from 'immutable'

export const credits: OrderedMap<CreditCategory, Contributor[]> = OrderedMap({
  Organization: [
    {
      name: 'tam（タム）', url: 'https://twitter.com/tam_vaccount',
      details: 'Project leader, internal translation'
    }, {
      name: 'みらい', url: 'https://twitter.com/Mirai_Malekith/',
      details: 'Internal translation'
    }, {
      name: 'こーでー', url: 'https://twitter.com/kody_lu',
      details: 'Internal translation'
    }, {
      name: 'いいおか', url: 'https://twitter.com/iiokayama8929',
      details: 'Internal translation'
    },
  ],
  Website: [
    { name: 'tam（タム）', url: 'https://twitter.com/tam_vaccount' },
    { name: 'monoAI', url: 'https://twitter.com/monoai_' }
  ],
  Artwork: [
    {
      name: 'mop', url: 'https://www.pixiv.net/en/users/2083795',
      artworks: [
        {
          title: 'どこの組のもんじゃい？',
          url: 'https://www.pixiv.net/en/artworks/79038147'
        }
      ]
    },
    // Please input their main name, and Twitter URL
    // If no Twitter URL then Pixiv URL
    //
    // [OK!!!] Cozy Gen 4 [EN] [REQUESTED ON TWITTER]
    // https://www.pixiv.net/en/artworks/89126212
    // https://www.pixiv.net/en/artworks/86730174

    // [OK!!!] chibi yonksei [JP] [PRELIMINARY DM REQUEST ON TWITTER]
    // https://www.pixiv.net/en/artworks/89232325

    // [OK!!!] Pixel art yonksei [JP]
    // https://www.pixiv.net/en/artworks/88113908

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
  ]
}) as OrderedMap<CreditCategory, Contributor[]>

///////////////////////////////////////////////////////////////////////////////

const contributorCategories = [
  'Organization',
  'Website',
  'Artwork',
  'Clipping',
  'HimeCoco playlist'
] as const

type CreditCategory = typeof contributorCategories[number]

interface Contributor {
  name: string,
  url?: string,
  details?: string,
  artworks?: Artwork[]
}

interface Artwork {
  title: string,
  url: string
}

