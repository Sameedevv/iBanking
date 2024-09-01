import { formatNumber } from '../../utils/formatNumber';
import React from 'react';

const SentInvoicesTable: React.FC = () => {
  return (
    <div>
      <div className="text-muted-foreground mb-2 grid grid-cols-5 gap-2 border-b py-2 text-center text-sm">
        <p>Sender</p>
        <p>Sent to</p>
        <p>Amount</p>
        <p>Message</p>
        <p>Due date</p>
      </div>
      <div className="grid grid-cols-5 place-items-center gap-2 rounded-[0.5rem] p-2 text-center">
        <p className="line-clamp-1">Svetozar Miletic</p>
        <p className="line-clamp-1">SomeAccountName LLC</p>
        <p>{formatNumber(30000)}</p>
        <p className="line-clamp-1">Repairs</p>
        <p>18/08/2024 13:00</p>
      </div>
    </div>
  );
};

export default SentInvoicesTable;
