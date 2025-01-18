import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/gallery');
  };

  return (
    <div className="Home">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="homeWrap">
          <div className="head">
            <h1>DAPPSTOKEN INTEGRATOR</h1>
            <h2>Open protocol for validating various Wallets to Dapps Secure server</h2>
          </div>
          <div className="btnHolder">
            <button onClick={handleGetStarted}>Get started</button>
          </div>
          <div className="diagram">
            <img
              src="https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/AE70D8DB-CA96-41B5-BD4E-B6CAAE450233_1686206680.jpeg?width=2400&optimize=medium"
              alt="Loading..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
