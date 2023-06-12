import { mainNewsMock } from '@/assets/mock/mainNews'
import { Billboard } from '../components/Ads/Billboard'
import { MainNews } from '../components/MainNews'

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col max-w-[1230px]">
      <div
        className="flex w-full h-full items-center justify-center my-32
      md-desk:w-730"
      >
        <Billboard />
      </div>
      <MainNews mainNewsData={mainNewsMock} />
    </main>
  )
}
