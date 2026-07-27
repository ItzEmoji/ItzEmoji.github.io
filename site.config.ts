/**
 * Single source of truth for identity and page copy.
 *
 * Nothing else in the codebase hardcodes a name, an address, or a profile URL.
 * Changing an email or adding a network is a one-line edit in this file.
 */

export interface SocialLink {
  /** Label shown to the reader. */
  readonly name: string;
  /** The account as you'd say it out loud, e.g. "@itzemoji:matrix.org". */
  readonly handle: string;
  /** Omit for accounts that have no addressable profile page (Discord). */
  readonly url?: string;
  /**
   * Emit rel="me" so the remote profile can verify this site back.
   * Mastodon and dev.to both support this; the rest ignore it.
   */
  readonly verify?: boolean;
}

export interface NavLink {
  readonly text: string;
  readonly href: string;
}

/*
 * Annotated rather than `as const`: literal narrowing would type each entry by
 * its own shape, and the optional `url`/`verify` fields would then not exist on
 * the entries that omit them.
 */
const socials: readonly SocialLink[] = [
  {
    name: "GitHub",
    handle: "ItzEmoji",
    url: "https://github.com/ItzEmoji",
  },
  {
    name: "Mastodon",
    handle: "itzemoji@mastodon.social",
    url: "https://mastodon.social/@itzemoji",
    verify: true,
  },
  {
    name: "Matrix",
    handle: "@itzemoji:matrix.org",
    url: "https://matrix.to/#/@itzemoji:matrix.org",
  },
  {
    name: "dev.to",
    handle: "itzemoji",
    url: "https://dev.to/itzemoji",
    verify: true,
  },
  {
    name: "Reddit",
    handle: "TheEmojiPlayer",
    url: "https://reddit.com/user/TheEmojiPlayer",
  },
  {
    name: "Discord",
    handle: "itzemoji",
  },
];

export const site = {
  url: "https://itzemoji.com",
  title: "Cyril Dettling",
  description:
    "Cyril Dettling. Apprentice platform engineer at the Kanton Schwyz. I build Linux infrastructure with Nix.",
  lang: "en",
  locale: "en_CH",

  author: {
    name: "Cyril Dettling",
    /** Split so the address is not sitting in the HTML as one scrapable string. */
    email: { user: "mail", domain: "itzemoji.com" },
    /* Where he lives. Not to be confused with the employer below: the Kanton
       Schwyz is the canton he is apprenticed to, not the town. */
    location: "Lauerz, Switzerland",
    role: "Apprentice Platform Engineer",
    employer: "Kanton Schwyz",
    github: "ItzEmoji",
    /*
     * GitHub avatar, fetched and optimised at build time.
     *
     * This is the direct avatars URL rather than github.com/ItzEmoji.png,
     * which is a 302 redirect that the image pipeline would have to follow.
     * Change the avatar on GitHub and the next build picks it up; the numeric
     * id is the account and does not change.
     */
    avatar: "https://avatars.githubusercontent.com/u/157407989?v=4",
  },

  /** Public key material lives off-site; this is a link, never a mirror. */
  pgp: "https://openpgpkey.itzemoji.com",

  socials,

  hero: {
    eyebrow: "Lauerz, Switzerland",
    title: "Cyril Dettling",
    text: "I am 16. I am training as a platform engineer at the Kanton Schwyz. I build Linux systems with Nix, and I put KDE Plasma on Linux From Scratch once.",
    actions: [
      { text: "See the work", href: "/projects" },
      { text: "Get in touch", href: "/contact" },
    ] as readonly NavLink[],
  },

  headerNavLinks: [
    { text: "Home", href: "/" },
    { text: "Work", href: "/projects" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ] as readonly NavLink[],

  footerNavLinks: [
    { text: "Home", href: "/" },
    { text: "Work", href: "/projects" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ] as readonly NavLink[],
} as const;

/** Reassembled at build time, so the address never ships as literal text in the source. */
export const email = `${site.author.email.user}@${site.author.email.domain}`;
