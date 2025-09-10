import Item from "../components/Item";
import Items from "../components/Items";
import Title from "../components/Title";

const Technology = () => {
  return (
    <div>
      <Title label="Technical Skills" />
      <div className="space-y-2 divide-y divide-gray-400 mt-2 text-foreground">
        <div>
          <h2 className="text-lg font-medium mb-2 mt-2">Programming Languages</h2>
          <Items>
            <Item label="Javascript" />
            <Item label="PHP" />
            <Item label="Typescript" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2 mt-2">Frameworks/Libraries</h2>
          <Items>
            <Item label="Laravel" />
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
            <Item label="Visual Studio Code" />
            <Item label="Git & Github" />
            <Item label="MySQL Workbench" />
            <Item label="XAMPP" />
            <Item label="Docker" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Methodologies & Practices</h2>
          <Items>
            <Item label="Agile Development" />
            <Item label="Sprint Planning" />
            <Item label="Jira" />
          </Items>
        </div>
      </div>
    </div>
  );
};

export default Technology;
