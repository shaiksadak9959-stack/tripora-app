export default function RewardsPage() {

  return (
    <main className="min-h-screen">

      <header className="bg-slate-950 text-white">
        <div className="container py-5">
          <a
            href="/"
            className="text-2xl font-black"
          >
            tripora.
          </a>
        </div>
      </header>

      <section className="container py-16">

        <p className="text-blue-600 font-black">
          TRIPORA REWARDS
        </p>

        <h1 className="text-5xl font-black mt-3">
          Travel more.
          <br />
          Earn more.
        </h1>

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="card p-7">
            <p className="text-slate-500">
              Current points
            </p>
            <p className="text-4xl font-black mt-3">
              0
            </p>
          </div>

          <div className="card p-7">
            <p className="text-slate-500">
              Membership
            </p>
            <p className="text-4xl font-black mt-3">
              Silver
            </p>
          </div>

          <div className="card p-7">
            <p className="text-slate-500">
              Available offers
            </p>
            <p className="text-4xl font-black mt-3">
              0
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}