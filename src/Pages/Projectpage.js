/*eslint-disable*/
import React, { useState } from 'react';
import { MainLayout } from '../Components/Layout/MainLayout';
import { InnerLayout } from '../Components/Layout/InnerLayout';
import Title from '../Components/Title/Title.js';
import projects from '../Data/projects.js';
import Menu from '../Components/Menu/Menu.js';

const Projectpages = () => {
    const [menuItem, setMenuItems] = useState(projects);

    return (
        <MainLayout>
            <Title title={'Project'} />
            <InnerLayout>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default Projectpages;