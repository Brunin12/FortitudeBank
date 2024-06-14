'use client'

import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div><CountUp end={amount} formattingFn={formatAmount} decimals={2} duration={2.75} /></div>
  )
}

export default AnimatedCounter  