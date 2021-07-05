import styled from "styled-components";

export const TimerWraper = styled.div`
  font-family: "Share Tech Mono", monospace;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  font-weight: 900;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;

  .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }
  label {
    letter-spacing: 0.1em;
    font-size: 24px;
    margin: 15px;
  }
  .text {
    color: #daf6ff;
    letter-spacing: 0.1em;
    font-size: 12px;
  }
  .box1 {
    display: flex;
    margin-right: -20px;
  }
  .btn {
    height: 35px;
    margin-left: 20px;
    letter-spacing: 0.1em;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    box-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  }
  .res-list {
    list-style: none;
  }
  .res-item {
    color: #daf6ff;
    letter-spacing: 0.1em;
    font-size: 35px;
    font-weight: 900;
  }
`;
