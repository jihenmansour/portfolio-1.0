import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">ReactJS</span>
            <span className="chip">Next.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express.js</span>
            <span className="chip">MySQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
            <span className="chip">GitLab</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">shadcn</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">PHP</span>
            <span className="chip">.Net</span>
            <span className="chip">Laravel</span>
            <span className="chip">Netlify</span>
            <span className="chip">Vercel</span>
            <span className="chip">Figma</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
