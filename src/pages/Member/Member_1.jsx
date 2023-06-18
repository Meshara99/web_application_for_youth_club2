import React from 'react'
import  './Member_1.css'
import { Link } from 'react-router-dom';

export default function Member_1() {
  return (
    <div>
    <h1 style={{textAlign:'center',marginTop:'20px'}}>Membership</h1>
    <p className='Para_1'style={{marginLeft:'90px',marginRight:'90px',fontSize:'15px'}} >Federation of youth club Mulatiyana  is the oldest 
    and largest network of community youth organizations in Matara District. Our members represent the diversity of our
     city: theatres, sports clubs, arts organizations, urban farms, youth centers and more. Some members provide
      services to specific groups, such as homeless young people or refugees, and others work with young people 
      on a wider scale. Between them they are a powerful, knowledgeable, and vital network for young people and 
      for the communities they serve. We provide an evolving program of support that is responsive to our members’ needs, 
      strengthening youth organizations across London to ensure
     their ongoing provision of support and services for young people..</p>


     <h4 style={{textAlign:'center'}}>Who can join Youth Club?</h4>
     <p className='Para_1'style={{marginLeft:'90px',marginRight:'90px',fontSize:'15px' }} >If you deliver activities directly to young people
      in Mulatiyana, you can join Youth club as a member! As a member,
        you’ll be able to take advantage of our wide range of member benefits, including training, network events, access to our sports,
        employability and youth action programmes, the opportunity to achieve our Quality Mark, and much more. For a full list, see our
        Member Benefits page.
        Formal education institutions and profit-making companies are not eligible for membership.</p>

     <h4 style={{textAlign:'center'}} >How do I join?</h4>
        <p className='Para_1' style={{ marginLeft:'90px',marginRight:'90px',fontSize:'15px' }}>Please complete application form below, and a member of our team will get in touch with you within 5 working days
             regarding your application.
             If you have any queries about joining Mulatiyana Youth or membership in general, please reach out to the membership team.</p>
            
             <div style={{ textAlign: 'center' }}>
        <Link to="./Member_2" href="/Member_1/Member_2" style={{ fontSize: '30px'}}>Apply for the membership</Link>
      </div>
    </div>


    
  )
}
