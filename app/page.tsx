import {
  ShieldCheck,
  Gift,
  Zap,
  Plane,
  TrainFront,
  Bus,
  Hotel,
  FileText
} from "lucide-react";
import SearchBox from "../searchbox";
import BookingDemo from "../bookingdemo";
const services = [
  ["Flights", Plane],
  ["Trains", TrainFront],
  ["Bus", Bus],
  ["Hotels", Hotel],
  ["Visa", FileText]
];

export default function Home() {
  return (
    <main>

      <header className="absolute top-0 left-0 right-0 z-20 text-white">

        <div className="container flex items-center justify-between py-5">

          <a
            href="/"
            className="text-2xl font-black"
          >
            tripora<span className="text-cyan-200">.</span>
          </a>

          <nav className="hidden md:flex gap-7 text-sm font-bold">
            <a href="#book">Book</a>
            <a href="#services">Services</a>
            <a href="#rewards">Rewards</a>
            <a href="#security">Security</a>
          </nav>

          <a
            href="/login"
            className="btn btn-light text-sm"
          >
            Sign in
          </a>

        </div>

      </header>

      <section className="hero min-h-162.5 pt-32 pb-20">

        <div className="container">

          <div className="max-w-3xl pt-8">

            <p className="font-black text-cyan-100 tracking-widest">
              TRAVEL YOUR WAY
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-4">
              One trip.
              <br />
              Everything handled.
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-2xl">
              Flights, trains, buses, hotels and visa
              services in one fast, original travel
              platform.
            </p>

          </div>

          <div
            id="book"
            className="mt-12"
          >
            <SearchBox />
          </div>

        </div>

      </section>

      <section
        id="security"
        className="container -mt-10 relative grid md:grid-cols-3 gap-5"
      >

        {[
          [
            ShieldCheck,
            "Secure by design",
            "TLS, protected server APIs, secure authentication and payment-provider tokenization."
          ],
          [
            Gift,
            "Tripora Points",
            "Reward eligible bookings with configurable points and promotional offers."
          ],
          [
            Zap,
            "Fast booking",
            "A simple responsive interface designed for quick search and checkout."
          ]
        ].map(([Icon, title, text]: any) => (
          <div
            className="card p-6"
            key={title}
          >
            <Icon
              className="text-blue-600"
              size={31}
            />

            <h3 className="font-black text-xl mt-4">
              {title}
            </h3>

            <p className="text-slate-600 mt-2">
              {text}
            </p>
          </div>
        ))}

      </section>

      <section
        id="services"
        className="container py-20"
      >

        <p className="text-blue-600 font-black">
          TRIPORA SERVICES
        </p>

        <h2 className="text-4xl font-black mt-2">
          Everything for your next journey
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">

          {services.map(([name, Icon]: any) => (
            <div
              className="card p-5 hover:-translate-y-1 transition"
              key={name}
            >
              <Icon className="text-blue-600" />

              <h3 className="font-bold mt-5">
                {name}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Search and manage options
              </p>
            </div>
          ))}

        </div>

      </section>

      <section
        id="rewards"
        className="bg-slate-950 text-white py-20"
      >

        <div className="container md:flex justify-between items-center gap-10">

          <div>

            <p className="text-cyan-300 font-bold">
              TRIPORA REWARDS
            </p>

            <h2 className="text-4xl font-black mt-2">
              Travel more. Earn more.
            </h2>

            <p className="text-slate-300 mt-4 max-w-xl">
              Earn points on eligible bookings, use
              coupons and manage every trip from one
              account.
            </p>

          </div>

          <a
            href="/register"
            className="btn btn-light mt-8 md:mt-0"
          >
            Join Tripora
          </a>

        </div>

      </section>

      <section className="container py-16">
        <BookingDemo />
      </section>

      <footer className="container py-10 text-sm text-slate-500 flex flex-wrap justify-between gap-5 border-t">

        <b className="text-slate-900">
          tripora.online
        </b>

        <span>Privacy</span>
        <span>Terms</span>
        <span>Refund policy</span>
        <span>Support</span>

        <span>
          © 2026 Tripora
        </span>

      </footer>

    </main>
  );
}