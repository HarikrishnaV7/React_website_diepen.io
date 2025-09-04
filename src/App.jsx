import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import "./App.css";
import Wwo from './components/Wwo';
import Container from './components/Container';
import Container2 from './components/Container2';
import Benefits from './components/Benefits';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Nst from './components/Nst';
import Testimonials from './components/Testimonials';
import Wom from './components/Wom';
import Container5 from './components/Container5';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
          sec.classList.add("active");
        } else {
          sec.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar should stay outside sections */}
      <Navbar />

      <section id='Services' className="section"><Container /></section>
      <section className="section"><Wwo /></section>
      <section id='Whoweare' className="section"><Container2 /></section>
      <section className="section"><Benefits /></section>
      <section className="section"><Container3 /></section>
      <section className="section"><Container4 /></section>
      <section className="section"><Nst /></section>
      <section id='Testimonials' className="section"><Testimonials /></section>
      <section className="section"><Wom /></section>
      <section className="section"><Container5 /></section>
      <Footer />
    </>
  )
}

export default App;
