import React, { useEffect, useState } from 'react'
import { Badge, Button, ButtonGroup, Card, Col, Container, DropdownButton, Form, Modal, Row } from 'react-bootstrap'
import Sidebar from '../../components/shared/Sidebar/Sidebar'
import { sampleUser } from '../../assets/assets'
import Header from '../../components/shared/Header/Header'
import Cover from './components/Cover/Cover'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
const HistoryItem = ({ item }) => {
  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      {/* eslint-disable-next-line react/prop-types */}
      <p><b>{item?.title}</b></p>
       {/* eslint-disable-next-line react/prop-types */}
      <p>{item?.date}</p>
       {/* eslint-disable-next-line react/prop-types */}
      <p>{item?.description}</p>
    </div>
  )
}

const UserProfile = () => {
  const primarySkills = ['Javascript', 'ReactJS', 'PHP Development', 'Wordpress Development', 'UI Design']
  const additionalSkills = ['Quality Assurance', 'Automation Testing', 'HTML/CSS']
  const skills = ['Javascript', 'ReactJS', 'PHP Development', 'Wordpress Development', 'UI Design']

  const [showSkillModal, setShowSkillModal] = useState(false)
  const [selectedSkillName, setSelectedSkillName] = useState('Select a skill')
  const [selectedSkill, setSelectedSkill] = useState('')

  const projectHistory = [
    {
      title: 'Wisnet -  WordPress Developer',
      date: 'Dec 2022 - Mar 2023',
      description: 'The Geeks & Creatives of wisnet can help you navigate the overwhelming – sometimes scary – tasks of brand building and web technology. The result: communications that celebrate uniqueness, stand out from the noise, and help teams confidently go fearlessly into the ’net.'
    },
    {
      title: 'BaseMap - WordPress Developer',
      date: 'April 2021 - Oct 2022 ',
      description: 'BaseMap® is the industry leading mobile and desktop mapping application providing hunters and outdoorsmen the tools and knowledge they need to plan, navigate, and share their outdoor adventures. BaseMap®’s goal is to help people be more successful outdoors with easy to use, cutting-edge technology like 3D maps, Smart Markers, unlimited offline mapping, live location sharing and much more.'
    }]

  useEffect(() => {
    loadSkills()
  }, [])

  const radioHandler = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.preventDefault
    setSelectedSkill(e.target.value)
  }

  const loadSkills = async () => {
    const userToken = localStorage.getItem('token')
    try {
      await axios.get('https://brm.kierquebral.com/api/v1/skills/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Authorization: `Bearer ${userToken}`
        }
      }).then((response) => {
        console.log(response.data)
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  const submitHandler = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.preventDefault
    setShowSkillModal(false)
  }

  return (
    <>
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Header userImage={sampleUser} />

          <Cover />
          <Card style={{ position: 'relative', marginTop: 24, marginBottom: 24, padding: 16, flex: 1 }}>
            <Container >
            <Button onClick={() => setShowSkillModal(true)} style={{ position: 'relative', float: 'right' }}>Add Skill</Button>
              <h6>Primary Skills</h6>
              <div>
                {primarySkills.map((item, index) => (
                  <Badge color="#FE725D" key={index} >{item}</Badge>
                ))}
              </div>
              <h6 style={{ marginTop: 16 }}>Additional Skills</h6>
              {additionalSkills.map((item, index) => (
                  <Badge color="#FE725D" key={index}>{item}</Badge>))}
            </Container>
          </Card>

          <Card style={{ marginTop: 24, marginBottom: 24, padding: 16 }}>
            <Container>
              <h6>Project History</h6>
              {projectHistory?.map((item, index) => (
                <HistoryItem item={item} key={index}/>
              ))}
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* Skill Modal */}
    <Modal show={showSkillModal} onHide={() => setShowSkillModal((prev) => !prev)}>
      <Modal.Header>
        <Modal.Title>Add Skill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>Skill Name</b></p>
        <DropdownButton title={selectedSkillName}>
          {skills?.map((skillItem, index) => (
            <DropdownItem key={skillItem + index} onClick={() => setSelectedSkillName(skillItem)}>{skillItem}</DropdownItem>
          ))}
        </DropdownButton>
        <div style={{ marginTop: 24 }}>
        <p><b>Skill Category</b></p>
        <Form.Group>
          <Form.Check
            value="primary"
            type="radio"
            label="Primary"
            checked={selectedSkill?.toLowerCase() === 'primary'}
            onChange={radioHandler}
            inline
          />
          <Form.Check
            value="additional"
            type="radio"
            label="Additional"
            checked={selectedSkill?.toLowerCase() === 'additional'}
            onChange={radioHandler}
            inline
          />
        </Form.Group>

        <ButtonGroup className="d-flex">
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: 28 }}
            onClick={submitHandler}>
            Submit
          </Button>
        </ButtonGroup>
        </div>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default UserProfile
