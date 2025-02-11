import { TextField } from "@mui/material";
import { MainLayouts } from "../MainLayouts";

const Form = () => {
  return (
    <MainLayouts>
      <div
        style={{
          width: 712,
          height: 438,
          padding: 24,
          background: "white",
          boxShadow: "0px 7px 16px rgba(194, 194, 194, 0.15)",
          borderRadius: 10,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontFamily: "Noto Sans Thai",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          เพื่อให้การวิเคราะห์ฮวงจุ้ยของคุณแม่นยำที่สุด <br />
          เราจำเป็นต้องใช้ข้อมูลพื้นฐานดังต่อไปนี้
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 86,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "black",
              fontSize: 20,
              fontFamily: "Noto Sans Thai",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            ชื่อ-นามสกุล
          </div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 86,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "black",
              fontSize: 20,
              fontFamily: "Noto Sans Thai",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            เบอร์โทรศัพท์
          </div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 86,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "black",
              fontSize: 20,
              fontFamily: "Noto Sans Thai",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            วัน เดือน ปี เกิด
          </div>
          <TextField
            id="date"
            type="date"
            variant="outlined"
            style={{ width: "100%" }}
            // defaultValue={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
    </MainLayouts>
  );
};

export default Form;
