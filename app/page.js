import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import home1 from '@/images/photos/home1.png'
import home2 from '@/images/photos/home2.png'
import home3 from '@/images/photos/home3.png'
import home4 from '@/images/photos/home4.png'
import home5 from '@/images/photos/home5.png'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[home1, home2, home3, home4, home5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'tive aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800rela',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function InstagramSection () {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">  
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[
            {
              src: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/446328916_976537393944627_5327280530272346949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=VfbZCY7Qs8oQ7kNvgGfF98p&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBE_trahX9I_9Ess7RUVVot8matl1ouCGHrfiKTj7ChNg&oe=66826F75",
              srcAlt: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/446328916_976537393944627_5327280530272346949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=VfbZCY7Qs8oQ7kNvgGfF98p&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYBE_trahX9I_9Ess7RUVVot8matl1ouCGHrfiKTj7ChNg&oe=66826F75",
              alt: "A picture of a sitting dog",
            },
            {
              src: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/436296820_966539878126363_6314978818471584380_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=m__o8GtiauAQ7kNvgEjxv8Y&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYA5kHtDeY0GS3pzW_Axf2EHD68zO2FRCw3XUeRBUE24gw&oe=66824E47",
              srcAlt: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/436296820_966539878126363_6314978818471584380_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=m__o8GtiauAQ7kNvgEjxv8Y&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYA5kHtDeY0GS3pzW_Axf2EHD68zO2FRCw3XUeRBUE24gw&oe=66824E47",
              alt: "Smiling Girl",
            },
            {
              src: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/434127967_246203545154202_7186284280471110025_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=_96syXwbTsYQ7kNvgEoLWCm&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYCMpuM8uCAM2_xoXbynYJgjJ2JGnnqzNXBnRsrb_qsH9Q&oe=66826558",
              srcAlt: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/434127967_246203545154202_7186284280471110025_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=_96syXwbTsYQ7kNvgEoLWCm&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYCMpuM8uCAM2_xoXbynYJgjJ2JGnnqzNXBnRsrb_qsH9Q&oe=66826558",
              alt: "Men Posing",
            },
            {
              src: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/441546490_1685600132244455_6130428898489910517_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=aFtdW14uJ0wQ7kNvgHvtT1x&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYCD6ltXdYZdJ6W0xpyTk78cOA1A0xZ7CJ-bG0cZt88t1A&oe=66825190",
              srcAlt: "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/441546490_1685600132244455_6130428898489910517_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=aFtdW14uJ0wQ7kNvgHvtT1x&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AYCD6ltXdYZdJ6W0xpyTk78cOA1A0xZ7CJ-bG0cZt88t1A&oe=66825190",
              alt: "2 puppies",
            },
          ].map((item, index) => (
            <div className="relative group">
              <div
                  key={index}
                  alt={item.alt}
                  className={clsx(
                    'tive aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800rela',
                    rotations[index % rotations.length],
                  )}
                >
                  <img
                    src={item.src}
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

              <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44 20V20.001"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
       </div>
    </div>
  );
};

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Interior Design for sophisticated lifestyles
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Welcome to Chandia Interiors. Our Sydney-based Design Studio specialises in high-end residential projects, serving clients with a discerning taste for curated living.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>

      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Follow Us on Instagram
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Follow us on instagram @
            <span className="underline cursor-pointer">chandia.interiors</span> and tag us to get featured on our timeline
          </p>
        </div>
      </Container>

      <InstagramSection/>
    </>
  )
}
