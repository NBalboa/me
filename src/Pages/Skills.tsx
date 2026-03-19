import { GitHubCalendar } from "react-github-calendar";
import Item from "../components/Item";
import Items from "../components/Items";
import Title from "../components/Title";
import { useState } from "react";

const GITHUB_THEME = [
  "var(--muted)",
  "color-mix(in srgb, var(--primary) 20%, white)",
  "color-mix(in srgb, var(--primary) 40%, white)",
  "color-mix(in srgb, var(--primary) 70%, white)",
  "var(--primary)"]

const Skills = () => {

  const [year, setYear] = useState<number | undefined>(undefined);

  const years = Array.from(
    { length: new Date().getFullYear() - 2020 + 1 },
    (_, i) => new Date().getFullYear() - i
  ).sort((a, b) => (b - a));

  const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const accountYearCreated = 2020;
    const currentYear = new Date().getFullYear();

    if (!e.target.value) {
      setYear(undefined)
      return
    }

    const selectedYear = Number(e.target.value);

    if (currentYear >= selectedYear && accountYearCreated <= selectedYear) {
      setYear(selectedYear);
    }
    else {
      setYear(undefined);
    }
  }



  return (
    <div className="space-y-2">
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
      </div>
      <div className="space-y-2">
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
      <div className="space-y-4 pt-8 md:pt-2 ">
        <div className="relative">
          <Title label="Contributions" />
          <select
            value={year}
            onChange={handleChangeYear}
            className="absolute -top-7  -left-0 md:top-1 md:left-[180px] rounded-sm px-4 py-[0.9px] text-sm border-2">
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <GitHubCalendar username="nbalboa" theme={{
          dark: GITHUB_THEME,
          light: GITHUB_THEME
        }}
          year={year || "last"}
          blockSize={5}
          fontSize={12}
        />
      </div>
    </div>
  );
};

export default Skills;
