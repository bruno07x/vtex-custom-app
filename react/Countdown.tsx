import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

interface CountdownProps {
  title: string
  targetDate: string
}

const CSS_HANDLES = ['container', 'countdown', 'title']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate, title}) => {
  const [timeRemaining, setTimeRemaining] = useState(
    {
      hours: '00',
      minutes: '00',
      seconds: '00'
    } as TimeSplit
  )
  const handles = useCssHandles(CSS_HANDLES)

  // const DEFAULT_TARGET_DATE = getTwoDaysFromNow()
  const titleText = title || <FormattedMessage id="countdown.title" />

  tick(targetDate, setTimeRemaining)

  return (
    <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1 mv4`}>
      <div className={`${handles.title} db tc`}>{titleText}</div>
      <div className={`${handles.countdown} db tc`}>
        {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
      </div>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: {
      title: 'Título',
      description: 'Descrição do título',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'Data final',
      description: 'Valor da data final',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown
