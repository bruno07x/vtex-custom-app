import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'
import { useCssHandles } from 'vtex.css-handles'

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['countdown-container', 'countdown']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate}) => {
  const [timeRemaining, setTimeRemaining] = useState(
    {
      hours: '00',
      minutes: '00',
      seconds: '00'
    } as TimeSplit
  )
  const handles = useCssHandles(CSS_HANDLES)

  // const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

  tick(targetDate, setTimeRemaining)

  return (
    <div className={ `${handles['countdown-container']} c-muted-1 db tc` }>
       <h1>{`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}</h1>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Valor da data final',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown
