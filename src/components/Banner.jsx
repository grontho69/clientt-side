import React from "react";
const Banner = () => {
  return (
    <div >
<div
  className="hero min-h-7.5mr-auto "
  style={{
    backgroundImage:
      "url(https://westwildwood.org/wp-content/uploads/2022/03/communitycleanup.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};
export default Banner;