import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import ScrollManager from "../../components/ScrollManager/ScrollManager";
import "./landing.scss";
import "../../components/Social-Link/Social-link";
import SocialLink from "../../components/Social-Link/Social-link";

import { animate, createScope, engine, utils } from "animejs";
import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "motion/react";

const rssURL = "https://anchor.fm/s/145be03c/podcast/rss";
const engineDampening = 9.8;

const getRssData = async () => {
  try {
    const response = await axios.get(rssURL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

getRssData();

function Landing(props) {
  const root = useRef(null);
  const scope = useRef(null);

  let [scrollDelta, setScrollDelta] = useState(0);

  //   const handleEngineSpeed = (rawEngineSpeed) => {
  //     var finalEngineSpeed = rawEngineSpeed

  //     if (rawEngineSpeed > 1)
  //         finalEngineSpeed = rawEngineSpeed - engineDampening;
  //     if (finalEngineSpeed < 1)
  //         finalEngineSpeed = 1

  //     // if (engine.speed != finalEngineSpeed)
  //     //   utils.sync(() => {
  //     //     engine.speed = finalEngineSpeed;
  //     //   });

  //     setEngineSpeed(finalEngineSpeed)
  //   }

  //   useEffect(() => {
  //     // console.log("engine speed: ", engineSpeed)
  //     if (engine.speed != engineSpeed)
  //       utils.sync(() => {
  //         engine.speed = engineSpeed;
  //       });

  //   }, [engineSpeed]);

  //   useEffect(() => {
  //     // console.log("Scroll Delta applied to speed: ", scrollDelta)
  //     handleEngineSpeed(engineSpeed + scrollDelta * .1);
  //     // console.log("Engine Speed: ", engineSpeed)
  //   }), [scrollDelta];

  useEffect(() => {
    // AnimeJs animations
    scope.current = createScope({ root }).add((self) => {
      // Animations go here
      animate(".vortex-circle", {
        rotateZ: ["0deg", "360deg"],
        duration: 25000,
        playbackRate: 1,
        playbackEase: "linear",
        loop: true,
      });

      animate(".spiral-fire", {
        rotateZ: ["0deg", "360deg"],
        duration: 15000,
        playbackRate: 1,
        playbackEase: "linear",
        loop: true,
      });

      animate(".crow", {
        rotateZ: ["0deg", "360deg"],
        duration: 30000,
        playbackRate: 1,
        playbackEase: "linear",
        loop: true,
      });

      animate(".microphone", {
        rotateZ: ["0deg", "360deg"],
        duration: 15000,
        playbackRate: 1,
        playbackEase: "linear",
        loop: true,
      });

      animate(".vortex-star", {
        rotateZ: ["0deg", "180deg", "360deg"],
        scale: ["1", "1.5", "1"],
        duration: 10000,
        playbackRate: 1,
        playbackEase: "linear",
        loop: true,
      });
    });

    // AnimeJs Cleanup
    return () => scope.current.revert();
  }, []);

// Framer Motion Scroll Handling
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 25,
    stiffness: 100,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    if (velocityFactor.get() !== 0) {
         utils.sync(() => {
          engine.speed = 1 + Math.abs(velocityFactor.get());
        });
    }
  });

  return (
    <div className="landing-page" ref={root}>
      <ScrollManager setScrollDelta={setScrollDelta} />
      <div className="pane1">
        <img className="human1" src={`.${import.meta.env.VITE_PATH_PREFIX}/img/human.png`} alt="everyday human" />
        <img
          className="menacing1"
          src={`.${import.meta.env.VITE_PATH_PREFIX}/img/menacing.png`}
          alt="menacing kanji"
        ></img>
        <img
          className="menacing2"
          src={`.${import.meta.env.VITE_PATH_PREFIX}/img/menacing.png`}
          alt="menacing kanji"
        ></img>
        <img
          className="menacing3"
          src={`.${import.meta.env.VITE_PATH_PREFIX}/img/menacing.png`}
          alt="menacing kanji"
        ></img>
        <div className="text">
          <h1 className="appear-up-0">Parker, Brendon, and JoJo</h1>
          <h2 className="appear-up-1">
            <b>The</b> JoJo's Bizarre Adventure Watch/Re&#8209;Watch Podcast
          </h2>
          <a href="#pane2">
            <Button className="appear-up-2">Learn More</Button>
          </a>
        </div>
      </div>
      <div className="pane2" id="pane2">
        <div className="text">
          <div className="rift">
            <img
              className="vortex-circle"
              src={`.${import.meta.env.VITE_PATH_PREFIX}/img/vortex-circle.svg`}
              alt="vortex circle background"
            ></img>
            <img
              className="vortex-star"
              src={`.${import.meta.env.VITE_PATH_PREFIX}/img/Vortex-Star.svg`}
              alt="vortex star background"
            ></img>
            <img
              className="spiral-fire"
              src={`.${import.meta.env.VITE_PATH_PREFIX}/img/spiral-fire.svg`}
              alt="vortex fire background"
            ></img>
            <img
              className="microphone"
              src={`.${import.meta.env.VITE_PATH_PREFIX}/img/microphone.svg`}
              alt="podcast microphone"
            ></img>
            <img className="crow" src={`.${import.meta.env.VITE_PATH_PREFIX}/img/crow.svg`} alt="crow"></img>
          </div>
          <h2>
            The perfect reason to watch through JoJo's Bizarre Adventure for the
            first time or the fifteenth
          </h2>
          <div className="people">
            <p>
              Parker hase been obsessed with the series for years, reading the
              manga and watching through the anime several times.
            </p>
            <p>
              Brendon has remained unexposed to the series by living in the
              shadows since the anime's original release in 2012.
            </p>
          </div>
          <p>
            When they are brought together in the presence of microphones with
            the intent to discuss JoJo, an interdimentional rift opens and
            causes the pair to become an etheral diety whose sole purpose is to
            keep listeners engaged for the length of the episode
          </p>
        </div>
      </div>
      <div className="pane3">
        <div className="episode">
          <h2>Listen to our Latest Episode:</h2>
          <br></br>
          <div className="latest-episode">
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/show/1S5SYWaZfj41svKhQhXFzt?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="social">
          <h2>Where to Appease the Entertainment Diety:</h2>
          <br></br>
          <div className="social-links">
            <div className="col1">
              <SocialLink
                img="https://d12xoj7p9moygp.cloudfront.net/images/podcast/logo-square/006/apple_podcasts.png"
                label="Apple Podcasts"
                link="https://podcasts.apple.com/us/podcast/parker-brendon-and-jojo/id1596781845"
              ></SocialLink>
              <SocialLink
                img={`.${import.meta.env.VITE_PATH_PREFIX}/img/rss.png`}
                rss="true"
                link="https://anchor.fm/s/145be03c/podcast/rss"
                label="Copy RSS Feed"
              ></SocialLink>
            </div>
            <div className="col2">
              <SocialLink
                img="https://d12xoj7p9moygp.cloudfront.net/images/podcast/logo-square/006/spotify.png"
                label="Spotify"
                link="https://open.spotify.com/show/1S5SYWaZfj41svKhQhXFzt"
              ></SocialLink>
              <SocialLink
                img={`.${import.meta.env.VITE_PATH_PREFIX}/img/x_logo.svg`}
                label="X"
                link="https://twitter.com/PBAndJJPod"
              ></SocialLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
