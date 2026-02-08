const Footer = () => {
  // Easy to edit: Update this date whenever you update the portfolio
  const lastUpdated = "Jan 2026";

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Saicharan Chetpelly. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Java Full Stack Developer | B.Tech Information Technology
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
