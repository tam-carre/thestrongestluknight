export const configs = {
  longEaseOut: {
    tension: 8,
    friction: 8,
    mass: .6,
    precision: 0.01
  },
  mediumEaseOut: {
    tension: 8,
    friction: 4,
    mass: .6,
  },
  shortEaseOut: {
    tension: 8,
    friction: 1,
    mass: .6,
  },
  veryShortEaseOut: {
    tension: 80,
    friction: 8,
    mass: .6,
  }
}

export const anims = {
  fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
  fadeOut: { from: { opacity: 1 }, to: { opacity: 0 } },
  fadeInSlideUp:    { to: { opacity: 1, transform: "translateY(0px)" } },
  fadeOutSlideDown: { to: { opacity: 0, transform: "translateY(20px)" } },
}

export type Animation = typeof anims[keyof typeof anims]
