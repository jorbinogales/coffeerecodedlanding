import React from 'react'
import EmblaCarousel from './carousel'
import { EmblaOptionsType } from 'embla-carousel'
import './css/base.css'
import './css/embla.css'

const OPTIONS: EmblaOptionsType = {}

export const Carousel: React.FC = () => (
  <>
    <EmblaCarousel options={OPTIONS} />
  </>
)