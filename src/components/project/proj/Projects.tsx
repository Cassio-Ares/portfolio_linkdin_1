'use client'

import Card_inf from '../card_inform/Card_inf'
import Card_Proj from '../card_project/Card_Proj'
import { ContainerCArd } from './style';

export default function Projects({ data }: any) {
    return (
        <div id='projects'>
            {data && data.map((project: any) => (
                < ContainerCArd key={project.id}>
                    <Card_Proj
                        img_url={project.imagem}
                         />

                    <Card_inf
                        name={project.name}
                        technology={project.technology}
                        description={project.description}
                        link_do_git={project.link_do_git}
                        link_do_site={project.link_do_site}
                    />
                </ ContainerCArd>
            ))}
        </div>
    );
};