import './App.css';
import SplitText from "./SplitText";
import AnimatedContent from './module/AnimatedContent';
import CircularGallery from './CircularGallery';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function App() {
  return (
    <div className="App">
      <h1>Wunderschönen guten Morgen</h1>

      <h2>Mein erstes Projekt.
      </h2>
      <SplitText
        text="Ich liebe React"
        className="text-2xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <div>Animation</div>
      </AnimatedContent>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    
    
    
    
    
    
    
    
    
    </div>
  );
}

export default App;
