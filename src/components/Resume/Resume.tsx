import React from 'react';
import styles from './Resume.module.css';
import { Resume as ResumeModel } from '../../models/resume';

type Props = {
    resume: ResumeModel
};

const Resume = ({ resume }: Props) => (
    <div className={styles.Resume} data-testid="Resume">
        {
            resume.experience.map((e) =>
                <section>
                    <h2>{e.company}</h2>
                    <div>{e.position}</div>
                </section>
            )
        }
    </div>
);

export default Resume;
