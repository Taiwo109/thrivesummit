import logoAsset from "@/assets/thrive/thrive-logo-2026.webp.asset.json";
import memory01 from "@/assets/thrive/homepage/memory-01.webp.asset.json";
import memory02 from "@/assets/thrive/homepage/memory-02.webp.asset.json";
import memory03 from "@/assets/thrive/homepage/memory-03.webp.asset.json";
import memory04 from "@/assets/thrive/homepage/memory-04.webp.asset.json";
import memory05 from "@/assets/thrive/homepage/memory-05.webp.asset.json";
import memory06 from "@/assets/thrive/homepage/memory-06.webp.asset.json";
import memory07 from "@/assets/thrive/homepage/memory-07.webp.asset.json";
import memory08 from "@/assets/thrive/homepage/memory-08.webp.asset.json";
import memory09 from "@/assets/thrive/homepage/memory-09.webp.asset.json";
import memory10 from "@/assets/thrive/homepage/memory-10.webp.asset.json";
import sponsors from "@/assets/thrive/sponsors/sponsors-2025.webp.asset.json";
import snippet01 from "@/assets/thrive/snippets/snippet-1.mp4.asset.json";
import snippet02 from "@/assets/thrive/snippets/snippet-2.mp4.asset.json";
import snippet03 from "@/assets/thrive/snippets/snippet-3.mp4.asset.json";
import poster01 from "@/assets/thrive/posters/snippet-1.jpg.asset.json";
import poster02 from "@/assets/thrive/posters/snippet-2.jpg.asset.json";
import poster03 from "@/assets/thrive/posters/snippet-3.jpg.asset.json";
import heroMobile from "@/assets/thrive/hero/thrive-mobile-montage.mp4.asset.json";
import heroDesktop from "@/assets/thrive/hero/thrive-desktop-montage.mp4.asset.json";
import aanuPortrait from "@/assets/thrive/speaker-portraits/aanu-clement-david-olawade.webp.asset.json";
import gracePortrait from "@/assets/thrive/speaker-portraits/grace-moronfolu.webp.asset.json";
import oluwafemiPortrait from "@/assets/thrive/speaker-portraits/oluwafemi-esan.webp.asset.json";
import funmiPortrait from "@/assets/thrive/speaker-portraits/funmi-obembe.webp.asset.json";
import danielPortrait from "@/assets/thrive/speaker-portraits/daniel-folley.webp.asset.json";
import philipPortrait from "@/assets/thrive/speaker-portraits/philip-oladejo.webp.asset.json";
import georgePortrait from "@/assets/thrive/speaker-portraits/george-cole.webp.asset.json";
import rukayatPortrait from "@/assets/thrive/speaker-portraits/rukayat-alabi.webp.asset.json";
import davidPortrait from "@/assets/thrive/speaker-portraits/david-olawade.webp.asset.json";
import kemiPortrait from "@/assets/thrive/speaker-portraits/matron-kemi-ipinmoye.webp.asset.json";
import ashieduPortrait from "@/assets/thrive/speaker-portraits/ashiedu-joel.webp.asset.json";
import dipoPortrait from "@/assets/thrive/speaker-portraits/dipo-awojide.webp.asset.json";

export const THRIVE_LOGO = logoAsset.url;

export const HOMEPAGE_MEMORIES = [
  memory01.url,
  memory02.url,
  memory03.url,
  memory04.url,
  memory05.url,
  memory06.url,
  memory07.url,
  memory08.url,
  memory09.url,
  memory10.url,
] as const;

export const HERO_MONTAGE = {
  mobile: heroMobile.url,
  desktop: heroDesktop.url,
} as const;

export const SPEAKERS_2025 = [
  {
    name: "Aanu Clement David-Olawade",
    role: "CEO, PenPixel Digital Press",
    image: aanuPortrait.url,
    badge: "Host",
  },
  {
    name: "Grace Moronfolu MBE",
    role: "Director of Carbonado Consultancy Ltd",
    image: gracePortrait.url,
  },
  {
    name: "Amb. (Prof) Oluwafemi Esan",
    role: "Ambassador of The Sovereign Kingdom of Hawaii to the UK and European Union",
    image: oluwafemiPortrait.url,
  },
  {
    name: "Dr Funmi Obembe",
    role: "Head of Technology, University of Northampton",
    image: funmiPortrait.url,
  },
  {
    name: "Daniel Folley",
    role: "Entrepreneur, Business Coach and Founder, Softlink.ai",
    image: danielPortrait.url,
  },
  {
    name: "Philip Oladejo",
    role: "Group CEO, The Global Business and Authors Awards UK",
    image: philipPortrait.url,
  },
  {
    name: "Cllr George Cole",
    role: "Former Lord Mayor of Leicester",
    image: georgePortrait.url,
  },
  {
    name: "Rukayat Alabi",
    role: "CEO, RKY Careers and Apply Buddy Ltd",
    image: rukayatPortrait.url,
  },
  {
    name: "David Olawade",
    role: "Lecturer and Senior Research and Innovation Project Facilitator",
    image: davidPortrait.url,
  },
  {
    name: "Matron Kemi Ipinmoye",
    role: "Clinical Quality Matron",
    image: kemiPortrait.url,
  },
  {
    name: "Cllr Dr Ashiedu Joel",
    role: "Director, Ashioma Consults Ltd",
    image: ashieduPortrait.url,
  },
  {
    name: "Dr Dipo Awojide",
    role: "Senior Management Consultant",
    image: dipoPortrait.url,
  },
] as const;
export const SPONSORS_2025 = sponsors.url;
export const SNIPPETS_2025 = [snippet01.url, snippet02.url, snippet03.url] as const;
export const SNIPPET_POSTERS_2025 = [poster01.url, poster02.url, poster03.url] as const;