import styles from "./Logo.module.scss"
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <Image src="/images/logo.svg" width={176} height={66} alt="Логотип" />
            </Link>
        </div>
    )
}