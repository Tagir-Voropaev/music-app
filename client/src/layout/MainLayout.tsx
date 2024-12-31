"use client"

import styles from "./MainLayout.module.scss";
import Sidebar from "./Sidebar";
import Player from "./Player";
import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${styles.page} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebar}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.player}>
        <Player/>
      </div>
    </div>
  );
}