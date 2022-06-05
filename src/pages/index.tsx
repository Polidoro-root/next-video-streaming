import { NextPageWithLayout } from '@/pages/page'
import Header from '@/components/Header'

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header className="mb-auto" />
    </div>
  )
}

export default Home
