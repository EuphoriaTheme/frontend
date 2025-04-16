import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState(null, '', window.location.pathname);
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios
      .get('https://api.euphoriatheme.uk/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data); // expects { username, avatar, id }
      })
      .catch((err) => {
        console.error('Failed to fetch user data:', err);
        localStorage.removeItem('token'); // clear bad token
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  // Construct the avatar URL
  const avatarUrl = user ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png` : null;

  return (
    <div className="navbar bg-gray-900 shadow-lg">
      <div className="navbar-start">
        {/* mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li>
              <a>Euphoria</a>
              <ul className="p-2">
                <li><a>Products</a></li>
                <li><a>Donators</a></li>
                <li><a>Contributors</a></li>
              </ul>
            </li>
            <li><a>Placeholder temp</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Euphoria</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li>
            <details>
              <summary>Euphoria</summary>
              <ul className="p-2">
                <li><a href="#products">Products</a></li>
                <li><a href="#donators">Donators</a></li>
                <li><a href="#contributors">Contributors</a></li>
              </ul>
            </details>
          </li>
          <li><a>Placeholder temp</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-700 mx-2"
        >
          <FontAwesomeIcon icon={faGithub} size="md" />
        </a>
        <a
          href="https://discord.gg/your-discord-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:transparency mx-2"
        >
          <FontAwesomeIcon icon={faDiscord} size="md" />
        </a>

        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost flex items-center gap-2">
              {/* Display user's avatar */}
              <img
                src={avatarUrl} // Use the constructed avatar URL here
                alt="Avatar"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-white">{user.username}</span>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/dashboard">Dashboard</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <a
            href="https://api.euphoriatheme.uk/auth/discord"
            className="btn btn-primary ml-2"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
}
