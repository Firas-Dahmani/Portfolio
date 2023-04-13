import React from 'react'
import styled from 'styled-components';
import jobs from '@/data/jobs.json'

const StyledJobsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    padding-left: 32px;
  }

  p {
    text-align: left;
  }

  li {
    color: rgba(247, 244, 228, 0.85);
    margin-bottom: 4px;
  }

  .job-description {
    margin-top: 32px;

    &:before {
      content: "★";
      position: absolute;
      left: 0;
      transform: translateY(-50%);
      font-size: 24px;
      line-height: 1;
      color: #fff;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 70%
  }
  
`;

function Jobs() {

  const JobsExperience = (
    <div>
      {jobs.map(job => (
        <div key={job.company} className='job-description'>
          <h3>{job.jobTitle} @ {job.company}</h3>
          <h3>{job.location} ({job.employmentPeriod})</h3>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>
                <p>{responsibility}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <StyledJobsSection>
      <h2>Work experience</h2>
      {JobsExperience}
    </StyledJobsSection>
  )
}

export default Jobs