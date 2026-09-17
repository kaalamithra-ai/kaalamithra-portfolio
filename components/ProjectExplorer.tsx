"use client";

import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";
import { getProjectsByService } from "@/data/projects";

export default function ProjectExplorer() {
  const [active, setActive] = useState("all");
  return (
    <>
      <ProjectFilter active={active} onChange={setActive} />
      <div className="mt-12">
        <ProjectGrid projects={getProjectsByService(active)} />
      </div>
    </>
  );
}
