'use client'

import React from 'react';

export const EmailFooter = ({ name, title, pronouns, officeNum, mobileNum }) => {

  return (
    <>
      <p>
        <a href="https://rlmg.com" style={{ textDecoration: "none!important" }}>
          <img
            src="https://manage.rlmg.com/assets/fc96f888-8461-48bb-9508-16b6c93d6955/rlmg-email-logo.png"
            width="100"
            height="50"
          />
        </a>
      </p>
      <p style={{
        fontFamily: "Arial,'Helvetica Neue',Helvetica,sans-serif",
        color: "#015a8d",
        fontWeight: "bold",
        fontSize: "20px",
        margin: ".25em 0 0",
        lineHeight: "1.25"
      }}
      >{name}</p>
      <p style={{ margin: "0 0 1em", fontSize: "14px", fontFamily: "Georgia,Times,'Times New Roman',serif", lineHeight: "1.25" }}>
        {title}
        {pronouns && (
          <span>
            &nbsp;|&nbsp;<em>{pronouns}</em>
          </span>
        )}
      </p>
      {officeNum && (
        <p style={{ fontFamily: "Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: "13px", margin: "1em 0 0", lineHeight: "1.25" }}>
          Office: {officeNum}
        </p>
      )}
      {mobileNum && (
        <p style={{ fontFamily: "Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: "13px", margin: 0, lineHeight: "1.25" }}>
          Mobile: {mobileNum}
        </p>
      )}

      <p style={{ lineHeight: "1em", margin: "1em 0 .5em" }}>
        <a href="https://www.instagram.com/rlmg_media/" style={{ textDecoration: "none!important" }}>
          <img
            src="https://manage.rlmg.com/assets/c6685262-7fbd-4822-9c04-eec1ae39330c/instagram.png"
            width="20" height="20"
            style={{ display: "inline-block", marginRight: "10px", width: "20px", height: "20px" }} />
        </a>

        <a href="https://www.facebook.com/RLMGMedia/" style={{ textDecoration: "none!important" }}>
          <img
            src="https://manage.rlmg.com/assets/4eb2a8ec-8e93-41e5-8f08-020833980f67/facebook.png"
            width="20" height="20"
            style={{ display: "inline-block", marginRight: "10px", width: "20px", height: "20px" }} />
        </a>

        <a href="https://www.linkedin.com/company/richard-lewis-media-group" style={{ textDecoration: "none!important" }}>
          <img
            src="https://manage.rlmg.com/assets/a519d317-51ba-4519-af75-23aefb2de7fc/linkedin.png"
            width="20" height="20"
            style={{ display: "inline-block", marginRight: "10px", width: "20px", height: "20px" }} />
        </a>
      </p>

      <p style={{ lineHeight: "1em", margin: "1em 0 .5em" }}>
        <a href="https://rlmg.com" style={{ fontFamily: "Arial,'Helvetica Neue',Helvetica,sans-serif", textDecoration: "underline", color: "#019ff9", fontWeight: "bold", fontSize: "13px", margin: 0, lineHeight: "1.25" }}>
          rlmg.com
        </a>
      </p>
    </>
  );
};
