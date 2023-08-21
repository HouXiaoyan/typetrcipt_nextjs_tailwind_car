"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonsProps } from '@/types'

export default function CustomButton({title,containerStyles,handleClick,btnType}:CustomButtonsProps) {
  return (
    <button
      disabled={false}
      type={btnType||"button"}
      className={`custom-btn ${containerStyles}` } 
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}
