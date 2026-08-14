import Image from "next/image";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import {
  ArrowUpRight,
  BedIcon,
  KitchenIcon,
  LoungeIcon,
  MailIcon,
  MessageIcon,
  PinIcon,
  PoolIcon,
  UsersIcon,
} from "@/components/Icons";

const facebookUrl =
  "https://www.facebook.com/p/The-Fern-Private-Villas-Mabalacat-City-Pampanga-61587328706577/";
const mapUrl =
  "https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Juan%20Luna%20Street,%20Barangay%20Dolores,%20Mabalacat,%20Philippines,%202010&FORM=FBKPL1&mkt=en-US";

const facilities = [
  {
    title: "Private swimming pool",
    copy: "A pool reserved for your group throughout the stay.",
    icon: PoolIcon,
  },
  {
    title: "Modern kitchen",
    copy: "A practical space for preparing and sharing food together.",
    icon: KitchenIcon,
  },
  {
    title: "Spacious lounge",
    copy: "Room to slow down, catch up, and spend the day together.",
    icon: LoungeIcon,
  },
  {
    title: "Spacious bedrooms",
    copy: "Comfortable indoor spaces for overnight stays with your group.",
    icon: BedIcon,
  },
];

const occasions = [
  {
    number: "01",
    title: "Family & barkada getaways",
    copy: "Keep the group together in one private place, from pool time to relaxed evenings indoors.",
    image: "/images/image-366f2f9612526379.jpg",
    alt: "A group gathering at The Fern Private Villas",
  },
  {
    number: "02",
    title: "Birthdays & celebrations",
    copy: "Turn a few hours of celebration into an overnight stay with more time to eat, swim, and reconnect.",
    image: "/images/image-b4cab791807c7129.jpg",
    alt: "Celebration setup at The Fern Private Villas",
  },
  {
    number: "03",
    title: "Team gatherings",
    copy: "A private setting for teams that want to plan, bond, unwind, and spend time outside the usual routine.",
    image: "/images/image-dfb7d11694f6b803.jpg",
    alt: "Team gathering at The Fern Private Villas",
  },
];

const gallery = [
  { src: "/images/image-3e2fd78365b7ad99.jpg", alt: "Villa exterior beside the private pool", span: "lg:col-span-5 lg:row-span-2" },
  { src: "/images/image-0d65012cba499583.jpg", alt: "Open lounge and dining area overlooking the pool", span: "lg:col-span-7" },
  { src: "/images/image-03a34b7bd30d64be.jpg", alt: "Bedroom inside The Fern Private Villas", span: "lg:col-span-3" },
  { src: "/images/image-8adf5c9be092b364.jpg", alt: "Modern kitchen inside the villa", span: "lg:col-span-4" },
  { src: "/images/image-e34bc9027103b177.jpg", alt: "Outdoor seating area beside the pool", span: "lg:col-span-4" },
  { src: "/images/image-f1978ddcef67ede6.jpg", alt: "Decorated dining table for a gathering", span: "lg:col-span-4" },
  { src: "/images/image-3845855ea246c457.jpg", alt: "Villa exterior and landscaped poolside area", span: "lg:col-span-4" },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "The Fern Private Villas",
    description:
      "Private villas in Mabalacat City, Pampanga for family trips, celebrations, barkada getaways, and group gatherings.",
    email: "fidespolicarpio@thefernprivatevillas.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mabalacat City",
      addressRegion: "Pampanga",
      addressCountry: "PH",
    },
    sameAs: [facebookUrl],
  };

  return (
    <main id="top" className="overflow-x-clip bg-[#f7f3e9] text-[#243818]">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative min-h-[100svh] overflow-hidden border-b border-[#405d2b]/15">
        <div className="pointer-events-none absolute -left-24 top-28 size-72 rounded-full border border-[#405d2b]/10" />
        <div className="pointer-events-none absolute -left-10 top-44 size-48 rounded-full border border-[#405d2b]/10" />
        <div className="mx-auto grid min-h-[100svh] max-w-[1480px] items-end gap-10 px-5 pb-8 pt-28 sm:px-8 sm:pb-12 lg:grid-cols-[1.03fr_.97fr] lg:gap-14 lg:px-12 lg:pb-14 lg:pt-32">
          <div className="relative z-10 pb-5 lg:pb-12">
            <Reveal>
              <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#6b765f] sm:text-[11px]">
                <span className="h-px w-10 bg-[#a88b4a]" />
                Mabalacat City, Pampanga
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="max-w-[820px] font-serif text-[clamp(3.9rem,8.4vw,8.6rem)] leading-[0.82] tracking-[-0.055em] text-[#243818]">
                Your private
                <span className="block italic text-[#59713d]">space to stay</span>
                together.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#596451] sm:text-[17px] sm:leading-8">
                The Fern Private Villas brings family trips, celebrations, barkada getaways, and team gatherings into one private setting in Mabalacat City.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-[#243818] px-7 text-[11px] font-bold uppercase tracking-[0.15em] text-[#f7f3e9] transition hover:bg-[#405d2b]"
                >
                  Message to inquire
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#villa"
                  className="inline-flex min-h-14 items-center rounded-full border border-[#405d2b]/25 px-7 text-[11px] font-bold uppercase tracking-[0.15em] text-[#344928] transition hover:border-[#405d2b]/50 hover:bg-white/40"
                >
                  Explore the villa
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#405d2b]/15 pt-6 text-[10px] font-bold uppercase tracking-[0.17em] text-[#69745f]">
                <span>Exclusive use</span>
                <span>Private pool</span>
                <span>Overnight stays</span>
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[56vh] lg:min-h-[76vh]">
            <Reveal className="h-full">
              <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-[2rem] bg-[#d7dccd] sm:rounded-[2.6rem]">
                <Image
                  src="/images/image-3e2fd78365b7ad99.jpg"
                  alt="The Fern Private Villas exterior with its private swimming pool"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center transition duration-[1800ms] hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d3013]/35 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={240} className="absolute -left-2 bottom-5 z-10 sm:-left-6 sm:bottom-8">
              <div className="max-w-[260px] rounded-[1.4rem] border border-white/25 bg-[#f7f3e9]/90 p-5 shadow-[0_24px_70px_rgba(25,42,17,.18)] backdrop-blur-xl sm:p-6">
                <p className="font-serif text-2xl leading-[1.05] text-[#243818]">Two villas.<br />One reason to stay longer.</p>
                <p className="mt-3 text-xs leading-5 text-[#68725f]">Both located in Barangay Dolores, Mabalacat City.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="villa" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow">The villa</p>
                <h2 className="mt-5 max-w-md font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[0.93] tracking-[-0.045em]">
                  Made for the whole group, not separate plans.
                </h2>
                <p className="mt-7 max-w-md text-[15px] leading-7 text-[#64705c]">
                  The Fern is positioned around shared time: a private pool, indoor gathering spaces, bedrooms, and a kitchen in one place.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
                  <Image
                    src="/images/image-0d65012cba499583.jpg"
                    alt="Open lounge, dining space, and pool view at The Fern Private Villas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div className="mt-8 grid border-t border-[#405d2b]/15 sm:grid-cols-2">
                {facilities.map((facility, index) => {
                  const Icon = facility.icon;
                  return (
                    <Reveal key={facility.title} delay={index * 80}>
                      <div className="group min-h-56 border-b border-[#405d2b]/15 py-8 sm:px-7">
                        <div className="flex items-start justify-between gap-6">
                          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#405d2b]/20 text-[#59713d] transition group-hover:bg-[#405d2b] group-hover:text-[#f7f3e9]">
                            <Icon className="size-5" />
                          </span>
                          <span className="text-[10px] font-bold tracking-[0.18em] text-[#8a927f]">0{index + 1}</span>
                        </div>
                        <h3 className="mt-7 font-serif text-2xl tracking-[-0.02em]">{facility.title}</h3>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-[#68725f]">{facility.copy}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#243818] py-24 text-[#f7f3e9] sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#b8c8a5]">Stay a little longer</p>
                <h2 className="mt-5 max-w-4xl font-serif text-[clamp(3.2rem,6.5vw,7rem)] leading-[0.88] tracking-[-0.05em]">
                  More than a few hours of <span className="italic text-[#cfb875]">together.</span>
                </h2>
              </div>
              <p className="max-w-xl text-[15px] leading-7 text-[#ced6c5] lg:justify-self-end lg:text-[17px] lg:leading-8">
                The Fern regularly frames celebrations as overnight stays: keep the party going, wind down at your own pace, and wake up with more time together.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
            <Reveal>
              <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] sm:min-h-[650px] sm:rounded-[2.5rem]">
                <Image
                  src="/images/image-1c9fdd815ea6d224.jpg"
                  alt="The private swimming pool and villa exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 67vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Reveal delay={100}>
                <div className="relative min-h-64 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:min-h-0 lg:aspect-[4/3]">
                  <Image
                    src="/images/image-03a34b7bd30d64be.jpg"
                    alt="Bedroom prepared for an overnight stay"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={170}>
                <div className="flex min-h-64 flex-col justify-between rounded-[2rem] border border-white/12 bg-white/[0.045] p-7 sm:rounded-[2.5rem] sm:p-9 lg:min-h-0 lg:flex-1">
                  <span className="grid size-12 place-items-center rounded-full border border-white/15 text-[#cfb875]">
                    <UsersIcon className="size-5" />
                  </span>
                  <div className="mt-12">
                    <p className="font-serif text-3xl leading-tight">Planning for a group?</p>
                    <p className="mt-3 text-sm leading-6 text-[#c5cfbc]">Packages are offered by group size. Ask the team directly for the current options and availability.</p>
                    <a href={facebookUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f7f3e9]">
                      Ask on Facebook <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="occasions" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid gap-8 border-b border-[#405d2b]/15 pb-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="eyebrow">Come together</p>
                <h2 className="mt-5 max-w-2xl font-serif text-[clamp(3rem,5.6vw,6rem)] leading-[0.9] tracking-[-0.05em]">A place for the plans that matter.</h2>
              </div>
              <p className="max-w-lg text-[15px] leading-7 text-[#66715e] lg:justify-self-end">
                Source posts consistently show The Fern as a setting for family trips, birthdays, reunions, barkada getaways, and team activities.
              </p>
            </div>
          </Reveal>

          <div className="divide-y divide-[#405d2b]/15">
            {occasions.map((occasion, index) => (
              <Reveal key={occasion.title} delay={index * 70}>
                <article className="group grid gap-8 py-10 lg:grid-cols-[80px_1fr_.75fr] lg:items-center lg:py-14">
                  <span className="self-start text-[10px] font-bold tracking-[0.2em] text-[#8b9583] lg:pt-2">{occasion.number}</span>
                  <div>
                    <h3 className="font-serif text-[clamp(2.2rem,4vw,4.6rem)] leading-[0.95] tracking-[-0.04em] transition-transform duration-500 lg:group-hover:translate-x-2">
                      {occasion.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#66715e] sm:text-[15px] sm:leading-7">{occasion.copy}</p>
                  </div>
                  <div className="relative aspect-[16/8] overflow-hidden rounded-[1.5rem] lg:aspect-[16/10]">
                    <Image
                      src={occasion.image}
                      alt={occasion.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dfe4d6] py-24 sm:py-32">
        <div className="mx-auto max-w-[1180px] px-5 text-center sm:px-8">
          <Reveal>
            <p className="mx-auto text-[10px] font-bold uppercase tracking-[0.24em] text-[#6d795f]">A guest note shared by The Fern</p>
            <blockquote className="mx-auto mt-8 max-w-5xl font-serif text-[clamp(2.3rem,5vw,5rem)] leading-[1.02] tracking-[-0.04em] text-[#243818]">
              “Mam super enjoy po at nakapgbonding talaga with the whole Team. Very thankful na sa inyo kami ngbook.”
            </blockquote>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#728068]">Avon Mabalacat Branch</p>
          </Reveal>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Gallery</p>
                <h2 className="mt-5 font-serif text-[clamp(3rem,5.4vw,6rem)] leading-none tracking-[-0.05em]">A closer look.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#66715e] sm:text-right">Poolside mornings, shared meals, comfortable rooms, and spaces ready for a group.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid auto-rows-[260px] gap-4 sm:auto-rows-[320px] lg:grid-cols-12 lg:auto-rows-[310px]">
            {gallery.map((item, index) => (
              <Reveal key={item.src} className={`relative min-h-0 overflow-hidden rounded-[1.6rem] ${item.span}`} delay={index * 55}>
                <div className="group absolute inset-0 overflow-hidden rounded-[1.6rem] bg-[#d8ded0]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-[#243818]/0 transition group-hover:bg-[#243818]/10" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-20 border-y border-[#405d2b]/15 bg-white/35 py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow">Find The Fern</p>
                <h2 className="mt-5 max-w-2xl font-serif text-[clamp(3rem,5vw,5.8rem)] leading-[0.92] tracking-[-0.05em]">A private escape in Mabalacat City.</h2>
                <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#66715e]">
                  The Fern Private Villas has two villas in Barangay Dolores, Mabalacat City, Pampanga. The business also describes the location as an escape near Clark.
                </p>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  <a href={mapUrl} target="_blank" rel="noreferrer" className="group rounded-[1.4rem] border border-[#405d2b]/15 bg-[#f7f3e9] p-5 transition hover:border-[#405d2b]/35">
                    <PinIcon className="size-5 text-[#59713d]" />
                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a8571]">Location</p>
                    <p className="mt-2 font-serif text-xl">Barangay Dolores,<br />Mabalacat City</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">Open map <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                  </a>
                  <a href="mailto:fidespolicarpio@thefernprivatevillas.com" className="group rounded-[1.4rem] border border-[#405d2b]/15 bg-[#f7f3e9] p-5 transition hover:border-[#405d2b]/35">
                    <MailIcon className="size-5 text-[#59713d]" />
                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a8571]">Email</p>
                    <p className="mt-2 break-all font-serif text-xl">fidespolicarpio@<br className="hidden sm:block" />thefernprivatevillas.com</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">Send email <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:aspect-[5/6]">
                <Image
                  src="/images/image-d6f1d4be68d00119.jpg"
                  alt="The Fern Private Villas exterior and pool area"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f3415]/45 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/20 bg-[#f7f3e9]/90 p-6 backdrop-blur-lg sm:inset-x-8 sm:bottom-8 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6d795f]">Ready to plan your stay?</p>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-serif text-2xl leading-tight text-[#243818]">Ask about current availability and group options.</p>
                    <a href={facebookUrl} target="_blank" rel="noreferrer" className="grid size-12 shrink-0 place-items-center rounded-full bg-[#243818] text-[#f7f3e9] transition hover:bg-[#405d2b]" aria-label="Message The Fern on Facebook">
                      <MessageIcon className="size-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#243818] py-24 text-[#f7f3e9] sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1180px] px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b5c4a4]">Your next gathering can start here</p>
            <h2 className="mx-auto mt-7 max-w-5xl font-serif text-[clamp(3.5rem,7vw,7.6rem)] leading-[0.87] tracking-[-0.055em]">
              Stay together.<br /><span className="italic text-[#cfb875]">Make more time.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-[15px] leading-7 text-[#c8d1bf]">Message The Fern directly for current rates, group-size packages, and available dates.</p>
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="group mx-auto mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#f7f3e9] px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-[#243818] transition hover:bg-[#dfe4d6]">
              Message on Facebook
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#1b2a12] text-[#d7dfcf]">
        <div className="mx-auto max-w-[1480px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-serif text-3xl tracking-[-0.02em] text-[#f7f3e9]">The Fern Private Villas</p>
              <p className="mt-2 text-xs tracking-[0.08em] text-[#aebba4]">Mabalacat City, Pampanga</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.17em]">
              <a href="#villa" className="hover:text-white">The Villa</a>
              <a href="#occasions" className="hover:text-white">Occasions</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[0.12em] text-[#86947d] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} The Fern Private Villas</p>
            <p>Private villa stays in Mabalacat City, Pampanga</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
