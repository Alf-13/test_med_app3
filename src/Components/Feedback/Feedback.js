import React, { useState } from 'react';
import './Feedback.css';

const Feedback = ({ doctorId, onSubmit }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(doctorId, { name, review, rating });
        setName('');
        setReview('');
        setRating(0);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="feedback-form">
            <h2>Give Your Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review:</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Rating:</label>
                    <div className="star-rating">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`star ${rating > index ? 'filled' : ''}`}
                                onClick={() => handleRatingChange(index + 1)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;
