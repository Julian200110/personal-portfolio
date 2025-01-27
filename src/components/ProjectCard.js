import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, description2, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span><br/>{description}<br/><br/></span>
          <span>{description2}</span>
        </div>
      </div>
    </Col>
  )
}
