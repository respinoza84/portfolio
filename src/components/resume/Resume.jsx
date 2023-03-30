import { t } from "i18next";

import styles from "./Resume.module.css";
import { motion } from "framer-motion";
import zigzag from "../../assets/icons/zigzag.svg";

const Resume = () => {
  return (
    <motion.div
      // layout
      initial={{ opacity: 0, transform: "translateX(-100%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
      className={styles.portfolio}
    >
      <div className={`resume ${styles.resume}`}>
        <h1>{t("resumeTwo")}</h1>

        <div className={styles.secs}>
          <section className={`education ${styles.education}`}>
            <article className="title">
              <h4>{t("education")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <ul>
              <li>
                <span>{t("educationYear")}</span>
                <strong>{t("educationTitle")}</strong>
                <p>{t("educationText")}</p>
              </li>
              <li>
                <span>{t("educationYearTwo")}</span>
                <strong>{t("educationTitleTwo")}</strong>
                <p>{t("educationTextTwo")}</p>
              </li>
              <li>
                <span>{t("educationYearThree")}</span>
                <strong>{t("educationTitleThree")}</strong>
                <p>{t("educationTextThree")}</p>
              </li>
            </ul>
          </section>

          <section className={`languages ${styles.languages}`}>
            <article className="title">
              <h4>{t("experience")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <ul>

            <li>
                <span>{t("experienceYearThree")}</span>
                <strong>{t("experienceJobNameThree")}</strong>
                <strong>{t("experienceTitleThree")}</strong>
                <p>{t("experienceTextThree")}</p>
              </li>
              <li>
                <span>{t("experienceYear")}</span>
                <strong>{t("experienceJobName")}</strong>
                <strong>{t("experienceTitle")}</strong>
                
                <p>{t("experienceText")}</p>
              </li>
              <li>
                <span>{t("experienceYearTwo")}</span>
                <strong>{t("experienceJobNameTwo")}</strong>
                <strong>{t("experienceTitleTwo")}</strong>
                <p>{t("experienceTextTwo")}</p>
              </li>
             
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
