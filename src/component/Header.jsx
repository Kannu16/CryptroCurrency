import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header-container mb-5">
                <div className="left">
                    <h2>HODLINFO</h2>
                    <h5> Powered By <span>Finstreet</span> </h5>
                </div>

                <div className="mid">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            INR
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href=" ">INR</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-secondary ms-3 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            BTC
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                            <a className="dropdown-item" href=" ">INR</a>
                        </div>


                    </div>
                  <button className="btn btn-primary ms-3">BUY BTC</button>
                </div>

                <div className="last">
                    <span> 10 </span>
                    <button className="btn btn-primary"> <i className="fab fa-telegram telegram-icon"></i> Connect Telegram</button>
                </div>
                
            </div>
        </>
    )
}

export default Header
