const Restaurant = ({handleClick, name, address, zipcode}) => {

    return (
      <div className='hotel cursor-pointer' onClick={ e => handleClick(e, name, zipcode)}>
        <p>{name}</p>
        <p>{address}</p>
      </div>
    );
  };
  
  export default Restaurant;