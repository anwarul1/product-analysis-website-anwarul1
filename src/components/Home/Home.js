import React from 'react';
import { Button } from 'react-bootstrap';
import book from '../../Assets/image/book.png';
import useReviews from '../../Hooks/useReviews';
import './Home.css';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  // console.log(reviews.slice(0, 3));

  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <h1>Your next Book</h1>
          <h1>Your bast Book</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eligendi cum repellendus, voluptatum alias magnam illo quas
            veritatis ipsum dicta sequi tempora maxime vero quae, libero,
            laudantium sint et minima!
          </p>
          <div className="btn-live-demo">
            <Button className="text-center" variant="primary">
              Live Demo
            </Button>{' '}
          </div>
        </div>
        <div className="product-container">
          <img src={book} alt="Habluder jonno programming By Jhankar Mahbub" />
        </div>
      </div>
      {/* Customer reviews section */}
      <div>
        <h1 className="text-center my-5">
          Customer Reviews ({reviews.length})
        </h1>
      </div>
    </>
  );
};

export default Home;
