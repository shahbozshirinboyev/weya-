import React from "react";

function Login() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="login" className="modal glass">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Login;
