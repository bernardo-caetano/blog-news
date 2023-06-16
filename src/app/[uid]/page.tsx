import { createClient } from '@/../prismicio'
import { getNewsData, getRef } from '@/services/prismic'
import Image from 'next/image'

export default async function News({ params }: any) {
  const client = createClient()

  const news = await client.getByUID('news', params.uid)
  const data = news.data

  console.log(news.data.slices[0]?.primary)

  // const page = await client.getAllByType('news')
  // const headers = {
  //   Authorization:
  //     'MC5aSW1YREJVQUFDd0EtUEFn.Ee-_ve-_vW0K77-977-9Fwvvv71-eQ7vv70K77-9cu-_vUZGJDvvv70EUu-_vSM877-977-9Ze-_vQ',
  // }
  // const response = await fetch(
  //   'https://blog-news-games.cdn.prismic.io/api/v2',
  //   { headers },
  // )
  // const data = await response.json()
  // console.log(data.refs[0].ref)

  // const headers2 = {
  //   Authorization: data.refs[0].ref,
  // }

  // const data2 = await response2.json()
  // getNewsData()

  return (
    <main className="flex items-center justify-center flex-col max-w-[1230px] mt-74">
      <section className="flex flex-col justify-center items-center gap-32">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-[56px] font-bold text-green-400">
            {news.data.slices[0]?.primary.title[0].text}
          </h1>

          <h2 className="text-[20px]">
            {news.data.slices[0]?.primary.subtitle}
          </h2>
        </div>
        <Image
          src={
            news.data.slices[0]?.primary
              ? news.data.slices[0]?.primary.main_image.url
              : 'https://picsum.photos/1230/600'
          }
          alt="algo"
          width={1230}
          height={600}
        />
      </section>
      <section className="text-[20px] flex flex-col gap-18 mt-32">
        <p>
          {/* <pre>{JSON.stringify(news, null, 2)}</pre> */}
          Gabriel FalleN sempre se destacou no Counter-Strike: Global Offensive
          (CS:GO) pelos títulos, pelas performances e pela liderança, mas,
          recentemente, outra habilidade vem chamando atenção. O capitão da
          Imperial é líder nas estatísticas de flashbangs, uma granada de luz do
          CS:GO usada para cegar momentaneamente os inimigos. FalleN tem sido
          tão impactante nesse quesito que a comunidade tem brincado que o astro
          é capaz de desligar o monitor dos adversários.
        </p>
        <p>
          Na BLAST Premier Spring Final 2023, na qual a Imperial chegou à
          semifinal, FalleN deixou os inimigos cegos com flashbang durante 3,23
          segundos por round em média. Com esse índice, liderou o ranking nesse
          quesito. O 2º colocado, o dinamarquês Casper cadiaN, capitão da campeã
          Heroic, cegou os adversários por 2,93 segundos por round em média.
        </p>
        <p>
          O brasileiro ainda liderou as médias de flashbangs jogadas por rodada
          e de assistências com a granada de luz.
        </p>
        <p>
          Os números são ainda maiores se considerados somente os rounds do lado
          terrorista, no qual o time ataca. Foram 4,14 segundos de inimigos
          cegos por round em média.
        </p>
        <p>
          FalleN já chegou a alcançar a marca de 5,38 segundos de terrorista no
          IEM Rio 2023. Considerando os dois lados do campeonato internacional
          realizado no Rio de Janeiro, o capitão liderou o ranking de tempo de
          inimigo cego, mesmo com a Imperial tendo perdido as três partidas que
          disputou. Foram 4,37 segundos por round em média.
        </p>
        <p>
          Desde a criação do projeto Last Dance com a Imperial, FalleN e
          companhia disputaram oito campeonatos tier-S, os mais importantes do
          cenário internacional. Em seis deles, FalleN liderou o ranking de
          tempo médio com o inimigo cego. Nos outros dois, acabou como
          vice-líder desse quesito. No total, o jogador teve média de 3,53
          segundos de oponentes cegos por round entre todos os campeonatos.
        </p>
        <p>
          Esse posto de maior aproveitamento com a granada de luz ainda se
          repete nos Majors de Stockholm 2021, FACEIT 2018 e ELEAGUE 2018.
        </p>
        <p>
          Isso aponta a enorme efetividade das flashbangs jogadas por FalleN
          durante as partidas, o que tem impacto no desenvolvimento das jogadas.
        </p>
      </section>
    </main>
  )
}
