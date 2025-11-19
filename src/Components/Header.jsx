import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='d-flex justify-content-center'>
        <Navbar expand='lg' className='mt-4 py-sm-3' style={{borderRadius:'50px',width:'96%', backgroundColor:'rgba(54, 71, 131, 1)', boxShadow:'0px 5px 15px 4px'}}>
      <Container>
        <Link to={'/'} className='text-decoration-none'><Navbar.Brand className='text-light fs-4 fw-bold'> <i className="fa-solid fa-clapperboard"></i> Streamify</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light d-flex justify-content-center gap-sm-5 gap-2 flex-wrap'>
            <Link to={'/stream'} className='text-light text-decoration-none opacity-75 highlight'>Stream Zone</Link>
            <Link to={'/trending'} className='text-light text-decoration-none opacity-75 highlight'>Trending Insights</Link>
            <Link to={'/about'} className='text-light text-decoration-none opacity-75 highlight'>About</Link>
            <Link to={'/contact'} className='text-light text-decoration-none opacity-75 highlight'>Contact Us</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Header