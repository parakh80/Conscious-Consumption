import TipCard from '../components/TipCard';
import { MdLightbulbOutline, MdPowerOff, MdThermostat, MdWbSunny } from 'react-icons/md';
import { FaRecycle, FaAppleAlt, FaTrashAlt, FaShoppingBag, FaShower, FaWrench } from 'react-icons/fa';
import { IoWater } from 'react-icons/io5';
import { RiRecycleLine } from 'react-icons/ri';
import { FaBus, FaCarSide, FaBicycle, FaTools } from 'react-icons/fa';

const tips = [
  {
    category: 'Energy Conservation',
    items: [
      {
        title: 'Use LED Bulbs',
        description: 'LED bulbs use up to 80% less energy than incandescent bulbs and last significantly longer.',
        icon: MdLightbulbOutline,
      },
      {
        title: 'Unplug Idle Electronics',
        description: 'Unplug devices when not in use to prevent phantom energy consumption.',
        icon: MdPowerOff,
      },
      {
        title: 'Install Programmable Thermostats',
        description: 'Automate your heating and cooling to reduce energy usage when you’re not home.',
        icon: MdThermostat,
      },
      {
        title: 'Utilize Natural Lighting',
        description: 'Open curtains during the day to light your home naturally, reducing the need for artificial lighting.',
        icon: MdWbSunny,
      },
    ],
  },
  {
    category: 'Waste Reduction',
    items: [
      {
        title: 'Practice the 3 R’s',
        description: 'Reduce, Reuse, and Recycle to minimize waste sent to landfills.',
        icon: FaRecycle,
      },
      {
        title: 'Compost Organic Waste',
        description: 'Turn food scraps and yard waste into nutrient-rich compost for gardening.',
        icon: FaAppleAlt,
      },
      {
        title: 'Avoid Single-Use Plastics',
        description: 'Opt for reusable items like cloth bags, bottles, and containers to reduce plastic waste.',
        icon: FaTrashAlt,
      },
      {
        title: 'Buy in Bulk',
        description: 'Purchasing in bulk reduces packaging waste and often saves money.',
        icon: FaShoppingBag,
      },
    ],
  },
  {
    category: 'Water Conservation',
    items: [
      {
        title: 'Fix Leaks Promptly',
        description: 'Repair dripping faucets and leaky pipes to prevent water waste.',
        icon: FaWrench,
      },
      {
        title: 'Install Low-Flow Fixtures',
        description: 'Use low-flow showerheads and faucets to reduce water usage without sacrificing performance.',
        icon: FaShower,
      },
      {
        title: 'Collect Rainwater',
        description: 'Use rain barrels to collect water for gardening and outdoor cleaning.',
        icon: RiRecycleLine,
      },
      {
        title: 'Shorten Showers',
        description: 'Limiting showers to 5 minutes can save gallons of water each time.',
        icon: IoWater,
      },
    ],
  },
  {
    category: 'Sustainable Transportation',
    items: [
      {
        title: 'Use Public Transit',
        description: 'Reduce your carbon footprint by using buses, trains, or subways instead of personal vehicles.',
        icon: FaBus,
      },
      {
        title: 'Carpool or Ride-Share',
        description: 'Sharing rides decreases the number of vehicles on the road, cutting down emissions.',
        icon: FaCarSide,
      },
      {
        title: 'Bike or Walk',
        description: 'Choose cycling or walking for short distances to promote health and sustainability.',
        icon: FaBicycle,
      },
      {
        title: 'Maintain Your Vehicle',
        description: 'Regular maintenance improves fuel efficiency and reduces emissions.',
        icon: FaTools,
      },
    ],
  },
];


function TipsPage() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Sustainable Living Tips</h2>
      {tips.map((tipCategory, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            {tipCategory.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {tipCategory.items.map((tip, idx) => (
              <TipCard
                key={idx}
                title={tip.title}
                description={tip.description}
                Icon={tip.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TipsPage;