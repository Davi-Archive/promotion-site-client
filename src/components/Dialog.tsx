import React from 'react';


export default function Dialog({ onDialog, mensagem }:(any)) {
  const logo = require("../assets/close.svg") as string;  //require typescript
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
        onClick={() => onDialog(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
          bg-amber-500
          border-amber-500
          flex
          flex-col
          absolute
          items-center
          justify-center
          p-1
          border-4
          rounded-md
          `}
          style={{
            top: "50%",
            left: "50%",
            height: "16%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" , alignItems: "center" }}>
          <h2 style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "16px",
            fontFamily: "'Lato-Bold' ,Arial, Helvetica, sans-serif",
            marginLeft: "25px",
            }}>{mensagem}</h2>
          <button
              onClick={() => onDialog(false)}
              className={`
             text-white
              p-2
              mb-18
              ml-10
              cursor-pointer
              border-3
              border-inherit
              rounded-lg
              `}
              style={{
                marginTop: "-40%",
                minHeight: "20px",
              }}
            >
              <img src={logo} width='20px' alt='X'></img>

            </button>
          </div>
        </div>
      </div>
    );
  }