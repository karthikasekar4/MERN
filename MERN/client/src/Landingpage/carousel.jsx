// src/components/CarouselComponent.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';  // Add these imports
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from '@heroicons/react/24/outline';
import { Carousel } from 'react-bootstrap';  // Carousel component import
import './carousel.css'; // Optional: for additional custom styling
import c1 from '../assets/img1.jpeg'
import c2 from '../assets/img2.jpeg'
import c3 from '../assets/img3.jpeg'
import c4 from '../assets/img5.jpeg'
import c5 from '../assets/img6.jpeg'
import c6 from '../assets/img4.jpeg'
import img from '../assets/img1.jpeg'


const CarouselComponent = () => {
  const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]
  return (
    <>
    <div className="relative isolate bg-dark  lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl sm:py-8 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing Our Latest Tour Packages!{' '}
              <a href="/aboutus" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center bg-dark">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Explore the World with Our Enriched Products Options
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Dive into unforgettable experiences designed to enhance your journey. Whether you're looking for serene getaways or thrilling adventures, we have the perfect package for you!
            Experience breathtaking landscapes, vibrant cultures, and exquisite cuisines. Our carefully curated tours ensure that you make the most of every destination.
            <br/><br/>Start Your Adventure Today!
            <br/>Ready to explore? [Get Started]!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="aboutus" className="text-sm font-semibold leading-6 text-gray-900">
              Learn More About Our Exclusive Offers →<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute bg-dark inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="d-flex  bg-dark justify-content-center align-items-center" style={{ height: '600px' }}>
    <Carousel interval={3000} style={{ width: '1400px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
          style={{ height: '550px' }} // Adjust height as needed
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide"
          style={{ height: '550px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
          style={{ height: '550px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c4}
          alt="Fourth slide"
          style={{ height: '550px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c5}
          alt="Fifth slide"
          style={{ height: '550px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c6}
          alt="Sixth slide"
          style={{ height: '550px' }}
        />
      </Carousel.Item>
    </Carousel>
  </div>
  <div className="overflow-hidden bg-dark sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
              iste dolor cupiditate blanditiis ratione.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
              

<div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-2">
<div>
  <img src={c6} alt="" loading="lazy"/>
</div>
<div class="col-start-3">
  <img src={c5} alt="" loading="lazy"/>
</div>
<div>
  <img src={c2} alt="" loading="lazy"/>
</div>
<div>
  <img src={c4} alt="" loading="lazy"/>
</div>
<div class="row-start-1 col-start-2 col-span-2">
  <img src={c1} alt="" loading="lazy"/>
</div>
</div>
            </dl>
          </div>
        </div>
        <img
          alt="Product screenshot"
          src={img}
          width={2432}
          height={942}
          className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        />
      </div>
    </div>
  </div>
  <div class="bg-dark py-24 sm:py-32">
<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
    </div>
    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
    </div>
    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt class="text-base leading-7 text-gray-600">New users annually</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
    </div>
  </dl>
</div>
<div class="bg-dark py-24 sm:py-32">
<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl sm:text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
    <p class="mt-6 text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
  </div>
  <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
    <div class="p-8 sm:p-10 lg:flex-auto">
      <h3 class="text-2xl font-bold tracking-tight text-white-900">Lifetime membership</h3>
      <p class="mt-6 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.</p>
      <div class="mt-10 flex items-center gap-x-4">
        <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
        <div class="h-px flex-auto bg-gray-100"></div>
      </div>
      <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Private forum access
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Member resources
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Entry to annual conference
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Official member t-shirt
        </li>
      </ul>
    </div>
    <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div class="mx-auto max-w-xs px-8">
          <p class="text-base font-semibold text-gray-600">Pay once, own it forever</p>
          <p class="mt-6 flex items-baseline justify-center gap-x-2">
            <span class="text-5xl font-bold tracking-tight text-gray-900">$349</span>
            <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
          </p>
          <a href="#" class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</a>
          <p class="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</>
  );
};

export default CarouselComponent;
