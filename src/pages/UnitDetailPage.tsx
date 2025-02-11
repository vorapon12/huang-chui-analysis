"use client";
// import { useUnitStore } from "@/common/unitStore";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

interface Package {
  name: string;
  price: string;
  increase: number;
  total: number;
  features: string[];
  color: string;
  scores: {
    Luck: number;
    Prestige: number;
    Power: number;
    Health: number;
    Wealth: number;
  };
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: "#FFF",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",

    borderRadius: 10,
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  packages: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  packageCard: {
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    width: "150px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s",
  },
  details: {
    width: "100%",
    maxWidth: "500px",
    marginBottom: 20,
  },
  detailCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  list: {
    marginTop: "10px",
    padding: "0",
    listStyleType: "none",
  },
  listItem: {
    fontSize: "14px",
    marginBottom: "5px",
  },
};

const data = {
  scores: {
    Luck: 85,
    Prestige: 80,
    Power: 75,
    Health: 90,
    Wealth: 88,
  },
};

const packages: Package[] = [
  {
    name: "แพ็คเกจพื้นฐาน",
    price: "฿ xxxxxxxx",
    increase: 22,
    total: 65,
    features: [
      "กระจกสะท้อนพลังลบ",
      "ผ้าม่านกันแสง",
      "พรมนำโชค",
      "ต้นไม้มงคลในห้อง",
      "โมบายกระดิ่งลม",
    ],
    scores: {
      Luck: 70,
      Prestige: 65,
      Power: 60,
      Health: 75,
      Wealth: 68,
    },
    color: "#4100F4",
  },
  {
    name: "แพ็คเกจกลาง",
    price: "฿ xxxxxxxx",
    increase: 30,
    total: 73,
    scores: {
      Luck: 78,
      Prestige: 72,
      Power: 68,
      Health: 80,
      Wealth: 74,
    },
    features: [
      "กระจกสะท้อนพลังลบ",
      "ผ้าม่านกันแสง",
      "พรมนำโชค",
      "ต้นไม้มงคลในห้อง",
      "โมบายกระดิ่งลม",
      "น้ำพุขนาดเล็ก",
      "รูปภาพมงคลเสริมพลังงาน",
      "ชั้นวางตู้",
      "ผ้าปูเตียงเสริมธาตุ",
    ],
    color: "#0DA47B",
  },
  {
    name: "แพ็คเกจพรีเมียม",
    price: "฿ xxxxxxxx",
    increase: 57,
    total: 100,
    features: [
      "วัสดุมงคลแก้วกาซีนแสง",
      "เฟอร์นิเจอร์มงคลปรับพลังงาน",
      "ระบบแสงไฟจตุรัสปรับพลังงาน",
      "ต้นไม้มงคลในห้อง",
      "วอลเปเปอร์หรือสีผนังเสริมธาตุ",
      "น้ำพุขนาดเล็ก",
      "รูปภาพมงคลเสริมพลังงาน",
      "ชั้นวางตู้",
      "ผ้าปูเตียงเสริมธาตุ",
    ],
    scores: {
      Luck: 90,
      Prestige: 88,
      Power: 85,
      Health: 95,
      Wealth: 92,
    },
    color: "#FF7439",
  },
];

const UnitComponent = () => {
  // const { unit, setUnit } = useUnitStore();
  const [dataRes, setDataRes] = useState<any>(null);
  console.log("dataRes", dataRes);

  const getFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
  };

  useEffect(() => {
    const storedData = getFromLocalStorage("myData");
    if (storedData) {
      setDataRes(storedData);
    }
  }, []);

  console.log("dataRes", dataRes);

  useEffect(() => {
    if (dataRes) {
      const chartData = {
        labels: ["โชคลาภ", "บารมี", "อำนาจ", "สุขภาพ", "คลามร่ำรวย"],
        datasets: [
          {
            label: "ค่าพลัง",
            data: [
              dataRes?.scores.Luck,
              dataRes?.scores.Power,
              dataRes?.scores.Prestige,
              dataRes?.scores.Health,
              dataRes?.scores.Wealth,
            ],
            backgroundColor: "#AA0000",
            borderColor: "#AA0000",
            borderWidth: 2,
          },
          ...packages.map((pkg) => ({
            label: pkg.name,
            data: [
              pkg.scores.Luck,
              pkg.scores.Prestige,
              pkg.scores.Power,
              pkg.scores.Health,
              pkg.scores.Wealth,
            ],
            backgroundColor: pkg.color,
            borderColor: pkg.color,
          })),
        ],
      };

      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "radar",
        data: chartData,
      });
    }
  }, [dataRes]);

  const roomData = {
    room: "A1102",
    type: "1 Bedroom",
    building: "A",
    floor: 5,
    size: "32 ตร.ม.",
    direction: "เหนือ",
    zone: "Garden",
    price: "3,000,000 บาท",
    highlights: [
      { title: "Title 1", points: ["ข้อดีที่ 1", "ข้อดีที่ 2", "ข้อดีที่ 3"] },
      { title: "Title 2", points: ["จุดเด่นที่ 1", "จุดเด่นที่ 2"] },
    ],
  };

  const [selected, setSelected] = useState(0);

  return (
    <div
      className="min-h-screen justify-center py-8  w-full items-center flex"
      style={{
        margin: 20,
      }}
    >
      <div>
        <div className="bg-white rounded-lg flex justify-center relative">
          <Image
            src="/plans/aaa.jpg"
            alt="Room Plan"
            width={700}
            height={500}
            className="rounded-md"
          />

          <div className="absolute bottom-4 right-4 text-blue-700 font-bold text-xl p-2 rounded-lg">
            พลังฮวงจุ้ยของห้องนี้ <br /> <span className="text-3xl">43%</span>
          </div>
        </div>

        <div
          className="mt-6 p-4 rounded-lg shadow"
          style={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            marginBottom: 20,
            padding: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2 className="text-lg font-bold">รายละเอียดห้อง</h2>
            <div data-svg-wrapper>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#EDEDED" />
                <path
                  d="M15.4665 19.5312C15.7603 19.825 16.2353 19.825 16.5259 19.5312L22.529 13.5312C22.8228 13.2375 22.8228 12.7625 22.529 12.4719C22.2353 12.1812 21.7603 12.1781 21.4696 12.4719L16.0009 17.9406L10.529 12.4687C10.2353 12.175 9.76026 12.175 9.46963 12.4687C9.17901 12.7625 9.17588 13.2375 9.46963 13.5281L15.4665 19.5312Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between border-b-2">
                <span className="font-semibold">ห้อง:</span>
                <span>{roomData.room}</span>
              </div>

              <div className="flex justify-between border-b-2">
                <span className="font-semibold">ขนาด:</span>
                <span>{roomData.size}</span>
              </div>

              <div className="flex justify-between border-b-2">
                <span className="font-semibold">แบบห้อง:</span>
                <span>{roomData.type}</span>
              </div>

              <div className="flex justify-between border-b-2">
                <span className="font-semibold">ทิศ:</span>
                <span>{roomData.direction}</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between border-b-2">
                <span className="font-semibold">ตึก:</span>
                <span>{roomData.building}</span>
              </div>

              <div className="flex justify-between border-b-2">
                <span className="font-semibold">โซน:</span>
                <span>{roomData.zone}</span>
              </div>

              <div className="flex justify-between border-b-2">
                <span className="font-semibold">ชั้น:</span>
                <span>{roomData.floor}</span>
              </div>

              <div className="flex justify-between border-b-2">
                <span className="font-semibold">ราคา:</span>
                <span>{roomData.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-6 bg-gray-100 p-4 rounded-lg shadow"
          style={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            marginBottom: 20,
            padding: 24,
          }}
        >
          <h2 className="text-lg font-bold">ผลการวิเคราะห์</h2>
          {/* {roomData.highlights.map((highlight, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold">{highlight.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {highlight.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))} */}

          <h2>ข้อดึ</h2>
          {dataRes?.good_aspects.split("\n").map((d) => (
            <div key={d}>{d}</div>
          ))}
          <h2>ข้อเสีย</h2>
          {dataRes?.bad_aspects.split("\n").map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            marginBottom: 20,
            padding: 24,
          }}
        >
          <h2 className="text-lg font-bold">วิธีแก้เบื้องต้น</h2>
          {dataRes?.recommendations.split("\n").map((d: any) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div style={styles.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2 className="text-lg font-bold mb-5">คำแนะนำ</h2>
            <div data-svg-wrapper>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#EDEDED" />
                <path
                  d="M15.4665 19.5312C15.7603 19.825 16.2353 19.825 16.5259 19.5312L22.529 13.5312C22.8228 13.2375 22.8228 12.7625 22.529 12.4719C22.2353 12.1812 21.7603 12.1781 21.4696 12.4719L16.0009 17.9406L10.529 12.4687C10.2353 12.175 9.76026 12.175 9.46963 12.4687C9.17901 12.7625 9.17588 13.2375 9.46963 13.5281L15.4665 19.5312Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div style={styles.packages}>
            {packages.map((pkg, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                style={{
                  ...styles.packageCard,
                  backgroundColor: selected === index ? pkg.color : "#f3f4f6",
                  color: selected === index ? "#ffffff" : "#000000",
                }}
              >
                <h3>{pkg.name}</h3>
                <p>{pkg.price}</p>
              </div>
            ))}
          </div>

          <div style={styles.details}>
            {packages.map((pkg, index) =>
              selected === index ? (
                <div key={index} style={styles.detailCard}>
                  <h3 style={{ color: pkg.color }}>พลังฮวงจุ้ยเพิ่มขึ้น</h3>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    ⬆ {pkg.increase}%{" "}
                    <span style={{ color: "#6b7280" }}>
                      รวมเป็น {pkg.total}%
                    </span>
                  </p>
                  <ul style={styles.list}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} style={styles.listItem}>
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>

          <div className="flex mx-auto my-auto">
            <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitComponent;
