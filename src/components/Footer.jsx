import React from "react";

export default function Footer() {
  return (
<footer className="bg-gray-900 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-12">
      <div>
        <h2 className="text-base font-semibold text-indigo-600">About Euphoria</h2>
        <p className="mt-2 text-lg text-gray-400">Euphoria is a customizable theme built for the Pterodactyl panel, utilizing the Blueprint Framework to enhance your server management experience.</p>
        <p className="mt-6 text-lg text-gray-400">Join us on Discord to connect with our community and stay updated on new features and releases!</p>
      </div>
      <div>
        <h2 className="text-base font-semibold text-indigo-600">Quick Links</h2>
        <ul className="mt-6 space-y-4">
          <li>
            <a href="https://status.euphoriadevelopment.uk" target="_blank" rel="noreferrer" className="text-base text-gray-300 hover:text-indigo-500">Service Status</a>
          </li>
          <li>
            <a href="https://discord.gg/Cus2zP4pPH" target="_blank" rel="noreferrer" className="text-base text-gray-300 hover:text-indigo-500">Support</a>
          </li>
          <li>
            <a href="https://www.sourcexchange.net/products/euphoriatheme" target="_blank" rel="noreferrer" className="text-base text-gray-300 hover:text-indigo-500">SourceXchange</a>
          </li>
          <li>
            <a href="https://builtbybit.com/resources/euphoria.52856/" target="_blank" rel="noreferrer" className="text-base text-gray-300 hover:text-indigo-500">BuiltByBit</a>
          </li>
          <li>
            <button id="termsButton" className="text-base text-gray-300 hover:text-indigo-500 cursor-pointer">Terms & Conditions</button>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-16 border-t border-gray-700 pt-6">
      <p className="text-center text-base text-gray-400">© {new Date().getFullYear()} Euphoria. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.youtube.com/@RepGraphics" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-500"><i className="fa-brands fa-youtube"></i></a>
        <a href="https://discord.gg/Cus2zP4pPH" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-500"><i className="fa-brands fa-discord"></i></a>
        <a href="https://github.com/RepGraphics" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-500"><i className="fa-brands fa-github"></i></a>
      </div>
    </div>
  </div>
</footer>

  );
}