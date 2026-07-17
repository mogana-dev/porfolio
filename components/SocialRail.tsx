"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/moganadev",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/moganadev",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com/moganadev",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/moganadev",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com/@moganadev",
  },
];

export default function SocialRail() {
  return (
    <div
      className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col items-end"
      aria-label="Social Media"
    >
      {socials.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.75 + index * 0.08,
          }}
          whileHover={{
            x: -5,
            scale: 1.06,
          }}
          className="
            group
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-white/[0.08]
            bg-gradient-to-br
            from-[#162c4c]
            via-[#0e213b]
            to-[#071528]
            text-[#8fb5df]
            shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.35),0_10px_18px_rgba(0,0,0,0.28)]
            transition-all
            duration-300
            hover:border-[#ff6b35]/45
            hover:text-[#ff8a57]
            hover:shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),0_12px_26px_rgba(0,0,0,0.4),0_0_16px_rgba(255,107,53,0.12)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#ff6b35]
          "
        >
          <span className="absolute inset-x-1 top-1 h-px rounded-full bg-white/10" />

          <item.icon
            className="relative"
            size={16}
          />
        </motion.a>
      ))}
    </div>
  );
}