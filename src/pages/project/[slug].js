import React from "react";
import { Image } from "next/dist/client/image-component";
import { Col, Grid, Row } from "rsuite";
import { useRouter } from "next/router";
import { projectInfo } from "../../constants";
import Custom404 from "../404";

const Page = () => {
  const router = useRouter();

  if (!projectInfo[router.query.slug]) {
    return <Custom404/>
  }

  return (
    <div className="project-section">
      <h2>About {projectInfo[router.query.slug].title}</h2>
      <Grid fluid>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={16}>
            <Image src={projectInfo[router.query.slug].img} alt="Project image"/>
          </Col>
          <Col xs={24} sm={24} md={8}>
            {projectInfo[router.query.slug].description}
          </Col>
        </Row>
      </Grid>

    </div>
  )
}

export default Page;