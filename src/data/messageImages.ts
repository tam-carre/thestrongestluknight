import runningLuna from 'images/message_images/running_luna.png'
import comfyCoco from 'images/message_images/comfy_coco2.png'
import runningCoco from 'images/message_images/running_coco.png'
import comfyLuna from 'images/message_images/comfy_luna2.png'
import pixartCoco from 'images/message_images/pixart_coco.png'
import pixartLuna from 'images/message_images/pixart_luna.png'
import cocoTatoo from 'images/message_images/coco_with_luna_back_tatoo.png'
import comfyLuna2 from 'images/message_images/comfy_luna.png'
import comfyCoco2 from 'images/message_images/comfy_coco.png'
import dragon from 'images/message_images/pixart_dragon.png'
import undertale from 'images/message_images/pixart_undertale_coco.png'
import { SourcedImageProps } from 'components/SourcedImage'

export const messageImages: SourcedImageProps[] = [{
    src: runningCoco, author: 'エニモ', title: 'ほろふぉーす愛',
    url: 'https://www.pixiv.net/en/artworks/89232325',
    icon: process.env.PUBLIC_URL + '/avatars/ANYMORE_vvv.jpg'
  }, {
    src: runningLuna, author: 'エニモ', title: 'ほろふぉーす愛',
    url: 'https://www.pixiv.net/en/artworks/89232325',
    icon: process.env.PUBLIC_URL + '/avatars/ANYMORE_vvv.jpg'
  }, {
    src: cocoTatoo, author: 'mop', title: 'どこの組のもんじゃい？',
    url: 'https://www.pixiv.net/en/users/2083795',
    icon: process.env.PUBLIC_URL + '/avatars/mop.png'
  }, {
    src: pixartLuna, author: '銀鏡にと', title: '4期生アイドル衣装',
    url: 'https://www.pixiv.net/en/artworks/88113908',
    icon: process.env.PUBLIC_URL + '/avatars/shiromi_nito.jpg',
  }, {
    src: comfyLuna, author: 'Yuusachii', title: 'Cozy Gen 4',
    url: 'https://www.pixiv.net/en/artworks/89126212',
    icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
  }, {
    src: comfyCoco, author: 'Yuusachii', title: 'Cozy Gen 4',
    url: 'https://www.pixiv.net/en/artworks/89126212',
    icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
  }, {
    src: pixartCoco, author: '銀鏡にと', title: '4期生アイドル衣装',
    url: 'https://www.pixiv.net/en/artworks/89232325',
    icon: process.env.PUBLIC_URL + '/avatars/shiromi_nito.jpg',
  }, {
    src: comfyLuna2, author: 'Yuusachii', title: 'New Year Hololive Gen4 Comfy',
    url: 'https://www.pixiv.net/en/artworks/86730174',
    icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
  }, {
    src: comfyCoco2, author: 'Yuusachii', title: 'New Year Hololive Gen4 Comfy',
    url: 'https://www.pixiv.net/en/artworks/86730174',
    icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
  }, {
    src: dragon, author: 'Leonato Ieiri', title: 'Coco pixel art',
    url: 'https://twitter.com/leonatoieiri/status/1402836379671879680',
    icon: process.env.PUBLIC_URL + '/avatars/leonatoieiri.jpg',
  }, {
    src: undertale, author: 'Leonato Ieiri', title: 'Coco pixel art',
    url: 'https://twitter.com/leonatoieiri/status/1402836379671879680',
    icon: process.env.PUBLIC_URL + '/avatars/leonatoieiri.jpg',
}]
