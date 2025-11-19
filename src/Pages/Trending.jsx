import Card from 'react-bootstrap/Card';

const Trending = () => {
  return (
    <>
    <div className='p-5'>
        <h2 className='text-center fw-bold'>Trending Insights</h2>
        <p style={{textAlign:'justify'}}>Trending Insights is where Streamify breaks down the momentum behind YouTube’s fast-moving world and turns it into something clear, structured, and easy to follow. Instead of drowning in endless feeds and algorithm-driven noise, this page gives you a clean snapshot of what’s rising, who’s gaining traction, and how the YouTube landscape is shifting in real time.</p>

        <div className='row breadcrumb mt-sm-5 p-5 d-flex align-items-center border border-5' style={{borderRadius:'80px'}}>
            <div className='col-md-4'><h2 className='fw-bold'>Rising Creators of the Week</h2></div>
            <div className='col-md-8 d-flex flex-wrap justify-content-around gap-2'>

                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://i.pinimg.com/564x/ac/da/0a/acda0ac3f1fa6c93dd38ca1b0eda2d9e.jpg' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>Drake</Card.Title>
          </Card.Body>
        </Card>
                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Portrait_by_Brian_Ziff.jpg/500px-The_Weeknd_Portrait_by_Brian_Ziff.jpg' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>The Weekend</Card.Title>
          </Card.Body>
        </Card>
                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://s3.r29static.com/bin/entry/101/0,0,2000,2400/720x864,85/1900730/image.webp' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>Taylor Swift</Card.Title>
          </Card.Body>
        </Card>
                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://i.pinimg.com/736x/52/eb/34/52eb34748db2150ab75ddbf057d11fd9.jpg' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>Anirudh Ravichander</Card.Title>
          </Card.Body>
        </Card>
            </div>
        </div>

        <div className='row breadcrumb mt-sm-5 p-5 d-flex align-items-center border border-5' style={{borderRadius:'80px'}}>
            <div className='col-md-8 d-flex flex-wrap justify-content-around gap-2'>
                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://i.pinimg.com/1200x/5b/aa/ee/5baaee06b679537d8bc0a36ac40c3d60.jpg' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>Romance</Card.Title>
          </Card.Body>
        </Card>
                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://i.pinimg.com/1200x/9b/8e/b8/9b8eb879f66343c000a6ecc72681011e.jpg' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>Hip-Hop</Card.Title>
          </Card.Body>
        </Card>
                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://i.pinimg.com/1200x/f8/35/c3/f835c342e151bc626d8d6d60b0a9f711.jpg' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>Classical</Card.Title>
          </Card.Body>
        </Card>
                <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden',borderRadius:'25px' }}>
          <Card.Img className='video-card-img' variant="top" src='https://i.pinimg.com/736x/a3/79/30/a379307ecf4d6a4a1ce5ec554176d35d.jpg' style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>Rap</Card.Title>
          </Card.Body>
        </Card>
            </div>
        
        <div className='col-md-4'>
            <h2 className='fw-bold text-center'>Genre Heat Index</h2>
            <p style={{textAlign:'center'}}>Different categories heat up at different times. The Genre Heat Index tracks which niches are experiencing sudden activity spikes, giving you a real-time look at where attention is moving.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trending