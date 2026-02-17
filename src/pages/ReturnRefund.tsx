import React from 'react'
import TopSection from '../components/TopSection';

const ReturnRefund = () => {


    const breadcrumbItems = [
        { label: "Return and Refund", path: `Return&Refund/`, isBold: true },

    ];


    const ReturnRefund = [{
        title: "Refund Policy",
        policy: "This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the Platform. Under this policy: Cancellations will only be considered if the request is made 7 days of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep. SUBLIME does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that the quality of the product delivered is not good. In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within 7 days of receipt of products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The customer service team after looking into your complaint will take an appropriate decision. In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them. In case of any refunds approved by SUBLIME, it will take 15 days for the refund to be processed to you."
    },
    {
        title: "Return Policy",
        policy: "We offer refund / exchange within first 5 days from the date of your purchase. If 5 days have passed since your purchase, you will not be offered a return, exchange or refund of any kind. In order to become eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale, then the item may not be eligible for a return / exchange. Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged. You agree that there may be a certain category of products / items that are exempted from returns or refunds. Such categories of the products would be identified to you at the item of purchase. For exchange / return accepted request(s) (as applicable), once your returned product / item is received and inspected by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further. If the same has been approved after the quality check at our end, your request (i.e. return / exchange) will be processed in accordance with our policies."
    }
    ]




    return (
        <section>

            <TopSection breadCrumnb={breadcrumbItems} title='Return and Refund' />

            <div className='max-w-[1400px] text-lg leading-7 mx-auto px-6 py-20'>

                <div className=''>
                    {ReturnRefund.map((item, ) => (
                        <div className=' flex flex-col gap-3'>
                            <h2 style={{ fontFamily: "gotham-book" }} className='text-xl font-bold mt-6 '>{item.title}</h2>
                            <p style={{ fontFamily: "gotham-book" }} className='text-lg font-medium '>{item.policy}</p>
                        </div>
                    ))}
                </div>

                <div className='bg-[#D6C27A] mt-12 rounded-lg px-5 py-3 flex justify-center items-center flex-col  '>
                  <div className='flex flex-col justify-center items-center max-w-[80%]'>
                       <h3 style={{fontFamily:"gotham2"}} >
                        REFUND POLICY TIME FRAME :-
                    </h3>
                    <p style={{fontFamily:"gotham-book"}}  className='text-center'>Once the refund is approved, the refund amount will be processed and credited within 10-12 business days to the original payment method.
                    </p>
                  </div>
                </div>

            </div>

        </section>
    )
}

export default ReturnRefund
