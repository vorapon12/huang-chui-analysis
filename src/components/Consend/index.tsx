import React from "react";
import { MainLayouts } from "../MainLayouts";
import { Checkbox } from "@mui/material";

const Consend = () => {
  return (
    <MainLayouts>
      <div
        style={{
          width: 712,
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
            alignSelf: "stretch",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Noto Sans Thai",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            การให้ความยินยอมส่วนบุคคล
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 664,
              alignSelf: "stretch",
              padding: 16,
              background: "#ECECEC",
              borderRadius: 8,
              overflow: "hidden",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div style={{ width: 615 }}>sadasd</div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              height: 25,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <Checkbox
              sx={{
                color: "#D9D9D9",
                "&.Mui-checked": {
                  color: "#1976d2",
                },
              }}
            />
            <div
              style={{
                color: "rgba(0, 0, 0, 0.85)",
                fontSize: 18,
                fontFamily: "Noto Sans Thai UI",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              ยินยอม
            </div>
          </div>
          <div
            style={{
              width: 241,
              height: 48,
              paddingLeft: 16,
              paddingRight: 16,
              background: "#4100F4",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 44,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Noto Sans Thai UI",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                ยืนยัน
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Consend;
