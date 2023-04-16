import styles from '../styles/button/Button.module.css'
import Link from 'next/link';
export default function Button({ props }) {
    return (
        // <button className={styles[props.className]} onClick={props.clickEvent}>{props.text}{(props.icon)}</button>
        <Link href={props.link} className={styles[props.className]} target='_blank' rel='noopener noreferrer'>
                {props.text} {props.icon}
        </Link>
    );
};