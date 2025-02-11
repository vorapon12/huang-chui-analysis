"use client";
import { TextField } from "@mui/material";
import { MainLayouts } from "../MainLayouts";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUnitStore } from "@/common/unitStore";
import { useState } from "react";
import { unitItems } from "@/mock";

type FormData = {
  birth_date: string;
  phone_number: string;
  name: string;
};

const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setDataRes, selectedUnit, floor } = useUnitStore();

  const saveToLocalStorage = (key: string, value: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  const [data, setData] = useState<FormData>({
    birth_date: "",
    phone_number: "",
    name: "",
  });

  const sendToApi = (data: FormData, selectedUnit: string, floor: number) => {
    const rr = selectedUnit.substring(1, 4);
    const unitDetail = unitItems.find((item) => item.text === rr);

    const newInput = {
      house_number: unitDetail?.house_number,
      direction: unitDetail?.direction,
      zone: unitDetail?.zone,
      floor,
      birth_date: new Date(
        new Date(data.birth_date).setFullYear(
          new Date(data.birth_date).getFullYear() + 543
        )
      ),
      phone_number: data.phone_number,
    };

    console.log("newInput: ", newInput);

    axios
      .post(
        "https://readers-ordinance-once-enters.trycloudflare.com/analyze",
        newInput
      )
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
          width: "calc(100vw - 400px)",
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
            variant="outlined"
            style={{ width: "100%" }}
            onChange={(e) => {
              if (e.target.value) setData({ ...data, name: e.target.value });
            }}
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
            variant="outlined"
            style={{ width: "100%" }}
            onChange={(e) => {
              if (e.target.value)
                setData({ ...data, phone_number: e.target.value });
            }}
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
            onChange={(e) => {
              if (e.target.value) {
                const date = new Date(e.target.value);
                const formattedDate = date.toISOString().split("T")[0];
                setData({ ...data, birth_date: formattedDate });
              }
            }}
          />
        </div>

        <div
          style={{
            width: 241,
            height: 48,
            paddingLeft: 16,
            paddingRight: 16,
            background: selectedUnit ? "#4100F4" : "gray",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "flex",
            cursor: selectedUnit ? "pointer" : "not-allowed",
          }}
          onClick={() => {
            if (!selectedUnit) return;
            console.log("clicked");
            setLoading(true);
            sendToApi(data, selectedUnit, floor);
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
                fontFamily: "Noto Sans Thai",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              ยืนยัน
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Form;
