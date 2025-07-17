'use client';

export default function ProductGridSkeleton() {
  return (
    <div className="row g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div className="col" key={idx}>
          <div className="card h-100 shadow-sm p-3 bg-light placeholder-glow">
            <div className="bg-secondary mb-3 rounded" style={{ height: '200px' }} />
            <div className="placeholder col-8 mb-2"></div>
            <div className="placeholder col-6 mb-2"></div>
            <div className="placeholder col-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
