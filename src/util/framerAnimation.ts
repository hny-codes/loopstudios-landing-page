import { Variants } from 'framer-motion';

export const heroVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const navVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      type: 'tween',
    },
    scale: 1,
    rotate: 360,
  },
};

export const menuItemVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      type: 'tween',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
    },
  },
};

export const creationVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
