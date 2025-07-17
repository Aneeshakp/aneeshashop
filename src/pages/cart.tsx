'use client';

export default function CartPage() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt="Empty Cart"
            className="img-fluid"
          />
        </div>

        <div className="col-md-8 text-center text-md-start">
          <h1 className="fw-bold mb-3">Your Fresh to Home Cart is empty</h1>
          <p className="lead mb-4">Shop today’s deals</p>
          <button
            className="btn"
            style={{ backgroundColor: '#f7ca00', color: '#111', fontWeight: 'bold' }}
          >
            Sign in to your account
          </button>
        </div>
      </div>
    </div>
  );
}
