import './App.css';
import LandingPage from './pages/LandingPage';
import NamePage from './components/NamePage';
import { motion } from "framer-motion";
import SkillPage from './components/SkillsPage';
import SoftSkills from './pages/SoftSkill';
import TimeLine from './pages/TimeLine';
import LangInter from './pages/Language&Interest';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div className='overflow-hidden'>
    <motion.div
          initial={{
            opacity: 0,
            // drop in from the top
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1 }}
          
        ><LandingPage /></motion.div>
    
    <NamePage />
    <SkillPage />
    <SoftSkills />
    <TimeLine />
    <LangInter />
    <ContactMe />
    </div>
  );
}

export default App;
