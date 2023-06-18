import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.nav}>
      <h3>Hadi</h3>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/post">Post</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
    </div>
  );
};

export default Header;
