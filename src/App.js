import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

const foodILike = [
   {
   id: 1,
   name: 'Kimchi',
   image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
   rating: 5,
   },
   {
   id: 2,
   name: 'Samgyeopsal',
   image:
   'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
   rating: 4.9,
   },
  {
   id: 3,
   name: 'Bibimbap',
   image:
   'https://i.namu.wiki/i/DHQbkFTG-sTU-JzBg3CUk_weVCaEND2Lt9PR0ngk8qUzOVb3WhXcMPbG_a1ChiXc8EaefMy-9rxkjErVyk8EUiGDwl3OD17DyHfLdi4ViJkobv-3mqsRCU3mDxJ-esq2E-b8DYaz9euDi3EvgstY4A.jpg',
   rating: 5,
   },
   {
   id: 4,
   name: 'Doncasu',
   image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
   rating: 5,
   },
   {
   id: 5,
   name: 'Kimbap',
   image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
   rating: 5,
   },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
