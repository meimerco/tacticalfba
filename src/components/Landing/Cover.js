import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Cover() {
  return (
    <CoverWrapper>
      <div className="text-wrap">
        <div>
          <h2>Get more reviews with TacticalFBA</h2>
          <p className="lead">
            Research shows that well-worded product inserts help to increase the
            frequency of Amazon reviews.
            <br />
            We can help design, print, and ship your product insert directly to
            your factory in China for immediate packaging.
          </p>
        </div>
        <Link to="/insert" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large" color="primary">
            Get Started
          </Button>
        </Link>
      </div>
    </CoverWrapper>
  );
}

const CoverWrapper = styled.div`
    height: 96vh;
    position: relative;
    background: url(img/coverD.jpg) no-repeat center center fixed;
    width: 100%;
    background-size: cover;

    .text-wrap {
        position: absolute;
        left: 70%;
        top: 50%;
        z-index: 2;
        transform: translate(-50%,-50%);
        width: 40%;
        p {
            margin: 50px 0 60px;
            font-weight: 400;
        }
    }
    @media (max-width: 768px) { 
        background: url(img/coverM.jpg) no-repeat bottom center fixed;
        background-size: cover;
        text-align: center;
        .text-wrap {
            left: 50%;
            width: 70%;
            p {
                margin: 20px 0 40px;
            }    
        }

    
`;
