// import React, { useState, useEffect } from 'react';

// export default function BotMessage({ fetchMessage }) {
//   const [isLoading, setLoading] = useState(true);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     async function loadMessage() {
//       const msg = await fetchMessage();
//       setLoading(false);
//       setMessage(msg);
//     }
//     loadMessage();
//   }, [fetchMessage]);

//   return (
//     <div className='message-container'>
//       <div className='bot-message'>{isLoading ? '...' : message}</div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';

// export default function BotMessage({ fetchMessage }) {
//   const [isLoading, setLoading] = useState(true);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     async function loadMessage() {
//       const msg = await fetchMessage();
//       setLoading(false);
//       setMessage(msg);
//     }
//     loadMessage();
//   }, [fetchMessage]);

//   return (
//     <div className='message-container'>
//       <div className='bot-message'>
//         {isLoading
//           ? '...'
//           : message.split('\n').map((line, index) => (
//               <React.Fragment key={index}>
//                 {line}
//                 <br />
//               </React.Fragment>
//             ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className='message-container'>
      <div
        className='bot-message'
        dangerouslySetInnerHTML={{ __html: isLoading ? '...' : message }}
      ></div>
    </div>
  );
}
