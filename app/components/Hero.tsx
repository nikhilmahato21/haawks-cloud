import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import MagicButton from "./ui/MagicButton";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";

const Hero = () => {
  return (
    <div className="relative">
      <div>
        <BackgroundGradientAnimation>
          <div className="absolute z-20 inset-0 flex flex-col gap-5 top-[8rem] items-center text-white font-bold px-4  text-3xl text-center md:text-4xl ">
            <p className="bg-clip-text capitalize text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 max-w-4xl">
              Making decentralized cloud storage most reliable warehouse of
              global data
            </p>
            <p className="bg-clip-text text-transparent px-6 drop-shadow-2xl text-xl bg-gradient-to-b from-white/80 to-white/20 max-w-4xl">
              Embrace yourself in the world of Privacy
            </p>

            <div className="flex flex-col gap-3 md:flex-row">
              <a>
                <MagicButton
                  title="try our decloud now!"
                  otherClasses="text-xs px-2 md:text-sm md:px-7"
                />
              </a>
              <a>
                <MagicButton
                  title="read documentation"
                  otherClasses="text-xs px-2 md:text-sm md:px-7"
                />
              </a>
            </div>
            <div className="">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image:
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1732120328/photo-1529390079861-591de354faf5_g35bch.jpg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    image:
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1732120328/photo-1529390079861-591de354faf5_g35bch.jpg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image:
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1732120328/photo-1529390079861-591de354faf5_g35bch.jpg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image:
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1732120328/photo-1529390079861-591de354faf5_g35bch.jpg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image:
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1732120328/photo-1529390079861-591de354faf5_g35bch.jpg",
  },
];
export default Hero;
