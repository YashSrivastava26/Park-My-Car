import React, { useState } from "react";
import "./description.css";
import img from "../../Common Resources/img1.jpeg";
import profile_photo from "../../Common Resources/user (2).png";
import StarOutlineIcon from '@mui/icons-material/StarOutline';


function Description() {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'rating':
                return <div>Rating content goes here, In hac habitasse platea dictumst. Integer pulvinar risus nunc, sit amet
                    pretium felis commodo a.In hac habitasse platea dictumst. Integer pulvinar risus nunc, sit amet
                    pretium felis commodo a.</div>;
            case 'review':
                return <div>Review content goes here, In hac habitasse platea dictumst. Integer pulvinar risus nunc, sit amet
                    pretium felis commodo a.In hac habitasse platea dictumst. Integer pulvinar risus nunc, sit amet
                    pretium felis commodo a.</div>;
            default:
                return (
                    <div>
                        Decription content goes here, In hac habitasse platea dictumst. Integer pulvinar risus nunc, sit amet
                        pretium felis commodo a.In hac habitasse platea dictumst. Integer pulvinar risus nunc, sit amet
                        pretium  a.
                    </div>
                );
        }
    };

    return (
        <div className="description">
            <div className="description-container">
                <div className="desc-top">
                    <div className="desc-top-tp">
                        <h3>Parking Complex</h3>
                        <div className="desc-top-tp-right">
                            $ 4 765 800
                        </div>
                    </div>
                </div>
                <div className="desc-btm">
                    <div className="desc-btm-container">
                        <div className="image-grid">
                            <div className="left-column">
                                <img src={img} alt="Main" />
                            </div>
                            <div className="right-column">
                                <div className="right-row">
                                    <img src={img} alt="Thumbnail 1" />
                                </div>
                                <div className="right-row">
                                    <img src={img} alt="Thumbnail 2" />
                                </div>
                                <div className="right-row">
                                    <img src={img} alt="Thumbnail 3" />
                                </div>
                            </div>
                        </div>
                        <div className="user-profile-card">
                            <div className="profile-left-column">
                                <img className="profile-image" src={profile_photo} alt="Profile" />
                                <div className="profile-info">
                                    <h2 className="profile-name">Red Evil</h2>
                                    <p className="profile-position">Realter</p>
                                </div>
                            </div>
                            <div className="profile-right-column">
                                <nav>
                                    <ul>
                                        <li className={activeTab === 'description' ? 'active' : ''} onClick={() => handleTabClick('description')}>
                                            Description
                                        </li>
                                        <li className={activeTab === 'rating' ? 'active' : ''} onClick={() => handleTabClick('rating')}>
                                            Rating
                                        </li>
                                        <li className={activeTab === 'review' ? 'active' : ''} onClick={() => handleTabClick('review')}>
                                            Review
                                        </li>
                                    </ul>
                                </nav>
                                <div className="profile-description">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="button-row">
                        <button className="button-1">Button 1</button>
                        <button className="button-2">Button 2</button>
                        <button className="button-3">Star</button>
                        <button className="button-4">Share</button>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Description;
