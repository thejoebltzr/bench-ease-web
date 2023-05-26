import React from "react";
import {  Badge, Card, Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { sampleUser } from "../../assets/assets";
import Header from "../../components/shared/Header/Header";
import Cover from "./components/Cover/Cover";


const HistoryItem = ({item}) => {
  return (
    <div style={{marginTop:16, marginBottom:16}}>
      <p><b>{item?.title}</b></p>
      <p>{item?.date}</p>
      <p>{item?.description}</p>
    </div>
  )
}

const UserProfile = () => {

  const skills = ["Javascript", "ReactJS", "PHP Development", "Wordpress Development", "UI Design"]
  const additionalSkills = ["Quality Assurance" , "Automation Testing", "HTML/CSS"]

  const projectHistory = [
    {
      title:'Wisnet -  WordPress Developer', 
      date:'Dec 2022 - Mar 2023', 
      description: "The Geeks & Creatives of wisnet can help you navigate the overwhelming – sometimes scary – tasks of brand building and web technology. The result: communications that celebrate uniqueness, stand out from the noise, and help teams confidently go fearlessly into the ’net."},
    {
      title:'BaseMap - WordPress Developer',
      date:'April 2021 - Oct 2022 ',
      description: 'BaseMap® is the industry leading mobile and desktop mapping application providing hunters and outdoorsmen the tools and knowledge they need to plan, navigate, and share their outdoor adventures. BaseMap®’s goal is to help people be more successful outdoors with easy to use, cutting-edge technology like 3D maps, Smart Markers, unlimited offline mapping, live location sharing and much more.'
    }]

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Header userImage={sampleUser} />

          <Cover />
          <Card style={{marginTop:24, marginBottom:24, padding:16}}>
            <Container >
              <h6>Primary Skills</h6>
              <div>
                {skills.map((item) => (
                  <Badge color="#FE725D" >{item}</Badge>
                ))}               
              </div>
              <h6 style={{marginTop:16}}>Additional Skills</h6>
              {additionalSkills.map((item) => (
                  <Badge color="#FE725D" >{item}</Badge>
                ))}        
            </Container>
          </Card>

          <Card style={{marginTop:24, marginBottom:24, padding:16}}>
            <Container>
              <h6>Project History</h6>
              {projectHistory.map((item) => (
                <HistoryItem item={item}/>
              ))}
             
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
