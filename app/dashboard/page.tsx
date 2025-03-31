export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Нүүр</h1>
      <div className="bg-white rounded-lg border border-[#f2f2f2] p-6">
        <p>Тавтай морил, Менежер Бат-Очир!</p>
        <p className="mt-4">Өнөөдөр 2025 оны 3-р сарын 31.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#f8f9fa] p-4 rounded-lg">
            <h3 className="font-medium">Нийт өрөөнүүд</h3>
            <p className="text-2xl font-bold mt-2">496</p>
          </div>
          <div className="bg-[#f8f9fa] p-4 rounded-lg">
            <h3 className="font-medium">Өнөөдрийн захиалга</h3>
            <p className="text-2xl font-bold mt-2">24</p>
          </div>
          <div className="bg-[#f8f9fa] p-4 rounded-lg">
            <h3 className="font-medium">Зочид</h3>
            <p className="text-2xl font-bold mt-2">86</p>
          </div>
        </div>
      </div>
    </div>
  )
}

