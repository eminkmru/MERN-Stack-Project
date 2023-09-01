import React from "react";

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <iframe
        title="map"
        src={props.src}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Map;
