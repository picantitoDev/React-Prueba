import { motion } from 'framer-motion';

const user = {
  name: 'Piero Arturo',
  role: 'Software Engineer',
  imageUrl: 'https://i.imgur.com/4mUoNi8.png',
  description: 'Passionate about clean code, creative solutions, and React wizardry.',
};

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-purple-600 text-sm font-medium">{user.role}</p>
          <p className="text-gray-600 text-sm mt-2">{user.description}</p>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Contact
          </button>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition">
            Portfolio
          </button>
        </div>
      </motion.div>
    </div>
  );
}
