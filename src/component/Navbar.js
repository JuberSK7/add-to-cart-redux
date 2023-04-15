import React from "raect";

const Navbar = (props) => {
  return (
    <>
      <div>
        <img
          style={{
            width: "80px",
            position: "absolute",
            top: "0px",
            right: "0px"
          }}
          src="data:image/png;base64,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"
          alt="img"
        />
        <span
          style={{
            position: "absolute",
            right: "0",
            backgroundColor: "red",
            borderRadius: "10px",
            padding: "6px 12px",
            color: "#fff",
            fontSize: "18px"
          }}
        >
          {props.cartData.length}
        </span>
      </div>
    </>
  );
};

export default Navbar;
