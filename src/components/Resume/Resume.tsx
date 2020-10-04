import React from 'react';
import styles from './Resume.module.css';
import { Resume as ResumeModel } from '../../models/resume';

type Props = {
    resume: ResumeModel;
};

const Resume = ({ resume }: Props) => (
    <div className={styles.Resume} data-testid="Resume">
        <section className={styles.Section}>
            <h2 className={styles.SectionHead}>Experience</h2>
            {resume.experience.map((e) => (
                <div className={styles.Block}>
                    <div className={styles.Date}>
                        <b>{e.date.getFullYear()}</b>
                    </div>
                    <div className={styles.DetailBlock}>
                        <h3 className={styles.Company}>{e.company}</h3>
                        <div>{e.position}</div>
                        <ul className={styles.List}>
                            {e.tasks.map((t) => (
                                <li>{t}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
        <section className={styles.Section}>
            <h2 className={styles.SectionHead}>Education</h2>
            {resume.education.map((e) => (
                <div className={styles.Block}>
                    <div className={styles.Date}>
                        <b>{e.date.getFullYear()}</b>
                    </div>
                    <div className={styles.DetailBlock}>
                        <h3 className={styles.Company}>{e.school}</h3>
                        <ul className={styles.List}>
                            {e.tasks.map((t) => (
                                <li>{t}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    </div>
);

export default Resume;
