import React from "react";

const Home = (props) => {
  console.log("home", props);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "26px",
          borderRadius: "8px",
          padding: "6px"
        }}
      >
        <div>
          <img
            src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Free-Download.png"
            alt="img"
            style={{ width: "200px" }}
          />
        </div>
        <div>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>Price:</span>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}> 54000/-</span>
        </div>
        <div>
          <button
            style={{
              padding: "8px 12px",
              color: "#fff",
              backgroundColor: "yellowgreen",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
            onClick={() => {
              props.addToCartHandler({ price: 20000, name: "iphone" });
            }}
          >
            Add to Cart
          </button>

          <button
            style={{
              padding: "8px 12px",
              color: "#fff",
              backgroundColor: "red",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft: "4px"
            }}
            onClick={() => {
              props.removeToCartHandler({ price: 20000, name: "iphone" });
            }}
          >
            Remove Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
