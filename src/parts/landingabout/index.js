import React from 'react';
import './index.scss';
import AboutBackground from 'assets/images/background/about-background.png';

export default function index() {
  return (
    <section id="about">
      <figure className="background">
        <img src={AboutBackground} alt="" className="about__background" />
      </figure>

      <div className="about__description" data-speed="0.2">
        Awkward introduction? Clammy handshake? Nah, let’s go in for a virtual
        bear hug and a quick two-minute spiel about who I am, because who I am
        is your new hyper-talented mate – a creative director and visual
        connoisseur with a background and degree in commercial and
        photojournalistic photography. <br />
        <br />
        <span>
          As a multidisciplinary visual creator, I have a keen focus on film and
          an insatiable obsession with storytelling. I started out shooting
          weddings, where I learned the mystic and lesser-studied art of making
          people feel comfortable in front of a camera; from there I branched
          out into commercial work before founding my own production company,
          fēlan films (derived from the origin of the word ‘FEELING’...you
          feel?).
          <br />
          <br />
          Collaboration is the lifeblood of the moving image and a large part of
          why I adore what I do. Our team learned so much through creating
          content for top-tier clients that we felt downright professorial and
          accepted our humble duty to share the fēlan genius with the masses.
          Corduroy jackets and mismatched elbow patches donned, we created
          Moments in a Minute – a complete guide to creating meaningful,
          impactful content that grabs people by the eyeballs for sixty seconds
          and refuses to let go.
          <br />
          <br />
          So that’s We in a nutshell. If you want to learn more about me
          (especially how I ended up inside a gigantic nut), take a peek around
          the rest of my site.
        </span>
      </div>
    </section>
  );
}
