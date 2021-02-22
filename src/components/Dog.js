import React from 'react';

const Dog = (props) => {
  return (
    <div>
      <p>I am a functional dog component!</p>
      <p>My name is {props.name}</p>
    </div>
  );
};

export default Dog;


