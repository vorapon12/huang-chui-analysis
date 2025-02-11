import React, { useState } from "react";
import { Drawer, List, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useUnitStore } from "@/common/unitStore";
import { floorItems } from "@/mock";

function LeftDrawer() {
  const [open, setOpen] = useState(false);
  const { selectedUnit, setSelectedUnit } = useUnitStore();

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {floorItems.map((item) => (
            <div className="p-4" key={item.text}>
              <div
                style={{ fontWeight: 600 }}
                className="text-black/90 text-base font-normal leading-normal font-['Noto Sans Thai']"
              >
                {`ชั้น ${item.text}`}
              </div>
              <div className="flex flex-col gap-2">
                {item.units.map((p) => (
                  <div
                    key={`${item.text}${p.text}`}
                    className="h-12 px-4 rounded-lg border border-[#d9d9d9] justify-center items-center gap-2 inline-flex"
                    style={{
                      backgroundColor:
                        selectedUnit === `${item.text}${p.text}`
                          ? "#4100F4"
                          : "white",
                      color:
                        selectedUnit === `${item.text}${p.text}`
                          ? "white"
                          : "black",
                    }}
                    onClick={() =>
                      setSelectedUnit(
                        `${item.text}${p.text}`,
                        Number(item.text)
                      )
                    }
                  >
                    <div className="justify-center items-center gap-2 flex">
                      <div className="text-base font-normal font-['Noto Sans Thai'] leading-normal">
                        {`ห้อง ${p.text}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div
            className="bg-[#ECE6FE] m-4 border"
            style={{
              borderRadius: 10,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div className="flex items-center gap-2">
              <Image src="/user.svg" alt="user" width={14} height={17} />
              <div>คุณดาริน</div>
            </div>
            <div className="flex flex-col gap-2" style={{ cursor: "pointer" }}>
              <div
                className="h-12 px-4 bg-white rounded-lg border border-[#d9d9d9] justify-center items-center gap-2 inline-flex"
                // onClick={() => setSelectedUnit(p.text)}
              >
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-black/90 text-base font-normal font-['Inter'] leading-normal">
                    จบการดูฮวงจุ้ย
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </Drawer>
    </>
  );
}

export default LeftDrawer;
