/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function TrailerModal({ isOpen, closeModal, data }) {
  return (
    <div>
      {data?.videos?.results.length > 0 && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='z-10 ' onClose={closeModal}>
            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center '>
                <Dialog.Panel className='md:ml-52'>
                  <iframe
                    autoPlay
                    frameBorder='0'
                    title='trailer'
                    src={`https://www.youtube.com/embed/${data?.videos?.results[0].key}`}
                    allow='autoplay'
                    className='lg:h-[450px] lg:w-[750px] sm:w-[350px] sm:h-[250px]'
                  />
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
}
