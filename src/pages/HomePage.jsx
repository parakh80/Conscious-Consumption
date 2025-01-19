import { useEffect, useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import MinimalismItem from '../components/MinimalismItem';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


function HomePage() {
  const missionRef = useRef(null);
  const minimalismRef = useRef(null);

  const missionVisible = useIntersectionObserver(missionRef, 0.1);
  const minimalismVisible = useIntersectionObserver(minimalismRef, 0.1);

  
  // New introduction to "Embracing Minimalism"
  const minimalismIntroduction = `Embracing minimalism allows us to discover the profound beauty in simplicity.
  By owning less, life becomes more enjoyable and less complicated, leading us closer to true freedom—a state that only humans can attain through mindful living.
  This simplicity is not just beneficial for us but also nurtures nature, reflecting harmony between our lives and the environment.`;

  // Updated minimalism benefits inspired by Indian philosophy
  const minimalismBenefits = [
    {
      title: 'Inner Peace and Contentment',
      content:
        'Inspired by the teachings of the Bhagavad Gita, minimalism cultivates detachment from material possessions, leading to inner tranquility. When we reduce our desires, we find contentment within ourselves rather than in external objects.',
    },
    {
      title: 'Harmony with Nature',
      content:
        'The Upanishads highlight the interconnectedness of all beings. Minimalism encourages us to consume only what we need, reducing our impact on the environment and living in harmony with nature, our nurturing mother.',
    },
    {
      title: 'Freedom from Attachment',
      content:
        'By letting go of excess belongings, we free ourselves from attachments that can hinder spiritual growth. As the Gita suggests, overcoming attachment leads to liberation and a deeper understanding of the self.',
    },
    {
      title: 'Clarity of Purpose',
      content:
        'Minimalism helps us focus on what truly matters. Echoing the Upanishadic quest for self-realization, owning less allows us to direct our energy toward personal growth, wisdom, and fulfilling our life\'s purpose.',
    },
  ];

  return (
    <div>
      <HeroSection imageSrc="/images/forest-fire.jpg">
              <h1 className="text-white text-5xl font-bold text-center px-4">
                Embrace Sustainable Living for a Better Tomorrow
              </h1>
            </HeroSection>
      <div
        ref={missionRef}
        className={`container mx-auto py-8 mt-16 transition-transform duration-700 ${
          missionVisible ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <blockquote className="text-lg italic border-l-4 border-green-500 pl-4 mb-6">
          "Let us embrace a life of simplicity and mindful consumption, taking only what we truly need. Our purpose isn't to deplete Earth's resources but to seek freedom in less and find fulfillment beyond material possessions. By cherishing our planet as the nurturing mother she is, we can preserve her natural beauty for generations to come. Let's commit to protecting our highest mother, Earth, by living sustainably and thoughtfully."
        </blockquote>
      </div>

      <div
        ref={minimalismRef}
        className={`container mx-auto py-8 transition-transform duration-700 ${
          minimalismVisible ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">Embracing Minimalism</h2>
        <p className="text-lg mb-6">{minimalismIntroduction}</p>
        <div className="mb-4">
          {minimalismBenefits.map((benefit, index) => (
            <MinimalismItem
              key={index}
              title={benefit.title}
              content={benefit.content}
            />
          ))}
        </div>
      </div>


      <HeroSection imageSrc="/images/sea.jpg" height="h-64" className="my-4">
      <h1 className="text-white text-3xl font-bold text-center px-4">
                It is not the man who has too litle, but the man who craves more, that is poor.
                <br />
                <br />
                Seneca
              </h1>
            </HeroSection>

    <HeroSection imageSrc="/images/star.jpg" height="h-64" className="mb-4">
              <h1 className="text-white text-3xl font-bold text-center px-4">
                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
                <br />
                <br />
                Albert Einstein
              </h1>
            </HeroSection>

      <div className="container mx-auto py-8">
        <p className="text-xl font-semibold text-center bg-green-100 text-green-800 py-4 px-6 rounded-md">
          Please explore our navigation links above to learn more about living a sustainable life and understanding global warming and tips.
        </p>
      </div>
      
    </div>
  );
}

export default HomePage;