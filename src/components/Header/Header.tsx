import styles from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    )
}