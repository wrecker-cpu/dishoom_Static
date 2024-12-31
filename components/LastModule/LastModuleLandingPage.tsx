import React from 'react'
import LastModuleHeroSection from './LastModuleHeroSection'
import Navbar from '../Navbar'
import LastParaSection from './LastParaSection'
import LastMainImage from './LastMainImage'
import SecondParaSection from './SecondParaSection'
import ImageStaticPage from './ImageStaticPage'
import ArrowDescripPage from './ArrowDescripPage'
import DownLoadSection from './DownLoadSection'
import FinalBigImage from './FinalBigImage'
import CoursalSliderSection from './CoursalSliderSection'


export default function LastModuleLandingPage() {
  return (
   <div>
    <Navbar/>
      <LastModuleHeroSection/>
      <LastParaSection/>
      <LastMainImage/>
      <SecondParaSection/>
      <ImageStaticPage/>
      <ArrowDescripPage/>
      <DownLoadSection/>
      <FinalBigImage/>
      <CoursalSliderSection/>
    </div>
  )
}
