import MyComponent from "./components/MyComponent/MyComponent";
import Clock from "./components/Clock/Clock"
import styles from "@/app/page.module.css"
import Counter from "./components/Counter/counter"

export default function Home() {
  return (
    <div className={styles.page}>
      <MyComponent />
      <Clock />
      <Counter />
    </div>
  );
}

