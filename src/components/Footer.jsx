import React from 'react';

const Footer = () => {
  return (
    <footer id="privacy" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} AuralMind. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-1">We do not sell your data. Sessions are processed securely and anonymized for improvement.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
