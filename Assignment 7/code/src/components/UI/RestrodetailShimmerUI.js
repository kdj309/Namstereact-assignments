import React from "react";

export default function RestrodetailShimmerUI() {
  return (
    <div className="shimmercontainer">
      <div className="img skeleton"></div>
      <div className="nestedcontainer">
        <div className="skeleton">
          <div className="img skeleton"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
        <div className="skeleton">
          <div className="img skeleton"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  );
}
