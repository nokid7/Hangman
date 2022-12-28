const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: 50,
      right: -30,
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: 120,
      right: 0,
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: 150,
      right: "-70px",
      rotate: "-40deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: 150,
      right: 10,
      rotate: "40deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: 210,
      right: "-60px",
      rotate: "40deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: 210,
      right: 0,
      rotate: "-40deg",
      transformOrigin: "right bottom",
    }}
  />
);

export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          position: "absolute",
          background: "black",
          height: "50px",
          width: "10px",
          top: 0,
          right: 0,
          //   marginLeft: "320px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "10px",
          width: "200px",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "400px",
          width: "10px",
          marginLeft: "120px",
        }}
      />
      <div style={{ background: "black", height: "10px", width: "250px" }} />
    </div>
  );
}
