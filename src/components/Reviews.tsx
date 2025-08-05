import { Card } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Best Rolex in Kigali! The deluxe version with avocado is absolutely divine. Plus the craft beer selection is incredible!",
      rating: 5,
      location: "Kigali"
    },
    {
      name: "James K.",
      text: "Amazing street food vibes with quality you can taste. The spicy Rolex is my go-to, and their cocktails are surprisingly creative!",
      rating: 5,
      location: "Nyamirambo"
    },
    {
      name: "Emma L.",
      text: "Fair prices, fresh ingredients, and the staff is so friendly. This place captures the real spirit of Rwandan street food culture.",
      rating: 5,
      location: "Kimihurura"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-muted'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-card overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - here's what our customers love about Now Now Rolex
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.name} 
              className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02] md:hover:scale-105 animate-bounce-in p-4 md:p-6 w-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-background font-bold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 animate-fade-in">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-muted/20 rounded-full px-4 sm:px-6 py-3 max-w-full">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-foreground font-semibold text-sm sm:text-base">4.9/5 Average Rating</span>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <span className="text-muted-foreground text-sm sm:text-base">200+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;