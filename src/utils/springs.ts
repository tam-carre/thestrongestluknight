export const configs = {
  longEaseOut: {
    tension: 800,
    friction: 820,
    mass: .6,
    precision: 0.001
  },
  mediumEaseOut: {
    tension: 800,
    friction: 420,
    mass: .6,
  },
  shortEaseOut: {
    tension: 800,
    friction: 120,
    mass: .6,
  }
}

export const anims = {
  fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
  fadeOut: { from: { opacity: 1 }, to: { opacity: 0 } },
  fadeInSlideUp:    { to: { opacity: 1, transform: "translateY(0px)" } },
  fadeOutSlideDown: { to: { opacity: 0, transform: "translateY(50px)" } },
}

export type Animation = typeof anims[keyof typeof anims]

///////////////////////////////////////////////////////////////////////////////



