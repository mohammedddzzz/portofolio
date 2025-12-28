import Resume from "@/components/cv/resume";
import ContactMe from "@/components/contact/ContactMe";
import PrimaryFeatures from "@/components/profileHead/profilestatementFE/heroPrimaryFeatures";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import HeroCard from '../components/profileHead/profilestatementFE/HeroCard'  

const navigation = [
  { name: 'About me', href: '#hero', current: true },
  { name: 'Skills', href: '#features', current: false },
  { name: 'Resume', href: '#resume', current: false },
  { name: 'Contact', href: '#contact', current: false },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */

export default function Home() {
  return (
    <>
    
      <div className="max-h-9xl">
                  <div className="bg-indigo-600 pb-32">
                          <div className="py-1">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <Disclosure as="nav" className="bg-indigo-600">
                                <div className="relative flex h-16 items-center justify-center">
                                  <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                                      <span className="absolute -inset-0.5" />
                                      <span className="sr-only">Open main menu</span>
                                      <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                                    </DisclosureButton>
                                  </div>
                                  <div className="flex items-center px-2 lg:px-0">
                                    <div className="hidden lg:ml-10 lg:block">
                                      <div className="flex items-center">
                                        {navigation.map((item) => (
                                          <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                              item.current
                                                ? 'bg-indigo-700 text-white'
                                                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                              'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                          >
                                            {item.name}
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <DisclosurePanel className="lg:hidden">
                                  <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (
                                      <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                          item.current ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                          'block rounded-md px-3 py-2 text-base font-medium',
                                        )}
                                      >
                                        {item.name}
                                      </DisclosureButton>
                                    ))}
                                  </div>
                                 
                                </DisclosurePanel>
                              </Disclosure> 
                             </div>
                          </div> 
                  </div>

                        
                       <div className="mt-[-120px]">
                              <div className=" max-w-9xl max-h-7xl px-4 pb-12 sm:px-6 lg:px-8">
                                <section id="hero" className="rounded-lg bg-gradient-to-br from-sky-100 via-indigo-100 to-emerald-100 px-5 py-6 shadow-50/500 sm:px-6">
                                  <HeroCard />
                                </section>
                              </div>
                            </div>    
        </div>

    <section id="features">
      <PrimaryFeatures />
    </section>
  
    <section id="resume">
      <Resume />
    </section>


    <section id="contact" className="w-3xs lg:w-3xs lg:max-h-3xs px-6 lg:px-8">
      <ContactMe/>
    </section>

    </>
    
  );
}