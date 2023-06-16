// export async function getRef() {
//   const response = await fetch(`${process.env.PRISMIC_API_URL}/`).then(
//     (response) => response.json(),
//   )
//   const ref = response.refs[0].ref
//   return ref
// }

// export async function getNewsData() {
//   const ref = getRef()
//   const response = await fetch(
//     `${process.env.PRISMIC_API_URL}/documents/search?ref=${ref}`,
//     {
//       accessToken:
//         'MC5aSW1YREJVQUFDd0EtUEFn.Ee-_ve-_vW0K77-977-9Fwvvv71-eQ7vv70K77-9cu-_vUZGJDvvv70EUu-_vSM877-977-9Ze-_vQ',
//     },
//   ).then((response) => response.json())
//   // const ref = response.refs[0].ref
//   console.log(response)
//   return response
// }
// }
//

// import * as prismic from '@prismicio/client'

// export const createClient = (config = {}) => {
//   const client = prismic.createClient('blog-news-games', {
//     accessToken:
//       'MC5aSW1YREJVQUFDd0EtUEFn.Ee-_ve-_vW0K77-977-9Fwvvv71-eQ7vv70K77-9cu-_vUZGJDvvv70EUu-_vSM877-977-9Ze-_vQ',
//   })
//   console.log(client)
//   return client
// }

// import Prismic from '@prismicio/client'
// import { DefaultClient } from '@prismicio/client/'

// export function getPrismicClient(req?: unknown): DefaultClient {
//   const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
//     req,
//     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
//   })
// }
