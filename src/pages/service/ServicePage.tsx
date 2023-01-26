import React from 'react';
import  ServicesFaq  from "./components/services-faq/ServicesFaq";
import ServicesSlogan from './components/services-slogan/ServicesSlogan';
import { ButtonOnTop } from "../../components/show-button-on-top";
import ServicesOurVisions from './components/section-visions/ServicesOurVisions';
import ServicesImageList from './components/services-list-image/ServicesListImage';

const ServicePage = () => {
  return (
    <>   
      <ServicesImageList/>
    <ServicesOurVisions/>
   <ServicesSlogan/>
   <ServicesFaq/>
   <ButtonOnTop/>
 

   </>
  )
}
export default ServicePage
