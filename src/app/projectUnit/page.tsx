"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ProjectType {
  projectId: string;
  projectName: string;
}

interface UnitType {
  unitId: string;
  unitName: string;
  buildingId: string;
}

interface BuildingType {
  buildingId: string;
  buildingName: string;
  projectId: string;
}

const ProjectUnit = () => {
  const router = useRouter();
  const [projects] = useState<ProjectType[]>([
    { projectId: "1", projectName: "The Origin Ladprao 15" },
    { projectId: "2", projectName: "The Origin Ratchada-Ladprao" },
  ]);

  const [units] = useState<UnitType[]>([
    { unitId: "101", unitName: "101", buildingId: "B1" },
    { unitId: "102", unitName: "102", buildingId: "B1" },
    { unitId: "201", unitName: "103", buildingId: "B3" },
    { unitId: "202", unitName: "104", buildingId: "B3" },
  ]);

  const [buildings] = useState<BuildingType[]>([
    { buildingId: "B1", buildingName: "Building 1", projectId: "1" },
    { buildingId: "B2", buildingName: "Building 2", projectId: "1" },
    { buildingId: "B3", buildingName: "Building 3", projectId: "2" },
    { buildingId: "B4", buildingName: "Building 4", projectId: "2" },
  ]);

  const [selectedProject, setSelectedProject] = useState<string | undefined>(
    undefined
  );
  const [selectedBuilding, setSelectedBuilding] = useState<string | undefined>(
    undefined
  );
  const [selectedUnit, setSelectedUnit] = useState<string | undefined>(
    undefined
  );

  const filteredBuildings = buildings.filter(
    (building) => building.projectId === selectedProject
  );

  const filteredUnits = units.filter(
    (unit) => unit.buildingId === selectedBuilding
  );

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(event.target.value);
    setSelectedBuilding(undefined);
    setSelectedUnit(undefined);
  };

  const handleBuildingChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedBuilding(event.target.value);
    setSelectedUnit(undefined);
  };

  const goToNextPage = () => {
    router.push("/projectUnit/start");
  };
  console.log("1", selectedProject);
  console.log("2", selectedBuilding);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FEA42B] p-4 gap-6">
      <div className="w-[500px]">
        {/* Card สำหรับเลือก Project */}
        <div className="mb-6 bg-white rounded-md p-4">
          <div className="mb-2">โครงการ</div>
          <select
            value={selectedProject}
            onChange={handleProjectChange}
            className="w-full p-2 border rounded"
          >
            <option value="">เลือกโครงการ</option>
            {projects.map((project) => (
              <option key={project.projectId} value={project.projectId}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>

        {/* Card สำหรับเลือก Building */}
        <div className="mb-6 bg-white rounded-md p-4">
          <div className="mb-2">ตึก</div>
          <select
            value={selectedBuilding}
            onChange={handleBuildingChange}
            disabled={!selectedProject}
            className="w-full p-2 border rounded"
          >
            <option value="">เลือกตึก</option>
            {filteredBuildings.map((building) => (
              <option key={building.buildingId} value={building.buildingId}>
                {building.buildingName}
              </option>
            ))}
          </select>
        </div>

        {/* Card สำหรับเลือก Unit */}
        <div className="mb-6 bg-white rounded-md p-4">
          <div className="mb-2">ห้อง</div>
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            disabled={!selectedBuilding}
            className="w-full p-2 border rounded"
          >
            <option value="">เลือกยูนิต</option>
            {filteredUnits.map((unit) => (
              <option key={unit.unitId} value={unit.unitId}>
                {unit.unitName}
              </option>
            ))}
          </select>
        </div>

        {/* ปุ่ม ถัดไป */}
        <button
          onClick={goToNextPage}
          className="w-full p-2 bg-[#4100F4] text-white rounded-md"
        >
          ถัดไป
        </button>
      </div>
    </div>
  );
};

export default ProjectUnit;

// useEffect(() => {
//   // โหลดรายการโครงการจาก API
//   const fetchProjects = async () => {
//     const response = await fetch("/api/projects"); // แก้เป็น API จริง
//     const data = await response.json();
//     setProjects(data);
//   };
//   fetchProjects();
// }, []);

// const handleProjectChange = async (projectId: string) => {
//   setSelectedProject(projectId);
//   setSelectedUnit(null); // รีเซ็ต Unit

//   //โหลดยูนิตของโครงการที่เลือกจาก API
//   const response = await fetch(`/api/units?projectId=${projectId}`);
//   const data = await response.json();
//   setUnits(data);
// };
