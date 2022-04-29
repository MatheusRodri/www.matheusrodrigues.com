import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/images/logoM.svg';
import Settings from "../../../../public/images/settings.svg";

import styles from "./styles.module.scss";
import {FiSettings} from "react-icons/fi";

export default function Header() {
    return (
        <header className={styles.container}>
            <Link href="/">
                <Image width={40} height={40} src={Logo} alt="Logo" />
            </Link>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
                <button>
                    <Image width={25} height={25} src={Settings} alt="Settings" />
                </button>
            </nav>
        </header>
    )
}