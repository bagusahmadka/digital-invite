import prisma from "@/lib/db";
import { weddingConfig } from "@/config/wedding.config";

// Force dynamic rendering for admin dashboard
export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const wishes = await prisma.guestWish.findMany({
    orderBy: { createdAt: "desc" },
  });

  const rsvps = await prisma.rsvp.findMany({
    orderBy: { createdAt: "desc" },
  });

  const totalGuests = rsvps
    .filter((r: any) => r.status === "Hadir")
    .reduce((sum: number, r: any) => sum + r.guestCount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">{weddingConfig.meta.title}</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total RSVP Hadir</h3>
            <p className="text-3xl font-bold text-gray-900">{rsvps.filter((r: any) => r.status === "Hadir").length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Estimasi Tamu (Orang)</h3>
            <p className="text-3xl font-bold text-gray-900">{totalGuests}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Ucapan</h3>
            <p className="text-3xl font-bold text-gray-900">{wishes.length}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* RSVP Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xl font-semibold text-gray-800">Daftar RSVP</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-600 font-medium">
                  <tr>
                    <th className="px-6 py-4">Nama</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Jumlah</th>
                    <th className="px-6 py-4">WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rsvps.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-500">Belum ada RSVP</td>
                    </tr>
                  ) : (
                    rsvps.map((rsvp) => (
                      <tr key={rsvp.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{rsvp.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            rsvp.status === "Hadir" ? "bg-green-100 text-green-700" :
                            rsvp.status === "Tidak Hadir" ? "bg-red-100 text-red-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {rsvp.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{rsvp.guestCount} Orang</td>
                        <td className="px-6 py-4 text-gray-600">{rsvp.phone || "-"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Wishes List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xl font-semibold text-gray-800">Ucapan & Doa</h2>
            </div>
            <div className="p-0">
              <ul className="divide-y divide-gray-100 h-[600px] overflow-y-auto custom-scrollbar">
                {wishes.length === 0 ? (
                  <li className="p-8 text-center text-gray-500">Belum ada ucapan</li>
                ) : (
                  wishes.map((wish) => (
                    <li key={wish.id} className="p-6 hover:bg-gray-50/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{wish.name}</h4>
                        <span className="text-xs text-gray-500">
                          {new Date(wish.createdAt).toLocaleDateString('id-ID', {
                            day: 'numeric', month: 'short', year: 'numeric',
                            hour: '2-digit', minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">"{wish.message}"</p>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
