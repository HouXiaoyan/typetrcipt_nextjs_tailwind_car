"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonsProps } from '@/types'

export default function CustomButton({title,containerStyles,handleClick,btnType,textStyles,rightIcon}:CustomButtonsProps) {
  return (
    <button
      disabled={false}
      type={btnType||"button"}
      className={`custom-btn ${containerStyles}` } 
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
    </button>
  )
}
