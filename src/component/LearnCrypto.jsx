import React from 'react';
import CryptoLearn from '../component/Learn_Crypto.png'

const LearnCrypto = () => {
    return (
        <div className="learnCryptoContainer mb-5">
            <div className="row">
                <a href=" "> <img src={CryptoLearn} alt="LearnCryptoBackgroundImage " className="img-fluid" /> </a>
            </div>
        </div>
    )
}

export default LearnCrypto
