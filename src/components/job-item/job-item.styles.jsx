import styled from "styled-components";

export const JobItemComponent = styled.div`
  margin-bottom: 16px;
  .card-link {
    color: blue;
    font-size: 14px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .job-details {
    display: flex;
    flex-direction: row;
    div {
      margin-right: 24px;
    }
  }
`;
