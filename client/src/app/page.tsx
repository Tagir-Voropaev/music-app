"use client"

import styles from "./page.module.scss";
import Sidebar from "@/layout/Sidebar";
import Player from "@/layout/Player";
import { useState } from "react";
import Content from "@/layout/Content";

export default function Home() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`${styles.page} ${isCollapsed ? styles.collapsed : ''}`}>
            <div className={styles.sidebar}>
                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
            </div>
            <div className={styles.content}>
               <Content/>
            </div>
            <div className={styles.player}>
                <Player/>
            </div>
        </div>
    );
}
