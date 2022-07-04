const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 700,

  rotate: {
    y: 200
  }
})

scrollReveal.reveal(
  `#Home .image, #Home .text,
#AboutUs .image, #AboutUs .text,
#OurServices .text, #OurServices .cards .card,
#WhatDoTheySayAboutUs .text, #WhatDoTheySayAboutUs .swiper,
#HowToFindUs .text, #HowToFindUs .maps, #HowToFindUs .contact,
#Footer .text, #Footer .socialNetworks  `,
  { interval: 100 }
)
