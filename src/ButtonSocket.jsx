import React, { useState, useEffect } from 'react';

export const ButtonSocket = () => {
  const [count, setCount] = useState(0);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    setSocket(socket);

    // При отриманні оновлення лічильника від сервера
    socket.onmessage = ('countUpdate', (newCount) => {
      setCount(parseInt(newCount.data));
      console.log(newCount);
    });

    // // Закриття з'єднання при виході з компоненти
    // return () => {
    //   socket.close();
    // };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    socket.send('increment');
  };

  return (
    <div className='center-num-div'>
      <div className="center-rand-butt">
        <button className='rand-butt' onClick={handleClick}>Count alcoholics!</button>
      </div>
      <p className='center-alc-butt'>Alcoholic: {count}</p>
    </div>
  );
};
