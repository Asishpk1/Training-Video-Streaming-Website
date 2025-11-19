import React from 'react'
import { Link } from 'react-router-dom'

const StreamingPage = () => {
    return (
        <>
            <div className='container-fluid p-sm-5 p-3'>
                <h3 className='text-center fw-bold'>Trending Now</h3>
                <div className='breadcrumb categorysec'>
                    <div className='d-flex justify-content-around align-items-center flex-wrap py-4 w-100' style={{ borderRadius: '40px' }}>
                        <iframe className='breadcrumb enlarge stream-videocard stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/sdajTOjARNg?si=JHoUKvWvnW1COfyr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/4Bsc2uI_LsM?si=YK1kjlPW_nuJUP1i" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/_e45NEdNMXE?si=EXxdD8rwJQvksn4O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='d-flex justify-content-center w-100'>
                        <Link to={'https://www.youtube.com/results?search_query=trending+songs'}><button className='btn enlarge'>Explore more <i className="fa-solid fa-arrow-right"></i></button></Link>
                    </div>
                </div>
                <h3 className='text-center fw-bold mt-5'>Tech & Gadgets</h3>
                <div className='breadcrumb categorysec'>
                    <div className='d-flex justify-content-around align-items-center flex-wrap w-100 py-4' style={{ borderRadius: '40px' }}>
                    <iframe className='breadcrumb enlarge stream-videocard stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/0yboGn8errU?si=Kj-pdepPQesjuQu7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/ysEN5RaKOlA?si=U4TjYmfWgikLev_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/s2OccJMWwkM?si=ycQzQpbhBAQlsjw7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='d-flex justify-content-center w-100'>
                        <Link to={'https://www.youtube.com/results?search_query=tech+and+gadgets'}><button className='btn enlarge'>Explore more <i className="fa-solid fa-arrow-right"></i></button></Link>
                    </div>
                </div>
                <h3 className='text-center fw-bold mt-5'>Viral Picks</h3>
                <div className=' breadcrumb categorysec'>
                    <div className='d-flex justify-content-around align-items-center flex-wrap w-100 py-4' style={{ borderRadius: '40px' }}>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/Bep_O4420yo?si=FGwmbBZvh5m9vsTb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/rwA4N8pj1XA?si=V3hbncjfAtGEIXqn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/PssKpzB0Ah0?si=meI4C62QO0LeM0Kg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='d-flex justify-content-center w-100'>
                        <Link to={'https://www.youtube.com/results?search_query=viral+picks'}><button className='btn enlarge'>Explore more <i className="fa-solid fa-arrow-right"></i></button></Link>
                    </div>
                </div>
                <h3 className='text-center fw-bold mt-5'>Recommended for You</h3>
                <div className='d-flex justify-content-around align-items-center flex-wrap breadcrumb categorysec py-4' style={{ borderRadius: '40px' }}>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/5-MLMzbUlPY?si=k622b51bH4TdSVVA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/O9v10jQkm5c?si=wYYZrC_YPixKo171" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe className='breadcrumb enlarge stream-videocard' style={{ borderRadius: '25px' }} width="420" height="237" src="https://www.youtube.com/embed/NoqnQaxfhXU?si=_cn3cb42n0s6w6PL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className='d-flex justify-content-center w-100 mt-5'>
                    <Link to={'https://www.youtube.com/'}>
                    <button className='btn enlarge'>Go to YouTube <i className="fa-brands fa-youtube text-danger fa-2xl"></i></button>
                    </Link>
                    </div>
            </div>
        </>
    )
}

export default StreamingPage