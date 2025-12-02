import React from "react";
const Footer = () => {
  return (
 <footer className="bg-neutral text-neutral-content px-6 md:px-16 py-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
{/* Left Section */}
<div>
<div className="flex items-center gap-2 mb-3">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
className="w-6 h-6 text-success"
>
<path d="M21 2 3 22" />
<path d="M21 16V2H7" />
<path d="M3 8v14h14" />
</svg>
<span className="text-xl font-semibold">Clean Community</span>
</div>
<p className="text-sm leading-relaxed opacity-90">
A platform for citizens to report local environmental and cleanliness issues,
fostering a cleaner, safer, and more accountable neighborhood.
</p>
</div>


{/* Useful Links */}
<div>
<h3 className="text-lg font-semibold mb-3">Useful Links</h3>
<ul className="space-y-2 text-sm opacity-90">
<li><a className="link link-hover">Home</a></li>
<li><a className="link link-hover">All Issues</a></li>
<li><a className="link link-hover">Report an Issue</a></li>
<li><a className="link link-hover">Join Us</a></li>
</ul>
</div>


{/* Follow Us */}
<div>
<h3 className="text-lg font-semibold mb-3">Follow Us</h3>
<div className="flex items-center gap-4 text-xl">
<a className="hover:text-success transition-all">
<i className="fa-brands fa-facebook"></i>
</a>
<a className="hover:text-success transition-all">
<i className="fa-brands fa-twitter"></i>
</a>
<a className="hover:text-success transition-all">
<i className="fa-brands fa-instagram"></i>
</a>
<a className="hover:text-success transition-all">
<i className="fa-brands fa-linkedin"></i>
</a>
</div>
</div>
</div>


{/* Bottom Text */}
<div className="mt-10 text-center text-sm opacity-70">
© {new Date().getFullYear()} Clean Community. All rights reserved.
</div>
</footer>
  );
};
export default Footer;