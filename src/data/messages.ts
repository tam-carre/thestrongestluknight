import { List } from 'immutable'

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners

export const messages: List<Message> = List([
  {
    content: 'いつも僕たちを笑顔にしてくれてありがとうございます。いつも姫様を応援して、ありがとうございます！みんな会長が大好き！！',
    signature: '@tam_vaccount'
  },
  {
    content: 'いつも僕たちを笑顔にしてくれてありがとうございます。いつも姫様を応援して、ありがとうございます！みんな会長が大好き！！',
    signature: '@tam_vaccount'
  },
  {
    content: 'いつも僕たちを笑顔にしてくれてありがとうございます。いつも姫様を応援して、ありがとうございます！みんな会長が大好き！！',
    signature: '@tam_vaccount'
  },
  {
    content: 'いつも僕たちを笑顔にしてくれてありがとうございます。いつも姫様を応援して、ありがとうございます！みんな会長が大好き！！',
    signature: '@tam_vaccount'
  },
  {
    content: 'いつも僕たちを笑顔にしてくれてありがとうございます。いつも姫様を応援して、ありがとうございます！みんな会長が大好き！！',
    signature: '@tam_vaccount'
  },
  {
    content: 'いつも僕たちを笑顔にしてくれてありがとうございます。いつも姫様を応援して、ありがとうございます！みんな会長が大好き！！',
    signature: '@tam_vaccount'
  },
])

///////////////////////////////////////////////////////////////////////////////

interface Message {
  content: string,
  signature: string,
  imageUrl?: string
}
