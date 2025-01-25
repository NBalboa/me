import Item from "../components/Item";
import Items from "../components/Items";
import Title from "../components/Title";

const Technology = () => {
  return (
    <div>
      <Title label="Technical Skills" />
      <div className="space-y-2 divide-y divide-gray-400 mt-2">
        <div>
          <h2 className="text-lg font-medium mb-2">Programming Languages</h2>
          <Items>
            <Item label="Javascript" />
            <Item label="PHP" />
            <Item label="Golang" />
            <Item label="Typescript" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Frameworks/Libraries</h2>
          <Items>
            <Item label="React.js" />
            <Item label="Express.js" />
            <Item label="Laravel" />
            <Item label="Inertia.js" />
            <Item label="Livewire" />
            <Item label="TailwindCSS" />
            <Item label="Bootstrap" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Databases</h2>
          <Items>
            <Item label="MySQL" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Tools</h2>
          <Items>
            <Item label="Visual Studio Code" />
            <Item label="MySQL Workbench" />
            <Item label="XAMPP" />
          </Items>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Others</h2>
          <Items>
            <Item label="HTML5" />
            <Item label="CSS3" />
            <Item label="Node.js" />
          </Items>
        </div>
      </div>
    </div>
  );
};

export default Technology;
