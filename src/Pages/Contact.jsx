import { Link } from 'react-router-dom'
import phone from '../assets/phone1.png'

const Contact = () => {
  return (
    <>
    <div className='px-5'>
        <h2 className='fw-bold text-center mt-sm-5 mt-4'>Contact Us</h2>
        <p>At Streamify, we believe communication should be as clear and effortless as the experience we’re building. Whether you have suggestions, want to report an issue, or simply wish to share your thoughts, we’re here to listen. Every message helps shape the platform, refine our features, and push us closer to delivering the most intuitive streaming companion possible.</p>
        <div className='d-flex justify-content-center mt-sm-5'>
            <img src={phone} alt="" className='contact-photo' style={{width:'50%'}} />
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center mt-sm-5 mt-3 gap-4 pb-sm-5'>
            <input className='form-control contact-input'style={{width:'25%'}} type="text" placeholder='Enter your EmaIl' />
            <button className='btn'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='d-flex justify-content-center  pb-sm-4 pb-3'>
              <div className='d-flex justify-content-between mt-3 breadcrumb contact-brands' style={{borderRadius:'30px',width:'25%'}}>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-facebook fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-twitter fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-instagram fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.linkedin.com/in/asish-krishna-p/'}><i className="fa-brands fa-linkedin fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://github.com/Asishpk1'}><i className="fa-brands fa-github fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-solid fa-phone fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
            </div>
            </div>
    </div>
    </>
  )
}

export default Contact