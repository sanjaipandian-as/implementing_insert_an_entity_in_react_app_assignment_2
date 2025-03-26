


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddMovie = ({ setMovies }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new movie object
    const newMovie = {
      id: Date.now(), // Unique ID
      ...formData,
    };

    // Add new movie to the list
    setMovies((prevMovies) => [...prevMovies, newMovie]);

    // Debugging: Log to see if the movie was added
    console.log("New Movie Added:", newMovie);

    alert('Movie added successfully!');
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Director:</label>
        <input type="text" name="director" value={formData.director} onChange={handleChange} required />

        <label>Genre:</label>
        <select name="genre" value={formData.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Horror">Horror</option>
        </select>

        <label>Release Year:</label>
        <input type="number" name="releaseYear" value={formData.releaseYear} onChange={handleChange} required />

        <label>Synopsis:</label>
        <textarea name="synopsis" value={formData.synopsis} onChange={handleChange} required />

        <label>Poster Image URL:</label>
        <input type="url" name="posterUrl" value={formData.posterUrl} onChange={handleChange} required />

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;