"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import OpeningScreen from "@/components/OpeningScreen";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Salam from "@/components/Salam";
import Profile from "@/components/Profile";
import LoveStory from "@/components/LoveStory";
import EventDetail from "@/components/EventDetail";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import GuestWishes from "@/components/GuestWishes";
import Gift from "@/components/Gift";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setGuestName(to);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  return (
    <main className="relative min-h-screen selection:bg-gold-metallic/30 selection:text-dark-brown">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isOpened && !isLoading && (
          <OpeningScreen 
            key="opening" 
            onOpen={handleOpenInvitation} 
            guestName={guestName} 
          />
        )}
      </AnimatePresence>

      {isOpened && (
        <div className="relative">
          <MusicPlayer isPlaying={isPlaying} togglePlay={() => setIsPlaying(!isPlaying)} />
          
          <Hero />
          <Salam />
          <Profile />
          <LoveStory />
          <EventDetail />
          <Countdown />
          <Gallery />
          <RSVP />
          <GuestWishes />
          <Gift />
          <Footer />

          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 w-full h-1 z-[70] pointer-events-none">
            <div className="h-full bg-gold-metallic origin-left transition-transform duration-300" style={{ transform: 'scaleX(var(--scroll-progress, 0))' }} id="scroll-bar" />
          </div>
        </div>
      )}

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', () => {
            const h = document.documentElement, 
                  b = document.body,
                  st = 'scrollTop',
                  sh = 'scrollHeight';
            const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
            const scrollBar = document.getElementById('scroll-bar');
            if (scrollBar) {
              scrollBar.style.transform = 'scaleX(' + Math.min(Math.max(percent, 0), 1) + ')';
            }
          });
        `
      }} />
    </main>
  );
}
