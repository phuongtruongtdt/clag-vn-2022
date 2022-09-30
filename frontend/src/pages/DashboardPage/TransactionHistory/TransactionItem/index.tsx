import React from 'react';

const TransactionItem = () => {
  return (
    <div
      style={{
        fontFamily: 'Inter',
        borderRadius: '0.75rem',
        background: 'rgba(27,115,87, 0.05)',
        width: '100%',
        padding: '0.5rem',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      }}
    >
      <p style={{ fontWeight: '500' }}>Grab 2651321 VN</p>
      <p style={{ fontWeight: 'bold', color: '#1B7357' }}>-156.000 VND</p>
      <p style={{ fontSize: '0.7rem' }}>14:09 - 14/09/2022</p>
      <p>
        <span style={{ fontWeight: 'bold' }}>GeoComply</span> - 49 Mac Dinh Chi,
        Quan 1
      </p>
    </div>
  );
};

export default TransactionItem;
