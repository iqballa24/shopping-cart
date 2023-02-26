import { Tab } from '@/types';
import React from 'react';

type Props = {
  tabs: Tab[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: string
};

const Tabsbar: React.FC<Props> = ({ tabs, onChange, checked }) => {
  return (
    <ul className="flex flex-row flex-wrap md:flex-col gap-3 items-stretch m-0 bg-white p-5">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className="w-full flex-1"
          data-tooltip-id="tooltip"
          data-tooltip-content={tab.value}
        >
          <input
            type="radio"
            name="tabsbar"
            id={`tab-${tab.id}`}
            value={tab.value}
            checked={checked === tab.value}
            onChange={onChange}
            className="hidden peer/tab"
          />
          <label
            htmlFor={`tab-${tab.id}`}
            className="flex flex-row items-center justify-center lg:justify-start gap-5 py-3 px-5 cursor-pointer peer-checked/tab:bg-primary peer-checked/tab:text-white rounded-md transition"
          >
            <tab.icon />
            <p className="block md:hidden lg:block whitespace-nowrap truncate">
              {tab.label}
            </p>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Tabsbar);
