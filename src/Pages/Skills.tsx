import Item from "../components/Item";
import Items from "../components/Items";
import Title from "../components/Title";

const Skills = () => {
  return (
    <div className="space-y-2">
      <Title label="Core Skills" />
      <div className="text-justify ms-5 ">
        <ul className="list-disc space-y-2">
          <li>Full-Stack Development</li>
          <li>REST API Development</li>
          <li>Frontend Development (React, Next.js, TailwindCSS)</li>
          <li>Backend Development (Node.js, NestJS, Laravel)</li>
          <li>State Management (Redux)</li>
          <li>Database Design (MySQL, PostgreSQL)</li>
        </ul>
      </div>
      <Title label="Technical Skills" />
      <div className="space-y-2 divide-y divide-gray-400 mt-2 text-foreground">
        <div>
          <h2 className="text-lg font-medium mb-2 mt-2">Programming Languages</h2>
          <Items>
            <Item label="Javascript" />
            <Item label="PHP" />
            <Item label="Typescript" />
            <Item label="C++" />
            <Item label="Objective-C" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2 mt-2">Frameworks/Libraries</h2>
          <Items>
            <Item label="Laravel" />
            <Item label="NextJS" />
            <Item label="React.js" />
            <Item label="React Native" />
            <Item label="NestJS" />
            <Item label="NodeJS" />
            <Item label="TailwindCSS" />
            <Item label="Bootstrap" />
            <Item label="Redux.js" />
            <Item label="Prisma ORM" />
            <Item label="Swagger API" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2 mt-2">Databases</h2>
          <Items>
            <Item label="MySQL" />
            <Item label="PostgreSQL" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2 mt-2">Tools & Platforms</h2>
          <Items>
            <Item label="XCode" />
            <Item label="Visual Studio Code" />
            <Item label="Git" />
            <Item label="Github" />
            <Item label="MySQL Workbench" />
            <Item label="XAMPP" />
            <Item label="Docker" />
            <Item label="Jira" />
          </Items>
        </div>
      </div>
    </div>
  );
};

export default Skills;
