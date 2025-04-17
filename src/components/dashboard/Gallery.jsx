import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GalleryDashboard() {
  const [gallery, setGallery] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('No file selected');
  const [showGallery, setShowGallery] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  const fetchGallery = async () => {
    try {
      const token = localStorage.getItem('token'); // or from cookies/context/etc.
      const response = await axios.get('https://api.euphoriatheme.uk/gallery', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // only needed if you're using cookies for auth
      });
      console.log('Gallery response:', response.data);
    } catch (error) {
      console.error('Failed to fetch gallery:', error);
    }
  };

  useEffect(() => {
    if (token) fetchGallery();
  }, [token]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileName(e.target.files[0]?.name || 'No file selected');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      setLoading(true);
      await axios.post('https://api.euphoriatheme.uk/gallery/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setSelectedFile(null);
      setFileName('No file selected');
      fetchGallery();
    } catch (err) {
      console.error('Failed to upload image:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (imagePath) => {
    try {
      await axios.delete('https://api.euphoriatheme.uk/gallery/delete', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { imagePath },
      });
      fetchGallery();
    } catch (err) {
      console.error('Failed to delete image:', err);
    }
  };

  return (
    <div className="mx-auto max-w-2xl py-32 text-white">
      <h1 className="text-5xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-4 text-lg">Manage your Gallery.</p>

      {/* Upload */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Upload Gallery</h2>
        <form className="mt-4" onSubmit={handleUpload}>
          <div className="relative">
            <input type="file" id="image" onChange={handleFileChange} className="hidden" />
            <label htmlFor="image" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer inline-block">
              Choose File
            </label>
            <span className="ml-2 text-gray-300">{fileName}</span>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>

      {/* Gallery */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Your Gallery</h2>
        <p className="text-gray-400 text-sm">Images you upload will be displayed here.</p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setShowGallery(!showGallery)}
        >
          {showGallery ? 'Hide' : 'Show'}
        </button>
        {showGallery && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.length > 0 ? (
              gallery.map((img) => (
                <div key={img} className="relative group">
                  <img
                    src={`https://api.euphoriatheme.uk/uploads${img}`}
                    alt="User Upload"
                    className="rounded-lg w-full object-cover"
                  />
                  <button
                    onClick={() => handleDelete(img)}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1 px-2 rounded text-sm opacity-90 group-hover:opacity-100"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No images found.</p>
            )}
          </div>
        )}
      </div>

      {/* Download API */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Download Game API</h2>
        <p className="text-gray-400 text-sm">Click below to download the latest version.</p>
        <a
          href="https://api.euphoriatheme.uk/api/download/game-api"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
        >
          Download Game API
        </a>
      </div>

      {/* Support Section */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Support Development</h2>
        <p className="text-gray-400 mt-2">
          Our Products are Free. Your donations help continue development and support.
        </p>
        <div className="mt-4 flex justify-center gap-6 flex-wrap">
          <a href="https://paypal.me/repgraphics" target="_blank" rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <i className="fa-brands fa-paypal"></i> Donate
          </a>
          <a href="https://github.com/sponsors/RepGraphics" target="_blank" rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <i className="fa-brands fa-github"></i> Donate
          </a>
          <a href="https://patreon.com/EuphoriaDevelopment" target="_blank" rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <i className="fa-brands fa-patreon"></i> Donate
          </a>
        </div>
      </div>

      {/* Join Us */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Join Our Team</h2>
        <p className="text-gray-400 mt-2">
          Interested in joining as a dev or support? Click to apply!
        </p>
        <button
          onClick={() => document.getElementById('joinModal')?.classList.remove('hidden')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Join Us
        </button>
      </div>
    </div>
  );
}
