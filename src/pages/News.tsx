import React, { useMemo, useState } from 'react'
import TopSection from '../components/TopSection'

const News = () => {
    const breadcrumbItems = [
        { label: "News & Press Release", path: `news/`, isBold: true },
    ]

    //  Dummy 40 news items to demonstrate pagination
    const newsData = Array.from({ length: 70 }, (_, i) => ({
        id: i + 1,
        title: `Prestige Group sees steady demand, eyes REIT once office portfolio scales up`,
        source:"CNBC TV18"
    }))

    // Prestige Group sees steady demand, eyes REIT once office portfolio scales up


    // Pagination state
    const ITEMS_PER_PAGE = 15
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE)

    // Slice data for current page
    const currentNews = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE
        const end = start + ITEMS_PER_PAGE
        return newsData.slice(start, end)
    }, [currentPage, newsData])

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
    }

    return (
        <section>
            <TopSection breadCrumnb={breadcrumbItems} title="News & Press Release" />

            <div className="max-w-[1100px] mx-auto px-6 py-10">
                {/* Table */}
                <div className="border rounded-lg border-gray-300 overflow-hidden">
                    <table className="w-full  rounded-full border-collapse ">
                        <thead className="bg-[#9a7523] text-white ">
                            <tr>
                                <th  style={{fontFamily:"gotham2"}} className="px-6 py-3 font-medium text-left">Sr</th>
                                <th  style={{fontFamily:"gotham2"}} className="px-6 py-3 font-medium text-left">News</th>
                                <th  style={{fontFamily:"gotham2"}} className="px-6 py-3 font-medium text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentNews.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="border-b border-gray-300 last:border-b-0"
                                >
                                    <td style={{fontFamily:"gotham-book"}} className="px-6 py-4">
                                        {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                                    </td>
                                    <td style={{fontFamily:"gotham-book"}} className="px-6 py-4 text-lg flex flex-col">
                                        {item.title}
                                        <span className='text-[#9A7523]'>{item.source}</span>
                                        </td>
                                    <td style={{fontFamily:"gotham-book"}} className="px-6 py-4">
                                        <button className="bg-[#F1E4B0] text-black  text-sm px-4 py-1 rounded ">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
                    {/* Left Arrow */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        className="border border-[#9a7523] px-3 py-1 rounded-full h-12 w-12  flex flex-col justify-center items-center bg-[#9a7523] disabled:opacity-40"
                        disabled={currentPage === 1}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="29" viewBox="0 0 14 29" fill="none">
                            <path d="M11.1354 21.0492L9.89761 22.33L3.15545 15.3495C3.04677 15.2376 2.96052 15.1046 2.90166 14.9581C2.8428 14.8116 2.8125 14.6545 2.8125 14.4958C2.8125 14.3371 2.8428 14.18 2.90166 14.0335C2.96051 13.887 3.04676 13.754 3.15545 13.6421L9.89761 6.65796L11.1343 7.93879L4.80628 14.494L11.1354 21.0492Z" fill="#F6F1E8" />
                        </svg>
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-1    ${page === currentPage
                                    ? " border-b-2  border-[#9a7523] text-black"
                                    : ""
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Right Arrow */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        className=" border  h-12 bg-[#9a7523] text-white w-12 rounded-full flex justify-center items-center flex-col"
                        disabled={currentPage === totalPages}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                            <path d="M-0.00262928 1.28087L1.2352 3.62396e-05L7.97737 6.98058C8.08605 7.09243 8.1723 7.22544 8.23116 7.37195C8.29001 7.51846 8.32031 7.67558 8.32031 7.83426C8.32031 7.99295 8.29001 8.15007 8.23116 8.29658C8.1723 8.44309 8.08605 8.5761 7.97737 8.68795L1.2352 15.6721L-0.00146294 14.3913L6.32654 7.83608L-0.00262928 1.28087Z" fill="#F6F1E8" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default News
