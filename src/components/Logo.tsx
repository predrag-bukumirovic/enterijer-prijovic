import styles from "./Logo.module.scss";

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={className ? `${styles.logo} ${className}` : styles.logo}>
      <span className={styles.name}>Prijović</span>
      <span className={styles.sub}>enterijer</span>
    </span>
  );
}
