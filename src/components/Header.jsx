import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
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
        <a className="btn btn-primary ml-2">Button</a>
      </div>
    </div>
  );
}
