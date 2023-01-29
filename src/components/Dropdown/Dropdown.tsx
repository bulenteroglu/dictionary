import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

export default function Dropdown() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">Sans Serif</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="divide-gray-100 absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="text-sm group flex w-full items-center rounded-md px-2 py-2 text-4.5 font-bold hover:text-purple">
                  Sans Serif
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="text-sm group flex w-full items-center rounded-md px-2 py-2 text-4.5 font-bold hover:text-purple">
                  Serif
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
