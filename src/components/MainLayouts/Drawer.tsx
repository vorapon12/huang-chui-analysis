import React, { useState } from "react";
import { Drawer, List, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function LeftDrawer() {
  const [open, setOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const menuItems = Array.from({ length: 4 }, (_, index) => ({
    text: `10${index + 1}`,
  }));

  const floorItems = Array.from({ length: 3 }, (_, index) => ({
    text: `${index + 1}`,
    units: menuItems,
  }));

  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {floorItems.map((item) => (
            <div className="p-4" key={item.text}>
              <div className="text-black/90 text-base font-normal font-['Inter'] leading-normal">
                {`ชั้น ${item.text}`}
              </div>
              <div className="flex flex-col gap-2">
                {item.units.map((p) => (
                  <div
                    key={p.text}
                    className="h-12 px-4 rounded-lg border border-[#d9d9d9] justify-center items-center gap-2 inline-flex"
                    style={{
                      backgroundColor:
                        selectedUnit === p.text ? "#ECE6FE" : "white",
                    }}
                    onClick={() => setSelectedUnit(p.text)}
                  >
                    <div className="justify-center items-center gap-2 flex">
                      <div className="text-black/90 text-base font-normal font-['Inter'] leading-normal">
                        {`ห้อง ${p.text}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="p-4 bg-[#ECE6FE] m-4 border">
            <div>คุณดาริน</div>
            <div className="flex flex-col gap-2">
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
