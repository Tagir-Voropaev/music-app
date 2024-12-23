import Image from "next/image";
import styles from "./page.module.scss";
import Sidebar from "@/layout/Sidebar";
import Player from "@/layout/Player";
export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <h1>Hello World</h1>
            </div>
            <div className={styles.player}>
                <Player/>
            </div>
        </div>
    );
}
