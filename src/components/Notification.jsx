'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    review: 'Absolutely loved the design! Highly professional and creative.',
    avatar: '/images/avatar1.jpg', // replace with your images
    rating: 5,
  },
  {
    name: 'Michael Smith',
    review: 'Amazing work! My brand identity has never looked better.',
    avatar: '/images/avatar2.jpg',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    review: 'Fast, creative, and detail-oriented. Highly recommended!',
    avatar: '/images/avatar3.jpg',
    rating: 5,
  },
];

export default function LiveReviewNotification() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setVisible(false);
      setTimeout(() => setVisible(true), 100);
    }, 5000); // Change review every 5s

    return () => clearInterval(interval);
  }, []);

  const { name, review, avatar, rating } = reviews[current];

  return (
    <div className="fixed bottom-8 right-8 md:right-12 w-80 md:w-96 z-50">
      <div
        className={`transition-transform duration-500 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        } bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl shadow-2xl p-5 text-white flex gap-4 items-start`}
      >
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-white object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-1">
            {Array.from({ length: rating }).map((_, idx) => (
              <Star key={idx} className="w-4 h-4 text-yellow-300" />
            ))}
          </div>
          <p className="text-sm md:text-base font-medium">{review}</p>
          <span className="block mt-2 text-white/80 text-xs">{name}</span>
        </div>
      </div>
    </div>
  );
}
