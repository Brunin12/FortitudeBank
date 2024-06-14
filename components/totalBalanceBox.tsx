import { formatAmount } from '@/lib/utils'
import React from 'react'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <div className="total-balance">
        <div className="total-balance-chart">
            {/* Chart de DoughtnutChart */}
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Contas Bancarias: {totalBanks}
            </h2>            
            <div className="flex flex-col gap-2">
                <div className="total-balance-label flex-center">
                    <p>Saldo Total Atual: </p>
                </div>

                <p className="total-balance-amount flex-center gap-2">
                    { formatAmount(totalCurrentBalance) }
                </p>
            </div>
        </div>
    </div>
  )
}

export default TotalBalanceBox