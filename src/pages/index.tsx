import { NextPageWithLayout } from '@/pages/page'
import Header from '@/components/Header'

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
    </div>
  )
}

export default Home
