'use client';
import { Container } from '@/components';
import React from 'react';

interface Props {}

const Interface: React.FC<Props> = ({}) => {
  return (
    <Container className="mx-auto max-w-7xl">
      <div className="m-8">
        <h2 className="text-lg font-semibold text-gray-900">Opacity</h2>

        <select
          name="themes"
          className="ring-offset-2 border-gray-500 focus:ring-gray-500 rounded-sm my-4 px-2 ring-1 p-1 ring-gray-500"
        >
          <option value="volvo">Blue</option>
          <option value="saab">Gray</option>
          <option value="mercedes">Red</option>
          <option value="audi">Pink</option>
        </select>

        <div className="mt-2 grid gap-6" data-theme="gray">
          <div className="flex gap-4">
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-90 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-80 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
              80%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-70 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-60 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-50 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-40 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
              40%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-30 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-20 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
              20%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-10 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Interface;
