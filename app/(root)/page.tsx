import React from 'react'
import HeaderBox from '@/components/headerBox'
import TotalBalanceBox from '@/components/totalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: 'Bruno'}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Olá,"
            user={loggedIn?.firstName || 'Desconhecido'} subtext={'Acesse e gerecie suas finanças eficientemente'}          />

            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2295.65} />
        </header>
      </div>
    </section>
  )
}

export default Home