"use client";
import { TextField } from "@mui/material";
import { MainLayouts } from "../MainLayouts";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUnitStore } from "@/common/unitStore";
import { useState } from "react";
const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setDataRes } = useUnitStore();

  const saveToLocalStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const sendToApi = () => {
    axios
      .post("https://readers-ordinance-once-enters.trycloudflare.com/analyze", {
        house_number: "88/42",
        direction: "ทิศเหนือ",
        zone: "citi view",
        floor: 15,
        birth_date: "2534-05-15",
        phone_number: "0800043226",
      })
      .then(function (response) {
        console.log(response);
        setLoading(false);
        setDataRes(response.data);

        saveToLocalStorage("myData", response.data);

        router.push("/unit-detail");
      })
      .catch(function (error) {
        console.log(error);
      });

    router.push("/unit-detail");
  };
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
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("clicked");
            setLoading(true);
            sendToApi();
            // router.push("/form");
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
            >
              {loading ? "loading" : "ยืนยัน"}
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Form;
