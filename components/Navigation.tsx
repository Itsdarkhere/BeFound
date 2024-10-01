'use client'
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu } from 'lucide-react';

export default function Navigation() {
  const menuItems = [
    { label: 'Work', href: '#work' },
    { label: 'Customers', href: '#customers' },
    { label: 'Company', href: '#company' },
  ];

  return (
    <div className="w-full px-4 border-b border-b-border">
      <div className="max-w-7xl mx-auto w-full py-3 flex flex-row justify-between items-center">
        <h2 className="text-accent text-2xl font-bold">BeFound</h2>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-8 items-center">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="font-regular text-base text-secondary hover:text-primary">
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-secondary" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-0 right-0 h-full w-64 bg-background p-6 shadow-lg">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Dialog.Close asChild key={item.label}>
                    <a href={item.href} className="font-regular text-base text-secondary hover:text-primary">
                      {item.label}
                    </a>
                  </Dialog.Close>
                ))}
              </div>
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 p-2 text-secondary hover:text-primary">
                  Close
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}