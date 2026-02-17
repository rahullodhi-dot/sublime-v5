import React from 'react'
import TopSection from '../components/TopSection';

const TermOfService = () => {


    const breadcrumbItems = [
        { label: "Terms Of Service", path: `TermOfService/`, isBold: true },

    ];

    const Terms = [{
        title: "These Terms and Conditions May Change",
        policy: "We reserve the right to update or modify these terms and conditions at any time without prior notice.  Your use of sublimehouseoftea.com and sublimehouseoftea/our-tea following any such change constitutes your agreement to follow and be bound by the terms and conditions as changed. For this reason, we encourage you to review these terms and conditions whenever you use this website."
    },
    {
        title: "Limitations of Liability",
        policy: `Sublime House of Tea shall not assume any responsibility, and shall not be liable for, any damages to, or viruses that may infect, your computer, telecommunication equipment, or other property caused by or arising from your access to, use of, or browsing this website or your downloading of any materials, from this website. IN NO EVENT WILL THE COMPANY PRIVATE LIMITED NOR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS, AFFILIATES, AGENTS, SUCCESSORS, ASSIGNS, RETAIL PARTNERS NOR ANY PARTY INVOLVED IN THE CREATION, PRODUCTION OR TRANSMISSION OF THIS WEB SITE BE LIABLE TO ANY PARTY FOR ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOST PROFITS, LOST DATA OR BUSINESS INTERRUPTION) ARISING OUT OF THE USE, INABILITY TO USE, OR THE RESULTS OF USE OF THIS WEB SITE, ANY WEB SITES LINKED TO THIS WEB SITE, OR THE MATERIALS, INFORMATION OR SERVICES CONTAINED AT ANY OR ALL SUCH SITES, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR ANY OTHER LEGAL THEORY AND WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS OF LIABILITY DO NOT APPLY TO THE EXTENT PROHIBITED BY LAW. PLEASE REFER TO YOUR LOCAL LAWS FOR ANY SUCH PROHIBITIONS.
IN THE EVENT OF ANY PROBLEM WITH THIS WEBSITE OR ANY CONTENT, YOU AGREE THAT YOUR SOLE REMEDY IS TO CEASE USING THIS WEBSITE. IN THE EVENT OF ANY PROBLEM WITH THE PRODUCTS OR SERVICES THAT YOU HAVE PURCHASED ON OR THROUGH THIS WEB SITE, YOU AGREE THAT YOUR REMEDY, IF ANY, IS FROM THE MANUFACTURER OF SUCH PRODUCTS OR SUPPLIER OF SUCH SERVICES, IN ACCORDANCE WITH SUCH MANUFACTURER’S OR SUPPLIER’S WARRANTY, OR TO SEEK A RETURN AND REFUND FOR SUCH PRODUCT OR SERVICES IN ACCORDANCE WITH THE RETURNS AND REFUNDS POLICIES POSTED ON THIS WEB SITE. This site may include inaccuracies, mistakes or typographical errors. sublimehouseoftea.com does not warrant that the content will be uninterrupted or error free`
    },
    {
        title: "Copyright and Trademark",
        policy: "Unless otherwise indicated, material on this website, including but not limited to texts, images, illustrations, software, audio clips, video clips, animation files, is subject to the copyright and trademark rights of The Company Private Limited. Consequently, the material on this website may not be copied, reproduced, modified, posted, transmitted, distributed, in whole or in part in any form whatsoever, without the prior written consent of The Company Private Limited. All rights reserved."

    },
    {
        title: "Products, Content and Specifications",
        policy: "All features, content, specifications, products and prices of products and services described or depicted on this website are subject to change at any time without notice.  Certain weights, measures and similar descriptions are approximate and are provided for convenience purposes only.  We make all reasonable efforts to accurately display the attributes of our products, including the applicable colors; however, the actual color you see will depend on your computer system and we cannot guarantee that your computer will accurately display such colors.  The inclusion of any products or services in this website at a particular time does not imply or warrant that these products or services will be available at any time.  It is your responsibility to ascertain and obey all applicable local, state and international laws in regard to the possession, use and sale of any item purchased from this website. By placing an order, you represent that the products ordered will be used only in a lawful manner."
    },
    {
        title: "Shipping Limitations",
        policy: `When an order is placed, it will be shipped to an address designated by the purchaser as long as that shipping address is compliant with the shipping restrictions contained on this website.  All purchases from this website are made pursuant to a shipment contract.  As a result, risk of loss and title for items purchased from this website pass to you upon delivery of the items to the carrier.  You are responsible for filing any claims with carriers for damaged and/or lost shipments.
The Buyer has to pay ₹50 shipping charge which will be applicable only for orders below ₹500.
Payment Methods: Credit Card / Debit Card / NetBanking / Wallets / UPI`
    },
    {
        title: "Your Account",
        policy: `You are responsible for maintaining the confidentiality of your account and password information, and you agree to accept responsibility for all activities that occur under your account and password. We reserves the right to refuse service, terminate accounts remove or edit content or cancel orders.
By placing an order, you warrant that you are over 18 years of age, and that you are providing sublimehouseoftea.com or sublimehouseoftea/our-tea with accurate, truthful information and that you have the authority to place the order.`
    }
    ]
    return (
        <section>
            <TopSection breadCrumnb={breadcrumbItems} title="Terms Of Service" />

            <div className='max-w-[1400px] text-lg leading-7 mx-auto px-6 py-20'>

                {
                    Terms.map((item) => (
                        <div className='mb-6 flex flex-col gap-4'>
                            <h2 style={{ fontFamily: "gotham" }} className='text-xl'>{item.title}</h2>
                            <p className='text-lg'>{item.policy}</p>


                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default TermOfService
