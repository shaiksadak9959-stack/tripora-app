declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { label: "Bookings", value: "1,284" },
  { label: "Users", value: "8,421" },
  { label: "Revenue", value: "₹18.4L" },
  { label: "Pending visas", value: "43" },
];

const modules: string[] = [
  "Users",
  "Bookings",
  "Payments",
  "Refunds",
  "Coupons",
  "Rewards",
  "Visa Applications",
  "Supplier APIs",
  "Reports",
];

export default function Admin() {
return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">Tripora Admin</h1>

          <a href="/" className="font-bold hover:text-slate-300">
            Website
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-4xl font-black text-slate-900">Dashboard</h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>

              <p className="mt-3 text-3xl font-black text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
          <h3 className="text-xl font-black text-slate-900">Admin Modules</h3>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {modules.map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-xl border border-slate-200 p-4 text-left font-bold text-slate-800 hover:bg-slate-50"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
</section>
</main>
);
}

