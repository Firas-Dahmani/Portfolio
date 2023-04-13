import NotFound from './pages/notfound';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import Index from './pages/index';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Define the catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
