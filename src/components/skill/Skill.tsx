'use client'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSass, FaBootstrap, FaGithub, FaFigma } from "react-icons/fa6";
import { SiMysql, SiMongodb, SiTypescript } from "react-icons/si";
import { Card, ContainerGrid} from "./styled";

export const Skill = () => {
    return (
        <ContainerGrid>
            <Card>
                <FaJs style={{ fontSize: '80px' }} />
                <p>JavaScript</p>
            </Card>

            <Card>
                < FaReact style={{ fontSize: '80px' }} />
                <p>React</p>
            </Card>

            <Card>
                <FaNodeJs style={{ fontSize: '80px' }} />
                <p>Node.js</p>
            </Card>

            <Card>
                <SiTypescript style={{ fontSize: '80px' }} />
                <p>TypeScript</p>
            </Card>

            <Card>
                <FaCss3Alt style={{ fontSize: '80px' }} />
                <p>CSS</p>
            </Card>

            <Card>
                <FaSass style={{ fontSize: '80px' }} />
                <p>Sass</p>
            </Card>

            <Card>
                <FaHtml5 style={{ fontSize: '80px' }} />
                <p>HTML5</p>
            </Card>

            <Card>
                <FaBootstrap style={{ fontSize: '80px' }} />
                <p>BootsTrap</p>
            </Card>

            <Card>
                <FaGithub style={{ fontSize: '80px' }} />
                <p>GitHub</p>
            </Card>

            <Card>
                <SiMysql style={{ fontSize: '80px' }} />
                <p>MySql</p>
            </Card>

            <Card>
                <SiMongodb style={{ fontSize: '80px' }} />
                <p>MongoDB</p>
            </Card>

            <Card>
                <FaFigma style={{ fontSize: '80px' }} />
                <p>Figma</p>
            </Card>
        </ContainerGrid>
    )
}


