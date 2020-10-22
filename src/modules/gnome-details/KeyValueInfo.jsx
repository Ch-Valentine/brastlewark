import React from 'react';

const KeyValueInfo = ({ keyName, value, children }) => (
  <div className="key-value-info">
    <span className="key-value-info__key">{keyName}:</span>
    <span className="key-value-info__value">
      {children || value}
    </span>
  </div>
);

export default KeyValueInfo;
