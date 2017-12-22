import React from 'react';

export default (props) => {
  const formStyle = {
    marginTop: '15px'
  };

  return (
    <form style={formStyle} onSubmit={props.onSubmit}>
      <input name="title" placeholder="Title" ref={props.titleRef}/>
      <input name="director" placeholder="Director" ref={props.directorRef}/>
      <button type="submit">add</button>
    </form>
  );
}
