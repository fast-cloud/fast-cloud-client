import { Button } from '@/shared/components/Button/Button';
import * as styles from './TestPage.css';

export const TestPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Button Components Test</h1>

      <section className={styles.section}>
        <h2>Home Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="home">버튼</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>White Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="white">버튼 이름</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>CTA Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="cta">버튼 이름 →</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Login Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="login">버튼 이름</Button>
          <Button variant="login" disabled>
            버튼 이름 (disabled)
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Gray Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="gray">버튼 이름</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Nav Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="nav">Log in</Button>
          <Button variant="nav">Sign up</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Text Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="text">텍스트 버튼</Button>
          <Button variant="text" disabled>
            텍스트 버튼 (disabled)
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Click Test</h2>
        <div className={styles.buttonGrid}>
          <Button variant="cta" onClick={() => alert('CTA 버튼 클릭!')}>
            클릭해보세요
          </Button>
        </div>
      </section>
    </div>
  );
};
