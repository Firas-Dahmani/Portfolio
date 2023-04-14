import React from 'react'
import styled from 'styled-components';
import projects from '@/data/projects.json'


const StyledProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

`;

const CardStyle = styled.div`
  background: linear-gradient(0deg, rgba(20, 20, 20, 0.82), rgba(20, 20, 20, 0.82)), url(${props => props.bgImage});
  box-shadow: 0px 0px 18px rgba(247, 244, 228, 0.03);
  border-radius: 16px;
  width: 280px;
  height: 150px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: linear-gradient(0deg, rgba(20, 20, 20, 0), rgba(20, 20, 20, 0)), url(${props => props.bgImage});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .content {
    width: 70%;
  }

  p{
    padding-top: 16px;
  }
  
  
  /* Default styles for all screen sizes */

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 0px 18px rgba(247, 244, 228, 0.03));
  border-radius: 16px;
  
  /* Styles for tablet */
  @media only screen and (min-width: 360px) {
    width: 300px;
    height:200px;
    background-size: contain;
  }
  
  /* Styles for desktop */
  @media only screen and (min-width: 900px) {
    width: 350px;
    height: 250px;

    /* Styles for text */
    h3 {
      font-size: 32px;
      color: #fff;
    }

    .content {
      position: absolute;
      width: 300px;
      height: 140px;
      left: calc(50% - 300px/2 + 200px);
      top: calc(50% - 190px/2 - 3.5px);
      background: rgba(115, 147, 77, 0.75);
      border-radius: 16px;
      padding: 29px 30px;
      color: #fff;
      font-size: 24px;

      p{
        font-size: 18px;
        line-height: 27px;
      }
    }
  }

`;

function Projects() {
  const Cards = (
    projects.map((project, index)=> (
      <a href={project.url} target="_blank" key={index}>
        <CardStyle bgImage={project.imageUrl} >
          <div className="content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </CardStyle>
      </a>
    ))
  )
  return (
    <StyledProjectSection>
      <h2>SOME THINGS I'VE BUILD</h2>
      {Cards}
    </StyledProjectSection>
  )
}

export default Projects