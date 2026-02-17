import React from 'react'
import TopSection from '../components/TopSection';
// import Breadcrumb from "../components/Breadcrumb";





const Disclaimer = () => {

    const breadcrumbItems = [
  { label: "Disclaimer", path: `disclaimer/`, isBold: true },

];
  return (
    <section className='bg-[#f6f1e8]'>

       
       <TopSection  breadCrumnb={breadcrumbItems} title={"Disclaimer"}/>
       <div className='max-w-[1400px] text-lg leading-7 mx-auto px-6 py-20'>
        <p style={{fontFamily:"gotham-book"}} >
            The information contained within this website is for general information purposes only. The information is provided by Sublime House of Tea and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Through this website you are able to link to other websites which are not under the control of Sublime. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, Sublime takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
        </p>

       </div>
      
    </section>
  )
}

export default Disclaimer
