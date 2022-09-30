import React from 'react';

const TransactionItem = (props: {
  description: string;
  amount?: number;
  money_in?: number;
  time: string;
  name: string;
  address: string;
}) => {
  const { description, amount, time, name, address, money_in } = props;
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
      <p style={{ fontWeight: '500' }}>{description}</p>
      <p style={{ fontWeight: 'bold', color: '#1B7357' }}>
        {amount ? `-${amount}` : `${money_in}`} VND
      </p>
      <p style={{ fontSize: '0.7rem' }}>{time}</p>
      <p style={{ whiteSpace: 'normal' }}>
        <span style={{ fontWeight: 'bold' }}>{name}</span> - {address}
      </p>
    </div>
  );
};

export default TransactionItem;
