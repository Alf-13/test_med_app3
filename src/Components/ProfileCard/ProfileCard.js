import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import './ProfileCard.css';

const ProfileCard = () => {
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        } else {
            fetchUserProfile();
        }
    }, [navigate]);

    const fetchUserProfile = async () => {
        try {
            const authtoken = sessionStorage.getItem("auth-token");
            const email = sessionStorage.getItem("email");

            if (!authtoken) {
                navigate("/login");
            } else {
                const response = await fetch(`${API_URL}/api/auth/user`, {
                    headers: {
                        "Authorization": `Bearer ${authtoken}`,
                        "Email": email,
                    },
                });
                if (response.ok) {
                    const user = await response.json();
                    setUserDetails(user);
                } else {
                    throw new Error("Failed to fetch user profile");
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="profile-card">
            <img src={userDetails.profilePicture || 'https://via.placeholder.com/100'} alt="Profile" className="profile-card__image" />
            <h2 className="profile-card__name">{userDetails.name}</h2>
            <p className="profile-card__email">{userDetails.email}</p>
            <p className="profile-card__phone">{userDetails.phone}</p>
        </div>
    );
};

export default ProfileCard;
