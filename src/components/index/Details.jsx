import React from "react";

export default function Details() {
  return (
    <section id="details" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About Euphoria Theme</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Description */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-400 mb-6">
              Euphoria Theme is a modern, customizable theme designed for the Pterodactyl panel. It enhances your server management experience with a sleek and intuitive interface.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              Built with the latest technologies, Euphoria Theme is fully responsive and optimized for performance. Whether you're managing game servers or web hosting, Euphoria Theme provides a seamless experience.
            </p>
            <a
              href="https://euphoria-development.gitbook.io/euphoria-development"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Documentation
            </a>
          </div>

          {/* Right Column: Integrated Addons Accordion */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <div className="space-y-4">
              <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="addons" defaultChecked />
                <div className="collapse-title font-semibold">
                  Integrated Addons
                </div>
                <div className="collapse-content text-sm space-y-2">
                <ul className="list-disc list-inside">
                  <li><strong>Laravel Logs</strong>: View and manage Laravel logs directly from your panel for easier debugging and monitoring.</li>
                  <li><strong>Player Listing</strong>: Shows player count and, if supported, players connected.</li>
                  <li><strong>Translations</strong>: Multi-language support for Pterodactyl.</li>
                  <li><strong>Server Backgrounds</strong>: Enhance the visual appeal of your server list.</li>
                  <li><strong>MC Logs</strong>: View and manage Minecraft server logs directly from your panel.</li>
                  <li><strong>Console Logs</strong>: Adds a copy-to-clipboard button to the console.</li>
                  <li><strong>Resource Alerts</strong>: Receive notifications for server resource usage.</li>
                  <li><strong>Resource Manager</strong>: Manage and upload images to your panel.</li>
                </ul>
              </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="addons" />
                <div className="collapse-title font-semibold">
                  Customisation
                </div>
                <div className="collapse-content text-sm">
                <ul className="list-disc list-inside">
                  <li><strong>Favicon</strong>: Choose your own Favicon for your Panel.</li>
                  <li><strong>Logo</strong>: Add your own Brand to the Panel.</li>
                  <li><strong>Primary Color</strong>: Stick to your Brand Color and use it within your Panel.</li>
                  <li><strong>Backgrounds</strong>: Set Background Images for the Login and Client Area.</li>
                  <li><strong>Custom Buttons</strong>: Add your Discord, Status Page and Store to your Panel.</li>
                  <li><strong>Page Loaders</strong>: Choose an image and logo for your Loading Screens.</li>
                  <li><strong>Server Sorting</strong>: Allow your users to sort their Servers how they want.</li>
                  <li><strong>Cookie Banner</strong>: Toggleable Cookie Consent banner.</li>
                  <li><strong>Profile Pictures</strong>: Allow your users to set their own Profile Pictures.</li>
                  <li><strong>Seasonal Effects</strong>: Multiple season related background animations.</li>
                </ul>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="addons" />
                <div className="collapse-title font-semibold">
                  Euphoria Theme
                </div>
                <div className="collapse-content text-sm">
                  A modern, customizable UI theme for the Pterodactyl panel.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="addons" />
                <div className="collapse-title font-semibold">
                  Quick Setup & Support
                </div>
                <div className="collapse-content text-sm">
                  Installs with one simple command and our Support team is quick to assist you!.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}