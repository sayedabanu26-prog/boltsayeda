const images = [
  {
    url: 'https://images.pexels.com/photos/5849180/pexels-photo-5849180.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bridal Masterpiece',
    category: 'Bridal'
  },
  {
    url: 'https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Traditional Elegance',
    category: 'Traditional'
  },
  {
    url: 'https://images.pexels.com/photos/8828554/pexels-photo-8828554.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Full Hand Design',
    category: 'Bridal'
  },
  {
    url: 'https://images.pexels.com/photos/7689986/pexels-photo-7689986.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Floral Motif',
    category: 'Contemporary'
  },
  {
    url: 'https://images.pexels.com/photos/6896396/pexels-photo-6896396.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Festive Design',
    category: 'Party'
  },
  {
    url: 'https://images.pexels.com/photos/7689820/pexels-photo-7689820.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Contemporary Art',
    category: 'Contemporary'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning henna designs that showcase the artistry and attention to detail in every creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-amber-300 mb-1">{image.category}</p>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
