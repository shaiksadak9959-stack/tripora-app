export default function MyTrips() {

  return (
    <main className="min-h-screen">

      <header className="bg-white border-b">
        <div className="container py-5 flex justify-between">
          <a
            href="/"
            className="text-2xl font-black text-blue-600"
          >
            tripora.
          </a>

          <a href="/" className="font-bold">
            Home
          </a>
        </div>
      </header>

      <section className="container py-12">

        <h1 className="text-4xl font-black">
          My Trips
        </h1>

        <p className="text-slate-500 mt-2">
          Your flights, trains, buses, hotels and
          visa applications will appear here.
        </p>

        <div className="card mt-8 p-8 text-center">

          <h2 className="text-xl font-black">
            No trips yet
          </h2>

          <p className="text-slate-500 mt-2">
            Start searching for your next journey.
          </p>

          <a
            href="/"
            className="btn btn-primary mt-5"
          >
            Start booking
          </a>

        </div>

      </section>

    </main>
  );
}