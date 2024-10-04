import React from 'react';

function ServiceDetails({ service }) {
  return (
    <div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      {/* Display other service details */}
    </div>
  );
}

export default ServiceDetails;