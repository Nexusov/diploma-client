import { useState } from 'react';
import styles from './SideBar.module.scss';

const projects = ['Umit', 'Planet English', 'Danone Digital'];

export const SideBar = () => {
    const [active, setActive] = useState(projects[0]);

    return (
        <aside className={styles.sidebar}>
            <h1 className={styles.title}>Проекты</h1>
            <nav>
                <ul>
                    {projects.map((project) => (
                        <li
                            key={project}
                            className={active === project ? styles.active : ''}
                            onClick={() => setActive(project)}
                        >
                            {project}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};
