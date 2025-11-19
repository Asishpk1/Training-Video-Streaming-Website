import { Link } from 'react-router-dom'
import disk from '../assets/cdisk.png'
import Header from '../Components/Header'
import mainimg2 from '../assets/social-media-content-composition.png'
import mainimg3 from '../assets/illustration-social-media-concept.png'
import mainimg4 from '../assets/professional-burnout-depression.png'
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <div>
                <div className='container-fluid'>
                    <div className='row p-5 d-flex justify-content-center align-items-center'>
                        <div className='col-md-6'>
                            <h1>Welcome to <span className='' style={{ fontWeight: '700' }}>Streamify</span></h1>
                            <h4>Streaming Just Got a Glow Up.</h4>
                            <p style={{ textAlign: 'justify' }}>Streamify is a sleek YouTube-powered streaming hub that lets you explore trending videos across genres in one organized place. Discover what’s popular, dive into curated categories, and stream content effortlessly with a smooth, distraction-free interface.</p>
                            <Link to={'/stream'}>
                                <button className='btn py-2 px-sm-5 py-sm-3 mt-sm-2 enlarge'>Explore Videos</button>
                            </Link>
                        </div>
                        <div className='col-md-5'>
                            <img src={disk} alt="" className='w-100' />
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className='p-sm-5 p-2'>
                        <h1 className='text-center fs-1'><strong>Features</strong></h1> <br />
                        <div className='d-flex align-items-center justify-content-around breadcrumb p-5' style={{ borderRadius: '40px' }}>

                            {/* First card */}
                            <Card className='shadow1 bgchange mb-3 mb-sm-0 enlarge' style={{ width: '14rem', backgroundColor: 'rgba(54, 71, 131, 1)', borderRadius: '20px' }}>
                                <Card.Img variant="top" src={mainimg2} />
                                <Card.Body style={{ marginTop: '-25px' }}>
                                    <Card.Title className='text-light'>Tailored Picks</Card.Title>
                                    <Card.Text>
                                        videos tailored to your viewing habits effortlessly.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            {/* Second card */}
                            <Card className='shadow1 bgchange mb-3 mb-sm-0 enlarge' style={{ width: '14rem', backgroundColor: 'rgba(54, 71, 131, 1)', borderRadius: '20px' }}>
                                <Card.Img variant="top" src={mainimg3} />
                                <Card.Body style={{ marginTop: '-25px' }}>
                                    <Card.Title className='text-light'>Trending by Genre</Card.Title>
                                    <Card.Text>
                                        Instantly browse what’s hot across your favorite categories.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            {/* Third card */}
                            <Card className='shadow1 bgchange enlarge' style={{ width: '14rem', backgroundColor: 'rgba(54, 71, 131, 1)', borderRadius: '20px' }}>
                                <Card.Img variant="top" src={mainimg4} />
                                <Card.Body style={{ marginTop: '-25px' }}>
                                    <Card.Title className='text-light'>Unified Feed</Card.Title>
                                    <Card.Text>
                                        See all relevant content in one clean, organized stream.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className='px-sm-4 pb-sm-3'>
                        <div className='row d-flex justify-content-around align-items-center p-3 p-sm-4 breadcrumb ms-2 ms-sm-0 me-sm-0 me-2' style={{ border: 'solid', borderRadius: '30px' }}>
                        <div className='col-lg-6'>
                            <h1 className='mb-sm-2'>Seamless and Stream Ready</h1>

                            <p className='breadcrumb p-4 enlarge'style={{borderRadius:'40px'}}><span className='fs-4' style={{ color: 'rgba(79, 96, 156, 1)' }}>Genre Explorer  </span>Browse YouTube’s busiest categories in one organized view. Streamify highlights trending videos across music, tech, gaming, news, entertainment, and more, helping you jump into the topics you care about without getting lost in endless feeds.</p>

                            <p className='breadcrumb p-4 enlarge'style={{borderRadius:'40px'}}><span style={{ color: 'rgba(79, 96, 156, 1)' }} className='fs-4'>Trend Pulse  </span>Stay ahead of what’s trending. Streamify tracks real-time YouTube activity to highlight videos gaining traction across niches, viral creators, breakout tutorials, or rising music moments, all delivered with effortless momentum.</p>

                            <p className='breadcrumb p-4 enlarge'style={{borderRadius:'40px'}}><span style={{ color: 'rgba(79, 96, 156, 1)' }} className='fs-4'>Distractionless Player  </span>Streamify’s clean player cuts out YouTube’s clutter so you can focus on the video. With smooth playback, minimal UI, and zero noise, it delivers a streamlined viewing experience without ads or distracting sidebars.</p>
                        </div>

                        {/* Youtube Video */}
                        <div className='col-lg-5'>
                            <iframe className='w-100 breadcrumb enlarge' style={{ borderRadius: '25px' }} width="560" height="335" src="https://www.youtube.com/embed/yG0RIU3y8QE?si=bvJW8_IoGQess1e9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home