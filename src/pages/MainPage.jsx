import React, { useState, useEffect } from 'react'
import { WelcomeText } from '../WelcomeText'
import { ButtonSocket } from '../ButtonSocket'

export const MainPage = () => {

  return (
    <div>
        <WelcomeText/>
        <ButtonSocket/>
    </div>
  )
}
