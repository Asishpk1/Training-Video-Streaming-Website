import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='breadcrumb mt-sm-5 container-fluid footer' style={{ borderRadius:'50px'}}>
        <div className='d-flex justify-content-around py-4 row w-100 m-0' style={{borderTop:'solid', borderRadius:'50px'}}>

        {/* Streamify Section   */}
        <div className='col-md-5 px-3 px-sm-0'>
           <Link className='text-decoration-none' to={'/'}>
            <i style={{fontSize:'30px', fontWeight:'600'}} className="fa-solid fa-clapperboard"></i>
            <span className='ms-3' style={{fontSize:'30px', fontWeight:'600'}}>Streamify</span>
           </Link> <br /> <br />
            <p className='footersentence' style={{textAlign:'justify', marginTop:'-8px'}}>Streamify brings all your trending YouTube discoveries into one simple, organized streaming experience.</p>
            <span >Code licensed by Asish</span> <br />
            <span >Currently v2.1.4</span>
        </div>

        {/* Links Section */}
        <div className='col-md-1 mt-3 px-3 px-sm-0'>
            <h5 className='fw-bold'>Links</h5>
            <Link className='text-body' style={{textDecoration:'none'}} to={'/'}>Home</Link> <br />
            <Link className='text-body' style={{textDecoration:'none'}} to={'/home'}>Explore</Link> <br />
            <Link className='text-body' style={{textDecoration:'none'}} to={'/history'}>About Us</Link>
        </div>

        {/* Contact Section */}
        <div className='col-md-3 mt-3 px-3'>
            <h5 className='fw-bold'>Contact Us</h5>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Enter email"
                    />
                    </Col>
                    <Col xs="auto">
                    <Link to={'/'}>
                    <Button type="submit" className="mb-2 w-100 btn enlarge">
                        <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                    </Link>
                    </Col>
                </Row> 
            </Form>

            {/* Social Media Section */}
            <div className='d-flex'>
              <div className='d-flex justify-content-between mt-3 w-100'>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-facebook fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-twitter fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-instagram fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.linkedin.com/in/asish-krishna-p/'}><i className="fa-brands fa-linkedin fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://github.com/Asishpk1'}><i className="fa-brands fa-github fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-solid fa-phone fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
            </div>
            </div>
        </div>
    </div>
    
    <p className='text-center w-100'>Copyright &copy; 2025 <strong>Raynott</strong> | Designed by <strong>Asish</strong></p>
    </div>
    </>
  )
}

export default Footer